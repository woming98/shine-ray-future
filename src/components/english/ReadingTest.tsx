import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, ArrowLeft, CheckCircle, XCircle, ChevronRight, ChevronLeft } from 'lucide-react'
import type { ReadingPassage, ReadingQuestion } from '../../data/englishQuestions'

interface Props {
  passages: ReadingPassage[]
  timeLimit: number
  onBack: () => void
}

type TestState = 'testing' | 'result'

export default function ReadingTest({ passages, timeLimit, onBack }: Props) {
  const [testState, setTestState] = useState<TestState>('testing')
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(timeLimit * 60)

  const currentPassage = passages[currentPassageIndex]
  const currentQuestion = currentPassage?.questions[currentQuestionIndex]
  const allQuestions = passages.flatMap(p => p.questions)

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
    if (currentQuestionIndex < currentPassage.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else if (currentPassageIndex < passages.length - 1) {
      setCurrentPassageIndex(prev => prev + 1)
      setCurrentQuestionIndex(0)
    }
  }

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    } else if (currentPassageIndex > 0) {
      setCurrentPassageIndex(prev => prev - 1)
      setCurrentQuestionIndex(passages[currentPassageIndex - 1].questions.length - 1)
    }
  }

  const handleSubmit = () => setTestState('result')

  const calculateScore = () => {
    let correct = 0
    allQuestions.forEach((q: ReadingQuestion) => {
      const userAnswer = answers[q.id]?.toLowerCase()
      const correctAnswer = Array.isArray(q.answer) ? q.answer.map((a: string) => a.toLowerCase()) : [q.answer.toLowerCase()]
      if (correctAnswer.includes(userAnswer)) correct++
    })
    return { correct, total: allQuestions.length, percentage: Math.round((correct / allQuestions.length) * 100) }
  }

  if (testState === 'result') {
    const score = calculateScore()
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="text-center mb-8">
          <div className="text-6xl font-bold text-primary-600 mb-2">{score.percentage}%</div>
          <div className="text-slate-600">答对 {score.correct} / {score.total} 题</div>
        </div>

        <div className="space-y-4 mb-8">
          {passages.map(passage => (
            <div key={passage.id} className="border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">{passage.title}</h3>
              {passage.questions.map((q: ReadingQuestion) => {
                const userAnswer = answers[q.id]
                const correctAnswer = Array.isArray(q.answer) ? q.answer[0] : q.answer
                const isCorrect = Array.isArray(q.answer) 
                  ? q.answer.map((a: string) => a.toLowerCase()).includes(userAnswer?.toLowerCase())
                  : userAnswer?.toLowerCase() === q.answer.toLowerCase()

                return (
                  <div key={q.id} className="py-3 border-t border-slate-100">
                    <div className="flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-grow">
                        <p className="text-slate-700 text-sm">{q.question}</p>
                        <p className="text-xs mt-1">
                          <span className="text-slate-500">你的答案：</span>
                          <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>{userAnswer || '未作答'}</span>
                          {!isCorrect && (
                            <span className="text-green-600 ml-2">正确答案：{correctAnswer}</span>
                          )}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
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
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
          <Clock className="w-4 h-4 text-primary-600" />
          <span className="font-mono font-medium text-slate-700">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">{currentPassage.title}</h2>
        <div className="prose prose-slate prose-sm max-w-none bg-slate-50 rounded-xl p-4 max-h-64 overflow-y-auto">
          <p className="whitespace-pre-line">{currentPassage.passage}</p>
        </div>
      </div>

      <motion.div
        key={currentQuestion?.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6"
      >
        <div className="text-sm text-slate-500 mb-2">
          问题 {currentQuestionIndex + 1} / {currentPassage.questions.length}
        </div>
        <h3 className="text-lg font-medium text-slate-800 mb-4">{currentQuestion?.question}</h3>

        {currentQuestion?.type === 'fill' ? (
          <input
            type="text"
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => selectAnswer(currentQuestion.id, e.target.value)}
            placeholder="输入答案..."
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500"
          />
        ) : (
          <div className="space-y-3">
            {currentQuestion?.options?.map((option: string, idx: number) => (
              <button
                key={idx}
                onClick={() => selectAnswer(currentQuestion.id, option)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  answers[currentQuestion.id] === option
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-slate-200 hover:border-primary-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      <div className="flex items-center justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentPassageIndex === 0 && currentQuestionIndex === 0}
          className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          上一题
        </button>

        {currentPassageIndex === passages.length - 1 && currentQuestionIndex === currentPassage.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors"
          >
            提交答案
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-700"
          >
            下一题
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
