/**
 * 学校数据接口定义
 */
export interface School {
  id: string;
  name: string;
  nameEn: string;
  type: 'international' | 'dss' | 'government';
  district: string;
  address: string;
  website: string;
  phone: string;
  email: string;
  ranking: number;
  founded: number;
  students: number;
  teachers: number;
  tuition: string;
  curriculum: string[];
  languages: string[];
  facilities: string[];
  description: string;
  coordinates: { lat: number; lng: number };
  nearbyRent: {
    average: number;
    trend: 'up' | 'down' | 'stable';
  };
  transport: {
    mtr: string[];
    bus: string[];
    minibus: string[];
  };
  rating: number;
  reviews: number;
}

/**
 * 香港学校数据
 * 包含国际学校、直资学校和官立学校
 */
export const schoolsData: School[] = [
  // 国际学校
  {
    id: 'int-001',
    name: '香港国际学校',
    nameEn: 'Hong Kong International School',
    type: 'international',
    district: '浅水湾',
    address: '香港南区浅水湾道6号',
    website: 'https://www.hkis.edu.hk',
    phone: '+852 2812 5000',
    email: 'admissions@hkis.edu.hk',
    ranking: 1,
    founded: 1966,
    students: 2800,
    teachers: 350,
    tuition: 'HKD 198,000 - 245,000/年',
    curriculum: ['American', 'AP'],
    languages: ['英语', '中文'],
    facilities: ['游泳池', '体育馆', '图书馆', '艺术中心', '科学实验室'],
    description: '香港国际学校是香港历史最悠久的国际学校之一，提供美式课程，培养学生的全球视野和领导力。',
    coordinates: { lat: 22.2388, lng: 114.1818 },
    nearbyRent: { average: 45000, trend: 'stable' },
    transport: {
      mtr: ['海洋公园站'],
      bus: ['6', '6A', '6X', '66'],
      minibus: ['52']
    },
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'int-002',
    name: '英基学校协会',
    nameEn: 'English Schools Foundation',
    type: 'international',
    district: '薄扶林',
    address: '香港薄扶林道25号',
    website: 'https://www.esf.edu.hk',
    phone: '+852 2574 2351',
    email: 'info@esf.edu.hk',
    ranking: 2,
    founded: 1967,
    students: 17000,
    teachers: 1500,
    tuition: 'HKD 133,800 - 163,500/年',
    curriculum: ['IB', 'IGCSE'],
    languages: ['英语', '中文', '法语'],
    facilities: ['图书馆', '体育设施', '音乐室', '科学实验室'],
    description: 'ESF是香港最大的国际学校机构，在全港设有22所学校，提供优质的国际教育。',
    coordinates: { lat: 22.2729, lng: 114.1362 },
    nearbyRent: { average: 38000, trend: 'up' },
    transport: {
      mtr: ['香港大学站'],
      bus: ['3', '40', '40M'],
      minibus: ['8', '22']
    },
    rating: 4.7,
    reviews: 203
  },
  {
    id: 'int-003',
    name: '德瑞国际学校',
    nameEn: 'German Swiss International School',
    type: 'international',
    district: '太平山',
    address: '香港山顶侨福道11号',
    website: 'https://www.gsis.edu.hk',
    phone: '+852 2849 6216',
    email: 'enquiry@gsis.edu.hk',
    ranking: 3,
    founded: 1969,
    students: 1500,
    teachers: 200,
    tuition: 'HKD 168,000 - 225,000/年',
    curriculum: ['IB', 'German Abitur'],
    languages: ['英语', '德语', '中文'],
    facilities: ['室内运动场', '游泳池', '图书馆', '艺术工作室'],
    description: '德瑞国际学校提供德语和英语双语教学，是香港顶尖的国际学校之一。',
    coordinates: { lat: 22.2700, lng: 114.1500 },
    nearbyRent: { average: 55000, trend: 'stable' },
    transport: {
      mtr: ['中环站'],
      bus: ['15', '15B'],
      minibus: ['1']
    },
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'int-004',
    name: '汉基国际学校',
    nameEn: 'Chinese International School',
    type: 'international',
    district: '北角',
    address: '香港北角宝马山校园径1号',
    website: 'https://www.cis.edu.hk',
    phone: '+852 2510 7288',
    email: 'admission@cis.edu.hk',
    ranking: 4,
    founded: 1983,
    students: 1500,
    teachers: 180,
    tuition: 'HKD 195,000 - 235,000/年',
    curriculum: ['IB'],
    languages: ['英语', '普通话'],
    facilities: ['图书馆', '体育馆', '音乐厅', '科学实验室', '艺术中心'],
    description: '汉基国际学校以中英双语教学闻名，提供完整的IB课程体系。',
    coordinates: { lat: 22.2880, lng: 114.1980 },
    nearbyRent: { average: 32000, trend: 'up' },
    transport: {
      mtr: ['�的后站', '北角站'],
      bus: ['25', '27'],
      minibus: ['49M']
    },
    rating: 4.8,
    reviews: 124
  },
  // 直资学校
  {
    id: 'dss-001',
    name: '拔萃男书院',
    nameEn: "Diocesan Boys' School",
    type: 'dss',
    district: '旺角',
    address: '九龙旺角亚皆老街131号',
    website: 'https://www.dbs.edu.hk',
    phone: '+852 2711 5191',
    email: 'info@dbs.edu.hk',
    ranking: 1,
    founded: 1869,
    students: 1450,
    teachers: 120,
    tuition: 'HKD 46,500/年',
    curriculum: ['DSE', 'IB'],
    languages: ['英语', '中文'],
    facilities: ['游泳池', '体育馆', '图书馆', '礼堂', '实验室'],
    description: '拔萃男书院是香港最顶尖的男校之一，以优秀的学术成绩和全面发展著称。',
    coordinates: { lat: 22.3238, lng: 114.1683 },
    nearbyRent: { average: 28000, trend: 'stable' },
    transport: {
      mtr: ['旺角站', '旺角东站'],
      bus: ['2', '2A', '2X'],
      minibus: ['27M', '28M']
    },
    rating: 4.9,
    reviews: 287
  },
  {
    id: 'dss-002',
    name: '拔萃女书院',
    nameEn: "Diocesan Girls' School",
    type: 'dss',
    district: '佐敦',
    address: '九龙佐敦道1号',
    website: 'https://www.dgs.edu.hk',
    phone: '+852 2277 9100',
    email: 'info@dgs.edu.hk',
    ranking: 2,
    founded: 1860,
    students: 1300,
    teachers: 110,
    tuition: 'HKD 38,000/年',
    curriculum: ['DSE', 'IB'],
    languages: ['英语', '中文'],
    facilities: ['游泳池', '体育馆', '图书馆', '音乐厅', '实验室'],
    description: '拔萃女书院是香港历史悠久的名校，培养了众多杰出女性人才。',
    coordinates: { lat: 22.3048, lng: 114.1695 },
    nearbyRent: { average: 30000, trend: 'up' },
    transport: {
      mtr: ['佐敦站'],
      bus: ['6', '9', '12'],
      minibus: ['6', '8']
    },
    rating: 4.9,
    reviews: 234
  },
  {
    id: 'dss-003',
    name: '圣保罗男女中学',
    nameEn: "St. Paul's Co-educational College",
    type: 'dss',
    district: '中西区',
    address: '香港麦当劳道33号',
    website: 'https://www.spcc.edu.hk',
    phone: '+852 2523 1187',
    email: 'info@spcc.edu.hk',
    ranking: 3,
    founded: 1915,
    students: 1200,
    teachers: 100,
    tuition: 'HKD 63,000/年',
    curriculum: ['DSE', 'IB'],
    languages: ['英语', '中文'],
    facilities: ['体育馆', '图书馆', '音乐室', '实验室', '艺术室'],
    description: '圣保罗男女中学是香港顶级直资学校，以全人教育和优异成绩闻名。',
    coordinates: { lat: 22.2760, lng: 114.1580 },
    nearbyRent: { average: 42000, trend: 'stable' },
    transport: {
      mtr: ['金钟站'],
      bus: ['12A', '12M', '40'],
      minibus: ['10', '31']
    },
    rating: 4.8,
    reviews: 198
  },
  {
    id: 'dss-004',
    name: '协恩中学',
    nameEn: 'Heep Yunn School',
    type: 'dss',
    district: '九龙城',
    address: '九龙九龙城农圃道1号',
    website: 'https://www.hyc.edu.hk',
    phone: '+852 2711 0862',
    email: 'info@hyc.edu.hk',
    ranking: 4,
    founded: 1936,
    students: 1100,
    teachers: 95,
    tuition: 'HKD 31,570/年',
    curriculum: ['DSE'],
    languages: ['英语', '中文'],
    facilities: ['体育馆', '图书馆', '音乐室', '实验室'],
    description: '协恩中学是一所著名的基督教女校，注重学生的品德和学术发展。',
    coordinates: { lat: 22.3280, lng: 114.1850 },
    nearbyRent: { average: 26000, trend: 'down' },
    transport: {
      mtr: ['九龙塘站'],
      bus: ['7B', '11K', '14'],
      minibus: ['25M']
    },
    rating: 4.7,
    reviews: 156
  },
  // 官立学校
  {
    id: 'gov-001',
    name: '皇仁书院',
    nameEn: "Queen's College",
    type: 'government',
    district: '铜锣湾',
    address: '香港铜锣湾高士威道120号',
    website: 'https://www.qc.edu.hk',
    phone: '+852 2576 4108',
    email: 'qc@edb.gov.hk',
    ranking: 1,
    founded: 1862,
    students: 900,
    teachers: 70,
    tuition: '免费',
    curriculum: ['DSE'],
    languages: ['英语', '中文'],
    facilities: ['图书馆', '实验室', '体育场', '音乐室'],
    description: '皇仁书院是香港第一所官立中学，以优秀的学术传统和公民教育著称。',
    coordinates: { lat: 22.2800, lng: 114.1880 },
    nearbyRent: { average: 35000, trend: 'up' },
    transport: {
      mtr: ['铜锣湾站', '天后站'],
      bus: ['2A', '8', '8P'],
      minibus: ['25', '39M']
    },
    rating: 4.7,
    reviews: 178
  },
  {
    id: 'gov-002',
    name: '庇理罗士女子中学',
    nameEn: 'Belilios Public School',
    type: 'government',
    district: '天后',
    address: '香港天后庙道51号',
    website: 'https://www.bps.edu.hk',
    phone: '+852 2571 0470',
    email: 'bps@edb.gov.hk',
    ranking: 2,
    founded: 1890,
    students: 850,
    teachers: 65,
    tuition: '免费',
    curriculum: ['DSE'],
    languages: ['英语', '中文'],
    facilities: ['图书馆', '实验室', '体育馆', '美术室'],
    description: '庇理罗士女子中学是香港著名的官立女校，以培养独立自信的女性为目标。',
    coordinates: { lat: 22.2850, lng: 114.1920 },
    nearbyRent: { average: 33000, trend: 'stable' },
    transport: {
      mtr: ['天后站'],
      bus: ['2A', '10', '25'],
      minibus: ['10', '19']
    },
    rating: 4.6,
    reviews: 134
  },
  {
    id: 'gov-003',
    name: '英皇书院',
    nameEn: "King's College",
    type: 'government',
    district: '西营盘',
    address: '香港西营盘般咸道63号A',
    website: 'https://www.kings.edu.hk',
    phone: '+852 2547 0310',
    email: 'kings@edb.gov.hk',
    ranking: 3,
    founded: 1926,
    students: 870,
    teachers: 68,
    tuition: '免费',
    curriculum: ['DSE'],
    languages: ['英语', '中文'],
    facilities: ['图书馆', '实验室', '体育场', '游泳池'],
    description: '英皇书院是一所历史悠久的官立男校，注重学术卓越和全人发展。',
    coordinates: { lat: 22.2870, lng: 114.1430 },
    nearbyRent: { average: 36000, trend: 'up' },
    transport: {
      mtr: ['西营盘站', '香港大学站'],
      bus: ['3A', '40', '40M'],
      minibus: ['12', '22']
    },
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'gov-004',
    name: '金文泰中学',
    nameEn: 'Clementi Secondary School',
    type: 'government',
    district: '北角',
    address: '香港北角炮台山道30号',
    website: 'https://www.clementi.edu.hk',
    phone: '+852 2570 6665',
    email: 'clementi@edb.gov.hk',
    ranking: 4,
    founded: 1926,
    students: 800,
    teachers: 60,
    tuition: '免费',
    curriculum: ['DSE'],
    languages: ['中文', '英语'],
    facilities: ['图书馆', '实验室', '体育馆', '音乐室'],
    description: '金文泰中学是香港第一所中文中学，以中文教学和传统文化教育著称。',
    coordinates: { lat: 22.2890, lng: 114.2000 },
    nearbyRent: { average: 28000, trend: 'stable' },
    transport: {
      mtr: ['炮台山站'],
      bus: ['8', '8P', '19'],
      minibus: ['32', '65']
    },
    rating: 4.5,
    reviews: 112
  }
];

/**
 * 地区数据
 */
export const districts = [
  '全部地区',
  '中西区',
  '湾仔',
  '东区',
  '南区',
  '油尖旺',
  '深水埗',
  '九龙城',
  '黄大仙',
  '观塘',
  '沙田',
  '大埔',
  '北区',
  '元朗',
  '屯门',
  '荃湾',
  '葵青',
  '离岛'
];

/**
 * 学校类型数据
 */
export const schoolTypes = [
  { value: 'all', label: '全部类型', labelEn: 'All Types' },
  { value: 'international', label: '国际学校', labelEn: 'International' },
  { value: 'dss', label: '直资学校', labelEn: 'DSS' },
  { value: 'government', label: '官立学校', labelEn: 'Government' }
];
