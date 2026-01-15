// 簡化版 InteractiveCell3D 組件
// 由於 @react-three/fiber 依賴衝突，使用占位符版本

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Info, AlertCircle } from 'lucide-react'
import { organelles } from '../data/topics'
import { useStore } from '../store/useStore'

// 簡化版細胞3D視圖組件
function InteractiveCell3D({ className = '' }) {
  const { cellType, setCellType, selectedOrganelle, setSelectedOrganelle } = useStore()
  const cellData = organelles[cellType] || []
  
  return (
    <div className={`relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200 overflow-hidden ${className}`}>
      {/* 占位符內容 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        {/* 圖標 */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-8xl mb-6"
        >
          {cellType === 'plant' ? '🌿' : '🐾'}
        </motion.div>
        
        {/* 標題 */}
        <h3 className="text-2xl font-bold text-emerald-800 mb-2">
          {cellType === 'plant' ? '植物細胞' : '動物細胞'}
        </h3>
        <p className="text-emerald-600 mb-6">
          {cellType === 'animal' ? 'Animal Cell' : 'Plant Cell'}
        </p>
        
        {/* 提示信息 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 max-w-md border border-emerald-200">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-emerald-800">
              <p className="font-semibold mb-1">3D 互動功能開發中</p>
              <p className="text-emerald-700">
                完整的3D細胞觀察功能需要額外的3D庫支持。目前您可以通過下方的細胞器列表來學習各個結構的功能。
              </p>
            </div>
          </div>
      </div>
      
      {/* 細胞器列表 */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl w-full">
          {cellData.slice(0, 6).map((organelle) => (
            <motion.button
              key={organelle.id}
              onClick={() => setSelectedOrganelle(organelle.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedOrganelle === organelle.id
                  ? 'bg-emerald-500 border-emerald-600 text-white'
                  : 'bg-white border-emerald-200 text-emerald-800 hover:border-emerald-400'
              }`}
            >
              <div className="text-2xl mb-1">{organelle.icon || '🔬'}</div>
              <div className="text-xs font-medium">{organelle.nameCn}</div>
            </motion.button>
          ))}
        </div>
        
        {/* 切換按鈕 */}
        <div className="mt-6 flex gap-3">
          <motion.button
            onClick={() => setCellType('animal')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              cellType === 'animal'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-emerald-700 border-2 border-emerald-200'
            }`}
          >
            🐾 動物細胞
          </motion.button>
          <motion.button
            onClick={() => setCellType('plant')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              cellType === 'plant'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-emerald-700 border-2 border-emerald-200'
            }`}
          >
            🌿 植物細胞
          </motion.button>
      </div>
      </div>
      
      {/* 背景裝飾 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl" />
      </div>
    </div>
  )
}

export default InteractiveCell3D
