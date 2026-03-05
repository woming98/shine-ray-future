/**
 * 范文库组件
 * 范文列表和详情展示
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Award } from 'lucide-react';
import { SampleEssay } from '../../types';
import { Card, Button } from '../UI';

interface SampleLibraryProps {
  samples: SampleEssay[];
  onSelect?: (sample: SampleEssay) => void;
}

export function SampleLibrary({ samples, onSelect }: SampleLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string | 'all'>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string | 'all'>('all');
  const [selectedSample, setSelectedSample] = useState<SampleEssay | null>(null);

  const filteredSamples = samples.filter(sample => {
    const matchesSearch = searchQuery === '' || 
      sample.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || sample.type === filterType;
    const matchesDifficulty = filterDifficulty === 'all' || sample.difficulty === filterDifficulty;
    return matchesSearch && matchesType && matchesDifficulty;
  });

  const types = Array.from(new Set(samples.map(s => s.type)));

  if (selectedSample) {
    return (
      <div className="space-y-6">
        <Button variant="secondary" onClick={() => setSelectedSample(null)}>
          返回列表
        </Button>
        <SampleDetail sample={selectedSample} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 搜索和筛选 */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索范文..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
          >
            <option value="all">全部类型</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
          >
            <option value="all">全部难度</option>
            <option value="easy">简单</option>
            <option value="medium">中等</option>
            <option value="hard">困难</option>
          </select>
        </div>
        <div className="text-sm text-gray-600">
          找到 {filteredSamples.length} 篇范文
        </div>
      </Card>

      {/* 范文列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSamples.map((sample) => (
          <motion.div
            key={sample.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card
              onClick={() => {
                setSelectedSample(sample);
                onSelect?.(sample);
              }}
              className="cursor-pointer hover:shadow-md transition-shadow h-full"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">{sample.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">{sample.score}/21</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs">
                  {sample.type}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                  sample.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                  sample.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {sample.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{sample.content.substring(0, 100)}...</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SampleDetail({ sample }: { sample: SampleEssay }) {
  const [highlightedType, setHighlightedType] = useState<string | 'all'>('all');

  const highlightText = (text: string) => {
    if (highlightedType === 'all') return text;
    
    const highlights = sample.highlights.filter(h => h.type === highlightedType);
    let result = text;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight.text})`, 'gi');
      result = result.replace(regex, `<mark class="bg-yellow-200 px-1 rounded">$1</mark>`);
    });
    return result;
  };

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{sample.title}</h1>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">
              {sample.type}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">{sample.score}/21</span>
            </div>
            {sample.year && (
              <span className="text-sm text-gray-500">{sample.year} 年</span>
            )}
          </div>
        </div>
      </div>

      {/* 高亮控制 */}
      <div className="mb-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-gray-700">高亮显示：</span>
          <button
            onClick={() => setHighlightedType('all')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              highlightedType === 'all'
                ? 'bg-emerald-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            全部
          </button>
          <button
            onClick={() => setHighlightedType('sentence')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              highlightedType === 'sentence'
                ? 'bg-emerald-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            句式
          </button>
          <button
            onClick={() => setHighlightedType('phrase')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              highlightedType === 'phrase'
                ? 'bg-emerald-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            短语
          </button>
          <button
            onClick={() => setHighlightedType('connective')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              highlightedType === 'connective'
                ? 'bg-emerald-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            连接词
          </button>
        </div>
      </div>

      {/* 范文内容 */}
      <div className="prose prose-emerald max-w-none mb-6">
        <div
          dangerouslySetInnerHTML={{ __html: highlightText(sample.content) }}
          className="text-gray-800 leading-relaxed whitespace-pre-wrap"
        />
      </div>

      {/* 亮点说明 */}
      {sample.highlights.length > 0 && (
        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            亮点分析
          </h3>
          <div className="space-y-3">
            {sample.highlights
              .filter(h => highlightedType === 'all' || h.type === highlightedType)
              .map((highlight, index) => (
                <div key={index} className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="font-medium text-emerald-900 mb-1">
                    {highlight.type === 'sentence' ? '句式' :
                     highlight.type === 'phrase' ? '短语' : '连接词'}：{highlight.text}
                  </p>
                  <p className="text-sm text-emerald-800">{highlight.description}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </Card>
  );
}
