import { C1DetailedChapter } from './c1Notes'

export const A7_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'issue-shares-debentures',
    number: 1,
    title: '股份及債券發行',
    titleEn: 'Issue of Shares and Debentures',
    objective: {
      zh: '理解股份資本與借貸資本的性質及分類，並記錄普通股和債券發行、超額認購及退款。',
      en: 'Understand the nature and classification of share capital and loan capital, and record issues of ordinary shares and debentures, over-subscription and refunds.',
    },
    sections: [
      {
        title: '股份資本的性質',
        titleEn: 'Nature of Share Capital',
        points: [
          { zh: '有限公司透過發行股份向投資者籌集股份資本。股東是公司擁有人，承擔的風險通常以投資金額為限。', en: 'A limited company raises share capital by issuing shares to investors. Shareholders are owners whose risk is normally limited to the amount invested.' },
          { zh: '已發行股本是公司已向股東發行股份所代表的資本。發行股份收到的款項會增加公司的銀行存款及權益。', en: 'Issued share capital is the capital represented by shares already issued to shareholders. Proceeds from an issue increase the company’s bank balance and equity.' },
          { zh: '股份資本不設固定還款日期，股息亦不是必須支付的營運費用；股息須視乎可供分派利潤及公司決定。', en: 'Share capital has no fixed repayment date, and dividends are not compulsory operating expenses; dividends depend on distributable profit and company decisions.' },
        ],
      },
      {
        title: '普通股與優先股',
        titleEn: 'Ordinary Shares and Preference Shares',
        points: [
          { zh: '普通股股東通常具有投票權，股息及資本回報並不固定；公司表現良好時可獲較高回報，但承擔的風險亦較高。', en: 'Ordinary shareholders normally have voting rights, while dividends and capital returns are not fixed. They may receive higher returns when the company performs well but bear greater risk.' },
          { zh: '優先股股東通常可按指定股息率優先獲派股息，並在清盤時優先於普通股取回資本，但投票權通常較有限。', en: 'Preference shareholders normally have priority for dividends at a stated rate and priority over ordinary shareholders for capital repayment on liquidation, but usually have more limited voting rights.' },
          { zh: '普通股及優先股均屬權益而非負債。比較兩者時，應從控制權、回報、風險及清盤次序分析。', en: 'Both ordinary and preference shares are equity rather than liabilities. Compare them in terms of control, return, risk and priority on liquidation.' },
        ],
      },
      {
        title: '股份發行、超額認購與退款',
        titleEn: 'Share Issue, Over-subscription and Refund',
        points: [
          { zh: '股份按面值發行時，收到款項的基本分錄為：借記銀行，貸記股本。已發行股本等於已發行股份數目乘以每股發行金額。', en: 'For shares issued at par, the basic entry is: debit bank and credit share capital. Issued share capital equals the number of shares issued multiplied by the issue amount per share.' },
          { zh: '超額認購是申請股份數目超過可供發行數目。公司可按比例分配、拒絕部分申請，並退回多收申請款項。', en: 'Over-subscription occurs when applications exceed the shares available. The company may allot shares proportionately, reject some applications and refund excess application money.' },
          { zh: '退款會減少銀行存款及應付申請人款項，但不會減少實際已發行股本。檢查時應確認保留款項等於實際發行股份所需款項。', en: 'A refund reduces bank and amounts owed to applicants but does not reduce actual issued share capital. Check that money retained equals the amount required for shares actually issued.' },
        ],
      },
      {
        title: '債券與借貸資本',
        titleEn: 'Debentures and Loan Capital',
        points: [
          { zh: '債券代表公司向投資者借入的長期借貸資本。債券持有人是債權人，不是公司擁有人，通常沒有投票權。', en: 'Debentures represent long-term loan capital borrowed from investors. Debenture holders are creditors rather than owners and normally have no voting rights.' },
          { zh: '債券按面值發行時，分錄為借記銀行、貸記債券。債券在財務狀況表列作負債，而不是權益。', en: 'When debentures are issued at par, debit bank and credit debentures. Debentures are shown as liabilities rather than equity in the statement of financial position.' },
          { zh: '債券利息是公司使用借貸資本的財務成本，不論公司是否盈利一般仍須支付；分錄通常為借記債券利息或財務成本，貸記銀行或應付利息。', en: 'Debenture interest is a finance cost for using loan capital and is normally payable whether or not the company earns profit. The usual entry debits debenture interest or finance costs and credits bank or interest payable.' },
        ],
      },
    ],
    terms: [
      { term: '股份資本', termEn: 'Share capital', definition: '公司透過向投資者發行股份所籌集的權益資本。', definitionEn: 'Equity capital raised by a company through issuing shares to investors.' },
      { term: '普通股', termEn: 'Ordinary shares', definition: '通常具有投票權，股息及資本回報不固定的股份。', definitionEn: 'Shares normally carrying voting rights with non-fixed dividends and capital returns.' },
      { term: '優先股', termEn: 'Preference shares', definition: '在股息及清盤資本分配方面通常優先於普通股的股份。', definitionEn: 'Shares normally having priority over ordinary shares for dividends and capital repayment on liquidation.' },
      { term: '已發行股本', termEn: 'Issued share capital', definition: '公司已實際向股東發行股份所代表的股本。', definitionEn: 'Share capital represented by shares actually issued to shareholders.' },
      { term: '股東', termEn: 'Shareholder', definition: '持有公司股份並擁有公司權益的人士或機構。', definitionEn: 'A person or entity holding shares and an ownership interest in a company.' },
      { term: '股息', termEn: 'Dividend', definition: '公司從可供分派利潤中向股東作出的分派。', definitionEn: 'A distribution by a company to shareholders from profit available for distribution.' },
      { term: '按面值發行', termEn: 'Issue at par', definition: '以股份或債券的面值發行證券。', definitionEn: 'Issuing shares or debentures at their nominal value.' },
      { term: '超額認購', termEn: 'Over-subscription', definition: '投資者申請股份數目超過公司可供發行數目。', definitionEn: 'A situation where applications exceed the number of shares available for issue.' },
      { term: '股份分配', termEn: 'Share allotment', definition: '公司決定向申請人實際發行股份的過程。', definitionEn: 'The process by which a company determines the shares actually issued to applicants.' },
      { term: '退款', termEn: 'Refund', definition: '公司把未用於股份分配的多收申請款項退回申請人。', definitionEn: 'Repayment of excess application money not used for share allotment.' },
      { term: '借貸資本', termEn: 'Loan capital', definition: '公司向債權人借入並須按條款償還的資金。', definitionEn: 'Funds borrowed by a company from creditors and repayable according to agreed terms.' },
      { term: '債券', termEn: 'Debentures', definition: '公司發行以確認長期借貸及還款責任的債務工具。', definitionEn: 'Debt instruments issued by a company acknowledging long-term borrowing and repayment obligations.' },
      { term: '債券持有人', termEn: 'Debenture holder', definition: '向公司提供借貸資本並享有利息及還款權利的債權人。', definitionEn: 'A creditor providing loan capital to a company with rights to interest and repayment.' },
      { term: '債券利息', termEn: 'Debenture interest', definition: '公司使用債券借貸資本而須支付的財務成本。', definitionEn: 'The finance cost payable by a company for using loan capital raised through debentures.' },
    ],
    examTips: [
      { zh: '分辨股份與債券時，先判斷持有人是擁有人還是債權人，再分析投票權、回報、還款及報表分類。', en: 'When distinguishing shares from debentures, first decide whether the holder is an owner or creditor, then analyse voting rights, return, repayment and financial-statement classification.' },
      { zh: '超額認購題要分開「收到的申請款」、「保留作已發行股份的款項」及「退款」，三者必須互相核對。', en: 'For over-subscription questions, separate application money received, money retained for shares issued and refunds, and reconcile all three.' },
    ],
    questions: [
      { question: '普通股與債券對公司的最主要分別是甚麼？', questionEn: 'What is the main difference between ordinary shares and debentures from the company’s perspective?', answer: '普通股屬權益資本，股東是擁有人；債券屬借貸資本，債券持有人是債權人，公司須按條款支付利息及償還本金。', answerEn: 'Ordinary shares are equity and shareholders are owners; debentures are loan capital and holders are creditors, so the company must pay interest and repay principal according to terms.' },
      { question: '公司收到股份申請款多於實際發行所需款項時，應如何處理差額？', questionEn: 'How should a company deal with application money exceeding the amount needed for shares actually issued?', answer: '差額屬多收款項，應退回未獲分配或只獲部分分配股份的申請人。', answerEn: 'The excess is refundable to applicants who receive no shares or only a partial allotment.' },
      { question: '公司虧損時是否仍須支付債券利息？', questionEn: 'Must a company still pay debenture interest when it makes a loss?', answer: '一般須支付，因為債券利息是借貸合約下的財務成本，不取決於公司是否盈利。', answerEn: 'Normally yes, because debenture interest is a contractual finance cost and does not depend on whether the company earns profit.' },
    ],
  },
  {
    id: 'limited-company-financial-statements',
    number: 2,
    title: '有限公司財務報表',
    titleEn: 'Financial Statements for Limited Companies',
    objective: {
      zh: '編製有限公司損益表、保留利潤計算及財務狀況表，並分辨儲備與撥備。',
      en: 'Prepare a limited company income statement, retained-profit calculation and statement of financial position, and distinguish reserves from provisions.',
    },
    sections: [
      {
        title: '有限公司損益表',
        titleEn: 'Income Statement for a Limited Company',
        points: [
          { zh: '損益表先計算毛利，再按功能分類列示行政費用、分銷成本及其他營運費用，得出營運利潤。', en: 'The income statement first calculates gross profit, then presents administrative expenses, distribution costs and other operating expenses by function to derive operating profit.' },
          { zh: '董事酬金及核數師酬金通常屬行政費用；銷售及送貨相關費用通常屬分銷成本；分類應按費用用途而非名稱判斷。', en: 'Directors’ and auditors’ remuneration are normally administrative expenses; selling and delivery-related expenses are normally distribution costs. Classification should follow function rather than name.' },
          { zh: '債券利息列作財務成本。營運利潤扣除財務成本後得出除稅前利潤，再扣除利得稅得出除稅後利潤。', en: 'Debenture interest is shown as a finance cost. Operating profit less finance costs gives profit before tax, and deducting profits tax gives profit after tax.' },
        ],
      },
      {
        title: '保留利潤及股息',
        titleEn: 'Retained Profits and Dividends',
        points: [
          { zh: '保留利潤是公司歷年賺取但未分派給股東的累積利潤，屬股東權益的一部分，可用於再投資或應付未來需要。', en: 'Retained profits are accumulated profits earned but not distributed to shareholders. They form part of equity and may finance reinvestment or future needs.' },
          { zh: '期末保留利潤通常等於期初保留利潤，加除稅後利潤，減已宣派或須確認的股息及轉撥至儲備款項。', en: 'Closing retained profits normally equal opening retained profits plus profit after tax, less dividends declared or recognised and transfers to reserves.' },
          { zh: '股息是向股東分配利潤，不是產生收入的營運費用，因此不應在計算除稅後利潤前扣除。', en: 'Dividends are distributions of profit to shareholders, not operating expenses incurred to earn revenue, so they are not deducted before profit after tax.' },
        ],
      },
      {
        title: '有限公司財務狀況表',
        titleEn: 'Statement of Financial Position for a Limited Company',
        points: [
          { zh: '資產按流動與非流動分類。物業、廠房及設備和長期投資通常屬非流動資產；存貨、應收帳款及銀行存款通常屬流動資產。', en: 'Assets are classified as current or non-current. Property, plant and equipment and long-term investments are normally non-current, while inventory, receivables and bank balances are normally current.' },
          { zh: '負債按到期時間分類。應付稅項及短期應付款通常屬流動負債；非即期償還的債券通常列作非流動負債。', en: 'Liabilities are classified by maturity. Tax payable and short-term payables are normally current liabilities, while debentures not repayable soon are normally non-current liabilities.' },
          { zh: '權益一般包括已發行股本、儲備及保留利潤。檢查時應確認資產總額等於權益加負債總額。', en: 'Equity normally includes issued share capital, reserves and retained profits. Check that total assets equal total equity and liabilities.' },
        ],
      },
      {
        title: '儲備與撥備',
        titleEn: 'Reserves and Provisions',
        points: [
          { zh: '儲備是從利潤或其他權益來源累積的權益項目，不代表一筆獨立現金。一般儲備沒有指定用途；特定儲備則為特定目的保留。', en: 'A reserve is an equity amount accumulated from profit or other equity sources and does not represent a separate pool of cash. A general reserve has no specified purpose, while a specific reserve is retained for a stated purpose.' },
          { zh: '撥備是對時間或金額不確定的負債作出的估計，例如有現時責任且很可能需要付出資源時確認。撥備屬負債或資產扣減項目，不屬權益。', en: 'A provision is an estimate for a liability uncertain in timing or amount, recognised when a present obligation is likely to require resources. It is a liability or contra-asset item rather than equity.' },
          { zh: '儲備是利潤的保留或權益分類，不會直接減少當期利潤；撥備通常作為費用確認，會減少當期利潤。', en: 'A reserve is retained profit or an equity classification and does not directly reduce current profit; a provision is normally recognised as an expense and reduces current profit.' },
        ],
      },
    ],
    terms: [
      { term: '董事酬金', termEn: "Directors' remuneration", definition: '公司支付給董事的酬金，通常列作行政費用。', definitionEn: 'Remuneration paid to company directors, normally classified as an administrative expense.' },
      { term: '核數師酬金', termEn: "Auditors' remuneration", definition: '公司支付給核數師的酬金，通常列作行政費用。', definitionEn: 'Remuneration paid to auditors, normally classified as an administrative expense.' },
      { term: '行政費用', termEn: 'Administrative expenses', definition: '與公司整體管理及行政功能有關的費用。', definitionEn: 'Expenses related to the overall management and administration of a company.' },
      { term: '分銷成本', termEn: 'Distribution costs', definition: '與推廣、銷售及把產品送達顧客有關的費用。', definitionEn: 'Expenses related to promoting, selling and delivering products to customers.' },
      { term: '其他營運費用', termEn: 'Other operating expenses', definition: '不屬主要行政或分銷分類的其他日常營運費用。', definitionEn: 'Other routine operating expenses outside the main administrative or distribution classifications.' },
      { term: '財務成本', termEn: 'Finance costs', definition: '企業使用借貸資金所產生的成本，例如債券利息。', definitionEn: 'Costs arising from the use of borrowed funds, such as debenture interest.' },
      { term: '除稅前利潤', termEn: 'Profit before tax', definition: '扣除包括財務成本在內的費用後，但扣除利得稅前的利潤。', definitionEn: 'Profit after expenses including finance costs but before deducting profits tax.' },
      { term: '利得稅', termEn: 'Profits tax', definition: '按公司應課稅利潤計算的稅項。', definitionEn: 'Tax calculated on a company’s assessable profit.' },
      { term: '除稅後利潤', termEn: 'Profit after tax', definition: '除稅前利潤扣除利得稅後的利潤。', definitionEn: 'Profit before tax after deducting profits tax.' },
      { term: '保留利潤', termEn: 'Retained profits', definition: '公司累積但尚未分派給股東的利潤。', definitionEn: 'Accumulated company profits not yet distributed to shareholders.' },
      { term: '權益', termEn: 'Equity', definition: '公司資產扣除負債後歸屬股東的剩餘權益。', definitionEn: 'The residual interest attributable to shareholders after deducting liabilities from assets.' },
      { term: '儲備', termEn: 'Reserves', definition: '從利潤或其他權益來源累積並列於權益的款項。', definitionEn: 'Amounts accumulated from profit or other equity sources and presented within equity.' },
      { term: '一般儲備', termEn: 'General reserve', definition: '沒有指定用途而從利潤轉撥的儲備。', definitionEn: 'A reserve transferred from profit without a specified purpose.' },
      { term: '特定儲備', termEn: 'Specific reserve', definition: '為指定目的從利潤或權益中保留的儲備。', definitionEn: 'A reserve retained from profit or equity for a specified purpose.' },
      { term: '撥備', termEn: 'Provision', definition: '對時間或金額不確定的現時責任所作估計。', definitionEn: 'An estimate for a present obligation uncertain in timing or amount.' },
      { term: '應付稅項', termEn: 'Tax payable', definition: '公司尚未繳付並列作負債的利得稅。', definitionEn: 'Profits tax not yet paid by a company and shown as a liability.' },
      { term: '物業、廠房及設備', termEn: 'Property, plant and equipment', definition: '公司持有作營運用途的有形非流動資產。', definitionEn: 'Tangible non-current assets held by a company for operating use.' },
      { term: '投資', termEn: 'Investments', definition: '公司持有以賺取回報或達成策略目的的資產。', definitionEn: 'Assets held by a company to earn returns or achieve strategic objectives.' },
    ],
    examTips: [
      { zh: '有限公司損益表題要按次序計算：毛利 → 營運利潤 → 除稅前利潤 → 除稅後利潤；債券利息列作財務成本。', en: 'For a company income statement, calculate in sequence: gross profit, operating profit, profit before tax and profit after tax; show debenture interest as a finance cost.' },
      { zh: '不要混淆儲備與撥備：儲備屬權益及利潤保留；撥備反映預期責任，通常列作費用及負債。', en: 'Do not confuse reserves with provisions: reserves are equity and retained profit, while provisions reflect expected obligations and are normally expenses and liabilities.' },
    ],
    questions: [
      { question: '為何股息不列作有限公司的營運費用？', questionEn: 'Why are dividends not treated as operating expenses of a limited company?', answer: '股息是公司賺取利潤後向股東作出的分派，不是為產生收入而承擔的費用。', answerEn: 'Dividends are distributions to shareholders after profit is earned, not costs incurred to generate revenue.' },
      { question: '債券利息應在損益表哪一部分列示？', questionEn: 'Where should debenture interest be shown in the income statement?', answer: '列作財務成本，從營運利潤扣除以計算除稅前利潤。', answerEn: 'It is shown as a finance cost and deducted from operating profit to calculate profit before tax.' },
      { question: '儲備與撥備對當期利潤的影響有何不同？', questionEn: 'How do reserves and provisions differ in their effect on current profit?', answer: '轉撥至儲備是利潤分配，不直接減少已計算的當期利潤；撥備通常作為費用確認，會減少當期利潤。', answerEn: 'A transfer to reserve is an appropriation and does not directly reduce profit already calculated, while a provision is normally recognised as an expense and reduces current profit.' },
    ],
  },
]
