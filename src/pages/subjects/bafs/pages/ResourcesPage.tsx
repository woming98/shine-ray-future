import { BookOpen, CheckCircle2, Download, FileText, Files, Library, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import { BAFS_SOURCE_SUMMARY, BAFS_STRANDS } from '../constants/curriculum'

const materialGroups = [
  {
    title: 'Paper 1 共同必修教材',
    description: 'C1 至 C3 屬 BAFS 共同基礎，Accounting 與 Business Management 兩條學習線都會用到。',
    items: [
      { code: 'C1', title: '香港商業環境', titleEn: "Hong Kong's Business Environment", source: "Frank Wood's Accounting 1", size: '234MB', noteCode: 'C1' },
      { code: 'C2', title: '企業管理基礎', titleEn: 'Business Management Foundation', source: "Frank Wood's Accounting 1", size: '204MB', noteCode: 'C2' },
      { code: 'C3', title: '個人理財', titleEn: 'Personal Financial Management', source: "Frank Wood's Accounting 1", size: '220MB', noteCode: 'C3' },
      { code: 'C1', title: '香港商業環境', titleEn: "Hong Kong's Business Environment", source: 'Business Management 1', size: '237MB', noteCode: 'C1' },
      { code: 'C2.1', title: '基礎會計概念', titleEn: 'Basic Accounting Concepts', source: 'Business Management 1', size: '153MB', noteCode: 'C2.1' },
      { code: 'C2.2', title: '財務報表與會計原則', titleEn: 'Financial Statements and Accounting Principles', source: 'Business Management 1', size: '183MB', noteCode: 'C2.2' },
      { code: 'C3', title: '個人理財', titleEn: 'Personal Financial Management', source: 'Business Management 1', size: '283MB', noteCode: 'C3' },
    ],
  },
  {
    title: 'Paper 2A Accounting 教材',
    description: '會計選修線教材，配合 A1 至 A12 雙語筆記使用。',
    items: [
      { code: 'A1', title: '會計基礎', titleEn: 'Accounting Foundation', source: "Frank Wood's Accounting 2", size: '148MB', noteCode: 'A1' },
      { code: 'A2', title: '原始分錄簿與分類帳', titleEn: 'Books of Original Entry and Ledgers', source: "Frank Wood's Accounting 2", size: '175MB', noteCode: 'A2' },
      { code: 'A3', title: '試算表與獨資企業財務報表', titleEn: 'Trial Balance and Sole Proprietorship Statements', source: "Frank Wood's Accounting 2", size: '182MB', noteCode: 'A3' },
      { code: 'A4', title: '期末調整', titleEn: 'Period-end Adjustments', source: "Frank Wood's Accounting 2", size: '74MB', noteCode: 'A4' },
      { code: 'A5', title: '非流動資產與存貨估值', titleEn: 'Non-current Assets and Inventory Valuation', source: "Frank Wood's Accounting 2", size: '172MB', noteCode: 'A5' },
      { code: 'A6', title: '合夥企業會計', titleEn: 'Partnership Accounting', source: "Frank Wood's Accounting 3", size: '203MB', noteCode: 'A6' },
      { code: 'A7', title: '有限公司會計', titleEn: 'Limited Company Accounting', source: "Frank Wood's Accounting 3", size: '123MB', noteCode: 'A7' },
      { code: 'A8', title: '銀行調節與錯誤更正', titleEn: 'Bank Reconciliation and Correction of Errors', source: "Frank Wood's Accounting 3", size: '254MB', noteCode: 'A8' },
      { code: 'A9', title: '財務分析', titleEn: 'Financial Analysis', source: "Frank Wood's Accounting 4", size: '114MB', noteCode: 'A9' },
      { code: 'A10', title: '不完整記錄與會計原則', titleEn: 'Incomplete Records and Accounting Principles', source: "Frank Wood's Accounting 4", size: '182MB', noteCode: 'A10' },
      { code: 'A11', title: '成本分類與成本計算', titleEn: 'Cost Classification and Costing', source: "Frank Wood's Accounting 4", size: '163MB', noteCode: 'A11' },
      { code: 'A12', title: '成本決策', titleEn: 'Costing for Decision-making', source: "Frank Wood's Accounting 4", size: '188MB', noteCode: 'A12' },
    ],
  },
  {
    title: 'Paper 2B Business Management 教材',
    description: '商業管理選修線教材，配合 B1 至 B9 雙語筆記使用。',
    items: [
      { code: 'B1', title: '管理與企業功能', titleEn: 'Management and Business Functions', source: 'Business Management 2', size: '99MB', noteCode: 'B1' },
      { code: 'B2', title: '人力規劃與招聘', titleEn: 'Manpower Planning and Staffing', source: 'Business Management 2', size: '121MB', noteCode: 'B2' },
      { code: 'B3', title: '員工獎勵與發展', titleEn: 'Reward and Workforce Development', source: 'Business Management 2', size: '198MB', noteCode: 'B3' },
      { code: 'B4', title: '市場營銷與研究', titleEn: 'Marketing and Marketing Research', source: 'Business Management 3', size: '146MB', noteCode: 'B4' },
      { code: 'B5', title: '消費者與市場定位', titleEn: 'Consumer Behaviour and Positioning', source: 'Business Management 3', size: '178MB', noteCode: 'B5' },
      { code: 'B6', title: '市場策略與顧客關係', titleEn: 'Marketing Strategies and CRM', source: 'Business Management 3', size: '233MB', noteCode: 'B6' },
      { code: 'B7', title: '財務分析與預算', titleEn: 'Financial Analysis and Budgeting', source: 'Business Management 4', size: '150MB', noteCode: 'B7' },
      { code: 'B8', title: '融資與投資評估', titleEn: 'Financing and Investment Appraisal', source: 'Business Management 4', size: '158MB', noteCode: 'B8' },
      { code: 'B9', title: '營運資金與風險管理', titleEn: 'Working Capital and Risk Management', source: 'Business Management 4', size: '166MB', noteCode: 'B9' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="space-y-7">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-950">課程資源目錄</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          現有教材、教學大綱及雙語筆記已完成盤點。公開頁面提供雙語筆記 PDF 下載；原始大型教材 PDF
          屬內部教學資料，不直接公開下載，可聯絡老師獲取。
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-4">
        {[
          { icon: BookOpen, value: BAFS_SOURCE_SUMMARY.sourceBooks, label: '冊教材系列' },
          { icon: Files, value: BAFS_SOURCE_SUMMARY.lessonPlans, label: '章節教學框架' },
          { icon: Library, value: BAFS_SOURCE_SUMMARY.textbookFiles, label: '份原始教材 PDF' },
          { icon: Download, value: 26, label: '份雙語筆記 PDF' },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5">
            <item.icon className="h-5 w-5 text-emerald-700" />
            <p className="mt-4 text-2xl font-bold text-slate-950">{item.value}</p>
            <p className="mt-1 text-sm text-slate-500">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
          <ShieldCheck className="h-5 w-5 text-emerald-700" />
          <h2 className="mt-3 font-bold text-emerald-950">公開提供</h2>
          <p className="mt-2 text-sm leading-6 text-emerald-900">
            每個章節已整理成莘睿版本雙語筆記，可直接下載 PDF。
          </p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
          <LockKeyhole className="h-5 w-5 text-amber-700" />
          <h2 className="mt-3 font-bold text-amber-950">原始教材</h2>
          <p className="mt-2 text-sm leading-6 text-amber-900">
            原始教材合計約 4.8GB，單檔多為 100MB 以上，不放入公開下載目錄。
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <Mail className="h-5 w-5 text-slate-600" />
          <h2 className="mt-3 font-bold text-slate-950">內部獲取</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            需要原始教材的學生，請透過課程顧問或任課老師確認後獲取。
          </p>
        </div>
      </section>

      <section className="space-y-5">
        {materialGroups.map((group) => (
          <div key={group.title} className="rounded-lg border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="font-bold text-slate-950">{group.title}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">{group.description}</p>
            </div>
            <div className="divide-y divide-slate-100">
              {group.items.map((item) => (
                <div key={`${item.source}-${item.code}`} className="grid gap-4 px-5 py-4 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-emerald-950 text-xs font-bold text-amber-400">
                      {item.code}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">{item.size}</span>
                      </div>
                      <p className="mt-1 text-xs font-medium text-slate-400">{item.titleEn}</p>
                      <p className="mt-2 text-xs text-slate-500">來源：{item.source}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`/bafs/notes/${item.noteCode.toLowerCase()}-bilingual-notes.pdf`}
                      download
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-emerald-800 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-900"
                    >
                      <Download className="h-4 w-4" />
                      下載雙語筆記
                    </a>
                    <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">
                      <LockKeyhole className="h-4 w-4" />
                      原始教材內部獲取
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950">課程線整理狀態</h2>
          <p className="mt-1 text-sm text-slate-500">保留原有 Accounting / Business Management 課程線，方便學生按學習方向進入章節筆記。</p>
        </div>
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
                    <span className="inline-flex items-center gap-1.5 text-emerald-700">
                      <FileText className="h-4 w-4" />
                      雙語筆記已上線
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
