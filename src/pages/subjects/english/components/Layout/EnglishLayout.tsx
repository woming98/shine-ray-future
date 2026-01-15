/**
 * 英文模块布局组件
 * 使用绿色/青色系，区别于数学模块的蓝色
 */

import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Home, Menu, X, BookOpen, PenTool, Headphones, Mic, Book, FileText, BarChart3, Award } from 'lucide-react';
import { useEnglishStore } from '../../store/useStore';
import { ENGLISH_TOPICS } from '../../constants/topics';

interface EnglishLayoutProps {
  children: ReactNode;
}

export function EnglishLayout({ children }: EnglishLayoutProps) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { skillProgress } = useEnglishStore();

  const getSkillProgress = (skillId: string) => {
    return skillProgress[skillId] || 0;
  };

  const navItems = [
    { path: '/subjects/english', icon: Home, label: '學習中心' },
    { path: '/subjects/english/reading', icon: BookOpen, label: '智能閱讀' },
    { path: '/subjects/english/writing', icon: PenTool, label: 'AI 寫作' },
    { path: '/subjects/english/listening', icon: Headphones, label: '聽力訓練' },
    { path: '/subjects/english/speaking', icon: Mic, label: '口語對練' },
    { path: '/subjects/english/vocabulary', icon: Book, label: '詞彙本' },
    { path: '/subjects/english/wrong-answers', icon: FileText, label: '錯題本' },
    { path: '/subjects/english/report', icon: BarChart3, label: '學習報告' },
    { path: '/subjects/english/samples', icon: Award, label: '範文庫' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* 顶部导航栏 */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-emerald-200/50 shadow-sm"
      >
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-emerald-100/50 transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5 text-emerald-700" /> : <Menu className="w-5 h-5 text-emerald-700" />}
            </button>
            
            <button
              onClick={() => navigate('/subjects')}
              className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">返回學科列表</span>
            </button>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <button
              onClick={() => navigate('/')}
              className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">主頁</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold">DSE 英文</span>
          </div>
        </div>
      </motion.nav>

      {/* 侧边栏 */}
      <AnimatePresence>
        {(sidebarOpen || typeof window !== 'undefined') && (
          <>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              />
            )}
            
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: sidebarOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 0 : -280) }}
              className={`fixed left-0 top-[120px] md:top-[136px] bottom-0 w-64 bg-white/90 backdrop-blur-md border-r border-emerald-200/50 shadow-lg z-40 overflow-y-auto
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-300/50 to-transparent" />
              
              <div className="p-4">
                <h3 className="text-xs text-emerald-600 uppercase tracking-wider mb-3 px-2 font-semibold">核心技能</h3>
                <nav className="space-y-1">
                  {ENGLISH_TOPICS.map((topic) => {
                    const progress = getSkillProgress(topic.id);
                    return (
                      <button
                        key={topic.id}
                        onClick={() => { navigate(`/subjects/english/${topic.id}`); setSidebarOpen(false); }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-200 group"
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform">{topic.icon}</span>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-medium">{topic.nameCN}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-1 bg-emerald-100 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                            <span className="text-xs text-emerald-600 font-medium">{progress}%</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>
                
                <div className="mt-6 pt-4 border-t border-emerald-200/50">
                  <h3 className="text-xs text-emerald-600 uppercase tracking-wider mb-3 px-2 font-semibold">學習工具</h3>
                  <nav className="space-y-1">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.path}
                          onClick={() => { navigate(item.path); setSidebarOpen(false); }}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-200"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 主内容区 */}
      <main className="relative pt-[120px] md:pt-[136px] lg:pl-64 min-h-screen">
        <div className="relative z-10 p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
