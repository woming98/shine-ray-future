import { C1DetailedChapter } from './c1Notes'

export const A10_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'incomplete-records',
    number: 1,
    title: '不完整記錄',
    titleEn: 'Incomplete Records',
    objective: {
      zh: '運用會計方程式、財務狀況表、控制帳戶及會計比率，由不完整資料推算利潤、資本結餘及財務報表缺失數字。',
      en: 'Use the accounting equation, statements of affairs, control accounts and accounting ratios to deduce profit, capital balances and missing financial-statement figures from incomplete records.',
    },
    sections: [
      {
        title: '不完整記錄的性質',
        titleEn: 'Nature of Incomplete Records',
        points: [
          { zh: '不完整記錄是指企業沒有保存完整複式記帳，資料可能只包括現金簿、銀行結單、發票、收據、存貨資料或部分帳戶。', en: 'Incomplete records mean a business has not kept a full double-entry system. Available information may include only a cash book, bank statements, invoices, receipts, inventory records or selected accounts.' },
          { zh: '題目通常要求學生由零散資料重建損益表及財務狀況表，因此重點不是背格式，而是找出每個未知數可由哪些關係推算。', en: 'Questions usually require students to reconstruct an income statement and statement of financial position from scattered data, so the focus is on identifying which relationships can derive each unknown figure.' },
          { zh: '處理不完整記錄時，應把資料分成資產、負債、資本、收入、費用、現金流及比率資料，再逐步建立可核對的工作表。', en: 'When dealing with incomplete records, classify information into assets, liabilities, capital, income, expenses, cash flows and ratio data, then build a working schedule that can be checked step by step.' },
        ],
      },
      {
        title: '資本比較法與財務狀況表',
        titleEn: 'Capital Comparison and Statement of Affairs',
        points: [
          { zh: '財務狀況表可用來推算某一日期的資本：資本 = 資產 - 負債。若只需計算期初或期末資本，先列出當日所有資產及負債即可。', en: 'A statement of affairs can be used to find capital at a date: capital = assets - liabilities. If only opening or closing capital is needed, list all assets and liabilities at that date first.' },
          { zh: '資本比較法計算利潤：利潤 = 期末資本 - 期初資本 + 提用 - 追加資本。若結果為負數，則代表虧損。', en: 'Capital comparison calculates profit as: profit = closing capital - opening capital + drawings - additional capital. A negative result represents a loss.' },
          { zh: '提用會減少資本，所以計算利潤時加回；追加資本會增加資本但不是利潤，所以計算利潤時扣除。', en: 'Drawings reduce capital, so they are added back when calculating profit. Additional capital increases capital but is not profit, so it is deducted.' },
          { zh: '資本比較法只求出整體利潤或虧損，不能顯示毛利、費用結構或營運表現細節；若題目要求完整損益表，仍須推算銷貨、採購及費用。', en: 'Capital comparison gives only overall profit or loss. It does not show gross profit, expense structure or operating details; if a full income statement is required, sales, purchases and expenses still have to be deduced.' },
        ],
      },
      {
        title: '由帳戶推算銷貨、採購及費用',
        titleEn: 'Deducing Sales, Purchases and Expenses from Accounts',
        points: [
          { zh: '應收貨款控制帳戶可推算賒銷、收款、銷貨退回、呆帳及折扣。應付貨款控制帳戶可推算賒購、付款、購貨退回及折扣。', en: 'A trade receivables control account can deduce credit sales, receipts, sales returns, bad debts and discounts. A trade payables control account can deduce credit purchases, payments, purchase returns and discounts.' },
          { zh: '銀行及現金摘要可補足收付款資料，但須小心分清業主提用、追加資本、貸款、資本性支出和收益性支出。', en: 'A bank and cash summary can complete receipt and payment information, but distinguish drawings, additional capital, loans, capital expenditure and revenue expenditure carefully.' },
          { zh: '費用帳戶常以「期初應付 + 本期費用 - 已付 - 期末應付」或「已付 + 期末應付 - 期初應付」推算本期費用；預付款則方向相反處理。', en: 'Expense accounts often derive the period expense using opening accrued amount, cash paid and closing accrued amount; alternatively, expense = cash paid + closing accrual - opening accrual. Prepayments are treated in the opposite direction.' },
          { zh: '若題目提供收款或付款總額，不應直接當作銷售或採購；必須先調整期初及期末應收、應付、折扣、退貨和壞帳等項目。', en: 'If total receipts or payments are given, do not treat them directly as sales or purchases; adjust for opening and closing receivables or payables, discounts, returns and bad debts first.' },
        ],
      },
      {
        title: '由比率及存貨資料完成損益表',
        titleEn: 'Completing the Income Statement with Ratios and Inventory Data',
        points: [
          { zh: '銷貨成本 = 期初存貨 + 採購淨額 - 期末存貨。若已知毛利率或成本加成率，可由銷貨或銷貨成本互相推算。', en: 'Cost of goods sold = opening inventory + net purchases - closing inventory. If gross profit ratio or mark-up is known, sales and cost of goods sold can be derived from each other.' },
          { zh: '毛利率 = 毛利 / 銷貨淨額；成本加成率 = 毛利 / 銷貨成本。兩者分母不同，混用會令所有後續數字錯誤。', en: 'Gross profit ratio = gross profit / net sales; mark-up = gross profit / cost of goods sold. The denominators are different, and mixing them up will distort all subsequent figures.' },
          { zh: '若題目給出存貨週轉率、平均收帳期或平均還款期，可反向推算銷貨成本、賒銷或賒購，再用控制帳戶和損益表核對。', en: 'If inventory turnover, average collection period or average repayment period is given, work backwards to find cost of goods sold, credit sales or credit purchases, then check with control accounts and the income statement.' },
          { zh: '完成損益表時應把銷售、銷貨成本、毛利、其他收入及各項費用分開列示，避免只列最終利潤而沒有展示推算過程。', en: 'When preparing the income statement, show sales, cost of goods sold, gross profit, other income and expenses separately. Avoid giving only the final profit without the deduction process.' },
        ],
      },
      {
        title: '完成財務狀況表與核對',
        titleEn: 'Completing the Statement of Financial Position and Checking',
        points: [
          { zh: '財務狀況表的未知數可由會計方程式、控制帳戶結餘、折舊、存貨、貸款及資本變動推算。每個數字應能追溯到一個工作表或帳戶。', en: 'Missing figures in the statement of financial position can be deduced from the accounting equation, control-account balances, depreciation, inventory, loans and capital changes. Each figure should be traceable to a schedule or account.' },
          { zh: '非流動資產須扣除累計折舊；若有新增或出售資產，應分開處理成本、累計折舊、出售收入及出售盈虧。', en: 'Non-current assets should be shown after accumulated depreciation. If assets are bought or sold, handle cost, accumulated depreciation, disposal proceeds and gain or loss on disposal separately.' },
          { zh: '最後應用「資產 = 負債 + 資本」核對財務狀況表，同時檢查資本是否與資本比較法或本期利潤相符。', en: 'Finally, check the statement of financial position using assets = liabilities + capital, and ensure capital agrees with capital comparison or the profit for the period.' },
          { zh: '不完整記錄題的高分關鍵是清楚展示推算步驟。即使最後數字錯誤，有條理的控制帳戶及工作表仍可取得方法分。', en: 'For incomplete-record questions, marks depend heavily on clear workings. Even if the final figure is wrong, organised control accounts and schedules can still earn method marks.' },
        ],
      },
    ],
    terms: [
      { term: '不完整記錄', termEn: 'Incomplete records', definition: '沒有完整保存複式記帳而只保留部分會計資料的情況。', definitionEn: 'A situation where full double-entry records are not kept and only partial accounting information is available.' },
      { term: '會計方程式', termEn: 'Accounting equation', definition: '資產 = 負債 + 資本，是推算未知數及核對財務狀況表的基礎。', definitionEn: 'Assets = liabilities + capital; the basis for deriving unknowns and checking the statement of financial position.' },
      { term: '財務狀況表', termEn: 'Statement of affairs', definition: '在不完整記錄下列示某日資產及負債以推算資本的報表。', definitionEn: 'A statement listing assets and liabilities at a date to determine capital under incomplete records.' },
      { term: '資本比較法', termEn: 'Capital comparison method', definition: '比較期初及期末資本，並調整提用及追加資本以計算利潤或虧損的方法。', definitionEn: 'A method that compares opening and closing capital and adjusts for drawings and additional capital to calculate profit or loss.' },
      { term: '提用', termEn: 'Drawings', definition: '業主從企業取走現金、貨品或其他資產作私人用途。', definitionEn: 'Cash, goods or other assets taken by the owner from the business for personal use.' },
      { term: '追加資本', termEn: 'Additional capital', definition: '業主在會計期間向企業投入的額外資金或資產。', definitionEn: 'Extra funds or assets introduced by the owner into the business during the accounting period.' },
      { term: '控制帳戶', termEn: 'Control account', definition: '概括記錄一類帳戶總額的帳戶，常用於推算應收或應付貨款資料。', definitionEn: 'An account summarising totals of a class of accounts, often used to deduce receivables or payables information.' },
      { term: '賒銷', termEn: 'Credit sales', definition: '先向顧客交付貨品或服務，稍後才收款的銷售。', definitionEn: 'Sales where goods or services are provided before cash is collected.' },
      { term: '賒購', termEn: 'Credit purchases', definition: '先取得貨品或服務，稍後才付款的採購。', definitionEn: 'Purchases where goods or services are obtained before cash is paid.' },
      { term: '銷貨成本', termEn: 'Cost of goods sold', definition: '與本期已售貨品相關的成本。', definitionEn: 'The cost related to goods sold during the period.' },
      { term: '毛利率', termEn: 'Gross profit ratio', definition: '毛利佔銷貨淨額的百分比。', definitionEn: 'Gross profit as a percentage of net sales.' },
      { term: '成本加成率', termEn: 'Mark-up', definition: '毛利佔銷貨成本的百分比。', definitionEn: 'Gross profit as a percentage of cost of goods sold.' },
      { term: '平均收帳期', termEn: 'Average collection period', definition: '企業平均需要多少日收回應收貨款。', definitionEn: 'The average number of days taken to collect trade receivables.' },
      { term: '平均還款期', termEn: 'Average repayment period', definition: '企業平均需要多少日支付應付貨款。', definitionEn: 'The average number of days taken to pay trade payables.' },
    ],
    examTips: [
      { zh: '先列已知資料，再決定用資本比較、控制帳戶、比率還是會計方程式推算未知數；不要一開始就直接寫財務報表。', en: 'List known information first, then decide whether each unknown is best derived by capital comparison, control accounts, ratios or the accounting equation; do not start by writing the final statements immediately.' },
      { zh: '毛利率與成本加成率必須分清。若毛利率是 25%，毛利是銷售額的 25%；若成本加成率是 25%，毛利是成本的 25%。', en: 'Distinguish gross profit ratio and mark-up. A 25% gross profit ratio means gross profit is 25% of sales; a 25% mark-up means gross profit is 25% of cost.' },
      { zh: '完成後用財務狀況表平衡和資本變動作雙重核對，能及早發現漏記提用、追加資本或折舊。', en: 'After completion, use both statement-of-financial-position agreement and capital movement as checks to detect omitted drawings, additional capital or depreciation.' },
    ],
    questions: [
      { question: '為何資本比較法要把提用加回？', questionEn: 'Why are drawings added back in the capital comparison method?', answer: '提用使期末資本減少，但不是營運虧損。為了計算真正的本期利潤，須把提用加回。', answerEn: 'Drawings reduce closing capital but are not an operating loss. They must be added back to calculate the true profit for the period.' },
      { question: '如果只知道收自顧客的現金，為何不能直接當作銷貨額？', questionEn: 'Why cannot cash received from customers be treated directly as sales?', answer: '因為收款可能包括收回期初應收貨款，亦可能尚未收回本期賒銷；還要調整折扣、退貨及壞帳。', answerEn: 'Receipts may include collection of opening receivables, while some current credit sales may remain uncollected. Discounts, returns and bad debts also need adjustment.' },
      { question: '完成不完整記錄題時，最常見的核對方法是甚麼？', questionEn: 'What is the most common check after completing an incomplete-records question?', answer: '用資產 = 負債 + 資本核對財務狀況表，並檢查期末資本是否與期初資本、利潤、提用及追加資本的關係一致。', answerEn: 'Check the statement of financial position using assets = liabilities + capital, and ensure closing capital agrees with opening capital, profit, drawings and additional capital.' },
    ],
  },
  {
    id: 'accounting-assumptions-principles-conventions',
    number: 2,
    title: '會計假設、原則及慣例',
    titleEn: 'Accounting Assumptions, Principles and Conventions',
    objective: {
      zh: '理解常見會計假設、原則及慣例的含義、重要性及限制，並能應用於不同會計情境。',
      en: 'Understand the meanings, importance and limitations of common accounting assumptions, principles and conventions, and apply them to different accounting situations.',
    },
    sections: [
      {
        title: '會計概念的作用',
        titleEn: 'Role of Accounting Concepts',
        points: [
          { zh: '會計假設、原則及慣例為記錄和報告交易提供共同基礎，使財務報表較具一致性、可比較性及可靠性。', en: 'Accounting assumptions, principles and conventions provide a common basis for recording and reporting transactions, making financial statements more consistent, comparable and reliable.' },
          { zh: '會計概念不是獨立背誦的定義，而是用來解釋為何某項交易應在某時、以某金額、列入某個帳戶或報表項目。', en: 'Accounting concepts are not definitions to memorise in isolation; they explain why a transaction should be recorded at a time, at an amount, and in a particular account or statement item.' },
          { zh: '同一情境可能涉及多個概念。例如期末調整可同時涉及應計、配比、審慎及重要性，答案應選取最直接相關的概念。', en: 'One situation may involve several concepts. For example, period-end adjustments may involve accrual, matching, prudence and materiality, so answers should select the most directly relevant concept.' },
        ],
      },
      {
        title: '基本假設',
        titleEn: 'Basic Assumptions',
        points: [
          { zh: '企業實體假設把企業與業主視為分開的會計單位，因此業主私人開支不應列作企業費用，業主提取資產應記作提用。', en: 'The business entity assumption treats the business and owner as separate accounting units, so the owner’s private expenses are not business expenses and owner withdrawals are recorded as drawings.' },
          { zh: '持續經營假設是假定企業會在可見將來繼續營運，因此非流動資產通常按成本減累計折舊列示，而不是按立即清盤價值列示。', en: 'The going concern assumption assumes the business will continue operating in the foreseeable future, so non-current assets are normally shown at cost less accumulated depreciation rather than immediate liquidation value.' },
          { zh: '貨幣計量假設只記錄能以貨幣可靠衡量的事項，因此員工士氣、品牌忠誠度或管理能力等重要因素通常不會直接入帳。', en: 'The money measurement assumption records only items that can be measured reliably in monetary terms, so important factors such as staff morale, brand loyalty and management ability are usually not recorded directly.' },
        ],
      },
      {
        title: '確認收入和費用的原則',
        titleEn: 'Principles for Recognising Income and Expenses',
        points: [
          { zh: '應計原則要求收入和費用按發生或賺取的期間確認，而不是按收款或付款日期確認。應計費用和預付費用正是這一原則的應用。', en: 'The accrual principle requires income and expenses to be recognised in the period in which they are earned or incurred, not when cash is received or paid. Accruals and prepayments apply this principle.' },
          { zh: '配比原則要求把產生收入所需的相關成本配對到同一會計期間，例如銷貨成本須與相關銷售收入在同一期確認。', en: 'The matching principle requires costs incurred to generate revenue to be matched with that revenue in the same accounting period, such as matching cost of goods sold with the related sales revenue.' },
          { zh: '實現原則要求收入在已完成主要銷售責任、金額可可靠計量且收款有合理把握時確認；只收到訂金通常不等於已實現收入。', en: 'The realisation principle recognises revenue when the main selling obligation has been fulfilled, the amount can be measured reliably and collection is reasonably certain; receiving a deposit alone usually does not mean revenue is realised.' },
        ],
      },
      {
        title: '計量與列報慣例',
        titleEn: 'Measurement and Reporting Conventions',
        points: [
          { zh: '歷史成本原則要求資產一般按取得成本入帳，優點是客觀和可驗證；缺點是可能未能反映現時市值。', en: 'The historical cost principle records assets generally at acquisition cost. It is objective and verifiable, but may not reflect current market value.' },
          { zh: '一致性原則要求企業在不同期間採用相同會計政策，除非有充分理由改變；這有助比較不同年度的表現。', en: 'The consistency principle requires a business to use the same accounting policies over periods unless there is a valid reason to change, supporting comparison across years.' },
          { zh: '審慎原則要求在不確定情況下不高估資產和收入、不低估負債和費用，因此會確認可能損失，但不提前確認未實現收益。', en: 'Prudence requires that assets and income should not be overstated and liabilities and expenses should not be understated under uncertainty, so probable losses are recognised but unrealised gains are not anticipated.' },
          { zh: '重要性原則容許對不會影響使用者決策的小額項目採用較簡化處理；但重要性取決於金額和性質，並非只看金額大小。', en: 'Materiality allows simplified treatment for small items that would not affect users’ decisions. Materiality depends on both amount and nature, not amount alone.' },
        ],
      },
      {
        title: '應用與限制',
        titleEn: 'Application and Limitations',
        points: [
          { zh: '作答情境題時，應先指出相關概念，再把概念連結到交易處理。例如「因企業實體假設，業主私人保險不應列作企業費用」。', en: 'For application questions, state the relevant concept and link it to the accounting treatment, for example: under the business entity assumption, the owner’s private insurance should not be recorded as a business expense.' },
          { zh: '不同概念有時會產生取捨。例如歷史成本提高可驗證性，但在通脹或資產價值大幅變動時，相關性可能下降。', en: 'Different concepts may involve trade-offs. Historical cost improves verifiability, but relevance may decrease during inflation or major asset-value changes.' },
          { zh: '會計概念不能消除所有判斷。折舊年期、呆帳準備、存貨可變現淨值及重要性門檻都需要專業估計。', en: 'Accounting concepts do not remove all judgment. Depreciation life, allowance for doubtful accounts, net realisable value of inventory and materiality thresholds all require professional estimates.' },
          { zh: '高分答案應使用正確英文術語，並配上具體會計處理，而不是只寫概念名稱。', en: 'High-scoring answers use the correct English term and give the specific accounting treatment, rather than naming the concept only.' },
        ],
      },
    ],
    terms: [
      { term: '企業實體假設', termEn: 'Business entity assumption', definition: '把企業與業主視為分開的會計單位。', definitionEn: 'The assumption that a business and its owner are separate accounting units.' },
      { term: '歷史成本原則', termEn: 'Historical cost principle', definition: '資產一般按取得時支付或承擔的成本入帳。', definitionEn: 'The principle that assets are generally recorded at the cost paid or incurred when acquired.' },
      { term: '持續經營假設', termEn: 'Going concern assumption', definition: '假定企業會在可見將來繼續營運。', definitionEn: 'The assumption that a business will continue operating in the foreseeable future.' },
      { term: '一致性原則', termEn: 'Consistency principle', definition: '企業應在不同期間採用一致的會計政策及方法。', definitionEn: 'The principle that a business should use consistent accounting policies and methods across periods.' },
      { term: '應計原則', termEn: 'Accrual principle', definition: '收入和費用應在賺取或發生的期間確認，而不是按現金收付確認。', definitionEn: 'The principle that income and expenses are recognised when earned or incurred, not when cash is received or paid.' },
      { term: '實現原則', termEn: 'Realisation principle', definition: '收入應在已實現並可可靠計量時確認。', definitionEn: 'The principle that revenue is recognised when it is realised and can be measured reliably.' },
      { term: '配比原則', termEn: 'Matching principle', definition: '產生收入的相關成本應與該收入在同一期間確認。', definitionEn: 'The principle that costs related to revenue should be recognised in the same period as that revenue.' },
      { term: '審慎原則', termEn: 'Prudence / Conservatism', definition: '在不確定情況下避免高估資產和收入、低估負債和費用。', definitionEn: 'The principle of avoiding overstatement of assets and income and understatement of liabilities and expenses under uncertainty.' },
      { term: '重要性原則', termEn: 'Materiality principle', definition: '會影響財務報表使用者決策的項目須適當披露及處理。', definitionEn: 'The principle that items affecting users’ decisions should be properly disclosed and treated.' },
      { term: '貨幣計量假設', termEn: 'Money measurement assumption', definition: '會計只記錄可用貨幣可靠衡量的事項。', definitionEn: 'The assumption that accounting records only matters measurable reliably in monetary terms.' },
      { term: '會計政策', termEn: 'Accounting policy', definition: '企業編製財務報表時採用的具體原則、基礎及方法。', definitionEn: 'The specific principles, bases and methods used by a business in preparing financial statements.' },
      { term: '可變現淨值', termEn: 'Net realisable value', definition: '存貨預計售價減完成及銷售所需成本後的金額。', definitionEn: 'The estimated selling price of inventory less costs needed to complete and sell it.' },
    ],
    examTips: [
      { zh: '原則題要做到「概念 + 解釋 + 應用」。只寫概念名稱通常不足夠，必須說明該交易應如何入帳或披露。', en: 'For concept questions, give the concept, explanation and application. Naming the concept alone is usually insufficient; state how the transaction should be recorded or disclosed.' },
      { zh: '企業實體、應計、配比、實現及審慎最常出現在情境題，須能用一兩句話直接連到題目資料。', en: 'Business entity, accrual, matching, realisation and prudence commonly appear in application questions. Be ready to link each directly to the case in one or two sentences.' },
      { zh: '不要把審慎理解為故意低估利潤。審慎是在不確定下避免過度樂觀，仍須有合理依據。', en: 'Do not treat prudence as deliberately understating profit. Prudence avoids excessive optimism under uncertainty, but still requires a reasonable basis.' },
    ],
    questions: [
      { question: '業主用公司銀行戶口支付私人旅遊費，應用哪個會計概念？', questionEn: 'Which accounting concept applies when an owner uses the business bank account to pay for a private holiday?', answer: '企業實體假設。企業與業主分開，私人旅遊費不應列作企業費用，應記作業主提用。', answerEn: 'Business entity assumption. The business and owner are separate, so the private holiday cost is not a business expense and should be recorded as drawings.' },
      { question: '為何期末未付電費仍要入帳？', questionEn: 'Why should unpaid electricity expense at year-end still be recorded?', answer: '根據應計原則及配比原則，已發生並與本期營運相關的費用應在本期確認，即使尚未付款。', answerEn: 'Under the accrual and matching principles, expenses incurred for current-period operations should be recognised in the current period even if not yet paid.' },
      { question: '歷史成本原則的主要優點和限制是甚麼？', questionEn: 'What are the main advantage and limitation of the historical cost principle?', answer: '優點是成本有憑證支持、較客觀和可驗證；限制是資產帳面值可能與現時市值相差很大。', answerEn: 'Its advantage is that cost is supported by evidence and is objective and verifiable; its limitation is that carrying amounts may differ significantly from current market values.' },
      { question: '審慎原則如何影響存貨計價？', questionEn: 'How does prudence affect inventory valuation?', answer: '存貨通常按成本與可變現淨值兩者中較低者列示，以避免高估資產及利潤。', answerEn: 'Inventory is normally stated at the lower of cost and net realisable value to avoid overstating assets and profit.' },
    ],
  },
]
