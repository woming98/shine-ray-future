/**
 * 错题分析组件
 * 按主题、难度、错误类型分析
 */

import { Card } from '../UI';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ErrorAnalysisProps {
  errorDistribution: Record<string, number>;
  difficultyDistribution?: Record<string, number>;
}

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export function ErrorAnalysis({
  errorDistribution,
  difficultyDistribution,
}: ErrorAnalysisProps) {
  // 转换数据格式
  const barData = Object.entries(errorDistribution).map(([topic, count]) => ({
    topic,
    count,
  }));

  const pieData = difficultyDistribution
    ? Object.entries(difficultyDistribution).map(([difficulty, count]) => ({
        name: difficulty === 'easy' ? '简单' : difficulty === 'medium' ? '中等' : '困难',
        value: count,
      }))
    : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 错题主题分布 - 柱状图 */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">错题主题分布</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="topic"
                stroke="#6b7280"
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <YAxis
                stroke="#6b7280"
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 错题难度分布 - 饼图 */}
      {pieData.length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">错题难度分布</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}
    </div>
  );
}
