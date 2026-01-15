import { motion } from 'framer-motion'

/**
 * 加载动画组件
 * 在页面加载时显示品牌风格的加载动画
 */
export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo 动画 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto relative">
            {/* 外圈旋转动画 */}
            <motion.div
              className="absolute inset-0 border-4 border-accent-400/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            {/* 内圈反向旋转 */}
            <motion.div
              className="absolute inset-2 border-4 border-t-accent-400 border-r-transparent border-b-transparent border-l-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            {/* 中心光点 */}
            <motion.div
              className="absolute inset-6 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>
        
        {/* 品牌名称 */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-white mb-2"
        >
          莘睿未来
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-primary-200 text-sm"
        >
          Shine Ray Future
        </motion.p>
        
        {/* 加载文字 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex items-center justify-center gap-1"
        >
          <span className="text-primary-300 text-sm">加载中</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-accent-400"
          >
            ...
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}
