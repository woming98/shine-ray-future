import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  GraduationCap, BookOpen, Calculator, ArrowRight,
  Star, Users, CheckCircle, ChevronRight, Sparkles, ClipboardCheck
} from 'lucide-react'
import DseCountdown from '../components/DseCountdown'
import ExamSchedule from '../components/ExamSchedule'
import { DSE_EXAM_YEAR } from '../data/dseSchedule'

/**
 * 首页组件
 * 展示品牌形象、DSE信息、核心服务和成功案例
 */
export default function Home() {
  // 核心服务数据
  const services = [
    {
      icon: GraduationCap,
      title: '香港插班规划',
      description: '用学校榜单、申请节奏和材料清单，帮家长先判断目标学校与申请路径。',
      link: '/admission',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      icon: ClipboardCheck,
      title: 'DSE 衔接测评',
      description: '通过英文与数学入学测评，定位学生与香港课程之间的知识差距。',
      link: '/admission/test',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
    },
    {
      icon: BookOpen,
      title: 'DSE 全科辅导',
      description: '以一对一和 3-6 人小班课配合平台题库、错题本与学习进度追踪。',
      link: '/subjects',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
    },
    {
      icon: Calculator,
      title: 'JUPAS 升学规划',
      description: '结合 JUPAS 计分、专业要求和目标院校，提前制定选科与冲刺策略。',
      link: '/university',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
    },
  ]

  // 统计数据
  const stats = [
    { value: '45+所', label: '已服务香港学校学生', icon: GraduationCap },
    { value: '1000+', label: '累计服务学生', icon: Users },
    { value: '10科', label: 'DSE 科目规划覆盖', icon: BookOpen },
    { value: '4步', label: '测评到跟进闭环', icon: Star },
  ]

  const processSteps = [
    { label: '免费初筛', detail: '确认年级、目标学校与当前课程体系' },
    { label: '英数测评', detail: '用入学测试定位知识断点和语言短板' },
    { label: '学习方案', detail: '匹配一对一或 3-6 人小班课路线' },
    { label: '进度追踪', detail: '用平台记录题库、错题和阶段反馈' },
  ]

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="overflow-hidden">
      {/* ===== 英雄区域 Hero Section ===== */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-950 via-primary-900 to-navy-900 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          {/* 网格背景 */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* 光晕效果 */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl" />
          
          {/* 浮动装饰元素 */}
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-20 h-20 border border-primary-400/20 rounded-2xl"
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-20 w-16 h-16 bg-accent-500/10 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* 品牌标语 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-sm font-medium">香港插班 · DSE 衔接 · 全科辅导</span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            <span className="block">先测清差距</span>
            <span className="block mt-2 bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-clip-text text-transparent">
              再规划香港升学路径
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-100/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            莘睿未来为内地转港与 DSE 备考家庭提供插班咨询、英文/数学衔接测评、DSE 全科辅导和可追踪的数字学习平台。
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/admission/test"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 transform hover:-translate-y-1 transition-all duration-300"
            >
              开始英数测评
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/admission"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              查看插班路径
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* 滚动提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
            >
              <div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 统计数据 Stats Section ===== */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-2xl mb-4">
                  <stat.icon className="w-7 h-7 text-primary-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== DSE 倒计时和考试安排 ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">DSE {DSE_EXAM_YEAR} 考試資訊</h2>
            <p className="section-subtitle">
              使用官方考试时间作为长期备考节奏参考，提前安排课程与冲刺节点
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 倒计时 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <DseCountdown />
            </motion.div>

            {/* 考试时间表 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ExamSchedule />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 核心服务 Services Section ===== */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">从获客测评到课程交付</h2>
            <p className="section-subtitle">
              先用测评和择校信息降低决策成本，再用课程与学习平台持续跟进
            </p>
          </motion.div>

          {/* 服务卡片 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={service.link}
                  className="group block h-full"
                >
                  <div className="card p-8 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    {/* 图标 */}
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                    
                    {/* 标题 */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* 描述 */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* 链接 */}
                    <div className="flex items-center gap-2 text-primary-600 font-medium">
                      <span>了解更多</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 为什么选择我们 Why Choose Us ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <div key={step.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                  <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.label}</h3>
                  <p className="text-sm leading-6 text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title mb-6">
                为什么选择
                <span className="gradient-text"> 莘睿未来</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                我们把“插班咨询”和“DSE 学科辅导”连在一起：先判断学校与课程差距，再安排可落地的衔接训练和阶段反馈。
              </p>

              {/* 特点列表 */}
              <div className="space-y-4">
                {[
                  '围绕香港插班常见英数入学测评建立诊断入口',
                  '港大、中大、科大及海外名校背景师资',
                  '一对一精讲与 3–6 人精品小组课灵活选择',
                  '数学、物理、BAFS 等学科平台已可用于日常训练',
                  '定期测评、错题追踪与阶段学习反馈',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <Link to="/about" className="btn-primary">
                  了解莘睿教学体系
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </motion.div>

            {/* 右侧图片/装饰 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 overflow-hidden">
                {/* 装饰元素 */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                {/* 内容卡片 */}
                <div className="relative z-10 space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">个性化教学</h4>
                        <p className="text-white/70 text-sm">按基础与目标定制路线</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm">
                      一对一精讲精准补强薄弱环节，精品小组课兼顾互动讨论与稳步提升。
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">自研学习资源</h4>
                        <p className="text-white/70 text-sm">教材、题库与进度追踪</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm">
                      结合 DSE 考纲、历届真题与互动学习平台，让知识漏洞和学习进度清晰可见。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-navy-900 via-primary-900 to-navy-950 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              准备好开启孩子的
              <span className="text-accent-400">香港求学之路</span>了吗？
            </h2>
            <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto">
              先完成一次英数衔接测评，再由顾问和学科老师给出插班与 DSE 备考建议
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/admission/test"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/30 hover:bg-accent-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                预约测评
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                联系顾问
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
