import { Exercise } from '../types';

// Electricity and Magnetism - DSE Style (All in English)
export const ELECTRICITY_MAGNETISM_EXERCISES: Exercise[] = [
  {
    id: 'ec-001',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the battery has an e.m.f. of 6 V with negligible internal resistance. Four resistors are connected to the battery as shown in the figure.\n\nWhat is the potential difference between points $P$ and $Q$ ?',
    options: ['1 V', '2 V', '3 V', '4 V'],
    answer: '4 V',
    explanation:
      'The upper branch has two series resistors of 4 ohm and 8 ohm sharing the full 6 V supply. In series, the voltage division is proportional to resistance, so the voltage across the 8 ohm resistor is 6 x 8 / (4 + 8) = 4 V. Since points $P$ and $Q$ are across that resistor, the potential difference between them is 4 V.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use voltage division for resistors in series',
      'The full branch voltage is 6 V',
      'The 8 ohm resistor gets the larger share of voltage',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-001-question.png'],
  },
  {
    id: 'ec-002',
    type: 'multiple_choice',
    question:
      'Two identical resistors $R$, an ammeter, a switch $K$ and a cell are connected as shown. When $K$ is open, the ammeter reading is 1 A . When $K$ is closed, the reading will',
    options: ['not change.', 'increase to 2 A .', 'increase to 4 A .', 'decrease to 1/2 A .'],
    answer: 'not change.',
    explanation:
      'Closing switch $K$ changes the overall circuit arrangement, but the voltage across the upper resistor branch containing the ammeter remains unchanged. Since that resistor is unchanged and the branch voltage is unchanged, the current through the ammeter branch stays the same. Therefore the ammeter reading does not change.',
    difficulty: 2,
    points: 15,
    hints: [
      'Focus on the branch that contains the ammeter',
      'Check whether the potential difference across that branch changes',
      'If branch voltage and resistance are unchanged, current is unchanged',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-002-question.png'],
  },
  {
    id: 'ec-003',
    type: 'multiple_choice',
    question:
      'In the circuit shown, $\\mathbf{V}$ is a voltmeter of high internal resistance and $\\mathbf{A}$ is an ammeter of low internal resistance. What is the voltmeter reading when (a) switch $K$ is open, and (b) switch $K$ is closed ?',
    options: ['0 V, 0 V', '0 V, 2 V', '1 V, 1 V', '2 V, 0 V'],
    answer: '2 V, 0 V',
    explanation:
      'When $K$ is open, the voltmeter has very high resistance, so essentially the full cell voltage appears across it and the reading is 2 V. When $K$ is closed, the low-resistance ammeter branch effectively bypasses the voltmeter branch, so the potential difference across the voltmeter becomes 0 V. Therefore the correct pair is 2 V, 0 V.',
    difficulty: 3,
    points: 20,
    hints: [
      'An ideal voltmeter has very large resistance',
      'An ideal ammeter has very small resistance',
      'A low-resistance bypass can reduce the p.d. across the voltmeter to zero',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-003-question.png'],
  },
  {
    id: 'ec-004',
    type: 'multiple_choice',
    question:
      'Suppose that it takes 8 minutes to boil a kettle of water. If the heating coil of the kettle is shortened to half its original length and the supply voltage remains unchanged, then to boil the same amount of water will take',
    options: ['16 min .', '8 min .', '4 min .', '2 min.'],
    answer: '4 min .',
    explanation:
      'For the same material and cross-sectional area, resistance is proportional to wire length, so halving the coil length halves the resistance. With supply voltage unchanged, power P = V^2 / R, so the power doubles. Since the same amount of energy is needed to boil the same water, and time = energy / power, doubling the power halves the heating time. So the time becomes 4 minutes.',
    difficulty: 2,
    points: 15,
    hints: [
      'For a wire, resistance is proportional to length',
      'Use P = V^2 / R because the supply voltage stays constant',
      'Same required energy means heating time is inversely proportional to power',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-005',
    type: 'multiple_choice',
    question:
      'In the circuit shown, what is the power dissipated in the $4 \\Omega$ resistor ?',
    options: ['0.5 W', '1.0 W', '1.5 W', '2.0 W'],
    answer: '1.0 W',
    explanation:
      'The resistors are connected in parallel, so the 4 ohm resistor has the same potential difference as the branch voltage, which is 2 V. Using P = V^2 / R gives P = 2^2 / 4 = 1 W. Therefore the power dissipated in the 4 ohm resistor is 1.0 W.',
    difficulty: 2,
    points: 15,
    hints: [
      'Parallel components share the same voltage',
      'Use the branch voltage across the 4 ohm resistor',
      'Then apply P = V^2 / R',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-005-question.png'],
  },
  {
    id: 'es-001',
    type: 'multiple_choice',
    question:
      'Two light conducting spheres are suspended from two silk threads. If they are found to attract one another, which of the following conclusions is/are correct?\n\n(1) They carry similar charges.\n(2) They carry opposite charges.\n(3) Only one of them is charged.',
    options: ['(2) only', '(3) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Like charges repel, but attraction can occur either between opposite charges or between a charged and an uncharged conductor (by induction).\n\n**Step 1:** Check statement (1)\nSimilar charges repel, so (1) is false.\n\n**Step 2:** Check statement (2)\nOpposite charges attract, so (2) can be true.\n\n**Step 3:** Check statement (3)\nIf only one sphere is charged, it induces an opposite charge on the near side of the uncharged sphere, producing a net attraction. So (3) can be true.\n\n**Verification:** The observation is 闂傚倷鑳堕崑銊╁磿閼碱剛鍗氱紒浣哥獝ract闂? so the situation is consistent with (2) or with (3), but not with (1).',
    difficulty: 2,
    points: 15,
    hints: [
      'Similar charges repel, so attraction rules out statement (1)',
      'Opposite charges attract, so statement (2) is possible',
      'A charged conductor can attract an uncharged conductor by electrostatic induction'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-001-question.png'],
  },
  {
    id: 'es-002',
    type: 'multiple_choice',
    question:
      'Three metal spheres $X$, $Y$ and $Z$ are placed in contact as shown. A negatively charged rod is brought near $Z$. The sphere $Y$ is then earthed while the charged rod is still nearby. Which of the following statements is/are true?\n\n(1) $X$ is negatively charged.\n(2) $Y$ is neutral.\n(3) $Z$ is positively charged.',
    options: ['(3) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Grounding while a charged object is nearby removes excess electrons, leaving induced positive charge near the rod.\n\n**Step 1:** Induction by the negative rod\nThe negative rod repels electrons, so positive charge is induced on $Z$ while electrons move toward $X$ and $Y$.\n\n**Step 2:** Earth sphere $Y$\nGrounding allows the excess electrons on $X$闂?Y$ to flow to Earth, but the induced positive charge on $Z$ remains attracted by the rod.\n\n**Step 3:** Final charges\nAfter grounding, $X$ and $Y$ are neutral and $Z$ is positively charged.\n\n**Verification:** Statements (2) and (3) are true; (1) is false. So the correct answer is option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'A nearby negative rod repels electrons away from $Z$',
      'Grounding lets excess electrons flow to Earth',
      'After grounding, $X$ and $Y$ are neutral while $Z$ stays positive'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-002-question.png'],
  },
  {
    id: 'es-003',
    type: 'multiple_choice',
    question:
      'Two uncharged metal spheres in contact are suspended by dry cotton threads. When a positively charged rod $X$ is brought near them as shown, the distribution of charges on the spheres will be',
    options: [
      '/physics/exercises/electrostatics/es-003-option-a.png',
      '/physics/exercises/electrostatics/es-003-option-b.png',
      '/physics/exercises/electrostatics/es-003-option-c.png',
      '/physics/exercises/electrostatics/es-003-option-d.png'
    ],
    answer: '/physics/exercises/electrostatics/es-003-option-c.png',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** A nearby positive rod attracts electrons, and because the two spheres are in contact, electrons shift toward the sphere closer to the rod, leaving the farther sphere electron闂傚倷鑳堕崑銊╁磿閺屻儱瑙﹂柍褏鎯坒icient.\n\n**Step 1:** Consider induction by the positive rod\nElectrons are attracted toward the rod, so the sphere nearer the rod gains negative charge.\n\n**Step 2:** Apply charge redistribution through contact\nBecause the spheres are touching, electrons flow from the farther sphere to the nearer sphere until electrostatic equilibrium is reached.\n\n**Verification:** The near sphere becomes negatively charged and the far sphere becomes positively charged, matching option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'A positive rod attracts electrons toward itself',
      'Electrons can move freely because the spheres are in contact',
      'The sphere nearer the rod becomes negative, the farther sphere becomes positive'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-003-question.png'],
  },
  {
    id: 'es-004',
    type: 'multiple_choice',
    question:
      'Two uncharged metal spheres are suspended by insulating threads as shown in the diagram. A plastic sheet is put between them. When a positively charged rod $X$ is brought near them as shown, which of the following diagrams shows the resulting charge distribution of the spheres?',
    options: [
      '/physics/exercises/electrostatics/es-004-option-a.png',
      '/physics/exercises/electrostatics/es-004-option-b.png',
      '/physics/exercises/electrostatics/es-004-option-c.png',
      '/physics/exercises/electrostatics/es-004-option-d.png'
    ],
    answer: '/physics/exercises/electrostatics/es-004-option-a.png',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The plastic sheet prevents charge flow between the two spheres, so each sphere polarizes independently by induction.\n\n**Step 1:** Polarization of the right sphere\nThe positive rod attracts electrons to the near side of the right sphere, making its near side negative and far side positive.\n\n**Step 2:** Effect on the left sphere across the plastic sheet\nBecause the sheet is insulating, charges cannot move from one sphere to the other. The positive region on the far side of the right sphere induces negative charge on the near side of the left sphere and positive charge on its far side.\n\n**Verification:** Both spheres are polarized, with negative charge facing the inducing positive region and positive charge on the opposite side, matching option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'The plastic sheet prevents charge transfer between the spheres',
      'Each sphere polarizes by induction with negative charge on the side facing a nearby positive region',
      'Look for the diagram where both spheres are polarized independently'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-004-question.png'],
  },
  {
    id: 'es-005',
    type: 'multiple_choice',
    question:
      'The diagram shows two conducting spheres $X$ and $Y$ mounted on insulating stands. Sphere $X$ carries positive charges and sphere $Y$ carries negative charges. As $Y$ is moved slowly towards $X$ (but without touching $X$), the total charges on $X$',
    options: ['increase and are positive', 'remain unchanged.', 'become negative', 'disappear.'],
    answer: 'remain unchanged.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Induction redistributes charge on a conductor but does not change its total charge unless there is contact or grounding.\n\n**Step 1:** Identify whether sphere $X$ is isolated\nSphere $X$ is on an insulating stand and does not touch any other body, so there is no path for charge to enter or leave.\n\n**Step 2:** Consider the effect of the approaching sphere $Y$\nThe negative charges on $Y$ can polarize charges on $X$, but this only rearranges charges on the surface; it does not change the net charge of $X$.\n\n**Verification:** Since $X$ is isolated and not grounded, its total charge remains positive and unchanged.',
    difficulty: 2,
    points: 15,
    hints: [
      'Is there any contact or grounding for sphere $X$?',
      'Induction can redistribute charge but does not change net charge',
      'An isolated conductor keeps its total charge constant'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-005-question.png'],
  },
  {
    id: 'es-006',
    type: 'multiple_choice',
    question:
      'In the figure shown, an electron travels in a horizontal direction and enters a uniform electric field. The direction of the electric field is as shown. What is the direction of the force due to the electric field acting on the electron?',
    options: ['upwards', 'downwards', 'into the page', 'out of the page'],
    answer: 'upwards',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The electric force on a charge is $\\vec{F} = q\\vec{E}$, so a negative charge feels a force opposite to the field direction.\n\n**Step 1:** Identify the sign of the charge\nAn electron has charge $q = -e$.\n\n**Step 2:** Apply $\\vec{F} = q\\vec{E}$\nBecause $q$ is negative, the force is opposite to the direction of the electric field shown.\n\n**Verification:** With the field shown downward between the plates, the force on the electron is upward, matching option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use $\\vec{F} = q\\vec{E}$',
      'An electron has negative charge',
      'Force on a negative charge is opposite to $\\vec{E}$'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-006-question.png'],
  },
  {
    id: 'es-007',
    type: 'multiple_choice',
    question:
      'A positively charged metal sphere $X$ is brought near an uncharged metal sphere $Y$ as shown. $Y$ is then touched momentarily with a finger. $X$ is then taken away. $Y$ is now',
    options: [
      'positively charged.',
      'negatively charged.',
      'negatively charged on the left side and positively charged on the right side.',
      'positively charged on the left side and negatively charged on the right side.'
    ],
    answer: 'negatively charged.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Grounding while a positive charge is nearby lets electrons flow onto $Y$. After removing the positive sphere, the extra electrons remain and spread uniformly.\n\n**Step 1:** Induction by the positive sphere\nThe nearby positive sphere attracts electrons to the near side of $Y$, leaving the far side positive.\n\n**Step 2:** Ground $Y$\nWhen $Y$ is touched, electrons flow from Earth onto $Y$, because the positive sphere attracts them.\n\n**Step 3:** Remove the charged sphere\nAfter $X$ is taken away, the extra electrons remain on $Y$ and redistribute uniformly over the surface.\n\n**Verification:** $Y$ is left with a net negative charge, matching option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'A positive sphere attracts electrons toward $Y$',
      'Touching $Y$ provides a path for electrons from Earth',
      'After removing $X$, the extra electrons remain and spread out'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-007-question.png'],
  },
  {
    id: 'es-008',
    type: 'multiple_choice',
    question:
      'A positively-charged metal sphere is mounted on an insulating stand. When the sphere is earthed with a finger,',
    options: [
      'protons will move from the sphere to the earth.',
      'protons will move from the earth to the sphere.',
      'electrons will move from the sphere to the earth.',
      'electrons will move from the earth to the sphere.'
    ],
    answer: 'electrons will move from the earth to the sphere.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** In metals, only electrons are mobile. Grounding a positively charged conductor allows electrons to flow in and neutralize it.\n\n**Step 1:** Identify the mobile charge carriers\nProtons are fixed in the lattice; electrons are the mobile charges.\n\n**Step 2:** Apply grounding effect\nThe positively charged sphere has an electron deficit. When earthed, electrons flow from the Earth into the sphere.\n\n**Verification:** Electron flow from Earth neutralizes the positive charge, matching option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Only electrons move in a metal conductor',
      'A positive charge means electron deficit',
      'Grounding allows electrons to flow in'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-009',
    type: 'multiple_choice',
    question:
      'In the figure shown, $X$ and $Y$ are two insulated metal spheres in contact with each other. A negatively charged object $C$ is brought near $X$. $X$ is touched momentarily with a finger, and then $X$ and $Y$ are separated. The charges on $X$ and $Y$ are',
    options: [
      'Sphere $X$ positive, Sphere $Y$ positive',
      'Sphere $X$ positive, Sphere $Y$ negative',
      'Sphere $X$ negative, Sphere $Y$ negative',
      'Sphere $X$ positive, Sphere $Y$ zero'
    ],
    answer: 'Sphere $X$ positive, Sphere $Y$ zero',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Grounding while a negative charge is nearby removes excess electrons, leaving a net positive charge on the side near the inducer; separation then fixes the charges.\n\n**Step 1:** Induction by the negative object\nThe negative object repels electrons. With $X$闂?Y$ in contact, electrons move toward $Y$, leaving positive charge on the side of $X$ nearest $C$.\n\n**Step 2:** Ground $X$\nTouching $X$ allows electrons (especially those on $Y$) to flow to Earth, while the positive charge near $C$ remains attracted and cannot leave.\n\n**Step 3:** Separate the spheres\nAfter separation, $X$ retains net positive charge and $Y$ is neutral.\n\n**Verification:** This corresponds to option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'A nearby negative object repels electrons from $X$ toward $Y$',
      'Grounding lets excess electrons flow to Earth',
      'After separation, $X$ stays positive while $Y$ becomes neutral'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-009-question.png'],
  },
  {
    id: 'es-010',
    type: 'multiple_choice',
    question:
      'A positively charged rod is brought near an insulated uncharged metal sphere as shown in the figure. If the sphere is earthed with a finger,',
    options: [
      'positive charges flow from the earth to the sphere.',
      'electrons flow from the earth to the sphere.',
      'electrons flow from the sphere to the earth.',
      'the sphere is completely discharged.'
    ],
    answer: 'electrons flow from the earth to the sphere.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** A nearby positive rod induces a positive region on the far side of the sphere; grounding supplies electrons from Earth to neutralize that positive region.\n\n**Step 1:** Induction by the positive rod\nElectrons are attracted toward the rod, leaving a net positive charge on the far side of the sphere.\n\n**Step 2:** Ground the sphere\nWhen earthed, electrons flow from the Earth into the sphere to neutralize the induced positive region.\n\n**Verification:** The correct statement is that electrons flow from Earth to the sphere, matching option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'A positive rod attracts electrons toward itself',
      'Grounding allows electrons to flow from Earth',
      'The net effect is electrons entering the sphere'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-010-question.png'],
  },
  {
    id: 'es-011',
    type: 'multiple_choice',
    question:
      'An uncharged light conducting sphere is suspended by an insulating thread. The metal dome of an operating Van de Graaff generator is brought near the sphere. Which of the following statements best describes the motion of the sphere?',
    options: [
      'The sphere remains stationary.',
      'The sphere moves away from the dome.',
      'The sphere moves towards the dome, touches it and remains there.',
      'The sphere moves towards the dome, touches it and then moves away.'
    ],
    answer: 'The sphere moves towards the dome, touches it and then moves away.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** A neutral conductor is attracted to a charged object by induction, but after contact it gains the same sign of charge and is repelled.\n\n**Step 1:** Induction and attraction\nThe charged dome polarizes the neutral sphere, creating attraction, so the sphere moves toward the dome.\n\n**Step 2:** Contact and charge transfer\nOn touching, the sphere gains the same sign of charge as the dome.\n\n**Step 3:** Repulsion\nLike charges repel, so the sphere moves away after contact.\n\n**Verification:** This matches option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'A charged object attracts a neutral conductor by induction',
      'Touching allows charge transfer to the sphere',
      'After contact, like charges repel'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-012',
    type: 'multiple_choice',
    question:
      'Which of the following involve(s) the application of electrostatics?\n\n(1) A photocopier\n(2) A precipitator in the chimney of a coal-fired power station\n(3) A Van de Graaff generator',
    options: ['(3) only', '(1) & (2) only', '(1) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** All three devices use static electric charges for their operation.\n\n**Step 1:** Photocopier\nIt uses electrostatic charging to attract toner particles to the paper.\n\n**Step 2:** Electrostatic precipitator\nCharged plates attract dust and smoke particles from flue gas.\n\n**Step 3:** Van de Graaff generator\nIt produces large static charges for demonstrations.\n\n**Verification:** All three are applications of electrostatics, so option D is correct.',
    difficulty: 1,
    points: 10,
    hints: [
      'Photocopiers use static charge to attract toner',
      'Precipitators use charged plates to collect dust',
      'Van de Graaff generators produce static electricity'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-013',
    type: 'multiple_choice',
    question:
      'An insulated charged metal rod is brought near an insulated uncharged metal sphere as shown in the figure. Which of the following can charge the sphere?\n\n(1) Touching the sphere momentarily with a finger.\n(2) Touching the sphere momentarily with the rod.\n(3) Touching the rod momentarily with a finger and then touching the sphere momentarily with the same finger.',
    options: ['(1) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The sphere can be charged by induction with grounding (1) or by direct contact (2), but not by a neutral finger after discharging the rod (3).\n\n**Step 1:** Statement (1)\nWith the charged rod nearby, grounding the sphere allows charge flow; when the ground is removed, the sphere is left charged (by induction). So (1) can charge the sphere.\n\n**Step 2:** Statement (2)\nTouching the sphere with the charged rod transfers charge by conduction, so (2) can charge the sphere.\n\n**Step 3:** Statement (3)\nTouching the rod with a finger discharges it. The finger remains overall neutral, so touching the sphere afterward does not transfer net charge. Thus (3) cannot charge the sphere.\n\n**Verification:** Only (1) and (2) can charge the sphere, matching option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Induction + grounding can leave the sphere charged',
      'Direct contact transfers charge by conduction',
      'A grounded finger does not carry net charge'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-013-question.png'],
  },
  {
    id: 'es-014',
    type: 'multiple_choice',
    question:
      'Two insulated uncharged metal spheres $X$ and $Y$ are in contact with each other. A positively charged rod is brought near $X$ as shown. Which of the following diagrams correctly shows the distribution of charges on the spheres?',
    options: [
      '/physics/exercises/electrostatics/es-014-option-a.png',
      '/physics/exercises/electrostatics/es-014-option-b.png',
      '/physics/exercises/electrostatics/es-014-option-c.png',
      '/physics/exercises/electrostatics/es-014-option-d.png'
    ],
    answer: '/physics/exercises/electrostatics/es-014-option-c.png',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** A nearby positive rod attracts electrons toward the nearer sphere, leaving a deficit (positive charge) on the farther side of the pair.\n\n**Step 1:** Induction by the positive rod\nElectrons move toward sphere $X$ (the nearer sphere), making the near side of $X$ negative.\n\n**Step 2:** Charge separation across both spheres\nBecause $X$ and $Y$ are in contact, electrons move from $Y$ to $X$, leaving positive charge on the far side of $Y$.\n\n**Verification:** The correct diagram shows negative charge on the side of $X$ facing the rod and positive charge on the far side of $Y$, matching option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'A positive rod attracts electrons toward sphere $X$',
      'Electrons can move between $X$ and $Y$ because they touch',
      'The far side of $Y$ is left positively charged'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-014-question.png'],
  },
  {
    id: 'es-015',
    type: 'multiple_choice',
    question:
      'A small conducting sphere is suspended by an insulated thread. When a positively charged rod is brought near the sphere, the sphere is attracted as shown. Which of the following is/are reasonable deduction(s)?\n\n(1) The sphere may carry a positive charge.\n(2) The sphere may carry a negative charge.\n(3) The sphere may be neutral.',
    options: ['(2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Attraction to a positively charged rod occurs if the sphere is negatively charged or neutral (by induction), but not if it is positively charged.\n\n**Step 1:** Evaluate statement (1)\nIf the sphere is positively charged, it would repel the positive rod. So (1) is not reasonable.\n\n**Step 2:** Evaluate statement (2)\nA negatively charged sphere is attracted to the positive rod. So (2) is reasonable.\n\n**Step 3:** Evaluate statement (3)\nA neutral conducting sphere is attracted by induction to the positive rod. So (3) is reasonable.\n\n**Verification:** Only (2) and (3) are valid, matching option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Like charges repel, unlike charges attract',
      'A neutral conductor is attracted by induction',
      'Attraction rules out a positively charged sphere'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-015-question.png'],
  },
  {
    id: 'es-016',
    type: 'multiple_choice',
    question:
      'The following are the steps to charge an isolated metal sphere by induction, but they are in the wrong order.\n\n(1) Removing the finger away from the metal sphere.\n(2) Touching the metal sphere with a finger.\n(3) Bringing a positively charged rod near the metal sphere.\n(4) Removing the positively charged rod away from the metal sphere.\n\nWhich of the following shows the correct order?',
    options: ['(2), (3), (4), (1)', '(3), (2), (1), (4)', '(3), (2), (4), (1)', '(3), (4), (2), (1)'],
    answer: '(3), (2), (1), (4)',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** For charging by induction, the ground connection is removed before the inducing rod, so the induced charge is trapped on the sphere.\n\n**Step 1:** Bring the charged rod near the sphere (3)\nThis induces charge separation on the sphere.\n\n**Step 2:** Touch the sphere with a finger (2)\nGrounding allows electrons to flow onto the sphere.\n\n**Step 3:** Remove the finger first (1)\nThis isolates the sphere while it still has excess electrons.\n\n**Step 4:** Remove the charged rod (4)\nThe sphere is left with a net negative charge.\n\n**Verification:** The correct order is (3) 闂?(2) 闂?(1) 闂?(4), matching option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'The rod must be near before grounding',
      'Remove the ground connection before the rod',
      'The final charge is opposite to the rod闂傚倷鑳堕崑銊╁磿閺屻儲鍋?charge'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-017',
    type: 'multiple_choice',
    question:
      'Three insulated uncharged metal spheres $X$, $Y$ and $Z$ are placed in contact as shown. A negatively charged rod is brought near $X$ and sphere $Y$ is then earthed momentarily. If the charged rod is still near $X$, which of the following describes the charges on $X$, $Y$ and $Z$?\n\nSphere $X$  Sphere $Y$  Sphere $Z$',
    options: [
      'positive  zero  zero',
      'positive  zero  negative',
      'positive  positive  positive',
      'zero  zero  zero'
    ],
    answer: 'positive  zero  zero',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The negative rod induces positive charge near $X$; grounding allows excess electrons to flow away, leaving $X$ positive while $Y$ and $Z$ become neutral.\n\n**Step 1:** Induction by the negative rod\nElectrons are repelled from $X$ toward $Y$ and $Z$, leaving positive charge on $X$.\n\n**Step 2:** Earth $Y$\nGrounding allows the excess electrons (on $Y$闂?Z$ side) to flow to Earth.\n\n**Step 3:** While the rod remains\nThe induced positive charge stays on $X$ due to attraction to the rod, and $Y$ and $Z$ are neutral.\n\n**Verification:** The correct distribution is $X$ positive, $Y$ zero, $Z$ zero, matching option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'A negative rod repels electrons away from $X$',
      'Grounding removes excess electrons',
      'With the rod still near, $X$ stays positive while $Y$ and $Z$ are neutral'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-017-question.png'],
  },
  {
    id: 'es-018',
    type: 'multiple_choice',
    question:
      'Two insulated uncharged metal spheres $X$ and $Y$ are placed in contact. A positively-charged rod is brought near $X$ as shown. $X$ is then earthed momentarily. The charged rod is removed and the two spheres are then separated. Which of the following describes the charges on $X$ and $Y$?',
    options: [
      'Sphere $X$ negative, Sphere $Y$ negative',
      'Sphere $X$ negative, Sphere $Y$ uncharged',
      'Sphere $X$ positive, Sphere $Y$ positive',
      'Sphere $X$ uncharged, Sphere $Y$ uncharged'
    ],
    answer: 'Sphere $X$ negative, Sphere $Y$ negative',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Grounding while the positive rod is nearby removes the induced positive charge on $Y$, leaving excess electrons. After the rod is removed and the spheres are separated, the excess electrons are shared, so both spheres are negative.\n\n**Step 1:** Induction by the positive rod\nElectrons move toward $X$, leaving positive charge on $Y$.\n\n**Step 2:** Earth $X$\nElectrons flow from Earth onto the connected spheres, neutralizing the positive region on $Y$ and leaving excess electrons.\n\n**Step 3:** Remove the rod and separate spheres\nThe excess electrons redistribute between $X$ and $Y$, so both spheres become negatively charged.\n\n**Verification:** Both $X$ and $Y$ are negative, matching option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'A positive rod attracts electrons toward $X$',
      'Grounding allows electrons to flow from Earth',
      'After separation, excess electrons are shared by both spheres'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-018-question.png'],
  },
  {
    id: 'es-019',
    type: 'multiple_choice',
    question:
      'Two charged spheres $A$ and $B$ hang from a ceiling by two identical nylon threads. They remain at rest as shown. Which of the following statements must be correct?\n\n(1) Both spheres carry positive charges.\n(2) The force acting on $B$ by $A$ is larger than the force acting on $A$ by $B$.\n(3) The mass of $A$ is larger than $B$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Repulsion only tells us the charges have the same sign, and the electrostatic forces are an action闂傚倷鑳堕崑銊╁磿閺屻儱绠栨繛鎾虫懗ction pair with equal magnitude. The different angles imply different masses.\n\n**Step 1:** Evaluate statement (1)\nRepulsion means the charges are the same sign, but they could be both positive or both negative. So (1) is not guaranteed.\n\n**Step 2:** Evaluate statement (2)\nBy Newton闂傚倷鑳堕崑銊╁磿閺屻儲鍋?third law, the force on $A$ by $B$ equals the force on $B$ by $A$ in magnitude. So (2) is false.\n\n**Step 3:** Evaluate statement (3)\nFor each sphere in equilibrium, $\\tan\\theta = F/(mg)$. The sphere with the smaller angle has the larger mass. From the diagram, $A$ has the smaller angle, so $m_A > m_B$.\n\n**Verification:** Only statement (3) must be correct, matching option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Repulsion only means same sign, not necessarily positive',
      'Forces between charges are equal and opposite',
      'Use $\\tan\\theta = F/(mg)$ to compare masses'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-019-question.png'],
  },
  {
    id: 'es-020',
    type: 'multiple_choice',
    question:
      'A plastic ruler is placed close to a stream of running water coming from an insulated tap. The stream of water is attracted towards the ruler as shown. Which of the following statements are correct?\n\n(1) The ruler carries an electric charge.\n(2) The ruler and the running water are attracting each other with forces of equal magnitude.\n(3) Both positive and negative charges are induced on the running water.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** A charged object can attract neutral water by inducing charge separation, and the forces are equal and opposite by Newton闂傚倷鑳堕崑銊╁磿閺屻儲鍋?third law.\n\n**Step 1:** Evaluate statement (1)\nIf the ruler attracts neutral water, it must carry charge. So (1) is correct.\n\n**Step 2:** Evaluate statement (2)\nThe interaction forces between ruler and water form an action闂傚倷鑳堕崑銊╁磿閺屻儱绠栨繛鎾虫懗ction pair, so their magnitudes are equal. So (2) is correct.\n\n**Step 3:** Evaluate statement (3)\nThe electric field polarizes the water stream, inducing opposite charge on the near side and like charge on the far side. So (3) is correct.\n\n**Verification:** All three statements are correct, matching option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'A charged object can attract neutral water by polarization',
      'Action闂傚倷鑳堕崑銊╁磿閺屻儱绠栨繛鎾虫懗ction forces have equal magnitude',
      'Polarization induces both positive and negative regions'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-020-question.png'],
  },
  {
    id: 'es-021',
    type: 'multiple_choice',
    question:
      'Four point charges of equal magnitude are placed at the four vertices of a square. The signs of the charges are as shown. A point charge $C$ is placed at the centre of the square. What will be the direction of the resultant electrostatic force, if any, acting on $C$?',
    options: ['Direction X', 'Direction Y', 'The resultant force acting on $C$ is zero.', 'It cannot be determined since the sign of $C$ is not given.'],
    answer: 'The resultant force acting on $C$ is zero.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** At the center of the square, forces from symmetric pairs of equal charges cancel.\n\n**Step 1:** Consider the pair of positive charges\nTheir forces on $C$ are equal in magnitude and opposite in direction, so they cancel.\n\n**Step 2:** Consider the pair of negative charges\nTheir forces on $C$ also cancel by symmetry.\n\n**Verification:** Net force is zero regardless of the sign of $C$, so option C is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Opposite vertices are symmetric about the center',
      'Equal charges at symmetric points produce equal and opposite forces',
      'The net force at the center cancels out'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-021-question.png'],
  },
  {
    id: 'es-022',
    type: 'multiple_choice',
    question:
      'Three conducting spheres are suspended by separate nylon threads. When any two of them are brought near each other, they attract each other. Which of the following deductions is correct?',
    options: [
      'All three spheres are charged.',
      'Only one sphere is charged and the other two are uncharged.',
      'One sphere is uncharged and the other two carry like charges.',
      'One sphere is uncharged and the other two carry unlike charges.'
    ],
    answer: 'One sphere is uncharged and the other two carry unlike charges.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Attraction can occur between unlike charges and between a charged and a neutral conductor (by induction).\n\n**Step 1:** Eliminate cases with no attraction\nIf all three were charged with the same sign, some pairs would repel, which contradicts the observation.\n\n**Step 2:** Consider one neutral and two unlike charges\nA neutral sphere is attracted to either charged sphere by induction, and the two charged spheres attract because they are unlike.\n\n**Verification:** This configuration makes every pair attract, matching option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'A charged object attracts a neutral conductor',
      'Unlike charges attract each other',
      'Every pair must attract'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-023',
    type: 'multiple_choice',
    question:
      'Two conducting spheres are hanging freely in air by insulating threads. In which of the following will the two spheres attract each other? (N denotes that the sphere is uncharged.)',
    options: ['(1) only', '(2) only', '(3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Conductors attract if they carry unlike charges, or if one is charged and the other is neutral (by induction).\n\n**Step 1:** Case (1)\nUnlike charges attract, so (1) gives attraction.\n\n**Step 2:** Case (2)\nA positively charged sphere attracts a neutral sphere by induction, so (2) gives attraction.\n\n**Step 3:** Case (3)\nA negatively charged sphere also attracts a neutral sphere by induction, so (3) gives attraction.\n\n**Verification:** All three cases attract, so option D is correct.',
    difficulty: 1,
    points: 10,
    hints: [
      'Unlike charges attract',
      'A charged object attracts a neutral conductor',
      'Induction works for both positive and negative charges'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-023-question.png'],
  },
  {
    id: 'es-024',
    type: 'multiple_choice',
    question:
      'A rubbed plastic ruler can attract paper scraps before actually touching them. Which of the following descriptions about the charges on the rubbed ruler and the original charges on the paper scraps are possible?\n\n(1) The ruler and the paper scraps carry opposite charges.\n(2) Both the ruler and the paper scraps are uncharged.\n(3) The ruler carries charges and the paper scraps are uncharged.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Attraction can occur between opposite charges or between a charged object and a neutral one (by induction), but not between two neutral objects.\n\n**Step 1:** Statement (1)\nOpposite charges attract, so (1) is possible.\n\n**Step 2:** Statement (2)\nTwo uncharged objects exert no electrostatic force, so (2) is not possible.\n\n**Step 3:** Statement (3)\nA charged ruler can attract neutral paper scraps by inducing charge separation, so (3) is possible.\n\n**Verification:** Only (1) and (3) are possible, matching option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Opposite charges attract',
      'A charged object can attract a neutral object by induction',
      'Two neutral objects do not attract electrostatically'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-025',
    type: 'multiple_choice',
    question:
      'In the figures shown, $P$, $Q$, $R$ and $S$ are identical light conducting spheres hanging freely by insulating threads of the same length. Which of the following deductions is/are correct?\n\n(1) $P$ and $Q$ must carry like charges.\n(2) $R$ and $S$ must carry unlike charges.\n(3) $P$ and $Q$ must carry the same amount of net charges.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Repulsion implies like charges, while attraction could be due to unlike charges or a charged闂傚倷鑳堕崑銊╁磿閺屻儱绠栫€点倗顨攖ral pair; equal separation does not require equal charge magnitudes.\n\n**Step 1:** Statement (1)\nRepulsion between $P$ and $Q$ means they carry like charges. So (1) is correct.\n\n**Step 2:** Statement (2)\nAttraction between $R$ and $S$ could be unlike charges or one charged and one neutral. So (2) is not necessarily correct.\n\n**Step 3:** Statement (3)\nEqual forces do not require equal charge magnitudes; different charges can still produce the same force at the same separation. So (3) is not necessarily correct.\n\n**Verification:** Only (1) must be correct, matching option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Repulsion implies like charges',
      'Attraction could be unlike or charged闂傚倷鑳堕崑銊╁磿閺屻儱绠栫€点倗顨攖ral',
      'Equal force does not imply equal charge'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-025-question.png'],
  },
  {
    id: 'es-026',
    type: 'multiple_choice',
    question:
      'The diagram shows a negatively charged particle inside a uniform electric field $E$ pointing downward. At the instant shown, the particle is travelling in the direction of the arrow $v$. Which of the arrows 1 to 4 gives the direction of the acceleration of the particle at this instant?',
    options: ['1', '2', '3', '4'],
    answer: '4',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The electric force on a charge is $\\vec{F} = q\\vec{E}$, so a negative charge accelerates opposite to the field.\n\n**Step 1:** Identify the field direction\nThe electric field points downward.\n\n**Step 2:** Determine force on a negative charge\nFor $q < 0$, the force is opposite to $\\vec{E}$, so it is upward.\n\n**Verification:** The acceleration is upward, corresponding to arrow 4.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use $\\vec{F} = q\\vec{E}$',
      'Negative charge means force opposite to $\\vec{E}$',
      'Acceleration follows the force direction'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-026-question.png'],
  },
  {
    id: 'es-027',
    type: 'multiple_choice',
    question:
      'Two parallel metal plates are placed horizontally with a separation of 0.05 m. A voltage of 2000 V is connected across the plates. An oil drop carrying a charge of $-1.6 \\times 10^{-19}\\,\\text{C}$ is found to be at rest between the plates. Find the mass of the drop. (Take the acceleration due to gravity to be $10\\,\\text{m s}^{-2}$.)',
    options: [
      '1.6 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲虹紒?kg',
      '1.6 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲哄?kg',
      '6.4 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲虹紒鈧?kg',
      '6.4 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲哄?kg'
    ],
    answer: '6.4 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲哄?kg',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** At rest, the electric force balances the weight: $mg = |q|E$ with $E = V/d$.\n\n**Step 1:** Compute the electric field\n$$E = \\frac{V}{d} = \\frac{2000}{0.05} = 4.0 \\times 10^4\\,\\text{V/m}$$\n\n**Step 2:** Balance forces\n$$mg = |q|E = (1.6 \\times 10^{-19})(4.0 \\times 10^4) = 6.4 \\times 10^{-15}\\,\\text{N}$$\n\n**Step 3:** Solve for mass\n$$m = \\frac{6.4 \\times 10^{-15}}{10} = 6.4 \\times 10^{-16}\\,\\text{kg}$$\n\n**Verification:** The mass matches option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'At rest, electric force balances weight',
      'Use $E = V/d$',
      'Compute $m = |q|E/g$'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-028',
    type: 'multiple_choice',
    question:
      'Which of the following statements about the coulomb is/are correct?\n\n(1) When one coulomb of positive charges flows across a potential difference of one volt from higher to lower potential, one joule of electrical energy is given out.\n(2) The force exerted on a charge of 1 coulomb in an electric field of 1 volt per metre is 1 newton.\n(3) One coulomb is the total charge of one mole of electrons.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** $U = qV$ and $F = qE$ define energy and force per coulomb, while one mole of electrons carries far more than 1 C.\n\n**Step 1:** Statement (1)\nUsing $U = qV$, with $q = 1\\,\\text{C}$ and $V = 1\\,\\text{V}$ gives $U = 1\\,\\text{J}$, so (1) is correct.\n\n**Step 2:** Statement (2)\nUsing $F = qE$, with $q = 1\\,\\text{C}$ and $E = 1\\,\\text{V/m}$ gives $F = 1\\,\\text{N}$, so (2) is correct.\n\n**Step 3:** Statement (3)\nOne mole of electrons carries $N_A e \\approx 6.02\\times10^{23} \\times 1.6\\times10^{-19}\\,\\text{C} \\approx 9.6\\times10^4\\,\\text{C}$, not 1 C. So (3) is false.\n\n**Verification:** Only (1) and (2) are correct, matching option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $U = qV$ for energy',
      'Use $F = qE$ for force',
      'One mole of electrons carries about $9.6\\times10^4\\,\\text{C}$'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-028-question.png'],
  },
  {
    id: 'es-029',
    type: 'multiple_choice',
    question:
      'A light conducting ball is placed between two metal plates connected through an ammeter to a d.c. source of high voltage. The ball shuttles back and forth between the plates, making alternate contacts with each plate. Which of the following statements are correct?\n\n(1) The ball carries charges, sometimes positive, and sometimes negative.\n(2) If the separation of the metal plates increases, the frequency of oscillation of the ball decreases.\n(3) The galvanometer shows a current flowing always in the same direction.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The ball alternately charges by contact, the field weakens with larger separation, and the current through the external circuit has a consistent direction.\n\n**Step 1:** Statement (1)\nTouching the positive plate charges the ball positively; touching the negative plate charges it negatively. So (1) is correct.\n\n**Step 2:** Statement (2)\nIncreasing plate separation reduces $E = V/d$, so the electric force and acceleration drop, lowering oscillation frequency. So (2) is correct.\n\n**Step 3:** Statement (3)\nEach transfer of charge through the external circuit corresponds to the same current direction, so the ammeter shows a steady direction. So (3) is correct.\n\n**Verification:** All three statements are correct, matching option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Contact charging alternates the ball闂傚倷鑳堕崑銊╁磿閺屻儲鍋?sign',
      'Field strength decreases as $d$ increases',
      'Current direction in the external circuit remains the same'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-030',
    type: 'multiple_choice',
    question:
      'Three charges $+1\\,\\text{C}$, $-1\\,\\text{C}$ and $-1\\,\\text{C}$ are fixed at the corners $W$, $X$ and $Y$ respectively of a square as shown. A fourth charge $Q$ is fixed at $Z$. If the net electrostatic force acting on the charge at $X$ is indicated by the arrow, what is the magnitude of $Q$?',
    options: ['$\\text{-}\\sqrt{2}\\,\\text{C}$', '$\\text{+}\\sqrt{2}\\,\\text{C}$', '$-2\\sqrt{2}\\,\\text{C}$', '$+2\\sqrt{2}\\,\\text{C}$'],
    answer: '$+2\\sqrt{2}\\,\\text{C}$',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The force from $Z$ must provide a downward component to cancel the upward force from $Y$ while leaving a net leftward force.\n\n**Step 1:** Let the side length be $r$\nDistance $XZ = \\sqrt{2}r$.\n\n**Step 2:** Compare forces at $X$\nForces from $W$ and $Y$ each have magnitude $\\frac{1}{4\\pi\\varepsilon_0 r^2}$. The force from $Y$ is upward and must be balanced by the vertical component of $F_Z$.\n\n**Step 3:** Balance vertical components\n$$F_Z \\cos 45^\\circ = F_Y$$\n$$\\frac{|Q|}{4\\pi\\varepsilon_0(\\sqrt{2}r)^2} \\cdot \\frac{1}{\\sqrt{2}} = \\frac{1}{4\\pi\\varepsilon_0 r^2}$$\nSolving gives $|Q| = 2\\sqrt{2}\\,\\text{C}$.\n\n**Verification:** The force between $X$ (negative) and $Z$ must be attractive, so $Q$ is positive. The correct choice is $+2\\sqrt{2}\\,\\text{C}$.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use symmetry and resolve the force from $Z$ into components',
      'Set the vertical component of $F_Z$ equal to $F_Y$',
      'Attraction between $X$ and $Z$ means $Q$ is positive'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-030-question.png'],
  },
  {
    id: 'es-031',
    type: 'multiple_choice',
    question:
      'A light conducting sphere is hanged from a long insulating thread. It is placed between two oppositely charged metal plates connected to a high voltage supply. If the sphere is given a negative charge, it will',
    options: [
      'move to the positive plate and stick to it.',
      'move to the negative plate and stick to it.',
      'oscillate, touching each plate in turn, beginning with the positive plate.',
      'oscillate, touching each plate in turn, beginning with the negative plate.'
    ],
    answer: 'oscillate, touching each plate in turn, beginning with the positive plate.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The negatively charged sphere is attracted to the positive plate first; after contact it becomes positively charged and then moves to the negative plate, leading to oscillation.\n\n**Step 1:** Initial motion\nA negatively charged sphere is attracted to the positive plate, so it moves there first.\n\n**Step 2:** Charge transfer on contact\nAfter touching the positive plate, the sphere gains positive charge.\n\n**Step 3:** Subsequent motion\nIt is then attracted to the negative plate, and the process repeats.\n\n**Verification:** The sphere oscillates between the plates, beginning with the positive plate, matching option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Negative charges move toward the positive plate',
      'Contact changes the sphere闂傚倷鑳堕崑銊╁磿閺屻儲鍋?charge',
      'The sphere shuttles between plates'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-031-question.png'],
  },
  {
    id: 'es-032',
    type: 'multiple_choice',
    question:
      'Two parallel metal plates are connected to the terminal of an EHT. When a charged aluminium foil strip is placed between the plates, the deflection of the foil is shown in the figure. Which of the following statements is/are correct?\n\n(1) The charge on the foil is negative.\n(2) If the separation between the two plates decreases, the deflection of the foil increases.\n(3) When moving the foil towards the positive plate, the deflection of the foil increases.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The foil is deflected toward the positive plate, so it is negatively charged; reducing plate separation increases the uniform field strength.\n\n**Step 1:** Statement (1)\nDeflection toward the positive plate indicates the foil carries negative charge. So (1) is correct.\n\n**Step 2:** Statement (2)\nWith fixed voltage, $E = V/d$; decreasing $d$ increases $E$, so the electric force and deflection increase. So (2) is correct.\n\n**Step 3:** Statement (3)\nBetween parallel plates the field is uniform, so moving the foil closer does not change the force. So (3) is incorrect.\n\n**Verification:** Only (1) and (2) are correct, matching option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Deflection toward the positive plate implies negative charge',
      'Use $E = V/d$ for field strength',
      'Uniform field means force does not depend on position'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-032-question.png'],
  },
  {
    id: 'es-033',
    type: 'multiple_choice',
    question:
      'Two parallel plates are connected to an E.H.T. supply giving a d.c. voltage of 4.5 kV. If the separation of the two plates is set at 1.5 mm, calculate the acceleration of an electron placed inside the plates.',
    options: [
      '1.0 x 10^17 m s^-2',
      '1.2 x 10^17 m s^-2',
      '1.6 x 10^17 m s^-2',
      '5.3 x 10^17 m s^-2'
    ],
    answer: '5.3 x 10^17 m s^-2',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Use $E = V/d$, then $F = qE$, then $a = F/m$ for the electron.\n\n**Step 1:** Electric field between plates\n$$E = \\frac{V}{d} = \\frac{4.5 \\times 10^3}{1.5 \\times 10^{-3}} = 3.0 \\times 10^6\\,\\text{V/m}$$\n\n**Step 2:** Electric force on the electron\n$$F = |q|E = (1.60 \\times 10^{-19})(3.0 \\times 10^6) = 4.8 \\times 10^{-13}\\,\\text{N}$$\n\n**Step 3:** Acceleration\n$$a = \\frac{F}{m_e} = \\frac{4.8 \\times 10^{-13}}{9.11 \\times 10^{-31}} \\approx 5.3 \\times 10^{17}\\,\\text{m s}^{-2}$$\n\n**Verification:** This matches option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Compute $E = V/d$',
      'Use $F = |q|E$ for the electron',
      'Then $a = F/m_e$'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-034',
    type: 'multiple_choice',
    question:
      'The magnitudes of the charges on two identical small metal spheres are in the ratio $5:1$. The electrostatic force between them is $F_1$. If they are brought into contact and then separated to their respective original positions, the electrostatic force between them becomes $F_2$. Which of the following may be the magnitude of the ratio $F_1:F_2$?\n\n(1) $5:9$\n(2) $5:4$\n(3) $5:2$',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** After contact, identical spheres share total charge equally; the outcome depends on whether the initial charges have the same or opposite signs.\n\n**Case 1: Same sign**\nLet charges be $+5Q$ and $+Q$. After contact, each becomes $+3Q$.\n$$F_1 \\propto (5Q)(Q), \\quad F_2 \\propto (3Q)(3Q)$$\nSo $F_1:F_2 = 5:9$.\n\n**Case 2: Opposite sign**\nLet charges be $+5Q$ and $-Q$. Total charge is $+4Q$, so each becomes $+2Q$.\n$$F_1 \\propto (5Q)(Q), \\quad F_2 \\propto (2Q)(2Q)$$\nSo $F_1:F_2 = 5:4$.\n\n**Verification:** Ratios (1) and (2) are possible, (3) is not. Option C is correct.',
    difficulty: 4,
    points: 25,
    hints: [
      'Identical spheres share total charge equally',
      'Consider both same-sign and opposite-sign cases',
      'Compute $F_1:F_2$ using proportionality'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-035',
    type: 'multiple_choice',
    question:
      '$X$, $Y$ and $Z$ are small identical metal spheres. $X$ and $Y$ are fixed at a certain separation in air and they carry charges of the same magnitude. The attractive force between them is $F$. Sphere $Z$ is initially uncharged. It first touches $X$ and then it touches $Y$. What is the electrostatic force between $X$ and $Y$ after $Z$ is taken away?',
    options: ['1/4 F', '1/8 F', '3/4 F', '3/8 F'],
    answer: '1/8 F',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Identical spheres share charge equally on contact. The force depends on the product of the final charges.\n\n**Step 1:** Initial charges\nAttraction means $X$ and $Y$ have opposite signs with equal magnitude: let $X = +Q$, $Y = -Q$.\n\n**Step 2:** $Z$ touches $X$\nCharges share equally: $X$ becomes $+\\frac{Q}{2}$ and $Z$ becomes $+\\frac{Q}{2}$.\n\n**Step 3:** $Z$ touches $Y$\nTotal charge on $Y$ and $Z$ is $-Q + \\frac{Q}{2} = -\\frac{Q}{2}$, so each becomes $-\\frac{Q}{4}$.\nThus $Y = -\\frac{Q}{4}$.\n\n**Step 4:** Compute new force\n$$F^{\\prime} \\propto \\left(\\frac{Q}{2}\\right)\\left(\\frac{Q}{4}\\right) = \\frac{Q^2}{8}$$\nSo $F^{\\prime} = \\frac{1}{8}F$.\n\n**Verification:** Option B is correct.',
    difficulty: 4,
    points: 25,
    hints: [
      'Attraction means the charges are opposite in sign',
      'Identical spheres share charge equally on contact',
      'Force is proportional to the product of charges'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-036',
    type: 'multiple_choice',
    question:
      'A negatively charged oil drop is kept stationary between two horizontal metal plates connected to a d.c. supply as shown. The oil drop then acquires an additional negative charge. Which of the following changes will be able to hold the oil drop stationary?\n\n(1) Disconnecting the plates from the supply and moving the plates closer\n(2) Keeping the separation between the plates unchanged and increasing the p.d. between the plates\n(3) Keeping the p.d. between plates unchanged and moving the plates further apart.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The drop is initially in equilibrium with $qE = mg$. If $q$ increases, $E$ must decrease to keep balance.\n\n**Step 1:** Effect of extra negative charge\nWith larger $q$, the electric force $qE$ increases if $E$ is unchanged, so the drop will no longer be stationary.\n\n**Step 2:** Evaluate each change\n(1) Disconnecting the supply keeps plate charge (and $E$) unchanged; moving plates closer does not reduce $E$ in this case, so $qE$ remains too large.\n(2) Increasing p.d. increases $E$, making the imbalance worse.\n(3) Increasing plate separation with constant p.d. reduces $E = V/d$, so $qE$ can return to $mg$.\n\n**Verification:** Only (3) can restore equilibrium, so option B is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Equilibrium requires $qE = mg$',
      'After $q$ increases, $E$ must decrease',
      'Use $E = V/d$ to adjust the field'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-036-question.png'],
  },
  {
    id: 'es-037',
    type: 'multiple_choice',
    question:
      'The figure gives the electric field strength (in arbitrary units) at various points near an isolated point charge $+Q$. Which of the following correctly gives the electric field strength (in the same arbitrary units) at $X$ and at $Y$?',
    options: ['72 and 30', '72 and 36', '90 and 30', '90 and 36'],
    answer: '72 and 36',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The electric field around a point charge follows the inverse闂傚倷鑳堕崑銊╁磿閺屻儱鑸圭紒澶嬫奖are law: $E \\propto 1/r^2$.\n\n**Step 1:** Field at $X$\nPoint $X$ is at the same distance from $+Q$ as the point marked 72, so $E_X = 72$.\n\n**Step 2:** Field at $Y$\nFrom the diagram, $r_Y = \\sqrt{3^2 + 1^2} = \\sqrt{10}$. Using $E \\propto 1/r^2$ relative to the point with $E = 360$ at $r = 1$:\n$$E_Y = 360 \\times \\frac{1}{(\\sqrt{10})^2} = 36$$\n\n**Verification:** $(E_X, E_Y) = (72, 36)$, matching option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the inverse闂傚倷鑳堕崑銊╁磿閺屻儱鑸圭紒澶嬫奖are law: $E \\propto 1/r^2$',
      'Same distance means same field strength',
      'Compute $r_Y = \\sqrt{10}$'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-037-question.png'],
  },
  {
    id: 'es-038',
    type: 'multiple_choice',
    question:
      'The figure shows two small charged spheres $X$ and $Y$ suspended by identical nylon threads from a fixed point $O$. At equilibrium, the threads $OX$ and $OY$ make angles $\\theta$ and $\\phi$ ($\\theta < \\phi$) with the vertical. Which of the following conclusions must be correct?\n\n(1) Both $X$ and $Y$ carry positive charges.\n(2) The charge on $X$ is greater than that on $Y$ in magnitude.\n(3) The mass of $X$ is greater than that of $Y$.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The electrostatic forces are equal and opposite, but the smaller deflection angle indicates a larger weight.\n\n**Step 1:** Statement (1)\nRepulsion implies like charges, but they could be both positive or both negative. So (1) is not guaranteed.\n\n**Step 2:** Statement (2)\nThe interaction forces are equal in magnitude (Newton闂傚倷鑳堕崑銊╁磿閺屻儲鍋?third law), so charge magnitudes cannot be concluded from the angles alone. So (2) is not guaranteed.\n\n**Step 3:** Statement (3)\nFor each sphere, $\\tan\\theta = F/(mg)$. With the same $F$, the smaller angle means larger $mg$. Since $\\theta < \\phi$, $m_X > m_Y$.\n\n**Verification:** Only statement (3) must be correct, matching option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Repulsion only means same sign, not necessarily positive',
      'Forces between charges are equal and opposite',
      'Smaller angle implies larger weight'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-038-question.png'],
  },
  {
    id: 'es-039',
    type: 'multiple_choice',
    question:
      'A point charge $+Q$ is fixed at point $X$ while another point charge $-2Q$ is fixed at point $Y$ as shown. $E_X$ and $E_Y$ denote the magnitude of the electric field due to the point charge at $X$ and $Y$ respectively. For the points on the line passing through $X$ and $Y$, how many of them have $E_X = E_Y$ and how many have zero resultant electric field? (No need to consider the points at infinity.)',
    options: [
      'There are 3 points with $E_X = E_Y$ and the resultant field is zero at 2 of them.',
      'There are 2 points with $E_X = E_Y$ and the resultant field is zero at both of them.',
      'There are 2 points with $E_X = E_Y$ and the resultant field is zero at 1 of them.',
      'There is 1 point with $E_X = E_Y$ and the resultant field is zero at that point.'
    ],
    answer: 'There are 2 points with $E_X = E_Y$ and the resultant field is zero at 1 of them.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** For opposite unequal charges, there is one point between them where the magnitudes are equal but fields add, and one point outside near the smaller charge where the fields cancel.\n\n**Step 1:** Between $X$ and $Y$\nThe field from $+Q$ points toward $Y$, and the field from $-2Q$ also points toward $Y$, so they add. There is one point where $E_X = E_Y$, but the resultant is not zero.\n\n**Step 2:** Outside on the side of $+Q$\nHere the fields from $+Q$ and $-2Q$ are opposite in direction. There is one point where $E_X = E_Y$, and at that point the resultant field is zero.\n\n**Verification:** There are two points with $E_X = E_Y$, and only one of them has zero resultant field, matching option C.',
    difficulty: 4,
    points: 25,
    hints: [
      'Consider regions: between charges and outside them',
      'Between opposite charges, fields point the same way',
      'Zero field occurs only where magnitudes are equal and directions oppose'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-039-question.png'],
  },
  {
    id: 'es-040',
    type: 'multiple_choice',
    question:
      'A potential difference of 3 kV is applied across two horizontal metal plates of separation 1.5 cm. A charged oil drop of mass $9.6 \\times 10^{-15}\\,\\text{kg}$ is kept stationary between the plates as shown. Find the quantity of charge acquired by the oil drop. (Take the acceleration due to gravity as $10\\,\\text{m s}^{-2}$.)',
    options: [
      '1.6 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲烘俊?C',
      '3.2 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲烘俊?C',
      '4.8 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲烘俊?C',
      '6.4 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲烘俊?C'
    ],
    answer: '4.8 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儏缁€鍌氼熆鐠轰警妲烘俊?C',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** At equilibrium, the electric force balances weight: $qE = mg$ with $E = V/d$.\n\n**Step 1:** Calculate electric field\n$$E = \\frac{V}{d} = \\frac{3000}{0.015} = 2.0 \\times 10^5\\,\\text{V/m}$$\n\n**Step 2:** Solve for charge magnitude\n$$q = \\frac{mg}{E} = \\frac{(9.6 \\times 10^{-15})(10)}{2.0 \\times 10^5} = 4.8 \\times 10^{-19}\\,\\text{C}$$\n\n**Verification:** The magnitude matches option C. The force must be upward, so the charge is negative, but the question asks for quantity (magnitude).',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $E = V/d$',
      'Set $qE = mg$ for equilibrium',
      'The charge is negative, but answer asks for magnitude'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-040-question.png'],
  },
  {
    id: 'es-041',
    type: 'multiple_choice',
    question:
      'Two insulated uncharged metal spheres $X$ and $Y$ are placed in contact. A positively-charged rod is brought near $X$ as shown. $X$ is then earthed momentarily. The charged rod is then removed. Which of the following describes the charges on $X$ and $Y$?',
    options: [
      'Sphere $X$ negative, Sphere $Y$ negative',
      'Sphere $X$ negative, Sphere $Y$ uncharged',
      'Sphere $X$ positive, Sphere $Y$ positive',
      'Sphere $X$ uncharged, Sphere $Y$ uncharged'
    ],
    answer: 'Sphere $X$ negative, Sphere $Y$ negative',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Grounding while a positive rod is nearby lets electrons flow in; after removing the rod, the excess electrons distribute over both spheres.\n\n**Step 1:** Induction by the positive rod\nElectrons move toward $X$, leaving $Y$ positive.\n\n**Step 2:** Earth $X$\nElectrons flow from Earth into the connected spheres, neutralizing the positive region on $Y$ and leaving excess electrons.\n\n**Step 3:** Remove the rod\nThe excess electrons redistribute over $X$ and $Y$, so both become negatively charged.\n\n**Verification:** Both $X$ and $Y$ are negative, matching option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'A positive rod attracts electrons toward $X$',
      'Grounding supplies extra electrons from Earth',
      'After the rod is removed, excess electrons spread over both spheres'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-041-question.png'],
  },
  {
    id: 'es-042',
    type: 'multiple_choice',
    question:
      'Two identical spheres carrying equal amount of positive charges are placed as shown in the figure. Which of the following statements are correct?\n\n(1) At the mid-point $Y$ between the two spheres, it is a neutral point.\n(2) If a small negative charge is placed at point $X$, it experiences a net electric force towards the left.\n(3) If a small positive charge is placed at point $Z$, it experiences a net electric force towards the right.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The midpoint between equal positive charges is a neutral point for electric field; force directions depend on which charge is closer.\n\n**Step 1:** Statement (1)\nAt midpoint $Y$, the fields from the two equal positive charges cancel, so it is a neutral point. Correct.\n\n**Step 2:** Statement (2)\nAt $X$ (closer to the left sphere), a negative test charge is attracted more strongly to the left sphere, so the net force is toward the left. Correct.\n\n**Step 3:** Statement (3)\nAt $Z$ (closer to the right sphere), a positive test charge is repelled more strongly by the right sphere, so the net force is toward the left, not right. Incorrect.\n\n**Verification:** Only (1) and (2) are correct, matching option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Equal charges create a neutral point at the midpoint',
      'At a closer position, the nearer charge dominates',
      'A positive test charge is repelled by positive charges'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-042-question.png'],
  },
  {
    id: 'es-043',
    type: 'multiple_choice',
    question:
      'A small neutral conducting sphere is suspended by an insulated thread. When a positively charged metal rod is brought near the sphere, which of the following consequences are correct?\n\n(1) The sphere is attracted by the charged rod due to the induced charge on the sphere.\n(2) The sphere is repelled from the charged rod after touching the charged rod.\n(3) The sphere finally carries positive charge.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** A neutral conductor is attracted by induction, but after contact it shares charge and is repelled, ending with the same sign as the rod.\n\n**Step 1:** Statement (1)\nThe positive rod induces negative charge on the near side of the sphere, causing attraction. Correct.\n\n**Step 2:** Statement (2)\nAfter touching, the sphere gains positive charge and is repelled by the rod. Correct.\n\n**Step 3:** Statement (3)\nCharge sharing leaves the sphere positively charged. Correct.\n\n**Verification:** All three statements are correct, matching option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Induction causes attraction of a neutral conductor',
      'Contact transfers charge from the rod',
      'Like charges repel after contact'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-043-question.png'],
  },
  {
    id: 'es-044',
    type: 'multiple_choice',
    question:
      'When a plastic ruler is placed close to pieces of small paper, some of them are found to be attracted towards the ruler. Which of the following statements is/are correct?\n\n(1) The attraction is due to the electric force between the ruler and the pieces of paper.\n(2) Those pieces of paper attracted by the ruler remain neutral.\n(3) The attraction acting on each piece of paper is greater than the attraction acting on the ruler by that piece of paper.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The ruler attracts neutral paper by inducing charge separation; forces are equal and opposite by Newton闂傚倷鑳堕崑銊╁磿閺屻儲鍋?third law.\n\n**Step 1:** Statement (1)\nThe attraction is electrostatic due to induced charges in the paper and charges on the ruler. Correct.\n\n**Step 2:** Statement (2)\nInduction polarizes the paper but does not change its net charge, so it remains neutral. Correct.\n\n**Step 3:** Statement (3)\nThe forces between the ruler and paper are an action闂傚倷鑳堕崑銊╁磿閺屻儱绠栨繛鎾虫懗ction pair, so their magnitudes are equal. Thus (3) is false.\n\n**Verification:** Only (1) and (2) are correct, matching option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Induction causes attraction without net charge transfer',
      'The paper remains neutral overall',
      'Action闂傚倷鑳堕崑銊╁磿閺屻儱绠栨繛鎾虫懗ction forces are equal in magnitude'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-044-question.png'],
  },
  {
    id: 'es-045',
    type: 'multiple_choice',
    question:
      'Point charges, each of magnitude $Q$, are placed at three corners of a square as shown in the diagram. What is the direction of the resultant electric field at the fourth corner?',
    options: ['Direction 1', 'Direction 2', 'Direction 3', 'Direction 4'],
    answer: 'Direction 1',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The resultant field is the vector sum of the fields from the three charges; two perpendicular components add to a diagonal, and the diagonal component from the opposite corner is weaker.\n\n**Step 1:** Combine fields from the two adjacent charges\nThese fields are perpendicular and equal in magnitude, so their resultant points along direction 1.\n\n**Step 2:** Compare with the field from the opposite corner\nThe field from the diagonal charge is weaker (distance is larger), so it does not reverse the resultant.\n\n**Verification:** The net field points in direction 1, matching option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Fields from adjacent charges are perpendicular',
      'Distance to the diagonal charge is larger, so its field is weaker',
      'Add vectors to get the resultant direction'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-045-question.png'],
  },
  {
    id: 'es-046',
    type: 'multiple_choice',
    question:
      '$A$, $B$, $C$, $D$ are four points on a straight line as shown in the diagram. A point charge $+Q$ is fixed at $A$. When another point charge $-Q$ is moved from $B$ to $C$, which of the following statements is/are correct?\n\n(1) The electrostatic force between the two charges increases.\n(2) The magnitude of the electric field strength at the point $D$ increases.\n(3) Point $B$ becomes the neutral point.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Increasing separation reduces mutual force, but moving the negative charge closer to $D$ increases the field at $D$.\n\n**Step 1:** Statement (1)\nMoving $-Q$ from $B$ to $C$ increases its distance from $+Q$, so the force decreases (inverse闂傚倷鑳堕崑銊╁磿閺屻儱鑸圭紒澶嬫奖are law). So (1) is false.\n\n**Step 2:** Statement (2)\nAt $D$, the field from $+Q$ points right and from $-Q$ points left. As $-Q$ moves closer to $D$, its field at $D$ increases, so the net field magnitude increases. So (2) is true.\n\n**Step 3:** Statement (3)\nAt $B$, the fields from $+Q$ and $-Q$ point in the same direction, so $B$ cannot be a neutral point. So (3) is false.\n\n**Verification:** Only statement (2) is correct, matching option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Force between charges decreases with greater separation',
      'Field at $D$ grows as $-Q$ moves closer',
      'Neutral point requires opposite field directions'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-046-question.png'],
  },
  {
    id: 'es-047',
    type: 'multiple_choice',
    question:
      'The charge on the uranium nucleus is $1.5 \\times 10^{-17}\\,\\text{C}$ and the charge on the $\\alpha$-particle is $3.2 \\times 10^{-19}\\,\\text{C}$. What is the electrostatic force between a uranium nucleus and an $\\alpha$-particle separated by $1.0 \\times 10^{-13}\\,\\text{m}$?',
    options: [
      '4.32 闂?10闂傚倷鑳堕鑼不閹达富鏁囧ù鐘差儐閳?N',
      '4.32 闂?10闂傚倷鑳堕鑼不閹达富鏁囬柦妯侯棦閸︻厸鍋撻敐鍌涙珖缂佲偓?N',
      '4.32 闂?10闂傚倷鑳堕鑼不閹达富鏁囬柣锝呭閸?N',
      '4.32 N'
    ],
    answer: '4.32 N',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Use Coulomb闂傚倷鑳堕崑銊╁磿閺屻儲鍋?law $F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q_1 Q_2}{r^2}$.\n\n**Step 1:** Substitute values\n$$F = \\frac{(1.5 \\times 10^{-17})(3.2 \\times 10^{-19})}{4\\pi (8.85 \\times 10^{-12})(1.0 \\times 10^{-13})^2}$$\n\n**Step 2:** Calculate\nThis gives $F \\approx 4.32\\,\\text{N}$.\n\n**Verification:** Option D is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use Coulomb闂傚倷鑳堕崑銊╁磿閺屻儲鍋?law',
      'Be careful with powers of ten',
      'The result is order of 1 N'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-048',
    type: 'multiple_choice',
    question:
      'What is the magnitude of the electric field strength at a distance $r$ from an isolated stationary nucleus of proton number (atomic number) $Z$?',
    options: [
      '$\\frac{Ze}{4\\pi \\varepsilon_0 r}$',
      '$\\frac{(Ze)^2}{4\\pi \\varepsilon_0 r^2}$',
      '$\\frac{Ze}{4\\pi \\varepsilon_0 r^2}$',
      '$\\frac{Ze^2}{4\\pi \\varepsilon_0 r}$'
    ],
    answer: '$\\frac{Ze}{4\\pi \\varepsilon_0 r^2}$',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The electric field of a point charge is $E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{r^2}$.\n\n**Step 1:** Identify the source charge\nA nucleus of atomic number $Z$ has charge $Q = Ze$.\n\n**Step 2:** Substitute into the field formula\n$$E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Ze}{r^2}$$\n\n**Verification:** This matches option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use the point闂傚倷鑳堕崑銊╁磿閺屻儱鐭楃紒璺哄劖rge field formula',
      'The nuclear charge is $Q = Ze$',
      'Field scales as $1/r^2$'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-049',
    type: 'multiple_choice',
    question:
      'The diagram shows a pattern of electric field lines in which $X$, $Y$ and $Z$ are points marked on one of the field lines. It would be correct to say that\n\n(1) the electric field at $X$ is weaker than that at $Z$.\n(2) a negative charge placed at $Z$ would experience an electric force to the left along the tangent of the field line at $Z$.\n(3) the force exerted on a charge at $Y$ would be greater than if the charge were placed at $X$.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Field strength is indicated by the density of field lines, and force direction on a negative charge is opposite to the field direction.\n\n**Step 1:** Statement (1)\nField lines are denser at $Z$ than at $X$, so $E_Z > E_X$. Correct.\n\n**Step 2:** Statement (2)\nA negative charge experiences force opposite to the field direction, i.e., along the tangent to the line but opposite the arrow. Correct.\n\n**Step 3:** Statement (3)\nField lines are denser at $Y$ than at $X$, so $E_Y > E_X$ and the force is larger at $Y$. Correct.\n\n**Verification:** All three statements are correct, matching option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Field strength 闂?line density',
      'Force on a negative charge is opposite to $\\vec{E}$',
      'Greater field means greater force for the same charge'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-049-question.png'],
  },
  {
    id: 'es-050',
    type: 'multiple_choice',
    question:
      'The figure shows the electric field pattern around two point charges $P$ and $Q$. $X$ is the mid-point between $P$ and $Q$. $Y$ is a neutral point. Which of the following deductions is/are correct?\n\n(1) Both charges $P$ and $Q$ are positive.\n(2) The magnitude of charge $P$ is greater than that of $Q$.\n(3) The electrostatic force acting on $Q$ by $P$ is greater than that on $P$ by $Q$.',
    options: ['(1) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Field lines point away from positive charges, and the neutral point lies closer to the smaller charge; forces between two charges are equal in magnitude.\n\n**Step 1:** Statement (1)\nField lines are directed away from both charges, so both are positive. Correct.\n\n**Step 2:** Statement (2)\nThe neutral point is closer to the smaller charge; since $Y$ is farther from $P$, $P$ must be larger in magnitude than $Q$. Correct.\n\n**Step 3:** Statement (3)\nForces between two charges are an action闂傚倷鑳堕崑銊╁磿閺屻儱绠栨繛鎾虫懗ction pair, so they are equal in magnitude. False.\n\n**Verification:** Only (1) and (2) are correct, matching option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Field lines point away from positive charges',
      'Neutral point is closer to the smaller charge',
      'Interaction forces are equal and opposite'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-050-question.png'],
  },
  {
    id: 'es-051',
    type: 'multiple_choice',
    question:
      'A charged particle is accelerated across the gap between two parallel plates connected to a constant voltage supply. Neglect the effect of gravity, the kinetic energy gained by the particle in crossing the gap depends on\n\n(1) the mass of the charged particle\n(2) the separation between the two parallel plates\n(3) the voltage across the two parallel plates',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The gain in kinetic energy equals the loss in electric potential energy: $\\Delta K = qV$.\n\n**Step 1:** Evaluate dependence on mass\n$\\Delta K = qV$ does not include mass, so (1) is false.\n\n**Step 2:** Evaluate dependence on plate separation\nFor a fixed voltage, the work done depends only on $V$, not on separation, so (2) is false.\n\n**Step 3:** Evaluate dependence on voltage\n$\\Delta K = qV$ increases with $V$, so (3) is true.\n\n**Verification:** Only statement (3) is correct, matching option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Work done by the field equals $qV$',
      'Mass affects speed, not energy gained',
      'Separation does not matter when voltage is fixed'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-052',
    type: 'multiple_choice',
    question:
      'Two conducting spheres are hanging freely in air by insulating threads. In which of the following will the two spheres attract each other? (N denotes that the sphere is uncharged.)',
    options: ['(1) only', '(2) only', '(3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Attraction occurs between unlike charges and between a charged conductor and a neutral conductor (by induction).\n\n**Step 1:** Case (1)\nUnlike charges attract. So (1) gives attraction.\n\n**Step 2:** Case (2)\nA positively charged sphere attracts a neutral sphere by induction. So (2) gives attraction.\n\n**Step 3:** Case (3)\nA negatively charged sphere attracts a neutral sphere by induction. So (3) gives attraction.\n\n**Verification:** All three cases produce attraction, matching option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Unlike charges attract',
      'A charged object attracts a neutral conductor by induction',
      'Induction works for both positive and negative charges'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-052-question.png'],
  },
  {
    id: 'es-053',
    type: 'multiple_choice',
    question:
      'The figure shows the location of an isolated charge of size $+Q$. The magnitude of the electric field strength is marked at certain points. What is the magnitude of the electric field strength at $X$ and $Y$?',
    options: ['72 and 30', '72 and 36', '90 and 30', '90 and 36'],
    answer: '72 and 36',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Electric field from a point charge follows the inverse闂傚倷鑳堕崑銊╁磿閺屻儱鑸圭紒澶嬫奖are law: $E \\propto 1/r^2$.\n\n**Step 1:** Field at $X$\nPoint $X$ is at the same distance from $+Q$ as the point labeled 72, so $E_X = 72$.\n\n**Step 2:** Field at $Y$\nDistance $r_Y = \\sqrt{3^2 + 1^2} = \\sqrt{10}$. Relative to the point with $E = 360$ at $r = 1$:\n$$E_Y = 360 \\times \\frac{1}{(\\sqrt{10})^2} = 36$$\n\n**Verification:** $(E_X, E_Y) = (72, 36)$, matching option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $E \\propto 1/r^2$',
      'Same distance gives same field',
      'Compute $r_Y = \\sqrt{10}$'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-053-question.png'],
  },
  {
    id: 'es-054',
    type: 'multiple_choice',
    question:
      'Three identical point charges $q$ (represented by dots) are situated in space as shown. Which of the following descriptions about the direction and magnitude of the electric field $E$ at $X$ and at $Y$ is correct?',
    options: [
      'Direction same; $E_X > E_Y$',
      'Direction same; $E_X < E_Y$',
      'Direction opposite; $E_X > E_Y$',
      'Direction opposite; $E_X < E_Y$'
    ],
    answer: 'Direction opposite; $E_X < E_Y$',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The net field direction follows vector addition; at $X$ two contributions cancel, while at $Y$ all three add in the same direction.\n\n**Step 1:** Field at $X$\nTwo charges contribute equal and opposite fields that cancel, leaving only the field from the third charge. The net field points left.\n\n**Step 2:** Field at $Y$\nAll three charges produce fields to the right, so they add. The net field points right.\n\n**Step 3:** Compare magnitudes\nAt $Y$ there are additional contributions beyond the single闂傚倷鑳堕崑銊╁磿閺屻儱鐭楃紒璺哄劖rge field seen at $X$, so $E_Y > E_X$.\n\n**Verification:** Directions are opposite and $E_X < E_Y$, matching option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use symmetry to see cancellations at $X$',
      'At $Y$ the fields add in the same direction',
      'More contributing fields means larger magnitude'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-054-question.png'],
  },
  {
    id: 'es-055',
    type: 'multiple_choice',
    question:
      'Two point charges $+2Q$ and $-Q$ are situated at fixed positions as shown. $M$ is the mid-point between the charges. $W$, $X$, $Y$ and $Z$ are points marked on the line joining these two charges. At which point could the resultant electric field due to the two charges be zero?',
    options: ['W', 'X', 'Y', 'Z'],
    answer: 'Z',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** For unlike charges of unequal magnitude, the neutral point lies outside the segment on the side of the smaller charge.\n\n**Step 1:** Determine field directions\nBetween the charges, the fields point in the same direction, so they cannot cancel.\n\n**Step 2:** Check the side beyond the smaller charge\nOn the side of $-Q$, the fields oppose each other and can balance at some point.\n\n**Verification:** The neutral point is at $Z$, matching option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Fields cancel only where they are opposite in direction',
      'Between unlike charges, fields point the same way',
      'Neutral point is on the side of the smaller charge'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-055-question.png'],
  },
  {
    id: 'es-056',
    type: 'multiple_choice',
    question:
      '$P$, $Q$, $R$, $S$ are charged objects. When two of them are brought close to each other, $P$ and $Q$ repel, $R$ and $S$ also repel while $Q$ and $R$ attract each other. Which of the following descriptions about their charges is/are correct?\n\n(1) $P$ and $R$ are negatively charged.\n(2) $Q$ and $S$ are positively charged.\n(3) $P$ is positively charged and $S$ is negatively charged.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Repulsion implies like charges, attraction implies unlike charges. Use these relations to deduce possible signs.\n\n**Step 1:** From $P$闂?Q$ repulsion\n$P$ and $Q$ have the same sign.\n\n**Step 2:** From $R$闂?S$ repulsion\n$R$ and $S$ have the same sign.\n\n**Step 3:** From $Q$闂?R$ attraction\n$Q$ and $R$ have opposite signs. Therefore, $P$ (same as $Q$) and $S$ (same as $R$) must be opposite in sign.\n\n**Verification:** This makes statement (3) possible, while (1) and (2) are impossible. So option B is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Repulsion implies same sign',
      'Attraction implies opposite signs',
      'Combine the relationships to test each statement'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-057',
    type: 'multiple_choice',
    question:
      'Lightning flash may occur when the strength of the electric field (assumed uniform) between a thundercloud and the ground reaches $3 \\times 10^6\\,\\text{N C}^{-1}$. A lightning flash on average discharges about 20 C of charge. If a thundercloud is at a height of 500 m above the ground, estimate the order of magnitude of the energy released in a lightning flash.',
    options: ['10闂?J', '10闂?J', '10濠德板€х徊钘夘焽閿熺姴鍨?J', '10濠德板€х紞鈧柛搴ゎ嚙椤?J'],
    answer: '10濠德板€х徊钘夘焽閿熺姴鍨?J',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Energy released is $U = QV$, with $V = Ed$ for a uniform field.\n\n**Step 1:** Potential difference\n$$V = Ed = (3 \\times 10^6)(500) = 1.5 \\times 10^9\\,\\text{V}$$\n\n**Step 2:** Energy released\n$$U = QV = 20 \\times 1.5 \\times 10^9 = 3 \\times 10^{10}\\,\\text{J}$$\n\n**Verification:** The order of magnitude is $10^{10}\\,\\text{J}$, matching option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $V = Ed$',
      'Use $U = QV$',
      'Order of magnitude: keep powers of ten'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-058',
    type: 'multiple_choice',
    question:
      '$X$ and $Y$ are two small identical metal spheres carrying charges $-2Q$ and $+6Q$ respectively. When $X$ and $Y$ are separated by a certain distance, the magnitude of the electrostatic force between them is $F$.\n\nThe spheres are brought to touch each other and then placed back to their original positions. The electrostatic force between them becomes',
    options: [
      '1/4 F, attractive',
      '1/4 F, repulsive',
      '1/3 F, attractive',
      '1/3 F, repulsive'
    ],
    answer: '1/3 F, repulsive',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Identical spheres share total charge equally after contact; the force scales with the product of charges.\n\n**Step 1:** Initial force\n$$F \\propto (2Q)(6Q) = 12Q^2$$\n\n**Step 2:** After contact\nTotal charge $= +6Q + (-2Q) = +4Q$, so each sphere becomes $+2Q$.\n\n**Step 3:** New force\n$$F^{\\prime} \\propto (2Q)(2Q) = 4Q^2$$\nSo $F^{\\prime} = \\frac{4}{12}F = \\frac{1}{3}F$.\n\n**Verification:** Both spheres are positive, so the force is repulsive. Option D is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Total charge is conserved',
      'Identical spheres share charge equally',
      'Force is proportional to the product of charges'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-058-question.png'],
  },
  {
    id: 'es-059',
    type: 'multiple_choice',
    question:
      'Two insulated uncharged metal spheres $X$ and $Y$ are placed in contact. A positively-charged rod is brought near $X$ as shown. $X$ is then touched by a finger momentarily and the two spheres are then separated by removing $Y$. The charged rod is removed afterwards. Which of the following describes the charges on $X$ and $Y$?',
    options: [
      'Sphere $X$ uncharged, Sphere $Y$ uncharged',
      'Sphere $X$ uncharged, Sphere $Y$ positive',
      'Sphere $X$ negative, Sphere $Y$ uncharged',
      'Sphere $X$ negative, Sphere $Y$ negative'
    ],
    answer: 'Sphere $X$ negative, Sphere $Y$ uncharged',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** Grounding while the rod is nearby allows electrons to flow in; separating the spheres traps charge on $X$ while $Y$ becomes neutral.\n\n**Step 1:** Induction by the positive rod\nElectrons move toward $X$, leaving $Y$ positive.\n\n**Step 2:** Touch $X$ (grounding)\nElectrons flow from Earth into the connected spheres, neutralizing the positive charge on $Y$.\n\n**Step 3:** Separate the spheres and remove the rod\n$X$ retains excess electrons (negative), while $Y$ remains neutral.\n\n**Verification:** $X$ is negative and $Y$ is uncharged, matching option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'A positive rod attracts electrons toward $X$',
      'Grounding provides electrons to cancel positive charge on $Y$',
      'Separating the spheres traps charge on $X$'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-059-question.png'],
  },
  {
    id: 'es-060',
    type: 'multiple_choice',
    question:
      'Two parallel metal plates $P$ and $Q$ are maintained at a certain p.d. by a battery. An electron placed between the plates would experience an electrostatic force of $8.0 \\times 10^{-18}\\,\\text{N}$ towards $P$. Which of the following descriptions about the electric field $E$ between the plates is correct?',
    options: [
      'E = 0.02 N C闂傚倷鑳堕鑼不閹达富鏁?from $Q$ to $P$',
      'E = 0.02 N C闂傚倷鑳堕鑼不閹达富鏁?from $P$ to $Q$',
      'E = 50 N C闂傚倷鑳堕鑼不閹达富鏁?from $Q$ to $P$',
      'E = 50 N C闂傚倷鑳堕鑼不閹达富鏁?from $P$ to $Q$'
    ],
    answer: 'E = 50 N C闂傚倷鑳堕鑼不閹达富鏁?from $P$ to $Q$',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** $\\vec{F} = q\\vec{E}$, so a negative charge experiences force opposite to the field direction.\n\n**Step 1:** Find field magnitude\n$$E = \\frac{F}{|q|} = \\frac{8.0 \\times 10^{-18}}{1.6 \\times 10^{-19}} = 50\\,\\text{N C}^{-1}$$\n\n**Step 2:** Determine field direction\nThe electron is pushed toward $P$, so the field must point from $P$ to $Q$ (opposite to the force on a negative charge).\n\n**Verification:** $E = 50\\,\\text{N C}^{-1}$ from $P$ to $Q$, matching option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E = F/|q|$',
      'Force on an electron is opposite to field direction',
      'Check both magnitude and direction'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-060-question.png'],
  },
  {
    id: 'es-061',
    type: 'multiple_choice',
    question:
      'Three point charges $Q_1$, $Q_2$ and $Q_3$ are fixed on a straight line with $Q_2$ at the mid-point of $Q_1$ and $Q_3$. The resultant electrostatic force on each charge is zero. Which of the following can be the sign and the magnitude (in the same arbitrary units) of $Q_1$, $Q_2$ and $Q_3$?',
    options: ['+2, +1, +2', '+2, -1, +2', '$\\text{-}4$, +1, +4', '$\\text{-}4$, +1, -4'],
    answer: '$\\text{-}4$, +1, -4',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** For zero net force on each charge, the outer charges must be equal in magnitude and same sign, and the middle charge must be opposite in sign with one闂傚倷鑳堕崑銊╁磿閺屻儱鑸圭痪鐐摣rter the magnitude.\n\n**Step 1:** Symmetry about the midpoint\nFor forces on $Q_1$ and $Q_3$ to cancel, $Q_1$ and $Q_3$ must be equal and have the same sign.\n\n**Step 2:** Balance forces on an outer charge\nThe force from the other outer charge is at twice the distance, so it is four times weaker. Thus $|Q_1| = |Q_3| = 4|Q_2|$ and $Q_2$ must have opposite sign.\n\n**Verification:** The set $(-4, +1, -4)$ satisfies these conditions, matching option D.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use symmetry about the midpoint',
      'Force scales as $1/r^2$ so the farther charge is four times weaker',
      'The middle charge must have opposite sign'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-061-question.png'],
  },
  {
    id: 'es-062',
    type: 'multiple_choice',
    question:
      'Three conducting balls are suspended by insulating threads. Any two of them are found to attract each other if brought close to each other. Which conclusion below is correct?',
    options: [
      'Only one ball is uncharged while the other two carry like charges.',
      'Only one ball is uncharged while the other two carry unlike charges.',
      'Only one ball is charged.',
      'All three balls are charged.'
    ],
    answer: 'Only one ball is uncharged while the other two carry unlike charges.',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** A charged ball attracts a neutral ball by induction, and unlike charges attract each other.\n\n**Step 1:** Consider a neutral ball with two charged balls\nIf one ball is neutral, it will be attracted to either a positive or a negative charged ball.\n\n**Step 2:** Ensure every pair attracts\nThe two charged balls must be unlike, otherwise they would repel. With one neutral and two unlike charges, every pair attracts.\n\n**Verification:** This matches option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'A neutral conductor is attracted to any charged conductor',
      'Unlike charges attract each other',
      'All pairs must attract'
    ],
    sectionId: 'electrostatics',
  },
  {
    id: 'es-063',
    type: 'multiple_choice',
    question:
      'Two point charges $-4Q$ and $+Q$ are fixed as shown. At which point indicated in the figure is the resultant electric field due to these two charges zero?',
    options: ['W', 'X', 'Y', 'Z'],
    answer: 'Z',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The neutral point for unlike charges lies outside the segment on the side of the smaller charge.\n\n**Step 1:** Set up field balance\nLet the neutral point be a distance $x$ to the right of the $+Q$ charge. The fields must be equal and opposite:\n$$\\frac{4Q}{(3 + x)^2} = \\frac{Q}{x^2}$$\n\n**Step 2:** Solve for $x$\n$$4x^2 = (3 + x)^2 \\Rightarrow x = 3$$\n\n**Verification:** The neutral point is at $Z$, matching option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Neutral point is on the side of the smaller charge',
      'Set field magnitudes equal',
      'Solve for the position'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-063-question.png'],
  },
  {
    id: 'es-064',
    type: 'multiple_choice',
    question:
      'Point charges $+4Q$ and $+Q$ are fixed on the $x$-axis with $+4Q$ at the origin $O$ and $+Q$ at $x=15\\,\\text{cm}$ as shown. The respective electric fields due to the two charges are equal at',
    options: ['x = 10 cm', 'x = 12 cm', 'x = 20 cm', 'x = 30 cm'],
    answer: 'x = 30 cm',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** For equal field magnitudes from two like charges, the point lies outside the segment, closer to the smaller charge.\n\n**Step 1:** Set equal magnitudes on the right side of $+Q$\nLet the point be at $x > 15$ (cm). Then:\n$$\\frac{4Q}{x^2} = \\frac{Q}{(x-15)^2}$$\n\n**Step 2:** Solve\n$$4(x-15)^2 = x^2 \\Rightarrow x = 30\\,\\text{cm}$$\n\n**Verification:** The correct location is $x=30\\,\\text{cm}$, matching option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Consider points to the right of +Q',
      'Set field magnitudes equal',
      'Solve for x'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-064-question.png'],
  },
  {
    id: 'es-065',
    type: 'multiple_choice',
    question:
      'In the figure, two charged conducting spheres of the same mass $m$ are put in a vertical plastic cylinder. The inner wall of the cylinder is smooth. The spheres are separated by a distance $d$ and remain in equilibrium.\n\nWhich of the following statements MUST BE correct?\n\n(1) Both spheres carry positive charges.\n(2) The amount of charges on the two spheres are the same.\n(3) The separation $d$ depends on $m$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The spheres repel, so they have like charges (sign unknown), and equilibrium requires electrostatic force to balance weight, linking $d$ to $m$.\n\n**Step 1:** Statement (1)\nRepulsion implies like charges, but they could be both positive or both negative. So (1) is not necessarily correct.\n\n**Step 2:** Statement (2)\nEqual mass does not imply equal charge; charges can differ. So (2) is not necessarily correct.\n\n**Step 3:** Statement (3)\nFor the upper sphere, electrostatic repulsion balances weight: $$mg = \\frac{Q_1 Q_2}{4\\pi\\varepsilon_0 d^2}$$\nSo the separation $d$ depends on $m$ (and on $Q_1 Q_2$). Thus (3) must be correct.\n\n**Verification:** Only statement (3) is correct, matching option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Repulsion means like charges, not necessarily positive',
      'Equal mass does not imply equal charge',
      'Use force balance to relate $d$ and $m$'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-065-question.png'],
  },
  {
    id: 'es-066',
    type: 'multiple_choice',
    question:
      'A point charge $+Q$ is fixed at a distance $d$ away from the origin $O$ as shown. Which of the following graphs best represents the variation of the electric field strength $E$ along the $x$-axis? (Take the electric field pointing to the right as positive.)',
    options: [
      '/physics/exercises/electrostatics/es-066-option-a.png',
      '/physics/exercises/electrostatics/es-066-option-b.png',
      '/physics/exercises/electrostatics/es-066-option-c.png',
      '/physics/exercises/electrostatics/es-066-option-d.png'
    ],
    answer: '/physics/exercises/electrostatics/es-066-option-d.png',
    explanation:
      '闂傚倷绀侀悿鍥р枖閺囩喎鍨旈悗闈涙憸缁?**Key point:** The field of a positive charge points away from the charge and follows $E \\propto 1/r^2$, approaching zero at large distances.\n\n**Step 1:** Sign of $E$\nTo the right of the charge, $E$ points right (positive). To the left, it points left (negative). With the charge at $x=-d$, the graph must reflect this sign change at the charge location.\n\n**Step 2:** Shape\n$E$ diverges at the charge position and tends to zero as $|x|\\to\\infty$.\n\n**Verification:** The graph matching these features is option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Field points away from a positive charge',
      'Magnitude follows $1/r^2$',
      'Sign depends on direction along the x-axis'
    ],
    sectionId: 'electrostatics',
    imagePaths: ['/physics/exercises/electrostatics/es-066-question.png'],
  },
  {
    id: 'ec-006',
    type: 'multiple_choice',
    question:
      'In the circuit shown, ammeter $A_1$ reads 2 mA and ammeter $A_2$ reads 8 mA . What is the voltage across $A B$ ?',
    options: ['10 V', '40 V', '50 V', '100 V'],
    answer: '50 V',
    explanation:
      'The current through the 5000 ohm resistor is the total branch current, so it is 2 mA + 8 mA = 10 mA. Using V = IR gives V = (10 x 10^-3) x 5000 = 50 V. Therefore the voltage across $AB$ is 50 V.',
    difficulty: 2,
    points: 15,
    hints: [
      'Add the two ammeter readings to get the current through the 5000 ohm resistor',
      'Convert mA to A before using V = IR',
      'Then calculate the p.d. across AB',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-006-question.png'],
  },
  {
    id: 'ec-007',
    type: 'multiple_choice',
    question:
      'The diagram shows a network of resistors, where the resistance of each resistor is $2 \\Omega$. What are the equivalent resistances across $A B$ and $A D$ respectively?',
    options: [
      '1.67 ohm, 1.00 ohm',
      '1.67 ohm, 1.67 ohm',
      '1.67 ohm, 3.67 ohm',
      '2.50 ohm, 1.00 ohm',
    ],
    answer: '1.67 ohm, 1.67 ohm',
    explanation:
      'The two left resistors are in parallel, so their equivalent resistance is R/2 = 1 ohm. The three right resistors are in parallel, so their equivalent resistance is R/3 = 2/3 ohm. These two equivalent sections are then in series, giving 1 + 2/3 = 1.67 ohm. Since points $B$ and $D$ are at the same potential in this network, the equivalent resistance across $AB$ and across $AD$ is the same.',
    difficulty: 3,
    points: 20,
    hints: [
      'Reduce each parallel group first',
      'For two identical resistors in parallel, the equivalent is R/2',
      'For three identical resistors in parallel, the equivalent is R/3',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-007-question.png'],
  },
  {
    id: 'ec-008',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the cell has negligible internal resistance. The two resistors $R$ are identical. If the power dissipated in the circuit is $P$ when $K$ is open, find the power dissipated when $K$ is closed.',
    options: ['$1/4 P$', '$1/2 P$', '$2 P$', '$4 P$'],
    answer: '$2 P$',
    explanation:
      'Let the cell voltage be $V$. When $K$ is open, the two identical resistors are in series so the total resistance is $2R$, and the power is $P = V^2/(2R)$. When $K$ is closed, one resistor is short-circuited so the circuit resistance becomes $R$, giving a new power of $V^2/R = 2P$. Therefore the power doubles.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use total resistance before and after the switch is closed',
      'Closing the switch shorts one resistor',
      'With fixed V, total power is V^2 / R_total',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-008-question.png'],
  },
  {
    id: 'ec-009',
    type: 'multiple_choice',
    question: 'Which of the following are vectors ?\n\n(1) weight\n(2) charge\n(3) voltage',
    options: ['(1) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) only',
    explanation:
      'Weight is a force, so it has both magnitude and direction and is therefore a vector. Charge is a scalar; positive and negative indicate type, not direction. Voltage is also a scalar quantity. So only statement (1) is a vector.',
    difficulty: 1,
    points: 10,
    hints: [
      'Forces are vectors',
      'Scalars can have sign without having direction',
      'Voltage is not a directional quantity',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-010',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the cell has negligible internal resistance. If the lamp $L_3$ burns out, then',
    options: [
      '$L_4$ becomes brighter.',
      '$L_2$ becomes brighter.',
      '$L_1$ becomes dimmer.',
      '$L_1$ retains the same brightness.',
    ],
    answer: '$L_1$ retains the same brightness.',
    explanation:
      'When $L_3$ burns out, the branch containing it is broken, so the lamp in that same branch is affected, but the potential difference across $L_1$ remains unchanged. Since the voltage across $L_1$ does not change, its current and power do not change. Therefore its brightness stays the same.',
    difficulty: 2,
    points: 15,
    hints: [
      'A burned-out lamp acts like an open circuit',
      'Check whether the p.d. across $L_1$ changes',
      'If voltage is unchanged, brightness is unchanged',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-011',
    type: 'multiple_choice',
    question:
      'Suppose you were given four similar lamps and a battery. Which of the following ways of connecting the lamps to the battery would give the maximum brightness overall?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'C',
    explanation:
      'For a fixed battery voltage, the total power delivered is P = V^2 / R_eq. To get maximum overall brightness, the equivalent resistance should be as small as possible. The arrangement with the most parallel connection gives the smallest equivalent resistance, so it draws the largest total power. Hence option C gives the maximum total brightness.',
    difficulty: 2,
    points: 15,
    hints: [
      'Overall brightness depends on total power from the battery',
      'Use P = V^2 / R_eq for fixed voltage',
      'More parallel branches reduce equivalent resistance',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-012',
    type: 'multiple_choice',
    question:
      'In the given circuit diagram, the battery has a voltage of 6 V and negligible internal resistance. The three resistors are identical and the voltmeter has the same resistance as each resistor. What is the reading on the voltmeter ?',
    options: ['1.0 V', '1.2 V', '1.5 V', '2.0 V'],
    answer: '1.2 V',
    explanation:
      'The voltmeter has resistance $R$, and it is in parallel with one resistor of resistance $R$, so that parallel part has equivalent resistance $R/2 = 0.5R$. The total series resistance is then $R + 0.5R + R = 2.5R$. The voltmeter branch shares the same p.d. as that middle equivalent section, so its reading is 6 x (0.5R)/(2.5R) = 1.2 V.',
    difficulty: 3,
    points: 20,
    hints: [
      'Treat the voltmeter as a resistor equal to R, as stated in the question',
      'First reduce the parallel combination of R and R',
      'Then use voltage division in the series circuit',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-013',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the resistances of $R_1, R_2$ and $R_3$ are all equal to $2 \\Omega$. The power dissipated by $R_2$ is',
    options: ['2 W', '4 W', '6 W', '8 W'],
    answer: '2 W',
    explanation:
      'The equivalent resistance is $2 + (2/2) = 3 \\Omega$. The total current is therefore $I = V/R = 6/3 = 2$ A. Since $R_2$ and $R_3$ are equal, the current splits equally between them, so the current through $R_2$ is 1 A. Hence the power dissipated by $R_2$ is $P = I^2R = 1^2 x 2 = 2$ W.',
    difficulty: 2,
    points: 15,
    hints: [
      'First find the equivalent resistance of the circuit',
      'Use the supply voltage to get the total current',
      'Equal parallel resistors share current equally',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-013-question.png'],
  },
  {
    id: 'ec-014',
    type: 'multiple_choice',
    question:
      'The resistance of a given conducting wire may be increased by\n\n(1) decreasing the radius of the wire.\n(2) increasing the length of the wire.\n(3) winding the wire in the form of a coil.',
    options: ['(1) only', '(1) & (2) only', '(1) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      'For a given material, resistance depends on length and cross-sectional area: $R \\propto L/A$. Decreasing the radius reduces the cross-sectional area, so the resistance increases. Increasing the length also increases the resistance. Changing only the shape of the wire into a coil does not change its resistance if the length and cross-sectional area remain the same.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use how resistance depends on length and area',
      'Smaller radius means smaller area',
      'Shape alone does not change resistance',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-015',
    type: 'multiple_choice',
    question:
      'When connected in series in an electric circuit, the power dissipated in two resistors $R_1$ and $R_2$ is in the ratio of $1:4$. What will be the ratio of the power dissipated in $R_1$ and $R_2$ when they are connected in parallel?',
    options: ['1:2', '2:1', '1:4', '4:1'],
    answer: '4:1',
    explanation:
      'In series, the current is the same through both resistors, so $P = I^2R$. Therefore the power ratio is the same as the resistance ratio, giving $R_1:R_2 = 1:4$. In parallel, the voltage across both resistors is the same, so $P = V^2/R$. Power is then inversely proportional to resistance, so $P_1:P_2 = R_2:R_1 = 4:1$.',
    difficulty: 3,
    points: 20,
    hints: [
      'In series, compare power using P = I^2R',
      'Use the series power ratio to find the resistance ratio',
      'In parallel, compare power using P = V^2/R',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-016',
    type: 'multiple_choice',
    question:
      'In the above circuit, $A_1, A_2$ and $A_3$ are ammeters of negligible internal resistance. What will happen to the readings of the ammeters if the switch $S$ is closed ?',
    options: [
      '$A_1$ unchanged, $A_2$ increases, $A_3$ becomes zero',
      '$A_1$ increases, $A_2$ decreases, $A_3$ decreases',
      '$A_1$ unchanged, $A_2$ increases, $A_3$ becomes zero',
      '$A_1$ unchanged, $A_2$ decreases, $A_3$ increases',
    ],
    answer: '$A_1$ unchanged, $A_2$ increases, $A_3$ becomes zero',
    explanation:
      'Closing $S$ does not change the voltage across the branch measured by $A_1$, so the current through that branch stays the same. Closing $S$ increases the p.d. across the branch containing $A_2$, so its reading increases. The branch containing $A_3$ is short-circuited when $S$ is closed, so no current flows through it and the reading becomes zero.',
    difficulty: 3,
    points: 20,
    hints: [
      'Check which branch voltages change when the switch is closed',
      'A short circuit bypasses the branch it shunts',
      'No p.d. across a branch means no current through it',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-016-question.png'],
  },
  {
    id: 'ec-017',
    type: 'multiple_choice',
    question:
      'In the circuit shown, what is the current passing through the ammeter $A$ ?',
    options: ['0 A', '1 A', '2 A', '4 A'],
    answer: '4 A',
    explanation:
      'Apply current conservation at the junction. The total current entering equals the total current leaving, so $3 + 2 = 1 + I$. Therefore $I = 4$ A, so the ammeter reads 4 A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use conservation of charge at the junction',
      'Current in equals current out',
      'Set up a simple balance equation',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-017-question.png'],
  },
  {
    id: 'ec-018',
    type: 'multiple_choice',
    question:
      'An immersion heater of resistance $50 \\Omega$ raises the temperature of 1 kg of water by $20^\\circ \\mathrm{C}$ in 3 minutes, the voltage supply being 200 V . What would be the energy wasted?\n\n(Specific heat capacity of water $=4.2 \\mathrm{~kJ} \\mathrm{~kg}^{-1} {^\\circ}\\mathrm{C}^{-1}$ )',
    options: ['0.44 kJ', '2.32 kJ', '44 kJ', '60 kJ'],
    answer: '60 kJ',
    explanation:
      'The heater power is $P = V^2/R = 200^2/50 = 800$ W. In 3 minutes, the electrical energy supplied is $E = Pt = 800 x 180 = 144000$ J = 144 kJ. The water gains $mc\\Delta T = 1 x 4.2 x 20 = 84$ kJ. Therefore the energy wasted is $144 - 84 = 60$ kJ.',
    difficulty: 3,
    points: 20,
    hints: [
      'Find heater power from P = V^2 / R',
      'Convert 3 minutes to seconds',
      'Subtract useful heating energy from total electrical energy',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-019',
    type: 'multiple_choice',
    question:
      'The diagrams below show three possible arrangements of four identical resistors $R$.\n\nList the arrangements in order of increasing equivalent resistance, as measured between $X$ and $Y$.',
    options: ['(a), (b), (c)', '(b), (c), (a)', '(c), (a), (b)', '(c), (b), (a)'],
    answer: '(c), (a), (b)',
    explanation:
      'For arrangement (a), the equivalent resistance is $R_a = (R x 3R)/(R + 3R) = 3R/4$. For arrangement (b), the equivalent resistance is $R_b = (2R x 2R)/(2R + 2R) = R$. For arrangement (c), all four resistors are in parallel so $R_c = R/4$. Therefore, in increasing order: $R_c < R_a < R_b$, which gives (c), (a), (b).',
    difficulty: 3,
    points: 20,
    hints: [
      'Find the equivalent resistance of each arrangement separately',
      'Use the parallel formula carefully',
      'Then compare the three values',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-019-question.png'],
  },
  {
    id: 'ec-020',
    type: 'multiple_choice',
    question:
      'Four identical bulbs $P, Q, R$ and $S$ are connected as shown in the two circuit diagrams above. What happens to the brightness of $P$ and $R$ if the switches of both circuits are closed ?',
    options: [
      '$P$ decreases, $R$ remains constant',
      '$P$ remains constant, $R$ decreases',
      '$P$ increases, $R$ remains constant',
      '$P$ decreases, $R$ decreases',
    ],
    answer: '$P$ decreases, $R$ remains constant',
    explanation:
      'When the relevant switch is closed, the equivalent resistance of the first circuit decreases, so the total current from the cell increases and the voltage division changes. This reduces the p.d. across bulb $P$, so $P$ becomes dimmer. In the second circuit, the voltage across bulb $R$ remains unchanged after the switch is closed, so its current and power stay the same. Therefore $R$ keeps the same brightness.',
    difficulty: 3,
    points: 20,
    hints: [
      'Check how the equivalent resistance changes when the switch is closed',
      'Brightness depends on power, which depends on voltage/current through the bulb',
      'If the p.d. across a bulb is unchanged, its brightness is unchanged',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-020-question.png'],
  },
  {
    id: 'ec-021',
    type: 'multiple_choice',
    question:
      'In the circuit shown, all bulbs $B$ are identical. If ammeter $A_1$ reads 1.8 A , what does ammeter $A_2$ read?',
    options: ['1.2 A', '0.9 A', '0.6 A', '0.3 A'],
    answer: '0.6 A',
    explanation:
      'Ammeter $A_1$ measures the total current through three identical parallel branches, while $A_2$ measures the current through one bulb only. Since the three identical bulbs share the current equally, the current through each branch is $1.8/3 = 0.6$ A. Therefore $A_2$ reads 0.6 A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Three identical branches share current equally',
      '$A_1$ is the total current',
      'Divide the total by 3',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-021-question.png'],
  },
  {
    id: 'ec-022',
    type: 'multiple_choice',
    question:
      'An immersion heater $A$ takes 10 minutes to boil a kettle of water while another heater $B$ takes 40 minutes to boil the same kettle of water under the same voltage supply. If the resistance of heater $A$ is $100 \\Omega$, what is the resistance of heater $B$ ?',
    options: ['$50 \\Omega$', '$100 \\Omega$', '$200 \\Omega$', '$400 \\Omega$'],
    answer: '$400 \\Omega$',
    explanation:
      'For the same kettle and the same heating process, the same energy is needed. Since $E = Pt$ and $P = V^2/R$ for the same supply voltage, the heating time is proportional to the resistance. Therefore $t_B/t_A = R_B/R_A = 40/10 = 4$, so $R_B = 4 x 100 = 400 \\Omega$.',
    difficulty: 2,
    points: 15,
    hints: [
      'The same heating process requires the same energy',
      'For fixed voltage, power is inversely proportional to resistance',
      'So heating time is proportional to resistance',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-023',
    type: 'multiple_choice',
    question:
      'A student, who wishes to find the resistance of a light bulb when connected to a certain battery, incorrectly connects a practical voltmeter and a practical ammeter as shown. What would be the most probable outcome of his error ?',
    options: [
      'The voltmeter would indicate zero voltage.',
      'The ammeter would burn out.',
      'The light bulb would burn out.',
      'Both the ammeter and the voltmeter would burn out.',
    ],
    answer: 'The ammeter would burn out.',
    explanation:
      'A practical ammeter has very low resistance. In the wrong connection, it is effectively placed so that a very large current flows through it. That can overload the ammeter and burn it out. The voltmeter has very high resistance, so only a very small current flows through it, and the bulb would not be the part most likely to fail in this arrangement.',
    difficulty: 2,
    points: 15,
    hints: [
      'Ammeter resistance is very small',
      'Wrong ammeter connection can create excessive current',
      'Voltmeter resistance is very large',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-023-question.png'],
  },
  {
    id: 'ec-024',
    type: 'multiple_choice',
    question:
      'Which of the following will increase the resistance of a metal wire ?\n\n(1) increasing the length of the wire\n(2) increasing the cross-sectional area of the wire\n(3) increasing the temperature of the wire',
    options: ['(1) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (3) only',
    explanation:
      'Increasing the length of a metal wire increases its resistance. Increasing the cross-sectional area decreases the resistance, so statement (2) is false. For a metal wire, increasing temperature increases resistance. Therefore only (1) and (3) will increase the resistance.',
    difficulty: 2,
    points: 15,
    hints: [
      'Longer wire means greater resistance',
      'Larger cross-sectional area means smaller resistance',
      'For metals, resistance rises with temperature',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-025',
    type: 'multiple_choice',
    question:
      'In the circuit, when $K_1$ is closed the voltmeter reads 12 V . What would the reading be if both $K_1$ and $K_2$ are closed ?',
    options: ['8 V', '12 V', '16 V', '18 V'],
    answer: '8 V',
    explanation:
      'When only $K_1$ is closed, the 12 V reading implies the unknown resistor is 6 ohm by the given circuit arrangement. When both $K_1$ and $K_2$ are closed, the relevant two equal resistors are in parallel, so their equivalent resistance becomes 3 ohm. Using voltage division with the 24 V source then gives $V = 24 x 3/(3 + 6) = 8$ V.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the first voltmeter reading to infer the unknown resistance',
      'Closing both switches creates a parallel combination',
      'Then apply voltage division',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-025-question.png'],
  },
  {
    id: 'ec-026',
    type: 'multiple_choice',
    question:
      'In the above circuit $A_1, A_2$ and $A_3$ are ammeters connected to a constant voltage source. What will happen to the readings of the ammeters if the switch $S$ is closed ?',
    options: [
      '$A_1$ no change, $A_2$ increases, $A_3$ becomes zero',
      '$A_1$ increases, $A_2$ decreases, $A_3$ decreases',
      '$A_1$ no change, $A_2$ increases, $A_3$ becomes zero',
      '$A_1$ no change, $A_2$ decreases, $A_3$ increases',
    ],
    answer: '$A_1$ no change, $A_2$ increases, $A_3$ becomes zero',
    explanation:
      'The voltage across the branch with $A_1$ and its resistance remain the same, so the current through $A_1$ is unchanged. Closing $S$ increases the p.d. across the branch measured by $A_2$, so the reading of $A_2$ increases. At the same time, the branch containing $A_3$ is short-circuited, so no current flows through it and $A_3$ reads zero.',
    difficulty: 3,
    points: 20,
    hints: [
      'Check branch voltages after the switch is closed',
      'A shorted branch carries no current through the original path',
      'Same voltage and same resistance means same current',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-026-question.png'],
  },
  {
    id: 'ec-027',
    type: 'multiple_choice',
    question:
      'Arrange the following circuits in ascending order of equivalent resistances :\n\n(1)\n(2)\n(3)',
    options: ['(3), (2), (1)', '(1), (3), (2)', '(2), (3), (1)', '(2), (1), (3)'],
    answer: '(3), (2), (1)',
    explanation:
      'Assume each resistor is 1 ohm. Then for circuit (1), the equivalent resistance is $R_1 = 1/2 + 1 = 3/2$ ohm. For circuit (2), the equivalent resistance is $R_2 = (1 x 2)/(1 + 2) = 2/3$ ohm. For circuit (3), all three are effectively in parallel, so $R_3 = 1/3$ ohm. Therefore the ascending order is $R_3 < R_2 < R_1$, i.e. (3), (2), (1).',
    difficulty: 3,
    points: 20,
    hints: [
      'Assume each resistor is 1 ohm to simplify the comparison',
      'Compute each equivalent resistance separately',
      'Then sort the three values from smallest to largest',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-027-question.png'],
  },
  {
    id: 'ec-028',
    type: 'multiple_choice',
    question:
      'Four identical lamps $P, Q, R$ and $S$ are connected to a battery as shown above. If lamp $P$ is blown, which of the following would happen ?',
    options: [
      'Lamp $R$ becomes brighter.',
      'Lamp $Q$ becomes brighter.',
      'Lamp $S$ becomes brighter.',
      'Lamps $Q$ and $S$ remain at the same degree of brightness.',
    ],
    answer: 'Lamp $R$ becomes brighter.',
    explanation:
      'If lamp $P$ is blown, the equivalent resistance of the whole circuit increases, so the total current from the battery decreases. This reduces the voltage across the branch containing $Q$ and $S$, so both of those bulbs become dimmer. At the same time, the voltage across $R$ increases, so $R$ becomes brighter. Therefore option A is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'A blown lamp acts like an open circuit',
      'Re-evaluate how the total equivalent resistance changes',
      'Then compare the voltage across each remaining branch',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-028-question.png'],
  },
  {
    id: 'ec-029',
    type: 'multiple_choice',
    question:
      'The above circuit shows two resistors $R_1$ and $R_2$ connected in series to a battery. The resistance of $R_1$ is greater than that of $R_2$. The ends of the resistors are marked $P, Q, R$ and $S$. Which of the graphs best shows how the potential $V$ varies along $P S$ ?',
    options: [
      '/physics/exercises/electric-circuits/ec-029-option-a.png',
      '/physics/exercises/electric-circuits/ec-029-option-b.png',
      '/physics/exercises/electric-circuits/ec-029-option-c.png',
      '/physics/exercises/electric-circuits/ec-029-option-d.png',
    ],
    answer: '/physics/exercises/electric-circuits/ec-029-option-c.png',
    explanation:
      'Potential drops when current passes through a resistor, and wires of negligible resistance stay at the same potential. Therefore points $Q$ and $R$ are at the same potential. Since $R_1 > R_2$, the p.d. across $PQ$ is greater than the p.d. across $RS$, so the larger drop must be across the first resistor. The correct graph is option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'No potential drop along ideal connecting wires',
      'Greater resistance in series gives greater voltage drop',
      'So compare the drops across $R_1$ and $R_2$',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-029-question.png'],
  },
  {
    id: 'ec-030',
    type: 'multiple_choice',
    question:
      'In the circuit shown, all resistors are the same. If the current passing through point $X$ is 1 A , what will the current delivered from the battery be ?',
    options: ['1 A', '2 A', '2.5 A', '3 A'],
    answer: '2.5 A',
    explanation:
      'The current through the first row is 1 A, and the current through the second row is also 1 A. The third row has twice the resistance of one row, so its current is half as large, i.e. 0.5 A. Therefore the total current delivered by the battery is $1 + 1 + 0.5 = 2.5$ A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Treat each horizontal row as a branch',
      'The third row has larger equivalent resistance',
      'Total battery current is the sum of branch currents',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-031',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the energy required by an electron to travel from $Q$ to $P$ through $X$ is $E_1$ and that through $Y$ is $E_2$. Which of the following is true?',
    options: ['$E_1 = 4E_2$', '$E_1 = 2E_2$', '$E_1 = E_2$', '$2E_1 = E_2$'],
    answer: '$E_1 = E_2$',
    explanation:
      'In a parallel circuit, the p.d. across branch $X$ is the same as the p.d. across branch $Y$. The energy transferred to a charge is $E = QV$. Since the same electron charge passes through either route and the voltage is the same, the energy required is the same in both cases. Therefore $E_1 = E_2$.',
    difficulty: 2,
    points: 15,
    hints: [
      'Parallel branches have the same voltage',
      'Use E = QV',
      'The electron charge is the same in both cases',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-032',
    type: 'multiple_choice',
    question:
      'What should be the potential difference between $P$ and $Q$ in the circuit shown?',
    options: ['3 V', '6 V', '9 V', '12 V'],
    answer: '9 V',
    explanation:
      'The potential difference between $P$ and $Q$ is the voltage across the 3 ohm resistor. Using voltage division in the series circuit, $V_PQ = 12 x 3/(3 + 1) = 9$ V. So the correct answer is 9 V.',
    difficulty: 2,
    points: 15,
    hints: [
      'Identify which resistor lies between P and Q',
      'Use voltage division for series resistors',
      'The fraction is resistance over total resistance',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-033',
    type: 'multiple_choice',
    question:
      'In the circuit shown, which of the switches should be closed in order to get the maximum brightness in lamp $L$ ?',
    options: ['X only', 'Y only', 'Z only', '$X$ and $Y$ only'],
    answer: 'Y only',
    explanation:
      'If switch $X$ is closed, the lamps are short-circuited and go out. If switch $Y$ is closed, current flows only through lamp $L$ and bypasses the other two lamps, so the full available p.d. is across $L$. This gives lamp $L$ the maximum possible brightness. Therefore the correct choice is Y only.',
    difficulty: 2,
    points: 15,
    hints: [
      'A short circuit makes a lamp go out',
      'Maximum brightness comes from the largest p.d. across L',
      'Check which switch arrangement leaves only L in the active path',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-034',
    type: 'multiple_choice',
    question:
      'Two copper wires, $A$ and $B$, of the same length have the ratio of mass of $4:9$. Assuming the cross-sections are uniform, what is the ratio of the resistance of $A$ to that of $B$ ?',
    options: ['2:3', '3:2', '4:9', '9:4'],
    answer: '9:4',
    explanation:
      'For wires of the same material and same length, resistance is inversely proportional to cross-sectional area: $R \\propto 1/A$. Since the cross-sections are uniform and the material and length are the same, the mass is proportional to the area. Therefore $R \\propto 1/m$, so $R_A/R_B = m_B/m_A = 9/4$.',
    difficulty: 2,
    points: 15,
    hints: [
      'For same material and length, R is inversely proportional to area',
      'Mass is proportional to volume, and here volume is proportional to area',
      'Invert the mass ratio to get the resistance ratio',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-035',
    type: 'multiple_choice',
    question:
      'In the circuit shown, resistors $A, B$ and $C$ are identical. When $K$ is open, the power dissipated by $A$ is $P_1$. When $K$ is closed, the power dissipated by $A$ becomes $P_2$. The ratio $P_1:P_2$ is equal to',
    options: ['3:2', '2:1', '9:4', '4:1'],
    answer: '9:4',
    explanation:
      'When $K$ is open, the voltage across resistor $A$ is $V/2$, so $P_1 = (V/2)^2 / R = (1/4)(V^2/R)$. When $K$ is closed, the voltage across $A$ becomes $V/3$, so $P_2 = (V/3)^2 / R = (1/9)(V^2/R)$. Therefore $P_1 : P_2 = (1/4) : (1/9) = 9:4$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Find the voltage across A in each case',
      'Use P = V^2 / R for the same resistor',
      'Then compare the two fractions',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-036',
    type: 'multiple_choice',
    question:
      'In the circuit above, the two resistors are identical. When the switch $K$ is closed, what happens to the readings of the ammeter $A$ and the voltmeter $V$ ?',
    options: [
      'A increases, V decreases to zero',
      'A decreases, V decreases to zero',
      'A decreases, V decreases',
      'A increases, V decreases',
    ],
    answer: 'A increases, V decreases to zero',
    explanation:
      'When $K$ is closed, part of the circuit is short-circuited, so the equivalent resistance decreases. That increases the total current through the ammeter, so the reading of $A$ increases. The branch containing the voltmeter is then shorted, so there is no p.d. across it and the voltmeter reading falls to zero.',
    difficulty: 2,
    points: 15,
    hints: [
      'Closing the switch creates a lower-resistance path',
      'Lower equivalent resistance means larger total current',
      'A shorted branch has zero voltage across it',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-037',
    type: 'multiple_choice',
    question:
      'In the circuit shown, a $4 \\Omega$ resistor is to be connected to two of the terminals $A, B, C$ and $D$ to give the greatest brightness in the lamp bulb. Which connection should be made ?',
    options: ['across $AB$', 'across $BC$', 'across $CD$', 'across $AD$'],
    answer: 'across $CD$',
    explanation:
      'To make the lamp brightest, the total current supplied by the battery should be as large as possible while not short-circuiting the lamp. This is achieved by connecting the added 4 ohm resistor in parallel with the part of the circuit that already has the largest resistance, excluding the lamp itself. That reduces the equivalent resistance of that section the most and increases the circuit current most effectively. Therefore the resistor should be connected across $CD$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Do not short-circuit the lamp',
      'Reducing total circuit resistance increases battery current',
      'Put the extra resistor in parallel with the largest non-lamp resistance section',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-037-question.png'],
  },
  {
    id: 'ec-038',
    type: 'multiple_choice',
    question:
      'An electric heater takes a time $T$ to boil a kettle of water when connected to a 200 V source. What will be the time required to boil the same kettle of water when the heater is connected to a 100 V source?\n\n(You may assume that the resistance of the heater remains unchanged.)',
    options: ['T/4', '$T/2$', '$2T$', '$4T$'],
    answer: '$4T$',
    explanation:
      'For the same kettle, the same energy is needed to boil the water. Since $E = Pt$ and $P = V^2/R$, with the heater resistance unchanged, the heating time is inversely proportional to $V^2$. Therefore $t_2/t_1 = V_1^2/V_2^2 = 200^2/100^2 = 4$, so the new time is $4T$.',
    difficulty: 2,
    points: 15,
    hints: [
      'The same boiling process requires the same energy',
      'Use P = V^2 / R with constant resistance',
      'Time is inversely proportional to power',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-039',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the potential difference between $X$ and $Y$ is',
    options: ['zero.', '1.5 V', '3.0 V', '4.5 V'],
    answer: '1.5 V',
    explanation:
      'The equivalent resistance is $4 + [(3 + 1) x 4]/[(3 + 1) + 4] = 6$ ohm. The current through the branch containing $XY$ is therefore 0.5 A. The p.d. between $X$ and $Y$ is the voltage across the 3 ohm resistor, so $V = IR = 0.5 x 3 = 1.5$ V.',
    difficulty: 3,
    points: 20,
    hints: [
      'Reduce the compound resistor network first',
      'Find the branch current through XY',
      'Then use V = IR across the 3 ohm resistor',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-039-question.png'],
  },
  {
    id: 'ec-040',
    type: 'multiple_choice',
    question:
      'In the circuit shown, $L_1, L_2$ and $L_3$ are identical light bulbs. Which of the following statements is/are correct when the switch $S$ is closed?\n\n(1) The brightness of $L_1$ decreases.\n(2) $L_2$ and $L_3$ are of same brightness.\n(3) $L_1$ is brighter than $L_2$.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'Closing $S$ does not change the voltage across $L_1$, so its brightness does not decrease; statement (1) is false. Bulbs $L_2$ and $L_3$ are in series, so the same current flows through them and they have the same brightness, so statement (2) is true. The voltage across $L_1$ is greater than the voltage across either $L_2$ or $L_3$, so $L_1$ dissipates more power and is brighter, so statement (3) is also true.',
    difficulty: 3,
    points: 20,
    hints: [
      'Check whether the voltage across $L_1$ changes',
      'Series bulbs carry the same current',
      'Compare brightness using power',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-040-question.png'],
  },
  {
    id: 'ec-041',
    type: 'multiple_choice',
    question:
      'In the above circuit, $P, Q$ and $R$ are identical resistors. Which of the following is true when switch $S$ is closed ?',
    options: [
      'The power output from the battery increases.',
      'The voltage across $P$ remains unchanged.',
      'The current through $Q$ remains unchanged.',
      'The current through $P$ decreases.',
    ],
    answer: 'The power output from the battery increases.',
    explanation:
      'When $S$ is closed, the equivalent resistance of the circuit decreases. That means the battery supplies a larger current, so its power output increases. The current through $P$ does not decrease, and the current through $Q$ does not stay unchanged because the circuit division changes. Therefore only option A is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Closing the switch lowers the equivalent resistance',
      'Lower resistance means larger current from the battery',
      'Battery power output increases when current increases',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-041-question.png'],
  },
  {
    id: 'ec-042',
    type: 'multiple_choice',
    question:
      'In the circuit shown, what are the readings of voltmeters $V_1$ and $V_2$ if switch $S$ is closed ?',
    options: ['0 V, 2 V', '0 V, 3 V', '1 V, 2 V', '3 V, 0 V'],
    answer: '0 V, 2 V',
    explanation:
      'When $S$ is closed, $V_1$ is short-circuited, so there is no p.d. across it and it reads 0 V. For $V_2$, the relevant resistors form a potential divider, giving $V_2 = [20/(10 + 20)] x 3 = 2$ V. Therefore the readings are 0 V and 2 V.',
    difficulty: 3,
    points: 20,
    hints: [
      'A voltmeter across a short circuit reads zero',
      'Use voltage division for the remaining branch',
      'Read the resistor values carefully',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-042-question.png'],
  },
  {
    id: 'ec-043',
    type: 'multiple_choice',
    question:
      'The following diagrams show three networks consisting of different resistors.\n\nArrange the above networks in descending order of equivalent resistances :',
    options: ['(1), (2), (3)', '(2), (1), (3)', '(2), (3), (1)', '(3), (1), (2)'],
    answer: '(2), (3), (1)',
    explanation:
      'The equivalent resistance of network (1) is about 1 ohm, that of network (2) is about 1 megaohm, and that of network (3) is about 1 kiloohm. Therefore, in descending order of equivalent resistance, the order is (2), (3), (1).',
    difficulty: 2,
    points: 15,
    hints: [
      'Compare the orders of magnitude of the network resistances',
      '1 megaohm is greater than 1 kiloohm',
      '1 kiloohm is greater than 1 ohm',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-043-question.png'],
  },
  {
    id: 'ec-044',
    type: 'multiple_choice',
    question: 'Which of the following is/are vectors?\n\n(1) momentum\n(2) power\n(3) voltage',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'Momentum has both magnitude and direction, so it is a vector. Power is energy transferred per unit time, so it is a scalar. Voltage is energy per unit charge, and it is also a scalar. Therefore only momentum is a vector.',
    difficulty: 1,
    points: 10,
    hints: [
      'Momentum includes direction',
      'Power is scalar',
      'Voltage is scalar',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-045',
    type: 'multiple_choice',
    question:
      'The potential difference between two points $X$ and $Y$ in a circuit is 10 V . Which of the following must be true ?',
    options: [
      '1 J of electrical potential energy is transferred in passing 10 C of charges from $X$ to $Y$.',
      '5 J of electrical potential energy is transferred in passing 2 C of charges from $X$ to $Y$.',
      '10 J of electrical potential energy is transferred in passing 1 C of charges from $X$ to $Y$.',
      'The resistance between $X$ and $Y$ is $10 \\Omega$.',
    ],
    answer:
      '10 J of electrical potential energy is transferred in passing 1 C of charges from $X$ to $Y$.',
    explanation:
      'Potential difference is defined by $V = E/Q$, so $E = QV$. With a p.d. of 10 V, a charge of 1 C transfers $E = 1 x 10 = 10$ J. That matches option C. The other energy values do not satisfy $E = QV$, and voltage alone does not determine the resistance between two points.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use the definition V = E / Q',
      'Rearrange to E = QV',
      'Voltage by itself does not fix resistance',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-046',
    type: 'multiple_choice',
    question:
      'In the circuit above, what happens to the readings of the three ammeters if switch $S$ is closed ?',
    options: [
      '$A_1$ increases, $A_2$ increases, $A_3$ increases',
      '$A_1$ remains unchanged, $A_2$ becomes zero, $A_3$ increases',
      '$A_1$ increases, $A_2$ increases, $A_3$ becomes zero',
      '$A_1$ decreases, $A_2$ increases, $A_3$ becomes zero',
    ],
    answer: '$A_1$ increases, $A_2$ increases, $A_3$ becomes zero',
    explanation:
      'When $S$ is closed, the second-row and third-row resistors are short-circuited. Current then flows through $A_2$, the switch, the first-row resistor and $A_1$, while no current flows through the branch containing $A_3$. Hence $A_3$ becomes zero. The equivalent resistance of the whole circuit decreases, so the battery current increases, which means both $A_1$ and $A_2$ increase.',
    difficulty: 3,
    points: 20,
    hints: [
      'A closed switch can short a branch',
      'A shorted branch carries no current through its original resistor path',
      'Lower equivalent resistance means larger total current',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-046-question.png'],
  },
  {
    id: 'ec-047',
    type: 'multiple_choice',
    question:
      'In the circuit shown, what is the power dissipated in the $10 \\Omega$ resistor ?',
    options: ['0.8 W', '1.6 W', '2.4 W', '3.6 W'],
    answer: '1.6 W',
    explanation:
      'The total resistance is $10 + 5 = 15$ ohm, so the circuit current is $I = V/R = 6/15 = 0.4$ A. The current through the 10 ohm resistor is therefore 0.4 A. The power dissipated in that resistor is $P = I^2R = (0.4)^2 x 10 = 1.6$ W.',
    difficulty: 2,
    points: 15,
    hints: [
      'Find the total current first',
      'Use I = V / R_total',
      'Then apply P = I^2R for the 10 ohm resistor',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-047-question.png'],
  },
  {
    id: 'ec-048',
    type: 'multiple_choice',
    question:
      'In the circuit, $L_1, L_2$ and $L_3$ are identical light bulbs. Which of the following statements is/are true ?\n\n(1) $L_2$ and $L_3$ are of the same brightness.\n(2) $L_1$ is brighter than $L_2$.\n(3) The power dissipated in $L_1$ is equal to the sum of powers dissipated in $L_2$ and $L_3$.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '$L_2$ and $L_3$ are in parallel, so they have the same voltage across them and therefore the same brightness; statement (1) is true. The current through $L_1$ is the sum of the currents through $L_2$ and $L_3$, so $L_1$ dissipates more power and is brighter than either one of them; statement (2) is true. Statement (3) is false because the power in $L_1$ is not equal to the sum of the powers in $L_2$ and $L_3$ in this arrangement.',
    difficulty: 3,
    points: 20,
    hints: [
      'Parallel identical bulbs have the same brightness',
      'Current through the series bulb feeding parallel branches is larger',
      'Compare powers rather than just currents',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-048-question.png'],
  },
  {
    id: 'ec-049',
    type: 'multiple_choice',
    question:
      'In the circuit shown above, all resistors are identical and the ammeters are of negligible resistance. If the reading of ammeter $A_1$ is 2 A , find the readings of ammeters $A_2$ and $A_3$.',
    options: [
      '$A_2 = 2$ A, $A_3 = 2$ A',
      '$A_2 = 2$ A, $A_3 = 4$ A',
      '$A_2 = 4$ A, $A_3 = 2$ A',
      '$A_2 = 4$ A, $A_3 = 6$ A',
    ],
    answer: '$A_2 = 4$ A, $A_3 = 6$ A',
    explanation:
      'The first row has equivalent resistance $2R$ while the second row has equivalent resistance $R$. Since the two rows are in parallel, they share the same voltage. Therefore the current in the second row is twice the current in the first row. So $A_2 = 2 x 2 = 4$ A. Ammeter $A_3$ measures the total current, so $A_3 = A_1 + A_2 = 2 + 4 = 6$ A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Compare the equivalent resistances of the two parallel rows',
      'Same voltage across parallel branches',
      'Total current is the sum of branch currents',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-049-question.png'],
  },
  {
    id: 'ec-050',
    type: 'multiple_choice',
    question:
      'Which of the following circuits can be used to measure the resistance of the light bulb ?',
    options: [
      '/physics/exercises/electric-circuits/ec-050-option-a.png',
      '/physics/exercises/electric-circuits/ec-050-option-b.png',
      '/physics/exercises/electric-circuits/ec-050-option-c.png',
      '/physics/exercises/electric-circuits/ec-050-option-d.png',
    ],
    answer: '/physics/exercises/electric-circuits/ec-050-option-b.png',
    explanation:
      'To measure the resistance of a light bulb, the ammeter must be connected in series with the bulb and the voltmeter must be connected in parallel across the bulb. Only option B shows the correct arrangement. In the other options, either the voltmeter is wrongly placed in series or the ammeter is wrongly placed in parallel.',
    difficulty: 2,
    points: 15,
    hints: [
      'Ammeter goes in series',
      'Voltmeter goes in parallel across the component',
      'Reject any circuit that violates either rule',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-051',
    type: 'multiple_choice',
    question:
      'A student uses an ammeter and a voltmeter to find the resistance of a light bulb. He incorrectly connects the circuit as shown. Which of the following is the most probable outcome?',
    options: [
      'The ammeter burns out.',
      'The light bulb burns out.',
      'The reading of the voltmeter is zero.',
      'The reading of the ammeter is zero.',
    ],
    answer: 'The reading of the ammeter is zero.',
    explanation:
      'In the wrong connection, the voltmeter with very large resistance is in series with the circuit, so only a very small current flows. That means the ammeter reading is effectively zero. The ammeter does not burn out because the current is not large, and the voltmeter would not read zero because it takes almost the whole supply voltage.',
    difficulty: 2,
    points: 15,
    hints: [
      'A voltmeter has very high resistance',
      'Putting a voltmeter in series greatly reduces the current',
      'Very small current means the ammeter reads close to zero',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-051-question.png'],
  },
  {
    id: 'ec-052',
    type: 'multiple_choice',
    question:
      'In the above circuit, all the light bulbs are identical. What happens to the brightness of the bulbs $L_1, L_2$ and $L_3$ if switch $S$ is closed ?',
    options: [
      '$L_1$ decreases, $L_2$ increases, $L_3$ remains unchanged',
      '$L_1$ increases, $L_2$ remains unchanged, $L_3$ increases',
      '$L_1$ decreases, $L_2$ remains unchanged, $L_3$ remains unchanged',
      '$L_1$ remains unchanged, $L_2$ decreases, $L_3$ increases',
    ],
    answer: '$L_1$ decreases, $L_2$ increases, $L_3$ remains unchanged',
    explanation:
      'When $S$ is closed, lamp $L_1$ is short-circuited, so no current flows through it and its brightness falls to zero. With $L_1$ bypassed, the battery voltage is now effectively applied across the branch containing $L_2$, so $L_2$ becomes brighter. Lamp $L_3$ remains directly across the battery, so its p.d. is unchanged and its brightness stays the same.',
    difficulty: 3,
    points: 20,
    hints: [
      'A short-circuited lamp goes out',
      'After bypassing one lamp, re-check the p.d. across the others',
      'A component directly across the battery keeps the same voltage',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-052-question.png'],
  },
  {
    id: 'ec-053',
    type: 'multiple_choice',
    question:
      'Find the p.d. between $X$ and $Y$ in the above circuit.',
    options: ['0 V', '1 V', '2 V', '3 V'],
    answer: '2 V',
    explanation:
      'The equivalent resistance is $4 + 4/2 = 6$ ohm. The battery current is therefore $I = 6/6 = 1$ A. The current through the branch containing point $X$ is 0.5 A. Hence the p.d. between $X$ and $Y$ is the voltage across the 4 ohm resistor in that branch: $V = IR = 0.5 x 4 = 2$ V.',
    difficulty: 2,
    points: 15,
    hints: [
      'Reduce the parallel part first',
      'Find the total current from the battery',
      'Then find the branch current through XY',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-053-question.png'],
  },
  {
    id: 'ec-054',
    type: 'multiple_choice',
    question:
      'Which of the following is a correct unit for the corresponding physical quantity ?',
    options: [
      'Work -> watt',
      'Electromotive force -> newton',
      'Momentum -> newton second',
      'Heat capacity -> joule per kilogram',
    ],
    answer: 'Momentum -> newton second',
    explanation:
      'Work is measured in joule, not watt. Electromotive force is measured in volt, not newton. Momentum can be measured in newton second, which is equivalent to kg m s^-1. Heat capacity is measured in joule per degree Celsius (or joule per kelvin), not joule per kilogram. Therefore only option C is correct.',
    difficulty: 1,
    points: 10,
    hints: [
      'Watt is a unit of power',
      'Volt is the unit of e.m.f.',
      'Momentum can be written as N s',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-054-question.png'],
  },
  {
    id: 'ec-055',
    type: 'multiple_choice',
    question:
      'In the above circuit, the reading of ammeter $A_1$ is 0.6 A . Find the p.d. between points $P$ and $Q$.',
    options: ['3 V', '6 V', '9 V', '12 V'],
    answer: '3 V',
    explanation:
      'The p.d. between $P$ and $Q$ is the p.d. across the 5 ohm resistor. Since the current through that resistor is 0.6 A, the voltage is $V = IR = 0.6 x 5 = 3$ V. Therefore the p.d. between $P$ and $Q$ is 3 V.',
    difficulty: 2,
    points: 15,
    hints: [
      'Identify the resistor between P and Q',
      'Use the ammeter reading as the current through that resistor',
      'Apply V = IR',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-056',
    type: 'multiple_choice',
    question:
      'In the circuit above, the ammeters have negligible resistance. Which of the following statements are true if switch $S$ is closed ?\n\n(1) The reading of ammeter $A_1$ decreases.\n(2) The reading of ammeter $A_2$ increases.\n(3) The reading of the voltmeter remains unchanged.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      'Closing $S$ decreases the equivalent resistance, so the battery supplies more current and the current through $A_2$ increases. The voltage measured by the voltmeter is the battery voltage, so it remains unchanged. The current through $A_1$ does not decrease. Therefore only statements (2) and (3) are true.',
    difficulty: 3,
    points: 20,
    hints: [
      'Closing the switch lowers the equivalent resistance',
      'A lower total resistance increases total current',
      'The voltmeter is measuring the battery p.d.',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-056-question.png'],
  },
  {
    id: 'ec-057',
    type: 'multiple_choice',
    question:
      'Which of the following pairs of physical quantities has the same units?',
    options: [
      'Charge and current',
      'Work and voltage',
      'Kinetic energy and heat',
      'Force and momentum',
    ],
    answer: 'Kinetic energy and heat',
    explanation:
      'Charge is measured in coulomb while current is ampere, so they do not have the same units. Work is measured in joule while voltage is volt. Force is measured in newton while momentum is newton second. Both kinetic energy and heat are forms of energy, so both are measured in joule.',
    difficulty: 1,
    points: 10,
    hints: [
      'Both kinetic energy and heat are energies',
      'Energy is measured in joule',
      'Compare each pair by units, not by topic',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-058',
    type: 'multiple_choice',
    question:
      'It is known that the resistance of a resistor $R$ is about $5 \\mathrm{k}\\Omega$. Which of the following circuits is most suitable for measuring the resistance of $R$ ? The ammeter and voltmeter used are common moving coil meters.',
    options: [
      '/physics/exercises/electric-circuits/ec-058-option-a.png',
      '/physics/exercises/electric-circuits/ec-058-option-b.png',
      '/physics/exercises/electric-circuits/ec-058-option-c.png',
      '/physics/exercises/electric-circuits/ec-058-option-d.png',
    ],
    answer: '/physics/exercises/electric-circuits/ec-058-option-a.png',
    explanation:
      'Since $R$ is about 5 kohm, it is a relatively large resistance. For measuring a large resistance using practical meters, the best arrangement is the one where the ammeter measures the current through $R$ and the voltmeter measures a voltage very close to the p.d. across $R$. Circuit A provides the most suitable arrangement for that purpose.',
    difficulty: 3,
    points: 20,
    hints: [
      'Think about the effect of meter internal resistances',
      'For a large resistance, voltmeter current should be minimized in the current reading',
      'Choose the standard ammeter-series, voltmeter-across arrangement best suited for large R',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-059',
    type: 'multiple_choice',
    question:
      'Which of the following expressions does not represent energy ?',
    options: [
      'Force x displacement',
      '1/2 x mass x (speed)^2',
      '(Current)^2 x resistance',
      'Current x voltage x time',
    ],
    answer: '(Current)^2 x resistance',
    explanation:
      'Force x displacement is work, so it is energy. One-half times mass times speed squared is kinetic energy. Current x voltage x time is power x time, which is energy. But $(\\text{current})^2 x \\text{resistance}$ is power, not energy. Therefore option C does not represent energy.',
    difficulty: 2,
    points: 15,
    hints: [
      'I^2R is power',
      'Energy equals power x time',
      'Check the dimensions of each expression',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-060',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the reading of ammeter $A_2$ is 0.3 A. Find the reading of ammeter $A_1$.',
    options: ['0.75 A', '0.6 A', '0.5 A', '0.45 A'],
    answer: '0.75 A',
    explanation:
      'The lower 6-ohm resistor carries 0.3 A, so the p.d. across that branch is $V = IR = (0.3)(6) = 1.8$ V. The 4-ohm resistor has the same p.d., so its current is $I = 1.8/4 = 0.45$ A. Ammeter $A_1$ measures the total current in the two branches, so $A_1 = 0.3 + 0.45 = 0.75$ A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Parallel branches have the same p.d.',
      'Use V = IR on the 6-ohm branch first',
      'Add the branch currents for A1',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-061',
    type: 'multiple_choice',
    question:
      'In Figure (a), the ammeter reading and the total power dissipated in the two identical resistors are $I$ and $P$ respectively. The resistors are rearranged as shown in Figure (b). Find the ammeter reading and the total power dissipated in the two resistors.',
    options: [
      '$2I$ and $2P$',
      '$2I$ and $4P$',
      '$4I$ and $2P$',
      '$4I$ and $4P$',
    ],
    answer: '$4I$ and $4P$',
    explanation:
      'In figure (a), the two identical resistors are in series, so the equivalent resistance is $2R$. In figure (b), they are in parallel, so the equivalent resistance is $R/2$. With the same supply voltage, current is inversely proportional to total resistance, so the new current is $(2R)/(R/2) = 4$ times the old current. Total power is $P = V^2/R_{eq}$, so when the equivalent resistance becomes four times smaller, the total power becomes four times larger.',
    difficulty: 3,
    points: 20,
    hints: [
      'Compare equivalent resistance in series and in parallel',
      'For fixed V, I is inversely proportional to R',
      'For fixed V, total power is V^2 / Req',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-062',
    type: 'multiple_choice',
    question:
      'Which of the following expressions represents a physical quantity which is different from the others?',
    options: [
      'Work / Time',
      '(Voltage)^2 / Resistance',
      'Force x Velocity',
      'Mass x Specific latent heat of fusion',
    ],
    answer: 'Mass x Specific latent heat of fusion',
    explanation:
      'Work divided by time is power. $(\\text{voltage})^2/\\text{resistance}$ is also power. Force times velocity is power. But mass times specific latent heat of fusion gives energy. Therefore the first three represent power, while option D represents energy, so it is the different one.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert each expression into a named physical quantity',
      'Three are power',
      'One is energy',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-063',
    type: 'multiple_choice',
    question:
      'All the resistors in the below networks are identical. Arrange the networks in ascending order of equivalent resistances.',
    options: [
      '(1), (2), (3)',
      '(1), (3), (2)',
      '(2), (1), (3)',
      '(3), (1), (2)',
    ],
    answer: '(1), (2), (3)',
    explanation:
      'Let each resistor be $R$. For network (1), the equivalent resistance is $R/3$. For network (2), it is $2R/3$. For network (3), it is $3R/2$. Therefore the equivalent resistance increases in the order $R/3 < 2R/3 < 3R/2$, which corresponds to (1), then (2), then (3).',
    difficulty: 3,
    points: 20,
    hints: [
      'Assign each resistor a value R',
      'Reduce each network step by step',
      'Compare the three final expressions',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-064',
    type: 'multiple_choice',
    question:
      'In the circuit shown, $X$ and $Y$ are identical heaters. The ammeter has negligible resistance while the voltmeter has very high resistance. When switch $S$ is closed, the ammeter records a reading but the voltmeter reading is zero. Which of the following provides a possible explanation ?',
    options: [
      "The heater $X$ burns out.",
      "The heater $Y$ burns out.",
      'The heater $X$ is short-circuited.',
      'The heater $Y$ is short-circuited.',
    ],
    answer: 'The heater $X$ is short-circuited.',
    explanation:
      'A zero voltmeter reading means there is no p.d. across the part being measured. If heater $X$ is short-circuited, current bypasses $X$ through the short path, so the p.d. across $X$ becomes zero. The circuit still remains complete through heater $Y$, so the ammeter can still record a current. That matches option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Zero voltmeter reading means zero p.d. across the measured component',
      'The ammeter still reading means the circuit is not open',
      'A short circuit bypasses the component',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-065',
    type: 'multiple_choice',
    question:
      'In the above circuit, the reading of the ammeter is 0.4 A. Find the resistance of the resistor $R$.',
    options: ['$3 \\Omega$', '$5 \\Omega$', '$6 \\Omega$', '$9 \\Omega$'],
    answer: '$6 \\Omega$',
    explanation:
      'The 6-ohm resistor carries 0.4 A, so the p.d. across it is $V = IR = (0.4)(6) = 2.4$ V. The 12-ohm resistor in parallel with it therefore carries $2.4/12 = 0.2$ A. The current through resistor $R$ is the total current into that parallel combination, so it is $0.4 + 0.2 = 0.6$ A. The supply is 6 V, so the p.d. across $R$ is $6 - 2.4 = 3.6$ V. Hence $R = V/I = 3.6/0.6 = 6 \\Omega$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the ammeter reading to find the p.d. across the 6-ohm resistor',
      'Parallel branches have the same p.d.',
      'Use total current through R and then R = V / I',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-066',
    type: 'multiple_choice',
    question:
      'A student uses the above circuit to find the resistance of a resistor $R$ (i.e. resistance = voltmeter reading / ammeter reading). Which of the following statements is/are correct ?',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'The voltmeter is connected in parallel with $R$, so it measures the actual p.d. across $R$. However, the ammeter is placed before the branch, so it measures the total current through both the resistor and the voltmeter, not just the current through $R$. Using $R = V/I$ with a larger current in the denominator gives a resistance value smaller than the true resistance of $R$. Therefore statements (2) and (3) are correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Check whether the ammeter measures only the resistor current or branch current',
      'The voltmeter is directly across R',
      'If I is overestimated, calculated R becomes too small',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-067',
    type: 'multiple_choice',
    question:
      'In the above circuit, the current delivered by the cell is $I$. What is the current passing through the $30 \\Omega$ resistor ?',
    options: ['$\\frac{1}{2} I$', '$\\frac{1}{3} I$', '$\\frac{1}{4} I$', '$\\frac{1}{5} I$'],
    answer: '$\\frac{1}{2} I$',
    explanation:
      'The two 60-ohm resistors in parallel have an equivalent resistance of 30 ohm. That branch therefore has the same resistance as the separate 30-ohm branch. Since the two parallel branches have equal resistance, the total current splits equally between them. So the current through the 30-ohm resistor is one-half of the total current delivered by the cell.',
    difficulty: 2,
    points: 15,
    hints: [
      'First combine the two 60-ohm resistors in parallel',
      'Then compare the two parallel branches',
      'Equal branch resistances share current equally',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-068',
    type: 'multiple_choice',
    question:
      'Three resistors are connected to a battery as shown above. Which of the following statements is/are correct ?',
    options: [
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(2) and (3) only',
    explanation:
      'Resistors $R_1$ and $R_2$ are in parallel, so they have the same p.d. across them. Their currents are not equal because for the same voltage, current is inversely proportional to resistance. Also, the equivalent resistance between $P$ and $Q$ is $(6 x 12)/(6 + 12) = 4$ ohm, the same as the separate 4-ohm resistor, so the p.d. across $PQ$ is the same as the p.d. across the 4-ohm resistor. Since energy transferred per coulomb equals voltage, statement (3) is also correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Parallel components have the same voltage',
      'Use Req = R1R2 / (R1 + R2) for the 6-ohm and 12-ohm pair',
      'Energy per coulomb is voltage',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-069',
    type: 'multiple_choice',
    question:
      'If switch $S$ in the above circuit is closed, which of the following statements is/are correct ?',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) only',
    explanation:
      'Closing the switch lowers the equivalent resistance of the circuit, so the total current from the battery increases. That makes the readings of ammeters $A_1$ and $A_2$ increase. The ratio of their readings does not change because the branch resistance ratio is unchanged. The branch containing $A_3$ is short-circuited when $S$ is closed, so its reading becomes zero, not unchanged. Therefore only statement (1) is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Closing S changes the equivalent resistance',
      'Short-circuited branches carry no current through the original component',
      'Check each statement separately',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-070',
    type: 'multiple_choice',
    question:
      'A resistor and a bulb are connected in parallel to a 9 V battery as shown above. The reading of the ammeter is 5 A. If the power dissipated by the resistor is 18 W, find the power dissipated by the bulb.',
    options: ['9 W', '18 W', '22.5 W', '27 W'],
    answer: '27 W',
    explanation:
      'The total power supplied by the battery is $P = VI = (9)(5) = 45$ W. This total power is shared by the resistor and the bulb. Since the resistor dissipates 18 W, the bulb must dissipate the remaining $45 - 18 = 27$ W.',
    difficulty: 2,
    points: 15,
    hints: [
      'First find total power from the battery',
      'Total power equals sum of branch powers',
      'Subtract the resistor power from the total',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-071',
    type: 'multiple_choice',
    question:
      'The above figure shows an experimental set-up for measuring the resistance of a bulb. To which of the terminals $P, Q$ and $R$ of the ammeter and voltmeter should each of the wires be connected ?',
    options: [
      'Wire (1) to P, Wire (2) to Q, Wire (3) to R',
      'Wire (1) to P, Wire (2) to R, Wire (3) to Q',
      'Wire (1) to Q, Wire (2) to P, Wire (3) to R',
      'Wire (1) to R, Wire (2) to P, Wire (3) to Q',
    ],
    answer: 'Wire (1) to P, Wire (2) to Q, Wire (3) to R',
    explanation:
      'The ammeter must be connected in series with the bulb and rheostat, so wire (1) should go to the ammeter terminal P. The voltmeter must be connected in parallel across the bulb, so wires (2) and (3) go to the voltmeter terminals Q and R. The positive side should enter the positive terminal of the voltmeter, so the correct arrangement is P, Q, R.',
    difficulty: 2,
    points: 15,
    hints: [
      'Ammeter goes in series',
      'Voltmeter goes in parallel across the bulb',
      'Observe meter polarity',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-072',
    type: 'multiple_choice',
    question:
      'Which of the following relations is incorrect ?',
    options: [
      '1 ohm $(\\Omega)$ = 1 volt per ampere $(VA^{-1})$',
      '1 watt $(W)$ = 1 joule per second $(Js^{-1})$',
      '1 coulomb $(C)$ = 1 ampere per second $(As^{-1})$',
      '1 volt $(V)$ = 1 joule per coulomb $(JC^{-1})$',
    ],
    answer: '1 coulomb $(C)$ = 1 ampere per second $(As^{-1})$',
    explanation:
      'Resistance equals voltage divided by current, so $\\Omega = VA^{-1}$. Power equals energy divided by time, so $W = Js^{-1}$. Voltage equals energy per charge, so $V = JC^{-1}$. But charge equals current multiplied by time, so the correct unit relation is $C = As$, not $As^{-1}$. Therefore option C is the incorrect relation.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use the definition of each quantity',
      'Charge is current x time',
      'Look carefully at the power of s in option C',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-073',
    type: 'multiple_choice',
    question:
      'In the above circuit, the two resistors are identical. If switch $S$ is closed, which of the following predictions is incorrect?',
    options: [
      'The reading of the ammeter $A_1$ increases.',
      'The reading of the ammeter $A_2$ remains unchanged.',
      'The voltage between points $X$ and $Y$ increases.',
      'The power delivered by the battery increases.',
    ],
    answer: 'The voltage between points $X$ and $Y$ increases.',
    explanation:
      'Closing the switch reduces the equivalent resistance of the circuit, so the total current from the battery increases. That makes the reading of $A_1$ increase and the power delivered by the battery increase. The branch measured by $A_2$ still has the same p.d., so its current remains unchanged. The voltage between $X$ and $Y$ is just the battery p.d., which does not change. Therefore the incorrect prediction is option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Closing S changes the equivalent resistance',
      'The battery voltage is fixed',
      'Check which statement conflicts with a fixed supply voltage',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-074',
    type: 'multiple_choice',
    question:
      'If the ammeter in the circuit reads 3 A, find the voltage of the battery.',
    options: ['11 V', '12 V', '13.5 V', '15 V'],
    answer: '11 V',
    explanation:
      'The 2-ohm and 1-ohm resistors are in parallel, so their equivalent resistance is $(2 x 1)/(2 + 1) = 2/3$ ohm. This is in series with a 3-ohm resistor, giving a total resistance of $3 + 2/3 = 3.67$ ohm approximately. With current 3 A, the battery voltage is $V = IR = (3)(3.67) = 11$ V approximately.',
    difficulty: 3,
    points: 20,
    hints: [
      'First combine the parallel part',
      'Then add the series resistance',
      'Use V = IR for the whole circuit',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-075',
    type: 'multiple_choice',
    question:
      'The figure above shows the voltage-current ($V-I$) graphs of two resistors $X$ and $Y$. Which of the following deductions is/are correct?',
    options: [
      '(2) only',
      '(3) only',
      '(1) and (2) only',
      '(1) and (3) only',
    ],
    answer: '(3) only',
    explanation:
      'For a resistor, the slope of the $V-I$ graph equals resistance. Since $Y$ has the greater slope, $Y$ has greater resistance than $X$, so statement (1) is false. When resistors are connected in series, the equivalent resistance becomes larger than either one alone, so the combined line would have an even greater slope and would not lie in the stated region. When connected in parallel, the equivalent resistance becomes smaller than either one, so the combined graph has a smaller slope and lies in the lower-slope region. Therefore only statement (3) is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Slope of V-I graph is resistance',
      'Series increases equivalent resistance',
      'Parallel decreases equivalent resistance',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-076',
    type: 'multiple_choice',
    question:
      'In the circuit shown, both ammeters $A_1$ and $A_2$ read 1 A when the switch $S$ is open. Find the readings of the two ammeters when $S$ is closed.',
    options: [
      '0.5 A and 1.5 A',
      '0.67 A and 1 A',
      '1 A and 1.5 A',
      '1 A and 3 A',
    ],
    answer: '1 A and 1.5 A',
    explanation:
      'When the switch is open, the 3-ohm branch carries 1 A, so the battery p.d. is $V = IR = (1)(3) = 3$ V. After the switch is closed, that 3-ohm branch still has the same battery voltage across it, so $A_1$ remains 1 A. The 6-ohm branch also has 3 V across it, so its current is $3/6 = 0.5$ A. Ammeter $A_2$ reads the total current, so it becomes $1 + 0.5 = 1.5$ A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the open-switch condition to find the battery voltage',
      'The 3-ohm branch still sees the same battery p.d.',
      'Add branch currents for A2',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-077',
    type: 'multiple_choice',
    question:
      'Figure (a) shows a circuit used to investigate how the voltage $V$ across a resistance wire varies with the current $I$ through the wire. The result is shown in Figure (b). If the experiment is repeated using a thinner wire of the same material and of equal length, which of the following graphs (denoted by the dashed line) represents the expected result ?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'D',
    explanation:
      'For the same material and length, a thinner wire has a smaller cross-sectional area and therefore a larger resistance. On a $V-I$ graph, the slope equals the resistance. So using a thinner wire gives a steeper straight line through the origin. That corresponds to option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'For an ohmic resistor, slope of V-I graph equals resistance',
      'Thinner wire means larger resistance',
      'Look for the steeper straight line',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-078',
    type: 'multiple_choice',
    question:
      'A square loop $PQRS$ is made of uniform resistance wire. Let $X$, $Y$ and $Z$ be the equivalent resistance of the loop when connected as shown below. Which of the following relations is correct ?',
    options: ['$X=Y=Z$', '$X=Z>Y$', '$X=Z<Y$', '$X<Y<Z$'],
    answer: '$X=Z<Y$',
    explanation:
      'Take each side of the square to have resistance 1 ohm. Then for connection $X$, the two paths between the terminals are 1 ohm and 3 ohm in parallel, so $X = (1 x 3)/(1 + 3) = 0.75$ ohm. For connection $Y$, the two paths are 2 ohm and 2 ohm in parallel, so $Y = (2 x 2)/(2 + 2) = 1.0$ ohm. For connection $Z$, the geometry is the same as $X$, so $Z = 0.75$ ohm. Hence $X = Z < Y$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Assign 1 ohm to each side of the square',
      'Treat each connection as two paths in parallel',
      'Compare the three resulting values',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-079',
    type: 'multiple_choice',
    question:
      'An ammeter and a rheostat of range $0-40 \\Omega$ are connected to a 6 V battery. The sliding contact is located at a position $X$ where $AX=\\frac{1}{4}AB$ as shown above. Find the ammeter reading.',
    options: ['0.15 A', '0.2 A', '0.45 A', '0.6 A'],
    answer: '0.2 A',
    explanation:
      'Current flows through the resistance wire between $X$ and $B$. Since $AX = \\frac{1}{4}AB$, the length $XB$ is $\\frac{3}{4}$ of the full rheostat. Therefore the resistance used is $40 x \\frac{3}{4} = 30 \\Omega$. The current is then $I = V/R = 6/30 = 0.2$ A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Only the section between the slider and one end is in the circuit',
      'Use the fraction of the total length to get the resistance',
      'Then apply I = V / R',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-080',
    type: 'multiple_choice',
    question:
      'The photograph shows a rechargeable cell. If the cell is charged for 16 hours using the standard charge mode, estimate the total amount of charge flowed through the charging circuit.',
    options: ['182.4 C', '3040 C', '10944 C', '27360 C'],
    answer: '10944 C',
    explanation:
      'Use $Q = It$. Taking the standard charging current as $190 \\times 10^{-3}$ A and time as $16 \\times 60 \\times 60$ s, the total charge is $(190 \\times 10^{-3})(16 \\times 60 \\times 60) = 10944$ C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use Q = It',
      'Convert 16 hours into seconds',
      'Substitute the standard charging current',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-081',
    type: 'multiple_choice',
    question:
      'An ammeter with negligible resistance and a high-resistance voltmeter are connected into a circuit as shown. Find the ammeter and voltmeter readings.',
    options: [
      'Ammeter 3 A, Voltmeter 2 V',
      'Ammeter 2 A, Voltmeter 2 V',
      'Ammeter 1 A, Voltmeter 2 V',
      'Ammeter 3 A, Voltmeter 6 V',
    ],
    answer: 'Ammeter 3 A, Voltmeter 6 V',
    explanation:
      'Because the ammeter has negligible resistance, it effectively shorts the two right-hand resistors, so no current flows through them. Current therefore flows only through the left-hand 2-ohm resistor and the ammeter. The ammeter reading is $I = 6/2 = 3$ A. The voltmeter measures the full p.d. of the battery, so it reads 6 V.',
    difficulty: 3,
    points: 20,
    hints: [
      'Ammeter acts almost like a wire',
      'Shorted branches carry no current through the original resistors',
      'The voltmeter measures the battery p.d. in this arrangement',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-082',
    type: 'multiple_choice',
    question:
      'In the above circuits, $X$, $Y$ and $Z$ are identical resistors. The power dissipated in $X$ is 20 W. Find the total power dissipated in $Y$ and $Z$.',
    options: ['10 W', '20 W', '80 W', '160 W'],
    answer: '160 W',
    explanation:
      'Let each resistor have resistance $R$. From $P = V^2/R$, the statement that resistor $X$ dissipates 20 W under 6 V gives $20 = 6^2/R$, so $R = 1.8 \\Omega$. Resistors $Y$ and $Z$ are identical and connected in parallel, so their equivalent resistance is $R/2 = 0.9 \\Omega$. Under 12 V, the total power in $Y$ and $Z$ is $P = V^2/R_{eq} = 12^2/0.9 = 160$ W.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use resistor X to determine the resistance value',
      'Combine Y and Z in parallel',
      'Use P = V^2 / R for the combined branch',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-083',
    type: 'multiple_choice',
    question:
      'In the above circuit, what is the reading of the voltmeter when switch $S$ is closed ?',
    options: ['zero', '6 V', '12 V', 'It cannot be determined since insufficient information is given.'],
    answer: 'It cannot be determined since insufficient information is given.',
    explanation:
      'When the switch is closed, the battery voltage of 12 V is shared between $R_1$ and $R_2$. To determine the voltmeter reading, the ratio of the resistances of $R_1$ and $R_2$ must be known. Since that information is not given, the voltmeter reading cannot be uniquely determined.',
    difficulty: 2,
    points: 15,
    hints: [
      'The 12 V is divided between two resistors',
      'Voltage division depends on resistance values',
      'Missing resistor values means the answer cannot be fixed',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-084',
    type: 'multiple_choice',
    question:
      'A teacher sets up the circuit as shown in the above figure and provides the following information to her students. Which of the following shows the variation of the ammeter reading $I$ with the temperature of the thermistor $\\theta$ ?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'B',
    explanation:
      'For the thermistor in this circuit, increasing temperature reduces its resistance. With a fixed supply voltage, a smaller resistance gives a larger current. So the ammeter reading increases as temperature increases. That corresponds to graph B.',
    difficulty: 2,
    points: 15,
    hints: [
      'A thermistor here is assumed to have resistance decreasing with temperature',
      'For fixed V, smaller R means larger I',
      'Choose the graph where current rises with temperature',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-085',
    type: 'multiple_choice',
    question:
      'A teacher sets up the circuit as shown in the above figure and provides the following information to her students. Which of the following shows the variation of the voltmeter reading $V$ with the temperature of the thermistor $\\theta$ ?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'A',
    explanation:
      'The voltmeter measures the p.d. across the battery in this arrangement. Since the battery voltage is taken as constant, the voltmeter reading stays constant even when the thermistor resistance changes with temperature. Therefore the correct graph is the constant graph, option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Check what the voltmeter is connected across',
      'The battery voltage is constant',
      'So the reading does not change with temperature',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-086',
    type: 'multiple_choice',
    question:
      'In the above circuit, the bulbs are identical. If the reading of ammeter $A_1$ is 1 A, find the readings of ammeters $A_2$ and $A_3$.',
    options: [
      '0.5 A and 1 A',
      '0.5 A and 1.5 A',
      '2 A and 2 A',
      '2 A and 3 A',
    ],
    answer: '2 A and 3 A',
    explanation:
      'The branch measured by $A_2$ has half the resistance of the branch measured by $A_1$, so with the same p.d. across the branches, its current is twice as large. Therefore $A_2 = 2$ A. Ammeter $A_3$ measures the total current, so $A_3 = A_1 + A_2 = 1 + 2 = 3$ A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Compare the branch resistances',
      'Same p.d. across parallel branches',
      'Total current is the sum of branch currents',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-087',
    type: 'multiple_choice',
    question:
      'A student wants to measure the resistance of a resistor $R$ and sets up a circuit as shown above. Which of the following describe(s) the mistake(s) made by the student in setting up the circuit ?',
    options: [
      '(1) only',
      '(2) only',
      '(1) and (3) only',
      '(2) and (3) only',
    ],
    answer: '(1) and (3) only',
    explanation:
      'The ammeter polarity is reversed because current should enter the positive terminal and leave the negative terminal. The voltmeter polarity is correct. However, the voltmeter is connected across both the resistor $R$ and the rheostat, whereas it should be connected across $R$ only if the aim is to measure the resistance of $R$. Therefore the mistakes are (1) and (3).',
    difficulty: 2,
    points: 15,
    hints: [
      'Check meter polarity first',
      'The voltmeter should measure only the component of interest',
      'An ammeter must have current entering its positive terminal',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-088',
    type: 'multiple_choice',
    question:
      'The figure shows a label on a lithium cell of a mobile phone. The capacity 800 mAh indicates the quantity of electric charges that the cell will discharge in 3 days when the mobile phone is in stand-by mode. Estimate the average power of the cell assuming the voltage remains constant during the discharge.',
    options: ['16 mW', '40 mW', '120 mW', '960 mW'],
    answer: '40 mW',
    explanation:
      'First convert the capacity into charge: $Q = 800\\text{ mAh} = (800 \\times 10^{-3}\\text{ A})(3600\\text{ s}) = 2880$ C. The energy delivered is $E = QV = (2880)(3.6) = 10368$ J. Over 3 days, the time is $3 \\times 24 \\times 3600$ s. So the average power is $P = E/t = 10368/(3 \\times 24 \\times 3600) = 0.04$ W = 40 mW.',
    difficulty: 3,
    points: 20,
    hints: [
      'Convert mAh into coulomb first',
      'Use E = QV',
      'Average power is total energy divided by total time',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-089',
    type: 'multiple_choice',
    question:
      'If the current in the circuit shown is 0.8 A, what is the number of electrons passing through the point $X$ in 1 minute ?',
    options: [
      '$8.3 \\times 10^{16}$',
      '$1.6 \\times 10^{17}$',
      '$5.0 \\times 10^{18}$',
      '$3.0 \\times 10^{20}$',
    ],
    answer: '$3.0 \\times 10^{20}$',
    explanation:
      'The total charge passing point $X$ in 1 minute is $Q = It = (0.8)(60) = 48$ C. Since each electron carries charge $1.6 \\times 10^{-19}$ C, the number of electrons is $48/(1.6 \\times 10^{-19}) = 3.0 \\times 10^{20}$.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use Q = It',
      'Convert 1 minute into 60 seconds',
      'Divide total charge by charge per electron',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-090',
    type: 'multiple_choice',
    question:
      'The diagram shows the circuit of a camping light which uses four 1.5 V cells and four identical light bulbs. The current passing through each light bulb is 1 A. What is the current passing through the point $P$ and what is the power of each light bulb ?',
    options: [
      '4 A and 6 W',
      '4 A and 1.5 W',
      '1 A and 6 W',
      '1 A and 1.5 W',
    ],
    answer: '4 A and 6 W',
    explanation:
      'Point $P$ carries the total current for four identical lamp branches, so the current there is $4 \\times 1 = 4$ A. The four 1.5 V cells provide a total of 6 V. Each bulb therefore has 6 V across it and carries 1 A, so the power of each bulb is $P = VI = (6)(1) = 6$ W.',
    difficulty: 2,
    points: 15,
    hints: [
      'Add the branch currents at point P',
      'Four 1.5 V cells give 6 V in total',
      'Use P = VI for each bulb',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-091',
    type: 'multiple_choice',
    question:
      'Three identical light bulbs are connected to a cell as shown in the diagram. After some time, the filament of bulb $Z$ breaks. What will happen to the brightness of the remaining light bulbs ?',
    options: [
      'Brightness of $X$ increases, brightness of $Y$ increases',
      'Brightness of $X$ increases, brightness of $Y$ decreases',
      'Brightness of $X$ decreases, brightness of $Y$ increases',
      'Brightness of $X$ decreases, brightness of $Y$ decreases',
    ],
    answer: 'Brightness of $X$ decreases, brightness of $Y$ increases',
    explanation:
      'When bulb $Z$ breaks, the equivalent resistance of the whole circuit increases, so the total current from the cell decreases. That reduces the p.d. across bulb $X$, so $X$ becomes dimmer. At the same time, the p.d. across bulb $Y$ increases, so bulb $Y$ becomes brighter.',
    difficulty: 3,
    points: 20,
    hints: [
      'Breaking one bulb changes the equivalent resistance of the network',
      'The total current from the cell changes',
      'Track how the branch voltages change for X and Y',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-092',
    type: 'multiple_choice',
    question:
      'In the circuit shown, a voltage of 10 V is applied across $XY$. What is the current passing through the $8 \\Omega$ resistor ?',
    options: ['0.5 A', '0.8 A', '1 A', '2 A'],
    answer: '1 A',
    explanation:
      'The 8-ohm resistor and the 2-ohm resistor are in series across the 10 V supply, so their equivalent resistance is $8 + 2 = 10 \\Omega$. The same current flows through both series resistors. Therefore the current is $I = V/R = 10/10 = 1$ A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Series resistances add directly',
      'Same current flows through series components',
      'Use I = V / R',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-093',
    type: 'multiple_choice',
    question:
      'If the ammeter in the above circuit reads 3 A, what is the voltage of the battery ?',
    options: ['8.5 V', '9.6 V', '21 V', '24 V'],
    answer: '8.5 V',
    explanation:
      'The 1-ohm and 5-ohm resistors are in parallel, so their equivalent resistance is $(1 x 5)/(1 + 5) = 5/6 \\Omega$. This is in series with a 2-ohm resistor, giving a total resistance of $2 + 5/6 = 2.833 \\Omega$. With ammeter reading 3 A, the battery voltage is $V = IR = (3)(2.833) = 8.5$ V approximately.',
    difficulty: 3,
    points: 20,
    hints: [
      'Combine the parallel pair first',
      'Then add the series resistor',
      'Use V = IR for the whole circuit',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-094',
    type: 'multiple_choice',
    question:
      'The voltage and the capacity of the cell of a portable music player are 3.6 V and 700 mA h respectively. The continuous playing time of the player is 15 hours. Assume that the voltage remains constant during discharge, what is the estimated power of the player when it is playing ?',
    options: ['0.047 W', '0.168 W', '0.194 W', '0.252 W'],
    answer: '0.168 W',
    explanation:
      'From $Q = It$, a capacity of 700 mAh over 15 h gives an average current of $I = 700/15$ mA = 46.67 mA = 0.04667 A. The power is then $P = VI = (3.6)(0.04667) = 0.168$ W.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert 700 mAh into an average current over 15 h',
      'Use I = Q / t in the mAh sense',
      'Then use P = VI',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-095',
    type: 'multiple_choice',
    question:
      'In the following circuit, three identical light bulbs are connected to a cell. Under what conditions will light bulb $P$ have the maximum brightness?',
    options: [
      'Switch X open, Switch Y closed',
      'Switch X open, Switch Y open',
      'Switch X closed, Switch Y closed',
      'Switch X closed, Switch Y open',
    ],
    answer: 'Switch X closed, Switch Y open',
    explanation:
      'Closing switch $X$ shorts the left light bulb, which lowers the equivalent resistance of the circuit and increases the total current from the cell. Closing switch $Y$ would short bulb $P$ itself, so $P$ would go out. Therefore to make bulb $P$ brightest, $X$ should be closed and $Y$ should be open.',
    difficulty: 2,
    points: 15,
    hints: [
      'Avoid short-circuiting bulb P',
      'Closing X reduces total circuit resistance',
      'Lower total resistance increases total current',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-096',
    type: 'multiple_choice',
    question:
      'A student sets up the above circuit to study the effect of the length of a resistance wire on its resistance. As the crocodile clip is moved from $A$ to $B$ along the resistance wire, which of the following statements is/are correct ?',
    options: [
      '(1) only',
      '(2) only',
      '(1) and (3) only',
      '(2) and (3) only',
    ],
    answer: '(1) only',
    explanation:
      'As the clip moves from $A$ to $B$, the effective length of the resistance wire in the circuit decreases, so its resistance decreases. That makes the total current increase, so the ammeter reading increases. As the current increases, a larger p.d. is dropped across the rheostat, so the p.d. across the resistance wire decreases. Also, the wire resistance is changing, so the voltmeter reading is not directly proportional to the ammeter reading. Therefore only statement (1) is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Shorter wire means lower resistance',
      'Lower resistance gives larger current',
      'The p.d. across the test wire does not stay proportional because its resistance changes',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-097',
    type: 'multiple_choice',
    question:
      'The figure shows two light bulbs $A$ and $B$, which are connected in series. The voltages across $A$ and $B$ are 3 V and 1 V respectively. Which of the following statements is/are correct ?',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) only',
    explanation:
      'In a series circuit, the same current flows through both bulbs. Since voltage is proportional to resistance for the same current, the bulb with the larger voltage has the larger resistance. Therefore bulb $A$ has greater resistance than bulb $B$. Statement (2) is false because series current is the same. Statement (3) is false because with the same current, the bulb with larger voltage has greater power and is brighter, so $A$ is brighter, not dimmer.',
    difficulty: 2,
    points: 15,
    hints: [
      'Series components carry the same current',
      'For same current, larger V means larger R',
      'Brightness depends on power',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-098',
    type: 'multiple_choice',
    question:
      'A cell fully discharges at a constant current 225 mA in 10 hours. If its average voltage is 1.2 V, what is the estimated total energy stored in the cell ?',
    options: ['2.7 J', '6750 J', '8100 J', '9720 J'],
    answer: '9720 J',
    explanation:
      'The total charge delivered is $Q = It = (0.225)(10 x 3600) = 8100$ C. The total energy stored is $E = QV = (8100)(1.2) = 9720$ J.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert 10 hours into seconds',
      'Use Q = It',
      'Then use E = QV',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-099',
    type: 'multiple_choice',
    question:
      'In the above circuit, the reading of the ammeter is 0.3 A. What is the voltage $V$ of the battery ?',
    options: ['4.8 V', '5.4 V', '9.0 V', '14.4 V'],
    answer: '9.0 V',
    explanation:
      'Each upper and lower 6-ohm resistor carries 0.3 A, so the current through the 12-ohm resistor is $0.3 + 0.3 = 0.6$ A. The equivalent resistance of the parallel pair of 6-ohm resistors is 3 ohm, so the total circuit resistance is $12 + 3 = 15 \\Omega$. The battery voltage is therefore $V = IR = (0.6)(15) = 9.0$ V.',
    difficulty: 3,
    points: 20,
    hints: [
      'Combine the two 6-ohm resistors in parallel',
      'The 12-ohm resistor carries the total current',
      'Use V = IR for the whole circuit',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-100',
    type: 'multiple_choice',
    question:
      'A circular loop is made of uniform resistance wire. Let $X$, $Y$ and $Z$ be the equivalent resistance of the loop when connected as shown. Which of the following is correct?',
    options: ['X = Y = Z', 'X > Y = Z', 'X < Y = Z', 'X < Y < Z'],
    answer: 'X > Y = Z',
    explanation:
      'Treat the circular loop as four equal arcs, each with resistance $R$. For $X$, the two paths are each $2R$, so the equivalent resistance is $(2R // 2R) = R$. For both $Y$ and $Z$, the two paths are $R$ and $3R$, so the equivalent resistance is $(R // 3R) = 3R/4$. Hence $X > Y = Z$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Split the circular loop into equal arc resistors',
      'Find the two alternative paths between the connection points',
      'Use parallel combination for the two paths',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-100-question.png'],
  },
  {
    id: 'ec-101',
    type: 'multiple_choice',
    question:
      'Two identical resistors are connected in series in the circuit shown. What are the readings of the voltmeter when $S$ is open and when $S$ is closed respectively ?',
    options: [
      'S open: 0 V, S closed: 6 V',
      'S open: 0 V, S closed: 12 V',
      'S open: 12 V, S closed: 6 V',
      'S open: 12 V, S closed: 12 V',
    ],
    answer: 'S open: 12 V, S closed: 6 V',
    explanation:
      'When $S$ is open, the voltmeter is effectively in series and has very high resistance, so almost the whole battery voltage appears across it, giving 12 V. When $S$ is closed, the two identical resistors are in series and share the 12 V equally, so the voltmeter across one resistor reads 6 V.',
    difficulty: 2,
    points: 15,
    hints: [
      'An ideal voltmeter has very large resistance',
      'When the switch closes, the two identical resistors share the battery voltage equally',
      'Half of 12 V is 6 V',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-101-question.png'],
  },
  {
    id: 'ec-102',
    type: 'multiple_choice',
    question:
      'A car has two doors and an indicator lamp is installed to act as a car door warning signal. When either or both doors are open, the lamp lights up. A switch is installed in each door. The switch is open when the car door opens. Which of the following circuits is correct ?',
    options: [
      '/physics/exercises/electric-circuits/ec-102-option-a.png',
      '/physics/exercises/electric-circuits/ec-102-option-b.png',
      '/physics/exercises/electric-circuits/ec-102-option-c.png',
      '/physics/exercises/electric-circuits/ec-102-option-d.png',
    ],
    answer: '/physics/exercises/electric-circuits/ec-102-option-d.png',
    explanation:
      'The correct circuit must make the lamp light if either switch opens and also if both switches open. Options A, B and C each fail in at least one of those cases. Only option D keeps a complete path through the lamp whenever one or both door switches are open.',
    difficulty: 3,
    points: 20,
    hints: [
      'Test the circuit with one door open',
      'Then test with both doors open',
      'The lamp must still have a complete current path',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-103',
    type: 'multiple_choice',
    question:
      'In the circuit above, voltmeters $P$ and $Q$ of very high resistance are connected across the switch and the light bulb respectively. What are the voltmeter readings when the switch is open ?',
    options: [
      'P: 0 V, Q: 0 V',
      'P: 0 V, Q: 1.5 V',
      'P: 1.5 V, Q: 0 V',
      'P: 1.5 V, Q: 1.5 V',
    ],
    answer: 'P: 1.5 V, Q: 0 V',
    explanation:
      'With the switch open, no current flows in the circuit. Therefore there is no voltage drop across the light bulb, so voltmeter $Q$ reads 0 V. The full cell voltage appears across the open switch, so voltmeter $P$ reads 1.5 V.',
    difficulty: 2,
    points: 15,
    hints: [
      'An open switch stops all current',
      'No current means no p.d. across the bulb',
      'The full cell voltage appears across the break in the circuit',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-103-question.png'],
  },
  {
    id: 'ec-104',
    type: 'multiple_choice',
    question:
      'Three identical bulbs $X$, $Y$ and $Z$ are connected to a 12 V battery in the circuit above. Which of the following statements are correct ?',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(2) and (3) only',
    explanation:
      'Bulbs $Y$ and $Z$ are in parallel, so their equivalent resistance is $R/2$, which is less than the resistance of bulb $X$. In series, the larger resistance gets the larger p.d., so the p.d. across $PQ$ is less than 6 V, making statement (1) false. Points $Q$ and $S$ are directly connected, so the p.d. across $QS$ is zero. If $Y$ burns out, the parallel branch becomes just bulb $Z$, so the p.d. across $Z$ rises to 6 V and $Z$ becomes brighter.',
    difficulty: 3,
    points: 20,
    hints: [
      'Replace Y and Z by their parallel equivalent first',
      'A direct wire means zero p.d. between two points',
      'If one parallel bulb fails, the other gets a larger share of the supply voltage',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-104-question.png'],
  },
  {
    id: 'ec-105',
    type: 'multiple_choice',
    question:
      'In the circuit shown, wires $X$ and $Y$ are to be connected to two points in the resistor network $P Q R S$. Across which two points should $X$ and $Y$ be connected to so that the ammeter reading will be a minimum?',
    options: ['P and Q', 'Q and R', 'R and S', 'S and P'],
    answer: 'S and P',
    explanation:
      'The ammeter reading is smallest when the total circuit resistance is largest. Comparing the equivalent resistances between the listed pairs gives: $PQ = 1.33 \\Omega$, $QR = 0.83 \\Omega$, $RS = 0 \\Omega$, and $SP = 1.5 \\Omega$. The largest is across $S$ and $P$, so that gives the minimum current.',
    difficulty: 3,
    points: 20,
    hints: [
      'Minimum current means maximum equivalent resistance',
      'Compare the equivalent resistance for each possible pair',
      'Choose the largest equivalent resistance',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-105-question.png'],
  },
  {
    id: 'ec-106',
    type: 'multiple_choice',
    question:
      'The figure below shows the current-voltage ($I-V$) graphs of two resistors $P$ and $Q$. Which of the following statements about the two resistors are correct ?',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (3) only',
    explanation:
      'Both graphs are straight lines through the origin, so both resistors obey Ohm\'s law. On an $I-V$ graph, the slope is $I/V = 1/R$, so the steeper graph has the smaller resistance. Since resistor $P$ has the greater slope, its resistance is smaller than that of $Q$. If connected in parallel, both have the same voltage, so the smaller resistance $P$ carries the larger current. Therefore (1) and (3) are correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'A straight line through the origin means I is proportional to V',
      'For an I-V graph, slope equals 1/R',
      'In parallel, the same voltage is applied to both resistors',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-106-question.png'],
  },
  {
    id: 'ec-107',
    type: 'multiple_choice',
    question:
      'Which of the following resistor networks gives the largest equivalent resistance across $P Q$ if all the resistors have the same resistance ?',
    options: [
      '/physics/exercises/electric-circuits/ec-107-option-a.png',
      '/physics/exercises/electric-circuits/ec-107-option-b.png',
      '/physics/exercises/electric-circuits/ec-107-option-c.png',
      '/physics/exercises/electric-circuits/ec-107-option-d.png',
    ],
    answer: '/physics/exercises/electric-circuits/ec-107-option-d.png',
    explanation:
      'Assume each resistor is $2 \\Omega$. Then the equivalent resistances are: A gives $2 \\Omega$, B gives $2.4 \\Omega$, C gives $1.67 \\Omega$, and D gives $3 \\Omega$. Since network D has the largest equivalent resistance, it is the correct choice.',
    difficulty: 3,
    points: 20,
    hints: [
      'Assign the same resistance value to each resistor',
      'Reduce each network to a single equivalent resistance',
      'Choose the largest equivalent value',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-108',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the ammeter reading is 1.0 A when $S$ is open. What is the ammeter reading when $S$ is closed ?',
    options: ['1.5 A', '2.0 A', '2.5 A', '3.0 A'],
    answer: '1.5 A',
    explanation:
      'With $S$ open, the total resistance is $6 + 6 = 12 \\Omega$, so the battery voltage is $V = IR = (1.0)(12) = 12$ V. When $S$ is closed, the circuit becomes $6 \\Omega$ in series with $(6 \\Omega // 3 \\Omega)$. The parallel part is $2 \\Omega$, so the total resistance is $8 \\Omega$. The new current is $I = V/R = 12/8 = 1.5$ A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the open-switch condition to find the battery voltage first',
      'Then recalculate the equivalent resistance when the switch is closed',
      'Use I = V/R',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-108-question.png'],
  },
  {
    id: 'ec-109',
    type: 'multiple_choice',
    question:
      'In the circuit shown, both bulbs $X$ and $Y$ light up normally. Both the ammeter reading and the voltmeter reading are non-zero. Which of the following will cause the ammeter reading to drop to zero while the voltmeter reading is still non-zero? Assume meters are ideal.',
    options: [
      'Bulb X becomes short circuit',
      'Bulb Y becomes short circuit',
      'Bulb X is burnt out and becomes open circuit',
      'Bulb Y is burnt out and becomes open circuit',
    ],
    answer: 'Bulb Y is burnt out and becomes open circuit',
    explanation:
      'If bulb $Y$ becomes open circuit, the ideal voltmeter still has infinite resistance and cannot complete the circuit, so no current flows and the ammeter reads zero. However, the voltmeter is still connected across the cell and so reads a non-zero voltage. The other faults either still allow current to flow somewhere in the circuit or make both readings zero.',
    difficulty: 3,
    points: 20,
    hints: [
      'An ideal voltmeter has infinite resistance',
      'Open-circuiting the correct branch can stop all current',
      'The voltmeter can still measure cell voltage even when no current flows',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-109-question.png'],
  },
  {
    id: 'ec-110',
    type: 'multiple_choice',
    question:
      'The voltmeter reads 3 V in the circuit shown. The e.m.f. of the battery is 15 V. If the internal resistance of the battery is negligible, what is the internal resistance of the voltmeter?',
    options: ['0.75 kOhm', '1.50 kOhm', '3.00 kOhm', '3.75 kOhm'],
    answer: '3.00 kOhm',
    explanation:
      'The 1 kOhm resistor and the voltmeter are in parallel, so each has 3 V across it. The remaining 12 V is across the series resistor. Hence the equivalent resistance of the parallel branch is found from the voltage ratio: $12:3 = 3:0.75$, so the branch has equivalent resistance $0.75$ kOhm. For the parallel combination, $1/0.75 = 1/1 + 1/R_v$, giving $R_v = 3.00$ kOhm.',
    difficulty: 4,
    points: 25,
    hints: [
      'Components in parallel have the same voltage',
      'Use the voltage ratio in series to find the equivalent branch resistance',
      'Then use the parallel-resistance relation',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-110-question.png'],
  },
  {
    id: 'ec-111',
    type: 'multiple_choice',
    question:
      'When the switch $S$ is closed in the circuit shown, only $L_1$ lights up. Which of the following possibilities would account for this ?',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) only',
    explanation:
      'A short circuit across $L_4$ bypasses that branch, so current does not pass through the branch containing $L_2$ and $L_4$, leaving only $L_1$ lit. If only $L_2$ were burnt out, current could still flow through the branch with $L_4$. If both $L_2$ and $L_4$ were burnt out, the circuit path needed for $L_1$ would also be broken. Therefore only statement (1) can explain the observation.',
    difficulty: 3,
    points: 20,
    hints: [
      'A short circuit bypasses a component',
      'An open circuit blocks current completely in that branch',
      'Test each listed fault against the observed result',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-111-question.png'],
  },
  {
    id: 'ec-112',
    type: 'multiple_choice',
    question:
      'In the circuit shown, an electron travelling from $Y$ to $X$ through $R_1$ loses energy $E_1$, and an electron travelling from $Y$ to $X$ through $R_2$ loses energy $E_2$. What is the relation between $E_1$ and $E_2$ ?',
    options: ['4E1 = E2', '3E1 = E2', 'E1 = E2', 'E1 = 3E2'],
    answer: 'E1 = E2',
    explanation:
      'The energy lost by one electron is $E = qV$. Since $R_1$ and $R_2$ are connected across the same two points, the potential difference across each branch is the same. The electron charge is also the same in both cases, so the energy loss through each branch is equal. Therefore $E_1 = E_2$.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use E = qV',
      'Parallel branches have the same p.d. across them',
      'The charge of one electron is fixed',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-112-question.png'],
  },
  {
    id: 'ec-113',
    type: 'multiple_choice',
    question:
      'In the circuit shown, $X$ and $Y$ are two identical cells, of e.m.f. 10 V and internal resistance 4 Ohm. What is the current given out by each cell ?',
    options: ['zero', '0.42 A', '0.50 A', '0.83 A'],
    answer: '0.50 A',
    explanation:
      'The two identical cells are in parallel, so their equivalent e.m.f. remains 10 V while their equivalent internal resistance becomes $4/2 = 2 \\Omega$. With the external 8-ohm resistor, the total resistance is $2 + 8 = 10 \\Omega$, giving a circuit current of $10/10 = 1$ A. Since the cells are identical and in parallel, they share the current equally, so each supplies 0.50 A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Parallel identical cells keep the same e.m.f.',
      'Their internal resistances combine in parallel',
      'Identical parallel sources share current equally',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-113-question.png'],
  },
  {
    id: 'ec-114',
    type: 'multiple_choice',
    question:
      'An ideal voltmeter is connected between points $X$ and $Y$ in the circuit shown. Find the readings of the voltmeter when the switch is open and closed respectively.',
    options: [
      'switch open: 1.5 V, switch closed: 2.5 V',
      'switch open: 2.5 V, switch closed: 8.0 V',
      'switch open: 12 V, switch closed: 4.5 V',
      'switch open: 12 V, switch closed: 7.5 V',
    ],
    answer: 'switch open: 12 V, switch closed: 7.5 V',
    explanation:
      'When the switch is open, the ideal voltmeter has infinite resistance, so no current flows. Therefore there is no voltage drop across the 3-ohm resistor and the full 12 V of the battery appears across the voltmeter. When the switch is closed, the 3-ohm and 5-ohm resistors are in series, so the p.d. across the 5-ohm resistor is $12 x 5/(3+5) = 7.5$ V.',
    difficulty: 3,
    points: 20,
    hints: [
      'An ideal voltmeter draws no current',
      'With the switch open, no current means no drop across the resistor',
      'With the switch closed, use series voltage division',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-114-question.png'],
  },
  {
    id: 'ec-115',
    type: 'multiple_choice',
    question:
      'The e.m.f. of a battery is equal to which of the following?',
    options: [
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1), (2) and (3)',
    explanation:
      'The e.m.f. can be written as $\\varepsilon = P/I$, since power delivered is current times e.m.f. It is also the electrical energy transferred per unit charge, so $\\varepsilon = E/q$. When the battery is on open circuit, no current flows, so there is no voltage drop across internal resistance and the terminal voltage equals the e.m.f. Therefore all three statements are correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Recall the definitions of e.m.f.',
      'Open circuit means zero current',
      'No current means no internal voltage drop',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-116',
    type: 'multiple_choice',
    question:
      'In the circuit shown, if a battery of e.m.f. 20 V with negligible internal resistance is connected across $X Y$, what is the current given out by this battery?',
    options: ['1.0 A', '2.0 A', '2.5 A', '4.0 A'],
    answer: '2.0 A',
    explanation:
      'Redrawing the circuit shows the network has an equivalent resistance of 10 ohm. The battery current is then $I = V/R = 20/10 = 2.0$ A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Simplify the resistor network first',
      'Find the equivalent resistance across X and Y',
      'Use I = V/R',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-116-question.png'],
  },
  {
    id: 'ec-117',
    type: 'multiple_choice',
    question:
      'In the above figure, $A B$ is a resistance wire of uniform cross-section, and $S$ is a sliding contact. The 2 V battery has negligible internal resistance, and the connected voltmeter is ideal. Which of the following graphs shows the correct variation of voltage measured by the voltmeter when the contact $S$ is moved from $A$ to $B$ ?',
    options: [
      '/physics/exercises/electric-circuits/ec-117-option-a.png',
      '/physics/exercises/electric-circuits/ec-117-option-b.png',
      '/physics/exercises/electric-circuits/ec-117-option-c.png',
      '/physics/exercises/electric-circuits/ec-117-option-d.png',
    ],
    answer: '/physics/exercises/electric-circuits/ec-117-option-c.png',
    explanation:
      'An ideal voltmeter has infinite resistance, so no current flows through the branch containing $AS$. With no current in that branch, there is no voltage drop across $AS$. The voltmeter therefore always measures the full battery voltage of 2 V, independent of the slider position. The correct graph is the horizontal line.',
    difficulty: 3,
    points: 20,
    hints: [
      'An ideal voltmeter draws no current',
      'No current means no p.d. along the measured wire segment',
      'The measured voltage stays equal to the battery voltage',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-117-question.png'],
  },
  {
    id: 'ec-118',
    type: 'multiple_choice',
    question:
      'In the circuit shown, $A B$ is a metre-wire of resistance 12 Ohm. When $X$ is moved to the mid-point of $A B$, the p.d. across $A X$ will be',
    options: ['0.9 V', '1.2 V', '1.5 V', '1.8 V'],
    answer: '1.2 V',
    explanation:
      'At the mid-point, the resistance of $AX$ is 6 ohm and the resistance of the whole wire branch is 12 ohm. The effective resistance across $AX$ is $6 // 12 = 4$ ohm. Using the series voltage division with the 6-ohm part in the rest of the circuit gives $V_{AX}/3 = 4/(4+6)$, so $V_{AX} = 1.2$ V.',
    difficulty: 4,
    points: 25,
    hints: [
      'Split the metre-wire into two equal 6-ohm halves',
      'Find the effective resistance of the relevant branch',
      'Use voltage division',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-118-question.png'],
  },
  {
    id: 'ec-119',
    type: 'multiple_choice',
    question:
      'In the circuit shown, $V$ is a voltmeter of high internal resistance and $A$ is an ammeter of low internal resistance. What is the voltmeter reading when (a) switch $K$ is open, (b) switch $K$ is closed ?',
    options: [
      'K open: 0 V, K closed: 0 V',
      'K open: 0 V, K closed: 2 V',
      'K open: 3 V, K closed: 2 V',
      'K open: 3 V, K closed: 0 V',
    ],
    answer: 'K open: 3 V, K closed: 0 V',
    explanation:
      'When $K$ is open, the voltmeter is effectively in series with the 10-ohm resistor. Because the voltmeter has very high resistance, almost no current flows, so there is no p.d. across the resistor and the full 3 V appears across the voltmeter. When $K$ is closed, the voltmeter is in parallel with the low-resistance ammeter branch, so the p.d. across that branch is essentially zero. Hence the reading is 0 V.',
    difficulty: 3,
    points: 20,
    hints: [
      'A high-resistance voltmeter draws negligible current',
      'No current means no voltage across the series resistor',
      'A low-resistance ammeter effectively shorts the voltmeter branch when K is closed',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-119-question.png'],
  },
  {
    id: 'ec-120',
    type: 'multiple_choice',
    question:
      'In the circuit shown, four resistors are connected to form a network. The equivalent resistance between $A$ and $B$ is',
    options: ['0.8 Ohm', '1.2 Ohm', '1.5 Ohm', '2.0 Ohm'],
    answer: '0.8 Ohm',
    explanation:
      'Redrawing the network gives four parallel branches of resistances 3 ohm, 3 ohm, 3 ohm and 4 ohm. Therefore $1/R = 1/3 + 1/3 + 1/3 + 1/4 = 5/4$, so the equivalent resistance is $R = 0.8$ ohm.',
    difficulty: 3,
    points: 20,
    hints: [
      'Redraw the network into simple parallel branches',
      'Add reciprocals for parallel resistance',
      'Invert the result at the end',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-120-question.png'],
  },
  {
    id: 'ec-121',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the battery has negligible internal resistance. The current delivered by the battery is',
    options: ['0.5 A', '0.9 A', '1.2 A', '1.5 A'],
    answer: '1.5 A',
    explanation:
      'The three resistors are in parallel, so their equivalent resistance is 2 ohm. The battery voltage is 3 V, so the battery current is $I = V/R = 3/2 = 1.5$ A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Combine the three resistors in parallel',
      'Use the equivalent resistance',
      'Apply I = V/R',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-121-question.png'],
  },
  {
    id: 'ec-122',
    type: 'multiple_choice',
    question:
      'Which of the following circuits is best used for the measurement of a high resistance $R$ ?',
    options: [
      '/physics/exercises/electric-circuits/ec-122-option-a.png',
      '/physics/exercises/electric-circuits/ec-122-option-b.png',
      '/physics/exercises/electric-circuits/ec-122-option-c.png',
      '/physics/exercises/electric-circuits/ec-122-option-d.png',
    ],
    answer: '/physics/exercises/electric-circuits/ec-122-option-d.png',
    explanation:
      'For measuring a high resistance, the voltmeter should be connected in parallel across the resistor while the ammeter should measure the actual current through the resistor branch. Because the ammeter resistance is very small compared with a high resistance, the voltage drop across the ammeter is negligible, so the voltmeter reading is close to the true p.d. across $R$. That arrangement is shown in circuit D.',
    difficulty: 3,
    points: 20,
    hints: [
      'For a high resistance, keep the ammeter voltage drop negligible',
      'The voltmeter should read the p.d. across the resistor itself',
      'Choose the arrangement that best approximates the true V and I of R',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-123',
    type: 'multiple_choice',
    question:
      'Two cells of negligible internal resistance are connected with two resistors as shown. What is the potential difference between $X$ and $Y$ ?',
    options: ['1.33 V', '1.67 V', '2.00 V', '2.33 V'],
    answer: '2.33 V',
    explanation:
      'The 3 V cell is discharging while the 1 V cell is being charged, so the net e.m.f. is $3 - 1 = 2$ V. The total resistance is $2 + 4 = 6$ ohm, so the circuit current is $I = 2/6 = 0.333$ A. The p.d. across the 4-ohm resistor is then $V = IR = (0.333)(4) = 1.33$ V. Adding the 1 V cell gives a total p.d. between $X$ and $Y$ of $1.33 + 1 = 2.33$ V.',
    difficulty: 3,
    points: 20,
    hints: [
      'Work out whether the two cells aid or oppose each other',
      'Find the net e.m.f. first',
      'Use the resistor drop and then include the 1 V cell',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-123-question.png'],
  },
  {
    id: 'ec-124',
    type: 'multiple_choice',
    question:
      'Two cylindrical wires, $X$ and $Y$, are made from the same metal and have the same volume. The length of $X$ is three times that of $Y$. If currents of 1 A and 2 A pass through $X$ and $Y$ respectively, the ratio of the power dissipation in $X$ to that in $Y$ is',
    options: ['1:4', '9:2', '3:4', '9:4'],
    answer: '9:4',
    explanation:
      'Power dissipated is $P = I^2R$, and for a wire $R = \\rho l/A$. Since the two wires have the same volume, $A l$ is constant, so $R$ is proportional to $l^2$. Therefore $P$ is proportional to $I^2 l^2$. Hence $P_X/P_Y = (1/2)^2 x (3/1)^2 = 9/4$.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use P = I^2R',
      'For fixed volume, cross-sectional area is inversely proportional to length',
      'That makes resistance proportional to length squared',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-125',
    type: 'multiple_choice',
    question:
      'The variation of current with the voltage applied across a device is as shown in the figure. What is the change in resistance of the device when the voltage increases from 10 V to 20 V ?',
    options: [
      'It increases by 2.5 Ohm.',
      'It decreases by 15 Ohm.',
      'It increases by 6 Ohm.',
      'It decreases by 6 Ohm.',
    ],
    answer: 'It decreases by 6 Ohm.',
    explanation:
      'The device does not obey Ohm\'s law, so the resistance must be found from $R = V/I$ at each point. At 10 V, the current is 1 A, so $R_1 = 10/1 = 10$ ohm. At 20 V, the current is 5 A, so $R_2 = 20/5 = 4$ ohm. The change in resistance is $4 - 10 = -6$ ohm, so the resistance decreases by 6 ohm.',
    difficulty: 3,
    points: 20,
    hints: [
      'Read the current from the graph at 10 V and at 20 V',
      'Calculate resistance separately using R = V/I',
      'Then compare the two resistance values',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-125-question.png'],
  },
  {
    id: 'ec-126',
    type: 'multiple_choice',
    question:
      'In the above circuit, the two resistors are identical. The battery has an e.m.f. of 4 V and it has negligible internal resistance. The voltmeter is ideal. What are the voltmeter readings when $S$ is open and when $S$ is closed ?',
    options: [
      'S open: 2 V, S closed: 4 V',
      'S open: 2 V, S closed: 2 V',
      'S open: 0 V, S closed: 4 V',
      'S open: 4 V, S closed: 0 V',
    ],
    answer: 'S open: 2 V, S closed: 4 V',
    explanation:
      'With $S$ open, the two identical resistors share the 4 V battery equally, so the voltmeter across one resistor reads 2 V. When $S$ is closed, the right-hand resistor is short-circuited, so the full 4 V appears across the left-hand resistor. The voltmeter then reads 4 V.',
    difficulty: 2,
    points: 15,
    hints: [
      'Open switch: identical resistors share the battery voltage equally',
      'Closed switch: one resistor is bypassed by a short circuit',
      'The remaining resistor gets the full supply voltage',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-126-question.png'],
  },
  {
    id: 'ec-127',
    type: 'multiple_choice',
    question:
      'Three resistors of resistance $R_1$, $R_2$ and $R_3$ are connected in parallel. It is known that $R_1 > R_2 > R_3$. The equivalent resistance of this combination is $R$. Which of the following statements is/are correct ?',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'In a parallel circuit, all branches have the same p.d., so the energy transferred to 1 C of charge is the same in every branch. Thus statement (1) is false. The equivalent resistance of parallel resistors is always less than the smallest individual resistance, so certainly $R < R_1$, making (2) true. If the branch with resistance $R_3$ is removed, there is one less path for current, so the equivalent resistance increases. Therefore (2) and (3) are correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'In parallel, all branches share the same voltage',
      'Equivalent resistance in parallel is less than any branch resistance',
      'Removing a parallel branch increases total resistance',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-128',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the battery has negligible internal resistance. The three resistors have same resistance. If switch $S$ is closed, what would happen to the electric potential at points $X$ and at $Y$ ?',
    options: [
      'Potential at X increases, potential at Y increases',
      'Potential at X increases, potential at Y decreases',
      'Potential at X decreases, potential at Y increases',
      'Potential at X decreases, potential at Y decreases',
    ],
    answer: 'Potential at X decreases, potential at Y decreases',
    explanation:
      'Closing $S$ reduces the equivalent resistance of the part containing $R_1$ and $R_2$. That makes the p.d. across $R_1$ decrease but the p.d. across $R_3$ increase. Taking the earthed point as 0 V, the potential at $X$ decreases because the p.d. across $R_1$ is smaller, and the potential at $Y$ also decreases because the p.d. across $R_3$ is larger. Hence both potentials decrease.',
    difficulty: 4,
    points: 25,
    hints: [
      'Closing the switch changes the equivalent resistance of one section',
      'Track how the voltage shares between the sections change',
      'Use the earthed point as the 0 V reference',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-128-question.png'],
  },
  {
    id: 'ec-129',
    type: 'multiple_choice',
    question:
      'The above circuit can be used to find the resistance of the resistor $R$. The voltmeter and the ammeter are not ideal. Which of the following statements is/are correct ?',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) and (2) only',
    explanation:
      'The ammeter reads the total current through both the resistor and the voltmeter branch, so it is larger than the actual current through $R$. The voltmeter still measures the actual p.d. across $R$. Therefore using $R = V/I$ with the larger current reading gives a value smaller than the true resistance of $R$. This arrangement is not suitable for measuring a high resistance because the voltmeter current becomes too significant. Hence only (1) and (2) are correct.',
    difficulty: 4,
    points: 25,
    hints: [
      'The ammeter includes the current drawn by the voltmeter branch',
      'A larger measured current makes V/I smaller',
      'This causes bigger error for high resistances',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-129-question.png'],
  },
  {
    id: 'ec-130',
    type: 'multiple_choice',
    question:
      'The figure shows part of the circuit in a network of resistors. According to the marked values, find the magnitude and direction of the current passing through the resistor $R$.',
    options: [
      '0.2 A from right to left',
      '0.2 A from left to right',
      '0.4 A from right to left',
      '0.4 A from left to right',
    ],
    answer: '0.2 A from right to left',
    explanation:
      'From the marked currents, the current in the 1-ohm resistor is $0.3 - 0.2 = 0.1$ A from left to right, so the p.d. across it is 0.1 V. The p.d. across the 5-ohm resistor is $(0.2)(5) = 1$ V, so the lower junction is at higher potential than the upper one by $1 - 0.1 = 0.9$ V. The current in the 3-ohm branch is therefore $0.9/3 = 0.3$ A upward. Comparing currents at the junction gives the current through resistor $R$ as $0.3 - 0.1 = 0.2$ A from right to left.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use the given branch currents to find the missing current in the 1-ohm branch',
      'Convert branch currents into voltage drops',
      'Then use junction current conservation to find the current through R',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-130-question.png'],
  },
  {
    id: 'ec-131',
    type: 'multiple_choice',
    question:
      'In the circuit shown, a battery of e.m.f. 6 V and negligible internal resistance is connected to three resistors. What are the electric potential at $X$ before and after switch $S$ is closed ?',
    options: [
      'Before +6 V, after +3 V',
      'Before +3 V, after +3 V',
      'Before +2 V, after +2 V',
      'Before +2 V, after +3 V',
    ],
    answer: 'Before +2 V, after +3 V',
    explanation:
      'Take the earthed point as 0 V. Before the switch is closed, the p.d. across the 10-ohm resistor is 2 V, so point $X$ is at +2 V. After the switch is closed, the circuit current changes and the p.d. across the same 10-ohm resistor becomes 3 V, so point $X$ becomes +3 V. Therefore the correct pair is +2 V before and +3 V after.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use the earthed point as the 0 V reference',
      'Point X is set by the voltage across the 10-ohm resistor',
      'Evaluate the circuit before and after the switch separately',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-131-question.png'],
  },
  {
    id: 'ec-132',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the battery has constant e.m.f. and negligible internal resistance. An ideal voltmeter connected across terminals $X$ and $Y$ reads 2 V. If an ideal ammeter is connected across $X$ and $Y$, the ammeter should read',
    options: ['0.3 A', '0.5 A', '0.6 A', '1.0 A'],
    answer: '0.6 A',
    explanation:
      'With the ideal voltmeter connected, no current flows through the two 1-ohm resistors. The 2 V reading must therefore be the voltage across the middle 2-ohm resistor, so the battery e.m.f. is 6 V. Replacing the voltmeter by an ideal ammeter short-circuits $X$ and $Y$, making the total equivalent resistance 5 ohms, so the total current is $6/5 = 1.2$ A. By symmetry, the current through the ammeter branch is half of this, namely 0.6 A.',
    difficulty: 4,
    points: 25,
    hints: [
      'An ideal voltmeter draws no current',
      'Use the 2 V reading to infer the battery e.m.f.',
      'Then replace it with an ideal ammeter and recalculate the current split',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-132-question.png'],
  },
  {
    id: 'ec-133',
    type: 'multiple_choice',
    question:
      'In the network of resistors shown above, the resistance of $S$ is infinitely large and the two resistors $R$ are identical. If the equivalent resistance across $C D$ is $25 \\Omega$, what is the equivalent resistance across $A C$ ?',
    options: ['25 ohms', '35 ohms', '50 ohms', 'infinitely large'],
    answer: '35 ohms',
    explanation:
      'Across $CD$, no current flows through the 10-ohm resistor and the branch containing $S$ because $S$ has infinite resistance. The two identical resistors $R$ are then in parallel, so $R/2 = 25$ ohms and hence $R = 50$ ohms. Across $AC$, no current still flows through $S$, so the equivalent resistance is the 10-ohm resistor in series with two 50-ohm resistors in parallel: $10 + 50/2 = 35$ ohms.',
    difficulty: 4,
    points: 25,
    hints: [
      'Infinite resistance means an open circuit',
      'Use the first equivalent resistance to solve for R',
      'Then recompute the new series-parallel combination across AC',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-133-question.png'],
  },
  {
    id: 'ec-134',
    type: 'multiple_choice',
    question:
      'The above figure shows the $V-I$ characteristic curves of resistance wire $X$ and filament bulb $Y$. If they are connected in series to a 12 V d.c. supply of negligible internal resistance, what is the voltage across the resistance wire $X$ ?',
    options: ['9 V', '8 V', '7 V', '6 V'],
    answer: '9 V',
    explanation:
      'Because the two devices are in series, they must carry the same current. On the two $V-I$ curves, find the common current where the voltage across $X$ plus the voltage across $Y$ adds to 12 V. The matching point is about 0.3 A, where the resistance wire has 9 V across it and the filament bulb has 3 V across it. Hence the voltage across $X$ is 9 V.',
    difficulty: 4,
    points: 25,
    hints: [
      'Series components have the same current',
      'Read the voltages for the same current from both curves',
      'The two voltages must add to 12 V',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-134-question.png'],
  },
  {
    id: 'ec-135',
    type: 'multiple_choice',
    question:
      'The above graph shows the I-V relationship of an electric device. Which of the following statements is/are correct ?',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      'At 0.5 V the current is zero, so $R = V/I = 0.5/0$, which means the resistance is effectively infinite at that point. Between 1 V and 5 V the graph does not have constant slope, so the resistance is not constant. The line in that region also does not pass through the origin, so the current is not directly proportional to the voltage. Therefore only statement (1) is correct.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use R = V/I for each operating point',
      'Constant resistance means constant V/I and a straight line through the origin',
      'Check whether the graph in the stated range satisfies that',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-135-question.png'],
  },
  {
    id: 'ec-136',
    type: 'multiple_choice',
    question:
      'Figure (a) shows a rotary-type potential divider $P Q R$ connected to an 9 V battery of negligible internal resistance. The internal structure of the potential divider is shown in Figure (b). $X Y Z$ is a uniform resistance wire in the form of a circular arc with centre $O$ and $\\angle X O Y = 90^\\circ$. $O Z$ is a sliding contact and $\\angle X O Z = 120^\\circ$. Find the reading of the ideal voltmeter.',
    options: ['2.5 V', '4.0 V', '5.0 V', '6.8 V'],
    answer: '5.0 V',
    explanation:
      'The full active arc corresponds to 270 degrees, while the slider position splits it into a 120-degree section and a 150-degree section. For a uniform resistance wire, the resistance ratio is proportional to arc length, so the output voltage is the same fraction of the 9 V supply. The voltmeter therefore reads $9 \\times (150/270) = 5.0$ V.',
    difficulty: 4,
    points: 25,
    hints: [
      'Uniform wire means resistance is proportional to arc length',
      'Use the angular ratio to get the resistance ratio',
      'Then apply the potential divider rule',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-136-question.png'],
  },
  {
    id: 'ec-137',
    type: 'multiple_choice',
    question:
      'In the network shown, the resistance of each resistor is $6 \\Omega$. Find the equivalent resistance of the network across $a$ and $b$.',
    options: ['1.2 ohms', '1.5 ohms', '2.0 ohms', '2.4 ohms'],
    answer: '2.0 ohms',
    explanation:
      'Reducing the symmetric resistor network step by step gives an equivalent resistance of 2.0 ohms across $a$ and $b$. This is the only value consistent with the standard series-parallel reduction of the six identical 6-ohm branches shown in the diagram.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use symmetry to identify equal-potential points if applicable',
      'Then combine the remaining series and parallel sections',
      'The final reduced value is 2.0 ohms',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-137-question.png'],
  },
  {
    id: 'ec-138',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning an ammeter are correct ?',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1), (2) and (3)',
    explanation:
      'An ammeter must be connected in series so that the circuit current passes through it. To avoid disturbing the circuit, it should have very low resistance. If an ammeter had high resistance, it would significantly increase the circuit resistance and change the current being measured. Therefore all three statements are correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'An ammeter measures current by letting the circuit current pass through it',
      'A good ammeter should disturb the circuit as little as possible',
      'That is why practical ammeters have low resistance',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-139',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the battery has negligible internal resistance. The three resistors have the same resistance. Which statement is NOT correct when switch $S$ is closed ?',
    options: [
      'The potential difference across $P$ and $Q$ remains unchanged.',
      'The electric potential at $P$ increases.',
      'The electric potential at $Q$ decreases.',
      'The current flowing through resistor $R_2$ decreases.',
    ],
    answer: 'The electric potential at $Q$ decreases.',
    explanation:
      'Closing the switch reduces the equivalent resistance of the whole circuit, so the current from the battery increases. The p.d. across $PQ$ stays equal to the battery e.m.f., so it is unchanged. The p.d. across $R_1$ increases, so the potential at $P$ rises. The p.d. across $R_2$ decreases, but since the left side of $R_2$ is at 0 V, the potential at $Q$ becomes less negative, i.e. it increases rather than decreases. The current through $R_2$ therefore decreases. So statement C is the only incorrect statement.',
    difficulty: 4,
    points: 25,
    hints: [
      'Closing the switch lowers the total equivalent resistance',
      'Track how the voltage division changes across $R_1$ and $R_2$',
      'Use the 0 V reference point to determine whether the potential rises or falls',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-139-question.png'],
  },
  {
    id: 'ec-140',
    type: 'multiple_choice',
    question:
      'In the above circuit, the cell has an e.m.f. of 3 V and negligible internal resistance. Ammeters $A_1$ and $A_2$ have zero resistance. What are the readings of the two ammeters ?',
    options: [
      'ammeter $A_1$ = 1.0 A, ammeter $A_2$ = 1.5 A',
      'ammeter $A_1$ = 1.5 A, ammeter $A_2$ = 3.0 A',
      'ammeter $A_1$ = 1.5 A, ammeter $A_2$ = 4.5 A',
      'ammeter $A_1$ = 2.5 A, ammeter $A_2$ = 4.5 A',
    ],
    answer: 'ammeter $A_1$ = 2.5 A, ammeter $A_2$ = 4.5 A',
    explanation:
      'Each resistor is connected directly across the same two points, so they are in parallel and each has the full 3 V across it. The branch currents are $3/1 = 3$ A, $3/2 = 1.5$ A and $3/3 = 1$ A. Ammeter $A_1$ measures the currents through the 2-ohm and 3-ohm branches, so it reads $1.5 + 1 = 2.5$ A. Ammeter $A_2$ measures the currents through the 1-ohm and 2-ohm branches, so it reads $3 + 1.5 = 4.5$ A.',
    difficulty: 4,
    points: 25,
    hints: [
      'All three resistors are across the same two points',
      'So each branch has the full 3 V across it',
      'Then add the relevant branch currents for each ammeter',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-140-question.png'],
  },
  {
    id: 'ec-141',
    type: 'multiple_choice',
    question:
      'Two light bulbs $P$ and $Q$ are connected in parallel to a power supply. The resistance of $P$ is greater than that of $Q$. Which of the following statements is/are correct ?',
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(2) only',
    explanation:
      'For bulbs in parallel, the voltage across both bulbs is the same, so statement (1) is false. Since $P$ has the larger resistance, the current through it is smaller by $I = V/R$, so statement (2) is true. The power is $P = VI = V^2/R$, so the higher-resistance bulb dissipates less power and is dimmer, making statement (3) false. Therefore only statement (2) is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Parallel branches share the same voltage',
      'Larger resistance means smaller current at the same voltage',
      'Brightness follows electrical power dissipated',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-142',
    type: 'multiple_choice',
    question:
      'Two light bulbs $P$ and $Q$ are connected in series to a power supply. The resistance of $P$ is greater than that of $Q$. Which of the following statements is/are correct ?',
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(1) and (3) only',
    explanation:
      'For bulbs in series, the current through both bulbs is the same, so statement (2) is false. Since $V = IR$, the bulb with greater resistance has the greater voltage across it, so statement (1) is true. With the same current through both bulbs, the power is $P = VI = I^2R$, so the higher-resistance bulb dissipates more power and is brighter. Hence statement (3) is also true.',
    difficulty: 3,
    points: 20,
    hints: [
      'Series components carry the same current',
      'Voltage in series divides in proportion to resistance',
      'At fixed current, larger resistance means larger power',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-143',
    type: 'multiple_choice',
    question:
      'In the above circuit, $XY$ is a uniform resistance wire. What is the change of the reading of the ammeter $A$ when the sliding contact $P$ is moved from $X$ to $Y$ ?',
    options: [
      'gradually increases',
      'gradually decreases',
      'increases and then decreases',
      'decreases and then increases',
    ],
    answer: 'decreases and then increases',
    explanation:
      'When $P$ is at $X$, current reaches the contact directly, so the effective resistance is minimum and the ammeter reading is maximum. As $P$ moves toward the middle, current must pass through more of the resistance wire, so the effective resistance increases and the current falls. After the midpoint, the path through the other side becomes shorter again, so the effective resistance decreases and the current rises. Therefore the ammeter reading decreases first and then increases.',
    difficulty: 3,
    points: 20,
    hints: [
      'The uniform wire acts as a variable resistor',
      'Resistance depends on how much of the wire lies in the current path',
      'The path is shortest at the ends and longest around the middle',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-143-question.png'],
  },
  {
    id: 'ec-144',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning two identical resistors connected in parallel compared with one resistor is/are correct?',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      'Two identical resistors in parallel have half the resistance of one resistor alone. With the same supply voltage, this smaller equivalent resistance draws more current from the source. Since $P = V^2/R$, the total power consumed is also larger. Therefore statements (1) and (2) are correct, while statement (3) is false because the equivalent resistance is smaller, not greater.',
    difficulty: 3,
    points: 20,
    hints: [
      'Two identical resistors in parallel halve the equivalent resistance',
      'At fixed voltage, lower resistance means higher current',
      'At fixed voltage, lower resistance also means higher total power',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-145',
    type: 'multiple_choice',
    question: "Which of the following is a correct statement of Ohm's Law ?",
    options: [
      'The resistance of a conductor is always constant.',
      'The voltage across a conductor is always proportional to the current flowing through it.',
      'The resistance of a conductor increases with the temperature.',
      'The resistance of a conductor is constant only if the temperature of the conductor is constant.',
    ],
    answer: 'The resistance of a conductor is constant only if the temperature of the conductor is constant.',
    explanation:
      "Ohm's law states that the voltage across a conductor is directly proportional to the current through it provided the temperature and other physical conditions remain constant. That means the conductor's resistance stays constant only under constant temperature. The other choices either omit that condition or describe a separate material effect rather than the law itself.",
    difficulty: 3,
    points: 20,
    hints: [
      "Ohm's law applies only under fixed physical conditions",
      'The key omitted condition is constant temperature',
      'Without that condition, the proportionality need not hold',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-146',
    type: 'multiple_choice',
    question:
      'A cell has a constant e.m.f. and internal resistance. If a resistor of resistance $5 \\Omega$ is connected in series with the cell, the current is 2.0 A. If the resistor is replaced by another resistor of resistance $10 \\Omega$, the current in the circuit becomes 1.2 A. What is the value of the internal resistance ?',
    options: ['1.5 ohms', '2.0 ohms', '2.5 ohms', '3.0 ohms'],
    answer: '2.5 ohms',
    explanation:
      'Let the internal resistance be $r$ and the e.m.f. be $\\varepsilon$. Then $\\varepsilon = 2.0(5 + r)$ and also $\\varepsilon = 1.2(10 + r)$. Equating the two expressions gives $2.0(5 + r) = 1.2(10 + r)$. Solving this gives $r = 2.5$ ohms.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use $I = \\varepsilon/(R+r)$ for each case',
      'Write two equations for the same e.m.f.',
      'Then solve for the internal resistance',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-146-question.png'],
  },
  {
    id: 'ec-147',
    type: 'multiple_choice',
    question:
      'In the above circuit, the bulbs are identical. If the reading of ammeter $A_1$ is 1 A, find the readings of ammeters $A_2$ and $A_3$.',
    options: [
      'Reading of $A_2$ = 2.0 A, reading of $A_3$ = 2.0 A',
      'Reading of $A_2$ = 2.0 A, reading of $A_3$ = 3.0 A',
      'Reading of $A_2$ = 0.5 A, reading of $A_3$ = 1.0 A',
      'Reading of $A_2$ = 0.5 A, reading of $A_3$ = 1.5 A',
    ],
    answer: 'Reading of $A_2$ = 2.0 A, reading of $A_3$ = 3.0 A',
    explanation:
      'The branch monitored by $A_2$ has half the resistance of the branch monitored by $A_1$, so with the same p.d. across the parallel branches, the current through that branch is doubled. Since $A_1$ reads 1 A, $A_2$ reads 2 A. Ammeter $A_3$ measures the total current supplied to both branches, so it reads $1 + 2 = 3$ A.',
    difficulty: 3,
    points: 20,
    hints: [
      'The branch with half the resistance takes twice the current',
      'Use the given 1 A reading as the reference branch current',
      'Then add branch currents to get the total current',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-147-question.png'],
  },
  {
    id: 'ec-148',
    type: 'multiple_choice',
    question:
      'A student wants to measure the resistance of a resistor $R$ and sets up a circuit shown. The student made which of these mistakes in setting up the circuit ?',
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(1) and (3) only',
    explanation:
      'The ammeter polarity is reversed, so current enters its negative terminal, which is incorrect for a moving-coil meter. The voltmeter polarity is correctly connected. However, the voltmeter is placed across both $R$ and the rheostat, whereas it should measure the p.d. across $R$ only. Therefore the mistakes are (1) and (3).',
    difficulty: 3,
    points: 20,
    hints: [
      'An ammeter should have current entering its positive terminal',
      'A voltmeter should be connected across only the component being measured',
      'Check whether the voltmeter is spanning extra components',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-148-question.png'],
  },
  {
    id: 'ec-149',
    type: 'multiple_choice',
    question:
      'Two metal rods, $X$ and $Y$, of uniform cross-sectional area are made of the same material and have the same volume. The length and resistance of $X$ are $L$ and $R$ respectively. What is the resistance of $Y$ if it has a length of $2L$ ?',
    options: ['$R/4$', '$R/2$', '$2R$', '$4R$'],
    answer: '$4R$',
    explanation:
      'For a conductor, $R = \\rho L/A$. Since the two rods have the same volume, doubling the length halves the cross-sectional area. So for rod $Y$, the resistance scales as $R \\propto L/A$, giving a factor of $2/(1/2) = 4$. Hence the resistance of $Y$ is $4R$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $R = \\rho L/A$',
      'Same volume means $A \\times L$ stays constant',
      'So if length doubles, area halves',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-150',
    type: 'multiple_choice',
    question:
      'In the circuit shown, three identical light bulbs are connected to a cell. Under what conditions will light bulb $P$ have the maximum brightness?',
    options: [
      'Switch $X$ closed, switch $Y$ open',
      'Switch $X$ closed, switch $Y$ closed',
      'Switch $X$ open, switch $Y$ open',
      'Switch $X$ open, switch $Y$ closed',
    ],
    answer: 'Switch $X$ closed, switch $Y$ open',
    explanation:
      'Closing switch $X$ bypasses one of the other bulbs so less current is diverted away from bulb $P$. Switch $Y$ must remain open because if it is closed, bulb $P$ itself is short-circuited and would not light. Therefore bulb $P$ is brightest when $X$ is closed and $Y$ is open.',
    difficulty: 3,
    points: 20,
    hints: [
      'Short-circuiting a bulb makes its voltage drop zero',
      'You want to remove competing branches without bypassing bulb $P$',
      'Check which switch bypasses another bulb and which bypasses $P$',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-150-question.png'],
  },
  {
    id: 'ec-151',
    type: 'multiple_choice',
    question:
      'The figure shows a battery of e.m.f. 3.0 V and internal resistance $2.0 \\Omega$ is connected to a light bulb of resistance $10.0 \\Omega$. A voltmeter of internal resistance 10 k\\Omega is connected in parallel with the light bulb. What is the reading of the voltmeter?',
    options: ['2.4 V', '2.5 V', '2.9 V', '3.0 V'],
    answer: '2.5 V',
    explanation:
      'The voltmeter has a very large resistance, so the current through it is negligible and it hardly affects the circuit. The current is therefore approximately $I = 3.0/(2.0 + 10.0) = 0.25$ A. The p.d. across the light bulb is then $V = IR = 0.25 \\times 10.0 = 2.5$ V, so the voltmeter reads 2.5 V.',
    difficulty: 3,
    points: 20,
    hints: [
      'A 10 k闂?voltmeter draws negligible current here',
      'So treat the bulb as the main external load',
      'Use the voltage drop across the 10 闂?bulb',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-151-question.png'],
  },
  {
    id: 'ec-152',
    type: 'multiple_choice',
    question:
      'In Figure (a), two identical resistors are connected in series to a cell of e.m.f. $V$ and negligible internal resistance. The power dissipated by each resistor is $P$. If the two resistors are now connected in parallel as shown in Figure (b), what is the power dissipated by each resistor ?',
    options: ['$2P$', '$4P$', '$8P$', '$16P$'],
    answer: '$4P$',
    explanation:
      'In the series arrangement, each resistor has half the supply voltage, so each dissipates power proportional to $(V/2)^2/R$. In the parallel arrangement, each resistor gets the full voltage $V$, so the power of each becomes proportional to $V^2/R$. That is four times larger than before. Hence each resistor dissipates $4P$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Compare the voltage across each resistor in the two arrangements',
      'Power for a resistor is $P = V^2/R$',
      'Doubling the voltage makes the power four times larger',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-152-question.png'],
  },
  {
    id: 'ec-153',
    type: 'multiple_choice',
    question:
      'In the above network, the resistance across terminals $a$ and $b$ is $6 \\Omega$. If the $12 \\Omega$ resistor is replaced by a $6 \\Omega$ resistor, the resistance across terminals $a$ and $b$',
    options: [
      'becomes $2 \\Omega$.',
      'becomes $4 \\Omega$.',
      'becomes $6 \\Omega$.',
      'cannot be found as the value of $R$ is unknown.',
    ],
    answer: 'becomes $4 \\Omega$.',
    explanation:
      'Let the equivalent resistance of the four-resistor part be $R\\prime$. From the original network, $1/6 = 1/12 + 1/R\\prime$, so $R\\prime = 12$ ohms. Replacing the 12-ohm resistor by a 6-ohm resistor gives a parallel combination of 6 ohms and 12 ohms, so the new equivalent resistance is $(6 \\times 12)/(6 + 12) = 4$ ohms.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use the original 6-ohm equivalent to infer the unknown branch equivalent',
      'Then recalculate the new parallel combination',
      'Apply the parallel resistance formula directly',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-153-question.png'],
  },
  {
    id: 'ec-154',
    type: 'multiple_choice',
    question:
      'What will happen if the variable resistor is set to zero in the circuit ?',
    options: [
      'The light bulb will burn out.',
      'The light bulb will not light up.',
      'The brightness of the light bulb will increase.',
      'The brightness of the light bulb will remain unchanged.',
    ],
    answer: 'The light bulb will not light up.',
    explanation:
      'Setting the variable resistor to zero creates a zero-resistance path that short-circuits the light bulb. Current then flows through the short path instead of through the bulb. With no current through the bulb, it does not light.',
    difficulty: 3,
    points: 20,
    hints: [
      'A zero-ohm path acts as a short circuit',
      'Current prefers the path of least resistance',
      'No current through the bulb means no light',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-154-question.png'],
  },
  {
    id: 'ec-155',
    type: 'multiple_choice',
    question:
      'In the above circuit, the cell has e.m.f. 12 V and internal resistance $2 \\Omega$. What is the current in the $6 \\Omega$ resistor ?',
    options: ['0.5 A', '1.0 A', '1.5 A', '2.0 A'],
    answer: '1.0 A',
    explanation:
      'The 3-ohm and 6-ohm resistors are in parallel, so their equivalent resistance is $(6 \\times 3)/(6 + 3) = 2$ ohms. Including the 2-ohm internal resistance gives a total of 4 ohms, so the total current is $12/4 = 3$ A. The terminal voltage is then $12 - 3 \\times 2 = 6$ V. That 6 V is across the parallel branch, so the current through the 6-ohm resistor is $6/6 = 1.0$ A.',
    difficulty: 4,
    points: 25,
    hints: [
      'First reduce the parallel external resistors',
      'Then include the internal resistance of the cell',
      'Use the terminal voltage across the 6-ohm resistor',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-155-question.png'],
  },
  {
    id: 'ec-156',
    type: 'multiple_choice',
    question:
      'Resistors $X, Y$ and $Z$ in the above circuit are identical while the battery of negligible internal resistance supplies a total power of 24 W. What is the power dissipated in resistor $Z$ ?',
    options: ['3 W', '4 W', '6 W', '8 W'],
    answer: '4 W',
    explanation:
      'Let the current through resistor $Z$ be $I$. The current through resistor $Y$ is also $I$, so the current through resistor $X$ is $2I$. The total power is therefore $(2I)^2R + I^2R + I^2R = 6I^2R = 24$. Hence $I^2R = 4$, which is exactly the power dissipated in resistor $Z$. So the answer is 4 W.',
    difficulty: 4,
    points: 25,
    hints: [
      'Express all branch currents in terms of the current through Z',
      'Write the total power as the sum of powers in all three resistors',
      'Then solve for the power in Z only',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-156-question.png'],
  },
  {
    id: 'ec-157',
    type: 'multiple_choice',
    question:
      'In each of the above circuits, the cell has constant e.m.f. and negligible internal resistance. When the sliding contact $S$ of each rheostat shifts from the mid-position to the right, how would the brightness of each bulb change ?',
    options: [
      'bulb $L_1$ becomes dimmer, bulb $L_2$ remains unchanged',
      'bulb $L_1$ becomes dimmer, bulb $L_2$ becomes brighter',
      'bulb $L_1$ remains unchanged, bulb $L_2$ becomes dimmer',
      'bulb $L_1$ becomes brighter, bulb $L_2$ remains unchanged',
    ],
    answer: 'bulb $L_1$ becomes dimmer, bulb $L_2$ remains unchanged',
    explanation:
      'For $L_1$, the effective resistance of the rheostat increases as the slider moves to the right, so the current in that series circuit decreases and the bulb becomes dimmer. For $L_2$, the bulb and rheostat are in parallel across the same cell, so the voltage across $L_2$ stays constant. Its brightness therefore remains unchanged.',
    difficulty: 4,
    points: 25,
    hints: [
      'Treat the two circuits separately',
      'In the first, the rheostat changes the series current',
      'In the second, the bulb remains directly across the cell',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-157-question.png'],
  },
  {
    id: 'ec-158',
    type: 'multiple_choice',
    question:
      'In the above circuit, the cell has negligible internal resistance. When switch $S$ is closed, both bulbs are not lit. The voltmeter has a reading but the ammeter reads zero. If only one fault has been developed in the circuit, which of the following is possible?',
    options: [
      'Bulb $X$ has been shorted accidentally.',
      'Bulb $Y$ has been shorted accidentally.',
      'Bulb $X$ is burnt out and becomes open circuit.',
      'Bulb $Y$ is burnt out and becomes open circuit.',
    ],
    answer: 'Bulb $X$ is burnt out and becomes open circuit.',
    explanation:
      'If bulb $X$ is open circuit, no current can flow through the series path containing the ammeter and both bulbs, so the ammeter reads zero and neither bulb lights. The voltmeter, however, is still connected across the cell and so reads a non-zero voltage. The other listed faults would either still allow current to flow or would make the voltmeter reading zero as well.',
    difficulty: 4,
    points: 25,
    hints: [
      'Zero ammeter reading means no circuit current at all',
      'A non-zero voltmeter reading means the cell is still present across the meter',
      'Look for a single fault that opens the current path without removing the cell voltage from the voltmeter',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-158-question.png'],
  },
  {
    id: 'ec-159',
    type: 'multiple_choice',
    question:
      'The figure shows two light bulbs $P$ and $Q$ connected to a cell of e.m.f. 6 V and negligible internal resistance. The voltmeter reads 6 V when the switch $S$ is closed. Which of the following is possible ?',
    options: [
      'Both $P$ and $Q$ are short-circuited.',
      'Both $P$ and $Q$ are burnt out and become open circuit.',
      '$P$ is short-circuited or $Q$ is burnt out and becomes open circuit.',
      '$P$ is burnt out and becomes open circuit or $Q$ is short-circuited.',
    ],
    answer: '$P$ is burnt out and becomes open circuit or $Q$ is short-circuited.',
    explanation:
      'For the voltmeter to read the full 6 V, it must effectively receive the entire battery voltage. This can happen if $P$ is open circuit, so the very high-resistance voltmeter takes almost all the battery voltage in the branch. It can also happen if $Q$ is short-circuited, making the voltage across $Q$ zero so the full battery voltage appears across $P$ and the voltmeter. Hence option D is possible.',
    difficulty: 4,
    points: 25,
    hints: [
      'A 6 V reading means the meter is effectively seeing the full cell e.m.f.',
      'Think about faults that make the whole supply appear across the voltmeter branch',
      'An open circuit and a short circuit affect voltage distribution differently',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-159-question.png'],
  },
  {
    id: 'ec-160',
    type: 'multiple_choice',
    question:
      'In the above circuit, the cell has constant e.m.f. and a fixed internal resistance. When $S$ is closed, the ammeter reads 3.0 A. When $S$ is open, which of the following is a possible reading of the ammeter?',
    options: ['1.6 A', '2.0 A', '2.4 A', '3.2 A'],
    answer: '2.4 A',
    explanation:
      'Let the e.m.f. be $\\varepsilon$ and the internal resistance be $r$. When $S$ is closed, the 3-ohm resistor is shorted, so the total resistance is $(6 + r)$ ohms and $\\varepsilon = 3(6 + r)$. When $S$ is open, the total resistance becomes $(9 + r)$ ohms, so $\\varepsilon = I(9 + r)$. The only option that gives a non-negative, non-zero internal resistance is $I = 2.4$ A, which leads to $r = 6$ ohms. Hence 2.4 A is possible.',
    difficulty: 4,
    points: 25,
    hints: [
      'Write one equation for the closed-switch case and one for the open-switch case',
      'Both equations use the same e.m.f. and internal resistance',
      'Test which option gives a physically valid positive internal resistance',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-160-question.png'],
  },
  {
    id: 'ec-161',
    type: 'multiple_choice',
    question:
      'In the above circuit, the cell has a finite internal resistance and both meters are ideal. In which situation below will the readings of the ammeter and the voltmeter suddenly increase ?',
    options: [
      '$R_1$ is faulty and becomes a short circuit.',
      '$R_2$ is faulty and becomes a short circuit.',
      '$R_3$ is faulty and becomes a short circuit.',
      '$R_2$ is faulty and becomes an open circuit.',
    ],
    answer: '$R_2$ is faulty and becomes an open circuit.',
    explanation:
      'If $R_2$ becomes open circuit, the total current drawn from the cell decreases. With finite internal resistance, that means the lost volts inside the cell decrease, so the terminal voltage rises. Since the voltmeter reads the terminal voltage, its reading increases. The increased terminal voltage across $R_1$ also makes the current through the measured branch increase, so the ammeter reading rises as well. Therefore option D is the only case where both readings increase.',
    difficulty: 4,
    points: 25,
    hints: [
      'A finite internal resistance means terminal voltage changes with load current',
      'Reducing the total current reduces the lost volts inside the cell',
      'That can make the external terminal voltage increase',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-161-question.png'],
  },
  {
    id: 'ec-162',
    type: 'multiple_choice',
    question:
      'For safety purposes, the driver seat of a car is equipped with a seat belt warning light. When the driver seat is occupied, the switch $S_1$ under his seat will close. If the seat belt is not yet fastened, switch $S_2$ will remain open and the warning light will light up. If the seat belt is fastened, the switch $S_2$ will close and the warning light will shut off. Which circuit below is the best design ?',
    options: [
      '/physics/exercises/electric-circuits/ec-162-option-a.png',
      '/physics/exercises/electric-circuits/ec-162-option-b.png',
      '/physics/exercises/electric-circuits/ec-162-option-c.png',
      '/physics/exercises/electric-circuits/ec-162-option-d.png',
    ],
    answer: '/physics/exercises/electric-circuits/ec-162-option-c.png',
    explanation:
      'The warning lamp should light only when $S_1$ is closed (seat occupied) and $S_2$ is open (seat belt not fastened). The correct design must therefore complete the lamp circuit in that condition, but bypass or cut off the lamp when $S_2$ is closed. Option C satisfies that logic without short-circuiting the cell.',
    difficulty: 4,
    points: 25,
    hints: [
      'The lamp should turn on only for the logic condition: $S_1$ closed and $S_2$ open',
      'When $S_2$ closes, the lamp must turn off safely',
      'Reject any design that short-circuits the power source',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-163',
    type: 'multiple_choice',
    question:
      'In the above circuit, the variable resistor $R$ can be adjusted over its full range from 0 to $10 \\mathrm{M}\\Omega$. What is the approximate range of resistance between $a$ and $b$ ?',
    options: [
      '$0 \\Omega$ to $10 \\mathrm{k}\\Omega$',
      '$10 \\Omega$ to $10 \\mathrm{k}\\Omega$',
      '$10 \\Omega$ to $10 \\mathrm{M}\\Omega$',
      '$10 \\mathrm{k}\\Omega$ to $10 \\mathrm{M}\\Omega$',
    ],
    answer: '$10 \\Omega$ to $10 \\mathrm{k}\\Omega$',
    explanation:
      'When the variable resistor is set to 0 ohms, the equivalent resistance is 10 ohms in parallel with 10 kilo-ohms, which is approximately 10 ohms because 10 ohms is much smaller. When the variable resistor is set to 10 mega-ohms, the equivalent resistance is 10 mega-ohms in parallel with 10 kilo-ohms, which is approximately 10 kilo-ohms because 10 kilo-ohms is much smaller. So the resistance between $a$ and $b$ ranges approximately from 10 ohms to 10 kilo-ohms.',
    difficulty: 4,
    points: 25,
    hints: [
      'Evaluate the two extreme settings of the variable resistor',
      'In a parallel pair, the smaller resistance dominates the equivalent value',
      'Use approximation rather than exact arithmetic here',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-163-question.png'],
  },
  {
    id: 'ec-164',
    type: 'multiple_choice',
    question:
      'Two filament light bulbs $X$ and $Y$ are connected in parallel to a dry cell. $X$ is brighter than $Y$. Which statements are correct?',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1), (2) and (3)',
    explanation:
      'Since the bulbs are in parallel, they have the same voltage across them. The brighter bulb $X$ must therefore dissipate more power. With the same voltage, that means it draws larger current, so in 1 second more charge passes through $X$ than through $Y$, making (1) true. Power is energy per second, so (2) is also true. Because the voltage is the same for both bulbs, the energy dissipated per unit charge is the same, so (3) is true as well.',
    difficulty: 3,
    points: 20,
    hints: [
      'Parallel bulbs have the same voltage',
      'Brightness reflects power dissipation',
      'Voltage is energy transferred per unit charge',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-165',
    type: 'multiple_choice',
    question:
      'In the above circuit, all the bulbs are identical. If the voltage $V$ gradually increases, which bulb(s) will burn out first ?',
    options: ['$P$ and $Q$', '$R$', '$S$', '$T$'],
    answer: '$R$',
    explanation:
      'Treat each identical bulb as having the same resistance. The parallel pair $P$ and $Q$ has a smaller equivalent resistance than bulb $R$, so in the branch containing them and $R$, bulb $R$ takes the larger share of the total voltage. Bulbs $S$ and $T$ are in series across the supply and each gets half the supply voltage. Comparing all branches, bulb $R$ has the greatest p.d. across it, so it dissipates the greatest power and burns out first as the supply voltage rises.',
    difficulty: 4,
    points: 25,
    hints: [
      'Compare the voltage division across each bulb',
      'The bulb with the largest voltage across it dissipates the greatest power',
      'That bulb fails first as the supply voltage increases',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-165-question.png'],
  },
  {
    id: 'ec-166',
    type: 'multiple_choice',
    question:
      'In the circuit, all resistors are identical. The internal resistance of the battery can be neglected. What is the potential difference between $X$ and $Y$ ?',
    options: ['1.5 V', '3.0 V', '4.5 V', '6.0 V'],
    answer: '3.0 V',
    explanation:
      'The resistor with 9 V across it does not affect the required division between $X$ and $Y$. The two resistors on the right are in parallel, so together they have half the resistance of one resistor. That parallel combination is then in series with one identical resistor. The voltage therefore divides in the ratio 2:1, so the p.d. across the parallel section $XY$ is one-third of 9 V, which is 3.0 V.',
    difficulty: 4,
    points: 25,
    hints: [
      'Reduce the two identical parallel resistors first',
      'Then use simple series voltage division',
      'The 9 V is shared in proportion to the series resistances',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-166-question.png'],
  },
  {
    id: 'ec-167',
    type: 'multiple_choice',
    question:
      'The cylindrical resistors below are made from the same metal. Which one would produce the most power when the same voltage is applied in turns across the two ends of each resistor?',
    options: [
      '/physics/exercises/electric-circuits/ec-167-option-a.png',
      '/physics/exercises/electric-circuits/ec-167-option-b.png',
      '/physics/exercises/electric-circuits/ec-167-option-c.png',
      '/physics/exercises/electric-circuits/ec-167-option-d.png',
    ],
    answer: '/physics/exercises/electric-circuits/ec-167-option-b.png',
    explanation:
      'For the same material, resistance depends on $R = \\rho L / A$. Under the same applied voltage, the power is $P = V^2 / R$, so the resistor with the smallest resistance gives the greatest power. The correct diagram is the one with the shortest effective length and the largest cross-sectional area, so the answer is B.',
    difficulty: 4,
    points: 25,
    hints: [
      'With the same voltage, greater power means smaller resistance',
      'For the same material, resistance increases with length and decreases with area',
      'Choose the resistor with the smallest $L/A$ ratio',
    ],
    sectionId: 'electric-circuits',
  },
  {
    id: 'ec-168',
    type: 'multiple_choice',
    question:
      'Three identical resistors, a battery of negligible internal resistance and an ideal voltmeter are connected to form Circuits (a) and (b) respectively. Given that the voltmeter reading is 8 V in Circuit (a), what is the voltmeter reading in Circuit (b) ?',
    options: ['4 V', '6 V', '8 V', '12 V'],
    answer: '6 V',
    explanation:
      'Since the resistors are identical, use the 8 V reading in Circuit (a) to infer the battery voltage by simple voltage division. Comparing the arrangement in Circuit (b), the voltmeter is across a branch that receives half of that total supply. This gives a reading of 6 V, so the correct answer is B.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use Circuit (a) to work out the total supply voltage first',
      'Reduce the resistor arrangement in Circuit (b)',
      'Then apply series voltage division across identical resistors',
    ],
    sectionId: 'electric-circuits',
    imagePaths: ['/physics/exercises/electric-circuits/ec-168-question.png'],
  },
  {
    id: 'de-001',
    type: 'multiple_choice',
    question:
      'In the circuit shown, $Y$ is a 5 A fuse, $Z$ and $X$ are 3 A fuses. When the switch $K$ is open the current passing through the $21 \\Omega$ resistor is 2.4 A. When $K$ is closed, which of the fuses will be blown?',
    options: ['$X$ only', '$Y$ only', '$Z$ only', '$X$ and $Z$ only'],
    answer: '$Y$ only',
    explanation:
      'The voltage across the $21 \\Omega$ resistor is $(2.4)(21)=50.4\\text{ V}$. The same voltage is across the $18 \\Omega$ branch, so its current is $50.4/18=2.8\\text{ A}$, which is below the 3 A rating of fuse $X$. The current through fuse $Y$ is the sum of the two branch currents, $2.8+2.4=5.2\\text{ A}$, which exceeds 5 A. Therefore only fuse $Y$ blows.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use the given current in the 21 ohm resistor to find the branch voltage',
      'Then find the current in the other branch',
      'Compare each fuse current with its rating',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-001-question.png'],
  },
  {
    id: 'de-002',
    type: 'multiple_choice',
    question:
      'The table below shows the voltage and power rating for various electrical appliances. Which of the electric appliances has the smallest working resistance ?',
    options: ['Air-conditioner', 'Television', 'Heater', 'Hair-dryer'],
    answer: 'Heater',
    explanation:
      'For a rated appliance, $R = V^2 / P$. The air-conditioner has $R=200^2/2000=20\\,\\Omega$, the television has $R=200^2/250=160\\,\\Omega$, the heater has $R=100^2/2000=5\\,\\Omega$, and the hair-dryer has $R=100^2/20=500\\,\\Omega$. The smallest value is $5\\,\\Omega$, so the heater has the smallest working resistance.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the rating formula $R = V^2/P$',
      'Calculate each resistance separately',
      'Choose the smallest value',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-003',
    type: 'multiple_choice',
    question:
      'A set of Christmas tree lights consists of 20 bulbs in series. Each bulb has a rating of \"10 V 5 W\". One of the bulbs burns out and Jimmy buys a replacement. Although the new bulb is marked 5 W, it looks dimmer than the others when the lights are turned on. What is the most probable reason?',
    options: [
      'It has a smaller current flowing through it',
      'It has a filament with a higher resistance',
      'It has been shorted accidentally',
      'It is designed to work at a lower voltage',
    ],
    answer: 'It is designed to work at a lower voltage',
    explanation:
      'For the same rated power, a bulb designed for a lower rated voltage has a smaller resistance because $R=V^2/P$. In the same series string, that smaller resistance means it receives less power than the correctly matched bulbs, so it glows dimmer. The other choices do not fit the observed behavior of one bulb only becoming dimmer while the set still works.',
    difficulty: 4,
    points: 25,
    hints: [
      'Use $R = V^2/P$ to compare bulbs of the same rated power',
      'A lower rated voltage means a smaller filament resistance',
      'In a series string, that changes the power in that bulb',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-004',
    type: 'multiple_choice',
    question:
      "Fifteen bulbs, each labelled '200 V 60 W', are connected in parallel to a 200 V supply. Which fuse should be used in the circuit ?",
    options: ['2 A', '3 A', '4 A', '5 A'],
    answer: '5 A',
    explanation:
      'Each bulb draws $I=P/V=60/200=0.3\\text{ A}$. For 15 bulbs in parallel, the total current is $15\\times0.3=4.5\\text{ A}$. The fuse must be at least this value, so the suitable choice is 5 A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Find the current of one bulb first',
      'Parallel branches add their currents',
      'Choose the smallest fuse rating above the total current',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-005',
    type: 'multiple_choice',
    question:
      'Eight 100 W lamps and one 1000 W heater are all connected in parallel to a mains supply of 200 V. Which fuse should be used ?',
    options: ['5 A fuse', '10 A fuse', '30 A fuse', '50 A fuse'],
    answer: '10 A fuse',
    explanation:
      'Each 100 W lamp draws $100/200=0.5\\text{ A}$, so eight lamps draw $8\\times0.5=4\\text{ A}$. The heater draws $1000/200=5\\text{ A}$. The total current is $4+5=9\\text{ A}$, so the correct fuse is 10 A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $I=P/V$ for each appliance',
      'Add the parallel branch currents',
      'Pick the nearest safe fuse rating above the total current',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-006',
    type: 'multiple_choice',
    question:
      'Which of the following has the greatest current when it is operated at 200 V ?',
    options: [
      'a lamp with a resistance of $400 \\Omega$',
      'a rice-cooker with rating of 400 W at 200 V',
      'an electric iron with rating of 400 W at 220 V',
      'a hair-dryer with rating of 600 W at 200 V',
    ],
    answer: 'a hair-dryer with rating of 600 W at 200 V',
    explanation:
      'At the same operating voltage, the appliance with the smallest resistance gives the greatest current. The hair-dryer rated 600 W at 200 V has resistance $R=V^2/P=200^2/600\\approx66.7\\,\\Omega$, which is the smallest among the choices, so it draws the greatest current.',
    difficulty: 4,
    points: 25,
    hints: [
      'For the same voltage, greater current means smaller resistance',
      'Use $R=V^2/P$ for the rated appliances',
      'Then compare the resistances',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-007',
    type: 'multiple_choice',
    question:
      "Two heaters of rating '1 kW, 200 V' and '2 kW, 200 V' respectively are connected in series to a 200 V supply. What is the total power consumed by the heaters ?",
    options: ['3 kW', '1.5 kW', '1 kW', '0.67 kW'],
    answer: '0.67 kW',
    explanation:
      'From the ratings, the resistances are $R_1=200^2/1000=40\\,\\Omega$ and $R_2=200^2/2000=20\\,\\Omega$. In series, the total resistance is $60\\,\\Omega$. The total power is therefore $P=V^2/R=200^2/60\\approx667\\text{ W}=0.67\\text{ kW}$.',
    difficulty: 4,
    points: 25,
    hints: [
      'Convert each rating into a resistance first',
      'Add the two resistances in series',
      'Use $P=V^2/R$ for the whole circuit',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-008',
    type: 'multiple_choice',
    question:
      'In the figure shown, $S$ is a switch to turn on and off the electric fan. $X$, $Y$ and $Z$ are wires to be connected to the three terminals of a plug. How should $X$, $Y$ and $Z$ be connected to the three pins (E, L and N) of a given plug ?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'C',
    explanation:
      'The earth wire must connect to the metal case of the fan, so it is $Z$. The live wire must be the one that passes through the switch, so it is $Y$. The remaining wire $X$ is the neutral wire. Therefore the correct arrangement is C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Earth goes to the metal case',
      'Live should pass through the switch',
      'The remaining wire is neutral',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-008-question.png'],
  },
  {
    id: 'de-009',
    type: 'multiple_choice',
    question:
      'Electric bulbs $R$ are of rating \"40 W, 200 V\" and electric bulbs $S$ are of rating \"60 W, 200 V\". Which of the following combinations would produce the maximum brightness if connected to the same voltage ?',
    options: [
      '/physics/exercises/domestic-electricity/de-009-option-a.png',
      '/physics/exercises/domestic-electricity/de-009-option-b.png',
      '/physics/exercises/domestic-electricity/de-009-option-c.png',
      '/physics/exercises/domestic-electricity/de-009-option-d.png',
    ],
    answer: '/physics/exercises/domestic-electricity/de-009-option-c.png',
    explanation:
      'Using $R=V^2/P$, bulb $R$ has resistance $1000\\,\\Omega$ and bulb $S$ has resistance about $667\\,\\Omega$. To maximize total brightness under the same supply voltage, the overall equivalent resistance should be as small as possible, which happens when the lower-resistance bulbs are arranged to give the smallest combined resistance. That corresponds to option C.',
    difficulty: 4,
    points: 25,
    hints: [
      'Find the operating resistance of each bulb from its rating',
      'Maximum total brightness means maximum total power',
      'For the same supply voltage, that means the smallest equivalent resistance',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-010',
    type: 'multiple_choice',
    question:
      '$P$ and $Q$ are bulbs of rating \"40 W, 200 V\" while $R$ and $S$ are of rating \"60 W, 200 V\". Which circuit gives the maximum brightness? (Assume all circuits are connected to the same voltage.)',
    options: [
      '/physics/exercises/domestic-electricity/de-010-option-a.png',
      '/physics/exercises/domestic-electricity/de-010-option-b.png',
      '/physics/exercises/domestic-electricity/de-010-option-c.png',
      '/physics/exercises/domestic-electricity/de-010-option-d.png',
    ],
    answer: '/physics/exercises/domestic-electricity/de-010-option-a.png',
    explanation:
      'For the same supply voltage, the arrangement with the smallest equivalent resistance draws the largest current and therefore gives the greatest total power. The all-parallel arrangement provides the smallest equivalent resistance, so the circuit in option A gives the maximum brightness.',
    difficulty: 4,
    points: 25,
    hints: [
      'Maximum brightness means maximum total power from the source',
      'At fixed voltage, that means minimum equivalent resistance',
      'Among the options, the all-parallel arrangement is best',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-011',
    type: 'multiple_choice',
    question:
      'An electric heater of rating \"2000 W, 200 V\" and an electric cooker of rating \"500 W, 200 V\" are connected in parallel to a 200 V a.c. source. The total power of the two appliances is',
    options: ['500 W', '1500 W', '2000 W', '2500 W'],
    answer: '2500 W',
    explanation:
      'Both appliances are connected in parallel to their rated 200 V supply, so each works at its rated power. The total power is therefore simply $2000+500=2500\\text{ W}$.',
    difficulty: 2,
    points: 15,
    hints: [
      'Each appliance gets the full 200 V in parallel',
      'So each runs at its rated power',
      'Add the two powers directly',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-012',
    type: 'multiple_choice',
    question:
      "The circuit shows a lamp of rating '6 V, 9 W' connected in series with a resistor $R$ and a 9 V battery. What should be the resistance of $R$ if the lamp is to work as rated?",
    options: ['2 $\\Omega$', '3 $\\Omega$', '4 $\\Omega$', '5 $\\Omega$'],
    answer: '2 $\\Omega$',
    explanation:
      'The lamp should have 6 V across it, so the resistor must take the remaining $9-6=3\\text{ V}$. The rated current of the lamp is $I=P/V=9/6=1.5\\text{ A}$. Since the resistor is in series, it carries the same current. Therefore $R=V/I=3/1.5=2\\,\\Omega$.',
    difficulty: 3,
    points: 20,
    hints: [
      'The resistor must drop the extra 3 V',
      'Find the lamp current from its rating',
      'Use $R=V/I$ for the series resistor',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-012-question.png'],
  },
  {
    id: 'de-013',
    type: 'multiple_choice',
    question:
      'In the three-pin plug as shown, $X$, $Y$ and $Z$ are respectively connected to the',
    options: ['earth, neutral, live', 'earth, live, neutral', 'neutral, earth, live', 'neutral, live, earth'],
    answer: 'earth, live, neutral',
    explanation:
      'In a standard three-pin plug, the longest pin is the earth pin. Therefore $X$ is earth. The live connection goes to the live pin, so $Y$ is live, leaving $Z$ as neutral. That matches option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'The longest pin in a three-pin plug is earth',
      'The live wire goes to the live terminal',
      'The remaining connection is neutral',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-013-question.png'],
  },
  {
    id: 'de-014',
    type: 'multiple_choice',
    question:
      'A 3-pin plug is connected to a boiler of rating \"2000 W, 200 V\". Which statements are true? (1) A 5 A fuse should be used. (2) The fuse should be placed on the brown wire. (3) The yellow and green wire should be connected to the earth pin.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      'The working current is $I=P/V=2000/200=10\\text{ A}$, so a 5 A fuse is too small. The fuse must be on the live wire, which is the brown wire. The yellow-green wire is the earth wire and must go to the earth pin. Therefore only (2) and (3) are correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Find the operating current from the rating',
      'A fuse must not be rated below the normal operating current',
      'Brown is live and yellow-green is earth',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-015',
    type: 'multiple_choice',
    question:
      'A standard three-pin socket on the wall is shown in the figure. Which of the following is correct?',
    options: ['Pin (1) neutral, Pin (2) live, Pin (3) earth', 'Pin (1) neutral, Pin (2) earth, Pin (3) live', 'Pin (1) earth, Pin (2) live, Pin (3) neutral', 'Pin (1) earth, Pin (2) neutral, Pin (3) live'],
    answer: 'Pin (1) earth, Pin (2) neutral, Pin (3) live',
    explanation:
      'For the standard wall socket shown, the top terminal is earth, the left terminal is neutral and the right terminal is live. Therefore the correct labeling is Pin (1) earth, Pin (2) neutral and Pin (3) live, which is option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'The top socket is earth',
      'Neutral and live occupy the lower two terminals',
      'Match the standard left-right arrangement in the diagram',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-015-question.png'],
  },
  {
    id: 'de-016',
    type: 'multiple_choice',
    question:
      'The diagram shows the label attached to an electric appliance. How much electrical energy is supplied to the appliance in 2 hours?',
    options: ['2.0 kWh', '2.5 kWh', '3.0 kWh', '6.0 kWh'],
    answer: '3.0 kWh',
    explanation:
      'The appliance power is 1500 W, which is $1.5\\text{ kW}$. Electrical energy used in 2 hours is $E=Pt=(1.5)(2)=3.0\\text{ kWh}$.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert 1500 W into 1.5 kW',
      'Use $E=Pt$',
      'Multiply by 2 hours',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-016-question.png'],
  },
  {
    id: 'de-017',
    type: 'multiple_choice',
    question:
      'For safety, the correct way of connecting the fuse and switch to electrical appliances should be',
    options: [
      'fuse in live wire, switch in neutral wire',
      'fuse in earth wire, switch in live wire',
      'both in neutral wire',
      'both in live wire',
    ],
    answer: 'both in live wire',
    explanation:
      'Both the fuse and the switch should be placed in the live wire so that when either opens the circuit, the appliance is disconnected from the high-voltage live supply. This is the safe arrangement, so the answer is D.',
    difficulty: 2,
    points: 15,
    hints: [
      'The safety device should disconnect the live supply',
      'Putting them in neutral leaves the appliance connected to live',
      'Both belong in the live wire',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-018',
    type: 'multiple_choice',
    question:
      "Two light bulbs $A$ and $B$ of ratings '10 W, 6 V' and '5 W, 6 V' respectively are connected in series to a 6 V battery. Which statements are correct?",
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      'At the same rated voltage, resistance is inversely proportional to rated power, so bulb $A$ has the smaller resistance. In series, the current through both bulbs is the same. Since $P=I^2R$, the bulb with the smaller resistance gives less power in the series circuit, so $A$ is dimmer, not brighter. Therefore only (1) and (2) are correct.',
    difficulty: 4,
    points: 25,
    hints: [
      'At the same rated voltage, larger rated power means smaller resistance',
      'Series components carry the same current',
      'Then compare brightness using $P=I^2R$',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-019',
    type: 'multiple_choice',
    question:
      'Which of the following is NOT a correct unit for the corresponding physical quantity ?',
    options: ['charge - coulomb', 'current - ampere', 'resistance - ohm', 'voltage - joule'],
    answer: 'voltage - joule',
    explanation:
      'Charge is measured in coulomb, current in ampere, and resistance in ohm. Voltage is measured in volt, not joule. Therefore the incorrect pairing is voltage - joule.',
    difficulty: 1,
    points: 10,
    hints: [
      'Recall the SI unit of voltage',
      'Joule is the unit of energy',
      'Voltage uses volt',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-020',
    type: 'multiple_choice',
    question:
      'The diagram shows the label attached to a rice cooker. Which of the following statements are true when the cooker is working at its rated values?',
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(1) and (3) only',
    explanation:
      'The resistance is $R=V^2/P=220^2/500=96.8\\,\\Omega$, so (1) is true. The current is $I=P/V=500/220\\approx2.27\\text{ A}$, not 4.4 A, so (2) is false. In 2 hours, the energy used is $E=Pt=(0.5\\text{ kW})(2\\text{ h})=1\\text{ kWh}$, so (3) is true.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $R=V^2/P$ for statement (1)',
      'Use $I=P/V$ for statement (2)',
      'Use $E=Pt$ in kWh for statement (3)',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-020-question.png'],
  },
  {
    id: 'de-021',
    type: 'multiple_choice',
    question:
      'Which of the following diagrams correctly shows the connection of the wires of an iron to the pins of a plug? (L: Live, N: Neutral, E: Earth)',
    options: [
      '/physics/exercises/domestic-electricity/de-021-option-a.png',
      '/physics/exercises/domestic-electricity/de-021-option-b.png',
      '/physics/exercises/domestic-electricity/de-021-option-c.png',
      '/physics/exercises/domestic-electricity/de-021-option-d.png',
    ],
    answer: '/physics/exercises/domestic-electricity/de-021-option-a.png',
    explanation:
      'The switch must be connected in the live wire so the iron is cut off from the live supply when switched off. The earth wire must be connected to the metal case for safety. The correct plug connection is therefore the one shown in option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'The switch belongs in the live wire',
      'The earth wire goes to the metal body',
      'Choose the diagram that follows both safety rules',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-022',
    type: 'multiple_choice',
    question: 'Which of the following values is equivalent to one kilowatt hour ?',
    options: ['1000 W', '1000 J', '$3.6 \\times 10^6$ W', '$3.6 \\times 10^6$ J'],
    answer: '$3.6 \\times 10^6$ J',
    explanation:
      'A kilowatt-hour is a unit of energy. It equals $(1000\\text{ W})(3600\\text{ s})=3.6\\times10^6\\text{ J}$. Therefore the correct equivalent value is $3.6 \\times 10^6$ J.',
    difficulty: 2,
    points: 15,
    hints: [
      '1 kW = 1000 W',
      '1 hour = 3600 s',
      'Energy = power 闂?time',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-023',
    type: 'multiple_choice',
    question:
      'The diagram above shows a three-pin plug and the wires connected to it. To which of the pins should each of the wires $X$, $Y$ and $Z$ be connected ?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'A',
    explanation:
      'In a standard three-pin plug, the earth wire goes to the earth pin, the blue wire goes to neutral, and the brown wire goes to live. From the diagram, this gives $P\\to Z$, $Q\\to Y$, and $R\\to X$, so the correct option is A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Earth is green/yellow',
      'Neutral is blue',
      'Live is brown',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-023-question.png'],
  },
  {
    id: 'de-024',
    type: 'multiple_choice',
    question:
      'A Christmas tree is illuminated with four strings of light bulbs. Each string has ten identical light bulbs connected in series. If one light bulb suddenly burns out, which of the following will happen?',
    options: [
      'Only that light bulb will go out',
      'One light bulb in each string will go out',
      'One string of light bulbs will go out',
      'All of the light bulbs will go out',
    ],
    answer: 'One string of light bulbs will go out',
    explanation:
      'Each string is a separate series chain. If one bulb in a series chain burns out, that entire chain becomes open circuit and no current can flow through that string. The other strings still have complete circuits, so only one string goes out.',
    difficulty: 2,
    points: 15,
    hints: [
      'A burnt-out bulb in series makes an open circuit',
      'Only that series branch is interrupted',
      'The other strings are separate parallel branches',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-024-question.png'],
  },
  {
    id: 'de-025',
    type: 'multiple_choice',
    question:
      'The switch $S$ and the fuse of an iron are incorrectly fitted in the neutral wire as shown above. Which statement is correct ?',
    options: [
      'The iron will not operate even when $S$ is on',
      'The iron will still operate even when $S$ is off',
      'The iron will still operate, but if there is a high current the fuse will not blow',
      'The iron will still operate, but the heating element will remain at a high voltage even when $S$ is off',
    ],
    answer:
      'The iron will still operate, but the heating element will remain at a high voltage even when $S$ is off',
    explanation:
      'Putting the switch and fuse in the neutral wire is unsafe. The iron can still be disconnected in current, but the heating element remains connected to the live wire, so it can still be at a dangerous high potential even when the switch is off. That is why option D is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Safety devices should be in the live wire, not neutral',
      'Opening the neutral does not disconnect the live side',
      'So part of the appliance can still be at live potential',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-025-question.png'],
  },
  {
    id: 'de-026',
    type: 'multiple_choice',
    question: 'The kilowatt-hour is a unit of',
    options: ['charge', 'current', 'energy', 'power'],
    answer: 'energy',
    explanation:
      'A kilowatt-hour is power multiplied by time, so it is a unit of energy. Therefore the correct answer is energy.',
    difficulty: 1,
    points: 10,
    hints: [
      'kWh = kW 闂?h',
      'Power 闂?time gives energy',
      'So kWh is not a power unit',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-027',
    type: 'multiple_choice',
    question:
      'Which of the following statements about the earth wire in an electric iron are correct ?',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      'The earth wire should be connected to the metal body so fault current can safely go to earth instead of through a person. In normal operation, current returns through the neutral wire, so ideally no current flows in the earth wire. The earth wire is not a spare neutral return path, so (3) is false. Hence the correct answer is C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Earth is for safety fault current, not normal operation',
      'Normal return current goes through neutral',
      'Earth is not a backup working wire',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-028',
    type: 'multiple_choice',
    question:
      'An electric appliance is connected to a power supply of voltage $V$ by long connecting wires of total resistance $R$ as shown in the circuit. It is found that the current through the appliance is only $\\frac{1}{2}I_0$, where $I_0$ is the current required for the appliance to work at its rated value. Which change could increase the current through the appliance to $I_0$ ?',
    options: [
      'Voltage increases to $2V$, resistance unchanged',
      'Voltage increases to $2V$, wire resistance reduces to $R/2$',
      'Voltage unchanged, wire resistance increases to $2R$',
      'Voltage unchanged, wire resistance reduces to $R/2$',
    ],
    answer: 'Voltage increases to $2V$, resistance unchanged',
    explanation:
      'The current is only half the required value, so the wire resistance is effectively causing the supply to be shared equally between the appliance and the wires. That means the appliance resistance is equal to the total wire resistance. To double the current back to $I_0$ with the same total resistance, the supply voltage must be doubled. Therefore option A is the correct change.',
    difficulty: 4,
    points: 25,
    hints: [
      'If the current is halved, the total resistance has effectively doubled',
      'The wires are dropping as much voltage as the appliance',
      'Doubling the supply restores the required current',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-028-question.png'],
  },
  {
    id: 'de-029',
    type: 'multiple_choice',
    question:
      'The above diagram shows the main parts of an electric iron. In which of the following situations will the fuse blow when the switch is closed ?',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      'If insulation at point $X$ fails and the live wire touches the metal case before the heating element, a short circuit to earth is formed and the current becomes very large, so the fuse blows. At point $Y$, the current still passes through the heating element first, so there is no large short-circuit current. If the heating element is broken, the circuit is open and no current flows. Therefore only (1) causes the fuse to blow.',
    difficulty: 4,
    points: 25,
    hints: [
      'A fuse blows only when current becomes excessively large',
      'A short before the heating element can create that large current',
      'An open circuit gives zero current, not large current',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-029-question.png'],
  },
  {
    id: 'de-030',
    type: 'multiple_choice',
    question:
      'Which of the following diagrams shows the correct connection of the fuse and switch of an electric kettle to the mains supply? (L: live, N: neutral, E: earth)',
    options: [
      '/physics/exercises/domestic-electricity/de-030-option-a.png',
      '/physics/exercises/domestic-electricity/de-030-option-b.png',
      '/physics/exercises/domestic-electricity/de-030-option-c.png',
      '/physics/exercises/domestic-electricity/de-030-option-d.png',
    ],
    answer: '/physics/exercises/domestic-electricity/de-030-option-d.png',
    explanation:
      'For safety, both the fuse and the switch must be placed in the live wire. That way, switching off or blowing the fuse disconnects the appliance from the dangerous live supply. The correct diagram is therefore option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'The live wire must be interrupted by the safety components',
      'Neutral should not carry the fuse or main switch',
      'Choose the diagram with both on live',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-031',
    type: 'multiple_choice',
    question:
      "Two electric heaters $X$ and $Y$ are of ratings '110 V, 40 W' and '110 V, 80 W' respectively. Which of the deductions about the two heaters is/are correct ?",
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      'Using $R=V^2/P$, heater $X$ has twice the resistance of heater $Y$ because its rated power is half as large at the same rated voltage. If $X$ is connected to 220 V, its power would become four times as large, not merely 80 W. Since the two heaters have different resistances, they would not each get 110 V when connected in series to 220 V. Hence only (1) is correct.',
    difficulty: 4,
    points: 25,
    hints: [
      'For the same rated voltage, resistance is inversely proportional to power',
      'Power changes with the square of voltage for a fixed resistance',
      'Unequal resistances in series do not share voltage equally',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-032',
    type: 'multiple_choice',
    question:
      "Three identical lamps $L_1$, $L_2$ and $L_3$ of ratings '6 V, 12 W' are connected to a 6 V battery as shown in the figure. Which statement is correct?",
    options: [
      'The voltage across $L_2$ is 3 V',
      'The current passing through $L_1$ is 2 A',
      'The total power drawn from the battery is 12 W',
      'The total power dissipated in $L_1$ and $L_2$ is smaller than that in $L_3$',
    ],
    answer:
      'The total power dissipated in $L_1$ and $L_2$ is smaller than that in $L_3$',
    explanation:
      'Each lamp has resistance $R=V^2/P=6^2/12=3\\,\\Omega$. The two lamps in one branch combine to $1.5\\,\\Omega$, which is in series with the third lamp of $3\\,\\Omega$, giving a total of $4.5\\,\\Omega$. The battery current is $6/4.5\\approx1.33\\text{ A}$. This gives 4 V across $L_3$ and only 2 V across the pair $L_1$ and $L_2$, so the total power in $L_1$ and $L_2$ is less than the power in $L_3$.',
    difficulty: 4,
    points: 25,
    hints: [
      'Find the resistance of each lamp from its rating',
      'Reduce the parallel pair first',
      'Compare the power in each section after finding the current',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-032-question.png'],
  },
  {
    id: 'de-033',
    type: 'multiple_choice',
    question:
      'If the live and neutral wires of an electric kettle are mistakenly interchanged inside the plug as shown above, which of the following will happen ?',
    options: [
      'The kettle will not operate',
      'The fuse of the kettle will blow',
      'The metal case of the kettle will still stand at a high voltage even when the switch of the kettle is off',
      'The heating element of the kettle will still stand at a high voltage even when the switch of the kettle is off',
    ],
    answer:
      'The heating element of the kettle will still stand at a high voltage even when the switch of the kettle is off',
    explanation:
      'If live and neutral are reversed, the switch is effectively placed in the neutral wire instead of the live wire. The kettle can still work when switched on, but when switched off the heating element can remain connected to the live supply and so stay at high potential. Therefore option D is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Reversing live and neutral moves the switch onto the wrong side',
      'The appliance may still work normally when on',
      'But parts of it can remain live when switched off',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-033-question.png'],
  },
  {
    id: 'de-034',
    type: 'multiple_choice',
    question:
      "Three light bulbs $P$, $Q$ and $R$ of ratings '24 V, 80 W', '12 V, 80 W' and '12 V, 40 W' respectively are connected in parallel to a 12 V battery. Which bulb is the brightest, and which is the dimmest?",
    options: ['brightest $P$, dimmest $Q$', 'brightest $P$, dimmest $R$', 'brightest $Q$, dimmest $P$', 'brightest $Q$, dimmest $R$'],
    answer: 'brightest $Q$, dimmest $P$',
    explanation:
      'Bulb $Q$ is connected at its rated voltage, so it dissipates 80 W. Bulb $R$ is also at rated voltage and dissipates 40 W. Bulb $P$ is rated for 24 V but only receives 12 V, so its power becomes one quarter of 80 W, which is 20 W. Therefore $Q$ is brightest and $P$ is dimmest.',
    difficulty: 4,
    points: 25,
    hints: [
      'Bulbs in parallel all receive the same 12 V',
      'Compare that with each bulb闂傚倷鑳堕崑銊╁磿閺屻儲鍋?rated voltage',
      'Power at half rated voltage becomes one quarter for the same resistance',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-034-question.png'],
  },
  {
    id: 'de-035',
    type: 'multiple_choice',
    question:
      'The photograph shows a three-pin plug of an appliance. Which of the following is a function of pin $P$ ?',
    options: [
      'It prevents the appliance from being short-circuit',
      'It protects the user from getting an electric shock',
      'It provides a return path for the current',
      'It can break the circuit when the current flowing through the appliance is too large',
    ],
    answer: 'It protects the user from getting an electric shock',
    explanation:
      'Pin $P$ is the earth pin. It is connected to the metal case of the appliance so that if a live wire accidentally touches the case, the fault current goes safely to earth. This protects the user from electric shock, so option B is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'The top pin is earth',
      'Earth is a safety connection to the metal casing',
      'Its main function is user protection',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-035-question.png'],
  },
  {
    id: 'de-036',
    type: 'multiple_choice',
    question:
      'The figure shows the energy label of a washing machine. If the average working time per wash is 1.8 hours, estimate the average electric power consumed by the machine.',
    options: ['450 W', '534 W', '962 W', '1731 W'],
    answer: '534 W',
    explanation:
      'The label shows annual energy consumption of 250 kWh based on 260 washes per year. At 1.8 hours per wash, the total operating time is $260\\times1.8=468\\text{ h}$. Using $E=Pt$, the average power is $250/468\\approx0.534\\text{ kW}=534\\text{ W}$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Find the total annual operating time first',
      'Use $E=Pt$ with energy in kWh and time in hours',
      'Convert the final answer from kW to W',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-036-question.png'],
  },
  {
    id: 'de-037',
    type: 'multiple_choice',
    question:
      'One day, Donald used the following electrical appliances at home: an electric heater rated 2500 W for 30 minutes, a television rated 270 W for 5 hours, and a lamp rated 150 W for 8 hours. If their electricity costs are $C_1$, $C_2$ and $C_3$ respectively, which relationship is correct?',
    options: ['$C_1>C_2>C_3$', '$C_2>C_1>C_3$', '$C_2>C_3>C_1$', '$C_3>C_2>C_1$'],
    answer: '$C_2>C_1>C_3$',
    explanation:
      'Electricity cost is proportional to energy used. Heater: $2.5\\text{ kW}\\times0.5\\text{ h}=1.25\\text{ kWh}$. Television: $0.27\\text{ kW}\\times5\\text{ h}=1.35\\text{ kWh}$. Lamp: $0.15\\text{ kW}\\times8\\text{ h}=1.20\\text{ kWh}$. Therefore $C_2>C_1>C_3$.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert each power to kW',
      'Use energy = power x time',
      'The highest energy use gives the highest cost',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-037-question.png'],
  },
  {
    id: 'de-038',
    type: 'multiple_choice',
    question:
      'The following table shows three electrical appliances Clara used in a certain month: air-conditioner 1200 W for 250 h, television 250 W for 80 h, and computer 150 W for 60 h. Calculate the cost of electricity used. Note: 1 kWh costs $0.86.',
    options: ['$62.25', '$73.79', '$282.94', '$36.64'],
    answer: '$282.94',
    explanation:
      'Total electrical energy used is $1.2\\times250+0.25\\times80+0.15\\times60=329\\text{ kWh}$. The cost is $329\\times0.86=282.94$. Therefore the correct answer is $\\$282.94$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Convert each appliance rating from W to kW',
      'Add all energy consumptions in kWh',
      'Multiply the total by the tariff',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-038-question.png'],
  },
  {
    id: 'de-039',
    type: 'multiple_choice',
    question:
      "If a 15 A fuse is installed in the plug of an electric kettle rated '220 V, 900 W', which description is correct?",
    options: [
      'The kettle will not operate',
      'The kettle will be short-circuited',
      'The output power of the kettle will be increased',
      'The chance of the kettle being damaged by an excessive current will be increased',
    ],
    answer:
      'The chance of the kettle being damaged by an excessive current will be increased',
    explanation:
      'The rated current of the kettle is $I=P/V=900/220\\approx4.09\\text{ A}$. A 15 A fuse is too large for protection. The kettle still works normally, but if the current rises above the safe value and stays below 15 A, the fuse will not blow quickly enough. This increases the chance of damage.',
    difficulty: 2,
    points: 15,
    hints: [
      'Find the normal operating current first',
      'Compare it with the fuse rating',
      'An overrated fuse reduces protection',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-040',
    type: 'multiple_choice',
    question:
      'An electrical appliance is protected by a fuse in a domestic circuit. When the appliance is switched on, the fuse blows immediately. Which statements are possible reasons? (1) The resistance of the appliance is too large. (2) The appliance is short-circuited. (3) The rated value of the fuse is too small.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'If the appliance resistance is too large, the current would be too small, so the fuse would not blow. A short circuit causes a very large current and can blow the fuse immediately. A fuse rated too low can also blow under normal operating current. Therefore (2) and (3) only are correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'A fuse blows when current is too large',
      'Large resistance gives smaller current',
      'Consider both fault current and wrong fuse selection',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-041',
    type: 'multiple_choice',
    question:
      "Two light bulbs are marked '220 V, 50 W' and '220 V, 100 W' respectively. If they are connected in series to a 220 V mains supply, what is the current drawn from the mains supply?",
    options: ['0.15 A', '0.23 A', '0.46 A', '0.68 A'],
    answer: '0.15 A',
    explanation:
      "For the 50 W bulb, $R=V^2/P=220^2/50=968\\,\\Omega$. For the 100 W bulb, $R=220^2/100=484\\,\\Omega$. In series, the total resistance is $968+484=1452\\,\\Omega$. The current is $I=V/R=220/1452\\approx0.15\\text{ A}$.",
    difficulty: 3,
    points: 20,
    hints: [
      'Convert each rated bulb into a resistance first',
      'Add the resistances for series connection',
      'Use Ohm\'s law to get the current',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-042',
    type: 'multiple_choice',
    question:
      'The figure shows the label of a kilowatt-hour meter connected to a mains supply. When an appliance is switched on for 2 minutes, the circular disc rotates through 24 complete revolutions. What is the electric power consumed by the appliance?',
    options: ['900 W', '1200 W', '1800 W', '2400 W'],
    answer: '1200 W',
    explanation:
      'According to the label, 600 revolutions correspond to 1 kWh = 3 600 000 J. Therefore 24 revolutions correspond to $24\\times(3\\,600\\,000/600)=144\\,000\\text{ J}$. Over 2 minutes = 120 s, the power is $P=E/t=144\\,000/120=1200\\text{ W}$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Convert revolutions into total energy first',
      'Use the meter constant from the label',
      'Then divide by time in seconds',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-042-question.png'],
  },
  {
    id: 'de-043',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the resistors represent the heating elements in a rice cooker. The resistances of the elements are $5R$ and $R$ respectively. The cooker can be operated in two modes, namely, cooking and keeping warm. The power consumed by the cooker in the cooking mode is 600 W when $S$ is closed. What is the power consumed by the rice-cooker in the mode of keeping warm when $S$ is open?',
    options: ['100 W', '120 W', '150 W', '180 W'],
    answer: '100 W',
    explanation:
      'When $S$ is closed, the $5R$ resistor is shorted, so the equivalent resistance is $R$. When $S$ is open, the two resistors are in series and the equivalent resistance is $6R$. Since $P=V^2/R$, power is inversely proportional to resistance. Hence the warm mode power is $600\\times(R/6R)=100\\text{ W}$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Determine the equivalent resistance in each switch position',
      'Use the same supply voltage in both modes',
      'Apply inverse proportionality of power to resistance',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-043-question.png'],
  },
  {
    id: 'de-044',
    type: 'multiple_choice',
    question:
      'An electric appliance draws a current 2 A when it is operating at 220 V. Which is the best description of the current and voltage of each wire of the appliance when it is connected to a 220 V mains supply?',
    options: [
      'Live: 2 A, 220 V; Neutral: 1 A, 220 V; Earth: 1 A, 0 V',
      'Live: 2 A, 220 V; Neutral: 2 A, 220 V; Earth: 0 A, 0 V',
      'Live: 2 A, 220 V; Neutral: 2 A, 0 V; Earth: 0 A, 0 V',
      'Live: 2 A, 220 V; Neutral: 0 A, 0 V; Earth: 0 A, 0 V',
    ],
    answer: 'Live: 2 A, 220 V; Neutral: 2 A, 0 V; Earth: 0 A, 0 V',
    explanation:
      'In normal operation, the same 2 A that leaves through the live wire returns through the neutral wire. The live wire is at mains potential, about 220 V, while the neutral wire is at approximately 0 V. No current flows through the earth wire when the appliance is working properly, and it is also at 0 V. Therefore option C is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Current out through live equals current back through neutral',
      'Earth carries no current in normal operation',
      'Neutral is approximately 0 V in domestic wiring',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-045',
    type: 'multiple_choice',
    question:
      "A household circuit breaker is marked '220 V, 15 A'. An electric iron rated '220 V, 1100 W' and a cooker rated '220 V, 550 W' are connected in parallel to the mains socket. How many light bulbs rated '220 V, 100 W' at most can still be connected in parallel to the mains without triggering the circuit breaker?",
    options: ['12', '16', '17', '20'],
    answer: '16',
    explanation:
      'The maximum power available before tripping is $VI=220\\times15=3300\\text{ W}$. The iron and cooker already use $1100+550=1650\\text{ W}$. This leaves $3300-1650=1650\\text{ W}$ for the 100 W bulbs, so at most $1650/100=16.5$ bulbs. The maximum whole number is 16.',
    difficulty: 3,
    points: 20,
    hints: [
      'Convert the breaker rating into maximum power first',
      'Subtract the power already used',
      'Take the largest whole number of extra bulbs',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-046',
    type: 'multiple_choice',
    question:
      "A lighting system consists of 3 bulbs, each rated '220 V 30 W'. These three bulbs should be connected in parallel to the 220 V mains supply. However, the bulbs are wrongly connected in series to the mains supply. What is the power dissipation of the wrongly connected system?",
    options: ['3.33 W', '10 W', '30 W', '90 W'],
    answer: '10 W',
    explanation:
      'The resistance of each bulb is $R=V^2/P=220^2/30\\approx1613\\,\\Omega$. With three identical bulbs in series, the total resistance is about $3\\times1613=4840\\,\\Omega$. The total power dissipated is $P=V^2/R=220^2/4840\\approx10\\text{ W}$.',
    difficulty: 3,
    points: 20,
    hints: [
      'First find the resistance of one bulb from its rating',
      'Add the three bulb resistances in series',
      'Use $P=V^2/R$ for the total system',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-047',
    type: 'multiple_choice',
    question:
      'Two identical bulbs, $X$ and $Y$, are connected in parallel to the mains. The current passing through $X$ is 0.4 A. What is the energy consumed by the two bulbs in 5 hours?',
    options: ['0.44 kWh', '0.88 kWh', '440 kWh', '880 kWh'],
    answer: '0.88 kWh',
    explanation:
      'The bulbs are identical and connected in parallel, so each takes the same current. Total current from the mains is $0.4\\times2=0.8\\text{ A}$. Total power is $P=VI=(220)(0.8)=176\\text{ W}=0.176\\text{ kW}$. In 5 hours, the energy consumed is $E=Pt=0.176\\times5=0.88\\text{ kWh}$.',
    difficulty: 2,
    points: 15,
    hints: [
      'Parallel identical bulbs draw equal current',
      'Find total power using mains voltage and total current',
      'Convert power to kW before multiplying by time in hours',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-047-question.png'],
  },
  {
    id: 'de-048',
    type: 'multiple_choice',
    question:
      'The power ratings and resistances of two light bulbs are "24 W, 6 $\\Omega$" and "9 W, 4 $\\Omega$" respectively. If these two light bulbs are connected in parallel to a power supply, what is the maximum current drawn from the power supply so that both light bulbs work within the rated power?',
    options: ['2.0 A', '2.5 A', '3.5 A', '4.8 A'],
    answer: '2.5 A',
    explanation:
      'For the 6 $\\Omega$ bulb, $R=V_r^2/P_r$ gives $6=V_r^2/24$, so $V_r=12\\text{ V}$. For the 4 $\\Omega$ bulb, $4=V_r^2/9$, so $V_r=6\\text{ V}$. In parallel, both bulbs must have the same supply voltage, so the maximum safe voltage is 6 V. The equivalent resistance is $R=(6\\times4)/(6+4)=2.4\\,\\Omega$, so the total current is $I=V/R=6/2.4=2.5\\text{ A}$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Find the rated voltage of each bulb from its power and resistance',
      'In parallel, both bulbs share the same voltage',
      'The lower safe rated voltage limits the supply voltage',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-049',
    type: 'multiple_choice',
    question:
      'Which of the following is the correct connection of $X$, $Y$ and $Z$ to the mains?',
    options: [
      '$X$ live, $Y$ earth, $Z$ neutral',
      '$X$ live, $Y$ neutral, $Z$ earth',
      '$X$ neutral, $Y$ earth, $Z$ live',
      '$X$ neutral, $Y$ live, $Z$ earth',
    ],
    answer: '$X$ neutral, $Y$ live, $Z$ earth',
    explanation:
      'The live wire must pass through the switch and fuse, so $Y$ is live. The return path is the neutral wire, so $X$ is neutral. The earth wire is connected to the metal case for safety, so $Z$ is earth. Therefore option D is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'The switch and fuse should be on the live wire',
      'Neutral completes the circuit',
      'Earth goes to the metal casing',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-049-question.png'],
  },
  {
    id: 'de-050',
    type: 'multiple_choice',
    question:
      'A mains heater has two identical heating elements of the same resistance $R$. When $S_1$ and $S_2$ are closed and $S_3$ is open, the power of the heater is $P$. What is the power of the heater when $S_1$ and $S_2$ are open and $S_3$ is closed?',
    options: ['0.25 P', '0.5 P', '2 P', '4 P'],
    answer: '0.25 P',
    explanation:
      'With $S_1$ and $S_2$ closed and $S_3$ open, the two heating elements are in parallel, so the equivalent resistance is $R/2$. With $S_1$ and $S_2$ open and $S_3$ closed, they are in series, so the equivalent resistance is $2R$. The resistance has increased by a factor of 4. Since $P=V^2/R$, power is inversely proportional to resistance, so the new power is $P/4=0.25P$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Work out the equivalent resistance in each switch setting',
      'Compare series and parallel for two identical resistors',
      'Use inverse proportionality of power to resistance at fixed voltage',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-050-question.png'],
  },
  {
    id: 'de-051',
    type: 'multiple_choice',
    question:
      'The photo below shows the back of a microwave oven. Which of the following statements is/are correct? (1) The current flowing through the microwave oven is about 3.4 A. (2) Around 65% of electrical energy is converted into energy carried by microwave. (3) The wavelength of the microwave emitted is about 0.12 m.',
    options: [
      '(1) only',
      '(2) only',
      '(1) and (3) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'Using $P=VI$, the current is $I=1150/220\\approx5.23\\text{ A}$, so statement (1) is false. The microwave output is 750 W from an electrical input of 1150 W, so the efficiency is about $750/1150\\approx65\\%$, making (2) true. The wavelength is $\\lambda=v/f=(3\\times10^8)/(2.45\\times10^9)\\approx0.12\\text{ m}$, so (3) is also true.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use input power and mains voltage for the current',
      'Efficiency is useful output divided by input',
      'Use $\\lambda=v/f$ for the microwave wavelength',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-051-question.png'],
  },
  {
    id: 'de-052',
    type: 'multiple_choice',
    question:
      'In the figure above, the kettle is wired incorrectly. Which statement is correct when point $P$ is accidentally connected to the metal case?',
    options: [
      'The kettle will still operate at its rated value when $S$ is closed',
      'The fuse will blow when $S$ is closed',
      'The heating element will burn out when $S$ is closed',
      'A current will flow through the live wire even when $S$ is open',
    ],
    answer: 'A current will flow through the live wire even when $S$ is open',
    explanation:
      'Because of the wrong wiring, connecting point $P$ to the metal case creates a fault path from live to earth. Even when the switch is open, current can still flow from the live wire to the metal case and then to the earth wire. Therefore option D is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Think about where the live wire is still connected',
      'A metal case connected to a live point can create an earth-fault path',
      'The switch is on the wrong side in this faulty arrangement',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-052-question.png'],
  },
  {
    id: 'de-053',
    type: 'multiple_choice',
    question:
      'In the circuit above, the rating of the bulb is "6 V, 12 W". Find the resistance of $R$ so that the bulb will work at its rated value.',
    options: ['2 $\\Omega$', '3 $\\Omega$', '4 $\\Omega$', '6 $\\Omega$'],
    answer: '3 $\\Omega$',
    explanation:
      'The rated current of the bulb is $I=P/V=12/6=2\\text{ A}$. The battery is 9 V, so the remaining voltage across the parallel resistor combination is $9-6=3\\text{ V}$. The equivalent resistance of that part must therefore be $R_{eq}=V/I=3/2=1.5\\,\\Omega$. Since the two equal resistors are in parallel, $R/2=1.5$, so $R=3\\,\\Omega$.',
    difficulty: 3,
    points: 20,
    hints: [
      'First find the rated current of the bulb',
      'Work out the voltage left for the resistor network',
      'Use the equivalent resistance of two equal resistors in parallel',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-053-question.png'],
  },
  {
    id: 'de-054',
    type: 'multiple_choice',
    question:
      'As shown in the figure, a 2 W light bulb is immersed into 50 g of water. The bulb is operating at its rated value. After 10 minutes, the temperature of the water increases by $4.5^{\\circ}\\text{C}$. Estimate the amount of light emitted during the 10 minutes. Given: specific heat capacity of water is about $4200\\text{ J kg}^{-1}\\,^{\\circ}\\text{C}^{-1}$.',
    options: ['255 J', '690 J', '945 J', '1200 J'],
    answer: '255 J',
    explanation:
      'Electrical energy supplied to the bulb is $E=Pt=(2)(10\\times60)=1200\\text{ J}$. The heat energy absorbed by the water is $Q=mc\\Delta T=(0.050)(4200)(4.5)=945\\text{ J}$. Therefore the light energy emitted is $1200-945=255\\text{ J}$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Calculate the total electrical energy supplied first',
      'Then find the heat gained by the water',
      'The difference is the light energy emitted',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-054-question.png'],
  },
  {
    id: 'de-055',
    type: 'multiple_choice',
    question:
      'Torch bulbs marked "3 V, 1.5 W" are to be used in a circuit with a 6 V battery. What should be the number of bulbs connected if the steady current drawn from the battery is to be 2 A and each bulb gives normal brightness?',
    options: ['2', '3', '4', '8'],
    answer: '8',
    explanation:
      'The total power given by the battery is $P=VI=(6)(2)=12\\text{ W}$. For each bulb to glow normally, each must dissipate 1.5 W. Therefore the total number of bulbs required is $12/1.5=8$.',
    difficulty: 2,
    points: 15,
    hints: [
      'Find the total power from the battery',
      'Each bulb must operate at its rated power',
      'Divide total available power by power per bulb',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-056',
    type: 'multiple_choice',
    question:
      'A set of Christmas tree lights consists of 20 light bulbs in series connected to a 200 V supply. Each light bulb has a rating of "10 V, 5 W". When one bulb burns out, Jenny buys a replacement. Although the new bulb is marked 5 W, it looks dimmer than the other bulbs when the lights are on. Which of the following is a possible reason? (1) The supply voltage has dropped below 200 V. (2) The current through the circuit is less than 0.5 A. (3) The rated voltage of the new bulb is less than 10 V.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(3) only',
    explanation:
      'If the supply voltage dropped or the circuit current became smaller, all bulbs in the series string would become dimmer, not just one. If the new bulb has the same rated power but a lower rated voltage, then by $R=V^2/P$ it has a smaller resistance. In series the same current flows through all bulbs, and since $P=I^2R$, the new bulb dissipates less power and appears dimmer. Therefore only (3) is possible.',
    difficulty: 3,
    points: 20,
    hints: [
      'In series, all bulbs carry the same current',
      'A change affecting the whole circuit would affect all bulbs',
      'Compare resistance using $R=V^2/P$',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-057',
    type: 'multiple_choice',
    question:
      'In a household circuit, as more lamps are switched on, which statements are correct? (1) The equivalent resistance of the whole circuit increases. (2) The total power consumption increases. (3) The total current drawn increases.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(2) and (3) only',
    explanation:
      'Household lamps are connected in parallel. Adding more lamps in parallel decreases the equivalent resistance, not increases it. With a lower equivalent resistance at the same mains voltage, the total current drawn increases. Since total power is $P=VI$, the total power consumption also increases. Therefore (2) and (3) only are correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Domestic lamps are connected in parallel',
      'Adding more parallel branches reduces equivalent resistance',
      'At fixed voltage, larger current means larger total power',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-058',
    type: 'multiple_choice',
    question:
      'Which statements concerning the fuse in an electrical appliance are correct? (1) A fuse is made of a metal with low melting point. (2) If the fuse in an electrical appliance is blown, it should not be replaced by a piece of copper wire. (3) If copper is used to replace the blown fuse, it will cause a short circuit of the appliance as copper has low resistance.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (2) only',
    explanation:
      'A fuse must melt easily when excess current flows, so it is made of a low-melting-point metal. A blown fuse should not be replaced by copper wire because copper has a high melting point and will not provide proper protection. However, replacing a fuse with copper wire does not itself create a short circuit; it simply removes the intended safety protection. So (1) and (2) only are correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'A fuse is a safety device designed to melt',
      'Copper does not melt easily enough for fuse protection',
      'Lack of protection is not the same as a short circuit',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-059',
    type: 'multiple_choice',
    question:
      'Small light bulbs of rating "12 V, 6 W" are to be used in a circuit. The voltage of the power supply is 24 V and the current drawn from the supply is 2 A. What is the number of light bulbs connected in the circuit so that each light bulb is under normal rating?',
    options: ['2', '4', '8', '16'],
    answer: '8',
    explanation:
      'Each bulb is rated at 12 V, so with a 24 V supply there must be 2 bulbs in series in each branch. Each bulb draws a rated current of $I=P/V=6/12=0.5\\text{ A}$, so each series branch also draws 0.5 A. Since the total supply current is 2 A, the number of parallel branches is $2/0.5=4$. Hence the total number of bulbs is $2\\times4=8$.',
    difficulty: 3,
    points: 20,
    hints: [
      'First determine how many bulbs must share the 24 V supply in series',
      'Then find the rated current of one bulb',
      'Use the total supply current to find the number of parallel branches',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-060',
    type: 'multiple_choice',
    question:
      'Which statements concerning two light bulbs with rated values "200 V, 100 W" and "200 V, 40 W" are correct? (1) The energy dissipated by the 100 W light bulb is greater than that of the 40 W light bulb when they work at their rated values. (2) The current flowing through the 100 W light bulb is greater than that of the 40 W light bulb when they work at their rated values. (3) The resistance of the 100 W light bulb is greater than that of the 40 W light bulb when they work at their rated values.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (2) only',
    explanation:
      'At rated values, the 100 W bulb dissipates more power than the 40 W bulb, so it gives out more energy per second. Using $P=VI$, both bulbs have the same rated voltage, so the bulb with greater power must draw greater current. Using $R=V^2/P$, the bulb with greater power has smaller resistance, so statement (3) is false. Therefore (1) and (2) only are correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'At the same rated voltage, higher power means higher current',
      'Power is energy dissipated per second',
      'Use $R=V^2/P$ to compare resistance',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-061',
    type: 'multiple_choice',
    question:
      'Which of the following concerning the household circuit is/are correct? (1) Fuse should be installed in the live wire of an electrical appliance. (2) Switch should be installed in the neutral wire of an electrical appliance. (3) Current always flows from the live wire through the appliance to the neutral wire.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) only',
    explanation:
      'The fuse must be in the live wire so that the appliance is disconnected from high voltage when the fuse blows. The switch should also be in the live wire, not the neutral wire, so statement (2) is false. Household mains is alternating current, so current reverses direction periodically and does not always flow from live to neutral in one fixed direction. Therefore only (1) is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Both fuse and switch should isolate the appliance from the live supply',
      'Do not put the switch in the neutral wire',
      'Mains supply is AC, not DC',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-062',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning two light bulbs with rated values "200 V, 100 W" and "200 V, 40 W" is/are correct? (1) The resistance of the 100 W light bulb is greater than that of the 40 W light bulb. (2) The current flowing through the 100 W light bulb is greater than that of the 40 W light bulb when they are connected in series. (3) The power dissipated by the 100 W light bulb is smaller than that of the 40 W light bulb when they are connected in series.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(3) only',
    explanation:
      'From $R=V^2/P$, the 100 W bulb has smaller resistance than the 40 W bulb, so statement (1) is false. When connected in series, the same current flows through both bulbs, so statement (2) is false. In series with the same current, power is $P=I^2R$, so the bulb with smaller resistance dissipates less power. Therefore the 100 W bulb dissipates less power than the 40 W bulb in series, making only (3) correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use rated values first to compare resistances',
      'Series components carry the same current',
      'At fixed current, power is proportional to resistance',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-063',
    type: 'multiple_choice',
    question:
      "If a 15 A fuse is installed in the plug of an electric kettle of rating value '220 V, 900 W', state what happens when the kettle is plugged in and switched on.",
    options: [
      'The kettle will not operate',
      'The kettle will be short-circuited',
      'The output power of the kettle will be increased',
      'The chance of the kettle being damaged by an excessive current will be increased',
    ],
    answer:
      'The chance of the kettle being damaged by an excessive current will be increased',
    explanation:
      'The rated current of the kettle is $I=P/V=900/220\\approx4.09\\text{ A}$. A 15 A fuse is too large. The kettle still operates normally and is not short-circuited, but if the current rises above the safe operating value and remains below 15 A, the fuse will not blow quickly enough. This increases the chance of damage.',
    difficulty: 2,
    points: 15,
    hints: [
      'Find the rated current of the kettle first',
      'Compare it with the fuse rating',
      'An overrated fuse gives poor protection',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-064',
    type: 'multiple_choice',
    question:
      'The table shows three electrical appliances which Clara used in a certain month: air-conditioner 1200 W for 250 h, television 250 W for 80 h, and computer 150 W for 60 h. Calculate the cost of electricity used. Note: 1 kWh of electricity costs $0.86.',
    options: ['$62.25', '$73.79', '$282.94', '$536.64'],
    answer: '$282.94',
    explanation:
      'Total electrical energy used is $1.2\\times250+0.25\\times80+0.15\\times60=329\\text{ kWh}$. Therefore the cost is $329\\times0.86=282.94$. So the correct answer is $\\$282.94$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Convert each appliance power into kW',
      'Add the total energy in kWh',
      'Multiply by the tariff',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-064-question.png'],
  },
  {
    id: 'de-065',
    type: 'multiple_choice',
    question:
      'The figure above shows the main parts of an electric iron. In which of the following situations will the fuse blow when the switch is closed?',
    options: [
      'The heating element is broken and becomes an open circuit',
      'The earth wire is worn out and becomes disconnected',
      'The insulation at contact point $X$ is worn out so that the wire touches the metal case',
      'The insulation at contact point $Y$ is worn out so that the wire touches the metal case',
    ],
    answer:
      'The insulation at contact point $X$ is worn out so that the wire touches the metal case',
    explanation:
      'If the insulation at point $X$ fails, closing the switch lets current flow directly from the live wire through the metal case to earth. This creates a very low-resistance fault path, so the current becomes very large and the fuse blows. The other cases do not create the same large current through the fuse.',
    difficulty: 3,
    points: 20,
    hints: [
      'A fuse blows when fault current is very large',
      'A live-to-earth fault gives a low-resistance path',
      'An open circuit does not produce large current',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-065-question.png'],
  },
  {
    id: 'de-066',
    type: 'multiple_choice',
    question:
      'The figure shows a simple domestic circuit for an electric iron. The fuse will blow when which of the following points are short-circuited? (1) $X$ and $Y$ (2) $Y$ and $Z$ (3) $X$ and $Z$',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) and (2) only',
    explanation:
      'If $X$ and $Y$ are short-circuited, or if $Y$ and $Z$ are short-circuited, current bypasses the resistor and becomes very large, so the fuse blows. If $X$ and $Z$ are short-circuited, current still has to pass through the resistor, so the current does not become excessively large. Therefore (1) and (2) only are correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'The fuse blows when the current becomes too large',
      'A short path that bypasses the resistor increases current sharply',
      'Check which short circuits still leave resistance in the path',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-066-question.png'],
  },
  {
    id: 'de-067',
    type: 'multiple_choice',
    question:
      'Which of the following domestic electrical appliances consumes a power close to 1 kW in normal working conditions?',
    options: [
      'an electric fan',
      'a microwave oven',
      'a fluorescent lamp',
      'a TV set',
    ],
    answer: 'a microwave oven',
    explanation:
      'A microwave oven typically operates at about 1 kW. The other appliances listed, such as an electric fan, fluorescent lamp, and television set, usually consume much less than 1 kW in normal use. Therefore the correct answer is the microwave oven.',
    difficulty: 1,
    points: 10,
    hints: [
      'Think of typical household power ratings',
      'Heating and cooking appliances usually use higher power',
      'Fans, lamps and TVs are much lower',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-068',
    type: 'multiple_choice',
    question:
      'Which statement is NOT a reason why mains sockets at home are connected in parallel instead of in series?',
    options: [
      'Electrical appliances connected to different sockets can be switched on or off independently',
      'Voltage supplied to each socket is fixed and all electrical appliances can operate at their rated voltage',
      'The current supplied can be reduced and thinner cables can then be used',
      'When an electrical appliance breaks down and becomes an open circuit, other appliances can still work normally',
    ],
    answer:
      'The current supplied can be reduced and thinner cables can then be used',
    explanation:
      'In a parallel circuit, appliances operate independently, each socket gets the full supply voltage, and one appliance failing open-circuit does not stop the others working. However, parallel connection does not reduce the total current supplied; in fact the total current is the sum of branch currents. So that statement is not a valid reason.',
    difficulty: 2,
    points: 15,
    hints: [
      'Parallel branches share the same voltage',
      'Parallel connection allows independent operation',
      'Total current in parallel is the sum of branch currents',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-069',
    type: 'multiple_choice',
    question:
      'An electric iron of 1800 W sold in Hong Kong (220 V 50 Hz) is connected to a 110 V 60 Hz mains socket in another country. How does its performance compare on the same ironing setting?',
    options: [
      'The electric iron does not work because the a.c. supply is 60 Hz instead of 50 Hz',
      'The electric iron is as hot as it is used in Hong Kong',
      'The electric iron is hotter than when it is used in Hong Kong',
      'The electric iron is colder than when it is used in Hong Kong',
    ],
    answer: 'The electric iron is colder than when it is used in Hong Kong',
    explanation:
      'For a heating appliance with the same resistance, $P=V^2/R$. The supply voltage is reduced from 220 V to 110 V, so the power becomes much smaller. The change from 50 Hz to 60 Hz does not stop a simple resistive heater from working. Since the power is lower, the iron becomes colder.',
    difficulty: 2,
    points: 15,
    hints: [
      'An electric iron is mainly a resistive heater',
      'Power of a resistor depends on $V^2$',
      'Lower voltage means lower heating power',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-070',
    type: 'multiple_choice',
    question:
      'A television set in stand-by mode consumes 1.5 W. If it is in this mode for 16 hours a day, estimate the carbon dioxide ($CO_2$) emission due to the electricity consumed in stand-by mode in a 30-day month. Given: 1 kWh of electricity consumed corresponds to 0.8 kg $CO_2$ emission from the power station.',
    options: ['0.576 kg', '0.720 kg', '576 kg', '720 kg'],
    answer: '0.576 kg',
    explanation:
      'The energy used is $E=Pt=(0.0015\\text{ kW})\\times(16\\times30\\text{ h})=0.72\\text{ kWh}$. The corresponding carbon dioxide emission is $0.72\\times0.8=0.576\\text{ kg}$.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert 1.5 W into kW first',
      'Multiply by the total standby time in hours',
      'Then use the given emission factor',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-071',
    type: 'multiple_choice',
    question:
      'Which of the following statements about the use of a fuse is correct?',
    options: [
      'A fuse should be installed in the neutral wire',
      'A fuse is not required in an electrical appliance with double insulation',
      "A 5 A fuse is suitable for a heater of rating '220 V, 1500 W'",
      'The melting point of a fuse should be lower than that of copper',
    ],
    answer: 'The melting point of a fuse should be lower than that of copper',
    explanation:
      'A fuse must melt when the current exceeds a safe value, so it is made of a material with a lower melting point than copper. It should be installed in the live wire, and even double-insulated appliances still need overcurrent protection. For a 1500 W, 220 V heater, the normal current is about $1500/220\\approx6.82\\text{ A}$, so a 5 A fuse would blow in normal use.',
    difficulty: 2,
    points: 15,
    hints: [
      'A fuse is an overcurrent protection device',
      'It must melt more easily than copper',
      'Check the heater current against the fuse rating',
    ],
    sectionId: 'domestic-electricity',
  },
  {
    id: 'de-072',
    type: 'multiple_choice',
    question:
      'Three identical resistors are arranged as shown. The rated power of each resistor is 12 W. If no resistor exceeds its rated power, what is the maximum power dissipation in such an arrangement?',
    options: ['16 W', '18 W', '20 W', '24 W'],
    answer: '18 W',
    explanation:
      'The arrangement is such that the voltage across $R_1$ equals the sum of the voltages across $R_2$ and $R_3$. To maximize total power without exceeding ratings, let $R_1$ operate at its rated power of 12 W. Since the voltage across each of $R_2$ and $R_3$ is half that across $R_1$, and $P\\propto V^2$ for identical resistors, each of $R_2$ and $R_3$ dissipates $12\\times(1/2)^2=3\\text{ W}$. Thus the maximum total power is $12+3+3=18\\text{ W}$.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the resistor with the largest voltage drop as the limiting one',
      'Identical resistors have power proportional to $V^2$',
      'Sum the three resistor powers at the limit',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-072-question.png'],
  },
  {
    id: 'de-073',
    type: 'multiple_choice',
    question:
      'The figure shows part of a domestic lighting circuit in which the bulb $L$ does not light up when switch $S$ is closed. The circuit is then checked with switch $S$ closed. Using a voltage tester to touch points $b$ and $c$ in turn, the tester indicates that both points are at high voltage. When touching points $a$ and $d$ in turn, the tester indicates only point $a$ is at high voltage. Which of the following can be a reason for the fault?',
    options: [
      'The switch $S$ has been damaged',
      'The filament of bulb $L$ has been burnt out and becomes an open circuit',
      'There is a short circuit between $a$ and $d$',
      'There is an open circuit between $c$ and $d$',
    ],
    answer: 'There is an open circuit between $c$ and $d$',
    explanation:
      'Point $a$ is at high voltage, so the live supply reaches the circuit. Points $b$ and $c$ are also at high voltage, so the fault must be further downstream than $c$. Point $d$ is not at high voltage, which means the live connection does not continue from $c$ to $d$. This is consistent with an open circuit between $c$ and $d$. Therefore option D is the correct explanation.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the voltage tester results to track where the live connection reaches',
      'A point at high voltage is still connected to the live side',
      'The break must lie between the last live point and the first non-live point',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-073-question.png'],
  },
  {
    id: 'de-074',
    type: 'multiple_choice',
    question:
      "The battery shown has a capacity of 1100 mA h. How much energy is delivered when the battery operates normally at a current of 250 mA for one hour? Assume that the battery's operating voltage remains at 3.7 V during that period.",
    options: [
      '$(3.7 \\times \\frac{250}{1000} \\times 3600)\\ \\mathrm{J}$',
      '$(3.7 \\times \\frac{1100}{1000} \\times 3600)\\ \\mathrm{J}$',
      '$(3.7 \\times \\frac{250}{1000} \\times 1)\\ \\mathrm{J}$',
      '$(3.7 \\times \\frac{1100}{1000} \\times 1)\\ \\mathrm{J}$',
    ],
    answer: '$(3.7 \\times \\frac{250}{1000} \\times 3600)\\ \\mathrm{J}$',
    explanation:
      'The energy delivered in one hour is found from $E=VIt$. Here $V=3.7\\text{ V}$, $I=250\\text{ mA}=250/1000\\text{ A}$, and $t=1\\text{ h}=3600\\text{ s}$. So $E=(3.7)(250/1000)(3600)\\text{ J}$. The capacity 1100 mA h is not needed because the question only asks for the energy delivered in this one-hour operating period.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use the actual operating current, not the full capacity',
      'Convert mA to A',
      'Convert 1 hour into 3600 seconds before using $E=VIt$',
    ],
    sectionId: 'domestic-electricity',
    imagePaths: ['/physics/exercises/domestic-electricity/de-074-question.png'],
  },
  {
    id: 'mfld-001',
    type: 'multiple_choice',
    question:
      'Which of the following will be deflected by a magnetic field?\n\n(1) Electromagnetic waves\n(2) A beam of electrons\n(3) A beam of protons',
    options: [
      '(1) only',
      '(1) and (2) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(2) and (3) only',
    explanation:
      'A magnetic field exerts force on moving charged particles. Electrons and protons are charged, so their beams can be deflected. Electromagnetic waves are not charged particle beams, so they are not deflected in this context. Therefore only (2) and (3) are correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Magnetic force acts on moving charges',
      'Electrons and protons are charged particles',
      'Electromagnetic waves are not particle beams with charge',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-002',
    type: 'multiple_choice',
    question:
      'The figure shows two iron rods A and B suspended by two light strings so that they are close together. Their lower ends are inside a solenoid. When a current flows through the solenoid, what will happen to A and B?',
    options: [
      'A moves to the left; B moves to the right',
      'A moves to the right; B moves to the left',
      'A moves to the right; B moves to the right',
      'A moves to the left; B moves to the left',
    ],
    answer: 'A moves to the left; B moves to the right',
    explanation:
      'When current flows through the solenoid, a magnetic field is produced and both iron rods become magnetized. The two rods acquire the same pole arrangement at corresponding ends, so the nearby ends are like poles. Like poles repel, so the rods move away from each other. Hence A moves left and B moves right.',
    difficulty: 2,
    points: 15,
    hints: [
      'Iron rods inside a magnetic field become magnetized',
      'Like magnetic poles repel',
      'The two rods move away from each other',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-002-question.png'],
  },
  {
    id: 'mfld-018',
    type: 'multiple_choice',
    question:
      'Two compasses P and Q are placed near the poles of an electromagnet as shown. In which of the following diagrams are the north poles of the compass needles pointing in the correct directions?',
    options: [
      '/physics/exercises/magnetic-field/mfld-018-option-a.png',
      '/physics/exercises/magnetic-field/mfld-018-option-b.png',
      '/physics/exercises/magnetic-field/mfld-018-option-c.png',
      '/physics/exercises/magnetic-field/mfld-018-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-018-option-d.png',
    explanation:
      'Using the right-hand grip rule for the current in the coil, the pole near P is the north pole and the pole near Q is the south pole. A compass north pole points away from a north pole and toward a south pole. Therefore the correct diagram is the one with the needle at P pointing upward and the needle at Q pointing downward.',
    difficulty: 2,
    points: 15,
    hints: [
      'First identify the poles of the electromagnet',
      'A compass north pole points along the magnetic field direction',
      'Outside a magnet, field lines go from north to south',
    ],
    sectionId: 'magnetic-field',
    imagePaths: [
      '/physics/exercises/magnetic-field/mfld-018-question.png',
      '/physics/exercises/magnetic-field/mfld-018-question-2.png',
    ],
  },
  {
    id: 'mfld-019',
    type: 'multiple_choice',
    question:
      'David wants to design a battery-powered toy car. Which of the following circuits should he use?',
    options: [
      '/physics/exercises/magnetic-field/mfld-019-option-a.png',
      '/physics/exercises/magnetic-field/mfld-019-option-b.png',
      '/physics/exercises/magnetic-field/mfld-019-option-c.png',
      '/physics/exercises/magnetic-field/mfld-019-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-019-option-a.png',
    explanation:
      'A battery-powered toy car needs a d.c. power source and a switch connected in series so the circuit can be turned on and off correctly. The options using a.c. are unsuitable for a battery-powered toy car, and the option that shorts the battery is also incorrect. Hence option A is the correct design.',
    difficulty: 2,
    points: 15,
    hints: [
      'A battery provides d.c., not a.c.',
      'The switch should control the main current path in series',
      'Avoid any circuit that directly shorts the battery',
    ],
    sectionId: 'magnetic-field',
    imagePaths: [],
  },
  {
    id: 'mfld-020',
    type: 'multiple_choice',
    question:
      'Two parallel straight wires P and Q carry equal currents flowing into the paper. A compass is placed at a point R where PR = QR. In which of the following diagrams is the north pole of the compass needle pointing in the correct direction? The effect of the Earth magnetic field may be ignored.',
    options: [
      '/physics/exercises/magnetic-field/mfld-020-option-a.png',
      '/physics/exercises/magnetic-field/mfld-020-option-b.png',
      '/physics/exercises/magnetic-field/mfld-020-option-c.png',
      '/physics/exercises/magnetic-field/mfld-020-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-020-option-b.png',
    explanation:
      'Apply the right-hand grip rule to each wire. At point R, the magnetic field due to wire P and the magnetic field due to wire Q combine as vectors. Since the two currents are equal and R is equally distant from both wires, the resultant field points to the right. The compass north pole aligns with the magnetic field, so the correct diagram is option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Find the field direction around each wire separately',
      'The compass aligns with the resultant magnetic field',
      'At equal distances, compare directions before combining magnitudes',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-020-question.png'],
  },
  {
    id: 'mfld-021',
    type: 'multiple_choice',
    question:
      'Which of the following diagrams shows the magnetic field pattern formed around a flat circular current-carrying coil, in the plane as shown above?',
    options: [
      '/physics/exercises/magnetic-field/mfld-021-option-a.png',
      '/physics/exercises/magnetic-field/mfld-021-option-b.png',
      '/physics/exercises/magnetic-field/mfld-021-option-c.png',
      '/physics/exercises/magnetic-field/mfld-021-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-021-option-a.png',
    explanation:
      'Using the right-hand grip rule for the circular current, the magnetic field at the centre points into the loop. The correct field-line pattern must therefore match a field entering through the plane inside the coil and curving around outside. That matches option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use the right-hand grip rule for a current loop',
      'At the centre, the field is perpendicular to the plane of the loop',
      'Choose the field pattern consistent with that direction',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-021-question.png'],
  },
  {
    id: 'mfld-022',
    type: 'multiple_choice',
    question:
      'The figure shows a simple motor. Which of the following changes can increase the turning effect of the coil?\n\n(1) using a stronger magnet\n(2) reducing the resistance of the rheostat\n(3) using a coil with a smaller number of turns',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (2) only',
    explanation:
      'A stronger magnet increases the magnetic field strength, so the magnetic force on the current-carrying coil becomes larger. Reducing the resistance of the rheostat increases the current, which also increases the turning effect. Using fewer turns reduces the total magnetic force on the coil, so that change does not help. Therefore only (1) and (2) are correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Motor turning effect increases with magnetic force',
      'Magnetic force increases with field strength and current',
      'More turns generally increase the turning effect, not fewer',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-022-question.png'],
  },
  {
    id: 'mfld-023',
    type: 'multiple_choice',
    question:
      'The diagram shows a home-made device which can produce sound. In the device, a magnet is fixed to the base of a plastic cup. When a signal passes through the coil, the base vibrates to produce a sound. Which of the following methods can make the sound louder?\n\n(1) using a stronger magnet\n(2) inserting a copper rod into the coil\n(3) increasing the number of turns in the coil',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (3) only',
    explanation:
      'A stronger magnet gives a stronger magnetic interaction, so the vibration can be larger. Increasing the number of turns in the coil also increases the magnetic effect for the same signal current. Copper is not a magnetic core material, so inserting a copper rod does not strengthen the magnetic field in the useful way here. Hence only (1) and (3) are correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Louder sound requires larger vibration amplitude',
      'Stronger magnetic interaction gives stronger driving force',
      'Copper is not a ferromagnetic core material',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-023-question.png'],
  },
  {
    id: 'mfld-024',
    type: 'multiple_choice',
    question:
      'Two parallel wires carry equal currents flowing in the same direction. Which of the following statements are correct?\n\n(1) The magnetic forces acting on the two wires form an action-reaction pair.\n(2) The two wires attract each other.\n(3) If the directions of the current in the two wires are both reversed, the wires will repel each other.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (2) only',
    explanation:
      'Parallel currents in the same direction attract each other. The magnetic forces on the two wires are equal in magnitude and opposite in direction, so they form an action-reaction pair. If both currents are reversed, they are still in the same direction relative to each other, so the wires still attract rather than repel. Therefore only (1) and (2) are correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Same-direction currents attract',
      'Action-reaction forces are equal and opposite',
      'Reversing both currents does not change their relative direction',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-024-question.png'],
  },
  {
    id: 'mfld-025',
    type: 'multiple_choice',
    question:
      'The figure shows a rectangular loop of wire carrying a steady current I. The rectangular loop can rotate freely about PQ. If a uniform magnetic field to the right is applied, which of the following is correct?',
    options: [
      'Resultant force non-zero; clockwise rotation',
      'Resultant force non-zero; anti-clockwise rotation',
      'Resultant force zero; clockwise rotation',
      'Resultant force zero; anti-clockwise rotation',
    ],
    answer: 'Resultant force zero; clockwise rotation',
    explanation:
      'The two vertical sides of the loop experience equal magnetic forces in opposite directions, so the resultant force on the loop is zero. However, these two equal and opposite forces form a couple, which gives a turning effect. Using the left-hand rule, the turning effect is clockwise. Therefore the correct answer is that the resultant force is zero and the loop rotates clockwise.',
    difficulty: 3,
    points: 15,
    hints: [
      'Opposite sides of the loop experience opposite forces',
      'Equal and opposite forces can still form a turning couple',
      'Use the left-hand rule to determine the turning direction',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-025-question.png'],
  },
  {
    id: 'mfld-026',
    type: 'multiple_choice',
    question:
      'A compass is placed inside an air-cored solenoid XY which is connected to a d.c. supply with terminals P and Q as shown. If the end X of the solenoid behaves as magnetic north pole, what are the polarity of terminal P and the direction in which the north pole of the compass needle points? (The tip of the arrow represents the north pole of the compass needle.)',
    options: [
      '/physics/exercises/magnetic-field/mfld-026-option-a.png',
      '/physics/exercises/magnetic-field/mfld-026-option-b.png',
      '/physics/exercises/magnetic-field/mfld-026-option-c.png',
      '/physics/exercises/magnetic-field/mfld-026-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-026-option-c.png',
    explanation:
      'If end X is the north pole, the current direction around the solenoid can be determined by the right-hand grip rule. This fixes the battery polarity as Q positive and P negative. Inside a solenoid, the magnetic field points from south to north, so inside the coil it points toward X. Hence the north pole of the compass needle points to the left. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the right-hand grip rule for the solenoid',
      'Current flows from the positive terminal of the d.c. source',
      'Inside a solenoid, the field points toward the north pole',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-026-question.png'],
  },
  {
    id: 'mfld-027',
    type: 'multiple_choice',
    question:
      'A current carrying wire, perpendicular to the plane of the paper, is located at P. P is midway between two identical bar magnets with unknown polarities X and Y as shown. The current in the wire is flowing into the paper. The magnetic force F acting on the wire is downward. Which of the following statements are correct?\n\n(1) X is a north pole and Y is a south pole.\n(2) F is reversed if the current direction is reversed.\n(3) F is larger if stronger bar magnets are used.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1), (2) and (3)',
    explanation:
      'Using the left-hand rule with current into the paper and force downward, the magnetic field must point to the right, so X must be the north pole and Y the south pole. Reversing the current reverses the magnetic force direction. The magnetic force also increases when the magnetic field is stronger, so stronger magnets make F larger. Hence all three statements are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the left-hand rule with current, field and force',
      'Reversing current reverses magnetic force direction',
      'Magnetic force increases with field strength',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-027-question.png'],
  },
  {
    id: 'mfld-028',
    type: 'multiple_choice',
    question:
      'The figure above shows two parallel straight wires carrying equal currents. Which of the following diagrams correctly shows the resultant magnetic field lines?',
    options: [
      '/physics/exercises/magnetic-field/mfld-028-option-a.png',
      '/physics/exercises/magnetic-field/mfld-028-option-b.png',
      '/physics/exercises/magnetic-field/mfld-028-option-c.png',
      '/physics/exercises/magnetic-field/mfld-028-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-028-option-d.png',
    explanation:
      'For a current coming out of the paper, the magnetic field circles anticlockwise around the wire. The resultant field pattern is found by combining the anticlockwise field lines from both wires. Among the options, only option D matches that combined pattern correctly.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use the right-hand grip rule for each straight wire',
      'Current out of the page gives anticlockwise field lines',
      'Superpose the two field patterns',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-028-question.png'],
  },
  {
    id: 'mfld-029',
    type: 'multiple_choice',
    question:
      'A current carrying wire Y is placed between two bar magnets as shown above. The wire experiences an upward force. Which of the following is/are the possible combination(s) of the direction of the current in Y and the magnetic poles of X and Z ?\n\n(1) X is N, current in Y is from P to Q, Z is S\n(2) X is S, current in Y is from P to Q, Z is N\n(3) X is N, current in Y is from Q to P, Z is S',
    options: [
      '(1) only',
      '(2) only',
      '(1) and (3) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'Use the left-hand rule. If X is N and Z is S, the magnetic field is from X to Z. To produce an upward force, the current must then be from Q to P, so statement (1) is not possible but statement (3) is. If X is S and Z is N, the magnetic field reverses, and then current from P to Q gives an upward force, so statement (2) is also possible. Therefore the correct answer is (2) and (3) only.',
    difficulty: 3,
    points: 15,
    hints: [
      'Magnetic field goes from N to S',
      'Use the left-hand rule for force on a current-carrying wire',
      'Test each listed combination separately',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-029-question.png'],
  },
  {
    id: 'mfld-030',
    type: 'multiple_choice',
    question:
      'Rectangular coil PQRS is carrying a current flowing in clockwise direction. It is placed inside a uniform magnetic field pointing into the paper as shown in the figure below.\n\nWhich of the following statements are correct?\n\n(1) A magnetic force pointing to the right acts on RS.\n(2) No magnetic force acts on QR.\n(3) The resultant magnetic force acting on the coil is zero.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (3) only',
    explanation:
      'Using the left-hand rule, side RS experiences a force to the right. Side QR does experience a magnetic force, so statement (2) is false. The forces on opposite sides of the rectangular coil are equal and opposite, so the resultant magnetic force on the whole coil is zero. Therefore only (1) and (3) are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Apply the left-hand rule to each side of the coil separately',
      'A side parallel to the magnetic field has zero force; perpendicular sides do not',
      'Equal and opposite forces can cancel in resultant force',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-030-question.png'],
  },
  {
    id: 'mfld-031',
    type: 'multiple_choice',
    question:
      'In the figure below, the arrow shows the direction of the magnetic field at Z due to a current-carrying solenoid.\n\nWhat are the direction of current through the solenoid and the magnetic north pole of the solenoid?',
    options: [
      'Current from P to Q; north pole is X',
      'Current from P to Q; north pole is Y',
      'Current from Q to P; north pole is X',
      'Current from Q to P; north pole is Y',
    ],
    answer: 'Current from P to Q; north pole is X',
    explanation:
      'The magnetic field direction shown outside the solenoid tells you which end is the north pole, because magnetic field lines emerge from the north pole. Therefore X is the north pole. Using the right-hand grip rule for the solenoid, the current direction that produces this pole arrangement is from P to Q.',
    difficulty: 3,
    points: 15,
    hints: [
      'Magnetic field lines come out of the north pole',
      'First identify which end is N',
      'Then use the right-hand grip rule to find current direction',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-031-question.png'],
  },
  {
    id: 'mfld-032',
    type: 'multiple_choice',
    question:
      'Two charged particles X and Y enter a region where a magnetic field acts perpendicular to the plane of their motion. The resulting paths shown in the diagram may be affected by the mass, charge and initial speed of the particles. Which of the following quantities alone could cause the observed difference in the paths?\n\n(1) X has a smaller mass than Y.\n(2) X has a smaller charge than Y.\n(3) X has a greater speed than Y.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'For a charged particle moving perpendicular to a magnetic field, the circular radius is r = mv / (Bq). A larger radius can be caused by a smaller charge or a greater speed. A smaller mass would instead make the radius smaller, not larger. Therefore the observed difference can be explained by (2) and (3) only.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the radius relation r = mv / (Bq)',
      'Check how radius changes with mass, speed and charge',
      'You need the factors that make X have the larger path radius',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-032-question.png'],
  },
  {
    id: 'mfld-033',
    type: 'multiple_choice',
    question:
      'Which of the following affects the magnetic field strength on the axis of a long solenoid?\n\n(1) The diameter of the solenoid\n(2) The number of turns per unit length of the solenoid\n(3) The current flowing through the solenoid',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'For a long solenoid, the magnetic field is given approximately by B = mu n I. It depends on the number of turns per unit length n and the current I. It does not depend directly on the diameter in this ideal long-solenoid model. Therefore only (2) and (3) affect the magnetic field strength on the axis.',
    difficulty: 3,
    points: 15,
    hints: [
      'Recall the long-solenoid field formula',
      'B depends on turn density and current',
      'Diameter is not part of the ideal expression',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-034',
    type: 'multiple_choice',
    question:
      'A free electron travelling horizontally with speed v enters a uniform vertical magnetic field B. Which of the following statements is/are correct?\n\n(1) The path of the electron is circular on a vertical plane.\n(2) The speed of the electron remains constant.\n(3) The radius of curvature of the path of the electron is inversely proportional to the magnetic field B.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'The magnetic force is always perpendicular to the velocity, so it changes the direction of motion but does no work. Therefore the electron speed remains constant. The motion is circular in a plane perpendicular to the magnetic field, not on a vertical plane here. Since r = mv / (Bq), the radius is inversely proportional to B. Hence only (2) and (3) are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Magnetic force does no work',
      'The circular path lies in a plane perpendicular to the magnetic field',
      'Use r = mv / (Bq)',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-035',
    type: 'multiple_choice',
    question:
      'A vertical wire of 0.4 m long carries a constant current of 5 A. It is placed in a magnetic field of strength 10^-3 T, which dips at an angle of 30 degrees to the horizontal. Determine the magnetic force acting on the wire.',
    options: [
      '5.0 x 10^-4 N',
      '8.7 x 10^-4 N',
      '1.5 x 10^-3 N',
      '1.7 x 10^-3 N',
    ],
    answer: '1.7 x 10^-3 N',
    explanation:
      'Only the component of magnetic field perpendicular to the vertical wire contributes to the force. Since the field dips 30 degrees to the horizontal, its horizontal component is B cos 30 degrees. So F = B cos 30 degrees x I x L = (10^-3)(cos 30 degrees)(5)(0.4), which is about 1.7 x 10^-3 N.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use F = BIL with the perpendicular component of B',
      'The wire is vertical, so use the horizontal component of the field',
      'cos 30 degrees is the required factor',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-036',
    type: 'multiple_choice',
    question:
      'A solenoid with a solid core has a diameter d and n turns per length. It carries a current I. The magnetic field B inside is\n\n(1) independent of d.\n(2) proportional to n.\n(3) independent of the material of the core.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) and (2) only',
    explanation:
      'For a long solenoid, the magnetic field depends on permeability, turn density and current. In the ideal model it is independent of diameter d. It is proportional to the number of turns per unit length n. It is not independent of the core material because the permeability changes with the material. Therefore only (1) and (2) are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'The solenoid field depends on permeability',
      'n directly affects the field strength',
      'Core material matters because permeability changes',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-037',
    type: 'multiple_choice',
    question:
      'X and Y are identical flexible conducting wires, suspended from fixed points P and Q. The bottom parts of the wires R and S are also fixed. When a current 2 A is passed from R to P through X, and a current 1 A is passed from Q to S through Y, which of the following diagrams best represents the shapes of the two wires?',
    options: [
      '/physics/exercises/magnetic-field/mfld-037-option-a.png',
      '/physics/exercises/magnetic-field/mfld-037-option-b.png',
      '/physics/exercises/magnetic-field/mfld-037-option-c.png',
      '/physics/exercises/magnetic-field/mfld-037-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-037-option-a.png',
    explanation:
      'The currents in the two nearby wire sections are in opposite directions, so the wires repel each other. The magnetic forces between them are an action-reaction pair, so the forces have the same magnitude. Since the two wires are otherwise identical, they bend symmetrically away from each other. Therefore the correct shape is shown in option A.',
    difficulty: 3,
    points: 15,
    hints: [
      'Opposite currents repel',
      'The interaction forces are equal and opposite',
      'Identical wires under equal interaction bend symmetrically',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-037-question.png'],
  },
  {
    id: 'mfld-038',
    type: 'multiple_choice',
    question:
      'Two parallel wires attract each other with a force F when the same current passes through them. If the current is doubled and the distance between the wires is also doubled, the force of attraction will become',
    options: ['F / 4', 'F / 2', 'F', '2F'],
    answer: '2F',
    explanation:
      'The force between two parallel current-carrying wires is proportional to I1 I2 / r. Doubling both currents multiplies the numerator by 4. Doubling the distance multiplies the denominator by 2. So the new force is 4 / 2 = 2 times the original force. Therefore the force becomes 2F.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the proportionality F is proportional to I1I2 divided by r',
      'Both currents are doubled',
      'The separation is also doubled',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-039',
    type: 'multiple_choice',
    question:
      'Which of the following graphs best represents the variation of the strength of the magnetic field B along the axis of a long solenoid carrying a constant current, with the distance x from the centre of the solenoid along the axis to one of its end?',
    options: [
      '/physics/exercises/magnetic-field/mfld-039-option-a.png',
      '/physics/exercises/magnetic-field/mfld-039-option-b.png',
      '/physics/exercises/magnetic-field/mfld-039-option-c.png',
      '/physics/exercises/magnetic-field/mfld-039-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-039-option-d.png',
    explanation:
      'Inside a long solenoid, the magnetic field is approximately uniform, so B stays nearly constant over most of the interior. Near the end of the solenoid, the field decreases gradually as the field lines spread out, and outside it tends toward zero. The correct graph is therefore the one that stays flat and then falls near the end, which is option D.',
    difficulty: 3,
    points: 15,
    hints: [
      'Inside a long solenoid the field is almost uniform',
      'Near the end the field weakens gradually',
      'Outside the solenoid the field becomes small',
    ],
    sectionId: 'magnetic-field',
    imagePaths: [],
  },
  {
    id: 'mfld-040',
    type: 'multiple_choice',
    question:
      'A small particle with mass 3.2 x 10^-25 kg and charge -1.6 x 10^-19 C enters a uniform magnetic field of flux density 0.08 T at a speed of 10^5 m s^-1, as shown in the above figure. It will',
    options: [
      'pass undeviated through the magnetic field',
      'be deflected upward in a circular arc of radius 0.25 m',
      'be deflected upward in a circular arc of radius 0.50 m',
      'be deflected downward in a circular arc of radius 0.25 m',
    ],
    answer: 'be deflected downward in a circular arc of radius 0.25 m',
    explanation:
      'Using the left-hand rule with a negative charge moving to the right and magnetic field into the page, the magnetic force is downward. The motion is circular with radius r = mv / (Bq). Substituting the given values gives r = 0.25 m. Therefore the particle is deflected downward in a circular arc of radius 0.25 m.',
    difficulty: 3,
    points: 15,
    hints: [
      'First determine the force direction from the magnetic force rule',
      'Use r = mv / (Bq)',
      'Remember to use the magnitude of charge in the radius formula',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-040-question.png'],
  },
  {
    id: 'mfld-041',
    type: 'multiple_choice',
    question:
      'As shown in the figure, S is an a.c. supply of frequency 50 Hz connected to a resistor R via two long, parallel, straight metal wires X and Y. The magnetic forces acting on X and Y',
    options: [
      'are always equal to zero',
      'always attract',
      'always repel',
      'sometimes attract and sometimes repel; the frequency of variation is 50 Hz',
    ],
    answer: 'always repel',
    explanation:
      'At any instant, the current in wire X and the return current in wire Y are in opposite directions. Parallel wires carrying currents in opposite directions repel. Although the a.c. current reverses every half cycle, both wires reverse together, so they remain opposite in direction at every instant. Hence the wires always repel.',
    difficulty: 3,
    points: 15,
    hints: [
      'In a supply-and-return pair, the two currents are opposite at each instant',
      'Opposite parallel currents repel',
      'With a.c., both currents reverse together so the relative direction stays opposite',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-041-question.png'],
  },
  {
    id: 'mfld-042',
    type: 'multiple_choice',
    question:
      'In the above figure, PQ is a fixed long wire carrying a current I1. RS is another wire perpendicular to PQ. When a current I2 flows through RS in the direction shown, the magnetic force on the wire RS',
    options: [
      'acts in the +y direction',
      'acts in the -y direction',
      'acts in the +x direction',
      'acts in the -x direction',
    ],
    answer: 'acts in the +y direction',
    explanation:
      'First use the right-hand grip rule to find the magnetic field produced by wire PQ at the position of RS. The field there points into the page. Then apply the left-hand rule to wire RS with current in the given direction. The resulting magnetic force is in the +y direction. Therefore option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find the field from the long straight wire first',
      'Then apply the left-hand rule to the second wire',
      'The force is perpendicular to both current and magnetic field',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-042-question.png'],
  },
  {
    id: 'mfld-043',
    type: 'multiple_choice',
    question:
      'A particle of mass m and charge q moves in a circular orbit inside a magnetic field B. The time taken for a single orbit is',
    options: [
      'Bq / (2pi m)',
      '2pi m / (Bq)',
      '2mq / (Bpi)',
      'Bm / (2pi q)',
    ],
    answer: '2pi m / (Bq)',
    explanation:
      'For circular motion in a magnetic field, the magnetic force provides the centripetal force, giving Bqv = mv^2 / r. Since v = r omega, we get Bq = m omega. Hence omega = Bq / m. The period is T = 2pi / omega = 2pi m / (Bq). Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use magnetic force equals centripetal force',
      'Relate speed to angular speed using v = r omega',
      'Then convert angular speed to period',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-044',
    type: 'multiple_choice',
    question:
      'A square loop carrying a current I is placed in a uniform magnetic field B in the xy plane as shown in the figure. If the loop is free to rotate, the magnetic forces acting on the loop will cause it to',
    options: [
      'rotate about the y-axis as indicated by p',
      'rotate about the y-axis as indicated by q',
      'rotate about the x-axis as indicated by r',
      'rotate about the x-axis as indicated by s',
    ],
    answer: 'rotate about the x-axis as indicated by s',
    explanation:
      'By the left-hand rule, the upper side of the loop experiences a force out of the page while the lower side experiences a force into the page. These equal and opposite forces form a couple. This couple makes the loop rotate about the x-axis, in the sense indicated by s. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Identify which sides experience magnetic force',
      'Those forces form a turning couple',
      'The couple determines the axis and sense of rotation',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-044-question.png'],
  },
  {
    id: 'mfld-045',
    type: 'multiple_choice',
    question:
      'A beam of particles, of different masses, charges, polarities and speeds, travels along PQ and passes through a narrow slit S1. In the region between S1 and S2, an electric field E and a magnetic field B are directed perpendicularly to each other. The E-field acts vertically upward and the B-field acts out of the plane of the paper. The particles that are undeflected and emerge from slit S2 must have the same',
    options: ['polarity', 'speed', 'charge', 'mass'],
    answer: 'speed',
    explanation:
      'For a particle to pass through the crossed electric and magnetic fields without deflection, the electric force must balance the magnetic force: qE = Bqv. The charge magnitude cancels, leaving v = E / B. Therefore all undeflected particles must have the same speed, regardless of their mass or charge value.',
    difficulty: 3,
    points: 15,
    hints: [
      'Undeflected means net force is zero',
      'Set electric force equal to magnetic force',
      'Solve qE = Bqv for v',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-045-question.png'],
  },
  {
    id: 'mfld-046',
    type: 'multiple_choice',
    question:
      'Two parallel straight wires separated by a distance r carry currents in the same direction. Which of the following statements is/are correct?\n\n(1) The two wires attract each other.\n(2) The force acting on each wire is inversely proportional to r^2.\n(3) The currents in the two wires produce a magnetic field with maximum flux density midway between them.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) only',
    explanation:
      'Parallel currents in the same direction attract each other. The magnetic force between long parallel wires is proportional to 1/r, not 1/r^2. Midway between two equal same-direction currents, the magnetic fields oppose each other and a neutral point can occur, so the field is not maximum there. Therefore only statement (1) is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Same-direction currents attract',
      'For long parallel wires, force varies as 1/r',
      'Compare the two field directions at the midpoint',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-047',
    type: 'multiple_choice',
    question:
      'Two particles P and Q of the same charge and mass but moving with different speeds vP and vQ respectively enter a region of uniform magnetic field B directed into the plane of the paper. The subsequent circular paths are as shown in the figure. Which of the following statements is/are correct?\n\n(1) Both particles P and Q are positively charged.\n(2) Speed of particle P is smaller than that of Q.\n(3) The period of circular motion of P is shorter than that of Q.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) and (2) only',
    explanation:
      'From the curvature shown, the magnetic force direction implies that both particles are positively charged. For motion in a magnetic field, the circular radius is r = mv / (Bq). Since P has the smaller radius, P has the smaller speed. The orbital period is T = 2pi m / (Bq), which does not depend on speed, so statement (3) is false. Therefore only (1) and (2) are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the curvature direction to infer charge sign',
      'Use r = mv / (Bq) to compare speeds',
      'The magnetic orbit period is independent of speed',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-047-question.png'],
  },
  {
    id: 'mfld-048',
    type: 'multiple_choice',
    question:
      'Two long parallel straight wires, each carries a current of 1 A in opposite directions, are separated by a distance of 0.2 m as shown in the figure. The magnetic field at a point X mid-way between the two wires is',
    options: [
      '2 x 10^-5 T out of paper',
      '2 x 10^-5 T into paper',
      '4 x 10^-6 T out of paper',
      '4 x 10^-6 T into paper',
    ],
    answer: '4 x 10^-6 T into paper',
    explanation:
      'At the midpoint, the distance from each wire is 0.1 m. Using the right-hand grip rule, both magnetic fields at X point into the page, so they add. For one wire, B = mu0 I / (2pi r) = (4pi x 10^-7)(1) / (2pi x 0.1) = 2 x 10^-6 T. Doubling this gives 4 x 10^-6 T into the page.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the midpoint distance of 0.1 m',
      'Find the field direction from each wire first',
      'Add the two equal magnetic fields',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-048-question.png'],
  },
  {
    id: 'mfld-049',
    type: 'multiple_choice',
    question:
      'For two long, straight parallel conducting wires carrying the same current, the magnitude of the magnetic force acting on a section of the wires would be affected by\n\n(1) the distance between the wires\n(2) the length of that section of the wires\n(3) the directions of current flowing in the wires',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) and (2) only',
    explanation:
      'The force between two long parallel wires is proportional to I^2 L / r when the currents are equal. So the magnitude depends on the separation r and the length L of the wire section considered. Reversing the current direction changes whether the force is attractive or repulsive, but not the magnitude. Therefore only (1) and (2) are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the force relation for parallel wires',
      'Magnitude depends on separation and length',
      'Current direction changes force direction, not size',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-050',
    type: 'multiple_choice',
    question:
      'An electron moves in a circular path of diameter 0.01 m in a plane with a uniform magnetic field of 0.02 T directed perpendicular into the plane as shown in the figure. Find the speed and the direction of circular motion of the electron.',
    options: [
      '1.76 x 10^7 m s^-1 in anticlockwise direction',
      '1.76 x 10^7 m s^-1 in clockwise direction',
      '3.52 x 10^7 m s^-1 in anticlockwise direction',
      '3.52 x 10^7 m s^-1 in clockwise direction',
    ],
    answer: '1.76 x 10^7 m s^-1 in clockwise direction',
    explanation:
      'The radius is 0.005 m. Using r = mv / (Bq), the speed is v = Bqr / m = (0.02)(1.6 x 10^-19)(0.005) / (9.1 x 10^-31), which is about 1.76 x 10^7 m s^-1. For a negative charge in a field into the page, the magnetic force direction gives clockwise motion. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use half the diameter as the radius',
      'Apply v = Bqr / m',
      'Remember the electron is negatively charged when deciding direction',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-050-question.png'],
  },
  {
    id: 'mfld-051',
    type: 'multiple_choice',
    question:
      'Particles A and B moving at the same speed enter a square region of uniform magnetic field as shown. Particle A leaves at X while particle B leaves at Y. If the charge to mass ratio of particle A is k, then the charge to mass ratio of particle B would be',
    options: ['k / 2', 'k / 4', '2k', '4k'],
    answer: 'k / 2',
    explanation:
      'For a charged particle entering a uniform magnetic field, the path radius is r = mv / (Bq), so q/m = v / (Br). Since both particles have the same speed and enter the same magnetic field, the charge-to-mass ratio is inversely proportional to the radius of curvature. From the geometry, particle B has twice the radius of particle A, so its charge-to-mass ratio is half that of A. Therefore the answer is k / 2.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use q/m = v / (Br) for particles at the same speed in the same field',
      'The larger radius corresponds to the smaller charge-to-mass ratio',
      'Read the radius ratio from the diagram',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-051-question.png'],
  },
  {
    id: 'mfld-052',
    type: 'multiple_choice',
    question:
      'Four infinitely long straight parallel wires P, Q, R, S carrying equal currents are situated at the four corners of a square as shown. The currents in P, Q are into paper and those in R, S are out of paper. What is the direction of the resultant magnetic field at the centre of the square?',
    options: ['I', 'II', 'III', 'IV'],
    answer: 'I',
    explanation:
      'Use the right-hand grip rule to determine the magnetic field direction at the centre due to each wire. Because all currents have equal magnitude and all wires are the same distance from the centre, the four field contributions have equal magnitude. Vector addition of these four equal fields gives a resultant in direction I. Therefore option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Each wire contributes the same field magnitude at the centre',
      'Use the right-hand grip rule for each current direction',
      'Add the four field vectors',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-052-question.png'],
  },
  {
    id: 'mfld-053',
    type: 'multiple_choice',
    question:
      'The above diagram shows a rectangular current-carrying coil A B C D in a uniform magnetic field between two pole pieces. The magnetic field is perpendicular to the plane of the coil. Which of the following statements is/are correct?',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      'Side BC is perpendicular to the magnetic field, so it experiences a magnetic force. Using Fleming left-hand rule on each side shows forces on opposite sides are equal and opposite, so they balance in pairs. Those four forces act inward on the rectangular loop and tend to reduce its area, but there is no resultant force on the whole coil. Therefore only (1) and (2) are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'A wire experiences magnetic force only when current is not parallel to the field',
      'Opposite sides have equal and opposite forces',
      'Separate turning or squeezing effects from resultant force',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-053-question.png'],
  },
  {
    id: 'mfld-054',
    type: 'multiple_choice',
    question:
      'The above figure shows a charged particle moving in a circular orbit with a constant speed v on a plane perpendicular to a uniform magnetic field directed into the paper. Which of the following graphs represents the relation between the time T for the particle to complete a circle and its speed v?',
    options: [
      '/physics/exercises/magnetic-field/mfld-054-option-a.png',
      '/physics/exercises/magnetic-field/mfld-054-option-b.png',
      '/physics/exercises/magnetic-field/mfld-054-option-c.png',
      '/physics/exercises/magnetic-field/mfld-054-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-054-option-b.png',
    explanation:
      'For circular motion in a magnetic field, magnetic force provides centripetal force: Bqv = m v^2 / r. With v = 2 pi r / T, the speed cancels and gives T = 2 pi m / (Bq). Therefore the period is independent of the speed and remains constant. The correct graph is a horizontal line, so option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Start from Bqv = m v^2 / r',
      'Replace v with 2 pi r / T',
      'Check whether T still depends on v after simplification',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-054-question.png'],
  },
  {
    id: 'mfld-055',
    type: 'multiple_choice',
    question:
      'Two long, straight parallel wires, each carrying a current I into paper, are separated by a distance r as shown in the figure. What is the magnitude and direction of the resultant magnetic field at the point P at the same distance r from both wires?',
    options: [
      'mu_0 I / (2 pi r) to the left',
      'sqrt(3) mu_0 I / (2 pi r) to the left',
      'mu_0 I / (pi r) to the left',
      'sqrt(3) mu_0 I / (2 pi r) to the right',
    ],
    answer: 'sqrt(3) mu_0 I / (2 pi r) to the right',
    explanation:
      'Each wire produces a field of magnitude mu_0 I / (2 pi r) at P. By the right-hand grip rule, the two field vectors are symmetric, and their vertical components cancel while their horizontal components add. Each horizontal component is B cos 30 degrees, so the resultant is 2B cos 30 degrees = sqrt(3) mu_0 I / (2 pi r), directed to the right. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find the field magnitude from one long straight wire first',
      'Use symmetry to resolve the two equal field vectors',
      'Only the horizontal components survive',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-055-question.png'],
  },
  {
    id: 'mfld-056',
    type: 'multiple_choice',
    question:
      'Four parallel long straight wires carrying currents of equal magnitude pass vertically through the four corners of a square P Q R S. In one wire, the current is directed into paper. In the other three wires, the currents are directed out of paper. Which of the following can produce a resultant magnetic field with the indicated direction at the centre O?',
    options: [
      'Current into paper at P; current out of paper at Q, R, S',
      'Current into paper at Q; current out of paper at P, R, S',
      'Current into paper at R; current out of paper at P, Q, S',
      'Current into paper at S; current out of paper at P, Q, R',
    ],
    answer: 'Current into paper at S; current out of paper at P, Q, R',
    explanation:
      'To get a resultant field along the required diagonal, the fields from the opposite corners on one diagonal must cancel, while the fields from the other two corners must add along the wanted direction. Using the right-hand grip rule, this happens only when S carries current into the paper and P, Q, R carry current out of the paper. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Field contributions from opposite corners have equal magnitude',
      'Use cancellation on one diagonal and addition on the other',
      'Apply the right-hand grip rule at the centre for each candidate',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-056-question.png'],
  },
  {
    id: 'mfld-057',
    type: 'multiple_choice',
    question:
      'A beam of charged particles passes through a region of crossed uniform electric and magnetic fields without deflection. Which of the following quantities must be the same for the particles making up this beam?',
    options: ['charge to mass ratio', 'velocity', 'mass', 'sign of charge'],
    answer: 'velocity',
    explanation:
      'For no deflection, electric force and magnetic force must balance: qE = Bqv. The charge cancels, so v = E / B. Therefore every undeflected particle must have the same speed fixed by the field strengths, while mass, charge magnitude and charge sign need not be the same. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Set electric force equal to magnetic force',
      'Cancel q carefully',
      'The remaining condition fixes only one quantity',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-058',
    type: 'multiple_choice',
    question:
      'Three long straight parallel wires P, Q and R carrying currents of the same magnitude are situated at the vertices of an equilateral triangle as shown. The currents in wires P and R are directed out of the paper. Which of the following indicates the direction of the resultant magnetic force acting on the wire P?',
    options: [
      '/physics/exercises/magnetic-field/mfld-058-option-a.png',
      '/physics/exercises/magnetic-field/mfld-058-option-b.png',
      '/physics/exercises/magnetic-field/mfld-058-option-c.png',
      '/physics/exercises/magnetic-field/mfld-058-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-058-option-a.png',
    explanation:
      'Parallel currents in the same direction attract, while parallel currents in opposite directions repel. So the force on P due to R is attractive, along PR, and the force on P due to Q is either attractive or repulsive according to the diagram. Resolving the two equal-magnitude forces geometrically gives the resultant shown in option A.',
    difficulty: 3,
    points: 15,
    hints: [
      'Decide attraction or repulsion for each wire pair first',
      'Each force acts along the line joining the two wires',
      'Use vector addition for the two forces on P',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-058-question.png'],
  },
  {
    id: 'mfld-059',
    type: 'multiple_choice',
    question:
      'A charged particle enters a region of uniform magnetic field whose direction is normal to the initial velocity of the particle. The subsequent path of the particle is as shown in the figure. Which of the following may be the reason to account for this shape of the path? (1) The magnitude of the magnetic field decreases gradually. (2) The particle loses its charge gradually. (3) The particle loses its kinetic energy gradually.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(3) only',
    explanation:
      'Inside the magnetic field, the radius of curvature is r = mv / (Bq). The path shown bends with a decreasing radius, so r is getting smaller. If B decreased or q decreased, the radius would increase instead. A gradual loss of kinetic energy means the speed v decreases, so the radius decreases as observed. Therefore only (3) can explain the path.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use r = mv / (Bq)',
      'Match each proposed change to whether r increases or decreases',
      'Compare that with the shrinking curvature in the diagram',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-059-question.png'],
  },
  {
    id: 'mfld-060',
    type: 'multiple_choice',
    question:
      'In the above figure, A B and C D are two parallel long wires with separation 20 cm carrying currents I_1 and I_2 respectively. The resultant magnetic field at the point P 10 cm from wire C D is zero. If I_2 is equal to 0.6 A, determine the magnitude and direction of the current I_1 in the wire A B.',
    options: [
      '0.2 A flows in the same direction as I_2',
      '0.2 A flows in the opposite direction as I_2',
      '1.8 A flows in the same direction as I_2',
      '1.8 A flows in the opposite direction as I_2',
    ],
    answer: '1.8 A flows in the opposite direction as I_2',
    explanation:
      'For a long straight wire, B = mu_0 I / (2 pi r). At point P, the fields from the two wires must have equal magnitudes and opposite directions for the resultant field to be zero. Since P is 10 cm from wire C D and 30 cm from wire A B, we set I_1 / 30 = 0.6 / 10, giving I_1 = 1.8 A. To cancel the field due to I_2, the current in A B must be in the opposite direction to I_2. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use B = mu_0 I / (2 pi r) for each wire',
      'Zero resultant field means equal magnitudes in opposite directions',
      'Compare the two distances from P to the wires',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-060-question.png'],
  },
  {
    id: 'mfld-061',
    type: 'multiple_choice',
    question:
      'Three long, parallel, straight current-carrying wires P, Q and R are placed in the same plane as shown in the figure. For two long, parallel, straight wires placed a distance d apart and each carrying a current of 1 A, the magnetic force per unit length is F. What is the resultant magnetic force per unit length acting on the wire R shown in the above figure?',
    options: ['0', 'F', '2F', '3F'],
    answer: '3F',
    explanation:
      'The force per unit length between parallel wires is proportional to I_1 I_2 / r. Using the given reference case as F, the force on R due to one wire scales by the product of currents and the separation. From the diagram, the force on R due to P is F in one direction, while the force on R due to Q is 4F in the opposite direction. The resultant is therefore 4F - F = 3F. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Start from force per unit length proportional to I_1 I_2 / r',
      'Express each force in multiples of the reference F',
      'Add the two forces with sign',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-061-question.png'],
  },
  {
    id: 'mfld-062',
    type: 'multiple_choice',
    question:
      'A proton and an alpha-particle move in a uniform magnetic field as shown in the above figure. The magnetic field is directed out of the plane of the paper. Within a square region W X Y Z, the proton takes time t_1 to complete a half circle from X to Y while the alpha-particle follows a quarter circle from X to Z in time t_2. What is the ratio t_1 : t_2 ?',
    options: ['1:2', '1:1', '2:1', 'It cannot be determined as the ratio of their speeds is not given'],
    answer: '1:1',
    explanation:
      'The period of circular motion in a magnetic field is T = 2 pi m / (Bq), which is independent of speed. The proton completes half a cycle, so t_1 = T_p / 2 = pi m / (Bq). The alpha-particle has mass 4m and charge 2q, so its full period is T_a = 2 pi (4m) / (B x 2q) = 4 pi m / (Bq), and a quarter cycle takes t_2 = T_a / 4 = pi m / (Bq). Hence t_1 = t_2, so the ratio is 1:1. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the magnetic-field period formula, not the radius formula',
      'A half circle uses half the period; a quarter circle uses one quarter',
      'Substitute the alpha-particle mass and charge ratios carefully',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-062-question.png'],
  },
  {
    id: 'mfld-063',
    type: 'multiple_choice',
    question:
      'In a vacuum, an electron moves in a circle with speed v in a uniform magnetic field of flux density 1 mT. If an alpha-particle with speed 1/4 v is to follow the same path, what magnetic flux density in the opposite direction is required? (Given: mass ratio of an alpha-particle to an electron is 7200:1; charge ratio of an alpha-particle to an electron is 2:1.)',
    options: ['0.9 T', '1.8 T', '3.6 T', '7.2 T'],
    answer: '0.9 T',
    explanation:
      'For circular motion in a magnetic field, B = mv / (qr) when the orbit radius r is fixed. To keep the same path, r is unchanged, so B is proportional to mv / q. Compared with the electron, the alpha-particle has 7200 times the mass, one quarter the speed, and twice the charge. Therefore B_alpha / B_e = 7200 x (1/4) x (1/2) = 900. Since B_e = 1 mT, B_alpha = 900 mT = 0.9 T, in the opposite direction because the charge sign is opposite. Option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use B = mv / (qr) for a fixed orbit radius',
      'Scale mass, speed and charge separately',
      'Convert 900 mT to tesla at the end',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-064',
    type: 'multiple_choice',
    question:
      'A long straight wire carrying a current I is placed at a distance r from the point P. Both the wire and point P are in the plane of the paper. When the current I increases by 0.5 A, the magnetic flux density B at point P increases by 5.0 x 10^-6 T. Find r.',
    options: ['1 cm', '2 cm', '4 cm', '8 cm'],
    answer: '2 cm',
    explanation:
      'For a long straight wire, B = mu_0 I / (2 pi r), so the change in field is delta B = mu_0 delta I / (2 pi r). Substitute delta B = 5.0 x 10^-6 T and delta I = 0.5 A: 5.0 x 10^-6 = (4 pi x 10^-7 x 0.5) / (2 pi r). Solving gives r = 0.02 m = 2 cm. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the field formula for a long straight wire',
      'Work with the change in field directly',
      'Convert metres to centimetres at the end',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-064-question.png'],
  },
  {
    id: 'mfld-065',
    type: 'multiple_choice',
    question:
      'Two long, parallel wires P Q and R S are connected to a sinusoidal a.c. supply as shown in the figure. Which of the following graph best shows the time variation of the magnetic force F between the two wires?',
    options: [
      '/physics/exercises/magnetic-field/mfld-065-option-a.png',
      '/physics/exercises/magnetic-field/mfld-065-option-b.png',
      '/physics/exercises/magnetic-field/mfld-065-option-c.png',
      '/physics/exercises/magnetic-field/mfld-065-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-065-option-c.png',
    explanation:
      'The currents in the two wires are always equal in magnitude and opposite in direction, so the force is always repulsive. The magnetic force between parallel wires is proportional to I_1 I_2, so here F is proportional to I^2. Squaring a sinusoidal current makes the force stay non-negative and vary with the double-frequency style shape associated with I^2. Therefore the correct graph is option C.',
    difficulty: 3,
    points: 15,
    hints: [
      'Opposite current directions mean repulsion at all times',
      'Use F proportional to I_1 I_2',
      'With equal-magnitude AC currents, the force follows an I^2 shape',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-065-question.png'],
  },
  {
    id: 'mfld-066',
    type: 'multiple_choice',
    question:
      'A beam of charged particles passes through crossed uniform electric and magnetic fields without deflection. If the electric field is removed, the particles will split up into several beams. This splitting may be due to the particles having different (1) charges (2) masses (3) incident velocities.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      'In crossed fields, no deflection requires qE = Bqv, so all particles that pass through undeviated must have the same speed v = E / B. When the electric field is removed, only magnetic force remains, and the radius becomes r = mv / (Bq). Since v is fixed, different masses or different charges produce different radii and the beam splits. Different incident velocities cannot be the reason, because particles with different speeds would not all have passed undeflected in the crossed fields. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Crossed fields select particles of one speed',
      'After removing E, only magnetic curvature matters',
      'Use r = mv / (Bq) with v already fixed',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-067',
    type: 'multiple_choice',
    question:
      'Four long straight wires perpendicular to the plane of the paper are placed at the four corners of a square P Q R S as shown in the figure. Same current I flows in the wires at P, Q and S directed into the paper while the current flowing along the wire at R is in the opposite direction. If the wire at P experiences no net magnetic force, find the current flowing in the wire at R.',
    options: ['I / sqrt(2)', 'I / 2', 'sqrt(2) I', '2 I'],
    answer: '2 I',
    explanation:
      'For wire P to experience no net force, the resultant magnetic field at P due to wires Q, R and S must be zero. The equal currents at Q and S produce equal fields whose vector sum is sqrt(2) times the field from one of them. Wire R is farther from P by a factor of sqrt(2), so its field at P is mu_0 I_R / (2 pi sqrt(2) r). Equating this to the resultant from Q and S gives I_R = 2I. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use superposition of magnetic fields at P',
      'Fields from Q and S are equal and perpendicular',
      'Account for the diagonal distance from R to P',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-067-question.png'],
  },
  {
    id: 'mfld-068',
    type: 'multiple_choice',
    question:
      'A segment of a vertical wire 0.50 m long carrying a current of 8.0 A is placed in the Earth magnetic field. The direction of the field dips at an angle of 20 degrees to the horizontal. If the magnetic force acting on the wire is 7.5 x 10^-5 N, find the magnitude of the Earth magnetic field.',
    options: ['6.4 x 10^-4 T', '1.8 x 10^-5 T', '2.0 x 10^-5 T', '5.5 x 10^-5 T'],
    answer: '2.0 x 10^-5 T',
    explanation:
      'Only the horizontal component of the Earth magnetic field is perpendicular to the vertical wire, so the effective field is B cos 20 degrees. Using F = B I L sin theta is equivalent here to F = (B cos 20 degrees) I L. Substitute 7.5 x 10^-5 = (B cos 20 degrees)(8.0)(0.50), which gives B = 2.0 x 10^-5 T. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the component of B perpendicular to the wire',
      'The wire is vertical, so the relevant field component is horizontal',
      'Solve for B after substituting F, I and L',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-068-question.png'],
  },
  {
    id: 'mfld-069',
    type: 'multiple_choice',
    question:
      'The data about two coaxial long solenoids X and Y are tabulated below: solenoid X has radius 5 cm, turn density 1200 m^-1 and current 1.0 A clockwise as viewed from E; solenoid Y has radius 3 cm, turn density 2400 m^-1 and current 0.5 A anticlockwise as viewed from E. Point P is on the common axis while point Q is 4 cm from the axis. Both P and Q are well inside the two solenoids. Which of the following statements is/are correct? (1) The resultant magnetic field at P is zero. (2) The magnetic field at Q is 1.5 mT. (3) The magnetic field at Q points to the left.',
    options: ['(1) only', '(1) and (2) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1), (2) and (3)',
    explanation:
      'Inside a long solenoid, B = mu_0 n I. At P, both solenoids contribute, but the two fields are in opposite directions and have equal magnitudes because 1200 x 1.0 = 2400 x 0.5, so the resultant field is zero. At Q, the point lies outside the smaller solenoid Y but still inside the larger solenoid X, so only X contributes significantly. Hence B = mu_0 n_X I_X ≈ 1.5 mT, and by the right-hand grip rule its direction is to the left. Therefore all three statements are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use B = mu_0 n I for each long solenoid',
      'Check whether each point lies inside both solenoids or only one',
      'Use the right-hand grip rule for the field direction',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-069-question.png'],
  },
  {
    id: 'mfld-070',
    type: 'multiple_choice',
    question:
      'A square coil P Q R S, each side has a length of 0.15 m, is placed in a uniform magnetic field of 0.4 T as shown in the figure. The number of turns in the coil is 20 and the current in the coil is 1.2 A. The magnetic field is parallel to the plane of the coil. The side P Q makes an angle of 30 degrees with the magnetic field. Find the magnetic force acting on the side P Q of the coil.',
    options: ['0.7 N out of the paper', '0.7 N into the paper', '1.3 N out of the paper', '1.3 N into the paper'],
    answer: '0.7 N out of the paper',
    explanation:
      'The magnetic force on one straight side is F = B I L sin theta, multiplied by the number of turns N. Here B = 0.4 T, I = 1.2 A, L = 0.15 m, theta = 30 degrees and N = 20. So F = (0.4)(1.2)(0.15) sin 30 degrees x 20 = 0.72 N, which rounds to 0.7 N. Using Fleming left-hand rule gives the force on side P Q out of the paper. Therefore option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use F = B I L sin theta for one side',
      'Do not forget the 20 turns',
      'Use the left-hand rule for the direction',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-070-question.png'],
  },
  {
    id: 'mfld-071',
    type: 'multiple_choice',
    question:
      'When moving charged particles enter a uniform magnetic field at right angle, they are deflected. This deflection can be increased by (1) increasing the mass m of the particles (2) increasing the charge Q of the particles (3) increasing the magnitude B of the magnetic field.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      'For motion perpendicular to a magnetic field, the radius of curvature is r = mv / (BQ). Greater deflection means a smaller radius. Increasing the mass makes r larger, so the deflection decreases. Increasing the charge or increasing the magnetic flux density makes r smaller, so the deflection increases. Therefore only (2) and (3) are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the radius formula r = mv / (BQ)',
      'More deflection means tighter curvature',
      'Check which changes make r smaller',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-072',
    type: 'multiple_choice',
    question:
      'Two long straight parallel wires, X and Y, carry equal currents in the same direction as shown in the figure. Wire X experiences a magnetic force of 0.1 N. If now a uniform magnetic field pointing into the paper is applied to both wires, the resultant magnetic force acting on wire X becomes 0.5 N. Find the resultant magnetic force acting on wire Y. (Neglect the Earth magnetic field.)',
    options: [
      '0.3 N m^-1 to the left',
      '0.3 N m^-1 to the right',
      '0.6 N m^-1 to the left',
      '0.6 N m^-1 to the right',
    ],
    answer: '0.3 N m^-1 to the right',
    explanation:
      'The original 0.1 N force between the two wires is attractive, so X is pulled toward Y and Y is pulled toward X with equal magnitude in the opposite direction. After the external field is added, the resultant on X becomes 0.5 N, so the extra force due to the applied field on X is 0.4 N in the same rightward direction. The same 0.4 N rightward field force also acts on Y. On Y this opposes the original 0.1 N leftward attraction, giving a resultant of 0.4 - 0.1 = 0.3 N to the right. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the original inter-wire force as the baseline',
      'The added field contributes the same magnitude force to each wire',
      'Combine the old and new forces vectorially for wire Y',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-072-question.png'],
  },
  {
    id: 'mfld-073',
    type: 'multiple_choice',
    question:
      'A positively charged particle enters a uniform magnetic field B with a speed v making an angle theta (0 degrees < theta <= 90 degrees) with the boundary of the field. The magnetic field points out of the paper and the particle leaves the field at the same boundary as shown. The time of transit for the particle inside the magnetic field is (1) proportional to the angle theta. (2) dependent on the speed v. (3) inversely proportional to the field strength B.',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1) and (3) only',
    explanation:
      'Inside the field the particle moves in circular motion, and its period is T = 2 pi m / (Bq), which is independent of speed. The transit time is the same fraction of the full period as the arc fraction traced inside the field, so t is proportional to the subtended angle and hence proportional to theta. Because T is inversely proportional to B, the transit time is also inversely proportional to B. Therefore (1) and (3) are correct, while (2) is not.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the magnetic circular-motion period formula',
      'The particle only travels part of a full circle inside the field',
      'Check which quantities remain after speed cancels',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-073-question.png'],
  },
  {
    id: 'mfld-074',
    type: 'multiple_choice',
    question:
      'Two long straight parallel wires carrying currents I_1 and I_2 (with I_2 > I_1) is shown in the figure. The separation between the two wires is r. If now another wire carrying a current I in the same direction is placed midway between the two wires, what would be the magnetic force per unit length experienced by this wire, in both magnitude and direction?',
    options: [
      'mu_0 I (I_2 - I_1) / (pi r) to the right',
      'mu_0 I (I_2 - I_1) / (pi r) to the left',
      'mu_0 I (I_1 + I_2) / (pi r) to the right',
      'mu_0 I (I_1 + I_2) / (pi r) to the left',
    ],
    answer: 'mu_0 I (I_2 - I_1) / (pi r) to the right',
    explanation:
      'The middle wire is r/2 from each outer wire. The force per unit length between parallel currents is F/L = mu_0 I_a I_b / (2 pi d). So the force due to I_1 has magnitude mu_0 I_1 I / (pi r) toward the left, and the force due to I_2 has magnitude mu_0 I_2 I / (pi r) toward the right. Since I_2 is larger, the rightward force dominates. The resultant is mu_0 I (I_2 - I_1) / (pi r) to the right. Therefore option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use d = r/2 for the middle wire to each outer wire',
      'Same current direction means attraction',
      'Subtract the two opposite forces',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-074-question.png'],
  },
  {
    id: 'mfld-075',
    type: 'multiple_choice',
    question:
      'The magnitude of the magnetic field B inside a very long solenoid can be increased by (1) increasing the current through the solenoid (2) increasing the number of turns per unit length of the solenoid (3) decreasing the cross-sectional area of the solenoid.',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1) and (2) only',
    explanation:
      'For a very long solenoid, B = mu_0 n I (or mu n I with a core), so the field is directly proportional to the current I and the turn density n. The cross-sectional area does not appear in this expression, so changing the area does not directly change the field inside an ideal long solenoid. Therefore only (1) and (2) are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Recall the field formula for a long solenoid',
      'Look for which variables actually appear in the formula',
      'Do not confuse field strength with magnetic flux',
    ],
    sectionId: 'magnetic-field',
  },
  {
    id: 'mfld-076',
    type: 'multiple_choice',
    question:
      'Which diagram shows the magnetic field pattern formed around a flat circular current-carrying coil, in the plane shown?',
    options: [
      '/physics/exercises/magnetic-field/mfld-076-option-a.png',
      '/physics/exercises/magnetic-field/mfld-076-option-b.png',
      '/physics/exercises/magnetic-field/mfld-076-option-c.png',
      '/physics/exercises/magnetic-field/mfld-076-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-076-option-a.png',
    explanation:
      'Apply the right-hand grip rule to the circular current. Curl the fingers in the current direction and the thumb gives the field direction through the centre of the coil. The correct field pattern must show the field lines entering the loop at the centre in the way indicated in option A. Therefore option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use the right-hand grip rule for a current loop',
      'Check the field direction at the centre of the loop first',
      'Then compare the overall field-line shape',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-076-question.png'],
  },
  {
    id: 'mfld-077',
    type: 'multiple_choice',
    question:
      'The figure shows a simple motor. Which of the following changes would increase the turning effect of the coil? (1) using a stronger magnet (2) reducing the resistance of the rheostat (3) using a coil with a smaller number of turns',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1) and (2) only',
    explanation:
      'The turning effect increases when the magnetic force on the coil increases. A stronger magnet gives a larger magnetic field, so the force and torque increase. Reducing the rheostat resistance increases the current, which also increases the force and torque. Using fewer turns reduces the total force on the coil, so it decreases the turning effect. Therefore only (1) and (2) are correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Motor torque increases with magnetic field strength',
      'Motor torque also increases with current',
      'More turns strengthens the total effect, not fewer',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-077-question.png'],
  },
  {
    id: 'mfld-078',
    type: 'multiple_choice',
    question:
      'The figure shows a current of 1.0 A flowing in a metal rod of length 0.5 m. The rod is placed inside a region with a uniform magnetic field of strength 5 mT. What is the direction and the magnitude of magnetic force acting on the rod?',
    options: [
      'into the paper; 1.25 x 10^-3 N',
      'out of the paper; 1.25 x 10^-3 N',
      'into the paper; 2.17 x 10^-3 N',
      'out of the paper; 2.17 x 10^-3 N',
    ],
    answer: 'into the paper; 1.25 x 10^-3 N',
    explanation:
      'Only the component of the magnetic field perpendicular to the current produces force, so use B sin 30 degrees. Then F = B I L sin 30 degrees = (5 x 10^-3)(1.0)(0.5)(0.5) = 1.25 x 10^-3 N. Using Fleming left-hand rule gives the force direction into the paper. Therefore option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use only the field component perpendicular to the current',
      'Apply F = BIL sin theta',
      'Use the left-hand rule for the direction',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-078-question.png'],
  },
  {
    id: 'mfld-079',
    type: 'multiple_choice',
    question:
      'In the above figure shown, X, Y and Z are three long straight parallel wires with Z placed midway between X and Y, X and Z carry currents of 1 A in the same direction while Y carries a current of 3 A in the opposite direction. The magnetic force per unit length experienced by wire X due to wire Z is of magnitude F. The magnetic force per unit length acting on wire Z due to both X and Y is',
    options: ['2F to the right', '2F to the left', '4F to the right', '4F to the left'],
    answer: '4F to the left',
    explanation:
      'The force per unit length between parallel wires is proportional to I_1 I_2 / r. Since the force on X due to Z is F, by Newton third law the force on Z due to X also has magnitude F, directed to the left. For wire Y, the current is opposite to Z and three times as large, so the force on Z due to Y is repulsive and has magnitude 3F, also to the left. The resultant force on Z is therefore F + 3F = 4F to the left. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the given F as a reference force',
      'Same direction means attraction; opposite direction means repulsion',
      'Add the two forces on wire Z',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-079-question.png'],
  },
  {
    id: 'mfld-080',
    type: 'multiple_choice',
    question:
      'An electron enters a region in which both a uniform electric field E and a uniform magnetic field B exist. The magnetic field B is pointing into the paper. In which direction should the electric field be applied so that the electron could be undeflected?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'C',
    explanation:
      'The moving electron experiences magnetic force first. Since the electron moves to the right, the corresponding conventional current is to the left. With magnetic field into the paper, Fleming left-hand rule gives a downward magnetic force on the electron beam. To keep the electron undeflected, the electric force must act upward. Because the electron is negatively charged, the electric force is opposite to the electric field direction, so the electric field must point downward. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find the magnetic force direction first',
      'Remember the electron is negatively charged',
      'Electric field direction is opposite to electric force on an electron',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-080-question.png'],
  },
  {
    id: 'mfld-081',
    type: 'multiple_choice',
    question:
      'In the figure, four long straight wires P, Q, R and S in the same plane carry equal currents in the directions shown. The wires are insulated from each other. O is a point on the same plane and is equidistant from each wire. Removing which wire would increase the magnetic field strength at O?',
    options: ['wire P', 'wire Q', 'wire R', 'wire S'],
    answer: 'wire R',
    explanation:
      'Use the right-hand grip rule to determine the field at O due to each wire. The fields due to P, Q and S point out of the paper, while the field due to R points into the paper. Since all four wires are the same distance from O and carry equal currents, their field magnitudes at O are equal. Removing R removes the only contribution opposing the others, so the resultant field strength increases. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Each wire gives the same field magnitude at O',
      'Only the directions differ',
      'Remove the wire whose field opposes the majority',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-081-question.png'],
  },
  {
    id: 'mfld-082',
    type: 'multiple_choice',
    question:
      'A straight wire carrying current I pointing into the paper is placed in a magnetic field between pole pieces X and Y. The figure shows the resultant field line pattern. What is the polarity of pole piece X and in what direction is the magnetic force acting on the wire? Ignore the effect of the Earth magnetic field.',
    options: [
      'X is N; force to the right',
      'X is N; force to the left',
      'X is S; force to the right',
      'X is S; force to the left',
    ],
    answer: 'X is S; force to the right',
    explanation:
      'From the resultant field-line pattern, the external magnetic field between the pole pieces is upward. Magnetic field lines run from north pole to south pole, so if the field is upward, pole piece X at the lower side must be the south pole. With current into the paper and magnetic field upward, Fleming left-hand rule gives a magnetic force to the right on the wire. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Read the external field direction from the field-line pattern',
      'Field lines go from N to S',
      'Then use the left-hand rule for the force direction',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-082-question.png'],
  },
  {
    id: 'mfld-083',
    type: 'multiple_choice',
    question:
      'A copper rod X Y is placed on a pair of smooth inclined conducting rails which are located in a magnetic field applied vertically downward. The rails make an angle theta to the horizontal and a battery is connected to the rails as shown above. Which diagram shown below represents the magnetic force F_B acting on the rod when viewed from end Y?',
    options: [
      '/physics/exercises/magnetic-field/mfld-083-option-a.png',
      '/physics/exercises/magnetic-field/mfld-083-option-b.png',
      '/physics/exercises/magnetic-field/mfld-083-option-c.png',
      '/physics/exercises/magnetic-field/mfld-083-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-083-option-c.png',
    explanation:
      'The current in the rod flows from Y to X. The magnetic field is vertically downward. Using Fleming left-hand rule, the magnetic force on the rod is directed toward the left when viewed from end Y. This matches the diagram in option C.',
    difficulty: 3,
    points: 15,
    hints: [
      'Determine the current direction through the rod first',
      'Use the vertically downward field as the B direction',
      'Apply the left-hand rule as viewed from end Y',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-083-question.png'],
  },
  {
    id: 'mfld-084',
    type: 'multiple_choice',
    question:
      'Four long straight parallel wires P, Q, R and S carrying currents of equal magnitude are situated at the vertices of a square as shown. P, Q and R each carries a current directed into the paper while S carries a current directed out of the paper. The direction of the resultant magnetic field at the centre O of the square is along',
    options: ['OP', 'OQ', 'OR', 'OS'],
    answer: 'OP',
    explanation:
      'Use the right-hand grip rule for each wire. At O, the fields due to P and R are equal in magnitude but opposite in direction, so they cancel. The fields due to Q and S point in the same direction, along OP, so they add. Therefore the resultant magnetic field is along OP and option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find the field direction at O due to each wire separately',
      'All four wires are the same distance from O',
      'Look for the pair that cancels first',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-084-question.png'],
  },
  {
    id: 'mfld-085',
    type: 'multiple_choice',
    question:
      'The figure shows a closely packed long solenoid of cross-sectional area A and length L having a total of N turns. If the solenoid carries a constant direct current throughout, which of the following changes can increase the magnetic flux density B at its central cross-section?',
    options: [
      'length 2L, area 2A, turns 2N',
      'length L, area 2A, turns N',
      'length 2L, area A, turns N',
      'length L, area A, turns 2N',
    ],
    answer: 'length L, area A, turns 2N',
    explanation:
      'For a long solenoid, the magnetic field is B = mu_0 N I / L, or equivalently B = mu_0 n I where n = N/L. The field does not depend on the cross-sectional area. Doubling both N and L leaves N/L unchanged, so the field is unchanged. Doubling L alone reduces the field. Doubling N while keeping L fixed doubles the field. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Recall the field formula for a long solenoid',
      'The cross-sectional area does not appear in the formula',
      'Only the turn density N/L matters here',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-085-question.png'],
  },
  {
    id: 'mfld-086',
    type: 'multiple_choice',
    question:
      'The figure shows a simple d.c. motor, the coil A B C D is mounted between the poles of two slab-shaped magnets. Which of the following statements is correct?',
    options: [
      'The turning effect is zero when the coil is vertical.',
      'The magnetic force acting on B C is the greatest when the coil is horizontal.',
      'The direction of the magnetic force acting on A B remains constant.',
      'The direction of the current in the coil remains unchanged.',
    ],
    answer: 'The turning effect is zero when the coil is vertical.',
    explanation:
      'When the coil is vertical, the magnetic forces on opposite sides act through the centre line of the coil, so they produce no turning moment. The magnitude of magnetic force on a side in the field is set by B I L and does not become greater just because the coil changes orientation. In a simple d.c. motor, the commutator reverses the current every half turn, so both the current direction in each side and the corresponding force direction reverse every half cycle. Therefore only option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Separate force magnitude from turning effect',
      'Torque depends on the moment arm',
      'Remember the commutator reverses the current every half turn',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-086-question.png'],
  },
  {
    id: 'mfld-087',
    type: 'multiple_choice',
    question:
      'A straight wire carrying a current I pointing out of the paper is placed in a uniform magnetic field between two pole pieces as shown. At which point, P, Q, R or S, can the resultant magnetic field be zero? Neglect the effect of the Earth magnetic field.',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'R',
    explanation:
      'The magnetic field produced by a current coming out of the paper is anticlockwise around the wire. At point R, the field due to the wire points to the right. The field between the pole pieces points from north to south, which is to the left in the diagram. These two fields are opposite at R, so they can cancel there. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the right-hand grip rule for the wire first',
      'Find where the wire field opposes the external field',
      'Only at that point can the resultant become zero',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-087-question.png'],
  },
  {
    id: 'mfld-088',
    type: 'multiple_choice',
    question:
      'P and Q are two particles carrying the same amount of charge but of different masses. They travel with the same speed and enter a uniform magnetic field pointing out of the paper as shown. Semi-circular paths with different radii are described before they emerge from the field. Which descriptions below are correct? (1) Both P and Q are positively charged. (2) P and Q emerge from the field with the same speed. (3) The mass of Q is greater than that of P.',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: '(1), (2) and (3)',
    explanation:
      'From the curvature shown, the magnetic force is toward the right as the particles enter. With magnetic field out of the paper, Fleming left-hand rule shows the particles must be positively charged. Magnetic force is always perpendicular to the motion, so it does no work and the particles leave with the same speed they entered. Since r = m v / (B q), and B, q and v are the same for both particles, the particle with the larger radius has the larger mass. Therefore all three statements are correct and option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the direction of curvature to infer the sign of charge',
      'Magnetic force changes direction, not speed',
      'Compare radii using r = m v / (B q)',
    ],
    sectionId: 'magnetic-field',
    imagePaths: ['/physics/exercises/magnetic-field/mfld-088-question.png'],
  },
  {
    id: 'mfld-089',
    type: 'multiple_choice',
    question:
      "The figure below shows the magnetic field pattern on a horizontal surface around a long vertical straight wire carrying a steady current I pointing out of the paper. The Earth's magnetic field is NOT neglected. What are the directions of the following?",
    options: [
      '/physics/exercises/magnetic-field/mfld-089-option-a.png',
      '/physics/exercises/magnetic-field/mfld-089-option-b.png',
      '/physics/exercises/magnetic-field/mfld-089-option-c.png',
      '/physics/exercises/magnetic-field/mfld-089-option-d.png',
    ],
    answer: '/physics/exercises/magnetic-field/mfld-089-option-a.png',
    explanation:
      'The field due to a current coming out of the paper is anticlockwise around the wire. Since the Earth magnetic field is not neglected, the actual direction at each marked point must be found by vector addition of the wire field and the Earth field. Only the set of directions shown in option A is consistent with that resultant field pattern. Therefore option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the right-hand grip rule for the straight wire first',
      'Then add the Earth magnetic field vectorially',
      'Choose the option that matches the resultant directions',
    ],
    sectionId: 'magnetic-field',
    imagePaths: [
      '/physics/exercises/magnetic-field/mfld-089-question.png',
      '/physics/exercises/magnetic-field/mfld-089-question-2.png',
    ],
  },
  {
    id: 'emi-001',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning the generator shown in the figure is/are correct? (1) The direction of the current through the load reverses periodically. (2) The maximum magnitude of the current depends on the speed of rotation of the coil. (3) The maximum magnitude of the current depends on the resistance of the load.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      'The generator shown uses a commutator, so it is a d.c. generator and the current through the load does not reverse direction. The maximum induced e.m.f. increases when the coil rotates faster, so the maximum current also depends on the rotational speed. By I = V / R, for a given induced voltage, the current also depends on the load resistance. Therefore statements (2) and (3) are correct, and option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'A commutator gives a unidirectional output',
      'Faster rotation gives a larger induced e.m.f.',
      'Use I = V / R for the load current',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-001-question.png'],
  },
  {
    id: 'emi-002',
    type: 'multiple_choice',
    question:
      'The figure shows a bar magnet moving along the diameter of a metal ring. Which of the following will happen?',
    options: [
      'An induced current will flow in a clockwise direction in the ring.',
      'An induced current will flow in an anticlockwise direction in the ring.',
      'An alternating current will be produced in the ring.',
      'No induced current will be produced.',
    ],
    answer: 'No induced current will be produced.',
    explanation:
      'Induced current is produced only when the magnetic flux through the ring changes. In this arrangement, the magnet moves along the diameter of the ring in such a way that there is no magnetic flux threading the loop. Since the flux through the ring remains zero throughout, no induced current is generated. Therefore option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Check whether magnetic field lines pass through the area of the ring',
      'Induction requires a change in magnetic flux through the loop',
      'If the flux is always zero, there is no induced current',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-002-question.png'],
  },
  {
    id: 'emi-003',
    type: 'multiple_choice',
    question: 'Which of the following devices is designed to convert mechanical energy into electrical energy?',
    options: ['dynamo', 'transformer', 'motor', 'electric cell'],
    answer: 'dynamo',
    explanation:
      'A dynamo or generator converts the mechanical energy of rotation into electrical energy by electromagnetic induction. A transformer transfers electrical energy between coils without converting from mechanical energy. A motor converts electrical energy into mechanical energy, and an electric cell converts chemical energy into electrical energy. Therefore option A is correct.',
    difficulty: 1,
    points: 5,
    hints: [
      'Think about which device uses rotation to produce current',
      'A motor does the reverse conversion',
      'A transformer does not involve mechanical input',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-004',
    type: 'multiple_choice',
    question:
      'A copper rod A B is free to move on two parallel conducting wires. It is pulled by a force F and moves in the direction shown in the figure. The direction of the magnetic field points into the paper. Which of the following statements is/are true? (1) A current will flow from C to D through P. (2) A current will flow from B to A through Q. (3) An induced voltage will be set up across A B.',
    options: ['(2) only', '(3) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      'As the rod moves through the magnetic field, charges in the rod experience magnetic force and an induced e.m.f. is produced across A B, so statement (3) is correct. By Fleming right-hand rule, the induced current in the external branch through Q is from B to A, so statement (2) is correct. The current in branch P is therefore from D to C, not from C to D, so statement (1) is false. Hence option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Fleming right-hand rule for a moving conductor',
      'A moving rod in a magnetic field develops motional e.m.f.',
      'Work out the loop direction before checking branch P',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-004-question.png'],
  },
  {
    id: 'emi-005',
    type: 'multiple_choice',
    question:
      'A light coil of wire X Y is suspended by insulating string such that it can swing freely. A solenoid connected to a cell with a switch S is placed near to the end Y of the coil as shown. What would happen to the coil X Y just when the switch S is closed?',
    options: [
      'The coil moves towards the solenoid.',
      'The coil moves away from the solenoid.',
      'The coil would move down.',
      'The coil would move up.',
    ],
    answer: 'The coil moves away from the solenoid.',
    explanation:
      'When the switch is closed, the current in the solenoid rises from zero, so the magnetic flux through the nearby coil changes. An induced current is produced in the suspended coil that opposes this increase in flux. The near end Y becomes the same pole as the nearby end of the solenoid, so the two repel. Therefore the coil moves away from the solenoid and option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Apply Lenz law to the changing magnetic field',
      'The induced current opposes the change in flux',
      'Like poles repel',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-005-question.png'],
  },
  {
    id: 'emi-006',
    type: 'multiple_choice',
    question:
      'The figure shows the display on a CRO with the time base set at 1 ms cm^-1 and Y-gain at 0.5 V cm^-1. The peak voltage and frequency of the a.c. voltage applied across the Y-plates are',
    options: [
      '1.5 V, 500 Hz',
      '1.5 V, 250 Hz',
      '3.0 V, 50 Hz',
      '3.0 V, 250 Hz',
    ],
    answer: '1.5 V, 250 Hz',
    explanation:
      'The peak height is 3 cm, so the peak voltage is 0.5 x 3 = 1.5 V. One full cycle spans 4 cm horizontally, so the period is 1 ms cm^-1 x 4 cm = 4 ms. Therefore the frequency is 1 / (4 x 10^-3) = 250 Hz. Hence option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Read peak height from the vertical scale',
      'Read one full cycle width from the horizontal scale',
      'Use f = 1/T',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-006-question.png'],
  },
  {
    id: 'emi-007',
    type: 'multiple_choice',
    question:
      'A magnet is allowed to fall through a copper ring. What is the direction of the induced current (if any) on the ring observed by the eye when the magnet is in the positions shown in Figure (1), Figure (2) and Figure (3)?',
    options: [
      'Figure (1): clockwise; Figure (2): no current; Figure (3): anticlockwise',
      'Figure (1): anticlockwise; Figure (2): no current; Figure (3): clockwise',
      'Figure (1): anticlockwise; Figure (2): no current; Figure (3): anticlockwise',
      'Figure (1): anticlockwise; Figure (2): anticlockwise; Figure (3): clockwise',
    ],
    answer: 'Figure (1): anticlockwise; Figure (2): no current; Figure (3): clockwise',
    explanation:
      'In Figure (1), the north pole approaches the ring, so the ring opposes the approach by producing a north pole on the near side, which requires an anticlockwise current as viewed by the eye. In Figure (2), the magnet is centrally inside, so the flux through the ring is momentarily not changing and no current is induced. In Figure (3), the south pole moves away, so the ring tries to maintain the flux by making the far side effectively north, which gives a clockwise current. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Lenz law in each position separately',
      'Approaching and leaving cases give opposite current directions',
      'When flux is not changing, no current is induced',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-007-question.png'],
  },
  {
    id: 'emi-008',
    type: 'multiple_choice',
    question:
      'In Figure 1, the galvanometer deflects to the left with a reading of 10 microA. The north pole of the same magnet is now pushed towards the coil from the other side at a faster rate as shown in Figure 2. The deflection on the galvanometer will be',
    options: [
      'more than 10 microA to the right',
      'less than 10 microA to the left',
      'more than 10 microA to the left',
      'less than 10 microA to the right',
    ],
    answer: 'more than 10 microA to the left',
    explanation:
      'In both arrangements, Lenz law requires the coil to oppose the approaching pole in such a way that the induced current is in the same direction through the galvanometer as in Figure 1, so the deflection remains to the left. In Figure 2, the magnet is moved faster, so the rate of change of magnetic flux is larger. That gives a larger induced e.m.f. and hence a larger induced current. Therefore the reading is more than 10 microA to the left, so option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'First decide whether the current direction is the same or reversed',
      'Then use Faraday law: faster change gives larger induced e.m.f.',
      'Larger induced e.m.f. means a larger deflection',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-008-question.png'],
  },
  {
    id: 'emi-009',
    type: 'multiple_choice',
    question:
      'The CRO display shows a peak voltage of 20 V across a 5 kOhm resistor. What is the peak current in the resistor?',
    options: ['2 mA', '4 mA', '10 mA', '20 mA'],
    answer: '4 mA',
    explanation:
      'Use Ohm law for the peak values: I_0 = V_0 / R. With V_0 = 20 V and R = 5 x 10^3 ohm, the peak current is 20 / (5 x 10^3) = 4 x 10^-3 A = 4 mA. Therefore option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use the peak values directly',
      'Convert 5 kOhm to 5000 ohm first',
      'Then apply I = V / R',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-009-question.png'],
  },
  {
    id: 'emi-010',
    type: 'multiple_choice',
    question:
      'Two coils of conducting wires are wrapped on a soft-iron core as shown in the above figure. Switch S is closed and after a while re-opened. Which of the following statements is/are true? (1) At the moment when S is closed, a current flows through R from P to Q. (2) When S remains closed, there is no current flowing through R. (3) At the moment when S is re-opened, a current flows through R from P to Q.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) and (2) only',
    explanation:
      'When S is first closed, current in the primary coil rises and the magnetic field through the core increases. By Lenz law, an induced current appears in the secondary coil in the direction that opposes this increase, which makes current through R flow from P to Q, so statement (1) is true. Once the current in the primary becomes steady, the magnetic field is constant and no induced current remains, so statement (2) is true. When S is opened, the field collapses and the induced current reverses direction to oppose the decrease, so the current through R flows from Q to P, not from P to Q. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Induction depends on change in magnetic flux, not steady flux',
      'Closing and opening the switch produce opposite changes',
      'Apply Lenz law separately to the two instants',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-010-question.png'],
  },
  {
    id: 'emi-011',
    type: 'multiple_choice',
    question: 'The above diagram shows a simple generator. Which of the following graphs below shows the time variation of the voltage produced by the generator?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-011-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-011-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-011-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-011-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-011-option-b.png',
    explanation:
      'Because a commutator is used, the generator is a d.c. generator. Its output is not alternating positive and negative symmetrically; instead it is a unidirectional but varying voltage. That corresponds to a pulsating d.c. waveform. Therefore option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'A commutator makes the output one-directional',
      'So the waveform should not cross symmetrically into negative output as a pure a.c. source',
      'Look for pulsating d.c.',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-011-question.png'],
  },
  {
    id: 'emi-012',
    type: 'multiple_choice',
    question:
      'Which of the following statements about direct current (d.c.) and alternating current (a.c.) is/are correct? (1) All d.c. sources produce constant voltages. (2) The direction of current in an a.c. circuit changes with time. (3) Both d.c. and a.c. produce a heating effect in a resistor.',
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      'Not all d.c. sources provide constant voltage. For example, a d.c. generator gives a varying unidirectional voltage, so statement (1) is false. In an a.c. circuit, the current direction changes with time, so statement (2) is true. Both d.c. and a.c. currents can produce Joule heating in a resistor through the I^2 R effect, so statement (3) is true. Therefore option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Do not assume d.c. always means constant voltage',
      'A.c. means the current direction reverses with time',
      'Any current through a resistor can heat it',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-013',
    type: 'multiple_choice',
    question:
      'A magnet is initially placed between the ends of a soft iron core as shown above. The magnet is then quickly rotated clockwise through one complete revolution. Which of the following statements correctly describes the induced current flowing through the resistor R?',
    options: [
      'The current flows through R from P to Q, and then reverses its direction.',
      'The current flows through R from Q to P, and then reverses its direction.',
      'The current flows through R from P to Q.',
      'The current flows through R from Q to P.',
    ],
    answer: 'The current flows through R from P to Q, and then reverses its direction.',
    explanation:
      'At first, the north pole moves away from the right side of the core. By Lenz law, the core induces a south pole on the right to oppose this change, so the induced current through R is from P to Q. After half a turn, the changing flux reverses relative to the core, so the induced current also reverses and flows from Q to P. Therefore the current first flows from P to Q and then reverses direction. Option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Track the flux change during the first half-turn',
      'Then repeat for the second half-turn',
      'Lenz law gives opposite induced current directions in the two halves',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-013-question.png'],
  },
  {
    id: 'emi-014',
    type: 'multiple_choice',
    question: 'Which of the following correctly shows the major energy change in the device when it is working?',
    options: [
      'A microphone: electrical to sound',
      'A loudspeaker: sound to electrical',
      'A dynamo: electrical to electrical',
      'A motor: electrical to mechanical',
    ],
    answer: 'A motor: electrical to mechanical',
    explanation:
      'A microphone mainly converts sound energy into electrical energy, so option A is wrong. A loudspeaker converts electrical energy into sound energy, so option B is wrong. A dynamo converts mechanical energy into electrical energy, not electrical to electrical, so option C is wrong. A motor converts electrical energy into mechanical energy, so option D is correct.',
    difficulty: 1,
    points: 5,
    hints: [
      'Check the main input and output energy for each device',
      'A microphone and loudspeaker are opposite processes',
      'A motor turns electricity into motion',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-015',
    type: 'multiple_choice',
    question:
      'The diagram shows the trace of a signal on a CRO with the time base switched off. The Y-gain is set at 1 V cm^-1. Which of the following statements correctly describes the input signal?',
    options: [
      'It is an a.c. of peak voltage 1 V.',
      'It is an a.c. of peak voltage 2 V.',
      'It is a d.c. of constant voltage 1 V.',
      'It is a d.c. of constant voltage 2 V.',
    ],
    answer: 'It is an a.c. of peak voltage 1 V.',
    explanation:
      'With the time base switched off, a horizontal sweep is absent. An a.c. signal then appears as a vertical line because the spot moves up and down with time while remaining at the same horizontal position. The trace height from centre to peak is 1 cm, and with a Y-gain of 1 V cm^-1, the peak voltage is 1 V. Therefore option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Time base off means no horizontal sweep',
      'A vertical line indicates a varying Y deflection',
      'Use the vertical scale to read the peak value',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-015-question.png'],
  },
  {
    id: 'emi-016',
    type: 'multiple_choice',
    question:
      'The diagram shows the display on a CRO with the time base at 10 ms cm^-1 and Y-gain at 0.5 V cm^-1. Find the peak voltage and frequency of the signal applied across the Y-plates.',
    options: ['1 V, 16.7 Hz', '1 V, 25 Hz', '1 V, 50 Hz', '2 V, 25 Hz'],
    answer: '1 V, 25 Hz',
    explanation:
      'The peak height is 2 cm, so the peak voltage is 2 x 0.5 = 1 V. One full cycle spans 4 cm horizontally, so the period is 4 x 10 ms = 40 ms = 0.040 s. Therefore the frequency is 1 / 0.040 = 25 Hz. Hence option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Read peak height from the Y scale',
      'Read one full cycle from the time scale',
      'Use f = 1/T',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-016-question.png'],
  },
  {
    id: 'emi-017',
    type: 'multiple_choice',
    question: 'Which of the following devices is not an application of electromagnetic induction?',
    options: [
      'a bicycle dynamo',
      'a magnetic tape playback head',
      'a moving coil microphone',
      'a moving coil loudspeaker',
    ],
    answer: 'a moving coil loudspeaker',
    explanation:
      'A bicycle dynamo generates electricity by induction. A magnetic tape playback head detects changing magnetic flux and produces an induced signal. A moving coil microphone produces an induced e.m.f. when its coil moves in a magnetic field. A moving coil loudspeaker, however, mainly uses the motor effect, where a current-carrying coil experiences force in a magnetic field. Therefore the loudspeaker is not an application of electromagnetic induction. Option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Induction means changing magnetic flux produces e.m.f.',
      'A loudspeaker is mainly based on force on a current-carrying coil',
      'That is the motor effect, not induction',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-018',
    type: 'multiple_choice',
    question:
      'In the above circuit, the terminal Q and the sliding contact R of the variable resistor are connected to the Y-input of a CRO. If R is moved towards P, how would the amplitude and period of the trace displayed on the CRO be affected?',
    options: [
      'Amplitude increases; period remains unchanged',
      'Amplitude increases; period increases',
      'Amplitude decreases; period remains unchanged',
      'Amplitude decreases; period decreases',
    ],
    answer: 'Amplitude increases; period remains unchanged',
    explanation:
      'When R moves towards P, the resistance of RQ increases, so the potential difference between Q and R increases. That makes the vertical input to the CRO larger, so the amplitude of the trace increases. The period depends on the frequency of the a.c. source and is not affected by changing the variable resistor setting. Therefore the amplitude increases while the period remains unchanged. Option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Amplitude depends on the Y-input voltage',
      'Moving the slider changes the voltage division',
      'The period depends on the source frequency, not the slider position',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-018-question.png'],
  },
  {
    id: 'emi-019',
    type: 'multiple_choice',
    question:
      'A metal ring is released and falls vertically around a magnet as shown in the above diagram. Which of the following diagrams correctly describes the directions of the induced current, if any, in the ring at positions X and Y?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-019-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-019-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-019-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-019-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-019-option-b.png',
    explanation:
      'At X, the ring moves towards the magnet, so the magnetic flux through the ring increases. By Lenz law, the ring produces a field opposing that increase, so the lower side of the ring behaves as a north pole. At Y, the ring moves away from the magnet, so the ring produces a field opposing the decrease in flux, making the upper side behave as a north pole. Using the right-hand grip rule, the corresponding current directions match option B.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Lenz law to decide which pole the ring should form',
      'Approaching and receding give opposite induced effects',
      'Then use the right-hand grip rule for the current direction',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-019-question.png'],
  },
  {
    id: 'emi-020',
    type: 'multiple_choice',
    question:
      'The diagram shows an electricity generator connected to a load. Which of the following can increase the voltage produced by the generator? (1) Rotating the coil at a greater speed (2) Reducing the resistance of the load (3) Replacing the coil with one of larger area',
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(1) and (3) only',
    explanation:
      'The induced voltage depends on the rate of change of magnetic flux. Rotating the coil faster increases the rate of change of flux, so the induced voltage increases. A larger coil area encloses more magnetic flux, so that also increases the induced voltage. Reducing the load resistance may increase the current, but it does not directly increase the induced voltage of the generator. Therefore statements (1) and (3) are correct. Option C is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Induced voltage depends on changing magnetic flux',
      'Faster rotation means faster flux change',
      'Load resistance affects current, not the generated e.m.f.',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-020-question.png'],
  },
  {
    id: 'emi-021',
    type: 'multiple_choice',
    question:
      'In the above diagram, a metal rod is placed inside a magnetic field pointing into the paper. In which direction should the rod be moved in order to produce an induced current as shown in the diagram?',
    options: ['into the paper', 'out of the paper', 'upwards', 'downwards'],
    answer: 'downwards',
    explanation:
      'The induced current in the rod is shown from left to right. Using Fleming right-hand rule for generator action, with the magnetic field pointing into the paper, the motion of the rod must be downward to produce that current direction. Therefore the rod should move downward. Option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use the generator right-hand rule',
      'Field is into the paper',
      'Match the motion that gives left-to-right induced current',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-021-question.png'],
  },
  {
    id: 'emi-022',
    type: 'multiple_choice',
    question:
      'A bar magnet is placed near a solenoid. Which of the following correctly shows the direction of the induced current in the solenoid? (The arrow indicates the direction of motion of the magnet or solenoid.)',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-022-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-022-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-022-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-022-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-022-option-c.png',
    explanation:
      'When the solenoid moves towards the magnet, the magnetic flux through the solenoid increases. By Lenz law, the solenoid produces a magnetic pole on its left side that opposes the approach, so the left side becomes a south pole. That requires the induced current to flow from right to left through the galvanometer. This matches option C.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Lenz law: oppose the change in magnetic flux',
      'Approaching the magnet determines the induced pole at the near end',
      'Then infer current direction through the external circuit',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-023',
    type: 'multiple_choice',
    question:
      'A long solenoid is placed in a vertical position and its two ends are connected to the Y-input of a CRO (with the time base switched on). A bar magnet is released above the solenoid so that it falls through the solenoid. Which of the following figures best represents the trace shown on the CRO?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-023-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-023-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-023-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-023-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-023-option-a.png',
    explanation:
      'As the magnet approaches the solenoid, the changing magnetic flux induces a voltage pulse in one direction. When the magnet is near the middle of the solenoid, the flux change is momentarily small, so the induced voltage falls near zero. As the magnet leaves the solenoid, the flux changes in the opposite sense, so an induced voltage pulse appears in the opposite direction. The CRO trace is therefore two opposite pulses, which matches option A.',
    difficulty: 3,
    points: 15,
    hints: [
      'Approaching and leaving induce opposite voltages',
      'Inside the middle region the induced voltage passes through zero',
      'Look for a two-pulse trace with opposite signs',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-023-question.png'],
  },
  {
    id: 'emi-024',
    type: 'multiple_choice',
    question:
      'Two coils P and Q are wound on a soft-iron core as shown above. Switch S is closed and then opened again. Which of the following shows the directions of the induced current flowing through the resistor R?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-024-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-024-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-024-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-024-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-024-option-c.png',
    explanation:
      'When S is just closed, current in coil P rises from zero and creates a changing magnetic field through coil Q. By Lenz law, the induced current in Q must oppose that increase, so it produces a field in the opposite direction. That gives an upward current through resistor R. When S is opened again, the current in P suddenly drops to zero, so the magnetic field through Q decreases. The induced current then reverses so as to maintain the original field direction. Therefore the two current directions are opposite in the two cases, matching option C.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Lenz law for the instant of closing and opening separately',
      'Closing means increasing flux; opening means decreasing flux',
      'The induced current must reverse between the two events',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-024-question.png'],
  },
  {
    id: 'emi-025',
    type: 'multiple_choice',
    question:
      'A rectangular coil is moved with a uniform speed from position A to position B in a uniform magnetic field pointing into the paper as shown above. Which of the following graphs represents the variation of the current induced in the coil with time?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-025-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-025-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-025-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-025-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-025-option-c.png',
    explanation:
      'When the coil just enters the magnetic field region, the magnetic flux through it increases, so an induced current appears in one direction. While the coil is fully inside the uniform field, the flux through the coil is constant, so the induced current is zero. When the coil leaves the field region, the flux decreases, so an induced current appears in the opposite direction. The correct graph is therefore a pulse of one sign, then zero, then a pulse of the opposite sign. This matches option C.',
    difficulty: 3,
    points: 15,
    hints: [
      'Induced current exists only when flux changes',
      'Entering and leaving the field give opposite current directions',
      'Inside the field at constant speed, the flux is constant',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-025-question.png'],
  },
  {
    id: 'emi-026',
    type: 'multiple_choice',
    question:
      'The diagram shows an electricity generator connected to a load. Which of the following statements is/are correct? (1) The generator produces an alternating current through the load. (2) At the instant shown, a current is flowing through the load from P to Q. (3) The current produced reaches a maximum when the coil is vertical.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      'Since slip rings are used, the generator produces alternating current. At the instant shown, Fleming right-hand rule gives the current through the load from Q to P, not from P to Q. The induced current is maximum when the sides of the coil cut the field lines most effectively, and it becomes zero when the coil is vertical. Therefore only statement (1) is correct. Option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Slip rings mean a.c. output',
      'Use the generator right-hand rule for the instantaneous current direction',
      'The induced current is zero when the coil is vertical',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-026-question.png'],
  },
  {
    id: 'emi-027',
    type: 'multiple_choice',
    question:
      'The photographs show the trace of a signal on a CRO and some settings of the CRO. The voltage gain is set at 0.5 V per cm and the time-base is set at 10 ms per cm. Find the frequency and peak voltage of the input signal.',
    options: ['10 Hz, 2 V', '10 Hz, 4 V', '20 Hz, 2 V', '20 Hz, 4 V'],
    answer: '10 Hz, 2 V',
    explanation:
      'The time base is 10 ms per cm and one complete cycle occupies 10 cm, so the period is 100 ms, or 0.1 s. Therefore the frequency is 1 / 0.1 = 10 Hz. The amplitude is 4 cm and the voltage gain is 0.5 V per cm, so the peak voltage is 4 x 0.5 = 2 V. Therefore option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Read one complete cycle horizontally',
      'Use f = 1/T',
      'Read the vertical amplitude from the voltage scale',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-027-question.png'],
  },
  {
    id: 'emi-028',
    type: 'multiple_choice',
    question:
      'A conducting rectangular coil ABCD is moved across a uniform magnetic field pointing into the paper as shown above. Which of the following statements is/are correct? (1) The induced current flows from A to C through B when the coil is at P. (2) The magnitude of the induced current is the largest when the coil is at Q. (3) The direction of the induced current when the coil is at R is the same as that when it is at P.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      'At P, the coil is entering the field region, so the magnetic flux through it is increasing. By Fleming right-hand rule, the induced current is anticlockwise, so it flows from A to C through B. At Q, the coil is fully inside the uniform field, so the flux is constant and no induced current is produced. At R, the coil is leaving the field, so the induced current reverses direction. Therefore only statement (1) is correct. Option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Induced current exists only when magnetic flux changes',
      'Fully inside a uniform field means no induced current',
      'Entering and leaving give opposite current directions',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-028-question.png'],
  },
  {
    id: 'emi-029',
    type: 'multiple_choice',
    question:
      'An electronic balance reads X when a closed-loop copper coil is placed on it as shown above. A bar magnet drops from a certain height vertically above. Just before the magnet reaches the coil, the reading of the electronic balance is',
    options: ['the same as X', 'first smaller than X and then greater than X', 'smaller than X', 'greater than X'],
    answer: 'greater than X',
    explanation:
      'As the magnet approaches the coil, the changing magnetic flux induces a current in the coil. By Lenz law, the coil opposes the approach and develops a pole arrangement that repels the approaching magnet. The magnet experiences an upward force, so by Newton third law the coil experiences a downward force. That extra downward force increases the reading on the balance. Therefore the reading is greater than X. Option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use Lenz law to determine the induced effect',
      'The force on the magnet and the force on the coil are equal and opposite',
      'A downward force on the coil increases the balance reading',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-029-question.png'],
  },
  {
    id: 'emi-030',
    type: 'multiple_choice',
    question:
      'Under an external force, a metal rod PQ is moving with a uniform speed v on a metal rail placed in a uniform magnetic field as shown above. Which of the following descriptions is/are correct? (1) Current flows through the galvanometer from Q to R. (2) The metal rod will accelerate to the right if the direction of the magnetic field is reversed. (3) The pointer of the galvanometer will deflect to opposite direction if the direction of the magnetic field is reversed.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(3) only',
    explanation:
      'By Fleming right-hand rule, the induced current in the rod is from Q to P, so through the galvanometer it flows from R to Q, not from Q to R. If the magnetic field is reversed, the induced current also reverses, but the magnetic force still opposes the motion, so the rod does not accelerate to the right. Since the current reverses, the galvanometer pointer deflects in the opposite direction. Therefore only statement (3) is correct. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find induced current direction first',
      'The induced magnetic force always opposes the motion',
      'Reversing the magnetic field reverses the induced current',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-030-question.png'],
  },
  {
    id: 'emi-031',
    type: 'multiple_choice',
    question:
      'The above figure shows a simple structure of a d.c. generator. Which of the following statements is/are correct? (1) The current delivered to the load is constant. (2) The current generated in the coil is alternating, but the current delivered to the load is unidirectional. (3) The current flows through the load from X to Y.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      'A d.c. generator with a commutator gives an unsteady d.c. output, so the current delivered to the load is not constant. The current in the rotating coil is alternating, but the commutator makes the current through the load unidirectional. At the instant shown, Fleming right-hand rule gives current through the external load from X to Y. Therefore statements (2) and (3) are correct. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'A commutator makes the external current unidirectional',
      'The output is pulsating d.c., not constant',
      'Use the right-hand rule for the instantaneous external current direction',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-031-question.png'],
  },
  {
    id: 'emi-032',
    type: 'multiple_choice',
    question:
      'In the figure, a rectangular coil is pulled to the right with uniform speed in a uniform magnetic field pointing into the paper. Which of the following descriptions about the current induced in the coil and the magnetic force acting on the coil is correct?',
    options: [
      'No current is induced in the coil and no magnetic force is acting on the coil.',
      'A current is induced in the coil but the resultant magnetic force acting on the coil is zero.',
      'A current is induced in the coil and a resultant magnetic force is acting on the coil to the left.',
      'A current is induced in the coil and a resultant magnetic force is acting on the coil to the right.',
    ],
    answer:
      'A current is induced in the coil and a resultant magnetic force is acting on the coil to the left.',
    explanation:
      'The motion of the coil changes the magnetic flux linkage, so an induced current is produced. By Fleming right-hand rule the induced current direction can be found, and by Fleming left-hand rule the magnetic force on the current-carrying sides can then be determined. The net magnetic force opposes the motion, so it acts to the left while the coil is being pulled to the right. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Changing flux induces current',
      'Then use the left-hand rule for the force direction',
      'Lenz law means the force opposes the motion',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-032-question.png'],
  },
  {
    id: 'emi-033',
    type: 'multiple_choice',
    question:
      'An experiment about electromagnetism is designed as shown above. Coil B has a greater number of turns than coil A. Coil B is connected to a sensitive ammeter. Which of the following statements is/are correct? (1) When the switch is closed, a steady current flows through the ammeter. (2) At the moment the switch is opened, a current flows through the ammeter momentarily. (3) If the soft iron rod is replaced by a glass rod, the ammeter will have a greater deflection at the moment the switch is opened.',
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: '(2) only',
    explanation:
      'When the switch is closed, the changing current in coil A causes only a brief induced current in coil B, not a steady one. When the switch is opened, the magnetic field in the core collapses, so the changing flux induces a momentary current in coil B. Replacing the soft iron rod with a glass rod weakens the magnetic coupling, so the induced current and ammeter deflection would be smaller, not greater. Therefore only statement (2) is correct. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Induced current appears only when the magnetic flux is changing',
      'Opening the switch causes the field to collapse suddenly',
      'A soft iron core strengthens magnetic coupling more than glass',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-033-question.png'],
  },
  {
    id: 'emi-034',
    type: 'multiple_choice',
    question:
      'The figure above shows the position of the coil in a generator at time t = 0. The current is taken to be positive when it flows from P to Q through the load. Which of the following graphs best represents the variation of current I with time t as the coil rotates?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-034-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-034-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-034-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-034-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-034-option-d.png',
    explanation:
      'At the instant shown, the induced current through the load is from P to Q, so the current is positive. The coil is at the position where the rate of change of magnetic flux is greatest, so the magnitude of the current is maximum at t = 0. As the coil continues rotating in a generator, the current varies sinusoidally. Therefore the correct graph starts from a positive maximum and follows the corresponding alternating variation. This matches option D.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the stated sign convention for current',
      'At the shown position the induced current is maximum',
      'Generator output varies periodically with rotation',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-034-question.png'],
  },
  {
    id: 'emi-035',
    type: 'multiple_choice',
    question:
      'When a magnet is moving towards end Q of a solenoid, it is found that a north pole is induced at end Q. As shown in the figure above, the magnet passes through and moves away from the solenoid, what are the polarities of end P of the solenoid and end X of the magnet?',
    options: ['P is S, X is S', 'P is S, X is N', 'P is N, X is S', 'P is N, X is N'],
    answer: 'P is N, X is N',
    explanation:
      'If a north pole is induced at Q while the magnet approaches Q, the approaching end of the magnet must also be a north pole so that repulsion opposes the approach. Hence X is north. After the magnet passes through and moves away from the solenoid, the solenoid must oppose the separation by attracting the departing pole. Therefore the far end P becomes a north pole so that attraction occurs as required by Lenz law. Hence both P and X are north poles. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Lenz law: the induced effect opposes the change',
      'Approaching means repulsion; moving away means attraction',
      'Infer the pole at Q first, then deduce X and P',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-035-question.png'],
  },
  {
    id: 'emi-036',
    type: 'multiple_choice',
    question:
      'A copper ring R is falling through a solenoid along the axis as shown. The plane of the ring is kept horizontal throughout. The solenoid is carrying a steady current I. Y is the centre of the solenoid. Which of the following combinations about the directions of the induced current in the ring (if any) at X and at Y as observed from O is correct?',
    options: [
      'At X: clockwise; at Y: clockwise',
      'At X: clockwise; at Y: no current',
      'At X: anticlockwise; at Y: anticlockwise',
      'At X: anticlockwise; at Y: no current',
    ],
    answer: 'At X: anticlockwise; at Y: no current',
    explanation:
      'At X, the ring is entering a region where the magnetic flux through it is changing, so an induced current is produced. By Lenz law, the induced current opposes the increase of flux, and by the right-hand grip rule the current is anticlockwise as seen from O. At Y, the ring is at the centre where the field is locally steady and the flux is momentarily not changing, so no induced current is produced. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Induced current depends on change of magnetic flux, not just field presence',
      'At the centre position the flux is momentarily not changing',
      'Use the right-hand grip rule once the induced pole is known',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-036-question.png'],
  },
  {
    id: 'emi-037',
    type: 'multiple_choice',
    question:
      'A metal rod PQ is moving with a uniform speed v on a metal rail placed in a uniform magnetic field as shown in the figure above. A resistor is connected across RS. Which of the following descriptions is/are correct? (1) Kinetic energy of the rod is converted into electrical energy. (2) Current flows through the resistor from S to R. (3) The induced current will be reversed if the rod moves in the opposite direction.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      'Because the rod moves with uniform speed, its kinetic energy does not decrease, so statement (1) is not correct. By Fleming right-hand rule, the induced current in the rod is from Q to P, so through the external resistor it flows from S to R. If the rod moves in the opposite direction, the rate of change of magnetic flux reverses sign and the induced current reverses. Therefore statements (2) and (3) are correct. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Uniform speed means no loss of kinetic energy of the rod itself',
      'Use the generator right-hand rule for current direction',
      'Reversing the motion reverses the induced current',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-037-question.png'],
  },
  {
    id: 'emi-038',
    type: 'multiple_choice',
    question:
      'The magnetic flux through a coil of N turns increases at a uniform rate from zero to Phi in time t. What is the magnitude of the e.m.f. induced in the coil?',
    options: ['N Phi t', 'Phi t / N', 'N Phi / t', 'N t / Phi'],
    answer: 'N Phi / t',
    explanation:
      'By Faraday law, the magnitude of the induced e.m.f. equals the rate of change of magnetic flux linkage. The flux linkage changes from 0 to N Phi in time t, so the induced e.m.f. is e = (N Phi - 0) / t = N Phi / t. Therefore option C is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use e = Delta(N Phi) / Delta t',
      'Flux linkage changes from 0 to N Phi',
      'The increase is uniform',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-039',
    type: 'multiple_choice',
    question:
      'S is a long solenoid. L1 is a wire loop just inside the solenoid, and L2 is a wire loop just outside the solenoid. The current in the solenoid is increased at a steady rate, such that the e.m.f. induced in L1 is 1.2 V. Find the e.m.f. induced in L2.',
    options: ['0 V', '0.6 V', '1.2 V', '2.4 V'],
    answer: '1.2 V',
    explanation:
      'Both loops enclose the same changing magnetic flux produced by the long solenoid, because the magnetic field is concentrated inside the solenoid and the flux linked with each loop is the same. Since the current in the solenoid increases at a steady rate, the rate of change of flux linkage is the same for L1 and L2. Therefore the induced e.m.f. in L2 is equal to that in L1, namely 1.2 V. Option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Compare the magnetic flux linkage for the two loops',
      'For a long solenoid, the field is concentrated inside it',
      'Same rate of change of flux gives the same induced e.m.f.',
    ],
    sectionId: 'electromagnetic-induction',
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-039-question.png'],
  },
  {
    id: 'emi-040',
    type: 'multiple_choice',
    question:
      'Rectangular coil PQRS is driven with constant velocity towards the right in a uniform magnetic field directed perpendicular into paper as shown in the figure. Which of the following statements is correct at the instant shown in the figure?',
    options: [
      'The magnitude of the magnetic flux through the coil changes with time.',
      'An induced current is flowing in the coil in the anticlockwise direction.',
      'An electromagnetic force acts on the side PQ in a direction opposing its motion.',
      'There is no induced current flowing in the coil.',
    ],
    answer: 'There is no induced current flowing in the coil.',
    explanation:
      'At the instant shown, both vertical sides of the coil cut the magnetic field lines in opposite senses. An e.m.f. is induced along PQ and an equal e.m.f. is induced along SR, but the two induced e.m.f.s oppose each other around the loop. Hence the net e.m.f. around the circuit is zero, so no induced current flows. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Consider the induced e.m.f. in both vertical sides of the coil',
      'The two sides move through the field in opposite senses',
      'Zero net e.m.f. means no induced current',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-040-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-041',
    type: 'multiple_choice',
    question:
      'A large copper disc mounted on a horizontal axle is spun in the clockwise direction between the poles of a horseshoe magnet. Which of the following diagrams correctly shows the eddy currents flowing in the disc?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-041-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-041-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-041-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-041-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-041-option-d.png',
    explanation:
      'As the disc rotates, the right side moves into the magnetic field region while the left side moves out of it. By Lenz law, the induced eddy currents oppose these changes in magnetic flux. This gives an anticlockwise eddy current on the right side and a clockwise eddy current on the left side. The correct pattern is therefore option D.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Lenz law at the right and left sides separately',
      'Right side enters the field; left side leaves the field',
      'Choose the option that opposes both changes',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-041-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-042',
    type: 'multiple_choice',
    question:
      'A solenoid has a length of 0.30 m and cross-sectional area of 3.2 x 10^-4 m^2. There are 1000 turns of wire wound on it. When the solenoid carries a current of 1.5 A, the magnetic flux through the solenoid is',
    options: [
      '6.0 x 10^-7 Wb',
      '2.0 x 10^-6 Wb',
      '5.7 x 10^-4 Wb',
      '2.0 x 10^-3 Wb',
    ],
    answer: '2.0 x 10^-6 Wb',
    explanation:
      'For a long solenoid, B = mu0 N I / l. The magnetic flux through one cross-section is Phi = B A = (mu0 N I / l) A. Substituting mu0 = 4 pi x 10^-7, N = 1000, I = 1.5 A, l = 0.30 m and A = 3.2 x 10^-4 m^2 gives Phi = 2.0 x 10^-6 Wb. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use B = mu0 N I / l for a long solenoid',
      'Then use Phi = B A',
      'Substitute the given values carefully',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-043',
    type: 'multiple_choice',
    question:
      'A sinusoidal voltage is generated by an a.c. generator. If the speed of rotation of the coil is increased, what will happen to the frequency and the peak voltage generated?',
    options: [
      'frequency increases; peak voltage no change',
      'frequency no change; peak voltage increases',
      'frequency increases; peak voltage decreases',
      'frequency increases; peak voltage increases',
    ],
    answer: 'frequency increases; peak voltage increases',
    explanation:
      'The frequency of the generated a.c. equals the rotational frequency of the coil, so increasing the rotational speed increases the frequency. The peak induced e.m.f. also increases because the rate of change of magnetic flux increases. Therefore both the frequency and the peak voltage increase. Option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Frequency follows the rotational speed',
      'Induced e.m.f. depends on the rate of change of flux',
      'Faster rotation means larger peak e.m.f.',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-044',
    type: 'multiple_choice',
    question:
      'A short bar magnet moving with uniform velocity passes through an air-cored solenoid connected to a galvanometer as shown. Which of the following graphs best represents the variation of the current I in the solenoid with time t?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-044-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-044-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-044-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-044-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-044-option-a.png',
    explanation:
      'As the magnet approaches the solenoid, the changing flux induces a current in one direction. When the magnet is near the middle, the rate of change of flux falls to zero momentarily. As the magnet leaves, the flux changes in the opposite sense, so the induced current reverses. The correct graph must therefore show pulses of opposite signs, which is option A.',
    difficulty: 3,
    points: 15,
    hints: [
      'Approaching and leaving give opposite changes of flux',
      'So the induced current must reverse direction',
      'Look for opposite-signed pulses',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-044-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-045',
    type: 'multiple_choice',
    question:
      'A uniform magnetic field acting perpendicular into paper is inside a circular region of radius 8 cm. A circular loop of radius 10 cm is placed outside the field region as shown in the figure. If the magnetic field is now decreasing at a constant rate of 0.01 T s^-1, what will be the magnitude and direction of the induced e.m.f. in the loop?',
    options: [
      '2.0 x 10^-4 V, from A to B via the loop',
      '2.0 x 10^-4 V, from B to A via the loop',
      '3.1 x 10^-4 V, from A to B via the loop',
      '3.1 x 10^-4 V, from B to A via the loop',
    ],
    answer: '2.0 x 10^-4 V, from A to B via the loop',
    explanation:
      'Only the smaller field region contributes to the changing magnetic flux. So e = A dB/dt = pi (0.08)^2 (0.01) = 2.0 x 10^-4 V. Since the original field into the paper is decreasing, the induced current must produce a field into the paper to oppose the decrease. That requires a clockwise current, which corresponds to current from A to B through the loop as stated in option A.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use only the area where magnetic field actually exists',
      'Apply e = A dB/dt',
      'Use Lenz law for the direction',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-045-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-046',
    type: 'multiple_choice',
    question:
      'A rectangular wire frame is placed outside a uniform magnetic field which is confined to a square region as shown in the figure. The direction of the magnetic field is perpendicular into paper. If the wire frame moves to the right with a uniform velocity, which graph best represents the variation of the induced current I with time t? The anticlockwise direction of the current is taken as positive.',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-046-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-046-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-046-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-046-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-046-option-d.png',
    explanation:
      'Initially there is no change of magnetic flux through the frame, so the induced current is zero. When the frame edge starts cutting into the field, a constant induced current appears because the frame moves with uniform speed. Its direction is clockwise, which is taken as negative. After the frame fully enters or fully leaves the changing region, the current returns to zero. This matches option D.',
    difficulty: 3,
    points: 15,
    hints: [
      'No flux change means zero induced current',
      'Uniform entry gives a constant-magnitude current',
      'Clockwise is negative in this question',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-046-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-047',
    type: 'multiple_choice',
    question:
      'Two rectangular wire loops P and Q are placed in the same plane side by side. Loop P includes a battery and a switch S, which is initially open. If S is suddenly closed, what is the direction of the induced current in loop Q? Are the magnetic forces between the two loops attractive or repulsive?',
    options: [
      'clockwise, attractive',
      'clockwise, repulsive',
      'anticlockwise, attractive',
      'anticlockwise, repulsive',
    ],
    answer: 'anticlockwise, repulsive',
    explanation:
      'When S is suddenly closed, the current in loop P rises and produces an increasing magnetic field through loop Q. By Lenz law, the induced current in Q must oppose that increase, so the induced current is anticlockwise. The adjacent sides of the two loops then carry currents in opposite directions, so they repel each other. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Closing the switch makes the current in loop P increase suddenly',
      'Loop Q opposes the increase of flux through it',
      'Opposite currents in nearby parallel sides repel',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-047-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-048',
    type: 'multiple_choice',
    question:
      'A certain length of a copper wire is bent to form a circular coil of one turn. The coil is then placed in a uniform magnetic field with its plane normal to the direction of the magnetic field. The flux linkage through the coil is Phi. The same length of wire is now bent to form a double loop of smaller radius. The flux linkage through the coil would become',
    options: ['Phi / 4', 'Phi / 2', 'Phi', '2 Phi'],
    answer: 'Phi / 2',
    explanation:
      'For the same wire length, making two turns means 2(2 pi r\') = 2 pi r, so the new radius is half of the original. Hence the area of each new loop becomes one quarter of the original. Flux linkage is N B A, so when the number of turns doubles but the area per turn becomes one quarter, the flux linkage becomes 2 x (1/4) = 1/2 of the original. Therefore the new flux linkage is Phi / 2. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the same total wire length condition',
      'Flux linkage equals N B A',
      'Doubling turns but quartering area gives half the linkage',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-049',
    type: 'multiple_choice',
    question:
      'A metal rod PQ moves with constant velocity across a uniform magnetic field directed perpendicularly into paper as shown in the above figure. A voltage is induced across the rod. Which of the following statements is/are correct? (1) The magnitude of the voltage depends on the length of the rod. (2) Point P is at a lower potential than Q. (3) A magnetic force is acting on the rod to oppose its motion.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) only',
    explanation:
      'The induced e.m.f. across a moving rod is e = B v L, so it depends on the rod length L. By the right-hand rule, the induced e.m.f. is from Q to P, so P is at a higher potential, not lower. Since the circuit is not complete, there is induced e.m.f. but no induced current, so no magnetic force acts to oppose the motion. Therefore only statement (1) is correct. Option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use e = B v L for a moving rod',
      'Open circuit gives voltage but no current',
      'No current means no magnetic force on the rod',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-049-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-050',
    type: 'multiple_choice',
    question:
      'An aluminium ring floats above a coil carrying alternating current. Which of the following will affect the height of the ring? (1) the resistivity of the ring (2) the density of the ring (3) the frequency of the alternating current',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1), (2) and (3)',
    explanation:
      'A lower resistivity gives a larger induced current in the ring, so the upward magnetic effect is larger. A lower density means a smaller weight, so the same magnetic lifting effect can hold the ring at a greater height. A higher a.c. frequency increases the rate of change of magnetic flux, which increases the induced current and hence the lifting force. Therefore all three factors affect the height. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Think about what changes the induced current in the ring',
      'The ring height depends on magnetic lift versus weight',
      'Frequency changes the rate of change of flux',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-050-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-051',
    type: 'multiple_choice',
    question:
      'The magnetic flux linkage for a coil placed in a uniform magnetic field depends on (1) the resistance of the coil (2) the number of turns of the coil (3) the angle between the normal of the coil and the direction of the magnetic field',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      'Magnetic flux linkage is N Phi, where Phi = B A cos theta. It depends on the number of turns N and on the angle between the field and the normal to the coil, because that changes the perpendicular component of the field. The resistance of the coil does not affect the flux linkage. Therefore statements (2) and (3) are correct. Option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use flux linkage = N B A cos theta',
      'Resistance is not part of the flux formula',
      'The angle changes the effective component of B',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-052',
    type: 'multiple_choice',
    question:
      'A bar magnet is moved perpendicularly towards a copper disc. Which of the following statements are correct? (1) Eddy current is induced in the copper disc. (2) Temperature of the copper disc increases. (3) A repulsive force is experienced by the magnet.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1), (2) and (3)',
    explanation:
      'The moving magnet changes the magnetic flux through the copper disc, so eddy currents are induced. These eddy currents produce heating in the disc, so its temperature increases. By Lenz law, the induced currents oppose the approach of the magnet, so the magnet experiences a repulsive force. Therefore all three statements are correct. Option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Changing magnetic flux induces eddy current',
      'Eddy current causes heating',
      'Lenz law gives a force opposing the approach',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-053',
    type: 'multiple_choice',
    question:
      'The above figure shows a small coil, connected to a light beam galvanometer, placed in a region of uniform magnetic field between the poles of a magnet. The plane of the coil is parallel to the pole faces. Which of the following actions would produce a deflection of the galvanometer? (1) Moving the coil to and fro between the poles. (2) Moving the coil away from the region between the pole faces. (3) Rotating the coil about a diameter through an angle of 180 degrees.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(2) and (3) only',
    explanation:
      'Moving the coil to and fro entirely within a uniform field does not change the magnetic flux through it, so no e.m.f. is induced. Moving the coil out of the field changes the flux to zero, so a deflection is produced. Rotating the coil changes the angle between the coil and the field, so the flux changes and an e.m.f. is induced. Therefore statements (2) and (3) are correct. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'A galvanometer deflects only if flux linkage changes',
      'Uniform translation inside a uniform field does not change flux',
      'Leaving the field or rotating the coil changes flux',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-053-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-054',
    type: 'multiple_choice',
    question:
      'A rectangular metal wire frame ABCD moves to the left with a uniform speed across a region of uniform magnetic field acting perpendicularly into paper. Which of the following is/are true at the instant shown in the figure? (1) A current is flowing in the clockwise direction. (2) The electric potential at B is higher than that at C. (3) The side AD experiences a magnetic force acting to the right.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      'Using the right-hand rule, the induced current in the moving frame flows from B to C along the top side, so the current around the loop is clockwise. Since the induced e.m.f. is from B to C, point C is at a higher potential than B, so statement (2) is false. Side AD is outside the magnetic field, so it experiences no magnetic force. Therefore only statement (1) is correct. Option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the right-hand rule for the moving frame',
      'Potential rises in the direction of the induced e.m.f.',
      'A wire outside the field has no magnetic force',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-054-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-055',
    type: 'multiple_choice',
    question:
      'A coil of metal wire is placed on a plane perpendicular to a uniform magnetic field. The coil is rotated through 180 degrees about a diameter as shown. The induced e.m.f. in the coil is independent of',
    options: [
      'the area of the coil.',
      'the flux density of the magnetic field.',
      'the number of turns of the coil.',
      'the resistance of the coil.',
    ],
    answer: 'the resistance of the coil.',
    explanation:
      'The average induced e.m.f. is e = Delta(N Phi) / Delta t. For a 180 degree turn, the flux through the coil changes by an amount that depends on the number of turns, the magnetic flux density and the area of the coil. It also depends on the time taken for the rotation. The resistance of the coil affects the induced current, but not the induced e.m.f. itself. Therefore option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use Faraday law for induced e.m.f.',
      'e.m.f. depends on change of flux linkage per unit time',
      'Resistance affects current, not induced e.m.f.',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-055-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-056',
    type: 'multiple_choice',
    question:
      'A long straight wire carrying an a.c. current lies on the plane of the paper as shown. A search coil connected to a CRO with the time-base off is used to measure the peak value of the magnetic field produced by the a.c. current. When the search coil is placed at B, the length of the trace on the CRO is 2 cm. If the search coil is placed at A, the length of the trace would be',
    options: ['0.5 cm', '1 cm', '2 cm', '4 cm'],
    answer: '4 cm',
    explanation:
      'For a search coil, the trace length on the CRO is proportional to the peak induced e.m.f., which is proportional to the peak magnetic field at the coil. For a long straight current-carrying wire, B is proportional to 1 / r. Since point A is at half the distance from the wire compared with point B, the magnetic field at A is doubled. Therefore the trace length is doubled from 2 cm to 4 cm. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Trace length is proportional to the induced voltage',
      'For a straight wire, B is proportional to 1 / r',
      'Halving distance doubles the field',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-056-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-057',
    type: 'multiple_choice',
    question:
      'A metal wire of length L is inclined at angle 60 degrees to rail PQ as shown. It is moved rightwards with a uniform velocity v across a uniform magnetic field directed into paper along the two horizontal rails PQ and RS. The strength of the magnetic field is B. What is the e.m.f. induced in the rod?',
    options: [
      'B v L / 2',
      'B v L',
      '2 B v L / sqrt(3)',
      'sqrt(3) B v L / 2',
    ],
    answer: 'sqrt(3) B v L / 2',
    explanation:
      'Only the component of velocity perpendicular to the rod contributes to the motional e.m.f. Since the rod makes 60 degrees with the rail and moves horizontally, the perpendicular component is v sin 60 degrees. Hence e = B L (v sin 60 degrees) = B L v (sqrt(3) / 2). Therefore the induced e.m.f. is sqrt(3) B v L / 2. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use e = B L v_perpendicular',
      'Resolve the velocity perpendicular to the rod',
      'sin 60 degrees = sqrt(3) / 2',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-057-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-058',
    type: 'multiple_choice',
    question:
      'A circular frame and a square frame, made from the same type of metal wires, are placed in a uniform magnetic field as shown. The length of each side of the square is equal to the diameter of the circle. When the flux density of the magnetic field is increased at a steady rate, find the ratio of the induced current in the circular frame to that in the square frame.',
    options: ['1 : 1', '1 : pi', 'pi : 4', '2 : pi'],
    answer: '1 : 1',
    explanation:
      'The induced current I is e / R. Since e is proportional to A dB/dt, the induced e.m.f. is proportional to the enclosed area. For frames made of the same wire, resistance is proportional to the total length of wire. Hence I is proportional to A / l. Using the given geometry, the circular frame has area pi r^2 and circumference 2 pi r, while the square has area (2r)^2 and perimeter 8r. The ratio (A_circle / l_circle) to (A_square / l_square) works out to 1, so the induced currents are equal. Option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use I = e / R',
      'For same wire type, R is proportional to total wire length',
      'Compare A / l for the two frames',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-058-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-059',
    type: 'multiple_choice',
    question:
      'The figure shows a rectangular metal coil PQRS moving from left to right with a uniform speed across an insulated metal wire carrying a steady current I. Which of the following gives the correct sequence for the direction of the current induced in the coil PQRS?',
    options: [
      'Clockwise and then anticlockwise',
      'Anticlockwise and then clockwise',
      'Clockwise, then anticlockwise and finally clockwise again',
      'Anticlockwise, then clockwise and finally anticlockwise again',
    ],
    answer:
      'Clockwise, then anticlockwise and finally clockwise again',
    explanation:
      'When the coil approaches the wire from the left, the magnetic flux through it increases in one sense, so the induced current opposes that increase and is clockwise. As the coil passes across the wire, the magnetic flux changes from one direction to the opposite, so the induced current reverses and becomes anticlockwise. After the coil moves to the right and away from the wire, the flux in that new sense decreases, so the induced current becomes clockwise again. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Consider the left, middle and right stages separately',
      'Use Lenz law to oppose the change in flux',
      'The direction changes when the dominant flux reverses',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-059-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-060',
    type: 'multiple_choice',
    question:
      'A search coil is placed at one end of a solenoid as shown in the figure. The solenoid is connected to an a.c. source so that an a.c. current is flowing in the solenoid. The induced voltage on the search coil is shown on the CRO connected to the search coil. Which of the following changes will NOT affect the amplitude of the induced voltage in the search coil?',
    options: [
      'Increase the frequency of the a.c. current in the solenoid.',
      'Increase the number of turns on the search coil.',
      'Place the search coil in the middle of the solenoid, without changing its orientation.',
      'Replace the solenoid with one of greater cross-sectional area while keeping the same magnitude of a.c. current.',
    ],
    answer:
      'Replace the solenoid with one of greater cross-sectional area while keeping the same magnitude of a.c. current.',
    explanation:
      'The peak induced voltage in the search coil is proportional to the rate of change of magnetic flux linkage, so it increases with frequency, with the number of turns of the search coil and with stronger magnetic field at the search-coil position. Moving the search coil to the middle of the solenoid increases the field there. For a long solenoid, however, B = mu0 n I and is independent of the solenoid cross-sectional area. So increasing the solenoid area alone does not change the amplitude. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Think in terms of peak induced voltage and changing flux linkage',
      'For a long solenoid, B = mu0 n I',
      'B does not depend on solenoid cross-sectional area',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-060-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-061',
    type: 'multiple_choice',
    question:
      'A rectangular coil is placed adjacent to a straight wire MN carrying a current I which varies with time as shown in the graph. The wire MN is in the plane of the coil and the current I is positive when it is in the direction from M to N. Starting from t = 0, how does the direction of the current induced in the coil vary in one period?',
    options: [
      'Clockwise first and then anticlockwise',
      'Anticlockwise first and then clockwise',
      'Clockwise -> anticlockwise -> clockwise -> anticlockwise',
      'Anticlockwise -> clockwise -> anticlockwise -> clockwise',
    ],
    answer: 'Clockwise first and then anticlockwise',
    explanation:
      'From t = 0 to T/2, the changing current in the straight wire causes changes in the magnetic flux through the coil that require the induced current to oppose them in the clockwise direction. From T/2 to T, the direction of change reverses, so the induced current in the coil reverses and becomes anticlockwise. Therefore over one full cycle the induced current is clockwise first and then anticlockwise. Option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Lenz law on each half-cycle of the driving current',
      'The sign of dI/dt determines the sign of the induced effect',
      'The induced direction reverses between the two halves',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-061-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-062',
    type: 'multiple_choice',
    question:
      'Two conducting rods PQ and RS are placed on two smooth, parallel, horizontal conducting rails. A uniform magnetic field is directed into the plane of the paper as shown. If now rod PQ is given an initial velocity to the right, which of the following statements is NOT correct?',
    options: [
      'The induced current is in the direction of PQRS.',
      'The magnetic force acting on the rod PQ is towards the left.',
      'Rod RS starts moving towards the right.',
      'Rod PQ would keep on moving with a uniform speed.',
    ],
    answer: 'Rod PQ would keep on moving with a uniform speed.',
    explanation:
      'As rod PQ moves to the right in the magnetic field, an induced current is produced in the closed circuit. By the right-hand rule, the induced current flows around the loop in the direction PQRS. The magnetic force on PQ is then to the left, opposing the motion, so PQ decelerates. The same current causes a magnetic force on RS to the right, so RS starts moving right. Therefore the statement that PQ keeps moving with uniform speed is not correct. Option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the right-hand rule for the induced current in the loop',
      'Use Lenz law for the direction of the force on PQ',
      'An opposing magnetic force means PQ slows down',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-062-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-063',
    type: 'multiple_choice',
    question:
      "Two '12 V, 6 W' lamps are operating at their rated values. The internal resistance of the generator is 2 ohms. What is the percentage of the electrical power generated by the generator dissipated by the two lamps?",
    options: ['75%', '86%', '92%', '100%'],
    answer: '86%',
    explanation:
      'Each lamp dissipates 6 W, so the two lamps together dissipate 12 W. The current in each lamp is I = P / V = 6 / 12 = 0.5 A, so the total current from the generator is 1.0 A. The power lost in the generator internal resistance is I^2 r = (1.0)^2 x 2 = 2 W. Hence the total generated power is 12 + 2 = 14 W, and the percentage dissipated by the lamps is 12 / 14 x 100% = 85.7%, which rounds to 86%. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find the power used by both lamps first',
      'Then calculate the power loss in the internal resistance',
      'Percentage = useful power / total generated power',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-063-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-064',
    type: 'multiple_choice',
    question:
      'In the figure, a thin metal rod PQ is placed along the x-direction and it is at right angles to a uniform magnetic field pointing into the plane of the paper. In which of the following cases will there be an e.m.f. induced along the length of the metal rod? (1) Rotating the rod about an axis through its centre along the y-direction (2) Moving the rod in the x-direction (3) Moving the rod in the y-direction',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(3) only',
    explanation:
      'An e.m.f. along the rod is produced only when charges in the rod are driven along the rod length by the magnetic force q(v x B). Rotating about the y-axis does not produce a net e.m.f. along the whole rod length. Moving in the x-direction gives separation across the rod thickness rather than along its length. Moving in the y-direction makes the magnetic force act along the rod, so an e.m.f. is induced along PQ. Therefore only statement (3) is correct. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'The induced e.m.f. must be along the rod length',
      'Use the direction of v x B',
      'Only one motion gives force along PQ',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-064-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-065',
    type: 'multiple_choice',
    question:
      'In the figure, PQRS is a metal plate placed perpendicularly to a uniform magnetic field directed into the paper. At the instant shown, the magnetic field is moving to the right and eddy current is induced in the metal plate. Which of the following diagrams best represents a possible path of the eddy current induced in the plate?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-065-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-065-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-065-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-065-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-065-option-d.png',
    explanation:
      'As the magnetic field region moves to the right, the left boundary of the field is where the flux through the metal plate is changing. To oppose the loss of field on that side, the eddy current must produce a magnetic field into the paper. By the right-hand grip rule, that requires a clockwise eddy current loop near the moving edge. The correct diagram is therefore option D.',
    difficulty: 3,
    points: 15,
    hints: [
      'Eddy currents form near the region where flux is changing',
      'Use Lenz law to oppose the loss of field',
      'Choose the loop that gives a field into the paper',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-065-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-066',
    type: 'multiple_choice',
    question:
      'A metal wire in shape of a square with each side 15.7 cm is placed in a uniform magnetic field of 0.6 T directed into the paper as shown. Suppose its shape is now changed into a circle within a time of 0.5 s. Find the average induced e.m.f. and the direction of the induced current in the frame during this period.',
    options: [
      '8.1 mV, clockwise',
      '8.1 mV, anticlockwise',
      '4.0 mV, clockwise',
      '4.0 mV, anticlockwise',
    ],
    answer: '8.1 mV, anticlockwise',
    explanation:
      'The wire length stays the same, so the circumference of the new circle equals the perimeter of the square: 4 x 15.7 cm = 2 pi r, giving r = 10 cm. The square area is 15.7 x 15.7 = 246.5 cm^2, while the circle area is pi x 10^2 = 314 cm^2. The area therefore increases, so the magnetic flux into the paper increases. The average induced e.m.f. is e = B Delta A / Delta t = 0.6 x [(314 - 246.5) x 10^-4] / 0.5 = 8.1 mV. By Lenz law, the induced current must oppose the increase of flux into the paper, so it produces a field out of the paper and is anticlockwise. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use equal wire length to find the circle radius',
      'Then compare the square and circle areas',
      'Area increase means flux into the paper increases',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-066-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-067',
    type: 'multiple_choice',
    question:
      'In the figure, PQ and RS are two parallel metal rails with separation L. A metal rod XY resting on the rails moves with velocity v perpendicular to its length across a uniform magnetic field B pointing into the paper. If the rod makes an angle of 30 degrees with the rails, what is the potential difference across Q and S?',
    options: [
      'B L v / cos 30 degrees',
      'B L v cos 30 degrees',
      'B L v / sin 30 degrees',
      'B L v sin 30 degrees',
    ],
    answer: 'B L v / sin 30 degrees',
    explanation:
      'The potential difference between Q and S equals the induced e.m.f. along the moving rod. The motional e.m.f. is e = B v l, where l is the rod length between the rails. Since the rod makes an angle of 30 degrees with the rails and the rail separation is L, we have l sin 30 degrees = L, so l = L / sin 30 degrees. Hence e = B v (L / sin 30 degrees) = B L v / sin 30 degrees. Option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use e = B v l for the moving rod',
      'Relate the rod length to the rail separation',
      'The rod spans the rails, so l sin 30 degrees = L',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-067-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-068',
    type: 'multiple_choice',
    question:
      'A bar magnet is suspended by a spring from a rigid support. It is oscillating above a hollow aluminium cylinder placed below its lower end. Which of the following statements is/are correct? Neglect air resistance. (1) The amplitude of oscillation of the magnet remains unchanged. (2) The force between the bar magnet and the aluminium cylinder is always attractive. (3) Eddy currents are induced in the aluminium cylinder.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(3) only',
    explanation:
      'As the magnet oscillates, the changing magnetic flux through the aluminium cylinder induces eddy currents in it. These eddy currents oppose the motion of the magnet, so the oscillation is damped and the amplitude gradually decreases, not unchanged. The magnetic force is not always attractive; it always acts to oppose the motion, so it may be attractive or repulsive depending on the direction of motion. Therefore only statement (3) is correct. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Changing flux in the cylinder induces eddy currents',
      'Lenz law means the force opposes motion',
      'Opposing motion can mean attraction or repulsion depending on the instant',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-068-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-069',
    type: 'multiple_choice',
    question:
      'In the above figure, PQRS is a small rectangular metal frame suspended from a fixed point O by a plastic string. The frame is released from the position shown and it swings across a uniform magnetic field pointing into the paper within the dotted rectangle. Neglect air resistance and friction. Which of the following is/are correct? (1) A current is induced in the frame in the direction PQRSP when it is entering the field. (2) The current induced in the frame is at a maximum when it passes OO\'. (3) The direction of the magnetic force experienced by the frame is opposite to its motion when it passes OO\'.',
    options: [
      '(1) only',
      '(1) and (2) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) only',
    explanation:
      'When the frame enters the magnetic field, the magnetic flux into the paper through the frame increases. By Lenz law, the induced current must produce a field out of the paper, so the induced current is anticlockwise, that is, in the direction PQRSP. When the frame passes the central line OO\', the flux is momentarily not changing, so the induced current is zero there. With no induced current at that instant, there is no magnetic force on the frame. Therefore only statement (1) is correct. Option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Lenz law as the frame enters the field',
      'At the middle position, the flux is momentarily unchanged',
      'No induced current means no magnetic force',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-069-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-070',
    type: 'multiple_choice',
    question:
      'A long straight wire XY carrying a steady current lies in the plane of the coil. A rectangular coil PQRS is moving to the right with constant speed. Which of the following gives the correct direction of the induced current in the coil and the resultant magnetic force acting on the coil at the instant shown in the above figure?',
    options: [
      'anti-clockwise; to left',
      'anti-clockwise; zero',
      'clockwise; to left',
      'clockwise; zero',
    ],
    answer: 'clockwise; to left',
    explanation:
      'The magnetic field produced by the straight wire at the position of the coil is into the paper. As the coil moves away from the wire, the magnetic field strength at the coil decreases, so the magnetic flux into the paper decreases. By Lenz law, the induced current must produce a field into the paper to oppose the decrease, so the induced current is clockwise. The current in the nearer side of the coil then experiences an attractive magnetic force toward the wire, so the resultant force on the coil is to the left. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'The field from the long wire weakens as the coil moves away',
      'Lenz law makes the coil oppose the decrease in into-paper flux',
      'The net magnetic force pulls the coil back toward the wire',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-070-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-071',
    type: 'multiple_choice',
    question:
      'A rigid rectangular conducting loop PQRS is connected to a cell as shown. It is held at rest horizontally within a uniform magnetic field which is parallel to the plane of the loop and perpendicular to its side RS. Which of the following statements is/are correct? (1) The side RS of the loop experiences an upward magnetic force. (2) The loop experiences a turning moment due to the magnetic field. (3) The magnetic flux linkage through the loop is zero.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'The magnetic field is parallel to the plane of the loop, so there is no component of magnetic field perpendicular to the loop area. Therefore the magnetic flux linkage through the loop is zero, making statement (3) correct. For side RS, the current direction and magnetic field direction give a downward, not upward, magnetic force, so statement (1) is false. The opposite forces on RS and PQ form a couple, so the loop experiences a turning moment, making statement (2) correct. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Flux linkage depends on the perpendicular component of B',
      'Here B is parallel to the plane of the loop',
      'Opposite forces on opposite sides create a couple',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-071-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-072',
    type: 'multiple_choice',
    question:
      'In the above figures, a metal rod PQ making an angle theta with the horizontal moves with speed v across a uniform magnetic field pointing into the paper in two different directions shown. What is the ratio of the e.m.f. induced across the rod in Figure (1) to that in Figure (2)?',
    options: ['1 : sin theta', '1 : sin^2 theta', 'sin theta : 1', 'sin^2 theta : 1'],
    answer: '1 : sin theta',
    explanation:
      'In Figure (1), the rod moves perpendicular to its length, so the induced e.m.f. is e1 = BvL. In Figure (2), only the component of velocity perpendicular to the rod contributes, so e2 = B(v sin theta)L. Therefore the ratio is e1 : e2 = 1 : sin theta, so option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use e = BvL when velocity is perpendicular to the rod',
      'Only the velocity component perpendicular to the rod contributes',
      'Compare BvL with B(v sin theta)L',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-072-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-073',
    type: 'multiple_choice',
    question:
      'A solenoid has a length of 0.30 m and cross-sectional area of 3.2 x 10^-4 m^2. There are 1000 turns of wire wound on it. When the solenoid carries a current of 1.5 A, the magnetic flux linkage through the solenoid is',
    options: [
      '6.0 x 10^-7 Wb',
      '2.0 x 10^-4 Wb',
      '5.7 x 10^-4 Wb',
      '2.0 x 10^-3 Wb',
    ],
    answer: '2.0 x 10^-3 Wb',
    explanation:
      'For a solenoid, B = mu0NI / l. The magnetic flux through one turn is Phi = BA, so the flux linkage is N Phi = NBA = N(mu0NI / l)A. Substituting N = 1000, I = 1.5 A, l = 0.30 m and A = 3.2 x 10^-4 m^2 gives 2.0 x 10^-3 Wb. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'First find B inside the solenoid',
      'Flux linkage is N times the flux through one turn',
      'Use N Phi = N B A',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-074',
    type: 'multiple_choice',
    question:
      'A rectangular coil ABCD is placed in a uniform magnetic field directed perpendicular into paper. When the coil is set into motion, an induced current flows from A to B as shown. Which of the following statements are correct? (1) The coil is moving towards the left. (2) The electric potential at A is higher than that at B. (3) There is a magnetic force acting on AB towards the right.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (3) only',
    explanation:
      'Using the right-hand rule with magnetic field into the paper and induced current from A to B shows the coil must be moving to the left, so statement (1) is correct. The induced e.m.f. drives positive charge from B toward A, so B is at the higher potential and statement (2) is false. By the left-hand rule, the magnetic force on AB acts to the right, opposing the leftward motion, so statement (3) is correct. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the right-hand rule for generator action',
      'Induced magnetic force opposes the motion',
      'High potential is at the end toward which positive charge is driven',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-074-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-075',
    type: 'multiple_choice',
    question:
      'The figure shows conducting rods PQ and RS placed on two smooth, parallel, horizontal conducting rails. A uniform magnetic field is directed into the plane of the paper as shown. PQ is given an initial velocity to the right and left to roll. Which statement is INCORRECT?',
    options: [
      'The induced current is in the direction PQRS.',
      'The magnetic force acting on the rod PQ is towards the left.',
      'Rod RS starts moving towards the right.',
      'Rod PQ moves with a uniform speed.',
    ],
    answer: 'Rod PQ moves with a uniform speed.',
    explanation:
      'As rod PQ moves to the right, the induced current is along PQRS, so statement A is correct. The induced magnetic force on PQ acts to the left and opposes the motion, so statement B is correct. The induced current also causes a magnetic force on RS toward the right, so statement C is correct. Because the magnetic force opposes the motion, PQ slows down instead of continuing with uniform speed. Therefore option D is the incorrect statement.',
    difficulty: 3,
    points: 15,
    hints: [
      'Induced current appears only because PQ is moving',
      'Magnetic force from induced current opposes the cause',
      'So PQ should decelerate, not keep constant speed',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-075-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-076',
    type: 'multiple_choice',
    question:
      'A square metal frame of side length L is placed inside a uniform magnetic field B as shown. What is the change in magnetic flux through the frame when it is rotated about the axis XY by 90 degrees and 180 degrees respectively?',
    options: [
      '0 ; 0',
      '0 ; 2BL^2',
      'BL^2 ; 0',
      'BL^2 ; 2BL^2',
    ],
    answer: 'BL^2 ; 2BL^2',
    explanation:
      'Initially the flux through the frame is Phi = BL^2. After a 90 degree rotation, the plane of the frame becomes parallel to the field, so the flux becomes zero and the change is BL^2. After a 180 degree rotation, the normal reverses direction, so the flux changes from +BL^2 to -BL^2, giving a total change of 2BL^2. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Initial flux is B times the area',
      'At 90 degrees the perpendicular component becomes zero',
      'At 180 degrees the flux reverses sign',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-076-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-077',
    type: 'multiple_choice',
    question:
      'A square metal frame of length of side L moving with constant velocity v passes through a region of uniform magnetic field of width 3L as shown. What is the total time period during which a current is induced in the frame?',
    options: ['L / v', '2L / v', '3L / v', '4L / v'],
    answer: '2L / v',
    explanation:
      'A current is induced only when the magnetic flux through the frame is changing. That happens while the frame is entering the field over a distance L, and again while it is leaving the field over another distance L. While the whole frame is fully inside the field, the flux is constant and no current is induced. So the total distance over which current is induced is 2L, giving a total time of 2L / v. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Induced current exists only when flux changes',
      'There is one interval when entering and one when leaving',
      'Each interval corresponds to a travel distance L',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-077-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-078',
    type: 'multiple_choice',
    question:
      'A copper rod PQ is placed horizontally as shown below. It is released and then falls vertically, cutting across the magnetic field of the Earth pointing out of the paper. Neglect air resistance. Which of the following statements is/are correct? (1) A voltage is induced across PQ. (2) A steady induced current is generated in the rod. (3) Due to the effect of the Earth\'s magnetic field, the copper rod falls with an acceleration less than the acceleration due to gravity.',
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: '(1) only',
    explanation:
      'As the rod moves downward across the magnetic field, charges in the rod experience magnetic force and a motional e.m.f. is induced across PQ, so statement (1) is correct. However, the rod is not part of a complete circuit, so no steady induced current flows, making statement (2) false. Since there is no current, there is no magnetic force opposing the motion, so the rod still falls with acceleration g and statement (3) is false. Therefore option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'A moving conductor in a magnetic field can have a motional e.m.f.',
      'No closed circuit means no sustained current',
      'No current means no magnetic braking force',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-078-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-079',
    type: 'multiple_choice',
    question:
      'A metal rod OP is rotated about O in a clockwise direction in the plane of the paper with a uniform magnetic field pointing into the paper. Which statement is correct?',
    options: [
      'An induced current flows in the rod from O to P.',
      'An induced current flows in the rod from P to O.',
      'E.m.f. is induced in the rod with end O at a higher electric potential.',
      'E.m.f. is induced in the rod with end P at a higher electric potential.',
    ],
    answer: 'E.m.f. is induced in the rod with end P at a higher electric potential.',
    explanation:
      'The rod is isolated, so there is no complete circuit and hence no induced current flows. But charges in the rod are still separated by the magnetic force, producing an induced e.m.f. Using the right-hand rule for the rotating rod in a field into the paper, the induced e.m.f. is from O toward P. Since induced e.m.f. points from lower to higher potential, end P is at the higher electric potential. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'No complete circuit means no current',
      'A rotating rod can still have charge separation',
      'Induced e.m.f. points from low potential to high potential',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-079-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-080',
    type: 'multiple_choice',
    question:
      'A long straight current-carrying wire MN and a rectangular coil PQRS are fixed in the same plane as shown in Figure (a). The current I is taken as positive when it flows from M to N and it varies with time t as shown in Figure (b). The direction of the induced current in the coil during the time interval 0 - T is',
    options: [
      'first anti-clockwise and then clockwise',
      'first clockwise and then anti-clockwise',
      'anti-clockwise throughout',
      'clockwise throughout',
    ],
    answer: 'clockwise throughout',
    explanation:
      'From 0 to T/2, the current in the straight wire is positive and decreasing, so the magnetic field through the coil is into the paper and decreasing. By Lenz law, the induced current must produce a field into the paper, so it is clockwise. From T/2 to T, the current reverses direction, making the magnetic field through the coil out of the paper and increasing in magnitude. To oppose that change, the induced current again produces a field into the paper, which is still clockwise. Therefore the current is clockwise throughout, so option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Track the field through the coil in each half-cycle',
      'Lenz law always opposes the change in flux',
      'Into-paper induced field corresponds to clockwise current',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-080-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-081',
    type: 'multiple_choice',
    question:
      'A rectangular metal frame is made to rotate steadily about its axis XY in a uniform magnetic field. At the instant shown, the frame is in the plane of the paper and side P is moving out of the paper while side Q is moving into the paper. Which statement is INCORRECT at this instant?',
    options: [
      'The induced e.m.f. in the frame is at a maximum.',
      'The induced current produced in the frame is flowing in anti-clockwise direction.',
      'The magnetic force acting on side P is in a direction pointing into the paper.',
      'The magnetic forces acting on the frame produce a moment opposing the frame\'s rotation.',
    ],
    answer: 'The induced current produced in the frame is flowing in anti-clockwise direction.',
    explanation:
      'At the instant shown, both moving sides cut the magnetic field lines perpendicularly, so the induced e.m.f. is maximum and statement A is correct. Using the right-hand rule, the induced current in side P is upward and in side Q is downward, so the current around the frame is clockwise, not anti-clockwise. Therefore statement B is the incorrect one. The magnetic force on side P points into the paper and the pair of magnetic forces forms a moment opposing the rotation, so statements C and D are correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Maximum e.m.f. occurs when sides cut the field most effectively',
      'Use the right-hand rule on the moving sides',
      'The induced torque always opposes the motion',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-081-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-082',
    type: 'multiple_choice',
    question:
      'A student uses a search coil to study the strength of the magnetic field inside a long solenoid which is connected to an a.c. signal generator set at a certain frequency. The search coil is connected to a CRO with time-base switched off. When the magnetic field is detected, a vertical trace on the CRO is displayed. Which of the following can improve the accuracy of this experiment? (1) Rotate the plane of the search coil until the length of the vertical trace on the CRO is the maximum. (2) Increase the signal generator\'s frequency and use the same current as before. (3) Set the axis of the solenoid along an east-west direction to avoid the effects of the Earth\'s magnetic field.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (2) only',
    explanation:
      'The induced voltage in the search coil depends on the changing magnetic flux through it. Rotating the search coil until the CRO trace is maximum ensures the coil is oriented to detect the full magnetic field rather than only a component, so statement (1) improves accuracy. Increasing the frequency increases the induced voltage amplitude, making the CRO trace larger and reducing percentage reading error, so statement (2) also improves accuracy. The Earth\'s magnetic field is essentially steady, so it does not induce a voltage in the search coil and changing the solenoid direction does not improve this experiment. Therefore option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'The search coil responds to changing flux, not steady flux',
      'A larger CRO trace is easier to read accurately',
      'Maximum trace means the search coil is correctly oriented',
    ],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-083',
    type: 'multiple_choice',
    question:
      'A metal rod PQ of length l is moving along smooth horizontal metal rails X and Y with constant speed v in a uniform magnetic field of magnetic field strength B pointing into the paper. The metal rails X and Y are separated by a distance d and are connected to a resistor of resistance R as shown. Which of the following descriptions about the induced current is correct?',
    options: [
      'Blv / R ; from X to Y through R',
      'Blv / R ; from Y to X through R',
      'Bdv / R ; from X to Y through R',
      'Bdv / R ; from Y to X through R',
    ],
    answer: 'Bdv / R ; from X to Y through R',
    explanation:
      'Only the portion of the rod spanning the rail separation contributes to the motional e.m.f., so the effective length is d, not the full rod length l. Hence the induced e.m.f. is Bd v, and the current is I = Bdv / R. Using the right-hand rule, the induced current in the moving rod is upward, so through the external resistor it flows from X to Y. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the rail separation as the effective conductor length',
      'Current magnitude is induced e.m.f. divided by total resistance',
      'Use the right-hand rule for the current direction',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-083-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-084',
    type: 'multiple_choice',
    question:
      'A metal disc is rotating about its centre C with constant speed. Part of the metal disc is inside a uniform magnetic field pointing into the paper as shown. An eddy current flows in the metal disc. After which of the following changes will the eddy current increase?',
    options: [
      '/physics/exercises/electromagnetic-induction/emi-084-option-a.png',
      '/physics/exercises/electromagnetic-induction/emi-084-option-b.png',
      '/physics/exercises/electromagnetic-induction/emi-084-option-c.png',
      '/physics/exercises/electromagnetic-induction/emi-084-option-d.png',
    ],
    answer: '/physics/exercises/electromagnetic-induction/emi-084-option-b.png',
    explanation:
      'Reversing the magnetic field only reverses the direction of the eddy current, not its magnitude. Increasing the magnetic field strength increases the rate of change of magnetic flux through the moving parts of the disc, so the induced eddy current becomes larger. If the whole disc is entirely inside the field, the flux through each part no longer changes and no eddy current is induced. Cutting slits reduces the available current paths and therefore reduces the eddy current. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Eddy current depends on the rate of change of magnetic flux',
      'A stronger field gives a larger induced effect',
      'Slits are used to reduce eddy currents',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-084-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-085',
    type: 'multiple_choice',
    question:
      'A stone and a strong magnet of the same size and shape are released from rest into a hollow aluminium tubing respectively. Which of the following is correct? Neglect air resistance.',
    options: [
      'The stone drops slower because the stone is more massive',
      'The magnet drops slower because the stone is more massive',
      'The stone drops slower because the magnet induces eddy current in the aluminium tubing',
      'The magnet drops slower because the magnet induces eddy current in the aluminium tubing',
    ],
    answer:
      'The magnet drops slower because the magnet induces eddy current in the aluminium tubing',
    explanation:
      'As the magnet moves through the aluminium tube, the magnetic flux through the aluminium changes, so eddy currents are induced in the tube. By Lenz law, these eddy currents produce a magnetic effect that opposes the motion of the magnet, reducing its downward acceleration. The stone does not cause this electromagnetic effect, so it falls faster. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'A moving magnet changes the magnetic flux in the aluminium',
      'That induces eddy currents in the tube',
      'Lenz law makes the induced effect oppose the motion',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-085-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'emi-086',
    type: 'multiple_choice',
    question:
      'When a small strong magnet falls through a hollow aluminium tube as shown, eddy currents are induced. Which of the following correctly describes the direction of current induced in the tube when viewed by an observer from above?',
    options: [
      'clockwise both above and below the magnet',
      'anti-clockwise both above and below the magnet',
      'clockwise above the magnet and anti-clockwise below the magnet',
      'anti-clockwise above the magnet and clockwise below the magnet',
    ],
    answer: 'anti-clockwise above the magnet and clockwise below the magnet',
    explanation:
      'As the magnet falls, the aluminium tube experiences a changing magnetic flux, so eddy currents are induced in the tube. Above the magnet, the magnetic flux due to the magnet is decreasing, so the induced current must produce a magnetic field in the same direction as the original field to oppose that decrease. Below the magnet, the magnetic flux is increasing, so the induced current must produce a magnetic field in the opposite direction to oppose the increase. By the right-hand grip rule, this gives an anti-clockwise current above the magnet and a clockwise current below the magnet when viewed from above. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use Lenz law separately for the regions above and below the falling magnet',
      'Above the magnet the flux is decreasing; below it the flux is increasing',
      'Then use the right-hand grip rule to convert field direction into current direction',
    ],
    imagePaths: ['/physics/exercises/electromagnetic-induction/emi-086-question.png'],
    sectionId: 'electromagnetic-induction',
  },
  {
    id: 'ac-001',
    type: 'multiple_choice',
    question:
      'Three coils A, B and C are wrapped around an iron core as shown. Coil A has N turns while coil B and coil C both have N/2 turns. If an input voltage V is applied across A, what will be the voltage acting across coil C?',
    options: ['V/4', 'V/2', '2V', '4V'],
    answer: 'V/2',
    explanation:
      'For an ideal transformer, Vs / Vp = Ns / Np. Here the primary coil A has N turns and coil C has N/2 turns, so Vc / V = (N/2) / N = 1/2. Therefore the voltage across coil C is V/2. Option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use the transformer ratio Vs / Vp = Ns / Np',
      'Coil C has half the number of turns of coil A',
      'So the output voltage is half the input voltage',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-001-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-002',
    type: 'multiple_choice',
    question:
      'What is/are the advantage(s) of using high voltage in power transmission over long distances? (1) Current in the transmission cables can be reduced. (2) Less energy is wasted as heat. (3) Higher voltage can be used in household circuit.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) and (2) only',
    explanation:
      'For the same transmitted power, P = VI, so using a higher transmission voltage reduces the current in the cables. Since power loss in the cables is P_loss = I^2 R, reducing the current also reduces heating loss. Household circuits still require stepped-down safer voltages, so statement (3) is not an advantage. Therefore option C is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'For fixed power, increasing voltage reduces current',
      'Cable heating loss depends on I squared',
      'Household voltage must still be stepped down',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-003',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning direct current (d.c.) and alternating current (a.c.) is/are correct? (1) The magnitude of voltage in d.c. is constant while that in a.c. varies. (2) The direction of current in d.c. does not change while that of a.c. reverses periodically. (3) Both d.c. and a.c. can have heating effect on a resistor.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'A d.c. source does not necessarily provide a constant voltage, for example a d.c. generator can give a varying d.c. output, so statement (1) is not always true. In d.c. the current direction stays the same, while in a.c. it reverses periodically, so statement (2) is correct. Both d.c. and a.c. produce heating in a resistor because heating depends on current through resistance, not on the direction. Therefore option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Not all d.c. sources provide a perfectly constant voltage',
      'A.c. changes direction periodically',
      'Both can heat a resistor',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-004',
    type: 'multiple_choice',
    question:
      'In the transformer shown, the ratio of the number of turns on the primary coil to that on the secondary coil is 10:1. If the power input is 50 W, find the current in the secondary coil, assuming that the transformer has an 80% efficiency.',
    options: ['1.0 A', '1.5 A', '2.0 A', '2.5 A'],
    answer: '2.0 A',
    explanation:
      'The output power is 80% of the input power, so P_out = 0.8 x 50 = 40 W. With turns ratio Np : Ns = 10 : 1, the secondary voltage is Vs = (1/10) x Vp. From the question figure this gives 20 V at the secondary. Hence the secondary current is I = P_out / Vs = 40 / 20 = 2.0 A. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use efficiency to find the output power first',
      'Then use the transformer turns ratio to find secondary voltage',
      'Finally apply P = VI',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-004-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-005',
    type: 'multiple_choice',
    question:
      'As shown in the diagram, a 200 V mains supply is stepped down to 10 V by a transformer. If the output current is 3 A and the efficiency of the transformer is 75%, what is the current in the primary coil?',
    options: ['0.1 A', '0.2 A', '0.3 A', '0.4 A'],
    answer: '0.2 A',
    explanation:
      'The output power is P_out = V_out I_out = 10 x 3 = 30 W. Since efficiency is 75%, P_out / P_in = 0.75, so P_in = 30 / 0.75 = 40 W. The primary voltage is 200 V, so the primary current is I_p = P_in / V_p = 40 / 200 = 0.2 A. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find output power from output voltage and current',
      'Use efficiency to get input power',
      'Then divide by 200 V to get primary current',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-005-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-006',
    type: 'multiple_choice',
    question:
      'The 300 V generator in the above diagram is supplying electrical power to operate a piece of machinery which has a rating of 10 kW at 200 V. The total resistance of the transmission cables is 2 ohm. What is the power loss in the transmission system?',
    options: ['2.5 kW', '5 kW', '10 kW', '20 kW'],
    answer: '5 kW',
    explanation:
      'The machine operates at 10 kW and 200 V, so the current is I = P / V = 10000 / 200 = 50 A. The same current flows through the transmission cables because they are in series with the load. The power loss in the cables is P_loss = I^2 R = 50^2 x 2 = 5000 W = 5 kW. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find the load current from the machine rating',
      'The same current flows through the series cables',
      'Use cable loss P = I^2 R',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-006-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-007',
    type: 'multiple_choice',
    question:
      'The diagram shows a transformer with the primary coil connected to an a.c. voltage of 200 V while the secondary coil is connected to a resistor of 100 ohm. If there are 100 turns in the primary coil and 10 turns in the secondary coil, what is the current passing through the resistor? Assume that the efficiency of the transformer is 100%.',
    options: ['0.05 A', '0.1 A', '0.2 A', '1 A'],
    answer: '0.2 A',
    explanation:
      'For an ideal transformer, Vs / Vp = Ns / Np. Hence Vs / 200 = 10 / 100, so the secondary voltage is Vs = 20 V. The resistor is 100 ohm, so the current through it is I = V / R = 20 / 100 = 0.2 A. Therefore option C is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use the ideal transformer turns ratio',
      'Find the secondary voltage first',
      'Then apply Ohm law to the 100 ohm resistor',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-007-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-008',
    type: 'multiple_choice',
    question:
      'A transformer can be used to (1) step up the voltage of a given a.c. supply. (2) increase the power of a given a.c. supply. (3) step up the voltage of a given battery.',
    options: [
      '(1) only',
      '(2) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(1) only',
    explanation:
      'A transformer works with a.c. and can change the voltage level, so it can step up the voltage of an a.c. supply. It cannot increase the total power, because apart from losses, output power cannot exceed input power. It also cannot operate directly on a steady d.c. battery supply. Therefore only statement (1) is correct. Option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Transformers require changing magnetic flux',
      'They change voltage, not create extra power',
      'A steady battery supply is d.c.',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-009',
    type: 'multiple_choice',
    question:
      'The efficiency of a transformer is 50% and the input and output voltages are 200 V and 12 V respectively. If the power output is 30 W, the input current is',
    options: ['0.15 A', '0.3 A', '1.5 A', '2.5 A'],
    answer: '0.3 A',
    explanation:
      'Efficiency is eta = P_out / P_in. With eta = 50% and output power 30 W, the input power is P_in = 30 / 0.5 = 60 W. Since the input voltage is 200 V, the input current is I_in = P_in / V_in = 60 / 200 = 0.3 A. Therefore option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use efficiency to relate output and input power',
      'Find input power first',
      'Then use P = VI on the primary side',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-010',
    type: 'multiple_choice',
    question:
      'In the circuit diagram shown, the transformer is 100% efficient. Which of the following statements is/are correct? (1) The current in the primary coil is 0.5 A. (2) The resistance of the door-bell is 20 ohm. (3) The ratio of the number of turns in the primary coil to that in the secondary coil is 20 : 1.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'For a 100% efficient transformer, input power equals output power. Using the values in the figure gives the primary current as 0.025 A, so statement (1) is false. The secondary voltage and current give the door-bell resistance as R = V / I = 10 / 0.5 = 20 ohm, so statement (2) is true. The turns ratio follows the voltage ratio, giving Np : Ns = 200 : 10 = 20 : 1, so statement (3) is also true. Therefore option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use ideal transformer power equality',
      'Use R = V / I for the bell',
      'Voltage ratio equals turns ratio',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-010-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-011',
    type: 'multiple_choice',
    question:
      'The figure above shows how electrical power can be transmitted to a distant factory. The transformers P and Q should be',
    options: [
      'P step up, Q step up',
      'P step up, Q step down',
      'P step down, Q step up',
      'P step down, Q step down',
    ],
    answer: 'P step up, Q step down',
    explanation:
      'For long-distance transmission, the voltage is first stepped up to reduce current and therefore reduce I^2R loss in the cables. At the receiving end, the voltage must be stepped down again before use in the factory. Therefore P should be a step-up transformer and Q should be a step-down transformer. Option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'High voltage is used for transmission',
      'Lower current means less cable loss',
      'Voltage must be reduced again for use',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-011-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-012',
    type: 'multiple_choice',
    question:
      'Which of the following correctly shows the major change of energy in the devices? (1) an electric motor: electrical to mechanical (2) a loudspeaker: sound to mechanical (3) a transformer: electrical to electrical',
    options: [
      '(1) only',
      '(2) only',
      '(1) and (3) only',
      '(2) and (3) only',
    ],
    answer: '(1) and (3) only',
    explanation:
      'An electric motor converts electrical energy into mechanical energy, so statement (1) is correct. A loudspeaker converts electrical energy into sound, not sound into mechanical as stated, so statement (2) is incorrect. A transformer converts electrical energy at one voltage/current combination into electrical energy at another, so statement (3) is correct. Therefore option C is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'A motor produces motion from electricity',
      'A loudspeaker uses electrical input to produce sound',
      'A transformer is electrical to electrical',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-013',
    type: 'multiple_choice',
    question:
      'In the circuit shown, the efficiency of the transformer is 80%. If the two lamps are to work at their rated values, what is the current in the primary coil and what kind of transformer is being used?',
    options: [
      '0.2 A, 20:1 step down',
      '0.4 A, 20:1 step down',
      '0.5 A, 20:1 step down',
      '0.4 A, 10:1 step down',
    ],
    answer: '0.5 A, 20:1 step down',
    explanation:
      'The two lamps together use 2 x 40 = 80 W at the secondary side. With 80% efficiency, eta = P_out / P_in, so 0.8 = 80 / (200 x I_p), giving I_p = 0.5 A. The secondary voltage is 10 V while the primary is 200 V, so the turns ratio is 200 : 10 = 20 : 1 and the transformer is a step-down transformer. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Add the lamp powers first',
      'Use transformer efficiency to find primary current',
      'Compare 200 V with 10 V to identify the turns ratio',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-013-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-014',
    type: 'multiple_choice',
    question:
      "In the above circuit diagram, the transformer is 100% efficient. What is the maximum number of identical light bulbs, each of rating '40 W, 10 V' that can be connected in parallel across the secondary coil without blowing the fuse? (Assume that the fuse will blow if the current flowing through it exceeds 15 A.)",
    options: ['3', '20', '60', '75'],
    answer: '75',
    explanation:
      'For an ideal transformer, the maximum power available without blowing the 15 A fuse on the 200 V side is P = VI = 200 x 15 = 3000 W. Each bulb uses 40 W at its rated value. Therefore the maximum number is n = 3000 / 40 = 75. Hence option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find the maximum input power from fuse current and mains voltage',
      'With 100% efficiency that equals the maximum output power',
      'Divide by 40 W per bulb',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-014-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-015',
    type: 'multiple_choice',
    question:
      "In the circuit shown, the rating of each light bulb is '20 W, 10 V'. The current in the primary coil is 0.5 A. If all the bulbs work at their rated values, find the turns ratio and the efficiency of the transformer.",
    options: [
      '5:1 step down, 80%',
      '20:1 step down, 20%',
      '20:1 step down, 40%',
      '20:1 step down, 80%',
    ],
    answer: '20:1 step down, 80%',
    explanation:
      'The secondary voltage must be the rated bulb voltage, so Vs = 10 V while the primary is 200 V. Hence the turns ratio is 200 : 10 = 20 : 1, so it is a step-down transformer. The total output power of the bulbs is 20 x 4 = 80 W from the figure setup, while the input power is 200 x 0.5 = 100 W. Therefore efficiency = 80 / 100 = 80%. Hence option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Bulbs at rated value fix the secondary voltage at 10 V',
      'Use the primary current to find input power',
      'Compare total bulb power with input power',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-015-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-016',
    type: 'multiple_choice',
    question:
      'Which of the following can increase the efficiency of a transformer? (1) Increasing the number of turns of the secondary coil. (2) Using a laminated iron core. (3) Using a thicker copper wire to make the coils.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'Increasing the number of turns in the secondary coil changes the output voltage but does not by itself reduce power loss, so it does not directly increase efficiency. A laminated iron core reduces eddy current loss in the core, and thicker copper wires reduce resistance so less power is lost as heat in the windings. Both changes reduce losses and improve transformer efficiency. Therefore option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Efficiency improves when losses are reduced',
      'Lamination reduces eddy current loss',
      'Thicker wires reduce resistive heating',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-017',
    type: 'multiple_choice',
    question:
      'An electrical power of 100 kW is transmitted at 20 kV through cables of total resistance of 4 ohm. Find the voltage drop and power loss in the cables.',
    options: [
      '20 V, 20 W',
      '20 V, 100 W',
      '100 V, 20 W',
      '100 V, 100 W',
    ],
    answer: '20 V, 100 W',
    explanation:
      'The transmission current is I = P / V = 100000 / 20000 = 5 A. The voltage drop across the cables is V_drop = IR = 5 x 4 = 20 V. The power loss is P_loss = I^2R = 5^2 x 4 = 100 W. Therefore option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Find transmission current from P = VI',
      'Then use V = IR for the voltage drop',
      'Use I^2R for cable power loss',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-018',
    type: 'multiple_choice',
    question:
      "In the circuit shown, the rating of the light bulb is '40 W, 10 V'. The efficiency of the transformer is 80%. If the bulb works at its rated value, find the current in the primary coil.",
    options: ['0.16 A', '0.2 A', '0.25 A', '1.6 A'],
    answer: '0.25 A',
    explanation:
      'The bulb operating at its rated value uses 40 W at the secondary side. With efficiency 80%, eta = P_out / P_in = 0.8, so the input power is P_in = 40 / 0.8 = 50 W. Using the 200 V primary supply shown in the figure, the primary current is I_p = P_in / V_p = 50 / 200 = 0.25 A. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Start from the bulb rated power',
      'Use transformer efficiency to get input power',
      'Then divide by the primary voltage',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-018-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-019',
    type: 'multiple_choice',
    question:
      "The primary coil of a transformer has 3600 turns and is connected to 200 V a.c. supply. The secondary coil has 180 turns, which can be tapped at different points as shown above. A '40 W, 10 V' light bulb is connected to the transformer so that it works at its rated value. Which of the following statements is/are correct? (1) The bulb should be connected to points P and Q. (2) The current through the bulb is 4 A. (3) If the efficiency of the transformer is 80%, the current in the primary coil is 0.25 A.",
    options: [
      '(1) only',
      '(2) only',
      '(1) and (3) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'A 40 W, 10 V bulb draws I = P / V = 40 / 10 = 4 A, so statement (2) is correct. For statement (3), the output power is 40 W and with 80% efficiency the input power is 50 W, so with 200 V on the primary the primary current is 50 / 200 = 0.25 A, so statement (3) is also correct. The tapping statement in (1) is not the correct one for the required 10 V connection, so option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the bulb rating to get the secondary current',
      'Use efficiency to get input power',
      'Then find the primary current from 200 V',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-019-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-020',
    type: 'multiple_choice',
    question:
      'Which of the following devices converts mechanical energy into electrical energy when it works?',
    options: ['a transformer', 'a dynamo', 'a motor', 'a microphone'],
    answer: 'a dynamo',
    explanation:
      'A dynamo is a generator, so it converts mechanical energy of rotation into electrical energy by electromagnetic induction. A transformer converts electrical energy to electrical energy at a different voltage, a motor converts electrical to mechanical, and a microphone converts sound to electrical. Therefore option B is correct.',
    difficulty: 1,
    points: 5,
    hints: [
      'A generator converts motion into electricity',
      'A dynamo is a small generator',
      'The others perform different energy conversions',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-021',
    type: 'multiple_choice',
    question:
      'A 4 V a.c. supply is stepped up to 20 V by a transformer. If the current in the primary coil is 1 A and the power loss of the transformer is 0.8 W, find the current in the secondary coil.',
    options: ['0.04 A', '0.16 A', '0.2 A', '0.24 A'],
    answer: '0.16 A',
    explanation:
      'The input power is P_in = V_p I_p = 4 x 1 = 4 W. Since the power loss is 0.8 W, the output power is P_out = 4 - 0.8 = 3.2 W. The secondary voltage is 20 V, so the secondary current is I_s = P_out / V_s = 3.2 / 20 = 0.16 A. Therefore option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Find the input power first',
      'Subtract the stated power loss',
      'Then use output power and 20 V to get the secondary current',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-022',
    type: 'multiple_choice',
    question:
      'Which of the following is/are the advantage(s) of using high voltages for long distance transmission of electricity? (1) The transmission speed can be increased. (2) Some heavy industries operate at high voltages. (3) The energy loss in the transmission cable can be reduced.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(3) only',
    explanation:
      'Using a higher transmission voltage reduces current for the same power, which reduces I^2R loss in the cables, so statement (3) is correct. The transmission speed of electricity is not the relevant issue here, so statement (1) is not an advantage. Whether some heavy industries use high voltages is not a reason for using high voltage in long-distance transmission, so statement (2) is also not an advantage. Therefore option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'The key transmission advantage is reduced I squared R loss',
      'Transmission speed is not the point',
      'Focus on cable energy loss',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-023',
    type: 'multiple_choice',
    question:
      'Two bulbs P and Q are connected to an ideal transformer as shown. Which of the following statements is/are true when switch S is closed? (1) The brightness of bulb P decreases. (2) The reading of the ammeter increases. (3) The reading of the voltmeter remains unchanged.',
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(2) and (3) only',
    explanation:
      'For an ideal transformer, the secondary side can draw more current when an additional load is connected, so when switch S is closed the ammeter reading increases. The secondary voltage remains set by the transformer ratio, so the voltmeter reading stays unchanged. The brightness of bulb P does not decrease in the way stated. Therefore statements (2) and (3) are correct, so option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Closing the switch adds load current on the secondary side',
      'Ideal transformer keeps the voltage ratio fixed',
      'So current changes while voltage remains the same',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-023-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-024',
    type: 'multiple_choice',
    question:
      "A '6 V, 6 W' light bulb is to be operated at its rated value. Three circuits are set up as shown below. In which of the above circuits is the bulb working at its rated value?",
    options: [
      '(1) only',
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
    ],
    answer: '(3) only',
    explanation:
      'In circuit (1), the bulb gets 12 V, which is not its rated 6 V, so it is not operating at rated value. The bulb resistance is R = V^2 / P = 6^2 / 6 = 6 ohm; in circuit (2), together with the resistor the voltage across the bulb is only 4 V, so it is also not at rated value. In circuit (3), the transformer has 200 turns in the primary and 100 turns in the secondary with a 12 V supply, so the secondary voltage is (100/200) x 12 = 6 V, exactly the bulb rated voltage. Therefore only circuit (3) works at the rated value. Option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Check the bulb voltage in each circuit',
      'For the transformer case use the turns ratio',
      'The bulb must receive exactly 6 V',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-024-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-025',
    type: 'multiple_choice',
    question:
      "A 12 V a.c. supply is connected to a transformer with turns ratio 1:1. The secondary coil is tapped at equal intervals as shown above. Two '6 V, 0.5 W' light bulbs are connected to the secondary coil of the transformer. In which of the following cases will the two bulbs work at their rated values?",
    options: [
      '(3) only',
      '(1) and (2) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1), (2) and (3)',
    explanation:
      'Because the transformer has turns ratio 1:1, the full secondary voltage is 12 V. In case (1), the two bulbs share the 12 V and each gets 6 V, so both work at rated value. In case (2), the selected tap gives 6 V across the bulb arrangement, so the bulbs also work at rated value. In case (3), each bulb is connected across two equal intervals corresponding to 6 V, so again each bulb is at rated voltage. Therefore all three cases work, so option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'The full secondary output is 12 V because the turns ratio is 1:1',
      'Each bulb must receive 6 V to work at rated value',
      'Check the voltage across each bulb in all three cases',
    ],
    imagePaths: [
      '/physics/exercises/alternating-current/ac-025-question.png',
      '/physics/exercises/alternating-current/ac-025-question-2.png',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-026',
    type: 'multiple_choice',
    question:
      "The figure shows a model power line. An a.c. supply and two ideal transformers are used to operate a lamp of rating '6 V, 24 W'. The total resistance of the cables AB and CD is 10 ohm. If the lamp operates at its rated value, find the power loss in the cables.",
    options: ['0.4 W', '3.6 W', '160 W', '1440 W'],
    answer: '0.4 W',
    explanation:
      'For the lamp to work at rated value, its current is I = P / V = 24 / 6 = 4 A. From the transformer ratios in the figure, the transmission line current is reduced by a factor of 20, so the current in the cables is 4 / 20 = 0.2 A. Hence the cable power loss is P_loss = I^2R = 0.2^2 x 10 = 0.4 W. Therefore option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Start from the rated lamp current',
      'Use the transformer arrangement to find cable current',
      'Then apply I squared R loss in the cables',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-026-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-027',
    type: 'multiple_choice',
    question:
      'Which of the following statements about long distance power transmission at high alternating voltages are correct? (1) Alternating voltages can be stepped up or down efficiently by transformers. (2) For a given transmitted power, the current will be reduced if a high voltage is adopted. (3) The power loss in the transmission cables will be reduced if a high voltage is adopted.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1), (2) and (3)',
    explanation:
      'Transformers work with a.c. and can step the voltage up or down efficiently, so statement (1) is correct. For fixed transmitted power, P = VI, so a higher voltage means a smaller current, making statement (2) correct. Since cable loss is P_loss = I^2R, reducing the current reduces transmission loss, so statement (3) is also correct. Therefore option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Think about why a.c. is chosen for transmission',
      'For fixed power, higher voltage means lower current',
      'Lower current reduces I squared R loss',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-028',
    type: 'multiple_choice',
    question:
      'The photograph shows an adaptor for charging up the battery inside a mobile phone. Which of the following statements about the adaptor are correct? (1) It is used to step down the voltage from the mains to a value for the mobile phone. (2) It can convert the voltage from a.c. to d.c. (3) It is black so that it can radiate heat more efficiently than those in other colours.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1), (2) and (3)',
    explanation:
      'A phone charger must reduce the mains voltage to a much smaller voltage suitable for charging, so statement (1) is correct. Since phone batteries require d.c., the adaptor must also convert a.c. from the mains into d.c., so statement (2) is correct. The adaptor produces heat in operation, and a black casing radiates heat more effectively, so statement (3) is also correct. Therefore option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Phone batteries charge at low d.c. voltage',
      'So the adaptor both steps down and rectifies',
      'The casing also helps with heat dissipation',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-028-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-029',
    type: 'multiple_choice',
    question:
      'In the above circuit, the transformer is ideal (efficiency = 100%). At the beginning, the switch S is closed and the light bulbs X and Y are operated at their rated values. What would happen to the brightness of bulb X and the ammeter reading if S is now opened?',
    options: [
      'Brightness of X increases; ammeter reading increases',
      'Brightness of X increases; ammeter reading decreases',
      'Brightness of X remains unchanged; ammeter reading decreases',
      'Brightness of X remains unchanged; ammeter reading remains unchanged',
    ],
    answer: 'Brightness of X remains unchanged; ammeter reading decreases',
    explanation:
      'The secondary voltage of an ideal transformer remains fixed by the turns ratio, so the voltage across bulb X does not change and its brightness remains unchanged. Opening switch S removes one load from the secondary side, so the secondary current decreases. Since the current ratio is fixed by the transformer turns ratio, the primary current and the ammeter reading also decrease. Therefore option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Ideal transformer keeps the voltage ratio fixed',
      'Removing a load reduces secondary current',
      'Primary current decreases accordingly',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-029-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-030',
    type: 'multiple_choice',
    question:
      'The above figure shows a portable transformer. It outputs different voltage by varying the turns ratio between the primary and the secondary coils. Assume that there is no power loss in the transformer and the resistance of the load remains unchanged, when the output changes from 6 V to 12 V, which of the following statements describing the transformer is/are correct? (1) The number of turns of the primary coil should be doubled and the number of turns of the secondary coil remains unchanged. (2) The input current should be doubled. (3) The output power should be 4 times as before.',
    options: [
      '(2) only',
      '(3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(3) only',
    explanation:
      'If the load resistance stays unchanged, doubling the output voltage from 6 V to 12 V makes the output power become four times larger because P = V^2 / R, so statement (3) is correct. Statement (1) is wrong because doubling the primary turns with the same secondary turns would halve, not double, the output voltage. With no power loss, input power equals output power, so if output power becomes four times larger and the input voltage remains unchanged, the input current should also become four times larger, not two times; therefore statement (2) is false. Hence option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use P = V squared over R with constant load resistance',
      'Check how turns ratio affects output voltage',
      'Ideal transformer means input power equals output power',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-030-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-031',
    type: 'multiple_choice',
    question:
      'The above figure shows a transformer. Assume the transformer is ideal, what is the current drawn from the mains supply if the transformer delivers current at the rated value?',
    options: ['5.5 mA', '100 mA', '1200 mA', '1830 mA'],
    answer: '5.5 mA',
    explanation:
      'For an ideal transformer, input power equals output power, so Vp Ip = Vs Is. Using the rated values shown, (220 V) Ip = (12 V)(100 mA). Therefore Ip = (12 x 0.100) / 220 = 0.00545 A = 5.45 mA, which rounds to 5.5 mA. Hence option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use ideal transformer power equality',
      'Convert 100 mA into amperes',
      'Then solve for the primary current',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-031-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-032',
    type: 'multiple_choice',
    question:
      'In the circuit above, the primary coil of a transformer is connected to the 220 V mains supply with a 5 A fuse. The efficiency of the transformer is 90%. What is the maximum number of identical 40 W light bulbs, operating at their rated values, that can be connected in parallel to the secondary coil without blowing the fuse?',
    options: ['24', '25', '27', '28'],
    answer: '24',
    explanation:
      'Let the maximum number of bulbs be n. The fuse limits the primary current to 5 A, so the maximum input power is (220)(5). With 90% efficiency, 0.90 = (40n) / [(220)(5)]. Solving gives n = 24.75. The number of bulbs must be a whole number and must not exceed the fuse limit, so the maximum is 24. Hence option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use the fuse rating to find the maximum primary input power',
      'Relate output power to input power using efficiency',
      'Round down to the largest safe whole number of bulbs',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-032-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-033',
    type: 'multiple_choice',
    question:
      'The figure shows a metal core with two coils. When the switch is closed, the a.c. voltmeter shows a reading. Which of the following combinations will give the largest voltmeter reading?',
    options: [
      'copper core, coil A 500 turns, coil B 1000 turns',
      'copper core, coil A 1000 turns, coil B 500 turns',
      'iron core, coil A 500 turns, coil B 1000 turns',
      'iron core, coil A 1000 turns, coil B 500 turns',
    ],
    answer: 'iron core, coil A 500 turns, coil B 1000 turns',
    explanation:
      'To get the largest reading on the secondary side, magnetic flux linkage between the two coils should be as strong as possible, so an iron core is better than a copper core. The voltmeter reading is larger when the arrangement acts as a step-up transformer, so the secondary coil should have more turns than the primary coil. Therefore the best combination is an iron core with coil A having 500 turns and coil B having 1000 turns. Hence option C is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Choose the core material that gives better magnetic flux linkage',
      'A larger secondary voltage needs a step-up transformer',
      'So the secondary coil must have more turns than the primary coil',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-033-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-034',
    type: 'multiple_choice',
    question:
      'The figure above shows an ideal transformer. The primary coil of the transformer is connected to the 220 V a.c. mains and two lamps L1 and L2 are connected in series to the secondary coil. Initially, S is closed. Which of the following statements is correct when S is opened?',
    options: [
      'The current in the primary coil of the transformer decreases.',
      'The voltage across the secondary coil of the transformer increases.',
      'The brightness of L1 decreases.',
      'The brightness of L2 increases.',
    ],
    answer:
      'The current in the primary coil of the transformer decreases.',
    explanation:
      'Initially, S short-circuits L1, so only L2 is lit and the effective secondary resistance is R. When S is opened, both lamps are in series and the effective secondary resistance becomes 2R, so the secondary current decreases. For an ideal transformer with fixed turns ratio, Is : Ip = Np : Ns, so when the secondary current decreases, the primary current also decreases. The secondary voltage itself does not increase because it depends only on the turns ratio and primary voltage. Hence option A is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Work out which lamp is bypassed when the switch is closed',
      'Opening the switch increases the total secondary resistance',
      'Use the fixed transformer current ratio to compare primary current',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-034-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-035',
    type: 'multiple_choice',
    question:
      'Electrical power is transmitted from a power station to local substations by an alternating current and high voltage. It is because (1) the voltage of an alternating current can be stepped up or down using transformers easily. (2) by using high voltages, electrical power can be transmitted faster along the cables. (3) by using high voltages, there is less power loss in the transmission cables.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (3) only',
    explanation:
      'Statement (1) is correct because transformers work with a.c., so alternating voltages can be stepped up or down efficiently. Statement (2) is not correct because the speed of transmission is not increased simply by using a higher voltage. Statement (3) is correct because for a given transmitted power, using a higher voltage reduces the current, and smaller current gives less cable loss by P_loss = I^2 R. Hence option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Think about why transformers are used in transmission',
      'For fixed power, higher voltage means lower current',
      'Lower current reduces I squared R loss in the cables',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-036',
    type: 'multiple_choice',
    question:
      'A power station supplies electrical power to a user. The power generated by the station is 1200 kW. After stepping up, the voltage transmitted to the cable is 132 kV. If the total resistance of the transmission cable is 550 ohm, find the electrical power available to the user.',
    options: ['700 kW', '1155 kW', '1195 kW', '1200 kW'],
    answer: '1155 kW',
    explanation:
      'The transmission current is I = P / V = (1200 x 10^3) / 132000 = 9.09 A. The power loss in the cables is I^2 R = (9.09)^2(550) = 45 x 10^3 W = 45 kW. Therefore the power available to the user is 1200 kW - 45 kW = 1155 kW. Hence option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'First find the transmission current using P = VI',
      'Then calculate cable loss using I squared R',
      'Subtract the loss from the generated power',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-037',
    type: 'multiple_choice',
    question:
      'A large machine in a factory consumes 10 kW of electrical power at a voltage of 500 V. If the generator from the power station transmits electrical power to the factory through cables of total resistance 0.2 ohm, the voltage produced by the generator should be',
    options: ['500 V', '501 V', '502 V', '504 V'],
    answer: '504 V',
    explanation:
      'The machine current is I = P / V = (10 x 10^3) / 500 = 20 A. The voltage drop across the transmission cables is V_drop = IR = (20)(0.2) = 4 V. Therefore the generator must supply 500 V + 4 V = 504 V so that 500 V is available at the machine. Hence option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Find the load current first from its power and operating voltage',
      'Then use V = IR for the cable voltage drop',
      'Add the drop to the machine voltage',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-037-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-038',
    type: 'multiple_choice',
    question:
      'When 240 V a.c. is applied across P Q of an ideal transformer, the voltages measured across R S and S T are 4 V and 8 V respectively. If 6 V a.c. is now applied across S T, what will be the voltages measured across P Q and R S?',
    options: [
      '0 V across P Q, 0 V across R S',
      '180 V across P Q, 0 V across R S',
      '0 V across P Q, 3 V across R S',
      '180 V across P Q, 3 V across R S',
    ],
    answer: '180 V across P Q, 3 V across R S',
    explanation:
      'In an ideal transformer, voltage is proportional to the number of turns. From the first condition, the turns ratio for the tapped sections is N_PQ : N_RS : N_ST = 240 : 4 : 8 = 60 : 1 : 2. If 6 V is now applied across S T, then the voltages scale in the same ratio, so V_PQ : V_RS : 6 = 60 : 1 : 2. Therefore V_PQ = 180 V and V_RS = 3 V. Hence option D is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Use voltage proportional to turns in an ideal transformer',
      'Find the turn ratio from the first set of measurements',
      'Rescale all sections using the new 6 V across ST',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-038-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-039',
    type: 'multiple_choice',
    question:
      'The electrical power dissipated by a heater when connected to a 10 V d.c. supply is two times of that when the heater is connected to a sinusoidal a.c. supply. What is the peak voltage of the sinusoidal a.c. supply?',
    options: ['5 V', '5 sqrt(2) V', '10 V', '10 sqrt(2) V'],
    answer: '10 V',
    explanation:
      'For the 10 V d.c. supply, the power is P_dc = 10^2 / R. For the sinusoidal a.c. supply, the average power is P_ac = V_rms^2 / R. Given that P_dc is two times P_ac, we have 10^2 / V_rms^2 = 2, so V_rms = 7.07 V. The peak voltage is V_peak = sqrt(2) V_rms = sqrt(2)(7.07) = 10 V. Hence option C is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'For a resistor on a.c., average power uses the rms voltage',
      'Set the d.c. power to twice the a.c. power',
      'Convert rms voltage to peak voltage at the end',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-040',
    type: 'multiple_choice',
    question:
      'Power is transmitted over long distances at high alternating voltages. Which statements are correct? (1) Alternating voltages can be stepped up or down efficiently by transformers. (2) For a given transmitted power, the current will be reduced if a high voltage is adopted. (3) The power loss in the transmission cables will be reduced if a high voltage is adopted.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1), (2) and (3)',
    explanation:
      'All three statements are correct. Transformers work efficiently with alternating current, so a.c. voltages can be stepped up or down easily. For a fixed transmitted power, P = VI, so using a higher voltage means the transmission current is smaller. Since cable loss is P_loss = I^2 R, a smaller current reduces the power loss in the transmission cables. Hence option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Transformers require alternating current',
      'For fixed power, increasing voltage reduces current',
      'Lower current reduces I squared R loss',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-041',
    type: 'multiple_choice',
    question:
      'When a heater is connected to a d.c. voltage of 10 V, the power dissipated is P. If the heater is connected to a sinusoidal a.c., the power dissipated becomes 1/2 P. What is the r.m.s. voltage of this a.c. source? Assume that the resistance of the heater is constant.',
    options: ['sqrt(5) V', '5 sqrt(2) V', '10 V', '10 sqrt(2) V'],
    answer: '5 sqrt(2) V',
    explanation:
      'For the 10 V d.c. supply, P = 10^2 / R. For the a.c. supply, the average power in a resistor is P_ac = V_rms^2 / R. Given that P_ac = 1/2 P, we have V_rms^2 / R = (1/2)(10^2 / R). Therefore V_rms^2 = 50 and V_rms = 5 sqrt(2) V. Hence option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use P = V squared over R for the d.c. case',
      'For a resistor on a.c., use the rms voltage',
      'Set the a.c. power equal to half of the d.c. power',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-042',
    type: 'multiple_choice',
    question:
      'A sinusoidal a.c. of a certain frequency delivers a r.m.s. voltage V_rms. If its frequency is doubled and its peak voltage is halved, what would be the r.m.s. voltage?',
    options: [
      '1/2 V_rms',
      '1/sqrt(2) V_rms',
      '1/(2 sqrt(2)) V_rms',
      'V_rms',
    ],
    answer: '1/2 V_rms',
    explanation:
      'For a sinusoidal a.c., V_rms = V_peak / sqrt(2). The rms voltage depends on the peak voltage, not on the frequency. If the peak voltage is halved, the rms voltage is also halved. Therefore the new rms voltage is 1/2 V_rms. Hence option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Use the relation between rms and peak voltage',
      'Frequency does not change the rms value here',
      'Only the halved peak voltage matters',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-043',
    type: 'multiple_choice',
    question:
      "In the above circuit, each light bulb works at its rated value '22 W, 11 V'. The current in the primary coil is 0.25 A. Find the efficiency of the transformer.",
    options: ['20%', '40%', '64%', '80%'],
    answer: '80%',
    explanation:
      'The total output power is the sum of the two lamps, so P_out = 22 x 2 = 44 W. The input power is P_in = V_p I_p = (220)(0.25) = 55 W. Therefore the efficiency is eta = P_out / P_in = 44 / 55 = 0.80 = 80%. Hence option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Add the powers of both lamps for the output power',
      'Use the primary voltage and primary current for input power',
      'Efficiency is output power divided by input power',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-043-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-044',
    type: 'multiple_choice',
    question:
      'A heater of resistance 100 ohm is connected to the mains supply. The r.m.s. voltage of the mains supply is 110 V. Which of the following statements are correct? (1) The peak voltage across the heater is 156 V. (2) The power dissipated by the heater is 121 W. (3) The power dissipated by the heater will be doubled if the r.m.s. voltage of the mains supply doubles.',
    options: [
      '(1) and (2) only',
      '(1) and (3) only',
      '(2) and (3) only',
      '(1), (2) and (3)',
    ],
    answer: '(1) and (2) only',
    explanation:
      'Statement (1) is correct because the peak voltage is V_peak = sqrt(2) V_rms = sqrt(2)(110) = 156 V. Statement (2) is correct because the heater power is P = V_rms^2 / R = 110^2 / 100 = 121 W. Statement (3) is false because for a fixed resistance, power is proportional to V_rms^2, so doubling V_rms makes the power four times, not two times. Hence option A is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Convert rms voltage to peak voltage using sqrt(2)',
      'Use P = V_rms squared over R',
      'Check how power changes when voltage is doubled',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-045',
    type: 'multiple_choice',
    question:
      "The input terminal of a transformer is connected to the 220 V mains supply. Ten identical light bulbs are connected in parallel to the output terminal of the transformer. All the light bulbs are working at their rated values of '3 V, 1.5 W'. If the efficiency of the transformer is 70%, what is the current drawn from the mains supply?",
    options: ['0.007 A', '0.048 A', '0.068 A', '0.097 A'],
    answer: '0.097 A',
    explanation:
      'The total output power is P_out = 1.5 x 10 = 15 W. Using eta = P_out / P_in, we have 0.70 = 15 / (220 I_p). Therefore I_p = 15 / (0.70 x 220) = 0.097 A. Hence option D is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'First add the power of all 10 bulbs',
      'Use efficiency to relate output and input power',
      'Then solve for the primary current',
    ],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-046',
    type: 'multiple_choice',
    question:
      'In the circuits below, if a 12 V sinusoidal a.c. is applied across ab and across xy respectively, the voltages across cd and zw are both 6 V. Now if a 6 V sinusoidal a.c. is applied across cd and across zw respectively, what would be the voltages across ab and xy respectively?',
    options: [
      '12 V across ab, 12 V across xy',
      '12 V across ab, 6 V across xy',
      '6 V across ab, 6 V across xy',
      '12 V across ab, 0 V across xy',
    ],
    answer: '12 V across ab, 6 V across xy',
    explanation:
      'For the transformer circuit, 12 V across ab gives 6 V across cd, so the turns ratio is 2 : 1 and the transformer is stepping down. If 6 V is instead applied across cd, the same turns ratio now makes the voltage across ab become 12 V. For the potential divider circuit, 12 V across xy gives 6 V across zw. If 6 V is applied across zw, only the lower section has current. No current flows through the upper section, so there is no voltage drop there, and the voltage across xy remains 6 V. Hence option B is correct.',
    difficulty: 3,
    points: 15,
    hints: [
      'Treat the left circuit as an ideal transformer and reverse the turns ratio',
      'Treat the right circuit as a potential divider',
      'If no current flows through the upper resistor, there is no voltage drop there',
    ],
    imagePaths: ['/physics/exercises/alternating-current/ac-046-question.png'],
    sectionId: 'alternating-current',
  },
  {
    id: 'ac-047',
    type: 'multiple_choice',
    question:
      "The figure shows an ideal transformer with two secondary coils connected to two light bulbs marked '6 V, 0.5 A' and '3 V, 1.0 A' respectively. When a 12 V a.c. supply is connected to the primary coil, the bulbs work at their respective rated values. Estimate the current in the primary coil.",
    options: ['0.25 A', '0.50 A', '0.75 A', '1.0 A'],
    answer: '0.50 A',
    explanation:
      'For an ideal transformer, input power equals total output power. The first bulb uses P1 = VI = (6)(0.5) = 3 W. The second bulb uses P2 = VI = (3)(1.0) = 3 W. So the total output power is 6 W. With a 12 V primary supply, the primary current is I_p = P_in / V_p = 6 / 12 = 0.50 A. Hence option B is correct.',
    difficulty: 2,
    points: 10,
    hints: [
      'Find the power of each bulb from its rated voltage and current',
      'Add the two powers to get the total output power',
      'Use ideal transformer power equality to find the primary current',
    ],
    sectionId: 'alternating-current',
  },
];
