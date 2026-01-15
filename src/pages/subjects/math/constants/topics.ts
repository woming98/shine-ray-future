/**
 * DSE Core Math 数学主题常量
 * 三大范畴：数与代数、度量图形与空间、数据处理
 */

import { MathTopic } from '../types';

export const MATH_TOPICS: Omit<MathTopic, 'progress'>[] = [
  {
    id: 'number-algebra',
    name: 'Number and Algebra',
    nameCN: '數與代數',
    icon: '🔢',
    description: '掌握数与代数的基本概念和运算技巧',
    subtopics: [
      {
        id: 'na-foundation-1',
        name: 'Basic Operations',
        nameCN: '基本運算',
        difficulty: 'foundation',
        description: '整数、分数、小数的四则运算',
      },
      {
        id: 'na-foundation-2',
        name: 'Algebraic Expressions',
        nameCN: '代數式',
        difficulty: 'foundation',
        description: '代数式的化简、展开和因式分解',
      },
      {
        id: 'na-foundation-3',
        name: 'Linear Equations',
        nameCN: '一次方程',
        difficulty: 'foundation',
        description: '一元一次方程和二元一次方程组',
      },
      {
        id: 'na-non-foundation-1',
        name: 'Quadratic Equations',
        nameCN: '二次方程',
        difficulty: 'non-foundation',
        description: '一元二次方程的解法与应用',
      },
      {
        id: 'na-non-foundation-2',
        name: 'Functions',
        nameCN: '函數',
        difficulty: 'non-foundation',
        description: '函数的概念、图像和性质',
      },
      {
        id: 'na-non-foundation-3',
        name: 'Sequences',
        nameCN: '數列',
        difficulty: 'non-foundation',
        description: '等差数列和等比数列',
      },
    ],
  },
  {
    id: 'measures-shape-space',
    name: 'Measures, Shape and Space',
    nameCN: '度量、圖形與空間',
    icon: '📐',
    description: '理解几何图形的性质和空间关系',
    subtopics: [
      {
        id: 'mss-foundation-1',
        name: 'Basic Geometry',
        nameCN: '基礎幾何',
        difficulty: 'foundation',
        description: '点、线、面的基本概念',
      },
      {
        id: 'mss-foundation-2',
        name: 'Triangles and Quadrilaterals',
        nameCN: '三角形與四邊形',
        difficulty: 'foundation',
        description: '三角形和四边形的性质和计算',
      },
      {
        id: 'mss-foundation-3',
        name: 'Circles',
        nameCN: '圓',
        difficulty: 'foundation',
        description: '圆的性质、周长和面积',
      },
      {
        id: 'mss-non-foundation-1',
        name: 'Coordinate Geometry',
        nameCN: '坐標幾何',
        difficulty: 'non-foundation',
        description: '坐标平面上的直线和曲线',
      },
      {
        id: 'mss-non-foundation-2',
        name: 'Trigonometry',
        nameCN: '三角學',
        difficulty: 'non-foundation',
        description: '三角函数和三角恒等式',
      },
      {
        id: 'mss-non-foundation-3',
        name: '3D Geometry',
        nameCN: '立體幾何',
        difficulty: 'non-foundation',
        description: '立体图形的表面积和体积',
      },
    ],
  },
  {
    id: 'data-handling',
    name: 'Data Handling',
    nameCN: '數據處理',
    icon: '📊',
    description: '掌握数据的收集、整理和分析方法',
    subtopics: [
      {
        id: 'dh-foundation-1',
        name: 'Data Collection',
        nameCN: '數據收集',
        difficulty: 'foundation',
        description: '数据的收集和整理方法',
      },
      {
        id: 'dh-foundation-2',
        name: 'Statistical Graphs',
        nameCN: '統計圖表',
        difficulty: 'foundation',
        description: '条形图、折线图、饼图等统计图表',
      },
      {
        id: 'dh-foundation-3',
        name: 'Measures of Central Tendency',
        nameCN: '集中趨勢',
        difficulty: 'foundation',
        description: '平均数、中位数、众数',
      },
      {
        id: 'dh-non-foundation-1',
        name: 'Probability',
        nameCN: '概率',
        difficulty: 'non-foundation',
        description: '概率的基本概念和计算',
      },
      {
        id: 'dh-non-foundation-2',
        name: 'Permutations and Combinations',
        nameCN: '排列與組合',
        difficulty: 'non-foundation',
        description: '排列组合的计算和应用',
      },
      {
        id: 'dh-non-foundation-3',
        name: 'Advanced Statistics',
        nameCN: '進階統計',
        difficulty: 'non-foundation',
        description: '标准差、方差等统计量',
      },
    ],
  },
];

// 获取主题ID的辅助函数
export const getTopicById = (id: string): MathTopic | undefined => {
  return MATH_TOPICS.find(topic => topic.id === id);
};

// 获取所有子主题
export const getAllSubtopics = () => {
  return MATH_TOPICS.flatMap(topic => 
    topic.subtopics.map(subtopic => ({
      ...subtopic,
      topicId: topic.id,
      topicName: topic.nameCN,
    }))
  );
};
