/**
 * M2 主题列表
 */

import { M2Topic } from '../types';

export const M2_TOPICS: M2Topic[] = [
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    nameZh: '三角學',
    icon: '📐',
    description: '三角函数、恒等式、Rate of Change',
    path: '/subjects/m2/trigonometry',
  },
  {
    id: 'complex-numbers',
    name: 'Complex Numbers',
    nameZh: '複數',
    icon: '🔢',
    description: '复数运算、极坐标、De Moivre 定理',
    path: '/subjects/m2/complex-numbers',
  },
  {
    id: 'matrices',
    name: 'Matrices',
    nameZh: '矩陣',
    icon: '📊',
    description: '矩阵运算、行列式、逆矩阵',
    path: '/subjects/m2/matrices',
  },
  {
    id: 'vectors',
    name: 'Vectors',
    nameZh: '向量',
    icon: '➡️',
    description: '向量运算、点积、叉积',
    path: '/subjects/m2/vectors',
  },
  {
    id: 'conic-sections',
    name: 'Conic Sections',
    nameZh: '圓錐曲線',
    icon: '⭕',
    description: '椭圆、双曲线、抛物线',
    path: '/subjects/m2/conic-sections',
  },
  {
    id: 'coordinate-geometry',
    name: 'Coordinate Geometry',
    nameZh: '坐標幾何',
    icon: '📈',
    description: '坐标变换、参数方程',
    path: '/subjects/m2/coordinate-geometry',
  },
];
