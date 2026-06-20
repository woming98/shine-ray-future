import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Download,
  Eraser,
  ExternalLink,
  FileQuestion,
  Flag,
  ListChecks,
  Maximize2,
  Pause,
  Play,
  RotateCcw,
  Send,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { getPastPaper } from '../constants/curriculum';
import { PAST_PAPER_SOLUTIONS, type PastPaperSolution } from '../data/pastPaperSolutions';

type AnswerChoice = PastPaperSolution['answer'];

const ANSWER_CHOICES: AnswerChoice[] = ['A', 'B', 'C', 'D'];
const MIN_ZOOM = 80;
const MAX_ZOOM = 140;
const ZOOM_STEP = 10;

export default function PastPaperDetailPage() {
  const navigate = useNavigate();
  const { paperId } = useParams();
  const paper = getPastPaper(paperId);
  const initialSeconds = (paper?.durationMinutes ?? 75) * 60;
  const paperSolutions = useMemo(() => (paperId ? PAST_PAPER_SOLUTIONS[paperId] ?? [] : []), [paperId]);
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [answers, setAnswers] = useState<Record<number, AnswerChoice>>({});
  const [submitted, setSubmitted] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const pageRefs = useRef<Array<HTMLElement | null>>([]);
  const hasSolution = paper?.solutionAvailable ?? false;
  const solutionDraft = paper?.solutionStatus === 'draft';
  const solutionPending = paper?.solutionStatus === 'reviewing';
  const imagePages = paper?.imagePages ?? [];
  const hasInteractiveAnswerSheet = imagePages.length > 0 && paperSolutions.length > 0;
  const flaggedSet = useMemo(() => new Set(flaggedQuestions), [flaggedQuestions]);
  const answeredCount = paperSolutions.filter((solution) => answers[solution.number]).length;
  const unansweredCount = Math.max(paperSolutions.length - answeredCount, 0);
  const result = useMemo(() => {
    if (!submitted || paperSolutions.length === 0) {
      return null;
    }

    const correctNumbers = paperSolutions
      .filter((solution) => answers[solution.number] === solution.answer)
      .map((solution) => solution.number);
    const incorrectNumbers = paperSolutions
      .filter((solution) => {
        const selectedAnswer = answers[solution.number];
        return selectedAnswer && selectedAnswer !== solution.answer;
      })
      .map((solution) => solution.number);
    const unansweredNumbers = paperSolutions
      .filter((solution) => !answers[solution.number])
      .map((solution) => solution.number);

    return {
      correctCount: correctNumbers.length,
      incorrectNumbers,
      unansweredNumbers,
      scorePercent: Math.round((correctNumbers.length / paperSolutions.length) * 100),
    };
  }, [answers, paperSolutions, submitted]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((current) => current - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsRunning(false);
    }
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(initialSeconds);
    setIsRunning(false);
    setAnswers({});
    setSubmitted(false);
    setFlaggedQuestions([]);
    setZoom(100);
    setCurrentPage(1);
  }, [initialSeconds, paper?.id]);

  useEffect(() => {
    if (imagePages.length === 0 || !viewerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        const pageNumber = Number((visibleEntry?.target as HTMLElement | undefined)?.dataset.page);

        if (pageNumber) {
          setCurrentPage(pageNumber);
        }
      },
      {
        root: viewerRef.current,
        threshold: [0.35, 0.55, 0.75],
      }
    );

    pageRefs.current.slice(0, imagePages.length).forEach((page) => {
      if (page) {
        observer.observe(page);
      }
    });

    return () => observer.disconnect();
  }, [imagePages.length]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return [hours, minutes, remainingSeconds]
      .map((value) => value.toString().padStart(2, '0'))
      .join(':');
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialSeconds);
  };

  const selectAnswer = (questionNumber: number, answer: AnswerChoice) => {
    setAnswers((current) => ({
      ...current,
      [questionNumber]: answer,
    }));
    setSubmitted(false);
  };

  const toggleFlag = (questionNumber: number) => {
    setFlaggedQuestions((current) =>
      current.includes(questionNumber)
        ? current.filter((number) => number !== questionNumber)
        : [...current, questionNumber].sort((first, second) => first - second)
    );
  };

  const clearAnswers = () => {
    setAnswers({});
    setSubmitted(false);
    setFlaggedQuestions([]);
  };

  const submitAnswers = () => {
    setSubmitted(true);
    setIsRunning(false);
    window.setTimeout(() => {
      document.getElementById('paper-answer-result')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 0);
  };

  const scrollToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    pageRefs.current[pageNumber - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const changeZoom = (nextZoom: number) => {
    setZoom(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom)));
  };

  const getQuestionStatusClass = (solution: PastPaperSolution) => {
    const selectedAnswer = answers[solution.number];

    if (submitted) {
      if (!selectedAnswer) {
        return 'border-amber-300 bg-amber-50';
      }
      if (selectedAnswer === solution.answer) {
        return 'border-emerald-300 bg-emerald-50';
      }
      return 'border-red-300 bg-red-50';
    }

    if (flaggedSet.has(solution.number)) {
      return 'border-amber-300 bg-amber-50';
    }

    if (selectedAnswer) {
      return 'border-blue-300 bg-blue-50';
    }

    return 'border-gray-200 bg-white';
  };

  const getChoiceButtonClass = (solution: PastPaperSolution, choice: AnswerChoice) => {
    const selectedAnswer = answers[solution.number];
    const isSelected = selectedAnswer === choice;

    if (submitted) {
      if (choice === solution.answer) {
        return 'border-emerald-600 bg-emerald-600 text-white';
      }
      if (isSelected) {
        return 'border-red-500 bg-red-500 text-white';
      }
      return 'border-gray-200 bg-white text-gray-500';
    }

    if (isSelected) {
      return 'border-blue-600 bg-blue-600 text-white';
    }

    return 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50';
  };

  if (!paper) {
    return (
      <div className="max-w-3xl mx-auto py-12">
        <Card className="p-8 text-center" hover={false}>
          <FileQuestion className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-950 mb-2">暂未找到该试卷</h1>
          <p className="text-gray-600 mb-6">试卷可能仍在整理中，请返回真题目录查看已上线内容。</p>
          <Button onClick={() => navigate('/subjects/math/past-papers')}>返回真题目录</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <button
        onClick={() => navigate('/subjects/math/past-papers')}
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
      >
        <ArrowLeft className="w-4 h-4" />
        返回真题目录
      </button>

      <section className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-semibold">
              纯试卷已上线
            </span>
            <span className="text-sm text-gray-500">HKDSE Mathematics</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mb-2">{paper.title}</h1>
          <p className="text-gray-600">在线查看试卷、开启计时练习，或下载 PDF 后离线作答。</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={paper.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            新窗口查看
          </a>
          <a
            href={paper.pdfUrl}
            download
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            下载试卷
          </a>
        </div>
      </section>

      <Card className="p-4 md:p-5" hover={false}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <Clock3 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{paper.paper} 建议作答时间</p>
              <p
                className={`text-2xl font-bold tabular-nums ${
                  timeLeft === 0 ? 'text-red-600' : 'text-gray-950'
                }`}
              >
                {formatTime(timeLeft)}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setIsRunning((current) => !current)}
              icon={isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              disabled={timeLeft === 0}
            >
              {isRunning ? '暂停计时' : timeLeft === initialSeconds ? '开始计时练习' : '继续计时'}
            </Button>
            <Button variant="secondary" onClick={resetTimer} icon={<RotateCcw className="w-4 h-4" />}>
              重置
            </Button>
          </div>
        </div>
      </Card>

      <section className="bg-white border border-blue-200/70 rounded-lg overflow-hidden shadow-sm">
        <div className="px-4 py-3 border-b border-blue-100 flex items-center justify-between gap-3">
          <div>
            <h2 className="font-bold text-gray-950">在线试卷</h2>
            <p className="text-sm text-gray-500">
              {hasInteractiveAnswerSheet
                ? '边看原卷边作答，提交后即时核对答案。'
                : hasSolution
                  ? solutionDraft
                    ? paper.solutionNote
                    : '完成后可跳转查看逐题解析'
                  : paper.solutionNote}
            </p>
          </div>
          <span className="text-sm font-medium text-blue-700">{paper.paper}</span>
        </div>
        {imagePages.length > 0 ? (
          <div className="grid xl:grid-cols-[minmax(0,1fr)_360px] bg-slate-50">
            <div className="min-w-0">
              <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-3 py-3 backdrop-blur sm:px-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-gray-950">
                      第 {currentPage} / {imagePages.length} 页
                    </span>
                    <select
                      value={currentPage}
                      onChange={(event) => scrollToPage(Number(event.target.value))}
                      className="h-9 rounded-md border border-slate-300 bg-white px-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      aria-label="选择页码"
                    >
                      {imagePages.map((imageUrl, index) => (
                        <option key={imageUrl} value={index + 1}>
                          第 {index + 1} 页
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => changeZoom(zoom - ZOOM_STEP)}
                      disabled={zoom <= MIN_ZOOM}
                      title="缩小"
                      aria-label="缩小试卷"
                      className="h-9 w-9 rounded-md border border-slate-300 bg-white text-gray-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 inline-flex items-center justify-center"
                    >
                      <ZoomOut className="h-4 w-4" />
                    </button>
                    <span className="w-14 text-center text-sm font-semibold tabular-nums text-gray-800">
                      {zoom}%
                    </span>
                    <button
                      type="button"
                      onClick={() => changeZoom(zoom + ZOOM_STEP)}
                      disabled={zoom >= MAX_ZOOM}
                      title="放大"
                      aria-label="放大试卷"
                      className="h-9 w-9 rounded-md border border-slate-300 bg-white text-gray-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 inline-flex items-center justify-center"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => changeZoom(100)}
                      title="适合宽度"
                      aria-label="适合宽度"
                      className="h-9 w-9 rounded-md border border-slate-300 bg-white text-gray-700 transition-colors hover:bg-slate-100 inline-flex items-center justify-center"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div
                ref={viewerRef}
                className="max-h-[78vh] min-h-[560px] overflow-y-auto overflow-x-auto bg-slate-100 px-3 py-5 sm:px-6"
              >
                <div className="space-y-6">
                  {imagePages.map((imageUrl, index) => (
                    <figure
                      key={imageUrl}
                      data-page={index + 1}
                      ref={(element) => {
                        pageRefs.current[index] = element;
                      }}
                      className="scroll-mt-20"
                    >
                      <div
                        className="mx-auto rounded-md bg-white p-2 shadow-md ring-1 ring-slate-200"
                        style={{
                          width: `${zoom}%`,
                          maxWidth: zoom > 100 ? 'none' : '980px',
                          minWidth: zoom > 100 ? `${zoom}%` : undefined,
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt={`${paper.title} 第 ${index + 1} 页`}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          className="h-auto w-full rounded-sm bg-white"
                        />
                      </div>
                      <figcaption className="mt-2 text-center text-xs text-gray-500">
                        第 {index + 1} / {imagePages.length} 页
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>

            {hasInteractiveAnswerSheet && (
              <aside className="border-t border-slate-200 bg-white xl:border-l xl:border-t-0">
                <div className="xl:sticky xl:top-4 xl:max-h-[78vh] xl:overflow-hidden p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-gray-950">答题卡</h3>
                      <p className="text-sm text-gray-500">
                        已答 {answeredCount} / {paperSolutions.length}
                      </p>
                    </div>
                    {submitted && result && (
                      <div id="paper-answer-result" className="text-right">
                        <p className="text-2xl font-bold text-emerald-700">
                          {result.correctCount}/{paperSolutions.length}
                        </p>
                        <p className="text-xs font-medium text-gray-500">{result.scorePercent}%</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-md border border-blue-200 bg-blue-50 p-2 text-center">
                      <p className="text-lg font-bold text-blue-800">{answeredCount}</p>
                      <p className="text-[11px] text-blue-700">已答</p>
                    </div>
                    <div className="rounded-md border border-amber-200 bg-amber-50 p-2 text-center">
                      <p className="text-lg font-bold text-amber-800">{unansweredCount}</p>
                      <p className="text-[11px] text-amber-700">未答</p>
                    </div>
                    <div className="rounded-md border border-slate-200 bg-slate-50 p-2 text-center">
                      <p className="text-lg font-bold text-slate-800">{flaggedQuestions.length}</p>
                      <p className="text-[11px] text-slate-600">标记</p>
                    </div>
                  </div>

                  {submitted && result && (
                    <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
                      <div className="flex items-center gap-2 font-semibold">
                        <CheckCircle2 className="h-4 w-4" />
                        已完成批改
                      </div>
                      <p className="mt-1 text-xs leading-relaxed">
                        错题 {result.incorrectNumbers.length} 题，未答 {result.unansweredNumbers.length} 题。
                      </p>
                    </div>
                  )}

                  <div className="mt-4 xl:max-h-[calc(78vh-250px)] xl:overflow-y-auto xl:pr-1">
                    <div className="space-y-2">
                      {paperSolutions.map((solution) => (
                        <div
                          key={solution.number}
                          className={`rounded-md border p-2 transition-colors ${getQuestionStatusClass(solution)}`}
                        >
                          <div className="mb-2 flex items-center justify-between gap-2">
                            <div className="flex min-w-0 items-center gap-2">
                              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded bg-slate-900 text-xs font-bold text-white">
                                {solution.number}
                              </span>
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-gray-800">
                                  Section {solution.number <= 30 ? 'A' : 'B'}
                                </p>
                                <p className="truncate text-[11px] text-gray-500">{solution.topic}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => toggleFlag(solution.number)}
                              title={flaggedSet.has(solution.number) ? '取消标记' : '标记题目'}
                              aria-label={flaggedSet.has(solution.number) ? `取消标记第 ${solution.number} 题` : `标记第 ${solution.number} 题`}
                              className={`h-7 w-7 flex-shrink-0 rounded-md border inline-flex items-center justify-center transition-colors ${
                                flaggedSet.has(solution.number)
                                  ? 'border-amber-400 bg-amber-100 text-amber-700'
                                  : 'border-gray-200 bg-white text-gray-500 hover:bg-amber-50 hover:text-amber-700'
                              }`}
                            >
                              <Flag className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="grid grid-cols-4 gap-1.5">
                            {ANSWER_CHOICES.map((choice) => (
                              <button
                                key={choice}
                                type="button"
                                onClick={() => selectAnswer(solution.number, choice)}
                                aria-pressed={answers[solution.number] === choice}
                                className={`h-8 rounded-md border text-sm font-bold transition-colors ${getChoiceButtonClass(
                                  solution,
                                  choice
                                )}`}
                              >
                                {choice}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Button
                      size="sm"
                      onClick={submitAnswers}
                      disabled={answeredCount === 0}
                      icon={<Send className="h-4 w-4" />}
                      fullWidth
                    >
                      提交
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={clearAnswers}
                      disabled={answeredCount === 0 && flaggedQuestions.length === 0 && !submitted}
                      icon={<Eraser className="h-4 w-4" />}
                      fullWidth
                    >
                      清空
                    </Button>
                  </div>

                  {submitted && hasSolution && (
                    <Button
                      className="mt-2"
                      size="sm"
                      variant="secondary"
                      fullWidth
                      onClick={() => navigate(`/subjects/math/past-papers/${paper.id}/solutions`)}
                      icon={<ListChecks className="h-4 w-4" />}
                    >
                      查看逐题解析
                    </Button>
                  )}
                </div>
              </aside>
            )}
          </div>
        ) : (
          <iframe
            src={`${paper.pdfUrl}#toolbar=1&navpanes=0`}
            title={paper.title}
            className="w-full h-[70vh] min-h-[560px] bg-gray-100"
          />
        )}
        <div className="px-4 py-3 border-t border-blue-100 text-sm text-gray-500">
          如在线试卷无法显示，请使用“新窗口查看”或“下载试卷”。
        </div>
      </section>

      <Card
        className={`p-5 ${hasSolution ? 'bg-indigo-50 border-indigo-200' : 'bg-amber-50 border-amber-200'}`}
        hover={false}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className={`font-bold mb-1 ${hasSolution ? 'text-indigo-950' : 'text-amber-950'}`}>
              {hasSolution
                ? solutionDraft
                  ? '试卷详细解析初稿已上线'
                  : '试卷详细解析已上线'
                : solutionPending
                  ? '试卷详细解析核对中'
                  : '试卷详细解析尚未上线'}
            </h2>
            <p className={`text-sm ${hasSolution ? 'text-indigo-800' : 'text-amber-800'}`}>
              {hasSolution
                ? solutionDraft
                  ? paper.solutionNote
                  : '完成练习后，可逐题核对答案、计算步骤与考点。'
                : paper.solutionNote}
            </p>
          </div>
          {hasSolution ? (
            <Button
              onClick={() => navigate(`/subjects/math/past-papers/${paper.id}/solutions`)}
              icon={<ListChecks className="w-4 h-4" />}
            >
              {solutionDraft ? '查看解析初稿' : '查看逐题解析'}
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              {solutionPending ? '解析核对中' : '解析待上传'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
