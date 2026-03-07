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

type PetSpecies = 'cat' | 'dog';

const STORAGE_KEY = 'physics_web_pet_state_v1';
const SPECIES_KEY = 'physics_web_pet_species_v1';

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

const loadSpecies = (): PetSpecies => {
  const raw = localStorage.getItem(SPECIES_KEY);
  return raw === 'dog' ? 'dog' : 'cat';
};

const saveSpecies = (species: PetSpecies) => localStorage.setItem(SPECIES_KEY, species);

type PetPose = 'idle' | 'happy' | 'tired';

const SPRITE_BASE: Record<PetSpecies, string> = {
  cat: '/physics/pets/sprites/cat',
  dog: '/physics/pets/sprites/dog',
};

const SPRITE_FRAMES: Record<PetPose, string[]> = {
  idle: ['idle-1.png', 'idle-2.png', 'idle-3.png', 'idle-4.png'],
  happy: ['happy-1.png', 'happy-2.png', 'happy-3.png', 'happy-4.png'],
  tired: ['tired-1.png', 'tired-2.png', 'tired-3.png', 'tired-4.png'],
};

function SpritePet({
  species,
  pose,
}: {
  species: PetSpecies;
  pose: PetPose;
}) {
  const [ready, setReady] = useState<boolean | null>(null);
  const [frame, setFrame] = useState(0);
  const files = SPRITE_FRAMES[pose];

  useEffect(() => {
    setFrame(0);
    setReady(null);
    const probe = new Image();
    probe.onload = () => setReady(true);
    probe.onerror = () => setReady(false);
    probe.src = `${SPRITE_BASE[species]}/${files[0]}`;
  }, [species, pose, files]);

  useEffect(() => {
    if (!ready) return;
    const timer = window.setInterval(() => {
      setFrame((prev) => (prev + 1) % files.length);
    }, 140);
    return () => window.clearInterval(timer);
  }, [ready, files.length]);

  if (!ready) return null;

  return (
    <motion.div
      className="relative mx-auto mb-2 h-44 w-44"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute bottom-1 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-slate-900/50 blur-sm" />
      <img
        src={`${SPRITE_BASE[species]}/${files[frame]}`}
        alt={`${species} sprite pet`}
        className="relative z-10 h-full w-full object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
        draggable={false}
      />
    </motion.div>
  );
}

function VectorPet({ moodScore, energyScore, species }: { moodScore: number; energyScore: number; species: PetSpecies }) {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBlink(true);
      window.setTimeout(() => setBlink(false), 140);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  const isHappy = moodScore >= 80;
  const isTired = energyScore < 40;
  const coat = species === 'cat' ? (isHappy ? '#f6a64a' : moodScore >= 45 ? '#e5963f' : '#c97a33') : isHappy ? '#d3b18a' : moodScore >= 45 ? '#c2946d' : '#a67855';
  const face = moodScore >= 45 ? '#ffe8ca' : '#efdbc1';

  return (
    <motion.div
      className="relative mx-auto mb-2 h-44 w-44"
      animate={{ y: isTired ? [0, 1, 0] : isHappy ? [0, -4, 0] : [0, -2, 0] }}
      transition={{ duration: isTired ? 2.8 : 2.1, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div
        className="absolute bottom-1 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-slate-900/50 blur-sm"
        animate={{ scaleX: [1, 0.92, 1] }}
        transition={{ duration: 2.1, repeat: Infinity }}
      />

      <svg viewBox="0 0 220 220" className="relative z-10 h-full w-full drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]" role="img" aria-label={`${species} 2d pet`}>
        <motion.path
          d="M158 118 C186 116, 200 136, 184 152"
          fill="none"
          stroke={coat}
          strokeWidth="10"
          strokeLinecap="round"
          animate={{ rotate: isTired ? [0, 3, -3, 0] : [0, 12, -8, 0] }}
          transition={{ repeat: Infinity, duration: isTired ? 2.2 : 1.3, ease: 'easeInOut' }}
          style={{ transformOrigin: '160px 126px' }}
        />

        <ellipse cx="110" cy="146" rx="56" ry="44" fill={coat} />
        <ellipse cx="110" cy="150" rx="24" ry="16" fill={face} />

        <motion.g animate={isHappy ? { y: [0, -1.2, 0] } : { y: [0, 0.5, 0] }} transition={{ duration: 0.7, repeat: Infinity }}>
          <ellipse cx="74" cy="182" rx="11" ry="14" fill={coat} />
          <ellipse cx="97" cy="186" rx="10" ry="13" fill={coat} />
        </motion.g>
        <motion.g animate={isHappy ? { y: [0, 1.2, 0] } : { y: [0.5, 0, 0.5] }} transition={{ duration: 0.7, repeat: Infinity }}>
          <ellipse cx="123" cy="186" rx="10" ry="13" fill={coat} />
          <ellipse cx="146" cy="182" rx="11" ry="14" fill={coat} />
        </motion.g>

        <circle cx="110" cy="86" r="52" fill={coat} />

        {species === 'cat' ? (
          <>
            <path d="M72 41 L56 17 L84 30 Z" fill={coat} />
            <path d="M148 41 L164 17 L136 30 Z" fill={coat} />
            <path d="M73 37 L63 23 L80 30 Z" fill="#f7bf92" />
            <path d="M147 37 L157 23 L140 30 Z" fill="#f7bf92" />
          </>
        ) : (
          <>
            <ellipse cx="78" cy="42" rx="14" ry="11" fill={coat} />
            <ellipse cx="142" cy="42" rx="14" ry="11" fill={coat} />
            <ellipse cx="79" cy="43" rx="7" ry="5" fill="#efc293" />
            <ellipse cx="141" cy="43" rx="7" ry="5" fill="#efc293" />
          </>
        )}

        <ellipse cx="110" cy="105" rx="34" ry="26" fill={face} />

        {blink ? (
          <>
            <line x1="92" y1="82" x2="103" y2="82" stroke="#2f2a28" strokeWidth="3" strokeLinecap="round" />
            <line x1="117" y1="82" x2="128" y2="82" stroke="#2f2a28" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="97" cy="82" r="5" fill="#2f2a28" />
            <circle cx="123" cy="82" r="5" fill="#2f2a28" />
            <circle cx="99" cy="80" r="1.5" fill="#ffffff" />
            <circle cx="125" cy="80" r="1.5" fill="#ffffff" />
          </>
        )}

        <path d="M110 90 L104 98 L116 98 Z" fill="#3b312d" />
        <path d="M106 101 Q110 107 114 101" fill="none" stroke="#3b312d" strokeWidth="2" strokeLinecap="round" />

        {species === 'cat' ? (
          <>
            <path d="M83 96 L63 91" stroke="#6d5342" strokeWidth="2" strokeLinecap="round" />
            <path d="M83 102 L61 102" stroke="#6d5342" strokeWidth="2" strokeLinecap="round" />
            <path d="M137 96 L157 91" stroke="#6d5342" strokeWidth="2" strokeLinecap="round" />
            <path d="M137 102 L159 102" stroke="#6d5342" strokeWidth="2" strokeLinecap="round" />
          </>
        ) : null}

        <ellipse cx="82" cy="93" rx="6" ry="4" fill="#f3ad9f" opacity="0.7" />
        <ellipse cx="138" cy="93" rx="6" ry="4" fill="#f3ad9f" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

function AnimatedPet({ moodScore, energyScore, species }: { moodScore: number; energyScore: number; species: PetSpecies }) {
  const pose: PetPose = moodScore >= 80 ? 'happy' : energyScore < 40 ? 'tired' : 'idle';
  const [spriteEnabled, setSpriteEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    setSpriteEnabled(null);
    const probe = new Image();
    probe.onload = () => setSpriteEnabled(true);
    probe.onerror = () => setSpriteEnabled(false);
    probe.src = `${SPRITE_BASE[species]}/${SPRITE_FRAMES[pose][0]}`;
  }, [species, pose]);

  if (spriteEnabled) return <SpritePet species={species} pose={pose} />;
  return <VectorPet moodScore={moodScore} energyScore={energyScore} species={species} />;
}

export default function PetSystem() {
  const location = useLocation();
  const { getOverallProgress, wrongAnswers } = useStore();
  const [expanded, setExpanded] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [state, setState] = useState<PetState>(defaultState);
  const [species, setSpecies] = useState<PetSpecies>('cat');

  useEffect(() => {
    const next = loadState();
    setState(next);
    saveState(next);
    setSpecies(loadSpecies());
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
    if (petScore >= 80) return 'Energetic';
    if (petScore >= 60) return 'Stable';
    if (petScore >= 40) return 'Needs attention';
    return 'Low mood';
  }, [petScore]);

  const petLine = useMemo(() => {
    if (pendingWrongCount > 0) return `You have ${pendingWrongCount} wrong questions waiting for review.`;
    if (overallProgress >= 80) return 'Great progress. Keep this momentum.';
    if (scrollPercent >= 70) return 'Almost done on this page, do a quick practice set next.';
    if (location.pathname.includes('/wrong-answers')) return 'Redo mode: focus on weak spots first.';
    return 'I will stay with your learning progress.';
  }, [pendingWrongCount, overallProgress, scrollPercent, location.pathname]);

  const switchSpecies = (nextSpecies: PetSpecies) => {
    setSpecies(nextSpecies);
    saveSpecies(nextSpecies);
  };

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
              <p className="text-sm font-semibold">Study Pet (2D)</p>
            </div>

            <div className="mb-2 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => switchSpecies('cat')}
                className={`rounded-md px-3 py-1 text-xs transition ${species === 'cat' ? 'bg-cyan-500/30 text-cyan-100' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              >
                Cat
              </button>
              <button
                type="button"
                onClick={() => switchSpecies('dog')}
                className={`rounded-md px-3 py-1 text-xs transition ${species === 'dog' ? 'bg-cyan-500/30 text-cyan-100' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              >
                Dog
              </button>
            </div>

            <AnimatedPet moodScore={petScore} energyScore={state.energy} species={species} />
            <p className="mb-2 text-center text-[11px] text-slate-300">
              Sprite path: <code>/public/physics/pets/sprites/{species}</code>
            </p>
            <p className="mb-3 text-xs leading-5 text-blue-200">{petLine}</p>

            <div className="space-y-2.5">
              <StatRow label="Satiety" value={state.satiety} />
              <StatRow label="Mood" value={state.mood} />
              <StatRow label="Energy" value={state.energy} />
            </div>

            <div className="mt-3 rounded-lg bg-slate-800/80 p-2 text-xs text-cyan-200">
              Status: {petMood} | Progress {overallProgress}% | Page read {scrollPercent}%
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={feedPet}
                className="flex items-center justify-center gap-1 rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-2 py-2 text-xs text-cyan-100 transition hover:bg-cyan-500/25"
              >
                <Bone className="h-3.5 w-3.5" />
                Feed
              </button>
              <button
                type="button"
                onClick={playPet}
                className="flex items-center justify-center gap-1 rounded-lg border border-blue-500/40 bg-blue-500/15 px-2 py-2 text-xs text-blue-100 transition hover:bg-blue-500/25"
              >
                <Gamepad2 className="h-3.5 w-3.5" />
                Play
              </button>
              <button
                type="button"
                onClick={restPet}
                className="flex items-center justify-center gap-1 rounded-lg border border-indigo-500/40 bg-indigo-500/15 px-2 py-2 text-xs text-indigo-100 transition hover:bg-indigo-500/25"
              >
                <Moon className="h-3.5 w-3.5" />
                Rest
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
          🐾
        </motion.span>
        <span className="text-sm font-medium">Pet</span>
        <PawPrint className="h-4 w-4 text-cyan-300" />
      </motion.button>
    </div>
  );
}
