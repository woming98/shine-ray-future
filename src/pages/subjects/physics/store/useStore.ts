import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Progress, Achievement, WrongAnswer, LearningStats, DailyStudy } from '../types';
import { ACHIEVEMENTS } from '../constants/topics';
import { PHYSICS_CURRICULUM, PHYSICS_TOTAL_SECTIONS } from '../constants/curriculum';
import { PHYSICS_ALL_EXERCISES } from '../constants/exerciseCatalog';

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
  evaluateAchievements: () => void;
  
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
    answers: Record<string, string>; // 记录用户作答（用于返回后恢复）
    timeSpentById: Record<string, number>; // 记录单题作答耗时（毫秒）
    hasLaunched: boolean;      // 是否已触发升空动画
  }>;
  markExerciseAttempt: (
    topicId: string,
    sectionId: string,
    exerciseId: string,
    isCorrect: boolean,
    userAnswer: string,
    timeSpentMs?: number
  ) => void;
  getExerciseProgress: (topicId: string, sectionId: string) => { 
    attemptedIds: string[]; 
    correctIds: string[]; 
    wrongEverIds: string[]; 
    answers: Record<string, string>;
    timeSpentById: Record<string, number>;
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
        get().evaluateAchievements();
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
                unlocked: a.unlocked || progress >= a.requirement,
                unlockedAt: a.unlockedAt || (progress >= a.requirement ? new Date() : a.unlockedAt),
              }
            : a
        );
        set({ achievements });
      },
      evaluateAchievements: () => {
        const {
          stats,
          progress,
          wrongAnswers,
          exerciseProgress,
          dailyStudy,
          achievements,
          updateAchievementProgress,
        } = get();

        const hasAchievement = (id: string) => achievements.some(a => a.id === id);
        const setProgress = (id: string, value: number) => {
          if (!hasAchievement(id)) return;
          updateAchievementProgress(id, value);
        };

        const completedSections = new Set(
          progress.filter(p => p.completed).map(p => `${p.topicId}-${p.chapterId}`)
        ).size;

        const rocketLaunchCount = Object.values(exerciseProgress).filter(p => p.hasLaunched).length;
        const wrongCount = wrongAnswers.length;
        const perfectChapterCount = progress.filter((p) => {
          if (!p.completed) return false;
          const key = `${p.topicId}-${p.chapterId}`;
          const progressEntry = exerciseProgress[key];
          if (!progressEntry) return false;
          return (progressEntry.wrongEverIds || []).length === 0;
        }).length;
        const comebackCount = Object.values(exerciseProgress).reduce((sum, entry) => {
          const wrongSet = new Set(entry.wrongEverIds || []);
          const correctIds = entry.correctIds || [];
          let count = 0;
          correctIds.forEach((id) => {
            if (wrongSet.has(id)) count += 1;
          });
          return sum + count;
        }, 0);
        const patienceCount = Object.values(exerciseProgress).reduce((sum, entry) => {
          const timeMap = entry.timeSpentById || {};
          const correctIds = entry.correctIds || [];
          let count = 0;
          correctIds.forEach((id) => {
            if ((timeMap[id] || 0) >= 180000) count += 1;
          });
          return sum + count;
        }, 0);

        const difficultyCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        const difficultyMap = new Map(PHYSICS_ALL_EXERCISES.map(exercise => [exercise.id, exercise.difficulty]));
        Object.values(exerciseProgress).forEach((entry) => {
          (entry.attemptedIds || []).forEach((id) => {
            const diff = difficultyMap.get(id);
            if (diff) {
              difficultyCounts[diff] = (difficultyCounts[diff] || 0) + 1;
            }
          });
        });
        const minDifficultyCount = Math.min(
          difficultyCounts[1],
          difficultyCounts[2],
          difficultyCounts[3],
          difficultyCounts[4],
          difficultyCounts[5]
        );

        const maxDailyMinutes = Math.max(0, ...(dailyStudy || []).map(d => d.minutes || 0));
        const maxNightMinutes = Math.max(0, ...(dailyStudy || []).map(d => d.nightMinutes || 0));
        const topicSet = new Set<string>();
        (dailyStudy || []).forEach((day) => {
          (day.topicsStudied || []).forEach((topic) => topicSet.add(topic));
        });

        const dateSet = new Set((dailyStudy || []).map(d => d.date).filter(Boolean));
        const formatDate = (date: Date) => date.toISOString().split('T')[0];
        const toDate = (dateStr: string) => new Date(`${dateStr}T00:00:00`);
        const isNextDay = (prev: string, next: string) => {
          const prevDate = toDate(prev);
          const nextDate = toDate(next);
          const diff = (nextDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24);
          return diff === 1;
        };

        let currentStreak = 0;
        const cursor = new Date();
        while (dateSet.has(formatDate(cursor))) {
          currentStreak += 1;
          cursor.setDate(cursor.getDate() - 1);
        }

        let longestStreak = 0;
        let tempStreak = 0;
        const sortedDates = Array.from(dateSet).sort();
        sortedDates.forEach((dateStr, idx) => {
          if (idx === 0) {
            tempStreak = 1;
          } else {
            tempStreak = isNextDay(sortedDates[idx - 1], dateStr) ? tempStreak + 1 : 1;
          }
          longestStreak = Math.max(longestStreak, tempStreak);
        });

        setProgress('first-lesson', stats.exercisesSolved);
        setProgress('warm-up', stats.exercisesSolved);
        setProgress('problem-solver', stats.exercisesSolved);
        setProgress('accuracy-master', stats.averageScore);
        setProgress('study-time-5h', stats.totalStudyTime);
        setProgress('mistake-fighter', wrongCount);
        setProgress('chapter-clear', completedSections);
        setProgress('rocket-launch', rocketLaunchCount);
        setProgress('perfect-chapter', perfectChapterCount);
        setProgress('rocket-master', rocketLaunchCount);
        setProgress('triple-chapter', completedSections);
        setProgress('weekly-goal', stats.weeklyProgress >= stats.weeklyGoal ? 1 : 0);
        setProgress('daily-30', Math.max(...(dailyStudy || []).map(d => d.minutes), 0));
        setProgress('perfect-streak-3', stats.bestCorrectStreak || 0);
        setProgress('comeback', comebackCount);
        setProgress('all-difficulty', minDifficultyCount);
        setProgress('patience-scholar', patienceCount);
        setProgress('daily-focus', maxDailyMinutes);
        setProgress('night-owl', maxNightMinutes);
        setProgress('topic-explorer', topicSet.size);
        setProgress('streak-3', currentStreak);
        setProgress('week-streak', currentStreak);

        if (stats.currentStreak !== currentStreak || stats.longestStreak !== longestStreak) {
          set({
            stats: {
              ...stats,
              currentStreak,
              longestStreak,
            },
          });
        }
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
        get().evaluateAchievements();
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
        correctStreak: 0,
        bestCorrectStreak: 0,
        currentStreak: 0,
        longestStreak: 0,
        weeklyGoal: 300,
        weeklyProgress: 0,
      },
      updateStats: (data) => {
        set({ stats: { ...get().stats, ...data } });
        get().evaluateAchievements();
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
        get().evaluateAchievements();
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
                  nightMinutes: (d.nightMinutes || 0) + (data.nightMinutes || 0),
                  exercisesCompleted: d.exercisesCompleted + data.exercisesCompleted,
                  topicsStudied: [...new Set([...d.topicsStudied, ...data.topicsStudied])],
                }
              : d
          );
          set({ dailyStudy });
        } else {
          set({
            dailyStudy: [
              ...get().dailyStudy,
              { date: today, nightMinutes: data.nightMinutes || 0, ...data },
            ],
          });
        }
        get().evaluateAchievements();
      },
      
      // UI状态
      sidebarOpen: true,
      toggleSidebar: () => set({ sidebarOpen: !get().sidebarOpen }),
      currentTopic: null,
      setCurrentTopic: (topicId) => set({ currentTopic: topicId }),
      
      // 练习进度追踪
      exerciseProgress: {},
      markExerciseAttempt: (topicId, sectionId, exerciseId, isCorrect, userAnswer, timeSpentMs) => {
        const key = `${topicId}-${sectionId}`;
        const stored = get().exerciseProgress[key];
        const current = stored || { 
          attemptedIds: [], 
          correctIds: [], 
          wrongEverIds: [], 
          answers: {},
          timeSpentById: {},
          hasLaunched: false 
        };
        
        // 确保所有字段都存在（兼容旧数据）
        const currentAttemptedIds = current.attemptedIds || [];
        const currentCorrectIds = current.correctIds || [];
        const currentWrongEverIds = current.wrongEverIds || [];
        const currentAnswers = current.answers || {};
        const currentTimeSpent = current.timeSpentById || {};
        
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

        const answers = {
          ...currentAnswers,
          [exerciseId]: userAnswer,
        };

        const nextTimeSpent = typeof timeSpentMs === 'number'
          ? Math.max(currentTimeSpent[exerciseId] || 0, timeSpentMs)
          : currentTimeSpent[exerciseId] || 0;
        const timeSpentById = {
          ...currentTimeSpent,
          [exerciseId]: nextTimeSpent,
        };
        
        set({
          exerciseProgress: {
            ...get().exerciseProgress,
            [key]: {
              attemptedIds,
              correctIds,
              wrongEverIds,
              answers,
              timeSpentById,
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
          answers: stored?.answers || {},
          timeSpentById: stored?.timeSpentById || {},
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
          answers: {},
          timeSpentById: {},
          hasLaunched: false 
        };
        
        set({
          exerciseProgress: {
            ...get().exerciseProgress,
            [key]: {
              attemptedIds: current.attemptedIds || [],
              correctIds: current.correctIds || [],
              wrongEverIds: current.wrongEverIds || [],
              answers: current.answers || {},
              timeSpentById: current.timeSpentById || {},
              hasLaunched: true,
            },
          },
        });
        get().evaluateAchievements();
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
