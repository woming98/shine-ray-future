import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const TopicPage = lazy(() => import('./pages/TopicPage'))
const CellViewerPage = lazy(() => import('./pages/CellViewerPage'))
const FlashcardsPage = lazy(() => import('./pages/FlashcardsPage'))
const MicroscopePage = lazy(() => import('./pages/MicroscopePage'))
const ProgressPage = lazy(() => import('./pages/ProgressPage'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topic/:topicId" element={<TopicPage />} />
          <Route path="/cell-viewer" element={<CellViewerPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/flashcards/:deckId" element={<FlashcardsPage />} />
          <Route path="/microscope" element={<MicroscopePage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
