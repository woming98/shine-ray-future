/**
 * Derivation Viewer Component
 * Displays formula derivation steps with expand/collapse and animations
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Derivation } from '../types';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface DerivationViewerProps {
  derivation: Derivation;
  defaultExpanded?: boolean;
}

export default function DerivationViewer({
  derivation,
  defaultExpanded = false,
}: DerivationViewerProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const renderLatex = (latex: string) => {
    try {
      const html = katex.renderToString(latex, {
        throwOnError: false,
        displayMode: true,
      });
      return <span dangerouslySetInnerHTML={{ __html: html }} />;
    } catch {
      return <span className="text-red-500">LaTeX Error: {latex}</span>;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
      >
        <div className="flex-1">
          <h4 className="font-semibold text-slate-900 text-sm mb-1">
            {derivation.title}
          </h4>
          {!isExpanded && (
            <div className="text-xs text-slate-500">
              {derivation.steps.length} steps
            </div>
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>

      {/* Steps */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4 border-t border-slate-100">
              {/* Final Formula */}
              <div className="pt-4 pb-2 border-b border-slate-200">
                <div className="text-xs font-semibold text-slate-600 mb-2">
                  Final Formula:
                </div>
                <div className="text-center py-2 bg-slate-50 rounded overflow-x-auto">
                  {renderLatex(derivation.finalLatex)}
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                {derivation.steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fuchsia-100 text-fuchsia-700 flex items-center justify-center text-xs font-semibold">
                      {idx + 1}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="text-center py-2 bg-slate-50 rounded overflow-x-auto">
                        {renderLatex(step.latex)}
                      </div>
                      {step.reason && (
                        <div className="text-xs text-slate-600 italic">
                          {step.reason}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              {derivation.tags.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-1">
                  {derivation.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
