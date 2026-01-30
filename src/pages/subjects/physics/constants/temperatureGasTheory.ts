import { Chapter, Concept, Formula } from '../types';
import { TEMPERATURE_GAS_EXERCISES } from './temperatureGas';

// ============================================
// Temperature and Gas 主题内容（先完成 Section: temp-heat-internal）
// 基于 DSE 真题风格 + 已录入练习题（thi-001~）反推理论结构
// ============================================

// 概念知识点 - Temperature, Heat and Internal Energy
export const TEMPERATURE_GAS_CONCEPTS: Concept[] = [
  {
    id: 'tgc-1',
    title: '温度（Temperature）代表什么？',
    content:
      '温度是物体“冷热程度”的量度。由分子运动论可知，温度与粒子的平均动能相关，但温度并不是“总能量（内能）”的量度。',
    keyPoints: [
      '温度用来比较冷热（hotness）',
      '温度与分子平均动能相关',
      '同温度不代表同内能（还要看质量/材料/状态）',
      '对应练习：thi-026、thi-029',
    ],
    examples: ['同样 20°C 的一桶水与一杯水，温度相同但内能不同', '冰水与冰在 0°C：同温但状态不同，内能不同'],
    difficulty: 'basic',
  },
  {
    id: 'tgc-2',
    title: '热（Heat）vs 內能（Internal energy）',
    content:
      '內能是物体内部微观粒子的“总能量”（动能+势能）。热不是某种“储存在物体里的能量”，而是“由于温差而在物体之间转移的能量”。',
    keyPoints: [
      '內能：分子总动能 + 分子势能',
      '热：因温差造成的能量传递过程',
      '被加热 ⇒ 物体內能增加（假设不做功/忽略其他能量形式）',
      '对应练习：thi-011、thi-016、thi-028',
    ],
    examples: ['用手摸热水杯：热从杯子传到手', '同一杯水升温：內能增加'],
    difficulty: 'basic',
  },
  {
    id: 'tgc-3',
    title: '热平衡与热流方向（Thermal equilibrium）',
    content:
      '当两物体接触时，热总从高温流向低温，直到两者温度相同（热平衡）。如果接触后没有热流，说明它们温度相同。',
    keyPoints: [
      '热流方向只由温度差决定：高温 → 低温',
      '热平衡：两者最终温度相同',
      '无热流（在接触且可交换热）⇒ 同温度',
      '对应练习：thi-023、thi-046',
    ],
    examples: ['热咖啡与冷牛奶混合后变成同一温度', '温度计读数稳定时与被测物同温'],
    difficulty: 'basic',
  },
  {
    id: 'tgc-4',
    title: '比热容 c 与热容量 C（Specific heat capacity & Heat capacity）',
    content:
      '比热容 c 是材料性质，表示“使 1 kg 物质升高 1°C 所需的热能”。热容量 C 是“整件物体”的热学容量，C = mc。',
    keyPoints: [
      'E = mcΔT（加热/降温计算核心公式）',
      'C = mc（热容量与质量成正比）',
      'c 取决于材料/状态；C 取决于材料与质量',
      '形状/容器不改变 c（DSE 常规处理）',
      '对应练习：thi-003、thi-031、thi-033、thi-004',
    ],
    examples: ['同材质更重的物体更“难”升温（C 更大）', '固态与液态同一物质的 c 可不同'],
    difficulty: 'basic',
  },
  {
    id: 'tgc-5',
    title: 'E = mcΔT：单位与常见陷阱',
    content:
      '计算时必须统一单位：m 用 kg，E 用 J。注意 ΔT 是“温差”，用 °C 或 K 都一样（不用加 273）。',
    keyPoints: [
      'm：g → kg（÷1000）',
      't：min → s（×60）',
      'ΔT：只看差值；ΔT(°C) = ΔT(K)',
      '不要把 64°C 写成 (64+273)（那是绝对温度，不是温差）',
      '对应练习：thi-006、thi-008、thi-014',
    ],
    examples: ['0.5 kg 水升温 5°C：E = 0.5×4200×5', '金属块升温 64°C：ΔT = 64，不是 337'],
    difficulty: 'intermediate',
  },
  {
    id: 'tgc-6',
    title: '电加热：E = Pt 与 Pt = mcΔT',
    content:
      '电热器在时间 t 内输出的能量为 E = Pt。若忽略热损失，该能量等于物体吸收的热能 mcΔT，可联立求 P、t、c 或 ΔT。',
    keyPoints: [
      '1 W = 1 J s⁻¹',
      '无热损失：Pt = mcΔT',
      '有热损失：Pt = mcΔT + E_loss',
      '对应练习：thi-006、thi-014、thi-024、thi-027',
    ],
    examples: ['电水壶估算功率：先算 mcΔT，再除以时间', '计算能量损失：Pt − mcΔT'],
    difficulty: 'intermediate',
  },
  {
    id: 'tgc-7',
    title: '图像题：斜率与物理意义',
    content:
      '看图像要先问：横纵轴是什么。T–t 图像的斜率是升温快慢；E–T 图像的斜率与热容量/比热容有关。',
    keyPoints: [
      'T–t：斜率 ΔT/Δt ∝ 1/c（同 P、同 m 时）',
      'E–T：斜率 ΔE/ΔT = mc ∝ c（同 m 时）',
      '斜率小不一定“加热慢”，要看条件是否相同',
      '对应练习：thi-005、thi-015、thi-017、thi-025、thi-030',
    ],
    examples: ['同质量液体被同功率加热：斜率小 ⇒ c 大', 'E–T 直线更陡 ⇒ c 更大（同质量）'],
    difficulty: 'intermediate',
  },
  {
    id: 'tgc-8',
    title: '温度计与线性刻度（Thermometric properties）',
    content:
      '温度计利用“随温度改变的物理量”（如液柱长度、电阻、气压等）。若在 0°C 与 100°C 之间近似线性，可用内插公式求温度。',
    keyPoints: [
      '固定点：ice point 0°C、steam point 100°C',
      '线性内插：θ/100 = (X − X0)/(X100 − X0)',
      '质量不随温度变，不能用来测温',
      '对应练习：thi-001、thi-036、thi-037、thi-041、thi-035',
    ],
    examples: ['水银温度计：用液柱长度 X', '热敏电阻/金属电阻温度计：用电阻 X'],
    difficulty: 'basic',
  },
  {
    id: 'tgc-9',
    title: '水银温度计与电阻测温的要点',
    content:
      '水银常用于液柱温度计：膨胀较均匀、在常用温度范围内保持液态且不易附着玻璃。电阻测温只要 R 随温度单调变化，就能校准成温度计。',
    keyPoints: [
      '水银：膨胀均匀、温区合适、且不透明',
      'R–θ：只要随温度变（升/降都可以）即可测温',
      'R 恒定不变 ⇒ 不可测温',
      '对应练习：thi-032、thi-044、thi-041',
    ],
    examples: ['体温计常用水银或酒精（不同温区）', '温控器常用热敏电阻（NTC/PTC）'],
    difficulty: 'basic',
  },
  {
    id: 'tgc-10',
    title: '水的高比热容：为什么这么重要？',
    content:
      '水的比热容很高，因此在吸收/放出大量热能时，温度变化仍较小。这解释了水做冷却剂、沿海气候温差小、人体体温较稳定等现象。',
    keyPoints: [
      'c 大 ⇒ 同样吸热，升温更慢（ΔT 小）',
      '水适合做冷却剂',
      '海洋缓和沿海地区气温变化',
      '对应练习：thi-009、thi-012、thi-038',
    ],
    examples: ['汽车水箱用水/冷却液带走发动机热量', '海边城市夏天没那么热、冬天没那么冷'],
    difficulty: 'basic',
  },
  {
    id: 'tgc-11',
    title: '量热与混合：能量守恒写法',
    content:
      '混合问题核心是“能量守恒”：热物体放热 = 冷物体吸热（若有热损失，额外加上 Q_loss）。最终一定达到同一温度。',
    keyPoints: [
      '无热损失：m1c1(T1−θ) = m2c2(θ−T2)',
      '有热损失：热物体放热 = 冷物体吸热 + Q_loss',
      '终温 θ 会更靠近“热容量更大”的那一方初温',
      '对应练习：thi-040、thi-043、thi-045',
    ],
    examples: ['热茶加冷奶：写“茶放热=奶吸热”', '两金属块接触：c 大的一块温变小，θ 更靠近它的初温'],
    difficulty: 'intermediate',
  },
  {
    id: 'tgc-12',
    title: '实验：测比热容的误差来源与改进',
    content:
      '测比热容实验的关键是减少热损失与读数误差。常见改进：加盖减少散热、持续搅拌保证均匀、关电后等一会儿再读终温（考虑加热器余热）。',
    keyPoints: [
      '加盖：减少对空气的热损失',
      '搅拌：避免上热下冷，读数更代表整体温度',
      '终温：不要马上读（加热器/金属块仍在放热）',
      '误差判断：粘附热水会令算出来的 c 偏大',
      '对应练习：thi-013、thi-021、thi-022、thi-007',
    ],
    examples: ['加盖保温杯比敞口杯更不易降温', '搅拌咖啡避免表面热、底部冷'],
    difficulty: 'advanced',
  },
];

// 物理公式 - Temperature, Heat and Internal Energy
export const TEMPERATURE_GAS_FORMULAS: Formula[] = [
  {
    id: 'tg-1',
    name: 'Thermometer scale (linear interpolation)',
    nameCN: '线性温标内插（温度计标定）',
    expression: 'θ/100 = (X − X₀) / (X₁₀₀ − X₀)',
    variables: [
      { symbol: 'θ', name: 'temperature', unit: '°C', description: '温度' },
      { symbol: 'X', name: 'thermometric property', unit: 'a.u.', description: '热学量（如长度/电阻）' },
      { symbol: 'X0', name: 'property at 0°C', unit: 'a.u.', description: '0°C 时的热学量' },
      { symbol: 'X100', name: 'property at 100°C', unit: 'a.u.', description: '100°C 时的热学量' },
    ],
    description:
      '在 0°C 与 100°C 之间假设读数与温度呈线性关系。X 可以是液柱长度、电阻、气压等“随温度变化的物理量”。',
    example: '水银温度计：X0=2 cm，X100=22 cm，X=11 cm → θ=45°C',
  },
  {
    id: 'tg-2',
    name: 'Heat energy',
    nameCN: '热能/吸放热计算',
    expression: 'E = mcΔT',
    variables: [
      { symbol: 'E', name: 'heat energy', unit: 'J', description: '热能（吸收/放出）' },
      { symbol: 'm', name: 'mass', unit: 'kg', description: '质量' },
      { symbol: 'c', name: 'specific heat capacity', unit: 'J kg⁻¹ °C⁻¹', description: '比热容' },
      { symbol: 'ΔT', name: 'temperature change', unit: '°C', description: '温度变化（温差）' },
    ],
    description: '最常用热学公式。注意：ΔT 是温差，ΔT(°C)=ΔT(K)，不需要加 273。',
    example: '0.5 kg 水升温 5°C：E=0.5×4200×5=10500 J',
  },
  {
    id: 'tg-3',
    name: 'Electrical energy from a heater',
    nameCN: '电热器输出能量',
    expression: 'E = Pt',
    variables: [
      { symbol: 'E', name: 'energy', unit: 'J', description: '能量' },
      { symbol: 'P', name: 'power', unit: 'W', description: '功率' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' },
    ],
    description: '电功率 P 在时间 t 内输出能量 E。常与 E=mcΔT 联立。',
    example: '500 W 加热 20 s：E = 500×20 = 10000 J',
  },
  {
    id: 'tg-4',
    name: 'Heat capacity',
    nameCN: '热容量与比热容关系',
    expression: 'C = mc',
    variables: [
      { symbol: 'C', name: 'heat capacity', unit: 'J °C⁻¹', description: '热容量' },
      { symbol: 'm', name: 'mass', unit: 'kg', description: '质量' },
      { symbol: 'c', name: 'specific heat capacity', unit: 'J kg⁻¹ °C⁻¹', description: '比热容' },
    ],
    description: '热容量 C 反映“整件物体”升温的难易程度，质量越大或比热容越大，C 越大。',
    example: '2 kg 水：C=2×4200=8400 J °C⁻¹',
  },
  {
    id: 'tg-5',
    name: 'Heat capacity (from energy and temperature change)',
    nameCN: '用能量求热容量',
    expression: 'C = E/ΔT',
    variables: [
      { symbol: 'C', name: 'heat capacity', unit: 'J °C⁻¹', description: '热容量' },
      { symbol: 'E', name: 'energy', unit: 'J', description: '能量变化' },
      { symbol: 'ΔT', name: 'temperature change', unit: '°C', description: '温度变化（温差）' },
    ],
    description: '当题目给出吸收能量 E 与温度变化 ΔT，可直接用 C = E/ΔT 求热容量。',
    example: 'E=24000 J，ΔT=20°C → C=1200 J °C⁻¹',
  },
  {
    id: 'tg-6',
    name: 'Mixing (no heat loss)',
    nameCN: '混合/接触平衡温度（无热损失）',
    expression: 'm₁c₁(T₁−θ) = m₂c₂(θ−T₂)',
    variables: [
      { symbol: 'm1', name: 'mass 1', unit: 'kg', description: '物体 1 的质量' },
      { symbol: 'c1', name: 'specific heat capacity 1', unit: 'J kg⁻¹ °C⁻¹', description: '物体 1 的比热容' },
      { symbol: 'T1', name: 'initial temperature 1', unit: '°C', description: '物体 1 初温' },
      { symbol: 'm2', name: 'mass 2', unit: 'kg', description: '物体 2 的质量' },
      { symbol: 'c2', name: 'specific heat capacity 2', unit: 'J kg⁻¹ °C⁻¹', description: '物体 2 的比热容' },
      { symbol: 'T2', name: 'initial temperature 2', unit: '°C', description: '物体 2 初温' },
      { symbol: 'θ', name: 'final equilibrium temperature', unit: '°C', description: '平衡温度' },
    ],
    description:
      '能量守恒：热的一方放热 = 冷的一方吸热（无热损失）。若有热损失，可把损失量加到右边：m₁c₁(T₁−θ)=m₂c₂(θ−T₂)+Q_loss。',
    example: '热茶加冷奶：m₁c₁(T₁−θ)=m₂c₂(θ−T₂) 求 θ',
  },
];

// 章节配置（先做一个章节：temp-heat-internal）
export const TEMPERATURE_GAS_CHAPTERS: Chapter[] = [
  {
    id: 'temp-heat-internal',
    title: 'Temperature, Heat and Internal Energy',
    titleCN: '温度、热、內能',
    concepts: TEMPERATURE_GAS_CONCEPTS,
    formulas: TEMPERATURE_GAS_FORMULAS,
    exercises: TEMPERATURE_GAS_EXERCISES.filter((e) => e.sectionId === 'temp-heat-internal'),
    simulations: [],
    completed: false,
  },
];
