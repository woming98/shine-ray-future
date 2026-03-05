import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calculator, Clock, ChevronRight, ChevronLeft, CheckCircle,
  XCircle, Award, RefreshCw, FileText, AlertCircle, Sparkles, Lightbulb
} from 'lucide-react'
import { mathQuestionSets, MathQuestion, MathQuestionSet } from '../data/mathQuestions'

/**
 * 测试状态枚举
 */
type TestState = 'select' | 'testing' | 'result'

/**
 * 数学测试页面
 * 包含年级选择、测试界面和结果报告
 */
export default function MathTest() {
  const { t } = useTranslation()
  const [testState, setTestState] = useState<TestState>('select')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [currentQuestionSet, setCurrentQuestionSet] = useState<MathQuestionSet | null>(null)

  // 获取当前题目
  const currentQuestion = currentQuestionSet?.questions[currentQuestionIndex]

  // 计时器
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (testState === 'testing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSubmit()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [testState, timeLeft])

  // 格式化时间
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // 开始测试
  const startTest = (grade: string) => {
    const questionSet = mathQuestionSets.find(qs => qs.grade === grade)
    if (questionSet) {
      setCurrentQuestionSet(questionSet)
      setTimeLeft(questionSet.timeLimit * 60)
      setAnswers({})
      setCurrentQuestionIndex(0)
      setTestState('testing')
    }
  }

  // 选择答案
  const selectAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  // 下一题
  const nextQuestion = () => {
    if (currentQuestionSet && currentQuestionIndex < currentQuestionSet.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  // 上一题
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  // 提交测试
  const handleSubmit = useCallback(() => {
    setTestState('result')
  }, [])

  // 计算得分
  const calculateScore = () => {
    if (!currentQuestionSet) return { score: 0, correct: 0, total: 0, byTopic: {} }
    
    let correct = 0
    const byTopic: Record<string, { correct: number; total: number }> = {}
    
    currentQuestionSet.questions.forEach((q) => {
      const userAnswer = answers[q.id]
      const isCorrect = userAnswer === q.answer
      
      // 按主题统计
      if (!byTopic[q.topic]) {
        byTopic[q.topic] = { correct: 0, total: 0 }
      }
      byTopic[q.topic].total++
      
      if (isCorrect) {
        correct++
        byTopic[q.topic].correct++
      }
    })
    
    const total = currentQuestionSet.questions.length
    const score = Math.round((correct / total) * 100)
    
    return { score, correct, total, byTopic }
  }

  // 获取能力评估
  const getAssessment = (score: number) => {
    if (score >= 90) {
      return {
        level: '优秀',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        message: '你的数学能力非常出色！建议挑战更高难度的数学题目。',
        suggestions: [
          '尝试数学竞赛题目',
          '学习高一级的数学知识',
          '探索数学在实际问题中的应用',
          '帮助同学解答数学问题'
        ]
      }
    } else if (score >= 75) {
      return {
        level: '良好',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        message: '你的数学基础扎实，继续保持！还有提升空间。',
        suggestions: [
          '加强薄弱知识点的练习',
          '多做应用题训练',
          '总结解题方法和技巧',
          '定期复习巩固知识'
        ]
      }
    } else if (score >= 60) {
      return {
        level: '中等',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        message: '你的数学水平达到基本要求，但仍需努力提升。',
        suggestions: [
          '复习基础概念和公式',
          '多做基础练习题',
          '理解每道题的解题思路',
          '建立错题本，定期复习'
        ]
      }
    } else {
      return {
        level: '需加强',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        message: '你的数学基础需要加强，建议系统学习。',
        suggestions: [
          '从基础知识开始复习',
          '弄清每个概念的含义',
          '多请教老师和同学',
          '每天坚持做练习题'
        ]
      }
    }
  }

  // 获取题型图标颜色
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'calculation':
        return 'bg-blue-100 text-blue-600'
      case 'application':
        return 'bg-green-100 text-green-600'
      case 'logic':
        return 'bg-purple-100 text-purple-600'
      default:
        return 'bg-slate-100 text-slate-600'
    }
  }

  // 获取题型名称
  const getTypeName = (type: string) => {
    switch (type) {
      case 'calculation':
        return '计算题'
      case 'application':
        return '应用题'
      case 'logic':
        return '逻辑题'
      default:
        return ''
    }
  }

  // 重新测试
  const resetTest = () => {
    setTestState('select')
    setCurrentQuestionIndex(0)
    setAnswers({})
    setTimeLeft(0)
    setCurrentQuestionSet(null)
  }

  // 渲染题目
  const renderQuestion = (question: MathQuestion) => {
    const userAnswer = answers[question.id]
    
    return (
      <div className="space-y-6">
        {/* 题型标签 */}
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(question.type)}`}>
            {getTypeName(question.type)}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            question.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
            question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {question.difficulty === 'easy' ? '简单' :
             question.difficulty === 'medium' ? '中等' : '困难'}
          </span>
          <span className="text-slate-500 text-sm">{question.topic}</span>
        </div>

        {/* 题目 */}
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-semibold text-sm">
            {currentQuestionIndex + 1}
          </span>
          <p className="text-lg text-slate-900 pt-1">{question.question}</p>
        </div>

        {/* 选项 */}
        {question.options && (
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = userAnswer === option
              const optionLabel = String.fromCharCode(65 + index) // A, B, C, D
              
              return (
                <button
                  key={option}
                  onClick={() => selectAnswer(question.id, option)}
                  className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-4 ${
                    isSelected
                      ? 'bg-purple-50 border-2 border-purple-500 shadow-md'
                      : 'bg-white border-2 border-slate-200 hover:border-purple-300 hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm ${
                    isSelected
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {optionLabel}
                  </span>
                  <span className={`${isSelected ? 'text-purple-700 font-medium' : 'text-slate-700'}`}>
                    {option}
                  </span>
                  {isSelected && (
                    <CheckCircle className="w-5 h-5 text-purple-500 ml-auto" />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Calculator className="w-4 h-4 text-purple-300" />
              <span className="text-white/90 text-sm font-medium">专业数学能力评估</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('nav.mathTest')}
            </h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              针对香港中学课程设计的专业数学测试，全面评估您的数学能力
            </p>
          </motion.div>
        </div>
      </section>

      {/* 主要内容区 */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* 年级选择 */}
            {testState === 'select' && (
              <motion.div
                key="select"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{t('test.selectGrade')}</h2>
                  <p className="text-slate-600">请选择您要测试的年级</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {mathQuestionSets.map((qs) => (
                    <motion.button
                      key={qs.grade}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => startTest(qs.grade)}
                      className="card p-8 text-center group hover:shadow-2xl transition-all"
                    >
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 group-hover:scale-110 transition-all">
                        <span className="text-2xl font-bold text-purple-600 group-hover:text-white transition-colors">
                          {qs.gradeLabel.slice(0, 2)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{qs.gradeLabel}</h3>
                      <p className="text-slate-500 mb-4">
                        {qs.questions.length} 道题目 · {qs.timeLimit} 分钟
                      </p>
                      <div className="text-purple-600 font-medium group-hover:text-purple-700 flex items-center justify-center gap-2">
                        开始测试
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* 测试说明 */}
                <div className="mt-12 card p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary-500" />
                    测试说明
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>测试包含计算题、应用题和逻辑题</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>每道题都有详细的解题步骤</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>测试结束后将显示各知识点的掌握情况</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>建议准备草稿纸进行计算</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* 测试界面 */}
            {testState === 'testing' && currentQuestion && (
              <motion.div
                key="testing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* 进度和计时器 */}
                <div className="card p-4 mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-500">
                      {t('test.question', {
                        current: currentQuestionIndex + 1,
                        total: currentQuestionSet?.questions.length
                      })}
                    </span>
                    {/* 进度条 */}
                    <div className="hidden sm:block w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 transition-all"
                        style={{
                          width: `${((currentQuestionIndex + 1) / (currentQuestionSet?.questions.length || 1)) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    timeLeft < 60 ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span className="font-mono font-semibold">{formatTime(timeLeft)}</span>
                  </div>
                </div>

                {/* 题目卡片 */}
                <div className="card p-8 mb-8">
                  {renderQuestion(currentQuestion)}
                </div>

                {/* 导航按钮 */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                      currentQuestionIndex === 0
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {t('test.previous')}
                  </button>

                  {currentQuestionIndex === (currentQuestionSet?.questions.length || 0) - 1 ? (
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30"
                    >
                      <CheckCircle className="w-5 h-5" />
                      {t('test.submit')}
                    </button>
                  ) : (
                    <button
                      onClick={nextQuestion}
                      className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
                    >
                      {t('test.next')}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* 题目导航 */}
                <div className="mt-8 card p-4">
                  <p className="text-sm text-slate-500 mb-3">题目导航</p>
                  <div className="flex flex-wrap gap-2">
                    {currentQuestionSet?.questions.map((q, index) => {
                      const isAnswered = answers[q.id]
                      const isCurrent = index === currentQuestionIndex
                      
                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQuestionIndex(index)}
                          className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${
                            isCurrent
                              ? 'bg-purple-500 text-white shadow-md'
                              : isAnswered
                                ? 'bg-purple-100 text-purple-700'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {index + 1}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 结果页面 */}
            {testState === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {(() => {
                  const { score, correct, total, byTopic } = calculateScore()
                  const assessment = getAssessment(score)
                  
                  return (
                    <>
                      {/* 得分展示 */}
                      <div className="card p-8 text-center mb-8">
                        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Award className="w-10 h-10 text-purple-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('test.result')}</h2>
                        <div className="text-6xl font-bold gradient-text mb-4">{score}</div>
                        <p className="text-slate-600 mb-6">
                          共 {total} 题，答对 {correct} 题
                        </p>
                        
                        {/* 能力等级 */}
                        <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${assessment.bgColor} ${assessment.color} border ${assessment.borderColor}`}>
                          <Sparkles className="w-5 h-5" />
                          <span className="font-semibold">能力等级：{assessment.level}</span>
                        </div>
                      </div>

                      {/* 知识点分析 */}
                      <div className="card p-6 mb-8">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">
                          📈 知识点掌握情况
                        </h3>
                        <div className="space-y-4">
                          {Object.entries(byTopic).map(([topic, data]) => {
                            const percentage = Math.round((data.correct / data.total) * 100)
                            return (
                              <div key={topic}>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-slate-700">{topic}</span>
                                  <span className="text-sm text-slate-500">
                                    {data.correct}/{data.total} ({percentage}%)
                                  </span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full transition-all ${
                                      percentage >= 80 ? 'bg-green-500' :
                                      percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* 学习建议 */}
                      <div className="card p-6 mb-8">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">
                          📝 能力评估与学习建议
                        </h3>
                        <p className="text-slate-600 mb-6">{assessment.message}</p>
                        <ul className="space-y-3">
                          {assessment.suggestions.map((suggestion, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 错题分析 */}
                      <div className="card p-6 mb-8">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">
                          📊 {t('test.analysis')}
                        </h3>
                        <div className="space-y-4">
                          {currentQuestionSet?.questions.map((q, index) => {
                            const userAnswer = answers[q.id]
                            const isCorrect = userAnswer === q.answer
                            
                            return (
                              <div
                                key={q.id}
                                className={`p-4 rounded-xl border-2 ${
                                  isCorrect
                                    ? 'bg-green-50 border-green-200'
                                    : 'bg-red-50 border-red-200'
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  {isCorrect ? (
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  ) : (
                                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                  )}
                                  <div className="flex-1">
                                    <p className="font-medium text-slate-900 mb-2">
                                      第 {index + 1} 题: {q.question}
                                    </p>
                                    <div className="text-sm space-y-1 mb-3">
                                      <p className="text-slate-600">
                                        你的答案：
                                        <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                                          {userAnswer || '未作答'}
                                        </span>
                                      </p>
                                      {!isCorrect && (
                                        <p className="text-slate-600">
                                          正确答案：
                                          <span className="text-green-600 font-medium">
                                            {q.answer}
                                          </span>
                                        </p>
                                      )}
                                    </div>
                                    
                                    {/* 解题步骤 */}
                                    {q.steps && (
                                      <div className="bg-white/50 rounded-lg p-4 mt-3">
                                        <p className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                                          <Lightbulb className="w-4 h-4 text-yellow-500" />
                                          解题步骤
                                        </p>
                                        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600">
                                          {q.steps.map((step, i) => (
                                            <li key={i}>{step}</li>
                                          ))}
                                        </ol>
                                      </div>
                                    )}
                                    
                                    <p className="text-slate-500 mt-3 text-sm">{q.explanation}</p>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* 操作按钮 */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                          onClick={resetTest}
                          className="flex items-center justify-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30"
                        >
                          <RefreshCw className="w-5 h-5" />
                          {t('test.retake')}
                        </button>
                        <button className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors">
                          <FileText className="w-5 h-5" />
                          下载报告
                        </button>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
