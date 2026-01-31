import { useEffect, useMemo, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Users,
  RefreshCcw,
  Search,
  Clock,
  Target,
  TrendingUp,
  XCircle,
  AlertTriangle,
  BookOpen,
  Rocket,
} from 'lucide-react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { isSupabaseConfigured, supabase } from '../supabase'
import { isAdminUser } from '../admin'
import type { ProgressPayload } from '../store/supabaseProgress'
import { PHYSICS_TOPICS } from './subjects/physics/constants/topics'
import { PHYSICS_CURRICULUM } from './subjects/physics/constants/curriculum'

type UserProgressRow = {
  user_id: string
  updated_at: string
  payload: ProgressPayload | null
}

type TrendPoint = { date: string; minutes: number }

type StudentSummary = {
  userId: string
  name: string
  email: string
  updatedAt: string
  totalStudyMinutes: number
  totalExercisesSolved: number
  physicsAttempted: number
  physicsCorrect: number
  physicsAccuracy: number
  trend7d: TrendPoint[]
  physicsTopics: Array<{
    topicId: string
    name: string
    nameCN: string
    completedChapters: number
    totalChapters: number
    percent: number
  }>
}

const formatMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hours <= 0) return `${mins}m`
  return `${hours}h ${mins}m`
}

const safeDate = (value: string) => {
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : d
}

const formatRelative = (iso: string) => {
  const d = safeDate(iso)
  if (!d) return iso
  const diffMs = Date.now() - d.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  if (diffMin < 1) return '刚刚'
  if (diffMin < 60) return `${diffMin} 分钟前`
  const diffH = Math.floor(diffMin / 60)
  if (diffH < 24) return `${diffH} 小时前`
  const diffD = Math.floor(diffH / 24)
  return `${diffD} 天前`
}

const buildTrend7d = (payload: ProgressPayload | null): TrendPoint[] => {
  if (!payload) return []

  const buckets = new Map<string, number>()
  const add = (entries?: Array<{ date: string; minutes: number }>) => {
    ;(entries || []).forEach((e) => {
      const key = e.date
      buckets.set(key, (buckets.get(key) || 0) + (e.minutes || 0))
    })
  }

  add(payload.physics?.dailyStudy)
  add(payload.math?.dailyStudy)
  add(payload.english?.dailyStudy)

  const points = Array.from(buckets.entries()).map(([date, minutes]) => ({ date, minutes }))
  points.sort((a, b) => {
    const da = safeDate(a.date)?.getTime()
    const db = safeDate(b.date)?.getTime()
    if (da == null || db == null) return a.date.localeCompare(b.date)
    return da - db
  })

  return points.slice(-7).map((p) => ({
    date: (() => {
      const d = safeDate(p.date)
      if (!d) return p.date
      return `${d.getMonth() + 1}/${d.getDate()}`
    })(),
    minutes: p.minutes,
  }))
}

const summarizeStudent = (row: UserProgressRow): StudentSummary => {
  const payload = row.payload
  const name = payload?.meta?.name || '学习者'
  const email = payload?.meta?.email || ''

  const physicsStudy = payload?.physics?.stats?.totalStudyTime || 0
  const mathStudy = payload?.math?.stats?.totalStudyTime || 0
  const englishStudy = payload?.english?.stats?.totalStudyTime || 0
  const m2Study = payload?.m2?.stats?.totalStudyTime || 0

  const physicsSolved = payload?.physics?.stats?.exercisesSolved || 0
  const mathSolved = payload?.math?.stats?.exercisesSolved || 0
  const englishSolved = payload?.english?.stats?.exercisesSolved || 0
  const m2Solved = payload?.m2?.stats?.proofsCompleted || 0

  const physicsProgress = payload?.physics?.exerciseProgress || {}
  let physicsAttempted = 0
  let physicsCorrect = 0
  Object.values(physicsProgress).forEach((p) => {
    physicsAttempted += p.attemptedIds?.length || 0
    physicsCorrect += p.correctIds?.length || 0
  })
  const physicsAccuracy = physicsAttempted > 0 ? Math.round((physicsCorrect / physicsAttempted) * 100) : 0

  const topicTotals = new Map(PHYSICS_CURRICULUM.map((t) => [t.id, t.sections.length]))
  const completedByTopic = new Map<string, number>()
  ;(payload?.physics?.progress || []).forEach((p) => {
    if (!p?.completed) return
    completedByTopic.set(p.topicId, (completedByTopic.get(p.topicId) || 0) + 1)
  })

  const physicsTopics = PHYSICS_TOPICS.map((t) => {
    const totalChapters = topicTotals.get(t.id) || 0
    const completedChapters = completedByTopic.get(t.id) || 0
    const percent = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0
    return {
      topicId: t.id,
      name: t.name,
      nameCN: t.nameCN,
      completedChapters,
      totalChapters,
      percent,
    }
  })

  return {
    userId: row.user_id,
    name,
    email,
    updatedAt: row.updated_at,
    totalStudyMinutes: physicsStudy + mathStudy + englishStudy + m2Study,
    totalExercisesSolved: physicsSolved + mathSolved + englishSolved + m2Solved,
    physicsAttempted,
    physicsCorrect,
    physicsAccuracy,
    trend7d: buildTrend7d(payload),
    physicsTopics,
  }
}

export default function AdminDashboard() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [rows, setRows] = useState<UserProgressRow[]>([])
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [query, setQuery] = useState('')

  const isLoggedIn = Boolean(session?.user)
  const isAdmin = isAdminUser(session?.user)

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return
    const client = supabase

    let mounted = true
    client.auth.getSession().then(({ data }) => {
      if (!mounted) return
      setSession(data.session)
    })
    const { data } = client.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
    })
    return () => {
      mounted = false
      data.subscription.unsubscribe()
    }
  }, [])

  const refresh = async () => {
    if (!isSupabaseConfigured || !supabase) return
    if (!session?.user) return
    if (!isAdminUser(session.user)) return

    setLoading(true)
    setLoadError(null)
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('user_id, payload, updated_at')
        .order('updated_at', { ascending: false })
        .limit(500)

      if (error) {
        const msg =
          error.message ||
          '无法读取学员进度。请确认 Supabase RLS 已为管理员账号开放读取 user_progress 的权限。'
        setLoadError(msg)
        setRows([])
        setSelectedUserId(null)
      } else {
        setRows((data as UserProgressRow[]) || [])
        setSelectedUserId((prev) => prev || (data?.[0]?.user_id ?? null))
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isLoggedIn || !isAdmin) return
    void refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, isAdmin])

  const students = useMemo(() => rows.map(summarizeStudent), [rows])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return students
    return students.filter((s) => {
      return (
        s.userId.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q)
      )
    })
  }, [query, students])

  const selected = useMemo(() => {
    if (!selectedUserId) return null
    return students.find((s) => s.userId === selectedUserId) || null
  }, [selectedUserId, students])

  const totals = useMemo(() => {
    const totalStudents = students.length
    const totalMinutes = students.reduce((acc, s) => acc + s.totalStudyMinutes, 0)
    const totalSolved = students.reduce((acc, s) => acc + s.totalExercisesSolved, 0)
    const avgAccuracy =
      students.length > 0
        ? Math.round(students.reduce((acc, s) => acc + s.physicsAccuracy, 0) / students.length)
        : 0
    return { totalStudents, totalMinutes, totalSolved, avgAccuracy }
  }, [students])

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-primary-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 text-white">
              <Shield className="w-6 h-6 text-yellow-400" />
              <h1 className="text-3xl font-bold">学习后台</h1>
            </div>
            <p className="text-white/70 mt-2">
              快速查看每位学生的学习时长、做题量与进度（仅管理员可见）
            </p>
          </div>

          <button
            type="button"
            onClick={() => void refresh()}
            disabled={!isLoggedIn || !isAdmin || loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            刷新
          </button>
        </div>

        {!isSupabaseConfigured && (
          <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-yellow-100">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-300 mt-0.5" />
              <div>
                <div className="font-semibold">Supabase 未配置</div>
                <div className="text-sm text-yellow-100/80 mt-1">
                  请先在环境变量中设置 `VITE_SUPABASE_URL` 与 `VITE_SUPABASE_ANON_KEY`。
                </div>
              </div>
            </div>
          </div>
        )}

        {isSupabaseConfigured && !isLoggedIn && (
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white">
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-primary-300 mt-0.5" />
              <div className="flex-1">
                <div className="text-lg font-semibold">请先登录</div>
                <div className="text-white/70 mt-1">后台需要你的管理员账号登录后才能查看。</div>
                <a
                  href="/user"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium"
                >
                  去登录
                  <TrendingUp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {isLoggedIn && !isAdmin && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-white">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-300 mt-0.5" />
              <div className="flex-1">
                <div className="text-lg font-semibold">无权限访问</div>
                <div className="text-white/70 mt-1">
                  当前账号不是管理员。请用你的管理员账号登录后访问。
                </div>
              </div>
            </div>
          </div>
        )}

        {isLoggedIn && isAdmin && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">学生数</span>
                  <Users className="w-5 h-5 text-primary-300" />
                </div>
                <div className="mt-3 text-3xl font-bold text-white">{totals.totalStudents}</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">总学习时长</span>
                  <Clock className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="mt-3 text-3xl font-bold text-white">
                  {formatMinutes(totals.totalMinutes)}
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">总做题量</span>
                  <Target className="w-5 h-5 text-yellow-300" />
                </div>
                <div className="mt-3 text-3xl font-bold text-white">{totals.totalSolved}</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">物理平均正确率</span>
                  <Rocket className="w-5 h-5 text-primary-300" />
                </div>
                <div className="mt-3 text-3xl font-bold text-white">{totals.avgAccuracy}%</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-white/50 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="搜索学生（姓名 / 邮箱 / ID）"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/60"
                  />
                </div>
                <div className="text-white/60 text-sm pr-2">
                  {filtered.length}/{students.length}
                </div>
              </div>
            </div>

            {loadError && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-white">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-300 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold">读取失败</div>
                    <div className="text-sm text-white/70 mt-1">{loadError}</div>
                    <div className="text-xs text-white/60 mt-3">
                      需要在 Supabase 为 `user_progress` 开启 RLS，并给你的管理员账号添加允许读取所有行的 policy。
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/15 bg-white/10 overflow-hidden">
                  <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                    <div className="text-white font-semibold">学生列表</div>
                    {loading && <div className="text-white/60 text-sm">加载中…</div>}
                  </div>

                  <div className="max-h-[70vh] overflow-y-auto">
                    {filtered.length === 0 ? (
                      <div className="p-8 text-center text-white/70">暂无学生数据</div>
                    ) : (
                      <div className="p-3 space-y-3">
                        {filtered.map((s) => {
                          const active = s.userId === selectedUserId
                          return (
                            <button
                              key={s.userId}
                              type="button"
                              onClick={() => setSelectedUserId(s.userId)}
                              className={`w-full text-left rounded-2xl p-4 border transition-colors ${
                                active
                                  ? 'bg-primary-600/20 border-primary-400/40'
                                  : 'bg-black/15 border-white/10 hover:border-white/20'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400/40 to-indigo-500/40 border border-white/15 flex items-center justify-center text-white font-semibold">
                                      {s.name.slice(0, 1).toUpperCase()}
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-white font-semibold truncate">{s.name}</div>
                                      <div className="text-white/60 text-xs truncate">
                                        {s.email || s.userId}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-white/50 text-xs shrink-0">
                                  {formatRelative(s.updatedAt)}
                                </div>
                              </div>

                              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                                <div className="rounded-xl bg-white/5 border border-white/10 p-2">
                                  <div className="text-white/60">学习</div>
                                  <div className="text-white font-semibold">{formatMinutes(s.totalStudyMinutes)}</div>
                                </div>
                                <div className="rounded-xl bg-white/5 border border-white/10 p-2">
                                  <div className="text-white/60">做题</div>
                                  <div className="text-white font-semibold">{s.totalExercisesSolved}</div>
                                </div>
                                <div className="rounded-xl bg-white/5 border border-white/10 p-2">
                                  <div className="text-white/60">物理正确率</div>
                                  <div className="text-white font-semibold">{s.physicsAccuracy}%</div>
                                </div>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  {selected ? (
                    <motion.div
                      key={selected.userId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="space-y-4"
                    >
                      <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400/40 to-indigo-500/40 border border-white/15 flex items-center justify-center text-white text-xl font-bold">
                              {selected.name.slice(0, 1).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <div className="text-white text-xl font-bold truncate">{selected.name}</div>
                              <div className="text-white/60 text-sm truncate">
                                {selected.email || selected.userId}
                              </div>
                              <div className="text-white/50 text-xs mt-1">
                                最近同步：{formatRelative(selected.updatedAt)}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="rounded-2xl bg-black/15 border border-white/10 p-4">
                            <div className="flex items-center justify-between text-white/70 text-sm">
                              <span>学习时长</span>
                              <Clock className="w-4 h-4 text-emerald-300" />
                            </div>
                            <div className="mt-2 text-2xl font-bold text-white">
                              {formatMinutes(selected.totalStudyMinutes)}
                            </div>
                          </div>
                          <div className="rounded-2xl bg-black/15 border border-white/10 p-4">
                            <div className="flex items-center justify-between text-white/70 text-sm">
                              <span>做题量</span>
                              <Target className="w-4 h-4 text-yellow-300" />
                            </div>
                            <div className="mt-2 text-2xl font-bold text-white">
                              {selected.totalExercisesSolved}
                            </div>
                          </div>
                          <div className="rounded-2xl bg-black/15 border border-white/10 p-4">
                            <div className="flex items-center justify-between text-white/70 text-sm">
                              <span>物理正确率</span>
                              <Rocket className="w-4 h-4 text-primary-300" />
                            </div>
                            <div className="mt-2 text-2xl font-bold text-white">
                              {selected.physicsAccuracy}%
                            </div>
                            <div className="text-white/50 text-xs mt-1">
                              {selected.physicsCorrect}/{selected.physicsAttempted}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 text-white font-semibold">
                            <TrendingUp className="w-5 h-5 text-primary-300" />
                            最近 7 天学习趋势
                          </div>
                          <div className="text-white/60 text-xs">分钟</div>
                        </div>
                        <div className="h-56">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={selected.trend7d}>
                              <defs>
                                <linearGradient id="minutesGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.8} />
                                  <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.05} />
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                              <XAxis dataKey="date" stroke="rgba(255,255,255,0.6)" fontSize={12} />
                              <YAxis stroke="rgba(255,255,255,0.6)" fontSize={12} width={30} />
                              <Tooltip
                                contentStyle={{
                                  background: 'rgba(15,23,42,0.95)',
                                  border: '1px solid rgba(255,255,255,0.12)',
                                  borderRadius: 12,
                                  color: 'white',
                                }}
                              />
                              <Area
                                type="monotone"
                                dataKey="minutes"
                                stroke="#60a5fa"
                                fill="url(#minutesGradient)"
                                strokeWidth={2}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                        <div className="flex items-center gap-2 text-white font-semibold mb-4">
                          <BookOpen className="w-5 h-5 text-yellow-300" />
                          物理八大主题进度
                        </div>
                        <div className="space-y-3">
                          {selected.physicsTopics.map((t) => (
                            <div
                              key={t.topicId}
                              className="rounded-2xl bg-black/15 border border-white/10 p-4"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                  <div className="text-white font-semibold truncate">
                                    {t.nameCN}
                                  </div>
                                  <div className="text-white/60 text-xs truncate">{t.name}</div>
                                </div>
                                <div className="text-white font-bold shrink-0">{t.percent}%</div>
                              </div>
                              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"
                                  style={{ width: `${t.percent}%` }}
                                />
                              </div>
                              <div className="text-white/50 text-xs mt-2">
                                {t.completedChapters}/{t.totalChapters} 章节完成
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-2xl border border-white/15 bg-white/10 p-10 text-center text-white/70"
                    >
                      请选择左侧学生查看详情
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
