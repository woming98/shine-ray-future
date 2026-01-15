import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, BookOpen, Lightbulb, HelpCircle, X, ExternalLink } from 'lucide-react'
import { vocabulary } from '../data/vocabulary'

/**
 * VocabularyWord Component
 * 可点击的词汇组件，支持发音和详细信息展示
 */
function VocabularyWord({ word, inline = true, showTranslation = true }) {
  const [showDetails, setShowDetails] = useState(false)
  const vocabData = vocabulary[word.toLowerCase()]
  
  // 如果词汇不存在于数据库中，返回普通文本
  if (!vocabData) {
    return <span className="text-bio-dark">{word}</span>
  }
  
  // 发音功能（使用 Web Speech API）
  const speak = () => {
    if ('speechSynthesis' in window) {
      // 取消之前的语音
      window.speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(vocabData.word)
      utterance.lang = 'en-US'
      utterance.rate = 0.75  // 稍慢，便于学习
      utterance.pitch = 1.0
      utterance.volume = 1.0
      
      window.speechSynthesis.speak(utterance)
    } else {
      alert('Your browser does not support text-to-speech.')
    }
  }
  
  // 行内模式（用于段落中的词汇）
  if (inline) {
    return (
      <>
        <span className="relative inline-block group">
          <button
            onClick={() => setShowDetails(true)}
            className="text-bio-accent hover:text-bio-dark underline decoration-dotted decoration-bio-accent/50 underline-offset-2 cursor-help font-medium transition-colors"
          >
            {vocabData.word}
          </button>
          
          {/* 悬停提示 Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-40 whitespace-nowrap">
            <div className="glass rounded-lg px-3 py-2 text-sm">
              <div className="flex items-center gap-2 mb-1">
                <Volume2 className="w-3 h-3 text-bio-accent" />
                <span className="text-bio-dark font-mono">{vocabData.phonetic}</span>
              </div>
              {showTranslation && (
                <p className="text-bio-dark/70 text-xs">{vocabData.chinese}</p>
              )}
              <p className="text-bio-accent/70 text-xs mt-1">Click for details</p>
            </div>
          </div>
        </span>
        
        {/* 详细信息模态窗口 */}
        <AnimatePresence>
          {showDetails && (
            <VocabularyModal
              vocab={vocabData}
              onClose={() => setShowDetails(false)}
              onSpeak={speak}
            />
          )}
        </AnimatePresence>
      </>
    )
  }
  
  // 卡片模式
  return <VocabularyCard vocab={vocabData} onSpeak={speak} />
}

/**
 * VocabularyModal Component
 * 词汇详细信息模态窗口
 */
function VocabularyModal({ vocab, onClose, onSpeak }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-2xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
      >
        <VocabularyDetail vocab={vocab} onSpeak={onSpeak} onClose={onClose} />
      </motion.div>
    </motion.div>
  )
}

/**
 * VocabularyDetail Component
 * 词汇详细内容展示
 */
function VocabularyDetail({ vocab, onSpeak, onClose }) {
  // 难度颜色
  const difficultyColors = {
    easy: 'text-green-400',
    medium: 'text-yellow-400',
    hard: 'text-red-400'
  }
  
  return (
    <div className="space-y-6">
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-lg hover:bg-bio-accent/20 transition-colors"
      >
        <X className="w-5 h-5 text-bio-dark/60 hover:text-bio-dark" />
      </button>
      
      {/* Header - 词汇标题 */}
      <div className="border-b border-bio-accent/20 pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h2 className="font-display font-bold text-3xl text-bio-dark mb-2">
              {vocab.word}
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-bio-accent/80 text-lg font-mono">{vocab.phonetic}</p>
              <span className={`text-xs px-2 py-1 rounded-full bg-white/50 ${difficultyColors[vocab.difficulty]}`}>
                {vocab.difficulty.toUpperCase()}
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-bio-accent/20 text-bio-accent">
                {vocab.category}
              </span>
            </div>
          </div>
          <button
            onClick={onSpeak}
            className="p-3 rounded-xl bg-bio-accent/20 hover:bg-bio-accent/30 transition-all group"
            title="Pronounce"
          >
            <Volume2 className="w-6 h-6 text-bio-accent group-hover:scale-110 transition-transform" />
          </button>
        </div>
        <p className="text-bio-dark/60 text-lg">{vocab.chinese}</p>
      </div>
      
      {/* Definition - 定义 */}
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-bio-accent" />
          <h3 className="font-display font-bold text-bio-dark">Definition</h3>
        </div>
        <p className="text-bio-dark/80 leading-relaxed">{vocab.definition}</p>
      </div>
      
      {/* Etymology - 词源 */}
      {vocab.etymology && (
        <div className="bg-bio-secondary/10 rounded-xl p-4 border border-bio-secondary/30">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-bio-accent" />
            <h3 className="font-display font-bold text-bio-dark">Word Origin (Etymology)</h3>
          </div>
          <div className="space-y-3 text-sm">
            {vocab.etymology.prefix && (
              <div className="flex items-start gap-3">
                <span className="text-bio-accent font-mono font-bold min-w-[80px]">
                  {vocab.etymology.prefix}
                </span>
                <span className="text-bio-dark/70">
                  = {vocab.etymology.prefixMeaning}
                </span>
              </div>
            )}
            <div className="flex items-start gap-3">
              <span className="text-bio-accent font-mono font-bold min-w-[80px]">
                {vocab.etymology.root}
              </span>
              <span className="text-bio-dark/70">
                = {vocab.etymology.rootMeaning}
              </span>
            </div>
            <div className="mt-3 p-3 bg-white/50 rounded-lg border-l-4 border-bio-accent">
              <p className="text-bio-dark font-medium">{vocab.etymology.breakdown}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Mnemonic - 记忆技巧 */}
      {vocab.mnemonic && (
        <div className="bg-gradient-to-br from-bio-accent/10 to-bio-secondary/10 rounded-xl p-4 border-2 border-bio-accent/30">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-bio-accent animate-pulse" />
            <h3 className="font-display font-bold text-bio-accent">💡 Memory Tip</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white/40 rounded-lg p-3">
              <p className="text-xs text-bio-accent/70 mb-2 font-medium">
                📌 {vocab.mnemonic.technique}
              </p>
              <p className="text-bio-dark font-medium leading-relaxed">
                {vocab.mnemonic.tip}
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border-l-2 border-bio-accent/50">
              <p className="text-bio-dark/70 text-sm">{vocab.mnemonic.tipCn}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Examples - 例句 */}
      {vocab.examples && vocab.examples.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="font-display font-bold text-bio-dark mb-3">
            📝 Examples in Context
          </h3>
          <ul className="space-y-3">
            {vocab.examples.map((example, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-white/40 rounded-lg">
                <span className="text-bio-accent font-bold text-lg mt-0.5">{i + 1}.</span>
                <span className="text-bio-dark/80 leading-relaxed">{example}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Related Words - 相关词汇 */}
      {vocab.relatedWords && vocab.relatedWords.length > 0 && (
        <div className="bg-white/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <ExternalLink className="w-5 h-5 text-bio-accent" />
            <h3 className="font-display font-bold text-bio-dark">Related Words</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {vocab.relatedWords.map((related) => (
              <VocabularyWord key={related} word={related} inline={true} showTranslation={false} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * VocabularyCard Component
 * 词汇卡片（用于列表展示）
 */
function VocabularyCard({ vocab, onSpeak }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <motion.div
      layout
      className="card-bio cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-display font-bold text-xl text-bio-dark">
              {vocab.word}
            </h3>
            <span className="text-bio-accent/70 text-sm font-mono">
              {vocab.phonetic}
            </span>
          </div>
          <p className="text-bio-dark/60 mb-2">{vocab.chinese}</p>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-3 border-t border-bio-accent/20"
            >
              <p className="text-bio-dark/80 text-sm">{vocab.definition}</p>
            </motion.div>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onSpeak()
          }}
          className="p-2 rounded-lg hover:bg-bio-accent/20 transition-colors"
        >
          <Volume2 className="w-5 h-5 text-bio-accent" />
        </button>
      </div>
    </motion.div>
  )
}

/**
 * VocabularyList Component
 * 词汇列表组件
 */
export function VocabularyList({ words, columns = 1 }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
      {words.map((word) => {
        const vocabData = vocabulary[word.toLowerCase()]
        if (!vocabData) return null
        
        const speak = () => {
          if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel()
            const utterance = new SpeechSynthesisUtterance(vocabData.word)
            utterance.lang = 'en-US'
            utterance.rate = 0.75
            window.speechSynthesis.speak(utterance)
          }
        }
        
        return (
          <VocabularyCard key={word} vocab={vocabData} onSpeak={speak} />
        )
      })}
    </div>
  )
}

export default VocabularyWord
