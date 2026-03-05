/**
 * Temperature and Gas 的子板块定义
 */

export interface TemperatureGasSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

export const TEMPERATURE_GAS_SECTIONS: TemperatureGasSection[] = [
  {
    id: 'temp-heat-internal',
    name: 'Temperature, Heat and Internal Energy',
    nameCN: '温度、热、內能',
    description: 'Temperature scales, heat capacity, internal energy, latent heat',
  },
  {
    id: 'change-of-state',
    name: 'Change of State',
    nameCN: '物态变化',
    description: 'Latent heat, melting/freezing, boiling/condensation, heating/cooling curves',
  },
  {
    id: 'general-gas-law',
    name: 'General Gas Law',
    nameCN: '普通气体定律',
    description: 'Boyle’s law, Charles’ law, pressure law and ideal gas equation',
  },
  {
    id: 'kinetic-theory',
    name: 'Kinetic Theory',
    nameCN: '分子运动论',
    description: 'Brownian motion, kinetic model assumptions and r.m.s. speed',
  },
  {
    id: 'transfer-processes',
    name: 'Transfer Processes',
    nameCN: '热转移过程',
    description: 'Conduction, convection and radiation; reducing heat loss',
  },
];
