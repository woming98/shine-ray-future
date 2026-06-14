import { C1DetailedChapter } from './c1Notes'

export const A2_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'books-of-original-entry-and-ledgers-i',
    number: 1,
    title: '原始分錄簿與分類帳（一）',
    titleEn: 'Books of Original Entry and Ledgers (I)',
    objective: {
      zh: '掌握主要原始分錄簿、原始憑證及分類帳的用途，並能記錄信用購貨、信用銷貨及退貨交易，再過帳至相關分類帳。',
      en: 'Master the purposes of major books of original entry, source documents and ledgers, and record credit purchases, credit sales and returns before posting them to ledger accounts.',
    },
    sections: [
      {
        title: '原始分錄簿與分類帳的角色',
        titleEn: 'Roles of Books of Original Entry and Ledgers',
        points: [
          { zh: '原始分錄簿用來把交易按性質作初步記錄，例如購貨日記簿、銷貨日記簿、購貨退回日記簿、銷貨退回日記簿、現金簿及普通日記簿。', en: 'Books of original entry record transactions first according to their nature, such as purchases journal, sales journal, returns outwards journal, returns inwards journal, cash book and general journal.' },
          { zh: '分類帳把同一帳戶的交易集中，方便計算每個帳戶的結餘。常見分類帳包括應收帳款分類帳、應付帳款分類帳及總分類帳。', en: 'Ledgers group transactions by account so that the balance of each account can be found. Common ledgers include the trade receivables ledger, trade payables ledger and general ledger.' },
          { zh: '過帳是把原始分錄簿的資料轉入相關分類帳帳戶的程序。原始分錄簿負責按日期記錄，分類帳負責按帳戶分類。', en: 'Posting is the process of transferring information from books of original entry to relevant ledger accounts. Books of original entry record by date; ledgers classify by account.' },
        ],
      },
      {
        title: '原始憑證與交易流程',
        titleEn: 'Source Documents and Transaction Flow',
        points: [
          { zh: '原始憑證是記帳的證據，例如購貨訂單、購貨發票、銷貨發票、借項通知單及貸項通知單。沒有可靠憑證，交易記錄便缺乏可核實基礎。', en: 'Source documents provide evidence for accounting entries, such as purchase orders, purchase invoices, sales invoices, debit notes and credit notes. Without reliable documents, records lack verifiable support.' },
          { zh: '購貨訂單顯示買方向供應商訂購的貨品；購貨發票由供應商發出，列明企業應付的貨款。', en: 'A purchase order shows goods ordered by a buyer from a supplier; a purchase invoice is issued by the supplier and states the amount payable by the business.' },
          { zh: '銷貨發票由企業向顧客發出，作為信用銷貨的記錄；退貨時則以借項通知單或貸項通知單通知對方調整帳項。', en: 'A sales invoice is issued by the business to a customer as a record of credit sales; for returns, a debit note or credit note notifies the other party of the account adjustment.' },
        ],
      },
      {
        title: '購貨日記簿與銷貨日記簿',
        titleEn: 'Purchases Journal and Sales Journal',
        points: [
          { zh: '購貨日記簿只記錄賒購貨品，不記錄現金購貨、購買非流動資產或其他支出。記錄金額一般為扣除商業折扣後的發票淨額。', en: 'The purchases journal records only credit purchases of goods. It does not record cash purchases, purchases of non-current assets or other expenses. Amounts are usually the invoice net amount after trade discount.' },
          { zh: '銷貨日記簿只記錄賒銷貨品，不記錄現金銷售或出售非流動資產。每筆賒銷會記入顧客帳戶，期末總額再過帳至銷售帳戶。', en: 'The sales journal records only credit sales of goods. It does not record cash sales or disposal of non-current assets. Each credit sale is posted to the customer account and the period total is posted to the sales account.' },
          { zh: '商業折扣通常不作獨立分錄，交易按折扣後金額入帳；現金折扣則在收付款時才記錄為折扣允許或折扣收入。', en: 'Trade discounts are normally not recorded separately; transactions are recorded at the amount after discount. Cash discounts are recorded only when payment is made or received as discounts allowed or discounts received.' },
        ],
      },
      {
        title: '退貨日記簿',
        titleEn: 'Returns Journals',
        points: [
          { zh: '購貨退回日記簿記錄企業退回給供應商的貨品，常以借項通知單作為記錄依據，因為企業會借記供應商帳戶以減少應付款。', en: 'The returns outwards journal records goods returned by the business to suppliers. It is often supported by a debit note because the supplier account is debited to reduce the amount payable.' },
          { zh: '銷貨退回日記簿記錄顧客退回給企業的貨品，企業通常發出貸項通知單，因為顧客帳戶會被貸記以減少應收款。', en: 'The returns inwards journal records goods returned by customers. The business usually issues a credit note because the customer account is credited to reduce the amount receivable.' },
          { zh: '退貨帳戶在報表中用來調整銷售或採購。銷貨退回扣減銷售；購貨退回扣減採購。', en: 'Returns accounts adjust sales or purchases in the financial statements. Returns inwards reduce sales; returns outwards reduce purchases.' },
        ],
      },
      {
        title: '過帳至分類帳',
        titleEn: 'Posting to Ledgers',
        points: [
          { zh: '購貨日記簿中的個別項目過帳至供應商帳戶貸方，總額過帳至購貨帳戶借方。這反映採購增加及應付款增加。', en: 'Individual entries in the purchases journal are posted to the credit side of supplier accounts, while the total is posted to the debit side of the purchases account. This reflects increased purchases and increased payables.' },
          { zh: '銷貨日記簿中的個別項目過帳至顧客帳戶借方，總額過帳至銷售帳戶貸方。這反映應收款增加及銷售增加。', en: 'Individual entries in the sales journal are posted to the debit side of customer accounts, while the total is posted to the credit side of the sales account. This reflects increased receivables and increased sales.' },
          { zh: '購貨退回會借記供應商帳戶並貸記購貨退回帳戶；銷貨退回會借記銷貨退回帳戶並貸記顧客帳戶。', en: 'Returns outwards debit supplier accounts and credit the returns outwards account; returns inwards debit the returns inwards account and credit customer accounts.' },
        ],
      },
      {
        title: '原始分錄簿與分類帳的功能',
        titleEn: 'Functions of Books of Original Entry and Ledgers',
        points: [
          { zh: '原始分錄簿可減少總分類帳的重複記錄，讓同類交易集中處理，並保留交易的時間次序。', en: 'Books of original entry reduce repeated entries in the general ledger, group similar transactions and preserve the chronological order of transactions.' },
          { zh: '分類帳顯示每個顧客、供應商及帳戶的結餘，有助追收應收款、安排付款及編製試算表。', en: 'Ledgers show balances of each customer, supplier and account, helping collection of receivables, payment planning and preparation of the trial balance.' },
          { zh: '把記錄工作分拆至不同簿冊亦有助分工、查核和追蹤錯誤，但仍需要定期核對原始憑證和分類帳結餘。', en: 'Separating records into different books supports division of work, checking and error tracing, but source documents and ledger balances still need regular verification.' },
        ],
      },
    ],
    terms: [
      { term: '原始分錄簿', termEn: 'Books of original entry', definition: '交易首次按性質記錄的帳簿。', definitionEn: 'Books in which transactions are first recorded according to their nature.' },
      { term: '原始憑證', termEn: 'Source documents', definition: '支持交易記錄的書面或電子證據。', definitionEn: 'Written or electronic evidence supporting accounting entries.' },
      { term: '分類帳', termEn: 'Ledger', definition: '把同一帳戶交易集中記錄並計算結餘的帳簿。', definitionEn: 'A book that groups transactions of the same account and calculates its balance.' },
      { term: '應收帳款分類帳', termEn: 'Trade receivables ledger', definition: '記錄各顧客賒帳往來的分類帳。', definitionEn: 'A ledger recording credit dealings with each customer.' },
      { term: '應付帳款分類帳', termEn: 'Trade payables ledger', definition: '記錄各供應商賒帳往來的分類帳。', definitionEn: 'A ledger recording credit dealings with each supplier.' },
      { term: '總分類帳', termEn: 'General ledger', definition: '記錄資產、負債、資本、收入及費用等主要帳戶的分類帳。', definitionEn: 'A ledger containing main accounts for assets, liabilities, capital, income and expenses.' },
      { term: '過帳', termEn: 'Posting', definition: '把原始分錄簿資料轉入分類帳帳戶。', definitionEn: 'Transferring information from books of original entry to ledger accounts.' },
      { term: '購貨日記簿', termEn: 'Purchases journal', definition: '記錄賒購貨品的原始分錄簿。', definitionEn: 'A book of original entry for credit purchases of goods.' },
      { term: '銷貨日記簿', termEn: 'Sales journal', definition: '記錄賒銷貨品的原始分錄簿。', definitionEn: 'A book of original entry for credit sales of goods.' },
      { term: '借項通知單', termEn: 'Debit note', definition: '通知對方其帳戶將被借記的文件，常見於購貨退回。', definitionEn: 'A document notifying the other party that its account will be debited, commonly used for returns outwards.' },
      { term: '貸項通知單', termEn: 'Credit note', definition: '通知對方其帳戶將被貸記的文件，常見於銷貨退回。', definitionEn: 'A document notifying the other party that its account will be credited, commonly used for returns inwards.' },
      { term: '商業折扣', termEn: 'Trade discount', definition: '按標價給予的扣減，通常不作獨立會計記錄。', definitionEn: 'A reduction from list price, normally not recorded separately in accounting records.' },
    ],
    examTips: [
      { zh: '判斷日記簿時先問兩點：是否涉及貨品？是否賒帳？現金交易入現金簿；非貨品交易通常不入購貨或銷貨日記簿。', en: 'When choosing a journal, ask two questions first: does it involve goods, and is it on credit? Cash transactions go to the cash book; non-goods transactions usually do not go to the purchases or sales journal.' },
      { zh: '過帳題要同時寫個別帳戶和總額帳戶。例如賒銷要借記顧客帳戶，並把銷貨日記簿總額貸記銷售帳戶。', en: 'For posting questions, show both individual accounts and the total account. For credit sales, debit customer accounts and credit the sales account with the sales journal total.' },
      { zh: '商業折扣與現金折扣要分清：商業折扣不入帳；現金折扣在實際付款或收款時入帳。', en: 'Distinguish trade discount from cash discount: trade discount is not recorded; cash discount is recorded when payment is made or received.' },
    ],
    questions: [
      { question: '為何購貨日記簿不記錄購買設備？', questionEn: 'Why is the purchase of equipment not recorded in the purchases journal?', answer: '購貨日記簿只記錄賒購貨品。設備屬非流動資產，應以普通日記簿或其他適當記錄處理。', answerEn: 'The purchases journal records only credit purchases of goods. Equipment is a non-current asset and should be recorded in the general journal or another appropriate record.' },
      { question: '企業向供應商退貨時，應如何過帳？', questionEn: 'How should goods returned to a supplier be posted?', answer: '借記供應商帳戶以減少應付款，並貸記購貨退回帳戶。', answerEn: 'Debit the supplier account to reduce payables and credit the returns outwards account.' },
      { question: '原始分錄簿和分類帳有何分別？', questionEn: 'What is the difference between books of original entry and ledgers?', answer: '原始分錄簿按交易性質和日期作首次記錄；分類帳按帳戶分類，顯示各帳戶結餘。', answerEn: 'Books of original entry first record transactions by nature and date; ledgers classify them by account and show account balances.' },
    ],
  },
  {
    id: 'books-of-original-entry-and-ledgers-ii',
    number: 2,
    title: '原始分錄簿與分類帳（二）',
    titleEn: 'Books of Original Entry and Ledgers (II)',
    objective: {
      zh: '理解現金簿及普通日記簿的功能，能記錄現金、銀行、折扣及特殊支票項目，並把分錄過帳至相關分類帳。',
      en: 'Understand the functions of the cash book and general journal, record cash, bank, discounts and special cheque items, and post entries to relevant ledger accounts.',
    },
    sections: [
      {
        title: '現金簿的功能',
        titleEn: 'Functions of the Cash Book',
        points: [
          { zh: '現金簿記錄所有現金及銀行收付款。它同時是原始分錄簿和分類帳，因為交易首次記錄於此，現金及銀行帳戶亦在此維持結餘。', en: 'The cash book records all cash and bank receipts and payments. It is both a book of original entry and a ledger because transactions are first recorded there and cash and bank balances are maintained there.' },
          { zh: '兩欄現金簿通常包括現金欄及銀行欄；三欄現金簿在此基礎上加入折扣欄，以記錄折扣允許及折扣收入。', en: 'A two-column cash book usually has cash and bank columns; a three-column cash book adds discount columns to record discounts allowed and discounts received.' },
          { zh: '支票存根和存款單是現金簿常用原始憑證。支票存根支持付款記錄；存款單支持存入銀行的記錄。', en: 'Cheque counterfoils and pay-in slips are common source documents for the cash book. Cheque counterfoils support payments; pay-in slips support bank deposits.' },
        ],
      },
      {
        title: '現金折扣',
        titleEn: 'Cash Discounts',
        points: [
          { zh: '折扣允許是企業給予顧客提早付款的折扣，記在現金簿借方的折扣欄，期末總額過帳至折扣允許帳戶借方。', en: 'Discounts allowed are discounts given to customers for prompt payment. They are recorded in the discount column on the debit side of the cash book, and the total is posted to the debit side of the discounts allowed account.' },
          { zh: '折扣收入是供應商給予企業提早付款的折扣，記在現金簿貸方的折扣欄，期末總額過帳至折扣收入帳戶貸方。', en: 'Discounts received are discounts given by suppliers for prompt payment. They are recorded in the discount column on the credit side of the cash book, and the total is posted to the credit side of the discounts received account.' },
          { zh: '折扣欄本身只是分析欄，不需要像現金欄或銀行欄一樣平帳；但折扣欄總額要過帳至相關名義帳戶。', en: 'Discount columns are analysis columns and are not balanced like cash or bank columns, but their totals must be posted to the relevant nominal accounts.' },
        ],
      },
      {
        title: '相對分錄與銀行透支',
        titleEn: 'Contra Items and Bank Overdraft',
        points: [
          { zh: '相對分錄是現金與銀行之間的轉移，例如把現金存入銀行或從銀行提取現金。分錄會同時出現在現金簿借方和貸方，通常以 C 標示。', en: 'Contra items are transfers between cash and bank, such as depositing cash into the bank or withdrawing cash from the bank. They appear on both debit and credit sides of the cash book and are usually marked C.' },
          { zh: '銀行透支表示企業從銀行帳戶支取超過存款，銀行欄出現貸方結餘。它在財務狀況表中通常列為流動負債。', en: 'A bank overdraft means the business has withdrawn more than the bank balance. The bank column has a credit balance and is usually shown as a current liability in the statement of financial position.' },
          { zh: '銀行欄借方結餘代表銀行存款；貸方結餘代表銀行透支。判斷時要看現金簿平帳後結餘所在的一方。', en: 'A debit balance in the bank column represents cash at bank; a credit balance represents bank overdraft. Judge it by the side on which the balance appears after balancing the cash book.' },
        ],
      },
      {
        title: '支票特殊項目',
        titleEn: 'Special Cheque Items',
        points: [
          { zh: '退票是已收到或已付出的支票被銀行拒絕兌現。若顧客支票退票，應恢復顧客欠款，通常借記顧客帳戶並貸記銀行。', en: 'A dishonoured cheque is a cheque refused by the bank. If a customer cheque is dishonoured, the customer debt is reinstated, usually by debiting the customer account and crediting bank.' },
          { zh: '過期支票是超過有效期仍未兌現的支票，通常不能再由銀行付款；遠期支票則是在未來日期才可兌現的支票。', en: 'A stale cheque is a cheque not presented within its validity period and normally cannot be paid by the bank; a post-dated cheque is payable only on a future date.' },
          { zh: '遠期支票一般不應在收到當日立即作銀行收款處理，應待支票日期到達並可存入銀行時才記錄。', en: 'A post-dated cheque should generally not be recorded as a bank receipt on the day it is received; it should be recorded when its date arrives and it can be deposited.' },
        ],
      },
      {
        title: '普通日記簿的用途',
        titleEn: 'Uses of the General Journal',
        points: [
          { zh: '普通日記簿記錄不能放入其他專門原始分錄簿的交易，例如開帳分錄、結帳分錄、更正分錄、非流動資產賒購及其他特殊調整。', en: 'The general journal records transactions that do not fit other special books of original entry, such as opening entries, closing entries, correction entries, credit purchases of non-current assets and other special adjustments.' },
          { zh: '普通日記簿分錄應列出借記帳戶、貸記帳戶、金額及敘述。敘述簡要說明交易原因，方便日後查核。', en: 'A general journal entry should show debit account, credit account, amount and narration. The narration briefly explains the reason for the transaction for later checking.' },
          { zh: '過帳普通日記簿時，要按分錄借貸方向分別記入相關分類帳，並在帳戶中注明日記簿頁碼或來源。', en: 'When posting the general journal, enter each amount in the relevant ledger account according to the debit or credit direction, and note the journal page or source in the account.' },
        ],
      },
      {
        title: '開帳分錄與結帳分錄',
        titleEn: 'Opening Entries and Closing Entries',
        points: [
          { zh: '開帳分錄用來把期初資產、負債及資本結餘帶入新會計期間。資產通常借記，負債及資本通常貸記。', en: 'Opening entries bring opening balances of assets, liabilities and capital into a new accounting period. Assets are usually debited, while liabilities and capital are usually credited.' },
          { zh: '結帳分錄把收入和費用等名義帳戶轉入損益帳戶，讓下一期收入及費用帳戶重新開始累積。', en: 'Closing entries transfer nominal accounts such as income and expenses to the profit and loss account, so income and expense accounts start afresh in the next period.' },
          { zh: '實帳戶如資產、負債及資本不會被結帳至損益帳戶，其結餘會結轉至下一期並列入財務狀況表。', en: 'Real accounts such as assets, liabilities and capital are not closed to the profit and loss account; their balances are carried forward and shown in the statement of financial position.' },
        ],
      },
    ],
    terms: [
      { term: '現金簿', termEn: 'Cash book', definition: '記錄現金及銀行收付款的帳簿，同時兼具原始分錄簿和分類帳功能。', definitionEn: 'A book recording cash and bank receipts and payments, functioning as both a book of original entry and a ledger.' },
      { term: '兩欄現金簿', termEn: 'Two-column cash book', definition: '包含現金欄及銀行欄的現金簿。', definitionEn: 'A cash book with cash and bank columns.' },
      { term: '三欄現金簿', termEn: 'Three-column cash book', definition: '包含折扣、現金及銀行欄的現金簿。', definitionEn: 'A cash book with discount, cash and bank columns.' },
      { term: '支票存根', termEn: 'Cheque counterfoil', definition: '支票簿中保留的付款記錄部分。', definitionEn: 'The retained part of a cheque book showing payment details.' },
      { term: '存款單', termEn: 'Pay-in slip', definition: '把現金或支票存入銀行時使用的憑證。', definitionEn: 'A document used when depositing cash or cheques into a bank.' },
      { term: '折扣允許', termEn: 'Discounts allowed', definition: '給予顧客提早付款的折扣，屬費用。', definitionEn: 'Discounts given to customers for prompt payment, treated as an expense.' },
      { term: '折扣收入', termEn: 'Discounts received', definition: '供應商給予企業提早付款的折扣，屬收入。', definitionEn: 'Discounts given by suppliers for prompt payment, treated as income.' },
      { term: '相對分錄', termEn: 'Contra item', definition: '現金與銀行之間的內部轉移。', definitionEn: 'An internal transfer between cash and bank.' },
      { term: '銀行透支', termEn: 'Bank overdraft', definition: '銀行帳戶支出超過存款而形成的貸方結餘。', definitionEn: 'A credit balance in the bank account caused by withdrawals exceeding deposits.' },
      { term: '退票', termEn: 'Dishonoured cheque', definition: '銀行拒絕兌現的支票。', definitionEn: 'A cheque refused by the bank.' },
      { term: '過期支票', termEn: 'Stale cheque', definition: '超過有效期而通常不能兌現的支票。', definitionEn: 'A cheque that has passed its validity period and is normally not payable.' },
      { term: '遠期支票', termEn: 'Post-dated cheque', definition: '日期為未來日子的支票，未到日期前不可兌現。', definitionEn: 'A cheque dated in the future and not payable before that date.' },
      { term: '普通日記簿', termEn: 'General journal', definition: '記錄不能放入其他專門原始分錄簿交易的日記簿。', definitionEn: 'A journal for transactions that do not fit other special books of original entry.' },
      { term: '敘述', termEn: 'Narration', definition: '日記分錄後簡要說明交易原因的文字。', definitionEn: 'A brief explanation after a journal entry stating the reason for the transaction.' },
    ],
    examTips: [
      { zh: '現金簿題要先分辨收款和付款，再分辨現金欄、銀行欄或折扣欄。折扣允許在收款一方，折扣收入在付款一方。', en: 'For cash book questions, distinguish receipts from payments first, then choose cash, bank or discount columns. Discounts allowed are on the receipt side; discounts received are on the payment side.' },
      { zh: '相對分錄不涉及外部人士帳戶，只是在現金和銀行之間轉移，通常兩邊都標 C。', en: 'A contra item does not involve an external personal account; it is a transfer between cash and bank and is usually marked C on both sides.' },
      { zh: '普通日記簿題要寫完整借貸帳戶、金額及敘述。只寫帳戶名稱而沒有敘述，常會失去格式分。', en: 'For general journal questions, write complete debit and credit accounts, amounts and narration. Account names without narration may lose presentation marks.' },
    ],
    questions: [
      { question: '為何現金簿同時是原始分錄簿和分類帳？', questionEn: 'Why is the cash book both a book of original entry and a ledger?', answer: '因為現金及銀行交易首次記錄於現金簿，而現金及銀行帳戶的結餘亦直接在現金簿內計算。', answerEn: 'Because cash and bank transactions are first recorded in the cash book, and the cash and bank account balances are calculated directly in it.' },
      { question: '顧客支票退票時，應如何處理？', questionEn: 'How should a dishonoured customer cheque be treated?', answer: '應恢復顧客欠款，通常借記顧客帳戶並貸記銀行，表示銀行收款被取消。', answerEn: 'The customer debt should be reinstated, usually by debiting the customer account and crediting bank to cancel the bank receipt.' },
      { question: '普通日記簿通常記錄哪些交易？', questionEn: 'What transactions are usually recorded in the general journal?', answer: '包括開帳分錄、結帳分錄、更正分錄、非流動資產賒購及不能放入其他專門日記簿的特殊交易。', answerEn: 'It records opening entries, closing entries, correction entries, credit purchases of non-current assets and special transactions that cannot be recorded in other special journals.' },
    ],
  },
]
