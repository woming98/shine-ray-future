/**
 * M2 知识点数据
 */

import { KnowledgePoint } from '../types';
import knowledgeJson from '../../../../../data/m2/trig/knowledge.json';

// 知识点数据
export const knowledgePoints: KnowledgePoint[] = 
  (knowledgeJson as any).knowledgePoints || [];

// 根据 ID 查找知识点
export const getKnowledgePointById = (id: string): KnowledgePoint | undefined => {
  return knowledgePoints.find(kp => kp.id === id);
};

// 根据多个 ID 查找知识点
export const getKnowledgePointsByIds = (ids: string[]): KnowledgePoint[] => {
  return knowledgePoints.filter(kp => ids.includes(kp.id));
};
