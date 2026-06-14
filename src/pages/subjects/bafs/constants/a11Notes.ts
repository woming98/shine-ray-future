import { C1DetailedChapter } from './c1Notes'

export const A11_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'cost-classifications-concepts-terminology',
    number: 1,
    title: '成本分類、概念與術語',
    titleEn: 'Cost Classifications, Concepts and Terminology',
    objective: {
      zh: '分辨財務會計、管理會計及成本會計的用途，掌握成本對象、成本單位及常見成本分類，並能運用高低點法拆分混合成本。',
      en: 'Distinguish financial accounting, management accounting and cost accounting, understand cost objects, cost units and common cost classifications, and use the high-low method to separate mixed costs.',
    },
    sections: [
      {
        title: '管理會計與成本會計',
        titleEn: 'Management Accounting and Cost Accounting',
        points: [
          { zh: '財務會計主要向外部使用者報告企業整體財務表現及狀況；管理會計主要向內部管理層提供計劃、控制及決策資料。', en: 'Financial accounting mainly reports overall financial performance and position to external users; management accounting provides internal managers with information for planning, control and decision-making.' },
          { zh: '成本會計是管理會計的重要部分，集中收集、分類、分配及分析成本資料，以協助定價、成本控制、預算和盈利分析。', en: 'Cost accounting is an important part of management accounting. It collects, classifies, allocates and analyses cost information for pricing, cost control, budgeting and profit analysis.' },
          { zh: '成本對象是需要獨立計量成本的項目，例如產品、服務、部門或訂單。成本單位是用來量度成本的單位，例如每件產品、每小時服務或每公里運輸。', en: 'A cost object is anything for which cost is measured separately, such as a product, service, department or job. A cost unit is the unit used to measure cost, such as each product, service hour or kilometre delivered.' },
        ],
      },
      {
        title: '直接成本與間接成本',
        titleEn: 'Direct Costs and Indirect Costs',
        points: [
          { zh: '直接成本可直接追溯至某成本對象，常見例子包括直接材料、直接人工及直接費用。這些成本合稱主要成本。', en: 'Direct costs can be traced directly to a cost object. Common examples include direct materials, direct labour and direct expenses. These costs together are prime cost.' },
          { zh: '間接成本不能經濟地直接追溯至單一成本對象，需要透過分配或吸收方法處理，例如工廠租金、主管薪金及機器折舊。', en: 'Indirect costs cannot be economically traced to one cost object and must be allocated or absorbed, such as factory rent, supervisor salaries and machinery depreciation.' },
          { zh: '直接成本不一定是變動成本，間接成本也不一定是固定成本。直接/間接按可追溯性分類；固定/變動按成本對活動量的反應分類。', en: 'A direct cost is not necessarily variable, and an indirect cost is not necessarily fixed. Direct/indirect classification depends on traceability; fixed/variable classification depends on behaviour with activity level.' },
        ],
      },
      {
        title: '固定、變動、階梯及混合成本',
        titleEn: 'Fixed, Variable, Step and Mixed Costs',
        points: [
          { zh: '固定成本在相關範圍內總額通常不隨活動量改變，例如工廠租金；但單位固定成本會隨產量增加而下降。', en: 'Total fixed cost normally remains unchanged within the relevant range, such as factory rent; however, fixed cost per unit decreases as output increases.' },
          { zh: '變動成本總額通常按活動量成比例變動，例如直接材料；但單位變動成本在相關範圍內通常保持不變。', en: 'Total variable cost normally changes in proportion to activity level, such as direct materials; however, variable cost per unit usually remains constant within the relevant range.' },
          { zh: '階梯成本在某一活動範圍內保持固定，超過範圍後跳升至另一水平，例如需要增加一名主管或租用另一條生產線。', en: 'Step cost remains fixed over a range of activity and jumps to a new level when that range is exceeded, such as hiring an extra supervisor or renting another production line.' },
          { zh: '混合成本同時包含固定及變動部分，例如水電費或維修費。總成本公式可表示為：總成本 = 固定成本 + 單位變動成本 x 活動量。', en: 'Mixed cost contains both fixed and variable elements, such as utilities or maintenance. Total cost can be expressed as: total cost = fixed cost + variable cost per unit x activity level.' },
          { zh: '高低點法用最高及最低活動量的成本資料估計變動成本：單位變動成本 = 成本差額 / 活動量差額；固定成本 = 總成本 - 單位變動成本 x 活動量。', en: 'The high-low method estimates variable cost using the highest and lowest activity levels: variable cost per unit = cost difference / activity difference; fixed cost = total cost - variable cost per unit x activity level.' },
        ],
      },
      {
        title: '製造成本與非製造成本',
        titleEn: 'Manufacturing and Non-manufacturing Costs',
        points: [
          { zh: '製造成本是把原材料轉化為製成品所需成本，包括直接材料、直接人工、直接費用及工廠製造費用。', en: 'Manufacturing costs are costs incurred to convert raw materials into finished goods, including direct materials, direct labour, direct expenses and factory overheads.' },
          { zh: '主要成本 = 直接材料 + 直接人工 + 直接費用。轉換成本 = 直接人工 + 製造費用，反映把材料轉化為產品的加工成本。', en: 'Prime cost = direct materials + direct labour + direct expenses. Conversion cost = direct labour + manufacturing overheads, representing the cost of converting materials into products.' },
          { zh: '工廠製造費用是間接製造成本，例如間接材料、間接人工、工廠租金、工廠保險及機器折舊。它們須按合理基準分配至產品。', en: 'Factory overheads are indirect manufacturing costs, such as indirect materials, indirect labour, factory rent, factory insurance and machinery depreciation. They must be allocated to products on a reasonable basis.' },
          { zh: '非製造成本包括行政費用、銷售及分銷費用、研究及開發費用和財務成本。這些通常不計入產品成本，而是在發生期間列作期間成本。', en: 'Non-manufacturing costs include administrative overheads, selling and distribution overheads, research and development costs and finance costs. They are normally not included in product cost and are treated as period costs.' },
        ],
      },
      {
        title: '產品成本與期間成本',
        titleEn: 'Product Costs and Period Costs',
        points: [
          { zh: '產品成本是歸屬於存貨及銷貨成本的成本。在貨品出售前，它們列作存貨資產；出售後才轉入銷貨成本。', en: 'Product costs are assigned to inventory and cost of goods sold. Before goods are sold, they are recorded as inventory assets; after sale, they become cost of goods sold.' },
          { zh: '期間成本與特定期間相關，不會先列入存貨，而是在發生期間直接列作費用，例如行政薪金及銷售佣金。', en: 'Period costs relate to a particular period and are not first included in inventory. They are expensed in the period incurred, such as administrative salaries and sales commission.' },
          { zh: '吸收成本法和邊際成本法對固定製造費用是否列入產品成本有不同處理，這會影響存貨估值及不同期間的利潤。', en: 'Absorption costing and marginal costing treat fixed manufacturing overheads differently in product cost, affecting inventory valuation and profit across periods.' },
        ],
      },
    ],
    terms: [
      { term: '管理會計', termEn: 'Management accounting', definition: '為內部管理層提供計劃、控制及決策資料的會計。', definitionEn: 'Accounting that provides internal managers with information for planning, control and decision-making.' },
      { term: '成本會計', termEn: 'Cost accounting', definition: '收集、分類、分配及分析成本資料的會計系統。', definitionEn: 'An accounting system for collecting, classifying, allocating and analysing cost information.' },
      { term: '成本對象', termEn: 'Cost object', definition: '需要獨立計量成本的產品、服務、部門或訂單。', definitionEn: 'A product, service, department or job for which cost is measured separately.' },
      { term: '成本單位', termEn: 'Cost unit', definition: '用來量度某成本對象成本的單位。', definitionEn: 'The unit used to measure the cost of a cost object.' },
      { term: '直接成本', termEn: 'Direct cost', definition: '可直接追溯至某成本對象的成本。', definitionEn: 'A cost that can be directly traced to a cost object.' },
      { term: '間接成本', termEn: 'Indirect cost', definition: '不能經濟地直接追溯至某成本對象的成本。', definitionEn: 'A cost that cannot be economically traced directly to a cost object.' },
      { term: '固定成本', termEn: 'Fixed cost', definition: '在相關範圍內總額通常不隨活動量改變的成本。', definitionEn: 'A cost whose total amount normally does not change with activity level within the relevant range.' },
      { term: '變動成本', termEn: 'Variable cost', definition: '總額通常隨活動量成比例改變的成本。', definitionEn: 'A cost whose total amount normally changes in proportion to activity level.' },
      { term: '階梯成本', termEn: 'Step cost', definition: '在某活動範圍內固定，但超過範圍後跳升的成本。', definitionEn: 'A cost that is fixed within a range of activity but jumps to a new level when the range is exceeded.' },
      { term: '混合成本', termEn: 'Mixed cost', definition: '同時包含固定及變動部分的成本。', definitionEn: 'A cost containing both fixed and variable elements.' },
      { term: '高低點法', termEn: 'High-low method', definition: '用最高及最低活動量資料估計固定和變動成本的方法。', definitionEn: 'A method that uses the highest and lowest activity levels to estimate fixed and variable cost elements.' },
      { term: '主要成本', termEn: 'Prime cost', definition: '直接材料、直接人工及直接費用的總和。', definitionEn: 'The total of direct materials, direct labour and direct expenses.' },
      { term: '轉換成本', termEn: 'Conversion cost', definition: '直接人工及製造費用的總和。', definitionEn: 'The total of direct labour and manufacturing overheads.' },
      { term: '工廠製造費用', termEn: 'Factory overheads', definition: '與製造有關但不能直接追溯至產品的間接成本。', definitionEn: 'Indirect manufacturing costs that cannot be directly traced to products.' },
      { term: '產品成本', termEn: 'Product cost', definition: '計入存貨並在出售時轉為銷貨成本的成本。', definitionEn: 'A cost included in inventory and transferred to cost of goods sold when goods are sold.' },
      { term: '期間成本', termEn: 'Period cost', definition: '在發生期間直接列作費用的成本。', definitionEn: 'A cost expensed directly in the period incurred.' },
    ],
    examTips: [
      { zh: '不要把「直接」等同「變動」。分類題先問成本能否追溯至成本對象，再問成本是否隨活動量改變。', en: 'Do not equate “direct” with “variable”. In classification questions, first ask whether the cost is traceable to the cost object, then whether it changes with activity level.' },
      { zh: '高低點法必須用最高及最低活動量，而不是最高及最低成本。若題目有異常成本，應按題意判斷是否排除。', en: 'The high-low method uses the highest and lowest activity levels, not the highest and lowest costs. If abnormal costs are given, follow the question in deciding whether to exclude them.' },
      { zh: '製造費用屬產品成本，但行政、銷售分銷及財務成本通常屬期間成本。這是吸收成本法題目的常見失分位。', en: 'Manufacturing overheads are product costs, while administrative, selling and distribution and finance costs are normally period costs. This is a common error in absorption-costing questions.' },
    ],
    questions: [
      { question: '直接成本與變動成本有何分別？', questionEn: 'What is the difference between a direct cost and a variable cost?', answer: '直接成本按可否追溯至成本對象分類；變動成本按成本總額是否隨活動量改變分類。兩者分類基準不同。', answerEn: 'Direct cost is classified by traceability to a cost object; variable cost is classified by whether total cost changes with activity level. The bases are different.' },
      { question: '高低點法如何計算單位變動成本？', questionEn: 'How is variable cost per unit calculated under the high-low method?', answer: '用最高活動量及最低活動量的總成本差額，除以兩者的活動量差額。', answerEn: 'Divide the difference in total cost between the highest and lowest activity levels by the difference in activity levels.' },
      { question: '為何工廠租金可屬產品成本，但辦公室租金通常屬期間成本？', questionEn: 'Why can factory rent be a product cost while office rent is usually a period cost?', answer: '工廠租金與製造產品有關，屬製造費用並可吸收到存貨成本；辦公室租金屬行政開支，通常在發生期間列作費用。', answerEn: 'Factory rent relates to manufacturing and is absorbed into inventory as manufacturing overhead; office rent is an administrative expense and is normally expensed in the period incurred.' },
    ],
  },
  {
    id: 'absorption-costing-and-marginal-costing',
    number: 2,
    title: '吸收成本法與邊際成本法',
    titleEn: 'Absorption Costing and Marginal Costing',
    objective: {
      zh: '比較吸收成本法與邊際成本法的成本處理，計算製造費用吸收率，編製兩種方法下的損益表，並解釋存貨變動對利潤的影響。',
      en: 'Compare cost treatment under absorption costing and marginal costing, calculate overhead absorption rates, prepare income statements under both methods and explain how inventory changes affect profit.',
    },
    sections: [
      {
        title: '兩種成本法的核心分別',
        titleEn: 'Core Difference Between the Two Costing Systems',
        points: [
          { zh: '吸收成本法把所有製造成本，包括固定製造費用，計入產品成本；非製造成本則作期間成本處理。', en: 'Absorption costing includes all manufacturing costs, including fixed manufacturing overheads, in product cost; non-manufacturing costs are treated as period costs.' },
          { zh: '邊際成本法只把變動製造成本計入產品成本，固定製造費用在發生期間全數列作期間成本。', en: 'Marginal costing includes only variable manufacturing costs in product cost. Fixed manufacturing overheads are expensed in full as period costs in the period incurred.' },
          { zh: '兩種方法對固定製造費用的處理不同，因此當期初或期末存貨存在固定製造費用時，報告利潤可能不同。', en: 'The two methods treat fixed manufacturing overheads differently, so reported profits may differ when opening or closing inventories contain fixed manufacturing overheads.' },
        ],
      },
      {
        title: '製造費用吸收率',
        titleEn: 'Overhead Absorption Rate',
        points: [
          { zh: '預定製造費用吸收率 = 預計製造費用 / 預計活動量。活動量可按直接人工小時、機器小時、直接人工成本或生產件數等基準計算。', en: 'Predetermined overhead absorption rate = budgeted manufacturing overheads / budgeted activity level. The activity base may be direct labour hours, machine hours, direct labour cost or units produced.' },
          { zh: '已吸收製造費用 = 實際活動量 x 預定製造費用吸收率。這是吸收到產品成本內的製造費用金額。', en: 'Manufacturing overheads absorbed = actual activity level x predetermined overhead absorption rate. This is the overhead amount included in product cost.' },
          { zh: '若已吸收製造費用大於實際製造費用，出現多吸收；若已吸收製造費用小於實際製造費用，出現少吸收。', en: 'If overhead absorbed exceeds actual overhead, there is over-absorption. If overhead absorbed is less than actual overhead, there is under-absorption.' },
          { zh: '多吸收通常加回利潤或扣減銷貨成本；少吸收通常扣減利潤或加到銷貨成本。作答時應按題目格式處理。', en: 'Over-absorption is usually added to profit or deducted from cost of goods sold; under-absorption is usually deducted from profit or added to cost of goods sold. Follow the format required by the question.' },
        ],
      },
      {
        title: '吸收成本法損益表',
        titleEn: 'Income Statement Under Absorption Costing',
        points: [
          { zh: '吸收成本法的單位產品成本包括直接材料、直接人工、直接費用、變動製造費用及固定製造費用吸收額。', en: 'Unit product cost under absorption costing includes direct materials, direct labour, direct expenses, variable manufacturing overheads and absorbed fixed manufacturing overheads.' },
          { zh: '損益表通常以銷售收入減銷貨成本計算毛利，再扣除行政、銷售分銷及其他期間成本。', en: 'The income statement usually deducts cost of goods sold from sales revenue to calculate gross profit, then deducts administrative, selling and distribution and other period costs.' },
          { zh: '期末存貨按完整製造成本估值，因此部分固定製造費用可被遞延至未來期間；期初存貨則會把過往遞延的固定製造費用釋放到本期銷貨成本。', en: 'Closing inventory is valued at full manufacturing cost, so part of fixed manufacturing overhead may be deferred to future periods; opening inventory releases previously deferred fixed overhead into current cost of goods sold.' },
        ],
      },
      {
        title: '邊際成本法損益表',
        titleEn: 'Income Statement Under Marginal Costing',
        points: [
          { zh: '邊際成本法先計算貢獻：貢獻 = 銷售收入 - 變動成本。貢獻用來吸收固定成本，餘額為利潤。', en: 'Marginal costing first calculates contribution: contribution = sales revenue - variable costs. Contribution covers fixed costs, and the remaining amount is profit.' },
          { zh: '邊際成本法下，存貨只包括變動製造成本，不包括固定製造費用。固定製造費用在本期全數扣除。', en: 'Under marginal costing, inventory includes only variable manufacturing costs and excludes fixed manufacturing overheads. Fixed manufacturing overheads are deducted in full in the current period.' },
          { zh: '邊際成本法能清楚顯示銷售量、單位貢獻和固定成本之間的關係，常用於短期決策和本量利分析。', en: 'Marginal costing clearly shows the relationship among sales volume, unit contribution and fixed costs, so it is often used for short-term decision-making and cost-volume-profit analysis.' },
        ],
      },
      {
        title: '兩種方法下利潤差異',
        titleEn: 'Profit Difference Under the Two Methods',
        points: [
          { zh: '若產量大於銷量，期末存貨增加，吸收成本法會把部分固定製造費用留在期末存貨，吸收成本法利潤通常較高。', en: 'If production exceeds sales and closing inventory increases, absorption costing carries part of fixed manufacturing overhead in closing inventory, so absorption profit is usually higher.' },
          { zh: '若銷量大於產量，存貨減少，吸收成本法會把期初存貨內的固定製造費用釋放到本期，邊際成本法利潤通常較高。', en: 'If sales exceed production and inventory decreases, absorption costing releases fixed overhead from opening inventory into the current period, so marginal profit is usually higher.' },
          { zh: '若產量等於銷量且存貨不變，兩種方法下利潤通常相同，因為沒有固定製造費用在存貨中遞延或釋放。', en: 'If production equals sales and inventory is unchanged, profits are usually the same because no fixed manufacturing overhead is deferred or released through inventory.' },
          { zh: '利潤差異可用存貨變動中的固定製造費用解釋：差異 = 期末存貨內固定製造費用 - 期初存貨內固定製造費用。', en: 'The profit difference can be explained by fixed manufacturing overhead in inventory: difference = fixed manufacturing overhead in closing inventory - fixed manufacturing overhead in opening inventory.' },
        ],
      },
      {
        title: '優點、限制與應用',
        titleEn: 'Advantages, Limitations and Applications',
        points: [
          { zh: '吸收成本法符合財務報告把所有製造成本計入存貨的要求，適合外部報告及長期定價，但可能因增加生產而提高短期利潤。', en: 'Absorption costing meets the financial reporting requirement to include all manufacturing costs in inventory and is suitable for external reporting and long-term pricing, but profit may be increased in the short term by producing more.' },
          { zh: '邊際成本法強調貢獻和固定成本，適合短期決策、接受特殊訂單及本量利分析，但不符合外部財務報告的完整製造成本存貨估值要求。', en: 'Marginal costing emphasises contribution and fixed costs, making it useful for short-term decisions, special orders and cost-volume-profit analysis, but it does not meet full manufacturing cost inventory valuation for external reporting.' },
          { zh: '選擇成本法時應考慮用途。若目的是編製外部財務報表，通常用吸收成本法；若目的是短期管理決策，邊際成本法通常更清晰。', en: 'The choice of costing system depends on purpose. Absorption costing is normally used for external financial statements, while marginal costing is usually clearer for short-term management decisions.' },
        ],
      },
    ],
    terms: [
      { term: '吸收成本法', termEn: 'Absorption costing', definition: '把所有製造成本，包括固定製造費用，吸收到產品成本的成本計算方法。', definitionEn: 'A costing method that absorbs all manufacturing costs, including fixed manufacturing overheads, into product cost.' },
      { term: '邊際成本法', termEn: 'Marginal costing', definition: '只把變動製造成本計入產品成本，固定製造費用列作期間成本的方法。', definitionEn: 'A costing method that includes only variable manufacturing costs in product cost and treats fixed manufacturing overheads as period costs.' },
      { term: '吸收基準', termEn: 'Absorption base', definition: '用來分配製造費用的活動量基準，例如人工小時或機器小時。', definitionEn: 'The activity base used to absorb manufacturing overheads, such as labour hours or machine hours.' },
      { term: '預定製造費用吸收率', termEn: 'Predetermined overhead absorption rate', definition: '以預計製造費用除以預計活動量計算的吸收率。', definitionEn: 'An overhead absorption rate calculated as budgeted manufacturing overheads divided by budgeted activity level.' },
      { term: '已吸收製造費用', termEn: 'Manufacturing overheads absorbed', definition: '按實際活動量及預定吸收率計入產品成本的製造費用。', definitionEn: 'Manufacturing overheads included in product cost using actual activity and a predetermined absorption rate.' },
      { term: '多吸收製造費用', termEn: 'Over-absorption of manufacturing overheads', definition: '已吸收製造費用大於實際製造費用的差額。', definitionEn: 'The excess of overheads absorbed over actual manufacturing overheads.' },
      { term: '少吸收製造費用', termEn: 'Under-absorption of manufacturing overheads', definition: '已吸收製造費用小於實際製造費用的差額。', definitionEn: 'The shortfall when overheads absorbed are less than actual manufacturing overheads.' },
      { term: '貢獻', termEn: 'Contribution', definition: '銷售收入減變動成本後，用以彌補固定成本及提供利潤的金額。', definitionEn: 'Sales revenue less variable costs, used to cover fixed costs and provide profit.' },
      { term: '單位貢獻', termEn: 'Contribution per unit', definition: '每銷售一單位產品所產生的貢獻。', definitionEn: 'Contribution generated by selling one unit of product.' },
      { term: '固定製造費用', termEn: 'Fixed manufacturing overheads', definition: '在相關範圍內總額通常不隨產量改變的製造費用。', definitionEn: 'Manufacturing overheads whose total amount normally does not change with output within the relevant range.' },
      { term: '存貨估值', termEn: 'Inventory valuation', definition: '決定期末存貨應以何種成本金額列示的過程。', definitionEn: 'The process of determining the cost amount at which closing inventory is shown.' },
      { term: '貢獻式損益表', termEn: 'Contribution-format income statement', definition: '以銷售收入減變動成本得出貢獻，再扣除固定成本的損益表格式。', definitionEn: 'An income statement format that deducts variable costs from sales to show contribution before deducting fixed costs.' },
    ],
    examTips: [
      { zh: '吸收成本法先看毛利，邊際成本法先看貢獻。寫損益表時要用對格式，否則分類正確也容易失分。', en: 'Absorption costing starts with gross profit, while marginal costing starts with contribution. Use the correct income-statement format to avoid losing marks despite correct classification.' },
      { zh: '多吸收加利潤，少吸收減利潤。判斷時先比較「已吸收」和「實際」製造費用，不要只看預算數。', en: 'Over-absorption increases profit; under-absorption decreases profit. Compare absorbed overhead with actual overhead, not only budgeted figures.' },
      { zh: '解釋兩種方法利潤差異時，核心是固定製造費用在存貨中的遞延或釋放，而不是銷售收入或變動成本不同。', en: 'When explaining profit differences, focus on fixed manufacturing overhead deferred or released through inventory, not on sales revenue or variable costs.' },
    ],
    questions: [
      { question: '吸收成本法和邊際成本法對固定製造費用的處理有何不同？', questionEn: 'How do absorption costing and marginal costing treat fixed manufacturing overheads differently?', answer: '吸收成本法把固定製造費用吸收到產品成本及存貨；邊際成本法把固定製造費用在發生期間全數列作期間成本。', answerEn: 'Absorption costing absorbs fixed manufacturing overheads into product cost and inventory; marginal costing expenses them in full as period costs in the period incurred.' },
      { question: '若期末存貨增加，哪種方法的利潤通常較高？為甚麼？', questionEn: 'If closing inventory increases, which method usually reports higher profit and why?', answer: '吸收成本法通常較高，因為部分固定製造費用被留在期末存貨，沒有在本期全數扣除。', answerEn: 'Absorption costing usually reports higher profit because part of fixed manufacturing overhead is carried in closing inventory instead of being fully expensed in the period.' },
      { question: '製造費用少吸收應如何影響利潤？', questionEn: 'How should under-absorption of manufacturing overheads affect profit?', answer: '少吸收代表計入產品成本的製造費用不足，需把差額加到銷貨成本或從利潤扣除，因此利潤下降。', answerEn: 'Under-absorption means insufficient overhead has been included in product cost, so the difference is added to cost of goods sold or deducted from profit, reducing profit.' },
      { question: '為何邊際成本法常用於短期決策？', questionEn: 'Why is marginal costing often used for short-term decisions?', answer: '它清楚顯示銷售收入、變動成本、貢獻及固定成本，有助分析額外訂單、售價改變和本量利關係。', answerEn: 'It clearly shows sales revenue, variable costs, contribution and fixed costs, helping analyse additional orders, price changes and cost-volume-profit relationships.' },
    ],
  },
]
