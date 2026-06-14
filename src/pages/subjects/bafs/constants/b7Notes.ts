import { C1DetailedChapter } from './c1Notes'

export const B7_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'financial-analysis',
    number: 1,
    title: '財務分析',
    titleEn: 'Financial Analysis',
    objective: {
      zh: '理解財務管理在企業營運中的角色，並能運用主要會計比率評估企業的盈利能力、流動性、償債能力及管理效率。',
      en: 'Understand the role of financial management in running a firm and use key accounting ratios to assess profitability, liquidity, solvency and management efficiency.',
    },
    sections: [
      {
        title: '財務管理的角色',
        titleEn: 'Role of Financial Management',
        points: [
          { zh: '財務管理是計劃、籌集、運用及控制企業資金的過程，目標是支持企業營運和長遠發展。', en: 'Financial management is the process of planning, raising, using and controlling funds to support operations and long-term development.' },
          { zh: '企業的最終目標通常是提升企業價值或股東財富，但亦要兼顧現金流、風險、持份者利益及法律責任。', en: 'The ultimate goal of a firm is usually to increase firm value or shareholders’ wealth, while considering cash flow, risk, stakeholders’ interests and legal responsibilities.' },
          { zh: '主要財務決策包括投資決策、融資決策、股息決策及營運資金決策。這些決策會影響企業的風險、回報和流動性。', en: 'Major financial decisions include investment, financing, dividend and working capital decisions. They affect risk, return and liquidity.' },
        ],
      },
      {
        title: '會計比率分析的用途',
        titleEn: 'Uses of Accounting Ratio Analysis',
        points: [
          { zh: '會計比率把財務報表中的數字轉化為可比較指標，有助分析企業表現和財務狀況。', en: 'Accounting ratios convert figures in financial statements into comparable indicators for analysing business performance and financial position.' },
          { zh: '比率可用作時間序列分析，比較同一企業不同年度的表現；亦可用作橫向分析，比較企業與競爭者或行業平均。', en: 'Ratios can be used for time-series analysis across years and cross-sectional analysis against competitors or industry averages.' },
          { zh: '比率本身不是結論。作答時要說明比率上升或下降的原因、影響及與題目情境的關係。', en: 'A ratio itself is not a conclusion. Answers should explain causes, effects and links to the case context.' },
        ],
      },
      {
        title: '盈利能力比率',
        titleEn: 'Profitability Ratios',
        points: [
          { zh: '毛利率 = 毛利 / 銷售淨額 x 100%。毛利率反映企業控制銷貨成本及定價的能力。', en: 'Gross profit ratio = gross profit / net sales x 100%. It reflects the ability to control cost of goods sold and pricing.' },
          { zh: '淨利率 = 淨利 / 銷售淨額 x 100%。淨利率反映企業扣除營運開支後，每一元銷售可帶來多少淨利。', en: 'Net profit ratio = net profit / net sales x 100%. It shows net profit earned from each dollar of sales after operating expenses.' },
          { zh: '資本運用回報率 = 扣除利息及稅項前盈利 / 資本運用 x 100%。它衡量企業運用長期資金創造利潤的效率。', en: 'Return on capital employed = profit before interest and tax / capital employed x 100%. It measures how efficiently long-term funds generate profit.' },
          { zh: '盈利能力比率需結合行業特性解讀。低毛利率未必一定差，若企業採用低價高銷量策略，仍可能取得合理回報。', en: 'Profitability ratios must be interpreted with industry context. A low gross profit ratio is not always poor if a low-price high-volume strategy produces reasonable returns.' },
        ],
      },
      {
        title: '流動性與償債能力比率',
        titleEn: 'Liquidity and Solvency Ratios',
        points: [
          { zh: '流動比率 = 流動資產 / 流動負債，反映企業以短期資產償還短期債務的能力。', en: 'Current ratio = current assets / current liabilities. It reflects the ability to pay short-term debts using short-term assets.' },
          { zh: '速動比率 = 速動資產 / 流動負債，其中速動資產通常不包括存貨，因為存貨較難即時變現。', en: 'Quick ratio = quick assets / current liabilities, where quick assets usually exclude inventory because it is less immediately realisable.' },
          { zh: '資本負債比率 = 長期負債 / 資本運用 x 100%。比率越高，企業依賴借貸資金越多，財務風險和利息負擔通常越高。', en: 'Gearing ratio = long-term liabilities / capital employed x 100%. A higher ratio means greater reliance on debt, usually higher financial risk and interest burden.' },
          { zh: '流動性過低可能導致付款困難；過高則可能代表資金閒置、存貨過多或應收帳款管理欠佳。', en: 'Too low liquidity may cause payment difficulties; too high liquidity may indicate idle funds, excessive inventory or weak receivables management.' },
        ],
      },
      {
        title: '管理效率比率',
        titleEn: 'Management Efficiency Ratios',
        points: [
          { zh: '存貨周轉率 = 銷貨成本 / 平均存貨。周轉越快，通常表示存貨管理較有效，但亦要避免缺貨。', en: 'Inventory turnover = cost of goods sold / average inventory. Faster turnover usually indicates more effective inventory management, but stockouts should be avoided.' },
          { zh: '應收帳款周轉期 = 平均應收帳款 / 賒銷淨額 x 365日。期數越短，通常代表收款較快。', en: 'Trade receivables turnover period = average trade receivables / net credit sales x 365 days. A shorter period usually means faster collection.' },
          { zh: '應付帳款周轉期 = 平均應付帳款 / 賒購淨額 x 365日。期數過長可能改善現金流，但亦可能損害供應商關係。', en: 'Trade payables turnover period = average trade payables / net credit purchases x 365 days. A longer period may improve cash flow but can damage supplier relationships.' },
          { zh: '總資產周轉率 = 銷售淨額 / 總資產，反映企業利用資產產生銷售的效率。', en: 'Total assets turnover = net sales / total assets. It reflects how efficiently assets are used to generate sales.' },
        ],
      },
      {
        title: '比率分析的限制',
        titleEn: 'Limitations of Ratio Analysis',
        points: [
          { zh: '會計比率主要依賴歷史財務資料，未必能反映未來表現、品牌價值、員工質素或市場變化。', en: 'Ratios rely mainly on historical financial data and may not reflect future performance, brand value, staff quality or market changes.' },
          { zh: '不同企業可能採用不同會計政策、年結日或估值方法，令比率未必完全可比。', en: 'Different firms may use different accounting policies, year-end dates or valuation methods, making ratios not fully comparable.' },
          { zh: '通脹、一次性項目、季節性因素及櫥窗粉飾都可能扭曲比率。分析時應同時考慮非財務資料和管理解釋。', en: 'Inflation, one-off items, seasonal factors and window dressing may distort ratios. Analysis should also consider non-financial information and management explanations.' },
        ],
      },
    ],
    terms: [
      { term: '財務管理', termEn: 'Financial management', definition: '計劃、籌集、運用及控制企業資金的管理活動。', definitionEn: 'Management activities for planning, raising, using and controlling business funds.' },
      { term: '投資決策', termEn: 'Investment decisions', definition: '決定企業資金應投入哪些資產或項目。', definitionEn: 'Decisions about which assets or projects business funds should be invested in.' },
      { term: '融資決策', termEn: 'Financing decisions', definition: '決定企業應從股本、借貸或其他來源取得資金。', definitionEn: 'Decisions about obtaining funds from equity, debt or other sources.' },
      { term: '股息決策', termEn: 'Dividend decisions', definition: '決定利潤應分派予股東或保留於企業。', definitionEn: 'Decisions about distributing profit to shareholders or retaining it in the business.' },
      { term: '營運資金決策', termEn: 'Working capital decisions', definition: '管理現金、存貨、應收及應付帳款等短期資金項目。', definitionEn: 'Managing short-term finance items such as cash, inventory, receivables and payables.' },
      { term: '會計比率', termEn: 'Accounting ratios', definition: '以財務報表數字計算的指標，用作分析企業表現和財務狀況。', definitionEn: 'Indicators calculated from financial statements to analyse performance and financial position.' },
      { term: '盈利能力比率', termEn: 'Profitability ratios', definition: '衡量企業創造利潤能力的比率。', definitionEn: 'Ratios measuring a firm’s ability to generate profit.' },
      { term: '毛利率', termEn: 'Gross profit ratio', definition: '毛利佔銷售淨額的百分比。', definitionEn: 'Gross profit as a percentage of net sales.' },
      { term: '淨利率', termEn: 'Net profit ratio', definition: '淨利佔銷售淨額的百分比。', definitionEn: 'Net profit as a percentage of net sales.' },
      { term: '資本運用回報率', termEn: 'Return on capital employed', definition: '企業運用資本賺取利潤的效率指標。', definitionEn: 'An indicator of how efficiently capital is used to earn profit.' },
      { term: '流動比率', termEn: 'Current ratio', definition: '流動資產相對流動負債的倍數。', definitionEn: 'Current assets relative to current liabilities.' },
      { term: '速動比率', termEn: 'Quick ratio', definition: '速動資產相對流動負債的倍數。', definitionEn: 'Quick assets relative to current liabilities.' },
      { term: '資本負債比率', termEn: 'Gearing ratio', definition: '長期負債佔資本運用的百分比。', definitionEn: 'Long-term liabilities as a percentage of capital employed.' },
      { term: '時間序列分析', termEn: 'Time-series analysis', definition: '比較同一企業不同期間的比率。', definitionEn: 'Comparing ratios of the same firm over different periods.' },
      { term: '橫向分析', termEn: 'Cross-sectional analysis', definition: '比較不同企業或行業平均的比率。', definitionEn: 'Comparing ratios among different firms or with industry averages.' },
    ],
    examTips: [
      { zh: '比率題要有三步：列公式、代入計算、解釋意義。只有計算而沒有分析，通常不能取得高分。', en: 'For ratio questions, use three steps: formula, calculation and interpretation. Calculations alone usually cannot score highly.' },
      { zh: '解釋比率變化時，要連接原因和後果。例如淨利率下降可能因開支增加，會削弱盈利能力和投資者信心。', en: 'When explaining ratio changes, connect causes and consequences. For example, a falling net profit ratio may be due to higher expenses and may weaken profitability and investor confidence.' },
      { zh: '比較兩間企業時，不要只說「較高較好」。要按行業、策略、風險和資金結構判斷。', en: 'When comparing two firms, do not simply say “higher is better”. Judge according to industry, strategy, risk and capital structure.' },
    ],
    questions: [
      { question: '為何流動比率過高未必一定好？', questionEn: 'Why is a very high current ratio not always good?', answer: '它可能代表企業持有過多現金、存貨或應收帳款，資金未被有效運用，因而降低回報。', answerEn: 'It may mean the firm holds too much cash, inventory or receivables, so funds are not used efficiently and returns may fall.' },
      { question: '資本負債比率上升代表甚麼風險？', questionEn: 'What risk is indicated by a rising gearing ratio?', answer: '企業更依賴借貸，利息負擔和還款壓力增加，在利潤下降或利率上升時風險更高。', answerEn: 'The firm relies more on debt, increasing interest burden and repayment pressure, especially when profit falls or interest rates rise.' },
      { question: '比率分析有何主要限制？', questionEn: 'What is a major limitation of ratio analysis?', answer: '比率多根據歷史財務資料計算，未必反映未來市場、品牌、員工質素及其他非財務因素。', answerEn: 'Ratios are mostly based on historical financial data and may not reflect future markets, brand, staff quality and other non-financial factors.' },
    ],
  },
  {
    id: 'budgeting',
    number: 2,
    title: '預算',
    titleEn: 'Budgeting',
    objective: {
      zh: '理解預算的目的、預算控制的用途與限制，並能辨認銷售、材料及勞工差異的原因和改善行動。',
      en: 'Understand the purposes of budgeting, the usefulness and limitations of budgetary control, and identify causes and remedial actions for sales, materials and labour variances.',
    },
    sections: [
      {
        title: '預算的性質與目的',
        titleEn: 'Nature and Purposes of Budgeting',
        points: [
          { zh: '預算是以數字表達的未來計劃，通常列出預期收入、成本、現金流、產量或資源需要。', en: 'A budget is a future plan expressed in figures, usually showing expected revenue, costs, cash flow, output or resource needs.' },
          { zh: '總預算是把各部門或功能預算整合成整體財務計劃，例如銷售預算、採購預算、現金預算及預算損益表。', en: 'A master budget combines departmental or functional budgets into an overall financial plan, such as sales, purchases, cash budgets and budgeted income statement.' },
          { zh: '預算有助規劃、協調、溝通、資源分配、授權、控制和績效評估。', en: 'Budgets help planning, coordination, communication, resource allocation, authorisation, control and performance evaluation.' },
        ],
      },
      {
        title: '預算原則與預算控制',
        titleEn: 'Budgeting Principles and Budgetary Control',
        points: [
          { zh: '有效預算應清晰、可量度、可達成、有彈性，並與企業目標和部門責任一致。', en: 'An effective budget should be clear, measurable, achievable, flexible and aligned with business objectives and departmental responsibilities.' },
          { zh: '預算控制是把實際結果與預算比較，分析差異，並採取改善行動的過程。', en: 'Budgetary control is the process of comparing actual results with budgets, analysing variances and taking corrective actions.' },
          { zh: '管理層應把預算視為控制和學習工具，而不是只用作責備員工，否則可能引起抗拒和資料操控。', en: 'Management should treat budgets as tools for control and learning, not only for blaming staff, otherwise resistance and data manipulation may arise.' },
        ],
      },
      {
        title: '預算控制的用途與限制',
        titleEn: 'Usefulness and Limitations of Budgetary Control',
        points: [
          { zh: '預算控制可及早發現問題，例如銷售不足、成本超支、現金短缺或生產效率下降。', en: 'Budgetary control can detect problems early, such as weak sales, cost overruns, cash shortages or lower production efficiency.' },
          { zh: '預算可提供績效標準，令部門主管清楚責任，並協助企業把資源投放到優先項目。', en: 'Budgets provide performance standards, clarify departmental responsibility and help allocate resources to priorities.' },
          { zh: '限制包括預測不準、外部環境變化、編製成本高、目標過於僵化，以及員工為達標而犧牲長遠利益。', en: 'Limitations include inaccurate forecasts, external changes, high preparation cost, overly rigid targets and staff sacrificing long-term interests to meet targets.' },
        ],
      },
      {
        title: '預算差異',
        titleEn: 'Budgeting Variances',
        points: [
          { zh: '預算差異是實際結果與預算數字之間的差額。差異可分為有利差異和不利差異。', en: 'A budgeting variance is the difference between actual results and budgeted figures. It can be favourable or unfavourable.' },
          { zh: '有利差異通常表示實際收入高於預算或實際成本低於預算；不利差異通常表示實際收入低於預算或成本高於預算。', en: 'A favourable variance usually means actual revenue exceeds budget or actual cost is below budget; an unfavourable variance usually means revenue is below budget or cost exceeds budget.' },
          { zh: '差異需要按金額大小、頻率、可控制性和對企業目標的影響排序處理，並非每項差異都值得深入調查。', en: 'Variances should be prioritised by size, frequency, controllability and impact on business objectives; not every variance deserves detailed investigation.' },
        ],
      },
      {
        title: '銷售、材料及勞工差異',
        titleEn: 'Sales, Materials and Labour Variances',
        points: [
          { zh: '銷售差異可能來自需求改變、價格策略、推廣成效、競爭、產品質素、天氣或供應不足。改善行動包括調整價格、加強推廣或改善分銷。', en: 'Sales variance may result from demand changes, pricing, promotion effectiveness, competition, product quality, weather or supply shortages. Actions include adjusting price, strengthening promotion or improving distribution.' },
          { zh: '材料差異可能來自原材料價格上升、採購折扣減少、浪費、偷竊、低質物料或生產規格改變。改善行動包括重新議價、轉換供應商和加強存貨控制。', en: 'Materials variance may arise from higher material prices, fewer purchase discounts, wastage, theft, low-quality materials or specification changes. Actions include renegotiating, changing suppliers and strengthening inventory control.' },
          { zh: '勞工差異可能來自工資率變動、加班、員工效率、培訓不足、機器故障或生產排程欠佳。改善行動包括培訓、改善排班和維修設備。', en: 'Labour variance may arise from wage rate changes, overtime, worker efficiency, insufficient training, machine breakdowns or poor scheduling. Actions include training, better rostering and equipment maintenance.' },
        ],
      },
      {
        title: '差異分析的管理應用',
        titleEn: 'Management Use of Variance Analysis',
        points: [
          { zh: '差異分析應找出可控制原因和不可控制原因。例如市場需求突然下跌可能不由銷售部完全控制。', en: 'Variance analysis should identify controllable and uncontrollable causes. For example, a sudden fall in market demand may not be fully controllable by the sales department.' },
          { zh: '管理層應避免只看單一差異。低材料成本可能源於低質物料，反而造成退貨、維修或品牌受損。', en: 'Management should avoid looking at one variance alone. Low material cost may result from low-quality materials, causing returns, repairs or brand damage.' },
          { zh: '有效跟進包括調查原因、提出行動、分配責任、設定時間表，並在下一期檢查改善是否有效。', en: 'Effective follow-up includes investigating causes, proposing actions, assigning responsibility, setting deadlines and checking improvement in the next period.' },
        ],
      },
    ],
    terms: [
      { term: '預算', termEn: 'Budget', definition: '以數字表達的未來計劃。', definitionEn: 'A future plan expressed in figures.' },
      { term: '總預算', termEn: 'Master budget', definition: '整合各功能或部門預算而成的整體預算。', definitionEn: 'An overall budget combining functional or departmental budgets.' },
      { term: '預算控制', termEn: 'Budgetary control', definition: '比較實際結果與預算、分析差異及採取改善行動的過程。', definitionEn: 'The process of comparing actual results with budgets, analysing variances and taking corrective actions.' },
      { term: '預算原則', termEn: 'Budgeting principles', definition: '編製有效預算時應遵守的清晰、可行、協調及彈性等原則。', definitionEn: 'Principles for effective budgets, such as clarity, achievability, coordination and flexibility.' },
      { term: '預算差異', termEn: 'Budgeting variance', definition: '實際結果與預算數字之間的差額。', definitionEn: 'The difference between actual results and budgeted figures.' },
      { term: '有利差異', termEn: 'Favourable variance', definition: '對利潤或現金流有正面影響的差異。', definitionEn: 'A variance with a positive effect on profit or cash flow.' },
      { term: '不利差異', termEn: 'Unfavourable variance', definition: '對利潤或現金流有負面影響的差異。', definitionEn: 'A variance with a negative effect on profit or cash flow.' },
      { term: '銷售差異', termEn: 'Sales variance', definition: '實際銷售收入或數量與預算之間的差異。', definitionEn: 'The difference between actual and budgeted sales revenue or volume.' },
      { term: '材料差異', termEn: 'Materials variance', definition: '實際材料成本或用量與預算之間的差異。', definitionEn: 'The difference between actual and budgeted material cost or usage.' },
      { term: '勞工差異', termEn: 'Labour variance', definition: '實際勞工成本或工時與預算之間的差異。', definitionEn: 'The difference between actual and budgeted labour cost or hours.' },
      { term: '改善行動', termEn: 'Remedial actions', definition: '針對差異原因採取的修正或改善措施。', definitionEn: 'Corrective or improvement measures taken in response to causes of variances.' },
    ],
    examTips: [
      { zh: '預算題要分清「編製預算」和「預算控制」。前者是計劃，後者是比較、分析和跟進。', en: 'For budgeting questions, distinguish “preparing budgets” from “budgetary control”. The former is planning; the latter is comparison, analysis and follow-up.' },
      { zh: '差異題不要只寫「實際大於預算」。要指出差異是否有利、可能原因，以及企業可採取的具體行動。', en: 'For variance questions, do not only state “actual is higher than budget”. Explain whether it is favourable, possible causes and specific actions.' },
      { zh: '提出改善行動時要對應原因。若材料差異由浪費造成，行動應是改善生產控制，而不是單純加價。', en: 'Remedial actions must match causes. If materials variance is caused by wastage, action should improve production control, not simply raise prices.' },
    ],
    questions: [
      { question: '預算控制如何協助企業管理成本？', questionEn: 'How does budgetary control help a business manage costs?', answer: '企業可把實際成本與預算比較，找出超支項目，分析原因並採取改善行動，例如重新議價或減少浪費。', answerEn: 'The business compares actual costs with budgets, identifies overspending, analyses causes and takes actions such as renegotiation or reducing wastage.' },
      { question: '為何不利材料差異可能出現？', questionEn: 'Why may an unfavourable materials variance occur?', answer: '可能因材料價格上升、浪費增加、低效率生產、偷竊或使用較多物料而令實際材料成本高於預算。', answerEn: 'It may occur because material prices rise, wastage increases, production is inefficient, theft occurs or more materials are used, making actual material cost exceed budget.' },
      { question: '預算控制有何限制？', questionEn: 'What is one limitation of budgetary control?', answer: '預算依賴預測，若市場環境突然改變，原有預算可能不再合理，僵化執行會導致錯誤決策。', answerEn: 'Budgets rely on forecasts. If the market changes suddenly, the original budget may no longer be reasonable, and rigid use can lead to poor decisions.' },
    ],
  },
]
