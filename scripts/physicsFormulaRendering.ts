import fs from 'node:fs'
import path from 'node:path'
import katex from 'katex'

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

function copyDir(source: string, target: string) {
  ensureDir(target)

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name)
    const targetPath = path.join(target, entry.name)

    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath)
    } else {
      fs.copyFileSync(sourcePath, targetPath)
    }
  }
}

export function copyKatexAssets(outputRoot: string) {
  const katexDist = path.join(process.cwd(), 'node_modules', 'katex', 'dist')
  const katexOutputRoot = path.join(outputRoot, 'vendor', 'katex')
  ensureDir(katexOutputRoot)
  fs.copyFileSync(path.join(katexDist, 'katex.min.css'), path.join(katexOutputRoot, 'katex.min.css'))
  copyDir(path.join(katexDist, 'fonts'), path.join(katexOutputRoot, 'fonts'))
}

const formulaLatexMap = new Map<string, string>([
  ['Q = mcΔT', 'Q=mc\\Delta T'],
  ['Q = mL', 'Q=mL'],
  ['pV = NkT', 'pV=NkT'],
  ['pV = nRT', 'pV=nRT'],
  ['N = pV / kT', 'N=\\dfrac{pV}{kT}'],
  ['N = pV/(kT)', 'N=\\dfrac{pV}{kT}'],
  ['N = pV/kT', 'N=\\dfrac{pV}{kT}'],
  ['N = nN_A', 'N=nN_A'],
  ['R = N_A k', 'R=N_Ak'],
  ['k = R / N_A', 'k=\\dfrac{R}{N_A}'],
  ['k = R/N_A', 'k=\\dfrac{R}{N_A}'],
  ['R / N_A', '\\dfrac{R}{N_A}'],
  ['N_A', 'N_A'],
  ['R ≈ 8.31 J mol^-1 K^-1', 'R\\approx8.31\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}'],
  ['R ≈ 8.31 J mol⁻¹ K⁻¹', 'R\\approx8.31\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}'],
  ['N_A ≈ 6.02 × 10^23 mol^-1', 'N_A\\approx6.02\\times10^{23}\\,\\mathrm{mol^{-1}}'],
  ['N_A ≈ 6.02 × 10²³ mol⁻¹', 'N_A\\approx6.02\\times10^{23}\\,\\mathrm{mol^{-1}}'],
  ['k ≈ 1.38 × 10^-23 J K^-1', 'k\\approx1.38\\times10^{-23}\\,\\mathrm{J\\,K^{-1}}'],
  ['k ≈ 1.38 × 10⁻²³ J K⁻¹', 'k\\approx1.38\\times10^{-23}\\,\\mathrm{J\\,K^{-1}}'],
  ['k = 1.38 × 10^-23 J K^-1', 'k=1.38\\times10^{-23}\\,\\mathrm{J\\,K^{-1}}'],
  ['k = 1.38 × 10⁻²³ J K⁻¹', 'k=1.38\\times10^{-23}\\,\\mathrm{J\\,K^{-1}}'],
  ['T(K) = t(°C) + 273', 'T(\\mathrm{K})=t({}^\\circ\\mathrm{C})+273'],
  ['T = 300 K', 'T=300\\,\\mathrm{K}'],
  ['T ≈ 300 K', 'T\\approx300\\,\\mathrm{K}'],
  ['20 °C ≈ 293 K', '20^\\circ\\mathrm{C}\\approx293\\,\\mathrm{K}'],
  ['25 °C ≈ 298 K', '25^\\circ\\mathrm{C}\\approx298\\,\\mathrm{K}'],
  ['293 K', '293\\,\\mathrm{K}'],
  ['298 K', '298\\,\\mathrm{K}'],
  ['slope = ΔT / Q = 1/(mc)', '\\mathrm{slope}=\\dfrac{\\Delta T}{Q}=\\dfrac{1}{mc}'],
  ['slope = ΔT / Q = 1 / (mc)', '\\mathrm{slope}=\\dfrac{\\Delta T}{Q}=\\dfrac{1}{mc}'],
  ['ΔT / Q = 1 / (mc)', '\\dfrac{\\Delta T}{Q}=\\dfrac{1}{mc}'],
  ['ΔT/Q', '\\dfrac{\\Delta T}{Q}'],
  ['ΔT / Q', '\\dfrac{\\Delta T}{Q}'],
  ['1/(mc)', '\\dfrac{1}{mc}'],
  ['1 cm³ = 10^-6 m³', '1\\,\\mathrm{cm^3}=10^{-6}\\,\\mathrm{m^3}'],
  ['1 cm³ = 10⁻⁶ m³', '1\\,\\mathrm{cm^3}=10^{-6}\\,\\mathrm{m^3}'],
  ['v = ds/dt', 'v=\\dfrac{ds}{dt}'],
  ['area = ∫v dt', '\\mathrm{area}=\\int v\\,dt'],
  ['(m s^-1)(s) = m', '(\\mathrm{m\\,s^{-1}})(\\mathrm{s})=\\mathrm{m}'],
  ['10^-6', '10^{-6}'],
  ['10⁻⁶', '10^{-6}'],
  ['10^-8', '10^{-8}'],
  ['10⁻⁸', '10^{-8}'],
  ['10^4', '10^4'],
  ['10⁴', '10^4'],
  ['10^6', '10^6'],
  ['10⁶', '10^6'],
  ['10^8', '10^8'],
  ['10⁸', '10^8'],
  ['10^12', '10^{12}'],
  ['10¹²', '10^{12}'],
  ['2.4 × 10^6', '2.4\\times10^6'],
  ['2.4 × 10⁶', '2.4\\times10^6'],
  ['6.02 × 10^23 mol⁻¹', '6.02\\times10^{23}\\,\\mathrm{mol^{-1}}'],
  ['300 K', '300\\,\\mathrm{K}'],
  ['50 °C', '50^\\circ\\mathrm{C}'],
  ['20°C', '20^\\circ\\mathrm{C}'],
  ['20 °C', '20^\\circ\\mathrm{C}'],
  ['25°C', '25^\\circ\\mathrm{C}'],
  ['25 °C', '25^\\circ\\mathrm{C}'],
  ['50°C', '50^\\circ\\mathrm{C}'],
  ['0°C', '0^\\circ\\mathrm{C}'],
  ['0 °C', '0^\\circ\\mathrm{C}'],
  ['m³', '\\mathrm{m^3}'],
  ['cm³', '\\mathrm{cm^3}'],
  ['J kg⁻¹ °C⁻¹', '\\mathrm{J\\,kg^{-1}}\\,{}^\\circ\\mathrm{C}^{-1}'],
  ['J kg^-1 °C^-1', '\\mathrm{J\\,kg^{-1}}\\,{}^\\circ\\mathrm{C}^{-1}'],
  ['J kg⁻¹ K⁻¹', '\\mathrm{J\\,kg^{-1}\\,K^{-1}}'],
  ['J kg^-1 K^-1', '\\mathrm{J\\,kg^{-1}\\,K^{-1}}'],
  ['J kg⁻¹', '\\mathrm{J\\,kg^{-1}}'],
  ['J kg^-1', '\\mathrm{J\\,kg^{-1}}'],
  ['J K⁻¹', '\\mathrm{J\\,K^{-1}}'],
  ['J K^-1', '\\mathrm{J\\,K^{-1}}'],
  ['m s^-1', '\\mathrm{m\\,s^{-1}}'],
  ['°C⁻¹', '{}^\\circ\\mathrm{C}^{-1}'],
  ['°C^-1', '{}^\\circ\\mathrm{C}^{-1}'],
  ['K⁻¹', '\\mathrm{K^{-1}}'],
  ['K^-1', '\\mathrm{K^{-1}}'],
  ['s^-1', '\\mathrm{s^{-1}}'],
  ['mol⁻¹', '\\mathrm{mol^{-1}}'],
  ['mol^-1', '\\mathrm{mol^{-1}}'],
  ['ΔT', '\\Delta T'],
])

const inlineMathTerms = [...formulaLatexMap.entries()]
  .map(([text, latex]) => ({ text, latex }))
  .sort((a, b) => b.text.length - a.text.length)

const inlineMathRegexTerms: Array<{
  regex: RegExp
  toLatex: (value: string) => string
}> = [
  {
    regex: /\d+(?:\.\d+)?\s*[×x]\s*10[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/g,
    toLatex: (value) => {
      const match = value.match(/^(\d+(?:\.\d+)?)\s*[×x]\s*10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)$/)
      return match ? `${match[1]}\\times10^{${normalizeSuperscript(match[2])}}` : fallbackLatex(value)
    },
  },
  {
    regex: /\d+(?:\.\d+)?\s*[×x]\s*10\^-?\d+/g,
    toLatex: (value) => {
      const match = value.match(/^(\d+(?:\.\d+)?)\s*[×x]\s*10\^(-?\d+)$/)
      return match ? `${match[1]}\\times10^{${match[2]}}` : fallbackLatex(value)
    },
  },
  {
    regex: /10\^-?\d+/g,
    toLatex: (value) => {
      const exponent = value.replace(/^10\^/, '')
      return `10^{${exponent}}`
    },
  },
  {
    regex: /10[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/g,
    toLatex: (value) => `10^{${normalizeSuperscript(value.replace(/^10/, ''))}}`,
  },
]

const superscriptDigits: Record<string, string> = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  '⁻': '-',
}

function normalizeSuperscript(value: string) {
  return [...value].map((character) => superscriptDigits[character] ?? character).join('')
}

function fallbackLatex(value: string) {
  return value
    .trim()
    .replace(/Δ/g, '\\Delta ')
    .replace(/×/g, '\\times')
    .replace(/\s+/g, ' ')
}

function renderMath(latex: string, displayMode = false) {
  return katex.renderToString(latex, {
    displayMode,
    throwOnError: false,
    strict: 'ignore',
    trust: false,
  })
}

function formulaToLatex(value: string) {
  return formulaLatexMap.get(value.trim()) ?? fallbackLatex(value)
}

export function renderInlineMath(value: string) {
  return renderMath(formulaToLatex(value), false)
}

export function renderDisplayFormula(value: string) {
  return renderMath(formulaToLatex(value), true)
}

export function renderRichText(value: string) {
  let cursor = 0
  let output = ''

  while (cursor < value.length) {
    let best: { index: number; text: string; latex: string } | undefined

    for (const term of inlineMathTerms) {
      const index = value.indexOf(term.text, cursor)

      if (
        index !== -1 &&
        (!best || index < best.index || (index === best.index && term.text.length > best.text.length))
      ) {
        best = { index, ...term }
      }
    }

    for (const term of inlineMathRegexTerms) {
      term.regex.lastIndex = cursor
      const match = term.regex.exec(value)

      if (
        match &&
        (!best || match.index < best.index || (match.index === best.index && match[0].length > best.text.length))
      ) {
        best = {
          index: match.index,
          text: match[0],
          latex: term.toLatex(match[0]),
        }
      }
    }

    if (!best) {
      output += escapeHtml(value.slice(cursor))
      break
    }

    output += escapeHtml(value.slice(cursor, best.index))
    output += renderMath(best.latex, false)
    cursor = best.index + best.text.length
  }

  return output
}
