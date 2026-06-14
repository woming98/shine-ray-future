import { C1DetailedChapter } from './c1Notes'

export const C22_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'financial-statements-sole-proprietorships-i',
    number: 1,
    title: '獨資企業財務報表（一）',
    titleEn: 'Financial Statements for Sole Proprietorships (I)',
    objective: {
      zh: '理解損益表的目的、格式和主要項目，並能計算銷貨成本、毛利、淨利及淨損失。',
      en: 'Understand the purpose, format and major items of an income statement, and calculate cost of goods sold, gross profit, net profit and net loss.',
    },
    sections: [
      {
        title: '損益表的目的',
        titleEn: 'Purpose of an Income Statement',
        points: [
          { zh: '損益表列示企業在一段會計期間內的收入、銷貨成本、支出及利潤或損失。', en: 'An income statement shows a business’s revenues, cost of goods sold, expenses and profit or loss for an accounting period.' },
          { zh: '它協助東主和管理層評估營運表現，亦讓外部使用者了解企業的盈利能力。', en: 'It helps owners and managers evaluate operating performance and allows external users to understand the firm’s profitability.' },
          { zh: '損益表是期間報表，重點是「一段期間發生了甚麼」，與財務狀況表的「某一日擁有甚麼及欠甚麼」不同。', en: 'An income statement is a period statement focusing on what happened during a period, unlike a statement of financial position which shows what is owned and owed on a date.' },
        ],
      },
      {
        title: '銷貨、購貨與銷貨成本',
        titleEn: 'Sales, Purchases and Cost of Goods Sold',
        points: [
          { zh: '貿易企業購買貨品再出售賺取利潤。計算損益時，須先由銷售收入和銷貨成本計算毛利或毛損。', en: 'A trading firm buys goods and resells them for profit. In profit calculation, sales revenue and cost of goods sold are used first to calculate gross profit or gross loss.' },
          { zh: '銷貨淨額 = 銷貨 - 銷貨退回。銷貨退回是顧客把貨品退回企業，會減少銷售收入。', en: 'Net sales = sales - returns inwards. Returns inwards are goods returned by customers and reduce sales revenue.' },
          { zh: '購貨淨額 = 購貨 - 購貨退回。購貨退回是企業把貨品退回供應商，會減少購貨成本。', en: 'Net purchases = purchases - returns outwards. Returns outwards are goods returned to suppliers and reduce purchase cost.' },
          { zh: '銷貨成本 = 期初存貨 + 購貨淨額 + 購貨運費 - 期末存貨。它代表已售貨品的成本。', en: 'Cost of goods sold = opening inventory + net purchases + carriage inwards - closing inventory. It represents the cost of goods sold.' },
        ],
      },
      {
        title: '毛利、其他收入與支出',
        titleEn: 'Gross Profit, Other Revenues and Expenses',
        points: [
          { zh: '毛利 = 銷貨淨額 - 銷貨成本。若銷貨成本大於銷貨淨額，則出現毛損。', en: 'Gross profit = net sales - cost of goods sold. If cost of goods sold exceeds net sales, there is a gross loss.' },
          { zh: '其他收入包括佣金收入、租金收入、折扣收入或利息收入，會增加淨利。', en: 'Other revenues include commission income, rent income, discount received or interest income, and increase net profit.' },
          { zh: '支出包括薪金、租金、電費、廣告費、購貨運費以外的營業費用等，會減少淨利。', en: 'Expenses include salaries, rent, electricity, advertising and operating expenses other than carriage inwards, and reduce net profit.' },
          { zh: '淨利 = 毛利 + 其他收入 - 支出。若支出和損失大於毛利及其他收入，則出現淨損失。', en: 'Net profit = gross profit + other revenues - expenses. If expenses and losses exceed gross profit and other revenues, there is a net loss.' },
        ],
      },
      {
        title: '折扣與運費的處理',
        titleEn: 'Treatment of Discounts and Carriage',
        points: [
          { zh: '商業折扣通常在發票上直接扣減，不另作帳戶記錄；現金折扣則在付款時記錄。', en: 'Trade discounts are usually deducted directly on invoices and not recorded in separate accounts; cash discounts are recorded when payment is made.' },
          { zh: '折扣給予是給顧客的現金折扣，屬支出；折扣收入是供應商給企業的現金折扣，屬收入。', en: 'Discount allowed is a cash discount given to customers and is an expense; discount received is a cash discount given by suppliers and is revenue.' },
          { zh: '購貨運費是把貨品運到企業的成本，加入銷貨成本；銷貨運費是把貨品送到顧客的費用，列作支出。', en: 'Carriage inwards is the cost of bringing goods into the business and is added to cost of goods sold; carriage outwards is delivery cost to customers and is treated as an expense.' },
        ],
      },
      {
        title: '垂直式與橫式格式',
        titleEn: 'Vertical and Horizontal Styles',
        points: [
          { zh: '垂直式損益表把項目由上至下排列，較容易展示銷貨淨額、銷貨成本、毛利和淨利的計算過程。', en: 'A vertical income statement lists items from top to bottom and clearly shows the calculation of net sales, cost of goods sold, gross profit and net profit.' },
          { zh: '橫式損益表以左右兩欄呈現收入和支出，但在考試和現代報表中通常較少使用。', en: 'A horizontal income statement presents income and expenses in two sides, but it is less common in exams and modern reporting.' },
          { zh: '不論採用哪種格式，分類、計算和小計邏輯都必須清楚。', en: 'Whichever style is used, classification, calculations and subtotals must be clear.' },
        ],
      },
    ],
    terms: [
      { term: '損益表', termEn: 'Income statement', definition: '列示企業在一段期間內收入、成本、支出及利潤或損失的報表。', definitionEn: 'A statement showing revenues, costs, expenses and profit or loss for a period.' },
      { term: '貿易企業', termEn: 'Trading firm', definition: '購買貨品再出售以賺取利潤的企業。', definitionEn: 'A business that buys goods and resells them for profit.' },
      { term: '銷貨成本', termEn: 'Cost of goods sold', definition: '已售貨品的成本。', definitionEn: 'The cost of goods that have been sold.' },
      { term: '毛利', termEn: 'Gross profit', definition: '銷貨淨額減銷貨成本後的利潤。', definitionEn: 'Profit after deducting cost of goods sold from net sales.' },
      { term: '毛損', termEn: 'Gross loss', definition: '銷貨成本大於銷貨淨額時的損失。', definitionEn: 'Loss when cost of goods sold exceeds net sales.' },
      { term: '淨利', termEn: 'Net profit', definition: '毛利加其他收入再扣除支出後的利潤。', definitionEn: 'Profit after adding other revenues to gross profit and deducting expenses.' },
      { term: '銷貨退回', termEn: 'Returns inwards', definition: '顧客退回給企業的已售貨品。', definitionEn: 'Goods sold that are returned by customers.' },
      { term: '購貨退回', termEn: 'Returns outwards', definition: '企業退回給供應商的已購貨品。', definitionEn: 'Goods purchased that are returned to suppliers.' },
      { term: '購貨運費', termEn: 'Carriage inwards', definition: '把購買貨品運到企業的運輸成本，加入銷貨成本。', definitionEn: 'Transport cost of bringing purchased goods into the business, added to cost of goods sold.' },
      { term: '銷貨運費', termEn: 'Carriage outwards', definition: '把貨品送到顧客的運輸費用，列作支出。', definitionEn: 'Delivery cost of sending goods to customers, treated as an expense.' },
      { term: '折扣給予', termEn: 'Discounts allowed', definition: '企業給顧客提早付款或其他條件的現金折扣，屬支出。', definitionEn: 'Cash discounts given to customers, treated as an expense.' },
      { term: '折扣收入', termEn: 'Discounts received', definition: '供應商給企業的現金折扣，屬收入。', definitionEn: 'Cash discounts received from suppliers, treated as revenue.' },
    ],
    examTips: [
      { zh: '購貨運費加入銷貨成本；銷貨運費列作支出。這是損益表題常見失分位。', en: 'Carriage inwards is added to cost of goods sold; carriage outwards is an expense. This is a common exam trap.' },
      { zh: '商業折扣通常不入帳；現金折扣才會以折扣給予或折扣收入入帳。', en: 'Trade discounts are usually not recorded; cash discounts are recorded as discounts allowed or discounts received.' },
      { zh: '先計毛利，再加入其他收入和扣除支出計淨利，作答格式要保留清楚小計。', en: 'Calculate gross profit first, then add other revenues and deduct expenses to find net profit. Keep clear subtotals in answers.' },
    ],
    questions: [
      { question: '購貨運費和銷貨運費在損益表中如何處理？', questionEn: 'How are carriage inwards and carriage outwards treated in the income statement?', answer: '購貨運費加入銷貨成本；銷貨運費是營業支出，於毛利後扣除。', answerEn: 'Carriage inwards is added to cost of goods sold; carriage outwards is an operating expense deducted after gross profit.' },
      { question: '毛利和淨利有何分別？', questionEn: 'What is the difference between gross profit and net profit?', answer: '毛利只比較銷貨淨額和銷貨成本；淨利是在毛利基礎上加入其他收入並扣除支出後的結果。', answerEn: 'Gross profit compares only net sales with cost of goods sold; net profit adds other revenues to gross profit and deducts expenses.' },
      { question: '商業折扣是否需要記入折扣帳戶？', questionEn: 'Should a trade discount be recorded in a discount account?', answer: '通常不需要。商業折扣直接從發票價扣減，帳簿只記錄折扣後金額。', answerEn: 'Usually no. Trade discounts are deducted directly from invoice price, and only the net amount is recorded.' },
    ],
  },
  {
    id: 'financial-statements-sole-proprietorships-ii',
    number: 2,
    title: '獨資企業財務報表（二）',
    titleEn: 'Financial Statements for Sole Proprietorships (II)',
    objective: {
      zh: '理解財務狀況表的目的、資產與負債分類、營運資金，以及財務報表的用途和限制。',
      en: 'Understand the purpose of a statement of financial position, classification of assets and liabilities, working capital, and the uses and limitations of financial statements.',
    },
    sections: [
      {
        title: '財務狀況表的目的',
        titleEn: 'Purpose of a Statement of Financial Position',
        points: [
          { zh: '財務狀況表列示企業在某一日期的資產、負債及資本，反映企業的財務狀況。', en: 'A statement of financial position shows a business’s assets, liabilities and capital at a particular date and reflects its financial position.' },
          { zh: '它是時點報表，屬存量概念；損益表是一段期間報表，屬流量概念。', en: 'It is a point-in-time statement and follows a stock concept; an income statement is a period statement and follows a flow concept.' },
          { zh: '獨資企業的財務狀況表通常以資產減負債得出期末資本，並與東主權益保持一致。', en: 'For a sole proprietorship, the statement of financial position usually deducts liabilities from assets to arrive at closing capital, consistent with the owner’s equity.' },
        ],
      },
      {
        title: '資產與負債分類',
        titleEn: 'Classification of Assets and Liabilities',
        points: [
          { zh: '非流動資產是長期使用並不打算在一年內出售的資源，例如設備、車輛和傢俬。', en: 'Non-current assets are resources used for the long term and not intended for sale within one year, such as equipment, vehicles and furniture.' },
          { zh: '流動資產是預期在短期內轉化為現金、出售或耗用的資源，例如存貨、應收帳款、銀行存款及現金。', en: 'Current assets are resources expected to be converted into cash, sold or consumed in the short term, such as inventory, trade receivables, bank and cash.' },
          { zh: '非流動負債是通常超過一年後才償還的債務，例如長期銀行貸款。', en: 'Non-current liabilities are debts usually repayable after more than one year, such as long-term bank loans.' },
          { zh: '流動負債是通常一年內需要償還的債務，例如應付帳款、應計費用和短期貸款。', en: 'Current liabilities are debts usually payable within one year, such as trade payables, accrued expenses and short-term loans.' },
        ],
      },
      {
        title: '流動性、耐用性與營運資金',
        titleEn: 'Liquidity, Durability and Working Capital',
        points: [
          { zh: '流動性是資產轉化為現金的速度和容易程度。現金流動性最高，存貨通常較低。', en: 'Liquidity is the speed and ease with which an asset can be converted into cash. Cash has the highest liquidity, while inventory is usually less liquid.' },
          { zh: '耐用性是資產可供企業使用的時間長短。非流動資產通常較耐用，流動資產通常在短期內使用或出售。', en: 'Durability refers to how long an asset can be used by a business. Non-current assets are usually more durable, while current assets are used or sold in the short term.' },
          { zh: '流動資產淨值或營運資金 = 流動資產 - 流動負債。正數代表短期資源大於短期債務。', en: 'Net current assets or working capital = current assets - current liabilities. A positive amount means short-term resources exceed short-term debts.' },
          { zh: '若流動負債大於流動資產，則出現流動負債淨額，企業可能面對短期償債壓力。', en: 'If current liabilities exceed current assets, there are net current liabilities and the business may face short-term repayment pressure.' },
        ],
      },
      {
        title: '帳戶分類與報表編製',
        titleEn: 'Classification of Ledger Accounts and Statement Preparation',
        points: [
          { zh: '個人帳戶記錄與個人或企業的往來，例如應收帳款和應付帳款。', en: 'Personal accounts record dealings with persons or businesses, such as trade receivables and trade payables.' },
          { zh: '非個人帳戶包括實帳戶和名義帳戶。實帳戶記錄資產；名義帳戶記錄收入、支出、收益和損失。', en: 'Impersonal accounts include real accounts and nominal accounts. Real accounts record assets; nominal accounts record revenues, expenses, gains and losses.' },
          { zh: '名義帳戶通常轉入損益表；資產、負債和資本帳戶通常列入財務狀況表。', en: 'Nominal accounts are usually transferred to the income statement; asset, liability and capital accounts are usually shown in the statement of financial position.' },
        ],
      },
      {
        title: '財務報表的用途與限制',
        titleEn: 'Uses and Limitations of Financial Statements',
        points: [
          { zh: '財務報表可協助內部和外部使用者評估盈利能力、流動性、財務穩定性及管理表現。', en: 'Financial statements help internal and external users evaluate profitability, liquidity, financial stability and management performance.' },
          { zh: '財務報表主要報告過去結果，未必能準確預測未來表現。', en: 'Financial statements mainly report past results and may not accurately predict future performance.' },
          { zh: '資產常按歷史成本記錄，可能與現時市場價值不同；不同會計政策亦會影響比較。', en: 'Assets are often recorded at historical cost, which may differ from current market value; different accounting policies also affect comparison.' },
          { zh: '財務報表通常缺乏定性資料，例如員工士氣、品牌聲譽、服務質素和管理能力。', en: 'Financial statements often lack qualitative information, such as employee morale, brand reputation, service quality and management ability.' },
        ],
      },
    ],
    terms: [
      { term: '財務狀況表', termEn: 'Statement of financial position', definition: '列示企業在某一日期資產、負債及資本的報表。', definitionEn: 'A statement showing assets, liabilities and capital of a business at a particular date.' },
      { term: '流量概念', termEn: 'Flow concept', definition: '反映一段期間內發生的變動，例如收入和支出。', definitionEn: 'A concept showing changes over a period, such as revenues and expenses.' },
      { term: '存量概念', termEn: 'Stock concept', definition: '反映某一日期的結餘或狀態，例如資產和負債。', definitionEn: 'A concept showing balances or positions at a particular date, such as assets and liabilities.' },
      { term: '流動資產', termEn: 'Current assets', definition: '預期在短期內轉化為現金、出售或耗用的資產。', definitionEn: 'Assets expected to be converted into cash, sold or consumed in the short term.' },
      { term: '非流動資產', termEn: 'Non-current assets', definition: '長期使用並非持作短期出售的資產。', definitionEn: 'Assets used for the long term and not held for short-term sale.' },
      { term: '流動負債', termEn: 'Current liabilities', definition: '通常一年內需要償還的債務。', definitionEn: 'Debts usually payable within one year.' },
      { term: '非流動負債', termEn: 'Non-current liabilities', definition: '通常超過一年後才償還的債務。', definitionEn: 'Debts usually repayable after more than one year.' },
      { term: '營運資金', termEn: 'Working capital', definition: '流動資產減流動負債。', definitionEn: 'Current assets minus current liabilities.' },
      { term: '流動資產淨值', termEn: 'Net current assets', definition: '流動資產大於流動負債的差額。', definitionEn: 'The excess of current assets over current liabilities.' },
      { term: '流動負債淨額', termEn: 'Net current liabilities', definition: '流動負債大於流動資產的差額。', definitionEn: 'The excess of current liabilities over current assets.' },
      { term: '名義帳戶', termEn: 'Nominal accounts', definition: '記錄收入、支出、收益和損失的帳戶。', definitionEn: 'Accounts recording revenues, expenses, gains and losses.' },
      { term: '實帳戶', termEn: 'Real accounts', definition: '記錄資產的帳戶。', definitionEn: 'Accounts recording assets.' },
    ],
    examTips: [
      { zh: '損益表是期間報表；財務狀況表是某一日期的時點報表。題目問目的時要分清。', en: 'An income statement is for a period; a statement of financial position is at a point in time. Distinguish them when asked about purposes.' },
      { zh: '流動資產和非流動資產分類要看用途和預期變現時間，不只看名稱。', en: 'Classify current and non-current assets by use and expected realisation period, not only by name.' },
      { zh: '評估財務報表限制時，要寫出為何會影響決策，例如歷史成本令現時價值被低估或高估。', en: 'When evaluating limitations, explain why they affect decisions, such as historical cost understating or overstating current values.' },
    ],
    questions: [
      { question: '為何財務狀況表屬於存量概念？', questionEn: 'Why does a statement of financial position follow a stock concept?', answer: '因為它列示某一日期的資產、負債和資本結餘，而不是一段期間內的流入或流出。', answerEn: 'Because it shows balances of assets, liabilities and capital at a particular date, not inflows or outflows over a period.' },
      { question: '營運資金如何計算？', questionEn: 'How is working capital calculated?', answer: '營運資金 = 流動資產 - 流動負債。', answerEn: 'Working capital = current assets - current liabilities.' },
      { question: '財務報表欠缺定性資料有何限制？', questionEn: 'What is the limitation of lacking qualitative information in financial statements?', answer: '使用者難以全面評估企業前景，例如品牌聲譽、員工士氣和服務質素可能影響未來表現，但未必反映在數字中。', answerEn: 'Users may not fully assess prospects. For example, brand reputation, staff morale and service quality may affect future performance but may not appear in the figures.' },
    ],
  },
  {
    id: 'accounting-assumptions-principles-conventions',
    number: 3,
    title: '會計假設、原則及慣例',
    titleEn: 'Accounting Assumptions, Principles and Conventions',
    objective: {
      zh: '理解並應用企業實體、歷史成本、持續經營、一貫性及權責發生等基本會計概念。',
      en: 'Understand and apply fundamental accounting concepts including business entity, historical cost, going concern, consistency and accrual.',
    },
    sections: [
      {
        title: '企業實體假設',
        titleEn: 'Business Entity Assumption',
        points: [
          { zh: '企業實體假設指出企業與東主是分開的會計單位，企業帳簿只記錄企業交易。', en: 'The business entity assumption states that the business and its owner are separate accounting units, and the books record only business transactions.' },
          { zh: '東主私人支出不應記作企業支出；東主取用企業資源應記作提取。', en: 'The owner’s private expenses should not be recorded as business expenses; resources taken by the owner should be recorded as drawings.' },
          { zh: '此概念讓使用者清楚分辨企業表現和東主私人活動，提升會計資料的可理解性。', en: 'This concept separates business performance from the owner’s private activities and improves understandability of accounting information.' },
        ],
      },
      {
        title: '歷史成本原則',
        titleEn: 'Historical Cost Principle',
        points: [
          { zh: '歷史成本原則要求資產通常以購入時實際支付的成本入帳，而不是按估計市場價值入帳。', en: 'The historical cost principle requires assets to be recorded at the actual cost paid when acquired, rather than estimated market value.' },
          { zh: '歷史成本有客觀憑證支持，較可靠和容易核實。', en: 'Historical cost is supported by objective evidence, making it more reliable and verifiable.' },
          { zh: '其限制是資產帳面值可能與現時價值不同，特別是在價格大幅變動或資產持有很久時。', en: 'Its limitation is that book values may differ from current values, especially when prices change significantly or assets are held for a long time.' },
        ],
      },
      {
        title: '持續經營假設',
        titleEn: 'Going Concern Assumption',
        points: [
          { zh: '持續經營假設假定企業會在可預見將來繼續營運，而不是即將清盤。', en: 'The going concern assumption assumes that the business will continue operating in the foreseeable future and is not about to liquidate.' },
          { zh: '因此，非流動資產可按成本扣除折舊列示，而不需要全部按清盤價值記錄。', en: 'Therefore, non-current assets can be shown at cost less depreciation instead of being recorded at liquidation value.' },
          { zh: '若企業面臨嚴重財務困難或即將停業，持續經營假設可能不再適用。', en: 'If a business faces serious financial difficulty or is about to close down, the going concern assumption may no longer apply.' },
        ],
      },
      {
        title: '一貫性原則',
        titleEn: 'Consistency Principle',
        points: [
          { zh: '一貫性原則要求企業在不同會計期間採用相同的會計政策和方法，除非有合理理由改變。', en: 'The consistency principle requires a business to use the same accounting policies and methods across accounting periods unless there is a justified reason to change.' },
          { zh: '一貫性使不同期間的財務資料可比較，例如折舊方法不應無故每年改變。', en: 'Consistency makes financial information comparable across periods; for example, depreciation methods should not change every year without reason.' },
          { zh: '若方法有重大改變，企業應清楚披露，讓使用者理解對利潤和資產的影響。', en: 'If there is a significant change in method, the business should disclose it clearly so users understand its effect on profit and assets.' },
        ],
      },
      {
        title: '權責發生原則',
        titleEn: 'Accrual Principle',
        points: [
          { zh: '權責發生原則要求收入在賺取時確認，支出在發生時確認，而不只按現金收付時間入帳。', en: 'The accrual principle requires revenue to be recognised when earned and expenses when incurred, not only when cash is received or paid.' },
          { zh: '因此，期末需要處理應計收入、應計支出、預收收入和預付支出，讓損益表反映正確期間的表現。', en: 'Therefore, period-end adjustments for accrued income, accrued expenses, income received in advance and prepaid expenses are needed so the income statement reflects the correct period.' },
          { zh: '權責發生原則也支援配比概念，將收入與賺取該收入所需支出配對。', en: 'The accrual principle also supports matching by pairing revenues with expenses incurred to earn those revenues.' },
        ],
      },
    ],
    terms: [
      { term: '企業實體假設', termEn: 'Business entity assumption', definition: '企業與東主在會計上分開處理。', definitionEn: 'The business and its owner are treated separately in accounting.' },
      { term: '歷史成本原則', termEn: 'Historical cost principle', definition: '資產通常按購入成本入帳。', definitionEn: 'Assets are usually recorded at their acquisition cost.' },
      { term: '持續經營假設', termEn: 'Going concern assumption', definition: '假定企業會在可預見將來繼續營運。', definitionEn: 'The assumption that the business will continue operating in the foreseeable future.' },
      { term: '一貫性原則', termEn: 'Consistency principle', definition: '不同期間應採用相同會計政策和方法，以保持可比較性。', definitionEn: 'The same accounting policies and methods should be used across periods to maintain comparability.' },
      { term: '權責發生原則', termEn: 'Accrual principle', definition: '收入和支出按賺取或發生期間確認，而非只按現金收付確認。', definitionEn: 'Revenues and expenses are recognised when earned or incurred, not only when cash is received or paid.' },
      { term: '配比', termEn: 'Matching', definition: '把收入與賺取該收入所需的相關支出配對在同一期間。', definitionEn: 'Matching revenues with the related expenses incurred to earn them in the same period.' },
      { term: '預付支出', termEn: 'Prepaid expenses', definition: '已付款但屬於未來期間的支出。', definitionEn: 'Expenses paid but relating to a future period.' },
      { term: '應計支出', termEn: 'Accrued expenses', definition: '已發生但尚未付款的支出。', definitionEn: 'Expenses incurred but not yet paid.' },
      { term: '預收收入', termEn: 'Income received in advance', definition: '已收款但尚未賺取的收入。', definitionEn: 'Income received but not yet earned.' },
      { term: '應計收入', termEn: 'Accrued income', definition: '已賺取但尚未收款的收入。', definitionEn: 'Income earned but not yet received.' },
    ],
    examTips: [
      { zh: '概念應用題要先點名會計概念，再用題目情境解釋為何適用。', en: 'For application questions, name the accounting concept first, then explain why it applies to the case.' },
      { zh: '歷史成本強調可靠和可核實；其缺點是未必反映現時市場價值。兩面都要掌握。', en: 'Historical cost emphasises reliability and verifiability; its weakness is that it may not reflect current market value. Know both sides.' },
      { zh: '權責發生題要判斷「屬於哪個會計期間」，而不是只看現金何時收付。', en: 'For accrual questions, decide which accounting period an item belongs to, not only when cash is received or paid.' },
    ],
    questions: [
      { question: '東主把家庭電費交由企業付款，應用哪個會計概念？', questionEn: 'Which accounting concept applies when an owner asks the business to pay household electricity bills?', answer: '企業實體假設。家庭電費屬私人支出，不應記作企業支出；若由企業付款，應視作東主提取。', answerEn: 'Business entity assumption. Household electricity is a private expense and should not be recorded as a business expense; if paid by the business, it should be treated as drawings.' },
      { question: '為何設備通常以成本扣除折舊列示，而不是以清盤價值列示？', questionEn: 'Why is equipment usually shown at cost less depreciation instead of liquidation value?', answer: '因為持續經營假設假定企業會繼續營運，設備會繼續用於業務，而非即時出售清盤。', answerEn: 'Because the going concern assumption assumes the business will continue operating and the equipment will be used in the business rather than sold immediately in liquidation.' },
      { question: '已支付下年度保險費，為何不應全數列作本年度支出？', questionEn: 'Why should insurance paid for next year not be fully treated as this year’s expense?', answer: '根據權責發生原則，支出應歸入受益期間；屬於下年度的部分應列作預付支出。', answerEn: 'Under the accrual principle, expenses should be recognised in the period benefited; the part relating to next year should be recorded as a prepaid expense.' },
    ],
  },
]
