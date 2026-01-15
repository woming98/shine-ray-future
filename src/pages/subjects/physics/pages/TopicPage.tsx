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
  Target,
} from 'lucide-react';
import { PHYSICS_TOPICS } from '../constants/topics';
import { FORCE_MOTION_CHAPTERS, FORCE_MOTION_FORMULAS } from '../constants/forceMotion';
import { useStore } from '../store/useStore';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { ProgressRing } from '../components/UI/ProgressRing';
import { Chapter, Formula } from '../types';

type TabType = 'theory' | 'simulation' | 'calculator' | 'exercises';

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

  const tabs = [
    { id: 'theory', label: '理论学习', icon: BookOpen },
    { id: 'simulation', label: '互动模拟', icon: FlaskConical },
    { id: 'calculator', label: '公式计算', icon: Calculator },
    { id: 'exercises', label: '练习题', icon: FileQuestion },
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
            {activeTab === 'exercises' && (
              <ExercisesTab chapter={currentChapter} topicId={topicId || ''} />
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
  const [calcValues, setCalcValues] = useState<Record<string, number>>({});
  const [calcResult, setCalcResult] = useState<string>('');

  const calculateFormula = (formula: Formula) => {
    try {
      // 简单的公式计算逻辑
      switch (formula.id) {
        case 'fm-1': // v = s / t
          if (calcValues['s'] && calcValues['t']) {
            setCalcResult(`v = ${(calcValues['s'] / calcValues['t']).toFixed(2)} m/s`);
          }
          break;
        case 'fm-2': // a = (v - u) / t
          if (calcValues['v'] !== undefined && calcValues['u'] !== undefined && calcValues['t']) {
            setCalcResult(`a = ${((calcValues['v'] - calcValues['u']) / calcValues['t']).toFixed(2)} m/s²`);
          }
          break;
        case 'fm-3': // F = ma
          if (calcValues['m'] && calcValues['a']) {
            setCalcResult(`F = ${(calcValues['m'] * calcValues['a']).toFixed(2)} N`);
          }
          break;
        case 'fm-7': // W = mg
          if (calcValues['m']) {
            const g = calcValues['g'] || 9.8;
            setCalcResult(`W = ${(calcValues['m'] * g).toFixed(2)} N`);
          }
          break;
        case 'fm-8': // p = mv
          if (calcValues['m'] && calcValues['v']) {
            setCalcResult(`p = ${(calcValues['m'] * calcValues['v']).toFixed(2)} kg·m/s`);
          }
          break;
        case 'fm-11': // KE = ½mv²
          if (calcValues['m'] && calcValues['v']) {
            setCalcResult(`KE = ${(0.5 * calcValues['m'] * calcValues['v'] * calcValues['v']).toFixed(2)} J`);
          }
          break;
        case 'fm-12': // PE = mgh
          if (calcValues['m'] && calcValues['h']) {
            const g = calcValues['g'] || 9.8;
            setCalcResult(`PE = ${(calcValues['m'] * g * calcValues['h']).toFixed(2)} J`);
          }
          break;
        default:
          setCalcResult('请输入所需变量值');
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
                                value={calcValues[variable.symbol] || ''}
                                onChange={(e) =>
                                  setCalcValues({
                                    ...calcValues,
                                    [variable.symbol]: parseFloat(e.target.value) || 0,
                                  })
                                }
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

// 练习题标签页
function ExercisesTab({ chapter, topicId }: { chapter?: Chapter; topicId: string }) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const { addWrongAnswer } = useStore();

  if (!chapter || chapter.exercises.length === 0) {
    return (
      <Card hover={false} className="p-8 text-center">
        <FileQuestion className="w-12 h-12 text-blue-300 mx-auto mb-4" />
        <p className="text-blue-300">本章节暂无练习题</p>
      </Card>
    );
  }

  const exercise = chapter.exercises[currentExercise];
  const isCorrect = selectedAnswer === exercise.answer;

  const handleSubmit = () => {
    setShowResult(true);
    if (!isCorrect && selectedAnswer) {
      addWrongAnswer({
        exerciseId: exercise.id,
        topicId,
        chapterId: chapter.id,
        userAnswer: selectedAnswer,
        correctAnswer: exercise.answer,
        attempts: 1,
        mastered: false,
      });
    }
  };

  const handleNext = () => {
    if (currentExercise < chapter.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowHint(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <Card hover={false} className="p-6">
        {/* 进度指示 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary-400" />
            <span className="text-blue-100 font-medium">
              第 {currentExercise + 1} / {chapter.exercises.length} 题
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                exercise.difficulty <= 2
                  ? 'bg-green-500/20 text-green-400'
                  : exercise.difficulty <= 3
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              难度 {'★'.repeat(exercise.difficulty)}
            </span>
            <span className="text-blue-300 text-sm">{exercise.points} 分</span>
          </div>
        </div>

        {/* 题目 */}
        <div className="mb-6">
          <h3 className="text-lg text-blue-100 leading-relaxed">{exercise.question}</h3>
        </div>

        {/* 选项 */}
        {exercise.type === 'multiple_choice' && exercise.options && (
          <div className="space-y-3 mb-6">
            {exercise.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const showCorrect = showResult && option === exercise.answer;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => !showResult && setSelectedAnswer(option)}
                  disabled={showResult}
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
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium ${
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
                  <span className={showCorrect || isSelected ? 'text-blue-100' : 'text-blue-200'}>
                    {option}
                  </span>
                  {showCorrect && <Check className="w-5 h-5 text-green-400 ml-auto" />}
                </button>
              );
            })}
          </div>
        )}

        {/* 计算题输入 */}
        {exercise.type === 'calculation' && (
          <div className="mb-6">
            <textarea
              placeholder="请输入你的答案和计算过程..."
              value={selectedAnswer || ''}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={showResult}
              className="w-full h-32 bg-slate-800/50/5 border border-white/20 rounded-xl p-4 text-blue-100 placeholder-slate-500 focus:outline-none focus:border-primary-500 resize-none"
            />
          </div>
        )}

        {/* 提示 */}
        {!showResult && exercise.hints.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-accent-400 text-sm flex items-center gap-1 hover:text-accent-300"
            >
              <Lightbulb className="w-4 h-4" />
              {showHint ? '隐藏提示' : '显示提示'}
            </button>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-2 p-3 bg-accent-500/10 rounded-lg"
              >
                <ul className="space-y-1">
                  {exercise.hints.map((hint, i) => (
                    <li key={i} className="text-accent-300 text-sm flex items-start gap-2">
                      <span>💡</span> {hint}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        )}

        {/* 结果解释 */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl mb-6 ${
              isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
            }`}
          >
            <p className={`font-medium mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {isCorrect ? '🎉 回答正确！' : '❌ 回答错误'}
            </p>
            <p className="text-blue-200 text-sm">
              <span className="font-medium">解析：</span> {exercise.explanation}
            </p>
          </motion.div>
        )}

        {/* 操作按钮 */}
        <div className="flex items-center justify-between">
          <div className="text-blue-300 text-sm">
            {exercise.type === 'multiple_choice' ? '单选题' : '计算题'}
          </div>
          <div className="flex gap-3">
            {!showResult ? (
              <Button onClick={handleSubmit} disabled={!selectedAnswer}>
                提交答案
              </Button>
            ) : (
              <Button onClick={handleNext}>
                {currentExercise < chapter.exercises.length - 1 ? '下一题' : '完成'}
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* 题目导航 */}
      <div className="flex flex-wrap gap-2">
        {chapter.exercises.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentExercise(index);
              setSelectedAnswer(null);
              setShowResult(false);
              setShowHint(false);
            }}
            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
              currentExercise === index
                ? 'bg-primary-500 text-blue-100'
                : 'bg-slate-800/50/10 text-blue-300 hover:bg-slate-800/50/20'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

