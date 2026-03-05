# 项目总览

## 目标
- [ ] 学习网站稳定上线（PC/手机可访问，账号与进度可用）
- [ ] 学生账号体系完善（邮箱注册/登录/找回/验证）
- [ ] 学习进度云端持久化（不同账号互不影响）
- [ ] 上线后可持续迭代（内容、科目、数据分析）

## 里程碑
- [ ] M1: MVP 上线（Vercel + Supabase Auth + 进度同步 + 基础验证流程）
- [ ] M2: 稳定性与增长（邮件送达率提升、监控与数据分析、内容扩充）

## 功能概述

### 插班模块
- 学校榜单：提供 DSE 成绩 TOP50 学校列表，作为择校参考入口。
- 插班资讯：整理插班流程、准备材料、注意事项等，帮助家长/学生快速了解流程。
- 入学测评：英文与数学评估入口，含即时评分与结果反馈，用于初步定位能力。
- 信息入口：统一在 `/admission/*` 路由集中管理与导航。

### 学科学习模块
- 科目入口：物理、生物、英文、数学、中文、M1、M2、化学、经济、会计等学科入口。
- 物理学习：主题学习 + 练习系统 + 错题本 + 成就与学习仪表盘（进度、学习时长、连续学习等）。
- 物理进度：个人中心入口 + 明细页（8大板块/42章节进度分布、已做/总题/正确率、直达练习）。
- 练习体验：题目作答状态与答案持久化，返回后保留“已做痕迹”。
- 数学学习：按主题练习、错题追踪、学习报告与进度统计。
- 英文学习：阅读/听力/口语/写作练习，词汇本与口语录音记录等能力训练模块。
- 生物学习：主题知识与交互内容（含卡片/主题页等），强调可视化学习体验。
- M2 模块：三角主题为核心（公式树/证明步骤/题目解析/图像资源）与学习仪表盘。
- 统一进度：各学科进度与统计将汇总到用户中心，支持账号间隔离与云端同步。

## 本周重点
- [ ] Supabase 建表 + RLS（user_progress）完成并验证
- [ ] Supabase Auth URL 配置（Site URL / Redirect URLs）完成并验证
- [ ] 邮箱验证流程跑通（确认后自动登录进入仪表盘）
- [ ] 线上端到端验证（注册→验证→登录→学习→刷新→进度保留）

## 版本升级安全检查清单（上线前必做）
1) 代码版本确认
   - Vercel → Deployments 确认最新 commit 是本次版本
   - 线上强制刷新（Cmd+Shift+R）
2) Supabase 环境变量
   - Vercel → Settings → Environment Variables
   - `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` 都存在
   - Production / Preview / Development 环境都配置
3) 数据库与表
   - Supabase → Table Editor → `user_progress` 表存在
   - 抽查 1 位学生 `user_id` 的 `payload` 是否存在
4) RLS 与权限
   - `user_progress` 开启 RLS
   - 仅允许用户读写自己的 `user_id`
5) 关键流程回归
   - 注册 → 验证邮箱 → 登录
   - 练习做题 → 刷新 → 进度还在
   - 退出 → 登录同账号 → 进度仍在
   - 切换账号 → 进度隔离正常
6) 线上路由自测
   - `/user`
   - `/user/physics-progress`
   - `/subjects/physics/exercise`
   - `/subjects/physics/exercise/position-movement?topic=force-motion`
   - `/subjects/physics/exercise/electrostatics?topic=electricity-magnetism`
7) 失败回滚预案
   - 记录上一个稳定 commit 号（Vercel 可一键 rollback）
   - 部署失败先查 build 日志，再回滚

## 正在进行
- [ ] 邮箱验证邮件送达问题处理（当前遇到 rate limit）
- [ ] 若邮件送达不稳定，接入 SMTP（Resend/SendGrid/Mailgun 任一）

## 已完成
- [x] GitHub 仓库发布（origin: woming98/shine-ray-future）
- [x] Vercel 部署完成（https://shine-ray-future-if8r.vercel.app）
- [x] Supabase 前端接入（登录/注册/找回/进度同步）
- [x] 邮箱确认后自动登录逻辑完成并上线
- [x] .gitignore 补全（排除 dist/node_modules/.env/.DS_Store）
- [x] 物理课程大纲与全盘进度（8大板块/42章节）
- [x] 个人中心新增“物理进度”入口与详情页（/user/physics-progress）
- [x] 练习题作答记录与已做痕迹持久化（返回后仍显示）
