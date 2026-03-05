import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = true, gradient, onClick }: CardProps) {
  // For gradient cards, use gradient background with enhanced glow
  if (gradient) {
    const baseBgClass = `bg-gradient-to-br ${gradient}`;
    const finalClassName = `
      ${baseBgClass} backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 
      shadow-lg shadow-blue-500/20
      ${hover ? 'cursor-pointer hover:shadow-xl hover:shadow-blue-500/30 hover:border-blue-500/50' : ''}
      ${className}
    `.trim();
    
    return (
      <motion.div
        whileHover={hover ? { y: -5, scale: 1.02, transition: { duration: 0.2 } } : undefined}
        onClick={onClick}
        className={finalClassName}
      >
        {children}
      </motion.div>
    );
  }
  
  // For non-gradient cards, use glassmorphism tech style
  return (
    <motion.div
      whileHover={hover ? { y: -2, scale: 1.01, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={`relative group ${hover ? 'cursor-pointer' : ''} ${className}`.trim()}
    >
      {/* 发光边框效果 */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
      
      {/* 玻璃态卡片 */}
      <div className="relative tech-card p-6">
        {/* 扫描线动画 */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
          />
        </div>
        
        {/* 内容 */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  gradient?: string;
}

export function StatCard({ icon, label, value, change, changeType = 'neutral' }: StatCardProps) {
  const changeColors = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-blue-400',
  };

  return (
    <div className="relative group">
      {/* 发光边框 */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
      
      {/* 卡片内容 */}
      <div className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 rounded-xl p-6 overflow-hidden">
        {/* 背景光效 */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-400/50 shadow-lg shadow-blue-500/30">
              {icon}
            </div>
            {change && (
              <span className={`text-sm font-medium ${changeColors[changeType]}`}>
                {change}
              </span>
            )}
          </div>
          <div>
            {/* 霓虹数字效果 */}
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-4xl font-bold neon-text mb-2"
            >
              {value}
            </motion.p>
            <p className="text-blue-200 text-sm">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TopicCardProps {
  icon: string;
  name: string;
  nameCN: string;
  description: string;
  progress: number;
  gradient: string;
  onClick?: () => void;
}

export function TopicCard({ icon, name, nameCN, description, progress, gradient, onClick }: TopicCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
    >
      {/* 背景渐变 */}
      <div className={`absolute inset-0 ${gradient} opacity-80`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* 装饰圆形 */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative p-6 h-full flex flex-col">
        <span className="text-4xl mb-4">{icon}</span>
        <h3 className="text-white font-bold text-xl mb-1">{nameCN}</h3>
        <p className="text-white/70 text-sm mb-4">{name}</p>
        <p className="text-white/60 text-sm flex-1 line-clamp-2">{description}</p>
        
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-sm">学习进度</span>
            <span className="text-white font-semibold">{progress}%</span>
          </div>
          <div className="h-2 bg-black/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-white/80 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

