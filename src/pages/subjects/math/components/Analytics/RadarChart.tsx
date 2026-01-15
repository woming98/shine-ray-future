/**
 * 能力雷达图组件
 * 使用 Recharts 实现
 */

import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

interface RadarChartData {
  subject: string;
  value: number;
  fullMark: number;
}

interface RadarChartProps {
  data: RadarChartData[];
  color?: string;
}

export function RadarChart({ data, color = '#3b82f6' }: RadarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsRadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, 100]} />
        <Radar
          name="掌握程度"
          dataKey="value"
          stroke={color}
          fill={color}
          fillOpacity={0.6}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
}
