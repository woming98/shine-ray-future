/**
 * DSE Math 學習模塊入口
 */

import { Routes, Route } from 'react-router-dom';
import { MathLayout } from './components/Layout/MathLayout';
import Dashboard from './pages/Dashboard';
import PracticePage from './pages/PracticePage';
import MCPage from './pages/MCPage';
import GeometryPage from './pages/GeometryPage';
import TopicPage from './pages/TopicPage';
import ReportPage from './pages/ReportPage';
import TemplatesPage from './pages/TemplatesPage';
import WrongAnswersPage from './pages/WrongAnswersPage';
import GradeCoursesPage from './pages/GradeCoursesPage';
import SprintPage from './pages/SprintPage';
import PastPapersPage from './pages/PastPapersPage';
import PastPaperDetailPage from './pages/PastPaperDetailPage';
import PastPaperSolutionsPage from './pages/PastPaperSolutionsPage';

// Math 模塊主組件
export default function MathModule() {
  return (
    <MathLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/mc" element={<MCPage />} />
        <Route path="/geometry" element={<GeometryPage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/wrong-answers" element={<WrongAnswersPage />} />
        <Route path="/grade/:gradeId" element={<GradeCoursesPage />} />
        <Route path="/sprint" element={<SprintPage />} />
        <Route path="/past-papers" element={<PastPapersPage />} />
        <Route path="/past-papers/:paperId" element={<PastPaperDetailPage />} />
        <Route path="/past-papers/:paperId/solutions" element={<PastPaperSolutionsPage />} />
      </Routes>
    </MathLayout>
  );
}
