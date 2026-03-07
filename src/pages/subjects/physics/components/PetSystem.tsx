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

const saveState = (state: PetState) => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

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

function BeanPet({ moodScore, energyScore, pressure }: { moodScore: number; energyScore: number; pressure: number }) {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBlink(true);
      window.setTimeout(() => setBlink(false), 130);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  const faceMode = useMemo(() => {
    if (pressure >= 5) return 'panic';
    if (energyScore < 40) return 'tired';
    if (pressure > 0) return 'worried';
    if (moodScore >= 80) return 'happy';
    return 'calm';
  }, [energyScore, pressure, moodScore]);

  const bob =
    faceMode === 'happy'
      ? { y: [0, -6, 0], rotate: [0, -1.4, 1.4, 0] }
      : faceMode === 'tired'
      ? { y: [0, 1.4, 0], rotate: [0, 0.8, 0] }
      : faceMode === 'panic'
      ? { y: [0, -1, 0], rotate: [0, -1.8, 1.8, 0] }
      : { y: [0, -2, 0], rotate: [0, 0, 0] };

  return (
    <motion.div
      className="relative mx-auto mb-2 h-44 w-44"
      animate={bob}
      transition={{ duration: faceMode === 'tired' ? 2.8 : 1.9, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div className="absolute bottom-1 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-slate-900/45 blur-sm" animate={{ scaleX: [1, 0.9, 1] }} transition={{ duration: 1.9, repeat: Infinity }} />

      <svg viewBox="0 0 220 220" className="relative z-10 h-full w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.28)]" role="img" aria-label="bean pet">
        <defs>
          <radialGradient id="beanBody" cx="35%" cy="25%">
            <stop offset="0%" stopColor="#ffe889" />
            <stop offset="65%" stopColor="#ffd95a" />
            <stop offset="100%" stopColor="#f4c938" />
          </radialGradient>
        </defs>

        <ellipse cx="110" cy="112" rx="70" ry="82" fill="url(#beanBody)" />
        <ellipse cx="110" cy="132" rx="56" ry="58" fill="#ffd34a" opacity="0.55" />

        <ellipse cx="82" cy="72" rx="7" ry="4" fill="#fff7c2" opacity="0.9" />
        <ellipse cx="95" cy="62" rx="4" ry="2.4" fill="#fff7c2" opacity="0.8" />

        {blink ? (
          <>
            <line x1="85" y1="97" x2="98" y2="97" stroke="#3a2a20" strokeWidth="3.2" strokeLinecap="round" />
            <line x1="122" y1="97" x2="135" y2="97" stroke="#3a2a20" strokeWidth="3.2" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="91" cy="97" rx="7" ry="9" fill="#2e231b" />
            <ellipse cx="129" cy="97" rx="7" ry="9" fill="#2e231b" />
            <circle cx="93" cy="93" r="1.8" fill="#fff" />
            <circle cx="131" cy="93" r="1.8" fill="#fff" />
          </>
        )}

        {faceMode === 'happy' && <path d="M89 126 Q110 150 131 126" fill="none" stroke="#3a2a20" strokeWidth="4.2" strokeLinecap="round" />}
        {faceMode === 'calm' && <path d="M95 128 Q110 134 125 128" fill="none" stroke="#3a2a20" strokeWidth="3.2" strokeLinecap="round" />}
        {faceMode === 'tired' && <path d="M95 131 Q110 121 125 131" fill="none" stroke="#3a2a20" strokeWidth="3.4" strokeLinecap="round" />}
        {faceMode === 'worried' && <path d="M95 132 Q110 120 125 132" fill="none" stroke="#3a2a20" strokeWidth="3.4" strokeLinecap="round" />}
        {faceMode === 'panic' && (
          <>
            <ellipse cx="110" cy="130" rx="9" ry="12" fill="none" stroke="#3a2a20" strokeWidth="3.6" />
            <path d="M78 84 L102 76" stroke="#7b5b2e" strokeWidth="3" strokeLinecap="round" />
            <path d="M118 76 L142 84" stroke="#7b5b2e" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {faceMode === 'happy' && (
          <>
            <circle cx="73" cy="118" r="5" fill="#ff9fb0" opacity="0.75" />
            <circle cx="147" cy="118" r="5" fill="#ff9fb0" opacity="0.75" />
          </>
        )}

        {faceMode === 'worried' && (
          <path d="M146 86 C154 78, 159 90, 149 98 C145 101, 140 95, 146 86 Z" fill="#89c8ff" opacity="0.9" />
        )}
        {faceMode === 'panic' && (
          <>
            <path d="M70 86 C78 78, 83 90, 73 98 C69 101, 64 95, 70 86 Z" fill="#89c8ff" opacity="0.9" />
            <path d="M150 86 C158 78, 163 90, 153 98 C149 101, 144 95, 150 86 Z" fill="#89c8ff" opacity="0.9" />
          </>
        )}

        <path d="M77 84 Q91 74 104 84" fill="none" stroke="#7b5b2e" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M116 84 Q129 74 143 84" fill="none" stroke="#7b5b2e" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
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
    if (petScore >= 40) return '需要关注';
    return '情绪低落';
  }, [petScore]);

  const petLine = useMemo(() => {
    if (pendingWrongCount > 0) return `你还有 ${pendingWrongCount} 道错题待复习，我陪你刷完。`;
    if (overallProgress >= 80) return '进度很棒，继续保持这股节奏。';
    if (scrollPercent >= 70) return '这页快看完了，做两题巩固一下。';
    if (location.pathname.includes('/wrong-answers')) return '这里是错题本，先攻克薄弱点。';
    return '继续学习，我会一直跟着你。';
  }, [pendingWrongCount, overallProgress, scrollPercent, location.pathname]);

  const StatRow = ({ label, value }: { label: string; value: number }) => (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-blue-200">
        <span>{label}</span>
        <span>{Math.round(value)}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-800/90">
        <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all" style={{ width: `${Math.round(value)}%` }} />
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
            className="pointer-events-auto mb-3 w-[340px] rounded-2xl border border-blue-500/30 bg-slate-900/95 p-4 shadow-2xl shadow-blue-500/20 backdrop-blur"
          >
            <div className="mb-2 flex items-center gap-2 text-blue-100">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <p className="text-sm font-semibold">学习宠物（黄豆）</p>
            </div>

            <BeanPet moodScore={petScore} energyScore={state.energy} pressure={pendingWrongCount} />
            <p className="mb-3 text-xs leading-5 text-blue-200">{petLine}</p>

            <div className="space-y-2.5">
              <StatRow label="饱食" value={state.satiety} />
              <StatRow label="心情" value={state.mood} />
              <StatRow label="精力" value={state.energy} />
            </div>

            <div className="mt-3 rounded-lg bg-slate-800/80 p-2 text-xs text-cyan-200">
              状态：{petMood} ｜ 学习进度 {overallProgress}% ｜ 页面阅读 {scrollPercent}%
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
        <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="text-lg">
          🟡
        </motion.span>
        <span className="text-sm font-medium">宠物</span>
        <PawPrint className="h-4 w-4 text-cyan-300" />
      </motion.button>
    </div>
  );
}
