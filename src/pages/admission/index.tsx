/**
 * 插班服务总览页面
 * 提供学校榜单、插班资讯、入学测试的导航入口
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, FileText, ClipboardCheck, ChevronRight, Trophy, BookOpen, Calculator } from 'lucide-react'

export default function AdmissionHub() {
  // 服务模块配置
  const modules = [
    {
      id: 'rankings',
      title: '择校参考榜',
      titleEn: 'School Shortlist',
      description: '用 DSE 表现、学校官网与公开资料做初步筛选，不把榜单当成唯一录取依据',
      icon: Trophy,
      link: '/admission/rankings',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-500',
    },
    {
      id: 'info',
      title: '插班流程准备',
      titleEn: 'Transfer Roadmap',
      description: '整理申请时间、材料清单、入学测试和面试准备，先把路径排清楚',
      icon: FileText,
      link: '/admission/info',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      id: 'test',
      title: '英数衔接测评',
      titleEn: 'Readiness Assessment',
      description: '用英文及数学测评判断课程差距，作为插班备考和 DSE 衔接的起点',
      icon: ClipboardCheck,
      link: '/admission/test',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
    },
  ]

  // 测试子模块
  const testModules = [
    {
      id: 'english',
      title: '英文測試',
      titleEn: 'English Test',
      icon: BookOpen,
      link: '/admission/test/english',
      color: 'text-emerald-600',
    },
    {
      id: 'math',
      title: '數學測試',
      titleEn: 'Math Test',
      icon: Calculator,
      link: '/admission/test/math',
      color: 'text-purple-600',
    },
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
              香港插班与 DSE 衔接
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              先筛选目标学校，再完成英数诊断，最后匹配一对一或小班课程方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* 主要服务模块 */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={module.link}
                  className="block bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group h-full"
                >
                  <div className={`w-14 h-14 rounded-xl ${module.bgColor} flex items-center justify-center mb-5`}>
                    <module.icon className={`w-7 h-7 ${module.iconColor}`} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-1">{module.title}</h2>
                  <p className="text-sm text-slate-500 mb-3">{module.titleEn}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{module.description}</p>
                  <div className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                    了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 快速测试入口 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">建议先做一次诊断</h2>
            <p className="text-slate-600">选择英文或数学测评，完整记录和后续报告需要登录保存</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {testModules.map((test) => (
              <Link
                key={test.id}
                to={test.link}
                className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <test.icon className={`w-5 h-5 ${test.color}`} />
                <span className="font-medium text-slate-700">{test.title}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
