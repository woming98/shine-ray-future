import { C1DetailedChapter } from './c1Notes'

export const A5_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'depreciation-of-non-current-assets',
    number: 1,
    title: '非流動資產折舊',
    titleEn: 'Depreciation of Non-Current Assets',
    objective: {
      zh: '分辨資本性支出與收益性支出，理解折舊的目的，計算不同折舊方法，並記錄折舊及非流動資產出售。',
      en: 'Distinguish capital expenditure from revenue expenditure, understand the purpose of depreciation, calculate depreciation under different methods, and record depreciation and disposal of non-current assets.',
    },
    sections: [
      {
        title: '非流動資產與支出分類',
        titleEn: 'Non-current Assets and Expenditure Classification',
        points: [
          { zh: '非流動資產是企業持有作長期使用而非轉售的資產，例如機器、車輛、設備及辦公室裝修。它們通常為企業帶來超過一個會計期間的經濟利益。', en: 'Non-current assets are held for long-term use rather than resale, such as machinery, vehicles, equipment and office renovation. They normally bring economic benefits for more than one accounting period.' },
          { zh: '資本性支出是購買、改良或使非流動資產達至可使用狀態的支出，應資本化為資產成本，例如購買機器、運送安裝費及重大改良工程。', en: 'Capital expenditure is spending to acquire, improve or bring a non-current asset into usable condition. It is capitalised as asset cost, such as machine purchase, delivery and installation, or major improvement.' },
          { zh: '收益性支出是維持日常營運或修理資產至原有狀態的支出，應在發生期間列作費用，例如日常維修、燃料、保養及清潔費。', en: 'Revenue expenditure maintains daily operations or restores an asset to its original condition. It is expensed in the period incurred, such as routine repairs, fuel, maintenance and cleaning.' },
          { zh: '把收益性支出錯列為資本性支出會高估資產及利潤；把資本性支出錯列為費用會低估資產及利潤。', en: 'Treating revenue expenditure as capital expenditure overstates assets and profit; treating capital expenditure as an expense understates assets and profit.' },
        ],
      },
      {
        title: '折舊的意義與目的',
        titleEn: 'Meaning and Objectives of Depreciation',
        points: [
          { zh: '折舊是把非流動資產的可折舊成本，按有系統方法分配至其有用年期內各會計期間的程序。', en: 'Depreciation is the systematic allocation of the depreciable cost of a non-current asset over its useful life.' },
          { zh: '折舊不是為購買新資產而儲蓄現金，也不一定反映資產市值下降；它主要是按配比原則，把資產成本與產生收入的期間配對。', en: 'Depreciation is not a cash saving for asset replacement and does not necessarily represent a fall in market value. Its main purpose is to match asset cost with the periods benefiting from the asset.' },
          { zh: '可折舊成本 = 成本 - 殘值。成本包括購買價及使資產達至可使用狀態的必要成本；殘值是預計有用年期末可收回的金額。', en: 'Depreciable cost = cost - residual value. Cost includes purchase price and necessary costs to bring the asset into use; residual value is the expected recoverable amount at the end of useful life.' },
          { zh: '帳面淨值 = 成本 - 累計折舊。財務狀況表通常列示非流動資產的成本、累計折舊及帳面淨值。', en: 'Net book value = cost - accumulated depreciation. The statement of financial position usually shows cost, accumulated depreciation and net book value of non-current assets.' },
        ],
      },
      {
        title: '折舊方法',
        titleEn: 'Depreciation Methods',
        points: [
          { zh: '直線法每年折舊額相同：每年折舊 = (成本 - 殘值) / 有用年期。它適合經濟利益較平均地被使用的資產。', en: 'The straight-line method charges the same depreciation each year: annual depreciation = (cost - residual value) / useful life. It suits assets whose benefits are used evenly.' },
          { zh: '餘額遞減法按帳面淨值乘以固定折舊率計算折舊，早期折舊較高，後期折舊較低，適合早期效益較大的資產。', en: 'The reducing-balance method calculates depreciation as net book value multiplied by a fixed rate. It charges more depreciation in earlier years and suits assets giving higher benefits early.' },
          { zh: '使用量法按實際使用量分配折舊：本期折舊 = 可折舊成本 x 本期使用量 / 預計總使用量。它適合使用程度能可靠量度的資產。', en: 'The usage-based method allocates depreciation according to actual usage: depreciation = depreciable cost x current usage / estimated total usage. It suits assets whose usage can be measured reliably.' },
          { zh: '不同折舊方法會影響各期利潤及帳面淨值，但不改變整個有用年期內分配的總可折舊成本。', en: 'Different depreciation methods affect profit and net book value in each period, but do not change the total depreciable cost allocated over the asset’s useful life.' },
        ],
      },
      {
        title: '折舊分錄與報表列示',
        titleEn: 'Depreciation Entries and Presentation',
        points: [
          { zh: '記錄折舊時，借記折舊費用，貸記累計折舊。累計折舊是抵銷資產帳戶，用來累積過往已確認的折舊。', en: 'To record depreciation, debit depreciation expense and credit accumulated depreciation. Accumulated depreciation is a contra-asset account that accumulates depreciation charged to date.' },
          { zh: '折舊費用列入損益表，減少本期利潤；累計折舊列於財務狀況表，從資產成本中扣除以得出帳面淨值。', en: 'Depreciation expense is reported in the income statement and reduces profit; accumulated depreciation is shown in the statement of financial position and deducted from asset cost to show net book value.' },
          { zh: '若資產在年中購入或出售，折舊應按題目政策計算，例如按月計算、購入年份計全年或出售年份不計折舊。必須跟從題目要求。', en: 'If an asset is purchased or sold during the year, depreciation should follow the policy stated in the question, such as monthly apportionment, full-year charge in year of purchase or no charge in year of disposal.' },
        ],
      },
      {
        title: '非流動資產出售與以舊換新',
        titleEn: 'Disposal and Trade-in of Non-current Assets',
        points: [
          { zh: '出售非流動資產時，須把資產成本、相關累計折舊及出售收入轉入出售帳戶，以計算出售盈虧。', en: 'When a non-current asset is disposed of, transfer its cost, related accumulated depreciation and disposal proceeds to a disposal account to calculate gain or loss on disposal.' },
          { zh: '出售盈利 = 出售收入 - 出售日帳面淨值；出售虧損 = 出售日帳面淨值 - 出售收入。出售盈虧列入損益表。', en: 'Gain on disposal = proceeds - net book value at disposal date; loss on disposal = net book value at disposal date - proceeds. The gain or loss is reported in the income statement.' },
          { zh: '以舊換新時，舊資產的換入價視作出售收入，新資產按其總成本入帳。不要只把現金補價記作新資產成本。', en: 'In a trade-in, the trade-in allowance for the old asset is treated as disposal proceeds, and the new asset is recorded at its full cost. Do not record only the cash paid as the cost of the new asset.' },
        ],
      },
    ],
    terms: [
      { term: '非流動資產', termEn: 'Non-current asset', definition: '持有作長期使用而非在正常營運中出售的資產。', definitionEn: 'An asset held for long-term use rather than sale in normal operations.' },
      { term: '資本性支出', termEn: 'Capital expenditure', definition: '取得或改善非流動資產、並帶來長期利益的支出。', definitionEn: 'Expenditure to acquire or improve a non-current asset and bring long-term benefits.' },
      { term: '收益性支出', termEn: 'Revenue expenditure', definition: '為維持日常營運或本期收入而發生的支出。', definitionEn: 'Expenditure incurred to maintain daily operations or earn revenue in the current period.' },
      { term: '資本化', termEn: 'Capitalisation', definition: '把支出記作資產成本而非即時列作費用。', definitionEn: 'Recording expenditure as asset cost rather than expensing it immediately.' },
      { term: '折舊', termEn: 'Depreciation', definition: '把非流動資產的可折舊成本有系統地分配至有用年期。', definitionEn: 'Systematic allocation of a non-current asset’s depreciable cost over its useful life.' },
      { term: '成本', termEn: 'Cost', definition: '取得資產並使其達至可使用狀態所需的總支出。', definitionEn: 'Total expenditure needed to acquire an asset and bring it into usable condition.' },
      { term: '有用年期', termEn: 'Useful life', definition: '企業預期可使用資產或從中取得經濟利益的期間。', definitionEn: 'The period over which a business expects to use an asset or obtain economic benefits from it.' },
      { term: '殘值', termEn: 'Residual value', definition: '資產在有用年期末預計可收回的金額。', definitionEn: 'The expected recoverable amount from an asset at the end of its useful life.' },
      { term: '可折舊成本', termEn: 'Depreciable cost', definition: '資產成本減殘值後需要分配為折舊的金額。', definitionEn: 'Asset cost less residual value, the amount to be allocated as depreciation.' },
      { term: '直線法', termEn: 'Straight-line method', definition: '每期確認相同折舊額的折舊方法。', definitionEn: 'A depreciation method that charges the same amount each period.' },
      { term: '餘額遞減法', termEn: 'Reducing-balance method', definition: '按帳面淨值乘以固定比率計算折舊的方法。', definitionEn: 'A depreciation method that applies a fixed rate to net book value.' },
      { term: '使用量法', termEn: 'Usage-based method', definition: '按實際使用量分配折舊的方法。', definitionEn: 'A depreciation method that allocates depreciation according to actual usage.' },
      { term: '帳面淨值', termEn: 'Net book value', definition: '資產成本減累計折舊後的金額。', definitionEn: 'Asset cost less accumulated depreciation.' },
      { term: '累計折舊', termEn: 'Accumulated depreciation', definition: '資產自購入以來已確認折舊的總額。', definitionEn: 'Total depreciation charged on an asset since acquisition.' },
      { term: '出售帳戶', termEn: 'Disposal account', definition: '用來計算非流動資產出售盈虧的暫時帳戶。', definitionEn: 'A temporary account used to calculate gain or loss on disposal of a non-current asset.' },
      { term: '以舊換新', termEn: 'Trade-in', definition: '以舊資產作部分代價換取新資產的安排。', definitionEn: 'An arrangement in which an old asset is exchanged as part payment for a new asset.' },
    ],
    examTips: [
      { zh: '分類支出時先問：該支出是否增加資產未來經濟利益或使資產達至可使用狀態？若只是日常維修，通常是收益性支出。', en: 'When classifying expenditure, ask whether it increases future benefits or brings the asset into usable condition. Routine repairs are usually revenue expenditure.' },
      { zh: '出售資產題要先補計出售日前折舊，再計算帳面淨值；漏計當年折舊會同時影響出售盈虧。', en: 'For asset disposal, calculate depreciation up to the disposal date before finding net book value; missing current-year depreciation affects the disposal gain or loss.' },
      { zh: '以舊換新題要把換入價當作舊資產出售收入，新資產成本應用完整價格，不是只用現金補價。', en: 'In trade-in questions, treat the trade-in allowance as proceeds for the old asset. Record the new asset at full price, not only the cash paid.' },
    ],
    questions: [
      { question: '為何折舊不是現金儲備？', questionEn: 'Why is depreciation not a cash reserve?', answer: '折舊只是會計上分配資產成本的費用分錄，不涉及現金流入或把現金撥存到特定帳戶。', answerEn: 'Depreciation is an accounting entry allocating asset cost as expense. It does not involve a cash inflow or setting aside cash in a separate account.' },
      { question: '購買機器的安裝費應如何處理？', questionEn: 'How should installation cost of a machine be treated?', answer: '若安裝是使機器達至可使用狀態的必要成本，應資本化為機器成本的一部分。', answerEn: 'If installation is necessary to bring the machine into usable condition, it should be capitalised as part of the machine’s cost.' },
      { question: '出售非流動資產時，出售帳戶要記錄哪些主要項目？', questionEn: 'What main items are recorded in the disposal account when a non-current asset is sold?', answer: '記錄資產成本、截至出售日的累計折舊、出售收入或換入價，最後計算出售盈利或虧損。', answerEn: 'Record asset cost, accumulated depreciation up to disposal date, proceeds or trade-in allowance, and then calculate the gain or loss on disposal.' },
    ],
  },
  {
    id: 'valuation-of-inventory',
    number: 2,
    title: '存貨估值',
    titleEn: 'Valuation of Inventory',
    objective: {
      zh: '理解存貨盤點及估值的原則，運用加權平均成本法、成本與可變現淨值兩者中較低者、期後盤點調整及存貨損失處理來計算期末存貨和銷貨成本。',
      en: 'Understand inventory-taking and valuation principles, and use weighted average cost, lower of cost and net realisable value, post-period-end inventory adjustments and inventory loss treatment to calculate closing inventory and cost of goods sold.',
    },
    sections: [
      {
        title: '存貨與盤存制度',
        titleEn: 'Inventory and Inventory Systems',
        points: [
          { zh: '存貨是企業持有作出售、正在生產中或將用於生產可出售貨品的資產。零售商的存貨通常是可供轉售的貨品。', en: 'Inventory is an asset held for sale, in production or to be used in producing goods for sale. For a retailer, inventory usually consists of goods for resale.' },
          { zh: '定期盤存制在期末透過實地盤點確定期末存貨，再推算銷貨成本。HKDSE BAFS 一般要求掌握定期盤存制。', en: 'Under the periodic inventory system, closing inventory is determined by physical count at period-end and cost of goods sold is then derived. HKDSE BAFS normally focuses on the periodic system.' },
          { zh: '永續盤存制會持續記錄每次存貨收發，能較快發現異常損失，但本章重點是理解定期盤存制下的期末調整。', en: 'The perpetual inventory system records each inventory movement continuously and can detect abnormal losses more quickly, but this chapter focuses on period-end adjustments under the periodic system.' },
          { zh: '銷貨成本 = 期初存貨 + 採購淨額 - 期末存貨。期末存貨高估會低估銷貨成本並高估毛利；期末存貨低估則相反。', en: 'Cost of goods sold = opening inventory + net purchases - closing inventory. Overstated closing inventory understates cost of goods sold and overstates gross profit; understated closing inventory has the opposite effect.' },
        ],
      },
      {
        title: '加權平均成本法',
        titleEn: 'Weighted Average Cost Method',
        points: [
          { zh: '加權平均成本法把可供出售存貨總成本除以可供出售總數量，計算平均單位成本，再用於期末存貨及銷貨成本。', en: 'The weighted average cost method divides total cost of goods available for sale by total units available for sale to find average unit cost, then applies it to closing inventory and cost of goods sold.' },
          { zh: '平均單位成本 = (期初存貨成本 + 本期採購成本) / (期初存貨數量 + 本期採購數量)。計算時須先扣除購貨退回、業主提用或異常損失等調整。', en: 'Average unit cost = (opening inventory cost + purchase cost) / (opening inventory units + purchased units). Adjustments such as purchase returns, drawings or abnormal losses must be handled first.' },
          { zh: '期末存貨 = 期末數量 x 加權平均單位成本；銷貨成本亦可用可供出售成本減期末存貨計算。', en: 'Closing inventory = closing units x weighted average unit cost; cost of goods sold can also be calculated as cost of goods available for sale less closing inventory.' },
          { zh: '加權平均成本法能平滑價格波動，但在價格快速變動時，期末存貨成本未必反映最近採購成本。', en: 'Weighted average cost smooths price fluctuations, but when prices change quickly, closing inventory cost may not reflect the most recent purchase cost.' },
        ],
      },
      {
        title: '成本與可變現淨值兩者中較低者',
        titleEn: 'Lower of Cost and Net Realisable Value',
        points: [
          { zh: '存貨應按成本與可變現淨值兩者中較低者列示。這是審慎原則的應用，避免高估資產及利潤。', en: 'Inventory should be stated at the lower of cost and net realisable value. This applies prudence by avoiding overstatement of assets and profit.' },
          { zh: '可變現淨值 = 預計售價 - 完成及出售所需成本。若貨品損壞、過時或售價下跌，可能需要把存貨撇減至可變現淨值。', en: 'Net realisable value = expected selling price - costs to complete and sell. If goods are damaged, obsolete or selling prices fall, inventory may need to be written down to net realisable value.' },
          { zh: '存貨撇減會減少期末存貨並增加銷貨成本或確認存貨損失，因此降低毛利及淨利潤。', en: 'Writing inventory down reduces closing inventory and increases cost of goods sold or recognises an inventory loss, reducing gross profit and net profit.' },
        ],
      },
      {
        title: '試銷貨品與期後盤點調整',
        titleEn: 'Sale or Return and Post-count Adjustments',
        points: [
          { zh: '試銷或寄銷貨品若顧客尚未接受，仍屬企業存貨，不應確認銷售；若已記作銷售，須調整銷售及存貨。', en: 'Goods sent on sale or return remain the business’s inventory until accepted by the customer and should not be recognised as sales. If recorded as sales, both sales and inventory must be adjusted.' },
          { zh: '若期末盤點在報告期後才完成，須把盤點日與報告期末之間的購貨、銷售、退貨及其他存貨移動倒推至報告期末。', en: 'If inventory-taking is completed after the reporting date, purchases, sales, returns and other inventory movements between reporting date and count date must be worked backwards to the reporting date.' },
          { zh: '報告期後已售出的貨品若在期末仍屬企業所有，應加回期末存貨；報告期後才購入但已包括在盤點中的貨品，應從期末存貨扣除。', en: 'Goods sold after the reporting date that were owned at period-end should be added back to closing inventory; goods purchased after the reporting date but included in the count should be deducted.' },
          { zh: '用售價倒推成本時，須分清毛利率和成本加成率。毛利率以銷售額為分母；成本加成率以成本為分母。', en: 'When converting selling price back to cost, distinguish gross profit ratio from mark-up. Gross profit ratio uses sales as denominator; mark-up uses cost as denominator.' },
        ],
      },
      {
        title: '正常與異常存貨損失',
        titleEn: 'Normal and Abnormal Inventory Losses',
        points: [
          { zh: '正常存貨損失是在日常營運中預期會發生的損耗，例如自然損耗或少量破損，通常作為銷貨成本的一部分處理。', en: 'Normal inventory loss is expected in ordinary operations, such as natural wastage or minor damage, and is usually treated as part of cost of goods sold.' },
          { zh: '異常存貨損失是非預期、非正常的損失，例如火災、盜竊或重大事故，通常單獨列作本期費用。', en: 'Abnormal inventory loss is unexpected and unusual, such as fire, theft or major accident, and is usually reported separately as an expense of the period.' },
          { zh: '若異常損失可獲保險賠償，賠償應與損失分開考慮；淨損失才影響損益。', en: 'If compensation is recoverable for an abnormal loss, the compensation should be considered separately; only the net loss affects profit or loss.' },
          { zh: '定期盤存制下，異常損失的數量和成本未必容易即時確定，因此題目通常會提供足夠資料讓學生計算。', en: 'Under the periodic system, the quantity and cost of abnormal losses may not be easily identified immediately, so questions usually provide enough information for calculation.' },
        ],
      },
    ],
    terms: [
      { term: '存貨', termEn: 'Inventory', definition: '持有作出售、正在生產中或用於生產可出售貨品的資產。', definitionEn: 'Assets held for sale, in production or to be used in producing goods for sale.' },
      { term: '定期盤存制', termEn: 'Periodic inventory system', definition: '透過期末實地盤點確定存貨數量並推算銷貨成本的制度。', definitionEn: 'A system that determines inventory by physical count at period-end and derives cost of goods sold.' },
      { term: '永續盤存制', termEn: 'Perpetual inventory system', definition: '持續記錄每次存貨收發以更新存貨結餘的制度。', definitionEn: 'A system that records each inventory movement continuously to update inventory balances.' },
      { term: '加權平均成本法', termEn: 'Weighted average cost method', definition: '以可供出售總成本除以可供出售總數量計算平均單位成本的方法。', definitionEn: 'A method that calculates average unit cost by dividing total cost of goods available for sale by total units available for sale.' },
      { term: '銷貨成本', termEn: 'Cost of goods sold', definition: '本期已售貨品的成本。', definitionEn: 'The cost of goods sold during the period.' },
      { term: '期末存貨', termEn: 'Closing inventory', definition: '會計期末仍由企業持有的存貨。', definitionEn: 'Inventory held by the business at the end of the accounting period.' },
      { term: '可變現淨值', termEn: 'Net realisable value', definition: '預計售價減完成及出售所需成本後的金額。', definitionEn: 'Expected selling price less costs needed to complete and sell.' },
      { term: '存貨撇減', termEn: 'Write-down of inventory', definition: '把存貨由成本減至較低可變現淨值的調整。', definitionEn: 'An adjustment reducing inventory from cost to a lower net realisable value.' },
      { term: '試銷貨品', termEn: 'Goods on sale or return', definition: '顧客可選擇接受或退回、在接受前仍屬企業存貨的貨品。', definitionEn: 'Goods that a customer may accept or return and remain the business’s inventory until accepted.' },
      { term: '正常存貨損失', termEn: 'Normal inventory loss', definition: '日常營運中預期會發生的存貨損耗。', definitionEn: 'Inventory loss expected in normal operations.' },
      { term: '異常存貨損失', termEn: 'Abnormal inventory loss', definition: '非預期及非正常原因造成的存貨損失。', definitionEn: 'Inventory loss caused by unexpected and abnormal events.' },
      { term: '毛利率', termEn: 'Gross profit ratio', definition: '毛利佔銷售額的百分比。', definitionEn: 'Gross profit as a percentage of sales.' },
      { term: '成本加成率', termEn: 'Mark-up', definition: '毛利佔成本的百分比。', definitionEn: 'Gross profit as a percentage of cost.' },
    ],
    examTips: [
      { zh: '存貨估值題先確定「期末實際擁有的貨品」，再決定每件貨品用成本還是可變現淨值。所有期後買賣都要按所有權倒推。', en: 'For inventory valuation, first identify goods actually owned at period-end, then decide whether cost or net realisable value applies. Work back post-period-end transactions according to ownership.' },
      { zh: '加權平均成本題要先處理退貨、提用、異常損失等數量及成本調整，再計算平均單位成本。', en: 'For weighted average cost questions, handle returns, drawings, abnormal losses and other quantity or cost adjustments before calculating average unit cost.' },
      { zh: '毛利率與成本加成率不可混用。售價轉成本時，毛利率用「售價 x (1 - 毛利率)」，成本加成率用「售價 / (1 + 成本加成率)」。', en: 'Do not mix up gross profit ratio and mark-up. To convert selling price to cost, use sales x (1 - gross profit ratio) for margin, and sales / (1 + mark-up) for mark-up.' },
    ],
    questions: [
      { question: '期末存貨高估會如何影響毛利？', questionEn: 'How does overstated closing inventory affect gross profit?', answer: '期末存貨高估會令銷貨成本低估，因此毛利及淨利潤被高估。', answerEn: 'Overstated closing inventory understates cost of goods sold, so gross profit and net profit are overstated.' },
      { question: '為何存貨要按成本與可變現淨值兩者中較低者列示？', questionEn: 'Why should inventory be stated at the lower of cost and net realisable value?', answer: '這是審慎原則的應用，避免因存貨售價下跌、損壞或過時而高估資產及利潤。', answerEn: 'This applies prudence and avoids overstating assets and profit when inventory selling prices fall or goods are damaged or obsolete.' },
      { question: '未獲顧客接受的試銷貨品是否應列入期末存貨？', questionEn: 'Should goods on sale or return not yet accepted by the customer be included in closing inventory?', answer: '應該。顧客接受前，貨品所有權通常仍屬企業，不應確認銷售，並應列入期末存貨。', answerEn: 'Yes. Before customer acceptance, ownership normally remains with the business, so no sale should be recognised and the goods should be included in closing inventory.' },
    ],
  },
]
