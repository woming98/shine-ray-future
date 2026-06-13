import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target } from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { SPRINT_TOPICS } from '../constants/curriculum';

export default function SprintPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <button
        onClick={() => navigate('/subjects/math')}
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
      >
        <ArrowLeft className="w-4 h-4" />
        返回数学首页
      </button>

      <section>
        <div className="flex items-center gap-3 mb-3">
          <Target className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-950">专题冲刺</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-3xl">
          按 DSE 三大范畴及应试技能集中训练，适合中四至中六复习与考前查漏补缺。
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SPRINT_TOPICS.map((topic) => (
          <Card key={topic.id} className="p-6 flex flex-col">
            <span className="text-xs font-semibold text-blue-700 bg-blue-100 rounded-full px-3 py-1 self-start mb-4">
              {topic.category}
            </span>
            <h2 className="text-xl font-bold text-gray-950 mb-2">{topic.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{topic.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {topic.focus.map((item) => (
                <span key={item} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
            <Button
              className="mt-auto"
              variant="secondary"
              fullWidth
              onClick={() => navigate(`/subjects/math/practice?topic=${topic.topicId}`)}
            >
              开始专题练习 <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
