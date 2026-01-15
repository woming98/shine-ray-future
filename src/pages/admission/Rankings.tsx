/**
 * 香港学校榜单页面
 * 从原 Schools.tsx 迁移
 */

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, Trophy, Medal, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dseTop50 } from '../../data/dseTop50.generated'

export default function Rankings() {

  // 获取排名样式
  const getRankStyle = (rank: number) => {
    if (rank === 1) return { bg: 'bg-gradient-to-r from-yellow-400 to-amber-500', text: 'text-white', icon: Trophy }
    if (rank === 2) return { bg: 'bg-gradient-to-r from-slate-300 to-slate-400', text: 'text-slate-800', icon: Medal }
    if (rank === 3) return { bg: 'bg-gradient-to-r from-amber-600 to-amber-700', text: 'text-white', icon: Award }
    return { bg: 'bg-primary-100', text: 'text-primary-700', icon: null }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-br from-navy-950 via-primary-900 to-navy-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/admission"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回插班服務
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl mb-6 shadow-lg">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              全港中學 DSE 成績 TOP50
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              2026年度香港中學文憑試成績排行榜
            </p>
          </motion.div>
        </div>
      </section>

      {/* 排行榜列表 */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-slate-600">
              共 <span className="font-semibold text-primary-600">{dseTop50.length}</span> 所學校
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {dseTop50.map((school, index) => {
                const rankStyle = getRankStyle(school.rank)
                const RankIcon = rankStyle.icon

                return (
                  <motion.a
                    key={school.rank}
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group flex flex-col"
                  >
                    {/* 排名和学校名 */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${rankStyle.bg} ${rankStyle.text} flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0`}>
                        {RankIcon ? <RankIcon className="w-6 h-6" /> : school.rank}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1 group-hover:text-primary-600 transition-colors">
                          {school.name}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <ExternalLink className="w-3 h-3" />
                          <span>點擊訪問官網</span>
                        </div>
                      </div>
                    </div>

                    {/* 成绩数据 */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-slate-50 rounded-lg p-3">
                        <div className="text-slate-500 text-xs mb-1">中文 5+%</div>
                        <div className="font-semibold text-slate-800">{school.chineseScore}</div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <div className="text-slate-500 text-xs mb-1">英文 5+%</div>
                        <div className="font-semibold text-slate-800">{school.englishScore}</div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <div className="text-slate-500 text-xs mb-1">數學 5+%</div>
                        <div className="font-semibold text-slate-800">{school.mathScore}</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3">
                        <div className="text-primary-600 text-xs mb-1">平均 5+%</div>
                        <div className="font-bold text-primary-700">{school.avgScore}</div>
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}
