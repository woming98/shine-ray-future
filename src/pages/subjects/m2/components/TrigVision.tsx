/**
 * TrigVision 组件
 * 动态几何沙盒：可视化 Rate of Change 问题
 * 示例：汽车沿道路移动，相机观察角度变化
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useM2Store } from '../store/useStore';

// 场景参数（保留用于未来扩展）
// interface SceneParams {
//   carX: number; // 汽车 x 坐标
//   carY: number; // 汽车 y 坐标（固定为 0，在道路上）
//   cameraX: number; // 相机 x 坐标
//   cameraY: number; // 相机 y 坐标
// }

export default function TrigVision() {
  const { trigVisionParams, updateTrigVisionParams } = useM2Store();
  const [mode, setMode] = useState<'time' | 'distance'>('distance');

  // 场景参数
  const cameraX = 0;
  const cameraY = 5;
  const carY = 0;

  // 计算角度和变化率
  useEffect(() => {
    const x = trigVisionParams.x;
    const dx = x - cameraX;
    const dy = carY - cameraY;
    const theta = Math.atan2(-dy, dx); // 注意：dy 是负的，因为相机在上方

    // 计算 dθ/dt（假设 x = t，即速度 v = 1）
    // θ = arctan((y_camera - y_car) / (x_car - x_camera))
    // dθ/dt = d/dx [arctan((y_camera - y_car) / (x - x_camera))] * dx/dt
    // 设 dx/dt = v = 1
    const dThetaDx =
      (-dy) / (dx * dx + dy * dy); // d/dx arctan(-dy/dx) = -dy / (dx^2 + dy^2)
    const dThetaDt = dThetaDx * 1; // 假设速度 v = 1

    updateTrigVisionParams({
      theta,
      dThetaDt,
      t: x, // 假设 t = x
    });
  }, [trigVisionParams.x, cameraX, cameraY, carY, updateTrigVisionParams]);

  // SVG 视图参数
  const svgWidth = 800;
  const svgHeight = 400;
  const originX = 50;
  const originY = svgHeight - 50;
  const scale = 20; // 像素/单位

  // 坐标转换
  const toSvgX = (x: number) => originX + x * scale;
  const toSvgY = (y: number) => originY - y * scale;

  const carSvgX = toSvgX(trigVisionParams.x);
  const carSvgY = toSvgY(carY);
  const cameraSvgX = toSvgX(cameraX);
  const cameraSvgY = toSvgY(cameraY);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl border border-fuchsia-200 p-6 shadow-sm">
        {/* 标题和说明 */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">動態幾何可視化</h2>
          <p className="text-gray-600">
            調整汽車位置，觀察角度 θ 和變化率 dθ/dt 的實時變化
          </p>
        </div>

        {/* 控制面板 */}
        <div className="mb-6 bg-fuchsia-50 rounded-lg p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {mode === 'distance' ? '汽車位置 x' : '時間 t'}
              </label>
              <input
                type="range"
                min="0"
                max="20"
                step="0.1"
                value={trigVisionParams.x}
                onChange={(e) => updateTrigVisionParams({ x: parseFloat(e.target.value) })}
                className="w-full"
              />
              <div className="text-center text-sm text-gray-600 mt-1">
                {trigVisionParams.x.toFixed(2)}
              </div>
            </div>
            <button
              onClick={() => setMode(mode === 'distance' ? 'time' : 'distance')}
              className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 transition-colors"
            >
              切換模式
            </button>
          </div>
        </div>

        {/* SVG 可视化 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 overflow-x-auto">
          <svg width={svgWidth} height={svgHeight} className="w-full">
            {/* 坐标轴 */}
            <line
              x1={originX}
              y1={0}
              x2={originX}
              y2={svgHeight}
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            <line
              x1={0}
              y1={originY}
              x2={svgWidth}
              y2={originY}
              stroke="#cbd5e1"
              strokeWidth="2"
            />

            {/* 道路（x 轴） */}
            <line
              x1={0}
              y1={carSvgY}
              x2={svgWidth}
              y2={carSvgY}
              stroke="#94a3b8"
              strokeWidth="3"
              strokeDasharray="5,5"
            />

            {/* 连接线（相机到汽车） */}
            <line
              x1={cameraSvgX}
              y1={cameraSvgY}
              x2={carSvgX}
              y2={carSvgY}
              stroke="#f472b6"
              strokeWidth="2"
            />

            {/* 角度弧 */}
            <path
              d={`M ${cameraSvgX + 30} ${cameraSvgY} A 30 30 0 0 ${trigVisionParams.theta > 0 ? '1' : '0'} ${cameraSvgX + 30 * Math.cos(trigVisionParams.theta)} ${cameraSvgY - 30 * Math.sin(trigVisionParams.theta)}`}
              fill="none"
              stroke="#ec4899"
              strokeWidth="2"
            />

            {/* 相机位置 */}
            <circle cx={cameraSvgX} cy={cameraSvgY} r="8" fill="#8b5cf6" />
            <text
              x={cameraSvgX}
              y={cameraSvgY - 15}
              textAnchor="middle"
              className="text-sm font-medium fill-gray-700"
            >
              相機 C
            </text>

            {/* 汽车位置 */}
            <motion.circle
              cx={carSvgX}
              cy={carSvgY}
              r="10"
              fill="#f59e0b"
              animate={{ cx: carSvgX, cy: carSvgY }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <text
              x={carSvgX}
              y={carSvgY - 20}
              textAnchor="middle"
              className="text-sm font-medium fill-gray-700"
            >
              汽車
            </text>

            {/* 角度标注 */}
            <text
              x={cameraSvgX + 40}
              y={cameraSvgY - 10}
              className="text-xs fill-pink-600 font-medium"
            >
              θ
            </text>
          </svg>
        </div>

        {/* 数值显示 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-lg p-4 border border-fuchsia-200">
            <div className="text-sm text-gray-600 mb-1">角度 θ</div>
            <div className="text-2xl font-bold text-fuchsia-600">
              {(trigVisionParams.theta * (180 / Math.PI)).toFixed(2)}°
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {trigVisionParams.theta.toFixed(4)} rad
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4 border border-pink-200">
            <div className="text-sm text-gray-600 mb-1">變化率 dθ/dt</div>
            <div className="text-2xl font-bold text-pink-600">
              {trigVisionParams.dThetaDt.toFixed(4)} rad/s
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {(trigVisionParams.dThetaDt * (180 / Math.PI)).toFixed(4)}°/s
            </div>
          </div>
        </div>

        {/* 公式说明 */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">計算公式</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <div>
              <strong>θ =</strong> arctan((y_camera - y_car) / (x_car - x_camera))
            </div>
            <div>
              <strong>dθ/dt =</strong> -dy / (dx² + dy²) × v
            </div>
            <div className="text-xs text-blue-600 mt-2">
              其中 v = dx/dt = 1（假設速度為 1 單位/秒）
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
