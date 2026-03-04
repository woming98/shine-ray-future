import { Chapter, Formula } from '../types';
import { ATOMIC_WORLD_EXERCISES } from './atomicWorld';
import { ATOMIC_WORLD_SECTIONS } from './atomicWorldSections';

export const ATOMIC_WORLD_FORMULAS: Formula[] = [
  {
    id: 'awf-1',
    name: 'Photon Energy',
    nameCN: 'Photon energy',
    expression: 'E = hf = hc / lambda',
    variables: [
      { symbol: 'E', name: 'photon energy', unit: 'J or eV', description: 'energy of one photon' },
      { symbol: 'h', name: 'Planck constant', unit: 'J s', description: '6.63 x 10^-34 J s' },
      { symbol: 'f', name: 'frequency', unit: 'Hz', description: 'frequency of light' },
      { symbol: 'lambda', name: 'wavelength', unit: 'm', description: 'wavelength of light' }
    ],
    description: 'Core relation for photon, wavelength and frequency questions.',
    example: 'A 10 eV photon has wavelength about 1.24 x 10^-7 m.'
  },
  {
    id: 'awf-2',
    name: 'Photoelectric Equation',
    nameCN: 'Photoelectric equation',
    expression: 'hf = phi + K_max',
    variables: [],
    description: 'Einstein photoelectric relation for threshold and stopping potential questions.',
    example: 'If photon energy is 7 eV and K_max is 4 eV, then phi = 3 eV.'
  },
  {
    id: 'awf-3',
    name: 'Stopping Potential',
    nameCN: 'Stopping potential',
    expression: 'K_max = e V_s',
    variables: [],
    description: 'Convert maximum kinetic energy into stopping potential.',
    example: 'If K_max = 0.9 eV, then V_s = 0.9 V.'
  },
  {
    id: 'awf-4',
    name: 'Threshold Frequency',
    nameCN: 'Threshold frequency',
    expression: 'phi = h f_0',
    variables: [],
    description: 'Minimum frequency needed to emit photoelectrons.',
    example: 'If f is below f_0, no photoelectric current is observed.'
  },
  {
    id: 'awf-5',
    name: 'Photoelectric Current',
    nameCN: 'Photoelectric current',
    expression: 'i = n e / t',
    variables: [],
    description: 'Used when relating emitted electron rate to current.',
    example: 'Doubling emitted electrons per second doubles current.'
  },
  {
    id: 'awf-6',
    name: 'Light Power and Photon Rate',
    nameCN: 'Light power and photon rate',
    expression: 'P = N E / t',
    variables: [],
    description: 'Relates intensity or power to number of photons per second.',
    example: 'For fixed power, doubling photon energy halves photon rate.'
  },
  {
    id: 'awf-7',
    name: 'Wave Speed',
    nameCN: 'Wave speed',
    expression: 'c = f lambda',
    variables: [],
    description: 'Useful when converting wavelength and frequency.',
    example: 'Visible light in vacuum always obeys c = f lambda.'
  }
];

export const ATOMIC_WORLD_CHAPTERS: Chapter[] = ATOMIC_WORLD_SECTIONS.map((section, index) => ({
  id: `aw-ch${index + 1}`,
  title: section.name,
  titleCN: section.nameCN,
  concepts: [],
  formulas: ATOMIC_WORLD_FORMULAS,
  exercises: ATOMIC_WORLD_EXERCISES.filter((exercise) => exercise.sectionId === section.id),
  simulations: [],
  completed: false,
}));
