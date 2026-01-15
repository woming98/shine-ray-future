/**
 * 插班资讯页面
 * 提供香港学校插班申请流程、所需文件及时间规划等信息
 */

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, FileText, Calendar, CheckCircle, Clock, 
  FileCheck, School, Users, Phone 
} from 'lucide-react'

export default function TransferInfo() {
  // 申请流程步骤
  const steps = [
    {
      step: 1,
      title: '確定目標學校',
      description: '根據學生能力、興趣及家庭需求，選擇合適的學校',
      icon: School,
      tips: ['參考學校排名', '了解學校特色', '考慮地理位置'],
    },
    {
      step: 2,
      title: '準備申請文件',
      description: '收集並準備所有必要的申請材料',
      icon: FileCheck,
      tips: ['學業成績單', '推薦信', '個人陳述'],
    },
    {
      step: 3,
      title: '提交申請',
      description: '按學校要求提交申請表和相關文件',
      icon: FileText,
      tips: ['注意截止日期', '確認文件齊全', '保留申請記錄'],
    },
    {
      step: 4,
      title: '入學測試',
      description: '參加學校安排的英文、數學等科目測試',
      icon: CheckCircle,
      tips: ['提前備考', '了解考試形式', '保持良好狀態'],
    },
    {
      step: 5,
      title: '面試環節',
      description: '學生及家長參加學校面試',
      icon: Users,
      tips: ['準備自我介紹', '了解學校背景', '展現真實自我'],
    },
    {
      step: 6,
      title: '等待結果',
      description: '學校審核後發出錄取通知',
      icon: Clock,
      tips: ['保持聯繫方式暢通', '準備備選方案', '耐心等待'],
    },
  ]

  // 所需文件列表
  const documents = [
    { name: '學生護照/身份證副本', required: true },
    { name: '近兩年成績報告', required: true },
    { name: '推薦信（班主任/校長）', required: true },
    { name: '學生個人陳述', required: true },
    { name: '家長陳述信', required: false },
    { name: '課外活動/獎項證書', required: false },
    { name: '英語能力證明（如有）', required: false },
    { name: '近照（證件相）', required: true },
    { name: '出生證明', required: true },
    { name: '家長身份證明文件', required: true },
  ]

  // 時間規劃
  const timeline = [
    { period: '1-3月', task: '春季插班申請（部分學校）', type: 'primary' },
    { period: '4-6月', task: '秋季插班申請開始', type: 'primary' },
    { period: '7-8月', task: '入學測試及面試', type: 'secondary' },
    { period: '9月', task: '秋季學期開學', type: 'accent' },
    { period: '10-12月', task: '下學年插班諮詢', type: 'secondary' },
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              插班資訊
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              香港學校插班申請完整指南
            </p>
          </motion.div>
        </div>
      </section>

      {/* 申请流程 */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">申請流程</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs text-primary-600 font-medium">步驟 {item.step}</div>
                    <h3 className="font-bold text-slate-800">{item.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.tips.map((tip, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 所需文件 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">所需文件</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-6">
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center justify-between py-2 border-b border-slate-200 last:border-0">
                    <span className="text-slate-700">{doc.name}</span>
                    {doc.required ? (
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">必需</span>
                    ) : (
                      <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full">選填</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 時間規劃 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">申請時間規劃</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* 時間線 */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      item.type === 'primary' ? 'bg-primary-500' : 
                      item.type === 'accent' ? 'bg-accent-500' : 'bg-slate-400'
                    }`}>
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                      <div className="font-bold text-slate-800">{item.period}</div>
                      <div className="text-slate-600 text-sm">{item.task}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 聯繫我們 */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">需要專業諮詢？</h2>
          <p className="text-primary-100 mb-6">我們的顧問團隊隨時為您提供一對一服務</p>
          <Link
            to="/user"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-primary-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            聯繫顧問
          </Link>
        </div>
      </section>
    </div>
  )
}
