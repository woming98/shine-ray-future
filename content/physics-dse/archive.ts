export interface PhysicsDseQuestionEntry {
  no: number
  answer: 'A' | 'B' | 'C' | 'D'
  status: 'done' | 'source-ready'
  detailedHref?: string
  focus?: string
}

export interface PhysicsDseSourceFile {
  label: string
  path: string
  role: 'question-paper' | 'answer-key' | 'report'
  extraction: 'text' | 'ocr' | 'mixed'
}

export interface PhysicsDseYearArchive {
  year: number
  summary: string
  sources: PhysicsDseSourceFile[]
  p1a: {
    questionCount: number
    answerKeySource: string
    notes: string[]
    questions: PhysicsDseQuestionEntry[]
  }
}

const answers = (values: string, done: Record<number, Omit<PhysicsDseQuestionEntry, 'no' | 'answer' | 'status'>> = {}) =>
  values
    .trim()
    .split(/\s+/)
    .map((answer, index) => {
      const no = index + 1
      const detail = done[no]
      return {
        no,
        answer: answer as PhysicsDseQuestionEntry['answer'],
        status: detail ? 'done' : 'source-ready',
        ...detail,
      } satisfies PhysicsDseQuestionEntry
    })

const detailed2024: Record<number, Omit<PhysicsDseQuestionEntry, 'no' | 'answer' | 'status'>> = {
  1: {
    detailedHref: '/physics/dse-2024/p1/q01/index.html',
    focus: '加热曲线：用斜率读出 specific heat capacity',
  },
  2: {
    detailedHref: '/physics/dse-2024/p1/q02/index.html',
    focus: '冰水混合：先判断相变是否完成',
  },
  3: {
    detailedHref: '/physics/dse-2024/p1/q03/index.html',
    focus: 'ideal gas：用 pV = NkT 估算 molecule count',
  },
  4: {
    detailedHref: '/physics/dse-2024/p1/q04/index.html',
    focus: 'velocity-time graph：面积代表 displacement',
  },
  5: {
    detailedHref: '/physics/dse-2024/p1/q05/index.html',
    focus: 'rough incline：contact force 是 normal + friction',
  },
}

const withQuestionFocus = (questions: PhysicsDseQuestionEntry[], focus: Record<number, string>) =>
  questions.map((question) => ({
    ...question,
    focus: question.focus ?? focus[question.no],
  }))

const focus2025: Record<number, string> = {
  1: 'specific heat capacity：等能量输入时比较 mc',
  2: 'specific latent heat of fusion：用对照组修正环境融冰',
  3: 'kinetic theory：同温同压下比较 CO2 与 O2 分子运动',
  4: 'free fall：等时间间隔水滴位置反推高度',
  5: 'work-energy theorem：斜拉力做功与 friction 扣减',
  6: 'elevator dynamics：从 v-t graph 判断 tension 变化',
  7: 'static equilibrium：rod、hinge reaction 与三力平衡',
  8: 'conservation of mechanical energy：竖直上抛到参考点以下',
  9: 'projectile motion：水平抛到斜面上的飞行时间',
  10: 'moment of couple：螺丝刀手柄半径改变所需力偶',
  11: 'circular motion：humpback bridge 顶点向心力',
  12: 'gravitational field：inverse-square law 比较重量',
  13: 'plane mirror：两镜成像位置判断',
  14: 'refraction：由 total internal reflection 推介质光速顺序',
  15: 'sound wave：displacement-distance graph 中压缩与稀疏',
  16: 'interference：路程差与不同振幅叠加',
  17: 'diffraction grating：二级谱线角分离估算',
  18: 'double slit vs diffraction grating：条纹间距、锐度与范围',
  19: 'convex lens：用焦点到物像距离求 focal length',
  20: 'ultrasound refraction：由水入空气的速度、折射与 TIR',
  21: 'wave phenomena：不同介质波速解释 rainbow 与 mirage',
  22: 'electrostatics：conducting spheres 吸引现象的充电状态',
  23: 'electric field：负电粒子受力方向与速度变化',
  24: 'electric field of point charges：square geometry 中场强合成',
  25: 'simple circuit fault：干电池、灯泡与开路排除法',
  26: 'voltmeter loading：非理想电压表改变分压读数',
  27: 'domestic electricity：ring circuit 错接与开关控制',
  28: 'motor effect：线圈、slip rings 与转动方向',
  29: 'electromagnetic induction：search coil 只响应 changing flux',
  30: 'a.c. power：电热器功率由 rms voltage 决定',
  31: 'radioactivity：activity 是每秒衰变数',
  32: 'alpha and beta decay：mass number 与 atomic number 轨迹',
  33: 'mass-energy relation：fusion energy release 与 mass defect',
}

export const PHYSICS_DSE_ARCHIVE: PhysicsDseYearArchive[] = [
  {
    year: 2021,
    summary: '合并 PDF，Paper 1A 题面与答案表均经 OCR 定位；答案 key 已入库，题面精讲待逐题校验。',
    sources: [
      {
        label: '2021 DSE PHY.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2021/2021 DSE PHY.pdf',
        role: 'report',
        extraction: 'ocr',
      },
    ],
    p1a: {
      questionCount: 33,
      answerKeySource: '2021 合并 PDF 第 57 页 OCR',
      notes: [
        'Paper 1A 题面在合并 PDF 前半段；答案表在后半段 marking scheme。',
        '扫描 OCR 会保留为来源线索；正式讲义页必须逐题校验后再发布。',
      ],
      questions: answers('A A C B D D C A A C B C B D B B D C A C D A B A C C B A C D B D D'),
    },
  },
  {
    year: 2022,
    summary: '分卷 PDF，Paper 1A 与答案 PDF 已定位；答案 key 已经 OCR 入库。',
    sources: [
      {
        label: '2022 PHY P1a.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2022/2022 PHY P1a.pdf',
        role: 'question-paper',
        extraction: 'ocr',
      },
      {
        label: '2022 PHY P1b.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2022/2022 PHY P1b.pdf',
        role: 'question-paper',
        extraction: 'ocr',
      },
      {
        label: '2022 PHY P2.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2022/2022 PHY P2.pdf',
        role: 'question-paper',
        extraction: 'text',
      },
      {
        label: '2022 PHY Ans.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2022/2022 PHY Ans.pdf',
        role: 'answer-key',
        extraction: 'ocr',
      },
    ],
    p1a: {
      questionCount: 33,
      answerKeySource: '2022 PHY Ans.pdf 第 1 页 OCR',
      notes: [
        'P1A、P1B、P2 为分卷资料；当前先完成 Paper 1A 索引和答案 key。',
        'Q21-Q22 的百分比 OCR 不稳定，但选项 key 已可读；百分比暂不展示。',
      ],
      questions: answers('A B D C A B B B D D A D C A B C D B C A C D C D D B A C B A C A C'),
    },
  },
  {
    year: 2023,
    summary: '分卷 PDF，Paper 1A 与答案 PDF 已定位；答案 key 已经 OCR 入库。',
    sources: [
      {
        label: 'p1a.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2023/p1a.pdf',
        role: 'question-paper',
        extraction: 'ocr',
      },
      {
        label: 'p1b.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2023/p1b.pdf',
        role: 'question-paper',
        extraction: 'ocr',
      },
      {
        label: 'p2.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2023/p2.pdf',
        role: 'question-paper',
        extraction: 'ocr',
      },
      {
        label: 'ans.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2023/ans.pdf',
        role: 'answer-key',
        extraction: 'ocr',
      },
    ],
    p1a: {
      questionCount: 33,
      answerKeySource: '2023 ans.pdf 第 2 页 OCR',
      notes: [
        '答案表可读；个别百分比 OCR 不稳定，当前只把答案 key 作为正式数据。',
        '题面精讲需要逐题重画图和中文讲义化，不直接搬运原题截图。',
      ],
      questions: answers('B D C A B D B C C A B C D C D B A B A A A D D C A D B C A B C D D'),
    },
  },
  {
    year: 2024,
    summary: 'Paper 1A 前 5 题已按讲义化标准完成；其余题目答案 key 已入库，待继续精讲。',
    sources: [
      {
        label: 'Phy DSE 2024 P1.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2024/Phy DSE 2024 P1.pdf',
        role: 'question-paper',
        extraction: 'ocr',
      },
      {
        label: 'Phy DSe 2024 P2.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2024/Phy DSe 2024 P2.pdf',
        role: 'question-paper',
        extraction: 'text',
      },
      {
        label: 'Phy DSE 2024 Marking scheme.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2024/Phy DSE 2024 Marking scheme.pdf',
        role: 'answer-key',
        extraction: 'text',
      },
    ],
    p1a: {
      questionCount: 33,
      answerKeySource: '2024 marking scheme 第 1 页文本抽取',
      notes: [
        'Q1-Q5 已完成知识体系讲义、重画图、题目注记、公式符号表和移动端校验。',
        'Q6-Q33 进入待精讲队列，沿用同一页面标准。',
      ],
      questions: answers('C B B D B C C D A A C A D A D D C D A D B B C C A B C C B A A D B', detailed2024),
    },
  },
  {
    year: 2025,
    summary: '合并 report PDF 可直接抽取 Paper 1A 题面与答案表；答案 key 已入库，适合作为下一批精讲优先年份。',
    sources: [
      {
        label: '2025 DSE PHY.pdf',
        path: 'DSE 物理/物理2021-2025 英文版（完整版）/2025/2025 DSE PHY.pdf',
        role: 'report',
        extraction: 'text',
      },
    ],
    p1a: {
      questionCount: 33,
      answerKeySource: '2025 report PDF 第 55 页文本抽取',
      notes: [
        '2025 Paper 1A 题面文本可抽取，后续可优先批量转为讲义页。',
        '公开页面仍使用题意记录和原创讲解，不整段复制英文原题。',
      ],
      questions: withQuestionFocus(
        answers('C D B C C C C A D A B A B D B B A D C D C D D A C B A A B A B B D'),
        focus2025
      ),
    },
  },
]

export const getPhysicsDseYearArchive = (year: number) =>
  PHYSICS_DSE_ARCHIVE.find((item) => item.year === year)
