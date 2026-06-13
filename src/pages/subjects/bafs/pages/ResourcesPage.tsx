import { BookOpen, CheckCircle2, Clock3, Files, Library } from 'lucide-react'
import { BAFS_SOURCE_SUMMARY, BAFS_STRANDS } from '../constants/curriculum'

export default function ResourcesPage() {
  return (
    <div className="space-y-7">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-950">課程資源目錄</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          現有教材及教學大綱已完成盤點。為確保網頁載入速度，原始大型教材 PDF
          不會直接公開下載，內容將按章節整理為線上課程。
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: BookOpen, value: BAFS_SOURCE_SUMMARY.sourceBooks, label: '冊教材系列' },
          { icon: Files, value: BAFS_SOURCE_SUMMARY.lessonPlans, label: '章節教學框架' },
          { icon: Library, value: BAFS_SOURCE_SUMMARY.textbookFiles, label: '份教材來源文件' },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5">
            <item.icon className="h-5 w-5 text-emerald-700" />
            <p className="mt-4 text-2xl font-bold text-slate-950">{item.value}</p>
            <p className="mt-1 text-sm text-slate-500">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        {BAFS_STRANDS.map((strand) => (
          <div key={strand.id} className="rounded-lg border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="font-bold text-slate-950">{strand.name}</h2>
                <p className="mt-1 text-xs text-slate-400">{strand.nameEn}</p>
              </div>
              <span className="rounded bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                目錄已整理
              </span>
            </div>
            <div className="divide-y divide-slate-100">
              {strand.levels.map((level) => (
                <div key={level.id} className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-bold text-slate-800">{level.book}</p>
                      <span className="text-xs font-semibold text-slate-400">{level.code}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{level.title} · {level.chapters} 個章節</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                      框架已上線
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-amber-700">
                      <Clock3 className="h-4 w-4" />
                      內容整理中
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
