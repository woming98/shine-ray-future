import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Progress, Achievement, WrongAnswer, LearningStats, DailyStudy } from '../types';
import { ACHIEVEMENTS } from '../constants/topics';

interface AppState {
  // 用户信息
  user: User | null;
  setUser: (user: User | null) => void;
  
  // 学习进度
  progress: Progress[];
  updateProgress: (topicId: string, chapterId: string, data: Partial<Progress>) => void;
  getTopicProgress: (topicId: string) => number;
  
  // 成就系统
  achievements: Achievement[];
  unlockAchievement: (achievementId: string) => void;
  updateAchievementProgress: (achievementId: string, progress: number) => void;
  
  // 错题本
  wrongAnswers: WrongAnswer[];
  addWrongAnswer: (wrong: Omit<WrongAnswer, 'id' | 'createdAt'>) => void;
  markAsMastered: (wrongId: string) => void;
  
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

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // 用户信息 - 默认模拟用户
      user: {
        id: 'demo-user',
        name: '学习者',
        email: 'student@shineray.edu',
        level: 5,
        experience: 2350,
        streak: 7,
        joinedAt: new Date('2025-01-01'),
      },
      setUser: (user) => set({ user }),
      
      // 学习进度
      progress: [],
      updateProgress: (topicId, chapterId, data) => {
        const current = get().progress;
        const existingIndex = current.findIndex(
          p => p.topicId === topicId && p.chapterId === chapterId
        );
        
        if (existingIndex >= 0) {
          const updated = [...current];
          updated[existingIndex] = { ...updated[existingIndex], ...data };
          set({ progress: updated });
        } else {
          set({
            progress: [...current, {
              topicId,
              chapterId,
              completed: false,
              score: 0,
              timeSpent: 0,
              lastAccessed: new Date(),
              ...data,
            }],
          });
        }
      },
      getTopicProgress: (topicId) => {
        const topicProgress = get().progress.filter(p => p.topicId === topicId);
        if (topicProgress.length === 0) return 0;
        const completed = topicProgress.filter(p => p.completed).length;
        return Math.round((completed / 5) * 100); // 假设每个主题5个章节
      },
      
      // 成就系统
      achievements: ACHIEVEMENTS.map(a => ({
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
      
      // 错题本
      wrongAnswers: [],
      addWrongAnswer: (wrong) => {
        const newWrong: WrongAnswer = {
          ...wrong,
          id: `wrong-${Date.now()}`,
          createdAt: new Date(),
        };
        set({ wrongAnswers: [...get().wrongAnswers, newWrong] });
      },
      markAsMastered: (wrongId) => {
        const wrongAnswers = get().wrongAnswers.map(w =>
          w.id === wrongId ? { ...w, mastered: true, lastReview: new Date() } : w
        );
        set({ wrongAnswers });
      },
      
      // 学习统计
      stats: {
        totalStudyTime: 1250,
        topicsCompleted: 2,
        exercisesSolved: 87,
        averageScore: 78,
        currentStreak: 7,
        longestStreak: 14,
        weeklyGoal: 300,
        weeklyProgress: 180,
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
      dailyStudy: [
        { date: '2025-01-04', minutes: 45, exercisesCompleted: 12, topicsStudied: ['force-motion'] },
        { date: '2025-01-05', minutes: 30, exercisesCompleted: 8, topicsStudied: ['wave-motion'] },
        { date: '2025-01-06', minutes: 60, exercisesCompleted: 15, topicsStudied: ['force-motion', 'electricity-magnetism'] },
        { date: '2025-01-07', minutes: 25, exercisesCompleted: 6, topicsStudied: ['temperature-gas'] },
        { date: '2025-01-08', minutes: 40, exercisesCompleted: 10, topicsStudied: ['force-motion'] },
        { date: '2025-01-09', minutes: 55, exercisesCompleted: 14, topicsStudied: ['wave-motion', 'force-motion'] },
        { date: '2025-01-10', minutes: 35, exercisesCompleted: 9, topicsStudied: ['force-motion'] },
      ],
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
    }),
    {
      name: 'dse-physics-storage',
      partialize: (state) => ({
        user: state.user,
        progress: state.progress,
        achievements: state.achievements,
        wrongAnswers: state.wrongAnswers,
        stats: state.stats,
        dailyStudy: state.dailyStudy,
      }),
    }
  )
);

