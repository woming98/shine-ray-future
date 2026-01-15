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
      status: 'active',
      description: 'DSE英文科目學習資源',
      features: ['智能閱讀', 'AI寫作批改', '聽力訓練', '口語對練'],
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
      description: 'DSE數學必修部分',
      features: ['題型練習', '幾何工具', '錯題分析', '學習報告'],
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
      status: 'coming',
      description: '數學延伸部分單元二',
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
      description: '八大物理主題互動學習',
      features: ['互動模擬', '公式計算器', '練習題庫'],
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
      status: 'active',
      description: '3D細胞模型與虛擬顯微鏡',
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
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-100',
      iconColor: 'text-slate-500',
      status: 'coming',
      description: '企業、會計與財務概論',
    },
  ]

  // 分类：已上线 vs 即将推出
  const activeSubjects = subjects.filter(s => s.status === 'active')
  const comingSubjects = subjects.filter(s => s.status === 'coming')

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
              學科學習
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              DSE 各科目互動學習平台，助您高效備考
            </p>
          </motion.div>
        </div>
      </section>

      {/* 已上线学科 */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-accent-500" />
            <h2 className="text-2xl font-bold text-slate-800">已上線學科</h2>
            <span className="text-sm bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
              {activeSubjects.length} 個學科
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
                          已上線
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

      {/* 即将推出学科 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="w-5 h-5 text-slate-400" />
            <h2 className="text-2xl font-bold text-slate-800">即將推出</h2>
            <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
              {comingSubjects.length} 個學科
            </span>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {comingSubjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-xl p-5 border border-slate-200 opacity-75"
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
                  敬請期待
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 订阅提示 */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">解鎖全部學科內容</h2>
          <p className="text-primary-100 mb-6">訂閱會員，享受完整的學習資源和進度追蹤功能</p>
          <Link
            to="/user"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-primary-50 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            了解訂閱方案
          </Link>
        </div>
      </section>
    </div>
  )
}
