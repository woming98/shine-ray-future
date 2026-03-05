/**
 * 升学信息总览页面
 * 提供JUPAS计分规则和专业录取要求的入口
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Calculator, BookMarked, ChevronRight, Target } from 'lucide-react'

export default function UniversityHub() {
  // 模块配置
  const modules = [
    {
      id: 'jupas',
      title: 'JUPAS 計分規則',
      titleEn: 'JUPAS Score Calculator',
      description: '了解大學聯招計分方法，計算您的 DSE 成績對應分數',
      icon: Calculator,
      link: '/university/jupas',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      features: ['4C+2X 計算', 'Best 5/6 計算', '加權計算'],
    },
    {
      id: 'requirements',
      title: '專業錄取要求',
      titleEn: 'Admission Requirements',
      description: '查閱各大學熱門專業的入學要求和歷年收生數據',
      icon: BookMarked,
      link: '/university/requirements',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
      features: ['八大院校', '熱門專業', '歷年分數'],
    },
  ]

  // 统计数据
  const stats = [
    { value: '8', label: '所資助大學', icon: GraduationCap },
    { value: '300+', label: '個課程選擇', icon: BookMarked },
    { value: '15K+', label: '年度學額', icon: Target },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-br from-navy-950 via-primary-900 to-navy-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              升學信息
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              香港大學聯招 (JUPAS) 資訊及專業選擇指南
            </p>
          </motion.div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 主要模块 */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={module.link}
                  className="block bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl ${module.bgColor} flex items-center justify-center mb-6`}>
                    <module.icon className={`w-8 h-8 ${module.iconColor}`} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary-600 transition-colors">
                    {module.title}
                  </h2>
                  <p className="text-sm text-slate-500 mb-4">{module.titleEn}</p>
                  <p className="text-slate-600 mb-6">{module.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {module.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                    了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 香港八大院校 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">香港八大資助院校</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: '香港大學', abbr: 'HKU' },
              { name: '香港中文大學', abbr: 'CUHK' },
              { name: '香港科技大學', abbr: 'HKUST' },
              { name: '香港理工大學', abbr: 'PolyU' },
              { name: '香港城市大學', abbr: 'CityU' },
              { name: '香港浸會大學', abbr: 'HKBU' },
              { name: '嶺南大學', abbr: 'LU' },
              { name: '香港教育大學', abbr: 'EdUHK' },
            ].map((uni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-xl p-4 text-center hover:bg-slate-100 transition-colors"
              >
                <div className="text-lg font-bold text-primary-600 mb-1">{uni.abbr}</div>
                <div className="text-sm text-slate-600">{uni.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
