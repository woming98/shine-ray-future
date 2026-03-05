import { Chapter, Formula } from '../types';
import { ASTRONOMY_SPACE_EXERCISES } from './astronomySpace';
import { ASTRONOMY_SPACE_SECTIONS } from './astronomySpaceSections';

export const ASTRONOMY_SPACE_FORMULAS: Formula[] = [
  {
    id: 'asf-1',
    name: 'Astronomical Unit',
    nameCN: 'Astronomical unit',
    expression: '1 AU = 1.50 x 10^11 m',
    variables: [],
    description: 'Used for Solar System distance conversions.',
    example: 'A planet at 30 AU is 4.5 x 10^12 m from the Sun.'
  },
  {
    id: 'asf-2',
    name: 'Light Year',
    nameCN: 'Light year',
    expression: '1 ly = 9.46 x 10^15 m',
    variables: [],
    description: 'Used for stellar and galactic scale distances.',
    example: 'A star 8.6 ly away is about 8.14 x 10^16 m away.'
  },
  {
    id: 'asf-3',
    name: 'Light Travel Time',
    nameCN: 'Light travel time',
    expression: 't = d / c',
    variables: [
      { symbol: 't', name: 'time', unit: 's', description: 'travel time' },
      { symbol: 'd', name: 'distance', unit: 'm', description: 'distance travelled by light' },
      { symbol: 'c', name: 'speed of light', unit: 'm s^-1', description: '3.0 x 10^8 m s^-1' }
    ],
    description: 'Convert astronomical distance to light seconds or light minutes.',
    example: 'If d = 7.26 x 10^11 m, then t = 2420 s = 40.3 min.'
  },
  {
    id: 'asf-4',
    name: 'Inverse-Square Brightness',
    nameCN: 'Inverse-square brightness',
    expression: 'I proportional to 1 / r^2',
    variables: [],
    description: 'Apparent brightness decreases with distance squared.',
    example: 'Doubling distance reduces brightness to one quarter.'
  },
  {
    id: 'asf-5',
    name: 'Galaxy Volume Approximation',
    nameCN: 'Galaxy volume approximation',
    expression: 'V = pi r^2 t',
    variables: [],
    description: 'Treat a disc galaxy as a cylinder for order-of-magnitude estimates.',
    example: 'A galaxy with radius 5 x 10^4 ly and thickness 10^3 ly has V about 7.85 x 10^12 ly^3.'
  },
  {
    id: 'asf-6',
    name: 'Average Separation Estimate',
    nameCN: 'Average separation estimate',
    expression: 'N s^3 about V',
    variables: [],
    description: 'Estimate average star spacing by assigning each star an average cube of volume.',
    example: 'If V = 7.85 x 10^12 ly^3 and N = 10^11, then s about 4.3 ly.'
  }
];

export const ASTRONOMY_SPACE_CHAPTERS: Chapter[] = ASTRONOMY_SPACE_SECTIONS.map((section, index) => ({
  id: `as-ch${index + 1}`,
  title: section.name,
  titleCN: section.nameCN,
  concepts: [],
  formulas: ASTRONOMY_SPACE_FORMULAS,
  exercises: ASTRONOMY_SPACE_EXERCISES.filter((exercise) => exercise.sectionId === section.id),
  simulations: [],
  completed: false,
}));
