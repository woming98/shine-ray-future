import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Clock, Target, TrendingUp, Trophy, Flame, Star, 
  BookOpen, Zap, Play, Rocket
} from 'lucide-react'
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

/**
 * 学习仪表板组件
 * 参考图片设计，展示用户的学习进度和统计信息
 */
interface LearningDashboardProps {
  // 用户信息
  userName?: string
  level?: number
  streak?: number
  
  // 统计数据
  totalStudyTime?: number // 分钟
  completedExercises?: number
  averageAccuracy?: number
  achievementsObtained?: number
  totalAchievements?: number
  
  // 总进度
  totalProgress?: number
  
  // 学习趋势数据（过去7天）
  learningTrend?: Array<{ date: string; minutes: number }>
  
  // 今日任务
  todayTasks?: Array<{
    id: string
    title: string
    icon: React.ElementType
    progress: number
    total: number
    unit: string
    percentage: number
  }>
  
  // 回调函数
  onContinueLearning?: () => void
}

export default function LearningDashboard({
  userName = '学习者',
  level = 5,
  streak = 7,
  totalStudyTime = 1250, // 20小时50分钟 = 1250分钟
  completedExercises = 87,
  averageAccuracy = 78,
  achievementsObtained = 0,
  totalAchievements = 6,
  totalProgress = 0,
  learningTrend = [
    { date: '1/1', minutes: 45 },
    { date: '1/2', minutes: 30 },
    { date: '1/3', minutes: 60 },
    { date: '1/4', minutes: 15 },
    { date: '1/5', minutes: 45 },
    { date: '1/6', minutes: 30 },
    { date: '1/7', minutes: 45 },
  ],
  todayTasks = [
    {
      id: '1',
      title: '学习30分钟',
      icon: BookOpen,
      progress: 20,
      total: 30,
      unit: '分钟',
      percentage: 67
    },
    {
      id: '2',
      title: '完成10道题',
      icon: Target,
      progress: 7,
      total: 10,
      unit: '题',
      percentage: 70
    },
    {
      id: '3',
      title: '复习错题5道',
      icon: Star,
      progress: 2,
      total: 5,
      unit: '题',
      percentage: 40
    }
  ],
  onContinueLearning
}: LearningDashboardProps) {
  // 格式化学习时间
  const formatStudyTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  // 计算今日新增时间（模拟）
  const todayIncrease = 45
  const todayExercisesIncrease = 12
  const todayAccuracyIncrease = 3

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-primary-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* 顶部欢迎区域 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start justify-between"
        >
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-4">
              欢迎回来, {userName}!
            </h1>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-lg">连续学习 {streak} 天</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-lg">等级 Lv.{level}</span>
              </div>
              <Rocket className="w-6 h-6 text-primary-400" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* 总进度圆形指示器 */}
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - totalProgress / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white">{totalProgress}%</span>
                <span className="text-xs text-white/60">总进度</span>
              </div>
            </div>
            
            {/* 继续学习按钮 */}
            <button
              onClick={onContinueLearning}
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors shadow-lg"
            >
              <Play className="w-5 h-5" />
              继续学习
            </button>
          </div>
        </motion.div>

        {/* 科目进度入口 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <Link
            to="/user/physics-progress"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:border-blue-400/60 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-white">
                  <Rocket className="w-5 h-5 text-primary-400" />
                  <span className="font-semibold">物理进度</span>
                </div>
                <p className="text-sm text-white/60 mt-1">8 大板块 · 42 章节</p>
              </div>
              <span className="text-lg font-bold text-white">{totalProgress}%</span>
            </div>
            <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </Link>

          <button
            type="button"
            disabled
            className="bg-white/5 rounded-2xl p-5 border border-white/10 text-left opacity-60 cursor-not-allowed"
          >
            <div className="flex items-center gap-2 text-white">
              <Target className="w-5 h-5 text-emerald-300" />
              <span className="font-semibold">数学进度</span>
            </div>
            <p className="text-sm text-white/50 mt-1">即将开放</p>
          </button>

          <button
            type="button"
            disabled
            className="bg-white/5 rounded-2xl p-5 border border-white/10 text-left opacity-60 cursor-not-allowed"
          >
            <div className="flex items-center gap-2 text-white">
              <BookOpen className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">英文进度</span>
            </div>
            <p className="text-sm text-white/50 mt-1">即将开放</p>
          </button>

          <button
            type="button"
            disabled
            className="bg-white/5 rounded-2xl p-5 border border-white/10 text-left opacity-60 cursor-not-allowed"
          >
            <div className="flex items-center gap-2 text-white">
              <BookOpen className="w-5 h-5 text-sky-300" />
              <span className="font-semibold">语文进度</span>
            </div>
            <p className="text-sm text-white/50 mt-1">即将开放</p>
          </button>

          <button
            type="button"
            disabled
            className="bg-white/5 rounded-2xl p-5 border border-white/10 text-left opacity-60 cursor-not-allowed"
          >
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-5 h-5 text-cyan-300" />
              <span className="font-semibold">M1 进度</span>
            </div>
            <p className="text-sm text-white/50 mt-1">即将开放</p>
          </button>

          <button
            type="button"
            disabled
            className="bg-white/5 rounded-2xl p-5 border border-white/10 text-left opacity-60 cursor-not-allowed"
          >
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">M2 进度</span>
            </div>
            <p className="text-sm text-white/50 mt-1">即将开放</p>
          </button>

          <button
            type="button"
            disabled
            className="bg-white/5 rounded-2xl p-5 border border-white/10 text-left opacity-60 cursor-not-allowed"
          >
            <div className="flex items-center gap-2 text-white">
              <Trophy className="w-5 h-5 text-green-300" />
              <span className="font-semibold">化学进度</span>
            </div>
            <p className="text-sm text-white/50 mt-1">即将开放</p>
          </button>

          <button
            type="button"
            disabled
            className="bg-white/5 rounded-2xl p-5 border border-white/10 text-left opacity-60 cursor-not-allowed"
          >
            <div className="flex items-center gap-2 text-white">
              <Star className="w-5 h-5 text-emerald-300" />
              <span className="font-semibold">生物进度</span>
            </div>
            <p className="text-sm text-white/50 mt-1">即将开放</p>
          </button>

          <button
            type="button"
            disabled
            className="bg-white/5 rounded-2xl p-5 border border-white/10 text-left opacity-60 cursor-not-allowed"
          >
            <div className="flex items-center gap-2 text-white">
              <TrendingUp className="w-5 h-5 text-orange-300" />
              <span className="font-semibold">经济进度</span>
            </div>
            <p className="text-sm text-white/50 mt-1">即将开放</p>
          </button>

          <button
            type="button"
            disabled
            className="bg-white/5 rounded-2xl p-5 border border-white/10 text-left opacity-60 cursor-not-allowed"
          >
            <div className="flex items-center gap-2 text-white">
              <Star className="w-5 h-5 text-purple-300" />
              <span className="font-semibold">会计进度</span>
            </div>
            <p className="text-sm text-white/50 mt-1">即将开放</p>
          </button>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 总学习时间 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-400" />
              </div>
              <span className="text-sm font-medium text-emerald-400">+{todayIncrease}分钟</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {formatStudyTime(totalStudyTime)}
            </div>
            <div className="text-sm text-white/60">总学习时间</div>
          </motion.div>

          {/* 完成练习 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-sm font-medium text-emerald-400">+{todayExercisesIncrease}题</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {completedExercises}
            </div>
            <div className="text-sm text-white/60">完成练习</div>
          </motion.div>

          {/* 平均正确率 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-sm font-medium text-emerald-400">+{todayAccuracyIncrease}%</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {averageAccuracy}%
            </div>
            <div className="text-sm text-white/60">平均正确率</div>
          </motion.div>

          {/* 获得成就 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-sm font-medium text-white/60">/{totalAchievements}</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {achievementsObtained}
            </div>
            <div className="text-sm text-white/60">获得成就</div>
          </motion.div>
        </div>

        {/* 底部区域：学习趋势和今日任务 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 学习趋势图表 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">学习趋势</h3>
                <p className="text-sm text-white/60">过去7天的学习时间</p>
              </div>
              <div className="relative">
                <select className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white text-sm pr-8 focus:outline-none focus:border-primary-500">
                  <option>近7天</option>
                  <option>近30天</option>
                  <option>近90天</option>
                </select>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={learningTrend}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="date" 
                    stroke="rgba(255,255,255,0.5)"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    style={{ fontSize: '12px' }}
                    label={{ value: '分钟', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.5)' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="minutes"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="url(#colorGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* 今日任务 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">今日任务</h3>
            </div>
            <div className="space-y-4">
              {todayTasks.map((task, index) => {
                const Icon = task.icon
                return (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium mb-1">{task.title}</div>
                        <div className="text-sm text-white/60">
                          进度 {task.progress}/{task.total}{task.unit}
                        </div>
                        {/* 进度条 */}
                        <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${task.percentage}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-white">
                        {task.percentage}%
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
