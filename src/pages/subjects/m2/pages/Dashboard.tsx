/**
 * M2 学习中心首页
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useM2Store } from '../store/useStore';
import { M2_TOPICS } from '../constants/topics';

export default function Dashboard() {
  const { stats, getTopicProgress } = useM2Store();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            M2 延伸部分單元二
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            數學延伸部分單元二（代數與微積分）- 通過互動式學習掌握高級數學概念
          </p>
        </motion.div>
      </section>

      {/* Stats Cards */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 border border-fuchsia-200 shadow-sm"
          >
            <div className="text-2xl font-bold text-fuchsia-600">{stats.totalStudyTime}</div>
            <div className="text-sm text-gray-600">學習分鐘</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 border border-pink-200 shadow-sm"
          >
            <div className="text-2xl font-bold text-pink-600">{stats.formulasMastered}</div>
            <div className="text-sm text-gray-600">掌握公式</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 border border-rose-200 shadow-sm"
          >
            <div className="text-2xl font-bold text-rose-600">{stats.proofsCompleted}</div>
            <div className="text-sm text-gray-600">完成證明</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 border border-fuchsia-200 shadow-sm"
          >
            <div className="text-2xl font-bold text-fuchsia-600">{stats.currentStreak}</div>
            <div className="text-sm text-gray-600">連續天數</div>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">學習主題</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {M2_TOPICS && M2_TOPICS.length > 0 ? (
            M2_TOPICS.map((topic, index) => {
              const progress = getTopicProgress(topic.id);
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={topic.path}
                    className="block bg-white rounded-xl p-6 border border-fuchsia-200 hover:border-fuchsia-400 hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {topic.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg">{topic.nameZh}</h3>
                        <p className="text-sm text-gray-500">{topic.name}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{topic.description}</p>
                    {progress > 0 && (
                      <div className="h-2 bg-fuchsia-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full text-center text-gray-500 py-8">
              暫無主題數據
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
