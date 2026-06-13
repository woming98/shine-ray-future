import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, BookCheck, Download, FileText, Lightbulb } from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { AVAILABLE_PAST_PAPERS, PAST_PAPER_YEARS } from '../constants/curriculum';

export default function PastPapersPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get('view') === 'solutions' ? 'solutions' : 'papers';
  const isSolutions = view === 'solutions';
  const availablePaperByYear = new Map(AVAILABLE_PAST_PAPERS.map((paper) => [paper.year, paper]));

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <button
        onClick={() => navigate('/subjects/math')}
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
      >
        <ArrowLeft className="w-4 h-4" />
        返回数学首页
      </button>

      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mb-3">HKDSE 数学真题</h1>
        <p className="text-gray-600 text-lg">
          分为纯试卷练习与试卷详细解析。2022、2023 Paper 2 试卷及逐题解析已上线。
        </p>
      </section>

      <div className="inline-flex p-1 bg-blue-100 rounded-xl">
        <button
          onClick={() => setSearchParams({ view: 'papers' })}
          className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
            !isSolutions ? 'bg-white text-blue-800 shadow-sm' : 'text-blue-700'
          }`}
        >
          纯试卷
        </button>
        <button
          onClick={() => setSearchParams({ view: 'solutions' })}
          className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
            isSolutions ? 'bg-white text-blue-800 shadow-sm' : 'text-blue-700'
          }`}
        >
          试卷详细解析
        </button>
      </div>

      <Card className="p-5 bg-amber-50 border-amber-200" hover={false}>
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <p className="text-amber-900 text-sm leading-relaxed">
            已上线试卷可在线预览、下载或开启计时练习；解析页提供答案总表、计算步骤与考点说明。
          </p>
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PAST_PAPER_YEARS.map((year) => {
          const availablePaper = availablePaperByYear.get(year);

          return (
            <Card key={year} className="p-5">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-sm text-gray-500">HKDSE Mathematics</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-gray-950">{year}</h2>
                    {availablePaper && (!isSolutions || availablePaper.solutionAvailable) && (
                      <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-semibold">
                        已上线
                      </span>
                    )}
                  </div>
                </div>
                {isSolutions ? (
                  <BookCheck className="w-7 h-7 text-indigo-600" />
                ) : (
                  <FileText className="w-7 h-7 text-blue-600" />
                )}
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-5">
                <p>卷一：传统题</p>
                <p className={availablePaper && !isSolutions ? 'font-semibold text-emerald-700' : ''}>
                  卷二：多项选择题{availablePaper && !isSolutions ? ' · 已上线' : ''}
                </p>
                {isSolutions && (
                  <p className={availablePaper?.solutionAvailable ? 'font-semibold text-emerald-700' : ''}>
                    解析：步骤、考点与关键判断
                    {availablePaper?.solutionAvailable ? ' · 已上线' : ''}
                  </p>
                )}
              </div>
              {isSolutions && availablePaper?.solutionAvailable ? (
                <Button
                  fullWidth
                  onClick={() => navigate(`/subjects/math/past-papers/${availablePaper.id}/solutions`)}
                >
                  查看逐题解析
                </Button>
              ) : !isSolutions && availablePaper ? (
                <div className="grid grid-cols-[1fr_auto] gap-2">
                  <Button fullWidth onClick={() => navigate(`/subjects/math/past-papers/${availablePaper.id}`)}>
                    查看试卷
                  </Button>
                  <a
                    href={availablePaper.pdfUrl}
                    download
                    aria-label={`下载 ${availablePaper.title}`}
                    title="下载试卷"
                    className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              ) : (
                <Button fullWidth variant="secondary" disabled>
                  {isSolutions ? '详细解析待上传' : '纯试卷待上传'}
                </Button>
              )}
            </Card>
          );
        })}
      </div>

      <section className="grid md:grid-cols-2 gap-5">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-950 mb-2">卷二 MC 提速练习</h2>
          <p className="text-gray-600 mb-5">使用现有选择题、计时器、快解技巧与详细解释进行训练。</p>
          <Button onClick={() => navigate('/subjects/math/mc')}>进入 MC 练习</Button>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-950 mb-2">解释题与答题规范</h2>
          <p className="text-gray-600 mb-5">训练步骤表达、数学语言和常见失分点。</p>
          <Button variant="secondary" onClick={() => navigate('/subjects/math/templates')}>查看解析工具</Button>
        </Card>
      </section>
    </div>
  );
}
