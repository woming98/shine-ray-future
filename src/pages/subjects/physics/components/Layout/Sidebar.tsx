import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  FileText, 
  Trophy, 
  BarChart2,
  ChevronRight,
  Flame
} from 'lucide-react';
import { useStore } from '../../store/useStore';
import { PHYSICS_TOPICS } from '../../constants/topics';

export default function Sidebar() {
  const location = useLocation();
  const { sidebarOpen, stats, getTopicProgress } = useStore();

  const mainNavItems = [
    { path: '/', icon: Home, label: '学习中心', labelEN: 'Dashboard' },
    { path: '/quiz', icon: FileText, label: '章节测验', labelEN: 'Quizzes' },
    { path: '/mock-exam', icon: BarChart2, label: '模拟考试', labelEN: 'Mock Exam' },
    { path: '/achievements', icon: Trophy, label: '成就系统', labelEN: 'Achievements' },
  ];

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* 移动端遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => useStore.getState().toggleSidebar()}
          />
          
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-16 bottom-0 w-72 glass-dark border-r border-white/10 z-40 overflow-hidden flex flex-col"
          >
            {/* 学习连续天数 */}
            <div className="p-4 border-b border-white/10">
              <div className="bg-gradient-to-r from-accent-500/20 to-orange-500/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-orange-500 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-2xl">{stats.currentStreak}</p>
                    <p className="text-slate-300 text-sm">连续学习天数</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-slate-400">最长纪录</span>
                  <span className="text-accent-400 font-medium">{stats.longestStreak} 天</span>
                </div>
              </div>
            </div>

            {/* 主导航 */}
            <nav className="p-4 border-b border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 px-3">
                主菜单
              </p>
              <ul className="space-y-1">
                {mainNavItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                          isActive
                            ? 'bg-primary-500/20 text-primary-400'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <item.icon className={`w-5 h-5 ${isActive ? 'text-primary-400' : ''}`} />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-400"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* 物理主题列表 */}
            <div className="flex-1 overflow-y-auto p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 px-3">
                物理主题
              </p>
              <ul className="space-y-1">
                {PHYSICS_TOPICS.map((topic) => {
                  const isActive = location.pathname === `/topic/${topic.id}`;
                  const progress = getTopicProgress(topic.id);
                  
                  return (
                    <li key={topic.id}>
                      <Link
                        to={`/topic/${topic.id}`}
                        className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                          isActive
                            ? 'bg-primary-500/20'
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <span className="text-xl">{topic.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium truncate ${
                            isActive ? 'text-primary-400' : 'text-slate-300 group-hover:text-white'
                          }`}>
                            {topic.nameCN}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${topic.gradient}`}
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-slate-500">{progress}%</span>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-primary-400' : 'text-slate-500 group-hover:translate-x-1'
                        }`} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 每周目标进度 */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">每周学习目标</span>
                <span className="text-primary-400 text-sm font-medium">
                  {stats.weeklyProgress}/{stats.weeklyGoal} 分钟
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((stats.weeklyProgress / stats.weeklyGoal) * 100, 100)}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary-400 to-accent-500 rounded-full progress-bar"
                />
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

