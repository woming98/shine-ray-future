import { Clock3, FileCheck2, FileText, Search } from 'lucide-react'

const plannedResources = [
  { title: '純試卷', description: '按年份整理 HKDSE BAFS 試卷，供限時練習。', icon: FileText },
  { title: '答案與評分參考', description: '配套答案、評分重點及常見失分位置。', icon: FileCheck2 },
  { title: '詳細解析', description: '按題目拆解概念、計算步驟及作答策略。', icon: Search },
]

export default function PastPapersPage() {
  return (
    <div className="space-y-7">
      <header className="border-b border-slate-200 pb-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
          <Clock3 className="h-4 w-4" />
          資料待上傳
        </div>
        <h1 className="text-3xl font-bold text-slate-950">HKDSE 會計真題</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          真題專區框架已建立。目前資料夾內未有可發布的 HKDSE 會計試卷，收到試卷後會按純試卷、答案與詳細解析分開上線。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {plannedResources.map((resource) => (
          <article key={resource.title} className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-600">
              <resource.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 font-bold text-slate-950">{resource.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{resource.description}</p>
            <p className="mt-4 border-t border-slate-100 pt-4 text-xs font-semibold text-amber-700">待首批資料上傳</p>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center">
        <FileText className="mx-auto h-8 w-8 text-slate-400" />
        <h2 className="mt-4 font-bold text-slate-800">暫未有可下載試卷</h2>
        <p className="mt-2 text-sm text-slate-500">上傳真題後，此處會自動按年份顯示。</p>
      </section>
    </div>
  )
}
