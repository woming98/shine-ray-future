/**
 * 词汇本页面
 * 实现词汇展示、闪卡复习、筛选功能
 */

import { useState, useMemo } from 'react';
import { BookOpen, Filter, Play } from 'lucide-react';
import { useEnglishStore } from '../store/useStore';
import { vocabularyItems } from '../data';
import { VocabularyCard } from '../components/Vocabulary/VocabularyCard';
import { FlashcardViewer } from '../components/Vocabulary/FlashcardViewer';
import { Card, Button } from '../components/UI';

type ViewMode = 'list' | 'flashcard';

export default function VocabularyPage() {
  const { vocabularyBook, removeFromVocabularyBook, markWordAsMastered } = useEnglishStore();
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [filterDifficulty, setFilterDifficulty] = useState<string | 'all'>('all');
  const [filterTopic, setFilterTopic] = useState<string | 'all'>('all');

  // 获取词汇本中的单词
  const bookWordIds = vocabularyBook?.words.map(w => w.wordId) || [];
  const bookWords = vocabularyItems.filter(w => bookWordIds.includes(w.id));

  // 筛选词汇
  const filteredWords = useMemo(() => {
    let filtered = bookWords;
    if (filterDifficulty !== 'all') {
      filtered = filtered.filter(w => w.difficulty === filterDifficulty);
    }
    if (filterTopic !== 'all') {
      filtered = filtered.filter(w => w.topic === filterTopic);
    }
    return filtered;
  }, [bookWords, filterDifficulty, filterTopic]);

  const topics = useMemo(() => {
    return Array.from(new Set(vocabularyItems.map(w => w.topic).filter((t): t is string => Boolean(t))));
  }, []);


  const handleRemoveFromBook = (wordId: string) => {
    removeFromVocabularyBook(wordId);
  };

  const handleMaster = (wordId: string) => {
    markWordAsMastered(wordId);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            词汇本
          </h1>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'list' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('list')}
            >
              列表模式
            </Button>
            <Button
              variant={viewMode === 'flashcard' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('flashcard')}
              icon={<Play className="w-4 h-4" />}
            >
              闪卡模式
            </Button>
          </div>
        </div>

        {/* 筛选器 */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">筛选：</span>
          </div>
          <button
            onClick={() => setFilterDifficulty('all')}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              filterDifficulty === 'all'
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            全部难度
          </button>
          {['easy', 'medium', 'hard'].map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setFilterDifficulty(difficulty)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                filterDifficulty === difficulty
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {difficulty}
            </button>
          ))}
          {topics.length > 0 && (
            <>
              <button
                onClick={() => setFilterTopic('all')}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  filterTopic === 'all'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                全部主题
              </button>
              {topics.map((topic: string) => (
                <button
                  key={topic}
                  onClick={() => setFilterTopic(topic)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    filterTopic === topic
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </>
          )}
        </div>

        {/* 词汇列表或闪卡 */}
        {viewMode === 'flashcard' ? (
          <FlashcardViewer words={filteredWords} onMaster={handleMaster} />
        ) : (
          <>
            {filteredWords.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">词汇本为空</p>
                <p className="text-gray-500 text-sm mt-2">在阅读练习中点击词汇添加到词汇本</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredWords.map((word) => (
                  <VocabularyCard
                    key={word.id}
                    word={word}
                    onMaster={handleMaster}
                    onRemove={handleRemoveFromBook}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
}
