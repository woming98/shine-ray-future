import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, BookOpen, CheckCircle2, Clock3 } from 'lucide-react'
import { BAFS_STRANDS, BAFSStrandId } from '../constants/curriculum'

export default function StrandPage() {
  const { strandId } = useParams<{ strandId: BAFSStrandId }>()
  const strand = BAFS_STRANDS.find((item) => item.id === strandId)

  if (!strand) {
    return <Navigate to="/subjects/bafs" replace />
  }

  return (
    <div className="space-y-7">
      <header className="border-b border-slate-200 pb-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">課程框架已上線</span>
          <span className="rounded bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">教材內容整理中</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-950">{strand.name}</h1>
        <p className="mt-1 text-sm font-medium text-slate-400">{strand.nameEn}</p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{strand.description}</p>
      </header>

      <div className="grid gap-4">
        {strand.levels.map((level, index) => (
          <article key={level.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-emerald-950 text-sm font-bold text-amber-400">
                  {index + 1}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-bold text-slate-950">{level.title}</h2>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{level.code}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-400">{level.titleEn}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{level.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {level.topics.map((topic) => (
                      <span key={topic} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="min-w-44 rounded-md border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium text-slate-400">來源教材</p>
                <p className="mt-1 text-sm font-bold text-slate-800">{level.book}</p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-800">
                  <CheckCircle2 className="h-4 w-4" />
                  {level.chapters} 個章節框架
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs font-medium text-amber-800">
                  <Clock3 className="h-4 w-4" />
                  課程內容整理中
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link
        to="/subjects/bafs/resources"
        className="flex items-center justify-between rounded-lg border border-emerald-900/15 bg-emerald-50 p-5 text-emerald-950 hover:border-emerald-700/40"
      >
        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-emerald-700" />
          <div>
            <p className="font-bold">查看完整資源整理狀態</p>
            <p className="mt-1 text-xs text-emerald-800">教材與教學大綱將按階段逐步轉為線上內容。</p>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 flex-shrink-0" />
      </Link>
    </div>
  )
}
