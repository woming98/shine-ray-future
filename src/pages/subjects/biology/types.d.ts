// 為 Biology JSX 模塊提供類型聲明

declare module './pages/HomePage' {
  const HomePage: React.ComponentType;
  export default HomePage;
}

declare module './pages/TopicPage' {
  const TopicPage: React.ComponentType;
  export default TopicPage;
}

declare module './pages/CellViewerPage' {
  const CellViewerPage: React.ComponentType;
  export default CellViewerPage;
}

declare module './pages/FlashcardsPage' {
  const FlashcardsPage: React.ComponentType;
  export default FlashcardsPage;
}

declare module './pages/MicroscopePage' {
  const MicroscopePage: React.ComponentType;
  export default MicroscopePage;
}

declare module './pages/ProgressPage' {
  const ProgressPage: React.ComponentType;
  export default ProgressPage;
}

declare module './components/Layout' {
  const Layout: React.ComponentType<{ children: React.ReactNode }>;
  export default Layout;
}

declare module './components/LoadingScreen' {
  const LoadingScreen: React.ComponentType;
  export default LoadingScreen;
}
