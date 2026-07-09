import type { PhysicsCaseStudy } from '../../2024/p1/cases'

const planeMirrorImagesSvg = `
<svg viewBox="0 0 760 430" role="img" aria-label="Two inclined plane mirrors and possible image positions P, Q and R">
  <defs>
    <pattern id="mirrorMinorGrid" width="12" height="12" patternUnits="userSpaceOnUse">
      <path d="M12 0H0V12" fill="none" stroke="#cbd5e1" stroke-width="0.9"/>
    </pattern>
    <pattern id="mirrorMajorGrid" width="60" height="60" patternUnits="userSpaceOnUse">
      <rect width="60" height="60" fill="url(#mirrorMinorGrid)"/>
      <path d="M60 0H0V60" fill="none" stroke="#64748b" stroke-width="1.7"/>
    </pattern>
    <marker id="mirrorArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0 0L8 4L0 8Z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect x="38" y="24" width="684" height="382" rx="18" fill="#f8fafc"/>
  <rect x="60" y="42" width="640" height="330" fill="url(#mirrorMajorGrid)" stroke="#0f172a" stroke-width="3"/>

  <g stroke="#94a3b8" stroke-width="2" stroke-dasharray="8 8" opacity="0.72">
    <line x1="250" y1="322" x2="500" y2="72"/>
    <line x1="395" y1="207" x2="590" y2="402"/>
    <line x1="250" y1="322" x2="395" y2="177"/>
  </g>

  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line x1="395" y1="177" x2="500" y2="72" stroke="#111827" stroke-width="8"/>
    <line x1="395" y1="207" x2="500" y2="312" stroke="#111827" stroke-width="8"/>
    <g stroke="#111827" stroke-width="2.4">
      <line x1="386" y1="167" x2="405" y2="186"/>
      <line x1="400" y1="153" x2="419" y2="172"/>
      <line x1="414" y1="139" x2="433" y2="158"/>
      <line x1="428" y1="125" x2="447" y2="144"/>
      <line x1="386" y1="217" x2="405" y2="198"/>
      <line x1="400" y1="231" x2="419" y2="212"/>
      <line x1="414" y1="245" x2="433" y2="226"/>
      <line x1="428" y1="259" x2="447" y2="240"/>
    </g>
  </g>

  <g stroke="#2563eb" stroke-width="3" stroke-dasharray="0" fill="none" opacity="0.85">
    <path d="M560 142 L445 257 L330 372" marker-end="url(#mirrorArrow)"/>
    <path d="M330 372 L265 307 L200 242" marker-end="url(#mirrorArrow)"/>
  </g>

  <g font-family="Georgia, 'Times New Roman', serif" font-weight="800">
    <circle cx="560" cy="142" r="8" fill="#111827"/>
    <text x="575" y="132" font-size="34" fill="#111827">O</text>

    <circle cx="330" cy="42" r="8" fill="#111827"/>
    <text x="306" y="35" font-size="34" fill="#111827">P</text>

    <circle cx="200" cy="242" r="8" fill="#111827"/>
    <text x="174" y="232" font-size="34" fill="#111827">Q</text>

    <circle cx="330" cy="372" r="8" fill="#111827"/>
    <text x="306" y="365" font-size="34" fill="#111827">R</text>

    <text x="410" y="140" font-size="30" fill="#111827">M<tspan font-size="19" baseline-shift="sub">1</tspan></text>
    <text x="410" y="283" font-size="30" fill="#111827">M<tspan font-size="19" baseline-shift="sub">2</tspan></text>
  </g>

  <g font-family="Inter, ui-sans-serif, system-ui, sans-serif">
    <rect x="78" y="64" width="230" height="76" rx="12" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="96" y="94" font-size="17" font-weight="800" fill="#1e3a8a">读图顺序</text>
    <text x="96" y="120" font-size="15" fill="#1e40af">先把 O 对 M2 反射到 R，再把 R 对 M1 反射到 Q。</text>
  </g>
</svg>`

export const PHYSICS_DSE_2025_P1_CASES: PhysicsCaseStudy[] = [
  {
    slug: 'q13',
    questionNo: 13,
    title: '平面镜成像：用“镜面对称”筛走假位置',
    subtitle: '这题不需要画真实光路，关键是按反射顺序做镜面对称。',
    paper: '2025 Paper 1 Section A',
    topic: '光学：平面镜成像（Reflection in Plane Mirrors）',
    tags: ['平面镜 plane mirror', '虚像 virtual image', '镜面对称 reflection symmetry', '多次反射 multiple reflection'],
    answer: 'B',
    successRate: '未录入',
    timeBudget: '60-80 秒',
    difficulty: '基础光学 + 空间判断',
    knowledgeSystem: {
      title: '知识专题：平面镜成像不是“看起来像”，而是严格镜面对称',
      bigIdea:
        '平面镜题最可靠的判断方法，是把镜面当成一条对称轴。一个位置要成为像，必须和物体在镜面两侧等距离，而且连线要垂直于镜面。遇到两块镜时，就把第一次形成的虚像当作下一次反射的物，再做一次对称。',
      learningMap: [
        '第一层：单块平面镜成像时，像在镜后，物距等于像距。',
        '第二层：判断候选点时，不看“视觉上接近”，只看是否关于镜面对称。',
        '第三层：两镜多次反射时，按光的反射顺序逐次反射图像位置。',
        '第四层：候选点若不是任何一次或多次反射的对称结果，就不能算成像位置。',
      ],
      whyItMatters:
        'DSE 喜欢把候选点放在格纸上，让 P、Q、R 看起来都像可能答案。真正的分辨点是：P 只是位置显眼，并没有满足镜面对称；R 是由 M2 一次反射得到；Q 是再经 M1 反射得到的二次虚像。',
      conceptLadder: [
        {
          title: '先把平面镜当成一条对称轴',
          explanation:
            '物体 O 在平面镜前，像的位置不是随便出现在镜后某处，而是 O 关于镜面的镜面对称点。换句话说，连接物和像的线段要垂直于镜面，镜面把这条线段平分。',
          checkpoints: [
            '物和像在镜面两侧。',
            '物距等于像距。',
            '物像连线垂直于镜面。',
          ],
        },
        {
          title: '再分清一次像和二次像',
          explanation:
            '两块镜同时出现时，一次像来自 O 对其中一块镜的直接反射；二次像来自第一次的虚像再对另一块镜反射。做题时不要一眼扫 P、Q、R，而要按反射顺序逐个生成。',
          checkpoints: [
            'O 对 M2 反射，可以得到 R。',
            '把 R 当成 M1 前的物，再对 M1 反射，可以得到 Q。',
            '如果某候选点不是逐次对称产生，就要删掉。',
          ],
        },
        {
          title: '最后用有限镜面做合理性检查',
          explanation:
            '图中镜面虽然画成短线段，但像的位置由镜面所在直线决定。真正要避免的是把不满足对称关系的点硬套成答案；不能只因为候选点在镜后或在格纸边上就保留。',
          checkpoints: [
            '镜面所在直线可用于构图。',
            '候选点仍必须满足等距和垂直。',
            'P 不满足任何一轮反射的对称关系。',
          ],
        },
      ],
      formulaToolkit: [
        {
          name: '平面镜物距像距',
          expression: 'd_o = d_i',
          useWhen: '判断一个候选点是否可能是某块平面镜形成的像。',
          watchOut: '只看距离还不够，物像连线还必须垂直于镜面。',
        },
        {
          name: '反射定律',
          expression: 'i = r',
          useWhen: '从真实光路角度检查镜面反射是否合理。',
          watchOut: '选择题里通常用对称法更快；反射定律和镜面对称是同一件事的两种说法。',
        },
        {
          name: '两镜逐次反射',
          expression: 'I_2 = R_{M1}(R_{M2}(O))',
          useWhen: '光先经 M2、再经 M1 反射，要求最终虚像位置。',
          watchOut: '不要同时把 O 分别对两块镜乱反射；顺序决定二次像的位置。',
        },
      ],
      microExamples: [
        {
          title: '微型例题 1：单镜筛点',
          prompt: '一个点 A 在斜镜前。候选点 B 与 A 连线不垂直于镜面，但距离看起来差不多。B 可不可以是像？',
          steps: [
            '不可以。',
            '平面镜成像要求镜面平分物像连线。',
            '连线不垂直镜面，说明它不是镜面对称点。',
          ],
        },
        {
          title: '微型例题 2：两镜二次像',
          prompt: 'O 对第一块镜形成虚像 X。若光再被第二块镜反射，最终像怎样找？',
          steps: [
            '把 X 当成第二块镜前的物。',
            '再把 X 关于第二块镜做镜面对称。',
            '得到的位置就是二次虚像。',
          ],
        },
      ],
      coreExplanations: [
        {
          title: '平面镜图像判断的三个必要条件',
          points: [
            '候选像点要在镜面另一侧。',
            '候选像点与物点到镜面的垂直距离相等。',
            '物点与像点连线要垂直于镜面，镜面是这条线段的垂直平分线。',
          ],
        },
        {
          title: '多次反射不是多选几个镜后点',
          points: [
            '第一次反射先产生一个虚像。',
            '第二次反射要拿这个虚像继续做镜面对称。',
            '每多一次反射，本质上就是多做一次几何反射。',
          ],
        },
      ],
      misconceptions: [
        {
          wrongIdea: '候选点在镜后，就可能是像。',
          correction: '在镜后只是必要直觉，不是充分条件；必须满足镜面对称。',
        },
        {
          wrongIdea: 'P 和 R 在同一直线上，所以 P、R 应该都可以。',
          correction: '同一直线没有意义。R 是 O 对 M2 的对称点；P 不是 O 对 M1 的对称点，也不是二次反射结果。',
        },
        {
          wrongIdea: '两块镜一定会产生所有方向的多个像。',
          correction: '像的位置仍由逐次镜面对称决定，候选点必须逐个核对。',
        },
      ],
      dsePatterns: [
        '在格纸上给斜放平面镜，问哪个候选点是虚像位置。',
        '给两块成角平面镜，考一次像和二次像的区分。',
        '把候选点放在显眼的对称轴附近，诱导学生用视觉印象代替垂直平分判断。',
      ],
      masteryChecklist: [
        '我能用镜面作为垂直平分线，判断一个候选点是否为平面镜像。',
        '我能分辨一次虚像和二次虚像。',
        '我能按指定反射顺序逐次构造像点。',
        '我能解释为什么 P 不是像，而 Q、R 可以成像。',
      ],
      bridgeToQuestion:
        '2025 Q13 正是在考这套筛选纪律：先用 M2 找到一次像 R，再把 R 经过 M1 反射得到 Q；P 没有对应的镜面对称关系，所以不能保留。',
      narrative: {
        heading: '用镜面对称读两块平面镜',
        reasoningHeading: '从 R 到 Q，把候选点逐个筛掉',
        sidebar: {
          formula: 'd_o = d_i',
          symbols:
            'd_o：物体到镜面的垂直距离；d_i：像到镜面的垂直距离。两者必须在镜面两侧相等。',
          note: '判断像点时，镜面要作为物像连线的垂直平分线。',
          readOrder: '先单镜：O 对 M2 形成 R；再双镜：R 对 M1 形成 Q；最后删掉 P。',
        },
        lead: [
          '平面镜题最怕用肉眼猜。因为格纸上只要有点、有斜线、有对称感，很多位置都会看起来“像是像”。但平面镜成像不是视觉猜谜，它有一条很硬的几何规则：镜面必须是物点和像点连线的垂直平分线。',
          '这题的两块镜 M1 和 M2 斜着放，O 在右方，P、Q、R 是三个候选位置。我们不从选项开始猜，而是从 O 出发，一次反射一次反射地生成可能的像。能被这套过程生成的点才留下。',
        ],
        sections: [
          {
            title: '一、单块平面镜：像点必须是镜面对称点',
            paragraphs: [
              '对一块平面镜来说，像位于镜后，且与物体到镜面的垂直距离相同。更几何一点说，若把物点和像点连起来，镜面要刚好垂直平分这条线段。',
              '所以判断候选点时，不能只问“它是不是在镜后”。真正要问的是：把这个候选点和物点连起来后，镜面有没有把这条线段一分为二，并且成直角？如果没有，它就不是该镜形成的像。',
            ],
            equations: [
              {
                expression: 'd_o = d_i',
                symbols: [
                  {
                    symbol: 'd_o',
                    meaning: '物体到镜面的垂直距离',
                    unit: '格数或任何长度单位',
                  },
                  {
                    symbol: 'd_i',
                    meaning: '像到镜面的垂直距离',
                    unit: '格数或任何长度单位',
                  },
                ],
                unitNote: '这条关系只比较垂直距离；在格纸题中可直接数格或用对称关系判断。',
              },
            ],
            note: '平面镜像是 virtual image，但位置仍由严格几何决定。',
          },
          {
            title: '二、先看 M2：O 的一次像在 R',
            paragraphs: [
              '把 O 关于下方的 M2 所在直线反射。格纸上可以看到，O 与 R 分别落在 M2 两侧，连线方向与 M2 垂直，而且 M2 位于它们之间的中间位置。',
              '这说明 R 满足平面镜成像的三个条件：在镜后、等距、垂直平分。因此 R 是可以形成的像，是一次反射像。',
            ],
          },
          {
            title: '三、再看两次反射：R 经过 M1 生成 Q',
            paragraphs: [
              '两块镜会产生二次像。构图时，不是重新把 O 随便对另一块镜反射，而是把第一次产生的像继续拿去反射。',
              '本题中，O 先对 M2 反射得到 R。再把 R 关于上方 M1 所在直线反射，得到的位置正是 Q。也就是说，Q 是由 M2 后再经 M1 的二次反射虚像。',
              '这一点也是这题最容易漏的地方：如果只做单镜反射，会留下 R；但若考虑两镜多次反射，还必须把 Q 加入。',
            ],
          },
          {
            title: '四、为什么 P 不能留下',
            questionBrief: {
              title: '2025 DSE Q13 原题英文',
              stem: [
                'A point object O is placed in front of two plane mirrors M1 and M2 as shown.',
                'At which position(s) can an image be formed ?',
              ],
              options: [
                {
                  label: 'A',
                  text: 'P, Q and R',
                },
                {
                  label: 'B',
                  text: 'Q and R only',
                },
                {
                  label: 'C',
                  text: 'R only',
                },
                {
                  label: 'D',
                  text: 'P only',
                },
              ],
              points: [
                '上方教学图是按原题格纸重画，并加入淡色构图线帮助判断。',
              ],
            },
            paragraphs: [
              'P 位于图的上方，看起来很像是上方 M1 形成的像。但若把 O 和 P 连起来，M1 并不是这条线段的垂直平分线；P 也不是把 R 再反射后的结果。',
              '所以 P 不能由本题的镜面对称过程生成。它是干扰点，不是像的位置。',
            ],
          },
        ],
        closing: [
          '因此，这题的可成像位置只有两个：R 是 O 对 M2 的一次像；Q 是经 M2 后再经 M1 的二次像。P 不满足镜面对称，删掉。答案是 B。',
        ],
      },
    },
    reconstructedPrompt:
      'A point object O is placed in front of two plane mirrors M1 and M2. The candidates P, Q and R are marked on a grid. Which position(s) can be image positions? A. P, Q and R. B. Q and R only. C. R only. D. P only.',
    researchQuestion:
      '这道题真正考的是：在两块斜放平面镜中，哪些候选点能由一次或二次镜面对称严格生成。',
    quickTake:
      'R 是 O 关于 M2 的一次镜像；Q 是 R 关于 M1 的二次镜像。P 不是 O 或 R 关于任何镜面的对称点，所以不能成像。',
    diagram: {
      title: '教学重画图：M2 形成 R，M2 后再经 M1 形成 Q',
      svg: planeMirrorImagesSvg,
    },
    model: [
      '平面镜像是虚像，位置在镜后。',
      '镜面是物点和像点连线的垂直平分线。',
      '两镜多次反射可用逐次镜面对称构造。',
      '本题中先由 O 对 M2 得 R，再由 R 对 M1 得 Q。',
    ],
    prerequisiteRecovery: [
      {
        title: '平面镜成像',
        points: [
          '像和物在镜面两侧。',
          '像距等于物距。',
          '物像连线垂直于镜面。',
        ],
      },
      {
        title: '多次反射',
        points: [
          '第一次虚像可作为下一块镜的物。',
          '每一次反射都做一次镜面对称。',
          '候选点必须由这个过程产生才可保留。',
        ],
      },
    ],
    thinkingPath: [
      '先用 M2 检查 O 的一次像。O 和 R 关于 M2 对称，因此 R 可以形成。',
      '再把 R 当作下一次反射的物，对 M1 做镜面对称，得到 Q，因此 Q 也可以形成。',
      '检查 P。P 既不是 O 关于 M1 的对称点，也不是 R 或其他一次像继续反射的结果，所以 P 不能形成。',
    ],
    solution: [
      {
        title: '找一次像',
        points: [
          '以 M2 为镜面对称轴。',
          'O 的对称点落在 R。',
          '所以 R 是可形成的像。',
        ],
      },
      {
        title: '找二次像',
        points: [
          '把第一次像 R 再关于 M1 反射。',
          '所得位置是 Q。',
          '所以 Q 是由两次反射形成的像。',
        ],
      },
      {
        title: '排除 P',
        points: [
          'P 不满足与 O 关于 M1 对称。',
          'P 也不是由 R 继续反射生成。',
          '因此 P 不是成像位置。',
        ],
      },
    ],
    optionAnalysis: [
      {
        option: 'A',
        verdict: 'wrong',
        text: '这个选项多选了 P。P 没有满足任何一轮镜面对称关系。',
      },
      {
        option: 'B',
        verdict: 'correct',
        text: 'R 是 M2 的一次像；Q 是 M2 后再经 M1 的二次像。两者都可以形成。',
      },
      {
        option: 'C',
        verdict: 'wrong',
        text: '只保留 R 会漏掉二次反射像 Q。',
      },
      {
        option: 'D',
        verdict: 'wrong',
        text: 'P 不是 O 关于 M1 的镜像，也不是两次反射所得位置。',
      },
    ],
    markingPoints: [
      '用镜面对称判断，不靠视觉猜测。',
      '确认 R 是 O 对 M2 的一次像。',
      '确认 Q 是 R 对 M1 的二次像。',
      '排除不满足对称关系的 P。',
    ],
    traps: [
      '只找一次像，漏掉 Q。',
      '看到 P 在上方就误判为 M1 的像。',
      '忘记物像连线必须垂直镜面且被镜面平分。',
    ],
    highScoreReflex:
      '平面镜格纸题：每个候选点都问一句“镜面是不是物像连线的垂直平分线？”两镜题就逐次做这个动作。',
    variationDrill: {
      prompt:
        '若把图中的 M1 移走，只留下 M2，P、Q、R 中哪些位置仍可能是 O 的像？',
      solution: [
        '只剩 M2 时，只考虑 O 关于 M2 的一次镜像。',
        'O 对 M2 的镜像是 R。',
        '所以只留下 R。',
      ],
    },
  },
]
