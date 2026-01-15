/**
 * 数学模块卡片组件
 */

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
  const baseClasses = 'bg-white rounded-2xl p-6 border border-blue-200/50 shadow-sm';
  const hoverClasses = hover ? 'hover:shadow-md hover:border-blue-300 transition-all duration-200' : '';
  
  if (gradient) {
    return (
      <motion.div
        whileHover={hover ? { y: -2, transition: { duration: 0.2 } } : undefined}
        onClick={onClick}
        className={`${baseClasses} ${hoverClasses} ${className}`}
        style={{
          background: `linear-gradient(135deg, ${gradient})`,
        }}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <motion.div
      whileHover={hover ? { y: -2, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses} ${className}`}
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
}

export function StatCard({ icon, label, value, change, changeType = 'neutral' }: StatCardProps) {
  const changeColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-blue-600',
  };

  return (
    <Card>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              {icon}
            </div>
            <p className="text-sm text-gray-600">{label}</p>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
          {change && (
            <span className={`text-sm font-medium ${changeColors[changeType]}`}>
              {change}
            </span>
          )}
        </div>
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
  onClick: () => void;
}

export function TopicCard({ icon, nameCN, description, progress, onClick }: TopicCardProps) {
  return (
    <Card onClick={onClick} className="cursor-pointer">
      <div className="flex items-start gap-4">
        <span className="text-4xl">{icon}</span>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{nameCN}</h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-blue-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-sm font-medium text-blue-600">{progress}%</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
