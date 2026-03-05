import { Chapter, Formula } from '../types';
import { ELECTRICITY_MAGNETISM_EXERCISES } from './electricityMagnetism';
import { ELECTRICITY_MAGNETISM_SECTIONS } from './electricityMagnetismSections';

export const ELECTRICITY_MAGNETISM_FORMULAS: Formula[] = [
  {
    id: 'emf-1',
    name: 'Ohm\'s Law',
    nameCN: 'Ohm law',
    expression: 'V = IR',
    variables: [
      { symbol: 'V', name: 'voltage', unit: 'V', description: 'voltage' },
      { symbol: 'I', name: 'current', unit: 'A', description: 'current' },
      { symbol: 'R', name: 'resistance', unit: 'ohm', description: 'resistance' }
    ],
    description: 'Core relation for circuit questions.',
    example: 'If I = 0.5 A and R = 24 ohm, then V = 12 V.'
  },
  {
    id: 'emf-2',
    name: 'Electrical Power',
    nameCN: 'Electrical power',
    expression: 'P = VI = I^2R = V^2 / R',
    variables: [
      { symbol: 'P', name: 'power', unit: 'W', description: 'power' }
    ],
    description: 'Used for rated values, heating and device power.',
    example: 'A 12 V, 24 W lamp draws 2 A.'
  },
  {
    id: 'emf-3',
    name: 'Electrical Energy',
    nameCN: 'Electrical energy',
    expression: 'E = Pt = VIt',
    variables: [
      { symbol: 'E', name: 'energy', unit: 'J', description: 'energy' },
      { symbol: 't', name: 'time', unit: 's', description: 'time' }
    ],
    description: 'Used for energy consumption and heating effect.',
    example: 'A 100 W device running for 60 s uses 6000 J.'
  },
  {
    id: 'emf-4',
    name: 'Series Resistance',
    nameCN: 'Series resistance',
    expression: 'R_total = R1 + R2 + ...',
    variables: [],
    description: 'Equivalent resistance for series connection.',
    example: '2 ohm and 4 ohm in series give 6 ohm.'
  },
  {
    id: 'emf-5',
    name: 'Parallel Resistance',
    nameCN: 'Parallel resistance',
    expression: '1 / R_total = 1 / R1 + 1 / R2 + ...',
    variables: [],
    description: 'Equivalent resistance for parallel connection.',
    example: 'Two identical 6 ohm resistors in parallel give 3 ohm.'
  },
  {
    id: 'emf-6',
    name: 'Potential Divider',
    nameCN: 'Potential divider',
    expression: 'V1 / V2 = R1 / R2',
    variables: [],
    description: 'Used for tapped output and variable resistor questions.',
    example: 'If R1 : R2 = 1 : 2, then V1 : V2 = 1 : 2.'
  },
  {
    id: 'emf-7',
    name: 'Coulomb Law',
    nameCN: 'Coulomb law',
    expression: 'F = k|Q1Q2| / r^2',
    variables: [],
    description: 'Electrostatic force between two point charges.',
    example: 'Doubling r reduces F to one quarter.'
  },
  {
    id: 'emf-8',
    name: 'Electric Field Strength',
    nameCN: 'Electric field strength',
    expression: 'E = F / q',
    variables: [],
    description: 'Force per unit positive charge.',
    example: 'If q = 2 C and F = 6 N, then E = 3 N C^-1.'
  },
  {
    id: 'emf-9',
    name: 'Uniform Field Between Plates',
    nameCN: 'Uniform field between plates',
    expression: 'E = V / d',
    variables: [],
    description: 'Field strength for parallel plates.',
    example: 'If V = 200 V and d = 0.02 m, then E = 1.0 x 10^4 V m^-1.'
  },
  {
    id: 'emf-10',
    name: 'Transformer Voltage Ratio',
    nameCN: 'Transformer voltage ratio',
    expression: 'Vp / Vs = Np / Ns',
    variables: [],
    description: 'Main voltage-turns relation in transformer questions.',
    example: 'If Np : Ns = 20 : 1 and Vp = 200 V, then Vs = 10 V.'
  },
  {
    id: 'emf-11',
    name: 'Ideal Transformer Power',
    nameCN: 'Ideal transformer power',
    expression: 'VpIp = VsIs',
    variables: [],
    description: 'Power conservation in an ideal transformer.',
    example: 'If Vs = 11 V and Is = 2 A, then output power is 22 W.'
  },
  {
    id: 'emf-12',
    name: 'Transformer Efficiency',
    nameCN: 'Transformer efficiency',
    expression: 'eta = P_out / P_in',
    variables: [],
    description: 'Used when power loss is not zero.',
    example: 'If eta = 0.8 and P_out = 80 W, then P_in = 100 W.'
  },
  {
    id: 'emf-13',
    name: 'Transmission Loss',
    nameCN: 'Transmission loss',
    expression: 'P_loss = I^2R',
    variables: [],
    description: 'Cable loss in long-distance transmission.',
    example: 'If I = 20 A and R = 0.2 ohm, then P_loss = 80 W.'
  },
  {
    id: 'emf-14',
    name: 'Motional E.M.F.',
    nameCN: 'Motional emf',
    expression: 'epsilon = B l v',
    variables: [],
    description: 'Induced e.m.f. when a conductor cuts field lines.',
    example: 'If B = 0.5 T, l = 0.2 m and v = 4 m s^-1, then epsilon = 0.4 V.'
  },
  {
    id: 'emf-15',
    name: 'Faraday Law',
    nameCN: 'Faraday law',
    expression: 'epsilon = Delta(N Phi) / Delta t',
    variables: [],
    description: 'Induced e.m.f. from changing flux linkage.',
    example: 'If flux linkage changes by 0.12 Wb-turn in 0.02 s, epsilon = 6 V.'
  },
  {
    id: 'emf-16',
    name: 'Magnetic Flux',
    nameCN: 'Magnetic flux',
    expression: 'Phi = BA cos theta',
    variables: [],
    description: 'Flux through an area in a magnetic field.',
    example: 'If theta = 90 deg, then flux is zero.'
  },
  {
    id: 'emf-17',
    name: 'A.C. R.M.S. Voltage',
    nameCN: 'AC rms voltage',
    expression: 'V_rms = V0 / sqrt(2)',
    variables: [],
    description: 'Convert between peak and r.m.s. voltage.',
    example: 'If V_rms = 110 V, then V0 = 156 V.'
  },
  {
    id: 'emf-18',
    name: 'Frequency and Period',
    nameCN: 'Frequency and period',
    expression: 'f = 1 / T',
    variables: [],
    description: 'Basic time relation for CRO and a.c. questions.',
    example: 'If T = 0.04 s, then f = 25 Hz.'
  }
];

export const ELECTRICITY_MAGNETISM_CHAPTERS: Chapter[] = ELECTRICITY_MAGNETISM_SECTIONS.map((section, index) => ({
  id: `em-ch${index + 1}`,
  title: section.name,
  titleCN: section.nameCN,
  concepts: [],
  formulas: ELECTRICITY_MAGNETISM_FORMULAS,
  exercises: ELECTRICITY_MAGNETISM_EXERCISES.filter((exercise) => exercise.sectionId === section.id),
  simulations: [],
  completed: false,
}));
