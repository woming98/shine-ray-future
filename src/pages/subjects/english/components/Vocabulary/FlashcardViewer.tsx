/**
 * 闪卡复习组件
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle } from 'lucide-react';
import { VocabularyItem } from '../../types';
import { Card, Button } from '../UI';

interface FlashcardViewerProps {
  words: VocabularyItem[];
  onMaster?: (wordId: string) => void;
}

export function FlashcardViewer({ words, onMaster }: FlashcardViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredWords, setMasteredWords] = useState<Set<string>>(new Set());

  const currentWord = words[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(words.length - 1);
    }
  };

  const handleMaster = () => {
    if (currentWord && onMaster) {
      onMaster(currentWord.id);
      setMasteredWords(prev => new Set([...prev, currentWord.id]));
      handleNext();
    }
  };

  if (words.length === 0) {
    return (
      <Card className="p-12 text-center">
        <p className="text-gray-600">没有词汇可以复习</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          进度：{currentIndex + 1} / {words.length}
        </div>
        <div className="text-sm text-emerald-600">
          已掌握：{masteredWords.size} / {words.length}
        </div>
      </div>

      <div className="relative h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWord.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="absolute inset-0"
          >
            <Card
              className="h-full cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="h-full flex items-center justify-center p-8">
                {!isFlipped ? (
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentWord.word}</h2>
                    {currentWord.phonetic && (
                      <p className="text-xl text-gray-500">/{currentWord.phonetic}/</p>
                    )}
                    <p className="text-sm text-gray-400 mt-4">点击卡片查看定义</p>
                  </div>
                ) : (
                  <div className="text-center max-w-2xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{currentWord.word}</h2>
                    <div className="space-y-4">
                      {currentWord.definitions.map((def, index) => (
                        <div key={index} className="text-left">
                          <p className="text-lg text-gray-700 mb-2">{def.meaning}</p>
                          {def.example && (
                            <p className="text-sm text-gray-600 italic">例：{def.example}</p>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6">点击卡片返回</p>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="secondary"
          onClick={handlePrev}
          icon={<ChevronLeft className="w-4 h-4" />}
        >
          上一张
        </Button>
        <Button
          variant="secondary"
          onClick={() => setIsFlipped(!isFlipped)}
          icon={<RotateCcw className="w-4 h-4" />}
        >
          翻转
        </Button>
        {onMaster && (
          <Button
            onClick={handleMaster}
            icon={<CheckCircle className="w-4 h-4" />}
          >
            已掌握
          </Button>
        )}
        <Button
          variant="secondary"
          onClick={handleNext}
          icon={<ChevronRight className="w-4 h-4" />}
        >
          下一张
        </Button>
      </div>
    </div>
  );
}
