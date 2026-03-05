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
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={`
        glass rounded-2xl p-6 
        ${hover ? 'card-hover cursor-pointer' : ''}
        ${gradient ? `bg-gradient-to-br ${gradient}` : ''}
        ${className}
      `}
    >
      {children}
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

export function StatCard({ icon, label, value, change, changeType = 'neutral', gradient }: StatCardProps) {
  const changeColors = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-slate-400',
  };

  return (
    <Card className={gradient}>
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-xl bg-white/10">
          {icon}
        </div>
        {change && (
          <span className={`text-sm font-medium ${changeColors[changeType]}`}>
            {change}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className="text-slate-400 text-sm mt-1">{label}</p>
      </div>
    </Card>
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

