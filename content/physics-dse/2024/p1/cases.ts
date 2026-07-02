export interface PhysicsCaseStudy {
  slug: string
  questionNo: number
  title: string
  subtitle: string
  paper: string
  topic: string
  tags: string[]
  answer: string
  successRate: string
  timeBudget: string
  difficulty: string
  knowledgeSystem: {
    title: string
    bigIdea: string
    learningMap: string[]
    whyItMatters: string
    conceptLadder: Array<{
      title: string
      explanation: string
      checkpoints: string[]
    }>
    formulaToolkit: Array<{
      name: string
      expression: string
      useWhen: string
      watchOut: string
    }>
    microExamples: Array<{
      title: string
      prompt: string
      steps: string[]
    }>
    coreExplanations: Array<{
      title: string
      points: string[]
    }>
    misconceptions: Array<{
      wrongIdea: string
      correction: string
    }>
    dsePatterns: string[]
    masteryChecklist: string[]
    bridgeToQuestion: string
    narrative?: {
      heading?: string
      reasoningHeading?: string
      sidebar?: {
        formula?: string
        symbols?: string
        note?: string
        readOrder?: string
      }
      lead: string[]
      sections: Array<{
        title: string
        paragraphs: string[]
        questionBrief?: {
          title: string
          stem?: string[]
          options?: Array<{
            label: string
            text: string
          }>
          points?: string[]
        }
        equation?: string
        equations?: Array<{
          expression: string
          symbols: Array<{
            symbol: string
            meaning: string
            unit: string
          }>
          unitNote?: string
        }>
        note?: string
      }>
      closing: string[]
    }
  }
  reconstructedPrompt: string
  researchQuestion: string
  quickTake: string
  diagram?: {
    title: string
    svg: string
  }
  model: string[]
  prerequisiteRecovery: Array<{
    title: string
    points: string[]
  }>
  thinkingPath: string[]
  solution: Array<{
    title: string
    points: string[]
  }>
  optionAnalysis: Array<{
    option: string
    verdict: 'correct' | 'wrong'
    text: string
  }>
  markingPoints: string[]
  traps: string[]
  highScoreReflex: string
  variationDrill: {
    prompt: string
    solution: string[]
  }
}

const heatingCurveSvg = `
<svg viewBox="0 0 760 360" role="img" aria-label="两种物质的温度-能量加热曲线重画图">
  <defs>
    <linearGradient id="heatP" x1="0" x2="1">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="heatQ" x1="0" x2="1">
      <stop offset="0%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#facc15"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="760" height="360" rx="18" fill="#f8fafc"/>
  <line x1="110" y1="295" x2="665" y2="295" stroke="#0f172a" stroke-width="3"/>
  <line x1="110" y1="295" x2="110" y2="55" stroke="#0f172a" stroke-width="3"/>
  <path d="M665 295 l-14 -9 m14 9 l-14 9" stroke="#0f172a" stroke-width="3" fill="none"/>
  <path d="M110 55 l-9 14 m9 -14 l9 14" stroke="#0f172a" stroke-width="3" fill="none"/>
  <text x="574" y="330" font-size="22" font-weight="700" fill="#0f172a">输入能量 Q</text>
  <text x="30" y="52" font-size="22" font-weight="700" fill="#0f172a">温度 T</text>
  <line x1="98" y1="250" x2="122" y2="250" stroke="#64748b" stroke-width="2"/>
  <line x1="98" y1="175" x2="122" y2="175" stroke="#64748b" stroke-width="2"/>
  <text x="58" y="257" font-size="20" fill="#334155">T1</text>
  <text x="58" y="182" font-size="20" fill="#334155">T2</text>
  <path d="M112 250 L248 194 L445 194 L505 72" fill="none" stroke="url(#heatP)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M112 250 L185 145 L282 145 L520 72" fill="none" stroke="url(#heatQ)" stroke-width="7" stroke-dasharray="16 11" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="112" cy="250" r="5" fill="#0f172a"/>
  <text x="258" y="222" font-size="22" font-weight="800" fill="#2563eb">P 熔化平台</text>
  <text x="202" y="132" font-size="22" font-weight="800" fill="#f97316">Q 熔化平台</text>
  <text x="150" y="230" font-size="18" fill="#475569">固态升温较缓</text>
  <text x="152" y="101" font-size="18" fill="#475569">固态升温较陡</text>
  <path d="M168 224 C165 205 159 193 145 180" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <path d="M165 104 C172 126 179 137 187 146" stroke="#94a3b8" stroke-width="2" fill="none"/>
</svg>`

const energyBalanceSvg = `
<svg viewBox="0 0 760 330" role="img" aria-label="暖水和零度冰的能量核算重画图">
  <rect x="0" y="0" width="760" height="330" rx="18" fill="#f8fafc"/>
  <text x="48" y="52" font-size="24" font-weight="800" fill="#0f172a">先做能量核算，不猜最终温度</text>
  <rect x="55" y="90" width="290" height="74" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="82" y="121" font-size="18" font-weight="700" fill="#1e3a8a">暖水降到 0°C</text>
  <text x="82" y="148" font-size="18" fill="#1e40af">可放出热量 = 1.05 × 10^5 J</text>
  <rect x="415" y="90" width="290" height="74" rx="14" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="442" y="121" font-size="18" font-weight="700" fill="#7f1d1d">冰全部熔化需要热量</text>
  <text x="442" y="148" font-size="18" fill="#991b1b">所需热量 = 6.68 × 10^5 J</text>
  <path d="M350 127 H407" stroke="#0f172a" stroke-width="3"/>
  <path d="M407 127 l-12 -8 m12 8 l-12 8" stroke="#0f172a" stroke-width="3" fill="none"/>
  <rect x="136" y="218" width="488" height="58" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
  <text x="165" y="253" font-size="20" font-weight="800" fill="#065f46">热量不够：仍有冰剩下，混合物保持 0°C</text>
</svg>`

const idealGasSvg = `
<svg viewBox="0 0 760 360" role="img" aria-label="小气室中的 ideal gas 分子数估算重画图">
  <rect x="0" y="0" width="760" height="360" rx="18" fill="#f8fafc"/>
  <rect x="70" y="72" width="250" height="205" rx="18" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
  <g fill="#0369a1">
    <circle cx="112" cy="120" r="4"/><circle cx="154" cy="206" r="3"/><circle cx="204" cy="148" r="4"/>
    <circle cx="257" cy="233" r="3"/><circle cx="292" cy="112" r="4"/><circle cx="128" cy="252" r="3"/>
    <circle cx="225" cy="257" r="4"/><circle cx="304" cy="183" r="3"/><circle cx="176" cy="101" r="3"/>
  </g>
  <text x="112" y="310" font-size="18" font-weight="700" fill="#075985">同一团气体</text>
  <path d="M338 174 H402" stroke="#0f172a" stroke-width="3"/>
  <path d="M402 174 l-12 -8 m12 8 l-12 8" stroke="#0f172a" stroke-width="3" fill="none"/>
  <text x="405" y="76" font-size="25" font-weight="800" fill="#0f172a">宏观状态翻译成微观计数</text>
  <rect x="405" y="105" width="108" height="58" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="443" y="140" font-size="24" font-weight="800" fill="#1e3a8a">p</text>
  <rect x="531" y="105" width="108" height="58" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="570" y="140" font-size="24" font-weight="800" fill="#166534">V</text>
  <rect x="468" y="181" width="108" height="58" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="508" y="216" font-size="24" font-weight="800" fill="#92400e">T</text>
  <rect x="405" y="270" width="234" height="48" rx="14" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="427" y="301" font-size="20" font-weight="800" fill="#991b1b">N = pV / kT</text>
</svg>`

const vtAreaSvg = `
<svg viewBox="0 0 760 340" role="img" aria-label="速度-时间 graph 阴影面积重画图">
  <rect x="0" y="0" width="760" height="340" rx="18" fill="#f8fafc"/>
  <line x1="110" y1="270" x2="655" y2="270" stroke="#0f172a" stroke-width="3"/>
  <line x1="110" y1="270" x2="110" y2="58" stroke="#0f172a" stroke-width="3"/>
  <path d="M655 270 l-14 -9 m14 9 l-14 9" stroke="#0f172a" stroke-width="3" fill="none"/>
  <path d="M110 58 l-9 14 m9 -14 l9 14" stroke="#0f172a" stroke-width="3" fill="none"/>
  <text x="635" y="306" font-size="24" font-weight="800" fill="#0f172a">t</text>
  <text x="72" y="55" font-size="24" font-weight="800" fill="#0f172a">v</text>
  <path d="M205 270 C270 252 300 200 334 112 C362 38 401 104 423 181 C439 238 472 260 529 270 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
  <path d="M205 270 C270 252 300 200 334 112 C362 38 401 104 423 181 C439 238 472 260 529 270" fill="none" stroke="#0f172a" stroke-width="3"/>
  <path d="M226 260 L246 242 M256 264 L288 230 M292 268 L338 206 M334 268 L392 185 M380 268 L429 221 M426 267 L462 245" stroke="#0369a1" stroke-width="2"/>
  <rect x="464" y="82" width="190" height="82" rx="14" fill="#ecfeff" stroke="#06b6d4" stroke-width="2"/>
  <text x="485" y="115" font-size="18" font-weight="800" fill="#155e75">面积 = ∫ v dt</text>
  <text x="485" y="145" font-size="18" fill="#155e75">单位：(m s⁻¹)(s) = m</text>
</svg>`

const inclineContactSvg = `
<svg viewBox="0 0 760 380" role="img" aria-label="粗糙斜面上 contact force 合力重画图">
  <rect x="0" y="0" width="760" height="380" rx="18" fill="#f8fafc"/>
  <polygon points="80,300 590,300 590,150" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
  <line x1="128" y1="286" x2="568" y2="157" stroke="#475569" stroke-width="5"/>
  <g transform="translate(310 209) rotate(-16)">
    <rect x="-45" y="-34" width="90" height="68" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>
    <text x="-10" y="8" font-size="26" font-weight="800" fill="#1e3a8a">m</text>
  </g>
  <path d="M302 226 L302 310" stroke="#ef4444" stroke-width="4"/>
  <path d="M302 310 l-10 -15 m10 15 l10 -15" stroke="#ef4444" stroke-width="4" fill="none"/>
  <text x="316" y="306" font-size="20" font-weight="800" fill="#b91c1c">mg</text>
  <path d="M322 218 L360 104" stroke="#2563eb" stroke-width="4"/>
  <path d="M360 104 l-14 10 m14 -10 l4 17" stroke="#2563eb" stroke-width="4" fill="none"/>
  <text x="372" y="105" font-size="20" font-weight="800" fill="#1d4ed8">法向力</text>
  <path d="M322 218 L227 247" stroke="#f97316" stroke-width="4"/>
  <path d="M227 247 l16 -1 m-16 1 l11 -12" stroke="#f97316" stroke-width="4" fill="none"/>
  <text x="152" y="249" font-size="20" font-weight="800" fill="#c2410c">摩擦力</text>
  <path d="M422 142 C472 172 505 222 517 278" fill="none" stroke="#10b981" stroke-width="4"/>
  <text x="428" y="130" font-size="20" font-weight="800" fill="#047857">接触力合力</text>
  <text x="434" y="159" font-size="17" fill="#047857">法向力 + 摩擦力</text>
  <rect x="454" y="262" width="196" height="54" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
  <text x="477" y="296" font-size="20" font-weight="800" fill="#065f46">大小 = mg</text>
</svg>`

export const PHYSICS_DSE_2024_P1_CASES: PhysicsCaseStudy[] = [
  {
    slug: 'q01',
    questionNo: 1,
    title: '加热曲线：用斜率读出比热容（specific heat capacity）',
    subtitle: '这题主要考图像解读，不是复杂计算。',
    paper: '2024 Paper 1 Section A',
    topic: '温度、热与内能（Temperature, Heat and Internal Energy）',
    tags: ['加热曲线 heating curve', '比热容 specific heat capacity', '潜热 latent heat', '熔点 melting point'],
    answer: 'C',
    successRate: '72%',
    timeBudget: '70-90 秒',
    difficulty: '基础概念 + 图像解读',
    knowledgeSystem: {
      title: '知识专题：加热曲线：一张能量账本',
      bigIdea:
        '加热曲线不是普通的“温度随时间变化图”，而是一张能量账本。图里从左下往右上爬升的部分，记录能量怎样变成温度升高；横着的平台，则记录能量怎样被相变吸收而暂时不改变温度。',
      learningMap: [
        '第一层：没有相变时，用 Q = mcΔT 连接输入能量、质量、比热容和升温。',
        '第二层：发生熔化时，温度不变，能量进入 latent heat。',
        '第三层：在 T-Q 图上，斜率、平台高度、平台宽度分别对应不同物理意义。',
        '第四层：DSE 常用等质量条件，让你直接用图像比较 c 和 L。',
      ],
      whyItMatters:
        '这类题表面是在问图像，实际上是在问学生能不能分辨三种不同的物理量：升温快慢、熔点高低和相变所需能量。若把三者混在一起，选项看起来都会有道理；若把图像逐段读清，答案反而很安静地浮出来。',
      conceptLadder: [
        {
          title: '先理解能量去了哪里',
          explanation:
            '输入能量只有两种主要去向：如果物质还在同一状态里，能量让粒子平均动能增加，宏观表现为温度上升；如果物质正在相变，能量主要用来改变粒子间距和排列，宏观表现为温度暂时不变。',
          checkpoints: [
            '向上倾斜的升温段：温度在变，状态不变。',
            '水平平台段：温度不变，状态在变。',
            '同一张图里不能用同一种读法解释所有段落。',
          ],
        },
        {
          title: '再把图像语言变成公式语言',
          explanation:
            '在没有相变的升温段，也就是图里倾斜向上的那段，公式是 Q = mcΔT。图像横轴是 Q，纵轴是 T，所以斜率就是 ΔT/Q。把公式变形后发现 ΔT/Q = 1/(mc)，这就是为什么斜率和 c 反向。',
          checkpoints: [
            '如果质量相同，斜率小的一方 c 大。',
            '如果质量不同，不能只看斜率直接比 c。',
            '本题给等质量，就是为了让你能直接比较比热容。',
          ],
        },
        {
          title: '最后把平台拆成两个信息',
          explanation:
            '平台不是一个信息，而是两个信息：平台在哪个温度出现，说明熔点是多少；平台有多宽，说明完成熔化需要多少能量。等质量时，平台越宽，latent heat 越大。',
          checkpoints: [
            '平台高度看 melting point。',
            '平台宽度看 latent heat。',
            '升温段斜率看 specific heat capacity。',
          ],
        },
      ],
      formulaToolkit: [
        {
          name: '同状态升温公式',
          expression: 'Q = mcΔT',
          useWhen: '物质没有发生相变，只是在同一状态内升温或降温。',
          watchOut: '这条公式不能直接用于水平平台，因为平台处 ΔT = 0，但仍然在吸热。',
        },
        {
          name: 'T-Q 图斜率',
          expression: 'slope = ΔT / Q = 1/(mc)',
          useWhen: '题目给温度对输入能量的图，并要求比较比热容。',
          watchOut: '斜率越大，c 越小；这是最常见的反向陷阱。',
        },
        {
          name: '熔化潜热',
          expression: 'Q = mL',
          useWhen: '物质在熔点处熔化，温度不变但持续吸热。',
          watchOut: '只有质量相同，平台宽度才能直接比较 L。',
        },
      ],
      microExamples: [
        {
          title: '微型例题 1：用升温判断 c',
          prompt: '两个等质量金属都吸收 100 J。A 升高 5°C，B 升高 10°C。谁的 specific heat capacity 较大？',
          steps: [
            '同样 Q、同样 m，公式 c = Q/(mΔT)。',
            'ΔT 越小，c 越大。',
            'A 升温较少，所以 A 的 c 较大。',
          ],
        },
        {
          title: '微型例题 2：用平台读熔点和潜热',
          prompt: '两条等质量 heating curve 中，P 的平台在 60°C 且较长，Q 的平台在 80°C 且较短。能读出什么？',
          steps: [
            '平台温度：Q 的 melting point 较高。',
            '平台长度：P 的 latent heat 较大。',
            '这两个结论互不冲突，因为它们来自平台的不同特征。',
          ],
        },
      ],
      coreExplanations: [
        {
          title: '斜率不是 c，而是 1/(mc)',
          points: [
            '由 Q = mcΔT 可得 ΔT / Q = 1/(mc)。',
            'T-Q 图的斜率是 ΔT / Q，所以斜率越大，c 反而越小。',
            '如果两物体质量相同，比较斜率就等价于反向比较 specific heat capacity。',
          ],
        },
        {
          title: '平台高度和平台宽度不能混用',
          points: [
            '平台的温度位置决定 melting point。',
            '平台的水平长度代表完成相变需要的能量；质量相同才可直接比较 latent heat。',
            '很多错选项会把“平台更高”“平台更长”“斜率更陡”混成同一件事。',
          ],
        },
      ],
      misconceptions: [
        {
          wrongIdea: '曲线越陡，说明物质越“难加热”，所以比热容更大。',
          correction: '在 T-Q 图里，越陡代表同样能量造成的温度升高越大，所以比热容更小。',
        },
        {
          wrongIdea: '平台越高，latent heat 越大。',
          correction: '平台越高只代表熔点更高；latent heat 要看平台横向宽度。',
        },
        {
          wrongIdea: '水平平台段温度不变，所以没有吸收能量。',
          correction: '水平平台段正在吸收潜热，能量用于相变，不用于升温。',
        },
      ],
      dsePatterns: [
        '给两条 heating curve，问哪个物质 c 更大。',
        '给相同质量，问哪个物质 melting point 更高或 latent heat 更大。',
        '把坐标轴从 time 换成 energy，考你是否还用旧直觉读图。',
      ],
      masteryChecklist: [
        '我能指出图里的向上倾斜升温段和水平平台段，并说出它们分别代表什么物理过程。',
        '我能从 Q = mcΔT 推出 T-Q 图斜率 = 1/(mc)。',
        '我能分清平台高度和平台宽度的物理意义。',
        '我能在 30 秒内判断等质量两物体谁的 c、melting point、latent heat 更大。',
      ],
      bridgeToQuestion:
        '掌握这套读图规则后，2024 Q1 就不是猜选项，而是把斜率、平台高度和平台宽度逐项翻译成物理量。',
      narrative: {
        heading: '从能量流向读懂加热曲线',
        sidebar: {
          formula: 'slope = ΔT / Q = 1 / (mc)',
          symbols:
            'slope：T-Q 图斜率（°C J⁻¹）；ΔT：温度变化（°C 或 K）；Q：输入能量（J）；m：质量（kg）；c：比热容（J kg⁻¹ °C⁻¹）。',
          note: '等质量时，斜率越小，specific heat capacity 越大。',
          readOrder:
            '斜线段读 specific heat capacity；平台高度读 melting point；平台宽度读 latent heat。',
        },
        lead: [
          '读 heating curve 时，最容易犯的错不是公式忘了，而是先入为主地把它看成一张“温度随时间变化”的图。题目给的横轴并不是时间，而是输入能量。这个差别一改，整张图的读法就变了：斜线段不再只是“升得快不快”，它在记录每输入一份能量，温度到底升了多少。',
          '所以这页先不急着选答案。我们把图当作一份能量记录来读：能量进来以后，有时留在同一种状态里，让温度上升；有时拿去改变物质状态，温度暂时停在平台上。等这两件事分清楚，2024 Q1 的四个选项就会各自落到一个明确的物理量上。',
        ],
        sections: [
          {
            title: '一、先看斜线段：能量还没有拿去改变状态',
            paragraphs: [
              '从左下角出发的第一段斜线，描述的是固体被加热但尚未熔化的阶段。物质仍在同一种状态里，粒子只是振动得更剧烈；在宏观上，我们看到的就是温度上升。',
              '这一步对应 Q = mcΔT。它不是一个只为计算而存在的公式，而是在说一件很朴素的事：同样质量的一块物质，要升高同样多的温度，c 越大，所需能量越多。也可以反过来说，给两块等质量物质输入同样多能量，c 较大的那一块温度升得较少。',
              '把这句话放回 T-Q 图里，斜率就有了意义。纵轴是 T，横轴是 Q，所以斜率是 ΔT/Q。它问的不是“过了多久升多少度”，而是“每给 1 J 能量升多少度”。因此在等质量比较中，斜率越小，反而说明 c 越大。',
            ],
            equations: [
              {
                expression: 'Q = mcΔT',
                symbols: [
                  {
                    symbol: 'Q',
                    meaning: '输入或放出的热量，也就是能量转移的多少',
                    unit: 'J（joule，焦耳）',
                  },
                  {
                    symbol: 'm',
                    meaning: '物质的质量',
                    unit: 'kg（kilogram，千克）',
                  },
                  {
                    symbol: 'c',
                    meaning: '比热容（specific heat capacity），表示 1 kg 物质升高 1°C 需要多少能量',
                    unit: 'J kg⁻¹ °C⁻¹；也可写作 J kg⁻¹ K⁻¹',
                  },
                  {
                    symbol: 'ΔT',
                    meaning: '温度变化量，等于最终温度减初始温度',
                    unit: '°C 或 K；温度差用 °C 和 K 的数值相同',
                  },
                ],
                unitNote: '代入计算时，m 通常用 kg，Q 用 J，c 用 J kg⁻¹ °C⁻¹，ΔT 用 °C。',
              },
              {
                expression: 'slope = ΔT / Q = 1 / (mc)',
                symbols: [
                  {
                    symbol: 'slope',
                    meaning: 'T-Q 图上升温段的斜率，表示每输入 1 J 能量，温度升高多少',
                    unit: '°C J⁻¹ 或 K J⁻¹',
                  },
                  {
                    symbol: 'T',
                    meaning: '温度，图像的纵轴量',
                    unit: '°C 或 K',
                  },
                  {
                    symbol: 'Q',
                    meaning: '输入能量，图像的横轴量',
                    unit: 'J',
                  },
                  {
                    symbol: 'm',
                    meaning: '物质质量',
                    unit: 'kg',
                  },
                  {
                    symbol: 'c',
                    meaning: '比热容',
                    unit: 'J kg⁻¹ °C⁻¹ 或 J kg⁻¹ K⁻¹',
                  },
                ],
                unitNote: '这个斜率不是 c 本身，而是 1/(mc)。等质量时，斜率越小，c 越大。',
              },
            ],
            note: '本题要比较 solid P 和 solid Q 的 specific heat capacity，眼睛必须先回到熔化前的斜线段。',
          },
          {
            title: '二、再看平台：温度停住，是因为能量在改结构',
            paragraphs: [
              '接着看水平平台。平台不是“没有加热”，也不是实验停住了。横轴仍在往右走，说明能量仍然输入；只是这部分能量没有表现为温度上升。',
              '原因在于相变。固体熔化时，粒子要离开原来较固定的排列，物质的内部结构正在改变。能量被用在这一步上，所以在熔化完成之前，温度会维持在同一个数值。',
              '平台给出两类信息。它位于哪个温度，就读出 melting point；它在横轴方向有多长，就读出完成熔化所需的能量。若两种物质质量相同，平台越长，specific latent heat of fusion 越大。',
            ],
            equations: [
              {
                expression: 'Q = mL',
                symbols: [
                  {
                    symbol: 'Q',
                    meaning: '相变过程中吸收或放出的热量',
                    unit: 'J（joule，焦耳）',
                  },
                  {
                    symbol: 'm',
                    meaning: '发生相变的物质质量',
                    unit: 'kg（kilogram，千克）',
                  },
                  {
                    symbol: 'L',
                    meaning: '比潜热（specific latent heat），表示 1 kg 物质完成相变需要吸收或放出的能量',
                    unit: 'J kg⁻¹',
                  },
                ],
                unitNote: '若讨论熔化，L 是 specific latent heat of fusion；若讨论汽化，L 是 specific latent heat of vaporization。',
              },
            ],
            note: '平台高度和平台宽度要分开读：高度对应 melting point，宽度对应 latent heat。',
          },
          {
            title: '三、整张图只做三次读数',
            paragraphs: [
              '现在把图合起来读。第一次读斜线段，比较的是 specific heat capacity。第二次读平台的温度位置，比较的是 melting point。第三次读平台在横轴上的长度，比较的是 latent heat。',
              '这三次读数互不替代。平台高，不代表平台长；斜线平缓，也不自动推出熔点高。DSE 的选择题常把这几个量放在相邻选项里，真正考的是你有没有把“看哪一段”和“比较哪一个量”对应起来。',
              '因此做题时不要用“P 的线比较高”或“Q 的线比较陡”这种整体印象下判断。先圈出选项问的物理量，再回到对应的线段读图。',
            ],
          },
          {
            title: '四、把 2024 Q1 放回这张图',
            questionBrief: {
              title: '2024 DSE Q1 原题英文',
              stem: [
                'Substance P and Q are of the same mass and both are solids at temperature T₁.',
                'The graph below shows the variation of temperature of the substances with energy transferred.',
                'Which statement below is correct ?',
              ],
              options: [
                {
                  label: 'A',
                  text: 'P has a higher melting point than Q.',
                },
                {
                  label: 'B',
                  text: 'The specific latent heat of fusion of P is smaller than that of Q.',
                },
                {
                  label: 'C',
                  text: 'The specific heat capacity of solid P is greater than that of solid Q.',
                },
                {
                  label: 'D',
                  text: 'At temperature T₂, P is gas while Q is solid.',
                },
              ],
              points: [
                '上方教学图是对原题图像的重画，用来配合这段英文原题阅读。',
              ],
            },
            paragraphs: [
              '现在回到图。选项 C 问的是 solid P 和 solid Q 的 specific heat capacity，所以我们只看两条曲线在熔化之前的第一段斜线。P 的那段更平缓；Q 的那段更陡。',
              '平缓是什么意思？不是说 P 受热更慢，因为横轴不是时间。它的意思是：在相同的能量输入下，P 的温度增加较少。题目又说明 P 和 Q 质量相同，因此差异只能落在 c 上。P 的 c 较大。',
              '剩下几个选项不能用同一段线去判断。melting point 要看平台高度，latent heat 要看平台宽度，状态判断要看图中实际显示到哪个相变阶段。把读图位置换错，就会把一个看似合理的句子误判成答案。',
            ],
          },
        ],
        closing: [
          '这道题没有复杂计算，难点在读图纪律：斜线段只拿来读比热容，平台高度只拿来读熔点，平台宽度只拿来读潜热。按这个顺序回到 2024 Q1，答案不是猜出来的，而是从 solid heating section 的斜率一步一步推出的。',
        ],
      },
    },
    reconstructedPrompt:
      'Substance P and Q are of the same mass and both are solids at temperature T₁. The graph below shows the variation of temperature of the substances with energy transferred. Which statement below is correct ? A. P has a higher melting point than Q. B. The specific latent heat of fusion of P is smaller than that of Q. C. The specific heat capacity of solid P is greater than that of solid Q. D. At temperature T₂, P is gas while Q is solid.',
    researchQuestion:
      '这道题真正追问的是：当纵轴是温度、横轴是输入能量时，曲线的斜率究竟在反映什么物理量。',
    quickTake:
      '等质量条件下，固态升温段越平缓，代表同样输入能量造成的升温越小，所以比热容越大。P 的固态升温斜率比 Q 小，因此 P 的 specific heat capacity 较大。',
    diagram: {
      title: '加热曲线重画：P、Q 的升温段与熔化平台',
      svg: heatingCurveSvg,
    },
    model: [
      '在熔化前，物质仍是固体，可用 Q = mcΔT。',
      '温度-能量图的斜率是 ΔT / Q = 1 / (mc)。质量相同，所以斜率主要由 c 决定。',
      '水平平台表示输入能量进入潜热（latent heat），温度不升高。',
      '平台所在的温度就是熔点（melting point）。',
    ],
    prerequisiteRecovery: [
      {
        title: '没有相变时的升温',
        points: [
          '使用 Q = mcΔT。',
          '同样输入能量下，温度升得越少，代表 c 越大。',
          '在 T-Q 图中，c 越大，升温线越不陡。',
        ],
      },
      {
        title: '熔化平台',
        points: [
          '水平平台段不是“没有变化”，而是在发生相变。',
          '平台温度对应熔点。',
          '质量相同时，平台越长，熔化需要的 latent heat 越大。',
        ],
      },
    ],
    thinkingPath: [
      '读图时，先把目光放在熔化平台之前。那一段里，两种物质都还保持固态，前文解释过的升温公式才有直接用武之地。',
      '比较这两段固态升温线，P 的线更平缓。换句话说，给 P 和 Q 输入同样多的能量，P 的温度增加得更少。',
      '题目又说明两种物质质量相同，因此造成差异的只能是 c。P 每升高 1°C 需要更多能量，所以固态 P 的比热容较大。',
    ],
    solution: [
      {
        title: '先把斜率翻译成能量需求',
        points: [
          '固态升温段使用前文解释过的升温公式。',
          '把它改写成 T-Q 图的斜率语言后，斜率与 specific heat capacity 成反比。',
          '所以不能把“曲线更陡”理解成“比热容更大”。',
        ],
      },
      {
        title: '再比较 P 与 Q 的固态升温段',
        points: [
          'P 的固态升温线较平缓。',
          'Q 的固态升温线较陡。',
          '因此固态 P 的 specific heat capacity 大于固态 Q。',
        ],
      },
    ],
    optionAnalysis: [
      {
        option: 'A',
        verdict: 'wrong',
        text: '熔点要看平台温度。图中 P 的熔化平台比 Q 低，所以不能说 P 的熔点更高。',
      },
      {
        option: 'B',
        verdict: 'wrong',
        text: '等质量时，latent heat 要从平台宽度读。P 的熔化平台更长，不支持“P 的潜热更小”。',
      },
      {
        option: 'C',
        verdict: 'correct',
        text: 'P 的初始升温斜率较小。由前文已经解释过的斜率关系可知，等质量时斜率越小，c 越大。',
      },
      {
        option: 'D',
        verdict: 'wrong',
        text: '只凭图中的对应位置不能推出该状态判断。没有显示沸腾平台时，不要自行推断气态。',
      },
    ],
    markingPoints: [
      '先锁定固态升温段，而不是熔化平台。',
      '使用 slope = ΔT / 输入能量。',
      '等质量条件下，把较小斜率对应到较大的 specific heat capacity。',
    ],
    traps: [
      '误以为“越陡代表比热容越大”。在这张图里正好相反。',
      '比较曲线视觉高度，而不是比较平台温度。',
      '用斜率判断 latent heat，而不是看水平平台长度。',
    ],
    highScoreReflex:
      '看到 T-Q 加热曲线：斜率看 specific heat capacity，平台高度看 melting point，平台宽度看 latent heat。',
    variationDrill: {
      prompt:
        '两个等质量金属受热。金属 A 输入 400 J 后升高 20°C，金属 B 输入 400 J 后升高 10°C。哪个金属的 specific heat capacity 更大？',
      solution: [
        '用 c = Q/(mΔT)。Q 和 m 相同，ΔT 越小，c 越大。',
        '金属 B 的 specific heat capacity 更大。',
      ],
    },
  },
  {
    slug: 'q02',
    questionNo: 2,
    title: '水和冰混合：先做相变能量核算（phase change）',
    subtitle: '冰水混合的第一步，是先看热量会不会被相变吸收。',
    paper: '2024 Paper 1 Section A',
    topic: '能量转移与相变（Energy Transfer and Phase Change）',
    tags: ['潜热 latent heat', '热平衡 thermal equilibrium', '能量守恒 energy conservation'],
    answer: 'B',
    successRate: '65%',
    timeBudget: '90 秒',
    difficulty: '有计算，但核心是概念判断',
    knowledgeSystem: {
      title: '知识专题：冰水混合题先判断相变是否完成',
      bigIdea:
        '冰水混合不是温度平均题，而是能量流向题。只要 0°C 的冰还存在，输入热量会先用于熔化，而不是让混合物升温。因此这类题的第一步永远不是设最终温度，而是判断热量够不够把冰全部熔化。',
      learningMap: [
        '第一层：暖水冷却放热，用 Q = mcΔT。',
        '第二层：0°C 冰熔化吸热，用 Q = mL。',
        '第三层：比较“可放出热量”和“全部熔化所需热量”。',
        '第四层：若冰未完全熔化，最终温度固定为 0°C；若冰完全熔化，才继续做水的升温能量守恒。',
      ],
      whyItMatters:
        '冰水混合题最容易让人蒙，是因为它不像普通混合温度题。普通混合题只有“热水降温、冷水升温”；冰水题多了一层相变，热量可能全部被熔化过程吃掉，温度一点都不上升。你必须先判断相变是否完成，才有资格谈最终温度。',
      conceptLadder: [
        {
          title: '先把系统分成两个能量账户',
          explanation:
            '暖水是“能量来源”，它最多只能降到 0°C，再低就不再是与冰水混合的普通液态水情境。冰是“能量去向”，它先拿热量来熔化自己。题目要你比较的是这两个账户的大小。',
          checkpoints: [
            '暖水账户：Q = mcΔT。',
            '冰账户：Q = mL。',
            '先比较账户，不先设最终温度。',
          ],
        },
        {
          title: '再做最终状态分叉',
          explanation:
            '如果暖水给出的热量不够，冰没有完全熔化，系统中仍有冰和水共存；冰水共存时温度固定在 0°C。如果热量有剩余，才会进入第二阶段：全部变成水后继续升温。',
          checkpoints: [
            '冰剩下：最终 0°C。',
            '冰刚好熔完：最终 0°C。',
            '热量有剩余：最终高于 0°C，需要第二次能量守恒。',
          ],
        },
        {
          title: '最后才考虑混合温度',
          explanation:
            '很多题会给一个高于 0°C 的选项，诱导你直接做加权平均。正确流程是：只有确认所有冰都熔化之后，才把剩余热量分配给全部液态水，计算最终温度。',
          checkpoints: [
            '看到 ice at 0°C，先想 latent heat。',
            '不要把 0°C 当成普通冷水温度。',
            '不要在冰未熔完时写最终温度方程。',
          ],
        },
      ],
      formulaToolkit: [
        {
          name: '暖水冷却放热',
          expression: 'Q = mcΔT',
          useWhen: '水从较高温度冷却到 0°C，计算最多能释放多少热量。',
          watchOut: 'ΔT 要用温度变化量，不是最终温度本身。',
        },
        {
          name: '冰在 0°C 熔化',
          expression: 'Q = mL',
          useWhen: '冰已经在 0°C，只需要计算熔化所需能量。',
          watchOut: '这一步没有 ΔT，因为熔化时温度不变。',
        },
        {
          name: '完全熔化后的剩余热量',
          expression: 'Qleft = Qhot - Qmelt',
          useWhen: '只有 Qhot 大于 Qmelt 时，才继续计算最终温度高于 0°C 多少。',
          watchOut: '如果 Qleft ≤ 0，就不需要再算温度。',
        },
      ],
      microExamples: [
        {
          title: '微型例题 1：热量不够',
          prompt: '0.10 kg 水从 50°C 冷到 0°C，能否熔化 0.10 kg 冰？取 c = 4200，L = 3.34 × 10^5。',
          steps: [
            '水放热：0.10 × 4200 × 50 = 21000 J。',
            '熔化冰需要：0.10 × 3.34 × 10^5 = 33400 J。',
            '热量不够，冰剩下，最终温度 0°C。',
          ],
        },
        {
          title: '微型例题 2：热量有剩余',
          prompt: '0.50 kg 水从 80°C 冷到 0°C，熔化 0.10 kg 冰后会怎样？',
          steps: [
            '水到 0°C 可放热：0.50 × 4200 × 80 = 168000 J。',
            '熔化冰需要：0.10 × 3.34 × 10^5 = 33400 J。',
            '热量有剩余，所以全部冰熔化，最终温度高于 0°C。',
          ],
        },
      ],
      coreExplanations: [
        {
          title: '为什么不能平均温度',
          points: [
            '温度平均默认所有物质都只是在升温或降温。',
            '但冰在 0°C 熔化时会吸收大量 latent heat，温度却不变。',
            '所以相变题必须先处理能量去向，再讨论最终温度。',
          ],
        },
        {
          title: '判断最终状态的分叉',
          points: [
            '若 Qwater < Qmelt all ice：冰剩下，最终 0°C。',
            '若 Qwater = Qmelt all ice：冰刚好熔完，最终 0°C。',
            '若 Qwater > Qmelt all ice：全部变成水，剩余热量再让水升温。',
          ],
        },
      ],
      misconceptions: [
        {
          wrongIdea: '把冰当成 0°C 的冷水，直接和热水平均。',
          correction: '冰先要吸收 latent heat 变成水；在这之前，平均温度公式不成立。',
        },
        {
          wrongIdea: '只要有热水，最终温度一定高于 0°C。',
          correction: '如果冰很多，热水释放的能量可能只够熔化一部分冰，最终仍是 0°C。',
        },
        {
          wrongIdea: '最终温度是 0°C 就代表没有能量转移。',
          correction: '能量已经转移了，只是用于相变，所以温度没有升高。',
        },
      ],
      dsePatterns: [
        '给热水和冰，问最终温度是不是 0°C。',
        '给 latent heat 和 c，考你是否先比较能量而不是直接套混合温度公式。',
        '把冰的质量设得很大，用直觉温度平均制造干扰项。',
      ],
      masteryChecklist: [
        '我能在看到 ice at 0°C 时立刻想到 Q = mL。',
        '我能先比较 Qhot 和 Qmelt，而不是直接设最终温度。',
        '我能判断冰剩下、冰刚好熔完、热量有剩余三种状态。',
        '我能解释为什么最终 0°C 不等于“没有发生热交换”。',
      ],
      bridgeToQuestion:
        '学完这套能量分叉后，再把它放回 2024 Q2：先判断冰有没有全部熔化，再看最终温度。',
      narrative: {
        heading: '先判断冰有没有熔完，再谈最终温度',
        sidebar: {
          formula: 'Qwater = mcΔT；Qice = mL',
          symbols:
            'Q：热量（J）；m：质量（kg）；c：水的比热容（J kg⁻¹ °C⁻¹）；ΔT：温度变化（°C 或 K）；L：冰的熔解潜热（J kg⁻¹）。',
          note: '若 Qwater 小于 Qice，冰没有全部熔化，最终温度就是 0°C。',
          readOrder:
            '先算热水最多能放出的热量；再算全部冰熔化需要的潜热；最后比较两者大小。',
        },
        lead: [
          '冰水混合题最容易让人误判，因为它看起来像普通混合温度题：一边热，一边冷，似乎做个加权平均就行。但冰不是 0°C 的冷水。只要它仍然是冰，输入进去的能量首先要拿来熔化，而不是拿来升温。',
          '所以这类题不能从“最后温度是多少”开始。更稳的读法是先问一个更早的问题：热水最多能交出多少能量？这些能量够不够把题目给出的冰全部熔化？这个分叉判断一完成，最终温度往往不用复杂计算就能确定。',
        ],
        sections: [
          {
            title: '一、先认识一个规则：有冰在，温度先被钉在 0°C',
            paragraphs: [
              '先忘掉具体题目，只看一个物理事实：在正常压强下，只要冰和液态水可以稳定共存，混合物的温度就是 0°C。这个 0°C 不是平均出来的，而是由相变状态决定的。',
              '当外界给冰水混合物输入能量时，这些能量优先拿去破坏冰的固态结构，让冰熔化成水。这个阶段温度不升；温度计可能一直读 0°C，但系统内部已经在吸收能量。',
              '所以遇到 warm water + ice 的题，真正的第一问不是“最后几度”，而是“暖水最多能提供多少热量”。暖水如果只能冷却到 0°C，就用 Q = mcΔT 计算它最多能交出的能量预算。',
            ],
            equations: [
              {
                expression: 'Q = mcΔT',
                symbols: [
                  {
                    symbol: 'Q',
                    meaning: '暖水冷却时放出的热量',
                    unit: 'J（joule，焦耳）',
                  },
                  {
                    symbol: 'm',
                    meaning: '暖水质量',
                    unit: 'kg（kilogram，千克）',
                  },
                  {
                    symbol: 'c',
                    meaning: '水的比热容（specific heat capacity）',
                    unit: 'J kg⁻¹ °C⁻¹；也可写作 J kg⁻¹ K⁻¹',
                  },
                  {
                    symbol: 'ΔT',
                    meaning: '暖水从初温降到 0°C 的温度变化量',
                    unit: '°C 或 K；温度差用两者数值相同',
                  },
                ],
                unitNote: '这一步只是在计算“最多可释放热量”，还没有假设最终温度。',
              },
            ],
            note: '热水能放出的热量是一个上限；能不能升温，要等冰这一边的账也算完。',
          },
          {
            title: '二、冰不是 0°C 的冷水：相变要单独记账',
            paragraphs: [
              '很多人会把 0°C 的冰当成 0°C 的水，然后直接和热水做平均。这一步错在把“相”忽略了：冰是固体，水是液体；从固体变成液体要先支付 latent heat。',
              '冰如果已经在 0°C，它不需要先升温；它需要的是熔化。熔化这一段用 Q = mL。这里没有 ΔT，因为相变过程中温度保持不变。',
              '这就是冰水混合题最核心的知识点：温度不变不代表没有吸热。能量正在改变粒子之间的排列和相互作用，而不是增加平均动能。',
            ],
            equations: [
              {
                expression: 'Q = mL',
                symbols: [
                  {
                    symbol: 'Q',
                    meaning: '冰熔化时吸收的热量',
                    unit: 'J（joule，焦耳）',
                  },
                  {
                    symbol: 'm',
                    meaning: '冰的质量',
                    unit: 'kg（kilogram，千克）',
                  },
                  {
                    symbol: 'L',
                    meaning: '冰的熔解潜热（specific latent heat of fusion）',
                    unit: 'J kg⁻¹',
                  },
                ],
                unitNote: '本题讨论的是熔化，所以 L 是 specific latent heat of fusion。',
              },
            ],
            note: '冰熔化时温度不升，所以这一段不能写 ΔT。',
          },
          {
            title: '三、最后温度由三条分叉决定',
            paragraphs: [
              '把两个账户放在一起比较后，最终状态只有三种。第一种：暖水给出的热量不够熔化所有冰，于是冰剩下，系统是冰水共存，最终温度为 0°C。',
              '第二种：暖水给出的热量刚好熔化所有冰。冰刚刚消失，能量也刚好用完，最终仍然是 0°C。',
              '第三种：暖水给出的热量超过全部熔化所需热量。只有在这个时候，剩余热量才会让所有液态水继续升温，最终温度才可能高于 0°C。',
              '所以“最终温度”不是一上来就能算的东西。它是能量分叉之后的结果。',
            ],
          },
          {
            title: '四、把 2024 Q2 放回这次能量比较',
            questionBrief: {
              title: '2024 DSE Q2 原题英文',
              stem: [
                'If 0.5 kg of water at 50 °C is mixed with 2.0 kg of ice at 0 °C, what is the final temperature of the mixture ?',
                'Given: specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹',
                'specific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹',
              ],
              options: [
                {
                  label: 'A',
                  text: '−54 °C',
                },
                {
                  label: 'B',
                  text: '0 °C',
                },
                {
                  label: 'C',
                  text: '10 °C',
                },
                {
                  label: 'D',
                  text: '25 °C',
                },
              ],
              points: [
                '这一题的英文问法很短，但关键不是直接算平均温度，而是先证明 ice 没有全部熔化。',
              ],
            },
            paragraphs: [
              '现在才回到这道题的数字。暖水账户是 0.50 × 4200 × 50 = 105000 J，也就是 1.05 × 10^5 J。这个数字表示暖水最多能从 50°C 冷却到 0°C 释放出的热量。',
              '冰这一边，全部熔化需要 2.0 × 3.34 × 10^5 = 6.68 × 10^5 J。它远大于暖水能提供的 1.05 × 10^5 J。',
              '因此这道题落在第一条分叉：冰没有全部熔化，系统里仍有冰和水共存。回到选项，B 才是由能量比较直接支持的结论。',
              'A 的问题是把冰水共存想成了低于 0°C 的稳定混合物。C 的问题是跳过了“全部熔化”这个门槛。D 则是典型的平均温度陷阱：它把冰当成普通冷水处理，忽略了 latent heat。',
              '做这题时，最重要的不是把算式写长，而是及时停下。比较结果已经说明冰没有熔完，继续算所谓最终升温只会把思路带偏。',
            ],
          },
        ],
        closing: [
          '这类题的纪律很简单：看到 0°C ice，先算 latent heat；看到 warm water，先算最多放热。只有当可放热量大于全部熔化所需热量时，才进入下一段混合温度计算。2024 Q2 正是这个分叉判断的标准题。',
        ],
      },
    },
    reconstructedPrompt:
      'If 0.5 kg of water at 50 °C is mixed with 2.0 kg of ice at 0 °C, what is the final temperature of the mixture ? Given: specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹; specific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹. A. −54 °C B. 0 °C C. 10 °C D. 25 °C.',
    researchQuestion:
      '在计算最终温度之前，暖水释放的热量是否足够把所有冰熔化？',
    quickTake:
      '暖水降到 0°C 最多放出 1.05 × 10^5 J；熔化全部冰需要 6.68 × 10^5 J。热量明显不够，所以仍有冰存在，热平衡温度就是 0°C。',
    diagram: {
      title: '教学重画图：比较可释放热量和全部熔化所需热量',
      svg: energyBalanceSvg,
    },
    model: [
      '只要 0°C 的冰还存在，混合物可以在 0°C 继续发生熔化。',
      '暖水失去的热量优先用于熔化冰，而不是把温度升到 0°C 以上。',
      '只有全部冰都熔化后，液态水混合物才可能升到 0°C 以上。',
    ],
    prerequisiteRecovery: [
      {
        title: '暖水冷却',
        points: [
          '暖水冷却到 0°C 放出的热量：Q = mcΔT。',
          '本题暖水质量较小，所以可释放能量有限。',
        ],
      },
      {
        title: '冰的熔化',
        points: [
          '0°C 冰熔化需要的热量：Q = mL。',
          '熔化过程中温度保持 0°C。',
          '如果可释放热量不够，最终就是 0°C，并且有冰剩下。',
        ],
      },
    ],
    thinkingPath: [
      '先算暖水降到 0°C 之前最多能放出多少热量。',
      '再算全部冰熔化需要多少热量。',
      '在写任何最终温度方程前，先比较这两个数。',
      '可释放热量更小，所以直接停下：最终温度是 0°C。',
    ],
    solution: [
      {
        title: '第 1 步：暖水最多能提供的热量',
        points: [
          'Qwater = mcΔT = 0.5 × 4200 × 50。',
          'Qwater = 105000 J = 1.05 × 10^5 J。',
        ],
      },
      {
        title: '第 2 步：全部冰熔化需要的热量',
        points: [
          'Qice = mL = 2.0 × 3.34 × 10^5。',
          'Qice = 6.68 × 10^5 J。',
        ],
      },
      {
        title: '第 3 步：判断最终状态',
        points: [
          '暖水无法熔化全部冰。',
          '最终仍是冰水混合物，温度保持 0°C。',
          '所以最终温度为 0°C。',
        ],
      },
    ],
    optionAnalysis: [
      {
        option: 'A',
        verdict: 'wrong',
        text: '在通常情境下，冰和液态水共存时不会稳定在负温度。',
      },
      {
        option: 'B',
        verdict: 'correct',
        text: '冰没有全部熔化，剩余的冰把混合物温度限制在 0°C。',
      },
      {
        option: 'C',
        verdict: 'wrong',
        text: '只有全部冰都熔化后，温度才可能高于 0°C；本题没有达到这个条件。',
      },
      {
        option: 'D',
        verdict: 'wrong',
        text: '这是“平均温度”思路的干扰项。相变消耗的 latent heat 远大于直觉平均能处理的量。',
      },
    ],
    markingPoints: [
      '用 Q = mcΔT 计算暖水可释放热量。',
      '用 Q = mL 计算全部冰熔化所需热量。',
      '先比较能量，再选择最终温度。',
      '得出仍有冰剩下，温度为 0°C。',
    ],
    traps: [
      '把 50°C 和 0°C 按质量做平均。',
      '先假设全部冰熔化，再去补 latent heat。',
      '忘记相变可以吸热但温度不升高。',
    ],
    highScoreReflex:
      '只要看到 0°C 冰和暖水混合，第一问永远是：热量够不够把所有冰熔化？',
    variationDrill: {
      prompt:
        '0.50 kg、80°C 的水与 0.20 kg、0°C 的冰混合。最终温度是 0°C，还是高于 0°C？',
      solution: [
        '水降到 0°C 可放热：0.50 × 4200 × 80 = 168000 J。',
        '熔化冰需要：0.20 × 3.34 × 10^5 = 66800 J。',
        '冰会全部熔化，所以最终温度高于 0°C；之后还要再做一次能量守恒。',
      ],
    },
  },
  {
    slug: 'q03',
    questionNo: 3,
    title: '理想气体的微观计数：从 p、V、T 读出 molecule count',
    subtitle: '先建立宏观状态到微观分子数的翻译，再处理 DSE 的数量级估算。',
    paper: '2024 Paper 1 Section A',
    topic: '气体定律与动理论（Gas Laws and Kinetic Theory）',
    tags: ['理想气体 ideal gas', '数量级 order of magnitude', 'Boltzmann constant'],
    answer: 'B',
    successRate: '49%',
    timeBudget: '90-120 秒',
    difficulty: '延伸题 + 单位换算',
    knowledgeSystem: {
      title: '知识专题：从气体账本理解 molecule count',
      bigIdea:
        '这题表面上在问 vacuum，真正要学的是气体的微观计数。同一团气体可以按 mole 来记，也可以按 molecule 来记；R、N_A、k 不是三块零散的记忆，而是一条账本关系。把这条关系理顺以后，vacuum 只是一个低压条件，不会再把人带偏。',
      learningMap: [
        '先建立两套计数语言：mole 和 molecule。',
        '再把 R、N_A、k 放回同一条关系里。',
        '然后把 pressure、volume、temperature 转成 SI 单位。',
        '最后只估数量级，不被小数系数拖住。',
      ],
      whyItMatters:
        '很多气体题做错，不是因为公式没背，而是因为没有先问清楚：我到底是在数 mole，还是在数一个个 molecule？一旦这个问题清楚，公式选择、常数选择和单位换算都会自然排队。',
      conceptLadder: [
        {
          title: '先决定用哪本账',
          explanation:
            'mole 是一大包一大包地数，molecule 是一个一个地数。两种说法指向同一团气体，只是计数尺度不同。题目一旦说 number of air molecules，未知量就不是 n，而是 N。',
          checkpoints: [
            'moles / amount of substance：未知量通常是 n。',
            'molecules / particles：未知量通常是 N。',
            '两种计数用 N = nN_A 连接。',
          ],
        },
        {
          title: '把 R 和 k 放回同一条关系',
          explanation:
            'R 是每 mole 的气体常数，k 是每个 molecule 的那一小份。一 mole 里面有 N_A 个 particles，所以 k = R / N_A。k 的 10^-23 不是凭空冒出来的，而是被 10^23 级别的粒子数除小的。',
          checkpoints: [
            'R ≈ 8.31 J mol^-1 K^-1，是 per mole。',
            'N_A ≈ 6.02 × 10^23 mol^-1，是每 mole 有多少个 particles。',
            'k = R / N_A，是 per molecule。',
          ],
        },
        {
          title: '数量级题先管单位，再管系数',
          explanation:
            'DSE 这题的选项隔着数量级，不需要把有效数字磨得很细。真正会把答案推远的，是把 1 cm³ 换错，或者把 room temperature 当成 25 直接代入。气体方程里的 T 必须是 Kelvin；室温约 20°C 到 25°C，也就是约 293 K 到 298 K，估算时取 300 K。',
          checkpoints: [
            '1 cm³ = 10^-6 m³。',
            'room temperature 不是要背 300 K，而是由 20°C 到 25°C 转成 Kelvin 后近似得到。',
            '先估 10 的幂，再看系数靠近哪个选项。',
          ],
        },
      ],
      formulaToolkit: [
        {
          name: '计数桥',
          expression: 'N = nN_A',
          useWhen: '要把 mole 数换成 molecules / particles。',
          watchOut: 'N_A 是 Avogadro constant，不是 N 乘 A，也不能和左边 N 约掉。',
        },
        {
          name: '微观气体方程',
          expression: 'pV = NkT',
          useWhen: '题目直接要求 actual number of molecules / particles。',
          watchOut: 'k = R / N_A；它是 R 拆到单个 molecule 后的常数。',
        },
        {
          name: '体积换算',
          expression: '1 cm³ = 10^-6 m³',
          useWhen: '题目给小体积，如 cm³、mm³。',
          watchOut: '这是立方换算，不是 10^-2 或 10^-3。',
        },
      ],
      microExamples: [
        {
          title: '小想一下 1：先定账本',
          prompt: '题目说 number of molecules，这句话已经告诉你什么？',
          steps: [
            '它要的是一个一个 molecule 的数量。',
            '未知量应写成 N，不是 n。',
            '后面只是在用 p、V、T 把 N 算出来。',
          ],
        },
        {
          title: '小想一下 2：k 为什么这么小',
          prompt: '为什么 k 会是 10^-23 级别，而 R 是 8.31？',
          steps: [
            'R 是一 mole 气体的常数。',
            '一 mole 有 6.02 × 10^23 个 particles。',
            '把 R 除给每一个 particle，k 自然会变成 10^-23 级别。',
          ],
        },
      ],
      coreExplanations: [
        {
          title: '常数不用背散',
          points: [
            'R：每 mole 的气体常数。',
            'N_A：每 mole 里有多少个 particles。',
            'k：R 除以 N_A 后，落到单个 molecule 身上的份额。',
          ],
        },
        {
          title: '计算只抓三件事',
          points: [
            'pressure 已经是 Pa，可以直接用。',
            'volume 必须从 cm³ 变成 m³。',
            'temperature 必须用 Kelvin；room temperature 约 20°C 到 25°C，所以取约 300 K。',
          ],
        },
      ],
      misconceptions: [
        {
          wrongIdea: '压强很低，所以分子数也一定接近 0。',
          correction: '微观分子数还取决于体积和 kT。低压只说明单位体积的粒子效应弱，不等于总数可以凭直觉判断。',
        },
        {
          wrongIdea: '1 cm³ 很小，所以可以当成 10^-3 m³。',
          correction: 'cm³ 是立方单位，1 cm³ = 10^-6 m³。',
        },
        {
          wrongIdea: '室温就是 25，直接代入 T = 25。',
          correction: '气体方程必须用 Kelvin。25°C 约等于 298 K，order of magnitude 题里近似为 300 K。',
        },
      ],
      dsePatterns: [
        '给低压和小体积，问分子数数量级。',
        '在选项中放 10^4、10^6、10^8、10^12，专门考单位换算。',
        '把 mole 和 molecules 放在同一章，考你能不能选对计数尺度。',
      ],
      masteryChecklist: [
        '我能分清 n 和 N，R 和 k。',
        '我知道 k = R / N_A，不把 k 当成孤立常数。',
        '我能把 cm³ 正确换成 m³。',
        '我知道 room temperature 为什么可以取 300 K。',
        '我能先算 10 的幂，再估算系数，快速得到数量级。',
      ],
      bridgeToQuestion:
        '回到 2024 Q3 时，先别被 vacuum 这个词牵着走。题目真正给的是一组可计算的状态：p = 10⁻⁸ Pa、V = 1 cm³、room temperature，以及目标量 number of air molecules。',
      narrative: {
        heading: '先把气体当成一套账本',
        reasoningHeading: '从低压、体积和温度估出 molecules',
        sidebar: {
          formula: 'pV = NkT',
          symbols:
            'p：压强（Pa）；V：体积（m³）；N：分子个数（无单位）；k：Boltzmann constant（J K⁻¹），也就是 R / N_A；T：绝对温度（K）。',
          note: '题目问 molecules，就走 N 和 k；k 可以由 R / N_A 理解，不是另一条孤立公式。',
          readOrder:
            '先定计数尺度；再处理单位；最后估数量级。',
        },
        lead: [
          '这道题不要从 “vacuum” 这个词开始想。日常语言里的真空，好像接近“什么都没有”；但物理题里的 vacuum 通常只是压强很低。低压不是零压，也不等于没有分子。',
          '更好的入口，是把气体看成一本账：一边记录我们能测到的宏观量，例如 pressure、volume、temperature；另一边记录看不见的微观数量，也就是里面到底有多少 molecules。',
          'Q3 的任务，就是把这两边接起来。只要账本接对，后面的计算其实很短。',
        ],
        sections: [
          {
            title: '一、先问清楚：我在数 mole，还是数 molecule？',
            paragraphs: [
              '理想气体题有两种记法。第一种是按 mole 记，用 n；第二种是按 molecule 记，用 N。它们不是两套物理，只是同一团气体的两种计数尺度。',
              'Q3 的英文问法是 number of air molecules。到这里，其实路线已经定了：最后要的是 N，不是 n。你可以先用 mole 算再转换，也可以直接用微观版本的气体方程；但心里要清楚，目标是一个个 molecules 的数量。',
              'N 和 n 之间用 Avogadro constant 连接：1 mole 里有 N_A 个 particles，所以 N = nN_A。这里 N_A 要当成一个完整常数名，不是 N 乘 A，也不能和左边的 N 约掉。',
            ],
            equations: [
              {
                expression: 'N = nN_A',
                symbols: [
                  {
                    symbol: 'N',
                    meaning: '实际分子个数（number of molecules）',
                    unit: '无单位，是计数值',
                  },
                  {
                    symbol: 'n',
                    meaning: '物质的量（amount of substance）',
                    unit: 'mol',
                  },
                  {
                    symbol: 'N_A',
                    meaning: 'Avogadro constant；每 mole 里的粒子个数',
                    unit: 'mol⁻¹',
                  },
                ],
                unitNote: '这条式子只是在换计数单位：mole 乘上每 mole 的粒子数，就得到 particles 的个数。',
              },
            ],
            note: '先定账本，再写公式。题目问 molecules，整题都围绕 N 展开。',
          },
          {
            title: '二、k 不是新负担，而是 R 分到单个 molecule 上',
            paragraphs: [
              '你已经知道 R 是 gas constant。它的单位是 J mol^-1 K^-1，意思是它按每 mole 来记账。可是现在题目要一个个 molecule 的数量，常数也要跟着换成每个 molecule 的尺度。',
              '一 mole 里有 N_A ≈ 6.02 × 10^23 mol^-1 个 particles。因此，把每 mole 的 R 平均分到每一个 particle 身上，就得到 k = R / N_A。用 R ≈ 8.31 J mol^-1 K^-1 去除，k 就是约 1.38 × 10^-23 J K^-1。',
              '所以这几个常数的记法可以很朴素：R 是一大包的版本，k 是拆成单个 particle 的版本，N_A 是中间的换算桥。理解这条线，比单独背三个数字更稳。',
            ],
            equations: [
              {
                expression: 'k = R / N_A',
                symbols: [
                  {
                    symbol: 'k',
                    meaning: 'Boltzmann constant；单个 molecule 对应的气体常数',
                    unit: 'J K⁻¹',
                  },
                  {
                    symbol: 'R',
                    meaning: 'gas constant；一 mole 气体对应的常数',
                    unit: 'J mol⁻¹ K⁻¹',
                  },
                  {
                    symbol: 'N_A',
                    meaning: 'Avogadro constant；每 mole 里的粒子个数',
                    unit: 'mol⁻¹',
                  },
                ],
                unitNote: 'DSE 里数值通常可从 data list 取得；更重要的是知道 R、N_A、k 的关系和使用场景。',
              },
            ],
          },
          {
            title: '三、为什么 vacuum 仍然能有很多 molecules？',
            paragraphs: [
              '压强来自分子撞击容器壁的平均效果。vacuum 的压强很低，说明撞击效果很弱；但“很弱”不是“没有”。只要体积不是零，温度也不是绝对零度，里面仍然可以有大量分子。',
              '这就是微观气体方程有用的地方。pV 描述整团气体的宏观状态；kT 可以看成单个 molecule 对应的温度尺度。整团气体的量除以单个 molecule 的量，剩下来的就是 molecule count。',
              '所以这题不是在哲学上讨论“真空空不空”，而是在计算：在这么低的 pressure、这么小的 volume、room temperature 下，分子个数落在哪个数量级。',
            ],
            equations: [
              {
                expression: 'N = pV / kT',
                symbols: [
                  {
                    symbol: 'N',
                    meaning: '实际分子个数（number of molecules）',
                    unit: '无单位，是计数值',
                  },
                  {
                    symbol: 'p',
                    meaning: '气体压强',
                    unit: 'Pa（pascal）',
                  },
                  {
                    symbol: 'V',
                    meaning: '气体体积',
                    unit: 'm³',
                  },
                  {
                    symbol: 'k',
                    meaning: 'Boltzmann constant',
                    unit: 'J K⁻¹',
                  },
                  {
                    symbol: 'T',
                    meaning: '绝对温度',
                    unit: 'K（kelvin）',
                  },
                ],
                unitNote: 'Pa·m³ 等于 J，所以 pV 和 kT 都是能量单位，相除后得到纯数量 N。',
              },
            ],
          },
          {
            title: '四、这题真正危险的是单位，不是公式',
            paragraphs: [
              '公式确定以后，最容易失分的地方反而很朴素：单位。pressure 已经给成 Pa，可以直接用；volume 给的是 1 cm³，必须换成 m³；temperature 说的是 room temperature，要用 Kelvin。',
              '1 cm³ 不是 10^-3 m³。厘米到米是一条长度的换算，体积有三条边，所以要立方：1 cm³ = 10^-6 m³。这个地方一错，答案会差一千倍。',
              'room temperature 也不要代 25。摄氏温度要先转成 Kelvin：T(K) = t(°C) + 273。一般室温大约是 20 °C 到 25 °C，也就是 293 K 到 298 K。题目问的是 order of magnitude，所以取 T ≈ 300 K 就足够。',
              '这里的大写 K 是 kelvin 这个温度单位；前面公式里的小写 k 才是 Boltzmann constant。一个是单位，一个是常数，读题时要分开。',
            ],
            equations: [
              {
                expression: '1 cm³ = 10^-6 m³',
                symbols: [
                  {
                    symbol: 'cm³',
                    meaning: '立方厘米，常见的小体积单位',
                    unit: 'cm³',
                  },
                  {
                    symbol: 'm³',
                    meaning: '立方米，理想气体方程使用的 SI 体积单位',
                    unit: 'm³',
                  },
                ],
                unitNote: '错成 10⁻³ m³，答案会大一千倍；错成 1 m³，答案会更离谱。',
              },
              {
                expression: 'T(K) = t(°C) + 273',
                symbols: [
                  {
                    symbol: 'T',
                    meaning: 'absolute temperature，气体方程里使用的温度',
                    unit: 'K（kelvin）',
                  },
                  {
                    symbol: 't',
                    meaning: '摄氏温度',
                    unit: '°C',
                  },
                  {
                    symbol: '273',
                    meaning: '摄氏温标和 Kelvin 温标之间的近似差值',
                    unit: 'K',
                  },
                ],
                unitNote: 'room temperature 通常约 20 °C 到 25 °C，因此约为 293 K 到 298 K；数量级估算时取 300 K。',
              },
            ],
          },
          {
            title: '五、现在回到原题：低压，不等于零分子',
            questionBrief: {
              title: '2024 DSE Q3 原题英文',
              stem: [
                'The best vacuum attained in the laboratory has a pressure of about 10⁻⁸ Pa.',
                'Estimate the order of magnitude of the number of air molecules in 1 cm³ of such ‘vacuum’ at room temperature.',
              ],
              options: [
                {
                  label: 'A',
                  text: '10⁴',
                },
                {
                  label: 'B',
                  text: '10⁶',
                },
                {
                  label: 'C',
                  text: '10⁸',
                },
                {
                  label: 'D',
                  text: '10¹²',
                },
              ],
              points: [
                '这里的 “vacuum” 只是低压条件；真正要读的是 p、V、T 和 molecules。',
              ],
            },
            paragraphs: [
              '现在看题面，信息其实很干净：pressure about 10^-8 Pa，volume 是 1 cm³，temperature 是 room temperature，目标是 number of air molecules。',
              '体积换成 10^-6 m³；room temperature 由 20 °C 到 25 °C 转成 Kelvin 后约为 300 K。于是 pV 的数量级是 10^-8 × 10^-6 = 10^-14；kT 约为 1.38 × 10^-23 × 300，也就是 4.1 × 10^-21。',
              '两者相除，N 约为 2.4 × 10^6。答案的数量级是 10^6，也就是 B。这个结论并不反直觉：它只是说明“最好的 vacuum”仍然可以在 1 cm³ 里留下百万级 molecules。',
            ],
          },
        ],
        closing: [
          '以后再看到类似题，先不要被形容词牵走。问 molecules，就先把气体账本切到 N；看到 k，就想起 k = R / N_A；单位进 SI，数量级自然会落出来。',
        ],
      },
    },
    reconstructedPrompt:
      'The best vacuum attained in the laboratory has a pressure of about 10⁻⁸ Pa. Estimate the order of magnitude of the number of air molecules in 1 cm³ of such ‘vacuum’ at room temperature. A. 10⁴ B. 10⁶ C. 10⁸ D. 10¹².',
    researchQuestion:
      '为什么一个叫 vacuum 的空间，仍然可以有百万级 molecules？',
    quickTake:
      'vacuum 只是低压，不是零分子。题目问 molecules，所以目标是 N；k 可理解为 R / N_A。把 1 cm³ 换成 10⁻⁶ m³，room temperature 由摄氏室温转成 Kelvin 后约取 300 K，估得 N 约为 2.4 × 10⁶，数量级是 10⁶。',
    diagram: {
      title: '教学重画图：宏观状态到微观分子数的翻译',
      svg: idealGasSvg,
    },
    model: [
      '题目问 molecules，未知量是 N。',
      'k = R / N_A，是 R 拆到单个 molecule 后的版本。',
      '1 cm³ 必须换算成 10^-6 m³。',
      'room temperature 约 20°C 到 25°C，换成 Kelvin 后可近似为 300 K。',
    ],
    prerequisiteRecovery: [
      {
        title: '气体的两本账',
        points: [
          '按 mole 记账时，用 n 和 R。',
          '按 molecule 记账时，用 N 和 k。',
          '两套账通过 N = nN_A 和 k = R / N_A 连起来。',
        ],
      },
      {
        title: '数量级顺序',
        points: [
          '先把 cm³、room temperature 这些单位处理好。',
          'room temperature 不是直接代 20 或 25，而是转成 Kelvin 后近似 300 K。',
          '再估 pV 和 kT 的 10 的幂。',
          '最后选最接近的数量级，不追求漂亮小数。',
        ],
      },
    ],
    thinkingPath: [
      '题目问 number of air molecules，所以目标量是 N。',
      '把 1 cm³ 换成 10^-6 m³；room temperature 约 20°C 到 25°C，转成 Kelvin 后取约 300 K。',
      '用 k = R / N_A 理解 Boltzmann constant，数值约 1.38 × 10^-23 J K^-1。',
      '估出 N 约为 2.4 × 10^6，数量级是 10^6。',
    ],
    solution: [
      {
        title: '第 1 步：把单位和常数摆正',
        points: [
          '题目问 molecules，所以使用 N。',
          '1 cm³ = 10^-6 m³。',
          'room temperature 约 20°C 到 25°C，换成 Kelvin 后取 T ≈ 300 K。',
          'k = R / N_A ≈ 1.38 × 10^-23 J K^-1。',
        ],
      },
      {
        title: '第 2 步：估数量级',
        points: [
          'pV = 10^-8 × 10^-6 = 10^-14。',
          'kT ≈ 1.38 × 10^-23 × 300 ≈ 4.1 × 10^-21。',
          'N ≈ 10^-14 / 4.1 × 10^-21。',
          'N ≈ 2.4 × 10^6 molecules。',
          '所以数量级是 10^6。',
        ],
      },
    ],
    optionAnalysis: [
      {
        option: 'A',
        verdict: 'wrong',
        text: '这个数量级太小，通常来自 cm³ 换算错误或 kT 的 10 次幂处理错误。',
      },
      {
        option: 'B',
        verdict: 'correct',
        text: '估算值约为 2.4 × 10^6 molecules，数量级正确。',
      },
      {
        option: 'C',
        verdict: 'wrong',
        text: '这个答案大约高了两个数量级。',
      },
      {
        option: 'D',
        verdict: 'wrong',
        text: '这是把“压强很小”的直觉和体积换算方向混乱后容易得到的过大答案。',
      },
    ],
    markingPoints: [
      '识别题目要求 molecule count。',
      '理解 k = R / N_A，并使用微观计数。',
      '把 1 cm³ 换算为 10^-6 m³。',
      '室温取约 300 K。',
      '按最接近的数量级作答。',
    ],
    traps: [
      '用摄氏温度代替 Kelvin。',
      '题目问分子数，却误用 R 和 pV = nRT。',
      '把 1 cm³ 错当成 10^-3 m³。',
      '过度追求精确计算，反而丢掉 10 的幂。',
    ],
    highScoreReflex:
      '看到 vacuum 先别凭感觉猜空不空；题目问 molecules，就先切到 N 这本账。',
    variationDrill: {
      prompt:
        '一个 2 cm³ 容器在 300 K 时压强为 10^-7 Pa。估算其中 molecule count 的数量级。',
      solution: [
        'pV = 10^-7 × 2 × 10^-6 = 2 × 10^-13。',
        'kT ≈ 4.1 × 10^-21。',
        'N ≈ 4.9 × 10^7，所以数量级可选 10^8。',
      ],
    },
  },
  {
    slug: 'q04',
    questionNo: 4,
    title: '速度-时间图面积：从累积量理解 displacement',
    subtitle: '先把 slope 和 area 的读图逻辑讲清楚，再回到 2024 Q4 的阴影面积。',
    paper: '2024 Paper 1 Section A',
    topic: '力与运动（Force and Motion）',
    tags: ['速度-时间图 velocity-time graph', '位移 displacement', '图像面积 graph area'],
    answer: 'D',
    successRate: '84%',
    timeBudget: '30-45 秒',
    difficulty: '核心反射题',
    knowledgeSystem: {
      title: '知识专题：运动图像先分清 slope 和 area',
      bigIdea:
        '运动图像不是先背一张表，而是先分清你在图上做什么动作。看 slope，是在问“变化得多快”；看 area，是在问“累积了多少”。Q4 的核心就是把 velocity-time graph 下方的 shaded area 读成一段段 displacement 的累加。',
      learningMap: [
        '先把图像操作分成 slope 和 area。',
        '再用纵轴单位和横轴单位判断物理量。',
        '接着理解 v-t 面积为什么是 displacement。',
        '最后区分 displacement 和 distance travelled 的边界。',
      ],
      whyItMatters:
        '很多人做运动图像题时，会被曲线形状、阴影位置、选项里的熟悉单词带走。其实图像先不问“像什么”，先问“我正在取 slope 还是取 area”。这个顺序一旦稳定，s-t、v-t、a-t 图都能用同一套方法读。',
      conceptLadder: [
        {
          title: '先看图像操作，而不是先看选项',
          explanation:
            'slope 是纵轴量除以横轴量，所以它描述变化率；area 是纵轴量乘以横轴量，所以它描述累积量。题目画切线，通常在问 slope；题目涂阴影，通常在问 area。',
          checkpoints: [
            '切线、gradient、slope：多半问变化率。',
            'shaded area、area under graph：多半问累积量。',
            '先判断操作，再读坐标轴单位。',
          ],
        },
        {
          title: '再用单位把物理量钉住',
          explanation:
            '单位是最可靠的防错工具。v-t 图面积的单位是 (m s^-1) × s = m。m 是长度单位，因此不可能是 acceleration，也不可能是 momentum；选项会被单位先筛掉一大半。',
          checkpoints: [
            'v-t graph 的 area：m。',
            'v-t graph 的 slope：m s^-2。',
            'a-t graph 的 area：m s^-1。',
          ],
        },
        {
          title: '最后再区分 displacement 和 distance travelled',
          explanation:
            'v-t 面积严格先代表 displacement，因为 velocity 是有方向的量。若速度一直为正，displacement 的大小才等于 distance travelled；若图像有负速度区域，displacement 可以互相抵消，但 distance travelled 要把大小相加。',
          checkpoints: [
            '全在时间轴上方：面积为正。',
            '有下方区域：位移可能抵消。',
            '基础 MC 题通常先考 displacement 这个物理量名称。',
          ],
        },
      ],
      formulaToolkit: [
        {
          name: '速度定义的微小形式',
          expression: 'v = ds/dt',
          useWhen: '要解释为什么 velocity-time graph 的面积会变成 displacement。',
          watchOut: 'v 是一瞬间的速度；曲线下面积可以看成很多小段 v dt 累加。',
        },
        {
          name: 'v-t 图面积',
          expression: 'displacement = ∫v dt',
          useWhen: '速度-时间图下方有阴影。',
          watchOut: '如果速度为负，面积带符号，代表 signed displacement。',
        },
        {
          name: '单位检查',
          expression: '(m s^-1) × s = m',
          useWhen: '选择题问 shaded area 代表什么。',
          watchOut: 'm 只能说明是长度类物理量；再根据 velocity 带方向，优先判断为 displacement。',
        },
      ],
      microExamples: [
        {
          title: '小想一下 1：同一张 v-t 图，slope 和 area 问的不是同一件事',
          prompt: 'velocity-time graph 上画一条切线，和涂一块阴影，分别在问什么？',
          steps: [
            '切线斜率：velocity 变化得多快，所以是 acceleration。',
            '阴影面积：velocity 在一段时间内累积了多少，所以是 displacement。',
            '先看题目让你做的图像动作，再看选项。',
          ],
        },
        {
          title: '小想一下 2：单位先筛选',
          prompt: 'velocity-time graph 的 shaded area 单位为什么？',
          steps: [
            '纵轴 velocity 的单位是 m s^-1。',
            '横轴 time 的单位是 s。',
            '面积单位是 (m s^-1) × s = m，只可能落在长度类物理量。',
          ],
        },
      ],
      coreExplanations: [
        {
          title: '面积不是装饰，是累积',
          points: [
            '在一小段时间 dt 里，位移小量是 ds = v dt。',
            'v-t 图下每一条窄竖条的面积，就是这一小段 displacement。',
            '把所有小面积连续累加，得到整段 displacement。',
          ],
        },
        {
          title: '单位比口诀更稳',
          points: [
            'v-t 面积单位：(m s^-1)(s) = m。',
            'acceleration 是 m s^-2，change of velocity 是 m s^-1，momentum 是 kg m s^-1，都不是 m。',
            'm 说明它是长度类物理量；再因为 velocity 带方向，严格名称是 displacement。',
          ],
        },
      ],
      misconceptions: [
        {
          wrongIdea: '只要图是弯的，就不能用面积规则。',
          correction: '曲线也可以看作很多很窄的小矩形累加，面积规则不变。',
        },
        {
          wrongIdea: 'v-t 图看到 v，就应该选 velocity 或 momentum。',
          correction: '题目问的是面积，不是纵轴本身；面积要看 v × t 的单位。',
        },
        {
          wrongIdea: '所有面积都代表 distance。',
          correction: 'v-t 面积严格说先代表 displacement；只有速度不变号时才等于 distance travelled。',
        },
      ],
      dsePatterns: [
        '给 v-t graph 阴影面积，问物理量。',
        '给 a-t graph 阴影面积，问 velocity change。',
        '用曲线形状吓人，但实际只考斜率/面积的基本意义。',
      ],
      masteryChecklist: [
        '我能先判断题目在问 slope 还是 area。',
        '我能用单位判断 v-t 面积、v-t 斜率、a-t 面积。',
        '我能解释为什么 v-t 面积来自 ds = v dt。',
        '我能区分 displacement 和 distance travelled 的条件。',
      ],
      bridgeToQuestion:
        '回到 2024 Q4 时，先不要看选项里哪个词熟。题目问 shaded area，图是 velocity-time graph，所以先用 area = velocity × time 读出单位，再选 displacement。',
      narrative: {
        heading: '先把运动图像看成两个动作',
        sidebar: {
          formula: 'displacement = ∫v dt',
          symbols:
            's：位移（m）；v：速度（m s⁻¹）；t：时间（s）；dt：很小一段时间（s）；∫v dt：把每一小段位移连续累加，单位为 m。',
          note: 'v-t 图的斜率是 acceleration；v-t 图下方面积是 displacement。',
          readOrder:
            '先看题目问 slope 还是 area；再读纵轴和横轴单位；最后对应物理量。',
        },
        lead: [
          '运动图像最容易让人乱，是因为大家一上来就背 s-t、v-t、a-t 的结果。更稳的入口，是先问自己：我正在看 slope，还是看 area？',
          'slope 是纵轴量除以横轴量，所以读的是变化率；area 是纵轴量乘以横轴量，所以读的是累积量。这个动作分清楚，图像再弯也不乱。',
        ],
        sections: [
          {
            title: '一、slope 和 area 问的不是同一件事',
            paragraphs: [
              '一张图可以被问出两种完全不同的问题。若题目问 gradient、slope 或切线斜率，它在问纵轴量相对于横轴量变化得多快。若题目问 shaded area 或 area under graph，它在问纵轴量在一段横轴范围内累积了多少。',
              '所以读运动图像时，不要先盯着选项里的熟词。先看题目让你做的动作：取 slope，还是取 area。动作不同，物理量就不同。',
              '在 velocity-time graph 里，slope 会给 acceleration；area 会给 displacement。它们都出现在同一张图上，但它们不是同一件事。',
            ],
          },
          {
            title: '二、为什么 v-t 图面积是 displacement',
            paragraphs: [
              '把时间切得很细。在很短一段时间 dt 内，如果速度近似为 v，这一小段位移就是 ds = v dt。',
              '画在 v-t graph 上，这个 v dt 正好是一条很窄的竖条面积：高度是 velocity，宽度是 time interval。曲线下方那一整块阴影，就是把这些小竖条的面积连续加起来。',
              '因此曲线不需要拆成三角形或长方形才可以理解。只要纵轴是 velocity，横轴是 time，下方面积就对应 displacement 的累积。',
            ],
            equations: [
              {
                expression: 'ds = v dt',
                symbols: [
                  {
                    symbol: 'ds',
                    meaning: '很小一段 displacement',
                    unit: 'm',
                  },
                  {
                    symbol: 'v',
                    meaning: '这一瞬间或这一小段内的 velocity',
                    unit: 'm s⁻¹',
                  },
                  {
                    symbol: 'dt',
                    meaning: '很小一段 time interval',
                    unit: 's',
                  },
                ],
                unitNote: 'm s⁻¹ 乘 s 得到 m，所以每条窄竖条面积都有位移单位。',
              },
              {
                expression: 'displacement = ∫v dt',
                symbols: [
                  {
                    symbol: 's',
                    meaning: '整段 displacement，从起点到终点的位置变化，带方向',
                    unit: 'm',
                  },
                  {
                    symbol: '∫',
                    meaning: '把许多小量连续累加',
                    unit: '无单位符号',
                  },
                  {
                    symbol: 'v',
                    meaning: '速度',
                    unit: 'm s⁻¹',
                  },
                  {
                    symbol: 'dt',
                    meaning: '微小时间间隔',
                    unit: 's',
                  },
                ],
                unitNote: 'DSE 选择题不一定要求积分符号，但理解它能解释为什么曲线也适用面积规则。',
              },
            ],
          },
          {
            title: '三、单位会先排掉 acceleration 和 momentum',
            paragraphs: [
              'v-t graph 的面积单位来自纵轴乘横轴：velocity 的单位是 m s^-1，time 的单位是 s，相乘得到 m。',
              '这个单位已经排掉不少东西。acceleration 的单位是 m s^-2；change of velocity 的单位是 m s^-1；momentum 的单位是 kg m s^-1。它们都不是 m。',
              '剩下的问题是：m 代表 displacement 还是 distance travelled？因为 v-t graph 用的是 velocity，而 velocity 本身带方向，所以面积严格先代表 displacement。',
            ],
            equations: [
              {
                expression: '(m s^-1) × s = m',
                symbols: [
                  {
                    symbol: 'm s^-1',
                    meaning: 'velocity 的单位',
                    unit: 'm s⁻¹',
                  },
                  {
                    symbol: 's',
                    meaning: 'time 的单位',
                    unit: 's',
                  },
                  {
                    symbol: 'm',
                    meaning: '长度或位移单位',
                    unit: 'm',
                  },
                ],
                unitNote: '单位只能先告诉你它是长度类物理量；再结合 velocity 带方向，才能把名称定为 displacement。',
              },
            ],
          },
          {
            title: '四、displacement 和 distance 的边界',
            paragraphs: [
              '严格说，v-t 图面积先代表 displacement，因为 velocity 本身带方向。若图像有一部分在时间轴下方，那部分面积会带负号，可以抵消上方的正面积。',
              '如果整段速度都为正，displacement 的大小才等于 distance travelled。若速度有正有负，distance travelled 要把路程大小相加，而 displacement 会按方向相互抵消。',
              'DSE 在选择题里问 physical quantity 时，通常要你先给出严格名称。看见 velocity-time graph 的 area，第一反应应当是 displacement。',
            ],
          },
          {
            title: '五、回到 2024 Q4：只看 shaded area 的物理意义',
            questionBrief: {
              title: '2024 DSE Q4 原题英文',
              stem: [
                'What physical quantity does the shaded area represent in the above velocity-time (v-t) graph ?',
              ],
              options: [
                {
                  label: 'A',
                  text: 'acceleration',
                },
                {
                  label: 'B',
                  text: 'change of velocity',
                },
                {
                  label: 'C',
                  text: 'momentum',
                },
                {
                  label: 'D',
                  text: 'displacement',
                },
              ],
              points: [
                '图像纵轴是 v，横轴是 t；题目问 shaded area，所以读成 velocity × time 的累积。',
              ],
            },
            paragraphs: [
              '这题没有给数字，说明它不是要你计算面积大小，而是要你说出面积的物理意义。',
              'v-t graph 下方的 shaded area：单位是 m，且 velocity 带方向，所以物理量是 displacement。',
              'A 是 v-t graph 的 slope；B 是 a-t graph 的 area；C 需要 mass。它们都不是这块 shaded area 的意义。',
            ],
          },
        ],
        closing: [
          '以后再看运动图像，先别背答案表。先问 slope 还是 area：slope 读变化率，area 读累积量。Q4 只是这个规则在 v-t graph 上最直接的一次出现。',
        ],
      },
    },
    reconstructedPrompt:
      'What physical quantity does the shaded area represent in the above velocity-time (v-t) graph ? A. acceleration B. change of velocity C. momentum D. displacement.',
    researchQuestion:
      '为什么 velocity-time graph 下方的 shaded area 代表 displacement？',
    quickTake:
      'v-t graph 的 shaded area 是 velocity 对 time 的累积；单位是 (m s^-1) × s = m，且 velocity 带方向，所以对应 displacement。',
    diagram: {
      title: '教学重画图：v(t) 下方阴影面积就是积分',
      svg: vtAreaSvg,
    },
    model: [
      'velocity 表示 displacement 随 time 的变化率：v = ds/dt。',
      '移项得到 ds = v dt，意思是一小段时间里的位移小量。',
      'v-t graph 下每条窄竖条面积都是 v dt。',
      '把所有窄竖条累加，得到总 displacement；若速度一直为正，它的大小才等于 distance travelled。',
    ],
    prerequisiteRecovery: [
      {
        title: 'slope 和 area 的分工',
        points: [
          'slope = 纵轴量 / 横轴量，读变化率。',
          'area = 纵轴量 × 横轴量，读累积量。',
          '题目问 gradient/slope 时不要用面积规则；题目问 shaded area 时不要用斜率规则。',
        ],
      },
      {
        title: '三张运动图像的常用结果',
        points: [
          's-t graph 的斜率给 velocity。',
          'v-t graph 的斜率给 acceleration。',
          'v-t graph 的面积给 displacement。',
          'a-t graph 的面积给 change in velocity。',
        ],
      },
    ],
    thinkingPath: [
      '原题问的是 shaded area，不是 slope。',
      '图像是 velocity-time graph，所以面积等于 velocity 对 time 的累积。',
      '面积单位是 (m s^-1) × s = m。',
      'velocity 是有方向的量，因此这块面积对应 displacement。',
    ],
    solution: [
      {
        title: '第 1 步：先看题目动作',
        points: [
          '题目说 shaded area，所以现在看的是 area，不是 slope。',
          'v-t graph 的 slope 才会给 acceleration。',
        ],
      },
      {
        title: '第 2 步：用单位和方向定名',
        points: [
          'area = velocity × time，单位是 (m s^-1) × s = m。',
          'velocity 带方向，所以面积代表 displacement，而不是只说 distance。',
        ],
      },
    ],
    optionAnalysis: [
      {
        option: 'A',
        verdict: 'wrong',
        text: 'acceleration 是 v-t graph 的斜率，不是面积。',
      },
      {
        option: 'B',
        verdict: 'wrong',
        text: 'change of velocity 是 a-t graph 下方面积代表的量；在 v-t graph 里，area 不会给 velocity change。',
      },
      {
        option: 'C',
        verdict: 'wrong',
        text: 'momentum 需要 mass × velocity，单位是 kg m s^-1；这里的面积单位只是 m。',
      },
      {
        option: 'D',
        verdict: 'correct',
        text: 'v-t graph 的 shaded area 是 velocity 对 time 的累积，代表 displacement。',
      },
    ],
    markingPoints: [
      '识别题目问 shaded area，而不是 slope。',
      '识别图像是 velocity-time graph。',
      '用 (m s^-1) × s = m 判断它是位移类物理量。',
      '用 velocity 带方向说明答案是 displacement。',
    ],
    traps: [
      '把 v-t graph 的 slope 规则误用到 shaded area 上。',
      '看到 change of velocity 觉得熟，却忘了那是 a-t graph 的 area。',
      '看到 velocity 就联想到 momentum，但 momentum 还需要 mass。',
    ],
    highScoreReflex:
      '遇到运动图像，先问“考 slope 还是 area？”；如果是 v-t area，立刻想 displacement。',
    variationDrill: {
      prompt:
        '在 acceleration-time graph 中，曲线下方阴影面积代表什么物理量？',
      solution: [
        '面积 = acceleration × time。',
        '单位 = m s^-2 × s = m s^-1。',
        '这代表 change in velocity。',
      ],
    },
  },
  {
    slug: 'q05',
    questionNo: 5,
    title: '粗糙斜面：contact force 是法向力和摩擦力的合力',
    subtitle: '前五题里最容易错的一题，因为题目问的是斜面受到的总接触力，不只是 normal reaction。',
    paper: '2024 Paper 1 Section A',
    topic: '力与平衡（Forces and Equilibrium）',
    tags: ['粗糙斜面 rough incline', '摩擦力 friction', '法向反作用力 normal reaction', 'Newton third law'],
    answer: 'B',
    successRate: '23%',
    timeBudget: '90-120 秒',
    difficulty: '高频误区题',
    knowledgeSystem: {
      title: '知识专题：粗糙接触面的 contact force 不是单独的 normal',
      bigIdea:
        '接触力不是一个固定等于 normal reaction 的词。光滑面上只有 normal，粗糙面上同时有 normal 和 friction；如果题目问 surface exerted force 或 force on surface，往往要取两者的向量合力。',
      learningMap: [
        '第一层：斜面上把重力分解为 mg sin theta 和 mg cos theta。',
        '第二层：粗糙面存在 friction，方向反抗相对运动或相对运动趋势。',
        '第三层：匀速或静止代表合力为零，不代表没有力。',
        '第四层：normal + friction 的向量合力才是 total contact force。',
      ],
      whyItMatters:
        '这类题难，不是因为计算难，而是因为词语容易误导。“接触力”不是一个方向固定的力，而是一类力的总称。粗糙接触面会同时产生垂直面的 normal 和沿面的 friction；题目若问总接触力，就必须把两个分量合成。',
      conceptLadder: [
        {
          title: '先区分单个力和一类力',
          explanation:
            'normal reaction 是接触力的一部分，friction 也是接触力的一部分。光滑面没有摩擦，所以总接触力看起来等于 normal；粗糙面有摩擦，所以总接触力不再只是 normal。',
          checkpoints: [
            'smooth surface：contact force = normal。',
            'rough surface：contact force = normal + friction。',
            '题目说 rough，就必须主动检查 friction。',
          ],
        },
        {
          title: '再用匀速条件找分量',
          explanation:
            '匀速不是“没有力”，而是“合力为零”。物块沿斜面下滑时，重力沿斜面分量由 friction 平衡，重力垂直斜面分量由 normal 平衡。',
          checkpoints: [
            '沿斜面：f = mg sin theta。',
            '垂直斜面：R = mg cos theta。',
            'f 和 R 互相垂直。',
          ],
        },
        {
          title: '最后用向量合成和牛顿第三定律',
          explanation:
            '斜面对物块的 contact resultant 是 R 和 f 的合力。它与重力等大反向，所以大小为 mg。物块对斜面的力是作用-反作用力，方向相反，大小相等。',
          checkpoints: [
            '先求斜面对物块的力比较容易。',
            '再用 Newton third law 转成物块对斜面的力。',
            '大小相等，方向相反，不要把方向和大小混在一起。',
          ],
        },
      ],
      formulaToolkit: [
        {
          name: '斜面重力分解',
          expression: 'mg sinθ, mg cosθ',
          useWhen: '物体在斜面上，需要分解重力沿面和垂面分量。',
          watchOut: 'sin 对应沿斜面，cos 对应垂直斜面；不要反用。',
        },
        {
          name: '匀速平衡条件',
          expression: 'ΣF = 0',
          useWhen: '题目说 constant velocity 或 equilibrium。',
          watchOut: 'ΣF = 0 不代表每个力都是 0。',
        },
        {
          name: '接触力合力',
          expression: 'Fcontact = sqrt(R² + f²)',
          useWhen: '粗糙面同时有 normal 和 friction，并且要求 total contact force。',
          watchOut: 'R 和 f 垂直时才可直接这样平方相加。',
        },
      ],
      microExamples: [
        {
          title: '微型例题 1：光滑斜面',
          prompt: '物块静止压在光滑斜面上。斜面对物块的接触力是什么？',
          steps: [
            '光滑面没有 friction。',
            '接触力只有 normal reaction。',
            '所以 total contact force = R = mg cosθ。',
          ],
        },
        {
          title: '微型例题 2：粗糙斜面匀速下滑',
          prompt: '物块在粗糙斜面上匀速下滑。斜面对物块的总接触力大小是多少？',
          steps: [
            '沿斜面 friction = mg sinθ。',
            '垂直斜面 normal = mg cosθ。',
            '总接触力 = sqrt((mg sinθ)^2 + (mg cosθ)^2) = mg。',
          ],
        },
      ],
      coreExplanations: [
        {
          title: '为什么 mg cos theta 不够',
          points: [
            'mg cos theta 只对应垂直斜面的 normal component。',
            '粗糙斜面还会给物块一个沿斜面的 friction。',
            '题目若问总接触力，就必须把 normal 和 friction 合成。',
          ],
        },
        {
          title: '匀速条件如何简化合力',
          points: [
            '沿斜面：friction = mg sin theta。',
            '垂直斜面：normal = mg cos theta。',
            '两者合力大小为 sqrt((mg sin theta)^2 + (mg cos theta)^2) = mg。',
          ],
        },
      ],
      misconceptions: [
        {
          wrongIdea: 'contact force 就是 normal reaction。',
          correction: '只有光滑接触时才常常等于 normal；粗糙接触还包括 friction。',
        },
        {
          wrongIdea: '匀速下滑说明没有摩擦力。',
          correction: '匀速说明合力为零；正是摩擦力平衡了重力沿斜面分量。',
        },
        {
          wrongIdea: '题目问物块对斜面，所以不能先看物块受力。',
          correction: '先分析斜面对物块的力，再用 Newton third law 转过去，大小相等。',
        },
      ],
      dsePatterns: [
        '把 smooth surface 改成 rough surface，考 contact force 是否包含 friction。',
        '用 constant velocity 让学生误以为摩擦力不存在。',
        '把“force on block”和“force on incline”来回切换，考 Newton third law。',
      ],
      masteryChecklist: [
        '我能区分 normal reaction、friction 和 total contact force。',
        '我能看到 rough surface 时主动加入 friction。',
        '我能用 constant velocity 写出 ΣF = 0，而不是“没有力”。',
        '我能用 Newton third law 在“物块受力”和“斜面受力”之间转换。',
      ],
      bridgeToQuestion:
        '2024 Q5 正好击中这个误区：如果先建立“粗糙接触力 = normal + friction”的知识系统，就不会误选 mg cos theta。',
      narrative: {
        heading: 'contact force 不是 normal reaction 的同义词',
        sidebar: {
          formula: 'R = mg cosθ；f = mg sinθ；Fcontact = √(R² + f²) = mg',
          symbols:
            'R：normal reaction（N）；f：friction（N）；m：质量（kg）；g：重力场强度（N kg⁻¹）；θ：斜面倾角；Fcontact：总接触力（N）。',
          note: 'rough surface 上的 contact force 包含 normal 和 friction 两个互相垂直的分量。',
          readOrder:
            '先判断 rough 是否带来 friction；再用 constant velocity 写平衡；最后合成接触力并用 Newton third law 转方向。',
        },
        lead: [
          '这题的陷阱不在三角函数，而在 contact force 这个词。很多人一看到接触力，就自动把它翻译成 normal reaction，于是答案会落到 mg cosθ。但在粗糙斜面上，接触不只产生 normal，也产生 friction。',
          '因此我们要先把题目中的力分清楚：normal 是垂直斜面的接触分量，friction 是沿斜面的接触分量。题目若问总接触力，就不能只取其中一个分量。',
        ],
        sections: [
          {
            title: '一、rough surface 一出现，contact force 就有两部分',
            paragraphs: [
              '光滑斜面上没有摩擦，斜面对物块的接触力只有 normal reaction。这时说 contact force，确实常常等于 normal。',
              '但本题说的是 rough incline。粗糙意味着接触面可以给出摩擦力。于是斜面对物块的接触作用分成两部分：垂直面的 R，沿面的 f。',
              '这一步如果没有想清楚，后面再熟练地分解 mg 也会走偏，因为你从一开始就少算了一个接触分量。',
            ],
          },
          {
            title: '二、constant velocity 不是没有力，而是合力为零',
            paragraphs: [
              '物块沿斜面匀速下滑。匀速说明 acceleration 为零，因此物块所受合力为零。它不是说 friction 为零；恰好相反，若没有 friction，物块会沿斜面加速下滑。',
              '沿斜面方向，重力分量 mg sinθ 向下，friction 向上。匀速条件要求它们平衡，所以 f = mg sinθ。',
              '垂直斜面方向，物块没有离开或陷入斜面，所以 normal reaction 平衡 mg cosθ，即 R = mg cosθ。',
            ],
            equations: [
              {
                expression: 'f = mg sinθ',
                symbols: [
                  {
                    symbol: 'f',
                    meaning: '摩擦力（friction），沿斜面向上',
                    unit: 'N（newton）',
                  },
                  {
                    symbol: 'm',
                    meaning: '物块质量',
                    unit: 'kg',
                  },
                  {
                    symbol: 'g',
                    meaning: '重力场强度',
                    unit: 'N kg⁻¹ 或 m s⁻²',
                  },
                  {
                    symbol: 'θ',
                    meaning: '斜面倾角',
                    unit: 'degree 或 radian',
                  },
                ],
                unitNote: '这是沿斜面方向的平衡结果，不是总接触力。',
              },
              {
                expression: 'R = mg cosθ',
                symbols: [
                  {
                    symbol: 'R',
                    meaning: '法向反作用力（normal reaction）',
                    unit: 'N（newton）',
                  },
                  {
                    symbol: 'm',
                    meaning: '物块质量',
                    unit: 'kg',
                  },
                  {
                    symbol: 'g',
                    meaning: '重力场强度',
                    unit: 'N kg⁻¹ 或 m s⁻²',
                  },
                  {
                    symbol: 'θ',
                    meaning: '斜面倾角',
                    unit: 'degree 或 radian',
                  },
                ],
                unitNote: '这是垂直斜面方向的分量，也不是总接触力。',
              },
            ],
          },
          {
            title: '三、把 normal 和 friction 合成，才得到总接触力',
            paragraphs: [
              'R 和 f 互相垂直，所以总接触力大小可以用直角三角形合成。代入 R = mg cosθ、f = mg sinθ，就得到 √[(mg cosθ)^2 + (mg sinθ)^2]。',
              'sin²θ + cos²θ = 1，所以这个合力大小化简为 mg。这个结论也可以从平衡直接看出：物块受重力 mg 向下，其他接触力的合力必须与它等大反向，才能让合力为零。',
              '题目问的是物块对斜面的力。我们刚才更方便地分析了斜面对物块的力；最后用 Newton third law 转过去。大小相等，方向相反，所以物块对斜面的总力大小也是 mg。',
            ],
            equations: [
              {
                expression: 'Fcontact = √(R² + f²) = mg',
                symbols: [
                  {
                    symbol: 'Fcontact',
                    meaning: '总接触力，即 normal 和 friction 的合力',
                    unit: 'N（newton）',
                  },
                  {
                    symbol: 'R',
                    meaning: 'normal reaction',
                    unit: 'N',
                  },
                  {
                    symbol: 'f',
                    meaning: 'friction',
                    unit: 'N',
                  },
                  {
                    symbol: 'mg',
                    meaning: '物块重量',
                    unit: 'N',
                  },
                ],
                unitNote: '因为 R 和 f 方向互相垂直，所以可以平方相加。',
              },
            ],
            note: 'mg cosθ 只是一部分；mg sinθ 也只是一部分。题目问 total contact force 时，要合成。',
          },
          {
            title: '四、把 2024 Q5 放回斜面受力',
            questionBrief: {
              title: '考场读题记录',
              stem: [
                '题目给一个物块在 fixed rough incline 上以 constant velocity 下滑。',
                '它问的是物块对斜面的总力大小，而不是单独的 normal reaction。',
                '选项围绕 0、mg、mg sinθ、mg cosθ 设置，专门考你有没有把 friction 算进 contact force。',
              ],
              options: [
                {
                  label: 'A',
                  text: '0：把匀速误解成没有力。',
                },
                {
                  label: 'B',
                  text: 'mg：normal 和 friction 合成后的总接触力大小。',
                },
                {
                  label: 'C',
                  text: 'mg sinθ：只取了 friction 分量。',
                },
                {
                  label: 'D',
                  text: 'mg cosθ：只取了 normal reaction。',
                },
              ],
              points: [
                '本题最关键的词是 rough 和 contact force。',
              ],
            },
            paragraphs: [
              '回到选项，B 才完整。A 忽略了接触本身；C 只读了沿斜面分量；D 只读了垂直斜面分量。它们都少了一步向量合成。',
              '这题之所以成功率低，是因为 mg cosθ 太像一个熟悉答案。只要题目说 rough，并且问总接触力，就必须停一下：normal 之外还有 friction。',
            ],
          },
        ],
        closing: [
          'Q5 的高分反射是：smooth incline 可以只想 normal；rough incline 一定检查 friction。若题目问 contact force 或 force on surface，先把接触分量合成，再用 Newton third law 转到题目指定的受力对象。',
        ],
      },
    },
    reconstructedPrompt:
      '一个物块沿固定粗糙斜面匀速下滑。题目要求判断物块对斜面施加的总力大小。',
    researchQuestion:
      '为什么粗糙斜面上的答案不是简单的 normal reaction，即 mg cos theta？',
    quickTake:
      '匀速意味着物块合力为零。斜面对物块的接触力合力必须抵消重力，所以该合力大小为 mg。由 Newton third law，物块对斜面的力大小也为 mg。',
    diagram: {
      title: '教学重画图：normal 和 friction 合成为一个 contact resultant',
      svg: inclineContactSvg,
    },
    model: [
      '斜面对物块有两个接触力：normal reaction 和 friction。',
      '物块匀速运动，所以加速度为零，合力为零。',
      '因此 normal 与 friction 的向量和，必须与重力等大反向。',
      '物块对斜面施加的接触力与斜面对物块的接触力等大反向。',
    ],
    prerequisiteRecovery: [
      {
        title: '斜面上分解重力',
        points: [
          '沿斜面向下分量：mg sin theta。',
          '垂直压向斜面的分量：mg cos theta。',
          '匀速下滑时，摩擦力沿斜面向上，大小等于 mg sin theta。',
        ],
      },
      {
        title: '接触力不一定只有 normal',
        points: [
          '光滑面上，接触力只有 normal reaction。',
          '粗糙面上，接触力包括 normal reaction 和 friction。',
          '总接触力是这两个力的向量合力。',
        ],
      },
    ],
    thinkingPath: [
      '先抓住 rough incline：说明摩擦力存在。',
      '再抓住 constant velocity：说明物块所受合力为零。',
      '斜面对物块的 contact resultant 必须抵消物块重力。',
      '所以它的大小是 mg。由 Newton third law，物块对斜面的力大小相同。',
    ],
    solution: [
      {
        title: '第 1 步：列出物块受力',
        points: [
          '重力 mg 竖直向下。',
          'normal reaction R 垂直斜面向外。',
          '物块向下滑，所以 friction f 沿斜面向上。',
        ],
      },
      {
        title: '第 2 步：使用匀速条件',
        points: [
          '沿斜面方向：f = mg sin theta。',
          '垂直斜面方向：R = mg cos theta。',
          'R 和 f 互相垂直，所以合力大小为 sqrt((mg cos theta)^2 + (mg sin theta)^2)。',
        ],
      },
      {
        title: '第 3 步：化简合力',
        points: [
          'sqrt((mg cos theta)^2 + (mg sin theta)^2) = mg。',
          '这是斜面对物块的总接触力大小。',
          '物块对斜面的力大小相同，也是 mg。',
        ],
      },
    ],
    optionAnalysis: [
      {
        option: 'A',
        verdict: 'wrong',
        text: '物块和斜面明显有接触，所以斜面受到的力不可能为零。',
      },
      {
        option: 'B',
        verdict: 'correct',
        text: '总接触力是 normal 和 friction 的向量合力，大小等于 mg。',
      },
      {
        option: 'C',
        verdict: 'wrong',
        text: 'mg sin theta 只是 friction 的大小，不是斜面受到的总力。',
      },
      {
        option: 'D',
        verdict: 'wrong',
        text: 'mg cos theta 只是 normal component，忽略了粗糙斜面上的 friction。',
      },
    ],
    markingPoints: [
      '识别粗糙接触包含 normal 和 friction。',
      '用匀速条件得到 friction = mg sin theta，normal = mg cos theta。',
      '取两个接触力分量的向量合力。',
      '用 Newton third law 转到物块对斜面的力。',
    ],
    traps: [
      '把 normal reaction 当成总接触力。',
      '看到匀速就忘记 friction。',
      '误以为匀速代表没有力；正确说法是没有合力。',
      '混淆“斜面对物块的力”和“物块对斜面的力”。两者大小相等、方向相反。',
    ],
    highScoreReflex:
      '在粗糙面上，题目问 surface exerted force 或 force on surface，通常要想 total contact force：normal + friction。',
    variationDrill: {
      prompt:
        '一个物块静止在粗糙斜面上且没有下滑。斜面对物块的总接触力大小是多少？',
      solution: [
        '静摩擦力平衡 mg sin theta，normal reaction 平衡 mg cos theta。',
        '总接触力大小为 sqrt((mg sin theta)^2 + (mg cos theta)^2) = mg。',
        '整体方向与重力相反。',
      ],
    },
  },
]
