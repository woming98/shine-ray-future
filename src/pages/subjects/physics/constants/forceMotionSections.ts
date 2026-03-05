/**
 * Force and Motion 的8个子板块定义
 */

export interface ForceMotionSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

export const FORCE_MOTION_SECTIONS: ForceMotionSection[] = [
  {
    id: 'position-movement',
    name: 'Position and Movement',
    nameCN: '位置与运动',
    description: 'Position, distance, displacement, speed, velocity, acceleration',
  },
  {
    id: 'newton-laws',
    name: "Newton's Laws",
    nameCN: '牛顿定律',
    description: "Newton's first, second, and third laws of motion",
  },
  {
    id: 'moment-force',
    name: 'Moment of Force',
    nameCN: '力矩',
    description: 'Torque, moment, equilibrium, rotational motion',
  },
  {
    id: 'work-energy-power',
    name: 'Work, Energy and Power',
    nameCN: '功、能量与功率',
    description: 'Work done, kinetic energy, potential energy, power',
  },
  {
    id: 'momentum',
    name: 'Momentum',
    nameCN: '动量',
    description: 'Linear momentum, conservation of momentum, impulse',
  },
  {
    id: 'projectile-motion',
    name: 'Projectile Motion',
    nameCN: '抛体运动',
    description: 'Two-dimensional motion, parabolic trajectory',
  },
  {
    id: 'circular-motion',
    name: 'Circular Motion',
    nameCN: '圆周运动',
    description: 'Uniform circular motion, centripetal force, angular velocity',
  },
  {
    id: 'gravitation',
    name: 'Gravitation',
    nameCN: '万有引力',
    description: 'Universal gravitation, gravitational field, orbital motion',
  },
];
