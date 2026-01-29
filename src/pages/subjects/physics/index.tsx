// DSE Physics 學習模塊入口
// 整合自 DSE-Physics 獨立項目

import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import TopicPage from './pages/TopicPage';
import QuizPage from './pages/QuizPage';
import ExercisePage from './pages/ExercisePage';
import ForceMotionQuizPage from './pages/ForceMotionQuizPage';
import AchievementsPage from './pages/AchievementsPage';
import WrongAnswersPage from './pages/WrongAnswersPage';
import { useStore } from './store/useStore';
import { PHYSICS_TOPICS } from './constants/topics';

// 簡化的 Physics Layout - 不使用原有的複雜 Layout
function SimplePhysicsLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { getTopicProgress } = useStore();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
      {/* 背景层：网格纹理 */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      {/* 动态光晕效果 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* 頂部導航欄 */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-blue-500/30 shadow-lg shadow-blue-500/10"
      >
        {/* 发光底部线 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* 移動端菜單按鈕 */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5 text-blue-400" />}
            </button>
            
            <button
              onClick={() => navigate('/subjects')}
              className="flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">返回學科列表</span>
            </button>
            <span className="text-blue-500/50 hidden sm:inline">|</span>
            <button
              onClick={() => navigate('/')}
              className="hidden sm:flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">主頁</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔬</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">DSE 物理</span>
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
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              />
            )}
            
            {/* 側邊欄 */}
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: sidebarOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 0 : -280) }}
              className={`fixed left-0 top-[120px] md:top-[136px] bottom-0 w-64 bg-slate-900/80 backdrop-blur-xl border-r border-blue-500/30 shadow-2xl z-40 overflow-y-auto
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
              {/* 发光右边框 */}
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
              
              <div className="p-4">
                <h3 className="text-xs text-blue-400 uppercase tracking-wider mb-3 px-2 font-semibold">物理主題</h3>
                <nav className="space-y-1">
                  <button
                    onClick={() => { navigate('/subjects/physics'); setSidebarOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-200 border border-transparent hover:border-blue-500/30"
                  >
                    <Home className="w-4 h-4" />
                    <span>學習中心</span>
                  </button>
                  
                  {PHYSICS_TOPICS.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => { navigate(`/subjects/physics/topic/${topic.id}`); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-200 border border-transparent hover:border-blue-500/30 group"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">{topic.icon}</span>
                      <div className="flex-1 text-left">
                        <p className="text-sm">{topic.nameCN}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1 bg-slate-700/50 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${getTopicProgress(topic.id)}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                          <span className="text-xs text-blue-400 font-medium">{getTopicProgress(topic.id)}%</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>
                
                <div className="mt-6 pt-4 border-t border-blue-500/30">
                  <h3 className="text-xs text-blue-400 uppercase tracking-wider mb-3 px-2 font-semibold">練習</h3>
                  <nav className="space-y-1">
                    <button
                      onClick={() => { navigate('/subjects/physics/exercise'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-200 border border-transparent hover:border-blue-500/30"
                    >
                      <span>📚</span>
                      <span>Exercise</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/physics/force-motion-quiz'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-200 border border-transparent hover:border-blue-500/30"
                    >
                      <span>🎯</span>
                      <span>Quiz</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/physics/quiz'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-200 border border-transparent hover:border-blue-500/30"
                    >
                      <span>📝</span>
                      <span>章節測驗</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/physics/mock-exam'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-200 border border-transparent hover:border-blue-500/30"
                    >
                      <span>📋</span>
                      <span>模擬考試</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/physics/achievements'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-200 border border-transparent hover:border-blue-500/30"
                    >
                      <span>🏆</span>
                      <span>成就系統</span>
                    </button>
                    <button
                      onClick={() => { navigate('/subjects/physics/wrong-answers'); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-500/20 transition-all duration-200 border border-transparent hover:border-blue-500/30"
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

// Physics 模塊主組件
export default function PhysicsModule() {
  return (
    <SimplePhysicsLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/exercise/:sectionId" element={<ExercisePage />} />
        <Route path="/force-motion-quiz" element={<ForceMotionQuizPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/mock-exam" element={<QuizPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/wrong-answers" element={<WrongAnswersPage />} />
      </Routes>
    </SimplePhysicsLayout>
  );
}
