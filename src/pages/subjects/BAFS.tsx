/**
 * BAFS (企业、会计与财务概论) 学科页面（骨架）
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Receipt, Lock, Clock } from 'lucide-react'

export default function BAFSSubject() {
  const topics = [
    { id: 1, name: 'Business Management', nameZh: '企業管理' },
    { id: 2, name: 'Accounting Principles', nameZh: '會計原理' },
    { id: 3, name: 'Financial Accounting', nameZh: '財務會計' },
    { id: 4, name: 'Cost Accounting', nameZh: '成本會計' },
    { id: 5, name: 'Financial Management', nameZh: '財務管理' },
    { id: 6, name: 'Business Environment', nameZh: '商業環境' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-700 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/subjects" className="inline-flex items-center gap-2 text-slate-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            返回學科總覽
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <Receipt className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">BAFS 企業、會計與財務概論</h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">Business, Accounting & Financial Studies</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">內容建設中</h3>
                <p className="text-amber-800 text-sm">我們正在精心製作 BAFS 科目的學習內容，敬請期待！</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 opacity-60"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{topic.nameZh}</h3>
                    <p className="text-xs text-slate-500">{topic.name}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">即將推出</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
