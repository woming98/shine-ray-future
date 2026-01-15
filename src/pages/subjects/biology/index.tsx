// DSE 生物學習模塊入口
// 整合自 DSE生物 獨立項目

import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';
import CellViewerPage from './pages/CellViewerPage';
import MicroscopePage from './pages/MicroscopePage';
import FlashcardsPage from './pages/FlashcardsPage';
import ProgressPage from './pages/ProgressPage';
import { topics } from './data/topics';
import { useStore } from './store/useStore';

// 生物模塊布局組件
function BiologyLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { progress } = useStore();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* 自然装饰背景 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* 柔和的圆形光晕效果 */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"
        />
        {/* 叶子装饰 */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 text-6xl opacity-20"
        >
          🍃
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -5, 5, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-16 text-5xl opacity-15"
        >
          🌿
        </motion.div>
      </div>

      {/* 頂部導航欄 - 自然风格 */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-green-200/50 shadow-sm"
      >
        {/* 柔和的底部边框 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* 移動端菜單按鈕 */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-green-100/50 transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5 text-green-700" /> : <Menu className="w-5 h-5 text-green-700" />}
            </button>
            
            <button
              onClick={() => navigate('/subjects')}
              className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">返回學科列表</span>
            </button>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <button
              onClick={() => navigate('/')}
              className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-green-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">主頁</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧬</span>
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">DSE 生物</span>
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
            
            {/* 側邊欄 - 自然风格 */}
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: sidebarOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 0 : -280) }}
              className={`fixed left-0 top-[120px] md:top-[136px] bottom-0 w-64 bg-white/90 backdrop-blur-md border-r border-green-200/50 shadow-lg z-40 overflow-y-auto
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
              {/* 柔和的右边框 */}
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-300/50 to-transparent" />
              
              <div className="p-4">
                <h3 className="text-xs text-green-600 uppercase tracking-wider mb-3 px-2 font-semibold">學習主題</h3>
                <nav className="space-y-1">
                  <button
                    onClick={() => { navigate('/subjects/biology'); setSidebarOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200"
                  >
                    <Home className="w-4 h-4" />
                    <span>學習中心</span>
                  </button>
                  
                  {topics.slice(0, 6).map((topic) => {
                    const isCompleted = progress.completedTopics.includes(topic.id);
                    const topicProgress = isCompleted ? 100 : topic.progress;
                    
                    return (
                      <button
                        key={topic.id}
                        onClick={() => { navigate(`/subjects/biology/topic/${topic.id}`); setSidebarOpen(false); }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200 group"
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform">{topic.icon}</span>
                        <div className="flex-1 text-left">
                          <p className="text-sm">{topic.titleCn}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-1 bg-green-100 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${topicProgress}%` }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                            <span className="text-xs text-green-600 font-medium">{topicProgress}%</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>
                
                <div className="mt-6 pt-4 border-t border-green-200/50">
                  <h3 className="text-xs text-green-600 uppercase tracking-wider mb-3 px-2 font-semibold">學習工具</h3>
                  <nav className="space-y-1">
                    <button
                      onClick={() => { navigate('/subjects/biology/cell-viewer'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200"
                    >
                      <span>🔬</span>
                      <span>3D細胞觀察</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/biology/microscope'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200"
                    >
                      <span>🔍</span>
                      <span>虛擬顯微鏡</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/biology/flashcards'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200"
                    >
                      <span>📚</span>
                      <span>閃卡學習</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/biology/progress'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200"
                    >
                      <span>📊</span>
                      <span>學習進度</span>
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
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}

// Biology 模塊主組件
export default function BiologyModule() {
  return (
    <BiologyLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/cell-viewer" element={<CellViewerPage />} />
        <Route path="/microscope" element={<MicroscopePage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/flashcards/:deckId" element={<FlashcardsPage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </BiologyLayout>
  );
}
