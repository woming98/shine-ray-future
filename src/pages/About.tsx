import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Users, Target, Award, Heart, Phone, Mail, MapPin,
  Clock, ArrowRight, MessageCircle, Calendar
} from 'lucide-react'

/**
 * 关于我们页面
 * 展示公司信息、团队介绍和联系方式
 */
export default function About() {
  const { t } = useTranslation()

  // 团队成员
  const team = [
    {
      name: '张教授',
      role: '首席教育顾问',
      description: '20年香港教育经验，前知名中学校长',
      avatar: '张'
    },
    {
      name: '李博士',
      role: '学术总监',
      description: '香港大学教育学博士，专注升学研究',
      avatar: '李'
    },
    {
      name: '王老师',
      role: '英语测评专家',
      description: 'TESOL认证，10年英语教学经验',
      avatar: '王'
    },
    {
      name: '陈老师',
      role: '数学教研组长',
      description: '奥数金牌教练，多年竞赛培训经验',
      avatar: '陈'
    }
  ]

  // 公司价值观
  const values = [
    {
      icon: Target,
      title: '专业精准',
      description: '深耕香港教育，精准匹配学校'
    },
    {
      icon: Heart,
      title: '用心服务',
      description: '以学生为中心，提供贴心服务'
    },
    {
      icon: Award,
      title: '追求卓越',
      description: '不断提升服务质量，追求最佳效果'
    },
    {
      icon: Users,
      title: '协作共赢',
      description: '与家长紧密合作，共创美好未来'
    }
  ]

  // 发展历程
  const milestones = [
    { year: '2021', event: '公司成立于香港' },
    { year: '2022', event: '服务学生突破1000人' },
    { year: '2023', event: '推出在线测评系统' },
    { year: '2024', event: '合作学校达500所' },
    { year: '2025', event: '服务覆盖大湾区' },
    { year: '2026', event: '成为行业领先品牌' }
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
              启迪智慧，照亮未来 — 我们致力于为每一位学生提供最专业的香港学校插班服务
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
                  莘睿未来（Shine Ray Future）成立于2021年，是一家专注于香港学校插班服务的教育咨询公司。
                  我们的名字寓意着"培育莘莘学子，睿智规划未来"。
                </p>
                <p>
                  我们拥有一支由资深教育专家、前学校管理人员和升学顾问组成的专业团队，
                  深入了解香港各类学校的特点和招生要求，能够为家长和学生提供最精准的择校建议。
                </p>
                <p>
                  经过多年发展，我们已成功帮助超过10,000名学生顺利进入心仪的香港学校，
                  建立了良好的口碑和广泛的合作网络。
                </p>
              </div>

              {/* 数据统计 */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                  <div className="text-sm text-slate-600">合作学校</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-1">10000+</div>
                  <div className="text-sm text-slate-600">服务学生</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                  <div className="text-sm text-slate-600">成功率</div>
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
                    为每一个追求优质教育的家庭提供专业、透明、高效的香港学校插班服务，
                    帮助学生找到最适合的教育之路，成就精彩人生。
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-6">我们的愿景</h3>
                  <p className="text-primary-100 leading-relaxed">
                    成为大湾区最受信赖的香港升学服务品牌，
                    让每一位学生都能享受到优质的教育资源。
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

      {/* 发展历程 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">发展历程</h2>
            <p className="section-subtitle">我们的成长足迹</p>
          </motion.div>

          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card p-6 inline-block">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <div className="text-slate-700">{milestone.event}</div>
                    </div>
                  </div>
                  
                  {/* 时间点 */}
                  <div className="hidden md:block w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg relative z-10" />
                  
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
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
            <p className="section-subtitle">资深教育专家为您服务</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:-translate-y-2 transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.avatar}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.description}</p>
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
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">办公地址</h4>
                  <p className="text-slate-600">{t('footer.address')}</p>
                </div>
              </div>

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
