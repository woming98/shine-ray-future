/**
 * 全局用户状态管理
 * 统一管理用户信息，供各模块使用
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface GlobalUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  level: number;
  experience: number;
  streak: number;
  joinedAt: Date;
}

interface GlobalUserState {
  user: GlobalUser | null;
  setUser: (user: GlobalUser | null) => void;
  getUser: () => GlobalUser | null;
  // 整合各模块的学习进度
  getAllProgress: () => {
    physics: number;
    math: number;
    biology: number;
    [key: string]: number;
  };
}

export const useGlobalUser = create<GlobalUserState>()(
  persist(
    (set, get) => ({
      // 当前登录用户
      user: null,
      
      setUser: (user) => set({ user }),
      
      getUser: () => get().user,
      
      // 整合各模块的学习进度
      getAllProgress: () => {
        // 这里可以从各模块的 store 获取进度
        // 目前返回默认值，后续可以集成各模块的实际进度
        return {
          physics: 0,
          math: 0,
          biology: 0,
        };
      },
    }),
    {
      name: 'global-user-storage',
    }
  )
);
