import { motion } from 'framer-motion'

function LoadingScreen() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      {/* Shineray Future Logo with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-6"
      >
        <motion.img
          src="/ShineRayFutureLogo.jpg"
          alt="莘睿未来 Shineray Future"
          className="h-16 w-auto"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Sparkle effects */}
        <motion.span
          className="absolute -top-2 -right-2 text-bio-primary text-lg"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ✦
        </motion.span>
        <motion.span
          className="absolute -bottom-1 -left-2 text-bio-secondary text-sm"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        >
          ✦
        </motion.span>
      </motion.div>
      
      {/* Loading spinner with Shineray gradient */}
      <div className="spinner mb-4" />
      
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-bio-dark font-medium"
      >
        Loading...
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-bio-gray text-sm mt-2"
      >
        莘睿未来 · Shineray Future
      </motion.p>
    </div>
  )
}

export default LoadingScreen
