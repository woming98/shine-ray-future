import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  Mail, Phone, MapPin, 
  Facebook, Instagram, Youtube, MessageCircle,
  GraduationCap, BookOpen, Calculator, Languages, Sigma, Atom, FlaskConical, Microscope, TrendingUp, Receipt, User
} from 'lucide-react'

/**
 * 网站底部页脚组件
 * 包含联系信息、快速链接和社交媒体
 */
export default function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { path: '/subjects/math', label: '数学', icon: Calculator },
    { path: '/subjects/english', label: '英语', icon: BookOpen },
    { path: '/subjects/chinese', label: '语文', icon: Languages },
    { path: '/subjects/m1', label: 'M1', icon: Sigma },
    { path: '/subjects/m2', label: 'M2', icon: Sigma },
    { path: '/subjects/physics', label: '物理', icon: Atom },
    { path: '/subjects/chemistry', label: '化学', icon: FlaskConical },
    { path: '/subjects/biology', label: '生物', icon: Microscope },
    { path: '/subjects/economics', label: '经济', icon: TrendingUp },
    { path: '/subjects/bafs', label: '会计', icon: Receipt },
  ]

  const serviceLinks = [
    { path: '/admission', label: '插班', icon: GraduationCap },
    { path: '/subjects', label: '学科学习', icon: BookOpen },
    { path: '/university', label: '升学信息', icon: Calculator },
    { path: '/user', label: '会员中心', icon: User },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: MessageCircle, href: '#', label: 'WeChat' },
  ]

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-100">
      {/* 主要内容区 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 品牌信息 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/ShineRayFutureLogo_transparent.png" 
                alt="莘睿未来 Shine Ray Future"
                className="h-12 md:h-16 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              启迪智慧，照亮未来。我们致力于为家长和学生提供最专业的香港学校插班服务，
              助力每一个孩子找到最适合的教育之路。
            </p>
            {/* 社交媒体 */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 text-slate-500 hover:bg-slate-100 hover:text-primary-600 rounded-full transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-accent-400 rounded-full"></div>
              快速链接
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors group"
                  >
                    <link.icon size={16} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 服务项目 */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-accent-400 rounded-full"></div>
              服务项目
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors group"
                  >
                    <service.icon size={16} className="group-hover:translate-x-1 transition-transform" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-accent-400 rounded-full"></div>
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-accent-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">地址</p>
                  <p className="text-slate-700">{t('footer.address')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-accent-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">邮箱</p>
                  <a href={`mailto:${t('footer.email')}`} className="text-slate-700 hover:text-primary-600 transition-colors">
                    {t('footer.email')}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-accent-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">电话</p>
                  <a href={`tel:${t('footer.phone')}`} className="text-slate-700 hover:text-primary-600 transition-colors">
                    {t('footer.phone')}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 底部版权信息 */}
      <div className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-primary-600 transition-colors">隐私政策</a>
              <a href="#" className="hover:text-primary-600 transition-colors">使用条款</a>
              <a href="#" className="hover:text-primary-600 transition-colors">网站地图</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
