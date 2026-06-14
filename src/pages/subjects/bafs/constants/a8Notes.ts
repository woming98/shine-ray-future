import { C1DetailedChapter } from './c1Notes'

export const A8_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'bank-reconciliation',
    number: 1,
    title: '銀行往來調節表',
    titleEn: 'Bank Reconciliation Statement',
    objective: {
      zh: '理解現金簿與銀行結單出現差異的原因，更新現金簿並編製銀行往來調節表。',
      en: 'Understand why cash-book and bank-statement balances differ, update the cash book and prepare a bank reconciliation statement.',
    },
    sections: [
      {
        title: '現金簿與銀行結單',
        titleEn: 'Cash Book and Bank Statement',
        points: [
          { zh: '現金簿由企業編製，銀行欄記錄企業所知的存款及付款；銀行結單由銀行編製，從銀行角度記錄客戶帳戶變動。', en: 'The cash book is prepared by the business and records known deposits and payments; the bank statement is prepared by the bank and records changes from the bank’s perspective.' },
          { zh: '企業現金簿的借方銀行結餘通常代表銀行存款；貸方結餘代表銀行透支。銀行結單的借貸方向可能與企業帳簿相反。', en: 'A debit bank balance in the business cash book normally represents money at bank; a credit balance represents a bank overdraft. Debit and credit directions on the bank statement may be opposite.' },
          { zh: '銀行調節不是把兩個結餘強行改成相同，而是識別時間差、未入帳項目及錯誤，證明兩者可以互相調節。', en: 'Bank reconciliation does not force two balances to match; it identifies timing differences, unrecorded items and errors to explain how the balances reconcile.' },
        ],
      },
      {
        title: '先更新現金簿',
        titleEn: 'Updating the Cash Book First',
        points: [
          { zh: '銀行結單已列示但現金簿尚未記錄的項目須先更新現金簿，包括常行指示、直接付款、直接存款、銀行費用、銀行利息及退票。', en: 'Items shown on the bank statement but not yet in the cash book must first update the cash book, including standing orders, direct debits, direct credits, bank charges, bank interest and dishonoured cheques.' },
          { zh: '增加銀行存款的項目記入現金簿銀行欄借方；減少銀行存款或增加透支的項目記入貸方。現金簿錯誤亦須在此階段更正。', en: 'Items increasing bank funds are entered on the debit side of the cash-book bank column; items reducing funds or increasing overdraft are entered on the credit side. Cash-book errors are also corrected at this stage.' },
          { zh: '更新後現金簿結餘才是銀行往來調節表的可靠起點；已更新的項目不應再次列入調節表。', en: 'The updated cash-book balance is the reliable starting point for the bank reconciliation statement; updated items must not be included again in the reconciliation.' },
        ],
      },
      {
        title: '時間差項目',
        titleEn: 'Timing Differences',
        points: [
          { zh: '未兌現支票是企業已在現金簿記錄付款，但收款人尚未向銀行兌現的支票，因此銀行結單尚未扣款。', en: 'An unpresented cheque is a payment already recorded in the cash book but not yet presented to the bank, so the bank statement has not deducted it.' },
          { zh: '未入帳存款是企業已在現金簿記錄收款並存入銀行，但銀行尚未在結單入帳，因此銀行結單尚未增加。', en: 'An uncredited deposit is a receipt recorded and deposited by the business but not yet credited by the bank, so the bank statement has not increased.' },
          { zh: '時間差項目不需更改更新後現金簿，只列入銀行往來調節表。過期支票若不再有效，則須在現金簿作相反分錄取消付款。', en: 'Timing differences do not change the updated cash book and appear only in the bank reconciliation statement. A stale cheque that is no longer valid must instead be reversed in the cash book.' },
        ],
      },
      {
        title: '銀行往來調節表的編製與用途',
        titleEn: 'Preparation and Functions of Bank Reconciliation',
        points: [
          { zh: '銀行往來調節表可從更新後現金簿或銀行結單結餘開始，加入及扣除時間差和銀行錯誤，最後調節至另一結餘。', en: 'A bank reconciliation statement may start from the updated cash-book balance or bank-statement balance, add and deduct timing differences and bank errors, and reconcile to the other balance.' },
          { zh: '加減方向應按項目對起點結餘的實際影響判斷，而不是只背公式。可先問：該項目令銀行結單相對現金簿較高還是較低？', en: 'Addition and subtraction should follow the actual effect on the starting balance rather than a memorised formula. Ask whether the item makes the bank-statement balance higher or lower than the cash-book balance.' },
          { zh: '定期調節有助發現遺漏、錯誤、異常交易及潛在舞弊，並提高銀行結餘及現金記錄的可靠性。', en: 'Regular reconciliation helps detect omissions, errors, unusual transactions and possible fraud, improving the reliability of bank balances and cash records.' },
        ],
      },
    ],
    terms: [
      { term: '銀行結單', termEn: 'Bank statement', definition: '由銀行提供並列示客戶帳戶交易及結餘的記錄。', definitionEn: 'A record provided by a bank showing transactions and the balance of a customer account.' },
      { term: '銀行往來調節表', termEn: 'Bank reconciliation statement', definition: '解釋更新後現金簿與銀行結單結餘差異的報表。', definitionEn: 'A statement explaining differences between the updated cash-book and bank-statement balances.' },
      { term: '銀行透支', termEn: 'Bank overdraft', definition: '銀行帳戶提款超過存款而形成的負結餘。', definitionEn: 'A negative bank balance arising when withdrawals exceed funds deposited.' },
      { term: '常行指示', termEn: 'Standing order', definition: '銀行按客戶預先指示定期支付固定款項的安排。', definitionEn: 'An arrangement for a bank to make regular fixed payments under prior instructions.' },
      { term: '直接付款', termEn: 'Direct debit', definition: '獲授權收款人直接從企業銀行帳戶收取款項。', definitionEn: 'An authorised payee collecting money directly from the business bank account.' },
      { term: '直接存款', termEn: 'Direct credit', definition: '第三方直接把款項存入企業銀行帳戶。', definitionEn: 'Money deposited directly into the business bank account by a third party.' },
      { term: '銀行費用', termEn: 'Bank charges', definition: '銀行就服務向企業收取的費用。', definitionEn: 'Fees charged by a bank to a business for banking services.' },
      { term: '退票', termEn: 'Dishonoured cheque', definition: '銀行拒絕兌付、須取消原有收款記錄的支票。', definitionEn: 'A cheque refused by the bank whose original receipt entry must be reversed.' },
      { term: '未兌現支票', termEn: 'Unpresented cheque', definition: '已記入現金簿但尚未由銀行扣款的付款支票。', definitionEn: 'A payment cheque recorded in the cash book but not yet deducted by the bank.' },
      { term: '未入帳存款', termEn: 'Uncredited deposit', definition: '已記入現金簿但尚未由銀行增加的存款。', definitionEn: 'A deposit recorded in the cash book but not yet credited by the bank.' },
      { term: '過期支票', termEn: 'Stale cheque', definition: '因超過有效期而不再可兌現的支票。', definitionEn: 'A cheque no longer valid for presentation because its validity period has expired.' },
    ],
    examTips: [
      { zh: '先更新現金簿，再編製調節表；銀行費用、直接付款及退票等已更新項目不可重複列入調節表。', en: 'Update the cash book before preparing the reconciliation; items such as bank charges, direct debits and dishonoured cheques must not appear again in the reconciliation.' },
      { zh: '遇到銀行透支或不同起點時，不要死背加減方向；以項目令起點結餘變高或變低作判斷。', en: 'With overdrafts or different starting balances, do not memorise signs blindly; decide whether each item makes the starting balance higher or lower.' },
    ],
    questions: [
      { question: '為何未兌現支票不應用來更新現金簿？', questionEn: 'Why should an unpresented cheque not update the cash book?', answer: '企業已在簽發支票時記錄付款，差異只因銀行尚未扣款，因此只屬時間差。', answerEn: 'The business recorded the payment when issuing the cheque; the difference exists only because the bank has not deducted it, so it is a timing difference.' },
      { question: '銀行結單上的退票應如何更新現金簿？', questionEn: 'How should a dishonoured cheque on the bank statement update the cash book?', answer: '取消原有收款，貸記現金簿銀行欄，並恢復顧客應收帳款或相關帳戶。', answerEn: 'Reverse the original receipt by crediting the cash-book bank column and reinstating the customer receivable or related account.' },
      { question: '銀行往來調節表如何協助內部控制？', questionEn: 'How does bank reconciliation support internal control?', answer: '它把兩套獨立記錄比較，可及時發現遺漏、錯誤、異常交易或潛在舞弊。', answerEn: 'It compares two independent records and can promptly detect omissions, errors, unusual transactions or possible fraud.' },
    ],
  },
  {
    id: 'correction-errors-not-affecting-trial-balance',
    number: 2,
    title: '錯誤更正（一）：不影響試算表平衡',
    titleEn: 'Correction of Errors (I): Errors Not Affecting Trial Balance Agreement',
    objective: {
      zh: '辨認不影響試算表平衡的會計錯誤，編製更正分錄，並分析期末調整錯誤對利潤和報表的影響。',
      en: 'Identify accounting errors that do not affect trial-balance agreement, prepare correcting entries and analyse the effects of adjustment errors on profit and financial statements.',
    },
    sections: [
      {
        title: '試算表的功能與限制',
        titleEn: 'Functions and Limitations of a Trial Balance',
        points: [
          { zh: '試算表列出分類帳借方及貸方結餘，用以檢查複式記帳的算術平衡，並協助編製財務報表。', en: 'A trial balance lists debit and credit ledger balances to check the arithmetic agreement of double entry and assist in preparing financial statements.' },
          { zh: '試算表平衡只表示總借方等於總貸方，不證明所有交易均正確、完整或使用正確帳戶。', en: 'Trial-balance agreement only shows that total debits equal total credits; it does not prove all transactions are correct, complete or posted to the right accounts.' },
          { zh: '若錯誤的借方及貸方金額相同，試算表仍會平衡，因此須透過文件檢查、帳戶分析及調節發現。', en: 'If an error contains equal debit and credit amounts, the trial balance still agrees, so documentary checks, account analysis and reconciliations are needed.' },
        ],
      },
      {
        title: '六類不影響平衡的錯誤',
        titleEn: 'Six Errors Not Affecting Agreement',
        points: [
          { zh: '誤記帳戶是把正確金額記入同類但錯誤的個人帳戶；原則錯誤是把交易記入錯誤類別，例如把資本性支出列作費用。', en: 'An error of commission posts the correct amount to the wrong personal account of the same class; an error of principle posts a transaction to the wrong account class, such as treating capital expenditure as an expense.' },
          { zh: '完全遺漏是整項交易的借貸兩面均未記錄；原始分錄錯誤是借貸兩面均以相同錯誤金額記錄。', en: 'An error of omission leaves both sides of a transaction unrecorded; an error of original entry records both sides using the same incorrect amount.' },
          { zh: '完全倒置是正確借貸方向全部相反；抵銷錯誤是兩個或以上獨立錯誤的金額互相抵銷，使試算表仍然平衡。', en: 'A complete reversal records both sides in the opposite directions; compensating errors are independent errors whose amounts offset, leaving the trial balance in agreement.' },
        ],
      },
      {
        title: '更正分錄方法',
        titleEn: 'Method for Correcting Entries',
        points: [
          { zh: '更正前先寫出「應有分錄」及「實際錯誤分錄」，比較兩者後只記錄所需差額，避免重複記帳。', en: 'Before correcting an error, write the correct entry and the actual incorrect entry, compare them and record only the required difference to avoid duplication.' },
          { zh: '若錯誤帳戶已有錯誤借記，須貸記該帳戶取消；若正確帳戶尚未記錄，須按正確方向補記。完全倒置通常需以原金額兩倍更正每個帳戶。', en: 'If a wrong account has been debited, credit it to cancel the error; if the correct account is missing, post it in the correct direction. A complete reversal normally requires twice the original amount in each correcting entry.' },
          { zh: '不影響試算表平衡的錯誤不使用暫記帳；更正分錄的總借方及總貸方仍須相等。', en: 'Errors not affecting trial-balance agreement do not use a suspense account; total debits and credits in the correcting entry must still agree.' },
        ],
      },
      {
        title: '期末調整錯誤',
        titleEn: 'Errors in Period-end Adjustments',
        points: [
          { zh: '應計費用不足或期末存貨高估會令利潤高估；預付費用不足、折舊過多或呆帳準備過多則可能令利潤低估。', en: 'Understated accrued expenses or overstated closing inventory overstate profit; understated prepayments, excessive depreciation or excessive allowance for doubtful accounts may understate profit.' },
          { zh: '分析錯誤時應分別判斷收入、費用、資產及負債的正確金額，再確定利潤和財務狀況表的影響。', en: 'When analysing errors, determine the correct amounts of income, expenses, assets and liabilities separately, then identify the effects on profit and the statement of financial position.' },
          { zh: '寄銷或試銷交易只有在顧客接受貨品後才確認銷售；未獲接受的貨品仍屬企業存貨，錯誤確認會同時影響銷售、存貨及利潤。', en: 'For sale-or-return transactions, a sale is recognised only when the customer accepts the goods; unaccepted goods remain inventory, so incorrect recognition affects sales, inventory and profit.' },
        ],
      },
    ],
    terms: [
      { term: '試算表', termEn: 'Trial balance', definition: '列出分類帳借貸結餘並檢查算術平衡的報表。', definitionEn: 'A statement listing debit and credit ledger balances to check arithmetic agreement.' },
      { term: '誤記帳戶', termEn: 'Error of commission', definition: '把正確金額記入同類但錯誤的個人帳戶。', definitionEn: 'Posting the correct amount to the wrong personal account of the same class.' },
      { term: '原則錯誤', termEn: 'Error of principle', definition: '把交易記入錯誤會計類別的錯誤。', definitionEn: 'An error that records a transaction in the wrong accounting class.' },
      { term: '完全遺漏', termEn: 'Error of omission', definition: '整項交易的借方及貸方均未記錄。', definitionEn: 'An error in which both debit and credit sides of a transaction are omitted.' },
      { term: '原始分錄錯誤', termEn: 'Error of original entry', definition: '借貸兩面均以相同錯誤金額記錄。', definitionEn: 'An error where both debit and credit sides use the same incorrect amount.' },
      { term: '完全倒置', termEn: 'Complete reversal of entries', definition: '交易借方及貸方均以相反方向記錄。', definitionEn: 'An error where both debit and credit sides are recorded in reverse.' },
      { term: '抵銷錯誤', termEn: 'Compensating errors', definition: '兩個或以上錯誤的差額互相抵銷。', definitionEn: 'Two or more errors whose differences offset each other.' },
      { term: '更正分錄', termEn: 'Correcting entry', definition: '為消除錯誤並使帳戶回復正確而記錄的分錄。', definitionEn: 'An entry recorded to remove an error and restore correct account balances.' },
      { term: '應計項目', termEn: 'Accruals', definition: '已發生但尚未支付或收取的費用或收入。', definitionEn: 'Expenses or income incurred or earned but not yet paid or received.' },
      { term: '預付項目', termEn: 'Prepayments', definition: '已支付但屬於未來會計期間的費用。', definitionEn: 'Expenses already paid that relate to a future accounting period.' },
      { term: '呆帳準備', termEn: 'Allowance for doubtful accounts', definition: '對可能無法收回應收帳款作出的估計扣減。', definitionEn: 'An estimated reduction for receivables that may not be collected.' },
      { term: '寄銷或試銷', termEn: 'Sale or return', definition: '顧客可在接受貨品或退回貨品之間選擇的交易安排。', definitionEn: 'An arrangement allowing a customer to accept or return goods.' },
    ],
    examTips: [
      { zh: '更正分錄題先列「正確做法」與「已做做法」，再記差額；完全倒置通常要用原金額兩倍更正。', en: 'For correcting entries, compare the correct treatment with what was recorded and post the difference; complete reversal normally requires twice the original amount.' },
      { zh: '試算表平衡不代表沒有錯誤。回答時應指出借貸兩面可同時錯誤但金額仍相等。', en: 'Trial-balance agreement does not prove the absence of errors. Explain that both sides may be wrong while equal amounts are still recorded.' },
    ],
    questions: [
      { question: '把機器購買錯記為維修費用屬哪類錯誤？', questionEn: 'What type of error occurs when machinery purchased is recorded as repairs expense?', answer: '屬原則錯誤，因為資本性支出錯誤列作收益性費用，但借貸金額仍相等。', answerEn: 'It is an error of principle because capital expenditure is wrongly treated as revenue expenditure while debit and credit amounts remain equal.' },
      { question: '為何完全倒置通常需要原金額兩倍的更正？', questionEn: 'Why does a complete reversal normally require correction at twice the original amount?', answer: '先要取消錯誤方向的一倍金額，再按正確方向記錄一倍金額，合共相差兩倍。', answerEn: 'One amount is needed to cancel the wrong direction and another to record the correct direction, producing a total difference of twice the amount.' },
      { question: '期末存貨高估如何影響當期利潤？', questionEn: 'How does overstated closing inventory affect current profit?', answer: '銷貨成本被低估，因此毛利及淨利潤被高估；期末存貨資產亦被高估。', answerEn: 'Cost of goods sold is understated, so gross profit and net profit are overstated, and closing inventory is also overstated.' },
    ],
  },
  {
    id: 'correction-errors-affecting-trial-balance',
    number: 3,
    title: '錯誤更正（二）：影響試算表平衡',
    titleEn: 'Correction of Errors (II): Errors Affecting Trial Balance Agreement',
    objective: {
      zh: '運用暫記帳處理影響試算表平衡的錯誤，並調整錯誤對利潤及營運資金的影響。',
      en: 'Use a suspense account to correct errors affecting trial-balance agreement and adjust the effects of errors on profit and working capital.',
    },
    sections: [
      {
        title: '暫記帳的功能',
        titleEn: 'Function of a Suspense Account',
        points: [
          { zh: '當試算表借貸總額不同而原因尚未查明，可把差額記入暫記帳，令試算表暫時平衡並繼續編製帳目。', en: 'When trial-balance totals differ and the cause is not yet known, the difference may be placed in a suspense account so the trial balance temporarily agrees and accounting work can continue.' },
          { zh: '暫記帳只是臨時帳戶，不代表真實資產、負債、收入或費用。找出所有錯誤並更正後，暫記帳應結清。', en: 'A suspense account is temporary and does not represent a genuine asset, liability, income or expense. It should close after all errors are found and corrected.' },
          { zh: '只有錯誤造成單邊或不相等借貸差額時才使用暫記帳；若錯誤借貸兩面相等，則不應使用。', en: 'A suspense account is used only when an error creates a one-sided or unequal debit-credit difference; it is not used where both sides remain equal.' },
        ],
      },
      {
        title: '影響試算表平衡的錯誤',
        titleEn: 'Errors Affecting Trial-balance Agreement',
        points: [
          { zh: '原始分錄簿加總錯誤會令過帳總額錯誤；單邊分錄只記錄借方或貸方；借貸兩面金額不等亦會造成差額。', en: 'A casting error in a book of original entry causes an incorrect total to be posted; a single entry records only one side; unequal double entries create a debit-credit difference.' },
          { zh: '分類帳帳戶加總錯誤會令帳戶結餘不正確；把正確結餘以錯誤金額或錯誤方向列入試算表亦會令試算表不平衡。', en: 'Incorrect casting of a ledger account gives a wrong balance; listing the correct balance at the wrong amount or on the wrong side of the trial balance also causes disagreement.' },
          { zh: '更正時先計算實際差額及所需帳戶方向，再以暫記帳作另一面。若把結餘列在試算表錯誤一方，差額通常是該結餘的兩倍。', en: 'For correction, first calculate the actual difference and required account direction, then use suspense as the other side. If a balance is listed on the wrong side of the trial balance, the difference is normally twice that balance.' },
        ],
      },
      {
        title: '調整利潤',
        titleEn: 'Adjusting Profit for Errors',
        points: [
          { zh: '錯誤更正會否影響利潤，取決於收入及費用是否錯誤。資產、負債或權益帳戶之間的錯誤未必影響利潤。', en: 'Whether correcting an error affects profit depends on whether income or expenses are wrong. Errors solely between asset, liability or equity accounts may not affect profit.' },
          { zh: '收入漏記或費用多記會令原報利潤低估，更正時加回；收入多記或費用漏記會令原報利潤高估，更正時扣除。', en: 'Omitted income or overstated expenses understate reported profit and are added back; overstated income or omitted expenses overstate reported profit and are deducted.' },
          { zh: '調整利潤表應從原報利潤開始，逐項列示增加或減少，避免只寫更正分錄而未指出對利潤的淨影響。', en: 'A profit-adjustment statement should start from reported profit and show each increase or decrease, rather than only giving correcting entries without the net profit effect.' },
        ],
      },
      {
        title: '調整營運資金',
        titleEn: 'Adjusting Working Capital',
        points: [
          { zh: '營運資金等於流動資產減流動負債。錯誤只在改變流動資產或流動負債時才影響營運資金。', en: 'Working capital equals current assets less current liabilities. An error affects working capital only when it changes current assets or current liabilities.' },
          { zh: '流動資產增加或流動負債減少會增加營運資金；流動資產減少或流動負債增加會減少營運資金。', en: 'An increase in current assets or decrease in current liabilities increases working capital; a decrease in current assets or increase in current liabilities reduces it.' },
          { zh: '同一錯誤可同時影響利潤及營運資金，但金額或方向未必相同；應分別分析涉及的報表項目。', en: 'The same error may affect both profit and working capital, but amounts or directions may differ; analyse the relevant statement items separately.' },
        ],
      },
    ],
    terms: [
      { term: '暫記帳', termEn: 'Suspense account', definition: '試算表不平衡時暫時記錄差額的帳戶。', definitionEn: 'A temporary account holding the difference when a trial balance does not agree.' },
      { term: '原始分錄簿加總錯誤', termEn: 'Casting error in a book of original entry', definition: '原始分錄簿總額計算錯誤並導致錯誤過帳。', definitionEn: 'An incorrect total in a book of original entry leading to a wrong posting.' },
      { term: '單邊分錄', termEn: 'Single entry', definition: '交易只記錄借方或貸方其中一面。', definitionEn: 'An error where only the debit or credit side of a transaction is recorded.' },
      { term: '不等額複式分錄', termEn: 'Double entry of unequal amounts', definition: '交易借方及貸方以不同金額記錄。', definitionEn: 'An error where debit and credit sides are recorded at different amounts.' },
      { term: '帳戶加總錯誤', termEn: 'Incorrect casting of an account', definition: '分類帳帳戶的借方或貸方總額計算錯誤。', definitionEn: 'An incorrect total on the debit or credit side of a ledger account.' },
      { term: '試算表列示錯誤', termEn: 'Incorrect listing in a trial balance', definition: '把帳戶結餘以錯誤金額或錯誤方向列入試算表。', definitionEn: 'Listing an account balance at the wrong amount or on the wrong side of a trial balance.' },
      { term: '原報利潤', termEn: 'Reported profit', definition: '在發現及更正錯誤前已計算的利潤。', definitionEn: 'Profit calculated before errors are identified and corrected.' },
      { term: '經調整利潤', termEn: 'Adjusted profit', definition: '把所有影響利潤的錯誤更正後所得的正確利潤。', definitionEn: 'Correct profit after all profit-affecting errors have been adjusted.' },
      { term: '營運資金', termEn: 'Working capital', definition: '流動資產減流動負債所得的短期流動性指標。', definitionEn: 'A short-term liquidity measure calculated as current assets less current liabilities.' },
      { term: '流動資產', termEn: 'Current assets', definition: '預期在正常營運周期或短期內變現、出售或使用的資產。', definitionEn: 'Assets expected to be realised, sold or used within the normal operating cycle or short term.' },
      { term: '流動負債', termEn: 'Current liabilities', definition: '預期在正常營運周期或短期內清償的負債。', definitionEn: 'Liabilities expected to be settled within the normal operating cycle or short term.' },
    ],
    examTips: [
      { zh: '只有造成試算表差額的更正才使用暫記帳；完成所有更正後，暫記帳必須結清。', en: 'Use suspense only for corrections causing trial-balance disagreement; after all corrections, the suspense account must close.' },
      { zh: '調整利潤與營運資金要分開判斷：先看收入費用，再看流動資產和流動負債，不能假設兩者影響相同。', en: 'Assess profit and working capital separately: first consider income and expenses, then current assets and current liabilities; do not assume identical effects.' },
    ],
    questions: [
      { question: '把貸方結餘錯列在試算表借方，為何差額是結餘的兩倍？', questionEn: 'Why is the trial-balance difference twice the balance when a credit balance is listed on the debit side?', answer: '正確貸方少了一倍，同時錯誤借方多了一倍，因此借貸總額差距合共兩倍。', answerEn: 'The credit side is understated by one amount while the debit side is overstated by one amount, creating a total difference of twice the balance.' },
      { question: '遺漏記錄應計費用如何影響利潤及營運資金？', questionEn: 'How does omitting an accrued expense affect profit and working capital?', answer: '費用及流動負債均低估，所以利潤及營運資金均高估。', answerEn: 'Both expense and current liability are understated, so profit and working capital are overstated.' },
      { question: '所有影響試算表平衡的錯誤都會影響利潤嗎？', questionEn: 'Do all errors affecting trial-balance agreement affect profit?', answer: '不會。例如只漏記一項資產帳的分錄會令試算表不平衡，但若不涉及收入或費用，利潤未必受影響。', answerEn: 'No. For example, a missing entry in an asset account causes disagreement, but profit may be unaffected if no income or expense is involved.' },
    ],
  },
]
