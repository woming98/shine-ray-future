/**
 * Extracted Text Panel Component
 * Displays extracted text content with warning message
 */

import { motion } from 'framer-motion';
import { ProblemPart } from '../types';
import katex from 'katex';
import 'katex/dist/katex.min.css';

type ExtractedTextMode = 'question' | 'notes' | 'hints' | 'solution' | 'extracted';

interface ExtractedTextPanelProps {
  parts: ProblemPart[];
  enabled: boolean;
  mode?: ExtractedTextMode;
}

export default function ExtractedTextPanel({
  parts,
  enabled,
  mode = 'extracted',
}: ExtractedTextPanelProps) {
  if (!enabled || parts.length === 0) {
    return null;
  }

  const normalizeSectionTitle = (title: string) => title.trim();

  const parseContentSections = (content: string) => {
    const lines = content.split('\n');
    const sections: Array<{ title: string; content: string }> = [];
    let current: { title: string; content: string } | null = null;

    for (const line of lines) {
      const match = line.match(/^【([^】]+)】\s*(.*)$/);
      if (match) {
        if (current) {
          sections.push({
            title: current.title,
            content: current.content.trim(),
          });
        }
        current = { title: match[1], content: match[2] || '' };
        continue;
      }

      if (!current) {
        current = { title: 'Text', content: line };
        continue;
      }

      current.content = current.content ? `${current.content}\n${line}` : line;
    }

    if (current) {
      sections.push({
        title: current.title,
        content: current.content.trim(),
      });
    }

    return sections.filter((s) => s.content.trim().length > 0);
  };

  const allowedSectionTitlesByMode: Record<Exclude<ExtractedTextMode, 'extracted'>, string[]> = {
    question: ['題目', '题目', 'Question', 'Problem'],
    notes: ['知識點', '知识点', '常見錯誤', '常见错误', '變式練習', '变式练习'],
    hints: ['知識點', '知识点'],
    solution: ['解答', '解题', 'Solution', '答案'],
  };

  const filterSectionsByMode = (
    sections: Array<{ title: string; content: string }>
  ) => {
    if (mode === 'extracted') return sections;
    const allowed = new Set(
      allowedSectionTitlesByMode[mode].map(normalizeSectionTitle)
    );
    const filtered = sections.filter((s) => allowed.has(normalizeSectionTitle(s.title)));
    if (mode === 'question' && filtered.length === 0) {
      return sections;
    }
    return filtered;
  };

  const renderInlineMath = (latex: string, key: string) => {
    const html = katex.renderToString(latex, {
      throwOnError: false,
      displayMode: false,
    });
    return (
      <span
        key={key}
        className="inline-block align-middle mx-0.5"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  };

  const renderDisplayMath = (latex: string, key: string) => {
    const html = katex.renderToString(latex, {
      throwOnError: false,
      displayMode: true,
    });
    return (
      <div
        key={key}
        className="my-2 bg-white p-3 rounded border border-slate-200 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  };

  const renderContent = (content: string) => {
    const nodes: Array<JSX.Element> = [];
    const displayRegex = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\])/g;
    const displayChunks = content.split(displayRegex);

    displayChunks.forEach((chunk, displayIndex) => {
      if (!chunk) return;

      const isDollarDisplay = chunk.startsWith('$$') && chunk.endsWith('$$');
      if (isDollarDisplay) {
        const latex = chunk.slice(2, -2).trim();
        if (latex) {
          nodes.push(renderDisplayMath(latex, `d-${displayIndex}`));
        }
        return;
      }

      const isBracketDisplay = chunk.startsWith('\\[') && chunk.endsWith('\\]');
      if (isBracketDisplay) {
        const latex = chunk.slice(2, -2).trim();
        if (latex) {
          nodes.push(renderDisplayMath(latex, `b-${displayIndex}`));
        }
        return;
      }

      const inlineRegex = /(\$[^$]+\$|\\\([\s\S]+?\\\))/g;
      const inlineChunks = chunk.split(inlineRegex);

      inlineChunks.forEach((inlineChunk, inlineIndex) => {
        if (!inlineChunk) return;

        const isDollarInline =
          inlineChunk.startsWith('$') &&
          inlineChunk.endsWith('$') &&
          !inlineChunk.startsWith('$$');
        if (isDollarInline) {
          const latex = inlineChunk.slice(1, -1);
          nodes.push(renderInlineMath(latex, `i-${displayIndex}-${inlineIndex}`));
          return;
        }

        const isParenInline = inlineChunk.startsWith('\\(') && inlineChunk.endsWith('\\)');
        if (isParenInline) {
          const latex = inlineChunk.slice(2, -2);
          nodes.push(renderInlineMath(latex, `p-${displayIndex}-${inlineIndex}`));
          return;
        }

        nodes.push(
          <span
            key={`t-${displayIndex}-${inlineIndex}`}
            className="whitespace-pre-wrap"
          >
            {inlineChunk}
          </span>
        );
      });
    });

    return nodes;
  };

  return (
    <div className="space-y-4">
      {/* Warning */}
      {mode === 'extracted' && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="text-xs text-amber-800">
            <strong>Note:</strong> Extracted text may contain errors. Images are
            the source of truth.
          </p>
        </div>
      )}

      {/* Parts */}
      <div className="space-y-4">
        {parts.map((part, index) => {
          const contentSections = parseContentSections(part.content || '');
          const filteredSections = filterSectionsByMode(contentSections);
          const showFormulas = mode === 'extracted' || mode === 'solution';
          const showFigureRefs = mode === 'extracted';

          if (filteredSections.length === 0 && (!showFormulas || !part.latex_formulas || part.latex_formulas.length === 0)) {
            return null;
          }

          return (
            <motion.div
              key={part.part}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-slate-50 rounded-lg border border-slate-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">Part ({part.part})</h4>
                {part.marks && (
                  <span className="text-sm text-slate-600">{part.marks} marks</span>
                )}
              </div>

              {/* Sections */}
              {filteredSections.length > 0 ? (
                <div className="space-y-3">
                  {filteredSections.map((section) => (
                    <div
                      key={`${part.part}-${section.title}`}
                      className="bg-white/70 rounded-lg border border-slate-200 px-3 py-2"
                    >
                      <p className="text-xs font-semibold text-slate-600 mb-1">
                        {section.title}
                      </p>
                      <div className="text-slate-700 leading-7">
                        {renderContent(section.content)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-600">No content for this tab.</p>
              )}

              {/* LaTeX Formulas */}
              {showFormulas && part.latex_formulas && part.latex_formulas.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold text-slate-600 mb-2">
                    Formulas:
                  </p>
                  {(part.latex_formulas || []).map((formula, idx) => (
                    <div key={idx}>{renderDisplayMath(formula, `${part.part}-f-${idx}`)}</div>
                  ))}
                </div>
              )}

              {/* Figure References */}
              {showFigureRefs && part.figure_refs && part.figure_refs.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-600 mb-1">
                    Figure references:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(part.figure_refs || []).map((ref, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
