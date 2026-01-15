# 📚 HKDSE Physics Platform - Content Guidelines
# 内容规范文档

> 本文档规定了 HKDSE 物理学习平台的内容编写标准，确保所有贡献者遵循一致的格式和语言规范。

---

## 📋 目录

1. [语言规范](#语言规范)
2. [文件结构](#文件结构)
3. [内容类型详解](#内容类型详解)
4. [命名规范](#命名规范)
5. [示例模板](#示例模板)
6. [质量检查清单](#质量检查清单)

---

## 🌐 语言规范

### 总体原则

| 内容类型 | 语言 | 说明 |
|---------|------|------|
| **练习题 (Exercises)** | ✅ English | 题目、选项、答案、解析、提示全部使用英文 |
| **公式 (Formulas)** | 🔄 Bilingual | 名称双语，表达式用标准符号，描述用中文 |
| **概念 (Concepts)** | 🇨🇳 中文 | 标题、内容、要点、示例使用中文 |
| **模拟 (Simulations)** | 🇨🇳 中文 | 标题、描述、参数名称使用中文 |
| **UI 界面** | 🇨🇳 中文 | 按钮、标签、提示信息使用中文 |

### 练习题语言标准 (Exercises - English Only)

```typescript
// ✅ 正确示例
{
  question: 'A body is dropped from rest...',
  options: ['10 m/s', '20 m/s', '30 m/s', '40 m/s'],
  answer: '20 m/s',
  explanation: 'Using the equation v = gt...',
  hints: ['The body starts from rest', 'Use v = gt'],
}

// ❌ 错误示例
{
  question: '一个物体从静止下落...', // 不要用中文
  options: ['10 米/秒', '20 米/秒'], // 不要用中文单位
}
```

### 公式双语标准 (Formulas - Bilingual)

```typescript
{
  name: 'Velocity-Time Relation',    // English name
  nameCN: '速度-时间关系',            // Chinese name
  expression: 'v = u + at',          // Standard notation
  description: '匀加速运动中...', // Chinese description
  example: '由静止开始...',           // Chinese example
}
```

---

## 📁 文件结构

### 目录组织

```
src/constants/
├── topics.ts              # 主题列表（8大主题定义）
├── forceMotion.ts         # Force and Motion 内容
├── waveMotion.ts          # Wave Motion 内容
├── electricityMagnetism.ts # Electricity and Magnetism 内容
├── temperatureGas.ts      # Temperature and Gas 内容
├── radioactivityNuclear.ts # Radioactivity and Nuclear Energy 内容
├── astronomySpace.ts      # Astronomy and Space Science 内容
├── atomicWorld.ts         # Atomic World 内容
└── energyUse.ts           # Energy and Use of Energy 内容
```

### 单个主题文件结构

```typescript
// 文件头部注释
// ============================================
// [Topic Name] 主题内容
// 最后更新: YYYY-MM-DD
// ============================================

import { Chapter, Formula, Exercise, Concept, Simulation } from '../types';

// 1. 公式定义
export const [TOPIC]_FORMULAS: Formula[] = [...];

// 2. 概念定义
export const [TOPIC]_CONCEPTS: Concept[] = [...];

// 3. 练习题定义
export const [TOPIC]_EXERCISES: Exercise[] = [...];

// 4. 模拟定义
export const [TOPIC]_SIMULATIONS: Simulation[] = [...];

// 5. 章节配置
export const [TOPIC]_CHAPTERS: Chapter[] = [...];
```

---

## 📝 内容类型详解

### 1. Formula（公式）

```typescript
interface Formula {
  id: string;           // 格式: '[topic]-[number]', e.g., 'fm-1'
  name: string;         // English name
  nameCN: string;       // 中文名称
  expression: string;   // 数学表达式，使用标准符号
  variables: FormulaVariable[];
  description: string;  // 中文描述
  example: string;      // 中文例题
}

interface FormulaVariable {
  symbol: string;       // 符号，如 'v', 'a', 't'
  name: string;         // English name
  unit: string;         // SI 单位，如 'm/s', 'kg'
  description: string;  // 中文描述
}
```

**公式表达式规范：**
- 使用标准数学符号：`×` (乘), `÷` (除), `²` (平方), `½` (二分之一)
- 希腊字母：`θ` (theta), `λ` (lambda), `Δ` (delta)
- 下标使用：`v₀`, `t₁`, `s₂`

### 2. Concept（概念）

```typescript
interface Concept {
  id: string;           // 格式: '[topic]c-[number]', e.g., 'fmc-1'
  title: string;        // 中文标题
  content: string;      // 中文内容（1-3段）
  keyPoints: string[];  // 中文要点（3-5条）
  examples: string[];   // 中文生活示例（2-4个）
  difficulty: 'basic' | 'intermediate' | 'advanced';
}
```

**概念内容规范：**
- 标题简洁明了，10字以内
- 内容控制在100-300字
- 要点使用动词开头，如"理解..."、"掌握..."
- 示例贴近生活，易于理解

### 3. Exercise（练习题）⚠️ 全英文

```typescript
interface Exercise {
  id: string;           // 格式: '[topic]e-[number]', e.g., 'fme-1'
  type: 'multiple_choice' | 'calculation' | 'explanation';
  question: string;     // English question
  options?: string[];   // English options (for multiple choice)
  answer: string;       // English answer
  explanation: string;  // English explanation
  difficulty: 1 | 2 | 3 | 4 | 5;  // 1=easiest, 5=hardest
  points: number;       // 分值：10/15/20/25
  hints: string[];      // English hints (2-3 hints)
}
```

**练习题规范：**

| 难度 | 分值 | 描述 |
|-----|------|------|
| 1 | 10 | Basic recall, single concept |
| 2 | 15 | Application of one formula |
| 3 | 20 | Multi-step problem |
| 4 | 25 | Complex problem, multiple concepts |
| 5 | 30 | DSE level challenging question |

**选择题选项规范：**
- 4个选项（A, B, C, D）
- 包含1个正确答案
- 干扰项应基于常见错误
- 选项按数值或逻辑顺序排列

### 4. Simulation（模拟）

```typescript
interface Simulation {
  id: string;           // 格式: '[topic]s-[number]', e.g., 'fms-1'
  title: string;        // 中文标题
  description: string;  // 中文描述
  type: 'interactive' | 'animation' | 'calculator';
  parameters: SimulationParam[];
}

interface SimulationParam {
  name: string;         // 中文名称
  symbol: string;       // 标准符号
  unit: string;         // SI 单位
  min: number;
  max: number;
  default: number;
  step: number;
}
```

### 5. Chapter（章节）

```typescript
interface Chapter {
  id: string;           // 格式: '[topic]-ch[number]', e.g., 'fm-ch1'
  title: string;        // English title
  titleCN: string;      // 中文标题
  concepts: Concept[];
  formulas: Formula[];
  exercises: Exercise[];
  simulations: Simulation[];
  completed: boolean;   // 默认 false
}
```

---

## 🏷️ 命名规范

### ID 命名格式

| 类型 | 前缀 | 示例 |
|-----|------|------|
| Force and Motion | `fm-` | `fm-1`, `fmc-1`, `fme-1`, `fms-1`, `fm-ch1` |
| Wave Motion | `wm-` | `wm-1`, `wmc-1`, `wme-1`, `wms-1`, `wm-ch1` |
| Electricity and Magnetism | `em-` | `em-1`, `emc-1`, `eme-1`, `ems-1`, `em-ch1` |
| Temperature and Gas | `tg-` | `tg-1`, `tgc-1`, `tge-1`, `tgs-1`, `tg-ch1` |
| Radioactivity and Nuclear | `rn-` | `rn-1`, `rnc-1`, `rne-1`, `rns-1`, `rn-ch1` |
| Astronomy and Space | `as-` | `as-1`, `asc-1`, `ase-1`, `ass-1`, `as-ch1` |
| Atomic World | `aw-` | `aw-1`, `awc-1`, `awe-1`, `aws-1`, `aw-ch1` |
| Energy and Use | `eu-` | `eu-1`, `euc-1`, `eue-1`, `eus-1`, `eu-ch1` |

### 常量命名

```typescript
// 使用 SCREAMING_SNAKE_CASE
export const FORCE_MOTION_FORMULAS: Formula[] = [];
export const WAVE_MOTION_EXERCISES: Exercise[] = [];
```

---

## 📄 示例模板

### 新增练习题模板

```typescript
{
  id: 'fme-9',
  type: 'multiple_choice',
  question: 'A car accelerates uniformly from rest to 20 m/s in 5 s. What is the acceleration of the car?',
  options: ['2 m/s²', '4 m/s²', '5 m/s²', '10 m/s²'],
  answer: '4 m/s²',
  explanation: 'Using a = (v - u) / t:\na = (20 - 0) / 5 = 4 m/s²\n\nThe car starts from rest (u = 0) and reaches 20 m/s in 5 seconds.',
  difficulty: 1,
  points: 10,
  hints: [
    'The car starts from rest, so initial velocity u = 0',
    'Use the equation a = (v - u) / t'
  ],
},
```

### 新增公式模板

```typescript
{
  id: 'fm-6',
  name: 'Average Velocity',
  nameCN: '平均速度',
  expression: 'v̄ = (u + v) / 2',
  variables: [
    { symbol: 'v̄', name: 'average velocity', unit: 'm/s', description: '平均速度' },
    { symbol: 'u', name: 'initial velocity', unit: 'm/s', description: '初速度' },
    { symbol: 'v', name: 'final velocity', unit: 'm/s', description: '末速度' },
  ],
  description: '匀加速运动中，平均速度等于初速度和末速度的算术平均值。',
  example: '汽车从 10 m/s 加速到 30 m/s，平均速度为 (10+30)/2 = 20 m/s',
},
```

---

## ✅ 质量检查清单

### 添加新内容前检查

- [ ] ID 是否唯一且符合命名规范
- [ ] 练习题是否全部使用英文
- [ ] 公式表达式是否使用标准符号
- [ ] 难度分级是否合理
- [ ] 是否包含足够的提示（2-3条）
- [ ] 解析是否清晰完整
- [ ] 示例是否贴近 DSE 考试风格

### 提交前检查

- [ ] TypeScript 类型检查通过
- [ ] 无 linter 错误
- [ ] 在页面上预览效果正常
- [ ] 中文无乱码

---

## 🔗 相关文件

- 类型定义：`src/types/index.ts`
- 主题配置：`src/constants/topics.ts`
- 主题页面：`src/pages/TopicPage.tsx`

---

## 📞 联系方式

如有疑问，请联系：
- 莘睿未来 Shine Ray Future
- 项目维护团队

---

*最后更新: 2026-01-10*

