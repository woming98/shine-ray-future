/**
 * 中一 (S1) 语法与词汇题目
 * 
 * 添加新题目：复制下面的模板，修改内容即可
 */

import type { GrammarQuestion } from './types'

export const s1GrammarQuestions: GrammarQuestion[] = [
  // ========== 语法题 ==========
  // 说明：以下新增题目更贴近「中一插班」Grammar & Vocab 常见题型（proofreading / usage / sentence patterns）。
  // 为避免版权问题，题目与文本均为原创，但覆盖相同考点。
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

  // ========== Proofreading（每句一错）==========
  {
    id: 's1-g-006',
    grade: 'S1',
    type: 'error-correction',
    category: 'grammar',
    topic: 'Possessive noun (’s)',
    difficulty: 'medium',
    question: 'Find and correct the error: "The boy future is bright."',
    answer: ["The boy's future is bright.", "boy's"],
    explanation: "表示“某人的…”要用所有格：the boy's future。"
  },
  {
    id: 's1-g-007',
    grade: 'S1',
    type: 'error-correction',
    category: 'grammar',
    topic: 'Prepositions / collocations',
    difficulty: 'medium',
    question: 'Find and correct the error: "You can depend with your friends."',
    answer: ['You can depend on your friends.', 'depend on'],
    explanation: '固定搭配是 depend on（= rely on）。'
  },
  {
    id: 's1-g-008',
    grade: 'S1',
    type: 'error-correction',
    category: 'grammar',
    topic: 'Tense sequence',
    difficulty: 'medium',
    question: 'Find and correct the error: "He said he is tired yesterday."',
    answer: ['He said he was tired yesterday.', 'was'],
    explanation: '转述过去说的话：He said + past（was）。'
  },
  {
    id: 's1-g-009',
    grade: 'S1',
    type: 'error-correction',
    category: 'grammar',
    topic: 'who / whom',
    difficulty: 'hard',
    question: 'Find and correct the error: "Whom is your new class teacher?"',
    answer: ['Who is your new class teacher?', 'Who'],
    explanation: '问“是谁”作主语用 who。'
  },
  {
    id: 's1-g-010',
    grade: 'S1',
    type: 'error-correction',
    category: 'grammar',
    topic: 'Word form (adj/adv)',
    difficulty: 'medium',
    question: 'Find and correct the error: "She speaks very polite to strangers."',
    answer: ['She speaks very politely to strangers.', 'politely'],
    explanation: '修饰动词 speaks 用副词 politely。'
  },
  {
    id: 's1-g-011',
    grade: 'S1',
    type: 'error-correction',
    category: 'grammar',
    topic: "It’s vs its",
    difficulty: 'medium',
    question: 'Find and correct the error: "Its such a sunny morning."',
    answer: ["It's such a sunny morning.", "It's"],
    explanation: "It's = it is；its 是物主代词（它的）。"
  },
  {
    id: 's1-g-012',
    grade: 'S1',
    type: 'error-correction',
    category: 'grammar',
    topic: 'Present participle clause (V-ing)',
    difficulty: 'hard',
    question: 'Find and correct the error: "Looking out of the window, an accident happened."',
    answer: [
      'While I was looking out of the window, an accident happened.',
      'While I was looking out of the window,'
    ],
    explanation: 'V-ing 分句主语必须与主句一致；这里应改为 while 从句。'
  },

  // ========== Sentence patterns / usage ==========
  {
    id: 's1-g-013',
    grade: 'S1',
    type: 'choice',
    category: 'grammar',
    topic: 'so…that…',
    difficulty: 'medium',
    question: 'Choose the correct sentence.',
    options: [
      'The music was so loud that I covered my ears.',
      'The music was so loud to cover my ears.',
      'The music was such loud that I cover my ears.',
      'The music was so loud because I covered my ears.',
    ],
    answer: 'The music was so loud that I covered my ears.',
    explanation: 'so + adj + that + result：so loud that…'
  },
  {
    id: 's1-g-014',
    grade: 'S1',
    type: 'choice',
    category: 'grammar',
    topic: 'who / whom',
    difficulty: 'hard',
    question: 'Choose the best answer: "To ____ did you give the gift?"',
    options: ['who', 'whom', 'whose', 'which'],
    answer: 'whom',
    explanation: '介词 to 后面是宾语，用 whom（正式书面语）。'
  },

  // ========== Unit vocab（以语法区的 vocabulary 小题呈现）==========
  {
    id: 's1-g-015',
    grade: 'S1',
    type: 'fill',
    category: 'vocabulary',
    topic: 'Word meaning',
    difficulty: 'easy',
    question: 'Fill in the blank: "Don’t ____ about tomorrow. Focus on today."',
    answer: ['worry'],
    explanation: 'worry (v.) = 担心。worry about + n./V-ing。'
  },
  {
    id: 's1-g-016',
    grade: 'S1',
    type: 'fill',
    category: 'vocabulary',
    topic: 'Word form (past participle adjective)',
    difficulty: 'medium',
    question: 'Fill in the blank: "I was ____ by her kindness." (move)',
    answer: ['moved'],
    explanation: 'moved (adj.) = 感动的；be moved by…'
  },
  {
    id: 's1-g-017',
    grade: 'S1',
    type: 'fill',
    category: 'vocabulary',
    topic: 'Word meaning',
    difficulty: 'medium',
    question: 'Fill in the blank: "It is hard to ____ the weather next week."',
    answer: ['predict'],
    explanation: 'predict (v.) = 预测；predict + noun/clause。'
  },
  {
    id: 's1-g-018',
    grade: 'S1',
    type: 'fill',
    category: 'vocabulary',
    topic: 'Word meaning',
    difficulty: 'easy',
    question: 'Fill in the blank: "She tried to ____ her little brother after he fell."',
    answer: ['comfort'],
    explanation: 'comfort (v.) = 安慰。'
  },
  {
    id: 's1-g-019',
    grade: 'S1',
    type: 'fill',
    category: 'vocabulary',
    topic: 'Word meaning',
    difficulty: 'easy',
    question: 'Fill in the blank: "He felt ____ when he lost his wallet."',
    answer: ['upset'],
    explanation: 'upset (adj.) = 心烦的/难过的。'
  },
  {
    id: 's1-g-020',
    grade: 'S1',
    type: 'fill',
    category: 'vocabulary',
    topic: 'Word meaning',
    difficulty: 'easy',
    question: 'Fill in the blank: "Miss Wong is a patient and ____ teacher."',
    answer: ['caring'],
    explanation: 'caring (adj.) = 关心他人的；体贴的。'
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
