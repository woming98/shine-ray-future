/**
 * Latex Viewer Modal
 * 用于全屏/弹窗查看长公式，移动端体验更好
 */

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LatexViewerModalProps {
  open: boolean;
  latex: string;
  displayMode?: boolean;
  title?: string;
  onClose: () => void;
}

export default function LatexViewerModal({
  open,
  latex,
  displayMode = true,
  title = 'Formula',
  onClose,
}: LatexViewerModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  let html = '';
  try {
    html = katex.renderToString(latex, { throwOnError: false, displayMode });
  } catch {
    html = '';
  }

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      {/* Panel */}
      <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
            <div className="text-sm font-semibold text-slate-900">{title}</div>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-sm rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              Close
            </button>
          </div>

          <div className="p-4 md:p-6 max-h-[80vh] overflow-auto">
            {html ? (
              <div className="w-max min-w-full" dangerouslySetInnerHTML={{ __html: html }} />
            ) : (
              <div className="text-sm text-slate-600">LaTeX Error</div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

