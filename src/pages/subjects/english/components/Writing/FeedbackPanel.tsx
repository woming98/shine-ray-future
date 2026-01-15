/**
 * AI 批改结果展示组件
 * 错误标注、修改建议、评分报告
 */

import { CheckCircle, AlertCircle, TrendingUp, Lightbulb } from 'lucide-react';
import type { WritingScore } from '../../../../../data/englishQuestions/types';
import { Card } from '../UI';

interface FeedbackPanelProps {
  score: WritingScore;
}

export function FeedbackPanel({ score }: FeedbackPanelProps) {
  const getScoreColor = (scoreValue: number) => {
    if (scoreValue >= 6) return 'text-emerald-600';
    if (scoreValue >= 4) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (scoreValue: number) => {
    if (scoreValue >= 6) return 'bg-emerald-50 border-emerald-200';
    if (scoreValue >= 4) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className="space-y-6">
      {/* 评分卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className={`p-4 text-center ${getScoreBgColor(score.content)}`}>
          <div className={`text-3xl font-bold ${getScoreColor(score.content)} mb-1`}>
            {score.content}
          </div>
          <div className="text-xs text-gray-600">Content</div>
          <div className="text-xs text-gray-500">内容</div>
        </Card>
        <Card className={`p-4 text-center ${getScoreBgColor(score.language)}`}>
          <div className={`text-3xl font-bold ${getScoreColor(score.language)} mb-1`}>
            {score.language}
          </div>
          <div className="text-xs text-gray-600">Language</div>
          <div className="text-xs text-gray-500">语言</div>
        </Card>
        <Card className={`p-4 text-center ${getScoreBgColor(score.organization)}`}>
          <div className={`text-3xl font-bold ${getScoreColor(score.organization)} mb-1`}>
            {score.organization}
          </div>
          <div className="text-xs text-gray-600">Organization</div>
          <div className="text-xs text-gray-500">结构</div>
        </Card>
        <Card className={`p-4 text-center ${getScoreBgColor(score.total / 3)}`}>
          <div className={`text-3xl font-bold ${getScoreColor(score.total / 3)} mb-1`}>
            {score.total}/21
          </div>
          <div className="text-xs text-gray-600">Total</div>
          <div className="text-xs text-gray-500">总分</div>
        </Card>
      </div>

      {/* 优点 */}
      {score.feedback.strengths.length > 0 && (
        <Card className="p-6 bg-emerald-50 border-emerald-200">
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <h3 className="font-bold text-emerald-900">优点</h3>
          </div>
          <ul className="space-y-2">
            {score.feedback.strengths.map((strength: string, index: number) => (
              <li key={index} className="text-emerald-800 text-sm flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* 改进建议 */}
      {score.feedback.improvements.length > 0 && (
        <Card className="p-6 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3 mb-4">
            <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <h3 className="font-bold text-blue-900">改进建议</h3>
          </div>
          <ul className="space-y-2">
            {score.feedback.improvements.map((improvement: string, index: number) => (
              <li key={index} className="text-blue-800 text-sm flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* 修改建议 */}
      {score.feedback.correctedSentences && score.feedback.correctedSentences.length > 0 && (
        <Card className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <h3 className="font-bold text-gray-900">修改建议</h3>
          </div>
          <div className="space-y-4">
            {score.feedback.correctedSentences.map((correction: { original: string; corrected: string }, index: number) => (
              <div key={index} className="border-l-4 border-orange-400 pl-4 space-y-2">
                <div>
                  <p className="text-xs text-gray-500 mb-1">原文：</p>
                  <p className="text-gray-700 line-through">{correction.original}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">修改后：</p>
                  <p className="text-emerald-700 font-medium">{correction.corrected}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* 总体评价 */}
      <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-gray-900 mb-2">总体评价</h3>
            <p className="text-gray-700 leading-relaxed">{score.overallComment}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
