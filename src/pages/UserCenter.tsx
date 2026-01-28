import { useEffect, useMemo, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Mail, Lock, Eye, EyeOff, Phone, ArrowRight,
  BookOpen, Calculator, Star
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import LearningDashboard from '../components/LearningDashboard'
import { isSupabaseConfigured, supabase } from '../supabase'
import { useStore as usePhysicsStore } from '../pages/subjects/physics/store/useStore'
import { useMathStore } from '../pages/subjects/math/store/useStore'
import { useEnglishStore } from '../pages/subjects/english/store/useStore'

/**
 * 用户中心页面
 * 包含登录、注册和用户仪表板
 */
export default function UserCenter() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [session, setSession] = useState<Session | null>(null)
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const [authMessage, setAuthMessage] = useState<string | null>(null)
  const [recoveryMode, setRecoveryMode] = useState(false)

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPhone, setRegisterPhone] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [recoveryPassword, setRecoveryPassword] = useState('')
  const [recoveryConfirmPassword, setRecoveryConfirmPassword] = useState('')

  const isLoggedIn = Boolean(session)

  const getAuthTypeFromUrl = () => {
    if (typeof window === 'undefined') return null
    const hash = window.location.hash.replace(/^#/, '')
    const hashParams = new URLSearchParams(hash)
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get('type') || hashParams.get('type')
  }

  const exchangeCodeForSessionIfNeeded = async () => {
    if (!supabase) return null
    if (typeof window === 'undefined') return null

    const searchParams = new URLSearchParams(window.location.search)
    const code = searchParams.get('code')
    if (!code) return null

    setAuthLoading(true)
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    setAuthLoading(false)

    if (error) {
      setAuthError('验证链接已失效，请重新登录')
      return null
    }

    // 清理 URL 中的 code/type 参数，避免重复处理
    searchParams.delete('code')
    searchParams.delete('type')
    const cleanSearch = searchParams.toString()
    const cleanUrl = `${window.location.pathname}${cleanSearch ? `?${cleanSearch}` : ''}`
    window.history.replaceState({}, '', cleanUrl)

    if (data.session) {
      setSession(data.session)
      setAuthMessage('邮箱验证成功，已自动登录')
    }

    return data.session ?? null
  }

  const applyAuthRedirectState = (currentSession: Session | null) => {
    const authType = getAuthTypeFromUrl()
    if (authType === 'recovery') {
      setRecoveryMode(true)
      setAuthMessage('请输入新密码')
      return
    }
    if (authType === 'signup' || authType === 'magiclink') {
      if (!currentSession) {
        setActiveTab('login')
        setAuthMessage('邮箱验证成功，请使用刚才的密码登录')
      }
    }
  }
  
  // 获取物理模块的学习数据
  const physicsStore = usePhysicsStore()
  // 获取数学模块的学习数据
  const mathStore = useMathStore()
  // 获取英文模块的学习数据
  const englishStore = useEnglishStore()

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return
    const supabaseClient = supabase

    let mounted = true

    const initSession = async () => {
      const exchangedSession = await exchangeCodeForSessionIfNeeded()
      if (!mounted) return
      if (exchangedSession) {
        applyAuthRedirectState(exchangedSession)
        return
      }

      const { data } = await supabaseClient.auth.getSession()
      if (!mounted) return
      setSession(data.session)
      applyAuthRedirectState(data.session)
    }

    initSession()

    const { data } = supabaseClient.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession)
      applyAuthRedirectState(nextSession)
      if (event === 'PASSWORD_RECOVERY') {
        setRecoveryMode(true)
        setAuthMessage('请输入新密码')
      }
      if (event === 'SIGNED_OUT') {
        setRecoveryMode(false)
      }
    })

    return () => {
      mounted = false
      data.subscription.unsubscribe()
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError(null)
    setAuthMessage(null)

    if (!isSupabaseConfigured || !supabase) {
      setAuthError('请先配置 Supabase 环境变量')
      return
    }

    setAuthLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    })
    setAuthLoading(false)

    if (error) {
      setAuthError(error.message)
      return
    }

    setAuthMessage('登录成功')
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError(null)
    setAuthMessage(null)

    if (!isSupabaseConfigured || !supabase) {
      setAuthError('请先配置 Supabase 环境变量')
      return
    }

    setAuthLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email: registerEmail,
      password: registerPassword,
      options: {
        data: {
          name: registerName,
          phone: registerPhone,
        },
      },
    })
    setAuthLoading(false)

    if (error) {
      setAuthError(error.message)
      return
    }

    if (!data.session) {
      setAuthMessage('请前往邮箱完成验证后再登录')
    } else {
      setAuthMessage('注册成功')
    }
  }

  const handleSendPasswordReset = async () => {
    setAuthError(null)
    setAuthMessage(null)

    if (!isSupabaseConfigured || !supabase) {
      setAuthError('请先配置 Supabase 环境变量')
      return
    }

    if (!loginEmail) {
      setAuthError('请先填写邮箱地址')
      return
    }

    setAuthLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(loginEmail, {
      redirectTo: `${window.location.origin}/user`,
    })
    setAuthLoading(false)

    if (error) {
      setAuthError(error.message)
      return
    }

    setAuthMessage('已发送重置邮件，请查收邮箱')
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError(null)
    setAuthMessage(null)

    if (!isSupabaseConfigured || !supabase) {
      setAuthError('请先配置 Supabase 环境变量')
      return
    }

    if (recoveryPassword.length < 6) {
      setAuthError('密码至少需要 6 位')
      return
    }

    if (recoveryPassword !== recoveryConfirmPassword) {
      setAuthError('两次输入的密码不一致')
      return
    }

    setAuthLoading(true)
    const { error } = await supabase.auth.updateUser({ password: recoveryPassword })
    setAuthLoading(false)

    if (error) {
      setAuthError(error.message)
      return
    }

    setAuthMessage('密码已更新，请重新登录')
    setRecoveryMode(false)
    setRecoveryPassword('')
    setRecoveryConfirmPassword('')
    await supabase.auth.signOut()
  }

  const handleLogout = async () => {
    if (!isSupabaseConfigured || !supabase) return
    setAuthLoading(true)
    await supabase.auth.signOut()
    setAuthLoading(false)
    setAuthError(null)
    setAuthMessage(null)
    setRecoveryMode(false)
  }


  // 计算总进度（整合物理、数学和英文模块的进度）
  const totalProgress = useMemo(() => {
    if (!physicsStore.user) return 0
    return physicsStore.getOverallProgress()
  }, [physicsStore])

  // 准备学习趋势数据（过去7天，整合所有模块）
  const learningTrend = useMemo(() => {
    const physicsDailyStudy = physicsStore.dailyStudy || []
    const mathDailyStudy = mathStore.dailyStudy || []
    const englishDailyStudy = englishStore.dailyStudy || []
    
    // 合并所有模块的每日学习数据
    const combinedDailyStudyMap = new Map<string, { minutes: number, exercisesCompleted: number, skillsStudied: string[] }>();
    
    [...physicsDailyStudy, ...mathDailyStudy, ...englishDailyStudy].forEach(day => {
      const existing = combinedDailyStudyMap.get(day.date);
      const skillsStudied = 'skillsStudied' in day ? (day.skillsStudied || []) : [];
      if (existing) {
        existing.minutes += day.minutes;
        existing.exercisesCompleted += day.exercisesCompleted;
        skillsStudied.forEach((skill: string) => {
          if (!existing.skillsStudied.includes(skill)) {
            existing.skillsStudied.push(skill);
          }
        });
      } else {
        combinedDailyStudyMap.set(day.date, { 
          minutes: day.minutes, 
          exercisesCompleted: day.exercisesCompleted,
          skillsStudied: skillsStudied
        });
      }
    });
    
    const combinedDailyStudy = Array.from(combinedDailyStudyMap.entries())
      .map(([date, data]) => ({ date, ...data }))
      .sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    
    const last7Days = combinedDailyStudy.slice(-7);
    
    // 如果没有数据，生成模拟数据
    if (last7Days.length === 0) {
      return [
        { date: '1/1', minutes: 45 },
        { date: '1/2', minutes: 30 },
        { date: '1/3', minutes: 60 },
        { date: '1/4', minutes: 15 },
        { date: '1/5', minutes: 45 },
        { date: '1/6', minutes: 30 },
        { date: '1/7', minutes: 45 },
      ]
    }
    
    return last7Days.map((_day, index) => ({
      date: `1/${index + 1}`, // 简化日期格式
      minutes: last7Days[index].minutes
    }))
  }, [physicsStore.dailyStudy, mathStore.dailyStudy, englishStore.dailyStudy])

  // 今日任务
  const todayTasks = [
    {
      id: '1',
      title: '学习30分钟',
      icon: BookOpen,
      progress: 20,
      total: 30,
      unit: '分钟',
      percentage: 67
    },
    {
      id: '2',
      title: '完成10道题',
      icon: Calculator,
      progress: 7,
      total: 10,
      unit: '题',
      percentage: 70
    },
    {
      id: '3',
      title: '复习错题5道',
      icon: Star,
      progress: 2,
      total: 5,
      unit: '题',
      percentage: 40
    }
  ]

  // 处理继续学习按钮
  const handleContinueLearning = () => {
    navigate('/subjects/physics')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-navy-950 via-primary-900 to-navy-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {isLoggedIn ? '欢迎回来' : t('nav.userCenter')}
            </h1>
            <p className="text-primary-200">
              {isLoggedIn ? '管理您的学习进度和收藏' : '登录以保存您的测试记录和收藏'}
            </p>
            {isLoggedIn && isSupabaseConfigured && (
              <button
                onClick={handleLogout}
                disabled={authLoading}
                className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                退出登录
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* 主要内容区 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {recoveryMode ? (
              <motion.div
                key="recovery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-md mx-auto"
              >
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                    重设密码
                  </h2>
                  <form onSubmit={handleUpdatePassword} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        新密码
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="w-full pl-12 pr-12 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          placeholder="请输入新密码（至少6位）"
                          value={recoveryPassword}
                          onChange={(e) => setRecoveryPassword(e.target.value)}
                          disabled={authLoading}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        确认新密码
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="w-full pl-12 pr-12 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          placeholder="请再次输入新密码"
                          value={recoveryConfirmPassword}
                          onChange={(e) => setRecoveryConfirmPassword(e.target.value)}
                          disabled={authLoading}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                      disabled={authLoading}
                    >
                      {authLoading ? '处理中...' : '更新密码'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>

                    {authError && (
                      <p className="text-sm text-red-500 text-center">{authError}</p>
                    )}

                    {authMessage && (
                      <p className="text-sm text-emerald-600 text-center">{authMessage}</p>
                    )}
                  </form>
                </div>
              </motion.div>
            ) : !isLoggedIn ? (
              /* 登录/注册表单 */
              <motion.div
                key="auth"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-md mx-auto"
              >
                {/* 标签切换 */}
                <div className="flex bg-slate-100 rounded-xl p-1 mb-8">
                  <button
                    onClick={() => {
                      setActiveTab('login')
                      setAuthError(null)
                      setAuthMessage(null)
                    }}
                    className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                      activeTab === 'login'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {t('nav.login')}
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('register')
                      setAuthError(null)
                      setAuthMessage(null)
                    }}
                    className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                      activeTab === 'register'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {t('nav.register')}
                  </button>
                </div>

                {/* 登录表单 */}
                {activeTab === 'login' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="card p-8"
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                      登录账户
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          邮箱地址
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            placeholder="请输入邮箱"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            disabled={!isSupabaseConfigured || authLoading}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          密码
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="w-full pl-12 pr-12 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            placeholder="请输入密码"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            disabled={!isSupabaseConfigured || authLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                          <span className="text-sm text-slate-600">记住我</span>
                        </label>
                        <button
                          type="button"
                          onClick={handleSendPasswordReset}
                          disabled={!isSupabaseConfigured || authLoading}
                          className="text-sm text-primary-600 hover:text-primary-700 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          忘记密码？
                        </button>
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={!isSupabaseConfigured || authLoading}
                      >
                        {authLoading ? '处理中...' : '登录'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>

                      {!isSupabaseConfigured && (
                        <p className="text-sm text-amber-600 text-center">
                          需要先配置 Supabase（VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）
                        </p>
                      )}

                      {authError && (
                        <p className="text-sm text-red-500 text-center">{authError}</p>
                      )}

                      {authMessage && (
                        <p className="text-sm text-emerald-600 text-center">{authMessage}</p>
                      )}
                    </form>

                    {/* 社交登录 */}
                    <div className="mt-6">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-slate-500">或使用以下方式登录</span>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          <span className="text-sm font-medium text-slate-700">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                          <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18z"/>
                            <path d="M22.063 14.063c0-3.29-3.21-5.938-7.156-5.938-3.946 0-7.156 2.648-7.156 5.938s3.21 5.938 7.156 5.938c.766 0 1.502-.101 2.194-.288a.715.715 0 0 1 .591.081l1.554.91a.265.265 0 0 0 .137.044.244.244 0 0 0 .241-.244c0-.059-.024-.118-.039-.175l-.319-1.212a.485.485 0 0 1 .175-.546c1.493-1.103 2.622-2.738 2.622-4.508zm-9.687-1.018a.966.966 0 0 1-.953-.966c0-.534.426-.968.953-.968.526 0 .953.434.953.968a.966.966 0 0 1-.953.966zm5.062 0a.966.966 0 0 1-.953-.966c0-.534.427-.968.953-.968.527 0 .953.434.953.968a.966.966 0 0 1-.953.966z"/>
                          </svg>
                          <span className="text-sm font-medium text-slate-700">微信</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 注册表单 */}
                {activeTab === 'register' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="card p-8"
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                      创建账户
                    </h2>
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          姓名
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            placeholder="请输入姓名"
                            value={registerName}
                            onChange={(e) => setRegisterName(e.target.value)}
                            disabled={!isSupabaseConfigured || authLoading}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          邮箱地址
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            placeholder="请输入邮箱"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            disabled={!isSupabaseConfigured || authLoading}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          手机号码
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="tel"
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            placeholder="请输入手机号码"
                            value={registerPhone}
                            onChange={(e) => setRegisterPhone(e.target.value)}
                            disabled={!isSupabaseConfigured || authLoading}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          密码
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="w-full pl-12 pr-12 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                            placeholder="请设置密码（至少6位）"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            disabled={!isSupabaseConfigured || authLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="w-4 h-4 mt-1 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                        <span className="text-sm text-slate-600">
                          我已阅读并同意 <a href="#" className="text-primary-600 hover:text-primary-700">服务条款</a> 和 <a href="#" className="text-primary-600 hover:text-primary-700">隐私政策</a>
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={!isSupabaseConfigured || authLoading}
                      >
                        {authLoading ? '处理中...' : '注册'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>

                      {!isSupabaseConfigured && (
                        <p className="text-sm text-amber-600 text-center">
                          需要先配置 Supabase（VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）
                        </p>
                      )}

                      {authError && (
                        <p className="text-sm text-red-500 text-center">{authError}</p>
                      )}

                      {authMessage && (
                        <p className="text-sm text-emerald-600 text-center">{authMessage}</p>
                      )}
                    </form>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              /* 学习仪表板 */
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="-mx-4 sm:-mx-6 lg:-mx-8"
              >
                <LearningDashboard
                  userName={physicsStore.user?.name || '学习者'}
                  level={physicsStore.user?.level || 5}
                  streak={physicsStore.user?.streak || 7}
                  totalStudyTime={physicsStore.stats.totalStudyTime}
                  completedExercises={physicsStore.stats.exercisesSolved}
                  averageAccuracy={Math.round(physicsStore.stats.averageScore)}
                  achievementsObtained={physicsStore.achievements.filter(a => a.unlocked).length}
                  totalAchievements={physicsStore.achievements.length}
                  totalProgress={totalProgress}
                  learningTrend={learningTrend}
                  todayTasks={todayTasks}
                  onContinueLearning={handleContinueLearning}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
