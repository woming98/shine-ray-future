/**
 * DSE 倒计时组件
 * 显示距离 DSE 考试的剩余时间
 */

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import { DSE_EXAM_DATE } from '../data/dseSchedule2026'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

export default function DseCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const examDate = new Date(DSE_EXAM_DATE + 'T08:30:00+08:00') // 香港时间早上8:30
      const now = new Date()
      const difference = examDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          total: difference,
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // 时间单位配置
  const timeUnits = [
    { value: timeLeft.days, label: '天', labelEn: 'Days' },
    { value: timeLeft.hours, label: '時', labelEn: 'Hours' },
    { value: timeLeft.minutes, label: '分', labelEn: 'Minutes' },
    { value: timeLeft.seconds, label: '秒', labelEn: 'Seconds' },
  ]

  // 如果已经过了考试时间
  if (timeLeft.total <= 0) {
    return (
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-center text-white">
        <div className="text-2xl font-bold mb-2">DSE 2026 考試進行中</div>
        <p className="text-emerald-100">祝各位考生考試順利！</p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-navy-900 via-primary-900 to-navy-950 rounded-3xl p-6 md:p-8 text-white overflow-hidden relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]" />
      
      <div className="relative">
        {/* 标题 */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-accent-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold">DSE 2026 倒計時</h3>
            <p className="text-sm text-primary-200">首日考試：2026年4月8日</p>
          </div>
        </div>

        {/* 倒计时数字 */}
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.labelEn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 text-center border border-white/10">
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-xs md:text-sm text-primary-200">{unit.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-200">
          <Clock className="w-4 h-4" />
          <span>距離 DSE 首科考試還有 {timeLeft.days} 天</span>
        </div>
      </div>
    </div>
  )
}
