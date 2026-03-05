/**
 * 智能练习页面
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Filter } from 'lucide-react';
import { useMathStore } from '../store/useStore';
import { allMathQuestions, getQuestionsByTopic } from '../data/questions';
import { MATH_TOPICS } from '../constants/topics';
import { QuestionCard } from '../components/Practice/QuestionCard';
import { AnswerInput } from '../components/Practice/AnswerInput';
import { ExplanationPanel } from '../components/Practice/ExplanationPanel';
import { Button, Card } from '../components/UI';
import { MathQuestion } from '../types';

export default function PracticePage() {
  const navigate = useNavigate();
  const { addPracticeRecord, getRecommendedQuestions } = useMathStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [filters, setFilters] = useState({
    topic: '',
    difficulty: '' as '' | 'easy' | 'medium' | 'hard',
  });
  const [showFilters, setShowFilters] = useState(false);

  // 加载题目
  useEffect(() => {
    let filteredQuestions = allMathQuestions;
    
    if (filters.topic) {
      filteredQuestions = getQuestionsByTopic(filters.topic);
    }
    
    if (filters.difficulty) {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === filters.difficulty);
    }
    
    // 如果没有筛选，使用推荐题目
    if (!filters.topic && !filters.difficulty) {
      const recommendedIds = getRecommendedQuestions(10);
      filteredQuestions = recommendedIds.length > 0
        ? recommendedIds.map(id => allMathQuestions.find(q => q.id === id)).filter(Boolean) as MathQuestion[]
        : filteredQuestions.slice(0, 10);
    }
    
    setQuestions(filteredQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setShowExplanation(false);
  }, [filters, getRecommendedQuestions]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmit = () => {
    if (!currentQuestion || !userAnswer) return;
    
    const correctAnswer = Array.isArray(currentQuestion.answer)
      ? currentQuestion.answer.join(', ')
      : currentQuestion.answer;
    
    const correct = userAnswer.trim() === correctAnswer.trim();
    setIsCorrect(correct);
    setShowExplanation(true);
    
    // 记录练习记录
    addPracticeRecord({
      questionId: currentQuestion.id,
      userAnswer: userAnswer.trim(),
      isCorrect: correct,
      timeSpent: 0, // 可以添加计时功能
      topic: currentQuestion.topic,
      subtopic: currentQuestion.subtopic,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserAnswer('');
      setShowExplanation(false);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">没有找到符合条件的题目</p>
        <Button onClick={() => setFilters({ topic: '', difficulty: '' })}>
          清除筛选
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* 筛选栏 */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              筛选
            </button>
            <span className="text-sm text-gray-600">
              共 {questions.length} 道题目
            </span>
          </div>
          <Button variant="ghost" onClick={() => navigate('/subjects/math')}>
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>
        </div>
        
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 pt-4 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">主题</label>
                <select
                  value={filters.topic}
                  onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                >
                  <option value="">全部</option>
                  {MATH_TOPICS.map(topic => (
                    <option key={topic.id} value={topic.id}>{topic.nameCN}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">难度</label>
                <select
                  value={filters.difficulty}
                  onChange={(e) => setFilters({ ...filters, difficulty: e.target.value as any })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                >
                  <option value="">全部</option>
                  <option value="easy">简单</option>
                  <option value="medium">中等</option>
                  <option value="hard">困难</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </Card>

      {/* 题目卡片 */}
      {currentQuestion && (
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
          
          {/* 答案输入 */}
          {!showExplanation && (
            <Card className="mt-6 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">你的答案</h3>
              <AnswerInput
                type={currentQuestion.type}
                options={currentQuestion.options}
                value={userAnswer}
                onChange={setUserAnswer}
              />
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={handleSubmit}
                  disabled={!userAnswer}
                  icon={<Check className="w-4 h-4" />}
                >
                  提交答案
                </Button>
              </div>
            </Card>
          )}
          
          {/* 解释面板 */}
          {showExplanation && currentQuestion && (
            <ExplanationPanel
              question={currentQuestion}
              userAnswer={userAnswer}
              isCorrect={isCorrect}
            />
          )}
          
          {/* 导航按钮 */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="secondary"
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              上一题
            </Button>
            <span className="text-sm text-gray-600">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
            <Button
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              下一题
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
