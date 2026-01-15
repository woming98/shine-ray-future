import { motion } from 'framer-motion';
import { Trophy, Lock, Star, Flame, Target, BookOpen, Award } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Card } from '../components/UI/Card';
import { ProgressRing } from '../components/UI/ProgressRing';

export default function AchievementsPage() {
  const { achievements, user, stats } = useStore();

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;

  // 按类别分组
  const categories = [
    { id: 'learning', name: '学习成就', icon: BookOpen, color: 'shine' },
    { id: 'practice', name: '练习成就', icon: Target, color: 'green' },
    { id: 'challenge', name: '挑战成就', icon: Flame, color: 'ray' },
    { id: 'special', name: '特殊成就', icon: Star, color: 'purple' },
  ];

  const getCategoryAchievements = (categoryId: string) =>
    achievements.filter((a) => a.category === categoryId);

  // 等级信息
  const levelProgress = user ? ((user.experience % 1000) / 1000) * 100 : 0;
  const expToNextLevel = user ? 1000 - (user.experience % 1000) : 1000;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* 页面标题 */}
      <div>
        <h1 className="text-3xl font-display font-bold text-blue-100">成就系统</h1>
        <p className="text-blue-300 mt-2">记录你的学习里程碑，收集专属徽章</p>
      </div>

      {/* 统计概览 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 等级卡片 */}
        <Card hover={false} className="p-6 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
          <div className="flex items-center gap-6">
            <ProgressRing progress={levelProgress} size={100} strokeWidth={8}>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-100">Lv.{user?.level || 1}</p>
              </div>
            </ProgressRing>
            <div>
              <h3 className="text-lg font-bold text-blue-100 mb-1">物理探索者</h3>
              <p className="text-blue-300 text-sm mb-3">
                距离下一级还需 {expToNextLevel} 经验
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent-400" />
                <span className="text-blue-100 font-medium">{user?.experience || 0} XP</span>
              </div>
            </div>
          </div>
        </Card>

        {/* 成就进度 */}
        <Card hover={false} className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-blue-100" />
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-100">
                {unlockedCount}/{totalCount}
              </p>
              <p className="text-blue-300">成就已解锁</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(unlockedCount / totalCount) * 100}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              />
            </div>
          </div>
        </Card>

        {/* 连续学习 */}
        <Card hover={false} className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <Flame className="w-8 h-8 text-blue-100" />
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-100">{stats.currentStreak} 天</p>
              <p className="text-blue-300">连续学习</p>
              <p className="text-blue-300 text-sm">最长: {stats.longestStreak} 天</p>
            </div>
          </div>
        </Card>
      </div>

      {/* 成就分类 */}
      {categories.map((category) => {
        const categoryAchievements = getCategoryAchievements(category.id);
        if (categoryAchievements.length === 0) return null;

        return (
          <div key={category.id}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl bg-${category.color}-500/20 flex items-center justify-center`}>
                <category.icon className={`w-5 h-5 text-${category.color}-400`} />
              </div>
              <h2 className="text-xl font-bold text-blue-100">{category.name}</h2>
              <span className="text-blue-300 text-sm">
                {categoryAchievements.filter((a) => a.unlocked).length}/{categoryAchievements.length}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    hover={achievement.unlocked}
                    className={`p-5 ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30'
                        : 'opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${
                          achievement.unlocked
                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                            : 'bg-white/10'
                        }`}
                      >
                        {achievement.unlocked ? (
                          achievement.icon
                        ) : (
                          <Lock className="w-6 h-6 text-blue-300" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-blue-100 font-bold">{achievement.titleCN}</h3>
                        <p className="text-blue-300 text-sm">{achievement.title}</p>
                        <p className="text-blue-300 text-xs mt-1">{achievement.description}</p>
                      </div>
                    </div>

                    {!achievement.unlocked && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-blue-300 text-xs">进度</span>
                          <span className="text-blue-300 text-xs">
                            {achievement.progress}/{achievement.requirement}
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-400 to-accent-500 rounded-full"
                            style={{
                              width: `${Math.min(
                                (achievement.progress / achievement.requirement) * 100,
                                100
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {achievement.unlocked && achievement.unlockedAt && (
                      <div className="mt-3 flex items-center gap-2 text-yellow-400 text-xs">
                        <Award className="w-4 h-4" />
                        解锁于 {new Date(achievement.unlockedAt).toLocaleDateString()}
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}

      {/* 经验获取方式 */}
      <Card hover={false} className="p-6">
        <h3 className="text-lg font-bold text-blue-100 mb-4">如何获取经验</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white/5 rounded-xl text-center">
            <BookOpen className="w-8 h-8 text-primary-400 mx-auto mb-2" />
            <p className="text-blue-100 font-medium">完成章节学习</p>
            <p className="text-primary-400">+50 XP</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-blue-100 font-medium">正确回答题目</p>
            <p className="text-green-400">+10 XP</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-blue-100 font-medium">完成测验</p>
            <p className="text-yellow-400">+100 XP</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl text-center">
            <Flame className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <p className="text-blue-100 font-medium">每日登录</p>
            <p className="text-orange-400">+20 XP</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

