/**
 * Electricity and Magnetism 的子板块定义
 */

export interface ElectricityMagnetismSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

export const ELECTRICITY_MAGNETISM_SECTIONS: ElectricityMagnetismSection[] = [
  {
    id: 'electrostatics',
    name: 'Electrostatics',
    nameCN: '静电学',
    description: 'Electric charge, Coulomb force, electric field, induction',
  },
];

