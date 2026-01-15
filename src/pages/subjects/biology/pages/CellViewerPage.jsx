import { motion } from 'framer-motion'
import { Info, Lightbulb } from 'lucide-react'
import InteractiveCell3D from '../components/InteractiveCell3D'
import { useStore } from '../store/useStore'
import { organelles } from '../data/topics'

function CellViewerPage() {
  const { cellType, selectedOrganelle } = useStore()
  const cellData = organelles[cellType]
  const selectedData = selectedOrganelle 
    ? cellData.find(o => o.id === selectedOrganelle) 
    : null

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頁面標題 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-display font-bold text-3xl md:text-4xl text-green-900 mb-2">
            🔬 互動式3D細胞觀察
          </h1>
          <p className="text-gray-700">
            探索動物細胞和植物細胞的結構，點擊細胞器了解其功能
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 3D 細胞視圖 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <InteractiveCell3D className="h-[600px] rounded-2xl" />
          </motion.div>

          {/* 資訊面板 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* 細胞類型資訊 */}
            <div className="card-bio">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">
                  {cellType === 'animal' ? '🐾' : '🌿'}
                </span>
                <div>
                  <h2 className="font-display font-bold text-xl text-green-900">
                    {cellType === 'animal' ? '動物細胞' : '植物細胞'}
                  </h2>
                  <p className="text-green-600/70 text-sm">
                    {cellType === 'animal' ? 'Animal Cell' : 'Plant Cell'}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {cellType === 'animal' 
                  ? '動物細胞沒有細胞壁和葉綠體，但有溶酶體。細胞形狀通常不規則。'
                  : '植物細胞有細胞壁、葉綠體和大中央液泡。細胞形狀通常是規則的矩形。'
                }
              </p>
            </div>

            {/* 選中的細胞器詳情 */}
            {selectedData && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-bio border-2 border-green-500/30"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div 
                    className="w-4 h-4 rounded-full mt-1"
                    style={{ backgroundColor: selectedData.color }}
                  />
                  <div>
                    <h3 className="font-display font-bold text-lg text-green-600">
                      {selectedData.nameCn}
                    </h3>
                    <p className="text-gray-700 text-sm">{selectedData.name}</p>
                  </div>
                </div>
                
                <p className="text-gray-800 leading-relaxed mb-4">
                  {selectedData.descriptionCn}
                </p>
                
                <div className="flex items-start gap-2 p-3 rounded-xl bg-green-500/10">
                  <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    {selectedData.description}
                  </p>
                </div>
              </motion.div>
            )}

            {/* 學習提示 */}
            <div className="card-bio bg-gradient-to-br from-bio-dark/80 to-bio-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5 text-green-600" />
                <h3 className="font-display font-bold text-green-900">DSE 考試重點</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  比較動物細胞和植物細胞的異同
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  識別主要細胞器及其功能
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  解釋細胞結構如何適應其功能
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  繪畫標記細胞結構圖
                </li>
              </ul>
            </div>

            {/* 細胞器統計 */}
            <div className="card-bio">
              <h3 className="font-display font-bold text-green-900 mb-3">
                細胞器數量
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-xl bg-bio-dark/50">
                  <div className="font-display font-bold text-2xl text-green-600">
                    {cellData.length}
                  </div>
                  <div className="text-xs text-gray-700">主要細胞器</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-bio-dark/50">
                  <div className="font-display font-bold text-2xl text-green-600">
                    {cellType === 'plant' ? 3 : 0}
                  </div>
                  <div className="text-xs text-gray-700">
                    {cellType === 'plant' ? '植物特有' : '無植物特有'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 細胞器對照表 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="card-bio overflow-hidden">
            <h3 className="font-display font-bold text-xl text-green-900 mb-4">
              📊 動物細胞 vs 植物細胞 比較表
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-green-500/20">
                    <th className="text-left py-3 px-4 text-green-600 font-display">結構</th>
                    <th className="text-center py-3 px-4 text-green-600 font-display">動物細胞</th>
                    <th className="text-center py-3 px-4 text-green-600 font-display">植物細胞</th>
                    <th className="text-left py-3 px-4 text-green-600 font-display">功能</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b border-green-500/10">
                    <td className="py-3 px-4 font-medium">細胞膜</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="py-3 px-4 text-gray-700">控制物質進出</td>
                  </tr>
                  <tr className="border-b border-green-500/10">
                    <td className="py-3 px-4 font-medium">細胞壁</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="py-3 px-4 text-gray-700">支撐和保護</td>
                  </tr>
                  <tr className="border-b border-green-500/10">
                    <td className="py-3 px-4 font-medium">細胞核</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="py-3 px-4 text-gray-700">控制細胞活動</td>
                  </tr>
                  <tr className="border-b border-green-500/10">
                    <td className="py-3 px-4 font-medium">葉綠體</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="py-3 px-4 text-gray-700">光合作用</td>
                  </tr>
                  <tr className="border-b border-green-500/10">
                    <td className="py-3 px-4 font-medium">大液泡</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="py-3 px-4 text-gray-700">儲存和維持膨壓</td>
                  </tr>
                  <tr className="border-b border-green-500/10">
                    <td className="py-3 px-4 font-medium">線粒體</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="py-3 px-4 text-gray-700">細胞呼吸產能</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">溶酶體</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="py-3 px-4 text-gray-700">消化廢物</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CellViewerPage
