import { C1DetailedChapter } from './c1Notes'

export const A9_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'financial-analysis',
    number: 1,
    title: '財務分析',
    titleEn: 'Financial Analysis',
    objective: {
      zh: '掌握主要會計比率的計算、解讀及比較方法，並能評估企業的盈利能力、流動性、償債能力、管理效率及投資回報。',
      en: 'Master the calculation, interpretation and comparison of key accounting ratios, and evaluate profitability, liquidity, solvency, management efficiency and return on investment.',
    },
    sections: [
      {
        title: '財務分析的用途與步驟',
        titleEn: 'Purpose and Process of Financial Analysis',
        points: [
          { zh: '財務分析把財務報表數字轉化為有意義的比率，協助使用者判斷企業的財務表現、財務狀況及未來風險。', en: 'Financial analysis turns financial-statement figures into meaningful ratios to help users assess financial performance, financial position and future risk.' },
          { zh: '分析時應先計算相關比率，再與過往年度、預算、行業平均或其他企業比較，最後結合業務背景解釋原因。', en: 'Analysis should calculate relevant ratios, compare them with previous years, budgets, industry averages or other firms, and then explain causes using business context.' },
          { zh: '單一比率通常不足以作出結論。例如淨利率上升可能來自售價提高、成本控制或一次性收入，須配合其他比率和題目資料判斷。', en: 'A single ratio is usually insufficient for a conclusion. For example, a higher net profit ratio may result from higher prices, cost control or one-off income, so other ratios and case information are needed.' },
        ],
      },
      {
        title: '盈利能力比率',
        titleEn: 'Profitability Ratios',
        points: [
          { zh: '毛利率 = 毛利 / 銷貨淨額 x 100%。毛利率反映銷售收入扣除銷貨成本後留下多少毛利，受售價、採購成本、折扣及存貨計價影響。', en: 'Gross profit ratio = gross profit / net sales x 100%. It shows how much gross profit remains after cost of goods sold, and is affected by selling prices, purchase costs, discounts and inventory valuation.' },
          { zh: '成本加成率 = 毛利 / 銷貨成本 x 100%。它從成本角度量度定價幅度，須與毛利率分清；毛利率以銷售額為分母，成本加成率以銷貨成本為分母。', en: 'Mark-up = gross profit / cost of goods sold x 100%. It measures pricing from a cost perspective; distinguish it from gross profit ratio, which uses sales as denominator while mark-up uses cost of goods sold.' },
          { zh: '淨利率 = 淨利潤 / 銷貨淨額 x 100%。淨利率反映扣除營運費用後每一元銷售帶來的淨利，常用來分析費用控制及整體盈利能力。', en: 'Net profit ratio = net profit / net sales x 100%. It shows net profit earned from each dollar of sales after operating expenses, and is useful for assessing expense control and overall profitability.' },
          { zh: '資本運用回報率 = 利息及稅前淨利潤 / 資本運用 x 100%。資本運用通常等於權益加非流動負債，或總資產減流動負債；題目若有指定應跟從指定口徑。', en: 'Return on capital employed = net profit before interest and tax / capital employed x 100%. Capital employed is usually equity plus non-current liabilities, or total assets less current liabilities; follow the question if a basis is specified.' },
        ],
      },
      {
        title: '流動性比率',
        titleEn: 'Liquidity Ratios',
        points: [
          { zh: '流動比率 = 流動資產 / 流動負債。它量度企業以短期資產償還短期負債的能力，但過高可能代表資金閒置、存貨過多或應收帳款回收慢。', en: 'Current ratio = current assets / current liabilities. It measures the ability to repay short-term liabilities using short-term assets, but an excessively high ratio may indicate idle funds, excessive inventory or slow receivables collection.' },
          { zh: '速動比率 = (流動資產 - 存貨) / 流動負債。它排除較難即時變現的存貨，更嚴格地評估短期償債能力；若題目列明預付款等不可即時變現項目，亦應按題意處理。', en: 'Quick ratio = (current assets - inventory) / current liabilities. It excludes inventory, which may be less readily convertible into cash, and gives a stricter liquidity test; if the question identifies prepayments or other non-liquid items, treat them as instructed.' },
          { zh: '應收貨款週轉率 = 賒銷額 / 平均應收貨款；平均收帳期 = 平均應收貨款 / 賒銷額 x 365 日。收帳期越短，通常代表收款效率越高，但過嚴信貸政策可能影響銷售。', en: 'Trade receivables turnover = credit sales / average trade receivables; average collection period = average trade receivables / credit sales x 365 days. A shorter period usually means better collection, but overly strict credit policy may reduce sales.' },
          { zh: '應付貨款週轉率 = 賒購額 / 平均應付貨款；平均還款期 = 平均應付貨款 / 賒購額 x 365 日。還款期較長可改善現金流，但過長可能損害供應商關係及信用。', en: 'Trade payables turnover = credit purchases / average trade payables; average repayment period = average trade payables / credit purchases x 365 days. A longer period may improve cash flow, but too long may damage supplier relationships and credit standing.' },
          { zh: '存貨週轉率 = 銷貨成本 / 平均存貨；存貨週轉期 = 平均存貨 / 銷貨成本 x 365 日。存貨週轉快通常代表存貨管理較有效，但過低存貨亦可能引致缺貨。', en: 'Inventory turnover = cost of goods sold / average inventory; inventory turnover period = average inventory / cost of goods sold x 365 days. Faster turnover often indicates effective inventory management, but too little inventory may cause stock-outs.' },
        ],
      },
      {
        title: '償債能力與管理效率',
        titleEn: 'Solvency and Management Efficiency',
        points: [
          { zh: '償債能力關注企業長期履行財務責任的能力。負債比率或資本負債比率上升，代表企業較依賴借貸融資，財務風險及利息負擔通常較高。', en: 'Solvency concerns a firm’s long-term ability to meet financial obligations. A higher gearing ratio indicates greater reliance on debt financing and usually higher financial risk and interest burden.' },
          { zh: '常用資本負債比率 = 非流動負債 / 資本運用 x 100%。若題目指定以總負債、權益或其他公式計算，應採用題目定義並在答案中保持一致。', en: 'A common gearing ratio is non-current liabilities / capital employed x 100%. If the question defines it using total liabilities, equity or another basis, use that definition consistently in the answer.' },
          { zh: '總資產週轉率 = 銷貨淨額 / 總資產或平均總資產。比率越高，通常代表企業運用資產產生銷售的效率越高；但仍須考慮資產新舊、行業模式及租賃或外判安排。', en: 'Total assets turnover = net sales / total assets or average total assets. A higher ratio normally indicates more efficient use of assets to generate sales, but asset age, industry model, leasing and outsourcing should also be considered.' },
          { zh: '應收貨款、應付貨款及存貨週轉也可用於管理效率分析，因為它們反映營運資金循環是否順暢。', en: 'Receivables, payables and inventory turnover can also be used in management-efficiency analysis because they show whether the working-capital cycle is operating smoothly.' },
        ],
      },
      {
        title: '投資回報比率',
        titleEn: 'Return on Investment Ratios',
        points: [
          { zh: '每股盈利 = 普通股股東應佔利潤 / 已發行普通股股數。它量度每股普通股所賺取的利潤，是分析股東回報的重要資料。', en: 'Earnings per share = profit attributable to ordinary shareholders / number of ordinary shares issued. It measures profit earned per ordinary share and is important for analysing shareholder return.' },
          { zh: '股息保障倍數 = 每股盈利 / 每股股息，或普通股股東應佔利潤 / 普通股股息。倍數越高，代表盈利對股息的保障越強，但亦可能表示公司保留較多盈利而派息較少。', en: 'Dividend cover = earnings per share / dividend per share, or profit attributable to ordinary shareholders / ordinary dividends. A higher cover means dividends are better supported by earnings, but may also indicate more profit retained and lower distribution.' },
          { zh: '市盈率 = 每股市價 / 每股盈利。市盈率較高可能反映投資者預期增長較高，但亦可能代表股價偏高或盈利暫時偏低。', en: 'Price-earnings ratio = market price per share / earnings per share. A higher P/E ratio may reflect stronger growth expectations, but may also indicate an overvalued share price or temporarily low earnings.' },
          { zh: '投資回報比率應與公司風險、行業前景、股息政策及非財務因素一併分析，不能只根據一個比率作投資決定。', en: 'Return-on-investment ratios should be analysed together with company risk, industry prospects, dividend policy and non-financial factors; investment decisions should not rely on one ratio alone.' },
        ],
      },
      {
        title: '比率分析的功能與限制',
        titleEn: 'Functions and Limitations of Ratio Analysis',
        points: [
          { zh: '比率分析可簡化大量會計資料，協助比較不同期間、不同企業及不同管理策略的成效，並支持貸款、投資及營運決策。', en: 'Ratio analysis simplifies large amounts of accounting information, supports comparison across periods, firms and strategies, and assists lending, investment and operating decisions.' },
          { zh: '比率受會計政策、估計、通脹、季節性、一次性交易及企業規模影響；不同企業若採用不同存貨計價或折舊方法，直接比較可能不公平。', en: 'Ratios are affected by accounting policies, estimates, inflation, seasonality, one-off transactions and business size; comparisons may be unfair if firms use different inventory valuation or depreciation methods.' },
          { zh: '比率主要依賴歷史財務資料，未必反映品牌、員工質素、管理能力、競爭環境及未來市場變化等非財務因素。', en: 'Ratios mainly rely on historical financial information and may not reflect non-financial factors such as brand, staff quality, management ability, competition and future market changes.' },
          { zh: '高分答案應先指出比率變動，再引用題目數據解釋原因，最後給出平衡結論或建議；避免只寫「高較好、低較差」。', en: 'A strong answer states the ratio movement, explains causes using case data, and gives a balanced conclusion or recommendation; avoid simply saying “higher is better” or “lower is worse”.' },
        ],
      },
    ],
    terms: [
      { term: '財務分析', termEn: 'Financial analysis', definition: '運用財務報表及比率評估企業表現、狀況及風險的過程。', definitionEn: 'The process of using financial statements and ratios to assess performance, position and risk.' },
      { term: '會計比率', termEn: 'Accounting ratio', definition: '把兩個相關會計數字連繫起來以作比較及解釋的指標。', definitionEn: 'A measure linking two related accounting figures for comparison and interpretation.' },
      { term: '盈利能力', termEn: 'Profitability', definition: '企業賺取利潤及控制成本的能力。', definitionEn: 'The ability of a business to earn profit and control costs.' },
      { term: '毛利率', termEn: 'Gross profit ratio', definition: '毛利佔銷貨淨額的百分比。', definitionEn: 'Gross profit expressed as a percentage of net sales.' },
      { term: '成本加成率', termEn: 'Mark-up', definition: '毛利佔銷貨成本的百分比。', definitionEn: 'Gross profit expressed as a percentage of cost of goods sold.' },
      { term: '淨利率', termEn: 'Net profit ratio', definition: '淨利潤佔銷貨淨額的百分比。', definitionEn: 'Net profit expressed as a percentage of net sales.' },
      { term: '資本運用回報率', termEn: 'Return on capital employed', definition: '量度企業運用長期資本賺取利潤的效率。', definitionEn: 'A measure of how efficiently a business earns profit from long-term capital employed.' },
      { term: '流動性', termEn: 'Liquidity', definition: '企業以流動資產償還短期債務的能力。', definitionEn: 'The ability of a business to pay short-term debts using current assets.' },
      { term: '流動比率', termEn: 'Current ratio', definition: '流動資產相對流動負債的比例。', definitionEn: 'The ratio of current assets to current liabilities.' },
      { term: '速動比率', termEn: 'Quick ratio / Acid test ratio', definition: '扣除存貨後流動資產相對流動負債的比例。', definitionEn: 'The ratio of current assets excluding inventory to current liabilities.' },
      { term: '應收貨款週轉率', termEn: 'Trade receivables turnover', definition: '賒銷額相對平均應收貨款的倍數。', definitionEn: 'Credit sales relative to average trade receivables.' },
      { term: '平均收帳期', termEn: 'Average trade receivables collection period', definition: '企業平均需要多少日收回應收貨款。', definitionEn: 'The average number of days taken to collect trade receivables.' },
      { term: '應付貨款週轉率', termEn: 'Trade payables turnover', definition: '賒購額相對平均應付貨款的倍數。', definitionEn: 'Credit purchases relative to average trade payables.' },
      { term: '平均還款期', termEn: 'Average trade payables repayment period', definition: '企業平均需要多少日支付應付貨款。', definitionEn: 'The average number of days taken to pay trade payables.' },
      { term: '存貨週轉率', termEn: 'Inventory turnover', definition: '銷貨成本相對平均存貨的倍數。', definitionEn: 'Cost of goods sold relative to average inventory.' },
      { term: '償債能力', termEn: 'Solvency', definition: '企業長期償還債務及持續經營的能力。', definitionEn: 'The long-term ability of a business to repay debts and continue operations.' },
      { term: '資本負債比率', termEn: 'Gearing ratio', definition: '量度企業依賴借貸資本程度的比率。', definitionEn: 'A ratio measuring the extent to which a business relies on debt capital.' },
      { term: '管理效率', termEn: 'Management efficiency', definition: '管理層運用資產及營運資金創造銷售或利潤的效率。', definitionEn: 'The efficiency with which management uses assets and working capital to generate sales or profit.' },
      { term: '總資產週轉率', termEn: 'Total assets turnover', definition: '銷貨淨額相對總資產或平均總資產的倍數。', definitionEn: 'Net sales relative to total assets or average total assets.' },
      { term: '每股盈利', termEn: 'Earnings per share', definition: '每一股普通股應佔的利潤。', definitionEn: 'Profit attributable to each ordinary share.' },
      { term: '股息保障倍數', termEn: 'Dividend cover', definition: '盈利可覆蓋普通股股息的倍數。', definitionEn: 'The number of times earnings can cover ordinary dividends.' },
      { term: '市盈率', termEn: 'Price-earnings ratio', definition: '每股市價相對每股盈利的倍數。', definitionEn: 'Market price per share relative to earnings per share.' },
    ],
    examTips: [
      { zh: '比率題不要只計算。答案應包括公式、代入、結果、趨勢比較、原因及結論，並引用題目資料支持判斷。', en: 'Do not only calculate ratios. Include formula, substitution, result, trend comparison, reasons and conclusion, supported by case data.' },
      { zh: '分清毛利率與成本加成率：前者分母是銷貨淨額，後者分母是銷貨成本；兩者不可混用。', en: 'Distinguish gross profit ratio from mark-up: the former uses net sales as denominator, while the latter uses cost of goods sold.' },
      { zh: '若題目沒有平均數，可按題目可得資料用期末數；若提供期初及期末數，週轉類比率通常應用平均數。', en: 'If no average figure is available, use the period-end figure given; if opening and closing balances are provided, turnover ratios normally use averages.' },
      { zh: '解釋比率時要避免絕對化。流動比率過低有償債風險，但過高也可能反映資金運用效率低。', en: 'Avoid absolute judgments. A low current ratio may signal liquidity risk, but an excessively high ratio may indicate inefficient use of funds.' },
    ],
    questions: [
      { question: '毛利率下降但銷售額上升，可能代表甚麼？', questionEn: 'What may it mean if gross profit ratio falls while sales increase?', answer: '可能代表減價促銷、採購成本上升、銷售組合轉向低毛利產品，或存貨成本控制轉差。須結合費用及其他比率判斷整體盈利能力。', answerEn: 'It may indicate price reductions, higher purchase costs, a shift to lower-margin products or weaker inventory cost control. Overall profitability should be judged with expenses and other ratios.' },
      { question: '為何速動比率通常比流動比率更嚴格？', questionEn: 'Why is the quick ratio usually a stricter test than the current ratio?', answer: '速動比率排除存貨，因為存貨未必能快速按帳面值變現，所以更集中量度即時還款能力。', answerEn: 'The quick ratio excludes inventory because it may not be quickly converted into cash at book value, so it focuses more on immediate repayment ability.' },
      { question: '平均收帳期延長會帶來甚麼利弊？', questionEn: 'What are the possible advantages and disadvantages of a longer average collection period?', answer: '較寬鬆信貸可能增加銷售，但也會令現金回收變慢、壞帳風險上升，並增加營運資金壓力。', answerEn: 'Looser credit may increase sales, but it slows cash collection, increases bad-debt risk and puts pressure on working capital.' },
      { question: '資本負債比率上升是否一定代表企業變差？', questionEn: 'Does a higher gearing ratio always mean the business is worse?', answer: '不一定。借貸可支持擴張並提高股東回報，但會增加利息負擔和財務風險；須看盈利穩定性、利率及資金用途。', answerEn: 'Not necessarily. Debt can support expansion and improve shareholder return, but it increases interest burden and financial risk; profitability stability, interest rates and use of funds must be considered.' },
      { question: '市盈率較高可以如何解讀？', questionEn: 'How can a higher price-earnings ratio be interpreted?', answer: '可能表示市場預期公司增長較好，也可能表示股價偏高或當期盈利偏低。投資分析須同時考慮風險及非財務資料。', answerEn: 'It may show higher expected growth, but may also mean the share price is high or current earnings are low. Investment analysis should also consider risk and non-financial information.' },
    ],
  },
]
