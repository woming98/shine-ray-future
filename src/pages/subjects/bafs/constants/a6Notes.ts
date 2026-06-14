import { C1DetailedChapter } from './c1Notes'

export const A6_DETAILED_CHAPTERS: C1DetailedChapter[] = [
  {
    id: 'partnership-financial-statements',
    number: 1,
    title: '合夥企業財務報表',
    titleEn: 'Financial Statements for Partnerships',
    objective: {
      zh: '理解合夥協議及利潤分配規則，分辨固定與浮動資本制度，並編製合夥企業財務報表。',
      en: 'Understand partnership agreements and profit appropriation rules, distinguish fixed and fluctuating capital systems, and prepare partnership financial statements.',
    },
    sections: [
      {
        title: '合夥企業與合夥協議',
        titleEn: 'Partnerships and Partnership Agreements',
        points: [
          { zh: '合夥企業由兩名或以上人士共同經營，合夥人共同投入資本、參與業務，並按協議分享利潤或虧損。', en: 'A partnership is operated by two or more persons who contribute capital, participate in the business and share profit or loss according to an agreement.' },
          { zh: '合夥協議通常列明資本投入、利潤及虧損分享比例、資本利息、提款利息、合夥人薪金，以及加入或退出安排。', en: 'A partnership agreement normally states capital contributions, the profit and loss sharing ratio, interest on capital, interest on drawings, partners’ salaries, and admission or withdrawal arrangements.' },
          { zh: '合夥人薪金及資本利息是利潤分配，不是營運費用；它們不會在計算合夥企業淨利潤前扣除。', en: 'Partners’ salaries and interest on capital are appropriations of profit, not operating expenses; they are not deducted before calculating partnership net profit.' },
        ],
      },
      {
        title: '利潤分配帳',
        titleEn: 'Profit and Loss Appropriation Account',
        points: [
          { zh: '利潤分配帳把損益表所得淨利潤按合夥協議分配。一般次序是：淨利潤，加提款利息，減資本利息及合夥人薪金，再按分享比例分配剩餘利潤或虧損。', en: 'The appropriation account distributes net profit from the income statement according to the partnership agreement. The usual sequence is: net profit, add interest on drawings, deduct interest on capital and partners’ salaries, then share the residual profit or loss.' },
          { zh: '提款利息由合夥人支付給合夥企業，會增加可供分配利潤；資本利息及合夥人薪金則是分配給個別合夥人的款項。', en: 'Interest on drawings is paid by partners to the partnership and increases profit available for appropriation; interest on capital and partners’ salaries are allocations to individual partners.' },
          { zh: '若資本利息及薪金總額超過可供分配利潤，剩餘項目會成為虧損，仍須按利潤及虧損分享比例由合夥人承擔。', en: 'If interest on capital and salaries exceed profit available for appropriation, the residual becomes a loss and is still shared using the profit and loss sharing ratio.' },
        ],
      },
      {
        title: '固定與浮動資本制度',
        titleEn: 'Fixed and Fluctuating Capital Systems',
        points: [
          { zh: '浮動資本制度只為每名合夥人設立一個資本帳，資本投入、提款、利息、薪金及應佔利潤均記入該帳，因此結餘會經常變動。', en: 'Under the fluctuating capital system, each partner has one capital account recording capital contributions, drawings, interest, salary and profit share, so its balance changes frequently.' },
          { zh: '固定資本制度把永久資本記入資本帳，日常分配及提款記入往來帳。除非合夥人正式增減資本，資本帳結餘維持不變。', en: 'Under the fixed capital system, permanent capital is recorded in the capital account while routine appropriations and drawings are recorded in the current account. Capital remains unchanged unless formally increased or reduced.' },
          { zh: '往來帳可能有貸方結餘，代表企業欠合夥人；亦可能有借方結餘，代表合夥人欠企業。', en: 'A current account may have a credit balance, meaning the partnership owes the partner, or a debit balance, meaning the partner owes the partnership.' },
        ],
      },
      {
        title: '合夥企業財務報表',
        titleEn: 'Partnership Financial Statements',
        points: [
          { zh: '合夥企業損益表的格式與獨資企業相近，先計算整體業務的毛利及淨利潤，再於利潤分配帳分配予合夥人。', en: 'A partnership income statement is similar to that of a sole proprietorship. It first calculates gross profit and net profit for the business, which is then allocated through the appropriation account.' },
          { zh: '財務狀況表的權益部分須分別列示每名合夥人的資本及往來帳結餘；借方往來帳須從合夥人權益中扣除。', en: 'The equity section of the statement of financial position separately shows each partner’s capital and current account balance; debit current account balances are deducted from partners’ equity.' },
          { zh: '期末檢查應確認淨利潤已完整分配、每名合夥人的帳戶過帳正確，以及財務狀況表保持平衡。', en: 'At period end, check that net profit is fully appropriated, each partner’s account is posted correctly and the statement of financial position balances.' },
        ],
      },
    ],
    terms: [
      { term: '合夥企業', termEn: 'Partnership', definition: '由兩名或以上人士共同經營並分享利潤或虧損的企業。', definitionEn: 'A business operated by two or more persons who share profit or loss.' },
      { term: '合夥協議', termEn: 'Partnership agreement', definition: '列明合夥人權利、責任及利潤分配安排的協議。', definitionEn: 'An agreement stating partners’ rights, duties and profit appropriation arrangements.' },
      { term: '資本投入', termEn: 'Capital contribution', definition: '合夥人投入企業作長期營運的資金或資產。', definitionEn: 'Money or assets introduced by a partner for long-term business use.' },
      { term: '利潤及虧損分享比例', termEn: 'Profit and loss sharing ratio', definition: '合夥人分配剩餘利潤或承擔虧損的比例。', definitionEn: 'The ratio used by partners to share residual profit or bear loss.' },
      { term: '資本利息', termEn: 'Interest on capital', definition: '按合夥人投入資本計算的利潤分配。', definitionEn: 'An appropriation of profit calculated on a partner’s capital contribution.' },
      { term: '提款利息', termEn: 'Interest on drawings', definition: '合夥人因私人提款而支付給企業的款項。', definitionEn: 'An amount charged to a partner for private drawings.' },
      { term: '合夥人薪金', termEn: 'Partner salary', definition: '按合夥協議分配給合夥人的款項，並非營運費用。', definitionEn: 'An amount allocated to a partner under the agreement, rather than an operating expense.' },
      { term: '利潤分配', termEn: 'Appropriation', definition: '把合夥企業淨利潤按協議分配給合夥人的過程。', definitionEn: 'The process of allocating partnership net profit among partners according to the agreement.' },
      { term: '利潤分配帳', termEn: 'Profit and loss appropriation account', definition: '記錄資本利息、提款利息、薪金及剩餘利潤分配的帳戶。', definitionEn: 'An account recording interest on capital, interest on drawings, salaries and residual profit sharing.' },
      { term: '浮動資本帳', termEn: 'Fluctuating capital account', definition: '記錄合夥人所有資本及日常權益變動的單一帳戶。', definitionEn: 'A single account recording all capital and routine equity changes for a partner.' },
      { term: '固定資本帳', termEn: 'Fixed capital account', definition: '只記錄合夥人正式資本投入或減少的帳戶。', definitionEn: 'An account recording only formal increases or reductions in a partner’s capital.' },
      { term: '往來帳', termEn: 'Current account', definition: '在固定資本制度下記錄提款及利潤分配等日常變動的帳戶。', definitionEn: 'An account recording routine items such as drawings and appropriations under the fixed capital system.' },
    ],
    examTips: [
      { zh: '編製利潤分配帳時，先從損益表淨利潤開始；不要把合夥人薪金或資本利息當作損益表費用。', en: 'Start the appropriation account with net profit from the income statement; do not treat partners’ salaries or interest on capital as income-statement expenses.' },
      { zh: '固定資本制度題目中，除正式增減資本外，提款、利息、薪金及利潤份額全部記入往來帳。', en: 'Under the fixed capital system, drawings, interest, salaries and profit shares all go to current accounts unless capital is formally increased or reduced.' },
    ],
    questions: [
      { question: '為何合夥人薪金不是合夥企業的營運費用？', questionEn: 'Why is a partner’s salary not an operating expense of a partnership?', answer: '合夥人是企業擁有人，薪金是合夥協議下的利潤分配，而不是支付給僱員的費用。', answerEn: 'A partner is an owner of the business, so the salary is an appropriation of profit under the partnership agreement rather than an employee expense.' },
      { question: '提款利息對可供分配利潤有甚麼影響？', questionEn: 'How does interest on drawings affect profit available for appropriation?', answer: '提款利息由合夥人支付給企業，因此會加入淨利潤並增加可供分配金額。', answerEn: 'Interest on drawings is paid by partners to the partnership, so it is added to net profit and increases the amount available for appropriation.' },
      { question: '固定資本制度下，合夥人應佔利潤記入哪個帳戶？', questionEn: 'Under the fixed capital system, where is a partner’s share of profit recorded?', answer: '記入合夥人的往來帳貸方，資本帳除正式資本變動外維持不變。', answerEn: 'It is credited to the partner’s current account, while the capital account remains unchanged except for formal capital changes.' },
    ],
  },
  {
    id: 'partnership-goodwill',
    number: 2,
    title: '合夥商譽',
    titleEn: 'Partnership Goodwill',
    objective: {
      zh: '理解商譽的性質及估值因素，並處理分享比例改變、合夥人加入或退出時的商譽調整。',
      en: 'Understand the nature and valuation of goodwill and account for goodwill when profit-sharing ratios change or partners are admitted or withdraw.',
    },
    sections: [
      {
        title: '商譽的性質與估值',
        titleEn: 'Nature and Valuation of Goodwill',
        points: [
          { zh: '商譽是企業整體價值超過可分辨淨資產公平值的部分，來源可包括聲譽、顧客關係、地點、員工能力及超額盈利能力。', en: 'Goodwill is the excess of the value of a business over the fair value of its separable net assets. It may arise from reputation, customer relationships, location, workforce capability and superior earning power.' },
          { zh: '購入商譽在購買企業時產生並有客觀交易價格；內在商譽由企業自行建立，通常沒有獨立交易成本。', en: 'Purchased goodwill arises when a business is acquired and has an objective transaction price; inherent goodwill is internally generated and normally has no separate transaction cost.' },
          { zh: '商譽估值受預期盈利、企業聲譽、競爭程度、顧客忠誠及經營風險影響，因此可能隨時間改變。', en: 'Goodwill valuation is affected by expected profit, reputation, competition, customer loyalty and business risk, so it may change over time.' },
        ],
      },
      {
        title: '分享比例改變時的商譽',
        titleEn: 'Goodwill on a Change in Profit-sharing Ratio',
        points: [
          { zh: '分享比例改變代表部分合夥人犧牲未來利潤份額，另一些合夥人取得額外份額；獲益合夥人應補償犧牲合夥人。', en: 'A change in profit-sharing ratio means some partners sacrifice future profit shares while others gain additional shares; gaining partners should compensate sacrificing partners.' },
          { zh: '犧牲比例等於舊分享比例減新分享比例；獲益比例等於新分享比例減舊分享比例。商譽補償按各合夥人的犧牲或獲益計算。', en: 'The sacrificing ratio equals the old ratio minus the new ratio; the gaining ratio equals the new ratio minus the old ratio. Goodwill compensation is based on each partner’s sacrifice or gain.' },
          { zh: '若商譽不保留在帳簿，可直接借記獲益合夥人的資本或往來帳，並貸記犧牲合夥人的資本或往來帳。', en: 'If goodwill is not retained in the books, gaining partners’ capital or current accounts are debited directly and sacrificing partners’ accounts are credited.' },
        ],
      },
      {
        title: '新合夥人加入',
        titleEn: 'Admission of a New Partner',
        points: [
          { zh: '新合夥人取得未來利潤份額，通常須為取得的商譽份額補償犧牲份額的原有合夥人。', en: 'A new partner obtains a share of future profit and normally compensates existing partners who sacrifice shares for the related goodwill.' },
          { zh: '首先比較原有合夥人的舊比例和加入後新比例，計算每人的犧牲比例；商譽補償只按實際犧牲分配。', en: 'First compare each existing partner’s old ratio with the new ratio after admission to calculate the sacrificing ratio; goodwill compensation is allocated only according to actual sacrifice.' },
          { zh: '新合夥人投入的現金可能包括資本及商譽補償，兩者目的不同，入帳時須按題目要求分開處理。', en: 'Cash introduced by a new partner may include capital and goodwill compensation. They serve different purposes and must be accounted for separately as required.' },
        ],
      },
      {
        title: '合夥人退出',
        titleEn: 'Withdrawal of a Partner',
        points: [
          { zh: '退出合夥人放棄未來利潤份額，應獲補償其應佔商譽；繼續經營並取得額外份額的合夥人承擔補償。', en: 'A withdrawing partner gives up a future profit share and should receive compensation for the related goodwill; continuing partners who gain additional shares bear the compensation.' },
          { zh: '比較繼續經營合夥人的退出前後比例可計算獲益比例，再按獲益比例借記其資本或往來帳，貸記退出合夥人帳戶。', en: 'Compare continuing partners’ ratios before and after withdrawal to calculate their gaining ratio, then debit their capital or current accounts and credit the withdrawing partner’s account accordingly.' },
          { zh: '退出合夥人的最終結算通常包括資本、往來帳結餘、商譽補償及重估損益份額，最後扣除欠款或提款。', en: 'Final settlement with a withdrawing partner normally includes capital, current account balance, goodwill compensation and revaluation share, less any amount owed or drawings.' },
        ],
      },
    ],
    terms: [
      { term: '商譽', termEn: 'Goodwill', definition: '企業整體價值超過可分辨淨資產公平值的部分。', definitionEn: 'The excess of the value of a business over the fair value of its separable net assets.' },
      { term: '公平值', termEn: 'Fair value', definition: '資產或負債在有序市場交易中的現時價值。', definitionEn: 'The current value of an asset or liability in an orderly market transaction.' },
      { term: '可分辨淨資產', termEn: 'Separable net assets', definition: '可個別識別的資產減負債。', definitionEn: 'Individually identifiable assets less liabilities.' },
      { term: '購入商譽', termEn: 'Purchased goodwill', definition: '購買企業時支付價格超過可分辨淨資產公平值的部分。', definitionEn: 'The excess of a business purchase price over the fair value of separable net assets.' },
      { term: '內在商譽', termEn: 'Inherent goodwill', definition: '由企業自行建立但沒有獨立購入成本的商譽。', definitionEn: 'Internally generated goodwill without a separate purchase cost.' },
      { term: '無形資產', termEn: 'Intangible asset', definition: '沒有實體形態但能為企業帶來經濟利益的資產。', definitionEn: 'An asset without physical substance that can generate economic benefits.' },
      { term: '舊分享比例', termEn: 'Old profit-sharing ratio', definition: '合夥變動前適用的利潤及虧損分享比例。', definitionEn: 'The profit and loss sharing ratio applying before a partnership change.' },
      { term: '新分享比例', termEn: 'New profit-sharing ratio', definition: '合夥變動後適用的利潤及虧損分享比例。', definitionEn: 'The profit and loss sharing ratio applying after a partnership change.' },
      { term: '犧牲比例', termEn: 'Sacrificing ratio', definition: '合夥人因比例改變而放棄的未來利潤份額。', definitionEn: 'The future profit share given up by a partner following a ratio change.' },
      { term: '獲益比例', termEn: 'Gaining ratio', definition: '合夥人因比例改變而增加的未來利潤份額。', definitionEn: 'The additional future profit share gained by a partner following a ratio change.' },
      { term: '合夥人加入', termEn: 'Admission of a partner', definition: '新合夥人加入企業並取得未來利潤份額。', definitionEn: 'A new partner joining the business and obtaining a future profit share.' },
      { term: '合夥人退出', termEn: 'Withdrawal of a partner', definition: '現有合夥人離開企業並放棄未來利潤份額。', definitionEn: 'An existing partner leaving the business and giving up a future profit share.' },
    ],
    examTips: [
      { zh: '商譽調整題必須先寫舊比例及新比例，再計算誰犧牲、誰獲益；不要直接假設所有原有合夥人按舊比例獲補償。', en: 'For goodwill adjustments, write the old and new ratios first and calculate who sacrifices and who gains; do not assume all existing partners are compensated in the old ratio.' },
      { zh: '商譽不保留時，分錄方向是借記獲益者、貸記犧牲者；總借方必須等於總貸方。', en: 'When goodwill is not retained, debit gaining partners and credit sacrificing partners; total debits must equal total credits.' },
    ],
    questions: [
      { question: '合夥分享比例改變時，為何需要商譽補償？', questionEn: 'Why is goodwill compensation needed when the profit-sharing ratio changes?', answer: '獲益合夥人取得較多未來超額盈利份額，而犧牲合夥人放棄部分份額，因此應作公平補償。', answerEn: 'Gaining partners obtain a greater share of future superior earnings while sacrificing partners give up part of their shares, so fair compensation is required.' },
      { question: '新合夥人加入時，商譽補償應分配給誰？', questionEn: 'Who should receive goodwill compensation when a new partner is admitted?', answer: '應按實際犧牲比例分配給放棄未來利潤份額的原有合夥人。', answerEn: 'It should be allocated to existing partners who give up future profit shares, according to their actual sacrificing ratio.' },
      { question: '合夥人退出時，如何找出繼續經營合夥人的商譽負擔？', questionEn: 'How is the goodwill burden of continuing partners determined when a partner withdraws?', answer: '比較其退出前後分享比例，按每名繼續經營合夥人的獲益比例承擔商譽補償。', answerEn: 'Compare their sharing ratios before and after withdrawal and allocate goodwill compensation according to each continuing partner’s gaining ratio.' },
    ],
  },
  {
    id: 'partnership-revaluation',
    number: 3,
    title: '合夥資產重估',
    titleEn: 'Partnership Revaluation',
    objective: {
      zh: '理解合夥變動時重估淨資產的需要，編製重估分錄及重估帳，並分析對折舊及合夥人權益的影響。',
      en: 'Understand why partnership net assets are revalued on partnership changes, prepare revaluation entries and accounts, and analyse effects on depreciation and partners’ equity.',
    },
    sections: [
      {
        title: '重估的目的',
        titleEn: 'Purpose of Revaluation',
        points: [
          { zh: '合夥人加入、退出或分享比例改變時，帳面值可能與公平值不同。重估可確保變動前累積的未實現收益或虧損由原有合夥人公平承擔。', en: 'On admission, withdrawal or a ratio change, book values may differ from fair values. Revaluation ensures unrealised gains or losses accumulated before the change are fairly borne by the existing partners.' },
          { zh: '若不重估，加入後才確認的舊有收益可能錯誤分配給新合夥人；退出合夥人亦可能無法取得離開前應佔價值。', en: 'Without revaluation, gains existing before admission may be wrongly allocated to a new partner, while a withdrawing partner may not receive the value earned before leaving.' },
          { zh: '重估按資產及負債公平值調整帳面值，不等同出售資產或產生現金流。', en: 'Revaluation adjusts book values to fair values; it does not mean assets are sold or cash flows arise.' },
        ],
      },
      {
        title: '重估分錄與重估帳',
        titleEn: 'Revaluation Entries and Revaluation Account',
        points: [
          { zh: '資產升值：借記資產、貸記重估帳；資產減值：借記重估帳、貸記資產。', en: 'For an increase in an asset: debit the asset and credit the revaluation account; for a decrease: debit the revaluation account and credit the asset.' },
          { zh: '負債增加：借記重估帳、貸記負債；負債減少：借記負債、貸記重估帳。未入帳資產或負債亦按相同邏輯確認。', en: 'For an increase in a liability: debit the revaluation account and credit the liability; for a decrease: debit the liability and credit the revaluation account. Previously unrecorded assets or liabilities follow the same logic.' },
          { zh: '重估帳貸方多於借方形成重估收益，借方多於貸方形成重估虧損；兩者均按變動前舊分享比例轉入合夥人帳戶。', en: 'A credit excess in the revaluation account is a revaluation gain and a debit excess is a revaluation loss; both are transferred to partners’ accounts using the old ratio before the change.' },
        ],
      },
      {
        title: '重估、商譽與合夥變動',
        titleEn: 'Revaluation, Goodwill and Partnership Changes',
        points: [
          { zh: '重估處理可分辨資產及負債的公平值變動；商譽則處理企業整體超額盈利能力，兩者概念及分錄不可混淆。', en: 'Revaluation deals with fair-value changes in identifiable assets and liabilities; goodwill deals with the business’s overall superior earning capacity. Their concepts and entries must not be confused.' },
          { zh: '在合夥變動中，通常先確認重估損益並按舊比例分配，再處理商譽補償、新資本及最終結算。', en: 'For a partnership change, revaluation gain or loss is normally recognised and shared in the old ratio before goodwill compensation, new capital and final settlement are processed.' },
          { zh: '若題目要求資產維持舊帳面值，可先記錄重估及分配，再作相反調整；相反調整通常按新分享比例處理，須依題目要求。', en: 'If assets are to remain at old book values, the revaluation and allocation may first be recorded and then reversed; the reversal is normally dealt with using the new ratio, subject to the question requirements.' },
        ],
      },
      {
        title: '重估對折舊及報表的影響',
        titleEn: 'Effects on Depreciation and Financial Statements',
        points: [
          { zh: '可折舊非流動資產升值後，未來折舊通常增加；減值後，未來折舊通常減少。計算須使用重估後金額、剩餘年期及適用方法。', en: 'After an upward revaluation of a depreciable non-current asset, future depreciation normally increases; after a downward revaluation, it normally decreases. Calculations use the revalued amount, remaining life and applicable method.' },
          { zh: '重估會改變資產或負債帳面值及合夥人權益，但重估收益不是損益表的日常營運收入。', en: 'Revaluation changes asset or liability book values and partners’ equity, but a revaluation gain is not ordinary operating income in the income statement.' },
          { zh: '完成重估後應檢查：所有公平值調整已入帳、重估帳已結清、損益按舊比例分配，以及新財務狀況表保持平衡。', en: 'After revaluation, check that all fair-value adjustments are recorded, the revaluation account is closed, gain or loss is shared in the old ratio and the new statement of financial position balances.' },
        ],
      },
    ],
    terms: [
      { term: '重估', termEn: 'Revaluation', definition: '把資產或負債帳面值調整至公平值的過程。', definitionEn: 'The process of adjusting the book value of an asset or liability to fair value.' },
      { term: '帳面淨值', termEn: 'Net book value', definition: '資產成本減累計折舊或相關累計減值後的帳面金額。', definitionEn: 'The carrying amount of an asset after accumulated depreciation or related impairment.' },
      { term: '重估收益', termEn: 'Gain on revaluation', definition: '重估所產生的資產淨增加或負債淨減少。', definitionEn: 'A net increase in assets or net decrease in liabilities arising from revaluation.' },
      { term: '重估虧損', termEn: 'Loss on revaluation', definition: '重估所產生的資產淨減少或負債淨增加。', definitionEn: 'A net decrease in assets or net increase in liabilities arising from revaluation.' },
      { term: '重估帳', termEn: 'Revaluation account', definition: '匯總資產及負債公平值調整並計算重估損益的帳戶。', definitionEn: 'An account summarising fair-value adjustments and calculating revaluation gain or loss.' },
      { term: '未入帳資產', termEn: 'Unrecorded asset', definition: '已存在但尚未記入合夥企業帳簿的資產。', definitionEn: 'An existing asset not yet recorded in the partnership books.' },
      { term: '未入帳負債', termEn: 'Unrecorded liability', definition: '已存在但尚未記入合夥企業帳簿的負債。', definitionEn: 'An existing liability not yet recorded in the partnership books.' },
      { term: '舊分享比例', termEn: 'Old profit-sharing ratio', definition: '用於分配合夥變動前累積重估損益的比例。', definitionEn: 'The ratio used to allocate revaluation gain or loss accumulated before a partnership change.' },
      { term: '折舊', termEn: 'Depreciation', definition: '把可折舊資產成本或重估金額於使用年期內有系統地分配。', definitionEn: 'The systematic allocation of a depreciable asset’s cost or revalued amount over its useful life.' },
    ],
    examTips: [
      { zh: '重估分錄可用「企業淨資產增加便貸記重估帳；淨資產減少便借記重估帳」作方向檢查。', en: 'Check revaluation entries using this rule: an increase in partnership net assets credits the revaluation account; a decrease debits it.' },
      { zh: '重估損益必須按變動前舊比例分配，因為它在新合夥人加入或比例改變前已累積。', en: 'Revaluation gain or loss must be shared in the old ratio because it accumulated before admission or the ratio change.' },
    ],
    questions: [
      { question: '為何新合夥人加入前通常要重估淨資產？', questionEn: 'Why are net assets normally revalued before a new partner is admitted?', answer: '確保加入前累積的資產升跌及負債變動只由原有合夥人按舊比例享有或承擔。', answerEn: 'It ensures asset and liability changes accumulated before admission are enjoyed or borne only by existing partners in the old ratio.' },
      { question: '土地公平值上升時，應如何記錄重估分錄？', questionEn: 'How is an increase in the fair value of land recorded on revaluation?', answer: '借記土地帳以增加資產，貸記重估帳以記錄重估收益。', answerEn: 'Debit the land account to increase the asset and credit the revaluation account to record the gain.' },
      { question: '機器重估升值後，未來折舊通常如何改變？', questionEn: 'How does future depreciation normally change after an upward revaluation of machinery?', answer: '折舊通常增加，因為須按較高重估金額在剩餘使用年期內分配。', answerEn: 'Depreciation normally increases because the higher revalued amount is allocated over the remaining useful life.' },
    ],
  },
]
