# Physics Exercise Content Workflow Guideline v1.0
> 物理练习题内容录入工作流指南

## 📋 目标

建立稳定的内容录入流程：
- **用户（你）**：提供题目和答案（Markdown + Image 格式）
- **AI（Composer）**：生成解析、提示、UI设计，并录入系统
- **系统**：在 `/subjects/physics/topic/force-motion` 的 Exercise 标签页中展示

---

## A. 用户输入格式（你提供的）

### 1. 题目格式（Markdown）

```markdown
## Question [ID]

**Type:** Multiple Choice / Calculation / Explanation

**Section:** Position and Movement

**Question:**
[题目内容，支持 Markdown 格式]
- 可以包含公式：$v = u + at$
- 可以包含列表
- 可以包含图片引用：![Figure 1](/physics/exercises/position-movement/pm-001-question.png)

**Options:** (仅 Multiple Choice)
- **文字选项**：直接写选项内容
  A. Option 1
  B. Option 2
  C. Option 3
  D. Option 4
- **图片选项**：使用图片路径（绝对路径或相对路径）
  A. ![Option A](/physics/exercises/position-movement/pm-001-option-a.png)
  B. ![Option B](/physics/exercises/position-movement/pm-001-option-b.png)
  C. ![Option C](/physics/exercises/position-movement/pm-001-option-c.png)
  D. ![Option D](/physics/exercises/position-movement/pm-001-option-d.png)

**Answer:** [正确答案]（文字选项写选项内容；图片选项可以写选项字母如 "B"，但录入数据时会转换为对应的图片路径用于精确匹配）

**Answer Images:** (可选，若答案/解析需要附图)
- ![Answer steps](/physics/exercises/position-movement/pm-001-answer-steps.png)

**Difficulty:** [1-5] (可选，AI 可自动评估)

**Points:** [10/15/20/25/30] (可选，AI 可根据难度自动分配)
```

### 2. 图片处理

#### 题目图片
- **图片路径**：放在 `public/physics/exercises/[sectionId]/` 目录下（例如 `public/physics/exercises/position-movement/`）
- **命名规范**：`[sectionPrefix]-[3位序号]-[描述].png`，例如 `pm-001-question.png`, `pm-001-diagram.png`
- **在 Markdown 中引用**：建议用绝对路径 `![描述](/physics/exercises/position-movement/pm-001-question.png)`（也可写 `./physics/exercises/...`，录入时会自动转为 `/physics/exercises/...`）
- **支持格式**：PNG, JPG, SVG（推荐 PNG）
- **注意**：你提供的 Markdown 里可以包含图片；但录入数据时图片会提取到 `imagePaths`，`question` 字段不保留图片 Markdown（方案C）

#### 选项图片
- **图片路径**：同样放在 `public/physics/exercises/[sectionId]/` 目录下
- **命名规范**：`[sectionPrefix]-[3位序号]-option-[a/b/c/d].png`，例如 `pm-001-option-a.png`
- **在 Markdown 中引用**：使用图片路径格式 `![Option A](/physics/exercises/position-movement/pm-001-option-a.png)`
- **支持格式**：PNG, JPG, SVG, GIF, WEBP（推荐 PNG）
- **处理方式**：AI 会从 Markdown 中提取图片路径，直接放入 `options` 数组；UI 会自动检测并渲染图片

#### 答案/解析附图（标准答案补充图片）
- **用途**：用于补充标准答案/解析（例如关键步骤示意图、参考图、辅助图像）
- **图片路径**：放在 `public/physics/exercises/[sectionId]/` 目录下
- **命名规范**：`[sectionPrefix]-[3位序号]-answer-[描述].png`，例如 `pm-001-answer-steps.png`
- **支持格式**：PNG, JPG, SVG, GIF, WEBP（推荐 PNG）
- **存储字段**：录入数据时放到 `answerImagePaths` 数组
- **展示位置**：显示在解析（Explanation）区域上方（需要先点击 "Check Answer" 并展开 "Show Explanation"）
- **不要放在 `imagePaths`**：否则会被当作题目图片，显示在题目文本上方
- **注意**：解析文本（`explanation`）中的图片 Markdown 会被忽略（方案C），因此**不要把答案附图写进 explanation 的 Markdown**，而是用 `answerImagePaths` 来展示

### 3. 完整示例

```markdown
## Question PM-001

**Type:** Multiple Choice

**Section:** Position and Movement

**Question:**
A car accelerates uniformly from rest. After 5 seconds, it reaches a velocity of 20 m/s.

![Motion diagram](./physics/exercises/position-movement/pm-001-diagram.png)

What is the acceleration of the car?

**Options:**
A. 2 m/s²
B. 4 m/s²
C. 5 m/s²
D. 10 m/s²

**Answer:** B. 4 m/s²

**Difficulty:** 1
**Points:** 10
```

---

## B. AI 生成内容（Composer 负责）

### 1. 数据结构

```typescript
interface Exercise {
  id: string;                    // 格式: '[sectionPrefix]-[3位序号]'，如 'pm-001'
  type: 'multiple_choice' | 'calculation' | 'explanation';
  question: string;              // 题目文字（支持 Markdown + LaTeX；不含图片 Markdown）
  options?: string[];            // 选项数组（仅 Multiple Choice）
                                 // - 文字选项：直接写选项内容，如 '2 m/s²'
                                 // - 图片选项：写图片路径，如 '/physics/exercises/position-movement/pm-001-option-a.png'
                                 // UI 会自动检测并渲染图片
  answer: string;                // 正确答案
                                 // - 文字选项：写选项内容，如 '4 m/s²'
                                 // - 图片选项：录入数据时必须使用完整图片路径（= options 中对应项），用于精确匹配
  explanation: string;           // 详细解析（Markdown 格式）
  answerImagePaths?: string[];   // 答案/解析附图（可选）
                                 // - 用于展示“标准答案的补充图片”（参考图、关键步骤示意图等）
                                 // - 注意：解析文本中的图片 Markdown 会被忽略（方案C），因此附图请放在这里
  difficulty: 1 | 2 | 3 | 4 | 5; // 难度等级
  points: number;                // 分值：10/15/20/25/30
  hints: string[];               // 提示列表（2-4条）
  sectionId?: string;            // 子板块ID: 'position-movement'
  imagePaths?: string[];         // 题目图片路径数组（如 '/physics/exercises/position-movement/pm-001-diagram.png'）
                                 // 注意：选项图片不放在这里，而是放在 options 数组中
}
```

### 2. ID 生成规则

| Section | 前缀 | 示例 |
|---------|------|------|
| Position and Movement | `pm-` | `pm-001`, `pm-002` |
| Newton's Laws | `nl-` | `nl-001`, `nl-002` |
| Moment of Force | `mf-` | `mf-001`, `mf-002` |
| Work, Energy and Power | `wep-` | `wep-001`, `wep-002` |
| Momentum | `mom-` | `mom-001`, `mom-002` |
| Projectile Motion | `proj-` | `proj-001`, `proj-002` |
| Circular Motion | `circ-` | `circ-001`, `circ-002` |
| Gravitation | `grav-` | `grav-001`, `grav-002` |

**建议**：优先使用上表的 section 前缀；如需沿用历史前缀（例如旧数据里的 `fme-`），务必先确认不与现有题目冲突。

### 3. AI 生成规则

#### LaTeX 处理规则（重要！）

**在所有字段中（question, options, explanation, hints）：**

- **行内公式**：使用 `$...$` 格式
  - 示例：`A body on planet $X$` → 渲染为：A body on planet X（X 为斜体）
  - 示例：`velocity $v = u + at$` → 渲染为数学公式
  - **注意**：在 TypeScript 字符串中，`$` 不需要转义

- **块级公式**：使用 `$$...$$` 格式
  - 示例：`$$a = \frac{v - u}{t}$$`
  - 在 TypeScript 字符串中，`$$` 不需要转义

- **转义规则**：
  - 在 TypeScript 字符串中，LaTeX 命令的反斜杠需要转义：`\\frac`, `\\sin`, `\\cos`
  - 但在 `question` 和 `options` 字段中，如果只是简单的变量（如 `$X$`, `$v$`），不需要转义

- **AI 处理**：
  - Composer 会自动检测并渲染所有 `$...$` 和 `$$...$$` 格式的 LaTeX
  - 确保 LaTeX 语法正确，使用 KaTeX 支持的宏

#### Explanation（解析）生成规则

- **格式**：Markdown，支持 LaTeX 公式（使用 `$...$` 或 `$$...$$`）
- **结构**：
  1. **关键点**（Key Point）：用 ⚠️ 标记易错点
  2. **步骤**（Steps）：分步骤说明
  3. **验证**（Verification）：如果适用，提供验证方法
- **语言**：**全英文**
- **长度**：通常 50-200 字；若 solution 主要由图片构成（步骤图/参考图），可缩短到 1-3 句，但必须包含关键点，并将图片放到 `answerImagePaths`
- **公式格式**：
  - 行内公式：`$v = u + at$`
  - 块级公式：`$$a = \frac{v - u}{t}$$`
  - 确保反斜杠正确转义：`\\frac`, `\\sin`, `\\cos`

**示例：**
```markdown
⚠️ **Key point:** The car starts from rest, so initial velocity u = 0.

**Step 1:** Identify known values
- Initial velocity: u = 0 m/s
- Final velocity: v = 20 m/s
- Time: t = 5 s

**Step 2:** Apply the equation
Using $v = u + at$:
$$a = \frac{v - u}{t} = \frac{20 - 0}{5} = 4 \text{ m/s²}$$

**Verification:** Check units: m/s ÷ s = m/s² ✓
```

#### Hints（提示）生成规则

- **数量**：2-4 条
- **顺序**：从最基础到最具体
- **格式**：简短句子，每条 10-20 字
- **语言**：**全英文**
- **内容**：
  - 第1条：识别关键信息（如初始条件）
  - 第2条：提示使用的公式或方法
  - 第3条：具体代入步骤（如需要）
  - 第4条：注意事项或易错点（如需要）

**示例：**
```typescript
hints: [
  'The car starts from rest, so initial velocity u = 0',
  'Use the equation a = (v - u) / t',
  'Substitute the known values: v = 20 m/s, t = 5 s'
]
```

#### Difficulty 评估标准

| 难度 | 分值 | 特征 | 示例 |
|-----|------|------|------|
| 1 | 10 | 单一概念，直接应用公式 | 已知 v, u, t，求 a |
| 2 | 15 | 一个公式，需要理解题意 | "a further 4 s" 的理解 |
| 3 | 20 | 多步骤，需要转换 | 分段位移问题 |
| 4 | 25 | 多个概念结合 | 结合图像和计算 |
| 5 | 30 | DSE 真题难度 | 综合应用题 |

**评估原则**：
- **难度 1**：直接代入公式，无需理解
- **难度 2**：需要理解题意，但只需一个公式
- **难度 3**：需要多步计算或概念转换
- **难度 4**：需要综合多个概念或公式
- **难度 5**：DSE 考试中的难题，需要深度理解

#### Points（分值）分配规则

- **默认规则**：根据难度自动分配
  - 难度 1 → 10 分
  - 难度 2 → 15 分
  - 难度 3 → 20 分
  - 难度 4 → 25 分
  - 难度 5 → 30 分
- **可覆盖**：如果用户明确指定分值，使用用户指定的值

---

## C. UI 设计规范（Composer 负责）

### 1. 题目展示

- **Markdown 渲染**：使用自定义 `renderLatexContent` 和 `renderMarkdown` 函数
- **LaTeX 渲染**：使用 KaTeX（`$...$` 行内，`$$...$$` 块级）
- **图片展示**（方案C - 统一展示）：
  - **位置**：图片统一显示在题目文本上方，作为独立的 Figure 区块
  - **实现**：通过 `imagePaths` 数组统一展示，不在 `question` 字段中包含图片 Markdown
  - **样式**：深色主题适配的 Figure 卡片（`bg-slate-800/40`，`border-blue-500/30`）
  - **标题**：显示 "Figure (not drawn to scale)" 标题
  - **响应式**：移动端自适应，最大宽度限制
  - **多图片支持**：支持一个题目多张图片，自动排列

### 2. 交互流程

```
用户选择答案
    ↓
点击 "Check Answer"
    ↓
显示对错（绿色✓ / 红色✗）
    ↓
显示 "Show Explanation" 按钮
    ↓
点击展开解析（可折叠）
    ↓
解析内容：
  - 关键点（黄色背景，⚠️ 图标）
  - 步骤（编号列表，每步独立卡片）
  - 公式（居中显示，浅灰背景）
```

### 3. 解析展示样式

- **布局**：可折叠区域，默认收起
- **样式**：
  - **关键点**：黄色背景（`bg-yellow-500/10`），⚠️ 图标，加粗文字
  - **步骤**：编号列表，每步独立卡片（`bg-slate-50`），边框
  - **公式**：居中显示，**深色主题适配**（`bg-slate-800/50`，`border-blue-500/30`），支持横向滚动
  - **文字颜色**：KaTeX 公式文字自动适配为浅色（`blue-100`）
- **支持**：Markdown + LaTeX 渲染
- **深色主题**：所有公式和文本都适配深色背景

### 4. 提示展示

- **位置**：在题目下方，"Check Answer" 之前
- **样式**：可展开/收起，默认收起
- **内容**：有序列表，每条提示前有 💡 图标

---

## D. 录入流程（Step-by-Step）

### Step 1: 用户提供内容

你提供：
- Markdown 格式的题目和答案
- 相关图片文件（已上传到 `public/physics/exercises/[section]/`）

### Step 2: AI 处理

Composer 执行：
1. **解析 Markdown**：
   - 提取题目文本（`question`）
   - 提取选项（`options`，如果是 Multiple Choice）
     - **文字选项**：直接提取选项内容
     - **图片选项**：从 Markdown 图片语法 `![alt](path)` 中提取图片路径，转换为绝对路径（如 `/physics/exercises/position-movement/pm-001-option-a.png`）
   - 提取答案（`answer`）
     - **文字选项**：使用选项内容作为答案
     - **图片选项**：使用选项字母（如 `"B"`）或完整图片路径作为答案
   - 提取难度和分值（如果提供）

2. **处理图片**（方案C）：
   - **题目图片**：
     - **不在 question 字段中包含图片 Markdown**：题目文本中只保留文字内容，如 "as shown in the figure"
     - **图片路径**：直接添加到 `imagePaths` 数组（绝对路径，如 `/physics/exercises/position-movement/pm-002-question.png`）
     - **检查图片是否存在**：验证图片文件在 `public/` 目录中
     - **图片展示**：图片会统一显示在题目文本上方，作为独立的 Figure 区块
   - **选项图片**：
     - **图片路径**：直接放入 `options` 数组（绝对路径）
     - **不放在 imagePaths**：选项图片不放在 `imagePaths` 数组中
     - **UI 自动检测**：UI 会自动检测 `options` 中的图片路径并渲染图片
     - **检查图片是否存在**：验证选项图片文件在 `public/` 目录中
   - **答案/解析附图（标准答案补充图片）**：
     - **图片路径**：直接放入 `answerImagePaths` 数组（绝对路径）
     - **不放在 explanation Markdown**：解析文本中的图片 Markdown 会被忽略（方案C），所以答案附图必须用 `answerImagePaths`
     - **图片展示**：图片会统一显示在解析（Explanation）区域上方
     - **检查图片是否存在**：验证图片文件在 `public/` 目录中

3. **生成 ID**：
   - 根据 Section 和序号生成唯一 ID
   - 检查是否与现有题目冲突

4. **生成解析**：
   - 根据题目类型和难度生成 `explanation`
   - 包含关键点、步骤、验证（如适用）
   - 使用 Markdown + LaTeX 格式

5. **生成提示**：
   - 生成 2-4 条 `hints`
   - 从基础到具体，逐步引导

6. **评估难度**：
   - 如果用户未提供，根据题目复杂度自动评估
   - 使用上述难度评估标准

7. **分配分值**：
   - 如果用户未提供，根据难度自动分配
   - 使用上述分值分配规则

### Step 3: 数据录入

Composer 执行：
1. **添加到 `FORCE_MOTION_EXERCISES` 数组**
   - 文件：`src/pages/subjects/physics/constants/forceMotion.ts`
   - 位置：数组末尾（保持有序）

2. **确保字段完整**：
   - `id`, `type`, `question`, `answer`, `explanation`, `difficulty`, `points`, `hints`
   - `options`（如果是 Multiple Choice）
   - `sectionId`（如果支持筛选）
   - `imagePaths`（如果有图片）
   - `answerImagePaths`（如果有答案/解析附图）

3. **代码格式**：
   - 使用 2 空格缩进
   - 字符串使用单引号
   - 数组元素后加逗号

### Step 4: 验证

按 `F. 质量检查清单（QA Checklist）` 执行（录入后检查 + UI 展示检查）。

### Step 5: UI 预览

在 `/subjects/physics/topic/force-motion` 的 Exercise 标签页中抽查 1-2 题，具体检查项见 `F. UI 展示检查`。

---

## E. 文件组织

### 目录结构

```
public/
└── physics/
    └── exercises/
        ├── position-movement/
        │   ├── pm-001-question.png
        │   ├── pm-001-diagram.png
        │   ├── pm-002-question.png
        │   └── ...
        ├── newton-laws/
        │   └── ...
        └── ...

src/pages/subjects/physics/constants/
└── forceMotion.ts  (包含所有 Exercise 数据)
```

### 数据文件

- **主文件**：`src/pages/subjects/physics/constants/forceMotion.ts`
- **常量名**：`FORCE_MOTION_EXERCISES`
- **导入路径**：`import { FORCE_MOTION_EXERCISES } from '../constants/forceMotion'`
- **类型定义**：`src/pages/subjects/physics/types/index.ts`

### 代码格式示例

```typescript
// 在 forceMotion.ts 中添加新题目
export const FORCE_MOTION_EXERCISES: Exercise[] = [
  // ... 现有题目 ...
  
  // Position and Movement - Question 1
  {
    id: 'pm-001',
    type: 'multiple_choice',
    question: 'A car accelerates uniformly from rest. After 5 seconds, it reaches a velocity of 20 m/s.\n\nAs shown in the figure, what is the acceleration of the car?',
    options: ['2 m/s²', '4 m/s²', '5 m/s²', '10 m/s²'],
    answer: '4 m/s²',
    explanation: '⚠️ **Key point:** The car starts from rest, so initial velocity u = 0.\n\n**Step 1:** Identify known values\n- Initial velocity: u = 0 m/s\n- Final velocity: v = 20 m/s\n- Time: t = 5 s\n\n**Step 2:** Apply the equation\nUsing $v = u + at$:\n$$a = \\frac{v - u}{t} = \\frac{20 - 0}{5} = 4 \\text{ m/s²}$$\n\n**Verification:** Check units: m/s ÷ s = m/s² ✓',
    difficulty: 1,
    points: 10,
    hints: [
      'The car starts from rest, so initial velocity u = 0',
      'Use the equation a = (v - u) / t',
      'Substitute the known values: v = 20 m/s, t = 5 s'
    ],
    sectionId: 'position-movement',
    imagePaths: ['/physics/exercises/position-movement/pm-001-diagram.png'],
    answerImagePaths: ['/physics/exercises/position-movement/pm-001-answer-steps.png'], // optional (answer figures)
  },
];
```

---

## F. 质量检查清单（QA Checklist）

### 录入前检查（用户）

- [ ] 题目完整（包含所有必要信息）
- [ ] 图片已上传到正确目录
- [ ] Markdown 格式正确
- [ ] 答案明确
- [ ] 难度评估合理（如提供）

### 录入后检查（Composer）

- [ ] ID 唯一且符合规范
- [ ] 所有字段已填充
- [ ] 解析清晰完整（50-200字）
- [ ] 提示数量合适（2-4条）
- [ ] 难度评估合理
- [ ] 分值分配合理
- [ ] 图片路径正确（文件存在）
- [ ] LaTeX 语法正确（KaTeX 兼容）
- [ ] Markdown 格式正确
- [ ] TypeScript 类型检查通过
- [ ] 无 linter 错误
- [ ] 在 UI 中预览正常

### UI 展示检查

- [ ] 题目正确显示（Markdown 渲染）
- [ ] 题目图片正确加载（可点击放大）
- [ ] 选项正确显示（Multiple Choice）
  - [ ] 文字选项正确渲染（Markdown + LaTeX）
  - [ ] 图片选项正确显示（图片加载正常，大小合适）
- [ ] 答案检查功能正常（对错显示）
- [ ] 解析正确展开和折叠
- [ ] 答案/解析附图正确显示（`answerImagePaths`，显示在解析区域上方）
- [ ] LaTeX 公式正确渲染
- [ ] 提示正确显示
- [ ] 移动端响应式正常
- [ ] 交互流畅无卡顿

---

## G. 示例工作流

### 示例 1：简单选择题

**你提供：**
```markdown
## Question PM-001

**Type:** Multiple Choice
**Section:** Position and Movement

**Question:**
A body is dropped from rest on a planet $X$. After 2 seconds, what is its velocity? (Take g = 10 m/s²)

**Options:**
A. 10 m/s
B. 20 m/s
C. 30 m/s
D. 40 m/s

**Answer:** B. 20 m/s
**Difficulty:** 1
**Points:** 10
```

**注意**：题目中的 `$X$` 会被自动渲染为数学格式（斜体 X）。

**Composer 生成并录入：**
```typescript
  {
    id: 'pm-001',
    type: 'multiple_choice',
    question: 'A body is dropped from rest on a planet $X$. After 2 seconds, what is its velocity? (Take g = 10 m/s²)',
    options: ['10 m/s', '20 m/s', '30 m/s', '40 m/s'],
    answer: '20 m/s',
  explanation: '⚠️ **Key point:** The body starts from rest, so initial velocity u = 0.\n\n**Step 1:** Identify known values\n- Initial velocity: u = 0 m/s\n- Time: t = 2 s\n- Acceleration: g = 10 m/s²\n\n**Step 2:** Apply the equation\nUsing $v = u + at$ (or $v = gt$ since u = 0):\n$$v = 10 \\times 2 = 20 \\text{ m/s}$$\n\n**Verification:** Check units: m/s² × s = m/s ✓',
  difficulty: 1,
  points: 10,
  hints: [
    'The body starts from rest, so initial velocity u = 0',
    'Use the equation v = u + at (or v = gt)',
    'Substitute: v = 10 × 2 = 20 m/s'
  ],
  sectionId: 'position-movement'
}
```

### 示例 2：带图片的计算题

**你提供：**
```markdown
## Question PM-002

**Type:** Calculation
**Section:** Position and Movement

**Question:**
![Motion diagram](./physics/exercises/position-movement/pm-002-diagram.png)

A car accelerates uniformly from 10 m/s to 30 m/s over a distance of 100 m. Find:
(a) The acceleration
(b) The time taken

**Answer:**
(a) 4 m/s²
(b) 5 s

**Difficulty:** 3
**Points:** 20
```

**Composer 处理：**
- 提取图片路径：`/physics/exercises/position-movement/pm-002-diagram.png`
- 生成详细解析（包含两个部分的解答）
- 生成多步骤提示

**Composer 生成并录入：**
```typescript
  {
    id: 'pm-002',
    type: 'calculation',
    question: 'A car accelerates uniformly from 10 m/s to 30 m/s over a distance of 100 m (see figure). Find:\n(a) The acceleration\n(b) The time taken',
    answer: '(a) 4 m/s²  (b) 5 s',
    explanation: '⚠️ **Key point:** This is a two-part problem requiring two different equations.\n\n**Part (a): Finding acceleration**\n**Step 1:** Identify known values\n- Initial velocity: u = 10 m/s\n- Final velocity: v = 30 m/s\n- Displacement: s = 100 m\n\n**Step 2:** Choose the appropriate equation\nSince we have v, u, and s (but not t), use $v^2 = u^2 + 2as$:\n$$30^2 = 10^2 + 2a(100)$$\n$$900 = 100 + 200a$$\n$$200a = 800$$\n$$a = 4 \\text{ m/s²}$$\n\n**Part (b): Finding time**\n**Step 3:** Use the acceleration from part (a)\nUsing $v = u + at$:\n$$30 = 10 + 4t$$\n$$4t = 20$$\n$$t = 5 \\text{ s}$$\n\n**Verification:**\n- Check (a): $s = ut + \\frac{1}{2}at^2 = 10(5) + \\frac{1}{2}(4)(25) = 50 + 50 = 100$ m ✓\n- Check (b): $v = u + at = 10 + 4(5) = 30$ m/s ✓',
    difficulty: 3,
  points: 20,
  hints: [
    'For part (a), use v² = u² + 2as since time is not given',
    'For part (b), use v = u + at with the acceleration from part (a)',
    'Remember to check your answers using alternative equations'
  ],
  sectionId: 'position-movement',
  imagePaths: ['/physics/exercises/position-movement/pm-002-diagram.png'],
}
```

### 示例 3：解释题

**你提供：**
```markdown
## Question PM-003

**Type:** Explanation
**Section:** Position and Movement

**Question:**
Explain why a ball thrown vertically upward has zero velocity at its highest point, but still has acceleration.

**Answer:**
At the highest point, the ball momentarily stops moving upward, so its velocity is zero. However, gravity continues to act on the ball throughout its motion, so the acceleration due to gravity (g = 9.81 m/s² downward) is still present. This acceleration causes the ball to start falling downward.

**Difficulty:** 2
**Points:** 15
```

**Composer 生成并录入：**
```typescript
{
  id: 'pm-003',
  type: 'explanation',
  question: 'Explain why a ball thrown vertically upward has zero velocity at its highest point, but still has acceleration.',
  answer: 'At the highest point, the ball momentarily stops moving upward, so its velocity is zero. However, gravity continues to act on the ball throughout its motion, so the acceleration due to gravity (g = 9.81 m/s² downward) is still present. This acceleration causes the ball to start falling downward.',
  explanation: '⚠️ **Key point:** Velocity and acceleration are independent quantities. Zero velocity does NOT mean zero acceleration.\n\n**Step 1:** Understand velocity at the highest point\n- When the ball reaches its highest point, it momentarily stops moving upward\n- At this instant, the vertical velocity is zero: $v = 0$\n\n**Step 2:** Understand acceleration throughout the motion\n- Gravity acts on the ball at all times during its flight\n- The acceleration due to gravity is constant: $g = 9.81 \\text{ m/s²}$ (downward)\n- This acceleration is present even when $v = 0$\n\n**Step 3:** Explain the consequence\n- Since acceleration is still present (and downward), the ball will start to accelerate downward\n- This is why the ball begins to fall after reaching the highest point\n\n**Common misconception:** Many students think that if velocity is zero, acceleration must also be zero. This is incorrect! Acceleration is the rate of change of velocity, and it can be non-zero even when velocity is momentarily zero.',
  difficulty: 2,
  points: 15,
  hints: [
    'Velocity and acceleration are independent - one can be zero while the other is not',
    'Gravity acts continuously throughout the motion',
    'Think about what happens immediately after the ball reaches the highest point'
  ],
  sectionId: 'position-movement',
}
```

### 示例 4：图片选项选择题

**你提供：**
```markdown
## Question PM-004

**Type:** Multiple Choice
**Section:** Position and Movement

**Question:**
Which of the following velocity-time graphs represents an object moving with constant acceleration?

**Options:**
A. ![Graph A](/physics/exercises/position-movement/pm-004-option-a.png)
B. ![Graph B](/physics/exercises/position-movement/pm-004-option-b.png)
C. ![Graph C](/physics/exercises/position-movement/pm-004-option-c.png)
D. ![Graph D](/physics/exercises/position-movement/pm-004-option-d.png)

**Answer:** B

**Difficulty:** 2
**Points:** 15
```

**Composer 处理：**
- 从 Markdown 中提取图片路径
- 将图片路径转换为绝对路径
- 答案使用 `options` 里的完整字符串（即对应图片路径），用于与用户选择做精确匹配

**Composer 生成并录入：**
```typescript
{
  id: 'pm-004',
  type: 'multiple_choice',
  question: 'Which of the following velocity-time graphs represents an object moving with constant acceleration?',
  options: [
    '/physics/exercises/position-movement/pm-004-option-a.png',
    '/physics/exercises/position-movement/pm-004-option-b.png',
    '/physics/exercises/position-movement/pm-004-option-c.png',
    '/physics/exercises/position-movement/pm-004-option-d.png'
  ],
  answer: '/physics/exercises/position-movement/pm-004-option-b.png',
  answerImagePaths: [
    '/physics/exercises/position-movement/pm-004-answer-steps.png'
  ],
  explanation: '⚠️ **Key point:** Constant acceleration means the acceleration is constant, not zero.\n\n**Step 1:** Understand velocity-time graphs\n- The slope of a velocity-time graph represents acceleration\n- A straight line (constant slope) means constant acceleration\n\n**Step 2:** Analyze the graphs\n- Graph A: Horizontal line (zero velocity) → zero acceleration\n- Graph B: Straight line with positive slope → constant positive acceleration ✓\n- Graph C: Curved line → changing acceleration\n- Graph D: Horizontal line (constant velocity) → zero acceleration\n\n**Answer:** Graph B shows a straight line with constant slope, indicating constant acceleration.',
  difficulty: 2,
  points: 15,
  hints: [
    'The slope of a velocity-time graph represents acceleration',
    'Constant acceleration means the graph should be a straight line',
    'A straight line with non-zero slope indicates constant non-zero acceleration'
  ],
  sectionId: 'position-movement',
}
```

**注意：**
- 选项图片路径直接放在 `options` 数组中
- 答案使用 `options` 里的完整字符串（即对应图片路径），用于与用户选择做精确匹配
- 标准答案补充图片放在 `answerImagePaths`（显示在解析区域上方）
- UI 会自动检测 `options` 中的图片路径并渲染图片
- 选项图片不放在 `imagePaths` 数组中

---

## H. 特殊处理规则

### 1. 多部分题目

如果题目有 (a), (b) 等部分：

**选项 1：拆分成多个 Exercise（推荐）**
- 每个部分作为一个独立的 Exercise
- ID 使用后缀：`pm-002a`, `pm-002b`
- 在 `question` 中说明这是第几部分
- 优点：更灵活，可以单独练习每个部分

**选项 2：使用单个 Exercise（适合紧密相关的部分）**
- 使用 `explanation` 中的 Markdown 列表展示多部分
- 在 `answer` 中列出所有部分的答案
- 优点：保持题目的完整性

### 2. 图片处理

#### 题目图片
- **自动检测**：从 Markdown 中提取图片路径
- **路径转换**：
  - 相对路径：`./physics/exercises/...` → `/physics/exercises/...`
  - 绝对路径：保持不变
- **验证**：检查图片文件是否存在（`public/` 目录）
- **多图片**：支持一个题目多张图片，存储在 `imagePaths` 数组中
- **展示位置**：图片统一显示在题目文本上方

#### 选项图片
- **自动检测**：从选项 Markdown 中提取图片路径（`![alt](path)` 格式）
- **路径转换**：与题目图片相同，转换为绝对路径
- **存储位置**：直接放在 `options` 数组中（不放在 `imagePaths`）
- **验证**：检查选项图片文件是否存在（`public/` 目录）
- **UI 渲染**：UI 会自动检测 `options` 中的图片路径并渲染图片
- **答案格式**：录入数据时使用完整图片路径（= `options` 中对应项），用于精确匹配

### 3. 内容格式与转义

- LaTeX / Markdown 的统一规则见 `B. AI 生成规则`（避免多处维护不一致）
- 图片统一走方案C：从 Markdown 提取到 `imagePaths`，`question` 只保留文字引用

---

## I. 迭代流程

1. **你提供题目** → Markdown + Images
2. **Composer 生成** → 解析、提示、UI
3. **你审核** → 检查 UI 展示效果
4. **如有问题** → 反馈，Composer 调整
5. **确认无误** → 继续下一题

### 反馈机制

如果发现问题，请明确指出：
- **问题类型**：解析错误、格式问题、UI 问题等
- **具体位置**：哪一题、哪个字段
- **期望结果**：应该是什么样的

Composer 会：
- 立即修正问题
- 更新代码
- 重新验证
- 提供修正后的预览

---

## J. 故障排除

### 问题 1：图片不显示

**症状**：题目中的图片无法加载或显示位置不正确

**检查清单**：
- [ ] 图片路径是否正确（以 `/` 开头，绝对路径）
- [ ] 图片文件是否存在于 `public/` 目录
- [ ] 文件名是否正确（大小写敏感）
- [ ] `imagePaths` 数组是否正确填充（题目图片）
- [ ] `question` 字段中是否包含图片 Markdown（方案C：不应该包含）

**解决方案**：
- **方案C（推荐）**：
  - 确保图片路径格式：`/physics/exercises/[section]/[filename].png`
  - 图片路径添加到 `imagePaths` 数组，**不在 `question` 字段中包含图片 Markdown**
  - 题目文本中只保留文字引用，如 "as shown in the figure"
  - 图片会统一显示在题目文本上方
- **验证**：
  - 检查文件系统：`ls public/physics/exercises/[section]/`
  - 在浏览器中直接访问图片 URL 验证
  - 检查 `ExercisePage.tsx` 中是否有独立的 Figure 展示区域

### 问题 1.5：选项图片不显示

**症状**：选择题的选项图片无法加载或显示不正确

**检查清单**：
- [ ] 选项图片路径是否正确（以 `/` 开头，绝对路径）
- [ ] 选项图片文件是否存在于 `public/` 目录
- [ ] 文件名是否正确（大小写敏感）
- [ ] `options` 数组中是否包含图片路径（不是 `imagePaths`）
- [ ] 图片路径格式是否正确（如 `/physics/exercises/position-movement/pm-001-option-a.png`）
- [ ] `ExercisePage.tsx` 中是否有 `isImageOption` 函数检测图片选项

**解决方案**：
- **选项图片处理**：
  - 确保图片路径格式：`/physics/exercises/[section]/[filename].png`
  - 图片路径直接放在 `options` 数组中（**不放在 `imagePaths`**）
  - UI 会自动检测 `options` 中的图片路径并渲染图片
- **验证**：
  - 检查文件系统：`ls public/physics/exercises/[section]/`
  - 在浏览器中直接访问图片 URL 验证
  - 检查 `ExercisePage.tsx` 中的 `isImageOption` 函数是否正确实现
  - 检查选项渲染逻辑是否正确处理图片选项

**常见错误**：
- ❌ 将选项图片放在 `imagePaths` 数组中 → 错误：选项图片应该放在 `options` 中
- ❌ 选项中使用相对路径 `./physics/...` → 错误：应该转换为绝对路径 `/physics/...`
- ❌ 答案使用图片路径而不是选项字母 → 可以，但建议使用选项字母（如 `"B"`）更简洁

### 问题 1.8：答案/解析附图不显示

**症状**：解析区域应该有答案补充图片，但没有显示 / 图片加载失败 / 或错误地显示在题目图片区

**检查清单**：
- [ ] 是否已把图片路径写入 `answerImagePaths` 数组（而不是写在 `explanation` 的 Markdown 里）
- [ ] 图片路径是否正确（以 `/` 开头，绝对路径）
- [ ] 图片文件是否存在于 `public/` 目录
- [ ] 文件名是否正确（大小写敏感）
- [ ] 是否已点击 "Check Answer" 且展开 "Show Explanation"（答案附图显示在解析区域上方）
- [ ] 是否误把答案附图放进 `imagePaths`（若放进 `imagePaths` 会显示在题目图区域）

**解决方案**：
- **答案附图处理**：
  - 确保图片路径格式：`/physics/exercises/[section]/[filename].png`
  - 图片路径放在 `answerImagePaths` 数组中（**不要放在 `imagePaths`，也不要写进 `explanation` Markdown**）
  - UI 会在解析区域上方统一展示 `answerImagePaths`
  - 若答案附图显示在题目图片区：从 `imagePaths` 移除该路径，并添加到 `answerImagePaths`
- **验证**：
  - 检查文件系统：`ls public/physics/exercises/[section]/`
  - 在浏览器中直接访问图片 URL 验证
  - 检查 `ExercisePage.tsx` 是否渲染了 `answerImagePaths`

**常见错误**：
- ❌ 把答案附图写在 `explanation` 的 Markdown 里 → 错误：会被方案C忽略
- ❌ 把答案附图放在 `imagePaths` → 错误：`imagePaths` 用于题目图；答案附图应该放 `answerImagePaths`

### 问题 2：LaTeX 不渲染

**症状**：公式显示为原始文本（如 `$X$` 或 `$v = u + at$`）

**检查清单**：
- [ ] 是否使用 `$...$` 或 `$$...$$` 包裹公式
- [ ] 在 `question` 和 `options` 字段中，简单变量（如 `$X$`）不需要转义
- [ ] 在 `explanation` 字段中，复杂公式需要转义（`\\frac` 而不是 `\frac`）
- [ ] 是否使用 KaTeX 支持的宏
- [ ] 确保 `$` 符号没有被转义（在 TypeScript 字符串中直接使用 `$`）
- [ ] `ExercisePage.tsx` 中是否导入了 `katex` 和 `'katex/dist/katex.min.css'`
- [ ] `renderLatexContent` 函数是否正确实现

**解决方案**：
- **简单变量**（question/options）：`planet $X$` → 直接使用，不需要转义
- **行内公式**（explanation）：`$v = u + at$` → 在 TypeScript 中直接使用
- **块级公式**（explanation）：`$$a = \\frac{v - u}{t}$$` → 反斜杠需要转义
- **复杂公式**：确保 LaTeX 命令的反斜杠正确转义：`\\frac`, `\\sin`, `\\cos`
- **组件实现**：确保 `ExercisePage.tsx` 中有 `renderLatexContent` 函数处理所有 LaTeX

**常见错误**：
- ❌ `planet \$X\$` → 错误：`$` 被转义了
- ✅ `planet $X$` → 正确：直接使用 `$`
- ❌ `$v = u + \frac{1}{2}at^2$` → 错误：在 explanation 中需要转义
- ✅ `$v = u + \\frac{1}{2}at^2$` → 正确：反斜杠转义
- ❌ 忘记导入 `ChevronUp` → 错误：会导致运行时错误
- ✅ 确保所有使用的图标都已导入

### 问题 3：解析格式混乱或 Explanation 不显示

**症状**：解析内容显示格式不正确，或 Explanation 完全不显示

**检查清单**：
- [ ] Markdown 语法是否正确
- [ ] 是否有多余的空行
- [ ] 列表格式是否正确
- [ ] 换行符是否正确（`\n\n`）
- [ ] `renderMarkdown` 函数是否正确实现
- [ ] 是否点击了 "Check Answer" 按钮
- [ ] 是否点击了 "Show Explanation" 按钮
- [ ] `showExplanation` 状态是否正确管理

**解决方案**：
- 使用标准的 Markdown 语法
- 段落之间使用 `\n\n` 分隔
- 列表使用 `-` 或 `1.` 格式
- **交互流程**：用户必须先点击 "Check Answer"，然后点击 "Show Explanation" 才能看到解析
- 确保 `ExercisePage.tsx` 中有 `renderMarkdown` 函数处理 Markdown 格式（加粗、列表、换行）
- 确保 `renderLatexContent` 函数同时处理 LaTeX 和 Markdown

### 问题 4：深色主题样式不匹配

**症状**：LaTeX 公式的背景色和文字颜色与深色主题不协调

**检查清单**：
- [ ] 公式背景色是否为深色（`bg-slate-800/50`）
- [ ] 公式边框是否为蓝色（`border-blue-500/30`）
- [ ] KaTeX 文字颜色是否为浅色（`blue-100`）
- [ ] 全局 CSS 中是否设置了 KaTeX 文字颜色

**解决方案**：
- **块级公式样式**：
  - 背景：`bg-slate-800/50`（深色半透明）
  - 边框：`border-blue-500/30`（蓝色边框）
  - 圆角：`rounded-lg`
  - 文字：通过全局 CSS 设置为 `blue-100`
- **行内公式样式**：
  - 添加 `[&_.katex]:text-blue-100` 确保文字为浅色
- **全局 CSS**：在 `src/index.css` 中添加：
  ```css
  .katex {
    color: rgb(219, 234, 254); /* blue-100 */
  }
  ```

### 问题 5：ID 冲突

**症状**：TypeScript 编译错误或运行时错误

**检查清单**：
- [ ] ID 是否唯一
- [ ] 是否与现有题目冲突

**解决方案**：
- 检查现有题目列表
- 使用递增序号
- 如需沿用历史前缀（如 `fme-`），确保序号不冲突

### 问题 6：类型错误或运行时错误

**症状**：TypeScript 编译错误或运行时错误（如 `ChevronUp is not defined`）

**检查清单**：
- [ ] 所有必填字段是否存在
- [ ] 字段类型是否正确
- [ ] `options` 是否存在（Multiple Choice）
- [ ] 所有使用的图标是否已导入（如 `ChevronUp`, `ChevronDown`）
- [ ] 所有使用的库是否已导入（如 `katex`, `framer-motion`）

**解决方案**：
- 确保所有必填字段存在
- 检查字段类型匹配 `Exercise` 接口
- Multiple Choice 必须包含 `options` 数组
- **图标导入**：确保所有使用的 `lucide-react` 图标都已导入
- **库导入**：确保 `katex` 和 `'katex/dist/katex.min.css'` 已导入

---

## K. 关键经验（精简）

- **题目图片**：统一走方案C：`imagePaths` 展示，`question` 不包含图片 Markdown
- **选项图片**：直接放在 `options` 数组中（不放在 `imagePaths`），UI 自动检测并渲染
- **答案/解析附图**：放在 `answerImagePaths`（解析区域上方），不放 `imagePaths`，也不要写进 `explanation` Markdown
- **LaTeX / Markdown**：统一按 `B. AI 生成规则`；不渲染时优先看 `J. 问题 2`
- **解析显示**：交互需先 "Check Answer" 再 "Show Explanation"（见 `C.2 交互流程`）
- **常见坑**：TypeScript 字符串换行用 `\\n\\n`、图标/依赖漏导入、ID 未保持唯一、选项图片/答案附图误放在 `imagePaths`

---

## L. 下一步计划

### Phase 1: Position and Movement（当前阶段）

- [ ] 完成基础题目录入（10-15 题）
- [ ] 验证 UI 展示效果
- [ ] 优化解析质量
- [ ] 建立题目库

### Phase 2: 其他板块

按顺序完成其他 7 个板块：
1. [ ] Newton's Laws
2. [ ] Moment of Force
3. [ ] Work, Energy and Power
4. [ ] Momentum
5. [ ] Projectile Motion
6. [ ] Circular Motion
7. [ ] Gravitation

### Phase 3: 优化和扩展

- [ ] 添加更多题目类型
- [ ] 优化 UI/UX
- [ ] 添加题目搜索功能
- [ ] 添加题目收藏功能
- [ ] 添加学习进度跟踪

---

## O. 做题动效与挑战进度（Rocket Gamification）

### 1. 目标

为 Exercise 做题过程增加趣味反馈：
- **每答对一题**：火箭充能（进度 +1）
- **正确率 ≥ 95%**：触发“火箭升空”动画（仅触发一次）
- **可继续挑战**：升空后可选择继续做题或查看总结
- **做完全部题目**：自动弹出总结，列出错题

### 2. 进度条（右上角常驻）

- **显示内容**：
  - 火箭图标 + 进度条
  - 统计：`已答对 / 总题数`
  - 正确率百分比
- **计数规则（关键）**：
  - 只统计“**首次答对**”的题目（重复答对不重复加分）
  - 总题数使用题库总数（不受难度筛选影响）
- **持久化**：
  - 进度默认保存在本地（刷新不丢）

### 3. 重置进度（Reset）

- 进度条提供 **重置按钮**
- 需要二次确认
- **重置范围**：
  - 已作答记录
  - 已答对记录
  - 曾经答错记录
  - 升空状态（允许再次触发升空）

### 4. 达成 95% 的交互

- 当正确率达到 **≥95%** 且尚未升空：
  - 播放火箭升空动画
  - 动画结束弹窗：
    - **继续挑战**
    - **查看总结**

### 5. 做完全部题目后的总结

- **判定“做完”**：每题至少点过一次 **Check Answer**
- 自动弹出总结弹窗，展示：
  - 总题数、已作答、已答对、曾经答错
  - 正确率
  - 错题列表（曾经答错过的题目），可点击跳转到对应题

### 6. QA Checklist（动效相关）

- [ ] 右上角进度条始终可见，不被导航栏/容器遮挡
- [ ] 刷新页面进度保持（持久化正常）
- [ ] 点击重置后进度清零，且不影响题库本身
- [ ] ≥95% 仅触发一次升空动画（重置后可再次触发）
- [ ] 全部题目作答后自动弹出总结
- [ ] 错题列表可跳转到对应题目

---

## M. 版本历史

| 版本 | 日期 | 更新内容 |
|-----|------|---------|
| v1.2 | 2026-01-XX | 完成第二题，采用图片处理方案C，更新图片展示规范和故障排除 |
| v1.1 | 2026-01-XX | 完成第一题，总结关键经验，更新故障排除和实现细节 |
| v1.0 | 2026-01-XX | 初始版本，建立完整工作流 |

---

## N. 联系和支持

如有问题或建议，请：
1. 在录入过程中直接反馈
2. 指出具体问题和期望结果
3. Composer 会立即修正并更新文档

---

**文档维护者：** Composer AI + 用户协作  
**最后更新：** 2026-01-XX  
**状态：** ✅ 已就绪，可以开始录入
