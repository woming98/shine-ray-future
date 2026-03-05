import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Eye, 
  Lightbulb,
  Settings,
  Move,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  BookOpen
} from 'lucide-react'
import { microscopeSamples } from '../data/topics'
import { useStore } from '../store/useStore'
import VocabularyWord from '../components/VocabularyWord'

// Photo-based Microscope Diagram Component with Overlay Labels
function MicroscopeDiagram({ highlightedPart, setHighlightedPart }) {
  // Label positions as percentages of the image dimensions
  // Each label has: id, vocabulary word, position (%), side for label direction
  const labelPositions = [
    { id: 'eyepiece', vocab: 'eyepiece', x: 50, y: 6, side: 'left', desc: '目鏡' },
    { id: 'body-tube', vocab: 'body tube', x: 50, y: 18, side: 'left', desc: '鏡筒' },
    { id: 'arm', vocab: 'arm', x: 62, y: 35, side: 'right', desc: '鏡臂' },
    { id: 'nosepiece', vocab: 'nosepiece', x: 49, y: 32, side: 'left', desc: '物鏡轉換器' },
    { id: 'objective', vocab: 'objective', x: 48, y: 44, side: 'left', desc: '物鏡' },
    { id: 'coarse-adjustment-knob', vocab: 'coarse adjustment knob', x: 70, y: 47, side: 'right', desc: '粗調節器' },
    { id: 'stage', vocab: 'stage', x: 40, y: 59, side: 'left', desc: '載物台' },
    { id: 'fine-adjustment-knob', vocab: 'fine adjustment knob', x: 70, y: 62, side: 'right', desc: '微調節器' },
    { id: 'condenser', vocab: 'condenser', x: 45, y: 65, side: 'left', desc: '聚光器' },
    { id: 'diaphragm', vocab: 'diaphragm', x: 33, y: 65, side: 'left', desc: '光圈' },
    { id: 'light-source', vocab: 'light source', x: 45, y: 74, side: 'left', desc: '光源' },
    { id: 'base', vocab: 'base', x: 50, y: 94, side: 'left', desc: '底座' },
  ]

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Microscope Image */}
      <div className="relative">
        <img 
          src="/images/microscope.svg" 
          alt="Compound Light Microscope"
          className="w-full h-auto"
        />
        
        {/* Overlay Labels */}
        {labelPositions.map((label) => (
          <div
            key={label.id}
            className="absolute"
            style={{ 
              left: `${label.x}%`, 
              top: `${label.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => setHighlightedPart(label.id)}
            onMouseLeave={() => setHighlightedPart(null)}
          >
            {/* Dot Marker */}
            <div 
              className={`w-4 h-4 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                highlightedPart === label.id 
                  ? 'bg-shineray-orange border-shineray-orange scale-125 shadow-lg shadow-shineray-orange/50' 
                  : 'bg-white/10 border-shineray-blue hover:bg-shineray-orange hover:border-shineray-orange'
              }`}
            >
              {highlightedPart === label.id && (
                <div className="absolute inset-0 rounded-full bg-shineray-orange/30 animate-ping" />
              )}
            </div>
            
            {/* Label with connecting line */}
            <div 
              className={`absolute whitespace-nowrap transition-all duration-300 ${
                label.side === 'left' 
                  ? 'right-full mr-2 pr-4 border-r-2' 
                  : 'left-full ml-2 pl-4 border-l-2'
              } ${
                highlightedPart === label.id 
                  ? 'opacity-100 border-shineray-orange' 
                  : 'opacity-70 border-gray-300 hover:opacity-100'
              }`}
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <div className={`px-2 py-1 rounded-lg text-sm font-medium ${
                highlightedPart === label.id 
                  ? 'bg-shineray-orange text-green-900 shadow-lg' 
                  : 'bg-white/10 text-gray-800 shadow'
              }`}>
                <VocabularyWord word={label.vocab} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>🔵 Hover over dots to see part names</p>
        <p>👆 Click part names for pronunciation & details</p>
      </div>
    </div>
  )
}


// Parts List with VocabularyWord
function MicroscopePartsList({ highlightedPart, setHighlightedPart }) {
  const partsData = [
    { id: 'eyepiece', vocab: 'eyepiece', num: 1, desc: 'Look through this lens (5x, 10x, 16x)' },
    { id: 'body-tube', vocab: 'body tube', num: 2, desc: 'Holds eyepiece and objectives' },
    { id: 'nosepiece', vocab: 'nosepiece', num: 3, desc: 'Rotate to change objectives' },
    { id: 'objective', vocab: 'objective', num: 4, desc: 'Lens pointing at specimen (4x, 10x, 40x)' },
    { id: 'condenser', vocab: 'condenser', num: 5, desc: 'Focuses light onto specimen' },
    { id: 'diaphragm', vocab: 'diaphragm', num: 6, desc: 'Controls light amount' },
    { id: 'light-source', vocab: 'light source', num: 7, desc: 'Provides illumination' },
    { id: 'arm', vocab: 'arm', num: 8, desc: 'Hold when carrying' },
    { id: 'coarse-adjustment-knob', vocab: 'coarse adjustment knob', num: 9, desc: 'Rough focus (large movement)' },
    { id: 'fine-adjustment-knob', vocab: 'fine adjustment knob', num: 10, desc: 'Sharp focus (small movement)' },
    { id: 'stage', vocab: 'stage', num: 11, desc: 'Platform for slide' },
    { id: 'base', vocab: 'base', num: 12, desc: 'Supports microscope' },
  ]

  return (
    <div className="space-y-2">
      <h3 className="font-display font-bold text-green-900 mb-3 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-shineray-orange" />
        Parts of a Compound Microscope
      </h3>
      <p className="text-sm text-gray-700 mb-4">
        Click any part name for pronunciation and detailed explanation:
      </p>
      <div className="grid grid-cols-1 gap-2">
        {partsData.map((part) => (
          <div
            key={part.id}
            className={`p-3 rounded-lg transition-all duration-300 cursor-pointer ${
              highlightedPart === part.id 
                ? 'bg-shineray-orange/20 border border-shineray-orange/40' 
                : 'bg-white/10 hover:bg-shineray-blue/10 border border-transparent'
            }`}
            onMouseEnter={() => setHighlightedPart(part.id)}
            onMouseLeave={() => setHighlightedPart(null)}
          >
            <div className="flex items-start gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                highlightedPart === part.id ? 'bg-shineray-orange text-green-900' : 'bg-gray-200 text-gray-700'
              }`}>
                {part.num}
              </span>
              <div className="flex-1">
                <div className="font-medium">
                  <VocabularyWord word={part.vocab} />
                </div>
                <p className="text-xs text-gray-700 mt-0.5">{part.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Observation Procedure Guide Component
function ObservationProcedure() {
  const [activeTab, setActiveTab] = useState('low')
  
  const lowPowerSteps = [
    { step: 1, text: 'Place the microscope on a flat bench.', icon: '🔬' },
    { step: 2, text: 'Insert a low-power eyepiece (e.g. 5X). Select a low-power objective (e.g. 4X) by rotating the nosepiece.', icon: '🔄', vocab: ['eyepiece', 'objective', 'nosepiece'] },
    { step: 3, text: 'Turn on the light source. Adjust the diaphragm until the light is sufficient.', icon: '💡', vocab: ['light source', 'diaphragm'] },
    { step: 4, text: 'Clip the prepared slide onto the stage. Make sure the specimen is over the hole.', icon: '📋', vocab: ['stage', 'specimen'] },
    { step: 5, text: 'Focus: First raise the stage using coarse adjustment knob, then lower it slowly while looking through eyepiece. Use fine adjustment knob for sharp focus.', icon: '🎯', vocab: ['coarse adjustment knob', 'fine adjustment knob', 'focus'] },
  ]
  
  const highPowerSteps = [
    { step: 1, text: 'First complete all low-power observation steps. The specimen should be in focus.', icon: '✅', tip: 'Always start with low-power!' },
    { step: 2, text: 'Move the specimen to the centre of the field of view.', icon: '🎯', vocab: ['field of view'] },
    { step: 3, text: 'Rotate the nosepiece to select a high-power objective (e.g. 40X). Watch from the side!', icon: '🔄', vocab: ['nosepiece', 'objective'] },
    { step: 4, text: 'Use ONLY the fine adjustment knob to get a sharp focus. NEVER use coarse adjustment!', icon: '⚠️', vocab: ['fine adjustment knob'], warning: true },
    { step: 5, text: 'Adjust the diaphragm to brighten the image if needed.', icon: '💡', vocab: ['diaphragm'] },
  ]
  
  const currentSteps = activeTab === 'low' ? lowPowerSteps : highPowerSteps

  return (
    <div className="card-bio">
      <h3 className="font-display font-bold text-green-900 mb-4 flex items-center gap-2">
        <Eye className="w-5 h-5 text-shineray-blue" />
        Observation Procedure
      </h3>
      
      {/* Tab Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('low')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
            activeTab === 'low'
              ? 'bg-shineray-orange text-green-900'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Low-Power
        </button>
        <button
          onClick={() => setActiveTab('high')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
            activeTab === 'high'
              ? 'bg-shineray-blue text-green-900'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          High-Power
        </button>
      </div>
      
      {/* Steps */}
      <div className="space-y-3">
        <AnimatePresence mode="wait">
          {currentSteps.map((item, index) => (
            <motion.div
              key={`${activeTab}-${item.step}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 rounded-lg ${
                item.warning 
                  ? 'bg-red-50 border border-red-200' 
                  : 'bg-green-50 border border-gray-100'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-sm font-bold ${item.warning ? 'text-red-600' : 'text-shineray-blue'}`}>
                      Step {item.step}
                    </span>
                    {item.tip && (
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                        {item.tip}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-800">
                    {item.text}
                  </p>
                  {item.vocab && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.vocab.map(v => (
                        <span key={v} className="inline-block">
                          <VocabularyWord word={v} />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Caution Box */}
      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 text-sm">CAUTION</p>
            <p className="text-xs text-amber-700 mt-1">
              {activeTab === 'low' 
                ? 'Never raise the stage with the coarse adjustment knob while looking through the eyepiece!'
                : 'Never use the coarse adjustment knob when using a high-power objective! It could damage the slide or lens.'
              }
            </p>
          </div>
        </div>
      </div>
      
      {/* Key Formula */}
      <div className="mt-4 p-3 bg-shineray-blue/10 border border-shineray-blue/20 rounded-lg">
        <p className="font-bold text-shineray-blue text-sm mb-1">📐 Magnification Formula</p>
        <p className="text-sm text-green-900 font-mono">
          Total magnification = <VocabularyWord word="eyepiece" /> × <VocabularyWord word="objective" />
        </p>
        <p className="text-xs text-gray-700 mt-1">
          Example: 10X eyepiece × 40X objective = 400X total
        </p>
      </div>
    </div>
  )
}

// 顯微鏡視圖組件
function MicroscopeView({ sample, zoom, position, lightIntensity }) {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !sample) return
    
    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height
    
    // 清除畫布
    ctx.fillStyle = '#0a1a14'
    ctx.fillRect(0, 0, width, height)
    
    // 繪製顯微鏡視野（圓形）
    ctx.save()
    ctx.beginPath()
    ctx.arc(width / 2, height / 2, Math.min(width, height) / 2 - 20, 0, Math.PI * 2)
    ctx.clip()
    
    // 背景光
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, Math.min(width, height) / 2
    )
    gradient.addColorStop(0, `rgba(255, 255, 240, ${lightIntensity * 0.8})`)
    gradient.addColorStop(1, `rgba(200, 200, 180, ${lightIntensity * 0.4})`)
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
    
    // 繪製細胞
    const cellCount = sample.type === 'plant' ? 6 : 12
    const baseSize = 50 * zoom
    
    for (let i = 0; i < cellCount; i++) {
      for (let j = 0; j < cellCount; j++) {
        const offsetX = position.x * zoom
        const offsetY = position.y * zoom
        
        let x, y
        if (sample.type === 'plant') {
          // 植物細胞 - 規則排列
          x = (i * baseSize * 1.5) + offsetX + width / 4
          y = (j * baseSize * 1.2) + offsetY + height / 4
        } else {
          // 動物細胞 - 不規則排列
          x = (i * baseSize * 1.3) + offsetX + width / 4 + Math.sin(i + j) * 20
          y = (j * baseSize * 1.3) + offsetY + height / 4 + Math.cos(i * j) * 20
        }
        
        drawCell(ctx, x, y, baseSize, sample, lightIntensity)
      }
    }
    
    // 繪製顯微鏡網格
    ctx.strokeStyle = `rgba(124, 206, 160, ${0.1 * lightIntensity})`
    ctx.lineWidth = 0.5
    const gridSize = 40
    for (let i = 0; i < width; i += gridSize) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, height)
      ctx.stroke()
    }
    for (let j = 0; j < height; j += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, j)
      ctx.lineTo(width, j)
      ctx.stroke()
    }
    
    ctx.restore()
    
    // 繪製視野邊框
    ctx.beginPath()
    ctx.arc(width / 2, height / 2, Math.min(width, height) / 2 - 20, 0, Math.PI * 2)
    ctx.strokeStyle = '#2d8b6f'
    ctx.lineWidth = 4
    ctx.stroke()
    
    // 外圈陰影
    ctx.beginPath()
    ctx.arc(width / 2, height / 2, Math.min(width, height) / 2 - 18, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)'
    ctx.lineWidth = 40
    ctx.stroke()
    
  }, [sample, zoom, position, lightIntensity])
  
  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={600}
      className="w-full max-w-[600px] aspect-square rounded-full"
    />
  )
}

// 繪製單個細胞
function drawCell(ctx, x, y, size, sample, lightIntensity) {
  const isPlant = sample.type === 'plant'
  
  // 細胞壁（植物細胞）
  if (isPlant) {
    ctx.strokeStyle = `rgba(139, 69, 19, ${0.6 * lightIntensity})`
    ctx.lineWidth = 3
    ctx.strokeRect(x - size / 2, y - size / 2, size, size * 0.8)
  }
  
  // 細胞膜
  ctx.beginPath()
  if (isPlant) {
    ctx.rect(x - size / 2 + 3, y - size / 2 + 3, size - 6, size * 0.8 - 6)
  } else {
    ctx.ellipse(x, y, size / 2, size / 2.5, Math.random() * 0.2, 0, Math.PI * 2)
  }
  ctx.fillStyle = `rgba(255, 239, 213, ${0.4 * lightIntensity})`
  ctx.fill()
  ctx.strokeStyle = `rgba(244, 164, 96, ${0.5 * lightIntensity})`
  ctx.lineWidth = 1.5
  ctx.stroke()
  
  // 細胞核
  ctx.beginPath()
  ctx.arc(x, y, size / 5, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(139, 69, 19, ${0.7 * lightIntensity})`
  ctx.fill()
  ctx.strokeStyle = `rgba(101, 67, 33, ${0.8 * lightIntensity})`
  ctx.lineWidth = 1
  ctx.stroke()
  
  // 核仁
  ctx.beginPath()
  ctx.arc(x + size / 20, y - size / 20, size / 15, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(70, 40, 20, ${0.8 * lightIntensity})`
  ctx.fill()
  
  // 葉綠體（植物細胞）
  if (isPlant && sample.features.includes('chloroplast')) {
    for (let i = 0; i < 5; i++) {
      const cx = x + (Math.random() - 0.5) * size * 0.6
      const cy = y + (Math.random() - 0.5) * size * 0.5
      ctx.beginPath()
      ctx.ellipse(cx, cy, size / 12, size / 20, Math.random() * Math.PI, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(34, 139, 34, ${0.6 * lightIntensity})`
      ctx.fill()
    }
  }
  
  // 液泡（植物細胞）
  if (isPlant && sample.features.includes('vacuole')) {
    ctx.beginPath()
    ctx.ellipse(x, y + size / 8, size / 3, size / 4, 0, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(135, 206, 235, ${0.3 * lightIntensity})`
    ctx.fill()
    ctx.strokeStyle = `rgba(100, 149, 237, ${0.3 * lightIntensity})`
    ctx.lineWidth = 0.5
    ctx.stroke()
  }
}

function MicroscopePage() {
  const { microscopeZoom, setMicroscopeZoom, microscopeSample, setMicroscopeSample } = useStore()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [lightIntensity, setLightIntensity] = useState(0.8)
  const [highlightedPart, setHighlightedPart] = useState(null)
  const [activeSection, setActiveSection] = useState('diagram') // 'diagram', 'simulator', 'procedure'
  
  const currentSample = microscopeSamples.find(s => s.id === microscopeSample) || microscopeSamples[0]
  
  useEffect(() => {
    if (!microscopeSample) {
      setMicroscopeSample(microscopeSamples[0].id)
    }
  }, [microscopeSample, setMicroscopeSample])
  
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }
  
  const handleMouseMove = (e) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }
  
  const handleMouseUp = () => {
    setIsDragging(false)
  }
  
  const handleZoomIn = () => {
    setMicroscopeZoom(Math.min(microscopeZoom + 0.5, 5))
  }
  
  const handleZoomOut = () => {
    setMicroscopeZoom(Math.max(microscopeZoom - 0.5, 1))
  }
  
  const handleReset = () => {
    setPosition({ x: 0, y: 0 })
    setMicroscopeZoom(1)
    setLightIntensity(0.8)
  }

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
            🔬 Virtual Microscope Lab
          </h1>
          <p className="text-gray-700">
            Learn microscope parts, operation procedures, and practice viewing cells
          </p>
        </motion.div>

        {/* Section Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveSection('diagram')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeSection === 'diagram'
                ? 'bg-shineray-orange text-green-900 shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
            }`}
          >
            📊 Microscope Parts
          </button>
          <button
            onClick={() => setActiveSection('procedure')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeSection === 'procedure'
                ? 'bg-shineray-blue text-green-900 shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
            }`}
          >
            📝 Observation Guide
          </button>
          <button
            onClick={() => setActiveSection('simulator')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeSection === 'simulator'
                ? 'bg-green-600 text-green-900 shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
            }`}
          >
            🔬 Cell Simulator
          </button>
        </div>

        {/* Microscope Diagram Section */}
        {activeSection === 'diagram' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Diagram */}
            <div className="card-bio">
              <h2 className="font-display font-bold text-xl text-green-900 mb-4 text-center">
                Compound Light Microscope
              </h2>
              <MicroscopeDiagram 
                highlightedPart={highlightedPart}
                setHighlightedPart={setHighlightedPart}
              />
              <p className="text-center text-sm text-green-900/50 mt-4">
                Hover over parts to highlight • Click part names for definitions
              </p>
            </div>
            
            {/* Parts List */}
            <div className="card-bio max-h-[700px] overflow-y-auto">
              <MicroscopePartsList 
                highlightedPart={highlightedPart}
                setHighlightedPart={setHighlightedPart}
              />
            </div>
          </motion.div>
        )}

        {/* Observation Procedure Section */}
        {activeSection === 'procedure' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <ObservationProcedure />
            
            {/* Low vs High Power Comparison */}
            <div className="card-bio mt-6">
              <h3 className="font-display font-bold text-green-900 mb-4">
                📊 Low-Power vs High-Power Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 text-gray-700">Feature</th>
                      <th className="text-center py-2 px-3 text-shineray-orange font-bold">Low-Power (×100)</th>
                      <th className="text-center py-2 px-3 text-shineray-blue font-bold">High-Power (×400)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 text-gray-700">Area observed</td>
                      <td className="text-center py-2 px-3 text-green-600">Larger (more cells)</td>
                      <td className="text-center py-2 px-3 text-amber-600">Smaller (fewer cells)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 text-gray-700">Details visible</td>
                      <td className="text-center py-2 px-3 text-amber-600">Less</td>
                      <td className="text-center py-2 px-3 text-green-600">More</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-gray-700">Brightness</td>
                      <td className="text-center py-2 px-3 text-green-600">Brighter</td>
                      <td className="text-center py-2 px-3 text-amber-600">Dimmer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Cell Simulator Section */}
        {activeSection === 'simulator' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 顯微鏡視圖 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-2xl p-6">
                <div 
                  className="flex justify-center cursor-move"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <MicroscopeView 
                    sample={currentSample}
                    zoom={microscopeZoom}
                    position={position}
                    lightIntensity={lightIntensity}
                  />
                </div>
                
                {/* 控制欄 */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2 glass rounded-xl px-4 py-2">
                    <button
                      onClick={handleZoomOut}
                      className="p-2 rounded-lg hover:bg-green-500/20 transition-colors"
                    >
                      <ZoomOut className="w-5 h-5 text-green-900" />
                    </button>
                    <span className="text-green-900 font-mono min-w-[60px] text-center">
                      {microscopeZoom.toFixed(1)}x
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 rounded-lg hover:bg-green-500/20 transition-colors"
                    >
                      <ZoomIn className="w-5 h-5 text-green-900" />
                    </button>
                  </div>
                  
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-green-500/20 transition-colors"
                  >
                    <RotateCcw className="w-5 h-5 text-green-900" />
                    <span className="text-green-900 text-sm">Reset</span>
                  </button>
                </div>
                
                {/* 操作提示 */}
                <div className="flex items-center justify-center gap-6 mt-4 text-sm text-green-900/50">
                  <span className="flex items-center gap-1">
                    <Move className="w-4 h-4" /> Drag to move
                  </span>
                  <span className="flex items-center gap-1">
                    <ZoomIn className="w-4 h-4" /> Adjust zoom
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 控制面板 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* 樣本選擇 */}
              <div className="card-bio">
                <h3 className="font-display font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-green-600" />
                  Select Sample
                </h3>
                <div className="space-y-2">
                  {microscopeSamples.map((sample) => (
                    <button
                      key={sample.id}
                      onClick={() => setMicroscopeSample(sample.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all ${
                        microscopeSample === sample.id
                          ? 'bg-green-500/20 border border-green-500/40'
                          : 'bg-green-50 hover:bg-green-500/10 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">
                          {sample.type === 'plant' ? '🌱' : '🔴'}
                        </span>
                        <div>
                          <h4 className="font-medium text-green-900">{sample.name}</h4>
                          <p className="text-xs text-gray-700">{sample.nameCn}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 光源控制 */}
              <div className="card-bio">
                <h3 className="font-display font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                  <VocabularyWord word="diaphragm" /> Control
                </h3>
                <input
                  type="range"
                  min="0.2"
                  max="1"
                  step="0.1"
                  value={lightIntensity}
                  onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #f97316 ${lightIntensity * 100}%, #e5e7eb ${lightIntensity * 100}%)`
                  }}
                />
                <div className="flex justify-between text-sm text-green-900/50 mt-2">
                  <span>Dim</span>
                  <span>{Math.round(lightIntensity * 100)}%</span>
                  <span>Bright</span>
                </div>
              </div>

              {/* 樣本資訊 */}
              <div className="card-bio">
                <h3 className="font-display font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-green-600" />
                  Sample Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-green-600 text-sm">Sample Name</p>
                    <p className="text-green-900">{currentSample?.name}</p>
                  </div>
                  <div>
                    <p className="text-green-600 text-sm">Cell Type</p>
                    <p className="text-green-900">
                      {currentSample?.type === 'plant' ? 'Plant Cell' : 'Animal Cell'}
                    </p>
                  </div>
                  <div>
                    <p className="text-green-600 text-sm">Suggested <VocabularyWord word="magnification" /></p>
                    <p className="text-green-900">{currentSample?.magnification}</p>
                  </div>
                  <div>
                    <p className="text-green-600 text-sm">Visible Structures</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {currentSample?.features.map(f => (
                        <span 
                          key={f}
                          className="px-2 py-1 rounded-lg bg-green-500/20 text-green-600 text-xs"
                        >
                          {f === 'cell-wall' && 'Cell Wall'}
                          {f === 'cell-membrane' && 'Cell Membrane'}
                          {f === 'nucleus' && 'Nucleus'}
                          {f === 'cytoplasm' && 'Cytoplasm'}
                          {f === 'chloroplast' && 'Chloroplast'}
                          {f === 'vacuole' && 'Vacuole'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MicroscopePage
