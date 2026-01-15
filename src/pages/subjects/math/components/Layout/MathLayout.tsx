/**
 * 数学模块布局组件
 * 参考物理模块，但使用更明亮的颜色风格
 */

import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useMathStore } from '../../store/useStore';
import { MATH_TOPICS } from '../../constants/topics';

interface MathLayoutProps {
  children: ReactNode;
}

export function MathLayout({ children }: MathLayoutProps) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { topicProgress } = useMathStore();

  // 获取主题进度
  const getTopicProgress = (topicId: string): number => {
    return topicProgress[topicId] || 0;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* 背景层：柔和的网格纹理 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      {/* 柔和的圆形光晕 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* 頂部導航欄 */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-blue-200/50 shadow-sm"
      >
        <div className="relative max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* 移動端菜單按鈕 */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5 text-blue-600" /> : <Menu className="w-5 h-5 text-blue-600" />}
            </button>
            
            <button
              onClick={() => navigate('/subjects')}
              className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">返回學科列表</span>
            </button>
            <span className="text-blue-300 hidden sm:inline">|</span>
            <button
              onClick={() => navigate('/')}
              className="hidden sm:flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">主頁</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔢</span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">DSE 數學</span>
          </div>
        </div>
      </motion.nav>

      {/* 側邊欄 - 桌面端常駐，移動端抽屜 */}
      <AnimatePresence>
        {(sidebarOpen || typeof window !== 'undefined') && (
          <>
            {/* 移動端遮罩 */}
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              />
            )}
            
            {/* 側邊欄 */}
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: sidebarOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 0 : -280) }}
              className={`fixed left-0 top-[120px] md:top-[136px] bottom-0 w-64 bg-white/90 backdrop-blur-md border-r border-blue-200/50 shadow-lg z-40 overflow-y-auto
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
              <div className="p-4">
                <h3 className="text-xs text-blue-600 uppercase tracking-wider mb-3 px-2 font-semibold">數學範疇</h3>
                <nav className="space-y-1">
                  <button
                    onClick={() => { navigate('/subjects/math'); setSidebarOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:text-blue-800 hover:bg-blue-100 transition-all duration-200 border border-transparent hover:border-blue-200/50"
                  >
                    <Home className="w-4 h-4" />
                    <span>學習中心</span>
                  </button>
                  
                  {MATH_TOPICS.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => { navigate(`/subjects/math/topic/${topic.id}`); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:text-blue-800 hover:bg-blue-100 transition-all duration-200 border border-transparent hover:border-blue-200/50 group"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">{topic.icon}</span>
                      <div className="flex-1 text-left">
                        <p className="text-sm">{topic.nameCN}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1 bg-blue-200 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${getTopicProgress(topic.id)}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                          <span className="text-xs text-blue-600 font-medium">{getTopicProgress(topic.id)}%</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>
                
                <div className="mt-6 pt-4 border-t border-blue-200/50">
                  <h3 className="text-xs text-blue-600 uppercase tracking-wider mb-3 px-2 font-semibold">學習工具</h3>
                  <nav className="space-y-1">
                    <button
                      onClick={() => { navigate('/subjects/math/practice'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:text-blue-800 hover:bg-blue-100 transition-all duration-200 border border-transparent hover:border-blue-200/50"
                    >
                      <span>📝</span>
                      <span>智能練習</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/math/mc'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:text-blue-800 hover:bg-blue-100 transition-all duration-200 border border-transparent hover:border-blue-200/50"
                    >
                      <span>⚡</span>
                      <span>MC 提速專區</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/math/geometry'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:text-blue-800 hover:bg-blue-100 transition-all duration-200 border border-transparent hover:border-blue-200/50"
                    >
                      <span>📐</span>
                      <span>幾何可視化</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/math/report'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:text-blue-800 hover:bg-blue-100 transition-all duration-200 border border-transparent hover:border-blue-200/50"
                    >
                      <span>📊</span>
                      <span>學習報告</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/math/templates'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:text-blue-800 hover:bg-blue-100 transition-all duration-200 border border-transparent hover:border-blue-200/50"
                    >
                      <span>📚</span>
                      <span>解釋題範本</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/math/wrong-answers'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:text-blue-800 hover:bg-blue-100 transition-all duration-200 border border-transparent hover:border-blue-200/50"
                    >
                      <span>📖</span>
                      <span>錯題本</span>
                    </button>
                  </nav>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 主內容區 */}
      <main className="relative pt-[120px] md:pt-[136px] lg:pl-64 min-h-screen">
        <div className="relative z-10 p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
