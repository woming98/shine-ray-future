import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set, get) => ({
      // User progress
      progress: {
        completedTopics: [],
        flashcardsReviewed: 0,
        quizScores: {},
        totalStudyTime: 0,
        lastStudyDate: null,
      },
      
      // Current study session
      currentTopic: null,
      currentModule: null,
      
      // Cell viewer state
      cellType: 'animal', // 'animal' or 'plant'
      selectedOrganelle: null,
      
      // Microscope state
      microscopeZoom: 1,
      microscopeSample: null,
      
      // Flashcard state
      currentDeck: null,
      cardIndex: 0,
      showAnswer: false,
      
      // Actions
      setCurrentTopic: (topic) => set({ currentTopic: topic }),
      setCurrentModule: (module) => set({ currentModule: module }),
      
      setCellType: (type) => set({ cellType: type }),
      setSelectedOrganelle: (organelle) => set({ selectedOrganelle: organelle }),
      
      setMicroscopeZoom: (zoom) => set({ microscopeZoom: Math.max(1, Math.min(10, zoom)) }),
      setMicroscopeSample: (sample) => set({ microscopeSample: sample }),
      
      setCurrentDeck: (deck) => set({ currentDeck: deck, cardIndex: 0, showAnswer: false }),
      nextCard: () => {
        const { currentDeck, cardIndex } = get()
        if (currentDeck && cardIndex < currentDeck.cards.length - 1) {
          set({ cardIndex: cardIndex + 1, showAnswer: false })
        }
      },
      prevCard: () => {
        const { cardIndex } = get()
        if (cardIndex > 0) {
          set({ cardIndex: cardIndex - 1, showAnswer: false })
        }
      },
      toggleAnswer: () => set((state) => ({ showAnswer: !state.showAnswer })),
      
      // Progress tracking
      markTopicComplete: (topicId) => set((state) => ({
        progress: {
          ...state.progress,
          completedTopics: [...new Set([...state.progress.completedTopics, topicId])],
        }
      })),
      
      incrementFlashcardsReviewed: () => set((state) => ({
        progress: {
          ...state.progress,
          flashcardsReviewed: state.progress.flashcardsReviewed + 1,
        }
      })),
      
      saveQuizScore: (quizId, score) => set((state) => ({
        progress: {
          ...state.progress,
          quizScores: {
            ...state.progress.quizScores,
            [quizId]: score,
          }
        }
      })),
      
      updateStudyTime: (minutes) => set((state) => ({
        progress: {
          ...state.progress,
          totalStudyTime: state.progress.totalStudyTime + minutes,
          lastStudyDate: new Date().toISOString(),
        }
      })),
      
      resetProgress: () => set({
        progress: {
          completedTopics: [],
          flashcardsReviewed: 0,
          quizScores: {},
          totalStudyTime: 0,
          lastStudyDate: null,
        }
      }),
    }),
    {
      name: 'dse-biology-storage',
    }
  )
)
