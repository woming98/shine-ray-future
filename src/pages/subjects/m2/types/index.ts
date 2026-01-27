/**
 * M2 模块类型定义
 */

// M2 主题
export interface M2Topic {
  id: string;
  name: string;
  nameZh: string;
  icon: string;
  description: string;
  path: string;
}

// 公式
export interface Formula {
  id: string;
  name: string;
  nameZh: string;
  latex: string;
  category: 'compound-angle' | 'double-angle' | 'sum-to-product' | 'product-to-sum' | 'half-angle' | 'other';
  derivation: DerivationStep[];
}

// 推导步骤（Formula 类型使用，向后兼容）
export interface DerivationStep {
  step: number;
  description: string;
  latex: string;
  identity?: string; // 使用的恒等式
}

// 证明题目
export interface ProofProblem {
  id: string;
  statement: string; // LaTeX
  target: string; // 要证明的等式 LaTeX
  steps: ProofStep[];
  hints: string[];
}

// 证明步骤
export interface ProofStep {
  step: number;
  latex: string;
  description: string;
  identity?: string; // 使用的恒等式
  isRevealed: boolean;
}

// TrigVision 参数
export interface TrigVisionParams {
  t: number; // 时间
  x: number; // 距离
  theta: number; // 角度（弧度）
  dThetaDt: number; // 角度变化率
}

// 学习进度
export interface M2Progress {
  topicId: string;
  completed: boolean;
  score: number;
  timeSpent: number;
  lastAccessed: Date;
}

// 学习统计
export interface M2Stats {
  totalStudyTime: number;
  formulasMastered: number;
  proofsCompleted: number;
  currentStreak: number;
}

// 题目相关类型
export interface SolutionStep {
  step: number; // 步骤编号（GPT 分析格式）
  latex: string; // LaTeX 公式
  reason?: string; // 步骤原因/方法（GPT 分析格式）
  explanation?: string; // 详细解释
  usedFormulas?: string[]; // 使用的公式 ID
  checkpoint?: boolean; // 是否为检查点
  // 向后兼容：id 字段（如果存在）
  id?: string;
}

export interface ProblemPart {
  part: string; // a, b, c等，或 a.i, a.ii 等
  content?: string; // 子题内容（向后兼容）
  promptLatex?: string; // 题干 LaTeX（新格式）
  latex_formulas?: string[]; // LaTeX 公式（向后兼容）
  figure_refs?: string[]; // 图表引用（向后兼容）
  marks?: number | null; // 分数
  imagePath?: string; // 子题图片路径（向后兼容）
  answerLatex?: string | null; // 答案 LaTeX
  hints?: string[]; // 提示列表
  solutionSteps?: SolutionStep[]; // 解析步骤
  usedKnowledge?: string[]; // 使用的知识点 ID
  usedDerivations?: string[]; // 使用的推导 ID
}

export interface Problem {
  id: string; // 2012Q9 或 0.1（向后兼容）
  year: string; // 2012, 2013等
  question: string; // Q9, Q10等 或 9, 10等
  qno?: string; // 题号（新格式）
  paper?: string; // 试卷类型（DSE等）
  title?: string; // 题目标题（2012 DSE M2 Q9）
  parts: ProblemPart[]; // 子题列表
  theme?: string | null; // 主题标签（向后兼容）
  tags?: string[]; // 标签列表（新格式）
  difficulty?: number | string | null; // 难度（1-5 或字符串）
  figure_paths?: string[] | null; // 图表文件路径（向后兼容）
  imagePaths?: string[]; // 题目图片路径数组（向后兼容）
  assets?: {
    images: string[];
    figures: string[];
  }; // 资源文件（新格式）
  knowledgePointIds?: string[]; // 知识点 ID 列表
  derivationIds?: string[]; // 推导 ID 列表
  hasAnswer?: boolean; // 是否有答案
  hasSolution?: boolean; // 是否有解析
  hasHints?: boolean; // 是否有提示
  source?: {
    texFile: string;
    startLine: number;
    endLine: number;
  }; // 源文件信息
}

export interface ProblemsData {
  metadata: {
    source?: string; // 向后兼容
    subject?: string; // 新格式
    topic?: string; // 新格式
    year?: string; // 新格式（或 "all"）
    sourceTex?: string; // 新格式
    extracted_at?: string; // 向后兼容
    generatedAt?: string; // 新格式
    total_problems?: number; // 向后兼容
    version: string;
  };
  problems: Problem[];
}

// 知识点类型
export interface KnowledgePoint {
  id: string;
  title: string;
  summary: string;
  coreFormulasLatex?: string[]; // 关键公式（GPT 分析数据格式）
  prerequisites: string[];
  commonPitfalls: string[];
  formulaRefs: string[];
  exampleProblemIds: string[];
}

// 推导步骤（Derivation 类型使用）
export interface DerivationStepNew {
  latex: string;
  reason: string;
}

export interface Derivation {
  id: string;
  title: string;
  finalLatex: string;
  steps: DerivationStepNew[];
  tags: string[];
}
