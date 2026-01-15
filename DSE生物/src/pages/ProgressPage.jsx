import { motion } from 'framer-motion'
import { 
  Trophy, 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp,
  CheckCircle,
  RotateCcw,
  Calendar
} from 'lucide-react'
import { useStore } from '../store/useStore'
import { topics, flashcardDecks } from '../data/topics'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js'
import { Doughnut, Bar } from 'react-chartjs-2'

// 註冊 Chart.js 組件
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

function ProgressPage() {
  const { progress, resetProgress } = useStore()
  
  // 計算統計數據
  const totalModules = topics.reduce((acc, t) => acc + t.modules.length, 0)
  const completedModules = progress.completedTopics.length
  const completionRate = Math.round((completedModules / totalModules) * 100)
  
  const totalFlashcards = Object.values(flashcardDecks).reduce((acc, d) => acc + d.cards.length, 0)
  
  // 圓環圖數據
  const doughnutData = {
    labels: ['已完成', '未完成'],
    datasets: [
      {
        data: [completedModules, totalModules - completedModules],
        backgroundColor: ['#7ccea0', '#1a3a2f'],
        borderColor: ['#7ccea0', '#1a3a2f'],
        borderWidth: 0,
      },
    ],
  }
  
  const doughnutOptions = {
    cutout: '75%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  }
  
  // 主題進度柱狀圖
  const barData = {
    labels: topics.map(t => t.titleCn.slice(0, 6) + '...'),
    datasets: [
      {
        label: '完成模組數',
        data: topics.map(t => 
          t.modules.filter(m => progress.completedTopics.includes(m.id)).length
        ),
        backgroundColor: '#7ccea0',
        borderRadius: 8,
      },
      {
        label: '總模組數',
        data: topics.map(t => t.modules.length),
        backgroundColor: '#1a3a2f',
        borderRadius: 8,
      },
    ],
  }
  
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#e8f5f0',
          font: {
            family: 'Source Sans 3',
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#e8f5f0',
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(124, 206, 160, 0.1)',
        },
        ticks: {
          color: '#e8f5f0',
        },
      },
    },
  }
  
  // 最近學習日期
  const lastStudyDate = progress.lastStudyDate 
    ? new Date(progress.lastStudyDate).toLocaleDateString('zh-HK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '尚未開始'

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頁面標題 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-display font-bold text-3xl md:text-4xl text-bio-dark mb-2">
            📊 學習進度追蹤
          </h1>
          <p className="text-bio-dark/60">
            查看你的學習統計和成就
          </p>
        </motion.div>

        {/* 統計卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="card-bio text-center">
            <Target className="w-8 h-8 text-bio-accent mx-auto mb-2" />
            <div className="font-display font-bold text-3xl text-bio-dark">
              {completionRate}%
            </div>
            <div className="text-bio-dark/60 text-sm">完成率</div>
          </div>
          
          <div className="card-bio text-center">
            <BookOpen className="w-8 h-8 text-bio-accent mx-auto mb-2" />
            <div className="font-display font-bold text-3xl text-bio-dark">
              {progress.flashcardsReviewed}
            </div>
            <div className="text-bio-dark/60 text-sm">閃卡已複習</div>
          </div>
          
          <div className="card-bio text-center">
            <Clock className="w-8 h-8 text-bio-accent mx-auto mb-2" />
            <div className="font-display font-bold text-3xl text-bio-dark">
              {progress.totalStudyTime}
            </div>
            <div className="text-bio-dark/60 text-sm">學習分鐘</div>
          </div>
          
          <div className="card-bio text-center">
            <CheckCircle className="w-8 h-8 text-bio-accent mx-auto mb-2" />
            <div className="font-display font-bold text-3xl text-bio-dark">
              {completedModules}/{totalModules}
            </div>
            <div className="text-bio-dark/60 text-sm">模組完成</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 總體進度 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card-bio"
          >
            <h3 className="font-display font-bold text-xl text-bio-dark mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-bio-accent" />
              總體進度
            </h3>
            
            <div className="relative h-48 mb-4">
              <Doughnut data={doughnutData} options={doughnutOptions} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-bio-accent">
                    {completionRate}%
                  </div>
                  <div className="text-bio-dark/60 text-sm">完成</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-bio-dark/70">
                  <span className="w-3 h-3 rounded-full bg-bio-accent"></span>
                  已完成模組
                </span>
                <span className="text-bio-dark font-medium">{completedModules}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-bio-dark/70">
                  <span className="w-3 h-3 rounded-full bg-bio-dark"></span>
                  待學習模組
                </span>
                <span className="text-bio-dark font-medium">{totalModules - completedModules}</span>
              </div>
            </div>
          </motion.div>

          {/* 主題進度 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 card-bio"
          >
            <h3 className="font-display font-bold text-xl text-bio-dark mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-bio-accent" />
              各主題進度
            </h3>
            
            <div className="h-64">
              <Bar data={barData} options={barOptions} />
            </div>
          </motion.div>
        </div>

        {/* 詳細主題列表 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <h3 className="font-display font-bold text-xl text-bio-dark mb-6">
            📚 主題詳情
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic, index) => {
              const completedInTopic = topic.modules.filter(m => 
                progress.completedTopics.includes(m.id)
              ).length
              const topicProgress = Math.round((completedInTopic / topic.modules.length) * 100)
              
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="card-bio"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{topic.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-bio-dark">
                        {topic.titleCn}
                      </h4>
                      <p className="text-bio-dark/60 text-sm">{topic.title}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-display font-bold text-2xl" style={{ color: topic.color }}>
                        {topicProgress}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="progress-bar mb-2">
                    <div
                      className="progress-bar-fill"
                      style={{ 
                        width: `${topicProgress}%`,
                        background: `linear-gradient(90deg, ${topic.color}88, ${topic.color})`
                      }}
                    />
                  </div>
                  
                  <p className="text-sm text-bio-dark/50">
                    {completedInTopic} / {topic.modules.length} 模組完成
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 學習資訊 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="card-bio">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-bio-accent" />
              <h3 className="font-display font-bold text-bio-dark">最近學習</h3>
            </div>
            <p className="text-bio-dark/70">{lastStudyDate}</p>
          </div>
          
          <div className="card-bio">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-bio-accent" />
                <h3 className="font-display font-bold text-bio-dark">重置進度</h3>
              </div>
              <button
                onClick={() => {
                  if (confirm('確定要重置所有學習進度嗎？此操作不可撤銷。')) {
                    resetProgress()
                  }
                }}
                className="px-4 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors text-sm"
              >
                重置
              </button>
            </div>
          </div>
        </motion.div>

        {/* 成就區域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <h3 className="font-display font-bold text-xl text-bio-dark mb-6 flex items-center gap-2">
            🏆 成就
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`card-bio text-center ${completedModules >= 1 ? '' : 'opacity-40'}`}>
              <div className="text-4xl mb-2">🌱</div>
              <h4 className="font-display font-bold text-bio-dark">初學者</h4>
              <p className="text-bio-dark/60 text-sm">完成第一個模組</p>
            </div>
            
            <div className={`card-bio text-center ${progress.flashcardsReviewed >= 10 ? '' : 'opacity-40'}`}>
              <div className="text-4xl mb-2">📚</div>
              <h4 className="font-display font-bold text-bio-dark">閃卡達人</h4>
              <p className="text-bio-dark/60 text-sm">複習10張閃卡</p>
            </div>
            
            <div className={`card-bio text-center ${completionRate >= 50 ? '' : 'opacity-40'}`}>
              <div className="text-4xl mb-2">🔬</div>
              <h4 className="font-display font-bold text-bio-dark">生物學家</h4>
              <p className="text-bio-dark/60 text-sm">完成50%進度</p>
            </div>
            
            <div className={`card-bio text-center ${completionRate >= 100 ? '' : 'opacity-40'}`}>
              <div className="text-4xl mb-2">🧬</div>
              <h4 className="font-display font-bold text-bio-dark">DSE大師</h4>
              <p className="text-bio-dark/60 text-sm">完成所有模組</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProgressPage
