/**
 * 英文模块数据汇总
 * 从现有 englishQuestions 迁移并扩展
 */

// 复用现有数据
export {
  s1ReadingPassages,
  s1GrammarQuestions,
  s1VocabularyQuestions,
  s1WritingTasks,
} from '../../../../data/englishQuestions/index';

// 导出新数据
export { listeningMaterials, listeningQuestions } from './listening';
export { speakingPrompts } from './speaking';
export { sampleEssays } from './samples';
export { writingTemplates } from './templates';
export { vocabularyItems } from './vocabulary';
