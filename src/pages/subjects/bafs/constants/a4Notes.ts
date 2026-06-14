import { C1DetailedChapter } from './c1Notes'

export const A4_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'accruals-and-prepayments',
    number: 1,
    title: '應計與預付',
    titleEn: 'Accruals and Prepayments',
    objective: {
      zh: '分辨現金制與應計制，理解應計項目和預付項目的處理，並能編製相關調整分錄、轉回分錄及經調整財務報表。',
      en: 'Distinguish cash accounting from accrual accounting, understand the treatment of accruals and prepayments, and prepare related adjusting entries, reversing entries and adjusted financial statements.',
    },
    sections: [
      {
        title: '現金制與應計制',
        titleEn: 'Cash Accounting and Accrual Accounting',
        points: [
          { zh: '現金制按實際收款或付款日期確認收入和費用，簡單但未必能反映本期真正賺取的收入和發生的費用。', en: 'Cash accounting recognises income and expenses when cash is received or paid. It is simple but may not show the income earned and expenses incurred in the period.' },
          { zh: '應計制按收入賺取和費用發生的期間確認項目，而不是按現金收付日期確認。這能較公平地反映本期財務表現。', en: 'Accrual accounting recognises items in the period when income is earned and expenses are incurred, not when cash is received or paid. This gives a fairer view of financial performance.' },
          { zh: '權責發生概念要求期末作調整，把收入及費用歸入正確會計期間。應計、預付、預收和應收收入都是期末調整的常見項目。', en: 'The accrual concept requires period-end adjustments so income and expenses are matched to the correct accounting period. Accruals, prepayments, deferred revenue and accrued revenue are common adjustments.' },
        ],
      },
      {
        title: '應計費用與預付費用',
        titleEn: 'Accrued Expenses and Prepaid Expenses',
        points: [
          { zh: '應計費用是本期已發生但尚未付款的費用。調整時借記相關費用，貸記應計費用，令費用及流動負債增加。', en: 'Accrued expenses are expenses incurred in the current period but not yet paid. The adjustment debits the expense and credits accrued expenses, increasing expense and current liabilities.' },
          { zh: '預付費用是已付款但屬於未來期間的費用。調整時借記預付費用，貸記相關費用，令本期費用減少並確認流動資產。', en: 'Prepaid expenses are payments made for future periods. The adjustment debits prepaid expenses and credits the expense, reducing current-period expense and recognising a current asset.' },
          { zh: '若題目給出已付金額和期初/期末應計或預付，可用公式推算本期費用：本期費用 = 已付金額 + 期末應計 - 期初應計 - 期末預付 + 期初預付。', en: 'If cash paid and opening or closing accruals/prepayments are given, period expense can be derived as: cash paid + closing accrual - opening accrual - closing prepayment + opening prepayment.' },
        ],
      },
      {
        title: '應收收入與預收收入',
        titleEn: 'Accrued Revenues and Deferred Revenues',
        points: [
          { zh: '應收收入是本期已賺取但尚未收到現金的收入。調整時借記應收收入，貸記相關收入，令收入及流動資產增加。', en: 'Accrued revenue is income earned in the current period but not yet received in cash. The adjustment debits accrued revenue and credits income, increasing income and current assets.' },
          { zh: '預收收入或遞延收入是已收款但屬於未來期間的收入。調整時借記相關收入，貸記預收收入，令本期收入減少並確認流動負債。', en: 'Deferred revenue is cash received for income relating to future periods. The adjustment debits income and credits deferred revenue, reducing current-period income and recognising a current liability.' },
          { zh: '分析收入調整時，先判斷本期真正賺取的金額，再與已收現金比較。已賺取但未收是資產；已收但未賺取是負債。', en: 'For revenue adjustments, identify the amount actually earned in the period and compare it with cash received. Earned but not received is an asset; received but not earned is a liability.' },
        ],
      },
      {
        title: '調整分錄與轉回分錄',
        titleEn: 'Adjusting Entries and Reversing Entries',
        points: [
          { zh: '調整分錄在期末記錄，使收入、費用、資產及負債反映正確期間。所有調整分錄仍須符合複式記帳。', en: 'Adjusting entries are recorded at period-end so income, expenses, assets and liabilities reflect the correct period. All adjusting entries must still follow double entry.' },
          { zh: '轉回分錄通常在下一會計期間開始時作出，方向與部分期末調整分錄相反，方便下一期按現金收付記錄時不重複確認收入或費用。', en: 'Reversing entries are usually made at the start of the next period in the opposite direction to certain period-end adjustments, helping avoid double recognition when cash is later recorded.' },
          { zh: '應計費用和應收收入常可在下一期轉回；預付費用和預收收入是否轉回，取決於企業採用的記帳方法和題目要求。', en: 'Accrued expenses and accrued revenues are commonly reversed in the next period. Whether prepaid expenses and deferred revenues are reversed depends on the accounting method and the question requirement.' },
        ],
      },
      {
        title: '財務報表影響',
        titleEn: 'Effects on Financial Statements',
        points: [
          { zh: '應計費用會增加本期費用及流動負債，降低利潤；預付費用會減少本期費用並增加流動資產，提高利潤。', en: 'Accrued expenses increase current-period expenses and current liabilities, reducing profit; prepaid expenses reduce current-period expenses and increase current assets, increasing profit.' },
          { zh: '應收收入會增加本期收入及流動資產，提高利潤；預收收入會減少本期收入並增加流動負債，降低利潤。', en: 'Accrued revenues increase current-period income and current assets, increasing profit; deferred revenues reduce current-period income and increase current liabilities, reducing profit.' },
          { zh: '財務狀況表應列示期末尚未結清的應計、預付、應收及預收項目；損益表則只列示屬於本期的收入和費用。', en: 'The statement of financial position shows outstanding accruals, prepayments, accrued revenues and deferred revenues at period-end; the income statement shows only income and expenses belonging to the current period.' },
        ],
      },
    ],
    terms: [
      { term: '現金制', termEn: 'Cash accounting', definition: '按現金收付日期確認收入及費用的會計方法。', definitionEn: 'An accounting basis that recognises income and expenses when cash is received or paid.' },
      { term: '應計制', termEn: 'Accrual accounting', definition: '按收入賺取及費用發生的期間確認收入及費用的會計方法。', definitionEn: 'An accounting basis that recognises income when earned and expenses when incurred.' },
      { term: '權責發生概念', termEn: 'Accrual concept', definition: '收入及費用應歸入其賺取或發生的會計期間。', definitionEn: 'Income and expenses should be recorded in the accounting period in which they are earned or incurred.' },
      { term: '應計費用', termEn: 'Accrued expenses', definition: '本期已發生但期末尚未支付的費用。', definitionEn: 'Expenses incurred in the current period but not yet paid at period-end.' },
      { term: '預付費用', termEn: 'Prepaid expenses', definition: '已支付但屬於未來會計期間的費用。', definitionEn: 'Expenses already paid that relate to future accounting periods.' },
      { term: '應收收入', termEn: 'Accrued revenues', definition: '本期已賺取但期末尚未收到的收入。', definitionEn: 'Income earned in the current period but not yet received at period-end.' },
      { term: '預收收入', termEn: 'Deferred revenues', definition: '已收到但屬於未來會計期間的收入。', definitionEn: 'Income received in advance that relates to future accounting periods.' },
      { term: '調整分錄', termEn: 'Adjusting entries', definition: '期末為使帳目反映正確期間而作出的分錄。', definitionEn: 'Period-end entries made to reflect the correct accounting period.' },
      { term: '轉回分錄', termEn: 'Reversing entries', definition: '下一期初把部分期末調整分錄反向記錄的分錄。', definitionEn: 'Entries made at the start of the next period to reverse certain period-end adjustments.' },
      { term: '流動資產', termEn: 'Current assets', definition: '預期在短期內變現、出售或使用的資產。', definitionEn: 'Assets expected to be realised, sold or used in the short term.' },
      { term: '流動負債', termEn: 'Current liabilities', definition: '預期在短期內清償的負債。', definitionEn: 'Liabilities expected to be settled in the short term.' },
    ],
    examTips: [
      { zh: '期末調整題先問「本期應確認多少？」再處理已收或已付現金。不要直接把現金收付當作收入或費用。', en: 'For period-end adjustments, first ask “how much belongs to this period?” before dealing with cash received or paid. Do not treat cash movements directly as income or expense.' },
      { zh: '應計通常形成負債或資產：應計費用是負債，應收收入是資產；預付費用是資產，預收收入是負債。', en: 'Accruals usually create liabilities or assets: accrued expenses are liabilities, accrued revenues are assets; prepaid expenses are assets, deferred revenues are liabilities.' },
      { zh: '若題目要求轉回分錄，分清它是在下一期初記錄，且方向與原調整分錄相反。', en: 'If reversing entries are required, remember they are recorded at the start of the next period and are opposite to the original adjusting entries.' },
    ],
    questions: [
      { question: '為何已付款不一定代表本期費用？', questionEn: 'Why does cash paid not necessarily mean current-period expense?', answer: '因為付款可能包括未來期間的服務或利益。根據應計制，只有屬於本期的部分才列作本期費用，其餘列為預付費用。', answerEn: 'Payment may relate to services or benefits for future periods. Under accrual accounting, only the current-period portion is expensed and the rest is recorded as prepaid expense.' },
      { question: '期末尚未支付的水電費應如何調整？', questionEn: 'How should unpaid utilities at period-end be adjusted?', answer: '借記水電費，貸記應計費用。這會增加本期費用及流動負債，並降低利潤。', answerEn: 'Debit utilities expense and credit accrued expenses. This increases current-period expense and current liabilities, reducing profit.' },
      { question: '預收租金為何是負債？', questionEn: 'Why is rent received in advance a liability?', answer: '因為企業已收現金但尚未提供相應期間的使用權或服務，未賺取部分須在未來履行。', answerEn: 'The business has received cash but has not yet provided the use or service for the related period, so the unearned part must be fulfilled in the future.' },
    ],
  },
  {
    id: 'bad-debts-and-allowance',
    number: 2,
    title: '壞帳與呆帳準備',
    titleEn: 'Bad Debts and Allowance for Doubtful Accounts',
    objective: {
      zh: '理解壞帳及呆帳準備的需要，記錄壞帳撇銷、呆帳準備調整和壞帳收回，並列示應收帳款的可變現淨值。',
      en: 'Understand the need for bad debt write-off and allowance for doubtful accounts, record bad debts, allowance adjustments and bad debts recovered, and present trade receivables at net realisable value.',
    },
    sections: [
      {
        title: '壞帳與信貸風險',
        titleEn: 'Bad Debts and Credit Risk',
        points: [
          { zh: '壞帳是確定無法收回的應收帳款，例如顧客破產或長期失聯。撇銷壞帳時，借記壞帳，貸記應收帳款。', en: 'Bad debts are trade receivables confirmed to be uncollectible, such as when a customer is bankrupt or untraceable. To write off a bad debt, debit bad debts and credit trade receivables.' },
          { zh: '壞帳撇銷會減少應收帳款和本期利潤。若之前已為該債務作出特定準備，題目可能要求先使用或調整相關準備。', en: 'Writing off bad debts reduces trade receivables and current-period profit. If a specific allowance has already been made, the question may require using or adjusting that allowance.' },
          { zh: '信貸銷售能增加銷售機會，但帶來不能收款風險。因此企業須定期檢討應收帳款質素。', en: 'Credit sales can increase sales opportunities but create collection risk. Businesses therefore need to review the quality of trade receivables regularly.' },
        ],
      },
      {
        title: '呆帳準備的目的',
        titleEn: 'Purpose of Allowance for Doubtful Accounts',
        points: [
          { zh: '呆帳準備是對可能無法收回的應收帳款作出的估計。它不直接沖銷個別顧客帳戶，而是以抵銷資產帳戶列示。', en: 'Allowance for doubtful accounts is an estimate of receivables that may not be collected. It does not directly write off individual customer accounts and is shown as a contra-asset account.' },
          { zh: '建立呆帳準備符合審慎概念，避免高估應收帳款；亦符合配比概念，把估計信貸損失與相關銷售期間配對。', en: 'Creating an allowance applies prudence by avoiding overstatement of receivables, and applies matching by matching estimated credit losses with the related sales period.' },
          { zh: '財務狀況表通常列示應收帳款減呆帳準備後的可變現淨值，即預期可收回金額。', en: 'The statement of financial position normally shows trade receivables less allowance for doubtful accounts as net realisable value, the expected recoverable amount.' },
        ],
      },
      {
        title: '特定準備、一般準備與帳齡分析',
        titleEn: 'Specific Allowance, General Allowance and Ageing Schedule',
        points: [
          { zh: '特定準備是針對某些已出現明顯收款風險的顧客作出的準備，例如已知顧客財務困難。', en: 'Specific allowance is made for particular customers with clear collection risk, such as known financial difficulty.' },
          { zh: '一般準備是按整體應收帳款的估計風險作出的準備，常以期末應收帳款扣除已撇銷壞帳及特定準備後的一定百分比計算。', en: 'General allowance is made for the estimated overall risk of receivables, often calculated as a percentage of closing receivables after bad debts written off and specific allowances.' },
          { zh: '帳齡分析把應收帳款按逾期時間分類。逾期越久，預期不能收回風險通常越高，準備百分比亦可能越高。', en: 'An ageing schedule classifies receivables by how long they have been outstanding. The longer overdue, the higher the expected default risk and allowance rate may be.' },
        ],
      },
      {
        title: '呆帳準備調整分錄',
        titleEn: 'Entries for Allowance Adjustments',
        points: [
          { zh: '若期末所需呆帳準備高於現有準備，需增加準備。分錄為借記呆帳準備調整或壞帳費用，貸記呆帳準備。', en: 'If required closing allowance is higher than the existing allowance, increase the allowance. Debit allowance adjustment or bad debt expense and credit allowance for doubtful accounts.' },
          { zh: '若期末所需呆帳準備低於現有準備，需減少準備。分錄為借記呆帳準備，貸記呆帳準備調整或壞帳費用。', en: 'If required closing allowance is lower than the existing allowance, reduce the allowance. Debit allowance for doubtful accounts and credit allowance adjustment or bad debt expense.' },
          { zh: '損益表只列示本期呆帳費用加上呆帳準備增加，或扣除呆帳準備減少；財務狀況表列示期末所需準備。', en: 'The income statement reports current bad debts plus any increase in allowance, or less any decrease in allowance; the statement of financial position shows the required closing allowance.' },
        ],
      },
      {
        title: '壞帳收回',
        titleEn: 'Bad Debts Recovered',
        points: [
          { zh: '壞帳收回是過往已撇銷的壞帳其後收到現金。它不應直接記入銷售，因為原銷售已在過往期間確認。', en: 'Bad debts recovered are cash receipts from debts previously written off. They should not be recorded as sales because the original sales were recognised in an earlier period.' },
          { zh: '常見處理是借記現金或銀行，貸記壞帳收回。壞帳收回列作本期收入或從壞帳費用中扣減，按題目格式處理。', en: 'A common treatment is to debit cash or bank and credit bad debts recovered. The recovery is reported as income or deducted from bad debt expense, depending on the required format.' },
          { zh: '若先恢復顧客帳戶，則先借記應收帳款、貸記壞帳收回，再收款時借記銀行、貸記應收帳款。', en: 'If the customer account is reinstated first, debit trade receivables and credit bad debts recovered, then debit bank and credit trade receivables when cash is received.' },
        ],
      },
    ],
    terms: [
      { term: '壞帳', termEn: 'Bad debts', definition: '已確定無法收回並須撇銷的應收帳款。', definitionEn: 'Trade receivables confirmed to be uncollectible and written off.' },
      { term: '呆帳準備', termEn: 'Allowance for doubtful accounts', definition: '對可能無法收回應收帳款作出的估計扣減。', definitionEn: 'An estimated deduction for receivables that may not be collected.' },
      { term: '審慎概念', termEn: 'Prudence concept', definition: '在不確定下避免高估資產和收入、低估負債和費用。', definitionEn: 'Avoiding overstatement of assets and income and understatement of liabilities and expenses under uncertainty.' },
      { term: '配比概念', termEn: 'Matching concept', definition: '把產生收入所需的相關費用配對至同一會計期間。', definitionEn: 'Matching costs incurred to generate revenue with the same accounting period.' },
      { term: '特定準備', termEn: 'Specific allowance', definition: '針對個別有收款風險顧客作出的呆帳準備。', definitionEn: 'Allowance made for specific customers with collection risk.' },
      { term: '一般準備', termEn: 'General allowance', definition: '按整體應收帳款風險估計的呆帳準備。', definitionEn: 'Allowance estimated for the overall risk of trade receivables.' },
      { term: '帳齡分析', termEn: 'Ageing schedule', definition: '按應收帳款逾期時間分類以評估收款風險的表。', definitionEn: 'A schedule classifying receivables by age to assess collection risk.' },
      { term: '抵銷資產帳戶', termEn: 'Contra-asset account', definition: '用來扣減相關資產帳面金額的帳戶。', definitionEn: 'An account used to reduce the carrying amount of a related asset.' },
      { term: '可變現淨值', termEn: 'Net realisable value', definition: '預期可從資產收回的淨額。', definitionEn: 'The net amount expected to be recovered from an asset.' },
      { term: '壞帳收回', termEn: 'Bad debts recovered', definition: '過往已撇銷壞帳其後收回的款項。', definitionEn: 'Cash recovered from debts previously written off.' },
      { term: '應收帳款', termEn: 'Trade receivables', definition: '顧客因賒銷而欠企業的款項。', definitionEn: 'Amounts owed by customers from credit sales.' },
    ],
    examTips: [
      { zh: '先撇銷明確壞帳，再按調整後應收帳款計算期末呆帳準備。次序錯誤會令準備金額出錯。', en: 'Write off specific bad debts first, then calculate closing allowance based on adjusted trade receivables. Wrong sequence gives a wrong allowance.' },
      { zh: '損益表看「本期變動」，財務狀況表看「期末餘額」。呆帳準備題常考這兩者的分別。', en: 'The income statement shows the current-period movement, while the statement of financial position shows the closing balance. This distinction is often tested.' },
      { zh: '壞帳收回不是銷售收入。它是過往撇銷後重新收回的款項，應作壞帳收回收入或壞帳費用扣減處理。', en: 'Bad debts recovered are not sales revenue. They are receipts from debts previously written off and should be treated as recovery income or a reduction of bad debt expense.' },
    ],
    questions: [
      { question: '為何需要呆帳準備？', questionEn: 'Why is an allowance for doubtful accounts needed?', answer: '因部分應收帳款可能無法收回。建立準備可避免高估資產，並把估計信貸損失與相關銷售期間配對。', answerEn: 'Some receivables may not be collected. The allowance avoids overstating assets and matches estimated credit losses with the related sales period.' },
      { question: '期末所需呆帳準備低於現有準備時，應如何處理？', questionEn: 'What should be done when required closing allowance is lower than the existing allowance?', answer: '應減少呆帳準備，借記呆帳準備，貸記呆帳準備調整或壞帳費用，令本期費用減少。', answerEn: 'Reduce the allowance by debiting allowance for doubtful accounts and crediting allowance adjustment or bad debt expense, reducing current-period expense.' },
      { question: '壞帳撇銷和呆帳準備有何不同？', questionEn: 'What is the difference between writing off bad debts and creating an allowance?', answer: '壞帳撇銷是確定不能收回而直接減少個別應收帳款；呆帳準備是對可能不能收回款項的估計，作為抵銷資產帳戶列示。', answerEn: 'Writing off bad debts removes specific receivables confirmed uncollectible; an allowance estimates possible uncollectible amounts and is shown as a contra-asset account.' },
    ],
  },
]
