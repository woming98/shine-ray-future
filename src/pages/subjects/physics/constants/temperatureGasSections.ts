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
    name: '温度、热、內能',
    nameCN: '温度、热、內能',
    description: 'Temperature scales, heat capacity, internal energy, latent heat',
  },
  {
    id: 'change-of-state',
    name: '物态变化',
    nameCN: '物态变化',
    description: 'Latent heat, melting/freezing, boiling/condensation, heating/cooling curves',
  },
  {
    id: 'general-gas-law',
    name: '普通气体定律',
    nameCN: '普通气体定律',
    description: 'Boyle’s law, Charles’ law, pressure law and ideal gas equation',
  },
  {
    id: 'transfer-processes',
    name: '热转移过程',
    nameCN: '热转移过程',
    description: 'Conduction, convection and radiation; reducing heat loss',
  },
];
