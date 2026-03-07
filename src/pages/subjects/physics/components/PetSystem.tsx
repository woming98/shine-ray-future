import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bone, Gamepad2, Moon, PawPrint, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';

type PetState = {
  satiety: number;
  mood: number;
  energy: number;
  lastUpdatedAt: number;
};

const STORAGE_KEY = 'physics_web_pet_state_v1';

const clamp = (value: number) => Math.max(0, Math.min(100, value));

const defaultState: PetState = {
  satiety: 70,
  mood: 72,
  energy: 68,
  lastUpdatedAt: Date.now(),
};

const applyDecay = (state: PetState) => {
  const now = Date.now();
  const elapsedMinutes = (now - state.lastUpdatedAt) / 60000;
  if (elapsedMinutes <= 0) return state;

  return {
    satiety: clamp(state.satiety - elapsedMinutes * 0.35),
    mood: clamp(state.mood - elapsedMinutes * 0.22),
    energy: clamp(state.energy - elapsedMinutes * 0.2),
    lastUpdatedAt: now,
  };
};

const saveState = (state: PetState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadState = (): PetState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as PetState;
    return applyDecay({
      satiety: clamp(parsed.satiety ?? defaultState.satiety),
      mood: clamp(parsed.mood ?? defaultState.mood),
      energy: clamp(parsed.energy ?? defaultState.energy),
      lastUpdatedAt: parsed.lastUpdatedAt ?? Date.now(),
    });
  } catch {
    return defaultState;
  }
};

function AnimatedPet({ moodScore }: { moodScore: number }) {
  const isHappy = moodScore >= 75;
  const isTired = moodScore < 45;

  return (
    <motion.div
      className="relative mx-auto mb-3 h-24 w-24"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div
        className="absolute -bottom-2 left-1/2 h-3 w-14 -translate-x-1/2 rounded-full bg-blue-900/60 blur-sm"
        animate={{ scaleX: [1, 0.9, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <motion.path
          d="M25 42 C18 30, 20 18, 33 15 C42 14, 50 20, 52 30"
          fill="#89b4ff"
          animate={{ rotate: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          style={{ transformOrigin: '38px 26px' }}
        />
        <motion.path
          d="M95 42 C102 30, 100 18, 87 15 C78 14, 70 20, 68 30"
          fill="#89b4ff"
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          style={{ transformOrigin: '82px 26px' }}
        />
        <motion.circle
          cx="60"
          cy="62"
          r="34"
          fill="url(#petFace)"
          animate={{ scaleY: [1, 1.03, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="48"
          cy="58"
          r={isTired ? 2 : 4}
          fill="#0f172a"
          animate={isTired ? { scaleY: [1, 0.4, 1] } : { scaleY: [1, 0.1, 1, 1] }}
          transition={{ duration: isTired ? 2.6 : 3.2, repeat: Infinity, times: [0, 0.45, 0.5, 1] }}
          style={{ transformOrigin: '48px 58px' }}
        />
        <motion.circle
          cx="72"
          cy="58"
          r={isTired ? 2 : 4}
          fill="#0f172a"
          animate={isTired ? { scaleY: [1, 0.4, 1] } : { scaleY: [1, 0.1, 1, 1] }}
          transition={{ duration: isTired ? 2.6 : 3.2, repeat: Infinity, times: [0, 0.45, 0.5, 1], delay: 0.1 }}
          style={{ transformOrigin: '72px 58px' }}
        />
        <circle cx="60" cy="66" r="3.2" fill="#1e293b" />
        {isHappy ? (
          <path d="M48 75 Q60 86 72 75" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : isTired ? (
          <path d="M50 80 Q60 74 70 80" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : (
          <path d="M50 79 Q60 82 70 79" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
        )}
        <defs>
          <linearGradient id="petFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function PetSystem() {
  const location = useLocation();
  const { getOverallProgress, wrongAnswers } = useStore();

  const [expanded, setExpanded] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [state, setState] = useState<PetState>(defaultState);

  useEffect(() => {
    const next = loadState();
    setState(next);
    saveState(next);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setState((prev) => {
        const next = applyDecay(prev);
        saveState(next);
        return next;
      });
    }, 60000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) {
        setScrollPercent(0);
        return;
      }
      setScrollPercent(Math.round((top / total) * 100));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const applyAction = (fn: (current: PetState) => PetState) => {
    setState((current) => {
      const decayed = applyDecay(current);
      const next = fn(decayed);
      saveState(next);
      return next;
    });
  };

  const feedPet = () =>
    applyAction((current) => ({
      ...current,
      satiety: clamp(current.satiety + 22),
      mood: clamp(current.mood + 6),
      lastUpdatedAt: Date.now(),
    }));

  const playPet = () =>
    applyAction((current) => ({
      ...current,
      mood: clamp(current.mood + 18),
      energy: clamp(current.energy - 12),
      satiety: clamp(current.satiety - 8),
      lastUpdatedAt: Date.now(),
    }));

  const restPet = () =>
    applyAction((current) => ({
      ...current,
      energy: clamp(current.energy + 24),
      mood: clamp(current.mood + 4),
      lastUpdatedAt: Date.now(),
    }));

  const overallProgress = getOverallProgress();
  const pendingWrongCount = wrongAnswers.filter((w) => !w.mastered).length;
  const petScore = Math.round((state.satiety + state.mood + state.energy) / 3);

  const petMood = useMemo(() => {
    if (petScore >= 80) return '活力满满';
    if (petScore >= 60) return '状态稳定';
    if (petScore >= 40) return '需要陪伴';
    return '有点低落';
  }, [petScore]);

  const petLine = useMemo(() => {
    if (pendingWrongCount > 0) return `我帮你记着 ${pendingWrongCount} 道错题，去错题本复习吧。`;
    if (overallProgress >= 80) return '你学得很稳，我们冲刺满进度。';
    if (scrollPercent >= 70) return '这一页快看完了，做两道题巩固一下。';
    if (location.pathname.includes('/wrong-answers')) return '这里是错题本，我会陪你重做。';
    return '继续学习，我会自动跟着你。';
  }, [pendingWrongCount, overallProgress, scrollPercent, location.pathname]);

  const StatRow = ({ label, value }: { label: string; value: number }) => (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-blue-200">
        <span>{label}</span>
        <span>{Math.round(value)}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-800/90">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all"
          style={{ width: `${Math.round(value)}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[70]">
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="pointer-events-auto mb-3 w-[300px] rounded-2xl border border-blue-500/30 bg-slate-900/95 p-4 shadow-2xl shadow-blue-500/20 backdrop-blur"
          >
            <div className="mb-2 flex items-center gap-2 text-blue-100">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <p className="text-sm font-semibold">学习宠物 · 物理小搭子</p>
            </div>

            <AnimatedPet moodScore={petScore} />

            <p className="mb-3 text-xs leading-5 text-blue-200">{petLine}</p>

            <div className="space-y-2.5">
              <StatRow label="饱食" value={state.satiety} />
              <StatRow label="心情" value={state.mood} />
              <StatRow label="精力" value={state.energy} />
            </div>

            <div className="mt-3 rounded-lg bg-slate-800/80 p-2 text-xs text-cyan-200">
              当前状态：{petMood} · 学习进度 {overallProgress}% · 页面阅读 {scrollPercent}%
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={feedPet}
                className="flex items-center justify-center gap-1 rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-2 py-2 text-xs text-cyan-100 transition hover:bg-cyan-500/25"
              >
                <Bone className="h-3.5 w-3.5" />
                喂食
              </button>
              <button
                type="button"
                onClick={playPet}
                className="flex items-center justify-center gap-1 rounded-lg border border-blue-500/40 bg-blue-500/15 px-2 py-2 text-xs text-blue-100 transition hover:bg-blue-500/25"
              >
                <Gamepad2 className="h-3.5 w-3.5" />
                互动
              </button>
              <button
                type="button"
                onClick={restPet}
                className="flex items-center justify-center gap-1 rounded-lg border border-indigo-500/40 bg-indigo-500/15 px-2 py-2 text-xs text-indigo-100 transition hover:bg-indigo-500/25"
              >
                <Moon className="h-3.5 w-3.5" />
                休息
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setExpanded((v) => !v)}
        className="pointer-events-auto flex items-center gap-2 rounded-full border border-blue-400/40 bg-gradient-to-r from-slate-900 to-blue-900 px-4 py-2 text-blue-100 shadow-xl shadow-blue-500/30"
      >
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-lg"
        >
          🐾
        </motion.span>
        <span className="text-sm font-medium">学习宠物</span>
        <PawPrint className="h-4 w-4 text-cyan-300" />
      </motion.button>
    </div>
  );
}

