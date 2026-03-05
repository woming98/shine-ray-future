import fs from 'fs';
import path from 'path';

const repoRoot = process.cwd();
const exercisesRoot = path.join(repoRoot, 'public', 'physics', 'exercises');

function printUsage() {
  console.log('Usage: node scripts/scanExerciseImages.js <chapter-dir> [question-id]');
  console.log('Example: node scripts/scanExerciseImages.js gravitation');
  console.log('Example: node scripts/scanExerciseImages.js gravitation grav-031');
}

function listAvailableChapters() {
  if (!fs.existsSync(exercisesRoot)) {
    console.log('Exercises directory not found:', exercisesRoot);
    return;
  }

  const dirs = fs
    .readdirSync(exercisesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  if (dirs.length === 0) {
    console.log('No exercise directories found.');
    return;
  }

  console.log('Available chapter directories:');
  for (const dir of dirs) {
    console.log(`- ${dir}`);
  }
}

function parseImageFile(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
    return null;
  }

  const base = fileName.slice(0, -ext.length);
  const questionMatch = base.match(/^(?<id>.+)-question(?:-(?<index>\d+))?$/);
  if (questionMatch) {
    return {
      id: questionMatch.groups.id,
      kind: 'question',
      index: Number(questionMatch.groups.index || '1'),
      fileName,
    };
  }

  const optionMatch = base.match(/^(?<id>.+)-option-(?<option>[a-d])$/);
  if (optionMatch) {
    return {
      id: optionMatch.groups.id,
      kind: 'option',
      option: optionMatch.groups.option,
      fileName,
    };
  }

  return {
    id: null,
    kind: 'unknown',
    fileName,
  };
}

function sortQuestionFiles(a, b) {
  return a.index - b.index || a.fileName.localeCompare(b.fileName);
}

function scanChapter(chapterDir, questionFilter) {
  const targetDir = path.join(exercisesRoot, chapterDir);
  if (!fs.existsSync(targetDir)) {
    console.error(`Chapter directory not found: ${targetDir}`);
    process.exitCode = 1;
    return;
  }

  const entries = fs.readdirSync(targetDir).sort();
  const groups = new Map();
  const unknownFiles = [];

  for (const fileName of entries) {
    const parsed = parseImageFile(fileName);
    if (!parsed) {
      continue;
    }

    if (parsed.kind === 'unknown') {
      unknownFiles.push(fileName);
      continue;
    }

    if (questionFilter && parsed.id !== questionFilter) {
      continue;
    }

    if (!groups.has(parsed.id)) {
      groups.set(parsed.id, {
        questionFiles: [],
        optionFiles: new Map(),
      });
    }

    const group = groups.get(parsed.id);
    if (parsed.kind === 'question') {
      group.questionFiles.push(parsed);
    } else {
      group.optionFiles.set(parsed.option, parsed.fileName);
    }
  }

  const ids = [...groups.keys()].sort();
  if (ids.length === 0) {
    console.log(
      questionFilter
        ? `No images found for ${questionFilter} in ${chapterDir}.`
        : `No matching exercise images found in ${chapterDir}.`,
    );
  } else {
    console.log(`Chapter: ${chapterDir}`);
    console.log(`Matched questions: ${ids.length}`);
    console.log('');

    for (const id of ids) {
      const group = groups.get(id);
      group.questionFiles.sort(sortQuestionFiles);

      console.log(id);

      if (group.questionFiles.length > 0) {
        console.log(
          `  question: ${group.questionFiles.map((item) => item.fileName).join(', ')}`,
        );
      } else {
        console.log('  question: missing');
      }

      const optionLabels = ['a', 'b', 'c', 'd'];
      const presentOptions = optionLabels.filter((label) => group.optionFiles.has(label));
      if (presentOptions.length > 0) {
        console.log(
          `  options: ${presentOptions
            .map((label) => `${label}=${group.optionFiles.get(label)}`)
            .join(', ')}`,
        );
      } else {
        console.log('  options: none');
      }

      const missingOptions = optionLabels.filter((label) => !group.optionFiles.has(label));
      if (presentOptions.length > 0 && missingOptions.length > 0) {
        console.log(`  missing options: ${missingOptions.join(', ')}`);
      }

      console.log('');
    }
  }

  if (!questionFilter && unknownFiles.length > 0) {
    console.log('Files with non-standard names:');
    for (const fileName of unknownFiles) {
      console.log(`- ${fileName}`);
    }
  }
}

const [, , chapterDir, questionFilter] = process.argv;

if (!chapterDir) {
  printUsage();
  console.log('');
  listAvailableChapters();
} else {
  scanChapter(chapterDir, questionFilter);
}
