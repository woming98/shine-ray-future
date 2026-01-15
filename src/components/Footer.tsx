import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  Mail, Phone, MapPin, 
  Facebook, Instagram, Youtube, MessageCircle,
  GraduationCap, BookOpen, Calculator, FileText
} from 'lucide-react'

/**
 * 网站底部页脚组件
 * 包含联系信息、快速链接和社交媒体
 */
export default function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { path: '/schools', label: t('nav.schools'), icon: GraduationCap },
    { path: '/english-test', label: t('nav.englishTest'), icon: BookOpen },
    { path: '/math-test', label: t('nav.mathTest'), icon: Calculator },
    { path: '/about', label: t('nav.about'), icon: FileText },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: MessageCircle, href: '#', label: 'WeChat' },
  ]

  return (
    <footer className="bg-gradient-to-br from-navy-900 via-primary-900 to-navy-950 text-white">
      {/* 主要内容区 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 品牌信息 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/ShineRayFutureLogo.jpg" 
                alt="莘睿未来 Shine Ray Future"
                className="h-12 md:h-16 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
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
                  className="w-10 h-10 bg-white/10 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
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
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-primary-200 hover:text-accent-400 transition-colors group"
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
            <ul className="space-y-3 text-primary-200">
              <li className="hover:text-accent-400 transition-colors cursor-pointer">学校信息咨询</li>
              <li className="hover:text-accent-400 transition-colors cursor-pointer">入学申请指导</li>
              <li className="hover:text-accent-400 transition-colors cursor-pointer">能力测评服务</li>
              <li className="hover:text-accent-400 transition-colors cursor-pointer">升学规划建议</li>
              <li className="hover:text-accent-400 transition-colors cursor-pointer">面试培训辅导</li>
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
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-sm text-primary-300">地址</p>
                  <p className="text-primary-100">{t('footer.address')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-sm text-primary-300">邮箱</p>
                  <a href={`mailto:${t('footer.email')}`} className="text-primary-100 hover:text-accent-400 transition-colors">
                    {t('footer.email')}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-sm text-primary-300">电话</p>
                  <a href={`tel:${t('footer.phone')}`} className="text-primary-100 hover:text-accent-400 transition-colors">
                    {t('footer.phone')}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 底部版权信息 */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-300 text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-300">
              <a href="#" className="hover:text-accent-400 transition-colors">隐私政策</a>
              <a href="#" className="hover:text-accent-400 transition-colors">使用条款</a>
              <a href="#" className="hover:text-accent-400 transition-colors">网站地图</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
