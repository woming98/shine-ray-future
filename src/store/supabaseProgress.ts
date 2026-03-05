import { supabase } from '../supabase'
import { useStore as usePhysicsStore } from '../pages/subjects/physics/store/useStore'
import { useMathStore } from '../pages/subjects/math/store/useStore'
import { useEnglishStore } from '../pages/subjects/english/store/useStore'
import { useM2Store } from '../pages/subjects/m2/store/useStore'
import { ACHIEVEMENTS } from '../pages/subjects/physics/constants/topics'
import { MATH_ACHIEVEMENTS } from '../pages/subjects/math/constants/achievements'
import { ENGLISH_ACHIEVEMENTS } from '../pages/subjects/english/constants/achievements'

export type ProgressPayload = {
  version: number
  meta?: {
    name: string
    email: string
    syncedAt: string
  }
  physics: {
    progress: ReturnType<typeof usePhysicsStore.getState>['progress']
    achievements: ReturnType<typeof usePhysicsStore.getState>['achievements']
    wrongAnswers: ReturnType<typeof usePhysicsStore.getState>['wrongAnswers']
    stats: ReturnType<typeof usePhysicsStore.getState>['stats']
    dailyStudy: ReturnType<typeof usePhysicsStore.getState>['dailyStudy']
    exerciseProgress: ReturnType<typeof usePhysicsStore.getState>['exerciseProgress']
  }
  math: {
    practiceRecords: ReturnType<typeof useMathStore.getState>['practiceRecords']
    errorLogs: ReturnType<typeof useMathStore.getState>['errorLogs']
    topicProgress: ReturnType<typeof useMathStore.getState>['topicProgress']
    achievements: ReturnType<typeof useMathStore.getState>['achievements']
    stats: ReturnType<typeof useMathStore.getState>['stats']
    dailyStudy: ReturnType<typeof useMathStore.getState>['dailyStudy']
  }
  english: {
    practiceRecords: ReturnType<typeof useEnglishStore.getState>['practiceRecords']
    errorLogs: ReturnType<typeof useEnglishStore.getState>['errorLogs']
    skillProgress: ReturnType<typeof useEnglishStore.getState>['skillProgress']
    vocabularyBook: ReturnType<typeof useEnglishStore.getState>['vocabularyBook']
    essaySubmissions: ReturnType<typeof useEnglishStore.getState>['essaySubmissions']
    speakingRecordings: ReturnType<typeof useEnglishStore.getState>['speakingRecordings']
    achievements: ReturnType<typeof useEnglishStore.getState>['achievements']
    stats: ReturnType<typeof useEnglishStore.getState>['stats']
    dailyStudy: ReturnType<typeof useEnglishStore.getState>['dailyStudy']
  }
  m2: {
    progress: ReturnType<typeof useM2Store.getState>['progress']
    stats: ReturnType<typeof useM2Store.getState>['stats']
    expandedFormulas: ReturnType<typeof useM2Store.getState>['expandedFormulas']
    trigVisionParams: ReturnType<typeof useM2Store.getState>['trigVisionParams']
    proofProgress: ReturnType<typeof useM2Store.getState>['proofProgress']
  }
}

const buildPhysicsAchievements = () =>
  ACHIEVEMENTS.map((achievement) => ({
    ...achievement,
    progress: 0,
    unlocked: false,
  }))

const mergeAchievements = <T extends { id: string } & Record<string, any>>(
  defaults: T[],
  saved?: T[]
) => {
  const savedMap = new Map((saved || []).map((item) => [item.id, item]))
  return defaults.map((item) => {
    const stored = savedMap.get(item.id)
    if (!stored) return item
    return {
      ...item,
      progress: stored.progress ?? item.progress,
      unlocked: stored.unlocked ?? item.unlocked,
      unlockedAt: stored.unlockedAt ?? item.unlockedAt,
    }
  })
}

const buildMathAchievements = () =>
  MATH_ACHIEVEMENTS.map((achievement) => ({
    ...achievement,
    progress: 0,
    unlocked: false,
  }))

const buildEnglishAchievements = () =>
  ENGLISH_ACHIEVEMENTS.map((achievement) => ({
    ...achievement,
    progress: 0,
    unlocked: false,
  }))

export const buildProgressPayload = (): ProgressPayload => ({
  version: 1,
  meta: undefined,
  physics: {
    progress: usePhysicsStore.getState().progress,
    achievements: usePhysicsStore.getState().achievements,
    wrongAnswers: usePhysicsStore.getState().wrongAnswers,
    stats: usePhysicsStore.getState().stats,
    dailyStudy: usePhysicsStore.getState().dailyStudy,
    exerciseProgress: usePhysicsStore.getState().exerciseProgress,
  },
  math: {
    practiceRecords: useMathStore.getState().practiceRecords,
    errorLogs: useMathStore.getState().errorLogs,
    topicProgress: useMathStore.getState().topicProgress,
    achievements: useMathStore.getState().achievements,
    stats: useMathStore.getState().stats,
    dailyStudy: useMathStore.getState().dailyStudy,
  },
  english: {
    practiceRecords: useEnglishStore.getState().practiceRecords,
    errorLogs: useEnglishStore.getState().errorLogs,
    skillProgress: useEnglishStore.getState().skillProgress,
    vocabularyBook: useEnglishStore.getState().vocabularyBook,
    essaySubmissions: useEnglishStore.getState().essaySubmissions,
    speakingRecordings: useEnglishStore.getState().speakingRecordings,
    achievements: useEnglishStore.getState().achievements,
    stats: useEnglishStore.getState().stats,
    dailyStudy: useEnglishStore.getState().dailyStudy,
  },
  m2: {
    progress: useM2Store.getState().progress,
    stats: useM2Store.getState().stats,
    expandedFormulas: useM2Store.getState().expandedFormulas,
    trigVisionParams: useM2Store.getState().trigVisionParams,
    proofProgress: useM2Store.getState().proofProgress,
  },
})

export const buildProgressPayloadWithMeta = (
  meta?: Omit<NonNullable<ProgressPayload['meta']>, 'syncedAt'>
): ProgressPayload => ({
  ...buildProgressPayload(),
  meta: meta
    ? {
        ...meta,
        syncedAt: new Date().toISOString(),
      }
    : undefined,
})

export const applyProgressPayload = (payload: ProgressPayload) => {
  if (!payload) return

  if (payload.physics) {
    usePhysicsStore.setState({
      progress: payload.physics.progress ?? [],
      achievements: mergeAchievements(buildPhysicsAchievements(), payload.physics.achievements),
      wrongAnswers: payload.physics.wrongAnswers ?? [],
      stats: payload.physics.stats ?? usePhysicsStore.getState().stats,
      dailyStudy: payload.physics.dailyStudy ?? [],
      exerciseProgress: payload.physics.exerciseProgress ?? {},
    })
    usePhysicsStore.getState().evaluateAchievements()
  }

  if (payload.math) {
    useMathStore.setState({
      practiceRecords: payload.math.practiceRecords ?? [],
      errorLogs: payload.math.errorLogs ?? [],
      topicProgress: payload.math.topicProgress ?? {},
      achievements: payload.math.achievements ?? buildMathAchievements(),
      stats: payload.math.stats ?? useMathStore.getState().stats,
      dailyStudy: payload.math.dailyStudy ?? [],
    })
  }

  if (payload.english) {
    useEnglishStore.setState({
      practiceRecords: payload.english.practiceRecords ?? [],
      errorLogs: payload.english.errorLogs ?? [],
      skillProgress: payload.english.skillProgress ?? {},
      vocabularyBook: payload.english.vocabularyBook ?? null,
      essaySubmissions: payload.english.essaySubmissions ?? [],
      speakingRecordings: payload.english.speakingRecordings ?? [],
      achievements: payload.english.achievements ?? buildEnglishAchievements(),
      stats: payload.english.stats ?? useEnglishStore.getState().stats,
      dailyStudy: payload.english.dailyStudy ?? [],
    })
  }

  if (payload.m2) {
    useM2Store.setState({
      progress: payload.m2.progress ?? [],
      stats: payload.m2.stats ?? useM2Store.getState().stats,
      expandedFormulas: payload.m2.expandedFormulas ?? [],
      trigVisionParams: payload.m2.trigVisionParams ?? useM2Store.getState().trigVisionParams,
      proofProgress: payload.m2.proofProgress ?? {},
    })
  }
}

export const resetProgressStores = () => {
  usePhysicsStore.setState({
    progress: [],
    achievements: buildPhysicsAchievements(),
    wrongAnswers: [],
    stats: {
      totalStudyTime: 0,
      topicsCompleted: 0,
      exercisesSolved: 0,
      averageScore: 0,
      correctStreak: 0,
      bestCorrectStreak: 0,
      currentStreak: 0,
      longestStreak: 0,
      weeklyGoal: 300,
      weeklyProgress: 0,
    },
    dailyStudy: [],
    exerciseProgress: {},
  })

  useMathStore.setState({
    practiceRecords: [],
    errorLogs: [],
    topicProgress: {},
    achievements: buildMathAchievements(),
    stats: {
      totalStudyTime: 0,
      topicsCompleted: 0,
      exercisesSolved: 0,
      averageScore: 0,
      currentStreak: 0,
      longestStreak: 0,
      weeklyGoal: 300,
      weeklyProgress: 0,
    },
    dailyStudy: [],
  })

  useEnglishStore.setState({
    practiceRecords: [],
    errorLogs: [],
    skillProgress: {},
    vocabularyBook: null,
    essaySubmissions: [],
    speakingRecordings: [],
    achievements: buildEnglishAchievements(),
    stats: {
      totalStudyTime: 0,
      skillsCompleted: 0,
      exercisesSolved: 0,
      averageScore: 0,
      currentStreak: 0,
      longestStreak: 0,
      weeklyGoal: 300,
      weeklyProgress: 0,
    },
    dailyStudy: [],
  })

  useM2Store.setState({
    progress: [],
    stats: {
      totalStudyTime: 0,
      formulasMastered: 0,
      proofsCompleted: 0,
      currentStreak: 0,
    },
    expandedFormulas: [],
    trigVisionParams: {
      t: 0,
      x: 0,
      theta: 0,
      dThetaDt: 0,
    },
    proofProgress: {},
  })
}

export const fetchUserProgress = async (userId: string) => {
  if (!supabase) {
    return { payload: null, error: new Error('Supabase not configured') }
  }

  const { data, error } = await supabase
    .from('user_progress')
    .select('payload')
    .eq('user_id', userId)
    .maybeSingle()

  if (error) {
    return { payload: null, error }
  }

  return { payload: (data?.payload as ProgressPayload | null) ?? null, error: null }
}

export const saveUserProgress = async (userId: string, payload: ProgressPayload) => {
  if (!supabase) {
    return { error: new Error('Supabase not configured') }
  }

  const { error } = await supabase
    .from('user_progress')
    .upsert(
      {
        user_id: userId,
        payload,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    )

  return { error }
}
