import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  GraduationCap, BookOpen, Calculator, ArrowRight,
  Star, Users, Award, CheckCircle, Quote, ChevronRight, Sparkles
} from 'lucide-react'
import DseCountdown from '../components/DseCountdown'
import ExamSchedule from '../components/ExamSchedule'

/**
 * 首页组件
 * 展示品牌形象、DSE信息、核心服务和成功案例
 */
export default function Home() {
  const { t } = useTranslation()

  // 核心服务数据
  const services = [
    {
      icon: GraduationCap,
      title: '插班服務',
      description: '香港學校榜單、插班資訊、入學測試一站式服務',
      link: '/admission',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      icon: BookOpen,
      title: '學科學習',
      description: 'DSE 各科目互動學習平台，助您高效備考',
      link: '/subjects',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
    },
    {
      icon: Calculator,
      title: '升學信息',
      description: 'JUPAS 計分規則、專業錄取要求全面指南',
      link: '/university',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
    },
  ]

  // 统计数据
  const stats = [
    { value: '500+', label: '合作学校', icon: GraduationCap },
    { value: '10000+', label: '服务学生', icon: Users },
    { value: '98%', label: '成功率', icon: Award },
    { value: '5年', label: '专业经验', icon: Star },
  ]

  // 成功案例
  const testimonials = [
    {
      content: '感谢莘睿未来的专业服务，孩子成功进入了理想的国际学校。老师们非常耐心，给了我们很多有价值的建议。',
      author: '张女士',
      role: '小六家长',
      avatar: '张',
    },
    {
      content: '英文测试系统非常专业，帮助我们准确评估了孩子的水平，针对性地进行备考，最终取得了满意的成绩。',
      author: '李先生',
      role: '中二家长',
      avatar: '李',
    },
    {
      content: '从咨询到入学，全程有专人跟进，服务非常周到。特别是学校推荐很精准，节省了我们很多时间。',
      author: '王女士',
      role: '中一家长',
      avatar: '王',
    },
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
            <span className="text-white/90 text-sm font-medium">{t('home.slogan')}</span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            <span className="block">{t('home.heroTitlePart1')}</span>
            <span className="block mt-2 bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-clip-text text-transparent">
              {t('home.heroTitlePart2')}
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-100/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t('home.heroSubtitle')}
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/admission"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 transform hover:-translate-y-1 transition-all duration-300"
            >
              插班服務
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/subjects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              學科學習
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
            <h2 className="section-title mb-4">DSE 2026 考試資訊</h2>
            <p className="section-subtitle">
              掌握考試時間，提前做好準備
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
            <h2 className="section-title mb-4">{t('home.featuredServices')}</h2>
            <p className="section-subtitle">
              专业团队为您提供全方位的香港升学插班与学科学习服务
            </p>
          </motion.div>

          {/* 服务卡片 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
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
                我们拥有丰富的香港教育资源和专业团队，致力于为每一位学生提供高质量的升学插班与学科学习服务。
              </p>

              {/* 特点列表 */}
              <div className="space-y-4">
                {[
                  '深耕香港教育领域5年以上',
                  '与500+香港学校建立合作关系',
                  '专业测评系统精准定位',
                  '一对一个性化升学规划',
                  '全程跟进直至成功入学',
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
                  了解更多关于我们
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
                        <h4 className="text-white font-semibold">专业团队</h4>
                        <p className="text-white/70 text-sm">资深教育顾问</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm">
                      我们的团队由资深教育专家组成，熟悉香港各类学校的招生要求和特点。
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">高成功率</h4>
                        <p className="text-white/70 text-sm">98%入学成功</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm">
                      凭借丰富经验和专业指导，我们帮助众多学生成功进入理想学校。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 家长好评 Testimonials Section ===== */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">{t('home.testimonials')}</h2>
            <p className="section-subtitle">
              听听家长们怎么说
            </p>
          </motion.div>

          {/* 评价卡片 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 relative"
              >
                {/* 引号装饰 */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
                
                {/* 评价内容 */}
                <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
                
                {/* 用户信息 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>

                {/* 星级评分 */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              立即联系我们，获取免费咨询，让专业团队为您规划最佳方案
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/user"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/30 hover:bg-accent-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                立即諮詢
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/admission/rankings"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                瀏覽學校榜單
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
