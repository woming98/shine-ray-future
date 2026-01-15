/**
 * 英文测试题目数据汇总
 */

// 类型导出
export type {
  Grade,
  Difficulty,
  ReadingQuestion,
  ReadingPassage,
  GrammarQuestion,
  VocabularyType,
  VocabularyQuestion,
  WritingType,
  WritingTask,
  WritingScore,
  TestConfig,
} from './types'

// 中一 (S1) 题目
export { s1ReadingPassages } from './s1-reading'
export { s1GrammarQuestions } from './s1-grammar'
export { s1VocabularyQuestions } from './s1-vocabulary'
export { s1WritingTasks } from './s1-writing'

// 中二 (S2) 题目 - 待添加
// export { s2ReadingPassages } from './s2-reading'
// export { s2GrammarQuestions } from './s2-grammar'
// export { s2VocabularyQuestions } from './s2-vocabulary'
// export { s2WritingTasks } from './s2-writing'

// 中三 (S3) 题目 - 待添加
// export { s3ReadingPassages } from './s3-reading'
// export { s3GrammarQuestions } from './s3-grammar'
// export { s3VocabularyQuestions } from './s3-vocabulary'
// export { s3WritingTasks } from './s3-writing'

import type { TestConfig, Grade } from './types'
import { s1ReadingPassages } from './s1-reading'
import { s1GrammarQuestions } from './s1-grammar'
import { s1VocabularyQuestions } from './s1-vocabulary'
import { s1WritingTasks } from './s1-writing'

/**
 * 获取指定年级的测试配置
 */
export function getTestConfig(grade: Grade): TestConfig {
  switch (grade) {
    case 'S1':
      return {
        grade: 'S1',
        gradeLabel: '中一',
        reading: {
          timeLimit: 20,
          passages: s1ReadingPassages,
        },
        grammar: {
          timeLimit: 15,
          questions: s1GrammarQuestions,
        },
        vocabulary: {
          timeLimit: 15,
          questions: s1VocabularyQuestions,
        },
        writing: {
          timeLimit: 30,
          tasks: s1WritingTasks,
        },
      }
    case 'S2':
      // 中二题目 - 暂时使用中一的词汇题作为占位
      return {
        grade: 'S2',
        gradeLabel: '中二',
        reading: {
          timeLimit: 25,
          passages: [], // 待添加
        },
        grammar: {
          timeLimit: 20,
          questions: [], // 待添加
        },
        vocabulary: {
          timeLimit: 15,
          questions: s1VocabularyQuestions, // 暂用S1词汇题
        },
        writing: {
          timeLimit: 35,
          tasks: [], // 待添加
        },
      }
    case 'S3':
      // 中三题目 - 暂时使用中一的词汇题作为占位
      return {
        grade: 'S3',
        gradeLabel: '中三',
        reading: {
          timeLimit: 30,
          passages: [], // 待添加
        },
        grammar: {
          timeLimit: 25,
          questions: [], // 待添加
        },
        vocabulary: {
          timeLimit: 15,
          questions: s1VocabularyQuestions, // 暂用S1词汇题
        },
        writing: {
          timeLimit: 40,
          tasks: [], // 待添加
        },
      }
    default:
      throw new Error(`Unknown grade: ${grade}`)
  }
}

/**
 * 年级列表
 */
export const gradeOptions: { value: Grade; label: string }[] = [
  { value: 'S1', label: '中一 (S1)' },
  { value: 'S2', label: '中二 (S2)' },
  { value: 'S3', label: '中三 (S3)' },
]

/**
 * 板块列表
 */
export const sectionOptions = [
  { value: 'reading', label: 'Reading', labelZh: '阅读理解', icon: 'BookOpen' },
  { value: 'grammar', label: 'Grammar & Vocabulary', labelZh: '语法与词汇', icon: 'FileText' },
  { value: 'vocabulary', label: 'Vocabulary Test', labelZh: '词汇量测试', icon: 'BookA' },
  { value: 'writing', label: 'Writing', labelZh: '写作', icon: 'PenTool' },
] as const

export type SectionType = typeof sectionOptions[number]['value']
