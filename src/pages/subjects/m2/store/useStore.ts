/**
 * M2 模块状态管理
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { M2Progress, M2Stats, TrigVisionParams } from '../types';

interface M2State {
  // 学习进度
  progress: M2Progress[];
  updateProgress: (topicId: string, data: Partial<M2Progress>) => void;
  getTopicProgress: (topicId: string) => number;

  // 学习统计
  stats: M2Stats;
  updateStats: (data: Partial<M2Stats>) => void;
  addStudyTime: (minutes: number) => void;

  // 公式树展开状态（使用数组而不是 Set，以便序列化）
  expandedFormulas: string[];
  toggleFormula: (formulaId: string) => void;

  // TrigVision 参数
  trigVisionParams: TrigVisionParams;
  updateTrigVisionParams: (params: Partial<TrigVisionParams>) => void;

  // 证明练习进度
  proofProgress: Record<string, number>; // problemId -> currentStep
  updateProofProgress: (problemId: string, step: number) => void;
  resetProof: (problemId: string) => void;

  // UI 状态
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  currentTopic: string | null;
  setCurrentTopic: (topicId: string | null) => void;
}

export const useM2Store = create<M2State>()(
  persist(
    (set, get) => ({
      // 学习进度
      progress: [],
      updateProgress: (topicId, data) => {
        const current = get().progress;
        const existingIndex = current.findIndex((p) => p.topicId === topicId);

        if (existingIndex >= 0) {
          const updated = [...current];
          updated[existingIndex] = { ...updated[existingIndex], ...data };
          set({ progress: updated });
        } else {
          set({
            progress: [
              ...current,
              {
                topicId,
                completed: false,
                score: 0,
                timeSpent: 0,
                lastAccessed: new Date(),
                ...data,
              },
            ],
          });
        }
      },
      getTopicProgress: (topicId) => {
        const topicProgress = get().progress.find((p) => p.topicId === topicId);
        if (!topicProgress) return 0;
        return topicProgress.completed ? 100 : topicProgress.score;
      },

      // 学习统计
      stats: {
        totalStudyTime: 0,
        formulasMastered: 0,
        proofsCompleted: 0,
        currentStreak: 0,
      },
      updateStats: (data) => {
        set((state) => ({
          stats: { ...state.stats, ...data },
        }));
      },
      addStudyTime: (minutes) => {
        set((state) => ({
          stats: {
            ...state.stats,
            totalStudyTime: state.stats.totalStudyTime + minutes,
          },
        }));
      },

      // 公式树展开状态（使用数组存储，便于序列化）
      expandedFormulas: [],
      toggleFormula: (formulaId) => {
        set((state) => {
          // 确保 expandedFormulas 是数组
          const currentArray = Array.isArray(state.expandedFormulas) 
            ? state.expandedFormulas 
            : [];
          const index = currentArray.indexOf(formulaId);
          if (index >= 0) {
            // 移除
            return { expandedFormulas: currentArray.filter(id => id !== formulaId) };
          } else {
            // 添加
            return { expandedFormulas: [...currentArray, formulaId] };
          }
        });
      },

      // TrigVision 参数
      trigVisionParams: {
        t: 0,
        x: 0,
        theta: 0,
        dThetaDt: 0,
      },
      updateTrigVisionParams: (params) => {
        set((state) => ({
          trigVisionParams: { ...state.trigVisionParams, ...params },
        }));
      },

      // 证明练习进度
      proofProgress: {},
      updateProofProgress: (problemId, step) => {
        set((state) => ({
          proofProgress: { ...state.proofProgress, [problemId]: step },
        }));
      },
      resetProof: (problemId) => {
        set((state) => {
          const newProgress = { ...state.proofProgress };
          delete newProgress[problemId];
          return { proofProgress: newProgress };
        });
      },

      // UI 状态
      sidebarOpen: false,
      toggleSidebar: () => {
        set((state) => ({ sidebarOpen: !state.sidebarOpen }));
      },
      currentTopic: null,
      setCurrentTopic: (topicId) => {
        set({ currentTopic: topicId });
      },
    }),
    {
      name: 'm2-storage',
    }
  )
);
