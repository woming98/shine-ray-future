/**
 * Problem Images Panel Component
 * Displays problem images in a grid, with filtering and lightbox support
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { filterExistingImages } from '../utils/imageMapper';

interface ProblemImagesPanelProps {
  candidateImagePaths: string[];
  onImageClick: (index: number) => void;
  onImagesFiltered?: (existingPaths: string[]) => void;
  title?: string;
}

export default function ProblemImagesPanel({
  candidateImagePaths,
  onImageClick,
  onImagesFiltered,
  title = 'Problem images',
}: ProblemImagesPanelProps) {
  const [existingImagePaths, setExistingImagePaths] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadImages = async () => {
      setLoading(true);
      try {
        const existing = await filterExistingImages(candidateImagePaths, 5);
        if (!cancelled) {
          setExistingImagePaths(existing);
          onImagesFiltered?.(existing);
        }
      } catch (error) {
        console.error('Error filtering images:', error);
        if (!cancelled) {
          setExistingImagePaths([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadImages();

    return () => {
      cancelled = true;
    };
  }, [candidateImagePaths]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 hidden md:block">Click an image to zoom</p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-sm text-slate-500 py-12 text-center">
          Loading images...
        </div>
      )}

      {/* Empty State */}
      {!loading && existingImagePaths.length === 0 && (
        <div className="text-sm text-slate-500 py-12 text-center bg-slate-50 rounded-lg border border-slate-200">
          No images found for this problem.
        </div>
      )}

      {/* Images Grid */}
      {!loading && existingImagePaths.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {existingImagePaths.map((imagePath, idx) => (
            <motion.button
              key={imagePath}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onImageClick(idx)}
              className="group text-left rounded-lg border border-slate-200 overflow-hidden bg-white hover:shadow-md hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
            >
              <div className="relative bg-slate-50">
                <img
                  src={imagePath}
                  alt={`Problem image ${idx + 1}`}
                  className="w-full h-auto object-contain bg-white"
                  loading="lazy"
                />
              </div>
              <div className="px-3 py-2 text-xs text-slate-500 border-t border-slate-100">
                {idx + 1} / {existingImagePaths.length}
              </div>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
