import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Lock } from 'lucide-react'
import { PHYSICS_CURRICULUM, PHYSICS_TOTAL_SECTIONS } from './subjects/physics/constants/curriculum'
import { PHYSICS_EXERCISE_CATALOG } from './subjects/physics/constants/exerciseCatalog'
import { useStore } from './subjects/physics/store/useStore'

const EXERCISE_IDS_BY_SECTION = (() => {
  const map = new Map<string, Set<string>>()
  Object.values(PHYSICS_EXERCISE_CATALOG).forEach((entry) => {
    entry.exercises.forEach((exercise) => {
      if (!exercise.sectionId) return
      const key = `${entry.topicId}-${exercise.sectionId}`
      if (!map.has(key)) {
        map.set(key, new Set())
      }
      map.get(key)?.add(exercise.id)
    })
  })
  return map
})()

export default function PhysicsProgress() {
  const navigate = useNavigate()
  const { user, progress, exerciseProgress, getOverallProgress } = useStore()

  const sectionStats = useMemo(() => {
    const stats = new Map<
      string,
      {
        total: number
        attempted: number
        correct: number
        accuracy: number
        completed: boolean
      }
    >()

    PHYSICS_CURRICULUM.forEach((topic) => {
      topic.sections.forEach((section) => {
        const key = `${topic.id}-${section.id}`
        const ids = EXERCISE_IDS_BY_SECTION.get(key)
        const total = ids?.size ?? 0
        const exercise = exerciseProgress[key] || {
          attemptedIds: [],
          correctIds: [],
        }
        const attempted = ids
          ? exercise.attemptedIds.filter((id) => ids.has(id)).length
          : 0
        const correct = ids
          ? exercise.correctIds.filter((id) => ids.has(id)).length
          : 0
        const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0
        const completed = progress.some(
          (p) => p.topicId === topic.id && p.chapterId === section.id && p.completed
        )

        stats.set(key, { total, attempted, correct, accuracy, completed })
      })
    })

    return stats
  }, [exerciseProgress, progress])

  const topics = useMemo(() => {
    return PHYSICS_CURRICULUM.map((topic) => {
      const sections = topic.sections.map((section) => {
        const key = `${topic.id}-${section.id}`
        const stats = sectionStats.get(key) || {
          total: 0,
          attempted: 0,
          correct: 0,
          accuracy: 0,
          completed: false,
        }
        return {
          ...section,
          key,
          ...stats,
        }
      })

      const completedSections = sections.filter((s) => s.completed).length
      const totalExercises = sections.reduce((sum, s) => sum + s.total, 0)
      const attemptedExercises = sections.reduce((sum, s) => sum + s.attempted, 0)
      const correctExercises = sections.reduce((sum, s) => sum + s.correct, 0)
      const accuracy =
        attemptedExercises > 0 ? Math.round((correctExercises / attemptedExercises) * 100) : 0
      const progressPercent =
        sections.length > 0 ? Math.round((completedSections / sections.length) * 100) : 0

      return {
        ...topic,
        sections,
        completedSections,
        totalExercises,
        attemptedExercises,
        accuracy,
        progressPercent,
      }
    })
  }, [sectionStats])

  const overallProgress = getOverallProgress()
  const overallCompletedSections = topics.reduce((sum, topic) => sum + topic.completedSections, 0)
  const overallExercises = topics.reduce((sum, topic) => sum + topic.totalExercises, 0)
  const overallAttempted = topics.reduce((sum, topic) => sum + topic.attemptedExercises, 0)
  const overallCorrect = topics.reduce(
    (sum, topic) =>
      sum + topic.sections.reduce((sectionSum, section) => sectionSum + section.correct, 0),
    0
  )
  const overallAccuracy =
    overallAttempted > 0 ? Math.round((overallCorrect / overallAttempted) * 100) : 0

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-primary-950 p-6">
        <div className="max-w-4xl mx-auto bg-white/10 border border-white/20 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">请先登录</h2>
          <p className="text-white/70 mb-6">登录后即可查看物理学习进度</p>
          <button
            type="button"
            onClick={() => navigate('/user')}
            className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            返回个人中心
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-primary-950 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/user')}
            className="flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回个人中心
          </button>
          <div className="text-sm text-blue-200/70">物理学习全盘进度</div>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">物理学习进度</h1>
              <p className="text-white/70">8 大板块 · 42 章节</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-white/60">总进度</div>
                <div className="text-3xl font-bold">{overallProgress}%</div>
              </div>
              <div className="w-24 h-24 relative">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - overallProgress / 100)}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/70">
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              已完成章节：{overallCompletedSections}/{PHYSICS_TOTAL_SECTIONS}
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              已做题数：{overallAttempted}/{overallExercises}
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              全部正确率：{overallAccuracy}%
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {topics.map((topic) => (
            <details
              key={topic.id}
              className="group bg-slate-900/60 border border-blue-500/20 rounded-2xl overflow-hidden"
              open
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-blue-100">{topic.titleCN}</div>
                  <div className="text-sm text-blue-300">{topic.title}</div>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <div className="text-sm text-blue-200">
                    完成 {topic.completedSections}/{topic.sections.length} · 正确率 {topic.accuracy}%
                  </div>
                  <div className="w-52 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      style={{ width: `${topic.progressPercent}%` }}
                    />
                  </div>
                </div>
              </summary>

              <div className="px-6 pb-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {topic.sections.map((section) => {
                  const attemptedPercent =
                    section.total > 0 ? Math.round((section.attempted / section.total) * 100) : 0
                  const accuracyLabel = section.attempted > 0 ? `${section.accuracy}%` : '—'
                  return (
                    <div
                      key={section.key}
                      className="bg-slate-800/70 border border-blue-500/10 rounded-xl p-4 flex flex-col gap-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-blue-100 font-medium">{section.titleCN}</div>
                          <div className="text-xs text-blue-300">{section.title}</div>
                        </div>
                        {section.total > 0 ? (
                          <button
                            type="button"
                            onClick={() =>
                              navigate(
                                `/subjects/physics/exercise/${section.id}?topic=${topic.id}`
                              )
                            }
                            className="text-xs px-3 py-1 rounded-full bg-primary-600/80 text-white hover:bg-primary-500 transition-colors"
                          >
                            进入练习
                          </button>
                        ) : (
                          <span className="text-xs flex items-center gap-1 text-blue-400/70">
                            <Lock className="w-3 h-3" />
                            未开放
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-blue-200/80">
                        <span>
                          已做 {section.attempted}/{section.total}
                        </span>
                        <span>正确率 {accuracyLabel}</span>
                        {section.completed && (
                          <span className="flex items-center gap-1 text-emerald-400">
                            <CheckCircle2 className="w-3 h-3" />
                            已完成
                          </span>
                        )}
                      </div>

                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-indigo-500"
                          style={{ width: `${attemptedPercent}%` }}
                        />
                      </div>

                      {section.total === 0 && (
                        <p className="text-xs text-blue-300/60">
                          该章节暂未开放题目，完成后会自动出现进度。
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
