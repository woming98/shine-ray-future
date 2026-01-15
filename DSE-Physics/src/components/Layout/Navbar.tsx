import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  User, 
  Settings,
  LogOut,
  Trophy,
  BookOpen
} from 'lucide-react';
import { useStore } from '../../store/useStore';

export default function Navbar() {
  const location = useLocation();
  const { user, toggleSidebar, sidebarOpen } = useStore();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: '恭喜完成「力学基础」章节！', time: '5分钟前', type: 'achievement' },
    { id: 2, text: '新的每日挑战已解锁', time: '1小时前', type: 'challenge' },
    { id: 3, text: '连续学习7天，获得「周学习达人」徽章', time: '昨天', type: 'badge' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 左侧：Logo和菜单切换 */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors lg:hidden"
            >
              {sidebarOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
            
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-shine-400 to-ray-500 flex items-center justify-center shadow-lg group-hover:shadow-shine-500/50 transition-shadow">
                  <span className="text-white font-bold text-lg">莘</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-display font-bold text-lg leading-tight">
                  莘睿未来
                </h1>
                <p className="text-shine-400 text-xs font-medium">
                  Shine Ray Future
                </p>
              </div>
            </Link>
          </div>

          {/* 中间：搜索框 */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="搜索主题、公式或概念..."
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-shine-500 focus:ring-1 focus:ring-shine-500 transition-all"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-slate-400 bg-white/10 rounded">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* 右侧：用户操作 */}
          <div className="flex items-center gap-2">
            {/* 通知按钮 */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors relative"
              >
                <Bell className="w-5 h-5 text-slate-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-ray-500 rounded-full" />
              </button>
              
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 glass rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-white/10">
                      <h3 className="text-white font-semibold">通知</h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((n) => (
                        <div
                          key={n.id}
                          className="p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                        >
                          <p className="text-white text-sm">{n.text}</p>
                          <p className="text-slate-400 text-xs mt-1">{n.time}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 用户菜单 */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-white text-sm font-medium">{user?.name || '访客'}</span>
                  <span className="text-shine-400 text-xs">Lv.{user?.level || 1}</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-shine-400 to-ray-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </button>

              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-56 glass rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-white/10">
                      <p className="text-white font-semibold">{user?.name}</p>
                      <p className="text-slate-400 text-sm">{user?.email}</p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <User className="w-4 h-4" />
                        个人资料
                      </Link>
                      <Link
                        to="/achievements"
                        className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Trophy className="w-4 h-4" />
                        成就徽章
                      </Link>
                      <Link
                        to="/wrong-answers"
                        className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <BookOpen className="w-4 h-4" />
                        错题本
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        设置
                      </Link>
                      <hr className="my-2 border-white/10" />
                      <button
                        className="flex items-center gap-3 w-full px-3 py-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        登出
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* 当前页面路径指示 */}
      {location.pathname !== '/' && (
        <div className="border-t border-white/5 px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">
              首页
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-shine-400">
              {location.pathname.split('/').pop()?.replace(/-/g, ' ')}
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}

