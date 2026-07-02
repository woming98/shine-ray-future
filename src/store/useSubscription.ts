/**
 * 订阅状态管理
 * 暂存课程权益状态；真实支付和授权应由后端/支付系统接入
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface SubscriptionState {
  isPremium: boolean
  plan: 'free' | 'monthly'
  expiresAt: string | null
  setPremium: (isPremium: boolean, expiresAt?: string) => void
  cancelSubscription: () => void
  checkExpiration: () => void
}

export const useSubscription = create<SubscriptionState>()(
  persist(
    (set, get) => ({
      isPremium: false,
      plan: 'free',
      expiresAt: null,

      setPremium: (isPremium: boolean, expiresAt?: string) => {
        set({
          isPremium,
          plan: isPremium ? 'monthly' : 'free',
          expiresAt: expiresAt || null,
        })
      },

      cancelSubscription: () => {
        set({
          isPremium: false,
          plan: 'free',
          expiresAt: null,
        })
      },

      checkExpiration: () => {
        const state = get()
        if (state.isPremium && state.expiresAt) {
          const now = new Date()
          const expires = new Date(state.expiresAt)
          if (now > expires) {
            set({
              isPremium: false,
              plan: 'free',
              expiresAt: null,
            })
          }
        }
      },
    }),
    {
      name: 'subscription-storage',
    }
  )
)
