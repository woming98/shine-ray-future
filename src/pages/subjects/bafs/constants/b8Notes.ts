import { C1DetailedChapter } from './c1Notes'

export const B8_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'sources-of-financing',
    number: 1,
    title: '融資來源',
    titleEn: 'Sources of Financing',
    objective: {
      zh: '比較不同融資來源的特點、優點及限制，並能按企業情境建議合適的短期、長期、債務、股本、內部或外部融資方法。',
      en: 'Compare the features, advantages and limitations of different sources of financing, and suggest suitable short-term, long-term, debt, equity, internal or external financing methods for business situations.',
    },
    sections: [
      {
        title: '融資的目的與常見方法',
        titleEn: 'Purposes and Common Methods of Financing',
        points: [
          { zh: '企業需要融資以支持日常營運、購買存貨、支付工資、擴展業務、購買非流動資產或應付短期現金流壓力。', en: 'A business needs financing to support daily operations, buy inventory, pay wages, expand, purchase non-current assets or handle short-term cash flow pressure.' },
          { zh: '常見融資方法包括保留盈利、出售資產、商業信用、銀行透支、銀行貸款、租購、租賃、發行股份及發行債券。', en: 'Common financing methods include retained profits, sale of assets, trade credit, bank overdraft, bank loan, hire purchase, leasing, issue of shares and issue of debentures.' },
          { zh: '選擇融資方法時，企業應考慮資金用途、金額、期限、成本、風險、控制權、抵押要求、還款能力及企業形象。', en: 'When choosing financing methods, a firm should consider purpose, amount, duration, cost, risk, control, collateral requirements, repayment ability and business image.' },
        ],
      },
      {
        title: '短期與長期融資',
        titleEn: 'Short-term and Long-term Financing',
        points: [
          { zh: '短期融資通常用於一年內的資金需要，例如購買存貨、應付季節性需求或暫時現金短缺。例子包括銀行透支及商業信用。', en: 'Short-term financing is usually used for needs within one year, such as buying inventory, seasonal demand or temporary cash shortages. Examples include bank overdraft and trade credit.' },
          { zh: '長期融資適合購買機器、開設分店或長期擴張等需要，因為資產回收期較長。例子包括長期貸款、發行股份及債券。', en: 'Long-term financing suits machinery purchase, new branches or long-term expansion because asset recovery takes longer. Examples include long-term loans, share issues and debentures.' },
          { zh: '用短期融資支持長期資產會增加再融資及流動性風險；用長期融資支付短期需要則可能成本較高且彈性較低。', en: 'Using short-term finance for long-term assets increases refinancing and liquidity risk; using long-term finance for short-term needs may be costly and less flexible.' },
        ],
      },
      {
        title: '債務融資與股本融資',
        titleEn: 'Debt and Equity Financing',
        points: [
          { zh: '債務融資是借入資金並承諾支付利息和本金，例如銀行貸款、債券和租購。優點是毋須分享控制權，但會增加利息及還款壓力。', en: 'Debt financing means borrowing funds with a promise to pay interest and principal, such as bank loans, debentures and hire purchase. It avoids sharing control but increases interest and repayment pressure.' },
          { zh: '股本融資是透過東主或股東投入資金，例如發行普通股。它沒有固定還款壓力，但可能攤薄控制權和每股盈利。', en: 'Equity financing obtains funds from owners or shareholders, such as issuing ordinary shares. It has no fixed repayment pressure but may dilute control and earnings per share.' },
          { zh: '若企業盈利穩定且負債水平低，債務融資可利用財務槓桿提高回報；若現金流不穩或負債已高，股本或內部融資較穩健。', en: 'If profit is stable and gearing is low, debt may use financial leverage to raise returns; if cash flow is unstable or debt is already high, equity or internal finance is more prudent.' },
        ],
      },
      {
        title: '內部與外部融資',
        titleEn: 'Internal and External Financing',
        points: [
          { zh: '內部融資來自企業內部，例如保留盈利、出售閒置資產和減少存貨。它成本較低、安排較快，亦不會增加負債或攤薄控制權。', en: 'Internal financing comes from within the business, such as retained profits, sale of unused assets and inventory reduction. It is cheaper, faster and does not increase debt or dilute control.' },
          { zh: '內部融資的限制是金額受企業盈利和資產規模限制，過度依賴保留盈利亦可能令股東不滿。', en: 'Internal finance is limited by profit and asset size, and excessive reliance on retained profits may dissatisfy shareholders.' },
          { zh: '外部融資來自企業以外，例如銀行、供應商、投資者或金融市場。它可提供較大金額，但通常涉及利息、手續、抵押或披露要求。', en: 'External financing comes from outside the business, such as banks, suppliers, investors or financial markets. It can provide larger amounts but usually involves interest, procedures, collateral or disclosure requirements.' },
        ],
      },
      {
        title: '主要融資方法比較',
        titleEn: 'Comparing Major Financing Methods',
        points: [
          { zh: '銀行透支彈性高，適合短期現金流波動，但利率通常較高，銀行可要求企業隨時償還。', en: 'Bank overdraft is flexible and suits short-term cash flow fluctuations, but interest is usually high and the bank may demand repayment at any time.' },
          { zh: '商業信用可延遲向供應商付款，便利且常見，但過度拖延付款會損害供應商關係及信用評級。', en: 'Trade credit delays payment to suppliers and is convenient, but excessive delay damages supplier relationships and credit rating.' },
          { zh: '租購和租賃可讓企業使用昂貴資產而毋須一次過付款，但總成本可能較高，亦可能受合約條款限制。', en: 'Hire purchase and leasing allow use of expensive assets without full upfront payment, but total cost may be higher and contract terms may restrict use.' },
          { zh: '發行股份可籌集大量長期資金而沒有固定利息，但上市或配股成本高，並可能分散控制權。', en: 'Issuing shares can raise large long-term funds without fixed interest, but listing or placing costs are high and control may be diluted.' },
        ],
      },
      {
        title: '選擇融資方法的原則',
        titleEn: 'Principles for Selecting Financing Methods',
        points: [
          { zh: '資金用途應與融資期限配合。短期營運需要宜用短期融資；長期資產或擴張宜用長期融資。', en: 'The purpose of funds should match the financing period. Short-term operating needs suit short-term finance; long-term assets or expansion suit long-term finance.' },
          { zh: '企業要評估成本與風險。利率、手續費、股息期望、抵押、財務風險及對信用評級的影響都應納入考慮。', en: 'A firm should assess cost and risk. Interest, fees, dividend expectations, collateral, financial risk and credit rating effects should all be considered.' },
          { zh: '不同企業情況會影響選擇。初創企業可能較難取得銀行貸款；成熟上市公司則較容易發行股份或債券。', en: 'Business circumstances affect choice. A start-up may find bank loans difficult, while a mature listed company can more easily issue shares or debentures.' },
        ],
      },
    ],
    terms: [
      { term: '融資', termEn: 'Financing', definition: '企業取得資金以支持營運、投資或擴展的活動。', definitionEn: 'Activities through which a business obtains funds for operations, investment or expansion.' },
      { term: '短期融資', termEn: 'Short-term financing', definition: '用於一年內資金需要的融資。', definitionEn: 'Financing used for funding needs within one year.' },
      { term: '長期融資', termEn: 'Long-term financing', definition: '用於長期資產或長期發展需要的融資。', definitionEn: 'Financing used for long-term assets or long-term development needs.' },
      { term: '債務融資', termEn: 'Debt financing', definition: '透過借貸取得資金並需支付利息和本金。', definitionEn: 'Obtaining funds through borrowing with interest and principal repayment.' },
      { term: '股本融資', termEn: 'Equity financing', definition: '透過東主或股東投入資金取得資本。', definitionEn: 'Obtaining capital through investment by owners or shareholders.' },
      { term: '內部融資', termEn: 'Internal financing', definition: '從企業內部產生的資金來源。', definitionEn: 'Sources of funds generated within the business.' },
      { term: '外部融資', termEn: 'External financing', definition: '來自企業以外人士或機構的資金來源。', definitionEn: 'Sources of funds from parties or institutions outside the business.' },
      { term: '保留盈利', termEn: 'Retained profits', definition: '沒有分派而留在企業再投資的盈利。', definitionEn: 'Profits kept in the business for reinvestment instead of distribution.' },
      { term: '銀行透支', termEn: 'Bank overdraft', definition: '銀行容許企業在限額內提取超過戶口結餘的短期融資。', definitionEn: 'A short-term facility allowing a business to withdraw more than its bank balance up to a limit.' },
      { term: '商業信用', termEn: 'Trade credit', definition: '供應商容許企業先取貨後付款的融資方式。', definitionEn: 'A financing method where suppliers allow a business to buy now and pay later.' },
      { term: '債券', termEn: 'Debentures', definition: '公司向投資者借入長期資金並承諾支付利息的證券。', definitionEn: 'Securities through which a company borrows long-term funds and promises interest payments.' },
      { term: '租賃', termEn: 'Leasing', definition: '企業支付租金使用資產而不一定擁有資產。', definitionEn: 'Using an asset by paying rentals without necessarily owning it.' },
    ],
    examTips: [
      { zh: '融資建議題要先判斷資金用途和期限，再比較成本、風險和控制權。不要只寫「銀行貸款較方便」。', en: 'For financing recommendations, identify purpose and duration first, then compare cost, risk and control. Do not only write “bank loan is convenient”.' },
      { zh: '比較債務與股本時，要同時寫還款壓力、利息成本、控制權、財務風險和企業是否有能力吸引投資者。', en: 'When comparing debt and equity, cover repayment pressure, interest cost, control, financial risk and the firm’s ability to attract investors.' },
      { zh: '短期資金問題不宜直接建議發行股份；購買長期資產亦不宜只用短期透支，除非有明確過渡原因。', en: 'For short-term funding problems, issuing shares is usually unsuitable; for long-term assets, relying only on overdraft is also unsuitable unless there is a clear bridging reason.' },
    ],
    questions: [
      { question: '為何購買新機器較適合用長期融資？', questionEn: 'Why is long-term financing more suitable for buying new machinery?', answer: '機器屬長期資產，回收期較長，長期融資可把還款期與資產產生收益的期間配合，減少短期現金流壓力。', answerEn: 'Machinery is a long-term asset with a longer recovery period. Long-term finance matches repayments with the period over which the asset generates returns and reduces short-term cash flow pressure.' },
      { question: '保留盈利作融資有何優點和限制？', questionEn: 'What is one advantage and one limitation of using retained profits as finance?', answer: '優點是成本低且不會增加負債或攤薄控制權；限制是金額受盈利限制，亦可能令期望股息的股東不滿。', answerEn: 'It is low-cost and does not increase debt or dilute control; however, the amount is limited by profit and may dissatisfy shareholders expecting dividends.' },
      { question: '高負債企業為何未必適合再借款？', questionEn: 'Why may a highly geared firm not suit further borrowing?', answer: '再借款會提高利息和還款壓力，增加財務風險，亦可能令銀行要求更高利率或拒絕貸款。', answerEn: 'Further borrowing increases interest and repayment pressure, raises financial risk and may cause banks to charge higher interest or refuse lending.' },
    ],
  },
  {
    id: 'capital-investment-appraisal',
    number: 2,
    title: '資本投資評估',
    titleEn: 'Capital Investment Appraisal',
    objective: {
      zh: '理解影響資本投資決策的財務及非財務因素，並能運用會計回報率、回收期、淨現值及內部回報率評估投資項目。',
      en: 'Understand financial and non-financial factors affecting capital investment decisions and apply accounting rate of return, payback period, net present value and internal rate of return to evaluate investment projects.',
    },
    sections: [
      {
        title: '資本投資決策的性質',
        titleEn: 'Nature of Capital Investment Decisions',
        points: [
          { zh: '資本投資是把大量資金投入長期資產或項目，例如機器、廠房、資訊系統、新分店或新產品線。', en: 'Capital investment involves committing substantial funds to long-term assets or projects such as machinery, factories, IT systems, new branches or new product lines.' },
          { zh: '資本投資通常金額大、期限長、不可輕易逆轉，錯誤決策會長期影響現金流、成本結構和競爭力。', en: 'Capital investment usually involves large amounts, long duration and limited reversibility. Poor decisions can affect cash flow, cost structure and competitiveness for a long time.' },
          { zh: '投資評估要考慮初始投資、投資年期、預期現金流、殘值、資金成本、風險及機會成本。', en: 'Investment appraisal considers initial investment, investment horizon, expected cash flows, residual value, cost of capital, risk and opportunity cost.' },
        ],
      },
      {
        title: '財務與非財務因素',
        titleEn: 'Financial and Non-financial Factors',
        points: [
          { zh: '財務因素包括初始成本、年度現金流入及流出、維修成本、殘值、稅務影響、融資成本和預期回報。', en: 'Financial factors include initial cost, annual cash inflows and outflows, maintenance costs, residual value, tax effects, financing cost and expected return.' },
          { zh: '非財務因素包括產品質素、員工士氣、企業形象、環境影響、法律合規、科技可靠性、供應商支援及策略配合。', en: 'Non-financial factors include product quality, staff morale, corporate image, environmental impact, legal compliance, technological reliability, supplier support and strategic fit.' },
          { zh: 'ESG 因素可影響投資決策。即使某項目短期回報較高，若帶來污染、聲譽損害或合規風險，仍未必值得採納。', en: 'ESG factors can affect investment decisions. Even if a project offers high short-term return, it may not be worthwhile if it causes pollution, reputation damage or compliance risk.' },
        ],
      },
      {
        title: '會計回報率',
        titleEn: 'Accounting Rate of Return',
        points: [
          { zh: '會計回報率 = 平均每年會計利潤 / 平均投資額 x 100%。它以會計利潤衡量項目的平均回報。', en: 'Accounting rate of return = average annual accounting profit / average investment x 100%. It measures average return using accounting profit.' },
          { zh: '優點是易於理解，並可與企業目標回報率或其他項目比較。缺點是使用會計利潤而非現金流，亦忽略貨幣時間價值。', en: 'It is easy to understand and can be compared with target return or other projects. Its weaknesses are using accounting profit rather than cash flow and ignoring time value of money.' },
          { zh: '若企業重視會計盈利或投資者報表表現，會計回報率有參考價值；但不應單獨用它判斷項目。', en: 'ARR is useful if a firm focuses on accounting profit or reported performance, but it should not be used alone to judge a project.' },
        ],
      },
      {
        title: '回收期',
        titleEn: 'Payback Period',
        points: [
          { zh: '回收期是項目累計現金流入收回初始投資所需的時間。回收期越短，資金收回越快，流動性風險通常較低。', en: 'Payback period is the time needed for cumulative cash inflows to recover the initial investment. A shorter payback means faster recovery and usually lower liquidity risk.' },
          { zh: '優點是計算簡單，適合現金流緊張、科技快速變化或風險高的項目。', en: 'It is simple to calculate and suits projects where cash flow is tight, technology changes quickly or risk is high.' },
          { zh: '缺點是忽略回收期後的現金流，也忽略貨幣時間價值，因此可能低估長期收益高的項目。', en: 'It ignores cash flows after the payback period and time value of money, so it may undervalue projects with strong long-term returns.' },
        ],
      },
      {
        title: '淨現值與貨幣時間價值',
        titleEn: 'Net Present Value and Time Value of Money',
        points: [
          { zh: '貨幣時間價值表示今天的一元通常比未來的一元更有價值，因為今天的資金可投資賺取回報。', en: 'Time value of money means one dollar today is usually worth more than one dollar in the future because money today can be invested to earn returns.' },
          { zh: '淨現值 = 未來現金流入現值總額 - 初始投資。若淨現值為正，項目預期可賺取高於資金成本的回報。', en: 'Net present value = total present value of future cash inflows - initial investment. A positive NPV means the project is expected to earn more than the cost of capital.' },
          { zh: '淨現值的優點是考慮現金流、貨幣時間價值和資金成本；限制是需要估計折現率及未來現金流，估計錯誤會影響結果。', en: 'NPV considers cash flow, time value of money and cost of capital. Its limitation is the need to estimate discount rate and future cash flows; wrong estimates affect results.' },
        ],
      },
      {
        title: '內部回報率與互斥項目',
        titleEn: 'Internal Rate of Return and Mutually Exclusive Projects',
        points: [
          { zh: '內部回報率是令項目淨現值等於零的折現率。若內部回報率高於資金成本，項目通常可接受。', en: 'Internal rate of return is the discount rate that makes a project’s NPV equal zero. If IRR exceeds the cost of capital, the project is usually acceptable.' },
          { zh: '互斥項目是只能選擇其中一個的項目，例如同一地點只能開設一間分店。比較時不應只看單一方法。', en: 'Mutually exclusive projects are projects where only one can be chosen, such as opening only one branch at a location. They should not be compared using only one method.' },
          { zh: '若不同方法給出不同結論，企業應結合淨現值、回收期、風險、策略配合及非財務因素作最終判斷。', en: 'If methods give different conclusions, the firm should combine NPV, payback, risk, strategic fit and non-financial factors for final judgement.' },
        ],
      },
      {
        title: '投資評估方法的限制',
        titleEn: 'Limitations of Investment Appraisal Methods',
        points: [
          { zh: '所有投資評估方法都依賴預測。銷量、成本、殘值、折現率和經濟環境一旦改變，結果便可能失準。', en: 'All appraisal methods rely on forecasts. If sales, costs, residual value, discount rate or economic conditions change, results may become inaccurate.' },
          { zh: '定量結果不能完全反映策略價值，例如進入新市場、提升品牌、改善安全或符合環保要求。', en: 'Quantitative results cannot fully reflect strategic value, such as entering a new market, improving brand, enhancing safety or meeting environmental requirements.' },
          { zh: '高分作答應說明方法的計算結論，再指出其限制，最後按企業目標和情境作建議。', en: 'Strong answers state the method’s calculated conclusion, then its limitations, and finally make a recommendation based on business objectives and context.' },
        ],
      },
    ],
    terms: [
      { term: '資本投資', termEn: 'Capital investment', definition: '投入資金購買或建立長期資產或長期項目。', definitionEn: 'Investing funds in long-term assets or long-term projects.' },
      { term: '初始投資', termEn: 'Initial investment', definition: '項目開始時需要投入的資金。', definitionEn: 'The funds required at the start of a project.' },
      { term: '投資年期', termEn: 'Investment horizon', definition: '投資項目預期運作或產生現金流的期間。', definitionEn: 'The expected operating or cash-flow-generating period of an investment project.' },
      { term: '貨幣時間價值', termEn: 'Time value of money', definition: '今天的資金通常比未來相同金額更有價值的概念。', definitionEn: 'The concept that money today is usually worth more than the same amount in the future.' },
      { term: '資金成本', termEn: 'Cost of capital', definition: '企業取得和使用資金所需付出的最低回報或成本。', definitionEn: 'The minimum return or cost required for obtaining and using funds.' },
      { term: '會計回報率', termEn: 'Accounting rate of return', definition: '平均每年會計利潤相對平均投資額的百分比。', definitionEn: 'Average annual accounting profit as a percentage of average investment.' },
      { term: '回收期', termEn: 'Payback period', definition: '收回初始投資所需的時間。', definitionEn: 'The time needed to recover the initial investment.' },
      { term: '淨現值', termEn: 'Net present value', definition: '未來現金流現值總額減初始投資。', definitionEn: 'The total present value of future cash flows minus initial investment.' },
      { term: '內部回報率', termEn: 'Internal rate of return', definition: '令項目淨現值等於零的折現率。', definitionEn: 'The discount rate that makes a project’s NPV equal zero.' },
      { term: '互斥項目', termEn: 'Mutually exclusive projects', definition: '只能從中選擇其中一個的投資項目。', definitionEn: 'Investment projects where only one can be chosen.' },
      { term: '折現率', termEn: 'Discount rate', definition: '把未來現金流折算為現值所使用的比率。', definitionEn: 'The rate used to convert future cash flows into present value.' },
      { term: '殘值', termEn: 'Residual value', definition: '資產在項目完結時預期可收回的價值。', definitionEn: 'The expected value recoverable from an asset at the end of the project.' },
    ],
    examTips: [
      { zh: '投資評估題要分清利潤和現金流。回收期、淨現值和內部回報率使用現金流；會計回報率使用會計利潤。', en: 'For investment appraisal, distinguish profit from cash flow. Payback, NPV and IRR use cash flows; ARR uses accounting profit.' },
      { zh: '淨現值為正通常表示項目可接受，但仍要考慮非財務因素，例如風險、環境影響及策略配合。', en: 'A positive NPV usually means a project is acceptable, but non-financial factors such as risk, environmental impact and strategic fit must still be considered.' },
      { zh: '比較互斥項目時，不要只選回收期最短或會計回報率最高的項目；要解釋為何該方法適合題目情境。', en: 'When comparing mutually exclusive projects, do not simply choose the shortest payback or highest ARR; explain why the method suits the case context.' },
    ],
    questions: [
      { question: '為何淨現值法比回收期法更能反映項目整體價值？', questionEn: 'Why does NPV better reflect the overall value of a project than payback period?', answer: '淨現值考慮整個投資年期的現金流和貨幣時間價值；回收期只看收回初始投資前的時間，忽略其後現金流。', answerEn: 'NPV considers cash flows over the whole investment horizon and time value of money, while payback only focuses on the time to recover initial investment and ignores later cash flows.' },
      { question: '內部回報率高於資金成本代表甚麼？', questionEn: 'What does it mean if IRR is higher than the cost of capital?', answer: '代表項目預期回報率高於取得資金的最低成本，通常表示項目可接受，但仍需考慮風險和非財務因素。', answerEn: 'It means the expected return exceeds the minimum cost of funds, so the project is usually acceptable, but risk and non-financial factors should still be considered.' },
      { question: '資本投資決策為何要考慮非財務因素？', questionEn: 'Why should non-financial factors be considered in capital investment decisions?', answer: '因為投資會影響品牌、員工、環境、合規和長期策略，這些影響未必能完全反映在計算結果中。', answerEn: 'Investment affects brand, staff, environment, compliance and long-term strategy, and these effects may not be fully reflected in calculations.' },
    ],
  },
]
