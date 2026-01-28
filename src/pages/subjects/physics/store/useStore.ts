import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Progress, Achievement, WrongAnswer, LearningStats, DailyStudy } from '../types';
import { ACHIEVEMENTS } from '../constants/topics';
import { PHYSICS_CURRICULUM, PHYSICS_TOTAL_SECTIONS } from '../constants/curriculum';

interface AppState {
  // 用户信息
  user: User | null;
  setUser: (user: User | null) => void;
  
  // 学习进度
  progress: Progress[];
  updateProgress: (topicId: string, chapterId: string, data: Partial<Progress>) => void;
  getTopicProgress: (topicId: string) => number;
  getOverallProgress: () => number;
  
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
  
  // 练习进度追踪（按 topicId 和 sectionId 维度）
  exerciseProgress: Record<string, {
    attemptedIds: string[];    // 已作答的题目 ID 集合（点过 Check Answer）
    correctIds: string[];      // 已答对的题目 ID 集合
    wrongEverIds: string[];    // 曾经答错过的题目 ID 集合（用于总结）
    hasLaunched: boolean;      // 是否已触发升空动画
  }>;
  markExerciseAttempt: (topicId: string, sectionId: string, exerciseId: string, isCorrect: boolean) => void;
  getExerciseProgress: (topicId: string, sectionId: string) => { 
    attemptedIds: string[]; 
    correctIds: string[]; 
    wrongEverIds: string[]; 
    hasLaunched: boolean 
  };
  setLaunched: (topicId: string, sectionId: string) => void;
  resetExerciseProgress: (topicId: string, sectionId: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // 用户信息
      user: null,
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
        const topic = PHYSICS_CURRICULUM.find(t => t.id === topicId);
        const totalSections = topic?.sections.length || 0;
        if (totalSections === 0) return 0;
        const validSectionIds = new Set(topic?.sections.map(section => section.id));
        const completed = get().progress.filter(
          p => p.topicId === topicId && p.completed && validSectionIds.has(p.chapterId)
        ).length;
        return Math.round((completed / totalSections) * 100);
      },
      getOverallProgress: () => {
        if (PHYSICS_TOTAL_SECTIONS === 0) return 0;
        const validSectionIds = new Set(
          PHYSICS_CURRICULUM.flatMap(topic => topic.sections.map(section => section.id))
        );
        const completed = get().progress.filter(
          p => p.completed && validSectionIds.has(p.chapterId)
        ).length;
        return Math.round((completed / PHYSICS_TOTAL_SECTIONS) * 100);
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
      
      // 练习进度追踪
      exerciseProgress: {},
      markExerciseAttempt: (topicId, sectionId, exerciseId, isCorrect) => {
        const key = `${topicId}-${sectionId}`;
        const stored = get().exerciseProgress[key];
        const current = stored || { 
          attemptedIds: [], 
          correctIds: [], 
          wrongEverIds: [], 
          hasLaunched: false 
        };
        
        // 确保所有字段都存在（兼容旧数据）
        const currentAttemptedIds = current.attemptedIds || [];
        const currentCorrectIds = current.correctIds || [];
        const currentWrongEverIds = current.wrongEverIds || [];
        
        // 记录已作答（如果还没记录过）
        const attemptedIds = currentAttemptedIds.includes(exerciseId)
          ? currentAttemptedIds
          : [...currentAttemptedIds, exerciseId];
        
        // 如果答对，记录到 correctIds（如果还没记录过）
        const correctIds = isCorrect && !currentCorrectIds.includes(exerciseId)
          ? [...currentCorrectIds, exerciseId]
          : currentCorrectIds;
        
        // 如果答错，记录到 wrongEverIds（如果还没记录过）
        const wrongEverIds = !isCorrect && !currentWrongEverIds.includes(exerciseId)
          ? [...currentWrongEverIds, exerciseId]
          : currentWrongEverIds;
        
        set({
          exerciseProgress: {
            ...get().exerciseProgress,
            [key]: {
              attemptedIds,
              correctIds,
              wrongEverIds,
              hasLaunched: current.hasLaunched || false,
            },
          },
        });
      },
      getExerciseProgress: (topicId, sectionId) => {
        const key = `${topicId}-${sectionId}`;
        const stored = get().exerciseProgress[key];
        
        // 确保返回的对象总是包含所有必需的字段
        // 兼容旧数据格式（可能只有 correctIds 和 hasLaunched）
        return {
          attemptedIds: stored?.attemptedIds || [],
          correctIds: stored?.correctIds || [],
          wrongEverIds: stored?.wrongEverIds || [],
          hasLaunched: stored?.hasLaunched || false,
        };
      },
      setLaunched: (topicId, sectionId) => {
        const key = `${topicId}-${sectionId}`;
        const stored = get().exerciseProgress[key];
        const current = stored || { 
          attemptedIds: [], 
          correctIds: [], 
          wrongEverIds: [], 
          hasLaunched: false 
        };
        
        set({
          exerciseProgress: {
            ...get().exerciseProgress,
            [key]: {
              attemptedIds: current.attemptedIds || [],
              correctIds: current.correctIds || [],
              wrongEverIds: current.wrongEverIds || [],
              hasLaunched: true,
            },
          },
        });
      },
      resetExerciseProgress: (topicId, sectionId) => {
        const key = `${topicId}-${sectionId}`;
        const current = get().exerciseProgress;
        const { [key]: _, ...rest } = current;
        set({ exerciseProgress: rest });
      },
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
        exerciseProgress: state.exerciseProgress,
      }),
    }
  )
);
