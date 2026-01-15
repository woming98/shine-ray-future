import { ReactNode } from 'react';
import { useStore } from '../../store/useStore';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { sidebarOpen } = useStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 背景粒子效果 */}
      <div className="particles-bg" />
      
      {/* 导航栏 */}
      <Navbar />
      
      {/* 侧边栏 */}
      <Sidebar />
      
      {/* 主内容区 */}
      <main
        className={`pt-16 min-h-screen transition-all duration-300 ${
          sidebarOpen ? 'lg:pl-72' : ''
        }`}
      >
        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

