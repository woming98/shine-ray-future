/**
 * Force and Motion Exercise 页面
 * 支持8个子板块筛选，新的UI：先显示对错，点击展开解析
 */

import { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileQuestion,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Filter,
  Target,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  Rocket,
  RotateCcw,
  BarChart3,
  AlertTriangle,
} from 'lucide-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { FORCE_MOTION_EXERCISES } from '../constants/forceMotion';
import { FORCE_MOTION_SECTIONS } from '../constants/forceMotionSections';
import { Exercise } from '../types';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { useStore } from '../store/useStore';

interface ExerciseSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

interface ExercisePageProps {
  embedded?: boolean;
  topicId?: string;
  chapterId?: string;
  exercises?: Exercise[];
  sections?: ExerciseSection[];
  defaultSectionId?: string;
}

export default function ExercisePage({
  embedded = false,
  topicId: topicIdOverride,
  chapterId: chapterIdOverride,
  exercises: exercisesOverride,
  sections: sectionsOverride,
  defaultSectionId,
}: ExercisePageProps) {
  const { sectionId: sectionIdParam } = useParams<{ sectionId?: string }>();
  const navigate = useNavigate();
  const { 
    addWrongAnswer, 
    markExerciseAttempt, 
    getExerciseProgress, 
    setLaunched, 
    resetExerciseProgress,
    updateProgress,
    progress,
    sidebarOpen 
  } = useStore();

  const resolvedExercises = exercisesOverride || FORCE_MOTION_EXERCISES;
  const resolvedSections = sectionsOverride || FORCE_MOTION_SECTIONS;
  const resolvedTopicId = topicIdOverride || 'force-motion';
  const resolvedChapterId = chapterIdOverride || 'fm-ch1';

  const initialSelectedSection =
    sectionIdParam || defaultSectionId || resolvedSections[0]?.id || null;
  const [selectedSection, setSelectedSection] = useState<string | null>(initialSelectedSection);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<number | null>(null);
  const [showRocketLaunch, setShowRocketLaunch] = useState(false);
  const [showLaunchModal, setShowLaunchModal] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // 过滤练习题（按子板块 + 难度）
  const filteredExercises = useMemo(() => {
    let exercises = resolvedExercises;

    // 按子板块过滤
    if (selectedSection) {
      exercises = exercises.filter((e) => e.sectionId === selectedSection);
    }
    
    // 按难度过滤
    if (difficultyFilter !== null) {
      exercises = exercises.filter((e) => e.difficulty === difficultyFilter);
    }
    
    return exercises;
  }, [difficultyFilter, resolvedExercises, selectedSection]);

  // 当前子板块的总题数（不受难度过滤影响）
  const sectionExercises = useMemo(() => {
    if (!selectedSection) return resolvedExercises;
    return resolvedExercises.filter((e) => e.sectionId === selectedSection);
  }, [resolvedExercises, selectedSection]);

  // 确保 currentExerciseIndex 在有效范围内
  useEffect(() => {
    if (filteredExercises.length > 0 && currentExerciseIndex >= filteredExercises.length) {
      setCurrentExerciseIndex(0);
    }
  }, [filteredExercises.length, currentExerciseIndex]);

  // 获取练习进度（按 topicId + sectionId 维度）
  const sectionIdKey =
    selectedSection || defaultSectionId || resolvedSections[0]?.id || 'all';
  const exerciseProgress = getExerciseProgress(resolvedTopicId, sectionIdKey);
  const correctCount = exerciseProgress.correctIds.length;
  const attemptedCount = exerciseProgress.attemptedIds.length;
  const wrongEverCount = exerciseProgress.wrongEverIds.length;
  const totalExercises = sectionExercises.length;
  const correctRate = totalExercises > 0 ? (correctCount / totalExercises) * 100 : 0;
  const shouldLaunch = correctRate >= 95 && !exerciseProgress.hasLaunched;
  const allAttempted = attemptedCount === totalExercises && totalExercises > 0;
  const completionThreshold = 90;
  const meetsCompletion = allAttempted && correctRate >= completionThreshold;

  const currentExercise = filteredExercises[currentExerciseIndex];
  const isCorrect = checked && selectedAnswer === currentExercise?.answer;

  const handleCheck = () => {
    if (!selectedAnswer || checked || !currentExercise) return;
    
    setChecked(true);
    const isCorrect = selectedAnswer === currentExercise.answer;
    
    if (!isCorrect) {
      addWrongAnswer({
        exerciseId: currentExercise.id,
        topicId: resolvedTopicId,
        chapterId: resolvedChapterId,
        userAnswer: selectedAnswer,
        correctAnswer: currentExercise.answer,
        attempts: 1,
        mastered: false,
      });
    }
    
    // 记录作答结果（attempted, correct, wrongEver）
    markExerciseAttempt(resolvedTopicId, sectionIdKey, currentExercise.id, isCorrect);
  };

  // 检测是否需要触发升空动画
  useEffect(() => {
    if (shouldLaunch && correctCount > 0) {
      setShowRocketLaunch(true);
      setLaunched(resolvedTopicId, sectionIdKey);
      // 3秒后隐藏动画，然后显示选择 Modal
      const timer = setTimeout(() => {
        setShowRocketLaunch(false);
        setShowLaunchModal(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [shouldLaunch, correctCount, resolvedTopicId, sectionIdKey, setLaunched]);

  // 检测是否做完全部题目，自动显示总结
  useEffect(() => {
    if (allAttempted && !showSummaryModal && !showLaunchModal) {
      // 延迟一下，避免与升空动画冲突
      const timer = setTimeout(() => {
        setShowSummaryModal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [allAttempted, showSummaryModal, showLaunchModal]);

  // 满足完成条件（全部完成且正确率 >= 90%）时记录为已完成
  useEffect(() => {
    if (!selectedSection || totalExercises === 0) return;
    const existing = progress.find(
      (p) => p.topicId === resolvedTopicId && p.chapterId === sectionIdKey
    );
    const nextScore = Math.round(correctRate);

    if (meetsCompletion) {
      if (!existing?.completed || existing.score !== nextScore) {
        updateProgress(resolvedTopicId, sectionIdKey, {
          completed: true,
          score: nextScore,
          lastAccessed: new Date(),
        });
      }
      return;
    }

    // 未达标时在全做完的情况下更新分数（不覆盖已完成状态）
    if (allAttempted && !existing?.completed && existing?.score !== nextScore) {
      updateProgress(resolvedTopicId, sectionIdKey, {
        completed: false,
        score: nextScore,
        lastAccessed: new Date(),
      });
    }
  }, [
    allAttempted,
    correctRate,
    meetsCompletion,
    progress,
    resolvedTopicId,
    sectionIdKey,
    selectedSection,
    totalExercises,
    updateProgress,
  ]);

  // 跳转到指定题目
  const jumpToExerciseById = (exerciseId: string) => {
    // 先尝试在当前过滤结果中查找
    const filteredIndex = filteredExercises.findIndex((e) => e.id === exerciseId);
    if (filteredIndex >= 0) {
      handleExerciseClick(filteredIndex);
      setShowSummaryModal(false);
      return;
    }
    
    // 如果不在当前过滤结果中，清除过滤并跳转
    setDifficultyFilter(null);
    // 等待过滤更新后再跳转
    setTimeout(() => {
      const baseExercises = selectedSection
        ? resolvedExercises.filter((e) => e.sectionId === selectedSection)
        : resolvedExercises;
      const newFilteredIndex = baseExercises.findIndex((e) => e.id === exerciseId);
      if (newFilteredIndex >= 0) {
        setCurrentExerciseIndex(newFilteredIndex);
        // 重置题目状态
        setSelectedAnswer(null);
        setChecked(false);
        setShowExplanation(false);
      }
      setShowSummaryModal(false);
    }, 100);
  };

  // 重置进度
  const handleReset = () => {
    resetExerciseProgress(resolvedTopicId, sectionIdKey);
    updateProgress(resolvedTopicId, sectionIdKey, {
      completed: false,
      score: 0,
      lastAccessed: new Date(),
    });
    setShowResetConfirm(false);
    setShowSummaryModal(false);
    setShowLaunchModal(false);
    // 重置当前题目状态
    setSelectedAnswer(null);
    setChecked(false);
    setShowExplanation(false);
    setCurrentExerciseIndex(0);
  };

  const handleNext = () => {
    if (currentExerciseIndex < filteredExercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setSelectedAnswer(null);
      setChecked(false);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
      setSelectedAnswer(null);
      setChecked(false);
      setShowExplanation(false);
    }
  };

  const handleExerciseClick = (index: number) => {
    setCurrentExerciseIndex(index);
    setSelectedAnswer(null);
    setChecked(false);
    setShowExplanation(false);
  };

  // 检测选项是否为图片路径
  const isImageOption = (option: string): boolean => {
    // 检查是否以 / 或 ./ 开头（绝对路径或相对路径）
    if (option.startsWith('/') || option.startsWith('./')) {
      return true;
    }
    // 检查是否包含图片文件扩展名
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp'];
    return imageExtensions.some(ext => option.toLowerCase().includes(ext));
  };

  // 渲染包含 LaTeX 和 Markdown 的文本内容
  const renderLatexContent = (content: string) => {
    if (!content || content.trim() === '') {
      return [<span key="empty" className="text-blue-300 italic">No content available.</span>];
    }
    
    const parts: (string | JSX.Element)[] = [];
    
    // 先按段落分割（\n\n），这样可以在段落级别处理 Markdown
    const paragraphs = content.split(/\n\n+/);
    let keyIndex = 0;

    paragraphs.forEach((paragraph, pIdx) => {
      if (!paragraph.trim()) {
        if (pIdx < paragraphs.length - 1) {
          parts.push(<br key={`br-${keyIndex++}`} />);
        }
        return;
      }

      // 先处理块级公式 ($$...$$ 或 \[...\])
      const displayRegex = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\])/g;
      const displayChunks = paragraph.split(displayRegex);

      displayChunks.forEach((chunk) => {
        if (!chunk) return;

        // 块级公式：$$...$$
        const isDollarDisplay = chunk.startsWith('$$') && chunk.endsWith('$$');
        if (isDollarDisplay) {
          const latex = chunk.slice(2, -2).trim();
          if (latex) {
            try {
              const html = katex.renderToString(latex, {
                throwOnError: false,
                displayMode: true,
              });
              parts.push(
                <div
                  key={`d-${keyIndex++}`}
                  className="my-3 p-3 bg-slate-800/50 rounded-lg border border-blue-500/30 overflow-x-auto [&_.katex]:text-blue-100"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            } catch {
              parts.push(<span key={`d-${keyIndex++}`} className="text-red-500">{chunk}</span>);
            }
          }
          return;
        }

        // 块级公式：\[...\]
        const isBracketDisplay = chunk.startsWith('\\[') && chunk.endsWith('\\]');
        if (isBracketDisplay) {
          const latex = chunk.slice(2, -2).trim();
          if (latex) {
            try {
              const html = katex.renderToString(latex, {
                throwOnError: false,
                displayMode: true,
              });
              parts.push(
                <div
                  key={`b-${keyIndex++}`}
                  className="my-3 p-3 bg-slate-800/50 rounded-lg border border-blue-500/30 overflow-x-auto [&_.katex]:text-blue-100"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            } catch {
              parts.push(<span key={`b-${keyIndex++}`} className="text-red-500">{chunk}</span>);
            }
          }
          return;
        }

        // 处理行内公式和 Markdown
        const processedChunk = processInlineLatexAndMarkdown(chunk, keyIndex);
        parts.push(...processedChunk.parts);
        keyIndex = processedChunk.nextKeyIndex;
      });

      // 段落之间添加换行（除了最后一个段落）
      if (pIdx < paragraphs.length - 1) {
        parts.push(<br key={`para-br-${keyIndex++}`} />);
      }
    });

    // 如果 parts 为空，返回原始内容（作为后备）
    if (parts.length === 0) {
      return [<span key="fallback" className="whitespace-pre-wrap">{content}</span>];
    }
    
    return parts;
  };

  // 处理行内 LaTeX 和 Markdown
  const processInlineLatexAndMarkdown = (text: string, startKeyIndex: number) => {
    const parts: (string | JSX.Element)[] = [];
    let keyIndex = startKeyIndex;

    // 先处理行内公式 ($...$ 或 \(...\))
    const inlineRegex = /(\$[^$]+\$|\\\([^)]+\\\))/g;
    const inlineChunks = text.split(inlineRegex);

    inlineChunks.forEach((inlineChunk) => {
      if (!inlineChunk) return;

      // 行内公式：$...$
      const isDollarInline =
        inlineChunk.startsWith('$') &&
        inlineChunk.endsWith('$') &&
        !inlineChunk.startsWith('$$');
      if (isDollarInline) {
        const latex = inlineChunk.slice(1, -1);
        try {
          const html = katex.renderToString(latex, {
            throwOnError: false,
            displayMode: false,
          });
            parts.push(
              <span
                key={`i-${keyIndex++}`}
                className="inline-block align-middle mx-0.5 [&_.katex]:text-blue-100"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
        } catch {
          parts.push(<span key={`i-${keyIndex++}`}>{inlineChunk}</span>);
        }
        return;
      }

      // 行内公式：\(...\)
      const isParenInline = inlineChunk.startsWith('\\(') && inlineChunk.endsWith('\\)');
      if (isParenInline) {
        const latex = inlineChunk.slice(2, -2);
        try {
          const html = katex.renderToString(latex, {
            throwOnError: false,
            displayMode: false,
          });
            parts.push(
              <span
                key={`p-${keyIndex++}`}
                className="inline-block align-middle mx-0.5 [&_.katex]:text-blue-100"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
        } catch {
          parts.push(<span key={`p-${keyIndex++}`}>{inlineChunk}</span>);
        }
        return;
      }

      // 普通文本 - 处理 Markdown 格式
      const markdownParts = renderMarkdown(inlineChunk, keyIndex);
      parts.push(...markdownParts);
      keyIndex += markdownParts.length;
    });

    return { parts, nextKeyIndex: keyIndex };
  };

  // 渲染 Markdown 格式（加粗、列表、换行、图片等）
  const renderMarkdown = (text: string, startKeyIndex: number) => {
    if (!text) return [];
    
    const parts: (string | JSX.Element)[] = [];
    let keyIndex = startKeyIndex;

    // 处理换行符 \n（转换为 <br>）
    const lines = text.split('\n');
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      if (line.trim() === '') {
        if (i < lines.length - 1) {
          parts.push(<br key={`br-${keyIndex++}`} />);
        }
        i++;
        continue;
      }

      // 处理图片：![alt](src) - 方案C：只显示文字引用，图片通过 imagePaths 统一展示
      const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
      const imageMatch = line.match(imageRegex);
      if (imageMatch) {
        // 如果 question 中还有图片 Markdown，只显示文字引用（通常题目中已有 "as shown in the figure"）
        // 不渲染任何内容，因为图片会通过 imagePaths 统一展示
        i++;
        continue;
      }

      // 检查是否是列表项（以 - 开头）
      if (line.trim().startsWith('-')) {
        // 收集连续的列表项
        const listItems: JSX.Element[] = [];
        while (i < lines.length && lines[i].trim().startsWith('-')) {
          const listContent = lines[i].replace(/^-\s*/, '');
          const listParts = processBoldAndText(listContent, keyIndex);
          listItems.push(
            <li key={`li-${keyIndex++}`} className="ml-4 mb-1">
              {listParts.parts}
            </li>
          );
          keyIndex = listParts.nextKeyIndex;
          i++;
        }
        // 将列表项包裹在 <ul> 中
        if (listItems.length > 0) {
          parts.push(
            <ul key={`ul-${keyIndex++}`} className="list-disc list-inside space-y-1 ml-4 my-2">
              {listItems}
            </ul>
          );
        }
        continue;
      }

      // 处理普通文本（包含加粗）
      const textParts = processBoldAndText(line, keyIndex);
      parts.push(...textParts.parts);
      keyIndex = textParts.nextKeyIndex;

      // 如果不是最后一行，添加换行
      if (i < lines.length - 1) {
        parts.push(<br key={`line-br-${keyIndex++}`} />);
      }
      i++;
    }

    return parts.length > 0 ? parts : [text];
  };

  // 处理加粗和普通文本
  const processBoldAndText = (text: string, startKeyIndex: number) => {
    const parts: (string | JSX.Element)[] = [];
    let keyIndex = startKeyIndex;

    // 处理加粗 **text**
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      // 添加之前的文本
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      // 添加加粗文本
      parts.push(
        <strong key={`bold-${keyIndex++}`} className="font-semibold">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    // 添加剩余文本
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return { parts: parts.length > 0 ? parts : [text], nextKeyIndex: keyIndex };
  };

  if (!currentExercise) {
    return (
      <Card hover={false} className="p-8 text-center">
        <FileQuestion className="w-12 h-12 text-blue-300 mx-auto mb-4" />
        <p className="text-blue-300">暂无练习题</p>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 relative"
    >
      {/* 右上角火箭能量条 - 使用 Portal 渲染到 body，避免被父容器 z-index 限制 */}
      {typeof window !== 'undefined' ? createPortal(
        <div className={`fixed top-20 z-[9999] ${sidebarOpen ? 'right-4 lg:right-80' : 'right-4'} transition-all duration-300`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800/90 backdrop-blur-sm border border-blue-500/30 rounded-xl p-3 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <Rocket
                className={`w-6 h-6 transition-colors ${
                  correctRate >= 95 ? 'text-yellow-400 animate-pulse' : 'text-blue-400'
                }`}
              />
              <div className="flex flex-col min-w-[120px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-blue-300">进度</span>
                  <span className="text-xs font-medium text-blue-100">
                    {correctCount}/{totalExercises}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      correctRate >= 95
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                        : 'bg-gradient-to-r from-blue-400 to-blue-600'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(correctRate, 100)}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-xs text-blue-400 mt-1 text-right">
                  {correctRate >= 95 ? '准备升空！' : `${Math.round(correctRate)}%`}
                </div>
              </div>
            </div>
            {/* 操作按钮 */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-blue-500/20">
              <button
                onClick={() => setShowResetConfirm(true)}
                className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-xs font-medium transition-colors"
                title="重置进度"
              >
                <RotateCcw className="w-3 h-3" />
                重置
              </button>
              <button
                onClick={() => setShowSummaryModal(true)}
                className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg text-xs font-medium transition-colors"
                title="查看总结"
              >
                <BarChart3 className="w-3 h-3" />
                总结
              </button>
            </div>
          </motion.div>
        </div>,
        document.body
      ) : null}

      {/* 升空动画 */}
      <AnimatePresence>
        {showRocketLaunch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] pointer-events-none"
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-slate-900/80 to-slate-900/80" />
            
            {/* 火箭 */}
            <motion.div
              initial={{ y: '100vh', x: '-50%', rotate: 0 }}
              animate={{ y: '-20vh', rotate: -15 }}
              exit={{ y: '-20vh', opacity: 0 }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute left-1/2 bottom-0"
            >
              <div className="relative">
                {/* 火箭主体 */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Rocket className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]" />
                </motion.div>
                
                {/* 火焰尾迹 */}
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-full blur-sm"
                />
              </div>
            </motion.div>

            {/* 成功文字 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <motion.h2
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                className="text-4xl font-bold text-yellow-400 mb-2 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
              >
                🎉 恭喜！
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-xl text-blue-100"
              >
                正确率达到 {Math.round(correctRate)}%！
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-lg text-blue-300 mt-2"
              >
                火箭升空！🚀
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 升空后选择 Modal */}
      <AnimatePresence>
        {showLaunchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowLaunchModal(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-800 border border-blue-500/30 rounded-xl p-6 max-w-md w-full shadow-xl"
            >
              <div className="text-center mb-6">
                <Rocket className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
                <h2 className="text-2xl font-bold text-blue-100 mb-2">恭喜！正确率达到 95%！</h2>
                <p className="text-blue-300">火箭已成功升空！🚀</p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => {
                    setShowLaunchModal(false);
                  }}
                >
                  继续挑战
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => {
                    setShowLaunchModal(false);
                    setShowSummaryModal(true);
                  }}
                >
                  查看总结
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 总结 Modal */}
      <AnimatePresence>
        {showSummaryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowSummaryModal(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-800 border border-blue-500/30 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-blue-100 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6" />
                  练习总结
                </h2>
                <button
                  onClick={() => setShowSummaryModal(false)}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              {/* 统计信息 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-100">{totalExercises}</div>
                  <div className="text-sm text-blue-300 mt-1">总题数</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-100">{attemptedCount}</div>
                  <div className="text-sm text-blue-300 mt-1">已作答</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{correctCount}</div>
                  <div className="text-sm text-blue-300 mt-1">已答对</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-400">{wrongEverCount}</div>
                  <div className="text-sm text-blue-300 mt-1">曾经答错</div>
                </div>
              </div>

              {/* 正确率 */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-200 font-medium">正确率</span>
                  <span className="text-blue-100 font-bold text-lg">
                    {totalExercises > 0 ? Math.round((correctCount / totalExercises) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((correctCount / totalExercises) * 100, 100)}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* 错题列表 */}
              {wrongEverCount > 0 ? (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <h3 className="text-lg font-semibold text-blue-100">曾经答错的题目</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exerciseProgress.wrongEverIds.map((id) => {
                      const exerciseIndex = sectionExercises.findIndex((e) => e.id === id);
                      return (
                        <button
                          key={id}
                          onClick={() => jumpToExerciseById(id)}
                          className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-medium transition-colors border border-red-500/30"
                        >
                          {exerciseIndex >= 0 ? `Q${exerciseIndex + 1}` : id}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="mb-6 text-center py-8 bg-green-500/10 rounded-lg border border-green-500/30">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-medium">太棒了！没有答错任何题目！</p>
                </div>
              )}

              {/* 操作按钮 */}
              <div className="flex gap-3 pt-4 border-t border-blue-500/20">
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => setShowSummaryModal(false)}
                >
                  关闭
                </Button>
                <Button
                  variant="danger"
                  className="flex-1"
                  onClick={() => {
                    setShowResetConfirm(true);
                    setShowSummaryModal(false);
                  }}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  重置进度
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 重置确认 Modal */}
      <AnimatePresence>
        {showResetConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowResetConfirm(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-800 border border-red-500/30 rounded-xl p-6 max-w-md w-full shadow-xl"
            >
              <div className="text-center mb-6">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-blue-100 mb-2">确认重置进度？</h2>
                <p className="text-blue-300">
                  重置后，所有进度数据将被清空，包括：
                  <br />
                  • 已作答记录
                  <br />
                  • 答对记录
                  <br />
                  • 错题记录
                  <br />
                  • 升空状态
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => setShowResetConfirm(false)}
                >
                  取消
                </Button>
                <Button
                  variant="danger"
                  className="flex-1"
                  onClick={handleReset}
                >
                  确认重置
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 页面头部 - 仅在非嵌入模式下显示 */}
      {!embedded && (
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-blue-100 mb-2">
              Force and Motion - Exercise
            </h1>
            <p className="text-blue-300">Practice problems with instant feedback</p>
          </div>
          <Button variant="ghost" onClick={() => navigate('/subjects/physics')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      )}

      {/* 板块选择器 */}
      <Card hover={false} className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-primary-400" />
          <h3 className="text-lg font-semibold text-blue-100">Sections</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {resolvedSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setSelectedSection(section.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedSection === section.id
                  ? 'bg-primary-500 text-blue-100'
                  : 'bg-slate-800/50/10 text-blue-200 hover:bg-slate-800/50/20'
              }`}
            >
              {section.nameCN}
            </button>
          ))}
        </div>
      </Card>

      {/* 难度筛选 */}
      <Card hover={false} className="p-4">
        <div className="flex items-center gap-4">
          <span className="text-blue-200 text-sm">Difficulty:</span>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                onClick={() => setDifficultyFilter(difficultyFilter === level ? null : level)}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  difficultyFilter === level
                    ? 'bg-primary-500 text-blue-100'
                    : 'bg-slate-800/50/10 text-blue-200 hover:bg-slate-800/50/20'
                }`}
              >
                {'★'.repeat(level)}
              </button>
            ))}
            <button
              onClick={() => setDifficultyFilter(null)}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                difficultyFilter === null
                  ? 'bg-primary-500 text-blue-100'
                  : 'bg-slate-800/50/10 text-blue-200 hover:bg-slate-800/50/20'
              }`}
            >
              All
            </button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 主内容区：题目 */}
        <div className="lg:col-span-8">
          <Card hover={false} className="p-6">
            {/* Sticky Header */}
            <div className="sticky top-[136px] z-10 bg-slate-900/95 backdrop-blur-sm -m-6 p-6 mb-6 border-b border-blue-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary-400" />
                    <span className="text-blue-100 font-medium">
                      Question {currentExerciseIndex + 1} / {filteredExercises.length}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      currentExercise.difficulty <= 2
                        ? 'bg-green-500/20 text-green-400'
                        : currentExercise.difficulty <= 3
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {'★'.repeat(currentExercise.difficulty)}
                  </span>
                  <span className="text-blue-300 text-sm">{currentExercise.points} pts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={currentExerciseIndex === 0}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNext}
                    disabled={currentExerciseIndex === filteredExercises.length - 1}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Question Card */}
            <div className="mb-6">
              {/* Figure Display (if imagePaths exist) - 方案C：统一展示在题目上方 */}
              {currentExercise.imagePaths && currentExercise.imagePaths.length > 0 && (
                <div className="mb-6 rounded-xl border border-blue-500/30 bg-slate-800/40 p-4">
                  <div className="text-xs text-blue-300 mb-3 font-medium">Figure (not drawn to scale)</div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {currentExercise.imagePaths.map((imagePath, idx) => (
                      <img
                        key={`figure-${idx}`}
                        src={imagePath}
                        alt={`Figure ${idx + 1}`}
                        className="max-w-full max-w-md h-auto rounded-lg shadow-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="text-lg text-blue-100 leading-relaxed mb-6">
                {renderLatexContent(currentExercise.question)}
              </div>

              {/* Multiple Choice Options */}
              {currentExercise.type === 'multiple_choice' && currentExercise.options && (
                <div className="space-y-3">
                  {currentExercise.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrectOption = option === currentExercise.answer;
                    const showCorrect = checked && isCorrectOption;
                    const showWrong = checked && isSelected && !isCorrectOption;
                    const isImage = isImageOption(option);

                    return (
                      <button
                        key={index}
                        onClick={() => !checked && setSelectedAnswer(option)}
                        disabled={checked}
                        className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${
                          showCorrect
                            ? 'bg-green-500/20 border-2 border-green-500'
                            : showWrong
                            ? 'bg-red-500/20 border-2 border-red-500'
                            : isSelected
                            ? 'bg-primary-500/20 border-2 border-primary-500'
                            : 'bg-slate-800/50/5 border-2 border-transparent hover:bg-slate-800/50/10'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium flex-shrink-0 ${
                            showCorrect
                              ? 'bg-green-500 text-blue-100'
                              : showWrong
                              ? 'bg-red-500 text-blue-100'
                              : isSelected
                              ? 'bg-primary-500 text-blue-100'
                              : 'bg-slate-800/50/10 text-blue-200'
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </div>
                        {isImage ? (
                          <div className="flex-1 flex items-center justify-center">
                            <img
                              src={option}
                              alt={`Option ${String.fromCharCode(65 + index)}`}
                              className="max-w-full max-h-48 h-auto rounded-lg shadow-lg"
                            />
                          </div>
                        ) : (
                        <span
                          className={`flex-1 ${
                            showCorrect || isSelected ? 'text-blue-100' : 'text-blue-200'
                          }`}
                        >
                          {renderLatexContent(option)}
                        </span>
                        )}
                        {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />}
                        {showWrong && <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Calculation/Short Answer Input */}
              {(currentExercise.type === 'calculation' || currentExercise.type === 'explanation') && (
                <div className="mb-6">
                  <textarea
                    placeholder="Enter your answer and calculation process..."
                    value={selectedAnswer || ''}
                    onChange={(e) => !checked && setSelectedAnswer(e.target.value)}
                    disabled={checked}
                    className="w-full h-32 bg-slate-800/50/5 border border-white/20 rounded-xl p-4 text-blue-100 placeholder-slate-500 focus:outline-none focus:border-primary-500 resize-none"
                  />
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-blue-500/30">
              {!checked ? (
                <Button onClick={handleCheck} disabled={!selectedAnswer}>
                  Check Answer
                </Button>
              ) : (
                <div className="flex items-center gap-4">
                  {/* After Check Feedback - Only show Correct/Wrong */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      isCorrect
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5" />
                        <span className="font-medium">Incorrect</span>
                      </>
                    )}
                  </div>
                  {/* Toggle Explanation Button */}
                  <Button
                    variant="secondary"
                    onClick={() => setShowExplanation(!showExplanation)}
                  >
                    {showExplanation ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Hide Explanation
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Show Explanation
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>

            {/* Explanation Section - Collapsible */}
            <AnimatePresence>
              {checked && showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-blue-500/30"
                >
                  {/* Answer Figures (if answerImagePaths exist) - 答案/解析附图：统一展示在解析上方 */}
                  {currentExercise.answerImagePaths && currentExercise.answerImagePaths.length > 0 && (
                    <div className="mb-6 rounded-xl border border-blue-500/30 bg-slate-800/40 p-4">
                      <div className="text-xs text-blue-300 mb-3 font-medium">Answer Figures (not drawn to scale)</div>
                      <div className="flex flex-wrap gap-4 justify-center">
                        {currentExercise.answerImagePaths.map((imagePath, idx) => (
                          <img
                            key={`answer-figure-${idx}`}
                            src={imagePath}
                            alt={`Answer Figure ${idx + 1}`}
                            className="max-w-full max-w-md h-auto rounded-lg shadow-lg"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-accent-400 font-medium mb-2">Explanation</h4>
                      <div className="text-blue-200 text-sm leading-relaxed space-y-2">
                        {currentExercise.explanation ? (
                          renderLatexContent(currentExercise.explanation)
                        ) : (
                          <p className="text-blue-300 italic">No explanation available for this exercise.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>

        {/* 侧边栏：题目导航 Palette */}
        <div className="lg:col-span-4">
          <Card hover={false} className="p-4 sticky top-[136px]">
            <h3 className="text-lg font-semibold text-blue-100 mb-4">Question Palette</h3>
            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2">
              {filteredExercises.map((exercise, index) => {
                const isCurrent = index === currentExerciseIndex;
                const isAnswered = false; // TODO: Track answered state

                return (
                  <button
                    key={exercise.id}
                    onClick={() => handleExerciseClick(index)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      isCurrent
                        ? 'bg-primary-500 text-blue-100 ring-2 ring-primary-400'
                        : isAnswered
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-slate-800/50/10 text-blue-300 hover:bg-slate-800/50/20'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
