/**
 * DSE 2026 考试时间表数据
 * 数据来源：香港考试及评核局
 */

export interface ExamSession {
  time: string
  subject: string
  subjectZh: string
}

export interface ExamDay {
  date: string
  dateZh: string
  day: string
  sessions: ExamSession[]
}

export const DSE_EXAM_DATE = '2026-04-08' // DSE 首日考试日期

export const dseSchedule2026: ExamDay[] = [
  {
    date: '2026-04-08',
    dateZh: '四月八日',
    day: '星期三',
    sessions: [
      { time: '8:30 - 12:30', subject: 'Visual Arts 1,2', subjectZh: '視覺藝術（一）及（二）' },
    ],
  },
  {
    date: '2026-04-09',
    dateZh: '四月九日',
    day: '星期四',
    sessions: [
      { time: '8:30 - 10:00', subject: 'Chinese Language 1', subjectZh: '中國語文（一）' },
      { time: '10:45 - 13:00', subject: 'Chinese Language 2', subjectZh: '中國語文（二）' },
    ],
  },
  {
    date: '2026-04-10',
    dateZh: '四月十日',
    day: '星期五',
    sessions: [
      { time: '8:30 - 10:00', subject: 'English Language 1', subjectZh: '英國語文（一）' },
      { time: '11:00 - 13:00', subject: 'English Language 2', subjectZh: '英國語文（二）' },
    ],
  },
  {
    date: '2026-04-11',
    dateZh: '四月十一日',
    day: '星期六',
    sessions: [
      { time: '9:15 - 12:10*', subject: 'English Language 3 (Listening and Integrated Skills)', subjectZh: '英國語文（三）（聆聽及綜合能力考核）' },
    ],
  },
  {
    date: '2026-04-13',
    dateZh: '四月十三日',
    day: '星期一',
    sessions: [
      { time: '8:30 - 10:45', subject: 'Mathematics Compulsory Part 1', subjectZh: '數學必修部分（一）' },
      { time: '11:30 - 12:45', subject: 'Mathematics Compulsory Part 2', subjectZh: '數學必修部分（二）' },
    ],
  },
  {
    date: '2026-04-14',
    dateZh: '四月十四日',
    day: '星期二',
    sessions: [
      { time: '8:30 - 10:30', subject: 'Citizenship and Social Development', subjectZh: '公民與社會發展' },
    ],
  },
  {
    date: '2026-04-15',
    dateZh: '四月十五日',
    day: '星期三',
    sessions: [
      { time: '8:30 - 10:15', subject: 'Ethics & Religious Studies 1', subjectZh: '倫理與宗教（一）' },
      { time: '11:00 - 12:45', subject: 'Ethics & Religious Studies 2', subjectZh: '倫理與宗教（二）' },
    ],
  },
  {
    date: '2026-04-16',
    dateZh: '四月十六日',
    day: '星期四',
    sessions: [
      { time: '8:30 - 11:00', subject: 'Chemistry 1', subjectZh: '化學（一）' },
      { time: '11:45 - 12:45', subject: 'Chemistry 2', subjectZh: '化學（二）' },
    ],
  },
  {
    date: '2026-04-17',
    dateZh: '四月十七日',
    day: '星期五',
    sessions: [
      { time: '8:30 - 10:30', subject: 'Design & Applied Technology 1', subjectZh: '設計與應用科技（一）' },
      { time: '11:15 - 13:15', subject: 'Design & Applied Technology 2', subjectZh: '設計與應用科技（二）' },
      { time: '8:30 - 11:30', subject: 'Literature in English 1', subjectZh: '英語文學（一）' },
      { time: '13:30 - 15:30', subject: 'Literature in English 2', subjectZh: '英語文學（二）' },
    ],
  },
  {
    date: '2026-04-18',
    dateZh: '四月十八日',
    day: '星期六',
    sessions: [
      { time: '8:30 - 10:30', subject: 'Health Management & Social Care 1', subjectZh: '健康管理與社會關懷（一）' },
      { time: '11:15 - 13:00', subject: 'Health Management & Social Care 2', subjectZh: '健康管理與社會關懷（二）' },
    ],
  },
  {
    date: '2026-04-20',
    dateZh: '四月二十日',
    day: '星期一',
    sessions: [
      { time: '8:30 - 11:00', subject: 'Biology 1', subjectZh: '生物（一）' },
      { time: '11:45 - 12:45', subject: 'Biology 2', subjectZh: '生物（二）' },
    ],
  },
  {
    date: '2026-04-21',
    dateZh: '四月二十一日',
    day: '星期二',
    sessions: [
      { time: '8:30 - 10:30', subject: 'Chinese Literature 1', subjectZh: '中國文學（一）' },
      { time: '11:15 - 13:15', subject: 'Chinese Literature 2', subjectZh: '中國文學（二）' },
      { time: '8:30 - 10:00', subject: 'Technology & Living 1', subjectZh: '科技與生活（一）' },
      { time: '10:45 - 12:45', subject: 'Technology & Living 2', subjectZh: '科技與生活（二）' },
    ],
  },
  {
    date: '2026-04-22',
    dateZh: '四月二十二日',
    day: '星期三',
    sessions: [
      { time: '8:30 - 11:00', subject: 'Physics 1', subjectZh: '物理（一）' },
      { time: '11:45 - 12:45', subject: 'Physics 2', subjectZh: '物理（二）' },
    ],
  },
  {
    date: '2026-04-23',
    dateZh: '四月二十三日',
    day: '星期四',
    sessions: [
      { time: '8:30 - 11:15', subject: 'Geography 1', subjectZh: '地理（一）' },
      { time: '12:00 - 13:15', subject: 'Geography 2', subjectZh: '地理（二）' },
    ],
  },
  {
    date: '2026-04-24',
    dateZh: '四月二十四日',
    day: '星期五',
    sessions: [
      { time: '8:30 - 10:30', subject: 'Information & Communication Technology 1', subjectZh: '資訊及通訊科技（一）' },
      { time: '11:15 - 12:45', subject: 'Information & Communication Technology 2', subjectZh: '資訊及通訊科技（二）' },
    ],
  },
  {
    date: '2026-04-25',
    dateZh: '四月二十五日',
    day: '星期六',
    sessions: [
      { time: '8:30 - 10:30', subject: 'History 1', subjectZh: '歷史（一）' },
      { time: '11:15 - 12:45', subject: 'History 2', subjectZh: '歷史（二）' },
    ],
  },
  {
    date: '2026-04-27',
    dateZh: '四月二十七日',
    day: '星期一',
    sessions: [
      { time: '8:30 - 9:30', subject: 'Business, Accounting & Financial Studies 1', subjectZh: '企業、會計與財務概論（一）' },
      { time: '10:15 - 12:45', subject: 'Business, Accounting & Financial Studies 2', subjectZh: '企業、會計與財務概論（二）' },
    ],
  },
  {
    date: '2026-04-28',
    dateZh: '四月二十八日',
    day: '星期二',
    sessions: [
      { time: '8:30 - 10:30', subject: 'Physical Education 1', subjectZh: '體育（一）' },
      { time: '11:15 - 12:45', subject: 'Physical Education 2', subjectZh: '體育（二）' },
    ],
  },
  {
    date: '2026-04-29',
    dateZh: '四月二十九日',
    day: '星期三',
    sessions: [
      { time: '8:30 - 10:45', subject: 'Chinese History 1', subjectZh: '中國歷史（一）' },
      { time: '11:30 - 12:50', subject: 'Chinese History 2', subjectZh: '中國歷史（二）' },
    ],
  },
  {
    date: '2026-04-30',
    dateZh: '四月三十日',
    day: '星期四',
    sessions: [
      { time: '8:30 - 11:00', subject: 'Mathematics Extended Part Modules 1,2', subjectZh: '數學延伸部分單元（一）及（二）' },
    ],
  },
  {
    date: '2026-05-02',
    dateZh: '五月二日',
    day: '星期六',
    sessions: [
      { time: '8:30 - 10:00', subject: 'Tourism & Hospitality Studies 1', subjectZh: '旅遊與款待（一）' },
      { time: '10:45 - 12:30', subject: 'Tourism & Hospitality Studies 2', subjectZh: '旅遊與款待（二）' },
    ],
  },
  {
    date: '2026-05-04',
    dateZh: '五月四日',
    day: '星期一',
    sessions: [
      { time: '8:30 - 9:30', subject: 'Economics 1', subjectZh: '經濟（一）' },
      { time: '10:15 - 12:45', subject: 'Economics 2', subjectZh: '經濟（二）' },
    ],
  },
  {
    date: '2026-05-05',
    dateZh: '五月五日',
    day: '星期二',
    sessions: [
      { time: '8:30 - 10:00', subject: 'Music 1A', subjectZh: '音樂 1A' },
      { time: '10:45 - 12:15', subject: 'Music 1B', subjectZh: '音樂 1B' },
    ],
  },
  {
    date: '2026-05-06',
    dateZh: '五月六日',
    day: '星期三',
    sessions: [
      { time: '-', subject: 'Reserve', subjectZh: '後備' },
    ],
  },
]

// 核心科目列表（用于高亮显示）
export const CORE_SUBJECTS = [
  'Chinese Language',
  'English Language',
  'Mathematics Compulsory',
  'Citizenship and Social Development',
]

// 获取指定科目的考试日期
export function getExamDateBySubject(subjectKeyword: string): ExamDay | undefined {
  return dseSchedule2026.find(day => 
    day.sessions.some(session => 
      session.subject.toLowerCase().includes(subjectKeyword.toLowerCase()) ||
      session.subjectZh.includes(subjectKeyword)
    )
  )
}
