import { Chapter, Concept, Formula } from '../types';
import { ELECTRICITY_MAGNETISM_EXERCISES } from './electricityMagnetism';

// ============================================
// Electricity and Magnetism 主题内容（先完成 Section: electrostatics）
// 基于 DSE 真题风格 + 已录入练习题（es-001~）反推理论结构
// ============================================

// 概念知识点 - Electrostatics
export const ELECTRICITY_MAGNETISM_CONCEPTS: Concept[] = [
  {
    id: 'emc-es-1',
    title: '电荷与带电（Charge & Charging）',
    content:
      '电荷有正、负两种。带电的本质通常是电子的得失：得电子带负电，失电子带正电（电荷守恒）。在静电学中，电荷以“可以转移、可以分布、可以感应”的方式影响物体间相互作用。',
    keyPoints: [
      '电荷守恒：电荷不会凭空产生或消失，只会转移',
      '得电子 → 负电；失电子 → 正电',
      '导体的电荷可以在表面重新分布（静电平衡）',
      '对应练习：es-005、es-001',
    ],
    examples: ['塑料梳子梳头后能吸纸屑（摩擦起电）', '金属球带电后电荷分布在表面'],
    difficulty: 'basic',
  },
  {
    id: 'emc-es-2',
    title: '导体、绝缘体与静电平衡',
    content:
      '导体内有自由电子，可在外电场作用下移动；绝缘体自由电荷很少，电荷不易流动。静电平衡时，导体内部电场为零，电荷只分布在表面。',
    keyPoints: [
      '导体：电荷可移动；绝缘体：电荷不易移动',
      '静电平衡：导体内部 E = 0',
      '导体表面电荷会重新分布，但总电荷不变（除非接地或接触）',
      '对应练习：es-005',
    ],
    examples: ['金属外壳可屏蔽内部（法拉第笼效应概念）', '绝缘塑料棒带电后电荷不易流走'],
    difficulty: 'basic',
  },
  {
    id: 'emc-es-3',
    title: '库仑力（Coulomb force）与“吸引不一定是异号”',
    content:
      '点电荷间的静电力大小 obey 库仑定律。要注意：观察到“吸引”不一定代表两物体异号带电，也可能是“带电体吸引不带电导体（感应）”。',
    keyPoints: [
      '库仑定律：F ∝ |Q1Q2|/r²',
      '同号相斥，异号相吸',
      '带电体可吸引不带电导体（感应导致近端带异号）',
      '对应练习：es-001',
    ],
    examples: ['带电气球可吸墙：墙面电荷被极化', '两带电小球靠近：同号推开，异号拉近'],
    difficulty: 'basic',
  },
  {
    id: 'emc-es-4',
    title: '静电感应、极化与接地（Induction & Earthing）',
    content:
      '带电体靠近导体会令导体内电荷重新分布（感应/极化）。若此时导体接地，电荷可经地线流走/流入，从而改变导体的净电荷。这是静电“带电”的常用方法之一。',
    keyPoints: [
      '感应只会“重新分布”，不会改变隔离导体的总电荷',
      '接地提供电荷进出的通道，净电荷才会改变',
      '先感应、再接地、再移走带电体 → 可令导体带电',
      '对应练习：es-002、es-007、es-003',
    ],
    examples: ['用带电棒+接地给金属球带电', '雷电时接地线提供电荷通路'],
    difficulty: 'intermediate',
  },
  {
    id: 'emc-es-5',
    title: '电场强度（Electric field strength）与方向',
    content:
      '电场强度 E 定义为单位正电荷所受电力：E = F/q。电场方向定义为“正试探电荷受力方向”。负电荷受力方向与电场相反。',
    keyPoints: [
      '定义：E = F/q（q 取正试探电荷）',
      '矢量：有大小与方向',
      '负电荷受力方向与 E 相反（F = qE）',
      '对应练习：es-006',
    ],
    examples: ['电子进入电场：受力方向与电场方向相反', '带正电粒子沿电场方向加速'],
    difficulty: 'basic',
  },
  {
    id: 'emc-es-6',
    title: '点电荷电场（E around a point charge）',
    content:
      '点电荷在距离 r 处产生的电场大小 E = k|Q|/r²。电场随距离平方反比衰减，离电荷越远电场越弱。',
    keyPoints: [
      'E = k|Q|/r²（只算大小时取绝对值）',
      '距离加倍，电场变为原来的 1/4',
      '方向：Q 为正时向外，Q 为负时向内',
      '对应练习：结合 es-006 等电场方向题',
    ],
    examples: ['离点电荷越远，感觉到的“作用”越弱', '电荷越大，电场越强'],
    difficulty: 'intermediate',
  },
  {
    id: 'emc-es-7',
    title: '电势差（Potential difference）与电能',
    content:
      '电势差 V 定义为单位电荷在电场中移动所涉及的能量变化：V = W/q。它描述“推动电荷移动的能力”，单位是伏特（V）。',
    keyPoints: [
      '定义：V = W/q（W 以 J，q 以 C）',
      '1 V = 1 J C⁻¹',
      '电势差是能量（每库仑）的量度',
      '对应练习：电势差、做功类题目（本章节公式计算可覆盖）',
    ],
    examples: ['电池 1.5 V：每 1 C 电荷获得 1.5 J 能量', '高压电更危险：单位电荷能量更大'],
    difficulty: 'basic',
  },
  {
    id: 'emc-es-8',
    title: '平行板间匀强电场（Uniform field）',
    content:
      '两平行板间（忽略边缘效应）可形成匀强电场，电场强度 E 与电势差 V 和板间距 d 的关系为 E = V/d。同时带电粒子受力 F = qE。',
    keyPoints: [
      '匀强电场：E 近似处处相同',
      'E = V/d（单位：N C⁻¹ 或 V m⁻¹）',
      'F = qE（负电荷方向相反）',
      '对应练习：es-006（受力方向）、平行板概念题',
    ],
    examples: ['阴极射线管中电子束偏转', '平行板电容器间的电场近似匀强'],
    difficulty: 'intermediate',
  },
];

// 物理公式 - Electrostatics（与计算器 switch-case 的 em-es-* 对齐）
export const ELECTRICITY_MAGNETISM_FORMULAS: Formula[] = [
  {
    id: 'em-es-1',
    name: "Coulomb's Law (magnitude)",
    nameCN: '库仑定律（力的大小）',
    expression: 'F = k|Q₁Q₂|/r²',
    variables: [
      { symbol: 'F', name: 'electrostatic force', unit: 'N', description: '静电力大小' },
      { symbol: 'Q1', name: 'charge 1', unit: 'C', description: '电荷 Q₁' },
      { symbol: 'Q2', name: 'charge 2', unit: 'C', description: '电荷 Q₂' },
      { symbol: 'r', name: 'separation', unit: 'm', description: '距离 r' },
    ],
    description: '点电荷间静电力大小与电荷乘积成正比，与距离平方成反比。计算器取 k = 8.99×10⁹。',
    example: 'Q₁=2e-6 C, Q₂=3e-6 C, r=0.2 m → F = k|Q₁Q₂|/r²',
  },
  {
    id: 'em-es-2',
    name: 'Electric field strength (definition)',
    nameCN: '电场强度定义',
    expression: 'E = F/q',
    variables: [
      { symbol: 'E', name: 'electric field strength', unit: 'N C⁻¹', description: '电场强度' },
      { symbol: 'F', name: 'force', unit: 'N', description: '受力' },
      { symbol: 'q', name: 'charge', unit: 'C', description: '试探电荷' },
    ],
    description: '电场强度定义为单位正电荷所受电力。注意方向：E 的方向按“正电荷受力方向”定义。',
    example: '若 q=2 C 受力 F=10 N，则 E=5 N C⁻¹',
  },
  {
    id: 'em-es-3',
    name: 'Electric field of a point charge (magnitude)',
    nameCN: '点电荷电场（大小）',
    expression: 'E = k|Q|/r²',
    variables: [
      { symbol: 'E', name: 'electric field strength', unit: 'N C⁻¹', description: '电场强度' },
      { symbol: 'Q', name: 'source charge', unit: 'C', description: '点电荷 Q' },
      { symbol: 'r', name: 'distance', unit: 'm', description: '距离 r' },
    ],
    description: '点电荷在距离 r 处的电场强度大小与 |Q| 成正比，与 r² 成反比。',
    example: 'Q=1e-6 C, r=0.5 m → E = k|Q|/r²',
  },
  {
    id: 'em-es-4',
    name: 'Potential difference',
    nameCN: '电势差定义',
    expression: 'V = W/q',
    variables: [
      { symbol: 'V', name: 'potential difference', unit: 'V', description: '电势差' },
      { symbol: 'W', name: 'work / energy', unit: 'J', description: '能量变化/做功' },
      { symbol: 'q', name: 'charge', unit: 'C', description: '电荷' },
    ],
    description: '电势差是单位电荷对应的能量变化：1 V = 1 J C⁻¹。',
    example: '若 W=12 J，q=3 C，则 V=4 V',
  },
  {
    id: 'em-es-5',
    name: 'Uniform electric field between plates',
    nameCN: '平行板间匀强电场',
    expression: 'E = V/d',
    variables: [
      { symbol: 'E', name: 'electric field strength', unit: 'V m⁻¹', description: '电场强度' },
      { symbol: 'V', name: 'potential difference', unit: 'V', description: '两板电势差' },
      { symbol: 'd', name: 'plate separation', unit: 'm', description: '板间距离' },
    ],
    description: '在平行板间近似匀强电场时，E 与 V 成正比，与板间距 d 成反比。',
    example: 'V=200 V, d=0.02 m → E=1.0×10⁴ V m⁻¹',
  },
  {
    id: 'em-es-6',
    name: 'Electric force in an electric field',
    nameCN: '电场中的受力',
    expression: 'F = qE',
    variables: [
      { symbol: 'F', name: 'force', unit: 'N', description: '电场力' },
      { symbol: 'q', name: 'charge', unit: 'C', description: '电荷（可正可负）' },
      { symbol: 'E', name: 'electric field strength', unit: 'N C⁻¹', description: '电场强度' },
    ],
    description: '矢量关系：F 与 E 同向或反向取决于 q 的正负；大小为 |F|=|q|E。',
    example: 'q=-e 进入匀强电场：受力方向与电场相反',
  },
];

// 章节配置（电与磁 - 静电学）
export const ELECTRICITY_MAGNETISM_CHAPTERS: Chapter[] = [
  {
    id: 'electrostatics',
    title: 'Electrostatics',
    titleCN: '静电学',
    concepts: ELECTRICITY_MAGNETISM_CONCEPTS,
    formulas: ELECTRICITY_MAGNETISM_FORMULAS,
    exercises: ELECTRICITY_MAGNETISM_EXERCISES.filter((e) => e.sectionId === 'electrostatics'),
    simulations: [],
    completed: false,
  },
];

