/**
 * 互动图形组件
 * 预设 HKDSE 常考几何案例
 */

import { useState } from 'react';
import { Card } from '../UI';
import { GeometryViewer } from './GeometryViewer';
import { Button } from '../UI/Button';

interface GeometryCase {
  id: string;
  title: string;
  description: string;
  type: '2d' | '3d';
}

const geometryCases: GeometryCase[] = [
  {
    id: 'triangle',
    title: '三角形',
    description: '探索三角形的性质、内角和、外角等',
    type: '2d',
  },
  {
    id: 'circle',
    title: '圆',
    description: '学习圆的周长、面积、弧长等',
    type: '2d',
  },
  {
    id: 'coordinate',
    title: '坐标几何',
    description: '直线方程、圆的方程、距离公式等',
    type: '2d',
  },
  {
    id: 'trigonometry',
    title: '三角函数',
    description: '正弦、余弦、正切函数的图像和性质',
    type: '2d',
  },
  {
    id: '3d-shapes',
    title: '立体几何',
    description: '正方体、长方体、圆柱、圆锥等',
    type: '3d',
  },
];

export function InteractiveShape() {
  const [selectedCase, setSelectedCase] = useState<GeometryCase | null>(null);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">预设几何案例</h2>
        <p className="text-gray-600 mb-6">
          选择以下 HKDSE 常考几何案例进行互动学习：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {geometryCases.map((geometryCase) => (
            <Card
              key={geometryCase.id}
              className="p-4 cursor-pointer hover:border-blue-300 transition-colors"
              onClick={() => setSelectedCase(geometryCase)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{geometryCase.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{geometryCase.description}</p>
                </div>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                  {geometryCase.type.toUpperCase()}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {selectedCase && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">{selectedCase.title}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCase(null)}
            >
              关闭
            </Button>
          </div>
          <GeometryViewer type={selectedCase.type} interactive={true} />
        </div>
      )}
    </div>
  );
}
