/**
 * M2 三角函数公式数据
 */

import { Formula } from '../types';

export const TRIGONOMETRY_FORMULAS: Formula[] = [
  {
    id: 'compound-angle-sin',
    name: 'Compound Angle - Sine',
    nameZh: '複角公式 - 正弦',
    latex: '\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B',
    category: 'compound-angle',
    derivation: [
      {
        step: 1,
        description: '从单位圆上的点开始',
        latex: 'P(\\cos A, \\sin A), Q(\\cos B, \\sin B)',
      },
      {
        step: 2,
        description: '使用距离公式',
        latex: 'PQ^2 = (\\cos A - \\cos B)^2 + (\\sin A - \\sin B)^2',
      },
      {
        step: 3,
        description: '展开并化简',
        latex: 'PQ^2 = 2 - 2(\\cos A \\cos B + \\sin A \\sin B)',
      },
      {
        step: 4,
        description: '使用余弦定理',
        latex: 'PQ^2 = 2 - 2\\cos(A - B)',
      },
      {
        step: 5,
        description: '比较得到余弦差角公式',
        latex: '\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B',
        identity: 'cosine-difference',
      },
      {
        step: 6,
        description: '利用 \\cos(A + B) = \\cos(A - (-B))',
        latex: '\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B',
        identity: 'cosine-sum',
      },
      {
        step: 7,
        description: '利用 \\sin \\theta = \\cos(\\frac{\\pi}{2} - \\theta)',
        latex: '\\sin(A + B) = \\cos(\\frac{\\pi}{2} - A - B)',
      },
      {
        step: 8,
        description: '展开并应用余弦和角公式',
        latex: '\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B',
        identity: 'sine-sum',
      },
    ],
  },
  {
    id: 'compound-angle-cos',
    name: 'Compound Angle - Cosine',
    nameZh: '複角公式 - 餘弦',
    latex: '\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B',
    category: 'compound-angle',
    derivation: [
      {
        step: 1,
        description: '从单位圆上的点开始',
        latex: 'P(\\cos A, \\sin A), Q(\\cos B, \\sin B)',
      },
      {
        step: 2,
        description: '使用距离公式和余弦定理',
        latex: 'PQ^2 = 2 - 2\\cos(A - B)',
      },
      {
        step: 3,
        description: '展开距离公式',
        latex: 'PQ^2 = (\\cos A - \\cos B)^2 + (\\sin A - \\sin B)^2',
      },
      {
        step: 4,
        description: '化简得到',
        latex: '\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B',
        identity: 'cosine-difference',
      },
      {
        step: 5,
        description: '将 B 替换为 -B',
        latex: '\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B',
        identity: 'cosine-sum',
      },
    ],
  },
  {
    id: 'double-angle-sin',
    name: 'Double Angle - Sine',
    nameZh: '倍角公式 - 正弦',
    latex: '\\sin 2A = 2\\sin A \\cos A',
    category: 'double-angle',
    derivation: [
      {
        step: 1,
        description: '从正弦和角公式开始',
        latex: '\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B',
        identity: 'sine-sum',
      },
      {
        step: 2,
        description: '令 B = A',
        latex: '\\sin(A + A) = \\sin A \\cos A + \\cos A \\sin A',
      },
      {
        step: 3,
        description: '化简得到',
        latex: '\\sin 2A = 2\\sin A \\cos A',
        identity: 'sine-double',
      },
    ],
  },
  {
    id: 'double-angle-cos',
    name: 'Double Angle - Cosine',
    nameZh: '倍角公式 - 餘弦',
    latex: '\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A',
    category: 'double-angle',
    derivation: [
      {
        step: 1,
        description: '从余弦和角公式开始',
        latex: '\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B',
        identity: 'cosine-sum',
      },
      {
        step: 2,
        description: '令 B = A',
        latex: '\\cos(A + A) = \\cos A \\cos A - \\sin A \\sin A',
      },
      {
        step: 3,
        description: '得到第一个形式',
        latex: '\\cos 2A = \\cos^2 A - \\sin^2 A',
        identity: 'cosine-double-1',
      },
      {
        step: 4,
        description: '使用恒等式 \\sin^2 A + \\cos^2 A = 1',
        latex: '\\cos 2A = \\cos^2 A - (1 - \\cos^2 A)',
        identity: 'pythagorean',
      },
      {
        step: 5,
        description: '化简得到第二个形式',
        latex: '\\cos 2A = 2\\cos^2 A - 1',
        identity: 'cosine-double-2',
      },
      {
        step: 6,
        description: '或使用 \\cos^2 A = 1 - \\sin^2 A',
        latex: '\\cos 2A = 1 - 2\\sin^2 A',
        identity: 'cosine-double-3',
      },
    ],
  },
  {
    id: 'sum-to-product',
    name: 'Sum to Product',
    nameZh: '和化積',
    latex: '\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}',
    category: 'sum-to-product',
    derivation: [
      {
        step: 1,
        description: '设 P = A + B, Q = A - B',
        latex: 'A = \\frac{P+Q}{2}, B = \\frac{P-Q}{2}',
      },
      {
        step: 2,
        description: '应用正弦和角公式',
        latex: '\\sin A = \\sin\\frac{P+Q}{2} = \\sin\\frac{P}{2}\\cos\\frac{Q}{2} + \\cos\\frac{P}{2}\\sin\\frac{Q}{2}',
      },
      {
        step: 3,
        description: '应用正弦差角公式',
        latex: '\\sin B = \\sin\\frac{P-Q}{2} = \\sin\\frac{P}{2}\\cos\\frac{Q}{2} - \\cos\\frac{P}{2}\\sin\\frac{Q}{2}',
      },
      {
        step: 4,
        description: '相加得到',
        latex: '\\sin A + \\sin B = 2\\sin\\frac{P}{2}\\cos\\frac{Q}{2}',
      },
      {
        step: 5,
        description: '代回 P 和 Q',
        latex: '\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}',
        identity: 'sum-to-product-sine',
      },
    ],
  },
  {
    id: 'integration-by-parts',
    name: 'Integration by Parts',
    nameZh: '分部積分法',
    latex: '\\int u\\,dv = uv - \\int v\\,du',
    category: 'other',
    derivation: [
      {
        step: 1,
        description: '从乘积求导公式开始',
        latex: '\\frac{d}{dx}(uv)=u\\frac{dv}{dx}+v\\frac{du}{dx}',
      },
      {
        step: 2,
        description: '把导数写成微分形式',
        latex: 'd(uv)=u\\,dv+v\\,du',
      },
      {
        step: 3,
        description: '两边积分',
        latex: '\\int d(uv)=\\int u\\,dv+\\int v\\,du',
      },
      {
        step: 4,
        description: '化简并移项得到分部积分公式',
        latex: '\\int u\\,dv=uv-\\int v\\,du',
        identity: 'integration-by-parts',
      },
    ],
  },
  {
    id: 'volume-of-revolution-disk',
    name: 'Volume of Revolution (Disk)',
    nameZh: '旋轉體體積（圓盤法）',
    latex: 'V=\\pi\\int_a^b y^2\\,dx',
    category: 'other',
    derivation: [
      {
        step: 1,
        description: '把曲线与 x 轴围成的区域绕 x 轴旋转',
        latex: 'y=f(x)\\ (a\\le x\\le b)',
      },
      {
        step: 2,
        description: '在位置 x 处的截面是半径为 y 的圆盘',
        latex: 'A(x)=\\pi y^2',
      },
      {
        step: 3,
        description: '把很多薄圆盘叠加（黎曼和极限）',
        latex: 'V\\approx \\sum \\pi y(x_i)^2\\,\\Delta x',
      },
      {
        step: 4,
        description: '取极限得到定积分表达式',
        latex: 'V=\\pi\\int_a^b y^2\\,dx',
        identity: 'disk-method',
      },
    ],
  },
];
