/**
 * 词汇卡片组件
 */

import { useState } from 'react';
import { BookOpen, CheckCircle, X, Volume2 } from 'lucide-react';
import { VocabularyItem } from '../../types';
import { Card } from '../UI';
import { Button } from '../UI/Button';

interface VocabularyCardProps {
  word: VocabularyItem;
  onMaster?: (wordId: string) => void;
  onRemove?: (wordId: string) => void;
  showActions?: boolean;
}

export function VocabularyCard({ word, onMaster, onRemove, showActions = true }: VocabularyCardProps) {
  const [showDefinition, setShowDefinition] = useState(false);

  const handlePlayPronunciation = () => {
    // 实际应用中可以使用 Web Speech API 或音频文件
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900">{word.word}</h3>
            {word.phonetic && (
              <span className="text-sm text-gray-500">/{word.phonetic}/</span>
            )}
            <button
              onClick={handlePlayPronunciation}
              className="p-1 rounded hover:bg-emerald-100 transition-colors"
            >
              <Volume2 className="w-4 h-4 text-emerald-600" />
            </button>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
              {word.partOfSpeech}
            </span>
            {word.difficulty && (
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                word.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                word.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {word.difficulty}
              </span>
            )}
          </div>
        </div>
        {showActions && onRemove && (
          <button
            onClick={() => onRemove(word.id)}
            className="p-1 rounded hover:bg-red-100 transition-colors"
          >
            <X className="w-4 h-4 text-red-600" />
          </button>
        )}
      </div>

      {showDefinition ? (
        <div className="space-y-3">
          {word.definitions.map((def, index) => (
            <div key={index} className="border-l-4 border-emerald-500 pl-4">
              <p className="text-gray-700 mb-1">{def.meaning}</p>
              {def.example && (
                <p className="text-sm text-gray-600 italic">例：{def.example}</p>
              )}
            </div>
          ))}
          {showActions && (
            <div className="flex gap-2 mt-4">
              {onMaster && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => onMaster(word.id)}
                  icon={<CheckCircle className="w-4 h-4" />}
                >
                  标记已掌握
                </Button>
              )}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowDefinition(false)}
              >
                收起
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Button
          variant="ghost"
          onClick={() => setShowDefinition(true)}
          icon={<BookOpen className="w-4 h-4" />}
        >
          查看定义
        </Button>
      )}
    </Card>
  );
}
