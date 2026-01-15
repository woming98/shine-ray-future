/**
 * 学习报告页面
 * 实现能力雷达图、错误分布、学习趋势
 */

import { useState } from 'react';
import { BarChart3, Download } from 'lucide-react';
import { useEnglishStore } from '../store/useStore';
import { SkillRadarChart } from '../components/Analytics/SkillRadarChart';
import { ErrorDistributionChart } from '../components/Analytics/ErrorDistributionChart';
import { ProgressTrendChart } from '../components/Analytics/ProgressTrendChart';
import { Card, Button } from '../components/UI';

export default function ReportPage() {
  const { getEnglishReport } = useEnglishStore();
  const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');
  const report = getEnglishReport();

  const handleDownload = () => {
    // 实际应用中可以生成 PDF 或导出数据
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `english-report-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-emerald-600" />
            学习报告
          </h1>
          <Button variant="secondary" onClick={handleDownload} icon={<Download className="w-4 h-4" />}>
            导出报告
          </Button>
        </div>

        {/* 能力雷达图 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">四大核心技能</h2>
          <Card className="p-6">
            <SkillRadarChart data={report.radarData} />
          </Card>
        </div>

        {/* 技能统计 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">技能详细统计</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(report.skillStats).map(([skill, stats]) => (
              <Card key={skill} className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{skill}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">正确率：</span>
                    <span className="font-medium text-emerald-600">{stats.correctRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">平均用时：</span>
                    <span className="font-medium text-gray-900">{stats.averageTime}秒</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">总题数：</span>
                    <span className="font-medium text-gray-900">{stats.totalQuestions}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 错误分布 */}
        {Object.keys(report.errorDistribution).length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">错误类型分布</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setChartType('bar')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    chartType === 'bar'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  柱状图
                </button>
                <button
                  onClick={() => setChartType('pie')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    chartType === 'pie'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  饼图
                </button>
              </div>
            </div>
            <Card className="p-6">
              <ErrorDistributionChart data={report.errorDistribution} type={chartType} />
            </Card>
          </div>
        )}

        {/* 学习趋势 */}
        {report.progressTrend.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">学习进度趋势</h2>
            <Card className="p-6">
              <ProgressTrendChart data={report.progressTrend} />
            </Card>
          </div>
        )}
      </Card>
    </div>
  );
}
