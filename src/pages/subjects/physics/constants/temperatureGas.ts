import { Exercise } from '../types';

// 练习题 - DSE Style (All in English)
// Temperature and Gas (multiple sections)
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
  {
    id: 'thi-004',
    type: 'multiple_choice',
    question: 'Which of the following pairs of objects have different specific heat capacities?',
    options: [
      '1 kg of water and 2 kg of water',
      '1 kg of liquid naphthalene and 1 kg of solid naphthalene',
      '1 kg of oil in a glass container and 1 kg of oil in a metal container',
      '1 kg of water at 15°C and 1 kg of water at 30°C'
    ],
    answer: '1 kg of liquid naphthalene and 1 kg of solid naphthalene',
    explanation:
      '⚠️ **Key point:** Specific heat capacity $c$ is a property of the material (and its state). It does not depend on mass, container, or (in this syllabus assumption) temperature.\n\n**Step 1:** Recall the definition\n$$E = mc\\Delta T \\quad \\Rightarrow \\quad c = \\frac{E}{m\\Delta T}$$\nSo $c$ depends on what the substance is.\n\n**Step 2:** Check each option\n- **A:** Both are water → same $c$ (mass changes $m$, not $c$).\n- **B:** Same substance but different states (liquid vs solid) → $c$ is different.\n- **C:** Container changes heat loss rate, not the oil’s $c$.\n- **D:** Same substance (water) → take $c$ as constant over this temperature range.\n\n**Conclusion:** Option B is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Specific heat capacity is a property of the substance (and its state)',
      'Mass and container do not change $c$',
      'Liquid and solid of the same substance can have different $c$'
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-005',
    type: 'multiple_choice',
    question:
      'The graph shows the relationship between temperature and time when 1 kg of a liquid is heated by a 500 W immersion heater. Assuming no loss of heat, what is the specific heat capacity of the liquid?',
    options: [
      '0.01 J kg⁻¹ °C⁻¹',
      '250 J kg⁻¹ °C⁻¹',
      '420 J kg⁻¹ °C⁻¹',
      '2500 J kg⁻¹ °C⁻¹',
    ],
    answer: '250 J kg⁻¹ °C⁻¹',
    explanation:
      '⚠️ **Key point:** With no heat loss, energy supplied by the heater equals the thermal energy gained by the liquid.\n\n**Step 1:** Calculate the energy supplied\n$$E = Pt = 500 \\times 20 = 1.0 \\times 10^4\\text{ J}$$\n\n**Step 2:** Find the temperature rise\n$$\\Delta T = 60 - 20 = 40^{\\circ}\\text{C}$$\n\n**Step 3:** Use $E = mc\\Delta T$\nWith $m = 1\\text{ kg}$:\n$$c = \\frac{E}{m\\Delta T} = \\frac{1.0 \\times 10^4}{1 \\times 40} = 250\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$$\n\n**Verification:** $500\\text{ W} = 500\\text{ J s}^{-1}$, so $E$ is in joules and the result has units $\\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$.',
    difficulty: 2,
    points: 15,
    hints: [
      'No heat loss: use $E = Pt$ for the heater energy',
      'From the graph, find $\\Delta T$ over the time interval',
      'Use $E = mc\\Delta T$ to solve for $c$',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-005-question.png'],
  },
  {
    id: 'thi-006',
    type: 'multiple_choice',
    question:
      'A heater supplies energy to a liquid of mass 0.5 kg and specific heat capacity $4000\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$ contained in a vessel of negligible heat capacity. Assume that the heat exchange with the surroundings can be neglected. If the temperature of the liquid rises from $10^{\\circ}\\text{C}$ to $70^{\\circ}\\text{C}$ in 100 s, the power of the heater is',
    options: ['200 W', '1200 W', '1400 W', '12000 W'],
    answer: '1200 W',
    explanation:
      '⚠️ **Key point:** With negligible heat loss, the electrical energy supplied equals the thermal energy gained: $Pt = mc\\Delta T$.\n\n**Step 1:** Find the temperature rise\n$$\\Delta T = 70 - 10 = 60^{\\circ}\\text{C}$$\n\n**Step 2:** Calculate the energy gained by the liquid\n$$E = mc\\Delta T = (0.5)(4000)(60) = 1.2 \\times 10^5\\text{ J}$$\n\n**Step 3:** Use $P = E/t$\n$$P = \\frac{E}{t} = \\frac{1.2 \\times 10^5}{100} = 1200\\text{ W}$$\n\n**Verification:** $\\text{J}/\\text{s} = \\text{W}$, so the unit is correct.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use $E = mc\\Delta T$ to find the thermal energy gained',
      'Then use $P = E/t$ (or combine into $Pt = mc\\Delta T$)',
      'Here $\\Delta T = 70 - 10$ and $t = 100\\text{ s}$'
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-007',
    type: 'multiple_choice',
    question:
      'In the diagram shown, the water is initially at room temperature. The electric heater is switched on for 300 s and then switched off. Which of the following graphs correctly describes the variation of the reading of the thermometer?',
    options: [
      '/physics/exercises/temp-heat-internal/thi-007-option-a.png',
      '/physics/exercises/temp-heat-internal/thi-007-option-b.png',
      '/physics/exercises/temp-heat-internal/thi-007-option-c.png',
      '/physics/exercises/temp-heat-internal/thi-007-option-d.png',
    ],
    answer: '/physics/exercises/temp-heat-internal/thi-007-option-d.png',
    explanation:
      '⚠️ **Key point:** When the heater is switched off, the heater element is still hot, so it continues transferring heat to the water for a short time.\n\n**Step 1:** Heating phase (0 to 300 s)\nWhile the heater is on, the water temperature rises.\n\n**Step 2:** Just after switch-off (just after 300 s)\nThe heater is still hot, so the water temperature continues to rise briefly.\n\n**Step 3:** Cooling phase\nAfter the heater cools, the water starts to lose heat to the surroundings, so the temperature decreases and eventually returns to the initial room temperature.\n\n**Conclusion:** The correct graph is option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Think about what happens exactly at 300 s when the heater is switched off',
      'The heater element remains hot briefly, so temperature may keep rising for a short time',
      'Later the water cools back toward room temperature',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-007-question.png'],
  },
  {
    id: 'thi-008',
    type: 'multiple_choice',
    question:
      'An energy of 16500 J is supplied to a metal block of mass 0.5 kg and its rise in temperature is $64^{\\circ}\\text{C}$. The specific heat capacity of the metal is',
    options: [
      '$\\frac{16500 \\times 0.5}{64 + 273}\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$',
      '$\\frac{16500 \\times 64}{0.5}\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$',
      '$\\frac{16500}{64 \\times 0.5}\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$',
      '$\\frac{16500}{(64 + 273) \\times 0.5}\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$',
    ],
    answer: '$\\frac{16500}{64 \\times 0.5}\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$',
    explanation:
      '⚠️ **Key point:** A temperature rise is $\\Delta T$, so you do not add 273; a difference in °C is the same as a difference in K.\n\n**Step 1:** Use $E = mc\\Delta T$\nRearrange:\n$$c = \\frac{E}{m\\Delta T}$$\n\n**Step 2:** Substitute values\n$$c = \\frac{16500}{0.5 \\times 64} \\approx 5.16 \\times 10^2\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$$\n\n**Conclusion:** Option C is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E = mc\\Delta T$',
      '“Rise in temperature” means $\\Delta T$, not $T + 273$',
      'Compute $c = 16500/(0.5 \\times 64)$'
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-009',
    type: 'multiple_choice',
    question: 'Water is used as a coolant in motor car engines because',
    options: [
      'water has a low specific heat capacity.',
      'water has a high specific heat capacity.',
      'water has a low specific latent heat of vaporization.',
      'water has a high specific latent heat of vaporization.',
    ],
    answer: 'water has a high specific heat capacity.',
    explanation:
      '⚠️ **Key point:** A coolant should absorb a large amount of heat with only a small rise in temperature.\n\n**Step 1:** Recall what specific heat capacity means\nA high specific heat capacity means more energy is needed to raise the temperature of 1 kg of a substance by $1^{\\circ}\\text{C}$.\n\n**Step 2:** Apply to engine cooling\nWater can absorb a large amount of heat from the engine while its temperature rises relatively slowly, helping prevent overheating.\n\n**Conclusion:** Water is used as a coolant because it has a high specific heat capacity (option B).',
    difficulty: 1,
    points: 10,
    hints: [
      'A good coolant should absorb a lot of heat with a small temperature rise',
      'High specific heat capacity means temperature rises slowly for a given heat input',
      'So water is a good coolant for engines',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-010',
    type: 'multiple_choice',
    question:
      'An equal amount of energy is supplied to each of the following substances. Which one has the smallest rise in temperature?\n\n- P: mass 1 kg, specific heat capacity 4200 J kg⁻¹ °C⁻¹\n- Q: mass 2 kg, specific heat capacity 2300 J kg⁻¹ °C⁻¹\n- R: mass 3 kg, specific heat capacity 2200 J kg⁻¹ °C⁻¹\n- S: mass 4 kg, specific heat capacity 900 J kg⁻¹ °C⁻¹',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'R',
    explanation:
      '⚠️ **Key point:** For the same energy input $E$, $\\Delta T = \\frac{E}{mc}$, so a larger $mc$ gives a smaller temperature rise.\n\n**Step 1:** Use the relation\nFrom $E = mc\\Delta T$:\n$$\\Delta T = \\frac{E}{mc}$$\nSo $\\Delta T \\propto \\frac{1}{mc}$.\n\n**Step 2:** Compare $mc$ for each substance\n- $P$: $1 \\times 4200 = 4200$\n- $Q$: $2 \\times 2300 = 4600$\n- $R$: $3 \\times 2200 = 6600$\n- $S$: $4 \\times 900 = 3600$\n\n**Conclusion:** $R$ has the largest $mc$, so it has the smallest rise in temperature.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E = mc\\Delta T$ and note that $E$ is the same',
      'Rearrange to $\\Delta T = E/(mc)$',
      'Find which substance has the largest product $mc$',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-011',
    type: 'multiple_choice',
    question:
      'Which of the following statements about heat is/are true?\n\n(1) Heat is used to describe the total energy stored in a body.\n(2) Heat is used to describe the energy transferred from one body to another as a result of a temperature difference between them.\n(3) A body’s internal energy is increased when it is heated.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** Heat is energy **in transfer** due to a temperature difference; internal energy is the energy **stored** in a body.\n\n**Step 1:** Check statement (1)\n“Total energy stored in a body” describes **internal energy**, not heat. So (1) is false.\n\n**Step 2:** Check statement (2)\nThis is the definition of heat: energy transferred because of a temperature difference. So (2) is true.\n\n**Step 3:** Check statement (3)\nWhen a body is heated, energy is transferred to it, so its internal energy increases. So (3) is true.\n\n**Conclusion:** Statements (2) and (3) are true → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Heat is energy transferred due to temperature difference',
      'Internal energy refers to energy stored in a body',
      'Heating usually increases internal energy',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-012',
    type: 'multiple_choice',
    question:
      'Which of the following phenomena concerning water can be explained by its high specific heat capacity?\n\n(1) Water is used as a coolant in car engines.\n(2) Inland areas generally have hotter summers and colder winters than coastal areas of similar latitude and altitude.\n(3) The body temperature of human beings changes slowly even when the surrounding temperature changes sharply.',
    options: ['(2) only', '(1) & (2) only', '(1) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** A high specific heat capacity means a substance can absorb/release a large amount of heat with only a small temperature change.\n\n**Step 1:** Check (1) coolant\nWater absorbs much heat from an engine with a relatively small rise in temperature → true.\n\n**Step 2:** Check (2) coastal vs inland climates\nThe sea (large mass of water) warms and cools slowly, moderating coastal temperatures; inland areas lack this moderation → true.\n\n**Step 3:** Check (3) human body temperature\nThe human body contains a large amount of water, so its temperature changes relatively slowly → true.\n\n**Conclusion:** (1), (2) and (3) are all true → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'High specific heat capacity means temperature changes slowly for a given heat transfer',
      'Think about the sea moderating coastal temperatures',
      'The human body contains a lot of water',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-013',
    type: 'multiple_choice',
    question:
      'The apparatus is used to find the specific heat capacity of a liquid. Which of the following can improve the accuracy of the experiment?\n\n(1) Take the final temperature of the liquid immediately after switching off the power supply.\n(2) Cover the cup with a lid.\n(3) Stir the liquid throughout the experiment.',
    options: ['(1) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** Accuracy improves when heat loss is reduced and the liquid temperature is uniform.\n\n**Step 1:** Consider statement (1)\nThe heater is still hot immediately after switch‑off, so it can continue transferring heat to the liquid and the thermometer reading may still change. Taking the temperature immediately does not improve accuracy. So (1) is false.\n\n**Step 2:** Consider statement (2)\nA lid reduces heat loss to the surroundings, so the measured electrical energy is closer to the thermal energy gained by the liquid. So (2) is true.\n\n**Step 3:** Consider statement (3)\nStirring makes the temperature more uniform throughout the liquid, so the thermometer reading better represents the whole liquid. So (3) is true.\n\n**Conclusion:** (2) and (3) are true → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Reduce heat loss to surroundings to improve accuracy',
      'Stirring helps ensure uniform temperature',
      'Do not assume the temperature stops changing immediately at switch‑off',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-013-question.png'],
  },
  {
    id: 'thi-014',
    type: 'multiple_choice',
    question:
      'A heater with a power of 100 W is used to heat 0.3 kg of a liquid which has a specific heat capacity of $2000\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$. If the initial temperature of the liquid is $23^{\\circ}\\text{C}$, find its temperature after 2 minutes. Assume all the energy given out by the heater is absorbed by the liquid.',
    options: [
      '$\\left(\\frac{100 \\times 120}{0.3 \\times 2000} + 23\\right)^{\\circ}\\text{C}$',
      '$\\left(\\frac{0.3 \\times 2000 \\times 23 \\times 2}{100}\\right)^{\\circ}\\text{C}$',
      '$\\left(\\frac{100 \\times 120 \\times 0.3}{2000} + 23\\right)^{\\circ}\\text{C}$',
      '$\\left(\\frac{0.3 \\times 2000}{100 \\times 120} + 23\\right)^{\\circ}\\text{C}$',
    ],
    answer: '$\\left(\\frac{100 \\times 120}{0.3 \\times 2000} + 23\\right)^{\\circ}\\text{C}$',
    explanation:
      '⚠️ **Key point:** Use $E = Pt$ and $E = mc\\Delta T$, and remember to convert minutes to seconds.\n\n**Step 1:** Calculate the energy supplied\nTime: $t = 2\\text{ min} = 120\\text{ s}$\n$$E = Pt = 100 \\times 120 = 1.2 \\times 10^4\\text{ J}$$\n\n**Step 2:** Find the temperature rise\n$$\\Delta T = \\frac{E}{mc} = \\frac{1.2 \\times 10^4}{0.3 \\times 2000} = 20^{\\circ}\\text{C}$$\n\n**Step 3:** Find the final temperature\n$$T = 23 + 20 = 43^{\\circ}\\text{C}$$\n\n**Conclusion:** The correct expression is option A (equivalent to $43^{\\circ}\\text{C}$).',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert 2 minutes to seconds',
      'Use $E = Pt$ to find the energy supplied',
      'Use $E = mc\\Delta T$ to find $\\Delta T$, then add the initial temperature',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-015',
    type: 'multiple_choice',
    question:
      'The graph shows the variation of the temperature of a liquid with time when the liquid is heated by a 400 W heater. The mass of the liquid is 2 kg. Find the specific heat capacity of the liquid. Assume all the energy given out by the heater is absorbed by the liquid.',
    options: [
      '83 J kg⁻¹ °C⁻¹',
      '480 J kg⁻¹ °C⁻¹',
      '1200 J kg⁻¹ °C⁻¹',
      '2400 J kg⁻¹ °C⁻¹',
    ],
    answer: '1200 J kg⁻¹ °C⁻¹',
    explanation:
      '⚠️ **Key point:** Read $t$ and $\\Delta T$ from the graph, then use $E = Pt = mc\\Delta T$.\n\n**Step 1:** Find $t$ and $\\Delta T$ from the graph\nFrom the graph, the temperature rises from $15^{\\circ}\\text{C}$ to $25^{\\circ}\\text{C}$ in $60\\text{ s}$.\nSo $\\Delta T = 25 - 15 = 10^{\\circ}\\text{C}$.\n\n**Step 2:** Calculate the energy supplied\n$$E = Pt = 400 \\times 60 = 2.4 \\times 10^4\\text{ J}$$\n\n**Step 3:** Solve for $c$\nWith $m = 2\\text{ kg}$:\n$$c = \\frac{E}{m\\Delta T} = \\frac{2.4 \\times 10^4}{2 \\times 10} = 1200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$$\n\n**Conclusion:** Option C is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'From the graph, find the time interval and temperature rise',
      'Use $E = Pt$ with $P = 400\\text{ W}$',
      'Use $E = mc\\Delta T$ to solve for $c$',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-015-question.png'],
  },
  {
    id: 'thi-016',
    type: 'multiple_choice',
    question:
      'Which of the following statements about internal energy, heat and temperature is/are true?\n\n(1) The internal energy of a body is a measure of the total kinetic energy and potential energy of the molecules in the body.\n(2) Two bodies of the same temperature always have the same amount of internal energy.\n(3) Heat is a measure of the energy transferred from one body to another as a result of a temperature difference between the two bodies.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) & (3) only',
    explanation:
      '⚠️ **Key point:** Internal energy is energy stored in a body (microscopic KE + PE), while heat is energy transferred due to temperature difference.\n\n**Step 1:** Check statement (1)\nThis is the definition of internal energy (sum of microscopic kinetic and potential energies). So (1) is true.\n\n**Step 2:** Check statement (2)\nSame temperature does not guarantee the same internal energy (e.g., different masses or different substances can store different amounts of internal energy). So (2) is false.\n\n**Step 3:** Check statement (3)\nThis is the definition of heat: energy transferred as a result of temperature difference. So (3) is true.\n\n**Conclusion:** (1) and (3) are true → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Internal energy is microscopic KE + PE inside a body',
      'Same temperature does not necessarily mean same internal energy',
      'Heat refers to energy transfer due to temperature difference',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-017',
    type: 'multiple_choice',
    question:
      'Equal masses of liquids $X$, $Y$ and $Z$ are separately heated. The graph shows the variation of the energies absorbed by the liquids with their temperatures. Let $c_X$, $c_Y$ and $c_Z$ be the specific heat capacities of $X$, $Y$ and $Z$ respectively. Which of the following relations is correct?',
    options: [
      '$c_X = c_Y > c_Z$',
      '$c_X = c_Y < c_Z$',
      '$c_X < c_Y = c_Z$',
      '$c_X > c_Y = c_Z$',
    ],
    answer: '$c_X > c_Y = c_Z$',
    explanation:
      '⚠️ **Key point:** For equal masses, the slope of an $E$–$T$ graph is proportional to specific heat capacity.\n\n**Step 1:** Relate the graph slope to $c$\nFrom $E = mc\\Delta T$, we have\n$$\\text{slope} = \\frac{\\Delta E}{\\Delta T} = mc$$\nSince the masses are equal, $\\text{slope} \\propto c$.\n\n**Step 2:** Compare slopes\nFrom the graph: slope of $X$ is greater than slope of $Y$, and slopes of $Y$ and $Z$ are equal.\n\n**Conclusion:** $c_X > c_Y = c_Z$ → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E = mc\\Delta T$',
      'On an $E$–$T$ graph, slope = $\\Delta E/\\Delta T = mc$',
      'Equal masses mean comparing slopes compares $c$ directly',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-017-question.png'],
  },
  {
    id: 'thi-018',
    type: 'multiple_choice',
    question:
      'An object $P$ has a higher temperature than another object $Q$. Which of the following statements is/are correct?\n\n(1) The internal energy of $P$ must be higher than that of $Q$.\n(2) The specific heat capacity of $P$ must be higher than that of $Q$.\n(3) There will be a heat flow from $P$ to $Q$ when they are in contact.',
    options: ['(3) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** Temperature indicates how hot a body is, but it does not uniquely determine internal energy or specific heat capacity.\n\n**Step 1:** Check statement (1)\nInternal energy depends on factors such as mass and the substance (as well as temperature). A small, hot object can have less internal energy than a large, cooler object. So (1) is false.\n\n**Step 2:** Check statement (2)\nSpecific heat capacity is a property of the material/state; it does not have to be higher for the hotter object. So (2) is false.\n\n**Step 3:** Check statement (3)\nWhen two bodies are in thermal contact, heat flows from the higher temperature body to the lower temperature body (until thermal equilibrium). So (3) is true.\n\n**Conclusion:** (3) only is correct → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Internal energy depends on mass and material, not only temperature',
      'Specific heat capacity is a material property, not “higher because hotter”',
      'Heat flows from higher temperature to lower temperature when in contact',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-019',
    type: 'multiple_choice',
    question:
      'Equal amounts of four different liquids are separately heated at the same rate. The initial temperatures of the liquids are all $20^{\\circ}\\text{C}$. The boiling points and specific heat capacities of the liquids are:\n\n- P: boiling point 50°C, $c = 1000\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n- Q: boiling point 60°C, $c = 530\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n- R: boiling point 80°C, $c = 850\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n- S: boiling point 360°C, $c = 140\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n\nWhich liquid will boil first?',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'Q',
    explanation:
      '⚠️ **Key point:** With equal masses heated at the same power, the time to reach boiling is proportional to $c\\Delta T$.\n\n**Step 1:** Relate heating time to $c\\Delta T$\nEnergy needed to reach boiling: $E = mc\\Delta T$.\nHeater energy: $E = Pt$.\nSo\n$$t = \\frac{mc\\Delta T}{P} \\propto c\\Delta T$$\n(since $m$ and $P$ are the same for all liquids).\n\n**Step 2:** Compute $c\\Delta T$ for each liquid\nHere $\\Delta T = T_\\text{boil} - 20^{\\circ}\\text{C}$.\n- $P$: $\\Delta T = 30$, so $c\\Delta T = 1000 \\times 30 = 30000$\n- $Q$: $\\Delta T = 40$, so $c\\Delta T = 530 \\times 40 = 21200$\n- $R$: $\\Delta T = 60$, so $c\\Delta T = 850 \\times 60 = 51000$\n- $S$: $\\Delta T = 340$, so $c\\Delta T = 140 \\times 340 = 47600$\n\n**Conclusion:** $Q$ has the smallest $c\\Delta T$, so it reaches its boiling point first.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E = mc\\Delta T$ and $E = Pt$',
      'With equal mass and power, $t \\propto c\\Delta T$',
      'Compute $\\Delta T = T_\\text{boil} - 20^{\\circ}\\text{C}$ for each liquid',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-020',
    type: 'multiple_choice',
    question:
      'The apparatus shown is used to measure the specific heat capacity of a cylindrical copper block. The result of the experiment is as follows:\n\n- Mass of copper block: $m\\ \\text{kg}$\n- Initial temperature: $21^{\\circ}\\text{C}$\n- Final temperature: $47^{\\circ}\\text{C}$\n- Initial joulemeter reading: $R_1\\ \\text{J}$\n- Final joulemeter reading: $R_2\\ \\text{J}$\n\nWhich of the following expressions gives the specific heat capacity of copper in $\\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$?',
    options: [
      '$\\frac{m(R_2 - R_1)}{26}$',
      '$\\frac{R_1 - R_2}{26m}$',
      '$\\frac{R_2 - R_1}{26m}$',
      '$\\frac{m(R_1 - R_2)}{26}$',
    ],
    answer: '$\\frac{R_2 - R_1}{26m}$',
    explanation:
      '⚠️ **Key point:** The energy supplied is the change in the joulemeter reading, $E = R_2 - R_1$, and $\\Delta T = 47 - 21$.\n\n**Step 1:** Find energy input and temperature rise\n$$E = R_2 - R_1$$\n$$\\Delta T = 47 - 21 = 26^{\\circ}\\text{C}$$\n\n**Step 2:** Use $E = mc\\Delta T$\n$$R_2 - R_1 = mc(26)$$\nSo\n$$c = \\frac{R_2 - R_1}{26m}$$\n\n**Conclusion:** Option C is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Energy supplied is the increase in joulemeter reading: $R_2 - R_1$',
      'Temperature rise is $47 - 21$',
      'Use $E = mc\\Delta T$ and solve for $c$',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-020-question.png'],
  },
  {
    id: 'thi-021',
    type: 'multiple_choice',
    question:
      'The specific heat capacity of a metal is measured using the following method.\n\nA metal block is first immersed in boiling water for some time. The block is then transferred to a cup of cold water. After a while, the temperature of the water is measured.\n\nThe result of the experiment is as follows:\n- Mass of metal block: $0.8\\text{ kg}$\n- Mass of water in the cup: $0.3\\text{ kg}$\n- Initial temperature of water: $23^{\\circ}\\text{C}$\n- Final temperature of water: $38^{\\circ}\\text{C}$\n- Specific heat capacity of water: $4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n\nFind the specific heat capacity of the metal (in $\\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$).',
    options: [
      '236 J kg⁻¹ °C⁻¹',
      '381 J kg⁻¹ °C⁻¹',
      '622 J kg⁻¹ °C⁻¹',
      '953 J kg⁻¹ °C⁻¹',
    ],
    answer: '381 J kg⁻¹ °C⁻¹',
    explanation:
      '⚠️ **Key point:** Assume no heat loss to the surroundings. Heat lost by the metal equals heat gained by the water.\n\n**Step 1:** Find temperature changes\n- Water: $\\Delta T_w = 38 - 23 = 15^{\\circ}\\text{C}$\n- Metal: initial temperature is $100^{\\circ}\\text{C}$ (boiling water), so $\\Delta T_m = 100 - 38 = 62^{\\circ}\\text{C}$\n\n**Step 2:** Apply conservation of energy\n$$m_m c_m \\Delta T_m = m_w c_w \\Delta T_w$$\nSubstitute:\n$$(0.8)c_m(62) = (0.3)(4200)(15)$$\n\n**Step 3:** Solve for $c_m$\n$$(0.8)(62) = 49.6$$\n$$c_m = \\frac{(0.3)(4200)(15)}{49.6} \\approx 381\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$$\n\n**Conclusion:** The specific heat capacity of the metal is $381\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$ → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Assume heat lost by metal = heat gained by water',
      'The metal starts at 100°C after being in boiling water',
      'Use $m_mc_m(100-38) = m_wc_w(38-23)$',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-021-question.png'],
  },
  {
    id: 'thi-022',
    type: 'multiple_choice',
    question:
      'The specific heat capacity of a metal is measured using the following method.\n\nA metal block is first immersed in boiling water for some time. The block is then transferred to a cup of cold water. After a while, the temperature of the water is measured.\n\nThe result obtained in the last question is found to be higher than the true value of the specific heat capacity of the metal. Which of the following is a probable reason?',
    options: [
      'Some hot water is still adhered to the metal block when the block is transferred to the cold water.',
      'Some energy is lost to the surroundings when the metal block is transferred to the cold water.',
      'Some energy is absorbed by the cup.',
      'The temperature of the metal block is still higher than 38°C when the final temperature of the water in the cup is measured.',
    ],
    answer:
      'Some hot water is still adhered to the metal block when the block is transferred to the cold water.',
    explanation:
      '⚠️ **Key point:** If the calculated $c$ is higher than the true value, the calculation likely overestimates the heat gained by the water (or underestimates the effective heat source).\n\n**Step 1:** Recall the calculation\nIn the mixing method, we use\n$$m_m c_m (T_{m,i}-T_f) = m_w c_w (T_f - T_{w,i})$$\nSo\n$$c_m = \\frac{m_w c_w \\Delta T_w}{m_m \\Delta T_m}$$\n\n**Step 2:** Evaluate the effects\n- **A:** Hot water carried with the metal adds extra heat to the cup, increasing $\\Delta T_w$. This makes the calculated $c_m$ larger than the true value → gives a higher result.\n- **B:** Heat loss to surroundings reduces $\\Delta T_w$, making calculated $c_m$ smaller.\n- **C:** Heat absorbed by the cup also reduces $\\Delta T_w$, making calculated $c_m$ smaller.\n- **D:** If the metal is still above 38°C, not all its heat has been transferred at the time of reading; that would reduce the water’s heat gain at that moment, tending to make calculated $c_m$ smaller.\n\n**Conclusion:** Option A is the probable reason.',
    difficulty: 2,
    points: 15,
    hints: [
      'If $c$ is overestimated, the water likely gained extra heat not accounted for',
      'Hot water attached to the block adds heat to the water in the cup',
      'Heat loss or cup absorption usually makes the calculated value smaller',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-022-question.png'],
  },
  {
    id: 'thi-023',
    type: 'multiple_choice',
    question:
      'If there is no heat flow between two bodies when they are in contact, then the two bodies must have the same',
    options: [
      'temperature.',
      'internal energy.',
      'specific heat capacity.',
      'specific latent heat of vaporization.',
    ],
    answer: 'temperature.',
    explanation:
      '⚠️ **Key point:** Heat flows due to a temperature difference.\n\n**Step 1:** Recall the condition for heat flow\nWhen two bodies are in thermal contact, heat flows from the higher temperature body to the lower temperature body until they reach thermal equilibrium.\n\n**Step 2:** Apply to “no heat flow”\nIf there is no heat flow between the two bodies while in contact, there is no temperature difference between them.\n\n**Conclusion:** They must have the same temperature → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Heat transfer requires a temperature difference',
      'No heat flow means no temperature difference',
      'Thermal equilibrium implies equal temperature',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-024',
    type: 'multiple_choice',
    question:
      'A student uses an electric kettle to heat 0.5 kg of water at $20^{\\circ}\\text{C}$. The water boils in 4 minutes. Estimate the output power of the kettle. (Specific heat capacity of water $= 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$.)',
    options: ['175 W', '700 W', '875 W', '1400 W'],
    answer: '700 W',
    explanation:
      '⚠️ **Key point:** Estimate the energy needed to raise the water to $100^{\\circ}\\text{C}$ (ignore heat loss and latent heat for this estimate).\n\n**Step 1:** Calculate the energy to heat the water to boiling point\n$$E = mc\\Delta T = (0.5)(4200)(100 - 20) = 1.68 \\times 10^5\\text{ J}$$\n\n**Step 2:** Convert time to seconds\n$$t = 4\\text{ min} = 240\\text{ s}$$\n\n**Step 3:** Find power\n$$P = \\frac{E}{t} = \\frac{1.68 \\times 10^5}{240} = 700\\text{ W}$$\n\n**Conclusion:** The output power is about $700\\text{ W}$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E = mc\\Delta T$ with $\\Delta T = 100 - 20$',
      'Convert 4 minutes to seconds',
      'Use $P = E/t$',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-025',
    type: 'multiple_choice',
    question:
      'Four liquids $P$, $Q$, $R$ and $S$ with the same mass are heated at the same rate. The graph shows the variation of their temperatures with time. Which liquid has the highest specific heat capacity?',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'R',
    explanation:
      '⚠️ **Key point:** With equal masses and equal heating power, the rate of temperature rise is inversely proportional to the specific heat capacity.\n\n**Step 1:** Relate slope to $c$\nFrom $E = Pt$ and $E = mc\\Delta T$:\n$$Pt = mc\\Delta T \\Rightarrow \\frac{\\Delta T}{t} = \\frac{P}{mc}$$\nSo the slope of the $T$–$t$ graph satisfies\n$$\\text{slope} \\propto \\frac{1}{c}$$\n\n**Step 2:** Compare slopes\nThe liquid with the smallest slope (slowest temperature rise) has the largest $c$.\nFrom the graph, liquid $R$ has the smallest slope.\n\n**Conclusion:** Liquid $R$ has the highest specific heat capacity → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $Pt = mc\\Delta T$',
      'Slope of a $T$–$t$ graph is $\\Delta T/t$',
      'Smaller slope means larger $c$ for the same mass and power',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-025-question.png'],
  },
  {
    id: 'thi-026',
    type: 'multiple_choice',
    question:
      'What physical properties does the temperature of an object represent?\n\n(1) A measure of the degree of hotness of the object.\n(2) A measure of the internal energy of the object.\n(3) A measure of the average kinetic energy of the molecules of the object.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (3) only',
    explanation:
      '⚠️ **Key point:** Temperature indicates “how hot” an object is and is related to the average kinetic energy of its particles, but it is not a direct measure of total internal energy.\n\n**Step 1:** Check statement (1)\nTemperature is used to describe the degree of hotness of an object → true.\n\n**Step 2:** Check statement (2)\nInternal energy depends on temperature, but also on mass, material and state. So temperature is not a measure of the total internal energy → false.\n\n**Step 3:** Check statement (3)\nIn kinetic theory, temperature is related to the average kinetic energy of the molecules → true.\n\n**Conclusion:** (1) and (3) are true → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Temperature indicates degree of hotness',
      'Internal energy depends on mass and material, not just temperature',
      'Temperature is related to average kinetic energy of molecules',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-027',
    type: 'multiple_choice',
    question:
      'A 100 W immersion heater is used to heat 0.5 kg of water, which is being stirred by a stirrer. After 3 minutes, the water temperature increases from $25^{\\circ}\\text{C}$ to $30^{\\circ}\\text{C}$. What is the estimated energy loss in this period? (Specific heat capacity of water $= 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$.)',
    options: ['7500 J', '10500 J', '18000 J', '28500 J'],
    answer: '7500 J',
    explanation:
      '⚠️ **Key point:** Energy supplied by the heater = energy gained by the water + energy lost to surroundings.\n\n**Step 1:** Energy supplied by the heater\nTime: $t = 3\\text{ min} = 180\\text{ s}$\n$$E_\\text{in} = Pt = 100 \\times 180 = 1.8 \\times 10^4\\text{ J}$$\n\n**Step 2:** Energy gained by the water\n$$\\Delta T = 30 - 25 = 5^{\\circ}\\text{C}$$\n$$E_\\text{water} = mc\\Delta T = (0.5)(4200)(5) = 10500\\text{ J}$$\n\n**Step 3:** Energy loss\n$$E_\\text{loss} = E_\\text{in} - E_\\text{water} = 18000 - 10500 = 7500\\text{ J}$$\n\n**Conclusion:** The estimated energy loss is $7500\\text{ J}$ → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Compute heater energy using $E = Pt$',
      'Compute water energy gain using $E = mc\\Delta T$',
      'Energy loss = heater energy − water energy gain',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-027-question.png'],
  },
  {
    id: 'thi-028',
    type: 'multiple_choice',
    question:
      'Which of the following descriptions about internal energy are correct?\n\n(1) Different masses of water at the same temperature have the same amount of internal energy.\n(2) A copper block has greater internal energy when it is hot than when it is cold.\n(3) Water at $0^{\\circ}\\text{C}$ has greater internal energy than a block of ice of the same mass at $0^{\\circ}\\text{C}$.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** Internal energy depends on mass, temperature, and state.\n\n**Step 1:** Check statement (1)\nInternal energy increases with mass. Two different masses of water at the same temperature generally contain different amounts of internal energy. So (1) is false.\n\n**Step 2:** Check statement (2)\nFor the same copper block, a higher temperature means higher molecular kinetic energy, so internal energy is greater when hot. So (2) is true.\n\n**Step 3:** Check statement (3)\nAt $0^{\\circ}\\text{C}$, liquid water has more internal energy than ice of the same mass because energy is needed for the change of state (latent heat). So (3) is true.\n\n**Conclusion:** (2) and (3) are correct → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Internal energy depends on mass, temperature and state',
      'Same temperature does not guarantee same internal energy for different masses',
      'Liquid water and ice at 0°C differ in internal energy due to latent heat',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-029',
    type: 'multiple_choice',
    question:
      'A bottle of 0.5 kg water and a bottle of 0.75 kg water have been stored in a refrigerator for a few days. Which of the following statements are correct?\n\n(1) The temperatures of the two bottles of water are equal.\n(2) The average kinetic energy of the water molecules in the two bottles is equal.\n(3) The total potential energy of the water molecules in the two bottles is equal.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** After a long time in the same environment, both bottles reach the same temperature, so their molecules have the same average kinetic energy. However, total internal energy (including total potential energy) depends on the amount of substance.\n\n**Step 1:** Check statement (1)\nAfter being in the refrigerator for a long time, both bottles reach thermal equilibrium with the surroundings, so they have the same temperature. So (1) is true.\n\n**Step 2:** Check statement (2)\nThe average kinetic energy of molecules depends on temperature. Since the temperatures are equal, the average kinetic energy is equal. So (2) is true.\n\n**Step 3:** Check statement (3)\nTotal potential energy depends on the number of molecules (mass) and their interactions. The 0.75 kg bottle contains more molecules than the 0.5 kg bottle, so their total potential energies are not equal. So (3) is false.\n\n**Conclusion:** (1) and (2) only are correct → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'After a long time, both bottles reach the same temperature in the refrigerator',
      'Average kinetic energy depends on temperature',
      'Total energy depends on the amount of substance (mass/number of molecules)',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-030',
    type: 'multiple_choice',
    question:
      'The figure shows the temperature–time graph of two objects $X$ and $Y$ when they are heated at the same power. Which of the following deductions are correct?\n\n(1) The heat capacity of $X$ is smaller.\n(2) If $X$ and $Y$ are made of the same material, the mass of $X$ is smaller.\n(3) The specific heat capacity of $X$ is smaller.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** For constant heating power, the slope of a $T$–$t$ graph is inversely proportional to heat capacity $C$.\n\n**Step 1:** Relate slope to heat capacity\nUsing $E = Pt$ and $E = C\\Delta T$:\n$$Pt = C\\Delta T \\Rightarrow \\frac{\\Delta T}{t} = \\frac{P}{C}$$\nSo a larger slope means a smaller heat capacity.\n\n**Step 2:** Deduce (1)\nFrom the graph, $X$ has a larger slope than $Y$, so $C_X < C_Y$. Statement (1) is true.\n\n**Step 3:** Deduce (2)\nIf $X$ and $Y$ are made of the same material, they have the same specific heat capacity $c$ and $C = mc$. So smaller $C$ implies smaller mass. Statement (2) is true.\n\n**Step 4:** Deduce (3)\nWithout knowing whether the materials are the same, the specific heat capacities cannot be compared from the graph alone. Statement (3) is not necessarily true.\n\n**Conclusion:** (1) and (2) only are correct → option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $Pt = C\\Delta T$ to relate heating to temperature rise',
      'Slope $\\Delta T/t$ is proportional to $1/C$ for the same power',
      'To relate heat capacity to mass, use $C = mc$ (only if same material)',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-030-question.png'],
  },
  {
    id: 'thi-031',
    type: 'multiple_choice',
    question:
      'Two liquids $X$ and $Y$ are heated by two different heaters. The energy supplied, the mass of the liquid and the temperature rises are recorded as follows:\n\n- Liquid $X$: $E = 24000\\text{ J}$, $m = 0.3\\text{ kg}$, $\\Delta T = 20^{\\circ}\\text{C}$\n- Liquid $Y$: $E = 18000\\text{ J}$, $m = 0.2\\text{ kg}$, $\\Delta T = 25^{\\circ}\\text{C}$\n\nWhich of the following statements are correct?\n\n(1) The heat capacity of $X$ is larger than that of $Y$.\n(2) The specific heat capacity of $X$ is larger than that of $Y$.\n(3) The heat capacity of $X$ determined remains the same if the experiment is repeated by doubling the mass of $X$.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** Heat capacity $C = \\frac{E}{\\Delta T}$, while specific heat capacity $c = \\frac{E}{m\\Delta T}$. Heat capacity depends on mass.\n\n**Step 1:** Compare heat capacities\n$$C_X = \\frac{24000}{20} = 1200\\ \\text{J}\\ {}^{\\circ}\\text{C}^{-1}$$\n$$C_Y = \\frac{18000}{25} = 720\\ \\text{J}\\ {}^{\\circ}\\text{C}^{-1}$$\nSo $C_X > C_Y$ → statement (1) is true.\n\n**Step 2:** Compare specific heat capacities\n$$c_X = \\frac{24000}{0.3\\times 20} = 4000\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$$\n$$c_Y = \\frac{18000}{0.2\\times 25} = 3600\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$$\nSo $c_X > c_Y$ → statement (2) is true.\n\n**Step 3:** Evaluate statement (3)\nHeat capacity $C = mc$, so doubling the mass doubles $C$ (it does not remain the same). Statement (3) is false.\n\n**Conclusion:** (1) and (2) only are correct → option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $C = E/\\Delta T$ to compare heat capacities',
      'Use $c = E/(m\\Delta T)$ to compare specific heat capacities',
      'Heat capacity depends on mass: $C = mc$',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-032',
    type: 'multiple_choice',
    question:
      'What are the advantages of using mercury in a liquid-in-glass thermometer?\n\n(1) It expands evenly with rise in temperature.\n(2) It is liquid over a convenient range.\n(3) It is transparent.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** A good thermometric liquid should expand uniformly and remain liquid over a wide, convenient temperature range.\n\n**Step 1:** Check statement (1)\nMercury expands approximately uniformly with temperature, giving a nearly linear scale → true.\n\n**Step 2:** Check statement (2)\nMercury is liquid over a convenient range for many applications (e.g., around 0°C to 100°C in daily use, and more broadly in general) → true.\n\n**Step 3:** Check statement (3)\nMercury is opaque (not transparent), so (3) is false.\n\n**Conclusion:** (1) and (2) only are correct → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'A thermometric liquid should expand uniformly with temperature',
      'It should remain liquid over a wide useful range',
      'Mercury is not transparent',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-033',
    type: 'multiple_choice',
    question:
      'Which of the following can increase the heat capacity of a cup of water?\n\n(1) Increase the mass of the water.\n(2) Increase the temperature of the water.\n(3) Change the water to another cup.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '⚠️ **Key point:** Heat capacity $C$ of a body is $C = mc$.\n\n**Step 1:** Consider statement (1)\nIncreasing the mass $m$ increases $C$ directly (since $C = mc$). So (1) is true.\n\n**Step 2:** Consider statement (2)\nFor a given mass of water, $C = mc$ does not depend on the current temperature (in this syllabus approximation). So (2) is false.\n\n**Step 3:** Consider statement (3)\nChanging the container does not change the water’s mass or its specific heat capacity, so it does not change the heat capacity of the water. So (3) is false.\n\n**Conclusion:** (1) only is correct → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $C = mc$',
      'Only changing mass changes the water’s heat capacity',
      'Container and temperature do not change $C$ here',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-034',
    type: 'multiple_choice',
    question:
      'What happens when a cup of water at room temperature is heated?\n\n(1) An increase in the total number of water molecules\n(2) An increase in molecular size\n(3) An increase in the average kinetic energy of the molecules',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** Heating increases the average kinetic energy of molecules (temperature), but it does not create more molecules or change molecular size.\n\n**Step 1:** Check statement (1)\nHeating does not change the amount of substance in the cup (assuming no evaporation/adding water), so the total number of water molecules remains the same. So (1) is false.\n\n**Step 2:** Check statement (2)\nMolecules do not “grow” in size when heated. So (2) is false.\n\n**Step 3:** Check statement (3)\nHeating increases temperature, which is related to the average kinetic energy of the molecules. So (3) is true.\n\n**Conclusion:** (3) only is correct → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Heating increases temperature and average molecular kinetic energy',
      'Number of molecules stays the same if no mass is added/removed',
      'Molecular size does not increase with heating',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-035',
    type: 'multiple_choice',
    question: 'Which of the following physical properties cannot be used to measure temperature?',
    options: ['Liquid volume', 'Resistance of metal', 'Mass', 'Gas pressure'],
    answer: 'Mass',
    explanation:
      '⚠️ **Key point:** A thermometric property must change predictably with temperature.\n\n**Step 1:** Check which properties vary with temperature\n- Liquid volume increases with temperature due to thermal expansion.\n- The resistance of a metal generally increases with temperature.\n- Gas pressure in a fixed volume container increases with temperature.\n\n**Step 2:** Identify the one that does not\nMass of an object does not change simply because its temperature changes.\n\n**Conclusion:** Mass cannot be used as a thermometric property → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'A thermometric property must change with temperature',
      'Thermal expansion changes liquid volume; resistance and gas pressure also vary with temperature',
      'Mass remains (approximately) constant when temperature changes',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-036',
    type: 'multiple_choice',
    question:
      'The length between the $0^{\\circ}\\text{C}$ mark and the $100^{\\circ}\\text{C}$ mark is 20 cm. When the mercury level is 5 cm below the $100^{\\circ}\\text{C}$ mark, the temperature is',
    options: ['25°C', '50°C', '60°C', '75°C'],
    answer: '75°C',
    explanation:
      '⚠️ **Key point:** For a linear thermometer scale, temperature is proportional to the length of the mercury column above the 0°C mark.\n\n**Step 1:** Find the length above the 0°C mark\nThe distance between 0°C and 100°C marks is 20 cm.\nBeing 5 cm below the 100°C mark means the mercury level is $20 - 5 = 15\\text{ cm}$ above the 0°C mark.\n\n**Step 2:** Use linear interpolation\n$$\\frac{\\theta}{100} = \\frac{\\ell}{20} = \\frac{15}{20}$$\nSo\n$$\\theta = 100 \\times \\frac{15}{20} = 75^{\\circ}\\text{C}$$\n\n**Conclusion:** The temperature is $75^{\\circ}\\text{C}$ → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      '5 cm below the 100°C mark means 15 cm above the 0°C mark',
      'Use proportionality: $\\theta/100 = 15/20$',
      'Solve for $\\theta$',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-037',
    type: 'multiple_choice',
    question:
      'When a mercury thermometer is immersed in melting ice, the length of the mercury thread is 2 cm. When it is put into the steam above boiling water, the length of the thread is 24 cm. What is the difference between each $1^{\\circ}\\text{C}$ mark on the thermometer?',
    options: ['0.22 cm', '0.24 cm', '2.20 cm', '22.0 cm'],
    answer: '0.22 cm',
    explanation:
      '⚠️ **Key point:** The spacing per $1^{\\circ}\\text{C}$ is the total length between 0°C and 100°C divided by 100.\n\n**Step 1:** Find the length between 0°C and 100°C marks\n$$\\ell_{100} - \\ell_0 = 24 - 2 = 22\\text{ cm}$$\n\n**Step 2:** Divide by 100°C\n$$\\text{spacing per }1^{\\circ}\\text{C} = \\frac{22}{100} = 0.22\\text{ cm}$$\n\n**Conclusion:** Each $1^{\\circ}\\text{C}$ mark is separated by $0.22\\text{ cm}$ → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Find the total length between 0°C and 100°C marks: 24 − 2',
      'Divide that length by 100',
      'That gives the spacing per 1°C',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-038',
    type: 'multiple_choice',
    question:
      'Heat is supplied at the same rate to equal amounts of water and oil placed in similar containers. The temperature of the oil rises faster. Which of the following is a possible reason?',
    options: [
      'Oil has a lower density than water.',
      'Oil has a higher boiling point than water.',
      'Oil has a smaller specific heat capacity than water.',
      'Oil evaporates less readily than water.',
    ],
    answer: 'Oil has a smaller specific heat capacity than water.',
    explanation:
      '⚠️ **Key point:** For the same mass and same heating power, the rate of temperature rise is inversely proportional to specific heat capacity.\n\n**Step 1:** Use the heating relation\nWith energy supplied $E$:\n$$E = mc\\Delta T$$\nSo for the same $E$ and $m$, a smaller $c$ gives a larger $\\Delta T$.\n\n**Step 2:** Interpret “rises faster”\nSame rate of heating means the same power $P$, so in the same time the same energy is supplied.\nIf oil’s temperature increases more quickly, it must require less energy per degree rise → smaller specific heat capacity.\n\n**Conclusion:** Oil has a smaller specific heat capacity than water → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Same heating rate means same power (same energy per unit time)',
      'Use $E = mc\\Delta T$',
      'Smaller $c$ gives larger temperature rise for the same energy',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-039',
    type: 'multiple_choice',
    question:
      'It takes 8 minutes to raise the temperature of 2 kg of a liquid by $40^{\\circ}\\text{C}$ using a 2.5 kW heater. How long would it take to raise the temperature of 4 kg of the liquid by $20^{\\circ}\\text{C}$ using a 5.0 kW heater? (Assume no heat loss to the surroundings.)',
    options: ['2 minutes', '4 minutes', '16 minutes', '32 minutes'],
    answer: '4 minutes',
    explanation:
      '⚠️ **Key point:** For the same liquid, $t = \\frac{mc\\Delta T}{P}$, so $t \\propto \\frac{m\\Delta T}{P}$.\n\n**Step 1:** Use the ratio method\nFor the same liquid, $c$ cancels:\n$$\\frac{t_2}{t_1} = \\frac{m_2\\Delta T_2}{m_1\\Delta T_1} \\cdot \\frac{P_1}{P_2}$$\n\n**Step 2:** Substitute values\n- $t_1 = 8\\text{ min}$, $m_1 = 2\\text{ kg}$, $\\Delta T_1 = 40^{\\circ}\\text{C}$, $P_1 = 2.5\\text{ kW}$\n- $m_2 = 4\\text{ kg}$, $\\Delta T_2 = 20^{\\circ}\\text{C}$, $P_2 = 5.0\\text{ kW}$\n\nCompute:\n$$\\frac{t_2}{8} = \\frac{4\\times 20}{2\\times 40} \\cdot \\frac{2.5}{5.0} = 1 \\cdot 0.5 = 0.5$$\nSo\n$$t_2 = 4\\text{ min}$$\n\n**Conclusion:** The time required is 4 minutes → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $t = mc\\Delta T/P$ for heating with no heat loss',
      'For the same liquid, compare ratios so $c$ cancels',
      'Be careful with the power ratio: 2.5 kW vs 5.0 kW',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-040',
    type: 'multiple_choice',
    question:
      'A beaker contains 0.5 kg of water at $60^{\\circ}\\text{C}$. A cup containing 0.3 kg of water at $18^{\\circ}\\text{C}$ is poured into the beaker. When the mixture reaches the final common temperature, 200 J of heat is lost to the surroundings. Calculate the final temperature of the mixture. (Specific heat capacity of water $= 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$.)',
    options: ['35.6°C', '44.2°C', '48.5°C', '54.2°C'],
    answer: '44.2°C',
    explanation:
      '⚠️ **Key point:** Heat lost by the hot water = heat gained by the cold water + heat lost to surroundings.\n\nLet the final temperature be $\\theta$.\n\n**Step 1:** Write the energy balance\nHot water loses:\n$$Q_h = (0.5)(4200)(60-\\theta)$$\nCold water gains:\n$$Q_c = (0.3)(4200)(\\theta-18)$$\nHeat lost to surroundings: $200\\text{ J}$\nSo\n$$(0.5)(4200)(60-\\theta) = (0.3)(4200)(\\theta-18) + 200$$\n\n**Step 2:** Solve for $\\theta$\nExpand and simplify:\n$$2100(60-\\theta)=1260(\\theta-18)+200$$\n$$126000-2100\\theta=1260\\theta-22680+200$$\n$$126000+22480=3360\\theta$$\n$$148480=3360\\theta$$\n$$\\theta\\approx 44.2^{\\circ}\\text{C}$$\n\n**Conclusion:** The final temperature is $44.2^{\\circ}\\text{C}$ → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Set up: heat lost by hot water = heat gained by cold water + 200 J',
      'Use $Q = mc\\Delta T$ for each water sample',
      'Solve the linear equation for $\\theta$',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-041',
    type: 'multiple_choice',
    question:
      'The variation of electrical resistance can be used to determine temperature. Suppose a thermistor has resistances of $8.4\\ \\Omega$ and $3.6\\ \\Omega$ at the ice point and steam point respectively. Assume that the change of resistance with temperature is uniform as shown in the figure. What would be the temperature if the resistance is $5.8\\ \\Omega$?',
    options: ['42°C', '46°C', '54°C', '58°C'],
    answer: '54°C',
    explanation:
      '⚠️ **Key point:** If resistance changes uniformly with temperature, use linear interpolation between 0°C and 100°C.\n\n**Step 1:** Identify calibration values\n- At $0^{\\circ}\\text{C}$ (ice point): $R_0 = 8.4\\ \\Omega$\n- At $100^{\\circ}\\text{C}$ (steam point): $R_{100} = 3.6\\ \\Omega$\n- Measured resistance: $R = 5.8\\ \\Omega$\n\n**Step 2:** Apply linear interpolation\n$$\\frac{\\theta}{100} = \\frac{R - R_0}{R_{100} - R_0}$$\nSubstitute:\n$$\\frac{\\theta}{100} = \\frac{5.8 - 8.4}{3.6 - 8.4} = \\frac{-2.6}{-4.8} \\approx 0.542$$\nSo\n$$\\theta \\approx 54^{\\circ}\\text{C}$$\n\n**Conclusion:** The temperature is $54^{\\circ}\\text{C}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Resistance changes linearly with temperature here',
      'Use $\\theta/100 = (R - R_0)/(R_{100} - R_0)$',
      'Substitute $R_0=8.4\\Omega$, $R_{100}=3.6\\Omega$, $R=5.8\\Omega$',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-041-question.png'],
  },
  {
    id: 'thi-042',
    type: 'multiple_choice',
    question:
      'In the figure, a training pool $B$ is located next to the main pool $A$. The training pool $B$ has a smaller area and is shallower. If the pools are under the sunlight at the same time, which of the following statements about the rise in the water temperature of the two pools is correct? Assume that the initial water temperatures of the pools are the same.',
    options: [
      'The water temperature of training pool $B$ rises faster because it is shallower.',
      'The water temperature of training pool $B$ rises faster because it has a smaller surface area.',
      'The water temperature of main pool $A$ rises faster because it is deeper.',
      'The water temperature of main pool $A$ rises faster because it has a larger surface area.',
    ],
    answer: 'The water temperature of training pool $B$ rises faster because it is shallower.',
    explanation:
      '⚠️ **Key point:** For the same energy input, a smaller mass of water gives a larger temperature rise: $E = mc\\Delta T$.\n\n**Step 1:** Compare the masses of water\nPool $B$ is shallower, so it contains less water (smaller mass) than pool $A$.\n\n**Step 2:** Apply $E = mc\\Delta T$\nUnder the same sunlight exposure, the water with smaller mass will have a larger temperature rise for a given absorbed energy.\nSo the training pool $B$ warms up faster.\n\n**Conclusion:** Pool $B$ rises faster because it is shallower → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E = mc\\Delta T$',
      'Shallower pool means less mass of water',
      'Less mass leads to faster temperature rise for the same heating',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-042-question.png'],
  },
  {
    id: 'thi-043',
    type: 'multiple_choice',
    question:
      'Peter adds 50 g of milk at $20^{\\circ}\\text{C}$ to 350 g of tea at $80^{\\circ}\\text{C}$. What is the final temperature of the mixture? (Given: specific heat capacity of milk $= 3800\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$; specific heat capacity of tea $= 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$.)',
    options: ['50.0°C', '72.5°C', '73.1°C', '77.4°C'],
    answer: '73.1°C',
    explanation:
      '⚠️ **Key point:** Assuming no heat loss, heat lost by the hot tea equals heat gained by the cooler milk.\n\nLet the final temperature be $\\theta$.\n\n**Step 1:** Write the heat balance\nMilk gains:\n$$Q_m = (0.050)(3800)(\\theta - 20)$$\nTea loses:\n$$Q_t = (0.350)(4200)(80 - \\theta)$$\nSo\n$$(0.050)(3800)(\\theta - 20) = (0.350)(4200)(80 - \\theta)$$\n\n**Step 2:** Solve for $\\theta$\n$$190(\\theta - 20) = 1470(80 - \\theta)$$\n$$190\\theta - 3800 = 117600 - 1470\\theta$$\n$$1660\\theta = 121400$$\n$$\\theta \\approx 73.1^{\\circ}\\text{C}$$\n\n**Conclusion:** The final temperature is $73.1^{\\circ}\\text{C}$ → option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Assume no heat loss: heat gained = heat lost',
      'Convert grams to kilograms: 50 g = 0.050 kg, 350 g = 0.350 kg',
      'Set (0.050)(3800)(θ - 20) = (0.350)(4200)(80 - θ) and solve',
    ],
    sectionId: 'temp-heat-internal',
  },
  {
    id: 'thi-044',
    type: 'multiple_choice',
    question:
      'The graph below shows how the electrical resistance $R$ of three different circuit elements changes with temperature $\\theta$. Which of the circuit elements can be used to measure temperature?',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** A temperature sensor must have a property that changes with temperature in a predictable way.\n\n**Step 1:** Interpret the three curves\n- (1) Resistance is constant with temperature → cannot indicate temperature.\n- (2) Resistance increases with temperature → can be used to measure temperature.\n- (3) Resistance decreases with temperature → can be used to measure temperature.\n\n**Conclusion:** (2) and (3) can be used → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'A thermometer needs a physical property that varies with temperature',
      'Curve (1) is constant so it cannot show temperature changes',
      'Both increasing and decreasing trends can be calibrated as thermometers',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-044-question.png'],
  },
  {
    id: 'thi-045',
    type: 'multiple_choice',
    question:
      'Two metal blocks $X$ and $Y$ of the same mass and of initial temperatures $40^{\\circ}\\text{C}$ and $30^{\\circ}\\text{C}$ respectively are in good thermal contact as shown. The specific heat capacity of $X$ is greater than that of $Y$. Which statement is correct when a steady state is reached? (Assume no heat loss to the surroundings.)',
    options: [
      'The temperature of block $X$ is higher than that of block $Y$.',
      'Their temperatures become the same and are lower than $35^{\\circ}\\text{C}$.',
      'Their temperatures become the same and are higher than $35^{\\circ}\\text{C}$.',
      'Their temperatures become the same and are equal to $35^{\\circ}\\text{C}$.',
    ],
    answer: 'Their temperatures become the same and are higher than $35^{\\circ}\\text{C}$.',
    explanation:
      '⚠️ **Key point:** At steady state (thermal equilibrium), the two blocks must have the same final temperature, and energy is conserved.\n\nLet the final temperature be $\\theta$.\n\n**Step 1:** Use conservation of energy\nHeat lost by $X$ = heat gained by $Y$:\n$$m c_X (40-\\theta) = m c_Y (\\theta-30)$$\nCancel $m$:\n$$c_X (40-\\theta) = c_Y (\\theta-30)$$\n\n**Step 2:** Compare temperature changes\nGiven $c_X > c_Y$, for the equality to hold we must have\n$$(40-\\theta) < (\\theta-30)$$\nSo $\\theta$ is closer to $40^{\\circ}\\text{C}$ than to $30^{\\circ}\\text{C}$.\n\nTherefore $\\theta > 35^{\\circ}\\text{C}$.\n\n**Conclusion:** Their temperatures become the same and are higher than $35^{\\circ}\\text{C}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'At steady state, both blocks have the same final temperature',
      'Use: heat lost by hot block = heat gained by cold block',
      'Since $c_X > c_Y$, block $X$ changes temperature less, so the final temperature is closer to $40^{\\circ}\\text{C}$',
    ],
    sectionId: 'temp-heat-internal',
    imagePaths: ['/physics/exercises/temp-heat-internal/thi-045-question.png'],
  },
  {
    id: 'thi-046',
    type: 'multiple_choice',
    question:
      'When two objects $P$ and $Q$ are in contact, heat flows from $P$ to $Q$. $P$ must have a higher\n\n(1) temperature\n(2) internal energy\n(3) specific heat capacity',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(1) only',
    explanation:
      '⚠️ **Key point:** Heat flows from higher temperature to lower temperature.\n\n**Step 1:** Temperature\nIf heat flows from $P$ to $Q$, then $P$ must be at a higher temperature than $Q$.\n\n**Step 2:** Internal energy\nInternal energy depends on mass, material and temperature. A body can have higher temperature but lower internal energy, so no definite conclusion can be drawn.\n\n**Step 3:** Specific heat capacity\nSpecific heat capacity is a material property and does not determine the direction of heat flow.\n\n**Conclusion:** Only (1) must be higher → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Direction of heat flow is determined by temperature difference',
      'Internal energy depends on more than temperature',
      'Specific heat capacity does not decide heat flow direction',
    ],
    sectionId: 'temp-heat-internal',
  },
  // Transfer Processes 板块
  {
    id: 'tp-001',
    type: 'multiple_choice',
    question:
      'The photograph shows a hot potato wrapped by shiny aluminium foil. By what means can the foil help reducing the rate of energy lost from the potato to the surroundings?\n\n(1) conduction\n(2) convection\n(3) radiation',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** Shiny aluminium foil reduces heat loss mainly by reducing **radiation**. It does not stop conduction through the foil or convection in the surrounding air.\n\n**Step 1:** Conduction\nAluminium is a good conductor, so wrapping with aluminium foil does not reduce heat loss by conduction.\n\n**Step 2:** Convection\nAir outside the wrapped potato can still circulate and carry heat away, so convection is not reduced.\n\n**Step 3:** Radiation\nA shiny surface is a poor emitter of thermal radiation, so radiative heat loss is reduced.\n\n**Conclusion:** Only (3) is reduced → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Aluminium is a good conductor, so it is not an insulator',
      'Wrapping does not prevent air outside from moving (convection)',
      'Shiny surfaces are poor emitters of thermal radiation',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-001-question.png'],
  },
  {
    id: 'tp-002',
    type: 'multiple_choice',
    question:
      'The figure shows a vacuum flask with two glass walls. Which of the following statements are correct?\n\n(1) The surfaces $P$ and $Q$ are painted silvery to reduce heat loss.\n(2) The cork stopper reduces heat loss by conduction and convection.\n(3) The vacuum between the double glass walls reduces heat loss by radiation.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** A vacuum flask reduces heat transfer by minimizing **conduction** and **convection** (vacuum + stopper) and reducing **radiation** (shiny surfaces).\n\n**Step 1:** Statement (1)\nSilvery surfaces are poor emitters (and good reflectors) of thermal radiation, so they reduce heat loss by **radiation** → true.\n\n**Step 2:** Statement (2)\nCork is a poor conductor, so it reduces heat loss by **conduction**. The stopper also prevents air circulation at the mouth, reducing **convection** → true.\n\n**Step 3:** Statement (3)\nA vacuum prevents **conduction** and **convection**, but it does not stop **radiation** because radiation can travel through vacuum → false.\n\n**Conclusion:** Statements (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Radiation can travel through a vacuum',
      'Vacuum mainly prevents conduction and convection',
      'Silvery surfaces reduce radiation; cork reduces conduction and convection at the top',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-002-question.png'],
  },
  {
    id: 'tp-003',
    type: 'multiple_choice',
    question:
      'The diagram below shows the structure of a cake.\n\nThe ice-cream inside the cake does not melt when it is baked in an oven. Which of the following statements are possible reasons for this phenomenon?\n\n(1) The whipped egg white is a poor conductor of heat.\n(2) The whipped egg white is a good radiator of heat.\n(3) The sponge cake is a poor conductor of heat.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (3) only',
    explanation:
      '⚠️ **Key point:** The ice-cream is protected mainly because the layers contain trapped air and are **poor conductors**, so heat reaches the centre very slowly.\n\n**Step 1:** Statement (1)\nWhipped egg white contains many air pockets. Air is a poor conductor, so heat transfer by **conduction** is reduced → true.\n\n**Step 2:** Statement (2)\nA good radiator would emit/absorb thermal radiation well, which would not help prevent heat entering. Egg white is also usually a poor radiator → false.\n\n**Step 3:** Statement (3)\nSponge cake is porous and a poor conductor, so heat transfer by **conduction** from the bottom to the centre is reduced → true.\n\n**Conclusion:** Statements (1) and (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Poor conductors (with trapped air) slow down heat transfer by conduction',
      'A good radiator does not help reduce heat gain',
      'Both layers act like thermal insulation',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-003-question.png'],
  },
  {
    id: 'tp-004',
    type: 'multiple_choice',
    question:
      'The above figure shows the aluminium heat sink of an audio amplifier which is used to transfer heat away from the components inside the amplifier. Which of the following statements about the heat sink is/are correct?\n\n(1) The heat sink is made of aluminium so that it can transfer heat away faster by conduction.\n(2) The heat sink is silver in colour so that it can transfer heat away faster by radiation.\n(3) The heat sink has a fin-like design to increase the surface area so that it can transfer heat away faster by conduction to air.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(1) & (3) only',
    explanation:
      '⚠️ **Key point:** A heat sink works by (i) conducting heat away from the hot component and (ii) increasing heat transfer to air (mainly convection). Shiny (silvery) surfaces are poor emitters of radiation.\n\n**Step 1:** Statement (1)\nAluminium is a good conductor, so it helps conduct heat away from the component → true.\n\n**Step 2:** Statement (2)\nA silvery (shiny) surface radiates heat more slowly because it is a poor emitter of thermal radiation → false.\n\n**Step 3:** Statement (3)\nFins increase surface area, increasing heat transfer from the heat sink to the air → true.\n\n**Conclusion:** Statements (1) and (3) only → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Aluminium is a good conductor, so it conducts heat away quickly',
      'Shiny/silvery surfaces are poor emitters of thermal radiation',
      'Fins increase surface area and increase heat transfer to air',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-004-question.png'],
  },
  {
    id: 'tp-005',
    type: 'multiple_choice',
    question:
      'The figure below shows a solar cooker. Which of the following statements about its design is incorrect?',
    options: [
      'Board $P$ should be shiny to reflect sunlight into the cooker.',
      'Pot $Q$ should be painted in black to increase the heat absorption.',
      'Case $R$ should be made of metal to enhance heat transfer.',
      'The glass cover can reduce heat loss by convection.',
    ],
    answer: 'Case $R$ should be made of metal to enhance heat transfer.',
    explanation:
      '⚠️ **Key point:** A solar cooker should (i) increase energy input (reflection + absorption) and (ii) reduce heat loss (insulation + trapping air).\n\n**Step 1:** Option A\nA shiny board reflects sunlight into the cooker, increasing the solar energy entering the case → correct.\n\n**Step 2:** Option B\nA black surface is a good absorber of radiation, so the pot absorbs more solar energy → correct.\n\n**Step 3:** Option C\nThe case should reduce heat loss to the surroundings, so it should be an **insulator**, not a metal. A metal case increases heat loss by conduction → incorrect.\n\n**Step 4:** Option D\nThe glass cover prevents hot air from escaping and reduces convection heat loss → correct.\n\n**Conclusion:** The incorrect statement is option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Solar cooker design: maximize absorption, minimize heat loss',
      'Black surfaces absorb radiation well; shiny surfaces reflect well',
      'Insulation reduces heat loss by conduction; a cover reduces convection',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-005-question.png'],
  },
  {
    id: 'tp-006',
    type: 'multiple_choice',
    question:
      'The diagram shows an experiment that demonstrates convection taking place in water. What happens to the water to cause the convection?',
    options: [
      'The water expands and its density decreases.',
      'The water expands and its density increases.',
      'The water contracts and its density decreases.',
      'The water contracts and its density increases.',
    ],
    answer: 'The water expands and its density decreases.',
    explanation:
      '⚠️ **Key point:** Heating a fluid makes it expand, so its density decreases. The less dense (warmer) fluid rises and the denser (cooler) fluid sinks, forming a convection current.\n\n**Step 1:** Effect of heating\nWhen water is heated, it expands.\n\n**Step 2:** Density change\nMass stays the same but volume increases, so density decreases.\n\n**Step 3:** Convection current\nThe warmer, less dense water rises and is replaced by cooler, denser water, setting up convection.\n\n**Conclusion:** The water expands and its density decreases → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Heating causes expansion in liquids and gases',
      'Expansion increases volume, so density decreases',
      'Less dense fluid rises, creating convection currents',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-006-question.png'],
  },
  {
    id: 'tp-007',
    type: 'multiple_choice',
    question:
      'A metal spoon is put into a bowl of hot soup. When it is taken out of the soup, it cools by emitting',
    options: ['electrons.', 'infra-red radiation.', 'visible light.', 'ultra-violet radiation.'],
    answer: 'infra-red radiation.',
    explanation:
      '⚠️ **Key point:** All objects above absolute zero emit thermal radiation. For everyday temperatures, this radiation is mainly **infra-red**.\n\n**Step 1:** Identify the type of radiation emitted\nA warm spoon emits thermal radiation.\n\n**Step 2:** Decide the wavelength region\nAt the temperature of hot soup, the dominant thermal radiation is infra-red (not visible or ultraviolet).\n\n**Conclusion:** The spoon cools by emitting infra-red radiation → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Thermal radiation is emitted by all warm objects',
      'At ordinary temperatures, thermal radiation is mainly infra-red',
      'Visible/UV emission requires much higher temperatures',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-008',
    type: 'multiple_choice',
    question:
      'In winter, when we sit on a metal chair, we feel cold continuously. What is the reason behind?',
    options: [
      'Metal has a small specific heat capacity.',
      'Metal is a good reflector of heat.',
      'Metal is a good radiator of heat.',
      'Metal is a good conductor of heat.',
    ],
    answer: 'Metal is a good conductor of heat.',
    explanation:
      '⚠️ **Key point:** A good conductor transfers energy quickly by **conduction**, so it can draw heat away from your body continuously.\n\n**Step 1:** Heat transfer direction\nYour body is warmer than the metal chair, so heat flows from you to the chair.\n\n**Step 2:** Why it keeps feeling cold\nMetal conducts heat away quickly, so your skin keeps losing heat and you continue to feel cold.\n\n**Conclusion:** Metal is a good conductor of heat → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Heat flows from hotter body to cooler body',
      'Conduction is faster in good conductors like metals',
      'Feeling “cold” is about the rate of heat loss from your skin',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-009',
    type: 'multiple_choice',
    question:
      'Which of the followings are related to the process of convection?\n\n(1) Some birds use hot air currents to gain height.\n(2) At day time, breezes move from sea to land.\n(3) At night time, breezes move from land to sea.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** Convection happens when warmer, less dense air rises and cooler air moves in to replace it, forming a circulation.\n\n**Step 1:** (1)\nHot air currents rise. Birds can use these rising air currents to gain height → convection in air.\n\n**Step 2:** (2)\nIn daytime, land heats up faster than sea. Air above land rises, so cooler air moves from sea to land (sea breeze) → convection.\n\n**Step 3:** (3)\nAt night, the sea stays warmer than the land. Air above sea rises, so cooler air moves from land to sea (land breeze) → convection.\n\n**Conclusion:** (1), (2) and (3) are all related to convection → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convection involves warm fluid rising and cool fluid sinking',
      'Land heats up and cools down faster than sea',
      'Sea breeze (day) and land breeze (night) are convection currents',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-010',
    type: 'multiple_choice',
    question:
      'Which of the following processes does not involve the movement of molecules?',
    options: ['conduction', 'convection', 'radiation', 'diffusion'],
    answer: 'radiation',
    explanation:
      '⚠️ **Key point:** Radiation transfers energy by electromagnetic waves and can occur in a vacuum, so it does not require molecules.\n\n**Step 1:** Conduction\nConduction transfers energy through a material via particle interactions, so molecules/atoms must be present.\n\n**Step 2:** Convection\nConvection is heat transfer by the bulk movement of a fluid.\n\n**Step 3:** Diffusion\nDiffusion happens because molecules move randomly from higher concentration to lower concentration.\n\n**Step 4:** Radiation\nRadiation does not need a medium; energy can be transferred through a vacuum.\n\n**Conclusion:** Radiation → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Radiation can travel through a vacuum',
      'Convection involves bulk movement of a fluid',
      'Diffusion is due to random molecular motion',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-011',
    type: 'multiple_choice',
    question:
      'Which of the following animals is the best emitter of infra-red radiation from their bodies?',
    options: ['a white cat', 'a black dog', 'a brown horse', 'a red fox'],
    answer: 'a black dog',
    explanation:
      '⚠️ **Key point:** Dark, dull surfaces are better emitters of thermal (infra-red) radiation than light, shiny surfaces.\n\n**Step 1:** Compare colours\nBlack surfaces are the best emitters of radiation.\n\n**Step 2:** Choose the darkest surface\nAmong the options, the black dog has the darkest surface.\n\n**Conclusion:** The best emitter is a black dog → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Thermal radiation emitted by warm bodies is mainly infra-red',
      'Black/dull surfaces are better emitters than white/shiny surfaces',
      'Pick the darkest-coloured animal',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-012',
    type: 'multiple_choice',
    question:
      'Arrange the following materials from the poorest conductor to the best conductor in order.\n\n(1) air\n(2) copper\n(3) vacuum\n(4) water',
    options: [
      '(1), (3), (2), (4)',
      '(1), (3), (4), (2)',
      '(3), (1), (2), (4)',
      '(3), (1), (4), (2)',
    ],
    answer: '(3), (1), (4), (2)',
    explanation:
      '⚠️ **Key point:** Heat conduction requires particles. In general: vacuum (none) < gases (poor) < liquids (better) < metals (best).\n\n**Step 1:** Vacuum (3)\nVacuum has no particles, so it does not conduct heat → poorest.\n\n**Step 2:** Air (1)\nAir is a gas and is a poor conductor.\n\n**Step 3:** Water (4)\nWater is a liquid; it conducts better than air.\n\n**Step 4:** Copper (2)\nCopper is a metal and is an excellent conductor → best.\n\n**Conclusion:** (3), (1), (4), (2) → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Conduction needs particles, so a vacuum cannot conduct',
      'Gases are generally poor conductors',
      'Metals (e.g. copper) are excellent conductors',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-013',
    type: 'multiple_choice',
    question:
      'The radiators on motor cars are painted black. What is the reason behind?',
    options: [
      'It will not get dirty easily.',
      'Black surface is a good emitter of heat.',
      'Black surface is a good conductor of heat.',
      'Black surface is more beautiful.',
    ],
    answer: 'Black surface is a good emitter of heat.',
    explanation:
      '⚠️ **Key point:** A black, dull surface is a good emitter of thermal (infra-red) radiation, so it helps the radiator lose heat faster.\n\n**Step 1:** Identify the relevant heat transfer\nA radiator loses energy to its surroundings partly by radiation.\n\n**Step 2:** Effect of colour\nBlack surfaces are better emitters of thermal radiation than light or shiny surfaces.\n\n**Conclusion:** Radiators are painted black to emit heat more quickly → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Thermal radiation at these temperatures is mainly infra-red',
      'Black/dull surfaces are good emitters of radiation',
      'The question is about heat loss, not appearance',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-014',
    type: 'multiple_choice',
    question:
      'Which of the following is NOT an application of the poor conductor of heat?',
    options: [
      'wooden handles of frying pans',
      'fur of the animals',
      'cooling fins of the engine radiators',
      'double glazing of windows',
    ],
    answer: 'cooling fins of the engine radiators',
    explanation:
      '⚠️ **Key point:** Poor conductors are used to reduce heat transfer. Cooling fins are designed to increase heat transfer, so they must be good conductors.\n\n**Step 1:** Options A and B\nWooden handles and fur (trapping air) are poor conductors, so they reduce heat transfer → applications of poor conductors.\n\n**Step 2:** Option D\nDouble glazing traps air between glass panes, reducing heat transfer by conduction → application of poor conductors.\n\n**Step 3:** Option C\nCooling fins need to conduct heat away quickly from the engine/radiator, so they are made of good conductors (e.g. metals) → NOT an application of poor conductors.\n\n**Conclusion:** Cooling fins of engine radiators → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Poor conductors are used to reduce heat transfer',
      'Fins are meant to increase heat transfer (cool faster)',
      'Metals are used for fins because they conduct heat well',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-015',
    type: 'multiple_choice',
    question:
      'Which of the following correctly describes shiny surfaces concerning infra-red radiation?',
    options: [
      'They are good absorbers and good emitters.',
      'They are good absorbers but poor emitters.',
      'They are poor absorbers and poor emitters.',
      'They are poor absorbers but good emitters.',
    ],
    answer: 'They are poor absorbers and poor emitters.',
    explanation:
      '⚠️ **Key point:** Shiny (polished) surfaces reflect infra-red well, so they are **poor absorbers** and also **poor emitters** of thermal radiation.\n\n**Step 1:** Absorption\nA shiny surface reflects radiation, so it absorbs little.\n\n**Step 2:** Emission\nA surface that absorbs poorly also emits poorly (good absorber ↔ good emitter).\n\n**Conclusion:** Shiny surfaces are poor absorbers and poor emitters → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Shiny surfaces reflect infra-red radiation well',
      'Poor absorbers are also poor emitters',
      'Pick the option that says “poor” for both',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-016',
    type: 'multiple_choice',
    question:
      'A metal rod and a rubber rod are at the same temperature. When they are held in the hand, the metal rod "feels" colder than the rubber rod. The best explanation for this observation should be',
    options: [
      'metal has a higher melting point than rubber.',
      'metal has a lower specific heat capacity than rubber.',
      'metal is a better conductor of heat than rubber.',
      'metal is a better absorber of heat than rubber.',
    ],
    answer: 'metal is a better conductor of heat than rubber.',
    explanation:
      '⚠️ **Key point:** What you “feel” depends on the **rate of heat transfer** from your hand.\n\n**Step 1:** Heat flow direction\nYour hand is warmer than the rods, so heat flows from your hand to the rods.\n\n**Step 2:** Compare conduction\nMetal conducts heat away from your hand much faster than rubber.\n\n**Conclusion:** The metal feels colder because it is a better conductor of heat → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Feeling cold depends on how fast heat leaves your skin',
      'Metals are good conductors; rubber is a poor conductor',
      'Both rods are at the same temperature initially',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-017',
    type: 'multiple_choice',
    question:
      'Which of the following correctly describes dull surfaces concerning infra-red radiation?',
    options: [
      'They are good absorbers and good emitters.',
      'They are good absorbers but poor emitters.',
      'They are poor absorbers and poor emitters.',
      'They are poor absorbers but good emitters.',
    ],
    answer: 'They are good absorbers and good emitters.',
    explanation:
      '⚠️ **Key point:** Dull (matte) surfaces absorb infra-red well, transforms it to internal energy, and therefore also emit infra-red well.\n\n**Conclusion:** Dull surfaces are good absorbers and good emitters → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Dull surfaces are the opposite of shiny surfaces for infra-red radiation',
      'Good absorber ↔ good emitter',
      'Pick “good” for both absorber and emitter',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-018',
    type: 'multiple_choice',
    question:
      'A bowl of hot soup is placed in air. Which of the following transfer processes would carry away the energy from the soup to cool it down?\n\n(1) conduction\n(2) convection\n(3) radiation',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** In air, a hot object can lose energy by **conduction**, **convection** and **radiation**.\n\n**Step 1:** Conduction\nEnergy is conducted from the hot soup/bowl to nearby air molecules (and to the table) → (1) yes.\n\n**Step 2:** Convection\nWarm air above the soup rises and cooler air replaces it, carrying energy away → (2) yes.\n\n**Step 3:** Radiation\nThe soup/bowl emits infra-red radiation to the surroundings → (3) yes.\n\n**Conclusion:** All three processes take place → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Hot objects in air can lose energy by all three processes',
      'Convection needs a fluid (air) and happens above the soup',
      'Thermal radiation is infra-red',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-019',
    type: 'multiple_choice',
    question:
      'Which of the following substances is the best conductor of heat?',
    options: ['vacuum', 'air', 'water', 'iron'],
    answer: 'iron',
    explanation:
      '⚠️ **Key point:** Metals are good conductors of heat. A vacuum does not conduct heat at all.\n\n**Conclusion:** Iron (a metal) is the best conductor among the options → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Metals are good conductors of heat',
      'A vacuum cannot conduct heat',
      'Pick the metal among the options',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-020',
    type: 'multiple_choice',
    question:
      'Which of the following process can heat be transferred in a vacuum?\n\n(1) conduction\n(2) convection\n(3) radiation',
    options: ['(1) only', '(2) only', '(3) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** Only radiation can transfer heat through a vacuum.\n\n**Step 1:** Conduction\nConduction requires particles in contact, so it needs a medium → not possible in a vacuum.\n\n**Step 2:** Convection\nConvection requires a fluid (liquid or gas) to move → not possible in a vacuum.\n\n**Step 3:** Radiation\nRadiation is electromagnetic (infra-red) waves and can travel through vacuum → possible.\n\n**Conclusion:** Only (3) → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Conduction and convection need matter (a medium)',
      'Radiation can travel through a vacuum',
      'Thermal radiation here is mainly infra-red',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-021',
    type: 'multiple_choice',
    question:
      'The above figure shows a simple solar heater. What type of material should be used for the pipe to give the hottest water from the heater?',
    options: [
      'Plastic painted white',
      'Plastic painted black',
      'Copper painted white',
      'Copper painted black',
    ],
    answer: 'Copper painted black',
    explanation:
      '⚠️ **Key point:** To get the hottest water, the pipe should (i) absorb more solar radiation and (ii) transfer that heat efficiently to the water.\n\n**Step 1:** Choose the material (conduction to water)\nCopper is a good conductor, so heat can be transferred from the pipe to the water more effectively than plastic.\n\n**Step 2:** Choose the colour (absorption of radiation)\nA black surface is a good absorber of radiation, so it absorbs more solar energy than a white surface.\n\n**Conclusion:** Copper painted black → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Copper conducts heat better than plastic',
      'Black surfaces absorb radiation better than white surfaces',
      'You need both good absorption and good conduction to water',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-021-question.png'],
  },
  {
    id: 'tp-022',
    type: 'multiple_choice',
    question:
      'Normally, the conduction of heat through a substance depends on its state. Which of the following correctly arranges the three states from the poorest conductor to the best conductor?',
    options: ['gas liquid solid', 'solid gas liquid', 'gas solid liquid', 'liquid gas solid'],
    answer: 'gas liquid solid',
    explanation:
      '⚠️ **Key point:** Conduction is generally poorest in gases, better in liquids, and best in solids.\n\n**Step 1:** Compare the three states\n- **Gas:** particles are far apart → poor conduction.\n- **Liquid:** particles are closer → better than gas.\n- **Solid:** particles are closely packed → best conduction.\n\n**Conclusion:** gas → liquid → solid → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'In general: gas (poorest) < liquid < solid (best) for heat conduction',
      'Conduction works better when particles are closer together',
      'Pick the order from poorest to best',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-023',
    type: 'multiple_choice',
    question:
      'When a match is placed near the flame of a Bunsen burner as shown, it is found that the match does not ignite. Which of the following is the best reason?',
    options: [
      'The temperature of the flame is not high enough.',
      'Air is not a good conductor of heat.',
      'There is no convection current near the flame.',
      'There is no radiation from the flame.',
    ],
    answer: 'Air is not a good conductor of heat.',
    explanation:
      '⚠️ **Key point:** Air is a poor conductor, so heat cannot be conducted effectively across the air gap to raise the match to its ignition temperature.\n\n**Step 1:** Eliminate A\nA Bunsen burner flame is hot enough to ignite a match. The problem is that the match is not in direct contact with the hottest part of the flame.\n\n**Step 2:** Focus on conduction through air (B)\nWith an air gap, heat transfer to the match relies strongly on conduction through air, but air conducts heat very poorly, so the match does not get hot enough.\n\n**Step 3:** Eliminate C and D\nA flame produces both convection currents and thermal radiation, so it is incorrect to say there is “no convection” or “no radiation”.\n\n**Conclusion:** Air is not a good conductor of heat → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Air is a poor conductor of heat',
      '“Near” the flame means there is an air gap',
      'A flame still produces convection and radiation',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-023-question.png'],
  },
  {
    id: 'tp-024',
    type: 'multiple_choice',
    question:
      'In a hot summer day, Peter wears a white shirt and black trousers. When he stands under the sun, he feels that his feet are hotter than his back. Which of the following is the possible reason?',
    options: [
      'The white shirt emits less infra-red radiation than the black trousers.',
      'The white shirt emits more infra-red radiation than the black trousers.',
      'The white shirt absorbs less infra-red radiation than the black trousers.',
      'The white shirt absorbs more infra-red radiation than the black trousers.',
    ],
    answer: 'The white shirt absorbs less infra-red radiation than the black trousers.',
    explanation:
      '⚠️ **Key point:** A black surface is a better **absorber** of radiation than a white surface. Under sunlight, the part that absorbs more radiation becomes hotter.\n\n**Step 1:** Compare absorption\n- White surfaces are poor absorbers (good reflectors) of radiation.\n- Black surfaces are good absorbers of radiation.\n\n**Step 2:** Apply to the clothing\nThe black trousers absorb more radiation from the Sun than the white shirt, so the trousers (and the legs/feet region) heat up more.\n\n**Conclusion:** The white shirt absorbs less infra-red radiation than the black trousers → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Black surfaces are good absorbers of radiation',
      'White surfaces reflect more radiation and absorb less',
      'Under the Sun, absorption matters more than emission',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-025',
    type: 'multiple_choice',
    question:
      'In the diagram shown, a piece of metal gauze is used to keep the ice at the bottom of the test tube. The upper part of the test tube is then heated until the water boils. However, the ice still exists at the bottom. Which of the followings are the possible reasons?\n\n(1) Water is not a good conductor of heat.\n(2) Convection can hardly be set up between boiling water and ice.\n(3) The metal gauze prevents heat from conducting to the ice.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** Heating water from the top does not set up convection easily. Since water is also a poor conductor, little heat reaches the ice at the bottom.\n\n**Step 1:** Statement (1)\nWater is a poor conductor, so heat is not transferred efficiently from the hot water at the top down to the ice → true.\n\n**Step 2:** Statement (2)\nConvection requires warmer, less dense water to rise and cooler, denser water to sink. Here the hot water is already at the top and cold water is at the bottom, so the arrangement is stable and convection can hardly be set up between them → true.\n\n**Step 3:** Statement (3)\nThe metal gauze is a good conductor. It does not prevent heat conduction to the ice; it mainly holds the ice in place → false.\n\n**Conclusion:** (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Water is a poor conductor of heat',
      'Convection is hard to set up when heating from the top',
      'Metals are good conductors, so gauze does not “block” conduction',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-025-question.png'],
  },
  {
    id: 'tp-026',
    type: 'multiple_choice',
    question:
      'A vacuum can prevent heat transfer by\n\n(1) conduction\n(2) convection\n(3) radiation',
    options: ['(1) only', '(2) only', '(3) only', '(1) & (2) only'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** A vacuum contains no matter, so it prevents **conduction** and **convection**, but **radiation** can still travel through a vacuum.\n\n**Step 1:** Conduction (1)\nConduction requires particles to transfer energy by collisions. In a vacuum there are no particles → prevented.\n\n**Step 2:** Convection (2)\nConvection requires a fluid (liquid or gas) to move. A vacuum has no fluid → prevented.\n\n**Step 3:** Radiation (3)\nRadiation is electromagnetic (infra-red) waves and can travel through a vacuum → not prevented.\n\n**Conclusion:** A vacuum prevents (1) and (2) only → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Conduction and convection need matter (a medium)',
      'A vacuum contains no particles',
      'Radiation can travel through a vacuum',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-027',
    type: 'multiple_choice',
    question:
      'In a vacuum flask, the inside walls have silvery surface. The main purpose of this design is to reduce heat transfer by',
    options: ['conduction only.', 'radiation only.', 'conduction and convection only.', 'convection and radiation only.'],
    answer: 'radiation only.',
    explanation:
      '⚠️ **Key point:** Silvery (shiny) surfaces are poor emitters (and good reflectors) of infra-red radiation, so they mainly reduce heat transfer by **radiation**.\n\n**Step 1:** Identify the role of the silvery surface\nThe silvery coating affects thermal radiation, not conduction through solids or convection in fluids.\n\n**Step 2:** Apply radiation principle\nA shiny surface emits less infra-red radiation, so less energy is lost (or gained) by radiation.\n\n**Conclusion:** Heat transfer by radiation is reduced → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Silvery/shiny surfaces are poor emitters of infra-red radiation',
      'This design targets radiation, not conduction or convection',
      'Think “good reflector, poor emitter”',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-027-question.png'],
  },
  {
    id: 'tp-028',
    type: 'multiple_choice',
    question:
      'Billy wants to set up a convection current inside the water in a metal tank. Which of the following methods can achieve this?\n\n(1) Heat the water at $A$.\n(2) Cool the water at $A$.\n(3) Cool the water at $B$.',
    options: ['(1) only', '(2) only', '(3) only', '(1) & (2) only'],
    answer: '(2) only',
    explanation:
      '⚠️ **Key point:** Convection is driven by density differences: warm water (less dense) rises, and cold water (more dense) sinks. A convection current forms only when the fluid can rise/sink to set up a circulation.\n\n**Step 1:** Heat the water at $A$ (1)\nFrom the diagram, $A$ is at the top. If water at the top is heated, it becomes less dense but has nowhere to rise, so a convection current is not easily set up → false.\n\n**Step 2:** Cool the water at $A$ (2)\nCooling water at the top makes it denser, so it sinks. This downward motion forces other water to move up to replace it, forming a convection current → true.\n\n**Step 3:** Cool the water at $B$ (3)\nFrom the diagram, $B$ is at the bottom. If water at the bottom is cooled, it becomes denser but has nowhere to sink, so convection is not easily set up → false.\n\n**Conclusion:** Only (2) can achieve this → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Warm water rises; cold water sinks',
      'Heating at the top does not create an upward movement',
      'Cooling at the top makes water sink and can drive circulation',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-028-question.png'],
  },
  {
    id: 'tp-029',
    type: 'multiple_choice',
    question:
      'A beaker of water is heated by a flame placed at the bottom. Which diagram below best shows the convection currents?',
    options: [
      '/physics/exercises/transfer-processes/tp-029-option-a.png',
      '/physics/exercises/transfer-processes/tp-029-option-b.png',
      '/physics/exercises/transfer-processes/tp-029-option-c.png',
      '/physics/exercises/transfer-processes/tp-029-option-d.png',
    ],
    answer: '/physics/exercises/transfer-processes/tp-029-option-d.png',
    explanation:
      '⚠️ **Key point:** When water at the bottom is heated, it becomes less dense and rises. Cooler, denser water sinks to replace it, forming a circulation.\n\n**Step 1:** Bottom heating\nWater near the flame warms up, expands and its density decreases, so it rises.\n\n**Step 2:** Complete the convection loop\nAt the top, the warm water spreads sideways. Near the sides it cools, becomes denser and sinks, then flows back along the bottom toward the centre.\n\n**Conclusion:** The diagram that shows rising in the middle and sinking at the sides is option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Heated water becomes less dense and rises',
      'Cooler water sinks to replace rising water',
      'Convection current forms a closed loop',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-030',
    type: 'multiple_choice',
    question:
      'In a water heating system, the hot water from the heater flows to the tap through water pipes. However, heat is lost during the flowing process. Which of the following statements are correct concerning the flowing process?\n\n(1) Heat is lost through the walls of the pipes by conduction.\n(2) Heat is lost through the surrounding air by convection.\n(3) Heat is lost to the surrounding by radiation.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** A hot pipe can lose energy to the surroundings by **conduction** (through the pipe wall), **convection** (to moving air) and **radiation** (infra-red).\n\n**Step 1:** Statement (1) — conduction\nHeat is conducted from the hot water to the pipe and then through the pipe wall to the outside → true.\n\n**Step 2:** Statement (2) — convection\nThe outer surface of the pipe warms the surrounding air. Warm air rises and is replaced by cooler air, setting up convection currents that carry energy away → true.\n\n**Step 3:** Statement (3) — radiation\nAll warm objects emit thermal (infra-red) radiation, so the pipe radiates energy to the surroundings → true.\n\n**Conclusion:** (1), (2) and (3) are all correct → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Heat can travel through solids by conduction',
      'Warm air rising is convection',
      'All warm objects emit infra-red radiation',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-031',
    type: 'multiple_choice',
    question:
      'What material should be used to cover the roof of the house in order to keep the house cooler in a hot day under the Sun?',
    options: [
      'a layer of red brick',
      'a layer of dark soil',
      'a layer of black paint',
      'a layer of white paint',
    ],
    answer: 'a layer of white paint',
    explanation:
      '⚠️ **Key point:** To keep the house cooler under the Sun, the roof should absorb as little solar radiation as possible.\n\n**Step 1:** Compare absorption of colours\nDark colours (e.g. black) are good absorbers of radiation, so they heat up more.\nWhite surfaces reflect more radiation and absorb less.\n\n**Step 2:** Choose the best covering\nA white-painted roof absorbs less solar energy, so less heat is transferred into the house.\n\n**Conclusion:** Use a layer of white paint → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Black/dark surfaces absorb radiation well and heat up',
      'White surfaces reflect more radiation and absorb less',
      'Choose the roof covering that absorbs the least sunlight',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-031-question.png'],
  },
  {
    id: 'tp-032',
    type: 'multiple_choice',
    question:
      'Fibre is used to separate the roof and the ceiling. How may fibre help to prevent heat from passing through the ceiling?',
    options: [
      'Fibre allows air to pass through easily.',
      'Fibre traps air.',
      'Fibre is cold.',
      'Fibre is light in colour.',
    ],
    answer: 'Fibre traps air.',
    explanation:
      '⚠️ **Key point:** Fibre acts as an insulator mainly because it traps air, and air is a poor conductor of heat.\n\n**Step 1:** Trapped air reduces conduction\nAir conducts heat poorly, so many small air pockets reduce heat transfer by conduction through the ceiling.\n\n**Step 2:** Less air movement reduces convection\nWhen air is trapped in small spaces, it cannot circulate easily, so convection is also reduced.\n\n**Conclusion:** Fibre traps air → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Air is a poor conductor of heat',
      'Fibre insulation works by trapping air in small pockets',
      'Trapped air also reduces convection currents',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-032-question.png'],
  },
  {
    id: 'tp-033',
    type: 'multiple_choice',
    question:
      'Which of the following correctly explains the main reason for the heat to be transferred in the process of convection?',
    options: [
      'The heat is carried away by infra-red radiation.',
      'The process is achieved due to the temperature difference in a solid.',
      'The process is achieved due to the density difference in a fluid.',
      'The process is achieved due to the vibration of molecules.',
    ],
    answer: 'The process is achieved due to the density difference in a fluid.',
    explanation:
      '⚠️ **Key point:** Convection occurs in fluids because temperature differences create **density differences**. The less dense (warmer) fluid rises and the denser (cooler) fluid sinks, setting up a convection current.\n\n**Step 1:** Identify what drives the motion\nHeating usually causes expansion, which lowers density. Cooler regions are denser.\n\n**Step 2:** Link motion to heat transfer\nThe bulk movement of fluid carries internal energy from one place to another.\n\n**Conclusion:** Convection is achieved due to density differences in a fluid → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Convection happens in liquids and gases (fluids)',
      'Warm fluid is less dense and rises; cold fluid is more dense and sinks',
      'The key is density difference, not radiation or vibration',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-034',
    type: 'multiple_choice',
    question:
      'In the design of a solar heater, the panels are painted black in colour. What is the reason behind?',
    options: [
      'To make the panel become good conductor.',
      'To allow convection to take place.',
      'To improve the absorption of infra-red radiation.',
      'To improve the emission of infra-red radiation.',
    ],
    answer: 'To improve the absorption of infra-red radiation.',
    explanation:
      '⚠️ **Key point:** A black surface is a good absorber of radiation, so it absorbs more solar energy and heats up more.\n\n**Step 1:** What black colour affects\nColour mainly affects absorption/reflection of radiation, not conduction.\n\n**Step 2:** Apply to a solar heater\nA black panel absorbs more radiation energy, so more energy is available to heat the water.\n\n**Conclusion:** Black paint improves absorption of infra-red radiation → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Black surfaces are good absorbers of radiation',
      'Painting changes absorption, not the material’s conductivity',
      'A solar heater wants to absorb as much radiation as possible',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-035',
    type: 'multiple_choice',
    question:
      'Two identical metal plates, one painted with white colour and the other painted with black colour, are placed at equal distances from a radiant heater as shown. After some time, which metal plate absorbs more energy and which metal plate emits more energy?',
    options: [
      'Absorbs more: white; Emits more: white',
      'Absorbs more: white; Emits more: black',
      'Absorbs more: black; Emits more: white',
      'Absorbs more: black; Emits more: black',
    ],
    answer: 'Absorbs more: black; Emits more: black',
    explanation:
      '⚠️ **Key point:** For thermal radiation, **black/dull** surfaces are good absorbers and good emitters, while **white/shiny** surfaces are poor absorbers and poor emitters.\n\n**Step 1:** Absorption from the radiant heater\nThe black plate absorbs more radiation energy than the white plate.\n\n**Step 2:** Emission to the surroundings\nAfter heating up, the black plate also emits infra-red radiation more effectively than the white plate.\n\n**Conclusion:** The black plate absorbs more and emits more → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Black/dull surfaces are good absorbers of thermal radiation',
      'Good absorbers are also good emitters',
      'White/shiny surfaces are poor absorbers and poor emitters',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-035-question.png'],
  },
  {
    id: 'tp-036',
    type: 'multiple_choice',
    question:
      'Cynthia places a carpet on a tile floor. After a while, she stands in bare feet with one foot on the tile floor and the other on the carpet as shown. She feels that the tile floor is colder than the carpet. Which of the following best explains this phenomenon?',
    options: [
      'The tile is a better insulator of heat than the carpet.',
      'The tile is at a lower temperature than the carpet.',
      'The specific heat capacity of the tile is smaller than that of the carpet.',
      "Energy transfers from Cynthia's foot to the tile at a greater rate than that to the carpet.",
    ],
    answer: "Energy transfers from Cynthia's foot to the tile at a greater rate than that to the carpet.",
    explanation:
      "⚠️ **Key point:** What you feel depends on the **rate of heat transfer** from your skin. A good conductor draws heat away faster, making it feel colder.\n\n**Step 1:** Same temperature, different feeling\nAfter a while, both the tile and the carpet are at roughly room temperature. Feeling colder does not mean it is at a lower temperature.\n\n**Step 2:** Compare thermal conductivity\nTile is a better conductor of heat than carpet (which traps air and is a poor conductor).\n\n**Step 3:** Link to heat transfer rate\nBecause tile conducts heat away faster, energy flows from Cynthia’s foot to the tile at a greater rate than to the carpet.\n\n**Conclusion:** The tile feels colder because heat transfers to it faster → option D.",
    difficulty: 1,
    points: 10,
    hints: [
      'Feeling “cold” depends on how fast heat leaves your skin',
      'Tile is a better conductor than carpet',
      'Both surfaces can be at the same room temperature',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-036-question.png'],
  },
  {
    id: 'tp-037',
    type: 'multiple_choice',
    question:
      'Two identical scoops of ice-cream are transferred from a refrigerator into paper cup $X$ and vacuum flask $Y$ shown above. Under room temperature, the time required for the ice-cream in the containers to melt completely is $t_{\\mathrm{X}}$ and $t_{\\mathrm{Y}}$ respectively. What is the expected result and explanation ?',
    options: [
      '$t_{\\mathrm{X}}>t_{\\mathrm{Y}}$ as the vacuum flask reduces heat loss to the surroundings.',
      '$t_{\\mathrm{X}}>t_{\\mathrm{Y}}$ as the vacuum flask retains the heat.',
      '$t_{\\mathrm{Y}}>t_{\\mathrm{X}}$ as the vacuum flask keeps things cold by releasing heat into the surroundings.',
      '$t_{\\mathrm{Y}}>t_{\\mathrm{X}}$ as the vacuum flask reduces the rate of heat gain from the surroundings.',
    ],
    answer:
      '$t_{\\mathrm{Y}}>t_{\\mathrm{X}}$ as the vacuum flask reduces the rate of heat gain from the surroundings.',
    explanation:
      '⚠️ **Key point:** A vacuum flask reduces heat transfer with the surroundings, so the ice-cream gains heat more slowly and melts later.\n\n**Step 1:** Compare heat transfer rates\nThe paper cup allows more heat to enter by conduction, convection and radiation. A vacuum flask reduces these processes.\n\n**Step 2:** Link to melting time\nSlower heat gain means it takes longer for the ice-cream in $Y$ to absorb enough energy to melt.\n\n**Conclusion:** $t_{\\mathrm{Y}}>t_{\\mathrm{X}}$ because the vacuum flask reduces the rate of heat gain → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'A vacuum flask reduces heat transfer with the surroundings',
      'Less heat gain means a longer melting time',
      'Paper cups are poor at insulation compared with vacuum flasks',
    ],
    sectionId: 'transfer-processes',
    imagePaths: ['/physics/exercises/transfer-processes/tp-037-question.png'],
  },
  {
    id: 'tp-038',
    type: 'multiple_choice',
    question:
      'A driver parks his car outdoor under the sun. After parking, he switches off the engine of the car. Two hours later when he gets back into the car, he feels that the inside of the car is far hotter than outside.\n\nThe best explanation is',
    options: [
      "the car's engine is still generating heat after the engine has been switched off.",
      "the car's metal parts absorb infra-red radiation at a faster rate than the surroundings.",
      'the glass windows of the car trap infra-red radiation and a greenhouse effect results.',
      'the surrounding air is a good insulator of heat which reduces heat loss by conduction.',
    ],
    answer: 'the glass windows of the car trap infra-red radiation and a greenhouse effect results.',
    explanation:
      '⚠️ **Key point:** Sunlight can enter through the car windows, but much of the heat (mainly infra-red) is then trapped, so the inside temperature rises — this is the greenhouse effect.\n\n**Step 1:** Eliminate A\nAfter the engine is switched off, it cools down and stops providing significant heat after some time.\n\n**Step 2:** Why B is not the best\nThe metal body may get hot, but the main reason the *air inside* becomes much hotter is trapping of radiation rather than “faster absorption than the surroundings”.\n\n**Step 3:** Identify the greenhouse effect (C)\nSolar radiation enters through the glass and warms the interior. The warmed interior emits infra-red radiation, which does not escape as effectively through the glass, so heat is trapped and the inside gets hotter.\n\n**Step 4:** Eliminate D\nConduction through air is not the main mechanism here; the dominant effect is radiation trapping.\n\n**Conclusion:** The greenhouse effect due to glass windows trapping infra-red radiation → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Think “greenhouse effect” for a closed car under sunlight',
      'Sunlight enters easily through glass, but heat is trapped inside',
      'The car gets hotter even without the engine running',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'tp-039',
    type: 'multiple_choice',
    question:
      'Some icy cold liquid is kept cold inside a vacuum flask. Which statements are correct?\n\n(1) The flask’s cork stopper reduces heat gain from the surroundings.\n(2) The silver coating on the inner surface of the glass wall is a good reflector of infra-red.\n(3) The vacuum between the double glass walls reduces heat gain by radiation.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** A vacuum flask reduces heat transfer by (i) stopping **conduction & convection** with a vacuum and a stopper, and (ii) reducing **radiation** with a shiny (silver) surface.\n\n**Step 1:** Statement (1)\nCork is a poor conductor, reducing heat gain by conduction. It also limits air movement at the mouth, reducing convection → true.\n\n**Step 2:** Statement (2)\nA silver (shiny) coating is a good reflector and a poor absorber/emitter of infra-red radiation, so it reduces heat gain by radiation → true.\n\n**Step 3:** Statement (3)\nA vacuum prevents conduction and convection, but radiation can travel through a vacuum. So a vacuum does not reduce heat gain by radiation → false.\n\n**Conclusion:** (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Vacuum stops conduction and convection, not radiation',
      'Shiny/silver surfaces reflect infra-red radiation',
      'Cork reduces conduction and limits convection at the top',
    ],
    sectionId: 'transfer-processes',
  },
  {
    id: 'cos-001',
    type: 'multiple_choice',
    question:
      'Two liquids $A$ and $B$ are cooled in air. Their cooling curves are shown. If $A$ and $B$ have the same mass, which of the following statements is/are true?\n\n(1) $A$ has a higher freezing point than $B$.\n(2) $A$ has a greater specific latent heat of fusion than $B$.\n(3) Liquid $A$ has a greater specific heat capacity than liquid $B$.',
    options: ['(3) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** On a cooling curve, a horizontal segment means a change of state at the freezing point.\n\n**(1) Freezing point**\nThe temperature of the horizontal line is the freezing point. Since the plateau of $A$ is at a higher temperature than that of $B$, $A$ has a higher freezing point → (1) true.\n\n**(2) Specific latent heat of fusion**\nDuring freezing, energy removed is proportional to time: $E = Pt$. For the same mass and the same cooling power, a longer freezing plateau means more energy removed, so $L_f$ is larger (since $E = mL_f$). The plateau of $A$ lasts longer → (2) true.\n\n**(3) Specific heat capacity (liquid phase)**\nIn the liquid-cooling part, $Pt = mc\\Delta T$ so\n$$\\frac{\\Delta T}{t} = \\frac{P}{mc} \\propto \\frac{1}{c}$$\n(same $m$ and $P$). Liquid $A$ has a smaller magnitude slope, so it has a larger $c$ → (3) true.\n\n**Conclusion:** (1), (2) and (3) are all true → option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'The temperature of the horizontal part is the freezing point.',
      'For the same cooling power, a longer freezing plateau means more energy removed during freezing.',
      'With the same mass and power, a smaller magnitude slope implies a larger specific heat capacity.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-001-question.png'],
  },
  {
    id: 'cos-002',
    type: 'multiple_choice',
    question:
      'A liquid placed inside an insulated vessel is kept boiling by a heating coil immersed in it. When the power supplied to the coil is $42\\ \\text{W}$, the liquid boils away at a rate of $10^{-4}\\ \\text{kg s}^{-1}$. What is the specific latent heat of vaporization of the liquid?',
    options: [
      '$42 \\times 10^{3}\\ \\text{J kg}^{-1}$',
      '$21 \\times 10^{4}\\ \\text{J kg}^{-1}$',
      '$42 \\times 10^{4}\\ \\text{J kg}^{-1}$',
      '$21 \\times 10^{5}\\ \\text{J kg}^{-1}$',
    ],
    answer: '$42 \\times 10^{4}\\ \\text{J kg}^{-1}$',
    explanation:
      '⚠️ **Key point:** Since the vessel is insulated and the liquid is boiling, the supplied energy goes into latent heat of vaporization.\n\n**Step 1:** Relate power to latent heat\nLatent heat: $E = mL_v$.\nPower: $P = \\frac{E}{t} = \\frac{m}{t}L_v$.\n\n**Step 2:** Substitute values\nGiven $P = 42\\ \\text{J s}^{-1}$ and $\\frac{m}{t} = 10^{-4}\\ \\text{kg s}^{-1}$,\n$$L_v = \\frac{P}{m/t} = \\frac{42}{10^{-4}} = 42 \\times 10^{4}\\ \\text{J kg}^{-1}.$$\n\n**Conclusion:** $L_v = 42 \\times 10^{4}\\ \\text{J kg}^{-1}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'At boiling, energy goes into latent heat: $E = mL_v$.',
      'Use $P = E/t = (m/t)L_v$.',
      'So $L_v = P\\, /\\,(m/t)$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-003',
    type: 'multiple_choice',
    question:
      '0.10 g of steam at $100^{\\circ}\\text{C}$ is mixed with 0.10 g of ice at $0^{\\circ}\\text{C}$. No heat is lost to the surroundings. Which of the following describes the final mixture?\n\nGiven:\n- Specific heat capacity of water, $c = 4.2\\ \\text{kJ kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n- Specific latent heat of fusion of ice, $L_f = 336\\ \\text{kJ kg}^{-1}$\n- Specific latent heat of vaporization of steam, $L_v = 2260\\ \\text{kJ kg}^{-1}$',
    options: [
      'A mixture of water and steam at $100^{\\circ}\\text{C}$',
      'Water at $0^{\\circ}\\text{C}$',
      'Water at $50^{\\circ}\\text{C}$',
      'Water at $100^{\\circ}\\text{C}$',
    ],
    answer: 'A mixture of water and steam at $100^{\\circ}\\text{C}$',
    explanation:
      '⚠️ **Key point:** In an insulated system, heat released by steam condensing equals heat absorbed by ice melting and warming.\n\nLet $m = 0.10\\text{ g} = 1.0\\times 10^{-4}\\ \\text{kg}$.\n\n**Step 1: Heat needed to turn the ice (0°C) into water at 100°C**\nMelt ice:\n$$Q_1 = mL_f = (1.0\\times 10^{-4})(336\\times 10^{3}) = 33.6\\ \\text{J}$$\nHeat the melted water from 0°C to 100°C:\n$$Q_2 = mc\\Delta T = (1.0\\times 10^{-4})(4.2\\times 10^{3})(100) = 42\\ \\text{J}$$\nTotal required:\n$$Q_{\\text{need}} = Q_1 + Q_2 = 75.6\\ \\text{J}$$\n\n**Step 2: Compare with heat released if all the steam condenses**\n$$Q_{\\text{steam}} = mL_v = (1.0\\times 10^{-4})(2260\\times 10^{3}) = 226\\ \\text{J}$$\nSince $Q_{\\text{steam}} > Q_{\\text{need}}$, not all steam needs to condense to melt the ice and heat it to $100^{\\circ}\\text{C}$.\n\n**Step 3: Final state**\nAfter the ice becomes water and reaches $100^{\\circ}\\text{C}$, any remaining steam can coexist with water at $100^{\\circ}\\text{C}$ (a mixture at the boiling point).\n\n**Conclusion:** The final mixture is water + steam at $100^{\\circ}\\text{C}$ → option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Convert 0.10 g to kg before using the given constants.',
      'Energy needed: melt ice ($mL_f$) + heat water to 100°C ($mc\\Delta T$).',
      'Energy supplied comes from steam condensing: $mL_v$. Compare the two.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-004',
    type: 'multiple_choice',
    question:
      'A solid substance of mass $2\\ \\text{kg}$ and specific heat capacity $1000\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$ is heated uniformly by a constant heat source. The temperature–time graph of the substance is shown. Assuming that no heat is lost, find from the graph the specific latent heat of fusion of the substance.',
    options: [
      '$1000\\ \\text{J kg}^{-1}$',
      '$20000\\ \\text{J kg}^{-1}$',
      '$30000\\ \\text{J kg}^{-1}$',
      '$50000\\ \\text{J kg}^{-1}$',
    ],
    answer: '$50000\\ \\text{J kg}^{-1}$',
    explanation:
      '⚠️ **Key point:** With constant power $P$, energy supplied in a time interval is $E = Pt$.\n\nFrom the graph:\n- Time for melting plateau: $t_1 = 100\\ \\text{s}$\n- Time for heating the solid from $20^{\\circ}\\text{C}$ to $70^{\\circ}\\text{C}$: $t_2 = 100\\ \\text{s}$\n\n**Step 1: Write energies for the two intervals**\nMelting (at constant temperature):\n$$Pt_1 = mL_f$$\nHeating (temperature rise):\n$$Pt_2 = mc\\Delta T$$\n\n**Step 2: Use $t_1 = t_2$ (same power)**\nSince $P$ is constant and $t_1 = t_2$, the energies are equal:\n$$mL_f = mc\\Delta T$$\nSo\n$$L_f = c\\Delta T.$$\n\n**Step 3: Substitute values**\n$$\\Delta T = 70 - 20 = 50^{\\circ}\\text{C}$$\n$$L_f = (1000)(50) = 5.0\\times 10^{4}\\ \\text{J kg}^{-1}.$$\n\n**Conclusion:** $L_f = 50000\\ \\text{J kg}^{-1}$ → option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'For a constant heater, energy supplied is proportional to time: $E = Pt$.',
      'Plateau time gives energy for melting: $Pt = mL_f$.',
      'A rising segment gives $Pt = mc\\Delta T$. Compare two equal time intervals on the graph.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-004-question.png'],
  },
  {
    id: 'cos-005',
    type: 'multiple_choice',
    question:
      'The following data shows the thermal properties of four substances $P$, $Q$, $R$ and $S$:\n\n- Melting point (K): $P=40$, $Q=98$, $R=114$, $S=270$\n- Boiling point (K): $P=280$, $Q=880$, $R=180$, $S=370$\n- Average specific heat capacity (J kg$^{-1}$ $^{\\circ}$C$^{-1}$): $P=800$, $Q=1200$, $R=226$, $S=40$\n- Specific latent heat of fusion (J kg$^{-1}$): $P=2\\times 10^{4}$, $Q=11\\times 10^{4}$, $R=5\\times 10^{4}$, $S=33\\times 10^{4}$\n- Specific latent heat of vaporization (J kg$^{-1}$): $P=30\\times 10^{4}$, $Q=34\\times 10^{4}$, $R=40\\times 10^{4}$, $S=230\\times 10^{4}$\n\nWhen the temperature of each substance is increased from $250\\ \\text{K}$ to $400\\ \\text{K}$, which one will absorb the greatest amount of energy?',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'S',
    explanation:
      '⚠️ **Key point:** Energy absorbed includes sensible heat $mc\\Delta T$ plus latent heat when crossing melting/boiling points.\n\nConsider energy per unit mass (since all substances are compared over the same temperature change).\n\n**P:** 250 K → 280 K (liquid warming) + vaporization at 280 K + 280 K → 400 K (gas warming)\n$$E_P = c(30+120) + L_v = 800(150) + 30\\times 10^{4} = 4.2\\times 10^{5}\\ \\text{J kg}^{-1}$$\n\n**Q:** 250 K → 400 K (no phase change)\n$$E_Q = c(150) = 1200(150) = 1.8\\times 10^{5}\\ \\text{J kg}^{-1}$$\n\n**R:** 250 K → 400 K (no phase change)\n$$E_R = c(150) = 226(150) = 3.39\\times 10^{4}\\ \\text{J kg}^{-1}$$\n\n**S:** 250 K → 270 K (solid warming) + fusion at 270 K + 270 K → 370 K (liquid warming) + vaporization at 370 K + 370 K → 400 K (gas warming)\n$$E_S = c(20+100+30) + L_f + L_v = 40(150) + 33\\times 10^{4} + 230\\times 10^{4} = 2.636\\times 10^{6}\\ \\text{J kg}^{-1}$$\n\n**Conclusion:** $S$ absorbs the greatest amount of energy because it undergoes both fusion and vaporization, and has very large latent heats → option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Decide the state at 250 K using melting/boiling points.',
      'Add latent heat if the temperature range crosses a melting or boiling point.',
      'For temperature changes, use $\\Delta T$ in K (same as in °C): $E = mc\\Delta T$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-006',
    type: 'multiple_choice',
    question:
      'It is given that:\n- Specific latent heat of fusion of ice, $L_f = 3.3\\times 10^{5}\\ \\text{J kg}^{-1}$\n- Specific latent heat of vaporization of water, $L_v = 2.3\\times 10^{6}\\ \\text{J kg}^{-1}$\n\nIf $1\\ \\text{kg}$ of ice at $0^{\\circ}\\text{C}$ and $1\\ \\text{kg}$ of steam at $100^{\\circ}\\text{C}$ are mixed in a well-insulated vessel, the result will be',
    options: [
      'a mixture of ice and ice-cold water',
      'a mixture of steam and boiling water',
      'water at $0^{\\circ}\\text{C}$',
      'water at $50^{\\circ}\\text{C}$',
    ],
    answer: 'a mixture of steam and boiling water',
    explanation:
      '⚠️ **Key point:** In an insulated system, heat released by steam condensing is used to melt the ice and warm it.\n\nLet $m = 1\\ \\text{kg}$.\n\n**Step 1: Heat needed to melt ice and raise it to $100^{\\circ}\\text{C}$**\nMelt ice:\n$$Q_1 = mL_f = (1)(3.3\\times 10^{5}) = 3.3\\times 10^{5}\\ \\text{J}$$\nHeat the melted water from $0^{\\circ}\\text{C}$ to $100^{\\circ}\\text{C}$ (using $c\\approx 4.2\\times 10^{3}\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$ for water):\n$$Q_2 = mc\\Delta T = (1)(4.2\\times 10^{3})(100) = 4.2\\times 10^{5}\\ \\text{J}$$\nSo\n$$Q_{\\text{need}} = Q_1 + Q_2 = 7.5\\times 10^{5}\\ \\text{J}.$$\n\n**Step 2: Heat released if all $1\\ \\text{kg}$ steam condenses**\n$$Q_{\\text{steam}} = mL_v = (1)(2.3\\times 10^{6}) = 2.3\\times 10^{6}\\ \\text{J}.$$ \nSince $Q_{\\text{steam}} > Q_{\\text{need}}$, only part of the steam needs to condense. Therefore some steam remains.\n\n**Conclusion:** The final state is a mixture of steam and water at the boiling point ($100^{\\circ}\\text{C}$) → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Energy released by condensing steam: $Q = mL_v$.',
      'Energy absorbed by ice: melt ($mL_f$) + warm water to $100^{\\circ}\\text{C}$ ($mc\\Delta T$).',
      'If steam can provide more energy than needed, some steam remains → mixture at $100^{\\circ}\\text{C}$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-007',
    type: 'multiple_choice',
    question:
      'A cooling curve for liquid naphthalene is shown. From the graph, which of the following statement(s) is/are true?\n\n(1) The melting point of naphthalene is around $70^{\\circ}\\text{C}$.\n(2) In the period $BC$, only liquid naphthalene is present.\n(3) In the period $BC$, no energy is given by naphthalene to the surroundings.',
    options: ['(1) only', '(1) & (2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '⚠️ **Key point:** During solidification, temperature stays (approximately) constant at the melting point while latent heat is released.\n\n**(1)** The flat (constant-temperature) part of the cooling curve is around $70^{\\circ}\\text{C}$, so the melting/freezing point is about $70^{\\circ}\\text{C}$ → true.\n\n**(2)** In period $BC$, the substance is changing state (solidifying), so both **liquid and solid** naphthalene are present → false.\n\n**(3)** Even though the temperature is constant in $BC$, naphthalene is releasing latent heat to the surroundings during solidification → false.\n\n**Conclusion:** (1) only is correct → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'A horizontal segment indicates a change of state at the melting/freezing point.',
      'During freezing, both solid and liquid coexist.',
      'Latent heat is released to the surroundings even if temperature stays constant.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-007-question.png'],
  },
  {
    id: 'cos-008',
    type: 'multiple_choice',
    question:
      'If an immersion heater takes $10\\ \\text{min}$ to bring a cup of water to its boiling point $100^{\\circ}\\text{C}$ from room temperature $20^{\\circ}\\text{C}$, what will be the time taken for the boiling water to vaporize completely?\n\n(Specific heat capacity of water $c = 4.2\\ \\text{kJ kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$; specific latent heat of vaporization $L_v = 2268\\ \\text{kJ kg}^{-1}$.)',
    options: ['33.75 minutes', '54.00 minutes', '67.50 minutes', '75.40 minutes'],
    answer: '67.50 minutes',
    explanation:
      '⚠️ **Key point:** With the same heater power $P$ and the same mass $m$, time is proportional to the energy required.\n\nHeating from $20^{\\circ}\\text{C}$ to $100^{\\circ}\\text{C}$:\n$$Pt_1 = mc\\Delta T$$\nBoiling to vaporize completely:\n$$Pt_2 = mL_v$$\n\nDivide the equations:\n$$\\frac{t_2}{t_1} = \\frac{L_v}{c\\Delta T}$$\nSo\n$$t_2 = t_1\\,\\frac{L_v}{c\\Delta T} = 10\\,\\frac{2268}{4.2\\times (100-20)}\\ \\text{min} = 67.5\\ \\text{min}.$$\n\n**Conclusion:** The time is $67.50$ minutes → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Same heater power means time ∝ energy required.',
      'Use $mc\\Delta T$ for heating and $mL_v$ for boiling.',
      'Mass cancels when taking the ratio.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-009',
    type: 'multiple_choice',
    question:
      'Heat is needed to keep water boiling because energy is required to\n\n(1) increase the potential energy of the water molecules.\n(2) increase the kinetic energy of the water molecules.\n(3) increase the average speed of the water molecules.',
    options: ['(1) only', '(1) & (2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '⚠️ **Key point:** At the boiling point, temperature stays constant while supplied energy becomes latent heat.\n\n**(1)** During boiling, energy is used to overcome intermolecular attractions and separate molecules (increase molecular potential energy) → true.\n\n**(2)** Temperature is constant during boiling, so the average kinetic energy of molecules does not increase → false.\n\n**(3)** Since average kinetic energy is unchanged, the average molecular speed (which depends on kinetic energy) does not increase → false.\n\n**Conclusion:** (1) only is correct → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Boiling happens at constant temperature (for a pure substance at fixed pressure).',
      'Latent heat changes potential energy, not average kinetic energy.',
      'Average molecular speed depends on kinetic energy (temperature).',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-010',
    type: 'multiple_choice',
    question:
      'The graph shows the cooling curve of liquid naphthalene. In which region has naphthalene completely solidified?',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'S',
    explanation:
      '⚠️ **Key point:** After the horizontal plateau (solidification) ends, the substance is fully solid.\n\n- Region $P$: liquid cooling; may approach the freezing point.\n- Region $Q$: temperature stays constant at the freezing point → liquid and solid coexist (solidification in progress).\n- Region $R$: solidification finishes by the end of this region.\n- Region $S$: after solidification is complete, only solid remains and its temperature continues to drop.\n\n**Conclusion:** Naphthalene is completely solidified in region $S$ → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'The flat part of the curve corresponds to solidification (liquid + solid).',
      'Fully solid means after the plateau has ended.',
      'Look for the region after solidification is complete.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-010-question.png'],
  },
  {
    id: 'cos-011',
    type: 'multiple_choice',
    question:
      'Arrange the following in ascending order.\n\n$E_1$: Energy required to melt $1\\ \\text{kg}$ of ice at $0^{\\circ}\\text{C}$\n\n$E_2$: Energy required to raise the temperature of $1\\ \\text{kg}$ of copper by $1^{\\circ}\\text{C}$\n\n$E_3$: Energy required to vaporize $1\\ \\text{kg}$ of water at $100^{\\circ}\\text{C}$\n\n$E_4$: Energy required to raise the temperature of $1\\ \\text{kg}$ of water by $1^{\\circ}\\text{C}$',
    options: [
      '$E_2 < E_4 < E_1 < E_3$',
      '$E_2 < E_4 < E_3 < E_1$',
      '$E_3 < E_1 < E_4 < E_2$',
      '$E_4 < E_2 < E_3 < E_1$',
    ],
    answer: '$E_2 < E_4 < E_1 < E_3$',
    explanation:
      '⚠️ **Key point:** For $1\\ \\text{kg}$, raising temperature by $1^{\\circ}\\text{C}$ needs $E = mc\\Delta T = c$ (in J), while phase changes need $E = mL$.\n\n- $E_2 = c_{\\text{copper}} \\times 1^{\\circ}\\text{C}$, and $c_{\\text{copper}}$ is smaller than $c_{\\text{water}}$.\n- $E_4 = c_{\\text{water}} \\times 1^{\\circ}\\text{C}$.\n- $E_1 = L_f$ (melting ice), which is much larger than specific heat capacities.\n- $E_3 = L_v$ (vaporizing water), and typically $L_v > L_f$.\n\nTherefore:\n$$E_2 < E_4 < E_1 < E_3.$$\n\n**Conclusion:** Option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E = mc\\Delta T$ for temperature change and $E = mL$ for phase change.',
      'For $1\\ \\text{kg}$ and $1^{\\circ}\\text{C}$ rise, $E$ equals the specific heat capacity $c$.',
      'Compare $c_{\\text{copper}}$, $c_{\\text{water}}$, $L_f$ and $L_v$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-018',
    type: 'multiple_choice',
    question:
      'The apparatus shown is used to find the specific latent heat of fusion of ice. Which of the following is an essential precaution to ensure an accurate result?',
    options: [
      'Crushed ice should be used.',
      'The ice used should be just taken from the refrigerator so that its temperature is well below $0^{\\circ}\\text{C}$.',
      'The amount of ice used in funnel $X$ should be larger than that in $Y$.',
      'The two funnels should be wrapped in insulating material.',
    ],
    answer: 'Crushed ice should be used.',
    explanation:
      '⚠️ **Key point:** To measure $L_f$ accurately, the electrical energy supplied should be used as fully as possible for melting at $0^{\\circ}\\text{C}$.\n\n**A** Crushed ice has a larger contact area, so it makes good thermal contact with the heater and helps ensure the heater’s energy goes into melting the ice → correct.\n\n**B** Ice well below $0^{\\circ}\\text{C}$ requires extra energy to warm it up to $0^{\\circ}\\text{C}$ before melting, which would affect the calculation → not a precaution for accurate $L_f$.\n\n**C** For a fair comparison between funnels $X$ and $Y$ (control), the masses should be the same, not different → wrong.\n\n**D** Funnel $Y$ acts as the control to account for heat gained from the surroundings; wrapping both funnels would reduce that effect and defeats the purpose of the control → not essential.\n\n**Conclusion:** Use crushed ice → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Latent heat of fusion is defined at the melting point (about $0^{\\circ}\\text{C}$ for ice).',
      'Avoid extra energy being used to warm ice below $0^{\\circ}\\text{C}$.',
      'Crushed ice improves contact with the heater.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-018-question.png'],
  },
  {
    id: 'cos-019',
    type: 'multiple_choice',
    question:
      'Which of the following substances is a liquid at room temperature (about $20^{\\circ}\\text{C}$)?\n\n- $P$: melting point $25^{\\circ}\\text{C}$, boiling point $444^{\\circ}\\text{C}$\n- $Q$: melting point $-39^{\\circ}\\text{C}$, boiling point $357^{\\circ}\\text{C}$\n- $R$: melting point $44^{\\circ}\\text{C}$, boiling point $280^{\\circ}\\text{C}$\n- $S$: melting point $-218^{\\circ}\\text{C}$, boiling point $-183^{\\circ}\\text{C}$',
    options: ['P', 'Q', 'R', 'S'],
    answer: 'Q',
    explanation:
      '⚠️ **Key point:** A substance is liquid when the temperature is between its melting point and boiling point.\n\nAt $20^{\\circ}\\text{C}$:\n- $P$: $20^{\\circ}\\text{C}$ is below its melting point ($25^{\\circ}\\text{C}$) → solid.\n- $Q$: $-39^{\\circ}\\text{C} < 20^{\\circ}\\text{C} < 357^{\\circ}\\text{C}$ → liquid.\n- $R$: $20^{\\circ}\\text{C}$ is below its melting point ($44^{\\circ}\\text{C}$) → solid.\n- $S$: $20^{\\circ}\\text{C}$ is above its boiling point ($-183^{\\circ}\\text{C}$) → gas.\n\n**Conclusion:** $Q$ is a liquid at room temperature → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Compare $20^{\\circ}\\text{C}$ with the melting and boiling points.',
      'Liquid state occurs when melting point < temperature < boiling point.',
      'If temperature is above boiling point, the substance is a gas.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-020',
    type: 'multiple_choice',
    question:
      'The melting point of copper is $1080^{\\circ}\\text{C}$ and its specific latent heat of fusion is $2.1\\times 10^{5}\\ \\text{J kg}^{-1}$. How much energy is needed to melt $0.5\\ \\text{kg}$ of copper at its melting point?',
    options: [
      '$2.1\\times 10^{5} / 0.5\\ \\text{J}$',
      '$0.5 \\times 2.1\\times 10^{5}\\ \\text{J}$',
      '$2.1\\times 10^{5} /(0.5 \\times 1080)\\ \\text{J}$',
      '$0.5 \\times 2.1\\times 10^{5} / 1080\\ \\text{J}$',
    ],
    answer: '$0.5 \\times 2.1\\times 10^{5}\\ \\text{J}$',
    explanation:
      '⚠️ **Key point:** Melting at the melting point requires latent heat only: $E = mL_f$.\n\nGiven $m = 0.5\\ \\text{kg}$ and $L_f = 2.1\\times 10^{5}\\ \\text{J kg}^{-1}$,\n$$E = (0.5)(2.1\\times 10^{5})\\ \\text{J}.$$\n\n**Conclusion:** $0.5 \\times 2.1\\times 10^{5}\\ \\text{J}$ → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'At the melting point, temperature does not change during melting.',
      'Use latent heat: $E = mL_f$.',
      'Do not divide by temperature; melting point is not used in the calculation.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-021',
    type: 'multiple_choice',
    question:
      'Two solid substances $X$ and $Y$ of equal mass are separately heated by two identical heaters. The figure shows the variation of the temperatures of the substances with time. Which of the following statements is/are correct?\n\n(1) The melting point of $X$ is higher than that of $Y$.\n(2) The specific heat capacity of $X$ is smaller than that of $Y$.\n(3) The specific latent heat of fusion of $X$ is smaller than that of $Y$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** On a heating curve, the flat part is melting (at the melting point). With the same heater power and mass, slope relates to $c$, and plateau length relates to $L_f$.\n\n**(1) Melting point**\nThe horizontal (melting) part of $X$ occurs at a lower temperature than that of $Y$, so $X$ has a *lower* melting point. Hence statement (1) is false.\n\n**(2) Specific heat capacity**\nFor the sloping (solid-heating) part, $Pt = mc\\Delta T$, so\n$$\\text{slope} = \\frac{\\Delta T}{t} = \\frac{P}{mc} \\propto \\frac{1}{c}$$\n(same $P$ and $m$). $X$ has the steeper slope, so $c_X$ is smaller than $c_Y$ → (2) true.\n\n**(3) Specific latent heat of fusion**\nDuring melting, $Pt = mL_f$. With the same $P$ and $m$, the time length of the horizontal part is proportional to $L_f$. $X$ has a shorter horizontal part, so $L_{f,X}$ is smaller → (3) true.\n\n**Conclusion:** (2) and (3) only are correct → option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'The flat part gives the melting point.',
      'For the sloping part, steeper slope means smaller $c$ (same $P$ and $m$).',
      'Longer melting plateau means larger $L_f$ (same $P$ and $m$).',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-021-question.png'],
  },
  {
    id: 'cos-022',
    type: 'multiple_choice',
    question:
      'The following apparatus is used to find the specific latent heat of vaporization of a liquid. When the liquid boils, the reading of the balance is taken. After $200\\ \\text{s}$, the reading of the balance decreases by $0.02\\ \\text{kg}$. The power output of the heater is $150\\ \\text{W}$. If $20\\%$ of the energy supplied is lost to the surroundings, find the specific latent heat of vaporization of the liquid.',
    options: [
      '$120\\ \\text{J kg}^{-1}$',
      '$480\\ \\text{J kg}^{-1}$',
      '$3.0\\times 10^{5}\\ \\text{J kg}^{-1}$',
      '$1.2\\times 10^{6}\\ \\text{J kg}^{-1}$',
    ],
    answer: '$1.2\\times 10^{6}\\ \\text{J kg}^{-1}$',
    explanation:
      '⚠️ **Key point:** Only $80\\%$ of the electrical energy goes into vaporizing the liquid.\n\nEnergy supplied by heater in $t$ seconds:\n$$E_{\\text{supplied}} = Pt = (150)(200) = 3.0\\times 10^{4}\\ \\text{J}$$\nUseful energy for vaporization:\n$$E = (1-0.20)E_{\\text{supplied}} = 0.8\\times 3.0\\times 10^{4} = 2.4\\times 10^{4}\\ \\text{J}$$\nMass vaporized: $m = 0.02\\ \\text{kg}$.\n\nUse $E = mL_v$:\n$$L_v = \\frac{E}{m} = \\frac{2.4\\times 10^{4}}{0.02} = 1.2\\times 10^{6}\\ \\text{J kg}^{-1}.$$\n\n**Conclusion:** $L_v = 1.2\\times 10^{6}\\ \\text{J kg}^{-1}$ → option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Compute total energy: $E = Pt$.',
      'Only $80\\%$ is useful due to $20\\%$ loss.',
      'Use $E = mL_v$ with the mass decrease.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-022-question.png'],
  },
  {
    id: 'cos-023',
    type: 'multiple_choice',
    question:
      'The following apparatus is used to find the specific latent heat of vaporization of a liquid. Which of the following can improve the accuracy of the experiment?\n\n(1) covering the beaker with a lid\n(2) completely immersing the heating coil in liquid\n(3) stirring the liquid throughout the experiment',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      '⚠️ **Key point:** Accuracy improves when as much heater energy as possible goes into vaporizing the liquid (reducing heat loss to air and the container).\n\n**(1)** Covering with a lid is not appropriate for this setup because the steam produced must be able to escape freely; otherwise pressure/condensation effects can spoil the measurement → false.\n\n**(2)** The heating coil should be completely immersed. If part of the coil is in air, some electrical energy heats the surrounding air instead of the liquid, increasing heat loss and reducing accuracy → true.\n\n**(3)** During boiling, the liquid is at (approximately) a uniform boiling temperature, so stirring does not significantly improve the measurement of $L_v$ → false.\n\n**Conclusion:** (2) only is correct → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'The heater should transfer energy to the liquid, not the surrounding air.',
      'At boiling, the liquid stays at the boiling point throughout.',
      'Steam must be able to escape for a valid mass-loss measurement.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-023-question.png'],
  },
  {
    id: 'cos-024',
    type: 'multiple_choice',
    question:
      'The set-up shown can be used to find the specific latent heat of fusion of ice. Which of the following is **not** an essential precaution to ensure an accurate result?',
    options: [
      'covering the funnels with lids',
      'using melting ice in the experiment',
      'inserting the immersion heater into the ice completely',
      'using the same amount of ice in both funnels',
    ],
    answer: 'covering the funnels with lids',
    explanation:
      '⚠️ **Key point:** The control funnel accounts for heat gained from the surroundings, so the key is to keep the experimental and control conditions identical (except for the heater being powered).\n\n**A** Covering the funnels with lids is not essential because the control experiment already allows you to correct for heat gained from the surroundings → not essential.\n\n**B** Using melting ice ensures the ice is at $0^{\\circ}\\text{C}$, so no extra energy is used to warm sub-zero ice before melting → essential.\n\n**C** The immersion heater should be completely inserted into the ice so the supplied energy goes into melting, not heating surrounding air → essential.\n\n**D** The two funnels must contain the same mass of ice so that the control is a fair comparison → essential.\n\n**Conclusion:** Option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'The control funnel helps correct for heat gained from the surroundings.',
      'Melting ice ensures the initial temperature is $0^{\\circ}\\text{C}$.',
      'Experimental and control setups should be identical in mass and conditions.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-024-question.png'],
  },
  {
    id: 'cos-025',
    type: 'multiple_choice',
    question:
      'A block of melting ice with mass $0.02\\ \\text{kg}$ is put into a polystyrene cup containing $0.3\\ \\text{kg}$ of water with initial temperature $20^{\\circ}\\text{C}$. After the mixture is stirred well, the ice block melts completely and the final temperature of the water becomes $14^{\\circ}\\text{C}$. Which of the following equations can be used to find the specific latent heat of fusion of ice, $L$?\n\n(Given: specific heat capacity of water $c = 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$.)',
    options: [
      '$0.3 \\times 4200 \\times 6 = 0.02 L + 0.02 \\times 4200 \\times 14$',
      '$0.3 \\times 4200 \\times 6 = 0.02 L - 0.02 \\times 4200 \\times 6$',
      '$0.3 \\times 4200 \\times 6 = 0.02 L + 0.02 \\times 4200 \\times 6$',
      '$0.3 \\times 4200 \\times 6 = (0.02 L + 0.02 \\times 4200) \\times 14$',
    ],
    answer: '$0.3 \\times 4200 \\times 6 = 0.02 L + 0.02 \\times 4200 \\times 14$',
    explanation:
      '⚠️ **Key point:** Heat lost by warm water = heat gained by ice (melting + warming the melted water to final temperature).\n\nInitial ice is melting ice, so it is at $0^{\\circ}\\text{C}$.\n\nHeat lost by water:\n$$Q_{\\text{water}} = m_w c(20-14) = (0.3)(4200)(6).$$\n\nHeat gained by ice:\n- Melting: $Q_1 = m_i L = (0.02)L$\n- Warming melted water from $0^{\\circ}\\text{C}$ to $14^{\\circ}\\text{C}$: $Q_2 = m_i c(14-0) = (0.02)(4200)(14)$\n\nSo\n$$m_w c(20-14) = m_i L + m_i c(14-0)$$\nwhich matches option A.\n\n**Conclusion:** Option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Melting ice is at $0^{\\circ}\\text{C}$.',
      'Ice gains heat to melt ($mL$) and then to warm to $14^{\\circ}\\text{C}$ ($mc\\Delta T$).',
      'Water loses heat cooling from $20^{\\circ}\\text{C}$ to $14^{\\circ}\\text{C}$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-026',
    type: 'multiple_choice',
    question:
      'The apparatus shown is used to find the specific latent heat of vaporization of a liquid. Which of the following can improve the accuracy of the experiment?',
    options: [
      'Wrapping the beaker with cotton wool',
      'Covering the beaker with a lid',
      'Stirring the liquid throughout the experiment',
      'Using shorter wires to connect the heater and the power supply',
    ],
    answer: 'Wrapping the beaker with cotton wool',
    explanation:
      '⚠️ **Key point:** To measure $L_v$ accurately, you should reduce heat loss so that more of the electrical energy supplied goes into vaporizing the liquid.\n\n**A** Wrapping the beaker with cotton wool reduces heat loss to the surroundings, so the calculated $L_v$ is closer to the true value → correct.\n\n**B** A lid would hinder the escape of steam/condensed vapor and can affect mass-loss measurements → not suitable.\n\n**C** During boiling, the liquid is at (approximately) the boiling point throughout, so stirring does not significantly improve accuracy → not necessary.\n\n**D** In this syllabus treatment, the heater power output is taken as the power delivered by the heater; changing wire length does not affect the heater’s stated output power (wire resistance is neglected) → not a relevant improvement.\n\n**Conclusion:** Option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Accuracy improves by reducing heat loss to the surroundings.',
      'Boiling happens at constant temperature, so stirring is usually unnecessary here.',
      'Steam must be able to escape for a valid mass-loss method.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-026-question.png'],
  },
  {
    id: 'cos-027',
    type: 'multiple_choice',
    question:
      'A cup of fruit juice has mass $0.2\\ \\text{kg}$ and temperature $70^{\\circ}\\text{C}$. If the specific heat capacity of the fruit juice is $4000\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$, find the **minimum** amount of ice at $0^{\\circ}\\text{C}$ that should be added to the juice in order to lower its temperature to $0^{\\circ}\\text{C}$.\n\n(Note: specific latent heat of fusion of ice $L_f = 3.34\\times 10^{5}\\ \\text{J kg}^{-1}$.)',
    options: ['0.17 kg', '0.20 kg', '0.37 kg', '0.84 kg'],
    answer: '0.17 kg',
    explanation:
      '⚠️ **Key point:** Minimum ice means the final mixture is just at $0^{\\circ}\\text{C}$, so all the heat lost by the juice is used only to melt the ice (no extra warming above $0^{\\circ}\\text{C}$).\n\nHeat lost by juice cooling from $70^{\\circ}\\text{C}$ to $0^{\\circ}\\text{C}$:\n$$Q = mc\\Delta T = (0.2)(4000)(70) = 5.6\\times 10^{4}\\ \\text{J}$$\nHeat absorbed to melt $m$ kg of ice at $0^{\\circ}\\text{C}$:\n$$Q = mL_f = m(3.34\\times 10^{5})$$\n\nEquate and solve:\n$$m = \\frac{5.6\\times 10^{4}}{3.34\\times 10^{5}} \\approx 0.17\\ \\text{kg}.$$\n\n**Conclusion:** $0.17\\ \\text{kg}$ → option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $Q = mc\\Delta T$ for the juice cooling down.',
      'Use $Q = mL_f$ for melting ice at $0^{\\circ}\\text{C}$.',
      'Minimum ice corresponds to final temperature exactly $0^{\\circ}\\text{C}$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-028',
    type: 'multiple_choice',
    question:
      'The apparatus is used to find the specific latent heat of vaporization of water $L_v$. Which of the following factors will cause the result obtained to be larger than the true value of $L_v$?\n\n(1) Some energy is lost to the surroundings.\n(2) Some steam condenses and drips back into the beaker.\n(3) Some boiling water inside the beaker splashes out of the beaker.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** The experiment typically uses $L_v = \\dfrac{E}{m}$ where $E$ is the electrical energy supplied and $m$ is the mass of water that actually vaporizes (mass loss).\n\n**(1)** If energy is lost to the surroundings, the calculated $E$ (from $Pt$) is larger than the energy actually used for vaporization. That makes $L_v = E/m$ larger than the true value → true.\n\n**(2)** If some steam condenses and drips back, the balance shows a smaller mass loss, so the measured $m$ is smaller than the actual mass vaporized. With the same $E$, $L_v = E/m$ becomes larger → true.\n\n**(3)** If boiling water splashes out, the balance reading decreases even though that lost mass was not vaporized. The measured $m$ becomes larger, so $L_v = E/m$ would be smaller than the true value → false.\n\n**Conclusion:** (1) and (2) only are correct → option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $L_v = E/m$.',
      'Energy loss makes $E$ too large for the vaporized mass.',
      'Condensation back reduces the measured mass loss.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-028-question.png'],
  },
  {
    id: 'cos-029',
    type: 'multiple_choice',
    question:
      'A melting ice block of mass $0.05\\ \\text{kg}$ is mixed with $x\\ \\text{kg}$ of water at $0^{\\circ}\\text{C}$ in a well-insulated container. If $25000\\ \\text{J}$ of energy is supplied to the mixture, the mixture becomes water at $4^{\\circ}\\text{C}$. Find $x$.\n\n(Given: specific latent heat of fusion of ice $L_f = 3.34\\times 10^{5}\\ \\text{J kg}^{-1}$, specific heat capacity of water $c = 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$.)',
    options: ['0.37 kg', '0.44 kg', '0.49 kg', '1.44 kg'],
    answer: '0.44 kg',
    explanation:
      '⚠️ **Key point:** The supplied energy first melts the ice at $0^{\\circ}\\text{C}$, then heats the resulting water from $0^{\\circ}\\text{C}$ to $4^{\\circ}\\text{C}$.\n\n**Step 1: Melt the ice**\n$$Q_1 = m_i L_f = (0.05)(3.34\\times 10^{5}) = 1.67\\times 10^{4}\\ \\text{J}$$\n\n**Step 2: Heat all the water from $0^{\\circ}\\text{C}$ to $4^{\\circ}\\text{C}$**\nAfter melting, total mass of water is $(x+0.05)$ kg.\n$$Q_2 = (x+0.05)c\\Delta T = (x+0.05)(4200)(4)$$\n\n**Step 3: Use energy conservation**\n$$25000 = Q_1 + Q_2$$\n$$25000 - 16700 = (x+0.05)(16800)$$\n$$x+0.05 \\approx 0.494 \\Rightarrow x \\approx 0.44\\ \\text{kg}$$\n\n**Conclusion:** $x \\approx 0.44\\ \\text{kg}$ → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Split the process: melt the ice first, then heat the water.',
      'After melting, the total water mass is $(x+0.05)$ kg.',
      'Use $Q = mL_f$ and $Q = mc\\Delta T$ with $25000 = Q_1 + Q_2$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-030',
    type: 'multiple_choice',
    question:
      'A cup of liquid $P$ and a cup of liquid $Q$ of equal mass are heated at the same rate. It is found that the temperature of $P$ rises faster than that of $Q$.\n\nWhich of the following deductions is/are correct?\n\n(1) $P$ has a lower specific latent heat of vaporization than $Q$.\n(2) $P$ has a lower boiling point than $Q$.\n(3) $P$ has a lower specific heat capacity than $Q$.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** While the liquid temperature is rising (no phase change), the heating relation is\n$$Pt = mc\\Delta T \\;\\Rightarrow\\; \\frac{\\Delta T}{t} = \\frac{P}{mc}.$$ \nWith the same heater power $P$ and the same mass $m$, a faster temperature rise means a larger $\\frac{\\Delta T}{t}$, so $c$ must be smaller.\n\n**(1)** Specific latent heat of vaporization only matters *during boiling* (temperature stays constant during the phase change). From the given information (only the rate of temperature rise), we cannot deduce $L_v$ → false.\n\n**(2)** Boiling point is the temperature at which boiling starts, but the rate of temperature rise (before boiling) does not determine the boiling point → false.\n\n**(3)** From $\\frac{\\Delta T}{t} = \\frac{P}{mc}$, a faster rise for $P$ implies $c_P < c_Q$ → true.\n\n**Conclusion:** (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'If the temperature is rising, the liquid is not boiling yet.',
      'Use $Pt = mc\\Delta T$ to compare rates of temperature rise.',
      'With the same $P$ and $m$, a larger slope means a smaller $c$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-031',
    type: 'multiple_choice',
    question:
      'The figure shows the cooling curve of a substance which is initially in the liquid state. The temperature of the substance remains unchanged during the period $PQ$. Which of the following statements about the substance during the period $PQ$ is/are correct?\n\n(1) The substance is not losing any energy to the surroundings.\n(2) Latent heat is absorbed by the substance.\n(3) The average potential energy of the molecules of the substance is decreasing.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** A constant-temperature section on a **cooling** curve indicates **freezing/solidification**. The substance keeps losing energy, but the energy goes into changing state (latent heat), not lowering temperature.\n\n**(1)** The substance is still cooling overall, so it must be transferring energy to the surroundings during $PQ$ → false.\n\n**(2)** During freezing, the substance **releases** latent heat to the surroundings (latent heat is not absorbed) → false.\n\n**(3)** When liquid turns to solid, molecules become more tightly bound, so the **average potential energy decreases** → true.\n\n**Conclusion:** (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'A horizontal segment on a cooling curve indicates a phase change.',
      'During freezing, latent heat is released while temperature stays constant.',
      'Potential energy decreases when molecules form a solid structure.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-031-question.png'],
  },
  {
    id: 'cos-032',
    type: 'multiple_choice',
    question:
      'A certain amount of crushed solid is heated and the variation of its temperature $T$ with time $t$ is shown. If the same heater is used to heat a **smaller** amount of the solid, which of the following graphs (dashed line) best shows the variation of the temperature of the solid?',
    options: [
      '/physics/exercises/change-of-state/cos-032-option-a.png',
      '/physics/exercises/change-of-state/cos-032-option-b.png',
      '/physics/exercises/change-of-state/cos-032-option-c.png',
      '/physics/exercises/change-of-state/cos-032-option-d.png',
    ],
    answer: '/physics/exercises/change-of-state/cos-032-option-c.png',
    explanation:
      '⚠️ **Key point:** With the same heater, power $P$ is the same. Heating in a single phase follows $Pt = mc\\Delta T$.\n\nA smaller mass $m$ means a larger rate of temperature rise:\n$$\\frac{\\Delta T}{t} = \\frac{P}{mc}$$\nso the sloping parts become **steeper**.\n\nThe melting point is a property of the material, so the **plateau temperature stays the same**. But the time to reach the melting point and the time spent melting both scale with mass (less energy needed), so both are **shorter**.\n\n**Conclusion:** Steeper rise + same melting temperature + shorter melting duration → option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Melting point does not depend on mass.',
      'Use $Pt = mc\\Delta T$: smaller $m$ gives steeper slope.',
      'Less mass means less energy for melting ($Q=mL$) → shorter plateau time.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-032-question.png'],
  },
  {
    id: 'cos-033',
    type: 'multiple_choice',
    question:
      'As shown in the figure, some liquid in a beaker is heated by a $1000\\ \\text{W}$ immersion heater. The graph shows the variation of the reading of the electronic balance with time $t$. Which of the following statements about the liquid is **incorrect**?',
    options: [
      'It starts to boil at $t=t_1$.',
      'Its temperature increases during the period $t=0$ to $t_1$.',
      'Its specific heat capacity can be estimated by $\\frac{1000 t_1}{m_2}$.',
      'Its specific latent heat of vaporization can be estimated by $\\frac{1000(t_2-t_1)}{m_2-m_1}$.',
    ],
    answer: 'Its specific heat capacity can be estimated by $\\frac{1000 t_1}{m_2}$.',
    explanation:
      '⚠️ **Key point:** Specific heat capacity requires a temperature change: $c = \\dfrac{E}{m\\Delta T}$.\n\nFrom the balance graph, the mass stays constant up to $t_1$ (no evaporation), then starts decreasing after $t_1$ (boiling and vaporizing).\n\n**A** At $t=t_1$, mass begins to decrease → liquid starts boiling → correct.\n\n**B** Before boiling ($0$ to $t_1$), the heater raises the temperature of the liquid → correct.\n\n**C** During $0$ to $t_1$, energy supplied is $E = Pt = 1000t_1$, but\n$$c = \\frac{E}{m\\Delta T} = \\frac{1000t_1}{m_2\\Delta T}$$\nso $\\Delta T$ is needed. $\\frac{1000t_1}{m_2}$ is **not** $c$ → incorrect.\n\n**D** During boiling ($t_1$ to $t_2$), temperature is (approximately) constant and energy goes into vaporization:\n$$L_v = \\frac{E}{m} = \\frac{1000(t_2-t_1)}{m_2-m_1}$$\n→ correct.\n\n**Conclusion:** Statement C is incorrect → option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Balance reading starts dropping when vaporization begins.',
      'For heating without phase change: $Pt = mc\\Delta T$.',
      'For boiling: $Pt = mL_v$.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-033-question.png'],
  },
  {
    id: 'cos-034',
    type: 'multiple_choice',
    question:
      'The set-up is used to measure $L_v$, the specific latent heat of vaporization of a liquid.\n\nThe result of the experiment is:\n- Initial reading of the balance = $1.60\\ \\text{kg}$\n- Final reading of the balance = $1.45\\ \\text{kg}$\n- Energy supplied (kWh meter) = $0.10\\ \\text{kWh}$\n\nFind the measured value of $L_v$.',
    options: [
      '$2.25\\times 10^{5}\\ \\text{J kg}^{-1}$',
      '$2.48\\times 10^{5}\\ \\text{J kg}^{-1}$',
      '$2.40\\times 10^{6}\\ \\text{J kg}^{-1}$',
      '$6.67\\times 10^{6}\\ \\text{J kg}^{-1}$',
    ],
    answer: '$2.40\\times 10^{6}\\ \\text{J kg}^{-1}$',
    explanation:
      '⚠️ **Key point:** $L_v = \\dfrac{E}{m}$ where $m$ is the mass vaporized.\n\n**Step 1: Find mass vaporized**\n$$m = 1.60 - 1.45 = 0.15\\ \\text{kg}$$\n\n**Step 2: Convert energy from kWh to J**\n$$1\\ \\text{kWh} = 3.6\\times 10^{6}\\ \\text{J}$$\nSo\n$$E = 0.10\\times 3.6\\times 10^{6} = 3.6\\times 10^{5}\\ \\text{J}$$\n\n**Step 3: Calculate $L_v$**\n$$L_v = \\frac{E}{m} = \\frac{3.6\\times 10^{5}}{0.15} = 2.4\\times 10^{6}\\ \\text{J kg}^{-1}$$\n\n**Conclusion:** $2.40\\times 10^{6}\\ \\text{J kg}^{-1}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $L_v = E/m$.',
      'Mass vaporized = initial mass − final mass.',
      'Convert kWh to J using $1\\ \\text{kWh}=3.6\\times 10^{6}\\ \\text{J}$.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-034-question.png'],
  },
  {
    id: 'cos-035',
    type: 'multiple_choice',
    question:
      'The set-up is used to measure $L_v$, the specific latent heat of vaporization of a liquid.\n\nHow will the value of $L_v$ obtained in the experiment be affected if the following measures are taken separately?\n\nI. Replacing the beaker with a polystyrene container (better insulator)\nII. Adding more liquid into the beaker until the heater is completely immersed',
    options: [
      'I decreases; II increases',
      'I decreases; II decreases',
      'I increases; II increases',
      'I increases; II decreases',
    ],
    answer: 'I decreases; II decreases',
    explanation:
      '⚠️ **Key point:** The experiment typically estimates $L_v$ using $L_v = \\dfrac{E}{m}$ where $E$ is electrical energy supplied and $m$ is the mass that vaporizes.\n\n**I** Better insulation means **less heat loss** to the surroundings. For a given mass vaporized, less supplied energy is needed, so the measured $E$ is smaller and $L_v = E/m$ decreases.\n\n**II** If the heater is fully immersed, less energy is wasted heating the surrounding air, so heat loss is reduced. Again, for the same mass vaporized, less supplied energy is needed, so the measured $L_v$ decreases.\n\n**Conclusion:** Both measures decrease the measured $L_v$ → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Reducing heat loss improves the experiment.',
      'Use $L_v = E/m$ and think about how $E$ changes when less energy is wasted.',
      'Fully immersing the heater reduces heat loss to air.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-035-question.png'],
  },
  {
    id: 'cos-036',
    type: 'multiple_choice',
    question:
      'The graph shows the variation in temperature of equal masses of two substances $P$ and $Q$ when they are separately heated by identical heaters. Which of the following deductions is correct?',
    options: [
      'The melting point of $P$ is lower than that of $Q$.',
      'The specific heat capacity of $P$ in solid state is larger than that of $Q$.',
      'The specific latent heat of fusion of $P$ is larger than that of $Q$.',
      'The energy required to raise the temperature of $P$ from room temperature to boiling point is more than that of $Q$.',
    ],
    answer: 'The specific heat capacity of $P$ in solid state is larger than that of $Q$.',
    explanation:
      '⚠️ **Key point:** With equal masses and identical heaters, the heating rate is\n$$\\frac{\\Delta T}{t} = \\frac{P}{mc} \\propto \\frac{1}{c}$$\nwithin a single phase.\n\n**A** The melting point is the temperature of the horizontal (constant-temperature) section. From the graph, $P$ melts at a higher temperature than $Q$, so $P$ does **not** have a lower melting point → false.\n\n**B** In the solid-heating section, the slope for $P$ is smaller (temperature rises more slowly), so $c_P$ is larger than $c_Q$ → true.\n\n**C** During melting, energy for fusion is $E = mL_f = Pt$. With equal $m$ and the same $P$, a shorter melting duration means smaller $L_f$. Since $P$ takes a shorter time to melt, $L_{f,P} < L_{f,Q}$ → false.\n\n**D** Energy supplied up to a given time is $E = Pt$. If $P$ reaches boiling sooner than $Q$, it has received less energy, not more → false.\n\n**Conclusion:** Option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $Pt = mc\\Delta T$ for the sloping (single-phase) parts.',
      'Slope is inversely proportional to specific heat capacity.',
      'Plateau duration relates to latent heat via $Pt = mL$.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-036-question.png'],
  },
  {
    id: 'cos-037',
    type: 'multiple_choice',
    question:
      'When Joanne gets off an air-conditioned bus in the summer, her glasses become misty. After a while, the glasses become clear again. Which of the following physical processes are involved in these phenomena?',
    options: [
      'condensation followed by evaporation',
      'condensation followed by fusion',
      'solidification followed by evaporation',
      'solidification followed by fusion',
    ],
    answer: 'condensation followed by evaporation',
    explanation:
      '⚠️ **Key point:** Warm humid air meeting a cold surface causes condensation; the droplets later disappear by evaporation.\n\nWhen Joanne steps into warm, humid outdoor air, the lenses are still cold from the air-conditioned bus. Water vapour in the air condenses into tiny liquid droplets on the cold glass, making it look misty.\n\nAs the glasses warm up, the droplets evaporate back into water vapour, so the glasses become clear again.\n\n**Conclusion:** condensation followed by evaporation → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Mist on a cold surface is tiny liquid droplets formed from water vapour.',
      'Evaporation can occur below the boiling point.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-037-question.png'],
  },
  {
    id: 'cos-038',
    type: 'multiple_choice',
    question:
      'If equal masses of boiling water and melting ice cubes are mixed, which of the following best describes the state of the mixture?\n\n(Specific heat capacity of water $c = 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$; specific latent heat of fusion of ice $L_f = 3.34\\times 10^{5}\\ \\text{J kg}^{-1}$.)',
    options: [
      'water at $0^{\\circ}\\text{C}$',
      'water at a temperature higher than $0^{\\circ}\\text{C}$',
      'a mixture of water and ice at $0^{\\circ}\\text{C}$',
      'It cannot be determined since the masses of the water and ice are not given.',
    ],
    answer: 'water at a temperature higher than $0^{\\circ}\\text{C}$',
    explanation:
      '⚠️ **Key point:** Compare the heat released by boiling water cooling down with the heat needed to melt and warm the ice.\n\nLet the equal masses be $m$.\n- Boiling water cools from $100^{\\circ}\\text{C}$ to final temperature $\\theta$: $$Q_{\\text{lost}} = mc(100-\\theta).$$\n- Melting ice at $0^{\\circ}\\text{C}$ first melts and then warms to $\\theta$: $$Q_{\\text{gain}} = mL_f + mc(\\theta-0).$$\n\nNo heat loss:\n$$mc(100-\\theta) = mL_f + mc\\theta.$$\nCancel $m$ and substitute $c=4200$, $L_f=3.34\\times 10^{5}$:\n$$4200(100-\\theta) = 3.34\\times 10^{5} + 4200\\theta.$$\nSolve:\n$$\\theta \\approx 10.2^{\\circ}\\text{C} > 0^{\\circ}\\text{C}.$$\n\nSo all the ice melts and the mixture ends as water above $0^{\\circ}\\text{C}$.\n\n**Conclusion:** water at a temperature higher than $0^{\\circ}\\text{C}$ → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Boiling water starts at $100^{\\circ}\\text{C}$; melting ice starts at $0^{\\circ}\\text{C}$.',
      'Use $Q=mc\\Delta T$ for cooling/heating and $Q=mL_f$ for melting ice.',
      'If the calculated final temperature is above $0^{\\circ}\\text{C}$, all the ice must have melted.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-039',
    type: 'multiple_choice',
    question:
      "A space shuttle is covered by 'heat shields' over its body to protect the interior from getting too hot while entering the Earth's atmosphere. Which of the following thermal properties is/are desirable for the material of the heat shields?\n\n(1) It should be a good conductor of heat.\n(2) It should have a very high melting point.\n(3) It should have high specific heat capacity.",
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      "⚠️ **Key point:** A heat shield should resist melting and reduce the temperature rise of the structure.\n\n**(1)** A good conductor would transfer heat quickly into the shuttle’s interior. A heat shield should be a **poor** conductor (good insulator) → false.\n\n**(2)** A very high melting point helps the material stay solid under extreme heating → true.\n\n**(3)** A high specific heat capacity means a given amount of absorbed energy causes a smaller temperature rise ($\\Delta T = \\dfrac{Q}{mc}$), helping keep the shield temperature lower → true.\n\n**Conclusion:** (2) and (3) only → option D.",
    difficulty: 2,
    points: 15,
    hints: [
      'A heat shield should not conduct heat quickly into the interior.',
      'High melting point prevents melting at high temperatures.',
      'High specific heat capacity reduces temperature rise for a given energy input.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-040',
    type: 'multiple_choice',
    question:
      'A substance $X$ is heated at a constant rate and its changing temperature over a time period is recorded. The data are plotted in the graph.\n\nWhich of the following statements about the substance $X$ is **incorrect**?',
    options: [
      '$X$ is in liquid state at $0^{\\circ}\\text{C}$.',
      'The boiling point of $X$ is $80^{\\circ}\\text{C}$.',
      'The specific heat capacity of $X$ in the solid state is smaller than that of $X$ in the gas state.',
      'The specific latent heat of fusion of $X$ is larger than the specific latent heat of vaporization of $X$.',
    ],
    answer:
      'The specific latent heat of fusion of $X$ is larger than the specific latent heat of vaporization of $X$.',
    explanation:
      '⚠️ **Key point:** On a heating curve with constant power, (i) sloping parts reflect specific heat capacity and (ii) plateau duration reflects latent heat.\n\n**A** $0^{\\circ}\\text{C}$ lies between the melting point and boiling point on the graph, so the substance is liquid at $0^{\\circ}\\text{C}$ → correct.\n\n**B** The higher constant-temperature section corresponds to boiling, so its temperature is the boiling point. From the graph it is $80^{\\circ}\\text{C}$ → correct.\n\n**C** For a single phase, $Pt = mc\\Delta T$, so\n$$\\frac{\\Delta T}{t} = \\frac{P}{mc} \\propto \\frac{1}{c}.$$\nThe solid section has a steeper slope than the gas section, so $c_{\\text{solid}} < c_{\\text{gas}}$ → correct.\n\n**D** During melting/boiling, $Pt = mL$. With the same $P$ and $m$, a **shorter** plateau means a **smaller** latent heat. The melting plateau is shorter than the boiling plateau, so $L_f < L_v$. Therefore “$L_f$ is larger than $L_v$” is false → incorrect.\n\n**Conclusion:** Option D is incorrect.',
    difficulty: 4,
    points: 25,
    hints: [
      'Plateau temperature gives melting/boiling point.',
      'Slope is inversely proportional to specific heat capacity.',
      'Plateau duration is proportional to latent heat for the same heater and mass.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-041',
    type: 'multiple_choice',
    question:
      'The initial temperature of a jar of juice is $80^{\\circ}\\text{C}$ and the mass of the juice is $2\\ \\text{kg}$. Susan adds ice cubes into the jar in order to cool down the juice to $20^{\\circ}\\text{C}$. What is the **minimum** number of ice cubes at $0^{\\circ}\\text{C}$ required?\n\n(Neglect the heat capacity of the jar and assume there is no heat exchange with the surroundings.)\n\nGiven:\n- Mass of each ice cube = $0.15\\ \\text{kg}$\n- Specific heat capacity of juice = $4700\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n- Specific heat capacity of water = $4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n- Specific latent heat of fusion of ice = $3.34\\times 10^{5}\\ \\text{J kg}^{-1}$',
    options: ['9', '10', '11', '12'],
    answer: '9',
    explanation:
      '⚠️ **Key point:** Heat lost by the juice = heat gained by the ice (melting + warming the melted water to $20^{\\circ}\\text{C}$).\n\n**Step 1: Heat lost by juice**\n$$Q_{\\text{juice}} = mc\\Delta T = (2)(4700)(80-20) = 5.64\\times 10^{5}\\ \\text{J}$$\n\n**Step 2: Heat gained per kg of ice (at $0^{\\circ}\\text{C}$) to become water at $20^{\\circ}\\text{C}$**\n$$Q_{\\text{ice}} = L_f + c_w(20-0) = 3.34\\times 10^{5} + (4200)(20) = 4.18\\times 10^{5}\\ \\text{J kg}^{-1}$$\n\n**Step 3: Find required ice mass**\n$$m_i = \\frac{Q_{\\text{juice}}}{Q_{\\text{ice}}} = \\frac{5.64\\times 10^{5}}{4.18\\times 10^{5}} \\approx 1.35\\ \\text{kg}$$\n\n**Step 4: Convert to number of cubes**\nEach cube has mass $0.15\\ \\text{kg}$:\n$$N = \\frac{1.35}{0.15} = 9$$\n\n**Conclusion:** Minimum number of ice cubes = $9$ → option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use heat conservation: heat lost by juice = heat gained by ice.',
      'Ice must melt ($mL_f$) and then warm to $20^{\\circ}\\text{C}$ ($mc\\Delta T$).',
      'After finding ice mass, divide by $0.15\\ \\text{kg}$ per cube.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-042',
    type: 'multiple_choice',
    question:
      'Water has a very high value of specific latent heat of vaporization. Which of the following statements can be illustrated by this fact?\n\n(1) Water is used as the coolant in car engines.\n(2) Coastal regions have milder climate compared with inland regions.\n(3) Steam at $100^{\\circ}\\text{C}$ causes more serious injury to skin than boiling water.',
    options: ['(1) only', '(2) only', '(3) only', '(1), (2) & (3)'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** A high *latent heat of vaporization* means a large amount of energy is involved in the change between liquid and gas at the same temperature.\n\n**(1)** Using water as an engine coolant mainly relies on water’s **high specific heat capacity** (it can absorb lots of energy with a small temperature rise), not latent heat of vaporization → not illustrated.\n\n**(2)** Milder coastal climate is mainly due to water’s **high specific heat capacity** (the sea warms/cools slowly), not latent heat of vaporization → not illustrated.\n\n**(3)** Steam at $100^{\\circ}\\text{C}$ releases a large amount of energy when it **condenses** to water (latent heat of vaporization). This extra energy transfer makes steam burns more severe than boiling water at the same temperature → illustrated.\n\n**Conclusion:** (3) only → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Latent heat relates to energy during a change of state at constant temperature.',
      'Cooling effect and climate moderation usually relate to high specific heat capacity.',
      'Steam can release latent heat when it condenses on skin.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-043',
    type: 'multiple_choice',
    question:
      'Which of the following statements about evaporation are correct?\n\n(1) Evaporation occurs only on the surface of the liquid.\n(2) The rate of evaporation is higher when the temperature is higher.\n(3) After evaporation, the average kinetic energy of the remaining liquid molecules will increase.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** Evaporation is a surface process that can occur below the boiling point, and it causes cooling.\n\n**(1)** Molecules escape from the liquid surface into the air, so evaporation occurs at the surface → true.\n\n**(2)** At a higher temperature, more molecules have sufficient kinetic energy to escape, so the evaporation rate increases → true.\n\n**(3)** The more energetic molecules are more likely to escape first, so the remaining liquid has a *lower* average kinetic energy (lower temperature) → false.\n\n**Conclusion:** (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Evaporation occurs at the surface, unlike boiling.',
      'Higher temperature means more energetic molecules can escape.',
      'Evaporation removes the faster molecules and cools the liquid.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-044',
    type: 'multiple_choice',
    question:
      'In an experiment, $2\\ \\text{kg}$ of water at $20^{\\circ}\\text{C}$ is heated inside a boiler for $20$ minutes. The water is heated to $100^{\\circ}\\text{C}$ and $1.7\\ \\text{kg}$ of water remains after boiling. What is the estimated power of the boiler?\n\nGiven:\n- Specific heat capacity of water $c = 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n- Specific latent heat of vaporization $L_v = 2.26\\times 10^{6}\\ \\text{J kg}^{-1}$',
    options: ['565 W', '649 W', '1125 W', '3762 W'],
    answer: '1125 W',
    explanation:
      '⚠️ **Key point:** Total energy supplied = energy to heat the water to $100^{\\circ}\\text{C}$ + energy to vaporize the mass that boils away.\n\nTime: $$t = 20\\times 60 = 1200\\ \\text{s}$$\n\nMass vaporized: $$m_{\\text{vap}} = 2.0 - 1.7 = 0.3\\ \\text{kg}$$\n\nEnergy to heat $2\\ \\text{kg}$ from $20^{\\circ}\\text{C}$ to $100^{\\circ}\\text{C}$:\n$$Q_1 = mc\\Delta T = (2)(4200)(100-20) = 6.72\\times 10^{5}\\ \\text{J}$$\n\nEnergy to vaporize $0.3\\ \\text{kg}$ at $100^{\\circ}\\text{C}$:\n$$Q_2 = m_{\\text{vap}}L_v = (0.3)(2.26\\times 10^{6}) = 6.78\\times 10^{5}\\ \\text{J}$$\n\nTotal energy: $$E = Q_1 + Q_2 = 1.35\\times 10^{6}\\ \\text{J}$$\n\nPower:\n$$P = \\frac{E}{t} = \\frac{1.35\\times 10^{6}}{1200} = 1125\\ \\text{W}$$\n\n**Conclusion:** $1125\\ \\text{W}$ → option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Total energy includes heating to $100^{\\circ}\\text{C}$ and vaporizing the boiled-away mass.',
      'Mass boiled away = initial mass − remaining mass.',
      'Use $P = E/t$ with $t = 20\\text{ min} = 1200\\text{ s}$.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-044-question.png'],
  },
  {
    id: 'cos-045',
    type: 'multiple_choice',
    question: 'Which of the following has the highest average speed of the molecules?',
    options: [
      '1 g of ice cube at $-10^{\\circ}\\text{C}$',
      '10 g of melting ice cube',
      '100 g of water at room temperature',
      '0.1 g of steam at $100^{\\circ}\\text{C}$',
    ],
    answer: '0.1 g of steam at $100^{\\circ}\\text{C}$',
    explanation:
      '⚠️ **Key point:** The average speed of molecules depends on their average kinetic energy, which depends on temperature (higher $T$ → higher average kinetic energy → higher average speed).\n\nThe mass of the sample does not affect the *average* molecular speed. Among the options, steam at $100^{\\circ}\\text{C}$ has the highest temperature, so it has the highest average molecular speed.\n\n**Conclusion:** $0.1\\ \\text{g}$ of steam at $100^{\\circ}\\text{C}$ → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Average molecular speed depends mainly on temperature.',
      'Mass of the sample does not change the average speed at a given temperature.',
      'Compare the temperatures of the states given.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-046',
    type: 'multiple_choice',
    question:
      'Which of the following statements is/are correct?\n\n(1) Energy transfers from an object with higher internal energy to an object with lower internal energy.\n(2) An object must absorb energy when it changes its state.\n(3) Energy transfers from an object with higher temperature to an object with lower temperature.',
    options: ['(2) only', '(3) only', '(1) & (2) only', '(1) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** Heat (energy transfer due to heating) flows because of a **temperature difference**, from higher temperature to lower temperature.\n\n**(1)** Internal energy depends on mass, material, temperature and state. An object can have a larger internal energy (e.g. larger mass) but a lower temperature, so heat does not necessarily transfer from higher internal energy to lower internal energy → false.\n\n**(2)** In a change of state, an object may **absorb** energy (melting, boiling) or **release** energy (freezing, condensing). So it is not always absorption → false.\n\n**(3)** With a temperature difference, energy transfers from the higher temperature object to the lower temperature object → true.\n\n**Conclusion:** (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Heat transfer is driven by temperature difference.',
      'Internal energy is not determined by temperature alone.',
      'State changes can release or absorb latent heat.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-047',
    type: 'multiple_choice',
    question:
      'In an experiment, a kilowatt-hour meter measures the energy supplied to an immersion heater and an electronic balance measures the change in mass. The data are used to estimate the specific latent heat of vaporization of water $L_v$.\n\nIf the following experimental errors arise:\n\n(I) Water splashes out of the polystyrene cup as the boiling is too vigorous.\n(II) Water vapour condenses on the upper part of the heater and drips back into the polystyrene cup.\n\nHow would the calculated value of $L_v$ be affected?',
    options: [
      'I increases; II decreases',
      'I increases; II increases',
      'I decreases; II decreases',
      'I decreases; II increases',
    ],
    answer: 'I decreases; II increases',
    explanation:
      '⚠️ **Key point:** In this method, $L_v$ is calculated using\n$$L_v = \\frac{E}{m}$$\nwhere $E$ is the electrical energy supplied and $m$ is the **measured mass loss** (interpreted as mass vaporized).\n\n**(I) Splashing out**\nSplashing makes the balance reading drop even though that lost mass was **not** vaporized. So the measured $m$ becomes larger than the true vaporized mass. Since $L_v = E/m$, a larger $m$ gives a smaller calculated $L_v$ → **decreases**.\n\n**(II) Condensation dripping back**\nIf steam condenses and drips back, the balance shows a **smaller mass loss** than the true mass vaporized. So the measured $m$ is smaller. Since $L_v = E/m$, a smaller $m$ gives a larger calculated $L_v$ → **increases**.\n\n**Conclusion:** (I) decreases; (II) increases → option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $L_v = E/m$ where $m$ is measured mass loss.',
      'Splashing increases the apparent mass loss.',
      'Condensation dripping back reduces the apparent mass loss.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-047-question.png'],
  },
  {
    id: 'cos-048',
    type: 'multiple_choice',
    question:
      'Some ice cubes at $0^{\\circ}\\text{C}$ are added to $0.3\\ \\text{kg}$ of soft drink at $20^{\\circ}\\text{C}$. What is the **minimum** amount of ice needed to cool the soft drink to $0^{\\circ}\\text{C}$?\n\nGiven:\n- Specific heat capacity of the soft drink $c = 5300\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$\n- Specific latent heat of fusion of ice $L_f = 3.34\\times 10^{5}\\ \\text{J kg}^{-1}$',
    options: ['0.08 kg', '0.10 kg', '0.26 kg', '0.32 kg'],
    answer: '0.10 kg',
    explanation:
      '⚠️ **Key point:** “Minimum ice” means the final temperature is exactly $0^{\\circ}\\text{C}$, so the ice only needs to **melt** (no warming above $0^{\\circ}\\text{C}$).\n\nHeat lost by soft drink cooling from $20^{\\circ}\\text{C}$ to $0^{\\circ}\\text{C}$:\n$$Q = mc\\Delta T = (0.3)(5300)(20) = 3.18\\times 10^{4}\\ \\text{J}$$\n\nHeat absorbed to melt $m$ kg of ice at $0^{\\circ}\\text{C}$:\n$$Q = mL_f = m(3.34\\times 10^{5})$$\n\nEquate and solve:\n$$m = \\frac{3.18\\times 10^{4}}{3.34\\times 10^{5}} \\approx 9.52\\times 10^{-2}\\ \\text{kg} \\approx 0.10\\ \\text{kg}.$$\n\n**Conclusion:** $0.10\\ \\text{kg}$ → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Minimum ice corresponds to a final temperature of $0^{\\circ}\\text{C}$.',
      'Use $Q=mc\\Delta T$ for the drink and $Q=mL_f$ for melting ice.',
      'No extra term for warming melted ice if final is $0^{\\circ}\\text{C}$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-049',
    type: 'multiple_choice',
    question:
      'When a certain mass of a solid substance is heated by a heater of constant power, the variation of its temperature with time is shown in the figure. If a **greater** mass of the same substance is heated by the same heater, which of the following graphs best represents how its temperature varies with time?\n\n(Assume no heat is lost to the surroundings.)',
    options: [
      '/physics/exercises/change-of-state/cos-049-option-a.png',
      '/physics/exercises/change-of-state/cos-049-option-b.png',
      '/physics/exercises/change-of-state/cos-049-option-c.png',
      '/physics/exercises/change-of-state/cos-049-option-d.png',
    ],
    answer: '/physics/exercises/change-of-state/cos-049-option-d.png',
    explanation:
      '⚠️ **Key point:** With the same heater power $P$, heating a larger mass requires more energy, so it takes longer.\n\nIn a single phase:\n$$Pt = mc\\Delta T \\Rightarrow t \\propto m$$\nSo for a greater mass, the temperature rises more slowly (smaller slope).\n\nAt the melting point, temperature stays constant while melting occurs. Latent heat is $Q=mL_f$, so a greater mass also takes **longer** to melt (longer plateau).\n\nTherefore the new curve has the same melting temperature, but reaches it later and has a longer horizontal section.\n\n**Conclusion:** Option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'For fixed $P$, heating time scales with mass in $Pt=mc\\Delta T$.',
      'Melting point stays the same for the same substance.',
      'More mass means longer melting plateau because $Q=mL_f$.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-049-question.png'],
  },
  {
    id: 'cos-050',
    type: 'multiple_choice',
    question:
      'Three different solids, initially at $20^{\\circ}\\text{C}$, are heated at the same power.\n\nA table of their heat capacity and melting point is given:\n- $P$: heat capacity $300\\ \\text{J}\\ {}^{\\circ}\\text{C}^{-1}$, melting point $218^{\\circ}\\text{C}$\n- $Q$: heat capacity $500\\ \\text{J}\\ {}^{\\circ}\\text{C}^{-1}$, melting point $132^{\\circ}\\text{C}$\n- $R$: heat capacity $900\\ \\text{J}\\ {}^{\\circ}\\text{C}^{-1}$, melting point $84^{\\circ}\\text{C}$\n\nWhich solid will start melting first?',
    options: ['$P$', '$Q$', '$R$', 'cannot be determined as the mass is unknown'],
    answer: '$Q$',
    explanation:
      '⚠️ **Key point:** Heat capacity $C$ (in $\\text{J}\\ {}^{\\circ}\\text{C}^{-1}$) already equals $mc$. Energy needed to reach the melting point is\n$$Q = C\\Delta T$$\nso the time required is $t = Q/P$ (same power $P$).\n\nCompute energy needed to warm each solid from $20^{\\circ}\\text{C}$ to its melting point:\n- $P$: $Q_P = 300(218-20)=300(198)=59400\\ \\text{J}$\n- $Q$: $Q_Q = 500(132-20)=500(112)=56000\\ \\text{J}$\n- $R$: $Q_R = 900(84-20)=900(64)=57600\\ \\text{J}$\n\nSmallest energy → shortest time → starts melting first.\n\n**Conclusion:** $Q$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $Q=C\\Delta T$ where $C$ is heat capacity.',
      'Same heater power means time is proportional to required energy.',
      'Heat capacity already includes the effect of mass ($C=mc$).',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-051',
    type: 'multiple_choice',
    question:
      'A paper tray contains some water. The tray is heated by a gentle flame from below as shown. The water in the tray starts to boil while the paper does not catch fire.\n\nWhich of the following statements are correct in this situation?\n\n(1) Water can transfer heat away from the paper tray very quickly.\n(2) Water remains at $100^{\\circ}\\text{C}$ when it is boiling.\n(3) There is no heat transfer between the paper tray and the flame.',
    options: ['(1) & (2) only', '(2) & (3) only', '(1) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** While water is present, it absorbs energy and keeps the paper tray close to the boiling temperature, preventing the paper from reaching its ignition temperature.\n\n**(1)** Heat conducted through the paper is quickly taken away by the water. The water absorbs energy and circulates (convection), so the paper does not get hot enough to burn → true.\n\n**(2)** During boiling at atmospheric pressure, the temperature of water stays at about $100^{\\circ}\\text{C}$ while energy is used as latent heat of vaporization → true.\n\n**(3)** Heat transfer from the flame to the paper tray is necessary to heat the water to boiling, so it is not zero → false.\n\n**Conclusion:** (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'As long as water remains, its temperature is capped at the boiling point during boiling.',
      'Water can remove heat from the paper by absorbing energy and by convection.',
      'Without heat transfer from the flame, the water would not boil.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-051-question.png'],
  },
  {
    id: 'cos-052',
    type: 'multiple_choice',
    question:
      'A beaker of water is heated by an immersion heater. The graph shows the variation of the reading of the balance with time. What is the estimated output power of the heater?\n\n(Assume no heat is lost to the surroundings.)\n\nGiven:\n- Specific latent heat of vaporization of water $L_v = 2.26\\times 10^{6}\\ \\text{J kg}^{-1}$\n- Specific heat capacity of water $c = 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$',
    options: ['175 W', '269 W', '377 W', '700 W'],
    answer: '377 W',
    explanation:
      '⚠️ **Key point:** Use the mass-loss (boiling) section of the graph: during boiling, $E = mL_v$ and $P=E/t$.\n\nFrom the graph, between $t=2\\ \\text{min}$ and $t=7\\ \\text{min}$, the mass decreases from $0.50\\ \\text{kg}$ to $0.45\\ \\text{kg}$.\nSo the mass vaporized is\n$$m = 0.50-0.45 = 0.05\\ \\text{kg}$$\nTime interval:\n$$\\Delta t = (7-2)\\times 60 = 300\\ \\text{s}$$\n\nEnergy used for vaporization:\n$$E = mL_v = (0.05)(2.26\\times 10^{6}) = 1.13\\times 10^{5}\\ \\text{J}$$\n\nPower:\n$$P = \\frac{E}{\\Delta t} = \\frac{1.13\\times 10^{5}}{300} \\approx 3.77\\times 10^{2}\\ \\text{W} = 377\\ \\text{W}$$\n\n**Conclusion:** $377\\ \\text{W}$ → option C.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the mass-loss section where water is boiling.',
      'Apply $E=mL_v$ and $P=E/t$.',
      'Convert minutes to seconds.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-052-question.png'],
  },
  {
    id: 'cos-053',
    type: 'multiple_choice',
    question:
      'People feel cooler when they get out of water after swimming. Which of the following is/are the reason(s)?\n\n(1) The water on the skin evaporates.\n(2) The water on the skin absorbs latent heat of fusion.\n(3) The water on the skin releases latent heat of vaporization to the surrounding air.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      '⚠️ **Key point:** Evaporation requires energy (latent heat of vaporization), which is taken from the skin, causing cooling.\n\n**(1)** Water on the skin evaporates. During evaporation, the liquid absorbs latent heat from the skin, lowering the skin temperature → true.\n\n**(2)** Latent heat of fusion is involved in melting/freezing, not evaporation → false.\n\n**(3)** Latent heat of vaporization is **released** when water vapour condenses, not when liquid water evaporates → false.\n\n**Conclusion:** (1) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Evaporation absorbs energy from the surroundings.',
      'Fusion is for melting/freezing, not for evaporation.',
      'Condensation releases latent heat; evaporation absorbs it.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-054',
    type: 'multiple_choice',
    question:
      'The setup is used to determine the specific latent heat of fusion of ice. At time $t=0$, $0.15\\ \\text{kg}$ of ice cubes at $0^{\\circ}\\text{C}$ are added into $1\\ \\text{kg}$ of hot water at $60^{\\circ}\\text{C}$. The graph shows the variation of the water temperature with time. At $Q$, the mixture reaches thermal equilibrium.\n\nWhat is the specific latent heat of fusion of ice estimated from this experiment?\n\n(Given: specific heat capacity of water $c = 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$.)',
    options: [
      '$3.34\\times 10^{5}\\ \\text{J kg}^{-1}$',
      '$3.92\\times 10^{5}\\ \\text{J kg}^{-1}$',
      '$4.48\\times 10^{5}\\ \\text{J kg}^{-1}$',
      '$5.60\\times 10^{5}\\ \\text{J kg}^{-1}$',
    ],
    answer: '$3.92\\times 10^{5}\\ \\text{J kg}^{-1}$',
    explanation:
      '⚠️ **Key point:** Heat lost by hot water = heat gained by ice (melting + warming the melted water to the final temperature).\n\nFrom the graph, the final equilibrium temperature at $Q$ is $40^{\\circ}\\text{C}$.\n\nHeat gained by ice:\n- Melting at $0^{\\circ}\\text{C}$: $Q_1 = m_i L_f$\n- Warming melted water from $0^{\\circ}\\text{C}$ to $40^{\\circ}\\text{C}$: $Q_2 = m_i c(40-0)$\n\nHeat lost by hot water cooling from $60^{\\circ}\\text{C}$ to $40^{\\circ}\\text{C}$:\n$$Q_3 = m_w c(60-40)$$\n\nEnergy conservation:\n$$m_i L_f + m_i c(40-0) = m_w c(60-40)$$\nSubstitute $m_i=0.15$, $m_w=1.0$, $c=4200$:\n$$(0.15)L_f + (0.15)(4200)(40) = (1)(4200)(20)$$\n$$(0.15)L_f + 25200 = 84000$$\n$$(0.15)L_f = 58800 \\Rightarrow L_f = 392000\\ \\text{J kg}^{-1} = 3.92\\times 10^{5}\\ \\text{J kg}^{-1}$$\n\n**Conclusion:** $3.92\\times 10^{5}\\ \\text{J kg}^{-1}$ → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Read the equilibrium temperature from the graph (point $Q$).',
      'Ice first melts, then the melted water warms to the final temperature.',
      'Use heat conservation: heat gained = heat lost.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-054-question.png'],
  },
  {
    id: 'cos-055',
    type: 'multiple_choice',
    question:
      'The setup is used to determine the specific latent heat of fusion of ice. At time $t=0$, $0.15\\ \\text{kg}$ of ice cubes at $0^{\\circ}\\text{C}$ are added into $1\\ \\text{kg}$ of hot water. The initial temperature of the water is $60^{\\circ}\\text{C}$. The graph shows the variation of the water temperature with time. At $Q$, the mixture reaches thermal equilibrium.\n\nWhich of the following statements about the experiment is correct?',
    options: [
      'Between $P$ and $Q$, the water is absorbing latent heat of fusion from the ice.',
      'Between $P$ and $Q$, the temperature of the ice is increasing.',
      'Between $Q$ and $R$, the water is absorbing energy from the surroundings.',
      'The temperature of the surroundings is $20^{\\circ}\\text{C}$.',
    ],
    answer: 'The temperature of the surroundings is $20^{\\circ}\\text{C}$.',
    explanation:
      '⚠️ **Key point:** The long-term temperature the mixture approaches is the surroundings temperature.\n\n**A** During $P$ to $Q$, the hotter water loses heat to the ice. The ice absorbs latent heat of fusion while melting; the water does not absorb latent heat from the ice → false.\n\n**B** While the ice is melting, its temperature stays at $0^{\\circ}\\text{C}$ (energy goes into latent heat). So we cannot say the ice temperature is increasing during the melting stage → false.\n\n**C** After $Q$, the mixture is warmer than the surroundings, so it loses heat to the surroundings (temperature decreases). It is not absorbing energy from the surroundings → false.\n\n**D** From the graph, the temperature tends towards $20^{\\circ}\\text{C}$ at long time. That limiting value is the surroundings temperature → true.\n\n**Conclusion:** Option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Heat transfer direction depends on temperature difference.',
      'During melting, temperature stays constant while latent heat is absorbed.',
      'The final “flattening” temperature indicates the surroundings temperature.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-055-question.png'],
  },
  {
    id: 'cos-056',
    type: 'multiple_choice',
    question:
      'An ice-making machine extracts energy at a rate of $500\\ \\text{W}$. The specific latent heat of fusion of ice is $334\\ \\text{kJ kg}^{-1}$. How long does it take to change $10\\ \\text{kg}$ of water at $0^{\\circ}\\text{C}$ into ice at $0^{\\circ}\\text{C}$?',
    options: [
      '$\\frac{10 \\times 334}{500}\\ \\text{s}$',
      '$\\frac{10 \\times 500}{334}\\ \\text{s}$',
      '$\\frac{10 \\times 334 \\times 1000}{500}\\ \\text{s}$',
      '$\\frac{10 \\times 500}{334 \\times 1000}\\ \\text{s}$',
    ],
    answer: '$\\frac{10 \\times 334 \\times 1000}{500}\\ \\text{s}$',
    explanation:
      '⚠️ **Key point:** During freezing at $0^{\\circ}\\text{C}$, the energy removed is latent heat only: $E = mL_f$. Power is $P = E/t$.\n\nConvert $L_f$ to J/kg:\n$$L_f = 334\\ \\text{kJ kg}^{-1} = 334\\times 1000\\ \\text{J kg}^{-1}$$\n\nEnergy to freeze $10\\ \\text{kg}$:\n$$E = mL_f = (10)(334\\times 1000)$$\n\nUsing $P = E/t$:\n$$t = \\frac{E}{P} = \\frac{10\\times 334\\times 1000}{500}\\ \\text{s} \\approx 6.68\\times 10^{3}\\ \\text{s}$$\n\n**Conclusion:** $\\frac{10 \\times 334 \\times 1000}{500}\\ \\text{s}$ → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Freezing at $0^{\\circ}\\text{C}$ uses $E=mL_f$ (no temperature change).',
      'Convert $\\text{kJ}$ to $\\text{J}$ using $1\\ \\text{kJ}=1000\\ \\text{J}$.',
      'Use $P=E/t$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-057',
    type: 'multiple_choice',
    question:
      'An immersion heater rated at $150\\ \\text{W}$ is fitted into a large block of ice at $0^{\\circ}\\text{C}$. How long does it take to melt $30\\ \\text{g}$ of ice?\n\n(Given: specific latent heat of fusion of ice $L_f = 334000\\ \\text{J kg}^{-1}$.)',
    options: ['33.4 seconds', '66.8 seconds', '66800 seconds', '66.8 minutes'],
    answer: '66.8 seconds',
    explanation:
      '⚠️ **Key point:** Melting at $0^{\\circ}\\text{C}$ uses latent heat only: $E = mL_f$ and $P = E/t$.\n\nConvert mass:\n$$m = 30\\ \\text{g} = 0.03\\ \\text{kg}$$\n\nEnergy to melt:\n$$E = mL_f = (0.03)(334000) = 10020\\ \\text{J}$$\n\nTime:\n$$t = \\frac{E}{P} = \\frac{10020}{150} = 66.8\\ \\text{s}$$\n\n**Conclusion:** $66.8\\ \\text{s}$ → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E=mL_f$ because temperature stays at $0^{\\circ}\\text{C}$ during melting.',
      'Convert grams to kilograms.',
      'Use $P=E/t$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-058',
    type: 'multiple_choice',
    question:
      'Which of the following statements correctly describe the difference between evaporation and boiling of a liquid?\n\n(1) Evaporation occurs at all temperatures but boiling occurs at one temperature only.\n(2) Evaporation occurs at the surface of the liquid but boiling occurs throughout the liquid.\n(3) Evaporation does not absorb latent heat of vaporization but boiling absorbs latent heat of vaporization.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** Both evaporation and boiling are forms of vaporization and both require latent heat, but they occur under different conditions.\n\n**(1)** Evaporation can occur at any temperature (below the boiling point). Boiling occurs at the boiling point (for a given pressure), where the temperature stays constant during boiling → true.\n\n**(2)** Evaporation happens only at the liquid surface, while boiling occurs throughout the liquid with bubbles forming inside → true.\n\n**(3)** Both evaporation and boiling require the latent heat of vaporization (energy must be absorbed to change liquid to gas). So this statement is false → false.\n\n**Conclusion:** (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Evaporation is a surface process and can happen below boiling point.',
      'Boiling occurs throughout the liquid at the boiling point.',
      'Both processes require latent heat of vaporization.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-059',
    type: 'multiple_choice',
    question:
      'Which of the following would enable wet clothes to dry more quickly?\n\n(1) Spread the clothes to increase the surface area.\n(2) Increase the temperature of the environment.\n(3) Blow air over the clothes.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** Drying happens by evaporation. The evaporation rate increases with larger surface area, higher temperature and stronger air movement.\n\n**(1)** Larger surface area allows more molecules to escape per unit time → true.\n\n**(2)** Higher temperature means molecules have higher kinetic energy, so more can escape → true.\n\n**(3)** Blowing air removes humid air near the surface and brings in drier air, increasing evaporation → true.\n\n**Conclusion:** (1), (2) and (3) are all correct → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Evaporation is faster with a larger surface area.',
      'Evaporation is faster at higher temperature.',
      'Wind removes saturated air and speeds up evaporation.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-060',
    type: 'multiple_choice',
    question:
      'The diagram shows a beaker containing ether, which is a volatile liquid. The beaker stands on a wooden board. A thin film of water is put between the board and the base of the beaker. Air is then blown through the tube so that it bubbles out from the immersed end.\n\nWhich of the following would happen?\n\n(1) Ether evaporates from the beaker.\n(2) Mist forms at the outer surface of the beaker.\n(3) The water cools down and freezes.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** Faster evaporation causes cooling. Blowing air increases evaporation, which can cool the beaker enough for condensation (mist) and even freezing of the water film.\n\n**(1)** Ether is volatile, and blowing air through it increases the evaporation rate → true.\n\n**(2)** Evaporation absorbs latent heat from the ether and the beaker, cooling the beaker’s outer surface. Water vapour in air can then condense into tiny droplets (mist) on the cold surface → true.\n\n**(3)** Continued cooling can lower the temperature of the thin water film below $0^{\\circ}\\text{C}$ so it freezes → true.\n\n**Conclusion:** (1), (2) and (3) → option D.',
    difficulty: 3,
    points: 20,
    hints: [
      'Blowing air speeds up evaporation.',
      'Evaporation absorbs latent heat and cools the surroundings.',
      'A cold beaker surface can cause condensation and may freeze nearby water.',
    ],
    sectionId: 'change-of-state',
    imagePaths: ['/physics/exercises/change-of-state/cos-060-question.png'],
  },
  {
    id: 'cos-061',
    type: 'multiple_choice',
    question:
      'David sweats $0.1\\ \\text{kg}$ of water in $10$ minutes after an athletics meet. What is the rate of cooling of his body by sweating?\n\n(Specific latent heat of vaporization of water $L_v = 2.26\\times 10^{6}\\ \\text{J kg}^{-1}$.)',
    options: [
      '$377\\ \\text{J s}^{-1}$',
      '$754\\ \\text{J s}^{-1}$',
      '$22600\\ \\text{J s}^{-1}$',
      '$37700\\ \\text{J s}^{-1}$',
    ],
    answer: '$377\\ \\text{J s}^{-1}$',
    explanation:
      '⚠️ **Key point:** Cooling power equals the rate of energy removed by evaporation.\n\nEnergy removed by evaporating $m$ kg of sweat:\n$$E = mL_v = (0.1)(2.26\\times 10^{6}) = 2.26\\times 10^{5}\\ \\text{J}$$\n\nTime:\n$$t = 10\\times 60 = 600\\ \\text{s}$$\n\nRate of cooling:\n$$\\text{power} = \\frac{E}{t} = \\frac{2.26\\times 10^{5}}{600} \\approx 3.77\\times 10^{2}\\ \\text{J s}^{-1}$$\n\n**Conclusion:** $377\\ \\text{J s}^{-1}$ → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $E=mL_v$ for energy removed by evaporation.',
      'Convert minutes to seconds.',
      'Rate of cooling is energy per second (power).',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-062',
    type: 'multiple_choice',
    question:
      'In a refrigerator, the liquid Freon is pumped around the pipes in a circuit. Which of the following are correct?\n\n(1) As the Freon evaporates, it removes energy from the food.\n(2) As the Freon condenses, it gives out energy.\n(3) The energy removed from the food is given out at the back of the refrigerator.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** A refrigerator transfers heat from inside to the surroundings using evaporation and condensation of a refrigerant.\n\n**(1)** In the evaporator (inside the fridge), Freon evaporates and absorbs latent heat from the food/air, cooling the interior → true.\n\n**(2)** In the condenser (back of the fridge), Freon condenses and releases latent heat to the surroundings → true.\n\n**(3)** The heat removed from the food (and additional work done by the compressor) is released at the back through the condenser coils/fins → true.\n\n**Conclusion:** (1), (2) and (3) are all correct → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Evaporation absorbs latent heat; condensation releases it.',
      'The fridge moves heat from inside to outside.',
      'The back coils are the condenser where heat is released.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-063',
    type: 'multiple_choice',
    question:
      'A cup of water is placed at the room temperature of $25^{\\circ}\\text{C}$. At which temperatures would evaporation and boiling start to occur respectively?',
    options: [
      'Evaporation: $50^{\\circ}\\text{C}$; Boiling: $50^{\\circ}\\text{C}$',
      'Evaporation: $25^{\\circ}\\text{C}$; Boiling: $100^{\\circ}\\text{C}$',
      'Evaporation: $100^{\\circ}\\text{C}$; Boiling: $50^{\\circ}\\text{C}$',
      'Evaporation: $100^{\\circ}\\text{C}$; Boiling: $100^{\\circ}\\text{C}$',
    ],
    answer: 'Evaporation: $25^{\\circ}\\text{C}$; Boiling: $100^{\\circ}\\text{C}$',
    explanation:
      '⚠️ **Key point:** Evaporation can occur at any temperature, while boiling starts only at the boiling point.\n\nSince the water is at room temperature, evaporation starts at $25^{\\circ}\\text{C}$. Boiling starts only at the boiling point of water, $100^{\\circ}\\text{C}$ (at standard atmospheric pressure).\n\n**Conclusion:** $25^{\\circ}\\text{C}$ and $100^{\\circ}\\text{C}$ → option B.',
    difficulty: 1,
    points: 10,
    hints: [
      'Evaporation can occur below the boiling point.',
      'Boiling starts at the boiling point (for a given pressure).',
      'Room temperature here is $25^{\\circ}\\text{C}$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-064',
    type: 'multiple_choice',
    question:
      'When a liquid evaporates, some of the molecules escape from the surface and the temperature of the liquid changes. Which of the following best describes the energy of the escaping molecules and the change in temperature of the liquid?',
    options: [
      'Energy low; Temperature increases',
      'Energy low; Temperature decreases',
      'Energy high; Temperature increases',
      'Energy high; Temperature decreases',
    ],
    answer: 'Energy high; Temperature decreases',
    explanation:
      '⚠️ **Key point:** Evaporation removes the higher-energy molecules, lowering the average kinetic energy of the remaining liquid.\n\nThe molecules that escape have higher kinetic energy than average. Their escape reduces the average kinetic energy of the remaining molecules, so the liquid cools down.\n\n**Conclusion:** High energy; temperature decreases → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Faster molecules are more likely to escape.',
      'Removing higher-energy molecules cools the remaining liquid.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-065',
    type: 'multiple_choice',
    question:
      'The melting points and boiling points of four elements are listed below. Which element is a liquid at $1000^{\\circ}\\text{C}$?\n\nA. Aluminium (mp 660°C, bp 2470°C)\nB. Mercury (mp −39°C, bp 357°C)\nC. Chlorine (mp −101°C, bp −35°C)\nD. Iron (mp 1540°C, bp 2750°C)',
    options: ['Aluminium', 'Mercury', 'Chlorine', 'Iron'],
    answer: 'Aluminium',
    explanation:
      '⚠️ **Key point:** A substance is liquid when the temperature is between its melting and boiling points.\n\nAt $1000^{\\circ}\\text{C}$:\n- Aluminium: $660 < 1000 < 2470$ → liquid.\n- Mercury: $1000 > 357$ → gas.\n- Chlorine: $1000 > -35$ → gas.\n- Iron: $1000 < 1540$ → solid.\n\n**Conclusion:** Aluminium is the liquid → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Liquid means temperature is between melting and boiling points.',
      'Compare $1000^{\\circ}\\text{C}$ with each element’s mp and bp.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-066',
    type: 'multiple_choice',
    question:
      'When Paul goes out from an air-conditioned shopping mall, he finds that his glasses become misted-up. Which of the following statements are correct?\n\n(1) Water vapour condenses onto the glass surfaces.\n(2) Cold air holds less water vapour than warm air.\n(3) Latent heat of vaporization is absorbed when mist is formed.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** Misting is due to condensation on a cold surface; condensation releases latent heat.\n\n**(1)** The glasses are colder than the warm, humid outdoor air, so water vapour condenses on the surface → true.\n\n**(2)** Cold air has a lower capacity to hold water vapour than warm air → true.\n\n**(3)** Condensation releases latent heat (the reverse of vaporization), so latent heat is not absorbed → false.\n\n**Conclusion:** (1) and (2) only → option A.',
    difficulty: 1,
    points: 10,
    hints: [
      'Misting is condensation on a cold surface.',
      'Warm air can hold more water vapour than cold air.',
      'Condensation releases latent heat.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-067',
    type: 'multiple_choice',
    question:
      'If we come out from a swimming pool and do not dry ourselves, we would feel cool. What is the main reason?',
    options: [
      'Water is a good conductor of heat.',
      'Water is colder than the air.',
      'Water has a high specific heat capacity.',
      'Water evaporates in air.',
    ],
    answer: 'Water evaporates in air.',
    explanation:
      '⚠️ **Key point:** Evaporation absorbs latent heat from the body, causing cooling.\n\nWater on the skin evaporates and absorbs latent heat of vaporization from the body, lowering the skin temperature and making us feel cool.\n\n**Conclusion:** Water evaporates in air → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'Evaporation absorbs latent heat from the surroundings.',
      'Cooling sensation is due to heat taken from the skin.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-068',
    type: 'multiple_choice',
    question:
      'What is the process that causes water molecules to escape from the surface of the sea to the sky?',
    options: ['boiling', 'convection', 'evaporation', 'radiation'],
    answer: 'evaporation',
    explanation:
      '⚠️ **Key point:** Water molecules escape from a liquid surface by evaporation.\n\nWater at the sea surface gains enough energy for some molecules to leave the liquid and enter the air as water vapour. This is evaporation.\n\n**Conclusion:** evaporation → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Surface molecules can escape without boiling.',
      'Evaporation turns liquid water into water vapour.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-069',
    type: 'multiple_choice',
    question:
      'When water is heated steadily, its temperature stops rising when the water starts to',
    options: ['release water vapour', 'evaporate', 'freeze', 'boil'],
    answer: 'boil',
    explanation:
      '⚠️ **Key point:** During boiling, added heat goes into latent heat, so temperature stays constant.\n\nWhen water reaches its boiling point, further heating provides the latent heat of vaporization instead of increasing temperature. Thus the temperature remains at $100^{\\circ}\\text{C}$ (at standard atmospheric pressure) while boiling.\n\n**Conclusion:** boil → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'At boiling, temperature stays constant while liquid changes to gas.',
      'Evaporation can happen below boiling, but temperature still rises with heating.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-070',
    type: 'multiple_choice',
    question:
      'Mary hangs the wet clothes in a room for drying. Which of the following can help the clothes to dry more quickly?\n\n(1) Close the window.\n(2) Switch on the dehumidifier.\n(3) Switch on the heating radiator.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** Drying speed increases with lower humidity and higher temperature, and with airflow.\n\n**(1)** Closing the window reduces airflow, so evaporation is slower → false.\n\n**(2)** A dehumidifier lowers the air’s moisture content, increasing evaporation → true.\n\n**(3)** Heating raises temperature, increasing evaporation rate → true.\n\n**Conclusion:** (2) and (3) only → option C.',
    difficulty: 1,
    points: 10,
    hints: [
      'Lower humidity speeds up evaporation.',
      'Higher temperature speeds up evaporation.',
      'Airflow helps evaporation.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-071',
    type: 'multiple_choice',
    question:
      'Peter puts a few drops of alcohol in his right hand and a few drops of water in his left hand at the same time. He feels that his right hand is cooler than his left hand. Which of the following may be the reason?\n\n(1) Alcohol has evaporation but water does not have evaporation.\n(2) The heat conduction of alcohol is better than that of water.\n(3) Alcohol has a greater rate of evaporation than water.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** Faster evaporation removes heat more quickly, causing stronger cooling.\n\n**(1)** Both alcohol and water evaporate → false.\n\n**(2)** Their thermal conductivities are not the main reason for the cooling sensation here → false.\n\n**(3)** Alcohol evaporates faster than water, so it absorbs latent heat from the skin more rapidly → true.\n\n**Conclusion:** (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Evaporation absorbs latent heat.',
      'Alcohol is more volatile than water.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-072',
    type: 'multiple_choice',
    question:
      'Which of the following statements are correct when a liquid is boiling?\n\n(1) When the liquid is boiling, large amounts of energy are absorbed.\n(2) The average kinetic energy of its molecules is increased during boiling.\n(3) The average potential energy of its molecules is increased during boiling.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (3) only',
    explanation:
      '⚠️ **Key point:** During boiling, temperature stays constant; absorbed energy increases molecular potential energy.\n\n**(1)** Boiling requires latent heat of vaporization, so large amounts of energy are absorbed → true.\n\n**(2)** Temperature is constant during boiling, so average kinetic energy does not increase → false.\n\n**(3)** Molecules move farther apart in the gas phase, so average potential energy increases → true.\n\n**Conclusion:** (1) and (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Boiling happens at constant temperature.',
      'Latent heat changes molecular potential energy, not kinetic energy.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-073',
    type: 'multiple_choice',
    question:
      'When a gas is heated, which of the following statements must be correct?\n\n(1) The temperature of the gas must increase.\n(2) The kinetic energy of the gas molecules must increase.\n(3) The molecules of the gas must move faster.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1), (2) & (3)',
    explanation:
      '⚠️ **Key point:** Heating a gas increases its temperature, which raises average kinetic energy and molecular speed.\n\nFor a gas with no change of state, heating raises temperature. Higher temperature means higher average kinetic energy, so molecules move faster.\n\n**Conclusion:** (1), (2) and (3) are all correct → option D.',
    difficulty: 1,
    points: 10,
    hints: [
      'For an ideal gas, temperature is proportional to average kinetic energy.',
      'Higher kinetic energy means higher average molecular speed.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-074',
    type: 'multiple_choice',
    question:
      'Which of the following statements is/are correct when a vapour condenses into a liquid at its boiling point?\n\n(1) When the vapour condenses, its temperature decreases.\n(2) The vapour releases energy to the surroundings during condensation.\n(3) The average potential energy of the molecules decreases.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** Condensation at the boiling point occurs at constant temperature and releases latent heat.\n\n**(1)** At the boiling point, condensation happens at constant temperature → false.\n\n**(2)** Condensation releases latent heat to the surroundings → true.\n\n**(3)** Molecules come closer together in the liquid, so average potential energy decreases → true.\n\n**Conclusion:** (2) and (3) only → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Phase changes at the boiling point occur at constant temperature.',
      'Condensation releases latent heat.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-075',
    type: 'multiple_choice',
    question:
      'When a body is heated, which of the following statements must be correct?',
    options: [
      'The internal energy of the body always increases.',
      'The temperature of the body always increases.',
      'The average kinetic energy of the molecules in the body always increases.',
      'The average potential energy of the molecules in the body always increases.',
    ],
    answer: 'The internal energy of the body always increases.',
    explanation:
      '⚠️ **Key point:** Heating increases internal energy, but temperature or molecular energies may not increase if a phase change occurs.\n\nInternal energy increases because heat is absorbed. During a phase change, temperature (and average kinetic energy) can remain constant, while potential energy changes.\n\n**Conclusion:** Only statement A is always correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'During phase change, temperature can stay constant.',
      'Heating always increases internal energy.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-076',
    type: 'multiple_choice',
    question:
      'The graph shows the variation in temperature of equal masses of two substances $P$ and $Q$ when they are separately heated by identical heaters. Which deduction is correct?',
    options: [
      'The melting point of $P$ is lower than that of $Q$.',
      'The specific heat capacity of $P$ in solid state is larger than that of $Q$.',
      'The specific latent heat of fusion of $P$ is larger than that of $Q$.',
      'The energy required to raise the temperature of $P$ from room temperature to boiling point is more than that of $Q$.',
    ],
    answer: 'The specific heat capacity of $P$ in solid state is larger than that of $Q$.',
    explanation:
      '⚠️ **Key point:** With equal mass and identical heaters, the slope of the temperature–time graph is inversely proportional to the specific heat capacity.\n\nA smaller slope in the solid-heating section means a larger specific heat capacity. From the graph, $P$ has the smaller solid-phase slope, so $c_P$ is larger.\n\n**Conclusion:** Option B is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'For constant power, slope $\\propto 1/c$ (same mass).',
      'Compare the solid-phase slopes of $P$ and $Q$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-077',
    type: 'multiple_choice',
    question:
      'The sprinkler system on a rooftop is able to spray small water droplets onto the rooftop which can lower the temperature of the rooftop on hot sunny days. Which of the following explanations about the sprinkler system is/are reasonable?\n\n(1) Water is a good conductor, which conducts heat quickly.\n(2) Water has a high specific heat capacity, absorbing a lot of energy when its temperature rises.\n(3) Water has a high specific latent heat of vaporization, absorbing a lot of energy when it evaporates.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      '⚠️ **Key point:** Cooling comes mainly from water heating up and evaporating; water is not a good conductor.\n\n**(1)** Water is a poor conductor → false.\n\n**(2)** Water’s high specific heat capacity lets it absorb much energy as it warms → true.\n\n**(3)** Water’s high latent heat of vaporization absorbs much energy during evaporation → true.\n\n**Conclusion:** (2) and (3) only → option D.',
    difficulty: 2,
    points: 15,
    hints: [
      'Water is not a good conductor.',
      'Heating and evaporation both absorb energy.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-078',
    type: 'multiple_choice',
    question:
      'Which of the following descriptions is correct?',
    options: [
      'When water at $25^{\\circ}\\text{C}$ is heated to $50^{\\circ}\\text{C}$, both the kinetic energy and potential energy of the water molecules increase.',
      'When water at $25^{\\circ}\\text{C}$ is heated to $50^{\\circ}\\text{C}$, only the potential energy of the water molecules increases.',
      'When water boils at $100^{\\circ}\\text{C}$ and turns into steam, the kinetic energy of the water molecules increases.',
      'When water boils at $100^{\\circ}\\text{C}$ and turns into steam, the potential energy of the water molecules increases.',
    ],
    answer:
      'When water boils at $100^{\\circ}\\text{C}$ and turns into steam, the potential energy of the water molecules increases.',
    explanation:
      '⚠️ **Key point:** Temperature rise increases average kinetic energy; phase change increases average potential energy.\n\nHeating water from $25^{\\circ}\\text{C}$ to $50^{\\circ}\\text{C}$ increases kinetic energy, not potential energy. During boiling at $100^{\\circ}\\text{C}$, temperature stays constant, so kinetic energy does not increase; the absorbed energy increases molecular potential energy.\n\n**Conclusion:** Option D is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Rising temperature increases kinetic energy.',
      'Phase change at constant temperature increases potential energy.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-079',
    type: 'multiple_choice',
    question:
      "When a patient's arm is wiped by a piece of cotton soaked with alcohol, the wiped area will feel cool as that patch of alcohol on the skin evaporates. Which statement explains this phenomenon?",
    options: [
      "The evaporation of alcohol absorbs heat from the patient's arm.",
      'The alcohol on the skin releases latent heat to the surrounding air.',
      'The motion of all the molecules in the patch of alcohol slows down.',
      'Air molecules remove heat from the patch of alcohol by conduction.',
    ],
    answer: "The evaporation of alcohol absorbs heat from the patient's arm.",
    explanation:
      '⚠️ **Key point:** Evaporation absorbs latent heat from the skin, causing cooling.\n\nAs alcohol evaporates, it absorbs latent heat from the skin, lowering the skin temperature and giving a cooling sensation.\n\n**Conclusion:** Option A is correct.',
    difficulty: 1,
    points: 10,
    hints: [
      'Evaporation absorbs latent heat from the surroundings.',
      'Cooling sensation is due to heat taken from the skin.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-080',
    type: 'multiple_choice',
    question:
      "Which of the following statements about boiling and evaporation of a liquid is/are correct?\n\n(1) A liquid absorbs energy when it boils but does not absorb energy when it evaporates.\n(2) Boiling occurs at a definite temperature while evaporation takes place above room temperature.\n(3) Boiling occurs throughout the liquid while evaporation only takes place at the liquid's surface.",
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      '⚠️ **Key point:** Both evaporation and boiling absorb latent heat; boiling is throughout the liquid, evaporation only at the surface.\n\n**(1)** Both processes absorb latent heat → false.\n\n**(2)** Evaporation can occur at any temperature, not only above room temperature → false.\n\n**(3)** Boiling occurs throughout the liquid; evaporation occurs at the surface → true.\n\n**Conclusion:** (3) only → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Evaporation can happen at any temperature.',
      'Both processes need latent heat.',
      'Boiling is a bulk process; evaporation is a surface process.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-081',
    type: 'multiple_choice',
    question:
      'In an experiment to measure the specific latent heat of vaporization of water, a beaker of water is boiled off using an electric heater. Which of the following sources of error would lead to an experimental result smaller than the standard value?',
    options: [
      'Energy is lost to the surroundings.',
      'Water splashes out of the beaker.',
      'Steam condenses on the cooler part of the heater and drops back to the beaker.',
      'The heater is not completely immersed in water.',
    ],
    answer: 'Water splashes out of the beaker.',
    explanation:
      '⚠️ **Key point:** The measured latent heat is $L_v = \\dfrac{E}{m}$. Errors that make $m$ too large (or $E$ too small) give a smaller result.\n\n**A** Energy lost to surroundings makes the supplied energy $E$ overestimated, so $L_v$ appears larger → not smaller.\n\n**B** Splashing increases the measured mass loss without corresponding latent heat, so $m$ is overestimated → $L_v$ smaller → correct.\n\n**C** Condensed steam returning reduces measured mass loss, making $m$ smaller → $L_v$ larger → not smaller.\n\n**D** Heater not fully immersed increases energy lost to air, so $E$ is overestimated → $L_v$ larger → not smaller.\n\n**Conclusion:** Water splashes out → option B.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use $L_v = E/m$.',
      'Anything that makes $m$ too large reduces $L_v$.',
      'Anything that makes $E$ too large increases $L_v$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-082',
    type: 'multiple_choice',
    question:
      'An electric heater of constant power is used to heat a solid substance $X$ which is insulated from the surroundings. The variation of its temperature $\\theta$ with time $t$ is shown. $X$ has a specific heat capacity of $800\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$ in its solid state. What is the specific latent heat of fusion of $X$?',
    options: [
      '$144\\ \\text{kJ kg}^{-1}$',
      '$192\\ \\text{kJ kg}^{-1}$',
      '$202\\ \\text{kJ kg}^{-1}$',
      'Answer cannot be found as both the mass of $X$ and the power of the heater are not known.',
    ],
    answer: '$144\\ \\text{kJ kg}^{-1}$',
    explanation:
      '⚠️ **Key point:** With constant power, energy is proportional to time. Use the heating segment to find $P/m$, then use the melting time to find $L_f$.\n\nLet heater power be $P$ and mass be $m$.\n\nFrom the graph, temperature rises from $20^{\\circ}\\text{C}$ to $80^{\\circ}\\text{C}$ in $2\\ \\text{min}$:\n$$P(2) = mc\\Delta T = m(800)(60)$$\n\nMelting lasts $6\\ \\text{min}$, so\n$$P(6) = mL_f$$\n\nDivide the two equations:\n$$\\frac{P(2)}{P(6)} = \\frac{m(800)(60)}{mL_f} \\Rightarrow L_f = 144000\\ \\text{J kg}^{-1}$$\n\n**Conclusion:** $144\\ \\text{kJ kg}^{-1}$ → option A.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use $P t = mc\\Delta T$ on the sloped part.',
      'Use $P t = mL_f$ on the flat (melting) part.',
      'Divide to eliminate $P$ and $m$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-083',
    type: 'multiple_choice',
    question:
      '0.3 kg of water at temperature $50^{\\circ}\\text{C}$ is mixed with 0.2 kg of ice at temperature $0^{\\circ}\\text{C}$ in an insulated container of negligible heat capacity. What is the final temperature of the mixture?\n\nGiven: specific heat capacity of water $= 4200\\ \\text{J kg}^{-1}\\ {}^{\\circ}\\text{C}^{-1}$; specific latent heat of fusion of ice $= 3.34\\times 10^5\\ \\text{J kg}^{-1}$.',
    options: [
      '$-1.8^{\\circ}\\text{C}$',
      '$0^{\\circ}\\text{C}$',
      '$1.8^{\\circ}\\text{C}$',
      '$3.0^{\\circ}\\text{C}$',
    ],
    answer: '$0^{\\circ}\\text{C}$',
    explanation:
      '⚠️ **Key point:** If the hot water does not supply enough energy to melt all the ice, the final temperature is $0^{\\circ}\\text{C}$ with ice remaining.\n\nHeat available from cooling water to $0^{\\circ}\\text{C}$:\n$$Q_{\\text{water}} = mc\\Delta T = (0.3)(4200)(50) = 63000\\ \\text{J}$$\n\nHeat needed to melt all the ice:\n$$Q_{\\text{melt}} = mL_f = (0.2)(3.34\\times 10^5) = 66800\\ \\text{J}$$\n\nSince $Q_{\\text{water}} < Q_{\\text{melt}}$, not all ice melts, so the mixture remains at $0^{\\circ}\\text{C}$.\n\n**Conclusion:** $0^{\\circ}\\text{C}$ → option B.',
    difficulty: 3,
    points: 20,
    hints: [
      'Compare heat available from warm water with heat needed to melt all ice.',
      'If ice remains, the final temperature is $0^{\\circ}\\text{C}$.',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-084',
    type: 'multiple_choice',
    question:
      'Same mass of solids $P$ and $Q$ are heated at the same rate. The temperature–time graphs of the two substances are shown. Which of the following comparisons about their melting points and specific latent heats of fusion is correct?',
    options: [
      'Melting point: $P$ higher; Latent heat of fusion: $P$ larger',
      'Melting point: $P$ higher; Latent heat of fusion: $Q$ larger',
      'Melting point: $Q$ higher; Latent heat of fusion: $P$ larger',
      'Melting point: $Q$ higher; Latent heat of fusion: $Q$ larger',
    ],
    answer: 'Melting point: $Q$ higher; Latent heat of fusion: $P$ larger',
    explanation:
      '⚠️ **Key point:** The plateau temperature gives the melting point; the plateau duration is proportional to latent heat (same mass and power).\n\nThe plateau for $Q$ is at a higher temperature, so $Q$ has the higher melting point. The plateau for $P$ lasts longer, so $P$ has the larger specific latent heat of fusion.\n\n**Conclusion:** Melting point $Q$ higher; latent heat of fusion $P$ larger → option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'The flat part indicates melting at the melting point.',
      'Longer melting time means larger latent heat (same mass and power).',
    ],
    sectionId: 'change-of-state',
  },
  {
    id: 'cos-085',
    type: 'multiple_choice',
    question:
      'Which of the following statements about the internal energy of a substance are correct?\n\n(1) When a solid melts, the latent heat of fusion absorbed becomes potential energy of the molecules in the substance.\n(2) When a vapour condenses, its internal energy decreases.\n(3) When a liquid evaporates, the internal energy of the remaining liquid increases.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) & (2) only',
    explanation:
      '⚠️ **Key point:** During melting, absorbed energy increases potential energy; condensation lowers internal energy; evaporation cools the remaining liquid.\n\n**(1)** Melting occurs at constant temperature, so kinetic energy stays the same; absorbed latent heat increases molecular potential energy → true.\n\n**(2)** Condensation releases latent heat, so internal energy decreases → true.\n\n**(3)** Evaporation removes higher‑energy molecules, so the remaining liquid’s temperature (and internal energy) decreases → false.\n\n**Conclusion:** (1) and (2) only → option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Latent heat at constant temperature changes potential energy.',
      'Condensation releases energy.',
      'Evaporation cools the remaining liquid.',
    ],
    sectionId: 'change-of-state',
  },
];
