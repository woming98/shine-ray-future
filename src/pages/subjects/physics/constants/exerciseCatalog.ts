import { ELECTRICITY_MAGNETISM_EXERCISES } from './electricityMagnetism'
import { ELECTRICITY_MAGNETISM_SECTIONS } from './electricityMagnetismSections'
import { FORCE_MOTION_EXERCISES } from './forceMotion'
import { FORCE_MOTION_SECTIONS } from './forceMotionSections'
import { TEMPERATURE_GAS_EXERCISES } from './temperatureGas'
import { TEMPERATURE_GAS_SECTIONS } from './temperatureGasSections'
import { WAVE_MOTION_SECTIONS } from './waveMotionSections'
import { Exercise } from '../types'

export interface PhysicsExerciseCatalogEntry {
  topicId: string
  chapterId: string
  defaultSectionId?: string
  sections: Array<{
    id: string
    name: string
    nameCN: string
    description: string
  }>
  exercises: Exercise[]
}

export const PHYSICS_EXERCISE_CATALOG: Record<string, PhysicsExerciseCatalogEntry> = {
  'temperature-gas': {
    topicId: 'temperature-gas',
    chapterId: 'tg-ch1',
    defaultSectionId: 'temp-heat-internal',
    sections: TEMPERATURE_GAS_SECTIONS,
    exercises: TEMPERATURE_GAS_EXERCISES,
  },
  'force-motion': {
    topicId: 'force-motion',
    chapterId: 'fm-ch1',
    defaultSectionId: 'position-movement',
    sections: FORCE_MOTION_SECTIONS,
    exercises: FORCE_MOTION_EXERCISES,
  },
  'wave-motion': {
    topicId: 'wave-motion',
    chapterId: 'wm-ch1',
    defaultSectionId: 'optics-propagation',
    sections: WAVE_MOTION_SECTIONS,
    exercises: FORCE_MOTION_EXERCISES.filter((exercise) =>
      WAVE_MOTION_SECTIONS.some((section) => section.id === exercise.sectionId)
    ),
  },
  'electricity-magnetism': {
    topicId: 'electricity-magnetism',
    chapterId: 'em-ch1',
    defaultSectionId: 'electrostatics',
    sections: ELECTRICITY_MAGNETISM_SECTIONS,
    exercises: ELECTRICITY_MAGNETISM_EXERCISES,
  },
}

export const PHYSICS_ALL_EXERCISES = Object.values(PHYSICS_EXERCISE_CATALOG).flatMap(
  (entry) => entry.exercises
)

export const getPhysicsExerciseCatalogEntry = (topicId?: string) => {
  if (topicId && PHYSICS_EXERCISE_CATALOG[topicId]) {
    return PHYSICS_EXERCISE_CATALOG[topicId]
  }
  return PHYSICS_EXERCISE_CATALOG['force-motion']
}
