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
        <strong key={`bold-${lineIndex}-${match.index}`} className="text-green-600 font-semibold">
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
          <h1 className="text-2xl font-display font-bold text-green-900 mb-4">
            主題未找到
          </h1>
          <Link to="/subjects/biology" className="btn-bio-outline">
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
          to="/subjects/biology" 
          className="inline-flex items-center gap-2 text-gray-700 hover:text-green-900 transition-colors mb-6"
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
              <h1 className="font-display font-bold text-3xl text-green-900 mb-2">
                {topic.titleCn}
              </h1>
              <p className="text-green-600/70 text-lg">{topic.title}</p>
              <p className="text-gray-700 mt-3">{topic.descriptionCn}</p>
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
                <h2 className="font-display font-bold text-2xl text-green-900">
                  {showQuiz.titleCn}
                </h2>
                <button
                  onClick={() => setShowQuiz(null)}
                  className="text-gray-700 hover:text-green-900 transition-colors"
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
            <h2 className="font-display font-bold text-xl text-green-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
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
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <Circle className="w-6 h-6 text-green-900/30" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-green-900 group-hover:text-green-600 transition-colors">
                        {module.titleCn}
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">{module.title}</p>
                      
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
                                <div key={i} className="bg-green-50 rounded-xl p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-semibold text-green-600">
                                      {section.title}
                                    </h4>
                                    {section.translation && (
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-green-900/50 hover:text-green-600 transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? '隱藏中文' : '顯示中文'}
                                        {isTranslationVisible ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                      </button>
                                    )}
                                  </div>
                                  
                                  {/* 英文內容 - 帶詞彙高亮 */}
                                  <div className="text-gray-800 text-sm leading-relaxed">
                                    {renderFormattedText(section.text, vocabList)}
                                  </div>
                                  
                                  {/* 中文翻譯 - 可折疊 */}
                                  {section.translation && isTranslationVisible && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="mt-3 pt-3 border-t border-green-500/20"
                                    >
                                      <p className="text-green-900/50 text-sm whitespace-pre-line">
                                        {section.translation}
                                      </p>
                                    </motion.div>
                                  )}
                                  
                                  {/* 詞彙列表 */}
                                  {vocabList.length > 0 && (
                                    <div className="mt-3 pt-3 border-t border-green-500/20">
                                      <p className="text-xs text-green-900/40 mb-2">📚 Key Vocabulary (click to learn):</p>
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
                                <div key={i} className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium text-green-600">
                                      ℹ️ {section.title}
                                    </h4>
                                    {section.translation && (
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-green-900/50 hover:text-green-600 transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? '隱藏' : '中文'}
                                      </button>
                                    )}
                                  </div>
                                  <div className="text-gray-800 text-sm">
                                    {renderFormattedText(section.text, vocabList)}
                                  </div>
                                  {section.translation && isTranslationVisible && (
                                    <p className="mt-2 text-green-900/50 text-xs">{section.translation}</p>
                                  )}
                                </div>
                              )
                            }
                            
                            // 高亮/提示類型
                            if (section.type === 'highlight') {
                              return (
                                <div key={i} className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium text-green-600">
                                      💡 {section.title}
                                    </h4>
                                    {section.translation && (
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-green-900/50 hover:text-green-600 transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? '隱藏' : '中文'}
                                      </button>
                                    )}
                                  </div>
                                  <div className="text-gray-800 text-sm">
                                    {renderFormattedText(section.text, vocabList)}
                                  </div>
                                  {section.translation && isTranslationVisible && (
                                    <p className="mt-2 text-green-900/50 text-xs">{section.translation}</p>
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
                                  <FlaskConical className="w-5 h-5 text-green-600" />
                                  <div>
                                    <span className="text-green-900 font-medium block">
                                      {section.linkText}
                                    </span>
                                    {section.linkTextCn && (
                                      <span className="text-green-900/50 text-sm">
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
                                  <div key={i} className="bg-green-50 rounded-xl p-4 overflow-x-auto">
                                    <div className="flex items-center justify-between mb-3">
                                      <h4 className="font-medium text-green-600">
                                        {section.title}
                                      </h4>
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-green-900/50 hover:text-green-600 transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? 'English' : '中文'}
                                      </button>
                                    </div>
                                    <table className="w-full text-sm">
                                      <thead>
                                        <tr className="border-b border-green-500/20">
                                          {(isTranslationVisible ? section.headersCn : section.headers || ['Feature', 'Animal Cell', 'Plant Cell']).map((header, hi) => (
                                            <th key={hi} className={`py-2 text-gray-700 px-2 ${hi === 0 ? 'text-left' : 'text-center'}`}>
                                              {header}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {section.items.map((row, ri) => (
                                          <tr key={ri} className="border-b border-green-500/10">
                                            <td className="py-2 text-green-900 px-2 font-medium">
                                              {isTranslationVisible ? row.featureCn : row.feature}
                                            </td>
                                            <td className="text-center py-2 text-gray-700 px-2">
                                              {isTranslationVisible ? row.animalCn : row.animal}
                                            </td>
                                            <td className="text-center py-2 text-gray-700 px-2">
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
                                    <h4 className="font-semibold text-green-600">
                                      ⚖️ {section.title}
                                    </h4>
                                    {section.translation && (
                                      <button
                                        onClick={() => toggleTranslation(sectionId)}
                                        className="flex items-center gap-1 text-xs text-green-900/50 hover:text-green-600 transition-colors"
                                      >
                                        <Languages className="w-3 h-3" />
                                        {isTranslationVisible ? '隱藏中文' : '顯示中文'}
                                      </button>
                                    )}
                                  </div>
                                  <div className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
                                    {renderFormattedText(section.text, vocabList)}
                                  </div>
                                  {section.translation && isTranslationVisible && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      className="mt-3 pt-3 border-t border-blue-200"
                                    >
                                      <p className="text-green-900/50 text-sm whitespace-pre-line">
                                        {section.translation}
                                      </p>
                                    </motion.div>
                                  )}
                                  {vocabList.length > 0 && (
                                    <div className="mt-3 pt-3 border-t border-blue-200">
                                      <p className="text-xs text-green-900/40 mb-2">📚 Key Vocabulary:</p>
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
                                <div key={i} className="bg-green-50 rounded-xl p-4">
                                  <h4 className="font-medium text-green-600 mb-4 flex items-center gap-2">
                                    <Droplets className="w-5 h-5" />
                                    {section.title || section.titleCn}
                                  </h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {section.items.map((func, fi) => (
                                      <div key={fi} className="bg-gray-100 rounded-lg p-3">
                                        <div className="flex items-center gap-2 mb-2">
                                          <span className="text-2xl">{func.icon}</span>
                                          <h5 className="font-medium text-green-900 text-sm">
                                            {func.title || func.titleCn}
                                          </h5>
                                        </div>
                                        <p className="text-gray-700 text-xs mb-1">
                                          {func.description || func.descriptionCn}
                                        </p>
                                        {(func.example || func.exampleCn) && (
                                          <p className="text-green-600/80 text-xs italic">
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
                                <div key={i} className="bg-green-50 rounded-xl p-4 overflow-x-auto">
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-medium text-green-600 flex items-center gap-2">
                                      <Table className="w-5 h-5" />
                                      {section.title || section.titleCn}
                                    </h4>
                                    <button
                                      onClick={() => toggleTranslation(sectionId)}
                                      className="flex items-center gap-1 text-xs text-green-900/50 hover:text-green-600 transition-colors"
                                    >
                                      <Languages className="w-3 h-3" />
                                      {isTranslationVisible ? 'English' : '中文'}
                                    </button>
                                  </div>
                                  <table className="w-full text-sm">
                                    <thead>
                                      <tr className="border-b border-green-500/20">
                                        <th className="text-left py-2 text-gray-700 px-2">
                                          {isTranslationVisible ? '離子' : 'Ion'}
                                        </th>
                                        <th className="text-left py-2 text-gray-700 px-2">
                                          {isTranslationVisible ? '在動物中' : 'In Animals'}
                                        </th>
                                        <th className="text-left py-2 text-gray-700 px-2">
                                          {isTranslationVisible ? '在植物中' : 'In Plants'}
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {section.data.map((row, ri) => (
                                        <tr key={ri} className="border-b border-green-500/10">
                                          <td className="py-2 text-green-900 px-2 font-medium">
                                            {isTranslationVisible ? row.ionCn : row.ion}
                                          </td>
                                          <td className="py-2 text-gray-700 px-2 text-sm">
                                            {isTranslationVisible ? (row.animalsCn || row.animals) : row.animals}
                                          </td>
                                          <td className="py-2 text-gray-700 px-2 text-sm">
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
                                <div key={i} className="bg-green-50 rounded-xl p-4">
                                  <h4 className="font-medium text-green-600 mb-2">
                                    {section.titleCn}
                                  </h4>
                                  <div className="text-gray-700 text-sm whitespace-pre-line">
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
                            className="text-sm text-green-600 hover:text-green-900 transition-colors flex items-center gap-1"
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
              <h3 className="font-display font-bold text-green-900 mb-4">
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
              <p className="text-sm text-gray-700">
                {topic.modules.filter(m => progress.completedTopics.includes(m.id)).length} / {topic.modules.length} 模組完成
              </p>
            </div>

            {/* 相關練習題 */}
            {relatedQuizzes.length > 0 && (
              <div className="card-bio">
                <h3 className="font-display font-bold text-green-900 mb-4 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-green-600" />
                  練習測驗
                </h3>
                <div className="space-y-3">
                  {relatedQuizzes.map(quiz => (
                    <button
                      key={quiz.id}
                      onClick={() => setShowQuiz(quiz)}
                      className="w-full text-left p-3 rounded-xl bg-green-50 hover:bg-green-500/20 transition-colors"
                    >
                      <h4 className="font-medium text-green-900">{quiz.titleCn}</h4>
                      <p className="text-sm text-gray-700">{quiz.questions.length} 道題目</p>
                      {progress.quizScores[quiz.id] && (
                        <p className="text-xs text-green-600 mt-1">
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
                <h3 className="font-display font-bold text-green-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  相關閃卡
                </h3>
                <div className="space-y-3">
                  {relatedDecks.map(deck => (
                    <Link
                      key={deck.id}
                      to={`/subjects/biology/flashcards/${deck.id}`}
                      className="block p-3 rounded-xl bg-green-50 hover:bg-green-500/20 transition-colors"
                    >
                      <h4 className="font-medium text-green-900">{deck.titleCn}</h4>
                      <p className="text-sm text-gray-700">{deck.cards.length} 張卡片</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 快速連結 */}
            <div className="card-bio">
              <h3 className="font-display font-bold text-green-900 mb-4">
                🔗 快速連結
              </h3>
              <div className="space-y-2">
                <Link
                  to="/subjects/biology/cell-viewer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-500/20 transition-colors"
                >
                  <FlaskConical className="w-5 h-5 text-green-600" />
                  <span className="text-green-900">3D 細胞觀察器</span>
                </Link>
                <Link
                  to="/subjects/biology/microscope"
                  className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-500/20 transition-colors"
                >
                  <PlayCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-900">虛擬顯微鏡</span>
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
