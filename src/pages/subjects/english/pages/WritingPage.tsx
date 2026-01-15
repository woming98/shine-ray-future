/**
 * AI 写作页面
 * 集成现有写作批改 API，实现错误标注和评分报告
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, PenTool, RefreshCw } from 'lucide-react';
import { s1WritingTasks } from '../../../../data/englishQuestions';
import { WritingTask, WritingScore, Grade } from '../../../../data/englishQuestions/types';
import { TextEditor } from '../components/Writing/TextEditor';
import { FeedbackPanel } from '../components/Writing/FeedbackPanel';
import { Card, Button } from '../components/UI';
import { useEnglishStore } from '../store/useStore';

type WritingState = 'selecting' | 'writing' | 'evaluating' | 'result';

const API_BASE = 'http://localhost:3001';

export default function WritingPage() {
  const [state, setState] = useState<WritingState>('selecting');
  const [selectedTask, setSelectedTask] = useState<WritingTask | null>(null);
  const [essay, setEssay] = useState('');
  const [score, setScore] = useState<WritingScore | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { addEssaySubmission, recordDailyStudy } = useEnglishStore();

  const handleSelectTask = (task: WritingTask) => {
    setSelectedTask(task);
    setEssay('');
    setScore(null);
    setError(null);
    setState('writing');
  };

  const handleSubmit = async () => {
    if (!selectedTask) return;

    const wordCount = essay.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount < selectedTask.wordLimit.min) {
      setError(`作文太短，请至少写 ${selectedTask.wordLimit.min} 个单词`);
      return;
    }

    setState('evaluating');
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/api/evaluate-writing`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: selectedTask.prompt,
          essay: essay,
          wordLimit: selectedTask.wordLimit,
          grade: 'S1' as Grade,
        }),
      });

      if (!response.ok) {
        throw new Error('评分服务暂时不可用');
      }

      const result = await response.json();
      setScore(result);
      setState('result');

      // 保存提交记录
      addEssaySubmission(selectedTask.id, essay, result);
      recordDailyStudy({
        minutes: 30,
        exercisesCompleted: 1,
        skillsStudied: ['writing'],
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : '评分失败，请稍后重试';
      setError(errorMessage);
      setState('writing');
    }
  };

  const handleReset = () => {
    setEssay('');
    setScore(null);
    setError(null);
    setState('writing');
  };

  const handleNewTask = () => {
    setSelectedTask(null);
    setEssay('');
    setScore(null);
    setError(null);
    setState('selecting');
  };

  if (state === 'selecting') {
    return (
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <PenTool className="w-6 h-6 text-emerald-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI 写作批改</h1>
          </div>
          <p className="text-gray-600 mb-6">
            选择一个写作题目开始练习。AI 将为你提供详细的批改反馈和评分。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {s1WritingTasks.map((task) => (
              <Card
                key={task.id}
                onClick={() => handleSelectTask(task)}
                className="cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{task.title}</h3>
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded">
                    {task.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{task.prompt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{task.wordLimit.min} - {task.wordLimit.max} 字</span>
                  <span>{task.tips.length} 个提示</span>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  if (state === 'result' && score) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">AI 评分结果</h1>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={handleReset} icon={<RefreshCw className="w-4 h-4" />}>
              重新写作
            </Button>
            <Button onClick={handleNewTask}>选择新题目</Button>
          </div>
        </div>

        <FeedbackPanel score={score} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {selectedTask && (
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedTask.title}</h1>
              <p className="text-gray-700 leading-relaxed">{selectedTask.prompt}</p>
            </div>
            <Button variant="ghost" onClick={handleNewTask}>更换题目</Button>
          </div>

          {selectedTask.tips.length > 0 && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">写作提示：</h3>
              <ul className="space-y-1">
                {selectedTask.tips.map((tip, index) => (
                  <li key={index} className="text-sm text-blue-800">• {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      )}

      <TextEditor
        value={essay}
        onChange={setEssay}
        wordLimit={selectedTask?.wordLimit}
        placeholder="开始写作..."
        autoSave={true}
      />

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
        >
          {error}
        </motion.div>
      )}

      <div className="flex justify-end">
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={state === 'evaluating'}
          icon={state === 'evaluating' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        >
          {state === 'evaluating' ? 'AI 评分中...' : '提交批改'}
        </Button>
      </div>
    </div>
  );
}
