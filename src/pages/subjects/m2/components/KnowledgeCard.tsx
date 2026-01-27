/**
 * Knowledge Card Component
 * Displays a single knowledge point with details
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, AlertCircle } from 'lucide-react';
import { KnowledgePoint } from '../types';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface KnowledgeCardProps {
  knowledgePoint: KnowledgePoint;
  onProblemClick?: (problemId: string) => void;
}

export default function KnowledgeCard({
  knowledgePoint,
  onProblemClick,
}: KnowledgeCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const renderLatex = (text: string) => {
    // 处理内联 LaTeX: \(...\) 或 $...$
    const parts: (string | JSX.Element)[] = [];
    const regex = /(\\?\([^)]+\\?\)|\$[^$]+\$)/g;
    let lastIndex = 0;
    let match;
    let keyIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      // 添加之前的文本
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      // 渲染 LaTeX
      const latex = match[0].replace(/^\\?\(|\\?\)$|^\$|\$$/g, '');
      try {
        const html = katex.renderToString(latex, {
          throwOnError: false,
          displayMode: false,
        });
        parts.push(
          <span
            key={`latex-${keyIndex++}`}
            dangerouslySetInnerHTML={{ __html: html }}
            className="inline-block"
          />
        );
      } catch {
        parts.push(match[0]);
      }
      
      lastIndex = match.index + match[0].length;
    }
    
    // 添加剩余文本
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : [text];
  };

  const renderFormulas = (formulas: string[]) => {
    return formulas.map((formula, idx) => {
      try {
        const html = katex.renderToString(formula, {
          throwOnError: false,
          displayMode: true,
        });
        return (
          <div
            key={idx}
            className="p-2 bg-slate-50 rounded border border-slate-200 my-2 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return (
          <div key={idx} className="p-2 bg-red-50 text-red-600 text-sm">
            LaTeX Error: {formula}
          </div>
        );
      }
    });
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3 flex-1">
          <BookOpen className="w-5 h-5 text-fuchsia-600 flex-shrink-0" />
          <h4 className="font-semibold text-slate-900 text-base">
            {knowledgePoint.title}
          </h4>
        </div>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="px-4 pb-4 border-t border-slate-200 bg-slate-50"
          >
            <div className="pt-3 space-y-4">
              {/* Summary with LaTeX */}
              {knowledgePoint.summary && (
                <div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {renderLatex(knowledgePoint.summary)}
                  </p>
                </div>
              )}

              {/* Core Formulas */}
              {knowledgePoint.coreFormulasLatex && knowledgePoint.coreFormulasLatex.length > 0 && (
                <div>
                  <h5 className="text-xs font-semibold text-slate-800 mb-2 flex items-center gap-1">
                    <span>📐</span> Key Formulas:
                  </h5>
                  {renderFormulas(knowledgePoint.coreFormulasLatex)}
                </div>
              )}

              {/* Common Pitfalls */}
              {knowledgePoint.commonPitfalls && knowledgePoint.commonPitfalls.length > 0 && (
                <div>
                  <h5 className="text-xs font-semibold text-slate-800 mb-2 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    Common Pitfalls:
                  </h5>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 ml-2">
                    {knowledgePoint.commonPitfalls.map((pitfall, idx) => (
                      <li key={idx}>{renderLatex(pitfall)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Prerequisites */}
              {knowledgePoint.prerequisites && knowledgePoint.prerequisites.length > 0 && (
                <div>
                  <h5 className="text-xs font-semibold text-slate-800 mb-2">Prerequisites:</h5>
                  <div className="flex flex-wrap gap-1">
                    {knowledgePoint.prerequisites.map((prereq) => (
                      <span
                        key={prereq}
                        className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded"
                      >
                        {prereq}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Example Problems */}
              {knowledgePoint.exampleProblemIds && knowledgePoint.exampleProblemIds.length > 0 && (
                <div>
                  <h5 className="text-xs font-semibold text-slate-800 mb-2">Example Problems:</h5>
                  <div className="flex flex-wrap gap-1">
                    {knowledgePoint.exampleProblemIds.map((problemId) => (
                      <button
                        key={problemId}
                        onClick={() => onProblemClick?.(problemId)}
                        className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-700 rounded hover:bg-fuchsia-200 transition-colors"
                      >
                        {problemId}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
