import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Calculator,
  FlaskConical,
  FileQuestion,
  ChevronRight,
  ChevronDown,
  Play,
  Check,
  Lock,
  Lightbulb,
  ArrowLeft,
  Clock,
  Award,
} from 'lucide-react';
import { PHYSICS_TOPICS } from '../constants/topics';
import { FORCE_MOTION_CHAPTERS, FORCE_MOTION_FORMULAS } from '../constants/forceMotion';
import { ELECTRICITY_MAGNETISM_EXERCISES } from '../constants/electricityMagnetism';
import { ELECTRICITY_MAGNETISM_SECTIONS } from '../constants/electricityMagnetismSections';
import { useStore } from '../store/useStore';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { ProgressRing } from '../components/UI/ProgressRing';
import { Chapter, Formula } from '../types';
import ExercisePage from './ExercisePage';
import ForceMotionQuizPage from './ForceMotionQuizPage';

type TabType = 'theory' | 'simulation' | 'calculator' | 'exercise' | 'quiz';

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { getTopicProgress, progress } = useStore();
  
  const [activeTab, setActiveTab] = useState<TabType>('theory');
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [expandedFormula, setExpandedFormula] = useState<string | null>(null);

  // 获取当前主题信息
  const topic = PHYSICS_TOPICS.find((t) => t.id === topicId);
  
  // 目前只有 Force and Motion 有完整内容
  const chapters = topicId === 'force-motion' ? FORCE_MOTION_CHAPTERS : [];
  const formulas = topicId === 'force-motion' ? FORCE_MOTION_FORMULAS : [];

  useEffect(() => {
    if (chapters.length > 0 && !activeChapter) {
      setActiveChapter(chapters[0].id);
    }
  }, [chapters, activeChapter]);

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-blue-300 text-lg mb-4">主题不存在</p>
        <Button onClick={() => navigate('/')}>返回首页</Button>
      </div>
    );
  }

  const currentChapter = chapters.find((c) => c.id === activeChapter);
  const topicProgress = getTopicProgress(topicId || '');

  // 根据主题决定显示的标签页
  const tabs =
    topicId === 'force-motion'
      ? [
          { id: 'theory', label: '理论学习', icon: BookOpen },
          { id: 'simulation', label: '互动模拟', icon: FlaskConical },
          { id: 'calculator', label: '公式计算', icon: Calculator },
          { id: 'exercise', label: 'Exercise', icon: FileQuestion },
          { id: 'quiz', label: 'Quiz', icon: Award },
        ]
      : topicId === 'electricity-magnetism'
        ? [
            { id: 'theory', label: '理论学习', icon: BookOpen },
            { id: 'simulation', label: '互动模拟', icon: FlaskConical },
            { id: 'calculator', label: '公式计算', icon: Calculator },
            { id: 'exercise', label: 'Exercise', icon: FileQuestion },
          ]
        : [
            { id: 'theory', label: '理论学习', icon: BookOpen },
            { id: 'simulation', label: '互动模拟', icon: FlaskConical },
            { id: 'calculator', label: '公式计算', icon: Calculator },
          ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* 页面头部 */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4 mr-1" />
          返回
        </Button>
      </div>

      {/* 主题头部信息 */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative overflow-hidden rounded-3xl ${topic.gradient} p-8`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-slate-800/50/10 rounded-full blur-3xl" />
        
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-6xl">{topic.icon}</span>
            <div>
              <h1 className="text-3xl font-display font-bold text-blue-100 mb-2">
                {topic.nameCN}
              </h1>
              <p className="text-blue-100/80 text-lg">{topic.name}</p>
              <p className="text-blue-100/60 text-sm mt-2 max-w-xl">{topic.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <ProgressRing progress={topicProgress} size={100} strokeWidth={8} color="#fff">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-100">{topicProgress}%</p>
                <p className="text-xs text-blue-100/60">完成</p>
              </div>
            </ProgressRing>
            
            <div className="text-blue-100/80 space-y-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{chapters.length} 个章节</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                <span>{formulas.length} 个公式</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>约 4 小时</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 标签页导航 */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-primary-500 text-blue-100 shadow-lg shadow-primary-500/30'
                : 'bg-slate-800/50/5 text-blue-200 hover:bg-slate-800/50/10 hover:text-blue-100'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* 内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 章节列表侧边栏 */}
        <div className="lg:col-span-1">
          <Card hover={false} className="p-4 sticky top-24">
            <h3 className="text-lg font-bold text-blue-100 mb-4">章节目录</h3>
            <div className="space-y-2">
              {chapters.length > 0 ? (
                chapters.map((chapter, index) => {
                  const chapterProgress = progress.find(
                    (p) => p.topicId === topicId && p.chapterId === chapter.id
                  );
                  const isCompleted = chapterProgress?.completed;
                  const isActive = activeChapter === chapter.id;

                  return (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapter(chapter.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                        isActive
                          ? 'bg-primary-500/20 border border-primary-500/50'
                          : 'hover:bg-slate-800/50/5'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                          isCompleted
                            ? 'bg-green-500/20 text-green-400'
                            : isActive
                            ? 'bg-primary-500/20 text-primary-400'
                            : 'bg-slate-800/50/10 text-blue-300'
                        }`}
                      >
                        {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`font-medium truncate ${
                            isActive ? 'text-primary-400' : 'text-blue-100'
                          }`}
                        >
                          {chapter.titleCN}
                        </p>
                        <p className="text-xs text-blue-300 truncate">{chapter.title}</p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-primary-400 rotate-90' : 'text-blue-300'
                        }`}
                      />
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-8">
                  <Lock className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <p className="text-blue-300 text-sm">内容开发中...</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* 主内容区 */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {activeTab === 'theory' && (
              <TheoryTab chapter={currentChapter} topicGradient={topic.gradient} />
            )}
            {activeTab === 'simulation' && (
              <SimulationTab chapter={currentChapter} topicGradient={topic.gradient} />
            )}
            {activeTab === 'calculator' && (
              <CalculatorTab 
                formulas={formulas} 
                expandedFormula={expandedFormula}
                setExpandedFormula={setExpandedFormula}
              />
            )}
            {activeTab === 'exercise' &&
              (topicId === 'force-motion' || topicId === 'electricity-magnetism') && (
                <ExerciseTab topicId={topicId} />
              )}
            {activeTab === 'quiz' && topicId === 'force-motion' && (
              <QuizTab />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// 理论学习标签页
function TheoryTab({ chapter, topicGradient }: { chapter?: Chapter; topicGradient: string }) {
  if (!chapter) {
    return (
      <Card hover={false} className="p-8 text-center">
        <BookOpen className="w-12 h-12 text-blue-300 mx-auto mb-4" />
        <p className="text-blue-300">请选择一个章节开始学习</p>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <Card hover={false} className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-100">{chapter.titleCN}</h2>
            <p className="text-blue-300">{chapter.title}</p>
          </div>
          <Button icon={<Play className="w-4 h-4" />}>开始学习</Button>
        </div>

        {/* 概念列表 */}
        <div className="space-y-4">
          {chapter.concepts.map((concept, index) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-5 bg-slate-800/50/5 rounded-xl border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl ${topicGradient} flex items-center justify-center flex-shrink-0`}>
                  <Lightbulb className="w-5 h-5 text-blue-100" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-100 mb-2">{concept.title}</h3>
                  <p className="text-blue-200 leading-relaxed mb-4">{concept.content}</p>
                  
                  {/* 关键点 */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-primary-400 mb-2">关键要点</h4>
                    <ul className="space-y-1">
                      {concept.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-blue-300">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 示例 */}
                  <div>
                    <h4 className="text-sm font-medium text-accent-400 mb-2">生活示例</h4>
                    <div className="flex flex-wrap gap-2">
                      {concept.examples.map((example, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent-500/10 text-accent-300 text-sm rounded-full"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* 本章公式 */}
      {chapter.formulas.length > 0 && (
        <Card hover={false} className="p-6">
          <h3 className="text-lg font-bold text-blue-100 mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary-400" />
            本章公式
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {chapter.formulas.map((formula) => (
              <div
                key={formula.id}
                className="p-4 bg-gradient-to-r from-primary-500/10 to-transparent rounded-xl border border-primary-500/20"
              >
                <p className="text-blue-100 font-medium mb-1">{formula.nameCN}</p>
                <p className="font-mono text-xl text-primary-300">{formula.expression}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </motion.div>
  );
}

// 互动模拟标签页
function SimulationTab({ chapter, topicGradient }: { chapter?: Chapter; topicGradient: string }) {
  const [params, setParams] = useState<Record<string, number>>({});
  const [activeSimIndex, setActiveSimIndex] = useState(0);

  if (!chapter || chapter.simulations.length === 0) {
    return (
      <Card hover={false} className="p-8 text-center">
        <FlaskConical className="w-12 h-12 text-blue-300 mx-auto mb-4" />
        <p className="text-blue-300">本章节暂无互动模拟</p>
        <p className="text-blue-300 text-sm mt-2">更多模拟内容正在开发中...</p>
      </Card>
    );
  }

  const simulation = chapter.simulations[activeSimIndex];

  // 初始化参数
  useEffect(() => {
    const initialParams: Record<string, number> = {};
    simulation.parameters.forEach((p) => {
      initialParams[p.symbol] = p.default;
    });
    setParams(initialParams);
  }, [simulation]);

  // 自由落体计时器计算（新版：总时间 vs 分段时间）
  const calculateFreeFallTimer = () => {
    const g = params['g'] || 8;
    const t1 = params['t₁'] || 1;
    const dt = params['Δt'] || 4;
    const totalTime = t1 + dt;
    
    // 第一段时间后的位移和速度
    const s1 = 0.5 * g * t1 * t1;
    const v1 = g * t1;
    
    // 总时间后的位移和速度
    const sTotal = 0.5 * g * totalTime * totalTime;
    const vTotal = g * totalTime;
    
    // 分段位移（后Δt秒的位移）
    const segmentDisplacement = sTotal - s1;
    
    return {
      g: g.toFixed(1),
      t1: t1.toFixed(1),
      dt: dt.toFixed(1),
      totalTime: totalTime.toFixed(1),
      s1: s1.toFixed(1),
      v1: v1.toFixed(1),
      sTotal: sTotal.toFixed(1),
      vTotal: vTotal.toFixed(1),
      segmentDisplacement: segmentDisplacement.toFixed(1),
    };
  };

  // 等时位移计算
  const calculateEqualTimeDisplacement = () => {
    const g = params['g'] || 10;
    const n = params['n'] || 5;
    const displacements: number[] = [];
    
    for (let i = 1; i <= n; i++) {
      const sCurrent = 0.5 * g * i * i;
      const sPrevious = 0.5 * g * (i - 1) * (i - 1);
      displacements.push(sCurrent - sPrevious);
    }
    
    return { g, n, displacements };
  };

  // 图像绘制器计算
  const calculateGraphData = () => {
    const g = params['g'] || 10;
    const t = params['t'] || 5;
    const points = [];
    
    for (let i = 0; i <= t * 10; i++) {
      const time = i / 10;
      points.push({
        t: time,
        s: 0.5 * g * time * time,
        v: g * time,
      });
    }
    
    return { g, t, points, finalS: 0.5 * g * t * t, finalV: g * t };
  };

  const results = simulation.id === 'fms-1' 
    ? calculateFreeFallTimer() 
    : simulation.id === 'fms-2'
    ? calculateEqualTimeDisplacement()
    : calculateGraphData();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* 模拟器选择 */}
      {chapter.simulations.length > 1 && (
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {chapter.simulations.map((sim, index) => (
            <button
              key={sim.id}
              onClick={() => setActiveSimIndex(index)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeSimIndex === index
                  ? 'bg-primary-500 text-blue-100'
                  : 'bg-slate-800/50/10 text-blue-200 hover:bg-slate-800/50/20'
              }`}
            >
              {sim.title}
            </button>
          ))}
        </div>
      )}

      <Card hover={false} className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 rounded-xl ${topicGradient} flex items-center justify-center`}>
            <FlaskConical className="w-6 h-6 text-blue-100" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-100">{simulation.title}</h2>
            <p className="text-blue-300 text-sm">{simulation.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 参数控制 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-100">参数设置</h3>
            {simulation.parameters.map((param) => (
              <div key={param.symbol} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-blue-200">
                    {param.name} ({param.symbol})
                  </label>
                  <span className="text-primary-400 font-mono">
                    {params[param.symbol] || param.default} {param.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={param.min}
                  max={param.max}
                  step={param.step}
                  value={params[param.symbol] || param.default}
                  onChange={(e) =>
                    setParams({ ...params, [param.symbol]: parseFloat(e.target.value) })
                  }
                  className="w-full h-2 bg-slate-800/50/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500"
                />
                <div className="flex justify-between text-xs text-blue-300">
                  <span>{param.min}</span>
                  <span>{param.max}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 模拟可视化 */}
          <div className="bg-blue-500/10 rounded-xl p-6 min-h-[300px] flex flex-col items-center justify-center">
            {simulation.id === 'fms-1' ? (
              // 自由落体计时器动画
              <div className="relative w-full h-64">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-slate-800/50/20 rounded" />
                {/* 起点标记 */}
                <div className="absolute top-2 left-1/2 translate-x-4 text-xs text-blue-300">起点 0m</div>
                {/* t₁时刻位置标记 */}
                <div 
                  className="absolute left-1/2 translate-x-4 text-xs text-yellow-400"
                  style={{ top: `${Math.min(20 + (parseFloat((results as ReturnType<typeof calculateFreeFallTimer>).s1) / parseFloat((results as ReturnType<typeof calculateFreeFallTimer>).sTotal)) * 180, 200)}px` }}
                >
                  t₁={((results as ReturnType<typeof calculateFreeFallTimer>).t1)}s → {(results as ReturnType<typeof calculateFreeFallTimer>).s1}m
                </div>
                {/* 总时间位置标记 */}
                <div className="absolute bottom-8 left-1/2 translate-x-4 text-xs text-green-400">
                  t={((results as ReturnType<typeof calculateFreeFallTimer>).totalTime)}s → {(results as ReturnType<typeof calculateFreeFallTimer>).sTotal}m
                </div>
                <motion.div
                  animate={{
                    y: [0, 200],
                  }}
                  transition={{
                    duration: parseFloat((results as ReturnType<typeof calculateFreeFallTimer>).totalTime) / 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeIn',
                  }}
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-lg shadow-primary-500/50"
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-slate-600 rounded" />
              </div>
            ) : simulation.id === 'fms-2' ? (
              // 等时位移柱状图
              <div className="w-full h-64 flex items-end justify-center gap-2">
                {(results as ReturnType<typeof calculateEqualTimeDisplacement>).displacements.map((d, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-xs text-blue-300 mb-1">{d.toFixed(1)}m</span>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.min(d * 3, 180)}px` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="w-10 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t"
                    />
                    <span className="text-xs text-blue-100 mt-1">第{i + 1}秒</span>
                  </div>
                ))}
              </div>
            ) : (
              // s-t 图像
              <div className="w-full h-64 relative">
                <div className="absolute bottom-8 left-8 right-4 top-4 border-l-2 border-b-2 border-white/30">
                  {/* Y轴标签 */}
                  <span className="absolute -left-8 top-0 text-xs text-blue-300">s(m)</span>
                  {/* X轴标签 */}
                  <span className="absolute -bottom-6 right-0 text-xs text-blue-300">t(s)</span>
                  {/* 抛物线 */}
                  <svg className="absolute inset-0 overflow-visible">
                    <path
                      d={`M 0 ${200} Q ${100} ${100} ${200} 0`}
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-blue-300">
                  s = ½gt² (抛物线)
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 计算结果 */}
        <div className="mt-6 p-4 bg-primary-500/10 rounded-xl border border-primary-500/20">
          <h4 className="text-primary-400 font-medium mb-3">计算结果</h4>
          {simulation.id === 'fms-1' ? (
            <div className="space-y-4">
              {/* 第一段结果 */}
              <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                <p className="text-yellow-400 text-sm font-medium mb-2">📍 第一段时间 t₁ = {(results as ReturnType<typeof calculateFreeFallTimer>).t1} s 后：</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-blue-300 text-xs">位移 s₁</p>
                    <p className="text-xl font-bold text-blue-100">{(results as ReturnType<typeof calculateFreeFallTimer>).s1} m</p>
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs">速度 v₁</p>
                    <p className="text-xl font-bold text-blue-100">{(results as ReturnType<typeof calculateFreeFallTimer>).v1} m/s</p>
                  </div>
                </div>
              </div>
              {/* 总时间结果 */}
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-green-400 text-sm font-medium mb-2">📍 总时间 t = {(results as ReturnType<typeof calculateFreeFallTimer>).t1} + {(results as ReturnType<typeof calculateFreeFallTimer>).dt} = {(results as ReturnType<typeof calculateFreeFallTimer>).totalTime} s 后：</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-blue-300 text-xs">总位移 s</p>
                    <p className="text-xl font-bold text-blue-100">{(results as ReturnType<typeof calculateFreeFallTimer>).sTotal} m</p>
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs">末速度 v</p>
                    <p className="text-xl font-bold text-blue-100">{(results as ReturnType<typeof calculateFreeFallTimer>).vTotal} m/s</p>
                  </div>
                </div>
              </div>
              {/* 分段位移（重点！）*/}
              <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                <p className="text-red-400 text-sm font-medium mb-2">⚠️ "后{(results as ReturnType<typeof calculateFreeFallTimer>).dt}秒"的位移（易错点！）：</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-blue-100">Δs = {(results as ReturnType<typeof calculateFreeFallTimer>).sTotal} - {(results as ReturnType<typeof calculateFreeFallTimer>).s1} = {(results as ReturnType<typeof calculateFreeFallTimer>).segmentDisplacement} m</p>
                </div>
                <p className="text-blue-300 text-xs mt-2">注意：不是直接用 s = ½g({(results as ReturnType<typeof calculateFreeFallTimer>).dt})² = {(0.5 * parseFloat((results as ReturnType<typeof calculateFreeFallTimer>).g) * parseFloat((results as ReturnType<typeof calculateFreeFallTimer>).dt) * parseFloat((results as ReturnType<typeof calculateFreeFallTimer>).dt)).toFixed(1)} m！</p>
              </div>
            </div>
          ) : simulation.id === 'fms-2' ? (
            <div className="space-y-3">
              <p className="text-blue-200">等时位移比例：<span className="text-primary-400 font-mono">1 : 3 : 5 : 7 : ...</span>（奇数递增）</p>
              <div className="flex flex-wrap gap-2">
                {(results as ReturnType<typeof calculateEqualTimeDisplacement>).displacements.map((d, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800/50/10 rounded-full text-sm">
                    第{i + 1}秒: <span className="text-primary-400 font-medium">{d.toFixed(1)}m</span>
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-blue-300 text-sm">最终位移 s</p>
                <p className="text-2xl font-bold text-blue-100">{(results as ReturnType<typeof calculateGraphData>).finalS.toFixed(1)} m</p>
              </div>
              <div>
                <p className="text-blue-300 text-sm">最终速度 v</p>
                <p className="text-2xl font-bold text-blue-100">{(results as ReturnType<typeof calculateGraphData>).finalV.toFixed(1)} m/s</p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* 其他模拟 */}
      {chapter.simulations.length > 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {chapter.simulations.slice(1).map((sim) => (
            <Card key={sim.id} className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${topicGradient} flex items-center justify-center`}>
                  <FlaskConical className="w-5 h-5 text-blue-100" />
                </div>
                <div className="flex-1">
                  <h4 className="text-blue-100 font-medium">{sim.title}</h4>
                  <p className="text-blue-300 text-sm truncate">{sim.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-blue-300" />
              </div>
            </Card>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// 公式计算器标签页
function CalculatorTab({ 
  formulas, 
  expandedFormula,
  setExpandedFormula 
}: { 
  formulas: Formula[];
  expandedFormula: string | null;
  setExpandedFormula: (id: string | null) => void;
}) {
  const [calcValues, setCalcValues] = useState<Record<string, number | undefined>>({});
  const [calcResult, setCalcResult] = useState<string>('');

  const calculateFormula = (formula: Formula) => {
    try {
      let producedResult = false;
      const setText = (text: string) => {
        producedResult = true;
        setCalcResult(text);
      };

      const fmt = (n: number) => {
        if (!Number.isFinite(n)) return 'NaN';
        const abs = Math.abs(n);
        if (abs !== 0 && (abs < 0.01 || abs >= 10000)) return n.toExponential(3);
        return Number(n.toFixed(3)).toString();
      };

      const get = (symbol: string) => calcValues[symbol];
      const unitOf = (symbol: string) => formula.variables.find((v) => v.symbol === symbol)?.unit || '';

      // 允许用户“留空一个未知量”：
      const missingSymbols = formula.variables
        .map((v) => v.symbol)
        .filter((symbol) => get(symbol) === undefined);

      if (missingSymbols.length !== 1) {
        setText('请留空 1 个未知量，其余变量填入数值后再计算');
        return;
      }

      const unknown = missingSymbols[0];

      const setResult = (symbol: string, value: number) => {
        setText(`${symbol} = ${fmt(value)} ${unitOf(symbol)}`.trim());
      };

      const setResultPlusMinus = (symbol: string, magnitude: number) => {
        const unit = unitOf(symbol);
        if (magnitude === 0) {
          setText(`${symbol} = 0 ${unit}`.trim());
          return;
        }
        setText(`${symbol} = ±${fmt(magnitude)} ${unit}（按方向取正/负）`.trim());
      };

      const requireNonZero = (value: number | undefined, name: string) => {
        if (value === undefined || value === 0) throw new Error(`${name} cannot be 0`);
      };

      switch (formula.id) {
        case 'fm-1': {
          // s = 1/2 a t^2
          const s = get('s');
          const a = get('a');
          const t = get('t');

          if (unknown === 's') {
            if (a === undefined || t === undefined) break;
            setResult('s', 0.5 * a * t * t);
            break;
          }
          if (unknown === 'a') {
            if (s === undefined || t === undefined) break;
            requireNonZero(t, 't');
            setResult('a', (2 * s) / (t * t));
            break;
          }
          if (unknown === 't') {
            if (s === undefined || a === undefined) break;
            requireNonZero(a, 'a');
            const ratio = (2 * s) / a;
            if (ratio < 0) throw new Error('negative under sqrt');
            setResult('t', Math.sqrt(ratio));
            break;
          }
          break;
        }
        case 'fm-2': {
          // s = ut + 1/2 a t^2
          const s = get('s');
          const u = get('u');
          const a = get('a');
          const t = get('t');

          if (unknown === 's') {
            if (u === undefined || a === undefined || t === undefined) break;
            setResult('s', u * t + 0.5 * a * t * t);
            break;
          }
          if (unknown === 'u') {
            if (s === undefined || a === undefined || t === undefined) break;
            requireNonZero(t, 't');
            setResult('u', (s - 0.5 * a * t * t) / t);
            break;
          }
          if (unknown === 'a') {
            if (s === undefined || u === undefined || t === undefined) break;
            requireNonZero(t, 't');
            setResult('a', (2 * (s - u * t)) / (t * t));
            break;
          }
          if (unknown === 't') {
            if (s === undefined || u === undefined || a === undefined) break;
            if (a === 0) {
              requireNonZero(u, 'u');
              setResult('t', s / u);
              break;
            }
            const disc = u * u + 2 * a * s;
            if (disc < 0) throw new Error('negative discriminant');
            const sqrtDisc = Math.sqrt(disc);
            const t1 = (-u + sqrtDisc) / a;
            const t2 = (-u - sqrtDisc) / a;
            const roots = [t1, t2].filter((x) => Number.isFinite(x) && x >= 0).sort((x, y) => x - y);
            if (roots.length === 0) throw new Error('no positive time root');
            if (roots.length === 1 || Math.abs(roots[0] - roots[1]) < 1e-9) {
              setResult('t', roots[0]);
              break;
            }
            setText(`t = ${fmt(roots[0])} s 或 ${fmt(roots[1])} s（按题意选取）`);
            break;
          }
          break;
        }
        case 'fm-3': {
          // v = u + at
          const v = get('v');
          const u = get('u');
          const a = get('a');
          const t = get('t');

          if (unknown === 'v') {
            if (u === undefined || a === undefined || t === undefined) break;
            setResult('v', u + a * t);
            break;
          }
          if (unknown === 'u') {
            if (v === undefined || a === undefined || t === undefined) break;
            setResult('u', v - a * t);
            break;
          }
          if (unknown === 'a') {
            if (v === undefined || u === undefined || t === undefined) break;
            requireNonZero(t, 't');
            setResult('a', (v - u) / t);
            break;
          }
          if (unknown === 't') {
            if (v === undefined || u === undefined || a === undefined) break;
            requireNonZero(a, 'a');
            setResult('t', (v - u) / a);
            break;
          }
          break;
        }
        case 'fm-4': {
          // v^2 = u^2 + 2as
          const v = get('v');
          const u = get('u');
          const a = get('a');
          const s = get('s');

          if (unknown === 'v') {
            if (u === undefined || a === undefined || s === undefined) break;
            const inside = u * u + 2 * a * s;
            if (inside < 0) throw new Error('negative under sqrt');
            setResultPlusMinus('v', Math.sqrt(inside));
            break;
          }
          if (unknown === 'u') {
            if (v === undefined || a === undefined || s === undefined) break;
            const inside = v * v - 2 * a * s;
            if (inside < 0) throw new Error('negative under sqrt');
            setResultPlusMinus('u', Math.sqrt(inside));
            break;
          }
          if (unknown === 'a') {
            if (v === undefined || u === undefined || s === undefined) break;
            requireNonZero(s, 's');
            setResult('a', (v * v - u * u) / (2 * s));
            break;
          }
          if (unknown === 's') {
            if (v === undefined || u === undefined || a === undefined) break;
            requireNonZero(a, 'a');
            setResult('s', (v * v - u * u) / (2 * a));
            break;
          }
          break;
        }
        case 'fm-5': {
          // Δs = s(t2) - s(t1)
          const ds = get('Δs');
          const s2 = get('s(t₂)');
          const s1 = get('s(t₁)');

          if (unknown === 'Δs') {
            if (s2 === undefined || s1 === undefined) break;
            setResult('Δs', s2 - s1);
            break;
          }
          if (unknown === 's(t₂)') {
            if (ds === undefined || s1 === undefined) break;
            setResult('s(t₂)', ds + s1);
            break;
          }
          if (unknown === 's(t₁)') {
            if (ds === undefined || s2 === undefined) break;
            setResult('s(t₁)', s2 - ds);
            break;
          }
          break;
        }
        case 'fm-6': {
          // u = (s - 1/2 a t^2) / t  (equivalent to s = ut + 1/2 a t^2)
          const u = get('u');
          const s = get('s');
          const a = get('a');
          const t = get('t');

          if (unknown === 'u') {
            if (s === undefined || a === undefined || t === undefined) break;
            requireNonZero(t, 't');
            setResult('u', (s - 0.5 * a * t * t) / t);
            break;
          }
          if (unknown === 's') {
            if (u === undefined || a === undefined || t === undefined) break;
            setResult('s', u * t + 0.5 * a * t * t);
            break;
          }
          if (unknown === 'a') {
            if (s === undefined || u === undefined || t === undefined) break;
            requireNonZero(t, 't');
            setResult('a', (2 * (s - u * t)) / (t * t));
            break;
          }
          if (unknown === 't') {
            if (s === undefined || u === undefined || a === undefined) break;
            if (a === 0) {
              requireNonZero(u, 'u');
              setResult('t', s / u);
              break;
            }
            const disc = u * u + 2 * a * s;
            if (disc < 0) throw new Error('negative discriminant');
            const sqrtDisc = Math.sqrt(disc);
            const t1 = (-u + sqrtDisc) / a;
            const t2 = (-u - sqrtDisc) / a;
            const roots = [t1, t2].filter((x) => Number.isFinite(x) && x >= 0).sort((x, y) => x - y);
            if (roots.length === 0) throw new Error('no positive time root');
            if (roots.length === 1 || Math.abs(roots[0] - roots[1]) < 1e-9) {
              setResult('t', roots[0]);
              break;
            }
            setText(`t = ${fmt(roots[0])} s 或 ${fmt(roots[1])} s（按题意选取）`);
            break;
          }
          break;
        }
        case 'fm-7': {
          // t = (v - u) / a  (same as v = u + at)
          const t = get('t');
          const v = get('v');
          const u = get('u');
          const a = get('a');

          if (unknown === 't') {
            if (v === undefined || u === undefined || a === undefined) break;
            requireNonZero(a, 'a');
            setResult('t', (v - u) / a);
            break;
          }
          if (unknown === 'v') {
            if (t === undefined || u === undefined || a === undefined) break;
            setResult('v', u + a * t);
            break;
          }
          if (unknown === 'u') {
            if (t === undefined || v === undefined || a === undefined) break;
            setResult('u', v - a * t);
            break;
          }
          if (unknown === 'a') {
            if (t === undefined || v === undefined || u === undefined) break;
            requireNonZero(t, 't');
            setResult('a', (v - u) / t);
            break;
          }
          break;
        }
        case 'fm-8': {
          // v_avg = s / t
          const vAvg = get('v_avg');
          const s = get('s');
          const t = get('t');

          if (unknown === 'v_avg') {
            if (s === undefined || t === undefined) break;
            requireNonZero(t, 't');
            setResult('v_avg', s / t);
            break;
          }
          if (unknown === 's') {
            if (vAvg === undefined || t === undefined) break;
            setResult('s', vAvg * t);
            break;
          }
          if (unknown === 't') {
            if (vAvg === undefined || s === undefined) break;
            requireNonZero(vAvg, 'v_avg');
            setResult('t', s / vAvg);
            break;
          }
          break;
        }
        case 'fm-9': {
          // a = (v2 - v1) / (t2 - t1)
          const a = get('a');
          const v2 = get('v2');
          const v1 = get('v1');
          const t2 = get('t2');
          const t1 = get('t1');

          if (unknown === 'a') {
            if (v2 === undefined || v1 === undefined || t2 === undefined || t1 === undefined) break;
            const dt = t2 - t1;
            if (dt === 0) throw new Error('t2 - t1 cannot be 0');
            setResult('a', (v2 - v1) / dt);
            break;
          }
          if (unknown === 'v2') {
            if (a === undefined || v1 === undefined || t2 === undefined || t1 === undefined) break;
            setResult('v2', v1 + a * (t2 - t1));
            break;
          }
          if (unknown === 'v1') {
            if (a === undefined || v2 === undefined || t2 === undefined || t1 === undefined) break;
            setResult('v1', v2 - a * (t2 - t1));
            break;
          }
          if (unknown === 't2') {
            if (a === undefined || v2 === undefined || v1 === undefined || t1 === undefined) break;
            requireNonZero(a, 'a');
            setResult('t2', (v2 - v1) / a + t1);
            break;
          }
          if (unknown === 't1') {
            if (a === undefined || v2 === undefined || v1 === undefined || t2 === undefined) break;
            requireNonZero(a, 'a');
            setResult('t1', t2 - (v2 - v1) / a);
            break;
          }
          break;
        }
        case 'fm-10': {
          // Δt = 1 / f
          const dt = get('Δt');
          const f = get('f');

          if (unknown === 'Δt') {
            if (f === undefined) break;
            requireNonZero(f, 'f');
            setResult('Δt', 1 / f);
            break;
          }
          if (unknown === 'f') {
            if (dt === undefined) break;
            requireNonZero(dt, 'Δt');
            setResult('f', 1 / dt);
            break;
          }
          break;
        }
        case 'fm-11': {
          // d_n = u + 1/2 a (2n - 1)
          const dn = get('d_n');
          const u = get('u');
          const a = get('a');
          const n = get('n');

          if (unknown === 'd_n') {
            if (u === undefined || a === undefined || n === undefined) break;
            setResult('d_n', u + 0.5 * a * (2 * n - 1));
            break;
          }
          if (unknown === 'u') {
            if (dn === undefined || a === undefined || n === undefined) break;
            setResult('u', dn - 0.5 * a * (2 * n - 1));
            break;
          }
          if (unknown === 'a') {
            if (dn === undefined || u === undefined || n === undefined) break;
            const denom = 2 * n - 1;
            if (denom === 0) throw new Error('2n - 1 cannot be 0');
            setResult('a', (2 * (dn - u)) / denom);
            break;
          }
          if (unknown === 'n') {
            if (dn === undefined || u === undefined || a === undefined) break;
            requireNonZero(a, 'a');
            setResult('n', ((dn - u) / (0.5 * a) + 1) / 2);
            break;
          }
          break;
        }
        case 'fm-12': {
          // v_ms = (5/18) v_kmh
          const vMs = get('v_ms');
          const vKmh = get('v_kmh');

          if (unknown === 'v_ms') {
            if (vKmh === undefined) break;
            setResult('v_ms', (5 / 18) * vKmh);
            break;
          }
          if (unknown === 'v_kmh') {
            if (vMs === undefined) break;
            setResult('v_kmh', (18 / 5) * vMs);
            break;
          }
          break;
        }
        case 'fm-13': {
          // s = 1/2 (v1 + v2) Δt  (area under v-t for a straight segment)
          const s = get('s');
          const v1 = get('v1');
          const v2 = get('v2');
          const dt = get('Δt');

          if (unknown === 's') {
            if (v1 === undefined || v2 === undefined || dt === undefined) break;
            setResult('s', 0.5 * (v1 + v2) * dt);
            break;
          }
          if (unknown === 'v1') {
            if (s === undefined || v2 === undefined || dt === undefined) break;
            requireNonZero(dt, 'Δt');
            setResult('v1', (2 * s) / dt - v2);
            break;
          }
          if (unknown === 'v2') {
            if (s === undefined || v1 === undefined || dt === undefined) break;
            requireNonZero(dt, 'Δt');
            setResult('v2', (2 * s) / dt - v1);
            break;
          }
          if (unknown === 'Δt') {
            if (s === undefined || v1 === undefined || v2 === undefined) break;
            requireNonZero(v1 + v2, 'v1+v2');
            setResult('Δt', (2 * s) / (v1 + v2));
            break;
          }
          break;
        }
        case 'fm-14': {
          // s_total = v t_r + v^2 / (2 a_d)
          const sTotal = get('s_total');
          const v = get('v');
          const tr = get('t_r');
          const ad = get('a_d');

          if (unknown === 's_total') {
            if (v === undefined || tr === undefined || ad === undefined) break;
            requireNonZero(ad, 'a_d');
            setResult('s_total', v * tr + (v * v) / (2 * ad));
            break;
          }
          if (unknown === 't_r') {
            if (sTotal === undefined || v === undefined || ad === undefined) break;
            requireNonZero(v, 'v');
            setResult('t_r', (sTotal - (v * v) / (2 * ad)) / v);
            break;
          }
          if (unknown === 'a_d') {
            if (sTotal === undefined || v === undefined || tr === undefined) break;
            const denom = 2 * (sTotal - v * tr);
            if (denom === 0) throw new Error('2(s_total - v t_r) cannot be 0');
            setResult('a_d', (v * v) / denom);
            break;
          }
          if (unknown === 'v') {
            // Solve s_total = v t_r + v^2/(2 a_d) => (1/(2a_d)) v^2 + t_r v - s_total = 0
            if (sTotal === undefined || tr === undefined || ad === undefined) break;
            requireNonZero(ad, 'a_d');
            const A = 1 / (2 * ad);
            const B = tr;
            const C = -sTotal;
            const disc = B * B - 4 * A * C;
            if (disc < 0) throw new Error('negative discriminant');
            const sqrtDisc = Math.sqrt(disc);
            const v1 = (-B + sqrtDisc) / (2 * A);
            const v2 = (-B - sqrtDisc) / (2 * A);
            const roots = [v1, v2].filter((x) => Number.isFinite(x) && x >= 0).sort((x, y) => x - y);
            if (roots.length === 0) throw new Error('no positive velocity root');
            if (roots.length === 1 || Math.abs(roots[0] - roots[1]) < 1e-9) {
              setResult('v', roots[0]);
              break;
            }
            setText(`v = ${fmt(roots[0])} m/s 或 ${fmt(roots[1])} m/s（按题意选取）`);
            break;
          }
          break;
        }
        default: {
          setText('该公式暂未支持计算');
        }
      }

      // 如果走到这里还没有结果，说明缺少必要输入
      if (!producedResult) {
        setCalcResult('请确认已填入所需变量（仅留空 1 个未知量）');
      }
    } catch {
      setCalcResult('计算错误');
    }
  };

  if (formulas.length === 0) {
    return (
      <Card hover={false} className="p-8 text-center">
        <Calculator className="w-12 h-12 text-blue-300 mx-auto mb-4" />
        <p className="text-blue-300">本主题暂无公式</p>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      <Card hover={false} className="p-6">
        <h2 className="text-xl font-bold text-blue-100 mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-primary-400" />
          公式库 & 计算器
        </h2>
        <p className="text-blue-300 mb-6">点击公式展开计算器，输入已知量计算未知量</p>

        <div className="space-y-3">
          {formulas.map((formula) => (
            <div key={formula.id} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => {
                  setExpandedFormula(expandedFormula === formula.id ? null : formula.id);
                  setCalcValues({});
                  setCalcResult('');
                }}
                className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="font-mono text-xl text-primary-300 bg-primary-500/10 px-3 py-1 rounded-lg">
                    {formula.expression}
                  </div>
                  <div className="text-left">
                    <p className="text-blue-100 font-medium">{formula.nameCN}</p>
                    <p className="text-blue-300 text-sm">{formula.name}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-blue-300 transition-transform ${
                    expandedFormula === formula.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedFormula === formula.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10 bg-slate-800/50/5"
                  >
                    <div className="p-4 space-y-4">
                      <p className="text-blue-200">{formula.description}</p>
                      
                      {/* 变量输入 */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {formula.variables.map((variable) => (
                          <div key={variable.symbol}>
                            <label className="text-sm text-blue-300 block mb-1">
                              {variable.description} ({variable.symbol})
                            </label>
                            <div className="relative">
                              <input
                                type="number"
                                step="0.1"
                                placeholder="0"
                                value={calcValues[variable.symbol] ?? ''}
                                onChange={(e) => {
                                  const raw = e.target.value;
                                  setCalcValues({
                                    ...calcValues,
                                    [variable.symbol]: raw === '' ? undefined : Number(raw),
                                  });
                                }}
                                className="w-full bg-slate-800/50 border border-primary-500/30 rounded-lg px-3 py-2 text-blue-100 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                              />
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 text-sm">
                                {variable.unit}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* 计算按钮和结果 */}
                      <div className="flex items-center gap-4">
                        <Button onClick={() => calculateFormula(formula)}>
                          计算
                        </Button>
                        {calcResult && (
                          <div className="flex-1 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                            <p className="text-green-400 font-mono text-lg">{calcResult}</p>
                          </div>
                        )}
                      </div>

                      {/* 示例 */}
                      <div className="p-3 bg-accent-500/10 rounded-lg">
                        <p className="text-sm text-accent-300">
                          <span className="font-medium">示例：</span> {formula.example}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

// Exercise 标签页 - 嵌入 ExercisePage 内容
function ExerciseTab({ topicId }: { topicId: string }) {
  if (topicId === 'electricity-magnetism') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="h-full"
      >
        <ExercisePage
          embedded={true}
          topicId="electricity-magnetism"
          chapterId="em-ch1"
          defaultSectionId="electrostatics"
          sections={ELECTRICITY_MAGNETISM_SECTIONS}
          exercises={ELECTRICITY_MAGNETISM_EXERCISES}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full"
    >
      <ExercisePage embedded={true} />
    </motion.div>
  );
}

// Quiz 标签页 - 嵌入 ForceMotionQuizPage 内容
function QuizTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full"
    >
      <ForceMotionQuizPage embedded={true} />
    </motion.div>
  );
}
