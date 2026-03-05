/**
 * 范文库数据（占位）
 */

import { SampleEssay } from '../types';

export const sampleEssays: SampleEssay[] = [
  {
    id: 'sample-001',
    title: 'The Importance of Reading',
    type: 'essay',
    topic: 'Education',
    content: `
Reading is one of the most important skills we can develop in our lives. It opens doors to knowledge, imagination, and understanding. In this essay, I will discuss why reading is essential for personal growth and academic success.

First and foremost, reading broadens our horizons. When we read books, articles, or even online content, we encounter new ideas, perspectives, and information that we might not have encountered otherwise. This exposure to diverse viewpoints helps us become more open-minded and empathetic individuals.

Moreover, reading significantly improves our language skills. Through reading, we naturally learn new vocabulary, understand sentence structures, and develop a better sense of grammar. This is particularly important for students who are learning English as a second language.

Furthermore, reading enhances our critical thinking abilities. When we read, we are constantly analyzing, evaluating, and synthesizing information. This mental exercise strengthens our ability to think critically and make informed decisions.

In conclusion, reading is not just a hobby but a fundamental skill that contributes to our personal and academic development. Therefore, we should make reading a regular part of our daily routine.
    `.trim(),
    score: 18, // 1-21
    highlights: [
      {
        type: 'sentence',
        text: 'Reading is one of the most important skills we can develop in our lives.',
        description: 'Strong opening statement that clearly states the main idea',
      },
      {
        type: 'phrase',
        text: 'broadens our horizons',
        description: 'Effective use of idiomatic expression',
      },
      {
        type: 'connective',
        text: 'First and foremost',
        description: 'Clear signposting for the first argument',
      },
      {
        type: 'connective',
        text: 'Moreover',
        description: 'Good transition to the next point',
      },
      {
        type: 'connective',
        text: 'Furthermore',
        description: 'Effective addition of another argument',
      },
      {
        type: 'connective',
        text: 'In conclusion',
        description: 'Clear conclusion signal',
      },
    ],
    difficulty: 'medium',
    year: 2024,
  },
  {
    id: 'sample-002',
    title: 'A Letter to the Principal',
    type: 'letter',
    topic: 'School Facilities',
    content: `
Dear Principal,

I am writing to express my concern about the lack of study spaces in our school library. As a student who frequently uses the library for group projects and individual study, I have noticed that the available seating is often insufficient, especially during exam periods.

I would like to suggest several solutions to address this issue. First, we could extend the library opening hours to accommodate more students. Second, we could add more study tables and chairs to maximize the use of available space. Finally, we could create a quiet study zone separate from the group discussion area.

I believe these improvements would greatly benefit all students and enhance our learning environment. I would be happy to discuss these suggestions further at your convenience.

Thank you for your time and consideration.

Yours sincerely,
[Student Name]
    `.trim(),
    score: 16,
    highlights: [
      {
        type: 'phrase',
        text: 'I am writing to express my concern',
        description: 'Formal letter opening',
      },
      {
        type: 'connective',
        text: 'First',
        description: 'Clear enumeration of suggestions',
      },
      {
        type: 'connective',
        text: 'Finally',
        description: 'Conclusion of suggestions',
      },
    ],
    difficulty: 'easy',
  },
];
