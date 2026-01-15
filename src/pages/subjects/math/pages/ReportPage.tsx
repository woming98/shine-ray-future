/**
 * 学习报告页面
 */

import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMathStore } from '../store/useStore';
import { RadarChart } from '../components/Analytics/RadarChart';
import { ProgressChart } from '../components/Analytics/ProgressChart';
import { ErrorAnalysis } from '../components/Analytics/ErrorAnalysis';

export default function ReportPage() {
  const navigate = useNavigate();
  const { getMathReport } = useMathStore();
  const report = getMathReport();

  const radarData = [
    { subject: '数与代数', value: report.radarData['数与代数'], fullMark: 100 },
    { subject: '度量、图形与空间', value: report.radarData['度量、图形与空间'], fullMark: 100 },
    { subject: '数据处理', value: report.radarData['数据处理'], fullMark: 100 },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">学习报告</h1>
          <Button variant="ghost" onClick={() => navigate('/subjects/math')}>
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">能力雷达图</h2>
          <Card className="p-6">
            <div className="h-64">
              <RadarChart data={radarData} />
            </div>
          </Card>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">学习趋势</h2>
          <Card className="p-6">
            <div className="h-64">
              <ProgressChart data={report.progressTrend} type="area" dataKey="score" />
            </div>
          </Card>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">错题分析</h2>
          <ErrorAnalysis errorDistribution={report.errorDistribution} />
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">主题统计</h2>
          <div className="space-y-3">
            {Object.entries(report.topicStats).map(([topic, stats]) => (
              <Card key={topic} className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{topic}</span>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-600">正确率: {stats.correctRate}%</span>
                    <span className="text-gray-600">平均时间: {stats.averageTime}秒</span>
                    <span className="text-gray-600">总题数: {stats.totalQuestions}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
