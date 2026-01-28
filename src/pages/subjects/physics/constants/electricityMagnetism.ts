import { Exercise } from '../types';

// 练习题 - DSE Style (All in English)
// Electrostatics 板块
export const ELECTRICITY_MAGNETISM_EXERCISES: Exercise[] = [
  {
    id: 'es-001',
    type: 'multiple_choice',
    question:
      'Two light conducting spheres are suspended from two silk threads. If they are found to attract one another, which of the following conclusions is/are correct?\n\n(1) They carry similar charges.\n(2) They carry opposite charges.\n(3) Only one of them is charged.',
    options: ['(2) only', '(3) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** Like charges repel, but attraction can occur either between opposite charges or between a charged and an uncharged conductor (by induction).\n\n**Step 1:** Check statement (1)\nSimilar charges repel, so (1) is false.\n\n**Step 2:** Check statement (2)\nOpposite charges attract, so (2) can be true.\n\n**Step 3:** Check statement (3)\nIf only one sphere is charged, it induces an opposite charge on the near side of the uncharged sphere, producing a net attraction. So (3) can be true.\n\n**Verification:** The observation is “attract”, so the situation is consistent with (2) or with (3), but not with (1).',
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
      '⚠️ **Key point:** Grounding while a charged object is nearby removes excess electrons, leaving induced positive charge near the rod.\n\n**Step 1:** Induction by the negative rod\nThe negative rod repels electrons, so positive charge is induced on $Z$ while electrons move toward $X$ and $Y$.\n\n**Step 2:** Earth sphere $Y$\nGrounding allows the excess electrons on $X$–$Y$ to flow to Earth, but the induced positive charge on $Z$ remains attracted by the rod.\n\n**Step 3:** Final charges\nAfter grounding, $X$ and $Y$ are neutral and $Z$ is positively charged.\n\n**Verification:** Statements (2) and (3) are true; (1) is false. So the correct answer is option C.',
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
      '⚠️ **Key point:** A nearby positive rod attracts electrons, and because the two spheres are in contact, electrons shift toward the sphere closer to the rod, leaving the farther sphere electron‑deficient.\n\n**Step 1:** Consider induction by the positive rod\nElectrons are attracted toward the rod, so the sphere nearer the rod gains negative charge.\n\n**Step 2:** Apply charge redistribution through contact\nBecause the spheres are touching, electrons flow from the farther sphere to the nearer sphere until electrostatic equilibrium is reached.\n\n**Verification:** The near sphere becomes negatively charged and the far sphere becomes positively charged, matching option C.',
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
      '⚠️ **Key point:** The plastic sheet prevents charge flow between the two spheres, so each sphere polarizes independently by induction.\n\n**Step 1:** Polarization of the right sphere\nThe positive rod attracts electrons to the near side of the right sphere, making its near side negative and far side positive.\n\n**Step 2:** Effect on the left sphere across the plastic sheet\nBecause the sheet is insulating, charges cannot move from one sphere to the other. The positive region on the far side of the right sphere induces negative charge on the near side of the left sphere and positive charge on its far side.\n\n**Verification:** Both spheres are polarized, with negative charge facing the inducing positive region and positive charge on the opposite side, matching option A.',
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
      '⚠️ **Key point:** Induction redistributes charge on a conductor but does not change its total charge unless there is contact or grounding.\n\n**Step 1:** Identify whether sphere $X$ is isolated\nSphere $X$ is on an insulating stand and does not touch any other body, so there is no path for charge to enter or leave.\n\n**Step 2:** Consider the effect of the approaching sphere $Y$\nThe negative charges on $Y$ can polarize charges on $X$, but this only rearranges charges on the surface; it does not change the net charge of $X$.\n\n**Verification:** Since $X$ is isolated and not grounded, its total charge remains positive and unchanged.',
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
      '⚠️ **Key point:** The electric force on a charge is $\\vec{F} = q\\vec{E}$, so a negative charge feels a force opposite to the field direction.\n\n**Step 1:** Identify the sign of the charge\nAn electron has charge $q = -e$.\n\n**Step 2:** Apply $\\vec{F} = q\\vec{E}$\nBecause $q$ is negative, the force is opposite to the direction of the electric field shown.\n\n**Verification:** With the field shown downward between the plates, the force on the electron is upward, matching option A.',
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
      '⚠️ **Key point:** Grounding while a positive charge is nearby lets electrons flow onto $Y$. After removing the positive sphere, the extra electrons remain and spread uniformly.\n\n**Step 1:** Induction by the positive sphere\nThe nearby positive sphere attracts electrons to the near side of $Y$, leaving the far side positive.\n\n**Step 2:** Ground $Y$\nWhen $Y$ is touched, electrons flow from Earth onto $Y$, because the positive sphere attracts them.\n\n**Step 3:** Remove the charged sphere\nAfter $X$ is taken away, the extra electrons remain on $Y$ and redistribute uniformly over the surface.\n\n**Verification:** $Y$ is left with a net negative charge, matching option B.',
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
      '⚠️ **Key point:** In metals, only electrons are mobile. Grounding a positively charged conductor allows electrons to flow in and neutralize it.\n\n**Step 1:** Identify the mobile charge carriers\nProtons are fixed in the lattice; electrons are the mobile charges.\n\n**Step 2:** Apply grounding effect\nThe positively charged sphere has an electron deficit. When earthed, electrons flow from the Earth into the sphere.\n\n**Verification:** Electron flow from Earth neutralizes the positive charge, matching option D.',
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
      '⚠️ **Key point:** Grounding while a negative charge is nearby removes excess electrons, leaving a net positive charge on the side near the inducer; separation then fixes the charges.\n\n**Step 1:** Induction by the negative object\nThe negative object repels electrons. With $X$–$Y$ in contact, electrons move toward $Y$, leaving positive charge on the side of $X$ nearest $C$.\n\n**Step 2:** Ground $X$\nTouching $X$ allows electrons (especially those on $Y$) to flow to Earth, while the positive charge near $C$ remains attracted and cannot leave.\n\n**Step 3:** Separate the spheres\nAfter separation, $X$ retains net positive charge and $Y$ is neutral.\n\n**Verification:** This corresponds to option D.',
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
      '⚠️ **Key point:** A nearby positive rod induces a positive region on the far side of the sphere; grounding supplies electrons from Earth to neutralize that positive region.\n\n**Step 1:** Induction by the positive rod\nElectrons are attracted toward the rod, leaving a net positive charge on the far side of the sphere.\n\n**Step 2:** Ground the sphere\nWhen earthed, electrons flow from the Earth into the sphere to neutralize the induced positive region.\n\n**Verification:** The correct statement is that electrons flow from Earth to the sphere, matching option B.',
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
      '⚠️ **Key point:** A neutral conductor is attracted to a charged object by induction, but after contact it gains the same sign of charge and is repelled.\n\n**Step 1:** Induction and attraction\nThe charged dome polarizes the neutral sphere, creating attraction, so the sphere moves toward the dome.\n\n**Step 2:** Contact and charge transfer\nOn touching, the sphere gains the same sign of charge as the dome.\n\n**Step 3:** Repulsion\nLike charges repel, so the sphere moves away after contact.\n\n**Verification:** This matches option D.',
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
      '⚠️ **Key point:** All three devices use static electric charges for their operation.\n\n**Step 1:** Photocopier\nIt uses electrostatic charging to attract toner particles to the paper.\n\n**Step 2:** Electrostatic precipitator\nCharged plates attract dust and smoke particles from flue gas.\n\n**Step 3:** Van de Graaff generator\nIt produces large static charges for demonstrations.\n\n**Verification:** All three are applications of electrostatics, so option D is correct.',
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
      '⚠️ **Key point:** The sphere can be charged by induction with grounding (1) or by direct contact (2), but not by a neutral finger after discharging the rod (3).\n\n**Step 1:** Statement (1)\nWith the charged rod nearby, grounding the sphere allows charge flow; when the ground is removed, the sphere is left charged (by induction). So (1) can charge the sphere.\n\n**Step 2:** Statement (2)\nTouching the sphere with the charged rod transfers charge by conduction, so (2) can charge the sphere.\n\n**Step 3:** Statement (3)\nTouching the rod with a finger discharges it. The finger remains overall neutral, so touching the sphere afterward does not transfer net charge. Thus (3) cannot charge the sphere.\n\n**Verification:** Only (1) and (2) can charge the sphere, matching option B.',
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
      '⚠️ **Key point:** A nearby positive rod attracts electrons toward the nearer sphere, leaving a deficit (positive charge) on the farther side of the pair.\n\n**Step 1:** Induction by the positive rod\nElectrons move toward sphere $X$ (the nearer sphere), making the near side of $X$ negative.\n\n**Step 2:** Charge separation across both spheres\nBecause $X$ and $Y$ are in contact, electrons move from $Y$ to $X$, leaving positive charge on the far side of $Y$.\n\n**Verification:** The correct diagram shows negative charge on the side of $X$ facing the rod and positive charge on the far side of $Y$, matching option C.',
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
      '⚠️ **Key point:** Attraction to a positively charged rod occurs if the sphere is negatively charged or neutral (by induction), but not if it is positively charged.\n\n**Step 1:** Evaluate statement (1)\nIf the sphere is positively charged, it would repel the positive rod. So (1) is not reasonable.\n\n**Step 2:** Evaluate statement (2)\nA negatively charged sphere is attracted to the positive rod. So (2) is reasonable.\n\n**Step 3:** Evaluate statement (3)\nA neutral conducting sphere is attracted by induction to the positive rod. So (3) is reasonable.\n\n**Verification:** Only (2) and (3) are valid, matching option C.',
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
      '⚠️ **Key point:** For charging by induction, the ground connection is removed before the inducing rod, so the induced charge is trapped on the sphere.\n\n**Step 1:** Bring the charged rod near the sphere (3)\nThis induces charge separation on the sphere.\n\n**Step 2:** Touch the sphere with a finger (2)\nGrounding allows electrons to flow onto the sphere.\n\n**Step 3:** Remove the finger first (1)\nThis isolates the sphere while it still has excess electrons.\n\n**Step 4:** Remove the charged rod (4)\nThe sphere is left with a net negative charge.\n\n**Verification:** The correct order is (3) → (2) → (1) → (4), matching option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'The rod must be near before grounding',
      'Remove the ground connection before the rod',
      'The final charge is opposite to the rod’s charge'
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
      '⚠️ **Key point:** The negative rod induces positive charge near $X$; grounding allows excess electrons to flow away, leaving $X$ positive while $Y$ and $Z$ become neutral.\n\n**Step 1:** Induction by the negative rod\nElectrons are repelled from $X$ toward $Y$ and $Z$, leaving positive charge on $X$.\n\n**Step 2:** Earth $Y$\nGrounding allows the excess electrons (on $Y$–$Z$ side) to flow to Earth.\n\n**Step 3:** While the rod remains\nThe induced positive charge stays on $X$ due to attraction to the rod, and $Y$ and $Z$ are neutral.\n\n**Verification:** The correct distribution is $X$ positive, $Y$ zero, $Z$ zero, matching option A.',
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
      '⚠️ **Key point:** Grounding while the positive rod is nearby removes the induced positive charge on $Y$, leaving excess electrons. After the rod is removed and the spheres are separated, the excess electrons are shared, so both spheres are negative.\n\n**Step 1:** Induction by the positive rod\nElectrons move toward $X$, leaving positive charge on $Y$.\n\n**Step 2:** Earth $X$\nElectrons flow from Earth onto the connected spheres, neutralizing the positive region on $Y$ and leaving excess electrons.\n\n**Step 3:** Remove the rod and separate spheres\nThe excess electrons redistribute between $X$ and $Y$, so both spheres become negatively charged.\n\n**Verification:** Both $X$ and $Y$ are negative, matching option A.',
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
      '⚠️ **Key point:** Repulsion only tells us the charges have the same sign, and the electrostatic forces are an action–reaction pair with equal magnitude. The different angles imply different masses.\n\n**Step 1:** Evaluate statement (1)\nRepulsion means the charges are the same sign, but they could be both positive or both negative. So (1) is not guaranteed.\n\n**Step 2:** Evaluate statement (2)\nBy Newton’s third law, the force on $A$ by $B$ equals the force on $B$ by $A$ in magnitude. So (2) is false.\n\n**Step 3:** Evaluate statement (3)\nFor each sphere in equilibrium, $\\tan\\theta = F/(mg)$. The sphere with the smaller angle has the larger mass. From the diagram, $A$ has the smaller angle, so $m_A > m_B$.\n\n**Verification:** Only statement (3) must be correct, matching option B.',
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
      '⚠️ **Key point:** A charged object can attract neutral water by inducing charge separation, and the forces are equal and opposite by Newton’s third law.\n\n**Step 1:** Evaluate statement (1)\nIf the ruler attracts neutral water, it must carry charge. So (1) is correct.\n\n**Step 2:** Evaluate statement (2)\nThe interaction forces between ruler and water form an action–reaction pair, so their magnitudes are equal. So (2) is correct.\n\n**Step 3:** Evaluate statement (3)\nThe electric field polarizes the water stream, inducing opposite charge on the near side and like charge on the far side. So (3) is correct.\n\n**Verification:** All three statements are correct, matching option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'A charged object can attract neutral water by polarization',
      'Action–reaction forces have equal magnitude',
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
    options: ['→', '↑', 'The resultant force acting on $C$ is zero.', 'It cannot be determined since the sign of $C$ is not given.'],
    answer: 'The resultant force acting on $C$ is zero.',
    explanation:
      '⚠️ **Key point:** At the center of the square, forces from symmetric pairs of equal charges cancel.\n\n**Step 1:** Consider the pair of positive charges\nTheir forces on $C$ are equal in magnitude and opposite in direction, so they cancel.\n\n**Step 2:** Consider the pair of negative charges\nTheir forces on $C$ also cancel by symmetry.\n\n**Verification:** Net force is zero regardless of the sign of $C$, so option C is correct.',
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
      '⚠️ **Key point:** Attraction can occur between unlike charges and between a charged and a neutral conductor (by induction).\n\n**Step 1:** Eliminate cases with no attraction\nIf all three were charged with the same sign, some pairs would repel, which contradicts the observation.\n\n**Step 2:** Consider one neutral and two unlike charges\nA neutral sphere is attracted to either charged sphere by induction, and the two charged spheres attract because they are unlike.\n\n**Verification:** This configuration makes every pair attract, matching option D.',
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
      '⚠️ **Key point:** Conductors attract if they carry unlike charges, or if one is charged and the other is neutral (by induction).\n\n**Step 1:** Case (1)\nUnlike charges attract, so (1) gives attraction.\n\n**Step 2:** Case (2)\nA positively charged sphere attracts a neutral sphere by induction, so (2) gives attraction.\n\n**Step 3:** Case (3)\nA negatively charged sphere also attracts a neutral sphere by induction, so (3) gives attraction.\n\n**Verification:** All three cases attract, so option D is correct.',
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
      '⚠️ **Key point:** Attraction can occur between opposite charges or between a charged object and a neutral one (by induction), but not between two neutral objects.\n\n**Step 1:** Statement (1)\nOpposite charges attract, so (1) is possible.\n\n**Step 2:** Statement (2)\nTwo uncharged objects exert no electrostatic force, so (2) is not possible.\n\n**Step 3:** Statement (3)\nA charged ruler can attract neutral paper scraps by inducing charge separation, so (3) is possible.\n\n**Verification:** Only (1) and (3) are possible, matching option B.',
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
      '⚠️ **Key point:** Repulsion implies like charges, while attraction could be due to unlike charges or a charged–neutral pair; equal separation does not require equal charge magnitudes.\n\n**Step 1:** Statement (1)\nRepulsion between $P$ and $Q$ means they carry like charges. So (1) is correct.\n\n**Step 2:** Statement (2)\nAttraction between $R$ and $S$ could be unlike charges or one charged and one neutral. So (2) is not necessarily correct.\n\n**Step 3:** Statement (3)\nEqual forces do not require equal charge magnitudes; different charges can still produce the same force at the same separation. So (3) is not necessarily correct.\n\n**Verification:** Only (1) must be correct, matching option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Repulsion implies like charges',
      'Attraction could be unlike or charged–neutral',
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
      '⚠️ **Key point:** The electric force on a charge is $\\vec{F} = q\\vec{E}$, so a negative charge accelerates opposite to the field.\n\n**Step 1:** Identify the field direction\nThe electric field points downward.\n\n**Step 2:** Determine force on a negative charge\nFor $q < 0$, the force is opposite to $\\vec{E}$, so it is upward.\n\n**Verification:** The acceleration is upward, corresponding to arrow 4.',
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
      '1.6 × 10⁻¹⁸ kg',
      '1.6 × 10⁻¹⁶ kg',
      '6.4 × 10⁻¹⁴ kg',
      '6.4 × 10⁻¹⁶ kg'
    ],
    answer: '6.4 × 10⁻¹⁶ kg',
    explanation:
      '⚠️ **Key point:** At rest, the electric force balances the weight: $mg = |q|E$ with $E = V/d$.\n\n**Step 1:** Compute the electric field\n$$E = \\frac{V}{d} = \\frac{2000}{0.05} = 4.0 \\times 10^4\\,\\text{V/m}$$\n\n**Step 2:** Balance forces\n$$mg = |q|E = (1.6 \\times 10^{-19})(4.0 \\times 10^4) = 6.4 \\times 10^{-15}\\,\\text{N}$$\n\n**Step 3:** Solve for mass\n$$m = \\frac{6.4 \\times 10^{-15}}{10} = 6.4 \\times 10^{-16}\\,\\text{kg}$$\n\n**Verification:** The mass matches option D.',
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
      '⚠️ **Key point:** $U = qV$ and $F = qE$ define energy and force per coulomb, while one mole of electrons carries far more than 1 C.\n\n**Step 1:** Statement (1)\nUsing $U = qV$, with $q = 1\\,\\text{C}$ and $V = 1\\,\\text{V}$ gives $U = 1\\,\\text{J}$, so (1) is correct.\n\n**Step 2:** Statement (2)\nUsing $F = qE$, with $q = 1\\,\\text{C}$ and $E = 1\\,\\text{V/m}$ gives $F = 1\\,\\text{N}$, so (2) is correct.\n\n**Step 3:** Statement (3)\nOne mole of electrons carries $N_A e \\approx 6.02\\times10^{23} \\times 1.6\\times10^{-19}\\,\\text{C} \\approx 9.6\\times10^4\\,\\text{C}$, not 1 C. So (3) is false.\n\n**Verification:** Only (1) and (2) are correct, matching option C.',
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
      '⚠️ **Key point:** The ball alternately charges by contact, the field weakens with larger separation, and the current through the external circuit has a consistent direction.\n\n**Step 1:** Statement (1)\nTouching the positive plate charges the ball positively; touching the negative plate charges it negatively. So (1) is correct.\n\n**Step 2:** Statement (2)\nIncreasing plate separation reduces $E = V/d$, so the electric force and acceleration drop, lowering oscillation frequency. So (2) is correct.\n\n**Step 3:** Statement (3)\nEach transfer of charge through the external circuit corresponds to the same current direction, so the ammeter shows a steady direction. So (3) is correct.\n\n**Verification:** All three statements are correct, matching option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Contact charging alternates the ball’s sign',
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
      '⚠️ **Key point:** The force from $Z$ must provide a downward component to cancel the upward force from $Y$ while leaving a net leftward force.\n\n**Step 1:** Let the side length be $r$\nDistance $XZ = \\sqrt{2}r$.\n\n**Step 2:** Compare forces at $X$\nForces from $W$ and $Y$ each have magnitude $\\frac{1}{4\\pi\\varepsilon_0 r^2}$. The force from $Y$ is upward and must be balanced by the vertical component of $F_Z$.\n\n**Step 3:** Balance vertical components\n$$F_Z \\cos 45^\\circ = F_Y$$\n$$\\frac{|Q|}{4\\pi\\varepsilon_0(\\sqrt{2}r)^2} \\cdot \\frac{1}{\\sqrt{2}} = \\frac{1}{4\\pi\\varepsilon_0 r^2}$$\nSolving gives $|Q| = 2\\sqrt{2}\\,\\text{C}$.\n\n**Verification:** The force between $X$ (negative) and $Z$ must be attractive, so $Q$ is positive. The correct choice is $+2\\sqrt{2}\\,\\text{C}$.',
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
      '⚠️ **Key point:** The negatively charged sphere is attracted to the positive plate first; after contact it becomes positively charged and then moves to the negative plate, leading to oscillation.\n\n**Step 1:** Initial motion\nA negatively charged sphere is attracted to the positive plate, so it moves there first.\n\n**Step 2:** Charge transfer on contact\nAfter touching the positive plate, the sphere gains positive charge.\n\n**Step 3:** Subsequent motion\nIt is then attracted to the negative plate, and the process repeats.\n\n**Verification:** The sphere oscillates between the plates, beginning with the positive plate, matching option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Negative charges move toward the positive plate',
      'Contact changes the sphere’s charge',
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
      '⚠️ **Key point:** The foil is deflected toward the positive plate, so it is negatively charged; reducing plate separation increases the uniform field strength.\n\n**Step 1:** Statement (1)\nDeflection toward the positive plate indicates the foil carries negative charge. So (1) is correct.\n\n**Step 2:** Statement (2)\nWith fixed voltage, $E = V/d$; decreasing $d$ increases $E$, so the electric force and deflection increase. So (2) is correct.\n\n**Step 3:** Statement (3)\nBetween parallel plates the field is uniform, so moving the foil closer does not change the force. So (3) is incorrect.\n\n**Verification:** Only (1) and (2) are correct, matching option C.',
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
      '1.0 × 10⁹ m s⁻²',
      '1.2 × 10¹² m s⁻²',
      '1.6 × 10¹⁵ m s⁻²',
      '5.3 × 10¹⁷ m s⁻²'
    ],
    answer: '5.3 × 10¹⁷ m s⁻²',
    explanation:
      '⚠️ **Key point:** Use $E = V/d$, then $F = qE$, then $a = F/m$ for the electron.\n\n**Step 1:** Electric field between plates\n$$E = \\frac{V}{d} = \\frac{4.5 \\times 10^3}{1.5 \\times 10^{-3}} = 3.0 \\times 10^6\\,\\text{V/m}$$\n\n**Step 2:** Electric force on the electron\n$$F = |q|E = (1.60 \\times 10^{-19})(3.0 \\times 10^6) = 4.8 \\times 10^{-13}\\,\\text{N}$$\n\n**Step 3:** Acceleration\n$$a = \\frac{F}{m_e} = \\frac{4.8 \\times 10^{-13}}{9.11 \\times 10^{-31}} \\approx 5.3 \\times 10^{17}\\,\\text{m s}^{-2}$$\n\n**Verification:** This matches option D.',
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
      '⚠️ **Key point:** After contact, identical spheres share total charge equally; the outcome depends on whether the initial charges have the same or opposite signs.\n\n**Case 1: Same sign**\nLet charges be $+5Q$ and $+Q$. After contact, each becomes $+3Q$.\n$$F_1 \\propto (5Q)(Q), \\quad F_2 \\propto (3Q)(3Q)$$\nSo $F_1:F_2 = 5:9$.\n\n**Case 2: Opposite sign**\nLet charges be $+5Q$ and $-Q$. Total charge is $+4Q$, so each becomes $+2Q$.\n$$F_1 \\propto (5Q)(Q), \\quad F_2 \\propto (2Q)(2Q)$$\nSo $F_1:F_2 = 5:4$.\n\n**Verification:** Ratios (1) and (2) are possible, (3) is not. Option C is correct.',
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
      '⚠️ **Key point:** Identical spheres share charge equally on contact. The force depends on the product of the final charges.\n\n**Step 1:** Initial charges\nAttraction means $X$ and $Y$ have opposite signs with equal magnitude: let $X = +Q$, $Y = -Q$.\n\n**Step 2:** $Z$ touches $X$\nCharges share equally: $X$ becomes $+\\frac{Q}{2}$ and $Z$ becomes $+\\frac{Q}{2}$.\n\n**Step 3:** $Z$ touches $Y$\nTotal charge on $Y$ and $Z$ is $-Q + \\frac{Q}{2} = -\\frac{Q}{2}$, so each becomes $-\\frac{Q}{4}$.\nThus $Y = -\\frac{Q}{4}$.\n\n**Step 4:** Compute new force\n$$F^{\\prime} \\propto \\left(\\frac{Q}{2}\\right)\\left(\\frac{Q}{4}\\right) = \\frac{Q^2}{8}$$\nSo $F^{\\prime} = \\frac{1}{8}F$.\n\n**Verification:** Option B is correct.',
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
      '⚠️ **Key point:** The drop is initially in equilibrium with $qE = mg$. If $q$ increases, $E$ must decrease to keep balance.\n\n**Step 1:** Effect of extra negative charge\nWith larger $q$, the electric force $qE$ increases if $E$ is unchanged, so the drop will no longer be stationary.\n\n**Step 2:** Evaluate each change\n(1) Disconnecting the supply keeps plate charge (and $E$) unchanged; moving plates closer does not reduce $E$ in this case, so $qE$ remains too large.\n(2) Increasing p.d. increases $E$, making the imbalance worse.\n(3) Increasing plate separation with constant p.d. reduces $E = V/d$, so $qE$ can return to $mg$.\n\n**Verification:** Only (3) can restore equilibrium, so option B is correct.',
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
      '⚠️ **Key point:** The electric field around a point charge follows the inverse‑square law: $E \\propto 1/r^2$.\n\n**Step 1:** Field at $X$\nPoint $X$ is at the same distance from $+Q$ as the point marked 72, so $E_X = 72$.\n\n**Step 2:** Field at $Y$\nFrom the diagram, $r_Y = \\sqrt{3^2 + 1^2} = \\sqrt{10}$. Using $E \\propto 1/r^2$ relative to the point with $E = 360$ at $r = 1$:\n$$E_Y = 360 \\times \\frac{1}{(\\sqrt{10})^2} = 36$$\n\n**Verification:** $(E_X, E_Y) = (72, 36)$, matching option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the inverse‑square law: $E \\propto 1/r^2$',
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
      '⚠️ **Key point:** The electrostatic forces are equal and opposite, but the smaller deflection angle indicates a larger weight.\n\n**Step 1:** Statement (1)\nRepulsion implies like charges, but they could be both positive or both negative. So (1) is not guaranteed.\n\n**Step 2:** Statement (2)\nThe interaction forces are equal in magnitude (Newton’s third law), so charge magnitudes cannot be concluded from the angles alone. So (2) is not guaranteed.\n\n**Step 3:** Statement (3)\nFor each sphere, $\\tan\\theta = F/(mg)$. With the same $F$, the smaller angle means larger $mg$. Since $\\theta < \\phi$, $m_X > m_Y$.\n\n**Verification:** Only statement (3) must be correct, matching option B.',
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
      '⚠️ **Key point:** For opposite unequal charges, there is one point between them where the magnitudes are equal but fields add, and one point outside near the smaller charge where the fields cancel.\n\n**Step 1:** Between $X$ and $Y$\nThe field from $+Q$ points toward $Y$, and the field from $-2Q$ also points toward $Y$, so they add. There is one point where $E_X = E_Y$, but the resultant is not zero.\n\n**Step 2:** Outside on the side of $+Q$\nHere the fields from $+Q$ and $-2Q$ are opposite in direction. There is one point where $E_X = E_Y$, and at that point the resultant field is zero.\n\n**Verification:** There are two points with $E_X = E_Y$, and only one of them has zero resultant field, matching option C.',
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
      '1.6 × 10⁻¹⁹ C',
      '3.2 × 10⁻¹⁹ C',
      '4.8 × 10⁻¹⁹ C',
      '6.4 × 10⁻¹⁹ C'
    ],
    answer: '4.8 × 10⁻¹⁹ C',
    explanation:
      '⚠️ **Key point:** At equilibrium, the electric force balances weight: $qE = mg$ with $E = V/d$.\n\n**Step 1:** Calculate electric field\n$$E = \\frac{V}{d} = \\frac{3000}{0.015} = 2.0 \\times 10^5\\,\\text{V/m}$$\n\n**Step 2:** Solve for charge magnitude\n$$q = \\frac{mg}{E} = \\frac{(9.6 \\times 10^{-15})(10)}{2.0 \\times 10^5} = 4.8 \\times 10^{-19}\\,\\text{C}$$\n\n**Verification:** The magnitude matches option C. The force must be upward, so the charge is negative, but the question asks for quantity (magnitude).',
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
      '⚠️ **Key point:** Grounding while a positive rod is nearby lets electrons flow in; after removing the rod, the excess electrons distribute over both spheres.\n\n**Step 1:** Induction by the positive rod\nElectrons move toward $X$, leaving $Y$ positive.\n\n**Step 2:** Earth $X$\nElectrons flow from Earth into the connected spheres, neutralizing the positive region on $Y$ and leaving excess electrons.\n\n**Step 3:** Remove the rod\nThe excess electrons redistribute over $X$ and $Y$, so both become negatively charged.\n\n**Verification:** Both $X$ and $Y$ are negative, matching option A.',
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
      '⚠️ **Key point:** The midpoint between equal positive charges is a neutral point for electric field; force directions depend on which charge is closer.\n\n**Step 1:** Statement (1)\nAt midpoint $Y$, the fields from the two equal positive charges cancel, so it is a neutral point. Correct.\n\n**Step 2:** Statement (2)\nAt $X$ (closer to the left sphere), a negative test charge is attracted more strongly to the left sphere, so the net force is toward the left. Correct.\n\n**Step 3:** Statement (3)\nAt $Z$ (closer to the right sphere), a positive test charge is repelled more strongly by the right sphere, so the net force is toward the left, not right. Incorrect.\n\n**Verification:** Only (1) and (2) are correct, matching option A.',
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
      '⚠️ **Key point:** A neutral conductor is attracted by induction, but after contact it shares charge and is repelled, ending with the same sign as the rod.\n\n**Step 1:** Statement (1)\nThe positive rod induces negative charge on the near side of the sphere, causing attraction. Correct.\n\n**Step 2:** Statement (2)\nAfter touching, the sphere gains positive charge and is repelled by the rod. Correct.\n\n**Step 3:** Statement (3)\nCharge sharing leaves the sphere positively charged. Correct.\n\n**Verification:** All three statements are correct, matching option D.',
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
      '⚠️ **Key point:** The ruler attracts neutral paper by inducing charge separation; forces are equal and opposite by Newton’s third law.\n\n**Step 1:** Statement (1)\nThe attraction is electrostatic due to induced charges in the paper and charges on the ruler. Correct.\n\n**Step 2:** Statement (2)\nInduction polarizes the paper but does not change its net charge, so it remains neutral. Correct.\n\n**Step 3:** Statement (3)\nThe forces between the ruler and paper are an action–reaction pair, so their magnitudes are equal. Thus (3) is false.\n\n**Verification:** Only (1) and (2) are correct, matching option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Induction causes attraction without net charge transfer',
      'The paper remains neutral overall',
      'Action–reaction forces are equal in magnitude'
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
      '⚠️ **Key point:** The resultant field is the vector sum of the fields from the three charges; two perpendicular components add to a diagonal, and the diagonal component from the opposite corner is weaker.\n\n**Step 1:** Combine fields from the two adjacent charges\nThese fields are perpendicular and equal in magnitude, so their resultant points along direction 1.\n\n**Step 2:** Compare with the field from the opposite corner\nThe field from the diagonal charge is weaker (distance is larger), so it does not reverse the resultant.\n\n**Verification:** The net field points in direction 1, matching option A.',
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
      '⚠️ **Key point:** Increasing separation reduces mutual force, but moving the negative charge closer to $D$ increases the field at $D$.\n\n**Step 1:** Statement (1)\nMoving $-Q$ from $B$ to $C$ increases its distance from $+Q$, so the force decreases (inverse‑square law). So (1) is false.\n\n**Step 2:** Statement (2)\nAt $D$, the field from $+Q$ points right and from $-Q$ points left. As $-Q$ moves closer to $D$, its field at $D$ increases, so the net field magnitude increases. So (2) is true.\n\n**Step 3:** Statement (3)\nAt $B$, the fields from $+Q$ and $-Q$ point in the same direction, so $B$ cannot be a neutral point. So (3) is false.\n\n**Verification:** Only statement (2) is correct, matching option B.',
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
      '4.32 × 10⁻³³ N',
      '4.32 × 10⁻²⁰ N',
      '4.32 × 10⁻¹³ N',
      '4.32 N'
    ],
    answer: '4.32 N',
    explanation:
      '⚠️ **Key point:** Use Coulomb’s law $F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q_1 Q_2}{r^2}$.\n\n**Step 1:** Substitute values\n$$F = \\frac{(1.5 \\times 10^{-17})(3.2 \\times 10^{-19})}{4\\pi (8.85 \\times 10^{-12})(1.0 \\times 10^{-13})^2}$$\n\n**Step 2:** Calculate\nThis gives $F \\approx 4.32\\,\\text{N}$.\n\n**Verification:** Option D is correct.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use Coulomb’s law',
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
      '⚠️ **Key point:** The electric field of a point charge is $E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{r^2}$.\n\n**Step 1:** Identify the source charge\nA nucleus of atomic number $Z$ has charge $Q = Ze$.\n\n**Step 2:** Substitute into the field formula\n$$E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Ze}{r^2}$$\n\n**Verification:** This matches option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use the point‑charge field formula',
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
      '⚠️ **Key point:** Field strength is indicated by the density of field lines, and force direction on a negative charge is opposite to the field direction.\n\n**Step 1:** Statement (1)\nField lines are denser at $Z$ than at $X$, so $E_Z > E_X$. Correct.\n\n**Step 2:** Statement (2)\nA negative charge experiences force opposite to the field direction, i.e., along the tangent to the line but opposite the arrow. Correct.\n\n**Step 3:** Statement (3)\nField lines are denser at $Y$ than at $X$, so $E_Y > E_X$ and the force is larger at $Y$. Correct.\n\n**Verification:** All three statements are correct, matching option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Field strength ∝ line density',
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
      '⚠️ **Key point:** Field lines point away from positive charges, and the neutral point lies closer to the smaller charge; forces between two charges are equal in magnitude.\n\n**Step 1:** Statement (1)\nField lines are directed away from both charges, so both are positive. Correct.\n\n**Step 2:** Statement (2)\nThe neutral point is closer to the smaller charge; since $Y$ is farther from $P$, $P$ must be larger in magnitude than $Q$. Correct.\n\n**Step 3:** Statement (3)\nForces between two charges are an action–reaction pair, so they are equal in magnitude. False.\n\n**Verification:** Only (1) and (2) are correct, matching option B.',
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
      '⚠️ **Key point:** The gain in kinetic energy equals the loss in electric potential energy: $\\Delta K = qV$.\n\n**Step 1:** Evaluate dependence on mass\n$\\Delta K = qV$ does not include mass, so (1) is false.\n\n**Step 2:** Evaluate dependence on plate separation\nFor a fixed voltage, the work done depends only on $V$, not on separation, so (2) is false.\n\n**Step 3:** Evaluate dependence on voltage\n$\\Delta K = qV$ increases with $V$, so (3) is true.\n\n**Verification:** Only statement (3) is correct, matching option B.',
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
      '⚠️ **Key point:** Attraction occurs between unlike charges and between a charged conductor and a neutral conductor (by induction).\n\n**Step 1:** Case (1)\nUnlike charges attract. So (1) gives attraction.\n\n**Step 2:** Case (2)\nA positively charged sphere attracts a neutral sphere by induction. So (2) gives attraction.\n\n**Step 3:** Case (3)\nA negatively charged sphere attracts a neutral sphere by induction. So (3) gives attraction.\n\n**Verification:** All three cases produce attraction, matching option D.',
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
      '⚠️ **Key point:** Electric field from a point charge follows the inverse‑square law: $E \\propto 1/r^2$.\n\n**Step 1:** Field at $X$\nPoint $X$ is at the same distance from $+Q$ as the point labeled 72, so $E_X = 72$.\n\n**Step 2:** Field at $Y$\nDistance $r_Y = \\sqrt{3^2 + 1^2} = \\sqrt{10}$. Relative to the point with $E = 360$ at $r = 1$:\n$$E_Y = 360 \\times \\frac{1}{(\\sqrt{10})^2} = 36$$\n\n**Verification:** $(E_X, E_Y) = (72, 36)$, matching option B.',
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
      '⚠️ **Key point:** The net field direction follows vector addition; at $X$ two contributions cancel, while at $Y$ all three add in the same direction.\n\n**Step 1:** Field at $X$\nTwo charges contribute equal and opposite fields that cancel, leaving only the field from the third charge. The net field points left.\n\n**Step 2:** Field at $Y$\nAll three charges produce fields to the right, so they add. The net field points right.\n\n**Step 3:** Compare magnitudes\nAt $Y$ there are additional contributions beyond the single‑charge field seen at $X$, so $E_Y > E_X$.\n\n**Verification:** Directions are opposite and $E_X < E_Y$, matching option D.',
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
      '⚠️ **Key point:** For unlike charges of unequal magnitude, the neutral point lies outside the segment on the side of the smaller charge.\n\n**Step 1:** Determine field directions\nBetween the charges, the fields point in the same direction, so they cannot cancel.\n\n**Step 2:** Check the side beyond the smaller charge\nOn the side of $-Q$, the fields oppose each other and can balance at some point.\n\n**Verification:** The neutral point is at $Z$, matching option D.',
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
      '⚠️ **Key point:** Repulsion implies like charges, attraction implies unlike charges. Use these relations to deduce possible signs.\n\n**Step 1:** From $P$–$Q$ repulsion\n$P$ and $Q$ have the same sign.\n\n**Step 2:** From $R$–$S$ repulsion\n$R$ and $S$ have the same sign.\n\n**Step 3:** From $Q$–$R$ attraction\n$Q$ and $R$ have opposite signs. Therefore, $P$ (same as $Q$) and $S$ (same as $R$) must be opposite in sign.\n\n**Verification:** This makes statement (3) possible, while (1) and (2) are impossible. So option B is correct.',
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
    options: ['10⁶ J', '10⁸ J', '10¹⁰ J', '10¹² J'],
    answer: '10¹⁰ J',
    explanation:
      '⚠️ **Key point:** Energy released is $U = QV$, with $V = Ed$ for a uniform field.\n\n**Step 1:** Potential difference\n$$V = Ed = (3 \\times 10^6)(500) = 1.5 \\times 10^9\\,\\text{V}$$\n\n**Step 2:** Energy released\n$$U = QV = 20 \\times 1.5 \\times 10^9 = 3 \\times 10^{10}\\,\\text{J}$$\n\n**Verification:** The order of magnitude is $10^{10}\\,\\text{J}$, matching option C.',
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
      '⚠️ **Key point:** Identical spheres share total charge equally after contact; the force scales with the product of charges.\n\n**Step 1:** Initial force\n$$F \\propto (2Q)(6Q) = 12Q^2$$\n\n**Step 2:** After contact\nTotal charge $= +6Q + (-2Q) = +4Q$, so each sphere becomes $+2Q$.\n\n**Step 3:** New force\n$$F^{\\prime} \\propto (2Q)(2Q) = 4Q^2$$\nSo $F^{\\prime} = \\frac{4}{12}F = \\frac{1}{3}F$.\n\n**Verification:** Both spheres are positive, so the force is repulsive. Option D is correct.',
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
      '⚠️ **Key point:** Grounding while the rod is nearby allows electrons to flow in; separating the spheres traps charge on $X$ while $Y$ becomes neutral.\n\n**Step 1:** Induction by the positive rod\nElectrons move toward $X$, leaving $Y$ positive.\n\n**Step 2:** Touch $X$ (grounding)\nElectrons flow from Earth into the connected spheres, neutralizing the positive charge on $Y$.\n\n**Step 3:** Separate the spheres and remove the rod\n$X$ retains excess electrons (negative), while $Y$ remains neutral.\n\n**Verification:** $X$ is negative and $Y$ is uncharged, matching option C.',
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
      'E = 0.02 N C⁻¹ from $Q$ to $P$',
      'E = 0.02 N C⁻¹ from $P$ to $Q$',
      'E = 50 N C⁻¹ from $Q$ to $P$',
      'E = 50 N C⁻¹ from $P$ to $Q$'
    ],
    answer: 'E = 50 N C⁻¹ from $P$ to $Q$',
    explanation:
      '⚠️ **Key point:** $\\vec{F} = q\\vec{E}$, so a negative charge experiences force opposite to the field direction.\n\n**Step 1:** Find field magnitude\n$$E = \\frac{F}{|q|} = \\frac{8.0 \\times 10^{-18}}{1.6 \\times 10^{-19}} = 50\\,\\text{N C}^{-1}$$\n\n**Step 2:** Determine field direction\nThe electron is pushed toward $P$, so the field must point from $P$ to $Q$ (opposite to the force on a negative charge).\n\n**Verification:** $E = 50\\,\\text{N C}^{-1}$ from $P$ to $Q$, matching option D.',
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
      '⚠️ **Key point:** For zero net force on each charge, the outer charges must be equal in magnitude and same sign, and the middle charge must be opposite in sign with one‑quarter the magnitude.\n\n**Step 1:** Symmetry about the midpoint\nFor forces on $Q_1$ and $Q_3$ to cancel, $Q_1$ and $Q_3$ must be equal and have the same sign.\n\n**Step 2:** Balance forces on an outer charge\nThe force from the other outer charge is at twice the distance, so it is four times weaker. Thus $|Q_1| = |Q_3| = 4|Q_2|$ and $Q_2$ must have opposite sign.\n\n**Verification:** The set $(-4, +1, -4)$ satisfies these conditions, matching option D.',
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
      '⚠️ **Key point:** A charged ball attracts a neutral ball by induction, and unlike charges attract each other.\n\n**Step 1:** Consider a neutral ball with two charged balls\nIf one ball is neutral, it will be attracted to either a positive or a negative charged ball.\n\n**Step 2:** Ensure every pair attracts\nThe two charged balls must be unlike, otherwise they would repel. With one neutral and two unlike charges, every pair attracts.\n\n**Verification:** This matches option B.',
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
      '⚠️ **Key point:** The neutral point for unlike charges lies outside the segment on the side of the smaller charge.\n\n**Step 1:** Set up field balance\nLet the neutral point be a distance $x$ to the right of the $+Q$ charge. The fields must be equal and opposite:\n$$\\frac{4Q}{(3 + x)^2} = \\frac{Q}{x^2}$$\n\n**Step 2:** Solve for $x$\n$$4x^2 = (3 + x)^2 \\Rightarrow x = 3$$\n\n**Verification:** The neutral point is at $Z$, matching option D.',
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
      '⚠️ **Key point:** For equal field magnitudes from two like charges, the point lies outside the segment, closer to the smaller charge.\n\n**Step 1:** Set equal magnitudes on the right side of $+Q$\nLet the point be at $x > 15$ (cm). Then:\n$$\\frac{4Q}{x^2} = \\frac{Q}{(x-15)^2}$$\n\n**Step 2:** Solve\n$$4(x-15)^2 = x^2 \\Rightarrow x = 30\\,\\text{cm}$$\n\n**Verification:** The correct location is $x=30\\,\\text{cm}$, matching option D.',
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
      '⚠️ **Key point:** The spheres repel, so they have like charges (sign unknown), and equilibrium requires electrostatic force to balance weight, linking $d$ to $m$.\n\n**Step 1:** Statement (1)\nRepulsion implies like charges, but they could be both positive or both negative. So (1) is not necessarily correct.\n\n**Step 2:** Statement (2)\nEqual mass does not imply equal charge; charges can differ. So (2) is not necessarily correct.\n\n**Step 3:** Statement (3)\nFor the upper sphere, electrostatic repulsion balances weight: $$mg = \\frac{Q_1 Q_2}{4\\pi\\varepsilon_0 d^2}$$\nSo the separation $d$ depends on $m$ (and on $Q_1 Q_2$). Thus (3) must be correct.\n\n**Verification:** Only statement (3) is correct, matching option B.',
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
      '⚠️ **Key point:** The field of a positive charge points away from the charge and follows $E \\propto 1/r^2$, approaching zero at large distances.\n\n**Step 1:** Sign of $E$\nTo the right of the charge, $E$ points right (positive). To the left, it points left (negative). With the charge at $x=-d$, the graph must reflect this sign change at the charge location.\n\n**Step 2:** Shape\n$E$ diverges at the charge position and tends to zero as $|x|\\to\\infty$.\n\n**Verification:** The graph matching these features is option D.',
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
];
