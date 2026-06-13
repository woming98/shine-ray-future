import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, CheckCircle2, Lightbulb, ListChecks } from 'lucide-react'
import { BAFSStrandId } from '../constants/curriculum'
import { getNotePart } from '../constants/notes'

export default function NoteDetailPage() {
  const { strandId, partId } = useParams<{ strandId: BAFSStrandId; partId: string }>()
  const part = strandId && partId ? getNotePart(strandId, partId) : undefined

  if (!part) {
    return <Navigate to="/subjects/bafs/notes" replace />
  }

  return (
    <div className="space-y-7">
      <header className="border-b border-slate-200 pb-6">
        <Link to="/subjects/bafs/notes" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950">
          <ArrowLeft className="h-4 w-4" />
          返回章節筆記
        </Link>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded bg-emerald-950 px-2.5 py-1 text-xs font-bold text-amber-400">{part.code}</span>
          <span className="rounded bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">第一版筆記</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">{part.title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{part.description}</p>
        <p className="mt-2 text-xs font-medium text-slate-400">來源：{part.sourceBook}</p>
      </header>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-emerald-700" />
          <h2 className="text-xl font-bold text-slate-950">章節導讀</h2>
        </div>
        <div className="grid gap-3">
          {part.chapters.map((chapter, index) => (
            <article key={chapter.titleEn} className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 sm:grid-cols-[40px_1fr]">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-sm font-bold text-slate-600">{index + 1}</div>
              <div>
                <h3 className="font-bold text-slate-900">{chapter.title}</h3>
                <p className="mt-1 text-xs font-medium text-slate-400">{chapter.titleEn}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{chapter.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-lg border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-700" />
            <h2 className="font-bold text-amber-950">核心重點</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {part.keyPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-amber-950">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600" />
                {point}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-emerald-700" />
            <h2 className="font-bold text-emerald-950">完成檢查</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {part.checklist.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-emerald-950">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
        公式、例題及試題練習將在下一輪按章節補充。
      </div>
    </div>
  )
}
