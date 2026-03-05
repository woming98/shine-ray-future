/**
 * FormulaTree 组件
 * 展示核心 M2 公式，点击可展开显示逐步推导过程
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { useM2Store } from '../store/useStore';
import { TRIGONOMETRY_FORMULAS } from '../constants/formulas';
import { Formula } from '../types';

// KaTeX 渲染组件
function KaTeXRenderer({ latex }: { latex: string }) {
  const html = katex.renderToString(latex, {
    throwOnError: false,
    displayMode: false,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

// 公式卡片组件
function FormulaCard({ formula }: { formula: Formula }) {
  const { expandedFormulas, toggleFormula } = useM2Store();
  // expandedFormulas 现在是数组，使用 includes 检查
  const isExpanded = Array.isArray(expandedFormulas) && expandedFormulas.includes(formula.id);

  return (
    <div className="bg-white rounded-xl border border-fuchsia-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* 公式标题 */}
      <button
        onClick={() => toggleFormula(formula.id)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-fuchsia-50 transition-colors"
      >
        <div className="flex-1 text-left">
          <h3 className="font-bold text-gray-800 text-lg mb-1">{formula.nameZh}</h3>
          <p className="text-sm text-gray-500 mb-2">{formula.name}</p>
          <div className="text-lg">
            <KaTeXRenderer latex={formula.latex} />
          </div>
        </div>
        <div className="ml-4">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-fuchsia-600" />
          ) : (
            <ChevronRight className="w-5 h-5 text-fuchsia-600" />
          )}
        </div>
      </button>

      {/* 推导步骤 */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-fuchsia-50/50 border-t border-fuchsia-200">
              <h4 className="font-semibold text-fuchsia-700 mb-4">推導過程</h4>
              <div className="space-y-4">
                {formula.derivation.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-fuchsia-600 text-white flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">{step.description}</p>
                      <div className="text-base bg-white rounded-lg px-4 py-2 border border-fuchsia-100">
                        <KaTeXRenderer latex={step.latex} />
                      </div>
                      {step.identity && (
                        <p className="text-xs text-fuchsia-600 mt-1 italic">
                          使用: {step.identity}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// 按类别分组
const categoryLabels: Record<string, string> = {
  'compound-angle': '複角公式',
  'double-angle': '倍角公式',
  'sum-to-product': '和化積',
  'product-to-sum': '積化和',
  'half-angle': '半角公式',
  other: '其他',
};

export default function FormulaTree() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 按类别分组公式
  const formulasByCategory = TRIGONOMETRY_FORMULAS.reduce((acc, formula) => {
    if (!acc[formula.category]) {
      acc[formula.category] = [];
    }
    acc[formula.category].push(formula);
    return acc;
  }, {} as Record<string, Formula[]>);

  const categories = Object.keys(formulasByCategory);

  return (
    <div className="max-w-5xl mx-auto">
      {/* 类别筛选 */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            selectedCategory === null
              ? 'bg-fuchsia-600 text-white'
              : 'bg-white text-gray-700 hover:bg-fuchsia-50 border border-fuchsia-200'
          }`}
        >
          全部
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? 'bg-fuchsia-600 text-white'
                : 'bg-white text-gray-700 hover:bg-fuchsia-50 border border-fuchsia-200'
            }`}
          >
            {categoryLabels[category] || category}
          </button>
        ))}
      </div>

      {/* 公式列表 */}
      <div className="space-y-4">
        {selectedCategory
          ? formulasByCategory[selectedCategory]?.map((formula) => (
              <FormulaCard key={formula.id} formula={formula} />
            ))
          : TRIGONOMETRY_FORMULAS.map((formula) => (
              <FormulaCard key={formula.id} formula={formula} />
            ))}
      </div>
    </div>
  );
}
