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
];

