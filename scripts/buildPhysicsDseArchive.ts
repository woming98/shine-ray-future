import fs from 'node:fs'
import path from 'node:path'
import { PHYSICS_DSE_ARCHIVE, type PhysicsDseQuestionEntry, type PhysicsDseYearArchive } from '../content/physics-dse/archive'
import { copyKatexAssets, renderRichText } from './physicsFormulaRendering'

const outputRoot = path.join(process.cwd(), 'public', 'physics', 'dse')
const katexCssHref = '/physics/dse/vendor/katex/katex.min.css'

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true })
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function writeFile(filePath: string, content: string) {
  ensureDir(path.dirname(filePath))
  fs.writeFileSync(filePath, content, 'utf8')
}

function getDoneCount(year: PhysicsDseYearArchive) {
  return year.p1a.questions.filter((question) => question.status === 'done').length
}

function getYearHref(year: number) {
  return `/physics/dse/${year}/index.html`
}

function getP1aHref(year: number) {
  return `/physics/dse/${year}/p1a/index.html`
}

function getQuestionArchiveHref(year: number, questionNo: number) {
  return `/physics/dse/${year}/p1a/q${String(questionNo).padStart(2, '0')}/index.html`
}

function renderShell(title: string, body: string) {
  return `<!doctype html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <link rel="stylesheet" href="${katexCssHref}" />
  <style>${styles()}</style>
</head>
<body>
  <header class="topbar">
    <div class="shell topbar-inner">
      <a class="brand" href="/physics/dse/index.html">DSE Physics 2021-2025 真题库</a>
      <nav>
        <a href="/subjects/physics">物理学习中心</a>
        <a href="/physics/dse-2024/index.html">2024 精讲样板</a>
      </nav>
    </div>
  </header>
  ${body}
</body>
</html>`
}

function renderStatus(question: PhysicsDseQuestionEntry) {
  if (question.status === 'done') {
    return '<span class="status done">已精讲</span>'
  }

  return '<span class="status queued">待精讲</span>'
}

function renderQuestionCard(year: number, question: PhysicsDseQuestionEntry) {
  const title = `${year} Paper 1A Q${String(question.no).padStart(2, '0')}`
  const href = question.detailedHref ?? getQuestionArchiveHref(year, question.no)
  const inner = `
    <span class="q-no">Q${String(question.no).padStart(2, '0')}</span>
    <strong>${escapeHtml(title)}</strong>
    <span class="answer">答案 ${escapeHtml(question.answer)}</span>
    ${renderStatus(question)}
    ${question.focus ? `<p>${renderRichText(question.focus)}</p>` : '<p>题面与答案 key 已入库，待按 Q1 标准做知识体系讲义。</p>'}
  `

  return `<a class="question-card ${question.detailedHref ? 'done-card' : ''}" href="${href}">${inner}</a>`
}

function renderSourceList(year: PhysicsDseYearArchive) {
  return `
    <div class="source-list">
      ${year.sources
        .map(
          (source) => `
            <article>
              <span>${escapeHtml(source.role)}</span>
              <strong>${escapeHtml(source.label)}</strong>
              <p>${escapeHtml(source.path)}</p>
              <em>${escapeHtml(source.extraction)} extraction</em>
            </article>
          `
        )
        .join('')}
    </div>
  `
}

function renderIndexPage() {
  const totalQuestions = PHYSICS_DSE_ARCHIVE.reduce((sum, year) => sum + year.p1a.questionCount, 0)
  const doneQuestions = PHYSICS_DSE_ARCHIVE.reduce((sum, year) => sum + getDoneCount(year), 0)

  return renderShell(
    'DSE Physics 2021-2025 真题库',
    `
      <main class="shell">
        <section class="hero">
          <p class="eyebrow">Physics Paper Archive</p>
          <h1>2021-2025 DSE Physics 真题库</h1>
          <p class="subtitle">按“知识体系先行、题意记录、重画图、中文讲义、移动端可读”的标准推进。当前先完成五年 Paper 1A 答案 key 和处理状态索引，2024 Q1-Q5 已进入完整精讲。</p>
          <div class="metrics">
            <div><span>年份</span><strong>${PHYSICS_DSE_ARCHIVE.length}</strong></div>
            <div><span>Paper 1A 题目</span><strong>${totalQuestions}</strong></div>
            <div><span>完整精讲</span><strong>${doneQuestions}</strong></div>
          </div>
        </section>

        <section class="notice">
          <h2>处理原则</h2>
          <p>公开页不复制完整原题，也不直接贴原题截图。题面以中文题意记录呈现，图像使用教学重画，讲解以知识体系为中心，再回到真题考法。</p>
        </section>

        <section class="year-grid">
          ${PHYSICS_DSE_ARCHIVE.map(renderYearCard).join('')}
        </section>
      </main>
    `
  )
}

function renderYearCard(year: PhysicsDseYearArchive) {
  const done = getDoneCount(year)
  return `
    <a class="year-card" href="${getYearHref(year.year)}">
      <span>${year.year}</span>
      <h2>${year.year} DSE Physics</h2>
      <p>${renderRichText(year.summary)}</p>
      <div class="progress-row">
        <strong>${done}/${year.p1a.questionCount}</strong>
        <span>Paper 1A 完整精讲</span>
      </div>
    </a>
  `
}

function renderYearPage(year: PhysicsDseYearArchive) {
  const done = getDoneCount(year)

  return renderShell(
    `${year.year} DSE Physics 真题库`,
    `
      <main class="shell">
        <section class="hero compact">
          <p class="eyebrow">${year.year} Archive</p>
          <h1>${year.year} DSE Physics</h1>
          <p class="subtitle">${renderRichText(year.summary)}</p>
          <div class="actions">
            <a href="${getP1aHref(year.year)}">进入 Paper 1A 索引</a>
            <a class="secondary" href="/physics/dse/index.html">返回五年总览</a>
          </div>
        </section>

        <section class="split">
          <div class="panel">
            <h2>Paper 1A 状态</h2>
            <p>共 ${year.p1a.questionCount} 题，完整精讲 ${done} 题，答案 key 来源：${renderRichText(year.p1a.answerKeySource)}。</p>
            <ul>${year.p1a.notes.map((note) => `<li>${renderRichText(note)}</li>`).join('')}</ul>
          </div>
          <div class="panel">
            <h2>资料来源</h2>
            ${renderSourceList(year)}
          </div>
        </section>
      </main>
    `
  )
}

function renderP1aPage(year: PhysicsDseYearArchive) {
  return renderShell(
    `${year.year} DSE Physics Paper 1A`,
    `
      <main class="shell">
        <section class="hero compact">
          <p class="eyebrow">${year.year} Paper 1A</p>
          <h1>Paper 1A 选择题索引</h1>
          <p class="subtitle">每一题会逐步升级为独立讲义页。当前页面先固定答案 key、来源状态和已完成精讲入口。</p>
          <div class="actions">
            <a href="${getYearHref(year.year)}">返回 ${year.year}</a>
            <a class="secondary" href="/physics/dse/index.html">五年总览</a>
          </div>
        </section>

        <section class="notice">
          <h2>答案 key 来源</h2>
          <p>${renderRichText(year.p1a.answerKeySource)}。OCR 来源的答案 key 已人工检查选项字母；百分比数据暂不作为正式学习内容展示。</p>
        </section>

        <section class="question-grid">
          ${year.p1a.questions.map((question) => renderQuestionCard(year.year, question)).join('')}
        </section>
      </main>
    `
  )
}

function renderQuestionSourcePage(year: PhysicsDseYearArchive, question: PhysicsDseQuestionEntry) {
  const questionLabel = `${year.year} Paper 1A Q${String(question.no).padStart(2, '0')}`
  const hasDetail = Boolean(question.detailedHref)

  return renderShell(
    `${questionLabel} 工作台`,
    `
      <main class="shell">
        <section class="hero compact">
          <p class="eyebrow">${year.year} Paper 1A</p>
          <h1>${questionLabel}</h1>
          <p class="subtitle">这是这道题的独立归档页。完整讲义发布前，先固定来源、答案 key、制作状态和讲义标准，避免后续逐题加工时丢失出处。</p>
          <div class="actions">
            ${hasDetail ? `<a href="${question.detailedHref}">进入完整精讲</a>` : ''}
            <a class="${hasDetail ? 'secondary' : ''}" href="${getP1aHref(year.year)}">返回 ${year.year} Paper 1A</a>
            <a class="secondary" href="/physics/dse/index.html">五年总览</a>
          </div>
        </section>

        <section class="split">
          <div class="panel">
            <h2>当前状态</h2>
            <p>参考答案：${escapeHtml(question.answer)}。状态：${question.status === 'done' ? '已完成完整精讲' : '题面与答案 key 已入库，等待按 Q1 标准制作讲义'}。</p>
            ${question.focus ? `<p>已记录知识焦点：${renderRichText(question.focus)}。</p>` : '<p>正式精讲前需要先复核题面、重画图像、确定知识专题和误区。</p>'}
          </div>
          <div class="panel">
            <h2>来源记录</h2>
            <p>答案 key 来源：${renderRichText(year.p1a.answerKeySource)}。</p>
            <ul>${year.p1a.notes.map((note) => `<li>${renderRichText(note)}</li>`).join('')}</ul>
          </div>
        </section>

        <section class="notice">
          <h2>制作标准</h2>
          <p>讲义页必须先讲知识体系，再引入真题；图像要重新绘制，公式要逐一说明字母含义和单位；题目记录以中文理解为主，英文只保留必要术语。</p>
        </section>

        <section class="panel wide-panel">
          <h2>下一步讲义骨架</h2>
          <ol class="workflow">
            <li>从原 PDF 校验题面和选项，不直接贴截图。</li>
            <li>把题目归入一个清晰知识专题，例如 heat transfer、projectile motion、interference 或 electric field。</li>
            <li>写一段像教材论文一样的中文讲解，先把概念讲透，再解释这题为什么这么问。</li>
            <li>重画必要图像，并在图旁说明读图顺序。</li>
            <li>完成选项分析、考场一句话、变式练习和高分陷阱。</li>
          </ol>
        </section>
      </main>
    `
  )
}

function styles() {
  return `
    :root {
      color-scheme: light;
      --ink: #111827;
      --muted: #667085;
      --line: #d9e0ea;
      --panel: #ffffff;
      --soft: #f7f9fb;
      --accent: #b45309;
      --done: #0f766e;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: var(--ink);
      background:
        linear-gradient(90deg, rgba(20, 25, 35, 0.022) 1px, transparent 1px) center top / 88px 88px,
        linear-gradient(180deg, #f7f9fb 0%, #ffffff 48%, #f7f8fb 100%);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    a { color: inherit; text-decoration: none; }
    .shell { width: min(1220px, calc(100% - 48px)); margin: 0 auto; }
    .topbar {
      border-bottom: 1px solid var(--line);
      background: rgba(248, 249, 251, 0.92);
      position: sticky;
      top: 0;
      z-index: 20;
    }
    .topbar-inner {
      min-height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
    }
    .brand { font-weight: 900; }
    nav { display: flex; gap: 18px; color: #475467; font-size: 14px; font-weight: 800; }
    .hero {
      padding: clamp(64px, 9vw, 116px) 0 clamp(44px, 6vw, 72px);
      border-bottom: 1px solid var(--line);
    }
    .hero.compact { padding-top: clamp(42px, 7vw, 74px); }
    .eyebrow {
      display: inline-block;
      margin: 0 0 18px;
      padding-bottom: 5px;
      border-bottom: 2px solid #141923;
      color: #141923;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    h1 {
      max-width: 880px;
      margin: 0 0 18px;
      font-size: clamp(40px, 6vw, 72px);
      line-height: 1.06;
      letter-spacing: 0;
    }
    .subtitle {
      max-width: 780px;
      margin: 0;
      color: #344054;
      font-size: clamp(18px, 2vw, 22px);
      line-height: 1.8;
    }
    .metrics {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      max-width: 760px;
      margin-top: 28px;
    }
    .metrics div,
    .panel,
    .notice,
    .year-card,
    .question-card {
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.82);
    }
    .metrics div { padding: 16px; }
    .metrics span,
    .source-list span {
      display: block;
      color: var(--muted);
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
    }
    .metrics strong { display: block; margin-top: 4px; font-size: 28px; }
    .notice {
      margin: 28px 0;
      padding: 20px 22px;
      border-left: 4px solid var(--accent);
      border-radius: 0 8px 8px 0;
      background: #fffaf0;
    }
    .notice h2,
    .panel h2 {
      margin: 0 0 10px;
      font-size: 20px;
    }
    .notice p,
    .panel p,
    .year-card p,
    .question-card p,
    .source-list p {
      margin: 0;
      color: #344054;
      line-height: 1.72;
      overflow-wrap: anywhere;
    }
    .year-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 14px;
      padding: 10px 0 80px;
    }
    .year-card {
      display: block;
      padding: 20px;
      min-height: 250px;
      transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
    }
    .year-card:hover {
      transform: translateY(-2px);
      border-color: #b8c2d2;
      box-shadow: 0 16px 38px rgba(17, 24, 39, 0.08);
    }
    .year-card > span {
      color: var(--accent);
      font-size: 13px;
      font-weight: 900;
    }
    .year-card h2 {
      margin: 12px 0 10px;
      font-size: 24px;
      line-height: 1.22;
    }
    .progress-row {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid var(--line);
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      color: var(--muted);
      font-size: 13px;
      font-weight: 800;
    }
    .progress-row strong {
      color: var(--done);
      font-size: 20px;
    }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
    .actions a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 40px;
      padding: 8px 14px;
      border-radius: 6px;
      background: #111827;
      color: #ffffff;
      font-weight: 900;
      text-align: center;
    }
    .actions a.secondary {
      background: #e7ebf1;
      color: #111827;
    }
    .split {
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
      gap: 18px;
      padding: 28px 0 80px;
    }
    .panel { padding: 22px; }
    .panel ul { margin: 16px 0 0; padding-left: 20px; color: #344054; line-height: 1.7; }
    .source-list { display: grid; gap: 10px; }
    .source-list article {
      padding: 12px 0;
      border-top: 1px solid var(--line);
    }
    .source-list strong { display: block; margin: 5px 0; }
    .source-list em {
      display: inline-block;
      margin-top: 8px;
      color: var(--done);
      font-size: 12px;
      font-style: normal;
      font-weight: 900;
    }
    .wide-panel { margin-bottom: 80px; }
    .workflow {
      margin: 0;
      padding-left: 22px;
      color: #344054;
      line-height: 1.8;
      overflow-wrap: anywhere;
    }
    .workflow li { margin: 8px 0; }
    .question-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      padding: 8px 0 80px;
    }
    .question-card {
      display: grid;
      gap: 9px;
      align-content: start;
      min-height: 190px;
      padding: 18px;
    }
    .question-card.done-card {
      border-color: #a7d8ca;
      background: #f7fffc;
    }
    .q-no {
      color: var(--accent);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.04em;
    }
    .answer {
      display: inline-flex;
      width: fit-content;
      align-items: center;
      min-height: 30px;
      padding: 5px 10px;
      border-radius: 6px;
      background: #111827;
      color: #ffffff;
      font-weight: 900;
    }
    .status {
      display: inline-flex;
      width: fit-content;
      align-items: center;
      min-height: 28px;
      padding: 4px 9px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 900;
    }
    .status.done {
      background: #e6f7f2;
      color: var(--done);
    }
    .status.queued {
      background: #f1f5f9;
      color: #475467;
    }
    @media (max-width: 960px) {
      .year-grid,
      .question-grid,
      .split,
      .metrics {
        grid-template-columns: 1fr;
      }
      .shell { width: min(680px, calc(100% - 28px)); }
      .topbar-inner { align-items: flex-start; flex-direction: column; padding: 12px 0; }
      h1 { font-size: clamp(34px, 10vw, 42px); }
      nav { flex-wrap: wrap; }
    }
  `
}

function generate() {
  copyKatexAssets(outputRoot)
  writeFile(path.join(outputRoot, 'index.html'), renderIndexPage())

  for (const year of PHYSICS_DSE_ARCHIVE) {
    writeFile(path.join(outputRoot, String(year.year), 'index.html'), renderYearPage(year))
    writeFile(path.join(outputRoot, String(year.year), 'p1a', 'index.html'), renderP1aPage(year))

    for (const question of year.p1a.questions) {
      writeFile(
        path.join(outputRoot, String(year.year), 'p1a', `q${String(question.no).padStart(2, '0')}`, 'index.html'),
        renderQuestionSourcePage(year, question)
      )
    }
  }

  console.log(`Generated DSE Physics archive for ${PHYSICS_DSE_ARCHIVE.length} years in ${outputRoot}`)
}

generate()
