/**
 * 三角函数学习中心主页面
 * 包含三个核心组件：FormulaTree, TrigVision, ProofScaffolder
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FormulaTree from '../components/FormulaTree';
import TrigVision from '../components/TrigVision';
import ProofScaffolder from '../components/ProofScaffolder';
import ProblemList from '../components/ProblemList';

type TabType = 'formulas' | 'visualization' | 'proofs' | 'problems';

export default function TrigonometryHub() {
  const [activeTab, setActiveTab] = useState<TabType>('formulas');

  const tabs = [
    { id: 'formulas' as TabType, label: '公式樹', icon: '🌳' },
    { id: 'visualization' as TabType, label: '動態幾何', icon: '📐' },
    { id: 'proofs' as TabType, label: '證明練習', icon: '✍️' },
    { id: 'problems' as TabType, label: '歷屆試題', icon: '📚' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            三角學學習中心
          </h1>
          <p className="text-lg text-gray-700">
            通過互動式學習掌握三角函數、恒等式和變化率
          </p>
        </motion.div>
      </section>

      {/* Tabs */}
      <section className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-fuchsia-50 border border-fuchsia-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section>
        <AnimatePresence mode="wait">
          {activeTab === 'formulas' && (
            <motion.div
              key="formulas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FormulaTree />
            </motion.div>
          )}
          {activeTab === 'visualization' && (
            <motion.div
              key="visualization"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <TrigVision />
            </motion.div>
          )}
          {activeTab === 'proofs' && (
            <motion.div
              key="proofs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ProofScaffolder />
            </motion.div>
          )}
          {activeTab === 'problems' && (
            <motion.div
              key="problems"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ProblemList />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
