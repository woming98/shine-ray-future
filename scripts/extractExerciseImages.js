#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { createCanvas } from '@napi-rs/canvas';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const DEFAULT_SCALE = 2;

function printHelp() {
  console.log(`Usage:
  node scripts/extractExerciseImages.js --pdf <file> --chapter <slug> [options]

Options:
  --config <file>         JSON crop config.
  --output-root <dir>     Root output dir. Default: public/physics/exercises
  --scale <number>        Render scale. Default: 2
  --export-pages          Export full rendered pages for calibration.
  --pages-dir <dir>       Preview dir name. Default: _page-previews
  --help                  Show this help.

Config JSON format:
{
  "scale": 2,
  "jobs": [
    {
      "page": 1,
      "outputs": [
        { "name": "grav-001-question.png", "box": [120, 180, 860, 420] },
        { "name": "grav-001-option-a.png", "box": [120, 620, 360, 90] }
      ]
    }
  ]
}

Notes:
  - page is 1-based.
  - box = [x, y, width, height] in pixels on the rendered page at the chosen scale.
  - Output files are written to public/physics/exercises/<chapter>/ by default.
  - Use --export-pages first to generate full-page PNGs and measure crop boxes.
`);
}

function parseArgs(argv) {
  const args = {
    scale: DEFAULT_SCALE,
    outputRoot: path.join('public', 'physics', 'exercises'),
    pagesDir: '_page-previews',
    exportPages: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--help' || arg === '-h') {
      args.help = true;
      continue;
    }

    if (arg === '--export-pages') {
      args.exportPages = true;
      continue;
    }

    const next = argv[i + 1];
    if (!next) {
      throw new Error(`Missing value for ${arg}`);
    }

    switch (arg) {
      case '--pdf':
        args.pdf = next;
        i += 1;
        break;
      case '--chapter':
        args.chapter = next;
        i += 1;
        break;
      case '--config':
        args.config = next;
        i += 1;
        break;
      case '--output-root':
        args.outputRoot = next;
        i += 1;
        break;
      case '--pages-dir':
        args.pagesDir = next;
        i += 1;
        break;
      case '--scale':
        args.scale = Number(next);
        i += 1;
        break;
      default:
        throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return args;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function loadConfig(configPath) {
  if (!configPath) {
    return { jobs: [] };
  }

  const raw = fs.readFileSync(configPath, 'utf8');
  return JSON.parse(raw);
}

function normalizeBox(box) {
  if (!Array.isArray(box) || box.length !== 4) {
    throw new Error(`Invalid box: expected [x, y, width, height], got ${JSON.stringify(box)}`);
  }

  const [x, y, width, height] = box.map((value) => Number(value));
  if ([x, y, width, height].some((value) => !Number.isFinite(value))) {
    throw new Error(`Invalid box values: ${JSON.stringify(box)}`);
  }
  if (width <= 0 || height <= 0) {
    throw new Error(`Box width/height must be > 0: ${JSON.stringify(box)}`);
  }

  return { x, y, width, height };
}

function clampBox(box, pageWidth, pageHeight) {
  const x = Math.max(0, Math.min(pageWidth, Math.round(box.x)));
  const y = Math.max(0, Math.min(pageHeight, Math.round(box.y)));
  const right = Math.max(x, Math.min(pageWidth, Math.round(box.x + box.width)));
  const bottom = Math.max(y, Math.min(pageHeight, Math.round(box.y + box.height)));

  return {
    x,
    y,
    width: right - x,
    height: bottom - y,
  };
}

function createCanvasFactory() {
  return {
    create(width, height) {
      const canvas = createCanvas(width, height);
      const context = canvas.getContext('2d');
      return { canvas, context };
    },
    reset(target, width, height) {
      target.canvas.width = width;
      target.canvas.height = height;
    },
    destroy(target) {
      target.canvas.width = 0;
      target.canvas.height = 0;
      target.canvas = null;
      target.context = null;
    },
  };
}

async function renderPage(doc, pageNumber, scale) {
  const page = await doc.getPage(pageNumber);
  const viewport = page.getViewport({ scale });
  const canvasFactory = createCanvasFactory();
  const renderTarget = canvasFactory.create(Math.ceil(viewport.width), Math.ceil(viewport.height));

  await page.render({
    canvasContext: renderTarget.context,
    canvasFactory,
    viewport,
  }).promise;

  return {
    canvas: renderTarget.canvas,
    width: renderTarget.canvas.width,
    height: renderTarget.canvas.height,
  };
}

function saveCanvas(canvas, filePath) {
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);
}

function cropToCanvas(sourceCanvas, box) {
  const output = createCanvas(box.width, box.height);
  const context = output.getContext('2d');
  context.drawImage(
    sourceCanvas,
    box.x,
    box.y,
    box.width,
    box.height,
    0,
    0,
    box.width,
    box.height,
  );
  return output;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  if (!args.pdf || !args.chapter) {
    printHelp();
    throw new Error('Both --pdf and --chapter are required.');
  }

  const config = loadConfig(args.config);
  const scale = Number.isFinite(config.scale) ? config.scale : args.scale;

  if (!Number.isFinite(scale) || scale <= 0) {
    throw new Error(`Invalid scale: ${scale}`);
  }

  const pdfPath = path.resolve(args.pdf);
  const outputDir = path.resolve(args.outputRoot, args.chapter);
  const pagesDir = path.resolve(outputDir, args.pagesDir);

  if (!fs.existsSync(pdfPath)) {
    throw new Error(`PDF not found: ${pdfPath}`);
  }

  ensureDir(outputDir);
  if (args.exportPages) {
    ensureDir(pagesDir);
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await getDocument({ data }).promise;
  const renderedPages = new Map();

  const getRendered = async (pageNumber) => {
    if (!renderedPages.has(pageNumber)) {
      renderedPages.set(pageNumber, await renderPage(pdf, pageNumber, scale));
    }
    return renderedPages.get(pageNumber);
  };

  if (args.exportPages) {
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const rendered = await getRendered(pageNumber);
      const filePath = path.join(pagesDir, `page-${String(pageNumber).padStart(3, '0')}.png`);
      saveCanvas(rendered.canvas, filePath);
      console.log(`exported page ${pageNumber}: ${path.relative(process.cwd(), filePath)}`);
    }
  }

  const jobs = Array.isArray(config.jobs) ? config.jobs : [];
  let written = 0;

  for (const job of jobs) {
    const pageNumber = Number(job.page);
    if (!Number.isInteger(pageNumber) || pageNumber < 1 || pageNumber > pdf.numPages) {
      throw new Error(`Invalid page number in config: ${job.page}`);
    }

    const rendered = await getRendered(pageNumber);
    const outputs = Array.isArray(job.outputs) ? job.outputs : [];

    for (const output of outputs) {
      if (!output.name) {
        throw new Error(`Missing output.name in page ${pageNumber}`);
      }

      const normalized = normalizeBox(output.box);
      const clamped = clampBox(normalized, rendered.width, rendered.height);
      if (clamped.width <= 0 || clamped.height <= 0) {
        throw new Error(`Crop box is outside page bounds for ${output.name}`);
      }

      const cropped = cropToCanvas(rendered.canvas, clamped);
      const filePath = path.join(outputDir, output.name);
      saveCanvas(cropped, filePath);
      written += 1;
      console.log(`wrote ${path.relative(process.cwd(), filePath)} (page ${pageNumber})`);
    }
  }

  if (!args.exportPages && written === 0) {
    console.log('No crop jobs found. Add --config with jobs, or use --export-pages first.');
  } else {
    console.log(`done: ${written} cropped image(s)`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
