/**
 * Image Viewer Component
 * Supports image zoom, pan, and navigation
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

interface ImageViewerProps {
  images: string[];
  currentIndex?: number;
  onClose: () => void;
}

export default function ImageViewer({
  images,
  currentIndex = 0,
  onClose,
}: ImageViewerProps) {
  const [index, setIndex] = useState(currentIndex);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Filter out invalid images
  const validImages = images.filter((img) => {
    return img && img.includes('/m2-problems/');
  });

  useEffect(() => {
    setIndex(Math.min(currentIndex, validImages.length - 1));
  }, [currentIndex, validImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, scale]);

  const handlePrevious = () => {
    if (validImages.length === 0) return;
    setIndex((prev) => (prev > 0 ? prev - 1 : validImages.length - 1));
    setImageLoaded(false);
    setScale(1);
    setRotation(0);
  };

  const handleNext = () => {
    if (validImages.length === 0) return;
    setIndex((prev) => (prev < validImages.length - 1 ? prev + 1 : 0));
    setImageLoaded(false);
    setScale(1);
    setRotation(0);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setRotation(0);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  if (validImages.length === 0) {
    return null;
  }

  const currentImage = validImages[index];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image container */}
        <div
          className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Loading state */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white">Loading...</div>
            </div>
          )}

          {/* Image */}
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={`Image ${index + 1}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: imageLoaded ? 1 : 0,
              scale: imageLoaded ? scale : 0.9,
              rotate: rotation,
            }}
            transition={{ duration: 0.2 }}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageLoaded(true);
            }}
            className="max-w-full max-h-[90vh] object-contain"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
            }}
          />

          {/* Navigation buttons */}
          {validImages.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Image info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
            {index + 1} / {validImages.length}
          </div>
        </div>

        {/* Control toolbar */}
        <div className="absolute bottom-4 right-4 flex flex-wrap gap-2 max-w-[calc(100vw-2rem)]">
          <button
            onClick={handleZoomOut}
            className="p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={handleReset}
            className="p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-xs md:text-sm min-h-[44px] px-3"
            aria-label="Reset"
          >
            Reset
          </button>
          <button
            onClick={handleZoomIn}
            className="p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={handleRotate}
            className="p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Rotate"
          >
            <RotateCw className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
