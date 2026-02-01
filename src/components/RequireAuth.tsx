import { useEffect, useMemo, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isSupabaseConfigured, supabase } from '../supabase'
import { useGlobalUser } from '../store/useGlobalUser'
import LoadingSpinner from './LoadingSpinner'

const buildRedirectUrl = (pathname: string, search: string) =>
  `/user?redirect=${encodeURIComponent(`${pathname}${search || ''}`)}`

export function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation()
  const user = useGlobalUser((state) => state.user)
  const [checking, setChecking] = useState(true)

  const redirectTo = useMemo(
    () => buildRedirectUrl(location.pathname, location.search),
    [location.pathname, location.search]
  )

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setChecking(false)
      return
    }

    let mounted = true
    supabase.auth.getSession().then(() => {
      if (!mounted) return
      setChecking(false)
    })

    const { data } = supabase.auth.onAuthStateChange(() => {
      if (!mounted) return
      setChecking(false)
    })

    return () => {
      mounted = false
      data.subscription.unsubscribe()
    }
  }, [])

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-6 text-center">
          <div className="text-lg font-bold text-slate-800">需要登录</div>
          <div className="text-slate-600 text-sm mt-2">
            当前环境未配置 Supabase 登录功能，无法进入该模块。
          </div>
        </div>
      </div>
    )
  }

  if (checking) return <LoadingSpinner />

  if (!user) return <Navigate to={redirectTo} replace />

  return children
}

export function RequireAuthOutlet() {
  const location = useLocation()
  const user = useGlobalUser((state) => state.user)
  const [checking, setChecking] = useState(true)

  const redirectTo = useMemo(
    () => buildRedirectUrl(location.pathname, location.search),
    [location.pathname, location.search]
  )

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setChecking(false)
      return
    }

    let mounted = true
    supabase.auth.getSession().then(() => {
      if (!mounted) return
      setChecking(false)
    })

    const { data } = supabase.auth.onAuthStateChange(() => {
      if (!mounted) return
      setChecking(false)
    })

    return () => {
      mounted = false
      data.subscription.unsubscribe()
    }
  }, [])

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-6 text-center">
          <div className="text-lg font-bold text-slate-800">需要登录</div>
          <div className="text-slate-600 text-sm mt-2">
            当前环境未配置 Supabase 登录功能，无法进入该模块。
          </div>
        </div>
      </div>
    )
  }

  if (checking) return <LoadingSpinner />
  if (!user) return <Navigate to={redirectTo} replace />

  return <Outlet />
}

