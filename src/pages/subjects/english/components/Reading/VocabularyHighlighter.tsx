/**
 * 词汇高亮组件
 * 点击显示定义
 */

import { useState } from 'react';
import { motion } from 'framer-motion';

interface VocabularyHighlighterProps {
  text: string;
  onWordClick?: (word: string) => void;
  selectedWord?: string | null;
}

export function VocabularyHighlighter({ text, onWordClick, selectedWord }: VocabularyHighlighterProps) {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  // 简单的词汇识别（实际应用中可以使用更复杂的 NLP 库）
  const words = text.split(/(\s+|[.,!?;:])/);
  
  // 常见的高频词汇（实际应用中可以从词汇库加载）
  const vocabularyWords = new Set([
    'significant', 'important', 'develop', 'enhance', 'comprehend',
    'analyze', 'evaluate', 'demonstrate', 'illustrate', 'examine',
  ]);

  const handleWordClick = (word: string) => {
    const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
    if (cleanWord.length > 4 && vocabularyWords.has(cleanWord)) {
      onWordClick?.(cleanWord);
    }
  };

  return (
    <p className="text-gray-800 leading-relaxed text-lg">
      {words.map((word, index) => {
        const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
        const isVocabularyWord = cleanWord.length > 4 && vocabularyWords.has(cleanWord);
        const isSelected = selectedWord === cleanWord;
        const isHovered = hoveredWord === cleanWord;

        if (isVocabularyWord) {
          return (
            <motion.span
              key={index}
              className={`inline-block cursor-pointer px-1 rounded transition-colors ${
                isSelected
                  ? 'bg-emerald-500 text-white'
                  : isHovered
                  ? 'bg-emerald-200 text-emerald-900'
                  : 'bg-emerald-100/50 text-emerald-800 hover:bg-emerald-200'
              }`}
              onMouseEnter={() => setHoveredWord(cleanWord)}
              onMouseLeave={() => setHoveredWord(null)}
              onClick={() => handleWordClick(cleanWord)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {word}
            </motion.span>
          );
        }

        return <span key={index}>{word}</span>;
      })}
    </p>
  );
}
