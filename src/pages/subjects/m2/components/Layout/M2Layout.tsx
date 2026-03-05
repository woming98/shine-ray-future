/**
 * M2 模块布局组件
 * 使用紫红色系，与现有 M2.tsx 保持一致
 */

import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useM2Store } from '../../store/useStore';
import { M2_TOPICS } from '../../constants/topics';

interface M2LayoutProps {
  children: ReactNode;
}

export function M2Layout({ children }: M2LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { getTopicProgress } = useM2Store();

  // 获取主题进度
  const getTopicProgressPercent = (topicId: string): number => {
    return getTopicProgress(topicId);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50 overflow-hidden">
      {/* 背景层：柔和的网格纹理 */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* 柔和的圆形光晕 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* 頂部導航欄 */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-fuchsia-200/50 shadow-sm"
      >
        <div className="relative max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* 移動端菜單按鈕 */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-fuchsia-100 transition-colors"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5 text-fuchsia-600" />
              ) : (
                <Menu className="w-5 h-5 text-fuchsia-600" />
              )}
            </button>

            <button
              onClick={() => navigate('/subjects')}
              className="flex items-center gap-2 text-fuchsia-700 hover:text-fuchsia-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">返回學科列表</span>
            </button>
            <span className="text-fuchsia-300 hidden sm:inline">|</span>
            <button
              onClick={() => navigate('/')}
              className="hidden sm:flex items-center gap-2 text-fuchsia-700 hover:text-fuchsia-800 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">主頁</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📐</span>
            <span className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 bg-clip-text text-transparent font-bold">
              DSE M2
            </span>
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
              animate={{
                x: sidebarOpen
                  ? 0
                  : typeof window !== 'undefined' && window.innerWidth >= 1024
                    ? 0
                    : -280,
              }}
              className={`fixed left-0 top-[120px] md:top-[136px] bottom-0 w-64 bg-white/90 backdrop-blur-md border-r border-fuchsia-200/50 shadow-lg z-40 overflow-y-auto
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
              <div className="p-4">
                <h3 className="text-xs text-fuchsia-600 uppercase tracking-wider mb-3 px-2 font-semibold">
                  M2 主題
                </h3>
                <nav className="space-y-1">
                  {M2_TOPICS.map((topic) => {
                    const isActive = location.pathname === topic.path;
                    const progress = getTopicProgressPercent(topic.id);
                    return (
                      <button
                        key={topic.id}
                        onClick={() => {
                          navigate(topic.path);
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-fuchsia-700 hover:text-fuchsia-800 hover:bg-fuchsia-100 transition-all duration-200 border border-transparent hover:border-fuchsia-200/50 group ${
                          isActive ? 'bg-fuchsia-100 border-fuchsia-200/50' : ''
                        }`}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform">
                          {topic.icon}
                        </span>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-medium">{topic.nameZh}</p>
                          <p className="text-xs text-fuchsia-500">{topic.name}</p>
                          {progress > 0 && (
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex-1 h-1 bg-fuchsia-200 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${progress}%` }}
                                  transition={{ duration: 0.5 }}
                                />
                              </div>
                              <span className="text-xs text-fuchsia-600 font-medium">
                                {progress}%
                              </span>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 主內容區 */}
      <main className="relative pt-[120px] md:pt-[136px] lg:pl-64 min-h-screen">
        <div className="relative z-10 p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
