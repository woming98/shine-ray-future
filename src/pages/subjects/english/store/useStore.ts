/**
 * 英文模块状态管理
 * 统一用户系统：通过 useGlobalUser 获取用户ID
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useGlobalUser } from '../../../../store/useGlobalUser';
import {
  PracticeRecord,
  ErrorLog,
  EnglishReport,
  Achievement,
  LearningStats,
  DailyStudy,
  VocabularyBook,
  VocabularyItem,
  StudentRecording,
  WritingScore,
} from '../types';
import { ENGLISH_ACHIEVEMENTS } from '../constants/achievements';
import { ENGLISH_TOPICS } from '../constants/topics';

interface EnglishState {
  // 练习记录
  practiceRecords: PracticeRecord[];
  addPracticeRecord: (record: Omit<PracticeRecord, 'id' | 'timestamp' | 'userId'>) => void;
  
  // 错题本
  errorLogs: ErrorLog[];
  addErrorLog: (questionId: string, skill: ErrorLog['skill'], topic?: string, subtopic?: string) => void;
  markAsMastered: (errorLogId: string) => void;
  
  // 学习进度（四大技能）
  skillProgress: Record<string, number>; // skillId -> progress (0-100)
  updateSkillProgress: (skillId: string, progress: number) => void;
  
  // 词汇本
  vocabularyBook: VocabularyBook | null;
  addToVocabularyBook: (word: VocabularyItem) => void;
  removeFromVocabularyBook: (wordId: string) => void;
  markWordAsMastered: (wordId: string) => void;
  reviewWord: (wordId: string) => void;
  
  // 写作提交
  essaySubmissions: Array<{
    id: string;
    userId: string;
    taskId: string;
    essay: string;
    score: WritingScore | null;
    submittedAt: Date;
  }>;
  addEssaySubmission: (taskId: string, essay: string, score?: WritingScore | null) => void;
  
  // 口语录音
  speakingRecordings: StudentRecording[];
  addSpeakingRecording: (recording: Omit<StudentRecording, 'id' | 'userId' | 'timestamp'>) => void;
  updateRecordingEvaluation: (recordingId: string, evaluation: StudentRecording['evaluation']) => void;
  
  // 推荐题目（基于错题和表现）
  getRecommendedQuestions: (skill: string, count: number) => string[];
  
  // 学习报告
  getEnglishReport: () => EnglishReport;
  
  // 成就系统
  achievements: Achievement[];
  unlockAchievement: (achievementId: string) => void;
  updateAchievementProgress: (achievementId: string, progress: number) => void;
  
  // 学习统计
  stats: LearningStats;
  updateStats: (data: Partial<LearningStats>) => void;
  addStudyTime: (minutes: number) => void;
  
  // 每日学习记录
  dailyStudy: DailyStudy[];
  recordDailyStudy: (data: Omit<DailyStudy, 'date'>) => void;
  
  // UI状态
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  currentSkill: string | null;
  setCurrentSkill: (skillId: string | null) => void;
}

export const useEnglishStore = create<EnglishState>()(
  persist(
    (set, get) => {
      // 获取用户ID的辅助函数
      const getUserId = () => {
        return useGlobalUser.getState().user?.id || 'anonymous';
      };
      
      return {
        // 练习记录
        practiceRecords: [],
        addPracticeRecord: (record) => {
          const userId = getUserId();
          const newRecord: PracticeRecord = {
            ...record,
            id: `pr-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date(),
            userId,
          };
          
          set((state) => ({
            practiceRecords: [...state.practiceRecords, newRecord],
          }));
          
          // 更新统计
          const stats = get().stats;
          get().updateStats({
            exercisesSolved: stats.exercisesSolved + 1,
            averageScore: record.isCorrect
              ? Math.round((stats.averageScore * stats.exercisesSolved + 100) / (stats.exercisesSolved + 1))
              : Math.round((stats.averageScore * stats.exercisesSolved) / (stats.exercisesSolved + 1)),
          });
          
          // 如果答错，添加到错题本
          if (!record.isCorrect) {
            get().addErrorLog(record.questionId, record.skill, record.topic, record.subtopic);
          }
          
          // 更新技能进度
          if (record.isCorrect) {
            const currentProgress = get().skillProgress[record.skill] || 0;
            get().updateSkillProgress(record.skill, Math.min(100, currentProgress + 1));
          }
        },
        
        // 错题本
        errorLogs: [],
        addErrorLog: (questionId, skill, topic, subtopic) => {
          const userId = getUserId();
          const existing = get().errorLogs.find(e => e.questionId === questionId && e.userId === userId && e.skill === skill);
          
          if (existing) {
            set((state) => ({
              errorLogs: state.errorLogs.map(e =>
                e.id === existing.id
                  ? { ...e, errorCount: e.errorCount + 1, lastErrorTime: new Date() }
                  : e
              ),
            }));
          } else {
            set((state) => ({
              errorLogs: [...state.errorLogs, {
                id: `el-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                userId,
                questionId,
                skill,
                errorCount: 1,
                lastErrorTime: new Date(),
                mastered: false,
                topic,
                subtopic,
              }],
            }));
          }
        },
        markAsMastered: (errorLogId) => {
          set((state) => ({
            errorLogs: state.errorLogs.map(e =>
              e.id === errorLogId ? { ...e, mastered: true } : e
            ),
          }));
        },
        
        // 学习进度
        skillProgress: {},
        updateSkillProgress: (skillId, progress) => {
          set((state) => ({
            skillProgress: {
              ...state.skillProgress,
              [skillId]: Math.max(0, Math.min(100, progress)),
            },
          }));
        },
        
        // 词汇本
        vocabularyBook: null,
        addToVocabularyBook: (word) => {
          const userId = getUserId();
          const book = get().vocabularyBook;
          
          if (!book || book.userId !== userId) {
            set({
              vocabularyBook: {
                userId,
                words: [{
                  wordId: word.id,
                  addedAt: new Date(),
                  mastered: false,
                  reviewCount: 0,
                }],
              },
            });
          } else {
            const existing = book.words.find(w => w.wordId === word.id);
            if (!existing) {
              set({
                vocabularyBook: {
                  ...book,
                  words: [...book.words, {
                    wordId: word.id,
                    addedAt: new Date(),
                    mastered: false,
                    reviewCount: 0,
                  }],
                },
              });
            }
          }
        },
        removeFromVocabularyBook: (wordId) => {
          const book = get().vocabularyBook;
          if (book) {
            set({
              vocabularyBook: {
                ...book,
                words: book.words.filter(w => w.wordId !== wordId),
              },
            });
          }
        },
        markWordAsMastered: (wordId) => {
          const book = get().vocabularyBook;
          if (book) {
            set({
              vocabularyBook: {
                ...book,
                words: book.words.map(w =>
                  w.wordId === wordId ? { ...w, mastered: true } : w
                ),
              },
            });
          }
        },
        reviewWord: (wordId) => {
          const book = get().vocabularyBook;
          if (book) {
            set({
              vocabularyBook: {
                ...book,
                words: book.words.map(w =>
                  w.wordId === wordId
                    ? { ...w, reviewCount: w.reviewCount + 1, lastReview: new Date() }
                    : w
                ),
              },
            });
          }
        },
        
        // 写作提交
        essaySubmissions: [],
        addEssaySubmission: (taskId, essay, score = null) => {
          const userId = getUserId();
          set((state) => ({
            essaySubmissions: [...state.essaySubmissions, {
              id: `essay-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              userId,
              taskId,
              essay,
              score,
              submittedAt: new Date(),
            }],
          }));
        },
        
        // 口语录音
        speakingRecordings: [],
        addSpeakingRecording: (recording) => {
          const userId = getUserId();
          set((state) => ({
            speakingRecordings: [...state.speakingRecordings, {
              ...recording,
              id: `rec-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              userId,
              timestamp: new Date(),
            }],
          }));
        },
        updateRecordingEvaluation: (recordingId, evaluation) => {
          set((state) => ({
            speakingRecordings: state.speakingRecordings.map(r =>
              r.id === recordingId ? { ...r, evaluation } : r
            ),
          }));
        },
        
        // 推荐题目
        getRecommendedQuestions: (skill, count) => {
          const errorLogs = get().errorLogs.filter(
            e => !e.mastered && e.userId === getUserId() && e.skill === skill
          );
          
          // 优先推荐错题
          const errorQuestionIds = errorLogs
            .sort((a, b) => b.errorCount - a.errorCount)
            .slice(0, Math.floor(count / 2))
            .map(e => e.questionId);
          
          return errorQuestionIds;
        },
        
        // 学习报告
        getEnglishReport: () => {
          const userId = getUserId();
          const records = get().practiceRecords.filter(p => p.userId === userId);
          const errorLogs = get().errorLogs.filter(e => e.userId === userId);
          
          // 计算四大技能的正确率
          const skillStats: Record<string, { correct: number; total: number; time: number }> = {};
          
          records.forEach(record => {
            if (!skillStats[record.skill]) {
              skillStats[record.skill] = { correct: 0, total: 0, time: 0 };
            }
            skillStats[record.skill].total++;
            skillStats[record.skill].time += record.timeSpent;
            if (record.isCorrect) {
              skillStats[record.skill].correct++;
            }
          });
          
          // 映射到四大技能
          const radarData = {
            Reading: 0,
            Writing: 0,
            Listening: 0,
            Speaking: 0,
          };
          
          ENGLISH_TOPICS.forEach(topic => {
            const stats = skillStats[topic.id];
            if (stats && stats.total > 0) {
              const correctRate = Math.round((stats.correct / stats.total) * 100);
              radarData[topic.name as keyof typeof radarData] = correctRate;
            }
          });
          
          // 错题分布
          const errorDistribution: Record<string, number> = {};
          errorLogs.forEach(error => {
            const key = `${error.skill}-${error.topic || 'unknown'}`;
            errorDistribution[key] = (errorDistribution[key] || 0) + error.errorCount;
          });
          
          // 学习趋势（过去7天）
          const dailyStudy = get().dailyStudy.slice(-7);
          const progressTrend = dailyStudy.map(d => ({
            date: d.date,
            score: d.exercisesCompleted > 0 ? Math.round((d.exercisesCompleted / 10) * 100) : 0,
          }));
          
          // 技能统计
          const skillStatsFormatted: Record<string, {
            correctRate: number;
            averageTime: number;
            totalQuestions: number;
          }> = {};
          
          Object.entries(skillStats).forEach(([skill, stats]) => {
            skillStatsFormatted[skill] = {
              correctRate: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
              averageTime: stats.total > 0 ? Math.round(stats.time / stats.total) : 0,
              totalQuestions: stats.total,
            };
          });
          
          return {
            userId,
            radarData,
            skillStats: skillStatsFormatted,
            errorDistribution,
            progressTrend,
          };
        },
        
        // 成就系统
        achievements: ENGLISH_ACHIEVEMENTS.map(a => ({
          ...a,
          progress: 0,
          unlocked: false,
        })),
        unlockAchievement: (achievementId) => {
          const achievements = get().achievements.map(a =>
            a.id === achievementId
              ? { ...a, unlocked: true, unlockedAt: new Date() }
              : a
          );
          set({ achievements });
        },
        updateAchievementProgress: (achievementId, progress) => {
          const achievements = get().achievements.map(a =>
            a.id === achievementId
              ? {
                  ...a,
                  progress,
                  unlocked: progress >= a.requirement,
                  unlockedAt: progress >= a.requirement ? new Date() : a.unlockedAt,
                }
              : a
          );
          set({ achievements });
        },
        
        // 学习统计
        stats: {
          totalStudyTime: 0,
          skillsCompleted: 0,
          exercisesSolved: 0,
          averageScore: 0,
          currentStreak: 0,
          longestStreak: 0,
          weeklyGoal: 300,
          weeklyProgress: 0,
        },
        updateStats: (data) => {
          set({ stats: { ...get().stats, ...data } });
        },
        addStudyTime: (minutes) => {
          const { stats } = get();
          set({
            stats: {
              ...stats,
              totalStudyTime: stats.totalStudyTime + minutes,
              weeklyProgress: stats.weeklyProgress + minutes,
            },
          });
        },
        
        // 每日学习记录
        dailyStudy: [],
        recordDailyStudy: (data) => {
          const today = new Date().toISOString().split('T')[0];
          const existing = get().dailyStudy.find(d => d.date === today);
          
          if (existing) {
            const dailyStudy = get().dailyStudy.map(d =>
              d.date === today
                ? {
                    ...d,
                    minutes: d.minutes + data.minutes,
                    exercisesCompleted: d.exercisesCompleted + data.exercisesCompleted,
                    skillsStudied: [...new Set([...d.skillsStudied, ...data.skillsStudied])],
                  }
                : d
            );
            set({ dailyStudy });
          } else {
            set({
              dailyStudy: [...get().dailyStudy, { date: today, ...data }],
            });
          }
        },
        
        // UI状态
        sidebarOpen: true,
        toggleSidebar: () => set({ sidebarOpen: !get().sidebarOpen }),
        currentSkill: null,
        setCurrentSkill: (skillId) => set({ currentSkill: skillId }),
      };
    },
    {
      name: 'dse-english-storage',
      partialize: (state) => ({
        practiceRecords: state.practiceRecords,
        errorLogs: state.errorLogs,
        skillProgress: state.skillProgress,
        vocabularyBook: state.vocabularyBook,
        essaySubmissions: state.essaySubmissions,
        speakingRecordings: state.speakingRecordings,
        achievements: state.achievements,
        stats: state.stats,
        dailyStudy: state.dailyStudy,
      }),
    }
  )
);
