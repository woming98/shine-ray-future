import { ReactNode, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  FileText,
  Home,
  Library,
  Menu,
  Receipt,
  X,
} from 'lucide-react'

interface BAFSLayoutProps {
  children: ReactNode
}

const navItems = [
  { path: '/subjects/bafs', label: '學習中心', icon: Home, exact: true },
  { path: '/subjects/bafs/strand/accounting', label: '會計學習線', icon: Receipt },
  { path: '/subjects/bafs/strand/business', label: '商業管理線', icon: Briefcase },
  { path: '/subjects/bafs/resources', label: '課程資源', icon: Library },
  { path: '/subjects/bafs/past-papers', label: 'HKDSE 真題', icon: FileText },
]

export default function BAFSLayout({ children }: BAFSLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isActive = (path: string, exact?: boolean) =>
    exact ? location.pathname === path : location.pathname.startsWith(path)

  return (
    <div className="min-h-screen bg-[#f5f7f6] text-slate-900">
      <div className="fixed top-16 md:top-20 left-0 right-0 z-40 h-14 border-b border-emerald-900/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-label="開啟會計學科選單"
              onClick={() => setSidebarOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-emerald-800 hover:bg-emerald-50 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/subjects')}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-800"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">返回學科列表</span>
            </button>
          </div>
          <Link to="/subjects/bafs" className="flex items-center gap-2 font-bold text-emerald-950">
            <Receipt className="h-5 w-5 text-amber-600" />
            <span>DSE 會計</span>
            <span className="hidden text-xs font-medium text-slate-500 sm:inline">BAFS</span>
          </Link>
        </div>
      </div>

      {sidebarOpen && (
        <button
          type="button"
          aria-label="關閉會計學科選單"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/25 lg:hidden"
        />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-[120px] md:top-[136px] z-50 w-64 border-r border-emerald-900/10 bg-white transition-transform lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-slate-100 px-5 lg:hidden">
          <span className="text-sm font-bold text-emerald-950">會計學習目錄</span>
          <button
            type="button"
            aria-label="關閉選單"
            onClick={() => setSidebarOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-slate-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="p-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase text-slate-400">BAFS 學習目錄</p>
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path, item.exact)
                    ? 'bg-emerald-50 text-emerald-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                <item.icon className={`h-4 w-4 ${isActive(item.path, item.exact) ? 'text-amber-600' : ''}`} />
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 border-t border-slate-100 pt-5">
            <div className="flex items-start gap-3 rounded-md bg-amber-50 p-3">
              <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-700" />
              <p className="text-xs leading-5 text-amber-900">
                課程框架已上線，教材內容與練習將分批整理。
              </p>
            </div>
          </div>
        </nav>
      </aside>

      <main className="min-h-screen pt-[120px] md:pt-[136px] lg:pl-64">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
      </main>
    </div>
  )
}
