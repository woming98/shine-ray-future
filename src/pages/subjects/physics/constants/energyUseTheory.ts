import { Chapter, Formula } from '../types';
import { ENERGY_USE_EXERCISES } from './energyUse';
import { ENERGY_USE_SECTIONS } from './energyUseSections';

export const ENERGY_USE_FORMULAS: Formula[] = [
  {
    id: 'euf-1',
    name: 'Illuminance from Point Source',
    nameCN: 'Point-source illuminance',
    expression: 'E = Phi / (4 pi r^2)',
    variables: [],
    description: 'Basic inverse-square illumination for a point source emitting equally in all directions.',
    example: 'If Phi = 1080 lm and r = 2.5 m, then E about 14 lx.'
  },
  {
    id: 'euf-2',
    name: 'Lambert Cosine Law',
    nameCN: 'Lambert cosine law',
    expression: 'E = [Phi / (4 pi r^2)] cos theta',
    variables: [],
    description: 'Use when the surface is tilted relative to the light direction.',
    example: 'The cosine factor reduces illuminance when the surface is not facing the source directly.'
  },
  {
    id: 'euf-3',
    name: 'Luminous Flux',
    nameCN: 'Luminous flux',
    expression: 'Phi = (efficacy) x P',
    variables: [],
    description: 'Convert power rating and luminous efficacy to luminous flux.',
    example: 'A lamp of 60 W and 18 lm/W gives 1080 lm.'
  },
  {
    id: 'euf-4',
    name: 'Useful Energy',
    nameCN: 'Useful energy',
    expression: 'E = Pt',
    variables: [],
    description: 'Basic electrical energy input or output relation.',
    example: 'A 21 W useful output sustained for 8 h gives about 605 kJ.'
  },
  {
    id: 'euf-5',
    name: 'End-Use Efficiency',
    nameCN: 'End-use efficiency',
    expression: 'eta = E_useful / E_input = P_useful / P_input',
    variables: [],
    description: 'Used for lamps, cookers and appliance efficiency.',
    example: 'If eta = 35% and input power is 60 W, useful power is 21 W.'
  },
  {
    id: 'euf-6',
    name: 'Heating Equation',
    nameCN: 'Heating equation',
    expression: 'Q = mc Delta T',
    variables: [],
    description: 'Used for heating water or cooling/heating air in a room.',
    example: 'For 1.5 kg of water heated by 75 C, Q = 472500 J.'
  },
  {
    id: 'euf-7',
    name: 'Cost from Electrical Energy',
    nameCN: 'Electricity cost',
    expression: 'cost = (E in kWh) x tariff',
    variables: [],
    description: 'Convert energy consumption to money spent.',
    example: '0.169 kWh at 0.95 dollars per kWh costs about 0.16 dollars.'
  },
  {
    id: 'euf-8',
    name: 'Heat Pump COP',
    nameCN: 'Heat pump COP',
    expression: 'COP = Q_H / W',
    variables: [],
    description: 'Coefficient of performance for heat pumps.',
    example: 'If 8500 J is delivered with 2000 J work input, COP = 4.25.'
  },
  {
    id: 'euf-9',
    name: 'Refrigerator COP',
    nameCN: 'Refrigerator COP',
    expression: 'COP = Q_C / W',
    variables: [],
    description: 'Coefficient of performance for refrigerators and cooling mode.',
    example: 'If 473000 J is removed using 204000 J work, COP about 2.3.'
  },
  {
    id: 'euf-10',
    name: 'Energy Label Average Power',
    nameCN: 'Average power from label',
    expression: 'P = E / t',
    variables: [],
    description: 'Used to infer average appliance power from annual energy consumption.',
    example: '250 kWh over 468 h implies about 534 W.'
  }
];

export const ENERGY_USE_CHAPTERS: Chapter[] = ENERGY_USE_SECTIONS.map((section, index) => ({
  id: `eu-ch${index + 1}`,
  title: section.name,
  titleCN: section.nameCN,
  concepts: [],
  formulas: ENERGY_USE_FORMULAS,
  exercises: ENERGY_USE_EXERCISES.filter((exercise) => exercise.sectionId === section.id),
  simulations: [],
  completed: false,
}));
