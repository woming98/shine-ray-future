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
      '/physics/exercises/newton-laws/nl-032-question.png',
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
  {
    id: 'nl-064',
    type: 'multiple_choice',
    question:
      'A block of mass 0.5 kg slides down a rough inclined plane with an acceleration of $3\\ \\text{m s}^{-2}$. If the plane is inclined at $30^{\\circ}$ to the horizontal, find the friction between the block and the plane.',
    options: ['0.95 N', '1.47 N', '2.75 N', '3.92 N'],
    answer: '0.95 N',
    explanation:
      '**Key point:** Along the slope, resultant force is $mg\\sin\\theta-f=ma$.\n\nSubstitute values:\n$$(0.5)(9.81)\\sin30^{\\circ}-f=(0.5)(3).$$\nSo\n$$f=(0.5)(9.81)(0.5)-1.5=2.4525-1.5=0.9525\\ \\text{N}\\approx0.95\\ \\text{N}.$$\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Resolve forces along the incline only.',
      'Use $mg\\sin\\theta-f=ma$ for downward motion.',
      'Compute and round to 2 d.p.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-064-question.png'],
  },
  {
    id: 'nl-065',
    type: 'multiple_choice',
    question:
      'A block of weight 100 N is placed on a smooth horizontal table. A vertical force of 60 N and a horizontal force of 30 N are applied to the block as shown. Find the magnitude of the resultant force acting on the block.',
    options: ['30 N', '40 N', '50 N', '67 N'],
    answer: '30 N',
    explanation:
      '**Key point:** On a smooth table, vertical forces balance while the horizontal applied force remains unbalanced.\n\nVertically:\n$$100\\ \\text{N} = 60\\ \\text{N} + R \\Rightarrow R=40\\ \\text{N},$$\nso net vertical force is zero.\n\nHorizontally, the only unbalanced force is 30 N.\n\nTherefore resultant force magnitude is 30 N.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Treat vertical and horizontal directions separately.',
      'Find the normal reaction from vertical balance first.',
      'Smooth table means no friction in horizontal direction.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-065-question.png'],
  },
  {
    id: 'nl-066',
    type: 'multiple_choice',
    question:
      "The following are statements written by three students about Newton's first law of motion.\n\n(1) A stationary object will remain in a state of rest unless acted on by an unbalanced force.\n(2) An object undergoing uniform motion will maintain its motion unless acted on by an unbalanced force.\n(3) An unbalanced force is required to maintain the motion of an object at uniform velocity.\n\nWhich of the above statements is/are correct?",
    options: ['(2) only', '(3) only', '(1) and (2) only', '(1) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      "**Key point:** Newton's first law states that without unbalanced force, an object keeps its state of rest or uniform straight-line motion.\n\n(1) Correct: rest is maintained without unbalanced force.\n\n(2) Correct: uniform motion is maintained without unbalanced force.\n\n(3) Incorrect: unbalanced force is needed to change velocity (cause acceleration), not to maintain uniform velocity.\n\n**Conclusion:** (1) and (2) only, so option C.",
    difficulty: 1,
    points: 10,
    hints: [
      'First law covers both rest and uniform motion.',
      'Unbalanced force causes acceleration (change in velocity).',
      'Maintaining uniform velocity needs zero resultant force.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-067',
    type: 'multiple_choice',
    question:
      'Which of the following objects are under the action of an unbalanced force at the instant shown in the diagrams?\n\n(1) a football being kicked by a player\n(2) a parachutist falling with uniform velocity\n(3) a swinging pendulum bob',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1) and (3) only',
    explanation:
      '**Key point:** Unbalanced force is required whenever there is acceleration (change in velocity magnitude and/or direction).\n\n(1) Football being kicked: speed changes from rest, so acceleration exists and force is unbalanced.\n\n(2) Parachutist at uniform velocity: acceleration is zero, so resultant force is zero (balanced).\n\n(3) Swinging pendulum bob: direction of velocity keeps changing, so acceleration exists and an unbalanced force is present.\n\n**Conclusion:** (1) and (3) only, so option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Check whether velocity is changing in magnitude or direction.',
      'Uniform velocity implies zero acceleration.',
      'Circular/curved motion still needs acceleration due to changing direction.',
    ],
    sectionId: 'newton-laws',
    imagePaths: [
      '/physics/exercises/newton-laws/nl-067-question-1.png',
      '/physics/exercises/newton-laws/nl-067-question-2.png',
      '/physics/exercises/newton-laws/nl-067-question-3.png',
    ],
  },
  {
    id: 'nl-068',
    type: 'multiple_choice',
    question:
      'A block of mass $m$ slides down an inclined plane with uniform velocity. What is the net force acting on the block?',
    options: ['$mg$', '$mg\\sin\\theta$', '$mg\\cos\\theta$', 'zero'],
    answer: 'zero',
    explanation:
      '**Key point:** Uniform velocity means zero acceleration.\n\nBy Newton’s second law,\n$$F_{\\text{net}}=ma.$$ \nSince $a=0$,\n$$F_{\\text{net}}=0.$$\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Uniform velocity implies acceleration is zero.',
      'Apply Newton’s second law directly.',
      'Net force follows from $F_{\\text{net}}=ma$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-068-question.png'],
  },
  {
    id: 'nl-069',
    type: 'multiple_choice',
    question:
      'A uniform cube of weight 600 N is held in equilibrium in the air by four identical cables as shown above. If each cable makes an equal angle of $20^{\\circ}$ with the vertical, find the tension in each cable.',
    options: ['150 N', '160 N', '412 N', '439 N'],
    answer: '160 N',
    explanation:
      '**Key point:** In equilibrium, the total upward vertical components of the four tensions balance the weight.\n\nVertical force balance:\n$$4T\\cos20^{\\circ}=600.$$ \nHence\n$$T=\\frac{600}{4\\cos20^{\\circ}}\\approx160\\ \\text{N}.$$\n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Resolve each cable tension into vertical component.',
      'Sum of four vertical components equals 600 N.',
      'Solve $4T\\cos20^\\circ=600$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-069-question.png'],
  },
  {
    id: 'nl-070',
    type: 'multiple_choice',
    question:
      'The figure shows a ride in an amusement park. A passenger is fastened to a seat which is then raised to the top of a vertical pole. At time $t=0$, the seat is released from rest and falls freely. After 3 s, the seat is brought to rest at a point $P$ near the ground. Which of the below graphs best shows the relation between the gravitational force acting on the passenger $W$ and $t$?',
    options: [
      '/physics/exercises/newton-laws/nl-070-option-a.png',
      '/physics/exercises/newton-laws/nl-070-option-b.png',
      '/physics/exercises/newton-laws/nl-070-option-c.png',
      '/physics/exercises/newton-laws/nl-070-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-070-option-a.png',
    explanation:
      '**Key point:** Gravitational force on the passenger is weight, $W=mg$, which remains constant near Earth’s surface.\n\nAlthough the seat’s velocity and acceleration change during the ride, the gravitational force itself does not depend on those motion changes.\n\nSo the $W$-$t$ graph is a horizontal line.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Distinguish weight from apparent weight/normal reaction.',
      'Weight is $mg$ and is approximately constant near Earth.',
      'Motion changes do not directly change gravitational force.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-070-question.png'],
  },
  {
    id: 'nl-071',
    type: 'multiple_choice',
    question:
      'A car accelerates at $3\\ \\text{m s}^{-2}$ along a straight horizontal road. A child of mass 10 kg is sitting on a safety seat inside the car. Find the magnitude of the resultant force exerted by the safety seat on the child. (Take the acceleration due to gravity to be $10\\ \\text{m s}^{-2}$.)',
    options: ['30 N', '100 N', '104 N', '130 N'],
    answer: '104 N',
    explanation:
      '**Key point:** The seat exerts two perpendicular contact forces on the child: one horizontal and one vertical.\n\nHorizontal force from seat back:\n$$R_1=ma=(10)(3)=30\\ \\text{N}.$$\n\nVertical force from seat base balances weight:\n$$R_2=mg=(10)(10)=100\\ \\text{N}.$$\n\nResultant seat force:\n$$R=\\sqrt{R_1^2+R_2^2}=\\sqrt{30^2+100^2}=\\sqrt{10900}\\approx104\\ \\text{N}.$$\n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Identify horizontal and vertical contact forces separately.',
      'Use $R_1=ma$ for horizontal acceleration.',
      'Combine perpendicular components with Pythagoras.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-071-question.png'],
  },
  {
    id: 'nl-072',
    type: 'multiple_choice',
    question:
      'A child is sitting on a chair as shown above. Which of the following pairs of forces is/are action and reaction pair(s)?\n\n(1) The gravitational force exerted by the earth on the child, and the normal reaction exerted by the chair on the child.\n(2) The force exerted by the child on the chair, and the normal reaction exerted by the chair on the child.\n(3) The force exerted by the chair on the ground, and the gravitational force exerted by the earth on the chair.',
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(2) only',
    explanation:
      "**Key point:** Newton's third-law pair must be equal and opposite forces acting on different bodies in the same interaction.\n\n(1) Not a third-law pair: both forces act on the child.\n\n(2) Yes: child-on-chair and chair-on-child are equal and opposite, acting on different bodies.\n\n(3) Not a third-law pair: chair-on-ground and Earth-on-chair are different interactions, and both are downward in this context, so not an action-reaction pair.\n\n**Conclusion:** only (2) is correct, so option B.",
    difficulty: 1,
    points: 10,
    hints: [
      'Check whether the two forces act on different bodies.',
      'Third-law pairs come from the same interaction.',
      'If both forces act on the same body, they are not a third-law pair.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-072-question.png'],
  },
  {
    id: 'nl-073',
    type: 'multiple_choice',
    question:
      'An object weighs 60 N on the Earth and 10 N on the moon. Which of the following statements are correct? (Take the acceleration due to gravity to be $10\\ \\text{m s}^{-2}$.)\n\n(1) The mass of the object on the Earth is 6 kg.\n(2) The mass of the object on the moon is 1 kg.\n(3) The acceleration due to gravity on the moon is one-sixth that on the Earth.',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1) and (3) only',
    explanation:
      '**Key point:** Weight depends on gravity, but mass does not.\n\nOn Earth:\n$$W=mg\\Rightarrow 60=m(10)\\Rightarrow m=6\\ \\text{kg},$$\nso (1) is true.\n\nMass is invariant, so on the moon it is still 6 kg, not 1 kg. Thus (2) is false.\n\nFor the same mass,\n$$\\frac{W_{moon}}{W_{earth}}=\\frac{g_{moon}}{g_{earth}}=\\frac{10}{60}=\\frac{1}{6},$$\nso (3) is true.\n\n**Conclusion:** (1) and (3) only, so option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use $W=mg$ on Earth to find mass first.',
      'Mass does not change with location.',
      'Compare moon weight to Earth weight for the same mass to infer $g$.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-074',
    type: 'multiple_choice',
    question:
      'Two blocks, of masses $m_1$ and $m_2$ ($m_1>m_2$), are connected by a light inextensible string and placed on a smooth horizontal surface. Let $T_1$ and $T_2$ be the tensions in the string when a horizontal force of magnitude $F$ is applied to the blocks as shown in Figures (a) and (b) respectively. Which of the following relationships are correct?\n\n(1) $T_1>T_2$\n(2) $\\frac{T_1}{m_1}=\\frac{T_2}{m_2}$\n(3) $T_1+T_2=F$',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1), (2) and (3)',
    explanation:
      '**Key point:** In both setups, total mass is the same and external horizontal force is $F$, so acceleration is the same:\n$$a=\\frac{F}{m_1+m_2}.$$ \n\nIn Fig. (a), tension accelerates block $m_1$:\n$$T_1=m_1a.$$ \nIn Fig. (b), tension accelerates block $m_2$:\n$$T_2=m_2a.$$ \n\nSince $m_1>m_2$, we get $T_1>T_2$.\nAlso,\n$$\\frac{T_1}{m_1}=a=\\frac{T_2}{m_2}.$$ \nAnd\n$$T_1+T_2=m_1a+m_2a=(m_1+m_2)a=F.$$ \n\n**Conclusion:** (1), (2) and (3) are all correct, so option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Find common acceleration of the two-block system first.',
      'Write tension in each case using the block accelerated by the string.',
      'Substitute $a=F/(m_1+m_2)$ to test statement (3).',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-074-question.png'],
  },
  {
    id: 'nl-075',
    type: 'multiple_choice',
    question:
      'A block is initially at rest on a smooth horizontal table and is pulled by a constant horizontal force. The figure shows the relationship between the physical quantities $y$ and $x$. Which of the following combinations of $y$ and $x$ is impossible?',
    options: [
      '$y$: displacement of the block; $x$: square of time',
      '$y$: velocity of the block; $x$: time',
      '$y$: square of velocity of the block; $x$: displacement of the block',
      '$y$: acceleration of the block; $x$: time',
    ],
    answer: '$y$: acceleration of the block; $x$: time',
    explanation:
      '**Key point:** Under a constant horizontal force on a smooth table, acceleration is constant.\n\nA. Possible: from $s=\\frac{1}{2}at^2$, plotting $s$ against $t^2$ gives a straight line through origin.\n\nB. Possible: from $v=at$, plotting $v$ against $t$ gives a straight line through origin.\n\nC. Possible: from $v^2=2as$, plotting $v^2$ against $s$ gives a straight line through origin.\n\nD. Impossible for the shown straight-through-origin pattern: $a$ is constant, so $a$ vs $t$ should be a horizontal line, not an increasing straight line through origin.\n\n**Conclusion:** option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Constant force on smooth surface means constant acceleration.',
      'Match each option with a standard kinematics equation.',
      'Check the expected graph shape for $a$ vs $t$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-075-question.png'],
  },
  {
    id: 'nl-076',
    type: 'multiple_choice',
    question:
      'The photograph shows a sucker sticking a hook to a vertical wall. Which of the following forces balances the gravitational force acting on the sucker and hook by the Earth?',
    options: [
      'the friction between the sucker and the wall',
      'the force exerted by the air molecules on the sucker',
      'the normal reaction exerted by the wall on the sucker',
      'the gravitational force acting on the Earth by the sucker and hook',
    ],
    answer: 'the friction between the sucker and the wall',
    explanation:
      '**Key point:** To balance weight, an upward force along the wall is required.\n\nThe gravitational force acts downward. The normal reaction is perpendicular to the wall (horizontal), so it cannot balance weight.\n\nThe interaction that provides upward force along the wall is friction between the sucker and the wall.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Identify the direction of weight.',
      'Check the direction of normal reaction on a vertical wall.',
      'Only a force along the wall can balance weight vertically.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-076-question.png'],
  },
  {
    id: 'nl-077',
    type: 'multiple_choice',
    question:
      'An object is acted on by three forces $F_1$, $F_2$ and $F_3$ in suitable directions such that it remains at rest. Which of the following combinations of the magnitude of the forces is/are possible?\n\n(1) $F_1=3\\ \\text{N},\\ F_2=4\\ \\text{N},\\ F_3=5\\ \\text{N}$\n(2) $F_1=3\\ \\text{N},\\ F_2=4\\ \\text{N},\\ F_3=7\\ \\text{N}$\n(3) $F_1=3\\ \\text{N},\\ F_2=5\\ \\text{N},\\ F_3=9\\ \\text{N}$',
    options: ['(2) only', '(3) only', '(1) and (2) only', '(1) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      '**Key point:** For equilibrium, one force must be able to balance the resultant of the other two by choosing suitable directions.\n\n(1) Possible: with 3 N and 4 N perpendicular, resultant is 5 N, balanced by $F_3=5$ N opposite direction.\n\n(2) Possible: with 3 N and 4 N in the same direction, resultant is 7 N, balanced by $F_3=7$ N opposite direction.\n\n(3) Impossible: for 3 N and 5 N, the resultant can range only from $|5-3|=2$ N to $5+3=8$ N. It cannot be 9 N.\n\n**Conclusion:** (1) and (2) only, so option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Think of $F_3$ balancing the resultant of $F_1$ and $F_2$.',
      'For two forces $a,b$, resultant magnitude lies in $[|a-b|,a+b]$.',
      'Test each case against this range.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-078',
    type: 'multiple_choice',
    question:
      'A block remains at rest on a rough inclined plane. Which of the following diagrams shows all the forces acting on the block?\n\nNote: $W$ = gravitational force acting on the block, $R$ = normal reaction exerted by the inclined plane on the block, and $F$ = friction acting on the block.',
    options: [
      '/physics/exercises/newton-laws/nl-078-option-a.png',
      '/physics/exercises/newton-laws/nl-078-option-b.png',
      '/physics/exercises/newton-laws/nl-078-option-c.png',
      '/physics/exercises/newton-laws/nl-078-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-078-option-c.png',
    explanation:
      '**Key point:** For a block at rest on a rough incline, three forces act: weight, normal reaction, and static friction.\n\n- $W$ acts vertically downward.\n- $R$ acts perpendicular to the plane.\n- Since the block tends to slide down, friction acts up the plane to oppose that tendency.\n\nSo the correct free-body diagram is the one showing these three forces with correct directions.\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Weight is always vertical downward.',
      'Normal reaction is perpendicular to the contact surface.',
      'Friction opposes the tendency of motion along the plane.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-078-question.png'],
  },
  {
    id: 'nl-079',
    type: 'multiple_choice',
    question:
      'A fish is hung on a light string as shown above. If the tension in the string is 10 N, find the total weight of the fish and the hook.',
    options: [
      '$10\\sin70^{\\circ}\\ \\text{N}$',
      '$10\\cos70^{\\circ}\\ \\text{N}$',
      '$20\\sin70^{\\circ}\\ \\text{N}$',
      '$20\\cos70^{\\circ}\\ \\text{N}$',
    ],
    answer: '$20\\cos70^{\\circ}\\ \\text{N}$',
    explanation:
      '**Key point:** In equilibrium, total upward vertical components of the two string tensions balance the weight.\n\nEach side has tension $T=10\\ \\text{N}$ and contributes vertical component $T\\cos70^{\\circ}$.\nSo\n$$W=2T\\cos70^{\\circ}=2(10)\\cos70^{\\circ}=20\\cos70^{\\circ}\\ \\text{N}.$$\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Resolve each tension into vertical and horizontal components.',
      'Horizontal components cancel by symmetry.',
      'Use vertical equilibrium to solve for $W$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-079-question.png'],
  },
  {
    id: 'nl-080',
    type: 'multiple_choice',
    question:
      'A 1 kg block is pulled by a horizontal force of 5 N and moves with an acceleration of $2\\ \\text{m s}^{-2}$ on a rough horizontal plane. Find the frictional force acting on the block.',
    options: ['zero', '2 N', '3 N', '7 N'],
    answer: '3 N',
    explanation:
      '**Key point:** Along the direction of motion, applied force minus friction equals $ma$.\n\nUsing\n$$F-f=ma,$$\nsubstitute values:\n$$5-f=(1)(2).$$\nSo\n$$f=3\\ \\text{N}.$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Apply Newton’s second law along the horizontal direction.',
      'Use $F-f=ma$.',
      'Substitute $F=5$, $m=1$, $a=2$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-080-question.png'],
  },
  {
    id: 'nl-081',
    type: 'multiple_choice',
    question:
      'Kelvin is standing on a balance inside a lift. The table shows the readings of the balance in three situations. Which of the following relationships is correct?',
    options: ['$R_1=R_2>R_3$', '$R_3>R_1=R_2$', '$R_1>R_2>R_3$', '$R_1>R_1>R_2$'],
    answer: '$R_3>R_1=R_2$',
    explanation:
      '**Key point:** Balance reading is normal reaction $R$.\n\n(1) Lift moving upward with uniform speed: $a=0$, so $R_1=mg$.\n\n(2) Lift moving downward with uniform speed: $a=0$, so $R_2=mg$.\n\n(3) Lift moving upward with acceleration: net force is upward, so\n$$R_3-mg=ma>0\\Rightarrow R_3>mg.$$\nTherefore,\n$$R_3>R_1=R_2.$$\n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Uniform speed means zero acceleration.',
      'Balance reading equals normal reaction.',
      'Upward acceleration implies $R>mg$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-081-question.png'],
  },
  {
    id: 'nl-082',
    type: 'multiple_choice',
    question:
      'Two blocks $X$ and $Y$ are connected by a light string passing over a smooth pulley as shown below. The mass of $X$ is greater than that of $Y$. The blocks are released from rest. Which of the following pairs of physical quantities are not equal while the blocks are in motion?',
    options: [
      'the speeds of the blocks',
      'the magnitude of the accelerations of the blocks',
      'the magnitude of the resultant forces acting on the blocks',
      'the magnitude of the forces exerted by the string on the blocks',
    ],
    answer: 'the magnitude of the resultant forces acting on the blocks',
    explanation:
      '**Key point:** For a light string over a smooth pulley, connected blocks have the same speed magnitude and same acceleration magnitude, and the string tension is the same on both sides.\n\nThus:\n- Speeds are equal (A equal).\n- Accelerations are equal in magnitude (B equal).\n- String forces (tensions) are equal (D equal).\n\nBut resultant force magnitude is $F_{\\text{net}}=ma$. Since $m_X\\neq m_Y$ while $a$ is the same magnitude, resultant forces are different.\n\n**Conclusion:** the unequal pair is option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'For connected blocks, speed and acceleration magnitudes are linked by the string.',
      'Smooth pulley + light string implies equal tension on both sides.',
      'Compare resultant force using $F_{\\text{net}}=ma$ with different masses.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-082-question.png'],
  },
  {
    id: 'nl-083',
    type: 'multiple_choice',
    question:
      'Two blocks $X$ and $Y$ are connected by a light string passing over a smooth pulley as shown below. The mass of $X$ is greater than that of $Y$. The blocks are released from rest. Which of the following pairs of forces is an action and reaction pair?',
    options: [
      'The force exerted by the string on $X$ and the force exerted by the string on $Y$',
      'The force exerted by the string on $Y$ and the force exerted by $Y$ on the string',
      'The gravitational force exerted on $X$ and the force exerted by $X$ on the horizontal surface',
      'The gravitational force exerted on $Y$ and the force exerted by the string on $Y$',
    ],
    answer: 'The force exerted by the string on $Y$ and the force exerted by $Y$ on the string',
    explanation:
      '**Key point:** A Newton’s third-law pair must be equal and opposite forces acting on two different bodies in the same interaction (A on B, and B on A).\n\nOption B is exactly this pair between string and block $Y$.\n\nOther options either act on different interactions or do not form opposite forces on the same two bodies.\n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Check whether the two forces act on different bodies.',
      'Third-law pair must come from the same interaction.',
      'Look for “force of A on B” matched with “force of B on A”.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-083-question.png'],
  },
  {
    id: 'nl-084',
    type: 'multiple_choice',
    question:
      'A bow is pulled horizontally to create a tension of 50 N on its string as shown in the figure. What is the net horizontal force acting on the arrow when it is released?',
    options: ['32.1 N', '38.3 N', '64.3 N', '76.6 N'],
    answer: '76.6 N',
    explanation:
      '**Key point:** The arrow is pulled by two equal string tensions, and their horizontal components add.\n\nEach side contributes horizontal component:\n$$50\\cos40^{\\circ}.$$ \nSo net horizontal force is\n$$F_h=2\\times 50\\cos40^{\\circ}=76.6\\ \\text{N}.$$\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Resolve each tension into horizontal component.',
      'Use symmetry: vertical components cancel.',
      'Add both horizontal components.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-084-question.png'],
  },
  {
    id: 'nl-085',
    type: 'multiple_choice',
    question:
      'If Peter stands with his feet on a weighing scale placed on level ground, his weight measured by the scale is $W$. What would be the reading on the scale if he exerts a downward force $F$ on a table top with his hands while he is still standing on the same scale as shown above?',
    options: ['$W$', '$W+F$', '$W-F$', '$F$'],
    answer: '$W-F$',
    explanation:
      '**Key point:** The scale reads the normal reaction from the scale on Peter.\n\nForces on Peter vertically:\n- Weight $W$ downward\n- Upward reaction from table on hands: $F$\n- Upward normal reaction from scale: $R$ (the scale reading)\n\nAt equilibrium:\n$$F+R=W\\Rightarrow R=W-F.$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Identify what a weighing scale measures.',
      'Draw vertical forces on Peter only.',
      'Use vertical equilibrium to solve for $R$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-085-question.png'],
  },
  {
    id: 'nl-086',
    type: 'multiple_choice',
    question:
      'An acrobat is standing in the middle of a cable as shown. The angle $\\theta$ is less than $60^{\\circ}$. Which of the following relations between the tension $T$ of the cable and the weight $W$ of the acrobat is correct? (Neglect the weight of the cable.)',
    options: ['$T>W$', '$W>T>\\frac{W}{2}$', '$T=\\frac{W}{2}$', '$T<\\frac{W}{2}$'],
    answer: '$W>T>\\frac{W}{2}$',
    explanation:
      '**Key point:** Vertical components of the two equal tensions balance the weight:\n$$W=2T\\cos\\theta\\Rightarrow \\cos\\theta=\\frac{W}{2T}.$$ \nGiven $0^{\\circ}<\\theta<60^{\\circ}$, we have\n$$1>\\cos\\theta>\\frac{1}{2}.$$ \nSo\n$$1>\\frac{W}{2T}>\\frac{1}{2}.$$\nThis implies\n$$T>\\frac{W}{2}\\quad \\text{and}\\quad T<W.$$ \n\n**Conclusion:** $W>T>\\frac{W}{2}$, so option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use vertical equilibrium at the acrobat.',
      'Write $W=2T\\cos\\theta$ first.',
      'Use the range of $\\cos\\theta$ for $0^\\circ<\\theta<60^\\circ$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-086-question.png'],
  },
  {
    id: 'nl-087',
    type: 'multiple_choice',
    question:
      'A student performed an experiment to investigate the factors affecting the acceleration of a trolley carrying different loads. The table below shows the data recorded. Which trials can the student use to deduce the relationship between the acceleration and the net force acting on the trolley?',
    options: ['(i), (ii) and (iii)', '(i), (iv) and (vi)', '(ii), (iv) and (v)', '(iii), (v) and (vi)'],
    answer: '(i), (iv) and (vi)',
    explanation:
      '**Key point:** To study how acceleration depends on net force, mass must be kept constant.\n\nFrom the table, trials (i), (iv) and (vi) have the same trolley mass (2 kg), while net force varies.\n\nSo these trials isolate the effect of net force on acceleration.\n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Identify the variable to be studied: net force.',
      'Control the other key variable: mass.',
      'Pick the set of trials with equal mass.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-087-question.png'],
  },
  {
    id: 'nl-088',
    type: 'multiple_choice',
    question:
      'Many traffic accidents on highways are associated with inertia. Which of the following traffic regulations can reduce the risk of traffic accidents due to inertia?\n\n(1) Passengers should wear seat belts.\n(2) Vehicles should not be overloaded.\n(3) People should not drive over the speed limit.',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1), (2) and (3)',
    explanation:
      '**Key point:** Inertia increases risk when objects/passengers tend to maintain their state of motion.\n\n(1) Seat belts reduce injury by restraining forward motion during sudden deceleration.\n\n(2) Overloading increases mass, making stopping harder within safe distance.\n\n(3) Higher speed increases difficulty of stopping safely and increases accident risk.\n\n**Conclusion:** all three measures help reduce inertia-related traffic risk, so option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Think about how inertia affects stopping and passenger motion.',
      'Both mass and speed influence how hard a vehicle is to stop safely.',
      'Seat belts control passenger motion during sudden deceleration.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-089',
    type: 'multiple_choice',
    question:
      'Two blocks, $A$ and $B$, of masses 1 kg and 3 kg respectively, are placed on a horizontal smooth surface as shown. A horizontal constant force of 12 N is applied to block $A$ so that the two blocks move to the right with uniform acceleration. What is the magnitude of the contact force between $A$ and $B$?',
    options: ['3 N', '4 N', '8 N', '9 N'],
    answer: '9 N',
    explanation:
      '**Key point:** First find common acceleration of the two-block system, then apply $F=ma$ to block $B$.\n\nFor both blocks together:\n$$12=(1+3)a\\Rightarrow a=3\\ \\text{m s}^{-2}.$$ \nFor block $B$ alone, horizontal force is contact force $N$:\n$$N=m_Ba=(3)(3)=9\\ \\text{N}.$$\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Treat both blocks as one system to find acceleration first.',
      'Then isolate block $B$.',
      'Use $F=ma$ for the contact force on $B$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-089-question.png'],
  },
  {
    id: 'nl-090',
    type: 'multiple_choice',
    question:
      'A horse pulls a block along a rough horizontal road and moves with a uniform velocity. Which of the following correctly describes the directions of the friction from the ground acting on the horse and the block?',
    options: [
      'Horse: backward; Block: forward',
      'Horse: backward; Block: backward',
      'Horse: forward; Block: forward',
      'Horse: forward; Block: backward',
    ],
    answer: 'Horse: forward; Block: backward',
    explanation:
      '**Key point:** Friction acts to oppose relative slipping tendency at each contact.\n\nFor the block, it is pulled forward by the horse, so it tends to move forward relative to ground; friction on the block is backward.\n\nFor the horse, it pushes the ground backward with its hooves, so ground exerts forward friction on the horse, enabling forward motion.\n\nWith uniform velocity, these effects balance overall, but directions remain as above.\n\n**Conclusion:** Horse forward, Block backward → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Analyze horse-ground and block-ground contacts separately.',
      'Friction direction depends on slipping tendency at each contact.',
      'Uniform velocity means net force is zero, not that friction is absent.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-091',
    type: 'multiple_choice',
    question:
      'A child is standing on a weighing scale as shown above. Which of the following pairs of forces is/are an action and reaction pair(s)?\n\n(1) The force exerted by the child on the scale and the force exerted by the scale on the child\n(2) The gravitational force exerted by the Earth on the child and the force exerted by the scale on the child\n(3) The gravitational force exerted by the Earth on the child and the gravitational force exerted by the Earth on the scale',
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      '**Key point:** A third-law pair must be “force of A on B” and “force of B on A”.\n\n(1) Correct: child-on-scale and scale-on-child are equal and opposite on different bodies.\n\n(2) Incorrect: Earth-on-child pairs with child-on-Earth, not with scale-on-child.\n\n(3) Incorrect: both listed forces are Earth-on-objects, so they are not action-reaction to each other.\n\n**Conclusion:** only (1) is a valid action-reaction pair, so option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Match each force with its exact “other-body on first-body” partner.',
      'If both forces are “Earth on ...”, they cannot be a third-law pair.',
      'Check whether the pair acts on two different bodies in opposite directions.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-091-question.png'],
  },
  {
    id: 'nl-092',
    type: 'multiple_choice',
    question:
      'In the above figure, a 1 kg block is suspended by a string under the ceiling. The block is pulled by a 3 N horizontal force such that it makes angle $\\theta$ to the vertical. Which of the following descriptions is correct? (Note: The tension of the string is denoted as $T$.)',
    options: [
      '$\\theta<30^{\\circ}$ and $13\\ \\text{N}>T>10\\ \\text{N}$',
      '$\\theta<30^{\\circ}$ and $T>13\\ \\text{N}$',
      '$\\theta>30^{\\circ}$ and $13\\ \\text{N}>T>10\\ \\text{N}$',
      '$\\theta>30^{\\circ}$ and $T>13\\ \\text{N}$',
    ],
    answer: '$\\theta<30^{\\circ}$ and $13\\ \\text{N}>T>10\\ \\text{N}$',
    explanation:
      '**Key point:** Resolve tension into horizontal and vertical components for equilibrium.\n\nHorizontal balance:\n$$T\\sin\\theta=3.$$ \nVertical balance:\n$$T\\cos\\theta=10.$$ \nSo\n$$\\tan\\theta=\\frac{3}{10}=0.3\\Rightarrow \\theta\\approx16.7^{\\circ}<30^{\\circ}.$$ \nAnd\n$$T=\\sqrt{3^2+10^2}=\\sqrt{109}\\approx10.4\\ \\text{N},$$\nthus\n$$13\\ \\text{N}>T>10\\ \\text{N}.$$\n\n**Conclusion:** option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Write separate force-balance equations horizontally and vertically.',
      'Use $\\tan\\theta=(T\\sin\\theta)/(T\\cos\\theta)=3/10$.',
      'Find $T$ from component values or Pythagoras.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-092-question.png'],
  },
  {
    id: 'nl-093',
    type: 'multiple_choice',
    question:
      'A bob is hung by a string from the ceiling of a train. At a certain instant, the bob is inclined to the east as shown in the figure. Which of the following descriptions about the motion of the train at this instant is/are possible?\n\n(1) It is moving to the east and decelerating.\n(2) It is moving to the west and accelerating.\n(3) It starts to move to the east from rest.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      '**Key point:** The bob inclines opposite to train acceleration direction. Since it inclines to the east, train acceleration is to the west.\n\n(1) Moving east and decelerating means acceleration westward → possible.\n\n(2) Moving west and accelerating means acceleration westward → possible.\n\n(3) Starting to move east from rest means acceleration eastward → not possible.\n\n**Conclusion:** (1) and (2) only, so option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'String tilt indicates resultant acceleration direction of the train frame.',
      'Tilt to east implies acceleration to west.',
      'Check each motion statement against westward acceleration.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-093-question.png'],
  },
  {
    id: 'nl-094',
    type: 'multiple_choice',
    question:
      'A block is placed on a table resting on the ground as shown in Figure (a). Figure (b) shows the forces acting on the block and the table respectively.\nLet $F_1$ = weight of the block, $F_2$ = force exerted by the block on the table, and $F_3$ = force exerted by the table on the block. Which of the following statements are correct?\n\n(1) $F_1$ and $F_2$ represent the same force.\n(2) $F_1$ and $F_3$ balance each other.\n(3) $F_2$ and $F_3$ form an action-reaction pair.',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(2) and (3) only',
    explanation:
      '**Key point:** Distinguish balanced forces on the same body from third-law pairs on different bodies.\n\n(1) False: $F_1$ is Earth-on-block weight; $F_2$ is block-on-table normal force. Different interactions.\n\n(2) True: on the block, $F_1$ (downward) and $F_3$ (upward) balance because the block is at rest.\n\n(3) True: $F_2$ (block on table) and $F_3$ (table on block) are equal and opposite on different bodies, so they are an action-reaction pair.\n\n**Conclusion:** (2) and (3) only, so option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Check whether each pair acts on the same body or different bodies.',
      'Balanced forces act on one body; third-law pairs act on two bodies.',
      'For the block at rest, vertical forces on it must balance.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-094-question.png'],
  },
  {
    id: 'nl-095',
    type: 'multiple_choice',
    question:
      'A block of mass $m$ slides down along a rough inclined plane with constant acceleration $a$ as shown above. What are the friction and the normal reaction acting on the block?',
    options: [
      'Friction: $mg\\sin\\theta+ma$; Normal reaction: $mg\\sin\\theta$',
      'Friction: $mg\\sin\\theta-ma$; Normal reaction: $mg\\cos\\theta$',
      'Friction: $mg\\cos\\theta+ma$; Normal reaction: $mg\\sin\\theta$',
      'Friction: $mg\\cos\\theta-ma$; Normal reaction: $mg\\cos\\theta$',
    ],
    answer: 'Friction: $mg\\sin\\theta-ma$; Normal reaction: $mg\\cos\\theta$',
    explanation:
      '**Key point:** Resolve forces along and perpendicular to the incline.\n\nAlong plane (downward positive):\n$$mg\\sin\\theta-f=ma\\Rightarrow f=mg\\sin\\theta-ma.$$ \nPerpendicular to plane, no acceleration:\n$$R=mg\\cos\\theta.$$ \n\nSo the correct pair is friction $mg\\sin\\theta-ma$ and normal reaction $mg\\cos\\theta$.\n\n**Conclusion:** option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Write one equation along the slope and one perpendicular to it.',
      'Friction opposes sliding direction (up the plane).',
      'No perpendicular acceleration means forces there balance.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-095-question.png'],
  },
  {
    id: 'nl-096',
    type: 'multiple_choice',
    question:
      'Two blocks $A$ and $B$ of the same mass on a horizontal surface are connected by a string as shown above. Two horizontal forces of 10 N and 4 N are acting on $A$ and $B$ respectively. Assume all contact surfaces are smooth. What is the magnitude of the tension in the string?',
    options: ['3 N', '6 N', '7 N', '14 N'],
    answer: '7 N',
    explanation:
      '**Key point:** The two blocks have equal mass and common acceleration, so write Newton’s second law for each.\n\nLet acceleration be $a$ and tension be $T$.\nFor $A$:\n$$10-T=ma.$$ \nFor $B$:\n$$T-4=ma.$$ \nEquate right-hand sides:\n$$10-T=T-4\\Rightarrow 2T=14\\Rightarrow T=7\\ \\text{N}.$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Let both blocks have the same acceleration $a$.',
      'Write separate force equations for $A$ and $B$.',
      'Eliminate $ma$ by equating the two expressions.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-096-question.png'],
  },
  {
    id: 'nl-097',
    type: 'multiple_choice',
    question:
      'A block of mass 1 kg rests on a rough horizontal plane. When it is pulled by a horizontal force of 5 N, it moves with an acceleration of $2\\ \\text{m s}^{-2}$. Now, the block is at rest and is pulled by a horizontal force of 2 N, what is the resultant force acting on the block?',
    options: ['zero', '1 N', '2 N', '3 N'],
    answer: 'zero',
    explanation:
      '**Key point:** Static friction adjusts to balance applied force up to its limit.\n\nFrom the moving case:\n$$5-f=1\\times2\\Rightarrow f=3\\ \\text{N}.$$ \nSo friction capability is at least 3 N.\n\nWhen pulled by 2 N while at rest, static friction becomes 2 N opposite to pull, so forces balance.\n\nResultant force is zero.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use the 5 N case to infer friction value.',
      'For an object still at rest, static friction can match smaller applied force.',
      'Check net force after balancing pull with friction.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-098',
    type: 'multiple_choice',
    question:
      'A 50 N block is suspended by two threads as shown in the figure above. Thread $S_1$ makes an angle $30^{\\circ}$ with the horizontal and thread $S_2$ is horizontal. What is the tension in $S_2$?',
    options: ['28.9 N', '57.7 N', '86.6 N', '100 N'],
    answer: '86.6 N',
    explanation:
      '**Key point:** Resolve $T_1$ into components and apply equilibrium in vertical and horizontal directions.\n\nVertical balance:\n$$T_1\\sin30^{\\circ}=50\\Rightarrow T_1=100\\ \\text{N}.$$ \nHorizontal balance:\n$$T_2=T_1\\cos30^{\\circ}=100\\cos30^{\\circ}=86.6\\ \\text{N}.$$ \n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Start with vertical force balance to get $T_1$.',
      'Use $\\sin30^\\circ=0.5$.',
      'Then use horizontal balance to find $T_2$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-098-question.png'],
  },
  {
    id: 'nl-099',
    type: 'multiple_choice',
    question:
      'Force $F$ is the resultant of two forces $F_1$ and $F_2$ on a horizontal plane. Which of the following diagrams best represents the missing force $F_2$?',
    options: [
      '/physics/exercises/newton-laws/nl-099-option-a.png',
      '/physics/exercises/newton-laws/nl-099-option-b.png',
      '/physics/exercises/newton-laws/nl-099-option-c.png',
      '/physics/exercises/newton-laws/nl-099-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-099-option-a.png',
    explanation:
      '**Key point:** Vector addition must satisfy\n$$\\vec F=\\vec F_1+\\vec F_2.$$ \nSo $\\vec F_2$ should be the vector that, when added to $\\vec F_1$, gives resultant $\\vec F$ in both magnitude and direction.\n\nAmong the given diagrams, only option A matches this vector-sum condition.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use head-to-tail vector addition idea.',
      'Check both direction and relative length of the missing vector.',
      'Find the option where $\\vec F_1+\\vec F_2$ points exactly as $\\vec F$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-099-question.png'],
  },
  {
    id: 'nl-100',
    type: 'multiple_choice',
    question:
      "An object of weight 120 N on the Earth's surface is taken to the Moon's surface where the acceleration due to gravity is $\\frac{1}{6}$ of that at the Earth's surface. What are the mass and the weight of the object at the Moon's surface? (Take the acceleration due to gravity on the Earth's surface to be $10\\ \\text{m s}^{-2}$.)",
    options: ['mass 2 kg; weight 20 N', 'mass 2 kg; weight 120 N', 'mass 12 kg; weight 20 N', 'mass 12 kg; weight 120 N'],
    answer: 'mass 12 kg; weight 20 N',
    explanation:
      '**Key point:** Mass is invariant, while weight depends on local gravitational acceleration.\n\nOn Earth:\n$$W=mg\\Rightarrow 120=m(10)\\Rightarrow m=12\\ \\text{kg}.$$ \nOn Moon, $g$ is one-sixth, so weight is one-sixth:\n$$W_{moon}=120\\times\\frac{1}{6}=20\\ \\text{N}.$$ \nMass remains $12\\ \\text{kg}$.\n\n**Conclusion:** mass 12 kg and weight 20 N, so option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use Earth data first to find mass from $W=mg$.',
      'Mass does not change with location.',
      'Moon weight scales with moon gravity (one-sixth).',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-101',
    type: 'multiple_choice',
    question:
      'A man pushes a supermarket trolley with a constant horizontal force for $t_1$ seconds, and then releases the trolley. The velocity-time graph of the trolley is shown above. Assume that the friction between the trolley and the ground is constant, which of the following graphs (in dotted lines) best represents the variation of the velocity of the trolley with time if the man repeats the action with a stronger force?',
    options: [
      '/physics/exercises/newton-laws/nl-101-option-a.png',
      '/physics/exercises/newton-laws/nl-101-option-b.png',
      '/physics/exercises/newton-laws/nl-101-option-c.png',
      '/physics/exercises/newton-laws/nl-101-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-101-option-d.png',
    explanation:
      '**Key point:** During push, stronger applied force gives larger acceleration; after release, only friction acts, so deceleration stays the same.\n\nFor $0\\le t\\le t_1$, slope of $v$-$t$ graph increases with stronger push (greater acceleration).\n\nFor $t>t_1$, friction is unchanged, so the negative slope (deceleration) remains the same as before.\n\nThus the correct dotted graph has steeper rise before $t_1$ and same falling slope after $t_1$.\n\n**Conclusion:** option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Slope of $v$-$t$ graph equals acceleration.',
      'Split analysis into before and after release at $t_1$.',
      'After release, only friction determines deceleration.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-101-question.png'],
  },
  {
    id: 'nl-102',
    type: 'multiple_choice',
    question:
      'A spring balance is connected to the wall by a light string. A horizontal force $F$ is acting on the spring balance as shown below. The spring balance shows a reading of 5 N. Assume that the mass of the balance can be neglected, what is the magnitude of the tension in the string?',
    options: ['zero', '2.5 N', '5 N', '10 N'],
    answer: '5 N',
    explanation:
      '**Key point:** A spring balance reading directly gives the tension force in the string.\n\nGiven reading = 5 N,\n$$T=5\\ \\text{N}.$$ \n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Recall what quantity a spring balance measures.',
      'Light string implies tension is uniform along the string.',
      'Use the reading directly as the tension value.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-102-question.png'],
  },
  {
    id: 'nl-103',
    type: 'multiple_choice',
    question:
      'A block of mass 4 kg remains at rest on a horizontal rough surface when strings $S_1$ and $S_2$ of tensions 100 N and 30 N respectively are pulling it. If $S_1$ is broken, what is the magnitude of the net force acting on the block?',
    options: ['zero', '30 N', '50 N', '70 N'],
    answer: 'zero',
    explanation:
      '**Key point:** Static friction adjusts in magnitude and direction to keep the block at rest (up to its limit).\n\nInitially, to balance 100 N and 30 N pulls, friction is 70 N to the right.\nAfter $S_1$ breaks, only the 30 N pull remains, so static friction reverses and becomes 30 N to the left.\n\nHence forces balance and resultant force is zero.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Before breaking, determine the friction needed for equilibrium.',
      'After breaking, only one pull remains.',
      'Static friction can change both magnitude and direction to maintain rest.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-103-question.png'],
  },
  {
    id: 'nl-104',
    type: 'multiple_choice',
    question:
      'In the figure above, a ball is hanging inside a car by a string. When the car accelerates on a horizontal road, the string makes an angle of $10^{\\circ}$ with the vertical. Find the magnitude of the acceleration of the car. (Take $g$ to be $10\\ \\text{m s}^{-2}$.)',
    options: [
      '$1.74\\ \\text{m s}^{-2}$',
      '$1.76\\ \\text{m s}^{-2}$',
      '$5.67\\ \\text{m s}^{-2}$',
      '$9.85\\ \\text{m s}^{-2}$',
    ],
    answer: '$1.76\\ \\text{m s}^{-2}$',
    explanation:
      '**Key point:** Resolve tension into horizontal and vertical components.\n\nHorizontal:\n$$T\\sin\\theta=ma.$$ \nVertical equilibrium:\n$$T\\cos\\theta=mg.$$ \nDivide equations:\n$$\\tan\\theta=\\frac{a}{g}\\Rightarrow a=g\\tan\\theta.$$ \nSo\n$$a=10\\tan10^{\\circ}\\approx1.76\\ \\text{m s}^{-2}.$$\n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Write horizontal and vertical equations separately.',
      'Use ratio to eliminate $T$.',
      'Substitute $g=10$ and $\\theta=10^\\circ$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-104-question.png'],
  },
  {
    id: 'nl-105',
    type: 'multiple_choice',
    question:
      'An object is projected vertically upwards. $F$ denotes the magnitude of the net force acting on the object and $W$ denotes the magnitude of the weight of the object. If air resistance is not negligible, which of the following descriptions are correct?\n\n(1) When the object is moving up, $F$ is greater than $W$.\n(2) When the object is at the highest point, $F$ is equal to $W$.\n(3) When the object is moving down, $F$ is smaller than $W$.',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1), (2) and (3)',
    explanation:
      '**Key point:** Air resistance always opposes motion.\n\n(1) Moving up: both weight and air resistance act downward, so net force magnitude is\n$$F=W+R>W.$$ \n\n(2) At highest point: instantaneous speed is zero, so air resistance is zero, giving\n$$F=W.$$ \n\n(3) Moving down: weight is downward and air resistance is upward, so\n$$F=W-R<W.$$ \n\n**Conclusion:** all (1), (2), and (3) are correct, so option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Set force directions separately for upward and downward motion.',
      'At top point, velocity is instantaneously zero.',
      'Compare net-force magnitude with $W$ in each stage.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-106',
    type: 'multiple_choice',
    question:
      'A man is standing in a lift. The lift is initially at rest. When the lift starts to move upward, the man feels heavier. Which of the following statements is/are correct?\n\n(1) The gravitational force acting on the man increases.\n(2) The gravitational force acting on the lift increases.\n(3) The force acting on the man by the floor of the lift increases.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(3) only',
    explanation:
      '**Key point:** “Feeling heavier” means the normal reaction from the floor increases, not weight.\n\n(1) False: gravitational force on the man ($mg$) is unchanged.\n\n(2) False: gravitational force on the lift (its weight) is unchanged.\n\n(3) True: when the lift accelerates upward, for the man\n$$R-mg=ma,$$\nso $R>mg$. The increased normal reaction makes him feel heavier.\n\n**Conclusion:** only (3) is correct, so option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Distinguish true weight ($mg$) from apparent weight (normal reaction).',
      'Upward acceleration implies $R-mg=ma$.',
      'If $a>0$ upward, then $R>mg$.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-107',
    type: 'multiple_choice',
    question:
      'A man of mass 50 kg stands still on a balance in a lift which is initially moving downwards. Between $t=0$ and 6 s, the reading $R$ of the balance varies with time as shown in the graph below. Take $g$ to be $10\\ \\text{m s}^{-2}$. Which of the following statements is/are correct?\n\n(1) Between $t=0$ and 3 s, the net force acting on the man is 400 N.\n(2) At $t=3\\ \\text{s}$, the lift starts to move upwards.\n(3) Between $t=3\\ \\text{s}$ and 6 s, the lift is moving at a constant velocity.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(3) only',
    explanation:
      '**Key point:** For the man, vertical net force is $W-R$ where $W=mg=500$ N.\n\nFrom $t=0$ to 3 s, graph shows $R=400$ N, so\n$$F_{net}=W-R=500-400=100\\ \\text{N},$$\nnot 400 N. So (1) is false.\n\nAt $t=3$ s and after, $R=500$ N, so net force is zero and acceleration is zero. The lift therefore continues at constant velocity (still downward from initial condition), not starting upward. So (2) is false and (3) is true.\n\n**Conclusion:** only (3) is correct, so option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Compute weight first: $W=mg$.',
      'Use $F_{net}=W-R$ for the man.',
      'Zero net force implies constant velocity, not necessarily upward motion.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-107-question.png'],
  },
  {
    id: 'nl-108',
    type: 'multiple_choice',
    question:
      'A man of mass 50 kg stands still on a balance in a lift which is initially moving downwards. Between $t=0$ and 6 s, the reading $R$ of the balance varies with time as shown in the graph below. Take $g$ to be $10\\ \\text{m s}^{-2}$. What is the acceleration of the lift between $t=0$ and 3 s?',
    options: [
      '$2\\ \\text{m s}^{-2}$',
      '$6\\ \\text{m s}^{-2}$',
      '$8\\ \\text{m s}^{-2}$',
      '$10\\ \\text{m s}^{-2}$',
    ],
    answer: '$2\\ \\text{m s}^{-2}$',
    explanation:
      '**Key point:** For the man, net downward force is $mg-R$.\n\nApply Newton’s second law:\n$$mg-R=ma.$$ \nSubstitute:\n$$(50\\times10)-400=50a$$\n$$100=50a\\Rightarrow a=2\\ \\text{m s}^{-2}.$$ \n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use the reading $R=400$ N for $0$ to $3$ s from the graph.',
      'Compute weight: $mg=50\\times10$.',
      'Substitute into $mg-R=ma$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-108-question.png'],
  },
  {
    id: 'nl-109',
    type: 'multiple_choice',
    question:
      'In the figure shown, horizontal force $F$ is applied to a block which is hung by a string under the ceiling. At equilibrium, the string makes an angle $\\theta$ with the vertical and the tension in the string is $T$. The weight of the block is',
    options: ['$F\\sin\\theta$', '$F\\cos\\theta$', '$T\\sin\\theta$', '$T\\cos\\theta$'],
    answer: '$T\\cos\\theta$',
    explanation:
      '**Key point:** Resolve the tension $T$ into components and use equilibrium.\n\nHorizontal balance:\n$$T\\sin\\theta=F.$$ \nVertical balance:\n$$T\\cos\\theta=W.$$ \nSo the weight is $W=T\\cos\\theta$.\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Draw horizontal and vertical components of tension.',
      'Use equilibrium separately in each direction.',
      'Weight is the vertical downward force.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-109-question.png'],
  },
  {
    id: 'nl-110',
    type: 'multiple_choice',
    question:
      'On a horizontal surface, horizontal force $F$ is exerted on a block as shown in the figure above. When $F=25\\ \\text{N}$, the block remains at rest. Which of the following statements must be correct?',
    options: [
      'If $F>25\\ \\text{N}$, the block will start to move.',
      'If $F=25\\ \\text{N}$, the friction acting on the block will be greater than 25 N.',
      'If $F=20\\ \\text{N}$, the friction acting on the block will be 20 N.',
      'If $F=0$, the friction acting on the block will be 25 N.',
    ],
    answer: 'If $F=20\\ \\text{N}$, the friction acting on the block will be 20 N.',
    explanation:
      '**Key point:** Static friction adjusts to match applied force up to its maximum value.\n\nGiven the block is at rest at $F=25$ N, static friction can provide at least 25 N.\n\nA is not must-correct: if maximum static friction is greater than 25 N, the block may still remain at rest for some $F>25$ N.\n\nB is false: at rest with $F=25$ N, friction is 25 N (not greater).\n\nC is true: for $F=20$ N (below available static limit), friction equals 20 N opposite the pull.\n\nD is false: if $F=0$, friction is 0.\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use the rule: static friction equals applied force until its maximum.',
      'From rest at 25 N, infer the minimum possible static friction limit.',
      'Check each option against this behavior.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-110-question.png'],
  },
  {
    id: 'nl-111',
    type: 'multiple_choice',
    question:
      'The photo above shows an ant hanging upside down from the ceiling. The ant is holding a 500 mg block using its jaws. The ceiling, the ant and the block are at rest. Which of the following statements is/are correct?\n\n(1) The force acting on the ant by the ceiling points upwards.\n(2) The force acting on the block by the ant and the weight of the block are an action and reaction pair.\n(3) The net force acting on the ant is zero.',
    options: ['(2) only', '(3) only', '(1) and (2) only', '(1) and (3) only'],
    answer: '(1) and (3) only',
    explanation:
      '**Key point:** At rest implies zero net force, and third-law pairs act on different bodies.\n\n(1) True: the ceiling’s force on the ant is upward, supporting the ant (and transmitted load).\n\n(2) False: both listed forces act on the block, so they are not an action-reaction pair.\n\n(3) True: since the ant is at rest, resultant force on it is zero.\n\n**Conclusion:** (1) and (3) only, so option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'At rest means resultant force is zero.',
      'Check third-law criterion: forces must act on different bodies.',
      'Identify support force direction from the ceiling on the ant.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-111-question.png'],
  },
  {
    id: 'nl-112',
    type: 'multiple_choice',
    question: 'Three forces are acting on particle $P$. In which of the following diagrams is the net force on $P$ not zero?',
    options: [
      '/physics/exercises/newton-laws/nl-112-option-a.png',
      '/physics/exercises/newton-laws/nl-112-option-b.png',
      '/physics/exercises/newton-laws/nl-112-option-c.png',
      '/physics/exercises/newton-laws/nl-112-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-112-option-c.png',
    explanation:
      '**Key point:** If three forces have zero resultant, their vectors can be arranged head-to-tail to form a closed triangle.\n\nIn option C, the three forces cannot form a closed triangle, so their vector sum is not zero.\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use vector addition head-to-tail.',
      'Zero resultant requires a closed polygon (triangle here).',
      'Find the option where closure is impossible.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-113',
    type: 'multiple_choice',
    question:
      'A block on a rough horizontal plane is subjected to an applied force $F$. Which one of the graphs below best represents the variation of the acceleration $a$ of the block with the applied force $F$?',
    options: [
      '/physics/exercises/newton-laws/nl-113-option-a.png',
      '/physics/exercises/newton-laws/nl-113-option-b.png',
      '/physics/exercises/newton-laws/nl-113-option-c.png',
      '/physics/exercises/newton-laws/nl-113-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-113-option-a.png',
    explanation:
      '**Key point:** Applying Newton’s second law on a rough surface gives\n$$F-f=ma\\Rightarrow a=\\frac{1}{m}F-\\frac{f}{m}.$$ \nThis is a straight-line relation of $a$ versus $F$ with positive slope $\\frac{1}{m}$ and negative $a$-intercept $-\\frac{f}{m}$.\n\nSo the correct graph is the one matching that linear form.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Rearrange $F-f=ma$ into $a$ as subject.',
      'Identify slope and intercept from linear form.',
      'Choose the graph with positive slope and negative $y$-intercept.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-114',
    type: 'multiple_choice',
    question:
      'A lift of mass $M$ carries a passenger of mass $m$. When the lift rises with a uniform acceleration $a$, the normal reaction between the passenger and the floor of the lift is',
    options: ['$mg$', '$m(g-a)$', '$m(g+a)$', '$m(g+a)-Ma$'],
    answer: '$m(g+a)$',
    explanation:
      '**Key point:** Apply Newton’s second law to the passenger (not the whole lift system).\n\nFor the passenger accelerating upward with acceleration $a$:\n$$R-mg=ma.$$ \nHence\n$$R=mg+ma=m(g+a).$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Draw forces on the passenger only.',
      'Take upward as positive.',
      'Use $R-mg=ma$ and rearrange.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-115',
    type: 'multiple_choice',
    question:
      'Two bodies $A$ and $B$ are connected by a light string $P$ as shown in the figure. The weights of $A$ and $B$ are 10 N and 4 N respectively. $B$ is connected to the roof by another light string $Q$. If string $Q$ is cut and the two bodies allowed to fall, the net force acting on $B$ during free fall is',
    options: ['0 N', '4 N', '6 N', '10 N'],
    answer: '4 N',
    explanation:
      '**Key point:** In free fall, supporting strings become slack and do not provide tension.\n\nDuring free fall, the only force acting on body $B$ is its own weight.\nGiven weight of $B$ is 4 N, the net force on $B$ is 4 N (downward).\n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Think about tension in strings during free fall.',
      'If string is slack, tension is zero.',
      'Net force then equals the body’s weight.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-115-question.png'],
  },
  {
    id: 'nl-116',
    type: 'multiple_choice',
    question:
      'An object of mass 4 kg is placed on a smooth plane inclined at $30^{\\circ}$ to the horizontal. It is connected by a light string passing over a frictionless pulley to another object of mass 1 kg, as shown above. Take $g$ to be $10\\ \\text{m s}^{-2}$. If the system is released, the tension in the string will be',
    options: ['12 N', '15 N', '18 N', '25 N'],
    answer: '12 N',
    explanation:
      '**Key point:** Write Newton’s second-law equations for both masses along their motion directions.\n\nFor 4 kg on incline:\n$$(4\\times10\\sin30^{\\circ})-T=4a.$$ \nFor 1 kg hanging mass:\n$$T-10=1a.$$ \nSolving simultaneously gives\n$$a=2\\ \\text{m s}^{-2},\\quad T=12\\ \\text{N}.$$\n\n**Conclusion:** option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Resolve the 4 kg weight component along the incline.',
      'Set equations for both bodies using the same $a$.',
      'Solve two linear equations for $a$ and $T$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-116-question.png'],
  },
  {
    id: 'nl-117',
    type: 'multiple_choice',
    question:
      'A block of mass 3 kg is tied to another block of mass 5 kg with a string passing over a fixed smooth pulley. The weight of the pulley is negligible. Take $g$ to be $10\\ \\text{m s}^{-2}$. When the two blocks are released to move under the action of gravity, the vertical upward force acting on the axle of the pulley is',
    options: ['60 N', '72 N', '75 N', '80 N'],
    answer: '75 N',
    explanation:
      '**Key point:** First find tension using two-body equations, then axle force equals sum of the two upward tensions on pulley.\n\nFor 5 kg mass:\n$$50-T=5a.$$ \nFor 3 kg mass:\n$$T-30=3a.$$ \nSolving gives\n$$a=2.5\\ \\text{m s}^{-2},\\quad T=37.5\\ \\text{N}.$$ \nPulley is pulled downward by two string tensions, so axle must provide equal upward force:\n$$F_{axle}=2T=75\\ \\text{N}.$$\n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Write one equation for each hanging mass.',
      'Solve simultaneously for $a$ and $T$.',
      'Axle reaction balances both tension pulls on pulley.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-117-question.png'],
  },
  {
    id: 'nl-118',
    type: 'multiple_choice',
    question:
      'David weighs a load with a spring balance inside a lift. Before the lift moves, the scale reads 50 N. The lift goes down and then stops. The reading on the scale is',
    options: [
      'more than 50 N when the lift starts, and remains steady until it comes to rest.',
      'less than 50 N when the lift starts, and remains steady until it comes to rest.',
      'more than 50 N as the lift starts, and less than 50 N as it comes to rest.',
      'less than 50 N as the lift starts, and more than 50 N as it comes to rest.',
    ],
    answer: 'less than 50 N as the lift starts, and more than 50 N as it comes to rest.',
    explanation:
      '**Key point:** Spring balance reading is tension/normal force (apparent weight).\n\nAt start of downward motion, lift accelerates downward, so\n$$mg-T=ma\\Rightarrow T<mg,$$\nthus reading is less than 50 N.\n\nWhen lift is about to stop while moving downward, acceleration is upward (deceleration downward), so\n$$T-mg=ma\\Rightarrow T>mg,$$\nthus reading is more than 50 N.\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Reading corresponds to apparent weight, not always true weight.',
      'Downward acceleration gives smaller reading.',
      'Upward acceleration (while stopping) gives larger reading.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-119',
    type: 'multiple_choice',
    question:
      'A block of mass $m$ moves with constant acceleration $a$ down an inclined plane making an angle $\\theta$ with the horizontal. The friction acting on the block is',
    options: ['$mg-ma$', '$mg-ma\\sin\\theta$', '$mg\\sin\\theta-ma$', '$(mg-ma)\\sin\\theta$'],
    answer: '$mg\\sin\\theta-ma$',
    explanation:
      '**Key point:** Along the slope, component of weight down the plane is $mg\\sin\\theta$ and friction acts up the plane.\n\nApply Newton’s second law along the plane:\n$$mg\\sin\\theta-f=ma.$$ \nSo\n$$f=mg\\sin\\theta-ma.$$ \n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Resolve weight along the incline.',
      'Take downhill direction as positive.',
      'Rearrange $mg\\sin\\theta-f=ma$ to solve for friction.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-120',
    type: 'multiple_choice',
    question:
      'Peter has a mass of 40 kg. When he measures his weight with a compression balance inside a lift, he discovers that his weight indicated by the balance is 360 N. Take $g$ to be $10\\ \\text{m s}^{-2}$, the lift is probably\n\n(1) moving upwards and accelerating at $1\\ \\text{m s}^{-2}$.\n(2) moving upwards and decelerating at $1\\ \\text{m s}^{-2}$.\n(3) moving downwards and accelerating at $1\\ \\text{m s}^{-2}$.\n(4) moving downwards and decelerating at $1\\ \\text{m s}^{-2}$.',
    options: [
      '(1) and (3) only',
      '(1) and (4) only',
      '(2) and (3) only',
      '(2) and (4) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      '**Key point:** Balance reading is normal reaction $R$, not true weight.\n\nHere $mg=40\\times10=400$ N and $R=360$ N, so $R<mg$.\nThus acceleration is downward.\n\nMagnitude from\n$$mg-R=ma$$\n$$400-360=40a\\Rightarrow a=1\\ \\text{m s}^{-2}.$$ \nDownward acceleration corresponds to:\n- moving downward and accelerating, or\n- moving upward and decelerating.\n\n**Conclusion:** (2) and (3) only, so option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'First compute true weight $mg$.',
      'Compare reading $R$ with $mg$ to infer acceleration direction.',
      'Use $mg-R=ma$ to get acceleration magnitude.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-121',
    type: 'multiple_choice',
    question:
      'Three blocks $A$, $B$ and $C$ of masses $m$, $2m$ and $2m$ respectively are placed on a smooth horizontal ground as shown in the figure. A constant horizontal force $F$ of 20 N is applied to block $A$ so that the three blocks move with the same acceleration towards the right. What is the resultant force acting on block $B$?',
    options: ['4 N', '6 N', '8 N', '12 N'],
    answer: '8 N',
    explanation:
      '**Key point:** Find common acceleration from the whole system, then use $F_{net}=ma$ for block $B$.\n\nTotal mass:\n$$m+2m+2m=5m.$$ \nSo acceleration:\n$$a=\\frac{F}{5m}=\\frac{20}{5m}.$$ \nNet force on block $B$ (mass $2m$):\n$$F_B=(2m)a=(2m)\\left(\\frac{20}{5m}\\right)=8\\ \\text{N}.$$\n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Treat all three blocks as one system to get $a$.',
      'Then isolate block $B$ only.',
      'Use $F_{net,B}=m_B a$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-121-question.png'],
  },
  {
    id: 'nl-122',
    type: 'multiple_choice',
    question:
      'A bob is connected to a light string attached to the ceiling. The string then swings in a vertical plane. When it is at the position shown, which of the following diagrams best represents the forces acting on the bob? Neglect air resistance.',
    options: [
      '/physics/exercises/newton-laws/nl-122-option-a.png',
      '/physics/exercises/newton-laws/nl-122-option-b.png',
      '/physics/exercises/newton-laws/nl-122-option-c.png',
      '/physics/exercises/newton-laws/nl-122-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-122-option-a.png',
    explanation:
      '**Key point:** For a swinging bob in air (neglecting air resistance), only two real forces act:\n- tension along the string toward the pivot,\n- weight vertically downward.\n\nNo separate “centripetal force” should be added as an extra force; centripetal effect comes from the resultant of real forces.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'List only real interaction forces on the bob.',
      'Tension is along the string toward the pivot.',
      'Weight is always vertical downward.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-122-question.png'],
  },
  {
    id: 'nl-123',
    type: 'multiple_choice',
    question:
      'The resultant of two forces $F_1$ and $F_2$ acting at a point has a minimum value of 7 N and a maximum value of 17 N. When the two forces act at right angles to each other, the magnitude of their resultant is',
    options: ['10 N', '13 N', '18 N', '22 N'],
    answer: '13 N',
    explanation:
      '**Key point:** Maximum resultant occurs when two forces are in same direction; minimum when opposite.\n\nSo\n$$F_1+F_2=17,\\quad F_1-F_2=7.$$ \nSolving:\n$$F_1=12\\ \\text{N},\\quad F_2=5\\ \\text{N}.$$ \nAt right angles:\n$$R=\\sqrt{F_1^2+F_2^2}=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\ \\text{N}.$$ \n\n**Conclusion:** option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use max/min resultant conditions to find $F_1$ and $F_2$.',
      'Set up two equations: sum and difference.',
      'Then apply Pythagoras for perpendicular forces.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-123-question.png'],
  },
  {
    id: 'nl-124',
    type: 'multiple_choice',
    question:
      'The above figure shows a toy with a propeller driven by a motor inside the toy connected by a light string to a fixed point on the ceiling. The toy remains stationary when the motor is on. Which of the following diagrams correctly represents the forces acting on the toy?',
    options: [
      '/physics/exercises/newton-laws/nl-124-option-a.png',
      '/physics/exercises/newton-laws/nl-124-option-b.png',
      '/physics/exercises/newton-laws/nl-124-option-c.png',
      '/physics/exercises/newton-laws/nl-124-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-124-option-d.png',
    explanation:
      '**Key point:** Since the toy is stationary, all forces must balance.\n\nForces on the toy are:\n- weight vertically downward,\n- tension along the string toward the ceiling point,\n- propeller thrust in the opposite direction needed to complete equilibrium.\n\nThe correct free-body diagram is the one showing these three forces with correct directions.\n\n**Conclusion:** option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'At rest means vector sum of all forces is zero.',
      'Tension is always along the string.',
      'Weight is always vertical downward.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-124-question.png'],
  },
  {
    id: 'nl-125',
    type: 'multiple_choice',
    question:
      'When given a slight push, a block moves freely with constant velocity down a plane inclined at $20^{\\circ}$ to the horizontal. If the mass of the block is 0.5 kg, find the force parallel to the inclined plane to pull the block up the plane with constant velocity.',
    options: ['1.7 N', '3.4 N', '4.7 N', '6.7 N'],
    answer: '3.4 N',
    explanation:
      '**Key point:** Constant velocity means zero acceleration, so net force along the incline is zero in each case.\n\nWhen moving down with constant velocity:\n$$f=mg\\sin\\theta=(0.5)(9.81)\\sin20^{\\circ}=1.68\\ \\text{N}.$$ \n\nTo pull it up with constant velocity, both downslope component of weight and friction oppose motion:\n$$F=mg\\sin\\theta+f=1.68+1.68\\approx3.36\\ \\text{N}\\approx3.4\\ \\text{N}.$$ \n\n**Conclusion:** option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use zero-acceleration condition along the slope.',
      'First deduce friction from downward constant-speed case.',
      'For upward constant speed, add resisting forces.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-126',
    type: 'multiple_choice',
    question:
      'Two blocks $A$ and $B$ are connected by a light string which passes over a smooth, fixed pulley as shown in the figure. The maximum friction between any two surfaces is 1.5 N. If a horizontal force $F$ is applied to block $B$, find the minimum value of this applied force for moving $B$.',
    options: ['1.5 N', '3.0 N', '4.5 N', '6.0 N'],
    answer: '4.5 N',
    explanation:
      '**Key point:** At the threshold of motion, all friction forces take their maximum values.\n\nFor block $A$ (limiting case):\n$$T=f_1=1.5\\ \\text{N}.$$ \nFor block $B$, minimum applied force must overcome three opposing contributions in this setup:\n$$F=f_1+T+f_2=1.5+1.5+1.5=4.5\\ \\text{N}.$$ \n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use limiting-friction condition for minimum force to start motion.',
      'Find string tension from block $A$ first.',
      'Sum all resisting forces on block $B$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-126-question.png'],
  },
  {
    id: 'nl-127',
    type: 'multiple_choice',
    question:
      'Two blocks $A$ and $B$ of mass ratio 2:1 are placed on a horizontal frictionless surface as shown above. $P$ and $Q$ are horizontal forces acting on $A$ and $B$ respectively ($P>Q$) so that the blocks move to the left with constant acceleration. Find the force acting on $B$ by $A$.',
    options: [
      '$\\frac{P-Q}{3}$',
      '$\\frac{P+Q}{3}$',
      '$\\frac{2(P-Q)}{3}$',
      '$\\frac{2P+Q}{3}$',
    ],
    answer: '$\\frac{2P+Q}{3}$',
    explanation:
      '**Key point:** First find system acceleration, then apply Newton’s second law to block $B$.\n\nFor the two-block system (masses $2m$ and $m$):\n$$P-Q=(2m+m)a\\Rightarrow a=\\frac{P-Q}{3m}.$$ \nLet contact force on $B$ by $A$ be $R$.\nFor block $B$:\n$$P-R=ma.$$ \nSo\n$$R=P-m\\left(\\frac{P-Q}{3m}\\right)=\\frac{2P+Q}{3}.$$ \n\n**Conclusion:** option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use total mass to get common acceleration first.',
      'Then isolate block $B$ only.',
      'Substitute $a$ to solve for contact force.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-127-question.png'],
  },
  {
    id: 'nl-128',
    type: 'multiple_choice',
    question:
      'Amy holds one end of a string to which a block of mass 8 kg is tied at the other end. She raises the block with a constant acceleration by pulling the string in an upward direction. If the maximum tension that the string can withstand is 100 N, find the maximum acceleration of the block before the string breaks.',
    options: [
      '$2.7\\ \\text{m s}^{-2}$',
      '$3.8\\ \\text{m s}^{-2}$',
      '$4.6\\ \\text{m s}^{-2}$',
      '$7.2\\ \\text{m s}^{-2}$',
    ],
    answer: '$2.7\\ \\text{m s}^{-2}$',
    explanation:
      '**Key point:** At breaking threshold, tension equals maximum value.\n\nUse\n$$T_{max}-mg=ma.$$ \nSubstitute values:\n$$100-(8)(9.81)=8a$$\n$$a=2.69\\ \\text{m s}^{-2}\\approx2.7\\ \\text{m s}^{-2}.$$ \n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use the maximum tension in Newton’s second law.',
      'Take upward as positive.',
      'Round to one decimal place.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-129',
    type: 'multiple_choice',
    question:
      'Two books $P$ and $Q$ are placed on a horizontal table surface as shown. A horizontal force $F$ is applied to $P$ but the system remains stationary. Which of the following statements is/are correct?\n\n(1) The frictional force acting on $Q$ by the table surface is greater than $F$.\n(2) The frictional force acting on $P$ by $Q$ is towards the right.\n(3) The system would remain stationary if $F$ is applied to $Q$ instead.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      '**Key point:** Since the system is stationary, each body has zero net force.\n\n(1) False: friction on $Q$ by table balances transmitted force and is not greater than $F$ in this static condition.\n\n(2) True: if $F$ pushes $P$ toward one side, friction on $P$ by $Q$ opposes that tendency and is toward the right (as stated).\n\n(3) True under the same static-friction limit: applying $F$ to $Q$ can still leave the system stationary.\n\n**Conclusion:** (2) and (3) only, so option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use zero net force on each book in static condition.',
      'Friction direction opposes relative slipping tendency.',
      'Check statement (1) against force balance magnitude.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-129-question.png'],
  },
  {
    id: 'nl-130',
    type: 'multiple_choice',
    question:
      'A trolley of mass 0.4 kg moves with a certain acceleration down a runway which is inclined to the horizontal at $12^{\\circ}$. If the angle of inclination is increased to $18^{\\circ}$, the acceleration of the trolley would be doubled. Find the average frictional force, assuming the same in both cases, acting on the trolley.',
    options: ['0.35 N', '0.39 N', '0.42 N', '0.47 N'],
    answer: '0.42 N',
    explanation:
      '**Key point:** Write force equations for both inclinations and eliminate $a$.\n\nAt $12^{\\circ}$:\n$$(0.4\\times9.81)\\sin12^{\\circ}-f=(0.4)a.$$ \nAt $18^{\\circ}$ with doubled acceleration:\n$$(0.4\\times9.81)\\sin18^{\\circ}-f=(0.4)(2a).$$ \nCompute $(2\\times\\text{first})-(\\text{second})$:\n$$f=2(0.4\\times9.81)\\sin12^{\\circ}-(0.4\\times9.81)\\sin18^{\\circ}\\approx0.42\\ \\text{N}.$$ \n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Set up one equation for each incline angle.',
      'Use the condition: second acceleration is twice the first.',
      'Eliminate $a$ algebraically to solve for friction.',
    ],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-131',
    type: 'multiple_choice',
    question:
      'A weight $W$ is suspended from the ceiling by inextensible strings as shown. String $OA$ makes an angle $\\theta$ with the vertical while string $OB$ makes the same angle $\\theta$ with the ceiling. Find the tension in $OB$.',
    options: ['$W\\sin\\theta$', '$W/\\sin\\theta$', '$W\\cos\\theta$', '$W/\\cos\\theta$'],
    answer: '$W\\sin\\theta$',
    explanation:
      '**Key point:** Use equilibrium at the junction.\n\nHorizontal and vertical balances with the two string directions give\n$$T_{OB}=W\\sin\\theta.$$ \n\n**Conclusion:** option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Resolve both string tensions into horizontal and vertical components.',
      'Use both equilibrium equations at the joint.',
      'Eliminate the other string tension to get $T_{OB}$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-131-question.png'],
  },
  {
    id: 'nl-132',
    type: 'multiple_choice',
    question:
      'Three blocks $A$, $B$ and $C$, connected by light strings, are placed on a smooth horizontal surface as shown. A constant force $F$ is applied to block $A$ so that the whole system travels to the right with acceleration. If a lump of plasticine is placed on $B$ and it moves together with $B$ while the applied force $F$ remains unchanged, how would the tensions $T_1$ and $T_2$ in the two strings change?',
    options: [
      '$T_1$ decreases, $T_2$ increases',
      '$T_1$ decreases, $T_2$ decreases',
      '$T_1$ increases, $T_2$ increases',
      '$T_1$ increases, $T_2$ decreases',
    ],
    answer: '$T_1$ increases, $T_2$ decreases',
    explanation:
      '**Key point:** Added plasticine increases total mass, so common acceleration decreases. But $T_1$ pulls a larger trailing mass group, so it increases; $T_2$ is tied to accelerating block $C$ with smaller acceleration, so it decreases.\n\n**Conclusion:** option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'First infer how common acceleration changes when mass increases with same $F$.',
      'Think of what mass each tension has to accelerate.',
      'Compare before and after adding plasticine.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-132-question.png'],
  },
  {
    id: 'nl-133',
    type: 'multiple_choice',
    question:
      'A small bob $P$ is suspended by an inextensible string from the ceiling of a vehicle. The vehicle is moving on a straight horizontal road and the string makes an angle $\\theta$ with the vehicle as shown in the figure. Which of the following description of the acceleration of the vehicle is correct?',
    options: [
      '$g\\sin\\theta$ to the left',
      '$g\\sin\\theta$ to the right',
      '$g\\tan\\theta$ to the left',
      '$g\\tan\\theta$ to the right',
    ],
    answer: '$g\\tan\\theta$ to the right',
    explanation:
      '**Key point:** For a suspended bob in a horizontally accelerating vehicle, component relation gives\n$$\\tan\\theta=\\frac{a}{g}\\Rightarrow a=g\\tan\\theta.$$ \nDirection is opposite to the bob’s tilt; from the shown setup this is to the right.\n\n**Conclusion:** option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use force components on bob: horizontal resultant provides $ma$.',
      'Apply $\\tan\\theta=a/g$.',
      'Acceleration direction is opposite to the tilt direction of the string.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-133-question.png'],
  },
  {
    id: 'nl-134',
    type: 'multiple_choice',
    question:
      'A block $X$ is placed on top of another block $Y$, which rests on a horizontal surface. The blocks have the same mass $m$. The block $Y$ is pulled by a horizontal force $F$ as shown. Assume that all contact surfaces are smooth. What is the acceleration of each block?',
    options: [
      '$a_X=0$, $a_Y=\\frac{F}{m}$',
      '$a_X=0$, $a_Y=\\frac{F}{2m}$',
      '$a_X=\\frac{F}{m}$, $a_Y=\\frac{F}{m}$',
      '$a_X=\\frac{F}{2m}$, $a_Y=\\frac{F}{2m}$',
    ],
    answer: '$a_X=0$, $a_Y=\\frac{F}{m}$',
    explanation:
      '**Key point:** With smooth contact between $X$ and $Y$, no horizontal force is transmitted to $X$.\n\nSo $X$ has zero horizontal acceleration, while $Y$ alone is accelerated by $F$:\n$$a_Y=\\frac{F}{m}.$$ \n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Smooth contact means no frictional horizontal interaction.',
      'Check horizontal forces on $X$ first.',
      'Then apply $F=ma$ to block $Y$.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-134-question.png'],
  },
  {
    id: 'nl-135',
    type: 'multiple_choice',
    question:
      'A 2 kg block is placed on top of a 3 kg block on a smooth horizontal surface as shown. A horizontal force of 6 N is applied to the 3 kg block such that the two blocks move together. The friction acting between the two blocks is',
    options: ['0 N', '1.2 N', '2.4 N', '3.6 N'],
    answer: '2.4 N',
    explanation:
      '**Key point:** If blocks move together, they share acceleration\n$$a=\\frac{6}{2+3}=1.2\\ \\text{m s}^{-2}.$$ \nFriction on the 2 kg top block provides its acceleration:\n$$f=ma=2\\times1.2=2.4\\ \\text{N}.$$ \n\n**Conclusion:** option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Find system acceleration first.',
      'Then use top block alone to find friction.',
      'Friction is the only horizontal force on the top block.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-135-question.png'],
  },
  {
    id: 'nl-136',
    type: 'multiple_choice',
    question:
      'Billy of mass 50 kg stands still on a weighing scale in a lift. The lift starts to ascend at $t=0$ and comes to rest at $t=24\\ \\text{s}$. The graph shows how the reading of the weighing scale varies within this time interval. What is the corresponding height ascended by the lift? (Take the acceleration due to gravity to be $10\\ \\text{m s}^{-2}$.)',
    options: ['192 m', '144 m', '128 m', '96 m'],
    answer: '128 m',
    explanation:
      '**Key point:** Convert scale readings to lift acceleration in each phase, then use $v$-$t$ area.\n\nFrom graph: 0–8 s gives upward $a=1$, 8–16 s gives $a=0$, 16–24 s gives downward $a=1$ (decelerating upward).\nSo peak speed after 8 s is\n$$v=0+1\\times8=8\\ \\text{m s}^{-1}.$$ \nDistance ascended equals area under $v$-$t$ graph:\n$$s=\\frac{1}{2}(8+24)\\times8=128\\ \\text{m}.$$ \n\n**Conclusion:** option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $R-mg=ma$ or $mg-R=ma$ by phase.',
      'Build the velocity-time profile across 0–24 s.',
      'Distance is area under $v$-$t$ graph.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-136-question.png'],
  },
  {
    id: 'nl-137',
    type: 'multiple_choice',
    question:
      'A body of weight $W$ is suspended by three inextensible light strings $OA$, $OB$ and $OC$ as shown in the figure. $OA$ makes an angle $\\theta$ with the horizontal while $OB$ is horizontal. The maximum tension that each string can bear is the same. If the weight $W$ gradually increases, which string will break first?',
    options: ['string $OA$', 'string $OB$', 'string $OC$', 'It depends on the value of $\\theta$'],
    answer: 'string $OA$',
    explanation:
      '**Key point:** Equilibrium component equations give\n$$T_A\\sin\\theta=T_C,\\quad T_A\\cos\\theta=T_B.$$ \nSo $T_A>T_C$ and $T_A>T_B$. Therefore $OA$ always carries the greatest tension and reaches limit first.\n\n**Conclusion:** option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Resolve tensions of string $OA$ into horizontal and vertical components.',
      'Relate each component to $T_B$ and $T_C$.',
      'Compare magnitudes to identify which is largest.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-137-question.png'],
  },
  {
    id: 'nl-138',
    type: 'multiple_choice',
    question:
      'A boy performs a bungee jump from the top of a bridge. He is connected with a light elastic cord to the bridge at $O$ as shown in the figure. When he falls down from rest at $O$, the cord starts to stretch at point $P$. He then passes $Q$ where the tension in the cord is just equal to his weight. Finally, the boy reaches point $R$ where he is momentarily at rest. If air resistance is neglected, which of the following descriptions are correct?\n\n(1) From $P$ to $Q$, the speed of the boy increases throughout.\n(2) At $Q$, the speed of the boy is the maximum in the falling motion.\n(3) At $R$, the net force acting on the boy is zero.',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1) and (2) only',
    explanation:
      '**Key point:** Tension rises with extension.\n\nFrom $P$ to $Q$, tension is still less than weight, so net force is downward and speed keeps increasing → (1) true.\nAt $Q$, $T=mg$, so acceleration is zero at that instant; after $Q$, $T>mg$ gives upward acceleration, so speed starts decreasing. Hence speed is maximum at $Q$ → (2) true.\nAt $R$, velocity is momentarily zero but cord is highly stretched so $T>mg$; net force is not zero → (3) false.\n\n**Conclusion:** (1) and (2) only, so option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Compare tension with weight in each segment.',
      'Maximum speed occurs where acceleration changes sign.',
      'Momentary rest does not imply zero net force.',
    ],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-138-question.png'],
  },
  {
    id: 'nl-139',
    type: 'multiple_choice',
    question:
      'A fish is hung on a light string as shown. If the tension in the string is 10 N, find the total weight of the fish and the hook.',
    options: ['$20\\sin70^{\\circ}\\ \\mathrm{N}$', '$20\\cos70^{\\circ}\\ \\mathrm{N}$', '$10\\sin70^{\\circ}\\ \\mathrm{N}$', '$10\\cos70^{\\circ}\\ \\mathrm{N}$'],
    answer: '$20\\cos70^{\\circ}\\ \\mathrm{N}$',
    explanation:
      'Resolve each string tension into components. The two vertical components balance the weight: $W=2T\\cos70^{\\circ}=20\\cos70^{\\circ}\\,\\mathrm{N}$.',
    difficulty: 1,
    points: 10,
    hints: ['At equilibrium, vertical components balance weight.', 'There are two equal tension forces.', 'Use $T=10\\,\\mathrm{N}$.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-139-question.png'],
  },
  {
    id: 'nl-140',
    type: 'multiple_choice',
    question:
      'A block remains at rest on a rough inclined plane. Which diagram shows all the forces acting on the block? ( $W$: weight, $R$: normal reaction, $F$: friction )',
    options: [
      '/physics/exercises/newton-laws/nl-140-option-a.png',
      '/physics/exercises/newton-laws/nl-140-option-b.png',
      '/physics/exercises/newton-laws/nl-140-option-c.png',
      '/physics/exercises/newton-laws/nl-140-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-140-option-c.png',
    explanation:
      'On a rough incline at rest, friction acts up the plane to oppose sliding tendency; normal reaction is perpendicular to plane; weight is vertical.',
    difficulty: 1,
    points: 10,
    hints: ['Weight is always vertical downward.', 'Normal reaction is perpendicular to surface.', 'Static friction opposes tendency to slide down.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-140-question.png'],
  },
  {
    id: 'nl-141',
    type: 'multiple_choice',
    question:
      'A 1 kg block is pulled by a horizontal force of 5 N and moves with acceleration $2\\ \\mathrm{m\\ s^{-2}}$ on a rough horizontal plane. Find the frictional force.',
    options: ['zero', '2 N', '3 N', '7 N'],
    answer: '3 N',
    explanation: 'By Newton second law: $F-f=ma\\Rightarrow 5-f=1\\times2$, so $f=3\\,\\mathrm{N}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use $F-f=ma$.', 'Mass is 1 kg.', 'Solve linearly for $f$.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-141-question.png'],
  },
  {
    id: 'nl-142',
    type: 'multiple_choice',
    question:
      'Kelvin stands on a balance in a lift. Readings are $R_1$ (moving up with uniform speed), $R_2$ (moving down with uniform speed), and $R_3$ (moving up with acceleration). Which relation is correct?',
    options: ['$R_1=R_2>R_3$', '$R_3>R_1=R_2$', '$R_1>R_2>R_3$', '$R_3>R_1>R_2$'],
    answer: '$R_3>R_1=R_2$',
    explanation:
      'Uniform speed means zero acceleration, so $R_1=R_2=mg$. Moving upward with acceleration needs larger normal reaction, so $R_3>mg$.',
    difficulty: 1,
    points: 10,
    hints: ['Uniform speed means $a=0$.', 'Scale reading is normal reaction.', 'Upward acceleration increases apparent weight.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-142-question.png'],
  },
  {
    id: 'nl-143',
    type: 'multiple_choice',
    question:
      'A block slides down a smooth incline from rest and then moves on rough ground as in the given $v$-$t$ graph. If released from a higher point on the same incline, which dotted graph is correct (same friction on ground)?',
    options: [
      '/physics/exercises/newton-laws/nl-143-option-a.png',
      '/physics/exercises/newton-laws/nl-143-option-b.png',
      '/physics/exercises/newton-laws/nl-143-option-c.png',
      '/physics/exercises/newton-laws/nl-143-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-143-option-d.png',
    explanation:
      'On the same smooth incline, acceleration is unchanged so first-segment slope is same. From higher release point, bottom speed is greater. On rough ground, deceleration is same, so second-segment slope is unchanged.',
    difficulty: 2,
    points: 15,
    hints: ['Incline acceleration depends on angle.', 'Higher release point gives larger speed before rough section.', 'Same friction means same deceleration slope.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-143-question.png'],
  },
  {
    id: 'nl-144',
    type: 'multiple_choice',
    question:
      'A block of weight 100 N is on a horizontal table. An upward vertical force of 60 N is exerted on the block. Which statements are correct?\n\n(1) Weight is balanced by force exerted on block by table.\n(2) Weight and force exerted on table by block are equal in magnitude.\n(3) Force exerted on table by block and force exerted on block by table are an action-reaction pair.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'Vertical balance on block gives $R+60=100\\Rightarrow R=40\\,\\mathrm{N}$. So (1) false and (2) false. The pair in (3) is a Newton third-law pair.',
    difficulty: 2,
    points: 15,
    hints: ['Include the extra 60 N in vertical balance.', 'Find table normal $R$ first.', 'Third-law pair acts on different bodies.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-144-question.png'],
  },
  {
    id: 'nl-145',
    type: 'multiple_choice',
    question:
      'Blocks $P,Q,R$ are connected on a smooth horizontal surface. A constant force $F$ pulls $P$. If a lump of plasticine is placed on $Q$ and moves with it while $F$ is unchanged, how do tensions $T_1$ and $T_2$ change?',
    options: [
      '$T_1$ increase, $T_2$ decrease',
      '$T_1$ increase, $T_2$ increase',
      '$T_1$ decrease, $T_2$ decrease',
      '$T_1$ decrease, $T_2$ increase',
    ],
    answer: '$T_1$ increase, $T_2$ decrease',
    explanation:
      'Total mass increases so common acceleration decreases. For trailing block $R$, $T_2=m_R a$ decreases. For front block, $F-T_1=m_P a$ with smaller $a$ gives larger $T_1$.',
    difficulty: 2,
    points: 15,
    hints: ['Same $F$ with larger mass gives smaller $a$.', 'Use $T_2=m_R a$.', 'Use $F-T_1=m_P a$.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-145-question.png'],
  },
  {
    id: 'nl-146',
    type: 'multiple_choice',
    question:
      'Blocks $P$ and $Q$ of masses $m$ and $2m$ are connected by a light spring balance on a smooth surface. Horizontal forces $F_1$ and $F_2$ ($F_1>F_2$) act so the system accelerates left. What is the balance reading?',
    options: ['$\\frac{2F_1-F_2}{3}$', '$\\frac{2(F_1-F_2)}{3}$', '$\\frac{2F_1+F_2}{3}$', '$\\frac{F_1+2F_2}{3}$'],
    answer: '$\\frac{2F_1+F_2}{3}$',
    explanation:
      'Whole system: $F_1-F_2=(m+2m)a\\Rightarrow a=\\frac{F_1-F_2}{3m}$. For block $P$: $F_1-T=ma$, hence $T=F_1-\\frac{F_1-F_2}{3}=\\frac{2F_1+F_2}{3}$.',
    difficulty: 2,
    points: 15,
    hints: ['Find common acceleration from net external force.', 'Then isolate block $P$.', 'Balance reading equals string force $T$.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-146-question.png'],
  },
  {
    id: 'nl-147',
    type: 'multiple_choice',
    question:
      'Two forces $F_1$ and $F_2$ of constant magnitudes act at a point. As the angle $\\theta$ between them increases from $0^\\circ$ to $180^\\circ$, the resultant magnitude',
    options: ['decreases throughout.', 'increases throughout.', 'decreases and then increases.', 'increases and then decreases.'],
    answer: 'decreases throughout.',
    explanation:
      'Resultant magnitude is $R=\\sqrt{F_1^2+F_2^2+2F_1F_2\\cos\\theta}$. As $\\theta$ increases, $\\cos\\theta$ decreases from 1 to -1, so $R$ decreases monotonically.',
    difficulty: 1,
    points: 10,
    hints: ['Use vector resultant formula with $\\cos\\theta$.', '$\\cos\\theta$ decreases on $[0^\\circ,180^\\circ]$.', 'Compare extremes at $0^\\circ$ and $180^\\circ$.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-147-question.png'],
  },
  {
    id: 'nl-148',
    type: 'multiple_choice',
    question:
      'A block of mass $m$ on a $30^\\circ$ rough incline is given a slight push and slides down with uniform speed. Which statements are correct?\n\n(1) Net force is zero.\n(2) Friction is $0.5mg$.\n(3) Giving a greater initial speed makes it slide with acceleration.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'Uniform speed means $a=0$, so net force is zero. Along plane: $mg\\sin30^\\circ=f$, hence $f=0.5mg$. Initial speed does not change force balance, so (3) is false.',
    difficulty: 2,
    points: 15,
    hints: ['Uniform speed implies $a=0$.', 'Resolve forces parallel to incline.', 'Initial speed does not affect constant force values.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-148-question.png'],
  },
  {
    id: 'nl-149',
    type: 'multiple_choice',
    question:
      'A block of mass $m$ on a rough horizontal surface is pulled by horizontal force $F$ increasing from zero. If frictional force is constant, which graph shows relation between acceleration $a$ and $F$?',
    options: [
      '/physics/exercises/newton-laws/nl-149-option-a.png',
      '/physics/exercises/newton-laws/nl-149-option-b.png',
      '/physics/exercises/newton-laws/nl-149-option-c.png',
      '/physics/exercises/newton-laws/nl-149-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-149-option-a.png',
    explanation:
      'With constant friction $f$, $F-f=ma\\Rightarrow a=\\frac{1}{m}F-\\frac{f}{m}$, a straight line with positive slope and negative $a$-intercept.',
    difficulty: 2,
    points: 15,
    hints: ['Write Newton second law first.', 'Identify slope $1/m$.', 'Intercept is $-f/m$.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-149-question.png'],
  },
  {
    id: 'nl-150',
    type: 'multiple_choice',
    question:
      'A block of weight 20 N is suspended by a light string from the ceiling. A force $F$ is applied such that the block is displaced to one side with the string making an angle of $25^{\\circ}$ with the vertical. Find the magnitude of $F$.',
    options: ['8.5 N', '9.3 N', '18.1 N', '47.3 N'],
    answer: '8.5 N',
    explanation:
      'At equilibrium, resolving forces gives $F=W\\sin\\theta=20\\sin25^{\\circ}\\approx8.5\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Resolve forces into horizontal and vertical directions.', 'Use equilibrium in both directions.', 'Or directly use $F=W\\sin\\theta$.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-150-question.png'],
  },
  {
    id: 'nl-151',
    type: 'multiple_choice',
    question:
      'In the figure, $O$ is the centre of a regular hexagon. A particle at $O$ is subject to six forces with magnitudes indicated. The resultant force acting on the particle is',
    options: ['9 N along direction $OE$.', '8 N along direction $OE$.', '8 N along direction $OF$.', '6 N along direction $OE$.'],
    answer: '6 N along direction $OE$.',
    explanation:
      'From vector addition in the given diagram, opposite components cancel and the net remaining force is $6\\,\\mathrm{N}$ along $OE$.',
    difficulty: 2,
    points: 15,
    hints: ['Pair opposite directions first.', 'Combine forces head-to-tail.', 'Use the diagram symmetry of the hexagon.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-151-question.png'],
  },
  {
    id: 'nl-152',
    type: 'multiple_choice',
    question:
      'A block on a rough horizontal surface moves left with constant speed under two horizontal forces 2 N and 12 N. If the 12 N force is suddenly removed, what is the net force at that instant?',
    options: ['12 N', '10 N', '8 N', '2 N'],
    answer: '12 N',
    explanation:
      'Before removal, net force is zero, so friction balances the remaining horizontal effects. Immediately after removal, velocity is still leftward, so friction direction and magnitude stay the same at that instant, giving net force $12\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use the original constant-speed condition.', 'At an instant, velocity direction does not switch immediately.', 'Friction opposes current motion direction.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-152-question.png'],
  },
  {
    id: 'nl-153',
    type: 'multiple_choice',
    question:
      'Two blocks of masses 5 kg and 3 kg are connected by a light string over a frictionless fixed light pulley. Find the magnitude of acceleration in terms of $g$ when released.',
    options: ['$g$', '$\\frac{1}{2}g$', '$\\frac{1}{4}g$', '$\\frac{1}{8}g$'],
    answer: '$\\frac{1}{4}g$',
    explanation:
      'For an Atwood system, $a=\\frac{(5-3)g}{5+3}=\\frac{2g}{8}=\\frac{1}{4}g$.',
    difficulty: 1,
    points: 10,
    hints: ['Treat as standard Atwood machine.', 'Use difference over sum: $(m_1-m_2)/(m_1+m_2)$.', 'Heavier side accelerates downward.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-153-question.png'],
  },
  {
    id: 'nl-154',
    type: 'multiple_choice',
    question:
      'A weight $W$ is attached to two light strings passing over smooth pegs with 30 N and 20 N hanging at the other ends. The system is in equilibrium. Which deduction about $W$ is correct?',
    options: ['$W$ is less than 50 N.', '$W$ is equal to 50 N.', '$W$ is greater than 50 N.', 'No information about $W$ can be obtained as $\\theta$ and $\\phi$ are not known.'],
    answer: '$W$ is less than 50 N.',
    explanation:
      'Vertical balance gives $W=30\\sin\\theta+20\\sin\\phi$. Since each sine is less than 1, $W<30+20=50\\,\\mathrm{N}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use vertical components only.', 'Apply $\\sin\\theta<1$ and $\\sin\\phi<1$.', 'Compare to 50 N upper bound.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-154-question.png'],
  },
  {
    id: 'nl-155',
    type: 'multiple_choice',
    question:
      'A constant net force gives acceleration $a_1$ to mass $m_1$ and acceleration $a_2$ to mass $m_2$. If the same force acts on mass $(m_1+m_2)$, what acceleration is produced?',
    options: ['$a_1+a_2$', '$\\frac{a_1+a_2}{2}$', '$\\frac{a_1a_2}{a_1+a_2}$', '$\\frac{2a_1a_2}{a_1+a_2}$'],
    answer: '$\\frac{a_1a_2}{a_1+a_2}$',
    explanation:
      'Same force $F$: $m_1=F/a_1$, $m_2=F/a_2$. For combined mass, $a=F/(m_1+m_2)=F/(F/a_1+F/a_2)=\\frac{a_1a_2}{a_1+a_2}$.',
    difficulty: 2,
    points: 15,
    hints: ['Express masses using $F=ma$.', 'Add masses before dividing force.', 'Simplify by factoring out $F$.'],
    sectionId: 'newton-laws',
  },
  {
    id: 'nl-156',
    type: 'multiple_choice',
    question:
      'A boy of weight $W$ pulls downward with force $F$ on a rope of weight $G$ hung from the ceiling while standing still on the ground. Which pair gives the force by (1) the boy on the ground and (2) the rope on the ceiling?',
    options: ['(1) $W$, (2) $G-F$', '(1) $W$, (2) $G+F$', '(1) $W-F$, (2) $G-F$', '(1) $W-F$, (2) $G+F$'],
    answer: '(1) $W-F$, (2) $G+F$',
    explanation:
      'On the boy: $R+F=W\\Rightarrow R=W-F$. The force by boy on ground has magnitude $R=W-F$. At the ceiling, rope transmits its own weight plus pull, giving $G+F$.',
    difficulty: 2,
    points: 15,
    hints: ['Draw free-body diagram of the boy first.', 'Use static equilibrium on the boy.', 'Then analyze force transmitted to ceiling by rope.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-156-question.png'],
  },
  {
    id: 'nl-157',
    type: 'multiple_choice',
    question:
      'A block with initial speed $2\\ \\mathrm{m\\ s^{-1}}$ slides down a rough incline and stops after 0.5 m. What is its deceleration?',
    options: ['$1\\ \\mathrm{m\\ s^{-2}}$', '$2\\ \\mathrm{m\\ s^{-2}}$', '$4\\ \\mathrm{m\\ s^{-2}}$', 'Cannot be found without incline angle.'],
    answer: '$4\\ \\mathrm{m\\ s^{-2}}$',
    explanation:
      'Use $v^2=u^2+2as$: $0=2^2+2a(0.5)$, so $a=-4\\,\\mathrm{m\\ s^{-2}}$. Deceleration magnitude is $4\\,\\mathrm{m\\ s^{-2}}$.',
    difficulty: 1,
    points: 10,
    hints: ['Apply constant-acceleration formula.', 'Set final speed to zero.', 'Take magnitude for deceleration.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-157-question.png'],
  },
  {
    id: 'nl-158',
    type: 'multiple_choice',
    question:
      'A block is released from rest on an incline and travels 1 m in the first 3 s with uniform acceleration. Determine the acceleration.',
    options: ['$0.22\\ \\mathrm{m\\ s^{-2}}$', '$0.33\\ \\mathrm{m\\ s^{-2}}$', '$4.91\\ \\mathrm{m\\ s^{-2}}$', 'Cannot be determined as friction is unknown.'],
    answer: '$0.22\\ \\mathrm{m\\ s^{-2}}$',
    explanation:
      'From $s=ut+\\tfrac{1}{2}at^2$, with $u=0$, $1=\\tfrac{1}{2}a(3^2)$, hence $a=\\frac{2}{9}\\approx0.22\\,\\mathrm{m\\ s^{-2}}$.',
    difficulty: 1,
    points: 10,
    hints: ['Released from rest means $u=0$.', 'Use first-interval displacement directly.', 'Solve for $a$ from one equation.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-158-question.png'],
  },
  {
    id: 'nl-159',
    type: 'multiple_choice',
    question:
      'A block of mass $m$ stays at rest on a rough inclined plane. Which diagram correctly shows the forces on the block? ($N$ is normal reaction, $f$ is friction.)',
    options: [
      '/physics/exercises/newton-laws/nl-159-option-a.png',
      '/physics/exercises/newton-laws/nl-159-option-b.png',
      '/physics/exercises/newton-laws/nl-159-option-c.png',
      '/physics/exercises/newton-laws/nl-159-option-d.png',
    ],
    answer: '/physics/exercises/newton-laws/nl-159-option-c.png',
    explanation:
      'For static equilibrium on rough incline: weight acts vertically down, normal reaction is perpendicular to plane, and friction acts up the plane opposing sliding tendency.',
    difficulty: 1,
    points: 10,
    hints: ['Weight direction is always vertical.', 'Normal is perpendicular to contact surface.', 'Friction opposes tendency to move down slope.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-159-question.png'],
  },
  {
    id: 'nl-160',
    type: 'multiple_choice',
    question:
      'Blocks $X$ and $Y$ are connected over a frictionless pulley. Masses are 0.5 kg and 1 kg respectively. Initially $Y$ is 1 m above ground. Released from rest, what is the speed of $Y$ just before reaching ground?',
    options: ['$3.62\\ \\mathrm{m\\ s^{-1}}$', '$4.43\\ \\mathrm{m\\ s^{-1}}$', '$6.26\\ \\mathrm{m\\ s^{-1}}$', '$9.81\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$3.62\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'System acceleration: $a=\\frac{1\\times9.81}{1+0.5}=6.54\\,\\mathrm{m\\ s^{-2}}$. Then for $Y$ over $1\\,\\mathrm{m}$: $v^2=2as=2(6.54)(1)$, so $v=3.62\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Find common acceleration first.', 'Use total mass in denominator.', 'Then apply $v^2=u^2+2as$ with $u=0$.'],
    sectionId: 'newton-laws',
    imagePaths: ['/physics/exercises/newton-laws/nl-160-question.png'],
  },
  {
    id: 'mf-001',
    type: 'multiple_choice',
    question:
      'If a mass of 2 kg is placed at a distance of 2 cm from the fulcrum $F$ as shown, which of the following could keep the light rod in equilibrium?\n\n(1) a mass of 4 kg placed at $P$\n(2) a mass of 2 kg placed at $Q$\n(3) a mass of 1 kg placed at $R$',
    options: ['(1) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      'Moment of given mass about $F$ is $2\\times2=4$. For equilibrium, opposite moment must also be 4. (1) $4\\times1=4$, (2) $2\\times2=4$, (3) $1\\times4=4$. All work.',
    difficulty: 1,
    points: 10,
    hints: ['Use moment = force × perpendicular distance.', 'Compute the reference moment first.', 'Check each option against the same moment value.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-001-question.png'],
  },
  {
    id: 'mf-002',
    type: 'multiple_choice',
    question:
      'In the figure shown, the uniform metre rule of weight 1 N is balanced horizontally. Find the tension $T$ in the string.',
    options: ['2.4 N', '3.4 N', '8.4 N', '9.4 N'],
    answer: '9.4 N',
    explanation:
      'Take moments about the right end (so weight $W$ there has no moment): $(6)(20+50)+(1)(50)=T(50)$. Hence $T=9.4\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Choose a pivot that simplifies unknowns.', 'Include metre rule weight at its midpoint.', 'Set clockwise moment = anticlockwise moment.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-002-question.png'],
  },
  {
    id: 'mf-003',
    type: 'multiple_choice',
    question:
      'The diagram shows a light rod under three vertical forces. Points $P,Q,R,S,T$ are equally spaced. At which point must an upward vertical force of 2 N be applied to hold the rod in equilibrium?',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'S',
    explanation:
      'Given couple at $Q$ and $S$ has moment $1\\times2=2$ (clockwise). To balance, need anticlockwise couple of 2. With applied force 2 N, required distance is $d=2/2=1$ spacing, which is at point $S$.',
    difficulty: 2,
    points: 15,
    hints: ['Identify the existing couple first.', 'For a couple, moment = one force × separation.', 'Find where 2 N gives equal opposite moment.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-003-question.png'],
  },
  {
    id: 'mf-004',
    type: 'multiple_choice',
    question:
      'The diagram shows a light rod under the action of two vertical forces. Under which condition will the rod be in equilibrium?',
    options: [
      'Applying an upward force of 2 N at $P$.',
      'Applying a downward force of 2 N at $P$.',
      'Applying an upward force of 4 N at $R$ and a downward force of 4 N at $Q$.',
      'Applying an upward force of 4 N at $Q$ and a downward force of 4 N at $R$.',
    ],
    answer: 'Applying an upward force of 4 N at $Q$ and a downward force of 4 N at $R$.',
    explanation:
      'Given couple moment is $2\\times(2\\times10)=40\\,\\mathrm{N\\,cm}$. Required balancing couple must be equal and opposite. With 4 N forces, needed separation is $d=40/4=10\\,\\mathrm{cm}$ and clockwise direction, which matches option D.',
    difficulty: 2,
    points: 15,
    hints: ['For equilibrium, net force and net moment must be zero.', 'Couple moment = one force × separation.', 'Balancing couple has opposite rotational sense.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-004-question.png'],
  },
  {
    id: 'mf-005',
    type: 'multiple_choice',
    question:
      'A uniform plank $AB$ of weight 200 N rests on two trestles. A boy stands at end $B$. What is the maximum weight of the boy without tilting the plank? (Weight of plank acts at its centre.)',
    options: ['75 N', '100 N', '200 N', '300 N'],
    answer: '300 N',
    explanation:
      'At tipping point, take moment about the right trestle: $(200)(1.5)=W(1)$. Hence $W=300\\,\\mathrm{N}$.',
    difficulty: 1,
    points: 10,
    hints: ['At maximum load, one support just loses contact.', 'Take moments about the remaining support.', 'Use plank weight at midpoint.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-005-question.png'],
  },
  {
    id: 'mf-006',
    type: 'multiple_choice',
    question:
      'A light plank of length 2 m rests on trestles $S_1$ and $S_2$. A boy of weight 500 N stands at the midpoint. Find the forces acting on the two trestles by the plank.',
    options: [
      '$166\\frac{2}{3}\\ \\mathrm{N}$ and $333\\frac{1}{3}\\ \\mathrm{N}$',
      '200 N and 300 N',
      '250 N and 250 N',
      '300 N and 200 N',
    ],
    answer: '200 N and 300 N',
    explanation:
      'Take moment about $S_1$: $F_1(1.25)=500(1-0.5)$, so $F_1=200\\,\\mathrm{N}$. Force balance gives $F_1+F_2=500$, so $F_2=300\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Write one moment equation and one force-balance equation.', 'Use distance from $S_1$ to midpoint.', 'Solve for both reactions.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-006-question.png'],
  },
  {
    id: 'mf-007',
    type: 'multiple_choice',
    question:
      'A uniform beam of length 3 m and weight 300 N lies on horizontal ground. What minimum vertical force must be applied at one end to just lift that end off the ground? (Weight acts at midpoint.)',
    options: ['100 N', '150 N', '300 N', '450 N'],
    answer: '150 N',
    explanation:
      'At just-lift condition, take moments about the opposite end: $F(3)=300(1.5)$. Therefore $F=150\\,\\mathrm{N}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use just-lift condition as rotational equilibrium about contact end.', 'Beam weight acts at centre.', 'Solve directly from moment equation.'],
    sectionId: 'moment-force',
  },
  {
    id: 'mf-008',
    type: 'multiple_choice',
    question:
      'A uniform rod of length $L$ is pivoted at a point $\\frac{1}{4}L$ from one end. Two forces 14 N and 3 N act on its ends as shown. If in equilibrium, find the rod weight. (Weight acts at midpoint.)',
    options: ['2.5 N', '5 N', '8 N', '11 N'],
    answer: '5 N',
    explanation:
      'Taking moments about pivot: $14\\times\\frac{L}{4}=W\\times\\frac{L}{4}+3\\times\\frac{3L}{4}$. Solving gives $W=5\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use pivot to eliminate support force.', 'Write clockwise = anticlockwise moments.', 'Keep $L/4$ as common factor.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-008-question.png'],
  },
  {
    id: 'mf-009',
    type: 'multiple_choice',
    question:
      'A weighing device uses a rod $AB$ supported at point $X$ and a movable counter-weight. Which changes can increase the maximum measurable weight?\n\n(1) moving string at $X$ towards $A$\n(2) increasing counter-weight mass\n(3) increasing length of string from which counter-weight hangs',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'Moment condition about $X$ is load moment = counter-weight moment. Moving $X$ toward $A$ increases workable load arm range; increasing counter-weight mass increases balancing moment. String hanging length does not affect moment arm about $X$.',
    difficulty: 2,
    points: 15,
    hints: ['Think in terms of moments about support point $X$.', 'Only perpendicular distance from $X$ matters.', 'Mass increase raises available balancing moment.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-009-question.png'],
  },
  {
    id: 'mf-010',
    type: 'multiple_choice',
    question:
      'A uniform plank of weight 450 N rests on trestles $X$ and $Y$. A worker of weight 675 N stands at one end and holds packets of 6 N each in a basket. What is the maximum number of packets without tilting?',
    options: ['11', '12', '13', '18'],
    answer: '12',
    explanation:
      'At just-tilt, support at $X$ loses contact. Take moments about $Y$: $450\\times2.5=(675+6n)\\times1.5$. This gives $n=12.5$, so maximum integer without tilting is 12.',
    difficulty: 2,
    points: 15,
    hints: ['Use just-tilt condition.', 'Take moments about the pivot support $Y$.', 'Final answer must be integer packet count not exceeding threshold.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-010-question.png'],
  },
  {
    id: 'mf-011',
    type: 'multiple_choice',
    question:
      'A block is initially at rest on smooth horizontal ground. Two forces of equal magnitude $F$ act on the block. In which case(s) will the block remain at rest?\n\n(1)\n(2)\n(3)',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(2) only',
    explanation:
      '(1) forms a couple, causing rotation. (2) forces balance with no net force or turning effect. (3) has a non-zero resultant to the right, so it accelerates.',
    difficulty: 2,
    points: 15,
    hints: ['For full rest, both net force and net moment must be zero.', 'Couple causes rotation even when resultant force is zero.', 'Check vector sum of forces in each case.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-011-question.png'],
  },
  {
    id: 'mf-012',
    type: 'multiple_choice',
    question:
      'A uniform rod of weight 50 N is supported by spring balances $P$ and $Q$ and remains at rest as shown. Find the readings of $P$ and $Q$.',
    options: ['17 N, 33 N', '20 N, 30 N', '30 N, 20 N', '33 N, 17 N'],
    answer: '20 N, 30 N',
    explanation:
      'Taking moment about point under $P$: $50\\times0.3=Q\\times0.5$, so $Q=30\\,\\mathrm{N}$. Then force balance gives $P+30=50\\Rightarrow P=20\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use one moment equation and one force-balance equation.', 'Choose pivot at $P$ to remove $P$ from moment equation.', 'Then substitute into vertical force balance.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-012-question.png'],
  },
  {
    id: 'mf-013',
    type: 'multiple_choice',
    question:
      'Figure (a) shows a uniform plank supported by spring balances $P$ and $Q$, both reading 150 N. Then $P$ is moved 0.25 m towards $Q$ (Figure (b)). Find new readings of $P$ and $Q$.',
    options: ['100 N, 200 N', '150 N, 150 N', '200 N, 100 N', '200 N, 150 N'],
    answer: '200 N, 100 N',
    explanation:
      'Plank weight is $150+150=300\\,\\mathrm{N}$. In Figure (b), taking moment about $Q$: $P(1-0.25)=300(0.5)$, so $P=200\\,\\mathrm{N}$. Then $P+Q=300\\Rightarrow Q=100\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Total weight stays 300 N.', 'Use updated support spacing in Figure (b).', 'Solve moment first, then force balance.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-013-question.png'],
  },
  {
    id: 'mf-014',
    type: 'multiple_choice',
    question:
      'A uniform metre rule $AB$ of mass 0.15 kg is hinged at $B$. End $A$ is connected by a wire to wall point $C$. A block $X$ of mass 0.1 kg hangs at 30 cm from $A$. Rule is horizontal. Find the moment of the wire tension about $B$.',
    options: ['1.42 Nm', '1.05 Nm', '0.75 Nm', '0.70 Nm'],
    answer: '1.42 Nm',
    explanation:
      'Taking moments about $B$: tension moment equals sum of clockwise moments of weights.\n$M_T=(0.1\\times9.81)(1-0.3)+(0.15\\times9.81)(0.5)=1.42\\,\\mathrm{N\\,m}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use metres for distances from pivot $B$.', 'Weight of rule acts at midpoint.', 'Tension moment balances total weight moments.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-014-question.png'],
  },
  {
    id: 'mf-015',
    type: 'multiple_choice',
    question:
      'A uniform rod $AB$ is held horizontal by a wire at $C$ and pivoted at $A$. The rod carries load $W$. If $W$ is shifted gradually from $A$ towards $B$, which quantities increase?\n\n(1) moment of rod weight about $A$\n(2) moment of load $W$ about $A$\n(3) tension of the wire',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'Rod CG position is fixed, so rod-weight moment about $A$ is unchanged. Moving $W$ farther from $A$ increases its moment. To maintain equilibrium, wire tension must increase.',
    difficulty: 2,
    points: 15,
    hints: ['Uniform rod CG does not move.', 'Moment is force × perpendicular distance from pivot.', 'Increased clockwise load moment requires increased balancing tension moment.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-015-question.png'],
  },
  {
    id: 'mf-016',
    type: 'multiple_choice',
    question:
      'A light rigid rod $AB$ is hinged at one end and connected by a string to point $C$ above $B$. A weight $W$ hangs on the rod; rod remains horizontal. Which change(s) increase string tension?\n\n(1) Shift weight towards $A$.\n(2) Replace string with a shorter one connecting midpoints of $AB$ and $BC$.\n(3) Replace string with a longer one connecting to a point higher than $C$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'Using moment about hinge: $T\\sin\\theta\\cdot L=W\\cdot d$.\n(1) Shifting $W$ toward $A$ increases $d$, so $T$ increases.\n(2) Shorter string setup reduces effective $L$ (with similar $\\theta$), so $T$ increases.\n(3) Higher attachment increases $\\theta$ so $\\sin\\theta$ increases, hence required $T$ decreases.',
    difficulty: 3,
    points: 20,
    hints: ['Write a moment equation about hinge.', 'Analyze how each change affects lever arm or angle factor.', 'If denominator increases, required tension decreases.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-016-question.png'],
  },
  {
    id: 'mf-017',
    type: 'multiple_choice',
    question:
      'Figure (a) shows a uniform plank supported by spring balances $P$ and $Q$, both reading 150 N. In Figure (b), $P$ is moved 0.25 m towards $Q$. Find the new readings of $P$ and $Q$.',
    options: ['100 N, 200 N', '150 N, 150 N', '200 N, 100 N', '200 N, 150 N'],
    answer: '200 N, 100 N',
    explanation:
      'Total weight is $150+150=300\\,\\mathrm{N}$. Taking moments about $Q$ in Figure (b): $P(1-0.25)=300(0.5)$, so $P=200\\,\\mathrm{N}$. Then $P+Q=300\\Rightarrow Q=100\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Find total weight from initial readings.', 'Use new support separation after moving $P$.', 'Use force balance after moment equation.'],
    sectionId: 'moment-force',
    imagePaths: [
      '/physics/exercises/moment-force/mf-017-question.png',
      '/physics/exercises/moment-force/mf-017-question-2.png',
    ],
  },
  {
    id: 'mf-018',
    type: 'multiple_choice',
    question:
      'A rod $XY$ is hinged at $X$ and kept horizontal by a light string. $M$ is midpoint of $XY$. In which arrangement is the string tension $T$ smallest?',
    options: [
      '/physics/exercises/moment-force/mf-018-option-a.png',
      '/physics/exercises/moment-force/mf-018-option-b.png',
      '/physics/exercises/moment-force/mf-018-option-c.png',
      '/physics/exercises/moment-force/mf-018-option-d.png',
    ],
    answer: '/physics/exercises/moment-force/mf-018-option-a.png',
    explanation:
      'Using moment about $X$:\nA gives $T\\sin45^\\circ\\cdot L=mg\\cdot\\frac{L}{2}\\Rightarrow T=0.707mg$.\nB and C give $T=mg$.\nD gives $T=1.41mg$.\nSmallest is A.',
    difficulty: 2,
    points: 15,
    hints: ['Take moments about hinge $X$.', 'Compare $T$ from each geometry.', 'Larger effective moment arm gives smaller required $T$.'],
    sectionId: 'moment-force',
  },
  {
    id: 'mf-019',
    type: 'multiple_choice',
    question:
      'A uniform gangplank $PQ$ (mass $M$, length 2 m) is hinged at $P$ and raised steadily by a rope via a smooth pulley, attached at point $R$ 1.5 m from $P$. Which statement is correct about required force?',
    options: [
      'Initial: $0.67Mg$, subsequent: greater than $0.67Mg$',
      'Initial: $0.67Mg$, subsequent: smaller than $0.67Mg$',
      'Initial: $0.94Mg$, subsequent: greater than $0.94Mg$',
      'Initial: $0.94Mg$, subsequent: smaller than $0.94Mg$',
    ],
    answer: 'Initial: $0.94Mg$, subsequent: smaller than $0.94Mg$',
    explanation:
      'Initially (horizontal), moment about $P$: $T\\sin45^\\circ\\times1.5=Mg\\times1$, so $T=0.94Mg$. As plank rises, weight moment arm about $P$ decreases and rope angle increases, so required $T$ decreases.',
    difficulty: 3,
    points: 20,
    hints: ['Use moment balance about hinge for initial position.', 'Weight moment arm shortens as plank rotates up.', 'Increasing rope angle increases moment effectiveness.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-019-question.png'],
  },
  {
    id: 'mf-020',
    type: 'multiple_choice',
    question:
      'A supermarket trolley has wheels $X$ and $Y$ separated by 0.7 m. Total weight is 154 N with centre of gravity 0.5 m from wheel $Y$. What is the ground reaction on wheel $X$?',
    options: ['44 N', '62 N', '92 N', '110 N'],
    answer: '110 N',
    explanation:
      'Take moments about $Y$: $R_X\\times0.7=154\\times0.5$, so $R_X=110\\,\\mathrm{N}$.',
    difficulty: 1,
    points: 10,
    hints: ['Choose pivot at $Y$.', 'Use moment = force × distance.', 'Solve directly for $R_X$.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-020-question.png'],
  },
  {
    id: 'mf-021',
    type: 'multiple_choice',
    question:
      'A semicircular cardboard hangs from point $O$ on a spring balance reading 5 N. Which statements are correct?\n\n(1) Weight of cardboard is 5 N.\n(2) Centre of gravity is directly under $O$.\n(3) Balance reading becomes zero on the Moon.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '(1) True: spring balance reads supported weight in that field. (2) True: at rest, CG lies on line of support through hanging point. (3) False: Moon gravity is smaller, so reading decreases but is not zero.',
    difficulty: 2,
    points: 15,
    hints: ['Balance reading equals weight in local gravity.', 'A freely hanging body aligns CG vertically below support.', 'Moon has reduced gravity, not zero gravity.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-021-question.png'],
  },
  {
    id: 'mf-022',
    type: 'multiple_choice',
    question:
      'A composite rod $PQR$ has uniform cross-section, with portions $PQ$ and $QR$ made of different materials and uniform densities. Length ratio $PQ:QR=2:3$. When suspended at $Q$, it remains horizontal. What is the mass ratio $m_{PQ}:m_{QR}$?',
    options: ['2:3', '1:1', '3:2', 'Cannot be found without density ratio'],
    answer: '3:2',
    explanation:
      'Each portion has its weight acting at its own midpoint. Taking moments about $Q$: $m_1g\\times1=m_2g\\times1.5$, hence $m_1:m_2=3:2$.',
    difficulty: 2,
    points: 15,
    hints: ['Treat each portion as a separate uniform segment.', 'Weight of each segment acts at its midpoint.', 'Use moment balance about $Q$.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-022-question.png'],
  },
  {
    id: 'mf-023',
    type: 'multiple_choice',
    question:
      'A uniform metre rule is supported by vertical wires $P$ and $Q$ and remains horizontal. Initially each wire tension is 1 N. Then a 4 N weight is hung at position $x$ and the tension in $Q$ becomes 2.3 N (still horizontal). Find $x$.',
    options: ['32.5 cm', '57.5 cm', '67.5 cm', 'Cannot be found as tension in $P$ is unknown'],
    answer: '32.5 cm',
    explanation:
      'From initial condition, rule weight is $1+1=2\\,\\mathrm{N}$ acting at 50 cm. In loaded case, taking moments about $P$: $(2.3)(100)=(4)(x)+(2)(50)$. So $x=32.5\\,\\mathrm{cm}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use initial tensions to get rule weight first.', 'Uniform rule means CG at 50 cm mark.', 'Take moments about $P$ in second setup.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-023-question.png'],
  },
  {
    id: 'mf-024',
    type: 'multiple_choice',
    question:
      'A uniform selfie stick of length 0.7 m is held horizontally. Forces by hand are represented by $F_1$ and $F_2$, both perpendicular to the stick. Weight of stick is 1.5 N and mobile phone is 2.0 N (point mass). Estimate magnitude of $F_2$.',
    options: ['3.5 N', '19.3 N', '35 N', 'Cannot be determined as $F_1$ is unknown'],
    answer: '19.3 N',
    explanation:
      'Take moments about point of $F_1$. Using given geometry, balancing moments of stick and phone against $F_2$ gives approximately $F_2=19.3\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Choose pivot at the point where $F_1$ acts.', 'Include both stick weight and phone weight moments.', 'Solve $F_2$ from moment equilibrium.'],
    sectionId: 'moment-force',
    imagePaths: ['/physics/exercises/moment-force/mf-024-question.png'],
  },
  {
    id: 'wep-001',
    type: 'multiple_choice',
    question:
      'An object is thrown vertically upwards with initial speed $u$. Which graph represents the variation of its kinetic energy $E_k$ with time $t$?',
    options: [
      '/physics/exercises/work-energy-power/wep-001-option-a.png',
      '/physics/exercises/work-energy-power/wep-001-option-b.png',
      '/physics/exercises/work-energy-power/wep-001-option-c.png',
      '/physics/exercises/work-energy-power/wep-001-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-001-option-b.png',
    explanation:
      'At $t=0$, kinetic energy is maximum. At the highest point, speed is zero so kinetic energy is zero. During descent, speed increases again, so $E_k$ decreases to zero and then increases. Since $v=u-gt$, $E_k=\\frac12m(u-gt)^2$, a quadratic curve in time.',
    difficulty: 2,
    points: 15,
    hints: ['Use $E_k=\\frac12mv^2$.', 'At the highest point, $v=0$.', 'Velocity varies linearly with time, so kinetic energy varies quadratically.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-002',
    type: 'multiple_choice',
    question:
      'Two masses $m_1$ and $m_2$ ($m_1>m_2$) are hung over a smooth pulley. If the system is released from rest, what is the kinetic energy of the system after mass $m_1$ has descended through distance $h$?',
    options: ['$m_1gh$', '$m_2gh$', '$(m_1-m_2)gh$', '$(m_2-m_1)gh$'],
    answer: '$(m_1-m_2)gh$',
    explanation:
      'Loss of gravitational potential energy of $m_1$ is $m_1gh$. Gain of gravitational potential energy of $m_2$ is $m_2gh$. The remainder becomes total kinetic energy of the system, so $E_k=(m_1-m_2)gh$.',
    difficulty: 1,
    points: 10,
    hints: ['Use energy conservation.', 'One mass loses PE while the other gains PE.', 'The difference becomes total kinetic energy.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-002-question.png'],
  },
  {
    id: 'wep-003',
    type: 'multiple_choice',
    question:
      'A vehicle moves up a road inclined at angle $\\theta$ with constant velocity $10\\ \\mathrm{m\\ s^{-1}}$. If the resisting forces are uniform, the power developed by the engine is',
    options: ['constant.', 'increasing uniformly.', 'decreasing uniformly.', 'increasing, but not uniformly.'],
    answer: 'constant.',
    explanation:
      'Using $P=Fv$: with constant speed and constant resisting force, the required driving force is constant, so the engine power is constant.',
    difficulty: 1,
    points: 10,
    hints: ['Use $P=Fv$.', 'Velocity is constant.', 'Resistive force is uniform (constant).'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-004',
    type: 'multiple_choice',
    question:
      'Which statements about a body falling freely under gravity are correct?\n\n(1) It gains kinetic energy while falling.\n(2) Its total energy at any point equals the work done in raising it from ground level to that point.\n(3) Its kinetic energy at the end of the flight is all converted into potential energy.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '(1) True: gravitational potential energy is converted into kinetic energy. (2) False: work done in raising it to that point equals only the potential energy there, not total energy. (3) False: just before reaching ground, potential energy has been converted into kinetic energy, not the reverse.',
    difficulty: 2,
    points: 15,
    hints: ['Separate kinetic and potential energy clearly.', 'Work done to raise from ground gives gravitational PE.', 'In free fall, PE decreases while KE increases.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-005',
    type: 'multiple_choice',
    question:
      'A vehicle moving with uniform speed travels up a road of constant gradient. The power developed by the engine is',
    options: ['uniformly increasing.', 'increasing, but not uniformly.', 'constant.', 'uniformly decreasing.'],
    answer: 'constant.',
    explanation:
      'Again, $P=Fv$. Uniform speed means constant $v$, and constant gradient with uniform resistive conditions gives constant opposing force, so power is constant.',
    difficulty: 1,
    points: 10,
    hints: ['This is the same power relation as the previous vehicle question.', 'Constant gradient means constant component of weight.', 'Uniform speed implies constant power if force is constant.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-006',
    type: 'multiple_choice',
    question:
      'Two balls $X$ and $Y$ of the same mass are released from rest at $A$. $X$ falls vertically to $B$, while $Y$ moves down a smooth plane to $C$. Which statements are correct?\n\n(1) $X$ reaches $B$ at the same time as $Y$ reaches $C$.\n(2) Velocity of $X$ at $B$ is the same as that of $Y$ at $C$.\n(3) Kinetic energy of $X$ at $B$ is the same as that of $Y$ at $C$.',
    options: ['(1) only', '(2) only', '(3) only', '(1) & (3) only'],
    answer: '(3) only',
    explanation:
      '(1) False: $X$ has acceleration $g$, while $Y$ has smaller acceleration $g\\sin\\theta$ and travels a longer path. (2) False: their velocity directions differ, so velocities are not the same vectors. (3) True: both lose the same gravitational potential energy, so both gain the same kinetic energy.',
    difficulty: 2,
    points: 15,
    hints: ['Compare both acceleration and distance.', 'Velocity is a vector, not just speed.', 'Use conservation of mechanical energy for KE comparison.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-006-question.png'],
  },
  {
    id: 'wep-007',
    type: 'multiple_choice',
    question:
      'When 40 kg of water falls through a certain distance, its temperature increases by $0.2^{\\circ}\\mathrm{C}$. Given specific heat capacity of water $=4200\\ \\mathrm{J\\ kg^{-1}\\ ^\\circ C^{-1}}$, what is the height fallen?',
    options: ['20 m', '22 m', '42 m', '86 m'],
    answer: '86 m',
    explanation:
      'Loss of gravitational potential energy equals gain in internal energy: $mgh=mc\\Delta T$. So $gh=c\\Delta T=4200\\times0.2=840$, hence $h=840/9.81\\approx85.6\\,\\mathrm{m}\\approx86\\,\\mathrm{m}$.',
    difficulty: 2,
    points: 15,
    hints: ['Mass cancels in $mgh=mc\\Delta T$.', 'Use $g=9.81\\ \\mathrm{m\\ s^{-2}}$.', 'Round to nearest option.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-008',
    type: 'multiple_choice',
    question:
      'A student of weight 500 N runs up stairs 15 m high in 20 s. The average power developed is',
    options: ['37.5 W', '375 W', '750 W', '7500 W'],
    answer: '375 W',
    explanation:
      'Work done against gravity is $Wh=500\\times15=7500\\,\\mathrm{J}$. Average power $P=\\frac{W}{t}=\\frac{7500}{20}=375\\,\\mathrm{W}$.',
    difficulty: 1,
    points: 10,
    hints: ['Work done = weight × vertical height.', 'Then divide by time.', 'Average power = work/time.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-009',
    type: 'multiple_choice',
    question:
      'A bullet of mass 0.01 kg travelling horizontally at $100\\ \\mathrm{m\\ s^{-1}}$ is stopped by 0.1 m of concrete. What retarding force acts on the bullet?',
    options: ['0.1 N', '10 N', '500 N', '1000 N'],
    answer: '500 N',
    explanation:
      'Loss of kinetic energy equals work done against retarding force: $\\tfrac12mv^2=Fs$. Thus $\\tfrac12(0.01)(100)^2=F(0.1)$, giving $F=500\\,\\mathrm{N}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use work-energy theorem.', 'Initial KE is fully lost.', 'Solve for $F$ from $Fs$.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-010',
    type: 'multiple_choice',
    question:
      'A cannon ball hits the wall at the top of a 10 m tower. If the energy needed to destroy the wall is 49000 J and the mass of the ball is 10 kg, what is the minimum initial speed required?',
    options: ['$100\\ \\mathrm{m\\ s^{-1}}$', '$200\\ \\mathrm{m\\ s^{-1}}$', '$300\\ \\mathrm{m\\ s^{-1}}$', '$400\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$100\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Initial kinetic energy must supply gain in potential energy plus destruction energy: $\\tfrac12mv^2=mgh+E$. So $\\tfrac12(10)v^2=(10)(9.81)(10)+49000$, giving $v\\approx100\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Add required energies at impact.', 'Include the 10 m height gain.', 'Solve from total initial KE.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-011',
    type: 'multiple_choice',
    question:
      'A bullet hits a target at speed $200\\ \\mathrm{m\\ s^{-1}}$. If 50% of its kinetic energy is converted into the bullet internal energy, what is its temperature rise? (Specific heat capacity $=100\\ \\mathrm{J\\ kg^{-1}\\ ^\\circ C^{-1}}$)',
    options: ['$10^{\\circ}\\mathrm{C}$', '$20^{\\circ}\\mathrm{C}$', '$100^{\\circ}\\mathrm{C}$', '$200^{\\circ}\\mathrm{C}$'],
    answer: '$100^{\\circ}\\mathrm{C}$',
    explanation:
      'Gain in internal energy is $50\\%$ of kinetic energy: $\\tfrac12mv^2\\times0.5=mc\\Delta T$. Hence $\\tfrac12(200)^2\\times0.5=100\\Delta T$, so $\\Delta T=100^{\\circ}\\mathrm{C}$.',
    difficulty: 2,
    points: 15,
    hints: ['Mass cancels.', 'Only half the kinetic energy is converted.', 'Set heat gain equal to internal energy increase.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-012',
    type: 'multiple_choice',
    question:
      'A block moves with uniform velocity along a rough horizontal plane. Which statements are true?\n\n(1) Its kinetic energy is increasing.\n(2) Its potential energy is increasing.\n(3) The resultant force acting on it is zero.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'With uniform velocity, speed is constant so kinetic energy is constant, not increasing. On a horizontal plane, height is constant so potential energy is constant. Zero acceleration means resultant force is zero.',
    difficulty: 1,
    points: 10,
    hints: ['Uniform velocity implies zero acceleration.', 'KE depends on speed.', 'PE on horizontal ground stays unchanged.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-013',
    type: 'multiple_choice',
    question:
      'An object is projected vertically upwards. Which graph correctly describes the variation of kinetic energy $E$ with height $h$?',
    options: [
      '/physics/exercises/work-energy-power/wep-013-option-a.png',
      '/physics/exercises/work-energy-power/wep-013-option-b.png',
      '/physics/exercises/work-energy-power/wep-013-option-c.png',
      '/physics/exercises/work-energy-power/wep-013-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-013-option-d.png',
    explanation:
      'As height increases, gravitational potential energy increases linearly, so kinetic energy decreases linearly. At $h=0$, kinetic energy is maximum; then it falls as a straight line with height. Therefore option D is correct.',
    difficulty: 2,
    points: 15,
    hints: ['Use conservation of mechanical energy.', '$E_k+E_p$ stays constant.', 'Since $E_p=mgh$, KE changes linearly with $h$.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-014',
    type: 'multiple_choice',
    question:
      'The difference in water temperature between the top and bottom of a waterfall is $0.15^{\\circ}\\mathrm{C}$. Assuming no heat is lost to the surroundings, what is the height of the waterfall? (Specific heat capacity of water is $4200\\ \\mathrm{J\\ kg^{-1}\\ ^\\circ C^{-1}}$.)',
    options: ['3.6 m', '28 m', '64 m', '360 m'],
    answer: '64 m',
    explanation:
      'Loss of gravitational potential energy equals gain in internal energy: $mgh=mc\\Delta T$. So $gh=4200\\times0.15=630$, hence $h=630/9.81\\approx64\\,\\mathrm{m}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use $mgh=mc\\Delta T$.', 'Mass cancels.', 'Use $g=9.81\\ \\mathrm{m\\ s^{-2}}$.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-015',
    type: 'multiple_choice',
    question:
      'A diver jumps from a high platform into water at point $B$, descends to $C$, and then floats up. Taking potential energy at $B$ as zero, which statements are true concerning the diver at point $C$?\n\n(1) The kinetic energy is at a maximum.\n(2) The kinetic energy is at a minimum.\n(3) The sum of kinetic energy and potential energy is zero.',
    options: ['(1) only', '(2) only', '(3) only', '(1) & (3) only'],
    answer: '(2) only',
    explanation:
      'At point $C$, the diver is momentarily at rest before rising, so kinetic energy is zero and therefore minimum. Since $C$ is below $B$, potential energy at $C$ is negative (with $B$ defined as zero), so $KE+PE$ is less than zero, not zero.',
    difficulty: 2,
    points: 15,
    hints: ['At the lowest point before rising, speed is momentarily zero.', 'Zero speed means minimum KE.', 'Check the chosen zero level for potential energy.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-015-question.png'],
  },
  {
    id: 'wep-016',
    type: 'multiple_choice',
    question:
      'An escalator can carry 120 passengers to a height of 10 m in one minute. Assuming each passenger has weight 500 N, the possible power output of the escalator must be at least',
    options: ['1000 W', '5000 W', '10000 W', '50000 W'],
    answer: '10000 W',
    explanation:
      'Total work done in 60 s is $(120)(500)(10)=600000\\,\\mathrm{J}$. Power is $P=E/t=600000/60=10000\\,\\mathrm{W}$.',
    difficulty: 1,
    points: 10,
    hints: ['Find total gravitational work first.', 'Use all 120 passengers.', 'Then divide by 60 s.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-017',
    type: 'multiple_choice',
    question:
      'An object is projected vertically upwards. Which graph correctly describes the variation of its kinetic energy ($KE$) with height ($h$)?',
    options: [
      '/physics/exercises/work-energy-power/wep-017-option-a.png',
      '/physics/exercises/work-energy-power/wep-017-option-b.png',
      '/physics/exercises/work-energy-power/wep-017-option-c.png',
      '/physics/exercises/work-energy-power/wep-017-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-017-option-b.png',
    explanation:
      'Kinetic energy decreases linearly with height because total mechanical energy is constant and $PE=mgh$ increases linearly. At $h=0$, KE is maximum; then it falls along a straight line as $h$ increases.',
    difficulty: 2,
    points: 15,
    hints: ['Use conservation of mechanical energy.', 'Since $PE$ is linear in $h$, KE must be linear in $h$.', 'KE is maximum at launch.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-018',
    type: 'multiple_choice',
    question:
      'A trolley of mass 1 kg is released from rest from point $X$ on a rough slope. Its speed at $Y$ is $3\\ \\mathrm{m\\ s^{-1}}$. What is the loss in energy when moving from $X$ to $Y$? (Take $g=10\\ \\mathrm{m\\ s^{-2}}$.)',
    options: ['1.0 J', '4.5 J', '5.5 J', '9.0 J'],
    answer: '5.5 J',
    explanation:
      'Initial potential energy is $mgh=(1)(10)(1)=10\\,\\mathrm{J}$ from the diagram. Final kinetic energy is $\\tfrac12mv^2=\\tfrac12(1)(3^2)=4.5\\,\\mathrm{J}$. Energy lost is $10-4.5=5.5\\,\\mathrm{J}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use the height shown in the diagram for initial PE.', 'Final KE comes from speed at $Y$.', 'Loss = initial mechanical energy - final mechanical energy.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-018-question.png'],
  },
  {
    id: 'wep-019',
    type: 'multiple_choice',
    question:
      'A mass $m$ is connected to mass $M$ by a string over a smooth pulley. The table is smooth. Which statements are correct?\n\n(1) $m$ and $M$ move with the same acceleration magnitude.\n(2) The loss in potential energy of $m$ equals the gain in kinetic energy of $M$.\n(3) If mass of $M$ is doubled, its acceleration is halved.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '(1) True: connected bodies have the same acceleration magnitude. (2) False: loss of $PE$ of $m$ becomes kinetic energy of both masses, not just $M$. (3) False: $a=\\frac{mg}{M+m}$, so doubling $M$ does not simply halve $a$.',
    difficulty: 2,
    points: 15,
    hints: ['Use string constraint for acceleration.', 'Energy is shared by both masses.', 'Check the formula $a=mg/(M+m)$.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-019-question.png'],
  },
  {
    id: 'wep-020',
    type: 'multiple_choice',
    question:
      'A smooth inclined plane has $Y$ midway between $X$ and $Z$. Two particles $A$ and $B$ of the same mass are released from rest at $X$ and $Y$ respectively. Which statements are true?\n\n(1) Time for $A$ to reach $Z$ is double that for $B$.\n(2) Potential energy of $A$ at $Z$ is double that for $B$.\n(3) Kinetic energy of $A$ at $Z$ is double that for $B$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '(1) False: for motion from rest, $s\\propto t^2$, so doubling distance makes time increase by $\\sqrt2$, not 2. (2) False: both are at the same final level $Z$, so same potential energy there. (3) True: $A$ falls through double the vertical height, so it loses double the potential energy and gains double the kinetic energy.',
    difficulty: 2,
    points: 15,
    hints: ['Use $s=\\tfrac12at^2$ for timing.', 'Final PE depends only on final height.', 'KE gain equals PE loss on a smooth plane.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-020-question.png'],
  },
  {
    id: 'wep-021',
    type: 'multiple_choice',
    question:
      'Two equal masses $A$ and $B$ are connected by a light string over a smooth pulley, with $B$ on a smooth incline. Which statements are correct?\n\n(1) Potential energy lost by $A$ equals potential energy gained by $B$.\n(2) Kinetic energy gained by $A$ equals kinetic energy gained by $B$.\n(3) Potential energy lost by $A$ equals the sum of kinetic energies gained by $A$ and $B$.',
    options: ['(1) only', '(2) only', '(3) only', '(1) & (2) only'],
    answer: '(2) only',
    explanation:
      '(1) False: both move the same distance, but $B$ rises by a smaller vertical height on the incline, so it gains less PE than $A$ loses. (2) True: same masses and same speed imply equal kinetic energies. (3) False: some of the lost PE of $A$ is used to increase the PE of $B$.',
    difficulty: 2,
    points: 15,
    hints: ['Same string means same speed.', 'Equal masses with same speed have equal KE.', 'Include PE gain of the mass on the incline in the energy balance.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-021-question.png'],
  },
  {
    id: 'wep-022',
    type: 'multiple_choice',
    question:
      'An object slides down a smooth plane from rest as shown. Which graph best shows the variation of kinetic energy with time?',
    options: [
      '/physics/exercises/work-energy-power/wep-022-option-a.png',
      '/physics/exercises/work-energy-power/wep-022-option-b.png',
      '/physics/exercises/work-energy-power/wep-022-option-c.png',
      '/physics/exercises/work-energy-power/wep-022-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-022-option-b.png',
    explanation:
      'Starting from rest gives $KE=0$ at $t=0$. On a smooth slope, acceleration is constant, so speed increases linearly with time. Since $KE\\propto v^2$, kinetic energy increases quadratically with time, giving an upward-opening curve.',
    difficulty: 2,
    points: 15,
    hints: ['Starts from rest so initial KE is zero.', 'On a smooth plane, acceleration is constant.', 'Use $KE\\propto v^2$ with $v\\propto t$.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-022-question.png'],
  },
  {
    id: 'wep-023',
    type: 'multiple_choice',
    question:
      'Two objects $P$ and $Q$ of mass 0.1 kg and 0.5 kg are thrown vertically upwards with the same speed from the same level. Neglecting air resistance, which is true?',
    options: [
      '$P$ will reach a point higher than $Q$.',
      '$Q$ will take a shorter time to reach its highest point.',
      'Both will have the same kinetic energy on returning to the starting point.',
      'Both rise with the same deceleration.',
    ],
    answer: 'Both rise with the same deceleration.',
    explanation:
      'Both objects move under the same gravitational acceleration, so they have the same deceleration while rising. Same launch speed also means same maximum height and same time to highest point. Their kinetic energies at the start point are not equal because their masses differ.',
    difficulty: 2,
    points: 15,
    hints: ['Neglecting air resistance, only gravity acts.', 'Gravitational acceleration is independent of mass.', 'KE depends on both mass and speed.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-024',
    type: 'multiple_choice',
    question:
      'A block of mass 5 kg moves horizontally on a smooth surface at $6\\ \\mathrm{m\\ s^{-1}}$. To change its speed to $10\\ \\mathrm{m\\ s^{-1}}$, the work done needed is',
    options: ['40 J', '90 J', '160 J', '400 J'],
    answer: '160 J',
    explanation:
      'Required work equals change in kinetic energy: $W=\\tfrac12mv^2-\\tfrac12mu^2=\\tfrac12(5)(10^2)-\\tfrac12(5)(6^2)=160\\,\\mathrm{J}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use work-energy theorem.', 'Find final KE minus initial KE.', 'Surface is smooth, so no other energy loss.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-025',
    type: 'multiple_choice',
    question:
      'A block is pulled along a horizontal bench at constant velocity $10\\ \\mathrm{m\\ s^{-1}}$ by a force of 5 N. What is the work done against friction in 4 s?',
    options: ['200 J', '50 J', '20 J', '12.5 J'],
    answer: '200 J',
    explanation:
      'Constant velocity means pulling force balances friction, so friction is 5 N. Distance in 4 s is $vt=10\\times4=40\\,\\mathrm{m}$. Work done against friction is $Fs=5\\times40=200\\,\\mathrm{J}$.',
    difficulty: 1,
    points: 10,
    hints: ['At constant velocity, net force is zero.', 'Distance = speed × time.', 'Work = force × distance.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-026',
    type: 'multiple_choice',
    question:
      'For a body falling freely under gravity, $Y$ has a linear relationship with the displacement of the body as shown. $Y$ may represent',
    options: ['the potential energy of the body.', 'the kinetic energy of the body.', 'the velocity of the body.', 'the speed of the body.'],
    answer: 'the potential energy of the body.',
    explanation:
      'As displacement downward increases, gravitational potential energy decreases linearly with height change. Kinetic energy and speed increase instead, and velocity/speed are not linear with displacement for free fall from rest.',
    difficulty: 2,
    points: 15,
    hints: ['Think about how each quantity changes with downward displacement.', 'PE changes directly with height.', 'For free fall, $v^2$ is linear in displacement, not $v$.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-026-question.png'],
  },
  {
    id: 'wep-027',
    type: 'multiple_choice',
    question:
      'Which of the following involve an energy transfer of 100 J?\n\n(1) A mass of 10 kg is raised vertically by 10 m.\n(2) A mass of 2 kg gains a speed of $10\\ \\mathrm{m\\ s^{-1}}$ from rest.\n(3) A 10 W heater is switched on for 10 s.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '(1) $mgh=(10)(9.81)(10)=981\\,\\mathrm{J}$, not 100 J. (2) $\\tfrac12mv^2=\\tfrac12(2)(10^2)=100\\,\\mathrm{J}$. (3) $E=Pt=(10)(10)=100\\,\\mathrm{J}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use one formula for each case.', 'Gravitational PE: $mgh$.', 'Heater energy: $Pt$.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-028',
    type: 'multiple_choice',
    question:
      'A ball is released from rest from one end of a smooth curved rail. Neglecting air resistance and friction, which statements about its motion are correct?\n\n(1) The ball has maximum kinetic energy at point $B$.\n(2) The speed of the ball at point $C$ is the same as that at point $A$.\n(3) The ball would not rise to a level higher than point $D$.',
    options: ['(1) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '(1) True: at the lowest point, PE is minimum so KE is maximum. (2) True: points at the same level have the same PE, so on a smooth track they have the same speed. (3) True: with no energy loss, the ball can rise only back to its original height, not higher.',
    difficulty: 2,
    points: 15,
    hints: ['Use conservation of mechanical energy.', 'Lowest point gives maximum KE.', 'Same height means same speed on a smooth track.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-028-question.png'],
  },
  {
    id: 'wep-029',
    type: 'multiple_choice',
    question:
      'A pendulum bob is released from rest from a point $P$ 0.8 m above its lowest position $Q$. Neglecting air resistance. Find the speed of the bob when it reaches $Q$. (Take $g=10\\ \\mathrm{m\\ s^{-2}}$.)',
    options: ['$2.8\\ \\mathrm{m\\ s^{-1}}$', '$4\\ \\mathrm{m\\ s^{-1}}$', '$8\\ \\mathrm{m\\ s^{-1}}$', '$16\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$4\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Loss of potential energy equals gain of kinetic energy: $mgh=\\tfrac12mv^2$. So $(10)(0.8)=\\tfrac12v^2$, giving $v=4\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 1,
    points: 10,
    hints: ['Mass cancels in the energy equation.', 'Use the height difference 0.8 m.', 'Solve for $v$ from $mgh=\\tfrac12mv^2$.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-029-question.png'],
  },
  {
    id: 'wep-030',
    type: 'multiple_choice',
    question:
      'The figure shows the variation of the force acting on an object. What physical quantity does the area of the shaded portion represent?',
    options: ['Velocity', 'Acceleration', 'Power', 'Work'],
    answer: 'Work',
    explanation:
      'Area under a force-displacement graph is $F\\times s$, which represents work done.',
    difficulty: 1,
    points: 10,
    hints: ['Interpret the graph as force against displacement.', 'Area = force × distance.', 'That quantity is work.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-030-question.png'],
  },
  {
    id: 'wep-031',
    type: 'multiple_choice',
    question:
      'Two blocks $X$ and $Y$ are connected by a light string over a smooth pulley. Mass of $X$ is greater than mass of $Y$. They are released from rest. Which statements are correct?\n\n(1) Potential energy lost by $X$ equals potential energy gained by $Y$.\n(2) Kinetic energy gained by $X$ is greater than kinetic energy gained by $Y$.\n(3) Potential energy lost by $X$ equals the sum of kinetic energies gained by $X$ and $Y$.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(2) only',
    explanation:
      '(1) False: since $X$ is heavier, the PE lost by $X$ is greater than the PE gained by $Y$. (2) True: both have the same speed, but $X$ has greater mass, so $X$ gains greater KE. (3) False: part of the PE lost by $X$ also becomes the PE gained by $Y$.',
    difficulty: 2,
    points: 15,
    hints: ['Use same-speed constraint for connected bodies.', 'Compare KE using $\\tfrac12mv^2$.', 'Include PE gained by the lighter mass in the energy balance.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-031-question.png'],
  },
  {
    id: 'wep-032',
    type: 'multiple_choice',
    question:
      'A stone is projected vertically upwards. Neglecting air resistance, which graph shows the variation of kinetic energy $KE$ with distance travelled $s$ during its upward motion?',
    options: [
      '/physics/exercises/work-energy-power/wep-032-option-a.png',
      '/physics/exercises/work-energy-power/wep-032-option-b.png',
      '/physics/exercises/work-energy-power/wep-032-option-c.png',
      '/physics/exercises/work-energy-power/wep-032-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-032-option-b.png',
    explanation:
      'Kinetic energy decreases linearly with upward distance because $KE+PE$ is constant and $PE=mgs$ increases linearly with $s$. At $s=0$, KE is maximum; then it decreases along a straight line. So option B.',
    difficulty: 2,
    points: 15,
    hints: ['This is an energy vs distance graph, not vs time.', 'Use $PE=mgs$.', 'KE must decrease linearly as PE increases linearly.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-033',
    type: 'multiple_choice',
    question:
      'A trolley runs down a friction-compensated runway. Which statement is true?',
    options: [
      'The kinetic energy of the trolley increases with time.',
      'The sum of kinetic and potential energies of the trolley remains unchanged.',
      'The frictional force acting on the trolley is zero.',
      'The resultant force acting on the trolley is zero.',
    ],
    answer: 'The resultant force acting on the trolley is zero.',
    explanation:
      'On a friction-compensated runway, the component of weight down the slope is balanced by friction. So the trolley moves with constant velocity, meaning zero acceleration and zero resultant force.',
    difficulty: 2,
    points: 15,
    hints: ['Constant velocity implies zero resultant force.', 'Friction-compensated does not mean friction-free.', 'If KE is constant, acceleration is zero.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-033-question.png'],
  },
  {
    id: 'wep-034',
    type: 'multiple_choice',
    question:
      'A bullet of mass 0.02 kg travels at $450\\ \\mathrm{m\\ s^{-1}}$ into a wooden block and leaves at $400\\ \\mathrm{m\\ s^{-1}}$. What is the maximum number of identical blocks that the same bullet can pass through?',
    options: ['3', '4', '5', '9'],
    answer: '4',
    explanation:
      'Energy lost in one block is $W=\\tfrac12m(450^2-400^2)=425\\,\\mathrm{J}$. Initial KE is $\\tfrac12(0.02)(450^2)=2025\\,\\mathrm{J}$. Thus maximum number is $2025/425\\approx4.76$, so it can fully pass through 4 blocks.',
    difficulty: 2,
    points: 15,
    hints: ['Find energy loss through one block first.', 'Then compare with the bullet initial KE.', 'Take the greatest whole number of complete blocks.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-034-question.png'],
  },
  {
    id: 'wep-035',
    type: 'multiple_choice',
    question:
      'A motor car of mass 2500 kg accelerates from rest to $20\\ \\mathrm{m\\ s^{-1}}$ in 5 s on a level road. Find the average power of the car.',
    options: ['10 kW', '50 kW', '100 kW', '200 kW'],
    answer: '100 kW',
    explanation:
      'Average power is change in kinetic energy per time: $P=\\frac{\\tfrac12mv^2}{t}=\\frac{\\tfrac12(2500)(20^2)}{5}=100000\\,\\mathrm{W}=100\\,\\mathrm{kW}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use average power = energy transferred / time.', 'Initial speed is zero.', 'Convert W to kW at the end.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-036',
    type: 'multiple_choice',
    question:
      'A pendulum bob is released from rest at point $A$. At lowest point $B$, the string hits a fixed pin. Neglect air resistance. Which statements are correct?\n\n(1) The bob has maximum kinetic energy at $B$.\n(2) The highest level that the bob can reach is the level of the pin.\n(3) The work done by the tension of the string is zero throughout the motion.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(1) & (3) only',
    explanation:
      '(1) True: at the lowest point PE is minimum, so KE is maximum. (2) False: with no energy loss, the bob can only rise back to the same height as its release point, not specifically to the level of the pin. (3) True: tension is always perpendicular to the instantaneous motion, so it does no work.',
    difficulty: 2,
    points: 15,
    hints: ['Use energy conservation for highest point.', 'Tension in circular motion is radial, velocity is tangential.', 'Perpendicular force does no work.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-036-question.png'],
  },
  {
    id: 'wep-037',
    type: 'multiple_choice',
    question:
      'A machine lifts a load of 1200 N through height 1.5 m in 2 s. Find the average output power.',
    options: ['400 W', '900 W', '1800 W', '3600 W'],
    answer: '900 W',
    explanation:
      'Work done is $Fs=(1200)(1.5)=1800\\,\\mathrm{J}$. Average power is $P=1800/2=900\\,\\mathrm{W}$.',
    difficulty: 1,
    points: 10,
    hints: ['Work done = force × distance.', 'Then divide by time.', 'This is average power, not instantaneous power.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-038',
    type: 'multiple_choice',
    question:
      'Which of the following units does not represent energy?',
    options: ['Nm', 'Ws', 'J', '$\\mathrm{kg\\ m\\ s^{-2}}$'],
    answer: '$\\mathrm{kg\\ m\\ s^{-2}}$',
    explanation:
      '$\\mathrm{Nm}$, $\\mathrm{Ws}$, and $\\mathrm{J}$ are all energy units. $\\mathrm{kg\\ m\\ s^{-2}}$ is the unit of force (newton), not energy.',
    difficulty: 1,
    points: 10,
    hints: ['Recall equivalent units for joule.', 'A joule = newton metre.', 'A newton alone is force, not energy.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-039',
    type: 'multiple_choice',
    question:
      'A smooth inclined plane makes angle $30^{\\circ}$ with the horizontal. A man pulls a 50 kg block up the 6 m incline at uniform velocity in 30 s. Take $g=10\\ \\mathrm{m\\ s^{-2}}$. Find the average power of the man.',
    options: ['5 W', '10 W', '50 W', '87 W'],
    answer: '50 W',
    explanation:
      'On a smooth incline at uniform speed, work done by the man equals gain in potential energy. Vertical rise is $6\\sin30^\\circ=3\\,\\mathrm{m}$. So work $=mgh=(50)(10)(3)=1500\\,\\mathrm{J}$. Average power $=1500/30=50\\,\\mathrm{W}$.',
    difficulty: 2,
    points: 15,
    hints: ['Uniform speed means no KE change.', 'Use vertical height, not slope length directly.', 'Average power = work/time.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-039-question.png'],
  },
  {
    id: 'wep-040',
    type: 'multiple_choice',
    question:
      'A motor car of mass 2000 kg accelerates from rest at $3\\ \\mathrm{m\\ s^{-2}}$ for 4 s on a straight road. Find the average useful output power of the engine.',
    options: ['24 kW', '36 kW', '72 kW', '144 kW'],
    answer: '36 kW',
    explanation:
      'Final speed is $v=u+at=0+3\\times4=12\\,\\mathrm{m\\ s^{-1}}$. Average power is change in kinetic energy per time: $P=\\frac{\\tfrac12mv^2}{t}=\\frac{\\tfrac12(2000)(12^2)}{4}=36000\\,\\mathrm{W}=36\\,\\mathrm{kW}$.',
    difficulty: 1,
    points: 10,
    hints: ['Find final speed first.', 'Use change in KE over 4 s.', 'Convert watts to kilowatts.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-041',
    type: 'multiple_choice',
    question:
      'A 2 kg block is pulled upward by a string with constant tension 24 N. The block rises 4 m in 2 s. Which statements are correct?\n\n(1) Its potential energy is increasing while rising.\n(2) Its kinetic energy is increasing while rising.\n(3) The average power developed by the man during the 2 s is 40 W.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '(1) True: height increases, so PE increases. (2) True: tension 24 N is greater than weight $mg\\approx19.6\\,\\mathrm{N}$, so the block accelerates upward and KE increases. (3) False: average power is $P=\\frac{Fs}{t}=\\frac{24\\times4}{2}=48\\,\\mathrm{W}$.',
    difficulty: 2,
    points: 15,
    hints: ['Compare tension with weight.', 'If net force is upward, speed increases.', 'Average power from force × distance / time.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-041-question.png'],
  },
  {
    id: 'wep-042',
    type: 'multiple_choice',
    question:
      'A man pulls a suitcase along horizontal ground with a rope of tension 100 N inclined at angle $\\theta$ to the horizontal. Find the work done by the man in pulling it 5 m along the ground.',
    options: ['$500\\sin\\theta\\ \\mathrm{J}$', '$500\\cos\\theta\\ \\mathrm{J}$', '$500/\\sin\\theta\\ \\mathrm{J}$', '$500/\\cos\\theta\\ \\mathrm{J}$'],
    answer: '$500\\cos\\theta\\ \\mathrm{J}$',
    explanation:
      'Work done equals force component along displacement times distance. Horizontal component is $100\\cos\\theta$, so work is $(100\\cos\\theta)(5)=500\\cos\\theta\\,\\mathrm{J}$.',
    difficulty: 1,
    points: 10,
    hints: ['Only the component along displacement does work.', 'Displacement is horizontal.', 'Use $W=Fs\\cos\\phi$.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-042-question.png'],
  },
  {
    id: 'wep-043',
    type: 'multiple_choice',
    question:
      'A stone is thrown vertically upwards. Assuming air resistance is negligible, which statements are correct?\n\n(1) The acceleration decreases throughout the upward motion.\n(2) The net force becomes zero at the highest point.\n(3) The total energy of the stone remains unchanged throughout the motion.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '(1) False: acceleration is constant at $g$ downward. (2) False: at the highest point velocity is zero momentarily, but the net force is still the weight of the stone. (3) True: with no air resistance, total mechanical energy remains constant.',
    difficulty: 2,
    points: 15,
    hints: ['Distinguish velocity from acceleration at the top.', 'Gravity still acts at all times.', 'No air resistance means mechanical energy is conserved.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-044',
    type: 'multiple_choice',
    question:
      'A block is projected up a smooth inclined plane. Which graph shows the variation of kinetic energy (K.E.) with potential energy (P.E.) during the upward motion?',
    options: [
      '/physics/exercises/work-energy-power/wep-044-option-a.png',
      '/physics/exercises/work-energy-power/wep-044-option-b.png',
      '/physics/exercises/work-energy-power/wep-044-option-c.png',
      '/physics/exercises/work-energy-power/wep-044-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-044-option-c.png',
    explanation:
      'On a smooth incline, mechanical energy is conserved, so $KE+PE=E$ constant. Hence $KE=-PE+E$, a straight line of slope $-1$ with positive intercept. This matches option C.',
    difficulty: 2,
    points: 15,
    hints: ['Use conservation of mechanical energy.', 'Rearrange to $KE=-PE+\\text{constant}$.', 'Look for a straight line with slope -1.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-044-question.png'],
  },
  {
    id: 'wep-045',
    type: 'multiple_choice',
    question:
      'A Ferris wheel of diameter 18 m carries a passenger of mass 60 kg. The wheel rotates uniformly and takes 80 s for the passenger to travel from bottom to top. Find the average useful power output of the motor.',
    options: [
      '$(60\\times9.81\\times18)\\ \\mathrm{W}$',
      '$\\left(\\frac{60\\times9.81\\times18}{80}\\right)\\ \\mathrm{W}$',
      '$\\left(\\frac{60\\times9.81\\times\\pi\\times9}{80}\\right)\\ \\mathrm{W}$',
      '$(60\\times9.81\\times\\pi\\times9\\times80)\\ \\mathrm{W}$',
    ],
    answer: '$\\left(\\frac{60\\times9.81\\times18}{80}\\right)\\ \\mathrm{W}$',
    explanation:
      'Average useful power equals gain in gravitational potential energy per time: $P=\\frac{mgh}{t}=\\frac{60\\times9.81\\times18}{80}$. The rise from bottom to top is one diameter, 18 m.',
    difficulty: 2,
    points: 15,
    hints: ['Use vertical rise, not arc length.', 'Bottom to top is a height change of 18 m.', 'Average power = energy / time.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-045-question.png'],
  },
  {
    id: 'wep-046',
    type: 'multiple_choice',
    question:
      'A mother pushes a push-chair with uniform velocity $v$ along horizontal ground. Let $F$ be the horizontal force exerted on the push-chair. Which expression denotes the average output power?',
    options: ['Fv', 'mgv', '$(F-mg)v$', '$(F+mg)v$'],
    answer: 'Fv',
    explanation:
      'Power is force multiplied by velocity in the direction of the force. Since the push force is horizontal and the motion is horizontal with speed $v$, the power is $P=Fv$.',
    difficulty: 1,
    points: 10,
    hints: ['Use the component of force along the motion.', 'Velocity is horizontal.', 'Power formula is $P=Fv$ when aligned.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-046-question.png'],
  },
  {
    id: 'wep-047',
    type: 'multiple_choice',
    question:
      'Edmund rides a Ferris wheel rotating at uniform speed. Which physical quantity of Edmund remains unchanged?',
    options: ['velocity', 'kinetic energy', 'potential energy', 'total mechanical energy'],
    answer: 'kinetic energy',
    explanation:
      'Velocity changes direction continuously, so it is not constant. Potential energy changes with height, so total mechanical energy also changes if KE stays constant while PE changes. With uniform speed, kinetic energy remains constant because it depends only on speed.',
    difficulty: 1,
    points: 10,
    hints: ['Kinetic energy depends on speed, not direction.', 'Velocity is a vector.', 'Potential energy changes as height changes on the wheel.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-047-question.png'],
  },
  {
    id: 'wep-048',
    type: 'multiple_choice',
    question:
      'The diagram shows a weight-lifter lifting a weight of mass 80 kg from the floor to a height of 2 m. Find the work done by the weight-lifter.',
    options: ['160 J', '785 J', '1570 J', '3140 J'],
    answer: '1570 J',
    explanation:
      'Work done equals gain in gravitational potential energy: $W=mgh=(80)(9.81)(2)\\approx1570\\,\\mathrm{J}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use gravitational PE formula.', 'Height rise is 2 m.', 'Use $g=9.81\\ \\mathrm{m\\ s^{-2}}$.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-048-question.png'],
  },
  {
    id: 'wep-049',
    type: 'multiple_choice',
    question:
      'John releases a marble from the top of smooth rail $A$ at the edge of a table. He repeats the same process using another smooth rail $B$. Which statements about the marble are correct?\n\n(1) It has the same velocity at the ends of both rails.\n(2) It has the same kinetic energy at the ends of both rails.\n(3) It takes the same time to travel through both rails.',
    options: ['(1) only', '(2) only', '(3) only', '(1), (2) & (3)'],
    answer: '(2) only',
    explanation:
      '(1) False: the directions at the rail ends differ, so velocities are not the same vectors. (2) True: the marble loses the same gravitational potential energy, so it gains the same kinetic energy. (3) False: different path shapes give different accelerations and travel times.',
    difficulty: 2,
    points: 15,
    hints: ['Velocity includes direction.', 'Use conservation of energy for KE.', 'Travel time depends on path shape and acceleration profile.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-049-question.png'],
  },
  {
    id: 'wep-050',
    type: 'multiple_choice',
    question:
      'A car stopped after emergency braking. The skid mark was 22.3 m long. Assume friction between road and tyres was 0.65 times the weight of the car. Estimate the speed when it began to skid.',
    options: ['$5.38\\ \\mathrm{m\\ s^{-1}}$', '$11.8\\ \\mathrm{m\\ s^{-1}}$', '$16.1\\ \\mathrm{m\\ s^{-1}}$', '$16.9\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$16.9\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Loss of kinetic energy equals work done against friction: $\\tfrac12mu^2=fs$. With $f=0.65mg$, $\\tfrac12u^2=0.65gs$. Substituting $g=9.81$ and $s=22.3$ gives $u\\approx16.9\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use work-energy theorem.', 'Replace friction with $0.65mg$.', 'Mass cancels from the equation.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-051',
    type: 'multiple_choice',
    question:
      'A high-diver jumps up from a spring board and then falls into a swimming pool. Which graph best shows the variation of her kinetic energy $K$ with time $t$ from just after leaving the board to just before entering the water? (Neglect air resistance.)',
    options: [
      '/physics/exercises/work-energy-power/wep-051-option-a.png',
      '/physics/exercises/work-energy-power/wep-051-option-b.png',
      '/physics/exercises/work-energy-power/wep-051-option-c.png',
      '/physics/exercises/work-energy-power/wep-051-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-051-option-c.png',
    explanation:
      'The diver starts with some initial kinetic energy, then KE decreases to zero at the highest point, and then increases again during the fall. This matches option C.',
    difficulty: 2,
    points: 15,
    hints: ['She already has non-zero speed when leaving the board.', 'At the top, speed is zero.', 'Then KE increases again during descent.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-052',
    type: 'multiple_choice',
    question:
      'An electrical toy car of mass $m$ goes up an inclined plane of inclination $30^{\\circ}$ with constant speed $v$. The air resistance is half of the weight of the car. What is the average power of the car?',
    options: ['$\\frac{1}{2}mgv$', '$mgv$', '$\\frac{3}{2}mgv$', '$2mgv$'],
    answer: '$mgv$',
    explanation:
      'At constant speed, driving force balances all resisting forces: component of weight down plane is $mg\\sin30^\\circ=\\tfrac12mg$, and air resistance is also $\\tfrac12mg$. Total resisting force is $mg$. So power $P=Fv=mgv$.',
    difficulty: 2,
    points: 15,
    hints: ['Constant speed means net force is zero.', 'Add both resisting forces.', 'Then use $P=Fv$.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-053',
    type: 'multiple_choice',
    question:
      'A 1 kg block slides down an inclined plane of inclination $30^{\\circ}$ with constant speed. What are the gain in kinetic energy and the work done against friction after travelling 2 m along the plane? (Take $g=10\\ \\mathrm{m\\ s^{-2}}$.)',
    options: [
      'Gain in K.E. = 0 J, Work done against friction = 10 J',
      'Gain in K.E. = 10 J, Work done against friction = 10 J',
      'Gain in K.E. = 0 J, Work done against friction = 20 J',
      'Gain in K.E. = 10 J, Work done against friction = 30 J',
    ],
    answer: 'Gain in K.E. = 0 J, Work done against friction = 10 J',
    explanation:
      'Constant speed means kinetic energy does not change, so gain in KE is 0. Work done against friction equals component of weight along the plane times distance: $mgs\\sin30^\\circ=(1)(10)(2)(0.5)=10\\,\\mathrm{J}$.',
    difficulty: 2,
    points: 15,
    hints: ['Constant speed implies no change in KE.', 'Use the downslope component $mg\\sin\\theta$.', 'Multiply by distance along the slope.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-053-question.png'],
  },
  {
    id: 'wep-054',
    type: 'multiple_choice',
    question:
      'A skier slides down a slope. Assume constant friction along the slope. Which graph best describes the change of energy of the skier with distance down the slope?',
    options: [
      '/physics/exercises/work-energy-power/wep-054-option-a.png',
      '/physics/exercises/work-energy-power/wep-054-option-b.png',
      '/physics/exercises/work-energy-power/wep-054-option-c.png',
      '/physics/exercises/work-energy-power/wep-054option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-054option-d.png',
    explanation:
      'Energy against distance should be represented by straight lines. As the skier moves down, gravitational potential energy is converted into kinetic energy plus work done against friction. Therefore the gain in KE is less than the loss in PE, which matches option D.',
    difficulty: 2,
    points: 15,
    hints: ['Energy vs distance should vary linearly under constant forces.', 'Friction removes part of the mechanical energy.', 'So KE rises less steeply than PE falls.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-054-question.png'],
  },
  {
    id: 'wep-055',
    type: 'multiple_choice',
    question:
      'A car travels at constant speed $15\\ \\mathrm{m\\ s^{-1}}$ along a horizontal road. The total resisting force is 500 N. Which statements are correct?\n\n(1) The car travels 120 m in 8 s.\n(2) The work done in overcoming resistance in 8 s is 60 kJ.\n(3) The output power of the car is 7.5 kW.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '(1) $s=vt=(15)(8)=120\\,\\mathrm{m}$. (2) Work done is $Fs=(500)(120)=60000\\,\\mathrm{J}=60\\,\\mathrm{kJ}$. (3) Power is $Fv=(500)(15)=7500\\,\\mathrm{W}=7.5\\,\\mathrm{kW}$. All three are correct.',
    difficulty: 1,
    points: 10,
    hints: ['Use constant-speed formulas directly.', 'Distance is speed × time.', 'Power can be found from $Fv$.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-056',
    type: 'multiple_choice',
    question:
      'A fish jumps vertically up to a maximum height of 0.5 m above the water surface. What is its speed when it just leaves the surface?',
    options: ['$3.13\\ \\mathrm{m\\ s^{-1}}$', '$4.47\\ \\mathrm{m\\ s^{-1}}$', '$6.32\\ \\mathrm{m\\ s^{-1}}$', '$9.81\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$3.13\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Using energy conservation, $\\tfrac12mu^2=mgh$. So $\\tfrac12u^2=9.81\\times0.5$, giving $u=3.13\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 1,
    points: 10,
    hints: ['At the maximum height, final speed is zero.', 'Use $\\tfrac12mu^2=mgh$.', 'Mass cancels.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-057',
    type: 'multiple_choice',
    question:
      'The figure shows the velocity-time graph of a car travelling on a horizontal straight road. Which statements are correct?\n\n(1) Area under the graph equals the total displacement.\n(2) The acceleration of the car is maximum at time $t_1$.\n(3) The kinetic energy of the car remains unchanged throughout the whole journey.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '(1) True: area under a velocity-time graph gives displacement. (2) False: acceleration is the slope of the graph; at $t_1$ the slope is zero, so acceleration is minimum there. (3) False: kinetic energy changes whenever speed changes.',
    difficulty: 2,
    points: 15,
    hints: ['Interpret area and slope on a $v$-$t$ graph.', 'Acceleration comes from gradient.', 'KE depends on speed, not just motion direction.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-057-question.png'],
  },
  {
    id: 'wep-058',
    type: 'multiple_choice',
    question:
      'An object is released from rest. Which graph best describes the variation of its kinetic energy with time during falling? (Neglect air resistance.)',
    options: [
      '/physics/exercises/work-energy-power/wep-058-option-a.png',
      '/physics/exercises/work-energy-power/wep-058-option-b.png',
      '/physics/exercises/work-energy-power/wep-058-option-c.png',
      '/physics/exercises/work-energy-power/wep-058-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-058-option-b.png',
    explanation:
      'Released from rest gives $u=0$, so $v=gt$ and hence $v\\propto t$. Since $KE=\\tfrac12mv^2$, kinetic energy is proportional to $t^2$. Therefore the graph is an upward-opening quadratic curve.',
    difficulty: 2,
    points: 15,
    hints: ['Use $v=gt$ for free fall from rest.', 'Kinetic energy depends on $v^2$.', 'Look for a quadratic rise from zero.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-059',
    type: 'multiple_choice',
    question:
      'John performs a bungee jump. He falls from rest at $A$. At $B$, the elastic cord starts to stretch. He is momentarily at rest at $C$ and then bounces up. Which descriptions are correct? (Neglect air resistance.)\n\n(1) From $A$ to $B$, John is in free fall.\n(2) From $B$ to $C$, the gravitational potential energy of John increases.\n(3) At $C$, there is no net force acting on John.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      '(1) True: before the cord stretches, only gravity acts. (2) False: from $B$ to $C$ he continues downward, so gravitational potential energy decreases. (3) False: at $C$ he is momentarily at rest but accelerating upward to bounce back, so net force is not zero.',
    difficulty: 2,
    points: 15,
    hints: ['Before stretching, the cord exerts no force.', 'Going downward reduces gravitational PE.', 'Zero velocity at an instant does not imply zero force.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-059-question.png'],
  },
  {
    id: 'wep-060',
    type: 'multiple_choice',
    question:
      'When a skydiver falls steadily in air under no net force, which description of his gravitational potential energy, kinetic energy and power in overcoming air resistance is correct?',
    options: [
      'Gravitational potential energy decreases; kinetic energy increases; power in overcoming air resistance increases',
      'Gravitational potential energy decreases; kinetic energy increases; power in overcoming air resistance remains unchanged',
      'Gravitational potential energy decreases; kinetic energy remains unchanged; power in overcoming air resistance remains unchanged',
      'Gravitational potential energy remains unchanged; kinetic energy increases; power in overcoming air resistance increases',
    ],
    answer: 'Gravitational potential energy decreases; kinetic energy remains unchanged; power in overcoming air resistance remains unchanged',
    explanation:
      'Steady fall means constant speed, so kinetic energy remains unchanged. As the skydiver falls, gravitational potential energy decreases. With no net force, air resistance balances weight and both force and speed are constant, so power against air resistance remains unchanged.',
    difficulty: 2,
    points: 15,
    hints: ['Steady motion means constant velocity.', 'Constant speed gives constant KE.', 'Use $P=Fv$ with constant $F$ and $v$.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-061',
    type: 'multiple_choice',
    question:
      'A ball of mass 0.5 kg resting on horizontal ground is kicked. It travels 10 m along a straight path and comes to rest. If the average resistive force is 3 N, what is its initial speed?',
    options: ['$3.2\\ \\mathrm{m\\ s^{-1}}$', '$7.7\\ \\mathrm{m\\ s^{-1}}$', '$11.0\\ \\mathrm{m\\ s^{-1}}$', '$15.0\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$11.0\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Loss of kinetic energy equals work done against resistance: $\\tfrac12mu^2=fs$. So $\\tfrac12(0.5)u^2=(3)(10)$, giving $u\\approx10.95\\,\\mathrm{m\\ s^{-1}}\\approx11.0\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use work-energy theorem.', 'Final kinetic energy is zero.', 'Solve directly for $u$.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-062',
    type: 'multiple_choice',
    question:
      'A constant force $F$ is applied to an object initially at rest on a horizontal smooth surface. Which graph best represents the variation of power $P$ developed by the force with time $t$?',
    options: [
      '/physics/exercises/work-energy-power/wep-062-option-a.png',
      '/physics/exercises/work-energy-power/wep-062-option-b.png',
      '/physics/exercises/work-energy-power/wep-062-option-c.png',
      '/physics/exercises/work-energy-power/wep-062-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-062-option-b.png',
    explanation:
      'Power is $P=Fv$. Since $F$ is constant, $P\\propto v$. On a smooth surface with constant force, acceleration is constant and the object starts from rest, so $v\\propto t$. Hence $P\\propto t$: a straight line through the origin.',
    difficulty: 2,
    points: 15,
    hints: ['Use $P=Fv$.', 'Constant force on smooth surface gives constant acceleration.', 'From rest, speed increases linearly with time.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-062-question.png'],
  },
  {
    id: 'wep-063',
    type: 'multiple_choice',
    question:
      'A tram of mass 1500 kg is pulled up a $30^{\\circ}$ slope at uniform speed. The average resistive force along the tram is 200 N. What is the energy required for the tram to move 100 m up the slope?',
    options: ['20 kJ', '734 kJ', '756 kJ', '1500 kJ'],
    answer: '756 kJ',
    explanation:
      'Required pulling force is $F=mg\\sin30^\\circ+200=(1500)(9.81)(0.5)+200=7557.5\\,\\mathrm{N}$. Energy required over 100 m is $Fs=7557.5\\times100=755750\\,\\mathrm{J}\\approx756\\,\\mathrm{kJ}$.',
    difficulty: 2,
    points: 15,
    hints: ['At uniform speed, applied force balances downhill forces.', 'Include both component of weight and resistance.', 'Then multiply force by distance.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-063-question.png'],
  },
  {
    id: 'wep-064',
    type: 'multiple_choice',
    question:
      'An object is released from rest at the top of a building of height $h$. At time $t_1$, the object is at half the height of the building. At time $t_2$, the object just reaches the ground. Which of the following is/are correct? (Neglect air resistance.)\n\n(1) Velocity at $t_2$ = 2 × velocity at $t_1$\n(2) $t_2=2\\times t_1$\n(3) K.E. at $t_2$ = 2 × K.E. at $t_1$',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(3) only',
    explanation:
      '(1) False: from $v^2=2as$, speed is proportional to $\\sqrt{s}$, so doubling distance makes speed multiply by $\\sqrt2$, not 2. (2) False: from $s=\\tfrac12at^2$, time is proportional to $\\sqrt{s}$, so $t_2=\\sqrt2\\,t_1$, not $2t_1$. (3) True: kinetic energy gained equals loss of potential energy, and the loss of PE at $t_2$ is twice that at $t_1$.',
    difficulty: 2,
    points: 15,
    hints: ['Use $v^2=2as$ for free fall from rest.', 'Use $s=\\tfrac12at^2$ for time.', 'Kinetic energy gain equals lost gravitational potential energy.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-064-question.png'],
  },
  {
    id: 'wep-065',
    type: 'multiple_choice',
    question:
      'A car is travelling along a straight horizontal path at $16\\ \\mathrm{m\\ s^{-1}}$ initially. The driver sees an obstacle and applies the brake. The velocity-time graph of his car is shown. What is the magnitude of the deceleration of the car during braking?',
    options: ['$3.56\\ \\mathrm{m\\ s^{-2}}$', '$4.85\\ \\mathrm{m\\ s^{-2}}$', '$13.3\\ \\mathrm{m\\ s^{-2}}$', '$26.4\\ \\mathrm{m\\ s^{-2}}$'],
    answer: '$4.85\\ \\mathrm{m\\ s^{-2}}$',
    explanation:
      'During braking, the deceleration is the magnitude of the slope of the velocity-time graph: $a=\\frac{16}{4.5-1.2}=4.85\\,\\mathrm{m\\ s^{-2}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use gradient of the sloping part of the $v$-$t$ graph.', 'Take the speed drop as 16 m/s.', 'Use the braking interval from 1.2 s to 4.5 s.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-065-question.png'],
  },
  {
    id: 'wep-066',
    type: 'multiple_choice',
    question:
      'A car is travelling along a straight horizontal path at $16\\ \\mathrm{m\\ s^{-1}}$ initially. The driver sees an obstacle and applies the brake. The velocity-time graph of his car is shown. Which graph best represents the variation of the kinetic energy (K.E.) of the car with distance $s$ travelled?',
    options: [
      '/physics/exercises/work-energy-power/wep-066-option-a.png',
      '/physics/exercises/work-energy-power/wep-066-option-b.png',
      '/physics/exercises/work-energy-power/wep-066-option-c.png',
      '/physics/exercises/work-energy-power/wep-066-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-066-option-a.png',
    explanation:
      'Before braking, speed is constant, so kinetic energy is constant. During braking, work done against friction gives $KE=KE_0-fs$, a straight line with negative slope versus distance. This matches option A.',
    difficulty: 2,
    points: 15,
    hints: ['KE is constant while speed is constant.', 'During braking, use work-energy: loss in KE equals work against braking force.', 'That gives a linear decrease with distance.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-066-question.png'],
  },
  {
    id: 'wep-067',
    type: 'multiple_choice',
    question:
      'A horizontal force $F$ is applied to a 4 kg block initially at rest on a smooth horizontal surface. The variation of $F$ with displacement $s$ is shown. The direction of $F$ remains unchanged. What is the work done on the block by $F$ from $s=2\\ \\mathrm{m}$ to $5\\ \\mathrm{m}$?',
    options: ['16 J', '24 J', '32 J', '40 J'],
    answer: '24 J',
    explanation:
      'Work done equals the area under the force-displacement graph from 2 m to 5 m. From the graph this region is a rectangle of width 3 m and height 8 N, so $W=(5-2)\\times8=24\\,\\mathrm{J}$.',
    difficulty: 1,
    points: 10,
    hints: ['Work is area under an $F$-$s$ graph.', 'Use only the interval 2 m to 5 m.', 'Width is displacement interval, height is force.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-067-question.png'],
  },
  {
    id: 'wep-068',
    type: 'multiple_choice',
    question:
      'A block of mass 5 kg is projected up a smooth inclined plane of inclination $\\theta$. The graph shows the variation of kinetic energy of the block with distance $s$ travelled up the plane. Find the angle $\\theta$. Take $g=10\\ \\mathrm{m\\ s^{-2}}$.',
    options: ['$5.7^{\\circ}$', '$11.5^{\\circ}$', '$23.6^{\\circ}$', '$26.7^{\\circ}$'],
    answer: '$11.5^{\\circ}$',
    explanation:
      'From the graph, initial kinetic energy is 24 J and it becomes zero after 2.4 m. On a smooth incline, loss of KE equals gain of PE: $24=(5)(10)(2.4)\\sin\\theta$. Hence $\\sin\\theta=0.2$, so $\\theta=11.5^{\\circ}$.',
    difficulty: 2,
    points: 15,
    hints: ['Read the initial KE and stopping distance from the graph.', 'Use conservation of mechanical energy.', 'Set lost KE equal to gained PE.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-068-question.png'],
  },
  {
    id: 'wep-069',
    type: 'multiple_choice',
    question:
      'A car of mass 1500 kg accelerates from rest along a straight road. The figure shows the variation of its kinetic energy (K.E.) with the square of time $t^2$. What is the acceleration of the car?',
    options: ['$0.89\\ \\mathrm{m\\ s^{-2}}$', '$1.41\\ \\mathrm{m\\ s^{-2}}$', '$2.00\\ \\mathrm{m\\ s^{-2}}$', '$4.00\\ \\mathrm{m\\ s^{-2}}$'],
    answer: '$2.00\\ \\mathrm{m\\ s^{-2}}$',
    explanation:
      'For motion from rest, $KE=\\tfrac12mv^2=\\tfrac12m(at)^2=\\tfrac12ma^2t^2$. From the graph, when $t^2=5\\,\\mathrm{s^2}$, $KE=15000\\,\\mathrm{J}$. So $15000=\\tfrac12(1500)a^2(5)$, giving $a=2.00\\,\\mathrm{m\\ s^{-2}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Express KE in terms of $t^2$.', 'Use the graph point directly.', 'Solve for $a$ from the coefficient of $t^2$.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-069-question.png'],
  },
  {
    id: 'wep-070',
    type: 'multiple_choice',
    question:
      'A ball moves along a smooth curved rail and passes $P$ at a certain speed. Neglecting air resistance and friction, which statements about the motion are correct?\n\n(1) The ball has maximum kinetic energy at $R$.\n(2) The speed of the ball at $S$ is the same as that at $Q$.\n(3) The ball can never reach $T$.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '(1) True: at the lowest point, potential energy is minimum, so kinetic energy is maximum. (2) True: at the same height, the ball has the same potential energy and therefore the same speed. (3) False: since the ball already has kinetic energy at $P$, it may reach $T$ if its total mechanical energy is high enough.',
    difficulty: 2,
    points: 15,
    hints: ['Use conservation of mechanical energy.', 'Lowest point gives maximum KE.', 'Whether it reaches a higher point depends on total energy, not just position.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-070-question.png'],
  },
  {
    id: 'wep-071',
    type: 'multiple_choice',
    question:
      'A mass is released from rest at $P$ from a high platform into a swimming pool. It reaches the water surface at $Q$, enters the water, and finally reaches a maximum depth at $R$. Which descriptions are correct?\n\n(1) From $P$ to $Q$, the acceleration of the mass is increasing.\n(2) From $Q$ to $R$, the net force acting on the mass points upward.\n(3) From $P$ to $R$, the gravitational potential energy loss of the mass equals its kinetic energy gain.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '(1) False: from $P$ to $Q$ it is in free fall, so acceleration is constant at $g$. (2) True: from $Q$ to $R$ the mass is slowing down while moving downward, so acceleration and net force are upward. (3) False: some gravitational potential energy is lost to work done against water resistance, and at $R$ the kinetic energy is zero.',
    difficulty: 2,
    points: 15,
    hints: ['Free fall has constant acceleration.', 'If an object slows while moving downward, acceleration is upward.', 'Energy is dissipated by water resistance.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-071-question.png'],
  },
  {
    id: 'wep-072',
    type: 'multiple_choice',
    question:
      'When a body falls freely in air with air resistance negligible, its total mechanical energy',
    options: ['increases during the fall.', 'decreases during the fall.', 'remains constant during the fall.', 'is zero at the beginning of the fall.'],
    answer: 'remains constant during the fall.',
    explanation:
      'With negligible air resistance, no non-conservative work is done. Mechanical energy is conserved, so gravitational potential energy decreases while kinetic energy increases by the same amount.',
    difficulty: 1,
    points: 10,
    hints: ['Mechanical energy is KE + PE.', 'No air resistance means no dissipative work.', 'PE converts into KE.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-073',
    type: 'multiple_choice',
    question:
      'Two small balls $X$ and $Y$ of masses 1 kg and 2 kg are released from rest at heights $4h$ and $h$ above the ground. If air resistance is negligible, which statements are correct?\n\n(1) The acceleration of ball $X$ doubles that of ball $Y$.\n(2) The time taken for ball $X$ to reach the ground is double that of ball $Y$.\n(3) The kinetic energy of ball $X$ when reaching the ground is double that of ball $Y$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '(1) False: both accelerate at the same rate $g$. (2) True: from $s=\\tfrac12gt^2$, time is proportional to $\\sqrt h$, so falling from $4h$ takes twice as long as from $h$. (3) True: KE gained equals lost PE, so $KE\\propto mh$; ratio is $(1\\times4h):(2\\times h)=2:1$.',
    difficulty: 2,
    points: 15,
    hints: ['Free-fall acceleration is independent of mass.', 'Use $s\\propto t^2$.', 'Use KE gain = PE loss.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-073-question.png'],
  },
  {
    id: 'wep-074',
    type: 'multiple_choice',
    question:
      'Three toy cars $P$, $Q$ and $R$ move along a straight line. The velocity-time ($v$-$t$) graphs of the three toy cars are shown. Which of the toy cars experience(s) an increase in kinetic energy during the motion?',
    options: ['$P$ only', '$R$ only', '$P$ & $Q$ only', '$Q$ & $R$ only'],
    answer: '$P$ only',
    explanation:
      'Kinetic energy depends on $v^2$. An increase in kinetic energy requires an increase in speed. From the given $v$-$t$ graphs, only car $P$ shows increasing speed.',
    difficulty: 2,
    points: 15,
    hints: ['KE depends on speed, not direction.', 'Read speed changes directly from the $v$-$t$ graphs.', 'Only increasing speed means increasing KE.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-074-question.png'],
  },
  {
    id: 'wep-075',
    type: 'multiple_choice',
    question:
      'Three toy cars $P$, $Q$ and $R$ move along a straight line. The velocity-time ($v$-$t$) graphs of the three toy cars are shown. Which of the toy cars has/have an unbalanced force acting during the motion?',
    options: ['$P$ only', '$R$ only', '$P$ & $Q$ only', '$Q$ & $R$ only'],
    answer: '$P$ & $Q$ only',
    explanation:
      'An unbalanced force causes acceleration. From the $v$-$t$ graphs, car $P$ is accelerating and car $Q$ is decelerating, so both have non-zero acceleration. Car $R$ moves with uniform velocity, so its acceleration is zero and there is no unbalanced force.',
    difficulty: 2,
    points: 15,
    hints: ['Use slope of the $v$-$t$ graph.', 'Non-zero slope means acceleration.', 'Acceleration implies non-zero net force.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-075-question.png'],
  },
  {
    id: 'wep-076',
    type: 'multiple_choice',
    question:
      'An electric motor lifts a 10 N load through a vertical distance of 3 m. The total electrical energy supplied is 54 J. What amount of energy is wasted by the motor?',
    options: ['18 J', '24 J', '30 J', '44 J'],
    answer: '24 J',
    explanation:
      'Useful work done is $Fs=(10)(3)=30\\,\\mathrm{J}$. Energy wasted = input energy - useful output = $54-30=24\\,\\mathrm{J}$.',
    difficulty: 1,
    points: 10,
    hints: ['Useful output is gain in gravitational PE.', 'Compute useful work first.', 'Subtract from total input energy.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-077',
    type: 'multiple_choice',
    question:
      'A windmill raises 270 kg of water every day from a well 12 m deep. What is the useful power extracted from the wind? (Take $g=10\\ \\mathrm{m\\ s^{-2}}$.)',
    options: ['0.375 W', '0.9375 W', '9.375 W', '135 W'],
    answer: '0.375 W',
    explanation:
      'Useful energy gained by the water each day is $mgh=(270)(10)(12)=32400\\,\\mathrm{J}$. Average power is $P=E/t=32400/(24\\times60\\times60)=0.375\\,\\mathrm{W}$.',
    difficulty: 1,
    points: 10,
    hints: ['Compute daily gain in gravitational PE first.', 'A day has 86400 s.', 'Average power = energy / time.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-078',
    type: 'multiple_choice',
    question:
      'David exerts a horizontal force of 500 N on a block on a rough horizontal surface. Friction is 100 N. After the block moves 3 m, what is the gain in kinetic energy of the block?',
    options: ['300 J', '1200 J', '1500 J', '1800 J'],
    answer: '1200 J',
    explanation:
      'Work done by David is $500\\times3=1500\\,\\mathrm{J}$. Work done against friction is $100\\times3=300\\,\\mathrm{J}$. Gain in kinetic energy is the net work: $1500-300=1200\\,\\mathrm{J}$.',
    difficulty: 1,
    points: 10,
    hints: ['Use work-energy theorem.', 'Net work = applied work - work against friction.', 'Distance is 3 m.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-079',
    type: 'multiple_choice',
    question:
      'Peter pushes a cart along a level road and then lets it go. As the cart is slowing down, the main energy change of the cart is',
    options: [
      'from chemical energy to internal energy.',
      'from chemical energy to kinetic energy.',
      'from kinetic energy to internal energy.',
      'from kinetic energy to potential energy.',
    ],
    answer: 'from kinetic energy to internal energy.',
    explanation:
      'As the cart slows down, it loses kinetic energy. The slowing is mainly due to friction, so that mechanical energy is dissipated as internal energy (heating).',
    difficulty: 1,
    points: 10,
    hints: ['A slowing object loses kinetic energy.', 'On a level road, there is no significant PE change.', 'Friction converts mechanical energy to internal energy.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-080',
    type: 'multiple_choice',
    question:
      'When a wooden block is rubbed against sand-paper, which statements are correct?\n\n(1) Friction acts on the wooden block by the sand-paper.\n(2) Work done against friction is converted into internal energy.\n(3) The temperature of the rubbed surface of the block rises.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '(1) True: the rough sand-paper exerts friction on the block. (2) True: work against friction becomes internal energy. (3) True: increased internal energy raises the temperature of the rubbed surfaces.',
    difficulty: 1,
    points: 10,
    hints: ['Friction always acts between contacting surfaces.', 'Frictional work becomes internal energy.', 'Heating is the observable effect.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-081',
    type: 'multiple_choice',
    question:
      'Which of the following physical quantities is not a vector?',
    options: ['acceleration', 'displacement', 'weight', 'work'],
    answer: 'work',
    explanation:
      'Acceleration, displacement, and weight (a force) are vectors. Work is a scalar quantity: it has magnitude but no direction.',
    difficulty: 1,
    points: 10,
    hints: ['Forces are vectors.', 'Displacement and acceleration include direction.', 'Work is energy transfer and is scalar.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-082',
    type: 'multiple_choice',
    question:
      'A student pushes a block of mass 0.25 kg initially at rest on a smooth horizontal surface. The variation of applied force $F$ with displacement $s$ is shown. What is the speed of the block after it has been pushed for 6 m?',
    options: ['$12.5\\ \\mathrm{m\\ s^{-1}}$', '$15.5\\ \\mathrm{m\\ s^{-1}}$', '$17.5\\ \\mathrm{m\\ s^{-1}}$', '$25.5\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$15.5\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Area under the $F$-$s$ graph gives work done, which equals gain in kinetic energy. From the graph, area is $\\tfrac12(10)(6)=30\\,\\mathrm{J}$. So $\\tfrac12(0.25)v^2=30$, giving $v\\approx15.5\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use the area under the force-displacement graph.', 'Smooth surface means all work becomes KE.', 'Then solve from $\\tfrac12mv^2$.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-082-question.png'],
  },
  {
    id: 'wep-083',
    type: 'multiple_choice',
    question:
      'An object of mass 0.5 kg is raised vertically from the ground by a motor. It is raised 2.5 m in 1.5 s with uniform speed. Estimate the output power of the motor. Neglect air resistance.',
    options: ['5.5 W', '8.2 W', '11.0 W', '16.4 W'],
    answer: '8.2 W',
    explanation:
      'Output power is gain in gravitational potential energy per time: $P=\\frac{mgh}{t}=\\frac{(0.5)(9.81)(2.5)}{1.5}\\approx8.2\\,\\mathrm{W}$.',
    difficulty: 1,
    points: 10,
    hints: ['Uniform speed means no KE change.', 'Only the PE increase matters.', 'Use average power = energy / time.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-084',
    type: 'multiple_choice',
    question:
      'A bullet of mass 50 g is fired at $400\\ \\mathrm{m\\ s^{-1}}$ and passes through a fixed wooden block of thickness 6 cm, emerging at $250\\ \\mathrm{m\\ s^{-1}}$. Find the average resistive force acting on the bullet due to the block. Neglect air resistance and gravity.',
    options: ['$4.06\\times10^4\\ \\mathrm{N}$', '$1.02\\times10^4\\ \\mathrm{N}$', '125 N', 'Answer cannot be found as the time is not known.'],
    answer: '$4.06\\times10^4\\ \\mathrm{N}$',
    explanation:
      'Use work-energy: initial KE = final KE + work against resistance. So $\\tfrac12(0.050)(400^2)=\\tfrac12(0.050)(250^2)+F(0.06)$. Solving gives $F\\approx4.06\\times10^4\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Convert 50 g to 0.050 kg.', 'Thickness 6 cm is 0.06 m.', 'Use loss in KE = work done against resistance.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-084-question.png'],
  },
  {
    id: 'wep-085',
    type: 'multiple_choice',
    question:
      'Two small identical blocks slide down from rest on smooth incline planes from the same height $H$. Their bottom speeds are $v_1$ and $v_2$, and the times taken are $t_1$ and $t_2$. Which is correct? Neglect air resistance.',
    options: ['$v_1>v_2$ and $t_1=t_2$', '$v_1>v_2$ and $t_1<t_2$', '$v_1=v_2$ and $t_1=t_2$', '$v_1=v_2$ and $t_1<t_2$'],
    answer: '$v_1=v_2$ and $t_1<t_2$',
    explanation:
      'Both start from the same height, so by energy conservation they reach the bottom with the same speed. The steeper incline gives larger acceleration and a shorter path, so the time taken is shorter there. Hence $v_1=v_2$ and $t_1<t_2$.',
    difficulty: 2,
    points: 15,
    hints: ['Same height drop gives same final speed on smooth tracks.', 'Acceleration along an incline is $g\\sin\\theta$.', 'A steeper plane gives a shorter travel time here.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-085-question.png'],
  },
  {
    id: 'wep-086',
    type: 'multiple_choice',
    question:
      'An object is released from rest and falls from $P$ to $Q$. Throughout the motion, air resistance increases with the speed of the object. Which descriptions are correct?\n\n(1) The net force acting on the object is constant throughout the motion.\n(2) The magnitude of the object\'s acceleration decreases from $P$ to $Q$.\n(3) The kinetic energy gained by the object from $P$ to $Q$ is equal to its loss in gravitational potential energy.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '(1) False: net force is $mg-R$, and since air resistance $R$ increases with speed, the net force decreases. (2) True: smaller net force means smaller acceleration magnitude. (3) False: some lost gravitational potential energy is dissipated by air resistance, so KE gain is less than PE loss.',
    difficulty: 2,
    points: 15,
    hints: ['Net force is weight minus air resistance.', 'Air resistance grows as speed increases.', 'With dissipation, not all lost PE becomes KE.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-086-question.png'],
  },
  {
    id: 'wep-087',
    type: 'multiple_choice',
    question:
      'An object at a certain height falls freely from rest under gravity. Which graph correctly shows the variation of its gravitational potential energy $U$ with time $t$? Neglect air resistance and take $U=0$ at the ground.',
    options: [
      '/physics/exercises/work-energy-power/wep-087-option-a.png',
      '/physics/exercises/work-energy-power/wep-087-option-b.png',
      '/physics/exercises/work-energy-power/wep-087-option-c.png',
      '/physics/exercises/work-energy-power/wep-087-option-d.png',
    ],
    answer: '/physics/exercises/work-energy-power/wep-087-option-c.png',
    explanation:
      'Released from rest gives $v=gt$, so kinetic energy increases as $t^2$. Since total mechanical energy is constant, gravitational potential energy must decrease as a downward-opening quadratic curve with time. This matches option C.',
    difficulty: 2,
    points: 15,
    hints: ['For free fall from rest, $v\\propto t$.', 'Then $KE\\propto t^2$.', 'Use $PE+KE=\\text{constant}$.'],
    sectionId: 'work-energy-power',
  },
  {
    id: 'wep-088',
    type: 'multiple_choice',
    question:
      'A crane moves a load of weight $W$ steadily from point $P$ to point $Q$ as shown. The work done on the load by the crane is',
    options: ['$Wy$', '$W(x+y)$', '$\\sqrt{Wz}$', '$Wz\\cos\\theta$'],
    answer: '$Wy$',
    explanation:
      'Since the load is moved steadily, the work done by the crane equals the gain in gravitational potential energy, which depends only on the vertical rise $y$. Thus the work done is $Wy$.',
    difficulty: 1,
    points: 10,
    hints: ['Steady lifting means no KE change.', 'Work done equals gain in gravitational PE.', 'Only vertical rise matters for PE change.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-088-question.png'],
  },
  {
    id: 'wep-089',
    type: 'multiple_choice',
    question:
      'A machine at the top of a smooth inclined plane lifts a block from the ground to the top by two methods:\n\n(I) Pull the block vertically upward at uniform speed $v$.\n(II) Pull the block up along the inclined plane at the same uniform speed $v$.\n\nWhich statements correctly compare the two methods?\n\n(1) The tension in the string is the same.\n(2) The average output power of the machine is the same.\n(3) The work done by the machine on the block is the same.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '(1) False: in method (I), tension balances weight, so $T_1=mg$; in method (II), tension balances only the component along the plane, so $T_2=mg\\sin\\theta$. (2) False: with the same speed, power is $P=Fv$, so different tensions give different powers. (3) True: in both cases the block gains the same gravitational potential energy, so the work done is the same.',
    difficulty: 2,
    points: 15,
    hints: ['Compare forces needed in each direction.', 'Average power depends on force and speed.', 'Work done depends on the change in gravitational PE.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-089-question.png'],
  },
  {
    id: 'wep-090',
    type: 'multiple_choice',
    question:
      'Blocks $X$ and $Y$ are connected by a light inextensible string over a fixed frictionless light pulley. Masses are 0.5 kg and 1 kg respectively. Initially $Y$ is 1 m above the ground and the string is taut. The system is released from rest. What is the speed of $Y$ just before it reaches the ground?',
    options: ['$3.62\\ \\mathrm{m\\ s^{-1}}$', '$4.43\\ \\mathrm{m\\ s^{-1}}$', '$6.26\\ \\mathrm{m\\ s^{-1}}$', '$9.81\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$3.62\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Loss of potential energy of $Y$ equals gain of kinetic energy of both masses: $(1)(9.81)(1)=\\tfrac12(0.5)v^2+\\tfrac12(1)v^2$. Solving gives $v=3.62\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use conservation of mechanical energy.', 'Both blocks have the same speed.', 'Include KE of both masses.'],
    sectionId: 'work-energy-power',
    imagePaths: ['/physics/exercises/work-energy-power/wep-090-question.png'],
  },
  {
    id: 'mom-001',
    type: 'multiple_choice',
    question:
      'When a constant unbalanced force is applied to a particle, which of the following will change with time?\n\n(1) The acceleration of the particle\n(2) The momentum of the particle\n(3) The kinetic energy of the particle',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'A constant net force gives constant acceleration, so (1) is false. With constant acceleration, velocity changes with time, so momentum changes and kinetic energy also changes.',
    difficulty: 2,
    points: 15,
    hints: ['Use Newton second law for acceleration.', 'Momentum depends on velocity.', 'Kinetic energy depends on $v^2$.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-002',
    type: 'multiple_choice',
    question:
      'A ball is dropped from a height $h$ above the ground. Each time it hits the ground, one-half of the original kinetic energy is lost. How high will the ball rise above the ground after the second impact?',
    options: ['$\\frac{h}{8}$', '$\\frac{h}{4}$', '$\\frac{h}{2}$', '$\\frac{h}{\\sqrt2}$'],
    answer: '$\\frac{h}{4}$',
    explanation:
      'After each impact, the remaining kinetic energy is half the value just before that impact. After the second impact, the available rebound kinetic energy is $\\tfrac12\\times\\tfrac12=\\tfrac14$ of the original. Since maximum height is proportional to gravitational potential energy, the rebound height is $\\tfrac14 h$.',
    difficulty: 2,
    points: 15,
    hints: ['Relate rebound height to rebound KE.', 'Each collision keeps only half the previous KE.', 'PE at top equals KE just after impact.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-003',
    type: 'multiple_choice',
    question:
      'Two objects $P$ and $Q$ of mass 2 kg and 3 kg respectively have the same momentum. They are then subjected to the same constant resisting force and gradually brought to rest. What is the ratio of the stopping distance of $P$ to that of $Q$?',
    options: ['4:9', '2:3', '3:2', '9:4'],
    answer: '3:2',
    explanation:
      'For the same momentum $p$, kinetic energy is $KE=\\frac{p^2}{2m}$, so $KE\\propto\\frac1m$. With the same resisting force, stopping distance is proportional to work done and hence proportional to initial kinetic energy. Therefore $s\\propto\\frac1m$, giving $s_P:s_Q=m_Q:m_P=3:2$.',
    difficulty: 2,
    points: 15,
    hints: ['Rewrite KE in terms of momentum.', 'Same resisting force means same work per unit distance.', 'Stopping distance follows from energy loss.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-004',
    type: 'multiple_choice',
    question:
      'A gas molecule of mass $m$ collides with the wall of a container at speed $2\\ \\mathrm{m\\ s^{-1}}$ and rebounds with the same speed. Which of the following is/are true?\n\n(1) The kinetic energy before and after the collision remains unchanged.\n(2) The velocity before and after the collision remains unchanged.\n(3) The momentum before and after the collision remains unchanged.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'The speed is the same before and after, so kinetic energy is unchanged. Velocity and momentum are vectors; their directions reverse on rebounding, so both change.',
    difficulty: 1,
    points: 10,
    hints: ['Speed and velocity are not the same.', 'Momentum direction follows velocity direction.', 'KE depends on speed squared only.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-004-question.png'],
  },
  {
    id: 'mom-005',
    type: 'multiple_choice',
    question:
      'A system consists of two identical masses travelling in opposite directions with equal speed. They collide elastically at time $t_0$. Which graph correctly shows the total momentum of the system before and after the collision?',
    options: [
      '/physics/exercises/momentum/mom-005-option-a.png',
      '/physics/exercises/momentum/mom-005-option-b.png',
      '/physics/exercises/momentum/mom-005-option-c.png',
      '/physics/exercises/momentum/mom-005-option-d.png',
    ],
    answer: '/physics/exercises/momentum/mom-005-option-d.png',
    explanation:
      'The two equal and opposite momenta cancel, so the total momentum of the system is zero before and after the collision. With no external net force, total momentum remains constant throughout.',
    difficulty: 2,
    points: 15,
    hints: ['Add the two opposite momenta.', 'Elasticity does not affect total momentum conservation.', 'No external force means system momentum stays constant.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-006',
    type: 'multiple_choice',
    question:
      'A trolley of mass 1 kg travelling at $2\\ \\mathrm{m\\ s^{-1}}$ on a smooth horizontal plane has a lump of plasticine dropped vertically onto it from height 5 m. If the mass of the plasticine is 2 kg, the velocity of the loaded trolley will be',
    options: ['$0.67\\ \\mathrm{m\\ s^{-1}}$', '$1.00\\ \\mathrm{m\\ s^{-1}}$', '$1.50\\ \\mathrm{m\\ s^{-1}}$', '$1.33\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$0.67\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Only horizontal momentum matters. Initial horizontal momentum is $(1)(2)+(2)(0)=2\\,\\mathrm{kg\\ m\\ s^{-1}}$. After sticking together, total mass is 3 kg, so $v=2/3=0.67\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Vertical drop adds no horizontal momentum.', 'Use conservation of horizontal momentum.', 'Plasticine sticks, so final masses move together.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-007',
    type: 'multiple_choice',
    question:
      'A particle is in motion with a constant force acting on it. Which physical quantities will be changing during the time when the force is acting?\n\n(1) acceleration of the particle\n(2) momentum of the particle\n(3) kinetic energy of the particle',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'A constant force gives constant acceleration, so (1) is not changing. The velocity changes, so both momentum and kinetic energy change with time.',
    difficulty: 2,
    points: 15,
    hints: ['Constant force gives constant acceleration for constant mass.', 'Momentum depends on velocity.', 'KE depends on $v^2$.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-008',
    type: 'multiple_choice',
    question:
      'A basketball falls freely from rest and hits the ground. It then rebounds to $\\frac14$ of its original height. Neglecting air resistance. Which statements are correct?\n\n(1) Its kinetic energy just before collision is four times its kinetic energy just after collision.\n(2) Its potential energy just before collision is four times its potential energy just after collision.\n(3) The speed just before collision is two times the speed just after collision.',
    options: ['(1) only', '(2) only', '(2) & (3) only', '(1) & (3) only'],
    answer: '(1) & (3) only',
    explanation:
      'Rebounding to one-quarter of the original height means the rebound kinetic energy just after collision is one-quarter of the kinetic energy just before collision. Thus (1) is true. At the collision point, just before and just after, the ball is at the same height, so potential energies are equal, making (2) false. Since $KE\\propto v^2$, a factor of 4 in KE gives a factor of 2 in speed, so (3) is true.',
    difficulty: 2,
    points: 15,
    hints: ['Use rebound height to compare rebound KE.', 'Compare PE at the same location.', 'Relate KE ratio to speed ratio through $v^2$.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-009',
    type: 'multiple_choice',
    question:
      'A ball of mass 2 kg drops from rest from a height 5 m and rebounds to the same height. If the duration of impact with the ground is 0.2 s, what is the force acting on the ball by the ground? (Take $g=10\\ \\mathrm{m\\ s^{-2}}$.)',
    options: ['20 N', '100 N', '200 N', '220 N'],
    answer: '220 N',
    explanation:
      'Speed just before impact is from $v^2=2gh=2(10)(5)$, so $v=10\\,\\mathrm{m\\ s^{-1}}$. Taking upward as positive, change in momentum during impact is $m(10)-m(-10)=40\\,\\mathrm{kg\\ m\\ s^{-1}}$. Average net force is $40/0.2=200\\,\\mathrm{N}$ upward. Since net force is $R-mg$, we get $R-20=200$, hence $R=220\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Find impact speed from free fall.', 'Use change in momentum over impact time.', 'Include the weight when relating net force to ground reaction.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-010',
    type: 'multiple_choice',
    question:
      'What physical quantity does the area of the shaded portion of each of the above graphs represent?\n\nI\nII',
    options: [
      'I: acceleration, II: energy',
      'I: distance, II: power',
      'I: acceleration, II: change of momentum',
      'I: distance, II: energy',
    ],
    answer: 'I: distance, II: energy',
    explanation:
      'For graph I, the shaded area under a speed-time graph represents distance travelled. For graph II, the shaded area under a force-distance graph represents work done, i.e. energy transferred.',
    difficulty: 2,
    points: 15,
    hints: ['Area under speed-time gives distance.', 'Area under force-distance gives work.', 'Work is an energy transfer.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-010-question.png'],
  },
  {
    id: 'mom-011',
    type: 'multiple_choice',
    question:
      'Which of the following is a vector quantity with correct unit?',
    options: ['speed, $\\mathrm{km\\ h^{-1}}$', 'acceleration, $\\mathrm{m\\ s^{-1}}$', 'power, W', 'momentum, $\\mathrm{kg\\ m\\ s^{-1}}$'],
    answer: 'momentum, $\\mathrm{kg\\ m\\ s^{-1}}$',
    explanation:
      'Speed is a scalar. Acceleration is a vector, but its correct unit is $\\mathrm{m\\ s^{-2}}$, not $\\mathrm{m\\ s^{-1}}$. Power is a scalar. Momentum is a vector and its unit is $\\mathrm{kg\\ m\\ s^{-1}}$.',
    difficulty: 1,
    points: 10,
    hints: ['Check both the quantity type and the unit.', 'Acceleration unit must include per second squared.', 'Momentum is mass times velocity.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-012',
    type: 'multiple_choice',
    question:
      'A mass of 3 kg initially at rest explodes into two fragments $X$ and $Y$ of masses 1 kg and 2 kg respectively. What is the ratio of the kinetic energy of $X$ to that of $Y$ just after the explosion?',
    options: ['1:4', '1:2', '2:1', '4:1'],
    answer: '2:1',
    explanation:
      'With no external net force, the two fragments have equal and opposite momenta. For fixed momentum magnitude, $KE=\\frac{p^2}{2m}$, so kinetic energy is inversely proportional to mass. Thus $KE_X:KE_Y=m_Y:m_X=2:1$.',
    difficulty: 2,
    points: 15,
    hints: ['Explosion conserves momentum.', 'Fragments have equal momentum magnitudes.', 'Use KE in terms of momentum.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-013',
    type: 'multiple_choice',
    question:
      'Which of the following is/are correct unit(s) for momentum?\n\n(1) $\\mathrm{kg\\ m\\ s^{-1}}$\n(2) $\\mathrm{kg\\ m\\ s^{-2}}$\n(3) $\\mathrm{N\\ s}$',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) & (3) only',
    explanation:
      'Momentum has unit mass × velocity, so $\\mathrm{kg\\ m\\ s^{-1}}$. Also, since $1\\,\\mathrm{N}=1\\,\\mathrm{kg\\ m\\ s^{-2}}$, multiplying by seconds gives $\\mathrm{N\\ s}=\\mathrm{kg\\ m\\ s^{-1}}$. But $\\mathrm{kg\\ m\\ s^{-2}}$ alone is the unit of force.',
    difficulty: 1,
    points: 10,
    hints: ['Start from momentum = mass × velocity.', 'Relate newton to SI base units.', 'Distinguish force from momentum.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-014',
    type: 'multiple_choice',
    question:
      'A ball moving in a smooth horizontal plane hits a wall and rebounds perfectly elastically. Which graph best represents the variation of kinetic energy with time?',
    options: [
      '/physics/exercises/momentum/mom-014-option-a.png',
      '/physics/exercises/momentum/mom-014-option-b.png',
      '/physics/exercises/momentum/mom-014-option-c.png',
      '/physics/exercises/momentum/mom-014-option-d.png',
    ],
    answer: '/physics/exercises/momentum/mom-014-option-d.png',
    explanation:
      'In a perfectly elastic rebound, no kinetic energy is lost. The kinetic energy is the same before and after the collision, though the direction of motion reverses. The suitable graph is the one showing unchanged KE across the collision, i.e. option D.',
    difficulty: 2,
    points: 15,
    hints: ['Perfectly elastic means total KE is conserved.', 'Rebound changes direction, not speed magnitude here.', 'KE depends on speed, not direction.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-015',
    type: 'multiple_choice',
    question:
      'Two blocks $A$ and $B$ are released simultaneously from rest at $X$ on a smooth plane and slide down to $Y$. Block $A$ has mass $2M$ while block $B$ has mass $M$. On reaching $Y$, which statements are correct?\n\n(1) The velocity of block $A$ is double that of block $B$.\n(2) The momentum of block $A$ is double that of block $B$.\n(3) The time taken by block $A$ is double that of block $B$.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      'Both blocks have the same acceleration down the plane and start from rest, so they reach $Y$ with the same final velocity and in the same time. Hence (1) and (3) are false. Since momentum is $mv$, block $A$ with double mass has double momentum at the same velocity, so (2) is true.',
    difficulty: 2,
    points: 15,
    hints: ['On a smooth incline, acceleration is independent of mass.', 'Same motion conditions give same final speed and time.', 'Momentum depends on mass and velocity.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-015-question.png'],
  },
  {
    id: 'mom-016',
    type: 'multiple_choice',
    question:
      'Two trolleys move towards each other along a smooth runway and stick together after collision. What is the total loss in kinetic energy during the collision?',
    options: ['3 J', '6 J', '9 J', '12 J'],
    answer: '12 J',
    explanation:
      'Using momentum conservation with the given diagram values: $(2)(4)+(1)(-2)=(2+1)v$, so $v=2\\,\\mathrm{m\\ s^{-1}}$. Initial kinetic energy is $\\tfrac12(2)(4^2)+\\tfrac12(1)(2^2)=18\\,\\mathrm{J}$. Final kinetic energy is $\\tfrac12(3)(2^2)=6\\,\\mathrm{J}$. So the loss is $18-6=12\\,\\mathrm{J}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use conservation of momentum to find final speed.', 'Then compare initial and final KE.', 'They stick together, so it is an inelastic collision.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-016-question.png'],
  },
  {
    id: 'mom-017',
    type: 'multiple_choice',
    question:
      'Two metal spheres of unequal masses are released from rest at the same time from a height of 2 m. When they have fallen 1 m, neglecting air resistance, they have the same',
    options: ['speed.', 'momentum.', 'weight.', 'kinetic energy.'],
    answer: 'speed.',
    explanation:
      'Both fall through the same distance under the same gravitational acceleration, so they reach the same speed. Their masses differ, so momentum, weight, and kinetic energy are different.',
    difficulty: 1,
    points: 10,
    hints: ['Same drop distance in free fall gives same speed.', 'Momentum and KE depend on mass.', 'Weight is proportional to mass.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-018',
    type: 'multiple_choice',
    question:
      'Bullets each of mass $m$ are fired at a rate of $n$ bullets per second. They hit a vertical wall with horizontal speed $v$ and rebound with the same horizontal speed $v$. Which statements are correct?\n\n(1) The total change in momentum of the bullets is zero.\n(2) The total change in momentum of the bullets in one second is $2mnv$.\n(3) The average force exerted on the wall is $2mnv$.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'For one bullet, momentum changes from $+mv$ to $-mv$, so the change in momentum magnitude is $2mv$ (opposite direction). For $n$ bullets per second, total momentum change per second is $2mnv$. Average force equals rate of change of momentum, so it is also $2mnv$. Statement (1) is false.',
    difficulty: 2,
    points: 15,
    hints: ['Compute momentum change for one rebounding bullet first.', 'Multiply by the number per second.', 'Force equals change of momentum per unit time.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-019',
    type: 'multiple_choice',
    question:
      'A small metal ball is released from a point above the floor and bounces several times. Which graph best represents the variation of the velocity of the ball with time?',
    options: [
      '/physics/exercises/momentum/mom-019-option-a.png',
      '/physics/exercises/momentum/mom-019-option-b.png',
      '/physics/exercises/momentum/mom-019-option-c.png',
      '/physics/exercises/momentum/mom-019-option-d.png',
    ],
    answer: '/physics/exercises/momentum/mom-019-option-b.png',
    explanation:
      'Taking upward as positive, the ball starts from rest, then its velocity becomes increasingly negative under gravity. During each collision, the velocity changes from negative to positive in a very short time, appearing as a near-vertical jump. The repeated sawtooth-like graph is option B.',
    difficulty: 2,
    points: 15,
    hints: ['Choose a sign convention for velocity.', 'Free-fall segments are straight lines on a $v$-$t$ graph.', 'Impacts cause abrupt sign changes.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-020',
    type: 'multiple_choice',
    question:
      'Which of the following statements is/are correct when a collision between two particles is elastic?\n\n(1) None of the original kinetic energy is converted into other forms of energy.\n(2) The linear momentum of each particle is conserved.\n(3) The mechanical energy of each particle is conserved.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'In an elastic collision, total kinetic energy of the system is conserved, so no original kinetic energy is converted into other forms. However, the momentum of each individual particle is not conserved during the interaction; only the total momentum of the system is conserved. Similarly, the mechanical energy of each individual particle may change as energy transfers between them.',
    difficulty: 2,
    points: 15,
    hints: ['Elastic collision conserves total KE of the system.', 'Momentum conservation applies to the whole isolated system.', 'Individual particles can exchange momentum and energy.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-021',
    type: 'multiple_choice',
    question:
      'A trolley moves with constant speed along a horizontal surface. A lump of plasticine having the same mass as the trolley is dropped onto it and sticks to it. Which ticker-tape best represents the motion of the trolley?',
    options: [
      '/physics/exercises/momentum/mom-021-option-a.png',
      '/physics/exercises/momentum/mom-021-option-b.png',
      '/physics/exercises/momentum/mom-021-option-c.png',
      '/physics/exercises/momentum/mom-021-option-d.png',
    ],
    answer: '/physics/exercises/momentum/mom-021-option-b.png',
    explanation:
      'When the plasticine sticks, momentum is conserved but the total mass increases, so the speed decreases. On a ticker tape this means equal spacing before impact and then smaller equal spacing after impact. That matches option B.',
    difficulty: 2,
    points: 15,
    hints: ['The sticky collision increases mass.', 'Momentum is conserved at impact.', 'Smaller constant speed means smaller equal tape spacing afterwards.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-021-question.png'],
  },
  {
    id: 'mom-022',
    type: 'multiple_choice',
    question:
      'Two particles $A$ and $B$ of masses 2 kg and 1 kg move in opposite directions. The initial velocity of $A$ is $4\\ \\mathrm{m\\ s^{-1}}$ to the right, while that of $B$ is $2\\ \\mathrm{m\\ s^{-1}}$ to the left. They collide head-on. After the collision, the velocity of $A$ becomes $1\\ \\mathrm{m\\ s^{-1}}$ to the right. What is the velocity of $B$?',
    options: [
      '$2\\ \\mathrm{m\\ s^{-1}}$ towards the right',
      '$3\\ \\mathrm{m\\ s^{-1}}$ towards the right',
      '$4\\ \\mathrm{m\\ s^{-1}}$ towards the right',
      '$6\\ \\mathrm{m\\ s^{-1}}$ towards the right',
    ],
    answer: '$4\\ \\mathrm{m\\ s^{-1}}$ towards the right',
    explanation:
      'Taking right as positive, conservation of momentum gives $(2)(4)+(1)(-2)=(2)(1)+(1)v_B$. So $8-2=2+v_B$, hence $v_B=4\\,\\mathrm{m\\ s^{-1}}$ to the right.',
    difficulty: 2,
    points: 15,
    hints: ['Choose a sign convention first.', 'Use momentum conservation for the collision.', 'Substitute the final speed of A and solve for B.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-022-question.png'],
  },
  {
    id: 'mom-023',
    type: 'multiple_choice',
    question:
      'A ball collides with a fixed wall and bounces back with the same speed. Which quantities of the ball remain unchanged before and after the collision?\n\n(1) Kinetic energy\n(2) velocity\n(3) momentum',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'Same speed before and after means kinetic energy is unchanged. Velocity and momentum are vectors, so reversing direction changes both.',
    difficulty: 1,
    points: 10,
    hints: ['Speed and velocity are different.', 'Momentum follows velocity direction.', 'KE depends on speed squared only.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-024',
    type: 'multiple_choice',
    question:
      'A trolley of mass 2 kg moves with uniform speed $4\\ \\mathrm{m\\ s^{-1}}$ along a horizontal table. A lump of plasticine having the same mass is dropped from just above the trolley and sticks to it. Find the total loss in kinetic energy.',
    options: ['0 J', '4 J', '8 J', '12 J'],
    answer: '8 J',
    explanation:
      'Conserving horizontal momentum: $(2)(4)+(2)(0)=(2+2)v$, so $v=2\\,\\mathrm{m\\ s^{-1}}$. Initial KE is $\\tfrac12(2)(4^2)=16\\,\\mathrm{J}$. Final KE is $\\tfrac12(4)(2^2)=8\\,\\mathrm{J}$. Loss is $16-8=8\\,\\mathrm{J}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use horizontal momentum conservation.', 'The plasticine has no horizontal speed initially.', 'Compare initial and final KE.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-024-question.png'],
  },
  {
    id: 'mom-025',
    type: 'multiple_choice',
    question:
      'Which of the following pairs of physical quantities has/have the same unit?\n\n(1) Work and potential energy\n(2) Power and momentum\n(3) Specific heat capacity and specific latent heat of fusion',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'Work and potential energy are both measured in joules. Power has unit watt while momentum has unit newton-second (or kg m s^-1). Specific heat capacity has unit J kg^-1 K^-1 (or °C^-1), while specific latent heat has unit J kg^-1.',
    difficulty: 1,
    points: 10,
    hints: ['Compare SI units directly.', 'Joule is the unit for both work and energy.', 'Watch for the extra temperature term in specific heat capacity.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-026',
    type: 'multiple_choice',
    question:
      'A stone is thrown vertically upwards and finally falls back to the starting point. Assume air resistance is negligible. Which statements are true throughout the motion?\n\n(1) The acceleration of the stone is constant.\n(2) The total mechanical energy of the stone is conserved.\n(3) The momentum of the stone is conserved.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'The acceleration is always the constant gravitational acceleration downward. With no air resistance, total mechanical energy is conserved. Momentum is not conserved because an external force (gravity) acts on the stone.',
    difficulty: 2,
    points: 15,
    hints: ['Gravity acts throughout the flight.', 'No air resistance means mechanical energy stays constant.', 'Momentum conservation needs no external net force.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-027',
    type: 'multiple_choice',
    question:
      'Which of the following physical quantities is not a vector?',
    options: ['Acceleration', 'Momentum', 'Weight', 'Work'],
    answer: 'Work',
    explanation:
      'Acceleration, momentum, and weight (a force) are vectors. Work is a scalar quantity.',
    difficulty: 1,
    points: 10,
    hints: ['Forces are vectors.', 'Momentum includes direction.', 'Work has magnitude only.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-028',
    type: 'multiple_choice',
    question:
      'A particle of mass $m$ is thrown vertically upwards with initial speed $v$. When the particle returns to its starting point, what are the changes in momentum and kinetic energy of the particle?',
    options: ['Change in momentum: 0, Change in kinetic energy: 0', 'Change in momentum: $mv$, Change in kinetic energy: $mv^2$', 'Change in momentum: $2mv$, Change in kinetic energy: 0', 'Change in momentum: $2mv$, Change in kinetic energy: $mv^2$'],
    answer: 'Change in momentum: $2mv$, Change in kinetic energy: 0',
    explanation:
      'At the starting point on return, the particle has the same speed but opposite direction. So momentum changes from $+mv$ to $-mv$, giving a change in magnitude of $2mv$. The kinetic energy is the same before launch and on return, so the change in kinetic energy is zero.',
    difficulty: 2,
    points: 15,
    hints: ['Use direction when comparing momentum.', 'Speed on return equals launch speed if no air resistance.', 'KE depends on speed, not direction.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-029',
    type: 'multiple_choice',
    question:
      'At time $t=0$, a table-tennis ball is released from a point above the ground and bounces several times. The graph shows the variation of velocity $v$ with time $t$. At which point on the graph does the ball reach its maximum height above the ground after the first rebound? (Velocity upwards is taken as positive.)',
    options: ['Point $P$', 'Point $Q$', 'Point $R$', 'Point $S$'],
    answer: 'Point $S$',
    explanation:
      'After the first rebound, the ball leaves the ground moving upward and then slows under gravity until its upward velocity becomes zero at the highest point. On the given graph, that moment corresponds to point $S$.',
    difficulty: 2,
    points: 15,
    hints: ['Maximum height occurs when upward velocity becomes zero.', 'Track the first rebound segment only.', 'Use the sign convention stated on the graph.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-029-question.png'],
  },
  {
    id: 'mom-030',
    type: 'multiple_choice',
    question:
      'A block is pulled by a constant force and moves along a smooth horizontal surface. Which describes the variations of the acceleration and momentum of the block while the force is acting?',
    options: [
      'Acceleration remains unchanged; Momentum remains unchanged',
      'Acceleration remains unchanged; Momentum increases',
      'Acceleration increases; Momentum remains unchanged',
      'Acceleration increases; Momentum increases',
    ],
    answer: 'Acceleration remains unchanged; Momentum increases',
    explanation:
      'A constant force on a constant mass gives constant acceleration. As the block accelerates, its velocity increases, so its momentum increases.',
    difficulty: 1,
    points: 10,
    hints: ['Use Newton second law.', 'Constant force on constant mass means constant acceleration.', 'Momentum rises as speed rises.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-031',
    type: 'multiple_choice',
    question:
      'A rocket is initially at rest in space. It then explodes and breaks into two parts which move in opposite directions. If the mass of the rear part is larger than that of the front part, which statement is correct?',
    options: [
      'The speeds of the two parts are equal.',
      'The speed of the rear part is higher than that of the front part.',
      'The magnitudes of the momentum of the two parts are equal.',
      'The magnitude of the momentum of the rear part is larger than that of the front part.',
    ],
    answer: 'The magnitudes of the momentum of the two parts are equal.',
    explanation:
      'The rocket is initially at rest, so total momentum is zero. With no external force, total momentum remains zero after the explosion. Therefore the two parts must have equal and opposite momenta, so their momentum magnitudes are equal.',
    difficulty: 2,
    points: 15,
    hints: ['Initial total momentum is zero.', 'Explosion in space has no external force on the system.', 'Equal and opposite final momenta are required.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-032',
    type: 'multiple_choice',
    question:
      'The graph shows the variation of the kinetic energy $E$ of an object with the square of its velocity $v^2$. What is the momentum of the object when it is moving at a velocity $4\\ \\mathrm{m\\ s^{-1}}$?',
    options: [
      '$4\\ \\mathrm{kg\\ m\\ s^{-1}}$',
      '$8\\ \\mathrm{kg\\ m\\ s^{-1}}$',
      '$16\\ \\mathrm{kg\\ m\\ s^{-1}}$',
      '$32\\ \\mathrm{kg\\ m\\ s^{-1}}$',
    ],
    answer: '$16\\ \\mathrm{kg\\ m\\ s^{-1}}$',
    explanation:
      'From the graph, when $E=50\\,\\mathrm{J}$, $v^2=25\\,\\mathrm{m^2\\ s^{-2}}$. Using $KE=\\tfrac12mv^2$, we get $50=\\tfrac12m(25)$, so $m=4\\,\\mathrm{kg}$. At $v=4\\,\\mathrm{m\\ s^{-1}}$, momentum is $p=mv=4\\times4=16\\,\\mathrm{kg\\ m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Read one point from the KE vs $v^2$ graph.', 'Use $KE=\\tfrac12mv^2$ to find mass.', 'Then compute $p=mv$ at 4 m/s.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-032-question.png'],
  },
  {
    id: 'mom-033',
    type: 'multiple_choice',
    question:
      'The figure shows the variation of the force acting on a car driver with time when the car hits a wall. The driver is not wearing a seat-belt. Which graph (in dotted lines) best shows the force acting on the driver if he is wearing a seat-belt?',
    options: [
      '/physics/exercises/momentum/mom-033-option-a.png',
      '/physics/exercises/momentum/mom-033-option-b.png',
      '/physics/exercises/momentum/mom-033-option-c.png',
      '/physics/exercises/momentum/mom-033-option-d.png',
    ],
    answer: '/physics/exercises/momentum/mom-033-option-c.png',
    explanation:
      'A seat-belt increases the time over which the driver is brought to rest. For the same change in momentum, increasing impact time reduces the average force. The correct dotted graph is therefore the one spread over a longer time with a lower peak force: option C.',
    difficulty: 2,
    points: 15,
    hints: ['Use impulse = change in momentum.', 'Same momentum change over longer time means smaller force.', 'Look for lower, wider force-time curve.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-033-question.png'],
  },
  {
    id: 'mom-034',
    type: 'multiple_choice',
    question:
      'A rocket of mass 5000 kg is at rest in space. It then explodes into two parts $P_1$ and $P_2$ of mass 1000 kg and 4000 kg respectively. Find the ratio of the kinetic energy of $P_1$ to that of $P_2$.',
    options: ['1:16', '1:64', '4:1', '16:1'],
    answer: '4:1',
    explanation:
      'The two parts have equal and opposite momentum. For equal momentum magnitude $p$, kinetic energy is $KE=\\frac{p^2}{2m}$, so KE is inversely proportional to mass. Hence $KE_{P_1}:KE_{P_2}=m_{P_2}:m_{P_1}=4000:1000=4:1$.',
    difficulty: 2,
    points: 15,
    hints: ['Explosion from rest gives equal momentum magnitudes.', 'Use KE in terms of momentum.', 'Smaller mass gets larger KE for same momentum.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-035',
    type: 'multiple_choice',
    question:
      'Grace (50 kg) and Kitty (40 kg) stand on light rollers on a smooth horizontal floor. They are initially at rest with Grace holding a 2 kg ball. Grace throws the ball to Kitty and moves backward with speed $0.8\\ \\mathrm{m\\ s^{-1}}$. After catching the ball, Kitty moves in the opposite direction. Which statements are correct?\n\n(1) The final speed of Kitty is $0.95\\ \\mathrm{m\\ s^{-1}}$.\n(2) The horizontal momentum of the ball is conserved in this process.\n(3) The total kinetic energy of Kitty and the ball decreases when Kitty catches the ball.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(1) & (3) only',
    explanation:
      'For the whole system, momentum is conserved: $(50+2)(0)+(40)(0)=(50)(-0.8)+(40+2)v$, so $v=0.95\\,\\mathrm{m\\ s^{-1}}$ for Kitty after catching the ball. Statement (2) is false because the ball experiences external horizontal forces from Grace and then Kitty. Statement (3) is true because the catch is an inelastic collision, so kinetic energy decreases.',
    difficulty: 3,
    points: 20,
    hints: ['Use conservation of momentum for the whole system.', 'Do not treat the ball as an isolated system.', 'Catching is an inelastic process.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-035-question.png'],
  },
  {
    id: 'mom-036',
    type: 'multiple_choice',
    question:
      'A wooden block of mass $M$ hangs from a light string. A bullet of mass $m$ travelling at speed $v$ hits the block and becomes embedded in it. The block then swings upward. Which of the following are employed in determining the maximum height reached by the block?\n\n(1) Newton\\'s first law\n(2) Law of conservation of energy\n(3) Law of conservation of momentum',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      'The collision itself is analyzed using conservation of momentum to find the speed just after impact. The upward swing after impact is then analyzed using conservation of mechanical energy to find the maximum height. Newton\\'s first law is not needed in the calculation.',
    difficulty: 2,
    points: 15,
    hints: ['Separate the process into collision and swing.', 'Use momentum during the inelastic collision.', 'Use energy during the upward swing.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-036-question.png'],
  },
  {
    id: 'mom-037',
    type: 'multiple_choice',
    question:
      'A trolley moves along a smooth horizontal surface. A lump of plasticine is released from a height slightly above the trolley and sticks to it. Which graph shows the variation of the total horizontal momentum $p$ of the trolley and plasticine with time $t$?',
    options: [
      '/physics/exercises/momentum/mom-037-option-a.png',
      '/physics/exercises/momentum/mom-037-option-b.png',
      '/physics/exercises/momentum/mom-037-option-c.png',
      '/physics/exercises/momentum/mom-037-option-d.png',
    ],
    answer: '/physics/exercises/momentum/mom-037-option-a.png',
    explanation:
      'There is no external horizontal force on the trolley-plasticine system, so total horizontal momentum remains constant throughout. The correct graph is therefore a horizontal straight line: option A.',
    difficulty: 2,
    points: 15,
    hints: ['Consider horizontal momentum only.', 'There is no external horizontal force.', 'Conserved quantity should appear as a constant graph.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-038',
    type: 'multiple_choice',
    question:
      'Three cars $P$, $Q$ and $R$ move along a straight horizontal road. Their displacement-time graphs are shown. Which of the cars experience a change in momentum during the motion?',
    options: ['$P$ and $Q$ only', '$P$ and $R$ only', '$Q$ and $R$ only', '$P$, $Q$ and $R$'],
    answer: '$Q$ and $R$ only',
    explanation:
      'The slope of a displacement-time graph gives velocity. Car $P$ has constant slope, so constant velocity and no change in momentum. Car $Q$ has decreasing slope and car $R$ has increasing slope, so both have changing velocity and hence changing momentum.',
    difficulty: 2,
    points: 15,
    hints: ['Use slope of the $s$-$t$ graph to infer velocity.', 'Momentum changes when velocity changes.', 'Constant slope means constant momentum for constant mass.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-038-question.png'],
  },
  {
    id: 'mom-039',
    type: 'multiple_choice',
    question:
      'The photograph shows an air-cushioned shoe. Which statements about the air-cushion are correct?\n\n(1) It reduces the time of impact between the foot and the ground during running.\n(2) It reduces the impact force acting on the foot during running.\n(3) It reduces the friction between the shoe and the ground during running.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '(1) False: the air cushion increases the impact time. (2) True: for the same change in momentum, increasing impact time reduces force. (3) False: friction depends mainly on the contact surface properties, not the air cushion inside the shoe.',
    difficulty: 2,
    points: 15,
    hints: ['Use impulse: same momentum change over longer time.', 'Longer impact time lowers average force.', 'Distinguish cushioning from surface friction.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-039-question.png'],
  },
  {
    id: 'mom-040',
    type: 'multiple_choice',
    question:
      'A car $P$ of mass 1000 kg moves at $20\\ \\mathrm{m\\ s^{-1}}$ and makes a head-on collision with car $Q$ of mass 1500 kg moving at $10\\ \\mathrm{m\\ s^{-1}}$ in the opposite direction. If the two cars stick together, find their common velocity immediately after the collision.',
    options: [
      '$2\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $P$',
      '$2\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $Q$',
      '$14\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $P$',
      '$14\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $Q$',
    ],
    answer: '$2\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $P$',
    explanation:
      'Take the original direction of $P$ as positive. Conservation of momentum gives $(1000)(20)+(1500)(-10)=(1000+1500)v$. So $20000-15000=2500v$, giving $v=+2\\,\\mathrm{m\\ s^{-1}}$, i.e. in the original direction of $P$.',
    difficulty: 2,
    points: 15,
    hints: ['Choose a sign convention first.', 'This is a perfectly inelastic collision.', 'Use total initial momentum = total final momentum.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-041',
    type: 'multiple_choice',
    question:
      'An electric fan is installed at one end of a trolley and a card is fixed at the other end with the plane of the card facing the fan. What happens to the trolley when the electric fan is turned on?',
    options: ['The trolley remains stationary.', 'The trolley moves to the right.', 'The trolley moves to the left.', 'The trolley moves to and fro along the ground.'],
    answer: 'The trolley remains stationary.',
    explanation:
      'The fan pushes air toward the card, and the card stops that air within the same system. Internal forces cancel, and no net external horizontal force acts on the trolley system. Therefore the trolley remains at rest.',
    difficulty: 2,
    points: 15,
    hints: ['Treat fan + card + trolley as one system.', 'Internal forces do not change total momentum of the system.', 'No air leaves carrying net horizontal momentum.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-041-question.png'],
  },
  {
    id: 'mom-042',
    type: 'multiple_choice',
    question:
      'A body initially at rest is exploded into two parts. Which correctly describes the change in total momentum and total kinetic energy?',
    options: [
      'Total momentum increases; Total kinetic energy increases',
      'Total momentum increases; Total kinetic energy remains unchanged',
      'Total momentum remains unchanged; Total kinetic energy increases',
      'Total momentum remains unchanged; Total kinetic energy remains unchanged',
    ],
    answer: 'Total momentum remains unchanged; Total kinetic energy increases',
    explanation:
      'With no external force, total momentum is conserved, so it remains unchanged. Initially the body is at rest, so total kinetic energy is zero. After the explosion, the fragments move, so the total kinetic energy increases.',
    difficulty: 2,
    points: 15,
    hints: ['Explosion does not create external impulse.', 'Initial total momentum is zero.', 'Internal energy is converted into kinetic energy.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-043',
    type: 'multiple_choice',
    question:
      'Tom and John stand on trolleys of negligible mass. Both are initially at rest and Tom holds a ball of 3 kg. The masses of Tom and John are 30 kg and 27 kg respectively. After Tom throws the ball to John, Tom moves backwards with speed $1\\ \\mathrm{m\\ s^{-1}}$. What is the speed of John after he catches the ball?',
    options: ['$0.90\\ \\mathrm{m\\ s^{-1}}$', '$1.00\\ \\mathrm{m\\ s^{-1}}$', '$1.11\\ \\mathrm{m\\ s^{-1}}$', '$1.22\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$1.00\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'The total momentum of Tom, John and the ball is initially zero. After the throw and catch, conservation of momentum gives $0=(30)(-1)+(27+3)v$, so $v=1\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use the whole system to avoid intermediate steps.', 'Initial total momentum is zero.', 'After the catch, John and the ball move together.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-043-question.png'],
  },
  {
    id: 'mom-044',
    type: 'multiple_choice',
    question:
      'Trolleys $A$ and $B$ of masses $m_A$ and $m_B$ respectively travel along a horizontal road in opposite directions. Later they make a head-on inelastic collision and stick together. The graph shows the velocity-time relationship before and after the collision. What is the ratio $m_A:m_B$?',
    options: ['1:2', '2:3', '2:1', '3:2'],
    answer: '3:2',
    explanation:
      'From the graph, initial velocities are $+4\\,\\mathrm{m\\ s^{-1}}$ for $A$ and $-1\\,\\mathrm{m\\ s^{-1}}$ for $B$, and the common velocity after collision is $+2\\,\\mathrm{m\\ s^{-1}}$. Conservation of momentum gives $m_A(4)+m_B(-1)=(m_A+m_B)(2)$, so $2m_A=3m_B$, hence $m_A:m_B=3:2$.',
    difficulty: 2,
    points: 15,
    hints: ['Read the three speeds from the graph.', 'Use momentum conservation for sticking collision.', 'Solve the linear ratio equation.'],
    sectionId: 'momentum',
    imagePaths: [
      '/physics/exercises/momentum/mom-044-question.png',
      '/physics/exercises/momentum/mom-044-question-2.png',
    ],
  },
  {
    id: 'mom-045',
    type: 'multiple_choice',
    question:
      'In an explosion, an object is blown into two pieces, $A$ and $B$, which fly off in opposite directions. The mass of $A$ is 0.3 kg. The graph shows the variation of velocity of $A$ and $B$ with time before and after the explosion. What are the mass of $B$ and the estimated magnitude of the average net force acting on $B$ during the explosion?',
    options: [
      'Mass of $B$ = 0.1 kg, Average net force = 0.4 N',
      'Mass of $B$ = 0.1 kg, Average net force = 0.5 N',
      'Mass of $B$ = 0.9 kg, Average net force = 3.6 N',
      'Mass of $B$ = 0.9 kg, Average net force = 4.5 N',
    ],
    answer: 'Mass of $B$ = 0.9 kg, Average net force = 4.5 N',
    explanation:
      'Initially both are at rest, so total momentum is zero. After the explosion, from the graph, piece $A$ has velocity $+3\\,\\mathrm{m\\ s^{-1}}$ and piece $B$ has velocity $-1\\,\\mathrm{m\\ s^{-1}}$. So $(0.3)(3)+m_B(-1)=0$, giving $m_B=0.9\\,\\mathrm{kg}$. The average net force on $B$ is $F=\\Delta p/\\Delta t=(0.9\\times1)/(0.25-0.05)=4.5\\,\\mathrm{N}$ in magnitude.',
    difficulty: 3,
    points: 20,
    hints: ['Use momentum conservation first to find $m_B$.', 'Then use average force = change in momentum / time.', 'Read the explosion time interval from the graph.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-045-question.png'],
  },
  {
    id: 'mom-046',
    type: 'multiple_choice',
    question:
      'A block slides along a horizontal smooth surface. It collides with a vertical wall and rebounds along its original path. Which graph best shows the variation of its momentum $p$ with time $t$?',
    options: [
      '/physics/exercises/momentum/mom-046-option-a.png',
      '/physics/exercises/momentum/mom-046-option-b.png',
      '/physics/exercises/momentum/mom-046-option-c.png',
      '/physics/exercises/momentum/mom-046-option-d.png',
    ],
    answer: '/physics/exercises/momentum/mom-046-option-d.png',
    explanation:
      'Before collision, the block moves in the positive direction with constant momentum. After rebounding, it moves in the opposite direction, so the momentum becomes negative. The correct graph is the one showing a constant positive value followed by a jump to a constant negative value: option D.',
    difficulty: 2,
    points: 15,
    hints: ['Momentum direction changes on rebound.', 'Smooth surface means constant speed magnitude between collisions.', 'Look for a sign change in momentum.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-046-question.png'],
  },
  {
    id: 'mom-047',
    type: 'multiple_choice',
    question:
      'Ball $A$ and ball $B$ of masses 2 kg and 1 kg respectively collide head-on as shown. Which of the following diagrams show(s) the possible result(s) after the collision?',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'Check conservation of momentum before and after collision. Taking right as positive, only diagram (3) gives the same total momentum as the initial state. Therefore only (3) is possible.',
    difficulty: 3,
    points: 20,
    hints: ['Use momentum conservation as the test.', 'Assign signs to leftward and rightward motion.', 'Reject any diagram that changes total momentum.'],
    sectionId: 'momentum',
    imagePaths: [
      '/physics/exercises/momentum/mom-047-question.png',
      '/physics/exercises/momentum/mom-047-question-2.png',
    ],
  },
  {
    id: 'mom-048',
    type: 'multiple_choice',
    question:
      'An egg will probably break if it lands on a hard surface, but may not break if it lands on a soft cushion from the same height. This is because, when the cushion is used,',
    options: [
      'the momentum of the egg just before impact becomes smaller.',
      'the egg rebounds after hitting the cushion.',
      'the rate of change of momentum of the egg becomes smaller during the impact.',
      'the force acting on the egg by the cushion is smaller than the force acting on the cushion by the egg.',
    ],
    answer: 'the rate of change of momentum of the egg becomes smaller during the impact.',
    explanation:
      'A soft cushion increases the time over which the egg is brought to rest. For the same change in momentum, a longer impact time means a smaller rate of change of momentum and therefore a smaller force.',
    difficulty: 2,
    points: 15,
    hints: ['Use impulse ideas: same momentum change over longer time.', 'Rate of change of momentum links to force.', 'Newton third law means interaction forces are equal in magnitude.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-049',
    type: 'multiple_choice',
    question:
      'On a horizontal smooth track, two trolleys $P$ and $Q$ are held at rest with a light compressed spring in between. The masses of $P$ and $Q$ are $m$ and $2m$ respectively. When released, trolley $Q$ moves to the right with speed $v$. Which statements are correct?\n\n(1) After separation, the total momentum of the two trolleys is $4mv$.\n(2) After separation, the kinetic energy of trolley $P$ is twice that of trolley $Q$.\n(3) The energy initially stored in the compressed spring is at least $3mv^2$.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      '(1) False: total momentum is initially zero and remains zero. (2) True: from momentum conservation, $mv_P=(2m)v$, so $v_P=2v$. Then $KE_P=\\tfrac12m(2v)^2=2mv^2$ and $KE_Q=\\tfrac12(2m)v^2=mv^2$, so $KE_P$ is twice $KE_Q$. (3) True: total KE after separation is $3mv^2$, so the initial spring energy must be at least this value.',
    difficulty: 2,
    points: 15,
    hints: ['Initial total momentum is zero.', 'Use momentum conservation to find $v_P$.', 'Spring energy must cover at least the final KE.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-049-question.png'],
  },
  {
    id: 'mom-050',
    type: 'multiple_choice',
    question:
      'In a racing competition, the momentum of each competitor during the race is greater than that before he starts running. Which statement(s) is/are correct?\n\n(1) This violates the law of conservation of momentum.\n(2) The law of conservation of momentum applies only to collisions between two objects.\n(3) A force acts on each competitor to increase his momentum as he starts running.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '(1) False: the competitor receives an external force from the ground (friction), so momentum need not be conserved for the competitor alone. (2) False: momentum conservation applies to any isolated system, not just collisions. (3) True: the ground exerts a force that increases the runner\\'s momentum.',
    difficulty: 2,
    points: 15,
    hints: ['Momentum conservation needs no external net force.', 'Ground friction provides the external force on the runner.', 'The law applies beyond just collisions.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-051',
    type: 'multiple_choice',
    question:
      'Two objects of masses $m$ and $4m$ move towards each other along a straight line with kinetic energies $K$ and $4K$ respectively. What is the total momentum of the two objects?',
    options: ['$3\\sqrt{2mK}$', '$4\\sqrt{2mK}$', '$5\\sqrt{2mK}$', '$15\\sqrt{2mK}$'],
    answer: '$3\\sqrt{2mK}$',
    explanation:
      'For mass $m$, $K=\\frac{p^2}{2m}$ so $p_1=\\sqrt{2mK}$. For mass $4m$ with kinetic energy $4K$, $4K=\\frac{p_2^2}{2(4m)}$, giving $p_2=4\\sqrt{2mK}$. They move in opposite directions, so total momentum magnitude is $4\\sqrt{2mK}-\\sqrt{2mK}=3\\sqrt{2mK}$.',
    difficulty: 3,
    points: 20,
    hints: ['Express momentum in terms of mass and kinetic energy.', 'Compute each momentum magnitude first.', 'Subtract because the objects move oppositely.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-052',
    type: 'multiple_choice',
    question:
      'In the absence of external net force, if two bodies undergo an inelastic collision, then',
    options: [
      'kinetic energy and momentum are both conserved.',
      'kinetic energy is not conserved but momentum is conserved.',
      'kinetic energy is conserved but momentum is not conserved.',
      'neither kinetic energy nor momentum is conserved.',
    ],
    answer: 'kinetic energy is not conserved but momentum is conserved.',
    explanation:
      'With no external net force, total momentum is conserved. In an inelastic collision, kinetic energy is not conserved because part of it is transformed into other forms.',
    difficulty: 1,
    points: 10,
    hints: ['Separate momentum conservation from KE conservation.', 'External-force condition controls momentum.', 'Inelastic means KE is not fully retained.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-053',
    type: 'multiple_choice',
    question:
      'Ball $X$ moving with velocity $u$ on a smooth horizontal plane makes an elastic collision with ball $Y$ initially at rest. If the two balls have the same mass, which statements are correct?\n\n(1) Kinetic energy is conserved in the collision.\n(2) Linear momentum is conserved in the collision.\n(3) $X$ and $Y$ stick together and move off with the same velocity after the collision.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '(1) True: the collision is elastic, so total kinetic energy is conserved. (2) True: with no external net force, total linear momentum is conserved. (3) False: sticking together would indicate an inelastic collision, not an elastic one.',
    difficulty: 2,
    points: 15,
    hints: ['Elastic collisions conserve KE.', 'Momentum is conserved for an isolated system.', 'Sticking together contradicts elasticity.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-054',
    type: 'multiple_choice',
    question:
      'A box moves at a uniform velocity of $2\\ \\mathrm{m\\ s^{-1}}$ on a frictionless horizontal surface. Sand falls continuously into the box with negligible speed at a rate of 90 kg per minute. To keep the box moving uniformly at $2\\ \\mathrm{m\\ s^{-1}}$, the horizontal force needed is',
    options: ['0 N', '3 N', '6 N', '90 N'],
    answer: '3 N',
    explanation:
      'The sand has to be accelerated horizontally from 0 to $2\\,\\mathrm{m\\ s^{-1}}$. Required force is rate of change of momentum: $F=\\dot m\\Delta v=(90/60)(2)=3\\,\\mathrm{N}$.',
    difficulty: 2,
    points: 15,
    hints: ['Convert 90 kg/min to kg/s.', 'New sand enters with zero horizontal speed.', 'Use force = rate of change of momentum.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-055',
    type: 'multiple_choice',
    question:
      'A trolley travels with constant velocity to the right on a smooth horizontal ground and collides with a light spring attached to a wall fixed to the ground (Earth). At the instant the trolley comes momentarily to rest during the collision, what has happened to the initial momentum of the trolley?',
    options: [
      'The initial momentum has been transferred to the earth.',
      'The initial momentum has been stored in the spring.',
      'The initial momentum has changed into sound and heat.',
      'The initial momentum has been destroyed by the friction due to the ground.',
    ],
    answer: 'The initial momentum has been transferred to the earth.',
    explanation:
      'During the collision, the trolley interacts with the Earth through the spring-wall system. Considering the trolley-Earth system, momentum is conserved. The trolley\\'s momentum is transferred to the Earth (which has an imperceptibly small speed change because of its huge mass).',
    difficulty: 2,
    points: 15,
    hints: ['Momentum is not stored like energy.', 'Consider the Earth as part of the interacting system.', 'Smooth ground means friction is not the cause.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-055-question.png'],
  },
  {
    id: 'mom-056',
    type: 'multiple_choice',
    question:
      'Which of the following pairs of quantities of a moving object must be in the same direction?\n\n(1) acceleration and change in momentum\n(2) displacement and instantaneous velocity\n(3) instantaneous velocity and acceleration',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '(1) True: change in momentum is in the same direction as the net force, and acceleration is also in the direction of the net force. (2) False: an object can have a displacement in one direction while its instantaneous velocity at a particular moment is in the opposite direction. (3) False: an object moving upward under gravity has upward velocity but downward acceleration.',
    difficulty: 2,
    points: 15,
    hints: ['Relate change in momentum to force.', 'Instantaneous velocity need not align with total displacement.', 'Acceleration can oppose velocity.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-057',
    type: 'multiple_choice',
    question:
      '$X$, $Y$ and $Z$ are three balls with masses $m$, $m$ and $2m$ respectively. They lie on a smooth horizontal surface with $Y$ and $Z$ in contact. If $X$ moves to the right with velocity $u$ and collides directly with $Y$, which set of final velocities is possible after all collisions? (All collisions are perfectly elastic; right is positive.)',
    options: [
      '$X=0,\\ Y=0,\\ Z=u/2$',
      '$X=0,\\ Y=u/3,\\ Z=u/3$',
      '$X=-u/3,\\ Y=0,\\ Z=2u/3$',
      '$X=0,\\ Y=-u/3,\\ Z=2u/3$',
    ],
    answer: '$X=-u/3,\\ Y=0,\\ Z=2u/3$',
    explanation:
      'The final velocities must satisfy both momentum conservation and kinetic energy conservation. Options A and B fail energy conservation. Options C and D satisfy momentum and total KE, but in D, ball $Y$ would move left while $X$ is at rest, causing another collision with $X$, so D cannot be the final state after all collisions. Hence only C is possible.',
    difficulty: 3,
    points: 20,
    hints: ['Check momentum and kinetic energy conservation.', 'Perfectly elastic means total KE must be conserved.', 'Eliminate states that would immediately lead to another collision.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-057-question.png'],
  },
  {
    id: 'mom-058',
    type: 'multiple_choice',
    question:
      'A body initially at rest explodes into two parts of unequal mass. The part with smaller mass has a larger\n\n(1) momentum.\n(2) speed.\n(3) kinetic energy.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'The two parts have equal momentum magnitudes in opposite directions, so (1) is false. Since $p=mv$, the smaller mass must have the larger speed. For equal momentum, $KE=\\frac{p^2}{2m}$, so the smaller mass also has the larger kinetic energy.',
    difficulty: 2,
    points: 15,
    hints: ['Explosion from rest gives equal and opposite momenta.', 'Smaller mass must move faster for the same momentum.', 'Use KE in terms of momentum.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-059',
    type: 'multiple_choice',
    question:
      'An open trolley moves initially on a smooth horizontal surface while rain water falls into it and accumulates there. Ignoring the initial kinetic energy of the rain water, what are the effects on the speed, horizontal momentum and kinetic energy of the trolley together with the rain?',
    options: [
      'speed decreased; momentum unchanged; kinetic energy decreased',
      'speed decreased; momentum unchanged; kinetic energy unchanged',
      'speed decreased; momentum decreased; kinetic energy decreased',
      'speed unchanged; momentum unchanged; kinetic energy unchanged',
    ],
    answer: 'speed decreased; momentum unchanged; kinetic energy decreased',
    explanation:
      'There is no external horizontal force, so the horizontal momentum of the trolley-plus-rain system is conserved. As mass increases, the speed must decrease to keep momentum constant. The process is inelastic, so kinetic energy decreases.',
    difficulty: 2,
    points: 15,
    hints: ['Consider horizontal motion only.', 'Momentum conservation applies to the combined system.', 'Added mass lowers speed and the inelastic process reduces KE.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-059-question.png'],
  },
  {
    id: 'mom-060',
    type: 'multiple_choice',
    question:
      'The graph shows the variation of kinetic energy $E_K$ with the square of velocity $v^2$ of a moving ball of mass $m$. What is the momentum of the ball when it is moving at speed $2\\ \\mathrm{m\\ s^{-1}}$?',
    options: ['1 Ns', '2 Ns', '4 Ns', '8 Ns'],
    answer: '4 Ns',
    explanation:
      'From the graph, when $v^2=1$, $E_K=1\\,\\mathrm{J}$. Using $E_K=\\tfrac12mv^2$, we get $1=\\tfrac12m(1)$, so $m=2\\,\\mathrm{kg}$. At $v=2\\,\\mathrm{m\\ s^{-1}}$, momentum is $p=mv=2\\times2=4\\,\\mathrm{N\\,s}$.',
    difficulty: 2,
    points: 15,
    hints: ['Read one graph point to find mass.', 'Use $KE=\\tfrac12mv^2$.', 'Then calculate $p=mv$.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-060-question.png'],
  },
  {
    id: 'mom-061',
    type: 'multiple_choice',
    question:
      'Two bodies $X$ and $Y$ of masses $m$ and $2m$ are initially at rest on a smooth horizontal surface. If a force of the same magnitude acts on each of them for the same period of time, the ratio of the kinetic energy of $X$ to that of $Y$ is',
    options: ['2:1', '1:2', '1:1', '1:4'],
    answer: '2:1',
    explanation:
      'Equal force acting for equal time gives equal impulse, so both bodies receive the same momentum. For a given momentum, $KE=\\frac{p^2}{2m}$, so kinetic energy is inversely proportional to mass. Hence $KE_X:KE_Y=(2m):m=2:1$.',
    difficulty: 2,
    points: 15,
    hints: ['Same force and same time means same impulse.', 'Impulse gives equal change in momentum.', 'Use KE in terms of momentum.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-062',
    type: 'multiple_choice',
    question:
      'David and Candy stand on light skateboards with frictionless rollers and move towards each other. Both have mass 30 kg and speed $1.2\\ \\mathrm{m\\ s^{-1}}$. David holds a ball of mass 1.0 kg and throws it straight towards Candy at horizontal velocity $15\\ \\mathrm{m\\ s^{-1}}$. Determine the velocity of Candy after she catches the ball.',
    options: [
      '$0.74\\ \\mathrm{m\\ s^{-1}}$ to the right',
      '$0.74\\ \\mathrm{m\\ s^{-1}}$ to the left',
      '$0.68\\ \\mathrm{m\\ s^{-1}}$ to the right',
      '$0.68\\ \\mathrm{m\\ s^{-1}}$ to the left',
    ],
    answer: '$0.68\\ \\mathrm{m\\ s^{-1}}$ to the left',
    explanation:
      'Consider the system of Candy and the ball during the catch. Conserving momentum: $(1)(15)+(30)(-1.2)=(1+30)v$. So $15-36=31v$, giving $v=-0.68\\,\\mathrm{m\\ s^{-1}}$, i.e. $0.68\\,\\mathrm{m\\ s^{-1}}$ to the left.',
    difficulty: 3,
    points: 20,
    hints: ['Analyze the catch event only.', 'Take right as positive.', 'Negative velocity means leftward motion.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-062-question.png'],
  },
  {
    id: 'mom-063',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning the design of cars is/are correct?\n\n(1) The front and rear parts of cars are designed to collapse during a serious traffic accident.\n(2) The collapsible parts can reduce the time of collision when the car is involved in a serious accident.\n(3) The collapsible parts can reduce the change of momentum in a serious accident.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '(1) True: these parts are designed to crumple. (2) False: crumpling increases the collision time, not reduces it. (3) False: if the car comes to rest, the change in momentum is the same; the design changes the time over which it happens, reducing force instead.',
    difficulty: 2,
    points: 15,
    hints: ['Crumple zones increase stopping time.', 'Change in momentum depends on initial and final momentum.', 'Longer collision time reduces average force.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-064',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning air-cushioned sports shoes is/are correct?\n\n(1) They can increase the time of impact between the feet and the ground during running.\n(2) They can reduce the change of momentum during jumping and running.\n(3) They can reduce the impact force acting on the feet during jumping and running.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) & (3) only',
    explanation:
      '(1) True: cushioning lengthens the impact time. (2) False: the change in momentum is set by the motion and remains essentially the same. (3) True: for the same momentum change, longer impact time gives smaller force.',
    difficulty: 2,
    points: 15,
    hints: ['Use impulse ideas.', 'Cushioning changes time, not the required momentum change.', 'Longer time means smaller average force.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-065',
    type: 'multiple_choice',
    question:
      'When a lorry makes a head-on collision with a motorcycle, which statements are correct?\n\n(1) The magnitude of the average force exerted by the lorry on the motorcycle equals that exerted by the motorcycle on the lorry.\n(2) The magnitude of the change in momentum of the lorry equals that of the motorcycle.\n(3) The magnitude of the change in velocity of the lorry equals that of the motorcycle.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '(1) True by Newton third law: interaction forces are equal and opposite. (2) True: equal force acting over the same collision time gives equal momentum change magnitude. (3) False: since their masses differ, equal momentum changes imply different velocity changes.',
    difficulty: 2,
    points: 15,
    hints: ['Use Newton third law for forces.', 'Impulse links force and momentum change.', 'Different masses mean different velocity changes for same impulse.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-066',
    type: 'multiple_choice',
    question:
      'Which of the following concerning the wearing of seat-belts is/are correct?\n\n(1) Wearing seat-belts can reduce the change in momentum of passengers in a car during a collision.\n(2) Wearing seat-belts can reduce the force acting on passengers in a car during a collision.\n(3) Wearing seat-belts can prevent passengers from jerking forwards when the car is suddenly stopped.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '(1) False: if the passenger is brought to rest, the change in momentum is essentially the same. (2) True: seat-belts increase stopping time and reduce average force. (3) True: they restrain the passenger and prevent forward lurching due to inertia.',
    difficulty: 2,
    points: 15,
    hints: ['Seat-belts do not change the need to stop the passenger.', 'They increase the impact time.', 'They restrain forward motion due to inertia.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-067',
    type: 'multiple_choice',
    question:
      'The graph shows the variation with time $t$ of the resultant force $F$ acting on a body moving along a straight line. The shaded area represents',
    options: ['the momentum of the body.', 'the change in momentum of the body.', 'the change in the velocity of the body.', 'the change in the kinetic energy of the body.'],
    answer: 'the change in momentum of the body.',
    explanation:
      'Area under a force-time graph is impulse: $Ft=\\Delta p$. Therefore the shaded area represents the change in momentum.',
    difficulty: 1,
    points: 10,
    hints: ['Area under $F$-$t$ graph is impulse.', 'Impulse equals change in momentum.', 'Do not confuse with work, which uses force-distance.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-067-question.png'],
  },
  {
    id: 'mom-068',
    type: 'multiple_choice',
    question:
      'Ball $A$ moving with speed $u$ collides head-on with another ball $B$ initially at rest on a smooth horizontal surface. After collision, $A$ and $B$ move together with common velocity $v$. Which statements concerning the two balls during the collision are correct?\n\n(1) The change of momentum of ball $A$ is equal in magnitude to that of ball $B$.\n(2) The loss of kinetic energy of ball $A$ is equal to the gain of kinetic energy of ball $B$.\n(3) The final velocity $v$ is half of the initial velocity $u$.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '(1) True: by momentum conservation, the decrease in momentum of $A$ equals the increase in momentum of $B$. (2) False: because they stick together, the collision is inelastic and some kinetic energy becomes internal energy, so $A$\\'s KE loss is not simply equal to $B$\\'s KE gain. (3) False: from $m_Au=(m_A+m_B)v$, $v$ depends on both masses and is not necessarily $u/2$.',
    difficulty: 2,
    points: 15,
    hints: ['Momentum conservation always applies to the two-ball system.', 'Sticking together means inelastic collision.', 'Final speed depends on both masses.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-068-question.png'],
  },
  {
    id: 'mom-069',
    type: 'multiple_choice',
    question:
      'A car $P$ of mass 1000 kg moves with a speed of $20\\ \\mathrm{m\\ s^{-1}}$ and makes a head-on collision with a car $Q$ of mass 1500 kg, which was moving with a speed of $10\\ \\mathrm{m\\ s^{-1}}$ in the opposite direction. If the two cars stick together after the collision, find their common velocity immediately after the collision.',
    options: [
      '$2\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $P$',
      '$2\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $Q$',
      '$14\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $P$',
      '$14\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $Q$',
    ],
    answer: '$2\\ \\mathrm{m\\ s^{-1}}$ along the original direction of $P$',
    explanation:
      'Take the original direction of $P$ as positive. Conservation of momentum gives $(1000)(20)+(1500)(-10)=(1000+1500)v$. So $20000-15000=2500v$, hence $v=+2\\,\\mathrm{m\\ s^{-1}}$, i.e. along the original direction of $P$.',
    difficulty: 2,
    points: 15,
    hints: ['Use a sign convention.', 'This is a sticking collision, so both share one final velocity.', 'Apply momentum conservation directly.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-070',
    type: 'multiple_choice',
    question:
      'A ball of mass 0.2 kg is released from rest. It hits the ground and rebounds. The velocity-time graph of the ball is shown. Which statements are correct?\n\n(1) The magnitude of the change in momentum of the ball during the collision is $1.2\\ \\mathrm{kg\\ m\\ s^{-1}}$.\n(2) The magnitude of the average force acting on the ball by the ground during the collision is 12 N.\n(3) There is mechanical energy loss during the collision.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (3) only',
    explanation:
      '(1) True: from the graph, momentum changes from $(0.2)(4)$ downward to $(0.2)(2)$ upward, so magnitude of change is $1.2\\,\\mathrm{kg\\ m\\ s^{-1}}$. (2) False: the net average force is $1.2/0.1=12\\,\\mathrm{N}$, but the ground force must also overcome the ball\\'s weight, so the force by the ground is about $14\\,\\mathrm{N}$. (3) True: rebound speed is smaller than impact speed, so some mechanical energy is lost.',
    difficulty: 2,
    points: 15,
    hints: ['Use the graph values for speeds before and after collision.', 'Distinguish net force from ground reaction.', 'Smaller rebound speed means less KE after collision.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-070-question.png'],
  },
  {
    id: 'mom-071',
    type: 'multiple_choice',
    question:
      'Which of the following graphs (velocity-time and displacement-time) best represent the motion of a ball falling from rest under gravity from height $H$ and bouncing back from the ground two times? Assume the collisions with the ground are perfectly elastic and neglect air resistance. (Downward measurement is taken to be negative.)',
    options: ['(1) and (3) only', '(1) and (4) only', '(2) and (3) only', '(2) and (4) only'],
    answer: '(1) and (3) only',
    explanation:
      'For the velocity-time graph, the ball starts from rest and then accelerates downward, so velocity becomes negative with a constant negative slope; after each perfectly elastic bounce, the sign reverses abruptly with unchanged speed magnitude. For the displacement-time graph, the slope is the velocity, so its magnitude grows during each fall and the correct graph is the one consistent with that behavior. Hence the correct pair is (1) and (3).',
    difficulty: 3,
    points: 20,
    hints: ['Downward is defined as negative.', 'Free-fall gives straight-line segments on the $v$-$t$ graph.', 'Perfectly elastic bounces preserve speed magnitude at impact.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-071-question.png'],
  },
  {
    id: 'mom-072',
    type: 'multiple_choice',
    question:
      'Two identical spheres are moving in opposite directions with speeds $u$ and $v$ (with $u>v$) respectively and make a head-on collision. Which of the following diagrams show(s) a possible situation after collision?',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'For identical spheres, the total momentum before collision is positive because $u>v$. Any possible outcome must conserve momentum. Diagram (1) gives a final total momentum with the wrong sign or magnitude, so it is impossible. Diagrams (2) and (3) are consistent with momentum conservation and are possible.',
    difficulty: 3,
    points: 20,
    hints: ['Initial total momentum is in the direction of the larger speed $u$.', 'Use momentum conservation to test each diagram.', 'Reject any result with the wrong total momentum.'],
    sectionId: 'momentum',
    imagePaths: [
      '/physics/exercises/momentum/mom-072-question.png',
      '/physics/exercises/momentum/mom-072-question-2.png',
    ],
  },
  {
    id: 'mom-073',
    type: 'multiple_choice',
    question:
      'A sphere $P$ of mass 2 kg makes a head-on collision with another sphere $Q$ of mass 1 kg initially at rest. The speed of $P$ just before collision is $6\\ \\mathrm{m\\ s^{-1}}$. If the two spheres move in the same direction after collision, which of the following could be the speed(s) of $Q$ just after collision?\n\n(1) $2\\ \\mathrm{m\\ s^{-1}}$\n(2) $4\\ \\mathrm{m\\ s^{-1}}$\n(3) $6\\ \\mathrm{m\\ s^{-1}}$',
    options: ['(1) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      'Conservation of momentum gives $2(6)=2v_P+1v_Q$. For $v_Q=2$, this gives $v_P=5\\,\\mathrm{m\\ s^{-1}}$, which is impossible because $Q$ cannot be ahead moving slower than $P$ while both move in the same direction just after impact. For $v_Q=4$, we get $v_P=4\\,\\mathrm{m\\ s^{-1}}$, which is possible (they may move together in an inelastic collision). For $v_Q=6$, we get $v_P=3\\,\\mathrm{m\\ s^{-1}}$, also possible with some kinetic energy loss. Thus (2) and (3) only.',
    difficulty: 3,
    points: 20,
    hints: ['Use momentum conservation for each candidate value.', 'Check whether the resulting speeds are physically consistent.', 'Collisions need not be perfectly elastic.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-073-question.png'],
  },
  {
    id: 'mom-074',
    type: 'multiple_choice',
    question:
      'An object of mass 3 kg is initially at rest on a smooth horizontal ground. A force $F$ is applied horizontally such that the magnitude $F$ varies with time $t$ as shown. What is the speed of the object at $t=3\\ \\mathrm{s}$? Neglect air resistance.',
    options: ['$2.5\\ \\mathrm{m\\ s^{-1}}$', '$5.0\\ \\mathrm{m\\ s^{-1}}$', '$10\\ \\mathrm{m\\ s^{-1}}$', '$15\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$5.0\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Area under the force-time graph gives impulse, which equals change in momentum. From the graph, the area is $\\tfrac12(3)(10)=15\\,\\mathrm{N\\,s}$. Hence $15=(3)v$, so $v=5.0\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Use impulse = area under the $F$-$t$ graph.', 'Initial momentum is zero.', 'Then divide by mass to get speed.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-074-question.png'],
  },
  {
    id: 'mom-075',
    type: 'multiple_choice',
    question:
      'A rubber ball bounces vertically up and down from the ground. Which graph best shows the variation of its velocity $v$ with time $t$ if the collisions are elastic? Neglect air resistance.',
    options: [
      '/physics/exercises/momentum/mom-075-option-a.png',
      '/physics/exercises/momentum/mom-075-option-b.png',
      '/physics/exercises/momentum/mom-075-option-c.png',
      '/physics/exercises/momentum/mom-075-option-d.png',
    ],
    answer: '/physics/exercises/momentum/mom-075-option-b.png',
    explanation:
      'Between collisions, the ball moves under constant acceleration $-g$, so the velocity-time graph is made of straight-line segments with constant negative slope. At each elastic collision, the velocity changes sign instantly while keeping the same magnitude. This matches option B.',
    difficulty: 2,
    points: 15,
    hints: ['Free flight gives straight lines on a $v$-$t$ graph.', 'Elastic collisions reverse the sign of velocity without changing its magnitude.', 'Look for repeated straight segments with vertical jumps.'],
    sectionId: 'momentum',
  },
  {
    id: 'mom-076',
    type: 'multiple_choice',
    question:
      'On a smooth horizontal surface, a marble $P$ moving with speed $u$ collides head-on with another marble $Q$, which is at rest. After collision, $P$ and $Q$ move with different speeds as shown. Which statements about this collision are correct?\n\n(1) During collision, the force acting on $Q$ by $P$ is equal and opposite to that acting on $P$ by $Q$.\n(2) The total momentum of the two marbles is conserved only when the collision is perfectly elastic.\n(3) The kinetic energy lost by $P$ must be equal to that gained by $Q$.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '(1) True by Newton third law. (2) False: total momentum is conserved for any collision on a smooth surface with no external net force, not only perfectly elastic ones. (3) False: if the collision is not perfectly elastic, some kinetic energy is transformed into other forms, so $P$\\'s KE loss need not equal $Q$\\'s KE gain.',
    difficulty: 2,
    points: 15,
    hints: ['Newton third law always holds during the collision.', 'Momentum conservation does not require elasticity.', 'Only perfectly elastic collisions conserve total KE.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-076-question.png'],
  },
  {
    id: 'mom-077',
    type: 'multiple_choice',
    question:
      'Players of bubble soccer wear air-filled plastic bubbles. Which statement best explains why the bubble can reduce the chance of injury during a collision?',
    options: [
      'The bubble increases the mass of the player, thus the momentum of the player increases.',
      'The bubble increases the air resistance acting on the player.',
      'The bubble lengthens the impact time during a collision.',
      'Like a balloon, the bubble provides a lifting force to the player.',
    ],
    answer: 'The bubble lengthens the impact time during a collision.',
    explanation:
      'The bubble deforms and increases the collision time. For the same change in momentum, increasing the impact time reduces the average force, so the chance of injury is reduced.',
    difficulty: 1,
    points: 10,
    hints: ['Use impulse: same momentum change over longer time.', 'Longer collision time means smaller average force.', 'The key effect is cushioning, not lift or air resistance.'],
    sectionId: 'momentum',
    imagePaths: ['/physics/exercises/momentum/mom-077-question.png'],
  },
  {
    id: 'pjm-001',
    type: 'multiple_choice',
    question:
      'Two small balls $A$ and $B$ are launched simultaneously from the top of a building. $A$ is projected horizontally with an initial velocity of $10\\ \\mathrm{m\\ s^{-1}}$ and $B$ is projected at an angle of $60^{\\circ}$ above the horizontal with an initial velocity of $20\\ \\mathrm{m\\ s^{-1}}$. The motion of both $A$ and $B$ is in the same plane and air resistance is negligible. Which of the following statements is/are correct when they are travelling in air?\n\n(1) Balls $A$ and $B$ travel equal vertical distances in equal times.\n(2) Balls $A$ and $B$ travel equal horizontal distances in equal times.\n(3) Balls $A$ and $B$ never meet.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '(1) False: $A$ has zero initial vertical velocity, while $B$ has initial vertical velocity $20\\sin60^{\\circ}=17.3\\,\\mathrm{m\\ s^{-1}}$, so their vertical displacements in equal times are different. (2) True: both have the same horizontal component, $10\\,\\mathrm{m\\ s^{-1}}$, so they cover equal horizontal distances in equal times. (3) True: with the same downward acceleration but $B$ always starting with greater upward vertical speed, $B$ stays above $A$, so they do not meet.',
    difficulty: 3,
    points: 20,
    hints: ['Resolve the second launch into components.', 'Compare horizontal components first.', 'Compare vertical motions under the same gravitational acceleration.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-002',
    type: 'multiple_choice',
    question:
      'A small particle is released from $P$ and slips down a smooth curve to $Q$, at the edge of a table 2 m high, where it travels horizontally. It then leaves the table and travels freely under gravity until it hits the ground at $R$, at a horizontal distance of 3 m from $Q$. What is the vertical distance $h$ of $P$ above $Q$?',
    options: ['1.13 m', '1.33 m', '2.50 m', '3.00 m'],
    answer: '1.13 m',
    explanation:
      'From $Q$ to $R$: vertical motion gives $2=\\tfrac12(9.81)t^2$, so $t=0.6386\\,\\mathrm{s}$. Horizontal motion gives $3=ut$, so $u=4.70\\,\\mathrm{m\\ s^{-1}}$. From $P$ to $Q$, loss of PE equals gain of KE: $mgh=\\tfrac12mu^2$. Hence $9.81h=\\tfrac12(4.70)^2$, giving $h=1.13\\,\\mathrm{m}$.',
    difficulty: 3,
    points: 20,
    hints: ['Solve the projectile part first to find speed at $Q$.', 'Use horizontal and vertical projectile equations separately.', 'Then use energy from $P$ to $Q$.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-002-question.png'],
  },
  {
    id: 'pjm-003',
    type: 'multiple_choice',
    question:
      'A ball is thrown horizontally from the top of a building at a speed of $20\\ \\mathrm{m\\ s^{-1}}$. What will be the speed of the object after $3\\ \\mathrm{s}$?',
    options: ['$20.0\\ \\mathrm{m\\ s^{-1}}$', '$25.0\\ \\mathrm{m\\ s^{-1}}$', '$30.0\\ \\mathrm{m\\ s^{-1}}$', '$35.6\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$35.6\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Horizontal speed stays $20\\,\\mathrm{m\\ s^{-1}}$. Vertical speed after 3 s is $gt=(9.81)(3)=29.43\\,\\mathrm{m\\ s^{-1}}$. Resultant speed is $v=\\sqrt{20^2+29.43^2}=35.6\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['Treat horizontal and vertical components separately.', 'Horizontal velocity is constant.', 'Combine components with Pythagoras.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-004',
    type: 'multiple_choice',
    question:
      'A particle is projected with speed $10\\ \\mathrm{m\\ s^{-1}}$ downward from $P$ at an angle of $30^{\\circ}$ to the horizontal. The particle rebounds from the ground at $Q$. If the collision is perfectly elastic and the ground is smooth, what is the horizontal distance $QR$ when it reaches the ground again at $R$? (Take $g=10\\ \\mathrm{m\\ s^{-2}}$.)',
    options: ['10.0 m', '13.0 m', '26.0 m', '43.5 m'],
    answer: '26.0 m',
    explanation:
      'From $P$ to $Q$, the downward vertical component at launch is $10\\sin30^{\\circ}=5\\,\\mathrm{m\\ s^{-1}}$. Using $v_y^2=u_y^2+2ay$, with drop 10 m from the diagram: $v_y^2=5^2+2(10)(10)$, so $v_y=15\\,\\mathrm{m\\ s^{-1}}$. After a perfectly elastic rebound on a smooth ground, the upward vertical speed is also $15\\,\\mathrm{m\\ s^{-1}}$ and the horizontal speed remains $10\\cos30^{\\circ}$. From $Q$ to $R$, $0=(15)t-\\tfrac12(10)t^2$ gives $t=3\\,\\mathrm{s}$. Hence $QR=(10\\cos30^{\\circ})(3)=26.0\\,\\mathrm{m}$.',
    difficulty: 3,
    points: 20,
    hints: ['Use the given geometry to find the impact vertical speed.', 'Smooth ground preserves horizontal speed.', 'Perfectly elastic rebound reverses the vertical component without losing magnitude.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-004-question.png'],
  },
  {
    id: 'pjm-005',
    type: 'multiple_choice',
    question:
      'A hunter aims his gun at a monkey at rest at point $M$. The gun makes an angle $\\theta$ with the horizontal. When the gun is fired, the monkey lets go and falls with zero initial velocity. In order that the bullet can hit the monkey, the angle $\\theta$ depends on\n\n(1) $u$, the initial speed of the bullet.\n(2) $h$, the vertical height of the monkey above the level of the gun.\n(3) $d$, the horizontal distance of the gun from the monkey.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'To hit the monkey, the gun must be aimed directly at the monkey initially, so the launch angle satisfies $\\tan\\theta=h/d$. Both bullet and monkey then fall with the same gravitational acceleration, so the required angle does not depend on the bullet\\'s initial speed $u$. It depends only on $h$ and $d$.',
    difficulty: 2,
    points: 15,
    hints: ['This is the classic monkey-and-hunter setup.', 'Both bullet and monkey fall with the same vertical acceleration.', 'The aim direction is set by the initial line of sight.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-005-question.png'],
  },
  {
    id: 'pjm-006',
    type: 'multiple_choice',
    question:
      'Two small balls $A$ and $B$ are placed at the edge of a table. Ball $A$ is pushed slightly and falls vertically to the ground, while ball $B$ is projected horizontally at the same instant and follows a parabolic path. If air resistance is neglected, which statements are correct?\n\n(1) Balls $A$ and $B$ reach the ground at the same time.\n(2) Balls $A$ and $B$ have the same acceleration during their motion in air.\n(3) Balls $A$ and $B$ have the same vertical velocity on reaching the ground.',
    options: ['(3) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      'Both balls start with zero initial vertical velocity and fall through the same vertical distance under the same gravitational acceleration, so they reach the ground at the same time and with the same final vertical velocity. During motion in air, both have the same acceleration due to gravity.',
    difficulty: 2,
    points: 15,
    hints: ['Compare vertical motion only.', 'Horizontal motion does not affect fall time.', 'Both experience the same gravitational acceleration.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-006-question.png'],
  },
  {
    id: 'pjm-007',
    type: 'multiple_choice',
    question:
      'A bomber is flying horizontally to the right with constant velocity. It releases three bombs one by one at a constant time interval. If air resistance is neglected, which of the following diagrams best shows the positions of the bomber and the bombs at a certain time instant?',
    options: [
      { id: 'option-a', image: '/physics/exercises/projectile-motion/pjm-007-option-a.png' },
      { id: 'option-b', image: '/physics/exercises/projectile-motion/pjm-007-option-b.png' },
      { id: 'option-c', image: '/physics/exercises/projectile-motion/pjm-007-option-c.png' },
      { id: 'option-d', image: '/physics/exercises/projectile-motion/pjm-007-option-d.png' },
    ],
    answer: 'option-d',
    explanation:
      'The bomber and bombs all have the same horizontal velocity, so they stay vertically aligned at any instant. The bombs released earlier have fallen farther, so the correct arrangement is a vertical line below the bomber.',
    difficulty: 2,
    points: 15,
    hints: ['Horizontal motion is unchanged after release.', 'Compare only the vertical drop of each bomb.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-008',
    type: 'multiple_choice',
    question:
      'A ball is projected horizontally from a table surface with an initial speed $u$. It hits the ground with a speed $v$. If air resistance is neglected, what is the time of flight of the ball in air ?',
    options: ['$\\frac{v-u}{2g}$', '$\\frac{v-u}{g}$', '$\\frac{\\sqrt{v^2-u^2}}{2g}$', '$\\frac{\\sqrt{v^2-u^2}}{g}$'],
    answer: '$\\frac{\\sqrt{v^2-u^2}}{g}$',
    explanation:
      'The horizontal speed remains $u$. At impact, the vertical component is $v_y=\\sqrt{v^2-u^2}$. Using $v_y=gt$ gives $t=\\frac{\\sqrt{v^2-u^2}}{g}$.',
    difficulty: 3,
    points: 15,
    hints: ['Resolve the final velocity into horizontal and vertical components.', 'The vertical initial speed is zero.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-009',
    type: 'multiple_choice',
    question:
      'A particle is projected horizontally towards a vertical wall at a horizontal distance of 1.2 m away. It hits the wall at a point which is 0.8 m below its initial horizontal level. If air resistance is neglected, what is the speed of the particle when it hits the wall ?',
    options: ['$2.65\\ \\mathrm{m\\ s^{-1}}$', '$3.45\\ \\mathrm{m\\ s^{-1}}$', '$3.95\\ \\mathrm{m\\ s^{-1}}$', '$4.95\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$4.95\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'From vertical motion, $0.8=\\frac{1}{2}gt^2$ gives $t\\approx0.404\\,\\mathrm{s}$. Then $v_x=1.2/0.404\\approx2.97\\,\\mathrm{m\\ s^{-1}}$ and $v_y=gt\\approx3.96\\,\\mathrm{m\\ s^{-1}}$. The resultant speed is about $4.95\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 3,
    points: 15,
    hints: ['Find the time from the vertical drop first.', 'Then combine horizontal and vertical velocity components.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-009-question.png'],
  },
  {
    id: 'pjm-010',
    type: 'multiple_choice',
    question:
      'A ball is projected at an elevation angle of $45^{\\circ}$ to the horizontal with an initial kinetic energy $E_0$. Neglecting air resistance, what is the kinetic energy of the ball when it is moving halfway up?',
    options: ['$\\frac{1}{4}E_0$', '$\\frac{1}{2}E_0$', '$\\frac{1}{3}E_0$', '$\\frac{3}{4}E_0$'],
    answer: '$\\frac{3}{4}E_0$',
    explanation:
      'At $45^{\\circ}$, the initial kinetic energy is split equally between horizontal and vertical motion, so each has $\\frac{1}{2}E_0$. At halfway up, half of the vertical-motion kinetic energy has changed into gravitational potential energy, leaving $\\frac{1}{4}E_0$ vertically plus $\\frac{1}{2}E_0$ horizontally, totaling $\\frac{3}{4}E_0$.',
    difficulty: 3,
    points: 15,
    hints: ['Split the initial kinetic energy into horizontal and vertical parts.', 'Horizontal kinetic energy stays constant.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-011',
    type: 'multiple_choice',
    question:
      'A small particle is projected horizontally into the air. The figure shows part of the stroboscopic picture. The side of each square of the grid is 5 cm long. Estimate the frequency of the stroboscopic lamp used. (Neglect air resistance and take $g$ to be $10\\ \\mathrm{m\\ s^{-2}}$.)',
    options: ['5.8 Hz', '7.1 Hz', '10.0 Hz', '12.5 Hz'],
    answer: '10.0 Hz',
    explanation:
      'Using the vertical displacements between successive images and $y=u_yt+\\frac{1}{2}gt^2$, the time interval between flashes is $0.1\\,\\mathrm{s}$. Hence the lamp frequency is $1/0.1=10.0\\,\\mathrm{Hz}$.',
    difficulty: 3,
    points: 15,
    hints: ['Use the change in vertical separation between flashes.', 'Frequency is the reciprocal of the time interval.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-011-question.png'],
  },
  {
    id: 'pjm-012',
    type: 'multiple_choice',
    question:
      'As shown in the figure, a gun aims directly at a point $P$ which is 40 m from the gun. The barrel of the gun makes an angle $\\theta$ with the vertical. If the speed of the bullet is $50\\ \\mathrm{m\\ s^{-1}}$, what is the separation between the bullet and point $P$ when the bullet is vertically below $P$ ? (Neglect air resistance and take $g$ to be $10\\ \\mathrm{m\\ s^{-2}}$.)',
    options: ['3.2 m', '4.8 m', '7.8 m', 'It cannot be found as the value of $\\theta$ is not known.'],
    answer: '3.2 m',
    explanation:
      'The time to reach the vertical line through $P$ is $t=40/50=0.8\\,\\mathrm{s}$ because both horizontal distance and horizontal speed carry the same factor of $\\sin\\theta$. In this time, the projectile falls $\\frac{1}{2}gt^2=\\frac{1}{2}(10)(0.8)^2=3.2\\,\\mathrm{m}$ below the straight aiming line.',
    difficulty: 3,
    points: 15,
    hints: ['Treat it like the monkey-and-hunter setup.', 'The extra drop is purely gravitational.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-012-question.png'],
  },
  {
    id: 'pjm-013',
    type: 'multiple_choice',
    question:
      'Five bombs are released from a bomber flying horizontally with a constant velocity. They are released one by one at one-second intervals. Neglecting air resistance, state\n(1) the positions of the five bombs in the air at any instant before landing on the ground,\n(2) the landing positions of the five bombs on the ground?',
    options: [
      '(1) They lie on a parabola. (2) They are evenly spaced.',
      '(1) They lie on a parabola. (2) They are unevenly spaced.',
      '(1) They lie on a straight line. (2) They are evenly spaced.',
      '(1) They lie on a straight line. (2) They are unevenly spaced.',
    ],
    answer: '(1) They lie on a straight line. (2) They are evenly spaced.',
    explanation:
      'At any instant all bombs have the same horizontal position as the bomber, so they line up vertically, i.e. on a straight line. Equal release intervals and constant horizontal speed mean equal horizontal spacing between landing points.',
    difficulty: 2,
    points: 15,
    hints: ["All bombs keep the bomber's horizontal speed.", 'Horizontal spacing equals $v_x\\Delta t$.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-014',
    type: 'multiple_choice',
    question:
      'As shown in the figure, a small ball is projected horizontally with a speed of $1.6\\ \\mathrm{m\\ s^{-1}}$ from the point $P$ on a wall inside a room. The ball hits the smooth horizontal floor at $Q$ and rebounds to the point $R$ on the opposite wall. If air resistance is neglected, which of the following statements must be true?',
    options: [
      'There is no loss of kinetic energy of the ball for the collision at $Q$.',
      'The ball hits $R$ with a horizontal velocity.',
      'The total time of flight along the path $PQR$ is 0.5 s.',
      'If the ball is projected with the same horizontal speed at a point $P^\\prime$, vertically above $P$, the total time of flight from $P^\\prime$ to the opposite wall would be longer.',
    ],
    answer: 'The total time of flight along the path $PQR$ is 0.5 s.',
    explanation:
      'The horizontal speed stays at $1.6\\,\\mathrm{m\\ s^{-1}}$, so the total travel time is horizontal distance divided by horizontal speed: $(0.6+0.2)/1.6=0.5\\,\\mathrm{s}$. The other statements depend on collision details or impact position and are not guaranteed.',
    difficulty: 3,
    points: 15,
    hints: ['Use only the total horizontal distance and constant horizontal speed.', 'You do not need the vertical motion to get total time here.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-014-question.png'],
  },
  {
    id: 'pjm-015',
    type: 'multiple_choice',
    question:
      'A small particle is projected horizontally towards a vertical wall 2.5 m away. It hits the wall 1.5 m below the initial horizontal level. At what angle to the vertical does the particle hit the wall ?',
    options: ['$34^{\\circ}$', '$40^{\\circ}$', '$53^{\\circ}$', '$56^{\\circ}$'],
    answer: '$40^{\\circ}$',
    explanation:
      'From vertical motion, $1.5=\\frac{1}{2}gt^2$ gives $t\\approx0.553\\,\\mathrm{s}$. Then $v_x=2.5/0.553\\approx4.52\\,\\mathrm{m\\ s^{-1}}$ and $v_y=gt\\approx5.42\\,\\mathrm{m\\ s^{-1}}$. The angle to the vertical satisfies $\\tan\\theta=v_x/v_y$, giving $\\theta\\approx40^{\\circ}$.',
    difficulty: 3,
    points: 15,
    hints: ['Find the time from the vertical drop.', 'Angle to the vertical uses $\\tan\\theta=v_x/v_y$.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-015-question.png'],
  },
  {
    id: 'pjm-016',
    type: 'multiple_choice',
    question:
      'As shown in the figure, a small ball is released from the point $A$. It makes a perfectly elastic collision at $B$ on a slope and then rebounds horizontally. The ball finally reaches $C$ on the ground. The vertical separation of $AB$ and $BC$ are both equal to $h$. If air resistance is neglected, which of the following statements is/are correct?\n\n(1) The acceleration of the ball is constant throughout the motion from $A$ to $C$.\n(2) The time for the ball to move from $A$ to $B$ is equal to that for it to move from $B$ to $C$.\n(3) The kinetic energy of the ball just before colliding at $C$ is twice that at $B$.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'During free flight the acceleration is $g$, but at the collision point $B$ there is an additional contact force, so the acceleration is not constant throughout. The vertical motion for $A\\to B$ and $B\\to C$ both starts with zero vertical speed and covers the same drop $h$, so the times are equal. The total drop from $A$ to $C$ is $2h$, so the kinetic energy just before reaching $C$ is twice that at $B$.',
    difficulty: 3,
    points: 15,
    hints: ['Treat the motion in separate stages.', 'Compare the vertical drops for the two free-flight segments.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-016-question.png'],
  },
  {
    id: 'pjm-017',
    type: 'multiple_choice',
    question:
      'As shown in the figure, a small ball is projected from the point $A$ on the ground with an angle of elevation. It rebounds at $B$ on the incline and travels back to $A$ along the same path. Which statements about the ball must be correct ?\n\n(1) The ball hits the incline at $B$ normally.\n(2) The ball undergoes perfectly elastic collision at $B$.\n(3) The time taken for the ball to go from $A$ to $B$ is equal to that for it to return from $B$ to $A$.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      'If the ball returns along the same path, it must strike the incline normally. To retrace the path and return to the same starting point, no kinetic energy can be lost at the collision, so the collision must be perfectly elastic. With the same path traversed in reverse and the same speeds at corresponding points, the travel times are equal.',
    difficulty: 3,
    points: 15,
    hints: ['Retracing the exact same path is a strong constraint.', 'Think about what the collision must do to the velocity direction and magnitude.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-017-question.png'],
  },
  {
    id: 'pjm-018',
    type: 'multiple_choice',
    question:
      'A small ball of mass 0.2 kg is projected from point $O$ on the ground with a certain initial velocity as shown. It reaches a maximum height of 1.8 m at point $P$. Find the magnitude of the change in momentum, in N s, of the ball from $O$ to $P$. Neglect air resistance and take $g$ to be $10\\ \\mathrm{m\\ s^{-2}}$.',
    options: ['1.2', '1.6', '2.4', 'It cannot be determined since the angle of projection is not given.'],
    answer: '1.2',
    explanation:
      'At the highest point, the vertical component of velocity is zero. Using $0=u_y^2-2gh$ with $h=1.8\\,\\mathrm{m}$ gives $u_y=6\\,\\mathrm{m\\ s^{-1}}$. The horizontal momentum is unchanged, so the momentum change is purely vertical: $\\Delta p=mu_y=(0.2)(6)=1.2\\,\\mathrm{N\\ s}$.',
    difficulty: 3,
    points: 15,
    hints: ['Only the vertical component changes.', 'Use the maximum height to find the initial vertical component.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-018-question.png'],
  },
  {
    id: 'pjm-019',
    type: 'multiple_choice',
    question:
      'A small ball is released from rest at the top of a building. After a while another ball is projected horizontally from the same position. Before reaching the ground, which quantity of the two balls will remain unchanged? Neglect air resistance.\n\n(1) their acceleration\n(2) the difference in the vertical component of their velocities\n(3) the difference in their heights above the ground',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'Both balls always have the same acceleration due to gravity. Their vertical velocities differ by a constant amount because they have the same vertical acceleration after the second ball is launched. Their height difference does not remain constant; it changes with time.',
    difficulty: 3,
    points: 15,
    hints: ['Compare only vertical motion.', 'Same acceleration means relative vertical acceleration is zero.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-020',
    type: 'multiple_choice',
    question:
      'A ball of mass 2 kg is projected upwards at an angle of $30^{\\circ}$ to the horizontal. It is found that the kinetic energy of the ball at the maximum height is 108 J. What is the initial speed of the ball ?',
    options: ['$8\\ \\mathrm{m\\ s^{-1}}$', '$12\\ \\mathrm{m\\ s^{-1}}$', '$15\\ \\mathrm{m\\ s^{-1}}$', '$18\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$12\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'At the maximum height, the vertical component of velocity is zero, so the speed is the horizontal component $u\\cos30^{\\circ}$. Hence $108=\\frac{1}{2}(2)(u\\cos30^{\\circ})^2=u^2\\cdot\\frac{3}{4}$, giving $u=12\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 3,
    points: 15,
    hints: ['At the top, only horizontal motion remains.', 'Use kinetic energy of the horizontal component only.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-020-question.png'],
  },
  {
    id: 'pjm-021',
    type: 'multiple_choice',
    question:
      'A ball is projected horizontally from the top of a building. It reaches the ground at a point 40 m from the building, making an angle of $45^{\\circ}$ with the horizontal as shown in the figure. What is the height of the building ? Take the acceleration due to gravity $g$ to be $10\\ \\mathrm{m\\ s^{-2}}$.',
    options: ['20 m', '30 m', '40 m', '80 m'],
    answer: '20 m',
    explanation:
      'At impact, the angle is $45^{\\circ}$, so the horizontal and vertical speed components are equal: $v_y=v_x=u$. Since $v_y=gt$, we have $u=10t$. Also, horizontal motion gives $40=ut=10t^2$, so $t=2\\,\\mathrm{s}$. The height is then $h=\\frac{1}{2}gt^2=\\frac{1}{2}(10)(2)^2=20\\,\\mathrm{m}$.',
    difficulty: 3,
    points: 15,
    hints: ['Use the 45 degree impact angle to relate horizontal and vertical speed.', 'Then solve horizontal motion before finding the height.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-021-question.png'],
  },
  {
    id: 'pjm-022',
    type: 'multiple_choice',
    question:
      'An angry bird is at a height of 10 m above the ground. A green pig is at a horizontal distance of 55 m from the angry bird with a height of 12 m above the ground. In order that the angry bird can hit the green pig, what should be the launch angle (made with the horizontal) of the shot if the time of flight is $2.5\\ \\mathrm{s}$ ?',
    options: ['$28.5^{\\circ}$', '$30.7^{\\circ}$', '$32.5^{\\circ}$', '$35.2^{\\circ}$'],
    answer: '$30.7^{\\circ}$',
    explanation:
      'Horizontally, $55=u_x(2.5)$ so $u_x=22\\,\\mathrm{m\\ s^{-1}}$. Vertically, $12-10=u_y(2.5)-\\frac{1}{2}(9.81)(2.5)^2$, giving $u_y\\approx13.06\\,\\mathrm{m\\ s^{-1}}$. Hence $\\tan\\theta=u_y/u_x=13.06/22$, so $\\theta\\approx30.7^{\\circ}$.',
    difficulty: 3,
    points: 15,
    hints: ['Resolve the launch velocity into horizontal and vertical components.', 'Use the given total flight time in both directions.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-023',
    type: 'multiple_choice',
    question:
      'A ball is projected horizontally with an initial speed of $u$ at a certain height above the ground. It then reaches the ground after a time $t$ and the landing position is at a horizontal distance $R$ from the starting point. What would the corresponding values be if the initial speed of the ball is changed to $2u$ ?',
    options: ['$2t$, $2R$', '$2t$, $R$', '$t$, $4R$', '$t$, $2R$'],
    answer: '$t$, $2R$',
    explanation:
      'The time of flight depends only on the vertical motion and the height, so it is unchanged. The horizontal range is $R=ut$, so doubling the horizontal speed doubles the horizontal distance to $2R$.',
    difficulty: 2,
    points: 15,
    hints: ['Horizontal and vertical motions are independent.', 'Only the horizontal speed changes.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-024',
    type: 'multiple_choice',
    question:
      'A particle is projected from the ground with a certain speed making an angle of $35^{\\circ}$ with the ground. After 4.5 s, it reaches the ground. Determine the horizontal distance moved by the particle.',
    options: ['128 m', '142 m', '164 m', '186 m'],
    answer: '142 m',
    explanation:
      'Using vertical motion with total flight time $4.5\\,\\mathrm{s}$, $0=(u\\sin35^{\\circ})(4.5)-\\frac{1}{2}(9.81)(4.5)^2$, so $u\\approx38.48\\,\\mathrm{m\\ s^{-1}}$. The horizontal range is then $(u\\cos35^{\\circ})(4.5)\\approx142\\,\\mathrm{m}$.',
    difficulty: 3,
    points: 15,
    hints: ['First find the initial speed from the vertical motion.', 'Then use the horizontal component for the range.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-025',
    type: 'multiple_choice',
    question:
      'A heavy ball is projected horizontally from the top of a building with an initial speed of $10\\ \\mathrm{m\\ s^{-1}}$. It hits the ground with a speed of $15\\ \\mathrm{m\\ s^{-1}}$. If air resistance is neglected, what is the height of the building ?',
    options: ['3.09 m', '6.37 m', '8.15 m', '9.28 m'],
    answer: '6.37 m',
    explanation:
      'The horizontal component stays at $10\\,\\mathrm{m\\ s^{-1}}$. At impact, $15^2=10^2+v_y^2$, so $v_y\\approx11.18\\,\\mathrm{m\\ s^{-1}}$. Using $v_y^2=2gh$ gives $h=11.18^2/(2\\times9.81)\\approx6.37\\,\\mathrm{m}$.',
    difficulty: 3,
    points: 15,
    hints: ['Find the final vertical component from the resultant speed.', 'Then use vertical kinematics.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-026',
    type: 'multiple_choice',
    question:
      'A particle is projected with speed $25\\ \\mathrm{m\\ s^{-1}}$ at an angle of dip of $30^{\\circ}$ on the edge of a vertical cliff 20 m above point $P$ as shown in the figure. The particle then follows a parabolic path to reach the point $Q$ at the bottom of an incline which makes an angle of $30^{\\circ}$ with the horizontal. Calculate the distance $PQ$ of the incline. Take $g$ to be $10\\ \\mathrm{m\\ s^{-2}}$.',
    options: ['40 m', '50 m', '60 m', '70 m'],
    answer: '50 m',
    explanation:
      'Let $PQ=d$. Horizontally, $d\\cos30^{\\circ}=(25\\cos30^{\\circ})t$, so $d=25t$. Vertically, $20+d\\sin30^{\\circ}=(25\\sin30^{\\circ})t+\\frac{1}{2}(10)t^2$. Substituting $d=25t$ gives $20=5t^2$, so $t=2\\,\\mathrm{s}$ and hence $d=25(2)=50\\,\\mathrm{m}$.',
    difficulty: 4,
    points: 15,
    hints: ['Express the incline distance in terms of time using horizontal motion first.', 'Then substitute into the vertical equation.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-026-question.png'],
  },
  {
    id: 'pjm-027',
    type: 'multiple_choice',
    question:
      'A ball is projected horizontally at the top of a building with a speed of $12\\ \\mathrm{m\\ s^{-1}}$. The height of the building above the ground is 18 m. What is the speed of the ball when it lands on the ground if air resistance is negligible ?',
    options: ['$15.6\\ \\mathrm{m\\ s^{-1}}$', '$22.3\\ \\mathrm{m\\ s^{-1}}$', '$25.6\\ \\mathrm{m\\ s^{-1}}$', '$28.9\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$22.3\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'Using energy conservation, $\\frac{1}{2}u^2+gh=\\frac{1}{2}v^2$. Substituting $u=12\\,\\mathrm{m\\ s^{-1}}$ and $h=18\\,\\mathrm{m}$ gives $\\frac{1}{2}(12)^2+(9.81)(18)=\\frac{1}{2}v^2$, so $v\\approx22.3\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['The horizontal launch speed contributes to the initial kinetic energy.', 'Use conservation of mechanical energy.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-028',
    type: 'multiple_choice',
    question:
      'A football player kicks a ball on the ground. The ball leaves the ground with speed $v$ and hits the bar at $X$ with a speed of $17\\ \\mathrm{m\\ s^{-1}}$. $X$ is 2 m above the ground. Neglect air resistance, what is the value of $v$ ?',
    options: ['$15.8\\ \\mathrm{m\\ s^{-1}}$', '$18.1\\ \\mathrm{m\\ s^{-1}}$', '$19.0\\ \\mathrm{m\\ s^{-1}}$', '$23.3\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$18.1\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'By energy conservation, $\\frac{1}{2}mv^2=\\frac{1}{2}m(17)^2+mg(2)$. So $\\frac{1}{2}v^2=\\frac{1}{2}(17)^2+(9.81)(2)$, giving $v\\approx18.1\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['The ball is higher at X than at launch.', 'Use conservation of mechanical energy.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-028-question.png'],
  },
  {
    id: 'pjm-029',
    type: 'multiple_choice',
    question:
      'A bomber aircraft is 1 km above the ground and is flying horizontally at a speed of $200\\ \\mathrm{m\\ s^{-1}}$. The aircraft is going to release a bomb to destroy a target on the ground. How long before flying over the target should the bomb be released ? Assume that the bomber aircraft and the target are in the same vertical plane and neglect air resistance.',
    options: ['5.6 s', '10.1 s', '14.3 s', 'It cannot be calculated as the horizontal distance between the aircraft and the target is not known.'],
    answer: '14.3 s',
    explanation:
      'The required lead time is the vertical fall time. Using $1000=\\frac{1}{2}(9.81)t^2$ gives $t\\approx14.3\\,\\mathrm{s}$.',
    difficulty: 2,
    points: 15,
    hints: ['The release time depends only on the vertical drop.', 'Ignore horizontal speed when finding the time.'],
    sectionId: 'projectile-motion',
  },
  {
    id: 'pjm-030',
    type: 'multiple_choice',
    question:
      'A particle is projected into the air at time $t=0$ and it performs a parabolic motion before landing on the ground as shown. Which graph represents the variation of the kinetic energy (KE) of the particle with time before landing? Neglect air resistance.',
    options: [
      { id: 'option-a', image: '/physics/exercises/projectile-motion/pjm-030-option-a.png' },
      { id: 'option-b', image: '/physics/exercises/projectile-motion/pjm-030-option-b.png' },
      { id: 'option-c', image: '/physics/exercises/projectile-motion/pjm-030-option-c.png' },
      { id: 'option-d', image: '/physics/exercises/projectile-motion/pjm-030-option-d.png' },
    ],
    answer: 'option-d',
    explanation:
      'The vertical velocity varies linearly with time, so the vertical kinetic energy varies quadratically with time. The horizontal kinetic energy stays constant. Therefore the total kinetic energy is a quadratic curve with a non-zero minimum at the highest point.',
    difficulty: 3,
    points: 15,
    hints: ['At the highest point, the speed is not zero.', 'Horizontal kinetic energy is constant throughout.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-030-question.png'],
  },
  {
    id: 'pjm-031',
    type: 'multiple_choice',
    question:
      'A particle is projected horizontally towards a vertical wall 1.0 m away. It hits the wall at a position 0.8 m vertically below its point of projection. At what speed is it projected? Neglect air resistance.',
    options: ['$2.0\\ \\mathrm{m\\ s^{-1}}$', '$2.5\\ \\mathrm{m\\ s^{-1}}$', '$5.0\\ \\mathrm{m\\ s^{-1}}$', '$6.3\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$2.5\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'From the vertical motion, $0.8=\\frac{1}{2}(9.81)t^2$, so $t\\approx0.404\\,\\mathrm{s}$. The horizontal speed is then $u=1.0/0.404\\approx2.5\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 2,
    points: 15,
    hints: ['First find the fall time from the vertical drop.', 'Then use horizontal motion.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-031-question.png'],
  },
  {
    id: 'pjm-032',
    type: 'multiple_choice',
    question:
      "The stroboscopic picture shows a particle projected horizontally at position $P$ into the air in a vertical plane. Subsequently the particle reaches positions $Q$ and $R$ such that the time interval between $P$ and $Q$ is equal to that between $Q$ and $R$. Each square of the grid measures $1.25\\ \\mathrm{cm} \\times 1.25\\ \\mathrm{cm}$. Find the particle's speed of projection at $P$. Neglect air resistance.",
    options: ['$0.3\\ \\mathrm{m\\ s^{-1}}$', '$0.4\\ \\mathrm{m\\ s^{-1}}$', '$0.5\\ \\mathrm{m\\ s^{-1}}$', '$0.6\\ \\mathrm{m\\ s^{-1}}$'],
    answer: '$0.5\\ \\mathrm{m\\ s^{-1}}$',
    explanation:
      'The first vertical drop is $1.25\\,\\mathrm{cm}=0.0125\\,\\mathrm{m}$. Using $y=\\frac{1}{2}gt^2$ gives $T\\approx0.0505\\,\\mathrm{s}$. The first horizontal spacing is $2.5\\,\\mathrm{cm}=0.025\\,\\mathrm{m}$, so $u=0.025/0.0505\\approx0.5\\,\\mathrm{m\\ s^{-1}}$.',
    difficulty: 3,
    points: 15,
    hints: ['Use the first interval only.', 'Convert cm to m before calculating.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-032-question.png'],
  },
  {
    id: 'pjm-033',
    type: 'multiple_choice',
    question:
      'Marbles $P$ and $Q$ of the same mass are shot horizontally. They hit the horizontal ground at points $R$ and $S$ respectively as shown. Neglect air resistance. Which of the following statements is INCORRECT ?',
    options: [
      'The initial speed of marble $P$ is smaller than that of marble $Q$.',
      'The time of flight of marble $P$ is shorter than that of marble $Q$.',
      'The potential energy loss of marble $P$ is greater than that of marble $Q$.',
      'The acceleration of marbles $P$ and $Q$ is the same during the flight.',
    ],
    answer: 'The time of flight of marble $P$ is shorter than that of marble $Q$.',
    explanation:
      'If marble $P$ falls from a greater height, its time of flight must be longer, not shorter, because vertical fall time depends on height through $y=\\frac{1}{2}gt^2$. The other statements are consistent with projectile motion under gravity.',
    difficulty: 2,
    points: 15,
    hints: ['Check how time of flight depends on height.', 'Both marbles have the same acceleration in air.'],
    sectionId: 'projectile-motion',
    imagePaths: ['/physics/exercises/projectile-motion/pjm-033-question.png'],
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
