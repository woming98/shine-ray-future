import { Chapter, Formula, Exercise, Concept, Simulation } from '../types';

// ============================================
// Force and Motion 主题内容
// Chapter 1: Position, Distance and Displacement
// 基于 DSE 真题风格设计
// ============================================

// 物理公式 - 位置与运动
export const FORCE_MOTION_FORMULAS: Formula[] = [
  {
    id: 'fm-1',
    name: 'Displacement (from rest, uniform acceleration)',
    nameCN: '匀加速位移公式（由静止）',
    expression: 's = ½at²',
    variables: [
      { symbol: 's', name: 'displacement', unit: 'm', description: '位移' },
      { symbol: 'a', name: 'acceleration', unit: 'm/s²', description: '加速度' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' },
    ],
    description: '物体由静止开始做匀加速运动时，位移等于加速度乘以时间平方的一半。这是自由落体问题最常用的公式。',
    example: '物体从静止自由下落，g = 10 m/s²，2秒后位移 s = ½ × 10 × 2² = 20 m',
  },
  {
    id: 'fm-2',
    name: 'Displacement (general form)',
    nameCN: '匀加速位移公式（通用）',
    expression: 's = ut + ½at²',
    variables: [
      { symbol: 's', name: 'displacement', unit: 'm', description: '位移' },
      { symbol: 'u', name: 'initial velocity', unit: 'm/s', description: '初速度' },
      { symbol: 'a', name: 'acceleration', unit: 'm/s²', description: '加速度' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' },
    ],
    description: '匀加速直线运动的位移公式。当初速度 u = 0 时，简化为 s = ½at²。',
    example: '初速度 5 m/s，加速度 2 m/s²，4秒内位移 s = 5×4 + ½×2×4² = 20 + 16 = 36 m',
  },
  {
    id: 'fm-3',
    name: 'Velocity-Time Relation',
    nameCN: '速度-时间关系',
    expression: 'v = u + at',
    variables: [
      { symbol: 'v', name: 'final velocity', unit: 'm/s', description: '末速度' },
      { symbol: 'u', name: 'initial velocity', unit: 'm/s', description: '初速度' },
      { symbol: 'a', name: 'acceleration', unit: 'm/s²', description: '加速度' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' },
    ],
    description: '匀加速运动中，末速度等于初速度加上加速度与时间的乘积。',
    example: '由静止开始，g = 8 m/s²，5秒后速度 v = 0 + 8 × 5 = 40 m/s',
  },
  {
    id: 'fm-4',
    name: 'Velocity-Displacement Relation',
    nameCN: '速度-位移关系（不含时间）',
    expression: 'v² = u² + 2as',
    variables: [
      { symbol: 'v', name: 'final velocity', unit: 'm/s', description: '末速度' },
      { symbol: 'u', name: 'initial velocity', unit: 'm/s', description: '初速度' },
      { symbol: 'a', name: 'acceleration', unit: 'm/s²', description: '加速度' },
      { symbol: 's', name: 'displacement', unit: 'm', description: '位移' },
    ],
    description: '当题目不涉及时间时使用此公式，常用于求落地速度。',
    example: '由静止下落 20m，g = 10 m/s²，v² = 0 + 2×10×20 = 400，v = 20 m/s',
  },
  {
    id: 'fm-5',
    name: 'Segment Displacement',
    nameCN: '分段位移计算',
    expression: 'Δs = s(t₂) - s(t₁)',
    variables: [
      { symbol: 'Δs', name: 'segment displacement', unit: 'm', description: '某段时间内的位移' },
      { symbol: 's(t₂)', name: 'displacement at t₂', unit: 'm', description: 't₂时刻的总位移' },
      { symbol: 's(t₁)', name: 'displacement at t₁', unit: 'm', description: 't₁时刻的总位移' },
    ],
    description: '计算某一时间段内的位移，需要用"总时间的位移"减去"之前时间的位移"。这是DSE常见的易错点！',
    example: '"再过4秒"的位移 = s(5) - s(1) = ½g×5² - ½g×1² = 100 - 4 = 96 m（当 g = 8 m/s²）',
  },
  {
    id: 'fm-6',
    name: 'Finding Intermediate Velocity',
    nameCN: '求中间点速度',
    expression: 'u = (s - ½at²) / t',
    variables: [
      { symbol: 'u', name: 'initial velocity of segment', unit: 'm/s', description: '该段起点速度' },
      { symbol: 's', name: 'segment displacement', unit: 'm', description: '该段位移' },
      { symbol: 'a', name: 'acceleration', unit: 'm/s²', description: '加速度' },
      { symbol: 't', name: 'time for segment', unit: 's', description: '该段用时' },
    ],
    description: '由 s = ut + ½at² 变形而来。当已知某段的位移、时间和加速度时，可求出该段起点的速度。这是"逆向求解"的关键公式。',
    example: 'A→B: s=100m, t=4s, g=9.81m/s²\nu = (100 - ½×9.81×16) / 4 = (100-78.48)/4 = 5.38 m/s',
  },
  {
    id: 'fm-7',
    name: 'Time to Reach Velocity',
    nameCN: '达到某速度所需时间',
    expression: 't = (v - u) / a',
    variables: [
      { symbol: 't', name: 'time', unit: 's', description: '时间' },
      { symbol: 'v', name: 'final velocity', unit: 'm/s', description: '末速度' },
      { symbol: 'u', name: 'initial velocity', unit: 'm/s', description: '初速度' },
      { symbol: 'a', name: 'acceleration', unit: 'm/s²', description: '加速度' },
    ],
    description: '由 v = u + at 变形而来。求从某速度加速/减速到另一速度所需的时间。',
    example: '由静止加速到 5.38 m/s（g=9.81）：t = (5.38-0)/9.81 = 0.55 s',
  },
  {
    id: 'fm-8',
    name: 'Average Velocity / Speed',
    nameCN: '平均速度/平均速率',
    expression: 'v_avg = s / t',
    variables: [
      { symbol: 'v_avg', name: 'average velocity (magnitude)', unit: 'm/s', description: '平均速度/平均速率' },
      { symbol: 's', name: 'displacement (or distance)', unit: 'm', description: '位移/路程' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' },
    ],
    description:
      '平均速度（Average velocity）= 位移 / 总时间；平均速率（Average speed）= 路程 / 总时间。做题时先判断题目要的是 displacement 还是 distance。',
    example: '直线位移 500 m，用时 36 s：v_avg = 500/36 = 13.9 m/s',
  },
  {
    id: 'fm-9',
    name: 'Acceleration from v-t Graph (Slope)',
    nameCN: '由 v–t 图像求加速度（斜率）',
    expression: 'a = (v₂ - v₁) / (t₂ - t₁)',
    variables: [
      { symbol: 'a', name: 'acceleration', unit: 'm/s²', description: '加速度' },
      { symbol: 'v2', name: 'velocity at t₂', unit: 'm/s', description: 't₂ 时速度 v₂' },
      { symbol: 'v1', name: 'velocity at t₁', unit: 'm/s', description: 't₁ 时速度 v₁' },
      { symbol: 't2', name: 'time t₂', unit: 's', description: 't₂' },
      { symbol: 't1', name: 'time t₁', unit: 's', description: 't₁' },
    ],
    description:
      '在速度-时间（v–t）图像上，斜率（slope）就是加速度。选两点代入即可，注意单位与正负号。',
    example: 'v 从 0 到 6 m/s，用时 3 s：a = (6-0)/(3-0) = 2 m/s²',
  },
  {
    id: 'fm-10',
    name: 'Time Interval from Frequency',
    nameCN: '由频率求时间间隔（频闪/打点）',
    expression: 'Δt = 1 / f',
    variables: [
      { symbol: 'Δt', name: 'time interval', unit: 's', description: '时间间隔 Δt' },
      { symbol: 'f', name: 'frequency', unit: 'Hz', description: '频率 f' },
    ],
    description:
      '频率 f（Hz）表示每秒次数。频闪/打点题的关键是先把“每秒几次”换成“每次间隔多少秒”。',
    example: '2 flashes per second：Δt = 1/2 = 0.5 s',
  },
  {
    id: 'fm-11',
    name: 'Distance in the Nth Second (Uniform Acceleration)',
    nameCN: '第 n 秒路程（匀加速）',
    expression: 'd_n = u + ½a(2n - 1)',
    variables: [
      { symbol: 'd_n', name: 'distance in nth second', unit: 'm', description: '第 n 秒路程 d_n' },
      { symbol: 'u', name: 'initial velocity', unit: 'm/s', description: '初速度 u' },
      { symbol: 'a', name: 'acceleration', unit: 'm/s²', description: '加速度 a' },
      { symbol: 'n', name: 'nth second', unit: '', description: '第 n 秒（n）' },
    ],
    description:
      '“第 n 秒路程”= s(n) − s(n−1)。对匀加速运动，可直接用 d_n = u + ½a(2n−1) 快速计算。',
    example: '自由落体 u=0，a=g=9.8，n=3：d3 = ½×9.8×5 = 24.5 m',
  },
  {
    id: 'fm-12',
    name: 'Speed Unit Conversion',
    nameCN: '速度单位换算（km/h ↔ m/s）',
    expression: 'v_ms = (5/18)v_kmh',
    variables: [
      { symbol: 'v_ms', name: 'speed in m/s', unit: 'm/s', description: '速度（m/s）' },
      { symbol: 'v_kmh', name: 'speed in km/h', unit: 'km/h', description: '速度（km/h）' },
    ],
    description:
      'DSE 常用换算：1 km/h = 5/18 m/s，所以 v(m/s) = v(km/h)×5/18；反过来乘以 18/5。',
    example: '50 km/h → v_ms = 50×5/18 = 13.9 m/s',
  },
  {
    id: 'fm-13',
    name: 'Displacement from v-t Graph (Area of Trapezium)',
    nameCN: '由 v–t 图像求位移（梯形面积）',
    expression: 's = ½(v1 + v2)Δt',
    variables: [
      { symbol: 's', name: 'displacement', unit: 'm', description: '位移/路程 s' },
      { symbol: 'v1', name: 'initial velocity (segment)', unit: 'm/s', description: '该段起始速度 v1' },
      { symbol: 'v2', name: 'final velocity (segment)', unit: 'm/s', description: '该段末速度 v2' },
      { symbol: 'Δt', name: 'time interval', unit: 's', description: '时间间隔 Δt' },
    ],
    description:
      '在 v–t 图像中，直线段下方的面积（trapezium）代表该段位移。若速度不变号，面积也等于路程。',
    example: '刹车：v1=14, v2=0, Δt=4.2 → s=½×(14+0)×4.2=29.4 m',
  },
  {
    id: 'fm-14',
    name: 'Total Stopping Distance (Reaction + Braking)',
    nameCN: '总停距（反应 + 制动）',
    expression: 's_total = v t_r + v² / (2a_d)',
    variables: [
      { symbol: 's_total', name: 'total stopping distance', unit: 'm', description: '总停距 s_total' },
      { symbol: 'v', name: 'initial speed', unit: 'm/s', description: '初速度 v' },
      { symbol: 't_r', name: 'reaction time', unit: 's', description: '反应时间 t_r' },
      { symbol: 'a_d', name: 'deceleration magnitude', unit: 'm/s²', description: '制动减速度大小 a_d' },
    ],
    description:
      '常见两段模型：反应阶段匀速（s_r = v t_r），制动阶段匀减速到停下（s_b = v²/(2a_d)，其中 a_d 取“减速度大小”）。总停距 s_total = s_r + s_b。',
    example: 'v=18 m/s, t_r=0.5 s, a_d=6 → s_total=18×0.5+18²/(2×6)=9+27=36 m',
  },
];

// 概念知识点 - 位置与运动
export const FORCE_MOTION_CONCEPTS: Concept[] = [
  {
    id: 'fmc-1',
    title: '位移与距离的区别',
    content: '位移（Displacement）是矢量，表示从起点到终点的直线距离，有方向性；距离（Distance）是标量，表示实际经过的路程长度。在直线运动中，如果方向不变，位移大小等于距离。',
    keyPoints: [
      '位移是矢量，有大小和方向',
      '距离是标量，只有大小',
      '位移可以为零（回到原点），但距离不能为零（只要运动过）',
      '向下运动时，通常取向下为正方向',
    ],
    examples: [
      '绕操场跑一圈：距离400m，位移0m',
      '电梯从1楼到10楼：位移向上，约27m',
      '自由落体：位移和距离相等（单向运动）',
    ],
    difficulty: 'basic',
  },
  {
    id: 'fmc-2',
    title: '匀加速直线运动',
    content: '物体沿直线运动，且加速度恒定不变的运动。自由落体是匀加速直线运动的特例，加速度为重力加速度 g。不同星球的 g 值不同。',
    keyPoints: [
      '加速度 a 恒定不变',
      's-t 图像是抛物线',
      'v-t 图像是直线（斜率为 a）',
      '每一秒下落的距离越来越大（等时位移递增）',
    ],
    examples: [
      '地球表面 g ≈ 9.8 m/s²',
      '月球表面 g ≈ 1.6 m/s²',
      '题目中行星X：g = 8 m/s²',
    ],
    difficulty: 'basic',
  },
  {
    id: 'fmc-3',
    title: '自由落体运动模型',
    content: '物体仅在重力作用下由静止开始下落的运动。忽略空气阻力时，所有物体的下落加速度相同，与质量无关。这是牛顿和伽利略的重要发现。',
    keyPoints: [
      '初速度 u = 0',
      '加速度 a = g（重力加速度）',
      '位移公式简化为 s = ½gt²',
      '速度公式简化为 v = gt',
    ],
    examples: [
      '从悬崖边释放石头',
      '高空跳伞初期（未开伞时近似）',
      '真空管中羽毛和铁球同时落地',
    ],
    difficulty: 'basic',
  },
  {
    id: 'fmc-4',
    title: '⚠️ 易错点：总时间 vs 分段时间',
    content: '当题目说"再过 t 秒"时，必须用总时间代入公式，而不是只用"再过"的那段时间！这是 DSE 最常见的陷阱之一。',
    keyPoints: [
      '"再过4秒"意味着总时间 = 原时间 + 4秒',
      '位移公式 s = ½gt² 中的 t 是总时间',
      '若要算"后4秒的位移"，需要 s(总) - s(之前)',
      '仔细读题：区分"t秒后的位置"和"t秒内的位移"',
    ],
    examples: [
      '第1秒后位置：s₁ = ½g(1)² = 4m',
      '第5秒后位置：s₅ = ½g(5)² = 100m',
      '后4秒的位移：Δs = 100 - 4 = 96m',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-5',
    title: '运动学公式选择策略',
    content: '根据题目给出的已知量和要求的未知量，选择最合适的公式。避免绕弯路，一步到位。',
    keyPoints: [
      '有 t 无 v：用 s = ut + ½at²',
      '有 v 无 t：用 v² = u² + 2as',
      '求 v 知 t：用 v = u + at',
      '由静止开始：令 u = 0 简化公式',
    ],
    examples: [
      '知道下落时间求位移 → s = ½gt²',
      '知道下落高度求末速 → v² = 2gs',
      '知道末速求时间 → t = v/g',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-6',
    title: '速率与速度的区别',
    content: 'Speed（速率）是标量，只有大小，表示物体运动的快慢；Velocity（速度）是矢量，有大小和方向。物体可以保持恒定速率但速度变化（如转弯），也可以速度为零但加速度不为零（如抛体最高点）。',
    keyPoints: [
      'Speed 是标量，Velocity 是矢量',
      '匀速运动（uniform velocity）意味着加速度为零',
      '恒定速率（constant speed）不一定是匀速运动',
      '方向改变时，即使速率不变，速度也在变化',
    ],
    examples: [
      '汽车转弯：速率不变，但速度方向改变',
      '圆周运动：速率恒定，但速度不断变化',
      '抛体最高点：速度为零，但加速度 = g ≠ 0',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-7',
    title: '中间点分析法',
    content: '当题目给出运动过程中某一段（如 A 到 B）的数据时，可以先求出该段起点的速度，再利用这个速度反推之前或之后的运动。这是 DSE 常见的"逆向求解"技巧。',
    keyPoints: [
      '把整个运动拆分成多段',
      '利用已知段的数据求中间点速度',
      '中间点的末速度 = 下一段的初速度',
      '公式选择：已知 s、t、a，用 s = ut + ½at² 求 u',
    ],
    examples: [
      '已知 A→B 用时4s、位移100m，先求 A 点速度',
      '自由落体经过窗户：已知窗户高度和经过时间，求起点高度',
      '汽车刹车：已知某段刹车数据，求初始速度',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-8',
    title: '瞬时状态 vs 过程状态',
    content: '物体的瞬时速度和瞬时加速度是独立的量。速度为零不意味着加速度为零；加速度为零也不意味着速度为零。理解这一点是解决运动学概念题的关键。',
    keyPoints: [
      '瞬时速度 v = 0 时，加速度可以不为零',
      '加速度 a = 0 时，速度可以不为零（匀速运动）',
      '速度和加速度的方向可以相同或相反',
      '速度和加速度方向相反时，物体减速',
    ],
    examples: [
      '竖直上抛最高点：v = 0，a = g = 9.81 m/s²',
      '匀速行驶的汽车：v ≠ 0，a = 0',
      '刹车中的汽车：v 和 a 方向相反',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-9',
    title: '运动图像三件套 (Motion Graphs Toolkit)',
    content:
      '在 DSE 运动学题中，图像往往比公式更关键：看斜率（slope）与面积（area）就能直接读出速度、加速度与位移。掌握 s–t、v–t、a–t 三种图像的对应关系，可以快速做出判断题与图像题。',
    keyPoints: [
      's–t 图像斜率 = v（Velocity is the slope of displacement–time graph）',
      'v–t 图像斜率 = a（Acceleration is the slope of velocity–time graph）',
      'a–t 图像面积 = Δv（Area under acceleration–time graph gives change in velocity）',
      '匀加速 (uniform acceleration) ⇒ v–t 是直线；s–t 是开口向上的曲线 (parabola)',
    ],
    examples: [
      'v–t 直线从 (0,0) 到 (3s,6m/s)：a = 6/3 = 2 m/s²',
      's–t 的斜率越来越大：速度在增加 (speeding up)',
      'v–t 水平线：a = 0（constant velocity）',
    ],
    difficulty: 'basic',
  },
  {
    id: 'fmc-10',
    title: 'v–t 图像面积：位移 vs 路程 (Displacement vs Distance)',
    content:
      'v–t 图像下面的“带符号面积”（signed area）代表位移 displacement；若要算路程 distance，则要把速度为负时的面积取绝对值再相加。出现掉头/反向（velocity changes sign）时，这是最常见的陷阱之一。',
    keyPoints: [
      '位移 displacement = v–t 图像下的带符号面积 (signed area)',
      '路程 distance = |面积| 的总和 (sum of absolute areas)',
      '最大离开起点距离通常发生在 v 首次变为 0 的时刻（turning point）',
      '判断“谁领先/追上”→ 比较到同一时刻的累计位移（比较面积）',
    ],
    examples: [
      '上抛运动：先 v>0 再 v<0；位移可为 0，但路程一定 >0',
      '速度先正后负：到 v=0 的时刻距离最远',
      '两人 v–t 图：面积更大者走得更远（ahead）',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-11',
    title: '单位换算与合理性检查 (Unit & Sanity Check)',
    content:
      '很多运动题的坑不在物理，而在单位。DSE 常见混用 km/h、m/s、cm/s、m、s。做题前先统一单位，再用数量级（order of magnitude）检查答案是否合理。',
    keyPoints: [
      'km/h → m/s：乘以 5/18（Multiply by 5/18）',
      'm/s → km/h：乘以 18/5（Multiply by 18/5）',
      'cm/s ↔ m/s：除/乘 100（1 m = 100 cm）',
      'Sanity check：50 km/h ≈ 14 m/s；1 s 内不可能开出几百米',
    ],
    examples: [
      '50 km/h ≈ 13.9 m/s（常用记忆点）',
      '2 flashes per second ⇒ Δt = 0.5 s',
      '若算出 t = 0.1 s 跑 500 m：明显不合理',
    ],
    difficulty: 'basic',
  },
  {
    id: 'fmc-12',
    title: '第 n 秒路程/某段位移 (Nth-second Distance & Segment Displacement)',
    content:
      '题目问“第 3 秒走了多少”或“后 4 秒位移”时，不能直接把 t=3 或 t=4 代入总位移公式。正确做法是用总位移差：Δs = s(t2) − s(t1)。匀加速时也可以用更快的思路。',
    keyPoints: [
      '某段位移：Δs = s(t2) − s(t1)（Segment displacement）',
      '第 n 秒路程：d_n = s(n) − s(n−1)',
      '匀加速且从静止：s(t)=½at² ⇒ d_n = ½a(2n−1)',
      '看到 “a further …” 要先变成总时间（convert to total time first）',
    ],
    examples: [
      '自由落体：第 1 秒 4.9 m；第 3 秒 = s(3) − s(2) = 24.5 m',
      'x=第1秒，y=第2秒：x:y=1:3',
      '已知 1 s 后 4 m，再过 4 s：算 s(5) 不是 s(4)',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-13',
    title: '刹车模型：反应距离 + 制动距离 (Reaction + Braking Distance)',
    content:
      '交通安全题一般分两段：看到危险到踩刹车前是“反应段”（匀速），踩下刹车后是“制动段”（匀减速）。总停距 = 反应距离 + 制动距离。很多题会用 speed–time 图像的面积来算距离。',
    keyPoints: [
      '反应距离：s_r = v × t_reaction（constant speed）',
      '制动距离：用 v² = u² + 2as，停车时 v=0',
      '同样制动条件（|a| 相同）⇒ 制动距离 s ∝ u²',
      'speed–time 图像面积 = 路程（area gives distance travelled）',
    ],
    examples: [
      'v=18 m/s，反应 0.5 s：反应距离 9 m，剩余距离才用来制动',
      '50→70 km/h：制动距离倍率 = (70/50)²=1.96',
      '图像拆分：矩形(反应) + 三角形(刹车)',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-14',
    title: '线性化图像：s–t² 与 v²–s (Linearization Tricks)',
    content:
      '有些题故意把图像画成 s 对 t² 或 v² 对 s，让你用“斜率”直接求加速度。核心是把匀加速公式写成 y = mx + c 的线性形式：用 slope（斜率）找参数。',
    keyPoints: [
      '从静止匀加速：s = ½at² ⇒ s–t² 图的 slope = ½a',
      '一般匀加速：v² = u² + 2as ⇒ v²–s 图的 slope = 2a，intercept = u²',
      '读斜率要取两点（two points），单位也要跟着变',
      '若图像是直线 ⇒ 匀加速（constant acceleration）假设成立',
    ],
    examples: [
      's–t² 图 slope=1 ⇒ a=2 m/s²',
      'v²–s 图 slope=1 ⇒ 2a=1 ⇒ a=0.5 m/s²',
      'v²–s 在 s=0 的截距 = u²（可反推出初速）',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-15',
    title: '追及/相遇：用“位移相同”判断 (Catch-up & Meeting)',
    content:
      '同一直线的追及/相遇，本质条件只有一个：同一时刻两者位移相同（same displacement at the same time）。若给 v–t 图，直接比较面积；若给公式，列出 s_A(t)=s_B(t)。',
    keyPoints: [
      '相遇条件：s_A(t) = s_B(t)（meeting condition）',
      '给 v–t 图：比较从 0 到 t 的面积（area under v–t）',
      '“谁领先”取决于累计位移，而不是瞬时速度大小',
      '速度相同不一定在同一位置；位置相同必须位移相同',
    ],
    examples: [
      '车与卡车：t=20 s 追上 ⇔ 两条 v–t 图面积相等',
      '两人同起点：某时刻 v 相同，但面积不同 ⇒ 不在同一点',
      '用面积看“追上”比解方程更快',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-16',
    title: '实验读图：Ticker-tape / Stroboscope (Equal-time Recording)',
    content:
      'ticker-tape（打点纸带）与 stroboscope（频闪）都在“等时间间隔”上记录位置。相邻点距代表该时间段的平均速率；点距按等差增大意味着匀加速；频率决定每次记录的时间间隔。',
    keyPoints: [
      '等时间间隔 ⇒ 相邻点距 ∝ 平均速度 (spacing ∝ average speed)',
      '点距等差增大 ⇒ 速度等差增大 ⇒ 加速度恒定 (constant acceleration)',
      '频闪 f（Hz）⇒ Δt = 1/f（time between flashes）',
      '位移是“累计”（cumulative），别把单段当总位移',
    ],
    examples: [
      '2 flashes/s ⇒ Δt = 0.5 s；MN 位移 20 cm ⇒ v_avg = 40 cm/s',
      '纸带 1,2,3,4,5,6 cm：v 均匀增加 ⇒ a 恒定',
      '判断 (1)(2)(3)：看“每段长度”与“累计长度”区别',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-17',
    title: '二维位移合成与平均速度 (Vector Displacement & Average Velocity)',
    content:
      '很多“走曲线/走多段路”的题，关键是区分 distance 与 displacement。平均速度（average velocity）用位移/时间；平均速率（average speed）用路程/时间。二维位移通常用分量 (components) + 勾股 (Pythagoras)。',
    keyPoints: [
      '平均速度 v_avg = displacement / total time（vector）',
      '平均速率 speed_avg = distance / total time（scalar）',
      '位移用分量合成：s = √(x²+y²)',
      '平均速度的大小 ≤ 平均速率（displacement ≤ distance）',
    ],
    examples: [
      '向西 40m、向南 40m、向东 70m：位移=√(30²+40²)=50m',
      '走半圆到半圆：平均速度用 AC 的直线位移，不用弧长',
      '恒定速率 50 km/h：平均速度不可能超过 50 km/h',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-18',
    title: '正负号与方向约定 (Sign Convention)',
    content:
      '竖直运动、刹车、掉头题的核心是“先定正方向，再全程一致”。只要方向一变，速度/加速度就可能变号。用同一套 sign convention 可以避免“代公式全对但答案全错”。',
    keyPoints: [
      '先选正方向（Choose a positive direction）并保持一致',
      '向上为正：重力加速度 a = −g；向下为正：a = +g',
      '减速：a 与 v 方向相反（acceleration opposite to velocity）',
      '看图像符号：v<0 表示向负方向运动，别把速度当“负的速率”',
    ],
    examples: [
      '上抛最高点：v=0，但 a 仍为 −g（若向上为正）',
      '从楼顶抛上：到地面位移是负值（若向上为正）',
      '位移–时间图斜率为负：速度为负（向反方向运动）',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'fmc-19',
    title: '相对运动：同加速度时“间距不变” (Relative Motion)',
    content:
      '如果两个物体在同一方向上具有相同加速度（例如都在自由落体且忽略空气阻力），它们的相对加速度为 0，因此相对速度保持不变；若初始相对速度为 0，则两者间距始终不变。这类题用相对运动更快。',
    keyPoints: [
      '相对加速度 a_rel = a1 − a2',
      '若 a1 = a2 ⇒ a_rel = 0 ⇒ 相对速度恒定 (relative velocity constant)',
      '若初始相对速度也为 0 ⇒ 间距保持不变 (separation remains constant)',
      '同一 g 下自由落体与质量无关（mass independent）',
    ],
    examples: [
      '两球同时释放：一直保持原来的间距',
      '同一高度释放不同质量：落地时间相同',
      '相对运动能避免写两条 s(t) 方程',
    ],
    difficulty: 'advanced',
  },
];

// 练习题 - DSE Style (All in English)
// Position and Movement 板块
export const FORCE_MOTION_EXERCISES: Exercise[] = [
  {
    id: 'pm-001',
    type: 'multiple_choice',
    question: 'A body is dropped from rest down a cliff on a planet $X$. After falling for 1 s, it is 4 m below the starting point. How far below the starting point will it be after a further 4 s?',
    options: ['40 m', '64 m', '80 m', '100 m'],
    answer: '100 m',
    explanation: '⚠️ **Key point:** "a further 4 s" means the total time from the start is 1 + 4 = 5 s, not just 4 s.\n\n**Step 1:** Find the gravitational acceleration g on planet X\nUsing $s = ut + \\frac{1}{2}at^2$:\n$$4 = (0)(1) + \\frac{1}{2}g(1)^2$$\n$$4 = \\frac{1}{2}g$$\n$$g = 8 \\text{ m/s²}$$\n\n**Step 2:** Find the displacement after a total of 5 seconds\nSince the body starts from rest (u = 0) and we now know g = 8 m/s²:\n$$s = ut + \\frac{1}{2}gt^2$$\n$$s = (0)(5) + \\frac{1}{2}(8)(5)^2$$\n$$s = \\frac{1}{2}(8)(25) = 100 \\text{ m}$$\n\n**Verification:**\n- After 1 s: $s_1 = \\frac{1}{2}(8)(1)^2 = 4$ m ✓\n- After 5 s: $s_5 = \\frac{1}{2}(8)(25) = 100$ m ✓\n\n⚠️ **Common mistake:** Using t = 4 s gives $s = \\frac{1}{2}(8)(16) = 64$ m, which is wrong! This would be the displacement from rest in 4 s, not "after a further 4 s".',
    difficulty: 2,
    points: 15,
    hints: [
      'First, find the gravitational acceleration g using the information from the first second',
      '"A further 4 s" means the total time from the start is 1 + 4 = 5 s',
      'Use s = ut + ½gt² with u = 0 and the g value you found'
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 2
  {
    id: 'pm-002',
    type: 'multiple_choice',
    question: 'A particle released from rest at $O$ falls freely under gravity and passes $A$ and $B$, as shown in the figure (not drawn to scale). If the particle takes 4 s to move from $A$ to $B$, where $AB = 100 \\text{ m}$, how long does it take to fall from $O$ to $A$?',
    options: ['0.55 s', '1.10 s', '2.20 s', '4.40 s'],
    answer: '0.55 s',
    explanation: '⚠️ **Key point:** This is a two-step problem. First, find the velocity at point $A$ using the motion from $A$ to $B$, then use that velocity to find the time from $O$ to $A$.\n\n**Step 1: Find the velocity at point A**\nFrom $A$ to $B$:\n- Displacement: $s = 100 \\text{ m}$\n- Time: $t = 4 \\text{ s}$\n- Acceleration: $a = g = 9.81 \\text{ m/s²}$\n- Initial velocity at $A$: $u$ (unknown)\n\nUsing $s = ut + \\frac{1}{2}at^2$:\n$$100 = u(4) + \\frac{1}{2}(9.81)(4)^2$$\n$$100 = 4u + \\frac{1}{2}(9.81)(16)$$\n$$100 = 4u + 78.48$$\n$$4u = 100 - 78.48 = 21.52$$\n$$u = 5.38 \\text{ m/s}$$\n\n**Step 2: Find the time from O to A**\nFrom $O$ to $A$:\n- Initial velocity at $O$: $u_O = 0$ (released from rest)\n- Final velocity at $A$: $v_A = 5.38 \\text{ m/s}$ (from Step 1)\n- Acceleration: $a = g = 9.81 \\text{ m/s²}$\n- Time: $t$ (unknown)\n\nUsing $v = u + at$:\n$$5.38 = 0 + (9.81)t$$\n$$t = \\frac{5.38}{9.81} = 0.548 \\text{ s} \\approx 0.55 \\text{ s}$$\n\n**Verification:**\n- Check Step 1: Using $s = ut + \\frac{1}{2}at^2$ with $u = 5.38 \\text{ m/s}$:\n  $$s = (5.38)(4) + \\frac{1}{2}(9.81)(16) = 21.52 + 78.48 = 100 \\text{ m} \\checkmark$$\n- Check Step 2: Using $v = u + at$ with $u = 0$:\n  $$v = 0 + (9.81)(0.548) = 5.38 \\text{ m/s} \\checkmark$$\n\n⚠️ **Common mistake:** Do not assume that the time from $O$ to $A$ is half of the time from $A$ to $B$. The motion is not uniform, so the time intervals are not proportional to the distances.',
    difficulty: 3,
    points: 20,
    hints: [
      'First, find the velocity at point A using the motion from A to B (s = 100 m, t = 4 s)',
      'Use the equation s = ut + ½at² to find the initial velocity at A',
      'Then use the velocity at A as the final velocity for the motion from O to A',
      'Apply v = u + at with u = 0 (released from rest) to find the time from O to A'
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-002-question.png'],
  },
  // Position and Movement - Question 3
  {
    id: 'pm-003',
    type: 'multiple_choice',
    question: 'Which of the following statements concerning the motion of a body is/are correct?\n(1) A body has no acceleration when it is moving with a uniform velocity.\n(2) A body can have zero velocity but also be accelerating.\n(3) A body can have a constant speed but a varying velocity.',
    options: ['(1) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation: '⚠️ **Key point:** This question tests understanding of the relationships between velocity, speed, and acceleration. All three statements are correct.\n\n**Statement (1): A body has no acceleration when it is moving with a uniform velocity.**\n- **Correct** ✓\n- Uniform velocity means constant speed AND constant direction\n- Since velocity is constant, acceleration $a = 0$\n- **Reason:** Acceleration is the rate of change of velocity. If velocity is constant (both magnitude and direction), then acceleration must be zero.\n\n**Statement (2): A body can have zero velocity but also be accelerating.**\n- **Correct** ✓\n- **Example:** A ball projected vertically upwards\n- At the highest point, the ball\'s velocity is zero ($v = 0$)\n- However, acceleration due to gravity is still present: $a = g = 9.81 \\text{ m/s²} \\neq 0$\n- **Reason:** Velocity and acceleration are independent quantities. Zero velocity does NOT mean zero acceleration. Acceleration is the rate of change of velocity, and it can be non-zero even when velocity is momentarily zero.\n\n**Statement (3): A body can have a constant speed but a varying velocity.**\n- **Correct** ✓\n- **Example:** A car turning around a corner with constant speed\n- Speed (magnitude of velocity) is constant: $|\\vec{v}| = \\text{constant}$\n- However, velocity (vector) is changing because the direction is changing\n- **Reason:** Velocity is a vector quantity with both magnitude and direction. Speed is the magnitude of velocity. If the direction changes, velocity changes, even if speed (magnitude) remains constant.\n\n**Summary:**\n- Statement (1): Uniform velocity → $a = 0$ ✓\n- Statement (2): $v = 0$ but $a \\neq 0$ is possible ✓\n- Statement (3): Constant speed but varying velocity is possible ✓\n\n**Answer:** All three statements are correct. **D. (1), (2) & (3)**\n\n⚠️ **Common misconceptions:**\n- ❌ "Zero velocity means zero acceleration" → Wrong! (See Statement 2)\n- ❌ "Constant speed means constant velocity" → Wrong! (See Statement 3)\n- ❌ "Acceleration always means speed is changing" → Wrong! Acceleration can change direction without changing speed.',
    difficulty: 2,
    points: 15,
    hints: [
      'Remember that velocity is a vector (has magnitude and direction), while speed is a scalar (magnitude only)',
      'Acceleration is the rate of change of velocity, not speed',
      'Think of examples: a ball thrown upward (zero velocity at top, but still accelerating), a car turning (constant speed but changing direction)',
      'Uniform velocity means constant speed AND constant direction, so acceleration must be zero'
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 4
  {
    id: 'pm-004',
    type: 'multiple_choice',
    question: 'The diagram shows how the velocity of a body varies with time. What is the distance travelled in the first 4 s?',
    options: ['4 m', '8 m', '10 m', '12 m'],
    answer: '12 m',
    explanation: '⚠️ **Key point:** The distance travelled equals the area under a velocity–time graph.\n\n**Step 1:** Read the velocities from the graph\n- At $t = 0\\text{ s}$, $v = 2\\text{ m/s}$\n- At $t = 4\\text{ s}$, $v = 4\\text{ m/s}$\n\n**Step 2:** Find the area of the trapezium (0 to 4 s)\n$$s = \\frac{(2 + 4)\\times 4}{2} = 12\\text{ m}$$\n\n**Verification:** Average velocity $= \\frac{2 + 4}{2} = 3\\text{ m/s}$, so $s = 3\\times 4 = 12\\text{ m}$ ✓',
    difficulty: 1,
    points: 10,
    hints: [
      'Distance travelled equals the area under a velocity–time graph',
      'From 0 to 4 s, the region is a trapezium with parallel sides 2 and 4',
      'Use area = (sum of parallel sides × height) / 2'
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-004-question.png'],
  },
  // Position and Movement - Question 5
  {
    id: 'pm-005',
    type: 'multiple_choice',
    question: 'Which of the following velocity-time graphs correctly shows the motion of a ping-pong ball falling freely in a vacuum?',
    options: [
      '/physics/exercises/position-movement/pm-005-option-a.png',
      '/physics/exercises/position-movement/pm-005-option-b.png',
      '/physics/exercises/position-movement/pm-005-option-c.png',
      '/physics/exercises/position-movement/pm-005-option-d.png',
    ],
    answer: '/physics/exercises/position-movement/pm-005-option-b.png',
    explanation: '⚠️ **Key point:** In a vacuum, the ball experiences negligible air resistance, so it falls with constant acceleration $g$.\n\n**Step 1:** Use the free-fall velocity relation\nReleased from rest: $u = 0$\n$$v = u + gt \\;\\Rightarrow\\; v = gt$$\n\n**Step 2:** Interpret the velocity–time graph\n- Constant acceleration means the slope of the $v$-$t$ graph is constant\n- Since $v = 0$ at $t = 0$, the line passes through the origin\n\n**Conclusion:** The correct graph is a straight line starting from the origin → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'In a vacuum, air resistance is negligible, so acceleration remains constant',
      'Free fall has constant acceleration, so v increases linearly with time',
      'A constant slope on a v-t graph means constant acceleration',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 6
  {
    id: 'pm-006',
    type: 'multiple_choice',
    question: 'A car moving with speed $50\\text{ km h}^{-1}$ can be stopped in a distance of 15 m. In what distance can the car be stopped when its speed is $70\\text{ km h}^{-1}$ under the same condition?',
    options: ['10.9 m', '17.7 m', '21.0 m', '29.4 m'],
    answer: '29.4 m',
    explanation: '⚠️ **Key point:** Under the same braking condition, the (magnitude of) deceleration is the same, so stopping distance is proportional to the square of the initial speed.\n\n**Step 1:** Use $v^2 = u^2 + 2as$ for stopping\nWhen the car stops, $v = 0$:\n$$0 = u^2 + 2as \\;\\Rightarrow\\; u^2 = -2as$$\nSince $a$ is negative during braking, $u^2 = 2|a|s$.\n\n**Step 2:** Compare the two cases\nWith the same braking condition, $|a|$ is constant, so $s \\propto u^2$.\n$$\\frac{s_2}{s_1} = \\left(\\frac{u_2}{u_1}\\right)^2$$\n\n**Step 3:** Calculate $s_2$\n$$s_2 = 15\\times\\left(\\frac{70}{50}\\right)^2 = 15\\times 1.96 = 29.4\\text{ m}$$\n\n**Conclusion:** The stopping distance is $29.4\\text{ m}$ → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'For stopping, set v = 0 in v² = u² + 2as',
      'Same condition means the deceleration magnitude is the same',
      'Stopping distance is proportional to the square of the speed',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 7
  {
    id: 'pm-007',
    type: 'multiple_choice',
    question: 'The graph shows the variation of the velocity of a car with time. What is the acceleration of the car?',
    options: ['0.5 m/s²', '1.5 m/s²', '2.0 m/s²', '4.0 m/s²'],
    answer: '2.0 m/s²',
    explanation: '⚠️ **Key point:** The acceleration equals the slope (gradient) of a velocity–time graph.\n\n**Step 1:** Read two points on the straight line\n- At $t = 0\\text{ s}$, $v = 0\\text{ m/s}$\n- At $t = 3\\text{ s}$, $v = 6\\text{ m/s}$\n\n**Step 2:** Calculate the slope\n$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{6 - 0}{3 - 0} = 2\\text{ m/s}^2$$\n\n**Conclusion:** The acceleration is $2.0\\text{ m/s}^2$ → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'The slope of a v-t graph gives acceleration',
      'Use a = (change in v) / (change in t)',
      'Read v at t = 0 s and t = 3 s from the graph',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-007-question.png'],
  },
  // Position and Movement - Question 8
  {
    id: 'pm-008',
    type: 'multiple_choice',
    question: 'A body falls freely from rest. What are the distances travelled in the first and third second?',
    options: [
      'First: 4.9 m; Third: 14.7 m',
      'First: 4.9 m; Third: 19.6 m',
      'First: 4.9 m; Third: 24.5 m',
      'First: 9.8 m; Third: 39.2 m',
    ],
    answer: 'First: 4.9 m; Third: 24.5 m',
    explanation: '⚠️ **Key point:** In free fall from rest, the total displacement after time $t$ is $s = \\frac{1}{2}gt^2$. The distance travelled in the $n$th second is $s(n) - s(n-1)$.\n\n**Step 1:** Use $s = \\frac{1}{2}gt^2$ with $g = 9.81\\text{ m/s}^2$\n$$s \\approx 4.905t^2 \\approx 4.9t^2$$\n\n**Step 2:** Find total displacement after 1 s, 2 s, and 3 s\n$$s_1 = 4.9(1)^2 = 4.9\\text{ m}$$\n$$s_2 = 4.9(2)^2 = 19.6\\text{ m}$$\n$$s_3 = 4.9(3)^2 = 44.1\\text{ m}$$\n\n**Step 3:** Find the distances in the 1st and 3rd second\n- First second: $s_1 = 4.9\\text{ m}$\n- Third second: $s_3 - s_2 = 44.1 - 19.6 = 24.5\\text{ m}$\n\n**Conclusion:** First: $4.9\\text{ m}$, Third: $24.5\\text{ m}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'For free fall from rest, use s = ½gt²',
      'The distance in the 3rd second is s(3) − s(2), not s(3)',
      'Compute s1, s2, s3, then take the differences',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 9
  {
    id: 'pm-009',
    type: 'multiple_choice',
    question: 'The diagram above shows a ticker-tape produced by a trolley being pulled by a rubber band. Which of the following statements about the trolley is/are true?\n(1) Its displacement increases uniformly with time.\n(2) Its velocity increases uniformly with time.\n(3) Its acceleration increases uniformly with time.',
    options: ['(1) only', '(2) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation: '⚠️ **Key point:** On a ticker-tape, the length of each equal-time section represents the speed (velocity magnitude) during that time interval.\n\n**Step 1:** Check displacement vs time (statement 1)\nFrom the tape, the cumulative displacement after each interval is:\n$1, 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21$ cm.\nThe increases are not equal, so displacement does **not** increase uniformly with time.\n\n**Step 2:** Check velocity vs time (statement 2)\nThe section lengths are $1,2,3,4,5,6$ cm in equal time intervals.\nSo the velocity increases by the same amount each interval → velocity increases uniformly with time.\n\n**Step 3:** Check acceleration vs time (statement 3)\nIf velocity increases uniformly, acceleration is constant (does not increase).\nSo statement (3) is false.\n\n**Conclusion:** Only statement (2) is true → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Each section corresponds to the same time interval',
      'Section length represents speed for that interval',
      'If the section lengths increase by equal steps, acceleration is constant',
      'Displacement is cumulative, so add the section lengths to check statement (1)',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-009-question.png'],
  },
  // Position and Movement - Question 10
  {
    id: 'pm-010',
    type: 'multiple_choice',
    question: 'An object is accelerated from rest along a straight line. The graph shows the variation of its displacement with the square of time. What is the acceleration of the object?',
    options: ['0.5 m/s²', '1.0 m/s²', '2.0 m/s²', '4.0 m/s²'],
    answer: '2.0 m/s²',
    explanation: '⚠️ **Key point:** For motion from rest with constant acceleration, $s = \\frac{1}{2}at^2$. A straight-line $s$ vs $t^2$ graph has slope $\\frac{1}{2}a$.\n\n**Step 1:** Find the slope of the graph\nFrom the graph, a point is $(t^2, s) = (4\\text{ s}^2, 4\\text{ m})$.\n$$\\text{slope} = \\frac{\\Delta s}{\\Delta (t^2)} = \\frac{4 - 0}{4 - 0} = 1\\text{ m/s}^2$$\n\n**Step 2:** Relate slope to acceleration\nSince $s = \\frac{1}{2}at^2$, we have $\\text{slope} = \\frac{1}{2}a$.\n$$\\frac{1}{2}a = 1 \\;\\Rightarrow\\; a = 2\\text{ m/s}^2$$\n\n**Conclusion:** The acceleration is $2.0\\text{ m/s}^2$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'From rest with constant acceleration: s = ½at²',
      'A straight-line s vs t² graph has slope = ½a',
      'Use the point (t², s) = (4, 4) from the graph',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-010-question.png'],
  },
  // Position and Movement - Question 11
  {
    id: 'pm-011',
    type: 'multiple_choice',
    question: 'The figure shows a stroboscopic photograph of a ball rolling down a slope. If the stroboscope makes 2 flashes per second, in which region does the ball have an average speed of $40\\text{ cm s}^{-1}$?',
    options: ['LM', 'MN', 'NO', 'OP'],
    answer: 'MN',
    explanation: '⚠️ **Key point:** Average speed over a region equals the displacement between two flashes divided by the time interval between flashes.\n\n**Step 1:** Find the time interval between flashes\nThe stroboscope makes 2 flashes per second, so\n$$\\Delta t = \\frac{1}{2} = 0.5\\text{ s}$$\n\n**Step 2:** Use the displacement marks to find the distance travelled\nFrom the figure:\n- At $M$, displacement = $16\\text{ cm}$\n- At $N$, displacement = $36\\text{ cm}$\nSo distance from $M$ to $N$ is\n$$\\Delta s = 36 - 16 = 20\\text{ cm}$$\n\n**Step 3:** Compute the average speed in region MN\n$$v_{\\text{avg}} = \\frac{\\Delta s}{\\Delta t} = \\frac{20}{0.5} = 40\\text{ cm s}^{-1}$$\n\n**Conclusion:** The region is $MN$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      '2 flashes per second means each interval is 0.5 s',
      'Average speed = distance travelled / time taken',
      'Use the displacement values at M and N to get the distance for MN',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-011-question.png'],
  },
  // Position and Movement - Question 12
  {
    id: 'pm-012',
    type: 'multiple_choice',
    question: 'An object is falling from rest with an acceleration of $9.8\\text{ m s}^{-2}$. Which of the following statements is/are correct?\n(1) It falls with a constant speed of $9.8\\text{ m s}^{-1}$.\n(2) It falls $9.8\\text{ m}$ every second.\n(3) It has a speed of $19.6\\text{ m s}^{-1}$ after $2\\text{ s}$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation: '⚠️ **Key point:** Acceleration means velocity changes with time. For free fall from rest with constant $g$, $v = gt$ and $s = \\frac{1}{2}gt^2$.\n\n**Statement (1):** False. With acceleration $9.8\\text{ m s}^{-2}$, the speed is increasing, so it is not constant.\n\n**Statement (2):** False. After $1\\text{ s}$,\n$$s = \\frac{1}{2}gt^2 = \\frac{1}{2}(9.8)(1)^2 = 4.9\\text{ m}$$\nAlso, with constant acceleration, the distance travelled each second increases (it is not the same every second).\n\n**Statement (3):** True. After $2\\text{ s}$,\n$$v = gt = 9.8\\times 2 = 19.6\\text{ m s}^{-1}$$\n\n**Conclusion:** Only statement (3) is correct → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Acceleration means velocity changes with time',
      'From rest with constant acceleration: v = gt and s = ½gt²',
      'Check each statement using t = 1 s and t = 2 s',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 13
  {
    id: 'pm-013',
    type: 'multiple_choice',
    question: 'A particle is thrown vertically upwards. When the particle is at the maximum height, its acceleration is',
    options: ['zero.', 'changing from upwards to downwards.', 'pointing upwards.', 'pointing downwards.'],
    answer: 'pointing downwards.',
    explanation: '⚠️ **Key point:** Velocity and acceleration are independent. At the highest point, the velocity is momentarily zero, but gravity still acts.\n\nAt maximum height:\n- Velocity: $v = 0$\n- Acceleration: $a = g$ (downwards)\n\n**Conclusion:** The acceleration is still pointing downwards → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Does gravity stop acting at the highest point?',
      'Velocity can be zero while acceleration is non-zero',
      'Acceleration is always due to gravity and points downward',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 14
  {
    id: 'pm-014',
    type: 'multiple_choice',
    question: 'A coin and a feather are allowed to fall in a long vertical glass tube from which the air has been evacuated. Which one of the following combinations best describes the motion of the coin and the feather?',
    options: [
      'Coin: uniform speed; Feather: same uniform speed',
      'Coin: uniform acceleration; Feather: same uniform acceleration',
      'Coin: uniform acceleration; Feather: smaller uniform acceleration',
      'Coin: uniform acceleration; Feather: greater uniform acceleration',
    ],
    answer: 'Coin: uniform acceleration; Feather: same uniform acceleration',
    explanation: '⚠️ **Key point:** In a vacuum, there is no air resistance, so the only significant force on both objects is gravity.\n\n- Both the coin and the feather fall under the same gravitational acceleration $g$.\n- Since $g$ is constant, their motion is uniformly accelerated (not uniform speed).\n\n**Conclusion:** Coin: uniform acceleration; Feather: same uniform acceleration → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Air has been evacuated, so there is no air resistance',
      'In free fall, all objects have the same acceleration g',
      'Uniform acceleration does not mean uniform speed',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 15
  {
    id: 'pm-015',
    type: 'multiple_choice',
    question: 'The graph shows how the square of velocity of an object undergoing uniform acceleration varies with displacement. The object is initially at rest. From the graph, when $s = 2\\text{ m}$, $v^2 = 4\\text{ m}^2\\text{ s}^{-2}$. What is the acceleration of the object?',
    options: ['0.5 m/s²', '1.0 m/s²', '2.0 m/s²', '4.0 m/s²'],
    answer: '1.0 m/s²',
    explanation: '⚠️ **Key point:** For uniform acceleration, $v^2 = u^2 + 2as$. With the object starting from rest ($u = 0$), $v^2 = 2as$.\n\n**Step 1:** Find the slope of the $v^2$–$s$ graph\nUsing the point $(s, v^2) = (2, 4)$:\n$$\\text{slope} = \\frac{\\Delta (v^2)}{\\Delta s} = \\frac{4}{2} = 2\\text{ m s}^{-2}$$\n\n**Step 2:** Relate slope to acceleration\nSince $v^2 = 2as$, the slope equals $2a$.\n$$2a = 2 \\;\\Rightarrow\\; a = 1\\text{ m s}^{-2}$$\n\n**Conclusion:** The acceleration is $1.0\\text{ m/s}^2$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use v² = u² + 2as and note that u = 0',
      'For a v²–s graph, the slope equals 2a',
      'Use the point (s, v²) = (2, 4) to find the slope',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-015-question.png'],
  },
  // Position and Movement - Question 16
  {
    id: 'pm-016',
    type: 'multiple_choice',
    question: 'The figure shows the strobe photograph of a ball rolling down a slope. The stroboscope is flashing at a frequency of $5\\text{ Hz}$. Find the acceleration of the ball.',
    options: ['0.20 m/s²', '0.50 m/s²', '0.67 m/s²', '1.00 m/s²'],
    answer: '1.00 m/s²',
    explanation: '⚠️ **Key point:** Each flash is separated by a constant time interval. Use average speeds over equal intervals to estimate velocities, then apply $a = \\frac{v-u}{t}$.\n\n**Step 1:** Find the time interval between flashes\n$$\\Delta t = \\frac{1}{f} = \\frac{1}{5} = 0.2\\text{ s}$$\n\n**Step 2:** Find the speeds for two intervals\nFrom the figure:\n- Over one interval, distance is $0.04\\text{ m}$, so\n  $$u = \\frac{0.04}{0.2} = 0.2\\text{ m/s}$$\n- Over one interval, distance is $0.12\\text{ m}$, so\n  $$v = \\frac{0.12}{0.2} = 0.6\\text{ m/s}$$\nThese speeds occur at the midpoints of the $4\\text{ cm}$ and $12\\text{ cm}$ intervals respectively.\n\n**Step 3:** Find the time between the two midpoint instants\nThere are 2 time intervals between the midpoints, so\n$$t = 2\\Delta t = 2(0.2) = 0.4\\text{ s}$$\n\n**Step 4:** Compute the acceleration\n$$a = \\frac{v-u}{t} = \\frac{0.6 - 0.2}{0.4} = 1.0\\text{ m/s}^2$$\n\n**Conclusion:** The acceleration is $1.00\\text{ m/s}^2$ → option D.',
    difficulty: 3,
    points: 20,
    hints: [
      '5 Hz means the flash interval is 0.2 s',
      'Speed over an interval = distance / time for that interval',
      'The speeds correspond to midpoints of the intervals',
      'Use a = (v − u) / t with the time between the midpoint instants',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-016-question.png'],
  },
  // Position and Movement - Question 17
  {
    id: 'pm-017',
    type: 'multiple_choice',
    question: 'The figure shows the velocity-time graph of an object. Which of the following statements about the object is/are true?\n(1) Its acceleration in the first 10 s is $2\\text{ m s}^{-2}$.\n(2) The total distance travelled is 250 m.\n(3) It returns to its starting point after 25 s.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation: '⚠️ **Key point:** On a velocity–time graph, the slope gives acceleration and the area under the graph gives distance travelled.\n\n**Statement (1):** True.\n$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{20 - 0}{10 - 0} = 2\\text{ m/s}^2$$\n\n**Statement (2):** False.\nTotal distance = area under the graph:\n- $0$–$10\\text{ s}$ triangle: $\\tfrac{1}{2}(10)(20)=100$ m\n- $10$–$20\\text{ s}$ rectangle: $(10)(20)=200$ m\n- $20$–$25\\text{ s}$ triangle: $\\tfrac{1}{2}(5)(20)=50$ m\nSo total distance $= 350$ m, not 250 m.\n\n**Statement (3):** False.\nThe velocity is always positive, so displacement is never reduced back to zero.\n\n**Conclusion:** Only statement (1) is true → option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'The slope of a v-t graph gives acceleration',
      'The area under a v-t graph gives distance travelled',
      'Returning to the starting point would require negative velocity (area below the time axis)',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-017-question.png'],
  },
  // Position and Movement - Question 18
  {
    id: 'pm-018',
    type: 'multiple_choice',
    question: 'Which of the following displacement-time graphs describes the motion of a particle moving in a straight line with uniform deceleration?',
    options: [
      '/physics/exercises/position-movement/pm-018-option-a.png',
      '/physics/exercises/position-movement/pm-018-option-b.png',
      '/physics/exercises/position-movement/pm-018-option-c.png',
      '/physics/exercises/position-movement/pm-018-option-d.png',
    ],
    answer: '/physics/exercises/position-movement/pm-018-option-c.png',
    explanation: '⚠️ **Key point:** The slope of a displacement–time graph represents velocity.\n\nFor uniform deceleration:\n- The velocity decreases uniformly with time\n- So the slope of the $s$–$t$ graph decreases uniformly (the curve gradually flattens)\n\n**Conclusion:** The graph with decreasing slope is option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'The slope of an s-t graph is velocity',
      'Deceleration means velocity decreases with time',
      'Look for a curve that becomes less steep over time',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 19
  {
    id: 'pm-019',
    type: 'multiple_choice',
    question: 'A man takes 2 s to walk from point $A$ to point $B$, and then takes 3 s to walk from point $B$ to point $C$, where $ABC$ is an equilateral triangle of side 3 m. Find the magnitude of his average velocity from $A$ to $C$.',
    options: ['0.60 m/s', '1.00 m/s', '1.20 m/s', '1.25 m/s'],
    answer: '0.60 m/s',
    explanation: '⚠️ **Key point:** Average velocity depends on displacement, not total distance travelled.\n\n**Step 1:** Find the resultant displacement from $A$ to $C$\nSince $ABC$ is an equilateral triangle with side $3\\text{ m}$, the straight-line displacement $AC = 3\\text{ m}$.\n\n**Step 2:** Find the total time taken\n$$t = 2 + 3 = 5\\text{ s}$$\n\n**Step 3:** Compute the magnitude of average velocity\n$$v_{\\text{avg}} = \\frac{\\text{displacement}}{\\text{time}} = \\frac{3}{5} = 0.6\\text{ m/s}$$\n\n**Conclusion:** The magnitude of the average velocity is $0.60\\text{ m/s}$ → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Average velocity = displacement / total time',
      'Displacement from A to C is the straight-line distance AC',
      'For an equilateral triangle of side 3 m, AC = 3 m',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-019-question.png'],
  },
  // Position and Movement - Question 20
  {
    id: 'pm-020',
    type: 'multiple_choice',
    question: 'The figure shows a man near the edge of a cliff projecting a stone vertically upwards. The stone reaches the sea after 18 s. The graph shows the velocity-time relation for the motion of the stone. Find the height of the cliff. (Take $g = 10\\text{ m s}^{-2}$.)',
    options: ['180 m', '540 m', '720 m', '900 m'],
    answer: '540 m',
    explanation: '⚠️ **Key point:** Displacement equals the signed area under a velocity–time graph.\n\nFrom the graph:\n- Initial velocity: $u = 60\\text{ m/s}$\n- Constant acceleration: $a = -10\\text{ m/s}^2$ (slope)\n- Total time: $18\\text{ s}$\nThe velocity becomes zero at\n$$t = \\frac{u}{g} = \\frac{60}{10} = 6\\text{ s}$$\n\n**Step 1:** Area above the time axis (upward displacement, 0–6 s)\n$$s_{\\uparrow} = \\frac{1}{2}(6)(60) = 180\\text{ m}$$\n\n**Step 2:** Area below the time axis (downward displacement, 6–18 s)\nTime duration: $18 - 6 = 12\\text{ s}$\nFinal speed at 18 s: $v = 60 - 10(18) = -120\\text{ m/s}$\n$$s_{\\downarrow} = -\\frac{1}{2}(12)(120) = -720\\text{ m}$$\n\n**Step 3:** Net displacement from the cliff top to the sea\n$$s = s_{\\uparrow} + s_{\\downarrow} = 180 - 720 = -540\\text{ m}$$\nSo the sea is $540\\text{ m}$ below the cliff top.\n\n**Conclusion:** Height of the cliff = $540\\text{ m}$ → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Displacement equals the signed area under a v-t graph',
      'Find when v becomes zero (top point) using u/g',
      'Split the graph into the part above and below the time axis',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-020-question.png'],
  },
  // Position and Movement - Question 21
  {
    id: 'pm-021',
    type: 'multiple_choice',
    question: 'An object is thrown vertically upwards from a point $A$. It travels to the highest point $B$ and then falls back to $A$. Neglecting air resistance, which of the following statements is/are true?\n(1) The total displacement of the object is zero.\n(2) The acceleration of the object is constant throughout the motion.\n(3) The time for the upward motion is longer than the time for the downward motion.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation: '⚠️ **Key point:** Displacement depends only on initial and final positions, while acceleration in free flight is due to gravity.\n\n**Statement (1):** True.\nThe object returns to point $A$, so final position = initial position.\nTherefore total displacement $s = 0$.\n\n**Statement (2):** True.\nNeglecting air resistance, the only acceleration is due to gravity:\n$$a = -g$$\nwhich is constant throughout the motion.\n\n**Statement (3):** False.\nWith constant acceleration and no air resistance, the motion is symmetric about the highest point, so\n$$t_{\\uparrow} = t_{\\downarrow}$$\n\n**Conclusion:** Statements (1) and (2) only → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Displacement is final position minus initial position',
      'With no air resistance, acceleration is constant and equals g downward',
      'Upward and downward times are equal for symmetric motion',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 22
  {
    id: 'pm-022',
    type: 'multiple_choice',
    question: 'The paper tape shown is obtained from a trolley moving with uniform acceleration. The frequency of the ticker-tape timer is 50 Hz. Find the acceleration of the trolley.',
    options: ['0.21 m/s²', '0.70 m/s²', '0.73 m/s²', '1.05 m/s²'],
    answer: '1.05 m/s²',
    explanation: '⚠️ **Key point:** Each dot represents equal time. Use average speed over a group of dots to estimate velocities at midpoints, then apply $a = \\frac{v-u}{t}$.\n\n**Step 1:** Find the time per tick\nTicker-tape frequency: $50\\text{ Hz}$\n$$\\Delta t = \\frac{1}{50} = 0.02\\text{ s}$$\n\n**Step 2:** Find two velocities using the tape segments\nEach segment shown contains 5 ticks, so time for 5 ticks:\n$$5\\Delta t = 5(0.02) = 0.10\\text{ s}$$\n\n- For the $1.5\\text{ cm}$ segment:\n  $$u = \\frac{0.015}{0.10} = 0.15\\text{ m/s}$$\n- For the $3.6\\text{ cm}$ segment:\n  $$v = \\frac{0.036}{0.10} = 0.36\\text{ m/s}$$\nThese velocities occur at the midpoints of the $1.5\\text{ cm}$ and $3.6\\text{ cm}$ segments.\n\n**Step 3:** Find the time between the two midpoint instants\nFrom the midpoint of the first segment to the midpoint of the second segment, there are 10 ticks:\n$$t = 10\\Delta t = 10(0.02) = 0.20\\text{ s}$$\n\n**Step 4:** Compute the acceleration\n$$a = \\frac{v-u}{t} = \\frac{0.36 - 0.15}{0.20} = 1.05\\text{ m/s}^2$$\n\n**Conclusion:** The acceleration is $1.05\\text{ m/s}^2$ → option D.',
    difficulty: 3,
    points: 20,
    hints: [
      '50 Hz means each tick is 0.02 s',
      'Use speed = distance / time for a 5-tick segment',
      'The speeds correspond to the midpoints of the segments',
      'Use a = (v − u) / t with t = 10 ticks',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-022-question.png'],
  },
  // Position and Movement - Question 23
  {
    id: 'pm-023',
    type: 'multiple_choice',
    question: 'The diagram shows the variation of the acceleration of an object which is initially at rest. Which of the following velocity-time graphs correctly describes the motion of the object?',
    options: [
      '/physics/exercises/position-movement/pm-023-option-a.png',
      '/physics/exercises/position-movement/pm-023-option-b.png',
      '/physics/exercises/position-movement/pm-023-option-c.png',
      '/physics/exercises/position-movement/pm-023-option-d.png',
    ],
    answer: '/physics/exercises/position-movement/pm-023-option-b.png',
    explanation: '⚠️ **Key point:** The slope of a velocity–time graph equals acceleration.\n\nFrom the acceleration–time graph:\n- For $t < t_0$, acceleration is positive and constant → velocity increases linearly from rest (straight line with constant positive slope)\n- For $t > t_0$, acceleration is zero → velocity stays constant (horizontal line)\n\n**Conclusion:** The correct $v$–$t$ graph is option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'The slope of a v-t graph equals acceleration',
      'Constant positive acceleration gives a straight line increasing from rest',
      'Zero acceleration gives a horizontal line (constant velocity)',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-023-question.png'],
  },
  // Position and Movement - Question 24
  {
    id: 'pm-024',
    type: 'multiple_choice',
    question: 'A man takes 30 s to walk 80 m towards the east. He then takes 10 s to run 60 m towards the south. Which of the following statements is/are correct?\n(1) The magnitude of the resultant displacement of the man is 140 m.\n(2) The average speed of the man is $4.3\\text{ m s}^{-1}$.\n(3) The magnitude of the average velocity of the man is $2.5\\text{ m s}^{-1}$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation: '⚠️ **Key point:** Average speed uses total distance, while average velocity uses displacement.\n\n**Step 1:** Resultant displacement\nThe man moves 80 m east and 60 m south, so\n$$s = \\sqrt{80^2 + 60^2} = \\sqrt{10000} = 100\\text{ m}$$\nSo statement (1) is false.\n\n**Step 2:** Average speed\nTotal distance $= 80 + 60 = 140\\text{ m}$\nTotal time $= 30 + 10 = 40\\text{ s}$\n$$\\text{average speed} = \\frac{140}{40} = 3.5\\text{ m/s}$$\nSo statement (2) is false.\n\n**Step 3:** Magnitude of average velocity\n$$|\\vec{v}_{\\text{avg}}| = \\frac{\\text{displacement}}{\\text{time}} = \\frac{100}{40} = 2.5\\text{ m/s}$$\nSo statement (3) is true.\n\n**Conclusion:** Only statement (3) is correct → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Displacement is the straight-line distance from start to finish',
      'Average speed = total distance / total time',
      'Average velocity magnitude = displacement / total time',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 25
  {
    id: 'pm-025',
    type: 'multiple_choice',
    question: 'The diagram shows the variation of the velocity of an object with time. What is the distance travelled by the object in the first 3 seconds?',
    options: ['5 m', '15 m', '25 m', '30 m'],
    answer: '25 m',
    explanation: '⚠️ **Key point:** Distance travelled equals the sum of the absolute areas under a velocity–time graph.\n\n**Step 1:** Split the graph into two regions\n- From $0$ to $2\\text{ s}$, the graph is above the time axis\n- From $2$ to $3\\text{ s}$, the graph is below the time axis\n\n**Step 2:** Find the areas (take absolute values)\n- Triangle (0–2 s):\n  $$A_1 = \\frac{1}{2}(2)(20) = 20\\text{ m}$$\n- Triangle (2–3 s):\n  $$A_2 = \\frac{1}{2}(1)(10) = 5\\text{ m}$$\n\n**Step 3:** Total distance\n$$d = A_1 + A_2 = 20 + 5 = 25\\text{ m}$$\n\n**Conclusion:** The distance travelled in the first 3 s is $25\\text{ m}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Distance travelled is the total area between the graph and the time axis',
      'If part of the graph is below the axis, take the absolute value of that area',
      'Split the graph into triangles over 0–2 s and 2–3 s',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-025-question.png'],
  },
  // Position and Movement - Question 26
  {
    id: 'pm-026',
    type: 'multiple_choice',
    question: 'An object starts from rest and moves with uniform acceleration along a straight line. Which of the graphs below concerning the motion of the object is/are correct? ($s$ = displacement, $v$ = velocity, $t$ = time)',
    options: ['(1) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation: '⚠️ **Key point:** For motion from rest with uniform acceleration:\n- $v = at$ → $v \\propto t$\n- $s = \\frac{1}{2}at^2$ → $s \\propto t^2$\n- $v^2 = 2as$ → $v^2 \\propto s$\n\nTherefore, all three graphs are correct.\n\n**Conclusion:** (1), (2) & (3) → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'From rest: u = 0',
      'Use v = u + at and s = ut + ½at²',
      'Eliminate t to get v² = u² + 2as',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-026-question.png'],
  },
  // Position and Movement - Question 27
  {
    id: 'pm-027',
    type: 'multiple_choice',
    question: 'A man walks 40 m towards the west. He then walks 40 m towards the south and lastly walks 70 m towards the east. Find the magnitude of the resultant displacement of the man.',
    options: ['30 m', '40 m', '50 m', '70 m'],
    answer: '50 m',
    explanation: '⚠️ **Key point:** Resultant displacement is the straight-line vector from the start point to the final point.\n\n**Step 1:** Find the net displacement components\n- East–west: $70\\text{ m east} - 40\\text{ m west} = 30\\text{ m east}$\n- North–south: $40\\text{ m south}$\n\n**Step 2:** Use Pythagoras’ theorem\n$$s = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ m}$$\n\n**Conclusion:** The magnitude of the resultant displacement is $50\\text{ m}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Resultant displacement is from start to finish',
      'Combine east–west and north–south components',
      'Use Pythagoras to find the magnitude',
    ],
    sectionId: 'position-movement',
    answerImagePaths: ['/physics/exercises/position-movement/pm-027-answer-steps.png'],
  },
  // Position and Movement - Question 28
  {
    id: 'pm-028',
    type: 'multiple_choice',
    question:
      'An object moves with uniform acceleration along a straight line. The graphs (1)–(3) are shown in the figure. Which of the following graphs correctly describe(s) the motion of the object?',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** The slope of a displacement–time ($s$–$t$) graph is velocity, and the slope of a velocity–time ($v$–$t$) graph is acceleration.\n\n**(1)** In graph (1), the slope decreases with time → velocity decreases → this represents uniform deceleration, not acceleration.\n\n**(2)** In graph (2), the $v$–$t$ graph is a straight line with positive slope → acceleration is constant and positive → uniform acceleration.\n\n**(3)** In graph (3), acceleration is constant and positive → uniform acceleration.\n\n**Conclusion:** Graphs (2) and (3) only → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Slope of s–t gives velocity',
      'Slope of v–t gives acceleration',
      'Uniform acceleration means acceleration is constant',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-028-question.png'],
  },
  // Position and Movement - Question 29
  {
    id: 'pm-029',
    type: 'multiple_choice',
    question:
      'A student walks along a curve $ABC$, which is made up of two semi-circular parts $AB$ and $BC$ of radius $3\\text{ m}$ and $4\\text{ m}$ respectively. He takes $2\\text{ s}$ to walk from $A$ to $B$ and $5\\text{ s}$ from $B$ to $C$. Find the magnitude of the average velocity of the student from $A$ to $C$.',
    options: ['1.0 m s⁻¹', '2.0 m s⁻¹', '2.3 m s⁻¹', '3.1 m s⁻¹'],
    answer: '2.0 m s⁻¹',
    explanation:
      '⚠️ **Key point:** Average velocity uses **resultant displacement**, not the distance along the curved path.\n\n**Step 1:** Find the displacement from $A$ to $C$\nThe straight-line displacement equals the sum of the two diameters:\n$$AC = 2(3) + 2(4) = 14\\text{ m}$$\n\n**Step 2:** Divide by total time\nTotal time: $2 + 5 = 7\\text{ s}$.\n$$v_{\\text{avg}} = \\frac{AC}{t} = \\frac{14}{7} = 2.0\\text{ m s}^{-1}$$\n\n**Conclusion:** $2.0\\text{ m s}^{-1}$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Average velocity uses displacement, not distance along the curve',
      'Displacement A→C is the straight-line distance (sum of diameters)',
      'Divide by total time: 2 s + 5 s',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-029-question.png'],
  },
  // Position and Movement - Question 30
  {
    id: 'pm-030',
    type: 'multiple_choice',
    question:
      'A particle is released from rest and falls vertically under gravity. If the distance travelled by the particle in the 1st second is $x$ and that travelled in the 2nd second is $y$, find the ratio $x:y$.',
    options: ['1 : 1', '1 : 2', '1 : 3', '1 : 4'],
    answer: '1 : 3',
    explanation:
      '⚠️ **Key point:** The distance in the 2nd second means $s(2) - s(1)$, not the total displacement at $t=2\\text{ s}$.\n\n**Step 1:** Use free-fall displacement from rest\n$$s = \\frac{1}{2}gt^2$$\n\n**Step 2:** Find displacements at $t=1\\text{ s}$ and $t=2\\text{ s}$\n$$s_1 = \\frac{1}{2}g(1)^2 = \\frac{1}{2}g$$\n$$s_2 = \\frac{1}{2}g(2)^2 = 2g$$\n\n**Step 3:** Find $x$ and $y$\n$$x = s_1 = \\frac{1}{2}g$$\n$$y = s_2 - s_1 = 2g - \\frac{1}{2}g = \\frac{3}{2}g$$\n\n**Step 4:** Ratio\n$$x:y = \\left(\\frac{1}{2}g\\right):\\left(\\frac{3}{2}g\\right) = 1:3$$\n\n**Conclusion:** $x:y = 1:3$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Since the particle starts from rest, use s = ½gt²',
      'Find s(1) and s(2)',
      'The distance in the 2nd second is s(2) − s(1)',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 31
  {
    id: 'pm-031',
    type: 'multiple_choice',
    question:
      'A car undergoes uniform deceleration along a straight road. Its velocity decreases from $30\\text{ m s}^{-1}$ to $20\\text{ m s}^{-1}$ after travelling a distance of $100\\text{ m}$. How much further will the car travel before it comes to a rest?',
    options: ['50 m', '80 m', '180 m', '200 m'],
    answer: '80 m',
    explanation:
      '⚠️ **Key point:** With uniform deceleration, the acceleration $a$ is constant, so you can use $v^2 = u^2 + 2as$ in two stages.\n\n**Step 1:** Find the deceleration using the first part\nFor the first $100\\text{ m}$:\n- $u = 30\\text{ m s}^{-1}$, $v = 20\\text{ m s}^{-1}$, $s = 100\\text{ m}$\n$$20^2 = 30^2 + 2a(100)$$\n$$400 = 900 + 200a \\;\\Rightarrow\\; a = -2.5\\text{ m s}^{-2}$$\n\n**Step 2:** Find the further stopping distance\nFrom $20\\text{ m s}^{-1}$ to rest:\n- $u = 20\\text{ m s}^{-1}$, $v = 0$, $a = -2.5\\text{ m s}^{-2}$\n$$0^2 = 20^2 + 2(-2.5)s$$\n$$0 = 400 - 5s \\;\\Rightarrow\\; s = 80\\text{ m}$$\n\n**Conclusion:** The car travels a further $80\\text{ m}$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use v² = u² + 2as to find the deceleration from the first 100 m',
      'The deceleration is constant, so use the same a for the stopping phase',
      'For stopping, set v = 0 and solve for s',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 32
  {
    id: 'pm-032',
    type: 'multiple_choice',
    question:
      'The velocity-time graph of a car travelling along a straight horizontal road is shown above. Which of the following graphs shows the variation of the acceleration $a$ of the car with the time $t$?',
    options: [
      '/physics/exercises/position-movement/pm-032-option-a.png',
      '/physics/exercises/position-movement/pm-032-option-b.png',
      '/physics/exercises/position-movement/pm-032-option-c.png',
      '/physics/exercises/position-movement/pm-032-option-d.png',
    ],
    answer: '/physics/exercises/position-movement/pm-032-option-b.png',
    explanation:
      '⚠️ **Key point:** The slope of a velocity-time ($v$–$t$) graph equals acceleration.\n\n**Step 1:** Understand the relationship\n$$\\text{slope of } v\\text{–}t \\text{ graph} = a$$\n\n**Step 2:** Analyze the $v$–$t$ graph in three time intervals\n\n**For $t = 0\\text{ s}$ to $t = 10\\text{ s}$:**\n- The slope of the $v$–$t$ graph is positive $(+)$\n- Therefore, acceleration $a$ is positive $(+)$\n\n**For $t = 10\\text{ s}$ to $t = 30\\text{ s}$:**\n- The slope of the $v$–$t$ graph is zero (horizontal line)\n- Therefore, acceleration $a = 0$\n\n**For $t = 30\\text{ s}$ to $t = 40\\text{ s}$:**\n- The slope of the $v$–$t$ graph is negative $(-)$\n- Therefore, acceleration $a$ is negative $(-)$\n\n**Step 3:** Match with the acceleration-time graph\nThe correct $a$–$t$ graph should show:\n- Positive acceleration from $0$ to $10\\text{ s}$\n- Zero acceleration from $10$ to $30\\text{ s}$\n- Negative acceleration from $30$ to $40\\text{ s}$\n\n**Conclusion:** Graph B matches this pattern → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'The slope of a v–t graph equals acceleration',
      'A positive slope means positive acceleration',
      'A horizontal line (zero slope) means zero acceleration',
      'A negative slope means negative acceleration',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-032-question.png'],
  },
  // Position and Movement - Question 33
  {
    id: 'pm-033',
    type: 'multiple_choice',
    question:
      'A racing car accelerates from rest to a speed of $100\\text{ km h}^{-1}$ in $3.2\\text{ s}$. Find the average acceleration of the car.',
    options: ['4.34 m/s²', '8.68 m/s²', '15.63 m/s²', '31.25 m/s²'],
    answer: '8.68 m/s²',
    explanation:
      '⚠️ **Key point:** Average acceleration is $a = \\frac{\\Delta v}{\\Delta t}$. Convert $\\text{km h}^{-1}$ to $\\text{m s}^{-1}$ first.\n\n**Step 1:** Convert speed\n$$v = 100\\times\\frac{1000}{3600} = 27.78\\text{ m s}^{-1}$$\n\n**Step 2:** Use $v = u + at$\nSince the car starts from rest, $u = 0$:\n$$a = \\frac{v-u}{t} = \\frac{27.78 - 0}{3.2} = 8.68\\text{ m s}^{-2}$$\n\n**Conclusion:** The average acceleration is $8.68\\text{ m s}^{-2}$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert 100 km/h to m/s (multiply by 1000/3600)',
      'Since it starts from rest, u = 0',
      'Use a = (v − u) / t',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 34
  {
    id: 'pm-034',
    type: 'multiple_choice',
    question:
      'A girl walks along a straight road from a point $A$ to a point $B$ with an average speed $1\\text{ m s}^{-1}$. She then returns from $B$ to $A$ along the same road with an average speed $2\\text{ m s}^{-1}$. Find the average speed of the girl for the whole journey.',
    options: ['zero.', '0.67 m s⁻¹', '1.33 m s⁻¹', '1.50 m s⁻¹'],
    answer: '1.33 m s⁻¹',
    explanation:
      '⚠️ **Key point:** Average speed $= \\frac{\\text{total distance}}{\\text{total time}}$. For a round trip with equal distances, do not average the two speeds directly.\n\n**Step 1:** Let the distance $AB = d$\nTime from $A$ to $B$:\n$$t_1 = \\frac{d}{1} = d$$\nTime from $B$ back to $A$:\n$$t_2 = \\frac{d}{2} = \\frac{d}{2}$$\n\n**Step 2:** Total distance and total time\n$$\\text{distance} = 2d$$\n$$\\text{time} = d + \\frac{d}{2} = \\frac{3d}{2}$$\n\n**Step 3:** Average speed\n$$v_{\\text{avg}} = \\frac{2d}{\\frac{3d}{2}} = \\frac{4}{3} = 1.33\\text{ m s}^{-1}$$\n\n**Conclusion:** The average speed for the whole journey is $1.33\\text{ m s}^{-1}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Average speed = total distance / total time',
      'Let AB = d, then the return distance is also d',
      'Compute the time for each leg: d/1 and d/2',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 35
  {
    id: 'pm-035',
    type: 'multiple_choice',
    question:
      'A car travels along a straight road. The variation of the distance of the car from a fixed point $P$ on the road with time is shown above. Which of the following statements is correct?',
    options: [
      'The speed of the car is decreasing.',
      'The car is moving towards $P$.',
      'There is an unbalanced force acting on the car.',
      'The area under the graph denotes the total distance travelled by the car.',
    ],
    answer: 'The car is moving towards $P$.',
    explanation:
      '⚠️ **Key point:** On a distance–time graph, the slope gives the speed (rate of change of distance). A straight line means constant slope → constant speed.\n\n**A** False. The graph is a straight line, so the slope (speed) is constant, not decreasing.\n\n**B** True. The distance from $P$ is decreasing with time, so the car is moving towards $P$.\n\n**C** False. Constant speed along a straight line means zero acceleration, so the resultant (unbalanced) force is zero.\n\n**D** False. Area under a distance–time graph has no physical meaning.\n\n**Conclusion:** The correct statement is B.',
    difficulty: 2,
    points: 15,
    hints: [
      'The slope of a distance–time graph gives speed',
      'A straight line means the speed is constant',
      'If distance from $P$ decreases, the car moves towards $P$',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-035-question.png'],
  },
  // Position and Movement - Question 36
  {
    id: 'pm-036',
    type: 'multiple_choice',
    question:
      'The figure above shows the distance-time graphs of two toy cars $P$ and $Q$ moving along a linear track. Which of the following statements is/are correct?\n(1) Car $P$ will reach the 20 m-mark first.\n(2) Car $P$ is overtaking car $Q$ at $t=5\\text{ s}$.\n(3) The average speed of car $P$ in the first $5\\text{ s}$ is smaller than that of car $Q$.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** On a distance–time graph, the slope gives speed and the intersection point means the two cars are at the same position at the same time.\n\n**(1)** True. At $s = 20\\text{ m}$, car $P$ corresponds to a smaller time $t$ than car $Q$, so $P$ reaches $20\\text{ m}$ first.\n\n**(2)** True. Before $t=5\\text{ s}$, car $Q$ has a larger distance (it is ahead). At $t=5\\text{ s}$, the two graphs meet, so the cars meet and $P$ is overtaking $Q$ at that instant.\n\n**(3)** False. In the first $5\\text{ s}$, both cars travel the same distance (their distances at $t=5\\text{ s}$ are equal), so their average speeds over $0$–$5\\text{ s}$ are the same.\n\n**Conclusion:** Statements (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'On an s–t graph, the slope represents speed',
      'Where the two graphs intersect, the cars are at the same position at the same time',
      'Compare the times when s = 20 m for cars P and Q',
      'Compare the distances at t = 5 s to find average speed over the first 5 s',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-036-question.png'],
  },
  // Position and Movement - Question 37
  {
    id: 'pm-037',
    type: 'multiple_choice',
    question:
      'A piece of stone is hung from a balloon, which is rising vertically upward. If the string connecting the stone and the balloon suddenly breaks, which of the following velocity-time graphs represents the subsequent motion of the stone? (Velocity pointing upward is taken to be positive.)',
    options: [
      '/physics/exercises/position-movement/pm-037-option-a.png',
      '/physics/exercises/position-movement/pm-037-option-b.png',
      '/physics/exercises/position-movement/pm-037-option-c.png',
      '/physics/exercises/position-movement/pm-037-option-d.png',
    ],
    answer: '/physics/exercises/position-movement/pm-037-option-c.png',
    explanation:
      '⚠️ **Key point:** At the moment the string breaks, the stone has the same upward velocity as the balloon, but afterwards it accelerates downward at a constant rate $g$.\n\n**Step 1:** Initial velocity\nAt $t=0$, the stone is moving upward, so $v$ starts positive.\n\n**Step 2:** Acceleration\nThe only significant force is gravity, so acceleration is constant and downward:\n$$a = -g$$\nSo the $v$–$t$ graph must be a straight line with constant negative slope.\n\n**Step 3:** Direction change\nThe velocity decreases to $0$ at the highest point, then becomes negative as the stone falls.\n\n**Conclusion:** The correct graph is the straight line with slope $-g$ crossing from positive to negative $v$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'At t = 0, the stone still has an upward velocity',
      'After the string breaks, only gravity acts, so a = −g (constant)',
      'A constant acceleration gives a straight-line v–t graph',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 38
  {
    id: 'pm-038',
    type: 'multiple_choice',
    question:
      'The figure above shows a velocity-time graph. What physical quantity does the area of the shaded region represent?',
    options: ['energy', 'momentum', 'acceleration', 'displacement'],
    answer: 'displacement',
    explanation:
      '⚠️ **Key point:** For a velocity–time graph, the area under the graph equals displacement.\n\nSince $v = \\frac{ds}{dt}$, we have:\n$$s = \\int v\\,dt$$\nSo the shaded area represents the displacement of the object.\n\n**Conclusion:** The area represents displacement → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'On a v–t graph, the slope gives acceleration',
      'On a v–t graph, the area gives displacement',
      'Think of s = ∫ v dt',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-038-question.png'],
  },
  // Position and Movement - Question 39
  {
    id: 'pm-039',
    type: 'multiple_choice',
    question:
      'The figure above shows the velocity-time graph of a car. Which of the statements are correct?\n(1) The car changes its direction of travel at $t=t_1$.\n(2) The car is farthest away from the starting point at $t=t_1$.\n(3) The car returns to its starting point at $t=t_2$.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** On a $v$–$t$ graph, velocity sign indicates direction and the area gives displacement.\n\n**(1)** True. At $t=t_1$, $v=0$ and the graph crosses the time axis, so the car reverses its direction.\n\n**(2)** True. Before $t_1$, the car moves forward (positive $v$). After $t_1$, $v$ becomes negative, so it travels back. Therefore, the car is farthest from the start at $t=t_1$.\n\n**(3)** False. Displacement from $0$ to $t_2$ equals the signed area under the graph. The forward area (from $0$ to $t_1$) is not equal to the backward area (from $t_1$ to $t_2$), so the net displacement at $t_2$ is not zero.\n\n**Conclusion:** Statements (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'A change of direction occurs when velocity changes sign',
      'At t = t₁, check whether v = 0 and whether v becomes negative afterwards',
      'Displacement equals the signed area under the v–t graph',
      'Returning to the start requires the total signed area to be zero',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-039-question.png'],
  },
  // Position and Movement - Question 40
  {
    id: 'pm-040',
    type: 'multiple_choice',
    question:
      'A car starts at point $A$ and travels along a circular path of radius $30\\text{ m}$. After $15\\text{ s}$, the car returns to point $A$. Find the average speed of the car within this period of time.',
    options: ['zero', '2 m s⁻¹', '6.3 m s⁻¹', '12.6 m s⁻¹'],
    answer: '12.6 m s⁻¹',
    explanation:
      '⚠️ **Key point:** Average speed $= \\frac{\\text{total distance}}{\\text{total time}}$.\n\nSince the car returns to $A$, it completes one full circle.\n\n**Step 1:** Total distance travelled (circumference)\n$$d = 2\\pi r = 2\\pi(30) = 60\\pi \\approx 188.5\\text{ m}$$\n\n**Step 2:** Average speed\n$$v_{\\text{avg}} = \\frac{d}{t} = \\frac{188.5}{15} \\approx 12.6\\text{ m s}^{-1}$$\n\n**Conclusion:** The average speed is $12.6\\text{ m s}^{-1}$ → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Average speed = total distance / total time',
      'One full circle distance is the circumference: 2πr',
      'Use r = 30 m and t = 15 s',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-040-question.png'],
  },
  // Position and Movement - Question 41
  {
    id: 'pm-041',
    type: 'multiple_choice',
    question:
      'A plane starts from rest and accelerates at $2\\text{ m s}^{-2}$. If the minimum take-off speed is $60\\text{ m s}^{-1}$, find the minimum distance travelled by the plane before it takes off.',
    options: ['450 m', '900 m', '1800 m', '3600 m'],
    answer: '900 m',
    explanation:
      '⚠️ **Key point:** Use $v^2 = u^2 + 2as$ for motion with constant acceleration.\n\n**Step 1:** Identify known values\n- Initial speed: $u = 0$ (starts from rest)\n- Final speed: $v = 60\\text{ m s}^{-1}$\n- Acceleration: $a = 2\\text{ m s}^{-2}$\n\n**Step 2:** Apply $v^2 = u^2 + 2as$\n$$60^2 = 0^2 + 2(2)s$$\n$$3600 = 4s \\;\\Rightarrow\\; s = 900\\text{ m}$$\n\n**Conclusion:** The minimum take-off distance is $900\\text{ m}$ → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Starts from rest means u = 0',
      'Use v² = u² + 2as',
      'Substitute v = 60 m/s and a = 2 m/s², then solve for s',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 42
  {
    id: 'pm-042',
    type: 'multiple_choice',
    question:
      'The figure shows the velocity-time graphs of two students $P$ and $Q$ running along a straight road. They start at the same point. Which of the following statements is/are correct?\n(1) The average speed of $P$ between $t=0$ and $t=t_1$ is larger than that of $Q$.\n(2) At $t=t_1$, $P$ and $Q$ reach the same point.\n(3) At $t=t_2$, $Q$ is ahead of $P$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '⚠️ **Key point:** On a velocity–time graph, the area under the curve gives displacement.\n\n**(1)** True. From $t=0$ to $t=t_1$, the area under $P$’s graph is greater than that under $Q$’s graph, so $P$ covers a larger distance in the same time. Therefore, $P$ has a larger average speed.\n\n**(2)** False. At $t=t_1$, the areas (displacements) of $P$ and $Q$ are different, so they are at different positions.\n\n**(3)** False. At $t=t_2$, the area under $P$’s graph is greater, so $P$ has travelled further and is ahead of $Q$, not the other way around.\n\n**Conclusion:** Only statement (1) is correct → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Area under a v–t graph represents displacement',
      'Compare the areas under P and Q from 0 to t₁',
      'Same point at t₁ requires equal displacement (equal area) up to t₁',
      'Compare total areas up to t₂ to see who is ahead',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-042-question.png'],
  },
  // Position and Movement - Question 43
  {
    id: 'pm-043',
    type: 'multiple_choice',
    question:
      'Patrick is driving along a straight horizontal road. At time $t=0$, he observes that an accident has happened. He then applies the brakes to stop his car with uniform deceleration. The graph shows the variation of the speed of the car with time. What is the reaction time of Patrick?',
    options: ['zero', '0.8 s', '4.2 s', '5.0 s'],
    answer: '0.8 s',
    explanation:
      '⚠️ **Key point:** Reaction time is the time between noticing the accident and starting to brake.\n\nOn a speed–time graph, the car travels at constant speed before braking begins, so the graph is horizontal during the reaction time.\n\nFrom the graph, the length of this initial horizontal segment is $0.8\\text{ s}$.\n\n**Conclusion:** Reaction time = $0.8\\text{ s}$ → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Reaction time is the time before the brakes are applied',
      'On a speed–time graph, this is the initial horizontal segment',
      'Read the duration of the horizontal line from the time axis',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-043-question.png'],
  },
  // Position and Movement - Question 44
  {
    id: 'pm-044',
    type: 'multiple_choice',
    question:
      'Patrick is driving along a straight horizontal road. At time $t=0$, he observes that an accident has happened. He then applies the brakes to stop his car with uniform deceleration. The graph shows the variation of the speed of the car with time. Find the distance travelled by the car from time $t=0$ to $5.0\\text{ s}$.',
    options: ['29.4 m', '40.6 m', '46.2 m', '81.2 m'],
    answer: '40.6 m',
    explanation:
      '⚠️ **Key point:** On a speed–time graph, the area under the graph equals the distance travelled.\n\nFrom the graph:\n- Speed is $14\\text{ m s}^{-1}$ during the reaction time $0$–$0.8\\text{ s}$ (horizontal segment)\n- Then the car decelerates uniformly to rest at $t=5.0\\text{ s}$\n\n**Step 1:** Split the area into a rectangle and a triangle\nRectangle (0–0.8 s):\n$$A_1 = (0.8)(14) = 11.2\\text{ m}$$\nTriangle (0.8–5.0 s):\n$$A_2 = \\frac{1}{2}(5.0-0.8)(14) = \\frac{1}{2}(4.2)(14) = 29.4\\text{ m}$$\n\n**Step 2:** Total distance\n$$s = A_1 + A_2 = 11.2 + 29.4 = 40.6\\text{ m}$$\n\n**Conclusion:** The distance travelled from $t=0$ to $5.0\\text{ s}$ is $40.6\\text{ m}$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Distance travelled equals the area under a speed–time graph',
      'Split the graph into a rectangle (reaction time) and a triangle (braking)',
      'Compute areas and add them to get total distance',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-044-question.png'],
  },
  // Position and Movement - Question 45
  {
    id: 'pm-045',
    type: 'multiple_choice',
    question:
      'Two cars $A$ and $B$ start from rest simultaneously and travel along the same straight road. The velocity-time graphs of the two cars are shown above. Which of the following statements about the motion of the two cars is/are always correct?\n(1) $A$ and $B$ have the same average velocity during the time interval $0$ to $T$.\n(2) $A$ and $B$ have the same average acceleration during the time interval $0$ to $T$.\n(3) $A$ and $B$ travel the same displacement during the time interval $0$ to $T$.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '⚠️ **Key point:** On a $v$–$t$ graph, the area gives displacement, and average acceleration depends only on the change in velocity over time.\n\n**(1) Average velocity**\n$$\\text{average velocity} = \\frac{\\text{displacement}}{\\text{time}}$$\nFrom $0$ to $T$, displacement equals the area under the $v$–$t$ graph. The areas for cars $A$ and $B$ are different, so their displacements (and hence average velocities) are different. Statement (1) is false.\n\n**(2) Average acceleration**\n$$\\text{average acceleration} = \\frac{v-u}{T}$$\nBoth cars start from rest ($u=0$) and, from the graph, have the same final velocity at $t=T$. Therefore, they have the same average acceleration. Statement (2) is true.\n\n**(3) Displacement**\nSince the areas under the two $v$–$t$ graphs from $0$ to $T$ are different, the displacements are different. Statement (3) is false.\n\n**Conclusion:** Only statement (2) is always correct → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Area under a v–t graph represents displacement',
      'Average velocity = displacement / time',
      'Average acceleration depends on (v − u) / T',
      'Check u at t = 0 and v at t = T from the graph',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-045-question.png'],
  },
  // Position and Movement - Question 46
  {
    id: 'pm-046',
    type: 'multiple_choice',
    question:
      'A car travels along a straight road from $A$ to $B$ with a uniform acceleration. The speed of the car is $v_1$ at the instant when half of the journey time from $A$ to $B$ is elapsed and its speed is $v_2$ at the mid-way of $A$ and $B$. Which of the following is correct?',
    options: [
      '$v_1$ is always smaller than $v_2$.',
      '$v_1$ is always greater than $v_2$.',
      '$v_1$ and $v_2$ are always equal.',
      'Whether $v_1$ is greater than or smaller than $v_2$ depends on the initial velocity of the car at $A$.',
    ],
    answer: '$v_1$ is always smaller than $v_2$.',
    explanation:
      '⚠️ **Key point:** With uniform acceleration, the speed increases with time. In the first half of the time, the car has not yet reached the midpoint in distance.\n\nLet the total travel time be $T$.\n- At $t = \\tfrac{1}{2}T$, the speed is $v_1$.\n- At the midpoint of the distance, the car reaches it at some time $t_m$.\n\nBecause the motion is accelerating, the distance–time graph is concave upward, so the car covers **less than half** the total distance in the first half of the time:\n$$s\\left(\\tfrac{T}{2}\\right) < \\tfrac{1}{2}s(T)$$\nHence $t_m > \\tfrac{1}{2}T$.\n\nSince speed increases with time, a later time corresponds to a larger speed, so\n$$v_2 = v(t_m) > v\\left(\\tfrac{T}{2}\\right) = v_1.$$\n\n**Conclusion:** $v_1$ is always smaller than $v_2$ → option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Uniform acceleration means speed increases with time',
      'In accelerating motion, distance–time graph is concave upward',
      'Half the distance is reached after more than half the time',
      'Later time → larger speed, so v₂ > v₁',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-046-question.png'],
    answerImagePaths: ['/physics/exercises/position-movement/pm-046-answer-steps.png'],
  },
  // Position and Movement - Question 47
  {
    id: 'pm-047',
    type: 'multiple_choice',
    question:
      "The acceleration of objects due to gravity on the Moon is about $\\frac{1}{6}$ that on the Earth. Which of the following diagrams shows the correct velocity-time graphs for a free falling object dropping respectively on the Earth's surface and the Moon's surface?",
    options: [
      '/physics/exercises/position-movement/pm-047-option-a.png',
      '/physics/exercises/position-movement/pm-047-option-b.png',
      '/physics/exercises/position-movement/pm-047-option-c.png',
      '/physics/exercises/position-movement/pm-047-option-d.png',
    ],
    answer: '/physics/exercises/position-movement/pm-047-option-c.png',
    explanation:
      "⚠️ **Key point:** On a velocity–time graph, the slope equals acceleration. In free fall from rest, $v = gt$, so the graph is a straight line through the origin with slope $g$.\n\nSince $g_{\\text{Moon}} \\approx \\frac{1}{6}g_{\\text{Earth}}$, the Moon's $v$–$t$ line must be **less steep** than the Earth's line.\n\n**Conclusion:** The correct pair of graphs is option C.",
    difficulty: 2,
    points: 15,
    hints: [
      'For free fall from rest, v increases linearly with time',
      'Slope of a v–t graph gives acceleration (g)',
      'Smaller g on the Moon means a smaller slope',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 48
  {
    id: 'pm-048',
    type: 'multiple_choice',
    question:
      'A bicycle finishes a $100$-metre journey in $9.77\\text{ s}$. Assume that the bicycle starts from rest and moves with a uniform acceleration. What is the acceleration of the bicycle throughout the journey?',
    options: ['1.05 m/s²', '2.10 m/s²', '10.2 m/s²', '20.5 m/s²'],
    answer: '2.10 m/s²',
    explanation:
      '⚠️ **Key point:** The bicycle starts from rest, so $u = 0$. Use $s = ut + \\frac{1}{2}at^2$ and solve for $a$.\n\n**Step 1:** Substitute $u = 0$\n$$s = \\frac{1}{2}at^2$$\n\n**Step 2:** Solve for $a$\n$$a = \\frac{2s}{t^2}$$\n\n**Step 3:** Substitute $s = 100\\text{ m}$ and $t = 9.77\\text{ s}$\n$$a = \\frac{2(100)}{(9.77)^2} \\approx 2.10\\text{ m/s}^2$$\n\n**Conclusion:** The acceleration is $2.10\\text{ m/s}^2$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Starts from rest means u = 0',
      'Use s = ut + ½at²',
      'Rearrange to a = 2s / t² and substitute s = 100 m, t = 9.77 s',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 49
  {
    id: 'pm-049',
    type: 'multiple_choice',
    question:
      'The displacement-time graph of an object moving along a straight line is shown below. Which of the following graphs best represents the relationship between the velocity and time of the object?',
    options: [
      '/physics/exercises/position-movement/pm-049-option-a.png',
      '/physics/exercises/position-movement/pm-049-option-b.png',
      '/physics/exercises/position-movement/pm-049-option-c.png',
      '/physics/exercises/position-movement/pm-049-option-d.png',
    ],
    answer: '/physics/exercises/position-movement/pm-049-option-d.png',
    explanation:
      '⚠️ **Key point:** Velocity is the slope of a displacement–time ($s$–$t$) graph, and acceleration is the slope of a velocity–time ($v$–$t$) graph.\n\nFrom the $s$–$t$ graph:\n- **First part:** the slope increases steadily → velocity increases linearly → constant positive acceleration (straight line in $v$–$t$).\n- **Second part:** the slope is constant → velocity is constant → zero acceleration (horizontal segment in $v$–$t$).\n- **Third part:** the slope increases again but more gently → velocity increases linearly with a smaller slope → constant acceleration smaller than in the first part.\n\n**Conclusion:** The matching $v$–$t$ graph is option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Velocity is the slope of the s–t graph',
      'Constant acceleration means v–t is a straight line',
      'Zero acceleration means v–t is horizontal',
      'Compare how the slope of the s–t graph changes in each section',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-049-question.png'],
  },
  // Position and Movement - Question 50
  {
    id: 'pm-050',
    type: 'multiple_choice',
    question:
      'The above graph shows the variation of the square of velocity $v^2$ with the displacement $s$ of a particle moving along a straight line. What is the acceleration of the particle?',
    options: [
      '$0.5 \\text{ m s}^{-2}$',
      '$1 \\text{ m s}^{-2}$',
      '$1.5 \\text{ m s}^{-2}$',
      '$2 \\text{ m s}^{-2}$',
    ],
    answer: '$0.5 \\text{ m s}^{-2}$',
    explanation:
      '⚠️ **Key point:** For motion with constant acceleration, $v^2 = u^2 + 2as$. The slope of a $v^2$–$s$ graph equals $2a$.\n\n**Step 1:** Identify the equation\nFor constant acceleration:\n$$v^2 = u^2 + 2as$$\n\n**Step 2:** Read two points from the graph\nFrom the graph:\n- When $s = 0$, $v^2 = 1$\n- When $s = 1$, $v^2 = 2$\n\n**Step 3:** Apply the equation\nAt $s = 0$:\n$$v^2 = u^2 + 2a(0) \\;\\Rightarrow\\; u^2 = 1$$\n\nAt $s = 1$:\n$$v^2 = u^2 + 2a(1)$$\n$$2 = 1 + 2a(1)$$\n$$2 = 1 + 2a$$\n$$2a = 2 - 1 = 1$$\n$$a = 0.5 \\text{ m s}^{-2}$$\n\n**Verification:**\nUsing $v^2 = u^2 + 2as$ with $u^2 = 1$ and $a = 0.5$:\n- At $s = 0$: $v^2 = 1 + 2(0.5)(0) = 1$ ✓\n- At $s = 1$: $v^2 = 1 + 2(0.5)(1) = 1 + 1 = 2$ ✓\n\n**Conclusion:** The acceleration is $0.5 \\text{ m s}^{-2}$ → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use the equation v² = u² + 2as for constant acceleration',
      'Read two points from the v²–s graph',
      'At s = 0, v² gives the initial velocity squared (u²)',
      'Substitute the values into v² = u² + 2as to find a',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-050-question.png'],
  },
  // Position and Movement - Question 51
  {
    id: 'pm-051',
    type: 'multiple_choice',
    question:
      'A fish jumps up vertically to a maximum height of $0.5\\text{ m}$ above the water surface. What is the speed when it just leaves the surface?',
    options: [
      '$3.13 \\text{ m s}^{-1}$',
      '$4.43 \\text{ m s}^{-1}$',
      '$6.26 \\text{ m s}^{-1}$',
      '$9.81 \\text{ m s}^{-1}$',
    ],
    answer: '$3.13 \\text{ m s}^{-1}$',
    explanation:
      '⚠️ **Key point:** At the maximum height, the vertical velocity is zero. Use $v^2 = u^2 + 2as$ with the known displacement and acceleration.\n\n**Step 1:** Identify known values\n- Maximum height: $s = 0.5\\text{ m}$\n- At maximum height: final velocity $v = 0$ (momentarily stops)\n- Acceleration: $a = -g = -9.81\\text{ m s}^{-2}$ (downward, opposite to motion)\n- Unknown: initial velocity $u$ (speed when leaving surface)\n\n**Step 2:** Apply the equation\nUsing $v^2 = u^2 + 2as$:\n$$(0)^2 = u^2 + 2(-9.81)(0.5)$$\n$$0 = u^2 - 9.81$$\n$$u^2 = 9.81$$\n$$u = \\sqrt{9.81} = 3.13\\text{ m s}^{-1}$$\n\n**Verification:**\nUsing $v^2 = u^2 + 2as$ with $u = 3.13\\text{ m s}^{-1}$:\n$$v^2 = (3.13)^2 + 2(-9.81)(0.5) = 9.80 - 9.81 \\approx 0$$\nAt maximum height, $v = 0$ ✓\n\n**Conclusion:** The speed when the fish just leaves the surface is $3.13\\text{ m s}^{-1}$ → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'At maximum height, the vertical velocity is zero',
      'Use v² = u² + 2as with v = 0 at the top',
      'Acceleration is -g (negative because it opposes upward motion)',
      'Substitute s = 0.5 m and a = -9.81 m/s² to find u',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 52
  {
    id: 'pm-052',
    type: 'multiple_choice',
    question:
      'An experiment is conducted by releasing a stone from rest to the ground. At constant time interval $T$, the positions of the stone are recorded. Picture (a) shows its positions at different time. Which of the following changes will give a path of the stone as shown in Picture (b)? (Neglect air resistance.)',
    options: [
      'A shorter time interval is used.',
      'A longer time interval is used.',
      'A lighter stone is used.',
      'A heavier stone is used.',
    ],
    answer: 'A shorter time interval is used.',
    explanation:
      '⚠️ **Key point:** For free fall from rest, $s = \\frac{1}{2}gt^2$. The displacement depends on time squared, not on mass. A shorter time interval means smaller displacements between consecutive positions.\n\n**Step 1:** Understand the motion equation\nFor a stone released from rest:\n$$s = ut + \\frac{1}{2}at^2$$\nSince $u = 0$ (released from rest) and $a = g$:\n$$s = \\frac{1}{2}gt^2$$\n\n**Step 2:** Analyze Picture (a) vs Picture (b)\n- Picture (a): Positions are more separated (larger distances between consecutive positions)\n- Picture (b): Positions are closer together (smaller distances between consecutive positions)\n\n**Step 3:** Evaluate each option\n\n**Option A: A shorter time interval is used.** ✓ **Correct**\n- If time interval $T$ is shorter, then $t$ (time from release) is smaller\n- Since $s = \\frac{1}{2}gt^2$ and $s \\propto t^2$, smaller $t$ gives smaller $s$\n- Therefore, positions will be closer together → matches Picture (b)\n\n**Option B: A longer time interval is used.** ✗ **Incorrect**\n- If time interval $T$ is longer, then $t$ is larger\n- Larger $t$ gives larger $s$ (since $s \\propto t^2$)\n- Positions will be more separated → matches Picture (a), not Picture (b)\n\n**Option C: A lighter stone is used.** ✗ **Incorrect**\n- Acceleration due to gravity $g$ is independent of mass\n- Since $s = \\frac{1}{2}gt^2$ and $g$ is unchanged, the positions remain the same\n- No change in the path → incorrect\n\n**Option D: A heavier stone is used.** ✗ **Incorrect**\n- Same reasoning as Option C\n- Acceleration $g$ is independent of mass\n- Positions remain unchanged → incorrect\n\n**Conclusion:** Only Option A is correct → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'For free fall from rest, use s = ½gt²',
      'Displacement s is proportional to t², not to mass',
      'Picture (b) shows positions closer together than Picture (a)',
      'A shorter time interval means smaller t, which gives smaller s',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-052-question.png'],
  },
  // Position and Movement - Question 53
  {
    id: 'pm-053',
    type: 'multiple_choice',
    question:
      'At $t=0$, a car and a truck are at the same point on a horizontal straight road. Their velocity-time graph is shown in the figure above. Which of the following statements is correct?',
    options: [
      'At $t=10\\text{ s}$, the car is $100\\text{ m}$ behind the truck.',
      'At $t=10\\text{ s}$, the car catches up the truck.',
      'At $t=20\\text{ s}$, the car is $100\\text{ m}$ behind the truck.',
      'At $t=20\\text{ s}$, the car catches up the truck.',
    ],
    answer: 'At $t=20\\text{ s}$, the car catches up the truck.',
    explanation:
      '⚠️ **Key point:** The area under a velocity-time ($v$–$t$) graph equals displacement. Compare the areas under each graph to find their relative positions.\n\n**Step 1:** Understand the relationship\n$$\\text{Area under } v\\text{–}t \\text{ graph} = \\text{displacement}$$\n\n**Step 2:** Calculate displacements at $t = 10\\text{ s}$\n\n**Car (triangle from $0$ to $10\\text{ s}$):**\n$$s_{\\text{car}} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(10)(10) = 50\\text{ m}$$\n\n**Truck (rectangle from $0$ to $10\\text{ s}$):**\n$$s_{\\text{truck}} = \\text{base} \\times \\text{height} = (10)(10) = 100\\text{ m}$$\n\n**Relative position:**\n$$\\Delta s = s_{\\text{truck}} - s_{\\text{car}} = 100 - 50 = 50\\text{ m}$$\nThe car is $50\\text{ m}$ behind the truck (not $100\\text{ m}$).\n\n**Step 3:** Calculate displacements at $t = 20\\text{ s}$\n\n**Car (triangle from $0$ to $20\\text{ s}$):**\n$$s_{\\text{car}} = \\frac{1}{2}(20)(20) = 200\\text{ m}$$\n\n**Truck (rectangle from $0$ to $20\\text{ s}$):**\n$$s_{\\text{truck}} = (10)(20) = 200\\text{ m}$$\n\n**Relative position:**\n$$\\Delta s = s_{\\text{truck}} - s_{\\text{car}} = 200 - 200 = 0\\text{ m}$$\nThe car catches up the truck (displacements are equal).\n\n**Step 4:** Evaluate each option\n\n**Option A:** "At $t=10\\text{ s}$, the car is $100\\text{ m}$ behind the truck." ✗ **Incorrect**\n- At $t=10\\text{ s}$, the car is $50\\text{ m}$ behind, not $100\\text{ m}$\n\n**Option B:** "At $t=10\\text{ s}$, the car catches up the truck." ✗ **Incorrect**\n- At $t=10\\text{ s}$, the car is still $50\\text{ m}$ behind\n\n**Option C:** "At $t=20\\text{ s}$, the car is $100\\text{ m}$ behind the truck." ✗ **Incorrect**\n- At $t=20\\text{ s}$, the car catches up (displacements are equal)\n\n**Option D:** "At $t=20\\text{ s}$, the car catches up the truck." ✓ **Correct**\n- At $t=20\\text{ s}$, both have displacement $200\\text{ m}$\n- The car catches up the truck\n\n**Conclusion:** Only Option D is correct → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Area under a v–t graph equals displacement',
      'Car has a triangular area (accelerating), truck has a rectangular area (constant velocity)',
      'Calculate the area for each vehicle at t = 10 s and t = 20 s',
      'Compare the displacements to find when they meet',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-053-question.png'],
  },
  // Position and Movement - Question 54
  {
    id: 'pm-054',
    type: 'multiple_choice',
    question:
      'John and Mary are driving two cars, $P$ and $Q$, along a straight horizontal road respectively. At time $t=0$, they both see an obstacle and apply the brakes to stop the cars with uniform deceleration. The variation of velocity with time of the two cars is shown in the figure below. Which of the following statements is/are correct?\n(1) The two cars have the same initial speeds.\n(2) The reaction times of John and Mary are the same.\n(3) The total stopping distances of the two cars are the same.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(2) only',
    explanation:
      '⚠️ **Key point:** On a velocity-time graph, the initial speed is the starting velocity, the horizontal line represents reaction time (constant velocity before braking), and the area under the graph represents total stopping distance.\n\n**Step 1:** Analyze Statement (1): "The two cars have the same initial speeds."\n\n**From the graph:**\n- Car $P$ starts at a higher initial velocity (approximately twice that of car $Q$)\n- Car $Q$ starts at a lower initial velocity\n\n**Conclusion:** Statement (1) is **incorrect** ✗\n\nThe two cars do **not** have the same initial speeds. Car $P$ has approximately twice the initial speed of car $Q$.\n\n**Step 2:** Analyze Statement (2): "The reaction times of John and Mary are the same."\n\n**Understanding reaction time:**\n- Reaction time is the time interval during which the driver reacts before applying brakes\n- On a $v$–$t$ graph, this appears as a horizontal line (constant velocity, no deceleration yet)\n\n**From the graph:**\n- Both cars $P$ and $Q$ have horizontal lines of the same duration\n- The time intervals before the velocity starts decreasing are equal\n\n**Conclusion:** Statement (2) is **correct** ✓\n\nThe reaction times of John and Mary are the same (equal horizontal line durations).\n\n**Step 3:** Analyze Statement (3): "The total stopping distances of the two cars are the same."\n\n**Understanding stopping distance:**\n- Total stopping distance equals the area under the velocity-time graph\n- This includes both the distance travelled during reaction time and the distance travelled during braking\n\n**From the graph:**\n- Car $P$: Larger area under the graph (higher initial speed, longer braking distance)\n- Car $Q$: Smaller area under the graph (lower initial speed, shorter braking distance)\n\n**Conclusion:** Statement (3) is **incorrect** ✗\n\nThe total stopping distance of car $P$ is greater than that of car $Q$ (larger area under the graph).\n\n**Summary:**\n- Statement (1): ✗ Incorrect (different initial speeds)\n- Statement (2): ✓ Correct (same reaction times)\n- Statement (3): ✗ Incorrect (different stopping distances)\n\n**Conclusion:** Only statement (2) is correct → option A: **(2) only**.',
    difficulty: 2,
    points: 15,
    hints: [
      'Initial speed is the starting velocity on the v–t graph',
      'Reaction time appears as a horizontal line (constant velocity before braking)',
      'Total stopping distance equals the area under the v–t graph',
      'Compare the initial speeds, horizontal line durations, and areas under the graphs',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-054-question.png'],
  },
  // Position and Movement - Question 55
  {
    id: 'pm-055',
    type: 'multiple_choice',
    question:
      'A car is travelling at a constant speed of $50\\text{ km h}^{-1}$. How much time does it take to travel $500\\text{ m}$?',
    options: ['$0.1\\text{ s}$', '$10\\text{ s}$', '$36\\text{ s}$', '$360\\text{ s}$'],
    answer: '$36\\text{ s}$',
    explanation:
      '⚠️ **Key point:** When using the equation $s = ut$, ensure all quantities are in consistent SI units (metres and seconds).\n\n**Step 1:** Convert speed from km/h to m/s\n$$50\\text{ km h}^{-1} = 50 \\times \\frac{1000\\text{ m}}{3600\\text{ s}} = 50 \\times \\frac{1000}{3600}\\text{ m s}^{-1}$$\n\nSimplifying:\n$$50 \\times \\frac{1000}{3600} = 50 \\times \\frac{5}{18} = \\frac{250}{18} = \\frac{125}{9} \\approx 13.89\\text{ m s}^{-1}$$\n\n**Step 2:** Apply the equation\nFor constant speed:\n$$s = ut$$\n\nSubstitute known values:\n- Displacement: $s = 500\\text{ m}$\n- Speed: $u = 50 \\times \\frac{1000}{3600}\\text{ m s}^{-1}$\n- Time: $t$ (unknown)\n\n$$500 = \\left(50 \\times \\frac{1000}{3600}\\right) t$$\n\n**Step 3:** Solve for $t$\n$$500 = \\frac{125}{9} t$$\n$$t = 500 \\times \\frac{9}{125} = \\frac{4500}{125} = 36\\text{ s}$$\n\n**Alternative calculation:**\n$$t = \\frac{s}{u} = \\frac{500}{50 \\times \\frac{1000}{3600}} = \\frac{500 \\times 3600}{50 \\times 1000} = \\frac{1,800,000}{50,000} = 36\\text{ s}$$\n\n**Verification:**\nUsing $s = ut$ with $u = \\frac{125}{9}\\text{ m s}^{-1}$ and $t = 36\\text{ s}$:\n$$s = \\frac{125}{9} \\times 36 = \\frac{125 \\times 36}{9} = 125 \\times 4 = 500\\text{ m} \\checkmark$$\n\n**Conclusion:** The time taken is $36\\text{ s}$ → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Convert speed from km/h to m/s: multiply by 1000/3600',
      'Use s = ut for constant speed',
      'Ensure all units are consistent (metres and seconds)',
      'Substitute s = 500 m and solve for t',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 56
  {
    id: 'pm-056',
    type: 'multiple_choice',
    question:
      'The figure above shows three paths $P_1$, $P_2$ and $P_3$ from $X$ to $Y$ on a horizontal plane. Three students take the same time to travel from $X$ to $Y$ via the three paths respectively. Which of the following physical quantities about their journey is/are the same?\n(1) displacement\n(2) distance\n(3) average speed',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '⚠️ **Key point:** Displacement is a vector (straight-line distance from start to finish), distance is a scalar (length of path travelled), and average speed = distance / time.\n\n**Step 1:** Analyze Statement (1): "displacement"\n\n**Understanding displacement:**\n- Displacement is the straight-line distance from the starting point to the ending point\n- It is a vector quantity with both magnitude and direction\n- Displacement depends only on the initial and final positions, not on the path taken\n\n**From the problem:**\n- All three students start at point $X$ and end at point $Y$\n- The straight-line distance from $X$ to $Y$ is the same regardless of which path ($P_1$, $P_2$, or $P_3$) is taken\n\n**Conclusion:** Statement (1) is **correct** ✓\n\nAll three students have the same displacement (same straight-line distance from $X$ to $Y$).\n\n**Step 2:** Analyze Statement (2): "distance"\n\n**Understanding distance:**\n- Distance is the total length of the path travelled\n- It is a scalar quantity (magnitude only)\n- Distance depends on the actual path taken\n\n**From the problem:**\n- Path $P_1$, $P_2$, and $P_3$ are different paths with different lengths\n- Each student travels along a different path, so they cover different distances\n\n**Conclusion:** Statement (2) is **incorrect** ✗\n\nThe three students have different distances travelled (different path lengths).\n\n**Step 3:** Analyze Statement (3): "average speed"\n\n**Understanding average speed:**\n- Average speed = total distance travelled / total time taken\n- It is a scalar quantity\n- Average speed depends on both distance and time\n\n**From the problem:**\n- All three students take the same time to travel\n- However, they travel different distances (as established in Statement 2)\n- Since average speed = distance / time, and distance is different while time is the same:\n  $$\\text{average speed} = \\frac{\\text{different distance}}{\\text{same time}} = \\text{different values}$$\n\n**Conclusion:** Statement (3) is **incorrect** ✗\n\nThe three students have different average speeds (different distances divided by the same time).\n\n**Summary:**\n- Statement (1): ✓ Correct (same displacement)\n- Statement (2): ✗ Incorrect (different distances)\n- Statement (3): ✗ Incorrect (different average speeds)\n\n**Conclusion:** Only statement (1) is correct → option A: **(1) only**.',
    difficulty: 2,
    points: 15,
    hints: [
      'Displacement is the straight-line distance from start to finish, independent of path',
      'Distance is the total length of the path travelled, which depends on the route',
      'Average speed = distance / time',
      'Same time but different distances means different average speeds',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-056-question.png'],
  },
  // Position and Movement - Question 57
  {
    id: 'pm-057',
    type: 'multiple_choice',
    question:
      'A diver jumps up vertically in the air from a high platform and falls into water. The $v$–$t$ graph below shows the variation of the velocity of the diver against time from the point he jumps $(P)$ until he is at the lowest point $(Q)$ in the water. Which of the following is correct?',
    options: [
      'Total distance travelled from $P$ to $Q$: $8.9\\text{ m}$; Height of the platform above water surface: $8\\text{ m}$',
      'Total distance travelled from $P$ to $Q$: $10.6\\text{ m}$; Height of the platform above water surface: $10\\text{ m}$',
      'Total distance travelled from $P$ to $Q$: $11.5\\text{ m}$; Height of the platform above water surface: $8\\text{ m}$',
      'Total distance travelled from $P$ to $Q$: $11.5\\text{ m}$; Height of the platform above water surface: $10.6\\text{ m}$',
    ],
    answer:
      'Total distance travelled from $P$ to $Q$: $11.5\\text{ m}$; Height of the platform above water surface: $8\\text{ m}$',
    explanation:
      '⚠️ **Key point:** Total distance equals the sum of absolute areas under a $v$–$t$ graph, while displacement equals the signed (net) area. The height of the platform equals the magnitude of displacement from $P$ to the water surface.\n\n**Step 1:** Calculate total distance travelled from $P$ to $Q$\n\n**Understanding total distance:**\n- Total distance = sum of absolute areas under the $v$–$t$ graph\n- This includes both upward and downward motion\n\n**From the graph (from $0\\text{ s}$ to $2\\text{ s}$):**\n- Triangle from $0$ to $0.3\\text{ s}$ (upward motion):\n  $$A_1 = \\frac{1}{2}(0.3)(3) = 0.45\\text{ m}$$\n- Triangle from $0.3\\text{ s}$ to $2\\text{ s}$ (downward motion):\n  $$A_2 = \\frac{1}{2}(2 - 0.3)(13) = \\frac{1}{2}(1.7)(13) = 11.05\\text{ m}$$\n\n**Total distance:**\n$$\\text{Total distance} = A_1 + A_2 = 0.45 + 11.05 = 11.5\\text{ m}$$\n\n**Alternative calculation (as given):**\n$$\\text{Total distance} = \\frac{1}{2}(0.3)(3) + \\frac{1}{2}(2 - 0.3)(13) = 0.45 + 11.05 = 11.5\\text{ m}$$\n\n**Step 2:** Calculate height of the platform above water surface\n\n**Understanding displacement:**\n- Displacement from $P$ to the water surface = signed (net) area under the $v$–$t$ graph from $0\\text{ s}$ to $1.6\\text{ s}$\n- Area above the time axis is positive (upward), area below is negative (downward)\n- Height = magnitude of displacement\n\n**From the graph (from $0\\text{ s}$ to $1.6\\text{ s}$):**\n- Triangle above axis from $0$ to $0.3\\text{ s}$ (upward):\n  $$A_{\\uparrow} = +\\frac{1}{2}(0.3)(3) = +0.45\\text{ m}$$\n- Triangle below axis from $0.3\\text{ s}$ to $1.6\\text{ s}$ (downward):\n  $$A_{\\downarrow} = -\\frac{1}{2}(1.6 - 0.3)(13) = -\\frac{1}{2}(1.3)(13) = -8.45\\text{ m}$$\n\n**Net displacement:**\n$$s = A_{\\uparrow} + A_{\\downarrow} = 0.45 + (-8.45) = -8\\text{ m}$$\n\nThe negative sign indicates downward displacement.\n\n**Height of platform:**\n$$\\text{Height} = |s| = |-8| = 8\\text{ m}$$\n\n**Alternative calculation (as given):**\n$$\\text{Displacement} = \\frac{1}{2}(0.3)(3) - \\frac{1}{2}(1.6 - 0.3)(13) = 0.45 - 8.45 = -8\\text{ m}$$\n$$\\text{Height} = 8\\text{ m}$$\n\n**Step 3:** Match with options\n\n**Total distance:** $11.5\\text{ m}$\n**Height:** $8\\text{ m}$\n\n**Conclusion:** Option C matches: Total distance $11.5\\text{ m}$, Height $8\\text{ m}$ → option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Total distance = sum of absolute areas under the v–t graph',
      'Displacement = signed (net) area (positive above axis, negative below axis)',
      'Height of platform = magnitude of displacement from P to water surface',
      'Calculate areas for upward motion (0 to 0.3 s) and downward motion (0.3 s to 1.6 s or 2 s)',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-057-question.png'],
  },
  // Position and Movement - Question 58
  {
    id: 'pm-058',
    type: 'multiple_choice',
    question:
      'Mary walks along a triangular path $XYZ$ where $XY = YZ = ZX$. It takes her $10\\text{ s}$, $20\\text{ s}$ and $10\\text{ s}$ to travel through $XY$, $YZ$ and $ZX$ respectively. Which of the following graphs best represents the variation of distance travelled with time?',
    options: [
      '/physics/exercises/position-movement/pm-058-option-a.png',
      '/physics/exercises/position-movement/pm-058-option-b.png',
      '/physics/exercises/position-movement/pm-058-option-c.png',
      '/physics/exercises/position-movement/pm-058-option-d.png',
    ],
    answer: '/physics/exercises/position-movement/pm-058-option-c.png',
    explanation:
      '⚠️ **Key point:** On a distance–time graph, the slope represents speed.\n\nSince $XY = YZ = ZX$, Mary travels the same distance on each side.\n- For $XY$: time = $10\\text{ s}$ → speed is relatively large\n- For $YZ$: time = $20\\text{ s}$ → speed is smaller, so the slope is smaller\n- For $ZX$: time = $10\\text{ s}$ → speed returns to the same as in $XY$, so the slope is the same as the first part\n\nSo the correct distance–time graph must have: steep slope (0–10 s), gentler slope (10–30 s), then steep slope again (30–40 s).\n\n**Conclusion:** The correct graph is option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Slope of a distance–time graph represents speed',
      'All three sides have the same distance',
      'Longer time means smaller speed and smaller slope',
      'The first and third segments should have the same slope',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-058-question.png'],
  },
  // Position and Movement - Question 59
  {
    id: 'pm-059',
    type: 'multiple_choice',
    question:
      'An object of mass $m$, released from rest at height $h$ above the ground, takes time $t$ to reach the ground. If another object of mass $2m$ is released from rest at the same height, how long does it take to reach the ground? (Neglect air resistance.)',
    options: [
      '$\\frac{t}{\\sqrt{2}}$',
      '$\\frac{t}{2}$',
      '$t$',
      '$\\sqrt{2}t$',
    ],
    answer: '$t$',
    explanation:
      '⚠️ **Key point:** In free fall (neglecting air resistance), all objects have the same acceleration $g$, independent of mass.\n\nSince both objects are released from rest from the same height $h$, the time to reach the ground depends only on $h$ and $g$:\n$$h = \\frac{1}{2}gt^2$$\nSo the object of mass $2m$ also takes the same time $t$.\n\n**Conclusion:** The correct answer is $t$ → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'In vacuum, free-fall acceleration g is independent of mass',
      'Released from rest: use h = ½gt²',
      'Same h and g means the same falling time',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 60
  {
    id: 'pm-060',
    type: 'multiple_choice',
    question:
      'The graph above shows the velocity-time graph of an object which is thrown vertically upwards under gravity. If the object is thrown vertically upwards with a higher initial velocity, which of the following graphs (in dotted lines) best represents the expected result? (Neglect air resistance.)',
    options: [
      '/physics/exercises/position-movement/pm-060-option-a.png',
      '/physics/exercises/position-movement/pm-060-option-b.png',
      '/physics/exercises/position-movement/pm-060-option-c.png',
      '/physics/exercises/position-movement/pm-060-option-d.png',
    ],
    answer: '/physics/exercises/position-movement/pm-060-option-a.png',
    explanation:
      '⚠️ **Key point:** The slope of a $v$–$t$ graph equals acceleration. For vertical motion under gravity (neglecting air resistance), the acceleration is constant and equal to $-g$, which does not depend on the initial velocity.\n\nIf the object is thrown upwards with a higher initial velocity:\n- The velocity at $t=0$ is larger (higher intercept)\n- The acceleration remains $-g$, so the slope stays the same\n\nTherefore, the new $v$–$t$ graph is a straight line **parallel** to the original line, but starting at a higher initial velocity. It will cross $v=0$ at a later time.\n\n**Conclusion:** The correct dotted line is option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Slope of a v–t graph represents acceleration',
      'For vertical motion under gravity, acceleration is constant and equals -g',
      'Changing the initial velocity changes the intercept, not the slope',
      'The correct dotted line should be parallel to the original line',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-060-question.png'],
  },
  // Position and Movement - Question 61
  {
    id: 'pm-061',
    type: 'multiple_choice',
    question:
      'A ball is released from rest at a certain height above the ground. If air resistance is neglected, what is the ratio of the distance travelled by the ball in the second second to that travelled in the third second?',
    options: ['1 : 3', '1 : 5', '3 : 5', '5 : 8'],
    answer: '3 : 5',
    explanation:
      '⚠️ **Key point:** For free fall from rest, the displacement is $s = \\frac{1}{2}gt^2$. The distance in the $n$th second is the difference $s(n) - s(n-1)$.\n\n**Step 1:** Displacements after 1 s, 2 s, 3 s\n$$s(1) = \\frac{1}{2}g(1)^2 = \\frac{1}{2}g$$\n$$s(2) = \\frac{1}{2}g(2)^2 = 2g$$\n$$s(3) = \\frac{1}{2}g(3)^2 = \\frac{9}{2}g$$\n\n**Step 2:** Distances in the 2nd and 3rd seconds\n$$d_2 = s(2) - s(1) = 2g - \\frac{1}{2}g = \\frac{3}{2}g$$\n$$d_3 = s(3) - s(2) = \\frac{9}{2}g - 2g = \\frac{5}{2}g$$\n\n**Step 3:** Ratio\n$$d_2:d_3 = \\left(\\frac{3}{2}g\\right):\\left(\\frac{5}{2}g\\right) = 3:5$$\n\n**Conclusion:** $3:5$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'For free fall from rest, use s = ½gt²',
      'Distance in the 2nd second is s(2) − s(1)',
      'Distance in the 3rd second is s(3) − s(2)',
      'g cancels in the ratio',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 62
  {
    id: 'pm-062',
    type: 'multiple_choice',
    question:
      'A car travels with a speed of $18\\text{ m s}^{-1}$. The driver suddenly sees a girl standing $36\\text{ m}$ in front. If the reaction time of the driver is $0.5\\text{ s}$, what should be the minimum deceleration of the car in order to avoid collision with the girl?',
    options: [
      '3.0 m s⁻²',
      '4.5 m s⁻²',
      '6.0 m s⁻²',
      '9.0 m s⁻²',
    ],
    answer: '6.0 m s⁻²',
    explanation:
      '⚠️ **Key point:** During reaction time the car continues at constant speed. Braking starts only after that, and the car must stop within the remaining distance.\n\n**Step 1:** Distance travelled during reaction time\n$$s_r = vt = 18 \\times 0.5 = 9\\text{ m}$$\n\nSo the remaining distance for braking is:\n$$s = 36 - 9 = 27\\text{ m}$$\n\n**Step 2:** Use $v^2 = u^2 + 2as$ for the braking phase\nFor stopping: $v=0$, $u=18\\text{ m s}^{-1}$, $s=27\\text{ m}$.\n$$0^2 = 18^2 + 2a(27)$$\n$$0 = 324 + 54a \\;\\Rightarrow\\; a = -6\\text{ m s}^{-2}$$\n\nMinimum deceleration is the magnitude: $6.0\\text{ m s}^{-2}$.\n\n**Conclusion:** $6.0\\text{ m s}^{-2}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'During reaction time, the car keeps moving at 18 m/s',
      'Compute remaining braking distance: 36 m − 18×0.5 s',
      'Use v² = u² + 2as with v = 0 to find deceleration',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 63
  {
    id: 'pm-063',
    type: 'multiple_choice',
    question:
      'The figure shows the time variation of the velocity of a car travelling along a straight road, starting from rest at a certain point $P$. What is the maximum distance from the point $P$ that the car would reach within the time shown in the figure?',
    options: ['100 m', '150 m', '200 m', '250 m'],
    answer: '200 m',
    explanation:
      '⚠️ **Key point:** Displacement equals the (signed) area under a $v$–$t$ graph. The maximum distance from $P$ occurs at the turning point where $v$ changes sign (i.e. where $v=0$).\n\nFrom the graph, the velocity is positive from $t=0$ to $t=30\\text{ s}$, and becomes negative after $30\\text{ s}$. So the maximum distance from $P$ is the area under the graph from $0$ to $30\\text{ s}$.\n\nThis region is a trapezium with parallel sides $10\\text{ s}$ and $30\\text{ s}$, and height $10\\text{ m s}^{-1}$:\n$$s_{\\max} = \\frac{1}{2}(10 + 30)\\times 10 = 200\\text{ m}$$\n\n**Conclusion:** $200\\text{ m}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Area under a v–t graph gives displacement',
      'Maximum distance occurs when v first becomes 0 before turning back',
      'Use the area from 0 s to 30 s (trapezium)',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-063-question.png'],
  },
  // Position and Movement - Question 64
  {
    id: 'pm-064',
    type: 'multiple_choice',
    question:
      'Two cars $A$ and $B$ move along the same straight road. The variations of their displacement from an oil station $S$ with time are shown in the figure above. Which of the following statements is/are correct?\n(1) The cars travel with the same velocity.\n(2) At time $t_0$, the two cars meet each other.\n(3) The two cars have travelled the same distance from $t=0$ to $t=t_0$.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** On a displacement–time graph, the slope represents velocity (including direction).\n\n**(1)** The two cars have slopes with opposite signs (one moves towards $S$ while the other moves away from $S$). So their velocities are in opposite directions and cannot be the same.\n\n**(2)** At $t=t_0$, the two lines intersect, meaning the cars have the same displacement from $S$ at the same time. Therefore they are at the same position and meet each other.\n\n**(3)** The magnitudes of the two slopes are equal, so the two cars have the same speed. Since they travel for the same time interval from $0$ to $t_0$, they travel the same distance.\n\n**Conclusion:** Statements (2) and (3) are correct → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Slope of an s–t graph gives velocity (with sign for direction)',
      'Intersection of two s–t lines means they meet',
      'Equal |slope| means equal speed',
      'Same speed × same time gives same distance',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-064-question.png'],
  },
  // Position and Movement - Question 65
  {
    id: 'pm-065',
    type: 'multiple_choice',
    question:
      'Peter walks along a straight road from point $P$ to point $Q$ with an average speed of $2\\text{ m s}^{-1}$. He then runs back from $Q$ to $P$ along the same road with an average speed of $4\\text{ m s}^{-1}$. Which of the following statements are correct?\n(1) The resultant displacement of Peter in the whole journey is zero.\n(2) The average velocity of Peter in the whole journey is $0\\text{ m s}^{-1}$.\n(3) The average speed of Peter in the whole journey is $3\\text{ m s}^{-1}$.',
    options: [
      '(1) & (2) only',
      '(1) & (3) only',
      '(2) & (3) only',
      '(1), (2) & (3)',
    ],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** Average velocity depends on displacement; average speed depends on total distance.\n\n**(1)** Peter returns to the starting point $P$, so the total displacement is $0$.\n\n**(2)** Average velocity $= \\frac{\\text{total displacement}}{\\text{total time}}$. Since total displacement is $0$, the average velocity is $0\\text{ m s}^{-1}$.\n\n**(3)** Let the distance $PQ = D$.\nTime $P\\to Q$: $t_1 = \\frac{D}{2}$.\nTime $Q\\to P$: $t_2 = \\frac{D}{4}$.\nTotal distance $= 2D$, total time $= \\frac{D}{2} + \\frac{D}{4} = \\frac{3D}{4}$.\n$$v_{\\text{avg speed}} = \\frac{2D}{3D/4} = \\frac{8}{3} \\approx 2.67\\text{ m s}^{-1}$$\nSo it is not $3\\text{ m s}^{-1}$.\n\n**Conclusion:** Statements (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Resultant displacement is zero if you return to the start',
      'Average velocity uses displacement / time',
      'Average speed uses total distance / total time',
      'Let PQ = D to compute the whole-journey average speed',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 66
  {
    id: 'pm-066',
    type: 'multiple_choice',
    question:
      'In the figure shown, one ball is released from rest at the top of a tower that is $100\\text{ m}$ high. The other ball is released from rest at the mid-point of the tower. Which of the following quantities is the same for both balls as they fall in air? (Neglect air resistance.)',
    options: [
      'change of velocity just before reaching the ground',
      'acceleration during the fall',
      'final velocity just before reaching the ground',
      'time of travel in the journey',
    ],
    answer: 'acceleration during the fall',
    explanation:
      '⚠️ **Key point:** If air resistance is neglected, all objects in free fall have the same constant acceleration due to gravity $g$, regardless of height.\n\nThe two balls fall through different distances, so their times of fall, final speeds, and change in velocity are different. However, during the fall they both experience the same acceleration $g$.\n\n**Conclusion:** The quantity that is the same is the acceleration during the fall → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Neglecting air resistance means free fall with constant acceleration g',
      'Acceleration due to gravity is independent of height and mass (near Earth surface)',
      'Different fall distances give different times and final speeds',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-066-question.png'],
  },
  // Position and Movement - Question 67
  {
    id: 'pm-067',
    type: 'multiple_choice',
    question:
      'A boy wants to measure the height of a building. He releases a stone from rest at the top of the building and starts to keep the time. If the stone takes $2\\text{ s}$ to reach the mid-height of the building, which of the following statements is/are correct? Take $g=10\\text{ m s}^{-2}$.\n(1) The height of the building is $40\\text{ m}$.\n(2) The stone takes $4\\text{ s}$ to reach the bottom of the building.\n(3) The stone reaches the bottom of the building with a speed of $40\\text{ m s}^{-1}$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '⚠️ **Key point:** For free fall from rest, $s = \\frac{1}{2}gt^2$.\n\n**(1)** In $2\\text{ s}$, the stone falls\n$$s = \\frac{1}{2}(10)(2)^2 = 20\\text{ m}$$\nThis is the mid-height, so the total height is $2\\times 20 = 40\\text{ m}$ ✓\n\n**(2)** For the full height $40\\text{ m}$:\n$$40 = \\frac{1}{2}(10)t^2 \\Rightarrow t^2 = 8 \\Rightarrow t = \\sqrt{8} \\approx 2.83\\text{ s}$$\nSo it is not $4\\text{ s}$ ✗\n\n**(3)** Speed at the bottom:\n$$v = gt = 10(2.83) \\approx 28.3\\text{ m s}^{-1}$$\nSo it is not $40\\text{ m s}^{-1}$ ✗\n\n**Conclusion:** Only statement (1) is correct → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use s = ½gt² with t = 2 s to find the mid-height',
      'Total height is twice the mid-height',
      'For the full height, solve 40 = ½gt² for t',
      'Speed at the bottom is v = gt (starts from rest)',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 68
  {
    id: 'pm-068',
    type: 'multiple_choice',
    question:
      'The graph shows the velocity of a body travelling in a straight line. What is the average velocity of the body during the first $3\\text{ s}$?',
    options: ['4 m s⁻¹', '6 m s⁻¹', '9 m s⁻¹', '12 m s⁻¹'],
    answer: '6 m s⁻¹',
    explanation:
      '⚠️ **Key point:** Average velocity $= \\frac{\\text{displacement}}{\\text{time}}$, and displacement equals the area under a $v$–$t$ graph.\n\nFrom $0$ to $3\\text{ s}$, the region is a triangle with base $3\\text{ s}$ and height $12\\text{ m s}^{-1}$:\n$$s = \\frac{1}{2} \\times 3 \\times 12 = 18\\text{ m}$$\n\nSo the average velocity is:\n$$v_{\\text{avg}} = \\frac{s}{t} = \\frac{18}{3} = 6\\text{ m s}^{-1}$$\n\n**Conclusion:** $6\\text{ m s}^{-1}$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Displacement = area under the v–t graph',
      'From 0 to 3 s the area is a triangle',
      'Area of triangle = ½ × base × height',
      'Average velocity = displacement ÷ time',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-068-question.png'],
  },
  // Position and Movement - Question 69
  {
    id: 'pm-069',
    type: 'multiple_choice',
    question:
      'A car takes $20\\text{ s}$ to travel the first $80\\text{ m}$, and another $10\\text{ s}$ to travel a further $70\\text{ m}$. What is the average speed?',
    options: [
      '2.5 m s⁻¹',
      '4.0 m s⁻¹',
      '5.0 m s⁻¹',
      '5.5 m s⁻¹',
    ],
    answer: '5.0 m s⁻¹',
    explanation:
      '⚠️ **Key point:** Average speed $= \\frac{\\text{total distance}}{\\text{total time}}$.\n\nTotal distance $= 80 + 70 = 150\\text{ m}$.\nTotal time $= 20 + 10 = 30\\text{ s}$.\n$$v_{\\text{avg}} = \\frac{150}{30} = 5.0\\text{ m s}^{-1}$$\n\n**Conclusion:** $5.0\\text{ m s}^{-1}$ → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Average speed uses total distance / total time',
      'Add the two distances and the two times',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 70
  {
    id: 'pm-070',
    type: 'multiple_choice',
    question:
      'Peter throws a ball downwards with an initial velocity of $5\\text{ m s}^{-1}$ from the top of a building. After $3\\text{ s}$, the ball reaches the ground. What is the height of the building?',
    options: ['29 m', '44 m', '59 m', '88 m'],
    answer: '59 m',
    explanation:
      '⚠️ **Key point:** Use $s = ut + \\frac{1}{2}at^2$. Take downward as positive so $u=5\\text{ m s}^{-1}$ and $a=g=9.81\\text{ m s}^{-2}$.\n\nWith $t=3\\text{ s}$:\n$$s = (5)(3) + \\frac{1}{2}(9.81)(3)^2 = 15 + 44.145 = 59.145\\text{ m} \\approx 59\\text{ m}$$\n\n**Conclusion:** The height is $59\\text{ m}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Take downward as positive: a = +g',
      'Use s = ut + ½at² with u = 5 m/s and t = 3 s',
      'Round 59.145 m to 59 m',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 71
  {
    id: 'pm-071',
    type: 'multiple_choice',
    question:
      "A feather is dropped downwards with an initial velocity of $2\\text{ m s}^{-1}$ at a height of $15\\text{ m}$ above the surface of the Moon. It is known that the acceleration due to gravity on the Moon's surface is $16\\%$ of that of the Earth. Calculate the speed of the feather when it reaches the surface of the Moon.",
    options: [
      '6.85 m s⁻¹',
      '7.15 m s⁻¹',
      '8.45 m s⁻¹',
      '9.25 m s⁻¹',
    ],
    answer: '7.15 m s⁻¹',
    explanation:
      "⚠️ **Key point:** On the Moon, air resistance is negligible, so the feather falls with a constant acceleration $g_{\\text{Moon}} = 0.16g_{\\text{Earth}}$.\n\nTake downward as positive.\n$$a = 0.16(9.81) = 1.5696\\text{ m s}^{-2}$$\n\nUsing $v^2=u^2+2as$ with $u=2\\text{ m s}^{-1}$ and $s=15\\text{ m}$:\n$$v^2 = (2)^2 + 2(1.5696)(15) = 4 + 47.088 = 51.088$$\n$$v = \\sqrt{51.088} \\approx 7.15\\text{ m s}^{-1}$$\n\n**Conclusion:** $7.15\\text{ m s}^{-1}$ → option B.",
    difficulty: 2,
    points: 15,
    hints: [
      'Use g_Moon = 0.16 g_Earth',
      'Take s = 15 m, u = 2 m/s (downwards)',
      'Apply v² = u² + 2as',
      'Take the square root to get v',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 72
  {
    id: 'pm-072',
    type: 'multiple_choice',
    question:
      'Two balls of the same mass are dropped from the top of a tall building one after the other. Air resistance is negligible. The separation between the two balls',
    options: [
      'remains constant.',
      'decreases with time.',
      'increases with time.',
      'depends on the mass of the two balls.',
    ],
    answer: 'increases with time.',
    explanation:
      '⚠️ **Key point:** Both balls fall with the same constant acceleration $g$. The first ball has been falling longer, so its speed is always greater than the second ball’s (after the second is released), causing the separation to increase.\n\nLet the second ball be released $t_0$ seconds after the first. At time $t$ after the first ball is released ($t \\ge t_0$):\n$$s_1 = \\frac{1}{2}gt^2,\\quad s_2 = \\frac{1}{2}g(t-t_0)^2$$\nSo the separation is\n$$\\Delta s = s_1 - s_2 = \\frac{1}{2}gt^2 - \\frac{1}{2}g(t-t_0)^2 = gtt_0 - \\frac{1}{2}gt_0^2$$\nAs $t$ increases, $\\Delta s$ increases.\n\n**Conclusion:** The separation increases with time → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Both balls have the same acceleration g',
      'The first ball always has a larger speed (after the second is released)',
      'Write s1 = ½gt² and s2 = ½g(t − t0)²',
      'Check how Δs depends on t',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 73
  {
    id: 'pm-073',
    type: 'multiple_choice',
    question:
      'Two identical balls are held above the ground. One ball is higher than the other by a separation $\\Delta s$. Air resistance is negligible. Suppose the two balls are released at the same time. During the flight, their separation will',
    options: [
      'remain constant.',
      'decrease with time.',
      'increase with time.',
      'increase and then decrease.',
    ],
    answer: 'remain constant.',
    explanation:
      '⚠️ **Key point:** If both balls are released together from rest and air resistance is negligible, they have the same acceleration $g$ and undergo identical motion. Therefore their relative motion is zero.\n\nLet the lower ball start at height $h$ and the upper ball at $h+\\Delta s$.\nAfter time $t$:\n$$y_{\\text{lower}} = h - \\frac{1}{2}gt^2,\\quad y_{\\text{upper}} = (h+\\Delta s) - \\frac{1}{2}gt^2$$\nSo the separation is\n$$y_{\\text{upper}} - y_{\\text{lower}} = \\Delta s$$\nwhich is constant throughout the flight.\n\n**Conclusion:** The separation remains constant → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Both balls have the same acceleration g',
      'They are released at the same time from rest',
      'Write positions y(t) for both balls and subtract',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 74
  {
    id: 'pm-074',
    type: 'multiple_choice',
    question:
      'A fish jumps up with a certain initial speed to leave the water surface. It reaches a maximum height of $80\\text{ cm}$ above the water surface and returns back to the water. Treat the fish as a particle and neglect air resistance. What is the time interval that the fish is above the water surface? (Take $g=10\\text{ m s}^{-2}$.)',
    options: ['0.2 s', '0.4 s', '0.8 s', '1.6 s'],
    answer: '0.8 s',
    explanation:
      '⚠️ **Key point:** For vertical motion with constant acceleration $-g$, the time to go up equals the time to come down (returning to the same height).\n\n**Step 1:** Find the initial speed using the maximum height\nAt the top, $v=0$ and $h=0.8\\text{ m}$.\nUsing $v^2 = u^2 + 2as$ with $a=-10\\text{ m s}^{-2}$:\n$$0 = u^2 + 2(-10)(0.8) \\Rightarrow u^2 = 16 \\Rightarrow u = 4\\text{ m s}^{-1}$$\n\n**Step 2:** Find the total time above the water\nTime to go up:\n$$t_{\\uparrow} = \\frac{u}{g} = \\frac{4}{10} = 0.4\\text{ s}$$\nSo the total time to return to the same level is\n$$t = 2t_{\\uparrow} = 0.8\\text{ s}$$\n\n**Conclusion:** $0.8\\text{ s}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert 80 cm to 0.8 m',
      'At maximum height, v = 0',
      'Use v² = u² + 2as to find u',
      'Time above water = 2u/g',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 75
  {
    id: 'pm-075',
    type: 'multiple_choice',
    question:
      'Ball $P$ is thrown vertically upwards from the ground with an initial velocity of $25\\text{ m s}^{-1}$. At the same time, ball $Q$ is thrown vertically downwards with an initial velocity of $15\\text{ m s}^{-1}$ from the top of a building $80\\text{ m}$ above the ground. Assume air resistance is negligible and their motions are along the same vertical line. Determine the height above the ground where the two balls meet. (Take $g=10\\text{ m s}^{-2}$.)',
    options: ['30 m', '40 m', '50 m', '60 m'],
    answer: '30 m',
    explanation:
      '⚠️ **Key point:** Write the height of each ball as a function of time and set them equal.\n\nTake upward as positive.\n\n**Ball $P$ (from ground):**\n$$y_P = 25t - \\frac{1}{2}(10)t^2 = 25t - 5t^2$$\n\n**Ball $Q$ (from top at 80 m, thrown downward):**\nInitial velocity is downward, so $u=-15\\text{ m s}^{-1}$.\n$$y_Q = 80 - 15t - \\frac{1}{2}(10)t^2 = 80 - 15t - 5t^2$$\n\nAt the meeting point, $y_P = y_Q$:\n$$25t - 5t^2 = 80 - 15t - 5t^2 \\Rightarrow 40t = 80 \\Rightarrow t=2\\text{ s}$$\n\nHeight above the ground:\n$$y = 25(2) - 5(2)^2 = 50 - 20 = 30\\text{ m}$$\n\n**Conclusion:** The balls meet at $30\\text{ m}$ above the ground → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Let upward be positive',
      'Write yP(t) from ground and yQ(t) from 80 m',
      'Downward initial velocity means u = −15 m/s for ball Q',
      'Set yP(t) = yQ(t) to solve for t',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 76
  {
    id: 'pm-076',
    type: 'multiple_choice',
    question:
      'A particle accelerates from rest with a uniform acceleration $a$ along a straight line. It travels a distance of $x$ in the third second and travels a distance of $y$ in the fifth second. Find the ratio of $x$ to $y$.',
    options: ['$3:5$', '$5:9$', '$9:16$', '$9:25$'],
    answer: '$5:9$',
    explanation:
      '⚠️ **Key point:** For uniform acceleration from rest, $s(t)=\\frac{1}{2}at^2$, so the distance travelled in the $n$th second is $s(n)-s(n-1)$.\n\n$$x = s(3)-s(2)=\\frac{1}{2}a(3^2-2^2)$$\n$$y = s(5)-s(4)=\\frac{1}{2}a(5^2-4^2)$$\n\nSo\n$$x:y=(3^2-2^2):(5^2-4^2)=5:9$$\n\n**Conclusion:** $5:9$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'From rest: s = ½at²',
      'Distance in nth second = s(n) − s(n−1)',
      'Compute s(3)−s(2) and s(5)−s(4), then take the ratio',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 77
  {
    id: 'pm-077',
    type: 'multiple_choice',
    question:
      'A car travels with a constant speed of $50\\text{ km h}^{-1}$ during a time interval. Which of the following values CANNOT be the possible average velocity of the car in this time interval?',
    options: [
      '$0\\text{ km h}^{-1}$',
      '$25\\text{ km h}^{-1}$',
      '$50\\text{ km h}^{-1}$',
      '$75\\text{ km h}^{-1}$',
    ],
    answer: '$75\\text{ km h}^{-1}$',
    explanation:
      '⚠️ **Key point:** Magnitude of average velocity $= \\frac{\\text{displacement}}{t}$, and displacement can never exceed the distance travelled.\n\nThe distance travelled in time $t$ is\n$$d = vt = 50t$$\nThe displacement $s$ satisfies $0 \\le s \\le d$.\nSo the magnitude of average velocity satisfies\n$$0 \\le v_{\\text{avg}} = \\frac{s}{t} \\le \\frac{d}{t} = 50\\text{ km h}^{-1}$$\n\nTherefore, $75\\text{ km h}^{-1}$ is impossible.\n\n**Conclusion:** $75\\text{ km h}^{-1}$ → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Average velocity uses displacement / time',
      'Displacement cannot be greater than distance',
      'Distance travelled at constant speed is d = vt',
      'So v_avg cannot exceed 50 km/h',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 78
  {
    id: 'pm-078',
    type: 'multiple_choice',
    question:
      'A boy throws a small ball upwards with an initial velocity of $15\\text{ m s}^{-1}$ at the top of a building. The height of the building is $30\\text{ m}$. If air resistance is negligible, calculate the time taken for the ball to reach the ground.',
    options: ['2.22 s', '3.33 s', '4.44 s', '5.55 s'],
    answer: '4.44 s',
    explanation:
      '⚠️ **Key point:** Use $s = ut + \\frac{1}{2}at^2$ with a consistent sign convention.\n\nTake upward as positive.\n- Initial velocity: $u = +15\\text{ m s}^{-1}$\n- Acceleration: $a = -9.81\\text{ m s}^{-2}$\n- Displacement to the ground: $s = -30\\text{ m}$\n\nSubstitute into $s = ut + \\frac{1}{2}at^2$:\n$$-30 = 15t + \\frac{1}{2}(-9.81)t^2$$\nSolving gives $t \\approx 4.44\\text{ s}$.\n\n**Conclusion:** $4.44\\text{ s}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Take upward as positive so a = −g',
      'Displacement from top to ground is −30 m',
      'Use s = ut + ½at² and solve for t',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 79
  {
    id: 'pm-079',
    type: 'multiple_choice',
    question:
      'A particle moves with an initial velocity of $5\\text{ m s}^{-1}$ on a straight line under a uniform acceleration of $2\\text{ m s}^{-2}$. What is the distance travelled by the particle in the fourth second?',
    options: ['12 m', '24 m', '36 m', '48 m'],
    answer: '12 m',
    explanation:
      '⚠️ **Key point:** The distance in the 4th second means $s(4)-s(3)$.\n\nUsing $s(t)=ut+\\frac{1}{2}at^2$:\n$$s(4)-s(3)=u(4-3)+\\frac{1}{2}a(4^2-3^2)$$\nSubstitute $u=5\\text{ m s}^{-1}$ and $a=2\\text{ m s}^{-2}$:\n$$\\Delta s = (5)(1) + \\frac{1}{2}(2)(16-9) = 5 + 7 = 12\\text{ m}$$\n\n**Conclusion:** $12\\text{ m}$ → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Distance in the 4th second is s(4) − s(3)',
      'Use s = ut + ½at² with u = 5 and a = 2',
      'Compute 4² − 3²',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 80
  {
    id: 'pm-080',
    type: 'multiple_choice',
    question:
      'A ball is thrown vertically upwards with an initial velocity of $16\\text{ m s}^{-1}$. What is the total distance travelled by the ball when it returns to the original position?',
    options: ['13 m', '18 m', '26 m', '32 m'],
    answer: '26 m',
    explanation:
      '⚠️ **Key point:** Total distance travelled = (upward distance) + (downward distance). The upward distance equals the maximum height.\n\nAt the maximum height, $v=0$.\nUsing $v^2=u^2+2as$ with $u=16\\text{ m s}^{-1}$ and $a=-9.81\\text{ m s}^{-2}$:\n$$0 = 16^2 + 2(-9.81)s \\Rightarrow s = \\frac{256}{19.62} \\approx 13.0\\text{ m}$$\n\nSo the total distance is\n$$d = 2s \\approx 2(13.0) = 26\\text{ m}$$\n\n**Conclusion:** $26\\text{ m}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'At the top of the flight, v = 0',
      'Use v² = u² + 2as to find the maximum height',
      'Total distance = 2 × (maximum height)',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 81
  {
    id: 'pm-081',
    type: 'multiple_choice',
    question:
      'Patrick is driving along a straight horizontal road. At time $t=0$, he observes that an accident has happened. He then applies the brakes to stop his car with uniform deceleration. The graph shows the variation of the speed of the car with time. Find the distance travelled by the car from time $t=0$ to $5.0\\text{ s}$.',
    options: ['29.4 m', '40.6 m', '46.2 m', '81.2 m'],
    answer: '40.6 m',
    explanation:
      '⚠️ **Key point:** Distance travelled equals the area under a speed–time graph.\n\nFrom the graph, the area from $t=0$ to $5.0\\text{ s}$ forms a trapezium with parallel sides $5.0\\text{ s}$ and $0.8\\text{ s}$, and height $14\\text{ m s}^{-1}$.\n$$s = \\frac{1}{2}(5.0 + 0.8)\\times 14 = 40.6\\text{ m}$$\n\n**Conclusion:** $40.6\\text{ m}$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Area under a speed–time graph gives distance',
      'From 0 to 5 s the region is a trapezium',
      'Use area = ½(sum of parallel sides) × height',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-081-question.png'],
  },
  // Position and Movement - Question 82
  {
    id: 'pm-082',
    type: 'multiple_choice',
    question:
      'Two small identical objects $P$ and $Q$ are released from the top of a building $80\\text{ m}$ above the ground. $Q$ is released $1\\text{ s}$ after $P$. Neglecting air resistance, what is the maximum vertical separation between $P$ and $Q$ in the air?',
    options: ['5 m', '10 m', '35 m', '45 m'],
    answer: '35 m',
    explanation:
      '⚠️ **Key point:** The separation keeps increasing while both objects are falling. The maximum separation occurs when the first object $P$ just reaches the ground.\n\nTake $g=10\\text{ m s}^{-2}$.\n\nLet $t$ be the time after $P$ is released.\nFor $P$ (released from rest):\n$$s_P = \\frac{1}{2}gt^2 = 5t^2$$\n\nFor $Q$ (released 1 s later), for $t\\ge 1$:\n$$s_Q = 5(t-1)^2$$\n\nSo the separation is\n$$\\Delta s = s_P - s_Q = 5t^2 - 5(t-1)^2 = 10t - 5$$\nwhich increases with $t$.\n\n$P$ reaches the ground when $s_P = 80$:\n$$80 = 5t^2 \\Rightarrow t^2 = 16 \\Rightarrow t = 4\\text{ s}$$\n\nTherefore,\n$$\\Delta s_{\\max} = 10(4) - 5 = 35\\text{ m}$$\n\n**Conclusion:** $35\\text{ m}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Take g = 10 m/s² for simplicity',
      'Use s = ½gt² for each object',
      'Q is released 1 s later, so use (t − 1) for its time of fall',
      'Maximum separation occurs when P just reaches the ground',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 83
  {
    id: 'pm-083',
    type: 'multiple_choice',
    question:
      'A stone falls from rest. Neglecting air resistance, the ratio of the distance travelled by the stone in the 1st second to that travelled in the 2nd second is',
    options: ['1 : 1', '1 : 2', '1 : 3', '1 : 4'],
    answer: '1 : 3',
    explanation:
      '⚠️ **Key point:** The distance in the 2nd second means $s(2)-s(1)$.\n\nTake $g=10\\text{ m s}^{-2}$ for simplicity. For free fall from rest:\n$$s(t)=\\frac{1}{2}gt^2=5t^2$$\nSo\n$$s(1)=5\\text{ m},\\quad s(2)=20\\text{ m}$$\nDistance in the 1st second: $d_1=s(1)=5\\text{ m}$.\nDistance in the 2nd second: $d_2=s(2)-s(1)=15\\text{ m}$.\nTherefore,\n$$d_1:d_2 = 5:15 = 1:3$$\n\n**Conclusion:** $1:3$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'For free fall from rest, use s = ½gt²',
      'Distance in the 2nd second is s(2) − s(1)',
      'Take g = 10 m/s² to simplify',
      'Compute the ratio d1:d2',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 84
  {
    id: 'pm-084',
    type: 'multiple_choice',
    question:
      'A toy car travelled due east for $10\\text{ m}$ in $5\\text{ s}$, then immediately turned north and travelled $5\\text{ m}$ in $1\\text{ s}$. What was the average speed of the car?',
    options: [
      '1.9 m s⁻¹',
      '2.2 m s⁻¹',
      '2.5 m s⁻¹',
      '3.5 m s⁻¹',
    ],
    answer: '2.5 m s⁻¹',
    explanation:
      '⚠️ **Key point:** Average speed $= \\frac{\\text{total distance}}{\\text{total time}}$.\n\nTotal distance $= 10 + 5 = 15\\text{ m}$.\nTotal time $= 5 + 1 = 6\\text{ s}$.\n$$v_{\\text{avg}} = \\frac{15}{6} = 2.5\\text{ m s}^{-1}$$\n\n**Conclusion:** $2.5\\text{ m s}^{-1}$ → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Average speed uses total distance / total time',
      'Add distances (10 m + 5 m) and times (5 s + 1 s)',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 85
  {
    id: 'pm-085',
    type: 'multiple_choice',
    question:
      'A particle is released from rest at $X$ as shown. It takes time $t_1$ to fall from $X$ to $Y$ and time $t_2$ to fall from $Y$ to $Z$. If $XY:YZ = 9:16$, find $t_1:t_2$. Neglect air resistance.',
    options: ['$2:3$', '$3:4$', '$4:3$', '$3:2$'],
    answer: '$3:2$',
    explanation:
      '⚠️ **Key point:** For free fall from rest, displacement is proportional to the square of time: $s=\\frac{1}{2}gt^2$.\n\nFrom $X$ to $Y$:\n$$XY = \\frac{1}{2}gt_1^2$$\nFrom $X$ to $Z$ (total time $t_1+t_2$):\n$$XZ = XY+YZ = \\frac{1}{2}g(t_1+t_2)^2$$\nSo\n$$\\frac{XY}{XY+YZ} = \\left(\\frac{t_1}{t_1+t_2}\\right)^2$$\nGiven $XY:YZ = 9:16$:\n$$\\frac{9}{9+16} = \\left(\\frac{t_1}{t_1+t_2}\\right)^2$$\nTake square root:\n$$\\frac{3}{5} = \\frac{t_1}{t_1+t_2}$$\nSo\n$$\\frac{t_1}{t_2} = \\frac{3}{2}$$\n\n**Conclusion:** $t_1:t_2 = 3:2$ → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'For free fall from rest, use s = ½gt²',
      'XY corresponds to time t1; XZ corresponds to time (t1 + t2)',
      'Use XY/(XY+YZ) = (t1/(t1+t2))²',
      'Take square roots carefully',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-085-question.png'],
  },
  // Position and Movement - Question 86
  {
    id: 'pm-086',
    type: 'multiple_choice',
    question:
      'Two particles $P$ and $Q$ start from the same position and travel along the same straight line. The figure above shows the velocity-time ($v$–$t$) graph for $P$ and $Q$. Which of the following descriptions about their motion is/are correct?\n(1) At $t=1\\text{ s}$, $P$ changes its direction of motion.\n(2) At $t=2\\text{ s}$, the separation between $P$ and $Q$ is $4\\text{ m}$.\n(3) At $t=4\\text{ s}$, $P$ and $Q$ meet each other.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '⚠️ **Key point:** On a $v$–$t$ graph, the area under the curve gives displacement (signed). Compare displacements to judge separation and meeting.\n\n**(1)** At $t=1\\text{ s}$, $P$ still has negative velocity, so it is still moving in the negative direction. It has not yet changed direction.\n\n**(2)** From the graph, by $t=2\\text{ s}$:\n- Displacement of $P$ is $-2\\text{ m}$\n- Displacement of $Q$ is $+2\\text{ m}$\nSo the separation is $|2 - (-2)| = 4\\text{ m}$.\n\n**(3)** At $t=4\\text{ s}$, the areas (displacements) under the two graphs are not equal, so their displacements are different. Therefore, they do not meet.\n\n**Conclusion:** Only statement (2) is correct → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Direction changes only when velocity changes sign',
      'Displacement is the signed area under the v–t graph',
      'Separation at a time is the difference of their displacements',
      'They meet only when their displacements are equal',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 87
  {
    id: 'pm-087',
    type: 'multiple_choice',
    question:
      'A particle is moving along a straight line with uniform acceleration. It takes $4\\text{ s}$ to travel a distance of $36\\text{ m}$ and then $2\\text{ s}$ to travel the next $36\\text{ m}$. What is its acceleration?',
    options: [
      '$2.5\\text{ m s}^{-2}$',
      '$3.0\\text{ m s}^{-2}$',
      '$4.0\\text{ m s}^{-2}$',
      '$4.5\\text{ m s}^{-2}$',
    ],
    answer: '$3.0\\text{ m s}^{-2}$',
    explanation:
      '⚠️ **Key point:** Use $s = ut + \\frac{1}{2}at^2$ for two time intervals and solve simultaneously.\n\nLet the initial velocity be $u$ and acceleration be $a$.\n\n**First 4 s (distance 36 m):**\n$$36 = 4u + \\frac{1}{2}a(4)^2 = 4u + 8a$$\n\n**First 6 s total (distance 72 m):**\n$$72 = 6u + \\frac{1}{2}a(6)^2 = 6u + 18a$$\n\nSolve the two equations:\nFrom the first: $u = 9 - 2a$.\nSubstitute into the second:\n$$72 = 6(9 - 2a) + 18a = 54 - 12a + 18a = 54 + 6a$$\nSo $6a = 18 \\Rightarrow a = 3.0\\text{ m s}^{-2}$.\n\n**Conclusion:** $3.0\\text{ m s}^{-2}$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use s = ut + ½at²',
      'Write one equation for the first 4 s (36 m)',
      'Write another equation for the first 6 s (72 m)',
      'Solve the simultaneous equations for a',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 88
  {
    id: 'pm-088',
    type: 'multiple_choice',
    question:
      'A particle is projected vertically downward with an initial speed of $2.0\\text{ m s}^{-1}$ from the rooftop of a house. The particle reaches the ground with a speed of $11\\text{ m s}^{-1}$ as shown. Estimate the height of the house. Neglect air resistance.',
    options: ['3.3 m', '6.0 m', '6.5 m', '12 m'],
    answer: '6.0 m',
    explanation:
      '⚠️ **Key point:** Use $v^2=u^2+2as$ with $a=g$.\n\nTake downward as positive. Then $a=+g$.\n$$v^2=u^2+2gs$$\n$$s=\\frac{v^2-u^2}{2g}=\\frac{11^2-2^2}{2(9.81)}=\\frac{117}{19.62}\\approx 6.0\\text{ m}$$\n\n**Conclusion:** $6.0\\text{ m}$ → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use v² = u² + 2as with a = g',
      'Rearrange to s = (v² − u²) / (2g)',
      'Substitute u = 2.0, v = 11, g = 9.81',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-088-question.png'],
  },
  // Position and Movement - Question 89
  {
    id: 'pm-089',
    type: 'multiple_choice',
    question:
      'The figure shows the velocity-time ($v$–$t$) graph of two cars $P$ and $Q$ travelling along the same straight road. At $t=0$, the cars are at the same position. Which deductions about the cars between $t=0$ and $t=t_2$ are correct?\n(1) $P$ and $Q$ are always travelling in the same direction.\n(2) At $t=t_1$, the separation between $P$ and $Q$ is at a maximum.\n(3) At $t=t_2$, $Q$ lags behind $P$.',
    options: [
      '(1) & (2) only',
      '(1) & (3) only',
      '(2) & (3) only',
      '(1), (2) & (3)',
    ],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** On a $v$–$t$ graph, the sign of $v$ gives direction; the area under the graph gives displacement.\n\n**(1)** From the graph, the velocities of both $P$ and $Q$ are always positive, so both cars always move in the forward direction.\n\n**(2)** From $t=0$ to $t=t_1$, $v_P>v_Q$, so the separation increases. From $t=t_1$ to $t=t_2$, $v_P<v_Q$, so the separation decreases. Therefore, the separation is maximum at $t=t_1$.\n\n**(3)** From $t=0$ to $t=t_2$, the total area under the graph of $P$ is greater than that of $Q$, so $P$ has a larger displacement. Hence, at $t=t_2$, $Q$ is behind $P$.\n\n**Conclusion:** (1), (2) and (3) are all correct → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Direction is determined by the sign of velocity',
      'Separation increases when vP > vQ and decreases when vP < vQ',
      'Displacement equals the area under the v–t graph',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-089-question.png'],
  },
  // Position and Movement - Question 90
  {
    id: 'pm-090',
    type: 'multiple_choice',
    question:
      'A particle travels at $2.0\\text{ m s}^{-1}$ due east for $1.5\\text{ s}$ and then travels at $4.0\\text{ m s}^{-1}$ due north for $1.0\\text{ s}$. What is the magnitude of its average velocity for the whole journey?',
    options: ['2.0 m s⁻¹', '2.8 m s⁻¹', '3.0 m s⁻¹', '5.0 m s⁻¹'],
    answer: '2.0 m s⁻¹',
    explanation:
      '⚠️ **Key point:** Magnitude of average velocity $= \\frac{\\text{resultant displacement}}{\\text{total time}}$.\n\nDisplacement east $= 2.0\\times1.5 = 3.0\\text{ m}$.\nDisplacement north $= 4.0\\times1.0 = 4.0\\text{ m}$.\nResultant displacement:\n$$s=\\sqrt{3^2+4^2}=5\\text{ m}$$\nTotal time $= 1.5+1.0 = 2.5\\text{ s}$.\n$$v_{\\text{avg}}=\\frac{5}{2.5}=2.0\\text{ m s}^{-1}$$\n\n**Conclusion:** $2.0\\text{ m s}^{-1}$ → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Average velocity uses displacement / time (not total distance)',
      'Compute east and north displacements first',
      'Use Pythagoras to find the resultant displacement',
      'Divide by total time 2.5 s',
    ],
    sectionId: 'position-movement',
  },
  // Position and Movement - Question 91
  {
    id: 'pm-091',
    type: 'multiple_choice',
    question: "The speedometer of a car shown indicates the car's",
    options: [
      'instantaneous speed',
      'instantaneous velocity',
      'average speed of the whole journey',
      'average velocity of the whole journey',
    ],
    answer: 'instantaneous speed',
    explanation:
      "⚠️ **Key point:** A speedometer measures the car's speed at an instant (a scalar).\n\nIt does not indicate direction, so it cannot give the (vector) velocity. It is also not an average over the whole journey.\n\n**Conclusion:** instantaneous speed → option A.",
    difficulty: 1,
    points: 10,
    hints: [
      'A speedometer gives speed at a moment',
      'Velocity needs both magnitude and direction',
      'Average values depend on the whole journey',
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-091-question.png'],
  },
  // Position and Movement - Question 92
  {
    id: 'pm-092',
    type: 'multiple_choice',
    question:
      'Which of the following statements about the motion of any two objects is correct?',
    options: [
      'The object that takes a shorter time to complete the same path must have greater average speed.',
      'The object that travels a greater distance in 1 s must have greater average velocity.',
      'The object with greater velocity must have greater acceleration.',
      'If the two objects have the same acceleration, they must be moving in the same direction.',
    ],
    answer:
      'The object that takes a shorter time to complete the same path must have greater average speed.',
    explanation:
      '⚠️ **Key point:** Average speed $=\\frac{\\text{distance}}{\\text{time}}$ (scalar), but average velocity $=\\frac{\\text{displacement}}{\\text{time}}$ (vector).\n\n**A** Same path means same distance. Shorter time gives larger average speed.\n\n**B** A larger distance in 1 s does not guarantee a larger displacement (direction can change), so average velocity may be smaller.\n\n**C** A larger velocity does not imply a larger acceleration. An object can have a large velocity with zero acceleration (constant velocity).\n\n**D** Two objects can have the same acceleration while moving in opposite directions (e.g., one moving forward and speeding up, another moving backward and slowing down).\n\n**Conclusion:** Only statement A is correct.',
    difficulty: 1,
    points: 10,
    hints: [
      'Average speed uses distance / time',
      'Average velocity uses displacement / time',
      'High velocity does not mean high acceleration',
      'Same acceleration does not force same direction of motion',
    ],
    sectionId: 'position-movement',
  },
  {
    id: 'nl-001',
    type: 'multiple_choice',
    question:
      'A spring balance suspended from the ceiling of a lift registers the weight of a 20 kg body as 150 N. The lift is probably',
    options: [
      'ascending with uniform velocity.',
      'ascending with uniform acceleration.',
      'descending with uniform velocity.',
      'descending with uniform acceleration.',
    ],
    answer: 'descending with uniform acceleration.',
    explanation:
      '⚠️ **Key point:** Spring balance reading is the apparent weight (normal reaction), not necessarily the true weight.\n\nTrue weight:\n$$W=mg=(20)(9.81)=196\\ \\text{N}.$$\nMeasured reading is $150\\ \\text{N}$, so\n$$R<W.$$ \nThis means acceleration is downward.\n\nIf acceleration is downward, the lift is accelerating downward (not moving at uniform velocity).\n\n**Conclusion:** the lift is descending with uniform acceleration → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Compute true weight first: $mg$.',
      'Compare spring balance reading with $mg$ to infer acceleration direction.',
      'Uniform velocity would give reading equal to true weight.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-002',
    type: 'multiple_choice',
    question:
      'A horizontal force $F$ is applied to a block of mass $M$ on a rough horizontal surface. The acceleration of the block is $a$. If the force is changed to $2F$ and the frictional force remains unchanged, then the acceleration of the block will be',
    options: ['greater than $2a$.', 'equal to $2a$.', 'between $a$ and $2a$.', 'less than $a$.'],
    answer: 'greater than $2a$.',
    explanation:
      '⚠️ **Key point:** When friction stays constant, doubling the driving force increases net force by **more than** a factor of 2 relative to the original net force.\n\nInitially:\n$$F-f=Ma$$\nAfter doubling force:\n$$2F-f=Ma\'$$\nUse $F=f+Ma$ from the first equation:\n$$2F-f=2(f+Ma)-f=f+2Ma$$\nSo\n$$Ma\'=f+2Ma \\Rightarrow a\'=2a+\\frac{f}{M}.$$\nSince $f>0$ on a rough surface,\n$$a\'>2a.$$\n\n**Conclusion:** option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Write Newton’s second law before and after changing the force.',
      'Keep friction as the same constant $f$ in both equations.',
      'Substitute from the first equation into the second.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-003',
    type: 'multiple_choice',
    question:
      'In the figure shown, $X$ and $Y$ are blocks of mass 1 kg and 2 kg respectively. $S$ is a spring balance of negligible mass and $P$ is a smooth pulley fixed at the top of two smooth inclined planes. What is the reading of $S$ when $X$ is held stationary by an external force?',
    options: ['4.9 N', '9.8 N', '14.7 N', '19.6 N'],
    answer: '9.8 N',
    explanation:
      '⚠️ **Key point:** Spring balance reads the string tension $T$.\n\nSince $X$ is held stationary by an external force, the system is in equilibrium. Consider block $Y$ (mass 2 kg) on a smooth $30^{\\circ}$ incline:\n$$T = mg\\sin\\theta = (2)(9.81)\\sin30^{\\circ} = 9.81\\ \\text{N}.$$\nSo the spring balance reading is\n$$S=T\\approx 9.8\\ \\text{N}.$$\n\n**Conclusion:** option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'The spring balance reads tension in the string.',
      'Use equilibrium for block $Y$ along the slope.',
      'Resolve weight component: $mg\\sin\\theta$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-003-question.png'],
  },
  {
    id: 'nl-004',
    type: 'multiple_choice',
    question:
      'Two blocks $A$ and $B$ of masses $m_1$ and $m_2$ respectively are connected by a light spring on a horizontal frictionless table. The spring is stretched by moving the blocks apart. What is the ratio of the acceleration of $A$ to that of $B$ at the moment when they are released?',
    options: [
      '$m_1 : m_2$',
      '$m_2 : m_1$',
      '$m_1^2 : m_2^2$',
      '$m_2^2 : m_1^2$',
    ],
    answer: '$m_2 : m_1$',
    explanation:
      '⚠️ **Key point:** At release, spring force on the two blocks has equal magnitude (Newton’s third law).\n\nLet the spring force magnitude be $F$ on each block.\nThen\n$$a_A=\\frac{F}{m_1},\\quad a_B=\\frac{F}{m_2}.$$\nSo\n$$\\frac{a_A}{a_B}=\\frac{F/m_1}{F/m_2}=\\frac{m_2}{m_1}.$$\n\n**Conclusion:** $a_A:a_B = m_2:m_1$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Forces on the two blocks from the spring are equal in magnitude.',
      'Use $a=F/m$ for each block.',
      'Take the ratio to cancel $F$.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-005',
    type: 'multiple_choice',
    question:
      'An object is resting on a rough plane inclined at an angle $\\theta$ to the horizontal. As $\\theta$ gradually increases, the frictional force acting on the object before sliding occurs is directly proportional to',
    options: ['1', '$\\theta$', '$\\sin\\theta$', '$\\cos\\theta$'],
    answer: '$\\sin\\theta$',
    explanation:
      '⚠️ **Key point:** Before sliding, the object is in equilibrium along the slope, so static friction balances the downslope weight component.\n\nAlong the incline:\n$$f=mg\\sin\\theta.$$\nHence\n$$f\\propto\\sin\\theta.$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Resolve weight into components parallel and perpendicular to slope.',
      'Before motion, friction equals the parallel component of weight.',
      'Look for proportionality in $f=mg\\sin\\theta$.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-006',
    type: 'multiple_choice',
    question:
      'An object is projected up a smooth inclined plane with an initial velocity $u$. Which of the following graphs best represents the variation of the displacement $s$ of the object along the plane with time $t$?',
    options: [
      '/physics/exercises/newton-laws/nl-006-option-a.png',
      '/physics/exercises/newton-laws/nl-006-option-b.png',
      '/physics/exercises/newton-laws/nl-006-option-c.png',
      '/physics/exercises/newton-laws/nl-006-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-006-option-b.png',
    explanation:
      '⚠️ **Key point:** On an $s$-$t$ graph, slope is velocity. Motion along a smooth incline has constant acceleration down the plane.\n\nInitially moving up: velocity is positive but decreasing (deceleration), so slope decreases.\nAt highest point: velocity becomes zero, so slope is zero.\nThen moving down: velocity becomes negative with increasing magnitude, so slope becomes negative and steeper.\n\nThus the $s$-$t$ curve is a concave-down parabola, matching option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Slope of displacement-time graph equals velocity.',
      'Acceleration along the plane is constant downward.',
      'Velocity changes from positive to zero to negative.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-006-question.png'],
  },
  {
    id: 'nl-007',
    type: 'multiple_choice',
    question:
      'Five blocks of equal mass $A, B, C, D$ and $E$ are connected by four identical strings, $S_1, S_2, S_3$ and $S_4$ as shown in the figure above. They are made to slide on a smooth horizontal surface by a steadily increasing force $F$ applied to block $A$. Which of the strings is most likely to break first?',
    options: ['$S_1$', '$S_2$', '$S_3$', '$S_4$'],
    answer: '$S_1$',
    explanation:
      '⚠️ **Key point:** Each string must pull all blocks behind it, so tension is largest in the front string.\n\nLet each block have mass $m$ and acceleration be $a$.\n\nFor block $E$ only:\n$$T_4=ma.$$\nFor $D+E$:\n$$T_3=2ma.$$\nFor $C+D+E$:\n$$T_2=3ma.$$\nFor $B+C+D+E$:\n$$T_1=4ma.$$\nSo\n$$T_1>T_2>T_3>T_4.$$\nSince strings are identical, the one with greatest tension breaks first.\n\n**Conclusion:** $S_1$ → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Treat groups of blocks as one system for each string.',
      'Tension equals total mass being pulled times acceleration.',
      'The front string pulls the largest mass.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-007-question.png'],
  },
  {
    id: 'nl-008',
    type: 'multiple_choice',
    question:
      'A body of mass $M$ rests in equilibrium on a plane inclined at an angle $\\theta$ to the horizontal. What is the frictional force acting on the body?',
    options: ['zero', '$Mg$', '$Mg\\sin\\theta$', '$Mg\\cos\\theta$'],
    answer: '$Mg\\sin\\theta$',
    explanation:
      '⚠️ **Key point:** In equilibrium on an incline, friction balances the downslope component of weight.\n\nWeight component parallel to slope is\n$$Mg\\sin\\theta.$$\nSince net force along slope is zero,\n$$f=Mg\\sin\\theta.$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Resolve weight into components along and perpendicular to slope.',
      'At rest means net force along slope is zero.',
      'Friction balances the downslope component $Mg\\sin\\theta$.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-009',
    type: 'multiple_choice',
    question:
      'A trolley of mass 1 kg placed on a smooth horizontal table is connected by two light strings to blocks $A$ and $B$ of masses 0.75 kg and 0.25 kg respectively, as shown in the figure. $X$ and $Y$ are frictionless pulleys. When the system is released, what will be its acceleration?',
    options: [
      '$0\\ \\text{m s}^{-2}$',
      '$1.0\\ \\text{m s}^{-2}$',
      '$2.5\\ \\text{m s}^{-2}$',
      '$5.0\\ \\text{m s}^{-2}$',
    ],
    answer: '$2.5\\ \\text{m s}^{-2}$',
    explanation:
      '⚠️ **Key point:** Treat the trolley + both hanging blocks as one system. Internal tensions cancel.\n\nNet driving force is due to weight difference of hanging masses:\n$$F_{\\text{net}}=(0.75g)-(0.25g)=0.50g.$$\nTotal mass:\n$$m_{\\text{total}}=0.75+1.00+0.25=2.00\\ \\text{kg}.$$\nSo\n$$a=\\frac{F_{\\text{net}}}{m_{\\text{total}}}=\\frac{0.50\\times9.81}{2.00}=2.45\\ \\text{m s}^{-2}\\approx2.5\\ \\text{m s}^{-2}.$$\n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use whole-system method to avoid solving for tensions first.',
      'Net force comes from difference in hanging weights.',
      'Acceleration = net force / total mass.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-009-question.png'],
  },
  {
    id: 'nl-010',
    type: 'multiple_choice',
    question:
      'A constant force directed to the left is acting on a body which is initially travelling to the right. Which of the graphs below best represents the velocity-time graph of the body?',
    options: [
      '/physics/exercises/newton-laws/nl-010-option-a.png',
      '/physics/exercises/newton-laws/nl-010-option-b.png',
      '/physics/exercises/newton-laws/nl-010-option-c.png',
      '/physics/exercises/newton-laws/nl-010-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-010-option-a.png',
    explanation:
      '⚠️ **Key point:** Constant leftward force gives constant leftward acceleration (constant negative slope on a $v$-$t$ graph if right is positive).\n\nInitially velocity is positive (moving right), so it decreases linearly to zero.\nAfter reaching zero, acceleration still points left, so velocity becomes negative and its magnitude increases linearly.\n\nHence the correct $v$-$t$ graph is a straight line with constant negative slope crossing the time axis.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Constant force implies constant acceleration.',
      'Slope of $v$-$t$ graph equals acceleration.',
      'Velocity changes sign after the body reverses direction.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-011',
    type: 'multiple_choice',
    question:
      'A trolley on a smooth horizontal surface is pulled by two forces $P$ and $Q$ in the direction as shown in the figure. The magnitude of $P$ and $Q$ are 2 N and 1 N respectively. If the mass of the trolley is 1 kg, the acceleration of the trolley is',
    options: [
      '$0.15\\ \\text{m s}^{-2}$ towards the left',
      '$2.24\\ \\text{m s}^{-2}$ towards the left',
      '$0.73\\ \\text{m s}^{-2}$ towards the right',
      '$0.15\\ \\text{m s}^{-2}$ towards the right',
    ],
    answer: '$0.73\\ \\text{m s}^{-2}$ towards the right',
    explanation:
      '⚠️ **Key point:** Resolve forces horizontally and apply Newton’s second law.\n\nHorizontal resultant force:\n$$F_x=P\\cos\\theta-Q.$$ \nWith $P=2\\ \\text{N}$, $Q=1\\ \\text{N}$, $\\theta=30^{\\circ}$:\n$$F_x=2\\cos30^{\\circ}-1=2\\left(\\frac{\\sqrt{3}}{2}\\right)-1\\approx1.732-1=0.732\\ \\text{N}.$$\n\nAcceleration:\n$$a=\\frac{F_x}{m}=\\frac{0.732}{1}=0.73\\ \\text{m s}^{-2}.$$\nDirection is to the right (same as positive $F_x$).\n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Only horizontal components affect horizontal acceleration.',
      'Use $F_x=P\\cos\\theta-Q$.',
      'Then apply $a=F/m$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-011-question.png'],
  },
  {
    id: 'nl-012',
    type: 'multiple_choice',
    question:
      'The net force acting on a particle is zero. Which of the statements below concerning the motion of the particle may be true?',
    options: [
      'The particle is swinging to and fro.',
      'The particle is decelerating in a straight line.',
      'The particle is moving in a circle with constant speed.',
      'The particle is moving with constant velocity.',
    ],
    answer: 'The particle is moving with constant velocity.',
    explanation:
      '⚠️ **Key point:** By Newton’s first law, zero net force means zero acceleration.\n\nWith $a=0$, velocity stays constant (including the special case of zero velocity).\nSo moving with constant velocity is possible.\n\nOther options involve changing velocity (magnitude and/or direction), which requires non-zero net force.\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Net force zero implies acceleration zero.',
      'Zero acceleration means velocity does not change.',
      'Circular motion and deceleration require non-zero resultant force.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-013',
    type: 'multiple_choice',
    question:
      'A person in a lift, which is ascending at a velocity of $10\\ \\text{m s}^{-1}$, releases a ball. What is the velocity of the ball with respect to the earth at the moment when the ball is released?',
    options: [
      '$10\\ \\text{m s}^{-1}$ upwards',
      '$10\\ \\text{m s}^{-1}$ downwards',
      '$20\\ \\text{m s}^{-1}$ upwards',
      '$20\\ \\text{m s}^{-1}$ downwards',
    ],
    answer: '$10\\ \\text{m s}^{-1}$ upwards',
    explanation:
      '⚠️ **Key point:** At the instant of release, the ball keeps the lift’s instantaneous velocity (inertia).\n\nBefore release, ball and lift move together at $10\\ \\text{m s}^{-1}$ upwards. So at the exact moment it is released, its velocity relative to Earth is still $10\\ \\text{m s}^{-1}$ upwards.\n\n(After that instant, gravity changes its velocity.)\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'At release instant, velocity does not suddenly jump.',
      'Use inertia: object keeps its current velocity unless net force changes it over time.',
      'Distinguish “at the moment of release” from “later motion”.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-014',
    type: 'multiple_choice',
    question:
      'The graph shows the variation of velocity $v$ with time $t$ when a metal ball is released from rest and allowed to fall vertically under gravity through oil. Which of the following statements concerning the motion of the ball is/are correct?\n\n(1) The velocity of the ball decreases with time.\n(2) The acceleration of the ball decreases with time.\n(3) The ball stops falling after 4 s.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '⚠️ **Key point:** From a $v$-$t$ graph, slope equals acceleration.\n\n(1) False: velocity increases from zero and then approaches a constant value (terminal speed), not decreasing.\n\n(2) True: the slope of the curve decreases with time, so acceleration decreases.\n\n(3) False: after about 4 s the ball moves at terminal velocity, which is non-zero, so it does not stop.\n\n**Conclusion:** (2) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Read acceleration from the slope of the $v$-$t$ graph.',
      'Terminal velocity means constant non-zero velocity.',
      'Check each statement against the graph trend.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-014-question.png'],
  },
  {
    id: 'nl-015',
    type: 'multiple_choice',
    question:
      'If the engine of a rocket travelling in space is turned off, the rocket will',
    options: [
      'stop moving.',
      'continue to move with uniform velocity.',
      'continue to move with decreasing velocity.',
      'continue to move with uniform acceleration.',
    ],
    answer: 'continue to move with uniform velocity.',
    explanation:
      '⚠️ **Key point:** With engine off (and neglecting external forces), net force on the rocket is zero.\n\nBy Newton’s first law, zero net force means zero acceleration. So the rocket continues in its current state of motion: constant velocity in a straight line.\n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Apply Newton’s first law.',
      'No net force implies no acceleration.',
      'No acceleration means velocity remains constant.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-016',
    type: 'multiple_choice',
    question:
      'Two blocks $A$ and $B$ of masses 1 kg and 1.5 kg respectively are resting on a smooth horizontal surface and are linked by a string. They are pulled by a force of 10 N as shown in the diagram. What are the tensions $T_1$ and $T_2$?',
    options: [
      '$T_1=10\\ \\text{N},\\ T_2=10\\ \\text{N}$',
      '$T_1=10\\ \\text{N},\\ T_2=6\\ \\text{N}$',
      '$T_1=10\\ \\text{N},\\ T_2=4\\ \\text{N}$',
      '$T_1=6\\ \\text{N},\\ T_2=4\\ \\text{N}$',
    ],
    answer: '$T_1=10\\ \\text{N},\\ T_2=6\\ \\text{N}$',
    explanation:
      '⚠️ **Key point:** The spring balance measures the pulling tension directly, so $T_1=10\\ \\text{N}$.\n\nFor blocks $A+B$ as one system:\n$$10=(1+1.5)a \\Rightarrow a=4\\ \\text{m s}^{-2}.$$\n\nFor block $B$ alone:\n$$T_2=m_Ba=(1.5)(4)=6\\ \\text{N}.$$\n\nSo the tensions are $T_1=10\\ \\text{N}$ and $T_2=6\\ \\text{N}$.\n\n**Conclusion:** option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Read $T_1$ directly from the applied pull through the spring balance.',
      'Find acceleration using total mass.',
      'Use block $B$ to find $T_2$ via $F=ma$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-016-question.png'],
  },
  {
    id: 'nl-017',
    type: 'multiple_choice',
    question:
      'A block is given an initial velocity up a smooth inclined plane. Which graph below shows the acceleration of the block against time? (The upward direction of motion along the plane is taken as positive.)',
    options: [
      '/physics/exercises/newton-laws/nl-017-option-a.png',
      '/physics/exercises/newton-laws/nl-017-option-b.png',
      '/physics/exercises/newton-laws/nl-017-option-c.png',
      '/physics/exercises/newton-laws/nl-017-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-017-option-d.png',
    explanation:
      '⚠️ **Key point:** On a smooth incline, only the component of weight along the plane acts: $mg\\sin\\theta$ downward.\n\nTaking upward along the plane as positive, acceleration is\n$$a=-g\\sin\\theta,$$\nwhich is constant and negative throughout the motion (both on the way up and on the way down).\n\nSo the $a$-$t$ graph is a horizontal line below zero.\n\n**Conclusion:** option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Find resultant force along the plane first.',
      'Direction of acceleration is fixed down the slope.',
      'With no friction, acceleration magnitude is constant.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-017-question.png'],
  },
  {
    id: 'nl-018',
    type: 'multiple_choice',
    question:
      'The system of pulleys and blocks is at rest. What is the tension in string $S$? (Neglect all friction and the masses of the strings and pulleys.)',
    options: [
      '$9.8\\ \\text{N}$',
      '$19.6\\ \\text{N}$',
      '$29.4\\ \\text{N}$',
      '$39.2\\ \\text{N}$',
    ],
    answer: '$29.4\\ \\text{N}$',
    explanation:
      '⚠️ **Key point:** For the movable pulley connected to the 6 kg mass, two upward tensions support the load.\n\nFor equilibrium of the 6 kg load-pulley system:\n$$2T=mg=(6)(9.81).$$\nSo\n$$T=\\frac{6\\times9.81}{2}=29.4\\ \\text{N}.$$\n\nSince the system is at rest and strings are light/frictionless, the tension in string $S$ equals this string tension.\n\n**Conclusion:** $S=29.4\\ \\text{N}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use equilibrium: total upward force equals total downward force.',
      'A movable pulley with two supporting segments gives $2T$ upward.',
      'Neglecting pulley/string mass keeps tension uniform in each string.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-018-question.png'],
  },
  {
    id: 'nl-019',
    type: 'multiple_choice',
    question:
      'Which of the following motions of a given mass requires the greatest force $P$? (Assume that the surface is smooth.)',
    options: [
      '/physics/exercises/newton-laws/nl-019-option-a.png',
      '/physics/exercises/newton-laws/nl-019-option-b.png',
      '/physics/exercises/newton-laws/nl-019-option-c.png',
      '/physics/exercises/newton-laws/nl-019-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-019-option-d.png',
    explanation:
      '⚠️ **Key point:** Along a smooth incline,\n$$P-mg\\sin\\theta=ma \\Rightarrow P=mg\\sin\\theta+ma.$$ \nFor fixed mass $m$, required force increases when either $\\theta$ is larger (larger $mg\\sin\\theta$) or required acceleration $a$ is larger.\n\nSo the case with both the largest incline angle and largest acceleration needs the greatest $P$.\n\n**Conclusion:** option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Write Newton’s second law along the incline.',
      'Identify contributions from weight component and target acceleration.',
      'Compare options by both $\\theta$ and $a$.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-020',
    type: 'multiple_choice',
    question:
      'Which of the following statements is/are true? A man in a lift feels heavier when the lift is moving\n\n(1) upwards with acceleration.\n(2) upwards with retardation.\n(3) downwards with retardation.',
    options: ['(1) only', '(2) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(1) & (3) only',
    explanation:
      '⚠️ **Key point:** Feeling heavier means apparent weight (normal reaction) is greater than true weight: $R>mg$, which occurs when acceleration is upward.\n\n(1) Upward with acceleration → acceleration upward → feels heavier.\n\n(2) Upward with retardation → acceleration downward → feels lighter.\n\n(3) Downward with retardation → acceleration upward → feels heavier.\n\n**Conclusion:** (1) and (3) only → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Apparent weight is the normal reaction $R$.',
      'Heavier feeling corresponds to $R>mg$.',
      'Check acceleration direction, not just motion direction.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-021',
    type: 'multiple_choice',
    question:
      'An object is subject to a resultant force $(F)$ which varies with time $(t)$ as shown in the diagram above. Which of the following graphs correctly shows the variation of its speed $(v)$ with time $(t)$?',
    options: [
      '/physics/exercises/newton-laws/nl-021-option-a.png',
      '/physics/exercises/newton-laws/nl-021-option-b.png',
      '/physics/exercises/newton-laws/nl-021-option-c.png',
      '/physics/exercises/newton-laws/nl-021-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-021-option-b.png',
    explanation:
      '⚠️ **Key point:** $F=ma$, so acceleration follows the same time dependence as force.\n\nBefore $t=t_0$, force is positive, so acceleration is positive and the slope of the $v$-$t$ graph is positive (speed increases).\nAfter $t=t_0$, force becomes zero, so acceleration is zero and $v$ becomes constant (horizontal line).\n\nThe velocity/speed cannot drop instantaneously to zero unless an impulse occurs, which is not shown.\n\n**Conclusion:** option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $F=ma$ to get acceleration behavior.',
      'Slope of $v$-$t$ graph equals acceleration.',
      'Zero force means constant velocity/speed.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-021-question.png'],
  },
  {
    id: 'nl-022',
    type: 'multiple_choice',
    question:
      'Three blocks of equal mass are placed on a smooth horizontal surface as shown above. A constant force $F$ is applied to block $A$ so that the three blocks move towards the right with the same acceleration. The resultant force acting on block $B$ is',
    options: ['0', '$\\frac{1}{3}F$', '$\\frac{1}{2}F$', '$\\frac{2}{3}F$'],
    answer: '$\\frac{1}{3}F$',
    explanation:
      '⚠️ **Key point:** Treat all three equal-mass blocks as one system first.\n\nIf each block has mass $m$, total mass is $3m$, so acceleration is\n$$a=\\frac{F}{3m}.$$\nFor block $B$ (mass $m$), resultant force is\n$$F_B=ma=m\\cdot\\frac{F}{3m}=\\frac{F}{3}.$$\n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Find system acceleration using total mass.',
      'Then use $F=ma$ for block $B$ alone.',
      'Equal masses imply equal resultant forces for same acceleration.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-022-question.png'],
  },
  {
    id: 'nl-023',
    type: 'multiple_choice',
    question:
      '$Y$ has a linear relationship with time as shown. $Y$ may represent\n\n(1) the speed of a body starting from rest under a constant force.\n(2) the distance travelled by a body at constant speed.\n(3) the acceleration of a body falling from rest.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** A straight line increasing with time means quantity is proportional to time.\n\n(1) True: constant force on fixed mass gives constant acceleration, so speed from rest increases linearly with time.\n\n(2) True: at constant speed, distance is proportional to time ($s=vt$), giving a straight line through origin.\n\n(3) False for this graph shape: free-fall acceleration is approximately constant, so $a$ vs $t$ is a horizontal line, not an increasing straight line.\n\n**Conclusion:** (1) and (2) only → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Identify whether the shown straight line is increasing or horizontal.',
      'Use $v=at$ for constant acceleration from rest.',
      'Use $s=vt$ for constant speed motion.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-024',
    type: 'multiple_choice',
    question:
      'A force $F$ is applied to a block of mass 1 kg as shown below. The greatest value of $F$ for the block to remain at rest is 11 N. What would be the motion of the block if $F$ is not applied?\n(Take the acceleration due to gravity to be $10\\ \\text{m s}^{-2}$.)',
    options: [
      'remaining at rest',
      'sliding down with constant velocity',
      'sliding down with an acceleration of $1\\ \\text{m s}^{-2}$',
      'sliding down with an acceleration of $5\\ \\text{m s}^{-2}$',
    ],
    answer: 'remaining at rest',
    explanation:
      '⚠️ **Key point:** Use the limiting equilibrium case to find maximum static friction first.\n\nAt limiting rest with applied force $F=11\\ \\text{N}$:\n$$F=f_{\\max}+mg\\sin\\theta.$$\nGiven $m=1\\ \\text{kg}$, $g=10\\ \\text{m s}^{-2}$, $\\theta=30^{\\circ}$:\n$$11=f_{\\max}+(1)(10)\\sin30^{\\circ}=f_{\\max}+5$$\n$$f_{\\max}=6\\ \\text{N}.$$\n\nIf $F$ is removed, downslope force is only\n$$mg\\sin30^{\\circ}=5\\ \\text{N}.$$\nSince $5\\ \\text{N}<f_{\\max}(6\\ \\text{N})$, static friction can balance it, so the block remains at rest.\n\n**Conclusion:** option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use the given limiting case ($F=11$ N) to find $f_{\\max}$.',
      'Then compare $mg\\sin\\theta$ with $f_{\\max}$ when $F=0$.',
      'If required friction is below maximum static friction, block stays at rest.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-024-question.png'],
  },
  {
    id: 'nl-025',
    type: 'multiple_choice',
    question:
      'A man of weight $W$ stands inside a lift which is moving upwards with a constant speed. If the force exerted by the floor on the man is $R$, which of the below statements is/are correct?\n\n(1) $R$ is greater than $W$ in magnitude.\n(2) $R$ and $W$ are in opposite directions.\n(3) $R$ and $W$ form an action and reaction pair according to Newton\'s third law.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '⚠️ **Key point:** Constant speed means zero acceleration, so net force on the man is zero.\n\nTherefore $R=W$ in magnitude, so (1) is false.\n$R$ acts upward while $W$ acts downward, so (2) is true.\n\n(3) is false because action-reaction forces act on different bodies; here $R$ and $W$ both act on the man.\n\n**Conclusion:** (2) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Constant speed implies resultant force is zero.',
      'Check direction and magnitude of $R$ vs $W$.',
      'Action-reaction pair must act on different objects.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-026',
    type: 'multiple_choice',
    question:
      'Two blocks of equal mass are placed on a smooth horizontal surface as shown above. A constant force of 12 N is applied to block $A$ so that the two blocks move towards the right together. The force acting on $A$ by $B$ is',
    options: ['6 N to the left.', '6 N to the right.', '12 N to the left.', '12 N to the right.'],
    answer: '6 N to the left.',
    explanation:
      '⚠️ **Key point:** First find common acceleration, then find contact force between the blocks.\n\nLet each block have mass $M$.\nWhole system:\n$$12=(2M)a \\Rightarrow a=\\frac{6}{M}.$$ \nFor block $B$:\n$$R=Ma=M\\left(\\frac{6}{M}\\right)=6\\ \\text{N}.$$ \nThis is force on $B$ by $A$ to the right. Therefore force on $A$ by $B$ is equal and opposite: 6 N to the left.\n\n**Conclusion:** option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use whole-system approach to get acceleration first.',
      'Then isolate one block to get contact force magnitude.',
      'Apply Newton’s third law for direction on $A$ by $B$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-026-question.png'],
  },
  {
    id: 'nl-027',
    type: 'multiple_choice',
    question:
      'The diagram above shows the variation of the net force acting on an object which is initially at rest. Which of the following velocity-time graphs correctly describes the motion of the object?',
    options: [
      '/physics/exercises/newton-laws/nl-027-option-a.png',
      '/physics/exercises/newton-laws/nl-027-option-b.png',
      '/physics/exercises/newton-laws/nl-027-option-c.png',
      '/physics/exercises/newton-laws/nl-027-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-027-option-b.png',
    explanation:
      '⚠️ **Key point:** $F=ma$, so acceleration follows the same time pattern as net force. Slope of the $v$-$t$ graph equals acceleration.\n\nBefore $t=t_1$, net force is zero, so acceleration is zero and velocity stays constant. Since object starts from rest, velocity remains zero (horizontal on time axis).\n\nAfter $t=t_1$, net force is positive, so acceleration is positive and velocity increases with positive slope.\n\n**Conclusion:** option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert force-time behavior into acceleration-time behavior using $F=ma$.',
      'Use slope of $v$-$t$ graph = acceleration.',
      'Initial rest condition fixes the first segment at $v=0$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-027-question.png'],
  },
  {
    id: 'nl-028',
    type: 'multiple_choice',
    question:
      'Two identical blocks $X$ and $Y$ are connected by a light string passing over a smooth pulley as shown above. The two blocks are released from rest. After a while, the string breaks. Which of the following correctly describes the motion of the blocks immediately after the string breaks? (Take the acceleration due to gravity to be $10\\ \\text{m s}^{-2}$.)',
    options: [
      '$X$: stops moving; $Y$: accelerates at $5\\ \\text{m s}^{-2}$',
      '$X$: moves with constant velocity; $Y$: accelerates at $5\\ \\text{m s}^{-2}$',
      '$X$: moves with constant velocity; $Y$: accelerates at $10\\ \\text{m s}^{-2}$',
      '$X$: decelerates at $5\\ \\text{m s}^{-2}$; $Y$: accelerates at $10\\ \\text{m s}^{-2}$',
    ],
    answer: '$X$: moves with constant velocity; $Y$: accelerates at $10\\ \\text{m s}^{-2}$',
    explanation:
      '⚠️ **Key point:** Immediately after the string breaks, constraints are removed and each block follows its own net force.\n\nFor $X$: with no net horizontal force, it continues with its current velocity (Newton’s first law), so it moves with constant velocity.\n\nFor $Y$: once detached, only gravity acts (neglect air resistance), so it is in free fall with acceleration $g=10\\ \\text{m s}^{-2}$ downward.\n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'After break, treat $X$ and $Y$ as separate bodies.',
      'No net force on $X$ implies constant velocity.',
      '$Y$ in free fall has acceleration $g$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-028-question.png'],
  },
  {
    id: 'nl-029',
    type: 'multiple_choice',
    question:
      'In the diagram above, blocks $A$ and $B$ are connected by a light inextensible string and rest on a smooth horizontal table. The masses of $A$ and $B$ are 2 kg and 3 kg respectively. Block $A$ is pulled by a force of 2 N. Find the tension in the string $S$.',
    options: ['$0.4\\ \\text{N}$', '$0.8\\ \\text{N}$', '$1.0\\ \\text{N}$', '$1.2\\ \\text{N}$'],
    answer: '$1.2\\ \\text{N}$',
    explanation:
      '⚠️ **Key point:** First find system acceleration, then use one block to find tension.\n\nFor $A+B$ as one system:\n$$2=(2+3)a \\Rightarrow a=0.4\\ \\text{m s}^{-2}.$$\n\nUsing block $B$:\n$$T=m_Ba=(3)(0.4)=1.2\\ \\text{N}.$$\n(Equivalent result from block $A$: $2-T=2(0.4)$.)\n\n**Conclusion:** option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use whole-system method for acceleration.',
      'Then isolate one block to get tension.',
      'Check with the other block equation for consistency.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-029-question.png'],
  },
  {
    id: 'nl-030',
    type: 'multiple_choice',
    question:
      "Which of the following pairs of forces $F_1$ and $F_2$ is/are action and reaction pair(s) according to Newton's third law of motion?",
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** Action-reaction forces are equal and opposite forces acting on **different bodies**.\n\n(1) Not a third-law pair because both forces are on the same block.\n\n(2) Not a third-law pair because both forces are on the same ball.\n\n(3) Is a third-law pair because one force acts on one charge and the other acts on the opposite charge (different objects).\n\n**Conclusion:** (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Third-law pair must act on different objects.',
      'Equal and opposite forces on the same object are not third-law pairs.',
      'Look for interaction between two distinct bodies.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-030-question.png'],
  },
  {
    id: 'nl-031',
    type: 'multiple_choice',
    question:
      'A man of mass 50 kg is standing in a lift. If the lift is falling freely, which of the following statements is/are true?\n\n(1) The weight of the man is 0 N.\n(2) The force acting on the floor of the lift by the man is 491 N.\n(3) The force acting on the man by the floor of the lift is 0 N.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** In free fall, apparent weight is zero, but true weight $mg$ is not zero.\n\n(1) False: true weight is\n$$W=mg=50\\times9.81\\approx491\\ \\text{N}.$$ \n(2) False: in free fall the man does not press on floor (normal contact force is zero), so force on floor by man is 0.\n(3) True: force on man by floor (normal reaction) is 0.\n\n**Conclusion:** (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Distinguish true weight ($mg$) from apparent weight (normal reaction).',
      'In free fall, normal reaction is zero.',
      'Action-reaction contact pair vanishes when contact force is zero.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-032',
    type: 'multiple_choice',
    question:
      'A trolley is given a push and runs down a friction-compensated runway. The motion of the trolley is recorded on the paper tape as shown in the 1st figure. Which of the following changes can enable the trolley to produce a paper tape as shown in the 2nd figure?\n\n(1) Giving the trolley a harder initial push.\n(2) Increasing the angle of inclination of the runway.\n(3) Increasing the frequency of the ticker-tape timer.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '⚠️ **Key point:** Friction-compensated runway means trolley should move at (approximately) constant speed, so equal dot spacing is expected for equal time intervals.\n\n(1) True: a harder initial push gives a larger initial speed, so spacing between dots can become larger while still remaining uniform.\n\n(2) False: increasing slope makes downslope component exceed friction, causing acceleration; dot spacing would increase progressively, not remain equal.\n\n(3) False: higher ticker frequency gives shorter time between dots, so spacing between adjacent dots becomes smaller.\n\n**Conclusion:** (1) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Equal spacing on ticker tape indicates constant speed.',
      'Changing slope changes acceleration condition.',
      'Higher ticker frequency means shorter time interval per dot.',
    ],
    sectionId: 'newton-laws',
    imagePaths: [
      '/physics/exercises/newton-laws/nl-032-question-1.png',
      '/physics/exercises/newton-laws/nl-032-question-2.png',
    ],
  },
  {
    id: 'nl-033',
    type: 'multiple_choice',
    question:
      'Two blocks $X$ and $Y$ of weights 2 N and 8 N respectively are suspended by two light strings as shown in the diagram. A downward force of 4 N is applied to $X$. Find the tension $T_1$ and $T_2$ in the two strings.',
    options: [
      '$T_1=4\\ \\text{N},\\ T_2=10\\ \\text{N}$',
      '$T_1=4\\ \\text{N},\\ T_2=14\\ \\text{N}$',
      '$T_1=6\\ \\text{N},\\ T_2=12\\ \\text{N}$',
      '$T_1=6\\ \\text{N},\\ T_2=14\\ \\text{N}$',
    ],
    answer: '$T_1=6\\ \\text{N},\\ T_2=14\\ \\text{N}$',
    explanation:
      '⚠️ **Key point:** System is in equilibrium, so tensions balance downward loads below each string.\n\nFor block $X$:\n$$T_1 = F + W_X = 4 + 2 = 6\\ \\text{N}.$$\n\nFor upper string supporting both $Y$ and the pull from below:\n$$T_2 = T_1 + W_Y = 6 + 8 = 14\\ \\text{N}.$$\n\n**Conclusion:** $T_1=6\\ \\text{N},\\ T_2=14\\ \\text{N}$ → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use equilibrium for each block/string segment.',
      'Lower string balances force on block $X$.',
      'Upper string supports everything below it.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-033-question.png'],
  },
  {
    id: 'nl-034',
    type: 'multiple_choice',
    question:
      'A car moves with a speed $30\\ \\text{km h}^{-1}$. The driver applies the brake and the car is stopped in a distance of 12 m. If the car is moving at $60\\ \\text{km h}^{-1}$, what is the stopping distance? Assume that the same constant braking force is applied in both cases.',
    options: ['12 m', '24 m', '48 m', '72 m'],
    answer: '48 m',
    explanation:
      '⚠️ **Key point:** Same constant braking force on same car gives same constant deceleration magnitude.\n\nUsing\n$$v^2=u^2+2as,$$\nwith final speed $v=0$:\n$$0=u^2-2as \\Rightarrow s=\\frac{u^2}{2a}\\propto u^2.$$\nSo doubling speed from 30 to 60 km/h makes stopping distance 4 times larger:\n$$s_2=4\\times12=48\\ \\text{m}.$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'For same braking force, deceleration is the same.',
      'Stopping distance under constant deceleration is proportional to $u^2$.',
      'Doubling speed multiplies stopping distance by 4.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-035',
    type: 'multiple_choice',
    question:
      'A trolley is placed on a horizontal ground. A force $F$ inclined at an angle $\\theta$ to the horizontal acts on the trolley. What is the horizontal component of $F$ that pulls the trolley towards the right?',
    options: ['$F\\theta$', '$F\\sin\\theta$', '$F\\cos\\theta$', '$F/\\sin\\theta$'],
    answer: '$F\\cos\\theta$',
    explanation:
      '⚠️ **Key point:** If angle $\\theta$ is measured from the horizontal, horizontal component is the adjacent component.\n\nSo the horizontal component is\n$$F_x=F\\cos\\theta.$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use right-triangle component resolution.',
      'Adjacent to angle $\\theta$ uses cosine.',
      'Horizontal component is the one along the direction of motion.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-036',
    type: 'multiple_choice',
    question:
      'Two blocks are connected together by a light string $S$ placed on a smooth horizontal surface. They move with uniform acceleration of $2\\ \\text{m s}^{-2}$ under the action of force $F$. What will the accelerations of the blocks become if $S$ suddenly breaks?',
    options: [
      '2 kg block: $6\\ \\text{m s}^{-2}$, 4 kg block: $0\\ \\text{m s}^{-2}$',
      '2 kg block: $6\\ \\text{m s}^{-2}$, 4 kg block: $2\\ \\text{m s}^{-2}$',
      '2 kg block: $2\\ \\text{m s}^{-2}$, 4 kg block: $0\\ \\text{m s}^{-2}$',
      '2 kg block: $0\\ \\text{m s}^{-2}$, 4 kg block: $3\\ \\text{m s}^{-2}$',
    ],
    answer: '2 kg block: $6\\ \\text{m s}^{-2}$, 4 kg block: $0\\ \\text{m s}^{-2}$',
    explanation:
      '⚠️ **Key point:** First find the pulling force from the initial joint motion.\n\nBefore breaking:\n$$(4+2)(2)=12\\ \\text{N}=F.$$\n\nAfter string breaks:\n- 4 kg block has no horizontal force on smooth surface, so $a=0$.\n- 2 kg block is acted on by $F=12\\ \\text{N}$ alone:\n$$a=\\frac{F}{m}=\\frac{12}{2}=6\\ \\text{m s}^{-2}.$$\n\n**Conclusion:** option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use initial combined motion to determine $F$.',
      'After break, analyze each block separately.',
      'No horizontal force means zero horizontal acceleration.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-037',
    type: 'multiple_choice',
    question:
      "The above diagram shows a block resting on the ground. Which of the following pairs of forces is/are action and reaction pair(s) according to Newton's third law of motion?\n\n(1) $R$ and $W$\n(2) $W$ and $F$\n(3) $F$ and $R$",
    options: ['(1) only', '(2) only', '(3) only', '(1) & (2) only'],
    answer: '(2) only',
    explanation:
      '⚠️ **Key point:** Newton’s third-law force pairs act on different bodies and are equal in magnitude and opposite in direction.\n\n(1) $R$ and $W$ both act on the same block, so not a third-law pair.\n\n(2) $W$ (Earth on block) and $F$ (block on Earth) are equal and opposite on different bodies, so this is a third-law pair.\n\n(3) $F$ and $R$ are not a valid action-reaction pair.\n\n**Conclusion:** (2) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Third-law pairs always act on different objects.',
      'Forces on the same object are not an action-reaction pair.',
      'Identify the interacting bodies for each force.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-037-question.png'],
  },
  {
    id: 'nl-038',
    type: 'multiple_choice',
    question:
      'Two objects of different masses are released from rest at the same height. Assume air resistance is negligible. Which of the following statements is/are correct?\n\n(1) A greater gravitational force is acting on the object with greater mass.\n(2) They take the same time to reach the ground.\n(3) They have equal velocities when they reach the ground.',
    options: ['(1) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** In free fall (no air resistance), acceleration is $g$ for all masses.\n\n(1) True: weight $W=mg$, so larger mass has larger gravitational force.\n\n(2) True: same initial condition and same acceleration $g$ means same fall time.\n\n(3) True: from the same height with same $g$, final speed is the same ($v=\\sqrt{2gh}$).\n\n**Conclusion:** (1), (2) and (3) are all correct → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Distinguish gravitational force ($mg$) from acceleration ($g$).',
      'Free-fall time from rest depends on $h$ and $g$, not mass.',
      'Final speed from height $h$ depends on $g$ and $h$ only.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-039',
    type: 'multiple_choice',
    question:
      'A block remains at rest on an inclined plane as shown above. Which of the following statements is/are true?\n\n(1) The frictional force acting by the plane on the block is zero.\n(2) The normal reaction acting by the plane on the block is zero.\n(3) The resultant force acting on the block is zero.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** If the block is at rest, it is in equilibrium, so resultant force is zero.\n\n(1) False: on an incline, static friction is generally needed to balance the downslope component of weight.\n\n(2) False: since the block is in contact with the plane, normal reaction is non-zero.\n\n(3) True: equilibrium requires net force to be zero.\n\n**Conclusion:** (3) only → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'At rest implies equilibrium.',
      'Check contact forces on an inclined plane: normal + friction.',
      'Resultant force must be zero for no acceleration.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-040',
    type: 'multiple_choice',
    question:
      'A coin and a feather are released from rest in a cylinder which is vacuum as shown. Which of the following is/are correct deductions from this experiment?\n\n(1) The masses of the coin and the feather are identical in vacuum.\n(2) The coin and the feather fall with the same acceleration in vacuum.\n(3) The forces acting on the coin and the feather in vacuum are identical.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '⚠️ **Key point:** In vacuum there is no air resistance, so all objects fall with the same gravitational acceleration $g$.\n\n(1) False: vacuum does not change masses; coin and feather still have different masses.\n\n(2) True: both fall with the same acceleration $g$.\n\n(3) False: gravitational force is $W=mg$, so different masses mean different forces.\n\n**Conclusion:** (2) only → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Vacuum removes air resistance, not mass.',
      'Free-fall acceleration in vacuum is $g$ for all objects.',
      'Weight still depends on mass via $W=mg$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-040-question.png'],
  },
  {
    id: 'nl-041',
    type: 'multiple_choice',
    question:
      'The above diagram shows a man lifting a ball vertically upwards with uniform acceleration. Which of the following correctly describes the relation between the magnitudes of the forces?',
    options: [
      '$F_1 = F_2 > F_3$',
      '$F_1 = F_3 > F_2$',
      '$F_1 > F_2 = F_3$',
      '$F_1 > F_2 > F_3$',
    ],
    answer: '$F_1 = F_2 > F_3$',
    explanation:
      '⚠️ **Key point:** Upward acceleration of the ball means upward force on ball is greater than its weight.\n\nFor the ball: upward force $F_1$ (from hand) and downward weight $F_3$ act on it. Since acceleration is upward,\n$$F_1>F_3.$$ \n\n$F_1$ and $F_2$ are Newton’s third-law pair between hand and ball, so\n$$F_1=F_2.$$\nTherefore,\n$$F_1=F_2>F_3.$$\n\n**Conclusion:** option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use direction of acceleration to compare net forces on the ball.',
      'Third-law pair has equal magnitude on different objects.',
      'Weight acts downward on the ball.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-041-question.png'],
  },
  {
    id: 'nl-042',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning the motion of an object is/are correct?\n\n(1) A constant unbalanced force is needed to keep an object moving with uniform velocity.\n(2) An increasing unbalanced force is needed to keep an object moving with uniform acceleration.\n(3) An object may remain at rest if there is no unbalanced force acting on it.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** Newton’s laws link net force with acceleration.\n\n(1) False: uniform velocity means zero acceleration, so net force must be zero (no unbalanced force needed).\n\n(2) False: uniform acceleration means constant acceleration, so net force should be constant, not increasing.\n\n(3) True: with no unbalanced force, acceleration is zero, so an object may remain at rest (or move with constant velocity).\n\n**Conclusion:** (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $F_{\\text{net}}=ma$.',
      'Uniform velocity corresponds to $a=0$.',
      'Uniform acceleration corresponds to constant (not increasing) net force.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-043',
    type: 'multiple_choice',
    question:
      'Which of the following statements about mass and weight is incorrect?',
    options: [
      'Mass is measured in kilograms and weight in newtons.',
      'Mass is a measure of the inertia of an object and weight is a measure of the gravitational pull on it.',
      'The weight of an object at a particular place is proportional to its mass.',
      'Both the mass and weight of an object vary slightly at different places on the earth.',
    ],
    answer: 'Both the mass and weight of an object vary slightly at different places on the earth.',
    explanation:
      '⚠️ **Key point:** Mass is an intrinsic property of an object and does not change with location, while weight depends on local gravitational field strength.\n\nA is correct: mass in kg, weight in N.\nB is correct: mass relates to inertia; weight is gravitational force.\nC is correct: at a given place, $W=mg$ so $W\\propto m$.\nD is incorrect because only weight changes with place; mass stays constant.\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Mass is location-independent.',
      'Weight depends on local $g$.',
      'At fixed location, $W=mg$ links weight to mass.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-044',
    type: 'multiple_choice',
    question:
      "Which of the following pairs of forces is/are action and reaction pair(s) according to Newton's third law of motion?\n\n(1) The weight of a man standing on a chair, and the force acting on the man by the chair.\n(2) The gravitational force acting on the earth by the moon, and the gravitational force acting on the moon by the earth.\n(3) The force exerted by a swimmer on the water to push the water backward, and the force exerted by the water to push the swimmer forward.",
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** Newton’s third-law pair must be equal and opposite forces acting on different bodies.\n\n(1) Not a third-law pair: both forces act on the man.\n(2) Yes: Earth-on-moon and moon-on-Earth gravitational forces are a third-law pair.\n(3) Yes: swimmer pushes water backward; water pushes swimmer forward.\n\n**Conclusion:** (2) and (3) only → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Third-law pairs act on different objects.',
      'Equal and opposite forces on the same object are not third-law pairs.',
      'Interaction pairs (earth-moon, swimmer-water) are typical examples.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-045',
    type: 'multiple_choice',
    question:
      'A block is placed on a smooth inclined plane. A force $P$ parallel to the inclined plane is applied to the block so that the block moves up the plane. Which of the following diagrams correctly shows all the forces acting on the block?',
    options: [
      '/physics/exercises/newton-laws/nl-045-option-a.png',
      '/physics/exercises/newton-laws/nl-045-option-b.png',
      '/physics/exercises/newton-laws/nl-045-option-c.png',
      '/physics/exercises/newton-laws/nl-045-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-045-option-c.png',
    explanation:
      '⚠️ **Key point:** On a smooth incline, forces on the block are: applied force $P$ along the slope, weight $W=mg$ vertically downward, and normal reaction perpendicular to the plane.\n\nBecause the plane is smooth, friction is absent.\n\nSo the correct free-body diagram is the one showing exactly these three forces with correct directions.\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Weight always acts vertically downward.',
      'Normal reaction is perpendicular to the plane.',
      'Smooth surface means no friction force.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-045-question.png'],
  },
  {
    id: 'nl-046',
    type: 'multiple_choice',
    question:
      'A broken-down car of mass 1000 kg is pulled by a tow-truck and moves at a constant velocity $8\\ \\text{m s}^{-1}$ along a horizontal road. It is known that the frictional force acting on the car is 500 N. Find the tension in the cable connecting the truck and the car.',
    options: ['0 N', '500 N', '8000 N', '8500 N'],
    answer: '500 N',
    explanation:
      '⚠️ **Key point:** Constant velocity means zero acceleration, so resultant horizontal force is zero.\n\nHence pull tension balances friction:\n$$T-f=0 \\Rightarrow T=f=500\\ \\text{N}.$$\n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Constant velocity implies $a=0$.',
      'Use horizontal force balance on the car.',
      'Mass value is not needed once acceleration is zero.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-047',
    type: 'multiple_choice',
    question:
      'A girl in a lift uses a spring balance to measure the weight of an object. The reading of the spring balance is $10\\ \\text{N}$ when the lift is at rest. When the lift is moving, the reading of the spring balance becomes $8\\ \\text{N}$. Which of the following describes the motion of the lift?',
    options: [
      'moving downwards with a uniform velocity',
      'moving upwards with an acceleration',
      'moving downwards with an acceleration',
      'moving downwards with a deceleration',
    ],
    answer: 'moving downwards with an acceleration',
    explanation:
      '⚠️ **Key point:** Spring balance reading is the apparent weight (normal reaction) $R$.\n\nAt rest: $R=mg=10\\ \\text{N}$.\nWhen moving: $R=8\\ \\text{N}$, so $R<mg$.\n\nNet force on the object is downward:\n$$mg-R=ma$$\nSo the acceleration is downward.\n\nThis corresponds to the lift having **downward acceleration** (or equivalently, the lift could be moving upward with deceleration, but that option is not given).\n\n**Conclusion:** moving downwards with an acceleration → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'At rest, the balance reads $mg$.',
      'Compare the moving reading with $mg$.',
      'If $R<mg$, the acceleration is downward.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-048',
    type: 'multiple_choice',
    question:
      'Two forces $F_1$ and $F_2$ act on a particle $P$ as shown. If a third force $F_3$ acts on $P$ to keep it in equilibrium, what should be the magnitude of $F_3$?',
    options: ['1.4 N', '4.0 N', '4.2 N', '4.5 N'],
    answer: '4.5 N',
    explanation:
      '⚠️ **Key point:** For equilibrium, the third force must balance the resultant of the other two forces, so $|F_3|=|F|$.\n\nGiven perpendicular components with magnitudes $2\\ \\text{N}$ and $4\\ \\text{N}$:\n$$F=\\sqrt{2^2+4^2}=\\sqrt{20}\\approx4.47\\ \\text{N}$$\nSo the required magnitude is about $4.5\\ \\text{N}$.\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'In equilibrium, resultant force is zero.',
      'So $F_3$ must be equal in magnitude to the resultant of $F_1$ and $F_2$.',
      'Use Pythagoras: $F=\\sqrt{2^2+4^2}$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-048-question.png'],
  },
  {
    id: 'nl-049',
    type: 'multiple_choice',
    question:
      "Which of the following phenomena can be explained by Newton's first law of motion?\n\n(1) A passenger in a car tends to move forward when the car suddenly stops.\n(2) A coin and a feather fall with the same acceleration in a vacuum.\n(3) The maximum mass an astronaut can lift on the moon is greater than on earth.",
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      "**Key point:** Newton's first law (law of inertia) explains motion when no resultant force acts.\n\n(1) True for first law: when the car suddenly stops, the passenger tends to keep moving forward due to inertia.\n\n(2) Not first law: equal acceleration in vacuum is explained by Newton's second law, $F=ma$, giving $mg=ma \\Rightarrow a=g$.\n\n(3) Not first law: lifting more mass on the moon is due to smaller gravity (weight), not inertia.\n\n**Conclusion:** only (1) is explained by Newton's first law, so option A.",
    difficulty: 1,
    points: 10,
    hints: [
      "Identify which statement is about inertia (tendency to maintain motion state).",
      "(2) involves acceleration in gravity, so think of $F=ma$.",
      '(3) compares lifting on moon vs earth, which is about weight change.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-050',
    type: 'multiple_choice',
    question:
      'A light rope is fixed at two poles with the ends $A$ and $B$ at the same level. A T-shirt of weight 2 N is hung at the midpoint $C$ of the rope. The rope depresses such that $\\angle ACB=150^{\\circ}$. Find the tension in the rope.',
    options: ['1.0 N', '2.0 N', '3.9 N', '7.7 N'],
    answer: '3.9 N',
    explanation:
      '**Key point:** At equilibrium, vertical components of the two equal tensions balance the weight.\n\nLet the tension in each side of the rope be $T$. By symmetry, each side makes an angle of $75^{\\circ}$ at $C$, so each gives an upward component $T\\cos75^{\\circ}$.\n\nHence\n$$2T\\cos75^{\\circ}=2.$$ \nSo\n$$T=\\frac{1}{\\cos75^{\\circ}}\\approx3.9\\ \\text{N}.$$\n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use symmetry: tensions in $AC$ and $CB$ are equal.',
      'The included angle is $150^\\circ$, so each side is at $75^\\circ$ from the vertical bisector.',
      'Apply vertical force balance: $2T\\cos75^\\circ=2$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-050-question.png'],
  },
  {
    id: 'nl-051',
    type: 'multiple_choice',
    question:
      'A block is sliding down a friction-compensated runway as shown. Which of the following statements is/are correct?\n\n(1) The speed of the block is increasing.\n(2) The normal reaction acting by the runway on the block is increasing.\n(3) The net force acting on the block is zero.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(3) only',
    explanation:
      '**Key point:** On a friction-compensated runway, the downslope component of weight is balanced by friction, so acceleration is zero.\n\n(1) False: with zero acceleration, the block moves at constant velocity, so speed does not increase.\n\n(2) False: normal reaction is $R=mg\\cos\\theta$, which is constant on a fixed incline.\n\n(3) True: since $f=mg\\sin\\theta$, the resultant force along the slope is zero, and perpendicular forces also balance.\n\n**Conclusion:** only (3) is correct, so option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Friction-compensated means no resultant force along the slope.',
      'If resultant force is zero, acceleration is zero.',
      'On a fixed incline, $R=mg\\cos\\theta$ is constant.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-051-question.png'],
  },
  {
    id: 'nl-052',
    type: 'multiple_choice',
    question:
      'A 2 kg steel sphere and a 1 kg wooden sphere are initially held at the same level above the ground and then released from rest simultaneously. Assume air resistance is negligible. Which of the following statements about the two spheres at any instant before they reach the ground is/are correct?\n\n(1) The speeds of the two spheres are equal.\n(2) The accelerations of the two spheres are equal.\n(3) The gravitational forces acting on the two spheres are equal.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      '**Key point:** In free fall without air resistance, all objects have the same acceleration $g$, independent of mass.\n\n(1) True: starting from rest at the same height and moving with the same acceleration, their speeds are equal at any instant.\n\n(2) True: both accelerations are $g$ downward.\n\n(3) False: gravitational force is weight $W=mg$, so with different masses, the weights are different.\n\n**Conclusion:** (1) and (2) only, so option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'In vacuum, free-fall acceleration does not depend on mass.',
      'Same initial condition + same acceleration implies same speed at each instant.',
      'Weight is $W=mg$, so different $m$ gives different $W$.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-053',
    type: 'multiple_choice',
    question:
      'It is said that Galileo Galilei (1564-1642), an Italian scientist, dropped a small iron ball and a large cannon ball from the top of the Leaning Tower of Pisa. He found that the two balls reached the ground at almost the same time.\n\nWhich of the following is/are correct deduction(s) from this experiment?\n\n(1) The two balls fell with the same acceleration.\n(2) A body will maintain uniform motion if there is no external force acting on it.\n(3) The gravitational forces acting on the two balls were identical.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      '**Key point:** The observation that both balls reach the ground at nearly the same time supports equal free-fall acceleration, not equal force.\n\n(1) True: this suggests both balls have the same acceleration due to gravity (neglecting air resistance).\n\n(2) False as a deduction here: this statement is Newton’s first law, but it is not directly deduced from this falling-ball result.\n\n(3) False: gravitational force is $W=mg$, so different masses have different weights.\n\n**Conclusion:** only (1) is correct, so option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Focus on what “arrive at almost the same time” implies about acceleration.',
      'Distinguish acceleration equality from force equality.',
      'Use $W=mg$ to compare gravitational forces on different masses.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-054',
    type: 'multiple_choice',
    question:
      'A uniform steel ball lies at rest on a horizontal ground and just touches a vertical wall as shown in the diagram. Which of the following diagrams shows all the forces acting on the ball?\n\n(Note: $W$ = gravitational force acting on the ball, $R$ = normal reaction from the ground, $F$ = friction acting by the ground on the ball, $N$ = normal reaction from the wall.)',
    options: [
      '/physics/exercises/newton-laws/nl-054-option-a.png',
      '/physics/exercises/newton-laws/nl-054-option-b.png',
      '/physics/exercises/newton-laws/nl-054-option-c.png',
      '/physics/exercises/newton-laws/nl-054-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-054-option-a.png',
    explanation:
      '**Key point:** Include only real forces that actually act under the given contact condition.\n\n$W$: exists (gravity by Earth on the ball).\n\n$R$: exists (normal reaction from the ground balancing weight).\n\n$F$: does not exist here because there is no tendency of the ball to slide along the ground.\n\n$N$: does not exist because the ball only just touches the wall without pressing on it.\n\n**Conclusion:** the correct free-body diagram is option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Start from gravity and ground normal: these must be present.',
      'Friction needs a tendency of relative motion.',
      'Wall normal exists only if the wall is pressed by the ball.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-054-question.png'],
  },
  {
    id: 'nl-055',
    type: 'multiple_choice',
    question:
      'A block is placed on a rough inclined plane and then projected upwards along the plane. After reaching the highest point, the block slides down along the plane. Which of the following graphs shows the time variation of the velocity $v$ of the block?',
    options: [
      '/physics/exercises/newton-laws/nl-055-option-a.png',
      '/physics/exercises/newton-laws/nl-055-option-b.png',
      '/physics/exercises/newton-laws/nl-055-option-c.png',
      '/physics/exercises/newton-laws/nl-055-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-055-option-a.png',
    explanation:
      '**Key point:** Friction always opposes motion, so the acceleration magnitudes are different on the way up and on the way down.\n\nWhen moving upward, both $mg\\sin\\theta$ and friction act down the plane:\n$$mg\\sin\\theta+f=ma_1,$$\nso the block decelerates with magnitude $a_1$.\n\nWhen moving downward, friction acts up the plane:\n$$mg\\sin\\theta-f=ma_2,$$\nso the block accelerates downward with magnitude $a_2$.\n\nHence $a_1>a_2$. Since the slope magnitude of the $v$-$t$ graph equals acceleration magnitude, the upward-motion segment is steeper than the downward-motion segment.\n\n**Conclusion:** option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Decide friction direction separately for upward and downward motion.',
      'Write equations along the slope for each stage.',
      'Compare $|\\text{slope}|$ on the two straight segments of the $v$-$t$ graph.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-055-question.png'],
  },
  {
    id: 'nl-056',
    type: 'multiple_choice',
    question:
      'Three forces of magnitudes $F_1$, $F_2$ and 10 N act on an object as shown. If the object is in equilibrium, find the force $F_2$.',
    options: ['5.0 N', '8.7 N', '11.5 N', '17.3 N'],
    answer: '11.5 N',
    explanation:
      '**Key point:** For equilibrium, resultant force in each direction is zero.\n\nUsing vertical force balance:\n$$F_2\\cos30^{\\circ}=10.$$ \nHence\n$$F_2=\\frac{10}{\\cos30^{\\circ}}\\approx11.5\\ \\text{N}.$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Resolve forces vertically first.',
      'Use equilibrium: net vertical force is zero.',
      'Apply $F_2\\cos30^\\circ=10$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-056-question.png'],
  },
  {
    id: 'nl-057',
    type: 'multiple_choice',
    question:
      'A block is placed on a rough horizontal ground and a horizontal force acts on the block. If the magnitude of the force, $F$, is increased gradually, which of the following graphs shows the relation between $F$ and the acceleration $a$ of the block?',
    options: [
      '/physics/exercises/newton-laws/nl-057-option-a.png',
      '/physics/exercises/newton-laws/nl-057-option-b.png',
      '/physics/exercises/newton-laws/nl-057-option-c.png',
      '/physics/exercises/newton-laws/nl-057-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-057-option-b.png',
    explanation:
      '**Key point:** On a rough surface, friction opposes motion, so\n$$F-f=ma\\Rightarrow a=\\frac{1}{m}F-\\frac{f}{m}.$$ \nThis is a linear relation between $a$ and $F$ with positive slope and a positive $F$-intercept when $a=0$.\n\nSo the correct graph is the straight line corresponding to option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Write Newton’s second law including friction.',
      'Rearrange to make $a$ the subject.',
      'Identify the slope and intercept from the linear form.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-057-question.png'],
  },
  {
    id: 'nl-058',
    type: 'multiple_choice',
    question:
      'An astronaut lands on the moon and finds that his weight is about one-sixth of that on the earth. Which of the following deductions is/are correct?\n\n(1) If he throws an object upwards on the moon, it will reach a higher level than throwing the object with the same speed on earth.\n(2) If he releases an object on the moon, it will take a shorter time to reach the ground than releasing the object from the same height on earth.\n(3) The maximum weight he can lift on the moon is greater than on earth.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      '**Key point:** Since $W=mg$, and weight on the moon is about one-sixth, the moon’s gravitational acceleration is about $g/6$.\n\n(1) True: for upward throw with same initial speed $u$, from $0=u^2-2gs$ we get $s=\\frac{u^2}{2g}$, so smaller $g$ gives larger maximum height.\n\n(2) False: for free fall from same height with $u=0$, $s=\\frac{1}{2}gt^2$, so smaller $g$ gives a longer time, not shorter.\n\n(3) False in terms of weight: the astronaut can exert about the same maximum force, so maximum **weight** he can lift is not greater; he can lift a greater **mass** on the moon.\n\n**Conclusion:** only (1) is correct, so option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $W=mg$ to compare gravity on moon and earth.',
      'For upward throw, use $v^2=u^2+2as$ at the top where $v=0$.',
      'Distinguish weight from mass in statement (3).',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-059',
    type: 'multiple_choice',
    question:
      'A block on a rough horizontal table is acted on by two horizontal forces of magnitudes 10 N and 2 N as shown. It remains at rest on the table. If the force of magnitude 10 N is removed, find the resultant force acting on the block.',
    options: ['zero', '2 N', '6 N', '8 N'],
    answer: 'zero',
    explanation:
      '**Key point:** For an object at rest, static friction adjusts to balance the net applied horizontal force (up to its limit).\n\nInitially, to keep rest:\n$$f=10-2=8\\ \\text{N}.$$ \nAfter removing the 10 N force, the only applied horizontal force is 2 N, so static friction readjusts to 2 N in the opposite direction.\n\nHence horizontal resultant force remains zero.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'At rest means resultant horizontal force is zero.',
      'Static friction is not fixed; it adjusts as needed.',
      'After removing 10 N, compare remaining applied force with friction needed for equilibrium.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-059-question.png'],
  },
  {
    id: 'nl-060',
    type: 'multiple_choice',
    question:
      'A coin is placed on a piece of cardboard resting on a glass as shown above. If the cardboard is flicked with a finger, the coin will drop into the glass. What does this experiment demonstrate?',
    options: [
      'The coin will fall with uniform acceleration under the action of gravity.',
      'The acceleration of the coin is proportional to the applied force.',
      'Action and reaction always occur in pairs.',
      'The coin has a tendency to maintain its state of rest.',
    ],
    answer: 'The coin has a tendency to maintain its state of rest.',
    explanation:
      "**Key point:** This demonstrates Newton's first law (law of inertia).\n\nWhen the cardboard is flicked away quickly, the coin tends to remain in its original state of rest due to inertia. With support removed, it then falls vertically into the glass under gravity.\n\n**Conclusion:** the experiment demonstrates the tendency to maintain state of rest, so option D.",
    difficulty: 1,
    points: 10,
    hints: [
      "Think about Newton's law related to inertia.",
      'A quick flick minimizes horizontal motion transferred to the coin.',
      'The key idea is maintaining the original state of motion (rest).',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-060-question.png'],
  },
  {
    id: 'nl-061',
    type: 'multiple_choice',
    question:
      "A man is pulling a suitcase along the horizontal ground as shown below. Which of the following pairs of forces is/are action and reaction pair(s) according to Newton's third law of motion?\n\n(1) The gravitational force exerted by the earth on the man, and the gravitational force exerted by the man on the earth.\n(2) The pulling force exerted by the man on the suitcase, and the friction exerted by the ground on the suitcase.\n(3) The gravitational force exerted by the earth on the suitcase, and the normal reaction exerted by the ground on the suitcase.",
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      "**Key point:** Newton's third-law force pairs are equal and opposite forces acting on different bodies in the same interaction.\n\n(1) Correct: Earth-on-man gravity pairs with man-on-Earth gravity.\n\n(2) Incorrect: both forces act on the suitcase, so they are not an action-reaction pair.\n\n(3) Incorrect: both forces also act on the suitcase, so they are not an action-reaction pair.\n\n**Conclusion:** only (1) is a valid third-law pair, so option A.",
    difficulty: 1,
    points: 10,
    hints: [
      'A third-law pair must act on two different bodies.',
      'Check whether each listed pair belongs to the same interaction.',
      'If two forces act on the same object, they are not a third-law pair.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-061-question.png'],
  },
  {
    id: 'nl-062',
    type: 'multiple_choice',
    question:
      "A student uses a friction-compensated runway to study Newton's second law of motion. The variation of the acceleration $a$ of the trolley with the force $F$ applied parallel to the runway is shown above. If the experiment is repeated with the runway making a larger angle of inclination with the horizontal, which of the graphs (in dotted lines) represents the expected result?",
    options: [
      '/physics/exercises/newton-laws/nl-062-option-a.png',
      '/physics/exercises/newton-laws/nl-062-option-b.png',
      '/physics/exercises/newton-laws/nl-062-option-c.png',
      '/physics/exercises/newton-laws/nl-062-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-062-option-c.png',
    explanation:
      '**Key point:** In an $a$-$F$ graph, slope is $\\frac{1}{m}$, so changing runway angle does not change slope if trolley mass is unchanged.\n\nWith a larger inclination, the runway is no longer perfectly friction-compensated, so even when $F=0$, there is a non-zero acceleration down the slope.\n\nHence the new line should keep the same slope but have a positive $a$-intercept.\n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'From $a=\\frac{F}{m}$, identify what sets the slope of an $a$-$F$ graph.',
      'Check what happens at $F=0$ after increasing runway angle.',
      'Look for same slope but shifted upward intercept.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-062-question.png'],
  },
  {
    id: 'nl-063',
    type: 'multiple_choice',
    question:
      'John, of mass 80 kg, is standing on a weighing scale in a lift. At a certain instant, the reading of the weighing scale is 600 N. Which of the following statements about John at this instant is/are correct? (Take the acceleration due to gravity to be $10\\ \\text{m s}^{-2}$.)\n\n(1) The gravitational force acting on John is 600 N.\n(2) The force exerted by the weighing scale on John is 200 N.\n(3) John is accelerating downward at a rate of $2.5\\ \\text{m s}^{-2}$.',
    options: ['(2) only', '(3) only', '(1) and (2) only', '(1) and (3) only'],
    answer: '(3) only',
    explanation:
      '**Key point:** The scale reading is the normal reaction $R$, not the weight $mg$.\n\nWeight:\n$$mg=80\\times10=800\\ \\text{N},$$\nso statement (1) is false.\n\nScale force on John equals reading, so $R=600\\ \\text{N}$, not 200 N. Statement (2) is false.\n\nApply Newton’s second law vertically:\n$$mg-R=ma$$\n$$800-600=80a$$\n$$a=2.5\\ \\text{m s}^{-2}$$\nDirection is downward since $mg>R$.\n\n**Conclusion:** only (3) is correct, so option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Distinguish between weight $mg$ and scale reading $R$.',
      'Use $mg=80\\times10$ first.',
      'Then apply $mg-R=ma$ to find acceleration and direction.',
    ],
    sectionId: 'newton-laws',
  },
];

// 互动模拟 - 自由落体计时器
export const FORCE_MOTION_SIMULATIONS: Simulation[] = [
  {
    id: 'fms-1',
    title: '自由落体计时器',
    description: '模拟物体在不同星球上的自由落体运动。调整重力加速度和时间，观察位移和速度的变化。特别展示"总时间"与"分段时间"的区别。',
    type: 'interactive',
    parameters: [
      { name: '重力加速度', symbol: 'g', unit: 'm/s²', min: 1, max: 20, default: 8, step: 0.5 },
      { name: '第一段时间', symbol: 't₁', unit: 's', min: 0, max: 10, default: 1, step: 0.5 },
      { name: '再过时间', symbol: 'Δt', unit: 's', min: 0, max: 10, default: 4, step: 0.5 },
    ],
  },
  {
    id: 'fms-2',
    title: '等时位移对比',
    description: '观察自由落体每一秒内下落距离的变化，验证"等时位移递增"规律（比例为 1:3:5:7...）',
    type: 'interactive',
    parameters: [
      { name: '重力加速度', symbol: 'g', unit: 'm/s²', min: 5, max: 15, default: 10, step: 1 },
      { name: '观察秒数', symbol: 'n', unit: 's', min: 1, max: 10, default: 5, step: 1 },
    ],
  },
  {
    id: 'fms-3',
    title: 's-t 和 v-t 图像绘制器',
    description: '实时绘制自由落体的位移-时间图（抛物线）和速度-时间图（直线），帮助理解运动学图像。',
    type: 'interactive',
    parameters: [
      { name: '重力加速度', symbol: 'g', unit: 'm/s²', min: 5, max: 15, default: 10, step: 1 },
      { name: '总时间', symbol: 't', unit: 's', min: 1, max: 10, default: 5, step: 0.5 },
    ],
  },
  {
    id: 'fms-4',
    title: '多点自由落体分析器',
    description: '模拟物体经过多个标记点（O→A→B）的自由落体运动。输入某段数据，反推其他段的运动参数。演示"中间点分析法"。',
    type: 'interactive',
    parameters: [
      { name: '重力加速度', symbol: 'g', unit: 'm/s²', min: 1, max: 15, default: 9.81, step: 0.01 },
      { name: 'A→B 位移', symbol: 'sAB', unit: 'm', min: 10, max: 200, default: 100, step: 5 },
      { name: 'A→B 用时', symbol: 'tAB', unit: 's', min: 1, max: 10, default: 4, step: 0.5 },
    ],
  },
  {
    id: 'fms-5',
    title: '竖直上抛运动分析',
    description: '观察竖直上抛运动中速度和加速度的变化。特别展示最高点时 v=0 但 a=g 的情况，理解瞬时状态与过程状态的区别。',
    type: 'interactive',
    parameters: [
      { name: '初速度', symbol: 'u', unit: 'm/s', min: 5, max: 30, default: 15, step: 1 },
      { name: '重力加速度', symbol: 'g', unit: 'm/s²', min: 5, max: 15, default: 10, step: 0.5 },
    ],
  },
];

// 章节配置
export const FORCE_MOTION_CHAPTERS: Chapter[] = [
  {
    id: 'fm-ch1',
    title: 'Position, Distance and Displacement',
    titleCN: '位置、距离与位移',
    concepts: FORCE_MOTION_CONCEPTS,
    formulas: FORCE_MOTION_FORMULAS,
    exercises: FORCE_MOTION_EXERCISES,
    simulations: FORCE_MOTION_SIMULATIONS,
    completed: false,
  },
];
