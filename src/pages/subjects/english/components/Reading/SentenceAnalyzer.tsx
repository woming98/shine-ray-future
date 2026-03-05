/**
 * 长难句分析组件
 * 显示句子结构
 */

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

interface SentenceAnalyzerProps {
  sentence: string;
}

export function SentenceAnalyzer({ sentence }: SentenceAnalyzerProps) {
  // 简单的句子结构分析（实际应用中可以使用更复杂的 NLP 库）
  const analyzeSentence = (sentence: string) => {
    // 检测从句
    const hasSubordinateClause = /(because|although|when|if|that|which|who|where)/i.test(sentence);
    // 检测并列结构
    const hasCoordination = /(and|but|or|so|yet)/i.test(sentence);
    // 检测被动语态
    const hasPassive = /\b(was|were|is|are|been)\s+\w+ed\b/i.test(sentence);

    return {
      hasSubordinateClause,
      hasCoordination,
      hasPassive,
      structure: hasSubordinateClause ? '复合句' : hasCoordination ? '并列句' : '简单句',
    };
  };

  const analysis = analyzeSentence(sentence);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-50 border border-blue-200 rounded-xl p-4"
    >
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-bold text-blue-900 mb-2">句子结构分析</h3>
          <p className="text-gray-800 mb-3 italic">{sentence}</p>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium text-blue-900">句子类型：</span>
              <span className="text-gray-700 ml-2">{analysis.structure}</span>
            </div>
            {analysis.hasSubordinateClause && (
              <div className="text-sm text-gray-700">
                • 包含从句结构
              </div>
            )}
            {analysis.hasCoordination && (
              <div className="text-sm text-gray-700">
                • 包含并列结构
              </div>
            )}
            {analysis.hasPassive && (
              <div className="text-sm text-gray-700">
                • 使用被动语态
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
