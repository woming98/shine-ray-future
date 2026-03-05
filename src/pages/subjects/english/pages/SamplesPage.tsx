/**
 * 范文库页面
 * 实现范文列表、详情展示、高亮功能
 */

import { useState } from 'react';
import { Award, FileText } from 'lucide-react';
import { sampleEssays, writingTemplates } from '../data';
import { SampleLibrary } from '../components/Samples/SampleLibrary';
import { TemplateViewer } from '../components/Samples/TemplateViewer';
import { Card } from '../components/UI';

type TabType = 'essays' | 'templates';

export default function SamplesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('essays');

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-6 h-6 text-emerald-600" />
          <h1 className="text-2xl font-bold text-gray-900">范文库</h1>
        </div>

        {/* 标签页 */}
        <div className="flex gap-2 border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('essays')}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              activeTab === 'essays'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <Award className="w-4 h-4 inline mr-2" />
            范文
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              activeTab === 'templates'
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            模板
          </button>
        </div>

        {/* 内容 */}
        {activeTab === 'essays' ? (
          <SampleLibrary samples={sampleEssays} />
        ) : (
          <TemplateViewer templates={writingTemplates} />
        )}
      </Card>
    </div>
  );
}
