import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react'
import { BAFS_STRANDS } from '../constants/curriculum'
import { BAFS_NOTE_PARTS } from '../constants/notes'

export default function NotesHubPage() {
  return (
    <div className="space-y-7">
      <header className="border-b border-slate-200 pb-6">
        <span className="rounded bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">第一版筆記已上線</span>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">章節筆記</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          按教材部分整理章節導讀、核心重點及完成檢查。下一階段會逐章加入公式、例題及試題練習。
        </p>
      </header>

      {BAFS_STRANDS.map((strand) => {
        const parts = BAFS_NOTE_PARTS.filter((part) => part.strand === strand.id)
        return (
          <section key={strand.id}>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-950">{strand.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{parts.length} 個部分</p>
              </div>
              <Link to={`/subjects/bafs/strand/${strand.id}`} className="text-xs font-semibold text-emerald-800 hover:text-emerald-950">
                查看課程線
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {parts.map((part) => (
                <Link
                  key={part.id}
                  to={`/subjects/bafs/notes/${part.strand}/${part.id}`}
                  className="group rounded-lg border border-slate-200 bg-white p-4 hover:border-emerald-700/30 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-950 text-xs font-bold text-amber-400">
                      {part.code}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {['C1', 'C2'].includes(part.code) ? '完整雙語筆記' : '筆記已上線'}
                    </span>
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900 group-hover:text-emerald-800">{part.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{part.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      {part.chapters.length} 章
                    </span>
                    <ArrowRight className="h-4 w-4 text-emerald-700 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
