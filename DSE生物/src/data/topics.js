// DSE生物學習主題數據
export const topics = [
  {
    id: 'introducing-biology',
    number: 1,
    title: 'Introducing Biology',
    titleCn: '生物學導論',
    description: 'Understand what biology is, the scientific method, and characteristics of living things.',
    descriptionCn: '了解什麼是生物學、科學方法和生物的特徵。',
    icon: '🔬',
    color: '#7ccea0',
    modules: [
      { id: 'what-is-biology', title: 'What is Biology?', titleCn: '什麼是生物學？' },
      { id: 'scientific-method', title: 'Scientific Method', titleCn: '科學方法' },
      { id: 'characteristics-of-life', title: 'Characteristics of Living Things', titleCn: '生物的特徵' },
    ],
    progress: 0,
  },
  {
    id: 'cell-basic-unit',
    number: 2,
    title: 'The Cell as the Basic Unit of Life',
    titleCn: '細胞作為生命的基本單位',
    description: 'Learn about cell discovery, the Cell Theory, microscopes, and chemical constituents of living organisms.',
    descriptionCn: '學習細胞的發現、細胞學說、顯微鏡和生物體的化學成分。',
    icon: '🧫',
    color: '#2d8b6f',
    modules: [
      { id: 'chemicals-of-life', title: 'Chemicals of Life', titleCn: '生命的化學物質' },
      { id: 'discovery-of-cells', title: 'Discovery and Early Studies of Cells', titleCn: '細胞的發現和早期研究' },
      { id: 'microscopes-tools', title: 'Microscopes: Tools for Studying Cells', titleCn: '顯微鏡：研究細胞的工具' },
      { id: 'cell-structure', title: 'Structure of Cells', titleCn: '細胞的結構' },
    ],
    progress: 0,
  },
  {
    id: 'cell-membrane-transport',
    number: 3,
    title: 'Movement of Substances Across Cell Membrane',
    titleCn: '物質穿過細胞膜的運動',
    description: 'Learn about diffusion, osmosis, and active transport mechanisms.',
    descriptionCn: '學習擴散、滲透和主動運輸機制。',
    icon: '🔄',
    color: '#f4a460',
    modules: [
      { id: 'membrane-structure', title: 'Membrane Structure', titleCn: '細胞膜結構' },
      { id: 'diffusion', title: 'Diffusion', titleCn: '擴散作用' },
      { id: 'osmosis', title: 'Osmosis', titleCn: '滲透作用' },
      { id: 'active-transport', title: 'Active Transport', titleCn: '主動運輸' },
    ],
    progress: 0,
  },
  {
    id: 'enzymes-metabolism',
    number: 4,
    title: 'Enzymes and Metabolism',
    titleCn: '酶和新陳代謝',
    description: 'Understand how enzymes work and their role in metabolism.',
    descriptionCn: '了解酶的工作原理及其在新陳代謝中的作用。',
    icon: '⚗️',
    color: '#dc143c',
    modules: [
      { id: 'what-are-enzymes', title: 'What are Enzymes?', titleCn: '什麼是酶？' },
      { id: 'enzyme-action', title: 'Enzyme Action', titleCn: '酶的作用' },
      { id: 'factors-affecting', title: 'Factors Affecting Enzyme Activity', titleCn: '影響酶活性的因素' },
      { id: 'metabolism', title: 'Metabolism', titleCn: '新陳代謝' },
    ],
    progress: 0,
  },
  {
    id: 'food-and-humans',
    number: 5,
    title: 'Food and Humans',
    titleCn: '食物與人類',
    description: 'Study nutrients, balanced diet, and food testing.',
    descriptionCn: '學習營養素、均衡飲食和食物測試。',
    icon: '🍎',
    color: '#ff6b6b',
    modules: [
      { id: 'nutrients', title: 'Nutrients', titleCn: '營養素' },
      { id: 'balanced-diet', title: 'Balanced Diet', titleCn: '均衡飲食' },
      { id: 'food-tests', title: 'Food Tests', titleCn: '食物測試' },
    ],
    progress: 0,
  },
  {
    id: 'nutrition-in-humans',
    number: 6,
    title: 'Nutrition in Humans',
    titleCn: '人類的營養',
    description: 'Learn about the digestive system and nutrient absorption.',
    descriptionCn: '學習消化系統和營養吸收。',
    icon: '🫀',
    color: '#9b59b6',
    modules: [
      { id: 'digestive-system', title: 'Digestive System', titleCn: '消化系統' },
      { id: 'digestion-process', title: 'Digestion Process', titleCn: '消化過程' },
      { id: 'absorption', title: 'Absorption', titleCn: '吸收作用' },
    ],
    progress: 0,
  },
]

// 細胞器數據
export const organelles = {
  animal: [
    {
      id: 'nucleus',
      name: 'Nucleus',
      nameCn: '細胞核',
      description: 'Contains genetic material (DNA) and controls cell activities.',
      descriptionCn: '包含遺傳物質（DNA）並控制細胞活動。',
      color: '#8b4513',
      position: [0, 0, 0],
      size: 0.8,
    },
    {
      id: 'cell-membrane',
      name: 'Cell Membrane',
      nameCn: '細胞膜',
      description: 'Controls what enters and leaves the cell.',
      descriptionCn: '控制物質進出細胞。',
      color: '#f4a460',
      position: [0, 0, 0],
      size: 2.5,
    },
    {
      id: 'cytoplasm',
      name: 'Cytoplasm',
      nameCn: '細胞質',
      description: 'Jelly-like substance where chemical reactions occur.',
      descriptionCn: '發生化學反應的凝膠狀物質。',
      color: '#ffefd5',
      position: [0, 0, 0],
      size: 2.3,
    },
    {
      id: 'mitochondria',
      name: 'Mitochondria',
      nameCn: '線粒體',
      description: 'The powerhouse of the cell - produces energy through respiration.',
      descriptionCn: '細胞的能量工廠 - 通過呼吸作用產生能量。',
      color: '#dc143c',
      position: [1.2, 0.5, 0.3],
      size: 0.3,
    },
    {
      id: 'ribosome',
      name: 'Ribosome',
      nameCn: '核糖體',
      description: 'Site of protein synthesis.',
      descriptionCn: '蛋白質合成的場所。',
      color: '#4a4a4a',
      position: [-0.8, 0.8, 0.5],
      size: 0.1,
    },
    {
      id: 'endoplasmic-reticulum',
      name: 'Endoplasmic Reticulum',
      nameCn: '內質網',
      description: 'Network for transporting materials within the cell.',
      descriptionCn: '細胞內運輸物質的網絡。',
      color: '#daa520',
      position: [0.5, -0.3, 0.4],
      size: 0.4,
    },
    {
      id: 'golgi-apparatus',
      name: 'Golgi Apparatus',
      nameCn: '高爾基體',
      description: 'Modifies, packages, and secretes proteins.',
      descriptionCn: '修飾、包裝和分泌蛋白質。',
      color: '#9370db',
      position: [-1.0, -0.5, 0.2],
      size: 0.35,
    },
    {
      id: 'lysosome',
      name: 'Lysosome',
      nameCn: '溶酶體',
      description: 'Contains digestive enzymes to break down waste.',
      descriptionCn: '含有消化酶以分解廢物。',
      color: '#20b2aa',
      position: [0.8, -0.8, -0.3],
      size: 0.2,
    },
  ],
  plant: [
    {
      id: 'nucleus',
      name: 'Nucleus',
      nameCn: '細胞核',
      description: 'Contains genetic material (DNA) and controls cell activities.',
      descriptionCn: '包含遺傳物質（DNA）並控制細胞活動。',
      color: '#8b4513',
      position: [0, 0.3, 0],
      size: 0.7,
    },
    {
      id: 'cell-wall',
      name: 'Cell Wall',
      nameCn: '細胞壁',
      description: 'Rigid outer layer made of cellulose, provides support and protection.',
      descriptionCn: '由纖維素組成的堅硬外層，提供支撐和保護。',
      color: '#8fbc8f',
      position: [0, 0, 0],
      size: 2.7,
    },
    {
      id: 'cell-membrane',
      name: 'Cell Membrane',
      nameCn: '細胞膜',
      description: 'Controls what enters and leaves the cell.',
      descriptionCn: '控制物質進出細胞。',
      color: '#f4a460',
      position: [0, 0, 0],
      size: 2.5,
    },
    {
      id: 'cytoplasm',
      name: 'Cytoplasm',
      nameCn: '細胞質',
      description: 'Jelly-like substance where chemical reactions occur.',
      descriptionCn: '發生化學反應的凝膠狀物質。',
      color: '#ffefd5',
      position: [0, 0, 0],
      size: 2.3,
    },
    {
      id: 'chloroplast',
      name: 'Chloroplast',
      nameCn: '葉綠體',
      description: 'Contains chlorophyll for photosynthesis.',
      descriptionCn: '含有葉綠素進行光合作用。',
      color: '#228b22',
      position: [0.8, 0.8, 0.3],
      size: 0.4,
    },
    {
      id: 'vacuole',
      name: 'Central Vacuole',
      nameCn: '中央液泡',
      description: 'Large, fluid-filled space that stores water and maintains turgor pressure.',
      descriptionCn: '大型充滿液體的空間，儲存水分並維持膨壓。',
      color: '#87ceeb',
      position: [0, -0.4, 0],
      size: 1.2,
    },
    {
      id: 'mitochondria',
      name: 'Mitochondria',
      nameCn: '線粒體',
      description: 'The powerhouse of the cell - produces energy through respiration.',
      descriptionCn: '細胞的能量工廠 - 通過呼吸作用產生能量。',
      color: '#dc143c',
      position: [-0.9, 0.6, 0.3],
      size: 0.25,
    },
    {
      id: 'ribosome',
      name: 'Ribosome',
      nameCn: '核糖體',
      description: 'Site of protein synthesis.',
      descriptionCn: '蛋白質合成的場所。',
      color: '#4a4a4a',
      position: [0.5, 1.0, 0.5],
      size: 0.08,
    },
  ],
}

// 閃卡數據
export const flashcardDecks = {
  'membrane-transport': {
    id: 'membrane-transport',
    title: 'Membrane Transport',
    titleCn: '膜運輸',
    topicId: 'cell-membrane-transport',
    cards: [
      {
        id: 1,
        front: 'What is diffusion?',
        frontCn: '什麼是擴散？',
        back: 'Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, down the concentration gradient. It is a passive process requiring no energy.',
        backCn: '擴散是粒子從高濃度區域到低濃度區域的淨移動，沿著濃度梯度進行。這是一個不需要能量的被動過程。',
      },
      {
        id: 2,
        front: 'What is osmosis?',
        frontCn: '什麼是滲透？',
        back: 'Osmosis is the movement of water molecules from a region of higher water potential to a region of lower water potential through a partially permeable membrane.',
        backCn: '滲透是水分子通過半透膜從高水勢區域向低水勢區域移動。',
      },
      {
        id: 3,
        front: 'What happens to a plant cell in a hypertonic solution?',
        frontCn: '植物細胞在高滲溶液中會發生什麼？',
        back: 'The cell loses water, the cytoplasm shrinks away from the cell wall. This is called plasmolysis.',
        backCn: '細胞失去水分，細胞質與細胞壁分離。這稱為質壁分離。',
      },
      {
        id: 4,
        front: 'What is active transport?',
        frontCn: '什麼是主動運輸？',
        back: 'Active transport is the movement of substances against the concentration gradient (from low to high concentration), requiring energy (ATP) and carrier proteins.',
        backCn: '主動運輸是物質逆濃度梯度移動（從低濃度到高濃度），需要能量（ATP）和載體蛋白。',
      },
    ],
  },
  'chemicals-of-life': {
    id: 'chemicals-of-life',
    title: 'Chemicals of Life',
    titleCn: '生命的化學物質',
    topicId: 'cell-basic-unit',
    cards: [
      {
        id: 1,
        front: 'What are the two main groups of chemical constituents in organisms?',
        frontCn: '生物體內化學成分的兩大類是什麼？',
        back: '1. Inorganic constituents (water and inorganic ions)\n2. Organic constituents (carbohydrates, lipids, proteins, nucleic acids)',
        backCn: '1. 無機成分（水和無機離子）\n2. 有機成分（碳水化合物、脂質、蛋白質、核酸）'
      },
      {
        id: 2,
        front: 'What percentage of human body weight is water?',
        frontCn: '水佔人體重量的百分比是多少？',
        back: 'About 60% of human body weight. In some organisms like jellyfish, it can be as high as 98%.',
        backCn: '約佔人體重量的60%。在某些生物（如水母）中，可高達98%。'
      },
      {
        id: 3,
        front: 'Name the 6 functions of water in organisms.',
        frontCn: '說出水在生物體內的6個功能。',
        back: '1. As a reactant\n2. As a medium for chemical reactions\n3. As a medium of transport\n4. As a cooling agent\n5. Provides support\n6. As a component of lubricant',
        backCn: '1. 作為反應物\n2. 作為化學反應的介質\n3. 作為運輸介質\n4. 作為冷卻劑\n5. 提供支撐\n6. 作為潤滑劑成分'
      },
      {
        id: 4,
        front: 'How does water act as a cooling agent in humans?',
        frontCn: '水如何在人體內作為冷卻劑？',
        back: 'When body temperature is high, humans produce sweat. Water removes heat when it evaporates from the body surface, helping to cool down the body.',
        backCn: '當體溫升高時，人類會出汗。水從體表蒸發時會帶走熱量，有助於降低體溫。'
      },
      {
        id: 5,
        front: 'What is the function of nitrate (NO₃⁻) in plants?',
        frontCn: '硝酸鹽（NO₃⁻）在植物中的功能是什麼？',
        back: 'Nitrate is a source of nitrogen for the synthesis of proteins in plants.',
        backCn: '硝酸鹽是植物合成蛋白質的氮源。'
      },
      {
        id: 6,
        front: 'What are the functions of magnesium (Mg²⁺) in plants?',
        frontCn: '鎂（Mg²⁺）在植物中的功能是什麼？',
        back: '1. A component of chlorophyll (for photosynthesis)\n2. Activates some enzymes',
        backCn: '1. 葉綠素的成分（用於光合作用）\n2. 激活一些酶'
      },
      {
        id: 7,
        front: 'Why is iron important in animals?',
        frontCn: '為什麼鐵對動物很重要？',
        back: 'Iron is a component of haemoglobin, which is an oxygen-carrying molecule in red blood cells. It also activates some enzymes.',
        backCn: '鐵是血紅蛋白的成分，是紅血球中的攜氧分子。它還能激活一些酶。'
      },
      {
        id: 8,
        front: 'List 3 functions of calcium (Ca²⁺) in animals.',
        frontCn: '列出鈣（Ca²⁺）在動物中的3個功能。',
        back: '1. A component of bones and teeth\n2. Needed for blood clotting\n3. Needed for muscle contraction\n4. Needed for sending messages in the nervous system',
        backCn: '1. 骨骼和牙齒的成分\n2. 血液凝固所需\n3. 肌肉收縮所需\n4. 神經系統信息傳遞所需'
      },
      {
        id: 9,
        front: 'What is the role of phosphate (PO₄³⁻) in organisms?',
        frontCn: '磷酸鹽（PO₄³⁻）在生物體內的作用是什麼？',
        back: 'Component of bones, teeth, phospholipids (cell membranes) and nucleic acids (DNA, RNA)',
        backCn: '骨骼、牙齒、磷脂（細胞膜）和核酸（DNA、RNA）的成分'
      },
      {
        id: 10,
        front: 'How does water provide support to plant seedlings?',
        frontCn: '水如何為植物幼苗提供支撐？',
        back: 'When plant cells are full of water, they become turgid and press against one another. This gives support to seedlings so that they can stand upright.',
        backCn: '當植物細胞充滿水分時，它們變得膨脹並相互擠壓。這為幼苗提供支撐，使它們能夠直立生長。'
      },
      {
        id: 11,
        front: 'Give an example of water acting as a reactant.',
        frontCn: '舉一個水作為反應物的例子。',
        back: 'In photosynthesis: carbon dioxide + water → food (glucose) + oxygen (in the presence of light and chlorophyll)',
        backCn: '在光合作用中：二氧化碳 + 水 → 食物（葡萄糖）+ 氧氣（在光和葉綠素存在下）'
      },
      {
        id: 12,
        front: 'What is an example of water as a lubricant in the human body?',
        frontCn: '人體內水作為潤滑劑的例子是什麼？',
        back: 'Pleural fluid around human lungs. It reduces friction during breathing.',
        backCn: '人類肺部周圍的胸膜液。它在呼吸時減少摩擦。'
      },
      // ========== Organic Constituents Flashcards ==========
      {
        id: 13,
        front: 'What are the four major types of biomolecules?',
        frontCn: '四大類生物分子是什麼？',
        back: '1. Carbohydrates (C, H, O)\n2. Lipids (C, H, O with higher H:O ratio)\n3. Proteins (C, H, O, N, some S)\n4. Nucleic acids (C, H, O, N, P)\n\nThey all contain the element carbon.',
        backCn: '1. 碳水化合物（C, H, O）\n2. 脂質（C, H, O，氫氧比更高）\n3. 蛋白質（C, H, O, N，有些含S）\n4. 核酸（C, H, O, N, P）\n\n它們都含有碳元素。'
      },
      {
        id: 14,
        front: 'Name four common carbohydrates and their functions.',
        frontCn: '列出四種常見的碳水化合物及其功能。',
        back: '• Glucose - main energy source for cells\n• Starch - energy reserve in PLANTS\n• Glycogen - energy reserve in ANIMALS\n• Cellulose - major component of plant cell walls',
        backCn: '• 葡萄糖 - 細胞的主要能量來源\n• 澱粉 - 植物的能量儲備\n• 糖原 - 動物的能量儲備\n• 纖維素 - 植物細胞壁的主要成分'
      },
      {
        id: 15,
        front: 'What is the difference between starch and glycogen?',
        frontCn: '澱粉和糖原有什麼區別？',
        back: 'Both are energy reserves made of glucose chains, but:\n• Starch is found in PLANTS (e.g., potato cells)\n• Glycogen is found in ANIMALS (e.g., liver cells)\n\nBoth are broken down to glucose when energy is needed.',
        backCn: '兩者都是由葡萄糖鏈組成的能量儲備，但：\n• 澱粉存在於植物中（如馬鈴薯細胞）\n• 糖原存在於動物中（如肝細胞）\n\n兩者在需要能量時都會分解為葡萄糖。'
      },
      {
        id: 16,
        front: 'What are the two types of lipids and their functions?',
        frontCn: '脂質的兩種類型及其功能是什麼？',
        back: '1. Triglycerides (fats and oils):\n   • Energy reserve\n   • Insulation (reduce heat loss)\n   • Shock absorber (protect internal organs)\n\n2. Phospholipids:\n   • Major component of cell membranes',
        backCn: '1. 三酸甘油酯（脂肪和油）：\n   • 能量儲備\n   • 絕緣（減少熱量流失）\n   • 減震器（保護內臟）\n\n2. 磷脂：\n   • 細胞膜的主要成分'
      },
      {
        id: 17,
        front: 'Where is fat stored in animals and what are its functions?',
        frontCn: '脂肪在動物體內存儲在哪裡，有什麼功能？',
        back: 'Fat is stored in adipose tissues:\n\na) Under the skin - acts as an insulator to reduce heat loss\n\nb) Around internal organs - acts as a shock absorber to protect the organs',
        backCn: '脂肪儲存在脂肪組織中：\n\na) 皮下 - 作為絕緣體減少熱量流失\n\nb) 內臟周圍 - 作為減震器保護器官'
      },
      {
        id: 18,
        front: 'List the 5 functions of proteins in organisms.',
        frontCn: '列出蛋白質在生物體內的5個功能。',
        back: '1. Make up body tissues (hair, muscles, skin)\n2. Enzymes - regulate chemical reactions\n3. Hormones - regulate body processes\n4. Antibodies - protect body against pathogens\n5. Transport - e.g., haemoglobin carries oxygen',
        backCn: '1. 構成身體組織（頭髮、肌肉、皮膚）\n2. 酶 - 調節化學反應\n3. 激素 - 調節身體過程\n4. 抗體 - 保護身體免受病原體侵害\n5. 運輸 - 如血紅蛋白攜帶氧氣'
      },
      {
        id: 19,
        front: 'What is haemoglobin and what does it do?',
        frontCn: '什麼是血紅蛋白，它有什麼作用？',
        back: 'Haemoglobin is an oxygen-carrying protein found in red blood cells. It contains iron (Fe) and transports oxygen from the lungs to body tissues.',
        backCn: '血紅蛋白是紅血球中的攜氧蛋白。它含有鐵（Fe），將氧氣從肺部運輸到身體組織。'
      },
      {
        id: 20,
        front: 'What is the difference between DNA and RNA?',
        frontCn: 'DNA和RNA有什麼區別？',
        back: 'DNA (Deoxyribonucleic acid):\n• Carries genetic information\n• Double-stranded (double helix)\n• Controls cell activities and determines features\n\nRNA (Ribonucleic acid):\n• Involved in protein synthesis\n• Usually single-stranded\n• Carries instructions from DNA to ribosomes',
        backCn: 'DNA（脫氧核糖核酸）：\n• 攜帶遺傳信息\n• 雙鏈（雙螺旋）\n• 控制細胞活動和決定特徵\n\nRNA（核糖核酸）：\n• 參與蛋白質合成\n• 通常是單鏈\n• 將指令從DNA傳遞到核糖體'
      },
      {
        id: 21,
        front: 'What are antibodies and what do they do?',
        frontCn: '什麼是抗體，它們有什麼作用？',
        back: 'Antibodies are proteins produced by the immune system. They help protect the body against pathogens (viruses, bacteria, and other organisms that cause diseases).',
        backCn: '抗體是免疫系統產生的蛋白質。它們幫助保護身體免受病原體（病毒、細菌和其他引起疾病的生物）的侵害。'
      },
      {
        id: 22,
        front: 'What elements do nucleic acids contain?',
        frontCn: '核酸含有哪些元素？',
        back: 'Nucleic acids contain: Carbon (C), Hydrogen (H), Oxygen (O), Nitrogen (N), and Phosphorus (P).\n\nThis is different from proteins which contain C, H, O, N (and sometimes S, but no P).',
        backCn: '核酸含有：碳（C）、氫（H）、氧（O）、氮（N）和磷（P）。\n\n這與蛋白質不同，蛋白質含有C、H、O、N（有時有S，但沒有P）。'
      }
    ]
  },
  'discovery-of-cells': {
    id: 'discovery-of-cells',
    title: 'Discovery and Early Studies of Cells',
    titleCn: '細胞的發現和早期研究',
    topicId: 'cell-basic-unit',
    cards: [
      {
        id: 1,
        front: 'Who discovered cells and when?',
        frontCn: '誰發現了細胞，什麼時候？',
        back: 'Robert Hooke discovered cells in 1665. He observed a thin slice of cork under his microscope and saw small boxes which he called "cells".',
        backCn: '羅伯特·胡克於1665年發現了細胞。他用顯微鏡觀察一片薄薄的軟木，看到了他稱之為"細胞"的小盒子。'
      },
      {
        id: 2,
        front: 'What did Robert Hooke actually observe when he discovered cells?',
        frontCn: '羅伯特·胡克發現細胞時實際觀察到了什麼？',
        back: 'Robert Hooke actually observed the CELL WALLS of dead cork cells, not living cells. Cork is made of dead plant tissue.',
        backCn: '羅伯特·胡克實際上觀察到的是死亡軟木細胞的細胞壁，而不是活細胞。軟木是由死亡的植物組織組成的。'
      },
      {
        id: 3,
        front: 'What are the three statements of the Cell Theory?',
        frontCn: '細胞學說的三條陳述是什麼？',
        back: '1. All organisms are made up of one or more cells\n2. The cell is the basic unit of life (smallest unit showing all characteristics of life)\n3. All cells come from pre-existing cells',
        backCn: '1. 所有生物體都由一個或多個細胞組成\n2. 細胞是生命的基本單位（顯示所有生命特徵的最小單位）\n3. 所有細胞都來自先前存在的細胞'
      },
      {
        id: 4,
        front: 'Who proposed the Cell Theory and when?',
        frontCn: '誰提出了細胞學說，什麼時候？',
        back: 'Theodor Schwann proposed the Cell Theory in 1839. His work was based on the findings of Matthias Schleiden (plants are made of cells) and his own discovery that animals are also made of cells.',
        backCn: '特奧多爾·施旺於1839年提出了細胞學說。他的工作基於馬蒂亞斯·施萊登的發現（植物由細胞組成）以及他自己發現動物也由細胞組成。'
      },
      {
        id: 5,
        front: 'Who first observed living cells (microorganisms) and when?',
        frontCn: '誰首次觀察到活細胞（微生物），什麼時候？',
        back: 'Antoni van Leeuwenhoek first observed living cells (microorganisms) in pond water in 1674, using his simple single-lens microscope with ~200x magnification.',
        backCn: '安東尼·范·列文虎克於1674年首次在池塘水中觀察到活細胞（微生物），使用他的簡單單透鏡顯微鏡，放大倍數約200倍。'
      },
      {
        id: 6,
        front: 'Who discovered the nucleus and when?',
        frontCn: '誰發現了細胞核，什麼時候？',
        back: 'Robert Brown discovered the nucleus in 1831. He observed nuclei in cells of an orchid leaf.',
        backCn: '羅伯特·布朗於1831年發現了細胞核。他在蘭花葉的細胞中觀察到了細胞核。'
      },
      {
        id: 7,
        front: 'When was the first microscope invented and by whom?',
        frontCn: '第一台顯微鏡是什麼時候發明的，由誰發明？',
        back: 'The first microscope was invented in 1590 by Hans Janssen and his son. It had a magnification of only 3-9 times.',
        backCn: '第一台顯微鏡於1590年由漢斯·詹森和他的兒子發明。它的放大倍數只有3-9倍。'
      },
      {
        id: 8,
        front: 'What is the magnification of a modern light microscope vs electron microscope?',
        frontCn: '現代光學顯微鏡與電子顯微鏡的放大倍數是多少？',
        back: 'Light microscope: ~1600 times\nElectron microscope: ~12,000 times or more\n\nElectron microscopes allowed the discovery of ribosomes in 1950.',
        backCn: '光學顯微鏡：約1600倍\n電子顯微鏡：約12,000倍或更多\n\n電子顯微鏡使1950年發現核糖體成為可能。'
      },
      {
        id: 9,
        front: 'What did Schleiden and Schwann each contribute to the Cell Theory?',
        frontCn: '施萊登和施旺各自對細胞學說的貢獻是什麼？',
        back: 'Matthias Schleiden (1804-81): Discovered that PLANT parts are made up of cells\n\nTheodor Schwann (1810-82): Discovered that ANIMAL parts are made up of cells, and proposed the Cell Theory in 1839',
        backCn: '馬蒂亞斯·施萊登（1804-81）：發現植物部分由細胞組成\n\n特奧多爾·施旺（1810-82）：發現動物部分由細胞組成，並於1839年提出細胞學說'
      },
      {
        id: 10,
        front: 'How did the development of microscopes contribute to our understanding of cells?',
        frontCn: '顯微鏡的發展如何促進我們對細胞的理解？',
        back: 'The development of microscopes led to:\n1. The discovery of cells\n2. The formulation of the Cell Theory\n3. With improved microscopes, more details of cells were observed\n\nKey point: Scientific knowledge advances with improvement in technology!',
        backCn: '顯微鏡的發展導致了：\n1. 細胞的發現\n2. 細胞學說的構想\n3. 隨著顯微鏡的改進，觀察到了細胞的更多細節\n\n關鍵點：科學知識隨著技術的進步而發展！'
      }
    ]
  },
  'microscopes-tools': {
    id: 'microscopes-tools',
    title: 'Microscopes: Tools for Studying Cells',
    titleCn: '顯微鏡：研究細胞的工具',
    topicId: 'cell-basic-unit',
    cards: [
      {
        id: 1,
        front: 'What are the two main types of microscopes used in biology?',
        frontCn: '生物學中使用的兩種主要顯微鏡類型是什麼？',
        back: '1. Light microscope - uses visible light\n2. Electron microscope - uses electron beams\n\nElectron microscopes include TEM and SEM.',
        backCn: '1. 光學顯微鏡 - 使用可見光\n2. 電子顯微鏡 - 使用電子束\n\n電子顯微鏡包括TEM和SEM。'
      },
      {
        id: 2,
        front: 'What is the maximum magnification of a light microscope?',
        frontCn: '光學顯微鏡的最大放大倍數是多少？',
        back: 'Maximum magnification: 1,600 times\n\nAdvantages:\n• Living specimens can be observed\n• Specimens can be prepared easily\n• Produces coloured images',
        backCn: '最大放大倍數：1,600倍\n\n優點：\n• 可以觀察活的標本\n• 標本容易準備\n• 產生彩色圖像'
      },
      {
        id: 3,
        front: 'What does TEM stand for and how does it work?',
        frontCn: 'TEM代表什麼，它是如何工作的？',
        back: 'TEM = Transmission Electron Microscope\n\nWorking principle: Electron beams pass THROUGH a very thin slice of a specimen to form an image.\n\nMemory tip: TEM = "Through Everything Method"',
        backCn: 'TEM = 透射電子顯微鏡\n\n工作原理：電子束穿過標本的非常薄的切片以形成圖像。\n\n記憶提示：TEM = "穿透一切的方法"'
      },
      {
        id: 4,
        front: 'What does SEM stand for and how does it work?',
        frontCn: 'SEM代表什麼，它是如何工作的？',
        back: 'SEM = Scanning Electron Microscope\n\nWorking principle: Electron beams SCAN over the SURFACE of a specimen to form an image.\n\nMemory tip: SEM = "Surface Examination Method"',
        backCn: 'SEM = 掃描電子顯微鏡\n\n工作原理：電子束掃描標本表面以形成圖像。\n\n記憶提示：SEM = "表面檢查方法"'
      },
      {
        id: 5,
        front: 'What is the maximum magnification of TEM vs SEM?',
        frontCn: 'TEM和SEM的最大放大倍數分別是多少？',
        back: 'TEM: up to 1,500,000 times (1.5 million!)\nSEM: up to 200,000 times\n\nBoth are much higher than light microscopes (1,600x)',
        backCn: 'TEM：高達1,500,000倍（150萬！）\nSEM：高達200,000倍\n\n兩者都比光學顯微鏡（1,600倍）高得多'
      },
      {
        id: 6,
        front: 'What type of images does TEM produce?',
        frontCn: 'TEM產生什麼類型的圖像？',
        back: 'TEM produces:\n• Black and white images\n• Two-dimensional (2D) images\n• Shows INTERNAL structures of the specimen\n\nRemember: TEM goes THROUGH → sees INSIDE',
        backCn: 'TEM產生：\n• 黑白圖像\n• 二維（2D）圖像\n• 顯示標本的內部結構\n\n記住：TEM穿透 → 看到內部'
      },
      {
        id: 7,
        front: 'What type of images does SEM produce?',
        frontCn: 'SEM產生什麼類型的圖像？',
        back: 'SEM produces:\n• Black and white images\n• Three-dimensional (3D) images\n• Shows EXTERNAL structures (surface) of the specimen\n\nRemember: SEM scans SURFACE → sees OUTSIDE',
        backCn: 'SEM產生：\n• 黑白圖像\n• 三維（3D）圖像\n• 顯示標本的外部結構（表面）\n\n記住：SEM掃描表面 → 看到外部'
      },
      {
        id: 8,
        front: 'What is "false colour" in electron micrographs?',
        frontCn: '電子顯微照片中的"偽彩色"是什麼？',
        back: 'False colour = colour added to electron micrographs using computer software\n\nWhy? Because electron microscopes produce BLACK AND WHITE images only.\n\nFalse colour helps distinguish different structures more easily.',
        backCn: '偽彩色 = 使用電腦軟件添加到電子顯微照片中的顏色\n\n為什麼？因為電子顯微鏡只能產生黑白圖像。\n\n偽彩色有助於更容易地區分不同的結構。'
      },
      {
        id: 9,
        front: 'What is the difference between magnification and resolution?',
        frontCn: '放大倍數和分辨率有什麼區別？',
        back: 'Magnification = how much BIGGER the image appears\n\nResolution = how much DETAIL you can see clearly (ability to distinguish two close points)\n\nElectron microscopes have BOTH higher magnification AND higher resolution than light microscopes!',
        backCn: '放大倍數 = 圖像看起來大多少\n\n分辨率 = 可以清楚看到多少細節（區分兩個接近點的能力）\n\n電子顯微鏡的放大倍數和分辨率都比光學顯微鏡高！'
      },
      {
        id: 10,
        front: 'What size objects can be seen with each type of microscope?',
        frontCn: '每種顯微鏡可以看到多大的物體？',
        back: 'Naked eye: > 0.1 mm (ants, hair)\n\nLight microscope: 1 μm - 0.1 mm\n(cells, mitochondria)\n\nElectron microscope: 0.1 nm - 1 μm\n(ribosomes, DNA molecules, atoms)\n\nSmaller = need stronger microscope!',
        backCn: '肉眼：> 0.1毫米（螞蟻、頭髮）\n\n光學顯微鏡：1微米 - 0.1毫米\n（細胞、線粒體）\n\n電子顯微鏡：0.1納米 - 1微米\n（核糖體、DNA分子、原子）\n\n越小 = 需要越強的顯微鏡！'
      },
      {
        id: 11,
        front: 'What is a compound microscope and why is it called that?',
        frontCn: '什麼是複式顯微鏡，為什麼這樣稱呼它？',
        back: 'A compound microscope uses TWO sets of lenses:\n1. Eyepiece (at top, where you look)\n2. Objective (at bottom, near specimen)\n\nIt is called "compound" because it COMBINES two lenses.\n\nTotal magnification = Eyepiece × Objective',
        backCn: '複式顯微鏡使用兩組鏡片：\n1. 目鏡（頂部，觀看處）\n2. 物鏡（底部，靠近標本）\n\n它被稱為"複式"是因為它組合了兩個鏡片。\n\n總放大倍數 = 目鏡 × 物鏡'
      },
      {
        id: 12,
        front: 'What is the difference between coarse and fine adjustment knobs?',
        frontCn: '粗調節器和微調節器有什麼區別？',
        back: 'COARSE adjustment knob:\n• Larger knob\n• Large movements\n• For ROUGH focus\n• Use at LOW power only!\n\nFINE adjustment knob:\n• Smaller knob\n• Small, precise movements\n• For SHARP focus\n• Use at HIGH power (only fine!)',
        backCn: '粗調節器：\n• 較大的旋鈕\n• 大幅移動\n• 用於粗略對焦\n• 只在低倍時使用！\n\n微調節器：\n• 較小的旋鈕\n• 小而精確的移動\n• 用於清晰對焦\n• 高倍時使用（只用微調！）'
      },
      {
        id: 13,
        front: 'Why should you always start with low-power magnification?',
        frontCn: '為什麼應該始終從低倍放大開始？',
        back: 'Start with LOW power because:\n1. Wider field of view → easier to LOCATE specimen\n2. Brighter image\n3. Can use coarse adjustment safely\n\nOnce found, move specimen to CENTRE, then switch to high power for more detail.',
        backCn: '從低倍開始的原因：\n1. 較寬視野 → 更容易找到標本\n2. 圖像更亮\n3. 可以安全使用粗調節器\n\n找到後，將標本移到中心，然後切換到高倍以獲得更多細節。'
      },
      {
        id: 14,
        front: 'What happens to the image when you look through a light microscope?',
        frontCn: '當你通過光學顯微鏡觀察時，圖像會發生什麼？',
        back: 'The image is INVERTED (upside down and reversed)!\n\nExample: Letter "p" appears as "d"\n\nThis means:\n• Move slide LEFT → image moves RIGHT\n• Move slide UP → image moves DOWN',
        backCn: '圖像是倒置的（上下顛倒且左右翻轉）！\n\n例如：字母"p"顯示為"d"\n\n這意味著：\n• 向左移動載玻片 → 圖像向右移動\n• 向上移動載玻片 → 圖像向下移動'
      },
      {
        id: 15,
        front: 'How do you calculate total magnification?',
        frontCn: '如何計算總放大倍數？',
        back: 'Total magnification = Eyepiece × Objective\n\nExample:\n• 10X eyepiece × 4X objective = 40X\n• 10X eyepiece × 40X objective = 400X\n\nRemember: MULTIPLY, do not add!',
        backCn: '總放大倍數 = 目鏡 × 物鏡\n\n例如：\n• 10X目鏡 × 4X物鏡 = 40X\n• 10X目鏡 × 40X物鏡 = 400X\n\n記住：是乘法，不是加法！'
      },
      {
        id: 16,
        front: 'How do you calculate the actual size of an object from a micrograph?',
        frontCn: '如何從顯微照片計算物體的實際大小？',
        back: 'Formula:\nMagnification = Image size / Actual size\n\nRearranged:\nActual size = Image size / Magnification\n\nExample:\nImage = 0.6 cm, Magnification = 400X\nActual size = 0.6 cm / 400 = 0.0015 cm = 15 μm',
        backCn: '公式：\n放大倍數 = 圖像大小 / 實際大小\n\n重新排列：\n實際大小 = 圖像大小 / 放大倍數\n\n例如：\n圖像 = 0.6厘米，放大倍數 = 400X\n實際大小 = 0.6厘米 / 400 = 0.0015厘米 = 15微米'
      },
      {
        id: 17,
        front: 'What are the differences between low-power and high-power magnification?',
        frontCn: '低倍放大和高倍放大有什麼區別？',
        back: '| Feature | Low-power | High-power |\n|---------|-----------|------------|\n| Area observed | LARGER (more cells) | SMALLER (fewer cells) |\n| Details | LESS | MORE |\n| Brightness | BRIGHTER | DIMMER |\n\nRemember: High power = more detail but smaller area!',
        backCn: '| 特徵 | 低倍 | 高倍 |\n|---------|-----------|------------|\n| 觀察面積 | 較大（更多細胞）| 較小（較少細胞）|\n| 細節 | 較少 | 較多 |\n| 亮度 | 較亮 | 較暗 |\n\n記住：高倍 = 更多細節但面積更小！'
      },
      {
        id: 18,
        front: 'What is the function of the diaphragm?',
        frontCn: '光圈的功能是什麼？',
        back: 'The DIAPHRAGM controls the amount of light shone onto the specimen.\n\n• Open more → more light → brighter image\n• Close more → less light → dimmer image\n\nAdjust it for optimal brightness, especially when switching between low and high power.',
        backCn: '光圈控制照射到標本上的光量。\n\n• 開大 → 更多光 → 更亮的圖像\n• 關小 → 更少光 → 更暗的圖像\n\n調節它以獲得最佳亮度，特別是在低倍和高倍之間切換時。'
      },
      {
        id: 19,
        front: 'Name the 12 parts of a compound microscope.',
        frontCn: '說出複式顯微鏡的12個部件名稱。',
        back: 'Optical: 1. Eyepiece, 2. Body tube, 3. Nosepiece, 4. Objective\n\nIllumination: 5. Condenser, 6. Diaphragm, 7. Light source\n\nStructure: 8. Arm, 9. Stage, 10. Base\n\nFocusing: 11. Coarse adjustment knob, 12. Fine adjustment knob',
        backCn: '光學部件：1. 目鏡，2. 鏡筒，3. 物鏡轉換器，4. 物鏡\n\n照明部件：5. 聚光器，6. 光圈，7. 光源\n\n結構部件：8. 鏡臂，9. 載物台，10. 底座\n\n對焦部件：11. 粗調節器，12. 微調節器'
      },
      {
        id: 20,
        front: 'What should you NEVER do when using a high-power objective?',
        frontCn: '使用高倍物鏡時絕對不能做什麼？',
        back: 'NEVER use the COARSE adjustment knob when using a high-power objective!\n\nWhy? The objective is very close to the slide. Large movements could:\n• Damage the slide\n• Damage the objective lens\n\nOnly use the FINE adjustment knob at high power!',
        backCn: '使用高倍物鏡時絕對不要使用粗調節器！\n\n為什麼？物鏡非常接近載玻片。大幅移動可能會：\n• 損壞載玻片\n• 損壞物鏡\n\n高倍時只使用微調節器！'
      }
    ]
  },
  'cell-structure': {
    id: 'cell-structure',
    title: 'Structure of Cells',
    titleCn: '細胞的結構',
    topicId: 'cell-basic-unit',
    cards: [
      {
        id: 1,
        front: 'What is the function of the nucleus?',
        frontCn: '細胞核的功能是什麼？',
        back: 'The nucleus:\n• Contains DNA (genetic material)\n• Controls all cell activities\n• Is bounded by a double membrane (nuclear membrane) with pores\n• Contains nucleolus which makes ribosomes',
        backCn: '細胞核：\n• 含有DNA（遺傳物質）\n• 控制所有細胞活動\n• 由帶有核孔的雙層膜（核膜）包圍\n• 含有製造核糖體的核仁'
      },
      {
        id: 2,
        front: 'What is cytoplasm and what are its functions?',
        frontCn: '什麼是細胞質，它的功能是什麼？',
        back: 'Cytoplasm is a jelly-like fluid (mainly water and proteins) that:\n• Holds many organelles\n• Is the site for many chemical reactions\n• Allows movement and transport of materials inside the cell',
        backCn: '細胞質是一種果凍狀液體（主要是水和蛋白質），它：\n• 容納許多細胞器\n• 是許多化學反應的場所\n• 允許物質在細胞內移動和運輸'
      },
      {
        id: 3,
        front: 'What is the difference between differentially permeable and fully permeable?',
        frontCn: '差異透性和全透性有什麼區別？',
        back: 'DIFFERENTIALLY PERMEABLE (cell membrane):\n• Only allows CERTAIN substances to pass through\n• Controls what enters/exits the cell\n\nFULLY PERMEABLE (cell wall):\n• Allows ALL dissolved substances to pass through freely\n• No control over what passes',
        backCn: '差異透性（細胞膜）：\n• 只允許某些物質通過\n• 控制進出細胞的物質\n\n全透性（細胞壁）：\n• 允許所有溶解物質自由通過\n• 不控制通過的物質'
      },
      {
        id: 4,
        front: 'What is the cell wall made of and what are its functions?',
        frontCn: '細胞壁由什麼組成，它的功能是什麼？',
        back: 'Cell wall:\n• Made mainly of CELLULOSE\n• Found ONLY in plant cells (NOT in animal cells)\n• Functions: Protects, supports, and gives shape to the plant cell\n• Is FULLY PERMEABLE (allows everything through)',
        backCn: '細胞壁：\n• 主要由纖維素組成\n• 只存在於植物細胞（動物細胞沒有）\n• 功能：保護、支撐、賦予植物細胞形狀\n• 是全透性的（允許所有東西通過）'
      },
      {
        id: 5,
        front: 'What is the difference between rough ER and smooth ER?',
        frontCn: '粗糙內質網和光滑內質網有什麼區別？',
        back: 'ROUGH ER:\n• Has ribosomes attached (bumpy surface)\n• Function: Synthesis of PROTEINS\n• Abundant in cells making proteins (e.g., pancreatic cells)\n\nSMOOTH ER:\n• No ribosomes (smooth surface)\n• Function: Synthesis of LIPIDS\n• Abundant in cells making lipids (e.g., cells in testes)',
        backCn: '粗糙內質網：\n• 有核糖體附著（表面粗糙）\n• 功能：合成蛋白質\n• 在產生蛋白質的細胞中豐富（如胰腺細胞）\n\n光滑內質網：\n• 無核糖體（表面光滑）\n• 功能：合成脂類\n• 在產生脂類的細胞中豐富（如睾丸細胞）'
      },
      {
        id: 6,
        front: 'What are ribosomes and what do they do?',
        frontCn: '什麼是核糖體，它們有什麼作用？',
        back: 'Ribosomes:\n• Small particles NOT surrounded by a membrane\n• Location: Some attached to rough ER, others free in cytoplasm\n• Function: Involved in the synthesis of PROTEINS\n\nRemember: Ribosomes are the protein factories of the cell!',
        backCn: '核糖體：\n• 沒有膜包圍的小顆粒\n• 位置：一些附著在粗糙內質網上，其他自由漂浮在細胞質中\n• 功能：參與蛋白質合成\n\n記住：核糖體是細胞的蛋白質工廠！'
      },
      {
        id: 7,
        front: 'What is the structure and function of mitochondria?',
        frontCn: '線粒體的結構和功能是什麼？',
        back: 'Structure:\n• Bounded by a DOUBLE membrane\n• Inner membrane is highly folded into CRISTAE\n• Folds increase surface area\n\nFunction:\n• Main site of RESPIRATION\n• Converts chemical energy in food into energy (ATP) the cell can use\n• More mitochondria = cell needs more energy',
        backCn: '結構：\n• 由雙層膜包圍\n• 內膜高度折疊形成嵴\n• 褶皺增加表面積\n\n功能：\n• 呼吸作用的主要場所\n• 將食物中的化學能轉化為細胞可用的能量（ATP）\n• 線粒體越多 = 細胞需要更多能量'
      },
      {
        id: 8,
        front: 'Which cells have many mitochondria and why?',
        frontCn: '哪些細胞有很多線粒體，為什麼？',
        back: 'Cells with MANY mitochondria need lots of ENERGY:\n\n• Muscle cells → for contraction\n• Liver cells → for high metabolic activity\n• Epithelial cells (small intestine) → for absorbing nutrients\n• Root hair cells → for absorbing minerals\n• Enzyme-secreting cells → for synthesizing enzymes',
        backCn: '擁有很多線粒體的細胞需要大量能量：\n\n• 肌肉細胞 → 用於收縮\n• 肝細胞 → 用於高水平的代謝活動\n• 上皮細胞（小腸）→ 用於吸收營養\n• 根毛細胞 → 用於吸收礦物質\n• 分泌酶的細胞 → 用於合成酶'
      },
      {
        id: 9,
        front: 'What is the structure and function of chloroplasts?',
        frontCn: '葉綠體的結構和功能是什麼？',
        back: 'Structure:\n• Bounded by a DOUBLE membrane\n• Contains network of internal membranes\n• Contains CHLOROPHYLL (green pigment)\n• May contain STARCH GRAINS\n\nFunction:\n• Site of PHOTOSYNTHESIS\n• Chlorophyll captures light energy and converts it to chemical energy (glucose)\n\nNote: Only in GREEN plant cells!',
        backCn: '結構：\n• 由雙層膜包圍\n• 含有內部膜網絡\n• 含有葉綠素（綠色色素）\n• 可能含有澱粉粒\n\n功能：\n• 光合作用的場所\n• 葉綠素捕獲光能並將其轉化為化學能（葡萄糖）\n\n注意：只存在於綠色植物細胞中！'
      },
      {
        id: 10,
        front: 'How do vacuoles differ in animal and plant cells?',
        frontCn: '動物細胞和植物細胞的液泡有什麼不同？',
        back: 'ANIMAL cells:\n• Few SMALL vacuoles (or none)\n• May contain water, enzymes, food\n\nPLANT cells:\n• Usually have a LARGE CENTRAL VACUOLE\n• Contains CELL SAP (water + dissolved substances)\n• When full of water → cell becomes TURGID\n• Provides SUPPORT to the plant',
        backCn: '動物細胞：\n• 少數小液泡（或沒有）\n• 可能含有水、酶、食物\n\n植物細胞：\n• 通常有一個大型中央液泡\n• 含有細胞液（水+溶解物質）\n• 充滿水時 → 細胞變得膨脹\n• 為植物提供支撐'
      },
      {
        id: 11,
        front: 'What structures are found ONLY in plant cells?',
        frontCn: '哪些結構只存在於植物細胞中？',
        back: 'Structures found ONLY in plant cells:\n\n1. CELL WALL - made of cellulose, protects and supports\n\n2. CHLOROPLAST - contains chlorophyll for photosynthesis (only in green plant cells)\n\n3. LARGE CENTRAL VACUOLE - stores cell sap, provides turgidity',
        backCn: '只存在於植物細胞中的結構：\n\n1. 細胞壁 - 由纖維素製成，保護和支撐\n\n2. 葉綠體 - 含有葉綠素用於光合作用（只在綠色植物細胞中）\n\n3. 大型中央液泡 - 儲存細胞液，提供膨壓'
      },
      {
        id: 12,
        front: 'What is the nuclear membrane and what are nuclear pores?',
        frontCn: '什麼是核膜和核孔？',
        back: 'NUCLEAR MEMBRANE:\n• A DOUBLE membrane surrounding the nucleus\n• Separates nuclear contents from cytoplasm\n\nNUCLEAR PORES:\n• Small openings in the nuclear membrane\n• Allow exchange of materials (e.g., mRNA exits to cytoplasm)\n• Control what enters and leaves the nucleus',
        backCn: '核膜：\n• 包圍細胞核的雙層膜\n• 將核內物質與細胞質分開\n\n核孔：\n• 核膜上的小開口\n• 允許物質交換（如mRNA離開到細胞質）\n• 控制進出細胞核的物質'
      },
      {
        id: 13,
        front: 'What is the nucleolus?',
        frontCn: '什麼是核仁？',
        back: 'The NUCLEOLUS is:\n• A dense, spherical structure INSIDE the nucleus\n• Function: Involved in making RIBOSOMES\n• A nucleus may contain one or more nucleoli\n• Disappears during cell division',
        backCn: '核仁是：\n• 細胞核內的致密球形結構\n• 功能：參與製造核糖體\n• 一個細胞核可能含有一個或多個核仁\n• 在細胞分裂時消失'
      },
      {
        id: 14,
        front: 'What are the 5 rules for drawing good biological diagrams?',
        frontCn: '繪製好的生物圖的5個規則是什麼？',
        back: '5 Rules for biological diagrams:\n\n1. Use a sharp HB PENCIL\n2. Draw only a FEW representative cells\n3. Drawing should RESEMBLE specimen (in proportion)\n4. Use STRAIGHT label lines (NO arrows)\n5. Include TITLE and MAGNIFICATION\n\nDo NOT: shade, let labels cross, use arrows',
        backCn: '生物圖的5個規則：\n\n1. 使用尖銳的HB鉛筆\n2. 只畫少數代表性細胞\n3. 圖應該與標本相似（成比例）\n4. 使用直的標注線（不用箭頭）\n5. 包含標題和放大倍數\n\n不要：涂陰影、讓標注交叉、使用箭頭'
      },
      {
        id: 15,
        front: 'What stain is used for animal cells and plant cells?',
        frontCn: '動物細胞和植物細胞分別用什麼染色劑？',
        back: 'ANIMAL CELLS:\n• Methylene blue (makes nucleus visible)\n• Caution: Can cause haemolysis in G6PD deficiency\n\nPLANT CELLS:\n• Iodine solution (stains cell wall yellow-brown)\n• Also tests for starch (turns blue-black)\n• Caution: Is an irritant',
        backCn: '動物細胞：\n• 亞甲藍（使細胞核可見）\n• 注意：可能在G6PD缺乏症患者中引起溶血\n\n植物細胞：\n• 碘液（將細胞壁染成黃棕色）\n• 也可測試澱粉（變藍黑色）\n• 注意：是刺激物'
      },
      {
        id: 16,
        front: 'What is turgidity and why is it important?',
        frontCn: '什麼是膨壓，為什麼它很重要？',
        back: 'TURGIDITY:\n• The state of being swollen/firm due to water inside\n• Happens when vacuole is full of water\n• Water pushes against cell wall → cell becomes TURGID\n\nImportance:\n• Provides SUPPORT to non-woody plants\n• Keeps plants standing upright\n• Loss of turgidity = wilting',
        backCn: '膨壓：\n• 由於內部水分而膨脹/堅實的狀態\n• 當液泡充滿水時發生\n• 水推擠細胞壁 → 細胞變得膨脹\n\n重要性：\n• 為非木本植物提供支撐\n• 使植物保持直立\n• 失去膨壓 = 萎蔫'
      },
      {
        id: 17,
        front: 'What are cristae and why are they important?',
        frontCn: '什麼是嵴，為什麼它們很重要？',
        back: 'CRISTAE are:\n• Folds of the INNER membrane of mitochondria\n• Look like "wavy ridges" inside\n\nImportance:\n• INCREASE SURFACE AREA for respiration\n• More surface area = more ATP can be produced\n• Active cells have mitochondria with MORE cristae',
        backCn: '嵴是：\n• 線粒體內膜的褶皺\n• 看起來像內部的"波浪狀脊"\n\n重要性：\n• 增加呼吸作用的表面積\n• 更多表面積 = 可以產生更多ATP\n• 活躍的細胞有更多嵴的線粒體'
      },
      {
        id: 18,
        front: 'Which plant cells do NOT have chloroplasts?',
        frontCn: '哪些植物細胞沒有葉綠體？',
        back: 'Plant cells WITHOUT chloroplasts:\n\n• Epidermal cells of onion (outer layer cells)\n• Root hair cells\n• Root cells in general\n• Storage cells (e.g., potato tuber cells)\n\nRemember: Only GREEN plant cells have chloroplasts!',
        backCn: '沒有葉綠體的植物細胞：\n\n• 洋蔥表皮細胞（外層細胞）\n• 根毛細胞\n• 一般的根細胞\n• 儲存細胞（如馬鈴薯塊莖細胞）\n\n記住：只有綠色植物細胞有葉綠體！'
      },
      {
        id: 19,
        front: 'What is cell sap and what does it contain?',
        frontCn: '什麼是細胞液，它含有什麼？',
        back: 'CELL SAP is:\n• The liquid inside the large central vacuole of plant cells\n• Mainly WATER\n\nContains dissolved substances:\n• Glucose (sugar)\n• Pigments (give flowers colours)\n• Mineral salts\n• Waste products',
        backCn: '細胞液是：\n• 植物細胞大型中央液泡內的液體\n• 主要是水\n\n含有溶解的物質：\n• 葡萄糖（糖）\n• 色素（給花顏色）\n• 礦物鹽\n• 廢物'
      },
      {
        id: 20,
        front: 'What are the 3 double-membrane organelles?',
        frontCn: '三個雙層膜細胞器是什麼？',
        back: 'The 3 DOUBLE-MEMBRANE organelles:\n\n1. NUCLEUS - contains DNA\n2. MITOCHONDRION - site of respiration\n3. CHLOROPLAST - site of photosynthesis\n\nMemory trick: "NMC" - No More Cold\nAll three are essential "powerhouse" organelles!',
        backCn: '三個雙層膜細胞器：\n\n1. 細胞核 - 含有DNA\n2. 線粒體 - 呼吸作用場所\n3. 葉綠體 - 光合作用場所\n\n記憶技巧：這三個都是必不可少的"動力"細胞器！'
      }
    ]
  }
}

// 顯微鏡樣本數據
export const microscopeSamples = [
  {
    id: 'onion-epidermis',
    name: 'Onion Epidermis',
    nameCn: '洋蔥表皮',
    description: 'Plant cell sample showing cell wall and rectangular shape.',
    descriptionCn: '植物細胞樣本，顯示細胞壁和矩形形狀。',
    type: 'plant',
    magnification: '400x',
    features: ['cell-wall', 'nucleus', 'cytoplasm'],
  },
  {
    id: 'cheek-cell',
    name: 'Cheek Cell',
    nameCn: '口腔上皮細胞',
    description: 'Animal cell sample showing irregular shape and no cell wall.',
    descriptionCn: '動物細胞樣本，顯示不規則形狀且沒有細胞壁。',
    type: 'animal',
    magnification: '400x',
    features: ['cell-membrane', 'nucleus', 'cytoplasm'],
  },
  {
    id: 'elodea-leaf',
    name: 'Elodea Leaf',
    nameCn: '水草葉',
    description: 'Plant cell showing chloroplasts and cell wall clearly.',
    descriptionCn: '植物細胞，清晰顯示葉綠體和細胞壁。',
    type: 'plant',
    magnification: '400x',
    features: ['cell-wall', 'chloroplast', 'vacuole'],
  },
  {
    id: 'blood-cells',
    name: 'Blood Cells',
    nameCn: '血細胞',
    description: 'Red and white blood cells under microscope.',
    descriptionCn: '顯微鏡下的紅細胞和白細胞。',
    type: 'animal',
    magnification: '1000x',
    features: ['cell-membrane', 'cytoplasm'],
  },
]

// 模組詳細內容
export const moduleContents = {
  'chemicals-of-life': {
    title: 'Chemicals of Life',
    titleCn: '生命的化學物質',
    language: 'en',
    sections: [
      {
        id: 'intro',
        type: 'text',
        title: 'Chemical Constituents of Organisms',
        titleCn: '生物體的化學成分',
        text: `The chemical constituents of organisms can be divided into two groups:

1. **Inorganic constituents**
   - Water (H₂O)
   - Inorganic ions (e.g., calcium, magnesium, iron, phosphate, nitrate)

2. **Organic constituents** (contain carbon)
   - Carbohydrates (e.g., glucose, starch, cellulose)
   - Lipids (fats and oils)
   - Proteins (made of amino acids)
   - Nucleic acids (DNA and RNA)

Water makes up about **60%** of human body weight. In some organisms like jellyfish, it can be as high as **98%**.`,
        translation: `生物體的化學成分可分為兩組：

1. **無機成分**：水、無機離子（如鈣、鎂、鐵、磷酸鹽、硝酸鹽）
2. **有機成分**（含碳）：碳水化合物、脂質、蛋白質、核酸

水約佔人體重量的60%。在某些生物（如水母）中，可高達98%。`,
        vocabularies: ['constituent', 'inorganic', 'organic', 'carbohydrate', 'lipid', 'protein', 'nucleic acid']
      },
      {
        id: 'water-functions',
        type: 'text',
        title: 'Six Functions of Water in Organisms',
        titleCn: '水在生物體內的六個功能',
        text: `Water is essential for life. It performs **six key functions** in living organisms:

**1. As a Reactant**
Water participates directly in chemical reactions.
- Example: In photosynthesis, water is a reactant: CO₂ + H₂O → glucose + O₂

**2. As a Medium for Chemical Reactions**
Water provides an aqueous environment where reactions can occur. Most metabolic reactions happen in aqueous solutions.

**3. As a Medium of Transport**
Dissolved substances are transported throughout organisms by water.
- In plants: Mineral ions are carried from roots to leaves
- In animals: Blood (mostly water) transports nutrients and oxygen

**4. As a Cooling Agent**
Water removes heat when it evaporates from body surfaces.
- Example: Humans produce sweat; when it evaporates, heat is removed, cooling the body

**5. Provides Support**
Water maintains the shape and structure of organisms.
- Example: Turgid plant cells (filled with water) provide support to seedlings and soft plant parts

**6. As a Component of Lubricant**
Water is a major component of lubricating fluids that reduce friction.
- Example: Pleural fluid between the lungs and chest wall reduces friction during breathing`,
        translation: `水對生命至關重要，在生物體內有六個關鍵功能：

1. **作為反應物** - 如光合作用中水是反應物
2. **作為化學反應的介質** - 提供水性環境
3. **作為運輸介質** - 溶解物質在體內運輸
4. **作為冷卻劑** - 蒸發時帶走熱量（如出汗）
5. **提供支撐** - 膨脹的細胞支撐植物
6. **作為潤滑劑成分** - 減少摩擦`,
        vocabularies: ['reactant', 'aqueous', 'evaporate', 'turgid', 'lubricant', 'photosynthesis']
      },
      {
        id: 'inorganic-ions',
        type: 'table',
        title: 'Inorganic Ions and Their Functions',
        titleCn: '無機離子及其功能',
        headers: ['Ion', 'Function in Animals', 'Function in Plants'],
        headersCn: ['離子', '在動物中的功能', '在植物中的功能'],
        vocabularies: ['ion', 'nitrate', 'magnesium', 'calcium', 'phosphate', 'chlorophyll', 'enzyme', 'haemoglobin', 'synthesis'],
        data: [
          {
            ion: 'Nitrate (NO₃⁻)',
            ionCn: '硝酸鹽 (NO₃⁻)',
            animals: '–',
            animalsCn: '–',
            plants: 'Source of nitrogen for protein synthesis',
            plantsCn: '蛋白質合成的氮源'
          },
          {
            ion: 'Magnesium (Mg²⁺)',
            ionCn: '鎂 (Mg²⁺)',
            animals: 'Activates enzymes',
            animalsCn: '激活酶',
            plants: 'Component of chlorophyll; Activates enzymes',
            plantsCn: '葉綠素成分；激活酶'
          },
          {
            ion: 'Iron (Fe²⁺/Fe³⁺)',
            ionCn: '鐵 (Fe²⁺/Fe³⁺)',
            animals: 'Component of haemoglobin; Activates enzymes',
            animalsCn: '血紅蛋白成分；激活酶',
            plants: 'Activates enzymes',
            plantsCn: '激活酶'
          },
          {
            ion: 'Calcium (Ca²⁺)',
            ionCn: '鈣 (Ca²⁺)',
            animals: 'Component of bones/teeth; Blood clotting; Muscle contraction; Nerve signal transmission',
            animalsCn: '骨骼/牙齒成分；血液凝固；肌肉收縮；神經信號傳遞',
            plants: 'Strengthens cell walls (middle lamella)',
            plantsCn: '加強細胞壁（中層）'
          },
          {
            ion: 'Phosphate (PO₄³⁻)',
            ionCn: '磷酸鹽 (PO₄³⁻)',
            animals: 'Component of bones/teeth; phospholipids; nucleic acids (DNA/RNA); ATP',
            animalsCn: '骨骼/牙齒、磷脂、核酸（DNA/RNA）、ATP的成分',
            plants: 'Component of phospholipids; nucleic acids (DNA/RNA); ATP',
            plantsCn: '磷脂、核酸（DNA/RNA）、ATP的成分'
          }
        ]
      },
      {
        id: 'dse-tips',
        type: 'highlight',
        title: 'DSE Exam Tips - Inorganic Constituents',
        titleCn: 'DSE 考試要點 - 無機成分',
        text: `Remember these key points for your DSE Biology exam:

• **Water percentage**: Human body ≈ 60%, Jellyfish ≈ 98%
• **6 Functions of Water**: Reactant, Medium for reactions, Transport medium, Cooling agent, Support, Lubricant component
• **Magnesium** → Chlorophyll (plants) + Enzyme activation
• **Iron** → Haemoglobin (animals) + Enzyme activation
• **Calcium** → Bones/teeth + Blood clotting + Muscle contraction + Nerve signals (animals); Cell wall (plants)
• **Nitrate** → Protein synthesis (plants only)
• **Phosphate** → Bones/teeth + Phospholipids + Nucleic acids + ATP`,
        translation: `DSE生物考試要點：
• 水的百分比：人體約60%，水母約98%
• 水的6個功能：反應物、反應介質、運輸介質、冷卻劑、支撐、潤滑劑
• 鎂 → 葉綠素 + 酶活化
• 鐵 → 血紅蛋白 + 酶活化
• 鈣 → 骨骼/牙齒 + 凝血 + 肌肉收縮 + 神經信號；細胞壁
• 硝酸鹽 → 蛋白質合成（僅植物）
• 磷酸鹽 → 骨骼/牙齒 + 磷脂 + 核酸 + ATP`
      },
      // ========== Section B: Organic Chemical Constituents ==========
      {
        id: 'organic-overview',
        type: 'text',
        title: 'B. Organic Chemical Constituents of Organisms',
        titleCn: 'B. 生物體的有機化學成分',
        text: `**Carbohydrates**, **lipids**, **proteins** and **nucleic acids** are the major organic chemical constituents of organisms. Thus they are often called **biomolecules**. They all contain the element **carbon**.

Organic substances refer to complex molecules containing the element carbon. Unlike inorganic constituents (water and ions), organic molecules are typically large and complex.

The four major types of biomolecules:
1. **Carbohydrates** - contain C, H, O
2. **Lipids** - contain C, H, O (higher H-to-O ratio)
3. **Proteins** - contain C, H, O, N (some also contain S)
4. **Nucleic acids** - contain C, H, O, N, P`,
        translation: `碳水化合物、脂質、蛋白質和核酸是生物體的主要有機化學成分，因此它們常被稱為生物分子。它們都含有碳元素。

有機物質是指含有碳元素的複雜分子。與無機成分（水和離子）不同，有機分子通常是大而複雜的。

四大類生物分子：
1. 碳水化合物 - 含C、H、O
2. 脂質 - 含C、H、O（氫氧比更高）
3. 蛋白質 - 含C、H、O、N（有些還含S）
4. 核酸 - 含C、H、O、N、P`,
        vocabularies: ['carbohydrate', 'lipid', 'protein', 'nucleic acid', 'biomolecule', 'organic']
      },
      {
        id: 'carbohydrates',
        type: 'text',
        title: '1. Carbohydrates',
        titleCn: '1. 碳水化合物',
        text: `Carbohydrates contain the elements **carbon**, **hydrogen** and **oxygen**. **Glucose**, **starch**, **glycogen** and **cellulose** are four common carbohydrates found in organisms.

**Glucose** (C₆H₁₂O₆)
• Glucose is the **main energy source** for cells
• It is directly broken down in **respiration** to release energy for chemical reactions in cells and various activities of organisms

**Starch**
• Starch acts as an **energy reserve in plants**
• It is stored in starch grains (e.g., in potato cells - Fig 2.4)
• Starch is broken down to glucose to provide energy when needed

**Glycogen**
• Glycogen acts as an **energy reserve in animals**
• It is stored as glycogen granules (e.g., in liver cells - Fig 2.5)
• Like starch, it is broken down to glucose when energy is needed

**Cellulose**
• Cellulose is a major component of **plant cell walls**
• It provides structural support and protection
• Unlike starch and glycogen, cellulose is NOT used for energy storage`,
        translation: `碳水化合物含有碳、氫和氧元素。葡萄糖、澱粉、糖原和纖維素是生物體中四種常見的碳水化合物。

**葡萄糖** (C₆H₁₂O₆)
• 葡萄糖是細胞的主要能量來源
• 它在呼吸作用中直接分解以釋放能量

**澱粉**
• 澱粉是植物的能量儲備
• 儲存在澱粉粒中（如馬鈴薯細胞）

**糖原**
• 糖原是動物的能量儲備
• 儲存為糖原顆粒（如肝細胞中）

**纖維素**
• 纖維素是植物細胞壁的主要成分
• 提供結構支撐和保護`,
        vocabularies: ['carbohydrate', 'glucose', 'starch', 'glycogen', 'cellulose', 'respiration', 'energy reserve', 'cell wall']
      },
      {
        id: 'carbohydrates-table',
        type: 'table',
        title: 'Summary of Carbohydrates',
        titleCn: '碳水化合物總結',
        headers: ['Carbohydrate', 'Function'],
        headersCn: ['碳水化合物', '功能'],
        vocabularies: ['glucose', 'starch', 'glycogen', 'cellulose'],
        data: [
          {
            carbohydrate: 'Glucose',
            carbohydrateCn: '葡萄糖',
            function: 'The main energy source for cells',
            functionCn: '細胞的主要能量來源'
          },
          {
            carbohydrate: 'Starch',
            carbohydrateCn: '澱粉',
            function: 'An energy reserve in plants',
            functionCn: '植物的能量儲備'
          },
          {
            carbohydrate: 'Glycogen',
            carbohydrateCn: '糖原',
            function: 'An energy reserve in animals',
            functionCn: '動物的能量儲備'
          },
          {
            carbohydrate: 'Cellulose',
            carbohydrateCn: '纖維素',
            function: 'A major component of plant cell walls',
            functionCn: '植物細胞壁的主要成分'
          }
        ]
      },
      {
        id: 'lipids',
        type: 'text',
        title: '2. Lipids',
        titleCn: '2. 脂質',
        text: `Lipids also contain the elements **carbon**, **hydrogen** and **oxygen**, but with a **higher hydrogen-to-oxygen ratio** than carbohydrates. **Triglycerides** and **phospholipids** are two common lipids found in organisms.

**Triglycerides** (fats and oil)
Triglycerides act as an **energy reserve** in organisms. They also have the following functions in animals:

a) Fats stored in **adipose tissues** under the skin act as an **insulator** to reduce heat loss from the body

b) Fats stored in **adipose tissues** around the internal organs act as a **shock absorber**, which **protects the internal organs**

**Phospholipids**
• Phospholipids are a major component of **cell membranes**
• They form the phospholipid bilayer that surrounds all cells
• Each phospholipid has a water-loving head and water-fearing tail`,
        translation: `脂質也含有碳、氫和氧元素，但氫氧比比碳水化合物高。三酸甘油酯和磷脂是生物體中兩種常見的脂質。

**三酸甘油酯**（脂肪和油）
三酸甘油酯是生物體的能量儲備。在動物中還有以下功能：

a) 皮下脂肪組織中的脂肪作為絕緣體，減少體內熱量流失

b) 內臟周圍脂肪組織中的脂肪作為減震器，保護內臟

**磷脂**
• 磷脂是細胞膜的主要成分
• 它們形成包圍所有細胞的磷脂雙分子層`,
        vocabularies: ['lipid', 'triglyceride', 'phospholipid', 'adipose', 'insulation', 'cell membrane', 'energy reserve']
      },
      {
        id: 'proteins',
        type: 'text',
        title: '3. Proteins',
        titleCn: '3. 蛋白質',
        text: `Proteins contain the elements **carbon**, **hydrogen**, **oxygen** and **nitrogen**. Some also contain **sulphur**. Some functions of proteins in organisms are shown below:

**1. Make up body tissues**
• Some proteins make up body **tissues**
• Hair, muscles and skin are mainly made up of proteins (Fig 2.6)

**2. Enzymes - regulate chemical reactions**
• Some proteins act as **enzymes**
• They **regulate chemical reactions** in organisms
• For example, enzymes are involved in regulating certain reactions in **respiration**

**3. Hormones - regulate body processes**
• Some proteins act as **hormones**
• They help **regulate body processes**
• For example, growth hormone regulates growth

**4. Antibodies - protect the body**
• Some proteins act as **antibodies**
• They help **protect the body against pathogens**
• Pathogens are viruses or organisms that cause diseases

**5. Transport of substances**
• Some proteins are involved in the **transport of substances**
• For example, **haemoglobin** is an oxygen-carrying protein in red blood cells`,
        translation: `蛋白質含有碳、氫、氧和氮元素。有些還含有硫。蛋白質在生物體中的一些功能如下：

**1. 構成身體組織**
• 某些蛋白質構成身體組織
• 頭髮、肌肉和皮膚主要由蛋白質組成

**2. 酶 - 調節化學反應**
• 某些蛋白質作為酶
• 它們調節生物體內的化學反應

**3. 激素 - 調節身體過程**
• 某些蛋白質作為激素
• 它們幫助調節身體過程

**4. 抗體 - 保護身體**
• 某些蛋白質作為抗體
• 它們幫助保護身體免受病原體侵害

**5. 物質運輸**
• 某些蛋白質參與物質運輸
• 例如，血紅蛋白是紅血球中的攜氧蛋白`,
        vocabularies: ['protein', 'tissue', 'enzyme', 'hormone', 'antibody', 'pathogen', 'haemoglobin', 'respiration']
      },
      {
        id: 'proteins-table',
        type: 'table',
        title: 'Functions of Proteins',
        titleCn: '蛋白質的功能',
        headers: ['Type of Protein', 'Function'],
        headersCn: ['蛋白質類型', '功能'],
        vocabularies: ['protein', 'enzyme', 'hormone', 'antibody', 'haemoglobin'],
        data: [
          {
            type: 'Structural proteins',
            typeCn: '結構蛋白',
            function: 'Make up body tissues (hair, muscles, skin)',
            functionCn: '構成身體組織（頭髮、肌肉、皮膚）'
          },
          {
            type: 'Enzymes',
            typeCn: '酶',
            function: 'Regulate chemical reactions',
            functionCn: '調節化學反應'
          },
          {
            type: 'Hormones',
            typeCn: '激素',
            function: 'Help regulate body processes',
            functionCn: '幫助調節身體過程'
          },
          {
            type: 'Antibodies',
            typeCn: '抗體',
            function: 'Help protect the body against pathogens',
            functionCn: '幫助保護身體免受病原體侵害'
          },
          {
            type: 'Haemoglobin',
            typeCn: '血紅蛋白',
            function: 'Carries oxygen in red blood cells',
            functionCn: '在紅血球中攜帶氧氣'
          }
        ]
      },
      {
        id: 'nucleic-acids',
        type: 'text',
        title: '4. Nucleic Acids',
        titleCn: '4. 核酸',
        text: `Nucleic acids contain the elements **carbon**, **hydrogen**, **oxygen**, **nitrogen** and **phosphorus**. There are two types of nucleic acids: **deoxyribonucleic acid (DNA)** and **ribonucleic acid (RNA)**.

**DNA (Deoxyribonucleic Acid)**
• DNA is the **genetic material** in organisms
• It carries **genetic information** which controls activities of cells and determines the features of organisms
• DNA has a double helix structure

**RNA (Ribonucleic Acid)**
• RNA is involved in the **synthesis of proteins**
• It carries genetic instructions from DNA to ribosomes where proteins are made
• Unlike DNA, RNA is usually single-stranded`,
        translation: `核酸含有碳、氫、氧、氮和磷元素。核酸有兩種類型：脫氧核糖核酸（DNA）和核糖核酸（RNA）。

**DNA（脫氧核糖核酸）**
• DNA是生物體中的遺傳物質
• 它攜帶控制細胞活動和決定生物體特徵的遺傳信息
• DNA具有雙螺旋結構

**RNA（核糖核酸）**
• RNA參與蛋白質的合成
• 它將遺傳指令從DNA傳遞到核糖體，在那裡製造蛋白質
• 與DNA不同，RNA通常是單鏈的`,
        vocabularies: ['nucleic acid', 'dna', 'rna', 'deoxyribonucleic acid', 'ribonucleic acid', 'genetic', 'protein', 'synthesis']
      },
      {
        id: 'organic-summary-table',
        type: 'table',
        title: 'Summary of Organic Chemical Constituents',
        titleCn: '有機化學成分總結',
        headers: ['Organic Constituent', 'Functions'],
        headersCn: ['有機成分', '功能'],
        vocabularies: ['carbohydrate', 'lipid', 'protein', 'nucleic acid'],
        data: [
          {
            constituent: 'Carbohydrates',
            constituentCn: '碳水化合物',
            examples: 'Glucose, Starch, Glycogen, Cellulose',
            examplesCn: '葡萄糖、澱粉、糖原、纖維素',
            functions: '• The main energy source for cells (glucose)\n• An energy reserve in plants (starch)\n• An energy reserve in animals (glycogen)\n• A major component of plant cell walls (cellulose)',
            functionsCn: '• 細胞的主要能量來源（葡萄糖）\n• 植物的能量儲備（澱粉）\n• 動物的能量儲備（糖原）\n• 植物細胞壁的主要成分（纖維素）'
          },
          {
            constituent: 'Lipids',
            constituentCn: '脂質',
            examples: 'Triglycerides (fats and oils), Phospholipids',
            examplesCn: '三酸甘油酯（脂肪和油）、磷脂',
            functions: '• An energy reserve in organisms\n• Fats stored in adipose tissues reduce heat loss and protect internal organs\n• A major component of cell membranes (phospholipids)',
            functionsCn: '• 生物體的能量儲備\n• 脂肪組織中的脂肪減少熱量流失並保護內臟\n• 細胞膜的主要成分（磷脂）'
          },
          {
            constituent: 'Proteins',
            constituentCn: '蛋白質',
            examples: 'Structural proteins, Enzymes, Hormones, Antibodies, Haemoglobin',
            examplesCn: '結構蛋白、酶、激素、抗體、血紅蛋白',
            functions: '• Make up body tissues\n• Regulate chemical reactions (enzymes)\n• Help regulate body processes (hormones)\n• Help protect the body against pathogens (antibodies)\n• Carries oxygen (haemoglobin)',
            functionsCn: '• 構成身體組織\n• 調節化學反應（酶）\n• 調節身體過程（激素）\n• 保護身體免受病原體侵害（抗體）\n• 攜帶氧氣（血紅蛋白）'
          },
          {
            constituent: 'Nucleic acids',
            constituentCn: '核酸',
            examples: 'Deoxyribonucleic acid (DNA), Ribonucleic acid (RNA)',
            examplesCn: '脫氧核糖核酸（DNA）、核糖核酸（RNA）',
            functions: '• Carries genetic information (DNA)\n• Involved in the synthesis of proteins (RNA)',
            functionsCn: '• 攜帶遺傳信息（DNA）\n• 參與蛋白質的合成（RNA）'
          }
        ]
      },
      {
        id: 'dse-tips-organic',
        type: 'highlight',
        title: 'DSE Exam Tips - Organic Constituents',
        titleCn: 'DSE 考試要點 - 有機成分',
        text: `Remember these key points about organic constituents:

**Carbohydrates (C, H, O)**
• Glucose → Main energy source for cells
• Starch → Energy reserve in PLANTS
• Glycogen → Energy reserve in ANIMALS
• Cellulose → Plant cell walls

**Lipids (C, H, O - higher H:O ratio)**
• Triglycerides → Energy reserve + Insulation + Shock absorber
• Phospholipids → Cell membranes

**Proteins (C, H, O, N, some S)**
• 5 functions: Tissues, Enzymes, Hormones, Antibodies, Transport

**Nucleic acids (C, H, O, N, P)**
• DNA → Genetic information
• RNA → Protein synthesis`,
        translation: `有機成分要點：

**碳水化合物 (C, H, O)**
• 葡萄糖 → 細胞的主要能量來源
• 澱粉 → 植物的能量儲備
• 糖原 → 動物的能量儲備
• 纖維素 → 植物細胞壁

**脂質 (C, H, O - 氫氧比更高)**
• 三酸甘油酯 → 能量儲備 + 絕緣 + 減震
• 磷脂 → 細胞膜

**蛋白質 (C, H, O, N, 有些含S)**
• 5個功能：組織、酶、激素、抗體、運輸

**核酸 (C, H, O, N, P)**
• DNA → 遺傳信息
• RNA → 蛋白質合成`
      }
    ]
  },

  // ========== Discovery and Early Studies of Cells ==========
  'discovery-of-cells': {
    title: 'Discovery and Early Studies of Cells',
    titleCn: '細胞的發現和早期研究',
    language: 'en',
    sections: [
      {
        id: 'intro',
        type: 'text',
        title: 'Cells - The Basic Unit of Life',
        titleCn: '細胞 - 生命的基本單位',
        text: `**Cells** are the **basic unit of life**. All organisms are made up of cells.

**Unicellular organisms** (e.g., Amoeba) are made of **one cell only** (Fig 2.7).

**Multicellular organisms** (e.g., plants and animals) are made of **more than one cell** (Fig 2.8).

Most cells are very small. They **cannot be seen with the naked eye**. How were they discovered?`,
        translation: `細胞是生命的基本單位。所有生物體都由細胞組成。

單細胞生物（如變形蟲）僅由一個細胞組成。

多細胞生物（如植物和動物）由多個細胞組成。

大多數細胞都非常小，肉眼無法看見。它們是如何被發現的？`,
        vocabularies: ['cell', 'unicellular', 'multicellular', 'organism']
      },
      {
        id: 'discovery-of-cells',
        type: 'text',
        title: 'A. Discovery of Cells',
        titleCn: 'A. 細胞的發現',
        text: `**The First Microscope (1590)**
In 1590, lens makers **Hans Janssen** and his son invented the **first microscope**. This quickly led to the discovery of cells.

**Robert Hooke and the Discovery of Cells (1665)**
In 1665, English scientist **Robert Hooke** (1635-1703) used a microscope designed by himself to examine a thin slice of **cork**, a tissue of bark.

He observed that cork seemed to be made up of many **small irregular boxes**. He called these boxes "**cells**" (Fig 2.9).

**Important Note:** Although Robert Hooke observed these boxes, they were actually the **cell walls** of dead cork cells. His study raised the interest of other scientists in the microscopic examination of different materials.`,
        translation: `**第一台顯微鏡（1590年）**
1590年，製鏡師漢斯·詹森和他的兒子發明了第一台顯微鏡。這很快導致了細胞的發現。

**羅伯特·胡克與細胞的發現（1665年）**
1665年，英國科學家羅伯特·胡克（1635-1703）使用自己設計的顯微鏡觀察一片薄薄的軟木（樹皮組織）。

他觀察到軟木似乎由許多小的不規則盒子組成。他將這些盒子稱為"細胞"。

**重要說明：**雖然羅伯特·胡克觀察到這些盒子，但它們實際上是死亡軟木細胞的細胞壁。他的研究引起了其他科學家對不同材料進行顯微鏡觀察的興趣。`,
        vocabularies: ['microscope', 'cork', 'cell', 'cell wall', 'magnification']
      },
      {
        id: 'cell-theory',
        type: 'text',
        title: 'B. The Cell Theory',
        titleCn: 'B. 細胞學說',
        text: `As microscopes were improved and more materials were observed, scientists noticed that there was a basic structural pattern in organisms.

**Key Scientists:**
• **Matthias Schleiden** (1804-81) discovered that **plant parts are made up of cells**
• **Theodor Schwann** (1810-82) discovered that **animal parts are made up of cells**

Based on the above findings and the work of other scientists, Schwann proposed the **Cell Theory** in **1839**. This theory became one of the foundations of biology.

**The Cell Theory states that:**
1. All organisms are **made up of one or more cells**
2. The cell is **the basic unit of life**; it is the smallest unit that shows all the characteristics of life
3. All cells **come from pre-existing cells**

Apart from the discovery of cells and the formulation of the Cell Theory, some other major events in cell biology since the 1500s are shown in the timeline. All these were made possible by the **improvement of microscopes**, which allowed more details of cells to be observed.

From the timeline, we can see that **scientific knowledge advances with improvement in technology**.`,
        translation: `隨著顯微鏡的改進和更多材料的觀察，科學家們注意到生物體中存在一種基本的結構模式。

**主要科學家：**
• 馬蒂亞斯·施萊登（1804-81）發現植物部分由細胞組成
• 特奧多爾·施旺（1810-82）發現動物部分由細胞組成

基於以上發現和其他科學家的工作，施旺於1839年提出了細胞學說。這一理論成為生物學的基礎之一。

**細胞學說指出：**
1. 所有生物體都由一個或多個細胞組成
2. 細胞是生命的基本單位；它是顯示所有生命特徵的最小單位
3. 所有細胞都來自先前存在的細胞

除了細胞的發現和細胞學說的構想外，自1500年代以來細胞生物學的其他一些重大事件如時間線所示。這一切都得益於顯微鏡的改進，使人們能夠觀察到細胞的更多細節。

從時間線中，我們可以看到科學知識隨著技術的進步而發展。`,
        vocabularies: ['cell theory', 'organism', 'cell', 'pre-existing', 'formulation']
      },
      {
        id: 'timeline',
        type: 'table',
        title: 'Timeline: Major Events in Cell Biology and Microscope Development',
        titleCn: '時間線：細胞生物學和顯微鏡發展的重大事件',
        headers: ['Year', 'Event', 'Magnification'],
        headersCn: ['年份', '事件', '放大倍數'],
        vocabularies: ['microscope', 'magnification', 'cell', 'nucleus', 'mitochondria', 'ribosome', 'electron microscope'],
        data: [
          {
            year: '1590',
            yearCn: '1590',
            event: 'First light microscope - Hans Janssen and his son made the first microscope',
            eventCn: '第一台光學顯微鏡 - 漢斯·詹森和他的兒子製造了第一台顯微鏡',
            magnification: '3-9 times',
            magnificationCn: '3-9倍'
          },
          {
            year: '1665',
            yearCn: '1665',
            event: 'Discovery of cells - Robert Hooke observed cork and called the small boxes "cells"',
            eventCn: '細胞的發現 - 羅伯特·胡克觀察軟木並將小盒子稱為"細胞"',
            magnification: '~50 times',
            magnificationCn: '約50倍'
          },
          {
            year: '1674',
            yearCn: '1674',
            event: 'First observation of living cells - Antoni van Leeuwenhoek observed microorganisms in pond water',
            eventCn: '首次觀察活細胞 - 列文虎克在池塘水中觀察到微生物',
            magnification: '~200 times',
            magnificationCn: '約200倍'
          },
          {
            year: '1831',
            yearCn: '1831',
            event: 'Discovery of the nucleus - Robert Brown discovered nuclei in cells of an orchid leaf',
            eventCn: '發現細胞核 - 羅伯特·布朗在蘭花葉細胞中發現了細胞核',
            magnification: '-',
            magnificationCn: '-'
          },
          {
            year: '1839',
            yearCn: '1839',
            event: 'Formulation of the Cell Theory - Theodor Schwann proposed the Cell Theory',
            eventCn: '細胞學說的構想 - 特奧多爾·施旺提出細胞學說',
            magnification: '-',
            magnificationCn: '-'
          },
          {
            year: '1886',
            yearCn: '1886',
            event: 'Discovery of mitochondria - Scientists discovered mitochondria in human muscle cells',
            eventCn: '發現線粒體 - 科學家在人類肌肉細胞中發現了線粒體',
            magnification: '-',
            magnificationCn: '-'
          },
          {
            year: '1933',
            yearCn: '1933',
            event: 'First electron microscope was made',
            eventCn: '第一台電子顯微鏡製造出來',
            magnification: '-',
            magnificationCn: '-'
          },
          {
            year: '1950',
            yearCn: '1950',
            event: 'Discovery of ribosomes - Scientists discovered ribosomes using electron microscope',
            eventCn: '發現核糖體 - 科學家使用電子顯微鏡發現了核糖體',
            magnification: '-',
            magnificationCn: '-'
          },
          {
            year: 'Modern',
            yearCn: '現代',
            event: 'Modern light microscope',
            eventCn: '現代光學顯微鏡',
            magnification: '~1600 times',
            magnificationCn: '約1600倍'
          },
          {
            year: 'Modern',
            yearCn: '現代',
            event: 'Modern electron microscope',
            eventCn: '現代電子顯微鏡',
            magnification: '~12,000 times',
            magnificationCn: '約12,000倍'
          }
        ]
      },
      {
        id: 'dse-tips',
        type: 'highlight',
        title: 'DSE Exam Tips - Cell Discovery and Cell Theory',
        titleCn: 'DSE 考試要點 - 細胞發現和細胞學說',
        text: `Remember these key points for your DSE Biology exam:

**The Cell Theory (3 statements):**
1. All organisms are made up of **one or more cells**
2. The cell is the **basic unit of life**
3. All cells come from **pre-existing cells**

**Key Scientists:**
• **Robert Hooke** (1665) - Discovered cells by observing cork; saw **cell walls** of dead cells
• **Leeuwenhoek** (1674) - First to observe **living cells** (microorganisms)
• **Robert Brown** (1831) - Discovered the **nucleus**
• **Schleiden** - Plants are made of cells
• **Schwann** (1839) - Proposed the **Cell Theory**; animals are made of cells

**Microscope Development:**
• 1590: First microscope (3-9x)
• 1665: Hooke's microscope (~50x)
• 1674: Leeuwenhoek's microscope (~200x)
• Modern light microscope: ~1600x
• Electron microscope: ~12,000x

**Key Point:** Scientific knowledge advances with improvement in technology!`,
        translation: `DSE生物考試要點：

**細胞學說（3條陳述）：**
1. 所有生物體都由一個或多個細胞組成
2. 細胞是生命的基本單位
3. 所有細胞都來自先前存在的細胞

**主要科學家：**
• 羅伯特·胡克（1665）- 通過觀察軟木發現細胞；看到的是死細胞的細胞壁
• 列文虎克（1674）- 首次觀察到活細胞（微生物）
• 羅伯特·布朗（1831）- 發現細胞核
• 施萊登 - 植物由細胞組成
• 施旺（1839）- 提出細胞學說；動物由細胞組成

**顯微鏡發展：**
• 1590：第一台顯微鏡（3-9倍）
• 1665：胡克的顯微鏡（約50倍）
• 1674：列文虎克的顯微鏡（約200倍）
• 現代光學顯微鏡：約1600倍
• 電子顯微鏡：約12,000倍

**關鍵點：**科學知識隨著技術的進步而發展！`
      }
    ]
  },

  // ========== Microscopes: Tools for Studying Cells ==========
  'microscopes-tools': {
    title: 'Microscopes: Tools for Studying Cells',
    titleCn: '顯微鏡：研究細胞的工具',
    language: 'en',
    sections: [
      {
        id: 'intro',
        type: 'text',
        title: 'A. Types of Microscopes',
        titleCn: 'A. 顯微鏡的類型',
        text: `Nowadays, many different types of **microscopes** are available for observing cells.

**Light microscopes** and **electron microscopes** are two types of commonly used microscopes. The table below shows their differences.

Light microscopes use **visible light** to view specimens, while electron microscopes use **electron beams**.

There are two types of electron microscopes:
• **Transmission Electron Microscope (TEM)** - electron beams pass THROUGH the specimen
• **Scanning Electron Microscope (SEM)** - electron beams SCAN over the surface of the specimen`,
        translation: `如今，有許多不同類型的顯微鏡可用於觀察細胞。

光學顯微鏡和電子顯微鏡是兩種常用的顯微鏡類型。下表顯示了它們的差異。

光學顯微鏡使用可見光觀察標本，而電子顯微鏡使用電子束。

電子顯微鏡有兩種類型：
• 透射電子顯微鏡（TEM）- 電子束穿過標本
• 掃描電子顯微鏡（SEM）- 電子束掃描標本表面`,
        vocabularies: ['microscope', 'light microscope', 'electron microscope', 'electron beam', 'specimen', 'tem', 'sem']
      },
      {
        id: 'microscope-comparison-table',
        type: 'table',
        title: 'Comparison of Microscope Types',
        titleCn: '顯微鏡類型比較',
        headers: ['Feature', 'Light Microscope', 'Transmission Electron Microscope (TEM)', 'Scanning Electron Microscope (SEM)'],
        headersCn: ['特徵', '光學顯微鏡', '透射電子顯微鏡（TEM）', '掃描電子顯微鏡（SEM）'],
        vocabularies: ['light microscope', 'transmission electron microscope', 'scanning electron microscope', 'electron beam', 'magnification', 'resolution', 'specimen', 'two-dimensional', 'three-dimensional'],
        data: [
          {
            feature: 'Working Principle',
            featureCn: '工作原理',
            lightMicroscope: 'Light passes through a specimen or a thin slide of it to form an image',
            lightMicroscopeCn: '光線穿過標本或其薄片以形成圖像',
            tem: 'Electron beams pass through a very thin slice of a specimen to form an image',
            temCn: '電子束穿過標本的非常薄的切片以形成圖像',
            sem: 'Electron beams scan over the surface of a specimen to form an image',
            semCn: '電子束掃描標本表面以形成圖像'
          },
          {
            feature: 'Maximum Magnification',
            featureCn: '最大放大倍數',
            lightMicroscope: '1,600 times',
            lightMicroscopeCn: '1,600倍',
            tem: '1,500,000 times',
            temCn: '1,500,000倍',
            sem: '200,000 times',
            semCn: '200,000倍'
          },
          {
            feature: 'Appearance of Image',
            featureCn: '圖像外觀',
            lightMicroscope: 'Coloured image',
            lightMicroscopeCn: '彩色圖像',
            tem: 'Black and white two-dimensional image showing the internal structures of the specimen',
            temCn: '黑白二維圖像，顯示標本的內部結構',
            sem: 'Black and white three-dimensional image showing the external structures of the specimen',
            semCn: '黑白三維圖像，顯示標本的外部結構'
          },
          {
            feature: 'Advantages',
            featureCn: '優點',
            lightMicroscope: '• Living specimens can be observed\\n• Specimens can be prepared easily',
            lightMicroscopeCn: '• 可以觀察活的標本\\n• 標本容易準備',
            tem: '• Magnifications and resolution of images produced are higher, so more details can be seen',
            temCn: '• 產生的圖像放大倍數和分辨率更高，因此可以看到更多細節',
            sem: '• Magnifications and resolution of images produced are higher, so more details can be seen',
            semCn: '• 產生的圖像放大倍數和分辨率更高，因此可以看到更多細節'
          }
        ]
      },
      {
        id: 'false-colour',
        type: 'highlight',
        title: 'Note: False Colour in Electron Micrographs',
        titleCn: '注意：電子顯微照片中的偽彩色',
        text: `Most **electron micrographs** in textbooks are in colour. Why?

This is because **false colour** is added to them using computer software!

Remember: Electron microscopes produce **black and white** images only. Scientists add false colour to help distinguish different structures more easily.`,
        translation: `教科書中的大多數電子顯微照片都是彩色的。為什麼？

這是因為使用電腦軟件添加了偽彩色！

記住：電子顯微鏡只能產生黑白圖像。科學家添加偽彩色是為了更容易區分不同的結構。`,
        vocabularies: ['micrograph', 'false colour', 'electron microscope']
      },
      {
        id: 'resolution',
        type: 'text',
        title: 'B. Resolution of Images',
        titleCn: 'B. 圖像的分辨率',
        text: `One of the advantages of **electron microscopes** over **light microscopes** is that they can produce images with **higher resolution**.

**What is Resolution?**
Resolution is the ability of a microscope to show fine details clearly. Higher resolution means you can distinguish between two points that are very close together.

**Comparison at Same Magnification**
When we compare images of the same type of cells with the **same magnification** using a light microscope and an electron microscope, we can see that:
• The image produced using an electron microscope has **higher resolution**
• The electron microscope image is **clearer** and shows **more details**

**Super-Resolution Microscopes**
Due to advances in technology, microscopes have become more and more powerful. Nowadays, some microscopes have such **high resolution** that they allow observation of **individual molecules** in cells!

Using these microscopes, scientists can now study biological structures and processes at a **molecular level**.`,
        translation: `電子顯微鏡相對於光學顯微鏡的優點之一是它們可以產生更高分辨率的圖像。

**什麼是分辨率？**
分辨率是顯微鏡清晰顯示精細細節的能力。更高的分辨率意味著您可以區分非常接近的兩個點。

**相同放大倍數下的比較**
當我們比較使用光學顯微鏡和電子顯微鏡拍攝的具有相同放大倍數的同類型細胞圖像時，我們可以看到：
• 使用電子顯微鏡產生的圖像具有更高的分辨率
• 電子顯微鏡圖像更清晰，顯示更多細節

**超高分辨率顯微鏡**
由於技術的進步，顯微鏡變得越來越強大。如今，一些顯微鏡具有如此高的分辨率，可以觀察細胞中的單個分子！

使用這些顯微鏡，科學家現在可以在分子水平上研究生物結構和過程。`,
        vocabularies: ['resolution', 'electron microscope', 'light microscope', 'magnification']
      },
      {
        id: 'size-range',
        type: 'infographic',
        title: 'What Can You Observe Under Different Microscopes?',
        titleCn: '不同顯微鏡可以觀察什麼？',
        text: `**Size Range of Observable Objects**

Different viewing tools can see objects of different sizes:

**Naked Eye** (no magnification needed)
• Height of a 5-year-old child: ~1 m
• Width of a hand: ~0.1 m (10 cm)
• Width of a finger: ~0.01 m (1 cm)
• Width of an ant: ~1 mm (0.001 m)
• Thickness of a human hair: ~0.1 mm

**Light Microscope** (~0.001 mm to 0.1 mm = 1 μm to 100 μm)
• Diameter of an animal cell or plant cell: ~0.01 mm (10 μm)
• Width of a mitochondrion: ~1 μm (0.001 mm)

**Electron Microscope** (~0.1 nm to 1 μm)
• Diameter of a ribosome: ~0.1 μm (100 nm)
• Width of a DNA molecule: ~0.01 μm (10 nm)
• Diameter of an atom: ~0.1 nm

**Key Insight:** The smaller the object, the more powerful the microscope needed to see it!`,
        translation: `**可觀察物體的尺寸範圍**

不同的觀察工具可以看到不同大小的物體：

**肉眼**（不需要放大）
• 5歲兒童的身高：約1米
• 手的寬度：約0.1米（10厘米）
• 手指的寬度：約0.01米（1厘米）
• 螞蟻的寬度：約1毫米（0.001米）
• 人類頭髮的厚度：約0.1毫米

**光學顯微鏡**（約0.001毫米至0.1毫米 = 1微米至100微米）
• 動物細胞或植物細胞的直徑：約0.01毫米（10微米）
• 線粒體的寬度：約1微米（0.001毫米）

**電子顯微鏡**（約0.1納米至1微米）
• 核糖體的直徑：約0.1微米（100納米）
• DNA分子的寬度：約0.01微米（10納米）
• 原子的直徑：約0.1納米

**關鍵見解：**物體越小，需要越強大的顯微鏡才能看到！`,
        vocabularies: ['microscope', 'light microscope', 'electron microscope', 'cell', 'mitochondria', 'ribosome']
      },
      {
        id: 'dse-tips',
        type: 'highlight',
        title: 'DSE Exam Tips - Microscopes',
        titleCn: 'DSE 考試要點 - 顯微鏡',
        text: `Remember these key points for your DSE Biology exam:

**Three Types of Microscopes:**
1. **Light Microscope** - uses light, max 1,600x, coloured images, can view living specimens
2. **TEM** - electrons THROUGH specimen, max 1,500,000x, 2D B&W, shows INTERNAL structures
3. **SEM** - electrons SCAN surface, max 200,000x, 3D B&W, shows EXTERNAL structures

**Quick Memory Trick:**
• **TEM** = "**T**hrough **E**verything **M**ethod" → electrons go THROUGH → shows INTERNAL (2D)
• **SEM** = "**S**urface **E**xamination **M**ethod" → scans SURFACE → shows EXTERNAL (3D)

**Resolution vs Magnification:**
• Magnification = how much BIGGER the image appears
• Resolution = how much DETAIL you can see clearly
• Electron microscopes have BOTH higher magnification AND resolution!

**False Colour:**
• Electron micrographs are originally BLACK AND WHITE
• Colour is added by COMPUTER SOFTWARE (false colour)

**Size Scale to Remember:**
• Naked eye: > 0.1 mm
• Light microscope: 1 μm - 0.1 mm (cells, mitochondria)
• Electron microscope: 0.1 nm - 1 μm (ribosomes, DNA, atoms)`,
        translation: `DSE生物考試要點：

**三種顯微鏡類型：**
1. **光學顯微鏡** - 使用光，最大1,600倍，彩色圖像，可以觀察活的標本
2. **TEM** - 電子穿過標本，最大1,500,000倍，2D黑白，顯示內部結構
3. **SEM** - 電子掃描表面，最大200,000倍，3D黑白，顯示外部結構

**快速記憶技巧：**
• **TEM** = "穿透一切的方法" → 電子穿過 → 顯示內部（2D）
• **SEM** = "表面檢查方法" → 掃描表面 → 顯示外部（3D）

**分辨率 vs 放大倍數：**
• 放大倍數 = 圖像看起來大多少
• 分辨率 = 可以清楚看到多少細節
• 電子顯微鏡同時具有更高的放大倍數和分辨率！

**偽彩色：**
• 電子顯微照片原本是黑白的
• 顏色是由電腦軟件添加的（偽彩色）

**記住的尺寸範圍：**
• 肉眼：> 0.1毫米
• 光學顯微鏡：1微米 - 0.1毫米（細胞、線粒體）
• 電子顯微鏡：0.1納米 - 1微米（核糖體、DNA、原子）`
      },
      {
        id: 'light-microscope-parts',
        type: 'text',
        title: 'B. Light Microscopes - Parts of a Compound Microscope',
        titleCn: 'B. 光學顯微鏡 - 複式顯微鏡的部件',
        text: `The light microscopes used in school laboratories are **compound microscopes**. They use two sets of lenses—an **eyepiece** and an **objective**—to produce magnified images.

**12 Parts of a Light Microscope and Their Functions:**

**Optical Parts (for viewing):**
1. **Eyepiece** - The magnifying lens which our eyes look through. Eyepieces with different magnifications (5x, 10x, 16x) are often available.
2. **Body tube** - It holds the eyepiece and the objectives.
3. **Nosepiece** - We can rotate it to choose the objective required.
4. **Objective** - It is a magnifying lens pointing to the specimen. Objectives with different magnifications (4x, 10x, 40x) are held on the nosepiece.

**Illumination Parts (for lighting):**
5. **Condenser** - It is a lens that focuses light onto the specimen.
6. **Diaphragm** - We can adjust it to control the amount of light shone onto the specimen.
7. **Light source** - It provides light for viewing the specimen. (Some microscopes have a mirror for reflecting light from an external light source instead.)

**Structural Parts (for support):**
8. **Arm** - We hold it when carrying the microscope from place to place.
9. **Stage** - We clip the slide here for observation. It can be raised or lowered to focus.
10. **Base** - It supports the whole microscope.

**Focusing Parts:**
11. **Coarse adjustment knob** - We turn it to raise or lower the stage to get a **rough focus**. Turning it causes a **larger movement** of the stage.
12. **Fine adjustment knob** - We turn it to raise or lower the stage to get a **sharp focus**. Turning it causes a **smaller movement** of the stage. We often use it when the specimen is in rough focus.`,
        translation: `學校實驗室使用的光學顯微鏡是複式顯微鏡。它們使用兩組鏡片——目鏡和物鏡——來產生放大的圖像。

**光學顯微鏡的12個部件及其功能：**

**光學部件（用於觀察）：**
1. **目鏡** - 我們眼睛觀看的放大鏡。通常有不同放大倍數（5x、10x、16x）的目鏡可選。
2. **鏡筒** - 它固定目鏡和物鏡。
3. **物鏡轉換器** - 我們可以旋轉它來選擇所需的物鏡。
4. **物鏡** - 它是指向標本的放大鏡。不同放大倍數（4x、10x、40x）的物鏡安裝在轉換器上。

**照明部件（用於採光）：**
5. **聚光器** - 它是將光線聚焦到標本上的鏡片。
6. **光圈** - 我們可以調節它來控制照射到標本上的光量。
7. **光源** - 它提供觀察標本的光線。（有些顯微鏡用鏡子反射外部光源的光。）

**結構部件（用於支撐）：**
8. **鏡臂** - 我們搬運顯微鏡時握住它。
9. **載物台** - 我們在這裡夾住載玻片進行觀察。它可以升高或降低以對焦。
10. **底座** - 它支撐整個顯微鏡。

**對焦部件：**
11. **粗調節器** - 我們轉動它來升高或降低載物台以獲得粗略對焦。轉動它會使載物台產生較大的移動。
12. **微調節器** - 我們轉動它來升高或降低載物台以獲得清晰對焦。轉動它會使載物台產生較小的移動。當標本粗略對焦後我們常用它。`,
        vocabularies: ['compound microscope', 'eyepiece', 'objective', 'nosepiece', 'body tube', 'condenser', 'diaphragm', 'light source', 'arm', 'stage', 'base', 'coarse adjustment knob', 'fine adjustment knob', 'focus']
      },
      {
        id: 'how-microscope-works',
        type: 'text',
        title: 'How a Light Microscope Works',
        titleCn: '光學顯微鏡如何工作',
        text: `**Light Path:**
When we observe a specimen under a light microscope, light from the **light source** penetrates the specimen and enters the **objective**. It then passes through the **eyepiece** and enters our eye, so that we can see an image.

**Light source → Specimen → Objective → Eyepiece → Eye**

**Important: The Image is Inverted!**
The image observed is **inverted** (upside down and reversed left-to-right). 

For example, if you observe the letter '**p**' under the microscope, the image becomes '**d**'.

This means:
• If you move the slide to the LEFT, the image moves to the RIGHT
• If you move the slide UP, the image moves DOWN

This is important to remember when navigating around your specimen!`,
        translation: `**光線路徑：**
當我們在光學顯微鏡下觀察標本時，來自光源的光線穿透標本並進入物鏡。然後它通過目鏡進入我們的眼睛，這樣我們就能看到圖像。

**光源 → 標本 → 物鏡 → 目鏡 → 眼睛**

**重要：圖像是倒置的！**
觀察到的圖像是倒置的（上下顛倒且左右翻轉）。

例如，如果你在顯微鏡下觀察字母"p"，圖像會變成"d"。

這意味著：
• 如果你將載玻片向左移動，圖像會向右移動
• 如果你將載玻片向上移動，圖像會向下移動

在觀察標本時記住這一點很重要！`,
        vocabularies: ['light source', 'specimen', 'objective', 'eyepiece', 'inverted', 'image']
      },
      {
        id: 'observation-procedure-low',
        type: 'text',
        title: 'Practical: Observation at Low-Power Magnification',
        titleCn: '實驗：低倍放大觀察',
        text: `**Procedure A: Observation at Low-Power Magnification**

**Step 1:** Place a microscope on the bench.

**Step 2:** Insert a **low-power eyepiece** (e.g. 5X) into the body tube. Select a **low-power objective** (e.g. 4X) by rotating the nosepiece.

**Step 3:** Turn on the light source. Look through the eyepiece. Adjust the **diaphragm** until the light is sufficient.

**Step 4:** Clip a prepared slide of onion epidermal cells onto the **stage**. Make sure the specimen is directly over the hole of the stage.

**Step 5:** Follow the steps below to **focus** on the specimen:
  a. Watch the stage from the side. **Raise the stage** (or lower the body tube) by turning the **coarse adjustment knob** until the objective is at a position closest to the slide.
  b. Look through the eyepiece again. **Lower the stage** (or raise the body tube) slowly by turning the **coarse adjustment knob** until the image of the specimen is roughly in focus.
  c. Turn the **fine adjustment knob** to get a sharp focus.

⚠️ **CAUTION:** Never raise the stage (or lower the body tube) with the coarse adjustment knob when you are looking through the eyepiece. This could damage the slide or the objective!`,
        translation: `**步驟A：低倍放大觀察**

**第1步：**將顯微鏡放在實驗台上。

**第2步：**將低倍目鏡（如5X）插入鏡筒。通過旋轉物鏡轉換器選擇低倍物鏡（如4X）。

**第3步：**打開光源。通過目鏡觀察。調節光圈直到光線充足。

**第4步：**將準備好的洋蔥表皮細胞載玻片夾在載物台上。確保標本正好在載物台孔的正上方。

**第5步：**按以下步驟對焦標本：
  a. 從側面觀察載物台。通過轉動粗調節器升高載物台（或降低鏡筒），直到物鏡處於最接近載玻片的位置。
  b. 再次通過目鏡觀察。通過緩慢轉動粗調節器降低載物台（或升高鏡筒），直到標本圖像大致對焦。
  c. 轉動微調節器以獲得清晰對焦。

⚠️ **注意：**當你通過目鏡觀察時，絕不要用粗調節器升高載物台（或降低鏡筒）。這可能會損壞載玻片或物鏡！`,
        vocabularies: ['low-power', 'eyepiece', 'objective', 'nosepiece', 'diaphragm', 'stage', 'coarse adjustment knob', 'fine adjustment knob', 'focus', 'specimen']
      },
      {
        id: 'observation-procedure-high',
        type: 'text',
        title: 'Practical: Observation at High-Power Magnification',
        titleCn: '實驗：高倍放大觀察',
        text: `**Procedure B: Observation at High-Power Magnification**

💡 **Always start with low-power magnification** because the wider field of view allows the specimen to be located more easily.

**Step 1:** Carry out the steps in Part A so that the specimen is in focus at low-power magnification.

**Step 2:** Search the field and select a part of the specimen to observe in detail. Move that part **to the centre** of the field of view.

**Step 3:** Select a **high-power objective** (e.g. 40X) by rotating the nosepiece.

**Step 4:** The specimen should be in rough focus now. Turn the **fine adjustment knob** to get a sharp focus.

⚠️ **CAUTION:**
• Watch the stage from the side when rotating the nosepiece to prevent the objective from touching the slide.
• **Do not use the coarse adjustment knob when using a high-power objective!** Only use the fine adjustment knob.

**Step 5:** Adjust the diaphragm to **brighten** the view if necessary.

**Step 6:** If you cannot get a clear image, follow the steps below:
  a. Keep watching the stage from the side. Raise the stage (or lower the body tube) by turning the coarse adjustment knob until the objective nearly touches the slide.
  b. Look through the eyepiece. Focus the image by turning the **fine adjustment knob**. Adjust the diaphragm to brighten the view if necessary.

**Step 7:** Compare the observations at low-power and high-power magnifications.`,
        translation: `**步驟B：高倍放大觀察**

💡 **始終從低倍放大開始**，因為較寬的視野可以更容易地找到標本。

**第1步：**完成A部分的步驟，使標本在低倍放大下對焦。

**第2步：**搜索視野並選擇要詳細觀察的標本部分。將該部分移動到視野的中心。

**第3步：**通過旋轉物鏡轉換器選擇高倍物鏡（如40X）。

**第4步：**標本現在應該大致對焦。轉動微調節器以獲得清晰對焦。

⚠️ **注意：**
• 旋轉物鏡轉換器時從側面觀察載物台，以防止物鏡接觸載玻片。
• **使用高倍物鏡時不要使用粗調節器！**只使用微調節器。

**第5步：**如有必要，調節光圈以增加亮度。

**第6步：**如果無法獲得清晰圖像，請按以下步驟操作：
  a. 繼續從側面觀察載物台。通過轉動粗調節器升高載物台（或降低鏡筒），直到物鏡幾乎接觸載玻片。
  b. 通過目鏡觀察。轉動微調節器對焦圖像。如有必要，調節光圈以增加亮度。

**第7步：**比較低倍和高倍放大下的觀察結果。`,
        vocabularies: ['high-power', 'low-power', 'field of view', 'nosepiece', 'objective', 'fine adjustment knob', 'coarse adjustment knob', 'diaphragm', 'focus']
      },
      {
        id: 'low-vs-high-power',
        type: 'table',
        title: 'Comparison: Low-Power vs High-Power Magnification',
        titleCn: '比較：低倍放大 vs 高倍放大',
        headers: ['Feature', 'Low-power magnification (e.g. ×100)', 'High-power magnification (e.g. ×400)'],
        headersCn: ['特徵', '低倍放大（如 ×100）', '高倍放大（如 ×400）'],
        vocabularies: ['low-power', 'high-power', 'magnification', 'field of view'],
        data: [
          {
            feature: 'Area of specimen observed',
            featureCn: '觀察到的標本面積',
            lowPower: 'Larger (More cells are observed)',
            lowPowerCn: '較大（觀察到更多細胞）',
            highPower: 'Smaller (Fewer cells are observed)',
            highPowerCn: '較小（觀察到較少細胞）'
          },
          {
            feature: 'Details of specimen observed',
            featureCn: '觀察到的標本細節',
            lowPower: 'Less',
            lowPowerCn: '較少',
            highPower: 'More',
            highPowerCn: '較多'
          },
          {
            feature: 'Brightness of image',
            featureCn: '圖像亮度',
            lowPower: 'Brighter',
            lowPowerCn: '較亮',
            highPower: 'Dimmer',
            highPowerCn: '較暗'
          }
        ]
      },
      {
        id: 'calculating-magnification',
        type: 'text',
        title: 'Calculating Magnification of a Light Microscope',
        titleCn: '計算光學顯微鏡的放大倍數',
        text: `**Magnification** represents how many times an image is larger than the object.

**Total Magnification Formula:**
The **total magnification** of a light microscope depends on the objective and the eyepiece used. It can be calculated by:

**Total magnification = magnification of eyepiece × magnification of objective**

**Example:**
If a 10X eyepiece and a 40X objective are used, the total magnification of the microscope is:
10 × 40 = **400X**

This means the image appears 400 times larger than the actual object!

**Common Combinations:**
| Eyepiece | Objective | Total Magnification |
|----------|-----------|---------------------|
| 10X | 4X | 40X |
| 10X | 10X | 100X |
| 10X | 40X | 400X |
| 16X | 40X | 640X |`,
        translation: `**放大倍數**表示圖像比物體大多少倍。

**總放大倍數公式：**
光學顯微鏡的總放大倍數取決於所使用的物鏡和目鏡。可以通過以下公式計算：

**總放大倍數 = 目鏡放大倍數 × 物鏡放大倍數**

**示例：**
如果使用10X目鏡和40X物鏡，顯微鏡的總放大倍數為：
10 × 40 = **400X**

這意味著圖像看起來比實際物體大400倍！

**常見組合：**
| 目鏡 | 物鏡 | 總放大倍數 |
|----------|-----------|---------------------|
| 10X | 4X | 40X |
| 10X | 10X | 100X |
| 10X | 40X | 400X |
| 16X | 40X | 640X |`,
        vocabularies: ['magnification', 'total magnification', 'eyepiece', 'objective']
      },
      {
        id: 'calculating-actual-size',
        type: 'highlight',
        title: 'Skill Builder: Calculating the Actual Size of an Object',
        titleCn: '技能培養：計算物體的實際大小',
        text: `On a photomicrograph or a biological drawing, magnification is often indicated. We can find out the **actual size** of the object shown using the magnification given.

**Formula:**
**Magnification = size of the image / size of the object**

Rearranged to find actual size:
**Size of object = size of image / magnification**

**Example:**
To calculate the actual size of a white blood cell shown in a photomicrograph:

**Given information:**
• Length of the cell in the photomicrograph = 0.6 cm
• Magnification = 400X

**Steps:**
1. Measure the length of the cell in the photomicrograph using a ruler: 0.6 cm
2. Find out the magnification of the photomicrograph: 400
3. Substitute these values into the equation:
   400 = 0.6 cm / size of the object
4. Solve for the actual size:
   Size of the object = 0.6 cm / 400 = 0.0015 cm = **15 μm**

**Unit Conversions:**
• 1 cm = 10,000 μm
• 1 mm = 1,000 μm
• 1 μm = 0.001 mm = 0.0001 cm`,
        translation: `在顯微照片或生物繪圖上，通常會標明放大倍數。我們可以使用給定的放大倍數找出所顯示物體的實際大小。

**公式：**
**放大倍數 = 圖像大小 / 物體大小**

重新排列以找出實際大小：
**物體大小 = 圖像大小 / 放大倍數**

**示例：**
計算顯微照片中顯示的白血球的實際大小：

**已知信息：**
• 顯微照片中細胞的長度 = 0.6厘米
• 放大倍數 = 400X

**步驟：**
1. 用尺子測量顯微照片中細胞的長度：0.6厘米
2. 找出顯微照片的放大倍數：400
3. 將這些值代入方程：
   400 = 0.6厘米 / 物體大小
4. 求解實際大小：
   物體大小 = 0.6厘米 / 400 = 0.0015厘米 = **15 μm**

**單位換算：**
• 1厘米 = 10,000微米
• 1毫米 = 1,000微米
• 1微米 = 0.001毫米 = 0.0001厘米`
      },
      {
        id: 'dse-tips-practical',
        type: 'highlight',
        title: 'DSE Exam Tips - Microscope Practical Skills',
        titleCn: 'DSE 考試要點 - 顯微鏡實驗技能',
        text: `**Key Points for DSE Biology Exam:**

**1. Always start with LOW-power magnification!**
• Wider field of view → easier to locate specimen
• Then switch to high-power for more detail

**2. Focusing Rules:**
• LOW power: Use coarse adjustment first, then fine adjustment
• HIGH power: Use **ONLY fine adjustment** (NEVER coarse!)

**3. When switching to high power:**
• First move specimen to CENTRE of field of view
• Watch from the SIDE when rotating nosepiece
• Adjust diaphragm if image is too dim

**4. Image is INVERTED:**
• 'p' appears as 'd'
• Move slide LEFT → image moves RIGHT

**5. Magnification Formula:**
• Total = Eyepiece × Objective
• Actual size = Image size / Magnification

**6. Low vs High Power:**
| | Low | High |
|---|---|---|
| Area | Larger | Smaller |
| Detail | Less | More |
| Brightness | Brighter | Dimmer |

**7. Microscope Parts to Know:**
Eyepiece, Objective, Nosepiece, Stage, Coarse adjustment knob, Fine adjustment knob, Diaphragm, Condenser, Light source, Arm, Base, Body tube`,
        translation: `**DSE生物考試要點：**

**1. 始終從低倍放大開始！**
• 較寬視野 → 更容易找到標本
• 然後切換到高倍以獲得更多細節

**2. 對焦規則：**
• 低倍：先用粗調，再用微調
• 高倍：只用微調（絕不用粗調！）

**3. 切換到高倍時：**
• 先將標本移到視野中心
• 旋轉物鏡轉換器時從側面觀察
• 如果圖像太暗，調節光圈

**4. 圖像是倒置的：**
• 'p'顯示為'd'
• 向左移動載玻片 → 圖像向右移動

**5. 放大倍數公式：**
• 總放大倍數 = 目鏡 × 物鏡
• 實際大小 = 圖像大小 / 放大倍數

**6. 低倍 vs 高倍：**
| | 低倍 | 高倍 |
|---|---|---|
| 面積 | 較大 | 較小 |
| 細節 | 較少 | 較多 |
| 亮度 | 較亮 | 較暗 |

**7. 需要知道的顯微鏡部件：**
目鏡、物鏡、物鏡轉換器、載物台、粗調節器、微調節器、光圈、聚光器、光源、鏡臂、底座、鏡筒`
      }
    ]
  },

  // ========== Structure of Cells (Section 2.4) ==========
  'cell-structure': {
    id: 'cell-structure',
    title: 'Structure of Cells',
    titleCn: '細胞的結構',
    language: 'en',
    introduction: {
      text: `In this module, we will explore the **structure of cells** and their **sub-cellular structures** (organelles). Plant cells and animal cells share some common structures, but also have important differences.

There are hundreds of different types of cells in organisms. They vary in shape and size based on their functions. However, all cells share the same **basic structure**: **cytoplasm** bounded by a **cell membrane**, with various **organelles** inside.`,
      translation: `在這個模塊中，我們將探索**細胞的結構**和它們的**亞細胞結構**（細胞器）。植物細胞和動物細胞有一些共同的結構，但也有重要的差異。

生物體中有數百種不同類型的細胞。它們的形狀和大小因其功能而異。然而，所有細胞都具有相同的**基本結構**：由**細胞膜**包圍的**細胞質**，內含各種**細胞器**。`
    },
    sections: [
      {
        id: 'cell-types-overview',
        type: 'text',
        title: 'Different Types of Cells',
        titleCn: '不同類型的細胞',
        text: `**Cells vary in shape and size** depending on their functions. Here are some examples:

**Human Cell Types:**
• **Neurone** - Long, branched cells in the brain (×400) for transmitting nerve impulses
• **Cardiac muscle cell** - Branched cells in the heart (×100) for rhythmic contraction
• **White blood cell** - Round cells in blood (×400) for fighting infection

**Plant Cell Types:**
• **Guard cell** - Kidney-shaped cells in leaves (×200) for controlling stomata
• **Palisade mesophyll cell** - Elongated cells in leaves (×100) packed with chloroplasts for photosynthesis
• **Cortex cell** - Large cells in roots (×200) for storage

Despite their differences, **all cells share the same basic structure**: cytoplasm bounded by a cell membrane, containing various organelles.`,
        translation: `**細胞的形狀和大小因其功能而異**。以下是一些例子：

**人體細胞類型：**
• **神經元** - 大腦中的長分支細胞（×400），用於傳遞神經衝動
• **心肌細胞** - 心臟中的分支細胞（×100），用於有節奏的收縮
• **白血球** - 血液中的圓形細胞（×400），用於對抗感染

**植物細胞類型：**
• **保衛細胞** - 葉片中的腎形細胞（×200），用於控制氣孔
• **柵欄葉肉細胞** - 葉片中的長形細胞（×100），充滿葉綠體進行光合作用
• **皮層細胞** - 根部的大型細胞（×200），用於儲存

儘管存在差異，**所有細胞都具有相同的基本結構**：由細胞膜包圍的細胞質，內含各種細胞器。`,
        vocabularies: ['neurone', 'cardiac muscle cell', 'white blood cell', 'guard cell', 'palisade mesophyll cell', 'cortex cell', 'cytoplasm', 'cell membrane', 'organelle']
      },
      {
        id: 'animal-vs-plant',
        type: 'comparison',
        title: 'Animal Cells vs Plant Cells',
        titleCn: '動物細胞 vs 植物細胞',
        text: `Plant cells and animal cells share the same **basic structure**, but they also have **important differences**.

**Structures found in BOTH animal and plant cells:**
• Cell membrane • Cytoplasm • Nucleus • Rough ER • Smooth ER • Mitochondrion • Ribosome • Vacuole (small in animal cells)

**Structures found ONLY in plant cells:**
• **Cell wall** - A thick, rigid outer layer made of cellulose
• **Chloroplast** - Contains chlorophyll for photosynthesis (in green plant cells only)
• **Large central vacuole** - A large fluid-filled sac containing cell sap

**Key differences:**
• Plant cells are generally **larger** than animal cells
• Plant cells have a **more regular shape** (due to the rigid cell wall)
• Animal cells are more **flexible** and irregular in shape`,
        translation: `植物細胞和動物細胞具有相同的**基本結構**，但也有**重要的差異**。

**動物和植物細胞都有的結構：**
• 細胞膜 • 細胞質 • 細胞核 • 粗糙內質網 • 光滑內質網 • 線粒體 • 核糖體 • 液泡（動物細胞中較小）

**只在植物細胞中發現的結構：**
• **細胞壁** - 由纖維素組成的厚實剛性外層
• **葉綠體** - 含有葉綠素用於光合作用（僅在綠色植物細胞中）
• **大型中央液泡** - 含有細胞液的大型液囊

**主要差異：**
• 植物細胞通常比動物細胞**更大**
• 植物細胞具有**更規則的形狀**（由於剛性細胞壁）
• 動物細胞**更靈活**，形狀不規則`,
        vocabularies: ['cell membrane', 'cytoplasm', 'nucleus', 'rough endoplasmic reticulum', 'smooth endoplasmic reticulum', 'mitochondrion', 'ribosome', 'vacuole', 'cell wall', 'chloroplast', 'large central vacuole', 'cellulose']
      },
      {
        id: 'organelle-nucleus',
        type: 'highlight',
        title: '1. Nucleus',
        titleCn: '1. 細胞核',
        text: `The **nucleus** is the control centre of the cell.

**Key Features:**
• Most cells have **one nucleus** (some cells like muscle cells and liver cells have more than one)
• Mature human red blood cells have **no nucleus**
• It is a **spherical structure** bounded by a **double membrane** called the **nuclear membrane**

**Nuclear Membrane:**
• Has **pores** (nuclear pores) that allow exchange of materials between the nucleus and cytoplasm
• mRNA exits through nuclear pores to reach ribosomes

**Contents:**
• Contains **DNA** - the genetic material that controls all cell activities
• Contains **nucleolus** - involved in making ribosomes

**Function:**
• Contains genetic information (DNA)
• Controls the activities of the cell`,
        translation: `**細胞核**是細胞的控制中心。

**主要特徵：**
• 大多數細胞有**一個細胞核**（某些細胞如肌肉細胞和肝細胞有多個）
• 成熟的人類紅血球**沒有細胞核**
• 它是一個由**雙層膜**（**核膜**）包圍的**球形結構**

**核膜：**
• 有**孔**（核孔），允許物質在細胞核和細胞質之間交換
• mRNA通過核孔到達核糖體

**內含物：**
• 含有**DNA** - 控制所有細胞活動的遺傳物質
• 含有**核仁** - 參與製造核糖體

**功能：**
• 含有遺傳信息（DNA）
• 控制細胞的活動`,
        vocabularies: ['nucleus', 'nuclear membrane', 'nuclear pore', 'DNA', 'nucleolus', 'double membrane', 'genetic material', 'ribosome']
      },
      {
        id: 'organelle-cytoplasm',
        type: 'text',
        title: '2. Cytoplasm',
        titleCn: '2. 細胞質',
        text: `The **cytoplasm** is the jelly-like material that fills the cell.

**Composition:**
• A **jelly-like fluid** consisting mainly of water and proteins

**Functions:**
• **Holds many organelles** (e.g., nucleus, mitochondria)
• Is the **site for many chemical reactions**
• **Allows the movement and transport** of materials inside the cell

The cytoplasm provides the medium where most metabolic reactions take place. Organelles are suspended in the cytoplasm and carry out their specific functions.`,
        translation: `**細胞質**是填充細胞的果凍狀物質。

**組成：**
• 一種**果凍狀液體**，主要由水和蛋白質組成

**功能：**
• **容納許多細胞器**（如細胞核、線粒體）
• 是**許多化學反應的場所**
• **允許物質在細胞內移動和運輸**

細胞質提供了大多數代謝反應發生的介質。細胞器懸浮在細胞質中並執行其特定功能。`,
        vocabularies: ['cytoplasm', 'jelly-like', 'organelle', 'chemical reaction', 'metabolic']
      },
      {
        id: 'organelle-cell-membrane',
        type: 'highlight',
        title: '3. Cell Membrane',
        titleCn: '3. 細胞膜',
        text: `The **cell membrane** is the outer boundary of all cells.

**Structure:**
• A **thin and flexible** membrane
• Made up mainly of **phospholipids** and **proteins**

**Functions:**
• **Encloses the cell** and separates the cell contents from the outside environment
• Is **differentially permeable** (also called selectively permeable)
  - Only allows **certain substances** to pass through
  - Controls what enters and exits the cell
• **Controls the movement** of substances into and out of the cell

The cell membrane acts like a security guard - it decides what can enter and leave the cell!`,
        translation: `**細胞膜**是所有細胞的外邊界。

**結構：**
• 一層**薄而柔軟**的膜
• 主要由**磷脂**和**蛋白質**組成

**功能：**
• **包圍細胞**並將細胞內容物與外部環境分開
• 具有**差異透性**（也稱為選擇性透過）
  - 只允許**某些物質**通過
  - 控制什麼進出細胞
• **控制物質進出細胞的運動**

細胞膜像保安一樣——它決定什麼可以進出細胞！`,
        vocabularies: ['cell membrane', 'phospholipid', 'protein', 'differentially permeable', 'selectively permeable']
      },
      {
        id: 'organelle-cell-wall',
        type: 'highlight',
        title: '4. Cell Wall (Plant Cells Only)',
        titleCn: '4. 細胞壁（僅植物細胞）',
        text: `The **cell wall** is found in **all plant cells** but **NOT in animal cells**.

**Location:**
• The **outermost layer** of plant cells (outside the cell membrane)

**Structure:**
• A **thick, rigid** layer
• Made up mainly of **cellulose**

**Permeability:**
• Is **fully permeable** - allows water and ALL dissolved substances to pass through freely
• Different from cell membrane (which is differentially permeable)

**Functions:**
• **Protects** the cell
• **Supports** the cell
• **Gives shape** to the plant cell

Because the cell wall is rigid, it prevents the cell from bursting when water enters by osmosis. This is why plant cells can become **turgid** (firm and swollen) without bursting.`,
        translation: `**細胞壁**存在於**所有植物細胞**中，但**不存在於動物細胞**中。

**位置：**
• 植物細胞的**最外層**（細胞膜外面）

**結構：**
• 一層**厚實、堅硬**的結構
• 主要由**纖維素**組成

**透性：**
• 具有**全透性** - 允許水和所有溶解物質自由通過
• 與細胞膜不同（細胞膜是差異透性的）

**功能：**
• **保護**細胞
• **支撐**細胞
• **賦予植物細胞形狀**

因為細胞壁是堅硬的，它防止細胞在水通過滲透作用進入時爆裂。這就是為什麼植物細胞可以變得**膨脹**（堅實和腫脹）而不破裂。`,
        vocabularies: ['cell wall', 'cellulose', 'fully permeable', 'rigid', 'turgid']
      },
      {
        id: 'organelle-er',
        type: 'text',
        title: '5. Endoplasmic Reticulum (ER)',
        titleCn: '5. 內質網',
        text: `The **endoplasmic reticulum (ER)** is a network of membrane-bounded sacs.

**Structure:**
• A network of **interconnected membrane-bounded sacs**
• **Continuous** with the outer nuclear membrane
• **Extends throughout** the cytoplasm

**Two Types:**

| | Rough ER | Smooth ER |
|---|---|---|
| **Ribosomes** | Has ribosomes attached | No ribosomes |
| **Appearance** | Rough surface | Smooth surface |
| **Function** | Synthesis of **proteins** | Synthesis of **lipids** |
| **Abundant in** | Cells producing proteins (saliva-secreting cells, pancreatic cells) | Cells producing lipids (cells in testes making sex hormones) |

**Examples:**
• Rough ER abundant in: saliva-secreting cells, pancreatic cells making digestive enzymes
• Smooth ER abundant in: cells in testes that secrete male sex hormones (lipids)`,
        translation: `**內質網**是一個由膜包圍的囊泡網絡。

**結構：**
• 一個**相互連接的膜包圍囊泡**網絡
• 與核膜外層**連續**
• **延伸到整個**細胞質

**兩種類型：**

| | 粗糙內質網 | 光滑內質網 |
|---|---|---|
| **核糖體** | 有核糖體附著 | 無核糖體 |
| **外觀** | 表面粗糙 | 表面光滑 |
| **功能** | 合成**蛋白質** | 合成**脂類** |
| **豐富於** | 產生蛋白質的細胞（唾液分泌細胞、胰腺細胞）| 產生脂類的細胞（睾丸中製造性激素的細胞）|

**例子：**
• 粗糙內質網豐富於：唾液分泌細胞、製造消化酶的胰腺細胞
• 光滑內質網豐富於：睾丸中分泌雄性激素（脂類）的細胞`,
        vocabularies: ['rough endoplasmic reticulum', 'smooth endoplasmic reticulum', 'membrane-bounded', 'ribosome', 'protein', 'lipid', 'synthesis']
      },
      {
        id: 'organelle-ribosome',
        type: 'text',
        title: '6. Ribosome',
        titleCn: '6. 核糖體',
        text: `The **ribosome** is the site of protein synthesis.

**Structure:**
• A **small particle** 
• **NOT surrounded by a membrane** (unlike most other organelles)

**Location:**
• Some ribosomes are **attached to rough ER**
• Others are **lying free** in the cytoplasm

**Function:**
• Involved in the **synthesis of proteins**

Ribosomes read the genetic code from mRNA and assemble amino acids into proteins. They are essential for all cells because proteins are needed for structure, enzymes, and many other functions.`,
        translation: `**核糖體**是蛋白質合成的場所。

**結構：**
• 一個**小顆粒**
• **沒有膜包圍**（與大多數其他細胞器不同）

**位置：**
• 一些核糖體**附著在粗糙內質網上**
• 其他的**自由漂浮**在細胞質中

**功能：**
• 參與**蛋白質的合成**

核糖體讀取mRNA上的遺傳密碼，將氨基酸組裝成蛋白質。它們對所有細胞都至關重要，因為蛋白質是結構、酶和許多其他功能所必需的。`,
        vocabularies: ['ribosome', 'synthesis', 'protein', 'membrane-bounded']
      },
      {
        id: 'organelle-mitochondrion',
        type: 'highlight',
        title: '7. Mitochondrion (plural: Mitochondria)',
        titleCn: '7. 線粒體',
        text: `The **mitochondrion** is the powerhouse of the cell - the main site of respiration.

**Structure:**
• Bounded by a **double membrane**
• **Inner membrane is highly folded** into structures called **cristae**
• The folds (cristae) **increase the surface area** for respiration

**Function:**
• The **main site of respiration**
• Converts **chemical energy in food** into **energy that the cell can use** (ATP)

**Number of Mitochondria:**
• Related to the **energy requirement** of the cell
• Cells that use a lot of energy have **more mitochondria**

| Cell Type | Energy is Required For... |
|---|---|
| Enzyme-secreting cell | Synthesis of enzymes |
| Liver cell | High level of metabolic activities |
| Epithelial cell (small intestine) | Absorption of nutrients |
| Muscle cell | Contraction |
| Root hair cell | Absorption of minerals |`,
        translation: `**線粒體**是細胞的發電廠——呼吸作用的主要場所。

**結構：**
• 由**雙層膜**包圍
• **內膜高度折疊**形成稱為**嵴**的結構
• 褶皺（嵴）**增加呼吸作用的表面積**

**功能：**
• **呼吸作用的主要場所**
• 將**食物中的化學能**轉化為**細胞可以使用的能量**（ATP）

**線粒體的數量：**
• 與細胞的**能量需求**有關
• 使用大量能量的細胞有**更多的線粒體**

| 細胞類型 | 能量用於... |
|---|---|
| 分泌酶的細胞 | 酶的合成 |
| 肝細胞 | 高水平的代謝活動 |
| 上皮細胞（小腸）| 營養物質的吸收 |
| 肌肉細胞 | 收縮 |
| 根毛細胞 | 礦物質的吸收 |`,
        vocabularies: ['mitochondrion', 'double membrane', 'inner membrane', 'cristae', 'respiration', 'energy', 'metabolic', 'epithelial cell', 'root hair cell']
      },
      {
        id: 'organelle-chloroplast',
        type: 'highlight',
        title: '8. Chloroplast (Plant Cells Only)',
        titleCn: '8. 葉綠體（僅植物細胞）',
        text: `The **chloroplast** is where photosynthesis occurs.

**Location:**
• Found in **green plant cells** (e.g., palisade mesophyll cells, guard cells in leaves)
• **NOT present** in animal cells
• Note: Some plant cells like **epidermal cells of onion** and **root hair cells** do NOT have chloroplasts

**Structure:**
• Bounded by a **double membrane**
• Contains a **network of membrane** inside
• Contains **starch grains** (where glucose is stored as starch)

**Contents:**
• Contains a green pigment called **chlorophyll**

**Function:**
• Chlorophyll **captures light energy** and converts it into **chemical energy in food** (glucose) in **photosynthesis**
• **Starch grains** are often present because glucose from photosynthesis is converted to starch and temporarily stored in chloroplasts`,
        translation: `**葉綠體**是光合作用發生的地方。

**位置：**
• 存在於**綠色植物細胞**中（如柵欄葉肉細胞、葉片中的保衛細胞）
• 動物細胞中**不存在**
• 注意：一些植物細胞如**洋蔥表皮細胞**和**根毛細胞**沒有葉綠體

**結構：**
• 由**雙層膜**包圍
• 內部含有**膜網絡**
• 含有**澱粉粒**（葡萄糖以澱粉形式儲存的地方）

**內含物：**
• 含有一種稱為**葉綠素**的綠色色素

**功能：**
• 葉綠素**捕獲光能**並在**光合作用**中將其轉化為**食物中的化學能**（葡萄糖）
• **澱粉粒**經常存在，因為光合作用產生的葡萄糖被轉化為澱粉並暫時儲存在葉綠體中`,
        vocabularies: ['chloroplast', 'photosynthesis', 'chlorophyll', 'double membrane', 'starch grain', 'palisade mesophyll cell', 'guard cell', 'pigment']
      },
      {
        id: 'organelle-vacuole',
        type: 'comparison',
        title: '9. Vacuole',
        titleCn: '9. 液泡',
        text: `The **vacuole** is a fluid-filled sac bounded by a **single membrane**.

**In Animal Cells:**
• Have only a **few small vacuoles** (some have none)
• May contain **water, enzymes, and food**

**In Plant Cells:**
• Often have a **large central vacuole**
• Contains **cell sap** - a liquid containing:
  - Water
  - Dissolved substances (glucose, pigments, waste)

**Function of Large Central Vacuole:**
• **Storage** of water, nutrients, pigments, and waste
• Provides **support** to the plant
• When full of water, the vacuole pushes against the cell wall, making the cell **turgid**
• Turgidity provides support to non-woody plants

**Key Point:**
Plant cells become **turgid** when the large central vacuole is full of water. This provides **support** to the plant.`,
        translation: `**液泡**是由**單層膜**包圍的充滿液體的囊。

**在動物細胞中：**
• 只有**少數小液泡**（有些沒有）
• 可能含有**水、酶和食物**

**在植物細胞中：**
• 通常有一個**大型中央液泡**
• 含有**細胞液** - 一種含有以下物質的液體：
  - 水
  - 溶解物質（葡萄糖、色素、廢物）

**大型中央液泡的功能：**
• **儲存**水、營養物、色素和廢物
• 為植物提供**支撐**
• 當充滿水時，液泡推壓細胞壁，使細胞**膨脹**
• 膨壓為非木本植物提供支撐

**關鍵點：**
當大型中央液泡充滿水時，植物細胞變得**膨脹**。這為植物提供**支撐**。`,
        vocabularies: ['vacuole', 'large central vacuole', 'cell sap', 'turgid', 'turgidity', 'pigment', 'support']
      },
      {
        id: 'cell-structure-summary-table',
        type: 'table',
        title: 'Summary: Sub-cellular Structures',
        titleCn: '總結：亞細胞結構',
        text: `**Complete comparison of sub-cellular structures in animal and plant cells:**

| Sub-cellular Structure | Animal Cells | Plant Cells | Function |
|---|:---:|:---:|---|
| **Nucleus** | ✓ | ✓ | Contains DNA, controls cell activities |
| **Cytoplasm** | ✓ | ✓ | Holds organelles, site for reactions, allows transport |
| **Cell membrane** | ✓ | ✓ | Encloses cell, controls substance movement |
| **Cell wall** | ✗ | ✓ | Protects, supports, gives shape to plant cell |
| **Rough ER** | ✓ | ✓ | Site for protein synthesis |
| **Smooth ER** | ✓ | ✓ | Site for lipid synthesis |
| **Ribosome** | ✓ | ✓ | Involved in protein synthesis |
| **Mitochondrion** | ✓ | ✓ | Main site of respiration, converts food energy to ATP |
| **Chloroplast** | ✗ | ✓* | Contains chlorophyll, photosynthesis (*green cells only) |
| **Vacuole** | ✓ (small/absent) | ✓ (large central) | Storage, support (provides turgidity in plants) |

**Key Points to Remember:**
• Plant cells have cell wall, chloroplast, and large central vacuole
• Not ALL plant cells have chloroplasts (only green cells)
• Not ALL plant cells have a large central vacuole`,
        translation: `**動物和植物細胞亞細胞結構的完整比較：**

| 亞細胞結構 | 動物細胞 | 植物細胞 | 功能 |
|---|:---:|:---:|---|
| **細胞核** | ✓ | ✓ | 含有DNA，控制細胞活動 |
| **細胞質** | ✓ | ✓ | 容納細胞器，反應場所，允許運輸 |
| **細胞膜** | ✓ | ✓ | 包圍細胞，控制物質運動 |
| **細胞壁** | ✗ | ✓ | 保護、支撐、賦予植物細胞形狀 |
| **粗糙內質網** | ✓ | ✓ | 蛋白質合成場所 |
| **光滑內質網** | ✓ | ✓ | 脂類合成場所 |
| **核糖體** | ✓ | ✓ | 參與蛋白質合成 |
| **線粒體** | ✓ | ✓ | 呼吸作用主要場所，將食物能量轉化為ATP |
| **葉綠體** | ✗ | ✓* | 含有葉綠素，光合作用（*僅綠色細胞）|
| **液泡** | ✓（小/無）| ✓（大型中央）| 儲存，支撐（在植物中提供膨壓）|

**要記住的關鍵點：**
• 植物細胞有細胞壁、葉綠體和大型中央液泡
• 不是所有植物細胞都有葉綠體（只有綠色細胞）
• 不是所有植物細胞都有大型中央液泡`,
        vocabularies: ['sub-cellular structure', 'nucleus', 'cytoplasm', 'cell membrane', 'cell wall', 'rough endoplasmic reticulum', 'smooth endoplasmic reticulum', 'ribosome', 'mitochondrion', 'chloroplast', 'vacuole']
      },
      {
        id: 'practical-drawing',
        type: 'highlight',
        title: 'Practical Skill: Drawing Biological Diagrams',
        titleCn: '實驗技能：繪製生物圖',
        text: `Scientists draw **biological diagrams** to record what they observe. To make a clear drawing, follow these rules:

**Drawing Guidelines:**
• Use a **sharp HB pencil**
• Draw only a **few representative cells** (not every cell you see)
• The drawing should **resemble the specimen** - structures should be **in proportion**
• **Label** the relevant structures
• Give a **title** for your drawing
• State the **magnification** of the drawing

**Good vs Poor Biological Diagrams:**

| Good Diagram | Poor Diagram |
|---|---|
| Label lines are **straight** | Label lines cross one another |
| Drawing lines are **smooth and continuous** | Drawing lines are sketchy |
| **No shading** used | Shading used |
| **No arrows** on label lines | Uses arrows on label lines |
| Has **title and magnification** | Missing title or magnification |

**Example Title:** "A plant cell (×180)"`,
        translation: `科學家繪製**生物圖**來記錄他們的觀察。要畫出清晰的圖，請遵循以下規則：

**繪圖指南：**
• 使用**尖銳的HB鉛筆**
• 只畫**少數代表性細胞**（不是你看到的每個細胞）
• 繪圖應該**與標本相似** - 結構應該**成比例**
• **標注**相關結構
• 為你的繪圖加上**標題**
• 註明繪圖的**放大倍數**

**好圖 vs 差圖：**

| 好圖 | 差圖 |
|---|---|
| 標注線是**直的** | 標注線相互交叉 |
| 繪圖線條**平滑連續** | 繪圖線條粗糙 |
| **不使用陰影** | 使用陰影 |
| 標注線**不使用箭頭** | 標注線使用箭頭 |
| 有**標題和放大倍數** | 缺少標題或放大倍數 |

**示例標題：** "植物細胞 (×180)"`,
        vocabularies: ['biological diagram', 'magnification', 'label', 'proportion']
      },
      {
        id: 'practical-animal-cells',
        type: 'text',
        title: 'Practical 2.2: Observing Animal Cells',
        titleCn: '實驗2.2：觀察動物細胞',
        text: `**Preparation of temporary mounts and observation of animal cells**

**Specimen:** Ox cornea (or human cheek cells)

**Stain:** Methylene blue solution (makes cell structures, especially nucleus, more visible)

⚠️ **Caution:**
• Methylene blue may cause haemolysis in people with G6PD deficiency - use safranine solution instead
• Methylene blue solution is harmful - avoid contact with skin
• Cover any exposed wounds with sterile dressings and wear disposable gloves

**Procedure:**
1. Touch the ox cornea gently with the **middle of a clean slide**
2. Add a drop of **methylene blue solution** to stain the cells
3. Use **forceps** to place a **cover slip** over the cells:
   - Let the edge of cover slip touch the solution
   - **Slowly lower** the cover slip to avoid air bubbles
   - Use tissue paper to soak up excess solution
4. **Observe** under high-power magnification
5. **Draw** a labelled high-power diagram of the cells
6. **Dispose** of the slide and gloves properly; wash your hands thoroughly`,
        translation: `**製備臨時裝片和觀察動物細胞**

**標本：** 牛角膜（或人類面頰細胞）

**染劑：** 亞甲藍溶液（使細胞結構，特別是細胞核，更加明顯）

⚠️ **注意事項：**
• 亞甲藍可能導致G6PD缺乏症患者溶血 - 改用番紅溶液
• 亞甲藍溶液有害 - 避免接觸皮膚
• 用無菌敷料覆蓋任何傷口，並戴上一次性手套

**步驟：**
1. 用**乾淨載玻片的中央**輕輕觸碰牛角膜
2. 加一滴**亞甲藍溶液**染色細胞
3. 用**鑷子**放置**蓋玻片**：
   - 讓蓋玻片邊緣觸碰溶液
   - **慢慢放下**蓋玻片以避免氣泡
   - 用紙巾吸去多餘溶液
4. 在高倍放大下**觀察**
5. **繪製**標注的高倍圖
6. 妥善**處理**載玻片和手套；徹底洗手`,
        vocabularies: ['temporary mount', 'methylene blue', 'staining', 'cover slip', 'forceps', 'specimen']
      },
      {
        id: 'practical-plant-cells',
        type: 'text',
        title: 'Practical 2.3: Observing Plant Cells',
        titleCn: '實驗2.3：觀察植物細胞',
        text: `**Preparation of temporary mounts and observation of plant cells**

**A. Onion epidermis**
1. Peel off the **inner epidermis** of the fleshy layer of an onion
2. Cut out a **small piece** of epidermis
3. Mount with a drop of **iodine solution**
⚠️ Caution: Iodine solution is an irritant - avoid skin contact; wear gloves

**B. Hydrilla leaf**
• Mount a *Hydrilla* leaf with a drop of **water**

**C. Pollen grains**
1. Touch a piece of sticky tape with the **anther** of a flower (e.g., Gladiolus or lily)
2. Stick the tape onto a slide
⚠️ Caution: Do not perform if allergic to pollen

**D. Onion root tip cells**
1. Prepare with **macerating fluid** for 2-3 days to soften
2. Mount the macerated root tip with water
⚠️ Caution: Macerating fluid is corrosive - avoid contact

**E. Banana tissue**
1. Take a small amount from the soft white middle of a banana
2. Put in a drop of water on a slide
3. Separate cells with a **toothpick**
4. Mount with a drop of **iodine solution**

**Results:** You can observe: cell wall, nucleus, chloroplasts (in Hydrilla), starch grains (in banana)`,
        translation: `**製備臨時裝片和觀察植物細胞**

**A. 洋蔥表皮**
1. 從洋蔥肉質層剝下**內表皮**
2. 切下一**小片**表皮
3. 用一滴**碘液**封片
⚠️ 注意：碘液是刺激物 - 避免皮膚接觸；戴手套

**B. 水藻葉**
• 用一滴**水**封片*Hydrilla*葉

**C. 花粉粒**
1. 用膠帶觸碰花的**花藥**（如劍蘭或百合）
2. 將膠帶貼在載玻片上
⚠️ 注意：如果對花粉過敏請勿進行

**D. 洋蔥根尖細胞**
1. 用**浸離液**處理2-3天使其軟化
2. 用水封片浸離後的根尖
⚠️ 注意：浸離液具腐蝕性 - 避免接觸

**E. 香蕉組織**
1. 從香蕉柔軟的白色中央部分取一小量
2. 放在載玻片上的一滴水中
3. 用**牙籤**分離細胞
4. 用一滴**碘液**封片

**結果：** 你可以觀察到：細胞壁、細胞核、葉綠體（在水藻中）、澱粉粒（在香蕉中）`,
        vocabularies: ['epidermis', 'iodine solution', 'macerating fluid', 'corrosive', 'staining', 'cell wall', 'chloroplast', 'starch grain']
      },
      {
        id: 'dse-tips-cell-structure',
        type: 'highlight',
        title: 'DSE Exam Tips - Cell Structure',
        titleCn: 'DSE考試要點 - 細胞結構',
        text: `**Key Points for DSE Biology Exam:**

**1. Plant vs Animal Cells - Common Questions:**
• Which structures are found in plant cells but NOT animal cells?
  → **Cell wall, chloroplast, large central vacuole**
• Be careful: NOT all plant cells have chloroplasts (only green cells)
• NOT all plant cells have large central vacuoles

**2. Organelle Functions - Must Know:**
| Organelle | Key Function |
|---|---|
| Nucleus | Contains DNA, controls cell |
| Mitochondrion | Respiration (energy release) |
| Chloroplast | Photosynthesis |
| Ribosome | Protein synthesis |
| Rough ER | Protein synthesis |
| Smooth ER | Lipid synthesis |

**3. Common DSE Question Types:**
• Labelling cell diagrams
• Identifying organelles from electron micrographs
• Explaining why certain cells have many mitochondria
• Comparing animal and plant cells

**4. Drawing Skills:**
• No shading, straight label lines, include title and magnification
• Labels should not cross each other

**5. Practical Reminders:**
• Methylene blue for animal cells
• Iodine solution for plant cells (also tests for starch)
• Always lower cover slip at an angle to avoid air bubbles`,
        translation: `**DSE生物考試要點：**

**1. 植物 vs 動物細胞 - 常見問題：**
• 哪些結構存在於植物細胞但不存在於動物細胞？
  → **細胞壁、葉綠體、大型中央液泡**
• 注意：不是所有植物細胞都有葉綠體（只有綠色細胞）
• 不是所有植物細胞都有大型中央液泡

**2. 細胞器功能 - 必須知道：**
| 細胞器 | 主要功能 |
|---|---|
| 細胞核 | 含有DNA，控制細胞 |
| 線粒體 | 呼吸作用（釋放能量）|
| 葉綠體 | 光合作用 |
| 核糖體 | 蛋白質合成 |
| 粗糙內質網 | 蛋白質合成 |
| 光滑內質網 | 脂類合成 |

**3. 常見DSE題型：**
• 標注細胞圖
• 從電子顯微照片中識別細胞器
• 解釋為什麼某些細胞有很多線粒體
• 比較動物和植物細胞

**4. 繪圖技巧：**
• 不涂陰影，直的標注線，包含標題和放大倍數
• 標注線不應相互交叉

**5. 實驗提醒：**
• 亞甲藍用於動物細胞
• 碘液用於植物細胞（也測試澱粉）
• 始終傾斜放下蓋玻片以避免氣泡`,
        vocabularies: ['cell wall', 'chloroplast', 'large central vacuole', 'mitochondrion', 'ribosome', 'rough endoplasmic reticulum', 'smooth endoplasmic reticulum', 'methylene blue', 'iodine solution']
      }
    ]
  },
}

// 練習題數據
export const quizzes = {
  'chemicals-of-life-quiz': {
    id: 'chemicals-of-life-quiz',
    title: 'Chemicals of Life - Practice Quiz',
    titleCn: '生命的化學物質 - 練習測驗',
    topicId: 'cell-basic-unit',
    moduleId: 'chemicals-of-life',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Which of the following is NOT an organic constituent of organisms?',
        questionCn: '以下哪項不是生物體的有機成分？',
        options: ['Carbohydrates', 'Proteins', 'Water', 'Nucleic acids'],
        optionsCn: ['碳水化合物', '蛋白質', '水', '核酸'],
        correctAnswer: 2,
        explanation: 'Water is an inorganic constituent. Organic constituents contain carbon.',
        explanationCn: '水是無機成分。有機成分含有碳。'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Approximately what percentage of the human body is water?',
        questionCn: '人體中水約佔多少百分比？',
        options: ['30%', '45%', '60%', '80%'],
        correctAnswer: 2,
        explanation: 'Water makes up about 60% of human body weight.',
        explanationCn: '水約佔人體重量的60%。'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'In photosynthesis, water acts as a:',
        questionCn: '在光合作用中，水作為：',
        options: ['Product', 'Reactant', 'Enzyme', 'Catalyst'],
        optionsCn: ['產物', '反應物', '酶', '催化劑'],
        correctAnswer: 1,
        explanation: 'In photosynthesis, water is a reactant: CO₂ + H₂O → glucose + O₂',
        explanationCn: '在光合作用中，水是反應物：二氧化碳 + 水 → 葡萄糖 + 氧氣'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Which inorganic ion is a component of chlorophyll?',
        questionCn: '哪種無機離子是葉綠素的成分？',
        options: ['Iron (Fe²⁺)', 'Calcium (Ca²⁺)', 'Magnesium (Mg²⁺)', 'Phosphate (PO₄³⁻)'],
        optionsCn: ['鐵', '鈣', '鎂', '磷酸鹽'],
        correctAnswer: 2,
        explanation: 'Magnesium is a component of chlorophyll in plants.',
        explanationCn: '鎂是植物葉綠素的成分。'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Iron is a component of which molecule in red blood cells?',
        questionCn: '鐵是紅血球中哪種分子的成分？',
        options: ['Chlorophyll', 'Haemoglobin', 'DNA', 'ATP'],
        optionsCn: ['葉綠素', '血紅蛋白', 'DNA', 'ATP'],
        correctAnswer: 1,
        explanation: 'Iron is a component of haemoglobin, the oxygen-carrying molecule.',
        explanationCn: '鐵是血紅蛋白的成分，血紅蛋白是攜氧分子。'
      },
      {
        id: 6,
        type: 'true-false',
        question: 'Calcium is only important for bones and teeth.',
        questionCn: '鈣只對骨骼和牙齒重要。',
        correctAnswer: false,
        explanation: 'False. Calcium is also needed for blood clotting, muscle contraction, and nerve signals.',
        explanationCn: '錯誤。鈣還用於血液凝固、肌肉收縮和神經信號。'
      },
      {
        id: 7,
        type: 'true-false',
        question: 'Nitrate is used by plants as a source of nitrogen for protein synthesis.',
        questionCn: '植物使用硝酸鹽作為蛋白質合成的氮源。',
        correctAnswer: true,
        explanation: 'True. Nitrate provides nitrogen for plants to synthesize proteins.',
        explanationCn: '正確。硝酸鹽為植物提供氮來合成蛋白質。'
      },
      {
        id: 8,
        type: 'true-false',
        question: 'Water makes up about 98% of the human body.',
        questionCn: '水約佔人體的98%。',
        correctAnswer: false,
        explanation: 'False. Water makes up about 60% of human body weight. Some organisms like jellyfish can be 98% water.',
        explanationCn: '錯誤。水約佔人體重量的60%。某些生物如水母可達98%。'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Which function does water NOT perform in organisms?',
        questionCn: '水在生物體內不執行以下哪個功能？',
        options: ['Cooling agent', 'Energy storage', 'Transport medium', 'Provides support'],
        optionsCn: ['冷卻劑', '能量儲存', '運輸介質', '提供支撐'],
        correctAnswer: 1,
        explanation: 'Water does not store energy. Energy is stored in molecules like carbohydrates and lipids.',
        explanationCn: '水不儲存能量。能量儲存在碳水化合物和脂質等分子中。'
      },
      {
        id: 10,
        type: 'multiple-choice',
        question: 'Phosphate is a component of all EXCEPT:',
        questionCn: '磷酸鹽是以下所有成分，除了：',
        options: ['DNA', 'Cell membranes', 'Haemoglobin', 'Bones'],
        optionsCn: ['DNA', '細胞膜', '血紅蛋白', '骨骼'],
        correctAnswer: 2,
        explanation: 'Phosphate is in DNA, cell membranes (phospholipids), and bones, but not in haemoglobin.',
        explanationCn: '磷酸鹽存在於DNA、細胞膜（磷脂）和骨骼中，但不在血紅蛋白中。'
      },
      // ========== Organic Constituents Quiz Questions ==========
      {
        id: 11,
        type: 'multiple-choice',
        question: 'Which of the following about inorganic ions in organisms is correct?',
        questionCn: '關於生物體中無機離子，以下哪項是正確的？',
        options: [
          'Magnesium is a component of teeth',
          'Nitrate is a source of nitrogen for the synthesis of proteins',
          'Iron is a component of chlorophyll',
          'Calcium activates enzymes in plants'
        ],
        optionsCn: [
          '鎂是牙齒的成分',
          '硝酸鹽是蛋白質合成的氮源',
          '鐵是葉綠素的成分',
          '鈣在植物中激活酶'
        ],
        correctAnswer: 1,
        explanation: 'Nitrate (NO₃⁻) is a source of nitrogen for the synthesis of proteins in plants.',
        explanationCn: '硝酸鹽（NO₃⁻）是植物合成蛋白質的氮源。'
      },
      {
        id: 12,
        type: 'multiple-choice',
        question: 'Which of the following are the functions of carbohydrates in organisms?\n(1) Makes up cell walls\n(2) Provides energy\n(3) Regulates chemical reactions',
        questionCn: '以下哪些是碳水化合物在生物體內的功能？\n(1) 構成細胞壁\n(2) 提供能量\n(3) 調節化學反應',
        options: [
          '(1) and (2) only',
          '(1) and (3) only',
          '(2) and (3) only',
          '(1), (2) and (3)'
        ],
        optionsCn: [
          '僅 (1) 和 (2)',
          '僅 (1) 和 (3)',
          '僅 (2) 和 (3)',
          '(1)、(2) 和 (3)'
        ],
        correctAnswer: 0,
        explanation: 'Carbohydrates: (1) Cellulose makes up plant cell walls, (2) Glucose provides energy. (3) Regulating chemical reactions is the function of enzymes (proteins), not carbohydrates.',
        explanationCn: '碳水化合物：(1) 纖維素構成植物細胞壁，(2) 葡萄糖提供能量。(3) 調節化學反應是酶（蛋白質）的功能，不是碳水化合物。'
      },
      {
        id: 13,
        type: 'multiple-choice',
        question: 'Starch is an energy reserve in:',
        questionCn: '澱粉是以下哪種生物的能量儲備：',
        options: ['Animals only', 'Plants only', 'Both animals and plants', 'Neither animals nor plants'],
        optionsCn: ['僅動物', '僅植物', '動物和植物都是', '兩者都不是'],
        correctAnswer: 1,
        explanation: 'Starch is an energy reserve in plants. Animals use glycogen for energy storage.',
        explanationCn: '澱粉是植物的能量儲備。動物用糖原儲存能量。'
      },
      {
        id: 14,
        type: 'multiple-choice',
        question: 'Which carbohydrate is a major component of plant cell walls?',
        questionCn: '哪種碳水化合物是植物細胞壁的主要成分？',
        options: ['Glucose', 'Starch', 'Glycogen', 'Cellulose'],
        optionsCn: ['葡萄糖', '澱粉', '糖原', '纖維素'],
        correctAnswer: 3,
        explanation: 'Cellulose is a major component of plant cell walls, providing structural support.',
        explanationCn: '纖維素是植物細胞壁的主要成分，提供結構支撐。'
      },
      {
        id: 15,
        type: 'multiple-choice',
        question: 'Which of the following is NOT a function of triglycerides in animals?',
        questionCn: '以下哪項不是三酸甘油酯在動物體內的功能？',
        options: ['Energy reserve', 'Insulation', 'Protecting internal organs', 'Forming cell membranes'],
        optionsCn: ['能量儲備', '絕緣', '保護內臟', '形成細胞膜'],
        correctAnswer: 3,
        explanation: 'Cell membranes are made of phospholipids, not triglycerides. Triglycerides function as energy reserves, insulators, and shock absorbers.',
        explanationCn: '細胞膜由磷脂組成，不是三酸甘油酯。三酸甘油酯作為能量儲備、絕緣體和減震器。'
      },
      {
        id: 16,
        type: 'multiple-choice',
        question: 'Which protein function involves haemoglobin?',
        questionCn: '哪種蛋白質功能涉及血紅蛋白？',
        options: ['Regulating chemical reactions', 'Making up body tissues', 'Transport of substances', 'Protecting against pathogens'],
        optionsCn: ['調節化學反應', '構成身體組織', '物質運輸', '抵抗病原體'],
        correctAnswer: 2,
        explanation: 'Haemoglobin is involved in the transport of oxygen in red blood cells.',
        explanationCn: '血紅蛋白參與紅血球中氧氣的運輸。'
      },
      {
        id: 17,
        type: 'true-false',
        question: 'DNA carries genetic information and controls activities of cells.',
        questionCn: 'DNA攜帶遺傳信息並控制細胞活動。',
        correctAnswer: true,
        explanation: 'True. DNA is the genetic material that carries genetic information which controls cell activities and determines the features of organisms.',
        explanationCn: '正確。DNA是遺傳物質，攜帶控制細胞活動和決定生物體特徵的遺傳信息。'
      },
      {
        id: 18,
        type: 'true-false',
        question: 'RNA is involved in the synthesis of proteins.',
        questionCn: 'RNA參與蛋白質的合成。',
        correctAnswer: true,
        explanation: 'True. RNA carries genetic instructions from DNA to ribosomes where proteins are synthesized.',
        explanationCn: '正確。RNA將遺傳指令從DNA傳遞到核糖體，在那裡合成蛋白質。'
      },
      {
        id: 19,
        type: 'multiple-choice',
        question: 'Proteins contain the elements:',
        questionCn: '蛋白質含有以下元素：',
        options: ['C, H, O only', 'C, H, O, N', 'C, H, O, N, P', 'C, H, O, S only'],
        optionsCn: ['僅 C, H, O', 'C, H, O, N', 'C, H, O, N, P', '僅 C, H, O, S'],
        correctAnswer: 1,
        explanation: 'Proteins contain carbon (C), hydrogen (H), oxygen (O), and nitrogen (N). Some proteins also contain sulphur (S).',
        explanationCn: '蛋白質含有碳（C）、氫（H）、氧（O）和氮（N）。某些蛋白質還含有硫（S）。'
      },
      {
        id: 20,
        type: 'multiple-choice',
        question: 'Which of the following protects the body against pathogens?',
        questionCn: '以下哪項保護身體免受病原體侵害？',
        options: ['Enzymes', 'Hormones', 'Antibodies', 'Haemoglobin'],
        optionsCn: ['酶', '激素', '抗體', '血紅蛋白'],
        correctAnswer: 2,
        explanation: 'Antibodies are proteins that help protect the body against pathogens (viruses, bacteria, etc.).',
        explanationCn: '抗體是幫助保護身體免受病原體（病毒、細菌等）侵害的蛋白質。'
      }
    ]
  },
  'discovery-of-cells-quiz': {
    id: 'discovery-of-cells-quiz',
    title: 'Discovery of Cells and Cell Theory - Practice Quiz',
    titleCn: '細胞的發現和細胞學說 - 練習測驗',
    topicId: 'cell-basic-unit',
    moduleId: 'discovery-of-cells',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Which of the following is stated in the Cell Theory?',
        questionCn: '以下哪項是細胞學說中陳述的？',
        options: [
          'All organisms have similar chemical constituents',
          'Cells vary in size and shape',
          'All cells contain DNA as their genetic material',
          'All cells come from pre-existing cells'
        ],
        optionsCn: [
          '所有生物體都有相似的化學成分',
          '細胞的大小和形狀各不相同',
          '所有細胞都含有DNA作為遺傳物質',
          '所有細胞都來自先前存在的細胞'
        ],
        correctAnswer: 3,
        explanation: 'The Cell Theory states: (1) all organisms are made of cells, (2) the cell is the basic unit of life, and (3) all cells come from pre-existing cells.',
        explanationCn: '細胞學說指出：(1) 所有生物體都由細胞組成，(2) 細胞是生命的基本單位，(3) 所有細胞都來自先前存在的細胞。'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Sir Robert Hooke is the first scientist who used the light microscope to observe cells. His study led to:',
        questionCn: '羅伯特·胡克爵士是第一位使用光學顯微鏡觀察細胞的科學家。他的研究導致了：',
        options: [
          'the discovery of virus',
          'the formulation of the Cell Theory',
          'the discovery of bacteria as a disease-causing agent',
          'the discovery of the fine structure of cell organelles'
        ],
        optionsCn: [
          '病毒的發現',
          '細胞學說的構想',
          '細菌作為致病因子的發現',
          '細胞器精細結構的發現'
        ],
        correctAnswer: 1,
        explanation: 'Robert Hooke\'s discovery of cells in 1665 raised interest in microscopic studies, which eventually led to the formulation of the Cell Theory by Schwann in 1839.',
        explanationCn: '羅伯特·胡克於1665年發現細胞，引起了對顯微研究的興趣，最終導致施旺於1839年構想了細胞學說。'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Who proposed the Cell Theory and in what year?',
        questionCn: '誰提出了細胞學說，是在哪一年？',
        options: [
          'Robert Hooke, 1665',
          'Robert Brown, 1831',
          'Theodor Schwann, 1839',
          'Leeuwenhoek, 1674'
        ],
        optionsCn: [
          '羅伯特·胡克，1665年',
          '羅伯特·布朗，1831年',
          '特奧多爾·施旺，1839年',
          '列文虎克，1674年'
        ],
        correctAnswer: 2,
        explanation: 'Theodor Schwann proposed the Cell Theory in 1839, based on his findings and those of Matthias Schleiden.',
        explanationCn: '特奧多爾·施旺於1839年基於他和馬蒂亞斯·施萊登的發現提出了細胞學說。'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'What did Robert Hooke actually observe when he looked at cork under his microscope?',
        questionCn: '羅伯特·胡克用顯微鏡觀察軟木時實際看到了什麼？',
        options: [
          'Living plant cells',
          'Cell walls of dead cells',
          'Microorganisms',
          'Cell nuclei'
        ],
        optionsCn: [
          '活的植物細胞',
          '死細胞的細胞壁',
          '微生物',
          '細胞核'
        ],
        correctAnswer: 1,
        explanation: 'Robert Hooke observed the cell walls of dead cork cells. Cork is made of dead plant tissue, so he saw the empty boxes (cell walls) but not living cells.',
        explanationCn: '羅伯特·胡克觀察到的是死亡軟木細胞的細胞壁。軟木是由死亡的植物組織組成的，所以他看到的是空盒子（細胞壁），而不是活細胞。'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Who first observed living cells (microorganisms)?',
        questionCn: '誰首次觀察到活細胞（微生物）？',
        options: [
          'Robert Hooke',
          'Antoni van Leeuwenhoek',
          'Robert Brown',
          'Matthias Schleiden'
        ],
        optionsCn: [
          '羅伯特·胡克',
          '安東尼·范·列文虎克',
          '羅伯特·布朗',
          '馬蒂亞斯·施萊登'
        ],
        correctAnswer: 1,
        explanation: 'Antoni van Leeuwenhoek first observed living cells (microorganisms) in pond water in 1674, using his simple single-lens microscope.',
        explanationCn: '安東尼·范·列文虎克於1674年首次使用他的簡單單透鏡顯微鏡在池塘水中觀察到活細胞（微生物）。'
      },
      {
        id: 6,
        type: 'true-false',
        question: 'The cell is the basic unit of life.',
        questionCn: '細胞是生命的基本單位。',
        correctAnswer: true,
        explanation: 'True. This is one of the three statements of the Cell Theory. The cell is the smallest unit that shows all the characteristics of life.',
        explanationCn: '正確。這是細胞學說的三條陳述之一。細胞是顯示所有生命特徵的最小單位。'
      },
      {
        id: 7,
        type: 'true-false',
        question: 'New cells can appear from nothing without pre-existing cells.',
        questionCn: '新細胞可以在沒有先前存在的細胞的情況下從無到有出現。',
        correctAnswer: false,
        explanation: 'False. According to the Cell Theory, all cells come from pre-existing cells. Cells cannot spontaneously appear from nothing.',
        explanationCn: '錯誤。根據細胞學說，所有細胞都來自先前存在的細胞。細胞不能自發地從無到有出現。'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'Who discovered the nucleus in cells?',
        questionCn: '誰發現了細胞核？',
        options: [
          'Robert Hooke in 1665',
          'Leeuwenhoek in 1674',
          'Robert Brown in 1831',
          'Schwann in 1839'
        ],
        optionsCn: [
          '羅伯特·胡克於1665年',
          '列文虎克於1674年',
          '羅伯特·布朗於1831年',
          '施旺於1839年'
        ],
        correctAnswer: 2,
        explanation: 'Robert Brown discovered the nucleus in 1831 while observing cells of an orchid leaf.',
        explanationCn: '羅伯特·布朗於1831年在觀察蘭花葉細胞時發現了細胞核。'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'What is the approximate magnification of a modern light microscope?',
        questionCn: '現代光學顯微鏡的大約放大倍數是多少？',
        options: [
          '50 times',
          '200 times',
          '1600 times',
          '12,000 times'
        ],
        optionsCn: [
          '50倍',
          '200倍',
          '1600倍',
          '12,000倍'
        ],
        correctAnswer: 2,
        explanation: 'Modern light microscopes have a magnification of about 1600 times. Electron microscopes can magnify up to 12,000 times or more.',
        explanationCn: '現代光學顯微鏡的放大倍數約為1600倍。電子顯微鏡可以放大到12,000倍或更多。'
      },
      {
        id: 10,
        type: 'true-false',
        question: 'Scientific knowledge advances with improvement in technology.',
        questionCn: '科學知識隨著技術的進步而發展。',
        correctAnswer: true,
        explanation: 'True. The development of microscopes led to the discovery of cells and the formulation of the Cell Theory. Better microscopes allowed scientists to observe more details of cells.',
        explanationCn: '正確。顯微鏡的發展導致了細胞的發現和細胞學說的構想。更好的顯微鏡使科學家能夠觀察到細胞的更多細節。'
      }
    ]
  },
  'microscopes-tools-quiz': {
    id: 'microscopes-tools-quiz',
    title: 'Microscopes: Tools for Studying Cells - Practice Quiz',
    titleCn: '顯微鏡：研究細胞的工具 - 練習測驗',
    topicId: 'cell-basic-unit',
    moduleId: 'microscopes-tools',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Which of the following is an advantage of light microscopes over electron microscopes?',
        questionCn: '以下哪項是光學顯微鏡相對於電子顯微鏡的優勢？',
        options: [
          'Higher magnification',
          'Higher resolution',
          'Living specimens can be observed',
          'Can show more details'
        ],
        optionsCn: [
          '更高的放大倍數',
          '更高的分辨率',
          '可以觀察活的標本',
          '可以顯示更多細節'
        ],
        correctAnswer: 2,
        explanation: 'Light microscopes can observe living specimens, while electron microscopes require dead, specially prepared specimens. Electron microscopes have higher magnification and resolution.',
        explanationCn: '光學顯微鏡可以觀察活的標本，而電子顯微鏡需要死的、經過特殊處理的標本。電子顯微鏡具有更高的放大倍數和分辨率。'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'What is the maximum magnification of a TEM (Transmission Electron Microscope)?',
        questionCn: 'TEM（透射電子顯微鏡）的最大放大倍數是多少？',
        options: [
          '1,600 times',
          '200,000 times',
          '1,500,000 times',
          '12,000 times'
        ],
        optionsCn: [
          '1,600倍',
          '200,000倍',
          '1,500,000倍',
          '12,000倍'
        ],
        correctAnswer: 2,
        explanation: 'TEM can magnify up to 1,500,000 times (1.5 million times). Light microscopes max at 1,600x, SEM at 200,000x.',
        explanationCn: 'TEM可以放大高達1,500,000倍（150萬倍）。光學顯微鏡最大1,600倍，SEM最大200,000倍。'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'TEM produces images that are:',
        questionCn: 'TEM產生的圖像是：',
        options: [
          'Coloured and three-dimensional',
          'Black and white and two-dimensional',
          'Coloured and two-dimensional',
          'Black and white and three-dimensional'
        ],
        optionsCn: [
          '彩色和三維的',
          '黑白和二維的',
          '彩色和二維的',
          '黑白和三維的'
        ],
        correctAnswer: 1,
        explanation: 'TEM produces black and white, two-dimensional (2D) images showing INTERNAL structures. SEM produces black and white, three-dimensional (3D) images showing EXTERNAL structures.',
        explanationCn: 'TEM產生黑白、二維（2D）圖像，顯示內部結構。SEM產生黑白、三維（3D）圖像，顯示外部結構。'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Which microscope would you use to see the 3D surface texture of a pollen grain?',
        questionCn: '你會用哪種顯微鏡來觀察花粉粒的3D表面紋理？',
        options: [
          'Light microscope',
          'Transmission Electron Microscope (TEM)',
          'Scanning Electron Microscope (SEM)',
          'Simple microscope'
        ],
        optionsCn: [
          '光學顯微鏡',
          '透射電子顯微鏡（TEM）',
          '掃描電子顯微鏡（SEM）',
          '簡單顯微鏡'
        ],
        correctAnswer: 2,
        explanation: 'SEM (Scanning Electron Microscope) scans the surface of specimens and produces 3D images showing EXTERNAL structures. It is ideal for viewing surface textures.',
        explanationCn: 'SEM（掃描電子顯微鏡）掃描標本表面並產生顯示外部結構的3D圖像。它非常適合查看表面紋理。'
      },
      {
        id: 5,
        type: 'true-false',
        question: 'Electron micrographs in textbooks are always shown in their original black and white form.',
        questionCn: '教科書中的電子顯微照片總是以原始的黑白形式顯示。',
        correctAnswer: false,
        explanation: 'False. Most electron micrographs in textbooks have "false colour" added using computer software to help distinguish different structures.',
        explanationCn: '錯誤。教科書中的大多數電子顯微照片都使用電腦軟件添加了"偽彩色"，以幫助區分不同的結構。'
      },
      {
        id: 6,
        type: 'true-false',
        question: 'Resolution refers to how much bigger an image appears.',
        questionCn: '分辨率指的是圖像看起來大多少。',
        correctAnswer: false,
        explanation: 'False. Magnification refers to how much bigger an image appears. Resolution refers to how much detail can be seen clearly (the ability to distinguish two close points).',
        explanationCn: '錯誤。放大倍數指的是圖像看起來大多少。分辨率指的是可以清楚看到多少細節（區分兩個接近點的能力）。'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Which of the following can be observed using a light microscope?',
        questionCn: '以下哪項可以使用光學顯微鏡觀察？',
        options: [
          'Individual atoms',
          'DNA molecules',
          'Ribosomes',
          'Mitochondria'
        ],
        optionsCn: [
          '單個原子',
          'DNA分子',
          '核糖體',
          '線粒體'
        ],
        correctAnswer: 3,
        explanation: 'Light microscopes can observe objects from about 1 μm to 0.1 mm, including cells and mitochondria. Ribosomes, DNA molecules, and atoms are too small and require electron microscopes.',
        explanationCn: '光學顯微鏡可以觀察約1微米到0.1毫米的物體，包括細胞和線粒體。核糖體、DNA分子和原子太小，需要電子顯微鏡。'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'In a TEM, electron beams:',
        questionCn: '在TEM中，電子束：',
        options: [
          'Scan over the surface of the specimen',
          'Pass through the specimen',
          'Bounce off the specimen',
          'Circle around the specimen'
        ],
        optionsCn: [
          '掃描標本表面',
          '穿過標本',
          '從標本反彈',
          '繞著標本轉'
        ],
        correctAnswer: 1,
        explanation: 'In TEM (Transmission Electron Microscope), electron beams PASS THROUGH a very thin slice of the specimen. That is why TEM shows INTERNAL structures.',
        explanationCn: '在TEM（透射電子顯微鏡）中，電子束穿過標本的非常薄的切片。這就是為什麼TEM顯示內部結構。'
      },
      {
        id: 9,
        type: 'true-false',
        question: 'A student is going to observe a cell using a light microscope under high-power magnification. She should start with a high-power objective.',
        questionCn: '一個學生準備用光學顯微鏡在高倍放大下觀察細胞。她應該從高倍物鏡開始。',
        correctAnswer: false,
        explanation: 'False. You should ALWAYS start with low-power magnification first. The wider field of view allows the specimen to be located more easily. Then switch to high power.',
        explanationCn: '錯誤。你應該始終先從低倍放大開始。較寬的視野可以更容易地找到標本。然後再切換到高倍。'
      },
      {
        id: 10,
        type: 'true-false',
        question: 'When using a high-power objective, you should turn the coarse adjustment knob to focus.',
        questionCn: '使用高倍物鏡時，你應該轉動粗調節器來對焦。',
        correctAnswer: false,
        explanation: 'False. NEVER use the coarse adjustment knob with a high-power objective! Only use the fine adjustment knob. The coarse knob could damage the slide or objective.',
        explanationCn: '錯誤。高倍物鏡時絕不要使用粗調節器！只使用微調節器。粗調節器可能會損壞載玻片或物鏡。'
      },
      {
        id: 11,
        type: 'multiple-choice',
        question: 'What is the correct sequence for observing a specimen under low-power magnification?\n(1) Turn the coarse adjustment knob to lower the stage\n(2) Turn the coarse adjustment knob to raise the stage\n(3) Turn the fine adjustment knob\n(4) Rotate the nosepiece to select a low-power objective\n(5) Clip the slide on the stage',
        questionCn: '低倍放大下觀察標本的正確順序是什麼？\n(1) 轉動粗調節器降低載物台\n(2) 轉動粗調節器升高載物台\n(3) 轉動微調節器\n(4) 旋轉物鏡轉換器選擇低倍物鏡\n(5) 將載玻片夾在載物台上',
        options: [
          '(4) → (5) → (2) → (1) → (3)',
          '(5) → (4) → (1) → (2) → (3)',
          '(4) → (5) → (1) → (2) → (3)',
          '(5) → (4) → (2) → (1) → (3)'
        ],
        correctAnswer: 0,
        explanation: 'The correct sequence is: (4) Select low-power objective → (5) Clip slide → (2) Raise stage (bring objective close) → (1) Lower stage slowly (while looking through eyepiece) → (3) Fine adjustment for sharp focus.',
        explanationCn: '正確順序是：(4) 選擇低倍物鏡 → (5) 夾上載玻片 → (2) 升高載物台（使物鏡靠近）→ (1) 緩慢降低載物台（同時通過目鏡觀察）→ (3) 微調以獲得清晰對焦。'
      },
      {
        id: 12,
        type: 'multiple-choice',
        question: 'A student is observing a tissue under a light microscope. Which of the following combinations of eyepiece and objective allows him to see the LARGEST number of cells in the field of view?',
        questionCn: '一個學生正在用光學顯微鏡觀察一個組織。以下哪種目鏡和物鏡的組合可以讓他在視野中看到最多數量的細胞？',
        options: [
          '10X eyepiece and 10X objective',
          '10X eyepiece and 40X objective',
          '15X eyepiece and 4X objective',
          '15X eyepiece and 40X objective'
        ],
        optionsCn: [
          '10X目鏡和10X物鏡',
          '10X目鏡和40X物鏡',
          '15X目鏡和4X物鏡',
          '15X目鏡和40X物鏡'
        ],
        correctAnswer: 2,
        explanation: 'To see the MOST cells, you need the LOWEST magnification (largest field of view). 15X × 4X = 60X is the lowest. Lower magnification = larger area = more cells visible.',
        explanationCn: '要看到最多細胞，你需要最低的放大倍數（最大視野）。15X × 4X = 60X是最低的。放大倍數越低 = 面積越大 = 可見細胞越多。'
      },
      {
        id: 13,
        type: 'multiple-choice',
        question: 'DSE Bio 2015 IA Q1: Which of the following parts of the microscope should be adjusted to obtain a clear and sharp image when you switch from low-magnification to high-magnification observation?\n(See diagram: 1=Eyepiece, 2=Nosepiece, 3=Fine adjustment knob, 4=Diaphragm)',
        questionCn: 'DSE Bio 2015 IA Q1: 當你從低倍觀察切換到高倍觀察時，應該調節顯微鏡的哪些部件以獲得清晰銳利的圖像？\n（參見圖：1=目鏡，2=物鏡轉換器，3=微調節器，4=光圈）',
        options: [
          '1 and 4 only',
          '2 and 3 only',
          '1, 3 and 4 only',
          '2, 3 and 4 only'
        ],
        optionsCn: [
          '僅1和4',
          '僅2和3',
          '僅1、3和4',
          '僅2、3和4'
        ],
        correctAnswer: 3,
        explanation: 'When switching to high power: (2) Rotate nosepiece to select high-power objective, (3) Turn fine adjustment knob for sharp focus, (4) Adjust diaphragm for brightness. The eyepiece (1) does not need adjustment.',
        explanationCn: '切換到高倍時：(2) 旋轉物鏡轉換器選擇高倍物鏡，(3) 轉動微調節器以獲得清晰對焦，(4) 調節光圈以調節亮度。目鏡(1)不需要調整。'
      },
      {
        id: 14,
        type: 'multiple-choice',
        question: 'If a 10X eyepiece and a 40X objective are used, what is the total magnification?',
        questionCn: '如果使用10X目鏡和40X物鏡，總放大倍數是多少？',
        options: [
          '50X',
          '100X',
          '400X',
          '4000X'
        ],
        optionsCn: [
          '50X',
          '100X',
          '400X',
          '4000X'
        ],
        correctAnswer: 2,
        explanation: 'Total magnification = eyepiece × objective = 10 × 40 = 400X. Remember to MULTIPLY, not add!',
        explanationCn: '總放大倍數 = 目鏡 × 物鏡 = 10 × 40 = 400X。記住是乘法，不是加法！'
      },
      {
        id: 15,
        type: 'multiple-choice',
        question: 'The length of a cell in a micrograph is 0.8 cm. If the magnification is 400X, what is the actual size of the cell?',
        questionCn: '顯微照片中一個細胞的長度是0.8厘米。如果放大倍數是400X，細胞的實際大小是多少？',
        options: [
          '2 μm',
          '20 μm',
          '200 μm',
          '2000 μm'
        ],
        optionsCn: [
          '2微米',
          '20微米',
          '200微米',
          '2000微米'
        ],
        correctAnswer: 1,
        explanation: 'Actual size = Image size / Magnification = 0.8 cm / 400 = 0.002 cm = 0.02 mm = 20 μm. (1 cm = 10,000 μm)',
        explanationCn: '實際大小 = 圖像大小 / 放大倍數 = 0.8厘米 / 400 = 0.002厘米 = 0.02毫米 = 20微米。（1厘米 = 10,000微米）'
      },
      {
        id: 16,
        type: 'multiple-choice',
        question: 'What happens to the image when you observe a specimen under a light microscope?',
        questionCn: '當你在光學顯微鏡下觀察標本時，圖像會發生什麼？',
        options: [
          'It appears the same as the actual specimen',
          'It appears larger only',
          'It appears inverted (upside down and reversed)',
          'It appears only in black and white'
        ],
        optionsCn: [
          '它看起來與實際標本相同',
          '它只是看起來更大',
          '它是倒置的（上下顛倒且左右翻轉）',
          '它只以黑白顯示'
        ],
        correctAnswer: 2,
        explanation: 'The image under a light microscope is INVERTED - both upside down and reversed left-to-right. For example, the letter "p" appears as "d".',
        explanationCn: '光學顯微鏡下的圖像是倒置的——既上下顛倒又左右翻轉。例如，字母"p"顯示為"d"。'
      }
    ]
  },
  'cell-structure-quiz': {
    id: 'cell-structure-quiz',
    title: 'Structure of Cells - Practice Quiz',
    titleCn: '細胞的結構 - 練習測驗',
    topicId: 'cell-basic-unit',
    moduleId: 'cell-structure',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Which of the following structures is found in plant cells but NOT in animal cells?',
        questionCn: '以下哪個結構存在於植物細胞但不存在於動物細胞？',
        options: ['Cell membrane', 'Nucleus', 'Cell wall', 'Mitochondrion'],
        optionsCn: ['細胞膜', '細胞核', '細胞壁', '線粒體'],
        correctAnswer: 2,
        explanation: 'Cell wall is found ONLY in plant cells. It is made of cellulose and provides support and protection.',
        explanationCn: '細胞壁只存在於植物細胞中。它由纖維素製成，提供支撐和保護。'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'What is the function of mitochondria?',
        questionCn: '線粒體的功能是什麼？',
        options: ['Photosynthesis', 'Protein synthesis', 'Respiration', 'Storage of water'],
        optionsCn: ['光合作用', '蛋白質合成', '呼吸作用', '儲存水分'],
        correctAnswer: 2,
        explanation: 'Mitochondria are the main site of respiration. They convert chemical energy in food into energy (ATP) that the cell can use.',
        explanationCn: '線粒體是呼吸作用的主要場所。它們將食物中的化學能轉化為細胞可以使用的能量（ATP）。'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Which organelle is responsible for protein synthesis?',
        questionCn: '哪個細胞器負責蛋白質合成？',
        options: ['Smooth ER', 'Ribosome', 'Vacuole', 'Chloroplast'],
        optionsCn: ['光滑內質網', '核糖體', '液泡', '葉綠體'],
        correctAnswer: 1,
        explanation: 'Ribosomes are involved in the synthesis of proteins. They can be found on rough ER or free in the cytoplasm.',
        explanationCn: '核糖體參與蛋白質合成。它們可以在粗糙內質網上或自由漂浮在細胞質中。'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'The cell membrane is described as:',
        questionCn: '細胞膜被描述為：',
        options: ['Fully permeable', 'Impermeable', 'Differentially permeable', 'Only permeable to water'],
        optionsCn: ['全透性', '不透性', '差異透性', '只對水透過'],
        correctAnswer: 2,
        explanation: 'The cell membrane is differentially (selectively) permeable - it only allows certain substances to pass through while blocking others.',
        explanationCn: '細胞膜是差異透性（選擇性透過）的——它只允許某些物質通過，同時阻擋其他物質。'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Which of the following cells would have the MOST mitochondria?',
        questionCn: '以下哪種細胞會有最多的線粒體？',
        options: ['Fat storage cell', 'Muscle cell', 'Red blood cell', 'Epidermal cell'],
        optionsCn: ['脂肪儲存細胞', '肌肉細胞', '紅血球', '表皮細胞'],
        correctAnswer: 1,
        explanation: 'Muscle cells need lots of energy for contraction, so they have many mitochondria. Red blood cells actually have NO nucleus or mitochondria.',
        explanationCn: '肌肉細胞需要大量能量進行收縮，所以它們有很多線粒體。紅血球實際上沒有細胞核或線粒體。'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'What is the main component of the plant cell wall?',
        questionCn: '植物細胞壁的主要成分是什麼？',
        options: ['Protein', 'Phospholipid', 'Cellulose', 'Starch'],
        optionsCn: ['蛋白質', '磷脂', '纖維素', '澱粉'],
        correctAnswer: 2,
        explanation: 'The cell wall is made mainly of cellulose, a complex carbohydrate that provides structural support.',
        explanationCn: '細胞壁主要由纖維素組成，這是一種提供結構支撐的複雜碳水化合物。'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Which organelle contains chlorophyll?',
        questionCn: '哪個細胞器含有葉綠素？',
        options: ['Mitochondrion', 'Nucleus', 'Chloroplast', 'Vacuole'],
        optionsCn: ['線粒體', '細胞核', '葉綠體', '液泡'],
        correctAnswer: 2,
        explanation: 'Chloroplasts contain chlorophyll, a green pigment that captures light energy for photosynthesis.',
        explanationCn: '葉綠體含有葉綠素，這是一種捕獲光能用於光合作用的綠色色素。'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'The nucleus is bounded by:',
        questionCn: '細胞核被什麼包圍：',
        options: ['A single membrane', 'A double membrane', 'Cell wall', 'No membrane'],
        optionsCn: ['單層膜', '雙層膜', '細胞壁', '沒有膜'],
        correctAnswer: 1,
        explanation: 'The nucleus is bounded by a double membrane called the nuclear membrane (nuclear envelope), which has pores for material exchange.',
        explanationCn: '細胞核被稱為核膜的雙層膜包圍，核膜上有核孔用於物質交換。'
      },
      {
        id: 9,
        type: 'true-false',
        question: 'All plant cells have chloroplasts.',
        questionCn: '所有植物細胞都有葉綠體。',
        correctAnswer: false,
        explanation: 'False. Only GREEN plant cells have chloroplasts (e.g., palisade cells, guard cells). Non-green cells like root cells and onion epidermal cells do NOT have chloroplasts.',
        explanationCn: '錯誤。只有綠色植物細胞有葉綠體（如柵欄細胞、保衛細胞）。非綠色細胞如根細胞和洋蔥表皮細胞沒有葉綠體。'
      },
      {
        id: 10,
        type: 'true-false',
        question: 'Animal cells have no vacuoles at all.',
        questionCn: '動物細胞完全沒有液泡。',
        correctAnswer: false,
        explanation: 'False. Animal cells may have a few SMALL vacuoles (or none). What they lack is the LARGE CENTRAL VACUOLE found in plant cells.',
        explanationCn: '錯誤。動物細胞可能有一些小液泡（或沒有）。它們缺少的是植物細胞中的大型中央液泡。'
      },
      {
        id: 11,
        type: 'multiple-choice',
        question: 'What is the function of the large central vacuole in plant cells?',
        questionCn: '植物細胞中大型中央液泡的功能是什麼？',
        options: [
          'Photosynthesis',
          'Protein synthesis',
          'Storage and providing turgidity',
          'Respiration'
        ],
        optionsCn: [
          '光合作用',
          '蛋白質合成',
          '儲存和提供膨壓',
          '呼吸作用'
        ],
        correctAnswer: 2,
        explanation: 'The large central vacuole stores water, nutrients, and wastes. When full of water, it provides turgidity (firmness) which supports the plant.',
        explanationCn: '大型中央液泡儲存水、營養物和廢物。當充滿水時，它提供膨壓（堅實度）來支撐植物。'
      },
      {
        id: 12,
        type: 'multiple-choice',
        question: 'Rough endoplasmic reticulum differs from smooth endoplasmic reticulum because rough ER:',
        questionCn: '粗糙內質網與光滑內質網不同，因為粗糙內質網：',
        options: [
          'Has no membrane',
          'Has ribosomes attached',
          'Synthesizes lipids',
          'Is found only in plant cells'
        ],
        optionsCn: [
          '沒有膜',
          '有核糖體附著',
          '合成脂類',
          '只存在於植物細胞'
        ],
        correctAnswer: 1,
        explanation: 'Rough ER has ribosomes attached to its surface (making it look "rough"). These ribosomes synthesize proteins. Smooth ER has no ribosomes and synthesizes lipids.',
        explanationCn: '粗糙內質網表面有核糖體附著（使它看起來"粗糙"）。這些核糖體合成蛋白質。光滑內質網沒有核糖體，合成脂類。'
      },
      {
        id: 13,
        type: 'multiple-choice',
        question: 'What stain is commonly used to observe animal cells under a microscope?',
        questionCn: '在顯微鏡下觀察動物細胞通常使用什麼染色劑？',
        options: ['Iodine solution', 'Methylene blue', 'Water', 'Safranine'],
        optionsCn: ['碘液', '亞甲藍', '水', '番紅'],
        correctAnswer: 1,
        explanation: 'Methylene blue is commonly used to stain animal cells. It makes the nucleus more visible. Iodine solution is typically used for plant cells.',
        explanationCn: '亞甲藍通常用於染色動物細胞。它使細胞核更加可見。碘液通常用於植物細胞。'
      },
      {
        id: 14,
        type: 'multiple-choice',
        question: 'Which statement about the cell wall is correct?',
        questionCn: '關於細胞壁的哪個陳述是正確的？',
        options: [
          'It is found in both animal and plant cells',
          'It is differentially permeable',
          'It is fully permeable',
          'It is made of phospholipids'
        ],
        optionsCn: [
          '它存在於動物和植物細胞中',
          '它是差異透性的',
          '它是全透性的',
          '它由磷脂製成'
        ],
        correctAnswer: 2,
        explanation: 'The cell wall is FULLY permeable - it allows all dissolved substances to pass through freely. The cell membrane (not wall) is differentially permeable.',
        explanationCn: '細胞壁是全透性的——它允許所有溶解物質自由通過。細胞膜（不是壁）是差異透性的。'
      },
      {
        id: 15,
        type: 'multiple-choice',
        question: 'Which of the following is NOT a function of the cytoplasm?',
        questionCn: '以下哪項不是細胞質的功能？',
        options: [
          'Holding organelles',
          'Site for chemical reactions',
          'Contains DNA',
          'Allows transport of materials'
        ],
        optionsCn: [
          '容納細胞器',
          '化學反應的場所',
          '含有DNA',
          '允許物質運輸'
        ],
        correctAnswer: 2,
        explanation: 'DNA is contained in the NUCLEUS, not the cytoplasm. The cytoplasm holds organelles, is a site for many chemical reactions, and allows movement of materials.',
        explanationCn: 'DNA含在細胞核中，不在細胞質中。細胞質容納細胞器，是許多化學反應的場所，並允許物質移動。'
      }
    ]
  }
}
