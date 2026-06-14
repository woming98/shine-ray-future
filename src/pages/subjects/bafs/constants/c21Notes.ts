import { C1DetailedChapter } from './c1Notes'

export const C21_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'purposes-and-role-of-accounting',
    number: 1,
    title: '會計的目的與角色',
    titleEn: 'Purposes and Role of Accounting',
    objective: {
      zh: '理解會計的功能、會計資料對決策的重要性，以及由原始憑證至財務報表的會計循環。',
      en: 'Understand the functions of accounting, the importance of accounting information for decision-making, and the accounting cycle from source documents to financial statements.',
    },
    sections: [
      {
        title: '會計的功能',
        titleEn: 'Functions of Accounting',
        points: [
          { zh: '會計是記錄、分類、總結及傳達企業財務資料的過程，目的是協助使用者作出更有根據的決策。', en: 'Accounting is the process of recording, classifying, summarising and communicating business financial information to help users make informed decisions.' },
          { zh: '記帳是會計的一部分，主要集中於有系統地記錄交易；會計則進一步把資料整理、解釋及傳達給使用者。', en: 'Bookkeeping is part of accounting and focuses on systematic recording of transactions; accounting further organises, interprets and communicates information to users.' },
          { zh: '會計資料應具相關性、可靠性、可比較性及可理解性，才能支援管理、投資、借貸和監管決策。', en: 'Accounting information should be relevant, reliable, comparable and understandable in order to support management, investment, lending and regulatory decisions.' },
        ],
      },
      {
        title: '會計資料使用者',
        titleEn: 'Users of Accounting Information',
        points: [
          { zh: '內部使用者包括東主和管理層，他們利用會計資料規劃、控制成本、評估表現及制定營運決策。', en: 'Internal users include owners and managers, who use accounting information for planning, cost control, performance evaluation and operating decisions.' },
          { zh: '外部使用者包括投資者、債權人、供應商、顧客、政府及員工，他們關心企業盈利能力、流動性、穩定性和償債能力。', en: 'External users include investors, creditors, suppliers, customers, government and employees, who care about profitability, liquidity, stability and solvency.' },
          { zh: '不同使用者的需要不同，例如銀行重視還款能力，投資者重視回報及風險，政府則重視稅務及合規資料。', en: 'Different users have different needs. Banks focus on repayment ability, investors focus on return and risk, while government focuses on taxation and compliance information.' },
        ],
      },
      {
        title: '企業實體概念',
        titleEn: 'Business Entity Concept',
        points: [
          { zh: '企業實體概念指出企業與東主是分開的會計單位，因此只記錄屬於企業的交易。', en: 'The business entity concept states that the business and its owner are separate accounting units, so only transactions of the business are recorded.' },
          { zh: '東主投入企業的資源記作資本；東主從企業取用現金或貨品作私人用途，記作提取，並會減少資本。', en: 'Resources invested by the owner are recorded as capital; cash or goods taken by the owner for personal use are drawings and reduce capital.' },
          { zh: '即使獨資經營在法律上與東主沒有分開，會計上仍要把企業交易和私人交易分開處理。', en: 'Even though a sole proprietorship is not legally separate from its owner, accounting still separates business transactions from private transactions.' },
        ],
      },
      {
        title: '會計循環',
        titleEn: 'Accounting Cycle',
        points: [
          { zh: '會計循環由原始憑證開始，交易先記入原始分錄簿，再過帳至分類帳。', en: 'The accounting cycle starts with source documents. Transactions are first recorded in books of original entry and then posted to ledgers.' },
          { zh: '分類帳帳戶定期平帳，結餘會編製試算表，用作檢查借貸總額是否相等。', en: 'Ledger accounts are balanced off periodically, and their balances are used to prepare a trial balance to check whether total debits equal total credits.' },
          { zh: '期末調整完成後，企業會編製財務報表，向使用者傳達一段期間的經營成果及期末財務狀況。', en: 'After period-end adjustments, financial statements are prepared to communicate performance for a period and financial position at the period end.' },
        ],
      },
    ],
    terms: [
      { term: '會計', termEn: 'Accounting', definition: '記錄、分類、總結及傳達財務資料以支援決策的過程。', definitionEn: 'The process of recording, classifying, summarising and communicating financial information for decision-making.' },
      { term: '記帳', termEn: 'Bookkeeping', definition: '有系統地記錄企業交易的工作。', definitionEn: 'The systematic recording of business transactions.' },
      { term: '記錄', termEn: 'Recording', definition: '把交易按日期和金額記入會計記錄。', definitionEn: 'Entering transactions into accounting records by date and amount.' },
      { term: '分類', termEn: 'Classifying', definition: '把相同性質的交易歸入適當帳戶。', definitionEn: 'Grouping transactions of the same nature into suitable accounts.' },
      { term: '總結', termEn: 'Summarising', definition: '把大量會計資料整理成試算表及財務報表等摘要。', definitionEn: 'Condensing accounting data into summaries such as trial balances and financial statements.' },
      { term: '傳達', termEn: 'Communicating', definition: '把財務資料以報表或分析形式提供給使用者。', definitionEn: 'Providing financial information to users through reports or analysis.' },
      { term: '企業實體', termEn: 'Business entity', definition: '會計上被視為獨立於東主的記錄單位。', definitionEn: 'An accounting unit treated as separate from its owner.' },
      { term: '會計循環', termEn: 'Accounting cycle', definition: '由原始憑證記錄交易至編製財務報表的一連串程序。', definitionEn: 'The sequence of procedures from recording transactions from source documents to preparing financial statements.' },
      { term: '原始憑證', termEn: 'Source document', definition: '證明交易發生的文件，例如發票、收據和支票存根。', definitionEn: 'A document proving that a transaction has occurred, such as an invoice, receipt or cheque counterfoil.' },
    ],
    examTips: [
      { zh: '遇到「會計有何用處」題目，不要只寫記錄交易；要連接到決策，例如控制成本、評估盈利能力或申請貸款。', en: 'For questions on the usefulness of accounting, do not only write recording transactions; link it to decisions such as cost control, profitability evaluation or loan application.' },
      { zh: '企業實體概念常用於解釋為何東主私人支出不應記入企業支出，或為何提取會減少資本。', en: 'The business entity concept is often used to explain why owners’ private expenses should not be recorded as business expenses, or why drawings reduce capital.' },
    ],
    questions: [
      { question: '記帳與會計有何分別？', questionEn: 'What is the difference between bookkeeping and accounting?', answer: '記帳主要是有系統地記錄交易；會計包括記錄、分類、總結、解釋及傳達財務資料，範圍較廣。', answerEn: 'Bookkeeping mainly records transactions systematically; accounting is broader and includes recording, classifying, summarising, interpreting and communicating financial information.' },
      { question: '東主為私人旅行付款，應否記作企業支出？', questionEn: 'Should an owner’s private travel payment be recorded as a business expense?', answer: '不應。根據企業實體概念，私人交易與企業交易分開，該款項應視作東主提取。', answerEn: 'No. Under the business entity concept, private and business transactions are separated, so the payment should be treated as drawings.' },
      { question: '試算表在會計循環中的作用是甚麼？', questionEn: 'What is the role of a trial balance in the accounting cycle?', answer: '它列出分類帳結餘，檢查借方總額是否等於貸方總額，為編製財務報表提供基礎。', answerEn: 'It lists ledger balances, checks whether total debits equal total credits, and provides a basis for preparing financial statements.' },
    ],
  },
  {
    id: 'accounting-equation',
    number: 2,
    title: '會計等式',
    titleEn: 'The Accounting Equation',
    objective: {
      zh: '掌握資產、負債、資本、收入、支出及提取的概念，並分析交易如何影響會計等式。',
      en: 'Master the concepts of assets, liabilities, capital, revenues, expenses and drawings, and analyse how transactions affect the accounting equation.',
    },
    sections: [
      {
        title: '基本會計等式',
        titleEn: 'Basic Accounting Equation',
        points: [
          { zh: '基本會計等式是：資產 = 資本 + 負債。它反映企業資源由東主投資或外部債權人提供。', en: 'The basic accounting equation is: assets = capital + liabilities. It shows that business resources are financed by owner’s investment or external creditors.' },
          { zh: '資產是企業擁有或控制並預期帶來未來經濟利益的資源，例如現金、存貨、應收帳款、設備和定期存款。', en: 'Assets are resources owned or controlled by a business and expected to bring future economic benefits, such as cash, inventory, trade receivables, equipment and fixed deposits.' },
          { zh: '負債是企業因過去交易而需要向外部人士償還的責任，例如應付帳款、其他應付款和銀行貸款。', en: 'Liabilities are obligations to outsiders arising from past transactions, such as trade payables, other payables and bank loans.' },
          { zh: '資本是東主在企業中的權益，可理解為企業資產扣除負債後屬於東主的部分。', en: 'Capital is the owner’s interest in the business and can be understood as the part of assets belonging to the owner after deducting liabilities.' },
        ],
      },
      {
        title: '收入、支出與資本',
        titleEn: 'Revenues, Expenses and Capital',
        points: [
          { zh: '收入是企業日常營運產生的經濟利益流入，例如銷貨收入、服務收入和佣金收入；收入會增加資本。', en: 'Revenue is the inflow of economic benefits from ordinary activities, such as sales revenue, service income and commission income; revenue increases capital.' },
          { zh: '支出是為賺取收入而耗用的經濟利益，例如租金、薪金、電費和廣告費；支出會減少資本。', en: 'Expenses are economic benefits consumed to earn revenue, such as rent, wages, electricity and advertising; expenses reduce capital.' },
          { zh: '提取是東主從企業取用現金或貨品作私人用途。提取不是支出，因為它不是為賺取收入而發生。', en: 'Drawings are cash or goods taken by the owner for personal use. Drawings are not expenses because they are not incurred to earn revenue.' },
          { zh: '擴展會計等式可寫成：資產 = 資本 + 收入 - 支出 - 提取 + 負債。', en: 'The expanded accounting equation can be written as: assets = capital + revenue - expenses - drawings + liabilities.' },
        ],
      },
      {
        title: '交易對會計等式的影響',
        titleEn: 'Effects of Transactions on the Accounting Equation',
        points: [
          { zh: '每項交易至少影響兩個項目，但會計等式必須保持平衡。', en: 'Each transaction affects at least two items, but the accounting equation must remain balanced.' },
          { zh: '例如東主投入現金會令資產增加，同時資本增加；賒購貨品會令存貨增加，同時應付帳款增加。', en: 'For example, owner’s cash investment increases assets and capital; buying goods on credit increases inventory and trade payables.' },
          { zh: '以現金償還供應商會令現金減少，同時應付帳款減少；收取顧客欠款會令現金增加，同時應收帳款減少。', en: 'Paying a supplier in cash decreases cash and trade payables; collecting a debt from a customer increases cash and decreases trade receivables.' },
          { zh: '購買設備時，若以現金付款，通常是一項資產增加而另一項資產減少；若以貸款付款，資產和負債同時增加。', en: 'When equipment is purchased for cash, one asset increases and another asset decreases; if financed by a loan, assets and liabilities both increase.' },
        ],
      },
      {
        title: '常見分類判斷',
        titleEn: 'Common Classification Judgements',
        points: [
          { zh: '應收帳款是顧客尚未支付的款項，屬資產；應付帳款是企業尚未支付供應商的款項，屬負債。', en: 'Trade receivables are amounts owed by customers and are assets; trade payables are amounts owed to suppliers and are liabilities.' },
          { zh: '其他應收款和其他應付款通常不是來自買賣貨品的主要交易，但仍分別屬於資產和負債。', en: 'Other receivables and other payables are usually not from main trading transactions, but they are still assets and liabilities respectively.' },
          { zh: '定期存款通常屬資產，因為企業控制該存款並預期日後收回本金和利息。', en: 'A fixed deposit is usually an asset because the business controls the deposit and expects to receive principal and interest in the future.' },
        ],
      },
    ],
    terms: [
      { term: '資產', termEn: 'Assets', definition: '企業擁有或控制並預期帶來未來經濟利益的資源。', definitionEn: 'Resources owned or controlled by a business that are expected to bring future economic benefits.' },
      { term: '負債', termEn: 'Liabilities', definition: '企業因過去交易而需要向外部人士償還的責任。', definitionEn: 'Obligations to outsiders arising from past transactions.' },
      { term: '資本', termEn: 'Capital', definition: '東主在企業中的權益。', definitionEn: 'The owner’s interest in the business.' },
      { term: '會計等式', termEn: 'Accounting equation', definition: '資產、資本和負債之間的基本關係：資產 = 資本 + 負債。', definitionEn: 'The basic relationship among assets, capital and liabilities: assets = capital + liabilities.' },
      { term: '收入', termEn: 'Revenue', definition: '日常營運產生並會增加資本的經濟利益流入。', definitionEn: 'Inflow of economic benefits from ordinary activities that increases capital.' },
      { term: '支出', termEn: 'Expenses', definition: '為賺取收入而耗用並會減少資本的經濟利益。', definitionEn: 'Economic benefits consumed to earn revenue that reduce capital.' },
      { term: '提取', termEn: 'Drawings', definition: '東主從企業取用資源作私人用途，會減少資本。', definitionEn: 'Resources taken by the owner from the business for personal use, reducing capital.' },
      { term: '應收帳款', termEn: 'Trade receivables', definition: '顧客因賒購貨品或服務而欠企業的款項。', definitionEn: 'Amounts owed by customers for goods or services bought on credit.' },
      { term: '應付帳款', termEn: 'Trade payables', definition: '企業因賒購貨品或服務而欠供應商的款項。', definitionEn: 'Amounts owed to suppliers for goods or services bought on credit.' },
    ],
    examTips: [
      { zh: '會計等式題要逐項寫出「哪個項目增加或減少」，不要只寫總額有變。', en: 'For accounting equation questions, state which item increases or decreases; do not only say the total changes.' },
      { zh: '提取不是支出。若題目說東主取貨自用，應減少存貨及資本，而不是記作銷貨成本。', en: 'Drawings are not expenses. If the owner takes goods for private use, reduce inventory and capital instead of recording cost of sales.' },
    ],
    questions: [
      { question: '企業以現金 $5,000 償還供應商，會計等式如何變化？', questionEn: 'A business pays $5,000 cash to a supplier. How does the accounting equation change?', answer: '資產中的現金減少 $5,000，負債中的應付帳款減少 $5,000，等式仍然平衡。', answerEn: 'Cash under assets decreases by $5,000 and trade payables under liabilities decrease by $5,000; the equation remains balanced.' },
      { question: '賒銷貨品會即時增加哪兩項？', questionEn: 'Which two items increase immediately when goods are sold on credit?', answer: '應收帳款增加，同時收入增加；收入最終會增加資本。', answerEn: 'Trade receivables increase and revenue increases; revenue eventually increases capital.' },
      { question: '東主提取現金自用是否會影響資本？', questionEn: 'Does the owner’s cash drawings affect capital?', answer: '會。提取會令現金減少，同時令資本減少。', answerEn: 'Yes. Drawings decrease cash and also decrease capital.' },
    ],
  },
  {
    id: 'double-entry-system',
    number: 3,
    title: '複式記帳制度',
    titleEn: 'Double-Entry System',
    objective: {
      zh: '理解複式記帳原理、借方和貸方規則，並能判斷帳戶結餘及完成平帳。',
      en: 'Understand the principles of double entry, debit and credit rules, and determine account balances and balance off accounts.',
    },
    sections: [
      {
        title: '複式記帳原理',
        titleEn: 'Principles of Double Entry',
        points: [
          { zh: '複式記帳制度規定每項交易至少記入兩個帳戶，一個借方、一個貸方，且借方總額必須等於貸方總額。', en: 'The double-entry system records each transaction in at least two accounts, one debit and one credit, and total debits must equal total credits.' },
          { zh: '帳戶通常以 T 字帳形式表示，左邊為借方，右邊為貸方。借方和貸方本身不等於增加或減少，要視乎帳戶類別而定。', en: 'Accounts are often shown as T-accounts, with the left side as debit and the right side as credit. Debit and credit do not always mean increase or decrease; it depends on the account type.' },
          { zh: '複式記帳有助保留交易的雙重影響，亦為編製試算表及財務報表提供基礎。', en: 'Double entry keeps the dual effect of transactions and provides the basis for preparing trial balances and financial statements.' },
        ],
      },
      {
        title: '借方與貸方規則',
        titleEn: 'Debit and Credit Rules',
        points: [
          { zh: '資產、支出和提取增加時記借方；減少時記貸方。', en: 'Increases in assets, expenses and drawings are recorded on the debit side; decreases are recorded on the credit side.' },
          { zh: '負債、資本和收入增加時記貸方；減少時記借方。', en: 'Increases in liabilities, capital and revenue are recorded on the credit side; decreases are recorded on the debit side.' },
          { zh: '可以用 AED 增加記借方、LCR 增加記貸方來記憶：Assets, Expenses, Drawings debit up; Liabilities, Capital, Revenue credit up。', en: 'A useful memory aid is AED increase by debit and LCR increase by credit: Assets, Expenses, Drawings debit up; Liabilities, Capital, Revenue credit up.' },
        ],
      },
      {
        title: '由交易到分錄',
        titleEn: 'From Transaction to Entry',
        points: [
          { zh: '分析交易時，先辨認受影響的帳戶，再判斷帳戶類別，最後決定借方或貸方。', en: 'When analysing a transaction, first identify the affected accounts, then decide their account types, and finally determine debit or credit.' },
          { zh: '例如現金購買設備：借記設備，貸記現金，因為設備資產增加而現金資產減少。', en: 'For example, buying equipment for cash: debit equipment and credit cash because equipment asset increases and cash asset decreases.' },
          { zh: '例如向銀行借款：借記銀行／現金，貸記銀行貸款，因為資產增加而負債增加。', en: 'For example, taking a bank loan: debit bank/cash and credit bank loan because assets increase and liabilities increase.' },
          { zh: '例如支付租金：借記租金支出，貸記現金，因為支出增加而現金減少。', en: 'For example, paying rent: debit rent expense and credit cash because expense increases and cash decreases.' },
        ],
      },
      {
        title: '平帳與結餘',
        titleEn: 'Balancing Off Accounts and Balances',
        points: [
          { zh: '平帳是比較帳戶借方和貸方總額，計算較小一方需要補上的差額，以得出結餘。', en: 'Balancing off compares the debit and credit totals of an account and calculates the difference needed on the smaller side to find the balance.' },
          { zh: '結轉結餘 c/d 是期末放在較小一方使帳戶兩邊相等的數字；承前結餘 b/d 是下一期把該結餘帶回正常一方。', en: 'Balance carried down (c/d) is placed on the smaller side at period end to make both sides equal; balance brought down (b/d) brings the balance to the normal side in the next period.' },
          { zh: '資產和支出帳戶通常有借方結餘；負債、資本和收入帳戶通常有貸方結餘。', en: 'Asset and expense accounts usually have debit balances; liability, capital and revenue accounts usually have credit balances.' },
        ],
      },
    ],
    terms: [
      { term: '複式記帳制度', termEn: 'Double-entry system', definition: '每項交易以相等金額記入借方和貸方的記帳制度。', definitionEn: 'A bookkeeping system that records each transaction with equal debit and credit amounts.' },
      { term: '帳戶', termEn: 'Account', definition: '用來記錄某一類交易增減變化的分類記錄。', definitionEn: 'A classified record used to show increases and decreases in a particular item.' },
      { term: '借方', termEn: 'Debit', definition: '帳戶左方；資產、支出及提取增加時記借方。', definitionEn: 'The left side of an account; increases in assets, expenses and drawings are debited.' },
      { term: '貸方', termEn: 'Credit', definition: '帳戶右方；負債、資本及收入增加時記貸方。', definitionEn: 'The right side of an account; increases in liabilities, capital and revenue are credited.' },
      { term: '平帳', termEn: 'Balancing off accounts', definition: '計算帳戶借貸兩方差額並帶出結餘的程序。', definitionEn: 'The process of calculating the difference between debit and credit sides and carrying forward the balance.' },
      { term: '承前結餘', termEn: 'Balance brought down (b/d)', definition: '由上一期帶入本期的帳戶結餘。', definitionEn: 'The account balance brought forward from the previous period.' },
      { term: '結轉結餘', termEn: 'Balance carried down (c/d)', definition: '期末結轉至下一期的帳戶結餘。', definitionEn: 'The account balance carried forward to the next period.' },
      { term: '借方結餘', termEn: 'Debit balance', definition: '帳戶借方總額大於貸方總額的結餘。', definitionEn: 'A balance where the debit total is greater than the credit total.' },
      { term: '貸方結餘', termEn: 'Credit balance', definition: '帳戶貸方總額大於借方總額的結餘。', definitionEn: 'A balance where the credit total is greater than the debit total.' },
    ],
    examTips: [
      { zh: '不要把「借方」直接理解為增加。先判斷帳戶類別，再套用借貸規則。', en: 'Do not treat “debit” as simply meaning increase. Identify the account type first, then apply debit and credit rules.' },
      { zh: '寫分錄時必須借貸相等；若只有一邊，通常代表未完整反映交易的雙重影響。', en: 'Entries must have equal debit and credit amounts. If only one side is written, the dual effect of the transaction is usually incomplete.' },
    ],
    questions: [
      { question: '企業以現金購買辦公設備，應借記和貸記哪個帳戶？', questionEn: 'A business buys office equipment for cash. Which accounts are debited and credited?', answer: '借記辦公設備，貸記現金。設備資產增加，現金資產減少。', answerEn: 'Debit office equipment and credit cash. Equipment asset increases and cash asset decreases.' },
      { question: '收入帳戶增加時記借方還是貸方？', questionEn: 'When a revenue account increases, is it debited or credited?', answer: '記貸方。收入增加會令資本增加，而收入帳戶正常有貸方結餘。', answerEn: 'It is credited. Revenue increases capital and revenue accounts normally have credit balances.' },
      { question: '何謂承前結餘 b/d？', questionEn: 'What is balance brought down (b/d)?', answer: '它是由上一期帶入本期的帳戶結餘，通常放在帳戶的正常結餘一方。', answerEn: 'It is the account balance brought forward from the previous period, usually placed on the normal balance side of the account.' },
    ],
  },
  {
    id: 'trial-balance',
    number: 4,
    title: '試算表',
    titleEn: 'Trial Balance',
    objective: {
      zh: '學會在期末編製試算表，理解試算表的功能及限制，並辨認哪些錯誤未必會令試算表不平衡。',
      en: 'Learn to prepare a trial balance at period end, understand its functions and limitations, and identify errors that may not make the trial balance disagree.',
    },
    sections: [
      {
        title: '試算表的編製',
        titleEn: 'Preparing a Trial Balance',
        points: [
          { zh: '試算表是在某一日期列出所有分類帳借方結餘和貸方結餘的表。', en: 'A trial balance is a list of all debit and credit balances in the ledgers at a particular date.' },
          { zh: '編製時先完成分類帳平帳，然後把借方結餘列在借方欄，把貸方結餘列在貸方欄。', en: 'To prepare it, balance off ledger accounts first, then place debit balances in the debit column and credit balances in the credit column.' },
          { zh: '試算表借方總額應等於貸方總額，因為每項交易在複式記帳制度下都有相等借貸記錄。', en: 'The debit total should equal the credit total because every transaction has equal debit and credit entries under the double-entry system.' },
        ],
      },
      {
        title: '試算表的功能',
        titleEn: 'Functions of a Trial Balance',
        points: [
          { zh: '試算表可檢查帳簿的算術準確性，特別是借貸記錄是否總額相等。', en: 'A trial balance checks the arithmetical accuracy of books, especially whether debit and credit records are equal in total.' },
          { zh: '它把分類帳結餘集中在一張表內，方便編製損益表、財務狀況表及期末調整。', en: 'It gathers ledger balances in one schedule, making it easier to prepare income statements, statements of financial position and period-end adjustments.' },
          { zh: '若試算表不平衡，代表帳簿可能存在錯誤，例如只記一邊、金額不相等或結餘放錯欄。', en: 'If a trial balance disagrees, there may be errors such as recording one side only, unequal amounts or placing a balance in the wrong column.' },
        ],
      },
      {
        title: '試算表的限制',
        titleEn: 'Limitations of a Trial Balance',
        points: [
          { zh: '試算表平衡只代表借貸總額相等，不代表所有交易都已正確記錄。', en: 'An agreed trial balance only means total debits equal total credits; it does not prove that all transactions are correctly recorded.' },
          { zh: '漏記錯誤不會影響試算表平衡，因為整項交易沒有記入任何帳戶。', en: 'An error of omission does not affect trial balance agreement because the whole transaction is not recorded in any account.' },
          { zh: '原則性錯誤、補償性錯誤、完全反向分錄和金額同時錯誤等，也可能令試算表仍然平衡。', en: 'Errors of principle, compensating errors, complete reversal of entries and equal amount errors may also leave the trial balance agreed.' },
        ],
      },
      {
        title: '常見錯誤判斷',
        titleEn: 'Common Error Judgements',
        points: [
          { zh: '若只漏記借方或貸方其中一邊，試算表通常會不平衡。', en: 'If only one debit or credit entry is omitted, the trial balance usually disagrees.' },
          { zh: '若把借方結餘錯放到貸方欄，差額通常會是該結餘的兩倍。', en: 'If a debit balance is placed in the credit column, the difference is usually twice the amount of that balance.' },
          { zh: '若交易被完整記入錯誤帳戶但借貸相等，試算表仍會平衡，但財務報表分類可能錯誤。', en: 'If a transaction is completely recorded in the wrong account with equal debits and credits, the trial balance still agrees but financial statement classification may be wrong.' },
        ],
      },
    ],
    terms: [
      { term: '試算表', termEn: 'Trial balance', definition: '在某一日期列出分類帳借方和貸方結餘的表。', definitionEn: 'A list of debit and credit ledger balances at a particular date.' },
      { term: '相符', termEn: 'Agree', definition: '試算表借方總額等於貸方總額。', definitionEn: 'The debit total of the trial balance equals the credit total.' },
      { term: '不相符', termEn: 'Disagree', definition: '試算表借方總額不等於貸方總額。', definitionEn: 'The debit total of the trial balance does not equal the credit total.' },
      { term: '錯誤', termEn: 'Errors', definition: '會計記錄中的遺漏、分類、金額或借貸方向錯誤。', definitionEn: 'Omissions, classification, amount or debit-credit direction mistakes in accounting records.' },
      { term: '漏記錯誤', termEn: 'Error of omission', definition: '整項交易沒有記入帳簿。', definitionEn: 'A whole transaction is not recorded in the books.' },
      { term: '原則性錯誤', termEn: 'Error of principle', definition: '把交易記入錯誤類別的帳戶，例如把資產誤記作支出。', definitionEn: 'Recording a transaction in an account of the wrong class, such as treating an asset as an expense.' },
      { term: '補償性錯誤', termEn: 'Compensating errors', definition: '兩個或以上錯誤互相抵銷，令試算表仍然平衡。', definitionEn: 'Two or more errors offset each other so that the trial balance still agrees.' },
      { term: '完全反向分錄', termEn: 'Complete reversal of entries', definition: '應借記的帳戶被貸記，應貸記的帳戶被借記，但金額相同。', definitionEn: 'The account to be debited is credited and the account to be credited is debited by the same amount.' },
    ],
    examTips: [
      { zh: '試算表平衡不等於沒有錯誤。考試常要求指出「不會被試算表揭示」的錯誤。', en: 'An agreed trial balance does not mean there are no errors. Exams often ask for errors not revealed by a trial balance.' },
      { zh: '判斷錯誤是否影響試算表時，重點看借方和貸方總額是否仍然相等，而不是看帳戶名稱是否正確。', en: 'When judging whether an error affects the trial balance, focus on whether debit and credit totals remain equal, not only whether account names are correct.' },
    ],
    questions: [
      { question: '試算表平衡是否證明帳簿完全正確？', questionEn: 'Does an agreed trial balance prove that the books are completely correct?', answer: '不能。它只證明借貸總額相等，仍可能存在漏記、原則性錯誤或完全反向分錄等錯誤。', answerEn: 'No. It only proves total debits equal total credits; errors such as omission, principle errors or complete reversal may still exist.' },
      { question: '整項賒購交易沒有入帳，試算表會否不平衡？', questionEn: 'If a whole credit purchase transaction is not recorded, will the trial balance disagree?', answer: '通常不會，因為借方和貸方都沒有記錄，兩邊總額仍可能相等。', answerEn: 'Usually no, because both debit and credit entries are omitted, so both totals may still be equal.' },
      { question: '若租金支出誤記入設備帳戶，試算表會否揭示錯誤？', questionEn: 'If rent expense is wrongly recorded in the equipment account, will the trial balance reveal the error?', answer: '通常不會。借貸仍然相等，但屬原則性錯誤，因為支出被誤記作資產。', answerEn: 'Usually no. Debits and credits still agree, but it is an error of principle because an expense is recorded as an asset.' },
    ],
  },
]
