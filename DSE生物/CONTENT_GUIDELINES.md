# HKDSE Biology Platform - Content Guidelines
# DSE生物平台 - 内容编写规范

Version: 1.0.0  
Last Updated: 2026-01-11

---

## 🎯 Core Principles 核心原则

### 1. English-First Approach 英语优先

- **Primary Language**: English
- **Secondary Language**: Chinese (Simplified/Traditional for support)
- **Bilingual Support**: Always provide both, but emphasize English learning

**Why?**  
DSE Biology exam is in English. Students must master English terminology to succeed.

### 2. Interactive Vocabulary 互动词汇

- All technical terms MUST be clickable via `<VocabularyWord>` component
- Pronunciation available using Web Speech API
- Memory techniques (mnemonics) provided for medium/hard words
- Etymology breakdown for understanding word roots

### 3. Progressive Learning 渐进式学习

- Start with simple definitions
- Build to complex explanations
- Provide multiple context examples
- Link related concepts

---

## 📝 Content Structure 内容结构

### Module Content Template 模块内容模板

```javascript
{
  id: 'module-id',
  title: 'Module Title in English',
  titleCn: '中文标题（辅助）',
  language: 'en',  // Primary language
  
  introduction: {
    text: 'English text with **emphasis** on key terms.',
    translation: '中文翻译（可选，用于辅助理解）',
    vocabularies: ['term1', 'term2', 'term3']  // List all clickable terms
  },
  
  sections: [
    {
      id: 'section-id',
      type: 'content-block',
      title: 'Section Title',
      titleCn: '节标题',
      
      content: [
        {
          text: 'Paragraph with <VocabularyWord word="term" /> embedded.',
          vocabularies: ['term']
        }
      ]
    }
  ],
  
  keyVocabulary: ['essential', 'terms', 'for', 'this', 'module'],
  
  dseNotes: {
    examTips: ['Tip 1', 'Tip 2'],
    commonMistakes: ['Mistake 1', 'Mistake 2'],
    mustKnow: ['Concept 1', 'Concept 2']
  }
}
```

---

## 📚 Vocabulary Entry Template 词汇条目模板

Every technical term must have a complete entry in `src/data/vocabulary.js`:

```javascript
'word-key': {
  // === REQUIRED FIELDS ===
  word: 'Word',                    // Capitalized properly
  phonetic: '/fəˈnetɪk/',          // IPA pronunciation
  chinese: '中文翻译',              // Chinese translation
  definition: 'Clear, concise definition in English.',
  difficulty: 'easy' | 'medium' | 'hard',
  category: 'general' | 'chemistry' | 'biology' | 'process' | 'molecule' | 'anatomy',
  
  // === OPTIONAL BUT RECOMMENDED ===
  etymology: {
    prefix: 'pre-',
    prefixMeaning: 'meaning of prefix (with language origin)',
    root: 'root',
    rootMeaning: 'meaning of root (with language origin)',
    breakdown: 'prefix + root = combined meaning explanation'
  },
  
  // === REQUIRED FOR MEDIUM/HARD WORDS ===
  mnemonic: {
    technique: 'Type of mnemonic',  // See techniques below
    tip: 'English memory tip with vivid imagery or association',
    tipCn: '中文记忆提示'
  },
  
  // === HIGHLY RECOMMENDED ===
  examples: [
    'Example sentence 1 showing word in context.',
    'Example sentence 2 with different usage.'
  ],
  
  relatedWords: ['related', 'vocabulary', 'terms'],
}
```

### Difficulty Levels 难度级别

**Easy (简单)**
- 1-2 syllables
- Common prefixes/suffixes
- Everyday science words
- Examples: water, cell, ion, bone

**Medium (中等)**
- 3-4 syllables
- Greek/Latin roots but recognizable
- Technical but commonly used
- Examples: photosynthesis, chlorophyll, molecule, glucose

**Hard (困难)**
- 5+ syllables
- Complex etymology
- Specialized medical/scientific terms
- Multiple root words
- Examples: haemoglobin, plasmolysis, deoxyribonucleic acid

### Categories 分类

- `general` - Common scientific terms
- `chemistry` - Chemical compounds, reactions, elements
- `biology` - Biological processes and concepts
- `process` - Actions, mechanisms, phenomena
- `molecule` - Specific molecules and compounds
- `anatomy` - Body parts, cell structures, organs
- `phenomenon` - Observable events and states

---

## 💡 Mnemonic Techniques 记忆技巧类型

### 1. Word Association 词汇联想
Link to familiar English words or concepts.

**Example:**
```javascript
tip: 'PHOTO-synthesis = Think of taking a PHOTO (needs light) while the plant SYNTHESIZES (makes) food.'
```

### 2. Etymology Breakdown 词源分解
Break into prefix + root + suffix.

**Example:**
```javascript
tip: 'IN-organic = NOT organic. "IN" means NOT, so inorganic = NOT from living things.'
```

### 3. Visual Association 视觉联想
Create mental images.

**Example:**
```javascript
tip: 'CHLORO (green like chlorine pool) + PHYLL (leaf) = GREEN in LEAVES!'
```

### 4. Sound Association 谐音联想
Use similar-sounding words.

**Example:**
```javascript
tip: 'TURGOR sounds like "TURN GORE" → Water TURNS the cell into a GORGED (swollen) state!'
```

### 5. Acronym/Acrostic 首字母缩写
Use first letters to create memorable phrases.

**Example:**
```javascript
tip: 'HOMES = Huron, Ontario, Michigan, Erie, Superior (Great Lakes)'
```

### 6. Story/Narrative 故事记忆
Create a mini-story.

**Example:**
```javascript
tip: 'Imagine a tiny magician (Magnesium) waving a wand to make leaves green with chlorophyll!'
```

### 7. Rhyme/Rhythm 押韵节奏
Use rhymes for memorization.

**Example:**
```javascript
tip: 'TURGID rhymes with SURGED → The cell SURGED with water and became TURGID!'
```

---

## 🎨 UI Component Usage 组件使用方法

### 1. Inline Vocabulary 行内词汇

Use within paragraphs to make terms clickable:

```jsx
import VocabularyWord from '../components/VocabularyWord'

<p>
  The process of <VocabularyWord word="photosynthesis" /> occurs in 
  the <VocabularyWord word="chloroplast" /> where <VocabularyWord word="chlorophyll" /> 
  captures light energy.
</p>
```

**Features:**
- Hover shows pronunciation + translation
- Click opens detailed modal
- Pronunciation button available
- Related words linked

### 2. Vocabulary Card 词汇卡片

Display single vocabulary as a card:

```jsx
<VocabularyWord word="photosynthesis" inline={false} />
```

### 3. Vocabulary List 词汇列表

Display multiple vocabularies:

```jsx
import { VocabularyList } from '../components/VocabularyWord'

<VocabularyList 
  words={['photosynthesis', 'chlorophyll', 'glucose', 'oxygen']}
  columns={2}
/>
```

### 4. Key Vocabulary Section 重点词汇区块

At the end of each module:

```jsx
<div className="card-bio">
  <h3 className="font-display font-bold text-bio-light mb-4">
    🔑 Key Vocabulary for This Module
  </h3>
  <VocabularyList 
    words={moduleContents['module-id'].keyVocabulary}
    columns={2}
  />
</div>
```

---

## 🔊 Pronunciation Guidelines 发音指南

### IPA Phonetic Notation

Use standard International Phonetic Alphabet (IPA):

- `/ˌfoʊtoʊˈsɪnθəsɪs/` for photosynthesis
- `/ˈklɔːrəfɪl/` for chlorophyll
- `/ˈtɜːrɡər/` for turgor
- `/ˌhaɪpoʊˈθæləməs/` for hypothalamus

**Resources:**
- [Cambridge Dictionary](https://dictionary.cambridge.org/) for UK pronunciation
- [Merriam-Webster](https://www.merriam-webster.com/) for US pronunciation

### Speech Synthesis Settings

Default configuration in components:

```javascript
{
  lang: 'en-US',     // US English
  rate: 0.75,        // 75% speed (slower for learning)
  pitch: 1.0,        // Normal pitch
  volume: 1.0        // Full volume
}
```

**Required for:**
- All words with 3+ syllables
- Words with silent letters (e.g., "plasmolysis")
- Words with Greek/Latin roots
- All DSE exam vocabulary

---

## ✍️ Writing Guidelines 写作指南

### Language Style 语言风格

**DO:**
- Use clear, simple English
- Define technical terms immediately
- Provide context and examples
- Use active voice
- Be concise but complete

**DON'T:**
- Use overly complex sentences
- Assume prior knowledge
- Mix British and American spelling (choose one)
- Use ambiguous pronouns

### Example Format 示例格式

**Good:**
```
Photosynthesis is the process where plants make food using light. 
Plants capture sunlight with chlorophyll in their chloroplasts.
```

**Bad:**
```
The process whereby autotrophic organisms utilize electromagnetic 
radiation to synthesize organic compounds... (too complex)
```

### Emphasis and Formatting 强调和格式

- **Bold** for key terms first mention
- *Italic* for emphasis
- `Code format` for chemical formulas: `CO₂`, `H₂O`, `C₆H₁₂O₆`
- Superscript for charges: Ca²⁺, NO₃⁻, PO₄³⁻

---

## 🎯 DSE Exam Integration DSE考试对接

### Must-Know Vocabulary Lists 必考词汇列表

Each module must identify:

1. **Core Terms 核心术语** (10-15 words)
   - Essential for understanding the topic
   - Appear frequently in DSE exams
   - Required for all questions

2. **Extended Terms 扩展术语** (5-10 words)
   - Important for deeper understanding
   - May appear in structured questions
   - Useful for essay responses

3. **Related Terms 相关术语** (5-10 words)
   - Connected concepts
   - Helpful for comprehensive answers
   - Show understanding of relationships

### Exam Question Alignment 考题对接

Content should prepare students for:

- **MCQ (Multiple Choice)** - Quick recall of definitions
- **SAQ (Short Answer)** - 2-3 sentence explanations
- **SQ (Structured Questions)** - Step-by-step reasoning
- **EQ (Essay Questions)** - Comprehensive understanding

### Common DSE Command Words DSE常见指令词

Students must understand these verbs:

| Word | Meaning | Example |
|------|---------|---------|
| **Define** | Give precise meaning | Define photosynthesis |
| **Describe** | Give detailed account | Describe the process of... |
| **Explain** | Give reasons/causes | Explain why plants need... |
| **Compare** | Show similarities | Compare animal and plant cells |
| **State** | Express briefly | State two functions of... |
| **Suggest** | Propose explanation | Suggest why the plant wilted |

---

## ✅ Quality Checklist 质量检查清单

Before publishing any content, ensure:

### Vocabulary Database
- [ ] All technical terms added to `vocabulary.js`
- [ ] IPA pronunciation provided for ALL terms
- [ ] Etymology included for all medium/hard terms
- [ ] Mnemonic provided for all medium/hard terms
- [ ] Minimum 2 examples per term
- [ ] Related words linked
- [ ] Chinese translations accurate
- [ ] Difficulty level appropriate
- [ ] Category correctly assigned

### Content
- [ ] English is primary language
- [ ] Chinese provided as support
- [ ] All technical terms wrapped in `<VocabularyWord>`
- [ ] Key vocabulary list at end of module
- [ ] DSE exam tips included
- [ ] Examples relevant and clear
- [ ] Grammar and spelling checked
- [ ] Formatting consistent

### Interactive Elements
- [ ] All `<VocabularyWord>` components tested
- [ ] Pronunciation works for all terms
- [ ] Modal windows open/close properly
- [ ] Related words link correctly
- [ ] Mobile responsive

### Educational Value
- [ ] Content accurate and up-to-date
- [ ] Appropriate for DSE level
- [ ] Builds on previous knowledge
- [ ] Prepares for exam questions
- [ ] Engaging and memorable

---

## 📊 Content Priority Matrix 内容优先级矩阵

When creating new content, prioritize:

| Priority | Content Type | Reason |
|----------|-------------|--------|
| **HIGH** | Core DSE vocabulary | Essential for exam success |
| **HIGH** | Process explanations | Frequently tested |
| **MEDIUM** | Etymology & mnemonics | Aids long-term retention |
| **MEDIUM** | Related terms | Builds comprehensive understanding |
| **LOW** | Historical context | Interesting but not exam-critical |

---

## 🔄 Migration Process 迁移流程

### Converting Existing Chinese-Heavy Content

**Step 1: Audit Content**
- List all technical terms used
- Categorize by difficulty
- Identify missing vocabulary entries

**Step 2: Create Vocabulary Entries**
- Add to `vocabulary.js`
- Include pronunciation (use online dictionaries)
- Write mnemonics (be creative!)
- Find etymology (use etymonline.com)

**Step 3: Restructure Content**
- Rewrite with English as primary
- Add Chinese as `translation` field
- Wrap terms in `<VocabularyWord>`
- Add `vocabularies` arrays

**Step 4: Test**
- Check all pronunciations work
- Verify all modals open correctly
- Test on mobile devices
- Review with native English speaker if possible

**Step 5: Document**
- Update module documentation
- Add to key vocabulary list
- Create quiz questions
- Add to flashcards

---

## 📚 Resources 资源

### Pronunciation
- [Cambridge Dictionary](https://dictionary.cambridge.org/)
- [Merriam-Webster](https://www.merriam-webster.com/)
- [Forvo](https://forvo.com/) - Real person pronunciation

### Etymology
- [Etymology Online](https://www.etymonline.com/)
- [Oxford English Dictionary](https://www.oed.com/)

### Medical/Scientific Terms
- [Medical Dictionary](https://www.merriam-webster.com/medical)
- [Biology Online Dictionary](https://www.biologyonline.com/dictionary)

### DSE Biology
- [HKEAA Past Papers](https://www.hkeaa.edu.hk/)
- DSE Biology Textbooks (approved list)

---

## 💬 Style Guide Quick Reference

### Spelling
Use **British English** spelling (to match DSE):
- colour (not color)
- centre (not center)
- organise (not organize)
- haemoglobin (not hemoglobin)

### Numbers
- Spell out one to nine
- Use numerals for 10 and above
- Use numerals with units: 5 cm, 20°C

### Chemical Notation
- Use subscripts: H₂O, CO₂, C₆H₁₂O₆
- Use superscripts for ions: Ca²⁺, Cl⁻, SO₄²⁻
- Bold for first mention in definition

### Punctuation
- Use Oxford comma: "A, B, and C"
- Hyphenate compound adjectives: "well-known fact"
- Em dash without spaces: "Plants—unlike animals—make their own food"

---

## 🎓 Example: Complete Module

See `CONTENT_EXAMPLE.md` for a fully implemented example following all these guidelines.

---

## 📝 Changelog

### Version 1.0.0 (2026-01-11)
- Initial release
- Core principles defined
- Vocabulary template established
- Mnemonic techniques documented
- Quality checklist created

---

## 📧 Questions?

If you have questions about these guidelines, please refer to:
- Example implementations in existing modules
- Component documentation in `src/components/`
- Vocabulary database in `src/data/vocabulary.js`

---

**Remember**: The goal is to help students MASTER English biology terminology, not just memorize Chinese translations. Make it interactive, memorable, and FUN! 🎉
