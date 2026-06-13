export type BAFSStrandId = 'accounting' | 'business'

export interface CurriculumLevel {
  id: string
  book: string
  code: string
  title: string
  titleEn: string
  chapters: number
  description: string
  topics: string[]
}

export interface BAFSStrand {
  id: BAFSStrandId
  name: string
  nameEn: string
  description: string
  chapters: number
  levels: CurriculumLevel[]
}

export const BAFS_STRANDS: BAFSStrand[] = [
  {
    id: 'accounting',
    name: '會計學習線',
    nameEn: 'Accounting Strand',
    description: '由會計角色與記錄開始，逐步掌握財務報表、企業會計及財務分析。',
    chapters: 36,
    levels: [
      {
        id: 'accounting-foundation',
        book: "Frank Wood's Accounting 1",
        code: 'C1–C3',
        title: '共同基礎',
        titleEn: 'Business & Accounting Foundation',
        chapters: 10,
        description: '建立香港商業環境、企業運作及基礎會計概念。',
        topics: ['香港商業環境', '企業運作基礎', '基礎會計概念'],
      },
      {
        id: 'accounting-core',
        book: "Frank Wood's Accounting 2",
        code: 'A1–A5',
        title: '會計原理與記錄',
        titleEn: 'Accounting Principles & Records',
        chapters: 11,
        description: '理解會計用途、會計循環及日常交易記錄。',
        topics: ['會計的目的與角色', '會計循環', '交易記錄與分類'],
      },
      {
        id: 'accounting-intermediate',
        book: "Frank Wood's Accounting 3",
        code: 'A6–A8',
        title: '財務報表與企業形式',
        titleEn: 'Financial Statements & Business Forms',
        chapters: 8,
        description: '處理不同企業形式的財務報表及會計調整。',
        topics: ['合夥企業財務報表', '財務報表調整', '企業會計應用'],
      },
      {
        id: 'accounting-advanced',
        book: "Frank Wood's Accounting 4",
        code: 'A9–A12',
        title: '分析與進階應用',
        titleEn: 'Analysis & Advanced Applications',
        chapters: 7,
        description: '運用比率與進階會計工具分析企業表現。',
        topics: ['財務分析', '會計比率', '進階會計應用'],
      },
    ],
  },
  {
    id: 'business',
    name: '商業管理學習線',
    nameEn: 'Business Management Strand',
    description: '由香港商業環境出發，涵蓋管理、市場營銷、營運及財務管理。',
    chapters: 35,
    levels: [
      {
        id: 'business-foundation',
        book: 'Business Management 1',
        code: 'C1–C3',
        title: '商業共同基礎',
        titleEn: 'Business Foundation',
        chapters: 14,
        description: '掌握香港商業環境及企業基本運作。',
        topics: ['香港商業環境', '企業與持份者', '商業運作基礎'],
      },
      {
        id: 'business-management',
        book: 'Business Management 2',
        code: 'B1–B3',
        title: '管理基礎',
        titleEn: 'Management Foundation',
        chapters: 8,
        description: '理解管理職能、組織運作及人力資源。',
        topics: ['管理職能', '組織管理', '人力資源管理'],
      },
      {
        id: 'business-marketing',
        book: 'Business Management 3',
        code: 'B4–B6',
        title: '市場與營運',
        titleEn: 'Marketing & Operations',
        chapters: 7,
        description: '分析市場需要，連結市場營銷與營運決策。',
        topics: ['市場營銷角色', '市場策略', '營運管理'],
      },
      {
        id: 'business-finance',
        book: 'Business Management 4',
        code: 'B7–B9',
        title: '財務與策略',
        titleEn: 'Finance & Strategy',
        chapters: 6,
        description: '掌握企業財務分析、決策與策略應用。',
        topics: ['財務管理角色', '財務分析', '企業策略'],
      },
    ],
  },
]

export const BAFS_SOURCE_SUMMARY = {
  lessonPlans: 71,
  textbookFiles: 28,
  sourceBooks: 8,
}
