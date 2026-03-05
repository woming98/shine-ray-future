/**
 * 能力雷达图组件
 * 使用 Recharts 实现四大技能的雷达图
 */

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface SkillRadarChartProps {
  data: {
    Reading: number;
    Writing: number;
    Listening: number;
    Speaking: number;
  };
}

export function SkillRadarChart({ data }: SkillRadarChartProps) {
  const chartData = [
    { skill: 'Reading', value: data.Reading, fullMark: 100 },
    { skill: 'Writing', value: data.Writing, fullMark: 100 },
    { skill: 'Listening', value: data.Listening, fullMark: 100 },
    { skill: 'Speaking', value: data.Speaking, fullMark: 100 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={chartData}>
        <PolarGrid stroke="#e5e7eb" />
        <PolarAngleAxis
          dataKey="skill"
          tick={{ fill: '#374151', fontSize: 14 }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fill: '#6b7280', fontSize: 12 }}
        />
        <Radar
          name="能力值"
          dataKey="value"
          stroke="#10b981"
          fill="#10b981"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}
