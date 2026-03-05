export interface AtomicWorldSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

export const ATOMIC_WORLD_SECTIONS: AtomicWorldSection[] = [
  {
    id: 'atomic-world',
    name: 'Atomic World',
    nameCN: '原子世界',
    description: 'Photons, photoelectric effect, and introductory quantum ideas',
  },
];
