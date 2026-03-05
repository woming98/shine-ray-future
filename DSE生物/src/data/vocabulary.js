// DSE Biology Vocabulary Database
// 生物学词汇数据库

export const vocabulary = {
  // ========== General Terms ==========
  'constituent': {
    word: 'Constituent',
    phonetic: '/kənˈstɪtʃuənt/',
    chinese: '成分',
    definition: 'A component part of something; an element or ingredient.',
    etymology: {
      prefix: 'con-',
      prefixMeaning: 'together (Latin)',
      root: 'stituent',
      rootMeaning: 'to set up, establish (Latin: statuere)',
      breakdown: 'con + stituent = things set up together to form a whole'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'Think of "CON-STIT-U-ENT" like ingredients that CONSTITUTE (make up) something. Like how water and ions are constituents that make up your body!',
      tipCn: '想成"康斯替求恩特"，就像各种成分构成整体，比如水和离子是身体的成分。'
    },
    examples: [
      'Chemical constituents of organisms include water, proteins, and carbohydrates.',
      'Oxygen is a major constituent of air, making up about 21%.'
    ],
    relatedWords: ['component', 'element', 'ingredient', 'inorganic', 'organic'],
    difficulty: 'medium',
    category: 'general'
  },

  'inorganic': {
    word: 'Inorganic',
    phonetic: '/ˌɪnɔːrˈɡænɪk/',
    chinese: '無機的',
    definition: 'Not consisting of or deriving from living matter; not containing carbon compounds.',
    etymology: {
      prefix: 'in-',
      prefixMeaning: 'not, without',
      root: 'organic',
      rootMeaning: 'from living organisms',
      breakdown: 'in + organic = NOT from living things'
    },
    mnemonic: {
      technique: 'Prefix Recognition',
      tip: 'IN-organic = NOT organic. Easy rule: If it\'s a mineral, metal, or simple compound like water - it\'s INorganic!',
      tipCn: 'IN-有机 = 不是有机的。简单规则：如果是矿物、金属或像水这样的简单化合物 - 就是无机的！'
    },
    examples: [
      'Water and inorganic ions like calcium are essential for life.',
      'Inorganic compounds do not contain carbon-hydrogen bonds.'
    ],
    relatedWords: ['organic', 'mineral', 'ion', 'constituent'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  'organic': {
    word: 'Organic',
    phonetic: '/ɔːrˈɡænɪk/',
    chinese: '有機的',
    definition: 'Relating to or derived from living matter; containing carbon compounds.',
    etymology: {
      root: 'organ',
      rootMeaning: 'living thing, instrument (Greek: organon)',
      breakdown: 'organ + ic = relating to living organs/organisms'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'ORGAN-ic = from ORGANS (living things). If it comes from something alive, it\'s organic!',
      tipCn: 'ORGAN-ic = 来自器官（生物）。如果来自活物，就是有机的！'
    },
    examples: [
      'Carbohydrates, proteins, and lipids are organic constituents.',
      'Organic molecules always contain carbon and hydrogen.'
    ],
    relatedWords: ['inorganic', 'carbohydrate', 'protein', 'lipid'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  // ========== Water-Related Terms ==========
  'reactant': {
    word: 'Reactant',
    phonetic: '/riˈæktənt/',
    chinese: '反應物',
    definition: 'A substance that takes part in and undergoes change during a chemical reaction.',
    etymology: {
      root: 'react',
      rootMeaning: 'to act in response (Latin: re- + agere)',
      breakdown: 'react + ant = substance that reacts'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'RE-ACT-ANT = something that RE-ACTS (responds) in a reaction. Imagine ingredients that "act" together to make a cake!',
      tipCn: 'RE-ACT-ANT = 在反应中"重新行动"的物质。想象一起"行动"做蛋糕的配料！'
    },
    examples: [
      'In photosynthesis, water is a reactant that combines with carbon dioxide.',
      'Reactants are written on the left side of a chemical equation.'
    ],
    relatedWords: ['product', 'reaction', 'photosynthesis'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  'photosynthesis': {
    word: 'Photosynthesis',
    phonetic: '/ˌfoʊtoʊˈsɪnθəsɪs/',
    chinese: '光合作用',
    definition: 'The process by which green plants and some organisms use sunlight to synthesize nutrients from carbon dioxide and water.',
    etymology: {
      prefix: 'photo-',
      prefixMeaning: 'light (Greek: phōtos)',
      root: 'synthesis',
      rootMeaning: 'putting together (Greek: syntithenai)',
      breakdown: 'photo + synthesis = putting together WITH LIGHT'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'PHOTO-SYNTHESIS = Think of taking a PHOTO (needs light) while the plant SYNTHESIZES (makes) food. Plants "photograph" sunshine into sugar!',
      tipCn: '想象植物在用阳光"拍照"的同时"合成"食物。植物把阳光"拍"成糖！'
    },
    examples: [
      'Plants perform photosynthesis in their chloroplasts using sunlight.',
      'The equation for photosynthesis is: CO₂ + H₂O → C₆H₁₂O₆ + O₂'
    ],
    relatedWords: ['chlorophyll', 'glucose', 'chloroplast', 'carbon dioxide', 'oxygen'],
    difficulty: 'medium',
    category: 'process'
  },

  'turgor': {
    word: 'Turgor',
    phonetic: '/ˈtɜːrɡər/',
    chinese: '膨壓',
    definition: 'The pressure of water inside plant cells that keeps them rigid and upright.',
    etymology: {
      root: 'turgor',
      rootMeaning: 'swelling (Latin: turgēre = to swell, be inflated)',
      breakdown: 'From Latin "turgēre" meaning to be swollen or inflated'
    },
    mnemonic: {
      technique: 'Sound Association',
      tip: 'TURGOR sounds like "TURN-GORGE" → Water TURNS the cell into a GORGED (stuffed/swollen) state! Like a balloon filled with water.',
      tipCn: 'TURGOR听起来像"特哥" → 水让细胞变成"特别鼓"的状态！像装满水的气球。'
    },
    examples: [
      'Turgor pressure helps plant stems stand upright.',
      'Loss of turgor causes plants to wilt when they lack water.'
    ],
    relatedWords: ['turgid', 'plasmolysis', 'vacuole', 'cell wall'],
    difficulty: 'hard',
    category: 'phenomenon'
  },

  'turgid': {
    word: 'Turgid',
    phonetic: '/ˈtɜːrdʒɪd/',
    chinese: '膨脹的',
    definition: 'Swollen and firm, especially as a result of being filled with water.',
    etymology: {
      root: 'turgid',
      rootMeaning: 'swollen (Latin: turgidus)',
      breakdown: 'Related to "turgor" - describes the swollen state'
    },
    mnemonic: {
      technique: 'Rhyme Association',
      tip: 'TURGID rhymes with "surged" → The cell SURGED with water and became TURGID (swollen and firm)!',
      tipCn: 'TURGID和"surge(激增)"押韵 → 细胞水分激增变得膨胀坚挺！'
    },
    examples: [
      'Turgid plant cells press against each other, providing support.',
      'A well-watered plant has turgid cells.'
    ],
    relatedWords: ['turgor', 'plasmolysis', 'flaccid'],
    difficulty: 'medium',
    category: 'biology'
  },

  // ========== Inorganic Ions ==========
  'nitrate': {
    word: 'Nitrate',
    phonetic: '/ˈnaɪtreɪt/',
    chinese: '硝酸鹽',
    definition: 'A salt or ester of nitric acid, containing the ion NO₃⁻.',
    etymology: {
      root: 'nitr-',
      rootMeaning: 'nitrogen (Greek: nitron = native soda)',
      breakdown: 'nitr + ate = salt containing nitrogen and oxygen'
    },
    mnemonic: {
      technique: 'Chemical Formula',
      tip: 'NITRate contains NITRogen (N). Remember NO₃⁻ = Nitrogen + 3 Oxygens. Plants need it to make proteins!',
      tipCn: 'NITRate含有NITRogen(氮)。记住NO₃⁻ = 氮 + 3个氧。植物需要它来制造蛋白质！'
    },
    examples: [
      'Nitrate is absorbed by plant roots as a source of nitrogen.',
      'Plants use nitrate to synthesize proteins and nucleic acids.'
    ],
    relatedWords: ['nitrogen', 'protein', 'synthesis'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  'magnesium': {
    word: 'Magnesium',
    phonetic: '/mæɡˈniːziəm/',
    chinese: '鎂',
    definition: 'A chemical element (Mg) that is a light, silvery-white metal.',
    etymology: {
      root: 'Magnesia',
      rootMeaning: 'district in Thessaly, Greece where the mineral was found',
      breakdown: 'Named after Magnesia region → magnesium'
    },
    mnemonic: {
      technique: 'Color Association',
      tip: 'MAGnesium → MAGic GREEN! It\'s in chlorophyll making plants GREEN! Mg makes the MAGic of green leaves.',
      tipCn: 'MAGnesium → MAGic绿色！它在叶绿素里让植物变绿！镁创造叶子绿色的魔法。'
    },
    examples: [
      'Magnesium is a central component of the chlorophyll molecule.',
      'Plants need magnesium to perform photosynthesis effectively.'
    ],
    relatedWords: ['chlorophyll', 'photosynthesis', 'ion'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  'haemoglobin': {
    word: 'Haemoglobin',
    phonetic: '/ˈhiːməˌɡloʊbɪn/',
    chinese: '血紅蛋白',
    definition: 'The red protein in red blood cells that carries oxygen from the lungs to tissues.',
    etymology: {
      prefix: 'haemo-',
      prefixMeaning: 'blood (Greek: haima)',
      root: 'globin',
      rootMeaning: 'protein (Latin: globus = sphere)',
      breakdown: 'haemo + globin = blood protein (sphere-shaped)'
    },
    mnemonic: {
      technique: 'Color + Shape Association',
      tip: 'HAEMO (blood = RED) + GLOBIN (globe/ball) = The RED BALL-shaped protein in blood! Contains IRON which makes it red.',
      tipCn: '血(HAEMO = 红色) + 球状蛋白(GLOBIN) = 血液中的红色球状蛋白！含铁所以是红色。'
    },
    examples: [
      'Iron is a component of haemoglobin, essential for oxygen transport.',
      'Haemoglobin gives red blood cells their characteristic color.'
    ],
    relatedWords: ['iron', 'oxygen', 'red blood cell', 'protein'],
    difficulty: 'hard',
    category: 'molecule'
  },

  'chlorophyll': {
    word: 'Chlorophyll',
    phonetic: '/ˈklɔːrəfɪl/',
    chinese: '葉綠素',
    definition: 'The green pigment in plants that absorbs light energy for photosynthesis.',
    etymology: {
      prefix: 'chloro-',
      prefixMeaning: 'green (Greek: chlōros)',
      root: 'phyll',
      rootMeaning: 'leaf (Greek: phyllon)',
      breakdown: 'chloro + phyll = green of the leaf'
    },
    mnemonic: {
      technique: 'Color + Part Association',
      tip: 'CHLORO (like chlorine pool = greenish) + PHYLL (like phyllo pastry layers = thin like leaves) = GREEN in LEAVES!',
      tipCn: 'CHLORO(氯/绿色) + PHYLL(叶) = 叶子里的绿色物质！含镁(Mg)所以是绿的。'
    },
    examples: [
      'Chlorophyll contains magnesium at its center.',
      'Plants with more chlorophyll appear darker green.'
    ],
    relatedWords: ['magnesium', 'photosynthesis', 'chloroplast', 'pigment'],
    difficulty: 'medium',
    category: 'molecule'
  },

  'calcium': {
    word: 'Calcium',
    phonetic: '/ˈkælsiəm/',
    chinese: '鈣',
    definition: 'A chemical element (Ca) that is a soft gray alkaline earth metal.',
    etymology: {
      root: 'calc-',
      rootMeaning: 'lime, limestone (Latin: calx)',
      breakdown: 'calc + ium = element found in limestone'
    },
    mnemonic: {
      technique: 'Body Association',
      tip: 'CALcium for CALcified bones! Think: CALC = CHALK (made of calcium). Your bones are like internal chalk!',
      tipCn: 'CALcium让骨头CALcified(钙化)！想：CALC = 粉笔(含钙)。骨头就像体内的粉笔！'
    },
    examples: [
      'Calcium is essential for strong bones and teeth.',
      'Calcium ions are needed for muscle contraction and nerve signals.'
    ],
    relatedWords: ['bone', 'teeth', 'muscle', 'contraction'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  'phosphate': {
    word: 'Phosphate',
    phonetic: '/ˈfɒsfeɪt/',
    chinese: '磷酸鹽',
    definition: 'A salt or ester of phosphoric acid, containing the ion PO₄³⁻.',
    etymology: {
      root: 'phosphor',
      rootMeaning: 'light-bearing (Greek: phōs = light + phoros = bearing)',
      breakdown: 'phosphor + ate = salt of phosphorus'
    },
    mnemonic: {
      technique: 'Multiple Association',
      tip: 'PHOSPHate is in 3 P\'s: DNA (Phosphate backbone), cell memPhanes (Phospholipids), and bonesPhones... wait, BONES! P for Phosphate in bones.',
      tipCn: 'PHOSPHate(磷酸盐)在3个地方：DNA、细胞膜(磷脂)、骨骼。记住：P代表Phosphate！'
    },
    examples: [
      'Phosphate is a component of DNA and RNA molecules.',
      'Phospholipids in cell membranes contain phosphate groups.'
    ],
    relatedWords: ['phospholipid', 'nucleic acid', 'DNA', 'ATP'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  // ========== Cell Structures ==========
  'chloroplast': {
    word: 'Chloroplast',
    phonetic: '/ˈklɔːrəplæst/',
    chinese: '葉綠體',
    definition: 'An organelle found in plant cells where photosynthesis occurs.',
    etymology: {
      prefix: 'chloro-',
      prefixMeaning: 'green (Greek: chlōros)',
      root: 'plast',
      rootMeaning: 'formed, molded (Greek: plastos)',
      breakdown: 'chloro + plast = green formed structure'
    },
    mnemonic: {
      technique: 'Function Association',
      tip: 'CHLORO-PLAST = GREEN FACTORY! It\'s the green "plastic factory" in plants that makes food. PLASTs are like little factories.',
      tipCn: 'CHLORO-PLAST = 绿色工厂！是植物里的绿色"塑料工厂"，制造食物。PLAST就像小工厂。'
    },
    examples: [
      'Chloroplasts contain chlorophyll and are the site of photosynthesis.',
      'Only plant cells and some algae have chloroplasts.'
    ],
    relatedWords: ['chlorophyll', 'photosynthesis', 'organelle', 'thylakoid'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'vacuole': {
    word: 'Vacuole',
    phonetic: '/ˈvækjuoʊl/',
    chinese: '液泡',
    definition: 'A membrane-bound space within a cell that contains fluid.',
    etymology: {
      root: 'vacu-',
      rootMeaning: 'empty (Latin: vacuus)',
      breakdown: 'vacu + ole (diminutive) = little empty space'
    },
    mnemonic: {
      technique: 'Sound Association',
      tip: 'VACUOLE sounds like "VACUUM HOLE" → It\'s like a vacuum (empty space) filled with water! VACuum + hOLE = VACUOLE.',
      tipCn: 'VACUOLE听起来像"vacuum(真空) hole(洞)" → 像个装满水的空腔！VAC + OLE = 液泡。'
    },
    examples: [
      'Plant cells have a large central vacuole for storing water.',
      'The vacuole helps maintain turgor pressure in plant cells.'
    ],
    relatedWords: ['turgor', 'turgid', 'cell sap', 'tonoplast'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  // ========== Processes ==========
  'synthesis': {
    word: 'Synthesis',
    phonetic: '/ˈsɪnθəsɪs/',
    chinese: '合成',
    definition: 'The combination of components or elements to form a connected whole.',
    etymology: {
      prefix: 'syn-',
      prefixMeaning: 'together (Greek)',
      root: 'thesis',
      rootMeaning: 'placing, putting (Greek: tithenai)',
      breakdown: 'syn + thesis = putting together'
    },
    mnemonic: {
      technique: 'Opposite Association',
      tip: 'SYNTHESIS is opposite of ANALYSIS. SYN = SYNC (together) + THESIS (putting) = putting things together to make something new!',
      tipCn: 'SYNTHESIS是ANALYSIS(分析)的反义词。SYN = 同步 + THESIS = 把东西放在一起制造新物！'
    },
    examples: [
      'Protein synthesis occurs at ribosomes.',
      'Plants use photosynthesis to synthesize glucose.'
    ],
    relatedWords: ['photosynthesis', 'protein', 'ribosome'],
    difficulty: 'medium',
    category: 'process'
  },

  'evaporation': {
    word: 'Evaporation',
    phonetic: '/ɪˌvæpəˈreɪʃən/',
    chinese: '蒸發',
    definition: 'The process of a liquid turning into vapor.',
    etymology: {
      prefix: 'e-',
      prefixMeaning: 'out (Latin: ex)',
      root: 'vapor',
      rootMeaning: 'steam, vapor (Latin)',
      breakdown: 'e + vapor + ation = turning into vapor and going out'
    },
    mnemonic: {
      technique: 'Visual Process',
      tip: 'E-VAPOR-ATION = water going "E" (out) as VAPOR! Imagine water escaping as invisible steam, taking heat with it.',
      tipCn: 'E-VAPOR-ATION = 水变成蒸汽"E"(出去)！想象水变成看不见的蒸汽逃走，带走热量。'
    },
    examples: [
      'Evaporation of sweat helps cool the human body.',
      'Water evaporates from leaves through stomata in transpiration.'
    ],
    relatedWords: ['cooling', 'transpiration', 'condensation'],
    difficulty: 'easy',
    category: 'process'
  },

  'glucose': {
    word: 'Glucose',
    phonetic: '/ˈɡluːkoʊs/',
    chinese: '葡萄糖',
    definition: 'A simple sugar (monosaccharide) that is an important energy source in living organisms.',
    etymology: {
      root: 'gluc-',
      rootMeaning: 'sweet (Greek: glykys)',
      breakdown: 'gluc + ose (sugar suffix) = sweet sugar'
    },
    mnemonic: {
      technique: 'Formula Association',
      tip: 'GLUCOSE = C₆H₁₂O₆. Think "GLUE-COSE" → it\'s the "glue" that gives you energy! Like glue holds things together, glucose holds your energy together.',
      tipCn: 'GLUCOSE = C₆H₁₂O₆。想"GLUE(胶水)-COSE" → 它是给你能量的"胶水"！'
    },
    examples: [
      'Glucose is produced during photosynthesis.',
      'Cells break down glucose to release energy in respiration.'
    ],
    relatedWords: ['photosynthesis', 'respiration', 'carbohydrate', 'energy'],
    difficulty: 'easy',
    category: 'molecule'
  },

  // ========== Cell Biology Terms ==========
  'cell': {
    word: 'Cell',
    phonetic: '/sel/',
    chinese: '細胞',
    definition: 'The smallest structural and functional unit of an organism, typically microscopic.',
    etymology: {
      root: 'cella',
      rootMeaning: 'small room (Latin)',
      breakdown: 'Named by Robert Hooke (1665) because cells looked like small rooms in a monastery'
    },
    mnemonic: {
      technique: 'Story',
      tip: 'Think of a prison CELL - a small room that holds everything needed. A biological cell is a "small room" that holds all the parts needed for life!',
      tipCn: '想象监狱的"牢房(cell)"——一个容纳一切的小房间。生物细胞就像一个装着所有生命所需部件的"小房间"！'
    },
    examples: [
      'The human body contains trillions of cells.',
      'Red blood cells carry oxygen throughout the body.'
    ],
    relatedWords: ['organism', 'nucleus', 'cytoplasm', 'membrane'],
    difficulty: 'easy',
    category: 'cell'
  },

  'organism': {
    word: 'Organism',
    phonetic: '/ˈɔːrɡənɪzəm/',
    chinese: '生物/有機體',
    definition: 'An individual animal, plant, or single-celled life form.',
    etymology: {
      root: 'organ-',
      rootMeaning: 'tool, instrument (Greek organon)',
      suffix: '-ism',
      suffixMeaning: 'a system or condition',
      breakdown: 'organ + ism = a system of organized parts working together'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'ORGAN-ism = something with ORGANized parts. Like your organs are organized to make you a living organism!',
      tipCn: 'ORGAN-ism = 有组织器官的东西。就像你的器官组织在一起构成一个活的生物体！'
    },
    examples: [
      'Bacteria are single-celled organisms.',
      'Every living organism needs water to survive.'
    ],
    relatedWords: ['cell', 'unicellular', 'multicellular', 'organ'],
    difficulty: 'easy',
    category: 'general'
  },

  'unicellular': {
    word: 'Unicellular',
    phonetic: '/ˌjuːnɪˈseljələr/',
    chinese: '單細胞的',
    definition: 'Consisting of a single cell.',
    etymology: {
      prefix: 'uni-',
      prefixMeaning: 'one (Latin)',
      root: 'cellular',
      rootMeaning: 'relating to cells',
      breakdown: 'uni + cellular = one cell'
    },
    mnemonic: {
      technique: 'Prefix',
      tip: 'UNI = ONE (like UNIcycle, UNIcorn). UNI-cellular = ONE cell organism. Examples: bacteria, amoeba.',
      tipCn: 'UNI = 一个（像unicycle独轮车，unicorn独角兽）。UNI-cellular = 单细胞生物。例如：细菌、变形虫。'
    },
    examples: [
      'Bacteria and amoeba are unicellular organisms.',
      'Unicellular organisms perform all life functions within one cell.'
    ],
    relatedWords: ['multicellular', 'cell', 'organism', 'bacteria'],
    difficulty: 'medium',
    category: 'cell'
  },

  'multicellular': {
    word: 'Multicellular',
    phonetic: '/ˌmʌltɪˈseljələr/',
    chinese: '多細胞的',
    definition: 'Consisting of many cells.',
    etymology: {
      prefix: 'multi-',
      prefixMeaning: 'many (Latin)',
      root: 'cellular',
      rootMeaning: 'relating to cells',
      breakdown: 'multi + cellular = many cells'
    },
    mnemonic: {
      technique: 'Prefix',
      tip: 'MULTI = MANY (like MULTIple, MULTIply). MULTI-cellular = MANY cells. Humans have trillions of cells!',
      tipCn: 'MULTI = 多个（像multiple多个，multiply乘法）。MULTI-cellular = 多细胞。人体有数万亿细胞！'
    },
    examples: [
      'Humans are multicellular organisms with specialized cells.',
      'Multicellular organisms have cells working together.'
    ],
    relatedWords: ['unicellular', 'cell', 'organism', 'tissue'],
    difficulty: 'medium',
    category: 'cell'
  },

  'cell membrane': {
    word: 'Cell Membrane',
    phonetic: '/sel ˈmembreɪn/',
    chinese: '細胞膜',
    definition: 'A thin, flexible barrier that surrounds and protects the cell, controlling what enters and exits.',
    etymology: {
      root: 'membrane',
      rootMeaning: 'thin skin or layer (Latin membrana)',
      breakdown: 'The "skin" that wraps around the cell'
    },
    mnemonic: {
      technique: 'Analogy',
      tip: 'Think of the cell membrane as a SECURITY GUARD at a club door - it decides who gets IN and who stays OUT!',
      tipCn: '把细胞膜想象成俱乐部门口的保安——它决定谁能进去，谁必须待在外面！'
    },
    examples: [
      'The cell membrane is made of a phospholipid bilayer.',
      'Water passes through the cell membrane by osmosis.'
    ],
    relatedWords: ['phospholipid', 'cytoplasm', 'cell wall', 'osmosis'],
    difficulty: 'medium',
    category: 'cell'
  },

  'cytoplasm': {
    word: 'Cytoplasm',
    phonetic: '/ˈsaɪtoʊplæzəm/',
    chinese: '細胞質',
    definition: 'The jelly-like material inside the cell membrane, where chemical reactions occur.',
    etymology: {
      prefix: 'cyto-',
      prefixMeaning: 'cell (Greek kytos)',
      root: 'plasm',
      rootMeaning: 'formed substance, gel (Greek plasma)',
      breakdown: 'cyto + plasm = cell gel/substance'
    },
    mnemonic: {
      technique: 'Visual',
      tip: 'CYTO = cell, PLASM = jelly. Think of cytoplasm as CELL JELLY - like the gel inside a jelly bean where all the organelles float!',
      tipCn: 'CYTO = 细胞，PLASM = 凝胶。把细胞质想象成"细胞果冻"——就像软糖里面让所有细胞器漂浮的凝胶！'
    },
    examples: [
      'Most cellular activities occur in the cytoplasm.',
      'The cytoplasm contains water, salts, and organic molecules.'
    ],
    relatedWords: ['cell', 'organelle', 'nucleus', 'cell membrane'],
    difficulty: 'medium',
    category: 'cell'
  },

  'nucleus': {
    word: 'Nucleus',
    phonetic: '/ˈnjuːkliəs/',
    chinese: '細胞核',
    definition: 'The control center of the cell, containing DNA and directing cell activities.',
    etymology: {
      root: 'nucleus',
      rootMeaning: 'kernel, inner part (Latin nux = nut)',
      breakdown: 'Like the kernel (center) of a nut'
    },
    mnemonic: {
      technique: 'Analogy',
      tip: 'The NUCLEUS is the BRAIN of the cell - it holds all the instructions (DNA) and tells other parts what to do!',
      tipCn: '细胞核是细胞的"大脑"——它储存所有指令（DNA）并告诉其他部分该做什么！'
    },
    examples: [
      'The nucleus contains chromosomes made of DNA.',
      'Red blood cells have no nucleus.'
    ],
    relatedWords: ['DNA', 'chromosome', 'cell', 'eukaryotic'],
    difficulty: 'easy',
    category: 'cell'
  },

  'organelle': {
    word: 'Organelle',
    phonetic: '/ˌɔːrɡəˈnel/',
    chinese: '細胞器',
    definition: 'A specialized structure within a cell that performs a specific function.',
    etymology: {
      root: 'organ',
      rootMeaning: 'instrument, tool (Greek)',
      suffix: '-elle',
      suffixMeaning: 'small (diminutive)',
      breakdown: 'organ + elle = small organ'
    },
    mnemonic: {
      technique: 'Word Parts',
      tip: 'ORGAN-elle = little ORGAN. Just as your body has organs (heart, lungs), cells have tiny organs (mitochondria, ribosomes)!',
      tipCn: 'ORGAN-elle = 小器官。就像你身体有器官（心脏、肺），细胞也有小器官（线粒体、核糖体）！'
    },
    examples: [
      'Mitochondria and ribosomes are examples of organelles.',
      'Each organelle has a specific function in the cell.'
    ],
    relatedWords: ['mitochondria', 'ribosome', 'nucleus', 'chloroplast'],
    difficulty: 'medium',
    category: 'cell'
  },

  'phospholipid': {
    word: 'Phospholipid',
    phonetic: '/ˌfɒsfəˈlɪpɪd/',
    chinese: '磷脂',
    definition: 'A type of fat molecule with a phosphate head and two fatty acid tails, forming cell membranes.',
    etymology: {
      prefix: 'phospho-',
      prefixMeaning: 'phosphate group',
      root: 'lipid',
      rootMeaning: 'fat',
      breakdown: 'phospho + lipid = fat with phosphate'
    },
    mnemonic: {
      technique: 'Visual Structure',
      tip: 'Imagine a LOLLIPOP: the head (phosphate) is water-loving, the stick (fatty acid tails) is water-fearing. They line up to make a membrane!',
      tipCn: '想象一个棒棒糖：头部（磷酸基团）亲水，棒子（脂肪酸尾）疏水。它们排列起来形成膜！'
    },
    examples: [
      'Phospholipids form a bilayer in cell membranes.',
      'The phospholipid bilayer is partially permeable.'
    ],
    relatedWords: ['cell membrane', 'lipid', 'bilayer', 'fatty acid'],
    difficulty: 'hard',
    category: 'molecule'
  },

  'prokaryotic': {
    word: 'Prokaryotic',
    phonetic: '/ˌproʊkærɪˈɒtɪk/',
    chinese: '原核的',
    definition: 'Describing a cell or organism without a membrane-bound nucleus.',
    etymology: {
      prefix: 'pro-',
      prefixMeaning: 'before (Greek)',
      root: 'karyo',
      rootMeaning: 'nucleus, kernel (Greek karyon)',
      breakdown: 'pro + karyotic = before nucleus (evolved before nucleated cells)'
    },
    mnemonic: {
      technique: 'Timeline',
      tip: 'PRO = before, KARYO = nucleus. Prokaryotes came BEFORE cells had a proper nucleus. They are simpler and older (bacteria)!',
      tipCn: 'PRO = 之前，KARYO = 核。原核生物出现在有真正细胞核之前。它们更简单更古老（细菌）！'
    },
    examples: [
      'Bacteria are prokaryotic organisms.',
      'Prokaryotic cells lack a membrane-bound nucleus.'
    ],
    relatedWords: ['eukaryotic', 'bacteria', 'nucleus', 'cell'],
    difficulty: 'hard',
    category: 'cell'
  },

  'eukaryotic': {
    word: 'Eukaryotic',
    phonetic: '/ˌjuːkærɪˈɒtɪk/',
    chinese: '真核的',
    definition: 'Describing a cell or organism with a membrane-bound nucleus.',
    etymology: {
      prefix: 'eu-',
      prefixMeaning: 'true, good (Greek)',
      root: 'karyo',
      rootMeaning: 'nucleus, kernel (Greek karyon)',
      breakdown: 'eu + karyotic = true nucleus'
    },
    mnemonic: {
      technique: 'Contrast',
      tip: 'EU = true/good (like EUphoria = good feeling). EU-karyotic = TRUE nucleus. Animals, plants, fungi have TRUE nuclei!',
      tipCn: 'EU = 真正的（像euphoria幸福感）。EU-karyotic = 真正的核。动物、植物、真菌有真正的细胞核！'
    },
    examples: [
      'Human cells are eukaryotic.',
      'Eukaryotic cells have membrane-bound organelles.'
    ],
    relatedWords: ['prokaryotic', 'nucleus', 'organelle', 'cell'],
    difficulty: 'hard',
    category: 'cell'
  },

  'mitochondria': {
    word: 'Mitochondria',
    phonetic: '/ˌmaɪtəˈkɒndriə/',
    chinese: '線粒體',
    definition: 'Organelles that produce energy (ATP) through cellular respiration.',
    etymology: {
      prefix: 'mito-',
      prefixMeaning: 'thread (Greek mitos)',
      root: 'chondria',
      rootMeaning: 'grain, granule (Greek chondrion)',
      breakdown: 'mito + chondria = thread-like grains (describes their appearance)'
    },
    mnemonic: {
      technique: 'Nickname',
      tip: 'Mitochondria are the POWERHOUSE of the cell! They make ATP (energy). Remember: "Mighty Mitochondria Make Energy!"',
      tipCn: '线粒体是细胞的"发电厂"！它们制造ATP（能量）。记住："强大的线粒体制造能量！"'
    },
    examples: [
      'Mitochondria are the powerhouses of the cell.',
      'Muscle cells contain many mitochondria for energy.'
    ],
    relatedWords: ['ATP', 'respiration', 'organelle', 'energy'],
    difficulty: 'medium',
    category: 'cell'
  },

  'ribosome': {
    word: 'Ribosome',
    phonetic: '/ˈraɪbəsoʊm/',
    chinese: '核糖體',
    definition: 'Small organelles that synthesize proteins from amino acids.',
    etymology: {
      prefix: 'ribo-',
      prefixMeaning: 'from ribose (a sugar in RNA)',
      root: '-some',
      rootMeaning: 'body (Greek soma)',
      breakdown: 'ribo + some = body containing ribose/RNA'
    },
    mnemonic: {
      technique: 'Function',
      tip: 'Ribosomes are the PROTEIN FACTORIES! They read RNA instructions and build proteins. "Ribosomes Read and Build!"',
      tipCn: '核糖体是"蛋白质工厂"！它们读取RNA指令并制造蛋白质。"核糖体阅读并建造！"'
    },
    examples: [
      'Ribosomes are found in all living cells.',
      'Ribosomes translate mRNA into proteins.'
    ],
    relatedWords: ['protein', 'RNA', 'amino acid', 'translation'],
    difficulty: 'medium',
    category: 'cell'
  },

  'endoplasmic reticulum': {
    word: 'Endoplasmic Reticulum',
    phonetic: '/ˌendəˌplæzmɪk rɪˈtɪkjələm/',
    chinese: '內質網',
    definition: 'A network of membranes inside the cell that transports materials and makes proteins or lipids.',
    etymology: {
      prefix: 'endo-',
      prefixMeaning: 'within (Greek)',
      root: 'plasmic',
      rootMeaning: 'of the cytoplasm',
      suffix: 'reticulum',
      suffixMeaning: 'little net (Latin)',
      breakdown: 'endo + plasmic + reticulum = little net within the cytoplasm'
    },
    mnemonic: {
      technique: 'Visual',
      tip: 'ER = Endoplasmic Reticulum = "Internal Road system" or "Highway Network" inside the cell that transports materials!',
      tipCn: 'ER = 内质网 = 细胞内的"高速公路网络"，运输各种物质！'
    },
    examples: [
      'Rough ER has ribosomes and makes proteins.',
      'Smooth ER makes lipids and detoxifies substances.'
    ],
    relatedWords: ['ribosome', 'golgi apparatus', 'protein', 'lipid'],
    difficulty: 'hard',
    category: 'cell'
  },

  'golgi apparatus': {
    word: 'Golgi Apparatus',
    phonetic: '/ˈɡɒldʒi ˌæpəˈreɪtəs/',
    chinese: '高爾基體',
    definition: 'An organelle that modifies, packages, and ships proteins and lipids.',
    etymology: {
      root: 'Golgi',
      rootMeaning: 'Named after Camillo Golgi (Italian scientist)',
      suffix: 'apparatus',
      suffixMeaning: 'equipment, system',
      breakdown: 'Named after the scientist who discovered it'
    },
    mnemonic: {
      technique: 'Analogy',
      tip: 'Golgi = POST OFFICE! It receives packages (proteins), labels them with addresses, and ships them out. "G for Golgi, G for Go-ship-it!"',
      tipCn: '高尔基体 = 邮局！它接收包裹（蛋白质），贴上地址标签，然后发送出去。"高尔基寄出去！"'
    },
    examples: [
      'The Golgi apparatus packages proteins into vesicles.',
      'Secretory cells have large Golgi apparatus.'
    ],
    relatedWords: ['vesicle', 'protein', 'endoplasmic reticulum', 'secretion'],
    difficulty: 'medium',
    category: 'cell'
  },

  'cell wall': {
    word: 'Cell Wall',
    phonetic: '/sel wɔːl/',
    chinese: '細胞壁',
    definition: 'A rigid layer outside the cell membrane in plants, fungi, and bacteria, providing support and protection.',
    etymology: {
      breakdown: 'A "wall" surrounding the cell - like a protective fortress!'
    },
    mnemonic: {
      technique: 'Comparison',
      tip: 'Cell MEMBRANE = flexible security guard. Cell WALL = hard protective armor. Plants have BOTH! Animals have only membrane.',
      tipCn: '细胞膜 = 灵活的保安。细胞壁 = 坚硬的盔甲。植物两者都有！动物只有细胞膜。'
    },
    examples: [
      'Plant cell walls are made of cellulose.',
      'The cell wall provides structural support.'
    ],
    relatedWords: ['cellulose', 'cell membrane', 'plant cell', 'support'],
    difficulty: 'easy',
    category: 'cell'
  },

  'chloroplast': {
    word: 'Chloroplast',
    phonetic: '/ˈklɔːrəplæst/',
    chinese: '葉綠體',
    definition: 'An organelle in plant cells where photosynthesis occurs, containing chlorophyll.',
    etymology: {
      prefix: 'chloro-',
      prefixMeaning: 'green (Greek chloros)',
      root: '-plast',
      rootMeaning: 'formed body (Greek plastos)',
      breakdown: 'chloro + plast = green body'
    },
    mnemonic: {
      technique: 'Color',
      tip: 'CHLORO = green (like chlorine gas). Chloroplasts contain CHLOROphyll which is GREEN and does PHOTOSYNTHESIS!',
      tipCn: 'CHLORO = 绿色。叶绿体含有叶绿素，是绿色的，进行光合作用！'
    },
    examples: [
      'Chloroplasts capture sunlight for photosynthesis.',
      'Chloroplasts contain the green pigment chlorophyll.'
    ],
    relatedWords: ['chlorophyll', 'photosynthesis', 'plant cell', 'organelle'],
    difficulty: 'medium',
    category: 'cell'
  },

  'vacuole': {
    word: 'Vacuole',
    phonetic: '/ˈvækjuːoʊl/',
    chinese: '液泡',
    definition: 'A membrane-bound sac used for storage in cells, very large in plant cells.',
    etymology: {
      root: 'vacuus',
      rootMeaning: 'empty (Latin)',
      suffix: '-ole',
      suffixMeaning: 'small',
      breakdown: 'vacuus + ole = small empty space (but it is actually filled with fluid!)'
    },
    mnemonic: {
      technique: 'Visual',
      tip: 'VACU-ole sounds like VACUUM - but instead of being empty, it is a storage tank filled with water and nutrients!',
      tipCn: 'VACU-ole 听起来像 VACUUM（真空）——但它不是空的，而是装满水和营养物的储存罐！'
    },
    examples: [
      'Plant cells have a large central vacuole.',
      'The vacuole stores water and maintains turgor pressure.'
    ],
    relatedWords: ['turgor', 'plant cell', 'storage', 'water'],
    difficulty: 'medium',
    category: 'cell'
  },

  'turgor': {
    word: 'Turgor',
    phonetic: '/ˈtɜːrɡər/',
    chinese: '膨壓',
    definition: 'The pressure of water inside a cell pushing against the cell wall, keeping plants rigid.',
    etymology: {
      root: 'turgere',
      rootMeaning: 'to swell (Latin)',
      breakdown: 'The swelling pressure that keeps cells firm'
    },
    mnemonic: {
      technique: 'Physical',
      tip: 'Think of a water balloon - when FULL, it is firm and TURGID. When empty, it is limp. Plant cells need TURGOR pressure to stay firm!',
      tipCn: '想象一个水气球——充满水时它是硬的（TURGID）。空了就是软的。植物细胞需要膨压来保持坚挺！'
    },
    examples: [
      'Turgor pressure keeps plant stems upright.',
      'When plants wilt, they have lost turgor pressure.'
    ],
    relatedWords: ['vacuole', 'plant cell', 'water', 'osmosis'],
    difficulty: 'hard',
    category: 'cell'
  },

  'cellulose': {
    word: 'Cellulose',
    phonetic: '/ˈseljʊloʊs/',
    chinese: '纖維素',
    definition: 'A complex carbohydrate (polysaccharide) that forms the cell wall of plants.',
    etymology: {
      root: 'cellula',
      rootMeaning: 'small cell (Latin)',
      suffix: '-ose',
      suffixMeaning: 'sugar/carbohydrate',
      breakdown: 'cellula + ose = sugar from cells (plant cell walls)'
    },
    mnemonic: {
      technique: 'Association',
      tip: 'CELL-u-LOSE: Made of glucose, found in CELL walls. Humans cannot digest it (we "lose" it as fiber in our diet)!',
      tipCn: 'CELL-u-LOSE：由葡萄糖组成，存在于细胞壁中。人类无法消化它（作为膳食纤维被"丢失"）！'
    },
    examples: [
      'Cellulose provides structural support in plants.',
      'Cellulose is the main component of dietary fiber.'
    ],
    relatedWords: ['cell wall', 'carbohydrate', 'polysaccharide', 'glucose'],
    difficulty: 'medium',
    category: 'molecule'
  },

  // ========== Chemicals of Life - Additional Terms ==========
  'carbohydrate': {
    word: 'Carbohydrate',
    phonetic: '/ˌkɑːrboʊˈhaɪdreɪt/',
    chinese: '碳水化合物',
    definition: 'An organic compound consisting of carbon, hydrogen, and oxygen, used as an energy source. Includes sugars, starch, and cellulose.',
    etymology: {
      prefix: 'carbo-',
      prefixMeaning: 'carbon (Latin carbo = coal)',
      root: 'hydrate',
      rootMeaning: 'water (Greek hydor)',
      breakdown: 'carbo + hydrate = carbon + water. The formula is Cₓ(H₂O)ᵧ, looking like "carbon with water"!'
    },
    mnemonic: {
      technique: 'Formula Memory',
      tip: 'CARBO-HYDRATE = CARBON + WATER. The general formula is Cₓ(H₂O)ᵧ. Think of "carbs" as carbon atoms holding onto water molecules!',
      tipCn: 'CARBO-HYDRATE = 碳 + 水。通用公式是 Cₓ(H₂O)ᵧ。想象"碳水"就是碳原子抓着水分子！'
    },
    examples: [
      'Glucose is a simple carbohydrate (monosaccharide).',
      'Starch is a complex carbohydrate used for energy storage in plants.',
      'Carbohydrates provide about 4 calories per gram.'
    ],
    relatedWords: ['glucose', 'starch', 'cellulose', 'sugar', 'organic'],
    difficulty: 'easy',
    category: 'molecule'
  },

  'lipid': {
    word: 'Lipid',
    phonetic: '/ˈlɪpɪd/',
    chinese: '脂質',
    definition: 'A class of organic compounds including fats, oils, and waxes. They are insoluble in water but soluble in organic solvents.',
    etymology: {
      root: 'lipos',
      rootMeaning: 'fat (Greek)',
      breakdown: 'From Greek "lipos" meaning fat'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'LIPID sounds like "LIP" - think of lip balm which is waxy/oily (a lipid!). Lipids include fats, oils, and waxes.',
      tipCn: 'LIPID 听起来像 "LIP（嘴唇）" - 想想润唇膏是蜡质/油性的（就是脂质！）。脂质包括脂肪、油和蜡。'
    },
    examples: [
      'Lipids are stored in adipose tissue as an energy reserve.',
      'Phospholipids form the cell membrane.',
      'Lipids provide more energy per gram than carbohydrates.'
    ],
    relatedWords: ['fat', 'oil', 'phospholipid', 'cell membrane', 'organic'],
    difficulty: 'easy',
    category: 'molecule'
  },

  'protein': {
    word: 'Protein',
    phonetic: '/ˈproʊtiːn/',
    chinese: '蛋白質',
    definition: 'A large organic molecule made of amino acids joined by peptide bonds. Essential for structure, function, and regulation in organisms.',
    etymology: {
      root: 'proteios',
      rootMeaning: 'first, primary (Greek)',
      breakdown: 'From Greek "proteios" = first/primary, because proteins are the primary building blocks of life'
    },
    mnemonic: {
      technique: 'Importance',
      tip: 'PROTEIN from "proteios" = PRIMARY/FIRST. Proteins are the PRIMARY building blocks of your body - muscles, enzymes, antibodies are all proteins!',
      tipCn: 'PROTEIN 来自 "proteios" = 首要的。蛋白质是身体的首要建材 - 肌肉、酶、抗体都是蛋白质！'
    },
    examples: [
      'Proteins are made of amino acids linked by peptide bonds.',
      'Enzymes are proteins that catalyze chemical reactions.',
      'Haemoglobin is a protein that carries oxygen in blood.'
    ],
    relatedWords: ['amino acid', 'enzyme', 'haemoglobin', 'organic', 'synthesis'],
    difficulty: 'easy',
    category: 'molecule'
  },

  'nucleic acid': {
    word: 'Nucleic Acid',
    phonetic: '/njuːˈkliːɪk ˈæsɪd/',
    chinese: '核酸',
    definition: 'Large organic molecules (DNA and RNA) that carry genetic information and are essential for protein synthesis.',
    etymology: {
      root: 'nucleus',
      rootMeaning: 'kernel, center (Latin)',
      suffix: 'acid',
      suffixMeaning: 'acidic compound',
      breakdown: 'nucleic + acid = acids found in the nucleus (where DNA is located)'
    },
    mnemonic: {
      technique: 'Location',
      tip: 'NUCLEIC ACID = acid in the NUCLEUS. DNA and RNA are nucleic acids. DNA lives in the nucleus, RNA carries messages from it!',
      tipCn: 'NUCLEIC ACID = 细胞核中的酸。DNA和RNA是核酸。DNA住在细胞核里，RNA从那里传递信息！'
    },
    examples: [
      'DNA and RNA are the two types of nucleic acids.',
      'Nucleic acids store and transmit genetic information.',
      'The building blocks of nucleic acids are nucleotides.'
    ],
    relatedWords: ['DNA', 'RNA', 'nucleus', 'gene', 'organic'],
    difficulty: 'medium',
    category: 'molecule'
  },

  'aqueous': {
    word: 'Aqueous',
    phonetic: '/ˈeɪkwiəs/',
    chinese: '水溶的/水性的',
    definition: 'Relating to, containing, or dissolved in water.',
    etymology: {
      root: 'aqua',
      rootMeaning: 'water (Latin)',
      suffix: '-eous',
      suffixMeaning: 'having the nature of',
      breakdown: 'aqua + eous = having the nature of water'
    },
    mnemonic: {
      technique: 'Root Recognition',
      tip: 'AQUEOUS starts with "AQUA" like AQUARIUM (water tank) or AQUATIC (water animals). Aqueous = water-based!',
      tipCn: 'AQUEOUS 以 "AQUA" 开头，就像 AQUARIUM（水族馆）或 AQUATIC（水生的）。Aqueous = 水性的！'
    },
    examples: [
      'Most metabolic reactions occur in aqueous solutions.',
      'Cytoplasm is an aqueous medium inside cells.',
      'Ions dissolve easily in aqueous environments.'
    ],
    relatedWords: ['water', 'solution', 'dissolve', 'cytoplasm'],
    difficulty: 'medium',
    category: 'chemistry'
  },

  'evaporate': {
    word: 'Evaporate',
    phonetic: '/ɪˈvæpəreɪt/',
    chinese: '蒸發',
    definition: 'To change from liquid to vapor (gas), especially at a temperature below boiling point.',
    etymology: {
      prefix: 'e-',
      prefixMeaning: 'out (Latin)',
      root: 'vapor',
      rootMeaning: 'steam, vapor',
      breakdown: 'e + vapor + ate = to turn out into vapor'
    },
    mnemonic: {
      technique: 'Visual',
      tip: 'E-VAPOR-ATE: Water molecules ESCAPE as VAPOR when they evaporate. Think of sweat disappearing from your skin!',
      tipCn: 'E-VAPOR-ATE：水分子蒸发时以蒸汽形式逃逸。想想汗水从皮肤上消失！'
    },
    examples: [
      'Sweat evaporates from the skin, cooling the body.',
      'Water evaporates from leaves through transpiration.',
      'Evaporation is a cooling process because it removes heat.'
    ],
    relatedWords: ['water', 'cooling', 'sweat', 'transpiration'],
    difficulty: 'easy',
    category: 'process'
  },

  'lubricant': {
    word: 'Lubricant',
    phonetic: '/ˈluːbrɪkənt/',
    chinese: '潤滑劑',
    definition: 'A substance that reduces friction between surfaces in contact.',
    etymology: {
      root: 'lubricus',
      rootMeaning: 'slippery (Latin)',
      suffix: '-ant',
      suffixMeaning: 'agent that does something',
      breakdown: 'lubric + ant = agent that makes things slippery'
    },
    mnemonic: {
      technique: 'Function',
      tip: 'LUBRICANT makes things SLIPPERY like LUBE (oil). In biology, fluids like pleural fluid and synovial fluid act as lubricants!',
      tipCn: 'LUBRICANT 让东西变滑，像润滑油。在生物学中，胸膜液和滑液都是润滑剂！'
    },
    examples: [
      'Pleural fluid acts as a lubricant between the lungs and chest wall.',
      'Synovial fluid lubricates joints to reduce friction.',
      'Water is a major component of biological lubricants.'
    ],
    relatedWords: ['water', 'friction', 'pleural fluid', 'synovial fluid'],
    difficulty: 'medium',
    category: 'general'
  },

  'enzyme': {
    word: 'Enzyme',
    phonetic: '/ˈenzaɪm/',
    chinese: '酶',
    definition: 'A biological catalyst (usually a protein) that speeds up chemical reactions in living organisms without being consumed.',
    etymology: {
      prefix: 'en-',
      prefixMeaning: 'in (Greek)',
      root: 'zyme',
      rootMeaning: 'leaven, yeast (Greek zyme)',
      breakdown: 'en + zyme = something in yeast. First discovered in yeast fermentation!'
    },
    mnemonic: {
      technique: 'Analogy',
      tip: 'ENZYME = biological CATALYST. Think of enzymes as tiny workers in your body that speed up reactions without getting used up themselves!',
      tipCn: 'ENZYME = 生物催化剂。把酶想象成身体里的小工人，加速反应但自己不会被消耗！'
    },
    examples: [
      'Amylase is an enzyme that breaks down starch.',
      'Enzymes are specific - each enzyme only works on certain substrates.',
      'Magnesium and iron ions activate some enzymes.'
    ],
    relatedWords: ['catalyst', 'protein', 'reaction', 'substrate', 'magnesium'],
    difficulty: 'medium',
    category: 'molecule'
  },

  'ion': {
    word: 'Ion',
    phonetic: '/ˈaɪən/',
    chinese: '離子',
    definition: 'An atom or molecule with a net electric charge due to the loss or gain of electrons.',
    etymology: {
      root: 'ion',
      rootMeaning: 'going (Greek ienai = to go)',
      breakdown: 'From Greek "ion" = going, because ions move toward electrodes in solution'
    },
    mnemonic: {
      technique: 'Charge',
      tip: 'ION = atom with CHARGE. Positive ions (+) lost electrons (like Ca²⁺), negative ions (-) gained electrons (like NO₃⁻). They "go" toward opposite charges!',
      tipCn: 'ION = 带电荷的原子。正离子(+)失去电子（如Ca²⁺），负离子(-)获得电子（如NO₃⁻）。它们会"走向"相反的电荷！'
    },
    examples: [
      'Calcium ions (Ca²⁺) are important for bone formation.',
      'Inorganic ions are essential constituents of organisms.',
      'Ions dissolve in water to form aqueous solutions.'
    ],
    relatedWords: ['calcium', 'magnesium', 'nitrate', 'phosphate', 'inorganic'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  'magnesium': {
    word: 'Magnesium',
    phonetic: '/mæɡˈniːziəm/',
    chinese: '鎂',
    definition: 'A metallic element (Mg) essential for life. In plants, it is a component of chlorophyll. In both plants and animals, it activates enzymes.',
    etymology: {
      root: 'Magnesia',
      rootMeaning: 'a region in Greece where magnesium compounds were found',
      breakdown: 'Named after Magnesia, an ancient Greek region'
    },
    mnemonic: {
      technique: 'Color Association',
      tip: 'MAGNESIUM is in the middle of CHLOROPHYLL, making leaves GREEN! Remember: Mg = green = photosynthesis. Also activates enzymes!',
      tipCn: 'MAGNESIUM（鎂）在叶绿素中间，让叶子变绿！记住：Mg = 绿色 = 光合作用。也能激活酶！'
    },
    examples: [
      'Magnesium is the central atom in chlorophyll molecules.',
      'Magnesium ions activate many enzymes in metabolism.',
      'Plants lacking magnesium show yellowing of leaves (chlorosis).'
    ],
    relatedWords: ['chlorophyll', 'enzyme', 'ion', 'photosynthesis', 'inorganic'],
    difficulty: 'medium',
    category: 'chemistry'
  },

  // ========== Organic Constituents - Carbohydrates ==========
  'biomolecule': {
    word: 'Biomolecule',
    phonetic: '/ˌbaɪoʊˈmɒlɪkjuːl/',
    chinese: '生物分子',
    definition: 'An organic molecule produced by living organisms. The four major types are carbohydrates, lipids, proteins, and nucleic acids.',
    etymology: {
      prefix: 'bio-',
      prefixMeaning: 'life (Greek: bios)',
      root: 'molecule',
      rootMeaning: 'small mass (Latin: molecula)',
      breakdown: 'bio + molecule = molecule of life'
    },
    mnemonic: {
      technique: 'Word Parts',
      tip: 'BIO (life) + MOLECULE = molecules found in living things! The 4 main ones are Carbs, Lipids, Proteins, Nucleic acids (remember: "CLPN" = "CeLl PlaNet")',
      tipCn: 'BIO（生命）+ MOLECULE（分子）= 生物体中的分子！四大类是碳水化合物、脂质、蛋白质、核酸（CLPN）'
    },
    examples: [
      'Carbohydrates, lipids, proteins, and nucleic acids are the four major biomolecules.',
      'All biomolecules contain the element carbon.',
      'Biomolecules are also called organic compounds.'
    ],
    relatedWords: ['carbohydrate', 'lipid', 'protein', 'nucleic acid', 'organic'],
    difficulty: 'medium',
    category: 'molecule'
  },

  'starch': {
    word: 'Starch',
    phonetic: '/stɑːrtʃ/',
    chinese: '澱粉',
    definition: 'A complex carbohydrate (polysaccharide) used for energy storage in plants. Found in potatoes, rice, and grains.',
    etymology: {
      root: 'sterchen',
      rootMeaning: 'to stiffen (Old English)',
      breakdown: 'Named because starch was used to stiffen clothes'
    },
    mnemonic: {
      technique: 'Food Association',
      tip: 'STARCH = energy storage in PLANTS! Think of starchy foods: potatoes, rice, bread. "STARCH Stays in plants, glycoGEN Goes in animals!"',
      tipCn: 'STARCH = 植物中的能量储存！想想淀粉类食物：土豆、米饭、面包。"淀粉留在植物，糖原去动物！"'
    },
    examples: [
      'Starch is stored in starch grains in potato cells.',
      'Plants store excess glucose as starch.',
      'Starch is broken down to glucose when energy is needed.'
    ],
    relatedWords: ['glucose', 'glycogen', 'carbohydrate', 'energy reserve', 'cellulose'],
    difficulty: 'easy',
    category: 'molecule'
  },

  'glycogen': {
    word: 'Glycogen',
    phonetic: '/ˈɡlaɪkədʒən/',
    chinese: '糖原/肝醣',
    definition: 'A complex carbohydrate (polysaccharide) used for energy storage in animals. Stored mainly in the liver and muscles.',
    etymology: {
      prefix: 'glyco-',
      prefixMeaning: 'sugar (Greek: glykys = sweet)',
      root: '-gen',
      rootMeaning: 'producing (Greek: genes)',
      breakdown: 'glyco + gen = sugar producer (releases glucose when needed)'
    },
    mnemonic: {
      technique: 'Comparison',
      tip: 'GLYCOGEN = "GLYCO-GEN" = sugar generator for ANIMALS! Plants use STARCH, Animals use GLYCOGEN. Both store energy as glucose chains!',
      tipCn: 'GLYCOGEN = "糖-原" = 动物的糖原！植物用淀粉，动物用糖原。都是葡萄糖链储存能量！'
    },
    examples: [
      'Glycogen is stored as glycogen granules in liver cells.',
      'During exercise, glycogen is broken down to release glucose for energy.',
      'The liver can store about 100g of glycogen.'
    ],
    relatedWords: ['glucose', 'starch', 'carbohydrate', 'liver', 'energy reserve'],
    difficulty: 'medium',
    category: 'molecule'
  },

  'energy reserve': {
    word: 'Energy Reserve',
    phonetic: '/ˈenərdʒi rɪˈzɜːrv/',
    chinese: '能量儲備',
    definition: 'Stored energy in organisms that can be used when needed. In plants: starch. In animals: glycogen and fats.',
    etymology: {
      breakdown: 'Energy (capacity to do work) + Reserve (kept for future use) = stored energy for later'
    },
    mnemonic: {
      technique: 'Storage Analogy',
      tip: 'Think of energy reserves like a SAVINGS ACCOUNT for energy! Plants save STARCH, Animals save GLYCOGEN (short-term) and FAT (long-term).',
      tipCn: '把能量储备想成能量的"储蓄账户"！植物存淀粉，动物存糖原（短期）和脂肪（长期）。'
    },
    examples: [
      'Starch acts as an energy reserve in plants.',
      'Glycogen acts as an energy reserve in animals.',
      'Triglycerides are long-term energy reserves in animals.'
    ],
    relatedWords: ['starch', 'glycogen', 'triglyceride', 'glucose', 'lipid'],
    difficulty: 'easy',
    category: 'biology'
  },

  // ========== Organic Constituents - Lipids ==========
  'triglyceride': {
    word: 'Triglyceride',
    phonetic: '/traɪˈɡlɪsəraɪd/',
    chinese: '三酸甘油酯/甘油三酯',
    definition: 'A type of lipid (fat or oil) made of glycerol and three fatty acids. Used for energy storage, insulation, and organ protection.',
    etymology: {
      prefix: 'tri-',
      prefixMeaning: 'three (Greek/Latin)',
      root: 'glyceride',
      rootMeaning: 'compound with glycerol',
      breakdown: 'tri + glyceride = three fatty acids attached to one glycerol'
    },
    mnemonic: {
      technique: 'Structure Visualization',
      tip: 'TRI-GLYCERIDE = THREE fatty acids on one GLYCEROL backbone. Picture the letter "E" - the vertical line is glycerol, the 3 horizontal lines are fatty acids!',
      tipCn: 'TRI-GLYCERIDE = 三个脂肪酸连在一个甘油上。想象字母"E"——竖线是甘油，三条横线是脂肪酸！'
    },
    examples: [
      'Triglycerides (fats and oils) act as an energy reserve in organisms.',
      'Fats stored in adipose tissues are triglycerides.',
      'Triglycerides contain more energy per gram than carbohydrates.'
    ],
    relatedWords: ['lipid', 'fat', 'adipose', 'energy reserve', 'fatty acid'],
    difficulty: 'hard',
    category: 'molecule'
  },

  'adipose': {
    word: 'Adipose',
    phonetic: '/ˈædɪpoʊs/',
    chinese: '脂肪的/脂肪組織',
    definition: 'Relating to body fat. Adipose tissue is specialized tissue that stores fat (triglycerides) and provides insulation and protection.',
    etymology: {
      root: 'adeps',
      rootMeaning: 'fat (Latin)',
      breakdown: 'From Latin "adeps" meaning fat or lard'
    },
    mnemonic: {
      technique: 'Sound Association',
      tip: 'ADIPOSE sounds like "ADD-I-POSE" - when you ADD fat, you might need to change your POSE! Adipose tissue stores body fat.',
      tipCn: 'ADIPOSE听起来像"ADD-I-POSE"——添加脂肪可能要换姿势！脂肪组织储存体内脂肪。'
    },
    examples: [
      'Fats stored in adipose tissues under the skin act as an insulator.',
      'Adipose tissue around internal organs acts as a shock absorber.',
      'Adipose cells can expand to store more triglycerides.'
    ],
    relatedWords: ['triglyceride', 'fat', 'insulation', 'lipid', 'tissue'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'insulation': {
    word: 'Insulation',
    phonetic: '/ˌɪnsʊˈleɪʃən/',
    chinese: '絕緣/隔熱',
    definition: 'Material that prevents heat loss. In biology, fat under the skin (adipose tissue) acts as insulation to keep the body warm.',
    etymology: {
      root: 'insula',
      rootMeaning: 'island (Latin)',
      breakdown: 'From Latin "insula" = island; insulation "islands" or separates from heat loss'
    },
    mnemonic: {
      technique: 'Function',
      tip: 'INSULATION = keeps heat IN! Fat under your skin is like wearing a natural coat - it INSULATEs your body from the cold.',
      tipCn: 'INSULATION = 保持热量！皮下脂肪就像穿着天然的外套——为身体隔热保暖。'
    },
    examples: [
      'Fats stored in adipose tissues act as an insulator to reduce heat loss.',
      'Whales have thick blubber for insulation in cold water.',
      'Insulation helps maintain body temperature.'
    ],
    relatedWords: ['adipose', 'fat', 'heat', 'triglyceride'],
    difficulty: 'easy',
    category: 'biology'
  },

  // ========== Organic Constituents - Proteins ==========
  'tissue': {
    word: 'Tissue',
    phonetic: '/ˈtɪʃuː/',
    chinese: '組織',
    definition: 'A group of similar cells that work together to perform a specific function. Examples: muscle tissue, nerve tissue, skin.',
    etymology: {
      root: 'tissu',
      rootMeaning: 'woven fabric (French, from Latin texere = to weave)',
      breakdown: 'Like woven fabric, tissues are made of cells "woven" together'
    },
    mnemonic: {
      technique: 'Hierarchy',
      tip: 'TISSUES are between cells and organs: Cells → TISSUES → Organs → Systems. Think of tissue paper - thin layers of material woven together!',
      tipCn: '组织在细胞和器官之间：细胞 → 组织 → 器官 → 系统。想想纸巾(tissue)——编织在一起的薄层！'
    },
    examples: [
      'Some proteins make up body tissues like hair, muscles, and skin.',
      'Muscle tissue is made of protein fibers.',
      'Different tissues combine to form organs.'
    ],
    relatedWords: ['cell', 'organ', 'protein', 'muscle', 'skin'],
    difficulty: 'easy',
    category: 'anatomy'
  },

  'hormone': {
    word: 'Hormone',
    phonetic: '/ˈhɔːrmoʊn/',
    chinese: '激素/荷爾蒙',
    definition: 'A chemical messenger produced by glands that travels in blood to regulate body processes like growth, metabolism, and reproduction.',
    etymology: {
      root: 'horman',
      rootMeaning: 'to set in motion, urge on (Greek: hormao)',
      breakdown: 'From Greek "horman" = to excite or stimulate; hormones stimulate body processes'
    },
    mnemonic: {
      technique: 'Function',
      tip: 'HORMONES are chemical MESSENGERS! They HORn in on cells to deliver messages. Examples: growth hormone makes you grow, insulin controls blood sugar.',
      tipCn: '激素是化学信使！它们向细胞传递消息。例如：生长激素使你长高，胰岛素控制血糖。'
    },
    examples: [
      'Some proteins act as hormones to regulate body processes.',
      'Growth hormone regulates growth in humans.',
      'Insulin is a hormone that controls blood sugar levels.'
    ],
    relatedWords: ['protein', 'enzyme', 'gland', 'insulin', 'growth'],
    difficulty: 'medium',
    category: 'molecule'
  },

  'antibody': {
    word: 'Antibody',
    phonetic: '/ˈæntɪbɒdi/',
    chinese: '抗體',
    definition: 'A protein produced by the immune system that recognizes and helps destroy foreign substances (pathogens) like bacteria and viruses.',
    etymology: {
      prefix: 'anti-',
      prefixMeaning: 'against (Greek)',
      root: 'body',
      rootMeaning: 'foreign body/substance',
      breakdown: 'anti + body = against foreign bodies (pathogens)'
    },
    mnemonic: {
      technique: 'Defense Analogy',
      tip: 'ANTI-BODY = AGAINST foreign BODIES! Antibodies are like security guards that recognize and attack invaders (pathogens). Each antibody fits one specific invader like a key fits a lock!',
      tipCn: 'ANTI-BODY = 对抗外来物！抗体像保安，识别并攻击入侵者（病原体）。每种抗体对应一种入侵者，像钥匙配锁！'
    },
    examples: [
      'Some proteins act as antibodies to protect the body against pathogens.',
      'Antibodies are Y-shaped proteins that bind to specific antigens.',
      'Vaccines work by helping the body produce antibodies.'
    ],
    relatedWords: ['protein', 'pathogen', 'immune system', 'antigen', 'virus'],
    difficulty: 'medium',
    category: 'molecule'
  },

  'pathogen': {
    word: 'Pathogen',
    phonetic: '/ˈpæθədʒən/',
    chinese: '病原體',
    definition: 'A microorganism (virus, bacterium, fungus, or parasite) that causes disease in its host.',
    etymology: {
      root: 'pathos',
      rootMeaning: 'suffering, disease (Greek)',
      suffix: '-gen',
      suffixMeaning: 'producer (Greek: genes)',
      breakdown: 'patho + gen = disease producer'
    },
    mnemonic: {
      technique: 'Word Parts',
      tip: 'PATHO-GEN = disease GENERATOR! Pathogens are germs that generate (cause) disease. Examples: bacteria, viruses, fungi.',
      tipCn: 'PATHO-GEN = 疾病产生者！病原体是产生疾病的微生物。例如：细菌、病毒、真菌。'
    },
    examples: [
      'Pathogens are viruses or organisms that cause diseases.',
      'Antibodies help protect the body against pathogens.',
      'Common pathogens include bacteria like E. coli and viruses like influenza.'
    ],
    relatedWords: ['antibody', 'virus', 'bacteria', 'disease', 'immune system'],
    difficulty: 'medium',
    category: 'biology'
  },

  'respiration': {
    word: 'Respiration',
    phonetic: '/ˌrespɪˈreɪʃən/',
    chinese: '呼吸作用',
    definition: 'The process by which cells break down glucose to release energy (ATP). It occurs in mitochondria and requires oxygen (aerobic respiration).',
    etymology: {
      prefix: 're-',
      prefixMeaning: 'again (Latin)',
      root: 'spirare',
      rootMeaning: 'to breathe (Latin)',
      breakdown: 're + spirare = to breathe again; the continuous process of breathing/energy release'
    },
    mnemonic: {
      technique: 'Process Memory',
      tip: 'RESPIRATION = cells "breathing" to release energy! Glucose + Oxygen → Carbon dioxide + Water + ENERGY. Opposite of photosynthesis!',
      tipCn: '呼吸作用 = 细胞"呼吸"释放能量！葡萄糖 + 氧气 → 二氧化碳 + 水 + 能量。与光合作用相反！'
    },
    examples: [
      'Glucose is directly broken down in respiration to release energy.',
      'Respiration occurs in the mitochondria of cells.',
      'The equation: glucose + oxygen → carbon dioxide + water + energy (ATP)'
    ],
    relatedWords: ['glucose', 'mitochondria', 'ATP', 'oxygen', 'energy'],
    difficulty: 'medium',
    category: 'process'
  },

  // ========== Organic Constituents - Nucleic Acids ==========
  'dna': {
    word: 'DNA',
    phonetic: '/ˌdiːenˈeɪ/',
    chinese: '脫氧核糖核酸 (DNA)',
    definition: 'Deoxyribonucleic acid - the molecule that carries genetic information in all living organisms. It has a double helix structure.',
    etymology: {
      breakdown: 'D = Deoxy (minus oxygen), N = Nucleic (in nucleus), A = Acid. Full name: Deoxyribonucleic Acid'
    },
    mnemonic: {
      technique: 'Acronym Expansion',
      tip: 'DNA = "Does Not Alter" - your DNA is your genetic blueprint that stays the same! It carries all your genetic information from parents.',
      tipCn: 'DNA = "不会改变" - 你的DNA是遗传蓝图，保持不变！它携带来自父母的所有遗传信息。'
    },
    examples: [
      'DNA is the genetic material in organisms.',
      'DNA carries genetic information which controls activities of cells.',
      'DNA has a double helix structure discovered by Watson and Crick.'
    ],
    relatedWords: ['rna', 'nucleic acid', 'gene', 'chromosome', 'genetic'],
    difficulty: 'easy',
    category: 'molecule'
  },

  'rna': {
    word: 'RNA',
    phonetic: '/ˌɑːrənˈeɪ/',
    chinese: '核糖核酸 (RNA)',
    definition: 'Ribonucleic acid - a molecule involved in protein synthesis. It carries genetic information from DNA to ribosomes.',
    etymology: {
      breakdown: 'R = Ribo (has ribose sugar), N = Nucleic (in nucleus), A = Acid. Full name: Ribonucleic Acid'
    },
    mnemonic: {
      technique: 'Function Comparison',
      tip: 'RNA = "Reads and Acts"! While DNA stores information, RNA reads it and acts to make proteins. RNA is the messenger between DNA and proteins.',
      tipCn: 'RNA = "读取并执行"！DNA存储信息，RNA读取并执行以制造蛋白质。RNA是DNA和蛋白质之间的信使。'
    },
    examples: [
      'RNA is involved in the synthesis of proteins.',
      'mRNA carries genetic instructions from DNA to ribosomes.',
      'Unlike DNA, RNA is usually single-stranded.'
    ],
    relatedWords: ['dna', 'nucleic acid', 'protein', 'ribosome', 'synthesis'],
    difficulty: 'medium',
    category: 'molecule'
  },

  'genetic': {
    word: 'Genetic',
    phonetic: '/dʒəˈnetɪk/',
    chinese: '遺傳的/基因的',
    definition: 'Relating to genes or heredity. Genetic information is passed from parents to offspring through DNA.',
    etymology: {
      root: 'genesis',
      rootMeaning: 'origin, birth (Greek)',
      breakdown: 'From Greek "genesis" = origin; relating to how traits originate and are inherited'
    },
    mnemonic: {
      technique: 'Family Connection',
      tip: 'GENETIC = from your GENES = from your parents! Genetic information determines your features: eye color, height, hair color - all inherited!',
      tipCn: '遗传的 = 来自你的基因 = 来自父母！遗传信息决定你的特征：眼睛颜色、身高、发色——都是遗传的！'
    },
    examples: [
      'DNA carries genetic information which controls cell activities.',
      'Genetic information determines the features of organisms.',
      'Genetic diseases are caused by mutations in DNA.'
    ],
    relatedWords: ['dna', 'gene', 'heredity', 'chromosome', 'mutation'],
    difficulty: 'easy',
    category: 'biology'
  },

  'deoxyribonucleic acid': {
    word: 'Deoxyribonucleic Acid',
    phonetic: '/diːˌɒksɪˌraɪboʊnjuːˈkliːɪk ˈæsɪd/',
    chinese: '脫氧核糖核酸',
    definition: 'The full name for DNA - the molecule that stores genetic information in a double helix structure. "Deoxy" means it has one less oxygen than RNA.',
    etymology: {
      prefix: 'de-',
      prefixMeaning: 'remove, away from (Latin)',
      root: 'oxy',
      rootMeaning: 'oxygen',
      suffix: 'ribonucleic acid',
      suffixMeaning: 'nucleic acid containing ribose sugar',
      breakdown: 'de + oxy + ribonucleic acid = ribonucleic acid MINUS one oxygen'
    },
    mnemonic: {
      technique: 'Name Breakdown',
      tip: 'DE-OXY-RIBO-NUCLEIC ACID = (1)DE-OXY: minus oxygen, (2)RIBO: ribose sugar, (3)NUCLEIC: in nucleus, (4)ACID: acidic molecule. Just call it DNA!',
      tipCn: '脱氧核糖核酸 = (1)脱氧：少一个氧，(2)核糖：糖类，(3)核：在细胞核，(4)酸：酸性分子。简称DNA！'
    },
    examples: [
      'Deoxyribonucleic acid (DNA) carries genetic information.',
      'The "deoxy" means DNA has one less oxygen atom than RNA.',
      'DNA was first isolated by Friedrich Miescher in 1869.'
    ],
    relatedWords: ['dna', 'rna', 'nucleic acid', 'genetic', 'nucleus'],
    difficulty: 'hard',
    category: 'molecule'
  },

  'ribonucleic acid': {
    word: 'Ribonucleic Acid',
    phonetic: '/ˌraɪboʊnjuːˈkliːɪk ˈæsɪd/',
    chinese: '核糖核酸',
    definition: 'The full name for RNA - the molecule that helps synthesize proteins using instructions from DNA. Contains ribose sugar (with oxygen).',
    etymology: {
      root: 'ribo',
      rootMeaning: 'from ribose (a type of sugar)',
      suffix: 'nucleic acid',
      suffixMeaning: 'acidic molecule found in nucleus',
      breakdown: 'ribo + nucleic acid = nucleic acid containing ribose sugar'
    },
    mnemonic: {
      technique: 'Comparison',
      tip: 'RIBO-NUCLEIC ACID has RIBOSE sugar (with oxygen), while DNA is DE-OXY (without that oxygen). RNA is the full version, DNA is the "de-oxy" version!',
      tipCn: '核糖核酸有核糖（含氧），而DNA是脱氧的（少一个氧）。RNA是完整版，DNA是"脱氧"版！'
    },
    examples: [
      'Ribonucleic acid (RNA) is involved in protein synthesis.',
      'mRNA (messenger RNA) carries genetic code from DNA to ribosomes.',
      'There are three main types: mRNA, tRNA, and rRNA.'
    ],
    relatedWords: ['rna', 'dna', 'nucleic acid', 'protein', 'synthesis'],
    difficulty: 'medium',
    category: 'molecule'
  },

  // ========== Cell Discovery and History ==========
  'microscope': {
    word: 'Microscope',
    phonetic: '/ˈmaɪkrəskoʊp/',
    chinese: '顯微鏡',
    definition: 'An optical instrument used to view objects that are too small to be seen with the naked eye, by magnifying them.',
    etymology: {
      prefix: 'micro-',
      prefixMeaning: 'small (Greek: mikros)',
      root: 'scope',
      rootMeaning: 'to look, view (Greek: skopein)',
      breakdown: 'micro + scope = instrument for viewing small things'
    },
    mnemonic: {
      technique: 'Word Parts',
      tip: 'MICRO (tiny) + SCOPE (to see) = tool to SEE TINY things! Like a telescope sees far, a microscope sees small.',
      tipCn: 'MICRO（微小）+ SCOPE（看）= 看微小东西的工具！就像望远镜看远处，显微镜看小东西。'
    },
    examples: [
      'Robert Hooke used a microscope to observe cork cells in 1665.',
      'Light microscopes can magnify up to 1600 times.',
      'Electron microscopes can magnify up to 12,000 times or more.'
    ],
    relatedWords: ['magnification', 'cell', 'electron microscope', 'lens'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'magnification': {
    word: 'Magnification',
    phonetic: '/ˌmæɡnɪfɪˈkeɪʃən/',
    chinese: '放大率/放大倍數',
    definition: 'The process of making something appear larger than it is, or the degree to which an image is enlarged.',
    etymology: {
      root: 'magnus',
      rootMeaning: 'great, large (Latin)',
      suffix: '-ification',
      suffixMeaning: 'process of making',
      breakdown: 'magn + ification = process of making larger'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'MAGNIFY = make things look MAGNIFICENT (big and impressive)! Magnification tells you how many times bigger the image appears.',
      tipCn: 'MAGNIFY = 让东西看起来宏伟（大而壮观）！放大率告诉你图像看起来大了多少倍。'
    },
    examples: [
      'The first microscope had a magnification of only 3-9 times.',
      'Modern light microscopes have a magnification of about 1600 times.',
      'Higher magnification allows us to see more details of cells.'
    ],
    relatedWords: ['microscope', 'lens', 'resolution', 'enlarge'],
    difficulty: 'easy',
    category: 'general'
  },

  'cork': {
    word: 'Cork',
    phonetic: '/kɔːrk/',
    chinese: '軟木/木栓',
    definition: 'A tissue of dead cells forming the bark of trees, especially the cork oak. Robert Hooke observed cork to discover cells.',
    etymology: {
      root: 'cortex',
      rootMeaning: 'bark (Latin)',
      breakdown: 'From Latin "cortex" meaning bark; cork comes from the bark of cork oak trees'
    },
    mnemonic: {
      technique: 'Historical Association',
      tip: 'CORK led to CELLS! Robert Hooke looked at CORK (wine bottle material) and saw "small boxes" - he called them CELLS. Cork = first cells observed!',
      tipCn: '软木导致细胞发现！罗伯特·胡克看软木塞时看到"小盒子"——他称之为细胞。软木 = 首次观察到的细胞！'
    },
    examples: [
      'Robert Hooke examined a thin slice of cork under his microscope.',
      'Cork is made of dead plant cells with thick cell walls.',
      'The "cells" Hooke saw were actually the cell walls of dead cork cells.'
    ],
    relatedWords: ['cell', 'cell wall', 'bark', 'Robert Hooke'],
    difficulty: 'easy',
    category: 'biology'
  },

  'cell theory': {
    word: 'Cell Theory',
    phonetic: '/sel ˈθɪəri/',
    chinese: '細胞學說',
    definition: 'A fundamental theory in biology stating that: (1) all organisms are made of cells, (2) the cell is the basic unit of life, and (3) all cells come from pre-existing cells.',
    etymology: {
      breakdown: 'Cell (basic unit) + Theory (scientific explanation) = the scientific explanation of how cells form the basis of life'
    },
    mnemonic: {
      technique: 'Three Points Memory',
      tip: 'Cell Theory = "ALL-BASIC-FROM": (1) ALL organisms = cells, (2) Cell = BASIC unit of life, (3) All cells come FROM pre-existing cells. Proposed by Schwann in 1839!',
      tipCn: '细胞学说 = "全-基-来"：(1)所有生物由细胞组成，(2)细胞是生命的基本单位，(3)所有细胞来自已有的细胞。施旺于1839年提出！'
    },
    examples: [
      'The Cell Theory was proposed by Theodor Schwann in 1839.',
      'According to Cell Theory, all organisms are made up of one or more cells.',
      'The Cell Theory is one of the foundations of biology.'
    ],
    relatedWords: ['cell', 'organism', 'unicellular', 'multicellular', 'pre-existing'],
    difficulty: 'medium',
    category: 'biology'
  },

  'pre-existing': {
    word: 'Pre-existing',
    phonetic: '/ˌpriːɪɡˈzɪstɪŋ/',
    chinese: '先前存在的/已有的',
    definition: 'Existing before something else; in Cell Theory, it means all new cells come from cells that already exist.',
    etymology: {
      prefix: 'pre-',
      prefixMeaning: 'before (Latin: prae)',
      root: 'existing',
      rootMeaning: 'being present, living',
      breakdown: 'pre + existing = existing before'
    },
    mnemonic: {
      technique: 'Prefix Recognition',
      tip: 'PRE = BEFORE (like preview, prepare). PRE-EXISTING = existing BEFORE. New cells come from cells that existed BEFORE them!',
      tipCn: 'PRE = 之前（如preview预览，prepare准备）。PRE-EXISTING = 之前存在的。新细胞来自之前就存在的细胞！'
    },
    examples: [
      'All cells come from pre-existing cells - this is part of the Cell Theory.',
      'Cells cannot appear from nothing; they must come from pre-existing cells.',
      'Cell division creates new cells from pre-existing ones.'
    ],
    relatedWords: ['cell theory', 'cell division', 'reproduction'],
    difficulty: 'easy',
    category: 'general'
  },

  'electron microscope': {
    word: 'Electron Microscope',
    phonetic: '/ɪˈlektrɒn ˈmaɪkrəskoʊp/',
    chinese: '電子顯微鏡',
    definition: 'A microscope that uses a beam of electrons instead of light to create highly magnified images, allowing visualization of very small structures like ribosomes.',
    etymology: {
      breakdown: 'Electron (subatomic particle) + Microscope (viewing instrument) = microscope using electrons instead of light'
    },
    mnemonic: {
      technique: 'Technology Comparison',
      tip: 'ELECTRON microscope uses ELECTRONS (not light) to see SUPER tiny things! Light microscope = 1600x, Electron microscope = 12,000x+. Discovered ribosomes in 1950!',
      tipCn: '电子显微镜用电子（不是光）看超级小的东西！光学显微镜 = 1600倍，电子显微镜 = 12000倍以上。1950年发现核糖体！'
    },
    examples: [
      'The first electron microscope was made in 1933.',
      'Electron microscopes can magnify up to 12,000 times or more.',
      'Scientists used electron microscopes to discover ribosomes in 1950.'
    ],
    relatedWords: ['microscope', 'magnification', 'ribosome', 'resolution'],
    difficulty: 'medium',
    category: 'instrument'
  },

  'microorganism': {
    word: 'Microorganism',
    phonetic: '/ˌmaɪkroʊˈɔːrɡənɪzəm/',
    chinese: '微生物',
    definition: 'A microscopic organism, especially a bacterium, virus, or fungus. Too small to see without a microscope.',
    etymology: {
      prefix: 'micro-',
      prefixMeaning: 'small (Greek: mikros)',
      root: 'organism',
      rootMeaning: 'living thing',
      breakdown: 'micro + organism = small living thing'
    },
    mnemonic: {
      technique: 'Size Association',
      tip: 'MICRO (tiny) + ORGANISM (living thing) = tiny living things you cannot see! Bacteria, viruses, and some fungi are microorganisms.',
      tipCn: 'MICRO（微小）+ ORGANISM（生物）= 看不见的微小生物！细菌、病毒和一些真菌都是微生物。'
    },
    examples: [
      'Leeuwenhoek observed microorganisms in pond water in 1674.',
      'Bacteria and viruses are examples of microorganisms.',
      'Microorganisms can only be seen under a microscope.'
    ],
    relatedWords: ['microscope', 'bacteria', 'virus', 'unicellular'],
    difficulty: 'easy',
    category: 'biology'
  },

  'formulation': {
    word: 'Formulation',
    phonetic: '/ˌfɔːrmjʊˈleɪʃən/',
    chinese: '構想/制定/闡述',
    definition: 'The act of creating or developing a theory, plan, or idea in a clear and organized way.',
    etymology: {
      root: 'formula',
      rootMeaning: 'form, rule (Latin: forma)',
      suffix: '-ation',
      suffixMeaning: 'process or result of',
      breakdown: 'formul + ation = process of forming/creating'
    },
    mnemonic: {
      technique: 'Process Memory',
      tip: 'FORMULATION = FORMING a theory or idea. Schwann\'s FORMULATION of the Cell Theory = how he FORMED/created the theory in 1839.',
      tipCn: 'FORMULATION = 形成理论或想法。施旺对细胞学说的构想 = 他在1839年如何形成/创建这个理论。'
    },
    examples: [
      'The formulation of the Cell Theory was a major milestone in biology.',
      'Schwann is credited with the formulation of the Cell Theory in 1839.',
      'Scientific discoveries led to the formulation of new theories.'
    ],
    relatedWords: ['cell theory', 'theory', 'discovery', 'development'],
    difficulty: 'medium',
    category: 'general'
  },

  // ========== Microscopes: Tools for Studying Cells ==========
  'resolution': {
    word: 'Resolution',
    phonetic: '/ˌrezəˈluːʃən/',
    chinese: '分辨率/解析度',
    definition: 'The ability of a microscope to distinguish between two separate points or objects. Higher resolution means clearer, more detailed images.',
    etymology: {
      prefix: 're-',
      prefixMeaning: 'again, back (Latin)',
      root: 'solvere',
      rootMeaning: 'to loosen, solve (Latin)',
      breakdown: 're + solve = to break down again into parts, hence the ability to see fine details'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'Think of RESOLVING a mystery - you need to see DETAILS clearly! Higher RESOLUTION = more DETAIL resolved. Like HD vs SD TV!',
      tipCn: '想象解决（RESOLVE）一个谜团——你需要清楚地看到细节！更高的分辨率 = 更多细节被"解析"出来。就像高清vs标清电视！'
    },
    examples: [
      'Electron microscopes have higher resolution than light microscopes.',
      'With higher resolution, we can see more details of cell structures.',
      'Resolution determines how clear and detailed an image appears.'
    ],
    relatedWords: ['microscope', 'magnification', 'electron microscope', 'detail'],
    difficulty: 'medium',
    category: 'general'
  },

  'specimen': {
    word: 'Specimen',
    phonetic: '/ˈspesɪmən/',
    chinese: '標本/樣本',
    definition: 'A sample or example of something, especially one used for scientific study or display under a microscope.',
    etymology: {
      root: 'specere',
      rootMeaning: 'to look at (Latin)',
      breakdown: 'From Latin "specimen" meaning example, from "specere" = to look at'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'SPECIMEN sounds like "SPECIAL MEN" - scientists look at SPECIAL samples! Or think: SPEC (look) + IMEN = something to LOOK at.',
      tipCn: 'SPECIMEN听起来像"特别的人"——科学家观察特别的样本！或者：SPEC（看）+ IMEN = 用来看的东西。'
    },
    examples: [
      'The scientist prepared a thin specimen for observation under the microscope.',
      'Living specimens can be observed under a light microscope.',
      'The specimen was stained to make the cells more visible.'
    ],
    relatedWords: ['microscope', 'sample', 'slide', 'observation'],
    difficulty: 'easy',
    category: 'biology'
  },

  'transmission electron microscope': {
    word: 'Transmission Electron Microscope',
    phonetic: '/trænzˈmɪʃən ɪˈlektrɒn ˈmaɪkrəskoʊp/',
    chinese: '透射電子顯微鏡',
    definition: 'A type of electron microscope where electron beams pass through a very thin specimen to form an image, showing internal structures in 2D black and white.',
    etymology: {
      breakdown: 'TRANSMISSION (passing through) + ELECTRON (particle) + MICROSCOPE (viewing instrument) = microscope where electrons TRANSMIT through the specimen'
    },
    mnemonic: {
      technique: 'Word Parts',
      tip: 'TEM = THROUGH Every Material! Electrons TRANSMIT (pass) THROUGH the specimen like light through glass. Shows INTERNAL structures (2D). Max 1,500,000x!',
      tipCn: 'TEM = 透过每种材料！电子透过（TRANSMIT）标本，就像光透过玻璃。显示内部结构（2D）。最大150万倍！'
    },
    examples: [
      'TEM can magnify up to 1,500,000 times.',
      'Transmission electron microscopes show the internal structures of cells.',
      'TEM produces black and white two-dimensional images.'
    ],
    relatedWords: ['electron microscope', 'scanning electron microscope', 'resolution', 'magnification'],
    difficulty: 'hard',
    category: 'instrument'
  },

  'tem': {
    word: 'TEM',
    phonetic: '/tiː iː em/',
    chinese: '透射電子顯微鏡（縮寫）',
    definition: 'Abbreviation for Transmission Electron Microscope. Electron beams pass through thin specimens to show internal structures.',
    mnemonic: {
      technique: 'Acronym Memory',
      tip: 'TEM = "Through Everything Method" - electrons go THROUGH! Or "The Electron (goes) through Material".',
      tipCn: 'TEM = "穿透一切的方法"——电子穿透标本！'
    },
    examples: [
      'TEM images show the internal structures of cells.',
      'Scientists use TEM to observe organelles inside cells.',
      'TEM produces 2D black and white images.'
    ],
    relatedWords: ['transmission electron microscope', 'sem', 'electron microscope'],
    difficulty: 'medium',
    category: 'instrument'
  },

  'scanning electron microscope': {
    word: 'Scanning Electron Microscope',
    phonetic: '/ˈskænɪŋ ɪˈlektrɒn ˈmaɪkrəskoʊp/',
    chinese: '掃描電子顯微鏡',
    definition: 'A type of electron microscope where electron beams scan over the surface of a specimen to form a 3D image, showing external structures.',
    etymology: {
      breakdown: 'SCANNING (moving across surface) + ELECTRON (particle) + MICROSCOPE = microscope that SCANS the surface with electrons'
    },
    mnemonic: {
      technique: 'Action Association',
      tip: 'SEM = SURFACE Every Moment! Electrons SCAN across the SURFACE like a scanner on paper. Shows EXTERNAL structures (3D). Max 200,000x!',
      tipCn: 'SEM = 每刻扫描表面！电子在表面扫描，就像扫描仪扫描纸张。显示外部结构（3D）。最大20万倍！'
    },
    examples: [
      'SEM can magnify up to 200,000 times.',
      'Scanning electron microscopes show the external surface of specimens.',
      'SEM produces black and white three-dimensional images.'
    ],
    relatedWords: ['electron microscope', 'transmission electron microscope', 'resolution', 'surface'],
    difficulty: 'hard',
    category: 'instrument'
  },

  'sem': {
    word: 'SEM',
    phonetic: '/es iː em/',
    chinese: '掃描電子顯微鏡（縮寫）',
    definition: 'Abbreviation for Scanning Electron Microscope. Electron beams scan the surface to show external 3D structures.',
    mnemonic: {
      technique: 'Acronym Memory',
      tip: 'SEM = "Surface Examination Method" - scans the SURFACE! Or "Scanning External Material".',
      tipCn: 'SEM = "表面检查方法"——扫描表面！'
    },
    examples: [
      'SEM images show the 3D surface of specimens.',
      'Scientists use SEM to study the external features of cells.',
      'SEM produces 3D black and white images.'
    ],
    relatedWords: ['scanning electron microscope', 'tem', 'electron microscope'],
    difficulty: 'medium',
    category: 'instrument'
  },

  'electron beam': {
    word: 'Electron Beam',
    phonetic: '/ɪˈlektrɒn biːm/',
    chinese: '電子束',
    definition: 'A stream of electrons moving together in the same direction, used in electron microscopes to create highly magnified images.',
    etymology: {
      breakdown: 'ELECTRON (negatively charged particle) + BEAM (a ray or stream of particles/light) = a focused stream of electrons'
    },
    mnemonic: {
      technique: 'Visual Analogy',
      tip: 'Think of a LASER BEAM but with ELECTRONS instead of light! The electron BEAM shoots electrons at the specimen like a flashlight shoots light.',
      tipCn: '想象激光束，但用的是电子而不是光！电子束像手电筒射出光一样射出电子照射标本。'
    },
    examples: [
      'Electron beams pass through specimens in a TEM.',
      'In SEM, electron beams scan over the surface of the specimen.',
      'Electron beams provide much higher magnification than light.'
    ],
    relatedWords: ['electron microscope', 'tem', 'sem', 'magnification'],
    difficulty: 'medium',
    category: 'general'
  },

  'micrograph': {
    word: 'Micrograph',
    phonetic: '/ˈmaɪkrəɡræf/',
    chinese: '顯微照片',
    definition: 'A photograph or image taken through a microscope, showing magnified views of specimens.',
    etymology: {
      prefix: 'micro-',
      prefixMeaning: 'small (Greek: mikros)',
      root: 'graph',
      rootMeaning: 'to write, draw, record (Greek: graphein)',
      breakdown: 'micro + graph = a picture/record of small things'
    },
    mnemonic: {
      technique: 'Word Parts',
      tip: 'MICRO (small) + GRAPH (picture/drawing) = a PICTURE of something SMALL! Like photograph but for MICRO things.',
      tipCn: 'MICRO（微小）+ GRAPH（图片）= 微小东西的图片！就像照片（photograph）但是是显微的。'
    },
    examples: [
      'The electron micrograph showed the detailed structure of the ribosome.',
      'Most electron micrographs in textbooks have false colour added.',
      'The micrograph clearly shows the cell wall and nucleus.'
    ],
    relatedWords: ['microscope', 'photograph', 'image', 'magnification'],
    difficulty: 'medium',
    category: 'biology'
  },

  'two-dimensional': {
    word: 'Two-dimensional',
    phonetic: '/tuː dɪˈmenʃənəl/',
    chinese: '二維的/平面的',
    definition: 'Having only two dimensions (length and width), appearing flat without depth. TEM images are two-dimensional.',
    etymology: {
      breakdown: 'TWO (2) + DIMENSION (measurement direction) + AL (adjective suffix) = having 2 directions of measurement'
    },
    mnemonic: {
      technique: 'Number Association',
      tip: '2D = FLAT like a piece of paper! TEM shows 2D images (flat, no depth). Think: 2D = TWO Directions only (up-down, left-right).',
      tipCn: '2D = 像纸一样平！TEM显示2D图像（平面，无深度）。想：2D = 只有两个方向（上下、左右）。'
    },
    examples: [
      'TEM produces two-dimensional black and white images.',
      'A photograph is a two-dimensional representation of a 3D object.',
      'Two-dimensional images show internal structures but lack depth.'
    ],
    relatedWords: ['three-dimensional', 'tem', 'flat', 'image'],
    difficulty: 'easy',
    category: 'general'
  },

  'three-dimensional': {
    word: 'Three-dimensional',
    phonetic: '/θriː dɪˈmenʃənəl/',
    chinese: '三維的/立體的',
    definition: 'Having three dimensions (length, width, and height/depth), appearing to have depth and volume. SEM images are three-dimensional.',
    etymology: {
      breakdown: 'THREE (3) + DIMENSION (measurement direction) + AL (adjective suffix) = having 3 directions of measurement'
    },
    mnemonic: {
      technique: 'Number Association',
      tip: '3D = has DEPTH like a real object! SEM shows 3D images (with depth, looks real). Think: 3D = THREE Directions (up-down, left-right, front-back).',
      tipCn: '3D = 像真实物体有深度！SEM显示3D图像（有深度，看起来真实）。想：3D = 三个方向（上下、左右、前后）。'
    },
    examples: [
      'SEM produces three-dimensional black and white images.',
      'Three-dimensional images show the external surface with depth.',
      'The 3D micrograph revealed the texture of the cell surface.'
    ],
    relatedWords: ['two-dimensional', 'sem', 'depth', 'surface'],
    difficulty: 'easy',
    category: 'general'
  },

  'false colour': {
    word: 'False Colour',
    phonetic: '/fɔːls ˈkʌlər/',
    chinese: '偽彩色/假色',
    definition: 'Colour added to black and white images (especially electron micrographs) using computer software to make structures easier to identify.',
    etymology: {
      breakdown: 'FALSE (not real, artificial) + COLOUR = artificial colour added to images that were originally not coloured'
    },
    mnemonic: {
      technique: 'Logic Association',
      tip: 'FALSE = FAKE! The colour is FAKE, added by computer. Electron microscopes produce B&W images, so scientists add FALSE (fake) colours to help us see different parts.',
      tipCn: 'FALSE = 假的！颜色是假的，由电脑添加。电子显微镜产生黑白图像，所以科学家添加假（FALSE）颜色帮助我们区分不同部分。'
    },
    examples: [
      'Most electron micrographs in textbooks are shown in false colour.',
      'False colour is added using computer software.',
      'The false colour helps distinguish different cell structures.'
    ],
    relatedWords: ['micrograph', 'electron microscope', 'image', 'computer'],
    difficulty: 'easy',
    category: 'general'
  },

  'light microscope': {
    word: 'Light Microscope',
    phonetic: '/laɪt ˈmaɪkrəskoʊp/',
    chinese: '光學顯微鏡',
    definition: 'A microscope that uses visible light and glass lenses to magnify specimens. Can observe living specimens and produces coloured images.',
    etymology: {
      breakdown: 'LIGHT (visible electromagnetic radiation) + MICROSCOPE (viewing instrument) = microscope using light to view small objects'
    },
    mnemonic: {
      technique: 'Comparison',
      tip: 'LIGHT microscope uses LIGHT (like sunlight)! Advantages: can see LIVING things, COLOURED images, EASY to prepare. Max 1,600x magnification.',
      tipCn: '光学显微镜使用光（像阳光）！优点：可以看活的东西、彩色图像、容易准备。最大1600倍放大。'
    },
    examples: [
      'Light microscopes can magnify up to 1,600 times.',
      'Living specimens can be observed under a light microscope.',
      'Light microscopes produce coloured images.'
    ],
    relatedWords: ['microscope', 'electron microscope', 'magnification', 'specimen'],
    difficulty: 'easy',
    category: 'instrument'
  },

  // ========== Light Microscope Parts and Operation ==========
  'compound microscope': {
    word: 'Compound Microscope',
    phonetic: '/ˈkɒmpaʊnd ˈmaɪkrəskoʊp/',
    chinese: '複式顯微鏡',
    definition: 'A microscope that uses two sets of lenses (eyepiece and objective) to produce magnified images. Used in school laboratories.',
    etymology: {
      root: 'compound',
      rootMeaning: 'combined, made of multiple parts (Latin: componere)',
      breakdown: 'COMPOUND (multiple) + MICROSCOPE = microscope with multiple lenses working together'
    },
    mnemonic: {
      technique: 'Word Parts',
      tip: 'COMPOUND = COMBINED! A compound microscope COMBINES two lenses: eyepiece + objective. Total magnification = eyepiece × objective!',
      tipCn: 'COMPOUND = 组合！复式显微镜组合两个镜头：目镜 + 物镜。总放大倍数 = 目镜 × 物镜！'
    },
    examples: [
      'The compound microscope in school labs uses two sets of lenses.',
      'Compound microscopes can achieve higher magnification than simple microscopes.',
      'Total magnification of a compound microscope = eyepiece × objective.'
    ],
    relatedWords: ['light microscope', 'eyepiece', 'objective', 'magnification'],
    difficulty: 'medium',
    category: 'instrument'
  },

  'eyepiece': {
    word: 'Eyepiece',
    phonetic: '/ˈaɪpiːs/',
    chinese: '目鏡',
    definition: 'The lens at the top of a microscope that you look through. It magnifies the image formed by the objective lens. Common magnifications: 5x, 10x, 16x.',
    etymology: {
      breakdown: 'EYE (what you see with) + PIECE (part) = the part you put your eye on'
    },
    mnemonic: {
      technique: 'Literal Meaning',
      tip: 'EYE-PIECE = the PIECE for your EYE! It is where you look through. Remember: it is at the TOP of the microscope.',
      tipCn: 'EYE-PIECE = 眼睛的部件！这是你观看的地方。记住：它在显微镜顶部。'
    },
    examples: [
      'Look through the eyepiece to see the magnified image.',
      'The eyepiece has a magnification of 10x.',
      'Insert a low-power eyepiece (e.g. 5X) into the body tube.'
    ],
    relatedWords: ['objective', 'magnification', 'compound microscope', 'body tube'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'objective': {
    word: 'Objective',
    phonetic: '/əbˈdʒektɪv/',
    chinese: '物鏡',
    definition: 'The lens closest to the specimen being observed. It is the primary magnifying lens. Different objectives (4x, 10x, 40x) are mounted on the nosepiece.',
    etymology: {
      root: 'object',
      rootMeaning: 'thing being viewed (Latin: objectum)',
      breakdown: 'OBJECT + IVE = relating to the object being viewed'
    },
    mnemonic: {
      technique: 'Position Memory',
      tip: 'OBJECTIVE points at the OBJECT (specimen)! It is at the BOTTOM, close to the specimen. Eyepiece = top (eye), Objective = bottom (object).',
      tipCn: 'OBJECTIVE指向OBJECT（标本）！它在底部，靠近标本。目镜 = 顶部（眼睛），物镜 = 底部（物体）。'
    },
    examples: [
      'Select a low-power objective (e.g. 4X) by rotating the nosepiece.',
      'The 40X objective provides higher magnification than the 4X objective.',
      'Never use the coarse adjustment knob with a high-power objective.'
    ],
    relatedWords: ['eyepiece', 'nosepiece', 'magnification', 'specimen'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'nosepiece': {
    word: 'Nosepiece',
    phonetic: '/ˈnoʊzpiːs/',
    chinese: '物鏡轉換器/轉盤',
    definition: 'The rotating part of a microscope that holds different objective lenses. Turn it to switch between low-power and high-power objectives.',
    etymology: {
      breakdown: 'NOSE (pointing part) + PIECE = the pointing/rotating part that holds objectives'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'NOSEPIECE looks like a "nose" pointing down! It ROTATES to change objectives. Turn the nosepiece to switch between 4X, 10X, and 40X.',
      tipCn: 'NOSEPIECE看起来像指向下方的"鼻子"！它旋转来更换物镜。转动nosepiece在4X、10X和40X之间切换。'
    },
    examples: [
      'Rotate the nosepiece to select a different objective.',
      'The nosepiece holds three or four objectives of different magnifications.',
      'Watch the stage from the side when rotating the nosepiece.'
    ],
    relatedWords: ['objective', 'magnification', 'compound microscope'],
    difficulty: 'medium',
    category: 'instrument'
  },

  'body tube': {
    word: 'Body Tube',
    phonetic: '/ˈbɒdi tjuːb/',
    chinese: '鏡筒',
    definition: 'The tube that connects the eyepiece to the objectives. It holds the eyepiece at the top and connects to the nosepiece at the bottom.',
    etymology: {
      breakdown: 'BODY (main part) + TUBE (hollow cylinder) = the main cylindrical part of the microscope'
    },
    mnemonic: {
      technique: 'Shape Association',
      tip: 'BODY TUBE = the main BODY of the microscope shaped like a TUBE! Light travels through it from objective to eyepiece.',
      tipCn: 'BODY TUBE = 显微镜的主要身体部分，形状像管子！光线通过它从物镜到目镜。'
    },
    examples: [
      'The body tube holds the eyepiece and connects to the objectives.',
      'Insert the eyepiece into the body tube.',
      'Some microscopes focus by moving the body tube instead of the stage.'
    ],
    relatedWords: ['eyepiece', 'objective', 'nosepiece'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'condenser': {
    word: 'Condenser',
    phonetic: '/kənˈdensər/',
    chinese: '聚光器',
    definition: 'A lens below the stage that focuses and concentrates light onto the specimen for better illumination.',
    etymology: {
      root: 'condense',
      rootMeaning: 'to make denser, concentrate (Latin: condensare)',
      breakdown: 'CONDENSE + R = something that condenses/concentrates light'
    },
    mnemonic: {
      technique: 'Function Memory',
      tip: 'CONDENSER CONDENSES (concentrates) light! It focuses light onto the specimen like a magnifying glass focusing sunlight.',
      tipCn: 'CONDENSER浓缩（集中）光线！它将光线聚焦到标本上，就像放大镜聚焦阳光一样。'
    },
    examples: [
      'The condenser focuses light onto the specimen.',
      'Adjust the condenser for optimal illumination.',
      'The condenser is located below the stage.'
    ],
    relatedWords: ['diaphragm', 'light source', 'stage', 'illumination'],
    difficulty: 'medium',
    category: 'instrument'
  },

  'diaphragm': {
    word: 'Diaphragm',
    phonetic: '/ˈdaɪəfræm/',
    chinese: '光圈/光欄',
    definition: 'A device below the stage that controls the amount of light passing through the specimen. Adjust it to change image brightness.',
    etymology: {
      prefix: 'dia-',
      prefixMeaning: 'through (Greek)',
      root: 'phragm',
      rootMeaning: 'fence, partition (Greek: phragma)',
      breakdown: 'DIA + PHRAGM = partition that light passes through'
    },
    mnemonic: {
      technique: 'Camera Analogy',
      tip: 'DIAPHRAGM works like a camera aperture! Open it = more light = brighter. Close it = less light = dimmer. Adjust for best image!',
      tipCn: 'DIAPHRAGM像相机光圈一样工作！打开 = 更多光 = 更亮。关闭 = 更少光 = 更暗。调整以获得最佳图像！'
    },
    examples: [
      'Adjust the diaphragm until the light is sufficient.',
      'Close the diaphragm slightly to reduce glare.',
      'The diaphragm controls the amount of light shone onto the specimen.'
    ],
    relatedWords: ['condenser', 'light source', 'brightness', 'illumination'],
    difficulty: 'medium',
    category: 'instrument'
  },

  'stage': {
    word: 'Stage',
    phonetic: '/steɪdʒ/',
    chinese: '載物台',
    definition: 'The flat platform where the microscope slide is placed for observation. It has a hole in the centre for light to pass through.',
    etymology: {
      breakdown: 'STAGE = platform (like a theatre stage where performers stand)'
    },
    mnemonic: {
      technique: 'Theatre Analogy',
      tip: 'STAGE = where the "star" (specimen) performs! Just like actors on a theatre stage, the specimen sits on the microscope stage to be viewed.',
      tipCn: 'STAGE = "明星"（标本）表演的地方！就像演员在剧院舞台上，标本坐在显微镜载物台上被观看。'
    },
    examples: [
      'Clip the prepared slide onto the stage.',
      'Make sure the specimen is directly over the hole of the stage.',
      'The stage can be raised or lowered to focus.'
    ],
    relatedWords: ['slide', 'specimen', 'coarse adjustment knob', 'fine adjustment knob'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'coarse adjustment knob': {
    word: 'Coarse Adjustment Knob',
    phonetic: '/kɔːrs əˈdʒʌstmənt nɒb/',
    chinese: '粗調節器',
    definition: 'The larger knob that moves the stage (or body tube) up and down with large movements for rough focusing. Never use with high-power objectives!',
    etymology: {
      breakdown: 'COARSE (rough, not fine) + ADJUSTMENT (changing position) + KNOB (handle to turn)'
    },
    mnemonic: {
      technique: 'Size Association',
      tip: 'COARSE = big movements! The COARSE knob is usually BIGGER and makes BIG movements. Use for ROUGH focus first, then switch to fine.',
      tipCn: 'COARSE = 大动作！粗调节器通常更大，移动幅度大。先用于粗略对焦，然后切换到细调。'
    },
    examples: [
      'Turn the coarse adjustment knob to raise the stage.',
      'Never use the coarse adjustment knob when using a high-power objective.',
      'Use the coarse adjustment knob for rough focus first.'
    ],
    relatedWords: ['fine adjustment knob', 'focus', 'stage', 'objective'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'fine adjustment knob': {
    word: 'Fine Adjustment Knob',
    phonetic: '/faɪn əˈdʒʌstmənt nɒb/',
    chinese: '微調節器',
    definition: 'The smaller knob that moves the stage (or body tube) with small, precise movements for sharp focusing. Always use this for high-power objectives.',
    etymology: {
      breakdown: 'FINE (precise, delicate) + ADJUSTMENT (changing position) + KNOB (handle to turn)'
    },
    mnemonic: {
      technique: 'Size Association',
      tip: 'FINE = small, precise movements! The FINE knob is usually SMALLER and makes TINY movements. Use for SHARP focus after coarse focusing.',
      tipCn: 'FINE = 小而精确的动作！微调节器通常更小，移动幅度小。在粗调后用于清晰对焦。'
    },
    examples: [
      'Turn the fine adjustment knob to get a sharp focus.',
      'Always use the fine adjustment knob when using high-power objectives.',
      'The fine adjustment knob causes smaller movement of the stage.'
    ],
    relatedWords: ['coarse adjustment knob', 'focus', 'stage', 'sharp'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'arm': {
    word: 'Arm',
    phonetic: '/ɑːrm/',
    chinese: '鏡臂',
    definition: 'The curved part of the microscope that connects the body tube to the base. Hold the arm when carrying the microscope.',
    etymology: {
      breakdown: 'ARM = like a human arm, it is the part you hold and it supports the upper part of the microscope'
    },
    mnemonic: {
      technique: 'Body Analogy',
      tip: 'ARM = like your arm! Just as you use your arm to carry things, hold the microscope ARM when carrying it from place to place.',
      tipCn: 'ARM = 像你的手臂！就像你用手臂携带东西一样，搬运显微镜时握住显微镜的ARM。'
    },
    examples: [
      'Hold the arm when carrying the microscope from place to place.',
      'The arm connects the body tube to the base.',
      'Always support the base with one hand while holding the arm.'
    ],
    relatedWords: ['base', 'body tube', 'microscope'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'base': {
    word: 'Base',
    phonetic: '/beɪs/',
    chinese: '底座',
    definition: 'The bottom part of the microscope that provides stability and support for the entire instrument.',
    etymology: {
      breakdown: 'BASE = bottom foundation (like the base of a building)'
    },
    mnemonic: {
      technique: 'Position Memory',
      tip: 'BASE = BOTTOM! It is the foundation that supports the whole microscope. Support the base with one hand when carrying.',
      tipCn: 'BASE = 底部！它是支撑整个显微镜的基础。搬运时用一只手托住底座。'
    },
    examples: [
      'The base supports the whole microscope.',
      'Place the microscope base flat on the bench.',
      'Support the base with one hand when carrying the microscope.'
    ],
    relatedWords: ['arm', 'microscope', 'stability'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'light source': {
    word: 'Light Source',
    phonetic: '/laɪt sɔːrs/',
    chinese: '光源',
    definition: 'The part that provides light for viewing the specimen. Can be a built-in lamp or a mirror that reflects external light.',
    etymology: {
      breakdown: 'LIGHT (illumination) + SOURCE (origin) = where the light comes from'
    },
    mnemonic: {
      technique: 'Literal Meaning',
      tip: 'LIGHT SOURCE = where LIGHT comes from! It is at the BOTTOM of the microscope. Some have lamps, older ones have mirrors.',
      tipCn: 'LIGHT SOURCE = 光的来源！它在显微镜底部。有些有灯，老式的有镜子。'
    },
    examples: [
      'Turn on the light source before observing.',
      'Some microscopes have a mirror for reflecting light from an external light source.',
      'The light source provides illumination for viewing the specimen.'
    ],
    relatedWords: ['condenser', 'diaphragm', 'illumination'],
    difficulty: 'easy',
    category: 'instrument'
  },

  'inverted': {
    word: 'Inverted',
    phonetic: '/ɪnˈvɜːrtɪd/',
    chinese: '倒置的/顛倒的',
    definition: 'Turned upside down and reversed. Images seen through a light microscope are inverted - the letter "p" appears as "d".',
    etymology: {
      prefix: 'in-',
      prefixMeaning: 'into, in (Latin)',
      root: 'vert',
      rootMeaning: 'to turn (Latin: vertere)',
      breakdown: 'IN + VERT = turned in/over = upside down'
    },
    mnemonic: {
      technique: 'Letter Example',
      tip: 'INVERTED = flipped upside down! Under a microscope, "p" becomes "d", "b" becomes "q". The image is both upside down AND left-right reversed!',
      tipCn: 'INVERTED = 上下颠倒！在显微镜下，"p"变成"d"，"b"变成"q"。图像既上下颠倒又左右翻转！'
    },
    examples: [
      'The image observed under a light microscope is inverted.',
      'If you observe the letter "p", it appears as "d" because the image is inverted.',
      'Move the slide left to make the image move right (because it is inverted).'
    ],
    relatedWords: ['image', 'microscope', 'observation'],
    difficulty: 'easy',
    category: 'general'
  },

  'focus': {
    word: 'Focus',
    phonetic: '/ˈfoʊkəs/',
    chinese: '對焦/聚焦',
    definition: 'To adjust the microscope so that the image appears clear and sharp. Use coarse adjustment for rough focus, fine adjustment for sharp focus.',
    etymology: {
      root: 'focus',
      rootMeaning: 'fireplace, hearth (Latin) - where light/heat concentrates',
      breakdown: 'FOCUS = point where light rays meet to form a clear image'
    },
    mnemonic: {
      technique: 'Camera Analogy',
      tip: 'FOCUS = making the image CLEAR! Like focusing a camera. Rough focus first (coarse knob), then sharp focus (fine knob).',
      tipCn: 'FOCUS = 使图像清晰！就像对焦相机。先粗略对焦（粗调），然后精确对焦（微调）。'
    },
    examples: [
      'Turn the coarse adjustment knob to get a rough focus.',
      'Use the fine adjustment knob to get a sharp focus.',
      'The specimen should be in focus before switching to high power.'
    ],
    relatedWords: ['coarse adjustment knob', 'fine adjustment knob', 'sharp', 'image'],
    difficulty: 'easy',
    category: 'general'
  },

  'field of view': {
    word: 'Field of View',
    phonetic: '/fiːld əv vjuː/',
    chinese: '視野/視場',
    definition: 'The circular area visible when looking through a microscope. At low power, the field of view is larger (more area visible).',
    etymology: {
      breakdown: 'FIELD (area) + OF + VIEW (what you see) = the area you can see'
    },
    mnemonic: {
      technique: 'Comparison',
      tip: 'FIELD OF VIEW = the "field" you can see! LOW power = LARGE field (see more cells). HIGH power = SMALL field (see fewer cells but more detail).',
      tipCn: 'FIELD OF VIEW = 你能看到的"领域"！低倍 = 大视野（看到更多细胞）。高倍 = 小视野（看到更少细胞但更多细节）。'
    },
    examples: [
      'The field of view is larger at low-power magnification.',
      'Move the specimen to the centre of the field of view.',
      'At high power, fewer cells are visible in the field of view.'
    ],
    relatedWords: ['magnification', 'low-power', 'high-power', 'observation'],
    difficulty: 'medium',
    category: 'general'
  },

  'low-power': {
    word: 'Low-power',
    phonetic: '/loʊ ˈpaʊər/',
    chinese: '低倍',
    definition: 'Using lower magnification objectives (e.g. 4X or 10X). Gives a larger field of view, brighter image, and is used for initial observation.',
    etymology: {
      breakdown: 'LOW (less) + POWER (magnification strength) = lower magnification'
    },
    mnemonic: {
      technique: 'Trade-off Memory',
      tip: 'LOW-POWER = see MORE area but LESS detail. Start with LOW power to find specimen, then switch to HIGH. LOW = Large area, Brighter!',
      tipCn: 'LOW-POWER = 看到更多区域但更少细节。先用低倍找到标本，然后切换到高倍。低倍 = 大面积、更亮！'
    },
    examples: [
      'Always start with low-power magnification to locate the specimen.',
      'At low-power magnification, the field of view is larger.',
      'Low-power objectives include 4X and 10X.'
    ],
    relatedWords: ['high-power', 'magnification', 'objective', 'field of view'],
    difficulty: 'easy',
    category: 'general'
  },

  'high-power': {
    word: 'High-power',
    phonetic: '/haɪ ˈpaʊər/',
    chinese: '高倍',
    definition: 'Using higher magnification objectives (e.g. 40X). Gives more detail but smaller field of view, dimmer image. Only use fine adjustment!',
    etymology: {
      breakdown: 'HIGH (more) + POWER (magnification strength) = higher magnification'
    },
    mnemonic: {
      technique: 'Trade-off Memory',
      tip: 'HIGH-POWER = see MORE detail but LESS area. Image is DIMMER. Never use coarse adjustment at high power - only FINE adjustment!',
      tipCn: 'HIGH-POWER = 看到更多细节但更少区域。图像更暗。高倍时绝不用粗调——只用微调！'
    },
    examples: [
      'Switch to high-power magnification to see more details.',
      'Only use the fine adjustment knob at high-power magnification.',
      'The image is dimmer at high-power magnification.'
    ],
    relatedWords: ['low-power', 'magnification', 'fine adjustment knob', 'detail'],
    difficulty: 'easy',
    category: 'general'
  },

  'total magnification': {
    word: 'Total Magnification',
    phonetic: '/ˈtoʊtəl ˌmæɡnɪfɪˈkeɪʃən/',
    chinese: '總放大率',
    definition: 'The combined magnification of a compound microscope, calculated by multiplying eyepiece magnification by objective magnification.',
    etymology: {
      breakdown: 'TOTAL (complete, combined) + MAGNIFICATION = the complete magnification power'
    },
    mnemonic: {
      technique: 'Formula Memory',
      tip: 'TOTAL = EYEPIECE × OBJECTIVE! Example: 10X eyepiece × 40X objective = 400X total. Remember: multiply, do not add!',
      tipCn: 'TOTAL = 目镜 × 物镜！例如：10X目镜 × 40X物镜 = 400X总放大率。记住：是乘法，不是加法！'
    },
    examples: [
      'Total magnification = magnification of eyepiece × magnification of objective.',
      'With a 10X eyepiece and 40X objective, the total magnification is 400X.',
      'The total magnification tells you how many times larger the image appears.'
    ],
    relatedWords: ['magnification', 'eyepiece', 'objective', 'compound microscope'],
    difficulty: 'medium',
    category: 'general'
  },

  // ============================================
  // CELL STRUCTURE VOCABULARY (Section 2.4)
  // ============================================

  // --- Cell Types ---
  'neurone': {
    word: 'Neurone',
    phonetic: '/ˈnjʊərɒn/',
    chinese: '神經元',
    definition: 'A specialized cell that transmits nerve impulses; the basic functional unit of the nervous system.',
    etymology: {
      root: 'neuron',
      rootMeaning: 'nerve (Greek)',
      breakdown: 'NEURO (nerve) + ONE (unit) = nerve cell unit'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'NEURONE sounds like "NEW-RON" - imagine a NEW messenger named Ron who runs (transmits) messages through your body!',
      tipCn: 'NEURONE像"信使"——想象一个传递神经信号的信使在你体内奔跑！'
    },
    examples: [
      'Neurones in the brain transmit electrical signals.',
      'A neurone has a cell body, dendrites, and an axon.',
      'Neurones are highly specialized for communication.'
    ],
    relatedWords: ['nerve', 'cell', 'brain', 'impulse'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'cardiac muscle cell': {
    word: 'Cardiac Muscle Cell',
    phonetic: '/ˈkɑːdiæk ˈmʌsəl sel/',
    chinese: '心肌細胞',
    definition: 'A specialized muscle cell found in the heart that contracts rhythmically to pump blood throughout the body.',
    etymology: {
      prefix: 'cardio-',
      prefixMeaning: 'heart (Greek kardia)',
      breakdown: 'CARDIAC (heart) + MUSCLE + CELL = heart muscle cell'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'CARDIAC starts with CARD - think of playing CARDs with your heart beating fast! These cells keep your heart beating rhythmically.',
      tipCn: 'CARDIAC以CARD开头——想象打牌时心跳加速！这些细胞让你的心脏有节奏地跳动。'
    },
    examples: [
      'Cardiac muscle cells contract about 100,000 times per day.',
      'Unlike skeletal muscle cells, cardiac muscle cells are involuntary.',
      'Cardiac muscle cells have many mitochondria for energy.'
    ],
    relatedWords: ['heart', 'muscle', 'mitochondrion', 'contraction'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'guard cell': {
    word: 'Guard Cell',
    phonetic: '/ɡɑːd sel/',
    chinese: '保衛細胞',
    definition: 'A pair of specialized kidney-shaped cells in plant leaves that control the opening and closing of stomata for gas exchange.',
    etymology: {
      breakdown: 'GUARD (protect, control) + CELL = cells that guard the stomata opening'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'Guard cells are like SECURITY GUARDS at a door (stoma) - they decide when to OPEN or CLOSE the entrance for gases!',
      tipCn: '保卫细胞像气孔的"保安"——它们决定何时打开或关闭入口让气体通过！'
    },
    examples: [
      'Guard cells swell with water to open the stomata.',
      'Guard cells contain chloroplasts for photosynthesis.',
      'When guard cells lose water, the stomata close.'
    ],
    relatedWords: ['stomata', 'leaf', 'chloroplast', 'photosynthesis'],
    difficulty: 'easy',
    category: 'anatomy'
  },

  'palisade mesophyll cell': {
    word: 'Palisade Mesophyll Cell',
    phonetic: '/ˈpælɪseɪd ˈmezəfɪl sel/',
    chinese: '柵欄葉肉細胞',
    definition: 'Elongated, column-shaped cells packed with chloroplasts, located just below the upper epidermis of leaves, specialized for photosynthesis.',
    etymology: {
      prefix: 'palisade',
      prefixMeaning: 'fence of stakes (like columns)',
      root: 'mesophyll',
      rootMeaning: 'middle leaf (Greek mesos + phyllon)',
      breakdown: 'PALISADE (column-like) + MESO (middle) + PHYLL (leaf) = column cells in middle of leaf'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'PALISADE = wooden fence posts standing upright. These cells stand like a FENCE under the leaf surface, packed with chloroplasts for max photosynthesis!',
      tipCn: '柵欄=直立的木栅栏柱子。这些细胞像"围栏"一样排列在叶表面下，装满叶绿体进行光合作用！'
    },
    examples: [
      'Palisade mesophyll cells contain the most chloroplasts in a leaf.',
      'The elongated shape of palisade cells maximizes light absorption.',
      'Palisade mesophyll cells are located near the top of the leaf.'
    ],
    relatedWords: ['chloroplast', 'photosynthesis', 'leaf', 'mesophyll'],
    difficulty: 'hard',
    category: 'anatomy'
  },

  'cortex cell': {
    word: 'Cortex Cell',
    phonetic: '/ˈkɔːteks sel/',
    chinese: '皮層細胞',
    definition: 'A cell found in the cortex (outer region) of plant roots and stems, typically used for storage and support.',
    etymology: {
      root: 'cortex',
      rootMeaning: 'bark, outer layer (Latin)',
      breakdown: 'CORTEX (outer layer) + CELL = cell in the outer region'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'CORTEX sounds like "COAT" - these cells form the outer COAT of roots, like bark on a tree!',
      tipCn: 'CORTEX像"外套"——这些细胞构成根部的外层，像树皮一样！'
    },
    examples: [
      'Cortex cells in roots store starch.',
      'The cortex is located between the epidermis and the vascular tissue.',
      'Cortex cells are often large with thin cell walls.'
    ],
    relatedWords: ['root', 'stem', 'storage', 'starch'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'white blood cell': {
    word: 'White Blood Cell',
    phonetic: '/waɪt blʌd sel/',
    chinese: '白血球',
    definition: 'A type of blood cell that is part of the immune system and helps the body fight infection and disease.',
    etymology: {
      breakdown: 'WHITE (colour when separated) + BLOOD + CELL = colourless blood cells for immunity'
    },
    mnemonic: {
      technique: 'Story',
      tip: 'WHITE blood cells are like WHITE knights defending your body castle against invading germs and pathogens!',
      tipCn: '白血球像"白骑士"保卫你的身体城堡，抵御入侵的病菌！'
    },
    examples: [
      'White blood cells engulf and destroy bacteria.',
      'There are fewer white blood cells than red blood cells in blood.',
      'White blood cells produce antibodies to fight infection.'
    ],
    relatedWords: ['immune system', 'antibody', 'pathogen', 'blood'],
    difficulty: 'easy',
    category: 'anatomy'
  },

  'epithelial cell': {
    word: 'Epithelial Cell',
    phonetic: '/ˌepɪˈθiːliəl sel/',
    chinese: '上皮細胞',
    definition: 'A cell that forms the epithelium, the thin tissue lining the surfaces of organs, blood vessels, and body cavities.',
    etymology: {
      prefix: 'epi-',
      prefixMeaning: 'upon, on top of (Greek)',
      root: 'thele',
      rootMeaning: 'nipple (Greek, referring to tissue covering)',
      breakdown: 'EPI (upon) + THELIAL (covering tissue) = covering cells'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'EPI-thelial = "EPIC CEILING" - these cells form an EPIC protective ceiling/covering over all your organs!',
      tipCn: 'EPI-thelial = "超级天花板"——这些细胞在你的器官上形成保护层！'
    },
    examples: [
      'Epithelial cells in the small intestine absorb nutrients.',
      'The skin is made of epithelial cells.',
      'Epithelial cells line the inside of blood vessels.'
    ],
    relatedWords: ['tissue', 'absorption', 'lining', 'organ'],
    difficulty: 'hard',
    category: 'anatomy'
  },

  'root hair cell': {
    word: 'Root Hair Cell',
    phonetic: '/ruːt heə sel/',
    chinese: '根毛細胞',
    definition: 'A specialized plant cell with a long hair-like extension that increases surface area for absorbing water and minerals from soil.',
    etymology: {
      breakdown: 'ROOT (underground plant part) + HAIR (thin projection) + CELL = root cell with hair-like extension'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'Imagine roots with tiny HAIRS reaching out like fingers to grab water and minerals from the soil!',
      tipCn: '想象根部长出的"毛发"像手指一样从土壤中抓取水分和矿物质！'
    },
    examples: [
      'Root hair cells have a large surface area for absorption.',
      'Root hair cells do not have chloroplasts.',
      'The root hair is an extension of the cell membrane.'
    ],
    relatedWords: ['root', 'absorption', 'water', 'mineral', 'surface area'],
    difficulty: 'easy',
    category: 'anatomy'
  },

  // --- Nucleus-related ---
  'nuclear membrane': {
    word: 'Nuclear Membrane',
    phonetic: '/ˈnjuːkliə ˈmembreɪn/',
    chinese: '核膜',
    definition: 'A double membrane that surrounds the nucleus, separating the nuclear contents from the cytoplasm. It contains pores for material exchange.',
    etymology: {
      breakdown: 'NUCLEAR (of the nucleus) + MEMBRANE (thin layer) = the membrane around the nucleus'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'The nuclear membrane is like a DOUBLE-WALLED fortress protecting the DNA headquarters, with PORE gates for messengers!',
      tipCn: '核膜像双层城墙保护DNA总部，核孔像信使进出的大门！'
    },
    examples: [
      'The nuclear membrane is a double membrane with pores.',
      'Materials pass through nuclear pores in the nuclear membrane.',
      'The nuclear membrane separates DNA from the cytoplasm.'
    ],
    relatedWords: ['nucleus', 'nuclear pore', 'DNA', 'double membrane'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'nuclear pore': {
    word: 'Nuclear Pore',
    phonetic: '/ˈnjuːkliə pɔː/',
    chinese: '核孔',
    definition: 'A small opening in the nuclear membrane that allows the exchange of materials between the nucleus and cytoplasm.',
    etymology: {
      breakdown: 'NUCLEAR (of nucleus) + PORE (small opening) = opening in nuclear membrane'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'Nuclear PORES are like DOORS in the nuclear wall - mRNA messengers EXIT through these doors to reach the cytoplasm!',
      tipCn: '核孔像核膜上的"门"——mRNA信使从这些门出去到达细胞质！'
    },
    examples: [
      'mRNA exits the nucleus through nuclear pores.',
      'Nuclear pores control what enters and leaves the nucleus.',
      'There are thousands of nuclear pores in each nuclear membrane.'
    ],
    relatedWords: ['nuclear membrane', 'nucleus', 'mRNA', 'exchange'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'nucleolus': {
    word: 'Nucleolus',
    phonetic: '/njuːˈkliːələs/',
    chinese: '核仁',
    definition: 'A dense, spherical structure inside the nucleus that is involved in making ribosomes.',
    etymology: {
      root: 'nucleolus',
      rootMeaning: 'little nucleus (Latin diminutive)',
      breakdown: 'NUCLEO (nucleus) + -OLUS (small) = small body inside the nucleus'
    },
    mnemonic: {
      technique: 'Size Association',
      tip: 'NucleOLUS ends with "-OLUS" meaning SMALL - it is a SMALL body inside the nucleus that makes ribosomes (the protein factories)!',
      tipCn: 'NucleOLUS以"-OLUS"结尾表示"小"——它是核内的小结构，制造核糖体（蛋白质工厂）！'
    },
    examples: [
      'The nucleolus is involved in making ribosomes.',
      'The nucleolus disappears during cell division.',
      'A nucleus may contain one or more nucleoli.'
    ],
    relatedWords: ['nucleus', 'ribosome', 'rRNA', 'protein synthesis'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'genetic material': {
    word: 'Genetic Material',
    phonetic: '/dʒəˈnetɪk məˈtɪəriəl/',
    chinese: '遺傳物質',
    definition: 'The molecules (DNA and RNA) that carry hereditary information and control the activities of cells.',
    etymology: {
      breakdown: 'GENETIC (relating to genes/heredity) + MATERIAL (substance) = substance that carries genetic information'
    },
    mnemonic: {
      technique: 'Concept Link',
      tip: 'GENETIC MATERIAL = the INSTRUCTION MANUAL (DNA) that tells your cells how to build and run your body!',
      tipCn: '遗传物质 = 告诉细胞如何构建和运行身体的"说明书"（DNA）！'
    },
    examples: [
      'DNA is the genetic material in most organisms.',
      'Genetic material is passed from parents to offspring.',
      'The genetic material controls all cell activities.'
    ],
    relatedWords: ['DNA', 'RNA', 'nucleus', 'heredity', 'gene'],
    difficulty: 'easy',
    category: 'biology'
  },

  // --- Membrane-related ---
  'phospholipid': {
    word: 'Phospholipid',
    phonetic: '/ˌfɒsfəʊˈlɪpɪd/',
    chinese: '磷脂',
    definition: 'A type of lipid molecule with a phosphate head (hydrophilic) and two fatty acid tails (hydrophobic), forming the basic structure of cell membranes.',
    etymology: {
      prefix: 'phospho-',
      prefixMeaning: 'phosphate (Greek phosphoros = light-bearing)',
      root: 'lipid',
      rootMeaning: 'fat (Greek lipos)',
      breakdown: 'PHOSPHO (phosphate) + LIPID (fat) = fat molecule with phosphate'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'Phospholipids look like LOLLIPOPS - round head (phosphate, loves water) and stick tails (fatty acids, hate water)! They line up to form membranes.',
      tipCn: '磷脂像棒棒糖——圆头（亲水磷酸基）和棒尾（疏水脂肪酸尾）！它们排列形成细胞膜。'
    },
    examples: [
      'Phospholipids form a bilayer in cell membranes.',
      'The phosphate head of phospholipids is hydrophilic.',
      'Phospholipids allow the cell membrane to be flexible.'
    ],
    relatedWords: ['cell membrane', 'lipid', 'bilayer', 'hydrophilic', 'hydrophobic'],
    difficulty: 'hard',
    category: 'chemistry'
  },

  'differentially permeable': {
    word: 'Differentially Permeable',
    phonetic: '/ˌdɪfəˈrenʃəli ˈpɜːmiəbəl/',
    chinese: '差異透性的',
    definition: 'A property of membranes that allows only certain substances to pass through while blocking others; also called selectively permeable.',
    etymology: {
      breakdown: 'DIFFERENTIALLY (differently, selectively) + PERMEABLE (allowing passage) = allows different things through differently'
    },
    mnemonic: {
      technique: 'Analogy',
      tip: 'Think of a BOUNCER at a club - DIFFERENTIALLY lets people in. Some pass (water, small molecules), others blocked (large molecules)!',
      tipCn: '想象夜店保安——选择性地让人进入。有些能通过（水、小分子），有些被挡住（大分子）！'
    },
    examples: [
      'The cell membrane is differentially permeable.',
      'Differentially permeable membranes control what enters cells.',
      'Water passes easily through differentially permeable membranes.'
    ],
    relatedWords: ['cell membrane', 'selectively permeable', 'osmosis', 'diffusion'],
    difficulty: 'hard',
    category: 'biology'
  },

  'selectively permeable': {
    word: 'Selectively Permeable',
    phonetic: '/sɪˈlektɪvli ˈpɜːmiəbəl/',
    chinese: '選擇性透過的',
    definition: 'Same as differentially permeable; a membrane that allows only certain substances to pass through.',
    etymology: {
      breakdown: 'SELECTIVELY (choosing) + PERMEABLE (allowing through) = choosing what passes through'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'SELECTIVELY = SELECTIVE about who can pass, like a VIP list at a party!',
      tipCn: 'SELECTIVELY = 像派对VIP名单一样选择谁能通过！'
    },
    examples: [
      'Cell membranes are selectively permeable.',
      'Selectively permeable membranes are essential for cell function.',
      'The property of being selectively permeable allows cells to maintain homeostasis.'
    ],
    relatedWords: ['differentially permeable', 'cell membrane', 'osmosis'],
    difficulty: 'medium',
    category: 'biology'
  },

  'fully permeable': {
    word: 'Fully Permeable',
    phonetic: '/ˈfʊli ˈpɜːmiəbəl/',
    chinese: '全透性的',
    definition: 'A property of membranes or walls that allows all substances (water and dissolved substances) to pass through freely.',
    etymology: {
      breakdown: 'FULLY (completely) + PERMEABLE (allowing passage) = allows everything through'
    },
    mnemonic: {
      technique: 'Contrast',
      tip: 'FULLY permeable = FULL ACCESS - like an open gate, EVERYTHING passes through! Cell walls are fully permeable (unlike cell membranes).',
      tipCn: '全透性 = 完全开放——像敞开的大门，所有东西都能通过！细胞壁是全透性的（不像细胞膜）。'
    },
    examples: [
      'The cell wall is fully permeable to water and dissolved substances.',
      'Unlike cell membranes, cell walls are fully permeable.',
      'Fully permeable barriers do not control what passes through.'
    ],
    relatedWords: ['cell wall', 'differentially permeable', 'cellulose'],
    difficulty: 'easy',
    category: 'biology'
  },

  'cellulose': {
    word: 'Cellulose',
    phonetic: '/ˈseljʊləʊs/',
    chinese: '纖維素',
    definition: 'A complex carbohydrate (polysaccharide) made of glucose units that forms the main structural component of plant cell walls.',
    etymology: {
      root: 'cellula',
      rootMeaning: 'small cell (Latin)',
      suffix: '-ose',
      suffixMeaning: 'sugar/carbohydrate',
      breakdown: 'CELLUL (cell) + -OSE (sugar) = sugar that makes up cells (cell walls)'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'CELLulose = found in plant CELLS! It is made of glucose chains and makes cell walls strong like STEEL!',
      tipCn: 'CELLulose = 在植物细胞中发现！由葡萄糖链组成，让细胞壁像钢铁一样坚固！'
    },
    examples: [
      'Cellulose is the main component of plant cell walls.',
      'Humans cannot digest cellulose.',
      'Cellulose provides structural support to plants.'
    ],
    relatedWords: ['cell wall', 'carbohydrate', 'glucose', 'polysaccharide'],
    difficulty: 'medium',
    category: 'chemistry'
  },

  // --- ER and Ribosome ---
  'rough endoplasmic reticulum': {
    word: 'Rough Endoplasmic Reticulum',
    phonetic: '/rʌf ˌendəˈplæzmɪk rɪˈtɪkjʊləm/',
    chinese: '粗糙內質網',
    definition: 'A network of membrane-bounded sacs with ribosomes attached to its surface, involved in the synthesis and transport of proteins.',
    etymology: {
      breakdown: 'ROUGH (has ribosomes) + ENDO (within) + PLASMIC (cytoplasm) + RETICULUM (network) = rough network within cytoplasm'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'ROUGH ER is ROUGH because ribosomes (like bumps) are attached! Ribosomes make PROTEINS, so rough ER = PROTEIN FACTORY!',
      tipCn: '粗糙ER是"粗糙的"因为有核糖体（像小突起）附着！核糖体制造蛋白质，所以粗糙ER = 蛋白质工厂！'
    },
    examples: [
      'Rough ER is abundant in cells that produce many proteins.',
      'Ribosomes on rough ER synthesize proteins.',
      'Pancreatic cells have a lot of rough ER for enzyme production.'
    ],
    relatedWords: ['ribosome', 'protein', 'smooth endoplasmic reticulum', 'synthesis'],
    difficulty: 'hard',
    category: 'anatomy'
  },

  'smooth endoplasmic reticulum': {
    word: 'Smooth Endoplasmic Reticulum',
    phonetic: '/smuːð ˌendəˈplæzmɪk rɪˈtɪkjʊləm/',
    chinese: '光滑內質網',
    definition: 'A network of membrane-bounded sacs without ribosomes, involved in the synthesis of lipids and detoxification.',
    etymology: {
      breakdown: 'SMOOTH (no ribosomes) + ENDO (within) + PLASMIC (cytoplasm) + RETICULUM (network) = smooth network within cytoplasm'
    },
    mnemonic: {
      technique: 'Contrast',
      tip: 'SMOOTH ER is SMOOTH (no bumpy ribosomes)! It makes LIPIDS (fats are smooth and oily). Remember: Smooth = Lipids, Rough = Proteins!',
      tipCn: '光滑ER是"光滑的"（没有核糖体凸起）！它制造脂类（脂肪是光滑油腻的）。记住：光滑=脂类，粗糙=蛋白质！'
    },
    examples: [
      'Smooth ER synthesizes lipids.',
      'Cells in testes have abundant smooth ER for hormone production.',
      'Smooth ER also helps detoxify harmful substances.'
    ],
    relatedWords: ['lipid', 'rough endoplasmic reticulum', 'hormone', 'synthesis'],
    difficulty: 'hard',
    category: 'anatomy'
  },

  'membrane-bounded': {
    word: 'Membrane-Bounded',
    phonetic: '/ˈmembreɪn ˈbaʊndɪd/',
    chinese: '有膜包圍的',
    definition: 'Describing a structure that is enclosed or surrounded by a membrane, separating its contents from the rest of the cell.',
    etymology: {
      breakdown: 'MEMBRANE (thin layer) + BOUNDED (enclosed) = enclosed by a membrane'
    },
    mnemonic: {
      technique: 'Analogy',
      tip: 'Membrane-BOUNDED = BOUNDED by walls, like a room in a house! Nucleus, mitochondria, chloroplasts are membrane-bounded organelles.',
      tipCn: '有膜包围 = 像房子里的房间一样被墙壁包围！细胞核、线粒体、叶绿体都是有膜包围的细胞器。'
    },
    examples: [
      'The nucleus is a membrane-bounded organelle.',
      'Ribosomes are NOT membrane-bounded.',
      'Membrane-bounded organelles separate reactions from the cytoplasm.'
    ],
    relatedWords: ['organelle', 'membrane', 'nucleus', 'mitochondrion'],
    difficulty: 'medium',
    category: 'biology'
  },

  // --- Mitochondrion ---
  'cristae': {
    word: 'Cristae',
    phonetic: '/ˈkrɪstiː/',
    chinese: '嵴',
    definition: 'The folds of the inner membrane of a mitochondrion that increase surface area for cellular respiration.',
    etymology: {
      root: 'crista',
      rootMeaning: 'crest, ridge (Latin)',
      breakdown: 'CRISTAE = crests/ridges (folds of inner mitochondrial membrane)'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'CRISTAE sounds like "CRISPY" waves - imagine the inner membrane folded like CRISPY wavy chips to increase surface area for energy production!',
      tipCn: '嵴像"薯片的波浪"——想象内膜折叠成波浪状增加表面积来产生能量！'
    },
    examples: [
      'Cristae increase the surface area for respiration.',
      'ATP is produced on the cristae of mitochondria.',
      'More active cells have mitochondria with more cristae.'
    ],
    relatedWords: ['mitochondrion', 'inner membrane', 'respiration', 'ATP', 'surface area'],
    difficulty: 'hard',
    category: 'anatomy'
  },

  'double membrane': {
    word: 'Double Membrane',
    phonetic: '/ˈdʌbəl ˈmembreɪn/',
    chinese: '雙層膜',
    definition: 'A structure consisting of two lipid bilayer membranes (outer and inner), found in the nucleus, mitochondria, and chloroplasts.',
    etymology: {
      breakdown: 'DOUBLE (two) + MEMBRANE (layer) = two membrane layers'
    },
    mnemonic: {
      technique: 'Pattern Recognition',
      tip: 'DOUBLE MEMBRANE organelles: Nucleus, Mitochondria, Chloroplasts (NMC). Think "No More Cold" - these power organelles need DOUBLE protection!',
      tipCn: '双层膜细胞器：细胞核、线粒体、叶绿体（NMC）。这些能量细胞器需要双重保护！'
    },
    examples: [
      'The nucleus has a double membrane called the nuclear envelope.',
      'Mitochondria are bounded by a double membrane.',
      'The inner membrane of mitochondria is folded into cristae.'
    ],
    relatedWords: ['nucleus', 'mitochondrion', 'chloroplast', 'inner membrane', 'outer membrane'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'inner membrane': {
    word: 'Inner Membrane',
    phonetic: '/ˈɪnə ˈmembreɪn/',
    chinese: '內膜',
    definition: 'The innermost of the two membranes in double-membrane organelles; in mitochondria, it is highly folded into cristae.',
    etymology: {
      breakdown: 'INNER (inside) + MEMBRANE = the inside membrane'
    },
    mnemonic: {
      technique: 'Location',
      tip: 'INNER membrane is INSIDE, like the inner wall of a double-walled thermos. In mitochondria, it is the FOLDED one (cristae)!',
      tipCn: '内膜在里面，像双层保温杯的内壁。在线粒体中，内膜是折叠的那层（嵴）！'
    },
    examples: [
      'The inner membrane of mitochondria is folded into cristae.',
      'ATP synthesis occurs on the inner membrane.',
      'The inner membrane has a larger surface area due to folding.'
    ],
    relatedWords: ['outer membrane', 'cristae', 'mitochondrion', 'double membrane'],
    difficulty: 'easy',
    category: 'anatomy'
  },

  'outer membrane': {
    word: 'Outer Membrane',
    phonetic: '/ˈaʊtə ˈmembreɪn/',
    chinese: '外膜',
    definition: 'The outermost of the two membranes in double-membrane organelles; it is smooth and separates the organelle from the cytoplasm.',
    etymology: {
      breakdown: 'OUTER (outside) + MEMBRANE = the outside membrane'
    },
    mnemonic: {
      technique: 'Location',
      tip: 'OUTER membrane is OUTSIDE, like the outer wall of a thermos. It is SMOOTH and faces the cytoplasm!',
      tipCn: '外膜在外面，像保温杯的外壁。它是光滑的，面向细胞质！'
    },
    examples: [
      'The outer membrane of mitochondria is smooth.',
      'The outer membrane separates the mitochondrion from cytoplasm.',
      'Materials pass through the outer membrane to enter the organelle.'
    ],
    relatedWords: ['inner membrane', 'double membrane', 'mitochondrion', 'cytoplasm'],
    difficulty: 'easy',
    category: 'anatomy'
  },

  'metabolic': {
    word: 'Metabolic',
    phonetic: '/ˌmetəˈbɒlɪk/',
    chinese: '代謝的',
    definition: 'Relating to metabolism, the chemical processes that occur in living organisms to maintain life.',
    etymology: {
      root: 'metabole',
      rootMeaning: 'change (Greek)',
      breakdown: 'METABOL (change) + -IC (relating to) = relating to chemical changes in the body'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'METABOLIC = META (change) + BOLIC. Metabolism is all the chemical CHANGES in your body to get energy and build things!',
      tipCn: 'METABOLIC = META（改变）。代谢是身体内获取能量和构建物质的所有化学变化！'
    },
    examples: [
      'Liver cells have high metabolic activity.',
      'Metabolic reactions require energy from mitochondria.',
      'Metabolic rate increases during exercise.'
    ],
    relatedWords: ['metabolism', 'energy', 'respiration', 'chemical reaction'],
    difficulty: 'medium',
    category: 'biology'
  },

  // --- Plant-specific ---
  'cell sap': {
    word: 'Cell Sap',
    phonetic: '/sel sæp/',
    chinese: '細胞液',
    definition: 'The liquid contained in the central vacuole of plant cells, consisting of water with dissolved sugars, salts, pigments, and waste products.',
    etymology: {
      breakdown: 'CELL + SAP (plant juice) = the juice inside plant cell vacuoles'
    },
    mnemonic: {
      technique: 'Analogy',
      tip: 'CELL SAP is like the juice inside a water balloon (vacuole). It contains water + dissolved stuff like sugar and pigments!',
      tipCn: '细胞液像水气球（液泡）里的果汁。它含有水+溶解的物质如糖和色素！'
    },
    examples: [
      'Cell sap is found in the central vacuole of plant cells.',
      'Cell sap may contain pigments that give flowers their colour.',
      'The concentration of cell sap affects water movement by osmosis.'
    ],
    relatedWords: ['vacuole', 'osmosis', 'pigment', 'glucose', 'turgid'],
    difficulty: 'easy',
    category: 'biology'
  },

  'turgid': {
    word: 'Turgid',
    phonetic: '/ˈtɜːdʒɪd/',
    chinese: '膨脹的',
    definition: 'Describing a plant cell that is swollen and firm due to water entering by osmosis, making the vacuole push against the cell wall.',
    etymology: {
      root: 'turgere',
      rootMeaning: 'to swell (Latin)',
      breakdown: 'TURG (swell) + -ID = swollen state'
    },
    mnemonic: {
      technique: 'Sound Association',
      tip: 'TURGID sounds like "TURKEY STUFFED" - a turgid cell is STUFFED full of water, like a plump turkey! This keeps plants upright.',
      tipCn: 'TURGID像"塞满的火鸡"——膨胀的细胞充满水，像肥美的火鸡！这让植物保持直立。'
    },
    examples: [
      'Plant cells become turgid when water enters by osmosis.',
      'Turgid cells provide support to non-woody plants.',
      'When cells lose water, they are no longer turgid and the plant wilts.'
    ],
    relatedWords: ['turgor', 'osmosis', 'vacuole', 'cell wall', 'plasmolysis'],
    difficulty: 'medium',
    category: 'biology'
  },

  'turgidity': {
    word: 'Turgidity',
    phonetic: '/tɜːˈdʒɪdɪti/',
    chinese: '膨脹度',
    definition: 'The state of being turgid; the pressure exerted by cell contents against the cell wall when the cell is full of water.',
    etymology: {
      root: 'turgere',
      rootMeaning: 'to swell (Latin)',
      suffix: '-ity',
      suffixMeaning: 'state or condition',
      breakdown: 'TURG (swell) + -IDITY (state) = state of being swollen'
    },
    mnemonic: {
      technique: 'Concept Link',
      tip: 'TURGIDITY = TURGID + -ITY (state). It is the STATE of being full of water that keeps plants standing tall!',
      tipCn: '膨胀度 = 膨胀的状态。它是充满水的状态，让植物保持挺立！'
    },
    examples: [
      'Turgidity provides support to herbaceous plants.',
      'Loss of turgidity causes wilting.',
      'Cell walls are essential for maintaining turgidity.'
    ],
    relatedWords: ['turgid', 'turgor pressure', 'support', 'wilting'],
    difficulty: 'medium',
    category: 'biology'
  },

  'large central vacuole': {
    word: 'Large Central Vacuole',
    phonetic: '/lɑːdʒ ˈsentrəl ˈvækjuːəʊl/',
    chinese: '大型中央液泡',
    definition: 'A membrane-bounded sac filled with cell sap, found in mature plant cells. It stores water, nutrients, and wastes, and provides support through turgidity.',
    etymology: {
      breakdown: 'LARGE (big) + CENTRAL (in the middle) + VACUOLE (small empty space) = big vacuole in the center of plant cells'
    },
    mnemonic: {
      technique: 'Visual Association',
      tip: 'In plant cells, the vacuole is so LARGE and CENTRAL that it pushes everything else to the edges! Like a giant water balloon in the middle.',
      tipCn: '在植物细胞中，液泡又大又居中，把其他东西都推到边缘！像中间的巨大水气球。'
    },
    examples: [
      'The large central vacuole can take up 90% of a plant cell.',
      'The large central vacuole stores water and cell sap.',
      'Animal cells do not have a large central vacuole.'
    ],
    relatedWords: ['vacuole', 'cell sap', 'turgid', 'plant cell', 'storage'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'starch grain': {
    word: 'Starch Grain',
    phonetic: '/stɑːtʃ ɡreɪn/',
    chinese: '澱粉粒',
    definition: 'A small granule of starch found in plant cells, especially in chloroplasts and storage organs, where glucose is stored in polymer form.',
    etymology: {
      breakdown: 'STARCH (glucose polymer) + GRAIN (small particle) = small particle of stored starch'
    },
    mnemonic: {
      technique: 'Function Link',
      tip: 'Starch GRAINS are like GRAIN storage silos - they store glucose (from photosynthesis) as starch for later use!',
      tipCn: '淀粉粒像粮仓——储存光合作用产生的葡萄糖（以淀粉形式）供以后使用！'
    },
    examples: [
      'Starch grains are found inside chloroplasts.',
      'Potatoes are full of starch grains for energy storage.',
      'Iodine solution turns starch grains blue-black.'
    ],
    relatedWords: ['starch', 'chloroplast', 'glucose', 'photosynthesis', 'storage'],
    difficulty: 'easy',
    category: 'biology'
  },

  'pigment': {
    word: 'Pigment',
    phonetic: '/ˈpɪɡmənt/',
    chinese: '色素',
    definition: 'A substance that absorbs certain wavelengths of light and reflects others, giving colour to cells and tissues.',
    etymology: {
      root: 'pigmentum',
      rootMeaning: 'colouring matter (Latin)',
      breakdown: 'PIGMENT = colouring substance'
    },
    mnemonic: {
      technique: 'Examples',
      tip: 'PIGMENT = what gives PIG-ment (colour) to things! Chlorophyll is green pigment, flower pigments give colours, melanin gives skin colour!',
      tipCn: '色素 = 给事物颜色的物质！叶绿素是绿色色素，花色素给花颜色，黑色素给皮肤颜色！'
    },
    examples: [
      'Chlorophyll is a green pigment in chloroplasts.',
      'Pigments in vacuoles give flowers their colours.',
      'Melanin is a pigment in human skin.'
    ],
    relatedWords: ['chlorophyll', 'colour', 'chloroplast', 'vacuole'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  // --- Practical Terms ---
  'temporary mount': {
    word: 'Temporary Mount',
    phonetic: '/ˈtempərəri maʊnt/',
    chinese: '臨時裝片',
    definition: 'A slide preparation made for immediate observation under a microscope, not intended for long-term storage.',
    etymology: {
      breakdown: 'TEMPORARY (not permanent) + MOUNT (slide preparation) = short-term slide preparation'
    },
    mnemonic: {
      technique: 'Contrast',
      tip: 'TEMPORARY mount = TEMP (short time) observation. Made fresh, used quickly, then disposed. Unlike permanent mounts kept for years!',
      tipCn: '临时装片 = 短时间观察。新鲜制作，快速使用，然后丢弃。不像永久装片可以保存多年！'
    },
    examples: [
      'We prepared a temporary mount of onion epidermis.',
      'Temporary mounts are made with water or staining solution.',
      'The specimen in a temporary mount may dry out over time.'
    ],
    relatedWords: ['slide', 'cover slip', 'microscope', 'specimen'],
    difficulty: 'easy',
    category: 'general'
  },

  'cover slip': {
    word: 'Cover Slip',
    phonetic: '/ˈkʌvə slɪp/',
    chinese: '蓋玻片',
    definition: 'A thin, flat piece of glass placed over a specimen on a microscope slide to protect it and create a flat surface for viewing.',
    etymology: {
      breakdown: 'COVER (to protect) + SLIP (thin glass) = thin glass that covers the specimen'
    },
    mnemonic: {
      technique: 'Function',
      tip: 'Cover slip COVERS and protects the specimen. Lower it at an angle to avoid air bubbles - like closing a laptop lid slowly!',
      tipCn: '盖玻片覆盖并保护标本。倾斜放下避免气泡——像慢慢合上笔记本电脑！'
    },
    examples: [
      'Place the cover slip at an angle to avoid air bubbles.',
      'The cover slip flattens the specimen for better viewing.',
      'Be careful not to break the thin cover slip.'
    ],
    relatedWords: ['slide', 'specimen', 'microscope', 'temporary mount'],
    difficulty: 'easy',
    category: 'general'
  },

  'forceps': {
    word: 'Forceps',
    phonetic: '/ˈfɔːseps/',
    chinese: '鑷子',
    definition: 'A tool with two arms joined at one end, used for grasping and holding small objects or specimens.',
    etymology: {
      root: 'forceps',
      rootMeaning: 'tongs, pincers (Latin formus = hot + capere = to take)',
      breakdown: 'Originally used to handle hot objects; now used for delicate handling'
    },
    mnemonic: {
      technique: 'Visual',
      tip: 'FORCEPS = like chopsticks or tweezers for scientists! Used to pick up delicate things like cover slips without touching them.',
      tipCn: '镊子 = 像科学家的筷子或镊子！用来夹取精细物品如盖玻片而不用手触碰。'
    },
    examples: [
      'Use forceps to place the cover slip.',
      'Hold the specimen with forceps, not your fingers.',
      'Forceps help avoid contaminating the specimen.'
    ],
    relatedWords: ['cover slip', 'specimen', 'laboratory', 'handling'],
    difficulty: 'easy',
    category: 'general'
  },

  'methylene blue': {
    word: 'Methylene Blue',
    phonetic: '/ˈmeθɪliːn bluː/',
    chinese: '亞甲藍',
    definition: 'A blue stain used to colour animal cells, especially to make the nucleus more visible under a microscope.',
    etymology: {
      breakdown: 'METHYLENE (chemical group) + BLUE (colour) = a blue chemical stain'
    },
    mnemonic: {
      technique: 'Function',
      tip: 'Methylene BLUE makes cells BLUE! Especially good for ANIMAL cells - stains the nucleus dark blue so you can see it clearly.',
      tipCn: '亚甲蓝让细胞变蓝！特别适合动物细胞——把细胞核染成深蓝色让你看得更清楚。'
    },
    examples: [
      'We stained the cheek cells with methylene blue.',
      'Methylene blue makes the nucleus easier to see.',
      'Caution: methylene blue can cause haemolysis in G6PD deficiency.'
    ],
    relatedWords: ['stain', 'animal cell', 'nucleus', 'microscope'],
    difficulty: 'medium',
    category: 'chemistry'
  },

  'iodine solution': {
    word: 'Iodine Solution',
    phonetic: '/ˈaɪədiːn səˈluːʃən/',
    chinese: '碘液',
    definition: 'A brown solution of iodine used to stain plant cells and test for starch (turns blue-black with starch).',
    etymology: {
      breakdown: 'IODINE (chemical element) + SOLUTION (dissolved in liquid) = iodine dissolved in water/alcohol'
    },
    mnemonic: {
      technique: 'Function',
      tip: 'IODINE is for PLANT cells! Stains cell walls yellow-brown. Special trick: turns BLUE-BLACK with STARCH (food test)!',
      tipCn: '碘液用于植物细胞！把细胞壁染成黄棕色。特殊技巧：遇淀粉变蓝黑色（食物测试）！'
    },
    examples: [
      'We mounted the onion epidermis with iodine solution.',
      'Iodine solution stains starch grains blue-black.',
      'Caution: iodine solution is an irritant to skin.'
    ],
    relatedWords: ['stain', 'plant cell', 'starch', 'cell wall'],
    difficulty: 'easy',
    category: 'chemistry'
  },

  'staining': {
    word: 'Staining',
    phonetic: '/ˈsteɪnɪŋ/',
    chinese: '染色',
    definition: 'The process of applying a coloured dye to cells or tissues to make structures more visible under a microscope.',
    etymology: {
      breakdown: 'STAIN (colour) + -ING (process) = the process of adding colour'
    },
    mnemonic: {
      technique: 'Purpose',
      tip: 'STAINING = adding colour so we can SEE things! Cells are often colourless, so we STAIN them to see structures like the nucleus.',
      tipCn: '染色 = 添加颜色让我们能看见！细胞通常是无色的，所以我们染色来看清细胞核等结构。'
    },
    examples: [
      'Staining makes colourless cell structures visible.',
      'Different stains are used for different cell types.',
      'Methylene blue staining is used for animal cells.'
    ],
    relatedWords: ['methylene blue', 'iodine solution', 'microscope', 'cell'],
    difficulty: 'easy',
    category: 'general'
  },

  'epidermis': {
    word: 'Epidermis',
    phonetic: '/ˌepɪˈdɜːmɪs/',
    chinese: '表皮',
    definition: 'The outermost layer of cells in plants and animals; in plants, it is a single layer of cells covering leaves, stems, and roots.',
    etymology: {
      prefix: 'epi-',
      prefixMeaning: 'upon, outer (Greek)',
      root: 'dermis',
      rootMeaning: 'skin (Greek)',
      breakdown: 'EPI (outer) + DERMIS (skin) = outer skin layer'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'EPI-dermis = outer skin. Think of an EPI-pen that goes into the skin surface! Epidermis is the outermost protective layer.',
      tipCn: '表皮 = 外层皮肤。想象注射笔刺入皮肤表面！表皮是最外层的保护层。'
    },
    examples: [
      'We peeled off the epidermis of the onion.',
      'The epidermis protects the plant from water loss.',
      'Stomata are found in the leaf epidermis.'
    ],
    relatedWords: ['skin', 'layer', 'protection', 'onion', 'leaf'],
    difficulty: 'medium',
    category: 'anatomy'
  },

  'macerating fluid': {
    word: 'Macerating Fluid',
    phonetic: '/ˈmæsəreɪtɪŋ ˈfluːɪd/',
    chinese: '浸離液',
    definition: 'A chemical solution used to soften and separate plant cells by breaking down the middle lamella between cell walls.',
    etymology: {
      root: 'macerare',
      rootMeaning: 'to soften, to soak (Latin)',
      breakdown: 'MACERAT (soften) + -ING (process) + FLUID = liquid that softens tissue'
    },
    mnemonic: {
      technique: 'Sound Association',
      tip: 'MACERATE sounds like "MASH-erate" - the fluid helps MASH and separate cells by softening the glue between them!',
      tipCn: '浸离液像"软化剂"——帮助软化并分离细胞，溶解它们之间的"胶水"！'
    },
    examples: [
      'Soak root tips in macerating fluid to separate cells.',
      'Caution: macerating fluid is corrosive.',
      'Macerating fluid breaks down pectin between cells.'
    ],
    relatedWords: ['root tip', 'cell wall', 'separation', 'corrosive'],
    difficulty: 'hard',
    category: 'chemistry'
  },

  'corrosive': {
    word: 'Corrosive',
    phonetic: '/kəˈrəʊsɪv/',
    chinese: '腐蝕性的',
    definition: 'Describing a substance that can destroy or damage other materials, especially living tissue, through chemical action.',
    etymology: {
      root: 'corrodere',
      rootMeaning: 'to gnaw away (Latin cor- + rodere)',
      breakdown: 'CORROS (gnaw away) + -IVE = having the property of eating away'
    },
    mnemonic: {
      technique: 'Visual',
      tip: 'CORROSIVE = COR-ROD-SIVE. It RODS (eats) away at materials! Like acid eating through metal. Always wear gloves!',
      tipCn: '腐蚀性 = 会"啃噬"材料！像酸腐蚀金属。一定要戴手套！'
    },
    examples: [
      'Macerating fluid is corrosive - avoid skin contact.',
      'Corrosive chemicals can cause burns.',
      'Store corrosive substances safely in the laboratory.'
    ],
    relatedWords: ['dangerous', 'acid', 'safety', 'chemical'],
    difficulty: 'medium',
    category: 'chemistry'
  },

  // --- Additional Important Terms ---
  'sub-cellular structure': {
    word: 'Sub-cellular Structure',
    phonetic: '/sʌb ˈseljʊlə ˈstrʌktʃə/',
    chinese: '亞細胞結構',
    definition: 'Any structure found within a cell, including organelles and other components smaller than the whole cell.',
    etymology: {
      prefix: 'sub-',
      prefixMeaning: 'under, below (Latin)',
      breakdown: 'SUB (below) + CELLULAR (cell) + STRUCTURE = structures below/within the cell level'
    },
    mnemonic: {
      technique: 'Hierarchy',
      tip: 'SUB-cellular = BELOW cell level. Organelles (nucleus, mitochondria, etc.) are sub-cellular structures - parts INSIDE cells!',
      tipCn: '亚细胞结构 = 细胞以下的层级。细胞器（细胞核、线粒体等）是亚细胞结构——细胞内部的部分！'
    },
    examples: [
      'Mitochondria are sub-cellular structures.',
      'We study sub-cellular structures using electron microscopes.',
      'Sub-cellular structures carry out specific functions.'
    ],
    relatedWords: ['organelle', 'cell', 'nucleus', 'mitochondrion', 'structure'],
    difficulty: 'medium',
    category: 'biology'
  },

  'jelly-like': {
    word: 'Jelly-like',
    phonetic: '/ˈdʒeli laɪk/',
    chinese: '果凍狀的',
    definition: 'Having a soft, semi-solid, gelatinous consistency; used to describe the texture of cytoplasm.',
    etymology: {
      breakdown: 'JELLY (gelatinous substance) + LIKE (similar to) = having the consistency of jelly'
    },
    mnemonic: {
      technique: 'Visual',
      tip: 'Cytoplasm is JELLY-LIKE - imagine the inside of a cell filled with clear jelly! Organelles float in this jelly.',
      tipCn: '细胞质是果冻状的——想象细胞内部充满透明果冻！细胞器漂浮在这果冻里。'
    },
    examples: [
      'The cytoplasm has a jelly-like consistency.',
      'Organelles are suspended in the jelly-like cytoplasm.',
      'The jelly-like material is mostly water and proteins.'
    ],
    relatedWords: ['cytoplasm', 'fluid', 'consistency', 'gel'],
    difficulty: 'easy',
    category: 'general'
  },

  'synthesis': {
    word: 'Synthesis',
    phonetic: '/ˈsɪnθəsɪs/',
    chinese: '合成',
    definition: 'The process of making complex molecules from simpler ones; building up substances.',
    etymology: {
      prefix: 'syn-',
      prefixMeaning: 'together (Greek)',
      root: 'thesis',
      rootMeaning: 'placing (Greek)',
      breakdown: 'SYN (together) + THESIS (placing) = putting together'
    },
    mnemonic: {
      technique: 'Word Association',
      tip: 'SYNTHESIS = SYN (together) + THESIS (put). Building things by putting pieces TOGETHER! Protein synthesis = building proteins.',
      tipCn: '合成 = 把东西放在一起构建！蛋白质合成 = 构建蛋白质。'
    },
    examples: [
      'Protein synthesis occurs on ribosomes.',
      'Lipid synthesis takes place in smooth ER.',
      'Photosynthesis is the synthesis of glucose using light.'
    ],
    relatedWords: ['protein', 'ribosome', 'build', 'manufacture'],
    difficulty: 'medium',
    category: 'biology'
  },

  'detoxification': {
    word: 'Detoxification',
    phonetic: '/diːˌtɒksɪfɪˈkeɪʃən/',
    chinese: '解毒作用',
    definition: 'The process of removing or neutralizing toxic substances from the body, mainly carried out by the liver.',
    etymology: {
      prefix: 'de-',
      prefixMeaning: 'removal (Latin)',
      root: 'toxic',
      rootMeaning: 'poison',
      suffix: '-ification',
      suffixMeaning: 'process of making',
      breakdown: 'DE (remove) + TOXIC (poison) + -IFICATION (process) = process of removing poison'
    },
    mnemonic: {
      technique: 'Word Parts',
      tip: 'DE-TOXIC-ATION = DE (remove) + TOXIC (poison). Smooth ER in liver cells does this - removes poisons from your blood!',
      tipCn: '解毒 = 移除毒素。肝细胞中的光滑内质网负责此功能——从血液中移除毒素！'
    },
    examples: [
      'The liver is the main organ for detoxification.',
      'Smooth ER is involved in detoxification.',
      'Alcohol detoxification occurs in the liver.'
    ],
    relatedWords: ['liver', 'smooth endoplasmic reticulum', 'toxic', 'metabolism'],
    difficulty: 'hard',
    category: 'biology'
  },

  'biological diagram': {
    word: 'Biological Diagram',
    phonetic: '/ˌbaɪəˈlɒdʒɪkəl ˈdaɪəɡræm/',
    chinese: '生物繪圖',
    definition: 'A clear, labelled scientific drawing of biological structures following specific rules: smooth lines, no shading, proportional, with title and magnification.',
    etymology: {
      breakdown: 'BIOLOGICAL (relating to biology) + DIAGRAM (drawing) = scientific drawing of living things'
    },
    mnemonic: {
      technique: 'Rules',
      tip: 'Good biological diagram: use PENCIL, NO shading, STRAIGHT label lines (no arrows), SIZE proportional, include TITLE and MAGNIFICATION!',
      tipCn: '好的生物图：用铅笔，不涂阴影，直的标注线（不用箭头），比例正确，包含标题和放大率！'
    },
    examples: [
      'Draw a biological diagram of the cells you observed.',
      'Label your biological diagram with straight lines.',
      'Include the magnification in your biological diagram.'
    ],
    relatedWords: ['drawing', 'label', 'microscope', 'magnification'],
    difficulty: 'easy',
    category: 'general'
  },

  'photomicrograph': {
    word: 'Photomicrograph',
    phonetic: '/ˌfəʊtəʊˈmaɪkrəɡrɑːf/',
    chinese: '顯微照片',
    definition: 'A photograph taken through a microscope, showing magnified images of small objects or specimens.',
    etymology: {
      prefix: 'photo-',
      prefixMeaning: 'light (Greek)',
      root: 'micro',
      rootMeaning: 'small (Greek)',
      suffix: '-graph',
      suffixMeaning: 'writing/recording',
      breakdown: 'PHOTO (light) + MICRO (small) + GRAPH (picture) = picture of small things using light'
    },
    mnemonic: {
      technique: 'Word Parts',
      tip: 'PHOTO-MICRO-GRAPH = PHOTO (picture) of MICRO (tiny) things. A photograph through a microscope!',
      tipCn: '显微照片 = 通过显微镜拍摄的微小物体照片！'
    },
    examples: [
      'Fig P shows a photomicrograph of liver cells.',
      'The photomicrograph was taken at ×400 magnification.',
      'Compare the photomicrograph with the electron micrograph.'
    ],
    relatedWords: ['microscope', 'photograph', 'magnification', 'micrograph'],
    difficulty: 'medium',
    category: 'general'
  }
}

// Helper functions
export const getVocabularyByCategory = (category) => {
  return Object.entries(vocabulary)
    .filter(([_, vocab]) => vocab.category === category)
    .reduce((acc, [key, vocab]) => ({ ...acc, [key]: vocab }), {})
}

export const getVocabularyByDifficulty = (difficulty) => {
  return Object.entries(vocabulary)
    .filter(([_, vocab]) => vocab.difficulty === difficulty)
    .reduce((acc, [key, vocab]) => ({ ...acc, [key]: vocab }), {})
}

export const getRelatedVocabulary = (word) => {
  const vocab = vocabulary[word.toLowerCase()]
  if (!vocab || !vocab.relatedWords) return []
  
  return vocab.relatedWords
    .map(w => vocabulary[w.toLowerCase()])
    .filter(Boolean)
}
