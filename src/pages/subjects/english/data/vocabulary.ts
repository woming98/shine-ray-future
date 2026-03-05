/**
 * 词汇数据（示例）
 */

import { VocabularyItem } from '../types';

export const vocabularyItems: VocabularyItem[] = [
  {
    id: 'vocab-001',
    word: 'significant',
    phonetic: '/sɪɡˈnɪfɪkənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: '重要的，重大的',
        example: 'Reading has a significant impact on language learning.',
      },
      {
        meaning: '显著的',
        example: 'There was a significant increase in test scores.',
      },
    ],
    difficulty: 'medium',
    topic: 'academic',
    tags: ['formal', 'academic'],
  },
  {
    id: 'vocab-002',
    word: 'enhance',
    phonetic: '/ɪnˈhæns/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: '提高，增强',
        example: 'Regular exercise can enhance your health.',
      },
    ],
    difficulty: 'medium',
    topic: 'general',
    tags: ['formal'],
  },
  {
    id: 'vocab-003',
    word: 'comprehend',
    phonetic: '/ˌkɒmprɪˈhend/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: '理解，领会',
        example: 'It is difficult to comprehend such complex ideas.',
      },
    ],
    difficulty: 'hard',
    topic: 'academic',
    tags: ['formal', 'academic'],
  },
];
