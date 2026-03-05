/**
 * 英文学习中心主页
 */

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
import { useEnglishStore } from '../store/useStore';
import { ENGLISH_TOPICS } from '../constants/topics';
import { useGlobalUser } from '../../../../store/useGlobalUser';
import { StatCard, TopicCard, Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { ProgressRing } from '../components/UI/ProgressRing';

const NAV_PREFIX = '/subjects/english';

export default function Dashboard() {
  const navigate = useNavigate();
  const { stats, dailyStudy, achievements, skillProgress } = useEnglishStore();
  const user = useGlobalUser((state: any) => state.user);

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
    ENGLISH_TOPICS.reduce((acc, topic) => acc + (skillProgress[topic.id] || 0), 0) / ENGLISH_TOPICS.length
  );

  // 最近成就
  const recentAchievements = achievements.filter((a) => a.unlocked).slice(0, 3);

  // 推荐继续学习的技能
  const recommendedSkill = ENGLISH_TOPICS.find(
    (t) => (skillProgress[t.id] || 0) > 0 && (skillProgress[t.id] || 0) < 100
  ) || ENGLISH_TOPICS[0];

  // 准备学习趋势数据
  const learningTrendData = dailyStudy.length > 0
    ? dailyStudy.slice(-7).map((d) => ({
        date: d.date.split('-').slice(1).join('/'),
        minutes: d.minutes,
      }))
    : [
        { date: '1/4', minutes: 0 },
        { date: '1/5', minutes: 0 },
        { date: '1/6', minutes: 0 },
        { date: '1/7', minutes: 0 },
        { date: '1/8', minutes: 0 },
        { date: '1/9', minutes: 0 },
        { date: '1/10', minutes: 0 },
      ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* 欢迎区域 */}
      <motion.section variants={itemVariants} className="relative overflow-hidden">
        <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
              >
                欢迎回来，{user?.name || '同学'}！
              </motion.h1>
              <p className="text-gray-600 text-lg mb-4">
                继续你的英文学习之旅，今天也要加油哦！
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">
                    连续学习 <span className="text-emerald-600">{stats.currentStreak}</span> 天
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700 font-medium">
                    等级 <span className="text-purple-600">Lv.{user?.level || 1}</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <ProgressRing progress={totalProgress} size={100} strokeWidth={8} color="#10b981" bgColor="#d1fae5">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{totalProgress}%</p>
                  <p className="text-xs text-gray-600">总进度</p>
                </div>
              </ProgressRing>
              
              <Button
                size="lg"
                icon={<Play className="w-5 h-5" />}
                onClick={() => navigate(`${NAV_PREFIX}/${recommendedSkill.id}`)}
              >
                继续学习
              </Button>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* 统计卡片 */}
      <motion.section variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Clock className="w-6 h-6" />}
            label="总学习时间"
            value={`${Math.floor(stats.totalStudyTime / 60)}h ${stats.totalStudyTime % 60}m`}
            change="+45分钟"
            changeType="positive"
          />
          <StatCard
            icon={<Target className="w-6 h-6" />}
            label="完成练习"
            value={stats.exercisesSolved}
            change="+12题"
            changeType="positive"
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="平均正确率"
            value={`${stats.averageScore}%`}
            change="+3%"
            changeType="positive"
          />
          <StatCard
            icon={<Trophy className="w-6 h-6" />}
            label="获得成就"
            value={achievements.filter((a) => a.unlocked).length}
            change={`/${achievements.length}`}
            changeType="neutral"
          />
        </div>
      </motion.section>

      {/* 主要内容区 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* 左侧：学习趋势和技能 */}
        <motion.div variants={itemVariants} className="xl:col-span-2 space-y-8">
          {/* 学习趋势图表 */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">学习趋势</h2>
                <p className="text-gray-600 text-sm">过去7天的学习时间</p>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={learningTrendData}>
                  <defs>
                    <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <YAxis stroke="#6b7280" tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      background: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: '#374151' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="minutes"
                    stroke="#10b981"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorMinutes)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* 核心技能网格 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">核心技能</h2>
              <Button variant="ghost" size="sm">
                查看全部 <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ENGLISH_TOPICS.map((topic, index) => (
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
                    progress={skillProgress[topic.id] || 0}
                    onClick={() => navigate(`${NAV_PREFIX}/${topic.id}`)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 右侧：快速操作和成就 */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* 今日任务 */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600" />
              今日任务
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">学习30分钟</p>
                    <p className="text-gray-600 text-xs">进度 20/30 分钟</p>
                  </div>
                </div>
                <span className="text-emerald-600 text-sm font-medium">67%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                    <Target className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">完成10道题</p>
                    <p className="text-gray-600 text-xs">进度 7/10 题</p>
                  </div>
                </div>
                <span className="text-teal-600 text-sm font-medium">70%</span>
              </div>
            </div>
          </Card>

          {/* 最近成就 */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                最近成就
              </h3>
              <Button variant="ghost" size="sm" onClick={() => navigate(`${NAV_PREFIX}/report`)}>
                查看全部
              </Button>
            </div>
            
            {recentAchievements.length > 0 ? (
              <div className="space-y-3">
                {recentAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl"
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <p className="text-gray-900 font-medium">{achievement.titleCN}</p>
                      <p className="text-gray-600 text-xs">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-emerald-400" />
                </div>
                <p className="text-gray-600">继续学习，解锁更多成就！</p>
              </div>
            )}
          </Card>

          {/* 快速开始 */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">推荐继续</h3>
            <p className="text-gray-600 text-sm mb-4">
              {recommendedSkill.nameCN} - {recommendedSkill.name}
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{recommendedSkill.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-700 text-sm">学习进度</span>
                  <span className="text-emerald-600 font-medium">
                    {skillProgress[recommendedSkill.id] || 0}%
                  </span>
                </div>
                <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    style={{ width: `${skillProgress[recommendedSkill.id] || 0}%` }}
                  />
                </div>
              </div>
            </div>
            <Button
              fullWidth
              icon={<Play className="w-4 h-4" />}
              onClick={() => navigate(`${NAV_PREFIX}/${recommendedSkill.id}`)}
            >
              立即学习
            </Button>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
