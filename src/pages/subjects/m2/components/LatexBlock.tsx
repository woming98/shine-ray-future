/**
 * LatexBlock
 * 默认卡片内可横向滚动，并支持一键全屏查看（Expand）
 */

import { useMemo, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import LatexViewerModal from './LatexViewerModal';

interface LatexBlockProps {
  latex: string;
  displayMode?: boolean;
  allowExpand?: boolean;
  title?: string;
}

export default function LatexBlock({
  latex,
  displayMode = true,
  allowExpand = true,
  title = 'Formula',
}: LatexBlockProps) {
  const [open, setOpen] = useState(false);

  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, { throwOnError: false, displayMode });
    } catch {
      return '';
    }
  }, [latex, displayMode]);

  return (
    <>
      <div className="relative max-w-full overflow-x-auto bg-slate-50 rounded px-3 py-2 border border-slate-200/60">
        {allowExpand && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute right-2 top-2 text-xs px-2 py-1 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Expand
          </button>
        )}
        {html ? (
          <div className="w-max min-w-full text-left pt-6 md:pt-0" dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <div className="text-sm text-slate-600">LaTeX Error</div>
        )}
      </div>

      <LatexViewerModal
        open={open}
        latex={latex}
        displayMode={displayMode}
        title={title}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

