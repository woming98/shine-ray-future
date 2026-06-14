import { C1DetailedChapter } from './c1Notes'

export const A3_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'trial-balance',
    number: 1,
    title: '試算表',
    titleEn: 'Trial Balance',
    objective: {
      zh: '掌握試算表的編製方法、功能及限制，並能判斷試算表平衡與帳目正確性之間的關係。',
      en: 'Master how to prepare a trial balance, understand its functions and limitations, and judge the relationship between agreement of a trial balance and correctness of accounts.',
    },
    sections: [
      {
        title: '試算表的性質',
        titleEn: 'Nature of a Trial Balance',
        points: [
          { zh: '試算表是在某一日期列出所有分類帳帳戶借方及貸方結餘的報表，用來檢查複式記帳的算術平衡。', en: 'A trial balance is a statement listing debit and credit balances of all ledger accounts at a particular date to check the arithmetic agreement of double entry.' },
          { zh: '試算表不是正式財務報表，但它是編製損益表及財務狀況表的重要工作底稿。', en: 'A trial balance is not a formal financial statement, but it is an important working paper for preparing the income statement and statement of financial position.' },
          { zh: '借方總額等於貸方總額，表示每項已記錄交易大致符合借貸相等原則；若不相等，代表帳簿中存在算術或過帳錯誤。', en: 'If total debits equal total credits, recorded transactions broadly follow the debit-equals-credit rule; if not, there is an arithmetic or posting error in the books.' },
        ],
      },
      {
        title: '編製試算表',
        titleEn: 'Preparing a Trial Balance',
        points: [
          { zh: '編製前應先把各分類帳帳戶平帳，找出每個帳戶的借方或貸方結餘。資產及費用通常為借方結餘，負債、資本及收入通常為貸方結餘。', en: 'Before preparing a trial balance, balance each ledger account and identify its debit or credit balance. Assets and expenses usually have debit balances, while liabilities, capital and income usually have credit balances.' },
          { zh: '試算表按帳戶名稱列示借方結餘和貸方結餘。若某帳戶沒有期末結餘，一般不列入試算表。', en: 'The trial balance lists account names with debit balances and credit balances. Accounts with no closing balance are usually not listed.' },
          { zh: '若試算表不平衡，應檢查加總、平帳、過帳金額、借貸方向及是否遺漏某一帳戶結餘。', en: 'If the trial balance does not agree, check additions, account balancing, posting amounts, debit or credit directions and whether any account balance has been omitted.' },
        ],
      },
      {
        title: '試算表的功能',
        titleEn: 'Functions of a Trial Balance',
        points: [
          { zh: '試算表可檢查分類帳借貸總額是否相等，協助發現部分算術錯誤、單邊過帳或借貸方向錯誤。', en: 'A trial balance checks whether total ledger debits equal total credits and helps detect some arithmetic errors, one-sided postings or wrong debit-credit directions.' },
          { zh: '它把所有帳戶結餘集中在一份報表中，方便編製損益表、財務狀況表及進行期末調整。', en: 'It brings all account balances into one statement, making it easier to prepare the income statement, statement of financial position and period-end adjustments.' },
          { zh: '試算表亦可作為檢查帳簿完整性和追查錯誤的起點，但不應被視為帳目完全正確的證明。', en: 'It can also be a starting point for checking completeness and tracing errors, but should not be treated as proof that all accounts are completely correct.' },
        ],
      },
      {
        title: '試算表的限制',
        titleEn: 'Limitations of a Trial Balance',
        points: [
          { zh: '試算表平衡只表示借方總額等於貸方總額，不代表所有交易均正確、完整或記入適當帳戶。', en: 'Agreement of a trial balance only means total debits equal total credits. It does not mean all transactions are correct, complete or posted to the proper accounts.' },
          { zh: '完全遺漏交易、原始分錄錯誤、原則錯誤、誤記帳戶、完全倒置分錄和抵銷錯誤，都可能令試算表仍然平衡。', en: 'Complete omission, error of original entry, error of principle, error of commission, complete reversal and compensating errors may still leave the trial balance in agreement.' },
          { zh: '因此，試算表須配合原始憑證、原始分錄簿、銀行調節及帳戶分析，才能提高帳目可靠性。', en: 'Therefore, the trial balance should be supported by source documents, books of original entry, bank reconciliation and account analysis to improve reliability.' },
        ],
      },
    ],
    terms: [
      { term: '試算表', termEn: 'Trial balance', definition: '列出分類帳借方及貸方結餘以檢查算術平衡的報表。', definitionEn: 'A statement listing debit and credit ledger balances to check arithmetic agreement.' },
      { term: '平衡', termEn: 'Agree', definition: '試算表借方總額等於貸方總額。', definitionEn: 'The debit total of a trial balance equals the credit total.' },
      { term: '不平衡', termEn: 'Disagree', definition: '試算表借方總額與貸方總額不相等。', definitionEn: 'The debit total and credit total of a trial balance are not equal.' },
      { term: '分類帳結餘', termEn: 'Ledger balance', definition: '分類帳帳戶平帳後所得的借方或貸方餘額。', definitionEn: 'The debit or credit balance obtained after balancing a ledger account.' },
      { term: '算術準確性', termEn: 'Arithmetic accuracy', definition: '帳簿金額加總及借貸總額在數學上正確。', definitionEn: 'Mathematical correctness of additions and debit-credit totals in the books.' },
      { term: '完全遺漏', termEn: 'Complete omission', definition: '整項交易的借方及貸方均沒有記錄。', definitionEn: 'Both debit and credit sides of a transaction are not recorded.' },
      { term: '原則錯誤', termEn: 'Error of principle', definition: '把交易記入錯誤會計類別的錯誤。', definitionEn: 'An error where a transaction is recorded in the wrong accounting class.' },
      { term: '抵銷錯誤', termEn: 'Compensating errors', definition: '兩個或以上錯誤的差額互相抵銷，使試算表仍然平衡。', definitionEn: 'Two or more errors whose differences offset each other, leaving the trial balance in agreement.' },
    ],
    examTips: [
      { zh: '試算表題先判斷帳戶正常結餘方向。資產、費用、提用通常在借方；負債、資本、收入通常在貸方。', en: 'For trial balance questions, identify the normal balance first. Assets, expenses and drawings are usually debit; liabilities, capital and income are usually credit.' },
      { zh: '若問試算表限制，必須指出「平衡不代表沒有錯誤」，並舉出至少一類不影響平衡的錯誤。', en: 'For limitations, state that agreement does not mean no errors, and give at least one type of error not affecting agreement.' },
    ],
    questions: [
      { question: '試算表平衡是否代表帳目完全正確？', questionEn: 'Does agreement of a trial balance mean the accounts are completely correct?', answer: '不代表。它只表示借貸總額相等，完全遺漏、原則錯誤或原始分錄錯誤等仍可能存在。', answerEn: 'No. It only shows debit and credit totals are equal; complete omission, error of principle or error of original entry may still exist.' },
      { question: '為何資產帳戶通常列在試算表借方？', questionEn: 'Why are asset accounts usually shown on the debit side of a trial balance?', answer: '根據借貸規則，資產增加記借方，而資產帳戶一般期末為借方結餘。', answerEn: 'Under debit-credit rules, increases in assets are debited, and asset accounts generally have debit closing balances.' },
      { question: '試算表有甚麼實際用途？', questionEn: 'What practical uses does a trial balance have?', answer: '它檢查借貸算術平衡，集中帳戶結餘，並為編製損益表及財務狀況表提供資料。', answerEn: 'It checks debit-credit arithmetic agreement, gathers account balances and provides information for preparing the income statement and statement of financial position.' },
    ],
  },
  {
    id: 'financial-statements-sole-proprietorships-i',
    number: 2,
    title: '獨資企業財務報表（一）',
    titleEn: 'Financial Statements for Sole Proprietorships (I)',
    objective: {
      zh: '理解存貨及結帳分錄的處理，計算銷貨成本、毛利和淨利，並編製獨資企業損益表。',
      en: 'Understand inventory and closing entries, calculate cost of goods sold, gross profit and net profit, and prepare an income statement for a sole proprietorship.',
    },
    sections: [
      {
        title: '存貨與結帳分錄',
        titleEn: 'Inventory and Closing Entries',
        points: [
          { zh: '期初存貨是本期開始時可供出售貨品的成本，期末存貨是本期末仍未售出的貨品成本。', en: 'Opening inventory is the cost of goods available for sale at the start of the period, while closing inventory is the cost of unsold goods at the end of the period.' },
          { zh: '在定期盤存制下，企業通常透過期末盤點確定期末存貨，再用公式計算銷貨成本。', en: 'Under the periodic inventory system, closing inventory is usually determined by a period-end count, and cost of goods sold is then calculated by formula.' },
          { zh: '結帳分錄把名義帳戶的結餘轉入損益帳戶，讓收入及費用帳戶在下一期重新開始。', en: 'Closing entries transfer balances of nominal accounts to the profit and loss account so income and expense accounts start afresh in the next period.' },
        ],
      },
      {
        title: '銷貨成本與毛利',
        titleEn: 'Cost of Goods Sold and Gross Profit',
        points: [
          { zh: '銷貨成本 = 期初存貨 + 採購淨額 + 購貨運費 - 期末存貨。它代表本期已售貨品的成本。', en: 'Cost of goods sold = opening inventory + net purchases + carriage inwards - closing inventory. It represents the cost of goods sold during the period.' },
          { zh: '採購淨額 = 採購 - 購貨退回 - 購貨折扣。銷售淨額 = 銷售 - 銷貨退回 - 銷貨折扣。', en: 'Net purchases = purchases - returns outwards - purchase discounts. Net sales = sales - returns inwards - sales discounts.' },
          { zh: '毛利 = 銷售淨額 - 銷貨成本；若銷貨成本大於銷售淨額，則出現毛損。', en: 'Gross profit = net sales - cost of goods sold; if cost of goods sold exceeds net sales, there is a gross loss.' },
          { zh: '購貨運費屬於把貨品運到企業的成本，通常加入銷貨成本；銷貨運費屬銷售及分銷費用，列作營運費用。', en: 'Carriage inwards is a cost of bringing goods to the business and is usually included in cost of goods sold; carriage outwards is a selling and distribution expense.' },
        ],
      },
      {
        title: '損益表格式',
        titleEn: 'Income Statement Format',
        points: [
          { zh: '損益表用來報告企業在一段期間內的收入、費用及利潤。獨資企業通常先計算毛利，再扣除各項費用得出淨利。', en: 'An income statement reports income, expenses and profit for a period. For a sole proprietorship, it usually calculates gross profit first and then deducts expenses to find net profit.' },
          { zh: '橫式格式把收入和費用左右列示；直式格式由上至下列示銷售、銷貨成本、毛利、其他收入、費用及淨利。', en: 'The horizontal style presents income and expenses on two sides; the vertical style lists sales, cost of goods sold, gross profit, other revenues, expenses and net profit from top to bottom.' },
          { zh: '其他收入如折扣收入、佣金收入或租金收入通常在毛利後加入；營運費用如薪金、租金、保險和銷貨運費則從毛利中扣除。', en: 'Other revenues such as discounts received, commission income or rent income are usually added after gross profit; operating expenses such as salaries, rent, insurance and carriage outwards are deducted from gross profit.' },
        ],
      },
      {
        title: '折扣與退貨',
        titleEn: 'Discounts and Returns',
        points: [
          { zh: '銷貨退回減少銷售，購貨退回減少採購。兩者應分別從銷售及採購中扣除，以得出淨額。', en: 'Returns inwards reduce sales, while returns outwards reduce purchases. They are deducted from sales and purchases respectively to find net amounts.' },
          { zh: '現金折扣與商業折扣不同。商業折扣通常不入帳，交易直接按扣除商業折扣後的發票金額記錄。', en: 'Cash discounts differ from trade discounts. Trade discounts are normally not recorded; transactions are recorded at the invoice amount after trade discount.' },
          { zh: '折扣允許是給予顧客提早付款的折扣，屬費用；折扣收入是供應商給予企業的折扣，屬收入。', en: 'Discounts allowed are discounts given to customers for prompt payment and are expenses; discounts received are discounts given by suppliers to the business and are income.' },
        ],
      },
    ],
    terms: [
      { term: '損益表', termEn: 'Income statement', definition: '報告企業在一段期間內收入、費用及利潤的財務報表。', definitionEn: 'A financial statement reporting income, expenses and profit for a period.' },
      { term: '期初存貨', termEn: 'Opening inventory', definition: '會計期初持有可供出售貨品的成本。', definitionEn: 'The cost of goods held for sale at the beginning of an accounting period.' },
      { term: '期末存貨', termEn: 'Closing inventory', definition: '會計期末仍未售出貨品的成本。', definitionEn: 'The cost of goods unsold at the end of an accounting period.' },
      { term: '銷貨成本', termEn: 'Cost of goods sold', definition: '本期已售貨品的成本。', definitionEn: 'The cost of goods sold during the period.' },
      { term: '毛利', termEn: 'Gross profit', definition: '銷售淨額減銷貨成本後的利潤。', definitionEn: 'Net sales less cost of goods sold.' },
      { term: '淨利', termEn: 'Net profit', definition: '毛利加其他收入再扣除費用後的利潤。', definitionEn: 'Profit after adding other revenues to gross profit and deducting expenses.' },
      { term: '名義帳戶', termEn: 'Nominal accounts', definition: '收入及費用帳戶，期末通常要結帳。', definitionEn: 'Income and expense accounts that are usually closed at period-end.' },
      { term: '結帳分錄', termEn: 'Closing entries', definition: '把名義帳戶結餘轉入損益帳戶的期末分錄。', definitionEn: 'Period-end entries transferring nominal account balances to the profit and loss account.' },
      { term: '銷貨退回', termEn: 'Returns inwards', definition: '顧客退回已售貨品。', definitionEn: 'Goods returned by customers after sale.' },
      { term: '購貨退回', termEn: 'Returns outwards', definition: '企業退回已購貨品給供應商。', definitionEn: 'Goods returned by the business to suppliers.' },
      { term: '購貨運費', termEn: 'Carriage inwards', definition: '把購入貨品運到企業所產生的運費。', definitionEn: 'Delivery cost incurred to bring purchased goods to the business.' },
      { term: '銷貨運費', termEn: 'Carriage outwards', definition: '把已售貨品送交顧客所產生的運費。', definitionEn: 'Delivery cost incurred to send sold goods to customers.' },
    ],
    examTips: [
      { zh: '損益表題先計銷售淨額和採購淨額，再計銷貨成本。不要把銷貨運費誤加進銷貨成本。', en: 'For income statements, calculate net sales and net purchases before cost of goods sold. Do not include carriage outwards in cost of goods sold.' },
      { zh: '期末存貨高會令銷貨成本低、毛利高；期末存貨低則相反。這是報表影響題常見考點。', en: 'Higher closing inventory lowers cost of goods sold and increases gross profit; lower closing inventory has the opposite effect. This is commonly tested.' },
    ],
    questions: [
      { question: '購貨運費和銷貨運費在損益表中有何分別？', questionEn: 'How are carriage inwards and carriage outwards treated differently in the income statement?', answer: '購貨運費加入銷貨成本；銷貨運費屬銷售及分銷費用，從毛利中扣除。', answerEn: 'Carriage inwards is included in cost of goods sold; carriage outwards is a selling and distribution expense deducted from gross profit.' },
      { question: '為何名義帳戶期末要結帳？', questionEn: 'Why are nominal accounts closed at period-end?', answer: '因為收入和費用只屬某一會計期間，期末要轉入損益帳戶，下一期重新累積。', answerEn: 'Income and expenses relate to a specific accounting period, so they are transferred to the profit and loss account and start afresh next period.' },
      { question: '毛利和淨利有何分別？', questionEn: 'What is the difference between gross profit and net profit?', answer: '毛利只比較銷售淨額與銷貨成本；淨利則在毛利基礎上加入其他收入並扣除營運費用。', answerEn: 'Gross profit compares net sales with cost of goods sold only; net profit adds other revenues and deducts operating expenses from gross profit.' },
    ],
  },
  {
    id: 'financial-statements-sole-proprietorships-ii',
    number: 3,
    title: '獨資企業財務報表（二）',
    titleEn: 'Financial Statements for Sole Proprietorships (II)',
    objective: {
      zh: '理解財務狀況表的目的，分類資產、負債及資本，編製獨資企業財務狀況表，並評估財務報表的用途與限制。',
      en: 'Understand the purpose of a statement of financial position, classify assets, liabilities and capital, prepare a statement of financial position for a sole proprietorship, and evaluate the uses and limitations of financial statements.',
    },
    sections: [
      {
        title: '財務狀況表的目的',
        titleEn: 'Purpose of a Statement of Financial Position',
        points: [
          { zh: '財務狀況表列示企業在某一日期的資產、負債及資本，反映企業的財務狀況。', en: 'A statement of financial position shows a business’s assets, liabilities and capital at a particular date and reflects its financial position.' },
          { zh: '損益表是期間報表，反映一段期間的收入及費用；財務狀況表是時點報表，反映某一日的資源和資金來源。', en: 'The income statement is a period statement showing income and expenses over a period; the statement of financial position is a point-in-time statement showing resources and sources of finance at a date.' },
          { zh: '財務狀況表以會計方程式為基礎：資產 = 負債 + 資本。獨資企業的期末資本通常受期初資本、追加資本、淨利及提用影響。', en: 'The statement of financial position is based on the accounting equation: assets = liabilities + capital. Closing capital of a sole proprietorship is usually affected by opening capital, additional capital, net profit and drawings.' },
        ],
      },
      {
        title: '資產及負債分類',
        titleEn: 'Classification of Assets and Liabilities',
        points: [
          { zh: '非流動資產是長期持有供企業營運使用的資產，例如設備、車輛及樓宇。流動資產是預期短期內變現、出售或使用的資產，例如存貨、應收帳款、銀行及現金。', en: 'Non-current assets are held for long-term use in operations, such as equipment, vehicles and buildings. Current assets are expected to be realised, sold or used in the short term, such as inventory, trade receivables, bank and cash.' },
          { zh: '非流動負債是較長期才需清償的債務，例如長期貸款；流動負債是預期短期內清償的債務，例如應付帳款、銀行透支及應計費用。', en: 'Non-current liabilities are debts settled over a longer period, such as long-term loans; current liabilities are debts expected to be settled in the short term, such as trade payables, bank overdraft and accrued expenses.' },
          { zh: '資產通常按流動性或耐久性排列；負債則按到期日排列。題目若指定橫式或直式格式，應跟從指定格式。', en: 'Assets are often ordered by liquidity or durability; liabilities are ordered by maturity. If the question specifies horizontal or vertical style, follow that format.' },
        ],
      },
      {
        title: '營運資金與資本',
        titleEn: 'Working Capital and Capital',
        points: [
          { zh: '營運資金 = 流動資產 - 流動負債。若結果為正，稱為流動資產淨額；若為負，稱為流動負債淨額。', en: 'Working capital = current assets - current liabilities. A positive result is net current assets; a negative result is net current liabilities.' },
          { zh: '營運資金反映企業短期償債能力，但只看金額並不足夠，還要考慮存貨變現速度、應收帳款質素和銀行資金情況。', en: 'Working capital indicates short-term liquidity, but the amount alone is insufficient; inventory realisability, receivables quality and bank position should also be considered.' },
          { zh: '獨資企業期末資本 = 期初資本 + 追加資本 + 淨利 - 提用。若出現淨虧損，則從資本中扣除。', en: 'Closing capital of a sole proprietorship = opening capital + additional capital + net profit - drawings. A net loss is deducted from capital.' },
        ],
      },
      {
        title: '帳戶分類與結帳',
        titleEn: 'Classification of Accounts and Closing Entries',
        points: [
          { zh: '個人帳戶記錄與個人或企業往來的帳項，例如顧客和供應商；非個人帳戶包括實帳戶及名義帳戶。', en: 'Personal accounts record dealings with persons or businesses, such as customers and suppliers; impersonal accounts include real accounts and nominal accounts.' },
          { zh: '實帳戶主要包括資產、負債及資本帳戶，其結餘會帶到下一期並列入財務狀況表。', en: 'Real accounts mainly include asset, liability and capital accounts. Their balances are carried forward to the next period and shown in the statement of financial position.' },
          { zh: '名義帳戶包括收入及費用帳戶，期末透過結帳分錄轉入損益帳戶，下一期重新開始。', en: 'Nominal accounts include income and expense accounts. They are transferred to the profit and loss account through closing entries and start afresh next period.' },
        ],
      },
      {
        title: '財務報表的用途與限制',
        titleEn: 'Uses and Limitations of Financial Statements',
        points: [
          { zh: '財務報表可協助業主、管理層、貸款人、供應商及其他使用者評估盈利能力、財務狀況及短期償債能力。', en: 'Financial statements help owners, managers, lenders, suppliers and other users assess profitability, financial position and short-term liquidity.' },
          { zh: '財務報表主要報告過往結果，未必能完全反映未來表現；部分資產按歷史成本列示，可能與現時價值不同。', en: 'Financial statements mainly report past results and may not fully reflect future performance; some assets are stated at historical cost, which may differ from current value.' },
          { zh: '不同會計政策、估計及個人判斷會影響報表數字；報表亦缺乏員工質素、顧客忠誠度和品牌聲譽等非財務資料。', en: 'Different accounting policies, estimates and personal judgments affect reported figures; statements also lack non-financial information such as staff quality, customer loyalty and brand reputation.' },
          { zh: '財務報表是摘要資料，方便理解整體表現，但使用者若要作詳細決策，仍需參考附加資料和背景。', en: 'Financial statements are summaries that help users understand overall performance, but detailed decisions still require additional information and context.' },
        ],
      },
    ],
    terms: [
      { term: '財務狀況表', termEn: 'Statement of financial position', definition: '列示企業在某一日期資產、負債及資本的財務報表。', definitionEn: 'A financial statement showing assets, liabilities and capital at a particular date.' },
      { term: '流動資產', termEn: 'Current assets', definition: '預期短期內變現、出售或使用的資產。', definitionEn: 'Assets expected to be realised, sold or used in the short term.' },
      { term: '非流動資產', termEn: 'Non-current assets', definition: '長期持有供企業營運使用的資產。', definitionEn: 'Assets held for long-term use in business operations.' },
      { term: '流動負債', termEn: 'Current liabilities', definition: '預期短期內清償的負債。', definitionEn: 'Liabilities expected to be settled in the short term.' },
      { term: '非流動負債', termEn: 'Non-current liabilities', definition: '清償期較長的負債。', definitionEn: 'Liabilities settled over a longer period.' },
      { term: '流動性', termEn: 'Liquidity', definition: '資產轉化為現金或企業償還短期債務的能力。', definitionEn: 'The ability of assets to turn into cash or of a business to repay short-term debts.' },
      { term: '耐久性', termEn: 'Durability', definition: '資產可為企業提供利益的長短。', definitionEn: 'The length of time an asset can provide benefits to the business.' },
      { term: '營運資金', termEn: 'Working capital', definition: '流動資產減流動負債。', definitionEn: 'Current assets less current liabilities.' },
      { term: '流動資產淨額', termEn: 'Net current assets', definition: '流動資產超過流動負債的金額。', definitionEn: 'The excess of current assets over current liabilities.' },
      { term: '流動負債淨額', termEn: 'Net current liabilities', definition: '流動負債超過流動資產的金額。', definitionEn: 'The excess of current liabilities over current assets.' },
      { term: '個人帳戶', termEn: 'Personal accounts', definition: '記錄與個人或企業往來的帳戶。', definitionEn: 'Accounts recording dealings with persons or businesses.' },
      { term: '實帳戶', termEn: 'Real accounts', definition: '資產、負債及資本等結餘會帶到下一期的帳戶。', definitionEn: 'Asset, liability and capital accounts whose balances are carried forward.' },
      { term: '歷史成本', termEn: 'Historical cost', definition: '按取得資產時的成本列示資產的計量基礎。', definitionEn: 'A measurement basis that records assets at their acquisition cost.' },
    ],
    examTips: [
      { zh: '財務狀況表題先分資產、負債、資本，再分流動與非流動。不要把收入費用帳戶列入財務狀況表。', en: 'For statements of financial position, classify assets, liabilities and capital first, then current and non-current items. Do not include income or expense accounts.' },
      { zh: '營運資金只包括流動資產和流動負債，不包括非流動資產、非流動負債或資本。', en: 'Working capital includes only current assets and current liabilities, not non-current assets, non-current liabilities or capital.' },
      { zh: '問財務報表限制時，常用答案包括歷史資料、歷史成本、會計政策差異、估計判斷及缺乏非財務資料。', en: 'For limitations, common points include historical information, historical cost, different accounting policies, estimates and judgments, and lack of non-financial information.' },
    ],
    questions: [
      { question: '損益表與財務狀況表的主要分別是甚麼？', questionEn: 'What is the main difference between an income statement and a statement of financial position?', answer: '損益表報告一段期間的收入、費用及利潤；財務狀況表列示某一日期的資產、負債及資本。', answerEn: 'An income statement reports income, expenses and profit for a period; a statement of financial position shows assets, liabilities and capital at a date.' },
      { question: '營運資金如何計算？', questionEn: 'How is working capital calculated?', answer: '營運資金等於流動資產減流動負債，用來初步評估短期償債能力。', answerEn: 'Working capital equals current assets less current liabilities and gives an initial indication of short-term liquidity.' },
      { question: '為何財務報表不能完全反映企業價值？', questionEn: 'Why can financial statements not fully reflect business value?', answer: '因為它們主要使用歷史資料和貨幣資料，未必反映品牌、員工質素、管理能力及市場前景等非財務因素。', answerEn: 'They mainly use historical and monetary information and may not reflect non-financial factors such as brand, staff quality, management ability and market prospects.' },
    ],
  },
]
