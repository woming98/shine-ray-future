/**
 * 题目列表组件
 * 显示所有 M2 三角函数题目，支持按年份筛选
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { m2ProblemsData, problemsByYear, allYears } from '../data/problems';
import { Problem } from '../types';
import ProblemDetail from './ProblemDetail';

export default function ProblemList() {
  const [selectedYear, setSelectedYear] = useState<string | 'all'>('all');
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

  // 筛选后的题目列表
  const filteredProblems = useMemo(() => {
    if (selectedYear === 'all') {
      return m2ProblemsData.problems;
    }
    return problemsByYear[selectedYear] || [];
  }, [selectedYear]);

  // 按年份分组显示
  const groupedProblems = useMemo(() => {
    const groups: Record<string, Problem[]> = {};
    filteredProblems.forEach(problem => {
      const year = problem.year;
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(problem);
    });
    return groups;
  }, [filteredProblems]);

  if (selectedProblem) {
    return (
      <ProblemDetail 
        problem={selectedProblem} 
        onBack={() => setSelectedProblem(null)}
      />
    );
  }

  // 计算总题目数
  const totalProblems = m2ProblemsData.problems.length;

  return (
    <div className="space-y-6">
      {/* 年份筛选器 */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedYear('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            selectedYear === 'all'
              ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-fuchsia-50 border border-fuchsia-200'
          }`}
        >
          全部 ({totalProblems})
        </button>
        {allYears.map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedYear === year
                ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-fuchsia-50 border border-fuchsia-200'
            }`}
          >
            {year} ({problemsByYear[year]?.length || 0})
          </button>
        ))}
      </div>

      {/* 题目列表 */}
      <div className="space-y-6">
        {Object.keys(groupedProblems)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .map(year => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                {year} DSE M2 Trigonometry Problems
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedProblems[year].map(problem => {
                  const mainImagePath = problem.imagePaths?.[0];
                  const hasImages = problem.imagePaths && problem.imagePaths.length > 0;
                  // 修复：使用 qno 或 question
                  const questionNumber = problem.qno || problem.question || '';
                  
                  return (
                    <motion.button
                      key={problem.id}
                      onClick={() => setSelectedProblem(problem)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-left p-4 rounded-lg border-2 border-slate-200 hover:border-fuchsia-400 hover:bg-fuchsia-50 transition-all overflow-hidden focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
                    >
                      {/* Image preview */}
                      {mainImagePath && (
                        <div className="mb-3 -mx-4 -mt-4">
                          <img
                            src={mainImagePath}
                            alt={`${problem.year} Q${questionNumber}`}
                            className="w-full h-32 object-contain bg-slate-50"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-fuchsia-600">
                          Q{questionNumber}
                        </span>
                        <span className="text-sm text-slate-500">
                          ID: {problem.id}
                        </span>
                      </div>
                      <div className="text-sm text-slate-600 mb-2">
                        {problem.parts.length > 0 ? (
                          <span className="text-emerald-600">
                            {problem.parts.length} parts
                          </span>
                        ) : (
                          <span className="text-slate-400">No parts</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {hasImages && (
                          <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded">
                            📷 {problem.imagePaths?.length} images
                          </span>
                        )}
                        {problem.tags && problem.tags.length > 0 && (
                          <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-700 rounded">
                            {problem.tags[0]}
                          </span>
                        )}
                        {problem.difficulty && (
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                            Difficulty: {problem.difficulty}
                          </span>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
      </div>

      {/* Empty state */}
      {filteredProblems.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <p>No problems found</p>
          <p className="text-sm mt-2">Debug: Total problems = {m2ProblemsData.problems.length}</p>
          <p className="text-sm">Available years: {allYears.join(', ') || 'None'}</p>
        </div>
      )}
    </div>
  );
}
