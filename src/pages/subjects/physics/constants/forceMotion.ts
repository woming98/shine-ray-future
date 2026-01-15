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
];

// 练习题 - DSE Style (All in English)
export const FORCE_MOTION_EXERCISES: Exercise[] = [
  // Basic question: Original problem
  {
    id: 'fme-1',
    type: 'multiple_choice',
    question: 'A body is dropped from rest down a cliff on planet X. After falling for 1 s, it is 4 m below the starting point. What is the gravitational acceleration g on planet X?',
    options: ['2 m/s²', '4 m/s²', '8 m/s²', '16 m/s²'],
    answer: '8 m/s²',
    explanation: 'For a body dropped from rest, s = ½gt².\nSubstituting s = 4 m, t = 1 s:\n4 = ½ × g × 1²\ng = 8 m/s²',
    difficulty: 1,
    points: 10,
    hints: ['The body is dropped from rest, so u = 0', 'Use the equation s = ½gt²', 'Substitute the known values to find g'],
  },
  {
    id: 'fme-2',
    type: 'multiple_choice',
    question: 'A body is dropped from rest down a cliff on planet X. After falling for 1 s, it is 4 m below the starting point. How far below the starting point will it be after a further 4 s?',
    options: ['40 m', '64 m', '80 m', '100 m'],
    answer: '100 m',
    explanation: '⚠️ Key point: "a further 4 s" means total time t = 1 + 4 = 5 s\n\nStep 1: From the first part, g = 8 m/s²\nStep 2: Find position after 5 s\ns = ½gt² = ½ × 8 × 5² = ½ × 8 × 25 = 100 m\n\n⚠️ Common mistake: Using t = 4 gives 64 m (wrong! That\'s the displacement from rest in 4 s)',
    difficulty: 2,
    points: 15,
    hints: ['What is the total time after "a further 4 s"?', 'Total time = 1 + 4 = 5 s', 'Use the total time in s = ½gt²'],
  },
  {
    id: 'fme-3',
    type: 'multiple_choice',
    question: 'Continuing from above, what is the distance fallen during the "last 4 seconds" (i.e., from t = 1 s to t = 5 s)?',
    options: ['64 m', '80 m', '96 m', '100 m'],
    answer: '96 m',
    explanation: 'This is a "segment displacement" problem:\nΔs = s(5) - s(1) = 100 - 4 = 96 m\n\nAlternative method:\nVelocity at t = 1 s: v₁ = gt = 8 × 1 = 8 m/s\nDisplacement in next 4 s = v₁t + ½gt² = 8×4 + ½×8×16 = 32 + 64 = 96 m',
    difficulty: 3,
    points: 20,
    hints: ['This asks for "segment displacement", not "total displacement"', 'Method 1: s(5) - s(1)', 'Method 2: Use t = 1 s as the new starting point'],
  },
  {
    id: 'fme-4',
    type: 'multiple_choice',
    question: 'Continuing from above, what is the instantaneous velocity of the body at t = 5 s?',
    options: ['8 m/s', '25 m/s', '40 m/s', '50 m/s'],
    answer: '40 m/s',
    explanation: 'For a body dropped from rest:\nv = gt = 8 × 5 = 40 m/s\n\nVerification using v² = 2gs:\nv² = 2 × 8 × 100 = 1600\nv = 40 m/s ✓',
    difficulty: 2,
    points: 15,
    hints: ['The body starts from rest, so u = 0', 'Use v = gt or v² = 2gs'],
  },
  {
    id: 'fme-5',
    type: 'multiple_choice',
    question: 'An object falls freely from rest on a planet. Which graph correctly shows how its displacement s varies with time t?',
    options: [
      'A. A straight line through the origin (positive slope)',
      'B. A parabola through the origin (opening upward)',
      'C. A parabola through the origin (opening downward)',
      'D. A horizontal straight line'
    ],
    answer: 'B. A parabola through the origin (opening upward)',
    explanation: 's = ½gt² is a quadratic function of t, so the graph is a parabola through the origin, opening upward.\n\n• A is the s-t graph for uniform motion\n• C has the wrong direction of opening\n• D is the s-t graph for a stationary object',
    difficulty: 2,
    points: 15,
    hints: ['What type of function is s = ½gt²?', 'What is the shape of a quadratic function?'],
  },
  {
    id: 'fme-6',
    type: 'multiple_choice',
    question: 'Which of the following statements about free fall is INCORRECT?',
    options: [
      'All objects fall with the same acceleration (at the same location)',
      'The object falls the same distance in each second',
      'The velocity is directly proportional to the time of fall',
      'The displacement is directly proportional to the square of the time'
    ],
    answer: 'The object falls the same distance in each second',
    explanation: 'Free fall is uniformly accelerated motion, so the distance fallen each second increases!\n\n1st second: s₁ = ½g(1)² = 0.5g\n2nd second: s₂ = ½g(2)² - ½g(1)² = 2g - 0.5g = 1.5g\n3rd second: s₃ = ½g(3)² - ½g(2)² = 4.5g - 2g = 2.5g\n\nRatio of distances in equal time intervals = 1:3:5:7:... (odd number sequence)',
    difficulty: 2,
    points: 15,
    hints: ['Is the distance fallen each second the same in uniformly accelerated motion?', 'Calculate the distances in the 1st and 2nd seconds to compare'],
  },
  {
    id: 'fme-7',
    type: 'calculation',
    question: 'On Earth (g = 10 m/s²), an object is released from rest from the top of an 80 m tall building. Find:\n(a) The time taken for the object to reach the ground\n(b) The velocity of the object when it hits the ground\n(c) The distance fallen during the last 1 second',
    answer: '(a) 4 s  (b) 40 m/s  (c) 35 m',
    explanation: '(a) s = ½gt²\n80 = ½ × 10 × t²\nt² = 16\nt = 4 s\n\n(b) v = gt = 10 × 4 = 40 m/s\nor v² = 2gs = 2 × 10 × 80 = 1600, v = 40 m/s\n\n(c) Last 1 s = from t = 3 s to t = 4 s\ns(4) - s(3) = 80 - ½×10×9 = 80 - 45 = 35 m\n\nOr: Velocity at t = 3 s: v₃ = 30 m/s\nDistance in last 1 s = v₃t + ½gt² = 30×1 + 5×1 = 35 m',
    difficulty: 3,
    points: 25,
    hints: ['(a) Use s = ½gt² to find t', '(b) Use v = gt or v² = 2gs', '(c) "Last 1 second" is a segment displacement problem'],
  },
  {
    id: 'fme-8',
    type: 'multiple_choice',
    question: 'Two objects A and B are released from rest from the same height on the same planet. The mass of A is twice that of B. Ignoring air resistance, which of the following is correct?',
    options: [
      'A lands first',
      'B lands first',
      'They land at the same time',
      'Cannot be determined'
    ],
    answer: 'They land at the same time',
    explanation: 'The acceleration due to gravity g is independent of the mass of the object!\n\nThis is a key conclusion from Galileo\'s Leaning Tower of Pisa experiment. In a vacuum (ignoring air resistance), all objects fall with the same acceleration and therefore land at the same time.\n\nMass and shape only affect the falling speed when air resistance is considered.',
    difficulty: 1,
    points: 10,
    hints: ['Does the acceleration due to gravity depend on mass?', 'Recall Galileo\'s Leaning Tower of Pisa experiment'],
  },
  {
    id: 'fme-9',
    type: 'multiple_choice',
    question: 'A particle released from rest at O falls freely under gravity and passes A and B, as shown. If the particle takes 4 s to move from A to B, where AB = 100 m, how long does it take to fall from O to A? (Take g = 9.81 m/s²)',
    options: ['0.55 s', '1.10 s', '2.20 s', '4.40 s'],
    answer: '0.55 s',
    explanation: 'Step 1: Find velocity at A using s = ut + ½at² for segment A→B:\n100 = u(4) + ½(9.81)(4)²\n100 = 4u + 78.48\nu = 5.38 m/s\n\nStep 2: Find time from O to A using v = u + at:\n5.38 = 0 + 9.81t\nt = 0.548 ≈ 0.55 s\n\nKey insight: The velocity at A becomes the initial velocity for segment A→B.',
    difficulty: 3,
    points: 20,
    hints: [
      'First find the velocity at point A using the A→B segment data',
      'Use s = ut + ½at² where u is the unknown velocity at A',
      'Then use v = u + at to find time from O to A (starting from rest)'
    ],
  },
  {
    id: 'fme-10',
    type: 'multiple_choice',
    question: 'Which of the following statements concerning the motion of a body is/are correct?\n(1) A body has no acceleration when it is moving with a uniform velocity.\n(2) A body can have zero velocity but also be accelerating.\n(3) A body can have a constant speed but a varying velocity.',
    options: [
      '(1) only',
      '(1) and (2) only',
      '(2) and (3) only',
      '(1), (2) and (3)'
    ],
    answer: '(1), (2) and (3)',
    explanation: 'All three statements are correct:\n\n(1) Uniform velocity means constant velocity (both magnitude and direction). By definition, acceleration a = dv/dt = 0.\n\n(2) Example: A ball thrown upward has v = 0 at the highest point, but a = g ≠ 0. The ball is momentarily at rest but still accelerating downward.\n\n(3) Example: A car moving in a circle at constant speed. Since direction changes continuously, velocity (a vector) is changing, meaning there is acceleration (centripetal).',
    difficulty: 2,
    points: 15,
    hints: [
      'Consider the definitions: speed is scalar, velocity is vector',
      'Think of a ball at its highest point when thrown upward',
      'Consider circular motion at constant speed'
    ],
  },
  {
    id: 'fme-11',
    type: 'multiple_choice',
    question: 'A ball is thrown vertically upward. At the highest point of its motion, which of the following is true?',
    options: [
      'Velocity = 0, Acceleration = 0',
      'Velocity = 0, Acceleration = g (downward)',
      'Velocity = g, Acceleration = 0',
      'Velocity ≠ 0, Acceleration = g (downward)'
    ],
    answer: 'Velocity = 0, Acceleration = g (downward)',
    explanation: 'At the highest point:\n• The ball momentarily stops, so v = 0\n• Gravity still acts on the ball, so a = g = 9.81 m/s² (downward)\n\nThis is a key concept: zero velocity does NOT mean zero acceleration. The ball is about to start falling, which requires acceleration to be present.',
    difficulty: 2,
    points: 15,
    hints: [
      'What is the velocity when the ball momentarily stops?',
      'Does gravity stop acting at the highest point?',
      'Velocity and acceleration are independent quantities'
    ],
  },
  {
    id: 'fme-12',
    type: 'multiple_choice',
    question: 'A car travels around a circular track at a constant speed of 20 m/s. Which statement is correct?',
    options: [
      'The car has zero acceleration',
      'The car has constant velocity',
      'The car has changing velocity',
      'The car has changing speed'
    ],
    answer: 'The car has changing velocity',
    explanation: 'Although the speed (magnitude) is constant at 20 m/s, the direction of motion continuously changes as the car goes around the circle.\n\nSince velocity = speed + direction, and direction is changing, velocity is changing.\n\nChanging velocity means there IS acceleration (centripetal acceleration pointing toward the center of the circle).',
    difficulty: 2,
    points: 15,
    hints: [
      'Velocity is a vector with both magnitude and direction',
      'What happens to the direction as the car goes around?',
      'Changing velocity implies acceleration'
    ],
  },
  {
    id: 'fme-13',
    type: 'calculation',
    question: 'A stone is dropped from rest at point O. It passes point A after falling for some time, then takes 2 s to travel from A to B, where AB = 30 m. Taking g = 10 m/s², find:\n(a) The velocity of the stone at A\n(b) The time taken to fall from O to A\n(c) The distance OA',
    answer: '(a) 5 m/s  (b) 0.5 s  (c) 1.25 m',
    explanation: '(a) For segment A→B, using s = ut + ½at²:\n30 = u(2) + ½(10)(2)²\n30 = 2u + 20\nu = 5 m/s (velocity at A)\n\n(b) From O to A, using v = u + at:\n5 = 0 + 10t\nt = 0.5 s\n\n(c) Distance OA using s = ½gt²:\ns = ½(10)(0.5)² = 1.25 m\n\nVerification: Total time = 0.5 + 2 = 2.5 s\nTotal distance = ½(10)(2.5)² = 31.25 m = OA + AB = 1.25 + 30 ✓',
    difficulty: 3,
    points: 25,
    hints: [
      '(a) Use s = ut + ½at² for segment A→B to find velocity at A',
      '(b) Use v = u + at where u = 0 (dropped from rest)',
      '(c) Use s = ½gt² for segment O→A'
    ],
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
