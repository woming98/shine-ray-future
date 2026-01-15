/**
 * 中一 (S1) 语法与词汇题目
 * 
 * 添加新题目：复制下面的模板，修改内容即可
 */

import type { GrammarQuestion } from './types'

export const s1GrammarQuestions: GrammarQuestion[] = [
  // ========== 语法题 ==========
  {
    id: 's1-g-001',
    grade: 'S1',
    type: 'choice',
    category: 'grammar',
    topic: 'Present Tense',
    difficulty: 'easy',
    question: 'She ___ to school every day.',
    options: ['go', 'goes', 'going', 'went'],
    answer: 'goes',
    explanation: '主语是第三人称单数 (She)，一般现在时态动词要加 -s 或 -es。'
  },
  {
    id: 's1-g-002',
    grade: 'S1',
    type: 'choice',
    category: 'grammar',
    topic: 'Articles',
    difficulty: 'easy',
    question: 'I saw ___ elephant at the zoo.',
    options: ['a', 'an', 'the', '-'],
    answer: 'an',
    explanation: 'elephant 以元音音素开头，所以用 "an"。'
  },
  {
    id: 's1-g-003',
    grade: 'S1',
    type: 'choice',
    category: 'grammar',
    topic: 'Past Tense',
    difficulty: 'easy',
    question: 'Yesterday, I ___ my grandmother.',
    options: ['visit', 'visits', 'visited', 'visiting'],
    answer: 'visited',
    explanation: '"Yesterday" 表示过去时间，动词用过去式 visited。'
  },
  {
    id: 's1-g-004',
    grade: 'S1',
    type: 'fill',
    category: 'grammar',
    topic: 'Be Verbs',
    difficulty: 'easy',
    question: 'They ___ (be) very happy yesterday.',
    answer: ['were'],
    explanation: '主语 They 是复数，过去式用 were。'
  },
  {
    id: 's1-g-005',
    grade: 'S1',
    type: 'error-correction',
    category: 'grammar',
    topic: 'Subject-Verb Agreement',
    difficulty: 'medium',
    question: 'Find and correct the error: "He don\'t like vegetables."',
    answer: ['He doesn\'t like vegetables.', 'doesn\'t'],
    explanation: '第三人称单数否定句用 doesn\'t，不是 don\'t。'
  },

  // ========== 词汇题 ==========
  {
    id: 's1-v-001',
    grade: 'S1',
    type: 'choice',
    category: 'vocabulary',
    topic: 'Opposites',
    difficulty: 'easy',
    question: 'What is the opposite of "happy"?',
    options: ['sad', 'angry', 'excited', 'tired'],
    answer: 'sad',
    explanation: 'happy（高兴）的反义词是 sad（悲伤）。'
  },
  {
    id: 's1-v-002',
    grade: 'S1',
    type: 'choice',
    category: 'vocabulary',
    topic: 'Word Meaning',
    difficulty: 'easy',
    question: 'Which word means "very big"?',
    options: ['tiny', 'huge', 'small', 'narrow'],
    answer: 'huge',
    explanation: 'huge 意思是"巨大的"，与 "very big" 意思相近。'
  },
  {
    id: 's1-v-003',
    grade: 'S1',
    type: 'choice',
    category: 'vocabulary',
    topic: 'Parts of Speech',
    difficulty: 'easy',
    question: 'Which word is a noun?',
    options: ['quickly', 'beautiful', 'happiness', 'run'],
    answer: 'happiness',
    explanation: 'happiness 是名词。quickly 是副词，beautiful 是形容词，run 是动词。'
  },

  // ========== 添加更多题目：复制上面的模板 ==========
  // {
  //   id: 's1-g-006',
  //   grade: 'S1',
  //   type: 'choice',
  //   category: 'grammar',
  //   topic: '主题',
  //   difficulty: 'easy',
  //   question: '题目内容',
  //   options: ['A', 'B', 'C', 'D'],
  //   answer: 'A',
  //   explanation: '解释'
  // },
]
