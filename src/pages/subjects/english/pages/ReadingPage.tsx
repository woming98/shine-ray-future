/**
 * 智能阅读理解页面
 * 实现文章展示、词汇高亮、长难句分析、题目练习
 */

import { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';
import { s1ReadingPassages } from '../../../../data/englishQuestions';
import { PassageViewer } from '../components/Reading/PassageViewer';
import { Card, Button } from '../components/UI';
import { useEnglishStore } from '../store/useStore';
import { ReadingQuestion } from '../../../../data/englishQuestions';

type TestState = 'reading' | 'testing' | 'result';

export default function ReadingPage() {
  const [testState, setTestState] = useState<TestState>('reading');
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20分钟

  const { addPracticeRecord, recordDailyStudy } = useEnglishStore();
  const passages = s1ReadingPassages;
  const currentPassage = passages[currentPassageIndex];
  const currentQuestion = currentPassage?.questions[currentQuestionIndex];
  const allQuestions = passages.flatMap(p => p.questions);

  useEffect(() => {
    if (testState !== 'testing' || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setTestState('result');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [testState, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const selectAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentPassage.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentPassageIndex < passages.length - 1) {
      setCurrentPassageIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentPassageIndex > 0) {
      setCurrentPassageIndex(prev => prev - 1);
      setCurrentQuestionIndex(passages[currentPassageIndex - 1].questions.length - 1);
    }
  };

  const handleStartTest = () => {
    setTestState('testing');
    setTimeLeft(20 * 60);
    setAnswers({});
  };

  const handleSubmit = () => {
    setTestState('result');
    
    // 记录练习
    allQuestions.forEach((q: ReadingQuestion) => {
      const userAnswer = answers[q.id];
      const isCorrect = Array.isArray(q.answer)
        ? q.answer.map((a: string) => a.toLowerCase()).includes(userAnswer?.toLowerCase())
        : userAnswer?.toLowerCase() === q.answer.toLowerCase();
      addPracticeRecord({
        questionId: q.id,
        skill: 'reading',
        userAnswer: userAnswer || '',
        isCorrect,
        timeSpent: Math.floor((20 * 60 - timeLeft) / allQuestions.length),
        topic: 'reading',
        subtopic: 'reading-main-idea',
      });
    });

    recordDailyStudy({
      minutes: Math.floor((20 * 60 - timeLeft) / 60),
      exercisesCompleted: allQuestions.length,
      skillsStudied: ['reading'],
    });
  };

  const calculateScore = () => {
    let correct = 0;
    allQuestions.forEach((q: ReadingQuestion) => {
      const userAnswer = answers[q.id]?.toLowerCase();
      const correctAnswer = Array.isArray(q.answer) ? q.answer.map(a => a.toLowerCase()) : [q.answer.toLowerCase()];
      if (correctAnswer.includes(userAnswer)) correct++;
    });
    return { correct, total: allQuestions.length, percentage: Math.round((correct / allQuestions.length) * 100) };
  };

  if (testState === 'reading') {
    return (
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              智能阅读理解
            </h1>
            <Button onClick={handleStartTest}>开始练习</Button>
          </div>
          <p className="text-gray-600 mb-4">
            选择一篇文章开始阅读练习。点击文章中的高亮词汇可以查看定义并添加到词汇本。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {passages.map((passage, index) => (
              <Card
                key={passage.id}
                onClick={() => {
                  setCurrentPassageIndex(index);
                  handleStartTest();
                }}
                className="cursor-pointer hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">{passage.title}</h3>
                <p className="text-sm text-gray-600 mb-2">难度：{passage.difficulty}</p>
                <p className="text-sm text-gray-500">{passage.questions.length} 道题目</p>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  if (testState === 'result') {
    const score = calculateScore();
    return (
      <div className="space-y-6">
        <Card className="p-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-emerald-600 mb-2">{score.percentage}%</div>
            <div className="text-gray-600">答对 {score.correct} / {score.total} 题</div>
          </div>

          <div className="space-y-4">
            {passages.map(passage => (
              <div key={passage.id} className="border border-emerald-200 rounded-xl p-4 bg-emerald-50">
                <h3 className="font-semibold text-gray-900 mb-3">{passage.title}</h3>
                {passage.questions.map((q: ReadingQuestion) => {
                  const userAnswer = answers[q.id];
                  const correctAnswerValue = Array.isArray(q.answer) ? q.answer[0] : q.answer;
                  const isCorrect = Array.isArray(q.answer)
                    ? q.answer.map((a: string) => a.toLowerCase()).includes(userAnswer?.toLowerCase())
                    : userAnswer?.toLowerCase() === q.answer.toLowerCase();

                  return (
                    <div key={q.id} className="py-3 border-t border-emerald-200">
                      <div className="flex items-start gap-3 mb-2">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 mb-2">{q.question}</p>
                          <p className="text-sm text-gray-600 mb-1">
                            你的答案：<span className={isCorrect ? 'text-green-600' : 'text-red-600'}>{userAnswer || '未作答'}</span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-gray-600 mb-2">
                              正确答案：<span className="text-green-600">{correctAnswerValue}</span>
                            </p>
                          )}
                          <p className="text-sm text-emerald-700 bg-emerald-100 p-2 rounded">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            <Button onClick={() => { setTestState('reading'); }}>返回</Button>
            <Button onClick={handleStartTest}>重新练习</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 计时器 */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-600" />
            <span className="text-lg font-bold text-gray-900">{formatTime(timeLeft)}</span>
          </div>
          <Button variant="secondary" onClick={handleSubmit}>提交答案</Button>
        </div>
      </Card>

      {/* 文章和题目 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左侧：文章 */}
        <div>
          <PassageViewer passage={currentPassage} />
        </div>

        {/* 右侧：题目 */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">题目 {currentQuestionIndex + 1} / {currentPassage.questions.length}</h3>
            <div className="flex gap-2">
              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0 && currentPassageIndex === 0}
                className="p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextQuestion}
                disabled={currentQuestionIndex === currentPassage.questions.length - 1 && currentPassageIndex === passages.length - 1}
                className="p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {currentQuestion && (
            <div className="space-y-4">
              <p className="text-gray-900 font-medium">{currentQuestion.question}</p>

              {currentQuestion.type === 'choice' && currentQuestion.options && (
                <div className="space-y-2">
                  {currentQuestion.options.map((option, index) => {
                    const optionKey = String.fromCharCode(65 + index); // A, B, C, D
                    const isSelected = answers[currentQuestion.id] === option;
                    return (
                      <button
                        key={index}
                        onClick={() => selectAnswer(currentQuestion.id, option)}
                        className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                        }`}
                      >
                        <span className="font-medium">{optionKey}. </span>
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === 'fill' && (
                <input
                  type="text"
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => selectAnswer(currentQuestion.id, e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  placeholder="请输入答案"
                />
              )}

              {currentQuestion.type === 'true-false' && currentQuestion.options && (
                <div className="grid grid-cols-2 gap-2">
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => selectAnswer(currentQuestion.id, option)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
