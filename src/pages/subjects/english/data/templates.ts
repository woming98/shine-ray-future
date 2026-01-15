/**
 * 写作模板数据
 */

import { WritingTemplate } from '../types';

export const writingTemplates: WritingTemplate[] = [
  {
    id: 'template-essay',
    type: 'essay',
    name: 'Argumentative Essay',
    nameCN: '議論文',
    structure: [
      {
        section: 'Introduction',
        description: 'Introduce the topic and state your thesis',
        example: 'In recent years, [topic] has become a controversial issue. While some people believe..., I argue that...',
      },
      {
        section: 'Body Paragraph 1',
        description: 'Present your first main argument with supporting evidence',
        example: 'First and foremost, [argument]. For example, [evidence]. This demonstrates that...',
      },
      {
        section: 'Body Paragraph 2',
        description: 'Present your second main argument',
        example: 'Moreover, [argument]. Research shows that [evidence]...',
      },
      {
        section: 'Body Paragraph 3',
        description: 'Address counterarguments or present a third point',
        example: 'Some may argue that [counterargument]. However, [rebuttal]...',
      },
      {
        section: 'Conclusion',
        description: 'Summarize your arguments and restate your thesis',
        example: 'In conclusion, [restate thesis]. Therefore, [final statement].',
      },
    ],
    commonPhrases: [
      'It is widely believed that...',
      'There is no doubt that...',
      'It is clear that...',
      'One cannot deny that...',
      'It goes without saying that...',
    ],
    connectives: [
      'First and foremost',
      'Moreover',
      'Furthermore',
      'In addition',
      'However',
      'On the other hand',
      'Nevertheless',
      'In conclusion',
      'To sum up',
      'Therefore',
    ],
  },
  {
    id: 'template-letter',
    type: 'letter',
    name: 'Formal Letter',
    nameCN: '正式書信',
    structure: [
      {
        section: 'Salutation',
        description: 'Greet the recipient formally',
        example: 'Dear Sir/Madam, or Dear [Name],',
      },
      {
        section: 'Opening',
        description: 'State the purpose of your letter',
        example: 'I am writing to [purpose]...',
      },
      {
        section: 'Body Paragraphs',
        description: 'Provide details and explanations',
        example: 'I would like to [request/suggest/complain]...',
      },
      {
        section: 'Closing',
        description: 'End politely and offer further contact',
        example: 'I look forward to hearing from you.',
      },
      {
        section: 'Signature',
        description: 'Sign off formally',
        example: 'Yours sincerely, [Your Name]',
      },
    ],
    commonPhrases: [
      'I am writing to...',
      'I would like to...',
      'I would be grateful if...',
      'I look forward to...',
      'Thank you for your time and consideration.',
    ],
    connectives: [
      'Furthermore',
      'In addition',
      'However',
      'Therefore',
      'As a result',
    ],
  },
  {
    id: 'template-report',
    type: 'report',
    name: 'Report',
    nameCN: '報告',
    structure: [
      {
        section: 'Title',
        description: 'Clear and descriptive title',
        example: 'Report on [Topic]',
      },
      {
        section: 'Introduction',
        description: 'Background and purpose',
        example: 'This report aims to [purpose]...',
      },
      {
        section: 'Findings',
        description: 'Present data and observations',
        example: 'The survey revealed that...',
      },
      {
        section: 'Analysis',
        description: 'Interpret the findings',
        example: 'This suggests that...',
      },
      {
        section: 'Recommendations',
        description: 'Suggest actions',
        example: 'It is recommended that...',
      },
      {
        section: 'Conclusion',
        description: 'Summarize key points',
        example: 'In conclusion, [summary]...',
      },
    ],
    commonPhrases: [
      'This report aims to...',
      'The findings indicate...',
      'It is recommended that...',
      'In conclusion...',
    ],
    connectives: [
      'According to',
      'Furthermore',
      'However',
      'Therefore',
      'As a result',
    ],
  },
];
