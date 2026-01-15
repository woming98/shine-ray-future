/**
 * 文章展示组件
 * 支持词汇高亮和点击交互
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import type { ReadingPassage } from '../../../../../data/englishQuestions/types';
import { VocabularyHighlighter } from './VocabularyHighlighter';
import { SentenceAnalyzer } from './SentenceAnalyzer';
import { Button } from '../UI/Button';
import { useEnglishStore } from '../../store/useStore';

interface PassageViewerProps {
  passage: ReadingPassage;
  onWordClick?: (word: string) => void;
}

export function PassageViewer({ passage, onWordClick }: PassageViewerProps) {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedSentence, setSelectedSentence] = useState<string | null>(null);
  const { addToVocabularyBook } = useEnglishStore();

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
    setSelectedSentence(null);
    onWordClick?.(word);
  };


  const handleAddToVocabulary = (word: string) => {
    // 创建词汇项（简化版）
    addToVocabularyBook({
      id: `vocab-${word}-${Date.now()}`,
      word,
      partOfSpeech: 'unknown',
      definitions: [{ meaning: '点击查看定义', example: '' }],
      difficulty: 'medium',
    });
    setSelectedWord(null);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-6 border border-emerald-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{passage.title}</h2>
        <div className="prose prose-emerald max-w-none">
          <VocabularyHighlighter
            text={passage.passage}
            onWordClick={handleWordClick}
            selectedWord={selectedWord}
          />
        </div>
      </div>

      {/* 词汇提示 */}
      {selectedWord && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 border border-emerald-200 rounded-xl p-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-emerald-900 mb-2">词汇：{selectedWord}</h3>
              <p className="text-gray-700 text-sm">点击"添加到词汇本"保存这个单词</p>
            </div>
            <Button
              size="sm"
              icon={<Plus className="w-4 h-4" />}
              onClick={() => handleAddToVocabulary(selectedWord)}
            >
              添加到词汇本
            </Button>
          </div>
        </motion.div>
      )}

      {/* 长难句分析 */}
      {selectedSentence && (
        <SentenceAnalyzer sentence={selectedSentence} />
      )}
    </div>
  );
}
