/**
 * HKDSE examination timetable data.
 * Source: Hong Kong Examinations and Assessment Authority.
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

export const DSE_EXAM_YEAR = 2027
export const DSE_EXAM_DATE = '2027-04-06'
export const DSE_EXAM_FIRST_DATE_LABEL = '2027年4月6日'
export const DSE_EXAM_SOURCE_URL = 'https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Exam_Timetable/2027_DSE_Timetable.pdf'

export const dseSchedule: ExamDay[] = [
  {
    date: '2027-04-06',
    dateZh: '四月六日',
    day: '星期二',
    sessions: [
      { time: '上午', subject: 'Visual Arts 1, 2', subjectZh: '視覺藝術（一）及（二）' },
    ],
  },
  {
    date: '2027-04-07',
    dateZh: '四月七日',
    day: '星期三',
    sessions: [
      { time: '上午', subject: 'Chinese Literature 1, 2', subjectZh: '中國文學（一）及（二）' },
      { time: '上午', subject: 'Technology & Living 1, 2 (Note 2)', subjectZh: '科技與生活（一）及（二）（註2）' },
    ],
  },
  {
    date: '2027-04-08',
    dateZh: '四月八日',
    day: '星期四',
    sessions: [
      { time: '上午', subject: 'Chinese Language 1, 2', subjectZh: '中國語文（一）及（二）' },
    ],
  },
  {
    date: '2027-04-09',
    dateZh: '四月九日',
    day: '星期五',
    sessions: [
      { time: '上午', subject: 'English Language 1, 2', subjectZh: '英國語文（一）及（二）' },
    ],
  },
  {
    date: '2027-04-10',
    dateZh: '四月十日',
    day: '星期六',
    sessions: [
      {
        time: '上午',
        subject: 'English Language 3 (Listening and Integrated Skills)',
        subjectZh: '英國語文（三）（聆聽及綜合能力考核）',
      },
    ],
  },
  {
    date: '2027-04-12',
    dateZh: '四月十二日',
    day: '星期一',
    sessions: [
      {
        time: '上午',
        subject: 'Mathematics Compulsory Part 1, 2',
        subjectZh: '數學必修部分（一）及（二）',
      },
    ],
  },
  {
    date: '2027-04-13',
    dateZh: '四月十三日',
    day: '星期二',
    sessions: [
      { time: '上午', subject: 'Citizenship and Social Development', subjectZh: '公民與社會發展' },
    ],
  },
  {
    date: '2027-04-14',
    dateZh: '四月十四日',
    day: '星期三',
    sessions: [
      {
        time: '上午',
        subject: 'Health Management & Social Care 1, 2',
        subjectZh: '健康管理與社會關懷（一）及（二）',
      },
    ],
  },
  {
    date: '2027-04-15',
    dateZh: '四月十五日',
    day: '星期四',
    sessions: [
      { time: '上午', subject: 'Chemistry 1, 2', subjectZh: '化學（一）及（二）' },
    ],
  },
  {
    date: '2027-04-16',
    dateZh: '四月十六日',
    day: '星期五',
    sessions: [
      { time: '上午', subject: 'Geography 1, 2', subjectZh: '地理（一）及（二）' },
    ],
  },
  {
    date: '2027-04-17',
    dateZh: '四月十七日',
    day: '星期六',
    sessions: [
      {
        time: '上午',
        subject: 'Information & Communication Technology 1, 2',
        subjectZh: '資訊及通訊科技（一）及（二）',
      },
    ],
  },
  {
    date: '2027-04-19',
    dateZh: '四月十九日',
    day: '星期一',
    sessions: [
      { time: '上午', subject: 'Biology 1, 2', subjectZh: '生物（一）及（二）' },
    ],
  },
  {
    date: '2027-04-20',
    dateZh: '四月二十日',
    day: '星期二',
    sessions: [
      {
        time: '上午',
        subject: 'Design & Applied Technology 1, 2',
        subjectZh: '設計與應用科技（一）及（二）',
      },
      { time: '上午', subject: 'Literature in English 1 (Note 2)', subjectZh: '英語文學（一）（註2）' },
      { time: '下午', subject: 'Literature in English 2 (Note 2)', subjectZh: '英語文學（二）（註2）' },
    ],
  },
  {
    date: '2027-04-21',
    dateZh: '四月二十一日',
    day: '星期三',
    sessions: [
      { time: '上午', subject: 'Physics 1, 2', subjectZh: '物理（一）及（二）' },
    ],
  },
  {
    date: '2027-04-22',
    dateZh: '四月二十二日',
    day: '星期四',
    sessions: [
      { time: '上午', subject: 'Economics 1, 2', subjectZh: '經濟（一）及（二）' },
    ],
  },
  {
    date: '2027-04-23',
    dateZh: '四月二十三日',
    day: '星期五',
    sessions: [
      {
        time: '上午',
        subject: 'Mathematics Extended Part Modules 1, 2',
        subjectZh: '數學延伸部分單元（一）及（二）',
      },
    ],
  },
  {
    date: '2027-04-24',
    dateZh: '四月二十四日',
    day: '星期六',
    sessions: [
      { time: '上午', subject: 'Chinese History 1, 2', subjectZh: '中國歷史（一）及（二）' },
    ],
  },
  {
    date: '2027-04-26',
    dateZh: '四月二十六日',
    day: '星期一',
    sessions: [
      {
        time: '上午',
        subject: 'Business, Accounting & Financial Studies 1, 2',
        subjectZh: '企業、會計與財務概論（一）及（二）',
      },
    ],
  },
  {
    date: '2027-04-27',
    dateZh: '四月二十七日',
    day: '星期二',
    sessions: [
      { time: '上午', subject: 'History 1, 2', subjectZh: '歷史（一）及（二）' },
    ],
  },
  {
    date: '2027-04-28',
    dateZh: '四月二十八日',
    day: '星期三',
    sessions: [
      {
        time: '上午',
        subject: 'Tourism & Hospitality Studies 1, 2',
        subjectZh: '旅遊與款待（一）及（二）',
      },
    ],
  },
  {
    date: '2027-04-29',
    dateZh: '四月二十九日',
    day: '星期四',
    sessions: [
      { time: '上午', subject: 'Literature in English 1 (Note 2)', subjectZh: '英語文學（一）（註2）' },
      { time: '上午', subject: 'Technology & Living 1, 2 (Note 2)', subjectZh: '科技與生活（一）及（二）（註2）' },
      { time: '上午', subject: 'Physical Education 1, 2 (Note 2)', subjectZh: '體育（一）及（二）（註2）' },
      { time: '上午', subject: 'Music 1A & 1B (Note 2)', subjectZh: '音樂 1A 及 1B（註2）' },
      { time: '下午', subject: 'Literature in English 2 (Note 2)', subjectZh: '英語文學（二）（註2）' },
    ],
  },
  {
    date: '2027-04-30',
    dateZh: '四月三十日',
    day: '星期五',
    sessions: [
      {
        time: '上午',
        subject: 'Ethics & Religious Studies 1, 2',
        subjectZh: '倫理與宗教（一）及（二）',
      },
    ],
  },
  {
    date: '2027-05-03',
    dateZh: '五月三日',
    day: '星期一',
    sessions: [
      { time: '上午', subject: 'Literature in English 1 (Note 2)', subjectZh: '英語文學（一）（註2）' },
      { time: '上午', subject: 'Technology & Living 1, 2 (Note 2)', subjectZh: '科技與生活（一）及（二）（註2）' },
      { time: '上午', subject: 'Physical Education 1, 2 (Note 2)', subjectZh: '體育（一）及（二）（註2）' },
      { time: '上午', subject: 'Music 1A & 1B (Note 2)', subjectZh: '音樂 1A 及 1B（註2）' },
      { time: '下午', subject: 'Literature in English 2 (Note 2)', subjectZh: '英語文學（二）（註2）' },
      { time: '下午', subject: 'Reserve', subjectZh: '後備' },
    ],
  },
  {
    date: '2027-05-04',
    dateZh: '五月四日',
    day: '星期二',
    sessions: [
      { time: '上午', subject: 'Reserve', subjectZh: '後備' },
    ],
  },
]

export const CORE_SUBJECTS = [
  'Chinese Language',
  'English Language',
  'Mathematics Compulsory',
  'Citizenship and Social Development',
]

export function getExamDateBySubject(subjectKeyword: string): ExamDay | undefined {
  return dseSchedule.find(day =>
    day.sessions.some(session =>
      session.subject.toLowerCase().includes(subjectKeyword.toLowerCase()) ||
      session.subjectZh.includes(subjectKeyword)
    )
  )
}
