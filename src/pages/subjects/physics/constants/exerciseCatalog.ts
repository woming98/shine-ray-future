import { ELECTRICITY_MAGNETISM_EXERCISES } from './electricityMagnetism'
import { ELECTRICITY_MAGNETISM_SECTIONS } from './electricityMagnetismSections'
import { FORCE_MOTION_EXERCISES } from './forceMotion'
import { FORCE_MOTION_SECTIONS } from './forceMotionSections'
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
  'force-motion': {
    topicId: 'force-motion',
    chapterId: 'fm-ch1',
    defaultSectionId: 'position-movement',
    sections: FORCE_MOTION_SECTIONS,
    exercises: FORCE_MOTION_EXERCISES,
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
