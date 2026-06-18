import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, BookCheck, ChevronDown, FileText, Lightbulb, ListChecks } from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { getPastPaper } from '../constants/curriculum';
import { PAST_PAPER_SOLUTIONS } from '../data/pastPaperSolutions';

type SectionFilter = 'all' | 'a' | 'b';

export default function PastPaperSolutionsPage() {
  const navigate = useNavigate();
  const { paperId } = useParams();
  const paper = getPastPaper(paperId);
  const paperSolutions = paperId ? PAST_PAPER_SOLUTIONS[paperId] ?? [] : [];
  const [section, setSection] = useState<SectionFilter>('all');

  const solutions = useMemo(() => {
    if (section === 'a') {
      return paperSolutions.filter((solution) => solution.number <= 30);
    }
    if (section === 'b') {
      return paperSolutions.filter((solution) => solution.number >= 31);
    }
    return paperSolutions;
  }, [paperSolutions, section]);

  const scrollToQuestion = (number: number) => {
    if (number <= 30 && section === 'b') {
      setSection('all');
    }
    if (number >= 31 && section === 'a') {
      setSection('all');
    }
    window.setTimeout(() => {
      document.getElementById(`solution-${number}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  if (!paper || !paper.solutionAvailable) {
    const isReviewing = paper?.solutionStatus === 'reviewing';

    return (
      <div className="max-w-3xl mx-auto py-12">
        <Card className="p-8 text-center" hover={false}>
          <BookCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-950 mb-2">
            {isReviewing ? '该试卷解析正在核对' : '该试卷解析尚未上线'}
          </h1>
          <p className="text-gray-600 mb-6">
            {paper?.solutionNote ?? '请返回解析目录查看已上线的逐题解析。'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            {paper && (
              <Button variant="secondary" onClick={() => navigate(`/subjects/math/past-papers/${paper.id}`)}>
                返回在线试卷
              </Button>
            )}
            <Button onClick={() => navigate('/subjects/math/past-papers?view=solutions')}>返回解析目录</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <button
        onClick={() => navigate('/subjects/math/past-papers?view=solutions')}
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
      >
        <ArrowLeft className="w-4 h-4" />
        返回解析目录
      </button>

      <section className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-semibold">
              逐题解析已上线
            </span>
            <span className="text-sm text-gray-500">共 45 题</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mb-2">{paper.year} Paper 2 详细解析</h1>
          <p className="text-gray-600">莘睿参考答案，包含关键步骤、考点与判断依据。</p>
        </div>
        <Button
          variant="secondary"
          onClick={() => navigate(`/subjects/math/past-papers/${paper.id}`)}
          icon={<FileText className="w-4 h-4" />}
        >
          返回在线试卷
        </Button>
      </section>

      <Card className="p-5 bg-amber-50 border-amber-200" hover={false}>
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 leading-relaxed">
            建议先完成整份试卷，再查看答案。几何题可同时打开在线试卷，对照原图理解角度与面积关系。
          </p>
        </div>
      </Card>

      <section className="bg-white border border-blue-200/70 rounded-lg p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <ListChecks className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-gray-950">答案总表</h2>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-9 md:grid-cols-12 lg:grid-cols-15 gap-2">
          {paperSolutions.map((solution) => (
            <button
              key={solution.number}
              onClick={() => scrollToQuestion(solution.number)}
              title={`查看第 ${solution.number} 题解析`}
              className="aspect-square min-w-0 rounded border border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-colors flex flex-col items-center justify-center"
            >
              <span className="text-[11px] text-gray-500 leading-none">{solution.number}</span>
              <span className="font-bold text-blue-800 leading-tight">{solution.answer}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="inline-flex p-1 bg-blue-100 rounded-lg">
        {([
          ['all', '全部题目'],
          ['a', 'Section A · 1-30'],
          ['b', 'Section B · 31-45'],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            onClick={() => setSection(value)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              section === value ? 'bg-white text-blue-800 shadow-sm' : 'text-blue-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="space-y-3">
        {solutions.map((solution) => (
          <details
            key={solution.number}
            id={`solution-${solution.number}`}
            className="group scroll-mt-40 bg-white border border-blue-200/70 rounded-lg shadow-sm overflow-hidden"
          >
            <summary className="list-none cursor-pointer px-4 sm:px-5 py-4 flex items-center gap-4 hover:bg-blue-50 transition-colors">
              <span className="w-10 h-10 flex-shrink-0 rounded bg-blue-700 text-white font-bold flex items-center justify-center">
                {solution.number}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-bold text-gray-950">答案 {solution.answer}</h2>
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-xs font-medium">
                    {solution.topic}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-1">{solution.keyPoint}</p>
              </div>
              <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <div className="border-t border-blue-100 px-4 sm:px-5 py-5">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase text-blue-600 mb-1">关键思路</p>
                <p className="text-gray-800">{solution.keyPoint}</p>
              </div>
              <ol className="space-y-3">
                {solution.steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded bg-blue-100 text-blue-700 text-xs font-bold flex-shrink-0 flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}
