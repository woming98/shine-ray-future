import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle, 
  Circle, 
  PlayCircle,
  FlaskConical,
  FileText,
  ClipboardList,
  Droplets,
  Table,
  Languages,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { topics, flashcardDecks, moduleContents, quizzes } from '../data/topics'
import { useStore } from '../store/useStore'
import Quiz from '../components/Quiz'
import VocabularyWord from '../components/VocabularyWord'
import { vocabulary } from '../data/vocabulary'

// 将文本中的词汇术语转换为可点击的VocabularyWord组件
function processTextWithVocabulary(text, vocabList = []) {
  if (!text || vocabList.length === 0) return text
  
  // 构建词汇正则表达式
  const vocabPattern = vocabList
    .filter(v => vocabulary[v.toLowerCase()])
    .sort((a, b) => b.length - a.length) // 长词优先匹配
    .map(v => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  
  if (!vocabPattern) return text

  const regex = new RegExp(`\\b(${vocabPattern})\\b`, 'gi')
  const parts = text.split(regex)
  
  return parts.map((part, index) => {
    const lowerPart = part.toLowerCase()
    if (vocabulary[lowerPart]) {
      return <VocabularyWord key={index} word={lowerPart} inline={true} />
    }
    return part
  })
}

// 渲染带有Markdown样式的文本
function renderFormattedText(text, vocabList = []) {
  if (!text) return null
  
  // 分割文本为行
  const lines = text.split('\n')
  
  return lines.map((line, lineIndex) => {
    // 处理标题（**bold**）
    let processedLine = line
    const boldRegex = /\*\*(.+?)\*\*/g
    const elements = []
    let lastIndex = 0
    let match
    
    while ((match = boldRegex.exec(line)) !== null) {
      // 添加前面的普通文本
      if (match.index > lastIndex) {
        const plainText = line.slice(lastIndex, match.index)
        elements.push(
          <span key={`plain-${lineIndex}-${lastIndex}`}>
            {processTextWithVocabulary(plainText, vocabList)}
          </span>
        )
      }
      // 添加粗体文本
      elements.push(
        <strong key={`bold-${lineIndex}-${match.index}`} className="text-bio-accent font-semibold">
          {processTextWithVocabulary(match[1], vocabList)}
        </strong>
      )
      lastIndex = match.index + match[0].length
    }
    
    // 添加剩余文本
    if (lastIndex < line.length) {
      elements.push(
        <span key={`end-${lineIndex}`}>
          {processTextWithVocabulary(line.slice(lastIndex), vocabList)}
        </span>
      )
    }
    
    // 如果没有粗体，直接处理词汇
    if (elements.length === 0) {
      elements.push(
        <span key={`line-${lineIndex}`}>
          {processTextWithVocabulary(line, vocabList)}
        </span>
      )
    }
    
    return (
      <span key={`line-wrapper-${lineIndex}`}>
        {elements}
        {lineIndex < lines.length - 1 && <br />}
      </span>
    )
  })
}

function TopicPage() {
  const { topicId } = useParams()
  const { progress, markTopicComplete, saveQuizScore } = useStore()
  const [showQuiz, setShowQuiz] = useState(null)
  const [showTranslations, setShowTranslations] = useState({})
  
  const topic = topics.find(t => t.id === topicId)
  const relatedDecks = Object.values(flashcardDecks).filter(d => d.topicId === topicId)
  const relatedQuizzes = Object.values(quizzes).filter(q => q.topicId === topicId)
  
  // 切换翻译显示
  const toggleTranslation = (sectionId) => {
    setShowTranslations(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }
  
  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-bio-dark mb-4">
            主題未找到
          </h1>
          <Link to="/" className="btn-bio-outline">
            返回主頁
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按鈕 */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-bio-dark/60 hover:text-bio-dark transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          返回主頁
        </Link>

        {/* 主題標題 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
              style={{ backgroundColor: `${topic.color}20` }}
            >
              {topic.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: `${topic.color}30`, color: topic.color }}
                >
                  Topic {topic.number}
                </span>
              </div>
              <h1 className="font-display font-bold text-3xl text-bio-dark mb-2">
                {topic.titleCn}
              </h1>
              <p className="text-bio-accent/70 text-lg">{topic.title}</p>
              <p className="text-bio-dark/60 mt-3">{topic.descriptionCn}</p>
            </div>
          </div>
        </motion.div>

        {/* Quiz Modal */}
        {showQuiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="card-bio">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-2xl text-bio-dark">
                  {showQuiz.titleCn}
                </h2>
                <button
                  onClick={() => setShowQuiz(null)}
                  className="text-bio-dark/60 hover:text-bio-dark transition-colors"
                >
                  ✕ 關閉
                </button>
              </div>
              <Quiz 
                quiz={showQuiz} 
                onComplete={(result) => {
                  saveQuizScore(showQuiz.id, result.percentage)
                  setTimeout(() => setShowQuiz(null), 3000)
                }}
              />
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 模組列表 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <h2 className="font-display font-bold text-xl text-bio-dark mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-bio-accent" />
              學習模組
            </h2>
            
            {topic.modules.map((module, index) => {
              const isCompleted = progress.completedTopics.includes(module.id)
              const moduleContent = moduleContents[module.id]
              
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="card-bio group"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-bio-accent" />
                      ) : (
                        <Circle className="w-6 h-6 text-bio-dark/30" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-bio-dark group-hover:text-bio-accent transition-colors">
                        {module.titleCn}
                      </h3>
                      <p className="text-bio-dark/60 text-sm mb-3">{module.title}</p>
                      
                      {/* 模組內容預覽 - 英文為主 */}
                      {moduleContent && (
                        <div className="mt-4 space-y-4">
                          {(moduleContent.sections || moduleContent.content || []).map((section, i) => {
                            const sectionId = section.id || `section-${i}`
                            const vocabList = section.vocabularies || []
                            const isTranslationVisible = showTranslations[sectionId]
                            
                            // 文本類型 - 英文為主
                            if (section.type === 'text') {
                              return (
                                <div key={i} className="bg-gray-50 rounded-xl p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-semibold text-bio-accent">
                                      {section.title}
                                    </h4>
                                    {section.translation && (
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-bio-dark/50 hover:text-bio-accent transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? '隱藏中文' : '顯示中文'}
                                        {isTranslationVisible ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                      </button>
                                    )}
                                  </div>
                                  
                                  {/* 英文內容 - 帶詞彙高亮 */}
                                  <div className="text-bio-dark/80 text-sm leading-relaxed">
                                    {renderFormattedText(section.text, vocabList)}
                                  </div>
                                  
                                  {/* 中文翻譯 - 可折疊 */}
                                  {section.translation && isTranslationVisible && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="mt-3 pt-3 border-t border-bio-accent/20"
                                    >
                                      <p className="text-bio-dark/50 text-sm whitespace-pre-line">
                                        {section.translation}
                                      </p>
                                    </motion.div>
                                  )}
                                  
                                  {/* 詞彙列表 */}
                                  {vocabList.length > 0 && (
                                    <div className="mt-3 pt-3 border-t border-bio-accent/20">
                                      <p className="text-xs text-bio-dark/40 mb-2">📚 Key Vocabulary (click to learn):</p>
                                      <div className="flex flex-wrap gap-2">
                                        {vocabList.map((word, vi) => (
                                          <VocabularyWord key={vi} word={word} inline={true} showTranslation={true} />
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )
                            }
                            
                            // 信息類型
                            if (section.type === 'info') {
                              return (
                                <div key={i} className="bg-bio-secondary/10 border border-bio-secondary/30 rounded-xl p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium text-bio-accent">
                                      ℹ️ {section.title}
                                    </h4>
                                    {section.translation && (
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-bio-dark/50 hover:text-bio-accent transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? '隱藏' : '中文'}
                                      </button>
                                    )}
                                  </div>
                                  <div className="text-bio-dark/80 text-sm">
                                    {renderFormattedText(section.text, vocabList)}
                                  </div>
                                  {section.translation && isTranslationVisible && (
                                    <p className="mt-2 text-bio-dark/50 text-xs">{section.translation}</p>
                                  )}
                                </div>
                              )
                            }
                            
                            // 高亮/提示類型
                            if (section.type === 'highlight') {
                              return (
                                <div key={i} className="bg-bio-accent/10 border border-bio-accent/30 rounded-xl p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium text-bio-accent">
                                      💡 {section.title}
                                    </h4>
                                    {section.translation && (
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-bio-dark/50 hover:text-bio-accent transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? '隱藏' : '中文'}
                                      </button>
                                    )}
                                  </div>
                                  <div className="text-bio-dark/80 text-sm">
                                    {renderFormattedText(section.text, vocabList)}
                                  </div>
                                  {section.translation && isTranslationVisible && (
                                    <p className="mt-2 text-bio-dark/50 text-xs">{section.translation}</p>
                                  )}
                                </div>
                              )
                            }
                            
                            // 互動連結類型
                            if (section.type === 'interactive') {
                              return (
                                <Link
                                  key={i}
                                  to={section.linkTo}
                                  className="flex items-center gap-3 bg-bio-secondary/20 hover:bg-bio-secondary/30 rounded-xl p-4 transition-colors"
                                >
                                  <FlaskConical className="w-5 h-5 text-bio-accent" />
                                  <div>
                                    <span className="text-bio-dark font-medium block">
                                      {section.linkText}
                                    </span>
                                    {section.linkTextCn && (
                                      <span className="text-bio-dark/50 text-sm">
                                        {section.linkTextCn}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              )
                            }
                            
                            // 比較表格類型 - 英文為主
                            if (section.type === 'comparison') {
                              // 如果有 items 数组，渲染表格；否则渲染文本内容
                              if (section.items && Array.isArray(section.items)) {
                                return (
                                  <div key={i} className="bg-gray-50 rounded-xl p-4 overflow-x-auto">
                                    <div className="flex items-center justify-between mb-3">
                                      <h4 className="font-medium text-bio-accent">
                                        {section.title}
                                      </h4>
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-bio-dark/50 hover:text-bio-accent transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? 'English' : '中文'}
                                      </button>
                                    </div>
                                    <table className="w-full text-sm">
                                      <thead>
                                        <tr className="border-b border-bio-accent/20">
                                          {(isTranslationVisible ? section.headersCn : section.headers || ['Feature', 'Animal Cell', 'Plant Cell']).map((header, hi) => (
                                            <th key={hi} className={`py-2 text-bio-dark/60 px-2 ${hi === 0 ? 'text-left' : 'text-center'}`}>
                                              {header}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {section.items.map((row, ri) => (
                                          <tr key={ri} className="border-b border-bio-accent/10">
                                            <td className="py-2 text-bio-dark px-2 font-medium">
                                              {isTranslationVisible ? row.featureCn : row.feature}
                                            </td>
                                            <td className="text-center py-2 text-bio-dark/70 px-2">
                                              {isTranslationVisible ? row.animalCn : row.animal}
                                            </td>
                                            <td className="text-center py-2 text-bio-dark/70 px-2">
                                              {isTranslationVisible ? row.plantCn : row.plant}
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                )
                              }
                              
                              // 没有 items 时，按文本内容渲染
                              return (
                                <div key={i} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-semibold text-bio-accent">
                                      ⚖️ {section.title}
                                    </h4>
                                    {section.translation && (
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-bio-dark/50 hover:text-bio-accent transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? '隱藏中文' : '顯示中文'}
                                      </button>
                                    )}
                                  </div>
                                  <div className="text-bio-dark/80 text-sm leading-relaxed whitespace-pre-line">
                                    {renderFormattedText(section.text, vocabList)}
                                  </div>
                                  {section.translation && isTranslationVisible && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      className="mt-3 pt-3 border-t border-blue-200"
                                    >
                                      <p className="text-bio-dark/50 text-sm whitespace-pre-line">
                                        {section.translation}
                                      </p>
                                    </motion.div>
                                  )}
                                  {vocabList.length > 0 && (
                                    <div className="mt-3 pt-3 border-t border-blue-200">
                                      <p className="text-xs text-bio-dark/40 mb-2">📚 Key Vocabulary:</p>
                                      <div className="flex flex-wrap gap-2">
                                        {vocabList.map((word, vi) => (
                                          <VocabularyWord key={vi} word={word} inline={true} showTranslation={true} />
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )
                            }
                            
                            // 功能列表類型
                            if (section.type === 'functions') {
                              if (!section.items || !Array.isArray(section.items)) {
                                return null // 跳过没有 items 的 functions 类型
                              }
                              return (
                                <div key={i} className="bg-gray-50 rounded-xl p-4">
                                  <h4 className="font-medium text-bio-accent mb-4 flex items-center gap-2">
                                    <Droplets className="w-5 h-5" />
                                    {section.title || section.titleCn}
                                  </h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {section.items.map((func, fi) => (
                                      <div key={fi} className="bg-gray-100 rounded-lg p-3">
                                        <div className="flex items-center gap-2 mb-2">
                                          <span className="text-2xl">{func.icon}</span>
                                          <h5 className="font-medium text-bio-dark text-sm">
                                            {func.title || func.titleCn}
                                          </h5>
                                        </div>
                                        <p className="text-bio-dark/70 text-xs mb-1">
                                          {func.description || func.descriptionCn}
                                        </p>
                                        {(func.example || func.exampleCn) && (
                                          <p className="text-bio-accent/80 text-xs italic">
                                            e.g. {func.example || func.exampleCn}
                                          </p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )
                            }
                            
                            // 數據表格類型
                            if (section.type === 'table') {
                              if (!section.data || !Array.isArray(section.data)) {
                                return null // 跳过没有 data 的 table 类型
                              }
                              return (
                                <div key={i} className="bg-gray-50 rounded-xl p-4 overflow-x-auto">
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-medium text-bio-accent flex items-center gap-2">
                                      <Table className="w-5 h-5" />
                                      {section.title || section.titleCn}
                                    </h4>
                                    <button
                                      onClick={() => toggleTranslation(sectionId)}
                                      className="flex items-center gap-1 text-xs text-bio-dark/50 hover:text-bio-accent transition-colors"
                                    >
                                      <Languages className="w-3 h-3" />
                                      {isTranslationVisible ? 'English' : '中文'}
                                    </button>
                                  </div>
                                  <table className="w-full text-sm">
                                    <thead>
                                      <tr className="border-b border-bio-accent/20">
                                        <th className="text-left py-2 text-bio-dark/60 px-2">
                                          {isTranslationVisible ? '離子' : 'Ion'}
                                        </th>
                                        <th className="text-left py-2 text-bio-dark/60 px-2">
                                          {isTranslationVisible ? '在動物中' : 'In Animals'}
                                        </th>
                                        <th className="text-left py-2 text-bio-dark/60 px-2">
                                          {isTranslationVisible ? '在植物中' : 'In Plants'}
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {section.data.map((row, ri) => (
                                        <tr key={ri} className="border-b border-bio-accent/10">
                                          <td className="py-2 text-bio-dark px-2 font-medium">
                                            {isTranslationVisible ? row.ionCn : row.ion}
                                          </td>
                                          <td className="py-2 text-bio-dark/70 px-2 text-sm">
                                            {isTranslationVisible ? (row.animalsCn || row.animals) : row.animals}
                                          </td>
                                          <td className="py-2 text-bio-dark/70 px-2 text-sm">
                                            {isTranslationVisible ? (row.plantsCn || row.plants) : row.plants}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              )
                            }
                            
                            // 舊格式兼容 - contentCn
                            if (section.contentCn && !section.text) {
                              return (
                                <div key={i} className="bg-gray-50 rounded-xl p-4">
                                  <h4 className="font-medium text-bio-accent mb-2">
                                    {section.titleCn}
                                  </h4>
                                  <div className="text-bio-dark/70 text-sm whitespace-pre-line">
                                    {section.contentCn}
                                  </div>
                                </div>
                              )
                            }
                            
                            return null
                          })}
                        </div>
                      )}
                      
                      {/* 操作按鈕 */}
                      <div className="flex items-center gap-3 mt-4">
                        {!isCompleted && (
                          <button
                            onClick={() => markTopicComplete(module.id)}
                            className="text-sm text-bio-accent hover:text-bio-dark transition-colors flex items-center gap-1"
                          >
                            <CheckCircle className="w-4 h-4" />
                            標記完成
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* 側邊欄 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* 學習進度 */}
            <div className="card-bio">
              <h3 className="font-display font-bold text-bio-dark mb-4">
                📊 學習進度
              </h3>
              <div className="progress-bar mb-2">
                <div
                  className="progress-bar-fill"
                  style={{ 
                    width: `${(topic.modules.filter(m => 
                      progress.completedTopics.includes(m.id)
                    ).length / topic.modules.length) * 100}%` 
                  }}
                />
              </div>
              <p className="text-sm text-bio-dark/60">
                {topic.modules.filter(m => progress.completedTopics.includes(m.id)).length} / {topic.modules.length} 模組完成
              </p>
            </div>

            {/* 相關練習題 */}
            {relatedQuizzes.length > 0 && (
              <div className="card-bio">
                <h3 className="font-display font-bold text-bio-dark mb-4 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-bio-accent" />
                  練習測驗
                </h3>
                <div className="space-y-3">
                  {relatedQuizzes.map(quiz => (
                    <button
                      key={quiz.id}
                      onClick={() => setShowQuiz(quiz)}
                      className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-bio-accent/20 transition-colors"
                    >
                      <h4 className="font-medium text-bio-dark">{quiz.titleCn}</h4>
                      <p className="text-sm text-bio-dark/60">{quiz.questions.length} 道題目</p>
                      {progress.quizScores[quiz.id] && (
                        <p className="text-xs text-bio-accent mt-1">
                          最佳成績：{progress.quizScores[quiz.id]}%
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 相關閃卡 */}
            {relatedDecks.length > 0 && (
              <div className="card-bio">
                <h3 className="font-display font-bold text-bio-dark mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-bio-accent" />
                  相關閃卡
                </h3>
                <div className="space-y-3">
                  {relatedDecks.map(deck => (
                    <Link
                      key={deck.id}
                      to={`/flashcards/${deck.id}`}
                      className="block p-3 rounded-xl bg-gray-50 hover:bg-bio-accent/20 transition-colors"
                    >
                      <h4 className="font-medium text-bio-dark">{deck.titleCn}</h4>
                      <p className="text-sm text-bio-dark/60">{deck.cards.length} 張卡片</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 快速連結 */}
            <div className="card-bio">
              <h3 className="font-display font-bold text-bio-dark mb-4">
                🔗 快速連結
              </h3>
              <div className="space-y-2">
                <Link
                  to="/cell-viewer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-bio-accent/20 transition-colors"
                >
                  <FlaskConical className="w-5 h-5 text-bio-accent" />
                  <span className="text-bio-dark">3D 細胞觀察器</span>
                </Link>
                <Link
                  to="/microscope"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-bio-accent/20 transition-colors"
                >
                  <PlayCircle className="w-5 h-5 text-bio-accent" />
                  <span className="text-bio-dark">虛擬顯微鏡</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TopicPage
