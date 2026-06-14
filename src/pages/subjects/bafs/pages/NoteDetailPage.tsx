import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, CheckCircle2, Download, HelpCircle, Languages, Lightbulb, ListChecks, Printer } from 'lucide-react'
import { BAFSStrandId } from '../constants/curriculum'
import { C1_DETAILED_CHAPTERS } from '../constants/c1Notes'
import { C21_DETAILED_CHAPTERS } from '../constants/c21Notes'
import { C2_DETAILED_CHAPTERS } from '../constants/c2Notes'
import { C3_DETAILED_CHAPTERS } from '../constants/c3Notes'
import { B1_DETAILED_CHAPTERS } from '../constants/b1Notes'
import { B2_DETAILED_CHAPTERS } from '../constants/b2Notes'
import { B3_DETAILED_CHAPTERS } from '../constants/b3Notes'
import { B4_DETAILED_CHAPTERS } from '../constants/b4Notes'
import { B5_DETAILED_CHAPTERS } from '../constants/b5Notes'
import { B6_DETAILED_CHAPTERS } from '../constants/b6Notes'
import { B7_DETAILED_CHAPTERS } from '../constants/b7Notes'
import { B8_DETAILED_CHAPTERS } from '../constants/b8Notes'
import { B9_DETAILED_CHAPTERS } from '../constants/b9Notes'
import { A1_DETAILED_CHAPTERS } from '../constants/a1Notes'
import { A2_DETAILED_CHAPTERS } from '../constants/a2Notes'
import { A3_DETAILED_CHAPTERS } from '../constants/a3Notes'
import { A4_DETAILED_CHAPTERS } from '../constants/a4Notes'
import { A5_DETAILED_CHAPTERS } from '../constants/a5Notes'
import { A6_DETAILED_CHAPTERS } from '../constants/a6Notes'
import { A7_DETAILED_CHAPTERS } from '../constants/a7Notes'
import { A8_DETAILED_CHAPTERS } from '../constants/a8Notes'
import { A9_DETAILED_CHAPTERS } from '../constants/a9Notes'
import { A10_DETAILED_CHAPTERS } from '../constants/a10Notes'
import { A11_DETAILED_CHAPTERS } from '../constants/a11Notes'
import { A12_DETAILED_CHAPTERS } from '../constants/a12Notes'
import { getNotePart } from '../constants/notes'

export default function NoteDetailPage() {
  const { strandId, partId } = useParams<{ strandId: BAFSStrandId; partId: string }>()
  const part = strandId && partId ? getNotePart(strandId, partId) : undefined
  const detailedChapters = part?.code === 'C1'
    ? C1_DETAILED_CHAPTERS
    : part?.code === 'C2.1'
      ? C21_DETAILED_CHAPTERS
    : part?.code === 'C2'
      ? C2_DETAILED_CHAPTERS
      : part?.code === 'C3'
        ? C3_DETAILED_CHAPTERS
        : part?.code === 'B1'
          ? B1_DETAILED_CHAPTERS
          : part?.code === 'B2'
            ? B2_DETAILED_CHAPTERS
            : part?.code === 'B3'
              ? B3_DETAILED_CHAPTERS
              : part?.code === 'B4'
                ? B4_DETAILED_CHAPTERS
                : part?.code === 'B5'
                  ? B5_DETAILED_CHAPTERS
                  : part?.code === 'B6'
                    ? B6_DETAILED_CHAPTERS
                    : part?.code === 'B7'
                      ? B7_DETAILED_CHAPTERS
                      : part?.code === 'B8'
                        ? B8_DETAILED_CHAPTERS
                        : part?.code === 'B9'
                          ? B9_DETAILED_CHAPTERS
                          : part?.code === 'A1'
                            ? A1_DETAILED_CHAPTERS
                            : part?.code === 'A2'
                              ? A2_DETAILED_CHAPTERS
                              : part?.code === 'A3'
                                ? A3_DETAILED_CHAPTERS
                                : part?.code === 'A4'
                                  ? A4_DETAILED_CHAPTERS
                                  : part?.code === 'A5'
                                    ? A5_DETAILED_CHAPTERS
                                    : part?.code === 'A6'
                                      ? A6_DETAILED_CHAPTERS
                                      : part?.code === 'A7'
                                        ? A7_DETAILED_CHAPTERS
                                        : part?.code === 'A8'
                                          ? A8_DETAILED_CHAPTERS
                                          : part?.code === 'A9'
                                            ? A9_DETAILED_CHAPTERS
                                            : part?.code === 'A10'
                                              ? A10_DETAILED_CHAPTERS
                                              : part?.code === 'A11'
                                                ? A11_DETAILED_CHAPTERS
                                                : part?.code === 'A12'
                                                  ? A12_DETAILED_CHAPTERS
                                                  : []
  const hasDetailedNotes = detailedChapters.length > 0
  const hasDownloadablePdf = ['C1', 'C2.1', 'C2', 'C3', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12'].includes(part?.code ?? '')

  if (!part) {
    return <Navigate to="/subjects/bafs/notes" replace />
  }

  return (
    <div className="bafs-note-print-root space-y-7">
      <header className="border-b border-slate-200 pb-6">
        <Link to="/subjects/bafs/notes" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 print:hidden">
          <ArrowLeft className="h-4 w-4" />
          返回章節筆記
        </Link>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded bg-emerald-950 px-2.5 py-1 text-xs font-bold text-amber-400">{part.code}</span>
          <span className="rounded bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">{hasDetailedNotes ? '完整雙語筆記' : '第一版筆記'}</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">{part.title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{part.description}</p>
        <p className="mt-2 text-xs font-medium text-slate-400">來源：{part.sourceBook}</p>
        {hasDetailedNotes && (
          <div className="mt-5 flex flex-wrap gap-2 print:hidden">
            {hasDownloadablePdf && (
              <a
                href={`/bafs/notes/${part.code.toLowerCase()}-bilingual-notes.pdf`}
                download
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-emerald-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-900"
              >
                <Download className="h-4 w-4" />
                下載雙語筆記 PDF
              </a>
            )}
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50"
            >
              <Printer className="h-4 w-4" />
              打印 / 存為 PDF
            </button>
          </div>
        )}
      </header>

      {hasDetailedNotes && (
        <>
          <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-center gap-2 text-emerald-950">
              <Languages className="h-5 w-5 text-emerald-700" />
              <h2 className="font-bold">中英雙語學習方式 / Bilingual Study Guide</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-emerald-950">
              先用中文掌握概念和因果關係，再熟悉英文術語與英文解釋。作答時應把概念連結到題目情境，而不是只背誦定義。
            </p>
            <p className="mt-2 text-sm leading-7 text-emerald-800">
              Understand each concept and its cause-and-effect relationship in Chinese first, then learn the English terms and explanations. Apply concepts to the case instead of memorising definitions only.
            </p>
          </section>

          <section className="space-y-8">
            {detailedChapters.map((chapter) => (
              <article key={chapter.id} className="bafs-note-print-chapter overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-emerald-900/10 bg-emerald-950 px-5 py-5 text-white sm:px-6">
                  <p className="text-xs font-bold uppercase text-amber-400">Chapter {chapter.number}</p>
                  <h2 className="mt-2 text-xl font-bold">{chapter.title}</h2>
                  <p className="mt-1 text-sm text-emerald-100">{chapter.titleEn}</p>
                  <div className="mt-4 grid gap-2 border-t border-white/15 pt-4 text-sm leading-6 md:grid-cols-2">
                    <p>{chapter.objective.zh}</p>
                    <p className="text-emerald-100">{chapter.objective.en}</p>
                  </div>
                </div>

                <div className="space-y-7 p-5 sm:p-6">
                  {chapter.sections.map((section) => (
                    <section key={section.titleEn}>
                      <h3 className="text-base font-bold text-slate-950">{section.title}</h3>
                      <p className="mt-1 text-xs font-semibold text-emerald-700">{section.titleEn}</p>
                      <div className="mt-3 divide-y divide-slate-100 rounded-md border border-slate-200">
                        {section.points.map((point) => (
                          <div key={point.en} className="grid gap-2 p-4 text-sm leading-6 md:grid-cols-2 md:gap-6">
                            <p className="text-slate-800">{point.zh}</p>
                            <p className="text-slate-500">{point.en}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}

                  <section>
                    <h3 className="text-base font-bold text-slate-950">關鍵詞彙 / Key Terms</h3>
                    <div className="mt-3 grid gap-3 lg:grid-cols-2">
                      {chapter.terms.map((term) => (
                        <div key={term.termEn} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                          <div className="flex flex-wrap items-baseline gap-2">
                            <h4 className="font-bold text-slate-900">{term.term}</h4>
                            <span className="text-xs font-semibold text-emerald-700">{term.termEn}</span>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-slate-700">{term.definition}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-500">{term.definitionEn}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-md border border-amber-200 bg-amber-50 p-4">
                    <div className="flex items-center gap-2 text-amber-950">
                      <Lightbulb className="h-5 w-5 text-amber-700" />
                      <h3 className="font-bold">DSE 作答提示 / Exam Tips</h3>
                    </div>
                    <div className="mt-3 space-y-3">
                      {chapter.examTips.map((tip) => (
                        <div key={tip.en} className="grid gap-1 text-sm leading-6 md:grid-cols-2 md:gap-6">
                          <p className="text-amber-950">{tip.zh}</p>
                          <p className="text-amber-800">{tip.en}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 text-slate-950">
                      <HelpCircle className="h-5 w-5 text-emerald-700" />
                      <h3 className="font-bold">快速自測 / Quick Check</h3>
                    </div>
                    <div className="mt-3 space-y-3">
                      {chapter.questions.map((question, index) => (
                        <details key={question.questionEn} className="rounded-md border border-slate-200 bg-white p-4">
                          <summary className="cursor-pointer list-none font-semibold text-slate-900">
                            <span className="mr-2 text-emerald-700">Q{index + 1}</span>
                            {question.question}
                            <span className="mt-1 block text-xs font-medium text-slate-500">{question.questionEn}</span>
                          </summary>
                          <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4 text-sm leading-6 md:grid-cols-2 md:gap-6">
                            <p className="text-slate-800">{question.answer}</p>
                            <p className="text-slate-500">{question.answerEn}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                </div>
              </article>
            ))}
          </section>
        </>
      )}

      {!hasDetailedNotes && (
        <>
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
        </>
      )}
    </div>
  )
}
