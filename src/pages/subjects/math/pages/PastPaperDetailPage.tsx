import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock3,
  Download,
  ExternalLink,
  FileQuestion,
  Pause,
  Play,
  RotateCcw,
} from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { getPastPaper } from '../constants/curriculum';

export default function PastPaperDetailPage() {
  const navigate = useNavigate();
  const { paperId } = useParams();
  const paper = getPastPaper(paperId);
  const initialSeconds = (paper?.durationMinutes ?? 75) * 60;
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

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
              <p className="text-sm text-gray-500">Paper 2 建议作答时间</p>
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
            <p className="text-sm text-gray-500">详细解析正在整理中</p>
          </div>
          <span className="text-sm font-medium text-blue-700">{paper.paper}</span>
        </div>
        <iframe
          src={`${paper.pdfUrl}#toolbar=1&navpanes=0`}
          title={paper.title}
          className="w-full h-[70vh] min-h-[560px] bg-gray-100"
        />
        <div className="px-4 py-3 border-t border-blue-100 text-sm text-gray-500">
          如浏览器无法显示 PDF，请使用“新窗口查看”或“下载试卷”。
        </div>
      </section>

      <Card className="p-5 bg-indigo-50 border-indigo-200" hover={false}>
        <h2 className="font-bold text-indigo-950 mb-1">试卷详细解析</h2>
        <p className="text-sm text-indigo-800">
          本卷逐题解析正在整理中，上线后可从真题目录的“试卷详细解析”栏目进入。
        </p>
      </Card>
    </div>
  );
}
