/**
 * M2 证明题目数据
 */

import { ProofProblem } from '../types';

export const PROOF_PROBLEMS: ProofProblem[] = [
  {
    id: 'proof-integration-by-parts',
    statement: 'Prove that',
    target: '\\int u\\,dv = uv - \\int v\\,du',
    hints: [
      '从乘积求导公式开始',
      '把导数写成微分形式：d(uv)=u\\,dv+v\\,du',
      '两边积分，再移项',
    ],
    steps: [
      {
        step: 1,
        latex: '\\frac{d}{dx}(uv)=u\\frac{dv}{dx}+v\\frac{du}{dx}',
        description: '使用乘积求导公式',
        isRevealed: false,
        identity: 'product-rule',
      },
      {
        step: 2,
        latex: 'd(uv)=u\\,dv+v\\,du',
        description: '改写成微分形式',
        isRevealed: false,
        identity: undefined,
      },
      {
        step: 3,
        latex: '\\int d(uv)=\\int u\\,dv+\\int v\\,du',
        description: '两边积分',
        isRevealed: false,
        identity: undefined,
      },
      {
        step: 4,
        latex: 'uv=\\int u\\,dv+\\int v\\,du',
        description: '利用 \\int d(uv)=uv',
        isRevealed: false,
        identity: undefined,
      },
      {
        step: 5,
        latex: '\\int u\\,dv=uv-\\int v\\,du',
        description: '移项得到结论',
        isRevealed: false,
        identity: 'integration-by-parts',
      },
    ],
  },
  {
    id: 'proof-tan-identity-1',
    statement: 'Prove that',
    target: '\\tan x = \\frac{\\sin 2x}{1 + \\cos 2x}',
    hints: [
      '从右边开始，使用倍角公式',
      '\\sin 2x = 2\\sin x \\cos x',
      '\\cos 2x = 2\\cos^2 x - 1',
      '化简分式',
      '使用 \\tan x = \\frac{\\sin x}{\\cos x}',
    ],
    steps: [
      {
        step: 1,
        latex: '\\frac{\\sin 2x}{1 + \\cos 2x}',
        description: '从右边开始',
        isRevealed: false,
        identity: undefined,
      },
      {
        step: 2,
        latex: '= \\frac{2\\sin x \\cos x}{1 + (2\\cos^2 x - 1)}',
        description: '应用倍角公式',
        identity: 'double-angle',
        isRevealed: false,
      },
      {
        step: 3,
        latex: '= \\frac{2\\sin x \\cos x}{2\\cos^2 x}',
        description: '化简分母',
        isRevealed: false,
        identity: undefined,
      },
      {
        step: 4,
        latex: '= \\frac{\\sin x}{\\cos x}',
        description: '约分',
        isRevealed: false,
        identity: undefined,
      },
      {
        step: 5,
        latex: '= \\tan x',
        description: '使用正确定义',
        identity: 'tan-definition',
        isRevealed: false,
      },
    ],
  },
  {
    id: 'proof-sin-sum-product',
    statement: 'Prove that',
    target: '\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}',
    hints: [
      '使用和角公式',
      '设 P = A + B, Q = A - B',
      '然后 A = (P+Q)/2, B = (P-Q)/2',
      '应用正弦和角与差角公式',
    ],
    steps: [
      {
        step: 1,
        latex: '设 P = A + B, Q = A - B',
        description: '引入新变量',
        isRevealed: false,
        identity: undefined,
      },
      {
        step: 2,
        latex: '则 A = \\frac{P+Q}{2}, B = \\frac{P-Q}{2}',
        description: '解出 A 和 B',
        isRevealed: false,
        identity: undefined,
      },
      {
        step: 3,
        latex: '\\sin A = \\sin\\frac{P+Q}{2} = \\sin\\frac{P}{2}\\cos\\frac{Q}{2} + \\cos\\frac{P}{2}\\sin\\frac{Q}{2}',
        description: '应用正弦和角公式',
        identity: 'sine-sum',
        isRevealed: false,
      },
      {
        step: 4,
        latex: '\\sin B = \\sin\\frac{P-Q}{2} = \\sin\\frac{P}{2}\\cos\\frac{Q}{2} - \\cos\\frac{P}{2}\\sin\\frac{Q}{2}',
        description: '应用正弦差角公式',
        identity: 'sine-difference',
        isRevealed: false,
      },
      {
        step: 5,
        latex: '\\sin A + \\sin B = 2\\sin\\frac{P}{2}\\cos\\frac{Q}{2}',
        description: '相加',
        isRevealed: false,
        identity: undefined,
      },
      {
        step: 6,
        latex: '= 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}',
        description: '代回原变量',
        isRevealed: false,
        identity: undefined,
      },
    ],
  },
];
