export interface PhysicsCurriculumSection {
  id: string
  title: string
  titleCN: string
}

export interface PhysicsCurriculumTopic {
  id: string
  title: string
  titleCN: string
  sections: PhysicsCurriculumSection[]
}

export const PHYSICS_CURRICULUM: PhysicsCurriculumTopic[] = [
  {
    id: 'temperature-gas',
    title: 'Temperature and Gas',
    titleCN: '温度与气体',
    sections: [
      { id: 'temp-heat-internal', title: 'Temperature, Heat and Internal Energy', titleCN: '温度、热、內能' },
      { id: 'transfer-processes', title: 'Transfer Processes', titleCN: '热转移过程' },
      { id: 'general-gas-law', title: 'General Gas Law', titleCN: '普通气体定律' },
      { id: 'kinetic-theory', title: 'Kinetic Theory', titleCN: '分子运动论' },
    ],
  },
  {
    id: 'force-motion',
    title: 'Force and Motion',
    titleCN: '力学与运动',
    sections: [
      { id: 'position-movement', title: 'Position and Movement', titleCN: '位置和移动' },
      { id: 'newton-laws', title: "Newton's Laws", titleCN: '牛顿定律' },
      { id: 'moment-force', title: 'Moment of Force', titleCN: '力矩' },
      { id: 'work-energy-power', title: 'Work, Energy and Power', titleCN: '作功、能量和功率' },
      { id: 'momentum', title: 'Momentum', titleCN: '动量' },
      { id: 'projectile-motion', title: 'Projectile Motion', titleCN: '抛体运动' },
      { id: 'circular-motion', title: 'Circular Motion', titleCN: '圆周运动' },
      { id: 'gravitation', title: 'Gravitation', titleCN: '引力' },
    ],
  },
  {
    id: 'wave-motion',
    title: 'Wave Motion',
    titleCN: '波动',
    sections: [
      { id: 'wave-propagation', title: 'Wave Propagation', titleCN: '波的推进' },
      { id: 'wave-phenomena', title: 'Wave Phenomena', titleCN: '波现象' },
      { id: 'reflection-refraction', title: 'Reflection and Refraction of Light', titleCN: '光的反射与折射' },
      { id: 'lenses', title: 'Lenses', titleCN: '透镜' },
      { id: 'wave-nature-light', title: 'Wave Nature of Light', titleCN: '光的波动特性' },
      { id: 'sound', title: 'Sound', titleCN: '声音' },
    ],
  },
  {
    id: 'electricity-magnetism',
    title: 'Electricity and Magnetism',
    titleCN: '电与磁',
    sections: [
      { id: 'electrostatics', title: 'Electrostatics', titleCN: '静电学' },
      { id: 'electric-circuits', title: 'Electric Circuits', titleCN: '电路' },
      { id: 'domestic-electricity', title: 'Domestic Electricity', titleCN: '家居用电' },
      { id: 'magnetic-field', title: 'Magnetic Field', titleCN: '磁场' },
      { id: 'em-induction', title: 'Electromagnetic Induction', titleCN: '电磁感应' },
      { id: 'alternating-current', title: 'Alternating Current', titleCN: '交流电' },
    ],
  },
  {
    id: 'radioactivity-nuclear',
    title: 'Radioactivity and Nuclear Energy',
    titleCN: '放射现象和核能',
    sections: [
      { id: 'radiation-radioactivity', title: 'Radiation and Radioactivity', titleCN: '辐射和放射现象' },
      { id: 'atomic-model', title: 'Atomic Model', titleCN: '原子模型' },
      { id: 'nuclear-energy', title: 'Nuclear Energy', titleCN: '核能' },
    ],
  },
  {
    id: 'astronomy-space',
    title: 'Astronomy and Space Science',
    titleCN: '天文学与太空科学',
    sections: [
      { id: 'universe-scales', title: 'Universe at Different Scales', titleCN: '不同尺度下的宇宙' },
      { id: 'astronomy-history', title: 'Astronomy Through History', titleCN: '天文学发展史' },
      { id: 'orbital-motion', title: 'Orbital Motion Under Gravity', titleCN: '引力作用下的轨道运动' },
      { id: 'stars-universe', title: 'Stars and the Universe', titleCN: '恒星与宇宙' },
    ],
  },
  {
    id: 'atomic-world',
    title: 'Atomic World',
    titleCN: '原子世界',
    sections: [
      { id: 'rutherford-model', title: "Rutherford's Atomic Model", titleCN: '卢瑟福原子模型' },
      { id: 'photoelectric-effect', title: 'Photoelectric Effect', titleCN: '光电效应' },
      { id: 'bohr-model', title: "Bohr's Atomic Model of Hydrogen", titleCN: '氢原子的玻尔模型' },
      { id: 'particles-or-waves', title: 'Particles or Waves', titleCN: '粒子还是波' },
      { id: 'nano-scale', title: 'Probing into Nano Scale', titleCN: '纳米尺度探索' },
    ],
  },
  {
    id: 'energy-use',
    title: 'Energy and Use of Energy',
    titleCN: '能量及能量的使用',
    sections: [
      { id: 'electricity-at-home', title: 'Electricity at Home', titleCN: '家居用电' },
      { id: 'efficiency-building', title: 'Energy Efficiency in Building', titleCN: '建筑节能' },
      { id: 'efficiency-transport', title: 'Energy Efficiency in Transportation', titleCN: '交通节能' },
      { id: 'non-renewable', title: 'Non-renewable Energy Sources', titleCN: '不可再生能源' },
      { id: 'renewable', title: 'Renewable Energy Sources', titleCN: '可再生能源' },
    ],
  },
]

export const PHYSICS_TOTAL_SECTIONS = PHYSICS_CURRICULUM.reduce(
  (sum, topic) => sum + topic.sections.length,
  0
)
