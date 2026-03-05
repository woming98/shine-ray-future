# 莘睿未来 Shine Ray Future

香港学校插班服务平台 - 专业的香港升学服务网站

## 项目简介

莘睿未来是一个专注于香港学校插班服务的综合性平台，为家长和学生提供：

- 🏫 **香港学校信息库** - 涵盖国际学校、直资学校、官立学校的详细信息
- 📝 **英文能力测试** - 专业的英语水平评估系统
- 🔢 **数学能力测试** - 全面的数学能力评估系统
- 📊 **智能分析报告** - 测试结果分析与学习建议

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 5
- **样式方案**: Tailwind CSS
- **动画库**: Framer Motion
- **图表库**: Recharts
- **图标库**: Lucide React
- **国际化**: i18next
- **路由**: React Router DOM

## 功能特性

### 🏫 学校信息模块
- 学校列表展示（网格/列表视图）
- 多维度筛选（学校类型、地区）
- 学校详情弹窗
- 交通信息、周边租金展示

### 📝 英文测试系统
- 分年级测试（中一、中二、中三）
- 多种题型（选择题、填空题、阅读理解）
- 计时功能
- 即时评分与错题分析
- 能力评估与学习建议

### 🔢 数学测试系统
- 分年级测试（中一、中二、中三）
- 多种题型（计算题、应用题、逻辑题）
- 详细解题步骤
- 知识点掌握分析
- 弱点诊断与建议

### 🌐 多语言支持
- 简体中文
- 繁体中文
- English

### 📱 响应式设计
- 完美适配桌面端和移动端
- 优雅的动画效果
- 现代化 UI 设计

## 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

## 学校清单导入（来自 Excel）

当前学校数据来自您提供的 `香港学校信息清单_toCursor.xlsx`，项目会把它导出为 `data/schools.csv`，并生成前端直接使用的数据文件 `src/data/schools.generated.ts`。

### 1) 更新学校清单

- **替换 Excel**：用新版本覆盖项目根目录下的 `香港学校信息清单_toCursor.xlsx`（保持表头结构不变）。\n\n然后运行：\n\n```bash\nnpm run import:schools\n```\n\n脚本会读取 `data/schools.csv`（如不存在会先由您导出或自行放入），并生成 `src/data/schools.generated.ts`。\n\n### 2) 开启“精确坐标”（可选）\n\n如果您希望地图点位精确落在学校地址上，请准备 Mapbox Token，并在运行导入脚本前设置：\n\n```bash\nexport MAPBOX_TOKEN=pk_xxx\nnpm run import:schools\n```\n\n- **未提供 MAPBOX_TOKEN**：会用“地区中心点”作为占位坐标（地图仍可用）。\n\n### 3) 前端地图展示（Mapbox）\n\n在项目根目录创建 `.env`（注意：该文件通常不会提交），参考 `env.example`：\n\n```bash\nVITE_MAPBOX_TOKEN=pk_xxx\n```\n\n然后重新启动开发服务：\n\n```bash\nnpm run dev\n```\n

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── components/         # 公共组件
│   ├── Header.tsx     # 顶部导航
│   ├── Footer.tsx     # 底部页脚
│   ├── Layout.tsx     # 页面布局
│   └── LoadingSpinner.tsx
├── pages/             # 页面组件
│   ├── Home.tsx       # 首页
│   ├── Schools.tsx    # 学校信息
│   ├── EnglishTest.tsx # 英文测试
│   ├── MathTest.tsx   # 数学测试
│   ├── About.tsx      # 关于我们
│   └── UserCenter.tsx # 用户中心
├── data/              # 数据文件
│   ├── schools.ts     # 学校数据
│   ├── englishQuestions.ts  # 英文题目
│   └── mathQuestions.ts     # 数学题目
├── i18n.ts            # 国际化配置
├── App.tsx            # 应用入口
├── main.tsx           # 渲染入口
└── index.css          # 全局样式
```

## 品牌设计

### 色彩系统
- **主色调**: 蓝色系 (#3b82f6) - 代表专业、教育
- **点缀色**: 金色/橙色 (#f59e0b) - 代表未来、希望
- **深色背景**: 深蓝 (#0f2744) - 用于头部和页脚

### 品牌理念
- **名称**: 莘睿未来 Shine Ray Future
- **口号**: 启迪智慧，照亮未来
- **含义**: 培育莘莘学子，睿智规划未来

## 后续开发计划

- [ ] 后端 API 集成
- [ ] 用户认证系统
- [ ] 数据库集成
- [ ] Google Maps API 集成
- [ ] 在线咨询系统
- [ ] 报告导出功能
- [ ] 更多测试题目

## 许可证

© 2026 莘睿未来 Shine Ray Future. 保留所有权利。
