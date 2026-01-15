/**
 * JUPAS 计分规则页面
 * 提供DSE成绩计算器和计分说明
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calculator, Info, RotateCcw } from 'lucide-react'

// DSE 等级对应分数
const GRADE_SCORES: Record<string, number> = {
  '5**': 7,
  '5*': 6,
  '5': 5,
  '4': 4,
  '3': 3,
  '2': 2,
  '1': 1,
  'U': 0,
}

// 科目配置
const CORE_SUBJECTS = [
  { id: 'chinese', name: '中國語文', nameEn: 'Chinese' },
  { id: 'english', name: '英國語文', nameEn: 'English' },
  { id: 'math', name: '數學', nameEn: 'Mathematics' },
  { id: 'ls', name: '公民與社會發展', nameEn: 'CS' },
]

const ELECTIVE_SUBJECTS = [
  { id: 'elec1', name: '選修科目 1', nameEn: 'Elective 1' },
  { id: 'elec2', name: '選修科目 2', nameEn: 'Elective 2' },
  { id: 'elec3', name: '選修科目 3', nameEn: 'Elective 3' },
]

export default function JupasCalculator() {
  // 成绩状态
  const [grades, setGrades] = useState<Record<string, string>>({
    chinese: '',
    english: '',
    math: '',
    ls: '',
    elec1: '',
    elec2: '',
    elec3: '',
  })

  // 更新成绩
  const handleGradeChange = (subjectId: string, grade: string) => {
    setGrades(prev => ({ ...prev, [subjectId]: grade }))
  }

  // 重置
  const handleReset = () => {
    setGrades({
      chinese: '',
      english: '',
      math: '',
      ls: '',
      elec1: '',
      elec2: '',
      elec3: '',
    })
  }

  // 计算分数
  const calculateScores = () => {
    const allScores = Object.entries(grades)
      .filter(([_, grade]) => grade !== '')
      .map(([id, grade]) => ({
        id,
        score: GRADE_SCORES[grade] || 0,
        isCore: CORE_SUBJECTS.some(s => s.id === id),
      }))

    // 4C (四个核心科目)
    const coreScores = allScores.filter(s => s.isCore).map(s => s.score)
    const core4 = coreScores.reduce((sum, s) => sum + s, 0)

    // 选修科目分数（按高低排序）
    const electiveScores = allScores.filter(s => !s.isCore).map(s => s.score).sort((a, b) => b - a)

    // Best 2X
    const best2X = electiveScores.slice(0, 2).reduce((sum, s) => sum + s, 0)

    // 4C + 2X
    const score4C2X = core4 + best2X

    // Best 5 (所有科目中最高的5个)
    const allSubjectScores = allScores.map(s => s.score).sort((a, b) => b - a)
    const best5 = allSubjectScores.slice(0, 5).reduce((sum, s) => sum + s, 0)

    // Best 6
    const best6 = allSubjectScores.slice(0, 6).reduce((sum, s) => sum + s, 0)

    return { core4, best2X, score4C2X, best5, best6 }
  }

  const scores = calculateScores()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-br from-navy-950 via-primary-900 to-navy-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/university"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回升學信息
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              JUPAS 計分規則
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              輸入您的 DSE 成績，計算 JUPAS 分數
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 成绩输入区 */}
            <div className="lg:col-span-2 space-y-6">
              {/* 核心科目 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h2 className="text-lg font-bold text-slate-800 mb-4">核心科目 (4C)</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {CORE_SUBJECTS.map((subject) => (
                    <div key={subject.id} className="flex items-center gap-3">
                      <div className="flex-grow">
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          {subject.name}
                        </label>
                        <select
                          value={grades[subject.id]}
                          onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">選擇等級</option>
                          {Object.keys(GRADE_SCORES).map((grade) => (
                            <option key={grade} value={grade}>{grade}</option>
                          ))}
                        </select>
                      </div>
                      {grades[subject.id] && (
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="font-bold text-primary-600">
                            {GRADE_SCORES[grades[subject.id]]}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 选修科目 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h2 className="text-lg font-bold text-slate-800 mb-4">選修科目 (X)</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {ELECTIVE_SUBJECTS.map((subject) => (
                    <div key={subject.id}>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {subject.name}
                      </label>
                      <select
                        value={grades[subject.id]}
                        onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">選擇等級</option>
                        {Object.keys(GRADE_SCORES).map((grade) => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* 重置按钮 */}
              <button
                onClick={handleReset}
                className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                重置所有成績
              </button>
            </div>

            {/* 分数显示区 */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
                <h2 className="text-lg font-bold text-slate-800 mb-4">計算結果</h2>
                
                <div className="space-y-4">
                  <div className="bg-primary-50 rounded-xl p-4">
                    <div className="text-sm text-primary-600 mb-1">4C + 2X</div>
                    <div className="text-3xl font-bold text-primary-700">{scores.score4C2X}</div>
                    <div className="text-xs text-primary-500 mt-1">
                      4C: {scores.core4} + 2X: {scores.best2X}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="text-sm text-slate-600 mb-1">Best 5</div>
                      <div className="text-2xl font-bold text-slate-800">{scores.best5}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="text-sm text-slate-600 mb-1">Best 6</div>
                      <div className="text-2xl font-bold text-slate-800">{scores.best6}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-500">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <p>
                      不同大學及課程可能採用不同的計分方法和加權比重，
                      此計算器僅供參考。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 计分说明 */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">計分說明</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 等级对照表 */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-800 mb-4">DSE 等級對應分數</h3>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(GRADE_SCORES).map(([grade, score]) => (
                  <div key={grade} className="bg-white rounded-lg p-3 text-center">
                    <div className="font-bold text-primary-600">{grade}</div>
                    <div className="text-slate-600">{score} 分</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 常见计分方式 */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-800 mb-4">常見計分方式</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-16 font-medium text-slate-800">4C+2X</span>
                  <span>4個核心科目 + 2個最佳選修科目</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-16 font-medium text-slate-800">Best 5</span>
                  <span>所有科目中最高的5科成績</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-16 font-medium text-slate-800">Best 6</span>
                  <span>所有科目中最高的6科成績</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-16 font-medium text-slate-800">加權</span>
                  <span>部分課程會對特定科目加權計算</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
