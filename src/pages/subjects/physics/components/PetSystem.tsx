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

type WeatherInfo = {
  temperature: number;
  weatherCode: number;
  maxTemp?: number;
  minTemp?: number;
};

const STORAGE_KEY = 'physics_web_pet_state_v1';

const clamp = (value: number) => Math.max(0, Math.min(100, value));

const defaultState: PetState = {
  satiety: 70,
  mood: 72,
  energy: 68,
  lastUpdatedAt: Date.now(),
};

const weatherText = (code: number) => {
  if (code === 0) return '晴朗';
  if ([1, 2, 3].includes(code)) return '多云';
  if ([45, 48].includes(code)) return '有雾';
  if ([51, 53, 55, 56, 57].includes(code)) return '毛毛雨';
  if ([61, 63, 65, 66, 67].includes(code)) return '下雨';
  if ([71, 73, 75, 77].includes(code)) return '降雪';
  if ([80, 81, 82].includes(code)) return '阵雨';
  if ([85, 86].includes(code)) return '阵雪';
  if ([95, 96, 99].includes(code)) return '雷暴';
  return '天气未知';
};

const weatherEmoji = (code: number) => {
  if (code === 0) return '☀️';
  if ([1, 2, 3].includes(code)) return '⛅';
  if ([45, 48].includes(code)) return '🌫️';
  if ([61, 63, 65, 80, 81, 82].includes(code)) return '🌧️';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return '❄️';
  if ([95, 96, 99].includes(code)) return '⛈️';
  return '🌤️';
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

  const auraClass =
    faceMode === 'happy'
      ? 'from-cyan-400/35 via-blue-400/25 to-purple-400/30'
      : faceMode === 'tired'
      ? 'from-indigo-400/25 via-blue-500/15 to-slate-400/20'
      : faceMode === 'panic'
      ? 'from-rose-400/30 via-orange-400/25 to-blue-400/20'
      : faceMode === 'worried'
      ? 'from-blue-400/30 via-cyan-400/20 to-indigo-400/20'
      : 'from-blue-400/25 via-cyan-400/20 to-purple-400/20';

  return (
    <motion.div
      className="relative mx-auto mb-2 h-44 w-44"
      animate={bob}
      transition={{ duration: faceMode === 'tired' ? 2.8 : 1.9, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className={`pointer-events-none absolute inset-2 rounded-full bg-gradient-to-br ${auraClass} blur-xl`} />
      <motion.div className="absolute bottom-1 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-slate-900/45 blur-sm" animate={{ scaleX: [1, 0.9, 1] }} transition={{ duration: 1.9, repeat: Infinity }} />

      <svg viewBox="0 0 220 220" className="relative z-10 h-full w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.28)]" role="img" aria-label="bean pet">
        <defs>
          <radialGradient id="beanBody" cx="34%" cy="22%">
            <stop offset="0%" stopColor="#fff3aa" />
            <stop offset="58%" stopColor="#ffd95f" />
            <stop offset="100%" stopColor="#efbf2f" />
          </radialGradient>
        </defs>

        <polygon
          points="110,12 132,31 161,26 171,53 198,63 193,92 212,114 193,136 198,165 171,175 161,202 132,197 110,216 88,197 59,202 49,175 22,165 27,136 8,114 27,92 22,63 49,53 59,26 88,31"
          fill="#ff8a1f"
          stroke="#f97316"
          strokeWidth="2.2"
          opacity="0.95"
        />
        <circle cx="110" cy="114" r="78" fill="url(#beanBody)" stroke="#e0aa22" strokeWidth="2.4" />
        <ellipse cx="110" cy="144" rx="58" ry="46" fill="#ffd24a" opacity="0.5" />

        <ellipse cx="48" cy="122" rx="11" ry="16" fill="#f4c938" />
        <ellipse cx="172" cy="122" rx="11" ry="16" fill="#f4c938" />

        <ellipse cx="84" cy="72" rx="10" ry="6" fill="#fff7c2" opacity="0.92" />
        <ellipse cx="100" cy="60" rx="6" ry="3.2" fill="#fff7c2" opacity="0.82" />

        {faceMode === 'panic' ? (
          <>
            <ellipse cx="76" cy="100" rx="20" ry="24" fill="#ffffff" />
            <ellipse cx="144" cy="100" rx="20" ry="24" fill="#ffffff" />
            <ellipse cx="76" cy="100" rx="20" ry="24" fill="none" stroke="#dbeafe" strokeWidth="2.4" />
            <ellipse cx="144" cy="100" rx="20" ry="24" fill="none" stroke="#dbeafe" strokeWidth="2.4" />
          </>
        ) : blink ? (
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
            <ellipse cx="110" cy="161" rx="14" ry="18" fill="#9b1c31" stroke="#4c0f1d" strokeWidth="2.2" />
            <ellipse cx="110" cy="168" rx="8.5" ry="5.5" fill="#ff8aa5" />
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
          <path d="M58 112 C48 125, 44 139, 49 149 C54 160, 68 160, 73 149 C78 139, 74 125, 58 112 Z" fill="#7fc4ff" opacity="0.96" />
        )}
        {faceMode === 'panic' && (
          <>
            <path d="M58 110 C45 127, 40 145, 47 159 C53 171, 69 171, 75 159 C82 145, 77 127, 58 110 Z" fill="#7fc4ff" opacity="0.96" />
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
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  const [weatherError, setWeatherError] = useState<string>('');

  useEffect(() => {
    const next = loadState();
    setState(next);
    saveState(next);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const fetchWeather = async (lat: number, lon: number) => {
      const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
        `&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

      const res = await fetch(url);
      if (!res.ok) throw new Error('weather_fetch_failed');
      const data = await res.json();

      const next: WeatherInfo = {
        temperature: data?.current?.temperature_2m ?? 0,
        weatherCode: data?.current?.weather_code ?? -1,
        maxTemp: data?.daily?.temperature_2m_max?.[0],
        minTemp: data?.daily?.temperature_2m_min?.[0],
      };

      if (!cancelled) {
        setWeather(next);
        setWeatherError('');
      }
    };

    const run = async () => {
      if (!navigator.geolocation) {
        setWeatherError('当前设备不支持定位，无法获取天气。');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            await fetchWeather(pos.coords.latitude, pos.coords.longitude);
          } catch {
            if (!cancelled) setWeatherError('天气获取失败，请稍后重试。');
          }
        },
        () => {
          if (!cancelled) setWeatherError('定位未授权，无法获取本地天气。');
        },
        { timeout: 8000, maximumAge: 10 * 60 * 1000 },
      );
    };

    run();
    return () => {
      cancelled = true;
    };
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
  const petMode = useMemo(() => {
    if (pendingWrongCount >= 5) return 'panic';
    if (state.energy < 40) return 'tired';
    if (pendingWrongCount > 0) return 'worried';
    if (petScore >= 80) return 'happy';
    return 'calm';
  }, [pendingWrongCount, state.energy, petScore]);

  const panelToneClass = useMemo(() => {
    if (petMode === 'happy') return 'border-cyan-400/40 shadow-cyan-500/25 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-cyan-950/85';
    if (petMode === 'tired') return 'border-indigo-400/35 shadow-indigo-500/25 bg-gradient-to-br from-slate-900/95 via-indigo-950/90 to-slate-900/95';
    if (petMode === 'panic') return 'border-orange-400/45 shadow-orange-500/20 bg-gradient-to-br from-slate-900/95 via-slate-900/95 to-orange-950/65';
    if (petMode === 'worried') return 'border-blue-400/40 shadow-blue-500/20 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95';
    return 'border-blue-500/30 shadow-blue-500/20 bg-slate-900/95';
  }, [petMode]);

  const launcherToneClass = useMemo(() => {
    if (petMode === 'happy') return 'border-cyan-400/45 from-slate-900 to-cyan-900 shadow-cyan-500/30';
    if (petMode === 'tired') return 'border-indigo-400/45 from-slate-900 to-indigo-900 shadow-indigo-500/30';
    if (petMode === 'panic') return 'border-orange-400/45 from-slate-900 to-orange-900 shadow-orange-500/30';
    if (petMode === 'worried') return 'border-blue-400/45 from-slate-900 to-blue-900 shadow-blue-500/30';
    return 'border-blue-400/40 from-slate-900 to-blue-900 shadow-blue-500/30';
  }, [petMode]);

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

  const weatherLine = useMemo(() => {
    if (!weather) return '';
    const t = weatherText(weather.weatherCode);
    if ([61, 63, 65, 80, 81, 82, 95, 96, 99].includes(weather.weatherCode)) return `今天${t}，做题别太赶，稳住节奏。`;
    if (weather.temperature >= 30) return `现在偏热，注意补水，专注做题。`;
    if (weather.temperature <= 10) return `现在偏冷，别着凉，慢慢刷题。`;
    return `天气不错，适合把错题清一波。`;
  }, [weather]);

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
            className={`pointer-events-auto mb-3 w-[340px] rounded-2xl border p-4 shadow-2xl backdrop-blur ${panelToneClass}`}
          >
            <div className="mb-2 flex items-center gap-2 text-blue-100">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <p className="text-sm font-semibold">学习宠物（黄豆）</p>
            </div>

            <BeanPet moodScore={petScore} energyScore={state.energy} pressure={pendingWrongCount} />
            <p className="mb-3 text-xs leading-5 text-blue-200">{petLine}</p>

            <div className="mb-3 rounded-lg border border-blue-500/30 bg-slate-800/70 p-2 text-xs text-blue-100">
              {weather ? (
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span>
                      实时天气：{weatherEmoji(weather.weatherCode)} {weatherText(weather.weatherCode)}
                    </span>
                    <span>{Math.round(weather.temperature)}°C</span>
                  </div>
                  {(weather.maxTemp !== undefined || weather.minTemp !== undefined) && (
                    <div className="text-blue-300">
                      今日预报：
                      {weather.maxTemp !== undefined ? ` 最高 ${Math.round(weather.maxTemp)}°C` : ''}
                      {weather.minTemp !== undefined ? ` / 最低 ${Math.round(weather.minTemp)}°C` : ''}
                    </div>
                  )}
                  <div className="text-cyan-200">{weatherLine}</div>
                </div>
              ) : (
                <span className="text-blue-300">{weatherError || '正在获取天气...'}</span>
              )}
            </div>

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
        className={`pointer-events-auto flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-blue-100 shadow-xl ${launcherToneClass}`}
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
