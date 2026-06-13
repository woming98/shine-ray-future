import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Users, Target, Award, Heart, Phone, Mail,
  Clock, ArrowRight, MessageCircle, Calendar
} from 'lucide-react'

/**
 * 关于我们页面
 * 展示公司信息、团队介绍和联系方式
 */
export default function About() {
  const { t } = useTranslation()

  // 团队成员
  const team: Array<{
    name: string
    role: string
    credentials: string
    strengths: string
    image?: string
    avatar?: string
  }> = [
    {
      name: 'Fred 尤刚',
      role: 'DSE 英文老师',
      credentials: '爱丁堡大学语言学硕士 · 雅思 8.5',
      strengths: '全英文课堂，熟悉 DSE、A-level 与 IB 体系，擅长插班及名校备考',
      image: '/images/team/fred.jpg'
    },
    {
      name: 'Ray 余政睿',
      role: 'DSE 英文老师',
      credentials: '香港岭南大学硕士 · 雅思 8 分',
      strengths: '全英文授课，擅长考试策略，帮助学生应对 DSE 及高考英语',
      image: '/images/team/ray.jpg'
    },
    {
      name: 'Tia 许雅婷',
      role: 'DSE 英文 / 西史老师',
      credentials: '英语专业八级 · 曾任国际学校老师',
      strengths: '熟悉呈分试、插班叩门及 DSE 全流程，授课温和细心',
      image: '/images/team/tia.jpg'
    },
    {
      name: 'Perri 彭诗睿',
      role: 'DSE 英文老师',
      credentials: '香港中文大学硕士 · 浙江大学本科',
      strengths: '英语专业八级，擅长国际学校及香港学校考试辅导',
      image: '/images/team/perri.jpg'
    },
    {
      name: 'Richie 郑雍翰',
      role: 'DSE 英文老师',
      credentials: '香港城市大学语言学系 · 雅思 7.5',
      strengths: '语法功底扎实，善于构建英语语法框架与讲解语言逻辑',
      avatar: '郑'
    },
    {
      name: 'John',
      role: 'DSE 中文老师',
      credentials: '华东师范大学文学博士 · 10 年教学经验',
      strengths: 'DSE 资深中文专家，因材施教，精准把握考试要点',
      image: '/images/team/john.jpg'
    },
    {
      name: 'Nelson 丘沃铭',
      role: 'DSE 数学老师',
      credentials: '滑铁卢大学数学硕士 · 全额奖学金',
      strengths: '6 年教学经验，熟悉 DSE 与 AMC，擅长举一反三及灵活教学',
      image: '/images/team/nelson.jpg'
    },
    {
      name: 'Rose 罗时',
      role: 'DSE 数学老师',
      credentials: '香港中文大学数学及应用数学系',
      strengths: '多年全英文授课经验，善于化繁为简，教学严谨细致',
      avatar: '罗'
    },
    {
      name: 'Logan',
      role: 'DSE 物理老师',
      credentials: '美国东北大学硕士 · 武汉大学本科',
      strengths: '全英文授课，熟悉 HKDSE 体系，擅长中高阶培优教学',
      image: '/images/team/logan.jpg'
    },
    {
      name: 'Heine 李海宁',
      role: 'DSE 经济老师',
      credentials: '清华大学理科硕士 · 5 年教学经验',
      strengths: '熟悉 DSE、A-level 与 IGCSE，擅长及时发现并补足学习漏洞',
      image: '/images/team/heine.jpg'
    },
    {
      name: 'Jane 杨静仪',
      role: 'DSE BAFS 老师',
      credentials: '香港中文大学会计系 · HKICPA 资格',
      strengths: 'ACCA 全科通过，深耕 DSE 会计教学，帮助学生建立会计思维',
      avatar: '杨'
    },
    {
      name: 'Lily 肖敏',
      role: 'DSE 化学老师',
      credentials: '厦门大学硕士 · 国家奖学金',
      strengths: '6 年教学经验，熟悉 DSE、AMC 与 K12，教学严谨细心',
      image: '/images/team/lily.jpg'
    }
  ]

  // 公司价值观
  const values = [
    {
      icon: Target,
      title: '精准备考',
      description: '深度解析 DSE 考纲，针对性强化高频考点'
    },
    {
      icon: Heart,
      title: '因材施教',
      description: '以学生为中心，按基础与目标定制学习路线'
    },
    {
      icon: Award,
      title: '追求卓越',
      description: '持续创新教学方法，帮助学生突破学习瓶颈'
    },
    {
      icon: Users,
      title: '全程陪伴',
      description: '从课程规划、学习追踪到升学指导持续跟进'
    }
  ]

  // 教学优势
  const advantages = [
    { number: '01', title: '深度解析考纲', description: '紧贴 DSE 最新考纲与历届真题，精准把握考试方向。' },
    { number: '02', title: '名校师资团队', description: '师资来自港大、中大、科大及海外名校，具备丰富 DSE 教学经验。' },
    { number: '03', title: '个性化定制', description: '根据学生基础与目标，量身定制学习路线并补强薄弱环节。' },
    { number: '04', title: '成绩追踪管理', description: '通过定期测评、错题追踪与进度管理，让学习成效清晰可见。' },
    { number: '05', title: '深港教学资源', description: '整合香港校内教材、名校试卷及自研学习资源。' },
    { number: '06', title: '全程陪伴服务', description: '从插班咨询、课程规划到放榜后升学指导，全程持续跟进。' }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-navy-950 via-primary-900 to-navy-900 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('nav.about')}
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              专注香港 DSE 全科辅导与插班衔接，以定制教学和专业资源陪伴学生稳步成长
            </p>
          </motion.div>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">
                关于 <span className="gradient-text">莘睿未来</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  莘睿未来（Shine Ray Future）专注于香港 DSE 全科辅导与内地转港衔接，
                  以学生为中心，通过定制课程帮助学生夯实基础、提升成绩并适应香港教育体系。
                </p>
                <p>
                  课程覆盖英文、中文、数学 Core、M1、M2、物理、化学、生物、经济及 BAFS 共 10 大科目，
                  支持一对一精讲与 3–6 人精品小组课，并配套自研教材、模拟试卷及数字学习平台。
                </p>
                <p>
                  我们已累计服务超过 1,000 名学生，学生来自 45+ 所香港学校。团队通过定期测评、
                  错题追踪与学习进度管理，为学生提供透明、持续的学习支持。
                </p>
              </div>

              {/* 数据统计 */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-1">45+所</div>
                  <div className="text-sm text-slate-600">已服务香港学校学生</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-1">1000+</div>
                  <div className="text-sm text-slate-600">累计服务学生</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-1">5年</div>
                  <div className="text-sm text-slate-600">专业经验</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white relative overflow-hidden">
                {/* 装饰 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-500/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">我们的使命</h3>
                  <p className="text-primary-100 mb-8 leading-relaxed">
                    以专业、创新和用心的教学服务，帮助每位学生建立扎实的学科能力，
                    激发学习潜能，在 DSE 与升学道路上稳步前进。
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-6">我们的教学方式</h3>
                  <p className="text-primary-100 leading-relaxed">
                    结合一对一精讲、精品小组课、自研教学资源与香港原版教材，
                    按学生进度灵活调整课程，让每一次学习都有明确目标和反馈。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">核心价值观</h2>
            <p className="section-subtitle">我们秉持的服务理念</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 教学优势 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">我们的教学优势</h2>
            <p className="section-subtitle">从考纲研究到学习追踪，为学生提供完整的 DSE 学习支持</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card p-6"
              >
                <div className="text-sm font-bold text-primary-500 mb-4">{advantage.number}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{advantage.title}</h3>
                <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">专业团队</h2>
            <p className="section-subtitle">名校背景与丰富 DSE 教学经验，为每位学生提供针对性指导</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.06 }}
                className="card p-5 flex items-start gap-4 hover:-translate-y-1 transition-all"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name}老师`}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-primary-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{member.avatar}</span>
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-slate-700 text-sm font-medium mb-2 leading-relaxed">{member.credentials}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.strengths}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">{t('home.contactUs')}</h2>
            <p className="section-subtitle">随时欢迎您的咨询</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">咨询电话</h4>
                  <p className="text-slate-600">{t('footer.phone')}</p>
                </div>
              </div>

              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">电子邮箱</h4>
                  <p className="text-slate-600">{t('footer.email')}</p>
                </div>
              </div>

              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">工作时间</h4>
                  <p className="text-slate-600">周一至周五 9:00 - 18:00</p>
                  <p className="text-slate-600">周六 10:00 - 16:00</p>
                </div>
              </div>
            </motion.div>

            {/* 咨询表单 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">快速咨询</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        您的姓名
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                        placeholder="请输入姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        联系电话
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                        placeholder="请输入电话"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                      placeholder="请输入邮箱"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      孩子年级
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
                      <option>请选择年级</option>
                      <option>小一至小三</option>
                      <option>小四至小六</option>
                      <option>中一</option>
                      <option>中二</option>
                      <option>中三</option>
                      <option>中四至中六</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      咨询内容
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 resize-none"
                      placeholder="请简述您的需求..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    提交咨询
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 预约咨询 CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-primary-900 to-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              预约一对一咨询服务
            </h2>
            <p className="text-xl text-primary-200 mb-10">
              与我们的资深顾问面对面交流，获取个性化的升学方案
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/30 hover:bg-accent-600 transform hover:-translate-y-1 transition-all">
              <Calendar className="w-5 h-5" />
              立即预约
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
