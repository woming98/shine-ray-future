import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type Emotion = 'calm' | 'happy' | 'sad' | 'shock';

function MascotFace({ emotion }: { emotion: Emotion }) {
  const eye = useMemo(() => {
    if (emotion === 'shock') {
      return (
        <>
          <circle cx="72" cy="78" r="16" fill="#fff" />
          <circle cx="148" cy="78" r="16" fill="#fff" />
        </>
      );
    }
    if (emotion === 'sad') {
      return (
        <>
          <ellipse cx="72" cy="78" rx="14" ry="16" fill="#fff" />
          <ellipse cx="148" cy="78" rx="14" ry="16" fill="#fff" />
          <ellipse cx="72" cy="83" rx="7.5" ry="9.2" fill="#2f241a" />
          <ellipse cx="148" cy="83" rx="7.5" ry="9.2" fill="#2f241a" />
          <path d="M58 91 C48 105, 52 116, 61 119 C70 116, 74 105, 58 91 Z" fill="#7dd3fc" />
        </>
      );
    }
    return (
      <>
        <ellipse cx="72" cy="78" rx="17" ry="19" fill="#fff" />
        <ellipse cx="148" cy="78" rx="17" ry="19" fill="#fff" />
        <ellipse cx="72" cy="83" rx="9" ry="11" fill="#2f241a" />
        <ellipse cx="148" cy="83" rx="9" ry="11" fill="#2f241a" />
        <circle cx="76" cy="76" r="3.5" fill="#fff" />
        <circle cx="152" cy="76" r="3.5" fill="#fff" />
      </>
    );
  }, [emotion]);

  const mouth = useMemo(() => {
    if (emotion === 'happy') {
      return <path d="M82 130 Q110 158 138 130" stroke="#3a2a20" strokeWidth="4" fill="none" strokeLinecap="round" />;
    }
    if (emotion === 'sad') {
      return <path d="M86 137 Q110 116 134 137" stroke="#3a2a20" strokeWidth="4" fill="none" strokeLinecap="round" />;
    }
    if (emotion === 'shock') {
      return (
        <>
          <ellipse cx="110" cy="136" rx="15" ry="18" fill="#9b1c31" stroke="#4c0f1d" strokeWidth="2" />
          <ellipse cx="110" cy="144" rx="8.5" ry="5.5" fill="#ff8aa5" />
        </>
      );
    }
    return <path d="M92 136 Q110 145 128 136" stroke="#3a2a20" strokeWidth="3.4" fill="none" strokeLinecap="round" />;
  }, [emotion]);

  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      <defs>
        <radialGradient id="mascot-body" cx="34%" cy="20%">
          <stop offset="0%" stopColor="#fff6bf" />
          <stop offset="58%" stopColor="#ffd965" />
          <stop offset="100%" stopColor="#efbf2f" />
        </radialGradient>
      </defs>

      <polygon
        points="110,14 132,30 160,26 170,52 196,64 192,92 210,112 192,134 196,162 170,174 160,200 132,196 110,214 88,196 60,200 50,174 24,162 28,134 10,112 28,92 24,64 50,52 60,26 88,30"
        fill="#ff8a1f"
        stroke="#f97316"
        strokeWidth="2.2"
      />
      <circle cx="110" cy="112" r="78" fill="url(#mascot-body)" stroke="#d4a017" strokeWidth="2.4" />
      <ellipse cx="110" cy="140" rx="56" ry="42" fill="#ffd24a" opacity="0.5" />

      {emotion === 'shock' ? (
        <>
          <path d="M54 66 L96 52" stroke="#7b5b2e" strokeWidth="3" strokeLinecap="round" />
          <path d="M124 52 L166 66" stroke="#7b5b2e" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M56 64 Q72 56 88 64" stroke="#7b5b2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M132 64 Q148 56 164 64" stroke="#7b5b2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </>
      )}

      {eye}
      {mouth}

      <ellipse cx="58" cy="116" rx="9" ry="6.4" fill="#ff9fb0" opacity="0.72" />
      <ellipse cx="162" cy="116" rx="9" ry="6.4" fill="#ff9fb0" opacity="0.72" />

      {emotion === 'shock' && (
        <g transform="translate(146 8)">
          <path d="M0 10 C0 1 12 1 12 10 L9 50 C8 56 4 56 3 50 Z" fill="#facc15" />
          <circle cx="6" cy="64" r="7" fill="#f59e0b" />
          <path d="M26 5 C26 -4 38 -4 38 5 L35 45 C34 51 30 51 29 45 Z" fill="#fb923c" />
          <circle cx="32" cy="59" r="7" fill="#f97316" />
          <path d="M52 0 C52 -9 64 -9 64 0 L61 40 C60 46 56 46 55 40 Z" fill="#ef4444" />
          <circle cx="58" cy="54" r="7" fill="#dc2626" />
        </g>
      )}
    </svg>
  );
}

export default function PetSystemExperimental() {
  const [emotion, setEmotion] = useState<Emotion>('calm');

  return (
    <div className="fixed bottom-4 left-4 z-[80] w-[280px] rounded-2xl border border-blue-500/30 bg-slate-900/95 p-4 text-blue-100 shadow-2xl">
      <div className="mb-2 text-sm font-semibold">宠物形象实验版（不接主流程）</div>
      <motion.div
        className="mx-auto h-44 w-44"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MascotFace emotion={emotion} />
      </motion.div>

      <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
        <button type="button" onClick={() => setEmotion('calm')} className="rounded bg-slate-800 px-2 py-1 hover:bg-slate-700">
          平静
        </button>
        <button type="button" onClick={() => setEmotion('happy')} className="rounded bg-slate-800 px-2 py-1 hover:bg-slate-700">
          开心
        </button>
        <button type="button" onClick={() => setEmotion('sad')} className="rounded bg-slate-800 px-2 py-1 hover:bg-slate-700">
          伤心
        </button>
        <button type="button" onClick={() => setEmotion('shock')} className="rounded bg-slate-800 px-2 py-1 hover:bg-slate-700">
          震惊
        </button>
      </div>
    </div>
  );
}

