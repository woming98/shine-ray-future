import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Environment, Float, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { organelles } from '../data/topics'
import { useStore } from '../store/useStore'
import * as THREE from 'three'

// 細胞膜組件
function CellMembrane({ type, opacity = 0.3 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })
  
  const size = type === 'plant' ? 2.7 : 2.5
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 64, 64]} />
      <MeshDistortMaterial
        color={type === 'plant' ? '#8fbc8f' : '#f4a460'}
        transparent
        opacity={opacity}
        distort={0.1}
        speed={2}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  )
}

// 細胞質組件
function Cytoplasm({ type }) {
  const size = type === 'plant' ? 2.4 : 2.3
  
  return (
    <mesh>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color="#ffefd5"
        transparent
        opacity={0.2}
        roughness={1}
      />
    </mesh>
  )
}

// 細胞核組件
function Nucleus({ position, onClick, isSelected }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.scale.setScalar(
        isSelected ? 1.1 + Math.sin(state.clock.elapsedTime * 3) * 0.05 : 1
      )
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position}>
        <mesh ref={meshRef} onClick={onClick}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial
            color="#8b4513"
            roughness={0.3}
            metalness={0.2}
            emissive={isSelected ? '#8b4513' : '#000000'}
            emissiveIntensity={isSelected ? 0.3 : 0}
          />
        </mesh>
        {/* 核仁 */}
        <mesh position={[0.15, 0.1, 0.3]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#654321" roughness={0.5} />
        </mesh>
      </group>
    </Float>
  )
}

// 線粒體組件
function Mitochondria({ position, rotation = [0, 0, 0], onClick, isSelected }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime + position[0]) * 0.3
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh 
        ref={meshRef} 
        position={position} 
        rotation={rotation}
        onClick={onClick}
      >
        <capsuleGeometry args={[0.12, 0.3, 8, 16]} />
        <meshStandardMaterial
          color="#dc143c"
          roughness={0.4}
          metalness={0.3}
          emissive={isSelected ? '#dc143c' : '#000000'}
          emissiveIntensity={isSelected ? 0.5 : 0}
        />
      </mesh>
    </Float>
  )
}

// 葉綠體組件（僅植物細胞）
function Chloroplast({ position, onClick, isSelected }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} onClick={onClick}>
        <capsuleGeometry args={[0.2, 0.4, 8, 16]} />
        <meshStandardMaterial
          color="#228b22"
          roughness={0.3}
          metalness={0.2}
          emissive={isSelected ? '#228b22' : '#000000'}
          emissiveIntensity={isSelected ? 0.5 : 0}
        />
      </mesh>
    </Float>
  )
}

// 液泡組件（植物細胞的大中央液泡）
function Vacuole({ position, size, onClick, isSelected }) {
  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh position={position} onClick={onClick}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color="#87ceeb"
          transparent
          opacity={0.5}
          roughness={0.1}
          metalness={0.1}
          emissive={isSelected ? '#87ceeb' : '#000000'}
          emissiveIntensity={isSelected ? 0.3 : 0}
        />
      </mesh>
    </Float>
  )
}

// 高爾基體組件
function GolgiApparatus({ position, onClick, isSelected }) {
  const layers = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      y: (i - 2) * 0.08,
      scale: 1 - Math.abs(i - 2) * 0.15,
    }))
  }, [])
  
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position} onClick={onClick}>
        {layers.map((layer, i) => (
          <mesh key={i} position={[0, layer.y, 0]} scale={[layer.scale, 1, layer.scale]}>
            <torusGeometry args={[0.15, 0.03, 8, 24]} />
            <meshStandardMaterial
              color="#9370db"
              roughness={0.4}
              emissive={isSelected ? '#9370db' : '#000000'}
              emissiveIntensity={isSelected ? 0.4 : 0}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

// 內質網組件
function EndoplasmicReticulum({ position, onClick, isSelected }) {
  const tubeRef = useRef()
  
  useFrame((state) => {
    if (tubeRef.current) {
      tubeRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={tubeRef} position={position} onClick={onClick}>
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.2, 0.04, 8, 32]} />
          <meshStandardMaterial
            color="#daa520"
            roughness={0.5}
            emissive={isSelected ? '#daa520' : '#000000'}
            emissiveIntensity={isSelected ? 0.4 : 0}
          />
        </mesh>
        <mesh position={[0.15, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.15, 0.03, 8, 24]} />
          <meshStandardMaterial
            color="#daa520"
            roughness={0.5}
            emissive={isSelected ? '#daa520' : '#000000'}
            emissiveIntensity={isSelected ? 0.4 : 0}
          />
        </mesh>
      </group>
    </Float>
  )
}

// 核糖體組件（多個小球）
function Ribosomes({ positions }) {
  return (
    <group>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#4a4a4a" roughness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

// 溶酶體組件
function Lysosome({ position, onClick, isSelected }) {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh position={position} onClick={onClick}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#20b2aa"
          roughness={0.3}
          metalness={0.2}
          emissive={isSelected ? '#20b2aa' : '#000000'}
          emissiveIntensity={isSelected ? 0.5 : 0}
        />
      </mesh>
    </Float>
  )
}

// 資訊標籤組件
function OrganelleLabel({ organelle, position, visible }) {
  if (!visible) return null
  
  return (
    <Html position={position} center distanceFactor={5}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-bio-dark/90 backdrop-blur-sm border border-bio-accent/40 rounded-xl px-4 py-3 min-w-[200px] max-w-[280px]"
      >
        <h4 className="font-display font-bold text-bio-accent text-lg">
          {organelle.nameCn}
        </h4>
        <p className="text-bio-dark/70 text-sm mb-2">{organelle.name}</p>
        <p className="text-bio-dark/90 text-sm leading-relaxed">
          {organelle.descriptionCn}
        </p>
      </motion.div>
    </Html>
  )
}

// 3D細胞場景
function CellScene({ cellType, selectedOrganelle, onSelectOrganelle }) {
  const cellData = organelles[cellType]
  
  // 生成核糖體位置
  const ribosomePositions = useMemo(() => {
    return Array.from({ length: 20 }, () => [
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
    ]).filter(pos => {
      const dist = Math.sqrt(pos[0] ** 2 + pos[1] ** 2 + pos[2] ** 2)
      return dist > 1 && dist < 2
    })
  }, [])
  
  const handleOrganelleClick = (organelleId) => (e) => {
    e.stopPropagation()
    onSelectOrganelle(selectedOrganelle === organelleId ? null : organelleId)
  }
  
  const getOrganelleData = (id) => cellData.find(o => o.id === id)
  
  return (
    <>
      {/* 環境光 */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7ccea0" />
      
      {/* 細胞膜 */}
      <CellMembrane type={cellType} opacity={0.25} />
      
      {/* 細胞質 */}
      <Cytoplasm type={cellType} />
      
      {/* 細胞核 */}
      <Nucleus 
        position={cellType === 'plant' ? [0, 0.3, 0] : [0, 0, 0]}
        onClick={handleOrganelleClick('nucleus')}
        isSelected={selectedOrganelle === 'nucleus'}
      />
      <OrganelleLabel 
        organelle={getOrganelleData('nucleus')}
        position={cellType === 'plant' ? [0, 1.2, 0] : [0, 0.9, 0]}
        visible={selectedOrganelle === 'nucleus'}
      />
      
      {/* 線粒體（多個） */}
      <Mitochondria 
        position={[1.2, 0.5, 0.3]} 
        rotation={[-0.5, 0, 0.3]}
        onClick={handleOrganelleClick('mitochondria')}
        isSelected={selectedOrganelle === 'mitochondria'}
      />
      <Mitochondria 
        position={[-1.0, -0.3, 0.8]} 
        rotation={[0.3, 0.5, -0.2]}
        onClick={handleOrganelleClick('mitochondria')}
        isSelected={selectedOrganelle === 'mitochondria'}
      />
      <Mitochondria 
        position={[0.5, -1.0, -0.5]} 
        rotation={[0.2, -0.3, 0.5]}
        onClick={handleOrganelleClick('mitochondria')}
        isSelected={selectedOrganelle === 'mitochondria'}
      />
      <OrganelleLabel 
        organelle={getOrganelleData('mitochondria')}
        position={[1.2, 1.2, 0.3]}
        visible={selectedOrganelle === 'mitochondria'}
      />
      
      {/* 高爾基體 */}
      <GolgiApparatus 
        position={[-1.0, -0.5, 0.2]}
        onClick={handleOrganelleClick('golgi-apparatus')}
        isSelected={selectedOrganelle === 'golgi-apparatus'}
      />
      <OrganelleLabel 
        organelle={getOrganelleData('golgi-apparatus')}
        position={[-1.0, 0.3, 0.2]}
        visible={selectedOrganelle === 'golgi-apparatus'}
      />
      
      {/* 內質網 */}
      <EndoplasmicReticulum 
        position={[0.6, -0.4, 0.6]}
        onClick={handleOrganelleClick('endoplasmic-reticulum')}
        isSelected={selectedOrganelle === 'endoplasmic-reticulum'}
      />
      <OrganelleLabel 
        organelle={getOrganelleData('endoplasmic-reticulum')}
        position={[0.6, 0.4, 0.6]}
        visible={selectedOrganelle === 'endoplasmic-reticulum'}
      />
      
      {/* 核糖體 */}
      <Ribosomes positions={ribosomePositions} />
      
      {/* 僅動物細胞：溶酶體 */}
      {cellType === 'animal' && (
        <>
          <Lysosome 
            position={[0.8, -0.8, -0.3]}
            onClick={handleOrganelleClick('lysosome')}
            isSelected={selectedOrganelle === 'lysosome'}
          />
          <OrganelleLabel 
            organelle={getOrganelleData('lysosome')}
            position={[0.8, 0, -0.3]}
            visible={selectedOrganelle === 'lysosome'}
          />
        </>
      )}
      
      {/* 僅植物細胞特有結構 */}
      {cellType === 'plant' && (
        <>
          {/* 葉綠體 */}
          <Chloroplast 
            position={[0.9, 0.9, 0.4]}
            onClick={handleOrganelleClick('chloroplast')}
            isSelected={selectedOrganelle === 'chloroplast'}
          />
          <Chloroplast 
            position={[-0.7, 1.1, -0.3]}
            onClick={handleOrganelleClick('chloroplast')}
            isSelected={selectedOrganelle === 'chloroplast'}
          />
          <Chloroplast 
            position={[1.2, -0.4, -0.6]}
            onClick={handleOrganelleClick('chloroplast')}
            isSelected={selectedOrganelle === 'chloroplast'}
          />
          <OrganelleLabel 
            organelle={getOrganelleData('chloroplast')}
            position={[0.9, 1.7, 0.4]}
            visible={selectedOrganelle === 'chloroplast'}
          />
          
          {/* 中央液泡 */}
          <Vacuole 
            position={[0, -0.4, 0]}
            size={1.0}
            onClick={handleOrganelleClick('vacuole')}
            isSelected={selectedOrganelle === 'vacuole'}
          />
          <OrganelleLabel 
            organelle={getOrganelleData('vacuole')}
            position={[0, -1.6, 0]}
            visible={selectedOrganelle === 'vacuole'}
          />
        </>
      )}
      
      {/* 環境 */}
      <Environment preset="sunset" />
      
      {/* 控制 */}
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={10}
        autoRotate={!selectedOrganelle}
        autoRotateSpeed={0.5}
      />
    </>
  )
}

// 主組件
function InteractiveCell3D({ className = '' }) {
  const { cellType, setCellType, selectedOrganelle, setSelectedOrganelle } = useStore()
  const cellData = organelles[cellType]
  
  return (
    <div className={`relative ${className}`}>
      {/* 細胞類型切換 */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <button
          onClick={() => { setCellType('animal'); setSelectedOrganelle(null) }}
          className={`px-4 py-2 rounded-xl font-display font-semibold transition-all ${
            cellType === 'animal'
              ? 'bg-bio-accent text-bio-dark'
              : 'glass text-bio-dark hover:bg-bio-accent/20'
          }`}
        >
          🐾 動物細胞
        </button>
        <button
          onClick={() => { setCellType('plant'); setSelectedOrganelle(null) }}
          className={`px-4 py-2 rounded-xl font-display font-semibold transition-all ${
            cellType === 'plant'
              ? 'bg-bio-accent text-bio-dark'
              : 'glass text-bio-dark hover:bg-bio-accent/20'
          }`}
        >
          🌿 植物細胞
        </button>
      </div>
      
      {/* 細胞器列表 */}
      <div className="absolute top-4 right-4 z-10 glass rounded-xl p-4 max-w-[200px]">
        <h3 className="font-display font-bold text-bio-accent mb-3 text-sm">
          細胞器 Organelles
        </h3>
        <div className="space-y-1 max-h-[300px] overflow-y-auto">
          {cellData.map((organelle) => (
            <button
              key={organelle.id}
              onClick={() => setSelectedOrganelle(
                selectedOrganelle === organelle.id ? null : organelle.id
              )}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                selectedOrganelle === organelle.id
                  ? 'bg-bio-accent/30 text-bio-dark'
                  : 'text-bio-dark/70 hover:bg-bio-accent/10 hover:text-bio-dark'
              }`}
            >
              <div className="font-medium">{organelle.nameCn}</div>
              <div className="text-xs opacity-60">{organelle.name}</div>
            </button>
          ))}
        </div>
      </div>
      
      {/* 操作提示 */}
      <div className="absolute bottom-4 left-4 z-10 glass rounded-xl px-4 py-2">
        <p className="text-bio-dark/70 text-sm">
          🖱️ 拖動旋轉 | 滾輪縮放 | 點擊細胞器查看詳情
        </p>
      </div>
      
      {/* 3D Canvas */}
      <div className="canvas-container w-full h-full min-h-[500px] rounded-2xl">
        <Canvas
          camera={{ position: [4, 3, 4], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <CellScene 
            cellType={cellType}
            selectedOrganelle={selectedOrganelle}
            onSelectOrganelle={setSelectedOrganelle}
          />
        </Canvas>
      </div>
    </div>
  )
}

export default InteractiveCell3D
