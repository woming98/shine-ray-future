/**
 * 学科学习总览页面
 * 展示10个DSE学科的学习入口
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  BookOpen, Calculator, Languages, Sigma, Atom, FlaskConical, 
  Microscope, TrendingUp, Receipt, ChevronRight, Sparkles, Lock
} from 'lucide-react'

export default function SubjectHub() {
  // 学科配置
  const subjects = [
    {
      id: 'english',
      name: '英文',
      nameEn: 'English',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
      status: 'pilot',
      description: 'DSE英文阅读、词汇、写作与口语训练内容内测中',
      features: ['閱讀訓練', '寫作任務', '聽力素材', '詞彙本'],
    },
    {
      id: 'math',
      name: '數學',
      nameEn: 'Mathematics',
      icon: Calculator,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      status: 'active',
      description: '中一至中六课程、计数机教程及 HKDSE 试卷配套',
      features: ['分級課程', '計數機教程', '答題卡', '詳細解析'],
    },
    {
      id: 'chinese',
      name: '語文',
      nameEn: 'Chinese',
      icon: Languages,
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500',
      status: 'coming',
      description: 'DSE中國語文科目',
    },
    {
      id: 'm1',
      name: 'M1',
      nameEn: 'Mathematics M1',
      icon: Sigma,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      iconColor: 'text-violet-500',
      status: 'coming',
      description: '數學延伸部分單元一',
    },
    {
      id: 'm2',
      name: 'M2',
      nameEn: 'Mathematics M2',
      icon: Sigma,
      color: 'from-fuchsia-500 to-pink-500',
      bgColor: 'bg-fuchsia-50',
      iconColor: 'text-fuchsia-500',
      status: 'pilot',
      description: '数学延伸部分单元二，三角函数学习中心内测中',
      features: ['三角函數學習中心', '歷屆試題庫', '知識點解析', '公式推導'],
    },
    {
      id: 'physics',
      name: '物理',
      nameEn: 'Physics',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-500',
      status: 'active',
      description: '八大物理主题、章节练习、错题本和 2021-2025 HKDSE 真题库',
      features: ['主題學習', '真題庫', '錯題本', '進度追蹤'],
    },
    {
      id: 'chemistry',
      name: '化學',
      nameEn: 'Chemistry',
      icon: FlaskConical,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
      status: 'coming',
      description: 'DSE化學科目學習',
    },
    {
      id: 'biology',
      name: '生物',
      nameEn: 'Biology',
      icon: Microscope,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
      status: 'pilot',
      description: '3D细胞模型、虚拟显微镜与生物词汇内容内测中',
      features: ['3D互動', '詞彙學習', '閃卡系統'],
    },
    {
      id: 'economics',
      name: '經濟',
      nameEn: 'Economics',
      icon: TrendingUp,
      color: 'from-sky-500 to-cyan-500',
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-500',
      status: 'coming',
      description: 'DSE經濟科目學習',
    },
    {
      id: 'bafs',
      name: '會計',
      nameEn: 'BAFS',
      icon: Receipt,
      color: 'from-emerald-700 to-teal-700',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-700',
      status: 'active',
      description: '會計及商業管理課程框架與學習資源',
      features: ['A1–A12會計單元', '商業管理', '章節筆記', '真題專區'],
    },
  ]

  // 分类：已开放 vs 内测/排期
  const activeSubjects = subjects.filter(s => s.status === 'active')
  const pilotSubjects = subjects.filter(s => s.status === 'pilot')
  const upcomingSubjects = subjects.filter(s => s.status === 'coming')
  const plannedSubjects = [...pilotSubjects, ...upcomingSubjects]

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
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              DSE 全科辅导平台
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              已开放数学、物理、BAFS 学习入口；英文、M2、生物等模块按课程交付节奏内测
            </p>
          </motion.div>
        </div>
      </section>

      {/* 已上线学科 */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-accent-500" />
            <h2 className="text-2xl font-bold text-slate-800">首批开放学科</h2>
            <span className="text-sm bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
              {activeSubjects.length} 个学科
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {activeSubjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/subjects/${subject.id}`}
                  className="block bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${subject.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <subject.icon className={`w-7 h-7 ${subject.iconColor}`} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary-600 transition-colors">
                          {subject.name}
                        </h3>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                          已开放
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">{subject.nameEn}</p>
                      <p className="text-slate-600 text-sm mb-3">{subject.description}</p>
                      {subject.features && (
                        <div className="flex flex-wrap gap-2">
                          {subject.features.map((feature, i) => (
                            <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 内测与排期学科 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="w-5 h-5 text-slate-400" />
            <h2 className="text-2xl font-bold text-slate-800">内测与排期</h2>
            <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
              {plannedSubjects.length} 个学科
            </span>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plannedSubjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-xl p-5 border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${subject.bgColor} flex items-center justify-center`}>
                    <subject.icon className={`w-5 h-5 ${subject.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700">{subject.name}</h3>
                    <p className="text-xs text-slate-500">{subject.nameEn}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">{subject.description}</p>
                <div className="mt-3 text-xs text-slate-400 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  {subject.status === 'pilot' ? '课程内测中' : '排期中'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 课程咨询提示 */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">想知道孩子该从哪一科开始补？</h2>
          <p className="text-primary-100 mb-6">先完成英数衔接测评，再由顾问匹配一对一或 3-6 人小班课程方案</p>
          <Link
            to="/admission/test"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-primary-50 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            预约测评与课程方案
          </Link>
        </div>
      </section>
    </div>
  )
}
