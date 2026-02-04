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
    id: 'transfer-processes',
    name: 'Transfer Processes',
    nameCN: '热转移过程',
    description: 'Conduction, convection and radiation; reducing heat loss',
  },
];
