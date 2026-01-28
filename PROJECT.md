# 项目总览

## 目标
- [ ] 学习网站稳定上线（PC/手机可访问，账号与进度可用）
- [ ] 学生账号体系完善（邮箱注册/登录/找回/验证）
- [ ] 学习进度云端持久化（不同账号互不影响）
- [ ] 上线后可持续迭代（内容、科目、数据分析）

## 里程碑
- [ ] M1: MVP 上线（Vercel + Supabase Auth + 进度同步 + 基础验证流程）
- [ ] M2: 稳定性与增长（邮件送达率提升、监控与数据分析、内容扩充）

## 本周重点
- [ ] Supabase 建表 + RLS（user_progress）完成并验证
- [ ] Supabase Auth URL 配置（Site URL / Redirect URLs）完成并验证
- [ ] 邮箱验证流程跑通（确认后自动登录进入仪表盘）
- [ ] 线上端到端验证（注册→验证→登录→学习→刷新→进度保留）

## 正在进行
- [ ] 邮箱验证邮件送达问题处理（当前遇到 rate limit）
- [ ] 若邮件送达不稳定，接入 SMTP（Resend/SendGrid/Mailgun 任一）

## 已完成
- [x] GitHub 仓库发布（origin: woming98/shine-ray-future）
- [x] Vercel 部署完成（https://shine-ray-future-if8r.vercel.app）
- [x] Supabase 前端接入（登录/注册/找回/进度同步）
- [x] 邮箱确认后自动登录逻辑完成并上线
- [x] .gitignore 补全（排除 dist/node_modules/.env/.DS_Store）
