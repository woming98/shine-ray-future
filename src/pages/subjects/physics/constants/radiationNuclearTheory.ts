import { Chapter, Formula } from '../types';
import { RADIATION_NUCLEAR_EXERCISES } from './radiationNuclear';
import { RADIATION_NUCLEAR_SECTIONS } from './radiationNuclearSections';

export const RADIATION_NUCLEAR_FORMULAS: Formula[] = [
  {
    id: 'rnf-1',
    name: 'Half-life Decay',
    nameCN: 'Half-life decay',
    expression: 'N = N0 (1/2)^(t / t1/2)',
    variables: [],
    description: 'Main decay formula for remaining mass, nuclei and activity.',
    example: 'If t = 3 half-lives, then N = N0 / 8.'
  },
  {
    id: 'rnf-2',
    name: 'Exponential Decay',
    nameCN: 'Exponential decay',
    expression: 'N = N0 e^(-kt)',
    variables: [],
    description: 'Used when time is not an exact multiple of the half-life.',
    example: 'Use this form to solve for k, t or N from two data points.'
  },
  {
    id: 'rnf-3',
    name: 'Activity Decay',
    nameCN: 'Activity decay',
    expression: 'A = A0 (1/2)^(t / t1/2) = A0 e^(-kt)',
    variables: [],
    description: 'Activity follows the same decay law as undecayed nuclei.',
    example: 'If activity falls to one quarter, two half-lives have passed.'
  },
  {
    id: 'rnf-4',
    name: 'Decay Constant and Half-life',
    nameCN: 'Decay constant and half-life',
    expression: 'k = ln 2 / t1/2',
    variables: [],
    description: 'Links half-life to decay constant.',
    example: 'Shorter half-life means larger decay constant.'
  },
  {
    id: 'rnf-5',
    name: 'Activity Definition',
    nameCN: 'Activity definition',
    expression: 'A = kN',
    variables: [],
    description: 'Activity depends on decay constant and undecayed nuclei.',
    example: 'For the same N, a larger k gives a larger activity.'
  },
  {
    id: 'rnf-6',
    name: 'Corrected Count Rate',
    nameCN: 'Corrected count rate',
    expression: 'corrected count = measured count - background count',
    variables: [],
    description: 'Always subtract background before using count data.',
    example: 'If measured = 528 cpm and background = 56 cpm, corrected = 472 cpm.'
  },
  {
    id: 'rnf-7',
    name: 'Carbon-14 Dating',
    nameCN: 'Carbon-14 dating',
    expression: 'C = C0 (1/2)^(t / 5730 years)',
    variables: [],
    description: 'Used for dating wood and biological remains.',
    example: 'If count falls to one quarter, age is about 11460 years.'
  },
  {
    id: 'rnf-8',
    name: 'Nuclear Equation Balance',
    nameCN: 'Nuclear equation balance',
    expression: 'total mass number A and total atomic number Z are both conserved',
    variables: [],
    description: 'Basic rule for all decay and reaction equations.',
    example: 'Balance both A and Z on left and right sides.'
  },
  {
    id: 'rnf-9',
    name: 'Alpha Decay Change',
    nameCN: 'Alpha decay change',
    expression: 'A -> A - 4, Z -> Z - 2',
    variables: [],
    description: 'Mass number falls by 4 and atomic number falls by 2.',
    example: 'U-238 alpha decay gives Th-234.'
  },
  {
    id: 'rnf-10',
    name: 'Beta-minus Decay Change',
    nameCN: 'Beta-minus decay change',
    expression: 'A unchanged, Z -> Z + 1',
    variables: [],
    description: 'A neutron becomes a proton in beta-minus decay.',
    example: 'Th-234 beta decay gives Pa-234.'
  },
  {
    id: 'rnf-11',
    name: 'Gamma Emission Change',
    nameCN: 'Gamma emission change',
    expression: 'A unchanged, Z unchanged',
    variables: [],
    description: 'Gamma emission changes energy state only.',
    example: 'Gamma emission does not change the nuclide symbol.'
  },
  {
    id: 'rnf-12',
    name: 'Mass-Energy Relation',
    nameCN: 'Mass-energy relation',
    expression: 'E = Delta m c^2',
    variables: [],
    description: 'Energy released from mass defect.',
    example: 'A small mass loss gives a large energy release.'
  },
  {
    id: 'rnf-13',
    name: 'Atomic Mass Unit Conversion',
    nameCN: 'Atomic mass unit conversion',
    expression: '1 u = 931 MeV',
    variables: [],
    description: 'Direct conversion from mass defect in u to energy in MeV.',
    example: '0.018 u corresponds to 16.76 MeV.'
  },
  {
    id: 'rnf-14',
    name: 'Two-body Decay Momentum',
    nameCN: 'Two-body decay momentum',
    expression: 'p_daughter = p_particle and KE = p^2 / (2m)',
    variables: [],
    description: 'Used for kinetic-energy comparison in two-body decay.',
    example: 'For equal momentum, the lighter particle gets more kinetic energy.'
  },
  {
    id: 'rnf-15',
    name: 'Alpha Decay Kinetic-energy Ratio',
    nameCN: 'Alpha decay kinetic-energy ratio',
    expression: 'KE_alpha / KE_daughter = m_daughter / m_alpha',
    variables: [],
    description: 'Derived from momentum conservation in alpha decay.',
    example: 'For U-238 alpha decay, KE_daughter / KE_alpha = 4 / 234.'
  },
  {
    id: 'rnf-16',
    name: 'Fusion and Fission Identification',
    nameCN: 'Fusion and fission identification',
    expression: 'fusion: small nuclei combine; fission: heavy nucleus splits',
    variables: [],
    description: 'Used to classify nuclear-energy reactions.',
    example: 'D + T -> He + n is fusion; U-235 + n -> fragments + neutrons is fission.'
  },
  {
    id: 'rnf-17',
    name: 'Power from Mass Loss',
    nameCN: 'Power from mass loss',
    expression: 'P = Delta E / Delta t = Delta m c^2 / Delta t',
    variables: [],
    description: 'Used for star and Sun power questions.',
    example: 'Convert mass loss to energy, then divide by time.'
  }
];

export const RADIATION_NUCLEAR_CHAPTERS: Chapter[] = RADIATION_NUCLEAR_SECTIONS.map((section, index) => ({
  id: `rn-ch${index + 1}`,
  title: section.name,
  titleCN: section.nameCN,
  concepts: [],
  formulas: RADIATION_NUCLEAR_FORMULAS,
  exercises: RADIATION_NUCLEAR_EXERCISES.filter((exercise) => exercise.sectionId === section.id),
  simulations: [],
  completed: false,
}));
