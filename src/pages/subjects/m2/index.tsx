/**
 * M2 模块入口
 * 配置路由和布局
 */

import { Routes, Route } from 'react-router-dom';
import { M2Layout } from './components/Layout/M2Layout';
import Dashboard from './pages/Dashboard';
import TrigonometryHub from './pages/TrigonometryHub';

export default function M2Module() {
  return (
    <M2Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trigonometry" element={<TrigonometryHub />} />
      </Routes>
    </M2Layout>
  );
}
