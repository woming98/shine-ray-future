import { C1DetailedChapter } from '../constants/c1Notes'
import { BAFSNotePart } from '../constants/notes'

const line = (text = '') => `${text}\n`

export function buildDetailedNotesMarkdown(part: BAFSNotePart, chapters: C1DetailedChapter[]) {
  let markdown = line(`# ${part.code} ${part.title}`)
  markdown += line()
  markdown += line(`> ${part.description}`)
  markdown += line(`> 來源 / Source: ${part.sourceBook}`)
  markdown += line()
  markdown += line('中英雙語完整筆記 / Complete Bilingual Notes')
  markdown += line()

  chapters.forEach((chapter) => {
    markdown += line(`## Chapter ${chapter.number}: ${chapter.title} / ${chapter.titleEn}`)
    markdown += line()
    markdown += line(`**學習目標：** ${chapter.objective.zh}`)
    markdown += line()
    markdown += line(`**Objective:** ${chapter.objective.en}`)
    markdown += line()

    chapter.sections.forEach((section) => {
      markdown += line(`### ${section.title} / ${section.titleEn}`)
      markdown += line()
      section.points.forEach((point) => {
        markdown += line(`- ${point.zh}`)
        markdown += line(`  - ${point.en}`)
      })
      markdown += line()
    })

    markdown += line('### 關鍵詞彙 / Key Terms')
    markdown += line()
    chapter.terms.forEach((term) => {
      markdown += line(`- **${term.term} / ${term.termEn}**`)
      markdown += line(`  - ${term.definition}`)
      markdown += line(`  - ${term.definitionEn}`)
    })
    markdown += line()

    markdown += line('### DSE 作答提示 / Exam Tips')
    markdown += line()
    chapter.examTips.forEach((tip) => {
      markdown += line(`- ${tip.zh}`)
      markdown += line(`  - ${tip.en}`)
    })
    markdown += line()

    markdown += line('### 快速自測 / Quick Check')
    markdown += line()
    chapter.questions.forEach((question, index) => {
      markdown += line(`${index + 1}. **${question.question}**`)
      markdown += line(`   - ${question.questionEn}`)
      markdown += line(`   - **答案：** ${question.answer}`)
      markdown += line(`   - **Answer:** ${question.answerEn}`)
    })
    markdown += line()
    markdown += line('---')
    markdown += line()
  })

  return markdown
}

export function downloadDetailedNotes(part: BAFSNotePart, chapters: C1DetailedChapter[]) {
  const markdown = buildDetailedNotesMarkdown(part, chapters)
  const blob = new Blob(['\uFEFF', markdown], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = `${part.code}-${part.title}-中英雙語筆記.md`
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}
