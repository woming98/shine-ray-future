import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Check,
  X,
  RefreshCw,
  Filter,
  Trash2,
  ChevronDown,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { PHYSICS_TOPICS } from '../constants/topics';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';

export default function WrongAnswersPage() {
  const { wrongAnswers, markAsMastered } = useStore();
  const [filter, setFilter] = useState<'all' | 'unmastered' | 'mastered'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // 过滤错题
  const filteredAnswers = wrongAnswers.filter((wa) => {
    if (filter === 'mastered' && !wa.mastered) return false;
    if (filter === 'unmastered' && wa.mastered) return false;
    if (selectedTopic && wa.topicId !== selectedTopic) return false;
    return true;
  });

  // 统计数据
  const totalWrong = wrongAnswers.length;
  const masteredCount = wrongAnswers.filter((wa) => wa.mastered).length;
  const unmasteredCount = totalWrong - masteredCount;

  // 获取主题名称
  const getTopicName = (topicId: string) => {
    const topic = PHYSICS_TOPICS.find((t) => t.id === topicId);
    return topic?.nameCN || topicId;
  };

  // 获取主题图标
  const getTopicIcon = (topicId: string) => {
    const topic = PHYSICS_TOPICS.find((t) => t.id === topicId);
    return topic?.icon || '📚';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* 页面标题 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-white">错题本</h1>
          <p className="text-slate-400 mt-2">温故知新，掌握每一个知识点</p>
        </div>
        <Button
          variant="secondary"
          icon={<RefreshCw className="w-4 h-4" />}
        >
          开始复习
        </Button>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card hover={false} className="p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
              <X className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{totalWrong}</p>
              <p className="text-slate-400 text-sm">总错题数</p>
            </div>
          </div>
        </Card>

        <Card hover={false} className="p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{unmasteredCount}</p>
              <p className="text-slate-400 text-sm">待复习</p>
            </div>
          </div>
        </Card>

        <Card hover={false} className="p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{masteredCount}</p>
              <p className="text-slate-400 text-sm">已掌握</p>
            </div>
          </div>
        </Card>
      </div>

      {/* 筛选器 */}
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors"
        >
          <Filter className="w-4 h-4" />
          筛选
          <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl transition-colors ${
              filter === 'all'
                ? 'bg-shine-500 text-white'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
            }`}
          >
            全部
          </button>
          <button
            onClick={() => setFilter('unmastered')}
            className={`px-4 py-2 rounded-xl transition-colors ${
              filter === 'unmastered'
                ? 'bg-yellow-500 text-white'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
            }`}
          >
            待复习
          </button>
          <button
            onClick={() => setFilter('mastered')}
            className={`px-4 py-2 rounded-xl transition-colors ${
              filter === 'mastered'
                ? 'bg-green-500 text-white'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
            }`}
          >
            已掌握
          </button>
        </div>
      </div>

      {/* 主题筛选 */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 p-4 bg-white/5 rounded-xl">
              <button
                onClick={() => setSelectedTopic(null)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  selectedTopic === null
                    ? 'bg-shine-500 text-white'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                全部主题
              </button>
              {PHYSICS_TOPICS.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-1 ${
                    selectedTopic === topic.id
                      ? 'bg-shine-500 text-white'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  <span>{topic.icon}</span>
                  {topic.nameCN}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 错题列表 */}
      {filteredAnswers.length > 0 ? (
        <div className="space-y-4">
          {filteredAnswers.map((wrongAnswer, index) => (
            <motion.div
              key={wrongAnswer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card hover={false} className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getTopicIcon(wrongAnswer.topicId)}</span>
                    <div>
                      <span className="text-shine-400 text-sm font-medium">
                        {getTopicName(wrongAnswer.topicId)}
                      </span>
                      <p className="text-slate-400 text-xs">
                        错误次数: {wrongAnswer.attempts} | 
                        添加时间: {new Date(wrongAnswer.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {wrongAnswer.mastered ? (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        已掌握
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        待复习
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">题目 ID</p>
                    <p className="text-white">{wrongAnswer.exerciseId}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <p className="text-red-400 text-sm mb-1 flex items-center gap-1">
                        <X className="w-4 h-4" />
                        你的答案
                      </p>
                      <p className="text-white">{wrongAnswer.userAnswer}</p>
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
                      <p className="text-green-400 text-sm mb-1 flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        正确答案
                      </p>
                      <p className="text-white">{wrongAnswer.correctAnswer}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-white/10">
                  {!wrongAnswer.mastered && (
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={<Check className="w-4 h-4" />}
                      onClick={() => markAsMastered(wrongAnswer.id)}
                    >
                      标记为已掌握
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<BookOpen className="w-4 h-4" />}
                  >
                    查看详解
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <Card hover={false} className="p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {filter === 'all' ? '暂无错题' : filter === 'mastered' ? '暂无已掌握的错题' : '所有错题都已掌握！'}
          </h3>
          <p className="text-slate-400">
            {filter === 'all' 
              ? '继续做题，错题会自动收录在这里' 
              : filter === 'mastered'
              ? '完成复习后标记为已掌握'
              : '太棒了！保持这种状态'}
          </p>
        </Card>
      )}

      {/* 学习建议 */}
      <Card hover={false} className="p-6 bg-gradient-to-r from-ray-500/10 to-transparent">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-ray-500/20 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-ray-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">复习建议</h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• 建议每天花 15-20 分钟复习错题</li>
              <li>• 同一类型的错题可以一起复习，找出共同的问题</li>
              <li>• 连续答对 3 次后再标记为已掌握</li>
              <li>• 定期清理已掌握的错题，专注于薄弱环节</li>
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

