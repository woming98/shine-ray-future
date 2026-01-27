import { useCallback, useEffect, useRef } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase, isSupabaseConfigured } from '../supabase'
import { useGlobalUser } from '../store/useGlobalUser'
import { useStore as usePhysicsStore } from '../pages/subjects/physics/store/useStore'
import { useMathStore } from '../pages/subjects/math/store/useStore'
import { useEnglishStore } from '../pages/subjects/english/store/useStore'
import { useM2Store } from '../pages/subjects/m2/store/useStore'
import {
  applyProgressPayload,
  buildProgressPayload,
  fetchUserProgress,
  resetProgressStores,
  saveUserProgress,
} from '../store/supabaseProgress'

const SAVE_DEBOUNCE_MS = 1500

const toProfile = (user: User) => ({
  id: user.id,
  name:
    (user.user_metadata?.name as string | undefined) ||
    user.email?.split('@')[0] ||
    '学习者',
  email: user.email ?? '',
  level: 1,
  experience: 0,
  streak: 0,
  joinedAt: user.created_at ? new Date(user.created_at) : new Date(),
})

export default function SupabaseSync() {
  const setGlobalUser = useGlobalUser((state) => state.setUser)
  const setPhysicsUser = usePhysicsStore((state) => state.setUser)

  const activeUserIdRef = useRef<string | null>(null)
  const readyRef = useRef(false)
  const hydratingRef = useRef(false)
  const saveTimerRef = useRef<number | null>(null)

  const scheduleSave = useCallback(() => {
    if (!isSupabaseConfigured) return
    if (!activeUserIdRef.current || !readyRef.current || hydratingRef.current) return

    if (saveTimerRef.current) {
      window.clearTimeout(saveTimerRef.current)
    }

    saveTimerRef.current = window.setTimeout(async () => {
      if (!activeUserIdRef.current) return
      const payload = buildProgressPayload()
      await saveUserProgress(activeUserIdRef.current, payload)
    }, SAVE_DEBOUNCE_MS)
  }, [])

  const handleSession = useCallback(
    async (session: Session | null) => {
      if (!session?.user) {
        activeUserIdRef.current = null
        readyRef.current = false
        setGlobalUser(null)
        setPhysicsUser(null)
        resetProgressStores()
        return
      }

      const userId = session.user.id
      activeUserIdRef.current = userId
      const profile = toProfile(session.user)
      setGlobalUser(profile)
      setPhysicsUser(profile)

      hydratingRef.current = true
      const { payload, error } = await fetchUserProgress(userId)
      if (activeUserIdRef.current !== userId) return

      if (payload) {
        applyProgressPayload(payload)
      } else if (!error) {
        resetProgressStores()
      }

      hydratingRef.current = false
      readyRef.current = true
    },
    [setGlobalUser, setPhysicsUser]
  )

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return

    let mounted = true

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return
      handleSession(data.session)
    })

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSession(session)
    })

    return () => {
      mounted = false
      data.subscription.unsubscribe()
    }
  }, [handleSession])

  useEffect(() => {
    if (!isSupabaseConfigured) return

    const unsubscribers = [
      usePhysicsStore.subscribe(() => scheduleSave()),
      useMathStore.subscribe(() => scheduleSave()),
      useEnglishStore.subscribe(() => scheduleSave()),
      useM2Store.subscribe(() => scheduleSave()),
    ]

    return () => {
      unsubscribers.forEach((unsubscribe) => unsubscribe())
      if (saveTimerRef.current) {
        window.clearTimeout(saveTimerRef.current)
      }
    }
  }, [scheduleSave])

  return null
}
