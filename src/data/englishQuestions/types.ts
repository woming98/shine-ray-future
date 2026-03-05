/**
 * 英文测试数据类型定义
 */

// 年级类型
export type Grade = 'S1' | 'S2' | 'S3'

// 难度等级
export type Difficulty = 'easy' | 'medium' | 'hard'

// ========== Reading 阅读理解 ==========

export interface ReadingQuestion {
  id: string
  type: 'choice' | 'true-false' | 'fill'
  question: string
  options?: string[]
  answer: string | string[]
  explanation: string
}

export interface ReadingPassage {
  id: string
  grade: Grade
  title: string
  passage: string
  difficulty: Difficulty
  questions: ReadingQuestion[]
}

// ========== Grammar & Vocabulary 语法词汇 ==========

export interface GrammarQuestion {
  id: string
  grade: Grade
  type: 'choice' | 'fill' | 'error-correction'
  category: 'grammar' | 'vocabulary'
  topic: string
  question: string
  options?: string[]
  answer: string | string[]
  explanation: string
  difficulty: Difficulty
}

// ========== Vocabulary 词汇量测试 ==========

export type VocabularyType = 'synonym' | 'antonym' | 'meaning' | 'context'

export interface VocabularyQuestion {
  id: string
  grade: Grade
  type: VocabularyType
  question: string
  word: string                    // 目标单词
  options: string[]
  answer: string
  explanation: string
  difficulty: Difficulty
}

// ========== Writing 写作 ==========

export type WritingType = 'email' | 'essay' | 'letter' | 'story' | 'report' | 'article'

export interface WritingTask {
  id: string
  grade: Grade
  type: WritingType
  title: string
  prompt: string
  wordLimit: { min: number; max: number }
  tips: string[]
  sampleAnswer?: string
}

// AI 评分结果
export interface WritingScore {
  content: number
  language: number
  organization: number
  total: number
  wordCount: number
  feedback: {
    strengths: string[]
    improvements: string[]
    correctedSentences?: { original: string; corrected: string }[]
  }
  overallComment: string
}

// ========== 测试配置 ==========

export interface TestConfig {
  grade: Grade
  gradeLabel: string
  reading: {
    timeLimit: number // 分钟
    passages: ReadingPassage[]
  }
  grammar: {
    timeLimit: number
    questions: GrammarQuestion[]
  }
  vocabulary: {
    timeLimit: number
    questions: VocabularyQuestion[]
  }
  writing: {
    timeLimit: number
    tasks: WritingTask[]
  }
}
