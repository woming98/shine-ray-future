/**
 * 网站顶部导航栏组件
 * 包含Logo、多级下拉导航菜单、语言切换和用户入口
 */

import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronDown, ChevronRight, Globe, 
  GraduationCap, BookOpen, Calculator, Home,
  Trophy, FileText, ClipboardCheck, Atom, Microscope,
  Languages, Sigma, FlaskConical, TrendingUp, Receipt,
  BookMarked, Crown, Lock
} from 'lucide-react'

// 导航配置类型
interface NavItem {
  path?: string
  label: string
  icon: React.ElementType
  children?: {
    path: string
    label: string
    icon: React.ElementType
    description?: string
    status?: 'active' | 'coming'
  }[]
}

export default function Header() {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isLightHeader = true // 顶部导航固定白底：统一走浅色样式，避免深色背景下logo/文字不协调

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 导航链接配置
  const navLinks: NavItem[] = [
    { path: '/', label: '首頁', icon: Home },
    { 
      label: '插班',
      icon: GraduationCap,
      children: [
        { path: '/admission/rankings', label: '學校榜單', icon: Trophy, description: 'DSE 成績 TOP50' },
        { path: '/admission/info', label: '插班資訊', icon: FileText, description: '申請流程指南' },
        { path: '/admission/test', label: '入學測試', icon: ClipboardCheck, description: '英文/數學評估' },
      ]
    },
    {
      label: '學科學習',
      icon: BookOpen,
      path: '/subjects',
      children: [
        {
          path: '/subjects/physics',
          label: '物理',
          icon: Atom,
          description: '互動學習平台',
          status: 'active',
        },
        { path: '/subjects/biology', label: '生物', icon: Microscope, description: '3D細胞模型', status: 'coming' },
        { path: '/subjects/english', label: '英文', icon: BookOpen, status: 'coming' },
        { path: '/subjects/math', label: '數學', icon: Calculator, status: 'coming' },
        { path: '/subjects/chinese', label: '語文', icon: Languages, status: 'coming' },
        { path: '/subjects/m1', label: 'M1', icon: Sigma, status: 'coming' },
        { path: '/subjects/m2', label: 'M2', icon: Sigma, status: 'coming' },
        { path: '/subjects/chemistry', label: '化學', icon: FlaskConical, status: 'coming' },
        { path: '/subjects/economics', label: '經濟', icon: TrendingUp, status: 'coming' },
        { path: '/subjects/bafs', label: '會計', icon: Receipt, status: 'coming' },
      ]
    },
    {
      label: '升學信息',
      icon: BookMarked,
      children: [
        { path: '/university/jupas', label: 'JUPAS 計分', icon: Calculator, description: '分數計算器' },
        { path: '/university/requirements', label: '錄取要求', icon: BookMarked, description: '專業入學標準' },
      ]
    },
  ]

  // 语言选项
  const languages = [
    { code: 'zh-CN', label: '简体中文' },
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'en', label: 'English' },
  ]

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
    setIsLangMenuOpen(false)
  }

  const currentLangLabel = languages.find(l => l.code === i18n.language)?.label || '繁體中文'

  // 检查路径是否匹配
  const isPathActive = (path?: string, children?: NavItem['children']) => {
    if (path) return location.pathname === path
    if (children) return children.some(child => location.pathname.startsWith(child.path))
    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-lg shadow-slate-200/50' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src="/ShineRayFutureLogo.jpg"
              alt="莘睿未来 Shine Ray Future"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`h-8 md:h-12 w-auto transition-opacity ${
                isScrolled 
                  ? 'opacity-100 drop-shadow-sm' 
                  : 'opacity-100'
              }`}
              loading="eager"
            />
          </Link>

          {/* 桌面端导航菜单 */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => {
              const isActive = isPathActive(link.path, link.children)
              const hasChildren = link.children && link.children.length > 0

              if (hasChildren) {
                return (
                  <div key={link.label} className="relative">
                    <div
                      className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-1 ${
                        isActive
                          ? (isScrolled || isLightHeader) ? 'text-primary-600' : 'text-white'
                          : (isScrolled || isLightHeader)
                            ? 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.path ? (
                        <Link to={link.path} className="flex items-center gap-1 hover:opacity-90">
                          <link.icon size={16} />
                          {link.label}
                        </Link>
                      ) : (
                        <>
                          <link.icon size={16} />
                          <span>{link.label}</span>
                        </>
                      )}
                      <button
                        type="button"
                        aria-label={`Open ${link.label} menu`}
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="ml-0.5 p-0.5 rounded hover:bg-black/5"
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 top-full mt-2 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden min-w-[220px]"
                        >
                          <div className="p-2">
                            {link.children!.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                aria-disabled={child.status === 'coming'}
                                onClick={(e) => {
                                  setOpenDropdown(null)
                                  if (child.status === 'coming') {
                                    e.preventDefault()
                                    navigate('/subjects')
                                  }
                                }}
                                className={`flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                                  location.pathname === child.path
                                    ? 'bg-primary-50 text-primary-600'
                                    : child.status === 'coming'
                                      ? 'text-slate-400 bg-slate-50 cursor-not-allowed'
                                      : 'text-slate-600 hover:bg-slate-50'
                                } ${child.status === 'coming' ? 'pointer-events-auto' : ''}`}
                              >
                                <child.icon size={18} className="mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="font-medium text-sm flex items-center gap-2">
                                    {child.label}
                                    {child.status === 'coming' && (
                                      <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                                        <Lock size={10} />
                                        未上线
                                      </span>
                                    )}
                                  </div>
                                  {child.description && (
                                    <div className="text-xs text-slate-400">{child.description}</div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={link.path}
                  to={link.path!}
                  className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? (isScrolled || isLightHeader) ? 'text-primary-600' : 'text-white'
                      : (isScrolled || isLightHeader)
                        ? 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <link.icon size={16} />
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                        (isScrolled || isLightHeader) ? 'bg-primary-500' : 'bg-accent-400'
                      }`}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* 右侧操作区 */}
          <div className="flex items-center gap-3">
            {/* 语言切换 */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  (isScrolled || isLightHeader)
                    ? 'text-slate-600 hover:bg-slate-100'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <Globe size={16} />
                <span className="hidden sm:inline">{currentLangLabel}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden min-w-[140px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-2.5 text-left text-sm hover:bg-primary-50 transition-colors ${
                          i18n.language === lang.code
                            ? 'text-primary-600 bg-primary-50 font-medium'
                            : 'text-slate-600'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 用户中心按钮 */}
            <Link
              to="/user"
              className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                (isScrolled || isLightHeader)
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/30'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <Crown size={16} />
              會員中心
            </Link>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                (isScrolled || isLightHeader)
                  ? 'text-slate-600 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const hasChildren = link.children && link.children.length > 0

                if (hasChildren) {
                  return (
                    <div key={link.label} className="space-y-1">
                      {link.path ? (
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between gap-3 px-4 py-2 rounded-xl text-slate-700 text-sm font-semibold hover:bg-slate-50"
                        >
                          <span className="flex items-center gap-3">
                            <link.icon size={18} />
                            {link.label}
                          </span>
                          <ChevronRight size={16} className="text-slate-400" />
                        </Link>
                      ) : (
                        <div className="flex items-center gap-3 px-4 py-2 text-slate-400 text-sm font-medium">
                          <link.icon size={18} />
                          {link.label}
                        </div>
                      )}
                      <div className="pl-4 space-y-1">
                        {link.children!.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            aria-disabled={child.status === 'coming'}
                            onClick={(e) => {
                              setIsMobileMenuOpen(false)
                              if (child.status === 'coming') {
                                e.preventDefault()
                                navigate('/subjects')
                              }
                            }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                              location.pathname === child.path
                                ? 'bg-primary-50 text-primary-600'
                                : child.status === 'coming'
                                  ? 'text-slate-400 bg-slate-50 cursor-not-allowed'
                                  : 'text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <child.icon size={18} />
                            <span className="flex items-center gap-2">
                              {child.label}
                              {child.status === 'coming' && (
                                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                                  <Lock size={10} />
                                  未上线
                                </span>
                              )}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                      location.pathname === link.path
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <link.icon size={20} />
                    {link.label}
                  </Link>
                )
              })}
              
              {/* 移动端用户中心按钮 */}
              <Link
                to="/user"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 mt-4 bg-primary-600 text-white rounded-xl font-medium"
              >
                <Crown size={20} />
                會員中心
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
