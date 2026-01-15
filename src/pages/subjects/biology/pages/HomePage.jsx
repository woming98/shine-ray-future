import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Microscope, 
  FlaskConical, 
  BookOpen, 
  Target,
  Sparkles,
  Dna
} from 'lucide-react'
import { topics } from '../data/topics'
import { useStore } from '../store/useStore'

// 動畫變體
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// 功能卡片數據 - Shineray Future
const features = [
  {
    icon: FlaskConical,
    title: '3D 細胞觀察',
    titleEn: '3D Cell Viewer',
    description: '互動式3D模型，探索動物和植物細胞結構',
    link: '/cell-viewer',
    color: '#f5a623',  // Shineray Orange
  },
  {
    icon: Microscope,
    title: '虛擬顯微鏡',
    titleEn: 'Virtual Microscope',
    description: '模擬真實顯微鏡操作，觀察細胞樣本',
    link: '/microscope',
    color: '#1a73e8',  // Shineray Blue
  },
  {
    icon: BookOpen,
    title: '閃卡學習',
    titleEn: 'Flashcards',
    description: '高效記憶生物概念和關鍵詞彙',
    link: '/flashcards',
    color: '#ff9500',  // Bright Orange
  },
  {
    icon: Target,
    title: '學習進度',
    titleEn: 'Progress Tracking',
    description: '追蹤你的學習進度和成就',
    link: '/progress',
    color: '#2196f3',  // Light Blue
  },
]

function HomePage() {
  const { progress } = useStore()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section - 自然风格 */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-green-50/50 to-emerald-50/30">
        {/* 自然装饰背景 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 柔和的圆形光晕 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-200/20 rounded-full blur-3xl" />
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
          <motion.div
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 left-1/4 text-4xl opacity-15"
          >
            🌱
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Company Logo */}
            <motion.img
              src="/ShineRayFutureLogo.jpg"
              alt="莘睿未来 Shineray Future"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className="h-16 md:h-20 mx-auto mb-6"
            />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/80 border border-green-300/50 mb-6"
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">HKDSE Biology 2026</span>
            </motion.div>
            
            <h1 className="font-display font-extrabold text-5xl md:text-7xl text-green-900 mb-6 leading-tight">
              探索生命的
              <span className="text-gradient-shineray block">奧秘世界</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              <span className="text-green-600 font-medium">莘睿未來</span> 為你呈獻互動式3D模型、虛擬實驗室和智能閃卡系統，
              <br className="hidden sm:block" />
              讓DSE生物學習變得生動有趣
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/subjects/biology/cell-viewer" className="btn-bio inline-flex items-center justify-center gap-2">
                <FlaskConical className="w-5 h-5" />
                開始探索細胞
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/subjects/biology/flashcards" className="btn-bio-blue inline-flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                閃卡學習
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    to={`/subjects/biology${feature.link}`}
                    className="card-bio block h-full group"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-green-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-green-600 mb-2">{feature.titleEn}</p>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
      
      {/* Topics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-green-900 mb-4">
              DSE 生物課程主題
            </h2>
            <p className="text-gray-700 max-w-xl mx-auto">
              涵蓋HKDSE生物科必修部分的六大核心主題
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {topics.map((topic, index) => (
              <motion.div key={topic.id} variants={itemVariants}>
                <Link
                  to={`/subjects/biology/topic/${topic.id}`}
                  className="card-bio block h-full group relative overflow-hidden"
                >
                  {/* 主題編號 */}
                  <div
                    className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: topic.color }}
                  />
                  <span
                    className="absolute top-4 right-4 font-display font-bold text-4xl opacity-20"
                    style={{ color: topic.color }}
                  >
                    {topic.number}
                  </span>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">{topic.icon}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-green-900 mb-1 pr-10">
                      {topic.titleCn}
                    </h3>
                    <p className="text-sm text-green-600 mb-3">{topic.title}</p>
                    <p className="text-gray-600 text-sm mb-4">{topic.descriptionCn}</p>
                    
                    {/* 進度條 - 自然风格 */}
                    <div className="h-2 bg-green-100 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all"
                        style={{ width: `${topic.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {topic.modules.length} 個模組
                    </p>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-green-600" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-bio p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Dna className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="font-display font-bold text-3xl text-green-900">6</div>
                <div className="text-gray-600 text-sm">核心主題</div>
              </div>
              <div>
                <FlaskConical className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <div className="font-display font-bold text-3xl text-green-900">2</div>
                <div className="text-gray-600 text-sm">3D細胞模型</div>
              </div>
              <div>
                <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="font-display font-bold text-3xl text-green-900">
                  {progress.flashcardsReviewed}
                </div>
                <div className="text-gray-600 text-sm">已複習閃卡</div>
              </div>
              <div>
                <Target className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <div className="font-display font-bold text-3xl text-green-900">
                  {progress.totalStudyTime}
                </div>
                <div className="text-gray-600 text-sm">學習分鐘</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
