import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  X, 
  BookOpen,
  Shuffle,
  Volume2
} from 'lucide-react'
import { flashcardDecks } from '../data/topics'
import { useStore } from '../store/useStore'

function FlashcardsPage() {
  const { deckId } = useParams()
  const { incrementFlashcardsReviewed } = useStore()
  
  const [currentDeck, setCurrentDeck] = useState(null)
  const [cardIndex, setCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [reviewedCards, setReviewedCards] = useState(new Set())
  const [showChinese, setShowChinese] = useState(true)
  
  // 載入卡組
  useEffect(() => {
    if (deckId && flashcardDecks[deckId]) {
      setCurrentDeck(flashcardDecks[deckId])
      setCardIndex(0)
      setIsFlipped(false)
      setReviewedCards(new Set())
    }
  }, [deckId])
  
  const allDecks = Object.values(flashcardDecks)
  
  // 如果沒有選擇卡組，顯示卡組列表
  if (!deckId || !currentDeck) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display font-bold text-3xl md:text-4xl text-bio-dark mb-4">
              📚 閃卡學習
            </h1>
            <p className="text-bio-dark/60 max-w-xl mx-auto">
              選擇一個主題開始閃卡複習，高效記憶生物學概念
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {allDecks.map((deck, index) => (
              <motion.div
                key={deck.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={`/flashcards/${deck.id}`}
                  className="card-bio block group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-bio-accent/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-bio-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-bio-dark group-hover:text-bio-accent transition-colors">
                        {deck.titleCn}
                      </h3>
                      <p className="text-bio-dark/60 text-sm">{deck.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-bio-dark/50">
                      {deck.cards.length} 張卡片
                    </span>
                    <ArrowRight className="w-5 h-5 text-bio-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    )
  }
  
  const currentCard = currentDeck.cards[cardIndex]
  const progress = ((cardIndex + 1) / currentDeck.cards.length) * 100
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    if (!isFlipped && !reviewedCards.has(currentCard.id)) {
      setReviewedCards(new Set([...reviewedCards, currentCard.id]))
      incrementFlashcardsReviewed()
    }
  }
  
  const handleNext = () => {
    if (cardIndex < currentDeck.cards.length - 1) {
      setCardIndex(cardIndex + 1)
      setIsFlipped(false)
    }
  }
  
  const handlePrev = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1)
      setIsFlipped(false)
    }
  }
  
  const handleReset = () => {
    setCardIndex(0)
    setIsFlipped(false)
    setReviewedCards(new Set())
  }
  
  const handleShuffle = () => {
    const shuffledCards = [...currentDeck.cards].sort(() => Math.random() - 0.5)
    setCurrentDeck({ ...currentDeck, cards: shuffledCards })
    setCardIndex(0)
    setIsFlipped(false)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頂部導航 */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/flashcards" 
            className="inline-flex items-center gap-2 text-bio-dark/60 hover:text-bio-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回卡組列表
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowChinese(!showChinese)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                showChinese 
                  ? 'bg-bio-accent text-bio-dark' 
                  : 'glass text-bio-dark'
              }`}
            >
              {showChinese ? '中文' : 'EN'}
            </button>
          </div>
        </div>

        {/* 卡組標題 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-display font-bold text-2xl text-bio-dark mb-2">
            {currentDeck.titleCn}
          </h1>
          <p className="text-bio-dark/60">{currentDeck.title}</p>
        </motion.div>

        {/* 進度條 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-bio-dark/60">
              卡片 {cardIndex + 1} / {currentDeck.cards.length}
            </span>
            <span className="text-sm text-bio-accent">
              已複習 {reviewedCards.size} 張
            </span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* 閃卡 */}
        <div className="flex justify-center mb-8">
          <div 
            className="flashcard w-full max-w-lg h-80 cursor-pointer"
            onClick={handleFlip}
          >
            <motion.div
              className="flashcard-inner w-full h-full"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 正面 - 問題 */}
              <div 
                className="flashcard-front absolute inset-0 glass rounded-2xl p-8 flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-bio-accent/60 text-sm mb-4 font-medium">
                  問題 Question
                </div>
                <p className="text-xl md:text-2xl text-bio-dark font-display leading-relaxed">
                  {showChinese ? currentCard.frontCn : currentCard.front}
                </p>
                <div className="mt-6 text-bio-dark/40 text-sm">
                  點擊翻轉查看答案
                </div>
              </div>
              
              {/* 背面 - 答案 */}
              <div 
                className="flashcard-back absolute inset-0 glass rounded-2xl p-8 flex flex-col items-center justify-center text-center border-2 border-bio-accent/30"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="text-bio-accent text-sm mb-4 font-medium">
                  答案 Answer
                </div>
                <p className="text-lg md:text-xl text-bio-dark leading-relaxed whitespace-pre-line">
                  {showChinese ? currentCard.backCn : currentCard.back}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 控制按鈕 */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={cardIndex === 0}
            className={`p-4 rounded-xl transition-all ${
              cardIndex === 0 
                ? 'bg-gray-50 text-bio-dark/30 cursor-not-allowed' 
                : 'glass text-bio-dark hover:bg-bio-accent/20'
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleFlip}
            className="px-6 py-4 rounded-xl btn-bio flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            翻轉
          </button>
          
          <button
            onClick={handleNext}
            disabled={cardIndex === currentDeck.cards.length - 1}
            className={`p-4 rounded-xl transition-all ${
              cardIndex === currentDeck.cards.length - 1 
                ? 'bg-gray-50 text-bio-dark/30 cursor-not-allowed' 
                : 'glass text-bio-dark hover:bg-bio-accent/20'
            }`}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* 額外操作 */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-bio-dark/70 hover:text-bio-dark transition-colors"
          >
            <Shuffle className="w-4 h-4" />
            隨機排序
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-bio-dark/70 hover:text-bio-dark transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            重新開始
          </button>
        </div>

        {/* 鍵盤提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-bio-dark/40 text-sm">
            ⌨️ 鍵盤快捷鍵：← 上一張 | Space 翻轉 | → 下一張
          </p>
        </motion.div>

        {/* 完成提示 */}
        <AnimatePresence>
          {reviewedCards.size === currentDeck.cards.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-bio-dark/80 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setReviewedCards(new Set())}
            >
              <div className="glass rounded-3xl p-8 text-center max-w-md mx-4">
                <div className="w-20 h-20 rounded-full bg-bio-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-bio-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-bio-dark mb-2">
                  🎉 太棒了！
                </h2>
                <p className="text-bio-dark/70 mb-6">
                  你已經完成了這組閃卡的複習！
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleReset() }}
                    className="btn-bio-outline"
                  >
                    再學一次
                  </button>
                  <Link to="/flashcards" className="btn-bio">
                    選擇其他卡組
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default FlashcardsPage
