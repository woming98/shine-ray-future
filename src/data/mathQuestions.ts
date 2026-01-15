/**
 * 数学测试题目数据
 * 包含中一、中二、中三三个年级的题目
 */

export interface MathQuestion {
  id: string;
  type: 'calculation' | 'application' | 'logic';
  question: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
  steps?: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  image?: string;
}

export interface MathQuestionSet {
  grade: string;
  gradeLabel: string;
  timeLimit: number; // 分钟
  questions: MathQuestion[];
}

/**
 * 中一数学测试题目
 */
const grade1MathQuestions: MathQuestion[] = [
  {
    id: 'm1-001',
    type: 'calculation',
    question: '计算：(-3) + 8 - (-5) = ?',
    options: ['10', '6', '0', '-6'],
    answer: '10',
    explanation: '(-3) + 8 - (-5) = -3 + 8 + 5 = 10',
    steps: [
      '将减去负数转为加法：(-3) + 8 + 5',
      '按顺序计算：-3 + 8 = 5',
      '继续：5 + 5 = 10'
    ],
    difficulty: 'easy',
    topic: '有理数运算'
  },
  {
    id: 'm1-002',
    type: 'calculation',
    question: '化简：3x + 2y - x + 5y = ?',
    options: ['2x + 7y', '4x + 7y', '2x + 3y', '4x + 3y'],
    answer: '2x + 7y',
    explanation: '合并同类项：(3x - x) + (2y + 5y) = 2x + 7y',
    steps: [
      '找出同类项：3x和-x是同类项，2y和5y是同类项',
      '合并x项：3x - x = 2x',
      '合并y项：2y + 5y = 7y',
      '结果：2x + 7y'
    ],
    difficulty: 'easy',
    topic: '代数式'
  },
  {
    id: 'm1-003',
    type: 'calculation',
    question: '解方程：2x + 5 = 13',
    options: ['x = 4', 'x = 9', 'x = 3', 'x = 6'],
    answer: 'x = 4',
    explanation: '2x + 5 = 13 → 2x = 8 → x = 4',
    steps: [
      '移项：2x = 13 - 5',
      '计算：2x = 8',
      '两边除以2：x = 4'
    ],
    difficulty: 'easy',
    topic: '一元一次方程'
  },
  {
    id: 'm1-004',
    type: 'application',
    question: '一本书原价80元，现打八折出售，现价是多少元？',
    options: ['64元', '72元', '60元', '68元'],
    answer: '64元',
    explanation: '80 × 0.8 = 64元',
    steps: [
      '八折表示原价的80%，即0.8',
      '现价 = 原价 × 折扣',
      '现价 = 80 × 0.8 = 64元'
    ],
    difficulty: 'easy',
    topic: '百分数应用'
  },
  {
    id: 'm1-005',
    type: 'calculation',
    question: '计算：2³ × 2² = ?',
    options: ['2⁵', '2⁶', '4⁵', '4⁶'],
    answer: '2⁵',
    explanation: '同底数幂相乘，底数不变，指数相加：2³ × 2² = 2^(3+2) = 2⁵',
    steps: [
      '应用同底数幂乘法法则',
      '底数不变：2',
      '指数相加：3 + 2 = 5',
      '结果：2⁵'
    ],
    difficulty: 'medium',
    topic: '幂运算'
  },
  {
    id: 'm1-006',
    type: 'logic',
    question: '如果 a > b，b > c，则下列哪个一定成立？',
    options: ['a > c', 'a = c', 'a < c', '无法确定'],
    answer: 'a > c',
    explanation: '根据不等式的传递性，a > b 且 b > c，则 a > c',
    difficulty: 'medium',
    topic: '不等式'
  },
  {
    id: 'm1-007',
    type: 'application',
    question: '一个长方形的长是8厘米，宽是5厘米，它的周长是多少厘米？',
    options: ['26厘米', '40厘米', '13厘米', '52厘米'],
    answer: '26厘米',
    explanation: '周长 = 2 × (长 + 宽) = 2 × (8 + 5) = 2 × 13 = 26厘米',
    steps: [
      '周长公式：C = 2(l + w)',
      '代入数值：C = 2 × (8 + 5)',
      '计算：C = 2 × 13 = 26厘米'
    ],
    difficulty: 'easy',
    topic: '几何 - 周长'
  },
  {
    id: 'm1-008',
    type: 'calculation',
    question: '计算：|-7| + |3| = ?',
    options: ['10', '4', '-10', '-4'],
    answer: '10',
    explanation: '绝对值都是非负数：|-7| = 7，|3| = 3，所以 7 + 3 = 10',
    steps: [
      '计算各绝对值：|-7| = 7',
      '|3| = 3',
      '相加：7 + 3 = 10'
    ],
    difficulty: 'easy',
    topic: '绝对值'
  },
  {
    id: 'm1-009',
    type: 'application',
    question: '小明用40元买了8支笔，每支笔多少元？',
    options: ['5元', '4元', '6元', '8元'],
    answer: '5元',
    explanation: '40 ÷ 8 = 5元',
    steps: [
      '单价 = 总价 ÷ 数量',
      '单价 = 40 ÷ 8 = 5元'
    ],
    difficulty: 'easy',
    topic: '除法应用'
  },
  {
    id: 'm1-010',
    type: 'logic',
    question: '下列哪个数是质数？',
    options: ['9', '15', '17', '21'],
    answer: '17',
    explanation: '质数只能被1和它本身整除。9=3×3，15=3×5，21=3×7，只有17是质数。',
    difficulty: 'medium',
    topic: '质数与合数'
  }
];

/**
 * 中二数学测试题目
 */
const grade2MathQuestions: MathQuestion[] = [
  {
    id: 'm2-001',
    type: 'calculation',
    question: '因式分解：x² - 9 = ?',
    options: ['(x+3)(x-3)', '(x+9)(x-9)', '(x-3)²', '(x+3)²'],
    answer: '(x+3)(x-3)',
    explanation: '这是平方差公式：a² - b² = (a+b)(a-b)，所以 x² - 9 = x² - 3² = (x+3)(x-3)',
    steps: [
      '识别平方差形式：x² - 9 = x² - 3²',
      '应用公式 a² - b² = (a+b)(a-b)',
      '代入：(x+3)(x-3)'
    ],
    difficulty: 'medium',
    topic: '因式分解'
  },
  {
    id: 'm2-002',
    type: 'calculation',
    question: '解方程组：x + y = 5，x - y = 1',
    options: ['x=3, y=2', 'x=2, y=3', 'x=4, y=1', 'x=1, y=4'],
    answer: 'x=3, y=2',
    explanation: '两式相加：2x = 6，x = 3；代入得 y = 2',
    steps: [
      '方程①：x + y = 5',
      '方程②：x - y = 1',
      '① + ②：2x = 6，解得 x = 3',
      '代入①：3 + y = 5，解得 y = 2'
    ],
    difficulty: 'medium',
    topic: '二元一次方程组'
  },
  {
    id: 'm2-003',
    type: 'calculation',
    question: '计算：√48 的最简形式是？',
    options: ['4√3', '2√12', '6√2', '3√4'],
    answer: '4√3',
    explanation: '√48 = √(16×3) = √16 × √3 = 4√3',
    steps: [
      '分解48：48 = 16 × 3',
      '√48 = √(16×3) = √16 × √3',
      '= 4√3'
    ],
    difficulty: 'medium',
    topic: '根式运算'
  },
  {
    id: 'm2-004',
    type: 'application',
    question: '一个圆的半径是7厘米，它的面积是多少平方厘米？（取π=22/7）',
    options: ['154平方厘米', '44平方厘米', '308平方厘米', '77平方厘米'],
    answer: '154平方厘米',
    explanation: 'S = πr² = (22/7) × 7² = (22/7) × 49 = 154平方厘米',
    steps: [
      '圆面积公式：S = πr²',
      '代入：S = (22/7) × 7²',
      '= (22/7) × 49',
      '= 22 × 7 = 154平方厘米'
    ],
    difficulty: 'medium',
    topic: '圆的面积'
  },
  {
    id: 'm2-005',
    type: 'logic',
    question: '在直角三角形中，两条直角边分别是3和4，斜边长度是多少？',
    options: ['5', '6', '7', '√7'],
    answer: '5',
    explanation: '根据勾股定理：c² = a² + b² = 3² + 4² = 9 + 16 = 25，所以 c = 5',
    steps: [
      '勾股定理：c² = a² + b²',
      'c² = 3² + 4² = 9 + 16 = 25',
      'c = √25 = 5'
    ],
    difficulty: 'medium',
    topic: '勾股定理'
  },
  {
    id: 'm2-006',
    type: 'calculation',
    question: '解不等式：3x - 6 > 9',
    options: ['x > 5', 'x > 3', 'x < 5', 'x < 3'],
    answer: 'x > 5',
    explanation: '3x - 6 > 9 → 3x > 15 → x > 5',
    steps: [
      '移项：3x > 9 + 6',
      '计算：3x > 15',
      '两边除以3：x > 5'
    ],
    difficulty: 'medium',
    topic: '一元一次不等式'
  },
  {
    id: 'm2-007',
    type: 'application',
    question: '某商品先涨价20%，后又降价20%，现价与原价相比：',
    options: ['相等', '现价低', '现价高', '无法确定'],
    answer: '现价低',
    explanation: '设原价为100，涨价后：100×1.2=120，降价后：120×0.8=96，96<100',
    steps: [
      '设原价为100',
      '涨价20%后：100 × 1.2 = 120',
      '降价20%后：120 × 0.8 = 96',
      '96 < 100，所以现价低于原价'
    ],
    difficulty: 'hard',
    topic: '百分数变化'
  },
  {
    id: 'm2-008',
    type: 'calculation',
    question: '化简：(a²b)³ = ?',
    options: ['a⁶b³', 'a⁵b³', 'a⁶b', 'a⁵b'],
    answer: 'a⁶b³',
    explanation: '(a²b)³ = (a²)³ × b³ = a⁶b³',
    steps: [
      '幂的乘方法则：(aⁿ)ᵐ = aⁿᵐ',
      '(a²b)³ = (a²)³ × b³',
      '= a^(2×3) × b³',
      '= a⁶b³'
    ],
    difficulty: 'medium',
    topic: '幂运算'
  },
  {
    id: 'm2-009',
    type: 'logic',
    question: '等腰三角形的一个角是80°，则其他两个角可能是：',
    options: ['50°, 50°', '80°, 20°', '40°, 60°', '都有可能'],
    answer: '都有可能',
    explanation: '如果80°是顶角，则底角各50°；如果80°是底角，则另一底角也是80°，顶角是20°',
    steps: [
      '情况1：80°是顶角',
      '底角 = (180° - 80°) ÷ 2 = 50°',
      '情况2：80°是底角',
      '另一底角也是80°，顶角 = 180° - 80° - 80° = 20°',
      '两种情况都可能'
    ],
    difficulty: 'hard',
    topic: '三角形内角'
  },
  {
    id: 'm2-010',
    type: 'application',
    question: '甲乙两人相距100公里，甲每小时走12公里，乙每小时走8公里，两人相向而行，几小时后相遇？',
    options: ['5小时', '4小时', '6小时', '8小时'],
    answer: '5小时',
    explanation: '相遇时间 = 距离 ÷ (甲速度 + 乙速度) = 100 ÷ (12 + 8) = 100 ÷ 20 = 5小时',
    steps: [
      '相向而行，速度相加',
      '总速度 = 12 + 8 = 20公里/小时',
      '相遇时间 = 100 ÷ 20 = 5小时'
    ],
    difficulty: 'medium',
    topic: '行程问题'
  }
];

/**
 * 中三数学测试题目
 */
const grade3MathQuestions: MathQuestion[] = [
  {
    id: 'm3-001',
    type: 'calculation',
    question: '解一元二次方程：x² - 5x + 6 = 0',
    options: ['x=2 或 x=3', 'x=1 或 x=6', 'x=-2 或 x=-3', 'x=2 或 x=-3'],
    answer: 'x=2 或 x=3',
    explanation: '因式分解：(x-2)(x-3) = 0，所以 x=2 或 x=3',
    steps: [
      '找两个数：和为5，积为6',
      '这两个数是2和3',
      '因式分解：(x-2)(x-3) = 0',
      '解得：x = 2 或 x = 3'
    ],
    difficulty: 'medium',
    topic: '一元二次方程'
  },
  {
    id: 'm3-002',
    type: 'calculation',
    question: '已知二次函数 y = x² - 4x + 3，求顶点坐标',
    options: ['(2, -1)', '(2, 1)', '(-2, -1)', '(-2, 1)'],
    answer: '(2, -1)',
    explanation: '配方：y = (x-2)² - 1，顶点为(2, -1)',
    steps: [
      'y = x² - 4x + 3',
      '配方：y = (x² - 4x + 4) - 4 + 3',
      'y = (x - 2)² - 1',
      '顶点坐标：(2, -1)'
    ],
    difficulty: 'medium',
    topic: '二次函数'
  },
  {
    id: 'm3-003',
    type: 'logic',
    question: '在△ABC中，若 sin A = 3/5，且A为锐角，则 cos A = ?',
    options: ['4/5', '3/4', '5/4', '5/3'],
    answer: '4/5',
    explanation: '由 sin²A + cos²A = 1，得 cos²A = 1 - 9/25 = 16/25，cos A = 4/5（A为锐角）',
    steps: [
      '三角恒等式：sin²A + cos²A = 1',
      'cos²A = 1 - sin²A = 1 - (3/5)²',
      'cos²A = 1 - 9/25 = 16/25',
      '因为A是锐角，cos A > 0',
      'cos A = 4/5'
    ],
    difficulty: 'hard',
    topic: '三角函数'
  },
  {
    id: 'm3-004',
    type: 'calculation',
    question: '求等差数列 2, 5, 8, 11, ... 的第10项',
    options: ['29', '32', '26', '35'],
    answer: '29',
    explanation: 'a_n = a_1 + (n-1)d = 2 + (10-1)×3 = 2 + 27 = 29',
    steps: [
      '公差 d = 5 - 2 = 3',
      '等差数列通项公式：aₙ = a₁ + (n-1)d',
      'a₁₀ = 2 + (10-1)×3',
      '= 2 + 27 = 29'
    ],
    difficulty: 'medium',
    topic: '等差数列'
  },
  {
    id: 'm3-005',
    type: 'application',
    question: '圆心在原点，半径为5的圆的方程是：',
    options: ['x² + y² = 25', 'x² + y² = 5', 'x² - y² = 25', '(x-5)² + y² = 25'],
    answer: 'x² + y² = 25',
    explanation: '圆心在原点的圆方程为 x² + y² = r²，r=5，所以是 x² + y² = 25',
    steps: [
      '圆的标准方程：(x-a)² + (y-b)² = r²',
      '圆心在原点：(a,b) = (0,0)',
      '方程变为：x² + y² = r²',
      '代入 r = 5：x² + y² = 25'
    ],
    difficulty: 'medium',
    topic: '圆的方程'
  },
  {
    id: 'm3-006',
    type: 'calculation',
    question: '化简：(√3 + √2)(√3 - √2) = ?',
    options: ['1', '5', '√6', '6'],
    answer: '1',
    explanation: '这是平方差公式：(a+b)(a-b) = a² - b² = 3 - 2 = 1',
    steps: [
      '平方差公式：(a+b)(a-b) = a² - b²',
      '(√3 + √2)(√3 - √2) = (√3)² - (√2)²',
      '= 3 - 2 = 1'
    ],
    difficulty: 'medium',
    topic: '根式运算'
  },
  {
    id: 'm3-007',
    type: 'logic',
    question: '若直线 y = kx + 1 与直线 y = 2x - 3 平行，则 k = ?',
    options: ['2', '-2', '1', '-3'],
    answer: '2',
    explanation: '两直线平行，斜率相等，所以 k = 2',
    steps: [
      '两直线平行的条件：斜率相等且截距不等',
      '直线 y = kx + 1 的斜率是 k',
      '直线 y = 2x - 3 的斜率是 2',
      '所以 k = 2'
    ],
    difficulty: 'medium',
    topic: '直线方程'
  },
  {
    id: 'm3-008',
    type: 'application',
    question: '一个正方体的棱长是3厘米，它的表面积是多少平方厘米？',
    options: ['54平方厘米', '27平方厘米', '36平方厘米', '81平方厘米'],
    answer: '54平方厘米',
    explanation: '正方体表面积 = 6a² = 6 × 3² = 6 × 9 = 54平方厘米',
    steps: [
      '正方体有6个面，每个面是正方形',
      '每个面的面积 = a² = 3² = 9平方厘米',
      '表面积 = 6 × 9 = 54平方厘米'
    ],
    difficulty: 'easy',
    topic: '立体几何'
  },
  {
    id: 'm3-009',
    type: 'calculation',
    question: '已知 log₂8 = ?',
    options: ['3', '2', '4', '8'],
    answer: '3',
    explanation: '因为 2³ = 8，所以 log₂8 = 3',
    steps: [
      '对数的定义：若 aˣ = N，则 logₐN = x',
      '问：2的几次方等于8？',
      '2³ = 8',
      '所以 log₂8 = 3'
    ],
    difficulty: 'medium',
    topic: '对数'
  },
  {
    id: 'm3-010',
    type: 'logic',
    question: '从5人中选2人当班长和副班长，有多少种选法？',
    options: ['20种', '10种', '25种', '15种'],
    answer: '20种',
    explanation: '这是排列问题：P(5,2) = 5 × 4 = 20种',
    steps: [
      '班长和副班长是有序的，用排列',
      'P(5,2) = 5!/(5-2)! = 5!/3!',
      '= 5 × 4 = 20种'
    ],
    difficulty: 'hard',
    topic: '排列组合'
  }
];

/**
 * 所有年级的数学测试题目集
 */
export const mathQuestionSets: MathQuestionSet[] = [
  {
    grade: '1',
    gradeLabel: '中一',
    timeLimit: 30,
    questions: grade1MathQuestions
  },
  {
    grade: '2',
    gradeLabel: '中二',
    timeLimit: 35,
    questions: grade2MathQuestions
  },
  {
    grade: '3',
    gradeLabel: '中三',
    timeLimit: 40,
    questions: grade3MathQuestions
  }
];
