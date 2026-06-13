import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, ClipboardList } from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { getGradeCourse } from '../constants/curriculum';

export default function GradeCoursesPage() {
  const navigate = useNavigate();
  const { gradeId } = useParams<{ gradeId: string }>();
  const course = getGradeCourse(gradeId);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <p className="text-gray-600 mb-4">未找到该年级课程。</p>
        <Button onClick={() => navigate('/subjects/math')}>返回数学首页</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <button
        onClick={() => navigate('/subjects/math')}
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
      >
        <ArrowLeft className="w-4 h-4" />
        返回数学首页
      </button>

      <section className="bg-white border border-blue-200 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-blue-600 font-semibold mb-2">{course.level}数学课程</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mb-3">{course.title}</h1>
            <p className="text-gray-600 text-lg max-w-2xl">{course.focus}</p>
          </div>
          <span className={`self-start px-3 py-1.5 rounded-full text-sm font-medium ${
            course.questionGrade ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
          }`}>
            {course.questionGrade ? '练习题库已上线' : '课程目录已上线'}
          </span>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-950 mb-5">课程重点</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {course.topics.map((topic, index) => (
            <Card key={topic} className="p-5">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-950">{topic}</h3>
                  <p className="text-sm text-gray-500 mt-1">概念梳理、例题讲解与分层练习</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-5">
        <Card className="p-6">
          <BookOpen className="w-7 h-7 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-950 mb-2">专题学习</h3>
          <p className="text-gray-600 mb-5">按 DSE 三大范畴集中复习知识点与高频题型。</p>
          <Button variant="secondary" onClick={() => navigate('/subjects/math/sprint')}>
            进入专题冲刺 <ArrowRight className="w-4 h-4" />
          </Button>
        </Card>

        <Card className="p-6">
          {course.questionGrade ? (
            <>
              <CheckCircle className="w-7 h-7 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-950 mb-2">{course.level}分级练习</h3>
              <p className="text-gray-600 mb-5">进入现有题库，完成对应年级的分级练习与详细解析。</p>
              <Button onClick={() => navigate(`/subjects/math/practice?grade=${course.questionGrade}`)}>
                开始练习 <ArrowRight className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <>
              <ClipboardList className="w-7 h-7 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-950 mb-2">练习题库整理中</h3>
              <p className="text-gray-600 mb-5">该年级课程目录已上线，分级练习将按课题逐步加入。</p>
              <Button variant="secondary" onClick={() => navigate('/subjects/math/practice')}>
                使用综合练习 <ArrowRight className="w-4 h-4" />
              </Button>
            </>
          )}
        </Card>
      </section>
    </div>
  );
}
