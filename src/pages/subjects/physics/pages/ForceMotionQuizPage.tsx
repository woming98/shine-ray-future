/**
 * Force and Motion Quiz 页面
 * 从 Exercise 中随机抽题，支持暂停、计时、结果显示
 */

import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  Clock,
  Flag,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Trophy,
} from 'lucide-react';
import { FORCE_MOTION_EXERCISES } from '../constants/forceMotion';
import { Exercise } from '../types';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { useStore } from '../store/useStore';

type QuizState = 'config' | 'in-progress' | 'paused' | 'completed';

interface QuizAnswer {
  exerciseId: string;
  answer: string;
  isCorrect: boolean;
  timeSpent: number; // seconds
}

interface ForceMotionQuizPageProps {
  embedded?: boolean;
}

export default function ForceMotionQuizPage({ embedded = false }: ForceMotionQuizPageProps) {
  const navigate = useNavigate();
  const { addWrongAnswer } = useStore();

  const [quizState, setQuizState] = useState<QuizState>('config');
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedQuestions, setSelectedQuestions] = useState<Exercise[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(0); // seconds
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [pausedTime, setPausedTime] = useState(0); // accumulated paused time

  // 检测选项是否为图片路径
  const isImageOption = (option: string): boolean => {
    if (option.startsWith('/') || option.startsWith('./')) {
      return true;
    }
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp'];
    return imageExtensions.some((ext) => option.toLowerCase().includes(ext));
  };

  // 计时器
  useEffect(() => {
    if (quizState === 'in-progress' && !isPaused && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [quizState, isPaused, timeRemaining]);

  // 开始测验
  const handleStartQuiz = () => {
    // 随机选择题目
    const shuffled = [...FORCE_MOTION_EXERCISES].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, questionCount);
    setSelectedQuestions(selected);
    
    // 初始化答案数组
    setAnswers(selected.map(() => ({ exerciseId: '', answer: '', isCorrect: false, timeSpent: 0 })));
    
    // 计算时间：1.5分钟/题
    const totalSeconds = Math.ceil(questionCount * 1.5 * 60);
    setTimeRemaining(totalSeconds);
    setStartTime(Date.now());
    setQuizState('in-progress');
  };

  // 提交当前答案
  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;
    const timeSpent = startTime ? Math.floor((Date.now() - startTime - pausedTime) / 1000) : 0;

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      exerciseId: currentQuestion.id,
      answer: selectedAnswer,
      isCorrect,
      timeSpent,
    };
    setAnswers(newAnswers);

    // 记录错题
    if (!isCorrect) {
      addWrongAnswer({
        exerciseId: currentQuestion.id,
        topicId: 'force-motion',
        chapterId: 'fm-ch1',
        userAnswer: selectedAnswer,
        correctAnswer: currentQuestion.answer,
        attempts: 1,
        mastered: false,
      });
    }

    // 自动跳转到下一题或完成
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setStartTime(Date.now());
      setPausedTime(0);
    } else {
      handleSubmitQuiz();
    }
  };

  // 提交测验
  const handleSubmitQuiz = () => {
    setQuizState('completed');
  };

  // 暂停/恢复
  const handlePause = () => {
    if (isPaused) {
      // Resume
      setIsPaused(false);
      setStartTime(Date.now());
    } else {
      // Pause
      setIsPaused(true);
      if (startTime) {
        setPausedTime(pausedTime + (Date.now() - startTime));
      }
    }
  };

  // 切换标记
  const handleToggleFlag = (index: number) => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(index)) {
      newFlagged.delete(index);
    } else {
      newFlagged.add(index);
    }
    setFlaggedQuestions(newFlagged);
  };

  // 格式化时间
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 计算结果
  const quizResults = useMemo(() => {
    if (quizState !== 'completed') return null;

    const correctCount = answers.filter((a) => a.isCorrect).length;
    const accuracy = selectedQuestions.length > 0 ? (correctCount / selectedQuestions.length) * 100 : 0;
    const wrongQuestions = answers
      .map((a, idx) => ({ ...a, index: idx }))
      .filter((a) => !a.isCorrect);

    return {
      correctCount,
      totalCount: selectedQuestions.length,
      accuracy,
      wrongQuestions,
    };
  }, [quizState, answers, selectedQuestions]);

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  // Config Screen
  if (quizState === 'config') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Card hover={false} className="p-8">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 text-primary-400 mx-auto mb-4" />
            <h1 className="text-3xl font-display font-bold text-blue-100 mb-2">
              Force and Motion Quiz
            </h1>
            <p className="text-blue-300">Random questions from Exercise pool</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-blue-200 mb-2">Number of Questions</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                  className="flex-1"
                />
                <span className="text-2xl font-bold text-primary-400 w-16 text-center">
                  {questionCount}
                </span>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-200">Estimated Time</span>
                <span className="text-primary-400 font-medium">
                  {formatTime(Math.ceil(questionCount * 1.5 * 60))}
                </span>
              </div>
              <p className="text-blue-300 text-sm">
                (1.5 minutes per question)
              </p>
            </div>

            <Button
              size="lg"
              fullWidth
              onClick={handleStartQuiz}
              icon={<Play className="w-5 h-5" />}
            >
              Start Quiz
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Result Screen
  if (quizState === 'completed' && quizResults) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <Card hover={false} className="p-8">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 text-primary-400 mx-auto mb-4" />
            <h1 className="text-3xl font-display font-bold text-blue-100 mb-2">Quiz Completed!</h1>
          </div>

          {/* Results Summary */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/30 text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">
                {quizResults.correctCount}
              </div>
              <div className="text-blue-300 text-sm">Correct</div>
            </div>
            <div className="p-6 bg-red-500/10 rounded-xl border border-red-500/30 text-center">
              <div className="text-3xl font-bold text-red-400 mb-1">
                {quizResults.wrongQuestions.length}
              </div>
              <div className="text-blue-300 text-sm">Wrong</div>
            </div>
            <div className="p-6 bg-primary-500/10 rounded-xl border border-primary-500/30 text-center">
              <div className="text-3xl font-bold text-primary-400 mb-1">
                {quizResults.accuracy.toFixed(1)}%
              </div>
              <div className="text-blue-300 text-sm">Accuracy</div>
            </div>
          </div>

          {/* Wrong Questions */}
          {quizResults.wrongQuestions.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-100 mb-4">Wrong Questions</h3>
              <div className="space-y-4">
                {quizResults.wrongQuestions.map((wrong, idx) => {
                  const question = selectedQuestions[wrong.index];
                  return (
                    <div
                      key={idx}
                      className="p-4 bg-red-500/10 rounded-xl border border-red-500/30"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-200 font-medium">
                          Question {wrong.index + 1}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setQuizState('in-progress');
                            setCurrentQuestionIndex(wrong.index);
                            setSelectedAnswer(wrong.answer);
                          }}
                        >
                          Review
                        </Button>
                      </div>
                      <p className="text-blue-300 text-sm mb-2">{question.question}</p>
                      <div className="space-y-1 text-sm">
                        <div className="text-red-400">
                          Your answer: {wrong.answer}
                        </div>
                        <div className="text-green-400">
                          Correct answer: {question.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button
              fullWidth
              onClick={() => {
                setQuizState('config');
                setCurrentQuestionIndex(0);
                setSelectedAnswer(null);
                setAnswers([]);
                setFlaggedQuestions(new Set());
              }}
              icon={<RotateCcw className="w-4 h-4" />}
            >
              Try Again
            </Button>
            {!embedded && (
              <Button
                fullWidth
                variant="secondary"
                onClick={() => navigate('/subjects/physics/exercise')}
              >
                Back to Exercise
              </Button>
            )}
          </div>
        </Card>
      </motion.div>
    );
  }

  // In-Progress Screen
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Top Bar - Sticky */}
      <div className="sticky top-[136px] z-20 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/30 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-400" />
              <span className="text-blue-100 font-medium">
                {formatTime(timeRemaining)}
              </span>
            </div>
            <div className="text-blue-200">
              Question {currentQuestionIndex + 1} / {selectedQuestions.length}
            </div>
          </div>
          <Button variant="ghost" onClick={handlePause}>
            {isPaused ? (
              <>
                <Play className="w-4 h-4 mr-2" />
                Resume
              </>
            ) : (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Pause Modal */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={handlePause}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-xl p-8 max-w-md w-full mx-4 border border-blue-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <Pause className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-blue-100 mb-2">Quiz Paused</h2>
                <p className="text-blue-300">Take a break, resume when ready</p>
              </div>
              <div className="space-y-3">
                <Button fullWidth onClick={handlePause} icon={<Play className="w-4 h-4" />}>
                  Resume Quiz
                </Button>
                <Button
                  fullWidth
                  variant="secondary"
                  onClick={() => {
                    if (confirm('Are you sure you want to submit the quiz?')) {
                      handleSubmitQuiz();
                    }
                  }}
                >
                  Submit Quiz
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        {/* Question Area */}
        <div className="lg:col-span-8">
          <Card hover={false} className="p-6">
            <div className="mb-6">
              <h3 className="text-lg text-blue-100 leading-relaxed mb-6 whitespace-pre-wrap">
                {currentQuestion?.question}
              </h3>

              {/* Multiple Choice Options */}
              {currentQuestion?.type === 'multiple_choice' && currentQuestion.options && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isImage = isImageOption(option);

                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(option)}
                        className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'bg-primary-500/20 border-2 border-primary-500'
                            : 'bg-slate-800/50/5 border-2 border-transparent hover:bg-slate-800/50/10'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium flex-shrink-0 ${
                            isSelected
                              ? 'bg-primary-500 text-blue-100'
                              : 'bg-slate-800/50/10 text-blue-200'
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </div>
                        {isImage ? (
                          <div className="flex-1 flex items-center justify-center">
                            <img
                              src={option}
                              alt={`Option ${String.fromCharCode(65 + index)}`}
                              className="max-w-full max-h-48 h-auto rounded-lg shadow-lg"
                            />
                          </div>
                        ) : (
                          <span className="flex-1 text-blue-200">{option}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Calculation Input */}
              {(currentQuestion?.type === 'calculation' || currentQuestion?.type === 'explanation') && (
                <textarea
                  placeholder="Enter your answer..."
                  value={selectedAnswer || ''}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="w-full h-32 bg-slate-800/50/5 border border-white/20 rounded-xl p-4 text-blue-100 placeholder-slate-500 focus:outline-none focus:border-primary-500 resize-none"
                />
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-blue-500/30">
              <Button
                variant="ghost"
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(currentQuestionIndex - 1);
                    setSelectedAnswer(answers[currentQuestionIndex - 1]?.answer || null);
                  }
                }}
                disabled={currentQuestionIndex === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
              >
                {currentQuestionIndex < selectedQuestions.length - 1 ? 'Next' : 'Submit Quiz'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar - Question Palette */}
        <div className="lg:col-span-4">
          <Card hover={false} className="p-4 sticky top-[200px]">
            <h3 className="text-lg font-semibold text-blue-100 mb-4">Question Palette</h3>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {selectedQuestions.map((question, index) => {
                const isCurrent = index === currentQuestionIndex;
                const isAnswered = answers[index]?.answer !== '';
                const isFlagged = flaggedQuestions.has(index);

                return (
                  <button
                    key={question.id}
                    onClick={() => {
                      setCurrentQuestionIndex(index);
                      setSelectedAnswer(answers[index]?.answer || null);
                    }}
                    className={`relative w-10 h-10 rounded-lg font-medium transition-all ${
                      isCurrent
                        ? 'bg-primary-500 text-blue-100 ring-2 ring-primary-400'
                        : isAnswered
                        ? answers[index]?.isCorrect
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                        : 'bg-slate-800/50/10 text-blue-300 hover:bg-slate-800/50/20'
                    }`}
                  >
                    {index + 1}
                    {isFlagged && (
                      <Flag className="w-3 h-3 absolute -top-1 -right-1 text-accent-400 fill-accent-400" />
                    )}
                  </button>
                );
              })}
            </div>
            <Button
              variant="ghost"
              size="sm"
              fullWidth
              onClick={() => handleToggleFlag(currentQuestionIndex)}
            >
              <Flag
                className={`w-4 h-4 mr-2 ${
                  flaggedQuestions.has(currentQuestionIndex)
                    ? 'text-accent-400 fill-accent-400'
                    : 'text-blue-300'
                }`}
              />
              {flaggedQuestions.has(currentQuestionIndex) ? 'Unflag' : 'Flag Question'}
            </Button>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
