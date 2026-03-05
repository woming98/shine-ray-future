/**
 * AI 评估结果展示组件
 */

import { TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { SpeakingEvaluation } from '../../types';
import { Card } from '../UI';

interface EvaluationPanelProps {
  evaluation: SpeakingEvaluation;
}

export function EvaluationPanel({ evaluation }: EvaluationPanelProps) {
  const getScoreColor = (score: number) => {
    if (score >= 6) return 'text-emerald-600';
    if (score >= 4) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 6) return 'bg-emerald-50 border-emerald-200';
    if (score >= 4) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className="space-y-6">
      {/* 评分卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className={`p-4 text-center ${getScoreBgColor(evaluation.pronunciation)}`}>
          <div className={`text-2xl font-bold ${getScoreColor(evaluation.pronunciation)} mb-1`}>
            {evaluation.pronunciation}
          </div>
          <div className="text-xs text-gray-600">Pronunciation</div>
          <div className="text-xs text-gray-500">發音</div>
        </Card>
        <Card className={`p-4 text-center ${getScoreBgColor(evaluation.fluency)}`}>
          <div className={`text-2xl font-bold ${getScoreColor(evaluation.fluency)} mb-1`}>
            {evaluation.fluency}
          </div>
          <div className="text-xs text-gray-600">Fluency</div>
          <div className="text-xs text-gray-500">流暢度</div>
        </Card>
        <Card className={`p-4 text-center ${getScoreBgColor(evaluation.vocabulary)}`}>
          <div className={`text-2xl font-bold ${getScoreColor(evaluation.vocabulary)} mb-1`}>
            {evaluation.vocabulary}
          </div>
          <div className="text-xs text-gray-600">Vocabulary</div>
          <div className="text-xs text-gray-500">詞彙</div>
        </Card>
        <Card className={`p-4 text-center ${getScoreBgColor(evaluation.grammar)}`}>
          <div className={`text-2xl font-bold ${getScoreColor(evaluation.grammar)} mb-1`}>
            {evaluation.grammar}
          </div>
          <div className="text-xs text-gray-600">Grammar</div>
          <div className="text-xs text-gray-500">語法</div>
        </Card>
        {evaluation.interaction && (
          <Card className={`p-4 text-center ${getScoreBgColor(evaluation.interaction)}`}>
            <div className={`text-2xl font-bold ${getScoreColor(evaluation.interaction)} mb-1`}>
              {evaluation.interaction}
            </div>
            <div className="text-xs text-gray-600">Interaction</div>
            <div className="text-xs text-gray-500">互動</div>
          </Card>
        )}
      </div>

      {/* 总分 */}
      <Card className={`p-6 text-center ${getScoreBgColor(evaluation.total / 5)}`}>
        <div className={`text-4xl font-bold ${getScoreColor(evaluation.total / 5)} mb-2`}>
          {evaluation.total}/35
        </div>
        <div className="text-gray-600">总分</div>
      </Card>

      {/* 优点 */}
      {evaluation.feedback.strengths.length > 0 && (
        <Card className="p-6 bg-emerald-50 border-emerald-200">
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <h3 className="font-bold text-emerald-900">优点</h3>
          </div>
          <ul className="space-y-2">
            {evaluation.feedback.strengths.map((strength, index) => (
              <li key={index} className="text-emerald-800 text-sm flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* 改进建议 */}
      {evaluation.feedback.improvements.length > 0 && (
        <Card className="p-6 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <h3 className="font-bold text-blue-900">改进建议</h3>
          </div>
          <ul className="space-y-2">
            {evaluation.feedback.improvements.map((improvement, index) => (
              <li key={index} className="text-blue-800 text-sm flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* 发音建议 */}
      {evaluation.feedback.pronunciationTips && evaluation.feedback.pronunciationTips.length > 0 && (
        <Card className="p-6 bg-purple-50 border-purple-200">
          <div className="flex items-start gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <h3 className="font-bold text-purple-900">发音建议</h3>
          </div>
          <ul className="space-y-2">
            {evaluation.feedback.pronunciationTips.map((tip, index) => (
              <li key={index} className="text-purple-800 text-sm flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* 总体评价 */}
      <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-gray-900 mb-2">总体评价</h3>
            <p className="text-gray-700 leading-relaxed">{evaluation.overallComment}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
