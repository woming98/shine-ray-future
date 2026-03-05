/**
 * Problem Header Bar Component
 * Displays problem title, ID, tags, and action buttons
 */

import { motion } from 'framer-motion';

interface ProblemHeaderBarProps {
  year: string;
  question: string;
  id: string;
  theme?: string | null;
  difficulty?: string | null;
  imageCount: number;
  onBack: () => void;
}

export default function ProblemHeaderBar({
  year,
  question,
  id,
  theme,
  difficulty,
  imageCount,
  onBack,
}: ProblemHeaderBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6 pb-4 border-b border-slate-200"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left: Title and ID */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-1">
            {year} DSE M2 Q{question}
          </h2>
          <p className="text-sm text-slate-500">ID: {id}</p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          <button
            onClick={onBack}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-sm font-medium min-h-[44px]"
          >
            ← Back to list
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {theme && (
          <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-700 rounded-full text-xs font-medium">
            Theme: {theme}
          </span>
        )}
        {difficulty && (
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            Difficulty: {difficulty}
          </span>
        )}
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
          Images: {imageCount}
        </span>
      </div>
    </motion.div>
  );
}
