import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Send, Loader2, CheckCircle, Lightbulb, AlertTriangle } from 'lucide-react'
import type { WritingTask, WritingScore, Grade } from '../../data/englishQuestions'

interface Props {
  tasks: WritingTask[]
  grade: Grade
  onBack: () => void
}

type TestState = 'writing' | 'evaluating' | 'result'

const API_BASE = 'http://localhost:3001'

export default function WritingTest({ tasks, grade, onBack }: Props) {
  const [testState, setTestState] = useState<TestState>('writing')
  const [essay, setEssay] = useState('')
  const [score, setScore] = useState<WritingScore | null>(null)
  const [error, setError] = useState<string | null>(null)

  const currentTask = tasks[0]
  const wordCount = essay.trim().split(/\s+/).filter(w => w.length > 0).length

  const handleSubmit = async () => {
    if (wordCount < 20) {
      setError('作文太短，请至少写 20 个单词')
      return
    }

    setTestState('evaluating')
    setError(null)

    try {
      const response = await fetch(`${API_BASE}/api/evaluate-writing`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: currentTask.prompt,
          essay: essay,
          wordLimit: currentTask.wordLimit,
          grade: grade
        })
      })

      if (!response.ok) {
        throw new Error('评分服务暂时不可用')
      }

      const result = await response.json()
      setScore(result)
      setTestState('result')
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : '评分失败，请稍后重试'
      setError(errorMessage)
      setTestState('writing')
    }
  }

  const handleRewrite = () => {
    setEssay('')
    setScore(null)
    setTestState('writing')
  }

  if (testState === 'result' && score) {
    return (
      <div className="space-y-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-primary-600">
          <ArrowLeft className="w-4 h-4" />
          返回选择
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-6 text-center">AI 评分结果</h2>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600">{score.content}</div>
              <div className="text-xs text-blue-600">Content</div>
              <div className="text-xs text-slate-500">内容</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600">{score.language}</div>
              <div className="text-xs text-purple-600">Language</div>
              <div className="text-xs text-slate-500">语言</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600">{score.organization}</div>
              <div className="text-xs text-green-600">Organization</div>
              <div className="text-xs text-slate-500">结构</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-600">{score.total}/21</div>
              <div className="text-xs text-primary-600">Total</div>
              <div className="text-xs text-slate-500">总分</div>
            </div>
          </div>

          <div className="text-sm text-slate-500 text-center mb-4">
            字数：{score.wordCount} 词（要求 {currentTask.wordLimit.min}-{currentTask.wordLimit.max} 词）
          </div>

          {score.overallComment && (
            <div className="bg-slate-50 rounded-xl p-4 mb-6">
              <p className="text-slate-700">{score.overallComment}</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            优点 Strengths
          </h3>
          <ul className="space-y-2 mb-6">
            {score.feedback.strengths.map((s: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-green-500">✓</span>
                {s}
              </li>
            ))}
          </ul>

          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            改进建议 Improvements
          </h3>
          <ul className="space-y-2 mb-6">
            {score.feedback.improvements.map((s: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-amber-500">→</span>
                {s}
              </li>
            ))}
          </ul>

          {score.feedback.correctedSentences && score.feedback.correctedSentences.length > 0 && (
            <>
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                语法纠错 Corrections
              </h3>
              <div className="space-y-3">
                {score.feedback.correctedSentences.map((c: { original: string; corrected: string }, i: number) => (
                  <div key={i} className="text-sm bg-slate-50 rounded-lg p-3">
                    <p className="text-red-600 line-through">{c.original}</p>
                    <p className="text-green-600 mt-1">→ {c.corrected}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {currentTask.sampleAnswer && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-semibold text-slate-800 mb-4">参考范文 Sample Answer</h3>
            <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700 whitespace-pre-line">
              {currentTask.sampleAnswer}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <button onClick={handleRewrite} className="flex-1 py-3 border-2 border-primary-200 text-primary-600 font-medium rounded-xl hover:bg-primary-50 transition-colors">
            重新写作
          </button>
          <button onClick={onBack} className="flex-1 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors">
            返回选择
          </button>
        </div>
      </div>
    )
  }

  if (testState === 'evaluating') {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
        <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-slate-800 mb-2">AI 正在评分...</h2>
        <p className="text-slate-500">请稍候，正在按照香港 DSE 标准评估你的作文</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-primary-600">
        <ArrowLeft className="w-4 h-4" />
        返回
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded">{currentTask.type.toUpperCase()}</span>
          <span className="text-xs text-slate-500">{currentTask.wordLimit.min}-{currentTask.wordLimit.max} 词</span>
        </div>
        <h2 className="text-lg font-semibold text-slate-800 mb-3">{currentTask.title}</h2>
        <div className="bg-slate-50 rounded-xl p-4 text-slate-700 whitespace-pre-line text-sm">
          {currentTask.prompt}
        </div>

        {currentTask.tips.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-sm font-medium text-slate-600 mb-2">写作提示：</p>
            <ul className="text-sm text-slate-500 space-y-1">
              {currentTask.tips.map((tip: string, i: number) => (
                <li key={i}>• {tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-slate-700">你的作文</h3>
          <div className={`text-sm ${
            wordCount < currentTask.wordLimit.min ? 'text-amber-600' :
            wordCount > currentTask.wordLimit.max ? 'text-red-600' : 'text-green-600'
          }`}>
            {wordCount} / {currentTask.wordLimit.min}-{currentTask.wordLimit.max} 词
          </div>
        </div>

        <textarea
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
          placeholder="Start writing here..."
          className="w-full h-64 p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500 resize-none"
        />

        {error && (
          <div className="mt-3 text-sm text-red-600 bg-red-50 rounded-lg p-3">{error}</div>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={handleSubmit}
        disabled={wordCount < 20}
        className="w-full py-4 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        提交并获取 AI 评分
      </motion.button>
    </div>
  )
}
