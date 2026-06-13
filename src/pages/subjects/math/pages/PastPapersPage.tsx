import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, BookCheck, FileText, Lightbulb } from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { PAST_PAPER_YEARS } from '../constants/curriculum';

export default function PastPapersPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get('view') === 'solutions' ? 'solutions' : 'papers';
  const isSolutions = view === 'solutions';

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
          分为纯试卷练习与试卷详细解析。当前已上线资源目录，原卷与逐题解析将按年份陆续上传。
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
            首批年份试卷与逐题解析正在整理中。完成审核后，将在对应年份开放纯试卷及详细解析。
          </p>
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PAST_PAPER_YEARS.map((year) => (
          <Card key={year} className="p-5">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-sm text-gray-500">HKDSE Mathematics</p>
                <h2 className="text-2xl font-bold text-gray-950">{year}</h2>
              </div>
              {isSolutions ? (
                <BookCheck className="w-7 h-7 text-indigo-600" />
              ) : (
                <FileText className="w-7 h-7 text-blue-600" />
              )}
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-5">
              <p>卷一：传统题</p>
              <p>卷二：多项选择题</p>
              {isSolutions && <p>解析：步骤、考点与失分提示</p>}
            </div>
            <Button fullWidth variant="secondary" disabled>
              {isSolutions ? '详细解析待上传' : '纯试卷待上传'}
            </Button>
          </Card>
        ))}
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
