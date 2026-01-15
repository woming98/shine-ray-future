/**
 * DSE English 英文学习主题常量
 * 四大核心技能：Reading, Writing, Listening, Speaking
 */

import { EnglishTopic } from '../types';

export const ENGLISH_TOPICS: Omit<EnglishTopic, 'progress'>[] = [
  {
    id: 'reading',
    name: 'Reading',
    nameCN: '閱讀理解',
    icon: '📖',
    description: '提升阅读理解能力，掌握各种题型技巧',
    subtopics: [
      {
        id: 'reading-main-idea',
        name: 'Main Idea',
        nameCN: '主旨大意',
        description: '理解文章的主要观点和中心思想',
      },
      {
        id: 'reading-detail',
        name: 'Detail Questions',
        nameCN: '細節理解',
        description: '找出文章中的具体信息和细节',
      },
      {
        id: 'reading-inference',
        name: 'Inference',
        nameCN: '推理判斷',
        description: '根据文章内容进行推理和判断',
      },
      {
        id: 'reading-vocabulary',
        name: 'Vocabulary in Context',
        nameCN: '詞彙理解',
        description: '根据上下文理解词汇含义',
      },
      {
        id: 'reading-summary',
        name: 'Summary',
        nameCN: '摘要填空',
        description: '理解文章结构，完成摘要填空',
      },
    ],
  },
  {
    id: 'writing',
    name: 'Writing',
    nameCN: '寫作',
    icon: '✍️',
    description: '掌握各种写作体裁，提升写作技巧',
    subtopics: [
      {
        id: 'writing-essay',
        name: 'Essay Writing',
        nameCN: '議論文',
        description: '学习议论文的结构和写作技巧',
      },
      {
        id: 'writing-letter',
        name: 'Letter Writing',
        nameCN: '書信',
        description: '掌握正式和非正式书信的格式',
      },
      {
        id: 'writing-report',
        name: 'Report Writing',
        nameCN: '報告',
        description: '学习报告的写作结构和语言特点',
      },
      {
        id: 'writing-article',
        name: 'Article Writing',
        nameCN: '文章',
        description: '掌握文章写作的技巧和风格',
      },
      {
        id: 'writing-story',
        name: 'Story Writing',
        nameCN: '故事',
        description: '学习故事写作的要素和技巧',
      },
    ],
  },
  {
    id: 'listening',
    name: 'Listening',
    nameCN: '聆聽',
    icon: '🎧',
    description: '提升听力理解能力，掌握综合技能',
    subtopics: [
      {
        id: 'listening-main-idea',
        name: 'Main Idea',
        nameCN: '主旨理解',
        description: '理解听力材料的主要观点',
      },
      {
        id: 'listening-detail',
        name: 'Detail Information',
        nameCN: '細節信息',
        description: '捕捉听力材料中的具体信息',
      },
      {
        id: 'listening-data-file',
        name: 'Data File',
        nameCN: '資料處理',
        description: '处理 Data File，整合信息',
      },
      {
        id: 'listening-note-taking',
        name: 'Note-taking',
        nameCN: '筆記技巧',
        description: '学习有效的笔记技巧',
      },
    ],
  },
  {
    id: 'speaking',
    name: 'Speaking',
    nameCN: '口語',
    icon: '🎤',
    description: '提升口语表达能力和发音准确性',
    subtopics: [
      {
        id: 'speaking-group',
        name: 'Group Discussion',
        nameCN: '小組討論',
        description: '学习小组讨论的技巧和策略',
      },
      {
        id: 'speaking-individual',
        name: 'Individual Response',
        nameCN: '個人回應',
        description: '提升个人回应问题的能力',
      },
      {
        id: 'speaking-presentation',
        name: 'Presentation',
        nameCN: '演講',
        description: '学习演讲的结构和表达技巧',
      },
      {
        id: 'speaking-pronunciation',
        name: 'Pronunciation',
        nameCN: '發音',
        description: '改善发音准确性和流暢度',
      },
    ],
  },
];

// 获取主题ID的辅助函数
export const getTopicById = (id: string): EnglishTopic | undefined => {
  return ENGLISH_TOPICS.find(topic => topic.id === id);
};

// 获取所有子主题
export const getAllSubtopics = () => {
  return ENGLISH_TOPICS.flatMap(topic => 
    topic.subtopics.map(subtopic => ({
      ...subtopic,
      topicId: topic.id,
      topicName: topic.nameCN,
    }))
  );
};
