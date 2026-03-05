/**
 * MC 提速专区页面
 */

import { useState, useEffect } from 'react';
import { Card } from '../components/UI';
import { getMCQuestions } from '../data/questions';
import { QuestionCard } from '../components/Practice/QuestionCard';
import { AnswerInput } from '../components/Practice/AnswerInput';
import { ExplanationPanel } from '../components/Practice/ExplanationPanel';
import { CalculatorSim } from '../components/MC/CalculatorSim';
import { QuickTips } from '../components/MC/QuickTips';
import { Button } from '../components/UI/Button';
import { Clock, ArrowLeft, ArrowRight, Calculator, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MCPage() {
  const navigate = useNavigate();
  const [questions] = useState(getMCQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30分钟倒计时
  const [isRunning, setIsRunning] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentIndex];

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <p className="text-gray-600 mb-4">暂无 MC 题目</p>
        <Button onClick={() => navigate('/subjects/math')}>返回</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">{formatTime(timeLeft)}</span>
            {!isRunning && (
              <Button size="sm" onClick={() => setIsRunning(true)}>开始计时</Button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setShowCalculator(!showCalculator)}
              icon={<Calculator className="w-4 h-4" />}
            >
              计算器程序
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setShowTips(!showTips)}
              icon={<Lightbulb className="w-4 h-4" />}
            >
              快解技巧
            </Button>
            <Button variant="ghost" onClick={() => navigate('/subjects/math')}>
              <ArrowLeft className="w-4 h-4" />
              返回
            </Button>
          </div>
        </div>
      </Card>

      {/* 计算器程序和快解技巧 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {showCalculator && (
          <div className="lg:col-span-2">
            <CalculatorSim />
          </div>
        )}
        {showTips && (
          <div className="lg:col-span-2">
            <QuickTips />
          </div>
        )}
      </div>

      {currentQuestion && (
        <>
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
          />
          
          {!showExplanation && (
            <Card className="p-6">
              <AnswerInput
                type="mc"
                options={currentQuestion.options}
                value={userAnswer}
                onChange={setUserAnswer}
              />
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setShowExplanation(true)}>提交答案</Button>
              </div>
            </Card>
          )}
          
          {showExplanation && (
            <>
              <ExplanationPanel
                question={currentQuestion}
                userAnswer={userAnswer}
                isCorrect={userAnswer === currentQuestion.answer}
              />
              <div className="flex items-center justify-between">
                <Button
                  variant="secondary"
                  onClick={() => {
                    if (currentIndex > 0) {
                      setCurrentIndex(currentIndex - 1);
                      setUserAnswer('');
                      setShowExplanation(false);
                    }
                  }}
                  disabled={currentIndex === 0}
                >
                  <ArrowLeft className="w-4 h-4" />
                  上一题
                </Button>
                <Button
                  onClick={() => {
                    if (currentIndex < questions.length - 1) {
                      setCurrentIndex(currentIndex + 1);
                      setUserAnswer('');
                      setShowExplanation(false);
                    }
                  }}
                  disabled={currentIndex === questions.length - 1}
                >
                  下一题
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
