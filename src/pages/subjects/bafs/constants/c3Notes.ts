import { C1DetailedChapter } from './c1Notes'

export const C3_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'time-value-of-money',
    number: 1,
    title: '貨幣時間價值',
    titleEn: 'Time Value of Money',
    objective: {
      zh: '運用複利、折現、終值、現值、淨現值及實際回報率評估財務選擇。',
      en: 'Use compounding, discounting, future value, present value, net present value and effective rates of return to evaluate financial choices.',
    },
    sections: [
      {
        title: '貨幣時間價值',
        titleEn: 'The Time Value of Money',
        points: [
          { zh: '今天的一元通常比未來的一元更有價值，因為今天的資金可用作投資並賺取回報，而且未來收款存在通脹及風險。', en: 'A dollar today is normally worth more than a dollar in the future because it can be invested to earn a return and future receipts face inflation and risk.' },
          { zh: '複利把本金及已賺取的利息一同再投資；折現則把未來金額轉換為今天的等值。', en: 'Compounding reinvests both principal and interest already earned; discounting converts a future amount into its equivalent value today.' },
        ],
      },
      {
        title: '終值與現值',
        titleEn: 'Future Value and Present Value',
        points: [
          { zh: '終值公式：FV = PV × (1 + r)^n。利率或投資期越高，終值一般越高。', en: 'Future value formula: FV = PV × (1 + r)^n. A higher rate or longer investment period generally produces a higher future value.' },
          { zh: '現值公式：PV = FV ÷ (1 + r)^n。折現率或等待期越高，未來金額的現值一般越低。', en: 'Present value formula: PV = FV ÷ (1 + r)^n. A higher discount rate or longer waiting period generally produces a lower present value.' },
          { zh: '比較不同時間收付款時，應先把所有金額轉換至同一時間點，再作判斷。', en: 'When comparing cash flows at different times, first convert all amounts to the same point in time before making a judgement.' },
        ],
      },
      {
        title: '淨現值',
        titleEn: 'Net Present Value',
        points: [
          { zh: '淨現值是未來現金流入的現值總和減去現金流出的現值總和。', en: 'Net present value is the total present value of future cash inflows minus the total present value of cash outflows.' },
          { zh: '一般而言，正淨現值表示項目在指定折現率下可增加價值；負淨現值表示回報未能補償所需成本。', en: 'In general, a positive NPV indicates that a project adds value at the chosen discount rate; a negative NPV indicates that returns do not compensate for the required cost.' },
          { zh: '淨現值較高不代表項目一定較合適，仍須考慮風險、資金限制及非財務因素。', en: 'A higher NPV does not automatically make a project suitable; risk, funding constraints and non-financial factors must also be considered.' },
        ],
      },
      {
        title: '名義與實際回報率',
        titleEn: 'Nominal and Effective Rates of Return',
        points: [
          { zh: '名義回報率是報價或列明的年度利率，未完全反映一年內複利次數的影響。', en: 'The nominal rate is the quoted annual rate and does not fully reflect the effect of compounding within the year.' },
          { zh: '實際回報率反映複利後一年真正賺取的回報。名義利率相同時，複利越頻密，實際回報率一般越高。', en: 'The effective rate reflects the actual annual return after compounding. With the same nominal rate, more frequent compounding generally produces a higher effective rate.' },
        ],
      },
    ],
    terms: [
      { term: '貨幣時間價值', termEn: 'Time value of money', definition: '資金價值會因可賺取回報、通脹及風險而隨時間改變的概念。', definitionEn: 'The concept that money changes in value over time because of earning potential, inflation and risk.' },
      { term: '複利', termEn: 'Compounding', definition: '本金及已賺取利息一同產生未來利息的過程。', definitionEn: 'The process through which principal and previously earned interest generate future interest.' },
      { term: '折現', termEn: 'Discounting', definition: '把未來金額轉換為今天等值的過程。', definitionEn: 'The process of converting a future amount into its equivalent value today.' },
      { term: '終值', termEn: 'Future value (FV)', definition: '現有資金經過指定投資期後累積的價值。', definitionEn: 'The value to which a current amount grows after a specified investment period.' },
      { term: '現值', termEn: 'Present value (PV)', definition: '未來金額在今天的等值。', definitionEn: 'The value today of an amount to be received or paid in the future.' },
      { term: '淨現值', termEn: 'Net present value (NPV)', definition: '現金流入現值總和減現金流出現值總和。', definitionEn: 'The total present value of cash inflows minus the total present value of cash outflows.' },
      { term: '實際回報率', termEn: 'Effective rate of return', definition: '計及複利頻率後一年實際賺取的回報率。', definitionEn: 'The actual annual return after taking compounding frequency into account.' },
    ],
    examTips: [
      { zh: '計算前先確認利率與期數使用相同單位，並在答案中寫出公式、代入數值及判斷。', en: 'Before calculating, ensure the rate and number of periods use matching units, and show the formula, substituted figures and judgement.' },
      { zh: '評估項目時，不要只寫「淨現值為正所以接受」；應加入風險、資金或非財務因素。', en: 'When evaluating a project, do not only state “accept because NPV is positive”; include risk, finance or non-financial factors.' },
    ],
    questions: [
      { question: '折現率上升時，同一筆未來收入的現值通常如何改變？', questionEn: 'How does the present value of the same future receipt normally change when the discount rate rises?', answer: '現值下降，因為未來收入會用更高折現率折回今天。', answerEn: 'Present value falls because the future receipt is discounted at a higher rate.' },
      { question: '為何相同名義利率下，每月複利的實際回報率通常高於每年複利？', questionEn: 'Why is monthly compounding normally associated with a higher effective return than annual compounding at the same nominal rate?', answer: '利息更早加入本金，並在年內多次產生額外利息。', answerEn: 'Interest is added to principal earlier and earns additional interest more frequently during the year.' },
      { question: '正淨現值代表甚麼？', questionEn: 'What does a positive net present value indicate?', answer: '在指定折現率下，預期現金流入的現值高於現金流出的現值，項目可增加價值。', answerEn: 'At the chosen discount rate, the present value of expected inflows exceeds the present value of outflows, so the project adds value.' },
    ],
  },
  {
    id: 'consumer-credit',
    number: 2,
    title: '消費者信貸',
    titleEn: 'Consumer Credit',
    objective: {
      zh: '比較不同消費者信貸的成本、彈性及風險，並理解維持良好個人信貸紀錄的重要性。',
      en: 'Compare the cost, flexibility and risk of different consumer credit types and understand the importance of maintaining a good personal credit record.',
    },
    sections: [
      {
        title: '消費者信貸種類',
        titleEn: 'Types of Consumer Credit',
        points: [
          { zh: '信用卡提供方便及短期免息期，但若未能全數還款，利息及費用可能很高，並容易引致過度消費。', en: 'Credit cards provide convenience and may offer a short interest-free period, but interest and fees can be high if balances are not fully repaid and may encourage overspending.' },
          { zh: '透支讓銀行帳戶在核准限額內出現負數，使用較靈活，但利率及費用可能較高。', en: 'An overdraft allows a bank account to become negative within an approved limit. It is flexible, but interest and fees may be relatively high.' },
          { zh: '私人貸款通常提供固定金額及還款期；信貸額則可在限額內循環借款；分期貸款按指定期數償還購買成本。', en: 'A personal loan normally provides a fixed amount and repayment period; a line of credit permits revolving borrowing within a limit; instalment credit repays a purchase over set periods.' },
        ],
      },
      {
        title: '比較信貸選擇',
        titleEn: 'Comparing Credit Choices',
        points: [
          { zh: '比較時應考慮實際借貸成本、利率、費用、還款期、每期供款、彈性及逾期後果。', en: 'Comparison should consider effective borrowing cost, interest, fees, repayment period, instalment amount, flexibility and consequences of late payment.' },
          { zh: '較低每期供款不一定代表較便宜；延長還款期可能增加總利息支出。', en: 'A lower instalment does not necessarily mean lower cost; a longer repayment period may increase total interest paid.' },
          { zh: '借貸應配合穩定還款能力及實際需要，不能只根據可借上限作決定。', en: 'Borrowing should match stable repayment ability and genuine needs, rather than being based only on the maximum credit available.' },
        ],
      },
      {
        title: '個人信貸紀錄',
        titleEn: 'Personal Credit Record',
        points: [
          { zh: '個人信貸紀錄反映借貸及還款行為，信貸評分則概括借款人的信貸風險。', en: 'A personal credit record reflects borrowing and repayment behaviour, while a credit score summarises the borrower’s credit risk.' },
          { zh: '準時還款、控制債務水平及避免短期內過度申請信貸，有助維持良好紀錄。', en: 'Paying on time, controlling debt levels and avoiding excessive credit applications within a short period help maintain a good record.' },
          { zh: '良好信貸紀錄可提高獲批機會及改善借貸條件；不良紀錄可能令申請被拒或借貸成本上升。', en: 'A good credit record may improve approval chances and borrowing terms; a poor record may lead to rejection or higher borrowing costs.' },
        ],
      },
    ],
    terms: [
      { term: '消費者信貸', termEn: 'Consumer credit', definition: '讓個人先取得商品、服務或資金，並在日後還款的安排。', definitionEn: 'An arrangement allowing an individual to obtain goods, services or funds now and repay later.' },
      { term: '信用卡', termEn: 'Credit card', definition: '持卡人在信貸限額內購物或借款並日後還款的工具。', definitionEn: 'A facility allowing a cardholder to buy or borrow within a credit limit and repay later.' },
      { term: '透支', termEn: 'Overdraft', definition: '銀行允許帳戶在核准限額內出現負結餘的信貸安排。', definitionEn: 'A credit arrangement allowing a bank account to have a negative balance within an approved limit.' },
      { term: '信貸額', termEn: 'Line of credit', definition: '可在核准限額內重複借款及還款的循環信貸。', definitionEn: 'Revolving credit that permits repeated borrowing and repayment within an approved limit.' },
      { term: '分期信貸', termEn: 'Instalment credit', definition: '把借款或購買成本分成固定期數償還的安排。', definitionEn: 'An arrangement that repays a loan or purchase cost over fixed instalments.' },
      { term: '個人信貸紀錄', termEn: 'Personal credit record', definition: '記錄個人借貸、信貸使用及還款表現的資料。', definitionEn: 'Information recording an individual’s borrowing, credit use and repayment performance.' },
      { term: '信貸評分', termEn: 'Credit score', definition: '用來概括個人信貸風險的評分。', definitionEn: 'A score used to summarise an individual’s credit risk.' },
    ],
    examTips: [
      { zh: '比較信貸時必須比較「總成本」及「還款能力」，不能只比較利率或每期供款。', en: 'When comparing credit, consider both total cost and repayment ability, not only the rate or instalment amount.' },
      { zh: '題目問信貸紀錄的影響時，要連結到批核機會、可借金額或借貸條件。', en: 'When asked about the impact of a credit record, link it to approval chances, borrowing amount or credit terms.' },
    ],
    questions: [
      { question: '為何還款期較長的貸款可能有較高總成本？', questionEn: 'Why may a loan with a longer repayment period have a higher total cost?', answer: '借款人需要在更長期間支付利息，即使每期供款較低，總利息仍可能較高。', answerEn: 'Interest is paid over a longer period, so total interest may be higher even though each instalment is lower.' },
      { question: '準時支付信用卡最低還款額是否一定能避免高昂借貸成本？', questionEn: 'Does paying the minimum credit-card payment on time necessarily avoid high borrowing costs?', answer: '不一定。未清還結餘仍可能產生高額利息，還款時間亦會延長。', answerEn: 'No. The unpaid balance may still incur high interest and take longer to repay.' },
      { question: '良好信貸紀錄如何幫助借款人？', questionEn: 'How can a good credit record help a borrower?', answer: '它可提高信貸申請獲批機會，並可能取得較佳的利率、限額或其他條件。', answerEn: 'It may improve approval chances and provide access to better rates, limits or other terms.' },
    ],
  },
  {
    id: 'personal-financial-planning-investment',
    number: 3,
    title: '個人財務規劃與投資',
    titleEn: 'Personal Financial Planning and Investment',
    objective: {
      zh: '理解風險與回報、主要投資產品、分散投資、人生階段理財、投資者責任及強積金基本概念。',
      en: 'Understand risk and return, major investment products, diversification, life-stage planning, investor responsibilities and basic MPF concepts.',
    },
    sections: [
      {
        title: '風險與回報',
        titleEn: 'Risk and Return',
        points: [
          { zh: '投資回報可來自收入及資本增值；風險是實際回報偏離預期，甚至出現損失的可能性。', en: 'Investment return may come from income and capital gain; risk is the possibility that actual return differs from expectation or results in loss.' },
          { zh: '企業特定風險來自個別企業事件，可透過分散投資降低；市場風險由整體市場因素引致，不能完全透過分散投資消除。', en: 'Firm-specific risk arises from events affecting an individual firm and can be reduced through diversification; market risk arises from market-wide factors and cannot be eliminated completely through diversification.' },
          { zh: '一般而言，投資者要求更高潛在回報以補償較高風險，但高風險亦可能帶來巨大損失。', en: 'In general, investors demand higher potential returns to compensate for higher risk, but high risk may also lead to large losses.' },
        ],
      },
      {
        title: '主要投資產品',
        titleEn: 'Major Investment Products',
        points: [
          { zh: '銀行存款通常風險及預期回報較低。儲蓄存款流動性較高；定期存款在指定期間內限制提取，但通常提供較高利率。', en: 'Bank deposits normally carry lower risk and expected return. Savings deposits offer greater liquidity; term deposits restrict withdrawal for a set period but normally offer a higher rate.' },
          { zh: '債券是投資者向政府或企業借出資金，通常可收取利息及到期本金；主要風險包括違約、利率及價格風險。', en: 'A bond represents lending to a government or company and normally pays interest and principal at maturity; key risks include default, interest-rate and price risk.' },
          { zh: '普通股代表公司擁有權，回報可來自股息及價格上升，但股息及本金並無保證；優先股通常在股息及清盤分配方面優先於普通股。', en: 'Common stock represents company ownership and may return dividends and price gains, but neither dividends nor principal are guaranteed; preferred stock normally has priority over common stock for dividends and liquidation claims.' },
        ],
      },
      {
        title: '個人財務規劃與人生階段',
        titleEn: 'Financial Planning across Life Stages',
        points: [
          { zh: '個人財務規劃包括設定目標、分析收入支出及資產負債、制定預算、管理風險、執行計劃及定期檢討。', en: 'Personal financial planning includes setting goals, analysing income, expenses, assets and liabilities, budgeting, managing risk, implementing the plan and reviewing it regularly.' },
          { zh: '年輕單身人士可能重視建立應急儲備及技能；成家及育兒階段可能增加住房、保障及教育需要；退休前後則更重視退休儲備、醫療及穩定收入。', en: 'Young single people may focus on emergency savings and skills; marriage and child-raising may increase housing, protection and education needs; pre-retirement and retirement place greater emphasis on retirement savings, healthcare and stable income.' },
          { zh: '理財方案應隨收入、家庭責任、時間範圍及承受風險能力改變。', en: 'Financial plans should change with income, family responsibilities, time horizon and risk tolerance.' },
        ],
      },
      {
        title: '投資者責任與強積金',
        titleEn: 'Investor Responsibilities and MPF',
        points: [
          { zh: '投資者有權獲得清晰資料及公平對待，亦有責任了解產品、閱讀文件、評估風險、保護帳戶資料及監察交易。', en: 'Investors have rights to clear information and fair treatment, and responsibilities to understand products, read documents, assess risk, protect account information and monitor transactions.' },
          { zh: '強積金制度協助合資格僱員及自僱人士作退休儲蓄。參與者應了解計劃、供款安排、基金風險、費用及自己的權利與責任。', en: 'The MPF System helps eligible employees and self-employed persons save for retirement. Participants should understand schemes, contribution arrangements, fund risks, fees and their rights and responsibilities.' },
          { zh: '強積金屬長期退休儲蓄，不應只根據短期市場表現頻繁轉換基金。', en: 'MPF is long-term retirement saving and funds should not be switched frequently based only on short-term market performance.' },
        ],
      },
    ],
    terms: [
      { term: '投資回報', termEn: 'Return on investment', definition: '投資所產生的收入及資本增值或損失。', definitionEn: 'Income and capital gain or loss generated by an investment.' },
      { term: '企業特定風險', termEn: 'Firm-specific risk', definition: '由個別企業事件引致，可透過分散投資降低的風險。', definitionEn: 'Risk caused by events affecting an individual firm that can be reduced through diversification.' },
      { term: '市場風險', termEn: 'Market risk', definition: '由整體市場因素引致，不能完全透過分散投資消除的風險。', definitionEn: 'Risk caused by market-wide factors that cannot be eliminated completely through diversification.' },
      { term: '風險回報取捨', termEn: 'Risk-return trade-off', definition: '較高潛在回報通常伴隨較高風險的關係。', definitionEn: 'The relationship in which higher potential return is normally associated with higher risk.' },
      { term: '分散投資', termEn: 'Risk diversification', definition: '把資金分配至不同投資以降低企業特定風險。', definitionEn: 'Spreading funds across different investments to reduce firm-specific risk.' },
      { term: '債券', termEn: 'Bond', definition: '投資者向政府或企業借出資金的債務證券。', definitionEn: 'A debt security through which an investor lends money to a government or company.' },
      { term: '普通股', termEn: 'Common stock', definition: '代表公司擁有權，並通常具有投票權的股份。', definitionEn: 'Shares representing company ownership and normally carrying voting rights.' },
      { term: '強積金制度', termEn: 'Mandatory Provident Fund (MPF) System', definition: '為合資格僱員及自僱人士建立的強制退休儲蓄制度。', definitionEn: 'A mandatory retirement savings system for eligible employees and self-employed persons.' },
    ],
    examTips: [
      { zh: '投資建議必須連結投資者的目標、時間範圍、流動性需要及承受風險能力。', en: 'Investment recommendations must be linked to the investor’s goals, time horizon, liquidity needs and risk tolerance.' },
      { zh: '不要寫「分散投資消除所有風險」；它主要降低企業特定風險，不能消除整體市場風險。', en: 'Do not state that diversification eliminates all risk; it mainly reduces firm-specific risk and cannot eliminate market risk.' },
    ],
    questions: [
      { question: '為何分散投資不能完全消除市場風險？', questionEn: 'Why can diversification not completely eliminate market risk?', answer: '市場風險由利率、經濟衰退或市場情緒等整體因素引致，會同時影響很多投資。', answerEn: 'Market risk comes from broad factors such as interest rates, recession or market sentiment that affect many investments at the same time.' },
      { question: '接近退休人士的投資需要通常如何不同於年輕投資者？', questionEn: 'How do the investment needs of a person near retirement normally differ from those of a young investor?', answer: '接近退休人士通常時間範圍較短，更重視保本、流動性及穩定收入，並可能承受較低風險。', answerEn: 'A person near retirement normally has a shorter time horizon, values capital preservation, liquidity and stable income, and may tolerate less risk.' },
      { question: '投資者在購買金融產品前有甚麼主要責任？', questionEn: 'What key responsibilities does an investor have before buying a financial product?', answer: '了解產品及費用、閱讀文件、評估風險是否適合自身需要，並只在理解後作出決定。', answerEn: 'Understand the product and fees, read documents, assess whether risks suit personal needs and decide only after understanding them.' },
    ],
  },
  {
    id: 'stock-trading-investment',
    number: 4,
    title: '股票投資',
    titleEn: 'Stock Trading as an Investment',
    objective: {
      zh: '理解影響股價的因素、香港股票交易平台及恆生指數的重要性。',
      en: 'Understand factors affecting stock prices, Hong Kong stock-trading platforms and the importance of the Hang Seng Index.',
    },
    sections: [
      {
        title: '影響股價的因素',
        titleEn: 'Factors Affecting Stock Prices',
        points: [
          { zh: '股價由市場供求決定。企業盈利、股息、增長前景、管理表現及重大消息會改變投資者對股票的需求。', en: 'Stock prices are determined by market demand and supply. Profit, dividends, growth prospects, management performance and major news affect investor demand.' },
          { zh: '利率、通脹、經濟增長、政府政策、匯率及市場情緒等整體因素亦會影響股價。', en: 'Broad factors such as interest rates, inflation, economic growth, government policy, exchange rates and market sentiment also affect prices.' },
          { zh: '好消息不一定令股價上升，因為市場價格可能已反映預期；真正影響價格的是新資料與原有預期的差距。', en: 'Good news does not necessarily raise a stock price because expectations may already be reflected; prices respond to the difference between new information and prior expectations.' },
        ],
      },
      {
        title: '股票交易所及香港市場',
        titleEn: 'Stock Exchanges and the Hong Kong Market',
        points: [
          { zh: '股票交易所為證券買賣提供有組織及受規管的市場，有助價格發現、流通性及投資者交易。', en: 'A stock exchange provides an organised and regulated market for securities trading and supports price discovery, liquidity and investor transactions.' },
          { zh: '香港交易及結算所有限公司營運香港的證券及衍生產品市場，並提供相關結算服務。', en: 'Hong Kong Exchanges and Clearing Limited operates Hong Kong securities and derivatives markets and provides related clearing services.' },
          { zh: '主板與 GEM 服務不同發展階段及特徵的企業。投資者應比較上市要求、企業規模、風險及披露資料，而不應假設上市等同低風險。', en: 'The Main Board and GEM serve companies at different development stages and with different characteristics. Investors should compare listing requirements, company size, risk and disclosures rather than assume listing means low risk.' },
        ],
      },
      {
        title: '恆生指數',
        titleEn: 'Hang Seng Index',
        points: [
          { zh: '股票市場指數用一組代表性成分股概括市場或市場部分的價格表現。', en: 'A stock market index uses a group of representative constituent stocks to summarise the price performance of a market or market segment.' },
          { zh: '恆生指數是觀察香港股票市場表現的重要指標，可用於比較投資表現、分析市場趨勢及反映投資者情緒。', en: 'The Hang Seng Index is an important indicator of Hong Kong stock-market performance and may be used to compare investment performance, analyse trends and reflect investor sentiment.' },
          { zh: '指數上升不代表所有股票上升；成分股及其權重會令不同股票對指數有不同影響。', en: 'A rising index does not mean every stock rises; constituents and their weights cause different stocks to have different effects on the index.' },
        ],
      },
    ],
    terms: [
      { term: '證券', termEn: 'Securities', definition: '可交易並代表擁有權、債權或其他財務權益的金融工具。', definitionEn: 'Tradable financial instruments representing ownership, debt or other financial interests.' },
      { term: '股票交易所', termEn: 'Stock exchange', definition: '為證券買賣提供有組織及受規管市場的機構。', definitionEn: 'An institution providing an organised and regulated market for securities trading.' },
      { term: '香港交易所', termEn: 'Hong Kong Exchanges and Clearing Limited (HKEX)', definition: '營運香港證券及衍生產品市場並提供相關結算服務的機構。', definitionEn: 'The organisation operating Hong Kong securities and derivatives markets and related clearing services.' },
      { term: '主板', termEn: 'Main Board', definition: '香港股票市場的主要上市平台之一。', definitionEn: 'One of the principal listing platforms in the Hong Kong stock market.' },
      { term: 'GEM', termEn: 'GEM', definition: '香港股票市場中服務特定發展階段企業的上市平台。', definitionEn: 'A Hong Kong listing platform serving companies with particular development-stage characteristics.' },
      { term: '股票市場指數', termEn: 'Stock market index', definition: '用一組成分股概括市場或市場部分價格表現的指標。', definitionEn: 'An indicator using a group of constituent stocks to summarise market or segment price performance.' },
      { term: '恆生指數', termEn: 'Hang Seng Index (HSI)', definition: '反映香港股票市場表現的重要股票市場指數。', definitionEn: 'A major stock market index reflecting the performance of the Hong Kong stock market.' },
    ],
    examTips: [
      { zh: '分析股價因素時，需指出因素如何改變預期盈利、風險或股票供求，避免只列出因素名稱。', en: 'When analysing a stock-price factor, explain how it changes expected profit, risk or demand and supply rather than only naming it.' },
      { zh: '解釋指數時要說明它反映一組成分股，不代表每一隻股票的表現。', en: 'When explaining an index, state that it reflects a group of constituents and does not represent every stock’s performance.' },
    ],
    questions: [
      { question: '中央銀行加息可能如何影響股價？', questionEn: 'How may a rise in interest rates affect stock prices?', answer: '借貸成本可能上升並壓低企業盈利，存款或債券亦可能變得更吸引，令股票需求及價格受壓。', answerEn: 'Borrowing costs may rise and reduce company profit, while deposits or bonds may become more attractive, putting pressure on stock demand and prices.' },
      { question: '恆生指數上升是否代表所有香港上市股票都上升？', questionEn: 'Does a rise in the Hang Seng Index mean that every Hong Kong-listed stock has risen?', answer: '不是。指數只反映成分股的整體加權表現，個別非成分股或部分成分股仍可下跌。', answerEn: 'No. The index reflects the aggregate weighted performance of its constituents; individual non-constituents or some constituents may still fall.' },
      { question: '股票交易所為投資者提供甚麼主要作用？', questionEn: 'What main functions does a stock exchange provide to investors?', answer: '它提供有組織及受規管的交易市場，並支援流通性、價格發現及交易結算。', answerEn: 'It provides an organised and regulated trading market and supports liquidity, price discovery and settlement.' },
    ],
  },
]
