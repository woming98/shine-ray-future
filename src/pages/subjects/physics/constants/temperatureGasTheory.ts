import { Chapter, Concept, Formula } from '../types';
import { TEMPERATURE_GAS_EXERCISES } from './temperatureGas';

// ============================================
// Temperature and Gas 主题内容（已覆盖：temp-heat-internal / transfer-processes）
// 基于 DSE 真题风格 + 已录入练习题（thi-001~、tp-001~）反推理论结构
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

// 概念知识点 - Transfer Processes
export const TEMPERATURE_GAS_TRANSFER_CONCEPTS: Concept[] = [
  {
    id: 'tgp-1',
    title: '三种热传递（Transfer Processes）总览',
    content:
      '热可以通过三种方式在物体与环境之间传递：传导（conduction）、对流（convection）和辐射（radiation）。同一个情境通常会同时发生多种热传递过程。',
    keyPoints: [
      '传导：粒子碰撞/相互作用传能，常见于固体（也可发生于静止流体）',
      '对流：流体整体运动把能量“搬运”走，只发生在液体/气体',
      '辐射：电磁波（主要是红外线）传能，可在真空中传播',
      '实际题目经常是“(1)(2)(3) 都有”或问“哪一种被减弱”',
      '对应练习：tp-010、tp-018、tp-020、tp-026',
    ],
    examples: [
      '热汤放在空气中冷却：传导 + 对流 + 辐射同时发生',
      '太空中只有辐射能传热（无传导/对流）',
    ],
    difficulty: 'basic',
  },
  {
    id: 'tgp-2',
    title: '传导（Conduction）：好导体/差导体与“感觉更冷”',
    content:
      '传导是靠粒子碰撞把能量从高温处传到低温处。金属一般是好导体；空气、纤维、木材等通常是差导体。你“感觉冷/热”很大程度取决于热从皮肤流走的快慢。',
    keyPoints: [
      '金属好导热 ⇒ 热从皮肤流走快 ⇒ “更冷”（不代表金属温度更低）',
      '空气是差导体；真空没有粒子 ⇒ 不能传导',
      '一般导热能力：气体 < 液体 < 固体（同一题目常用此顺序）',
      '对应练习：tp-008、tp-012、tp-016、tp-019、tp-022、tp-023、tp-036',
    ],
    examples: ['冬天坐金属椅更冷（导热快）', '瓷砖比地毯更“冰”（导热快）'],
    difficulty: 'basic',
  },
  {
    id: 'tgp-3',
    title: '保温材料为何有效：困住空气（Trapped air）',
    content:
      '很多保温材料本身并不一定“神奇”，关键是它们内部有大量细小空隙，能困住空气。空气导热差，而且被困住后不易形成对流，从而减少热传递。',
    keyPoints: [
      '困住空气：降低传导（空气差导体）',
      '小空隙：抑制对流（空气不易循环）',
      '双层玻璃/动物毛/纤维隔热层：本质都是“困住空气”',
      '对应练习：tp-014、tp-032、tp-036',
    ],
    examples: ['羽绒服保暖：靠困住空气', '屋顶纤维隔热层：减少热通过天花板'],
    difficulty: 'basic',
  },
  {
    id: 'tgp-4',
    title: '对流（Convection）：密度差驱动的循环',
    content:
      '对流发生在流体中：受热的流体膨胀、密度减小而上升；较冷的流体密度较大而下沉，从而形成循环（convection current）。',
    keyPoints: [
      '加热 ⇒ 体积增大 ⇒ 密度减小 ⇒ 上升',
      '冷却 ⇒ 密度增大 ⇒ 下沉',
      '对流的“根本原因”是温度差造成的密度差',
      '对应练习：tp-006、tp-033',
    ],
    examples: ['水被从底部加热：热水上升、冷水下沉形成对流', '暖空气上升形成热气流'],
    difficulty: 'basic',
  },
  {
    id: 'tgp-5',
    title: '对流能否建立：从上加热 vs 从下加热',
    content:
      '对流需要“热的在下、冷的在上”这种不稳定分布才能自然形成循环。如果热的流体本来就在上方，往往难以建立对流（系统稳定）。',
    keyPoints: [
      '从下加热：热的上升、冷的下沉 ⇒ 易建立对流',
      '从上加热：热的已经在上面 ⇒ 不易建立对流',
      '从上冷却：冷的下沉 ⇒ 可驱动对流',
      '对应练习：tp-025、tp-028、tp-029',
    ],
    examples: ['上层水沸腾但底部仍有冰：难以对流 + 水导热差', '冷却上层水可驱动循环'],
    difficulty: 'intermediate',
  },
  {
    id: 'tgp-6',
    title: '自然对流的例子：海风/陆风与热气流',
    content:
      '自然界中很多风与气流都源于对流：白天陆地升温快，陆地上空热空气上升，海风吹向陆地；夜晚海水降温慢，海面上空空气较热上升，陆风吹向海面。',
    keyPoints: [
      '白天：陆地更热 ⇒ 陆地上空空气上升 ⇒ 海风（sea breeze）吹向陆地',
      '夜晚：海更热 ⇒ 海面上空空气上升 ⇒ 陆风（land breeze）吹向海面',
      '热气流上升可被鸟类利用（滑翔/上升气流）',
      '对应练习：tp-009',
    ],
    examples: ['海边白天风从海吹向陆地', '鸟利用上升热气流获取高度'],
    difficulty: 'basic',
  },
  {
    id: 'tgp-7',
    title: '热辐射（Radiation）与红外线（Infra-red）',
    content:
      '所有物体只要温度高于绝对零度都会发出热辐射；在日常温度范围，主要是红外线（infra-red）。辐射不需要介质，因此能在真空中传热。',
    keyPoints: [
      '热辐射主要是红外线',
      '辐射不需要介质 ⇒ 真空中仍能传热',
      '“不涉及分子运动”的过程：辐射',
      '对应练习：tp-007、tp-010、tp-020、tp-026',
    ],
    examples: ['站在火旁会感到热：辐射', '太空中卫星散热主要靠辐射'],
    difficulty: 'basic',
  },
  {
    id: 'tgp-8',
    title: '吸收与发射：黑/白、暗/亮、光滑/粗糙',
    content:
      '表面性质会影响热辐射：黑色/暗哑（dull）表面一般是好吸收体也是好发射体；光亮/银色（shiny）表面则是差吸收体也是差发射体。',
    keyPoints: [
      '黑/暗哑：好吸收 + 好发射',
      '光亮/银色：差吸收 + 差发射（善反射）',
      '“好吸收体也是好发射体”是常见核心规则',
      '对应练习：tp-011、tp-013、tp-015、tp-017、tp-024、tp-031、tp-034、tp-035',
    ],
    examples: ['汽车水箱散热器常涂黑：增强辐射散热', '太阳能集热板涂黑：增强吸收'],
    difficulty: 'basic',
  },
  {
    id: 'tgp-9',
    title: '保温与减热设计：真空瓶、锡纸、玻璃盖',
    content:
      '保温设计通常是“针对性地减少某一种热传递”。例如：真空层减少传导与对流；银色内壁减少辐射；盖子/玻璃盖减少对流。',
    keyPoints: [
      '真空：减少传导与对流（不是减少辐射）',
      '银色内壁：反射红外线、差发射 ⇒ 减少辐射换热',
      '盖子/玻璃盖：阻止空气交换 ⇒ 减少对流',
      '对应练习：tp-001、tp-002、tp-005、tp-027、tp-039',
    ],
    examples: ['用光亮铝箔包热食物：主要减少辐射散热', '太阳灶玻璃盖：减少对流散热'],
    difficulty: 'intermediate',
  },
  {
    id: 'tgp-10',
    title: '温室效应（Greenhouse effect）：车内更热的原因',
    content:
      '太阳光（可见光为主）较容易透过玻璃进入车内，车内物体吸收后升温并发出红外线。玻璃对红外线的透过较差，同时车内对流也被抑制，导致热量更容易“被困住”。',
    keyPoints: [
      '太阳光进入容易；车内红外线散出较困难 ⇒ 热量积累',
      '封闭空间抑制对流换气 ⇒ 更难把热带走',
      '常见考法：车内/温室/太阳灶玻璃盖',
      '对应练习：tp-038、tp-005',
    ],
    examples: ['夏天停在阳光下的车：车内温度显著升高', '温室种植：保持较高温度'],
    difficulty: 'intermediate',
  },
];

// 物理公式 - Temperature, Heat and Internal Energy
export const TEMPERATURE_GAS_FORMULAS_THI: Formula[] = [
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
  {
    id: 'tg-7',
    name: 'Heating (no heat loss)',
    nameCN: '加热（无热损失）',
    expression: 'Pt = mcΔT',
    variables: [
      { symbol: 'P', name: 'power', unit: 'W', description: '功率' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' },
      { symbol: 'm', name: 'mass', unit: 'kg', description: '质量' },
      { symbol: 'c', name: 'specific heat capacity', unit: 'J kg⁻¹ °C⁻¹', description: '比热容' },
      { symbol: 'ΔT', name: 'temperature change', unit: '°C', description: '温度变化（温差）' },
    ],
    description:
      '把 E=Pt 与 E=mcΔT 合并，可一步求功率/时间/比热容/质量/温差。适用于题目明确“无热损失”的加热过程。',
    example: '500 W 加热 20 s，m=1 kg，ΔT=40°C → c = 250 J kg⁻¹ °C⁻¹',
  },
  {
    id: 'tg-8',
    name: 'Energy loss during heating',
    nameCN: '加热过程能量损失',
    expression: 'E_loss = Pt − mcΔT',
    variables: [
      { symbol: 'E_loss', name: 'energy loss', unit: 'J', description: '能量损失' },
      { symbol: 'P', name: 'power', unit: 'W', description: '功率' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' },
      { symbol: 'm', name: 'mass', unit: 'kg', description: '质量' },
      { symbol: 'c', name: 'specific heat capacity', unit: 'J kg⁻¹ °C⁻¹', description: '比热容' },
      { symbol: 'ΔT', name: 'temperature change', unit: '°C', description: '温度变化（温差）' },
    ],
    description:
      '当加热过程中有热损失，电热器输入 Pt 会大于液体吸收的 mcΔT。两者差值就是能量损失 E_loss。',
    example: '100 W 加热 180 s：Pt=18000 J；水吸收 10500 J → E_loss=7500 J',
  },
  {
    id: 'tg-9',
    name: 'Mixing (with heat loss)',
    nameCN: '混合/接触平衡温度（有热损失）',
    expression: 'm₁c₁(T₁−θ) = m₂c₂(θ−T₂) + Q_loss',
    variables: [
      { symbol: 'm1', name: 'mass 1', unit: 'kg', description: '热的一方质量（或物体 1）' },
      { symbol: 'c1', name: 'specific heat capacity 1', unit: 'J kg⁻¹ °C⁻¹', description: '热的一方比热容（或 c1）' },
      { symbol: 'T1', name: 'initial temperature 1', unit: '°C', description: '热的一方初温（或 T1）' },
      { symbol: 'm2', name: 'mass 2', unit: 'kg', description: '冷的一方质量（或物体 2）' },
      { symbol: 'c2', name: 'specific heat capacity 2', unit: 'J kg⁻¹ °C⁻¹', description: '冷的一方比热容（或 c2）' },
      { symbol: 'T2', name: 'initial temperature 2', unit: '°C', description: '冷的一方初温（或 T2）' },
      { symbol: 'θ', name: 'final equilibrium temperature', unit: '°C', description: '平衡温度' },
      { symbol: 'Q_loss', name: 'heat lost to surroundings', unit: 'J', description: '向环境散失的热量' },
    ],
    description:
      '有热损失时：热的一方放热 = 冷的一方吸热 + 向环境散失的热量 Q_loss。常用于混合/量热题。',
    example: '0.5 kg 水 60°C 与 0.3 kg 水 18°C 混合，Q_loss=200 J → θ≈44.2°C',
  },
  {
    id: 'tg-10',
    name: 'Thermometer mark spacing',
    nameCN: '温度计每 1°C 刻度间距',
    expression: 'ΔX = (X₁₀₀ − X₀) / 100',
    variables: [
      { symbol: 'ΔX', name: 'spacing per 1°C', unit: 'a.u.', description: '每 1°C 的刻度间距（如 cm）' },
      { symbol: 'X0', name: 'property at 0°C', unit: 'a.u.', description: '0°C 时的读数（如长度）' },
      { symbol: 'X100', name: 'property at 100°C', unit: 'a.u.', description: '100°C 时的读数（如长度）' },
    ],
    description:
      '在 0°C 与 100°C 之间假设线性刻度，则每 1°C 的刻度间距等于总刻度差除以 100。',
    example: '水银柱长度：X0=2 cm，X100=24 cm → ΔX=(24−2)/100=0.22 cm',
  },
];

// 物理公式 - Transfer Processes
export const TEMPERATURE_GAS_FORMULAS_TP: Formula[] = [
  {
    id: 'tg-11',
    name: 'Conduction (rate of heat transfer)',
    nameCN: '传导：热传递速率',
    expression: 'P = kAΔT / L',
    variables: [
      { symbol: 'P', name: 'power (rate)', unit: 'W', description: '热传递速率 P' },
      { symbol: 'k', name: 'thermal conductivity', unit: 'W m⁻¹ K⁻¹', description: '导热系数 k' },
      { symbol: 'A', name: 'area', unit: 'm²', description: '面积 A' },
      { symbol: 'ΔT', name: 'temperature difference', unit: 'K', description: '温差 ΔT' },
      { symbol: 'L', name: 'thickness/length', unit: 'm', description: '厚度/长度 L' },
    ],
    description:
      '稳态传导中，热传递速率与导热系数、面积、温差成正比，与材料厚度成反比。提示：ΔT 用 K 或 °C 的“温差”数值相同。',
    example: 'k=0.04 W m⁻¹ K⁻¹, A=10 m², ΔT=15 K, L=0.10 m → P=60 W',
  },
  {
    id: 'tg-12',
    name: 'Convection (Newton’s law of cooling, simplified)',
    nameCN: '对流：热传递速率（简化）',
    expression: 'P = hAΔT',
    variables: [
      { symbol: 'P', name: 'power (rate)', unit: 'W', description: '热传递速率 P' },
      { symbol: 'h', name: 'convection coefficient', unit: 'W m⁻² K⁻¹', description: '对流换热系数 h' },
      { symbol: 'A', name: 'area', unit: 'm²', description: '面积 A' },
      { symbol: 'ΔT', name: 'temperature difference', unit: 'K', description: '温差 ΔT' },
    ],
    description:
      '对流换热常用 P = hAΔT（h 由流体、流速、表面形状等决定）。题目若给 h，可用此式估算对流换热速率。',
    example: 'h=8 W m⁻² K⁻¹, A=2 m², ΔT=10 K → P=160 W',
  },
  {
    id: 'tg-13',
    name: 'Radiation (Stefan–Boltzmann law)',
    nameCN: '辐射：斯特藩–玻尔兹曼定律',
    expression: 'P = εσA(T⁴ − T_env⁴)',
    variables: [
      { symbol: 'P', name: 'power (net)', unit: 'W', description: '净辐射功率 P' },
      { symbol: 'ε', name: 'emissivity', unit: '-', description: '发射率 ε（0~1）' },
      { symbol: 'A', name: 'area', unit: 'm²', description: '表面积 A' },
      { symbol: 'T', name: 'object temperature', unit: 'K', description: '物体温度 T（K）' },
      { symbol: 'T_env', name: 'surroundings temperature', unit: 'K', description: '环境温度 T_env（K）' },
    ],
    description:
      '净辐射功率：P = εσA(T⁴ − T_env⁴)，其中 σ = 5.67×10⁻⁸ W m⁻² K⁻⁴。注意：辐射公式必须用 K（绝对温度）。',
    example: 'ε=0.9, A=0.5 m², T=350 K, T_env=300 K → P≈165 W',
  },
  {
    id: 'tg-14',
    name: 'Thermal resistance (conduction)',
    nameCN: '热阻：传导（等效）',
    expression: 'R_th = L / (kA)',
    variables: [
      { symbol: 'R_th', name: 'thermal resistance', unit: 'K W⁻¹', description: '热阻 R_th' },
      { symbol: 'L', name: 'thickness/length', unit: 'm', description: '厚度/长度 L' },
      { symbol: 'k', name: 'thermal conductivity', unit: 'W m⁻¹ K⁻¹', description: '导热系数 k' },
      { symbol: 'A', name: 'area', unit: 'm²', description: '面积 A' },
    ],
    description:
      '把传导写成“电路类比”：R_th = L/(kA)，并可配合 P = ΔT / R_th 使用。厚度越大、面积越小、导热系数越小 ⇒ 热阻越大 ⇒ 越保温。',
    example: 'L=0.10 m, k=0.04, A=10 m² → R_th=0.25 K/W',
  },
];

// 供“公式计算”标签页使用：整合全主题公式
export const TEMPERATURE_GAS_FORMULAS: Formula[] = [
  ...TEMPERATURE_GAS_FORMULAS_THI,
  ...TEMPERATURE_GAS_FORMULAS_TP,
];

// 章节配置
export const TEMPERATURE_GAS_CHAPTERS: Chapter[] = [
  {
    id: 'temp-heat-internal',
    title: 'Temperature, Heat and Internal Energy',
    titleCN: '温度、热、內能',
    concepts: TEMPERATURE_GAS_CONCEPTS,
    formulas: TEMPERATURE_GAS_FORMULAS_THI,
    exercises: TEMPERATURE_GAS_EXERCISES.filter((e) => e.sectionId === 'temp-heat-internal'),
    simulations: [],
    completed: false,
  },
  {
    id: 'transfer-processes',
    title: 'Transfer Processes',
    titleCN: '热转移过程',
    concepts: TEMPERATURE_GAS_TRANSFER_CONCEPTS,
    formulas: TEMPERATURE_GAS_FORMULAS_TP,
    exercises: TEMPERATURE_GAS_EXERCISES.filter((e) => e.sectionId === 'transfer-processes'),
    simulations: [],
    completed: false,
  },
];
