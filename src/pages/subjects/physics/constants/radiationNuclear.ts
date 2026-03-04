import { Exercise } from '../types';

export const RADIATION_NUCLEAR_EXERCISES: Exercise[] = [
  {
    id: 'rad-001',
    type: 'multiple_choice',
    question:
      'In a beta decay, element X, having a half-life of 3 days, decays into a stable element Y. If the initial mass of X is 4 g, what will be the masses of X and Y after 6 days?',
    options: ['0 g, 4 g', '1 g, 3 g', '2 g, 2 g', '3 g, 1 g'],
    answer: '1 g, 3 g',
    explanation:
      'Two half-lives pass in 6 days. The mass of X changes from 4 g to 2 g and then to 1 g. Since the total mass is conserved in this question setup, the mass of Y is 4 g - 1 g = 3 g.',
    difficulty: 1,
    points: 10,
    hints: ['6 days is 2 half-lives', 'Halve the mass of X twice', 'Then subtract from the initial 4 g'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-002',
    type: 'multiple_choice',
    question:
      'If the three kinds of radiations alpha, beta and gamma are arranged in ascending order of their ionization power, their order is',
    options: ['alpha, beta, gamma', 'alpha, gamma, beta', 'beta, alpha, gamma', 'gamma, beta, alpha'],
    answer: 'gamma, beta, alpha',
    explanation:
      'Alpha has the strongest ionizing power, beta is intermediate, and gamma is the weakest. Therefore the ascending order is gamma, beta, alpha.',
    difficulty: 1,
    points: 10,
    hints: ['Remember the ionization ranking', 'Alpha ionizes most strongly', 'Gamma ionizes least'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-003',
    type: 'multiple_choice',
    question:
      'A radioactive substance has a half-life of 10 minutes. Which of the following statements is/are correct?\n\n(1) All the atoms of the radioactive substance will split into 4 equal parts in 5 minutes.\n(2) All the atoms of the radioactive substance will decay completely in 20 minutes.\n(3) All the atoms of the radioactive substance will decay within 10 minutes.',
    options: ['(1) only', '(2) only', '(3) only', 'None of them'],
    answer: 'None of them',
    explanation:
      'Radioactive decay is not a splitting of every atom into equal parts. After 20 minutes, which is 2 half-lives, 25% of the undecayed nuclei still remain. A radioactive sample also does not decay completely after one half-life.',
    difficulty: 2,
    points: 15,
    hints: ['A half-life leaves 50% undecayed', 'After 2 half-lives, 25% remains', 'Decay is probabilistic, not literal splitting'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-004',
    type: 'multiple_choice',
    question:
      'The half-life of a radioactive substance is 8 hours. Its initial mass is 3 g. Find the amount of the radioactive substance remaining unchanged after 24 hours.',
    options: ['0.375 g', '0.75 g', '1 g', '2 g'],
    answer: '0.375 g',
    explanation:
      '24 hours is 3 half-lives. The mass changes as 3 g -> 1.5 g -> 0.75 g -> 0.375 g.',
    difficulty: 1,
    points: 10,
    hints: ['24 hours is 3 half-lives', 'Halve the remaining mass three times'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-005',
    type: 'multiple_choice',
    question:
      'S is a radioactive source which emits radiation as it decays. If all the radiation emitted is bent by a magnetic field in the direction shown, then the radiation consists of',
    options: ['alpha and gamma only', 'beta and gamma only', 'alpha only', 'beta only'],
    answer: 'beta only',
    explanation:
      'Gamma radiation is not deflected by a magnetic field because it is uncharged. The given deflection indicates negatively charged radiation, so the emitted radiation must be beta only.',
    difficulty: 2,
    points: 15,
    hints: ['Gamma is not deflected', 'Use the deflection to infer the sign of charge', 'Beta radiation is negatively charged'],
    sectionId: 'radiation-radioactivity',
    imagePaths: ['/physics/exercises/radiation-radioactivity/rad-005-question.png'],
  },
  {
    id: 'rad-006',
    type: 'multiple_choice',
    question:
      'The corrected count rate of a sample of radioactive material was measured on the first day of each month. The readings on July 1 and September 1 are 0.8 and 0.2 counts per second respectively. What is the half-life of the radioactive material?',
    options: ['7 days', '16 days', '31 days', '46 days'],
    answer: '31 days',
    explanation:
      'The count rate changes from 0.8 to 0.4 to 0.2, so the sample passes through 2 half-lives between July 1 and September 1. The interval is 62 days, so the half-life is 62 / 2 = 31 days.',
    difficulty: 2,
    points: 15,
    hints: ['0.8 to 0.2 is a factor of 4', 'A factor of 4 means 2 half-lives', 'July 1 to September 1 is 62 days'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-007',
    type: 'multiple_choice',
    question:
      'The speeds of X-rays, gamma rays and beta rays in air are denoted by v_x, v_gamma and v_beta respectively. Which of the following is true?',
    options: ['v_x > v_gamma > v_beta', 'v_x < v_gamma < v_beta', 'v_x = v_gamma = v_beta', 'v_x = v_gamma > v_beta'],
    answer: 'v_x = v_gamma > v_beta',
    explanation:
      'X-rays and gamma rays are electromagnetic waves, so they both travel at the speed of light in air. Beta rays are fast-moving electrons, so their speed is less than the speed of light.',
    difficulty: 1,
    points: 10,
    hints: ['X-rays and gamma rays are both electromagnetic waves', 'Beta rays are particles'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-008',
    type: 'multiple_choice',
    question:
      'Which of the following about alpha radiation is/are correct?\n\n(1) The mass of an alpha particle is about four times that of a proton.\n(2) It has a stronger ionizing power than beta radiation.\n(3) It has a greater penetration power than gamma radiation.',
    options: ['(1) only', '(2) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'An alpha particle contains 2 protons and 2 neutrons, so its mass is about 4 proton masses. Alpha radiation has stronger ionizing power than beta radiation, but its penetrating power is much weaker than gamma radiation.',
    difficulty: 1,
    points: 10,
    hints: ['Alpha particle = 2 protons + 2 neutrons', 'Alpha ionizes strongly', 'Gamma penetrates best'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-009',
    type: 'multiple_choice',
    question:
      'Which of the following descriptions of the half-life of a sample of radioactive isotope is/are correct? The half-life is\n\n(1) the time taken for the mass of the sample to fall to half of its initial value.\n(2) the time taken for the activity of the sample to fall to half of its initial value.\n(3) half of the time taken for the sample to decay completely.',
    options: ['(1) only', '(2) only', '(3) only', '(1) & (2) only'],
    answer: '(2) only',
    explanation:
      'Half-life is defined as the time for the activity, or equivalently the number of undecayed nuclei, to fall to half its initial value. It is not defined as half of some total decay time, and the total mass of the whole sample does not simply halve because decay products still have mass.',
    difficulty: 2,
    points: 15,
    hints: ['Use the formal definition based on activity', 'Radioactive decay does not have a finite total completion time'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-010',
    type: 'multiple_choice',
    question:
      'The activity of a radioactive source falls to 1/8 of its original value in 24 minutes. The half-life of the source is',
    options: ['3 min', '6 min', '8 min', '72 min'],
    answer: '8 min',
    explanation:
      'The activity changes as 1 -> 1/2 -> 1/4 -> 1/8, so 3 half-lives pass in 24 minutes. Therefore the half-life is 24 / 3 = 8 minutes.',
    difficulty: 1,
    points: 10,
    hints: ['1/8 means three halvings', 'Divide total time by number of half-lives'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-011',
    type: 'multiple_choice',
    question:
      'A radioactive source has a half-life of 22 years. After 66 years, what fraction of the source remains undecayed?',
    options: ['1/3', '1/6', '1/8', '1/9'],
    answer: '1/8',
    explanation:
      '66 years corresponds to 3 half-lives. The undecayed fraction changes as 1 -> 1/2 -> 1/4 -> 1/8. Therefore 1/8 of the source remains undecayed.',
    difficulty: 1,
    points: 10,
    hints: ['66 years is 3 half-lives', 'Halve the remaining fraction three times'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-012',
    type: 'multiple_choice',
    question:
      'In an experiment to measure the half-life of a radioactive isotope in a place where the background count rate is 20 counts per minute, the following results are recorded:\n\nTime / minute: 0, 2, 4, 6, 8, 10, 12\nTotal count rate / counts per minute: 116, 96, 80, 69, 58, 50, 44\n\nThe half-life is about',
    options: ['4 min', '6 min', '8 min', '10 min'],
    answer: '6 min',
    explanation:
      'Subtract the background count rate of 20 counts per minute from each reading. The corrected count rate starts at 96 cpm and falls to about 48 cpm in about 6 minutes. Therefore the half-life is about 6 minutes.',
    difficulty: 2,
    points: 15,
    hints: ['Subtract the background count first', 'Compare the corrected count to half its initial value'],
    sectionId: 'radiation-radioactivity',
    imagePaths: ['/physics/exercises/radiation-radioactivity/rad-012-question.png'],
  },
  {
    id: 'rad-013',
    type: 'multiple_choice',
    question:
      'The activity of a radioactive source is recorded on a graph as shown above. What is the half-life of the source?',
    options: ['20 min', '24 min', '28 min', '32 min'],
    answer: '28 min',
    explanation:
      'From the graph, the activity drops from 40 Bq to 20 Bq in 28 minutes. Since half-life is the time taken for activity to fall to half its value, the half-life is 28 minutes.',
    difficulty: 1,
    points: 10,
    hints: ['Read the time for the activity to halve directly from the graph'],
    sectionId: 'radiation-radioactivity',
    imagePaths: ['/physics/exercises/radiation-radioactivity/rad-013-question.png'],
  },
  {
    id: 'rad-014',
    type: 'multiple_choice',
    question:
      'Which of the following diagrams correctly shows the deflections of alpha, beta and gamma rays in a uniform magnetic field pointing into the paper?',
    options: [
      '/physics/exercises/radiation-radioactivity/rad-014-option-a.png',
      '/physics/exercises/radiation-radioactivity/rad-014-option-b.png',
      '/physics/exercises/radiation-radioactivity/rad-014-option-c.png',
      '/physics/exercises/radiation-radioactivity/rad-014-option-d.png',
    ],
    answer: '/physics/exercises/radiation-radioactivity/rad-014-option-b.png',
    explanation:
      'In a magnetic field pointing into the paper, alpha particles, being positively charged, are deflected to the left, while beta particles, being negatively charged, are deflected to the right. Gamma rays are uncharged and are not deflected. Since alpha particles are much more massive, they are deflected less than beta particles. This corresponds to option B.',
    difficulty: 2,
    points: 15,
    hints: ['Gamma is not deflected', 'Alpha and beta deflect in opposite directions', 'Alpha deflects less than beta'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-015',
    type: 'multiple_choice',
    question: 'Which of the following signs is used to indicate radioactive material?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'B',
    explanation:
      'The standard trefoil warning sign is used to indicate radioactive material. In the given options, that corresponds to option B.',
    difficulty: 1,
    points: 10,
    hints: ['Recognize the standard radiation warning symbol'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-016',
    type: 'multiple_choice',
    question: 'Arrange alpha, beta and gamma radiation in ascending order of their ionizing powers:',
    options: ['alpha, beta, gamma', 'beta, gamma, alpha', 'gamma, alpha, beta', 'gamma, beta, alpha'],
    answer: 'gamma, beta, alpha',
    explanation:
      'Gamma has the weakest ionizing power, beta is stronger, and alpha is the strongest. Therefore the ascending order is gamma, beta, alpha.',
    difficulty: 1,
    points: 10,
    hints: ['Ionizing power increases from gamma to beta to alpha'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-017',
    type: 'multiple_choice',
    question:
      'The activity of a radioactive source drops from 640 Bq to 40 Bq in 2 hours. Find the half-life of the source.',
    options: ['7.5 min', '15 min', '24 min', '30 min'],
    answer: '30 min',
    explanation:
      'The activity changes from 640 Bq to 40 Bq, which is a factor of 16. Since 16 = 2^4, this corresponds to 4 half-lives in 2 hours. Therefore the half-life is 2 hours / 4 = 0.5 hour = 30 minutes.',
    difficulty: 2,
    points: 15,
    hints: ['640 to 40 is a factor of 16', 'A factor of 16 means 4 half-lives'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-018',
    type: 'multiple_choice',
    question: 'Which of the following cannot travel through a vacuum?',
    options: ['beta particles', 'Infra-red', 'Microwaves', 'Ultrasonics'],
    answer: 'Ultrasonics',
    explanation:
      'Beta particles can travel through a vacuum. Infra-red and microwaves are electromagnetic waves, so they can also travel through a vacuum. Ultrasonics are sound waves, and sound requires a medium, so ultrasonics cannot travel through a vacuum.',
    difficulty: 1,
    points: 10,
    hints: ['Sound requires a medium', 'Electromagnetic waves can travel in vacuum'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-019',
    type: 'multiple_choice',
    question:
      'Which of the following statements about X-rays is/are correct?\n\n(1) X-rays consist of fast moving electrons.\n(2) X-rays can blacken photographic films.\n(3) X-rays can be used to detect weapons hidden in luggage.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'X-rays are electromagnetic waves, not particles of electrons. They can blacken photographic films and are widely used in security screening to detect objects hidden in luggage.',
    difficulty: 1,
    points: 10,
    hints: ['X-rays are electromagnetic waves', 'They affect photographic film'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-020',
    type: 'multiple_choice',
    question:
      'Which of the following can be deflected by both an electric field and a magnetic field?\n\n(1) alpha particles\n(2) beta particles\n(3) gamma rays',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'Only charged particles are deflected by both electric and magnetic fields. Alpha particles are positively charged and beta particles are negatively charged, while gamma rays are neutral.',
    difficulty: 1,
    points: 10,
    hints: ['Charged particles are deflected', 'Gamma rays are neutral'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-021',
    type: 'multiple_choice',
    question:
      'The activity of a radioactive isotope falls to 1/16 of its initial value in one hour. Find the half-life of the isotope.',
    options: ['3.75 minutes', '7.5 minutes', '10 minutes', '15 minutes'],
    answer: '15 minutes',
    explanation:
      'The activity changes as 1 -> 1/2 -> 1/4 -> 1/8 -> 1/16, so 4 half-lives pass in 60 minutes. Therefore the half-life is 60 / 4 = 15 minutes.',
    difficulty: 1,
    points: 10,
    hints: ['1/16 means 4 half-lives', 'Divide 60 minutes by 4'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-022',
    type: 'multiple_choice',
    question: 'Which of the following statements about beta particles is incorrect?',
    options: [
      'beta particles can be stopped by a piece of paper',
      'beta particles can be deflected by a magnetic field',
      'beta particles can blacken photographic films',
      'beta particles can travel through a vacuum',
    ],
    answer: 'beta particles can be stopped by a piece of paper',
    explanation:
      'Beta particles can penetrate paper and are usually stopped by a thin sheet of aluminium. They are charged, so they can be deflected by a magnetic field. They can blacken films and, being particles, can travel through a vacuum.',
    difficulty: 1,
    points: 10,
    hints: ['Beta penetrates paper more easily than alpha', 'A thin aluminium sheet is a typical absorber'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-023',
    type: 'multiple_choice',
    question:
      'Which of the following diagrams correctly shows the directions in which alpha, beta and gamma radiations are deflected in a uniform electric field produced by two charged metal plates?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'A',
    explanation:
      'Alpha particles are positively charged, so they are attracted towards the negative plate. Beta particles are negatively charged, so they are attracted towards the positive plate. Gamma rays are neutral and are not deflected. Since beta particles are much lighter, their deflection is greater. This corresponds to option A.',
    difficulty: 2,
    points: 15,
    hints: ['Alpha goes toward the negative plate', 'Beta goes toward the positive plate', 'Gamma is undeflected'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-024',
    type: 'multiple_choice',
    question: 'Which of the following statements about alpha particles is incorrect?',
    options: [
      'alpha particles can be stopped by a piece of paper',
      'alpha particles can blacken photographic films',
      'alpha particles have a range of several centimetres in air',
      'alpha particles cannot travel through a vacuum',
    ],
    answer: 'alpha particles cannot travel through a vacuum',
    explanation:
      'Alpha particles are material particles, so they can travel through a vacuum. They are easily stopped by paper, can blacken films, and have only a short range in air.',
    difficulty: 1,
    points: 10,
    hints: ['Particles can move in vacuum', 'Alpha has short range in air'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-025',
    type: 'multiple_choice',
    question:
      'An insulated metal sphere carries positive charges. Which of the following will discharge the sphere?\n\n(1) bringing an alpha source near the sphere\n(2) touching the sphere momentarily with a finger\n(3) bringing a negatively charged metal rod near the sphere (but without touching it)',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'An alpha source ionizes the surrounding air, producing ions that allow charge to leak away. Touching the sphere with a finger provides earthing, so the sphere discharges. Bringing a negatively charged rod near the sphere without contact does not transfer charge, so it does not discharge the sphere.',
    difficulty: 2,
    points: 15,
    hints: ['Ionized air can help discharge a conductor', 'Touching with a finger can earth it', 'No contact means no charge transfer'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-026',
    type: 'multiple_choice',
    question:
      'The background count rate recorded by a Geiger-Muller counter is 80 counts per minute. When a radioactive source is placed closely in front of the Geiger-Muller tube, the count rate recorded is 560 counts per minute. After 6 hours, the count rate drops to 140 counts per minute. Find the half-life of the source.',
    options: ['45 minutes', '1 hour', '1 hour 30 minutes', '2 hours'],
    answer: '2 hours',
    explanation:
      'The corrected count rate initially is 560 - 80 = 480 cpm. After 6 hours it is 140 - 80 = 60 cpm. The corrected count changes as 480 -> 240 -> 120 -> 60, so 3 half-lives pass in 6 hours. Therefore the half-life is 6 / 3 = 2 hours.',
    difficulty: 2,
    points: 15,
    hints: ['Subtract the background count first', '480 to 60 is three halvings'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-027',
    type: 'multiple_choice',
    question: 'Which of the following statements about alpha particles and gamma rays is correct?',
    options: [
      'Both of them are transverse waves',
      'Both of them can be deflected by a magnetic field',
      'Both of them have strong ionizing power',
      'Both of them can travel through a vacuum',
    ],
    answer: 'Both of them can travel through a vacuum',
    explanation:
      'Alpha particles are material particles and gamma rays are electromagnetic waves, but both can travel through a vacuum. Alpha particles are not waves, gamma rays are not deflected by a magnetic field, and gamma rays have weak ionizing power compared with alpha particles.',
    difficulty: 1,
    points: 10,
    hints: ['Alpha is a particle', 'Gamma is an electromagnetic wave', 'Both can exist in vacuum'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-028',
    type: 'multiple_choice',
    question: 'Which one of the following is not a safety precaution for handling radioactive sources?',
    options: [
      'Users should not eat or drink when handling radioactive sources',
      'Users should wear gloves for handling radioactive sources',
      'Radioactive sources should not be held close to the eye for visual examination',
      'Radioactive sources should be stored in wooden boxes after use',
    ],
    answer: 'Radioactive sources should be stored in wooden boxes after use',
    explanation:
      'Radioactive sources should be stored in suitably shielded containers, typically using dense materials such as lead. A wooden box does not provide adequate shielding. The other listed precautions are standard good practice.',
    difficulty: 1,
    points: 10,
    hints: ['Proper shielding is required for storage', 'Lead is much more suitable than wood'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-029',
    type: 'multiple_choice',
    question:
      'The initial activity of a radioactive isotope is 2000 Bq. After 4 hours, the activity of the isotope drops to 125 Bq. Find the half-life of the isotope.',
    options: ['15 minutes', '30 minutes', '48 minutes', '60 minutes'],
    answer: '60 minutes',
    explanation:
      'The activity changes from 2000 Bq to 125 Bq, which is a factor of 16. Since 16 = 2^4, this corresponds to 4 half-lives in 4 hours. Therefore the half-life is 1 hour, or 60 minutes.',
    difficulty: 2,
    points: 15,
    hints: ['2000 to 125 is a factor of 16', 'A factor of 16 means 4 half-lives'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-030',
    type: 'multiple_choice',
    question: 'Which of the following particles cannot be deflected by a magnetic field?',
    options: ['alpha-particles', 'beta-particles', 'neutrons', 'protons'],
    answer: 'neutrons',
    explanation:
      'Neutrons are electrically neutral, so they are not deflected by magnetic fields or electric fields. Alpha particles, beta particles, and protons all carry charge and can be deflected.',
    difficulty: 1,
    points: 10,
    hints: ['Only charged particles are deflected by magnetic fields'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-031',
    type: 'multiple_choice',
    question:
      'Which of the following statements about alpha particles and gamma rays is/are correct?\n\n(1) They can both be deflected by a magnetic field.\n(2) alpha particles have a stronger ionizing power than gamma rays.\n(3) They are emitted with almost the same speed in radioactive decay.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      'Alpha particles are charged and can be deflected by a magnetic field, but gamma rays are neutral and cannot. Alpha particles have stronger ionizing power than gamma rays. Gamma rays travel at the speed of light, while alpha particles move much more slowly, so their speeds are not almost the same.',
    difficulty: 2,
    points: 15,
    hints: ['Gamma rays are neutral', 'Alpha ionizes more strongly than gamma', 'Only gamma travels at the speed of light'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-032',
    type: 'multiple_choice',
    question:
      'The figures above show the variation of the activities of two radioactive sources P and Q with time. Find the ratio of the half-life of P to that of Q.',
    options: ['1:1', '1:2', '2:1', '4:1'],
    answer: '2:1',
    explanation:
      'From the given graphs, the half-life of P is 10 minutes while the half-life of Q is 5 minutes. Therefore the ratio of the half-life of P to that of Q is 10:5 = 2:1.',
    difficulty: 2,
    points: 15,
    hints: ['Read the half-life of each source directly from the graph', 'Then simplify the ratio'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-033',
    type: 'multiple_choice',
    question:
      'Different absorbers are placed in turn between a radioactive source and a Geiger-Muller tube. Three readings are taken for each absorber. The following data are obtained:\n\nNo absorber: 200, 205, 198\nPaper: 197, 202, 206\n5 mm aluminium: 112, 108, 111\n25 mm lead: 60, 62, 58\n50 mm lead: 34, 36, 34\n\nWhat type(s) of radiation does the source emit?',
    options: ['beta only', 'gamma only', 'beta and gamma only', 'alpha, beta and gamma'],
    answer: 'beta and gamma only',
    explanation:
      'The count rate is almost unchanged when paper is inserted, so alpha radiation is absent. The count rate drops greatly with aluminium, showing that beta radiation is present. It drops further with thick lead, showing that gamma radiation is also present. Therefore the source emits beta and gamma only.',
    difficulty: 2,
    points: 15,
    hints: ['Paper stops alpha', 'Aluminium reduces beta', 'Lead reduces gamma'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-034',
    type: 'multiple_choice',
    question:
      'A radioactive source is placed in front of a uniform magnetic field pointing into the paper as shown above. If a high count rate is recorded at positions P and Q, what kinds of radiation have been detected?',
    options: [
      'P: gamma, Q: alpha',
      'P: gamma, Q: beta',
      'P: beta, Q: alpha',
      'P: beta, Q: gamma',
    ],
    answer: 'P: gamma, Q: beta',
    explanation:
      'Gamma radiation is neutral, so it is not deflected and is detected at the straight-through position P. Beta radiation is negatively charged and is deflected in the direction corresponding to Q. Therefore P detects gamma and Q detects beta.',
    difficulty: 2,
    points: 15,
    hints: ['Gamma is undeflected', 'Beta is negatively charged'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-035',
    type: 'multiple_choice',
    question:
      'A radioisotope X has a half-life of 2 days while another radioisotope Y has a half-life of 1 day. Initially there are N undecayed atoms of X and 8N undecayed atoms of Y. After how many days will X and Y have the same number of undecayed atoms?',
    options: ['3 days', '4 days', '6 days', '8 days'],
    answer: '6 days',
    explanation:
      'After 6 days, X passes through 3 half-lives, so X becomes N -> 1/2 N -> 1/4 N -> 1/8 N. In the same 6 days, Y passes through 6 half-lives, so 8N -> 4N -> 2N -> N -> 1/2 N -> 1/4 N -> 1/8 N. Therefore they are equal after 6 days.',
    difficulty: 2,
    points: 15,
    hints: ['Track X in 2-day steps', 'Track Y in 1-day steps', 'Find when both become the same fraction of N'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-036',
    type: 'multiple_choice',
    question:
      'Susan performs an experiment in which a radioactive source is placed closely in front of a GM counter. The graph shows the variation of count rate with time. What is the half-life of the radioactive substance?',
    options: ['4 minutes', '5 minutes', '8 minutes', '10 minutes'],
    answer: '4 minutes',
    explanation:
      'From the graph, the background count rate is 50. The initial total count rate is 350, so the initial corrected count rate is 350 - 50 = 300. After one half-life the corrected count should be 150, so the total count should be 150 + 50 = 200. From the graph, the count reaches 200 after 4 minutes, so the half-life is 4 minutes.',
    difficulty: 2,
    points: 15,
    hints: ['Subtract the background first', 'Half the corrected count, then add the background back'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-037',
    type: 'multiple_choice',
    question:
      'Some dangerous substances are stored in a metal container inside a wooden box as shown in the figure. What metal should be used for the container and what type of substance is stored?',
    options: [
      'Iron, radioactive',
      'Iron, flammable',
      'Lead, radioactive',
      'Lead, flammable',
    ],
    answer: 'Lead, radioactive',
    explanation:
      'Lead is commonly used as shielding because it is effective at absorbing radiation. The warning sign shown is the standard symbol for radioactive substances. Therefore the correct combination is lead and radioactive.',
    difficulty: 1,
    points: 10,
    hints: ['Lead is a shielding material', 'Recognize the radioactive warning symbol'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-038',
    type: 'multiple_choice',
    question: 'Which of the following descriptions about the half-life of a radioactive substance in a sample is correct?',
    options: [
      'It is equal to half of the time for all the radioactive nuclei of the substance to decay.',
      'It is equal to half of the time for a radioactive nucleus of the substance to decay.',
      'It is equal to the time for the sample to reduce its mass by half.',
      'It is equal to the time for half of the radioactive nuclei of the substance to decay.',
    ],
    answer: 'It is equal to the time for half of the radioactive nuclei of the substance to decay.',
    explanation:
      'Half-life is defined as the time taken for half of the radioactive nuclei in a sample to decay. The total time for all nuclei to decay is not finite in this model, the decay time of a single nucleus is random, and the total mass of the sample does not simply halve because daughter nuclei still remain in the sample.',
    difficulty: 1,
    points: 10,
    hints: ['Use the formal definition of half-life', 'Focus on radioactive nuclei, not total sample mass'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-039',
    type: 'multiple_choice',
    question: 'Which of the following actions will maximise a person’s exposure to radiation?',
    options: [
      'Using a GM tube and counter to measure the background radiation in laboratory.',
      'Eating food that has been sterilised by exposure to gamma radiation.',
      'Listening to radio.',
      'Going for a flight to a distant place in a high-flying aeroplane.',
    ],
    answer: 'Going for a flight to a distant place in a high-flying aeroplane.',
    explanation:
      'At high altitude, the atmosphere provides less shielding from cosmic radiation, so exposure is greater during high-flying air travel. The other options do not significantly increase radiation exposure in the way described.',
    difficulty: 1,
    points: 10,
    hints: ['Cosmic radiation increases with altitude'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-040',
    type: 'multiple_choice',
    question: 'Which of the following statements about beta particles is correct?',
    options: [
      'beta particles carry positive charge',
      'beta particles can be deflected by a magnetic field',
      'beta particles cannot be deflected by an electric field',
      'beta particles can be stopped by a sheet of paper',
    ],
    answer: 'beta particles can be deflected by a magnetic field',
    explanation:
      'Beta particles are electrons, so they carry negative charge. Because they are charged, they can be deflected by both electric and magnetic fields. They can penetrate paper and are more effectively stopped by aluminium.',
    difficulty: 1,
    points: 10,
    hints: ['Beta particles are electrons', 'Charged particles are deflected by fields'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-041',
    type: 'multiple_choice',
    question:
      'The half-life of a radioactive sample is 15 hours. The initial count rate recorded is 1000 counts per minute. After 15 hours, the count rate recorded becomes 528 counts per minute. What is the background count rate?',
    options: ['25', '28', '50', '56'],
    answer: '56',
    explanation:
      'Let the background count rate be b. After one half-life, the corrected count rate halves, so (1000 - b)/2 = 528 - b. Solving gives 500 - b/2 = 528 - b, hence b/2 = 28 and b = 56 counts per minute.',
    difficulty: 2,
    points: 15,
    hints: ['Subtract background to get corrected count', 'After one half-life, corrected count halves'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-042',
    type: 'multiple_choice',
    question:
      'In the figure, a beta particle enters a region with a magnetic field pointing into the paper and an electric field of unknown direction. The beta particle has no deflection. What is the direction of the electric field?',
    options: ['left', 'right', 'up', 'down'],
    answer: 'down',
    explanation:
      'For the beta particle to be undeflected, the electric force must balance the magnetic force. The magnetic force on the beta particle is downward. Therefore the electric force must be upward. Since a beta particle is negatively charged, the electric force is opposite to the electric field, so the electric field must point downward.',
    difficulty: 2,
    points: 15,
    hints: ['Balance electric and magnetic forces', 'For a negative charge, electric force is opposite to the electric field'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-043',
    type: 'multiple_choice',
    question:
      'In the figure above, two charged metal balls P and Q are hung by insulating threads. P is positively charged while Q is negatively charged. An alpha source is put near the balls without touching them. Which of the following figures shows the situation after a period of time?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'C',
    explanation:
      'The alpha source ionizes the air, producing ions that allow both charged balls to gradually discharge. After a period of time, both balls become neutral, so they no longer exert electric forces on each other. This corresponds to option C.',
    difficulty: 2,
    points: 15,
    hints: ['Ionized air allows charge leakage', 'Both balls gradually lose charge'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-044',
    type: 'multiple_choice',
    question:
      'The initial activity of a sample of radioisotope is 960 Bq. Its activity drops to 240 Bq in 2 minutes. How much more time would be required for its activity to become 30 Bq?',
    options: ['2 minutes', '3 minutes', '4 minutes', '5 minutes'],
    answer: '3 minutes',
    explanation:
      'The activity drops from 960 Bq to 240 Bq in 2 minutes, which is a factor of 4, so 2 half-lives occur in 2 minutes and the half-life is 1 minute. To go from 240 Bq to 30 Bq is a factor of 8, which is 3 more half-lives. Therefore 3 more minutes are required.',
    difficulty: 2,
    points: 15,
    hints: ['960 to 240 is 2 half-lives', '240 to 30 is 3 more half-lives'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-045',
    type: 'multiple_choice',
    question:
      'The figure shows a radioactive source placed near two parallel metal plates X and Y that are connected to a power supply. When a GM tube is moved along the dotted line, the count rate shows a significant increase at P and Q respectively. Which of the following statements is correct when a magnetic field pointing out of the paper is applied between X and Y?',
    options: [
      'The count rate at P decreases and the count rate at Q remains the same.',
      'The count rates at P and Q remain the same.',
      'The count rate at P decreases and the count rates at Q and R increase.',
      'The count rates at P, Q and R are equal.',
    ],
    answer: 'The count rate at P decreases and the count rate at Q remains the same.',
    explanation:
      'At P the detected radiation is beta, while at Q it is gamma. When the magnetic field is applied, the beta particles are additionally deflected, so fewer of them reach P. Gamma rays are unaffected by magnetic fields, so the count rate at Q remains unchanged.',
    difficulty: 2,
    points: 15,
    hints: ['Beta is deflected by magnetic fields', 'Gamma is unaffected'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-046',
    type: 'multiple_choice',
    question:
      'Which of the following statements about alpha, beta and gamma radiations is incorrect?',
    options: [
      'Only gamma radiation can travel through a vacuum.',
      'alpha radiation can be stopped by an aluminium plate of 5 mm thick.',
      'beta particles are fast moving electrons.',
      'gamma radiation can blacken a photographic film.',
    ],
    answer: 'Only gamma radiation can travel through a vacuum.',
    explanation:
      'All three types of nuclear radiation can travel through a vacuum. Alpha radiation can be stopped by paper and certainly by a thicker aluminium plate. Beta particles are fast-moving electrons, and gamma radiation can blacken photographic film. Therefore the incorrect statement is that only gamma can travel through a vacuum.',
    difficulty: 1,
    points: 10,
    hints: ['Particles can also travel in vacuum', 'Check which statement wrongly excludes alpha and beta'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-047',
    type: 'multiple_choice',
    question:
      'A radioactive source is put in front of a GM tube. The initial count rate is 1050 counts per minute. It is known that the half-life of the source is 4 hours and the background count rate is 50 counts per minute. What is the most likely count rate after 8 hours?',
    options: ['50 counts per minute', '125 counts per minute', '250 counts per minute', '300 counts per minute'],
    answer: '300 counts per minute',
    explanation:
      'The initial corrected count rate is 1050 - 50 = 1000 cpm. In 8 hours, 2 half-lives pass, so the corrected count becomes 1000 x (1/2)^2 = 250 cpm. Adding the background count back gives 250 + 50 = 300 counts per minute.',
    difficulty: 2,
    points: 15,
    hints: ['Subtract the background first', '8 hours is 2 half-lives', 'Add the background back at the end'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-048',
    type: 'multiple_choice',
    question:
      'Which of the graphs below correctly shows the variation of the activity A of a radioactive sample with the number N of the undecayed nuclei in the sample?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'C',
    explanation:
      'Activity is directly proportional to the number of undecayed nuclei: A = kN. Therefore the graph should be a straight line through the origin, which corresponds to option C.',
    difficulty: 1,
    points: 10,
    hints: ['Use A = kN', 'Direct proportionality means a straight line through the origin'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-049',
    type: 'multiple_choice',
    question:
      'An alpha particle makes a collision with a helium nucleus in a cloud chamber. Which of the following diagrams best represents the probable set of tracks?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'D',
    explanation:
      'A collision between an alpha particle and a helium nucleus is represented by a forked track, and for this case the most probable geometry is a right-angled fork. The option that shows the correct forked track pattern is D.',
    difficulty: 2,
    points: 15,
    hints: ['Look for a forked collision track', 'The separation is approximately at right angles'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-050',
    type: 'multiple_choice',
    question: 'Protactinium decays with a half-life of 72 s. The value of the decay constant is',
    options: ['9.6 x 10^-3 s', '9.6 x 10^-3 s^-1', '0.014 s^-1', '49.9 s'],
    answer: '9.6 x 10^-3 s^-1',
    explanation:
      'The decay constant is k = ln 2 / t_(1/2) = 0.693 / 72 = 9.6 x 10^-3 s^-1. The correct unit is per second.',
    difficulty: 2,
    points: 15,
    hints: ['Use k = ln 2 / t_(1/2)', 'The unit of decay constant is s^-1'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-051',
    type: 'multiple_choice',
    question:
      'A dish containing an alpha-source is placed inside a gold leaf electroscope. If the gold-leaf is originally positively charged, what will happen to it after a few minutes?',
    options: [
      'It will increase in divergence.',
      'It will increase in divergence and then decrease.',
      'It will collapse.',
      'It will collapse and then re-diverge.',
    ],
    answer: 'It will collapse.',
    explanation:
      'Alpha particles ionize the air inside the electroscope. The ions allow charge to leak away from the gold leaf system, so the electroscope discharges and the leaf collapses.',
    difficulty: 1,
    points: 10,
    hints: ['Ionized air conducts charge away', 'Discharge reduces divergence'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-052',
    type: 'multiple_choice',
    question:
      'An alpha-source originally consisted entirely of the element polonium. After the emission of an alpha-particle, each polonium nucleus becomes a lead nucleus. At the end of two years, the source was found to contain 98% lead and 2% polonium. What is the composition of the sample at the end of one year?',
    options: ['25% lead, 75% polonium', '50% lead, 50% polonium', '75% lead, 25% polonium', '86% lead, 14% polonium'],
    answer: '86% lead, 14% polonium',
    explanation:
      'If 2% polonium remains after 2 years, then N = N0 e^(-kt) gives 0.02 = e^(-2k), so k can be found from this. Using the same decay law after 1 year gives about 14% polonium remaining. Therefore the sample contains about 14% polonium and 86% lead after 1 year.',
    difficulty: 3,
    points: 20,
    hints: ['Use exponential decay', 'First infer k from the 2-year data', 'Then evaluate the 1-year fraction'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-053',
    type: 'multiple_choice',
    question:
      'A radioactive source is placed in front of a GM counter. Various absorbers are placed between the source and the GM counter and the count-rate recorded. The following results were obtained:\n\nno absorber: 712\nsheet of paper: 504\n5 mm aluminium sheet: 496\n25 mm lead block: 218\n\nFrom the above result, the radiation(s) emitted by the source is/are',
    options: ['alpha and gamma rays only', 'beta and gamma rays only', 'alpha rays only', 'beta rays only'],
    answer: 'alpha and gamma rays only',
    explanation:
      'The large drop when paper is inserted shows that alpha radiation is present. The count changes only slightly when aluminium replaces paper, so beta radiation is not significant. The large further drop with lead shows that gamma radiation is present. Therefore the source emits alpha and gamma rays only.',
    difficulty: 2,
    points: 15,
    hints: ['Paper removes alpha', 'If aluminium causes little extra drop, beta is absent', 'Lead reduces gamma'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-054',
    type: 'multiple_choice',
    question:
      'A radioactive source consists of a mixture of two radioisotopes P and Q. The half-life of P is 1 hour and that of Q is 2 hours. Both P and Q have stable daughter nuclei. The initial corrected count rate due to the mixture is 600 counts per minute. After 4 hours, the corrected count rate drops to 60 counts per minute. What was the initial count rate due to P only?',
    options: ['200 counts per minute', '360 counts per minute', '400 counts per minute', '480 counts per minute'],
    answer: '480 counts per minute',
    explanation:
      'Let the initial count rate due to P be x, so the initial count rate due to Q is 600 - x. After 4 hours, P undergoes 4 half-lives and contributes x/16. Q undergoes 2 half-lives and contributes (600 - x)/4. Thus x/16 + (600 - x)/4 = 60. Solving gives x = 480 counts per minute.',
    difficulty: 3,
    points: 20,
    hints: ['Write separate decay expressions for P and Q', 'After 4 hours, P has 4 half-lives and Q has 2'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-055',
    type: 'multiple_choice',
    question:
      'A GM counter is placed in front of an alpha-source and a count rate of 120 counts per minute is recorded. After a time equal to the half-life of the alpha-source, the count rate drops to 64 counts per minute. If a 5 mm thick lead sheet is inserted between the alpha-source and the detector, the count rate would probably be',
    options: ['0 counts per minute', '4 counts per minute', '8 counts per minute', '16 counts per minute'],
    answer: '8 counts per minute',
    explanation:
      'Let the background count rate be b. After one half-life, the corrected count rate halves, so (120 - b)/2 = 64 - b. Solving gives b = 8 counts per minute. A lead sheet completely absorbs the alpha particles, so only the background radiation remains, giving 8 counts per minute.',
    difficulty: 2,
    points: 15,
    hints: ['Use the half-life relation to find the background count', 'Lead stops the alpha particles so only background remains'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-056',
    type: 'multiple_choice',
    question:
      'A counter is placed near a radioactive source that has a half-life of 1 hour. The counter registers 100 counts per minute at noon and 80 counts per minute at 1 p.m. The expected count rate at 3 p.m. on the same day should be',
    options: ['50 c.p.m.', '55 c.p.m.', '60 c.p.m.', '65 c.p.m.'],
    answer: '65 c.p.m.',
    explanation:
      'Let the background count rate be b. After one half-life, the corrected count rate halves, so (100 - b)/2 = 80 - b, giving b = 60 c.p.m. The corrected count at noon is therefore 40 c.p.m. After 3 hours from noon, the source passes through 3 half-lives: 40 -> 20 -> 10 -> 5. Adding back the background gives 60 + 5 = 65 c.p.m.',
    difficulty: 2,
    points: 15,
    hints: ['Use the 1-hour half-life between noon and 1 p.m. to find background', 'Then decay the corrected count for 3 hours total'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-057',
    type: 'multiple_choice',
    question:
      'The activity of a sample of radioisotopes decreases to 1/3 of its initial value in 12 s. How much more time is needed for the activity to decrease to 1/9 of its initial value?',
    options: ['4 s', '8 s', '12 s', '16 s'],
    answer: '12 s',
    explanation:
      'If the activity falls from A to A/3 in 12 s, the same decay law gives another drop from A/3 to A/9 in the same additional time. Therefore 12 more seconds are needed.',
    difficulty: 2,
    points: 15,
    hints: ['The same fractional drop under exponential decay takes the same time', 'From 1 to 1/3 and from 1/3 to 1/9 are identical factors'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-058',
    type: 'multiple_choice',
    question:
      'A radioactive source emits both alpha and gamma radiation. A GM counter placed close to and in front of the source records a count rate of 500 counts per minute. The background count rate is 50 counts per minute. Three different materials are placed in turn between the source and the counter. Which of the following is a suitable set of values for x, y and z?\n\nCardboard: x\n1 mm of aluminium: y\n5 mm of lead: z',
    options: [
      'x = 350, y = 350, z = 150',
      'x = 350, y = 150, z = 50',
      'x = 350, y = 150, z = 0',
      'x = 150, y = 150, z = 50',
    ],
    answer: 'x = 350, y = 350, z = 150',
    explanation:
      'Cardboard absorbs alpha radiation, so the count rate should drop when cardboard is inserted. Since the source emits only alpha and gamma, adding 1 mm aluminium should not significantly reduce the count further beyond the alpha removal. Lead reduces gamma radiation but does not usually remove it completely, so the count should fall further but stay above the background. This matches x = 350, y = 350, z = 150.',
    difficulty: 2,
    points: 15,
    hints: ['Cardboard removes alpha', 'No beta is present, so aluminium causes little further change', 'Lead reduces but may not completely stop gamma'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-059',
    type: 'multiple_choice',
    question:
      'The table gives the corrected count rate (in counts per minute) from three samples of radioisotopes at three different times.\n\nX: 480, 243, 119\nY: 135, 32, 9\nZ: 168, 118, 93\n\nFrom the above result, it can be concluded that\n\n(1) X produces the most penetrating radiation.\n(2) Y has the largest decay constant.\n(3) Z has the longest half-life.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'The type of radiation cannot be determined from count-rate decay data alone, so (1) is not justified. Source Y drops fastest, so it has the shortest half-life and therefore the largest decay constant. Source Z drops slowest, so it has the longest half-life. Hence (2) and (3) are correct.',
    difficulty: 2,
    points: 15,
    hints: ['A larger decay constant means faster decay', 'Compare how quickly each count rate falls'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-060',
    type: 'multiple_choice',
    question:
      'The activity of a radioactive sample was 70 Bq at time t = 5 minutes and 49 Bq at t = 10 minutes. What is its activity at time t = 0?',
    options: ['112 Bq', '100 Bq', '95 Bq', '91 Bq'],
    answer: '100 Bq',
    explanation:
      'Radioactive decay follows A = A0 e^(-kt). Using the two given values, 70/49 = e^(5k), which gives k. Substituting back into 70 = A0 e^(-5k) gives A0 = 100 Bq.',
    difficulty: 3,
    points: 20,
    hints: ['Form a ratio to eliminate A0 first', 'Then solve for A0 using one of the data points'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-061',
    type: 'multiple_choice',
    question:
      'A nuclide in a radioactive sample has a probability of 10^-6 to decay in one second. What is the approximate half-life of the sample?',
    options: ['1 day', '1 week', '1 month', '1 year'],
    answer: '1 week',
    explanation:
      'The decay constant is approximately k = 10^-6 s^-1. The half-life is t_(1/2) = ln 2 / k = 0.693 / 10^-6 = 6.93 x 10^5 s, which is about 8 days, approximately 1 week.',
    difficulty: 2,
    points: 15,
    hints: ['Treat the probability per second as the decay constant', 'Use t_(1/2) = ln 2 / k'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-062',
    type: 'multiple_choice',
    question:
      'The activity of a radioactive sample is 1.0 x 10^6 Bq. The half-life of the sample is 5.3 years. Estimate the number of nuclei in the sample that decay in the first day.',
    options: ['5.2 x 10^2', '3.2 x 10^8', '8.6 x 10^10', 'It cannot be estimated as the initial number of nuclei in the sample is not given.'],
    answer: '8.6 x 10^10',
    explanation:
      'Since 1 day is much shorter than the half-life of 5.3 years, the activity can be treated as approximately constant during that day. The number of decays is therefore Delta N = A Delta t = (1.0 x 10^6) x (24 x 3600) = 8.6 x 10^10.',
    difficulty: 2,
    points: 15,
    hints: ['For a short interval, use decays ≈ activity x time', '1 day = 24 x 3600 s'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-063',
    type: 'multiple_choice',
    question: 'The activity of a radioactive source depends on\n\n(1) the number of active nuclei in the source\n(2) the half-life of the source\n(3) the nature of the nuclear radiation emitted by the source',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'Activity is given by A = kN, so it depends on the number of undecayed nuclei N and the decay constant k. Since k is related to the half-life, activity depends on the half-life as well. It does not directly depend on whether the radiation emitted is alpha, beta, or gamma.',
    difficulty: 2,
    points: 15,
    hints: ['Use A = kN', 'Relate k to half-life'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-064',
    type: 'multiple_choice',
    question:
      'Some typical radiation doses are given as follows:\n\nWatching television: 0.005 mSv/hr for watching every day in a year\nFlying in an aircraft: 0.001 mSv/hr\nX-ray check: 0.020 mSv each time\n\nArrange the following in ascending order of total radiation dose in one year.\n\n(1) Watching television for 4 hours every day\n(2) Travelling on an aircraft for 10 hours every month\n(3) Taking X-ray check every 6 months',
    options: ['(1), (2), (3)', '(2), (1), (3)', '(1), (3), (2)', '(3), (1), (2)'],
    answer: '(1), (3), (2)',
    explanation:
      '(1) gives 0.005 x 4 = 0.02 mSv. (2) gives 0.001 x 10 x 12 = 0.12 mSv. (3) gives 0.020 x 2 = 0.04 mSv. Therefore the ascending order is 0.02, 0.04, 0.12, i.e. (1), (3), (2).',
    difficulty: 2,
    points: 15,
    hints: ['Compute each yearly total first', 'Then sort the totals'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-065',
    type: 'multiple_choice',
    question: 'Which of the following gives the correct interpretation of the decay constant of a radioactive substance?',
    options: [
      'It is the rate of disintegrations of the substance.',
      'It is the number of disintegrations of the substance occurring in one half-life of the substance.',
      'It is the fraction of the active nuclei that undergo decay in one second.',
      'It is equal to the reciprocal of the half-life of the substance.',
    ],
    answer: 'It is the fraction of the active nuclei that undergo decay in one second.',
    explanation:
      'The decay constant is the probability of decay per unit time. In practical terms, it is the fraction of the active nuclei present that decay in one second.',
    difficulty: 1,
    points: 10,
    hints: ['Decay constant is a probability per unit time', 'It is not simply the reciprocal of half-life'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-066',
    type: 'multiple_choice',
    question:
      'Radioactive source P consists of 64 x 10^12 active nuclei. Another source Q consists of 8 x 10^12 active nuclei. The half-lives of P and Q are 2 days and 3 days respectively. After how long will the number of active nuclei in the two sources be equal?',
    options: ['6 days', '9 days', '12 days', '18 days'],
    answer: '18 days',
    explanation:
      'After 18 days, source P passes through 9 half-lives, so 64 x 10^12 becomes 64 x 10^12 x (1/2)^9 = 1/8 x 10^12. In the same 18 days, source Q passes through 6 half-lives, so 8 x 10^12 becomes 8 x 10^12 x (1/2)^6 = 1/8 x 10^12. Therefore they are equal after 18 days.',
    difficulty: 2,
    points: 15,
    hints: ['Count how many half-lives pass for each source in the same time', 'Compare the remaining nuclei'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-067',
    type: 'multiple_choice',
    question:
      'Radioactive nuclides X and Y have half-lives 2 hours and 4 hours respectively. The decay of both nuclides gives stable daughter nuclei. Initially samples P and Q contain equal numbers of atoms of nuclide X and nuclide Y respectively. Which of the following statements are correct?\n\n(1) The initial activity of sample P is higher than that of sample Q.\n(2) After 8 hours, sample P contains more active nuclei than sample Q.\n(3) After 8 hours, the chance of a nucleus of X in sample P decaying in the next second is greater than that of a nucleus of Y in sample Q.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (3) only',
    explanation:
      'A shorter half-life means a larger decay constant. Since X has a shorter half-life, sample P has the higher initial activity, so (1) is true. After 8 hours, X has passed through 4 half-lives and only 1/16 remains, while Y has passed through 2 half-lives and 1/4 remains, so P contains fewer active nuclei and (2) is false. The decay chance per unit time is the decay constant, so X has the greater chance of decay in the next second, making (3) true.',
    difficulty: 2,
    points: 15,
    hints: ['Shorter half-life means larger decay constant', 'Track remaining fractions after 8 hours'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-068',
    type: 'multiple_choice',
    question: 'The activity of a radioisotope is 250 Bq at time t = 0 and 54 Bq at t = 30 min. What is its activity at t = 10 min?',
    options: ['130 Bq', '150 Bq', '185 Bq', 'It cannot be found as its half-life is not given.'],
    answer: '150 Bq',
    explanation:
      'Radioactive decay follows A = A0 e^(-kt). Using 54 = 250 e^(-30k), the decay constant k can be found. Substituting into A = 250 e^(-10k) gives 150 Bq.',
    difficulty: 3,
    points: 20,
    hints: ['Use the 30-minute data to find k first', 'Then evaluate the activity at 10 minutes'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-069',
    type: 'multiple_choice',
    question:
      'Arrange the following lengths in ascending order of magnitudes.\n\n(1) range of alpha-particles in air\n(2) grating spacing of a typical diffraction grating used in a school laboratory\n(3) wavelength of ultra-violet radiation',
    options: ['(1), (2), (3)', '(1), (3), (2)', '(3), (1), (2)', '(3), (2), (1)'],
    answer: '(3), (2), (1)',
    explanation:
      'A typical ultraviolet wavelength is of order 10^-8 m, a diffraction grating spacing is of order 10^-5 m, and the range of alpha particles in air is of order 10^-2 m. Therefore the ascending order is (3), (2), (1).',
    difficulty: 2,
    points: 15,
    hints: ['Compare rough orders of magnitude: 10^-8, 10^-5, 10^-2'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-070',
    type: 'multiple_choice',
    question:
      'The initial activity of two radioactive sources, X and Y, are the same. Both X and Y decay to give stable daughter nuclei. The ratio of the activity of X to that of Y after 12 hours is 4:1. If the half-life of X is 6 hours, what is the half-life of Y?',
    options: ['1.5 hours', '2 hours', '3 hours', '12 hours'],
    answer: '3 hours',
    explanation:
      'After 12 hours, source X has undergone 2 half-lives, so its activity becomes A0/4. Given the ratio X:Y is 4:1, source Y must then have activity A0/16 after 12 hours. That means Y undergoes 4 half-lives in 12 hours, so its half-life is 12 / 4 = 3 hours.',
    difficulty: 2,
    points: 15,
    hints: ['First find the fraction remaining for X after 12 hours', 'Use the given activity ratio to infer the fraction for Y'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-071',
    type: 'multiple_choice',
    question:
      'On which of the following does the activity of a radioactive source depend?\n\n(1) the nature of the nuclear radiation emitted by the source\n(2) the half-life of the source\n(3) the number of active nuclei in the source',
    options: ['(1) only', '(2) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'Activity is given by A = kN. Therefore it depends on the decay constant k, which is related to the half-life, and on the number of active nuclei N. It does not directly depend on whether the emitted radiation is alpha, beta, or gamma.',
    difficulty: 1,
    points: 10,
    hints: ['Use A = kN', 'Half-life determines k'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-072',
    type: 'multiple_choice',
    question:
      'Different absorbers are placed in turn between a radioactive source and a Geiger-Muller tube. Three readings are taken for each absorber. The following data are obtained:\n\nNo absorber: 200, 205, 198\nPaper: 197, 202, 206\n5 mm aluminium: 112, 108, 111\n25 mm lead: 60, 62, 58\n50 mm lead: 34, 36, 34\n\nWhat type(s) of radiation does the source emit?',
    options: ['beta only', 'gamma only', 'beta and gamma only', 'alpha, beta and gamma'],
    answer: 'beta and gamma only',
    explanation:
      'The count rate is almost unchanged when paper is inserted, so alpha radiation is absent. The count rate drops significantly with aluminium, so beta radiation is present. It drops further with lead, showing gamma radiation is also present. Therefore the source emits beta and gamma only.',
    difficulty: 2,
    points: 15,
    hints: ['Paper removes alpha', 'Aluminium removes beta', 'Lead reduces gamma'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-073',
    type: 'multiple_choice',
    question:
      'A radioactive source is placed in front of a uniform magnetic field pointing into the paper as shown above. The count rates recorded by the GM tubes at X and Y are 101 counts per minute and 400 counts per minute respectively. Which of the following deductions must be correct?',
    options: [
      'The source does not emit alpha radiations.',
      'The source emits beta radiations.',
      'The source emits gamma radiations.',
      'The background count rate is about 100 counts per minute.',
    ],
    answer: 'The source emits beta radiations.',
    explanation:
      'The high count rate at Y shows that some radiation is being deflected downward by the magnetic field. By the left-hand rule, this downward deflection corresponds to negatively charged particles, i.e. beta radiation. The other statements are not forced by the given data.',
    difficulty: 2,
    points: 15,
    hints: ['Use the direction of magnetic deflection', 'Downward deflection here indicates negatively charged particles'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-074',
    type: 'multiple_choice',
    question:
      'Which of the following statements about alpha and beta particles is/are correct?\n\n(1) The mass of an alpha particle is greater than that of a beta particle.\n(2) alpha particles have a stronger penetrating power than beta particles.\n(3) An alpha source can discharge a positively charged metal sphere nearby.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) & (3) only',
    explanation:
      'An alpha particle is a helium nucleus, so its mass is far greater than that of a beta particle, which is an electron. Alpha particles have weaker penetrating power than beta particles, so statement (2) is false. An alpha source can ionize nearby air, and the ions can discharge a positively charged metal sphere.',
    difficulty: 1,
    points: 10,
    hints: ['Compare alpha particles with electrons', 'Ionization of air can discharge a charged conductor'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-075',
    type: 'multiple_choice',
    question:
      'A certain radioactive isotope X has a half-life of 20 hours. After a time interval of 10 hours, what is the approximate fraction (f) of a sample of the radioactive isotope X remaining?',
    options: ['1/4 <= f <= 1/2', 'f = 1/2', '3/4 > f > 1/2', 'f > 3/4'],
    answer: '3/4 > f > 1/2',
    explanation:
      'Using N = N0(1/2)^(t / t1/2), after 10 hours the remaining fraction is (1/2)^(10/20) = (1/2)^(1/2) about 0.707. This lies between 1/2 and 3/4.',
    difficulty: 2,
    points: 15,
    hints: ['Use the exponential half-life formula', '10 hours is half of one half-life'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-076',
    type: 'multiple_choice',
    question:
      'The figure shows a schematic diagram of an X-ray tube in which the filament F and the metal target T are connected to terminals P and Q of an E.H.T. Which statement is correct?',
    options: [
      'P is the positive terminal and X-rays are emitted from T.',
      'P is the positive terminal and X-rays are emitted from F.',
      'Q is the positive terminal and X-rays are emitted from T.',
      'Q is the positive terminal and X-rays are emitted from F.',
    ],
    answer: 'Q is the positive terminal and X-rays are emitted from T.',
    imagePaths: ['/physics/exercises/radiation-radioactivity/rad-076-question.png'],
    explanation:
      'The filament emits electrons, so it must be the negative side. Therefore the opposite terminal is positive. The accelerated electrons strike the metal target, and X-rays are emitted from the target, not from the filament.',
    difficulty: 1,
    points: 10,
    hints: ['Electrons are emitted from the filament', 'X-rays are produced when electrons hit the target'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-077',
    type: 'multiple_choice',
    question:
      'Polonium-210 is a pure alpha-emitter with a half-life of 140 days and it will decay into lead, which is stable. Initially there is a sample containing 420 mg of pure polonium-210. Estimate the mass of polonium-210 left after 70 days.',
    options: ['315 mg', '297 mg', '210 mg', '105 mg'],
    answer: '297 mg',
    explanation:
      'Use M = M0(1/2)^(t / t1/2). Here t / t1/2 = 70 / 140 = 0.5, so the remaining mass is 420 x (1/2)^0.5 about 420 x 0.707 = 297 mg.',
    difficulty: 2,
    points: 15,
    hints: ['70 days is half of one half-life', 'Use the square root of 1/2'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-078',
    type: 'multiple_choice',
    question:
      'A GM counter is placed close to and in front of a radioactive source which emits both alpha and gamma radiations. The count rate recorded is 450 counts per minute while the background count rate is 50 counts per minute. Three different materials are placed in turn between the source and the counter. The following results are obtained.\n\nMaterial: (Nil), cardboard, 1 mm of aluminium, 2 mm of lead\nWhich of the following is the most suitable set of values for x, y and z?',
    options: ['x = 300, y = 300, z = 100', 'x = 300, y = 100, z = 50', 'x = 100, y = 100, z = 0', 'x = 100, y = 50, z = 50'],
    answer: 'x = 300, y = 300, z = 100',
    imagePaths: ['/physics/exercises/radiation-radioactivity/rad-078-question.png'],
    explanation:
      'Cardboard stops alpha radiation, so the count rate should drop from the no-absorber value. There is no beta radiation here, so adding aluminium should not further reduce the count from x. Lead reduces gamma radiation, but gamma is not fully absorbed, so z must stay above the 50 cpm background rate. Hence the suitable set is 300, 300, 100.',
    difficulty: 2,
    points: 15,
    hints: ['Cardboard stops alpha', 'Gamma cannot be completely removed by a thin lead sheet'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-079',
    type: 'multiple_choice',
    question:
      'Some factories make use of radioactive source for manufacturing. Workers are required to wear clothes with film badges to measure the dosage of radiation received over a period of time. Which type of radiation below CANNOT be monitored by the film badges ?',
    options: ['alpha-radiation', 'beta-radiation', 'gamma-radiation', 'X-rays'],
    answer: 'alpha-radiation',
    explanation:
      'Alpha radiation cannot penetrate the outer covering of the film badge, so it cannot reach the film inside and cannot be monitored effectively this way. Beta, gamma and X-rays can penetrate to the film and can be recorded.',
    difficulty: 1,
    points: 10,
    hints: ['Think about penetration through the badge casing'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-080',
    type: 'multiple_choice',
    question:
      'Which of the following statements about ionizing radiations is/are correct?\n\n(1) The ionizing power of alpha-particles is much stronger than that of beta-particles.\n(2) gamma radiation can be completely shielded by a 10 cm thick concrete wall.\n(3) Ionizing radiations alpha, beta and gamma all undergo deflection in an electric field.',
    options: ['(1) only', '(1) & (2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'Alpha radiation has much stronger ionizing power than beta radiation. Gamma radiation cannot be completely shielded by a concrete wall; shielding only reduces it. Gamma radiation is uncharged and is not deflected by an electric field. Therefore only statement (1) is correct.',
    difficulty: 1,
    points: 10,
    hints: ['Gamma is neutral', 'Shielding reduces gamma but does not eliminate it completely'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-081',
    type: 'multiple_choice',
    question:
      'Two radionuclides X and Y are of half-lives 3 hours and 4 hours respectively and initially there are Nx and Ny undecayed nuclei respectively. After 24 hours, the number of undecayed nuclei of both nuclides becomes the same. Find Nx : Ny.',
    options: ['8:1', '4:3', '4:1', '2:1'],
    answer: '4:1',
    explanation:
      'After 24 hours, X undergoes 24/3 = 8 half-lives and Y undergoes 24/4 = 6 half-lives. Hence Nx(1/2)^8 = Ny(1/2)^6, so Nx / Ny = (1/2)^(-2) = 4. Therefore Nx : Ny = 4 : 1.',
    difficulty: 2,
    points: 15,
    hints: ['Count the number of half-lives in 24 hours for each nuclide'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-082',
    type: 'multiple_choice',
    question:
      'Which of the following statements about beta particles and gamma rays is correct ?',
    options: [
      'Only beta particles can ionize air particles.',
      'Only gamma rays can travel through vacuum.',
      'Both of them can be detected by a photographic film.',
      'Both of them carry charge.',
    ],
    answer: 'Both of them can be detected by a photographic film.',
    explanation:
      'Both beta and gamma radiations can blacken or affect photographic film, so they can both be detected this way. Beta also ionizes air, gamma can also ionize though more weakly. Both can travel through vacuum, but only beta is charged.',
    difficulty: 1,
    points: 10,
    hints: ['Beta is charged, gamma is neutral', 'Both can expose film'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-083',
    type: 'multiple_choice',
    question:
      'Which of the following diagrams best shows the deflection of alpha and beta particles in a uniform electric field in vacuum?',
    options: [
      '/physics/exercises/radiation-radioactivity/rad-083-option-a.png',
      '/physics/exercises/radiation-radioactivity/rad-083-option-b.png',
      '/physics/exercises/radiation-radioactivity/rad-083-option-c.png',
      '/physics/exercises/radiation-radioactivity/rad-083-option-d.png',
    ],
    answer: '/physics/exercises/radiation-radioactivity/rad-083-option-a.png',
    explanation:
      'In an electric field, beta particles are negatively charged and are deflected towards the positive plate, while alpha particles are positively charged and are deflected towards the negative plate. Because beta particles are much lighter, their deflection is much larger than that of alpha particles. Hence the correct diagram is A.',
    difficulty: 2,
    points: 15,
    hints: ['Beta is negative and much lighter', 'Alpha is positive and much heavier'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'rad-084',
    type: 'multiple_choice',
    question:
      'The background count rate in an experiment is determined using a GM counter. Four readings of the count rate in each minute are taken. Which set of readings below is the most probable ?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'D',
    imagePaths: ['/physics/exercises/radiation-radioactivity/rad-084-question.png'],
    explanation:
      'Background radiation count is random, but it fluctuates around a fairly steady average. A realistic set should show small random variations from one minute to the next, not huge jumps or exactly the same value every time. The readings 29, 26, 31 and 35 fit this pattern best, so D is the most probable.',
    difficulty: 1,
    points: 10,
    hints: ['Background radiation is random but not wildly erratic', 'Look for small statistical fluctuations around a mean value'],
    sectionId: 'radiation-radioactivity',
  },
  {
    id: 'am-001',
    type: 'multiple_choice',
    question:
      'A radioactive nuclide X undergoes radioactive decay inside a cloud chamber. The radiations emitted are subjected to a magnetic field and the resulting tracks are as shown in the figure. What are the atomic number and the mass number of the remaining nuclide ?',
    options: ['Atomic number Z - 2, mass number A - 4', 'Atomic number Z + 1, mass number A - 4', 'Atomic number Z + 1, mass number A', 'Atomic number Z - 1, mass number A - 4'],
    answer: 'Atomic number Z - 2, mass number A - 4',
    explanation:
      'The deflected radiation is positively charged and behaves like an alpha particle in the magnetic field. Alpha decay emits a helium nucleus, so the parent nuclide loses 2 protons and 2 neutrons. Therefore the daughter nuclide has atomic number Z - 2 and mass number A - 4.',
    difficulty: 2,
    points: 15,
    hints: ['Identify the emitted radiation first', 'Alpha decay reduces atomic number by 2 and mass number by 4'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-002',
    type: 'multiple_choice',
    question:
      'The two isotopes chlorine-35 and chlorine-37 of chlorine have different\n\n(1) numbers of protons\n(2) numbers of neutrons\n(3) chemical properties',
    options: ['(1) only', '(2) only', '(3) only', '(1) & (2) only'],
    answer: '(2) only',
    explanation:
      'Isotopes of the same element have the same number of protons, so both chlorine isotopes have 17 protons. Their mass numbers differ, so their numbers of neutrons differ. Isotopes have essentially the same chemical properties because chemical behavior depends mainly on electron arrangement.',
    difficulty: 1,
    points: 10,
    hints: ['Same element means same proton number', 'Different mass number means different neutron number'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-003',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning isotopes of an element is/are correct ?\n\n(1) They have the same number of neutrons.\n(2) They have the same chemical and physical properties.\n(3) They have the same atomic number but different mass numbers.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'Isotopes have the same proton number, so they have the same atomic number, but different numbers of neutrons, so their mass numbers differ. Their chemical properties are similar, but their physical properties are not exactly the same because their masses are different.',
    difficulty: 1,
    points: 10,
    hints: ['Atomic number depends on protons', 'Mass number depends on protons plus neutrons'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-004',
    type: 'multiple_choice',
    question:
      'Which of the following represents an alpha decay ?\n\n(1) U-238 transforms to Th-234\n(2) At-215 transforms to Bi-211\n(3) Tl-214 transforms to Pb-210',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'In alpha decay, the daughter nucleus has atomic number reduced by 2 and mass number reduced by 4. Processes (1) and (2) match this pattern. Process (3) does not match the alpha-decay change correctly.',
    difficulty: 2,
    points: 15,
    hints: ['Alpha decay changes Z by -2', 'Alpha decay changes A by -4'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-005',
    type: 'multiple_choice',
    question:
      'The atomic structure of isotopes of the same element differ from each other by having different numbers of',
    options: ['electrons.', 'neutrons.', 'electrons and protons.', 'electrons and neutrons.'],
    answer: 'neutrons.',
    explanation:
      'Isotopes of the same element have the same number of protons, and for neutral atoms they also have the same number of electrons. They differ in the number of neutrons.',
    difficulty: 1,
    points: 10,
    hints: ['Isotopes keep the same atomic number', 'Different mass comes from different neutrons'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-006',
    type: 'multiple_choice',
    question:
      'An ancient piece of wood was tested for its age by carbon-14 dating method. The normal emission rate from 2 g of carbon from a living plant is 20 counts per minute. If the rate from 2 g of carbon from the wood is 5 counts per minute, and the half-life of carbon-14 is 5700 years, what is the approximate age of the wood in years?',
    options: ['5700 x 4', '5700 x 2', '5700 / 2', '5700 / 4'],
    answer: '5700 x 2',
    explanation:
      'The count rate falls from 20 to 10 and then from 10 to 5, so the activity has halved twice. That means 2 half-lives have passed. Therefore the age is 2 x 5700 years.',
    difficulty: 1,
    points: 10,
    hints: ['20 to 5 is two halvings', 'Each halving is one half-life'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-007',
    type: 'multiple_choice',
    question:
      'During radioactive decay, X-230 becomes Y-224, and both have atomic number 90. Which of the following statements would be correct?\n\n(1) The change would involve alpha decay only.\n(2) One alpha particle and two beta particles would be emitted.\n(3) X and Y are two isotopes of the same element.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'The mass number drops by 6, so alpha decay must occur. One alpha decay reduces the atomic number by 2, but the final atomic number is unchanged, so two beta decays are needed to raise it back by 2. Since X and Y have the same atomic number but different mass numbers, they are isotopes.',
    difficulty: 2,
    points: 15,
    hints: ['Track both mass number and atomic number', 'Beta-minus increases atomic number by 1'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-008',
    type: 'multiple_choice',
    question:
      'A U-235 nucleus would change to Ac-227 through a series of decay. What kind of particles are emitted at stages X, Y and Z in the radioactive decay chain shown?',
    options: ['alpha, alpha, beta', 'beta, alpha, beta', 'beta, beta, alpha', 'alpha, beta, alpha'],
    answer: 'alpha, beta, alpha',
    explanation:
      'Balancing the nuclear equations step by step shows that the first step reduces mass number by 4 and atomic number by 2, so it is alpha decay. The second step raises atomic number by 1 without changing mass number, so it is beta decay. The third step again matches alpha decay.',
    difficulty: 2,
    points: 15,
    hints: ['Alpha: A - 4 and Z - 2', 'Beta-minus: A unchanged and Z + 1'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-009',
    type: 'multiple_choice',
    question:
      'The atomic number of Tin is 50 and its mass number is 112. Which of the following is an isotope of Tin ?',
    options: ['X with atomic number 51 and mass number 112', 'X with atomic number 50 and mass number 114', 'X with atomic number 49 and mass number 112', 'X with atomic number 62 and mass number 112'],
    answer: 'X with atomic number 50 and mass number 114',
    explanation:
      'Isotopes are nuclei of the same element, so they must have the same atomic number. They differ in mass number. Therefore the isotope of tin must still have atomic number 50 but a different mass number.',
    difficulty: 1,
    points: 10,
    hints: ['Same element means same atomic number'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-010',
    type: 'multiple_choice',
    question:
      'U-235 eventually decays to Pb-207. What is the number of alpha particles and beta particles emitted during the decay ?',
    options: ['7 alpha and 4 beta', '7 alpha and 10 beta', '14 alpha and 10 beta', '28 alpha and 4 beta'],
    answer: '7 alpha and 4 beta',
    explanation:
      'Balancing mass number gives 235 = 207 + 4x, so x = 7 alpha particles. Balancing atomic number gives 92 = 82 + 2(7) - y, so y = 4 beta particles.',
    difficulty: 2,
    points: 15,
    hints: ['Use mass number first to find alpha particles', 'Then use atomic number to find beta particles'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-011',
    type: 'multiple_choice',
    question:
      'If the nucleus of an atom is represented by the symbol X-214 with atomic number 83, it means that this atom has\n\n(1) 131 protons in its nucleus.\n(2) 83 electrons outside its nucleus.\n(3) 214 neutrons in its nucleus.',
    options: ['(1) only', '(2) only', '(3) only', '(1) & (2) only'],
    answer: '(2) only',
    explanation:
      'The atomic number is 83, so the atom has 83 protons. For a neutral atom it also has 83 electrons. The number of neutrons is 214 - 83 = 131, not 214.',
    difficulty: 1,
    points: 10,
    hints: ['Atomic number gives proton number', 'Mass number = protons + neutrons'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-012',
    type: 'multiple_choice',
    question:
      'U-238 decays by emitting two alpha particles and two beta particles. Which of the following represents the resulting nuclide?',
    options: ['Th-234', 'U-234', 'Ra-232', 'Th-230'],
    answer: 'Th-230',
    explanation:
      'Two alpha emissions reduce the mass number by 8 and the atomic number by 4. Two beta-minus emissions then increase the atomic number by 2. So the final mass number is 238 - 8 = 230 and the final atomic number is 92 - 4 + 2 = 90, which is thorium.',
    difficulty: 2,
    points: 15,
    hints: ['Two alpha particles change A by -8 and Z by -4', 'Two beta-minus particles change Z by +2'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-013',
    type: 'multiple_choice',
    question:
      'Which of the following symbols represents a neutron?',
    options: ['0 over 0 n', '1 over 0 n', '0 over 1 n', 'n'],
    answer: '1 over 0 n',
    explanation:
      'A neutron has mass number 1 and charge 0. Therefore its nuclear symbol is 1 over 0 n.',
    difficulty: 1,
    points: 10,
    hints: ['Neutron has zero charge and mass number one'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-014',
    type: 'multiple_choice',
    question:
      'A radioactive nuclide W decays to a nuclide Z by emitting one alpha-particle and two beta-particles as shown below.\n\nW -> beta -> X -> alpha -> Y -> beta -> Z\n\nWhich of the following statements about nuclides W, X, Y and Z is/are correct ?\n\n(1) W and Z are isotopes.\n(2) X has the greatest atomic number.\n(3) Y has the greatest mass number.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'A beta-minus decay increases atomic number by 1, alpha decay decreases atomic number by 2 and mass number by 4, and another beta-minus decay increases atomic number by 1. Overall the atomic number returns to its original value, so W and Z are isotopes. X has the greatest atomic number because it is formed right after the first beta decay. Y does not have the greatest mass number because alpha decay reduces the mass number.',
    difficulty: 2,
    points: 15,
    hints: ['Track the change in Z and A through beta, alpha, beta'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-015',
    type: 'multiple_choice',
    question:
      'Which of the following is not an application of radioactivity?',
    options: ['Carbon-14 dating', 'Examination of foetuses (babies not yet born)', 'Killing cancer cells in human bodies', 'Sterilization of food'],
    answer: 'Examination of foetuses (babies not yet born)',
    explanation:
      'Carbon-14 dating, cancer treatment and food sterilization all use radioactivity. Examination of foetuses is normally done using ultrasound, not radioactivity.',
    difficulty: 1,
    points: 10,
    hints: ['Foetal examination typically uses ultrasound'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-016',
    type: 'multiple_choice',
    question:
      'In a factory producing aluminium sheets of 1 mm thickness, a thickness gauge is used to monitor the thickness of aluminium sheets. Which of the following states the correct radioactive source to be used in the thickness gauge and the reason behind ?',
    options: [
      'alpha; The amount of alpha particles passing through aluminium depends on its thickness.',
      'beta; The amount of beta particles passing through aluminium depends on its thickness.',
      'beta; beta particles are less harmful to human beings.',
      'gamma; gamma radiation has the greatest penetrating power.',
    ],
    answer: 'beta; The amount of beta particles passing through aluminium depends on its thickness.',
    explanation:
      'Beta particles are only partially absorbed by a thin aluminium sheet, so the amount passing through depends sensitively on the sheet thickness. Alpha would be stopped too easily, while gamma would penetrate too strongly for this thickness range.',
    difficulty: 1,
    points: 10,
    hints: ['A thickness gauge needs partial absorption, not total absorption or almost none'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-017',
    type: 'multiple_choice',
    question:
      'A nucleus X emits a beta particle to form a daughter nucleus Y. Which of the following statements is/are correct ?\n\n(1) X and Y have the same number of neutrons.\n(2) The number of protons in X is greater than that in Y by 1.\n(3) The total numbers of neutrons and protons in X and Y are equal.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'In beta-minus decay, a neutron changes into a proton, so the atomic number increases by 1 while the mass number remains unchanged. Therefore X and Y do not have the same number of neutrons, and Y has one more proton than X. Since the mass number stays the same, the total number of nucleons is unchanged.',
    difficulty: 2,
    points: 15,
    hints: ['Beta-minus increases Z by 1 and leaves A unchanged'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-018',
    type: 'multiple_choice',
    question:
      'The isotope of neptunium (Np) shown decays by emitting an alpha particle and then a beta particle. Which of the following represents the resulting nuclide ?',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'S',
    explanation:
      'An alpha decay reduces the mass number by 4 and the atomic number by 2. A following beta-minus decay leaves the mass number unchanged and increases the atomic number by 1. So the net effect is mass number -4 and atomic number -1, which corresponds to S in the diagram.',
    difficulty: 2,
    points: 15,
    hints: ['Net change from alpha then beta-minus is A - 4 and Z - 1'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-019',
    type: 'multiple_choice',
    question:
      'Which of the following applications of radioactivity makes use of the fact that a radioactive nuclide has a constant half-life ?',
    options: ['Carbon-14 dating', 'Preservation of food', 'Smoke detectors', 'Thickness gauge'],
    answer: 'Carbon-14 dating',
    explanation:
      'Carbon-14 dating relies on the predictable decay of carbon-14 with a known half-life to estimate the age of once-living materials. The other applications use radiation for ionization, sterilization or absorption, not specifically the constancy of half-life.',
    difficulty: 1,
    points: 10,
    hints: ['Look for the application that needs a clock-like decay process'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-020',
    type: 'multiple_choice',
    question:
      'The diagram below shows part of a radioactive series.\n\nP -> alpha -> Q -> beta -> R -> beta -> S\n\nWhich of the following nuclei are isotopes of the same element ?',
    options: ['P and Q', 'P and R', 'P and S', 'Q and S'],
    answer: 'P and S',
    explanation:
      'Alpha decay reduces atomic number by 2. Each beta-minus decay then increases atomic number by 1. So from P to S, the net change in atomic number is -2 + 1 + 1 = 0. Therefore P and S have the same atomic number and are isotopes of the same element.',
    difficulty: 2,
    points: 15,
    hints: ['Track the atomic number through alpha then two beta-minus decays'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-021',
    type: 'multiple_choice',
    question:
      'Radium (Ra-226) decays by emitting an alpha particle to form a product nucleus X. Which of the following shows the correct equation for this decay?',
    options: [
      'Ra-226 + alpha -> X-226',
      'Ra-214 -> X-214 + alpha',
      'Ra-226 -> X-222 + alpha',
      'Ra-224 -> X-224 + alpha',
    ],
    answer: 'Ra-226 -> X-222 + alpha',
    explanation:
      'Alpha decay reduces the mass number by 4 and the atomic number by 2. Therefore a Ra-226 nucleus becomes a daughter nucleus with mass number 222 plus an alpha particle.',
    difficulty: 2,
    points: 15,
    hints: ['Alpha decay always reduces mass number by 4'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-022',
    type: 'multiple_choice',
    question:
      'Which of the following is/are application(s) of radioactivity ?\n\n(1) to estimate the age of ancient remains\n(2) to kill bacteria in food\n(3) to transmit signals over long distances',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'Carbon-14 dating is used to estimate the age of ancient remains, and gamma radiation is used to sterilize food. Long-distance signal transmission uses electromagnetic waves such as radio waves or microwaves, not radioactivity.',
    difficulty: 1,
    points: 10,
    hints: ['Dating and sterilization use radioactivity', 'Signal transmission uses EM waves, not nuclear decay'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-023',
    type: 'multiple_choice',
    question:
      'A radioactive isotope Th-234 undergoes a series of decay processes to form a daughter Pb-206. How many alpha-particles and beta-particles have been emitted in this decay process?',
    options: ['6 alpha and 7 beta', '7 alpha and 6 beta', '7 alpha and 8 beta', '8 alpha and 7 beta'],
    answer: '7 alpha and 6 beta',
    explanation:
      'Balancing mass number gives 234 = 206 + 4x, so x = 7 alpha particles. Balancing atomic number gives 90 = 82 + 2(7) - y, so y = 6 beta particles.',
    difficulty: 2,
    points: 15,
    hints: ['Use mass number first, then atomic number'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-024',
    type: 'multiple_choice',
    question:
      'Which of the following are essential criteria in choosing radioactive sources as medical tracers in human bodies ?\n\n(1) The sources should have a short half-life.\n(2) The radiation emitted should have a weak ionizing power.\n(3) The radiation emitted should not be deflected by an electric field.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      'Medical tracers should have a short half-life so they do not remain hazardous for long, and the emitted radiation should have weak ionizing power to reduce damage to tissue. Whether the radiation is deflected by an electric field is not relevant inside the body.',
    difficulty: 1,
    points: 10,
    hints: ['Think about minimizing harm while keeping detectability'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-025',
    type: 'multiple_choice',
    question:
      'In order to detect cracks in an underground oil pipe, an engineer proposes adding a radioactive source to the oil. Which of the following sources is most suitable ?',
    options: [
      'a gamma source with a half-life of a few hours',
      'a gamma source with a half-life of several years',
      'an alpha source with a half-life of a few hours',
      'an alpha source with a half-life of several years',
    ],
    answer: 'a gamma source with a half-life of a few hours',
    explanation:
      'Gamma radiation has strong penetrating power, so it can pass through the pipe wall and surrounding ground to be detected externally. A short half-life is preferred to reduce environmental hazard after use.',
    difficulty: 1,
    points: 10,
    hints: ['Need strong penetration and low long-term hazard'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-026',
    type: 'multiple_choice',
    question:
      'A thorium nucleus (Th-234) decays by emitting a beta particle to form a daughter nucleus X. Which of the following equations represents this decay?',
    options: [
      'Th-234 -> X-230 + beta',
      'Th-234 -> X-234 with atomic number 89 + beta',
      'Th-234 -> X-233 + beta',
      'Th-234 -> X-234 with atomic number 91 + beta',
    ],
    answer: 'Th-234 -> X-234 with atomic number 91 + beta',
    explanation:
      'In beta-minus decay, the mass number stays unchanged while the atomic number increases by 1. So thorium-234 becomes a daughter nucleus with the same mass number 234 but atomic number 91.',
    difficulty: 2,
    points: 15,
    hints: ['Beta-minus keeps A unchanged and increases Z by 1'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-027',
    type: 'multiple_choice',
    question:
      'In the above two decay series, P and Y are two isotopes of the same element. Which of the following pairs of nuclides may be isotopes ?\n\n(1) X and R\n(2) Y and S\n(3) Z and Q',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      'If P and Y are isotopes, they have the same atomic number. Tracking the changes in atomic number through the two decay chains shows that X and R share the same atomic number, Y and S share the same atomic number, and Z and Q also share the same atomic number. Hence all three pairs may be isotopes.',
    difficulty: 2,
    points: 15,
    hints: ['Track only atomic number changes along both decay chains'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-028',
    type: 'multiple_choice',
    question:
      'Some fresh foods are exposed to gamma radiations from radioactive isotopes for a short time so that the micro-organisms in the foods can be killed. Why are the irradiated foods not harmful to people who eat them ?',
    options: [
      'gamma radiation is an electromagnetic wave.',
      'gamma radiation has a high penetrating power.',
      'gamma radiation does not have a high ionizing power.',
      'gamma radiation does not make the foods radioactive.',
    ],
    answer: 'gamma radiation does not make the foods radioactive.',
    explanation:
      'Irradiation kills microorganisms, but it does not cause the food itself to become a radioactive source. Therefore the food is not made radioactive by the treatment.',
    difficulty: 1,
    points: 10,
    hints: ['Irradiation is not the same as contaminating the food with radioactive material'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-029',
    type: 'multiple_choice',
    question:
      'In the upper atmosphere, neutrons are produced by the action of cosmic rays. These neutrons interact with nitrogen nuclei as shown in the following reaction:\n\nn + N-14 -> X + H-1\n\nElement X will then emit a beta particle. The nuclear reaction is as follows: X -> Y + beta.\nWhat is the final product Y ?',
    options: ['C-14', 'C-13', 'N-14', 'N-13'],
    answer: 'N-14',
    explanation:
      'Balancing the first reaction gives X as C-14. Then beta-minus decay increases the atomic number by 1 without changing the mass number, so C-14 becomes N-14. Therefore the final product Y is nitrogen-14.',
    difficulty: 2,
    points: 15,
    hints: ['Find X by balancing the first equation', 'Then apply beta-minus decay'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-030',
    type: 'multiple_choice',
    question:
      'X undergoes alpha decay to Y, and Y then undergoes beta decay to Z. Which of the following deductions is/are correct?\n\n(1) X and Z are isotopes of the same element.\n(2) X has two more neutrons than Z.\n(3) Z has one more proton than Y.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'Alpha decay changes A by -4 and Z by -2. Beta-minus decay then keeps A unchanged and increases Z by 1. So the net change from X to Z is A - 4 and Z - 1. Therefore X and Z are not isotopes, and statement (2) is not correct. Since beta decay increases proton number by 1, Z has one more proton than Y.',
    difficulty: 2,
    points: 15,
    hints: ['Net effect of alpha then beta-minus is A - 4 and Z - 1'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-031',
    type: 'multiple_choice',
    question:
      'The diagram shows the mass number and atomic number of a radioactive nuclide K. After undergoing the following decays, it becomes Z.\n\nK -> alpha -> X -> beta -> Y -> gamma -> Z\n\nWhich of the following nuclides represents Z ?',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'P',
    explanation:
      'Alpha decay reduces the mass number by 4 and atomic number by 2. Beta-minus decay then increases the atomic number by 1, while gamma decay changes neither mass number nor atomic number. So the final nuclide has mass number 4 less and atomic number 1 less than K, which corresponds to P.',
    difficulty: 2,
    points: 15,
    hints: ['Gamma decay does not change A or Z'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-032',
    type: 'multiple_choice',
    question:
      'A U-238 nuclide undergoes a certain number of alpha and beta decays and becomes Pb-210. Find the number of beta particles emitted.',
    options: ['2', '3', '4', '5'],
    answer: '4',
    explanation:
      'Balancing mass number gives 238 = 210 + 4x, so x = 7 alpha particles. Balancing atomic number gives 92 = 82 + 2(7) - y, so y = 4 beta particles.',
    difficulty: 2,
    points: 15,
    hints: ['Find the number of alpha particles from mass number first'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-033',
    type: 'multiple_choice',
    question:
      'A stationary radioactive nucleus of mass number N emits an alpha particle, leaving a daughter nucleus of mass number N - 4. The ratio of the kinetic energy of the alpha particle to the kinetic energy of the daughter nucleus is',
    options: ['(N - 4) / 4', 'N^2 / (N - 4)^2', '(N - 4)^2 / N', '(N - 4)^2 / 4^2'],
    answer: '(N - 4) / 4',
    explanation:
      'The alpha particle and the daughter nucleus have equal and opposite momenta. For the same momentum p, kinetic energy is KE = p^2 / 2m, so kinetic energy is inversely proportional to mass. Therefore KE(alpha) / KE(daughter) = m(daughter) / m(alpha) = (N - 4) / 4.',
    difficulty: 2,
    points: 15,
    hints: ['Use conservation of momentum', 'For equal momentum, KE is inversely proportional to mass'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-034',
    type: 'multiple_choice',
    question:
      'A stationary U-238 nucleus undergoes alpha-decay. What is the ratio of the kinetic energy of the daughter nucleus to that of the alpha-particle ?',
    options: ['238:4', '4:238', '234:4', '4:234'],
    answer: '4:234',
    explanation:
      'After alpha decay, the daughter nucleus has mass number 234. Since the daughter nucleus and alpha particle have equal and opposite momenta, KE is inversely proportional to mass. Therefore KE(daughter) / KE(alpha) = 4 / 234.',
    difficulty: 2,
    points: 15,
    hints: ['Use the daughter mass number 238 - 4', 'Equal momentum means KE ratio is inverse mass ratio'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-035',
    type: 'multiple_choice',
    question:
      'Ra-226 decays to Rn-222 with a half-life of 1600 years. Which of the following statements is/are correct ?\n\n(1) Alpha particle is given out in the decay.\n(2) All Ra-226 has decayed after 3200 years.\n(3) The half-life of Ra-226 can be shortened by heating.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'The change from Ra-226 to Rn-222 reduces the mass number by 4 and atomic number by 2, so it is alpha decay. Radioactive decay never becomes fully complete in a finite time, and heating does not change a nuclear half-life.',
    difficulty: 1,
    points: 10,
    hints: ['A - 4 and Z - 2 indicates alpha decay', 'Half-life is not changed by temperature'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-036',
    type: 'multiple_choice',
    question:
      'Ra-226 undergoes a series of decay to become the stable end-product Pb-206. What is the number of beta-particles emitted in this series ?',
    options: ['4', '6', '10', '14'],
    answer: '4',
    explanation:
      'Balancing mass number gives 226 = 206 + 4x, so x = 5 alpha particles. Balancing atomic number gives 88 = 82 + 2(5) - y, so y = 4 beta particles.',
    difficulty: 2,
    points: 15,
    hints: ['Use mass number first to find the number of alpha particles'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-037',
    type: 'multiple_choice',
    question:
      'In beta-decay, a neutron inside the nucleus changes into a proton and an electron, which is emitted as a beta-particle. Radioactive nuclide plutonium-244 becomes lead-208 after a series of alpha and beta decays. Throughout the whole process, how many neutrons inside a Pu-244 nucleus have undergone such change ?',
    options: ['3', '6', '9', '12'],
    answer: '6',
    explanation:
      'From mass number: 244 = 208 + 4a, so a = 9 alpha particles. From atomic number: 94 = 82 + 2(9) - b, so b = 6 beta particles. Each beta-minus emission corresponds to one neutron changing into a proton, so 6 neutrons undergo this change.',
    difficulty: 2,
    points: 15,
    hints: ['Find alpha count first from mass number, then beta count from atomic number'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-038',
    type: 'multiple_choice',
    question:
      'A radioactive source having a half-life of 5.3 years has an initial activity of 2500 Bq. A cancer treatment requires 10 seconds of irradiation of this source to give a certain number of radiation particles on a cancer site. If the same treatment is required after 2 years by this radioactive source, what should be the time of irradiation to give the same number of radiation particles?',
    options: ['13 s', '15 s', '18 s', '21 s'],
    answer: '13 s',
    explanation:
      'After 2 years, the activity becomes 2500 x (1/2)^(2/5.3), which is about 1925 Bq. To deliver the same total number of emitted particles, activity x time must stay the same. So 2500 x 10 = 1925 x t, giving t about 13 s.',
    difficulty: 2,
    points: 15,
    hints: ['First decay the activity over 2 years', 'Use emitted particles proportional to activity x time'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-039',
    type: 'multiple_choice',
    question:
      'Isotopes of an element have different mass number A and neutron number N. Which of the following N-A plots correctly shows the relationship of N and A for any given element?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'D',
    explanation:
      'For a given element, the atomic number Z is constant, and A = Z + N. Therefore N = A - Z. This is a straight-line relationship with slope +1 and a negative intercept on the N-axis. Hence the correct graph is D.',
    difficulty: 2,
    points: 15,
    hints: ['Use A = Z + N', 'For a fixed element, Z is constant'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-040',
    type: 'multiple_choice',
    question:
      'U-238 undergoes alpha-beta-beta-alpha decay and becomes a nuclide X. What are the atomic number and mass number of X ?',
    options: ['atomic number 90, mass number 230', 'atomic number 90, mass number 234', 'atomic number 88, mass number 230', 'atomic number 88, mass number 234'],
    answer: 'atomic number 90, mass number 230',
    explanation:
      'Two alpha decays reduce the mass number by 8 and the atomic number by 4. Two beta-minus decays leave the mass number unchanged and increase the atomic number by 2. Starting from Z = 92 and A = 238 gives final Z = 90 and A = 230.',
    difficulty: 2,
    points: 15,
    hints: ['Apply the sequence step by step', 'Alpha changes A and Z, beta-minus changes only Z'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-041',
    type: 'multiple_choice',
    question:
      'Nucleus W decays to nucleus Z as shown:\n\nW -> alpha -> X -> beta -> Y -> beta -> Z\n\nWhich of the following statements is/are correct ?\n\n(1) Nucleus X has 1 more proton than nucleus Y.\n(2) Nucleus W has 2 more neutrons than nucleus X.\n(3) W and Z are isotopes of the same element.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'From X to Y, beta-minus decay increases the atomic number by 1, so X has one fewer proton than Y, not one more. Alpha decay from W to X reduces the neutron number by 2 as well as the proton number by 2. After the two beta-minus decays, Z has the same atomic number as W, so W and Z are isotopes.',
    difficulty: 2,
    points: 15,
    hints: ['Alpha reduces both proton and neutron counts by 2', 'Two beta-minus decays restore the atomic number'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-042',
    type: 'multiple_choice',
    question:
      'A piece of ancient wood is dated using carbon-14 dating method. It registers a corrected count rate of 11.0 counts per minute while a fresh wood sample cut from the same kind of trees gives a corrected count rate of 15.6 counts per minute. What is the approximate age of the wood found in the archaeological site? Given: half-life of carbon-14 is 5730 years.',
    options: ['890 years', '1300 years', '2000 years', '2900 years'],
    answer: '2900 years',
    explanation:
      'Use C = C0(1/2)^(t / 5730). Substituting 11.0 = 15.6(1/2)^(t / 5730) gives t about 2.89 x 10^3 years. So the age is approximately 2900 years.',
    difficulty: 2,
    points: 15,
    hints: ['Use the count-rate ratio 11.0 / 15.6', 'Apply the half-life decay equation'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-043',
    type: 'multiple_choice',
    question:
      'X and Y are two radioactive nuclides. The ratio of the mass of an atom of X to that of an atom of Y is 1:2. The half-lives of X and Y are T and 2T respectively. If two samples consisting purely of X and Y respectively have the same initial mass, find the ratio of the number of undecayed nuclei of X to that of Y after a period of 4T.',
    options: ['1:4', '1:2', '1:1', '2:1'],
    answer: '1:2',
    explanation:
      'For equal initial sample masses, the initial number of nuclei is inversely proportional to the mass of each atom. Since mass per atom X:Y = 1:2, the initial numbers are 2:1. After 4T, X has undergone 4 half-lives, so 2N0 becomes 2N0(1/2)^4 = N0/8. Y has undergone 2 half-lives, so N0 becomes N0(1/2)^2 = N0/4. Therefore the ratio is 1:2.',
    difficulty: 2,
    points: 15,
    hints: ['Equal mass samples do not mean equal numbers of atoms', 'Count half-lives over 4T for each nuclide'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-044',
    type: 'multiple_choice',
    question:
      'Nuclide P can decay into nuclide T through either process P -> Q -> R -> T or process P -> Q -> S -> T. Which deductions below are correct?\n\n(1) P and T are isotopes of the same element.\n(2) Q and S have the same number of protons.\n(3) S has one more neutron than R.',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1) and (3) only',
    explanation:
      'Both decay paths end at the same nuclide T. Comparing the alpha and beta changes along the two routes shows that P and T end with the same atomic number, so they are isotopes of the same element. Q and S do not have the same proton number. S has one more neutron than R after accounting for the different decay steps.',
    difficulty: 2,
    points: 15,
    hints: ['Track changes in atomic number and mass number step by step', 'Alpha changes both proton and mass number, beta-minus changes proton number only'],
    imagePaths: ['/physics/exercises/atomic-model/am-044-question.png'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-045',
    type: 'multiple_choice',
    question: 'The decay constant of a radioisotope of an element',
    options: [
      'is random.',
      'depends on pressure and temperature.',
      'is directly proportional to the number of nucleons in the isotope.',
      'is an identifying characteristic of that isotope.',
    ],
    answer: 'is an identifying characteristic of that isotope.',
    explanation:
      'The decay constant is fixed for a given radioisotope. It does not depend on external conditions such as temperature or pressure, and it is not random from sample to sample. It is a characteristic property of that particular isotope.',
    difficulty: 1,
    points: 15,
    hints: ['Relate decay constant to half-life', 'Think about whether external conditions affect nuclear decay'],
    sectionId: 'atomic-model',
  },
  {
    id: 'am-046',
    type: 'multiple_choice',
    question:
      'Two radioactive samples P and Q are freshly prepared. It is found that when 15/16 of all the nuclei of P have decayed, 63/64 of all the nuclei of Q have also decayed. Find the ratio half-life of P : half-life of Q.',
    options: ['1:4', '2:3', '3:2', '4:1'],
    answer: '3:2',
    explanation:
      'If 15/16 of P has decayed, then 1/16 remains, so P has undergone 4 half-lives. If 63/64 of Q has decayed, then 1/64 remains, so Q has undergone 6 half-lives in the same time. Therefore 4T_P = 6T_Q, so T_P : T_Q = 3 : 2.',
    difficulty: 2,
    points: 15,
    hints: ['Convert the remaining fractions into powers of 1/2', 'Both observations are made after the same elapsed time'],
    sectionId: 'atomic-model',
  },
  {
    id: 'ne-001',
    type: 'multiple_choice',
    question:
      'In the following nuclear reaction:\n\n^27_13 Al + ^4_2 He -> ^30_15 P + X\n\nwhat is the mass number and atomic number of X ?',
    options: ['Mass number 1, atomic number 0', 'Mass number 0, atomic number -1', 'Mass number 4, atomic number 2', 'Mass number 0, atomic number 0'],
    answer: 'Mass number 1, atomic number 0',
    explanation:
      'Conservation of nucleon number gives 27 + 4 = 30 + A, so A = 1. Conservation of proton number gives 13 + 2 = 15 + Z, so Z = 0. Therefore X is a neutron with mass number 1 and atomic number 0.',
    difficulty: 2,
    points: 15,
    hints: ['Balance the mass numbers on both sides', 'Then balance the atomic numbers'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-002',
    type: 'multiple_choice',
    question:
      'Which of the following equations represent(s) possible nuclear reactions ?\n\n(1) ^10_5 B + neutron -> ^6_3 Li + alpha particle\n(2) ^210_83 Bi -> ^210_84 Po + beta particle\n(3) ^14_7 N + alpha particle -> ^17_8 O + proton',
    options: ['(1) only', '(2) only', '(2) & (3) only', '(1) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'A possible nuclear reaction must conserve both nucleon number and proton number. In (1), the mass numbers are not balanced, so it is impossible. In (2), beta-minus decay increases the atomic number by 1 while keeping the mass number unchanged, so it is possible. In (3), both mass number and atomic number are balanced, so it is also possible.',
    difficulty: 2,
    points: 15,
    hints: ['Check conservation of mass number', 'Check conservation of atomic number'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-003',
    type: 'multiple_choice',
    question:
      'Which of the following equations represents(s) possible nuclear reaction(s)?\n\n(1) ^27_13 Al + ^4_2 He -> ^30_15 P + proton\n(2) ^2_1 H + ^3_1 H -> ^4_2 He + neutron\n(3) ^234_90 Th -> ^234_91 Pa + beta particle',
    options: ['(1) only', '(2) only', '(2) & (3) only', '(1) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'A valid nuclear reaction must conserve both mass number and atomic number. In (1), the atomic number is not balanced. In (2) and (3), both quantities are conserved, so those two reactions are possible.',
    difficulty: 2,
    points: 15,
    hints: ['Check mass-number balance first', 'Then check charge/atomic-number balance'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-004',
    type: 'multiple_choice',
    question:
      '^27_13 Al + ^4_2 He -> ^30_15 P + X\n\nIn the above nuclear reaction, what are the atomic number and mass number of X ?',
    options: ['Atomic number -1, mass number 0', 'Atomic number -1, mass number 1', 'Atomic number 0, mass number 1', 'Atomic number 1, mass number 0'],
    answer: 'Atomic number 0, mass number 1',
    explanation:
      'Balancing the mass numbers gives 27 + 4 = 30 + A, so A = 1. Balancing the atomic numbers gives 13 + 2 = 15 + Z, so Z = 0. Therefore X is a neutron.',
    difficulty: 2,
    points: 15,
    hints: ['Use conservation of mass number', 'Use conservation of atomic number'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-005',
    type: 'multiple_choice',
    question:
      'In the following nuclear reactions, what do X, Y and Z represent?\n\n(1) ^210_84 Po -> ^206_82 Pb + X\n(2) ^2_1 H + ^3_1 H -> ^4_2 He + Y\n(3) ^234_90 Th -> ^234_91 Pa + Z',
    options: [
      'X: an alpha particle, Y: a proton, Z: a beta particle',
      'X: an alpha particle, Y: a neutron, Z: a beta particle',
      'X: an alpha particle, Y: a neutron, Z: gamma rays',
      'X: a beta particle, Y: a neutron, Z: gamma rays',
    ],
    answer: 'X: an alpha particle, Y: a neutron, Z: a beta particle',
    explanation:
      'Po-210 to Pb-206 loses 4 in mass number and 2 in atomic number, so X is an alpha particle. In D-T fusion, the missing product is a neutron. In Th-234 to Pa-234, the mass number is unchanged while the atomic number increases by 1, so Z is a beta-minus particle.',
    difficulty: 2,
    points: 15,
    hints: ['Identify the particle by balancing mass and atomic number', 'Beta-minus keeps mass number unchanged but increases atomic number by 1'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-006',
    type: 'multiple_choice',
    question:
      '^2_1 H + ^x_1 H -> ^4_y Z + a neutron\n\nFind the values of x and y in the above nuclear reaction.',
    options: ['x = 2, y = 1', 'x = 2, y = 2', 'x = 3, y = 1', 'x = 3, y = 2'],
    answer: 'x = 3, y = 2',
    explanation:
      'The neutron has mass number 1 and atomic number 0. Balancing mass numbers gives 2 + x = 4 + 1, so x = 3. Balancing atomic numbers gives 1 + 1 = y + 0, so y = 2.',
    difficulty: 2,
    points: 15,
    hints: ['Use the neutron symbol ^1_0 n', 'Balance mass number and atomic number separately'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-007',
    type: 'multiple_choice',
    question: 'Which of the following nuclear reactions is a nuclear fusion?',
    options: [
      '^235_92 U + n -> ^144_56 Ba + ^90_36 Kr + 2n',
      '^14_7 N + n -> ^14_6 C + ^1_1 H',
      '^2_1 H + ^3_1 H -> ^4_2 He + n',
      '^238_92 U -> ^234_90 Th + alpha',
    ],
    answer: '^2_1 H + ^3_1 H -> ^4_2 He + n',
    explanation:
      'Fusion is the joining of two light nuclei to form a heavier nucleus. Only the reaction between hydrogen-2 and hydrogen-3 combines two small nuclei into helium-4.',
    difficulty: 1,
    points: 15,
    hints: ['Fusion means combining light nuclei', 'Distinguish it from fission and radioactive decay'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-008',
    type: 'multiple_choice',
    question: 'Which of the following nuclear reactions is a fission ?',
    options: [
      '^235_92 U + ^1_0 n -> ^144_56 Ba + ^89_36 Kr + 3^1_0 n',
      '^238_92 U + ^1_0 n -> ^239_94 Pu + 2 beta particles',
      '^238_92 U + ^14_7 N -> ^248_99 Es + 4^1_0 n',
      '^2_1 H + ^3_1 H -> ^4_2 He + ^1_0 n',
    ],
    answer: '^235_92 U + ^1_0 n -> ^144_56 Ba + ^89_36 Kr + 3^1_0 n',
    explanation:
      'Fission is the splitting of a heavy nucleus into two medium-sized nuclei, usually triggered by a neutron. The U-235 reaction is the standard example of neutron-induced fission.',
    difficulty: 1,
    points: 15,
    hints: ['Look for a heavy nucleus splitting into two smaller nuclei', 'Fusion combines light nuclei instead'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-009',
    type: 'multiple_choice',
    question:
      'Which of the following conditions is/are necessary to sustain the chain reaction in the nuclear fission of uranium-235 ?\n\n(1) Each fission produces a large amount of energy.\n(2) At least one neutron is released in each fission.\n(3) Each fission produces two smaller nuclei.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      'A chain reaction is sustained only if neutrons from one fission can trigger further fissions. The energy released and the production of smaller nuclei are consequences of fission, but they do not by themselves sustain the chain.',
    difficulty: 2,
    points: 15,
    hints: ['Think about what must trigger the next fission event', 'The key is neutron availability'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-010',
    type: 'multiple_choice',
    question: '^2_1 H + ^3_1 H -> ^4_2 He + n\n\nWhich of the following descriptions about the nuclear reaction above is correct ?',
    options: ['It is a nuclear fission.', 'It is a nuclear fusion.', 'It is a chain reaction.', 'It is a radioactive decay.'],
    answer: 'It is a nuclear fusion.',
    explanation:
      'The reaction combines deuterium and tritium, which are two light nuclei, to form a heavier nucleus helium-4. That is the defining feature of nuclear fusion.',
    difficulty: 1,
    points: 15,
    hints: ['Two light nuclei combine', 'This is the standard D-T fusion reaction'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-011',
    type: 'multiple_choice',
    question:
      'Which of the following equations represent possible nuclear reactions?\n\n(1) ^10_5 B + neutron -> ^6_3 Li + ^4_2 He\n(2) ^210_83 Bi -> ^210_84 Po + beta particle\n(3) ^14_7 N + ^4_2 He -> ^17_8 O + proton',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'In (1), nucleon number is not conserved, so it is impossible. In (2), beta-minus decay correctly keeps the mass number unchanged and increases the atomic number by 1. In (3), both mass number and atomic number are conserved, so it is also possible.',
    difficulty: 2,
    points: 15,
    hints: ['Reject any equation that fails nucleon conservation', 'Then check atomic-number conservation'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-012',
    type: 'multiple_choice',
    question: '^14_7 N + alpha particle -> proton + X\n\nIn the above nuclear reaction, X represents',
    options: ['^17_8 O', '^17_9 F', '^17_7 N', '^11_6 C'],
    answer: '^17_8 O',
    explanation:
      'Balancing mass number gives 14 + 4 = 1 + A, so A = 17. Balancing atomic number gives 7 + 2 = 1 + Z, so Z = 8. Therefore X is oxygen-17.',
    difficulty: 2,
    points: 15,
    hints: ['Subtract the proton contribution from both totals', 'Balance mass number and atomic number separately'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-013',
    type: 'multiple_choice',
    question:
      'The main reason why a chain reaction can occur in a nuclear reactor using uranium-235 is that',
    options: [
      'a large quantity of energy is evolved in each fission.',
      'the products of nuclear fission are highly radioactive.',
      'plutonium is produced and it undergoes further fission.',
      'more than 1 neutron is produced when a nucleus undergoes fission.',
    ],
    answer: 'more than 1 neutron is produced when a nucleus undergoes fission.',
    explanation:
      'A chain reaction is sustained because neutrons released in one fission can trigger further fissions in other U-235 nuclei. That requires at least one neutron from each event to continue the process.',
    difficulty: 1,
    points: 15,
    hints: ['Focus on what makes the next fission happen', 'The essential trigger is neutron production'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-014',
    type: 'multiple_choice',
    question:
      'The sun and stars give out their power mainly by\n\n(1) radioactive decay.\n(2) nuclear fission.\n(3) nuclear fusion.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'Stars are powered mainly by nuclear fusion, where light nuclei such as hydrogen combine to form heavier nuclei and release energy. Radioactive decay and fission are not the dominant processes in the Sun.',
    difficulty: 1,
    points: 15,
    hints: ['Think about hydrogen in stars', 'The dominant stellar energy source is fusion'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-015',
    type: 'multiple_choice',
    question:
      'Two deuterons, ^2_1 H, combine together to form a helium isotope, ^3_2 He, with the release of energy as shown below.\n\n2^2_1 H -> ^3_2 He + X + energy\n\nWhich of the following statements are correct ?\n\n(1) This is an example of nuclear fusion.\n(2) The total mass of ^3_2 He and X is greater than that of the two ^2_1 H.\n(3) X is a neutron.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (3) only',
    explanation:
      'This is fusion because two small nuclei combine. Balancing the reaction shows the missing particle X must be a neutron. Since energy is released, there is a mass defect, so the total mass of the products is less, not greater, than the initial mass.',
    difficulty: 2,
    points: 15,
    hints: ['Balance the reaction to identify X', 'Released energy means some mass is converted to energy'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-016',
    type: 'multiple_choice',
    question:
      'The following equation represents a nuclear fission reaction of U-235, producing q neutrons.\n\n^235_92 U + ^1_0 n -> ^141_56 Ba + ^92_Z Kr + q ^1_0 n\n\nWhat are the values of the atomic number Z and the number q ?',
    options: ['Z = 37, q = 2', 'Z = 36, q = 2', 'Z = 36, q = 3', 'Z = 34, q = 3'],
    answer: 'Z = 36, q = 3',
    explanation:
      'Conservation of atomic number gives 92 = 56 + Z, so Z = 36. Conservation of mass number gives 235 + 1 = 141 + 92 + q, so q = 3.',
    difficulty: 2,
    points: 15,
    hints: ['Balance charge first for Z', 'Then balance nucleon number for q'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-017',
    type: 'multiple_choice',
    question:
      'Which of the following nuclear reactions are accompanied with a mass defect ?\n\n(1) ^2_1 H + ^3_1 H -> ^4_2 He + ^1_0 n\n(2) ^226_88 Ra -> ^222_86 Rn + ^4_2 He\n(3) ^1_0 n -> ^1_1 H + beta particle',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      'Whenever energy is released in a nuclear process, some mass is converted into energy, so there is a mass defect. All three listed reactions release energy and therefore involve a mass defect.',
    difficulty: 2,
    points: 15,
    hints: ['Mass defect is tied to released energy', 'Check whether each process releases energy'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-018',
    type: 'multiple_choice',
    question:
      'The sun radiates energy at a constant rate of 4.0 x 10^26 W by a nuclear fusion process. The mass of the sun is 2.0 x 10^30 kg. Estimate the lifetime of the sun if 0.07% of its mass is converted into radiation energy during the sun\'s lifetime.\n\nGiven: 1 year = 3.15 x 10^7 s',
    options: ['1.0 x 10^6 years', '1.0 x 10^10 years', '1.0 x 10^12 years', '1.0 x 10^17 years'],
    answer: '1.0 x 10^10 years',
    explanation:
      'The usable mass is 0.07% of 2.0 x 10^30 kg, which is 1.4 x 10^27 kg. Using E = mc^2 gives about 1.26 x 10^44 J. Dividing by the power output 4.0 x 10^26 W gives about 3.15 x 10^17 s, which is about 1.0 x 10^10 years.',
    difficulty: 2,
    points: 15,
    hints: ['First find 0.07% of the Sun\'s mass', 'Then use E = mc^2 and divide by power'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-019',
    type: 'multiple_choice',
    question: 'In which type of nuclear reaction are the daughter nuclei heavier than the mother nuclei ?',
    options: ['alpha-decay', 'beta-decay', 'gamma-emission', 'nuclear fusion'],
    answer: 'nuclear fusion',
    explanation:
      'In nuclear fusion, lighter nuclei combine to form a heavier nucleus. In alpha, beta, and gamma processes, the daughter nucleus is not heavier than the original mother nucleus in that sense.',
    difficulty: 1,
    points: 15,
    hints: ['Fusion combines smaller nuclei', 'The question asks when the product nucleus is heavier'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-020',
    type: 'multiple_choice',
    question:
      'A worker at a nuclear plant walks into a room and is accidentally exposed to a small amount of radiation. The worker will',
    options: ['lose consciousness.', 'feel very hot.', 'feel painful.', 'feel no effect.'],
    answer: 'feel no effect.',
    explanation:
      'A small radiation exposure usually has no immediate sensation. The danger is the accumulated biological effect and the increased long-term risk, not an instant physical feeling.',
    difficulty: 1,
    points: 15,
    hints: ['Think about immediate sensation versus long-term risk', 'Small doses are not usually felt at once'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-021',
    type: 'multiple_choice',
    question:
      'In the Sun, energy is released when hydrogen nuclei collide and form heavier nuclei. This process is called',
    options: ['diffusion.', 'fission.', 'fusion.', 'ionization.'],
    answer: 'fusion.',
    explanation:
      'The Sun produces energy mainly by nuclear fusion, in which light hydrogen nuclei combine to form heavier nuclei and release energy.',
    difficulty: 1,
    points: 15,
    hints: ['Hydrogen nuclei combine, not split', 'This is the same process that powers stars'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-022',
    type: 'multiple_choice',
    question:
      'In a particular chain reaction, a neutron collides with a heavy nucleus. The nucleus then splits to give two lighter nuclei, energy and',
    options: ['alpha particles.', 'beta particles.', 'protons.', 'neutrons.'],
    answer: 'neutrons.',
    explanation:
      'In nuclear fission, extra neutrons are commonly released together with the lighter nuclei and energy. These neutrons can go on to trigger further fissions and sustain the chain reaction.',
    difficulty: 1,
    points: 15,
    hints: ['Think about what continues the chain reaction', 'Fission releases neutrons'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-023',
    type: 'multiple_choice',
    question:
      'Which of the following show(s) nuclear fission ?\n\n(1) ^235_92 U + ^1_0 n -> ^141_56 Ba + ^92_36 Kr + 3^1_0 n\n(2) ^241_94 Pu -> ^237_92 U + ^4_2 He\n(3) ^2_1 H + ^2_1 H -> ^4_2 He',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'Reaction (1) is the splitting of a heavy uranium nucleus into two lighter nuclei, so it is fission. Reaction (2) is alpha decay, and reaction (3) is fusion.',
    difficulty: 1,
    points: 15,
    hints: ['Fission means a heavy nucleus splits', 'Do not confuse alpha decay or fusion with fission'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-024',
    type: 'multiple_choice',
    question: 'A U-235 nucleus will split when it captures',
    options: ['an alpha particle.', 'a beta particle.', 'a neutron.', 'a proton.'],
    answer: 'a neutron.',
    explanation:
      'A U-235 nucleus is made to undergo fission when it absorbs a neutron. That captured neutron destabilizes the nucleus and triggers the split.',
    difficulty: 1,
    points: 15,
    hints: ['U-235 fission is neutron-induced', 'Think of the standard reactor reaction'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-025',
    type: 'multiple_choice',
    question:
      'The Sun releases its energy mainly by\n\n(1) radioactive decay.\n(2) nuclear fission.\n(3) nuclear fusion.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'The Sun is powered mainly by nuclear fusion, where hydrogen nuclei combine to form heavier nuclei and release energy. Radioactive decay and fission are not the main solar energy source.',
    difficulty: 1,
    points: 15,
    hints: ['The Sun uses hydrogen as fuel', 'That points to fusion'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-026',
    type: 'multiple_choice',
    question:
      'The following equations represent some typical nuclear reactions:\n\n(I) ^9_4 Be + ^1_1 H -> ^6_3 Li + ^4_2 He\n(II) ^2_1 H + ^3_1 H -> ^4_2 He + ^1_0 n\n(III) ^235_92 U + ^1_0 n -> ^141_57 La + ^92_35 Br + 3^1_0 n\n\nWhich of the following descriptions of these reactions is/are correct ?\n\n(1) Reaction (I) represents an alpha-decay.\n(2) Reaction (II) represents a nuclear fusion.\n(3) Reaction (III) represents a nuclear fission.',
    options: ['(1) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      'Reaction (I) is a bombardment reaction, not alpha decay. Reaction (II) combines two light nuclei, so it is fusion. Reaction (III) splits a heavy nucleus into smaller nuclei, so it is fission.',
    difficulty: 2,
    points: 15,
    hints: ['Classify each reaction by what happens to the nuclei', 'Bombardment is different from decay'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-027',
    type: 'multiple_choice',
    question:
      'The main reason why a chain reaction can occur in a nuclear reactor using uranium is that',
    options: [
      'a large amount of energy is released in each fission.',
      'the products of nuclear fission are highly radioactive.',
      'uranium splits into two smaller fragments.',
      'fission neutrons are produced',
    ],
    answer: 'fission neutrons are produced',
    explanation:
      'The chain reaction is sustained because neutrons released in one fission can trigger more fissions in other uranium nuclei. That is the essential mechanism.',
    difficulty: 1,
    points: 15,
    hints: ['What starts the next fission?', 'Look for the self-sustaining trigger'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-028',
    type: 'multiple_choice',
    question:
      'If there were accident in a nearby nuclear power plant, which of the following is NOT the way that the radioactive substances released in the accident can spread to the neighbouring lands ?',
    options: ['By wind', 'By rain water', 'By animals', 'By plants'],
    answer: 'By plants',
    explanation:
      'Wind, rain, and animals can physically carry radioactive contamination from one place to another. Plants can absorb contamination locally, but they do not themselves move the contamination between places in the same way.',
    difficulty: 1,
    points: 15,
    hints: ['Think about actual transport mechanisms', 'The question asks what is NOT a spreading route'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-029',
    type: 'multiple_choice',
    question: 'Which of the following is NOT the disadvantage of using nuclear energy ?',
    options: [
      'The capital investment of a nuclear power plant is very large.',
      'There must be leakage of radiation in a nuclear power plant.',
      'Once accident occurs, it would be very serious.',
      'The disposal of radioactive waste is a difficult problem.',
    ],
    answer: 'There must be leakage of radiation in a nuclear power plant.',
    explanation:
      'A properly designed and operated nuclear power plant is intended to prevent radiation leakage. The other three are genuine disadvantages or concerns associated with nuclear power.',
    difficulty: 1,
    points: 15,
    hints: ['Identify the statement that is not inherently true', 'Good design aims to prevent leakage'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-030',
    type: 'multiple_choice',
    question:
      'Which of the following do(es) NOT make use of nuclear fusion ?\n\n(1) A nuclear bomb\n(2) A hydrogen bomb\n(3) Emission of light by a star',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'A conventional nuclear bomb works mainly by fission, not fusion. A hydrogen bomb and the energy production in stars both involve nuclear fusion.',
    difficulty: 1,
    points: 15,
    hints: ['Separate fission weapons from fusion processes', 'Stars are fusion-powered'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-031',
    type: 'multiple_choice',
    question:
      'Which of the followings are the advantages of using nuclear energy ?\n\n(1) Nuclear energy causes less pollution to our environment.\n(2) The running cost of power plant using nuclear energy is lower.\n(3) Nuclear energy is the only choice other than the use of fossil fuel.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      'Nuclear power can reduce air pollution compared with fossil-fuel combustion, and its running cost can be relatively low once operating. It is not the only alternative to fossil fuels, because renewables also exist.',
    difficulty: 1,
    points: 15,
    hints: ['Identify which statement is too absolute', 'There are multiple alternatives to fossil fuels'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-032',
    type: 'multiple_choice',
    question:
      'Which of the following are the advantages of using nuclear fusion to generate electricity ?\n\n(1) The fuel for nuclear fusion is hydrogen which has unlimited supply in oceans.\n(2) The waste products in nuclear fusion are not radioactive.\n(3) The nuclear fusion takes place at a very high temperature.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      'Fusion has the advantage of abundant fuel sources and much less problematic waste. The need for extremely high temperature is a technical difficulty, not an advantage.',
    difficulty: 1,
    points: 15,
    hints: ['Treat high temperature as an engineering challenge', 'Look for actual benefits of fusion'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-033',
    type: 'multiple_choice',
    question:
      'Which of the following are the difficulties to use nuclear fusion for generating electricity ?\n\n(1) Nuclear fusion can only take place at a very high temperature.\n(2) No physical container can withstand the high temperature that fusion occurs.\n(3) It is difficult to dispose the waste products of the fusion.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      'Fusion requires extremely high temperature, and containing such hot plasma is a major engineering problem. Disposal of fusion waste is not the main difficulty compared with fission, because fusion products are much less problematic.',
    difficulty: 1,
    points: 15,
    hints: ['Separate engineering difficulties from waste issues', 'High temperature containment is the key challenge'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-034',
    type: 'multiple_choice',
    question:
      'Which of the following nuclear reactions is/are an example of fusion ?\n\n(1) ^226_88 Ra -> ^222_86 Rn + ^4_2 He + energy\n(2) ^14_6 C -> ^14_7 N + ^0_-1 e + energy\n(3) ^2_1 H + ^2_1 H -> ^3_2 He + ^1_0 n + energy',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'Fusion is the combination of two light nuclei into a heavier nucleus. Only reaction (3) combines two deuterium nuclei. Reactions (1) and (2) are alpha decay and beta decay respectively.',
    difficulty: 1,
    points: 15,
    hints: ['Identify the reaction where two small nuclei combine', 'Decay processes are not fusion'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-035',
    type: 'multiple_choice',
    question: 'Which of the following nuclear reactions is an example of fusion ?',
    options: [
      'Carbon-14 decaying to nitrogen and an electron',
      'Two heavy hydrogen nuclei becoming helium and a neutron',
      'Radium-226 decaying to radon-222 and an alpha particle',
      'Sodium-24 decaying to magnesium-24 and a beta particle',
    ],
    answer: 'Two heavy hydrogen nuclei becoming helium and a neutron',
    explanation:
      'Fusion is the joining of light nuclei. The reaction in which two hydrogen isotopes combine to form helium and a neutron is the standard fusion example.',
    difficulty: 1,
    points: 15,
    hints: ['Look for a combination reaction', 'The hydrogen-isotope reaction is fusion'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-036',
    type: 'multiple_choice',
    question:
      'In the following nuclear decay:\n\n^24_11 Na -> ^24_12 Mg + ^0_-1 beta\n\nGiven the data below:\n\nmass of ^24_11 Na = 23.99096 u\nmass of ^24_12 Mg = 23.98504 u\nenergy released in the decay = 5.00216 MeV\n\nCalculate the rest mass of the beta particle released.',
    options: ['0.00025 u', '0.00055 u', '0.00085 u', '0.00952 u'],
    answer: '0.00055 u',
    explanation:
      'Convert the released energy into mass equivalent: 5.00216 MeV / 931 about 0.00537 u. By conservation of mass-energy, 23.99096 = 23.98504 + m_beta + 0.00537, so m_beta about 0.00055 u.',
    difficulty: 2,
    points: 15,
    hints: ['Use 1 u equivalent to 931 MeV', 'Include the mass equivalent of released energy'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-037',
    type: 'multiple_choice',
    question:
      'A star releases energy by nuclear fusion continuously. The mass of the star decreases by 2 x 10^16 kg in one year. Calculate the average power released by the star.',
    options: ['5.7 x 10^25 W', '6.9 x 10^25 W', '7.2 x 10^25 W', '8.6 x 10^25 W'],
    answer: '5.7 x 10^25 W',
    explanation:
      'Using E = mc^2, the energy released in one year is (2 x 10^16)(3 x 10^8)^2 = 1.8 x 10^33 J. Dividing by about 3.15 x 10^7 s gives an average power of about 5.7 x 10^25 W.',
    difficulty: 2,
    points: 15,
    hints: ['Find the energy from the lost mass first', 'Then divide by the time for one year'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-038',
    type: 'multiple_choice',
    question: 'Which of these is a nuclear fusion reaction ?',
    options: [
      '^235_92 U + n -> ^144_56 Ba + ^90_36 Kr + 2n',
      '^2_1 H + ^3_1 H -> ^4_2 He + n',
      '^14_7 N + n -> ^14_6 C + ^1_1 H',
      '^238_92 U -> ^234_90 Th + alpha',
    ],
    answer: '^2_1 H + ^3_1 H -> ^4_2 He + n',
    explanation:
      'Only the deuterium-tritium reaction combines two light nuclei into a heavier nucleus, so it is fusion. The others are fission, bombardment, or alpha decay.',
    difficulty: 1,
    points: 15,
    hints: ['Fusion joins light nuclei', 'The D-T reaction is the standard example'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-039',
    type: 'multiple_choice',
    question:
      'For the following nuclear reaction, state the type of reaction and determine the energy released.\n\n^2_1 H + ^3_1 H -> ^4_2 He + ^1_0 n\n\nGiven: mass of ^2_1 H = 2.014 u\nmass of ^3_1 H = 3.016 u\nmass of ^4_2 He = 4.003 u\nmass of ^1_0 n = 1.009 u',
    options: [
      'fusion, 0.018 MeV',
      'fusion, 16.76 MeV',
      'fission, 0.018 MeV',
      'fission, 16.76 MeV',
    ],
    answer: 'fusion, 16.76 MeV',
    explanation:
      'This is fusion because two light hydrogen nuclei combine. The mass defect is 2.014 + 3.016 - 4.003 - 1.009 = 0.018 u. Multiplying by 931 MeV per u gives about 16.76 MeV released.',
    difficulty: 2,
    points: 15,
    hints: ['First identify the reaction type', 'Use mass defect x 931 MeV/u'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-040',
    type: 'multiple_choice',
    question:
      'The sun releases huge amount of energy through thermonuclear fusion while at the same time its mass decreases. The average power released by the sun is about 3.8 x 10^26 W. Estimate the decrease in mass of the sun in one second.',
    options: ['4.2 x 10^6 kg', '4.2 x 10^9 kg', '1.3 x 10^15 kg', '1.3 x 10^18 kg'],
    answer: '4.2 x 10^9 kg',
    explanation:
      'In 1 second the energy released is 3.8 x 10^26 J. Using E = mc^2 gives m = E/c^2 = (3.8 x 10^26)/(9 x 10^16) about 4.2 x 10^9 kg.',
    difficulty: 2,
    points: 15,
    hints: ['Use E = Pt for 1 second', 'Then apply E = mc^2'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-041',
    type: 'multiple_choice',
    question:
      'A radium nucleus decays to a radon nucleus by emitting an alpha-particle. The energy released in the process is 4.9 MeV. Compared to the mass of a radium nucleus, the total mass of a radon nucleus and an alpha-particle is',
    options: [
      '5.4 x 10^-21 kg less.',
      '5.4 x 10^-11 kg more.',
      '8.7 x 10^-31 kg less.',
      '8.7 x 10^-30 kg more.',
    ],
    answer: '8.7 x 10^-31 kg less.',
    explanation:
      'The released energy corresponds to a mass defect. Converting 4.9 MeV to joules and using E = mc^2 gives Delta m about 8.7 x 10^-31 kg. Since energy is released, the product mass is less than the original radium nucleus mass.',
    difficulty: 2,
    points: 15,
    hints: ['Convert MeV to joules first', 'Released energy means the final mass is smaller'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-042',
    type: 'multiple_choice',
    question:
      'Which of the following nuclear reactions is/are spontaneous reaction(s)?\n\n(1) ^24_11 Na -> ^24_12 Mg + ^0_-1 e\n(2) ^10_5 B + ^1_0 n -> ^7_3 Li + ^4_2 He\n(3) ^2_1 H + ^3_1 H -> ^4_2 He + ^1_0 n',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'Reaction (1) is beta decay, which is a spontaneous radioactive process. Reaction (2) is a bombardment reaction requiring an incoming neutron, and reaction (3) is fusion which requires special conditions such as very high temperature, so those are not spontaneous in the same sense.',
    difficulty: 2,
    points: 15,
    hints: ['Spontaneous means no external trigger is needed', 'Radioactive decay is spontaneous'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-043',
    type: 'multiple_choice',
    question:
      'The following shows the decay of uranium-238.\n\n^238_92 U -> ^234_90 Th + ^4_2 He\n\nGiven that: mass of ^238_92 U = 238.05079 u\nmass of ^234_90 Th = 234.04363 u\nmass of ^4_2 He = 4.00260 u\n\nWhich of the following statements is/are correct?\n\n(1) The temperature required to start the decay is about 10^7 K.\n(2) The energy released in the decay of one uranium-238 nucleus is 4.25 MeV.\n(3) All the energy released in the decay becomes the kinetic energy of ^4_2 He.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      'Alpha decay is spontaneous and does not require any special starting temperature. The mass defect is 238.05079 - 234.04363 - 4.00260 = 0.00456 u, so the energy released is 0.00456 x 931 about 4.25 MeV. That energy is shared mainly as kinetic energy of both the thorium nucleus and the alpha particle, not just the alpha particle alone.',
    difficulty: 2,
    points: 15,
    hints: ['Alpha decay is spontaneous', 'Use mass defect x 931 MeV/u'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-044',
    type: 'multiple_choice',
    question:
      'Which of the following nuclear reactions is/are possible for a chain reaction to occur ?\n\n(1) ^2_1 H + ^3_1 H -> ^1_0 n + ^4_2 He\n(2) ^235_92 U + ^1_0 n -> ^141_56 Ba + ^92_36 Kr + 3^1_0 n\n(3) ^239_94 Pu + ^1_0 n -> ^148_58 Ce + ^89_36 Kr + 3^1_0 n',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'A chain reaction requires fission reactions that release neutrons capable of triggering further fissions. Reaction (1) is fusion, so it does not form the usual neutron-driven chain reaction. Reactions (2) and (3) are fission reactions that each release 3 neutrons, so a chain reaction is possible.',
    difficulty: 2,
    points: 15,
    hints: ['Chain reactions here are tied to fission', 'Look for reactions releasing fission neutrons'],
    sectionId: 'nuclear-energy',
  },
  {
    id: 'ne-045',
    type: 'multiple_choice',
    question:
      'Given: mass of proton = 1.007276 u\nmass of neutron = 1.008665 u\nmass of ^3_2 He nucleus = 3.016030 u\n\nWhen a ^3_2 He nucleus is formed from 2 protons and 1 neutron,',
    options: [
      '6.7 MeV energy is released.',
      '6.7 MeV energy is required.',
      '8.0 MeV energy is released.',
      '8.0 MeV energy is required.',
    ],
    answer: '6.7 MeV energy is released.',
    explanation:
      'The mass defect is 2(1.007276) + 1.008665 - 3.016030 = 0.007187 u. Multiplying by 931 MeV/u gives about 6.7 MeV. Since the product mass is smaller, that energy is released.',
    difficulty: 2,
    points: 15,
    hints: ['Compute the mass defect first', 'A positive mass defect corresponds to released energy'],
    sectionId: 'nuclear-energy',
  },
];
