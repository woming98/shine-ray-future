/**
 * 题目展示组件
 */

import { MathQuestion } from '../../types';

interface QuestionCardProps {
  question: MathQuestion;
  questionNumber?: number;
  totalQuestions?: number;
}

export function QuestionCard({ question, questionNumber, totalQuestions }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
      {questionNumber && totalQuestions && (
        <div className="mb-4 text-sm text-gray-600">
          题目 {questionNumber} / {totalQuestions}
        </div>
      )}
      <div className="mb-4">
        <p className="text-lg text-gray-900 whitespace-pre-wrap">{question.question}</p>
        {question.imageUrl && (
          <img src={question.imageUrl} alt="题目图片" className="mt-4 max-w-full rounded-lg" />
        )}
      </div>
      {question.options && (
        <div className="space-y-2">
          {question.options.map((option: string, index: number) => (
            <div
              key={index}
              className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <span className="font-medium text-blue-600 mr-2">
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="text-gray-900">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
