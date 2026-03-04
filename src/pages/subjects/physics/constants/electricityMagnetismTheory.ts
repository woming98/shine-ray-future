import { Chapter, Formula } from '../types';
import { ELECTRICITY_MAGNETISM_EXERCISES } from './electricityMagnetism';
import { ELECTRICITY_MAGNETISM_SECTIONS } from './electricityMagnetismSections';

export const ELECTRICITY_MAGNETISM_FORMULAS: Formula[] = [
  {
    id: 'emf-1',
    name: 'Ohm\'s Law',
    nameCN: '欧姆定律',
    expression: 'V = IR',
    variables: [
      { symbol: 'V', name: 'potential difference', unit: 'V', description: '电压' },
      { symbol: 'I', name: 'current', unit: 'A', description: '电流' },
      { symbol: 'R', name: 'resistance', unit: 'ohm', description: '电阻' }
    ],
    description: '电路、家居用电和交流电题中最常用的基本关系。',
    example: 'If I = 0.50 A and R = 24 ohm, then V = 12 V.'
  },
  {
    id: 'emf-2',
    name: 'Electrical Power',
    nameCN: '电功率',
    expression: 'P = VI = I^2R = V^2/R',
    variables: [
      { symbol: 'P', name: 'power', unit: 'W', description: '功率' },
      { symbol: 'V', name: 'potential difference', unit: 'V', description: '电压' },
      { symbol: 'I', name: 'current', unit: 'A', description: '电流' },
      { symbol: 'R', name: 'resistance', unit: 'ohm', description: '电阻' }
    ],
    description: '用于额定值、发热、输电损耗和家电功率计算。',
    example: 'A 12 V, 24 W lamp draws I = P / V = 2 A.'
  },
  {
    id: 'emf-3',
    name: 'Electrical Energy',
    nameCN: '电能',
    expression: 'E = Pt = VIt',
    variables: [
      { symbol: 'E', name: 'energy', unit: 'J', description: '电能' },
      { symbol: 'P', name: 'power', unit: 'W', description: '功率' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' }
    ],
    description: '用于用电量、热效应和总能量转化。',
    example: 'A 100 W device running for 60 s uses 6000 J.'
  },
  {
    id: 'emf-4',
    name: 'Series Resistance',
    nameCN: '串联电阻',
    expression: 'R_total = R1 + R2 + ...',
    variables: [
      { symbol: 'R_total', name: 'equivalent resistance', unit: 'ohm', description: '总电阻' }
    ],
    description: '用于串联灯泡、电缆与负载串联、导线总阻值题。',
    example: 'If 2 ohm and 4 ohm are in series, R_total = 6 ohm.'
  },
  {
    id: 'emf-5',
    name: 'Parallel Resistance',
    nameCN: '并联电阻',
    expression: '1 / R_total = 1 / R1 + 1 / R2 + ...',
    variables: [
      { symbol: 'R_total', name: 'equivalent resistance', unit: 'ohm', description: '总电阻' }
    ],
    description: '用于并联灯泡、分流和等效电阻计算。',
    example: 'Two identical 6 ohm resistors in parallel give 3 ohm.'
  },
  {
    id: 'emf-6',
    name: 'Potential Divider',
    nameCN: '分压关系',
    expression: 'V1 / V2 = R1 / R2',
    variables: [
      { symbol: 'V1', name: 'voltage across R1', unit: 'V', description: 'R1 上电压' },
      { symbol: 'V2', name: 'voltage across R2', unit: 'V', description: 'R2 上电压' }
    ],
    description: '用于可变电阻、分压器、CRO 输入和抽头电压题。',
    example: 'If R1 : R2 = 1 : 2, then V1 : V2 = 1 : 2.'
  },
  {
    id: 'emf-7',
    name: 'Coulomb\'s Law',
    nameCN: '库仑定律',
    expression: 'F = k|Q1Q2| / r^2',
    variables: [
      { symbol: 'F', name: 'electrostatic force', unit: 'N', description: '静电力' },
      { symbol: 'Q1,Q2', name: 'charges', unit: 'C', description: '电荷量' },
      { symbol: 'r', name: 'distance', unit: 'm', description: '间距' }
    ],
    description: '静电学题中的核心定量关系。',
    example: 'Doubling r reduces F to one quarter.'
  },
  {
    id: 'emf-8',
    name: 'Electric Field Strength',
    nameCN: '电场强度',
    expression: 'E = F / q',
    variables: [
      { symbol: 'E', name: 'electric field strength', unit: 'N C^-1', description: '电场强度' },
      { symbol: 'F', name: 'force', unit: 'N', description: '受力' },
      { symbol: 'q', name: 'charge', unit: 'C', description: '电荷' }
    ],
    description: '用于电场方向与带电粒子受力。',
    example: 'If q = 2 C and F = 6 N, then E = 3 N C^-1.'
  },
  {
    id: 'emf-9',
    name: 'Uniform Field Between Plates',
    nameCN: '平行板匀强电场',
    expression: 'E = V / d',
    variables: [
      { symbol: 'V', name: 'potential difference', unit: 'V', description: '板间电压' },
      { symbol: 'd', name: 'plate separation', unit: 'm', description: '板间距' }
    ],
    description: '用于平行板、电容和电子束偏转题。',
    example: 'If V = 200 V and d = 0.02 m, then E = 1.0 x 10^4 V m^-1.'
  },
  {
    id: 'emf-10',
    name: 'Transformer Voltage Ratio',
    nameCN: '变压器电压比',
    expression: 'Vp / Vs = Np / Ns',
    variables: [
      { symbol: 'Vp, Vs', name: 'primary and secondary voltages', unit: 'V', description: '原副线圈电压' },
      { symbol: 'Np, Ns', name: 'turn numbers', unit: '-', description: '原副线圈匝数' }
    ],
    description: '交流电和输电题里最常用的变压器关系。',
    example: 'If Np : Ns = 20 : 1 and Vp = 200 V, then Vs = 10 V.'
  },
  {
    id: 'emf-11',
    name: 'Ideal Transformer Power',
    nameCN: '理想变压器功率守恒',
    expression: 'VpIp = VsIs',
    variables: [
      { symbol: 'Ip, Is', name: 'primary and secondary currents', unit: 'A', description: '原副线圈电流' }
    ],
    description: '理想变压器中输入功率等于输出功率。',
    example: 'If Vp = 220 V, Vs = 11 V and Is = 2 A, then Ip = 0.1 A.'
  },
  {
    id: 'emf-12',
    name: 'Transformer Efficiency',
    nameCN: '变压器效率',
    expression: 'eta = P_out / P_in',
    variables: [
      { symbol: 'eta', name: 'efficiency', unit: '-', description: '效率' },
      { symbol: 'P_out', name: 'output power', unit: 'W', description: '输出功率' },
      { symbol: 'P_in', name: 'input power', unit: 'W', description: '输入功率' }
    ],
    description: '用于已知效率求原线圈电流、输出功率或最大负载数。',
    example: 'If eta = 0.8 and P_out = 80 W, then P_in = 100 W.'
  },
  {
    id: 'emf-13',
    name: 'Transmission Loss',
    nameCN: '输电损耗',
    expression: 'P_loss = I^2R',
    variables: [
      { symbol: 'I', name: 'cable current', unit: 'A', description: '输电电流' },
      { symbol: 'R', name: 'cable resistance', unit: 'ohm', description: '电缆总电阻' }
    ],
    description: '高压输电题的核心：提高电压可减小 I，从而降低损耗。',
    example: 'If I = 20 A and cable resistance is 0.2 ohm, then P_loss = 80 W.'
  },
  {
    id: 'emf-14',
    name: 'Motional E.M.F.',
    nameCN: '导体切割磁感线感应电动势',
    expression: 'epsilon = B l v',
    variables: [
      { symbol: 'B', name: 'flux density', unit: 'T', description: '磁感应强度' },
      { symbol: 'l', name: 'effective length', unit: 'm', description: '切割长度' },
      { symbol: 'v', name: 'speed', unit: 'm s^-1', description: '速度' }
    ],
    description: '用于导体棒在磁场中运动的感应电动势题。若速度与导体夹角变化，应取垂直分量。',
    example: 'If B = 0.5 T, l = 0.2 m, v = 4 m s^-1, then epsilon = 0.4 V.'
  },
  {
    id: 'emf-15',
    name: 'Faraday\'s Law',
    nameCN: '法拉第电磁感应定律',
    expression: 'epsilon = Delta(N Phi) / Delta t',
    variables: [
      { symbol: 'N', name: 'number of turns', unit: '-', description: '线圈匝数' },
      { symbol: 'Phi', name: 'magnetic flux', unit: 'Wb', description: '磁通量' },
      { symbol: 't', name: 'time', unit: 's', description: '时间' }
    ],
    description: '用于线圈磁通变化、搜索线圈、发电机、电磁感应题。',
    example: 'If flux linkage changes by 0.12 Wb-turn in 0.02 s, epsilon = 6 V.'
  },
  {
    id: 'emf-16',
    name: 'Magnetic Flux',
    nameCN: '磁通量',
    expression: 'Phi = BA cos theta',
    variables: [
      { symbol: 'B', name: 'flux density', unit: 'T', description: '磁感应强度' },
      { symbol: 'A', name: 'area', unit: 'm^2', description: '面积' },
      { symbol: 'theta', name: 'angle between field and normal', unit: 'deg', description: '磁场与法线夹角' }
    ],
    description: '用于转动线圈、磁通变化和放射/核能章节中的部分核磁通比较题。',
    example: 'If theta = 90 deg, then flux is zero.'
  },
  {
    id: 'emf-17',
    name: 'A.C. R.M.S. Voltage',
    nameCN: '交流有效值',
    expression: 'V_rms = V0 / sqrt(2)',
    variables: [
      { symbol: 'V_rms', name: 'r.m.s. voltage', unit: 'V', description: '有效值' },
      { symbol: 'V0', name: 'peak voltage', unit: 'V', description: '峰值电压' }
    ],
    description: '交流电压、加热功率、示波器题的核心换算。',
    example: 'If V_rms = 110 V, then V0 = 156 V.'
  },
  {
    id: 'emf-18',
    name: 'A.C. Frequency',
    nameCN: '频率与周期',
    expression: 'f = 1 / T',
    variables: [
      { symbol: 'f', name: 'frequency', unit: 'Hz', description: '频率' },
      { symbol: 'T', name: 'period', unit: 's', description: '周期' }
    ],
    description: '用于 CRO 波形题和交流源频率计算。',
    example: 'If T = 0.04 s, then f = 25 Hz.'
  }
];

export const ELECTRICITY_MAGNETISM_CHAPTERS: Chapter[] = ELECTRICITY_MAGNETISM_SECTIONS.map((section, index) => ({
  id: `em-ch${index + 1}`,
  title: section.name,
  titleCN: section.nameCN,
  concepts: [],
  formulas: ELECTRICITY_MAGNETISM_FORMULAS,
  exercises: ELECTRICITY_MAGNETISM_EXERCISES.filter((exercise) => exercise.sectionId === section.id),
  simulations: [],
  completed: false,
}));
