import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, ArrowLeft, CheckCircle, XCircle, ChevronRight, ChevronLeft } from 'lucide-react'
import type { GrammarQuestion } from '../../data/englishQuestions'

interface Props {
  questions: GrammarQuestion[]
  timeLimit: number
  onBack: () => void
}

type TestState = 'testing' | 'result'

export default function GrammarTest({ questions, timeLimit, onBack }: Props) {
  const [testState, setTestState] = useState<TestState>('testing')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(timeLimit * 60)

  const currentQuestion = questions[currentIndex]

  useEffect(() => {
    if (testState !== 'testing' || timeLeft <= 0) return
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setTestState('result')
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [testState, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const selectAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const handleSubmit = () => setTestState('result')

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q: GrammarQuestion) => {
      const userAnswer = answers[q.id]?.toLowerCase().trim()
      const correctAnswers = Array.isArray(q.answer) ? q.answer.map((a: string) => a.toLowerCase()) : [q.answer.toLowerCase()]
      if (correctAnswers.includes(userAnswer)) correct++
    })
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) }
  }

  if (testState === 'result') {
    const score = calculateScore()
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="text-center mb-8">
          <div className="text-6xl font-bold text-primary-600 mb-2">{score.percentage}%</div>
          <div className="text-slate-600">答对 {score.correct} / {score.total} 题</div>
        </div>

        <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
          {questions.map((q: GrammarQuestion, idx: number) => {
            const userAnswer = answers[q.id]
            const correctAnswer = Array.isArray(q.answer) ? q.answer[0] : q.answer
            const correctAnswers = Array.isArray(q.answer) ? q.answer.map((a: string) => a.toLowerCase()) : [q.answer.toLowerCase()]
            const isCorrect = correctAnswers.includes(userAnswer?.toLowerCase().trim())

            return (
              <div key={q.id} className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-600">{q.topic}</span>
                      <span className="text-xs text-slate-400">#{idx + 1}</span>
                    </div>
                    <p className="text-slate-700 text-sm">{q.question}</p>
                    <p className="text-xs mt-2">
                      <span className="text-slate-500">你的答案：</span>
                      <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>{userAnswer || '未作答'}</span>
                      {!isCorrect && (
                        <span className="text-green-600 ml-2">正确答案：{correctAnswer}</span>
                      )}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 bg-slate-50 rounded p-2">{q.explanation}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button
          onClick={onBack}
          className="w-full py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors"
        >
          返回选择
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-primary-600">
          <ArrowLeft className="w-4 h-4" />
          返回
        </button>
        <div className="flex items-center gap-4">
          <div className="text-sm text-slate-500">{currentIndex + 1} / {questions.length}</div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <Clock className="w-4 h-4 text-primary-600" />
            <span className="font-mono font-medium text-slate-700">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-primary-500 transition-all duration-300" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
      </div>

      <motion.div
        key={currentQuestion?.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs px-2 py-1 rounded ${currentQuestion?.category === 'grammar' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
            {currentQuestion?.category === 'grammar' ? 'Grammar' : 'Vocabulary'}
          </span>
          <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">{currentQuestion?.topic}</span>
        </div>

        <h3 className="text-lg font-medium text-slate-800 mb-6">{currentQuestion?.question}</h3>

        {currentQuestion?.type === 'fill' || currentQuestion?.type === 'error-correction' ? (
          <input
            type="text"
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => selectAnswer(currentQuestion.id, e.target.value)}
            placeholder={currentQuestion.type === 'error-correction' ? '输入正确的句子或改正部分...' : '输入答案...'}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500"
          />
        ) : (
          <div className="space-y-3">
            {currentQuestion?.options?.map((option: string, idx: number) => (
              <button
                key={idx}
                onClick={() => selectAnswer(currentQuestion.id, option)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  answers[currentQuestion.id] === option ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-primary-300'
                }`}
              >
                <span className="font-medium text-slate-500 mr-3">{String.fromCharCode(65 + idx)}.</span>
                {option}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      <div className="flex items-center justify-between">
        <button onClick={prevQuestion} disabled={currentIndex === 0} className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          上一题
        </button>

        {currentIndex === questions.length - 1 ? (
          <button onClick={handleSubmit} className="px-6 py-2 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors">
            提交答案
          </button>
        ) : (
          <button onClick={nextQuestion} className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-700">
            下一题
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
