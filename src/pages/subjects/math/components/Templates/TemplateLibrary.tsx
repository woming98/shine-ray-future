/**
 * 解释题范本库组件
 */

import { useState } from 'react';
import { Card } from '../UI';
import { Search, ChevronRight } from 'lucide-react';
import { ExplanationTemplate } from '../../types';

interface TemplateLibraryProps {
  templates?: ExplanationTemplate[];
  onSelectTemplate?: (template: ExplanationTemplate) => void;
}

export function TemplateLibrary({
  templates = [],
  onSelectTemplate,
}: TemplateLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  // 过滤模板
  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      searchQuery === '' ||
      template.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === '' || template.year.toString() === selectedYear;
    const matchesTopic = selectedTopic === '' || template.topic === selectedTopic;

    return matchesSearch && matchesYear && matchesTopic;
  });

  return (
    <div className="space-y-6">
      {/* 搜索和筛选栏 */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索题目..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          >
            <option value="">全部年份</option>
            {Array.from(new Set(templates.map((t) => t.year)))
              .sort((a, b) => b - a)
              .map((year) => (
                <option key={year} value={year.toString()}>
                  {year} 年
                </option>
              ))}
          </select>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          >
            <option value="">全部主题</option>
            {Array.from(new Set(templates.map((t) => t.topic))).map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
        <p className="text-sm text-gray-600">
          找到 {filteredTemplates.length} 个范本
        </p>
      </Card>

      {/* 模板列表 */}
      <div className="space-y-4">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className="p-6 cursor-pointer hover:border-blue-300 transition-colors"
              onClick={() => onSelectTemplate?.(template)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">
                      {template.year} 年
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      卷{template.paper} - 第 {template.questionNumber} 题
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">
                      {template.topic}
                    </span>
                  </div>
                  <p className="text-gray-900 font-medium mb-2 line-clamp-2">
                    {template.question}
                  </p>
                  <p className="text-sm text-gray-600">
                    {template.steps.length} 个解题步骤
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
              </div>
            </Card>
          ))
        ) : (
          <Card className="p-12 text-center">
            <p className="text-gray-600">没有找到匹配的范本</p>
          </Card>
        )}
      </div>
    </div>
  );
}
