/**
 * 几何可视化组件
 * 占位组件，后续可集成 GeoGebra API 或 p5.js/Three.js
 */

import { Card } from '../UI';
import { Shapes } from 'lucide-react';

interface GeometryViewerProps {
  type?: '2d' | '3d';
  interactive?: boolean;
}

export function GeometryViewer({ interactive = true }: GeometryViewerProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <Shapes className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">几何可视化</h3>
      </div>
      <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-dashed border-blue-200 flex items-center justify-center">
        <div className="text-center">
          <Shapes className="w-16 h-16 text-blue-300 mx-auto mb-3" />
          <p className="text-gray-600 mb-2">几何可视化功能开发中</p>
          <p className="text-sm text-gray-500">
            将集成 GeoGebra API 或使用 p5.js/Three.js 实现
          </p>
          {interactive && (
            <p className="text-xs text-gray-400 mt-2">
              支持拖动点、线、面进行互动操作
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
