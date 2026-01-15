/**
 * 解释面板组件
 */

import { MathQuestion } from '../../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface ExplanationPanelProps {
  question: MathQuestion;
  userAnswer: string;
  isCorrect: boolean;
}

export function ExplanationPanel({ question, userAnswer, isCorrect }: ExplanationPanelProps) {
  return (
    <div className={`mt-6 p-6 rounded-xl border-2 ${
      isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
    }`}>
      <div className="flex items-center gap-3 mb-4">
        {isCorrect ? (
          <>
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-lg font-bold text-green-800">回答正确！</span>
          </>
        ) : (
          <>
            <XCircle className="w-6 h-6 text-red-600" />
            <span className="text-lg font-bold text-red-800">回答错误</span>
          </>
        )}
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">你的答案：</p>
        <p className="text-gray-900 font-medium">{userAnswer}</p>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">正确答案：</p>
        <p className="text-gray-900 font-medium">
          {Array.isArray(question.answer) ? question.answer.join(', ') : question.answer}
        </p>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-900 mb-2">解释：</p>
        <p className="text-gray-700 whitespace-pre-wrap">{question.explanation}</p>
      </div>
      
      {question.steps && question.steps.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-900 mb-2">解题步骤：</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {question.steps.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
      
      {question.commonMistakes && question.commonMistakes.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-2">常见错误：</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {question.commonMistakes.map((mistake: string, index: number) => (
              <li key={index}>{mistake}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
