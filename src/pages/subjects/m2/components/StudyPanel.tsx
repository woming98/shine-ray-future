/**
 * Study Panel Component
 * Contains tabs for Knowledge, Derivation, Hints, Solution, Answer, and Extracted text
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProblemPart } from '../types';
import KnowledgeCard from './KnowledgeCard';
import DerivationViewer from './DerivationViewer';
import LatexBlock from './LatexBlock';
import { getKnowledgePointsByIds } from '../data/knowledge';
import { getDerivationsByIds } from '../data/derivations';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface StudyPanelProps {
  defaultTab?: 'knowledge' | 'derivation' | 'hints' | 'solution' | 'answer';
  extractedParts?: ProblemPart[];
  knowledgePointIds?: string[];
  derivationIds?: string[];
  onProblemClick?: (problemId: string) => void;
}

type TabType = 'knowledge' | 'derivation' | 'hints' | 'solution' | 'answer';

export default function StudyPanel({
  defaultTab = 'knowledge',
  extractedParts = [],
  knowledgePointIds = [],
  derivationIds = [],
  onProblemClick,
}: StudyPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  // Load knowledge points and derivations
  const knowledgePoints = getKnowledgePointsByIds(knowledgePointIds);
  const derivations = getDerivationsByIds(derivationIds);

  // Check if hints/solution/answer exist
  const hasHints = extractedParts.some(p => p.hints && p.hints.length > 0);
  const hasSolution = extractedParts.some(p => p.solutionSteps && p.solutionSteps.length > 0);
  const hasAnswer = extractedParts.some(p => p.answerLatex);

  // 移除 extracted tab，只显示有内容的 tab
  const tabs = ([
    { id: 'knowledge', label: 'Knowledge', badge: knowledgePoints.length },
    { id: 'derivation', label: 'Derivation', badge: derivations.length },
    { id: 'hints', label: 'Hints', badge: hasHints ? extractedParts.filter(p => p.hints?.length).length : undefined },
    { id: 'solution', label: 'Solution', badge: hasSolution ? extractedParts.filter(p => p.solutionSteps?.length).length : undefined },
    { id: 'answer', label: 'Answer', badge: hasAnswer ? extractedParts.filter(p => p.answerLatex).length : undefined },
  ] as Array<{ id: TabType; label: string; badge?: number }>).filter(
    (tab) => tab.badge !== undefined || tab.id === 'knowledge' || tab.id === 'derivation'
  ); // 只显示有内容的 tab

  const renderLatex = (latex: string) => {
    try {
      const html = katex.renderToString(latex, {
        throwOnError: false,
        displayMode: true,
      });
      return <span dangerouslySetInnerHTML={{ __html: html }} />;
    } catch {
      return <span className="text-red-500">LaTeX Error</span>;
    }
  };

  const renderHintWithLatex = (hint: string) => {
    // 处理内联 LaTeX: \(...\) 或 $...$
    const parts: (string | JSX.Element)[] = [];
    const regex = /(\\?\([^)]+\\?\)|\$[^$]+\$)/g;
    let lastIndex = 0;
    let match;
    let keyIndex = 0;

    while ((match = regex.exec(hint)) !== null) {
      // 添加之前的文本
      if (match.index > lastIndex) {
        parts.push(hint.slice(lastIndex, match.index));
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
            key={`hint-latex-${keyIndex++}`}
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
    if (lastIndex < hint.length) {
      parts.push(hint.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : [hint];
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 md:p-6 h-fit lg:sticky lg:top-24">
      {/* Tabs */}
      <div className="flex flex-wrap gap-1 mb-4 md:mb-6 border-b border-slate-200 pb-3 -mx-4 md:-mx-6 px-4 md:px-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
              activeTab === tab.id
                ? 'text-fuchsia-600 border-b-2 border-fuchsia-600 -mb-0.5'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.label}
            {tab.badge !== undefined && tab.badge > 0 && (
              <span className="text-xs px-1.5 py-0.5 bg-fuchsia-100 text-fuchsia-700 rounded">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[150px]">
        <AnimatePresence mode="wait">
          {activeTab === 'knowledge' && (
            <motion.div
              key="knowledge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {knowledgePoints.length > 0 ? (
                knowledgePoints.map((kp) => (
                  <KnowledgeCard
                    key={kp.id}
                    knowledgePoint={kp}
                    onProblemClick={onProblemClick}
                  />
                ))
              ) : (
                <p className="text-sm text-slate-600">No knowledge points linked yet.</p>
              )}
            </motion.div>
          )}

          {activeTab === 'derivation' && (
            <motion.div
              key="derivation"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {derivations.length > 0 ? (
                derivations.map((deriv) => (
                  <DerivationViewer key={deriv.id} derivation={deriv} />
                ))
              ) : (
                <p className="text-sm text-slate-600">No derivations linked yet.</p>
              )}
            </motion.div>
          )}

          {activeTab === 'hints' && (
            <motion.div
              key="hints"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {hasHints ? (
                extractedParts.map((part, idx) =>
                  part.hints && part.hints.length > 0 ? (
                    <div key={idx} className="bg-slate-50 rounded-lg border border-slate-200 p-4 space-y-2">
                      <h5 className="text-sm font-semibold text-slate-900">
                        Part ({part.part})
                      </h5>
                      <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                        {part.hints.map((hint, hintIdx) => (
                          <li key={hintIdx} className="leading-relaxed">
                            {renderHintWithLatex(hint)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null
                )
              ) : (
                <p className="text-sm text-slate-600">No hints available yet.</p>
              )}
            </motion.div>
          )}

          {activeTab === 'solution' && (
            <motion.div
              key="solution"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {hasSolution ? (
                extractedParts.map((part, idx) =>
                  part.solutionSteps && part.solutionSteps.length > 0 ? (
                    <div key={idx} className="bg-slate-50 rounded-lg border border-slate-200 p-4 space-y-3">
                      <h5 className="text-sm font-semibold text-slate-900">
                        Part ({part.part})
                      </h5>
                      <div className="space-y-3">
                        {part.solutionSteps.map((step, stepIdx) => (
                          <div key={stepIdx} className="flex gap-3 bg-white rounded-lg p-3 border border-slate-200">
                            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">
                              {step.step ?? stepIdx + 1}
                            </div>
                            {/* 关键：min-w-0 防止 KaTeX 长公式撑破 flex 布局 */}
                            <div className="flex-1 min-w-0 space-y-2">
                              {step.reason && (
                                <div className="text-xs font-semibold text-blue-700">
                                  {step.reason}
                                </div>
                              )}
                              <LatexBlock
                                latex={step.latex}
                                displayMode={true}
                                allowExpand={true}
                                title={`Part (${part.part}) • Step ${step.step ?? stepIdx + 1}`}
                              />
                              {step.explanation && (
                                <div className="text-xs text-slate-600 leading-relaxed">
                                  {step.explanation}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null
                )
              ) : (
                <p className="text-sm text-slate-600">No solution available yet.</p>
              )}
            </motion.div>
          )}

          {activeTab === 'answer' && (
            <motion.div
              key="answer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {hasAnswer ? (
                extractedParts.map((part, idx) =>
                  part.answerLatex ? (
                    <div key={idx} className="bg-slate-50 rounded-lg border border-slate-200 p-4 space-y-2">
                      <h5 className="text-sm font-semibold text-slate-900">
                        Part ({part.part})
                      </h5>
                      <div className="text-center py-4 bg-white rounded border border-slate-200 overflow-x-auto">
                        {renderLatex(part.answerLatex)}
                      </div>
                    </div>
                  ) : null
                )
              ) : (
                <p className="text-sm text-slate-600">No answer available yet.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
