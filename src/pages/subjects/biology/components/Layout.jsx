import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Microscope, 
  BookOpen, 
  FlaskConical, 
  BarChart3, 
  Menu, 
  X
} from 'lucide-react'

const navItems = [
  { path: '/', label: 'Home', labelCn: '主頁', icon: Home },
  { path: '/cell-viewer', label: 'Cell Viewer', labelCn: '細胞觀察', icon: FlaskConical },
  { path: '/microscope', label: 'Microscope', labelCn: '顯微鏡', icon: Microscope },
  { path: '/flashcards', label: 'Flashcards', labelCn: '閃卡', icon: BookOpen },
  { path: '/progress', label: 'Progress', labelCn: '學習進度', icon: BarChart3 },
]

function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-bio-bg">
      {/* Header - Light theme with orange/blue accent */}
      <header className="bg-white sticky top-0 z-50 border-b-2 border-transparent" style={{ borderImage: 'linear-gradient(90deg, #f5a623, #1a73e8) 1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Shineray Future */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img 
                  src="/ShineRayFutureLogo.jpg" 
                  alt="莘睿未来 Shineray Future" 
                  className="h-10 w-auto"
                />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-lg text-bio-dark group-hover:text-bio-primary transition-colors">
                  DSE Biology
                </h1>
                <p className="text-xs text-bio-primary">HKDSE 生物學習平台</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive 
                        ? 'text-bio-primary' 
                        : 'text-bio-gray hover:text-bio-dark hover:bg-bio-primary/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.labelCn}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-bio-primary/10 rounded-lg border border-bio-primary/30"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-bio-dark hover:bg-bio-primary/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 overflow-hidden bg-white"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive 
                          ? 'bg-bio-primary/10 text-bio-primary border border-bio-primary/30' 
                          : 'text-bio-gray hover:bg-gray-50 hover:text-bio-dark'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.labelCn}</span>
                      <span className="text-sm opacity-60">({item.label})</span>
                    </Link>
                  )
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer - Light theme */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-bio-gray">
              <img src="/ShineRayFutureLogo.jpg" alt="莘睿未来" className="h-8 w-auto" />
              <span className="text-sm">HKDSE Biology Learning Platform</span>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-bio-gray">
                Powered by <span className="text-bio-primary font-medium">莘睿未来 Shineray Future</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                © 2026 All Rights Reserved | Built for Hong Kong DSE Students
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
