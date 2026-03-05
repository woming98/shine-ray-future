/**
 * 写作模板展示组件
 */

import { useState } from 'react';
import { FileText, ChevronRight } from 'lucide-react';
import { WritingTemplate } from '../../types';
import { Card, Button } from '../UI';

interface TemplateViewerProps {
  templates: WritingTemplate[];
}

export function TemplateViewer({ templates }: TemplateViewerProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<WritingTemplate | null>(null);

  if (selectedTemplate) {
    return (
      <div className="space-y-6">
        <Button variant="secondary" onClick={() => setSelectedTemplate(null)}>
          返回列表
        </Button>
        <Card className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedTemplate.nameCN}</h1>
          <p className="text-gray-600 mb-6">{selectedTemplate.name}</p>

          {/* 结构说明 */}
          <div className="space-y-4 mb-6">
            <h2 className="text-xl font-bold text-gray-900">结构说明</h2>
            {selectedTemplate.structure.map((section, index) => (
              <div key={index} className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">{section.section}</h3>
                <p className="text-gray-700 mb-2">{section.description}</p>
                {section.example && (
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <p className="text-sm text-gray-600 italic">{section.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 常用短语 */}
          {selectedTemplate.commonPhrases.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">常用短语</h2>
              <div className="flex flex-wrap gap-2">
                {selectedTemplate.commonPhrases.map((phrase, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm"
                  >
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 连接词 */}
          {selectedTemplate.connectives.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">连接词</h2>
              <div className="flex flex-wrap gap-2">
                {selectedTemplate.connectives.map((connective, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm"
                  >
                    {connective}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <Card
          key={template.id}
          onClick={() => setSelectedTemplate(template)}
          className="cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-3 mb-3">
            <FileText className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">{template.nameCN}</h3>
              <p className="text-sm text-gray-600">{template.name}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500">
            {template.structure.length} 个部分
          </p>
        </Card>
      ))}
    </div>
  );
}
