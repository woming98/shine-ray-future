/**
 * 入学测试总览页面
 * 提供英文和数学测试的入口
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ClipboardCheck, BookOpen, Calculator, ChevronRight, Clock, Target, Award } from 'lucide-react'

export default function TestHub() {
  // 测试模块配置
  const tests = [
    {
      id: 'english',
      title: '英文測試',
      titleEn: 'English Test',
      description: '評估學生的英文閱讀、語法、詞彙及寫作能力',
      icon: BookOpen,
      link: '/admission/test/english',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
      features: ['閱讀理解', '語法詞彙', '詞彙量測試', '寫作評估'],
      duration: '約 60 分鐘',
      levels: ['中一', '中二', '中三'],
    },
    {
      id: 'math',
      title: '數學測試',
      titleEn: 'Math Test',
      description: '評估學生的數學基礎能力和解題技巧',
      icon: Calculator,
      link: '/admission/test/math',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
      features: ['代數基礎', '幾何圖形', '數據處理', '應用題'],
      duration: '約 45 分鐘',
      levels: ['中一', '中二', '中三'],
    },
  ]

  // 测试优势
  const benefits = [
    {
      icon: Target,
      title: '精準評估',
      description: '根據香港課程標準設計，準確評估學生水平',
    },
    {
      icon: Clock,
      title: '即時反饋',
      description: '測試完成後即時獲得成績和詳細分析',
    },
    {
      icon: Award,
      title: '專業報告',
      description: '提供學習建議和改進方向',
    },
  ]

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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <ClipboardCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              入學測試
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              專業的英文及數學能力評估，助您了解學生真實水平
            </p>
          </motion.div>
        </div>
      </section>

      {/* 测试优势 */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 测试选择 */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">選擇測試類型</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={test.link}
                  className="block bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group h-full"
                >
                  {/* 图标和标题 */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${test.bgColor} flex items-center justify-center`}>
                      <test.icon className={`w-8 h-8 ${test.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary-600 transition-colors">
                        {test.title}
                      </h3>
                      <p className="text-sm text-slate-500">{test.titleEn}</p>
                    </div>
                  </div>

                  {/* 描述 */}
                  <p className="text-slate-600 mb-6">{test.description}</p>

                  {/* 测试内容 */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-slate-700 mb-2">測試內容：</div>
                    <div className="flex flex-wrap gap-2">
                      {test.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 信息 */}
                  <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {test.duration}
                    </div>
                    <div className="flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all">
                      開始測試 <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 温馨提示 */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-bold text-amber-800 mb-3">測試須知</h3>
            <ul className="text-sm text-amber-700 space-y-2">
              <li>• 請確保網絡連接穩定</li>
              <li>• 測試開始後請勿刷新頁面</li>
              <li>• 建議在安靜環境下進行測試</li>
              <li>• 測試結果僅供參考，不代表正式入學評估</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
