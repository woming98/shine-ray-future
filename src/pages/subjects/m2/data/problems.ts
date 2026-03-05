/**
 * M2 三角函数题目数据
 * 支持从 LaTeX 提取的新格式和旧格式（向后兼容）
 * 支持合并 GPT 分析数据
 */

import { ProblemsData, Problem, ProblemPart } from '../types';
import { getProblemImagePath, findProblemImages } from '../utils/imageMapper';

// 静态导入 JSON 文件（Vite 需要在构建时知道所有文件）
import problems2012 from '../../../../../data/m2/trig/problems_2012.json';
import analysis2012 from '../../../../../data/m2/trig/analysis_2012_gpt.json';
// 后续年份可以继续添加：
// import problems2013 from '../../../../data/m2/trig/problems_2013.json';
// import analysis2013 from '../../../../data/m2/trig/analysis_2013_gpt.json';

// 年份数据映射（添加 question 字段以兼容类型）
const problemsByYearMap: Record<string, ProblemsData> = {
  '2012': {
    ...problems2012,
    problems: (problems2012 as any).problems.map((p: any) => ({
      ...p,
      question: p.qno || p.question || '', // 确保 question 字段存在
    })),
  } as ProblemsData,
  // 后续年份可以继续添加
};

const analysisByYearMap: Record<string, any> = {
  '2012': analysis2012,
  // 后续年份可以继续添加
};

// 尝试加载新格式（按年份）
const loadProblemsByYearFile = (year: string): ProblemsData | null => {
  return problemsByYearMap[year] || null;
};

// 尝试加载 GPT 分析数据（按年份）
const loadAnalysisByYearFile = (year: string): any | null => {
  return analysisByYearMap[year] || null;
};

// 合并 GPT 分析数据到问题数据
const mergeAnalysisIntoProblem = (problem: Problem, analysis: any): Problem => {
  if (!analysis || !analysis.problems) {
    return problem;
  }

  const analysisProblem = analysis.problems.find((p: any) => p.id === problem.id);
  if (!analysisProblem) {
    return problem;
  }

  // 合并问题级别的字段
  const mergedProblem: Problem = {
    ...problem,
    difficulty: analysisProblem.difficulty ?? problem.difficulty,
    tags: analysisProblem.tags?.length > 0 ? analysisProblem.tags : problem.tags,
    knowledgePointIds: analysisProblem.knowledgePointIds?.length > 0 
      ? analysisProblem.knowledgePointIds 
      : problem.knowledgePointIds,
    derivationIds: analysisProblem.derivationIds?.length > 0 
      ? analysisProblem.derivationIds 
      : problem.derivationIds,
  };

  // 合并每个 part 的分析数据
  const mergedParts: ProblemPart[] = problem.parts.map((part) => {
    const analysisPart = analysisProblem.parts?.find((p: any) => p.part === part.part);
    if (!analysisPart) {
      return part;
    }

    return {
      ...part,
      answerLatex: analysisPart.answerLatex ?? part.answerLatex,
      hints: analysisPart.hints?.length > 0 ? analysisPart.hints : part.hints,
      solutionSteps: analysisPart.solutionSteps?.length > 0 
        ? analysisPart.solutionSteps 
        : part.solutionSteps,
    };
  });

  return {
    ...mergedProblem,
    parts: mergedParts,
  };
};

// 加载所有年份的问题（合并 GPT 分析数据）
const loadAllProblemsFromLatex = (): Problem[] => {
  const years = Object.keys(problemsByYearMap); // 只加载已导入的年份
  const allProblems: Problem[] = [];
  
  for (const year of years) {
    const yearData = loadProblemsByYearFile(year);
    if (yearData && yearData.problems) {
      // 尝试加载对应的 GPT 分析数据
      const analysisData = loadAnalysisByYearFile(year);
      
      // 合并分析数据
      const mergedProblems = yearData.problems.map((problem: Problem) => 
        analysisData ? mergeAnalysisIntoProblem(problem, analysisData) : problem
      );
      
      allProblems.push(...mergedProblems);
    }
  }
  
  return allProblems;
};

// 加载旧格式（向后兼容）
// 注意：如果旧文件存在，需要静态导入
// import oldProblemsData from '../../../../data/m2_trigonometry_problems.json';
let oldProblemsData: ProblemsData | null = null;
// 暂时设为 null，如果需要旧格式数据，取消上面的注释并导入

// 合并数据：优先使用新格式，fallback 到旧格式
const latexProblems = loadAllProblemsFromLatex();
const hasLatexData = latexProblems.length > 0;

// 添加调试日志（开发环境）
if (process.env.NODE_ENV === 'development') {
  console.log('[M2 Problems] Loaded problems:', latexProblems.length);
  console.log('[M2 Problems] Years:', [...new Set(latexProblems.map(p => p.year))]);
  if (latexProblems.length > 0) {
    console.log('[M2 Problems] Sample problem:', latexProblems[0]);
  }
}

let m2Problems: ProblemsData;
if (hasLatexData) {
  // 使用新格式
  m2Problems = {
    metadata: {
      subject: 'M2',
      topic: 'Trigonometry',
      year: 'all',
      version: 'v1',
      total_problems: latexProblems.length, // 添加 total_problems
    },
    problems: latexProblems,
  };
} else if (oldProblemsData) {
  // 使用旧格式
  m2Problems = oldProblemsData;
} else {
  // 空数据
  m2Problems = {
    metadata: {
      version: 'v1',
      total_problems: 0,
    },
    problems: [],
  };
}

// 为每个题目添加图片路径（兼容新旧格式）
export const m2ProblemsWithImages: ProblemsData = {
  ...m2Problems,
  problems: m2Problems.problems.map((problem): Problem => {
    // 兼容新旧格式的 question/qno
    const questionNumber = problem.qno || problem.question || '';
    
    // 新格式：使用 assets.images
    if (problem.assets?.images && problem.assets.images.length > 0) {
      return {
        ...problem,
        question: questionNumber, // 确保 question 字段存在
        imagePaths: problem.assets.images.map(img => `/m2-problems/${img}`),
        parts: problem.parts.map((part) => ({
          ...part,
          // 兼容新旧格式的 content/promptLatex
          content: part.content || part.promptLatex || '',
          imagePath: part.imagePath || (part.part ? getProblemImagePath(problem.year, questionNumber, part.part) : undefined),
        })),
      };
    }
    
    // 旧格式：使用 findProblemImages
    return {
      ...problem,
      question: questionNumber, // 确保 question 字段存在
      imagePaths: problem.imagePaths || findProblemImages(problem.year, questionNumber),
      parts: problem.parts.map((part) => ({
        ...part,
        content: part.content || part.promptLatex || '',
        imagePath: part.imagePath || getProblemImagePath(problem.year, questionNumber, part.part),
      })),
    };
  }),
};

// 使用带图片的数据作为主要数据源
export const m2ProblemsData = m2ProblemsWithImages;

// 按年份分组（使用带图片的数据）
export const problemsByYear = m2ProblemsData.problems.reduce((acc, problem) => {
  const year = problem.year;
  if (!acc[year]) {
    acc[year] = [];
  }
  acc[year].push(problem);
  return acc;
}, {} as Record<string, typeof m2ProblemsData.problems>);

// 获取所有年份（降序）
export const allYears = Object.keys(problemsByYear).sort((a, b) => parseInt(b) - parseInt(a));

// 根据 ID 查找题目
export const getProblemById = (id: string) => {
  return m2ProblemsData.problems.find(p => p.id === id);
};

// 根据年份和题号查找题目
export const getProblemByYearAndQuestion = (year: string, question: string) => {
  return m2ProblemsData.problems.find(p => 
    p.year === year && (p.question === question || p.qno === question)
  );
};

// 按年份加载问题（支持新格式，合并 GPT 分析数据）
export const loadProblemsByYear = (year: string): Problem[] => {
  const yearData = loadProblemsByYearFile(year);
  if (yearData && yearData.problems) {
    // 尝试加载对应的 GPT 分析数据
    const analysisData = loadAnalysisByYearFile(year);
    
    return yearData.problems.map((problem): Problem => {
      // 先合并分析数据
      const mergedProblem = analysisData 
        ? mergeAnalysisIntoProblem(problem, analysisData)
        : problem;
      
      // 然后添加图片路径
      return {
        ...mergedProblem,
        imagePaths: mergedProblem.assets?.images?.map(img => `/m2-problems/${img}`) 
          || findProblemImages(mergedProblem.year, mergedProblem.qno || mergedProblem.question),
      };
    });
  }
  // Fallback: 从合并数据中筛选
  return m2ProblemsData.problems.filter(p => p.year === year);
};
