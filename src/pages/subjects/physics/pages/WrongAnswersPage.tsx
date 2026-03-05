import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  BookOpen,
  Check,
  CheckCircle2,
  Edit3,
  Filter,
  PlusCircle,
  Trash2,
  X,
} from 'lucide-react';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { PHYSICS_TOPICS } from '../constants/topics';
import { useStore } from '../store/useStore';
import { WrongAnswer } from '../types';

type FilterType = 'all' | 'unmastered' | 'mastered';

interface ManualFormState {
  topicId: string;
  chapterId: string;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  notes: string;
}

const DEFAULT_FORM: ManualFormState = {
  topicId: PHYSICS_TOPICS[0]?.id ?? 'force-motion',
  chapterId: '',
  questionText: '',
  userAnswer: '',
  correctAnswer: '',
  notes: '',
};

export default function WrongAnswersPage() {
  const {
    wrongAnswers,
    addManualWrongAnswer,
    updateWrongAnswer,
    removeWrongAnswer,
    markAsMastered,
  } = useStore();

  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  const [formState, setFormState] = useState<ManualFormState>(DEFAULT_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValues, setEditingValues] = useState<{
    questionText: string;
    userAnswer: string;
    correctAnswer: string;
    notes: string;
    chapterId: string;
  }>({
    questionText: '',
    userAnswer: '',
    correctAnswer: '',
    notes: '',
    chapterId: '',
  });

  const totalWrong = wrongAnswers.length;
  const masteredCount = wrongAnswers.filter((w) => w.mastered).length;
  const unmasteredCount = totalWrong - masteredCount;

  const filteredAnswers = useMemo(
    () =>
      wrongAnswers
        .filter((wa) => {
          if (filter === 'mastered' && !wa.mastered) return false;
          if (filter === 'unmastered' && wa.mastered) return false;
          if (selectedTopic && wa.topicId !== selectedTopic) return false;
          return true;
        })
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ),
    [filter, selectedTopic, wrongAnswers]
  );

  const getTopicName = (topicId: string) => {
    const topic = PHYSICS_TOPICS.find((t) => t.id === topicId);
    return topic?.nameCN || topicId;
  };

  const getTopicIcon = (topicId: string) => {
    const topic = PHYSICS_TOPICS.find((t) => t.id === topicId);
    return topic?.icon || '📘';
  };

  const isImageOption = (option: string): boolean => {
    if (!option) return false;
    if (option.startsWith('/') || option.startsWith('./')) return true;
    return ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp'].some((ext) =>
      option.toLowerCase().includes(ext)
    );
  };

  const handleCreateWrong = () => {
    if (!formState.questionText.trim()) return;
    if (!formState.userAnswer.trim()) return;
    if (!formState.correctAnswer.trim()) return;

    addManualWrongAnswer({
      topicId: formState.topicId,
      chapterId: formState.chapterId.trim() || 'manual-note',
      questionText: formState.questionText.trim(),
      userAnswer: formState.userAnswer.trim(),
      correctAnswer: formState.correctAnswer.trim(),
      notes: formState.notes.trim() || undefined,
    });

    setFormState(DEFAULT_FORM);
    setShowCreatePanel(false);
  };

  const startEdit = (row: WrongAnswer) => {
    setEditingId(row.id);
    setEditingValues({
      questionText: row.questionText || '',
      userAnswer: row.userAnswer,
      correctAnswer: row.correctAnswer,
      notes: row.notes || '',
      chapterId: row.chapterId || '',
    });
  };

  const saveEdit = (id: string) => {
    if (!editingValues.userAnswer.trim() || !editingValues.correctAnswer.trim()) return;
    updateWrongAnswer(id, {
      questionText: editingValues.questionText.trim() || undefined,
      userAnswer: editingValues.userAnswer.trim(),
      correctAnswer: editingValues.correctAnswer.trim(),
      notes: editingValues.notes.trim() || undefined,
      chapterId: editingValues.chapterId.trim() || 'manual-note',
    });
    setEditingId(null);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-blue-100">错题记录系统</h1>
          <p className="text-blue-300 mt-1">自动收录 + 手动记录，都保存在本地</p>
        </div>
        <Button
          icon={<PlusCircle className="w-4 h-4" />}
          onClick={() => setShowCreatePanel((v) => !v)}
        >
          {showCreatePanel ? '收起手动录入' : '手动记录错题'}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card hover={false} className="p-4">
          <div className="text-2xl font-bold text-blue-100">{totalWrong}</div>
          <div className="text-blue-300 text-sm">总错题</div>
        </Card>
        <Card hover={false} className="p-4">
          <div className="text-2xl font-bold text-yellow-300">{unmasteredCount}</div>
          <div className="text-blue-300 text-sm">待复习</div>
        </Card>
        <Card hover={false} className="p-4">
          <div className="text-2xl font-bold text-green-300">{masteredCount}</div>
          <div className="text-blue-300 text-sm">已掌握</div>
        </Card>
      </div>

      {showCreatePanel && (
        <Card hover={false} className="p-5 space-y-4 border border-primary-500/40">
          <div className="text-blue-100 font-semibold">手动录入错题</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="space-y-1">
              <span className="text-xs text-blue-300">主题</span>
              <select
                value={formState.topicId}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, topicId: e.target.value }))
                }
                className="w-full bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
              >
                {PHYSICS_TOPICS.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.nameCN}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1">
              <span className="text-xs text-blue-300">章节 ID（可选）</span>
              <input
                value={formState.chapterId}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, chapterId: e.target.value }))
                }
                className="w-full bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
                placeholder="e.g. electric-circuits"
              />
            </label>
          </div>
          <label className="space-y-1 block">
            <span className="text-xs text-blue-300">题目（必填）</span>
            <textarea
              value={formState.questionText}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, questionText: e.target.value }))
              }
              className="w-full h-24 bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
              placeholder="记录题干或关键点"
            />
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="space-y-1 block">
              <span className="text-xs text-blue-300">你的答案（必填）</span>
              <input
                value={formState.userAnswer}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, userAnswer: e.target.value }))
                }
                className="w-full bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
              />
            </label>
            <label className="space-y-1 block">
              <span className="text-xs text-blue-300">正确答案（必填）</span>
              <input
                value={formState.correctAnswer}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, correctAnswer: e.target.value }))
                }
                className="w-full bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
              />
            </label>
          </div>
          <label className="space-y-1 block">
            <span className="text-xs text-blue-300">备注（可选）</span>
            <textarea
              value={formState.notes}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, notes: e.target.value }))
              }
              className="w-full h-20 bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
              placeholder="例如：错因、正确思路、下次提醒"
            />
          </label>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setShowCreatePanel(false)}>
              取消
            </Button>
            <Button onClick={handleCreateWrong}>保存到错题本</Button>
          </div>
        </Card>
      )}

      <Card hover={false} className="p-4 space-y-4">
        <div className="flex items-center gap-2 text-blue-100">
          <Filter className="w-4 h-4" />
          <span className="font-medium">筛选</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {(['all', 'unmastered', 'mastered'] as FilterType[]).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filter === type
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              {type === 'all' ? '全部' : type === 'unmastered' ? '待复习' : '已掌握'}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTopic(null)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              selectedTopic === null
                ? 'bg-primary-500 text-white'
                : 'bg-white/10 text-blue-200 hover:bg-white/20'
            }`}
          >
            全部主题
          </button>
          {PHYSICS_TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                selectedTopic === topic.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              {topic.icon} {topic.nameCN}
            </button>
          ))}
        </div>
      </Card>

      {filteredAnswers.length === 0 ? (
        <Card hover={false} className="p-10 text-center">
          <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-3" />
          <p className="text-blue-100 font-semibold mb-1">当前没有匹配的错题</p>
          <p className="text-blue-300 text-sm">你可以先做题自动收录，或手动新增。</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredAnswers.map((wa) => {
            const isEditing = editingId === wa.id;
            return (
              <Card key={wa.id} hover={false} className="p-5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getTopicIcon(wa.topicId)}</span>
                    <div>
                      <div className="text-sm text-primary-300 font-medium">
                        {getTopicName(wa.topicId)} · {wa.chapterId || '未分章节'}
                      </div>
                      <div className="text-xs text-blue-300">
                        来源: {wa.source === 'manual' ? '手动录入' : '自动收录'} ·
                        添加时间: {new Date(wa.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {wa.mastered ? (
                      <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs flex items-center gap-1">
                        <Check className="w-3 h-3" /> 已掌握
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> 待复习
                      </span>
                    )}
                    {!wa.mastered && (
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={<Check className="w-4 h-4" />}
                        onClick={() => markAsMastered(wa.id)}
                      >
                        标记掌握
                      </Button>
                    )}
                    {!isEditing ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<Edit3 className="w-4 h-4" />}
                        onClick={() => startEdit(wa)}
                      >
                        编辑
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<X className="w-4 h-4" />}
                        onClick={() => setEditingId(null)}
                      >
                        取消编辑
                      </Button>
                    )}
                    <Button
                      variant="danger"
                      size="sm"
                      icon={<Trash2 className="w-4 h-4" />}
                      onClick={() => removeWrongAnswer(wa.id)}
                    >
                      删除
                    </Button>
                  </div>
                </div>

                {isEditing ? (
                  <div className="space-y-3">
                    <label className="block space-y-1">
                      <span className="text-xs text-blue-300">题目</span>
                      <textarea
                        value={editingValues.questionText}
                        onChange={(e) =>
                          setEditingValues((prev) => ({
                            ...prev,
                            questionText: e.target.value,
                          }))
                        }
                        className="w-full h-20 bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
                      />
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <label className="block space-y-1">
                        <span className="text-xs text-blue-300">你的答案</span>
                        <input
                          value={editingValues.userAnswer}
                          onChange={(e) =>
                            setEditingValues((prev) => ({
                              ...prev,
                              userAnswer: e.target.value,
                            }))
                          }
                          className="w-full bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
                        />
                      </label>
                      <label className="block space-y-1">
                        <span className="text-xs text-blue-300">正确答案</span>
                        <input
                          value={editingValues.correctAnswer}
                          onChange={(e) =>
                            setEditingValues((prev) => ({
                              ...prev,
                              correctAnswer: e.target.value,
                            }))
                          }
                          className="w-full bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
                        />
                      </label>
                    </div>
                    <label className="block space-y-1">
                      <span className="text-xs text-blue-300">备注</span>
                      <textarea
                        value={editingValues.notes}
                        onChange={(e) =>
                          setEditingValues((prev) => ({
                            ...prev,
                            notes: e.target.value,
                          }))
                        }
                        className="w-full h-16 bg-slate-800/60 border border-white/20 rounded-lg p-2 text-blue-100"
                      />
                    </label>
                    <div className="flex justify-end">
                      <Button size="sm" onClick={() => saveEdit(wa.id)}>
                        保存修改
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {wa.questionText ? (
                      <div>
                        <p className="text-xs text-blue-300 mb-1">题目</p>
                        <p className="text-blue-100">{wa.questionText}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xs text-blue-300 mb-1">题目 ID</p>
                        <p className="text-blue-100">{wa.exerciseId}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-300 text-xs mb-1">你的答案</p>
                        {isImageOption(wa.userAnswer) ? (
                          <img
                            src={wa.userAnswer}
                            alt="User answer"
                            className="max-w-full max-h-44 rounded-lg"
                          />
                        ) : (
                          <p className="text-blue-100">{wa.userAnswer}</p>
                        )}
                      </div>
                      <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <p className="text-green-300 text-xs mb-1">正确答案</p>
                        {isImageOption(wa.correctAnswer) ? (
                          <img
                            src={wa.correctAnswer}
                            alt="Correct answer"
                            className="max-w-full max-h-44 rounded-lg"
                          />
                        ) : (
                          <p className="text-blue-100">{wa.correctAnswer}</p>
                        )}
                      </div>
                    </div>
                    {wa.notes ? (
                      <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                        <p className="text-xs text-blue-300 mb-1">备注</p>
                        <p className="text-blue-100 whitespace-pre-wrap">{wa.notes}</p>
                      </div>
                    ) : null}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      <Card hover={false} className="p-5 bg-gradient-to-r from-accent-500/10 to-transparent">
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-accent-400 mt-0.5" />
          <div className="text-sm text-blue-200 space-y-1">
            <p className="font-semibold text-blue-100">使用建议</p>
            <p>1. 每道错题至少写一句“为什么错”。</p>
            <p>2. 改对后先不要立刻标记已掌握，隔天再做一次。</p>
            <p>3. 定期按主题筛选，集中攻克薄弱章节。</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

