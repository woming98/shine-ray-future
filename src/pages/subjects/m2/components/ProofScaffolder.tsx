/**
 * ProofScaffolder 组件
 * 引导式证明练习：逐步揭示证明步骤
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, RotateCcw, Lightbulb } from 'lucide-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { useM2Store } from '../store/useStore';
import { PROOF_PROBLEMS } from '../constants/proofs';

// KaTeX 渲染组件
function KaTeXRenderer({ latex }: { latex: string }) {
  const html = katex.renderToString(latex, {
    throwOnError: false,
    displayMode: false,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function ProofScaffolder() {
  const { proofProgress, updateProofProgress, resetProof } = useM2Store();
  const [selectedProblemId, setSelectedProblemId] = useState<string>(
    PROOF_PROBLEMS[0]?.id || ''
  );
  const [showHints, setShowHints] = useState(false);

  const currentProblem = PROOF_PROBLEMS.find((p) => p.id === selectedProblemId);
  const currentStep = proofProgress[selectedProblemId] || 0;

  if (!currentProblem) {
    return <div>No problem selected</div>;
  }

  const revealedSteps = currentProblem.steps.filter((_, index) => index <= currentStep);
  const nextStep = currentProblem.steps[currentStep + 1];

  const handleNextStep = () => {
    if (nextStep) {
      updateProofProgress(selectedProblemId, currentStep + 1);
    }
  };

  const handleReset = () => {
    resetProof(selectedProblemId);
    setShowHints(false);
  };

  const isComplete = currentStep >= currentProblem.steps.length - 1;

  return (
    <div className="max-w-5xl mx-auto">
      {/* 问题选择 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">選擇證明題目</label>
        <select
          value={selectedProblemId}
          onChange={(e) => {
            setSelectedProblemId(e.target.value);
            setShowHints(false);
          }}
          className="w-full px-4 py-2 border border-fuchsia-200 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
        >
          {PROOF_PROBLEMS.map((problem) => (
            <option key={problem.id} value={problem.id}>
              {problem.statement} {problem.target}
            </option>
          ))}
        </select>
      </div>

      {/* 证明卡片 */}
      <div className="bg-white rounded-xl border border-fuchsia-200 shadow-sm overflow-hidden">
        {/* 题目 */}
        <div className="px-6 py-4 bg-gradient-to-r from-fuchsia-50 to-pink-50 border-b border-fuchsia-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {currentProblem.statement}
          </h3>
          <div className="text-xl">
            <KaTeXRenderer latex={currentProblem.target} />
          </div>
        </div>

        {/* 证明步骤 */}
        <div className="p-6">
          <div className="space-y-4 mb-6">
            {revealedSteps.map((step, index) => (
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
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="bg-fuchsia-50 rounded-lg px-4 py-3 border border-fuchsia-100">
                    <KaTeXRenderer latex={step.latex} />
                  </div>
                  {step.identity && (
                    <p className="text-xs text-fuchsia-600 mt-2 italic">
                      使用恒等式: {step.identity}
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-wrap gap-3 items-center">
            {!isComplete && (
              <button
                onClick={handleNextStep}
                className="px-6 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 transition-colors flex items-center gap-2"
              >
                <Lightbulb className="w-4 h-4" />
                下一步提示
              </button>
            )}
            {isComplete && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">證明完成！</span>
              </div>
            )}
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              重置
            </button>
            <button
              onClick={() => setShowHints(!showHints)}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              {showHints ? '隱藏' : '顯示'}提示
            </button>
          </div>

          {/* 提示 */}
          {showHints && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200"
            >
              <h4 className="font-semibold text-blue-900 mb-2">提示</h4>
              <ul className="space-y-1">
                {currentProblem.hints.map((hint, index) => (
                  <li key={index} className="text-sm text-blue-800">
                    {index + 1}. {hint}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
