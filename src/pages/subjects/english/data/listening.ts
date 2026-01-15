/**
 * 听力材料数据（占位）
 */

import { ListeningMaterial, ListeningQuestion } from '../types';

export const listeningMaterials: ListeningMaterial[] = [
  {
    id: 'listening-001',
    title: 'School Announcement',
    audioUrl: '/audio/listening-001.mp3', // 占位URL
    transcript: `
Good morning, students. This is a school announcement. 
Today's lunch menu includes chicken rice, fish and chips, and vegetarian pasta. 
The school library will be closed this afternoon for maintenance. 
Please remember to return your library books before 3 PM.
    `.trim(),
    difficulty: 'easy',
    duration: 60, // 秒
    dataFile: {
      id: 'df-001',
      title: 'Lunch Menu',
      type: 'table',
      content: {
        headers: ['Item', 'Price'],
        rows: [
          ['Chicken Rice', '$25'],
          ['Fish and Chips', '$30'],
          ['Vegetarian Pasta', '$28'],
        ],
      },
      description: 'Today\'s lunch menu',
    },
  },
  {
    id: 'listening-002',
    title: 'Weather Forecast',
    audioUrl: '/audio/listening-002.mp3',
    transcript: `
The weather forecast for today shows sunny skies in the morning with temperatures around 25 degrees Celsius. 
In the afternoon, there will be light clouds, but no rain is expected. 
Tomorrow will be slightly cooler with a chance of afternoon showers.
    `.trim(),
    difficulty: 'medium',
    duration: 45,
  },
];

// 导出听力题目
export const listeningQuestions: ListeningQuestion[] = [
  {
    id: 'lq-001',
    materialId: 'listening-001',
    type: 'choice',
    question: 'What time should students return library books?',
    options: ['Before 2 PM', 'Before 3 PM', 'Before 4 PM', 'Before 5 PM'],
    answer: 'Before 3 PM',
    explanation: 'The announcement states "Please remember to return your library books before 3 PM."',
    difficulty: 'easy',
    timestamp: 50,
  },
  {
    id: 'lq-002',
    materialId: 'listening-001',
    type: 'fill',
    question: 'The school library will be closed this afternoon for _______.',
    answer: ['maintenance'],
    explanation: 'The announcement mentions "The school library will be closed this afternoon for maintenance."',
    difficulty: 'easy',
    timestamp: 30,
  },
];
