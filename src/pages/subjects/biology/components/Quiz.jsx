import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, RotateCcw, Trophy, ChevronRight } from 'lucide-react'

function Quiz({ quiz, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [isComplete, setIsComplete] = useState(false)
  const [showChinese, setShowChinese] = useState(true)

  const question = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100

  const handleAnswer = (answerIndex) => {
    if (showExplanation) return
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    const isCorrect = question.type === 'multiple-choice' 
      ? answerIndex === question.correctAnswer
      : question.type === 'true-false'
      ? answerIndex === (question.correctAnswer ? 0 : 1)
      : false
    
    if (isCorrect) {
      setScore(score + 1)
    }
    
    setAnsweredQuestions([...answeredQuestions, {
      questionId: question.id,
      correct: isCorrect,
      answer: answerIndex
    }])
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setIsComplete(true)
      if (onComplete) {
        onComplete({
          score,
          total: quiz.questions.length,
          percentage: Math.round((score / quiz.questions.length) * 100)
        })
      }
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredQuestions([])
    setIsComplete(false)
  }

  if (isComplete) {
    const percentage = Math.round((score / quiz.questions.length) * 100)
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-24 h-24 rounded-full bg-bio-accent/20 flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-12 h-12 text-bio-accent" />
        </div>
        <h2 className="font-display font-bold text-3xl text-bio-dark mb-2">
          {percentage >= 80 ? '🎉 Excellent!' : percentage >= 60 ? '👏 Good Job!' : '💪 Keep Practicing!'}
        </h2>
        <p className="text-bio-dark/60 mb-2">
          {showChinese ? '你的得分：' : 'Your score:'} {score} / {quiz.questions.length}
        </p>
        <div className="text-4xl font-display font-bold text-bio-accent mb-6">
          {percentage}%
        </div>
        <div className="flex gap-4 justify-center">
          <button onClick={handleReset} className="btn-bio-outline flex items-center gap-2">
            <RotateCcw className="w-5 h-5" />
            {showChinese ? '再試一次' : 'Try Again'}
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-bio-dark/60">
            {showChinese ? '問題' : 'Question'} {currentQuestion + 1} / {quiz.questions.length}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-sm text-bio-accent">
              {showChinese ? '得分：' : 'Score:'} {score}
            </span>
            <button
              onClick={() => setShowChinese(!showChinese)}
              className="px-3 py-1 rounded-lg text-sm glass hover:bg-bio-accent/20 transition-colors"
            >
              {showChinese ? '中文' : 'EN'}
            </button>
          </div>
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

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="card-bio"
        >
          <div className="mb-6">
            <h3 className="font-display font-bold text-xl text-bio-dark mb-2">
              {showChinese && question.questionCn ? question.questionCn : question.question}
            </h3>
            {showChinese && question.questionCn && (
              <p className="text-bio-dark/50 text-sm">{question.question}</p>
            )}
          </div>

          {/* Multiple Choice */}
          {question.type === 'multiple-choice' && (
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correctAnswer
                const showResult = showExplanation
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showExplanation}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : isSelected
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-gray-50 opacity-50'
                        : isSelected
                        ? 'bg-bio-accent/20 border-2 border-bio-accent'
                        : 'bg-gray-50 hover:bg-bio-accent/10 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <span className="text-bio-dark block">
                          {showChinese && question.optionsCn ? question.optionsCn[index] : option}
                        </span>
                        {showChinese && question.optionsCn && (
                          <span className="text-bio-dark/40 text-sm">{option}</span>
                        )}
                      </div>
                      {showResult && (
                        <span className="ml-3">
                          {isCorrect ? <Check className="w-6 h-6 text-green-500" /> : 
                           isSelected ? <X className="w-6 h-6 text-red-500" /> : null}
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {/* True/False */}
          {question.type === 'true-false' && (
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'True', labelCn: '正確 ✓', value: true },
                { label: 'False', labelCn: '錯誤 ✗', value: false }
              ].map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = (index === 0) === question.correctAnswer
                const showResult = showExplanation
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showExplanation}
                    className={`p-6 rounded-xl font-display font-bold text-lg transition-all ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : isSelected
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-gray-50 opacity-50'
                        : isSelected
                        ? 'bg-bio-accent/20 border-2 border-bio-accent'
                        : 'bg-gray-50 hover:bg-bio-accent/10 border-2 border-transparent'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-bio-dark">
                        {showChinese ? option.labelCn : option.label}
                      </div>
                      {showResult && (
                        <div className="mt-2">
                          {isCorrect ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : 
                           isSelected ? <X className="w-6 h-6 text-red-500 mx-auto" /> : null}
                        </div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl bg-bio-accent/10 border border-bio-accent/30"
              >
                <h4 className="font-medium text-bio-accent mb-2">
                  💡 {showChinese ? '解釋' : 'Explanation'}
                </h4>
                <p className="text-bio-dark/80 leading-relaxed">
                  {showChinese && question.explanationCn ? question.explanationCn : question.explanation}
                </p>
                {showChinese && question.explanationCn && (
                  <p className="text-bio-dark/50 text-sm mt-2">{question.explanation}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-right"
            >
              <button 
                onClick={handleNext} 
                className="btn-bio inline-flex items-center gap-2"
              >
                {currentQuestion < quiz.questions.length - 1 
                  ? (showChinese ? '下一題' : 'Next Question')
                  : (showChinese ? '查看結果' : 'View Results')
                }
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Quiz
