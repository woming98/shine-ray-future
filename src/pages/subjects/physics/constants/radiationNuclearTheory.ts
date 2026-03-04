import { Chapter, Formula } from '../types';
import { RADIATION_NUCLEAR_EXERCISES } from './radiationNuclear';
import { RADIATION_NUCLEAR_SECTIONS } from './radiationNuclearSections';

export const RADIATION_NUCLEAR_FORMULAS: Formula[] = [
  {
    id: 'rnf-1',
    name: 'Half-life Decay (fraction form)',
    nameCN: '半衰期衰变（分数式）',
    expression: 'N = N0 (1/2)^(t / t1/2)',
    variables: [
      { symbol: 'N', name: 'undecayed nuclei / remaining amount', unit: '-', description: '剩余未衰变核数或剩余量' },
      { symbol: 'N0', name: 'initial value', unit: '-', description: '初始值' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' },
      { symbol: 't1/2', name: 'half-life', unit: 's', description: '半衰期' }
    ],
    description: '本主题最常用公式，适用于质量、核数和活度按半衰期衰减的题。',
    example: 'If t = 3 t1/2, then N = N0 / 8.'
  },
  {
    id: 'rnf-2',
    name: 'Exponential Decay',
    nameCN: '指数衰变',
    expression: 'N = N0 e^(-kt)',
    variables: [
      { symbol: 'k', name: 'decay constant', unit: 's^-1', description: '衰变常数' }
    ],
    description: '用于由任意两时刻数据反求衰变常数、年龄或剩余量。',
    example: 'Used when the time is not an exact multiple of the half-life.'
  },
  {
    id: 'rnf-3',
    name: 'Activity Law',
    nameCN: '活度衰变',
    expression: 'A = A0 (1/2)^(t / t1/2) = A0 e^(-kt)',
    variables: [
      { symbol: 'A', name: 'activity', unit: 'Bq', description: '活度' },
      { symbol: 'A0', name: 'initial activity', unit: 'Bq', description: '初始活度' }
    ],
    description: '活度与未衰变核数成正比，计算方式与半衰期衰变完全对应。',
    example: 'If activity falls to one quarter, two half-lives have passed.'
  },
  {
    id: 'rnf-4',
    name: 'Decay Constant and Half-life',
    nameCN: '衰变常数与半衰期',
    expression: 'k = ln 2 / t1/2',
    variables: [
      { symbol: 'k', name: 'decay constant', unit: 's^-1', description: '衰变常数' },
      { symbol: 't1/2', name: 'half-life', unit: 's', description: '半衰期' }
    ],
    description: '用于衰变常数、半衰期和“每秒衰变概率”类题。',
    example: 'A shorter half-life means a larger decay constant.'
  },
  {
    id: 'rnf-5',
    name: 'Activity Definition',
    nameCN: '活度定义',
    expression: 'A = kN',
    variables: [
      { symbol: 'A', name: 'activity', unit: 'Bq', description: '活度' },
      { symbol: 'k', name: 'decay constant', unit: 's^-1', description: '衰变常数' },
      { symbol: 'N', name: 'number of undecayed nuclei', unit: '-', description: '未衰变核数' }
    ],
    description: '用于比较不同同位素的初始活度、半衰期与核数。',
    example: 'For the same N, larger k gives larger activity.'
  },
  {
    id: 'rnf-6',
    name: 'Corrected Count Rate',
    nameCN: '修正计数率',
    expression: 'corrected count = measured count - background count',
    variables: [
      { symbol: 'background count', name: 'background count rate', unit: 'cpm', description: '本底计数率' }
    ],
    description: 'GM 计数和半衰期实验题必须先做本底修正。',
    example: 'If measured = 528 cpm and background = 56 cpm, corrected = 472 cpm.'
  },
  {
    id: 'rnf-7',
    name: 'Carbon-14 Dating',
    nameCN: '碳十四测年',
    expression: 'C = C0 (1/2)^(t / 5730 years)',
    variables: [
      { symbol: 'C', name: 'current corrected count', unit: '-', description: '当前修正计数' },
      { symbol: 'C0', name: 'living sample count', unit: '-', description: '活体样本修正计数' }
    ],
    description: '用于古木、遗骸年代估算。也可改写成指数形式。',
    example: 'If the count falls to one quarter, the age is about 11460 years.'
  },
  {
    id: 'rnf-8',
    name: 'Nuclear Equation Balancing',
    nameCN: '核反应方程配平',
    expression: 'sum A and sum Z are both conserved',
    variables: [
      { symbol: 'A', name: 'mass number', unit: '-', description: '质量数' },
      { symbol: 'Z', name: 'atomic number', unit: '-', description: '原子序数' }
    ],
    description: '所有原子模型和核反应题的基本规则：质量数守恒、核电荷数守恒。',
    example: 'In alpha decay, A decreases by 4 and Z decreases by 2.'
  },
  {
    id: 'rnf-9',
    name: 'Alpha Decay Change',
    nameCN: 'α 衰变变化',
    expression: 'A -> A - 4, Z -> Z - 2',
    variables: [],
    description: '用于识别 α 衰变后 daughter nucleus 的质量数和原子序数。',
    example: 'U-238 alpha decay gives Th-234.'
  },
  {
    id: 'rnf-10',
    name: 'Beta-minus Decay Change',
    nameCN: 'β- 衰变变化',
    expression: 'A unchanged, Z -> Z + 1',
    variables: [],
    description: 'β- 衰变中中子变质子，质量数不变，原子序数加 1。',
    example: 'Th-234 beta decay gives Pa-234.'
  },
  {
    id: 'rnf-11',
    name: 'Gamma Emission Change',
    nameCN: 'γ 射线发射变化',
    expression: 'A unchanged, Z unchanged',
    variables: [],
    description: 'γ 发射只释放能量，不改变核内粒子数。',
    example: 'Gamma emission changes nuclear energy state only.'
  },
  {
    id: 'rnf-12',
    name: 'Mass Defect Energy',
    nameCN: '质量亏损与能量',
    expression: 'E = Delta m c^2',
    variables: [
      { symbol: 'Delta m', name: 'mass defect', unit: 'kg', description: '质量亏损' },
      { symbol: 'c', name: 'speed of light', unit: 'm s^-1', description: '光速' }
    ],
    description: '用于核衰变、核裂变、核聚变和恒星能量释放。',
    example: 'Small mass loss corresponds to large energy release.'
  },
  {
    id: 'rnf-13',
    name: 'Atomic Mass Unit Conversion',
    nameCN: '原子质量单位换算',
    expression: '1 u = 931 MeV',
    variables: [],
    description: '用于把质量亏损从 u 直接换算成释放能量（MeV）。',
    example: 'If Delta m = 0.018 u, then E = 16.76 MeV.'
  },
  {
    id: 'rnf-14',
    name: 'Momentum Sharing in Two-body Decay',
    nameCN: '两体衰变动量相等',
    expression: 'p_daughter = p_particle and KE = p^2 / (2m)',
    variables: [],
    description: '用于 alpha 衰变后 daughter nucleus 和 alpha particle 的动能比。',
    example: 'For the same momentum, the lighter particle gets more kinetic energy.'
  },
  {
    id: 'rnf-15',
    name: 'Kinetic Energy Ratio in Alpha Decay',
    nameCN: 'α 衰变动能比',
    expression: 'KE_alpha / KE_daughter = m_daughter / m_alpha',
    variables: [],
    description: '由动量守恒推得，用于母核静止时的二体衰变。',
    example: 'For U-238 alpha decay, KE_daughter / KE_alpha = 4 / 234.'
  },
  {
    id: 'rnf-16',
    name: 'Fusion and Fission Identification',
    nameCN: '聚变与裂变判别',
    expression: 'fusion: small nuclei combine; fission: heavy nucleus splits',
    variables: [],
    description: '核能章节最常见概念题判断依据。',
    example: 'D + T -> He + n is fusion; U-235 + n -> fragments + neutrons is fission.'
  },
  {
    id: 'rnf-17',
    name: 'Power from Mass Loss',
    nameCN: '由质量损失求功率',
    expression: 'P = Delta E / Delta t = Delta m c^2 / Delta t',
    variables: [
      { symbol: 'P', name: 'power', unit: 'W', description: '功率' }
    ],
    description: '用于恒星、太阳、核反应源平均功率题。',
    example: 'If mass drops by 2 x 10^16 kg per year, convert to energy then divide by time.'
  }
];

export const RADIATION_NUCLEAR_CHAPTERS: Chapter[] = RADIATION_NUCLEAR_SECTIONS.map((section, index) => ({
  id: `rn-ch${index + 1}`,
  title: section.name,
  titleCN: section.nameCN,
  concepts: [],
  formulas: RADIATION_NUCLEAR_FORMULAS,
  exercises: RADIATION_NUCLEAR_EXERCISES.filter((exercise) => exercise.sectionId === section.id),
  simulations: [],
  completed: false,
}));
