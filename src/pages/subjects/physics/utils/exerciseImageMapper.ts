const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp'] as const;
const QUESTION_SUFFIXES = ['question', 'diagram', 'graph', 'figure'] as const;

export function getPhysicsExerciseImageCandidates(sectionId: string, exerciseId: string): string[] {
  const basePath = `/physics/exercises/${sectionId}/${exerciseId}`;
  const candidates: string[] = [];

  for (const suffix of QUESTION_SUFFIXES) {
    for (const ext of IMAGE_EXTENSIONS) {
      candidates.push(`${basePath}-${suffix}.${ext}`);
    }
  }

  // Remove duplicates while preserving order
  return Array.from(new Set(candidates));
}

const existenceCache = new Map<string, boolean>();

export async function checkImageExists(imagePath: string, timeoutMs: number = 3000): Promise<boolean> {
  if (existenceCache.has(imagePath)) {
    return existenceCache.get(imagePath)!;
  }

  if (typeof Image === 'undefined') {
    existenceCache.set(imagePath, false);
    return false;
  }

  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;

    const settle = (exists: boolean) => {
      if (settled) return;
      settled = true;
      existenceCache.set(imagePath, exists);
      resolve(exists);
    };

    const timeoutId = window.setTimeout(() => settle(false), timeoutMs);

    img.onload = () => {
      window.clearTimeout(timeoutId);
      settle(img.complete && img.naturalHeight > 0);
    };

    img.onerror = () => {
      window.clearTimeout(timeoutId);
      settle(false);
    };

    img.src = imagePath;
  });
}

export async function filterExistingImages(
  imagePaths: string[],
  concurrency: number = 4
): Promise<string[]> {
  if (imagePaths.length === 0) return [];

  const results: boolean[] = new Array(imagePaths.length).fill(false);
  const queue: number[] = imagePaths.map((_, index) => index);
  const inProgress = new Set<number>();

  const processNext = async (): Promise<void> => {
    if (queue.length === 0) return;
    if (inProgress.size >= concurrency) return;

    const index = queue.shift()!;
    inProgress.add(index);

    try {
      results[index] = await checkImageExists(imagePaths[index]);
    } catch {
      results[index] = false;
    } finally {
      inProgress.delete(index);
      await processNext();
    }
  };

  const workers = Array(Math.min(concurrency, imagePaths.length))
    .fill(0)
    .map(() => processNext());

  await Promise.all(workers);
  return imagePaths.filter((_, index) => results[index]);
}
