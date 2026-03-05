# M2 Problem Bank Workflow (GPT-5.2 analysis -> Composer rendering) v1

## Goal
Build a stable pipeline:
- **GPT-5.2**: generates high-quality, structured analysis (no human-provided solutions required).
- **Composer**: renders the analysis consistently on the website.

---

## A. Inputs (from repo)

1. **problems source JSON** (per year)
   - Example structure: `problems_2012.json`
   - Contains: `id`, `year`, `qno`, `assets.images`, `parts[{part,promptLatex,marks}...]`

2. **(Optional) images folder** for the year/topic
   - Used only for display, not for reasoning.

---

## B. GPT-5.2 Responsibilities (Analysis Output)

Given the year's `problems_YYYY.json`, GPT-5.2 must produce **ONE analysis artifact (JSON)** with:

### Required per problem:
- `id` (must match)
- `difficulty`: integer 1..5
- `tags`: string[]
- `knowledgePointIds`: string[]
- `derivationIds`: string[] (optional; use only if there is a formal derivation to reference)
- `parts`: for each part:
  - `part`: keep exact part key (e.g., "a", "b", "a.i", "b.ii")
  - `answerLatex`: string (KaTeX-friendly)
  - `hints`: string[] (2-4 items)
  - `solutionSteps`: array of steps:
    - `step`: 1..n
    - `latex`: string (one logical transformation/equation)
    - `reason`: short label (e.g., "Integration by parts", "Substitution", "Identity")
    - `explanation`: optional short English sentence

### Constraints:
- **English-only** for math explanations (no Chinese in the analysis fields).
- **LaTeX must be KaTeX-friendly**:
  - Use `\\frac`, `\\sin`, `\\cos`, `\\tan`, `\\sec`, `\\pi`
  - Avoid unsupported macros
- **Do not assume missing diagram details** unless necessary:
  - If an assumption is needed, add it as a short note in a solution step's explanation.
- **Provide a quick sanity check** when sign/range is important.

---

## C. Composer Responsibilities (Rendering)

Composer should:
1. Load the base problems JSON and the GPT analysis JSON.
2. **Merge by `id` and by `part`**.
3. Render:
   - Problem images (from `assets.images`)
   - Prompt (`promptLatex`)
   - Tabs:
     - **Knowledge**: render titles of `knowledgePointIds` (lookup table)
     - **Hints**: list
     - **Solution**: steps with KaTeX
     - **Answer**: `answerLatex`
4. If GPT analysis missing for a part, show a neutral placeholder:
   - "Analysis not available yet."

---

## D. Merge Strategy (Deterministic)

For each problem:
- If analysis exists: **overwrite/add** these fields:
  - `difficulty`, `tags`, `knowledgePointIds`, `derivationIds`
- For each part:
  - **add/overwrite**: `answerLatex`, `hints`, `solutionSteps`

**Never change:**
- `id`, `year`, `qno`, `promptLatex`, `assets.images`, `marks`

---

## E. Output Artifacts (recommended filenames)

- `problems_YYYY.json` (source extracted from LaTeX)
- `analysis_YYYY_gpt.json` (GPT-produced, deterministic schema)

---

## F. QA Checklist (per year)

- [ ] All problems have `difficulty` + `tags`
- [ ] Every part has:
  - `>= 1 solution step` OR `>= 2 hints`
  - `answerLatex` present for computational questions
- [ ] LaTeX renders (no raw backslashes breaking KaTeX)
- [ ] No Chinese text in analysis fields

---

## G. Iteration Loop

1. User verifies year YYYY in UI.
2. If a part is wrong/unclear:
   - Update only `analysis_YYYY_gpt.json` (keep source problems JSON unchanged).
3. Move to next year.

---

## H. Example Workflow

### Step 1: GPT-5.2 receives `problems_2012.json`
```json
{
  "problems": [
    {
      "id": "2012Q9",
      "parts": [
        {"part": "a", "promptLatex": "Using integration by parts..."}
      ]
    }
  ]
}
```

### Step 2: GPT-5.2 produces `analysis_2012_gpt.json`
```json
{
  "problems": [
    {
      "id": "2012Q9",
      "difficulty": 2,
      "tags": ["integration", "by-parts"],
      "knowledgePointIds": ["KP_INTEGRATION_BY_PARTS"],
      "parts": [
        {
          "part": "a",
          "answerLatex": "-x\\cos x+\\sin x + C",
          "hints": ["Use integration by parts..."],
          "solutionSteps": [...]
        }
      ]
    }
  ]
}
```

### Step 3: Composer merges and renders
- Loads both JSONs
- Merges by `id` and `part`
- Displays in UI with tabs for Knowledge, Hints, Solution, Answer

---

## I. Knowledge Points Reference

When referencing knowledge points, use these IDs (or create new ones following the pattern):

- `KP_INTEGRATION_BY_PARTS`: Integration by parts
- `KP_VOLUME_OF_REVOLUTION`: Volume of revolution (disk method)
- `KP_TRIG_TRIPLE_ANGLE`: Triple-angle identity
- `KP_TRIG_DOUBLE_ANGLE`: Double-angle identities
- `KP_COMPLETE_THE_SQUARE`: Completing the square
- `KP_ARCTAN_SUBSTITUTION`: Arctan substitution

Pattern: `KP_<TOPIC>_<SUBTOPIC>` (uppercase, underscores)

---

## J. Troubleshooting

### Problem: LaTeX not rendering
- Check: Are backslashes escaped? (`\\frac` not `\frac`)
- Check: Are all macros KaTeX-compatible?

### Problem: Missing analysis for a part
- Check: Does the part key match exactly? (e.g., "a.i" vs "a.i")
- Check: Is the analysis JSON structure correct?

### Problem: Knowledge points not showing
- Check: Are `knowledgePointIds` present in analysis?
- Check: Does the knowledge lookup table include these IDs?
