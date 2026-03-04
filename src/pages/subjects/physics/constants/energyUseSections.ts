export interface EnergyUseSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

export const ENERGY_USE_SECTIONS: EnergyUseSection[] = [
  {
    id: 'energy-and-use-of-energy',
    name: 'Energy and Use of Energy',
    nameCN: 'Energy and Use of Energy',
    description: 'Illuminance, efficiency, heat pumps, and practical energy use',
  },
];
