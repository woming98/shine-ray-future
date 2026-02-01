/**
 * 词汇量测试组件
 * 题型：同义词、反义词、单词含义、上下文填词
 */

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Clock, ArrowLeft, CheckCircle, XCircle, ChevronRight, ChevronLeft, BookA, RotateCcw } from 'lucide-react'
import type { VocabularyQuestion } from '../../data/englishQuestions'

interface Props {
  questions: VocabularyQuestion[]
  timeLimit: number
  onBack: () => void
}

type TestState = 'testing' | 'result'

const UNIT_GLOSSARY: Record<
  string,
  { zh: string; pos?: string; example: string; tips?: string[] }
> = {
  worry: {
    zh: '担心；忧虑',
    pos: 'v.',
    example: 'Don’t worry about the test. You have prepared well.',
    tips: ['worry about + n./V-ing', 'be worried about = 担心…'],
  },
  'fortune-teller': {
    zh: '算命先生；占卜师',
    pos: 'n.',
    example: 'They visited a fortune-teller for fun.',
    tips: ['tell someone’s fortune = 给…算命'],
  },
  predict: {
    zh: '预测；预言',
    pos: 'v.',
    example: 'It is hard to predict what will happen next.',
    tips: ['predict + noun/clause', 'prediction (n.)'],
  },
  upset: {
    zh: '心烦的；使…难过',
    pos: 'adj./v.',
    example: 'She felt upset after hearing the news.',
    tips: ['be upset about/at', 'upset (v.) – upset – upset'],
  },
  comfort: {
    zh: '安慰；使…舒服',
    pos: 'v./n.',
    example: 'His mother tried to comfort him.',
    tips: ['comfort (v.) / comfortable (adj.)'],
  },
  moved: {
    zh: '感动的',
    pos: 'adj.',
    example: 'We were moved by the teacher’s words.',
    tips: ['moved (adj.) vs move (v.)', 'be moved by'],
  },
  caring: {
    zh: '关心他人的；体贴的',
    pos: 'adj.',
    example: 'She is a caring teacher who helps everyone.',
    tips: ['care (v./n.)', 'take care of = 照顾'],
  },
}

export default function VocabularyTest({ questions, timeLimit, onBack }: Props) {
  const [testState, setTestState] = useState<TestState>('testing')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(timeLimit * 60)

  const currentQuestion = questions[currentIndex]

  // 计时器
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

  // 格式化时间
  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [])

  // 选择答案
  const selectAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  // 下一题
  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  // 上一题
  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  // 提交答案
  const handleSubmit = () => setTestState('result')

  // 重新开始
  const handleRestart = () => {
    setTestState('testing')
    setCurrentIndex(0)
    setAnswers({})
    setTimeLeft(timeLimit * 60)
  }

  // 计算得分
  const calculateScore = () => {
    let correct = 0
    let byType: Record<string, { correct: number; total: number }> = {
      synonym: { correct: 0, total: 0 },
      antonym: { correct: 0, total: 0 },
      meaning: { correct: 0, total: 0 },
      context: { correct: 0, total: 0 }
    }
    const wrongWords = new Set<string>()

    questions.forEach((q: VocabularyQuestion) => {
      byType[q.type].total++
      if (answers[q.id] === q.answer) {
        correct++
        byType[q.type].correct++
      } else {
        wrongWords.add(q.word)
      }
    })

    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
      byType,
      wrongWords: Array.from(wrongWords),
    }
  }

  // 获取题型标签
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'synonym': return '同义词'
      case 'antonym': return '反义词'
      case 'meaning': return '单词含义'
      case 'context': return '上下文'
      default: return type
    }
  }

  // 获取题型颜色
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'synonym': return 'bg-emerald-100 text-emerald-700'
      case 'antonym': return 'bg-rose-100 text-rose-700'
      case 'meaning': return 'bg-blue-100 text-blue-700'
      case 'context': return 'bg-violet-100 text-violet-700'
      default: return 'bg-slate-100 text-slate-700'
    }
  }

  // 获取难度标签
  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单'
      case 'medium': return '中等'
      case 'hard': return '困难'
      default: return difficulty
    }
  }

  // 结果页面
  if (testState === 'result') {
    const score = calculateScore()

    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        {/* 总分 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-100 mb-4">
            <BookA className="w-12 h-12 text-primary-600" />
          </div>
          <div className="text-6xl font-bold text-primary-600 mb-2">{score.percentage}%</div>
          <div className="text-slate-600 text-lg">
            答对 <span className="font-semibold text-primary-600">{score.correct}</span> / {score.total} 题
          </div>
                  </div>

        {/* 各题型得分 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(score.byType).map(([type, data]) => (
            data.total > 0 && (
              <div key={type} className="bg-slate-50 rounded-xl p-4 text-center">
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${getTypeColor(type)}`}>
                  {getTypeLabel(type)}
                </span>
                <div className="text-2xl font-bold text-slate-800">{data.correct}/{data.total}</div>
                <div className="text-xs text-slate-500">
                  {Math.round((data.correct / data.total) * 100)}%
                  </div>
                </div>
              )
          ))}
        </div>

        {/* 学习建议：错词复盘 */}
        {score.wrongWords.length > 0 && (
          <div className="mb-8">
            <h3 className="font-semibold text-slate-800 mb-4">学习建议（根据错题自动生成）</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {score.wrongWords
                .filter((w) => UNIT_GLOSSARY[w.toLowerCase()])
                .slice(0, 6)
                .map((w) => {
                  const entry = UNIT_GLOSSARY[w.toLowerCase()]
                  return (
                    <div key={w} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xl font-bold text-slate-900">{w}</div>
                          <div className="text-sm text-slate-600 mt-1">
                            {entry.pos ? `${entry.pos} ` : ''}
                            {entry.zh}
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                          <BookA className="w-5 h-5 text-primary-600" />
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3">
                        {entry.example}
                      </div>
                      {entry.tips && entry.tips.length > 0 && (
                        <ul className="mt-3 text-sm text-slate-600 list-disc pl-5 space-y-1">
                          {entry.tips.slice(0, 3).map((tip) => (
                            <li key={tip}>{tip}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        )}

        {/* 答题详情 */}
        <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
          <h3 className="font-semibold text-slate-800 sticky top-0 bg-white py-2">答题详情</h3>
          {questions.map((q: VocabularyQuestion, idx: number) => {
              const userAnswer = answers[q.id]
              const isCorrect = userAnswer === q.answer

              return (
              <div key={q.id} className={`border rounded-xl p-4 ${isCorrect ? 'border-green-200 bg-green-50/50' : 'border-red-200 bg-red-50/50'}`}>
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${getTypeColor(q.type)}`}>
                        {getTypeLabel(q.type)}
                        </span>
                        <span className="text-xs text-slate-400">#{idx + 1}</span>
                      </div>
                      <p className="text-slate-700 text-sm mb-2">{q.question}</p>
                      <div className="text-xs space-y-1">
                        <p>
                          <span className="text-slate-500">你的答案：</span>
                          <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                            {userAnswer || '未作答'}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p>
                            <span className="text-slate-500">正确答案：</span>
                            <span className="text-green-600 font-medium">{q.answer}</span>
                          </p>
                        )}
                      </div>
                    <p className="text-xs text-slate-500 mt-2 bg-white/70 rounded p-2 border border-slate-100">
                        💡 {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-4">
          <button
            onClick={handleRestart}
            className="flex-1 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            重新测试
          </button>
        <button
          onClick={onBack}
            className="flex-1 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors"
        >
          返回选择
        </button>
        </div>
      </div>
    )
  }

  // 测试页面
  return (
    <div className="space-y-6">
      {/* 顶部导航 */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回
        </button>
        <div className="flex items-center gap-4">
          <div className="text-sm text-slate-500">
            <span className="font-medium text-primary-600">{currentIndex + 1}</span> / {questions.length}
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${timeLeft < 60 ? 'bg-red-50 text-red-600' : 'bg-white'}`}>
            <Clock className={`w-4 h-4 ${timeLeft < 60 ? 'text-red-500' : 'text-primary-600'}`} />
            <span className="font-mono font-medium">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* 进度条 */}
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* 题目卡片 */}
        <motion.div
          key={currentQuestion?.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6"
        >
        {/* 标签 */}
          <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${getTypeColor(currentQuestion?.type || '')}`}>
            {getTypeLabel(currentQuestion?.type || '')}
          </span>
          <span className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
            {getDifficultyLabel(currentQuestion?.difficulty || '')}
            </span>
          <span className="text-xs text-slate-400 ml-auto">
            目标单词: <span className="font-medium text-slate-700">{currentQuestion?.word}</span>
            </span>
          </div>

        {/* 题目 */}
        <h3 className="text-lg font-medium text-slate-800 mb-6 leading-relaxed">
            {currentQuestion?.question}
          </h3>

          {/* 选项 */}
          <div className="space-y-3">
          {currentQuestion?.options?.map((option: string, idx: number) => {
            const isSelected = answers[currentQuestion.id] === option
            return (
              <motion.button
                key={idx}
                onClick={() => selectAnswer(currentQuestion.id, option)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  isSelected
                    ? 'border-primary-500 bg-primary-50 shadow-sm'
                    : 'border-slate-200 hover:border-primary-300 hover:bg-slate-50'
                }`}
              >
                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full mr-3 text-sm font-medium ${
                  isSelected ? 'bg-primary-500 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className={isSelected ? 'text-primary-700 font-medium' : 'text-slate-700'}>
                {option}
                </span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* 底部导航 */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          上一题
        </button>

        {/* 快速导航 */}
        <div className="hidden md:flex items-center gap-1">
          {questions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                idx === currentIndex
                  ? 'bg-primary-500 text-white'
                  : answers[q.id]
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {currentIndex === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
          >
            提交答案
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            下一题
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
