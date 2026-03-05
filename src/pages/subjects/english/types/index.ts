/**
 * 英文模块类型定义
 * 扩展现有 englishQuestions/types.ts 的类型
 */

// 导出类型（重新导出）
export type {
  Grade,
  Difficulty,
  ReadingQuestion,
  ReadingPassage,
  GrammarQuestion,
  VocabularyType,
  VocabularyQuestion,
  WritingType,
  WritingTask,
  WritingScore,
} from '../../../../data/englishQuestions/types';

// 导入类型供内部使用（仅导入需要的类型）
import type { Difficulty, WritingType } from '../../../../data/englishQuestions/types';

// 英文主题（DSE English 四大核心技能）
export interface EnglishTopic {
  id: string;
  name: string;
  nameCN: string;
  icon: string;
  description: string;
  subtopics: EnglishSubtopic[];
  progress?: number;
}

// 子主题
export interface EnglishSubtopic {
  id: string;
  name: string;
  nameCN: string;
  description?: string;
}

// 练习记录
export interface PracticeRecord {
  id: string;
  userId: string;
  questionId: string;
  skill: 'reading' | 'writing' | 'listening' | 'speaking' | 'grammar' | 'vocabulary';
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number; // 秒
  timestamp: Date;
  topic?: string;
  subtopic?: string;
}

// 错题记录
export interface ErrorLog {
  id: string;
  userId: string;
  questionId: string;
  skill: 'reading' | 'writing' | 'listening' | 'speaking' | 'grammar' | 'vocabulary';
  errorCount: number;
  lastErrorTime: Date;
  mastered: boolean;
  topic?: string;
  subtopic?: string;
}

// 学习报告数据
export interface EnglishReport {
  userId: string;
  radarData: {
    Reading: number;      // 0-100
    Writing: number;
    Listening: number;
    Speaking: number;
  };
  skillStats: Record<string, {
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

// ========== Listening 听力 ==========

export interface ListeningMaterial {
  id: string;
  title: string;
  audioUrl: string;
  transcript: string;
  difficulty: Difficulty;
  duration: number; // 秒
  dataFile?: DataFile;
}

export interface ListeningQuestion {
  id: string;
  materialId: string;
  type: 'choice' | 'fill' | 'matching' | 'note-taking';
  question: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
  difficulty: Difficulty;
  timestamp?: number; // 音频时间戳（秒）
}

export interface DataFile {
  id: string;
  title: string;
  type: 'table' | 'chart' | 'diagram' | 'text';
  content: any; // JSON 格式的数据
  description?: string;
}

// ========== Speaking 口语 ==========

export interface SpeakingPrompt {
  id: string;
  type: 'group-discussion' | 'individual-response' | 'presentation';
  topic: string;
  prompt: string;
  timeLimit: number; // 秒
  tips?: string[];
  difficulty: Difficulty;
}

export interface StudentRecording {
  id: string;
  userId: string;
  promptId: string;
  audioUrl: string;
  duration: number; // 秒
  timestamp: Date;
  evaluation?: SpeakingEvaluation;
}

export interface SpeakingEvaluation {
  pronunciation: number; // 1-7
  fluency: number; // 1-7
  vocabulary: number; // 1-7
  grammar: number; // 1-7
  interaction?: number; // 1-7 (仅用于小组讨论)
  total: number;
  feedback: {
    strengths: string[];
    improvements: string[];
    pronunciationTips?: string[];
  };
  overallComment: string;
}

// ========== Vocabulary 词汇 ==========

export interface VocabularyItem {
  id: string;
  word: string;
  phonetic?: string;
  partOfSpeech: string; // noun, verb, adjective, etc.
  definitions: Array<{
    meaning: string;
    example: string;
  }>;
  difficulty: Difficulty;
  topic?: string;
  tags?: string[];
}

export interface VocabularyBook {
  userId: string;
  words: Array<{
    wordId: string;
    addedAt: Date;
    mastered: boolean;
    reviewCount: number;
    lastReview?: Date;
  }>;
}

// ========== Samples 范文 ==========

export interface SampleEssay {
  id: string;
  title: string;
  type: WritingType;
  topic: string;
  content: string;
  score: number; // 1-21
  highlights: Array<{
    type: 'sentence' | 'phrase' | 'connective';
    text: string;
    description: string;
  }>;
  difficulty: Difficulty;
  year?: number;
}

export interface WritingTemplate {
  id: string;
  type: WritingType;
  name: string;
  nameCN: string;
  structure: Array<{
    section: string;
    description: string;
    example?: string;
  }>;
  commonPhrases: string[];
  connectives: string[];
}

// 用户数据（复用全局用户类型）
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
  skillId: string;
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
  skillsCompleted: number;
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
  skillsStudied: string[];
}
