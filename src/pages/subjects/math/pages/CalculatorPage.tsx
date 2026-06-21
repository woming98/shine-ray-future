import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { renderToString } from 'katex';
import 'katex/dist/katex.min.css';
import {
  ArrowLeft,
  Calculator,
  CheckCircle2,
  Clipboard,
  Copy,
  ExternalLink,
  Gauge,
  ListChecks,
  ShieldCheck,
  Triangle,
} from 'lucide-react';
import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';

type CalculatorModel = 'fx-50FH II' | 'fx-3650P II';

interface CalculatorProgram {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  difficulty: '入门' | '核心' | '高频';
  icon: 'quadratic' | 'coordinate' | 'triangle';
  formula: string;
  examUses: string[];
  inputOrder: string[];
  outputOrder: string[];
  programLines: Record<CalculatorModel, string[]>;
  example: {
    question: string;
    inputs: string[];
    expected: string;
    check: string;
  };
  pitfalls: string[];
}

const calculatorModels: Array<{
  id: CalculatorModel;
  label: string;
  note: string;
}> = [
  {
    id: 'fx-50FH II',
    label: 'Casio fx-50FH II',
    note: '香港 DSE 常见 programmable scientific calculator，适合存放短 program。',
  },
  {
    id: 'fx-3650P II',
    label: 'Casio fx-3650P II',
    note: '旧款学生仍常用，输入逻辑接近，但按键名称和显示略有差异。',
  },
];

const programs: CalculatorProgram[] = [
  {
    id: 'quadratic-roots',
    title: 'Quadratic Roots',
    subtitle: '二次方程根快速验算',
    category: 'Algebra',
    difficulty: '高频',
    icon: 'quadratic',
    formula: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}',
    examUses: ['二次方程', '函数交点', 'Paper 2 代入验证', 'Paper 1 检查答案'],
    inputOrder: ['A = x^2 系数', 'B = x 系数', 'C = 常数项'],
    outputOrder: ['第一行：较大的根或 +sqrt 分支', '第二行：另一个根'],
    programLines: {
      'fx-50FH II': [
        '?→A',
        '?→B',
        '?→C',
        'B^2-4×A×C→D',
        '(-B+√D)÷(2×A)◢',
        '(-B-√D)÷(2×A)',
      ],
      'fx-3650P II': [
        '?→A',
        '?→B',
        '?→C',
        'B^2-4×A×C→D',
        '(-B+√D)÷(2×A)◢',
        '(-B-√D)÷(2×A)',
      ],
    },
    example: {
      question: 'x^2 - 5x + 6 = 0',
      inputs: ['A = 1', 'B = -5', 'C = 6'],
      expected: '3, 2',
      check: '用作 MC 选项验证时，看到 3 和 2 就可直接排除非整数根选项。',
    },
    pitfalls: ['A 不可输入 0。', 'D < 0 时会出现 Math ERROR；DSE 必修通常要先判断是否需要实根。', '输入 B 时负号要用负数键，不是减号。'],
  },
  {
    id: 'coordinate-toolkit',
    title: 'Coordinate Toolkit',
    subtitle: '中点、距离、斜率一键输出',
    category: 'Coordinate Geometry',
    difficulty: '核心',
    icon: 'coordinate',
    formula: 'M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right),\\ d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}',
    examUses: ['坐标几何', '圆心与半径', '直线斜率', 'Paper 2 图像题'],
    inputOrder: ['A = x1', 'B = y1', 'C = x2', 'D = y2'],
    outputOrder: ['第一行：midpoint x-coordinate', '第二行：midpoint y-coordinate', '第三行：distance', '第四行：slope'],
    programLines: {
      'fx-50FH II': [
        '?→A',
        '?→B',
        '?→C',
        '?→D',
        '(A+C)÷2◢',
        '(B+D)÷2◢',
        '√((C-A)^2+(D-B)^2)◢',
        '(D-B)÷(C-A)',
      ],
      'fx-3650P II': [
        '?→A',
        '?→B',
        '?→C',
        '?→D',
        '(A+C)÷2◢',
        '(B+D)÷2◢',
        '√((C-A)^2+(D-B)^2)◢',
        '(D-B)÷(C-A)',
      ],
    },
    example: {
      question: 'A(2, 3), B(8, 11)',
      inputs: ['A = 2', 'B = 3', 'C = 8', 'D = 11'],
      expected: '5, 7, 10, 4/3',
      check: '中点是 (5, 7)，距离是 10，斜率是 4/3。',
    },
    pitfalls: ['若 C = A，斜率一行会除以 0；这代表垂直线。', 'DSE 坐标题常需要 exact value，输出小数后要切回分数检查。', '输入顺序固定为 x1, y1, x2, y2，反转点的距离不变但斜率符号仍应一致。'],
  },
  {
    id: 'triangle-sas',
    title: 'Triangle SAS',
    subtitle: '余弦定理与面积快速检查',
    category: 'Trigonometry',
    difficulty: '核心',
    icon: 'triangle',
    formula: 'c=\\sqrt{a^2+b^2-2ab\\cos C},\\quad Area=\\frac{1}{2}ab\\sin C',
    examUses: ['三角学', '立体几何截面', '面积题', '角度与边长反查'],
    inputOrder: ['A = side a', 'B = side b', 'C = included angle in degrees'],
    outputOrder: ['第一行：第三边 c', '第二行：三角形面积'],
    programLines: {
      'fx-50FH II': [
        '?→A',
        '?→B',
        '?→C',
        '√(A^2+B^2-2×A×B×cos C)→D',
        'D◢',
        'A×B×sin C÷2',
      ],
      'fx-3650P II': [
        '?→A',
        '?→B',
        '?→C',
        '√(A^2+B^2-2×A×B×cos C)→D',
        'D◢',
        'A×B×sin C÷2',
      ],
    },
    example: {
      question: 'a = 7, b = 10, included angle C = 60 degrees',
      inputs: ['A = 7', 'B = 10', 'C = 60'],
      expected: '8.888..., 30.310...',
      check: '第三边约 8.89，面积约 30.31。若题目要求 3 s.f.，答案写 8.89 和 30.3。',
    },
    pitfalls: ['必须确认 calculator 在 DEG，不可在 RAD。', 'C 必须是两条输入边之间的夹角。', '若题目给的是非夹角，不能直接用这个 program。'],
  },
];

const ruleChecks = [
  '考场使用前，以 HKEAA permitted calculator list 为准。',
  'Calculator 机身需有 H.K.E.A.A. APPROVED 或 H.K.E.A. APPROVED 标签。',
  '不要在机身、保护盖或贴纸上写公式、步骤、program 目录以外的额外提示。',
  '考试前用简单数据测试每个 program，确认角度模式和小数/分数显示。',
];

const nextPrograms = ['Simultaneous Equations', 'Arithmetic / Geometric Sequence', 'Statistics SD and z-score', 'Mensuration Volume Pack', 'nCr / nPr Counting'];

function Formula({ tex }: { tex: string }) {
  return (
    <span
      className="text-gray-950"
      dangerouslySetInnerHTML={{
        __html: renderToString(tex, {
          throwOnError: false,
          displayMode: false,
        }),
      }}
    />
  );
}

function getProgramIcon(icon: CalculatorProgram['icon']) {
  if (icon === 'coordinate') {
    return <Gauge className="h-6 w-6" />;
  }
  if (icon === 'triangle') {
    return <Triangle className="h-6 w-6" />;
  }
  return <Calculator className="h-6 w-6" />;
}

export default function CalculatorPage() {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState<CalculatorModel>('fx-50FH II');
  const [copiedProgram, setCopiedProgram] = useState<string | null>(null);

  const selectedModelInfo = calculatorModels.find((model) => model.id === selectedModel) ?? calculatorModels[0];

  const copyProgram = async (program: CalculatorProgram) => {
    const text = [`${program.title} (${selectedModel})`, ...program.programLines[selectedModel]].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopiedProgram(program.id);
      window.setTimeout(() => setCopiedProgram(null), 1600);
    } catch {
      setCopiedProgram(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <button
        onClick={() => navigate('/subjects/math')}
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
      >
        <ArrowLeft className="w-4 h-4" />
        返回数学首页
      </button>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="p-6 md:p-8" hover={false}>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">HKDSE 必修数学</span>
            <span className="rounded bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">fx-50FH II / fx-3650P II</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-950 mb-4">DSE 数学计数机 Program 教程</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
            面向必修数学的考场可用流程：先确认机型与规则，再把高频 program 做成可检查、可复盘、可直接用于练习的工具。
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              ['3 个', '首发高频 program'],
              ['2 款', 'DSE 常见机型'],
              ['Paper 1/2', '验算与提速场景'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                <p className="text-2xl font-bold text-blue-800">{value}</p>
                <p className="mt-1 text-sm text-blue-700">{label}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5 bg-slate-50 border-slate-200" hover={false}>
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-gray-950">考场规则先确认</h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Programmable calculator 可否使用、具体型号和标签要求，以 HKEAA 当年文件为准。
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {ruleChecks.map((rule) => (
              <div key={rule} className="flex items-start gap-2 text-sm leading-relaxed text-gray-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                <span>{rule}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-2">
            <a
              href="https://www.hkeaa.edu.hk/en/hkdse/admin/student_s_handbook/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
            >
              HKEAA Candidate Handbook
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Candidate_Handbook/7_26Annex_E.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
            >
              Permitted calculator list
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-5">
          <Card className="p-5" hover={false}>
            <h2 className="font-bold text-gray-950">选择机型</h2>
            <p className="mt-1 text-sm text-gray-500">Program 代码会按机型显示。</p>
            <div className="mt-4 grid gap-2">
              {calculatorModels.map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model.id)}
                  className={`rounded-lg border px-3 py-3 text-left transition-colors ${
                    selectedModel === model.id
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <span className="block text-sm font-bold">{model.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-gray-500">{model.note}</span>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-5 bg-amber-50 border-amber-200" hover={false}>
            <div className="flex items-center gap-2">
              <Clipboard className="h-5 w-5 text-amber-700" />
              <h2 className="font-bold text-amber-950">输入前 checklist</h2>
            </div>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-amber-900">
              <p>1. 清空旧变量或用测试题覆盖 A-D。</p>
              <p>2. 三角题先确认 DEG。</p>
              <p>3. Program 输完后用一题已知答案测试。</p>
              <p>4. 考试中只用来验算，不代替完整步骤。</p>
            </div>
          </Card>

          <Card className="p-5" hover={false}>
            <h2 className="font-bold text-gray-950">下一批适合扩展</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {nextPrograms.map((item) => (
                <span key={item} className="rounded bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </aside>

        <div className="space-y-5">
          <Card className="p-5 bg-blue-50 border-blue-200" hover={false}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-blue-950">当前显示：{selectedModelInfo.label}</h2>
                <p className="mt-1 text-sm leading-relaxed text-blue-900">{selectedModelInfo.note}</p>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded bg-white px-3 py-2 text-sm font-semibold text-blue-700 sm:self-center">
                <ListChecks className="h-4 w-4" />
                {programs.length} programs
              </span>
            </div>
          </Card>

          {programs.map((program) => (
            <Card key={program.id} className="p-5 md:p-6" hover={false}>
              <div className="flex flex-col gap-4 border-b border-blue-100 pb-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    {getProgramIcon(program.icon)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-2xl font-bold text-gray-950">{program.title}</h2>
                      <span className="rounded bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700">
                        {program.difficulty}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-600">{program.subtitle}</p>
                    <p className="mt-2 text-sm font-semibold text-blue-700">{program.category}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => copyProgram(program)}
                  icon={<Copy className="h-4 w-4" />}
                >
                  {copiedProgram === program.id ? '已复制' : '复制 program'}
                </Button>
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
                <div className="space-y-5">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase text-gray-500">核心公式</p>
                    <div className="overflow-x-auto text-lg">
                      <Formula tex={program.formula} />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 text-sm font-bold text-gray-950">输入顺序</h3>
                      <div className="space-y-2">
                        {program.inputOrder.map((item, index) => (
                          <div key={item} className="flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-blue-100 text-xs font-bold text-blue-700">
                              {index + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-sm font-bold text-gray-950">输出顺序</h3>
                      <div className="space-y-2">
                        {program.outputOrder.map((item, index) => (
                          <div key={item} className="flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-emerald-100 text-xs font-bold text-emerald-700">
                              {index + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-bold text-gray-950">适用题型</h3>
                    <div className="flex flex-wrap gap-2">
                      {program.examUses.map((use) => (
                        <span key={use} className="rounded bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-sm font-bold text-gray-950">Program code</h3>
                      <span className="text-xs font-semibold text-gray-500">{selectedModel}</span>
                    </div>
                    <pre className="max-h-72 overflow-auto rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-blue-50">
                      {program.programLines[selectedModel].join('\n')}
                    </pre>
                  </div>

                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-xs font-semibold uppercase text-emerald-700">测试例题</p>
                    <h4 className="mt-2 font-bold text-emerald-950">{program.example.question}</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {program.example.inputs.map((input) => (
                        <span key={input} className="rounded bg-white px-2.5 py-1 text-xs font-semibold text-emerald-800">
                          {input}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-emerald-900">
                      输出：<span className="font-bold">{program.example.expected}</span>
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-emerald-800">{program.example.check}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
                <h3 className="text-sm font-bold text-amber-950">常见失误</h3>
                <div className="mt-2 grid gap-2 md:grid-cols-3">
                  {program.pitfalls.map((pitfall) => (
                    <div key={pitfall} className="rounded bg-white/70 px-3 py-2 text-sm leading-relaxed text-amber-900">
                      {pitfall}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
