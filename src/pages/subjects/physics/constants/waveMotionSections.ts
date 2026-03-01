/**
 * Wave Motion / Optics sections used by the exercise UI.
 */

export interface WaveMotionSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

export const WAVE_MOTION_SECTIONS: WaveMotionSection[] = [
  {
    id: 'optics-propagation',
    name: 'Propagation of Light',
    nameCN: '光的传播',
    description: 'Basic wave motion, propagation, and simple optical behavior',
  },
  {
    id: 'wave-phenomena',
    name: 'Wave Phenomena',
    nameCN: '波动现象',
    description: 'Reflection, refraction, interference, and stationary waves',
  },
  {
    id: 'reflection-refraction',
    name: 'Reflection and Refraction of Light',
    nameCN: '光的反射与折射',
    description: 'Plane reflection, refraction, critical angle, and total internal reflection',
  },
  {
    id: 'lens',
    name: 'Lens',
    nameCN: '透镜',
    description: 'Image formation by convex and concave lenses',
  },
  {
    id: 'wave-nature-of-light',
    name: 'Wave Nature of Light',
    nameCN: '光的波动性',
    description: 'Electromagnetic spectrum and wave behavior of light',
  },
];
