import { motion } from 'framer-motion'
import { Trophy, ExternalLink, TrendingUp } from 'lucide-react'
import { dseTop50, DseSchool } from '../data/dseTop50.generated'

/**
 * DSE 成绩排行榜页面
 * 展示全港中学 DSE 成绩 TOP50，点击可直接跳转学校官网
 */
export default function Schools() {

  // 点击学校跳转官网
  const handleSchoolClick = (school: DseSchool) => {
    if (school.website && school.website !== '#') {
      window.open(school.website, '_blank', 'noopener,noreferrer')
    }
  }

  // 获取排名徽章颜色
  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg shadow-amber-200'
    if (rank === 2) return 'bg-gradient-to-br from-slate-300 to-slate-400 text-white shadow-lg shadow-slate-200'
    if (rank === 3) return 'bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-200'
    if (rank <= 10) return 'bg-gradient-to-br from-primary-500 to-primary-600 text-white'
    return 'bg-slate-100 text-slate-700'
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-navy-950 via-primary-900 to-navy-900 pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-primary-200 text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              2026 年 DSE 成绩排名
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              全港中学 DSE 成绩 TOP50
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              点击学校名称可直接访问学校官网，了解更多详情
            </p>
          </motion.div>
        </div>
      </section>

      {/* 排行榜列表 */}
      <section className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 表头说明 */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 text-sm font-medium text-slate-500 border-b border-slate-200 mb-2">
            <div className="col-span-1">排名</div>
            <div className="col-span-4">学校名称</div>
            <div className="col-span-1 text-center">中文</div>
            <div className="col-span-1 text-center">英文</div>
            <div className="col-span-1 text-center">数学</div>
            <div className="col-span-2 text-center">
              <span className="flex items-center justify-center gap-1">
                <TrendingUp className="w-3 h-3" />
                平均 5+%
              </span>
            </div>
            <div className="col-span-2 text-center">官网</div>
          </div>

          {/* 学校列表 */}
          <div className="space-y-3">
            {dseTop50.map((school, index) => (
              <motion.div
                key={`${school.rank}-${school.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                onClick={() => handleSchoolClick(school)}
                className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all cursor-pointer group"
              >
                {/* 桌面端布局 */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center px-6 py-4">
                  {/* 排名 */}
                  <div className="col-span-1">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold ${getRankBadgeColor(school.rank)}`}>
                      {school.rank}
                    </span>
                  </div>

                  {/* 学校名称 */}
                  <div className="col-span-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                      {school.name}
                    </h3>
                  </div>

                  {/* 分数 */}
                  <div className="col-span-1 text-center">
                    <span className={`text-sm font-medium ${school.chineseScore !== '/' ? 'text-slate-700' : 'text-slate-400'}`}>
                      {school.chineseScore}
                    </span>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className={`text-sm font-medium ${school.englishScore !== '/' ? 'text-slate-700' : 'text-slate-400'}`}>
                      {school.englishScore}
                    </span>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className={`text-sm font-medium ${school.mathScore !== '/' ? 'text-slate-700' : 'text-slate-400'}`}>
                      {school.mathScore}
                    </span>
                  </div>

                  {/* 平均分 */}
                  <div className="col-span-2 text-center">
                    <span className={`inline-block px-3 py-1 rounded-lg text-sm font-bold ${
                      school.avgScore !== '/' 
                        ? 'bg-primary-50 text-primary-700' 
                        : 'text-slate-400'
                    }`}>
                      {school.avgScore}
                    </span>
                  </div>

                  {/* 官网按钮 */}
                  <div className="col-span-2 text-center">
                    <span className="inline-flex items-center gap-1 text-sm text-primary-600 font-medium group-hover:underline">
                      访问官网
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* 移动端布局 */}
                <div className="md:hidden p-4">
                  <div className="flex items-start gap-4">
                    {/* 排名徽章 */}
                    <span className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl text-lg font-bold ${getRankBadgeColor(school.rank)}`}>
                      {school.rank}
                    </span>

                    <div className="flex-grow min-w-0">
                      {/* 学校名称 */}
                      <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
                        {school.name}
                      </h3>

                      {/* 分数网格 */}
                      <div className="grid grid-cols-4 gap-2 text-xs mb-3">
                        <div className="text-center">
                          <div className="text-slate-400 mb-0.5">中文</div>
                          <div className={`font-medium ${school.chineseScore !== '/' ? 'text-slate-700' : 'text-slate-400'}`}>
                            {school.chineseScore}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-slate-400 mb-0.5">英文</div>
                          <div className={`font-medium ${school.englishScore !== '/' ? 'text-slate-700' : 'text-slate-400'}`}>
                            {school.englishScore}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-slate-400 mb-0.5">数学</div>
                          <div className={`font-medium ${school.mathScore !== '/' ? 'text-slate-700' : 'text-slate-400'}`}>
                            {school.mathScore}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-slate-400 mb-0.5">平均</div>
                          <div className={`font-bold ${school.avgScore !== '/' ? 'text-primary-600' : 'text-slate-400'}`}>
                            {school.avgScore}
                          </div>
                        </div>
                      </div>

                      {/* 官网链接 */}
                      <div className="flex items-center gap-1 text-sm text-primary-600 font-medium">
                        <ExternalLink className="w-3.5 h-3.5" />
                        点击访问官网
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 底部说明 */}
          <div className="mt-8 p-4 bg-slate-100 rounded-xl text-center text-sm text-slate-500">
            <p>数据来源：2026 年香港中学文凭考试（DSE）成绩统计</p>
            <p className="mt-1">注：部分学校未公开完整数据，以 "/" 表示</p>
          </div>
        </div>
      </section>
    </div>
  )
}
