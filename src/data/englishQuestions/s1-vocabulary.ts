/**
 * 中一 (S1) 词汇量测试题目
 * 包含：同义词、反义词、单词含义、上下文填词
 */

import type { VocabularyQuestion } from './types'

export const s1VocabularyQuestions: VocabularyQuestion[] = [
  // ========== 同义词 (Synonyms) ==========
  {
    id: 'v1-syn-001',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "happy":',
    word: 'happy',
    options: ['sad', 'excited', 'joyful', 'tired'],
    answer: 'joyful',
    explanation: '"Joyful" means feeling or showing great happiness, which is similar to "happy".',
    difficulty: 'easy'
  },
  {
    id: 'v1-syn-002',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "big":',
    word: 'big',
    options: ['tiny', 'large', 'small', 'narrow'],
    answer: 'large',
    explanation: '"Large" means of great size, which is the same meaning as "big".',
    difficulty: 'easy'
  },
  {
    id: 'v1-syn-003',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "fast":',
    word: 'fast',
    options: ['slow', 'quick', 'lazy', 'heavy'],
    answer: 'quick',
    explanation: '"Quick" means moving or doing something at high speed, same as "fast".',
    difficulty: 'easy'
  },
  {
    id: 'v1-syn-004',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "beautiful":',
    word: 'beautiful',
    options: ['ugly', 'pretty', 'boring', 'plain'],
    answer: 'pretty',
    explanation: '"Pretty" means attractive or beautiful in appearance.',
    difficulty: 'easy'
  },
  {
    id: 'v1-syn-005',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "smart":',
    word: 'smart',
    options: ['stupid', 'intelligent', 'slow', 'weak'],
    answer: 'intelligent',
    explanation: '"Intelligent" means having or showing high mental capacity, similar to "smart".',
    difficulty: 'easy'
  },
  {
    id: 'v1-syn-006',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "angry":',
    word: 'angry',
    options: ['calm', 'furious', 'peaceful', 'quiet'],
    answer: 'furious',
    explanation: '"Furious" means extremely angry.',
    difficulty: 'medium'
  },
  {
    id: 'v1-syn-007',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "start":',
    word: 'start',
    options: ['finish', 'begin', 'end', 'stop'],
    answer: 'begin',
    explanation: '"Begin" means to start or commence something.',
    difficulty: 'easy'
  },
  {
    id: 'v1-syn-008',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "difficult":',
    word: 'difficult',
    options: ['easy', 'simple', 'hard', 'clear'],
    answer: 'hard',
    explanation: '"Hard" can mean difficult or challenging.',
    difficulty: 'easy'
  },
  {
    id: 'v1-syn-009',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "scared":',
    word: 'scared',
    options: ['brave', 'afraid', 'bold', 'confident'],
    answer: 'afraid',
    explanation: '"Afraid" means feeling fear or anxiety, same as "scared".',
    difficulty: 'easy'
  },
  {
    id: 'v1-syn-010',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "wealthy":',
    word: 'wealthy',
    options: ['poor', 'rich', 'cheap', 'expensive'],
    answer: 'rich',
    explanation: '"Rich" means having a lot of money or valuable possessions, same as "wealthy".',
    difficulty: 'medium'
  },
  {
    id: 'v1-syn-011',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "tiny":',
    word: 'tiny',
    options: ['huge', 'massive', 'miniature', 'giant'],
    answer: 'miniature',
    explanation: '"Miniature" means very small, similar to "tiny".',
    difficulty: 'medium'
  },
  {
    id: 'v1-syn-012',
    grade: 'S1',
    type: 'synonym',
    question: 'Choose the word that means the same as "fix":',
    word: 'fix',
    options: ['break', 'repair', 'damage', 'destroy'],
    answer: 'repair',
    explanation: '"Repair" means to fix something that is broken or damaged.',
    difficulty: 'easy'
  },

  // ========== 反义词 (Antonyms) ==========
  {
    id: 'v1-ant-001',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "hot":',
    word: 'hot',
    options: ['warm', 'cold', 'wet', 'dry'],
    answer: 'cold',
    explanation: '"Cold" is the opposite of "hot" in terms of temperature.',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-002',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "old":',
    word: 'old',
    options: ['ancient', 'young', 'aged', 'elderly'],
    answer: 'young',
    explanation: '"Young" is the opposite of "old" in terms of age.',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-003',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "light":',
    word: 'light',
    options: ['bright', 'dark', 'sunny', 'clear'],
    answer: 'dark',
    explanation: '"Dark" is the opposite of "light" in terms of brightness.',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-004',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "tall":',
    word: 'tall',
    options: ['high', 'short', 'long', 'wide'],
    answer: 'short',
    explanation: '"Short" is the opposite of "tall" in terms of height.',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-005',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "cheap":',
    word: 'cheap',
    options: ['free', 'expensive', 'low', 'discount'],
    answer: 'expensive',
    explanation: '"Expensive" means costing a lot of money, which is the opposite of "cheap".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-006',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "empty":',
    word: 'empty',
    options: ['vacant', 'hollow', 'full', 'blank'],
    answer: 'full',
    explanation: '"Full" means containing as much as possible, opposite of "empty".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-007',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "noisy":',
    word: 'noisy',
    options: ['loud', 'quiet', 'sound', 'music'],
    answer: 'quiet',
    explanation: '"Quiet" means making little or no noise, opposite of "noisy".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-008',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "hard":',
    word: 'hard',
    options: ['tough', 'soft', 'strong', 'firm'],
    answer: 'soft',
    explanation: '"Soft" means not hard or firm to touch, opposite of "hard".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-009',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "clean":',
    word: 'clean',
    options: ['pure', 'dirty', 'tidy', 'neat'],
    answer: 'dirty',
    explanation: '"Dirty" means covered with dirt or impurities, opposite of "clean".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-010',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "early":',
    word: 'early',
    options: ['soon', 'late', 'quick', 'fast'],
    answer: 'late',
    explanation: '"Late" means after the expected time, opposite of "early".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-011',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "win":',
    word: 'win',
    options: ['gain', 'lose', 'earn', 'achieve'],
    answer: 'lose',
    explanation: '"Lose" means to fail to win, opposite of "win".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-012',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "remember":',
    word: 'remember',
    options: ['recall', 'forget', 'remind', 'memorize'],
    answer: 'forget',
    explanation: '"Forget" means to fail to remember, opposite of "remember".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ant-013',
    grade: 'S1',
    type: 'antonym',
    question: 'Choose the word that means the OPPOSITE of "polite":',
    word: 'polite',
    options: ['kind', 'rude', 'nice', 'gentle'],
    answer: 'rude',
    explanation: '"Rude" means showing bad manners, opposite of "polite".',
    difficulty: 'medium'
  },

  // ========== 单词含义 (Word Meaning) ==========
  {
    id: 'v1-mean-001',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "enormous" mean?',
    word: 'enormous',
    options: ['very small', 'very large', 'very fast', 'very slow'],
    answer: 'very large',
    explanation: '"Enormous" means extremely large in size or amount.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-002',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "delicious" mean?',
    word: 'delicious',
    options: ['tastes bad', 'tastes very good', 'looks ugly', 'smells bad'],
    answer: 'tastes very good',
    explanation: '"Delicious" means having a very pleasant taste.',
    difficulty: 'easy'
  },
  {
    id: 'v1-mean-003',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "ancient" mean?',
    word: 'ancient',
    options: ['very new', 'very old', 'very young', 'very modern'],
    answer: 'very old',
    explanation: '"Ancient" means belonging to a period of time long ago.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-004',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "exhausted" mean?',
    word: 'exhausted',
    options: ['very happy', 'very tired', 'very excited', 'very angry'],
    answer: 'very tired',
    explanation: '"Exhausted" means completely tired or worn out.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-005',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "curious" mean?',
    word: 'curious',
    options: ['wanting to know more', 'feeling sleepy', 'being lazy', 'feeling sad'],
    answer: 'wanting to know more',
    explanation: '"Curious" means eager to learn or know something.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-006',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "generous" mean?',
    word: 'generous',
    options: ['selfish', 'willing to give', 'mean', 'greedy'],
    answer: 'willing to give',
    explanation: '"Generous" means willing to give money, help, or time freely.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-007',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "brilliant" mean?',
    word: 'brilliant',
    options: ['very dull', 'very stupid', 'very bright or clever', 'very dark'],
    answer: 'very bright or clever',
    explanation: '"Brilliant" means very bright, intelligent, or impressive.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-008',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "fragile" mean?',
    word: 'fragile',
    options: ['strong', 'easily broken', 'heavy', 'solid'],
    answer: 'easily broken',
    explanation: '"Fragile" means easily broken or damaged.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-009',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "purchase" mean?',
    word: 'purchase',
    options: ['to sell', 'to buy', 'to throw', 'to find'],
    answer: 'to buy',
    explanation: '"Purchase" means to buy something.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-010',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "vanish" mean?',
    word: 'vanish',
    options: ['to appear', 'to disappear', 'to grow', 'to stay'],
    answer: 'to disappear',
    explanation: '"Vanish" means to disappear suddenly.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-011',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "confident" mean?',
    word: 'confident',
    options: ['sure of oneself', 'feeling scared', 'being shy', 'feeling worried'],
    answer: 'sure of oneself',
    explanation: '"Confident" means feeling sure about yourself and your abilities.',
    difficulty: 'medium'
  },
  {
    id: 'v1-mean-012',
    grade: 'S1',
    type: 'meaning',
    question: 'What does "ordinary" mean?',
    word: 'ordinary',
    options: ['special', 'normal', 'unique', 'rare'],
    answer: 'normal',
    explanation: '"Ordinary" means with no special or distinctive features; normal.',
    difficulty: 'easy'
  },

  // ========== 上下文填词 (Context Clues) ==========
  {
    id: 'v1-ctx-001',
    grade: 'S1',
    type: 'context',
    question: 'The weather is very ____ today. It\'s raining heavily.',
    word: 'stormy',
    options: ['sunny', 'stormy', 'dry', 'clear'],
    answer: 'stormy',
    explanation: 'When it rains heavily, the weather is "stormy".',
    difficulty: 'medium'
  },
  {
    id: 'v1-ctx-002',
    grade: 'S1',
    type: 'context',
    question: 'She was very ____ after running for 30 minutes without stopping.',
    word: 'tired',
    options: ['energetic', 'tired', 'fresh', 'awake'],
    answer: 'tired',
    explanation: 'Running for a long time makes people feel "tired".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-003',
    grade: 'S1',
    type: 'context',
    question: 'The elephant is a very ____ animal. It can weigh up to 6,000 kg.',
    word: 'heavy',
    options: ['light', 'heavy', 'small', 'thin'],
    answer: 'heavy',
    explanation: 'With a weight of up to 6,000 kg, elephants are very "heavy".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-004',
    grade: 'S1',
    type: 'context',
    question: 'Please be ____ in the library. Other people are studying.',
    word: 'quiet',
    options: ['loud', 'noisy', 'quiet', 'active'],
    answer: 'quiet',
    explanation: 'In libraries, people should be "quiet" so others can study.',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-005',
    grade: 'S1',
    type: 'context',
    question: 'The test was very ____. Nobody in the class got a perfect score.',
    word: 'difficult',
    options: ['easy', 'simple', 'difficult', 'boring'],
    answer: 'difficult',
    explanation: 'If nobody got a perfect score, the test must have been "difficult".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-006',
    grade: 'S1',
    type: 'context',
    question: 'Tom felt ____ when he won first place in the competition.',
    word: 'proud',
    options: ['sad', 'proud', 'angry', 'scared'],
    answer: 'proud',
    explanation: 'Winning first place typically makes someone feel "proud".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-007',
    grade: 'S1',
    type: 'context',
    question: 'The mountain is very ____. It takes two days to climb to the top.',
    word: 'high',
    options: ['low', 'short', 'high', 'flat'],
    answer: 'high',
    explanation: 'A mountain that takes two days to climb must be very "high".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-008',
    grade: 'S1',
    type: 'context',
    question: 'Mary is very ____. She always helps others without asking for anything in return.',
    word: 'kind',
    options: ['mean', 'selfish', 'kind', 'rude'],
    answer: 'kind',
    explanation: 'Someone who always helps others is "kind".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-009',
    grade: 'S1',
    type: 'context',
    question: 'The movie was so ____ that everyone in the cinema was laughing.',
    word: 'funny',
    options: ['boring', 'sad', 'scary', 'funny'],
    answer: 'funny',
    explanation: 'A movie that makes everyone laugh is "funny".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-010',
    grade: 'S1',
    type: 'context',
    question: 'He felt ____ because he forgot to bring his homework to school.',
    word: 'worried',
    options: ['happy', 'worried', 'excited', 'relaxed'],
    answer: 'worried',
    explanation: 'Forgetting homework usually makes students feel "worried".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-011',
    grade: 'S1',
    type: 'context',
    question: 'The room was completely ____ because all the lights were turned off.',
    word: 'dark',
    options: ['bright', 'dark', 'colorful', 'warm'],
    answer: 'dark',
    explanation: 'Without lights, a room becomes "dark".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-012',
    grade: 'S1',
    type: 'context',
    question: 'She was ____ to see her grandmother after many years.',
    word: 'excited',
    options: ['bored', 'sad', 'excited', 'angry'],
    answer: 'excited',
    explanation: 'Meeting loved ones after a long time typically makes people feel "excited".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-013',
    grade: 'S1',
    type: 'context',
    question: 'The soup is too ____. I need to add some water.',
    word: 'salty',
    options: ['sweet', 'salty', 'sour', 'fresh'],
    answer: 'salty',
    explanation: 'Adding water to soup usually means it is too "salty".',
    difficulty: 'medium'
  },
  {
    id: 'v1-ctx-014',
    grade: 'S1',
    type: 'context',
    question: 'The old man walked very ____ because his legs hurt.',
    word: 'slowly',
    options: ['quickly', 'slowly', 'happily', 'loudly'],
    answer: 'slowly',
    explanation: 'Pain in the legs would make someone walk "slowly".',
    difficulty: 'easy'
  },
  {
    id: 'v1-ctx-015',
    grade: 'S1',
    type: 'context',
    question: 'This cake is ____! The baker must be very talented.',
    word: 'delicious',
    options: ['terrible', 'delicious', 'awful', 'bland'],
    answer: 'delicious',
    explanation: 'A talented baker would make a cake that is "delicious".',
    difficulty: 'easy'
  }
]
