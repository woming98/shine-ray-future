import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { B1_DETAILED_CHAPTERS } from '../src/pages/subjects/bafs/constants/b1Notes'
import { B2_DETAILED_CHAPTERS } from '../src/pages/subjects/bafs/constants/b2Notes'
import { B3_DETAILED_CHAPTERS } from '../src/pages/subjects/bafs/constants/b3Notes'
import { A6_DETAILED_CHAPTERS } from '../src/pages/subjects/bafs/constants/a6Notes'
import { A7_DETAILED_CHAPTERS } from '../src/pages/subjects/bafs/constants/a7Notes'
import { A8_DETAILED_CHAPTERS } from '../src/pages/subjects/bafs/constants/a8Notes'
import { C1DetailedChapter, C1_DETAILED_CHAPTERS } from '../src/pages/subjects/bafs/constants/c1Notes'
import { C2_DETAILED_CHAPTERS } from '../src/pages/subjects/bafs/constants/c2Notes'
import { C3_DETAILED_CHAPTERS } from '../src/pages/subjects/bafs/constants/c3Notes'
import { BAFSNotePart, getNotePart } from '../src/pages/subjects/bafs/constants/notes'

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const outputDir = resolve('public/bafs/notes')
const workDir = join(tmpdir(), 'shine-ray-bafs-note-pdfs')

const noteSets: Array<{
  strand: 'accounting' | 'business'
  partId: string
  chapters: C1DetailedChapter[]
}> = [
  { strand: 'accounting', partId: 'accounting-c1', chapters: C1_DETAILED_CHAPTERS },
  { strand: 'accounting', partId: 'accounting-c2', chapters: C2_DETAILED_CHAPTERS },
  { strand: 'accounting', partId: 'accounting-c3', chapters: C3_DETAILED_CHAPTERS },
  { strand: 'business', partId: 'business-b1', chapters: B1_DETAILED_CHAPTERS },
  { strand: 'business', partId: 'business-b2', chapters: B2_DETAILED_CHAPTERS },
  { strand: 'business', partId: 'business-b3', chapters: B3_DETAILED_CHAPTERS },
  { strand: 'accounting', partId: 'accounting-a6', chapters: A6_DETAILED_CHAPTERS },
  { strand: 'accounting', partId: 'accounting-a7', chapters: A7_DETAILED_CHAPTERS },
  { strand: 'accounting', partId: 'accounting-a8', chapters: A8_DETAILED_CHAPTERS },
]

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

const bilingualRows = (rows: Array<{ zh: string; en: string }>) =>
  rows
    .map(
      (row) => `
        <div class="bilingual-row">
          <p>${escapeHtml(row.zh)}</p>
          <p class="english">${escapeHtml(row.en)}</p>
        </div>`,
    )
    .join('')

function renderHtml(part: BAFSNotePart, chapters: C1DetailedChapter[]) {
  const chaptersHtml = chapters
    .map(
      (chapter) => `
        <article class="chapter">
          <header class="chapter-header">
            <div class="chapter-number">CHAPTER ${chapter.number}</div>
            <h2>${escapeHtml(chapter.title)}</h2>
            <div class="chapter-en">${escapeHtml(chapter.titleEn)}</div>
            <div class="objective">
              <p>${escapeHtml(chapter.objective.zh)}</p>
              <p>${escapeHtml(chapter.objective.en)}</p>
            </div>
          </header>

          ${chapter.sections
            .map(
              (section) => `
                <section>
                  <h3>${escapeHtml(section.title)} <span>${escapeHtml(section.titleEn)}</span></h3>
                  <div class="panel">${bilingualRows(section.points)}</div>
                </section>`,
            )
            .join('')}

          <section>
            <h3>關鍵詞彙 <span>Key Terms</span></h3>
            <div class="terms">
              ${chapter.terms
                .map(
                  (term) => `
                    <div class="term">
                      <h4>${escapeHtml(term.term)} <span>${escapeHtml(term.termEn)}</span></h4>
                      <p>${escapeHtml(term.definition)}</p>
                      <p class="english">${escapeHtml(term.definitionEn)}</p>
                    </div>`,
                )
                .join('')}
            </div>
          </section>

          <section class="tips">
            <h3>DSE 作答提示 <span>Exam Tips</span></h3>
            ${bilingualRows(chapter.examTips)}
          </section>

          <section>
            <h3>快速自測與答案 <span>Quick Check and Answers</span></h3>
            <div class="questions">
              ${chapter.questions
                .map(
                  (question, index) => `
                    <div class="question">
                      <h4>Q${index + 1}. ${escapeHtml(question.question)}</h4>
                      <p class="english question-en">${escapeHtml(question.questionEn)}</p>
                      <div class="answer">
                        <p><strong>答案：</strong>${escapeHtml(question.answer)}</p>
                        <p class="english"><strong>Answer: </strong>${escapeHtml(question.answerEn)}</p>
                      </div>
                    </div>`,
                )
                .join('')}
            </div>
          </section>
        </article>`,
    )
    .join('')

  return `<!doctype html>
<html lang="zh-HK">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(part.code)} ${escapeHtml(part.title)} 中英雙語筆記</title>
  <style>
    @page { size: A4; margin: 13mm 12mm 15mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #172033;
      font-family: "PingFang HK", "PingFang TC", "Noto Sans CJK TC", "Microsoft JhengHei", Arial, sans-serif;
      font-size: 10.5px;
      line-height: 1.55;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .cover {
      min-height: 268mm;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 24mm 18mm;
      color: white;
      background: #064e3b;
      page-break-after: always;
    }
    .cover .code { color: #fbbf24; font-size: 20px; font-weight: 800; letter-spacing: 2px; }
    .cover h1 { margin: 14px 0 4px; font-size: 34px; line-height: 1.2; }
    .cover h2 { margin: 0; color: #d1fae5; font-size: 19px; font-weight: 600; }
    .cover p { max-width: 135mm; margin: 26px 0 0; color: #ecfdf5; font-size: 13px; line-height: 1.8; }
    .cover .source { margin-top: auto; color: #a7f3d0; font-size: 10px; }
    .chapter { page-break-before: always; }
    .chapter-header {
      margin: 0 0 18px;
      padding: 18px 20px;
      color: white;
      background: #064e3b;
      border-radius: 6px;
    }
    .chapter-number { color: #fbbf24; font-size: 9px; font-weight: 800; letter-spacing: 1px; }
    .chapter-header h2 { margin: 5px 0 0; font-size: 21px; }
    .chapter-en { color: #d1fae5; font-size: 12px; font-weight: 600; }
    .objective {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px solid rgba(255,255,255,.25);
      color: #ecfdf5;
      font-size: 9.5px;
    }
    section { margin: 17px 0; break-inside: auto; }
    h3 {
      margin: 0 0 7px;
      color: #172033;
      font-size: 13px;
      break-after: avoid;
    }
    h3 span, h4 span { margin-left: 5px; color: #047857; font-size: 9px; font-weight: 700; }
    p { margin: 0; }
    .english { color: #64748b; }
    .panel { border: 1px solid #dbe4e0; border-radius: 5px; overflow: hidden; }
    .bilingual-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      padding: 7px 9px;
      border-bottom: 1px solid #e8eeeb;
      break-inside: avoid;
    }
    .bilingual-row:last-child { border-bottom: 0; }
    .terms { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
    .term { padding: 8px 9px; border: 1px solid #dbe4e0; border-radius: 5px; background: #f8faf9; break-inside: avoid; }
    .term h4, .question h4 { margin: 0 0 5px; font-size: 10.5px; }
    .term p { margin-top: 3px; }
    .tips { padding: 10px; border: 1px solid #fde68a; border-radius: 5px; background: #fffbeb; break-inside: avoid; }
    .questions { display: grid; gap: 7px; }
    .question { padding: 9px; border: 1px solid #dbe4e0; border-radius: 5px; break-inside: avoid; }
    .question-en { margin-bottom: 6px; font-size: 9px; }
    .answer { padding-top: 6px; border-top: 1px solid #e8eeeb; }
    .answer p + p { margin-top: 3px; }
  </style>
</head>
<body>
  <section class="cover">
    <div class="code">${escapeHtml(part.code)} · BAFS</div>
    <h1>${escapeHtml(part.title)}</h1>
    <h2>中英雙語完整筆記 / Complete Bilingual Notes</h2>
    <p>${escapeHtml(part.description)}</p>
    <div class="source">來源 / Source: ${escapeHtml(part.sourceBook)} · 莘睿未來</div>
  </section>
  ${chaptersHtml}
</body>
</html>`
}

mkdirSync(outputDir, { recursive: true })
rmSync(workDir, { recursive: true, force: true })
mkdirSync(workDir, { recursive: true })

const requestedCodes = process.argv.slice(2).map((code) => code.toUpperCase())
const selectedNoteSets = requestedCodes.length
  ? noteSets.filter((noteSet) => requestedCodes.includes(getNotePart(noteSet.strand, noteSet.partId)?.code ?? ''))
  : noteSets

for (const noteSet of selectedNoteSets) {
  const part = getNotePart(noteSet.strand, noteSet.partId)
  if (!part) {
    throw new Error(`Missing note part: ${noteSet.partId}`)
  }

  const htmlPath = join(workDir, `${part.code.toLowerCase()}.html`)
  const pdfPath = join(outputDir, `${part.code.toLowerCase()}-bilingual-notes.pdf`)
  writeFileSync(htmlPath, renderHtml(part, noteSet.chapters), 'utf8')

  const result = spawnSync(
    chromePath,
    [
      '--headless=new',
      '--disable-background-networking',
      '--disable-extensions',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--user-data-dir=${join(workDir, `chrome-${part.code.toLowerCase()}`)}`,
      `--print-to-pdf=${pdfPath}`,
      `file://${htmlPath}`,
    ],
    { encoding: 'utf8', killSignal: 'SIGKILL', timeout: 15_000 },
  )

  if (!existsSync(pdfPath) || statSync(pdfPath).size < 10_000) {
    throw new Error(`Failed to generate ${part.code}: ${result.stderr}`)
  }

  console.log(`Generated ${pdfPath} (${Math.round(statSync(pdfPath).size / 1024)} KB)`)
}

rmSync(workDir, { recursive: true, force: true })
