# Content Example: Water Functions Module
# 内容示例：水的功能模块

This document shows a complete implementation following the Content Guidelines.

---

## 📋 Module Data Structure

```javascript
// src/data/topics.js

const moduleContents = {
  'water-functions': {
    id: 'water-functions',
    title: 'Functions of Water in Organisms',
    titleCn: '水在生物体内的功能',
    language: 'en',
    
    introduction: {
      text: `Water makes up about 60% of the human body and is essential for life. 
             As a **constituent** of **organisms**, water performs multiple vital functions.`,
      translation: '水约占人体的60%，是生命必需的。作为生物体的成分，水执行多种重要功能。',
      vocabularies: ['constituent', 'organism']
    },
    
    sections: [
      {
        id: 'as-reactant',
        type: 'function',
        icon: '⚗️',
        title: 'Water as a Reactant',
        titleCn: '水作为反应物',
        
        content: {
          description: 'Water is a **reactant** in some chemical reactions, meaning it actively participates and gets used up during the reaction.',
          example: {
            title: 'Photosynthesis',
            equation: 'carbon dioxide + water → glucose + oxygen',
            chemical: 'CO₂ + H₂O → C₆H₁₂O₆ + O₂',
            explanation: 'In **photosynthesis**, plants use water along with carbon dioxide to produce **glucose** (food) and **oxygen**. The water molecule is split and its hydrogen atoms are incorporated into glucose.',
            vocabularies: ['reactant', 'photosynthesis', 'glucose', 'oxygen', 'carbon dioxide']
          },
          keyPoint: 'Water is NOT just a solvent here - it\'s an actual ingredient that gets chemically changed!',
          dseNote: 'DSE often asks about photosynthesis equation. Remember: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂'
        }
      },
      
      {
        id: 'as-medium',
        type: 'function',
        icon: '🧪',
        title: 'Water as a Medium for Chemical Reactions',
        titleCn: '水作为化学反应的介质',
        
        content: {
          description: 'Water can dissolve many substances, creating an aqueous medium where chemical reactions can occur.',
          explanation: 'Most biological reactions happen in water because:',
          points: [
            'Water is a universal solvent',
            'Dissolved molecules can move freely and collide',
            'Reactions happen faster in solution'
          ],
          example: {
            title: 'Digestion in Stomach',
            explanation: 'Enzymes dissolve in watery gastric juice and can then reach food molecules to break them down.',
            vocabularies: ['enzyme', 'digestion']
          }
        }
      },
      
      {
        id: 'as-transport',
        type: 'function',
        icon: '🚚',
        title: 'Water as a Medium of Transport',
        titleCn: '水作为运输介质',
        
        content: {
          description: 'Many substances are transported in organisms by water.',
          examples: [
            {
              organism: 'Plants',
              system: 'Xylem vessels',
              what: '**Inorganic** ions dissolve in water',
              how: 'Carried from roots to other parts',
              vocabularies: ['inorganic', 'ion']
            },
            {
              organism: 'Animals',
              system: 'Blood plasma',
              what: 'Nutrients, hormones, waste products',
              how: 'Dissolved or suspended in water-based blood',
              vocabularies: ['nutrient', 'hormone']
            }
          ]
        }
      },
      
      {
        id: 'as-coolant',
        type: 'function',
        icon: '❄️',
        title: 'Water as a Cooling Agent',
        titleCn: '水作为冷却剂',
        
        content: {
          description: 'Water removes heat when it **evaporates** from the body of organisms.',
          scienceConcept: {
            title: 'High Heat of Vaporization',
            explanation: 'Water requires a lot of energy to evaporate. When it evaporates from your skin, it takes that heat energy with it, cooling you down.'
          },
          example: {
            title: 'Sweating in Humans',
            process: [
              'Body temperature rises (e.g., during exercise)',
              'Sweat glands produce sweat (mostly water)',
              'Sweat evaporates from skin surface',
              'Heat energy is removed',
              'Body cools down'
            ],
            vocabularies: ['evaporation', 'sweat']
          },
          dseNote: 'Exam tip: Explain that evaporation REMOVES heat energy, not just "water leaves body".'
        }
      },
      
      {
        id: 'provides-support',
        type: 'function',
        icon: '🏗️',
        title: 'Water Provides Support',
        titleCn: '水提供支撑',
        
        content: {
          description: 'Water gives shape and provides support to organisms, especially plants.',
          plantExample: {
            title: 'Turgor Pressure in Plant Cells',
            explanation: 'When plant cells are full of water, they become **turgid** (swollen and firm). The large central **vacuole** fills with water, creating **turgor** pressure against the cell wall.',
            result: 'Turgid cells press against each other, giving support to seedlings so they can stand upright.',
            vocabularies: ['turgid', 'vacuole', 'turgor', 'cell wall']
          },
          comparison: {
            title: 'What happens without water?',
            wellWatered: 'Plant stands upright and firm',
            lackingWater: 'Plant wilts and droops',
            term: '**Plasmolysis** - cell loses water and shrinks',
            vocabularies: ['plasmolysis']
          },
          dseNote: 'Draw and label diagrams showing turgid vs plasmolysed cells.'
        }
      },
      
      {
        id: 'as-lubricant',
        type: 'function',
        icon: '🛢️',
        title: 'Water as a Component of Lubricant',
        titleCn: '水作为润滑剂成分',
        
        content: {
          description: 'Water is the major component of many lubricating fluids in organisms, reducing friction during movement.',
          examples: [
            {
              location: 'Pleural fluid around lungs',
              function: 'Reduces friction during breathing',
              importance: 'Lungs expand and contract smoothly',
              vocabularies: ['pleural', 'friction']
            },
            {
              location: 'Synovial fluid in joints',
              function: 'Lubricates joints',
              importance: 'Bones move smoothly without grinding',
              vocabularies: ['synovial', 'joint']
            },
            {
              location: 'Mucus in digestive system',
              function: 'Allows food to slide smoothly',
              importance: 'Prevents damage to intestinal walls',
              vocabularies: ['mucus', 'intestine']
            }
          ]
        }
      }
    ],
    
    keyVocabulary: [
      'constituent',
      'organism',
      'reactant',
      'photosynthesis',
      'glucose',
      'evaporation',
      'turgor',
      'turgid',
      'vacuole',
      'plasmolysis'
    ],
    
    dseSummary: {
      mustKnow: [
        'All 6 functions of water',
        'Photosynthesis equation',
        'Difference between turgid and plasmolysed',
        'Evaporation removes heat (not just water)'
      ],
      examTips: [
        'Always give specific examples, not just "water is important"',
        'Use correct terminology: turgor, turgid, plasmolysis',
        'Link function to structure (e.g., vacuole → turgor)',
        'Explain HOW water performs each function'
      ],
      commonMistakes: [
        '❌ "Water helps reactions" → ✅ "Water is a reactant/medium"',
        '❌ "Plants need water to stand" → ✅ "Water creates turgor pressure"',
        '❌ "Sweating cools you" → ✅ "Evaporation of sweat removes heat energy"'
      ]
    }
  }
}
```

---

## 🎨 JSX Implementation

```jsx
// src/pages/WaterFunctionsPage.jsx

import VocabularyWord from '../components/VocabularyWord'
import { VocabularyList } from '../components/VocabularyWord'
import { moduleContents } from '../data/topics'

function WaterFunctionsPage() {
  const module = moduleContents['water-functions']
  
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Title */}
      <h1 className="font-display font-bold text-4xl text-bio-light mb-2">
        {module.title}
      </h1>
      <p className="text-bio-light/60 text-lg mb-8">{module.titleCn}</p>
      
      {/* Introduction */}
      <div className="card-bio mb-8">
        <p className="text-bio-light/80 leading-relaxed mb-4">
          <VocabularyWord word="constituent" /> makes up about 60% of the human 
          body and is essential for life. As a constituent of <VocabularyWord word="organism" />, 
          water performs multiple vital functions.
        </p>
        <div className="text-bio-light/50 text-sm p-3 bg-bio-dark/30 rounded-lg">
          {module.introduction.translation}
        </div>
      </div>
      
      {/* Function 1: As a Reactant */}
      <div className="card-bio mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">⚗️</span>
          <div>
            <h2 className="font-display font-bold text-2xl text-bio-light">
              Water as a <VocabularyWord word="reactant" />
            </h2>
            <p className="text-bio-light/60">水作为反应物</p>
          </div>
        </div>
        
        <p className="text-bio-light/80 mb-4">
          Water is a <VocabularyWord word="reactant" /> in some chemical reactions, 
          meaning it actively participates and gets used up during the reaction.
        </p>
        
        {/* Example */}
        <div className="bg-bio-secondary/10 rounded-xl p-4 border-l-4 border-bio-accent">
          <h3 className="font-bold text-bio-accent mb-2">
            Example: <VocabularyWord word="photosynthesis" />
          </h3>
          
          <div className="mb-3">
            <p className="text-sm text-bio-light/60 mb-1">Word Equation:</p>
            <p className="text-bio-light font-mono bg-bio-dark/40 p-2 rounded">
              carbon dioxide + water → <VocabularyWord word="glucose" /> + <VocabularyWord word="oxygen" />
            </p>
          </div>
          
          <div className="mb-3">
            <p className="text-sm text-bio-light/60 mb-1">Chemical Equation:</p>
            <p className="text-bio-light font-mono bg-bio-dark/40 p-2 rounded">
              6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
            </p>
          </div>
          
          <p className="text-bio-light/80 text-sm">
            In photosynthesis, plants use water along with carbon dioxide to produce 
            glucose (food) and oxygen. The water molecule is split and its hydrogen 
            atoms are incorporated into glucose.
          </p>
        </div>
        
        {/* Key Point */}
        <div className="mt-4 p-3 bg-bio-accent/10 rounded-lg border border-bio-accent/30">
          <p className="text-bio-light font-medium text-sm">
            💡 <strong>Key Point:</strong> Water is NOT just a solvent here - 
            it's an actual ingredient that gets chemically changed!
          </p>
        </div>
        
        {/* DSE Note */}
        <div className="mt-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
          <p className="text-yellow-200/80 text-sm">
            📝 <strong>DSE Exam:</strong> Often asks about photosynthesis equation. 
            Remember: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
          </p>
        </div>
      </div>
      
      {/* Function 2: As Cooling Agent (showing turgor example) */}
      <div className="card-bio mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🏗️</span>
          <div>
            <h2 className="font-display font-bold text-2xl text-bio-light">
              Water Provides Support
            </h2>
            <p className="text-bio-light/60">水提供支撑</p>
          </div>
        </div>
        
        <p className="text-bio-light/80 mb-4">
          Water gives shape and provides support to organisms, especially plants.
        </p>
        
        {/* Turgor Pressure Explanation */}
        <div className="bg-bio-dark/30 rounded-xl p-4 mb-4">
          <h3 className="font-bold text-bio-accent mb-3">
            <VocabularyWord word="turgor" /> Pressure in Plant Cells
          </h3>
          
          <p className="text-bio-light/80 mb-3">
            When plant cells are full of water, they become <VocabularyWord word="turgid" /> 
            (swollen and firm). The large central <VocabularyWord word="vacuole" /> fills 
            with water, creating turgor pressure against the <VocabularyWord word="cell wall" />.
          </p>
          
          <div className="flex items-center gap-2 p-3 bg-bio-accent/10 rounded-lg">
            <span className="text-2xl">➡️</span>
            <p className="text-bio-light text-sm">
              <VocabularyWord word="turgid" /> cells press against each other, 
              giving support to seedlings so they can stand upright.
            </p>
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-bio-accent/20">
                <th className="text-left py-2 text-bio-accent">Condition</th>
                <th className="text-left py-2 text-bio-accent">Cell State</th>
                <th className="text-left py-2 text-bio-accent">Plant Appearance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-bio-accent/10">
                <td className="py-3 text-bio-light">💧 Well-watered</td>
                <td className="py-3 text-bio-light">
                  <VocabularyWord word="turgid" /> (firm)
                </td>
                <td className="py-3 text-green-400">Upright and healthy ✓</td>
              </tr>
              <tr>
                <td className="py-3 text-bio-light">🏜️ Lacking water</td>
                <td className="py-3 text-bio-light">
                  <VocabularyWord word="plasmolysis" /> (shrunk)
                </td>
                <td className="py-3 text-red-400">Wilted and drooping ✗</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* DSE Note */}
        <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
          <p className="text-yellow-200/80 text-sm">
            📝 <strong>DSE Exam:</strong> Draw and label diagrams showing 
            turgid vs plasmolysed cells. Show water movement with arrows.
          </p>
        </div>
      </div>
      
      {/* Key Vocabulary Section */}
      <div className="card-bio mb-8">
        <h2 className="font-display font-bold text-2xl text-bio-light mb-4 flex items-center gap-2">
          🔑 Key Vocabulary for This Module
        </h2>
        <p className="text-bio-light/60 mb-6">
          Click any word to see pronunciation, etymology, and memory tips!
        </p>
        <VocabularyList 
          words={module.keyVocabulary}
          columns={2}
        />
      </div>
      
      {/* DSE Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Must Know */}
        <div className="card-bio bg-gradient-to-br from-bio-secondary/20 to-bio-primary/20">
          <h3 className="font-display font-bold text-bio-accent mb-3">
            ✅ Must Know
          </h3>
          <ul className="space-y-2 text-sm text-bio-light/80">
            {module.dseSummary.mustKnow.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-bio-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Exam Tips */}
        <div className="card-bio bg-gradient-to-br from-yellow-900/20 to-yellow-800/20">
          <h3 className="font-display font-bold text-yellow-400 mb-3">
            💡 Exam Tips
          </h3>
          <ul className="space-y-2 text-sm text-bio-light/80">
            {module.dseSummary.examTips.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Common Mistakes */}
        <div className="card-bio bg-gradient-to-br from-red-900/20 to-red-800/20">
          <h3 className="font-display font-bold text-red-400 mb-3">
            ⚠️ Common Mistakes
          </h3>
          <ul className="space-y-2 text-xs text-bio-light/80">
            {module.dseSummary.commonMistakes.map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WaterFunctionsPage
```

---

## 🎯 Expected User Experience

### Step 1: Reading Content
- Student reads: "Water is a **reactant** in photosynthesis"
- Sees "reactant" is clickable (blue, underlined with dots)
- Hovers over it

**Tooltip appears:**
```
🔊 /riˈæktənt/
反应物
Click for details
```

### Step 2: Clicking for Details
- Student clicks "reactant"
- Modal window opens with:
  - **Large title**: Reactant
  - **Pronunciation button**: 🔊 (can click to hear)
  - **Phonetic**: /riˈæktənt/
  - **Chinese**: 反应物
  - **Difficulty**: EASY
  - **Category**: chemistry

**Definition section:**
> A substance that takes part in and undergoes change during a chemical reaction.

**Word Origin section:**
```
react    = to act in response (Latin: re- + agere)
ant      = suffix indicating agent/substance
────────────────────────────────
react + ant = substance that reacts
```

**Memory Tip (highlighted in green):**
```
💡 Visual Association

RE-ACT-ANT = something that RE-ACTS (responds) in a reaction. 
Imagine ingredients that "act" together to make a cake!

想象一起"行动"做蛋糕的配料！
```

**Examples:**
```
1. In photosynthesis, water is a reactant that combines 
   with carbon dioxide.

2. Reactants are written on the left side of a chemical equation.
```

**Related Words:**
[product] [reaction] [photosynthesis]  ← All clickable

### Step 3: Pronunciation
- Student clicks 🔊 button
- Hears: "ree-AK-tant" (clear, slightly slower than normal speed)
- Can click multiple times to practice

### Step 4: Exploring Related Words
- Student clicks [photosynthesis]
- New modal opens with full entry for photosynthesis
- Sees etymology: photo- (light) + synthesis (putting together)
- Memory tip: "PHOTO-SYNTHESIS = Plants 'photograph' sunshine into sugar!"
- Can click pronunciation to hear: "foh-toh-SIN-thuh-sis"

---

## 📊 Learning Outcomes

After using this module, students will:

1. **Know** all 6 functions of water ✅
2. **Understand** how water performs each function ✅
3. **Remember** key terms through mnemonics ✅
4. **Pronounce** technical words correctly ✅
5. **Apply** knowledge to DSE exam questions ✅
6. **Connect** related concepts through vocabulary links ✅

---

## 🎓 DSE Exam Application

### Sample MCQ
**Question**: Which of the following is NOT a function of water in organisms?

A. As a reactant in photosynthesis  
B. As a cooling agent through evaporation  
C. As a source of energy  ← Correct (water is NOT energy source)  
D. As a medium of transport

**Student's thought process**:
- Knows all 6 functions from module
- Energy comes from glucose, not water
- Confidently selects C

### Sample SAQ
**Question**: Explain how water helps support plant seedlings. (3 marks)

**Student's answer**:
```
When plant cells are full of water, the large central vacuole 
fills up (1 mark). This creates turgor pressure against the 
cell wall, making cells turgid (1 mark). These turgid cells 
press against each other, providing support so the seedling 
can stand upright (1 mark).
```

**Why this scores full marks**:
- Uses correct terminology (vacuole, turgor, turgid) ✅
- Explains mechanism (pressure against cell wall) ✅
- Links to observable outcome (stands upright) ✅

---

This example demonstrates the complete workflow from content creation to student success in DSE exams! 🎉
