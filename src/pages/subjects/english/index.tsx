/**
 * DSE English 英文學習模塊入口
 */

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { EnglishLayout } from './components/Layout/EnglishLayout';
import LoadingSpinner from '../../../components/LoadingSpinner';

// 懒加载页面组件
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ReadingPage = lazy(() => import('./pages/ReadingPage'));
const WritingPage = lazy(() => import('./pages/WritingPage'));
const ListeningPage = lazy(() => import('./pages/ListeningPage'));
const SpeakingPage = lazy(() => import('./pages/SpeakingPage'));
const VocabularyPage = lazy(() => import('./pages/VocabularyPage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));
const SamplesPage = lazy(() => import('./pages/SamplesPage'));
const WrongAnswersPage = lazy(() => import('./pages/WrongAnswersPage'));

// English 模塊主組件
export default function EnglishModule() {
  return (
    <EnglishLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/listening" element={<ListeningPage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/vocabulary" element={<VocabularyPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/samples" element={<SamplesPage />} />
          <Route path="/wrong-answers" element={<WrongAnswersPage />} />
          {/* 技能路由（使用技能ID） */}
          <Route path="/:skillId" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </EnglishLayout>
  );
}
