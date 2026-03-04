/**
 * Electricity and Magnetism 子板块定义
 */

export interface ElectricityMagnetismSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

export const ELECTRICITY_MAGNETISM_SECTIONS: ElectricityMagnetismSection[] = [
  {
    id: 'electric-circuits',
    name: 'Electric Circuits',
    nameCN: '电路',
    description: 'Potential difference, current, resistance, and power in circuits',
  },
  {
    id: 'domestic-electricity',
    name: 'Domestic Electricity',
    nameCN: '家居用电',
    description: 'Fuses, ratings, household safety, and power use in daily appliances',
  },
  {
    id: 'electrostatics',
    name: 'Electrostatics',
    nameCN: '静电学',
    description: 'Electric charge, Coulomb force, electric field, induction',
  },
  {
    id: 'magnetic-field',
    name: 'Magnetic Field',
    nameCN: '磁场',
    description: 'Magnetic effects, field direction, force on charges, and electromagnets',
  },
  {
    id: 'electromagnetic-induction',
    name: 'Electromagnetic Induction',
    nameCN: '电磁感应',
    description: 'Generators, induced current, flux change, and induction effects',
  },
  {
    id: 'alternating-current',
    name: 'Alternating Current',
    nameCN: '交流电',
    description: 'Transformers, transmission, a.c. supply, and power conversion',
  },
];
