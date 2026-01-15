/**
 * 口语题目数据（占位）
 */

import { SpeakingPrompt } from '../types';

export const speakingPrompts: SpeakingPrompt[] = [
  {
    id: 'speaking-001',
    type: 'group-discussion',
    topic: 'School Life',
    prompt: 'Discuss with your group: What are the advantages and disadvantages of having longer school hours?',
    timeLimit: 300, // 5分钟
    tips: [
      'Listen carefully to others\' opinions',
      'Express your ideas clearly',
      'Use appropriate connectives',
      'Ask follow-up questions',
    ],
    difficulty: 'medium',
  },
  {
    id: 'speaking-002',
    type: 'individual-response',
    topic: 'Technology',
    prompt: 'Do you think social media has more positive or negative effects on teenagers? Explain your answer.',
    timeLimit: 120, // 2分钟
    tips: [
      'State your opinion clearly',
      'Provide reasons and examples',
      'Use a variety of vocabulary',
      'Speak at a natural pace',
    ],
    difficulty: 'medium',
  },
  {
    id: 'speaking-003',
    type: 'presentation',
    topic: 'Environment',
    prompt: 'Give a 2-minute presentation about ways to protect the environment in your daily life.',
    timeLimit: 120,
    tips: [
      'Organize your ideas logically',
      'Use signposting language',
      'Maintain eye contact',
      'Speak clearly and confidently',
    ],
    difficulty: 'hard',
  },
];
