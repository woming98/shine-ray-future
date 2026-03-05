/**
 * 中一 (S1) 写作题目
 * 
 * 添加新题目：复制下面的模板，修改内容即可
 */

import type { WritingTask } from './types'

export const s1WritingTasks: WritingTask[] = [
  // ========== 示例写作题 1 - Email ==========
  {
    id: 's1-w-001',
    grade: 'S1',
    type: 'email',
    title: 'Email to a Friend',
    prompt: `You are Tom. Write an email to your friend Mary to invite her to your birthday party.

In your email, you should:
- Tell her when and where the party is
- Tell her what activities there will be
- Ask her to reply`,
    wordLimit: { min: 80, max: 120 },
    tips: [
      '使用正确的 email 格式（Dear..., From...）',
      '包含所有要求的内容点',
      '语气要友好、热情',
      '检查时态和拼写'
    ],
    sampleAnswer: `Dear Mary,

How are you? I am writing to invite you to my birthday party!

My birthday party will be on Saturday, 15th December at my home. The party will start at 3:00 p.m. My address is Flat 5A, Happy Building, Causeway Bay.

There will be many fun activities at the party. We will play games, watch movies and eat delicious food. My mum will make a big chocolate cake. I hope you can come!

Please reply and let me know if you can come. I really hope to see you there!

From,
Tom`
  },

  // ========== 示例写作题 2 - Short Essay ==========
  {
    id: 's1-w-002',
    grade: 'S1',
    type: 'essay',
    title: 'My Favourite Hobby',
    prompt: `Write a short essay about your favourite hobby.

You should include:
- What your hobby is
- When and how often you do it
- Why you like it
- How it makes you feel`,
    wordLimit: { min: 100, max: 150 },
    tips: [
      '开头要吸引读者注意',
      '用具体例子说明',
      '使用不同的形容词描述感受',
      '结尾要有总结'
    ]
  },

  // ========== 添加更多题目：复制上面的模板 ==========
  // {
  //   id: 's1-w-003',
  //   grade: 'S1',
  //   type: 'letter',
  //   title: '标题',
  //   prompt: `写作要求...`,
  //   wordLimit: { min: 80, max: 120 },
  //   tips: ['提示1', '提示2'],
  //   sampleAnswer: `范文...`
  // },
]
