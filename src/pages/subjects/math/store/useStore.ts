/**
 * 数学模块状态管理
 * 统一用户系统：通过 useGlobalUser 获取用户ID
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useGlobalUser } from '../../../../store/useGlobalUser';
import {
  PracticeRecord,
  ErrorLog,
  MathReport,
  Achievement,
  LearningStats,
  DailyStudy,
} from '../types';
import { MATH_ACHIEVEMENTS } from '../constants/achievements';
import { MATH_TOPICS } from '../constants/topics';

interface MathState {
  // 练习记录
  practiceRecords: PracticeRecord[];
  addPracticeRecord: (record: Omit<PracticeRecord, 'id' | 'timestamp' | 'userId'>) => void;
  
  // 错题本
  errorLogs: ErrorLog[];
  addErrorLog: (questionId: string, topic?: string, subtopic?: string) => void;
  markAsMastered: (errorLogId: string) => void;
  
  // 学习进度
  topicProgress: Record<string, number>; // topicId -> progress (0-100)
  updateTopicProgress: (topicId: string, progress: number) => void;
  
  // 推荐题目（基于错题和表现）
  getRecommendedQuestions: (count: number) => string[];
  
  // 学习报告
  getMathReport: () => MathReport;
  
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
  currentTopic: string | null;
  setCurrentTopic: (topicId: string | null) => void;
}

export const useMathStore = create<MathState>()(
  persist(
    (set, get) => {
      // 获取用户ID的辅助函数
      const getUserId = () => {
        return useGlobalUser.getState().getUser()?.id || 'anonymous';
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
            get().addErrorLog(record.questionId, record.topic, record.subtopic);
          }
          
          // 更新主题进度
          if (record.isCorrect) {
            const currentProgress = get().topicProgress[record.topic] || 0;
            get().updateTopicProgress(record.topic, Math.min(100, currentProgress + 1));
          }
        },
        
        // 错题本
        errorLogs: [],
        addErrorLog: (questionId, topic, subtopic) => {
          const userId = getUserId();
          const existing = get().errorLogs.find(e => e.questionId === questionId && e.userId === userId);
          
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
        topicProgress: {},
        updateTopicProgress: (topicId, progress) => {
          set((state) => ({
            topicProgress: {
              ...state.topicProgress,
              [topicId]: Math.max(0, Math.min(100, progress)),
            },
          }));
        },
        
        // 推荐题目
        getRecommendedQuestions: (count) => {
          const errorLogs = get().errorLogs.filter(e => !e.mastered && e.userId === getUserId());
          
          // 优先推荐错题
          const errorQuestionIds = errorLogs
            .sort((a, b) => b.errorCount - a.errorCount)
            .slice(0, Math.floor(count / 2))
            .map(e => e.questionId);
          
          // 这里应该从题目库中筛选，目前返回错题ID
          // 实际实现时可以添加薄弱主题推荐逻辑
          return errorQuestionIds;
        },
        
        // 学习报告
        getMathReport: () => {
          const userId = getUserId();
          const records = get().practiceRecords.filter(p => p.userId === userId);
          const errorLogs = get().errorLogs.filter(e => e.userId === userId);
          
          // 计算三大范畴的正确率
          const topicStats: Record<string, { correct: number; total: number; time: number }> = {};
          
          records.forEach(record => {
            if (!topicStats[record.topic]) {
              topicStats[record.topic] = { correct: 0, total: 0, time: 0 };
            }
            topicStats[record.topic].total++;
            topicStats[record.topic].time += record.timeSpent;
            if (record.isCorrect) {
              topicStats[record.topic].correct++;
            }
          });
          
          // 映射到三大范畴
          const radarData = {
            '数与代数': 0,
            '度量、图形与空间': 0,
            '数据处理': 0,
          };
          
          MATH_TOPICS.forEach(topic => {
            const stats = topicStats[topic.id];
            if (stats && stats.total > 0) {
              const correctRate = Math.round((stats.correct / stats.total) * 100);
              radarData[topic.nameCN as keyof typeof radarData] = correctRate;
            }
          });
          
          // 错题分布
          const errorDistribution: Record<string, number> = {};
          errorLogs.forEach(error => {
            const topic = error.topic || 'unknown';
            errorDistribution[topic] = (errorDistribution[topic] || 0) + error.errorCount;
          });
          
          // 学习趋势（过去7天）
          const dailyStudy = get().dailyStudy.slice(-7);
          const progressTrend = dailyStudy.map(d => ({
            date: d.date,
            score: d.exercisesCompleted > 0 ? Math.round((d.exercisesCompleted / 10) * 100) : 0,
          }));
          
          // 主题统计
          const topicStatsFormatted: Record<string, {
            correctRate: number;
            averageTime: number;
            totalQuestions: number;
          }> = {};
          
          Object.entries(topicStats).forEach(([topic, stats]) => {
            topicStatsFormatted[topic] = {
              correctRate: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
              averageTime: stats.total > 0 ? Math.round(stats.time / stats.total) : 0,
              totalQuestions: stats.total,
            };
          });
          
          return {
            userId,
            radarData,
            topicStats: topicStatsFormatted,
            errorDistribution,
            progressTrend,
          };
        },
        
        // 成就系统
        achievements: MATH_ACHIEVEMENTS.map(a => ({
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
          topicsCompleted: 0,
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
                    topicsStudied: [...new Set([...d.topicsStudied, ...data.topicsStudied])],
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
        currentTopic: null,
        setCurrentTopic: (topicId) => set({ currentTopic: topicId }),
      };
    },
    {
      name: 'dse-math-storage',
      partialize: (state) => ({
        practiceRecords: state.practiceRecords,
        errorLogs: state.errorLogs,
        topicProgress: state.topicProgress,
        achievements: state.achievements,
        stats: state.stats,
        dailyStudy: state.dailyStudy,
      }),
    }
  )
);
