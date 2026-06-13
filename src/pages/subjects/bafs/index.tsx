import { Navigate, Route, Routes } from 'react-router-dom'
import BAFSLayout from './components/BAFSLayout'
import Dashboard from './pages/Dashboard'
import PastPapersPage from './pages/PastPapersPage'
import ResourcesPage from './pages/ResourcesPage'
import StrandPage from './pages/StrandPage'

export default function BAFSModule() {
  return (
    <BAFSLayout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="strand/:strandId" element={<StrandPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="past-papers" element={<PastPapersPage />} />
        <Route path="*" element={<Navigate to="/subjects/bafs" replace />} />
      </Routes>
    </BAFSLayout>
  )
}
