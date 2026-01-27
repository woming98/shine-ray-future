/**
 * Problem Detail Component
 * Main component displaying problem with images and study panel
 */

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Problem } from '../types';
import ImageViewer from './ImageViewer';
import ProblemHeaderBar from './ProblemHeaderBar';
import ProblemImagesPanel from './ProblemImagesPanel';
import StudyPanel from './StudyPanel';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface ProblemDetailProps {
  problem: Problem;
  onBack: () => void;
}

export default function ProblemDetail({ problem, onBack }: ProblemDetailProps) {
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [practiceMode, setPracticeMode] = useState(true); // 做题模式：默认隐藏答案

  // Check if problem has answer/solution/hints
  const hasAnswer = useMemo(
    () => problem.parts.some((part) => part.answerLatex),
    [problem.parts]
  );
  const hasSolution = useMemo(
    () => problem.parts.some((part) => part.solutionSteps && part.solutionSteps.length > 0),
    [problem.parts]
  );
  const hasHints = useMemo(
    () => problem.parts.some((part) => part.hints && part.hints.length > 0),
    [problem.parts]
  );

  // Get candidate image paths
  const candidateImagePaths = useMemo(
    () => problem.imagePaths?.filter((path) => path) || [],
    [problem.imagePaths]
  );

  // Open image viewer
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setImageViewerOpen(true);
  };

  // Get existing images for viewer (will be filtered by ProblemImagesPanel)
  const [existingImagePaths, setExistingImagePaths] = useState<string[]>([]);
  
  // Handle images filtered callback
  const handleImagesFiltered = (paths: string[]) => {
    setExistingImagePaths(paths);
  };

  // 清洗 promptLatex 内容，移除不需要的 LaTeX 命令
  const sanitizePromptLatexForUI = (raw: string): string => {
    if (!raw) return '';
    
    let cleaned = raw;

    // 1. 移除 figure 环境（图片已经在顶部显示，不需要在文本中显示）
    cleaned = cleaned.replace(/\\begin\{figure\}[\s\S]*?\\end\{figure\}/g, '');

    // 2. 移除其他图片相关的 LaTeX 命令
    cleaned = cleaned.replace(/\\includegraphics(\[[^\]]*\])?\{[^}]*\}/g, '');
    cleaned = cleaned.replace(/\\caption\{[^}]*\}/g, '');
    cleaned = cleaned.replace(/\\label\{[^}]*\}/g, '');

    // 3. 将 LaTeX 换行符 \\ 转换为真正的换行（避免显示 "\\"）
    // 注意：只匹配两个连续的反斜杠，不会影响 \[ 等单反斜杠命令
    cleaned = cleaned.replace(/\\\\\s*/g, '\n');

    // 4. 清理多余的空行
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n').trim();

    return cleaned;
  };

  // Render LaTeX content
  const renderLatexContent = (content: string) => {
    const parts: (string | JSX.Element)[] = [];
    const displayRegex = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\])/g;
    const displayChunks = content.split(displayRegex);
    let keyIndex = 0;

    displayChunks.forEach((chunk) => {
      if (!chunk) return;

      const isDollarDisplay = chunk.startsWith('$$') && chunk.endsWith('$$');
      if (isDollarDisplay) {
        const latex = chunk.slice(2, -2).trim();
        if (latex) {
          try {
            const html = katex.renderToString(latex, {
              throwOnError: false,
              displayMode: true,
            });
            parts.push(
              <div
                key={`d-${keyIndex++}`}
                className="my-3 p-3 bg-slate-50 rounded border border-slate-200 overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            parts.push(<div key={`d-${keyIndex++}`} className="text-red-500">{chunk}</div>);
          }
        }
        return;
      }

      const isBracketDisplay = chunk.startsWith('\\[') && chunk.endsWith('\\]');
      if (isBracketDisplay) {
        const latex = chunk.slice(2, -2).trim();
        if (latex) {
          try {
            const html = katex.renderToString(latex, {
              throwOnError: false,
              displayMode: true,
            });
            parts.push(
              <div
                key={`b-${keyIndex++}`}
                className="my-3 p-3 bg-slate-50 rounded border border-slate-200 overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            parts.push(<div key={`b-${keyIndex++}`} className="text-red-500">{chunk}</div>);
          }
        }
        return;
      }

      const inlineRegex = /(\$[^$]+\$|\\\([\s\S]+?\\\))/g;
      const inlineChunks = chunk.split(inlineRegex);

      inlineChunks.forEach((inlineChunk) => {
        if (!inlineChunk) return;

        const isDollarInline =
          inlineChunk.startsWith('$') &&
          inlineChunk.endsWith('$') &&
          !inlineChunk.startsWith('$$');
        if (isDollarInline) {
          const latex = inlineChunk.slice(1, -1);
          try {
            const html = katex.renderToString(latex, {
              throwOnError: false,
              displayMode: false,
            });
            parts.push(
              <span
                key={`i-${keyIndex++}`}
                className="inline-block align-middle mx-0.5"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            parts.push(<span key={`i-${keyIndex++}`}>{inlineChunk}</span>);
          }
          return;
        }

        const isParenInline = inlineChunk.startsWith('\\(') && inlineChunk.endsWith('\\)');
        if (isParenInline) {
          const latex = inlineChunk.slice(2, -2);
          try {
            const html = katex.renderToString(latex, {
              throwOnError: false,
              displayMode: false,
            });
            parts.push(
              <span
                key={`p-${keyIndex++}`}
                className="inline-block align-middle mx-0.5"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            parts.push(<span key={`p-${keyIndex++}`}>{inlineChunk}</span>);
          }
          return;
        }

        parts.push(
          <span
            key={`t-${keyIndex++}`}
            className="whitespace-pre-wrap leading-relaxed"
          >
            {inlineChunk}
          </span>
        );
      });
    });

    return parts.length > 0 ? parts : [content];
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-6xl mx-auto"
    >
      {/* Header Bar */}
      <ProblemHeaderBar
        year={problem.year}
        question={problem.qno || problem.question || ''}
        id={problem.id}
        theme={problem.theme}
        difficulty={typeof problem.difficulty === 'number' ? problem.difficulty.toString() : problem.difficulty}
        imageCount={candidateImagePaths.length}
        onBack={onBack}
      />

      {/* New Layout: Problem Images at Top, Always Visible */}
      <div className="space-y-6">
        {/* Images Section - Always Visible at Top */}
        {candidateImagePaths.length > 0 && (
          <div className="w-full">
            <ProblemImagesPanel
              candidateImagePaths={candidateImagePaths}
              onImageClick={handleImageClick}
              onImagesFiltered={handleImagesFiltered}
              title="Problem Images"
            />
          </div>
        )}

        {/* Main Content: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Problem Text (8 cols on desktop) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Problem Statement */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 md:p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Problem Statement
              </h3>
              <div className="space-y-4">
                {problem.parts.map((part, idx) => {
                  // 检查是否是 stem part
                  const isStem = part.part === 'stem';
                  
                  return (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                      {!isStem && (
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-slate-900">
                            Part ({part.part})
                          </span>
                          {part.marks && (
                            <span className="text-sm text-slate-500">
                              {part.marks} marks
                            </span>
                          )}
                        </div>
                      )}
                      {isStem && (
                        <div className="mb-3">
                          <span className="font-semibold text-slate-900 text-base">
                            Problem Context
                          </span>
                        </div>
                      )}
                      {part.promptLatex ? (
                        <div className={`text-slate-700 ${isStem ? '' : 'mt-2'}`}>
                          {renderLatexContent(sanitizePromptLatexForUI(part.promptLatex))}
                        </div>
                      ) : part.content ? (
                        <div className={`text-slate-700 ${isStem ? '' : 'mt-2'} leading-relaxed whitespace-pre-wrap`}>
                          {part.content}
                        </div>
                      ) : (
                        <div className="text-sm text-slate-400 italic mt-2">
                          No problem text available for this part.
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Study Panel (4 cols on desktop) */}
          <div className="lg:col-span-4">
            {/* Practice Mode Toggle */}
            {(hasAnswer || hasSolution || hasHints) && (
              <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!practiceMode}
                    onChange={(e) => setPracticeMode(!e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm text-amber-800">
                    Show answers and solutions
                  </span>
                </label>
              </div>
            )}

            <StudyPanel
              defaultTab="knowledge"
              extractedParts={practiceMode ? 
                problem.parts.map(p => ({
                  ...p,
                  answerLatex: undefined,
                  solutionSteps: undefined,
                  hints: undefined,
                })) : 
                problem.parts
              }
              knowledgePointIds={problem.knowledgePointIds || []}
              derivationIds={problem.derivationIds || []}
              onProblemClick={(problemId) => {
                console.log('Navigate to problem:', problemId);
              }}
            />
          </div>
        </div>
      </div>

      {/* Image Viewer */}
      {imageViewerOpen && existingImagePaths.length > 0 && (
        <ImageViewer
          images={existingImagePaths}
          currentIndex={currentImageIndex}
          onClose={() => setImageViewerOpen(false)}
        />
      )}
    </motion.div>
  );
}
