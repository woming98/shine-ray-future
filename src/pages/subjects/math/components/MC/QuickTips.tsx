/**
 * MC 快解技巧组件
 * 展示各种 MC 快解技巧
 */

import { useState } from 'react';
import { Card } from '../UI';
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

interface QuickTip {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    question: string;
    solution: string;
    tip: string;
  }>;
}

const quickTips: QuickTip[] = [
  {
    id: 'elimination',
    title: '排除法',
    description: '通过排除明显错误的选项来缩小选择范围',
    examples: [
      {
        question: '若 x > 0，则下列哪个一定正确？\nA) x² > 0  B) x < 0  C) x = 0  D) x² < 0',
        solution: '因为 x > 0，所以 x² > 0 一定成立',
        tip: '排除 B、C、D（与 x > 0 矛盾），直接选 A',
      },
    ],
  },
  {
    id: 'substitution',
    title: '代入法',
    description: '将选项中的值代入题目验证',
    examples: [
      {
        question: '若 2x + 3 = 7，则 x = ?\nA) 1  B) 2  C) 3  D) 4',
        solution: '将 x = 2 代入：2(2) + 3 = 7 ✓',
        tip: '快速代入验证，找到满足条件的选项',
      },
    ],
  },
  {
    id: 'estimation',
    title: '估算法',
    description: '通过估算快速判断答案范围',
    examples: [
      {
        question: '√48 最接近哪个值？\nA) 6  B) 7  C) 8  D) 9',
        solution: '√49 = 7，所以 √48 ≈ 7',
        tip: '利用 √49 = 7 来估算 √48',
      },
    ],
  },
  {
    id: 'special-cases',
    title: '特殊值法',
    description: '使用特殊值（如 0、1、-1）快速验证',
    examples: [
      {
        question: '若 a > b，则下列哪个一定成立？\nA) a² > b²  B) 1/a < 1/b  C) a + 1 > b + 1  D) a - b < 0',
        solution: '取 a = 2, b = 1：C) 2 + 1 > 1 + 1 ✓',
        tip: '用简单数值验证，避免复杂计算',
      },
    ],
  },
];

export function QuickTips() {
  const [expandedTip, setExpandedTip] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-bold text-gray-900">MC 快解技巧</h2>
        </div>
        <p className="text-gray-600 mb-6">
          掌握这些技巧可以大大提高 MC 题目的解题速度和准确率。
        </p>

        <div className="space-y-3">
          {quickTips.map((tip) => (
            <Card key={tip.id} className="p-4">
              <button
                onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                className="w-full flex items-center justify-between"
              >
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
                </div>
                {expandedTip === tip.id ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {expandedTip === tip.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  {tip.examples.map((example, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="bg-gray-50 rounded-lg p-3 mb-2">
                        <p className="text-sm font-medium text-gray-700 mb-2">题目：</p>
                        <p className="text-sm text-gray-900 whitespace-pre-wrap">{example.question}</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 mb-2">
                        <p className="text-sm font-medium text-blue-700 mb-1">技巧：</p>
                        <p className="text-sm text-blue-900">{example.tip}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-green-700 mb-1">解答：</p>
                        <p className="text-sm text-green-900">{example.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
