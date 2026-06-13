import { C1DetailedChapter } from './c1Notes'
import { C2_DETAILED_CHAPTERS } from './c2Notes'

export const B1_DETAILED_CHAPTERS: C1DetailedChapter[] = C2_DETAILED_CHAPTERS.map((chapter) => {
  if (chapter.number !== 1) {
    return chapter
  }

  return {
    ...chapter,
    sections: [
      ...chapter.sections,
      {
        title: '目標管理',
        titleEn: 'Management by Objectives (MBO)',
        points: [
          {
            zh: '目標管理是上司與下屬共同設定可量度目標，定期檢討進度，並根據達成結果評估表現的管理方法。',
            en: 'Management by Objectives is an approach in which managers and subordinates jointly set measurable goals, review progress regularly and evaluate performance according to results.',
          },
          {
            zh: '基本流程包括設定整體目標、把目標分拆至部門與員工、共同制定行動計劃、定期檢討，以及評估成果。',
            en: 'The basic process includes setting organisational goals, translating them into departmental and individual goals, jointly preparing action plans, reviewing progress and evaluating results.',
          },
          {
            zh: '目標管理可提高員工參與、動機及目標一致性，但需要時間溝通；若過度重視可量度短期結果，亦可能忽略質素或長期發展。',
            en: 'MBO may improve employee participation, motivation and goal alignment, but it requires time for communication and may neglect quality or long-term development if measurable short-term results are overemphasised.',
          },
        ],
      },
    ],
    terms: [
      ...chapter.terms,
      {
        term: '目標管理',
        termEn: 'Management by Objectives (MBO)',
        definition: '上司與下屬共同設定目標、檢討進度並按成果評估表現的管理方法。',
        definitionEn: 'A management approach in which managers and subordinates jointly set goals, review progress and evaluate performance based on results.',
      },
    ],
    examTips: [
      ...chapter.examTips,
      {
        zh: '分析目標管理時，應指出「共同設定目標」如何提高參與及動機，亦要考慮溝通時間及過度重視量化結果的限制。',
        en: 'When analysing MBO, explain how joint goal setting improves participation and motivation, while considering communication time and excessive focus on measurable results.',
      },
    ],
    questions: [
      ...chapter.questions,
      {
        question: '目標管理如何提高員工動機？',
        questionEn: 'How can Management by Objectives improve employee motivation?',
        answer: '員工參與設定自己的目標，較容易理解目標及認同工作方向，並能以明確標準觀察進度及成果。',
        answerEn: 'Employees participate in setting their goals, making them more likely to understand and accept the direction of work and monitor progress against clear standards.',
      },
    ],
  }
})
