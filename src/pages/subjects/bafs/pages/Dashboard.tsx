import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookMarked,
  Briefcase,
  CheckCircle2,
  FileText,
  Library,
  Receipt,
} from 'lucide-react'
import { BAFS_SOURCE_SUMMARY, BAFS_STRANDS } from '../constants/curriculum'

const stats = [
  { value: '2', label: '學習主線' },
  { value: `${BAFS_SOURCE_SUMMARY.lessonPlans}`, label: '章節教學框架' },
  { value: `${BAFS_SOURCE_SUMMARY.sourceBooks}`, label: '冊教材來源' },
  { value: 'A1–A12', label: '會計選修單元' },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-lg border border-emerald-900/10 bg-emerald-950 text-white">
        <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.5fr_0.8fr] md:px-10 md:py-10">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
              <CheckCircle2 className="h-4 w-4 text-amber-400" />
              課程框架已上線
            </div>
            <h1 className="text-3xl font-bold tracking-normal md:text-4xl">DSE 會計學習中心</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-100 md:text-base">
              依據現有 BAFS 教材與教學大綱建立，從共同基礎到 A1–A12
              會計選修內容，並保留商業管理學習線。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/subjects/bafs/strand/accounting"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-400"
              >
                開始會計課程
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/subjects/bafs/resources"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                查看資源目錄
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-white/15 bg-white/15">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-emerald-950 p-4">
                <p className="text-2xl font-bold text-amber-400">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-emerald-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-950">選擇學習線</h2>
          <p className="mt-1 text-sm text-slate-500">會計為主要學習線，商業管理內容亦已按教材結構整理。</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {BAFS_STRANDS.map((strand) => {
            const isAccounting = strand.id === 'accounting'
            const Icon = isAccounting ? Receipt : Briefcase
            return (
              <Link
                key={strand.id}
                to={`/subjects/bafs/strand/${strand.id}`}
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-700/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-md ${isAccounting ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {strand.chapters} 個章節框架
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950 group-hover:text-emerald-800">{strand.name}</h3>
                <p className="mt-1 text-xs font-medium text-slate-400">{strand.nameEn}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{strand.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-emerald-800">
                  <span>{strand.levels.length} 個課程階段</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Link
          to="/subjects/bafs/notes"
          className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 hover:border-emerald-700/30"
        >
          <BookMarked className="h-5 w-5 flex-shrink-0 text-emerald-700" />
          <div>
            <h3 className="font-bold text-slate-950">章節筆記</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">查看每個部分的導讀、重點及完成檢查。</p>
          </div>
        </Link>
        <Link
          to="/subjects/bafs/resources"
          className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 hover:border-emerald-700/30"
        >
          <Library className="h-5 w-5 flex-shrink-0 text-emerald-700" />
          <div>
            <h3 className="font-bold text-slate-950">課程資源目錄</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">查看教材及教學大綱的整理進度。</p>
          </div>
        </Link>
        <Link
          to="/subjects/bafs/past-papers"
          className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 hover:border-amber-600/40"
        >
          <FileText className="h-5 w-5 flex-shrink-0 text-amber-700" />
          <div>
            <h3 className="font-bold text-slate-950">HKDSE 真題專區</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">真題與詳細解析入口已預留，資料待上傳。</p>
          </div>
        </Link>
      </section>
    </div>
  )
}
