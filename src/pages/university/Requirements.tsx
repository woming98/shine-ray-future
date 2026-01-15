/**
 * 专业录取要求页面
 * 展示各大学热门专业的入学要求
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, BookMarked, Search, Filter, ChevronDown, ExternalLink } from 'lucide-react'

// 大学列表
const UNIVERSITIES = [
  { id: 'all', name: '全部院校' },
  { id: 'hku', name: '香港大學 HKU' },
  { id: 'cuhk', name: '香港中文大學 CUHK' },
  { id: 'hkust', name: '香港科技大學 HKUST' },
  { id: 'polyu', name: '香港理工大學 PolyU' },
  { id: 'cityu', name: '香港城市大學 CityU' },
  { id: 'hkbu', name: '香港浸會大學 HKBU' },
  { id: 'lu', name: '嶺南大學 LU' },
  { id: 'eduhk', name: '香港教育大學 EdUHK' },
]

// 学科分类
const CATEGORIES = [
  { id: 'all', name: '全部學科' },
  { id: 'business', name: '商科' },
  { id: 'engineering', name: '工程' },
  { id: 'science', name: '理學' },
  { id: 'medicine', name: '醫學' },
  { id: 'arts', name: '文學' },
  { id: 'social', name: '社會科學' },
  { id: 'education', name: '教育' },
]

// 示例课程数据
const PROGRAMS = [
  {
    id: 1,
    university: 'hku',
    universityName: '香港大學',
    program: '工商管理學學士',
    programEn: 'BBA',
    category: 'business',
    minScore: '25-27',
    requirements: ['英文 Level 4', '數學 Level 3'],
    website: 'https://www.hku.hk',
    popular: true,
  },
  {
    id: 2,
    university: 'hku',
    universityName: '香港大學',
    program: '內外全科醫學士',
    programEn: 'MBBS',
    category: 'medicine',
    minScore: '36+',
    requirements: ['英文 Level 5', '化學 Level 4', '生物 Level 4'],
    website: 'https://www.hku.hk',
    popular: true,
  },
  {
    id: 3,
    university: 'cuhk',
    universityName: '香港中文大學',
    program: '計算機科學',
    programEn: 'Computer Science',
    category: 'engineering',
    minScore: '24-26',
    requirements: ['數學 Level 4', '英文 Level 4'],
    website: 'https://www.cuhk.edu.hk',
    popular: true,
  },
  {
    id: 4,
    university: 'cuhk',
    universityName: '香港中文大學',
    program: '環球商業學',
    programEn: 'Global Business Studies',
    category: 'business',
    minScore: '28-30',
    requirements: ['英文 Level 5', '數學 Level 4'],
    website: 'https://www.cuhk.edu.hk',
    popular: true,
  },
  {
    id: 5,
    university: 'hkust',
    universityName: '香港科技大學',
    program: '工程學',
    programEn: 'Engineering',
    category: 'engineering',
    minScore: '23-25',
    requirements: ['數學 Level 4', 'M1/M2 優先'],
    website: 'https://www.hkust.edu.hk',
    popular: false,
  },
  {
    id: 6,
    university: 'hkust',
    universityName: '香港科技大學',
    program: '理學士（國際科研）',
    programEn: 'BSc International Research',
    category: 'science',
    minScore: '30+',
    requirements: ['英文 Level 5', '理科 Level 5'],
    website: 'https://www.hkust.edu.hk',
    popular: true,
  },
  {
    id: 7,
    university: 'polyu',
    universityName: '香港理工大學',
    program: '護理學',
    programEn: 'Nursing',
    category: 'medicine',
    minScore: '21-23',
    requirements: ['英文 Level 3', '生物優先'],
    website: 'https://www.polyu.edu.hk',
    popular: false,
  },
  {
    id: 8,
    university: 'cityu',
    universityName: '香港城市大學',
    program: '法律學',
    programEn: 'Law',
    category: 'social',
    minScore: '28-30',
    requirements: ['英文 Level 5', '中文 Level 4'],
    website: 'https://www.cityu.edu.hk',
    popular: true,
  },
  {
    id: 9,
    university: 'hkbu',
    universityName: '香港浸會大學',
    program: '傳理學',
    programEn: 'Communication',
    category: 'social',
    minScore: '22-24',
    requirements: ['英文 Level 4', '中文 Level 4'],
    website: 'https://www.hkbu.edu.hk',
    popular: true,
  },
  {
    id: 10,
    university: 'eduhk',
    universityName: '香港教育大學',
    program: '教育學士',
    programEn: 'BEd',
    category: 'education',
    minScore: '20-22',
    requirements: ['英文 Level 3', '中文 Level 3'],
    website: 'https://www.eduhk.hk',
    popular: false,
  },
]

export default function Requirements() {
  const [selectedUni, setSelectedUni] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // 筛选课程
  const filteredPrograms = PROGRAMS.filter(program => {
    const matchUni = selectedUni === 'all' || program.university === selectedUni
    const matchCategory = selectedCategory === 'all' || program.category === selectedCategory
    const matchSearch = searchQuery === '' || 
      program.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.programEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.universityName.includes(searchQuery)
    return matchUni && matchCategory && matchSearch
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-br from-navy-950 via-primary-900 to-navy-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/university"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回升學信息
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <BookMarked className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              專業錄取要求
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              查閱香港各大學熱門專業的入學要求
            </p>
          </motion.div>
        </div>
      </section>

      {/* 筛选区域 */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            {/* 搜索框 */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="搜索課程名稱..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* 大学筛选 */}
            <div className="relative">
              <select
                value={selectedUni}
                onChange={(e) => setSelectedUni(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
              >
                {UNIVERSITIES.map(uni => (
                  <option key={uni.id} value={uni.id}>{uni.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {/* 学科筛选 */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            <div className="text-sm text-slate-500">
              共 {filteredPrograms.length} 個課程
            </div>
          </div>
        </div>
      </section>

      {/* 课程列表 */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded">
                        {program.universityName}
                      </span>
                      {program.popular && (
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                          熱門
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {program.program}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">{program.programEn}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {program.requirements.map((req, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-slate-500 mb-1">參考分數</div>
                    <div className="text-2xl font-bold text-primary-600 mb-3">
                      {program.minScore}
                    </div>
                    <a
                      href={program.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
                    >
                      官網 <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">沒有找到符合條件的課程</p>
            </div>
          )}
        </div>
      </section>

      {/* 免责声明 */}
      <section className="py-8 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 text-center">
            * 以上數據僅供參考，實際錄取要求以各大學官方公佈為準。分數範圍基於往年數據，每年可能有所變動。
          </p>
        </div>
      </section>
    </div>
  )
}
