import { C1DetailedChapter } from './c1Notes'

export const A1_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'purposes-and-role-of-accounting',
    number: 1,
    title: '會計的目的與角色',
    titleEn: 'Purposes and Role of Accounting',
    objective: {
      zh: '理解會計的功能、會計資料對決策的重要性，以及完整會計循環由原始憑證到財務報表的流程。',
      en: 'Understand the functions of accounting, the importance of accounting information for decision-making, and the complete accounting cycle from source documents to financial statements.',
    },
    sections: [
      {
        title: '會計的定義與功能',
        titleEn: 'Definition and Functions of Accounting',
        points: [
          { zh: '會計是記錄、分類、總結及傳達財務資料的過程，目的是協助使用者了解企業表現及作出決策。', en: 'Accounting is the process of recording, classifying, summarising and communicating financial information to help users understand business performance and make decisions.' },
          { zh: '記錄是把交易按日期和金額寫入帳簿；分類是把相同性質的項目歸入相關帳戶；總結是把大量資料整理成報表；傳達是把結果提供給使用者。', en: 'Recording enters transactions by date and amount; classifying groups similar items into accounts; summarising organises data into statements; communicating provides results to users.' },
          { zh: '簿記偏重日常交易的記錄；會計範圍較闊，還包括資料分析、報告、解釋及支援決策。', en: 'Bookkeeping focuses on daily transaction recording; accounting is broader and includes analysis, reporting, interpretation and decision support.' },
        ],
      },
      {
        title: '會計資料與決策',
        titleEn: 'Accounting Information and Decision-Making',
        points: [
          { zh: '東主和管理層利用會計資料評估盈利能力、成本控制、現金流及企業是否需要擴張或調整營運。', en: 'Owners and managers use accounting information to assess profitability, cost control, cash flow and whether the business should expand or adjust operations.' },
          { zh: '貸款人和供應商關心企業的償債能力；投資者關心回報和風險；政府則可能利用資料作稅務和監管用途。', en: 'Lenders and suppliers focus on solvency; investors focus on returns and risks; governments may use information for taxation and regulation.' },
          { zh: '有用的會計資料應具相關性、可靠性、可比較性和及時性。若資料錯誤或過時，決策質素會下降。', en: 'Useful accounting information should be relevant, reliable, comparable and timely. If information is inaccurate or outdated, decision quality decreases.' },
        ],
      },
      {
        title: '企業實體概念',
        titleEn: 'Business Entity Concept',
        points: [
          { zh: '企業實體概念要求把企業與東主視為兩個獨立會計單位，即使獨資企業在法律上未必與東主分開。', en: 'The business entity concept requires the business and owner to be treated as separate accounting units, even if a sole proprietorship may not be legally separate from its owner.' },
          { zh: '東主私人支出不應記作企業費用；東主從企業取走現金或貨品，應記作提用而非企業營運費用。', en: 'An owner’s private expenses should not be recorded as business expenses; cash or goods taken by the owner should be recorded as drawings, not operating expenses.' },
          { zh: '此概念令會計記錄只反映企業本身的交易，避免私人交易混入而扭曲企業表現。', en: 'This concept ensures accounting records reflect only business transactions and prevents private transactions from distorting business performance.' },
        ],
      },
      {
        title: '會計循環',
        titleEn: 'Accounting Cycle',
        points: [
          { zh: '會計循環由辨認交易和收集原始憑證開始，再記入原始分錄簿，然後過帳至分類帳。', en: 'The accounting cycle starts with identifying transactions and collecting source documents, then recording them in books of original entry and posting them to ledgers.' },
          { zh: '分類帳帳戶期末會平帳，結餘用來編製試算表。試算表協助檢查借貸總額是否相等。', en: 'Ledger accounts are balanced off at period-end, and their balances are used to prepare a trial balance. The trial balance helps check whether debit and credit totals agree.' },
          { zh: '完成期末調整後，企業會編製財務報表，例如損益表及財務狀況表，向使用者傳達會計結果。', en: 'After period-end adjustments, the business prepares financial statements such as the income statement and statement of financial position to communicate accounting results.' },
        ],
      },
    ],
    terms: [
      { term: '會計', termEn: 'Accounting', definition: '記錄、分類、總結及傳達財務資料的過程。', definitionEn: 'The process of recording, classifying, summarising and communicating financial information.' },
      { term: '簿記', termEn: 'Bookkeeping', definition: '日常記錄企業交易的工作。', definitionEn: 'The work of recording business transactions on a day-to-day basis.' },
      { term: '記錄', termEn: 'Recording', definition: '把交易資料按日期及金額寫入帳簿。', definitionEn: 'Entering transaction information into books by date and amount.' },
      { term: '分類', termEn: 'Classifying', definition: '把相同性質的交易歸入相關帳戶。', definitionEn: 'Grouping transactions of the same nature into relevant accounts.' },
      { term: '總結', termEn: 'Summarising', definition: '把大量會計資料整理成有用的報表或摘要。', definitionEn: 'Organising large amounts of accounting data into useful statements or summaries.' },
      { term: '傳達', termEn: 'Communicating', definition: '把會計結果提供給使用者作決策。', definitionEn: 'Providing accounting results to users for decision-making.' },
      { term: '企業實體', termEn: 'Business entity', definition: '會計上把企業視為與東主分開的單位。', definitionEn: 'An accounting view that treats the business as separate from its owner.' },
      { term: '會計循環', termEn: 'Accounting cycle', definition: '由原始憑證至財務報表的一連串會計程序。', definitionEn: 'A series of accounting procedures from source documents to financial statements.' },
      { term: '原始憑證', termEn: 'Source documents', definition: '支持交易記錄的證據文件。', definitionEn: 'Documents providing evidence for transaction records.' },
      { term: '試算表', termEn: 'Trial balance', definition: '列示分類帳結餘以檢查借貸總額是否相等的報表。', definitionEn: 'A statement listing ledger balances to check whether total debits equal total credits.' },
    ],
    examTips: [
      { zh: '問會計功能時，不要只寫「記錄交易」。完整答案應包括記錄、分類、總結及傳達，並連結到決策用途。', en: 'For functions of accounting, do not write only “recording transactions”. A complete answer should include recording, classifying, summarising and communicating, linked to decision-making.' },
      { zh: '遇到東主私人支出或提款，要用企業實體概念解釋：企業和東主在會計上分開處理。', en: 'For owner’s private expenses or withdrawals, explain using the business entity concept: the business and owner are treated separately in accounting.' },
      { zh: '會計循環題要按次序作答：原始憑證、原始分錄簿、分類帳、試算表、調整、財務報表。', en: 'For accounting cycle questions, answer in order: source documents, books of original entry, ledgers, trial balance, adjustments and financial statements.' },
    ],
    questions: [
      { question: '會計和簿記有何分別？', questionEn: 'What is the difference between accounting and bookkeeping?', answer: '簿記主要是日常記錄交易；會計除記錄外，還包括分類、總結、傳達及解釋資料以支援決策。', answerEn: 'Bookkeeping mainly records daily transactions; accounting also classifies, summarises, communicates and interprets information to support decisions.' },
      { question: '為何東主私人支出不應列作企業費用？', questionEn: 'Why should an owner’s private expenses not be treated as business expenses?', answer: '根據企業實體概念，企業與東主在會計上分開，私人支出不屬企業營運成本。', answerEn: 'Under the business entity concept, the business and owner are separate in accounting, so private expenses are not business operating costs.' },
      { question: '試算表在會計循環中有甚麼作用？', questionEn: 'What is the role of the trial balance in the accounting cycle?', answer: '它列示分類帳結餘，檢查借貸總額是否相等，並為期末調整和財務報表提供資料。', answerEn: 'It lists ledger balances, checks whether debit and credit totals agree, and provides information for adjustments and financial statements.' },
    ],
  },
  {
    id: 'the-accounting-equation',
    number: 2,
    title: '會計等式',
    titleEn: 'The Accounting Equation',
    objective: {
      zh: '掌握資產、負債及資本的關係，理解收入、費用及提用如何影響資本，並能分析交易對會計等式的影響。',
      en: 'Master the relationship among assets, liabilities and capital, understand how revenues, expenses and drawings affect capital, and analyse the effects of transactions on the accounting equation.',
    },
    sections: [
      {
        title: '基本會計等式',
        titleEn: 'Basic Accounting Equation',
        points: [
          { zh: '會計等式是「資產 = 負債 + 資本」。它表示企業擁有的資源由債權人及東主提供資金。', en: 'The accounting equation is “Assets = Liabilities + Capital”. It shows that resources owned by a business are financed by creditors and the owner.' },
          { zh: '資產是企業擁有或控制並預期帶來未來經濟利益的資源，例如現金、銀行存款、存貨、設備及應收帳款。', en: 'Assets are resources owned or controlled by a business and expected to bring future economic benefits, such as cash, bank deposits, inventory, equipment and trade receivables.' },
          { zh: '負債是企業對外部人士的現時責任，例如應付帳款、銀行貸款及應計費用。資本是東主對企業資產淨額的權益。', en: 'Liabilities are present obligations owed to outsiders, such as trade payables, bank loans and accrued expenses. Capital is the owner’s interest in the net assets of the business.' },
        ],
      },
      {
        title: '收入、費用與資本',
        titleEn: 'Revenues, Expenses and Capital',
        points: [
          { zh: '收入增加資本，因為收入提高企業的資產淨額；費用減少資本，因為費用消耗企業資源或產生責任。', en: 'Revenues increase capital because they increase net assets; expenses decrease capital because they consume resources or create obligations.' },
          { zh: '淨利會增加資本，淨虧損會減少資本。期末資本可表示為：期初資本 + 追加資本 + 淨利 - 提用。', en: 'Net profit increases capital, while net loss decreases capital. Closing capital can be shown as: opening capital + additional capital + net profit - drawings.' },
          { zh: '提用是東主從企業取走現金、貨品或其他資產作私人用途。提用會減少資產及資本，但不是企業費用。', en: 'Drawings are cash, goods or other assets taken by the owner for private use. Drawings reduce assets and capital but are not business expenses.' },
        ],
      },
      {
        title: '交易對等式的影響',
        titleEn: 'Effects of Transactions on the Equation',
        points: [
          { zh: '每項交易都至少影響兩個項目，但會計等式必須保持平衡。例如東主投入現金，資產增加，資本亦增加。', en: 'Every transaction affects at least two items, but the accounting equation must remain balanced. For example, when the owner invests cash, assets increase and capital also increases.' },
          { zh: '以現金購買設備會令一項資產增加、另一項資產減少，總資產和資本不變。', en: 'Buying equipment for cash increases one asset and decreases another asset, leaving total assets and capital unchanged.' },
          { zh: '賒購貨品會令資產增加，同時負債增加；償還供應商欠款會令資產減少，同時負債減少。', en: 'Credit purchases of goods increase assets and liabilities; paying a supplier reduces assets and liabilities.' },
          { zh: '賺取收入通常令資產增加和資本增加；支付費用通常令資產減少和資本減少。', en: 'Earning revenue usually increases assets and capital; paying expenses usually decreases assets and capital.' },
        ],
      },
      {
        title: '常見資產與負債項目',
        titleEn: 'Common Asset and Liability Items',
        points: [
          { zh: '固定存款是存放在銀行一段固定期間以賺取利息的資產，通常按到期時間判斷屬流動或非流動資產。', en: 'A fixed deposit is an asset placed with a bank for a fixed period to earn interest. It is classified as current or non-current according to its maturity.' },
          { zh: '債務人是欠企業款項的人或企業，在現代報表中常稱為應收帳款；債權人是企業欠款的對象，常稱為應付帳款。', en: 'A debtor is a person or business owing money to the firm, commonly called trade receivable; a creditor is a person or business to whom the firm owes money, commonly called trade payable.' },
          { zh: '分析題目時，要先判斷交易涉及資產、負債、資本、收入、費用或提用，再寫出每一項增加或減少。', en: 'When analysing a transaction, first identify whether it involves assets, liabilities, capital, revenues, expenses or drawings, then state whether each item increases or decreases.' },
        ],
      },
    ],
    terms: [
      { term: '資產', termEn: 'Assets', definition: '企業擁有或控制並預期帶來未來經濟利益的資源。', definitionEn: 'Resources owned or controlled by a business and expected to bring future economic benefits.' },
      { term: '負債', termEn: 'Liabilities', definition: '企業對外部人士承擔的現時責任。', definitionEn: 'Present obligations of a business owed to outsiders.' },
      { term: '資本', termEn: 'Capital', definition: '東主在企業資產淨額中的權益。', definitionEn: 'The owner’s interest in the net assets of the business.' },
      { term: '會計等式', termEn: 'Accounting equation', definition: '資產 = 負債 + 資本。', definitionEn: 'Assets = Liabilities + Capital.' },
      { term: '收入', termEn: 'Revenues', definition: '企業日常營運產生並增加資本的收益。', definitionEn: 'Income generated from ordinary operations that increases capital.' },
      { term: '費用', termEn: 'Expenses', definition: '企業為賺取收入而消耗的成本，會減少資本。', definitionEn: 'Costs consumed to earn revenue, reducing capital.' },
      { term: '提用', termEn: 'Drawings', definition: '東主從企業取走資產作私人用途。', definitionEn: 'Assets taken by the owner from the business for private use.' },
      { term: '固定存款', termEn: 'Fixed deposit', definition: '存放於銀行固定期間以賺取利息的款項。', definitionEn: 'Money placed with a bank for a fixed period to earn interest.' },
      { term: '債務人', termEn: 'Debtor', definition: '欠企業款項的人或企業。', definitionEn: 'A person or business owing money to the firm.' },
      { term: '債權人', termEn: 'Creditor', definition: '企業欠款的對象。', definitionEn: 'A person or business to whom the firm owes money.' },
    ],
    examTips: [
      { zh: '會計等式題不能只寫「平衡」。要列明每個項目的類別和方向，例如「資產增加，負債增加」。', en: 'For accounting equation questions, do not only write “balanced”. State the class and direction of each item, such as “assets increase, liabilities increase”.' },
      { zh: '提用不是費用。它減少資產和資本，不應放入損益表作營運費用處理。', en: 'Drawings are not expenses. They reduce assets and capital and should not be treated as operating expenses in the income statement.' },
      { zh: '收入和費用可先轉化為資本影響：收入令資本增加，費用令資本減少，這樣較容易保持等式平衡。', en: 'Convert revenues and expenses into capital effects first: revenues increase capital and expenses decrease capital. This makes it easier to keep the equation balanced.' },
    ],
    questions: [
      { question: '東主投入現金開業，會計等式如何改變？', questionEn: 'How does the accounting equation change when the owner invests cash to start the business?', answer: '現金資產增加，資本增加，資產與資金來源同時增加，等式仍然平衡。', answerEn: 'Cash assets increase and capital increases. Assets and sources of finance both increase, so the equation remains balanced.' },
      { question: '支付租金費用對會計等式有甚麼影響？', questionEn: 'What is the effect of paying rent expense on the accounting equation?', answer: '現金或銀行資產減少，費用令資本減少，因此資產和資本同時減少。', answerEn: 'Cash or bank assets decrease, and the expense reduces capital. Therefore, assets and capital both decrease.' },
      { question: '賒購貨品會影響哪些項目？', questionEn: 'Which items are affected by credit purchases of goods?', answer: '存貨或購貨增加，並產生應付帳款；按等式分析即資產增加，負債增加。', answerEn: 'Inventory or purchases increase and trade payables arise. In equation terms, assets increase and liabilities increase.' },
    ],
  },
  {
    id: 'double-entry-system',
    number: 3,
    title: '複式記帳制度',
    titleEn: 'Double-Entry System',
    objective: {
      zh: '掌握複式記帳的借貸原則，能把交易記入分類帳，並在期末平帳、分辨期初及期末結餘。',
      en: 'Master debit and credit principles of double entry, record transactions in ledgers, and balance off accounts at period-end while distinguishing opening and closing balances.',
    },
    sections: [
      {
        title: '複式記帳的基本原則',
        titleEn: 'Basic Principle of Double Entry',
        points: [
          { zh: '複式記帳要求每項交易同時記入至少兩個帳戶，一方借記，另一方貸記，借方金額必須等於貸方金額。', en: 'Double entry requires each transaction to be recorded in at least two accounts, one debit and one credit, with total debits equal to total credits.' },
          { zh: '借方和貸方不是「增加」或「減少」的固定同義詞。不同帳戶類別的增加方向不同，要先判斷帳戶性質。', en: 'Debit and credit are not fixed synonyms for “increase” or “decrease”. Different account classes increase on different sides, so identify the account nature first.' },
          { zh: '分類帳帳戶通常以 T 字帳形式學習，左方為借方，右方為貸方。', en: 'Ledger accounts are often learned using T-accounts, with the left side as debit and the right side as credit.' },
        ],
      },
      {
        title: '借貸規則',
        titleEn: 'Debit and Credit Rules',
        points: [
          { zh: '資產及費用增加記借方，減少記貸方。現金、銀行、存貨、設備、租金費用及薪金費用通常按此規則處理。', en: 'Increases in assets and expenses are debited, and decreases are credited. Cash, bank, inventory, equipment, rent expense and salaries expense usually follow this rule.' },
          { zh: '負債、資本及收入增加記貸方，減少記借方。應付帳款、資本、銷售及佣金收入通常按此規則處理。', en: 'Increases in liabilities, capital and revenues are credited, and decreases are debited. Trade payables, capital, sales and commission income usually follow this rule.' },
          { zh: '提用會減少資本，但為方便記錄，通常借記提用帳戶，期末再轉入資本帳戶。', en: 'Drawings reduce capital, but for recording convenience they are usually debited to the drawings account and transferred to the capital account at period-end.' },
        ],
      },
      {
        title: '記錄交易至分類帳',
        titleEn: 'Recording Transactions in Ledgers',
        points: [
          { zh: '記錄交易前應先回答三個問題：涉及哪些帳戶？每個帳戶屬於哪一類？該帳戶是增加還是減少？', en: 'Before recording a transaction, ask three questions: which accounts are involved, what class each account belongs to, and whether each account increases or decreases.' },
          { zh: '例如以現金購買設備：設備是資產增加，借記設備；現金是資產減少，貸記現金。', en: 'For example, buying equipment for cash: equipment is an asset increase, so debit equipment; cash is an asset decrease, so credit cash.' },
          { zh: '例如賒銷貨品：應收帳款是資產增加，借記應收帳款；銷售是收入增加，貸記銷售。', en: 'For credit sales of goods: trade receivables are an asset increase, so debit trade receivables; sales are revenue increase, so credit sales.' },
        ],
      },
      {
        title: '平帳與結餘',
        titleEn: 'Balancing Off Accounts and Balances',
        points: [
          { zh: '平帳是期末比較帳戶借方和貸方總額，找出差額並結轉至下一期的程序。', en: 'Balancing off is the period-end process of comparing debit and credit totals, finding the difference and carrying it forward to the next period.' },
          { zh: '期末結餘通常以 balance carried down（c/d）表示，放在金額較小的一方以令兩邊相等；下一期以 balance brought down（b/d）開帳。', en: 'The closing balance is usually shown as balance carried down (c/d) on the smaller side to make both sides equal; it reopens next period as balance brought down (b/d).' },
          { zh: '借方結餘表示帳戶借方總額大於貸方總額；貸方結餘表示貸方總額大於借方總額。資產通常有借方結餘，負債和資本通常有貸方結餘。', en: 'A debit balance means debit totals exceed credit totals; a credit balance means credit totals exceed debit totals. Assets usually have debit balances, while liabilities and capital usually have credit balances.' },
        ],
      },
      {
        title: '期初與期末結餘',
        titleEn: 'Opening and Closing Balances',
        points: [
          { zh: '期初結餘是上一期結轉到本期的帳戶餘額。它顯示本期開始時企業仍持有的資產、負債或資本。', en: 'An opening balance is the account balance brought forward from the previous period. It shows assets, liabilities or capital still existing at the start of the period.' },
          { zh: '期末結餘是本期期末帳戶平帳後留下並結轉到下一期的餘額。', en: 'A closing balance is the amount remaining after balancing an account at period-end and carried forward to the next period.' },
          { zh: '收入及費用等名義帳戶通常期末轉入損益帳戶，不會像資產或負債帳戶一樣直接帶到下一期。', en: 'Nominal accounts such as revenues and expenses are usually transferred to the profit and loss account at period-end and are not carried forward directly like asset or liability accounts.' },
        ],
      },
    ],
    terms: [
      { term: '複式記帳制度', termEn: 'Double-entry system', definition: '每項交易以相等金額同時作借方及貸方記錄的制度。', definitionEn: 'A system recording each transaction with equal debit and credit entries.' },
      { term: '複式帳戶', termEn: 'Double-entry accounts', definition: '以借方和貸方兩邊記錄交易的帳戶。', definitionEn: 'Accounts that record transactions on debit and credit sides.' },
      { term: '借方', termEn: 'Debit', definition: '帳戶左方；資產和費用增加通常記在此方。', definitionEn: 'The left side of an account; increases in assets and expenses are usually recorded here.' },
      { term: '貸方', termEn: 'Credit', definition: '帳戶右方；負債、資本和收入增加通常記在此方。', definitionEn: 'The right side of an account; increases in liabilities, capital and revenues are usually recorded here.' },
      { term: '平帳', termEn: 'Balancing off accounts', definition: '比較帳戶兩邊總額並計算結餘的程序。', definitionEn: 'The process of comparing both sides of an account and calculating its balance.' },
      { term: '期初結餘', termEn: 'Opening balance / Balance brought down', definition: '由上一期帶入本期的帳戶結餘。', definitionEn: 'An account balance brought forward from the previous period.' },
      { term: '期末結餘', termEn: 'Closing balance / Balance carried down', definition: '本期期末計算並帶到下一期的帳戶結餘。', definitionEn: 'An account balance calculated at period-end and carried forward to the next period.' },
      { term: '借方結餘', termEn: 'Debit balance', definition: '帳戶借方總額大於貸方總額後所得的結餘。', definitionEn: 'A balance where debit totals exceed credit totals.' },
      { term: '貸方結餘', termEn: 'Credit balance', definition: '帳戶貸方總額大於借方總額後所得的結餘。', definitionEn: 'A balance where credit totals exceed debit totals.' },
    ],
    examTips: [
      { zh: '做分錄前先寫帳戶類別，再套用借貸規則。直接背「收現金借現金」容易在複雜題中出錯。', en: 'Before writing entries, identify account classes and then apply debit-credit rules. Memorising isolated entries can lead to errors in complex questions.' },
      { zh: '平帳時，balance c/d 放在較小的一方，balance b/d 在下一期放在相反方向。這是很多格式題的得分位。', en: 'When balancing off, balance c/d is placed on the smaller side and balance b/d appears on the opposite side next period. This is a common presentation mark.' },
      { zh: '收入和費用帳戶期末通常沒有直接帶下結餘，因為它們會轉入損益帳戶。', en: 'Revenue and expense accounts usually do not carry balances directly forward because they are transferred to the profit and loss account.' },
    ],
    questions: [
      { question: '複式記帳制度的核心原則是甚麼？', questionEn: 'What is the core principle of the double-entry system?', answer: '每項交易至少影響兩個帳戶，借方總額必須等於貸方總額。', answerEn: 'Each transaction affects at least two accounts, and total debits must equal total credits.' },
      { question: '以現金支付薪金應如何記錄？', questionEn: 'How should salaries paid in cash be recorded?', answer: '薪金費用增加，借記薪金費用；現金資產減少，貸記現金。', answerEn: 'Salaries expense increases, so debit salaries expense; cash asset decreases, so credit cash.' },
      { question: '甚麼是 balance carried down 和 balance brought down？', questionEn: 'What are balance carried down and balance brought down?', answer: 'balance carried down 是期末結轉到下一期的結餘；balance brought down 是下一期承接該結餘的期初結餘。', answerEn: 'Balance carried down is the closing balance carried forward; balance brought down is the opening balance brought into the next period.' },
    ],
  },
]
