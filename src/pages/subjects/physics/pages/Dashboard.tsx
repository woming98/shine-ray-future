import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  Target,
  Trophy,
  Zap,
  TrendingUp,
  BookOpen,
  Play,
  ChevronRight,
  Flame,
  Star,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useStore } from '../store/useStore';
import { PHYSICS_TOPICS } from '../constants/topics';
import { StatCard, TopicCard, Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { ProgressRing } from '../components/UI/ProgressRing';

// 修正導航路徑前綴
const NAV_PREFIX = '/subjects/physics';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, stats, dailyStudy, achievements, getTopicProgress } = useStore();
  

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // 计算总体进度
  const totalProgress = Math.round(
    PHYSICS_TOPICS.reduce((acc, topic) => acc + getTopicProgress(topic.id), 0) / PHYSICS_TOPICS.length
  );

  // 最近成就
  const recentAchievements = achievements.filter((a) => a.unlocked).slice(0, 3);

  // 推荐继续学习的主题
  const recommendedTopic = PHYSICS_TOPICS.find(
    (t) => getTopicProgress(t.id) > 0 && getTopicProgress(t.id) < 100
  ) || PHYSICS_TOPICS[1]; // 默认推荐 Force and Motion


  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* 欢迎区域 - 科技感卡片 */}
      <motion.section variants={itemVariants} className="relative overflow-hidden">
        <div className="relative group">
          {/* 发光边框效果 */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
          
          {/* 玻璃态卡片 */}
          <div className="relative tech-card p-8">
            {/* 扫描线动画 */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
              />
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-3xl sm:text-4xl font-display font-bold neon-text mb-2"
                >
                  欢迎回来，{user?.name || '同学'}！
                </motion.h1>
                <p className="text-blue-200 text-lg">
                  继续你的物理学习之旅，今天也要加油哦！🚀
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span className="text-blue-200 font-medium">
                      连续学习 <span className="text-orange-400 font-bold">{stats.currentStreak}</span> 天
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-blue-200 font-medium">
                      等级 <span className="text-purple-400 font-bold">Lv.{user?.level}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <ProgressRing progress={totalProgress} size={100} strokeWidth={8} color="#00d4ff">
                  <div className="text-center">
                    <p className="text-2xl font-bold neon-text">{totalProgress}%</p>
                    <p className="text-xs text-blue-300">总进度</p>
                  </div>
                </ProgressRing>
                
                <Button
                  size="lg"
                  icon={<Play className="w-5 h-5" />}
                  onClick={() => navigate(`${NAV_PREFIX}/topic/${recommendedTopic.id}`)}
                >
                  继续学习
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 统计卡片 */}
      <motion.section variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Clock className="w-6 h-6 text-blue-400" />}
            label="总学习时间"
            value={`${Math.floor(stats.totalStudyTime / 60)}h ${stats.totalStudyTime % 60}m`}
            change="+45分钟"
            changeType="positive"
          />
          <StatCard
            icon={<Target className="w-6 h-6 text-green-400" />}
            label="完成练习"
            value={stats.exercisesSolved}
            change="+12题"
            changeType="positive"
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-cyan-400" />}
            label="平均正确率"
            value={`${stats.averageScore}%`}
            change="+3%"
            changeType="positive"
          />
          <StatCard
            icon={<Trophy className="w-6 h-6 text-purple-400" />}
            label="获得成就"
            value={achievements.filter((a) => a.unlocked).length}
            change={`/${achievements.length}`}
            changeType="neutral"
          />
        </div>
      </motion.section>

      {/* 主要内容区 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* 左侧：学习趋势和推荐 */}
        <motion.div variants={itemVariants} className="xl:col-span-2 space-y-8">
          {/* 学习趋势图表 */}
          <Card hover={false}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold neon-text">学习趋势</h2>
                <p className="text-blue-200 text-sm">过去7天的学习时间</p>
              </div>
              <select className="bg-slate-800/50 border border-blue-500/30 rounded-lg px-3 py-1.5 text-blue-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                <option value="7" className="bg-slate-800">近7天</option>
                <option value="30" className="bg-slate-800">近30天</option>
                <option value="90" className="bg-slate-800">近90天</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyStudy}>
                  <defs>
                    <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(59, 130, 246, 0.2)" />
                  <XAxis
                    dataKey="date"
                    stroke="#60a5fa"
                    tick={{ fill: '#93c5fd', fontSize: 12 }}
                    tickFormatter={(value) => value.split('-').slice(1).join('/')}
                  />
                  <YAxis
                    stroke="#60a5fa"
                    tick={{ fill: '#93c5fd', fontSize: 12 }}
                    tickFormatter={(value) => `${value}分`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                    }}
                    labelStyle={{ color: '#e2e8f0' }}
                    itemStyle={{ color: '#00d4ff' }}
                    formatter={(value: number) => [`${value} 分钟`, '学习时间']}
                    labelFormatter={(label) => `日期: ${label}`}
                  />
                  <Area
                    type="monotone"
                    dataKey="minutes"
                    stroke="#00d4ff"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorMinutes)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* 物理主题网格 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold neon-text">物理主题</h2>
              <Button variant="ghost" size="sm">
                查看全部 <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PHYSICS_TOPICS.slice(0, 4).map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TopicCard
                    icon={topic.icon}
                    name={topic.name}
                    nameCN={topic.nameCN}
                    description={topic.description}
                    progress={getTopicProgress(topic.id)}
                    gradient={topic.gradient}
                    onClick={() => navigate(`${NAV_PREFIX}/topic/${topic.id}`)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 右侧：快速操作和成就 */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* 今日任务 */}
          <Card hover={false}>
            <h3 className="text-lg font-bold neon-text mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              今日任务
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-green-500/30 rounded-xl hover:border-green-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium">学习30分钟</p>
                    <p className="text-blue-300 text-xs">进度 20/30 分钟</p>
                  </div>
                </div>
                <span className="text-green-400 text-sm font-medium font-bold">67%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                    <Target className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium">完成10道题</p>
                    <p className="text-blue-300 text-xs">进度 7/10 题</p>
                  </div>
                </div>
                <span className="text-blue-400 text-sm font-medium font-bold">70%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-purple-500/30 rounded-xl hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
                    <Star className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium">复习错题5道</p>
                    <p className="text-blue-300 text-xs">进度 2/5 题</p>
                  </div>
                </div>
                <span className="text-purple-400 text-sm font-medium font-bold">40%</span>
              </div>
            </div>
          </Card>

          {/* 最近成就 */}
          <Card hover={false}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold neon-text flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                最近成就
              </h3>
              <Button variant="ghost" size="sm" onClick={() => navigate(`${NAV_PREFIX}/achievements`)}>
                查看全部
              </Button>
            </div>
            
            {recentAchievements.length > 0 ? (
              <div className="space-y-3">
                {recentAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-colors"
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <p className="text-blue-100 font-medium">{achievement.titleCN}</p>
                      <p className="text-blue-300 text-xs">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-blue-200">继续学习，解锁更多成就！</p>
              </div>
            )}
          </Card>

          {/* 快速开始 */}
          <Card hover={false} className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-blue-500/30">
            <h3 className="text-lg font-bold neon-text mb-2">推荐继续</h3>
            <p className="text-blue-200 text-sm mb-4">
              {recommendedTopic.nameCN} - {recommendedTopic.name}
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{recommendedTopic.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-blue-200 text-sm">学习进度</span>
                  <span className="text-cyan-400 font-medium font-bold">
                    {getTopicProgress(recommendedTopic.id)}%
                  </span>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${getTopicProgress(recommendedTopic.id)}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                  />
                </div>
              </div>
            </div>
            <Button
              fullWidth
              icon={<Play className="w-4 h-4" />}
              onClick={() => navigate(`${NAV_PREFIX}/topic/${recommendedTopic.id}`)}
            >
              立即学习
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* 底部：其他主题 */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold neon-text">更多主题</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHYSICS_TOPICS.slice(4).map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TopicCard
                icon={topic.icon}
                name={topic.name}
                nameCN={topic.nameCN}
                description={topic.description}
                progress={getTopicProgress(topic.id)}
                gradient={topic.gradient}
                onClick={() => navigate(`${NAV_PREFIX}/topic/${topic.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

