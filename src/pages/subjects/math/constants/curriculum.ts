export interface GradeCourse {
  id: string;
  level: string;
  title: string;
  focus: string;
  topics: string[];
  questionGrade?: string;
}

export interface SprintTopic {
  id: string;
  title: string;
  category: string;
  description: string;
  topicId: string;
  focus: string[];
}

export type PastPaperSolutionStatus = 'available' | 'draft' | 'reviewing';

export interface PastPaper {
  id: string;
  year: number;
  paper: string;
  title: string;
  durationMinutes: number;
  pdfUrl: string;
  solutionAvailable: boolean;
  solutionStatus: PastPaperSolutionStatus;
  solutionNote: string;
}

export const GRADE_COURSES: GradeCourse[] = [
  {
    id: 's1',
    level: '中一',
    title: '基础衔接',
    focus: '建立数感、代数语言与基础几何能力',
    topics: ['有向数与数线', '代数式与一次方程', '百分数与比例', '基础几何与周界', '数据表示'],
    questionGrade: '1',
  },
  {
    id: 's2',
    level: '中二',
    title: '核心能力',
    focus: '强化代数运算、方程建模与几何推理',
    topics: ['恒等式与因式分解', '二元一次方程', '根式与指数', '勾股定理与圆', '率与百分变化'],
    questionGrade: '2',
  },
  {
    id: 's3',
    level: '中三',
    title: '高中预备',
    focus: '衔接 DSE 必修部分的核心知识结构',
    topics: ['二次方程与函数', '坐标几何', '三角学基础', '数列与对数', '概率与排列组合'],
    questionGrade: '3',
  },
  {
    id: 's4',
    level: '中四',
    title: 'DSE 基础',
    focus: '系统完成 DSE 必修部分基础课题',
    topics: ['数与代数基础', '误差与近似值', '函数与图像', '平面与立体几何', '统计基础'],
  },
  {
    id: 's5',
    level: '中五',
    title: 'DSE 进阶',
    focus: '处理跨课题综合题并建立答题规范',
    topics: ['指数与对数', '变分与数列', '坐标几何与轨迹', '三角学应用', '概率与统计'],
  },
  {
    id: 's6',
    level: '中六',
    title: 'DSE 冲刺',
    focus: '真题训练、时间管理与失分点修正',
    topics: ['卷一长题策略', '卷二 MC 提速', '高频题型重温', '跨课题综合题', '模拟试卷与复盘'],
  },
];

export const SPRINT_TOPICS: SprintTopic[] = [
  {
    id: 'algebra',
    title: '代数高频题型',
    category: '数与代数',
    description: '集中处理方程、恒等式、指数对数、变分及数列。',
    topicId: 'number-algebra',
    focus: ['因式分解', '二次方程', '指数与对数', '数列'],
  },
  {
    id: 'functions',
    title: '函数与图像',
    category: '数与代数',
    description: '掌握函数关系、图像变换与综合建模。',
    topicId: 'number-algebra',
    focus: ['函数概念', '图像判读', '二次函数', '应用题'],
  },
  {
    id: 'geometry',
    title: '几何与度量',
    category: '度量、图形与空间',
    description: '梳理平面几何、圆、立体图形和度量公式。',
    topicId: 'measures-shape-space',
    focus: ['角与多边形', '圆的性质', '面积体积', '几何证明'],
  },
  {
    id: 'coordinate-trig',
    title: '坐标几何与三角学',
    category: '度量、图形与空间',
    description: '强化直线、轨迹、三角比和空间应用。',
    topicId: 'measures-shape-space',
    focus: ['直线方程', '距离与斜率', '三角比', '方位与仰角'],
  },
  {
    id: 'statistics',
    title: '统计与概率',
    category: '数据处理',
    description: '训练图表判读、集中趋势、离差和概率。',
    topicId: 'data-handling',
    focus: ['统计图表', '平均数与中位数', '标准差', '概率'],
  },
  {
    id: 'paper-skills',
    title: '卷一卷二应试策略',
    category: '综合冲刺',
    description: '针对长题书写、MC 提速和时间分配进行训练。',
    topicId: 'number-algebra',
    focus: ['步骤分', '数学语言', '计算器技巧', '时间管理'],
  },
];

export const PAST_PAPER_YEARS = Array.from({ length: 15 }, (_, index) => 2026 - index);

const AVAILABLE_SOLUTION_NOTE = '答案总表、计算步骤与考点说明已上线。';
const DRAFT_SOLUTION_NOTE = '答案与逐题解析为初稿，等待人工核对。';

export const AVAILABLE_PAST_PAPERS: PastPaper[] = [
  {
    id: '2026-paper-2',
    year: 2026,
    paper: 'Paper 2',
    title: '2026 HKDSE Mathematics Paper 2',
    durationMinutes: 75,
    pdfUrl: '/dse-math/past-papers/2026-paper-2.pdf',
    solutionAvailable: true,
    solutionStatus: 'draft',
    solutionNote: DRAFT_SOLUTION_NOTE,
  },
  {
    id: '2025-paper-2',
    year: 2025,
    paper: 'Paper 2',
    title: '2025 HKDSE Mathematics Paper 2',
    durationMinutes: 75,
    pdfUrl: '/dse-math/past-papers/2025-paper-2.pdf',
    solutionAvailable: true,
    solutionStatus: 'draft',
    solutionNote: DRAFT_SOLUTION_NOTE,
  },
  {
    id: '2024-paper-2',
    year: 2024,
    paper: 'Paper 2',
    title: '2024 HKDSE Mathematics Paper 2',
    durationMinutes: 75,
    pdfUrl: '/dse-math/past-papers/2024-paper-2.pdf',
    solutionAvailable: true,
    solutionStatus: 'draft',
    solutionNote: DRAFT_SOLUTION_NOTE,
  },
  {
    id: '2023-paper-2',
    year: 2023,
    paper: 'Paper 2',
    title: '2023 HKDSE Mathematics Paper 2',
    durationMinutes: 75,
    pdfUrl: '/dse-math/past-papers/2023-paper-2.pdf',
    solutionAvailable: true,
    solutionStatus: 'available',
    solutionNote: AVAILABLE_SOLUTION_NOTE,
  },
  {
    id: '2022-paper-2',
    year: 2022,
    paper: 'Paper 2',
    title: '2022 HKDSE Mathematics Paper 2',
    durationMinutes: 75,
    pdfUrl: '/dse-math/past-papers/2022-paper-2.pdf',
    solutionAvailable: true,
    solutionStatus: 'available',
    solutionNote: AVAILABLE_SOLUTION_NOTE,
  },
  {
    id: '2021-paper-2',
    year: 2021,
    paper: 'Paper 2',
    title: '2021 HKDSE Mathematics Paper 2',
    durationMinutes: 75,
    pdfUrl: '/dse-math/past-papers/2021-paper-2.pdf',
    solutionAvailable: true,
    solutionStatus: 'available',
    solutionNote: AVAILABLE_SOLUTION_NOTE,
  },
  {
    id: '2020-paper-2',
    year: 2020,
    paper: 'Paper 2',
    title: '2020 HKDSE Mathematics Paper 2',
    durationMinutes: 75,
    pdfUrl: '/dse-math/past-papers/2020-paper-2.pdf',
    solutionAvailable: true,
    solutionStatus: 'draft',
    solutionNote: DRAFT_SOLUTION_NOTE,
  },
  {
    id: '2019-paper-2',
    year: 2019,
    paper: 'Paper 2',
    title: '2019 HKDSE Mathematics Paper 2',
    durationMinutes: 75,
    pdfUrl: '/dse-math/past-papers/2019-paper-2.pdf',
    solutionAvailable: true,
    solutionStatus: 'draft',
    solutionNote: DRAFT_SOLUTION_NOTE,
  },
];

export const getGradeCourse = (id?: string) => GRADE_COURSES.find((course) => course.id === id);

export const getPastPaper = (id?: string) => AVAILABLE_PAST_PAPERS.find((paper) => paper.id === id);
