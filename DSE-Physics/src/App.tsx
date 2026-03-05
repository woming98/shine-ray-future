import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import TopicPage from './pages/TopicPage';
import QuizPage from './pages/QuizPage';
import AchievementsPage from './pages/AchievementsPage';
import WrongAnswersPage from './pages/WrongAnswersPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/topic/:topicId" element={<TopicPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/mock-exam" element={<QuizPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/wrong-answers" element={<WrongAnswersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

