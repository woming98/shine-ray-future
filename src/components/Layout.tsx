import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

/**
 * 网站整体布局组件
 * 包含顶部导航、主内容区域和底部页脚
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航栏 */}
      <Header />
      
      {/* 主内容区域 */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* 底部页脚 */}
      <Footer />
    </div>
  )
}
