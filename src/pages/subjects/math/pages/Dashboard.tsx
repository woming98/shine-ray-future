import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BookCheck,
  BookOpen,
  Calculator,
  FileText,
  Target,
  Zap,
} from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { GRADE_COURSES } from '../constants/curriculum';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-blue-200 rounded-2xl p-6 md:p-10"
      >
        <p className="text-blue-600 font-semibold mb-3">中学数学 · HKDSE 必修部分</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-950 mb-4">数学学习中心</h1>
        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
          从中一基础衔接到中六专题冲刺，按年级建立知识体系，并通过专题练习、MC 提速及 HKDSE 真题目录完成备考。
        </p>
        <div className="flex flex-wrap gap-3 mt-7">
          <Button onClick={() => navigate('/subjects/math/grade/s1')}>
            从中一课程开始 <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="secondary" onClick={() => navigate('/subjects/math/past-papers')}>
            查看 HKDSE 真题
          </Button>
          <Button variant="secondary" onClick={() => navigate('/subjects/math/calculator')}>
            计数机 Program
          </Button>
        </div>
      </motion.section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-950 mb-2">分级课程</h2>
          <p className="text-gray-600">选择当前年级，查看课程重点与可用练习。</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GRADE_COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className="p-6 cursor-pointer h-full"
                onClick={() => navigate(`/subjects/math/grade/${course.id}`)}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                    {course.level}
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${
                    course.questionGrade ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {course.questionGrade ? '题库已上线' : '课程已上线'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-950 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{course.focus}</p>
                <div className="flex items-center gap-2 text-blue-700 font-medium">
                  查看课程 <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-950 mb-2">冲刺与真题</h2>
          <p className="text-gray-600">面向中四至中六的课题强化和试卷训练入口。</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <Card className="p-6">
            <Target className="w-8 h-8 text-blue-600 mb-5" />
            <h3 className="text-xl font-bold text-gray-950 mb-2">专题冲刺</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              代数、函数、几何、三角学、统计概率与卷一卷二策略。
            </p>
            <Button fullWidth onClick={() => navigate('/subjects/math/sprint')}>
              进入专题冲刺 <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>

          <Card className="p-6">
            <FileText className="w-8 h-8 text-indigo-600 mb-5" />
            <h3 className="text-xl font-bold text-gray-950 mb-2">HKDSE 官方试卷配套</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              不公开原卷；提供按年份整理的答题卡、计时练习与解析入口。
            </p>
            <Button fullWidth variant="secondary" onClick={() => navigate('/subjects/math/past-papers?view=papers')}>
              查看配套练习目录
            </Button>
          </Card>

          <Card className="p-6">
            <BookCheck className="w-8 h-8 text-emerald-600 mb-5" />
            <h3 className="text-xl font-bold text-gray-950 mb-2">试卷详细解析</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              按步骤拆解考点、答题方法与常见失分位置。
            </p>
            <Button fullWidth variant="secondary" onClick={() => navigate('/subjects/math/past-papers?view=solutions')}>
              查看详细解析目录
            </Button>
          </Card>
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-950 mb-2">学习工具</h2>
          <p className="text-gray-600">使用现有题库与学习记录功能进行日常训练。</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: '智能练习', description: '按年级、课题与难度练习', icon: BookOpen, path: '/subjects/math/practice' },
            { title: '计数机教程', description: 'fx-50FH II / fx-3650P II program', icon: Calculator, path: '/subjects/math/calculator' },
            { title: 'MC 提速', description: '卷二计时与快解技巧', icon: Zap, path: '/subjects/math/mc' },
            { title: '错题本', description: '集中复盘错误题目', icon: FileText, path: '/subjects/math/wrong-answers' },
            { title: '学习报告', description: '查看正确率与学习进度', icon: BarChart3, path: '/subjects/math/report' },
          ].map((tool) => (
            <Card key={tool.title} className="p-5 cursor-pointer" onClick={() => navigate(tool.path)}>
              <tool.icon className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-950 mb-1">{tool.title}</h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
