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
      {/* 欢迎区域 */}
      <motion.section variants={itemVariants} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-shine-500/20 via-transparent to-ray-500/20 rounded-3xl" />
        <div className="relative glass rounded-3xl p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl sm:text-4xl font-display font-bold text-white mb-2"
              >
                欢迎回来，{user?.name || '同学'}！
              </motion.h1>
              <p className="text-slate-300 text-lg">
                继续你的物理学习之旅，今天也要加油哦！🚀
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <span className="text-white font-medium">
                    连续学习 <span className="text-ray-400">{stats.currentStreak}</span> 天
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">
                    等级 <span className="text-shine-400">Lv.{user?.level}</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <ProgressRing progress={totalProgress} size={100} strokeWidth={8}>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">{totalProgress}%</p>
                  <p className="text-xs text-slate-400">总进度</p>
                </div>
              </ProgressRing>
              
              <Button
                size="lg"
                icon={<Play className="w-5 h-5" />}
                onClick={() => navigate(`/topic/${recommendedTopic.id}`)}
              >
                继续学习
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 统计卡片 */}
      <motion.section variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Clock className="w-6 h-6 text-shine-400" />}
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
            icon={<TrendingUp className="w-6 h-6 text-ray-400" />}
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
          <Card hover={false} className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">学习趋势</h2>
                <p className="text-slate-400 text-sm">过去7天的学习时间</p>
              </div>
              <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-shine-500">
                <option value="7">近7天</option>
                <option value="30">近30天</option>
                <option value="90">近90天</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyStudy}>
                  <defs>
                    <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="date"
                    stroke="rgba(255,255,255,0.3)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    tickFormatter={(value) => value.split('-').slice(1).join('/')}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.3)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                    tickFormatter={(value) => `${value}分`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#0ea5e9' }}
                    formatter={(value: number) => [`${value} 分钟`, '学习时间']}
                    labelFormatter={(label) => `日期: ${label}`}
                  />
                  <Area
                    type="monotone"
                    dataKey="minutes"
                    stroke="#0ea5e9"
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
              <h2 className="text-xl font-bold text-white">物理主题</h2>
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
                    onClick={() => navigate(`/topic/${topic.id}`)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 右侧：快速操作和成就 */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* 今日任务 */}
          <Card hover={false} className="p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-ray-400" />
              今日任务
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">学习30分钟</p>
                    <p className="text-slate-400 text-xs">进度 20/30 分钟</p>
                  </div>
                </div>
                <span className="text-green-400 text-sm font-medium">67%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-shine-500/20 flex items-center justify-center">
                    <Target className="w-4 h-4 text-shine-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">完成10道题</p>
                    <p className="text-slate-400 text-xs">进度 7/10 题</p>
                  </div>
                </div>
                <span className="text-shine-400 text-sm font-medium">70%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-ray-500/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-ray-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">复习错题5道</p>
                    <p className="text-slate-400 text-xs">进度 2/5 题</p>
                  </div>
                </div>
                <span className="text-ray-400 text-sm font-medium">40%</span>
              </div>
            </div>
          </Card>

          {/* 最近成就 */}
          <Card hover={false} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                最近成就
              </h3>
              <Button variant="ghost" size="sm" onClick={() => navigate('/achievements')}>
                查看全部
              </Button>
            </div>
            
            {recentAchievements.length > 0 ? (
              <div className="space-y-3">
                {recentAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20"
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <p className="text-white font-medium">{achievement.titleCN}</p>
                      <p className="text-slate-400 text-xs">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-slate-500" />
                </div>
                <p className="text-slate-400">继续学习，解锁更多成就！</p>
              </div>
            )}
          </Card>

          {/* 快速开始 */}
          <Card hover={false} className="p-6 bg-gradient-to-br from-shine-500/20 to-ray-500/20">
            <h3 className="text-lg font-bold text-white mb-2">推荐继续</h3>
            <p className="text-slate-300 text-sm mb-4">
              {recommendedTopic.nameCN} - {recommendedTopic.name}
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{recommendedTopic.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-sm">学习进度</span>
                  <span className="text-shine-400 font-medium">
                    {getTopicProgress(recommendedTopic.id)}%
                  </span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-shine-400 to-ray-500 rounded-full"
                    style={{ width: `${getTopicProgress(recommendedTopic.id)}%` }}
                  />
                </div>
              </div>
            </div>
            <Button
              fullWidth
              icon={<Play className="w-4 h-4" />}
              onClick={() => navigate(`/topic/${recommendedTopic.id}`)}
            >
              立即学习
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* 底部：其他主题 */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">更多主题</h2>
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
                onClick={() => navigate(`/topic/${topic.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

