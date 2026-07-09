import type { PhysicsCaseStudy } from '../../2024/p1/cases'

const planeMirrorImagesSvg = `
<img
  class="exam-diagram-image"
  src="/physics/dse-2025/p1/q13/q13-diagram.png"
  alt="2025 DSE Physics Q13 diagram showing two plane mirrors and possible image positions P, Q and R"
/>`

export const PHYSICS_DSE_2025_P1_CASES: PhysicsCaseStudy[] = [
  {
    slug: 'q13',
    questionNo: 13,
    title: '平面镜成像：用“镜面对称”筛走假位置',
    subtitle: '先把平面镜当成一条对称轴；会找像的位置，再回到题目筛选候选点。',
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
        '平面镜题常画在格纸上，几个候选点看起来都差不多。不要靠眼感选；先定镜面，作垂线，数垂直距离，再看有没有第二次反射。',
      conceptLadder: [
        {
          title: '先把平面镜当成一条对称轴',
          explanation:
            '点物体在平面镜前，像的位置不是随便出现在镜后某处，而是物体关于镜面的镜面对称点。换句话说，连接物和像的线段要垂直于镜面，镜面把这条线段平分。',
          checkpoints: [
            '物和像在镜面两侧。',
            '物距等于像距。',
            '物像连线垂直于镜面。',
          ],
        },
        {
          title: '再分清一次像和二次像',
          explanation:
            '两块镜同时出现时，一次像来自物体对其中一块镜的直接反射；二次像来自第一次的虚像再对另一块镜反射。做题时不要一眼扫候选点，而要按反射顺序逐个生成。',
          checkpoints: [
            '先找物体对第一块镜的对称点。',
            '再把第一次的虚像当作下一块镜前的物。',
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
            '不满足任何一轮反射对称关系的候选点，要直接排除。',
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
          expression: 'I_2 = R_B(R_A(S))',
          useWhen: '光先经一块镜、再经另一块镜反射，要求最终虚像位置。',
          watchOut: '不要同时把物体分别对两块镜乱反射；顺序决定二次像的位置。',
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
          wrongIdea: '两个候选点在同一直线上，所以它们应该都可以是像。',
          correction: '同一直线没有意义。候选点必须是某一次镜面对称的结果，不能只看整体排布。',
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
        '我能先用一般规则筛选候选点，再回到具体题目落答案。',
      ],
      bridgeToQuestion:
        '2025 Q13 就是考这个步骤：先用 M2 找到一次像 R，再把 R 经过 M1 反射得到 Q；P 对不上任何一次镜面对称，所以不保留。',
      narrative: {
        heading: '平面镜成像的几何模型',
        reasoningHeading: '从 R 到 Q，把候选点逐个筛掉',
        sidebar: {
          formula: 'd_o = d_i',
          symbols:
            'd_o：物体到镜面的垂直距离；d_i：像到镜面的垂直距离。两者必须在镜面两侧相等。',
          note: '判断像点时，镜面要作为物像连线的垂直平分线。',
          readOrder: '先会单镜对称；再处理第二块镜；最后才回题目看候选点。',
        },
        lead: [
          '平面镜成像不能凭“像不像”来猜。把物点和像点连起来，镜面要刚好从中间切过，而且要跟这条连线成直角。',
          '先不要急着看题目。平面镜横放、直放、斜放，做法都一样：从物点向镜面作垂线，再在镜面另一边取相同距离。候选点不在这个位置，就不是这块镜成的像。',
          '有两块镜时，顺序要分清。先做第一块镜的像；如果光路还要经第二块镜，就把刚才得到的虚像再对第二块镜反一次。',
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
            title: '二、虚像可以继续拿去反射',
            paragraphs: [
              '平面镜成的是虚像，不是屏幕上真的有光聚在一起。但看反射光线时，可以把它当成好像从虚像位置发出来。',
              '所以两块镜可以一步一步做。先用第一块镜找出虚像；如果还要看第二块镜，就把这个虚像当成新的物点，再对第二块镜作一次对称。',
              '二次像就是这样来的：先反一次，再拿结果反第二次。不是看哪里顺眼就补一个像点。',
            ],
          },
          {
            title: '三、格纸题可以这样做',
            paragraphs: [
              '遇到格纸上的平面镜题，先把镜面那条线延长，当成对称轴。再从物点向镜面作垂线，在另一边找相同距离的位置。',
              '斜放镜面时，不要数水平距离或竖直距离。要数的是离镜面的垂直距离；格纸只是帮你量，不是让你凭感觉看图。',
              '如果还有第二块镜，就把刚才找出来的像点继续反一次。每个候选点都这样检查，能由这些步骤走出来才留下。',
            ],
          },
          {
            title: '四、到题目时怎样落笔',
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
                '下方真题图只裁出真题中的镜面格纸图，题面文字和选项仍以文本方式呈现。',
              ],
            },
            paragraphs: [
              '到题目时，先把图拆成三样东西：物点、镜面、候选点。不要一看到几个点就凭感觉圈答案。',
              '有两块镜，就先选一块来找一次像；再把一次像拿去看第二块镜。每一步都只做一个动作：关于这块镜作对称。',
              '最后看选项。能按这些步骤找到的位置留下；只是看起来顺眼、但走不出对称步骤的位置删掉。',
            ],
          },
        ],
        closing: [
          '考场上记三句话就够：单镜看垂直平分；两镜按顺序逐次反；格纸只用来量垂直距离，不用来猜。',
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
      title: '真题图：两块平面镜与候选像位置',
      svg: planeMirrorImagesSvg,
      deferInHero: true,
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
