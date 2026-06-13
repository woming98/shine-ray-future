export interface BilingualText {
  zh: string
  en: string
}

export interface C1NoteSection {
  title: string
  titleEn: string
  points: BilingualText[]
}

export interface C1Term {
  term: string
  termEn: string
  definition: string
  definitionEn: string
}

export interface C1Question {
  question: string
  questionEn: string
  answer: string
  answerEn: string
}

export interface C1DetailedChapter {
  id: string
  number: number
  title: string
  titleEn: string
  objective: BilingualText
  sections: C1NoteSection[]
  terms: C1Term[]
  examTips: BilingualText[]
  questions: C1Question[]
}

export const C1_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'hong-kong-business-environment',
    number: 1,
    title: '香港商業環境',
    titleEn: "Hong Kong's Business Environment",
    objective: {
      zh: '理解企業在香港經濟中的角色、香港經濟的特點與發展，以及外部環境因素如何影響企業決策。',
      en: "Understand the role of business, the characteristics and development of Hong Kong's economy, and how external factors affect business decisions.",
    },
    sections: [
      {
        title: '企業在經濟中的角色',
        titleEn: 'The Role of Business in the Economy',
        points: [
          {
            zh: '企業把土地、勞工、資本及企業家才能等資源轉化為商品與服務，以滿足消費者需要。',
            en: 'Businesses transform resources such as land, labour, capital and entrepreneurship into goods and services to satisfy consumer needs.',
          },
          {
            zh: '企業創造就業、收入及稅收，並透過投資、創新和競爭推動經濟發展。',
            en: 'Businesses create employment, income and tax revenue, while investment, innovation and competition support economic development.',
          },
          {
            zh: '第一產業提取天然資源；第二產業把原材料加工或建造成產品；第三產業提供服務。',
            en: 'The primary sector extracts natural resources; the secondary sector manufactures or constructs products; the tertiary sector provides services.',
          },
        ],
      },
      {
        title: '香港經濟的主要特點',
        titleEn: "Key Characteristics of Hong Kong's Economy",
        points: [
          {
            zh: '香港以服務業為主，並與國際貿易、金融、物流及專業服務緊密連繫。',
            en: 'Hong Kong has a service-oriented economy closely connected with international trade, finance, logistics and professional services.',
          },
          {
            zh: '開放的市場、資金及資訊流動，以及簡單稅制，有助香港連接本地、內地與海外市場。',
            en: 'Open markets, flows of capital and information, and a simple tax system help Hong Kong connect local, Mainland and overseas markets.',
          },
          {
            zh: '本地生產總值反映一個經濟體在指定期間內生產的最終商品與服務總值，可用來觀察經濟表現。',
            en: 'Gross domestic product measures the total value of final goods and services produced within an economy over a period and indicates economic performance.',
          },
        ],
      },
      {
        title: '內地聯繫與全球化',
        titleEn: 'Mainland Connections and Globalisation',
        points: [
          {
            zh: 'CEPA 加強香港與內地的經貿合作，為部分商品、服務及專業界別提供更便利的市場准入。',
            en: 'CEPA strengthens economic and trade cooperation between Hong Kong and the Mainland and facilitates market access for selected goods, services and professions.',
          },
          {
            zh: '全球化令商品、資金、資訊、技術及人才更容易跨境流動，企業可接觸更大市場及更多資源。',
            en: 'Globalisation increases cross-border flows of goods, capital, information, technology and people, giving firms access to larger markets and more resources.',
          },
          {
            zh: '全球採購是從世界不同地區尋找投入；外判是把部分工作交由外部供應商完成；技術轉移則是把知識或技術帶到另一企業或地區。',
            en: 'Global sourcing obtains inputs worldwide; outsourcing assigns activities to external suppliers; technology transfer moves knowledge or technology to another firm or location.',
          },
          {
            zh: '世界貿易組織推動以規則為本的國際貿易；亞太區經濟合作組織促進亞太區經濟合作。',
            en: 'The World Trade Organization promotes rules-based international trade, while Asia-Pacific Economic Cooperation supports regional economic cooperation.',
          },
        ],
      },
      {
        title: '影響企業決策的外部因素',
        titleEn: 'External Factors Affecting Business Decisions',
        points: [
          {
            zh: '經濟因素包括國民收入、通脹、利率及匯率。它們會影響需求、成本、融資及國際競爭力。',
            en: 'Economic factors include national income, inflation, interest rates and exchange rates. They affect demand, costs, financing and international competitiveness.',
          },
          {
            zh: '科技及資訊通訊技術可提高效率、創造新商業模式，但亦增加培訓、投資及網絡安全需要。',
            en: 'Technology and information and communication technology can improve efficiency and create new business models, but may require training, investment and cybersecurity measures.',
          },
          {
            zh: '社會、文化及人口變化會改變消費偏好和勞動市場；政治及法律因素則影響企業可以如何營運。',
            en: 'Social, cultural and demographic changes affect consumer preferences and labour markets, while political and legal factors shape how firms may operate.',
          },
          {
            zh: '實體環境及地理位置會影響租金、運輸、供應鏈及企業面對的環境風險。',
            en: 'The physical environment and location affect rent, transport, supply chains and environmental risks faced by firms.',
          },
        ],
      },
    ],
    terms: [
      { term: '本地生產總值', termEn: 'Gross domestic product (GDP)', definition: '指定期間內在一個經濟體境內生產的最終商品與服務總值。', definitionEn: 'The total value of final goods and services produced within an economy during a given period.' },
      { term: '全球化', termEn: 'Globalisation', definition: '不同經濟體在商品、資金、資訊、技術及人才方面日益互相連繫的過程。', definitionEn: 'The process through which economies become increasingly connected through goods, capital, information, technology and people.' },
      { term: '外商直接投資', termEn: 'Foreign direct investment (FDI)', definition: '海外投資者投資並對另一經濟體的企業取得持續影響或控制。', definitionEn: 'Investment by a foreign investor that creates lasting influence or control over a business in another economy.' },
      { term: '全球採購', termEn: 'Global sourcing', definition: '企業從世界不同地區採購物料、產品或服務。', definitionEn: 'Obtaining materials, products or services from suppliers around the world.' },
      { term: '外判', termEn: 'Outsourcing', definition: '企業把部分工作交由外部供應商完成。', definitionEn: 'Contracting an external supplier to perform selected business activities.' },
      { term: '通脹', termEn: 'Inflation', definition: '整體物價水平持續上升，令貨幣購買力下降。', definitionEn: 'A sustained rise in the general price level that reduces the purchasing power of money.' },
    ],
    examTips: [
      {
        zh: '分析外部因素時，要写出完整因果鏈：「因素改變 → 企業成本或需求改變 → 決策或表現受到影響」。',
        en: 'When analysing an external factor, show a complete chain: change in factor → change in cost or demand → effect on business decision or performance.',
      },
      {
        zh: '題目要求評估時，應同時考慮機會與威脅，並根據題目情境作出判斷。',
        en: 'For evaluation questions, consider both opportunities and threats and make a judgement based on the case.',
      },
    ],
    questions: [
      {
        question: '利率上升可能如何影響準備擴張的企業？',
        questionEn: 'How may a rise in interest rates affect a business planning to expand?',
        answer: '借貸成本上升，擴張項目的融資成本增加；企業可能延遲投資或縮小計劃。',
        answerEn: 'Borrowing becomes more expensive, raising the financing cost of expansion; the firm may delay or reduce the investment.',
      },
      {
        question: '全球採購與外判有何分別？',
        questionEn: 'What is the difference between global sourcing and outsourcing?',
        answer: '全球採購強調從世界各地取得投入；外判強調由外部供應商代為完成某項工作，供應商不一定在海外。',
        answerEn: 'Global sourcing focuses on obtaining inputs worldwide; outsourcing focuses on using an external supplier to perform an activity, which need not be overseas.',
      },
    ],
  },
  {
    id: 'forms-of-business-ownership',
    number: 2,
    title: '企業擁有權形式',
    titleEn: 'Forms of Business Ownership',
    objective: {
      zh: '分辨主要企業擁有權形式，並根據企業需要評估各形式的優點和缺點。',
      en: 'Distinguish the major forms of business ownership and evaluate their advantages and disadvantages according to business needs.',
    },
    sections: [
      {
        title: '獨資經營',
        titleEn: 'Sole Proprietorship',
        points: [
          {
            zh: '由一名東主擁有及控制，成立和決策通常較簡單，東主可保留全部利潤。',
            en: 'It is owned and controlled by one proprietor, is usually simple to establish and manage, and allows the owner to retain all profits.',
          },
          {
            zh: '東主承擔無限責任，企業資金及管理能力亦可能受一人所限。',
            en: 'The proprietor has unlimited liability, while finance and management capacity may be limited to one person.',
          },
        ],
      },
      {
        title: '合夥企業',
        titleEn: 'Partnership',
        points: [
          {
            zh: '由兩名或以上合夥人共同經營，可集合更多資本、技能及經驗，並分擔工作。',
            en: 'It is operated by two or more partners who can pool capital, skills and experience and share the workload.',
          },
          {
            zh: '一般合夥人通常承擔無限責任；意見分歧及利潤分配亦可能引起衝突。',
            en: 'General partners normally have unlimited liability, while disagreements and profit sharing may create conflict.',
          },
        ],
      },
      {
        title: '私人有限公司',
        titleEn: 'Private Limited Company',
        points: [
          {
            zh: '公司是與股東分開的法律實體，股東一般只以投資額承擔有限責任，企業亦具有持續性。',
            en: 'The company is a legal entity separate from its shareholders; shareholders generally enjoy limited liability, and the business has continuity.',
          },
          {
            zh: '股份不能向公眾公開發售，籌集資金能力通常不及公眾有限公司；成立及合規成本亦較高。',
            en: 'Its shares cannot be offered to the general public, so fundraising is usually more limited than for a public limited company; formation and compliance costs are also higher.',
          },
        ],
      },
      {
        title: '公眾有限公司',
        titleEn: 'Public Limited Company',
        points: [
          {
            zh: '可向公眾發售股份，因此有較強的集資能力，並可支持大規模營運。',
            en: 'It can offer shares to the public, giving it stronger fundraising capacity and supporting large-scale operations.',
          },
          {
            zh: '需要較高透明度及合規成本，原有股東的控制權亦可能被分散。',
            en: 'It faces greater transparency and compliance requirements, while the control of original shareholders may be diluted.',
          },
        ],
      },
      {
        title: '跨國公司',
        titleEn: 'Multinational Corporation',
        points: [
          {
            zh: '跨國公司在多於一個國家或地區營運，通常擁有龐大資源、國際品牌及全球供應鏈。',
            en: 'A multinational corporation operates in more than one country or region and usually has substantial resources, an international brand and a global supply chain.',
          },
          {
            zh: '它可把資本、技術及管理知識帶到香港，但亦會增加本地市場的競爭。',
            en: 'It may bring capital, technology and management knowledge to Hong Kong, while also increasing competition in the local market.',
          },
        ],
      },
    ],
    terms: [
      { term: '私人企業', termEn: 'Private enterprise', definition: '由私人個人或機構擁有，而非由政府擁有的企業。', definitionEn: 'A business owned by private individuals or organisations rather than the government.' },
      { term: '無限責任', termEn: 'Unlimited liability', definition: '企業債務沒有以東主投資額為限，東主個人資產可能用作償債。', definitionEn: "Business debts are not limited to the owner's investment, so personal assets may be used to repay them." },
      { term: '有限責任', termEn: 'Limited liability', definition: '股東承擔的損失一般以其投資額為限。', definitionEn: "A shareholder's loss is generally limited to the amount invested." },
      { term: '獨立法律實體', termEn: 'Separate legal entity', definition: '公司在法律上與股東分開，可自行擁有資產、訂立合約及承擔債務。', definitionEn: 'A company is legally separate from its shareholders and may own assets, enter contracts and incur debts in its own name.' },
      { term: '跨國公司', termEn: 'Multinational corporation (MNC)', definition: '在多於一個國家或地區擁有或控制業務的企業。', definitionEn: 'A business that owns or controls operations in more than one country or region.' },
    ],
    examTips: [
      {
        zh: '比較企業形式時，先指出情境中的需要，例如資金、控制權、風險或持續性，再說明某形式為何合適。',
        en: 'When comparing ownership forms, identify the case requirement, such as finance, control, risk or continuity, then explain why a form is suitable.',
      },
      {
        zh: '不要只寫「有限公司較好」。應寫出特點、直接影響及與題目情境的連繫。',
        en: 'Do not merely state that a limited company is better. Explain the feature, its direct effect and its relevance to the case.',
      },
    ],
    questions: [
      {
        question: '一名創業者重視快速決策和保留全部利潤，哪種形式可能較合適？主要風險是甚麼？',
        questionEn: 'Which form may suit an entrepreneur who values quick decisions and retaining all profits? What is the main risk?',
        answer: '獨資經營可能較合適；主要風險是東主承擔無限責任。',
        answerEn: 'A sole proprietorship may be suitable; the main risk is the proprietor’s unlimited liability.',
      },
      {
        question: '私人有限公司相對獨資經營，如何改善企業持續性？',
        questionEn: 'How does a private limited company improve continuity compared with a sole proprietorship?',
        answer: '公司是獨立法律實體，股東變動或離開通常不會令公司自動終止。',
        answerEn: 'As a separate legal entity, the company normally continues even when shareholders change or leave.',
      },
    ],
  },
  {
    id: 'business-ethics-social-responsibilities',
    number: 3,
    title: '商業道德與社會責任',
    titleEn: 'Business Ethics and Social Responsibilities',
    objective: {
      zh: '理解企業為何及如何對不同持份者負責，並分析商業道德和社會責任對決策的影響。',
      en: 'Understand why and how a firm should be responsible to different stakeholders and analyse how ethics and social responsibility affect decisions.',
    },
    sections: [
      {
        title: '持份者',
        titleEn: 'Stakeholders',
        points: [
          {
            zh: '持份者是會影響企業，或會受企業決策影響的個人或群體。',
            en: 'Stakeholders are individuals or groups that can affect a business or are affected by its decisions.',
          },
          {
            zh: '內部持份者包括東主、股東、管理層及員工；外部持份者包括顧客、供應商、債權人、政府、社區及環境。',
            en: 'Internal stakeholders include owners, shareholders, managers and employees; external stakeholders include customers, suppliers, creditors, government, the community and the environment.',
          },
          {
            zh: '不同持份者的利益可能衝突，例如股東希望提高利潤，但員工希望增加薪酬，顧客則希望降低價格。',
            en: 'Stakeholder interests may conflict: shareholders may seek higher profits, employees higher pay and customers lower prices.',
          },
        ],
      },
      {
        title: '商業道德與社會責任',
        titleEn: 'Business Ethics and Social Responsibility',
        points: [
          {
            zh: '商業道德是判斷企業行為是否正確、公平及誠實的原則；合法不一定代表符合道德。',
            en: 'Business ethics are principles used to judge whether business conduct is right, fair and honest; legal conduct is not necessarily ethical.',
          },
          {
            zh: '社會責任是企業在追求利潤以外，對持份者、社會及環境承擔的責任。',
            en: 'Social responsibility is a firm’s responsibility to stakeholders, society and the environment beyond earning profit.',
          },
          {
            zh: '企業可透過安全產品、公平交易、良好僱傭措施、準時付款、環保生產及支持社區履行責任。',
            en: 'A firm may act responsibly through safe products, fair dealing, good employment practices, timely payment, environmentally responsible production and community support.',
          },
        ],
      },
      {
        title: '對企業決策的影響',
        titleEn: 'Impact on Business Decisions',
        points: [
          {
            zh: '履行社會責任可能增加短期成本，例如改善安全、員工福利或環保設備的支出。',
            en: 'Acting responsibly may increase short-term costs, such as spending on safety, employee welfare or environmental equipment.',
          },
          {
            zh: '長期而言，良好道德表現可建立信譽、顧客忠誠和員工投入，降低法律、聲譽及營運風險。',
            en: 'Over time, ethical conduct may build reputation, customer loyalty and employee commitment while reducing legal, reputational and operational risks.',
          },
          {
            zh: '管理層應平衡不同持份者利益，並評估決定對利潤、社會與環境的短期及長期影響。',
            en: 'Management should balance stakeholder interests and assess the short- and long-term effects of decisions on profit, society and the environment.',
          },
        ],
      },
      {
        title: '提升道德意識的方法',
        titleEn: 'Ways to Enhance Ethical Awareness',
        points: [
          {
            zh: '管理層以身作則，並制定清晰的道德守則及決策標準。',
            en: 'Management should lead by example and establish a clear code of ethics and decision standards.',
          },
          {
            zh: '提供道德培訓、舉報渠道及保護機制，讓員工能識別和報告不當行為。',
            en: 'Provide ethics training, reporting channels and protection so employees can identify and report misconduct.',
          },
          {
            zh: '定期監察、審計及公開報告企業表現，並以獎懲制度強化負責任行為。',
            en: 'Monitor, audit and report business conduct regularly, and reinforce responsible behaviour through rewards and disciplinary measures.',
          },
        ],
      },
    ],
    terms: [
      { term: '持份者', termEn: 'Stakeholder', definition: '會影響企業，或會受企業活動及決策影響的個人或群體。', definitionEn: 'An individual or group that can affect or is affected by a business and its decisions.' },
      { term: '商業道德', termEn: 'Business ethics', definition: '判斷商業行為是否正確、公平及誠實的原則。', definitionEn: 'Principles for judging whether business conduct is right, fair and honest.' },
      { term: '社會責任', termEn: 'Social responsibility', definition: '企業對持份者、社會及環境所承擔、超越賺取利潤的責任。', definitionEn: 'A firm’s responsibility to stakeholders, society and the environment beyond making profit.' },
      { term: '道德守則', termEn: 'Code of ethics', definition: '說明企業期望員工遵守的道德原則及行為標準。', definitionEn: 'A document stating the ethical principles and standards of behaviour expected by a business.' },
    ],
    examTips: [
      {
        zh: '回答持份者責任題時，使用「持份者 → 企業行動 → 對持份者的好處 → 對企業的長期影響」結構。',
        en: 'For stakeholder responsibility questions, use: stakeholder → business action → benefit to stakeholder → long-term impact on the firm.',
      },
      {
        zh: '評估社會責任時，應同時說明短期成本和長期收益，最後根據情境作出判斷。',
        en: 'When evaluating social responsibility, explain both short-term costs and long-term benefits, then make a case-based judgement.',
      },
    ],
    questions: [
      {
        question: '企業為員工提供更安全的工作環境，如何同時惠及員工和企業？',
        questionEn: 'How can a safer workplace benefit both employees and the business?',
        answer: '員工受傷風險下降並更有安全感；企業可減少意外、缺勤及法律風險，並改善員工投入。',
        answerEn: 'Employees face less injury risk and feel more secure; the firm may reduce accidents, absence and legal risk while improving commitment.',
      },
      {
        question: '為甚麼合法的商業決定不一定符合商業道德？',
        questionEn: 'Why is a legal business decision not necessarily ethical?',
        answer: '法律只規定最低要求；決定即使合法，仍可能對持份者造成不公平或不負責任的影響。',
        answerEn: 'Law sets minimum requirements; a legal decision may still affect stakeholders unfairly or irresponsibly.',
      },
    ],
  },
]
