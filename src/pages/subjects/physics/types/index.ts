// 物理主题类型定义
export interface PhysicsTopic {
  id: string;
  name: string;
  nameCN: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  chapters: Chapter[];
  progress: number;
}

// 章节类型
export interface Chapter {
  id: string;
  title: string;
  titleCN: string;
  concepts: Concept[];
  formulas: Formula[];
  exercises: Exercise[];
  simulations: Simulation[];
  completed: boolean;
}

// 概念知识点
export interface Concept {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  examples: string[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
}

// 物理公式
export interface Formula {
  id: string;
  name: string;
  nameCN: string;
  expression: string;
  variables: FormulaVariable[];
  description: string;
  example: string;
}

export interface FormulaVariable {
  symbol: string;
  name: string;
  unit: string;
  description: string;
}

// 练习题
export interface Exercise {
  id: string;
  type: 'multiple_choice' | 'calculation' | 'explanation';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  /**
   * 答案/解析附图（可选）
   * - 用于展示“标准答案的补充图片”，例如参考图、关键步骤示意图
   * - 注意：解析文本中的图片 Markdown 会被忽略（方案C），因此附图请放在这里
   */
  answerImagePaths?: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  points: number;
  hints: string[];
  sectionId?: string;
  imagePaths?: string[];
}

// 模拟实验
export interface Simulation {
  id: string;
  title: string;
  description: string;
  type: 'interactive' | 'animation' | 'calculator';
  parameters: SimulationParam[];
}

export interface SimulationParam {
  name: string;
  symbol: string;
  unit: string;
  min: number;
  max: number;
  default: number;
  step: number;
}

// 用户数据
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  level: number;
  experience: number;
  streak: number;
  joinedAt: Date;
}

// 学习进度
export interface Progress {
  topicId: string;
  chapterId: string;
  completed: boolean;
  score: number;
  timeSpent: number;
  lastAccessed: Date;
}

// 成就系统
export interface Achievement {
  id: string;
  title: string;
  titleCN: string;
  description: string;
  icon: string;
  category: 'learning' | 'practice' | 'challenge' | 'special';
  requirement: number;
  progress: number;
  unlocked: boolean;
  unlockedAt?: Date;
}

// 错题记录
export interface WrongAnswer {
  id: string;
  exerciseId: string;
  topicId: string;
  chapterId: string;
  userAnswer: string;
  correctAnswer: string;
  attempts: number;
  mastered: boolean;
  createdAt: Date;
  lastReview?: Date;
}

// 测验类型
export interface Quiz {
  id: string;
  topicId: string;
  title: string;
  type: 'chapter' | 'mock_exam';
  duration: number; // 分钟
  questions: Exercise[];
  totalPoints: number;
  passingScore: number;
}

// 测验结果
export interface QuizResult {
  quizId: string;
  userId: string;
  score: number;
  totalPoints: number;
  timeUsed: number;
  answers: UserAnswer[];
  completedAt: Date;
}

export interface UserAnswer {
  exerciseId: string;
  answer: string;
  correct: boolean;
  timeSpent: number;
}

// 学习统计
export interface LearningStats {
  totalStudyTime: number;
  topicsCompleted: number;
  exercisesSolved: number;
  averageScore: number;
  correctStreak: number;
  bestCorrectStreak: number;
  currentStreak: number;
  longestStreak: number;
  weeklyGoal: number;
  weeklyProgress: number;
}

// 每日学习数据
export interface DailyStudy {
  date: string;
  minutes: number;
  nightMinutes?: number;
  exercisesCompleted: number;
  topicsStudied: string[];
}
