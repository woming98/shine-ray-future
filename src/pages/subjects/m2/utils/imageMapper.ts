/**
 * 图片路径映射工具
 * 根据题目信息生成和查找对应的图片路径
 */

/**
 * 根据年份和题号生成图片路径
 * @param year 年份（如 "2012"）
 * @param question 题号（如 "9"）
 * @param part 子题标识（可选，如 "a", "b", "c"）
 * @returns 图片路径
 */
export function getProblemImagePath(
  year: string,
  question: string,
  part?: string
): string {
  const basePath = `/m2-problems/${year}Q${question}`;
  if (part) {
    return `${basePath}${part}.png`;
  }
  return `${basePath}.png`;
}

/**
 * 查找题目的所有相关图片（包括主图和子题图）
 * @param year 年份
 * @param question 题号
 * @returns 图片路径数组
 */
export function findProblemImages(
  year: string,
  question: string
): string[] {
  const images: string[] = [];

  // 主图
  const mainPath = getProblemImagePath(year, question);
  images.push(mainPath);

  // 可能的子题图片（a-z）
  for (let i = 0; i < 26; i++) {
    const part = String.fromCharCode(97 + i); // a-z
    const partPath = getProblemImagePath(year, question, part);
    images.push(partPath);
  }

  // 可能的数字后缀（如 2017Q31_2.png）
  for (let i = 2; i <= 5; i++) {
    const suffixPath = `/m2-problems/${year}Q${question}_${i}.png`;
    images.push(suffixPath);
  }

  return images;
}

// 图片存在性检查缓存
const imageExistenceCache = new Map<string, boolean>();

/**
 * 检查图片是否存在（运行时检查）
 * @param imagePath 图片路径
 * @param timeout 超时时间（毫秒），默认3000
 * @returns Promise<boolean>
 */
export async function checkImageExists(
  imagePath: string,
  timeout: number = 3000
): Promise<boolean> {
  // 检查缓存
  if (imageExistenceCache.has(imagePath)) {
    return imageExistenceCache.get(imagePath)!;
  }

  return new Promise((resolve) => {
    const img = new Image();
    let resolved = false;

    const cleanup = () => {
      if (!resolved) {
        resolved = true;
        const exists = img.complete && img.naturalHeight > 0;
        imageExistenceCache.set(imagePath, exists);
        resolve(exists);
      }
    };

    // 超时处理
    const timeoutId = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        imageExistenceCache.set(imagePath, false);
        resolve(false);
      }
    }, timeout);

    img.onload = () => {
      clearTimeout(timeoutId);
      cleanup();
    };

    img.onerror = () => {
      clearTimeout(timeoutId);
      cleanup();
    };

    img.src = imagePath;
  });
}

/**
 * 批量检查图片存在性（带并发限制）
 * @param imagePaths 图片路径数组
 * @param concurrency 并发数，默认5
 * @returns Promise<string[]> 存在的图片路径数组
 */
async function checkImagesBatch(
  imagePaths: string[],
  concurrency: number = 5
): Promise<boolean[]> {
  const results: boolean[] = new Array(imagePaths.length).fill(false);
  const queue: number[] = imagePaths.map((_, index) => index);
  const inProgress = new Set<number>();

  const processNext = async (): Promise<void> => {
    if (queue.length === 0 && inProgress.size === 0) {
      return;
    }

    if (inProgress.size >= concurrency || queue.length === 0) {
      return;
    }

    const index = queue.shift()!;
    inProgress.add(index);

    try {
      results[index] = await checkImageExists(imagePaths[index]);
    } catch (error) {
      results[index] = false;
    } finally {
      inProgress.delete(index);
      await processNext();
    }
  };

  // 启动并发处理
  const workers = Array(Math.min(concurrency, imagePaths.length))
    .fill(0)
    .map(() => processNext());

  await Promise.all(workers);
  return results;
}

/**
 * 过滤存在的图片路径（带并发限制和缓存）
 * @param imagePaths 图片路径数组
 * @param concurrency 并发数，默认5
 * @returns Promise<string[]> 存在的图片路径数组
 */
export async function filterExistingImages(
  imagePaths: string[],
  concurrency: number = 5
): Promise<string[]> {
  if (imagePaths.length === 0) {
    return [];
  }

  // 先检查缓存，过滤掉已知不存在的
  const uncachedPaths: string[] = [];
  const uncachedIndices: number[] = [];
  const cachedResults: (boolean | null)[] = imagePaths.map((path, index) => {
    if (imageExistenceCache.has(path)) {
      return imageExistenceCache.get(path)!;
    }
    uncachedPaths.push(path);
    uncachedIndices.push(index);
    return null;
  });

  // 批量检查未缓存的图片
  if (uncachedPaths.length > 0) {
    const uncachedResults = await checkImagesBatch(uncachedPaths, concurrency);
    uncachedResults.forEach((result, i) => {
      const originalIndex = uncachedIndices[i];
      cachedResults[originalIndex] = result;
      imageExistenceCache.set(uncachedPaths[i], result);
    });
  }

  // 返回存在的图片路径
  return imagePaths.filter((_, index) => cachedResults[index] === true);
}
