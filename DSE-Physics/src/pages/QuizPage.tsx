import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText,
  Clock,
  Target,
  Trophy,
  Play,
  ChevronRight,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import { PHYSICS_TOPICS } from '../constants/topics';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { useStore } from '../store/useStore';

export default function QuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMockExam = location.pathname === '/mock-exam';
  const { getTopicProgress } = useStore();

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // 模拟测验数据
  const quizzes = PHYSICS_TOPICS.map((topic) => ({
    id: `quiz-${topic.id}`,
    topicId: topic.id,
    name: topic.nameCN,
    nameEN: topic.name,
    icon: topic.icon,
    gradient: topic.gradient,
    questionsCount: 15,
    duration: 30,
    difficulty: topic.id === 'force-motion' ? 'medium' : 'easy',
    completed: false,
    bestScore: Math.floor(Math.random() * 40) + 60,
  }));

  const mockExam = {
    id: 'mock-exam-1',
    name: 'HKDSE 物理模拟考试',
    nameEN: 'HKDSE Physics Mock Exam',
    questionsCount: 40,
    duration: 120,
    sections: [
      { name: '选择题', questions: 30, points: 30 },
      { name: '结构题', questions: 10, points: 50 },
    ],
    totalPoints: 80,
    passingScore: 48,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white">
            {isMockExam ? '模拟考试' : '章节测验'}
          </h1>
          <p className="text-slate-400 mt-2">
            {isMockExam
              ? '模拟真实DSE考试环境，检验学习成果'
              : '通过章节测验巩固所学知识，查漏补缺'}
          </p>
        </div>
      </div>

      {isMockExam ? (
        // 模拟考试页面
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 考试信息 */}
          <div className="lg:col-span-2">
            <Card hover={false} className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-shine-400 to-ray-500 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{mockExam.name}</h2>
                  <p className="text-slate-400">{mockExam.nameEN}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-white/5 rounded-xl text-center">
                  <FileText className="w-6 h-6 text-shine-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{mockExam.questionsCount}</p>
                  <p className="text-slate-400 text-sm">题目数量</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-center">
                  <Clock className="w-6 h-6 text-ray-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{mockExam.duration}</p>
                  <p className="text-slate-400 text-sm">分钟</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-center">
                  <Target className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{mockExam.totalPoints}</p>
                  <p className="text-slate-400 text-sm">总分</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-center">
                  <Trophy className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{mockExam.passingScore}</p>
                  <p className="text-slate-400 text-sm">及格分数</p>
                </div>
              </div>

              {/* 考试部分 */}
              <div className="space-y-3 mb-6">
                <h3 className="text-lg font-semibold text-white">考试结构</h3>
                {mockExam.sections.map((section, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-shine-500/20 flex items-center justify-center">
                        <span className="text-shine-400 font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{section.name}</p>
                        <p className="text-slate-400 text-sm">{section.questions} 题</p>
                      </div>
                    </div>
                    <span className="text-ray-400 font-medium">{section.points} 分</span>
                  </div>
                ))}
              </div>

              {/* 注意事项 */}
              <div className="p-4 bg-ray-500/10 border border-ray-500/30 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-ray-400 mt-0.5" />
                  <div>
                    <p className="text-ray-300 font-medium mb-1">考试注意事项</p>
                    <ul className="text-ray-300/80 text-sm space-y-1">
                      <li>• 开始后计时器自动启动，无法暂停</li>
                      <li>• 可以随时提交，但提交后无法修改</li>
                      <li>• 请确保网络稳定，避免意外断线</li>
                      <li>• 建议使用计算器辅助计算</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                fullWidth
                icon={<Play className="w-5 h-5" />}
              >
                开始模拟考试
              </Button>
            </Card>
          </div>

          {/* 历史记录 */}
          <div>
            <Card hover={false} className="p-6">
              <h3 className="text-lg font-bold text-white mb-4">历史记录</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">2025-01-08</span>
                    <span className="text-green-400 font-medium">72/80</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }} />
                  </div>
                  <p className="text-slate-400 text-sm mt-2">用时 98 分钟</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">2025-01-01</span>
                    <span className="text-yellow-400 font-medium">58/80</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '72.5%' }} />
                  </div>
                  <p className="text-slate-400 text-sm mt-2">用时 115 分钟</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        // 章节测验列表
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz, index) => {
            const progress = getTopicProgress(quiz.topicId);
            const isUnlocked = progress >= 20 || quiz.topicId === 'force-motion';

            return (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className={`p-6 ${!isUnlocked ? 'opacity-60' : ''}`}
                  onClick={() => isUnlocked && setSelectedTopic(quiz.topicId)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${quiz.gradient} flex items-center justify-center`}>
                      <span className="text-2xl">{quiz.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold">{quiz.name}</h3>
                      <p className="text-slate-400 text-sm">{quiz.nameEN}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {quiz.questionsCount} 题
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {quiz.duration} 分钟
                    </span>
                  </div>

                  {isUnlocked ? (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm">最高分</span>
                        <span className="text-shine-400 font-medium">{quiz.bestScore}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                        <div
                          className={`h-full ${quiz.gradient} rounded-full`}
                          style={{ width: `${quiz.bestScore}%` }}
                        />
                      </div>
                      <Button
                        fullWidth
                        variant="secondary"
                        icon={<Play className="w-4 h-4" />}
                      >
                        开始测验
                      </Button>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                      <p className="text-slate-400 text-sm">
                        完成 20% 的学习进度后解锁
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        当前进度: {progress}%
                      </p>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* 学习建议 */}
      <Card hover={false} className="p-6 bg-gradient-to-r from-shine-500/10 to-transparent">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-shine-500/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-shine-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">学习建议</h3>
            <ul className="text-slate-300 space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-shine-400" />
                建议先完成章节的理论学习，再进行测验
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-shine-400" />
                每个主题至少达到 80% 正确率后再进入下一主题
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-shine-400" />
                定期复习错题本中的题目，巩固薄弱环节
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

