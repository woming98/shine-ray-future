import { Exercise } from '../types';

// 练习题 - DSE Style (All in English)
// Temperature, Heat and Internal Energy 板块
export const TEMPERATURE_GAS_EXERCISES: Exercise[] = [
  {
    id: 'thi-001',
    type: 'multiple_choice',
    question:
      'When a mercury thermometer is immersed in melting ice and then in steam, the lengths of the mercury thread in the stem are respectively 2 cm and 22 cm. When the thermometer is put in a water bath, the length of the thread is 11 cm. What is the temperature of the water bath?',
    options: ['40°C', '45°C', '50°C', '55°C'],
    answer: '45°C',
    explanation:
      '⚠️ **Key point:** A liquid-in-glass thermometer scale is assumed linear between the ice point (0°C) and the steam point (100°C).\n\n**Step 1:** Identify the calibration lengths\n- At $0^{\\circ}\\text{C}$: $\\ell_0 = 2\\text{ cm}$\n- At $100^{\\circ}\\text{C}$: $\\ell_{100} = 22\\text{ cm}$\n- In the water bath: $\\ell = 11\\text{ cm}$\n\n**Step 2:** Use linear interpolation\n$$\\frac{\\theta}{100} = \\frac{\\ell - \\ell_0}{\\ell_{100} - \\ell_0}$$\nSubstitute:\n$$\\frac{\\theta}{100} = \\frac{11 - 2}{22 - 2} = \\frac{9}{20} = 0.45$$\nTherefore $\\theta = 45^{\\circ}\\text{C}$.\n\n**Verification:** The thread length is between the 0°C and 100°C marks, so the temperature should be between 0°C and 100°C, consistent with $45^{\\circ}\\text{C}$.',
    difficulty: 1,
    points: 10,
    hints: [
      'Assume the thermometer scale is linear between 0°C and 100°C',
      'Use $\\theta/100 = (\\ell - \\ell_0)/(\\ell_{100} - \\ell_0)$',
      'Here $\\ell_0=2\\text{ cm}$, $\\ell_{100}=22\\text{ cm}$ and $\\ell=11\\text{ cm}$'
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-002',
    type: 'multiple_choice',
    question:
      'An equal quantity of heat is supplied to each of the following substances and the corresponding rises in temperature are recorded.\n\n- P: mass 2.5 kg, rise 5°C\n- Q: mass 3.0 kg, rise 4°C\n- R: mass 4.5 kg, rise 3°C\n- S: mass 5.0 kg, rise 3°C\n\nWhich substance has the smallest specific heat capacity?',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'S',
    explanation:
      '⚠️ **Key point:** With the same heat energy supplied, $c = \\frac{E}{m\\Delta T}$, so $c \\propto \\frac{1}{m\\Delta T}$.\n\n**Step 1:** Compare $m\\Delta T$ for each substance\n- $P$: $2.5 \\times 5 = 12.5$\n- $Q$: $3.0 \\times 4 = 12$\n- $R$: $4.5 \\times 3 = 13.5$\n- $S$: $5.0 \\times 3 = 15$\n\n**Step 2:** Identify the smallest $c$\nSince $c \\propto \\frac{1}{m\\Delta T}$, the smallest $c$ corresponds to the largest $m\\Delta T$.\n\n**Conclusion:** Substance $S$ has the smallest specific heat capacity.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E = mc\\Delta T$ and note that $E$ is the same for all substances',
      'So $c = E/(m\\Delta T)$ and $c$ is inversely proportional to $m\\Delta T$',
      'Calculate and compare $m\\Delta T$ for P, Q, R and S'
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-003',
    type: 'multiple_choice',
    question:
      'The heat capacity of an object depends on its\n\n(1) material\n(2) mass\n(3) shape',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** Heat capacity depends on how much material you have (mass) and what the material is (its specific heat capacity).\n\n**Step 1:** Use the relation between heat capacity and specific heat capacity\nFor a body of mass $m$ and specific heat capacity $c$:\n$$C = mc$$\n\n**Step 2:** Interpret the dependence\n- $m$ depends on the mass of the object.\n- $c$ depends on the material.\n- Shape does not appear in $C = mc$ (shape affects heat loss rate, not heat capacity).\n\n**Conclusion:** Heat capacity depends on (1) and (2) only.',
    difficulty: 1,
    points: 10,
    hints: [
      'Distinguish heat capacity $C$ from specific heat capacity $c$',
      'Use the relation $C = mc$',
      'Check whether “shape” appears in the formula for $C$'
    ],
    sectionId: 'temp-heat-internal',
  },
];
