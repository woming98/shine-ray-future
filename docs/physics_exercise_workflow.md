# Physics Exercise Content Workflow Guideline v1.2
> Practical workflow for entering physics exercises into the system.

## Goal
Build a stable pipeline:
- User: provides question + answer (Markdown + images)
- AI: generates explanation, hints, difficulty, points
- System: renders in `/subjects/physics/topic/*` under `Exercise`

---

## A. User Input Format

### 1) Markdown template

```markdown
## Question [ID]

**Type:** Multiple Choice / Calculation / Explanation
**Section:** Position and Movement

**Question:**
[Question body, supports Markdown and LaTeX]
- Formula example: $v = u + at$
- You can include lists
- You can include question image:
  ![Figure](/physics/exercises/position-movement/pm-001-question.png)

**Options:** (only for Multiple Choice)
A. Option 1
B. Option 2
C. Option 3
D. Option 4

**Answer:** B. Option 2

**Answer Images:** (optional)
- ![Answer Steps](/physics/exercises/position-movement/pm-001-answer-steps.png)

**Difficulty:** [1-5] (optional)
**Points:** [10/15/20/25/30] (optional)
```

### 2) Image naming and paths

#### Question image
- Path: `public/physics/exercises/[sectionId]/`
- Name: `[prefix]-[3digit]-question.png`
- Example: `pm-001-question.png`

#### Option image
- Path: same folder
- Name: `[prefix]-[3digit]-option-a.png` (a/b/c/d)
- Example: `pm-001-option-c.png`

#### Answer / explanation image
- Path: same folder
- Name: `[prefix]-[3digit]-answer-steps.png`
- Store in field: `answerImagePaths`

### 3) Path style recommendation
- Prefer absolute paths in Markdown: `/physics/exercises/...`
- If relative paths are provided, normalize to absolute paths during import

---

## B. AI Output Schema

### 1) Exercise interface

```ts
interface Exercise {
  id: string; // e.g. pm-001
  type: 'multiple_choice' | 'calculation' | 'explanation';
  question: string; // Markdown + LaTeX
  options?: string[]; // text or image path
  answer: string;
  explanation: string; // Markdown
  hints: string[]; // 2-4 hints
  difficulty: 1 | 2 | 3 | 4 | 5;
  points: 10 | 15 | 20 | 25 | 30;
  sectionId?: string;
  imagePaths?: string[]; // question images
  answerImagePaths?: string[]; // explanation images
}
```

### 2) Prefix mapping

| Section | Prefix | Example |
|---|---|---|
| Position and Movement | `pm-` | `pm-001` |
| Newton's Laws | `nl-` | `nl-001` |
| Moment of Force | `mf-` | `mf-001` |
| Work, Energy and Power | `wep-` | `wep-001` |
| Momentum | `mom-` | `mom-001` |
| Projectile Motion | `proj-` | `proj-001` |
| Circular Motion | `circ-` | `circ-001` |
| Gravitation | `grav-` | `grav-001` |

---

## C. LaTeX and Explanation Rules

### 1) Formula style
- Inline formula: `$...$`
- Block formula: `$$...$$`
- In TS strings, escape commands: `\\frac`, `\\sin`, `\\cos`

### 2) Explanation structure (recommended)
1. Key Point
2. Steps
3. Verification (optional)

Example:

```markdown
Key point: The object starts from rest, so $u=0$.

Step 1: Known values are $v=20\ \text{m/s}$, $t=5\ \text{s}$.

Step 2: Use
$$a=\frac{v-u}{t}=\frac{20-0}{5}=4\ \text{m/s}^2$$
```

### 3) Hint rules
- 2 to 4 hints
- Ordered from broad to specific
- Typical order:
  - identify condition
  - choose formula
  - substitution reminder
  - common trap

---

## D. Difficulty and Points

| Difficulty | Points | Typical pattern |
|---|---:|---|
| 1 | 10 | direct substitution, single concept |
| 2 | 15 | one main formula, basic interpretation |
| 3 | 20 | multi-step or unit/graph conversion |
| 4 | 25 | multi-concept integration |
| 5 | 30 | DSE-style advanced composite |

---

## E. Import Checklist

- [ ] ID is unique and prefix matches section
- [ ] Question/option/answer images are reachable
- [ ] `answer` type matches `options` type (text or image)
- [ ] Explanation has key formula and correct units
- [ ] `difficulty` and `points` are consistent
- [ ] Preview has no broken image and no garbled text

---

## F. Minimal import example

```ts
{
  id: 'pm-001',
  type: 'multiple_choice',
  sectionId: 'position-movement',
  question: 'A car accelerates uniformly from rest for 5 s and reaches 20 m/s. What is its acceleration?',
  options: ['2 m/s^2', '4 m/s^2', '5 m/s^2', '10 m/s^2'],
  answer: '4 m/s^2',
  explanation: 'Using $a=(v-u)/t$, with $u=0, v=20, t=5$, we get $a=4\\ \\text{m/s}^2$.',
  hints: ['Starts from rest => u=0', 'Use a=(v-u)/t'],
  difficulty: 1,
  points: 10,
  imagePaths: ['/physics/exercises/position-movement/pm-001-question.png']
}
```

