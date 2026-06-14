import { C1DetailedChapter } from './c1Notes'

export const B9_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'working-capital-management',
    number: 1,
    title: '營運資金管理',
    titleEn: 'Working Capital Management',
    objective: {
      zh: '理解營運資金管理的重要性，掌握現金、應收帳款、應付帳款及存貨管理的主要原則，並能運用基本工具改善企業流動性。',
      en: 'Understand the importance of working capital management, master key principles of cash, accounts receivable, accounts payable and inventory management, and use basic tools to improve business liquidity.',
    },
    sections: [
      {
        title: '營運資金與現金轉換週期',
        titleEn: 'Working Capital and Cash Conversion Cycle',
        points: [
          { zh: '營運資金管理是管理流動資產和流動負債的過程，包括現金、存貨、應收帳款及應付帳款。', en: 'Working capital management is the process of managing current assets and current liabilities, including cash, inventory, accounts receivable and accounts payable.' },
          { zh: '營運資金不足會令企業難以支付供應商、工資和日常開支；過多營運資金則可能代表資金閒置，降低盈利能力。', en: 'Insufficient working capital makes it difficult to pay suppliers, wages and daily expenses; excessive working capital may mean idle funds and lower profitability.' },
          { zh: '營運週期描述企業由購買存貨、生產或銷售、收回應收帳款到取得現金的過程。', en: 'The operating cycle describes the process from buying inventory, production or sales, collecting receivables and receiving cash.' },
          { zh: '現金轉換週期 = 存貨周轉期 + 應收帳款收款期 - 應付帳款付款期。週期越短，資金被佔用的時間通常越少。', en: 'Cash conversion cycle = inventory holding period + receivables collection period - payables payment period. A shorter cycle usually means funds are tied up for less time.' },
        ],
      },
      {
        title: '現金管理與現金預算',
        titleEn: 'Cash Management and Cash Budgeting',
        points: [
          { zh: '現金管理的基本目標是在保持足夠流動性的同時，避免持有過多低回報現金。', en: 'The basic goal of cash management is to maintain sufficient liquidity while avoiding excessive low-return cash holdings.' },
          { zh: '現金浮差是付款或收款在帳面記錄與實際清算之間的時間差。有效管理浮差可加快收款和延遲不必要的付款。', en: 'Float is the time difference between book recording and actual clearing of payments or receipts. Effective float management speeds up collections and delays unnecessary payments.' },
          { zh: '現金預算預測未來現金流入、流出及期末現金結餘，有助企業預早發現現金盈餘或短缺。', en: 'A cash budget forecasts future cash inflows, outflows and ending cash balances, helping a firm detect cash surplus or deficiency early.' },
          { zh: '若出現現金盈餘，企業可短期投資、償還高息貸款或增加存貨折扣採購；若出現現金短缺，可安排透支、催收帳款、延遲非必要開支或縮減存貨。', en: 'For a cash surplus, a firm may make short-term investments, repay high-interest loans or buy inventory with discounts; for a cash deficiency, it may arrange overdraft, speed up collections, delay non-essential spending or reduce inventory.' },
        ],
      },
      {
        title: '應收帳款管理',
        titleEn: 'Accounts Receivable Management',
        points: [
          { zh: '給予商業信用可增加銷售及吸引顧客，但會增加壞帳、收款成本和資金被佔用的風險。', en: 'Granting trade credit can increase sales and attract customers, but increases bad debts, collection costs and funds tied up in receivables.' },
          { zh: '應收帳款政策包括信貸標準、信貸條款和收款政策。企業要在銷售增長與信貸風險之間取得平衡。', en: 'Accounts receivable policy includes credit standards, credit terms and collection policy. A firm must balance sales growth and credit risk.' },
          { zh: '5Cs 信貸分析包括品格、能力、資本、抵押品及情況。它們協助企業判斷顧客是否值得賒銷。', en: 'The 5Cs of credit analysis are character, capacity, capital, collateral and conditions. They help judge whether customers deserve credit.' },
          { zh: '信貸條款包括信貸期、現金折扣及現金折扣期。例如「2/10, n/30」表示十日內付款可享 2% 折扣，否則三十日內付清。', en: 'Credit terms include credit period, cash discount and cash discount period. For example, “2/10, n/30” means a 2% discount if paid within 10 days, otherwise full payment within 30 days.' },
        ],
      },
      {
        title: '應付帳款管理',
        titleEn: 'Accounts Payable Management',
        points: [
          { zh: '應付帳款是企業向供應商取得的短期信用，可改善現金流並減少即時融資需要。', en: 'Accounts payable is short-term credit obtained from suppliers. It improves cash flow and reduces immediate financing needs.' },
          { zh: '企業可利用供應商信貸期延遲付款，但若拖欠或過度延遲，會損害信用、失去折扣或被要求現金交易。', en: 'A firm may use supplier credit periods to delay payment, but overdue or excessive delay damages credit, loses discounts or leads to cash-only trading.' },
          { zh: '制定應付帳款政策時，要考慮信用條款、現金折扣、資金成本、供應商關係、議價能力及現金流需要。', en: 'When setting accounts payable policy, consider credit terms, cash discounts, cost of funds, supplier relationships, bargaining power and cash flow needs.' },
        ],
      },
      {
        title: '存貨管理與 EOQ',
        titleEn: 'Inventory Management and EOQ',
        points: [
          { zh: '存貨管理的目標是在避免缺貨和過量存貨之間取得平衡，既保障銷售和生產，又控制資金佔用和倉儲成本。', en: 'Inventory management aims to balance avoiding stockouts and excess inventory, protecting sales and production while controlling funds tied up and storage costs.' },
          { zh: '訂貨成本包括下訂單、運輸、驗收和行政處理成本；持貨成本包括倉租、保險、損耗、過時和資金成本。', en: 'Ordering costs include placing orders, transport, inspection and administration; carrying costs include storage, insurance, wastage, obsolescence and capital cost.' },
          { zh: '經濟訂貨量是令總訂貨成本和總持貨成本最低的訂貨量。常用公式是 EOQ = √(2DO / H)，其中 D 是年需求量，O 是每次訂貨成本，H 是每單位年持貨成本。', en: 'Economic order quantity minimises total ordering and carrying costs. A common formula is EOQ = √(2DO / H), where D is annual demand, O is ordering cost per order and H is annual carrying cost per unit.' },
          { zh: '再訂貨水平是企業應重新訂貨的存貨水平，通常取決於日常用量、交貨時間及安全存貨。', en: 'Re-order level is the inventory level at which a firm should place a new order. It usually depends on daily usage, lead time and safety stock.' },
          { zh: '安全存貨可降低需求突然增加或供應延誤造成的缺貨風險，但會增加持貨成本。', en: 'Safety stock reduces the risk of stockouts from sudden demand increases or supply delays, but increases carrying costs.' },
        ],
      },
      {
        title: '營運資金決策的取捨',
        titleEn: 'Trade-offs in Working Capital Decisions',
        points: [
          { zh: '較寬鬆的信貸政策可能增加銷售，但同時增加壞帳和收款期；較嚴格政策可降低風險，但可能失去顧客。', en: 'A more lenient credit policy may increase sales but also bad debts and collection period; a stricter policy reduces risk but may lose customers.' },
          { zh: '提高存貨水平可降低缺貨風險，但會增加持貨成本；降低存貨可釋放現金，但可能影響銷售或生產。', en: 'Higher inventory reduces stockout risk but increases carrying cost; lower inventory releases cash but may affect sales or production.' },
          { zh: '高分答案應說明流動性與盈利能力的取捨，再根據企業情境提出可執行建議。', en: 'Strong answers explain the trade-off between liquidity and profitability, then provide practical recommendations based on the case.' },
        ],
      },
    ],
    terms: [
      { term: '營運資金管理', termEn: 'Working capital management', definition: '管理流動資產和流動負債以維持流動性和盈利能力的活動。', definitionEn: 'Managing current assets and current liabilities to maintain liquidity and profitability.' },
      { term: '營運週期', termEn: 'Operating cycle', definition: '由購買存貨至收回銷售現金的過程。', definitionEn: 'The process from purchasing inventory to collecting cash from sales.' },
      { term: '現金轉換週期', termEn: 'Cash conversion cycle', definition: '資金由支付存貨至收回現金所需的淨時間。', definitionEn: 'The net time required from paying for inventory to collecting cash.' },
      { term: '現金浮差', termEn: 'Float', definition: '付款或收款在帳面記錄與實際清算之間的時間差。', definitionEn: 'The time difference between book recording and actual clearing of receipts or payments.' },
      { term: '現金預算', termEn: 'Cash budget', definition: '預測未來現金流入、流出和現金結餘的預算。', definitionEn: 'A budget forecasting future cash inflows, outflows and cash balances.' },
      { term: '應收帳款政策', termEn: 'Accounts receivable policy', definition: '企業向顧客提供信用及收款的規則。', definitionEn: 'Rules for granting credit to customers and collecting debts.' },
      { term: '信貸標準', termEn: 'Credit standards', definition: '決定是否給予顧客賒銷的要求。', definitionEn: 'Requirements used to decide whether customers receive credit.' },
      { term: '5Cs 信貸分析', termEn: '5Cs of credit analysis', definition: '品格、能力、資本、抵押品及情況五項信貸評估因素。', definitionEn: 'Five credit assessment factors: character, capacity, capital, collateral and conditions.' },
      { term: '信貸條款', termEn: 'Credit terms', definition: '規定顧客付款期、折扣和付款要求的條款。', definitionEn: 'Terms specifying payment period, discounts and payment requirements.' },
      { term: '收款政策', termEn: 'Collection policy', definition: '企業追收應收帳款的程序和力度。', definitionEn: 'The procedures and intensity used to collect receivables.' },
      { term: '經濟訂貨量', termEn: 'Economic order quantity', definition: '令訂貨成本和持貨成本總和最低的訂貨量。', definitionEn: 'The order quantity that minimises total ordering and carrying costs.' },
      { term: '再訂貨水平', termEn: 'Re-order level', definition: '需要重新訂貨的存貨水平。', definitionEn: 'The inventory level at which a new order should be placed.' },
      { term: '安全存貨', termEn: 'Safety stock', definition: '為應付需求或供應不確定性而額外持有的存貨。', definitionEn: 'Extra inventory held to deal with demand or supply uncertainty.' },
    ],
    examTips: [
      { zh: '營運資金題要連接現金、存貨、應收及應付帳款，不要只孤立討論一項。', en: 'For working capital questions, connect cash, inventory, receivables and payables instead of discussing one item alone.' },
      { zh: '信貸政策題要寫「銷售增加」和「壞帳／現金流風險增加」兩面，再作取捨。', en: 'For credit policy questions, discuss both higher sales and higher bad debt or cash flow risk, then make a judgement.' },
      { zh: 'EOQ 和再訂貨水平題要分清：EOQ 決定每次訂多少；再訂貨水平決定何時再訂。', en: 'For EOQ and re-order level questions, distinguish them clearly: EOQ decides how much to order; re-order level decides when to order.' },
    ],
    questions: [
      { question: '為何企業不應持有過多現金？', questionEn: 'Why should a business not hold excessive cash?', answer: '過多現金流動性高但回報低，可能代表資金未被有效投資，降低盈利能力。', answerEn: 'Excessive cash is liquid but earns low returns, meaning funds may not be invested efficiently and profitability may fall.' },
      { question: '放寬信貸政策有何好處和風險？', questionEn: 'What are the benefit and risk of relaxing credit policy?', answer: '好處是可吸引更多顧客和增加銷售；風險是壞帳、收款成本和應收帳款資金佔用增加。', answerEn: 'It may attract more customers and increase sales; the risks are higher bad debts, collection costs and funds tied up in receivables.' },
      { question: '安全存貨為何會增加成本？', questionEn: 'Why does safety stock increase cost?', answer: '安全存貨需要倉儲、保險和管理，亦佔用資金，可能增加損耗或過時風險。', answerEn: 'Safety stock requires storage, insurance and management, ties up funds and may increase wastage or obsolescence risk.' },
    ],
  },
  {
    id: 'risk-management',
    number: 2,
    title: '風險管理',
    titleEn: 'Risk Management',
    objective: {
      zh: '辨認企業面對的主要風險，理解風險管理程序、可保風險條件、風險處理策略及常見商業保險。',
      en: 'Identify major risks faced by businesses, and understand the risk management process, conditions of insurable risks, risk handling strategies and common business insurance protection.',
    },
    sections: [
      {
        title: '風險與風險管理程序',
        titleEn: 'Risk and Risk Management Process',
        points: [
          { zh: '風險是實際結果與預期結果不同而造成損失或不確定性的可能性。企業風險可影響成本、收入、聲譽、法律責任和持續營運。', en: 'Risk is the possibility of loss or uncertainty when actual outcomes differ from expected outcomes. Business risks can affect costs, revenue, reputation, legal liability and continuity.' },
          { zh: '風險管理是有系統地辨認、評估及處理風險，以降低損失頻率和損失嚴重程度。', en: 'Risk management systematically identifies, evaluates and handles risks to reduce loss frequency and loss severity.' },
          { zh: '基本程序包括辨認風險、評估損失頻率和嚴重程度、選擇風險管理策略、執行方案，以及定期檢討。', en: 'The basic process includes identifying risks, assessing loss frequency and severity, choosing risk management strategies, implementing plans and reviewing regularly.' },
        ],
      },
      {
        title: '風險分類',
        titleEn: 'Classifications of Risk',
        points: [
          { zh: '純粹風險只有損失或沒有損失兩種結果，例如火災、盜竊、意外或法律索償，通常較適合保險。', en: 'Pure risk has only loss or no loss outcomes, such as fire, theft, accidents or legal claims, and is usually more suitable for insurance.' },
          { zh: '投機風險可能帶來損失、沒有損失或收益，例如投資、匯率變動、新產品推出和價格波動，通常不可投保。', en: 'Speculative risk may bring loss, no loss or gain, such as investment, exchange rate changes, new product launches and price fluctuations, and is usually not insurable.' },
          { zh: '個人風險涉及員工或關鍵人物死亡、受傷或疾病；財產風險涉及資產損壞或損失；責任風險涉及對第三者的法律責任。', en: 'Personal risk involves death, injury or illness of employees or key persons; property risk involves damage or loss of assets; liability risk involves legal responsibility to third parties.' },
        ],
      },
      {
        title: '保險與可保風險',
        titleEn: 'Insurance and Insurable Risks',
        points: [
          { zh: '保險是把可保風險轉移給保險人的安排。投保人支付保費，保險人在受保事件發生時按保單賠償。', en: 'Insurance is an arrangement for transferring insurable risks to an insurer. The policyholder pays premiums and the insurer compensates according to the policy when insured events occur.' },
          { zh: '保險相關人士包括受保人、投保人、保險人和受益人。它們可能是同一人，也可能是不同人士或機構。', en: 'Insurance parties include the insured, policyholder, insurer and beneficiary. They may be the same person or different persons or organisations.' },
          { zh: '可保風險通常要符合五項條件：損失可量度、損失屬偶然、存在大量相似風險單位、保費合理，以及損失不會同時影響大量受保者至保險人無法承擔。', en: 'An insurable risk usually meets five conditions: measurable loss, accidental loss, many similar exposure units, affordable premium, and losses not affecting many insured parties at the same time beyond the insurer’s capacity.' },
          { zh: '不可保風險通常包括商業投資失敗、價格下跌、需求改變或企業管理錯誤等投機風險。', en: 'Non-insurable risks usually include speculative risks such as business investment failure, price falls, demand changes or management mistakes.' },
        ],
      },
      {
        title: '風險管理策略',
        titleEn: 'Risk Management Strategies',
        points: [
          { zh: '風險避免是停止或不進行帶有風險的活動，例如不進入治安差的市場。它可消除風險，但亦可能放棄收益機會。', en: 'Risk avoidance means stopping or not undertaking a risky activity, such as not entering a high-crime market. It removes risk but may give up earning opportunities.' },
          { zh: '風險承擔是企業自行承受風險，適合損失金額小、頻率低或轉移成本過高的風險。', en: 'Risk assumption means bearing the risk internally. It suits risks with small loss amount, low frequency or excessive transfer cost.' },
          { zh: '風險減低包括損失預防和損失減少。損失預防降低事故發生機會；損失減少降低事故發生後的損害。', en: 'Risk reduction includes loss prevention and loss reduction. Loss prevention reduces the chance of incidents; loss reduction reduces damage after incidents occur.' },
          { zh: '風險轉移是把風險轉給其他人承擔，例如購買保險、外判高風險工序或在合約中加入責任條款。', en: 'Risk transfer shifts risk to another party, such as buying insurance, outsourcing high-risk work or including liability clauses in contracts.' },
        ],
      },
      {
        title: '常見商業保險',
        titleEn: 'Common Business Insurance Protection',
        points: [
          { zh: '汽車第三者責任保險保障企業車輛對第三者造成的人身傷害或財產損失；綜合汽車保險保障範圍較廣，可包括本身車輛損失。', en: 'Third-party motor insurance covers injury or property damage caused to third parties by business vehicles; comprehensive motor insurance provides wider cover and may include damage to the firm’s own vehicle.' },
          { zh: '忠誠保證保險保障企業因員工欺詐、偷竊或不誠實行為而遭受的損失。', en: 'Fidelity guarantee insurance covers losses caused by employee fraud, theft or dishonest acts.' },
          { zh: '公眾責任保險保障企業因營業活動令公眾受傷或財物受損而產生的法律責任。', en: 'Public liability insurance covers legal liability when business activities cause injury or property damage to the public.' },
          { zh: '僱員補償保險保障僱員因工作受傷或患職業病所引起的僱主法律責任，在香港對僱主尤其重要。', en: 'Employees’ compensation insurance covers employer liability for work injuries or occupational diseases and is especially important for employers in Hong Kong.' },
        ],
      },
      {
        title: '按情境選擇風險策略',
        titleEn: 'Choosing Strategies According to Situation',
        points: [
          { zh: '高頻率且高嚴重程度的風險要優先處理，通常需要結合預防、減低和轉移，例如珠寶店防盜和購買保險。', en: 'High-frequency and high-severity risks should be prioritised and often require a combination of prevention, reduction and transfer, such as anti-theft measures and insurance for jewellery stores.' },
          { zh: '低頻率但高嚴重程度的風險，例如火災或大型法律索償，常需要保險和應急計劃。', en: 'Low-frequency but high-severity risks, such as fire or major legal claims, often require insurance and contingency planning.' },
          { zh: '低嚴重程度風險可由企業自行承擔，但仍要監察其是否因環境變化而變得更嚴重。', en: 'Low-severity risks may be assumed by the firm, but should still be monitored in case environmental changes make them more serious.' },
        ],
      },
    ],
    terms: [
      { term: '風險', termEn: 'Risk', definition: '實際結果與預期不同而造成損失或不確定性的可能性。', definitionEn: 'The possibility of loss or uncertainty when actual outcomes differ from expected outcomes.' },
      { term: '風險管理', termEn: 'Risk management', definition: '辨認、評估和處理風險以降低損失的管理過程。', definitionEn: 'The management process of identifying, evaluating and handling risks to reduce losses.' },
      { term: '損失頻率', termEn: 'Loss frequency', definition: '某類損失發生的次數或機會。', definitionEn: 'The number or chance of occurrence of a type of loss.' },
      { term: '損失嚴重程度', termEn: 'Loss severity', definition: '損失一旦發生所造成的金額或影響程度。', definitionEn: 'The amount or impact caused when a loss occurs.' },
      { term: '純粹風險', termEn: 'Pure risk', definition: '只有損失或沒有損失兩種結果的風險。', definitionEn: 'A risk with only loss or no loss outcomes.' },
      { term: '投機風險', termEn: 'Speculative risk', definition: '可能帶來損失、沒有損失或收益的風險。', definitionEn: 'A risk that may bring loss, no loss or gain.' },
      { term: '可保風險', termEn: 'Insurable risk', definition: '符合保險條件並可由保險人承保的風險。', definitionEn: 'A risk meeting insurance conditions and acceptable by insurers.' },
      { term: '風險避免', termEn: 'Risk avoidance', definition: '不進行或停止帶有風險的活動。', definitionEn: 'Not undertaking or stopping a risky activity.' },
      { term: '風險承擔', termEn: 'Risk assumption', definition: '由企業自行承受風險及其損失。', definitionEn: 'The firm bears the risk and related losses itself.' },
      { term: '風險減低', termEn: 'Risk reduction', definition: '降低損失發生機會或降低損失影響。', definitionEn: 'Reducing the chance of loss or reducing its impact.' },
      { term: '風險轉移', termEn: 'Risk transfer', definition: '把風險或損失責任轉交其他人士或機構。', definitionEn: 'Shifting risk or loss responsibility to another person or organisation.' },
      { term: '公眾責任保險', termEn: 'Public liability insurance', definition: '保障企業對公眾人身傷害或財物損失的法律責任。', definitionEn: 'Insurance covering legal liability for injury or property damage to the public.' },
      { term: '僱員補償保險', termEn: 'Employees’ compensation insurance', definition: '保障僱主對工作傷害或職業病的法律責任。', definitionEn: 'Insurance covering employer liability for work injuries or occupational diseases.' },
    ],
    examTips: [
      { zh: '風險題要先分類，再選策略。不要一見風險就只寫「買保險」，因為有些風險不可保或不值得投保。', en: 'For risk questions, classify the risk before choosing a strategy. Do not always write “buy insurance” because some risks are non-insurable or not worth insuring.' },
      { zh: '選擇風險策略時，要根據損失頻率和嚴重程度判斷，並說明策略如何降低頻率、嚴重程度或轉移損失。', en: 'When choosing risk strategies, judge by loss frequency and severity, and explain how the strategy reduces frequency, reduces severity or transfers loss.' },
      { zh: '保險題要寫清楚保障的是哪一種損失和法律責任，例如公眾責任保險不是保障企業自己的存貨損失。', en: 'For insurance questions, state clearly which loss or liability is covered. For example, public liability insurance does not cover the firm’s own inventory loss.' },
    ],
    questions: [
      { question: '為何投機風險通常不可投保？', questionEn: 'Why is speculative risk usually non-insurable?', answer: '投機風險可能帶來收益或損失，與企業決策和市場表現有關，損失難以符合偶然和可預測的大量相似風險條件。', answerEn: 'Speculative risk may bring gain or loss and is linked to business decisions and market performance, so losses may not satisfy accidental and predictable large-number conditions.' },
      { question: '珠寶店可如何處理盜竊風險？', questionEn: 'How can a jewellery store manage theft risk?', answer: '可安裝閉路電視、保安系統和保險箱作風險減低，培訓員工和限制存貨展示，並購買保險轉移部分損失。', answerEn: 'It can use CCTV, security systems and safes for risk reduction, train staff and limit stock display, and buy insurance to transfer part of the loss.' },
      { question: '企業為何需要僱員補償保險？', questionEn: 'Why does a business need employees’ compensation insurance?', answer: '它保障僱員工作受傷或患職業病引起的僱主法律責任，避免事故造成重大現金流和法律壓力。', answerEn: 'It covers employer liability for work injuries or occupational diseases and prevents accidents from creating major cash flow and legal pressure.' },
    ],
  },
]
