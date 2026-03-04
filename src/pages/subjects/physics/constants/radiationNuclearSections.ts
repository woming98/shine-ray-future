export interface RadiationNuclearSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

export const RADIATION_NUCLEAR_SECTIONS: RadiationNuclearSection[] = [
  {
    id: 'radiation-radioactivity',
    name: 'Radiation and Radioactivity',
    nameCN: '辐射与放射性',
    description: 'Types of nuclear radiation, decay, half-life, and radioactivity',
  },
  {
    id: 'atomic-model',
    name: 'Atomic Model',
    nameCN: '原子模型',
    description: 'Atomic structure, isotopes, and nuclear equations',
  },
  {
    id: 'nuclear-energy',
    name: 'Nuclear Energy',
    nameCN: '核能',
    description: 'Nuclear reactions, fission, fusion, and energy release',
  },
];

