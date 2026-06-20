import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Eraser,
  ExternalLink,
  FileQuestion,
  Flag,
  ListChecks,
  Pause,
  Play,
  RotateCcw,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { getPastPaper, HKEAA_PAST_PAPER_SOURCE_URL } from '../constants/curriculum';
import { PAST_PAPER_SOLUTIONS, type PastPaperSolution } from '../data/pastPaperSolutions';

type AnswerChoice = PastPaperSolution['answer'];

const ANSWER_CHOICES: AnswerChoice[] = ['A', 'B', 'C', 'D'];

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
  const hasSolution = paper?.solutionAvailable ?? false;
  const solutionDraft = paper?.solutionStatus === 'draft';
  const solutionPending = paper?.solutionStatus === 'reviewing';
  const hasInteractiveAnswerSheet = paperSolutions.length > 0;
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
  }, [initialSeconds, paper?.id]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return [hours, minutes, remainingSeconds].map((value) => value.toString().padStart(2, '0')).join(':');
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
          <h1 className="text-2xl font-bold text-gray-950 mb-2">暂未找到该配套练习</h1>
          <p className="text-gray-600 mb-6">该年份可能仍在整理中，请返回目录查看已上线内容。</p>
          <Button onClick={() => navigate('/subjects/math/past-papers')}>返回配套目录</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <button
        onClick={() => navigate('/subjects/math/past-papers')}
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
      >
        <ArrowLeft className="w-4 h-4" />
        返回配套目录
      </button>

      <section className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-5">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-semibold">
              官方试卷配套
            </span>
            <span className="text-sm text-gray-500">HKDSE Mathematics</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mb-2">{paper.title}</h1>
          <p className="max-w-3xl text-gray-600 leading-relaxed">
            本站不展示原卷。请配合 HKEAA 官方试题专辑或学校授权材料完成练习；本页提供计时、作答记录与原创解析入口。
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={HKEAA_PAST_PAPER_SOURCE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            官方试题来源
          </a>
          {hasSolution && (
            <Button
              onClick={() => navigate(`/subjects/math/past-papers/${paper.id}/solutions`)}
              icon={<ListChecks className="w-4 h-4" />}
            >
              查看原创解析
            </Button>
          )}
        </div>
      </section>

      <Card className="p-5 bg-slate-50 border-slate-200" hover={false}>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex flex-shrink-0 items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-gray-950 mb-1">版权安全使用方式</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              原卷请从官方授权渠道取得。本站只保留计时、答题卡、答案核对与莘睿原创解析，不提供原卷图片或 PDF 下载。
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-4 md:p-5" hover={false}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <Clock3 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{paper.paper} 建议作答时间</p>
              <p className={`text-2xl font-bold tabular-nums ${timeLeft === 0 ? 'text-red-600' : 'text-gray-950'}`}>
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

      {hasInteractiveAnswerSheet ? (
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Card className="p-5" hover={false}>
            <div className="flex flex-col gap-3 border-b border-blue-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-950">Paper 2 配套答题卡</h2>
                <p className="mt-1 text-sm text-gray-500">按官方原卷题号选择 A-D，提交后即时核对答案。</p>
              </div>
              {submitted && result && (
                <div id="paper-answer-result" className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-right">
                  <p className="text-2xl font-bold text-emerald-700">
                    {result.correctCount}/{paperSolutions.length}
                  </p>
                  <p className="text-xs font-medium text-emerald-800">{result.scorePercent}%</p>
                </div>
              )}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {paperSolutions.map((solution) => (
                <div
                  key={solution.number}
                  className={`rounded-md border p-3 transition-colors ${getQuestionStatusClass(solution)}`}
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-slate-900 text-sm font-bold text-white">
                        {solution.number}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">
                          Section {solution.number <= 30 ? 'A' : 'B'}
                        </p>
                        {submitted && <p className="text-[11px] text-gray-500">答案 {solution.answer}</p>}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleFlag(solution.number)}
                      title={flaggedSet.has(solution.number) ? '取消标记' : '标记题目'}
                      aria-label={flaggedSet.has(solution.number) ? `取消标记第 ${solution.number} 题` : `标记第 ${solution.number} 题`}
                      className={`h-8 w-8 flex-shrink-0 rounded-md border inline-flex items-center justify-center transition-colors ${
                        flaggedSet.has(solution.number)
                          ? 'border-amber-400 bg-amber-100 text-amber-700'
                          : 'border-gray-200 bg-white text-gray-500 hover:bg-amber-50 hover:text-amber-700'
                      }`}
                    >
                      <Flag className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {ANSWER_CHOICES.map((choice) => (
                      <button
                        key={choice}
                        type="button"
                        onClick={() => selectAnswer(solution.number, choice)}
                        aria-pressed={answers[solution.number] === choice}
                        className={`h-9 rounded-md border text-sm font-bold transition-colors ${getChoiceButtonClass(
                          solution,
                          choice
                        )}`}
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                  {submitted && (
                    <p className="mt-3 text-xs leading-relaxed text-gray-600">
                      {solution.topic}：{solution.keyPoint}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <aside className="space-y-4">
            <Card className="p-5" hover={false}>
              <h3 className="font-bold text-gray-950">作答进度</h3>
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
                <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    已完成批改
                  </div>
                  <p className="mt-1 text-xs leading-relaxed">
                    错题 {result.incorrectNumbers.length} 题，未答 {result.unansweredNumbers.length} 题。
                  </p>
                </div>
              )}

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
            </Card>

            <Card className="p-5 bg-blue-50 border-blue-200" hover={false}>
              <h3 className="font-bold text-blue-950">作答方式</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-900">
                先打开官方或学校授权原卷，再在此记录选择题答案。提交前可标记不确定题，提交后再进入解析页复盘。
              </p>
            </Card>
          </aside>
        </section>
      ) : (
        <Card className="p-6" hover={false}>
          <div className="flex items-start gap-4">
            <FileQuestion className="mt-1 h-7 w-7 flex-shrink-0 text-blue-700" />
            <div>
              <h2 className="text-xl font-bold text-gray-950">练习说明</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                该卷适合先使用官方试题专辑或学校授权材料离线完成，再回到本站查看原创步骤解析。本站不会展示原卷题干、图片或 PDF。
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={HKEAA_PAST_PAPER_SOURCE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  官方试题来源
                </a>
                {hasSolution && (
                  <Button
                    onClick={() => navigate(`/subjects/math/past-papers/${paper.id}/solutions`)}
                    icon={<ListChecks className="w-4 h-4" />}
                  >
                    查看原创解析
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}

      <Card
        className={`p-5 ${hasSolution ? 'bg-indigo-50 border-indigo-200' : 'bg-amber-50 border-amber-200'}`}
        hover={false}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className={`font-bold mb-1 ${hasSolution ? 'text-indigo-950' : 'text-amber-950'}`}>
              {hasSolution
                ? solutionDraft
                  ? '原创详细解析初稿已上线'
                  : '原创详细解析已上线'
                : solutionPending
                  ? '原创详细解析核对中'
                  : '原创详细解析尚未上线'}
            </h2>
            <p className={`text-sm ${hasSolution ? 'text-indigo-800' : 'text-amber-800'}`}>
              {hasSolution
                ? solutionDraft
                  ? paper.solutionNote
                  : '完成官方原卷练习后，可逐题核对答案、计算步骤与考点。'
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
