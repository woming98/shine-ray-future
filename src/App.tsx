/**
 * 应用主入口
 * 定义路由结构
 */

import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'
import SupabaseSync from './components/SupabaseSync'

// 懒加载页面组件
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const UserCenter = lazy(() => import('./pages/UserCenter'))
const PhysicsProgress = lazy(() => import('./pages/PhysicsProgress'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))

// 插班模块
const AdmissionHub = lazy(() => import('./pages/admission/index'))
const Rankings = lazy(() => import('./pages/admission/Rankings'))
const TransferInfo = lazy(() => import('./pages/admission/Info'))
const TestHub = lazy(() => import('./pages/admission/test/index'))
const EnglishTest = lazy(() => import('./pages/EnglishTest'))
const MathTest = lazy(() => import('./pages/MathTest'))

// 学科学习模块
const SubjectHub = lazy(() => import('./pages/subjects/index'))
const EnglishModule = lazy(() => import('./pages/subjects/english/index'))
const ChineseSubject = lazy(() => import('./pages/subjects/Chinese'))
const M1Subject = lazy(() => import('./pages/subjects/M1'))
// const M2Subject = lazy(() => import('./pages/subjects/M2')) // 已迁移到新模块
const M2Module = lazy(() => import('./pages/subjects/m2/index'))
const PhysicsModule = lazy(() => import('./pages/subjects/physics/index'))
const BiologyModule = lazy(() => import('./pages/subjects/biology/index'))
const MathModule = lazy(() => import('./pages/subjects/math/index'))
const ChemistrySubject = lazy(() => import('./pages/subjects/Chemistry'))
const EconomicsSubject = lazy(() => import('./pages/subjects/Economics'))
const BAFSSubject = lazy(() => import('./pages/subjects/BAFS'))

// 升学信息模块
const UniversityHub = lazy(() => import('./pages/university/index'))
const JupasCalculator = lazy(() => import('./pages/university/JUPAS'))
const Requirements = lazy(() => import('./pages/university/Requirements'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SupabaseSync />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 首页 */}
          <Route index element={<Home />} />
          
          {/* 插班模块 */}
          <Route path="admission">
            <Route index element={<AdmissionHub />} />
            <Route path="rankings" element={<Rankings />} />
            <Route path="info" element={<TransferInfo />} />
            <Route path="test">
              <Route index element={<TestHub />} />
              <Route path="english" element={<EnglishTest />} />
              <Route path="math" element={<MathTest />} />
            </Route>
          </Route>
          
          {/* 旧路由兼容 - 重定向到新路径 */}
          <Route path="schools" element={<Rankings />} />
          <Route path="english-test" element={<EnglishTest />} />
          <Route path="math-test" element={<MathTest />} />
          
          {/* 獨立學科模塊 - 放在前面确保优先匹配 */}
          <Route path="subjects/physics/*" element={<PhysicsModule />} />
          <Route path="subjects/biology/*" element={<BiologyModule />} />
          <Route path="subjects/math/*" element={<MathModule />} />
          <Route path="subjects/m2/*" element={<M2Module />} />
          <Route path="subjects/english/*" element={<EnglishModule />} />
          
          {/* 学科学习模块 */}
          <Route path="subjects">
            <Route index element={<SubjectHub />} />
            {/* 英文模块有自己的子路由，不需要单独的 english 路由 */}
            <Route path="chinese" element={<ChineseSubject />} />
            <Route path="m1" element={<M1Subject />} />
            {/* M2 已改为模块路由，使用 subjects/m2/* */}
            {/* <Route path="m2" element={<M2Subject />} /> */}
            <Route path="chemistry" element={<ChemistrySubject />} />
            <Route path="economics" element={<EconomicsSubject />} />
            <Route path="bafs" element={<BAFSSubject />} />
          </Route>
          
          {/* 升学信息模块 */}
          <Route path="university">
            <Route index element={<UniversityHub />} />
            <Route path="jupas" element={<JupasCalculator />} />
            <Route path="requirements" element={<Requirements />} />
          </Route>
          
          {/* 其他页面 */}
          <Route path="about" element={<About />} />
          <Route path="user" element={<UserCenter />} />
          <Route path="user/physics-progress" element={<PhysicsProgress />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
