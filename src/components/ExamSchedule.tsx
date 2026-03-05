/**
 * DSE 考试时间表组件
 * 展示 2026 年 DSE 各科目考试时间安排
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ChevronDown, ChevronUp, Clock, Star } from 'lucide-react'
import { dseSchedule2026, CORE_SUBJECTS, type ExamDay } from '../data/dseSchedule2026'

export default function ExamSchedule() {
  const [expandedDays, setExpandedDays] = useState<string[]>([])
  const [showAll, setShowAll] = useState(false)

  // 切换展开/收起
  const toggleDay = (date: string) => {
    setExpandedDays(prev => 
      prev.includes(date) 
        ? prev.filter(d => d !== date)
        : [...prev, date]
    )
  }

  // 判断是否为核心科目
  const isCoreSubject = (subject: string) => {
    return CORE_SUBJECTS.some(core => subject.includes(core))
  }

  // 显示的考试日期
  const displayDays = showAll ? dseSchedule2026 : dseSchedule2026.slice(0, 6)

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      {/* 标题 */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold">DSE 2026 考試時間表</h3>
            <p className="text-sm text-primary-100">共 {dseSchedule2026.length} 個考試日</p>
          </div>
        </div>
      </div>

      {/* 图例 */}
      <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-amber-500" />
          <span className="text-slate-600">核心科目</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
          <span className="text-slate-600">選修科目</span>
        </div>
      </div>

      {/* 考试日期列表 */}
      <div className="divide-y divide-slate-100">
        {displayDays.map((day: ExamDay, index: number) => {
          const isExpanded = expandedDays.includes(day.date)
          const hasCore = day.sessions.some(s => isCoreSubject(s.subject))

          return (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              {/* 日期行（可点击展开） */}
              <button
                onClick={() => toggleDay(day.date)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center ${
                    hasCore ? 'bg-primary-100' : 'bg-slate-100'
                  }`}>
                    <span className={`text-xs ${hasCore ? 'text-primary-600' : 'text-slate-500'}`}>
                      {day.dateZh.slice(0, 2)}
                    </span>
                    <span className={`text-lg font-bold ${hasCore ? 'text-primary-700' : 'text-slate-700'}`}>
                      {day.dateZh.slice(2, 4)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-800">
                        {day.dateZh}（{day.day}）
                      </span>
                      {hasCore && <Star className="w-4 h-4 text-amber-500" />}
                    </div>
                    <div className="text-sm text-slate-500">
                      {day.sessions.length} 場考試
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    {day.sessions.map(s => s.subjectZh.split('（')[0]).join('、')}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* 展开的考试详情 */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 space-y-2">
                      {day.sessions.map((session, i) => {
                        const isCore = isCoreSubject(session.subject)
                        return (
                          <div
                            key={i}
                            className={`flex items-start gap-3 p-3 rounded-xl ${
                              isCore ? 'bg-primary-50 border border-primary-100' : 'bg-slate-50'
                            }`}
                          >
                            <div className={`flex items-center gap-1 text-sm ${
                              isCore ? 'text-primary-600' : 'text-slate-500'
                            }`}>
                              <Clock className="w-4 h-4" />
                              <span className="font-mono">{session.time}</span>
                            </div>
                            <div className="flex-grow">
                              <div className={`font-medium ${isCore ? 'text-primary-800' : 'text-slate-700'}`}>
                                {session.subjectZh}
                              </div>
                              <div className="text-xs text-slate-500">{session.subject}</div>
                            </div>
                            {isCore && (
                              <span className="text-xs bg-primary-200 text-primary-700 px-2 py-0.5 rounded">
                                核心
                              </span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* 展开更多按钮 */}
      {dseSchedule2026.length > 6 && (
        <div className="px-6 py-4 border-t border-slate-100">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full py-2 text-center text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-center gap-1"
          >
            {showAll ? (
              <>收起 <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>查看全部 {dseSchedule2026.length} 個考試日 <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}
    </div>
  )
}
