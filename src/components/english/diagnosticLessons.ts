export type LessonKey =
  | 'who-whom'
  | 'so-that'
  | 'present-participle-clause'
  | 'subject-verb-agreement'
  | 'tense-sequence'
  | 'prepositions'
  | 'possessive-noun'
  | 'word-form-adj-adv'
  | 'spelling'
  | 'articles'

export type Lesson = {
  key: LessonKey
  title: string
  titleZh: string
  summary: string
  keyPoints: string[]
  examples: Array<{ wrong?: string; right: string; note?: string }>
}

export const LESSONS: Record<LessonKey, Lesson> = {
  'who-whom': {
    key: 'who-whom',
    title: 'who vs whom',
    titleZh: 'who / whom 用法',
    summary: 'who 作主语；whom 作宾语。把句子换成 he/him、she/her、they/them 来判断更快。',
    keyPoints: [
      '主语用 who（= he/she/they）',
      '宾语用 whom（= him/her/them）',
      '介词后通常用 whom：to/for/with/at + whom',
    ],
    examples: [
      { right: 'Who called you last night?', note: 'Who = he/she/they' },
      { right: 'Whom did you meet after school?', note: 'Whom = him/her/them' },
      { wrong: 'Who are you talking to?', right: 'Whom are you talking to?', note: '正式书面语' },
    ],
  },
  'so-that': {
    key: 'so-that',
    title: 'so + adj/adv + that...',
    titleZh: 'so…that… 句型',
    summary: 'so + 形容词/副词 + that + 结果，从句说明“到什么程度所以导致什么结果”。',
    keyPoints: [
      'so + adj + that: so tired that I fell asleep',
      'so + adv + that: ran so fast that I won',
      '注意不要漏掉 that（在正式写作中更推荐保留）',
    ],
    examples: [
      { right: 'The bag was so heavy that I couldn’t lift it.' },
      { right: 'She spoke so quietly that I couldn’t hear her.' },
    ],
  },
  'present-participle-clause': {
    key: 'present-participle-clause',
    title: 'Present participle clause',
    titleZh: '现在分词开头（V-ing）',
    summary: '用 V-ing 开头表示同一主语下“一个动作紧接着另一个动作”，或替代 because/as/since。',
    keyPoints: [
      'V-ing 分句的主语要和主句主语一致（避免悬垂分词）',
      '可表示时间顺序：Walking home, I saw…',
      '也可表示原因：Feeling sick, he stayed at home.',
    ],
    examples: [
      { right: 'Hearing the news, she smiled.' },
      { wrong: 'Walking down the street, the rain started.', right: 'While I was walking down the street, the rain started.', note: '主语不一致' },
    ],
  },
  'subject-verb-agreement': {
    key: 'subject-verb-agreement',
    title: 'Subject–verb agreement',
    titleZh: '主谓一致',
    summary: '第三人称单数一般现在时动词加 -s/-es；do/does 区分要熟。',
    keyPoints: ['He/She/It + V-s', 'do/does：He doesn’t…', 'One of + plural noun 仍用单数动词'],
    examples: [
      { wrong: 'He don’t like it.', right: 'He doesn’t like it.' },
      { wrong: 'My friends likes music.', right: 'My friends like music.' },
    ],
  },
  'tense-sequence': {
    key: 'tense-sequence',
    title: 'Tense sequence',
    titleZh: '时态呼应',
    summary: '叙事常用过去时；从句和主句时态要合理呼应（特别是 reported speech）。',
    keyPoints: [
      '叙事：过去时为主（was/were, said, went）',
      '转述：He said (that) he was…',
      '直接引语里可用现在时表达“当时说的话”',
    ],
    examples: [
      { wrong: 'He said he is tired.', right: 'He said he was tired.' },
      { right: 'He said, “I am tired.”', note: '直接引语保留原时态' },
    ],
  },
  prepositions: {
    key: 'prepositions',
    title: 'Prepositions',
    titleZh: '介词搭配',
    summary: '很多动词/形容词固定搭配：depend on, rely on, interested in…',
    keyPoints: ['牢记固定搭配（collocation）', '介词后接名词/动名词', '错误最多的是 in/on/at/by/for'],
    examples: [
      { wrong: 'depend with', right: 'depend on' },
      { wrong: 'good in maths', right: 'good at maths' },
    ],
  },
  'possessive-noun': {
    key: 'possessive-noun',
    title: "Possessive noun (’s)",
    titleZh: '名词所有格（’s）',
    summary: '表示“某人的…”：Tom’s book；复数以 s 结尾的名词只加 ’。',
    keyPoints: ["单数名词加 ’s：the boy’s bag", "复数名词以 s 结尾加 ’：students’ books", '也可用 of 结构替代：the future of the city'],
    examples: [
      { wrong: 'the student bag', right: "the student’s bag" },
      { right: "the teachers’ office", note: '多位老师共有' },
    ],
  },
  'word-form-adj-adv': {
    key: 'word-form-adj-adv',
    title: 'Word form (adj/adv)',
    titleZh: '词性变化（形容词/副词）',
    summary: '形容词修饰名词；副词修饰动词/形容词/整句。注意 -ly 变化。',
    keyPoints: ['形容词：a careful student', '副词：study carefully', '有些词不加 -ly：fast, hard'],
    examples: [
      { wrong: 'She sings beautiful.', right: 'She sings beautifully.' },
      { wrong: 'He is very happily.', right: 'He is very happy.' },
    ],
  },
  spelling: {
    key: 'spelling',
    title: 'Spelling',
    titleZh: '拼写',
    summary: '常见错拼要单独记：thought / though / through…',
    keyPoints: ['把错词加入错词本', '用例句记忆更牢', '注意同音异形词'],
    examples: [
      { wrong: 'throught', right: 'thought' },
      { wrong: 'advise (n.)', right: 'advice', note: '词性不同拼写不同' },
    ],
  },
  articles: {
    key: 'articles',
    title: 'Articles (a/an/the)',
    titleZh: '冠词（a/an/the）',
    summary: '第一次提到用 a/an；特指用 the；元音音素开头用 an。',
    keyPoints: ['a/an：首次提到、泛指', 'the：特指/唯一/再次提到', 'an 看发音不是字母'],
    examples: [
      { right: 'I saw a dog. The dog was friendly.' },
      { wrong: 'an university', right: 'a university', note: '发音 /juː/ 不是元音音素' },
    ],
  },
}

export const topicToLessonKey = (topic: string): LessonKey | null => {
  const t = topic.trim().toLowerCase()
  if (t.includes('who') || t.includes('whom')) return 'who-whom'
  if (t.includes('so') && t.includes('that')) return 'so-that'
  if (t.includes('participle') || t.includes('v-ing') || t.includes('present participle')) {
    return 'present-participle-clause'
  }
  if (t.includes('agreement') || t.includes('subject-verb')) return 'subject-verb-agreement'
  if (t.includes('tense') || t.includes('sequence') || t.includes('reported')) return 'tense-sequence'
  if (t.includes('preposition') || t.includes('collocation')) return 'prepositions'
  if (t.includes('possessive') || t.includes("’s")) return 'possessive-noun'
  if (t.includes('adj') || t.includes('adv') || t.includes('word form')) return 'word-form-adj-adv'
  if (t.includes('spelling')) return 'spelling'
  if (t.includes('article')) return 'articles'
  return null
}

