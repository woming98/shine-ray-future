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
          <radialGradient id="beanBody" cx="34%" cy="22%">
            <stop offset="0%" stopColor="#fff3aa" />
            <stop offset="58%" stopColor="#ffd95f" />
            <stop offset="100%" stopColor="#efbf2f" />
          </radialGradient>
        </defs>

        <circle cx="110" cy="114" r="78" fill="url(#beanBody)" stroke="#e0aa22" strokeWidth="2.4" />
        <ellipse cx="110" cy="144" rx="58" ry="46" fill="#ffd24a" opacity="0.5" />

        <ellipse cx="48" cy="122" rx="11" ry="16" fill="#f4c938" />
        <ellipse cx="172" cy="122" rx="11" ry="16" fill="#f4c938" />

        <ellipse cx="84" cy="72" rx="10" ry="6" fill="#fff7c2" opacity="0.92" />
        <ellipse cx="100" cy="60" rx="6" ry="3.2" fill="#fff7c2" opacity="0.82" />

        {blink ? (
          <>
            <line x1="56" y1="99" x2="96" y2="99" stroke="#3a2a20" strokeWidth="3.8" strokeLinecap="round" />
            <line x1="124" y1="99" x2="164" y2="99" stroke="#3a2a20" strokeWidth="3.8" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="76" cy="98" rx="22" ry="27" fill="#fff" />
            <ellipse cx="144" cy="98" rx="22" ry="27" fill="#fff" />
            <ellipse cx="76" cy="104" rx="12" ry="15" fill="#2e231b" />
            <ellipse cx="144" cy="104" rx="12" ry="15" fill="#2e231b" />
            <circle cx="80" cy="96" r="4.8" fill="#fff" />
            <circle cx="148" cy="96" r="4.8" fill="#fff" />
            <circle cx="72" cy="109" r="1.8" fill="#fff" opacity="0.75" />
            <circle cx="140" cy="109" r="1.8" fill="#fff" opacity="0.75" />
          </>
        )}

        {faceMode === 'happy' && (
          <>
            <path d="M54 68 Q76 54 98 68" fill="none" stroke="#7b5b2e" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M122 68 Q144 54 166 68" fill="none" stroke="#7b5b2e" strokeWidth="2.4" strokeLinecap="round" />
          </>
        )}
        {faceMode === 'calm' && (
          <>
            <path d="M56 66 Q76 58 96 66" fill="none" stroke="#7b5b2e" strokeWidth="2.2" strokeLinecap="round" opacity="0.88" />
            <path d="M124 66 Q144 58 164 66" fill="none" stroke="#7b5b2e" strokeWidth="2.2" strokeLinecap="round" opacity="0.88" />
          </>
        )}
        {faceMode === 'tired' && (
          <>
            <path d="M56 64 Q76 68 96 64" fill="none" stroke="#7b5b2e" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
            <path d="M124 64 Q144 68 164 64" fill="none" stroke="#7b5b2e" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
          </>
        )}
        {faceMode === 'worried' && (
          <>
            <path d="M54 70 L98 60" fill="none" stroke="#7b5b2e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M122 60 L166 70" fill="none" stroke="#7b5b2e" strokeWidth="2.5" strokeLinecap="round" />
          </>
        )}
        {faceMode === 'panic' && (
          <>
            <path d="M52 74 L100 58" fill="none" stroke="#7b5b2e" strokeWidth="3" strokeLinecap="round" />
            <path d="M120 58 L168 74" fill="none" stroke="#7b5b2e" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {faceMode === 'happy' && <path d="M89 154 Q110 184 131 154" fill="none" stroke="#3a2a20" strokeWidth="4.2" strokeLinecap="round" />}
        {faceMode === 'calm' && <path d="M95 158 Q110 165 125 158" fill="none" stroke="#3a2a20" strokeWidth="3.2" strokeLinecap="round" />}
        {faceMode === 'tired' && <path d="M95 161 Q110 147 125 161" fill="none" stroke="#3a2a20" strokeWidth="3.4" strokeLinecap="round" />}
        {faceMode === 'worried' && <path d="M95 162 Q110 146 125 162" fill="none" stroke="#3a2a20" strokeWidth="3.4" strokeLinecap="round" />}
        {faceMode === 'panic' && (
          <>
            <ellipse cx="110" cy="160" rx="11" ry="15" fill="none" stroke="#3a2a20" strokeWidth="3.6" />
          </>
        )}

        {faceMode === 'happy' && (
          <>
            <ellipse cx="56" cy="126" rx="9.5" ry="6.8" fill="#ff9fb0" opacity="0.72" />
            <ellipse cx="164" cy="126" rx="9.5" ry="6.8" fill="#ff9fb0" opacity="0.72" />
          </>
        )}
        {faceMode === 'calm' && (
          <>
            <ellipse cx="58" cy="127" rx="7.2" ry="5.2" fill="#ffadc0" opacity="0.45" />
            <ellipse cx="162" cy="127" rx="7.2" ry="5.2" fill="#ffadc0" opacity="0.45" />
          </>
        )}

        {faceMode === 'worried' && (
          <path d="M58 114 C47 127, 46 140, 55 149 C63 156, 74 151, 76 140 C78 129, 70 120, 58 114 Z" fill="#7fc4ff" opacity="0.95" />
        )}
        {faceMode === 'panic' && (
          <>
            <path d="M58 114 C45 129, 44 143, 54 153 C63 160, 76 154, 79 142 C82 130, 73 120, 58 114 Z" fill="#7fc4ff" opacity="0.95" />
          </>
        )}

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
