/**
 * 订阅卡片组件
 * 显示订阅计划和购买按钮
 */

import { motion } from 'framer-motion'
import { Check, Crown, Sparkles, Zap } from 'lucide-react'
import { useSubscription } from '../store/useSubscription'

export default function SubscriptionCard() {
  const { isPremium, expiresAt, setPremium, cancelSubscription } = useSubscription()

  // 模拟购买订阅
  const handleSubscribe = () => {
    const expires = new Date()
    expires.setMonth(expires.getMonth() + 1)
    setPremium(true, expires.toISOString())
    alert('訂閱成功！這是模擬訂閱，實際需要接入支付系統。')
  }

  // 免费计划功能
  const freeFeatures = [
    '基礎學習資源',
    '部分練習題',
    '學校榜單查看',
    '入學測試（限次）',
  ]

  // 高级计划功能
  const premiumFeatures = [
    '全部學習資源',
    '無限練習題庫',
    '詳細學習報告',
    '進度追蹤系統',
    '錯題本功能',
    'AI 寫作評分',
    '專屬學習顧問',
    '優先客服支持',
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* 免费计划 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 border-2 border-slate-200"
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-xl mb-4">
            <Sparkles className="w-6 h-6 text-slate-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">免費版</h3>
          <div className="text-3xl font-bold text-slate-900">
            ¥0
            <span className="text-base font-normal text-slate-500">/月</span>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {freeFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
              <Check className="w-4 h-4 text-slate-400 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <button
          disabled={!isPremium}
          className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl font-medium cursor-not-allowed"
        >
          當前方案
        </button>
      </motion.div>

      {/* 高级计划 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`rounded-2xl p-6 relative overflow-hidden ${
          isPremium
            ? 'bg-gradient-to-br from-primary-500 to-primary-600 border-2 border-primary-400'
            : 'bg-white border-2 border-primary-500'
        }`}
      >
        {/* 推荐标签 */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            isPremium ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-700'
          }`}>
            推薦
          </span>
        </div>

        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
            isPremium ? 'bg-white/20' : 'bg-primary-100'
          }`}>
            <Crown className={`w-6 h-6 ${isPremium ? 'text-white' : 'text-primary-600'}`} />
          </div>
          <h3 className={`text-xl font-bold mb-2 ${isPremium ? 'text-white' : 'text-slate-800'}`}>
            高級會員
          </h3>
          <div className={`text-3xl font-bold mb-1 ${isPremium ? 'text-white' : 'text-slate-900'}`}>
            ¥29.9
            <span className={`text-base font-normal ${isPremium ? 'text-white/70' : 'text-slate-500'}`}>/月</span>
          </div>
          {isPremium && expiresAt && (
            <p className="text-sm text-white/80">
              有效期至：{new Date(expiresAt).toLocaleDateString('zh-CN')}
            </p>
          )}
        </div>

        <ul className="space-y-3 mb-6">
          {premiumFeatures.map((feature, index) => (
            <li key={index} className={`flex items-center gap-2 text-sm ${isPremium ? 'text-white/90' : 'text-slate-600'}`}>
              <Check className={`w-4 h-4 flex-shrink-0 ${isPremium ? 'text-white' : 'text-primary-500'}`} />
              {feature}
            </li>
          ))}
        </ul>

        {isPremium ? (
          <div className="space-y-3">
            <button className="w-full py-3 bg-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              已訂閱
            </button>
            <button
              onClick={cancelSubscription}
              className="w-full py-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              取消訂閱
            </button>
          </div>
        ) : (
          <button
            onClick={handleSubscribe}
            className="w-full py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-lg"
          >
            立即訂閱
          </button>
        )}
      </motion.div>
    </div>
  )
}
