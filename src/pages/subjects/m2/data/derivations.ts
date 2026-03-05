/**
 * M2 公式推导数据
 */

import { Derivation } from '../types';
// 暂时使用空数组，后续可以从 JSON 加载
// import derivationsJson from '../../../../data/m2/trig/derivations.json';

// 推导数据
export const derivations: Derivation[] = [];
// 后续可以改为：
// export const derivations: Derivation[] = (derivationsJson as any).derivations || [];

// 根据 ID 查找推导
export const getDerivationById = (id: string): Derivation | undefined => {
  return derivations.find(d => d.id === id);
};

// 根据多个 ID 查找推导
export const getDerivationsByIds = (ids: string[]): Derivation[] => {
  return derivations.filter(d => ids.includes(d.id));
};
