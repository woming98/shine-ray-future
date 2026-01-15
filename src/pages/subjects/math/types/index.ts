/**
 * 数学模块类型定义
 */

// 数学主题（DSE Core Math 三大范畴）
export interface MathTopic {
  id: string;
  name: string;
  nameCN: string;
  icon: string;
  description: string;
  subtopics: MathSubtopic[];
  progress?: number;
}

// 子主题
export interface MathSubtopic {
  id: string;
  name: string;
  nameCN: string;
  difficulty: 'foundation' | 'non-foundation';
  description?: string;
}

// 题目类型
export interface MathQuestion {
  id: string;
  type: 'mc' | 'traditional' | 'explanation'; // MC/传统题/解释题
  topic: string;        // 主题ID
  subtopic: string;     // 子主题ID
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  imageUrl?: string;
  options?: string[];   // MC选项
  answer: string | string[];
  explanation: string;
  steps?: string[];     // 解题步骤
  commonMistakes?: string[]; // 常见错误
  calculatorProgram?: string; // 计算器程序（MC专用）
  quickTip?: string;    // 快解技巧（MC专用）
  grade?: string;       // 年级（兼容现有数据）
}

// 练习记录
export interface PracticeRecord {
  id: string;
  userId: string;
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number;    // 秒
  timestamp: Date;
  topic: string;
  subtopic: string;
}

// 错题记录
export interface ErrorLog {
  id: string;
  userId: string;
  questionId: string;
  errorCount: number;
  lastErrorTime: Date;
  mastered: boolean;
  topic?: string;
  subtopic?: string;
}

// 学习报告数据
export interface MathReport {
  userId: string;
  radarData: {
    '数与代数': number;      // 0-100
    '度量、图形与空间': number;
    '数据处理': number;
  };
  topicStats: Record<string, {
    correctRate: number;
    averageTime: number;
    totalQuestions: number;
  }>;
  errorDistribution: Record<string, number>;
  progressTrend: Array<{
    date: string;
    score: number;
  }>;
}

// 解释题范本
export interface ExplanationTemplate {
  id: string;
  year: number;
  paper: '1' | '2';     // 卷一或卷二
  questionNumber: number;
  topic: string;
  question: string;
  standardAnswer: string;
  steps: Array<{
    step: number;
    content: string;
    reasoning: string;
  }>;
  mathLanguage: string[];  // 数学语言规范
  commonMistakes: Array<{
    mistake: string;
    explanation: string;
  }>;
}

// 用户数据（复用物理模块的定义）
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
  subtopicId?: string;
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

// 学习统计
export interface LearningStats {
  totalStudyTime: number;
  topicsCompleted: number;
  exercisesSolved: number;
  averageScore: number;
  currentStreak: number;
  longestStreak: number;
  weeklyGoal: number;
  weeklyProgress: number;
}

// 每日学习数据
export interface DailyStudy {
  date: string;
  minutes: number;
  exercisesCompleted: number;
  topicsStudied: string[];
}
