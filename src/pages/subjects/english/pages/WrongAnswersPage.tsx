/**
 * 错题本页面
 * 显示所有错题，支持筛选和重新练习
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BookOpen, Filter } from 'lucide-react';
import { useEnglishStore } from '../store/useStore';
import { Card, Button } from '../components/UI';

export default function WrongAnswersPage() {
  const { errorLogs, markAsMastered, practiceRecords } = useEnglishStore();
  const [filterSkill, setFilterSkill] = useState<string | 'all'>('all');
  const [showMastered, setShowMastered] = useState(false);

  const filteredErrors = useMemo(() => {
    let filtered = errorLogs.filter(e => showMastered || !e.mastered);
    if (filterSkill !== 'all') {
      filtered = filtered.filter(e => e.skill === filterSkill);
    }
    return filtered.sort((a, b) => b.errorCount - a.errorCount);
  }, [errorLogs, filterSkill, showMastered]);

  const skills = ['reading', 'writing', 'listening', 'speaking', 'grammar', 'vocabulary'];

  const getQuestionDetails = (questionId: string, skill: string) => {
    const record = practiceRecords.find(r => r.questionId === questionId && r.skill === skill);
    return record;
  };

  const handleMarkAsMastered = (errorLogId: string) => {
    markAsMastered(errorLogId);
  };

  const getSkillColor = (skill: string) => {
    const colors: Record<string, string> = {
      reading: 'bg-blue-100 text-blue-700',
      writing: 'bg-purple-100 text-purple-700',
      listening: 'bg-green-100 text-green-700',
      speaking: 'bg-orange-100 text-orange-700',
      grammar: 'bg-yellow-100 text-yellow-700',
      vocabulary: 'bg-pink-100 text-pink-700',
    };
    return colors[skill] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            错题本
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              共 {filteredErrors.length} 道错题
            </span>
          </div>
        </div>

        {/* 筛选器 */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">筛选：</span>
          </div>
          <button
            onClick={() => setFilterSkill('all')}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              filterSkill === 'all'
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            全部
          </button>
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setFilterSkill(skill)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                filterSkill === skill
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {skill}
            </button>
          ))}
          <label className="flex items-center gap-2 ml-auto">
            <input
              type="checkbox"
              checked={showMastered}
              onChange={(e) => setShowMastered(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">显示已掌握</span>
          </label>
        </div>

        {/* 错题列表 */}
        {filteredErrors.length === 0 ? (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">太棒了！没有错题需要复习。</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredErrors.map((error) => {
              const questionDetails = getQuestionDetails(error.questionId, error.skill);
              return (
                <motion.div
                  key={error.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getSkillColor(error.skill)}`}>
                          {error.skill}
                        </span>
                        {error.mastered && (
                          <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700">
                            已掌握
                          </span>
                        )}
                        <span className="text-sm text-gray-500">
                          错误 {error.errorCount} 次
                        </span>
                      </div>
                      <p className="text-gray-900 font-medium mb-2">
                        题目 ID: {error.questionId}
                      </p>
                      {questionDetails && (
                        <p className="text-sm text-gray-600 mb-2">
                          你的答案：{questionDetails.userAnswer}
                        </p>
                      )}
                      {error.topic && (
                        <p className="text-xs text-gray-500">
                          主题：{error.topic} {error.subtopic && `- ${error.subtopic}`}
                        </p>
                      )}
                    </div>
                    {!error.mastered && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleMarkAsMastered(error.id)}
                        icon={<CheckCircle className="w-4 h-4" />}
                      >
                        标记已掌握
                      </Button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}
