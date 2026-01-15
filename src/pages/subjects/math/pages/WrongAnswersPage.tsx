/**
 * 错题本页面
 */

import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMathStore } from '../store/useStore';
import { getQuestionById } from '../data/questions';

export default function WrongAnswersPage() {
  const navigate = useNavigate();
  const { errorLogs, markAsMastered } = useMathStore();

  const masteredLogs = errorLogs.filter(e => e.mastered);
  const unmasteredLogs = errorLogs.filter(e => !e.mastered);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">错题本</h1>
          <Button variant="ghost" onClick={() => navigate('/subjects/math')}>
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>
        </div>
        
        {unmasteredLogs.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">待复习 ({unmasteredLogs.length})</h2>
            <div className="space-y-3">
              {unmasteredLogs.map(error => {
                const question = getQuestionById(error.questionId);
                return question ? (
                  <Card key={error.id} className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-gray-900 mb-2">{question.question}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>错误次数: {error.errorCount}</span>
                          <span>最后错误: {new Date(error.lastErrorTime).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => markAsMastered(error.id)}
                        icon={<CheckCircle className="w-4 h-4" />}
                      >
                        标记已掌握
                      </Button>
                    </div>
                  </Card>
                ) : null;
              })}
            </div>
          </div>
        )}
        
        {masteredLogs.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">已掌握 ({masteredLogs.length})</h2>
            <div className="space-y-3">
              {masteredLogs.map(error => {
                const question = getQuestionById(error.questionId);
                return question ? (
                  <Card key={error.id} className="p-4 bg-green-50 border-green-200">
                    <p className="text-gray-900">{question.question}</p>
                  </Card>
                ) : null;
              })}
            </div>
          </div>
        )}
        
        {errorLogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">暂无错题记录</p>
          </div>
        )}
      </Card>
    </div>
  );
}
