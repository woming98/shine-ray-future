import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, BookCheck, ExternalLink, FileText, Lightbulb } from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import {
  AVAILABLE_PAST_PAPERS,
  HKEAA_PAST_PAPER_SOURCE_URL,
  PAST_PAPER_YEARS,
  type PastPaper,
} from '../constants/curriculum';

const formatYearRanges = (years: number[]) => {
  if (years.length === 0) {
    return '暂无';
  }

  const ranges: string[] = [];
  const sortedYears = [...new Set(years)].sort((a, b) => a - b);
  let start = sortedYears[0];
  let end = sortedYears[0];

  sortedYears.slice(1).forEach((year) => {
    if (year === end + 1) {
      end = year;
      return;
    }
    ranges.push(start === end ? `${start}` : `${start} 至 ${end}`);
    start = year;
    end = year;
  });
  ranges.push(start === end ? `${start}` : `${start} 至 ${end}`);

  return ranges.join('、');
};

const paperOrder = (paper: PastPaper) => (paper.paper === 'Paper 1' ? 1 : paper.paper === 'Paper 2' ? 2 : 99);

const paperLabel = (paper: PastPaper) => (paper.paper === 'Paper 1' ? '卷一配套练习' : '卷二答题卡');

const solutionLabel = (paper: PastPaper) => {
  if (paper.solutionAvailable && paper.solutionStatus === 'available') {
    return '解析：步骤、考点与关键判断 · 已上线';
  }
  if (paper.solutionAvailable && paper.solutionStatus === 'draft') {
    return '解析：答案与逐题说明 · 初稿待核对';
  }
  if (paper.solutionStatus === 'reviewing') {
    return '解析：答案总表与逐题解析 · 核对中';
  }
  return '解析：详细解析待上传';
};

const solutionClassName = (paper?: PastPaper) => {
  if (!paper) {
    return '';
  }
  if (paper.solutionAvailable && paper.solutionStatus === 'draft') {
    return 'font-semibold text-indigo-700';
  }
  if (paper.solutionAvailable && paper.solutionStatus === 'available') {
    return 'font-semibold text-emerald-700';
  }
  if (paper.solutionStatus === 'reviewing') {
    return 'font-semibold text-amber-700';
  }
  return '';
};

export default function PastPapersPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get('view') === 'solutions' ? 'solutions' : 'papers';
  const isSolutions = view === 'solutions';
  const availablePapersByYear = AVAILABLE_PAST_PAPERS.reduce((map, paper) => {
    const papers = map.get(paper.year) ?? [];
    map.set(paper.year, [...papers, paper].sort((a, b) => paperOrder(a) - paperOrder(b)));
    return map;
  }, new Map<number, PastPaper[]>());
  const uploadedPaperYears = AVAILABLE_PAST_PAPERS.map((paper) => paper.year);
  const uploadedPaper1Years = AVAILABLE_PAST_PAPERS.filter((paper) => paper.paper === 'Paper 1').map(
    (paper) => paper.year,
  );
  const uploadedPaper2Years = AVAILABLE_PAST_PAPERS.filter((paper) => paper.paper === 'Paper 2').map(
    (paper) => paper.year,
  );
  const availableSolutionYears = AVAILABLE_PAST_PAPERS.filter(
    (paper) => paper.solutionAvailable && paper.solutionStatus === 'available',
  ).map((paper) => paper.year);

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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mb-3">HKDSE 数学试卷配套</h1>
        <p className="text-gray-600 text-lg">
          配套练习：{formatYearRanges(uploadedPaperYears)}；Paper 1：{formatYearRanges(uploadedPaper1Years)}；Paper
          2：{formatYearRanges(uploadedPaper2Years)}；原创解析：
          {formatYearRanges(availableSolutionYears)}。
        </p>
      </section>

      <div className="inline-flex p-1 bg-blue-100 rounded-xl">
        <button
          onClick={() => setSearchParams({ view: 'papers' })}
          className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
            !isSolutions ? 'bg-white text-blue-800 shadow-sm' : 'text-blue-700'
          }`}
        >
          试卷配套
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
          <div className="text-amber-900 text-sm leading-relaxed">
            <p>本站不公开原卷；请配合 HKEAA 官方试题专辑或学校授权材料使用，本站提供答题卡、计时器与原创解析。</p>
            <a
              href={HKEAA_PAST_PAPER_SOURCE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 font-semibold text-amber-900 underline decoration-amber-400 underline-offset-4"
            >
              前往 HKEAA 官方试题来源
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PAST_PAPER_YEARS.map((year) => {
          const availablePapers = availablePapersByYear.get(year) ?? [];
          const paper1 = availablePapers.find((paper) => paper.paper === 'Paper 1');
          const paper2 = availablePapers.find((paper) => paper.paper === 'Paper 2');
          const solutionPapers = availablePapers.filter((paper) => paper.solutionAvailable);
          const primarySolution =
            solutionPapers.find((paper) => paper.solutionStatus === 'available') ??
            solutionPapers.find((paper) => paper.solutionStatus === 'draft') ??
            availablePapers.find((paper) => paper.solutionStatus === 'reviewing');

          return (
            <Card key={year} className="p-5">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-sm text-gray-500">HKDSE Mathematics</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-gray-950">{year}</h2>
                    {availablePapers.length > 0 && !isSolutions && (
                      <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-semibold">
                        配套
                      </span>
                    )}
                    {primarySolution?.solutionStatus === 'available' && isSolutions && (
                      <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-semibold">
                        已上线
                      </span>
                    )}
                    {primarySolution?.solutionStatus === 'draft' && isSolutions && (
                      <span className="px-2 py-1 rounded bg-indigo-100 text-indigo-700 text-xs font-semibold">
                        初稿
                      </span>
                    )}
                    {primarySolution?.solutionStatus === 'reviewing' && isSolutions && (
                      <span className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-xs font-semibold">
                        核对中
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
                <p className={paper1 && !isSolutions ? 'font-semibold text-emerald-700' : ''}>
                  卷一：传统题{paper1 && !isSolutions ? ' · 配套练习' : ''}
                </p>
                <p className={paper2 && !isSolutions ? 'font-semibold text-emerald-700' : ''}>
                  卷二：多项选择题{paper2 && !isSolutions ? ' · 答题卡' : ''}
                </p>
                {isSolutions && (
                  <div className="space-y-1">
                    {(['Paper 1', 'Paper 2'] as const).map((paperName) => {
                      const paper = availablePapers.find((item) => item.paper === paperName);
                      return (
                        <p key={paperName} className={solutionClassName(paper)}>
                          {paperName === 'Paper 1' ? '卷一' : '卷二'}：{paper ? solutionLabel(paper) : '解析：详细解析待上传'}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
              {isSolutions && solutionPapers.length > 0 ? (
                <div className="space-y-2">
                  {solutionPapers.map((paper) => (
                    <Button
                      key={paper.id}
                      fullWidth
                      onClick={() => navigate(`/subjects/math/past-papers/${paper.id}/solutions`)}
                    >
                      {paper.paper === 'Paper 1' ? '查看卷一解析' : '查看卷二解析'}
                      {paper.solutionStatus === 'draft' ? '初稿' : ''}
                    </Button>
                  ))}
                </div>
              ) : !isSolutions && availablePapers.length > 0 ? (
                <div className="space-y-2">
                  {availablePapers.map((paper) => (
                    <Button key={paper.id} fullWidth onClick={() => navigate(`/subjects/math/past-papers/${paper.id}`)}>
                      打开{paperLabel(paper)}
                    </Button>
                  ))}
                </div>
              ) : (
                <Button fullWidth variant="secondary" disabled>
                  {isSolutions && primarySolution?.solutionStatus === 'reviewing'
                    ? '解析核对中'
                    : isSolutions
                      ? '详细解析待上传'
                      : '配套练习待整理'}
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
