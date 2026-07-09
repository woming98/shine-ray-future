import fs from 'node:fs'
import path from 'node:path'
import { PHYSICS_DSE_2024_P1_CASES, type PhysicsCaseStudy } from '../content/physics-dse/2024/p1/cases'
import { PHYSICS_DSE_2025_P1_CASES } from '../content/physics-dse/2025/p1/cases'
import { copyKatexAssets, renderDisplayFormula, renderInlineMath, renderRichText } from './physicsFormulaRendering'

interface BuildTarget {
  year: number
  cases: PhysicsCaseStudy[]
  paperIndexSubtitle: string
}

const buildTargets: BuildTarget[] = [
  {
    year: 2024,
    cases: PHYSICS_DSE_2024_P1_CASES,
    paperIndexSubtitle:
      '先按知识点建立理解，再用后半段案例验证考法。当前前 5 个专题覆盖热学、相变、气体、运动图像和力学接触力。',
  },
  {
    year: 2025,
    cases: PHYSICS_DSE_2025_P1_CASES,
    paperIndexSubtitle:
      '2025 Paper 1 专题会逐题扩展。当前先完成 Q13 平面镜成像，沿用 2024 Q1 的讲义化页面结构。',
  },
]

let activeYear = buildTargets[0].year
let outputRoot = path.join(process.cwd(), 'public', 'physics', `dse-${activeYear}`)
let yearIndexHref = `/physics/dse-${activeYear}/index.html`
let paperOneHref = `/physics/dse-${activeYear}/p1/index.html`
let katexCssHref = `/physics/dse-${activeYear}/vendor/katex/katex.min.css`

function setBuildTarget(target: BuildTarget) {
  activeYear = target.year
  outputRoot = path.join(process.cwd(), 'public', 'physics', `dse-${activeYear}`)
  yearIndexHref = `/physics/dse-${activeYear}/index.html`
  paperOneHref = `/physics/dse-${activeYear}/p1/index.html`
  katexCssHref = `/physics/dse-${activeYear}/vendor/katex/katex.min.css`
}

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

function renderList(items: string[]) {
  return `<ul>${items.map((item) => `<li>${renderRichText(item)}</li>`).join('')}</ul>`
}

function renderParagraphs(items: string[]) {
  return items.map((item) => `<p>${renderRichText(item)}</p>`).join('')
}

function renderTags(tags: string[]) {
  return tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')
}

function renderOptionAnalysis(caseStudy: PhysicsCaseStudy) {
  return caseStudy.optionAnalysis
    .map(
      (option) => `
        <article class="option ${option.verdict}">
          <div class="option-label">${escapeHtml(option.option)}</div>
          <div>
            <strong>${option.verdict === 'correct' ? '正确' : '错误'}</strong>
            <p>${renderRichText(option.text)}</p>
          </div>
        </article>
      `
    )
    .join('')
}

function renderConceptLadder(caseStudy: PhysicsCaseStudy) {
  return caseStudy.knowledgeSystem.conceptLadder
    .map(
      (item, index) => `
        <article class="learning-block">
          <div class="step-index">${index + 1}</div>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${renderRichText(item.explanation)}</p>
            ${renderList(item.checkpoints)}
          </div>
        </article>
      `
    )
    .join('')
}

function renderFormulaToolkit(caseStudy: PhysicsCaseStudy) {
  return caseStudy.knowledgeSystem.formulaToolkit
    .map(
      (item) => `
        <article class="formula-item">
          <h3>${escapeHtml(item.name)}</h3>
          <div class="formula-expression">${renderDisplayFormula(item.expression)}</div>
          <p><strong>什么时候用：</strong>${renderRichText(item.useWhen)}</p>
          <p><strong>小心：</strong>${renderRichText(item.watchOut)}</p>
        </article>
      `
    )
    .join('')
}

function renderMicroExamples(caseStudy: PhysicsCaseStudy) {
  return caseStudy.knowledgeSystem.microExamples
    .map(
      (item) => `
        <article class="worked-example">
          <h3>${escapeHtml(item.title)}</h3>
          <p><strong>题目：</strong>${renderRichText(item.prompt)}</p>
          ${renderList(item.steps)}
        </article>
      `
    )
    .join('')
}

function renderMisconceptions(caseStudy: PhysicsCaseStudy) {
  return caseStudy.knowledgeSystem.misconceptions
    .map(
      (item) => `
        <article class="misconception">
          <p><strong>容易误解：</strong>${renderRichText(item.wrongIdea)}</p>
          <p><strong>正确理解：</strong>${renderRichText(item.correction)}</p>
        </article>
      `
    )
    .join('')
}

type NarrativeEquation = NonNullable<
  NonNullable<PhysicsCaseStudy['knowledgeSystem']['narrative']>['sections'][number]['equations']
>[number]

function renderNarrativeEquation(equation: NarrativeEquation) {
  return `
    <div class="equation-card">
      <div class="equation-line">${renderDisplayFormula(equation.expression)}</div>
      <div class="symbol-table">
        ${equation.symbols
          .map(
            (symbol) => `
              <div class="symbol-row">
                <span class="symbol-name">${renderInlineMath(symbol.symbol)}</span>
                <span class="symbol-meaning">${renderRichText(symbol.meaning)}</span>
                <span class="symbol-unit">${renderRichText(symbol.unit)}</span>
              </div>
            `
          )
          .join('')}
      </div>
      ${equation.unitNote ? `<p class="unit-note">${renderRichText(equation.unitNote)}</p>` : ''}
    </div>
  `
}

function renderNarrativeEquations(
  section: NonNullable<PhysicsCaseStudy['knowledgeSystem']['narrative']>['sections'][number]
) {
  if (section.equations?.length) {
    return section.equations.map(renderNarrativeEquation).join('')
  }

  return section.equation ? `<div class="equation-line">${renderDisplayFormula(section.equation)}</div>` : ''
}

function renderQuestionBrief(
  brief?: NonNullable<PhysicsCaseStudy['knowledgeSystem']['narrative']>['sections'][number]['questionBrief'],
  className = 'question-brief'
) {
  if (!brief) {
    return ''
  }

  return `
    <aside class="${className}">
      <h4>${escapeHtml(brief.title)}</h4>
      ${brief.stem?.length ? `<div class="question-stem">${renderParagraphs(brief.stem)}</div>` : ''}
      ${
        brief.options?.length
          ? `<div class="question-options">
              ${brief.options
                .map(
                  (option) => `
                    <div class="question-option">
                      <span>${escapeHtml(option.label)}</span>
                      <p>${renderRichText(option.text)}</p>
                    </div>
                  `
                )
                .join('')}
            </div>`
          : ''
      }
      ${brief.points?.length ? renderList(brief.points) : ''}
    </aside>
  `
}

function getNarrativeQuestionBrief(caseStudy: PhysicsCaseStudy) {
  return caseStudy.knowledgeSystem.narrative?.sections.find((section) => section.questionBrief)?.questionBrief
}

function renderNarrativeKnowledge(caseStudy: PhysicsCaseStudy) {
  const narrative = caseStudy.knowledgeSystem.narrative

  if (!narrative) {
    return ''
  }

  return `
    <article class="panel essay">
      <h2>${escapeHtml(narrative.heading ?? getKnowledgeTitle(caseStudy))}</h2>
      <div class="essay-lead">${renderParagraphs(narrative.lead)}</div>
      ${narrative.sections
        .map(
          (section, index) => `
            <section id="concept-${index + 1}" class="essay-section">
              <h3>${escapeHtml(section.title)}</h3>
              ${renderParagraphs(section.paragraphs)}
              ${renderNarrativeEquations(section)}
              ${section.note ? `<p class="essay-note">${escapeHtml(section.note)}</p>` : ''}
            </section>
          `
        )
        .join('')}
      <div class="essay-closing">${renderParagraphs(narrative.closing)}</div>
    </article>
  `
}

function renderStructuredKnowledge(caseStudy: PhysicsCaseStudy) {
  return `
    <section class="panel">
      <h2>先建立知识体系</h2>
      <p><strong>${escapeHtml(getKnowledgeTitle(caseStudy))}</strong></p>
      <p>${renderRichText(caseStudy.knowledgeSystem.bigIdea)}</p>
      <h3>为什么这个知识点会让人蒙</h3>
      <p>${renderRichText(caseStudy.knowledgeSystem.whyItMatters)}</p>
      <h3>学习地图</h3>
      ${renderList(caseStudy.knowledgeSystem.learningMap)}
    </section>

    <section class="panel">
      <h2>从直觉到公式</h2>
      ${renderConceptLadder(caseStudy)}
    </section>

    <section class="panel">
      <h2>公式与图像工具箱</h2>
      <div class="formula-grid">${renderFormulaToolkit(caseStudy)}</div>
    </section>

    <section class="panel">
      <h2>核心知识讲透</h2>
      <div class="two-col">
        ${caseStudy.knowledgeSystem.coreExplanations
          .map(
            (item) => `
              <article class="mini">
                <h3>${escapeHtml(item.title)}</h3>
                ${renderList(item.points)}
              </article>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="panel">
      <h2>微型例题：先在小场景里练会</h2>
      <div class="example-grid">${renderMicroExamples(caseStudy)}</div>
    </section>

    <section class="panel">
      <h2>常见误解纠正</h2>
      <div class="misconception-grid">${renderMisconceptions(caseStudy)}</div>
    </section>

    <section class="panel">
      <h2>DSE 常见考法</h2>
      ${renderList(caseStudy.knowledgeSystem.dsePatterns)}
    </section>

    <section class="panel">
      <h2>学会标准</h2>
      ${renderList(caseStudy.knowledgeSystem.masteryChecklist)}
    </section>

    <section class="panel">
      <h2>必要前置知识</h2>
      <div class="two-col">
        ${caseStudy.prerequisiteRecovery
          .map(
            (item) => `
              <article class="mini">
                <h3>${escapeHtml(item.title)}</h3>
                ${renderList(item.points)}
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `
}

function renderKnowledgeBody(caseStudy: PhysicsCaseStudy) {
  return caseStudy.knowledgeSystem.narrative
    ? renderNarrativeKnowledge(caseStudy)
    : renderStructuredKnowledge(caseStudy)
}

function renderNarrativeOptionAnalysis(caseStudy: PhysicsCaseStudy) {
  return `
    <div class="option-prose">
      ${caseStudy.optionAnalysis
        .map(
          (option) => `
            <p class="option-line ${option.verdict}">
              <strong>${escapeHtml(option.option)} ${option.verdict === 'correct' ? '可以留下' : '不能留下'}：</strong>
              ${renderRichText(option.text)}
            </p>
          `
        )
        .join('')}
    </div>
  `
}

function renderNarrativeApplication(caseStudy: PhysicsCaseStudy) {
  const questionBrief = getNarrativeQuestionBrief(caseStudy)

  return `
    <article class="panel essay">
      <h2>把这套读法放回考场</h2>
      <p class="source-line">${escapeHtml(caseStudy.paper)} · Q${caseStudy.questionNo} · 建议 ${escapeHtml(caseStudy.timeBudget)} · 参考答案 ${escapeHtml(caseStudy.answer)}</p>

      <section id="exam-brief" class="essay-section">
        <h3>${questionBrief ? '用原题题面回到考场' : '用上面的题目速写来解'}</h3>
        ${questionBrief ? renderQuestionBrief(questionBrief, 'question-brief exam-question-card') : `<p>${renderRichText(caseStudy.reconstructedPrompt)}</p>`}
        <p>${renderRichText(caseStudy.knowledgeSystem.bridgeToQuestion)}</p>
        <p>${renderRichText(caseStudy.researchQuestion)}</p>
      </section>

      <section id="exam-reasoning" class="essay-section">
        <h3>${escapeHtml(caseStudy.knowledgeSystem.narrative?.reasoningHeading ?? '从图像慢慢推到答案')}</h3>
        ${renderParagraphs(caseStudy.thinkingPath)}
        ${caseStudy.solution
          .map(
            (step) => `
              <p><strong>${escapeHtml(step.title)}：</strong>${renderRichText(step.points.join(''))}</p>
            `
          )
          .join('')}
        <p class="essay-note">${renderRichText(caseStudy.quickTake)}</p>
      </section>

      <section id="exam-options" class="essay-section">
        <h3>为什么最后只剩这个选项</h3>
        ${renderNarrativeOptionAnalysis(caseStudy)}
      </section>

      <section id="exam-close" class="essay-section">
        <h3>收束成考场上的一句话</h3>
        <p>${renderRichText(caseStudy.highScoreReflex)}</p>
        <p>${renderRichText(caseStudy.variationDrill.prompt)}</p>
        ${renderParagraphs(caseStudy.variationDrill.solution)}
      </section>
    </article>
  `
}

function renderStructuredApplication(caseStudy: PhysicsCaseStudy) {
  return `
    <section class="panel">
      <h2>真题验证案例</h2>
      <div class="meta-grid">
        <div class="meta"><span>来源</span><strong>${escapeHtml(caseStudy.paper)}</strong></div>
        <div class="meta"><span>题号</span><strong>Q${caseStudy.questionNo}</strong></div>
        <div class="meta"><span>答案</span><strong>${escapeHtml(caseStudy.answer)}</strong></div>
        <div class="meta"><span>答对率</span><strong>${escapeHtml(caseStudy.successRate)}</strong></div>
        <div class="meta"><span>建议用时</span><strong>${escapeHtml(caseStudy.timeBudget)}</strong></div>
      </div>
      <p><strong>为什么引入这道题：</strong>${renderRichText(caseStudy.knowledgeSystem.bridgeToQuestion)}</p>
      <p><strong>重构题意：</strong>${renderRichText(caseStudy.reconstructedPrompt)}</p>
      <p><strong>研究问题：</strong>${renderRichText(caseStudy.researchQuestion)}</p>
      <p><strong>快速结论：</strong>${renderRichText(caseStudy.quickTake)}</p>
    </section>

    <section class="panel">
      <h2>本题用到的物理模型</h2>
      ${renderList(caseStudy.model)}
    </section>

    <section class="panel">
      <h2>真题推理路径</h2>
      ${renderList(caseStudy.thinkingPath)}
    </section>

    <section class="panel">
      <h2>完整解法</h2>
      ${caseStudy.solution
        .map(
          (step) => `
            <h3>${escapeHtml(step.title)}</h3>
            ${renderList(step.points)}
          `
        )
        .join('')}
    </section>

    <section class="panel">
      <h2>错选项为什么错</h2>
      <div class="option-grid">${renderOptionAnalysis(caseStudy)}</div>
    </section>

    <section class="panel">
      <h2>拿分点地图</h2>
      ${renderList(caseStudy.markingPoints)}
    </section>

    <section class="panel">
      <h2>高分陷阱</h2>
      ${renderList(caseStudy.traps)}
    </section>

    <section class="panel">
      <h2>高分反射</h2>
      <p>${renderRichText(caseStudy.highScoreReflex)}</p>
    </section>

    <section class="panel">
      <h2>变式练习</h2>
      <p>${renderRichText(caseStudy.variationDrill.prompt)}</p>
      ${renderList(caseStudy.variationDrill.solution)}
    </section>
  `
}

function renderApplicationBody(caseStudy: PhysicsCaseStudy) {
  return caseStudy.knowledgeSystem.narrative
    ? renderNarrativeApplication(caseStudy)
    : renderStructuredApplication(caseStudy)
}

function getCaseHref(caseStudy: PhysicsCaseStudy) {
  return `/physics/dse-${activeYear}/p1/${caseStudy.slug}/index.html`
}

function getKnowledgeTitle(caseStudy: PhysicsCaseStudy) {
  return caseStudy.knowledgeSystem.title.replace(/^知识专题：/, '')
}

function renderCaseCard(caseStudy: PhysicsCaseStudy) {
  return `
    <a class="case-card" href="${getCaseHref(caseStudy)}">
      <span class="case-number">知识点 ${String(caseStudy.questionNo).padStart(2, '0')}</span>
      <h3>${escapeHtml(getKnowledgeTitle(caseStudy))}</h3>
      <p>${renderRichText(caseStudy.knowledgeSystem.bigIdea)}</p>
      <div class="mini-meta">
        <span>${escapeHtml(caseStudy.topic)}</span>
        <span>含应用案例</span>
      </div>
    </a>
  `
}

function getPagerHref(caseStudy?: PhysicsCaseStudy) {
  return caseStudy ? getCaseHref(caseStudy) : paperOneHref
}

function renderDefaultHero(caseStudy: PhysicsCaseStudy) {
  return `
    <section class="hero">
      <span class="eyebrow">DSE 物理知识点</span>
      <h1>${escapeHtml(getKnowledgeTitle(caseStudy))}</h1>
      ${
        caseStudy.diagram
          ? `<div class="diagram hero-diagram"><div class="diagram-title">${escapeHtml(caseStudy.diagram.title)}</div>${caseStudy.diagram.svg}</div>`
          : ''
      }
      <p class="subtitle">${renderRichText(caseStudy.knowledgeSystem.bigIdea)}</p>
      <div class="tags">${renderTags(caseStudy.tags)}</div>
    </section>
  `
}

function renderNarrativeHero(caseStudy: PhysicsCaseStudy) {
  const [titlePrefix, ...titleRest] = getKnowledgeTitle(caseStudy).split('：')
  const narrativeTitle = titleRest.length
    ? `<h1><span>${escapeHtml(titlePrefix)}：</span><span>${escapeHtml(titleRest.join('：'))}</span></h1>`
    : `<h1>${escapeHtml(getKnowledgeTitle(caseStudy))}</h1>`

  return `
    <section class="hero essay-hero">
      <div class="hero-copy">
        <span class="eyebrow">DSE 物理讲义</span>
        <p class="hero-overline">${escapeHtml(caseStudy.topic)}</p>
        ${narrativeTitle}
        <p class="subtitle">${escapeHtml(caseStudy.subtitle)}</p>
        <div class="tags">${renderTags(caseStudy.tags)}</div>
      </div>
      ${
        caseStudy.diagram
          ? `<figure class="hero-figure">
              <div class="diagram">${caseStudy.diagram.svg}</div>
              <figcaption><span>Figure 1</span>${escapeHtml(caseStudy.diagram.title)}</figcaption>
            </figure>`
          : ''
      }
    </section>
  `
}

function renderCaseHero(caseStudy: PhysicsCaseStudy) {
  return caseStudy.knowledgeSystem.narrative ? renderNarrativeHero(caseStudy) : renderDefaultHero(caseStudy)
}

function renderStructuredSidebar(allCases: PhysicsCaseStudy[]) {
  return `
    <aside class="sidebar">
      <section class="panel">
        <h2>知识点导航</h2>
        <div class="side-list">
          ${allCases
            .map(
              (item) => `
                <a href="${getCaseHref(item)}">
                  <span>知识点 ${String(item.questionNo).padStart(2, '0')}</span>
                  <span>查看</span>
                </a>
              `
            )
            .join('')}
        </div>
      </section>
      <section class="panel">
        <h2>使用方式</h2>
        <p>先按知识专题学习，再进入真题验证案例。最后用变式练习检查自己是否真的掌握了同类题。</p>
      </section>
    </aside>
  `
}

function renderMobileReferenceFigure(caseStudy: PhysicsCaseStudy) {
  if (!caseStudy.diagram || !caseStudy.knowledgeSystem.narrative) {
    return ''
  }

  const mobileTitle = caseStudy.diagram.title.replace(/^(教学重画图|真题图)：/, '')

  return `
    <details class="mobile-figure-dock" open>
      <summary>参考图：${escapeHtml(mobileTitle)}</summary>
      <div class="mobile-figure-frame">${caseStudy.diagram.svg}</div>
    </details>
  `
}

function getFigureZoomId(caseStudy: PhysicsCaseStudy) {
  return `figure-zoom-${caseStudy.slug}`
}

function renderFigureZoom(caseStudy: PhysicsCaseStudy) {
  if (!caseStudy.diagram || !caseStudy.knowledgeSystem.narrative) {
    return ''
  }

  const zoomId = getFigureZoomId(caseStudy)

  return `
    <input class="figure-zoom-toggle" type="checkbox" id="${escapeHtml(zoomId)}" aria-hidden="true" />
    <div class="figure-modal" aria-label="${escapeHtml(caseStudy.diagram.title)}放大图">
      <label class="figure-modal-backdrop" for="${escapeHtml(zoomId)}" aria-label="关闭放大图"></label>
      <div class="figure-modal-card" role="dialog" aria-modal="true">
        <div class="figure-modal-header">
          <strong>${escapeHtml(caseStudy.diagram.title)}</strong>
          <label for="${escapeHtml(zoomId)}">关闭</label>
        </div>
        <div class="figure-modal-frame">${caseStudy.diagram.svg}</div>
      </div>
    </div>
  `
}

function renderNarrativeSidebar(caseStudy: PhysicsCaseStudy) {
  const zoomId = getFigureZoomId(caseStudy)
  const narrative = caseStudy.knowledgeSystem.narrative
  const sectionLinks =
    narrative?.sections
      .map(
        (section, index) => `
          <a href="#concept-${index + 1}">${escapeHtml(section.title.replace(/^[一二三四五六七八九十]+、\s*/, ''))}</a>
        `
      )
      .join('') ?? ''
  const sidebar = narrative?.sidebar

  return `
    <aside class="sidebar essay-sidebar">
      ${
        caseStudy.diagram
          ? `<figure class="sidebar-reference">
              <div class="sidebar-figure-frame">${caseStudy.diagram.svg}</div>
              <figcaption>${escapeHtml(caseStudy.diagram.title)}</figcaption>
              <label class="figure-zoom-button" for="${escapeHtml(zoomId)}">放大图</label>
            </figure>`
          : ''
      }
      <nav class="reader-note">
        <h2>阅读线索</h2>
        ${sectionLinks}
      </nav>
      ${
        sidebar?.formula
          ? `<section class="reader-note">
              <h2>核心公式</h2>
              <p class="reader-formula">${renderDisplayFormula(sidebar.formula)}</p>
              ${sidebar.symbols ? `<p class="reader-symbols">${renderRichText(sidebar.symbols)}</p>` : ''}
              ${sidebar.note ? `<p>${renderRichText(sidebar.note)}</p>` : ''}
            </section>`
          : ''
      }
      ${
        sidebar?.readOrder
          ? `<section class="reader-note">
              <h2>读图次序</h2>
              <p>${renderRichText(sidebar.readOrder)}</p>
            </section>`
          : ''
      }
    </aside>
  `
}

function renderSidebar(caseStudy: PhysicsCaseStudy, allCases: PhysicsCaseStudy[]) {
  return caseStudy.knowledgeSystem.narrative ? renderNarrativeSidebar(caseStudy) : renderStructuredSidebar(allCases)
}

function baseStyles() {
  return `
    :root {
      color-scheme: light;
      --ink: #0f172a;
      --muted: #64748b;
      --line: #dbe3ef;
      --panel: #ffffff;
      --soft: #f8fafc;
      --brand: #2563eb;
      --brand-dark: #1e3a8a;
      --accent: #f59e0b;
      --good: #059669;
      --bad: #dc2626;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--ink);
      background: linear-gradient(180deg, #eef5ff 0%, #f8fafc 36%, #ffffff 100%);
      line-height: 1.65;
    }
    a { color: inherit; text-decoration: none; }
    .shell { width: min(1160px, calc(100% - 36px)); margin: 0 auto; }
    .topbar {
      position: sticky;
      top: 0;
      z-index: 10;
      border-bottom: 1px solid rgba(219, 227, 239, 0.9);
      background: rgba(255, 255, 255, 0.86);
      backdrop-filter: blur(16px);
    }
    .topbar-inner {
      min-height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand { font-weight: 850; letter-spacing: 0; color: var(--brand-dark); }
    .nav-links { display: flex; gap: 10px; flex-wrap: wrap; }
    .nav-links a {
      padding: 8px 11px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: white;
      color: #334155;
      font-size: 14px;
      font-weight: 700;
    }
    .hero { padding: 54px 0 28px; }
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 11px;
      border-radius: 8px;
      background: #dbeafe;
      color: #1e40af;
      font-weight: 800;
      font-size: 13px;
    }
    h1 {
      margin: 18px 0 10px;
      font-size: clamp(34px, 6vw, 64px);
      line-height: 1.02;
      letter-spacing: 0;
    }
    .subtitle {
      max-width: 760px;
      color: #334155;
      font-size: 19px;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 10px;
      margin-top: 24px;
    }
    .meta {
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.8);
      border-radius: 8px;
      padding: 12px;
    }
    .meta span { display: block; color: var(--muted); font-size: 12px; font-weight: 800; text-transform: uppercase; }
    .meta strong { display: block; margin-top: 3px; font-size: 16px; }
    .layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 290px;
      gap: 24px;
      align-items: start;
      padding: 24px 0 70px;
    }
    .panel {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
      margin-bottom: 18px;
    }
    .panel h2 {
      margin: 0 0 12px;
      font-size: 24px;
      letter-spacing: 0;
    }
    .panel h3 {
      margin: 18px 0 8px;
      font-size: 18px;
    }
    .panel p { margin: 0 0 12px; color: #334155; }
    ul { margin: 0; padding-left: 20px; }
    li { margin: 8px 0; color: #334155; }
    .diagram {
      border: 1px solid var(--line);
      border-radius: 8px;
      overflow: hidden;
      background: #f8fafc;
      margin-top: 16px;
    }
    .hero-diagram {
      margin: 22px 0 18px;
      box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
    }
    .diagram-title {
      padding: 12px 14px;
      border-bottom: 1px solid var(--line);
      font-weight: 800;
      color: #1e293b;
      background: #f1f5f9;
    }
    .diagram svg,
    .diagram img,
    .sidebar-figure-frame img,
    .mobile-figure-frame img,
    .figure-modal-frame img {
      width: 100%;
      height: auto;
      display: block;
    }
    .exam-diagram-image {
      background: #ffffff;
      object-fit: contain;
    }
    .tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 0; }
    .tag {
      border: 1px solid #bfdbfe;
      background: #eff6ff;
      color: #1d4ed8;
      border-radius: 999px;
      padding: 5px 9px;
      font-size: 12px;
      font-weight: 800;
    }
    .two-col {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }
    .mini {
      background: #f8fafc;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 16px;
    }
    .essay {
      padding: clamp(24px, 4vw, 44px);
    }
    .essay h2 {
      margin-bottom: 18px;
      font-size: clamp(28px, 4vw, 42px);
      line-height: 1.16;
    }
    .essay h3 {
      margin: 0 0 12px;
      font-size: clamp(22px, 3vw, 30px);
      line-height: 1.24;
    }
    .essay p {
      max-width: 820px;
      color: #26384f;
      font-size: 18px;
      line-height: 1.9;
    }
    .essay-lead p:first-child {
      font-size: 20px;
      color: #172033;
    }
    .essay-section {
      margin-top: 30px;
      padding-top: 28px;
      border-top: 1px solid var(--line);
    }
    .equation-line {
      width: fit-content;
      max-width: 100%;
      margin: 20px 0 12px;
      padding: 12px 14px;
      border-radius: 8px;
      background: #0f172a;
      color: white;
      font-size: 17px;
      font-weight: 900;
      overflow-wrap: anywhere;
    }
    .equation-line .katex-display,
    .formula-expression .katex-display,
    .reader-formula .katex-display {
      margin: 0;
      text-align: left;
    }
    .equation-line .katex,
    .formula-expression .katex,
    .reader-formula .katex {
      font-size: 1.08em;
    }
    .equation-card {
      max-width: 820px;
      margin: 24px 0 18px;
    }
    .symbol-table {
      display: grid;
      gap: 0;
      border: 1px solid var(--line);
      border-radius: 8px;
      overflow: hidden;
      background: #ffffff;
    }
    .symbol-row {
      display: grid;
      grid-template-columns: 96px minmax(0, 1fr) 180px;
      gap: 0;
      border-top: 1px solid var(--line);
    }
    .symbol-row:first-child { border-top: 0; }
    .symbol-name,
    .symbol-meaning,
    .symbol-unit {
      padding: 11px 12px;
      color: #334155;
      font-size: 14px;
      line-height: 1.55;
    }
    .symbol-name {
      color: #0f172a;
      font-weight: 900;
      background: #f1f5f9;
    }
    .symbol-name .katex {
      font-size: 1.04em;
    }
    .symbol-unit {
      color: #475569;
      background: #f8fafc;
      font-weight: 750;
    }
    .unit-note {
      margin: 10px 0 0;
      color: #475569;
      font-size: 14px;
      line-height: 1.7;
    }
    .essay-note {
      border-left: 4px solid var(--brand);
      padding-left: 14px;
      color: #1e3a8a;
      font-weight: 750;
    }
    .essay-closing {
      margin-top: 34px;
      padding-top: 24px;
      border-top: 1px solid var(--line);
    }
    .essay-closing p {
      color: #172033;
      font-weight: 650;
    }
    .source-line {
      color: var(--muted);
      font-size: 15px;
      font-weight: 750;
    }
    .option-prose {
      max-width: 820px;
    }
    .option-prose p {
      margin: 12px 0;
      padding-left: 14px;
      border-left: 3px solid var(--line);
    }
    .option-prose p { color: #26384f; }
    .learning-block {
      display: grid;
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 14px;
      padding: 18px 0;
      border-top: 1px solid var(--line);
    }
    .learning-block:first-child { border-top: 0; padding-top: 0; }
    .step-index {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border-radius: 8px;
      background: #dbeafe;
      color: #1d4ed8;
      font-weight: 900;
    }
    .formula-grid, .example-grid, .misconception-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }
    .formula-item, .worked-example, .misconception {
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #f8fafc;
      padding: 16px;
    }
    .formula-expression {
      margin: 10px 0 12px;
      padding: 11px 12px;
      border-radius: 8px;
      background: #0f172a;
      color: white;
      font-weight: 900;
      overflow-wrap: anywhere;
    }
    .misconception {
      background: #fff7ed;
      border-color: #fed7aa;
    }
    .option-grid { display: grid; gap: 10px; }
    .option {
      display: grid;
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 12px;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 14px;
      background: #f8fafc;
    }
    .option.correct { border-color: #86efac; background: #f0fdf4; }
    .option.wrong { border-color: #fecaca; background: #fff7f7; }
    .option-label {
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border-radius: 8px;
      background: #0f172a;
      color: white;
      font-weight: 900;
    }
    .option.correct .option-label { background: var(--good); }
    .option.wrong .option-label { background: var(--bad); }
    .sidebar {
      position: sticky;
      top: 84px;
    }
    .sidebar .panel { padding: 18px; }
    .side-list { display: grid; gap: 8px; }
    .side-list a {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 10px;
      color: #334155;
      background: #f8fafc;
      font-weight: 750;
      font-size: 14px;
    }
    .pager {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-top: 18px;
    }
    .pager a, .primary-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      padding: 10px 14px;
      border-radius: 8px;
      background: var(--brand);
      color: white;
      font-weight: 850;
    }
    .pager a.secondary { background: #e2e8f0; color: #0f172a; }
    .case-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 16px;
      padding: 28px 0 70px;
    }
    .case-card {
      display: block;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: white;
      padding: 20px;
      box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
    }
    .case-card:hover { border-color: #93c5fd; transform: translateY(-2px); transition: 160ms ease; }
    .case-number {
      display: inline-flex;
      padding: 5px 8px;
      border-radius: 7px;
      background: #dbeafe;
      color: #1d4ed8;
      font-size: 12px;
      font-weight: 900;
    }
    .case-card h3 { margin: 12px 0 8px; font-size: 19px; }
    .case-card p { margin: 0; color: #64748b; }
    .mini-meta { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; font-size: 12px; color: #475569; }
    .mini-meta span { padding: 4px 7px; border-radius: 6px; background: #f1f5f9; font-weight: 800; }
    footer { border-top: 1px solid var(--line); padding: 22px 0; color: #64748b; font-size: 14px; }
    body.essay-page {
      --ink: #141923;
      --muted: #667085;
      --line: #d9e0ea;
      --brand: #0f766e;
      --brand-dark: #111827;
      background:
        linear-gradient(90deg, rgba(20, 25, 35, 0.022) 1px, transparent 1px) center top / 88px 88px,
        linear-gradient(180deg, #f7f9fb 0%, #ffffff 46%, #f7f8fb 100%);
      color: var(--ink);
      overflow-x: hidden;
    }
    .essay-page .shell { width: min(1320px, calc(100% - 48px)); }
    .essay-page .topbar {
      border-bottom: 1px solid rgba(217, 224, 234, 0.96);
      background: rgba(248, 249, 251, 0.9);
    }
    .essay-page .brand { color: #141923; }
    .essay-page .nav-links a {
      border: 0;
      border-radius: 0;
      background: transparent;
      padding: 6px 2px;
      color: #475467;
      font-weight: 750;
    }
    .essay-page .nav-links a:hover { color: #111827; }
    .essay-page .essay-hero {
      display: grid;
      grid-template-columns: minmax(0, 0.95fr) minmax(390px, 0.86fr);
      gap: clamp(32px, 5vw, 68px);
      align-items: center;
      padding: clamp(50px, 7vw, 78px) 0 clamp(40px, 6vw, 58px);
      border-bottom: 1px solid var(--line);
    }
    .essay-page .hero-copy { min-width: 0; }
    .essay-page .hero-copy,
    .essay-page .essay-hero > *,
    .essay-page .layout > * {
      min-width: 0;
    }
    .essay-page .eyebrow {
      border-radius: 4px;
      background: transparent;
      color: #141923;
      padding: 0 0 5px;
      border-bottom: 2px solid #141923;
      font-size: 12px;
      letter-spacing: 0.04em;
    }
    .essay-page .hero-overline {
      margin: 18px 0 0;
      color: #9a3412;
      font-size: 13px;
      font-weight: 850;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: break-word;
    }
    .essay-page h1 {
      max-width: 780px;
      margin: 18px 0 18px;
      font-size: clamp(40px, 5.3vw, 64px);
      line-height: 1.08;
      color: #111827;
      overflow-wrap: anywhere;
      word-break: break-word;
    }
    .essay-page h1 span {
      display: block;
    }
    .essay-page .subtitle {
      max-width: 660px;
      color: #344054;
      font-size: clamp(18px, 1.7vw, 21px);
      line-height: 1.78;
      overflow-wrap: anywhere;
    }
    .essay-page .tags { margin-top: 22px; gap: 9px; }
    .essay-page .tag {
      border: 0;
      border-bottom: 1px solid #cfd7e3;
      background: transparent;
      color: #344054;
      border-radius: 0;
      padding: 0 0 4px;
      font-size: 12px;
      font-weight: 760;
      overflow-wrap: anywhere;
    }
    .essay-page .hero-figure {
      margin: 0;
      min-width: 0;
      max-width: 100%;
      width: 100%;
    }
    .essay-page .hero-figure .diagram {
      margin: 0;
      padding: 14px;
      max-width: 100%;
      width: 100%;
      min-width: 0;
      border: 1px solid #cfd7e3;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 18px 48px rgba(17, 24, 39, 0.09);
    }
    .essay-page .hero-figure svg {
      max-width: 100%;
      min-width: 0;
    }
    .essay-page .hero-figure figcaption {
      margin-top: 12px;
      color: #475467;
      font-size: 14px;
      line-height: 1.55;
      overflow-wrap: anywhere;
    }
    .essay-page .hero-figure figcaption span {
      margin-right: 8px;
      color: #111827;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .essay-page .layout {
      grid-template-columns: minmax(0, 820px) minmax(340px, 420px);
      gap: clamp(32px, 4vw, 56px);
      padding: clamp(48px, 6vw, 72px) 0 92px;
    }
    .essay-page .panel {
      margin-bottom: 78px;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
    }
    .essay-page .essay h2 {
      max-width: 820px;
      margin: 0 0 24px;
      color: #111827;
      font-size: clamp(30px, 3.4vw, 42px);
      line-height: 1.18;
    }
    .essay-page .essay h2::before {
      content: "";
      display: block;
      width: 64px;
      height: 3px;
      margin-bottom: 22px;
      background: #b45309;
    }
    .essay-page .essay h3 {
      margin: 0 0 14px;
      color: #151b26;
      font-size: clamp(22px, 2.2vw, 29px);
      line-height: 1.28;
    }
    .essay-page .essay p {
      max-width: 820px;
      margin: 0 0 16px;
      color: #2f3a4c;
      font-size: 18px;
      line-height: 1.98;
    }
    .essay-page .essay-lead {
      padding-bottom: 6px;
    }
    .essay-page .essay-lead p:first-child {
      color: #111827;
      font-size: 20px;
      line-height: 1.9;
    }
    .essay-page .essay-section {
      margin-top: 44px;
      padding-top: 40px;
      border-top: 1px solid var(--line);
    }
    .essay-page .equation-line {
      margin: 24px 0 16px;
      padding: 14px 16px;
      border: 1px solid #cfd7e3;
      border-left: 4px solid #0f766e;
      border-radius: 0 8px 8px 0;
      background: #f5f8f8;
      color: #141923;
      font-size: 18px;
      box-shadow: none;
    }
    .essay-page .equation-card {
      margin: 26px 0 20px;
    }
    .essay-page .equation-card .equation-line {
      margin-bottom: 0;
      border-radius: 0;
    }
    .essay-page .symbol-table {
      border-color: #d7dee8;
      border-top: 0;
      border-radius: 0 0 8px 8px;
      background: rgba(255, 255, 255, 0.82);
    }
    .essay-page .symbol-row {
      grid-template-columns: 92px minmax(0, 1fr) 190px;
      border-color: #e3e8ef;
    }
    .essay-page .symbol-name,
    .essay-page .symbol-meaning,
    .essay-page .symbol-unit {
      font-size: 15px;
      line-height: 1.68;
    }
    .essay-page .symbol-name {
      background: #eef6f4;
      color: #0f766e;
    }
    .essay-page .symbol-unit {
      background: #f8fafc;
      color: #344054;
    }
    .essay-page .unit-note {
      margin-top: 11px;
      color: #667085;
      font-size: 14px;
      line-height: 1.75;
    }
    .essay-page .essay-note {
      max-width: 820px;
      margin-top: 18px;
      padding: 14px 16px;
      border: 1px solid #e4d4b5;
      border-left: 4px solid #b45309;
      border-radius: 0 8px 8px 0;
      background: #fffaf0;
      color: #6b3d0f;
      font-weight: 780;
    }
    .essay-page .question-brief {
      max-width: 820px;
      margin: 18px 0 26px;
      padding: 18px 0 18px 20px;
      border: 0;
      border-left: 3px solid #111827;
      border-radius: 0;
      background: transparent;
    }
    .essay-page .question-brief h4 {
      margin: 0 0 12px;
      color: #111827;
      font-size: 16px;
      font-weight: 900;
      letter-spacing: 0.02em;
    }
    .essay-page .question-stem p {
      margin: 0 0 9px;
      color: #344054;
      font-size: 16px;
      line-height: 1.72;
    }
    .essay-page .question-options {
      display: grid;
      gap: 0;
      margin: 15px 0 12px;
      border-top: 1px solid #d7dee8;
    }
    .essay-page .question-option {
      display: grid;
      grid-template-columns: 28px minmax(0, 1fr);
      align-items: start;
      gap: 10px;
      padding: 10px 0;
      border: 0;
      border-bottom: 1px solid #d7dee8;
      border-radius: 0;
      background: transparent;
    }
    .essay-page .question-option > span {
      display: grid;
      place-items: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #f1f5f9;
      color: #111827;
      font-size: 13px;
      font-weight: 900;
    }
    .essay-page .question-option p {
      margin: 0;
      color: #253044;
      font-size: 16px;
      line-height: 1.65;
    }
    .essay-page .question-brief ul {
      margin: 0;
      padding-left: 20px;
    }
    .essay-page .question-brief li {
      margin: 8px 0;
      color: #344054;
      font-size: 16px;
      line-height: 1.72;
    }
    .essay-page .exam-question-card {
      max-width: 860px;
      margin: 20px 0 26px;
      padding: 0;
      border: 1px solid #d7dee8;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.92);
      overflow: hidden;
      box-shadow: 0 14px 34px rgba(17, 24, 39, 0.06);
    }
    .essay-page .exam-question-card h4 {
      margin: 0;
      padding: 14px 18px;
      border-bottom: 1px solid #d7dee8;
      background: #f7f9fb;
      color: #111827;
      font-size: 14px;
      font-weight: 900;
      letter-spacing: 0.04em;
    }
    .essay-page .exam-question-card .question-stem {
      padding: 18px 20px 14px;
    }
    .essay-page .exam-question-card .question-stem p {
      max-width: none;
      margin: 0 0 10px;
      color: #202b3d;
      font-size: 17px;
      line-height: 1.72;
    }
    .essay-page .exam-question-card .question-stem p:last-child {
      margin-bottom: 0;
      font-weight: 760;
    }
    .essay-page .exam-question-card .question-options {
      margin: 0;
      border-top: 1px solid #e1e6ee;
    }
    .essay-page .exam-question-card .question-option {
      grid-template-columns: 38px minmax(0, 1fr);
      gap: 14px;
      padding: 14px 20px;
      border-bottom: 1px solid #e1e6ee;
      background: #ffffff;
    }
    .essay-page .exam-question-card .question-option:nth-child(even) {
      background: #fafbfd;
    }
    .essay-page .exam-question-card .question-option > span {
      width: 30px;
      height: 30px;
      border-radius: 7px;
      background: #111827;
      color: #ffffff;
      font-size: 14px;
    }
    .essay-page .exam-question-card .question-option p {
      max-width: none;
      color: #202b3d;
      font-size: 16px;
      line-height: 1.65;
    }
    .essay-page .exam-question-card ul {
      margin: 0;
      padding: 14px 20px 16px 42px;
      border-top: 1px solid #e1e6ee;
      background: #fffaf0;
    }
    .essay-page .exam-question-card li {
      color: #6b3d0f;
      font-size: 15px;
      line-height: 1.7;
    }
    .essay-page .essay-closing {
      margin-top: 46px;
      padding-top: 30px;
      border-top: 1px solid var(--line);
    }
    .essay-page .source-line {
      display: inline-flex;
      max-width: 100%;
      margin-bottom: 8px;
      padding: 8px 0;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      color: #667085;
      font-size: 14px;
      font-weight: 760;
    }
    .essay-page .option-prose {
      max-width: 820px;
      display: grid;
      gap: 12px;
    }
    .essay-page .option-prose p {
      margin: 0;
      padding: 14px 16px;
      border: 1px solid #d9e0ea;
      border-left: 3px solid #9aa4b2;
      border-radius: 0 8px 8px 0;
      background: rgba(255, 255, 255, 0.72);
    }
    .essay-page .option-line.correct {
      border-color: #a7d8ca;
      border-left-color: #0f766e;
      background: #effaf7;
    }
    .essay-page .sidebar {
      top: 96px;
    }
    .essay-page .essay-sidebar {
      display: block;
    }
    .mobile-figure-dock {
      display: none;
    }
    .essay-page .sidebar-reference {
      margin: 0 0 24px;
      padding-left: 18px;
      border-left: 1px solid #cfd7e3;
    }
    .essay-page .sidebar-figure-frame {
      width: 100%;
      overflow: hidden;
      border: 1px solid #d7dee8;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.86);
      box-shadow: 0 14px 34px rgba(17, 24, 39, 0.08);
    }
    .essay-page .sidebar-figure-frame svg {
      display: block;
      width: 100%;
      height: auto;
    }
    .essay-page .sidebar-reference figcaption {
      margin-top: 8px;
      color: #667085;
      font-size: 12px;
      line-height: 1.55;
      font-weight: 760;
    }
    .essay-page .figure-zoom-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      min-height: 34px;
      padding: 7px 12px;
      border: 1px solid #111827;
      border-radius: 6px;
      background: #111827;
      color: #ffffff;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
      user-select: none;
    }
    .essay-page .figure-zoom-button:hover {
      background: #253044;
    }
    .essay-page .figure-zoom-toggle {
      position: fixed;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }
    .essay-page .figure-modal {
      position: fixed;
      inset: 0;
      z-index: 60;
      display: none;
      place-items: center;
      padding: 32px;
    }
    .essay-page .figure-zoom-toggle:checked + .figure-modal {
      display: grid;
    }
    .essay-page .figure-modal-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, 0.58);
      backdrop-filter: blur(6px);
      cursor: zoom-out;
    }
    .essay-page .figure-modal-card {
      position: relative;
      width: min(1040px, calc(100vw - 48px));
      max-height: calc(100vh - 64px);
      overflow: auto;
      border: 1px solid #d7dee8;
      border-radius: 10px;
      background: #ffffff;
      box-shadow: 0 30px 90px rgba(15, 23, 42, 0.32);
    }
    .essay-page .figure-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 14px 16px;
      border-bottom: 1px solid #e4e9f1;
      color: #111827;
      font-size: 15px;
      font-weight: 900;
    }
    .essay-page .figure-modal-header label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 32px;
      padding: 6px 10px;
      border: 1px solid #d0d5dd;
      border-radius: 6px;
      background: #f8fafc;
      color: #344054;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
    }
    .essay-page .figure-modal-frame {
      padding: 18px;
    }
    .essay-page .figure-modal-frame svg {
      display: block;
      width: 100%;
      height: auto;
    }
    .essay-page .reader-note {
      margin-bottom: 30px;
      padding-left: 18px;
      border-left: 1px solid #cfd7e3;
    }
    .essay-page .reader-note h2 {
      margin: 0 0 11px;
      color: #667085;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .essay-page .reader-note a {
      display: block;
      padding: 8px 0;
      border-bottom: 1px solid #e4e9f1;
      color: #344054;
      font-size: 14px;
      font-weight: 760;
    }
    .essay-page .reader-note p {
      margin: 0 0 10px;
      color: #475467;
      font-size: 14px;
      line-height: 1.72;
    }
    .essay-page .reader-formula {
      color: #0f766e;
      font-weight: 900;
    }
    .essay-page .pager {
      margin-top: 8px;
      padding-top: 26px;
      border-top: 1px solid var(--line);
    }
    .essay-page .pager a {
      border-radius: 6px;
      background: #111827;
    }
    .essay-page .pager a.secondary {
      background: #e7ebf1;
      color: #111827;
    }
    .essay-page footer {
      border-top-color: #d9e0ea;
      background: rgba(255, 255, 255, 0.62);
    }
    @media (max-width: 880px) {
      .layout { grid-template-columns: 1fr; }
      .sidebar { position: static; }
      .meta-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .two-col { grid-template-columns: 1fr; }
      .formula-grid, .example-grid, .misconception-grid { grid-template-columns: 1fr; }
      .topbar-inner { align-items: flex-start; padding: 10px 0; flex-direction: column; }
      .essay-page .shell { width: min(680px, calc(100% - 28px)); }
      .essay-page .essay-hero { grid-template-columns: 1fr; }
      .essay-page .layout { grid-template-columns: 1fr; gap: 28px; }
      .essay-page h1 { font-size: clamp(31px, 9vw, 36px); line-height: 1.14; word-break: break-all; }
      .essay-page .hero-overline { font-size: 12px; line-height: 1.45; text-transform: none; }
      .essay-page .hero-figure .diagram { padding: 10px; }
      .essay-page .hero-figure figcaption { font-size: 13px; }
      .essay-page .hero-figure { display: none; }
      .essay-page .essay-sidebar { order: 0; }
      .essay-page .sidebar-reference { display: none; }
      .essay-page .mobile-figure-dock {
        display: block;
        position: sticky;
        top: 98px;
        z-index: 8;
        margin: -12px 0 26px;
        border: 1px solid #d7dee8;
        border-radius: 8px;
        background: rgba(248, 250, 252, 0.96);
        box-shadow: 0 14px 34px rgba(17, 24, 39, 0.12);
        overflow: hidden;
      }
      .essay-page .mobile-figure-dock summary {
        cursor: pointer;
        padding: 9px 11px;
        color: #344054;
        font-size: 13px;
        font-weight: 900;
        list-style-position: inside;
      }
      .essay-page .mobile-figure-frame {
        max-height: 260px;
        padding: 8px;
        overflow-x: auto;
        overflow-y: hidden;
        border-top: 1px solid #d7dee8;
        background: #ffffff;
      }
      .essay-page .mobile-figure-frame svg {
        display: block;
        width: 100%;
        min-width: 0;
        height: auto;
      }
      .essay-page .essay,
      .essay-page .essay-section,
      .essay-page .question-brief,
      .essay-page .equation-card,
      .essay-page .symbol-table {
        max-width: 100%;
        min-width: 0;
      }
      .essay-page .equation-line {
        width: auto;
        max-width: 100%;
        font-size: 15px;
        white-space: normal;
      }
      .essay-page .figure-modal {
        padding: 14px;
      }
      .essay-page .figure-modal-card {
        width: calc(100vw - 28px);
        max-height: calc(100vh - 28px);
      }
      .essay-page .figure-modal-frame {
        padding: 10px;
      }
      .essay-page .essay p { font-size: 17px; line-height: 1.9; }
      .essay-page .essay-lead p:first-child { font-size: 19px; }
      .symbol-row,
      .essay-page .symbol-row {
        grid-template-columns: 1fr;
      }
      .symbol-name,
      .symbol-meaning,
      .symbol-unit {
        min-width: 0;
        padding: 9px 11px;
        overflow-wrap: anywhere;
        word-break: break-word;
      }
    }
  `
}

function renderCasePage(caseStudy: PhysicsCaseStudy, allCases: PhysicsCaseStudy[]) {
  const index = allCases.findIndex((item) => item.slug === caseStudy.slug)
  const previous = allCases[index - 1]
  const next = allCases[index + 1]
  const bodyClass = caseStudy.knowledgeSystem.narrative ? ' class="essay-page"' : ''

  return `<!doctype html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(getKnowledgeTitle(caseStudy))} | DSE 物理知识点</title>
  <link rel="stylesheet" href="${katexCssHref}" />
  <style>${baseStyles()}</style>
</head>
<body${bodyClass}>
  <header class="topbar">
    <div class="shell topbar-inner">
      <a class="brand" href="${yearIndexHref}">${activeYear} DSE 物理知识专题库</a>
      <nav class="nav-links">
        <a href="/subjects/physics">返回物理学习中心</a>
        <a href="${yearIndexHref}">${activeYear} 总览</a>
        <a href="${paperOneHref}">Paper 1 专题</a>
      </nav>
    </div>
  </header>

  <main class="shell">
    ${renderCaseHero(caseStudy)}
    ${renderMobileReferenceFigure(caseStudy)}

    <div class="layout">
      <div>
        ${renderKnowledgeBody(caseStudy)}

        ${renderApplicationBody(caseStudy)}

        <nav class="pager">
          <a class="secondary" href="${getPagerHref(previous)}">${previous ? '← 上一个知识点' : '← 知识专题列表'}</a>
          <a href="${getPagerHref(next)}">${next ? '下一个知识点 →' : '返回知识专题列表 →'}</a>
        </nav>
      </div>

      ${renderSidebar(caseStudy, allCases)}
    </div>
  </main>

  ${renderFigureZoom(caseStudy)}

</body>
</html>`
}

function renderPaperIndex(target: BuildTarget) {
  const cases = target.cases

  return `<!doctype html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${activeYear} DSE 物理 Paper 1 知识专题库</title>
  <link rel="stylesheet" href="${katexCssHref}" />
  <style>${baseStyles()}</style>
</head>
<body>
  <header class="topbar">
    <div class="shell topbar-inner">
      <a class="brand" href="${yearIndexHref}">${activeYear} DSE 物理知识专题库</a>
      <nav class="nav-links">
        <a href="/subjects/physics">返回物理学习中心</a>
        <a href="${yearIndexHref}">${activeYear} 总览</a>
      </nav>
    </div>
  </header>
  <main class="shell">
    <section class="hero">
      <span class="eyebrow">知识体系样板</span>
      <h1>Paper 1 知识专题库</h1>
      <p class="subtitle">${escapeHtml(target.paperIndexSubtitle)}</p>
    </section>
    <section class="case-grid">
      ${cases.map(renderCaseCard).join('')}
    </section>
  </main>
  <footer><div class="shell">新增题目请维护 content/physics-dse/${activeYear}/p1/cases.ts，然后重新运行生成器。</div></footer>
</body>
</html>`
}

function renderYearIndex(cases: PhysicsCaseStudy[]) {
  return `<!doctype html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${activeYear} DSE 物理知识体系与真题考法库</title>
  <link rel="stylesheet" href="${katexCssHref}" />
  <style>${baseStyles()}</style>
</head>
<body>
  <header class="topbar">
    <div class="shell topbar-inner">
      <a class="brand" href="/subjects/physics">Shine Ray Future · Physics</a>
      <nav class="nav-links">
        <a href="/subjects/physics">返回物理学习中心</a>
        <a href="${paperOneHref}">Paper 1 专题</a>
      </nav>
    </div>
  </header>
  <main class="shell">
    <section class="hero">
      <span class="eyebrow">DSE 物理知识体系与真题考法库</span>
      <h1>${activeYear} DSE 物理知识点样板库</h1>
      <p class="subtitle">不是从题目开始讲，而是先建立知识系统：概念、公式、图像语言、常见误解和迁移方法都先讲清楚，再把应用案例放到后面做验证。</p>
      <p><a class="primary-link" href="${paperOneHref}">进入知识点样板</a></p>
    </section>
    <section class="case-grid">
      ${cases.map(renderCaseCard).join('')}
    </section>
  </main>
  <footer><div class="shell">这套生产流程可继续扩展到 2021-2025 真题。</div></footer>
</body>
</html>`
}

function writeFile(filePath: string, content: string) {
  ensureDir(path.dirname(filePath))
  fs.writeFileSync(filePath, content, 'utf8')
}

function copyCaseAssets(year: number, slug: string) {
  const sourceDir = path.join(process.cwd(), 'content', 'physics-dse', String(year), 'p1', 'assets')

  if (!fs.existsSync(sourceDir)) {
    return
  }

  const targetDir = path.join(outputRoot, 'p1', slug)
  ensureDir(targetDir)

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.startsWith(`${slug}-`)) {
      fs.copyFileSync(path.join(sourceDir, entry.name), path.join(targetDir, entry.name))
    }
  }
}

function buildTarget(target: BuildTarget) {
  setBuildTarget(target)
  const cases = target.cases
  copyKatexAssets(outputRoot)
  writeFile(path.join(outputRoot, 'index.html'), renderYearIndex(cases))
  writeFile(path.join(outputRoot, 'p1', 'index.html'), renderPaperIndex(target))

  for (const caseStudy of cases) {
    writeFile(
      path.join(outputRoot, 'p1', caseStudy.slug, 'index.html'),
      renderCasePage(caseStudy, cases)
    )
    copyCaseAssets(target.year, caseStudy.slug)
  }

  console.log(`Generated ${cases.length} physics case studies for ${activeYear} in ${outputRoot}`)
}

function build() {
  for (const target of buildTargets) {
    buildTarget(target)
  }
}

build()
