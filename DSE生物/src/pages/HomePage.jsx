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
      {/* Hero Section - Shineray Future Light Theme */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* 背景裝飾 - Shineray colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-bio-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-bio-secondary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-bio-primary/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-bio-secondary/10 rounded-full" />
          {/* Star sparkles - matching logo */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-32 left-1/4 text-bio-primary text-2xl"
          >✦</motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute top-40 right-1/4 text-bio-secondary text-xl"
          >✦</motion.div>
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
              src="/logo.svg"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bio-primary/10 border border-bio-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-bio-primary" />
              <span className="text-bio-primary text-sm font-medium">HKDSE Biology 2026</span>
            </motion.div>
            
            <h1 className="font-display font-extrabold text-5xl md:text-7xl text-bio-dark mb-6 leading-tight">
              探索生命的
              <span className="text-gradient-shineray block">奧秘世界</span>
            </h1>
            
            <p className="text-xl text-bio-gray max-w-2xl mx-auto mb-10 leading-relaxed">
              <span className="text-bio-primary font-medium">莘睿未來</span> 為你呈獻互動式3D模型、虛擬實驗室和智能閃卡系統，
              <br className="hidden sm:block" />
              讓DSE生物學習變得生動有趣
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cell-viewer" className="btn-bio inline-flex items-center justify-center gap-2">
                <FlaskConical className="w-5 h-5" />
                開始探索細胞
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/flashcards" className="btn-bio-blue inline-flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                閃卡學習
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-bio-bg">
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
                    to={feature.link}
                    className="card-bio block h-full group"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-bio-dark mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-bio-primary mb-2">{feature.titleEn}</p>
                    <p className="text-bio-gray text-sm">{feature.description}</p>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
      
      {/* Topics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-bio-dark mb-4">
              DSE 生物課程主題
            </h2>
            <p className="text-bio-gray max-w-xl mx-auto">
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
                  to={`/topic/${topic.id}`}
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
                    <span className="text-4xl mb-4 block">{topic.icon}</span>
                    <h3 className="font-display font-bold text-lg text-bio-dark mb-1 pr-10">
                      {topic.titleCn}
                    </h3>
                    <p className="text-sm text-bio-primary mb-3">{topic.title}</p>
                    <p className="text-bio-gray text-sm mb-4">{topic.descriptionCn}</p>
                    
                    {/* 進度條 */}
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${topic.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      {topic.modules.length} 個模組
                    </p>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-bio-primary" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-bio-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Dna className="w-8 h-8 text-bio-primary mx-auto mb-3" />
                <div className="font-display font-bold text-3xl text-bio-dark">6</div>
                <div className="text-bio-gray text-sm">核心主題</div>
              </div>
              <div>
                <FlaskConical className="w-8 h-8 text-bio-secondary mx-auto mb-3" />
                <div className="font-display font-bold text-3xl text-bio-dark">2</div>
                <div className="text-bio-gray text-sm">3D細胞模型</div>
              </div>
              <div>
                <BookOpen className="w-8 h-8 text-bio-primary mx-auto mb-3" />
                <div className="font-display font-bold text-3xl text-bio-dark">
                  {progress.flashcardsReviewed}
                </div>
                <div className="text-bio-gray text-sm">已複習閃卡</div>
              </div>
              <div>
                <Target className="w-8 h-8 text-bio-secondary mx-auto mb-3" />
                <div className="font-display font-bold text-3xl text-bio-dark">
                  {progress.totalStudyTime}
                </div>
                <div className="text-bio-gray text-sm">學習分鐘</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
