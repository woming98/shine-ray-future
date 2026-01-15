/**
 * 解释题范本库页面
 */

import { useState } from 'react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { TemplateLibrary } from '../components/Templates/TemplateLibrary';
import { ExplanationTemplate } from '../types';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TemplatesPage() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<ExplanationTemplate | null>(null);
  
  // 示例模板数据（实际应从数据文件加载）
  const templates: ExplanationTemplate[] = [];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">解释题范本库</h1>
          <Button variant="ghost" onClick={() => navigate('/subjects/math')}>
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>
        </div>
      </Card>
      
      {!selectedTemplate ? (
        <TemplateLibrary
          templates={templates}
          onSelectTemplate={setSelectedTemplate}
        />
      ) : (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {selectedTemplate.year} 年 卷{selectedTemplate.paper} 第 {selectedTemplate.questionNumber} 题
              </h2>
              <p className="text-sm text-gray-600 mt-1">{selectedTemplate.topic}</p>
            </div>
            <Button variant="ghost" onClick={() => setSelectedTemplate(null)}>
              <X className="w-4 h-4" />
              返回列表
            </Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">题目</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{selectedTemplate.question}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">标准答案</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{selectedTemplate.standardAnswer}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">解题步骤</h3>
              <div className="space-y-3">
                {selectedTemplate.steps.map((step, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold">
                        {step.step}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-900 mb-1">{step.content}</p>
                        <p className="text-sm text-gray-600">{step.reasoning}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {selectedTemplate.mathLanguage.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">数学语言规范</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedTemplate.mathLanguage.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {selectedTemplate.commonMistakes.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">常见失分点</h3>
                <div className="space-y-2">
                  {selectedTemplate.commonMistakes.map((mistake, index) => (
                    <Card key={index} className="p-4 bg-red-50 border-red-200">
                      <p className="font-medium text-red-900 mb-1">{mistake.mistake}</p>
                      <p className="text-sm text-red-700">{mistake.explanation}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
