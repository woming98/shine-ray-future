import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bone, Gamepad2, Moon, PawPrint, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Group } from 'three';
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

function PetRig({ moodScore, energyScore, species }: { moodScore: number; energyScore: number; species: PetSpecies }) {
  const rootRef = useRef<Group>(null);
  const tailRef = useRef<Group>(null);
  const earLRef = useRef<Group>(null);
  const earRRef = useRef<Group>(null);
  const legARef = useRef<Group>(null);
  const legBRef = useRef<Group>(null);
  const legCRef = useRef<Group>(null);
  const legDRef = useRef<Group>(null);

  const isHappy = moodScore >= 80;
  const isTired = energyScore < 40;
  const walkAmp = isHappy ? 0.24 : isTired ? 0.08 : 0.14;
  const bounceAmp = isHappy ? 0.06 : isTired ? 0.02 : 0.035;
  const tailAmp = isHappy ? 0.9 : isTired ? 0.25 : 0.5;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!rootRef.current || !tailRef.current) return;

    rootRef.current.position.y = Math.sin(t * (isTired ? 1.6 : 3.2)) * bounceAmp;
    rootRef.current.rotation.z = Math.sin(t * 1.8) * (isTired ? 0.015 : 0.03);
    tailRef.current.rotation.y = -0.4 + Math.sin(t * (isTired ? 2.2 : 5.2)) * tailAmp;

    if (earLRef.current && earRRef.current) {
      earLRef.current.rotation.z = Math.sin(t * 2.6) * 0.07;
      earRRef.current.rotation.z = -Math.sin(t * 2.6) * 0.07;
    }

    const phase = t * (isTired ? 2.4 : 6);
    if (legARef.current) legARef.current.rotation.x = Math.sin(phase) * walkAmp;
    if (legBRef.current) legBRef.current.rotation.x = -Math.sin(phase) * walkAmp;
    if (legCRef.current) legCRef.current.rotation.x = -Math.sin(phase) * walkAmp;
    if (legDRef.current) legDRef.current.rotation.x = Math.sin(phase) * walkAmp;
  });

  const catCoat = isHappy ? '#f6a64a' : moodScore >= 45 ? '#e5963f' : '#c97a33';
  const catStripe = '#d8732a';
  const catFace = '#f6e8d2';
  const catNose = '#ef9f85';

  const dogCoat = isHappy ? '#d3b18a' : moodScore >= 45 ? '#c2946d' : '#a67855';
  const dogFace = moodScore >= 45 ? '#ffe6c8' : '#e8d2b8';

  return (
    <group ref={rootRef} position={[0, -0.02, 0]} scale={[0.8, 0.8, 0.8]}>
      {species === 'cat' ? (
        <>
          <group ref={tailRef} position={[1.05, -0.02, -0.38]}>
            <mesh rotation={[0.3, 0, 0.2]}>
              <capsuleGeometry args={[0.16, 0.92, 8, 18]} />
              <meshStandardMaterial color={catCoat} roughness={0.85} />
            </mesh>
            <mesh position={[0.08, 0.42, 0]}>
              <sphereGeometry args={[0.26, 18, 18]} />
              <meshStandardMaterial color={catCoat} roughness={0.9} />
            </mesh>
          </group>

          <mesh position={[0.2, -0.02, 0]} rotation={[0, 0, 1.57]}>
            <capsuleGeometry args={[0.5, 1.0, 10, 20]} />
            <meshStandardMaterial color={catCoat} roughness={0.88} />
          </mesh>

          <mesh position={[-0.68, 0.5, 0]}>
            <sphereGeometry args={[0.62, 28, 28]} />
            <meshStandardMaterial color={catCoat} roughness={0.83} />
          </mesh>

          <mesh position={[-0.94, 0.28, 0.32]} rotation={[0.2, 0, 0]}>
            <sphereGeometry args={[0.23, 20, 20]} />
            <meshStandardMaterial color={catFace} roughness={0.8} />
          </mesh>

          <mesh position={[-0.52, 0.06, 0]} rotation={[0, 0, 0.12]}>
            <coneGeometry args={[0.26, 0.6, 10]} />
            <meshStandardMaterial color={catFace} roughness={0.9} />
          </mesh>

          <group ref={earLRef} position={[-0.98, 1.03, 0.33]}>
            <mesh rotation={[0.1, 0.1, 0.05]}>
              <coneGeometry args={[0.18, 0.46, 4]} />
              <meshStandardMaterial color={catCoat} roughness={0.78} />
            </mesh>
            <mesh position={[0.02, -0.03, 0]} rotation={[0.1, 0.1, 0.05]}>
              <coneGeometry args={[0.1, 0.24, 4]} />
              <meshStandardMaterial color="#f6b898" roughness={0.8} />
            </mesh>
          </group>
          <group ref={earRRef} position={[-0.98, 1.03, -0.33]}>
            <mesh rotation={[0.1, -0.1, -0.05]}>
              <coneGeometry args={[0.18, 0.46, 4]} />
              <meshStandardMaterial color={catCoat} roughness={0.78} />
            </mesh>
            <mesh position={[0.02, -0.03, 0]} rotation={[0.1, -0.1, -0.05]}>
              <coneGeometry args={[0.1, 0.24, 4]} />
              <meshStandardMaterial color="#f6b898" roughness={0.8} />
            </mesh>
          </group>

          <mesh position={[-1.08, 0.55, 0.21]}>
            <sphereGeometry args={[0.17, 20, 20]} />
            <meshStandardMaterial color="#2a211f" roughness={0.25} />
          </mesh>
          <mesh position={[-1.08, 0.55, -0.21]}>
            <sphereGeometry args={[0.17, 20, 20]} />
            <meshStandardMaterial color="#2a211f" roughness={0.25} />
          </mesh>
          <mesh position={[-1.02, 0.6, 0.26]}>
            <sphereGeometry args={[0.04, 10, 10]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} />
          </mesh>
          <mesh position={[-1.02, 0.6, -0.16]}>
            <sphereGeometry args={[0.04, 10, 10]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} />
          </mesh>
          <mesh position={[-1.2, 0.35, 0]}>
            <sphereGeometry args={[0.055, 12, 12]} />
            <meshStandardMaterial color={catNose} />
          </mesh>

          <mesh position={[-0.55, 0.62, 0]} rotation={[0, 0, 0.12]}>
            <torusGeometry args={[0.34, 0.03, 8, 30, Math.PI * 0.7]} />
            <meshStandardMaterial color={catStripe} roughness={0.8} />
          </mesh>
          <mesh position={[-0.73, 0.35, 0.45]} rotation={[0.25, 0.25, 0.9]}>
            <capsuleGeometry args={[0.03, 0.28, 4, 8]} />
            <meshStandardMaterial color={catStripe} roughness={0.8} />
          </mesh>
          <mesh position={[-0.73, 0.35, -0.45]} rotation={[-0.25, 0.25, -0.9]}>
            <capsuleGeometry args={[0.03, 0.28, 4, 8]} />
            <meshStandardMaterial color={catStripe} roughness={0.8} />
          </mesh>

          <mesh position={[1.05, 0.16, -0.43]} rotation={[0.35, 0.4, 0.2]}>
            <capsuleGeometry args={[0.04, 0.34, 4, 8]} />
            <meshStandardMaterial color={catStripe} roughness={0.8} />
          </mesh>
          <mesh position={[0.96, -0.18, -0.43]} rotation={[0.25, 0.2, 0.2]}>
            <capsuleGeometry args={[0.04, 0.28, 4, 8]} />
            <meshStandardMaterial color={catStripe} roughness={0.8} />
          </mesh>

          <group ref={legARef} position={[-0.22, -0.62, 0.28]}>
            <mesh>
              <capsuleGeometry args={[0.1, 0.44, 6, 10]} />
              <meshStandardMaterial color={catCoat} roughness={0.84} />
            </mesh>
            <mesh position={[0, -0.3, 0]}>
              <sphereGeometry args={[0.12, 14, 14]} />
              <meshStandardMaterial color={catFace} roughness={0.9} />
            </mesh>
          </group>
          <group ref={legBRef} position={[0.52, -0.62, 0.28]}>
            <mesh>
              <capsuleGeometry args={[0.1, 0.44, 6, 10]} />
              <meshStandardMaterial color={catCoat} roughness={0.84} />
            </mesh>
            <mesh position={[0, -0.3, 0]}>
              <sphereGeometry args={[0.12, 14, 14]} />
              <meshStandardMaterial color={catFace} roughness={0.9} />
            </mesh>
          </group>
          <group ref={legCRef} position={[-0.18, -0.62, -0.28]}>
            <mesh>
              <capsuleGeometry args={[0.1, 0.44, 6, 10]} />
              <meshStandardMaterial color={catCoat} roughness={0.84} />
            </mesh>
          </group>
          <group ref={legDRef} position={[0.56, -0.62, -0.28]}>
            <mesh>
              <capsuleGeometry args={[0.1, 0.44, 6, 10]} />
              <meshStandardMaterial color={catCoat} roughness={0.84} />
            </mesh>
          </group>
        </>
      ) : (
        <>
          <group ref={tailRef} position={[1.12, 0.15, -0.3]}>
            <mesh rotation={[0.2, 0, 0]}>
              <capsuleGeometry args={[0.1, 0.8, 8, 16]} />
              <meshStandardMaterial color={dogCoat} roughness={0.7} />
            </mesh>
          </group>
          <mesh position={[0.2, 0.05, 0]} rotation={[0, 0, 1.57]}>
            <capsuleGeometry args={[0.45, 1.05, 10, 20]} />
            <meshStandardMaterial color={dogCoat} roughness={0.72} />
          </mesh>
          <mesh position={[-0.72, 0.46, 0]}>
            <sphereGeometry args={[0.58, 24, 24]} />
            <meshStandardMaterial color={dogCoat} roughness={0.72} />
          </mesh>
          <mesh position={[-1.03, 0.31, 0.34]}>
            <sphereGeometry args={[0.21, 18, 18]} />
            <meshStandardMaterial color={dogFace} roughness={0.7} />
          </mesh>
          <group ref={earLRef} position={[-1.02, 0.95, 0.32]}>
            <mesh>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color={dogCoat} roughness={0.75} />
            </mesh>
          </group>
          <group ref={earRRef} position={[-1.02, 0.95, -0.32]}>
            <mesh>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color={dogCoat} roughness={0.75} />
            </mesh>
          </group>
          <mesh position={[-1.12, 0.53, 0.2]}>
            <sphereGeometry args={[0.07, 10, 10]} />
            <meshStandardMaterial color="#1f1f1f" />
          </mesh>
          <mesh position={[-1.12, 0.53, -0.2]}>
            <sphereGeometry args={[0.07, 10, 10]} />
            <meshStandardMaterial color="#1f1f1f" />
          </mesh>
          <mesh position={[-1.25, 0.36, 0]}>
            <sphereGeometry args={[0.05, 10, 10]} />
            <meshStandardMaterial color="#31221f" />
          </mesh>
          <group ref={legARef} position={[-0.4, -0.62, 0.34]}>
            <mesh>
              <capsuleGeometry args={[0.1, 0.45, 6, 10]} />
              <meshStandardMaterial color={dogCoat} roughness={0.75} />
            </mesh>
          </group>
          <group ref={legBRef} position={[0.55, -0.62, 0.34]}>
            <mesh>
              <capsuleGeometry args={[0.1, 0.45, 6, 10]} />
              <meshStandardMaterial color={dogCoat} roughness={0.75} />
            </mesh>
          </group>
          <group ref={legCRef} position={[-0.4, -0.62, -0.34]}>
            <mesh>
              <capsuleGeometry args={[0.1, 0.45, 6, 10]} />
              <meshStandardMaterial color={dogCoat} roughness={0.75} />
            </mesh>
          </group>
          <group ref={legDRef} position={[0.55, -0.62, -0.34]}>
            <mesh>
              <capsuleGeometry args={[0.1, 0.45, 6, 10]} />
              <meshStandardMaterial color={dogCoat} roughness={0.75} />
            </mesh>
          </group>
        </>
      )}
    </group>
  );
}

function AnimatedPet({ moodScore, energyScore, species }: { moodScore: number; energyScore: number; species: PetSpecies }) {
  return (
    <div className="relative mx-auto mb-2 h-44 w-44 overflow-hidden rounded-xl bg-gradient-to-b from-emerald-200/35 via-green-200/20 to-slate-900/55 ring-1 ring-blue-400/20">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.26, 5.1], fov: 25 }}>
        <ambientLight intensity={0.74} />
        <directionalLight position={[4, 4, 4]} intensity={1.35} />
        <directionalLight position={[-3, 2, -2]} intensity={0.62} color="#fff6d8" />
        <Suspense fallback={null}>
          <PetRig moodScore={moodScore} energyScore={energyScore} species={species} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-1 mx-auto h-3 w-24 rounded-full bg-slate-900/50 blur-sm" />
    </div>
  );
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
              <p className="text-sm font-semibold">Study Pet (3D)</p>
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
