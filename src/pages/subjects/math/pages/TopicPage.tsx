/**
 * 主题学习页面
 */

import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { ArrowLeft } from 'lucide-react';
import { MATH_TOPICS } from '../constants/topics';
import { useMathStore } from '../store/useStore';

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { topicProgress } = useMathStore();
  
  const topic = MATH_TOPICS.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">主题不存在</p>
        <Button onClick={() => navigate('/subjects/math')}>返回</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{topic.nameCN}</h1>
            <p className="text-gray-600">{topic.description}</p>
          </div>
          <Button variant="ghost" onClick={() => navigate('/subjects/math')}>
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">学习进度</span>
            <span className="text-sm font-medium text-blue-600">
              {topicProgress[topic.id] || 0}%
            </span>
          </div>
          <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              style={{ width: `${topicProgress[topic.id] || 0}%` }}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">子主题</h2>
          <div className="space-y-3">
            {topic.subtopics.map(subtopic => (
              <Card key={subtopic.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{subtopic.nameCN}</h3>
                    <p className="text-sm text-gray-600">{subtopic.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    subtopic.difficulty === 'foundation'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {subtopic.difficulty === 'foundation' ? '基础' : '非基础'}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
