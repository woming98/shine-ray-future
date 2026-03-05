/**
 * Force and Motion Exercise 页面
 * 支持8个子板块筛选，新的UI：先显示对错，点击展开解析
 */

import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
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
import { PHYSICS_TOPICS } from '../constants/topics';
import { FORCE_MOTION_EXERCISES } from '../constants/forceMotion';
import { FORCE_MOTION_SECTIONS } from '../constants/forceMotionSections';
import { getPhysicsExerciseCatalogEntry } from '../constants/exerciseCatalog';
import { filterExistingImages, getPhysicsExerciseImageCandidates } from '../utils/exerciseImageMapper';
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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { 
    addWrongAnswer, 
    markExerciseAttempt, 
    getExerciseProgress, 
    setLaunched, 
    resetExerciseProgress,
    updateProgress,
    progress,
    stats,
    updateStats,
    recordDailyStudy,
    addStudyTime,
    sidebarOpen 
  } = useStore();

  const topicParam = searchParams.get('topic') || undefined;
  const targetExerciseId = searchParams.get('exerciseId') || undefined;
  const catalogEntry = exercisesOverride || sectionsOverride
    ? undefined
    : getPhysicsExerciseCatalogEntry(topicParam || topicIdOverride);

  const resolvedExercises = exercisesOverride || catalogEntry?.exercises || FORCE_MOTION_EXERCISES;
  const resolvedSections = sectionsOverride || catalogEntry?.sections || FORCE_MOTION_SECTIONS;
  const resolvedTopicId = topicIdOverride || catalogEntry?.topicId || 'force-motion';
  const resolvedChapterId = chapterIdOverride || catalogEntry?.chapterId || 'fm-ch1';
  const topicMeta = PHYSICS_TOPICS.find((t) => t.id === resolvedTopicId);

  const initialSelectedSection =
    sectionIdParam ||
    defaultSectionId ||
    catalogEntry?.defaultSectionId ||
    resolvedSections[0]?.id ||
    null;
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
  const [summaryDismissedMap, setSummaryDismissedMap] = useState<Record<string, boolean>>({});
  const [autoImagePaths, setAutoImagePaths] = useState<string[]>([]);
  const [handledDeepLinkExerciseId, setHandledDeepLinkExerciseId] = useState<string | null>(null);

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
  const allAttempted = attemptedCount === totalExercises && totalExercises > 0;
  const shouldLaunch = allAttempted && correctRate >= 95 && !exerciseProgress.hasLaunched;
  const completionThreshold = 90;
  const meetsCompletion = allAttempted && correctRate >= completionThreshold;

  const currentExercise = filteredExercises[currentExerciseIndex];
  const isCorrect = checked && selectedAnswer === currentExercise?.answer;
  const currentExerciseAnswered = currentExercise
    ? exerciseProgress.attemptedIds.includes(currentExercise.id)
    : false;
  const currentExerciseCorrect = currentExercise
    ? exerciseProgress.correctIds.includes(currentExercise.id)
    : false;
  const currentExerciseWrong = currentExercise
    ? exerciseProgress.wrongEverIds.includes(currentExercise.id) && !currentExerciseCorrect
    : false;
  const currentSavedAnswer = currentExercise
    ? exerciseProgress.answers?.[currentExercise.id] ?? null
    : null;

  // Reset deep-link guard when target changes
  useEffect(() => {
    if (!targetExerciseId) {
      setHandledDeepLinkExerciseId(null);
      return;
    }
    if (targetExerciseId !== handledDeepLinkExerciseId) {
      setHandledDeepLinkExerciseId(null);
    }
  }, [targetExerciseId, handledDeepLinkExerciseId]);

  // Support deep-link from wrong-answers page: /exercise?...&exerciseId=xxx
  // Only apply once per target so user can switch to other questions afterwards.
  useEffect(() => {
    if (!targetExerciseId) return;
    if (handledDeepLinkExerciseId === targetExerciseId) return;
    if (!targetExerciseId || filteredExercises.length === 0) return;
    const idx = filteredExercises.findIndex((exercise) => exercise.id === targetExerciseId);
    if (idx < 0) return;
    if (idx !== currentExerciseIndex) {
      setCurrentExerciseIndex(idx);
    }
    setSelectedAnswer(null);
    setChecked(true);
    setShowExplanation(true);
    setHandledDeepLinkExerciseId(targetExerciseId);
  }, [targetExerciseId, filteredExercises, currentExerciseIndex, handledDeepLinkExerciseId]);

  // Auto-detect question images by convention when imagePaths is missing
  useEffect(() => {
    let cancelled = false;

    const detectQuestionImages = async () => {
      if (!currentExercise) {
        setAutoImagePaths([]);
        return;
      }

      if (currentExercise.imagePaths && currentExercise.imagePaths.length > 0) {
        setAutoImagePaths([]);
        return;
      }

      if (!currentExercise.sectionId) {
        setAutoImagePaths([]);
        return;
      }

      const candidates = getPhysicsExerciseImageCandidates(
        currentExercise.sectionId,
        currentExercise.id
      );
      const existing = await filterExistingImages(candidates);
      if (!cancelled) {
        setAutoImagePaths(existing);
      }
    };

    void detectQuestionImages();
    return () => {
      cancelled = true;
    };
  }, [currentExercise?.id, currentExercise?.imagePaths?.length, currentExercise?.sectionId]);

  const questionImagePaths =
    currentExercise?.imagePaths && currentExercise.imagePaths.length > 0
      ? currentExercise.imagePaths
      : autoImagePaths;

  const studySecondsRef = useRef(0);
  const nightSecondsRef = useRef(0);
  const studyTimerRef = useRef<number | null>(null);
  const questionStartRef = useRef<number>(Date.now());

  const flushStudyTime = useCallback(() => {
    const minutes = Math.floor(studySecondsRef.current / 60);
    const nightMinutes = Math.floor(nightSecondsRef.current / 60);
    if (minutes <= 0 && nightMinutes <= 0) return;
    studySecondsRef.current -= minutes * 60;
    nightSecondsRef.current -= nightMinutes * 60;
    addStudyTime(minutes);
    recordDailyStudy({
      minutes,
      nightMinutes,
      exercisesCompleted: 0,
      topicsStudied: [resolvedTopicId],
    });
  }, [addStudyTime, recordDailyStudy, resolvedTopicId]);

  const handleCheck = () => {
    if (!selectedAnswer || checked || !currentExercise) return;
    
    setChecked(true);
    const isCorrect = selectedAnswer === currentExercise.answer;
    const timeSpentMs = Math.max(0, Date.now() - questionStartRef.current);
    
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
    
    // 记录作答结果（attempted, correct, wrongEver, answer）
    markExerciseAttempt(
      resolvedTopicId,
      sectionIdKey,
      currentExercise.id,
      isCorrect,
      selectedAnswer,
      timeSpentMs
    );

    const nextExercisesSolved = stats.exercisesSolved + 1;
    const nextCorrectStreak = isCorrect ? (stats.correctStreak || 0) + 1 : 0;
    const nextBestCorrectStreak = Math.max(stats.bestCorrectStreak || 0, nextCorrectStreak);
    const nextAverageScore = isCorrect
      ? Math.round((stats.averageScore * stats.exercisesSolved + 100) / nextExercisesSolved)
      : Math.round((stats.averageScore * stats.exercisesSolved) / nextExercisesSolved);

    updateStats({
      exercisesSolved: nextExercisesSolved,
      averageScore: nextAverageScore,
      correctStreak: nextCorrectStreak,
      bestCorrectStreak: nextBestCorrectStreak,
    });

    recordDailyStudy({
      minutes: 0,
      exercisesCompleted: 1,
      topicsStudied: [resolvedTopicId],
    });
  };

  // 恢复已作答记录（用于返回时显示已选答案与对错）
  useEffect(() => {
    if (!currentExercise) return;
    if (currentExerciseAnswered && currentSavedAnswer) {
      setSelectedAnswer(currentSavedAnswer);
      setChecked(true);
      setShowExplanation(false);
      return;
    }
    setSelectedAnswer(null);
    setChecked(false);
    setShowExplanation(false);
  }, [currentExercise?.id, currentExerciseAnswered, currentSavedAnswer]);

  useEffect(() => {
    questionStartRef.current = Date.now();
  }, [currentExercise?.id, sectionIdKey]);

  useEffect(() => {
    if (studyTimerRef.current) {
      window.clearInterval(studyTimerRef.current);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') {
        flushStudyTime();
      }
    };

    const isNightStudy = () => {
      const hour = new Date().getHours();
      return hour >= 23 || hour < 2;
    };

    studyTimerRef.current = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      studySecondsRef.current += 1;
      if (isNightStudy()) {
        nightSecondsRef.current += 1;
      }
      if (studySecondsRef.current >= 60) {
        flushStudyTime();
      }
      if (nightSecondsRef.current >= 60) {
        flushStudyTime();
      }
    }, 1000);

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (studyTimerRef.current) {
        window.clearInterval(studyTimerRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      flushStudyTime();
    };
  }, [flushStudyTime]);

  // 检测是否需要触发升空动画
  useEffect(() => {
    if (shouldLaunch && correctCount > 0) {
      setShowRocketLaunch(true);
      setLaunched(resolvedTopicId, sectionIdKey);
    }
  }, [shouldLaunch, correctCount, resolvedTopicId, sectionIdKey, setLaunched]);

  // 升空动画：自动消失（从 shouldLaunch effect 中拆出来，避免 shouldLaunch 变化时清理掉 timer 导致卡住）
  useEffect(() => {
    if (!showRocketLaunch) return;
    const timer = window.setTimeout(() => {
      setShowRocketLaunch(false);
      setShowLaunchModal(false);
    }, 3600);
    return () => window.clearTimeout(timer);
  }, [showRocketLaunch]);

  // 升空动画：支持按 Esc 跳过
  useEffect(() => {
    if (!showRocketLaunch) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowRocketLaunch(false);
        setShowLaunchModal(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showRocketLaunch]);

  // 检测是否做完全部题目，自动显示总结
  const summaryDismissed = summaryDismissedMap[sectionIdKey] ?? false;

  useEffect(() => {
    if (allAttempted && !showSummaryModal && !showLaunchModal && !summaryDismissed) {
      // 延迟一下，避免与升空动画冲突
      const timer = setTimeout(() => {
        setShowSummaryModal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [allAttempted, showSummaryModal, showLaunchModal, summaryDismissed]);

  // 切换章节或未完成时，允许下次自动弹出
  useEffect(() => {
    if (!allAttempted) {
      setSummaryDismissedMap((prev) => {
        if (!prev[sectionIdKey]) return prev;
        return { ...prev, [sectionIdKey]: false };
      });
    }
  }, [allAttempted, sectionIdKey]);

  const handleCloseSummary = () => {
    setShowSummaryModal(false);
    setSummaryDismissedMap((prev) => ({ ...prev, [sectionIdKey]: true }));
  };

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
  const normalizeDisplayText = (raw: string) => {
    if (!raw) return raw;
    let cleaned = raw
      .replace(/�\?/g, '-')
      .replace(/�/g, '-');

    const hasEnglishMarkers = /(Key point|Step\s*\d+|Conclusion|Verification|Answer)/i.test(cleaned);
    if (hasEnglishMarkers) {
      cleaned = cleaned.replace(/[\u3000-\u303F\u3400-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]+/g, ' ');
    }

    cleaned = cleaned
      .replace(/[ \t]{2,}/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    return cleaned;
  };

  const renderLatexContent = (content: string) => {
    const normalized = normalizeDisplayText(content);
    if (!normalized || normalized.trim() === '') {
      return [<span key="empty" className="text-blue-300 italic">No content available.</span>];
    }
    
    const parts: (string | JSX.Element)[] = [];
    
    // 先按段落分割（\n\n），这样可以在段落级别处理 Markdown
    const paragraphs = normalized.split(/\n\n+/);
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
      return [<span key="fallback" className="whitespace-pre-wrap">{normalized}</span>];
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
                  {allAttempted && correctRate >= 95 ? '准备升空！' : `${Math.round(correctRate)}%`}
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
            className="fixed inset-0 z-[100]"
          >
            {/* 跳过按钮 */}
            <button
              type="button"
              onClick={() => {
                setShowRocketLaunch(false);
                setShowLaunchModal(false);
              }}
              className="absolute top-6 right-6 z-[101] px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/70 hover:bg-slate-700/70 text-blue-100 border border-blue-500/30 backdrop-blur-sm"
            >
              跳过
            </button>

            {/* 背景遮罩 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-slate-900/80 to-slate-900/80"
              animate={{
                opacity: [1, 1, 1],
                x: [0, 0, 0, -6, 6, -4, 4, 0],
              }}
              transition={{
                duration: 3.2,
                times: [0, 0.55, 0.62, 0.70, 0.74, 0.78, 0.82, 1],
                ease: 'easeInOut',
              }}
            />
            
            {/* 火箭 */}
            <motion.div
              initial={{ y: '100vh', x: '-50%', rotate: 0 }}
              animate={{ y: '-120vh', rotate: -12 }}
              exit={{ y: '-120vh', opacity: 0 }}
              transition={{
                duration: 2.3,
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
                  <Rocket className="w-40 h-40 text-yellow-300 drop-shadow-[0_0_45px_rgba(250,204,21,0.9)]" />
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
                  className="absolute top-full left-1/2 -translate-x-1/2 w-24 h-44 bg-gradient-to-t from-red-500 via-orange-400 to-transparent rounded-full blur-md"
                />

                {/* 发动机火花 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.9, 0.2] }}
                  transition={{ duration: 0.15, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-[110%] left-1/2 -translate-x-1/2 w-32 h-24"
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-10 bg-yellow-200/80 rounded-full blur-sm" />
                  <div className="absolute left-[45%] top-3 w-1.5 h-8 bg-orange-200/80 rounded-full blur-sm" />
                  <div className="absolute left-[55%] top-5 w-1.5 h-8 bg-orange-200/80 rounded-full blur-sm" />
                </motion.div>
              </div>
            </motion.div>

            {/* 爆炸效果（在屏幕上方） */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 1.6] }}
              transition={{ delay: 2.15, duration: 0.8, ease: 'easeOut' }}
              className="absolute left-1/2 top-20 -translate-x-1/2"
            >
              {/* 核心闪光 */}
              <div className="w-32 h-32 rounded-full bg-yellow-200/70 blur-md" />
              <div className="absolute inset-0 w-32 h-32 rounded-full bg-orange-300/60 blur-lg" />
              <div className="absolute inset-0 w-32 h-32 rounded-full bg-white/40 blur-xl" />

              {/* 碎片粒子 */}
              {[
                { x: -140, y: -40, d: 0.02 },
                { x: -90, y: -110, d: 0.04 },
                { x: -30, y: -150, d: 0.01 },
                { x: 40, y: -150, d: 0.03 },
                { x: 100, y: -110, d: 0.05 },
                { x: 150, y: -40, d: 0.02 },
                { x: -160, y: 30, d: 0.03 },
                { x: -100, y: 90, d: 0.06 },
                { x: -20, y: 140, d: 0.04 },
                { x: 30, y: 140, d: 0.05 },
                { x: 110, y: 90, d: 0.07 },
                { x: 170, y: 30, d: 0.03 },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                  animate={{
                    x: p.x,
                    y: p.y,
                    opacity: [0, 1, 0],
                    scale: [0.4, 1, 0.6],
                  }}
                  transition={{ delay: 2.15 + p.d, duration: 0.9, ease: 'easeOut' }}
                  className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-yellow-200/90 shadow-[0_0_14px_rgba(250,204,21,0.9)]"
                />
              ))}
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
            onClick={handleCloseSummary}
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
                  onClick={handleCloseSummary}
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
                  onClick={handleCloseSummary}
                >
                  关闭
                </Button>
                <Button
                  variant="danger"
                  className="flex-1"
                  onClick={() => {
                    setShowResetConfirm(true);
                    handleCloseSummary();
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
              {(topicMeta?.name || 'Physics')} - Exercise
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
              {section.name}
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
            {!currentExercise ? (
              <div className="py-12 text-center">
                <FileQuestion className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <p className="text-blue-300">暂无练习题</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <Button variant="secondary" onClick={() => setDifficultyFilter(null)}>
                    清除难度筛选
                  </Button>
                </div>
              </div>
            ) : (
              <>
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
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                {currentExerciseCorrect && (
                  <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300">
                    已答对
                  </span>
                )}
                {currentExerciseWrong && (
                  <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-300">
                    曾答错
                  </span>
                )}
                {!currentExerciseCorrect && !currentExerciseWrong && currentExerciseAnswered && (
                  <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-200">
                    已作答
                  </span>
                )}
                {!currentExerciseAnswered && (
                  <span className="px-2 py-1 rounded-full bg-slate-700/60 text-blue-300">
                    未作答
                  </span>
                )}
              </div>
            </div>

            {/* Question Card */}
            <div className="mb-6">
              {/* Figure Display (if imagePaths exist) - 方案C：统一展示在题目上方 */}
              {questionImagePaths && questionImagePaths.length > 0 && (
                <div className="mb-6 rounded-xl border border-blue-500/30 bg-slate-800/40 p-4">
                  <div className="text-xs text-blue-300 mb-3 font-medium">Figure (not drawn to scale)</div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {questionImagePaths.map((imagePath, idx) => (
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
              </>
            )}
          </Card>
        </div>

        {/* 侧边栏：题目导航 Palette */}
        <div className="lg:col-span-4">
          <Card hover={false} className="p-4 sticky top-[136px]">
            <h3 className="text-lg font-semibold text-blue-100 mb-4">Question Palette</h3>
            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2">
              {filteredExercises.map((exercise, index) => {
                const isCurrent = index === currentExerciseIndex;
                const isAnswered = exerciseProgress.attemptedIds.includes(exercise.id);
                const isCorrectAnswer = exerciseProgress.correctIds.includes(exercise.id);
                const isWrongAnswer =
                  exerciseProgress.wrongEverIds.includes(exercise.id) && !isCorrectAnswer;

                return (
                  <button
                    key={exercise.id}
                    onClick={() => handleExerciseClick(index)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      isCurrent
                        ? 'ring-2 ring-primary-400'
                        : ''
                    } ${
                      isCorrectAnswer
                        ? 'bg-green-500/30 text-green-200'
                        : isWrongAnswer
                        ? 'bg-red-500/30 text-red-200'
                        : isAnswered
                        ? 'bg-blue-500/30 text-blue-200'
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
