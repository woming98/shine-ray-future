/**
 * 从 CSV 导入 DSE 成绩 TOP50 排行榜数据
 *
 * - 输入：data/全港中學DSE成績TOP50_2026.csv（UTF-8）
 * - 输出：src/data/dseTop50.generated.ts
 */

import fs from 'node:fs'
import path from 'node:path'
import Papa from 'papaparse'

export interface DseSchool {
  rank: number
  name: string
  chineseScore: string
  englishScore: string
  mathScore: string
  avgScore: string
  total5Plus: string
  total4Plus: string
  website: string
}

function normalizeHeader(h: string): string {
  return (h || '').trim()
}

async function main() {
  const projectRoot = process.cwd()
  const csvPath = path.resolve(projectRoot, 'data/全港中學DSE成績TOP50_2026.csv')
  const outTsPath = path.resolve(projectRoot, 'src/data/dseTop50.generated.ts')

  if (!fs.existsSync(csvPath)) {
    console.error('未找到 CSV 文件：', csvPath)
    process.exit(1)
  }

  const csv = fs.readFileSync(csvPath, 'utf8')
  const parsed = Papa.parse<Record<string, string>>(csv, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => normalizeHeader(h),
    transform: (v) => (typeof v === 'string' ? v.trim() : v),
  })

  if (parsed.errors?.length) {
    console.error('CSV 解析错误：', parsed.errors.slice(0, 5))
    process.exit(1)
  }

  const rows = parsed.data || []
  const schools: DseSchool[] = []

  for (const r of rows) {
    const rankStr = r['排名'] || ''
    const rank = parseInt(rankStr.replace(/[^0-9]/g, ''), 10)
    if (!rank || isNaN(rank)) continue

    const name = (r['學校'] || '').replace(/^\*/, '').trim() // 去掉前面的 * 号
    if (!name) continue

    const website = r['網頁'] || r['网页'] || ''

    schools.push({
      rank,
      name,
      chineseScore: r['中文5+%'] || '/',
      englishScore: r['英文5+%'] || '/',
      mathScore: r['數學必修5+%'] || r['数学必修5+%'] || '/',
      avgScore: r['中英數5+%平均'] || r['中英数5+%平均'] || '/',
      total5Plus: r['總5+%'] || r['总5+%'] || '/',
      total4Plus: r['總4+%'] || r['总4+%'] || '/',
      website: website.startsWith('http') ? website : (website ? `https://${website}` : '#'),
    })
  }

  // 按排名排序
  schools.sort((a, b) => a.rank - b.rank)

  // 生成 TypeScript 文件
  const ts = `/* eslint-disable */
// 该文件由 scripts/importTop50FromCsv.ts 自动生成，请勿手动修改。

export interface DseSchool {
  rank: number
  name: string
  chineseScore: string
  englishScore: string
  mathScore: string
  avgScore: string
  total5Plus: string
  total4Plus: string
  website: string
}

export const dseTop50: DseSchool[] = ${JSON.stringify(schools, null, 2)}
`

  fs.mkdirSync(path.dirname(outTsPath), { recursive: true })
  fs.writeFileSync(outTsPath, ts, 'utf8')

  console.log(`已生成：${outTsPath}`)
  console.log(`学校数量：${schools.length}`)
}

main().catch((err) => {
  console.error('导入失败：', err)
  process.exit(1)
})
