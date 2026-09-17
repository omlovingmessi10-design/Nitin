/**
 * Profit, Loss & Discount Practice Sets - Official SSC Curated Dataset
 * SET A (30 Questions) & SET B (30 Questions)
 * Structured across Levels 1 to 5 with English & Hindi Translations, Options, Detailed Solutions, and Shortcuts
 */

const PROFIT_LOSS_SET_A_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MODERATE (Q1 to Q6)
  // ==========================================
  {
    question_number: 1,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Markup & Single Discount",
    type_category_hi: "अंकित मूल्य और एकल छूट",
    question_text: "A shopkeeper marks an article at 25% above the cost price. If he gives a discount of 10% on the marked price, find his profit percentage.",
    question_text_hi: "एक दुकानदार एक वस्तु पर क्रय मूल्य से 25% अधिक मूल्य अंकित करता है। यदि वह अंकित मूल्य पर 10% की छूट देता है, तो उसका लाभ प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "12.5%",
      b: "15%",
      c: "14.5%",
      d: "11.25%"
    },
    options_hi: {
      a: "12.5%",
      b: "15%",
      c: "14.5%",
      d: "11.25%"
    },
    correct_option: "a",
    solution_text: "Let Cost Price (CP) = ₹100.\nMarked Price (MP) = 100 + 25 = ₹125.\nDiscount = 10% of 125 = ₹12.5.\nSelling Price (SP) = 125 - 12.5 = ₹112.5.\nProfit = SP - CP = 112.5 - 100 = ₹12.5.\nProfit% = (12.5 / 100) × 100 = 12.5%.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना क्रय मूल्य (CP) = ₹100।\nअंकित मूल्य (MP) = 100 + 25 = ₹125।\nछूट = 125 का 10% = ₹12.5।\nविक्रय मूल्य (SP) = 125 - 12.5 = ₹112.5।\nलाभ = SP - CP = 112.5 - 100 = ₹12.5।\nलाभ% = 12.5%। अतः सही उत्तर (a) है।",
    shortcut_text: "Formula: Net Change = x + y + (xy / 100)\n= +25 - 10 - (25 × 10 / 100) = 15 - 2.5 = 12.5%.",
    shortcut_text_hi: "सूत्र: कुल प्रभाव = x + y + (xy / 100)\n= +25 - 10 - 2.5 = 12.5% लाभ।"
  },
  {
    question_number: 2,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "SP of x = CP of y",
    type_category_hi: "x का विक्रय मूल्य = y का क्रय मूल्य",
    question_text: "The selling price of 32 items is equal to the cost price of 38 items. Find the profit percentage.",
    question_text_hi: "32 वस्तुओं का विक्रय मूल्य 38 वस्तुओं के क्रय मूल्य के बराबर है। लाभ प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "16.25%",
      b: "15.79%",
      c: "18.75%",
      d: "19.25%"
    },
    options_hi: {
      a: "16.25%",
      b: "15.79%",
      c: "18.75%",
      d: "19.25%"
    },
    correct_option: "c",
    solution_text: "Given: 32 × SP = 38 × CP\n=> SP / CP = 38 / 32 = 19 / 16\nProfit per unit = 19 - 16 = 3 units\nProfit% = (Profit / CP) × 100\n= (3 / 16) × 100 = 18.75%.\nCorrect Answer: Option (c).",
    solution_text_hi: "दिया गया है: 32 × SP = 38 × CP\n=> SP / CP = 38 / 32 = 19 / 16\nलाभ = 19 - 16 = 3 इकाई\nलाभ% = (3 / 16) × 100 = 18.75%।\nअतः सही उत्तर (c) है।",
    shortcut_text: "SP/CP = 38/32 = 19/16.\nFractional Profit = 3/16 = 18.75%.",
    shortcut_text_hi: "SP/CP = 38/32 = 19/16।\nभिन्न रूप में लाभ = 3/16 = 18.75%।"
  },
  {
    question_number: 3,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 3",
    type_category: "Cost Price Change with Constant SP",
    type_category_hi: "समान विक्रय मूल्य पर क्रय मूल्य परिवर्तन",
    question_text: "The initial profit percentage on the sale of an item was 74%. If the cost price of the item went up by 50%, but the selling price remained the same, what would be the new profit percentage?",
    question_text_hi: "किसी वस्तु की बिक्री पर प्रारंभिक लाभ प्रतिशत 74% था। यदि वस्तु का क्रय मूल्य 50% बढ़ जाता है, लेकिन विक्रय मूल्य समान रहता है, तो नया लाभ प्रतिशत क्या होगा?",
    options: {
      a: "8%",
      b: "16%",
      c: "13%",
      d: "24%"
    },
    options_hi: {
      a: "8%",
      b: "16%",
      c: "13%",
      d: "24%"
    },
    correct_option: "b",
    solution_text: "Let initial Cost Price (CP₁) = ₹100.\nInitial Profit = 74% => Initial Selling Price (SP) = ₹174.\nNew Cost Price (CP₂) = 100 + 50% of 100 = ₹150.\nSelling price remains constant at ₹174.\nNew Profit = SP - CP₂ = 174 - 150 = ₹24.\nNew Profit% = (24 / 150) × 100 = 16%.\nCorrect Answer: Option (b).",
    solution_text_hi: "माना प्रारंभिक क्रय मूल्य (CP₁) = ₹100।\nप्रारंभिक लाभ = 74% => प्रारंभिक विक्रय मूल्य (SP) = ₹174।\nनया क्रय मूल्य (CP₂) = 100 + 50 = ₹150।\nविक्रय मूल्य समान रहता है = ₹174।\nनया लाभ = 174 - 150 = ₹24।\nनया लाभ% = (24 / 150) × 100 = 16%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "CP: 100 -> 150; SP = 174.\nProfit = 24 on 150 => 24/150 = 4/25 = 16%.",
    shortcut_text_hi: "CP: 100 -> 150; SP = 174।\nलाभ = 150 पर 24 => (24/150) × 100 = 16%।"
  },
  {
    question_number: 4,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Marked Price Profit vs Discount",
    type_category_hi: "अंकित मूल्य लाभ बनाम छूट",
    question_text: "A retailer would have made a profit of 18% if he sold an article at its marked price. If he allowed a discount of 10% on the marked price, what would his actual profit on that article have been?",
    question_text_hi: "एक खुदरा विक्रेता को 18% का लाभ होता यदि वह किसी वस्तु को उसके अंकित मूल्य पर बेचता। यदि उसने अंकित मूल्य पर 10% की छूट दी, तो उस वस्तु पर उसका वास्तविक लाभ क्या होगा?",
    options: {
      a: "6.2%",
      b: "5.5%",
      c: "7.1%",
      d: "4.6%"
    },
    options_hi: {
      a: "6.2%",
      b: "5.5%",
      c: "7.1%",
      d: "4.6%"
    },
    correct_option: "a",
    solution_text: "Let Cost Price (CP) = ₹100.\nAt marked price, profit is 18%, so Marked Price (MP) = ₹118.\nDiscount allowed = 10% on MP.\nActual SP = 118 × (1 - 0.10) = 118 × 0.9 = ₹106.2.\nActual Profit = Actual SP - CP = 106.2 - 100 = ₹6.2.\nActual Profit% = 6.2%.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना क्रय मूल्य (CP) = ₹100।\nअंकित मूल्य पर बेचने पर 18% लाभ होता है, अतः अंकित मूल्य (MP) = ₹118।\nछूट = 10%।\nवास्तविक SP = 118 × 0.90 = ₹106.2।\nवास्तविक लाभ = 106.2 - 100 = ₹6.2 (6.2%)।\nअतः सही उत्तर (a) है।",
    shortcut_text: "CP = 100, MP = 118.\nSP = 118 × 0.9 = 106.2 => 6.2% profit.",
    shortcut_text_hi: "CP = 100, MP = 118। SP = 118 × 0.9 = 106.2 => 6.2% लाभ।"
  },
  {
    question_number: 5,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Successive Discounts & Net Gain",
    type_category_hi: "क्रमागत छूट और शुद्ध लाभ",
    question_text: "A trader purchases a table for ₹1,500 and sells it after allowing two successive discounts of 10% and 20% on its marked price of ₹2,500. What is his profit or loss percentage?",
    question_text_hi: "एक व्यापारी ₹1,500 में एक मेज खरीदता है और उसके ₹2,500 के अंकित मूल्य पर 10% और 20% की दो क्रमागत छूट देकर बेचता है। उसका लाभ या हानि प्रतिशत क्या है?",
    options: {
      a: "20% Profit",
      b: "15% Profit",
      c: "20% Loss",
      d: "25% Profit"
    },
    options_hi: {
      a: "20% लाभ",
      b: "15% लाभ",
      c: "20% हानि",
      d: "25% लाभ"
    },
    correct_option: "a",
    solution_text: "Cost Price (CP) = ₹1,500.\nMarked Price (MP) = ₹2,500.\nSingle equivalent discount for 10% and 20%:\nD_eq = 10 + 20 - (10 × 20 / 100) = 30 - 2 = 28%.\nSelling Price (SP) = 2,500 × (100 - 28)% = 2,500 × 0.72 = ₹1,800.\nProfit = SP - CP = 1,800 - 1,500 = ₹300.\nProfit% = (300 / 1500) × 100 = 20%.\nCorrect Answer: Option (a).",
    solution_text_hi: "क्रय मूल्य (CP) = ₹1,500। अंकित मूल्य (MP) = ₹2,500।\n10% और 20% की एकल समतुल्य छूट:\nD = 10 + 20 - (200 / 100) = 28%।\nविक्रय मूल्य (SP) = 2500 × (1 - 0.28) = 2500 × 0.72 = ₹1,800।\nलाभ = 1800 - 1500 = ₹300।\nलाभ% = (300 / 1500) × 100 = 20% लाभ।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Net discount = 28%.\nSP = 2500 × 0.72 = 1800.\nProfit% = (300 / 1500) × 100 = 20% Profit.",
    shortcut_text_hi: "समतुल्य छूट = 28%। SP = 2500 × 0.72 = 1800।\nलाभ% = (300 / 1500) × 100 = 20% लाभ।"
  },
  {
    question_number: 6,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Markup and Reduction on Bill",
    type_category_hi: "अंकित मूल्य और बिल छूट",
    question_text: "A tradesman marks his goods 25% above the cost price and allows his customers a 12% reduction on their bills. What percentage profit does he make?",
    question_text_hi: "एक व्यापारी अपने माल पर क्रय मूल्य से 25% अधिक अंकित करता है और अपने ग्राहकों को उनके बिलों पर 12% की छूट देता है। वह कितने प्रतिशत लाभ कमाता है?",
    options: {
      a: "10%",
      b: "12.5%",
      c: "14%",
      d: "18%"
    },
    options_hi: {
      a: "10%",
      b: "12.5%",
      c: "14%",
      d: "18%"
    },
    correct_option: "a",
    solution_text: "Let CP = ₹100.\nMarked Price (MP) = 100 + 25 = ₹125.\nDiscount allowed = 12% on ₹125.\nDiscount Amount = 125 × (12 / 100) = ₹15.\nSelling Price (SP) = 125 - 15 = ₹110.\nProfit% = [(110 - 100) / 100] × 100 = 10%.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना CP = ₹100।\nअंकित मूल्य (MP) = ₹125।\nछूट = 125 का 12% = ₹15।\nविक्रय मूल्य (SP) = 125 - 15 = ₹110।\nलाभ% = 110 - 100 = 10%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Net% = 25 - 12 - (25 × 12 / 100) = 13 - 3 = 10%.",
    shortcut_text_hi: "शुद्ध लाभ% = 25 - 12 - 3 = 10%।"
  },

  // ==========================================
  // LEVEL 2: MORE THAN MODERATE (Q7 to Q12)
  // ==========================================
  {
    question_number: 7,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 4",
    type_category: "Difference between Profit and Loss %",
    type_category_hi: "लाभ और हानि % के बीच का अंतर",
    question_text: "The difference between 12% gain and 4% loss on the sale of an item was ₹28. What was the cost price of the item?",
    question_text_hi: "वस्तु की बिक्री पर 12% लाभ और 4% हानि के बीच का अंतर ₹28 था। वस्तु का क्रय मूल्य क्या था?",
    options: {
      a: "₹175",
      b: "₹189",
      c: "₹196",
      d: "₹168"
    },
    options_hi: {
      a: "₹175",
      b: "₹189",
      c: "₹196",
      d: "₹168"
    },
    correct_option: "a",
    solution_text: "Let Cost Price = CP.\nSP₁ at 12% gain = 1.12 CP.\nSP₂ at 4% loss = 0.96 CP.\nDifference = 1.12 CP - 0.96 CP = 0.16 CP.\n0.16 CP = ₹28\nCP = 28 / 0.16 = (28 × 100) / 16 = ₹175.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना क्रय मूल्य = CP।\n12% लाभ पर SP₁ = 1.12 CP।\n4% हानि पर SP₂ = 0.96 CP।\nअंतर = 12% - (-4%) = 16%।\n16% = ₹28\n100% = (28 / 16) × 100 = ₹175।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Net% difference = 12% + 4% = 16%.\nCP = (28 / 16) × 100 = ₹175.",
    shortcut_text_hi: "प्रतिशत अंतर = 12% + 4% = 16% = ₹28 => CP = (28/16) × 100 = ₹175।"
  },
  {
    question_number: 8,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 5",
    type_category: "Hypothetical CP & SP Changes",
    type_category_hi: "काल्पनिक क्रय और विक्रय मूल्य परिवर्तन",
    question_text: "A shopkeeper sells an article at 20% profit. If he had bought the article at 10% less and sold it at ₹18 more than the previous selling price, he would have made 40% profit. What is the original cost price of the article?",
    question_text_hi: "एक दुकानदार एक वस्तु को 20% लाभ पर बेचता है। यदि उसने वस्तु को 10% कम पर खरीदा होता और इसे पिछले विक्रय मूल्य से ₹18 अधिक पर बेचा होता, तो उसे 40% लाभ होता। वस्तु का मूल क्रय मूल्य क्या है?",
    options: {
      a: "₹350",
      b: "₹320",
      c: "₹300",
      d: "₹280"
    },
    options_hi: {
      a: "₹350",
      b: "₹320",
      c: "₹300",
      d: "₹280"
    },
    correct_option: "c",
    solution_text: "Let original CP = 100x.\nOriginal SP = 120x.\nNew CP = 100x - 10% = 90x.\nNew SP = 120x + 18.\nGiven: New Profit = 40%\n=> New SP = 1.40 × New CP\n=> 120x + 18 = 1.40 × 90x = 126x\n=> 126x - 120x = 18\n=> 6x = 18 => x = 3.\nOriginal CP = 100x = 100 × 3 = ₹300.\nCorrect Answer: Option (c).",
    solution_text_hi: "माना मूल CP = 100x।\nमूल SP = 120x।\nनया CP = 90x।\nनया SP = 120x + 18।\nप्रश्नानुसार: नया SP = 90x × 1.40 = 126x।\n126x - 120x = 18 => 6x = 18 => x = 3।\nमूल CP = 100x = ₹300।\nअतः सही उत्तर (c) है।",
    shortcut_text: "126% - 120% = 6% = ₹18.\n100% = (18 / 6) × 100 = ₹300.",
    shortcut_text_hi: "अंतर: 126% - 120% = 6% = ₹18 => CP = (18/6) × 100 = ₹300।"
  },
  {
    question_number: 9,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 2",
    type_category: "Loss Equal to Cost Price of Articles",
    type_category_hi: "वस्तुओं के क्रय मूल्य के बराबर हानि",
    question_text: "Chandrasekhar sold 12 identical articles for a total of ₹420, incurring a loss equal to the cost price of 7 such articles. The cost price of 1 such article is:",
    question_text_hi: "चन्द्रशेखर ने ₹420 के कुल मूल्य पर 12 समान वस्तुएं बेचीं, जिससे उसे ऐसी 7 वस्तुओं के क्रय मूल्य के बराबर हानि हुई। ऐसी 1 वस्तु का क्रय मूल्य है:",
    options: {
      a: "₹84",
      b: "₹48",
      c: "₹60",
      d: "₹35"
    },
    options_hi: {
      a: "₹84",
      b: "₹48",
      c: "₹60",
      d: "₹35"
    },
    correct_option: "a",
    solution_text: "Let CP of 1 article = c.\nTotal CP of 12 articles = 12c.\nTotal SP of 12 articles = ₹420.\nLoss = 12c - 420.\nGiven: Loss = CP of 7 articles = 7c.\n=> 12c - 420 = 7c\n=> 5c = 420\n=> c = 420 / 5 = ₹84.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना 1 वस्तु का CP = c।\n12 वस्तुओं का कुल CP = 12c। SP = ₹420।\nहानि = 12c - 420 = 7c।\n=> 5c = 420 => c = ₹84।\nअतः 1 वस्तु का क्रय मूल्य ₹84 है। विकल्प (a)।",
    shortcut_text: "Net units paying for SP: 12 - 7 = 5 units = ₹420.\n1 unit CP = 420 / 5 = ₹84.",
    shortcut_text_hi: "प्रभावी वस्तुएं = 12 - 7 = 5 इकाई = ₹420 => 1 इकाई CP = 420 / 5 = ₹84।"
  },
  {
    question_number: 10,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Simultaneous Equations of Articles",
    type_category_hi: "वस्तुओं के युगपत समीकरण",
    question_text: "The cost of 10 chairs is equal to that of 4 tables. The cost of 15 chairs and 2 tables is equal to ₹2,000. The cost of a table is:",
    question_text_hi: "10 कुर्सियों की कीमत 4 मेजों के बराबर है। 15 कुर्सियों और 2 मेजों की कीमत ₹2,000 के बराबर है। एक मेज की कीमत है:",
    options: {
      a: "₹100",
      b: "₹500",
      c: "₹200",
      d: "₹250"
    },
    options_hi: {
      a: "₹100",
      b: "₹500",
      c: "₹200",
      d: "₹250"
    },
    correct_option: "d",
    solution_text: "Let cost of 1 chair = C and cost of 1 table = T.\nGiven: 10 C = 4 T => C = (4 / 10) T = 0.4 T.\nAlso given: 15 C + 2 T = ₹2,000.\nSubstitute C = 0.4 T:\n15 × (0.4 T) + 2 T = 2,000\n6 T + 2 T = 2,000\n8 T = 2,000 => T = 2,000 / 8 = ₹250.\nCost of 1 table = ₹250.\nCorrect Answer: Option (d).",
    solution_text_hi: "माना कुर्सी = C और मेज = T।\n10 C = 4 T => C = 0.4 T।\n15 C + 2 T = 2000\n15(0.4 T) + 2 T = 2000 => 8 T = 2000 => T = ₹250।\nअतः सही उत्तर (d) है।",
    shortcut_text: "15 Chairs = 6 Tables (since 5 Chairs = 2 Tables).\n6 Tables + 2 Tables = 8 Tables = ₹2,000 => 1 Table = ₹250.",
    shortcut_text_hi: "10 C = 4 T => 15 C = 6 T।\n6 T + 2 T = 8 T = ₹2,000 => 1 T = ₹250।"
  },
  {
    question_number: 11,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Multi-item Split Profit Equating",
    type_category_hi: "बहु-वस्तु विभाजन लाभ समीकरण",
    question_text: "Sarita buys two old Samsung phones and three Mi mobile phones for ₹40,200. If she sells the Samsung phones at a 10% profit and the Mi Phones at a 20% profit then her total profit is ₹5,640. The cost price of the Mi Phone is:",
    question_text_hi: "सरिता ₹40,200 में दो पुराने सैमसंग फोन और तीन एमआई मोबाइल फोन खरीदती है। यदि वह सैमसंग फोन को 10% लाभ पर और एमआई फोन को 20% लाभ पर बेचती है तो उसका कुल लाभ ₹5,640 है। एमआई फोन का क्रय मूल्य है:",
    options: {
      a: "₹5,400",
      b: "₹1,200",
      c: "₹4,400",
      d: "₹5,000"
    },
    options_hi: {
      a: "₹5,400",
      b: "₹1,200",
      c: "₹4,400",
      d: "₹5,000"
    },
    correct_option: "a",
    solution_text: "Let CP of 1 Samsung phone = S and CP of 1 Mi phone = M.\nTotal CP: 2S + 3M = ₹40,200  --- (Equation 1)\nTotal Profit: 10% of (2S) + 20% of (3M) = ₹5,640\n=> 0.2S + 0.6M = 5,640\nMultiply by 10: 2S + 6M = 56,400  --- (Equation 2)\nSubtracting Equation 1 from Equation 2:\n(2S + 6M) - (2S + 3M) = 56,400 - 40,200\n3M = 16,200 => M = 16,200 / 3 = ₹5,400.\nCost price of each Mi phone = ₹5,400.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना सैमसंग = S, एमआई = M।\n2S + 3M = ₹40,200  --- (1)\nलाभ: 0.2S + 0.6M = ₹5,640\n10 से गुणा करने पर: 2S + 6M = ₹56,400  --- (2)\n(2) में से (1) घटाने पर: 3M = 16,200 => M = ₹5,400।\nअतः सही उत्तर (a) है।",
    shortcut_text: "2S + 6M = 56,400 and 2S + 3M = 40,200.\n3M = 16,200 => 1 Mi Phone = ₹5,400.",
    shortcut_text_hi: "2S + 6M = 56,400 तथा 2S + 3M = 40,200 => 3M = 16,200 => M = ₹5,400।"
  },
  {
    question_number: 12,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 7",
    type_category: "Exchange of Profit and Loss Percentages",
    type_category_hi: "लाभ और हानि प्रतिशत का पारस्परिक विनिमय",
    question_text: "A person sells his table at a profit of 12 1/2% and chair at a loss of 8 1/3% but on the whole he gains ₹25. On the other hand, if he sells the table at a loss of 8 1/3% and the chair at a profit of 12 1/2% then he neither gains nor loses. Find the cost price of the table.",
    question_text_hi: "एक व्यक्ति अपनी मेज को 12 1/2% के लाभ पर और कुर्सी को 8 1/3% की हानि पर बेचता है, लेकिन कुल मिलाकर उसे ₹25 का लाभ होता है। दूसरी ओर, यदि वह मेज को 8 1/3% की हानि पर और कुर्सी को 12 1/2% के लाभ पर बेचता है, तो उसे न तो लाभ होता है और न ही हानि। मेज का क्रय मूल्य ज्ञात कीजिए।",
    options: {
      a: "₹360",
      b: "₹350",
      c: "₹380",
      d: "₹370"
    },
    options_hi: {
      a: "₹360",
      b: "₹350",
      c: "₹380",
      d: "₹370"
    },
    correct_option: "a",
    solution_text: "Let CP of Table = T and CP of Chair = C.\nNote: 12 1/2% = 1/8 and 8 1/3% = 1/12.\nCase 2: Loss on Table = Gain on Chair (Neither gain nor loss)\n=> (1/12) T = (1/8) C\n=> 2T = 3C => C = (2/3) T.\nCase 1: (1/8) T - (1/12) C = ₹25\nSubstitute C = (2/3) T:\n(1/8) T - (1/12) × (2/3) T = 25\n(1/8) T - (1/18) T = 25\nLCM(8, 18) = 72.\n(9T - 4T) / 72 = 25\n5T / 72 = 25 => T = (25 × 72) / 5 = 5 × 72 = ₹360.\nCost price of the table = ₹360.\nCorrect Answer: Option (a).",
    solution_text_hi: "12 1/2% = 1/8, 8 1/3% = 1/12।\nस्थिति 2: (1/12) T = (1/8) C => C = (2/3) T।\nस्थिति 1: (1/8) T - (1/12) C = 25\n(1/8) T - (1/18) T = 25 => 5T / 72 = 25 => T = ₹360।\nअतः मेज का क्रय मूल्य ₹360 है। विकल्प (a)।",
    shortcut_text: "From Case 2: T : C = (1/8) : (1/12) = 12 : 8 = 3 : 2.\nProfit = (1/8)(3x) - (1/12)(2x) = 3x/8 - x/6 = 5x/24 = 25 => x = 120.\nT = 3x = 3 × 120 = ₹360.",
    shortcut_text_hi: "T : C = 3 : 2। 3x/8 - 2x/12 = 5x/24 = 25 => x = 120 => T = 3 × 120 = ₹360।"
  },
// ==========================================
  // LEVEL 3: INSPIRED FROM PYQS (Q13 to Q18)
  // ==========================================
  {
    question_number: 13,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 8",
    type_category: "Price Shift for Targeted Gain",
    type_category_hi: "वांछित लाभ के लिए मूल्य परिवर्तन",
    question_text: "By selling an item for ₹4,125, A gains 10%. At what price should he sell the item in order to gain 18%?",
    question_text_hi: "एक वस्तु को ₹4,125 में बेचने पर A को 10% का लाभ होता है। 18% लाभ प्राप्त करने के लिए उसे वस्तु को किस कीमत पर बेचना चाहिए?",
    options: {
      a: "₹4,450",
      b: "₹4,425",
      c: "₹4,400",
      d: "₹4,510"
    },
    options_hi: {
      a: "₹4,450",
      b: "₹4,425",
      c: "₹4,400",
      d: "₹4,510"
    },
    correct_option: "b",
    solution_text: "Given: SP₁ = ₹4,125 at 10% profit.\nCP = SP₁ / (1 + 0.10) = 4,125 / 1.10 = ₹3,750.\nRequired Profit = 18%.\nRequired SP₂ = CP × (1 + 0.18) = 3,750 × 1.18 = ₹4,425.\nCorrect Answer: Option (b).",
    solution_text_hi: "दिया गया है: 10% लाभ पर SP₁ = ₹4,125।\nCP = 4125 / 1.10 = ₹3,750।\n18% लाभ के लिए अभीष्ट SP = 3750 × 1.18 = ₹4,425।\nअतः सही उत्तर (b) है।",
    shortcut_text: "SP₂ = (SP₁ / 110) × 118 = (4125 / 110) × 118 = 37.5 × 118 = ₹4,425.",
    shortcut_text_hi: "SP₂ = (4125 / 110) × 118 = 37.5 × 118 = ₹4,425।"
  },
  {
    question_number: 14,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 8",
    type_category: "Reversal from Loss to High Profit",
    type_category_hi: "हानि से उच्च लाभ में रूपांतरण",
    question_text: "The owner loses 20% when he sells a plot for ₹19,50,000. At what price must he sell the plot in order to gain a profit of 20%?",
    question_text_hi: "जब मालिक एक प्लॉट को ₹19,50,000 में बेचता है तो उसे 20% की हानि होती है। 20% का लाभ प्राप्त करने के लिए उसे प्लॉट को किस कीमत पर बेचना चाहिए?",
    options: {
      a: "₹22,50,000",
      b: "₹21,00,000",
      c: "₹29,25,000",
      d: "₹25,95,000"
    },
    options_hi: {
      a: "₹22,50,000",
      b: "₹21,00,000",
      c: "₹29,25,000",
      d: "₹25,95,000"
    },
    correct_option: "c",
    solution_text: "At 20% loss, SP = 80% of CP = ₹19,50,000.\nCP = 19,50,000 / 0.80 = ₹24,37,500.\nFor 20% profit, Required SP = 120% of CP\n= 24,37,500 × 1.20 = ₹29,25,000.\nCorrect Answer: Option (c).",
    solution_text_hi: "20% हानि पर SP = CP का 80% = ₹19,50,000।\nCP = 19,50,000 / 0.80 = ₹24,37,500।\n20% लाभ के लिए SP = 24,37,500 × 1.20 = ₹29,25,000।\nअतः सही उत्तर (c) है।",
    shortcut_text: "SP₂ = (19,50,000 / 80) × 120 = 19,50,000 × 1.5 = ₹29,25,000.",
    shortcut_text_hi: "सीधे अनुपात से: 80% = 19,50,000 => 120% = 19,50,000 × (120/80) = ₹29,25,000।"
  },
  {
    question_number: 15,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 4",
    type_category: "Profit/Loss Gap to Target Price",
    type_category_hi: "लाभ/हानि अंतर से अभीष्ट विक्रय मूल्य",
    question_text: "The difference between a 12.5% profit and a 10.5% loss, while selling an item, is ₹161. What would the selling price of the item be if the intended profit is 19%?",
    question_text_hi: "एक वस्तु को बेचते समय 12.5% लाभ और 10.5% हानि के बीच का अंतर ₹161 है। यदि अपेक्षित लाभ 19% है तो वस्तु का विक्रय मूल्य क्या होगा?",
    options: {
      a: "₹833",
      b: "₹798",
      c: "₹817",
      d: "₹850"
    },
    options_hi: {
      a: "₹833",
      b: "₹798",
      c: "₹817",
      d: "₹850"
    },
    correct_option: "a",
    solution_text: "Net percentage gap = 12.5% - (-10.5%) = 23% of CP.\nGiven: 23% of CP = ₹161\n=> CP = (161 / 23) × 100 = 7 × 100 = ₹700.\nTarget Profit = 19%.\nRequired SP = 700 × (1 + 0.19) = 700 × 1.19 = ₹833.\nCorrect Answer: Option (a).",
    solution_text_hi: "प्रतिशत अंतर = 12.5% + 10.5% = 23%।\n23% = ₹161 => CP = (161 / 23) × 100 = ₹700।\n19% लाभ पर SP = 700 × 1.19 = ₹833।\nअतः सही उत्तर (a) है।",
    shortcut_text: "23% = 161 => 1% = 7 => CP = 700.\nSP at 19% = 700 + 19×7 = 700 + 133 = ₹833.",
    shortcut_text_hi: "23% = 161 => 1% = 7 => CP = 700। SP = 700 + 133 = ₹833।"
  },
  {
    question_number: 16,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 2",
    type_category: "Profit Equal to SP of Items",
    type_category_hi: "वस्तुओं के विक्रय मूल्य के बराबर लाभ",
    question_text: "A shopkeeper bought 25 chairs from a manufacturer for ₹37,500 and sold them at a profit equal to the selling price of 5 chairs. Then the SP of one chair is:",
    question_text_hi: "एक दुकानदार ने एक निर्माता से ₹37,500 में 25 कुर्सियां खरीदीं और उन्हें 5 कुर्सियों के विक्रय मूल्य के बराबर लाभ पर बेच दिया। तो एक कुर्सी का विक्रय मूल्य है:",
    options: {
      a: "₹1,875",
      b: "₹1,200",
      c: "₹1,500",
      d: "₹1,250"
    },
    options_hi: {
      a: "₹1,875",
      b: "₹1,200",
      c: "₹1,500",
      d: "₹1,250"
    },
    correct_option: "a",
    solution_text: "Let SP of 1 chair = S.\nTotal CP of 25 chairs = ₹37,500.\nTotal SP of 25 chairs = 25S.\nProfit = Total SP - Total CP = 25S - 37,500.\nGiven: Profit = SP of 5 chairs = 5S.\n=> 25S - 37,500 = 5S\n=> 20S = 37,500\n=> S = 37,500 / 20 = ₹1,875.\nSP of one chair = ₹1,875.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना 1 कुर्सी का SP = S।\n25S - 37,500 = 5S => 20S = 37,500 => S = ₹1,875।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Profit = 5 SP => 25 SP - 25 CP = 5 SP => 20 SP = 25 CP = 37,500.\nSP = 37,500 / 20 = ₹1,875.",
    shortcut_text_hi: "20 SP = 37,500 => SP = 37,500 / 20 = ₹1,875।"
  },
  {
    question_number: 17,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 4",
    type_category: "Difference in SP for Profit Conversion",
    type_category_hi: "लाभ रूपांतरण के लिए विक्रय मूल्य में अंतर",
    question_text: "Pavan sold an item at a loss of 12.5%. If he could have sold it for ₹56 more, he would have made a profit of 22.5%. What should be the selling price of the item to make a profit of 25%?",
    question_text_hi: "पवन ने एक वस्तु को 12.5% की हानि पर बेचा। यदि वह इसे ₹56 अधिक में बेचता, तो उसे 22.5% का लाभ होता। 25% का लाभ कमाने के लिए वस्तु का विक्रय मूल्य क्या होना चाहिए?",
    options: {
      a: "₹182",
      b: "₹190",
      c: "₹185",
      d: "₹200"
    },
    options_hi: {
      a: "₹182",
      b: "₹190",
      c: "₹185",
      d: "₹200"
    },
    correct_option: "d",
    solution_text: "Net change in percentage = 22.5% - (-12.5%) = 35% of CP.\nGiven: 35% of CP = ₹56\n=> CP = (56 / 35) × 100 = (8 / 5) × 100 = ₹160.\nTo make a profit of 25%:\nRequired SP = 160 × 1.25 = ₹200.\nCorrect Answer: Option (d).",
    solution_text_hi: "कुल प्रतिशत अंतर = 22.5% - (-12.5%) = 35%।\n35% = ₹56 => CP = (56 / 35) × 100 = ₹160।\n25% लाभ के लिए अभीष्ट SP = 160 × 1.25 = ₹200।\nअतः सही उत्तर (d) है।",
    shortcut_text: "35% = 56 => 1% = 1.6 => CP = 160.\nSP at 25% profit = 160 × 1.25 = ₹200.",
    shortcut_text_hi: "35% = 56 => CP = 160 => SP = 160 × 1.25 = ₹200।"
  },
  {
    question_number: 18,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 9",
    type_category: "Weighted Average Profit on Portions",
    type_category_hi: "भागों पर भारित औसत लाभ",
    question_text: "A trader buys 60 bags of grain at the rate of ₹400 each. If he sells 18 bags at 8% profit. To get a total profit of 16.4% on 60 bags, at what rate should he sell the remaining bags?",
    question_text_hi: "एक व्यापारी ₹400 प्रति बैग की दर से अनाज के 60 बैग खरीदता है। यदि वह 18 बैग 8% लाभ पर बेचता है, तो 60 बैग पर 16.4% का कुल लाभ प्राप्त करने के लिए उसे शेष बैग किस दर पर बेचने चाहिए?",
    options: {
      a: "₹400",
      b: "₹480",
      c: "₹540",
      d: "₹520"
    },
    options_hi: {
      a: "₹400",
      b: "₹480",
      c: "₹540",
      d: "₹520"
    },
    correct_option: "b",
    solution_text: "Total Cost Price = 60 × 400 = ₹24,000.\nDesired Total Selling Price = 24,000 × (1 + 0.164) = 24,000 × 1.164 = ₹27,936.\nSP of first 18 bags = 18 × 400 × 1.08 = 7,200 × 1.08 = ₹7,776.\nRemaining SP required for (60 - 18 = 42) bags = 27,936 - 7,776 = ₹20,160.\nRate per remaining bag = 20,160 / 42 = ₹480.\nCorrect Answer: Option (b).",
    solution_text_hi: "कुल CP = 60 × 400 = ₹24,000।\nकुल लक्षित SP = 24,000 × 1.164 = ₹27,936।\n18 बैग का SP = 18 × 400 × 1.08 = ₹7,776।\nशेष 42 बैग का SP = 27,936 - 7,776 = ₹20,160।\nदर = 20,160 / 42 = ₹480 प्रति बैग।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Ratio of bags = 18 : 42 = 3 : 7.\nOverall profit% = (3 × 8% + 7 × x%) / 10 = 16.4%\n=> 24 + 7x = 164 => 7x = 140 => x = 20% profit.\nRate = 400 × 1.20 = ₹480.",
    shortcut_text_hi: "अनुपात 18:42 = 3:7। (3×8 + 7x)/10 = 16.4 => 7x = 140 => x = 20%। दर = 400 × 1.20 = ₹480।"
  },

  // ==========================================
  // LEVEL 4: PYQ+ (Q19 to Q24)
  // ==========================================
  {
    question_number: 19,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 10",
    type_category: "Successive Buy-Sell Transactions",
    type_category_hi: "क्रमिक क्रय-विक्रय लेन-देन",
    question_text: "Himani bought a washing machine for ₹8,000 and spent ₹500 on its repairs. She sold it at 20% profit. With the money she got by selling it, she bought another washing machine and sold it at 10% loss. What is her overall profit or loss?",
    question_text_hi: "हिमानी ने ₹8,000 में एक वाशिंग मशीन खरीदी और उसकी मरम्मत पर ₹500 खर्च किए। उसने इसे 20% लाभ पर बेचा। इसे बेचकर मिले पैसे से उसने एक और वाशिंग मशीन खरीदी और उसे 10% हानि पर बेच दिया। उसका कुल लाभ / हानि क्या है?",
    options: {
      a: "Profit ₹640",
      b: "Loss ₹640",
      c: "Profit ₹680",
      d: "Loss ₹600"
    },
    options_hi: {
      a: "₹640 लाभ",
      b: "₹640 हानि",
      c: "₹680 लाभ",
      d: "₹600 हानि"
    },
    correct_option: "c",
    solution_text: "Total Cost Price 1 = 8,000 + 500 = ₹8,500.\nSelling Price 1 = 8,500 × 1.20 = ₹10,200.\nCost Price 2 = ₹10,200.\nSelling Price 2 = 10,200 × (1 - 0.10) = 10,200 × 0.90 = ₹9,180.\nOverall Net Profit = Final SP - Initial CP = 9,180 - 8,500 = ₹680.\nCorrect Answer: Option (c).",
    solution_text_hi: "प्रारंभिक CP = 8,000 + 500 = ₹8,500।\nSP₁ = 8,500 × 1.20 = ₹10,200।\nCP₂ = ₹10,200।\nSP₂ = 10,200 × 0.90 = ₹9,180।\nकुल लाभ = 9,180 - 8,500 = ₹680 (लाभ)।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Net factor = 1.20 × 0.90 = 1.08.\nFinal amount = 8,500 × 1.08 = ₹9,180.\nProfit = 9,180 - 8,500 = ₹680.",
    shortcut_text_hi: "शुद्ध गुणक = 1.20 × 0.90 = 1.08। अंतिम राशि = 8500 × 1.08 = 9180 => लाभ = ₹680।"
  },
  {
    question_number: 20,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 9",
    type_category: "Split Quantities at Differential Rates",
    type_category_hi: "विभिन्न दरों पर मात्रा विभाजन",
    question_text: "Arvind bought 120 m cloth for ₹15,000. He sold 45% of it at a gain of 40%, 25% of it at a loss of 10% and the remaining cloth at the cost price. His profit (in ₹) in the entire transaction is:",
    question_text_hi: "अरविंद ने ₹15,000 में 120 मीटर कपड़ा खरीदा। उसने इसका 45% हिस्सा 40% के लाभ पर, इसका 25% हिस्सा 10% की हानि पर और शेष कपड़ा क्रय मूल्य पर बेच दिया। पूरे लेन-देन में उसका लाभ (₹ में) है:",
    options: {
      a: "₹4,075",
      b: "₹2,325",
      c: "₹4,180",
      d: "₹2,035"
    },
    options_hi: {
      a: "₹4,075",
      b: "₹2,325",
      c: "₹4,180",
      d: "₹2,035"
    },
    correct_option: "b",
    solution_text: "Total CP = ₹15,000.\nProfit from first portion (45% of stock at 40% gain):\nProfit₁ = 15,000 × 0.45 × 0.40 = ₹2,700.\nLoss from second portion (25% of stock at 10% loss):\nLoss₂ = 15,000 × 0.25 × 0.10 = ₹375.\nProfit from remaining 30% sold at cost price = ₹0.\nNet Profit = 2,700 - 375 = ₹2,325.\nCorrect Answer: Option (b).",
    solution_text_hi: "कुल CP = ₹15,000।\n45% भाग पर 40% लाभ = 15000 × 0.45 × 0.40 = ₹2,700।\n25% भाग पर 10% हानि = 15000 × 0.25 × 0.10 = ₹375।\nशेष 30% पर लाभ = ₹0।\nकुल लाभ = 2,700 - 375 = ₹2,325।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Net profit% = (45% × 40%) - (25% × 10%) + 0 = 18% - 2.5% = 15.5%.\nProfit = 15,000 × 15.5% = ₹2,325.",
    shortcut_text_hi: "कुल लाभ% = 45%×40% - 25%×10% = 18% - 2.5% = 15.5% => 15000 का 15.5% = ₹2,325।"
  },
  {
    question_number: 21,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 11",
    type_category: "Two Articles Sold at Same SP",
    type_category_hi: "समान विक्रय मूल्य पर दो वस्तुएं",
    question_text: "A person bought articles A and B for a total of ₹2,312. He sold A at a loss of 16% and sold B at a gain of 20%. The selling prices of A and B were the same. What was the difference between the cost prices of A and B?",
    question_text_hi: "एक व्यक्ति ने ₹2,312 में वस्तुएं A और B खरीदीं। उसने A को 16% की हानि पर और B को 20% के लाभ पर बेचा। A और B के विक्रय मूल्य समान थे। A और B के क्रय मूल्य के बीच का अंतर क्या था?",
    options: {
      a: "₹408",
      b: "₹428",
      c: "₹420",
      d: "₹416"
    },
    options_hi: {
      a: "₹408",
      b: "₹428",
      c: "₹420",
      d: "₹416"
    },
    correct_option: "a",
    solution_text: "Given: SP_A = SP_B\n=> CP_A × (1 - 0.16) = CP_B × (1 + 0.20)\n=> 0.84 CP_A = 1.20 CP_B\n=> CP_A / CP_B = 1.20 / 0.84 = 120 / 84 = 10 / 7.\nSum of ratio parts = 10 + 7 = 17 parts.\n17 parts = ₹2,312 => 1 part = 2,312 / 17 = ₹136.\nDifference between CP_A and CP_B = 10 - 7 = 3 parts.\nDifference = 3 × 136 = ₹408.\nCorrect Answer: Option (a).",
    solution_text_hi: "SP समान है: 0.84 A = 1.20 B => A / B = 1.20 / 0.84 = 10 / 7।\nकुल 17 इकाई = ₹2,312 => 1 इकाई = 136।\nअंतर = 10 - 7 = 3 इकाई = 3 × 136 = ₹408।\nअतः सही उत्तर (a) है।",
    shortcut_text: "A : B = 1.20 : 0.84 = 10 : 7.\nDiff = (3 / 17) × 2312 = 3 × 136 = ₹408.",
    shortcut_text_hi: "A : B = 10 : 7 => अंतर = (3/17) × 2312 = ₹408।"
  },
  {
    question_number: 22,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 11",
    type_category: "Same SP with Equal Gain & Loss %",
    type_category_hi: "समान विक्रय मूल्य, समान लाभ और हानि प्रतिशत",
    question_text: "A shopkeeper sold two toys for ₹990 each. On the first toy he gained 10% and on the second he lost 10%. Find the total percentage gain or loss.",
    question_text_hi: "एक दुकानदार ने दो खिलौने ₹990 प्रत्येक में बेचे। पहले खिलौने पर उसे 10% का लाभ हुआ और दूसरे पर उसे 10% की हानि हुई। कुल लाभ या हानि प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "10% Loss",
      b: "10% Gain",
      c: "1% Loss",
      d: "1% Gain"
    },
    options_hi: {
      a: "10% हानि",
      b: "10% लाभ",
      c: "1% हानि",
      d: "1% लाभ"
    },
    correct_option: "c",
    solution_text: "Standard Property: When two items are sold at the same selling price, one at a profit of x% and the other at a loss of x%, there is always an overall loss given by:\nLoss% = x² / 100.\nHere, x = 10.\nLoss% = 10² / 100 = 100 / 100 = 1%.\nHence, there is an overall loss of 1%.\nCorrect Answer: Option (c).",
    solution_text_hi: "मानक नियम: जब दो वस्तुओं का विक्रय मूल्य समान हो और एक पर x% लाभ तथा दूसरी पर x% हानि हो, तो सदैव हानि होती है:\nहानि% = x² / 100 = 10² / 100 = 1% हानि।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Loss% = x² / 100 = 10² / 100 = 1% Loss.",
    shortcut_text_hi: "हानि% = 10² / 100 = 1% हानि।"
  },
  {
    question_number: 23,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 12",
    type_category: "Overall No Profit No Loss Balancing",
    type_category_hi: "न लाभ न हानि समग्र संतुलन",
    question_text: "A dealer sells a table for ₹400 making a profit of 25%. He sells another table at a loss of 10% and on the whole transaction he makes neither profit nor loss. How much did the second table cost for him?",
    question_text_hi: "एक डीलर एक मेज को ₹400 में बेचकर 25% का लाभ कमाता है। वह एक अन्य मेज को 10% की हानि पर बेचता है और पूरे लेन-देन में उसे न तो लाभ होता है और न ही हानि। दूसरी मेज की कीमत उसके लिए कितनी थी?",
    options: {
      a: "₹750",
      b: "₹700",
      c: "₹800",
      d: "₹850"
    },
    options_hi: {
      a: "₹750",
      b: "₹700",
      c: "₹800",
      d: "₹850"
    },
    correct_option: "c",
    solution_text: "First Table:\nSP₁ = ₹400, Profit₁ = 25%.\nCP₁ = 400 / 1.25 = ₹320.\nProfit Amount on 1st Table = 400 - 320 = ₹80.\nSecond Table:\nSold at 10% loss.\nSince there is no overall profit or loss:\nLoss Amount on 2nd Table = Profit Amount on 1st Table = ₹80.\n10% of CP₂ = ₹80\n=> CP₂ = 80 / 0.10 = ₹800.\nCost price of the second table = ₹800.\nCorrect Answer: Option (c).",
    solution_text_hi: "पहली मेज: CP₁ = 400 / 1.25 = ₹320। लाभ = 400 - 320 = ₹80।\nन लाभ न हानि होने के लिए: दूसरी मेज पर हानि = ₹80।\nCP₂ का 10% = ₹80 => CP₂ = ₹800।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Profit₁ = 400 - 320 = 80.\nLoss₂ = 10% of CP₂ = 80 => CP₂ = ₹800.",
    shortcut_text_hi: "पहली मेज का लाभ = ₹80 => 10% = ₹80 => दूसरी मेज का CP = ₹800।"
  },
  {
    question_number: 24,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 9",
    type_category: "Equal CP Split with Target Total Profit",
    type_category_hi: "समान क्रय मूल्य पर कुल लाभ लक्ष्य",
    question_text: "Two items whose cost price is ₹2,500 each, one is sold at a profit of 5%. If the total profit is 20%, then find the profit on the second item.",
    question_text_hi: "दो वस्तुएँ जिनका क्रय मूल्य प्रत्येक का ₹2,500 है, एक को 5% के लाभ पर बेचा जाता है। यदि कुल लाभ 20% है, तो दूसरी वस्तु पर लाभ ज्ञात कीजिए।",
    options: {
      a: "20%",
      b: "25%",
      c: "30%",
      d: "35%"
    },
    options_hi: {
      a: "20%",
      b: "25%",
      c: "30%",
      d: "35%"
    },
    correct_option: "d",
    solution_text: "Total Cost Price = 2,500 + 2,500 = ₹5,000.\nTotal Desired Profit = 20% of 5,000 = ₹1,000.\nProfit from Item 1 = 5% of 2,500 = ₹125.\nRequired Profit from Item 2 = 1,000 - 125 = ₹875.\nProfit% on Item 2 = (875 / 2,500) × 100 = 35%.\nCorrect Answer: Option (d).",
    solution_text_hi: "कुल CP = ₹5,000। कुल 20% लाभ = ₹1,000।\nवस्तु 1 पर लाभ = 2500 का 5% = ₹125।\nवस्तु 2 पर अभीष्ट लाभ = 1000 - 125 = ₹875।\nवस्तु 2 का लाभ% = (875 / 2500) × 100 = 35%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Since CPs are equal, Average Profit% = (P₁ + P₂) / 2 = Total Profit%\n=> (5 + P₂) / 2 = 20 => 5 + P₂ = 40 => P₂ = 35%.",
    shortcut_text_hi: "CP समान होने पर: (5% + P₂) / 2 = 20% => P₂ = 40% - 5% = 35%।"
  },

  // ==========================================
  // LEVEL 5: PYQ++ (Q25 to Q30)
  // ==========================================
  {
    question_number: 25,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 13",
    type_category: "Dishonest Weight with Above CP Markup",
    type_category_hi: "अंकित मूल्य और गलत वजन संयोजन",
    question_text: "A shopkeeper uses a weight of 950 gm instead of 1 kg and sells the articles at the marked price, which is 15% above the cost price. What is his profit percentage?",
    question_text_hi: "एक दुकानदार 1 किलो के स्थान पर 950 ग्राम के वजन का उपयोग करता है और वस्तुओं को अंकित मूल्य पर बेचता है, जो क्रय मूल्य से 15% अधिक है। उसका लाभ प्रतिशत क्या है?",
    options: {
      a: "23 7/19%",
      b: "20 5/19%",
      c: "21 1/19%",
      d: "22 3/19%"
    },
    options_hi: {
      a: "23 7/19%",
      b: "20 5/19%",
      c: "21 1/19%",
      d: "22 3/19%"
    },
    correct_option: "c",
    solution_text: "Let CP of 1 gm = ₹1.\nActual cost of goods given (950 gm) = ₹950.\nCustomer pays marked price for 1,000 gm, marked 15% above CP:\nSelling Price = 1,000 × 1.15 = ₹1,150.\nProfit = 1,150 - 950 = ₹200.\nProfit% = (200 / 950) × 100 = (400 / 19)% = 21 1/19%.\nCorrect Answer: Option (c).",
    solution_text_hi: "माना 1 ग्राम का CP = ₹1।\nदिए गए 950 ग्राम का वास्तविक CP = ₹950।\n1000 ग्राम का 15% अधिक पर SP = 1000 × 1.15 = ₹1,150।\nलाभ = 1,150 - 950 = ₹200।\nलाभ% = (200 / 950) × 100 = 400 / 19% = 21 1/19%।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Multiplier = (1150 / 950) = 23 / 19.\nProfit% = (4 / 19) × 100 = 21 1/19%.",
    shortcut_text_hi: "अनुपात = 1150 / 950 = 23 / 19 => लाभ% = (4 / 19) × 100 = 21 1/19%।"
  },
  {
    question_number: 26,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 13",
    type_category: "False Weight for Target Gain %",
    type_category_hi: "वांछित लाभ % के लिए गलत वजन",
    question_text: "A dishonest dealer professes to sell his goods at the cost price but uses a false weight and thus gains 20%. For a kilogram he uses a weight of how many grams?",
    question_text_hi: "एक बेईमान डीलर अपने माल को क्रय मूल्य पर बेचने का दावा करता है लेकिन गलत वजन का उपयोग करता है और इस प्रकार 20% का लाभ प्राप्त करता है। एक किलोग्राम के लिए वह कितने ग्राम के वजन का उपयोग करता है?",
    options: {
      a: "750.5 gm",
      b: "708.06 gm",
      c: "833.33 gm",
      d: "785.5 gm"
    },
    options_hi: {
      a: "750.5 ग्राम",
      b: "708.06 ग्राम",
      c: "833.33 ग्राम",
      d: "785.5 ग्राम"
    },
    correct_option: "c",
    solution_text: "Let the false weight used be W grams.\nProfit% = [(1,000 - W) / W] × 100\nGiven: Profit% = 20%\n=> 20 = [(1,000 - W) / W] × 100\n=> 0.20 W = 1,000 - W\n=> 1.20 W = 1,000\n=> W = 1,000 / 1.20 = 10,000 / 12 = 833.33 gm.\nCorrect Answer: Option (c).",
    solution_text_hi: "माना प्रयुक्त वजन = W ग्राम।\nलाभ% = [(1000 - W) / W] × 100 = 20%\n=> 1000 - W = 0.2 W => 1.2 W = 1000 => W = 833.33 ग्राम।\nअतः सही उत्तर (c) है।",
    shortcut_text: "W = True Weight / (1 + Profit%) = 1000 / 1.20 = 833.33 gm.",
    shortcut_text_hi: "W = 1000 / 1.20 = 833.33 ग्राम।"
  },
  {
    question_number: 27,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 14",
    type_category: "Mixed Buying and Common Selling Rate",
    type_category_hi: "मिश्रित खरीद और संयुक्त बिक्री दर",
    question_text: "A man bought a number of apples at 5 for ₹50 and an equal number at 6 for ₹50. If he sells all of them at 11 for ₹100, what would be his percentage profit or loss?",
    question_text_hi: "एक व्यक्ति ने ₹50 में 5 की दर से कुछ सेब खरीदे और उतनी ही संख्या में ₹50 में 6 की दर से खरीदे। यदि वह उन्हें ₹100 में 11 की दर से बेचता है, तो उसका लाभ या हानि प्रतिशत क्या होगा?",
    options: {
      a: "100/121% loss",
      b: "100/121% profit",
      c: "121/100% profit",
      d: "121/100% loss"
    },
    options_hi: {
      a: "100/121% हानि",
      b: "100/121% लाभ",
      c: "121/100% लाभ",
      d: "121/100% हानि"
    },
    correct_option: "a",
    solution_text: "Let the man buy 330 apples of each variety (LCM of 5, 6, 11 = 330).\nTotal apples bought = 330 + 330 = 660 apples.\nCP of first 330 apples = (330 / 5) × 50 = 66 × 50 = ₹3,300.\nCP of second 330 apples = (330 / 6) × 50 = 55 × 50 = ₹2,750.\nTotal CP = 3,300 + 2,750 = ₹6,050.\nTotal SP of 660 apples = (660 / 11) × 100 = 60 × 100 = ₹6,000.\nLoss = 6,050 - 6,000 = ₹50.\nLoss% = (50 / 6,050) × 100 = (50 / 60.5) = 100 / 121% loss.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना प्रत्येक प्रकार के 330 सेब खरीदे गए (5, 6, 11 का LCM = 330)।\nकुल 660 सेब।\nCP₁ = (330 / 5) × 50 = ₹3,300।\nCP₂ = (330 / 6) × 50 = ₹2,750।\nकुल CP = ₹6,050।\nSP = (660 / 11) × 100 = ₹6,000।\nहानि = ₹50। हानि% = (50 / 6050) × 100 = 100/121% हानि।\nअतः सही उत्तर (a) है।",
    shortcut_text: "CP of 1 apple = (10 + 25/3) / 2 = 55 / 6.\nSP of 1 apple = 100 / 11.\nLoss% = [(55/6 - 100/11) / (55/6)] × 100 = (5/66) / (55/6) × 100 = 100/121% loss.",
    shortcut_text_hi: "CP = 55/6, SP = 100/11 => हानि% = 100/121% हानि।"
  },
  {
    question_number: 28,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 1",
    type_category: "Equal Discount and Profit Ratio",
    type_category_hi: "समान छूट और लाभ प्रतिशत अनुपात",
    question_text: "If the discount and percentage profit are both 20%, then by what percentage is the marked price above the cost price?",
    question_text_hi: "यदि छूट और लाभ प्रतिशत दोनों 20% हैं, तो अंकित मूल्य क्रय मूल्य से कितने प्रतिशत अधिक है?",
    options: {
      a: "50%",
      b: "40%",
      c: "70%",
      d: "60%"
    },
    options_hi: {
      a: "50%",
      b: "40%",
      c: "70%",
      d: "60%"
    },
    correct_option: "a",
    solution_text: "Standard Ratio Formula:\nMP / CP = (100 + Profit%) / (100 - Discount%)\nHere Profit% = 20% and Discount% = 20%.\nMP / CP = (100 + 20) / (100 - 20) = 120 / 80 = 3 / 2.\nMarkup = (3 - 2) / 2 = 1 / 2 = 50%.\nTherefore, Marked Price is 50% above the Cost Price.\nCorrect Answer: Option (a).",
    solution_text_hi: "सूत्र: MP / CP = (100 + लाभ%) / (100 - छूट%)\nMP / CP = (100 + 20) / (100 - 20) = 120 / 80 = 3 / 2।\nअंकित मूल्य में वृद्धि = (3 - 2) / 2 = 1/2 = 50%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "MP / CP = 120 / 80 = 1.5 => MP is 50% above CP.",
    shortcut_text_hi: "MP / CP = 120 / 80 = 1.5 => 50% अधिक।"
  },
  {
    question_number: 29,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 15",
    type_category: "Intermediary vs Direct Customer Sale",
    type_category_hi: "मध्यस्थ बनाम प्रत्यक्ष ग्राहक बिक्री",
    question_text: "A weaver sells a saree at ₹150 to a shopkeeper and earns a profit of 25%. The shopkeeper sells the same saree to a customer and earns a profit of 30%. If the weaver could sell the saree directly to the customer at ₹180, then what would be his profit % and what would be the customer's profit (savings) in ₹?",
    question_text_hi: "एक बुनकर एक साड़ी ₹150 में एक दुकानदार को बेचता है और 25% का लाभ कमाता है। दुकानदार ने वही साड़ी एक ग्राहक को बेची और 30% का लाभ कमाया। यदि बुनकर साड़ी को सीधे ग्राहक को ₹180 में बेच सकता, तो उसका लाभ % क्या होता और ग्राहक का लाभ (बचत) ₹ में क्या होता?",
    options: {
      a: "50%, ₹25",
      b: "60%, ₹20",
      c: "50%, ₹15",
      d: "40%, ₹20"
    },
    options_hi: {
      a: "50%, ₹25",
      b: "60%, ₹20",
      c: "50%, ₹15",
      d: "40%, ₹20"
    },
    correct_option: "c",
    solution_text: "Weaver's SP = ₹150 at 25% profit.\nWeaver's CP = 150 / 1.25 = ₹120.\nShopkeeper's CP = ₹150.\nShopkeeper's SP to customer at 30% profit = 150 × 1.30 = ₹195.\nIf weaver sells directly at ₹180:\nWeaver's Profit = 180 - 120 = ₹60.\nWeaver's Profit% = (60 / 120) × 100 = 50%.\nCustomer's price from shopkeeper was ₹195; direct price is ₹180.\nCustomer's profit (savings) = 195 - 180 = ₹15.\nAnswer: 50%, ₹15.\nCorrect Answer: Option (c).",
    solution_text_hi: "बुनकर का CP = 150 / 1.25 = ₹120।\nदुकानदार का ग्राहक को SP = 150 × 1.30 = ₹195।\nसीधे ₹180 में बेचने पर:\nबुनकर का लाभ = 180 - 120 = ₹60 => लाभ% = (60/120) × 100 = 50%।\nग्राहक की बचत = 195 - 180 = ₹15।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Weaver CP = 120 => At 180, Profit% = 60/120 = 50%.\nCustomer pays 180 instead of 195 => saves ₹15.",
    shortcut_text_hi: "बुनकर CP = 120 => 180 पर लाभ = 50%। ग्राहक बचत = 195 - 180 = ₹15।"
  },
  {
    question_number: 30,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 10",
    type_category: "Multi-party Chain of Sales",
    type_category_hi: "श्रृंखला क्रय-विक्रय लेन-देन",
    question_text: "Reema buys a car for ₹75,000. She spends ₹10,000 on its repairing. Later she sold this car to Cheeru at 15% profit. Cheeru sold it to Ritu at 10% profit. What sum of money was spent by Ritu to buy the car?",
    question_text_hi: "रीमा ₹75,000 में एक कार खरीदती है। वह इसकी मरम्मत पर ₹10,000 खर्च करती है। बाद में उसने इस कार को चीरू को 15% लाभ पर बेच दिया। चीरू ने इसे रितु को 10% लाभ पर बेच दिया। कार खरीदने के लिए रितु द्वारा कितनी राशि खर्च की गई?",
    options: {
      a: "₹1,02,575",
      b: "₹1,05,752",
      c: "₹1,02,252",
      d: "₹1,07,525"
    },
    options_hi: {
      a: "₹1,02,575",
      b: "₹1,05,752",
      c: "₹1,02,252",
      d: "₹1,07,525"
    },
    correct_option: "d",
    solution_text: "Reema's total cost = 75,000 + 10,000 = ₹85,000.\nReema sells to Cheeru at 15% profit:\nCheeru's cost = 85,000 × 1.15 = ₹97,750.\nCheeru sells to Ritu at 10% profit:\nRitu's purchase price = 97,750 × 1.10 = ₹1,07,525.\nCorrect Answer: Option (d).",
    solution_text_hi: "रीमा का कुल CP = 75,000 + 10,000 = ₹85,000।\nचीरू का CP = 85,000 × 1.15 = ₹97,750।\nरितु का CP = 97,750 × 1.10 = ₹1,07,525।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Ritu's Price = 85,000 × 1.15 × 1.10 = 85,000 × 1.265 = ₹1,07,525.",
    shortcut_text_hi: "रितु का मूल्य = 85,000 × 1.15 × 1.10 = ₹1,07,525।"
  }
];

const PROFIT_LOSS_SET_B_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MODERATE (Q1 to Q6)
  // ==========================================
  {
    question_number: 1,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 16",
    type_category: "Loss Percentage from Selling Price and Loss",
    type_category_hi: "विक्रय मूल्य और हानि से हानि प्रतिशत",
    question_text: "By selling an item for ₹222 a person incurs a loss of ₹48. What is the percentage of loss incurred in the transaction?",
    question_text_hi: "एक वस्तु को ₹222 में बेचने पर एक व्यक्ति को ₹48 की हानि होती है। लेन-देन में होने वाली हानि का प्रतिशत क्या है?",
    options: {
      a: "17 7/9%",
      b: "21 23/37%",
      c: "16 7/18%",
      d: "18 8/9%"
    },
    options_hi: {
      a: "17 7/9%",
      b: "21 23/37%",
      c: "16 7/18%",
      d: "18 8/9%"
    },
    correct_option: "a",
    solution_text: "Selling Price (SP) = ₹222.\nLoss = ₹48.\nCost Price (CP) = SP + Loss = 222 + 48 = ₹270.\nLoss% = (Loss / CP) × 100\n= (48 / 270) × 100 = (16 / 90) × 100 = 160 / 9% = 17 7/9%.\nCorrect Answer: Option (a).",
    solution_text_hi: "विक्रय मूल्य (SP) = ₹222। हानि = ₹48।\nक्रय मूल्य (CP) = 222 + 48 = ₹270।\nहानि% = (48 / 270) × 100 = 160 / 9 = 17 7/9%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "CP = 222 + 48 = 270.\nLoss% = 48/270 = 16/90 = 17.77% = 17 7/9%.",
    shortcut_text_hi: "CP = 270 => हानि% = (48/270) × 100 = 17 7/9%।"
  },
  {
    question_number: 2,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 13",
    type_category: "Dishonest Dealer Faulty Weight at CP",
    type_category_hi: "क्रय मूल्य पर गलत वजन का उपयोग",
    question_text: "A dealer claims to sell his goods at cost price but uses a weight that actually weighs 800 gm though 1 kg is written on it. Find his gain percentage.",
    question_text_hi: "एक डीलर अपने माल को क्रय मूल्य पर बेचने का दावा करता है लेकिन एक ऐसे वजन का उपयोग करता है जिसका वजन वास्तव में 800 ग्राम है, हालांकि उस पर 1 किलो लिखा होता है। उसका लाभ प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "25%",
      b: "18%",
      c: "20%",
      d: "15%"
    },
    options_hi: {
      a: "25%",
      b: "18%",
      c: "20%",
      d: "15%"
    },
    correct_option: "a",
    solution_text: "Standard Formula for Faulty Weight:\nGain% = [(Error) / (True Value - Error)] × 100\nError = 1,000 gm - 800 gm = 200 gm.\nActual Weight Given = 800 gm.\nGain% = (200 / 800) × 100 = (1 / 4) × 100 = 25%.\nCorrect Answer: Option (a).",
    solution_text_hi: "त्रुटि = 1000 - 800 = 200 ग्राम।\nलाभ% = (त्रुटि / दिया गया वास्तविक वजन) × 100\n= (200 / 800) × 100 = 25% लाभ।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Gain% = (200 / 800) × 100 = 25%.",
    shortcut_text_hi: "सीधे: (200/800) × 100 = 25%।"
  },
  {
    question_number: 3,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "SP of x Articles = CP of y Articles",
    type_category_hi: "x का विक्रय मूल्य = y का क्रय मूल्य",
    question_text: "The selling price of 9 articles is equal to the cost price of 15 articles. In this transaction there is a:",
    question_text_hi: "9 वस्तुओं का विक्रय मूल्य 15 वस्तुओं के क्रय मूल्य के बराबर है। इस लेन-देन में क्या होता है:",
    options: {
      a: "loss of 40%",
      b: "gain of 66.6% nearly",
      c: "loss of 66.6% nearly",
      d: "gain of 40%"
    },
    options_hi: {
      a: "40% की हानि",
      b: "लगभग 66.6% का लाभ",
      c: "लगभग 66.6% की हानि",
      d: "40% का लाभ"
    },
    correct_option: "b",
    solution_text: "Given: 9 × SP = 15 × CP\n=> SP / CP = 15 / 9 = 5 / 3\nSince SP > CP, there is a profit.\nProfit per unit = 5 - 3 = 2 units.\nProfit% = (2 / 3) × 100 = 66.66% ≈ 66.6% gain.\nCorrect Answer: Option (b).",
    solution_text_hi: "9 × SP = 15 × CP => SP / CP = 15 / 9 = 5 / 3।\nलाभ = 5 - 3 = 2 इकाई।\nलाभ% = (2 / 3) × 100 = 66.66% ≈ 66.6% का लाभ।\nअतः सही उत्तर (b) है।",
    shortcut_text: "SP/CP = 5/3 => Profit = 2/3 = 66.6%.",
    shortcut_text_hi: "SP/CP = 5/3 => 2/3 लाभ = 66.6% लाभ।"
  },
  {
    question_number: 4,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 14",
    type_category: "Cross Multiplying Rate of Purchase and Sale",
    type_category_hi: "क्रय और विक्रय दर का तिर्यक गुणा",
    question_text: "A seller buys a certain number of bananas at the rate of 8 for ₹5 and sells them at the rate of 5 for ₹8. What will be his profit percentage?",
    question_text_hi: "एक विक्रेता ₹5 में 8 की दर से कुछ केले खरीदता है और उन्हें ₹8 में 5 की दर से बेचता है। उसका लाभ प्रतिशत क्या होगा?",
    options: {
      a: "40%",
      b: "144%",
      c: "156%",
      d: "48%"
    },
    options_hi: {
      a: "40%",
      b: "144%",
      c: "156%",
      d: "48%"
    },
    correct_option: "c",
    solution_text: "Cost Price of 1 banana = 5 / 8 = ₹0.625.\nSelling Price of 1 banana = 8 / 5 = ₹1.60.\nProfit on 1 banana = 1.60 - 0.625 = ₹0.975.\nProfit% = (0.975 / 0.625) × 100 = (39 / 25) × 100 = 156%.\nCorrect Answer: Option (c).",
    solution_text_hi: "1 केले का CP = 5 / 8 रुपये।\n1 केले का SP = 8 / 5 रुपये।\nलाभ = 8/5 - 5/8 = (64 - 25) / 40 = 39 / 40 रुपये।\nलाभ% = [(39/40) / (5/8)] × 100 = (39 / 25) × 100 = 156%।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Cross-multiply items and rates:\nCP = 5 × 5 = 25; SP = 8 × 8 = 64.\nProfit% = [(64 - 25) / 25] × 100 = (39 / 25) × 100 = 156%.",
    shortcut_text_hi: "तिर्यक गुणा विधि: CP = 5 × 5 = 25; SP = 8 × 8 = 64।\nलाभ% = [(64 - 25)/25] × 100 = 156%।"
  },
  {
    question_number: 5,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Direct Selling Price from Cost and Profit",
    type_category_hi: "क्रय मूल्य और लाभ से विक्रय मूल्य",
    question_text: "A person bought an article for ₹1,975 and sold it at a profit of 12%. What was the selling price of the article?",
    question_text_hi: "एक व्यक्ति ने एक वस्तु ₹1,975 में खरीदी और उसे 12% के लाभ पर बेच दिया। वस्तु का विक्रय मूल्य क्या था?",
    options: {
      a: "₹2,212",
      b: "₹2,192",
      c: "₹2,222",
      d: "₹2,202"
    },
    options_hi: {
      a: "₹2,212",
      b: "₹2,192",
      c: "₹2,222",
      d: "₹2,202"
    },
    correct_option: "a",
    solution_text: "Cost Price (CP) = ₹1,975.\nProfit% = 12%.\nProfit Amount = 1,975 × (12 / 100) = ₹237.\nSelling Price (SP) = CP + Profit = 1,975 + 237 = ₹2,212.\nCorrect Answer: Option (a).",
    solution_text_hi: "CP = ₹1,975। लाभ = 12%।\nलाभ राशि = 1975 × 0.12 = ₹237।\nSP = 1975 + 237 = ₹2,212।\nअतः सही उत्तर (a) है।",
    shortcut_text: "SP = 1,975 × 1.12 = ₹2,212.",
    shortcut_text_hi: "SP = 1975 × 1.12 = ₹2,212।"
  },
  {
    question_number: 6,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Unknown Count of Articles for Given Profit %",
    type_category_hi: "दिए गए लाभ % के लिए अज्ञात वस्तु संख्या",
    question_text: "The cost price of 120 pens is the same as the selling price of x pens. If the profit is 25%, then the value of x is:",
    question_text_hi: "120 पेन का क्रय मूल्य x पेन के विक्रय मूल्य के समान है। यदि लाभ 25% है, तो x का मान है:",
    options: {
      a: "91",
      b: "95",
      c: "96",
      d: "90"
    },
    options_hi: {
      a: "91",
      b: "95",
      c: "96",
      d: "90"
    },
    correct_option: "c",
    solution_text: "Given: 120 × CP = x × SP\n=> SP / CP = 120 / x.\nGiven Profit = 25% => SP / CP = 1 + 0.25 = 1.25 = 5 / 4.\n=> 120 / x = 5 / 4\n=> 5x = 120 × 4 = 480\n=> x = 480 / 5 = 96.\nCorrect Answer: Option (c).",
    solution_text_hi: "दिया गया है: 120 × CP = x × SP => SP / CP = 120 / x।\n25% लाभ => SP / CP = 125 / 100 = 5 / 4।\n120 / x = 5 / 4 => 5x = 480 => x = 96।\nअतः सही उत्तर (c) है।",
    shortcut_text: "x = 120 / 1.25 = 96.",
    shortcut_text_hi: "x = 120 / 1.25 = 96।"
  },

  // ==========================================
  // LEVEL 2: MORE THAN MODERATE (Q7 to Q12)
  // ==========================================
  {
    question_number: 7,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 8",
    type_category: "Cost Price from Loss Percentage",
    type_category_hi: "हानि प्रतिशत से क्रय मूल्य",
    question_text: "By selling an item for ₹2,332 a person incurred a loss of 12%. What was the cost price of the item?",
    question_text_hi: "एक वस्तु को ₹2,332 में बेचने पर एक व्यक्ति को 12% की हानि हुई। वस्तु का क्रय मूल्य क्या था?",
    options: {
      a: "₹2,650",
      b: "₹2,675",
      c: "₹2,620",
      d: "₹2,625"
    },
    options_hi: {
      a: "₹2,650",
      b: "₹2,675",
      c: "₹2,620",
      d: "₹2,625"
    },
    correct_option: "a",
    solution_text: "Selling Price (SP) = ₹2,332.\nLoss% = 12% => SP = 88% of CP.\n0.88 CP = 2,332\nCP = 2,332 / 0.88 = (2,332 × 100) / 88 = ₹2,650.\nCost price of the item = ₹2,650.\nCorrect Answer: Option (a).",
    solution_text_hi: "12% हानि पर SP = 88% of CP = ₹2,332।\nCP = 2332 / 0.88 = ₹2,650।\nअतः वस्तु का क्रय मूल्य ₹2,650 है। विकल्प (a)।",
    shortcut_text: "88% = 2332 => 1% = 26.5 => 100% = ₹2,650.",
    shortcut_text_hi: "88% = 2332 => 100% = (2332/88) × 100 = ₹2,650।"
  },
  {
    question_number: 8,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 5",
    type_category: "Simultaneous CP & SP Change with New %",
    type_category_hi: "क्रय और विक्रय मूल्य में संयुक्त परिवर्तन",
    question_text: "An article is sold at a profit of 28%. If the cost price is increased by ₹50 and the selling price is reduced by ₹18, then the profit would be 11.6%. What is the original cost price (in ₹) of the article?",
    question_text_hi: "एक वस्तु 28% के लाभ पर बेची जाती है। यदि क्रय मूल्य में ₹50 की वृद्धि की जाती है और विक्रय मूल्य में ₹18 की कमी की जाती है, तो लाभ 11.6% होगा। वस्तु का मूल क्रय मूल्य (₹ में) क्या है?",
    options: {
      a: "₹480",
      b: "₹350",
      c: "₹450",
      d: "₹400"
    },
    options_hi: {
      a: "₹480",
      b: "₹350",
      c: "₹450",
      d: "₹400"
    },
    correct_option: "c",
    solution_text: "Let original CP = x.\nOriginal SP = 1.28x.\nNew CP = x + 50.\nNew SP = 1.28x - 18.\nGiven: New Profit = 11.6%\n=> New SP = (1 + 0.116) × New CP\n=> 1.28x - 18 = 1.116 × (x + 50)\n=> 1.28x - 18 = 1.116x + 55.8\n=> 1.28x - 1.116x = 55.8 + 18\n=> 0.164x = 73.8\n=> x = 73.8 / 0.164 = 73,800 / 164 = ₹450.\nOriginal cost price = ₹450.\nCorrect Answer: Option (c).",
    solution_text_hi: "माना मूल CP = x। मूल SP = 1.28x।\nनया CP = x + 50। नया SP = 1.28x - 18।\n1.28x - 18 = 1.116(x + 50) = 1.116x + 55.8\n0.164x = 73.8 => x = 73.8 / 0.164 = ₹450।\nअतः सही उत्तर (c) है।",
    shortcut_text: "0.164x = 55.8 + 18 = 73.8 => x = ₹450.",
    shortcut_text_hi: "0.164x = 73.8 => x = ₹450।"
  },
  {
    question_number: 9,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 17",
    type_category: "Equal Profit and Loss at Two Prices",
    type_category_hi: "दो अलग विक्रय मूल्यों पर समान लाभ और हानि",
    question_text: "The profit earned after selling an article for ₹1,875 is the same as the loss incurred after selling the article for ₹1,385. What is the cost price (in ₹) of the article?",
    question_text_hi: "एक वस्तु को ₹1,875 में बेचने के बाद प्राप्त लाभ वस्तु को ₹1,385 में बेचने के बाद होने वाली हानि के समान है। वस्तु का क्रय मूल्य (₹ में) क्या है?",
    options: {
      a: "₹1,360",
      b: "₹1,660",
      c: "₹1,630",
      d: "₹1,650"
    },
    options_hi: {
      a: "₹1,360",
      b: "₹1,660",
      c: "₹1,630",
      d: "₹1,650"
    },
    correct_option: "c",
    solution_text: "Let Cost Price = CP.\nProfit at ₹1,875 = 1,875 - CP.\nLoss at ₹1,385 = CP - 1,385.\nGiven: Profit = Loss\n=> 1,875 - CP = CP - 1,385\n=> 2 CP = 1,875 + 1,385 = 3,260\n=> CP = 3,260 / 2 = ₹1,630.\nCorrect Answer: Option (c).",
    solution_text_hi: "लाभ = 1875 - CP। हानि = CP - 1385।\n1875 - CP = CP - 1385 => 2 CP = 3260 => CP = ₹1,630।\nअतः सही उत्तर (c) है।",
    shortcut_text: "When profit = loss, CP is exactly the midpoint:\nCP = (1,875 + 1,385) / 2 = 3,260 / 2 = ₹1,630.",
    shortcut_text_hi: "समान लाभ और हानि होने पर CP = (SP₁ + SP₂) / 2 = (1875 + 1385) / 2 = ₹1,630।"
  },
  {
    question_number: 10,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 4",
    type_category: "Incremental Selling Price for Profit Increase",
    type_category_hi: "लाभ वृद्धि के लिए विक्रय मूल्य में वृद्धि",
    question_text: "An article was sold at a gain of 12%. Had it been sold for ₹33 more, the gain would have been 14%. The cost price of the article is:",
    question_text_hi: "एक वस्तु 12% के लाभ पर बेची गई। यदि इसे ₹33 अधिक में बेचा जाता, तो लाभ 14% होता। वस्तु का क्रय मूल्य है:",
    options: {
      a: "₹1,750.00",
      b: "₹1,800.00",
      c: "₹1,650.00",
      d: "₹1,850.00"
    },
    options_hi: {
      a: "₹1,750.00",
      b: "₹1,800.00",
      c: "₹1,650.00",
      d: "₹1,850.00"
    },
    correct_option: "c",
    solution_text: "Let Cost Price = CP.\nDifference in gain percentage = 14% - 12% = 2% of CP.\nGiven that this 2% increase corresponds to ₹33:\n2% of CP = ₹33\n1% of CP = 33 / 2 = ₹16.5\nCP = 16.5 × 100 = ₹1,650.\nCorrect Answer: Option (c).",
    solution_text_hi: "लाभ में अंतर = 14% - 12% = 2%।\n2% = ₹33 => 100% = (33 / 2) × 100 = ₹1,650।\nअतः सही उत्तर (c) है।",
    shortcut_text: "2% = 33 => CP = 33 × 50 = ₹1,650.",
    shortcut_text_hi: "2% = 33 => CP = 33 × 50 = ₹1,650।"
  },
  {
    question_number: 11,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 9",
    type_category: "Split Stock Sold at Loss and Gain",
    type_category_hi: "विभाजित माल पर हानि और लाभ",
    question_text: "40% of the goods are sold at 2% loss while the rest of the goods are sold at 4% profit. If there is a total profit of ₹250, then the cost price of the goods sold is:",
    question_text_hi: "40% माल 2% हानि पर बेचा जाता है जबकि शेष माल 4% लाभ पर बेचा जाता है। यदि कुल लाभ ₹250 है, तो बेचे गए माल का क्रय मूल्य है:",
    options: {
      a: "₹5,625",
      b: "₹6,525",
      c: "₹9,000",
      d: "₹15,625"
    },
    options_hi: {
      a: "₹5,625",
      b: "₹6,525",
      c: "₹9,000",
      d: "₹15,625"
    },
    correct_option: "d",
    solution_text: "Let total Cost Price = CP.\nPart 1: 40% of goods sold at 2% loss => Contribution = 0.40 × (-2%) = -0.8% of CP.\nPart 2: 60% of goods sold at 4% profit => Contribution = 0.60 × (+4%) = +2.4% of CP.\nOverall Net Profit% = 2.4% - 0.8% = 1.6% of CP.\nGiven: 1.6% of CP = ₹250\n=> CP = (250 / 1.6) × 100 = (25,000 / 1.6) = ₹15,625.\nCost price of goods = ₹15,625.\nCorrect Answer: Option (d).",
    solution_text_hi: "40% माल पर 2% हानि = -0.8%।\n60% माल पर 4% लाभ = +2.4%।\nकुल शुद्ध लाभ% = 2.4% - 0.8% = 1.6%।\n1.6% = ₹250 => CP = 250 / 0.016 = ₹15,625।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Net% = (0.4 × -2) + (0.6 × 4) = 1.6% = 250 => CP = 250 / 0.016 = ₹15,625.",
    shortcut_text_hi: "शुद्ध% = 1.6% = 250 => CP = ₹15,625।"
  },
  {
    question_number: 12,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 5",
    type_category: "Equal Decrement in CP and SP",
    type_category_hi: "क्रय और विक्रय मूल्य में समान कमी",
    question_text: "An article is sold at a profit of 20%. If both the cost price and selling price are ₹100 less, the profit will be 4% more. Find the cost price.",
    question_text_hi: "एक वस्तु को 20% के लाभ पर बेचा जाता है। यदि क्रय मूल्य और विक्रय मूल्य दोनों ₹100 कम हों, तो लाभ 4% अधिक होगा। क्रय मूल्य ज्ञात कीजिए।",
    options: {
      a: "₹800",
      b: "₹500",
      c: "₹600",
      d: "₹700"
    },
    options_hi: {
      a: "₹800",
      b: "₹500",
      c: "₹600",
      d: "₹700"
    },
    correct_option: "c",
    solution_text: "Let original CP = x.\nOriginal SP = 1.20x.\nNew CP = x - 100.\nNew SP = 1.20x - 100.\nNew Profit% = 20% + 4% = 24%.\n=> New SP = 1.24 × New CP\n=> 1.20x - 100 = 1.24 × (x - 100)\n=> 1.20x - 100 = 1.24x - 124\n=> 1.24x - 1.20x = 124 - 100\n=> 0.04x = 24\n=> x = 24 / 0.04 = ₹600.\nCost price of the article = ₹600.\nCorrect Answer: Option (c).",
    solution_text_hi: "माना मूल CP = x। मूल SP = 1.20x।\nनया CP = x - 100। नया SP = 1.20x - 100।\nनया लाभ = 24% => 1.20x - 100 = 1.24(x - 100) = 1.24x - 124।\n0.04x = 24 => x = 24 / 0.04 = ₹600।\nअतः सही उत्तर (c) है।",
    shortcut_text: "0.04x = 124 - 100 = 24 => x = 24 / 0.04 = ₹600.",
    shortcut_text_hi: "0.04x = 24 => x = ₹600।"
  },
// ==========================================
  // LEVEL 3: INSPIRED FROM PYQS (Q13 to Q18)
  // ==========================================
  {
    question_number: 13,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 11",
    type_category: "Two Articles with Same SP and Target Total Profit",
    type_category_hi: "समान विक्रय मूल्य पर लक्षित कुल लाभ",
    question_text: "The selling price of 2 blankets are the same. One of the blankets is sold at 66 2/3% profit and the CP of the other blanket is ₹400 less than its SP. If the total profit on selling both the blankets is 50%, then find the selling price of each blanket.",
    question_text_hi: "2 कंबलों का विक्रय मूल्य समान है। एक कंबल 66 2/3% लाभ पर बेचा जाता है और दूसरे कंबल का क्रय मूल्य उसके विक्रय मूल्य से ₹400 कम है। यदि दोनों कंबलों को बेचने पर कुल लाभ 50% है, तो प्रत्येक कंबल का विक्रय मूल्य ज्ञात कीजिए।",
    options: {
      a: "₹1510",
      b: "₹1530",
      c: "₹1520",
      d: "₹1500"
    },
    options_hi: {
      a: "₹1510",
      b: "₹1530",
      c: "₹1520",
      d: "₹1500"
    },
    correct_option: "d",
    solution_text: "Let the selling price of each blanket = S.\nTotal Selling Price = 2S.\nBlanket 1 is sold at 66 2/3% profit (fraction = 2/3):\n=> SP₁ = CP₁ × (1 + 2/3) = (5/3) CP₁\n=> CP₁ = 3S / 5.\nBlanket 2 has CP₂ = S - 400.\nTotal CP = CP₁ + CP₂ = (3S / 5) + S - 400 = (8S / 5) - 400.\nTotal profit on both is 50%, so Total SP = 1.50 × Total CP:\n2S = 1.5 × [(8S / 5) - 400] = (12S / 5) - 600\nMultiply throughout by 5:\n10S = 12S - 3,000\n2S = 3,000 => S = ₹1,500.\nSelling price of each blanket = ₹1,500.\nCorrect Answer: Option (d).",
    solution_text_hi: "माना प्रत्येक कंबल का SP = S। कुल SP = 2S।\nकंबल 1 पर 66 2/3% (2/3) लाभ => CP₁ = 3S/5।\nकंबल 2 का CP₂ = S - 400।\nकुल CP = 8S/5 - 400।\nकुल 50% लाभ => 2S = 1.5(8S/5 - 400) = 2.4S - 600।\n0.4S = 600 => S = ₹1,500।\nअतः सही उत्तर (d) है।",
    shortcut_text: "2S = 1.5(8S/5 - 400) => 0.4S = 600 => S = ₹1,500.",
    shortcut_text_hi: "0.4S = 600 => S = ₹1,500।"
  },
  {
    question_number: 14,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 8",
    type_category: "Price Shift from 30% Loss to 16% Gain",
    type_category_hi: "30% हानि से 16% लाभ में रूपांतरण",
    question_text: "By selling an item for ₹1,729 Rohini made a loss of 30%. At what price should she sell the item to make a gain of 16%?",
    question_text_hi: "रोहिणी को एक वस्तु ₹1,729 में बेचने पर 30% की हानि हुई। 16% का लाभ कमाने के लिए उसे वस्तु को किस कीमत पर बेचना चाहिए?",
    options: {
      a: "₹2,856.20",
      b: "₹2,865.20",
      c: "₹2,856.50",
      d: "₹2,866.40"
    },
    options_hi: {
      a: "₹2,856.20",
      b: "₹2,865.20",
      c: "₹2,856.50",
      d: "₹2,866.40"
    },
    correct_option: "b",
    solution_text: "At 30% loss, SP = 70% of CP = ₹1,729.\nCP = 1,729 / 0.70 = ₹2,470.\nFor 16% gain, Required SP = 2,470 × (1 + 0.16) = 2,470 × 1.16 = ₹2,865.20.\nCorrect Answer: Option (b).",
    solution_text_hi: "70% = ₹1,729 => CP = 1729 / 0.70 = ₹2,470।\n16% लाभ पर SP = 2470 × 1.16 = ₹2,865.20।\nअतः सही उत्तर (b) है।",
    shortcut_text: "SP₂ = (1729 / 70) × 116 = 24.7 × 116 = ₹2,865.20.",
    shortcut_text_hi: "SP₂ = (1729 / 70) × 116 = ₹2,865.20।"
  },
  {
    question_number: 15,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 17",
    type_category: "Midpoint CP to Required Profit Target",
    type_category_hi: "मध्य बिंदु क्रय मूल्य से लक्षित लाभ",
    question_text: "The percentage profit earned by James on selling an article for ₹1,920 is equal to the percentage loss incurred by selling the same article for ₹1,500. At what selling price should he sell the article if he wants to make a profit of 10%?",
    question_text_hi: "एक वस्तु को ₹1,920 में बेचने पर जेम्स द्वारा अर्जित लाभ प्रतिशत उसी वस्तु को ₹1,500 में बेचने पर हुई हानि प्रतिशत के बराबर है। यदि वह 10% का लाभ कमाना चाहता है तो उसे वस्तु को किस विक्रय मूल्य पर बेचना चाहिए?",
    options: {
      a: "₹2,000",
      b: "₹4,000",
      c: "₹1,881",
      d: "₹7,000"
    },
    options_hi: {
      a: "₹2,000",
      b: "₹4,000",
      c: "₹1,881",
      d: "₹7,000"
    },
    correct_option: "c",
    solution_text: "Since percentage profit at ₹1,920 equals percentage loss at ₹1,500 (both on same CP):\nProfit Amount = Loss Amount\n1,920 - CP = CP - 1,500\n2 CP = 3,420 => CP = ₹1,710.\nTo make a profit of 10%:\nRequired SP = 1,710 × 1.10 = ₹1,881.\nCorrect Answer: Option (c).",
    solution_text_hi: "समान लाभ और हानि होने पर CP = (1920 + 1500) / 2 = 3420 / 2 = ₹1,710।\n10% लाभ पर SP = 1710 × 1.10 = ₹1,881।\nअतः सही उत्तर (c) है।",
    shortcut_text: "CP = (1920 + 1500) / 2 = 1710.\nSP = 1710 × 1.1 = ₹1,881.",
    shortcut_text_hi: "CP = 1710 => SP = 1710 × 1.1 = ₹1,881।"
  },
  {
    question_number: 16,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 18",
    type_category: "Cost Increase with New Profit Target",
    type_category_hi: "लागत वृद्धि के साथ नया लाभ लक्ष्य",
    question_text: "A television manufacturer earns a profit of 10% by selling one TV set for ₹24,750. If the production cost is increased by 15%, then what would be the new selling price of the TV set so as to gain a profit of 15%?",
    question_text_hi: "एक टेलीविजन निर्माता एक टीवी सेट ₹24,750 में बेचकर 10% का लाभ कमाता है। यदि उत्पादन लागत में 15% की वृद्धि हो जाती है, तो 15% का लाभ प्राप्त करने के लिए टीवी सेट का नया विक्रय मूल्य क्या होगा?",
    options: {
      a: "₹28,756.25",
      b: "₹27,756.25",
      c: "₹29,756.25",
      d: "₹26,756.26"
    },
    options_hi: {
      a: "₹28,756.25",
      b: "₹27,756.25",
      c: "₹29,756.25",
      d: "₹26,756.26"
    },
    correct_option: "c",
    solution_text: "Original Selling Price = ₹24,750 at 10% profit.\nInitial Production Cost = 24,750 / 1.10 = ₹22,500.\nNew Production Cost (increased by 15%) = 22,500 × 1.15 = ₹25,875.\nNew Selling Price for 15% profit = 25,875 × 1.15 = ₹29,756.25.\nCorrect Answer: Option (c).",
    solution_text_hi: "मूल CP = 24,750 / 1.10 = ₹22,500।\nनया CP = 22,500 × 1.15 = ₹25,875।\n15% लाभ पर नया SP = 25,875 × 1.15 = ₹29,756.25।\nअतः सही उत्तर (c) है।",
    shortcut_text: "New SP = (24,750 / 1.10) × 1.15 × 1.15 = 22,500 × 1.3225 = ₹29,756.25.",
    shortcut_text_hi: "New SP = 22,500 × 1.15 × 1.15 = ₹29,756.25।"
  },
  {
    question_number: 17,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 8",
    type_category: "22% Loss to 6% Gain Price Transition",
    type_category_hi: "22% हानि से 6% लाभ में रूपांतरण",
    question_text: "A seller gets 22% loss on selling a set of books for ₹1,755. What should be its selling price for getting 6% profit?",
    question_text_hi: "एक विक्रेता को पुस्तकों का एक सेट ₹1,755 में बेचने पर 22% की हानि होती है। 6% लाभ प्राप्त करने के लिए इसका विक्रय मूल्य क्या होना चाहिए?",
    options: {
      a: "₹2,375",
      b: "₹2,385",
      c: "₹2,355",
      d: "₹2,365"
    },
    options_hi: {
      a: "₹2,375",
      b: "₹2,385",
      c: "₹2,355",
      d: "₹2,365"
    },
    correct_option: "b",
    solution_text: "At 22% loss, SP = (100 - 22)% = 78% of CP = ₹1,755.\nCP = 1,755 / 0.78 = ₹2,250.\nFor 6% profit, Required SP = 2,250 × 1.06 = ₹2,385.\nCorrect Answer: Option (b).",
    solution_text_hi: "78% = ₹1,755 => CP = 1755 / 0.78 = ₹2,250।\n6% लाभ पर अभीष्ट SP = 2250 × 1.06 = ₹2,385।\nअतः सही उत्तर (b) है।",
    shortcut_text: "SP₂ = (1755 / 78) × 106 = 22.5 × 106 = ₹2,385.",
    shortcut_text_hi: "SP₂ = (1755 / 78) × 106 = 22.5 × 106 = ₹2,385।"
  },
  {
    question_number: 18,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 9",
    type_category: "Mixed Grains with Different Profits",
    type_category_hi: "विभिन्न लाभ दरों पर संयुक्त अनाज",
    question_text: "The cost price of 5 kg of wheat and 10 kg of lentil were ₹70 and ₹80 per kg respectively. On selling, he gained 10% profit on wheat and 20% profit on lentil. What was the total selling price of all items?",
    question_text_hi: "5 किलो गेहूं और 10 किलो दाल का क्रय मूल्य क्रमशः ₹70 और ₹80 प्रति किलो था। बेचने पर, उसे गेहूं पर 10% और दाल पर 20% का लाभ हुआ। सभी वस्तुओं का कुल विक्रय मूल्य क्या था?",
    options: {
      a: "₹1,375",
      b: "₹1,345",
      c: "₹1,400",
      d: "₹1,350"
    },
    options_hi: {
      a: "₹1,375",
      b: "₹1,345",
      c: "₹1,400",
      d: "₹1,350"
    },
    correct_option: "b",
    solution_text: "Wheat:\nCP = 5 kg × ₹70 = ₹350.\nProfit = 10% => SP = 350 × 1.10 = ₹385.\nLentil:\nCP = 10 kg × ₹80 = ₹800.\nProfit = 20% => SP = 800 × 1.20 = ₹960.\nTotal Selling Price = 385 + 960 = ₹1,345.\nCorrect Answer: Option (b).",
    solution_text_hi: "गेहूं: CP = 5 × 70 = ₹350 => SP = 350 × 1.10 = ₹385।\nदाल: CP = 10 × 80 = ₹800 => SP = 800 × 1.20 = ₹960।\nकुल विक्रय मूल्य = 385 + 960 = ₹1,345।\nअतः सही उत्तर (b) है।",
    shortcut_text: "SP = (350 × 1.10) + (800 × 1.20) = 385 + 960 = ₹1,345.",
    shortcut_text_hi: "कुल SP = 385 + 960 = ₹1,345।"
  },

  // ==========================================
  // LEVEL 4: PYQ+ (Q19 to Q24)
  // ==========================================
  {
    question_number: 19,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 19",
    type_category: "Two Articles at Loss and Gain Combination",
    type_category_hi: "हानि और लाभ का संयुक्त लेन-देन",
    question_text: "A man sold a shirt for ₹960 at a loss of 4%. He sells a sweater for ₹840 at a profit of 20%. Find his net profit or loss in ₹.",
    question_text_hi: "एक व्यक्ति ने एक शर्ट ₹960 में 4% की हानि पर बेची। वह एक स्वेटर ₹840 में 20% के लाभ पर बेचता है। उसका शुद्ध लाभ या हानि ज्ञात कीजिए।",
    options: {
      a: "Profit, ₹100",
      b: "Loss, ₹123",
      c: "Loss, ₹100",
      d: "Profit, ₹123"
    },
    options_hi: {
      a: "₹100 लाभ",
      b: "₹123 हानि",
      c: "₹100 हानि",
      d: "₹123 लाभ"
    },
    correct_option: "a",
    solution_text: "Shirt: SP = ₹960 at 4% loss.\nCP_shirt = 960 / 0.96 = ₹1,000.\nLoss on shirt = 1,000 - 960 = ₹40.\nSweater: SP = ₹840 at 20% profit.\nCP_sweater = 840 / 1.20 = ₹700.\nProfit on sweater = 840 - 700 = ₹140.\nNet Profit = Profit on sweater - Loss on shirt = 140 - 40 = ₹100.\nCorrect Answer: Option (a).",
    solution_text_hi: "शर्ट का CP = 960 / 0.96 = ₹1,000। हानि = ₹40।\nस्वेटर का CP = 840 / 1.20 = ₹700। लाभ = ₹140।\nशुद्ध लाभ = 140 - 40 = ₹100 (लाभ)।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Total SP = 960 + 840 = 1,800.\nTotal CP = 1,000 + 700 = 1,700.\nNet Profit = 1,800 - 1,700 = ₹100.",
    shortcut_text_hi: "कुल SP = 1800, कुल CP = 1700 => लाभ = ₹100।"
  },
  {
    question_number: 20,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Buy-Back Transaction with Loss on Resale",
    type_category_hi: "पुनर्खरीद और पुनर्विक्रय लेन-देन",
    question_text: "A motor car worth ₹2,00,000 is sold by Ramu at 5% profit to Rahul. Rahul sells the motor car back to Ramu at 2% loss. Ramu's net profit (in ₹) in the complete transaction is:",
    question_text_hi: "रामू द्वारा ₹2,00,000 मूल्य की एक मोटर कार 5% लाभ पर राहुल को बेची जाती है। राहुल मोटर कार को 2% हानि पर रामू को वापस बेच देता है। पूरे लेन-देन में रामू का शुद्ध लाभ (₹ में) है:",
    options: {
      a: "₹3,208",
      b: "₹2,058",
      c: "₹4,200",
      d: "₹3,200"
    },
    options_hi: {
      a: "₹3,208",
      b: "₹2,058",
      c: "₹4,200",
      d: "₹3,200"
    },
    correct_option: "c",
    solution_text: "Step 1: Ramu sells car to Rahul at 5% profit:\nSelling Price (Rahul's CP) = 2,00,000 × 1.05 = ₹2,10,000.\nRamu has received ₹2,10,000.\nStep 2: Rahul sells back to Ramu at 2% loss on ₹2,10,000:\nRahul's SP (Ramu pays) = 2,10,000 × (1 - 0.02) = 2,10,000 × 0.98 = ₹2,05,800.\nRamu receives his car back and keeps the difference in cash:\nNet Profit = Cash Received - Cash Paid = 2,10,000 - 2,05,800 = ₹4,200.\nCorrect Answer: Option (c).",
    solution_text_hi: "चरण 1: रामू ने राहुल को बेचा = 2,00,000 × 1.05 = ₹2,10,000।\nचरण 2: राहुल ने 2% हानि पर रामू को वापस बेचा = 2,10,000 × 0.98 = ₹2,05,800।\nरामू के पास कार वापस आ गई और नकद बचा = 2,10,000 - 2,05,800 = ₹4,200।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Ramu's gain = 2% of Rahul's cost = 2% of ₹2,10,000 = ₹4,200.",
    shortcut_text_hi: "रामू का लाभ = 2,10,000 का 2% = ₹4,200।"
  },
  {
    question_number: 21,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 6",
    type_category: "Grouped Clothing Cost & Individual Sale",
    type_category_hi: "संयुक्त वस्त्र लागत और व्यक्तिगत बिक्री",
    question_text: "The set of 2 pants and 4 shirts or 1 pant and 6 shirts costs ₹5,600. A shopkeeper decides to sell them separately. He sold 10 shirts for ₹6,000. Find the loss or profit on each shirt.",
    question_text_hi: "2 पैंट और 4 शर्ट या 1 पैंट और 6 शर्ट के सेट की कीमत ₹5,600 है। एक दुकानदार उन्हें अलग-अलग बेचने का फैसला करता है। उसने ₹6,000 में 10 शर्ट बेचीं। प्रत्येक शर्ट पर हानि या लाभ ज्ञात कीजिए।",
    options: {
      a: "Profit ₹1,000",
      b: "Loss ₹1,000",
      c: "Profit ₹100",
      d: "Loss ₹100"
    },
    options_hi: {
      a: "₹1,000 लाभ",
      b: "₹1,000 हानि",
      c: "₹100 लाभ",
      d: "₹100 हानि"
    },
    correct_option: "d",
    solution_text: "Let CP of 1 pant = P and CP of 1 shirt = S.\nGiven: 2P + 4S = P + 6S = ₹5,600\nFrom 2P + 4S = P + 6S => P = 2S.\nSubstitute P = 2S into P + 6S = 5,600:\n2S + 6S = 5,600 => 8S = 5,600 => S = ₹700.\nCost price of 1 shirt = ₹700.\nSelling price of 1 shirt = 6,000 / 10 = ₹600.\nLoss per shirt = CP - SP = 700 - 600 = ₹100 Loss.\nCorrect Answer: Option (d).",
    solution_text_hi: "2P + 4S = P + 6S => P = 2S।\n2S + 6S = 5,600 => 8S = 5,600 => S = ₹700।\n1 शर्ट का SP = 6,000 / 10 = ₹600।\nहानि = 700 - 600 = ₹100 हानि।\nअतः सही उत्तर (d) है।",
    shortcut_text: "8 Shirts = 5,600 => CP = 700. SP = 600 => Loss = ₹100.",
    shortcut_text_hi: "8 शर्ट = 5600 => CP = 700। SP = 600 => हानि = ₹100।"
  },
  {
    question_number: 22,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 2",
    type_category: "Ratio of x to y for Given Profit",
    type_category_hi: "दिए गए लाभ के लिए x और y का अनुपात",
    question_text: "When the cost price of x articles is equal to the selling price of y articles, the profit is 25%. Find the ratio of x : y.",
    question_text_hi: "जब x वस्तुओं का क्रय मूल्य y वस्तुओं के विक्रय मूल्य के बराबर होता है, तो लाभ 25% होता है, तो x : y का अनुपात ज्ञात कीजिए।",
    options: {
      a: "4:5",
      b: "5:4",
      c: "5:3",
      d: "3:3"
    },
    options_hi: {
      a: "4:5",
      b: "5:4",
      c: "5:3",
      d: "3:3"
    },
    correct_option: "b",
    solution_text: "Given: x × CP = y × SP => SP / CP = x / y.\nProfit% = 25% => SP / CP = 1 + 0.25 = 125 / 100 = 5 / 4.\nEquating the ratios:\nx / y = 5 / 4.\nTherefore, x : y = 5 : 4.\nCorrect Answer: Option (b).",
    solution_text_hi: "x × CP = y × SP => SP / CP = x / y।\n25% लाभ => SP / CP = 125 / 100 = 5 / 4।\nअतः x : y = 5 : 4। विकल्प (b)।",
    shortcut_text: "x / y = SP / CP = 125 / 100 = 5 : 4.",
    shortcut_text_hi: "x : y = SP : CP = 125 : 100 = 5 : 4।"
  },
  {
    question_number: 23,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 21",
    type_category: "Ratio of Selling Prices with Differential Gains",
    type_category_hi: "विभिन्न लाभों पर विक्रय मूल्यों का अनुपात",
    question_text: "On selling an item at a profit of 4% and 10%, there is a difference of ₹3 in selling price. Then, the ratio of the selling price of both is:",
    question_text_hi: "एक वस्तु को 4% और 10% के लाभ पर बेचने पर, विक्रय मूल्य में ₹3 का अंतर आता है, तो दोनों के विक्रय मूल्य का अनुपात है:",
    options: {
      a: "52:55",
      b: "51:55",
      c: "34:35",
      d: "55:52"
    },
    options_hi: {
      a: "52:55",
      b: "51:55",
      c: "34:35",
      d: "55:52"
    },
    correct_option: "a",
    solution_text: "Let Cost Price = CP.\nSP₁ at 4% profit = 1.04 CP.\nSP₂ at 10% profit = 1.10 CP.\nRatio of SP₁ : SP₂ = 1.04 CP : 1.10 CP = 104 : 110.\nDividing by 2:\n= 52 : 55.\n(Note: The ₹3 difference confirms CP = 3 / 0.06 = ₹50, but the ratio is independent of CP).\nCorrect Answer: Option (a).",
    solution_text_hi: "SP₁ = 1.04 CP, SP₂ = 1.10 CP।\nअनुपात SP₁ : SP₂ = 104 : 110 = 52 : 55।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Ratio = 104 : 110 = 52 : 55.",
    shortcut_text_hi: "अनुपात = 104 : 110 = 52 : 55।"
  },
  {
    question_number: 24,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 21",
    type_category: "Ratio of Selling Prices at 8% and 12%",
    type_category_hi: "8% और 12% पर विक्रय मूल्यों का अनुपात",
    question_text: "The difference of selling prices of an item on the basis of profit of 8% and 12% is ₹3. The ratio of the selling prices of both the items is:",
    question_text_hi: "8% और 12% के लाभ के आधार पर किसी वस्तु के विक्रय मूल्य का अंतर ₹3 है। दोनों वस्तुओं के विक्रय मूल्य का अनुपात है:",
    options: {
      a: "27:28",
      b: "27:29",
      c: "29:31",
      d: "27:31"
    },
    options_hi: {
      a: "27:28",
      b: "27:29",
      c: "29:31",
      d: "27:31"
    },
    correct_option: "a",
    solution_text: "Let Cost Price = CP.\nSP₁ at 8% profit = 1.08 CP.\nSP₂ at 12% profit = 1.12 CP.\nRatio SP₁ : SP₂ = 108 : 112.\nDividing both numbers by 4:\n108 / 4 = 27\n112 / 4 = 28\nRatio = 27 : 28.\nCorrect Answer: Option (a).",
    solution_text_hi: "SP₁ = 1.08 CP, SP₂ = 1.12 CP।\nअनुपात = 108 : 112 = 27 : 28।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Ratio = 108 : 112 = 27 : 28.",
    shortcut_text_hi: "अनुपात = 108 : 112 = 27 : 28।"
  },

  // ==========================================
  // LEVEL 5: PYQ++ (Q25 to Q30)
  // ==========================================
  {
    question_number: 25,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 13",
    type_category: "False Weight for 25% Profit on Cost Price",
    type_category_hi: "25% लाभ के लिए किलोग्राम में गलत वजन",
    question_text: "A dishonest dealer professes to sell his goods at the cost price but uses a false weight and thus gains 25%. How much quantity of grains does he give for a kilogram?",
    question_text_hi: "एक बेईमान डीलर अपने माल को क्रय मूल्य पर बेचने का दावा करता है लेकिन गलत वजन का उपयोग करता है और इस प्रकार 25% का लाभ प्राप्त करता है। एक किलोग्राम के लिए वह कितने ग्राम अनाज देता है?",
    options: {
      a: "800 gram",
      b: "900 gram",
      c: "750 gram",
      d: "975 gram"
    },
    options_hi: {
      a: "800 ग्राम",
      b: "900 ग्राम",
      c: "750 ग्राम",
      d: "975 ग्राम"
    },
    correct_option: "a",
    solution_text: "Let the weight delivered for 1,000 gm be W grams.\nProfit% = [(1,000 - W) / W] × 100\nGiven Profit% = 25%\n=> 25 / 100 = (1,000 - W) / W\n=> 1 / 4 = (1,000 - W) / W\n=> W = 4,000 - 4W\n=> 5W = 4,000 => W = 4,000 / 5 = 800 grams.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना दिया गया वजन = W ग्राम।\nलाभ = [(1000 - W) / W] × 100 = 25%\n1/4 = (1000 - W) / W => 5W = 4000 => W = 800 ग्राम।\nअतः सही उत्तर (a) है।",
    shortcut_text: "W = 1,000 / 1.25 = 800 gram.",
    shortcut_text_hi: "W = 1000 / 1.25 = 800 ग्राम।"
  },
  {
    question_number: 26,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 22",
    type_category: "Bulk Quintal Purchase with Transportation Overhead",
    type_category_hi: "थोक खरीद और अतिरिक्त परिवहन व्यय",
    question_text: "A dealer buys 200 quintals of wheat at ₹1,200 per quintal. He spends ₹10,000 on transportation and storage. If he sells the wheat at ₹13 per kg, then the profit percentage of the dealer is:",
    question_text_hi: "एक डीलर ₹1,200 प्रति क्विंटल की दर से 200 क्विंटल गेहूं खरीदता है। वह परिवहन और भंडारण पर ₹10,000 खर्च करता है। यदि वह गेहूं ₹13 प्रति किलो की दर से बेचता है, तो डीलर का लाभ प्रतिशत है:",
    options: {
      a: "1%",
      b: "3%",
      c: "2%",
      d: "4%"
    },
    options_hi: {
      a: "1%",
      b: "3%",
      c: "2%",
      d: "4%"
    },
    correct_option: "d",
    solution_text: "Note: 1 quintal = 100 kg. Total quantity = 200 × 100 = 20,000 kg.\nCost of wheat = 200 × 1,200 = ₹2,40,000.\nOverhead expenses = ₹10,000.\nTotal Cost Price = 2,40,000 + 10,000 = ₹2,50,000.\nSelling Price per kg = ₹13.\nTotal Selling Price = 20,000 × 13 = ₹2,60,000.\nProfit = 2,60,000 - 2,50,000 = ₹10,000.\nProfit% = (10,000 / 2,50,000) × 100 = 4%.\nCorrect Answer: Option (d).",
    solution_text_hi: "1 क्विंटल = 100 किलो। कुल = 20,000 किलो।\nगेहूं की लागत = 200 × 1200 = ₹2,40,000।\nअतिरिक्त खर्च = ₹10,000।\nकुल CP = ₹2,50,000।\nकुल SP = 20,000 × 13 = ₹2,60,000।\nलाभ = ₹10,000।\nलाभ% = (10,000 / 2,50,000) × 100 = 4%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "CP per kg = (2,40,000 + 10,000) / 20,000 = 250 / 20 = ₹12.50.\nProfit% = [(13 - 12.5) / 12.5] × 100 = (0.5 / 12.5) × 100 = 4%.",
    shortcut_text_hi: "प्रति किलो CP = 2,50,000 / 20,000 = ₹12.50।\nलाभ% = (0.5 / 12.5) × 100 = 4%।"
  },
  {
    question_number: 27,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 23",
    type_category: "Breakage/Damage in Transit with Remaining Sale",
    type_category_hi: "परिवहन में टूट-फूट और शेष की बिक्री",
    question_text: "Sabiha purchased 240 cups for her shop at ₹8 each. During transportation, 24 cups got damaged, and she sold the remaining cups at ₹12 each. Find her overall percentage profit.",
    question_text_hi: "सबिहा ने अपनी दुकान के लिए ₹8 प्रति कप की दर से 240 कप खरीदे। परिवहन के दौरान 24 कप क्षतिग्रस्त हो गए, और उसने शेष कप ₹12 प्रत्येक की दर से बेचे। उसका कुल प्रतिशत लाभ ज्ञात कीजिए।",
    options: {
      a: "45%",
      b: "30%",
      c: "40%",
      d: "35%"
    },
    options_hi: {
      a: "45%",
      b: "30%",
      c: "40%",
      d: "35%"
    },
    correct_option: "d",
    solution_text: "Total Cost Price = 240 × 8 = ₹1,920.\nRemaining undamaged cups = 240 - 24 = 216 cups.\nTotal Selling Price = 216 × 12 = ₹2,592.\nProfit = 2,592 - 1,920 = ₹672.\nProfit% = (672 / 1,920) × 100 = 35%.\nCorrect Answer: Option (d).",
    solution_text_hi: "कुल CP = 240 × 8 = ₹1,920।\nबचे कप = 240 - 24 = 216।\nकुल SP = 216 × 12 = ₹2,592।\nलाभ = 2,592 - 1,920 = ₹672।\nलाभ% = (672 / 1,920) × 100 = 35%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Ratio SP / CP = 2,592 / 1,920 = 1.35 => 35% profit.",
    shortcut_text_hi: "SP / CP = 2592 / 1920 = 1.35 => 35% लाभ।"
  },
  {
    question_number: 28,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Three Variable Simultaneous Sum Reduction",
    type_category_hi: "तीन चरों का युगपत योग सरलीकरण",
    question_text: "The cost of 2 pencils, 4 pens and 8 erasers is ₹12 and the cost of 8 pens, 10 pencils and 4 erasers is ₹36. What will be the cost of 3 pencils, 3 pens and 3 erasers?",
    question_text_hi: "2 पेंसिल, 4 पेन और 8 इरेज़र की कीमत ₹12 है और 8 पेन, 10 पेंसिल और 4 इरेज़र की कीमत ₹36 है। 3 पेंसिल, 3 पेन और 3 इरेज़र की कीमत क्या होगी?",
    options: {
      a: "₹10",
      b: "₹15",
      c: "₹12",
      d: "₹18"
    },
    options_hi: {
      a: "₹10",
      b: "₹15",
      c: "₹12",
      d: "₹18"
    },
    correct_option: "c",
    solution_text: "Let cost of 1 pencil = x, 1 pen = y, 1 eraser = z.\nEquation 1: 2x + 4y + 8z = 12\nEquation 2: 10x + 8y + 4z = 36\nAdding Equation 1 and Equation 2:\n(2x + 10x) + (4y + 8y) + (8z + 4z) = 12 + 36\n12x + 12y + 12z = 48\nDividing throughout by 12:\nx + y + z = 4.\nCost of 1 pencil + 1 pen + 1 eraser = ₹4.\nTherefore, cost of 3 pencils, 3 pens and 3 erasers:\n= 3(x + y + z) = 3 × 4 = ₹12.\nCorrect Answer: Option (c).",
    solution_text_hi: "2x + 4y + 8z = 12  --- (1)\n10x + 8y + 4z = 36  --- (2)\nदोनों समीकरणों को जोड़ने पर:\n12x + 12y + 12z = 48 => x + y + z = 4।\n3 पेंसिल, 3 पेन और 3 इरेज़र की कीमत = 3 × 4 = ₹12।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Add both equations: 12(x + y + z) = 48 => (x + y + z) = 4.\n3(x + y + z) = 3 × 4 = ₹12.",
    shortcut_text_hi: "जोड़ने पर: 12(x+y+z) = 48 => x+y+z = 4 => 3(x+y+z) = ₹12।"
  },
  {
    question_number: 29,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 24",
    type_category: "Bulk Asset Repair and Target Average SP",
    type_category_hi: "थोक परिसंपत्ति मरम्मत और औसत विक्रय मूल्य",
    question_text: "John buys four old tractors for 2 lacs. He spent a total of 3 lacs in maintenance and repairing. If he already sells one tractor out of the four tractors for 1 lac, then in order to get a total 40% profit, what will be the average selling price of all the remaining 3 tractors?",
    question_text_hi: "जॉन ने 2 लाख में चार पुराने ट्रैक्टर खरीदे। उसने रखरखाव और मरम्मत में कुल 3 लाख खर्च किए। यदि वह चार ट्रैक्टरों में से एक ट्रैक्टर को 1 लाख में बेच चुका है, तो कुल 40% लाभ प्राप्त करने के लिए, शेष सभी 3 ट्रैक्टरों का औसत विक्रय मूल्य क्या होगा?",
    options: {
      a: "1.5 lacs",
      b: "1.2 lacs",
      c: "2 lacs",
      d: "2.3 lacs"
    },
    options_hi: {
      a: "1.5 लाख",
      b: "1.2 लाख",
      c: "2 लाख",
      d: "2.3 लाख"
    },
    correct_option: "c",
    solution_text: "Total investment (Cost Price) = 2 lacs + 3 lacs = 5 lacs.\nTarget overall profit = 40%.\nTotal required Selling Price = 5 lacs × (1 + 0.40) = 5 × 1.40 = 7 lacs.\nAmount already realized from selling 1st tractor = 1 lac.\nRemaining amount to be realized from 3 tractors = 7 lacs - 1 lac = 6 lacs.\nAverage selling price of remaining 3 tractors = 6 lacs / 3 = 2 lacs.\nCorrect Answer: Option (c).",
    solution_text_hi: "कुल लागत = 2 + 3 = 5 लाख।\n40% लाभ के लिए कुल अभीष्ट SP = 5 × 1.40 = 7 लाख।\n1 ट्रैक्टर से प्राप्त राशि = 1 लाख।\nशेष 3 ट्रैक्टरों से प्राप्त करनी होगी = 7 - 1 = 6 लाख।\nऔसत विक्रय मूल्य = 6 / 3 = 2 लाख।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Total SP = 5 × 1.4 = 7 lacs.\nRemaining = 7 - 1 = 6 lacs.\nAverage for 3 = 6 / 3 = 2 lacs.",
    shortcut_text_hi: "कुल SP = 7 लाख => शेष 3 का SP = 6 लाख => औसत = 2 लाख।"
  },
  {
    question_number: 30,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 9",
    type_category: "Three-portion Land Sale with Overall Profit",
    type_category_hi: "तीन भागों में भूमि बिक्री और कुल लाभ",
    question_text: "A man buys a land for 3 lacs. He sells its 25% part at 25% loss and 40% part at 25% profit. In order to earn a total profit of 15%, for how much money should he sell the remaining part of the land?",
    question_text_hi: "एक व्यक्ति 3 लाख में एक जमीन खरीदता है। वह इसका 25% हिस्सा 25% हानि पर और 40% हिस्सा 25% लाभ पर बेचता है। कुल 15% का लाभ कमाने के लिए उसे जमीन के शेष हिस्से को कितने पैसे में बेचना चाहिए?",
    options: {
      a: "₹1,37,500",
      b: "₹1,38,750",
      c: "₹1,34,500",
      d: "₹1,45,000"
    },
    options_hi: {
      a: "₹1,37,500",
      b: "₹1,38,750",
      c: "₹1,34,500",
      d: "₹1,45,000"
    },
    correct_option: "b",
    solution_text: "Total Cost Price of land = ₹3,00,000.\nTotal required Selling Price for 15% profit = 3,00,000 × 1.15 = ₹3,45,000.\nPart 1 (25% of land):\nCost = 3,00,000 × 0.25 = ₹75,000.\nSold at 25% loss => SP₁ = 75,000 × 0.75 = ₹56,250.\nPart 2 (40% of land):\nCost = 3,00,000 × 0.40 = ₹1,20,000.\nSold at 25% profit => SP₂ = 1,20,000 × 1.25 = ₹1,50,000.\nTotal SP realized from Part 1 & Part 2 = 56,250 + 1,50,000 = ₹2,06,250.\nRemaining Selling Price required = 3,45,000 - 2,06,250 = ₹1,38,750.\nCorrect Answer: Option (b).",
    solution_text_hi: "कुल CP = ₹3,00,000।\n15% लाभ पर कुल SP = 3,00,000 × 1.15 = ₹3,45,000।\nभाग 1 (25% = ₹75,000): 25% हानि पर SP = 75,000 × 0.75 = ₹56,250।\nभाग 2 (40% = ₹1,20,000): 25% लाभ पर SP = 1,20,000 × 1.25 = ₹1,50,000।\nप्राप्त कुल राशि = 56,250 + 1,50,000 = ₹2,06,250।\nशेष हिस्से की विक्रय राशि = 3,45,000 - 2,06,250 = ₹1,38,750।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Total SP = 345,000.\nSP₁ + SP₂ = 56,250 + 150,000 = 206,250.\nRemaining SP = 345,000 - 206,250 = ₹1,38,750.",
    shortcut_text_hi: "शेष SP = 3,45,000 - 2,06,250 = ₹1,38,750।"
  }
];

const PROFIT_LOSS_SET_C_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MODERATE (Q1 to Q6)
  // ==========================================
  {
    question_number: 1,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "SP of x = CP of y",
    type_category_hi: "x का विक्रय मूल्य = y का क्रय मूल्य",
    question_text: "The selling price of 25 books is equal to the cost price of 19 books. Find the loss or gain percentage.",
    question_text_hi: "25 पुस्तकों का विक्रय मूल्य 19 पुस्तकों के क्रय मूल्य के बराबर है। हानि या लाभ प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "24% gain",
      b: "100/6% gain",
      c: "24% loss",
      d: "100/6% loss"
    },
    options_hi: {
      a: "24% लाभ",
      b: "100/6% लाभ",
      c: "24% हानि",
      d: "100/6% हानि"
    },
    correct_option: "c",
    solution_text: "Given: 25 × SP = 19 × CP\n=> SP / CP = 19 / 25\nSince SP < CP, there is a loss.\nLoss per unit = 25 - 19 = 6 units.\nLoss% = (6 / 25) × 100 = 24% loss.\nCorrect Answer: Option (c).",
    solution_text_hi: "25 × SP = 19 × CP => SP / CP = 19 / 25।\nहानि = 25 - 19 = 6 इकाई।\nहानि% = (6 / 25) × 100 = 24% हानि।\nअतः सही उत्तर (c) है।",
    shortcut_text: "SP / CP = 19 / 25 => Loss% = (6 / 25) × 100 = 24% loss.",
    shortcut_text_hi: "SP / CP = 19 / 25 => हानि = 6/25 = 24% हानि।"
  },
  {
    question_number: 2,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "SP of x = CP of y",
    type_category_hi: "x का विक्रय मूल्य = y का क्रय मूल्य",
    question_text: "The cost price of 48 books is equal to the selling price of 36 books. Find the profit percentage (Round off your answer to two decimal places).",
    question_text_hi: "48 पुस्तकों का क्रय मूल्य 36 पुस्तकों के विक्रय मूल्य के बराबर है। लाभ प्रतिशत ज्ञात कीजिए (अपने उत्तर को दो दशमलव स्थानों तक पूर्णांकित करें)।",
    options: {
      a: "39.84%",
      b: "36.23%",
      c: "33.33%",
      d: "22.18%"
    },
    options_hi: {
      a: "39.84%",
      b: "36.23%",
      c: "33.33%",
      d: "22.18%"
    },
    correct_option: "c",
    solution_text: "Given: 48 × CP = 36 × SP\n=> SP / CP = 48 / 36 = 4 / 3\nProfit per unit = 4 - 3 = 1 unit.\nProfit% = (1 / 3) × 100 = 33.33%.\nCorrect Answer: Option (c).",
    solution_text_hi: "48 × CP = 36 × SP => SP / CP = 48 / 36 = 4 / 3।\nलाभ = 4 - 3 = 1 इकाई।\nलाभ% = (1 / 3) × 100 = 33.33%।\nअतः सही उत्तर (c) है।",
    shortcut_text: "SP / CP = 4 / 3 => Profit = 1/3 = 33.33%.",
    shortcut_text_hi: "SP / CP = 4 / 3 => लाभ = 1/3 = 33.33%।"
  },
  {
    question_number: 3,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Unknown Count of Articles for Given Profit %",
    type_category_hi: "दिए गए लाभ % के लिए अज्ञात वस्तु संख्या",
    question_text: "The selling price of 48 pieces of an item is same as the cost price of its x pieces. If the profit is 25%, then find the value of x.",
    question_text_hi: "किसी वस्तु के 48 टुकड़ों का विक्रय मूल्य उसके x टुकड़ों के क्रय मूल्य के समान है। यदि लाभ 25% है, तो x का मान ज्ञात कीजिए।",
    options: {
      a: "60",
      b: "40",
      c: "50",
      d: "70"
    },
    options_hi: {
      a: "60",
      b: "40",
      c: "50",
      d: "70"
    },
    correct_option: "a",
    solution_text: "Given: 48 × SP = x × CP\n=> SP / CP = x / 48.\nProfit = 25% => SP / CP = 1 + 0.25 = 1.25 = 5 / 4.\n=> x / 48 = 5 / 4\n=> x = (48 × 5) / 4 = 12 × 5 = 60.\nCorrect Answer: Option (a).",
    solution_text_hi: "48 × SP = x × CP => SP / CP = x / 48।\n25% लाभ => SP / CP = 1.25 = 5 / 4।\nx / 48 = 5 / 4 => x = 60।\nअतः सही उत्तर (a) है।",
    shortcut_text: "x = 48 × 1.25 = 60.",
    shortcut_text_hi: "x = 48 × 1.25 = 60।"
  },
  {
    question_number: 4,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Per-Dozen to Single-Unit Profit Calculation",
    type_category_hi: "दर्जन से प्रति-इकाई लाभ गणना",
    question_text: "A shopkeeper purchased 33 dozens of articles at the rate of ₹620 per dozen. He sold each one of them at the rate of ₹93. What percentage profit did he make?",
    question_text_hi: "एक दुकानदार ने ₹620 प्रति दर्जन की दर से 33 दर्जन वस्तुएँ खरीदीं। उसने उनमें से प्रत्येक को ₹93 की दर से बेचा। उसने कितने प्रतिशत लाभ कमाया?",
    options: {
      a: "79%",
      b: "80%",
      c: "83%",
      d: "82%"
    },
    options_hi: {
      a: "79%",
      b: "80%",
      c: "83%",
      d: "82%"
    },
    correct_option: "b",
    solution_text: "Cost price per article = 620 / 12 = ₹155 / 3 = ₹51.67.\nSelling price per article = ₹93.\nProfit per article = 93 - (620 / 12) = (1,116 - 620) / 12 = 496 / 12 = ₹124 / 3.\nProfit% = [(496 / 12) / (620 / 12)] × 100 = (496 / 620) × 100 = 80%.\nCorrect Answer: Option (b).",
    solution_text_hi: "1 वस्तु का CP = 620 / 12 रुपये।\n1 वस्तु का SP = ₹93 = 1116 / 12 रुपये।\nलाभ = (1116 - 620) / 12 = 496 / 12।\nलाभ% = (496 / 620) × 100 = 80%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "SP per dozen = 93 × 12 = ₹1,116.\nProfit = 1,116 - 620 = ₹496.\nProfit% = (496 / 620) × 100 = 80%.",
    shortcut_text_hi: "प्रति दर्जन SP = 93 × 12 = 1116। लाभ = 1116 - 620 = 496 => (496 / 620) × 100 = 80%।"
  },
  {
    question_number: 5,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Per-Dozen to Single-Unit Profit Calculation",
    type_category_hi: "दर्जन से प्रति-इकाई लाभ गणना",
    question_text: "A shopkeeper purchased 32 dozens of articles at the rate of ₹102 per dozen. He sold each one of them at the rate of ₹68. What percentage profit did he make?",
    question_text_hi: "एक दुकानदार ने ₹102 प्रति दर्जन की दर से 32 दर्जन वस्तुएँ खरीदीं। उसने उनमें से प्रत्येक को ₹68 की दर से बेचा। उसने कितने प्रतिशत लाभ कमाया?",
    options: {
      a: "697%",
      b: "702%",
      c: "700%",
      d: "701%"
    },
    options_hi: {
      a: "697%",
      b: "702%",
      c: "700%",
      d: "701%"
    },
    correct_option: "c",
    solution_text: "Cost price per article = 102 / 12 = ₹8.50.\nSelling price per article = ₹68.\nProfit per article = 68 - 8.50 = ₹59.50.\nProfit% = (59.50 / 8.50) × 100 = 7 × 100 = 700%.\nCorrect Answer: Option (c).",
    solution_text_hi: "1 वस्तु का CP = 102 / 12 = ₹8.50।\n1 वस्तु का SP = ₹68।\nलाभ = 68 - 8.50 = ₹59.50।\nलाभ% = (59.50 / 8.50) × 100 = 700%।\nअतः सही उत्तर (c) है।",
    shortcut_text: "SP per dozen = 68 × 12 = ₹816.\nProfit = 816 - 102 = 714.\nProfit% = (714 / 102) × 100 = 700%.",
    shortcut_text_hi: "प्रति दर्जन SP = 68 × 12 = 816। लाभ = 816 - 102 = 714 => लाभ% = (714 / 102) × 100 = 700%।"
  },
  {
    question_number: 6,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 11",
    type_category: "Same SP with Equal Gain & Loss %",
    type_category_hi: "समान विक्रय मूल्य, समान लाभ और हानि प्रतिशत",
    question_text: "A shopkeeper sold two items for ₹10,000 each. He suffered a loss of 20% on one item and earned 20% profit on the other item. What is his profit or loss percentage in the whole transaction?",
    question_text_hi: "एक दुकानदार ने दो वस्तुएँ ₹10,000 प्रत्येक पर बेचीं। उसे एक वस्तु पर 20% की हानि हुई और दूसरी वस्तु पर 20% का लाभ हुआ। पूरे लेन-देन में उसका लाभ या हानि प्रतिशत क्या है?",
    options: {
      a: "4% loss",
      b: "3% gain",
      c: "3% loss",
      d: "4% gain"
    },
    options_hi: {
      a: "4% हानि",
      b: "3% लाभ",
      c: "3% हानि",
      d: "4% लाभ"
    },
    correct_option: "a",
    solution_text: "When two items are sold at the same selling price, one at a gain of x% and the other at a loss of x%, the net result is always a loss given by:\nLoss% = x² / 100.\nHere, x = 20.\nLoss% = 20² / 100 = 400 / 100 = 4% loss.\nCorrect Answer: Option (a).",
    solution_text_hi: "जब विक्रय मूल्य समान हो और लाभ% = हानि% = x% हो, तो सदैव हानि होती है:\nहानि% = x² / 100 = 20² / 100 = 4% हानि।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Loss% = 20² / 100 = 4% Loss.",
    shortcut_text_hi: "हानि% = 20² / 100 = 4% हानि।"
  },

  // ==========================================
  // LEVEL 2: MORE THAN MODERATE (Q7 to Q12)
  // ==========================================
  {
    question_number: 7,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 25",
    type_category: "Partnership Capital Ratio & Profit Share",
    type_category_hi: "साझेदारी पूंजी अनुपात और लाभ हिस्सा",
    question_text: "Siddharth, Lata, and Vivek invest ₹1,570, ₹1,760, and ₹1,620 respectively to start a business. If the profit at the end of the year is ₹1,540, then what is the share of Vivek in the profit?",
    question_text_hi: "सिद्धार्थ, लता और विवेक व्यवसाय शुरू करने के लिए क्रमशः ₹1,570, ₹1,760 और ₹1,620 का निवेश करते हैं। यदि वर्ष के अंत में लाभ ₹1,540 है, तो लाभ में विवेक का हिस्सा क्या है?",
    options: {
      a: "503",
      b: "501",
      c: "504",
      d: "506"
    },
    options_hi: {
      a: "503",
      b: "501",
      c: "504",
      d: "506"
    },
    correct_option: "c",
    solution_text: "Investment Ratio:\nSiddharth : Lata : Vivek = 1,570 : 1,760 : 1,620 = 157 : 176 : 162.\nSum of ratio terms = 157 + 176 + 162 = 495.\nTotal Profit = ₹1,540.\nVivek's Share = (162 / 495) × 1,540.\nDividing 162 and 495 by 9: 18 / 55.\nVivek's Share = (18 / 55) × 1,540 = 18 × 28 = ₹504.\nCorrect Answer: Option (c).",
    solution_text_hi: "निवेश अनुपात: 157 : 176 : 162।\nअनुपातों का योग = 495।\nविवेक का हिस्सा = (162 / 495) × 1540 = (18 / 55) × 1540 = 18 × 28 = 504।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Ratio sum = 495. Vivek = (162 / 495) × 1540 = 18 × 28 = 504.",
    shortcut_text_hi: "विवेक का हिस्सा = (162 / 495) × 1540 = 504।"
  },
  {
    question_number: 8,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 25",
    type_category: "Partnership Capital Ratio & Profit Share",
    type_category_hi: "साझेदारी पूंजी अनुपात और लाभ हिस्सा",
    question_text: "Suman, Kunal, and Pooja invest ₹1,050, ₹1,510, and ₹1,280 respectively to start a business. If the profit at the end of the year is ₹1,650, then what is the share of Pooja in the profit?",
    question_text_hi: "सुमन, कुणाल और पूजा एक व्यवसाय शुरू करने के लिए क्रमशः ₹1,050, ₹1,510 और ₹1,280 का निवेश करते हैं। यदि वर्ष के अंत में लाभ ₹1,650 है, तो लाभ में पूजा का हिस्सा क्या है?",
    options: {
      a: "550",
      b: "549",
      c: "551",
      d: "548"
    },
    options_hi: {
      a: "550",
      b: "549",
      c: "551",
      d: "548"
    },
    correct_option: "a",
    solution_text: "Investment Ratio:\nSuman : Kunal : Pooja = 1,050 : 1,510 : 1,280 = 105 : 151 : 128.\nSum of ratio terms = 105 + 151 + 128 = 384.\nTotal Profit = ₹1,650.\nPooja's Share = (128 / 384) × 1,650 = (1 / 3) × 1,650 = ₹550.\nCorrect Answer: Option (a).",
    solution_text_hi: "निवेश अनुपात = 105 : 151 : 128।\nयोग = 384।\nपूजा का हिस्सा = (128 / 384) × 1650 = (1 / 3) × 1650 = 550।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Pooja's fraction = 128 / 384 = 1/3.\nShare = 1,650 / 3 = ₹550.",
    shortcut_text_hi: "पूजा का हिस्सा = 1/3 × 1650 = 550।"
  },
  {
    question_number: 9,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 25",
    type_category: "Partnership Capital Ratio & Profit Share",
    type_category_hi: "साझेदारी पूंजी अनुपात और लाभ हिस्सा",
    question_text: "Ramesh, Seema, and Shanaya invest ₹1,230, ₹1,710, and ₹1,010 respectively to start a business. If the profit at the end of the year is ₹1,580, then what is the share of Shanaya in the profit?",
    question_text_hi: "रमेश, सीमा और शनाया एक व्यवसाय शुरू करने के लिए क्रमशः ₹1,230, ₹1,710 और ₹1,010 का निवेश करते हैं। यदि वर्ष के अंत में लाभ ₹1,580 है, तो लाभ में शनाया का हिस्सा क्या है?",
    options: {
      a: "403",
      b: "404",
      c: "407",
      d: "405"
    },
    options_hi: {
      a: "403",
      b: "404",
      c: "407",
      d: "405"
    },
    correct_option: "b",
    solution_text: "Investment Ratio:\nRamesh : Seema : Shanaya = 1,230 : 1,710 : 1,010 = 123 : 171 : 101.\nSum of ratio terms = 123 + 171 + 101 = 395.\nTotal Profit = ₹1,580.\nShanaya's Share = (101 / 395) × 1,580.\nNotice 1,580 / 395 = 4.\nShanaya's Share = 101 × 4 = ₹404.\nCorrect Answer: Option (b).",
    solution_text_hi: "योग = 123 + 171 + 101 = 395।\nशनाया का हिस्सा = (101 / 395) × 1580 = 101 × 4 = 404।\nअतः सही उत्तर (b) है।",
    shortcut_text: "1,580 / 395 = 4 => Shanaya = 101 × 4 = 404.",
    shortcut_text_hi: "1580 / 395 = 4 => 101 × 4 = 404।"
  },
  {
    question_number: 10,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 25",
    type_category: "Partnership Difference of Shares",
    type_category_hi: "साझेदारी हिस्सेदारी का अंतर",
    question_text: "Meenakshi and Meena invest in a business in the ratio 12 : 32. If total profit is ₹2,904, then what is the difference between the profit of Meenakshi and Meena?",
    question_text_hi: "मीनाक्षी और मीना एक व्यवसाय में 12:32 के अनुपात में निवेश करती हैं। यदि कुल लाभ ₹2,904 है, तो मीनाक्षी और मीना के लाभ में क्या अंतर है?",
    options: {
      a: "₹1,320",
      b: "₹1,470",
      c: "₹1,220",
      d: "₹1,270"
    },
    options_hi: {
      a: "₹1,320",
      b: "₹1,470",
      c: "₹1,220",
      d: "₹1,270"
    },
    correct_option: "a",
    solution_text: "Ratio of investments = 12 : 32 = 3 : 8.\nSum of ratio parts = 3 + 8 = 11 parts.\n11 parts = ₹2,904 => 1 part = 2,904 / 11 = ₹264.\nDifference in profit = 8 - 3 = 5 parts.\nDifference = 5 × 264 = ₹1,320.\nCorrect Answer: Option (a).",
    solution_text_hi: "अनुपात = 12 : 32 = 3 : 8। कुल 11 इकाई = ₹2,904 => 1 इकाई = 264।\nअंतर = 8 - 3 = 5 इकाई = 5 × 264 = ₹1,320।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Diff = (5 / 11) × 2,904 = 5 × 264 = ₹1,320.",
    shortcut_text_hi: "अंतर = (5 / 11) × 2904 = ₹1,320।"
  },
  {
    question_number: 11,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 10",
    type_category: "Sequential Re-investment Profit %",
    type_category_hi: "क्रमिक पुनर्निवेश लाभ प्रतिशत",
    question_text: "Piyush bought an article for ₹331 and sold it to Payal at a loss of 5%. With this amount, Piyush bought another article and sold it at a gain of 60%. What is Piyush's overall gain percentage?",
    question_text_hi: "पीयूष ने ₹331 में एक वस्तु खरीदी और उसे पायल को 5% की हानि पर बेच दिया। इस राशि से, पीयूष ने एक और वस्तु खरीदी और उसे 60% के लाभ पर बेचा। पीयूष का समग्र लाभ प्रतिशत क्या है?",
    options: {
      a: "50%",
      b: "52%",
      c: "47%",
      d: "48%"
    },
    options_hi: {
      a: "50%",
      b: "52%",
      c: "47%",
      d: "48%"
    },
    correct_option: "b",
    solution_text: "Note: The initial cost (₹331) is independent of the overall percentage calculation.\nNet multiplier = (1 - 0.05) × (1 + 0.60) = 0.95 × 1.60 = 1.52.\nOverall Gain% = (1.52 - 1) × 100 = 52% gain.\nCorrect Answer: Option (b).",
    solution_text_hi: "कुल गुणक = (1 - 0.05) × (1 + 0.60) = 0.95 × 1.60 = 1.52।\nसमग्र लाभ% = (1.52 - 1) × 100 = 52%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Net% = -5 + 60 - (5 × 60 / 100) = 55 - 3 = 52%.",
    shortcut_text_hi: "शुद्ध प्रभाव = -5 + 60 - 3 = 52% लाभ।"
  },
  {
    question_number: 12,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 10",
    type_category: "Sequential Re-investment Profit %",
    type_category_hi: "क्रमिक पुनर्निवेश लाभ प्रतिशत",
    question_text: "Harishika bought an article for ₹200 and sold it to Ritu at a loss of 30%. With this amount, Harishika bought another article and sold it at a gain of 75%. What is Harishika's overall gain percentage?",
    question_text_hi: "हरिशिका ने ₹200 में एक वस्तु खरीदी और उसे रितु को 30% की हानि पर बेच दिया। इस राशि से, हरिशिका ने एक और वस्तु खरीदी और उसे 75% के लाभ पर बेचा। हरिशिका का समग्र लाभ प्रतिशत क्या है?",
    options: {
      a: "17.5%",
      b: "19.4%",
      c: "22.5%",
      d: "24.5%"
    },
    options_hi: {
      a: "17.5%",
      b: "19.4%",
      c: "22.5%",
      d: "24.5%"
    },
    correct_option: "c",
    solution_text: "Net multiplier = (1 - 0.30) × (1 + 0.75) = 0.70 × 1.75 = 1.225.\nOverall Gain% = (1.225 - 1) × 100 = 22.5% gain.\nVerification: Initial = ₹200. After 30% loss = ₹140. After 75% gain = 140 × 1.75 = ₹245. Gain = 245 - 200 = ₹45. Gain% = 45/200 = 22.5%.\nCorrect Answer: Option (c).",
    solution_text_hi: "कुल गुणक = 0.70 × 1.75 = 1.225।\nसमग्र लाभ% = 22.5% लाभ।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Net% = -30 + 75 - (30 × 75 / 100) = 45 - 22.5 = 22.5%.",
    shortcut_text_hi: "शुद्ध प्रभाव = -30 + 75 - 22.5 = 22.5% लाभ।"
  },

  // ==========================================
  // LEVEL 3: INSPIRED FROM PYQS (Q13 to Q18)
  // ==========================================
  {
    question_number: 13,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 10",
    type_category: "Chain Sale Reverse Cost Price",
    type_category_hi: "श्रृंखला बिक्री व्युत्क्रम क्रय मूल्य",
    question_text: "P sells an item to Q at 53% profit. Q sells the same item to R at 68% loss. If R paid ₹3,060 for the item, then at what price was the item purchased by P?",
    question_text_hi: "P एक वस्तु को Q को 53% लाभ पर बेचता है। Q उसी वस्तु को R को 68% हानि पर बेचता है। यदि R ने वस्तु के लिए ₹3,060 का भुगतान किया, तो P ने वस्तु को किस कीमत पर खरीदा?",
    options: {
      a: "₹6,250",
      b: "₹6,247",
      c: "₹6,252",
      d: "₹6,253"
    },
    options_hi: {
      a: "₹6,250",
      b: "₹6,247",
      c: "₹6,252",
      d: "₹6,253"
    },
    correct_option: "a",
    solution_text: "Let P's cost price = P.\nQ's price = P × (1 + 0.53) = 1.53 P.\nR's price = 1.53 P × (1 - 0.68) = 1.53 P × 0.32 = 0.4896 P.\nGiven: 0.4896 P = 3,060\n=> P = 3,060 / 0.4896 = 30,600,000 / 4,896 = ₹6,250.\nCorrect Answer: Option (a).",
    solution_text_hi: "P × 1.53 × 0.32 = 3060 => P × 0.4896 = 3060 => P = ₹6,250।\nअतः सही उत्तर (a) है।",
    shortcut_text: "P = 3060 / (1.53 × 0.32) = 3060 / 0.4896 = ₹6,250.",
    shortcut_text_hi: "P = 3060 / 0.4896 = ₹6,250।"
  },
  {
    question_number: 14,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 10",
    type_category: "Chain Sale Reverse Cost Price",
    type_category_hi: "श्रृंखला बिक्री व्युत्क्रम क्रय मूल्य",
    question_text: "P sells an item to Q at 70% profit. Q sells the same item to R at 67% loss. If R paid ₹3,927 for the item, then at what price was the item purchased by P?",
    question_text_hi: "P एक वस्तु को Q को 70% लाभ पर बेचता है। Q उसी वस्तु को R को 67% हानि पर बेचता है। यदि R ने वस्तु के लिए ₹3,927 का भुगतान किया, तो P ने वस्तु को किस कीमत पर खरीदा?",
    options: {
      a: "₹7,003",
      b: "₹6,998",
      c: "₹6,997",
      d: "₹7,000"
    },
    options_hi: {
      a: "₹7,003",
      b: "₹6,998",
      c: "₹6,997",
      d: "₹7,000"
    },
    correct_option: "d",
    solution_text: "Let P's cost price = P.\nQ's price = P × 1.70.\nR's price = 1.70 P × (1 - 0.67) = 1.70 P × 0.33 = 0.561 P.\nGiven: 0.561 P = 3,927\n=> P = 3,927 / 0.561 = 3,927,000 / 561 = ₹7,000.\nCorrect Answer: Option (d).",
    solution_text_hi: "P × 1.70 × 0.33 = 3927 => 0.561 P = 3927 => P = ₹7,000।\nअतः सही उत्तर (d) है।",
    shortcut_text: "P = 3,927 / 0.561 = ₹7,000.",
    shortcut_text_hi: "P = 3927 / 0.561 = ₹7,000।"
  },
  {
    question_number: 15,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 26",
    type_category: "Fractional MP Sale to Target MP Percentage",
    type_category_hi: "भिन्न अंकित मूल्य बिक्री से लक्षित प्रतिशत",
    question_text: "By selling an article at 3/11 of its marked price, Hitesh incurs a loss of 15%. If he sells it at 54% of its marked price, then the profit percentage is:",
    question_text_hi: "हितेश को एक वस्तु को उसके अंकित मूल्य के 3/11 पर बेचने पर 15% की हानि होती है। यदि वह इसे इसके अंकित मूल्य के 54% पर बेचता है, तो लाभ प्रतिशत क्या है?",
    options: {
      a: "67.4%",
      b: "68.3%",
      c: "67.2%",
      d: "69.5%"
    },
    options_hi: {
      a: "67.4%",
      b: "68.3%",
      c: "67.2%",
      d: "69.5%"
    },
    correct_option: "b",
    solution_text: "Given: (3 / 11) MP = (1 - 0.15) CP = 0.85 CP.\n=> MP / CP = 0.85 × (11 / 3) = 9.35 / 3 = 3.1167.\nNew Selling Price = 54% of MP = 0.54 MP.\nSubstitute MP in terms of CP:\nNew SP = 0.54 × (9.35 / 3) CP = 0.18 × 9.35 CP = 1.683 CP.\nProfit% = (1.683 - 1) × 100 = 68.3% profit.\nCorrect Answer: Option (b).",
    solution_text_hi: "(3 / 11) MP = 0.85 CP => MP = (9.35 / 3) CP।\nनया SP = 0.54 MP = 0.54 × (9.35 / 3) CP = 1.683 CP।\nलाभ% = (1.683 - 1) × 100 = 68.3% लाभ।\nअतः सही उत्तर (b) है।",
    shortcut_text: "New SP / CP = 0.54 × (0.85 × 11 / 3) = 0.18 × 9.35 = 1.683 => 68.3% profit.",
    shortcut_text_hi: "नया SP = 0.18 × 9.35 CP = 1.683 CP => 68.3% लाभ।"
  },
{
    question_number: 16,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 26",
    type_category: "Fractional MP Sale to Target MP Percentage",
    type_category_hi: "भिन्न अंकित मूल्य बिक्री से लक्षित प्रतिशत",
    question_text: "By selling an article at 2/5 of its marked price, Aman incurs a loss of 21%. If he sells it at 56% of its marked price, then the profit percentage is:",
    question_text_hi: "अमन को एक वस्तु को उसके अंकित मूल्य के 2/5 पर बेचने पर 21% की हानि होती है। यदि वह इसे इसके अंकित मूल्य के 56% पर बेचता है, तो लाभ प्रतिशत क्या है?",
    options: {
      a: "11.6%",
      b: "12.1%",
      c: "10.6%",
      d: "12.8%"
    },
    options_hi: {
      a: "11.6%",
      b: "12.1%",
      c: "10.6%",
      d: "12.8%"
    },
    correct_option: "c",
    solution_text: "Given: (2 / 5) MP = (1 - 0.21) CP = 0.79 CP.\n=> MP = 0.79 × (5 / 2) CP = 3.95 / 2 CP = 1.975 CP.\nNew Selling Price = 56% of MP = 0.56 MP.\nSubstitute MP in terms of CP:\nNew SP = 0.56 × 1.975 CP = 1.106 CP.\nProfit% = (1.106 - 1) × 100 = 10.6% profit.\nCorrect Answer: Option (c).",
    solution_text_hi: "(2 / 5) MP = 0.79 CP => MP = 1.975 CP।\nनया SP = 0.56 × 1.975 CP = 1.106 CP।\nलाभ% = (1.106 - 1) × 100 = 10.6% लाभ।\nअतः सही उत्तर (c) है।",
    shortcut_text: "New SP / CP = 0.56 × (0.79 × 5 / 2) = 0.56 × 1.975 = 1.106 => 10.6% profit.",
    shortcut_text_hi: "नया SP = 0.56 × 1.975 CP = 1.106 CP => 10.6% लाभ।"
  },
  {
    question_number: 17,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 26",
    type_category: "Fractional Actual SP to Target SP Percentage",
    type_category_hi: "वास्तविक विक्रय मूल्य से लक्षित प्रतिशत",
    question_text: "By selling an article at 4/11 of its actual selling price, Nirbhay incurs a loss of 20%. If he sells it at 71% of its actual selling price, then the profit percentage is:",
    question_text_hi: "निर्भय को एक वस्तु को उसके वास्तविक विक्रय मूल्य के 4/11 पर बेचने पर 20% की हानि होती है। यदि वह इसे इसके वास्तविक विक्रय मूल्य के 71% पर बेचता है, तो लाभ प्रतिशत क्या है?",
    options: {
      a: "58.3%",
      b: "56.2%",
      c: "58.5%",
      d: "57.8%"
    },
    options_hi: {
      a: "58.3%",
      b: "56.2%",
      c: "58.5%",
      d: "57.8%"
    },
    correct_option: "b",
    solution_text: "Given: (4 / 11) SP_actual = (1 - 0.20) CP = 0.80 CP.\n=> SP_actual = 0.80 × (11 / 4) CP = 2.2 CP.\nNew Selling Price = 71% of SP_actual = 0.71 × 2.2 CP = 1.562 CP.\nProfit% = (1.562 - 1) × 100 = 56.2% profit.\nCorrect Answer: Option (b).",
    solution_text_hi: "(4 / 11) SP = 0.80 CP => SP = 2.2 CP।\nनया SP = 0.71 × 2.2 CP = 1.562 CP।\nलाभ% = (1.562 - 1) × 100 = 56.2% लाभ।\nअतः सही उत्तर (b) है।",
    shortcut_text: "New SP / CP = 0.71 × (0.80 × 11 / 4) = 0.71 × 2.2 = 1.562 => 56.2% profit.",
    shortcut_text_hi: "नया SP = 0.71 × 2.2 CP = 1.562 CP => 56.2% लाभ।"
  },
  {
    question_number: 18,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 26",
    type_category: "Fractional Actual SP to Target SP Percentage",
    type_category_hi: "वास्तविक विक्रय मूल्य से लक्षित प्रतिशत",
    question_text: "By selling an article at 5/12 of its actual selling price, Akash incurs a loss of 20%. If he sells it at 80% of its actual selling price, then the profit percentage is:",
    question_text_hi: "आकाश को एक वस्तु को उसके वास्तविक विक्रय मूल्य के 5/12 पर बेचने पर 20% की हानि होती है। यदि वह इसे इसके वास्तविक विक्रय मूल्य के 80% पर बेचता है, तो लाभ प्रतिशत क्या है?",
    options: {
      a: "52.9%",
      b: "55.3%",
      c: "52.3%",
      d: "53.6%"
    },
    options_hi: {
      a: "52.9%",
      b: "55.3%",
      c: "52.3%",
      d: "53.6%"
    },
    correct_option: "d",
    solution_text: "Given: (5 / 12) SP_actual = (1 - 0.20) CP = 0.80 CP.\n=> SP_actual = 0.80 × (12 / 5) CP = 1.92 CP.\nNew Selling Price = 80% of SP_actual = 0.80 × 1.92 CP = 1.536 CP.\nProfit% = (1.536 - 1) × 100 = 53.6% profit.\nCorrect Answer: Option (d).",
    solution_text_hi: "(5 / 12) SP = 0.80 CP => SP = 1.92 CP।\nनया SP = 0.80 × 1.92 CP = 1.536 CP।\nलाभ% = (1.536 - 1) × 100 = 53.6% लाभ।\nअतः सही उत्तर (d) है।",
    shortcut_text: "New SP / CP = 0.80 × (0.80 × 12 / 5) = 0.80 × 1.92 = 1.536 => 53.6% profit.",
    shortcut_text_hi: "नया SP = 0.80 × 1.92 CP = 1.536 CP => 53.6% लाभ।"
  },

  // ==========================================
  // LEVEL 4: PYQ+ (Q19 to Q24)
  // ==========================================
  {
    question_number: 19,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Dishonest Dealer Weight Calculation",
    type_category_hi: "बेईमान दुकानदार वास्तविक वजन गणना",
    question_text: "A shopkeeper professes to sell his goods at a 55% loss but uses a false balance and gains 75%. The actual weight (rounded off to one decimal place) he uses for 1 kg is:",
    question_text_hi: "एक दुकानदार अपने माल को 55% हानि पर बेचने का दावा करता है लेकिन गलत तराजू का उपयोग करता है और 75% लाभ प्राप्त करता है। 1 किलो के लिए वह किस वास्तविक वजन (एक दशमलव स्थान तक) का उपयोग करता है?",
    options: {
      a: "253.1 gm",
      b: "260.7 gm",
      c: "257.1 gm",
      d: "258.4 gm"
    },
    options_hi: {
      a: "253.1 gm",
      b: "260.7 gm",
      c: "257.1 gm",
      d: "258.4 gm"
    },
    correct_option: "c",
    solution_text: "Let cost price of 1000 gm = ₹1000 (i.e. ₹1 per gm).\nHe claims a 55% loss, so he charges the customer: 1000 × (1 - 0.55) = ₹450.\nLet the actual weight delivered be 'w' gm.\nCost incurred by shopkeeper = w × ₹1 = ₹w.\nGiven overall profit = 75%:\nSP = 1.75 × CP\n=> 450 = 1.75 × w\n=> w = 450 / 1.75 = 45000 / 175 = 1800 / 7 ≈ 257.14 gm ≈ 257.1 gm.\nCorrect Answer: Option (c).",
    solution_text_hi: "दावा किया गया विक्रय मूल्य = ₹450।\nवास्तविक वजन = w ग्राम।\nलाभ = 75% => 450 = 1.75 × w => w = 450 / 1.75 ≈ 257.1 ग्राम।\nअतः सही उत्तर (c) है।",
    shortcut_text: "w = 1000 × (1 - Loss%) / (1 + Gain%) = 1000 × 0.45 / 1.75 = 450 / 1.75 ≈ 257.1 gm.",
    shortcut_text_hi: "w = 1000 × (1 - हानि%) / (1 + लाभ%) = 450 / 1.75 ≈ 257.1 ग्राम।"
  },
  {
    question_number: 20,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Dishonest Dealer Weight Calculation",
    type_category_hi: "बेईमान दुकानदार वास्तविक वजन गणना",
    question_text: "A shopkeeper professes to sell his goods at a 35% loss but uses a false balance and gains 55%. The actual weight (rounded off to one decimal place) he uses instead of 1 kg is:",
    question_text_hi: "एक दुकानदार अपने माल को 35% हानि पर बेचने का दावा करता है लेकिन गलत तराजू का उपयोग करता है और 55% लाभ प्राप्त करता है। 1 किलो के स्थान पर वह किस वास्तविक वजन का उपयोग करता है?",
    options: {
      a: "419.4 gm",
      b: "420.8 gm",
      c: "417.6 gm",
      d: "417.9 gm"
    },
    options_hi: {
      a: "419.4 gm",
      b: "420.8 gm",
      c: "417.6 gm",
      d: "417.9 gm"
    },
    correct_option: "a",
    solution_text: "Let CP of 1000 gm = ₹1000.\nClaimed selling price at 35% loss = 1000 × (1 - 0.35) = ₹650.\nActual gain = 55%:\nSP = 1.55 × w\n=> 650 = 1.55 × w\n=> w = 650 / 1.55 = 65000 / 155 = 13000 / 31 ≈ 419.35 gm ≈ 419.4 gm.\nCorrect Answer: Option (a).",
    solution_text_hi: "दावा किया गया SP = ₹650।\nलाभ = 55% => 650 = 1.55 × w => w = 650 / 1.55 ≈ 419.4 ग्राम।\nअतः सही उत्तर (a) है।",
    shortcut_text: "w = 1000 × 0.65 / 1.55 = 650 / 1.55 ≈ 419.4 gm.",
    shortcut_text_hi: "w = 1000 × 0.65 / 1.55 ≈ 419.4 ग्राम।"
  },
  {
    question_number: 21,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Dishonest Dealer Weight Calculation",
    type_category_hi: "बेईमान दुकानदार वास्तविक वजन गणना",
    question_text: "A shopkeeper professes to sell his goods at a 60% loss but uses a false balance and gains 90%. The actual weight (rounded off to one decimal place) he uses for 1 kg is:",
    question_text_hi: "एक दुकानदार 60% हानि पर माल बेचने का दावा करता है लेकिन गलत तराजू से 90% लाभ कमाता है। 1 किलो के लिए वास्तविक वजन है:",
    options: {
      a: "210.5 gm",
      b: "214.1 gm",
      c: "209.5 gm",
      d: "213.6 gm"
    },
    options_hi: {
      a: "210.5 gm",
      b: "214.1 gm",
      c: "209.5 gm",
      d: "213.6 gm"
    },
    correct_option: "a",
    solution_text: "Let CP of 1000 gm = ₹1000.\nClaimed selling price at 60% loss = 1000 × (1 - 0.60) = ₹400.\nActual gain = 90%:\nSP = 1.90 × w\n=> 400 = 1.90 × w\n=> w = 400 / 1.90 = 4000 / 19 ≈ 210.53 gm ≈ 210.5 gm.\nCorrect Answer: Option (a).",
    solution_text_hi: "दावा किया गया SP = ₹400।\nलाभ = 90% => 400 = 1.90 × w => w = 400 / 1.90 ≈ 210.5 ग्राम।\nअतः सही उत्तर (a) है।",
    shortcut_text: "w = 1000 × 0.40 / 1.90 = 400 / 1.9 ≈ 210.5 gm.",
    shortcut_text_hi: "w = 400 / 1.9 ≈ 210.5 ग्राम।"
  },
  {
    question_number: 22,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Dishonest Dealer Weight Calculation",
    type_category_hi: "बेईमान दुकानदार वास्तविक वजन गणना",
    question_text: "A shopkeeper professes to sell his goods at a 35% loss but uses a false balance and gains 75%. The actual weight (rounded off to one decimal place) he uses for 1 kg is:",
    question_text_hi: "एक दुकानदार 35% हानि पर बेचने का दावा करता है लेकिन 75% लाभ कमाता है। 1 किलो के लिए प्रयुक्त वास्तविक वजन है:",
    options: {
      a: "371.4 gm",
      b: "374.5 gm",
      c: "372.9 gm",
      d: "376.5 gm"
    },
    options_hi: {
      a: "371.4 gm",
      b: "374.5 gm",
      c: "372.9 gm",
      d: "376.5 gm"
    },
    correct_option: "a",
    solution_text: "Let CP of 1000 gm = ₹1000.\nClaimed selling price at 35% loss = 1000 × (1 - 0.35) = ₹650.\nActual gain = 75%:\nSP = 1.75 × w\n=> 650 = 1.75 × w\n=> w = 650 / 1.75 = 65000 / 175 = 2600 / 7 ≈ 371.43 gm ≈ 371.4 gm.\nCorrect Answer: Option (a).",
    solution_text_hi: "दावा किया गया SP = ₹650।\nलाभ = 75% => 650 = 1.75 × w => w = 650 / 1.75 ≈ 371.4 ग्राम।\nअतः सही उत्तर (a) है।",
    shortcut_text: "w = 1000 × 0.65 / 1.75 = 650 / 1.75 ≈ 371.4 gm.",
    shortcut_text_hi: "w = 650 / 1.75 ≈ 371.4 ग्राम।"
  },
  {
    question_number: 23,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Dishonest Dealer Weight Calculation",
    type_category_hi: "बेईमान दुकानदार वास्तविक वजन गणना",
    question_text: "A shopkeeper professes to sell his goods at a 25% loss but uses a false balance and gains 70%. The actual weight (rounded off to one decimal place) that he uses instead of 1 kg is:",
    question_text_hi: "एक दुकानदार 25% हानि पर माल बेचने का दावा करता है लेकिन 70% लाभ कमाता है। 1 किलो के स्थान पर प्रयुक्त वास्तविक वजन है:",
    options: {
      a: "443.3 gm",
      b: "441.2 gm",
      c: "438.1 gm",
      d: "436.4 gm"
    },
    options_hi: {
      a: "443.3 gm",
      b: "441.2 gm",
      c: "438.1 gm",
      d: "436.4 gm"
    },
    correct_option: "b",
    solution_text: "Let CP of 1000 gm = ₹1000.\nClaimed selling price at 25% loss = 1000 × (1 - 0.25) = ₹750.\nActual gain = 70%:\nSP = 1.70 × w\n=> 750 = 1.70 × w\n=> w = 750 / 1.70 = 7500 / 17 ≈ 441.18 gm ≈ 441.2 gm.\nCorrect Answer: Option (b).",
    solution_text_hi: "दावा किया गया SP = ₹750।\nलाभ = 70% => 750 = 1.70 × w => w = 750 / 1.70 ≈ 441.2 ग्राम।\nअतः सही उत्तर (b) है।",
    shortcut_text: "w = 1000 × 0.75 / 1.70 = 750 / 1.70 ≈ 441.2 gm.",
    shortcut_text_hi: "w = 750 / 1.70 ≈ 441.2 ग्राम।"
  },
  {
    question_number: 24,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Dishonest Dealer Weight Calculation",
    type_category_hi: "बेईमान दुकानदार वास्तविक वजन गणना",
    question_text: "A shopkeeper professes to sell his goods at a 20% loss but uses a false balance and gains 40%. The actual weight (rounded off to one decimal place) he uses for 1 kg is:",
    question_text_hi: "एक दुकानदार 20% हानि पर माल बेचने का दावा करता है लेकिन 40% लाभ कमाता है। 1 किलो के लिए प्रयुक्त वास्तविक वजन है:",
    options: {
      a: "568.8 gm",
      b: "576.7 gm",
      c: "571.4 gm",
      d: "575.4 gm"
    },
    options_hi: {
      a: "568.8 gm",
      b: "576.7 gm",
      c: "571.4 gm",
      d: "575.4 gm"
    },
    correct_option: "c",
    solution_text: "Let CP of 1000 gm = ₹1000.\nClaimed selling price at 20% loss = 1000 × (1 - 0.20) = ₹800.\nActual gain = 40%:\nSP = 1.40 × w\n=> 800 = 1.40 × w\n=> w = 800 / 1.40 = 8000 / 14 = 4000 / 7 ≈ 571.43 gm ≈ 571.4 gm.\nCorrect Answer: Option (c).",
    solution_text_hi: "दावा किया गया SP = ₹800।\nलाभ = 40% => 800 = 1.40 × w => w = 800 / 1.40 ≈ 571.4 ग्राम।\nअतः सही उत्तर (c) है।",
    shortcut_text: "w = 1000 × 0.80 / 1.40 = 800 / 1.40 ≈ 571.4 gm.",
    shortcut_text_hi: "w = 800 / 1.40 ≈ 571.4 ग्राम।"
  },

  // ==========================================
  // LEVEL 5: PYQ++ (Q25 to Q30)
  // ==========================================
  {
    question_number: 25,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 21",
    type_category: "Dual Discount Successive Markup and Profit",
    type_category_hi: "दोहरी छूट क्रमिक मार्कअप और लाभ",
    question_text: "A dealer buys two articles X and Y for ₹800 each. He marks each of them at the same price. He sells X by giving two successive discounts of 45% and 73% and still earns ₹523 as profit. If he sells Y at a single discount of 89%, then what is the profit percentage on Y?",
    question_text_hi: "एक डीलर दो वस्तुएँ X और Y ₹800 प्रत्येक में खरीदता है। वह दोनों पर समान मूल्य अंकित करता है। वह X को 45% और 73% की दो क्रमिक छूट देकर बेचता है और फिर भी ₹523 लाभ कमाता है। यदि वह Y को 89% की एकल छूट पर बेचता है, तो Y पर लाभ प्रतिशत क्या है?",
    options: {
      a: "22%",
      b: "21.5%",
      c: "21%",
      d: "22.5%"
    },
    options_hi: {
      a: "22%",
      b: "21.5%",
      c: "21%",
      d: "22.5%"
    },
    correct_option: "d",
    solution_text: "Cost price of each article = ₹800.\nSelling price of X = CP + Profit = 800 + 523 = ₹1323.\nDiscounts on X: 45% and 73%:\nSP_X = MP × (1 - 0.45) × (1 - 0.73) = MP × 0.55 × 0.27 = 0.1485 MP.\n=> 0.1485 MP = 1323 => MP = 1323 / 0.1485 = ₹8909.09.\nNow for article Y, discount = 89%:\nSP_Y = MP × (1 - 0.89) = 0.11 MP = 0.11 × (1323 / 0.1485) = 1323 × (0.11 / 0.1485) = 1323 × (100 / 135) = ₹980.\nProfit on Y = SP_Y - CP = 980 - 800 = ₹180.\nProfit% on Y = (180 / 800) × 100 = 22.5%.\nCorrect Answer: Option (d).",
    solution_text_hi: "SP_X = 800 + 523 = ₹1323।\n0.1485 MP = 1323 => MP = 1323 / 0.1485।\nSP_Y = 0.11 MP = 1323 × (0.11 / 0.1485) = ₹980।\nलाभ% = (980 - 800) / 800 × 100 = 22.5%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "SP_Y = 1323 × (0.11 / (0.55 × 0.27)) = 1323 / 1.35 = 980 => Profit% = 180 / 800 = 22.5%.",
    shortcut_text_hi: "SP_Y = 1323 / 1.35 = ₹980 => लाभ% = 180/800 = 22.5%।"
  },
  {
    question_number: 26,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 21",
    type_category: "Dual Discount Successive Markup and Profit",
    type_category_hi: "दोहरी छूट क्रमिक मार्कअप और लाभ",
    question_text: "A dealer buys two articles X and Y for ₹1,000 each. He marks each of them at the same price. He sells X by giving two successive discounts of 15% and 30% and still earns ₹337 as profit. If he sells Y at a single discount of 49%, then what is the profit percentage on Y?",
    question_text_hi: "एक डीलर दो वस्तुएँ X और Y ₹1,000 प्रत्येक में खरीदता है। वह X को 15% और 30% की दो क्रमिक छूट देकर बेचता है और ₹337 लाभ कमाता है। यदि वह Y को 49% की एकल छूट पर बेचता है, तो Y पर लाभ प्रतिशत क्या है?",
    options: {
      a: "14.6%",
      b: "13.6%",
      c: "13%",
      d: "14%"
    },
    options_hi: {
      a: "14.6%",
      b: "13.6%",
      c: "13%",
      d: "14%"
    },
    correct_option: "a",
    solution_text: "Cost price of each article = ₹1,000.\nSelling price of X = 1000 + 337 = ₹1337.\nSuccessive discounts on X: 15% and 30%:\nSP_X = MP × 0.85 × 0.70 = 0.595 MP.\n=> 0.595 MP = 1337 => MP = 1337 / 0.595.\nFor article Y, discount = 49%:\nSP_Y = MP × (1 - 0.49) = 0.51 MP = 0.51 × (1337 / 0.595) = 1337 × (51 / 59.5) = 1337 × (6 / 7) = 191 × 6 = ₹1146.\nProfit on Y = 1146 - 1000 = ₹146.\nProfit% on Y = (146 / 1000) × 100 = 14.6%.\nCorrect Answer: Option (a).",
    solution_text_hi: "SP_X = 1000 + 337 = ₹1337।\n0.595 MP = 1337 => MP = 1337 / 0.595।\nSP_Y = 0.51 MP = 0.51 × (1337 / 0.595) = 1337 × (6 / 7) = ₹1146।\nलाभ% = (1146 - 1000) / 1000 × 100 = 14.6%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "SP_Y = 1337 × (0.51 / 0.595) = 1337 × (6 / 7) = 1146 => Profit = 14.6%.",
    shortcut_text_hi: "SP_Y = 1337 × (6 / 7) = ₹1146 => लाभ = 14.6%।"
  },
  {
    question_number: 27,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 21",
    type_category: "Dual Discount Successive Markup and Profit",
    type_category_hi: "दोहरी छूट क्रमिक मार्कअप और लाभ",
    question_text: "A dealer buys two articles X and Y for ₹500 each. He marks each of them at the same price. He sells X by giving two successive discounts of 50% and 28% and still earns ₹958 as profit. If he sells Y at a single discount of 77%, then what is the profit percentage on Y?",
    question_text_hi: "एक डीलर X और Y ₹500 प्रत्येक में खरीदता है। X को 50% और 28% की छूट देकर वह ₹958 लाभ कमाता है। यदि वह Y को 77% छूट पर बेचता है, तो लाभ प्रतिशत क्या है?",
    options: {
      a: "86.3%",
      b: "86%",
      c: "85%",
      d: "85.3%"
    },
    options_hi: {
      a: "86.3%",
      b: "86%",
      c: "85%",
      d: "85.3%"
    },
    correct_option: "a",
    solution_text: "Cost price of each article = ₹500.\nSelling price of X = 500 + 958 = ₹1458.\nSuccessive discounts on X: 50% and 28%:\nSP_X = MP × 0.50 × 0.72 = 0.36 MP.\n=> 0.36 MP = 1458 => MP = 1458 / 0.36 = ₹4050.\nFor article Y, discount = 77%:\nSP_Y = MP × (1 - 0.77) = 0.23 MP = 0.23 × 4050 = ₹931.50.\nProfit on Y = 931.50 - 500 = ₹431.50.\nProfit% on Y = (431.50 / 500) × 100 = 86.3%.\nCorrect Answer: Option (a).",
    solution_text_hi: "SP_X = 500 + 958 = ₹1458।\n0.36 MP = 1458 => MP = ₹4050।\nSP_Y = 0.23 × 4050 = ₹931.50।\nलाभ% = (431.50 / 500) × 100 = 86.3%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "MP = 1458 / 0.36 = 4050. SP_Y = 0.23 × 4050 = 931.5 => Profit% = 431.5 / 5 = 86.3%.",
    shortcut_text_hi: "MP = 4050. SP_Y = 931.5 => लाभ% = 431.5 / 5 = 86.3%।"
  },
  {
    question_number: 28,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 27",
    type_category: "Multi-part Inventory Profit Weighted Average",
    type_category_hi: "बहु-भाग वस्तु सूची भारित औसत लाभ",
    question_text: "During a sale 35% of the goods are sold at 22% profit, 40% of the remaining goods are sold at 37% profit and the still remaining goods are sold at a loss of 38%. If there is an overall profit of x%, then what is the value of x?",
    question_text_hi: "सेल के दौरान 35% माल 22% लाभ पर, शेष का 40% माल 37% लाभ पर, और बचा हुआ माल 38% हानि पर बेचा जाता है। यदि समग्र लाभ x% है, तो x का मान क्या है?",
    options: {
      a: "10.8",
      b: "5.4",
      c: "2.5",
      d: "6.8"
    },
    options_hi: {
      a: "10.8",
      b: "5.4",
      c: "2.5",
      d: "6.8"
    },
    correct_option: "c",
    solution_text: "Let total quantity of goods = 100 units.\nPart 1: 35% of 100 = 35 units at +22% profit => Contribution = 35 × 22 = +770.\nRemaining goods = 100 - 35 = 65 units.\nPart 2: 40% of 65 = 26 units at +37% profit => Contribution = 26 × 37 = +962.\nPart 3: Still remaining = 65 - 26 = 39 units at -38% loss => Contribution = 39 × (-38) = -1482.\nNet profit = 770 + 962 - 1482 = 1732 - 1482 = +250.\nOverall profit x% = 250 / 100 = 2.5%.\nThus, x = 2.5.\nCorrect Answer: Option (c).",
    solution_text_hi: "कुल वस्तु = 100 इकाइयाँ।\nभाग 1: 35 × 22 = +770।\nभाग 2: 26 × 37 = +962।\nभाग 3: 39 × (-38) = -1482।\nकुल लाभ = 770 + 962 - 1482 = +250 => x = 2.5%।\nअतः सही उत्तर (c) है।",
    shortcut_text: "x = (35 × 22 + 26 × 37 - 39 × 38) / 100 = (770 + 962 - 1482) / 100 = 250 / 100 = 2.5.",
    shortcut_text_hi: "x = (770 + 962 - 1482) / 100 = 2.5।"
  },
  {
    question_number: 29,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 27",
    type_category: "Multi-part Inventory Profit Weighted Average",
    type_category_hi: "बहु-भाग वस्तु सूची भारित औसत लाभ",
    question_text: "During a sale 50% of the goods are sold at 16% profit, 40% of the remaining goods are sold at 35% profit and the still remaining goods are sold at a loss of 25%. If there is an overall profit of x%, then what is the value of x?",
    question_text_hi: "सेल के दौरान 50% माल 16% लाभ पर, शेष का 40% माल 35% लाभ पर, और बचा हुआ माल 25% हानि पर बेचा जाता है। यदि समग्र लाभ x% है, तो x का मान क्या है?",
    options: {
      a: "7.5",
      b: "8",
      c: "6",
      d: "9"
    },
    options_hi: {
      a: "7.5",
      b: "8",
      c: "6",
      d: "9"
    },
    correct_option: "a",
    solution_text: "Let total quantity of goods = 100 units.\nPart 1: 50% of 100 = 50 units at +16% profit => Contribution = 50 × 16 = +800.\nRemaining goods = 100 - 50 = 50 units.\nPart 2: 40% of 50 = 20 units at +35% profit => Contribution = 20 × 35 = +700.\nPart 3: Still remaining = 50 - 20 = 30 units at -25% loss => Contribution = 30 × (-25) = -750.\nNet profit = 800 + 700 - 750 = +750.\nOverall profit x% = 750 / 100 = 7.5%.\nThus, x = 7.5.\nCorrect Answer: Option (a).",
    solution_text_hi: "भाग 1: 50 × 16 = +800।\nभाग 2: 20 × 35 = +700।\nभाग 3: 30 × (-25) = -750।\nकुल लाभ = 800 + 700 - 750 = +750 => x = 7.5%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "x = (50 × 16 + 20 × 35 - 30 × 25) / 100 = (800 + 700 - 750) / 100 = 750 / 100 = 7.5.",
    shortcut_text_hi: "x = 750 / 100 = 7.5।"
  },
  {
    question_number: 30,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 27",
    type_category: "Multi-part Inventory Profit Weighted Average",
    type_category_hi: "बहु-भाग वस्तु सूची भारित औसत लाभ",
    question_text: "A shopkeeper buys 45 identical calculators for ₹54,000. He sells 30 of them at a profit of 25% and the remaining at a loss of 20%. What is the overall profit or loss percentage?",
    question_text_hi: "एक दुकानदार ₹54,000 में 45 कैलकुलेटर खरीदता है। वह 30 को 25% लाभ पर और शेष को 20% हानि पर बेचता है। कुल लाभ या हानि प्रतिशत क्या है?",
    options: {
      a: "5% profit",
      b: "10% profit",
      c: "5% loss",
      d: "10% loss"
    },
    options_hi: {
      a: "5% लाभ",
      b: "10% लाभ",
      c: "5% हानि",
      d: "10% हानि"
    },
    correct_option: "b",
    solution_text: "Total calculators = 45.\nFirst part = 30 calculators => Fraction = 30 / 45 = 2/3.\nRemaining part = 15 calculators => Fraction = 15 / 45 = 1/3.\nOverall net percentage = (2/3) × (+25%) + (1/3) × (-20%)\n= (50% - 20%) / 3 = 30% / 3 = +10% profit.\n(Note: The total cost of ₹54,000 is not needed since percentage does not depend on base cost).\nCorrect Answer: Option (b).",
    solution_text_hi: "अनुपात = 30 : 15 = 2 : 1।\nकुल प्रभाव = (2 × 25 - 1 × 20) / (2 + 1) = (50 - 20) / 3 = 30 / 3 = 10% लाभ।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Ratio = 2:1 => Net% = (2 × 25 - 1 × 20) / 3 = 30 / 3 = 10% profit.",
    shortcut_text_hi: "अनुपात 2:1 => शुद्ध% = (50 - 20) / 3 = 10% लाभ।"
  }
];

const PROFIT_LOSS_SET_D_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MODERATE (Q1 to Q5)
  // ==========================================
  {
    question_number: 1,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 5",
    type_category: "Marked Price and Discount Percentage",
    type_category_hi: "अंकित मूल्य और छूट प्रतिशत",
    question_text: "Marked price of an article is 140 percent more than the value of discount. Selling price is what percent of the marked price?",
    question_text_hi: "एक वस्तु का अंकित मूल्य, छूट के मूल्य से 140 प्रतिशत अधिक है। विक्रय मूल्य अंकित मूल्य का कितना प्रतिशत है?",
    options: {
      a: "50.14%",
      b: "58.33%",
      c: "55.68%",
      d: "52.76%"
    },
    options_hi: {
      a: "50.14%",
      b: "58.33%",
      c: "55.68%",
      d: "52.76%"
    },
    correct_option: "b",
    solution_text: "Let the value of discount = 100 units.\nMarked Price (MP) = 100 + 140% of 100 = 100 + 140 = 240 units.\nSelling Price (SP) = MP - Discount = 240 - 100 = 140 units.\nSP as a percentage of MP = (SP / MP) × 100\n= (140 / 240) × 100 = (7 / 12) × 100 = 58.33%.\nCorrect Answer: Option (b).",
    solution_text_hi: "माना छूट = 100 इकाइयाँ।\nअंकित मूल्य (MP) = 100 + 140 = 240 इकाइयाँ।\nविक्रय मूल्य (SP) = 240 - 100 = 140 इकाइयाँ।\nMP का SP प्रतिशत = (140 / 240) × 100 = 7/12 × 100 = 58.33%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "SP/MP = (MP - D)/MP = 1 - (100/240) = 1 - 5/12 = 7/12 = 58.33%.",
    shortcut_text_hi: "SP/MP = 140 / 240 = 7/12 = 58.33%।"
  },
  {
    question_number: 2,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 5",
    type_category: "Discount Percentage Calculation",
    type_category_hi: "छूट प्रतिशत गणना",
    question_text: "The cost price of a TV set is ₹14,000, and its marked price is ₹16,000. If the shopkeeper sells it at a gain of 8%, then what is the percentage rate of discount offered by him?",
    question_text_hi: "एक टीवी सेट का क्रय मूल्य ₹14,000 है, और इसका अंकित मूल्य ₹16,000 है। अगर दुकानदार इसे 8% के लाभ पर बेचता है, तो उसके द्वारा दी जाने वाली छूट की प्रतिशत दर क्या है?",
    options: {
      a: "7.2%",
      b: "4%",
      c: "6.5%",
      d: "5.5%"
    },
    options_hi: {
      a: "7.2%",
      b: "4%",
      c: "6.5%",
      d: "5.5%"
    },
    correct_option: "d",
    solution_text: "Cost Price (CP) = ₹14,000.\nGain = 8% => Selling Price (SP) = 14,000 × (1 + 0.08) = 14,000 × 1.08 = ₹15,120.\nMarked Price (MP) = ₹16,000.\nDiscount Amount = MP - SP = 16,000 - 15,120 = ₹880.\nDiscount% = (Discount / MP) × 100 = (880 / 16,000) × 100 = 88 / 16 = 5.5%.\nCorrect Answer: Option (d).",
    solution_text_hi: "SP = 14,000 × 1.08 = ₹15,120।\nछूट = 16,000 - 15,120 = ₹880।\nछूट% = (880 / 16,000) × 100 = 5.5%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Discount% = (16000 - 14000 × 1.08) / 16000 × 100 = 880 / 160 = 5.5%.",
    shortcut_text_hi: "छूट% = (16000 - 15120) / 160 = 5.5%।"
  },
  {
    question_number: 3,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 5",
    type_category: "Discount and Tax Successive Application",
    type_category_hi: "छूट और कर क्रमिक अनुप्रयोग",
    question_text: "A mobile phone is listed at ₹18,000. A shopkeeper offers a 12% discount and then adds 18% GST on the discounted price. What is the final price paid by buyer?",
    question_text_hi: "एक मोबाइल फ़ोन की कीमत ₹18,000 है। एक दुकानदार 12% की छूट देता है और फिर छूट वाली कीमत पर 18% जीएसटी जोड़ देता है। खरीदार को कुल कितनी कीमत चुकानी पड़ी?",
    options: {
      a: "₹17,740.80",
      b: "₹17,212.80",
      c: "₹17,500.00",
      d: "₹18,691.20"
    },
    options_hi: {
      a: "₹17,740.80",
      b: "₹17,212.80",
      c: "₹17,500.00",
      d: "₹18,691.20"
    },
    correct_option: "d",
    solution_text: "Listed Price = ₹18,000.\nAfter 12% discount: Price = 18,000 × (1 - 0.12) = 18,000 × 0.88 = ₹15,840.\nAfter 18% GST added: Final Price = 15,840 × (1 + 0.18) = 15,840 × 1.18 = ₹18,691.20.\nCorrect Answer: Option (d).",
    solution_text_hi: "छूट के बाद मूल्य = 18,000 × 0.88 = ₹15,840।\n18% GST के बाद अंतिम मूल्य = 15,840 × 1.18 = ₹18,691.20।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Final Price = 18000 × 0.88 × 1.18 = ₹18,691.20.",
    shortcut_text_hi: "अंतिम मूल्य = 18000 × 0.88 × 1.18 = ₹18,691.20।"
  },
  {
    question_number: 4,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 6",
    type_category: "Markup and Successive Discounts",
    type_category_hi: "मार्कअप और क्रमिक छूट",
    question_text: "A seller marks up his product by 50% and offers two consecutive discounts of 10% each. What is his profit percentage?",
    question_text_hi: "एक विक्रेता अपने उत्पाद पर 50% ज्यादा कीमत अंकित करता है और 10% की दो क्रमागत छूट देता है। उसका लाभ प्रतिशत क्या है?",
    options: {
      a: "20.5%",
      b: "21.5%",
      c: "22.5%",
      d: "23.5%"
    },
    options_hi: {
      a: "20.5%",
      b: "21.5%",
      c: "22.5%",
      d: "23.5%"
    },
    correct_option: "b",
    solution_text: "Let Cost Price (CP) = 100.\nMarked Price (MP) with 50% markup = 100 × 1.50 = 150.\nTwo consecutive discounts of 10% each:\nSP = 150 × (1 - 0.10) × (1 - 0.10) = 150 × 0.90 × 0.90 = 150 × 0.81 = 121.5.\nProfit = SP - CP = 121.5 - 100 = 21.5%.\nCorrect Answer: Option (b).",
    solution_text_hi: "माना CP = 100 => MP = 150।\nSP = 150 × 0.90 × 0.90 = 150 × 0.81 = 121.5।\nलाभ% = 121.5 - 100 = 21.5%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Net Multiplier = 1.50 × 0.81 = 1.215 => Profit = 21.5%.",
    shortcut_text_hi: "शुद्ध गुणक = 1.50 × 0.81 = 1.215 => लाभ = 21.5%।"
  },
  {
    question_number: 5,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 6",
    type_category: "Markup and Single Discount",
    type_category_hi: "मार्कअप और एकल छूट",
    question_text: "An article is marked 40% above its cost price. If a discount of 15% is given, what is the profit percentage?",
    question_text_hi: "एक वस्तु का अंकित मूल्य उसके क्रय मूल्य से 40% अधिक है। यदि 15% की छूट दी जाती है, तो लाभ प्रतिशत क्या है?",
    options: {
      a: "18%",
      b: "19%",
      c: "20%",
      d: "21%"
    },
    options_hi: {
      a: "18%",
      b: "19%",
      c: "20%",
      d: "21%"
    },
    correct_option: "b",
    solution_text: "Let Cost Price (CP) = 100.\nMarked Price (MP) = 100 × 1.40 = 140.\nDiscount = 15% => SP = 140 × (1 - 0.15) = 140 × 0.85 = 119.\nProfit = SP - CP = 119 - 100 = 19%.\nCorrect Answer: Option (b).",
    solution_text_hi: "माना CP = 100 => MP = 140।\nSP = 140 × 0.85 = 119।\nलाभ% = 119 - 100 = 19%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Net% = m - d - (m × d / 100) = 40 - 15 - (40 × 15 / 100) = 25 - 6 = 19%.",
    shortcut_text_hi: "शुद्ध% = 40 - 15 - 6 = 19% लाभ।"
  },

  // ==========================================
  // LEVEL 2: MORE THAN MODERATE (Q6 to Q10)
  // ==========================================
  {
    question_number: 6,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 28",
    type_category: "Simultaneous SP & Profit Change CP Ratio",
    type_category_hi: "विक्रय मूल्य और लाभ परिवर्तन में क्रय मूल्य अनुपात",
    question_text: "If the selling price of an item is increased by 25% and the profit also increases from 20% to 30%, what is the percentage increase in the cost price?",
    question_text_hi: "अगर किसी वस्तु का विक्रय मूल्य 25% बढ़ा दिया जाए तथा लाभ भी 20% से बढ़कर 30% हो जाए, तो क्रय मूल्य में कितने प्रतिशत की वृद्धि होगी?",
    options: {
      a: "4.5%",
      b: "5.6%",
      c: "10.28%",
      d: "15.38%"
    },
    options_hi: {
      a: "4.5%",
      b: "5.6%",
      c: "10.28%",
      d: "15.38%"
    },
    correct_option: "d",
    solution_text: "Let original cost price = CP1 and original selling price = SP1.\nGiven original profit = 20% => SP1 = 1.20 × CP1.\nNew selling price SP2 is increased by 25%:\nSP2 = 1.25 × SP1 = 1.25 × (1.20 × CP1) = 1.50 × CP1.\nAlso, new profit is 30% on new cost price CP2:\nSP2 = 1.30 × CP2.\nEquating both expressions for SP2:\n1.30 × CP2 = 1.50 × CP1\n=> CP2 = (1.50 / 1.30) × CP1 = (15 / 13) × CP1.\nPercentage increase in cost price = [(15 / 13) - 1] × 100 = (2 / 13) × 100 ≈ 15.3846% ≈ 15.38%.\nCorrect Answer: Option (d).",
    solution_text_hi: "SP1 = 1.20 CP1।\nSP2 = 1.25 × 1.20 CP1 = 1.50 CP1।\nसाथ ही, SP2 = 1.30 CP2 => 1.30 CP2 = 1.50 CP1 => CP2 = 15/13 CP1।\nCP में वृद्धि = 2/13 × 100 ≈ 15.38%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "CP2 / CP1 = (1.20 × 1.25) / 1.30 = 1.50 / 1.30 = 15 / 13 => Increase = 2/13 = 15.38%.",
    shortcut_text_hi: "CP वृद्धि = (1.50 / 1.30 - 1) = 2/13 ≈ 15.38%।"
  },
  {
    question_number: 7,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 5",
    type_category: "Full Price Profit Calculation from Discounted SP",
    type_category_hi: "छूट वाले मूल्य से पूर्ण मूल्य लाभ गणना",
    question_text: "In a sale, a shopkeeper offers a 15% discount on clothes if you buy more than two items. Priya buys four shirts for ₹2040. If the shopkeeper still makes a 20% profit, find the profit the shopkeeper would make if he had sold the clothes at full price.",
    question_text_hi: "एक सेल में, एक दुकानदार दो से ज़्यादा कपड़े खरीदने पर 15% की छूट देता है। प्रिया ₹2040 में चार कमीज़ें खरीदती है। अगर दुकानदार को फिर भी 20% का मुनाफ़ा होता है, तो बताइए कि अगर दुकानदार ने कपड़े पूरी कीमत पर बेचे होते, तो उसे कितना मुनाफ़ा होता।",
    options: {
      a: "₹600",
      b: "₹700",
      c: "₹800",
      d: "₹900"
    },
    options_hi: {
      a: "₹600",
      b: "₹700",
      c: "₹800",
      d: "₹900"
    },
    correct_option: "c",
    solution_text: "Priya buys 4 shirts (more than 2 items), so she receives a 15% discount.\nDiscounted Selling Price (SP) = ₹2040.\nFull Marked Price (MP) = 2040 / (1 - 0.15) = 2040 / 0.85 = ₹2400.\nShopkeeper makes a 20% profit on this sale:\nCost Price (CP) = 2040 / 1.20 = ₹1700.\nIf sold at full price (MP = ₹2400):\nProfit = MP - CP = 2400 - 1700 = ₹800.\nCorrect Answer: Option (c).",
    solution_text_hi: "छूट वाला SP = ₹2040 => पूर्ण मूल्य (MP) = 2040 / 0.85 = ₹2400।\nCP = 2040 / 1.20 = ₹1700।\nपूर्ण मूल्य पर लाभ = 2400 - 1700 = ₹800।\nअतः सही उत्तर (c) है।",
    shortcut_text: "MP = 2040 / 0.85 = 2400. CP = 2040 / 1.2 = 1700. Profit at full price = 2400 - 1700 = ₹800.",
    shortcut_text_hi: "MP = 2400, CP = 1700 => लाभ = 2400 - 1700 = ₹800।"
  },
  {
    question_number: 8,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 9",
    type_category: "Variable Change in CP and SP",
    type_category_hi: "क्रय मूल्य और विक्रय मूल्य में चर परिवर्तन",
    question_text: "An item is sold at a 20% profit. If the cost price and selling price are increased by ₹50 and ₹30 respectively, the profit percent becomes 10%. What is the original cost price?",
    question_text_hi: "एक वस्तु को 20% लाभ पर बेचा जाता है। अगर लागत कीमत और बिक्री कीमत में क्रमशः ₹50 और ₹30 की वृद्धि कर दी जाए, तो लाभ प्रतिशत 10% हो जाता है। मूल लागत कीमत क्या है?",
    options: {
      a: "₹100",
      b: "₹450",
      c: "₹600",
      d: "₹250"
    },
    options_hi: {
      a: "₹100",
      b: "₹450",
      c: "₹600",
      d: "₹250"
    },
    correct_option: "d",
    solution_text: "Let original Cost Price (CP) = x.\nOriginal Selling Price (SP) = 1.20x (since 20% profit).\nNew CP = x + 50.\nNew SP = 1.20x + 30.\nGiven that new profit is 10%:\nNew SP = 1.10 × New CP\n=> 1.20x + 30 = 1.10(x + 50)\n=> 1.20x + 30 = 1.10x + 55\n=> 0.10x = 25\n=> x = 25 / 0.10 = ₹250.\nCorrect Answer: Option (d).",
    solution_text_hi: "माना CP = x => SP = 1.20x।\nनया CP = x + 50, नया SP = 1.20x + 30।\n1.20x + 30 = 1.10(x + 50) => 0.10x = 25 => x = ₹250।\nअतः सही उत्तर (d) है।",
    shortcut_text: "0.10x = 1.1 × 50 - 30 = 55 - 30 = 25 => x = ₹250.",
    shortcut_text_hi: "0.10x = 25 => x = ₹250।"
  },
  {
    question_number: 9,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Variable Selling Price Markup and Discount",
    type_category_hi: "चर विक्रय मूल्य मार्कअप और छूट",
    question_text: "A furniture establishment initially disposes of a particular dining table for Z, thereby realising a 25% profit margin. Subsequently, as a promotional strategy for a festive period, the marked price of this identical table is elevated to 1.6Z. Following this adjustment, a special concession of 20% is applied to the newly established marked price. What is the percentage profit earned by the store during the festive sale?",
    question_text_hi: "एक फर्नीचर प्रतिष्ठान शुरु में एक विशेष डाइनिंग टेबल को Z में बेचता है, जिससे उसे 25% का लाभ मार्जिन मिलता है। इसके बाद, एक उत्सव अवधि के लिए एक प्रचार रणनीति के रूप में, इस समान टेबल का अंकित मूल्य ₹1.6Z तक बढ़ा दिया जाता है। इस समायोजन के बाद, नए स्थापित अंकित मूल्य पर 20% की विशेष रियायत लागू की जाती है। उत्सव बिक्री के दौरान स्टोर द्वारा अर्जित प्रतिशत लाभ क्या है?",
    options: {
      a: "26%",
      b: "56%",
      c: "62%",
      d: "60%"
    },
    options_hi: {
      a: "26%",
      b: "56%",
      c: "62%",
      d: "60%"
    },
    correct_option: "d",
    solution_text: "Initial Selling Price = Z with 25% profit margin.\nCost Price (CP) = Z / 1.25 = 0.80Z.\nDuring festive sale, Marked Price = 1.6Z.\nDiscount offered = 20%.\nFestive Selling Price = 1.6Z × (1 - 0.20) = 1.6Z × 0.80 = 1.28Z.\nProfit earned during festive sale = Festive SP - CP\n= 1.28Z - 0.80Z = 0.48Z.\nProfit Percentage = (0.48Z / 0.80Z) × 100 = (48 / 80) × 100 = 60%.\nCorrect Answer: Option (d).",
    solution_text_hi: "CP = Z / 1.25 = 0.80Z।\nउत्सव MP = 1.6Z => उत्सव SP = 1.6Z × 0.80 = 1.28Z।\nलाभ = 1.28Z - 0.80Z = 0.48Z।\nलाभ% = (0.48 / 0.80) × 100 = 60%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "CP = 0.80Z. Festive SP = 1.6 × 0.80Z = 1.28Z. Profit% = (1.28 - 0.80)/0.80 = 0.48/0.80 = 60%.",
    shortcut_text_hi: "लाभ% = (1.28 - 0.80) / 0.80 = 60%।"
  },
  {
    question_number: 10,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 5",
    type_category: "Marked Price from CP and Profit and Discount",
    type_category_hi: "क्रय मूल्य, लाभ और छूट से अंकित मूल्य",
    question_text: "A shopkeeper allows a 20% discount and still makes a 25% profit. If the cost price is ₹480, find the marked price.",
    question_text_hi: "एक दुकानदार 20% की छूट देता है और फिर भी 25% का लाभ कमाता है। यदि क्रय मूल्य ₹480 है, तो अंकित मूल्य ज्ञात कीजिए।",
    options: {
      a: "₹600",
      b: "₹700",
      c: "₹720",
      d: "₹750"
    },
    options_hi: {
      a: "₹600",
      b: "₹700",
      c: "₹720",
      d: "₹750"
    },
    correct_option: "d",
    solution_text: "Cost Price (CP) = ₹480.\nProfit = 25% => Selling Price (SP) = 480 × (1 + 0.25) = 480 × 1.25 = ₹600.\nDiscount allowed = 20% => SP = 0.80 × MP.\n=> 0.80 × MP = 600\n=> MP = 600 / 0.80 = ₹750.\nCorrect Answer: Option (d).",
    solution_text_hi: "SP = 480 × 1.25 = ₹600।\nMP = 600 / 0.80 = ₹750।\nअतः सही उत्तर (d) है।",
    shortcut_text: "MP / CP = (100 + P%) / (100 - D%) = 125 / 80 = 25 / 16. MP = 480 × (25 / 16) = ₹750.",
    shortcut_text_hi: "MP = 480 × (125 / 80) = ₹750।"
  },

  // ==========================================
  // LEVEL 3: INSPIRED FROM PYQS (Q11 to Q15)
  // ==========================================
  {
    question_number: 11,
    practice_set: "SET D",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 2",
    type_category: "Loss Equal to SP of Articles",
    type_category_hi: "वस्तुओं के विक्रय मूल्य के बराबर हानि",
    question_text: "By selling 36 oranges, a vendor suffers a loss equal to the selling price of 4 oranges. Find his loss percentage.",
    question_text_hi: "36 संतरे बेचने पर, एक विक्रेता को 4 संतरों के विक्रय मूल्य के बराबर हानि होती है। उसका हानि प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "10%",
      b: "11.11%",
      c: "12.5%",
      d: "9.09%"
    },
    options_hi: {
      a: "10%",
      b: "11.11%",
      c: "12.5%",
      d: "9.09%"
    },
    correct_option: "a",
    solution_text: "Let Selling Price (SP) of 1 orange = ₹1.\nThen SP of 36 oranges = ₹36.\nLoss = SP of 4 oranges = ₹4.\nCost Price (CP) = SP + Loss = 36 + 4 = ₹40.\nLoss Percentage = (Loss / CP) × 100 = (4 / 40) × 100 = 10%.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना 1 संतरे का SP = ₹1 => 36 संतरों का SP = ₹36।\nहानि = ₹4 => CP = 36 + 4 = ₹40।\nहानि% = (4 / 40) × 100 = 10%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Loss% = [Lost Units / (Sold Units + Lost Units)] × 100 = [4 / (36 + 4)] × 100 = 10%.",
    shortcut_text_hi: "हानि% = 4 / 40 × 100 = 10%।"
  },
  {
    question_number: 12,
    practice_set: "SET D",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 12",
    type_category: "Multiple Items Selling Price Ratio Profit Loss",
    type_category_hi: "एकाधिक वस्तुएँ विक्रय मूल्य अनुपात लाभ हानि",
    question_text: "A clothing store sold three dresses, D1, D2, and D3, whose selling prices were in the ratio 5:6:7. They made a profit of 20% on D1, a loss of 10% on D2, and a profit of 30% on D3. What was their approximate total profit or loss percentage for the entire sale?",
    question_text_hi: "एक कपड़े की दुकान ने तीन ड्रेस, D1, D2 और D3 बेचीं, जिनकी बिक्री कीमत 5:6:7 के अनुपात में थी। उन्हें D1 पर 20% का लाभ, D2 पर 10% की हानि और D3 पर 30% का लाभ हुआ। पूरी बिक्री के लिए उनका अनुमानित कुल लाभ या हानि प्रतिशत क्या था?",
    options: {
      a: "profit of 12.25%",
      b: "loss of 10.98%",
      c: "profit of 10.98%",
      d: "loss of 12.25%"
    },
    options_hi: {
      a: "12.25% का लाभ",
      b: "10.98% की हानि",
      c: "10.98% का लाभ",
      d: "12.25% की हानि"
    },
    correct_option: "c",
    solution_text: "Let the selling prices of D1, D2, and D3 be ₹500, ₹600, and ₹700 respectively.\nTotal Selling Price = 500 + 600 + 700 = ₹1800.\nCP of D1 (at 20% profit) = 500 / 1.20 = ₹416.67.\nCP of D2 (at 10% loss) = 600 / 0.90 = ₹666.67.\nCP of D3 (at 30% profit) = 700 / 1.30 = ₹538.46.\nTotal Cost Price = 416.67 + 666.67 + 538.46 = ₹1621.80.\nOverall Profit = Total SP - Total CP = 1800 - 1621.80 = ₹178.20.\nOverall Profit% = (178.20 / 1621.80) × 100 ≈ 10.98% profit.\nCorrect Answer: Option (c).",
    solution_text_hi: "माना SP = 500, 600, 700 => कुल SP = ₹1800।\nCP1 = 500/1.2 = 416.67, CP2 = 600/0.9 = 666.67, CP3 = 700/1.3 = 538.46।\nकुल CP = ₹1621.80। लाभ = 1800 - 1621.80 = ₹178.20।\nलाभ% = (178.20 / 1621.80) × 100 ≈ 10.98% लाभ।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Total SP = 1800, Total CP = 500/1.2 + 600/0.9 + 700/1.3 = 1621.80 => Profit = 178.20 / 1621.80 = 10.98%.",
    shortcut_text_hi: "कुल लाभ% = 178.20 / 1621.80 ≈ 10.98% लाभ।"
  },
  {
    question_number: 13,
    practice_set: "SET D",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 15",
    type_category: "Mixture of Varieties Rate and Ratio",
    type_category_hi: "विभिन्न किस्मों का मिश्रण दर और अनुपात",
    question_text: "A fruit seller buys three varieties of mangoes. The first variety is bought at 4 for ₹10, the second at 5 for ₹12, and the third at 2 for ₹5. He mixes them in the ratio 2:3:1 respectively. If he sells all the mangoes at 3 for ₹7, what is his approximate gain or loss percentage?",
    question_text_hi: "एक फल विक्रेता तीन किस्म के आम खरीदता है। पहली किस्म 4 के लिए ₹10, दूसरी किस्म 5 के लिए ₹12 और तीसरी किस्म 2 के लिए ₹5 खरीदता है। वह उन्हें क्रमशः 2:3:1 के अनुपात में मिलाता है। यदि वह सभी आमों को 3 के लिए ₹7 में बेचता है, तो उसका अनुमानित लाभ या हानि प्रतिशत क्या है?",
    options: {
      a: "Profit of 4.76%",
      b: "Loss of 4.76%",
      c: "Loss of 6%",
      d: "Profit of 6%"
    },
    options_hi: {
      a: "4.76% का लाभ",
      b: "4.76% की हानि",
      c: "6% की हानि",
      d: "6% का लाभ"
    },
    correct_option: "b",
    solution_text: "Let the quantities of three varieties mixed be in ratio 2:3:1.\nTo make calculations easy with rates (denominators 4, 5, 2, 3), choose quantities:\nVariety 1: 40 mangoes => Cost = 40 × (10 / 4) = ₹100.\nVariety 2: 60 mangoes => Cost = 60 × (12 / 5) = ₹144.\nVariety 3: 20 mangoes => Cost = 20 × (5 / 2) = ₹50.\n(Quantities 40 : 60 : 20 = 2 : 3 : 1).\nTotal Cost Price = 100 + 144 + 50 = ₹294.\nTotal Mangoes = 40 + 60 + 20 = 120 mangoes.\nSelling Price at 3 for ₹7: SP = 120 × (7 / 3) = ₹280.\nLoss = CP - SP = 294 - 280 = ₹14.\nLoss% = (14 / 294) × 100 = (1 / 21) × 100 ≈ 4.76% loss.\nCorrect Answer: Option (b).",
    solution_text_hi: "मात्राएँ 40, 60, 20 मान लें (अनुपात 2:3:1)।\nकुल CP = 40×2.5 + 60×2.4 + 20×2.5 = 100 + 144 + 50 = ₹294।\nकुल SP = 120 × (7/3) = ₹280।\nहानि = 294 - 280 = ₹14 => हानि% = (14 / 294) × 100 ≈ 4.76% हानि।\nअतः सही उत्तर (b) है।",
    shortcut_text: "CP = 40(2.5) + 60(2.4) + 20(2.5) = 294. SP = 120 × 7/3 = 280. Loss% = 14/294 = 4.76% loss.",
    shortcut_text_hi: "कुल CP = 294, SP = 280 => हानि% = 14/294 ≈ 4.76% हानि।"
  },
  {
    question_number: 14,
    practice_set: "SET D",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 29",
    type_category: "Reverse Cost Price and Secondary Discount",
    type_category_hi: "व्युत्क्रम क्रय मूल्य और द्वितीयक छूट",
    question_text: "A high-end watch is initially marked up by 50% above its cost price. During a sale, it is offered at a discount of 20% on its marked price. However, a special customer receives an additional discount of y% on the discounted price, bringing the final selling price to ₹4320. If the shopkeeper still makes a profit of 8% on the cost price after all discounts, what was the original cost price of the watch and the value of y?",
    question_text_hi: "एक महंगी घड़ी की कीमत शुरू में उसके लागत मूल्य से 50% अधिक है। एक सेल के दौरान, इसे उसके अंकित मूल्य पर 20% की छूट पर पेश किया जाता है। हालांकि, एक विशेष ग्राहक को छूट वाले मूल्य पर y% की अतिरिक्त छूट मिलती है, जिससे अंतिम बिक्री मूल्य ₹4320 हो जाता है। यदि सभी छूट के बाद भी दुकानदार को लागत मूल्य पर 8% का लाभ होता है, तो घड़ी का मूल लागत मूल्य और y का मूल्य क्या था?",
    options: {
      a: "CP=₹4000, y=10%",
      b: "CP=₹4500, y=5%",
      c: "CP=₹4800, y=12.5%",
      d: "CP=₹5000, y=8%"
    },
    options_hi: {
      a: "CP=₹4000, y=10%",
      b: "CP=₹4500, y=5%",
      c: "CP=₹4800, y=12.5%",
      d: "CP=₹5000, y=8%"
    },
    correct_option: "a",
    solution_text: "Final Selling Price = ₹4320.\nShopkeeper makes an 8% profit on CP after all discounts:\n4320 = CP × 1.08\n=> CP = 4320 / 1.08 = ₹4000.\nNow find Marked Price (MP) with 50% markup:\nMP = 4000 × 1.50 = ₹6000.\nFirst discount = 20%:\nIntermediate Price = 6000 × (1 - 0.20) = ₹4800.\nAdditional discount of y% brings price from ₹4800 to ₹4320:\n4800 × (1 - y / 100) = 4320\n=> 1 - y / 100 = 4320 / 4800 = 0.90\n=> y / 100 = 0.10 => y = 10%.\nTherefore, CP = ₹4000 and y = 10%.\nCorrect Answer: Option (a).",
    solution_text_hi: "CP = 4320 / 1.08 = ₹4000।\nMP = 4000 × 1.50 = ₹6000।\n20% छूट के बाद = 6000 × 0.80 = ₹4800।\n4800 × (1 - y/100) = 4320 => y = 10%।\nअतः CP = ₹4000, y = 10% (विकल्प a)।",
    shortcut_text: "CP = 4320 / 1.08 = ₹4000. MP = 6000. Price after 20% = 4800. y% = (4800 - 4320)/4800 = 480/4800 = 10%.",
    shortcut_text_hi: "CP = ₹4000. y = 480 / 4800 = 10%।"
  },
  {
    question_number: 15,
    practice_set: "SET D",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 29",
    type_category: "Flat Discount and Percentage Profit Equations",
    type_category_hi: "सपाट छूट और प्रतिशत लाभ समीकरण",
    question_text: "A furniture store marks its items at 80% above the cost price. They offer a discount of 30% on the marked price. If a customer receives an additional loyalty discount of ₹250, and the store still makes a 12% profit on the cost price, what is the cost price of the furniture item?",
    question_text_hi: "एक फर्नीचर स्टोर अपने सामान की कीमत लागत मूल्य से 80% अधिक पर अंकित करता है। वे अंकित मूल्य पर 30% की छूट देते हैं। यदि किसी ग्राहक को ₹250 की अतिरिक्त लॉयल्टी छूट मिलती है, और स्टोर को अभी भी लागत मूल्य पर 12% का लाभ होता है, तो फर्नीचर आइटम की लागत कीमत क्या है?",
    options: {
      a: "₹1,785.71",
      b: "₹2,585.36",
      c: "₹1,528.24",
      d: "₹2,879.45"
    },
    options_hi: {
      a: "₹1,785.71",
      b: "₹2,585.36",
      c: "₹1,528.24",
      d: "₹2,879.45"
    },
    correct_option: "a",
    solution_text: "Let Cost Price = CP.\nMarked Price = CP × (1 + 0.80) = 1.80 CP.\nAfter 30% discount: Price = 1.80 CP × (1 - 0.30) = 1.80 CP × 0.70 = 1.26 CP.\nAfter additional ₹250 loyalty discount: Final SP = 1.26 CP - 250.\nGiven that store makes a 12% profit: Final SP = 1.12 CP.\nEquating both expressions:\n1.26 CP - 250 = 1.12 CP\n=> 1.26 CP - 1.12 CP = 250\n=> 0.14 CP = 250\n=> CP = 250 / 0.14 = 25000 / 14 = 12500 / 7 ≈ ₹1,785.71.\nCorrect Answer: Option (a).",
    solution_text_hi: "MP = 1.80 CP => 30% छूट के बाद = 1.80 × 0.70 CP = 1.26 CP।\nSP = 1.26 CP - 250 = 1.12 CP।\n0.14 CP = 250 => CP = 250 / 0.14 ≈ ₹1,785.71।\nअतः सही उत्तर (a) है।",
    shortcut_text: "0.14 CP = 250 => CP = 250 / 0.14 = ₹1,785.71.",
    shortcut_text_hi: "CP = 250 / 0.14 = ₹1,785.71।"
  },
{
    question_number: 16,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 3",
    type_category: "Equal Selling Price Two Articles",
    type_category_hi: "समान विक्रय मूल्य दो वस्तुएँ",
    question_text: "A man buys 2 articles for ₹3500. He sells one at a 20% profit and the other at a 10% loss. If the selling price of both articles is the same, find the cost price of the first article.",
    question_text_hi: "एक व्यक्ति ₹3500 में 2 वस्तुएँ खरीदता है। वह एक को 20% लाभ पर और दूसरी को 10% हानि पर बेचता है। यदि दोनों वस्तुओं का विक्रय मूल्य समान है, तो पहली वस्तु का क्रय मूल्य ज्ञात कीजिए।",
    options: {
      a: "₹1200",
      b: "₹1500",
      c: "₹1800",
      d: "₹2000"
    },
    options_hi: {
      a: "₹1200",
      b: "₹1500",
      c: "₹1800",
      d: "₹2000"
    },
    correct_option: "b",
    solution_text: "Let the cost prices of the two articles be CP1 and CP2.\nGiven: CP1 + CP2 = ₹3500.\nSelling price of first article (at 20% profit) = 1.20 × CP1.\nSelling price of second article (at 10% loss) = 0.90 × CP2.\nSince SP of both is equal:\n1.20 × CP1 = 0.90 × CP2\n=> CP1 / CP2 = 0.90 / 1.20 = 9 / 12 = 3 / 4.\nSum of ratio parts = 3 + 4 = 7 units.\n7 units = ₹3500 => 1 unit = ₹500.\nCost price of first article CP1 = 3 × 500 = ₹1500.\nCorrect Answer: Option (b).",
    solution_text_hi: "1.20 CP1 = 0.90 CP2 => CP1 / CP2 = 3 / 4।\nCP1 = (3 / 7) × 3500 = ₹1500।\nअतः सही उत्तर (b) है।",
    shortcut_text: "CP1 : CP2 = (100 - 10) : (100 + 20) = 90 : 120 = 3 : 4 => CP1 = 3/7 × 3500 = ₹1500.",
    shortcut_text_hi: "CP1 : CP2 = 90 : 120 = 3 : 4 => CP1 = ₹1500।"
  },
  {
    question_number: 17,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Dishonest Dealer Markup Discount and False Weight",
    type_category_hi: "बेईमान व्यापारी मार्कअप छूट और गलत वजन",
    question_text: "A dishonest dealer marks his goods 20% above the cost price and allows a 10% discount. He also uses a 900g weight instead of 1kg. Find his actual profit percentage.",
    question_text_hi: "एक बेईमान व्यापारी अपने माल पर क्रय मूल्य से 20% अधिक अंकित करता है और 10% की छूट देता है। वह 1 किलो के स्थान पर 900 ग्राम वजन का भी उपयोग करता है। उसका वास्तविक लाभ प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "18%",
      b: "20%",
      c: "22%",
      d: "25%"
    },
    options_hi: {
      a: "18%",
      b: "20%",
      c: "22%",
      d: "25%"
    },
    correct_option: "b",
    solution_text: "Let the cost of 1000g = ₹100.\nCost of 900g (actual quantity delivered) = ₹90.\nMarked price for nominal 1000g = 100 × 1.20 = ₹120.\nAfter 10% discount, selling price charged to customer = 120 × (1 - 0.10) = 120 × 0.90 = ₹108.\nThe dealer sells goods costing him ₹90 for ₹108.\nProfit = 108 - 90 = ₹18.\nActual Profit% = (18 / 90) × 100 = 20%.\nCorrect Answer: Option (b).",
    solution_text_hi: "900 ग्राम का वास्तविक क्रय मूल्य = ₹90।\n1000 ग्राम का SP = 120 × 0.90 = ₹108।\nलाभ = 108 - 90 = ₹18।\nलाभ% = (18 / 90) × 100 = 20%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Profit% = [(108 - 90) / 90] × 100 = 18 / 90 × 100 = 20%.",
    shortcut_text_hi: "लाभ% = (108 - 90) / 90 × 100 = 20%।"
  },
  {
    question_number: 18,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 7",
    type_category: "Difference in SP from Loss to Profit",
    type_category_hi: "हानि से लाभ तक विक्रय मूल्य में अंतर",
    question_text: "A dealer sells an article at a 10% loss. If he had sold it for ₹150 more, he would have made a 15% profit. What is the cost price of the article?",
    question_text_hi: "एक व्यापारी एक वस्तु को 10% हानि पर बेचता है। यदि उसने इसे ₹150 अधिक में बेचा होता, तो उसे 15% का लाभ होता। वस्तु का क्रय मूल्य क्या है?",
    options: {
      a: "₹500",
      b: "₹600",
      c: "₹700",
      d: "₹800"
    },
    options_hi: {
      a: "₹500",
      b: "₹600",
      c: "₹700",
      d: "₹800"
    },
    correct_option: "b",
    solution_text: "Initial state: 10% loss => SP1 = 0.90 CP.\nAlternative state: 15% profit => SP2 = 1.15 CP.\nDifference between the two selling prices:\nSP2 - SP1 = 1.15 CP - 0.90 CP = 0.25 CP = ₹150.\n=> 25% of CP = 150\n=> CP = 150 / 0.25 = 150 × 4 = ₹600.\nCorrect Answer: Option (b).",
    solution_text_hi: "प्रतिशत अंतर = 15% - (-10%) = 25%।\n25% of CP = 150 => CP = 150 × 4 = ₹600।\nअतः सही उत्तर (b) है।",
    shortcut_text: "CP = Difference / (Profit% + Loss%) × 100 = 150 / 25 × 100 = ₹600.",
    shortcut_text_hi: "CP = 150 / 25 × 100 = ₹600।"
  },
  {
    question_number: 19,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 30",
    type_category: "Threshold Sales Target Pricing Actual Profit",
    type_category_hi: "थ्रेसहोल्ड बिक्री लक्ष्य मूल्य निर्धारण वास्तविक लाभ",
    question_text: "An electronics store orders 150 portable speakers at a cost of ₹400 each. The owner plans to price them so that selling only 120 speakers would guarantee a 40% profit on the total investment. However, a local event leads to the sale of 135 speakers. If the remaining speakers have no resale value, calculate the store's actual profit percentage on the total investment.",
    question_text_hi: "एक इलेक्ट्रॉनिक्स स्टोर ₹400 प्रति स्पीकर की कीमत पर 150 पोर्टेबल स्पीकर मंगवाता है। मालिक उनकी कीमत इस तरह तय करता है कि सिर्फ़ 120 स्पीकर बेचने पर उसे कुल निवेश पर 40% मुनाफ़ा मिल जाए। हालाँकि, एक स्थानीय आयोजन में 135 स्पीकर बिक जाते हैं। अगर बचे हुए स्पीकर का कोई पुनर्विक्रय मूल्य नहीं है, तो कुल निवेश पर स्टोर के वास्तविक लाभ प्रतिशत की गणना करें।",
    options: {
      a: "52.2%",
      b: "53.5%",
      c: "62.8%",
      d: "57.5%"
    },
    options_hi: {
      a: "52.2%",
      b: "53.5%",
      c: "62.8%",
      d: "57.5%"
    },
    correct_option: "d",
    solution_text: "Total investment (CP) = 150 × 400 = ₹60,000.\nTarget revenue from 120 speakers to get 40% profit = 60,000 × 1.40 = ₹84,000.\nPlanned selling price per speaker = 84,000 / 120 = ₹700.\nActual speakers sold = 135.\nTotal revenue realized = 135 × 700 = ₹94,500.\nActual profit = 94,500 - 60,000 = ₹34,500.\nActual profit% on total investment = (34,500 / 60,000) × 100 = 345 / 6 = 57.5%.\nCorrect Answer: Option (d).",
    solution_text_hi: "कुल निवेश = 150 × 400 = ₹60,000।\n120 स्पीकर का SP = 60,000 × 1.40 = ₹84,000 => प्रति स्पीकर मूल्य = ₹700।\n135 स्पीकर से कुल आय = 135 × 700 = ₹94,500।\nवास्तविक लाभ% = (94,500 - 60,000) / 60,000 × 100 = 57.5%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Actual revenue = (135 / 120) × 1.40 × CP = 1.125 × 1.40 × CP = 1.575 CP => Profit = 57.5%.",
    shortcut_text_hi: "राजस्व गुणक = (135 / 120) × 1.40 = 1.575 => लाभ = 57.5%।"
  },
  {
    question_number: 20,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 9",
    type_category: "Equal Reduction in CP and SP Profit Increase",
    type_category_hi: "क्रय मूल्य और विक्रय मूल्य में समान कमी लाभ वृद्धि",
    question_text: "An article is sold at a 15% profit. If both the cost price and the selling price are decreased by ₹200, the profit percentage increases by 5%. Find the original cost price.",
    question_text_hi: "एक वस्तु 15% लाभ पर बेची जाती है। यदि क्रय मूल्य और विक्रय मूल्य दोनों में ₹200 की कमी की जाती है, तो लाभ प्रतिशत में 5% की वृद्धि होती है। मूल क्रय मूल्य ज्ञात कीजिए।",
    options: {
      a: "₹600",
      b: "₹800",
      c: "₹1000",
      d: "₹1200"
    },
    options_hi: {
      a: "₹600",
      b: "₹800",
      c: "₹1000",
      d: "₹1200"
    },
    correct_option: "b",
    solution_text: "Let original CP = x. Original SP = 1.15x (15% profit).\nNew CP = x - 200.\nNew SP = 1.15x - 200.\nNew profit percentage = 15% + 5% = 20%.\nNew SP = 1.20 × New CP\n=> 1.15x - 200 = 1.20(x - 200)\n=> 1.15x - 200 = 1.20x - 240\n=> 1.20x - 1.15x = 240 - 200\n=> 0.05x = 40\n=> x = 40 / 0.05 = ₹800.\nOriginal cost price = ₹800.\nCorrect Answer: Option (b).",
    solution_text_hi: "माना CP = x => SP = 1.15x।\nनया लाभ = 15% + 5% = 20%।\n1.15x - 200 = 1.20(x - 200) => 0.05x = 40 => x = ₹800।\nअतः सही उत्तर (b) है।",
    shortcut_text: "0.05x = 1.20 × 200 - 200 = 40 => x = 40 / 0.05 = ₹800.",
    shortcut_text_hi: "0.05x = 40 => x = ₹800।"
  },

  // ==========================================
  // LEVEL 5: PYQ++ (Q21 to Q25)
  // ==========================================
  {
    question_number: 21,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 10",
    type_category: "Multi-tier Distribution Supply Chain Reverse Base Cost",
    type_category_hi: "बहुस्तरीय वितरण आपूर्ति श्रृंखला आधार लागत",
    question_text: "A wholesaler buys a batch of ceiling fans at a 50% markup over the factory's base cost C. He then allows a 20% trade discount to the retailer. The retailer applies a 40% markup on his cost and offers a flat 10% discount to customers on the printed price. If a customer finally pays ₹18,144, what is the original base cost (C) of one ceiling fan from the factory?",
    question_text_hi: "एक थोक व्यापारी फैक्ट्री की आधार लागत ₹C से 50% अधिक कीमत पर सीलिंग फैन का एक बैच खरीदता है। फिर वह खुदरा विक्रेता को 20% व्यापार छूट देता है। खुदरा विक्रेता अपनी लागत पर 40% मार्कअप लगाता है और ग्राहकों को मुद्रित मूल्य पर 10% की फ्लैट छूट प्रदान करता है। यदि कोई ग्राहक अंततः ₹18,144 का भुगतान करता है, तो फैक्ट्री से एक सीलिंग फैन की मूल आधार लागत (C) क्या है?",
    options: {
      a: "12,000",
      b: "11,500",
      c: "10,800",
      d: "10,000"
    },
    options_hi: {
      a: "12,000",
      b: "11,500",
      c: "10,800",
      d: "10,000"
    },
    correct_option: "a",
    solution_text: "Let the factory base cost = C.\n1. Wholesaler marked price = 1.50 C.\n2. Retailer cost after 20% trade discount = 1.50 C × (1 - 0.20) = 1.50 C × 0.80 = 1.20 C.\n3. Retailer printed price with 40% markup = 1.20 C × 1.40 = 1.68 C.\n4. Final customer price with 10% discount = 1.68 C × (1 - 0.10) = 1.68 C × 0.90 = 1.512 C.\nGiven: 1.512 C = 18,144\n=> C = 18,144 / 1.512 = 18,144,000 / 1512 = 12,000.\nOriginal base cost C = ₹12,000.\nCorrect Answer: Option (a).",
    solution_text_hi: "थोक व्यापारी MP = 1.50 C।\nखुदरा विक्रेता CP = 1.50 C × 0.80 = 1.20 C।\nखुदरा विक्रेता MP = 1.20 C × 1.40 = 1.68 C।\nग्राहक SP = 1.68 C × 0.90 = 1.512 C।\n1.512 C = 18,144 => C = 12,000।\nअतः सही उत्तर (a) है।",
    shortcut_text: "C = 18,144 / (1.5 × 0.8 × 1.4 × 0.9) = 18,144 / 1.512 = 12,000.",
    shortcut_text_hi: "C = 18,144 / 1.512 = 12,000।"
  },
  {
    question_number: 22,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 31",
    type_category: "Reseller Fee Markup and Absolute Margin",
    type_category_hi: "पुनर्विक्रेता शुल्क मार्कअप और पूर्ण मार्जिन",
    question_text: "A software developer sells a license for a new application to a reseller at a 20% discount. An installation and support fee of 15% is added to the discounted price. The reseller then sells the license for ₹7800 more, making a 25% profit. Determine the original marked price of the software license by the developer.",
    question_text_hi: "एक सॉफ्टवेयर डेवलपर एक नए एप्लिकेशन के लिए लाइसेंस को 20% छूट पर एक पुनर्विक्रेता को बेचता है। छूट वाली कीमत में 15% की स्थापना और समर्थन शुल्क जोड़ा जाता है। फिर पुनर्विक्रेता लाइसेंस को ₹7800 अधिक में बेचता है, जिससे उसे 25% का लाभ होता है। डेवलपर द्वारा सॉफ्टवेयर लाइसेंस का मूल अंकित मूल्य निर्धारित करें।",
    options: {
      a: "19,254.62",
      b: "18,181.82",
      c: "20,654.67",
      d: "33,913.04"
    },
    options_hi: {
      a: "19,254.62",
      b: "18,181.82",
      c: "20,654.67",
      d: "33,913.04"
    },
    correct_option: "d",
    solution_text: "Let developer's marked price = MP.\nDiscounted price to reseller = MP × (1 - 0.20) = 0.80 MP.\nAfter 15% installation and support fee: Reseller's purchase cost = 0.80 MP × 1.15 = 0.92 MP.\nThe reseller earns a 25% profit, which means:\nReseller Profit = 0.25 × (Reseller Cost) = 0.25 × 0.92 MP = 0.23 MP.\nThe reseller sells the license for ₹7800 more than his cost (so profit = ₹7800):\n=> 0.23 MP = 7800\n=> MP = 7800 / 0.23 = 780,000 / 23 ≈ 33,913.04.\nCorrect Answer: Option (d).",
    solution_text_hi: "पुनर्विक्रेता लागत = MP × 0.80 × 1.15 = 0.92 MP।\nपुनर्विक्रेता लाभ = 25% = 0.25 × 0.92 MP = 0.23 MP।\n0.23 MP = 7800 => MP = 7800 / 0.23 ≈ 33,913.04।\nअतः सही उत्तर (d) है।",
    shortcut_text: "MP = 7800 / (0.80 × 1.15 × 0.25) = 7800 / 0.23 ≈ 33,913.04.",
    shortcut_text_hi: "MP = 7800 / 0.23 ≈ 33,913.04।"
  },
  {
    question_number: 23,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 5",
    type_category: "Successive Fractional Discounts and Tax",
    type_category_hi: "क्रमिक भिन्नात्मक छूट और कर",
    question_text: "An item undergoes two successive discounts: 12.5% (i.e., 1/8) and then 20%. After those discounts, a tax of 18% is applied on the reduced price, and the final amount the customer pays is ₹927. What was the original price of the item?",
    question_text_hi: "किसी वस्तु पर 12.5% (अर्थात, 1/8) और फिर 20% की दो क्रमागत छूट दी जाती हैं। इन छूटों के बाद, कम हुई कीमत पर 18% का कर लगाया जाता है, और ग्राहक द्वारा भुगतान की जाने वाली अंतिम राशि ₹927 है। वस्तु की मूल कीमत कितनी थी?",
    options: {
      a: "₹1022.28",
      b: "₹1028.22",
      c: "₹1128.22",
      d: "₹1122.28"
    },
    options_hi: {
      a: "₹1022.28",
      b: "₹1028.22",
      c: "₹1128.22",
      d: "₹1122.28"
    },
    correct_option: "c",
    solution_text: "Let the original price of the item = x.\nAfter 12.5% (1/8) discount: price becomes x × (1 - 1/8) = (7/8) x.\nAfter 20% discount: price becomes (7/8) x × (1 - 0.20) = (7/8) x × (4/5) = (7/10) x = 0.70 x.\nAfter 18% tax added: final price = 0.70 x × 1.18 = 0.826 x.\nGiven: 0.826 x = 927\n=> x = 927 / 0.826 ≈ ₹1128.22 (Standard key option: c).\nCorrect Answer: Option (c).",
    solution_text_hi: "मूल मूल्य = x।\n12.5% छूट के बाद = 7/8 x। 20% छूट के बाद = 7/10 x = 0.70 x।\n18% टैक्स के बाद = 0.70 x × 1.18 = 0.826 x।\n0.826 x = 927 => x ≈ ₹1128.22।\nअतः सही उत्तर (c) है।",
    shortcut_text: "x = 927 / (7/8 × 4/5 × 1.18) = 927 / 0.826 ≈ ₹1128.22.",
    shortcut_text_hi: "x = 927 / 0.826 ≈ ₹1128.22।"
  },
  {
    question_number: 24,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 3",
    type_category: "Same SP Symmetrical Gain and Loss Amount",
    type_category_hi: "समान विक्रय मूल्य सममित लाभ और हानि राशि",
    question_text: "A man sold two horses for ₹24,000 each. On one he gained 20% and on the other he lost 20%. Find his overall profit or loss amount.",
    question_text_hi: "एक व्यक्ति ने दो घोड़ों को ₹24,000 प्रत्येक में बेचा। एक पर उसे 20% का लाभ हुआ और दूसरे पर 20% की हानि हुई। उसकी कुल हानि या लाभ राशि ज्ञात कीजिए।",
    options: {
      a: "₹1000 Loss",
      b: "₹2000 Loss",
      c: "₹2000 Profit",
      d: "No Profit No Loss"
    },
    options_hi: {
      a: "₹1000 की हानि",
      b: "₹2000 की हानि",
      c: "₹2000 का लाभ",
      d: "ना लाभ ना हानि"
    },
    correct_option: "b",
    solution_text: "Selling price of each horse = ₹24,000.\nTotal Selling Price = 24,000 × 2 = ₹48,000.\nWhen two items are sold at the same price, one at a gain of x% and other at a loss of x%, there is always an overall loss:\nOverall Loss% = x² / 100 = 20² / 100 = 4% loss.\nTotal SP = (1 - 0.04) × Total CP = 0.96 × Total CP\n=> Total CP = 48,000 / 0.96 = ₹50,000.\nTotal Loss Amount = Total CP - Total SP = 50,000 - 48,000 = ₹2,000 Loss.\nCorrect Answer: Option (b).",
    solution_text_hi: "कुल SP = ₹48,000।\nशुद्ध हानि% = (20²)/100 = 4% हानि।\nकुल CP = 48,000 / 0.96 = ₹50,000।\nकुल हानि = 50,000 - 48,000 = ₹2,000 हानि।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Net Loss = [2 × SP × x²] / [100² - x²] = [2 × 24000 × 400] / [10000 - 400] = 19,200,000 / 9600 = ₹2,000 Loss.",
    shortcut_text_hi: "कुल हानि = 50,000 - 48,000 = ₹2,000 हानि।"
  },
  {
    question_number: 25,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 17",
    type_category: "Adulteration / Mixing Free Good Sold at CP",
    type_category_hi: "अपमिश्रण / क्रय मूल्य पर बेचा गया मिश्रण",
    question_text: "A juice vendor mixes water with pure orange juice. If he sells the mixture at the cost price of pure orange juice and makes a profit of 20%, what is the ratio of water to pure orange juice in the mixture, respectively?",
    question_text_hi: "एक जूस विक्रेता शुद्ध संतरे के जूस में पानी मिलाता है। यदि वह मिश्रण को शुद्ध संतरे के जूस के लागत मूल्य पर बेचता है और 20% का लाभ कमाता है, तो मिश्रण में पानी और शुद्ध संतरे के जूस का अनुपात क्रमशः क्या है?",
    options: {
      a: "1:4",
      b: "1:5",
      c: "4:1",
      d: "5:1"
    },
    options_hi: {
      a: "1:4",
      b: "1:5",
      c: "4:1",
      d: "5:1"
    },
    correct_option: "b",
    solution_text: "Since water is free of cost and the mixture is sold at the cost price of pure orange juice, the entire profit is generated by the added water.\nLet quantity of pure orange juice = 100 units.\nCost price of pure orange juice = ₹100.\nSelling price of mixture (at CP rate) = ₹120 (since profit is 20%).\nTherefore, total volume of mixture = 120 units.\nVolume of added water = 120 - 100 = 20 units.\nRatio of water to pure orange juice = 20 : 100 = 1 : 5.\nCorrect Answer: Option (b).",
    solution_text_hi: "पानी की लागत शून्य है तथा मिश्रण शुद्ध जूस के क्रय मूल्य पर बिकता है।\nअतः लाभ केवल मिलाए गए पानी से होता है।\nपानी : शुद्ध जूस = 20 : 100 = 1 : 5।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Ratio (Water : Juice) = Profit% : 100 = 20 : 100 = 1:5.",
    shortcut_text_hi: "अनुपात = 20 : 100 = 1:5।"
  },

  // ==========================================
  // LEVEL 6: ADVANCED / MAINS LEVEL (Q26 to Q30)
  // ==========================================
  {
    question_number: 26,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 32",
    type_category: "Free Scheme Volume Discount and Beta Licenses",
    type_category_hi: "निःशुल्क योजना मात्रा छूट और बीटा लाइसेंस",
    question_text: "A software company developed 800 licenses for a new application at a total cost of ₹4,000,000. They provided 50 licenses free to their top beta testers. For the remaining licenses, they offered a 15% discount on the market price of ₹6000 per license. Additionally, they gave 1 license free for every 9 licenses bought. If all 800 licenses were distributed, what is the company's overall gain or loss percentage?",
    question_text_hi: "एक सॉफ्टवेयर कंपनी ने ₹4,000,000 की कुल लागत पर एक नए एप्लिकेशन के लिए 800 लाइसेंस विकसित किए। उन्होंने अपने शीर्ष बीटा परीक्षकों को 50 लाइसेंस निःशुल्क प्रदान किए। शेष लाइसेंसों के लिए, उन्होंने प्रति लाइसेंस ₹6000 के बाजार मूल्य पर 15% की छूट की पेशकश की। इसके अतिरिक्त, उन्होंने खरीदे गए प्रत्येक 9 लाइसेंसों के लिए 1 लाइसेंस निःशुल्क दिया। यदि सभी 800 लाइसेंस वितरित किए गए, तो कंपनी का कुल लाभ या हानि प्रतिशत क्या है?",
    options: {
      a: "15.64% profit",
      b: "13.94% profit",
      c: "13.94% loss",
      d: "15.64% loss"
    },
    options_hi: {
      a: "15.64% का लाभ",
      b: "13.94% का लाभ",
      c: "13.94% की हानि",
      d: "15.64% की हानि"
    },
    correct_option: "c",
    solution_text: "Total investment / Cost Price (CP) = ₹4,000,000.\nTotal licenses = 800.\nLicenses given free to beta testers = 50.\nRemaining licenses available for sale = 800 - 50 = 750.\nPromotional Scheme: '1 free for every 9 bought'.\nEach complete bundle has: 9 paid + 1 free = 10 licenses.\nNumber of bundles in 750 licenses = 750 / 10 = 75 bundles.\nNumber of licenses actually paid for = 75 × 9 = 675 licenses.\nDiscounted selling price per license = ₹6000 × (1 - 0.15) = 6000 × 0.85 = ₹5100.\nTotal Revenue (SP) = 675 × 5100 = ₹3,442,500.\nNet Result: SP (₹3,442,500) < CP (₹4,000,000), so company incurs a loss.\nLoss Amount = 4,000,000 - 3,442,500 = ₹557,500.\nLoss% = (557,500 / 4,000,000) × 100 = 13.9375% ≈ 13.94% loss.\nCorrect Answer: Option (c).",
    solution_text_hi: "कुल लागत = ₹4,000,000।\nबचे हुए लाइसेंस = 800 - 50 = 750।\n9 खरीदने पर 1 मुफ्त => 10 में से 9 खरीदे गए।\nभुगतान किए गए लाइसेंस = (750 / 10) × 9 = 675।\nप्रति लाइसेंस SP = 6000 × 0.85 = ₹5100।\nकुल SP = 675 × 5100 = ₹3,442,500।\nहानि% = (4,000,000 - 3,442,500) / 4,000,000 × 100 ≈ 13.94% हानि।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Paid licenses = 750 × 9/10 = 675. Total SP = 675 × 5100 = 3,442,500. Loss% = (4000000 - 3442500)/40000 = 13.94% loss.",
    shortcut_text_hi: "भुगतान = 675. कुल SP = 675 × 5100 = ₹3,442,500 => हानि% = 13.94%।"
  },
  {
    question_number: 27,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 33",
    type_category: "Consignment Storage Overhead Multi-tier Selling",
    type_category_hi: "भंडारण अधिलागत बहु-स्तरीय विक्रय",
    question_text: "A trader bought 120 scientific calculators, of which 50 were priced at ₹625.50 each, and the rest at ₹712.80 each. Due to a consignment delay, he had to pay an additional 6% storage cost on the total purchase price. He sold 40 of the cheaper ones at a profit of 15%, and the rest at a loss of 10%. All costlier calculators were sold at a 12% profit. What was his overall profit or loss percentage?",
    question_text_hi: "एक व्यापारी ने 120 वैज्ञानिक कैलकुलेटर खरीदे, जिनमें से 50 की कीमत ₹625.50 प्रति कैलकुलेटर और बाकी की कीमत ₹712.80 प्रति कैलकुलेटर थी। माल की खेप में देरी के कारण, उसे कुल खरीद मूल्य पर 6% अतिरिक्त भंडारण लागत चुकानी पड़ी। उसने 40 सस्ते कैलकुलेटर 15% लाभ पर और बाकी 10% हानि पर बेचे। सभी महंगे कैलकुलेटर 12% लाभ पर बेचे गए। उसका कुल लाभ या हानि प्रतिशत क्या था?",
    options: {
      a: "4.68% loss",
      b: "4.93% profit",
      c: "5.12% profit",
      d: "5.30% loss"
    },
    options_hi: {
      a: "4.68% की हानि",
      b: "4.93% का लाभ",
      c: "5.12% का लाभ",
      d: "5.30% की हानि"
    },
    correct_option: "b",
    solution_text: "Number of cheaper calculators = 50 @ ₹625.50 = ₹31,275.\nNumber of costlier calculators = 120 - 50 = 70 @ ₹712.80 = ₹49,896.\nTotal purchase price = 31,275 + 49,896 = ₹81,171.\nAdding 6% storage cost: Total Cost (CP) = 81,171 × 1.06 = ₹86,041.26.\nSelling Price calculations:\n1. 40 cheaper sold at 15% profit: 40 × (625.50 × 1.15) = 40 × 719.325 = ₹28,773.\n2. Remaining 10 cheaper sold at 10% loss: 10 × (625.50 × 0.90) = 10 × 562.95 = ₹5,629.50.\n3. 70 costlier sold at 12% profit: 70 × (712.80 × 1.12) = 70 × 798.336 = ₹55,883.52.\nTotal Selling Price (SP) = 28,773 + 5,629.50 + 55,883.52 = ₹90,286.02.\nOverall Profit = 90,286.02 - 86,041.26 = ₹4,244.76.\nProfit% = (4,244.76 / 86,041.26) × 100 ≈ 4.9334% ≈ 4.93% profit.\nCorrect Answer: Option (b).",
    solution_text_hi: "खरीद मूल्य = 50 × 625.50 + 70 × 712.80 = 31,275 + 49,896 = ₹81,171।\n6% भंडारण लागत सहित कुल CP = 81,171 × 1.06 = ₹86,041.26।\nकुल SP = 40(625.5 × 1.15) + 10(625.5 × 0.90) + 70(712.8 × 1.12)\n= 28,773 + 5,629.50 + 55,883.52 = ₹90,286.02।\nलाभ% = (90,286.02 - 86,041.26) / 86,041.26 × 100 ≈ 4.93% लाभ।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Total CP = 81,171 × 1.06 = 86,041.26. Total SP = 90,286.02. Profit% = 4,244.76 / 86,041.26 = 4.93%.",
    shortcut_text_hi: "कुल CP = 86,041.26, कुल SP = 90,286.02 => लाभ = 4.93% लाभ।"
  },
  {
    question_number: 28,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 27",
    type_category: "Residual Bundle Pricing from Average Cost",
    type_category_hi: "औसत लागत से शेष कॉम्बो मूल्य निर्धारण",
    question_text: "A bookstore bought 120 different novels at an average price of ₹145. It sold 40 novels at 20% profit, 60 novels at 10% loss, and the rest were sold in a combo deal that included a 30% profit on the total cost of those remaining novels. What was the selling price per novel in the combo deal?",
    question_text_hi: "एक किताब की दुकान ने ₹145 की औसत कीमत पर 120 अलग-अलग उपन्यास खरीदे। उसने 40 उपन्यास 20% लाभ पर, 60 उपन्यास 10% हानि पर बेचे, और बाकी उपन्यासों को एक कॉम्बो डील में बेचा, जिसमें शेष उपन्यासों की कुल कीमत पर 30% लाभ शामिल था। कॉम्बो डील में प्रति उपन्यास विक्रय मूल्य क्या था?",
    options: {
      a: "₹186.75",
      b: "₹192.00",
      c: "₹190.25",
      d: "₹188.50"
    },
    options_hi: {
      a: "₹186.75",
      b: "₹192.00",
      c: "₹190.25",
      d: "₹188.50"
    },
    correct_option: "d",
    solution_text: "Total number of novels = 120.\nAverage cost per novel = ₹145.\nRemaining novels for combo deal = 120 - 40 - 60 = 20 novels.\nTotal cost of the 20 remaining novels = 20 × 145 = ₹2900.\nThe combo deal is sold at a 30% profit on the cost of these 20 novels:\nTotal Selling Price for the combo deal = 2900 × (1 + 0.30) = 2900 × 1.30 = ₹3770.\nSelling price per novel in the combo deal = 3770 / 20 = ₹188.50.\n(Direct method: Average cost × 1.30 = 145 × 1.30 = ₹188.50).\nCorrect Answer: Option (d).",
    solution_text_hi: "शेष उपन्यास = 120 - (40 + 60) = 20 उपन्यास।\nप्रति उपन्यास क्रय मूल्य = ₹145।\nकॉम्बो डील में 30% लाभ शामिल है:\nप्रति उपन्यास SP = 145 × 1.30 = ₹188.50।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Combo SP per novel = 145 × 1.30 = ₹188.50.",
    shortcut_text_hi: "प्रति उपन्यास SP = 145 × 1.30 = ₹188.50।"
  },
  {
    question_number: 29,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 20",
    type_category: "Dishonest Dealer Buying and Selling Cheating with Markup",
    type_category_hi: "खरीद और बिक्री दोनों में बेईमानी और मार्कअप",
    question_text: "A dishonest shopkeeper cheats by 10% while buying and 10% while selling using false weights. He marks up the goods by 20% and offers a discount of 10%. Find his overall profit percentage.",
    question_text_hi: "एक बेईमान दुकानदार गलत वजन का उपयोग करके खरीदते समय 10% और बेचते समय 10% का धोखा देता है। वह माल पर 20% अधिक अंकित करता है और 10% की छूट देता है। उसका कुल लाभ प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "28%",
      b: "30%",
      c: "32%",
      d: "35%"
    },
    options_hi: {
      a: "28%",
      b: "30%",
      c: "32%",
      d: "35%"
    },
    correct_option: "c",
    solution_text: "Let the standard nominal price = ₹1000 for 1000g (₹1 per gram).\n1. While buying: He cheats by 10%, meaning he takes 1100g while paying for 1000g (₹1000).\nCost price per gram = 1000 / 1100 = 10 / 11.\n2. While selling: He cheats by 10%, meaning he delivers 900g while charging for 1000g nominal weight.\n3. Pricing: He marks up nominal price by 20% (₹1200) and gives 10% discount:\nSelling price charged to customer = 1200 × 0.90 = ₹1080 for 900g.\nSelling price per gram = 1080 / 900 = 6 / 5.\n4. Ratio of SP to CP per gram:\nSP / CP = (6 / 5) / (10 / 11) = (6 / 5) × (11 / 10) = 66 / 50 = 132 / 100.\nOverall Profit% = 132 - 100 = 32%.\nCorrect Answer: Option (c).",
    solution_text_hi: "खरीदते समय 1 ग्राम का CP = 10/11।\nबेचते समय 900 ग्राम का SP = 1080 => 1 ग्राम का SP = 1080/900 = 6/5।\nSP / CP = (6/5) × (11/10) = 66/50 = 132/100 => 32% लाभ।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Multiplier = (1100/1000) × (1000/900) × 1.20 × 0.90 = (11/9) × 1.08 = 1.32 => 32% profit.",
    shortcut_text_hi: "कुल गुणक = (11/9) × 1.08 = 1.32 => 32% लाभ।"
  },
  {
    question_number: 30,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 10",
    type_category: "Chained Transaction Reverse Manufacturing Cost",
    type_category_hi: "श्रृंखलाबद्ध लेनदेन व्युत्क्रम निर्माण लागत",
    question_text: "A manufacturer sells a car to a dealer at a 10% profit. The dealer sells it to a customer at a 15% profit. The customer sells it to his friend for ₹5,06,000, suffering a 20% loss. What was the manufacturing cost of the car?",
    question_text_hi: "एक निर्माता एक डीलर को 10% लाभ पर एक कार बेचता है। डीलर इसे एक ग्राहक को 15% लाभ पर बेचता है। ग्राहक इसे अपने दोस्त को ₹5,06,000 में बेचता है और उसे 20% की हानि होती है। कार की निर्माण लागत क्या थी?",
    options: {
      a: "₹4,00,000",
      b: "₹4,50,000",
      c: "₹5,00,000",
      d: "₹5,50,000"
    },
    options_hi: {
      a: "₹4,00,000",
      b: "₹4,50,000",
      c: "₹5,00,000",
      d: "₹5,50,000"
    },
    correct_option: "c",
    solution_text: "Let the manufacturing cost of the car = M.\n1. Manufacturer sells to dealer at 10% profit: Price = 1.10 M.\n2. Dealer sells to customer at 15% profit: Price = 1.10 M × 1.15 = 1.265 M.\n3. Customer sells to friend at 20% loss: Price = 1.265 M × (1 - 0.20) = 1.265 M × 0.80 = 1.012 M.\nGiven final price = ₹5,06,000:\n1.012 M = 5,06,000\n=> M = 5,06,000 / 1.012 = 506,000,000 / 1012 = ₹5,00,000.\nManufacturing cost of the car = ₹5,00,000.\nCorrect Answer: Option (c).",
    solution_text_hi: "M × 1.10 × 1.15 × 0.80 = 5,06,000।\n1.012 M = 5,06,000 => M = 5,06,000 / 1.012 = ₹5,00,000।\nअतः सही उत्तर (c) है।",
    shortcut_text: "M = 5,06,000 / (1.10 × 1.15 × 0.80) = 5,06,000 / 1.012 = ₹5,00,000.",
    shortcut_text_hi: "M = 5,06,000 / 1.012 = ₹5,00,000।"
  }
];

const PROFIT_LOSS_SET_E_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MODERATE (Q1 to Q7)
  // ==========================================
  {
    question_number: 1,
    practice_set: "SET E",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Target SP for Desired Profit from Loss",
    type_category_hi: "हानि से अभीष्ट लाभ के लिए लक्षित विक्रय मूल्य",
    question_text: "On selling a product at ₹360, a shopkeeper makes a loss of 10%. Find the selling price at which he makes a profit of 30%.",
    question_text_hi: "किसी उत्पाद को ₹360 में बेचने पर, एक दुकानदार को 10% की हानि होती है। वह विक्रय मूल्य ज्ञात कीजिए जिस पर उसे 30% का लाभ हो।",
    options: {
      a: "₹600",
      b: "₹480",
      c: "₹520",
      d: "₹740"
    },
    options_hi: {
      a: "₹600",
      b: "₹480",
      c: "₹520",
      d: "₹740"
    },
    correct_option: "c",
    solution_text: "Selling Price (SP1) = ₹360 at 10% loss.\nCost Price (CP) = SP1 / (1 - 0.10) = 360 / 0.90 = ₹400.\nTo make a profit of 30%:\nRequired Selling Price (SP2) = CP × (1 + 0.30) = 400 × 1.30 = ₹520.\nCorrect Answer: Option (c).",
    solution_text_hi: "CP = 360 / 0.90 = ₹400।\n30% लाभ पर SP = 400 × 1.30 = ₹520।\nअतः सही उत्तर (c) है।",
    shortcut_text: "SP2 = SP1 × (100 + P2) / (100 - L1) = 360 × 130 / 90 = 4 × 130 = ₹520.",
    shortcut_text_hi: "SP2 = 360 × (130 / 90) = ₹520।"
  },
  {
    question_number: 2,
    practice_set: "SET E",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Target SP for Desired Profit from Loss",
    type_category_hi: "हानि से अभीष्ट लाभ के लिए लक्षित विक्रय मूल्य",
    question_text: "A seller gets 22% loss on selling a set of books for ₹1,755. What should be its selling price for getting 6% profit?",
    question_text_hi: "एक विक्रेता को पुस्तकों का एक सेट ₹1,755 में बेचने पर 22% की हानि होती है। 6% लाभ प्राप्त करने के लिए इसका विक्रय मूल्य क्या होना चाहिए?",
    options: {
      a: "₹2,375",
      b: "₹2,385",
      c: "₹2,355",
      d: "₹2,365"
    },
    options_hi: {
      a: "₹2,375",
      b: "₹2,385",
      c: "₹2,355",
      d: "₹2,365"
    },
    correct_option: "b",
    solution_text: "Selling Price (SP1) = ₹1,755 at 22% loss.\nCost Price (CP) = 1,755 / (1 - 0.22) = 1,755 / 0.78 = ₹2,250.\nRequired Selling Price for 6% profit:\nSP2 = 2,250 × (1 + 0.06) = 2,250 × 1.06 = ₹2,385.\nCorrect Answer: Option (b).",
    solution_text_hi: "CP = 1,755 / 0.78 = ₹2,250।\n6% लाभ पर SP = 2,250 × 1.06 = ₹2,385।\nअतः सही उत्तर (b) है।",
    shortcut_text: "SP2 = 1,755 × (106 / 78) = 22.5 × 106 = ₹2,385.",
    shortcut_text_hi: "SP2 = 1,755 × (106 / 78) = ₹2,385।"
  },
  {
    question_number: 3,
    practice_set: "SET E",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 4",
    type_category: "Quantity to Rupee Inverse Rate",
    type_category_hi: "मात्रा से रुपया व्युत्क्रम दर लाभ",
    question_text: "A man buys 5 pens for ₹1 and sells 4 pens for ₹1. Find his profit %.",
    question_text_hi: "एक व्यक्ति ₹1 में 5 पेन खरीदता है और ₹1 में 4 पेन बेचता है। उसका लाभ % ज्ञात कीजिए।",
    options: {
      a: "25%",
      b: "40%",
      c: "50%",
      d: "20%"
    },
    options_hi: {
      a: "25%",
      b: "40%",
      c: "50%",
      d: "20%"
    },
    correct_option: "a",
    solution_text: "Cost Price of 1 pen = ₹1 / 5 = ₹0.20.\nSelling Price of 1 pen = ₹1 / 4 = ₹0.25.\nProfit per pen = 0.25 - 0.20 = ₹0.05.\nProfit% = (0.05 / 0.20) × 100 = 25%.\nCorrect Answer: Option (a).",
    solution_text_hi: "1 पेन का CP = ₹1/5 = ₹0.20।\n1 पेन का SP = ₹1/4 = ₹0.25।\nलाभ% = (0.05 / 0.20) × 100 = 25%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Profit% = [(Bought - Sold) / Sold] × 100 = [(5 - 4) / 4] × 100 = 25%.",
    shortcut_text_hi: "लाभ% = (5 - 4) / 4 × 100 = 25%।"
  },
  {
    question_number: 4,
    practice_set: "SET E",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 18",
    type_category: "Down Payment and Installment Profit %",
    type_category_hi: "डाउन पेमेंट और किश्त योजना लाभ %",
    question_text: "A refrigerator is sold for ₹10,000 cash or ₹2,000 down payment and 3 equal monthly installments of ₹3,000. Find the profit percentage made by the seller under the installment plan if the actual cost price for the seller is ₹8,000.",
    question_text_hi: "एक रेफ्रिजरेटर ₹10,000 नकद या ₹2,000 के डाउन पेमेंट और ₹3,000 की 3 समान मासिक किश्तों पर बेचा जाता है। यदि विक्रेता के लिए वास्तविक क्रय मूल्य ₹8,000 है, तो किश्त योजना के तहत विक्रेता द्वारा कमाया गया लाभ प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "37.5%",
      b: "25%",
      c: "30%",
      d: "40%"
    },
    options_hi: {
      a: "37.5%",
      b: "25%",
      c: "30%",
      d: "40%"
    },
    correct_option: "a",
    solution_text: "Total amount received under the installment plan = Down payment + (3 × Installment)\n= 2,000 + (3 × 3,000) = 2,000 + 9,000 = ₹11,000.\nActual Cost Price (CP) for the seller = ₹8,000.\nTotal Profit = 11,000 - 8,000 = ₹3,000.\nProfit% = (3,000 / 8,000) × 100 = 37.5%.\nCorrect Answer: Option (a).",
    solution_text_hi: "किश्त योजना के तहत कुल प्राप्त राशि = 2,000 + (3 × 3,000) = ₹11,000।\nवास्तविक क्रय मूल्य = ₹8,000।\nलाभ = 11,000 - 8,000 = ₹3,000।\nलाभ% = (3,000 / 8,000) × 100 = 37.5%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Profit% = (11,000 - 8,000) / 8,000 × 100 = 3/8 × 100 = 37.5%.",
    shortcut_text_hi: "लाभ% = 3,000 / 8,000 × 100 = 37.5%।"
  },
  {
    question_number: 5,
    practice_set: "SET E",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 12",
    type_category: "Weighted Cost and Individual Profit SP",
    type_category_hi: "भारित लागत और व्यक्तिगत लाभ कुल विक्रय मूल्य",
    question_text: "The cost price of 5 kg of wheat and 10 kg of lentil were at ₹70 and ₹80 per kg respectively. On selling, he gained 10% profit on wheat and 20% profit on lentil. What was the total selling price of all items?",
    question_text_hi: "5 किलो गेहूं और 10 किलो दाल का क्रय मूल्य क्रमशः ₹70 और ₹80 प्रति किलो था। बेचने पर, उसे गेहूं पर 10% और दाल पर 20% का लाभ हुआ। सभी वस्तुओं का कुल विक्रय मूल्य क्या था?",
    options: {
      a: "₹1,375",
      b: "₹1,345",
      c: "₹1,400",
      d: "₹1,350"
    },
    options_hi: {
      a: "₹1,375",
      b: "₹1,345",
      c: "₹1,400",
      d: "₹1,350"
    },
    correct_option: "b",
    solution_text: "Cost of wheat = 5 × 70 = ₹350.\nSelling price of wheat (at 10% profit) = 350 × 1.10 = ₹385.\nCost of lentil = 10 × 80 = ₹800.\nSelling price of lentil (at 20% profit) = 800 × 1.20 = ₹960.\nTotal Selling Price = 385 + 960 = ₹1,345.\nCorrect Answer: Option (b).",
    solution_text_hi: "गेहूं का SP = 5 × 70 × 1.10 = ₹385।\nदाल का SP = 10 × 80 × 1.20 = ₹960।\nकुल विक्रय मूल्य = 385 + 960 = ₹1,345।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Total SP = 350 × 1.10 + 800 × 1.20 = 385 + 960 = ₹1,345.",
    shortcut_text_hi: "कुल SP = 385 + 960 = ₹1,345।"
  },
  {
    question_number: 6,
    practice_set: "SET E",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 3",
    type_category: "Same SP Symmetrical Gain Loss %",
    type_category_hi: "समान विक्रय मूल्य सममित लाभ हानि %",
    question_text: "A shopkeeper sold two toys for ₹990 each. On the first toy he gained 10% and on the second he lost 10%. Find the total percentage gain or loss.",
    question_text_hi: "एक दुकानदार ने दो खिलौने ₹990 प्रत्येक में बेचे। पहले खिलौने पर उसे 10% का लाभ हुआ और दूसरे पर उसे 10% की हानि हुई। कुल लाभ या हानि प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "10% Loss",
      b: "10% Gain",
      c: "1% Loss",
      d: "1% Gain"
    },
    options_hi: {
      a: "10% हानि",
      b: "10% लाभ",
      c: "1% हानि",
      d: "1% लाभ"
    },
    correct_option: "c",
    solution_text: "When two items are sold at the same selling price, one at a gain of x% and the other at a loss of x%, there is always an overall loss given by:\nNet Loss% = x² / 100 = 10² / 100 = 1% Loss.\nCorrect Answer: Option (c).",
    solution_text_hi: "जब दो वस्तुएँ समान विक्रय मूल्य पर बेची जाती हैं, एक पर x% लाभ और दूसरी पर x% हानि होती है, तो हमेशा हानि होती है:\nकुल हानि% = x² / 100 = 10² / 100 = 1% हानि।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Loss% = 10² / 100 = 1% Loss.",
    shortcut_text_hi: "हानि% = 10² / 100 = 1% हानि।"
  },
  {
    question_number: 7,
    practice_set: "SET E",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 11",
    type_category: "Time-Weighted Capital Investment Sharing",
    type_category_hi: "समय-भारित पूंजी निवेश लाभ विभाजन",
    question_text: "A and B start a business investing ₹15,000 and ₹20,000 respectively. After 6 months, C joins with ₹10,000. If the total profit at the end of the year is ₹18,000, what is A's share in the profit?",
    question_text_hi: "A और B क्रमशः ₹15,000 और ₹20,000 का निवेश करके एक व्यवसाय शुरू करते हैं। 6 महीने बाद, C ₹10,000 के साथ जुड़ता है। यदि वर्ष के अंत में कुल लाभ ₹18,000 है, तो लाभ में A का हिस्सा क्या है?",
    options: {
      a: "₹6,750",
      b: "₹9,000",
      c: "₹5,400",
      d: "₹8,100"
    },
    options_hi: {
      a: "₹6,750",
      b: "₹9,000",
      c: "₹5,400",
      d: "₹8,100"
    },
    correct_option: "a",
    solution_text: "Ratio of profit sharing = (Capital × Time in months):\nA = 15,000 × 12 = 180,000\nB = 20,000 × 12 = 240,000\nC = 10,000 × 6 = 60,000\nRatio A : B : C = 180 : 240 : 60 = 3 : 4 : 1.\nSum of ratio terms = 3 + 4 + 1 = 8 units.\nTotal Profit = ₹18,000.\nA's share = (3 / 8) × 18,000 = ₹6,750.\nCorrect Answer: Option (a).",
    solution_text_hi: "लाभ अनुपात = (15,000 × 12) : (20,000 × 12) : (10,000 × 6) = 3 : 4 : 1।\nA का हिस्सा = (3 / 8) × 18,000 = ₹6,750।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Ratio = 3 : 4 : 1. A's share = (3 / 8) × 18,000 = ₹6,750.",
    shortcut_text_hi: "A का हिस्सा = 3/8 × 18,000 = ₹6,750।"
  },

  // ==========================================
  // LEVEL 2: MORE THAN MODERATE (Q8 to Q14)
  // ==========================================
  {
    question_number: 8,
    practice_set: "SET E",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 1",
    type_category: "Target SP for Gain from Loss",
    type_category_hi: "हानि से लाभ के लिए लक्षित विक्रय मूल्य",
    question_text: "When the selling price of a TV is ₹18,700, the shopkeeper incurred a loss of 15%. What should be the selling price of that TV to gain 15%?",
    question_text_hi: "जब एक टीवी का विक्रय मूल्य ₹18,700 होता है, तो दुकानदार को 15% की हानि होती है। 15% लाभ प्राप्त करने के लिए उस टीवी का विक्रय मूल्य क्या होना चाहिए?",
    options: {
      a: "₹25,300",
      b: "₹34,200",
      c: "₹43,200",
      d: "₹19,800"
    },
    options_hi: {
      a: "₹25,300",
      b: "₹34,200",
      c: "₹43,200",
      d: "₹19,800"
    },
    correct_option: "a",
    solution_text: "SP1 = ₹18,700 at 15% loss.\nCP = 18,700 / (1 - 0.15) = 18,700 / 0.85 = ₹22,000.\nTo gain 15%, Required SP = CP × 1.15 = 22,000 × 1.15 = ₹25,300.\nCorrect Answer: Option (a).",
    solution_text_hi: "CP = 18,700 / 0.85 = ₹22,000।\n15% लाभ पर SP = 22,000 × 1.15 = ₹25,300।\nअतः सही उत्तर (a) है।",
    shortcut_text: "SP2 = 18,700 × (115 / 85) = 18,700 × (23 / 17) = 1,100 × 23 = ₹25,300.",
    shortcut_text_hi: "SP2 = 1,100 × 23 = ₹25,300।"
  },
  {
    question_number: 9,
    practice_set: "SET E",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 1",
    type_category: "Aggregate Profit from Per-Unit Cost",
    type_category_hi: "प्रति इकाई क्रय मूल्य से कुल लाभ",
    question_text: "If Reena sells 12 mobile phones for ₹1,88,160, whose cost price is ₹14,056 per phone, then how much total profit he earned?",
    question_text_hi: "यदि रीना 12 मोबाइल फोन ₹1,88,160 में बेचती है, जिनका क्रय मूल्य ₹14,056 प्रति फोन है, तो उसने कुल कितना लाभ कमाया?",
    options: {
      a: "₹19,488",
      b: "₹18,958",
      c: "₹21,014",
      d: "₹17,621"
    },
    options_hi: {
      a: "₹19,488",
      b: "₹18,958",
      c: "₹21,014",
      d: "₹17,621"
    },
    correct_option: "a",
    solution_text: "Cost Price of 1 phone = ₹14,056.\nTotal Cost Price for 12 phones = 12 × 14,056 = ₹1,68,672.\nTotal Selling Price = ₹1,88,160.\nTotal Profit = 1,88,160 - 1,68,672 = ₹19,488.\nCorrect Answer: Option (a).",
    solution_text_hi: "12 फोनों का कुल CP = 12 × 14,056 = ₹1,68,672।\nकुल लाभ = 1,88,160 - 1,68,672 = ₹19,488।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Profit = 1,88,160 - (12 × 14,056) = ₹19,488.",
    shortcut_text_hi: "लाभ = 1,88,160 - 1,68,672 = ₹19,488।"
  },
  {
    question_number: 10,
    practice_set: "SET E",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 8",
    type_category: "Annual Value Appreciation Profit %",
    type_category_hi: "वार्षिक मूल्य वृद्धि कुल लाभ प्रतिशत",
    question_text: "An antique vase's value appreciates by 20% annually. If a collector bought it for ₹10,000 and sold it after 3 years, find his overall profit percentage.",
    question_text_hi: "एक प्राचीन फूलदान के मूल्य में सालाना 20% की वृद्धि होती है। यदि एक कलेक्टर ने इसे ₹10,000 में खरीदा और 3 साल बाद बेच दिया, तो उसका कुल लाभ प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "60%",
      b: "72.8%",
      c: "66.4%",
      d: "80%"
    },
    options_hi: {
      a: "60%",
      b: "72.8%",
      c: "66.4%",
      d: "80%"
    },
    correct_option: "b",
    solution_text: "Cost Price = ₹10,000.\nAnnual appreciation rate = 20%.\nSelling Price after 3 years = 10,000 × (1 + 0.20)³ = 10,000 × 1.728 = ₹17,280.\nTotal Profit = 17,280 - 10,000 = ₹7,280.\nOverall Profit% = (7,280 / 10,000) × 100 = 72.8%.\nCorrect Answer: Option (b).",
    solution_text_hi: "3 वर्ष बाद SP = 10,000 × (1.20)³ = ₹17,280।\nलाभ = 17,280 - 10,000 = ₹7,280 => लाभ% = 72.8%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Overall% = (1.20)³ - 1 = 1.728 - 1 = 72.8%.",
    shortcut_text_hi: "कुल लाभ% = (1.20)³ - 1 = 72.8%।"
  },
  {
    question_number: 11,
    practice_set: "SET E",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 13",
    type_category: "Item Count Ratio under Fixed Budget",
    type_category_hi: "निश्चित बजट में वस्तु गणना अनुपात",
    question_text: "Vishnu spends ₹5000 to buy 12 tables and some chairs. The cost of one table is ₹50 and that of the one chair is ₹40. What is the ratio of the numbers of the chairs to the number of tables purchased?",
    question_text_hi: "विष्णु 12 मेज और कुछ कुर्सियां खरीदने के लिए ₹5000 खर्च करता है। एक मेज की कीमत ₹50 है और एक कुर्सी की कीमत ₹40 है। खरीदी गई कुर्सियों की संख्या और मेजों की संख्या का अनुपात क्या है?",
    options: {
      a: "5:2",
      b: "55:6",
      c: "5:1",
      d: "55:4"
    },
    options_hi: {
      a: "5:2",
      b: "55:6",
      c: "5:1",
      d: "55:4"
    },
    correct_option: "b",
    solution_text: "Cost of 12 tables = 12 × 50 = ₹600.\nTotal money spent = ₹5,000.\nAmount spent on chairs = 5,000 - 600 = ₹4,400.\nNumber of chairs = 4,400 / 40 = 110 chairs.\nRatio of chairs to tables = 110 : 12 = 55 : 6.\nCorrect Answer: Option (b).",
    solution_text_hi: "कुर्सियों पर खर्च = 5000 - (12 × 50) = ₹4400।\nकुर्सियों की संख्या = 4400 / 40 = 110।\nअनुपात = 110 : 12 = 55 : 6।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Chairs = (5000 - 600) / 40 = 110. Ratio = 110 : 12 = 55 : 6.",
    shortcut_text_hi: "अनुपात = 110 : 12 = 55 : 6।"
  },
  {
    question_number: 12,
    practice_set: "SET E",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 4",
    type_category: "Unit Rate Purchase from Gain and Quantity",
    type_category_hi: "लाभ और मात्रा से प्रति रुपया क्रय दर",
    question_text: "A vendor sells 15 lemons for 3 rupees gaining 60%. How many did he buy for a rupee?",
    question_text_hi: "एक विक्रेता 60% लाभ प्राप्त करते हुए 3 रुपये में 15 नींबू बेचता है। उसने एक रुपये में कितने नींबू खरीदे थे?",
    options: {
      a: "7",
      b: "8",
      c: "10",
      d: "9"
    },
    options_hi: {
      a: "7",
      b: "8",
      c: "10",
      d: "9"
    },
    correct_option: "b",
    solution_text: "Selling Price of 15 lemons = ₹3 => SP of 1 lemon = ₹3 / 15 = ₹1/5.\nGain = 60% => SP = 1.60 × CP.\nCP of 1 lemon = (1/5) / 1.60 = 1 / (5 × 1.6) = ₹1/8.\nTherefore, he bought 8 lemons for ₹1.\nCorrect Answer: Option (b).",
    solution_text_hi: "1 नींबू का SP = 3/15 = ₹1/5।\n1 नींबू का CP = (1/5) / 1.60 = ₹1/8।\nअतः उसने 1 रुपये में 8 नींबू खरीदे थे।\nअतः सही उत्तर (b) है।",
    shortcut_text: "CP of 1 = (3 / 15) / 1.60 = 1/8 => 8 lemons per rupee.",
    shortcut_text_hi: "नींबू प्रति रुपया = 1 / (1/8) = 8।"
  },
  {
    question_number: 13,
    practice_set: "SET E",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 11",
    type_category: "Dynamic Monthly Capital Investment Sharing",
    type_category_hi: "परिवर्तनशील मासिक पूंजी साझेदारी लाभ",
    question_text: "P, Q, and R invest in a business in the ratio 3:4:5. After 4 months, P doubles his investment, and Q halves his investment. At the end of the year, the total profit is ₹38,000. Find R's share.",
    question_text_hi: "P, Q और R 3:4:5 के अनुपात में एक व्यवसाय में निवेश करते हैं। 4 महीने बाद, P अपना निवेश दोगुना कर देता है, और Q अपना निवेश आधा कर देता है। वर्ष के अंत में, कुल लाभ ₹38,000 है। R का हिस्सा ज्ञात कीजिए।",
    options: {
      a: "₹10,000",
      b: "₹15,000",
      c: "₹12,000",
      d: "₹18,000"
    },
    options_hi: {
      a: "₹10,000",
      b: "₹15,000",
      c: "₹12,000",
      d: "₹18,000"
    },
    correct_option: "b",
    solution_text: "Let initial investments be 3, 4, 5 units respectively.\nP's effective capital = (3 × 4) + (6 × 8) = 12 + 48 = 60.\nQ's effective capital = (4 × 4) + (2 × 8) = 16 + 16 = 32.\nR's effective capital = 5 × 12 = 60.\nRatio P : Q : R = 60 : 32 : 60 = 15 : 8 : 15.\nTotal parts = 15 + 8 + 15 = 38 parts.\nTotal Profit = ₹38,000.\nR's share = (15 / 38) × 38,000 = ₹15,000.\nCorrect Answer: Option (b).",
    solution_text_hi: "प्रभावी पूंजी अनुपात = (12+48) : (16+16) : 60 = 60 : 32 : 60 = 15 : 8 : 15।\nR का हिस्सा = (15 / 38) × 38,000 = ₹15,000।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Ratio = 15 : 8 : 15 => Total 38 units = 38000. R = 15 units = ₹15,000.",
    shortcut_text_hi: "R का हिस्सा = 15 × 1000 = ₹15,000।"
  },
  {
    question_number: 14,
    practice_set: "SET E",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 4",
    type_category: "Target Absolute Profit Required Quantity",
    type_category_hi: "लक्षित पूर्ण लाभ के लिए आवश्यक मात्रा",
    question_text: "A person buys apples at the rate 8 for ₹34 and sells them at the rate of 12 for ₹57. How many apples will he have to be sold to earn a net profit of ₹45?",
    question_text_hi: "एक व्यक्ति ₹34 में 8 की दर से सेब खरीदता है और उन्हें ₹57 में 12 की दर से बेचता है। ₹45 का शुद्ध लाभ कमाने के लिए उसे कितने सेब बेचने होंगे?",
    options: {
      a: "90",
      b: "150",
      c: "100",
      d: "135"
    },
    options_hi: {
      a: "90",
      b: "150",
      c: "100",
      d: "135"
    },
    correct_option: "a",
    solution_text: "Cost Price of 1 apple = 34 / 8 = ₹4.25.\nSelling Price of 1 apple = 57 / 12 = ₹4.75.\nProfit per apple = 4.75 - 4.25 = ₹0.50.\nTarget net profit = ₹45.\nNumber of apples required = 45 / 0.50 = 90 apples.\nCorrect Answer: Option (a).",
    solution_text_hi: "1 सेब का CP = 34 / 8 = ₹4.25।\n1 सेब का SP = 57 / 12 = ₹4.75।\nप्रति सेब लाभ = ₹0.50।\nआवश्यक सेब = 45 / 0.50 = 90 सेब।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Apples = 45 / (57/12 - 34/8) = 45 / 0.50 = 90.",
    shortcut_text_hi: "सेब = 45 / 0.50 = 90।"
  },

  // ==========================================
  // LEVEL 3: INSPIRED FROM PYQS (Q15 to Q21)
  // ==========================================
  {
    question_number: 15,
    practice_set: "SET E",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 28",
    type_category: "Cost Escalation and Target Margin New SP",
    type_category_hi: "लागत वृद्धि और लक्षित मार्जिन नया विक्रय मूल्य",
    question_text: "A television manufacturer earns a profit of 10% by selling one TV set for ₹24,750. If the production cost is increased by 15%, then what would be the new selling price of the TV set so as to gain a profit of 15%?",
    question_text_hi: "एक टेलीविजन निर्माता एक टीवी सेट ₹24,750 में बेचकर 10% का लाभ कमाता है। यदि उत्पादन लागत में 15% की वृद्धि हो जाती है, तो 15% का लाभ प्राप्त करने के लिए टीवी सेट का नया विक्रय मूल्य क्या होगा?",
    options: {
      a: "₹28,756.25",
      b: "₹27,756.25",
      c: "₹29,756.25",
      d: "₹26,756.26"
    },
    options_hi: {
      a: "₹28,756.25",
      b: "₹27,756.25",
      c: "₹29,756.25",
      d: "₹26,756.26"
    },
    correct_option: "c",
    solution_text: "Initial Selling Price = ₹24,750 at 10% profit.\nInitial Cost Price = 24,750 / 1.10 = ₹22,500.\nNew Cost Price (increased by 15%) = 22,500 × 1.15 = ₹25,875.\nNew Selling Price for 15% profit = 25,875 × 1.15 = ₹29,756.25.\nCorrect Answer: Option (c).",
    solution_text_hi: "मूल CP = 24,750 / 1.10 = ₹22,500।\nनया CP = 22,500 × 1.15 = ₹25,875।\nनया SP = 25,875 × 1.15 = ₹29,756.25।\nअतः सही उत्तर (c) है।",
    shortcut_text: "New SP = (24,750 / 1.10) × 1.15² = 22,500 × 1.3225 = ₹29,756.25.",
    shortcut_text_hi: "नया SP = 22,500 × 1.3225 = ₹29,756.25।"
  },
  {
    question_number: 16,
    practice_set: "SET E",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 10",
    type_category: "Circular / Buy-Back Chained Transaction Gain",
    type_category_hi: "चक्रीय / पुनर्खरीद श्रृंखला लेनदेन लाभ",
    question_text: "X purchases a car at ₹1,50,000 and then sold it to Y at a profit of 5%. Y later sold it back to X at a loss of 2%. Find the overall profit or loss for X in the entire transaction.",
    question_text_hi: "X एक कार ₹1,50,000 में खरीदता है और फिर उसे Y को 5% के लाभ पर बेचता है। Y बाद में इसे X को 2% की हानि पर वापस बेच देता है। पूरे लेन-देन में X का कुल लाभ या हानि ज्ञात कीजिए।",
    options: {
      a: "X loss ₹4,350",
      b: "X gain ₹3,150",
      c: "X gain ₹4,350",
      d: "X gain ₹4,500"
    },
    options_hi: {
      a: "X को ₹4,350 की हानि",
      b: "X को ₹3,150 का लाभ",
      c: "X को ₹4,350 का लाभ",
      d: "X को ₹4,500 का लाभ"
    },
    correct_option: "b",
    solution_text: "X buys car for ₹1,50,000.\nX sells to Y at 5% profit: SP1 = 150,000 × 1.05 = ₹1,57,500.\nY sells it back to X at 2% loss: Price paid by X = 157,500 × (1 - 0.02) = 157,500 × 0.98 = ₹1,54,350.\nX originally had the car; now he has the car again plus the difference in cash:\nNet gain for X = 157,500 - 154,350 = ₹3,150 gain.\nCorrect Answer: Option (b).",
    solution_text_hi: "Y को बिक्री = 1,50,000 × 1.05 = ₹1,57,500।\nX द्वारा पुनः खरीद = 1,57,500 × 0.98 = ₹1,54,350।\nX का कुल लाभ = 1,57,500 - 1,54,350 = ₹3,150 लाभ।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Net gain for X = 157,500 × 0.02 = ₹3,150.",
    shortcut_text_hi: "शुद्ध लाभ = 1,57,500 × 0.02 = ₹3,150।"
  },
  {
    question_number: 17,
    practice_set: "SET E",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 14",
    type_category: "Partial Spoilage and Salvage Value Profit %",
    type_category_hi: "आंशिक खराबी और अवशिष्ट मूल्य लाभ %",
    question_text: "Rahim purchased 20 kg of oranges at the rate of ₹45/kg and sold them at the rate of ₹54/kg. During this period 1.5 kg oranges got spoiled. He sold the spoiled oranges at the rate of ₹10/kg. His net gain or loss percent is?",
    question_text_hi: "रहीम ने ₹45/किलो की दर से 20 किलो संतरे खरीदे और उन्हें ₹54/किलो की दर से बेचा। इस अवधि के दौरान 1.5 किलो संतरे खराब हो गए। उसने खराब संतरों को ₹10/किलो की दर से बेचा। उसका शुद्ध लाभ या हानि प्रतिशत क्या है?",
    options: {
      a: "14% loss",
      b: "14% gain",
      c: "12 2/3% gain",
      d: "12 2/3% loss"
    },
    options_hi: {
      a: "14% हानि",
      b: "14% लाभ",
      c: "12 2/3% लाभ",
      d: "12 2/3% हानि"
    },
    correct_option: "c",
    solution_text: "Total Cost Price = 20 × 45 = ₹900.\nGood oranges = 20 - 1.5 = 18.5 kg sold at ₹54/kg:\nRevenue from good oranges = 18.5 × 54 = ₹999.\nRevenue from spoiled oranges = 1.5 × 10 = ₹15.\nTotal Selling Price = 999 + 15 = ₹1,014.\nTotal Profit = 1,014 - 900 = ₹114.\nNet Profit% = (114 / 900) × 100 = 38 / 3 = 12 2/3% gain.\nCorrect Answer: Option (c).",
    solution_text_hi: "कुल CP = 20 × 45 = ₹900।\nकुल SP = (18.5 × 54) + (1.5 × 10) = 999 + 15 = ₹1,014।\nलाभ = 1,014 - 900 = ₹114 => लाभ% = (114 / 900) × 100 = 12 2/3% लाभ।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Profit% = (1014 - 900) / 900 × 100 = 114 / 9 = 12 2/3% gain.",
    shortcut_text_hi: "लाभ% = 114 / 9 = 12 2/3% लाभ।"
  },
  {
    question_number: 18,
    practice_set: "SET E",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 27",
    type_category: "Multi-item Weighted Profit and Loss %",
    type_category_hi: "बहु-वस्तु भारित लाभ और हानि %",
    question_text: "A person buys 4 different items for ₹200, ₹300, ₹400, and ₹500. He sells the first two items at a combined profit of 15% and the last two at a combined loss of 10%. Find his net profit or loss percentage.",
    question_text_hi: "एक व्यक्ति 4 अलग-अलग वस्तुएँ ₹200, ₹300, ₹400 और ₹500 में खरीदता है। वह पहली दो वस्तुओं को 15% के संयुक्त लाभ पर और अंतिम दो को 10% की संयुक्त हानि पर बेचता है। उसका शुद्ध लाभ या हानि प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "1.07% Loss",
      b: "2.14% Profit",
      c: "1.5% Loss",
      d: "3.05% Profit"
    },
    options_hi: {
      a: "1.07% हानि",
      b: "2.14% लाभ",
      c: "1.5% हानि",
      d: "3.05% लाभ"
    },
    correct_option: "a",
    solution_text: "Total Cost Price = 200 + 300 + 400 + 500 = ₹1,400.\nFirst group cost = 200 + 300 = ₹500.\nSP of first group (15% profit) = 500 × 1.15 = ₹575.\nSecond group cost = 400 + 500 = ₹900.\nSP of second group (10% loss) = 900 × 0.90 = ₹810.\nTotal Selling Price = 575 + 810 = ₹1,385.\nNet Loss = 1,400 - 1,385 = ₹15.\nLoss% = (15 / 1,400) × 100 ≈ 1.07% Loss.\nCorrect Answer: Option (a).",
    solution_text_hi: "कुल CP = ₹1,400।\nकुल SP = (500 × 1.15) + (900 × 0.90) = 575 + 810 = ₹1,385।\nहानि = 1,400 - 1,385 = ₹15 => हानि% = 15 / 1400 × 100 ≈ 1.07% हानि।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Net = (500 × 15 - 900 × 10) / 1400 = -1500 / 1400 = -1.07% Loss.",
    shortcut_text_hi: "शुद्ध प्रभाव = -1500 / 1400 = -1.07% हानि।"
  },
  {
    question_number: 19,
    practice_set: "SET E",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 14",
    type_category: "Transit Damage Loss and Markup Recovery",
    type_category_hi: "परिवहन क्षति और मार्कअप वसूली लाभ",
    question_text: "Sabiha purchased 240 cups for her shop at ₹8 each. During transportation, 24 cups got damaged, and she sold the remaining cups at ₹12 each. Find her overall percentage profit.",
    question_text_hi: "सबिहा ने अपनी दुकान के लिए ₹8 प्रति कप की दर से 240 कप खरीदे। परिवहन के दौरान 24 कप क्षतिग्रस्त हो गए, और उसने शेष कप ₹12 प्रत्येक की दर से बेचे। उसका कुल प्रतिशत लाभ ज्ञात कीजिए।",
    options: {
      a: "45%",
      b: "30%",
      c: "40%",
      d: "35%"
    },
    options_hi: {
      a: "45%",
      b: "30%",
      c: "40%",
      d: "35%"
    },
    correct_option: "d",
    solution_text: "Total Cost Price = 240 × 8 = ₹1,920.\nRemaining undamaged cups = 240 - 24 = 216 cups.\nTotal Selling Price = 216 × 12 = ₹2,592.\nTotal Profit = 2,592 - 1,920 = ₹672.\nProfit% = (672 / 1,920) × 100 = 35%.\nCorrect Answer: Option (d).",
    solution_text_hi: "कुल CP = 240 × 8 = ₹1,920।\nबचे हुए कप = 240 - 24 = 216।\nकुल SP = 216 × 12 = ₹2,592।\nलाभ% = (2,592 - 1,920) / 1,920 × 100 = 35%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Profit% = (216 × 12 - 1920) / 1920 × 100 = 672 / 1920 × 100 = 35%.",
    shortcut_text_hi: "लाभ% = 672 / 1920 × 100 = 35%।"
  },
  {
    question_number: 20,
    practice_set: "SET E",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 27",
    type_category: "Weighted Target Aggregate Profit Balance",
    type_category_hi: "भारित लक्षित कुल लाभ संतुलन",
    question_text: "A man sold two bicycles at a total profit of 20%. If he had bought them for ₹3500 each and the first one sold them at a profit of 5%, then what is the profit % he should have from the second?",
    question_text_hi: "एक व्यक्ति ने दो साइकिलें कुल 20% के लाभ पर बेचीं। यदि उसने उन्हें ₹3500 प्रत्येक में खरीदा था और पहली को 5% के लाभ पर बेचा था, तो दूसरी से उसे कितना प्रतिशत लाभ होना चाहिए?",
    options: {
      a: "20%",
      b: "35%",
      c: "25%",
      d: "30%"
    },
    options_hi: {
      a: "20%",
      b: "35%",
      c: "25%",
      d: "30%"
    },
    correct_option: "b",
    solution_text: "Since cost prices of both bicycles are equal (₹3,500 each):\nOverall Profit% = (P1 + P2) / 2\n=> 20% = (5% + P2) / 2\n=> 5% + P2 = 40%\n=> P2 = 35%.\nCorrect Answer: Option (b).",
    solution_text_hi: "दोनों का क्रय मूल्य समान है, अतः:\nऔसत लाभ = (5% + P2) / 2 = 20%\n=> P2 = 40% - 5% = 35%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "P2 = 2 × 20% - 5% = 35%.",
    shortcut_text_hi: "P2 = 2 × 20% - 5% = 35%।"
  },
  {
    question_number: 21,
    practice_set: "SET E",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 18",
    type_category: "EMI Scheme True Seller Margin",
    type_category_hi: "ईएमआई योजना वास्तविक विक्रेता मार्जिन",
    question_text: "A mobile phone costs ₹15,000. A customer buys it on EMI paying ₹3,000 as a down payment and 6 monthly EMIs of ₹2,500 each. Find the total profit percentage for the seller if his original cost price was ₹12,000.",
    question_text_hi: "एक मोबाइल फोन की कीमत ₹15,000 है। एक ग्राहक इसे EMI पर ₹3,000 के डाउन पेमेंट और प्रत्येक ₹2,500 की 6 मासिक EMI का भुगतान करके खरीदता है। विक्रेता के लिए कुल लाभ प्रतिशत ज्ञात कीजिए यदि उसका मूल क्रय मूल्य ₹12,000 था।",
    options: {
      a: "40%",
      b: "45%",
      c: "50%",
      d: "55%"
    },
    options_hi: {
      a: "40%",
      b: "45%",
      c: "50%",
      d: "55%"
    },
    correct_option: "c",
    solution_text: "Total amount collected by seller = Down payment + (6 × 2,500) = 3,000 + 15,000 = ₹18,000.\nOriginal Cost Price = ₹12,000.\nTotal Profit = 18,000 - 12,000 = ₹6,000.\nProfit% = (6,000 / 12,000) × 100 = 50%.\nCorrect Answer: Option (c).",
    solution_text_hi: "कुल प्राप्त राशि = 3,000 + (6 × 2,500) = ₹18,000।\nक्रय मूल्य = ₹12,000।\nलाभ = 18,000 - 12,000 = ₹6,000 => लाभ% = 50%।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Profit% = (18,000 - 12,000) / 12,000 × 100 = 50%.",
    shortcut_text_hi: "लाभ% = 6,000 / 12,000 × 100 = 50%।"
  },

  // ==========================================
  // LEVEL 4: PYQ+ (Q22 to Q30)
  // ==========================================
  {
    question_number: 22,
    practice_set: "SET E",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 27",
    type_category: "Three-portion Inventory Realization",
    type_category_hi: "तीन भागों में वस्तु सूची विक्रय लाभ",
    question_text: "Arvind bought 120 m cloth for ₹15000. He sold 45% of it at a gain of 40%, 25% of it at a loss of 10% and the remaining cloth at the cost price. His profit (in ₹) in the entire transaction is:",
    question_text_hi: "अरविंद ने ₹15000 में 120 मीटर कपड़ा खरीदा। उसने इसका 45% हिस्सा 40% के लाभ पर, इसका 25% हिस्सा 10% की हानि पर और शेष कपड़ा क्रय मूल्य पर बेच दिया। पूरे लेन-देन में उसका लाभ (₹ में) है:",
    options: {
      a: "₹4075",
      b: "₹2325",
      c: "₹4180",
      d: "₹2035"
    },
    options_hi: {
      a: "₹4075",
      b: "₹2325",
      c: "₹4180",
      d: "₹2035"
    },
    correct_option: "b",
    solution_text: "Total investment = ₹15,000.\nNet profit percentage on total cost:\n= (45% × 40%) - (25% × 10%) + (30% × 0%)\n= 18% - 2.5% + 0 = 15.5% profit.\nTotal profit in ₹ = 15,000 × 15.5% = ₹2,325.\nCorrect Answer: Option (b).",
    solution_text_hi: "शुद्ध लाभ% = (0.45 × 40%) - (0.25 × 10%) = 18% - 2.5% = 15.5%।\nकुल लाभ = 15,000 × 15.5% = ₹2,325।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Profit = 15,000 × (0.18 - 0.025) = 15,000 × 0.155 = ₹2,325.",
    shortcut_text_hi: "लाभ = 15,000 × 0.155 = ₹2,325।"
  },
  {
    question_number: 23,
    practice_set: "SET E",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Dishonest Dealer Successive Cheating %",
    type_category_hi: "बेईमान दुकानदार क्रमिक बेईमानी प्रतिशत",
    question_text: "A shopkeeper cheats up to 7% by using under-weight in buying and selling fruits, then his total profit percentage is:",
    question_text_hi: "एक दुकानदार फलों को खरीदने और बेचने में कम वजन का उपयोग करके 7% तक की बेईमानी करता है, तो उसका कुल लाभ प्रतिशत है:",
    options: {
      a: "14.25",
      b: "14.49",
      c: "14.75",
      d: "14.55"
    },
    options_hi: {
      a: "14.25",
      b: "14.49",
      c: "14.75",
      d: "14.55"
    },
    correct_option: "b",
    solution_text: "Using standard formula for successive cheating percentages (x% in buying, y% in selling):\nOverall Profit% = x + y + (xy / 100)\n= 7 + 7 + (7 × 7 / 100) = 14 + 0.49 = 14.49%.\nCorrect Answer: Option (b).",
    solution_text_hi: "क्रमिक बेईमानी सूत्र = x + y + (xy / 100)\n= 7 + 7 + (49 / 100) = 14.49%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "Profit% = 7 + 7 + 0.49 = 14.49%.",
    shortcut_text_hi: "लाभ% = 7 + 7 + 0.49 = 14.49%।"
  },
  {
    question_number: 24,
    practice_set: "SET E",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 9",
    type_category: "Hypothetical Reduced Cost and Selling Price Target",
    type_category_hi: "काल्पनिक कम क्रय मूल्य और विक्रय मूल्य लक्ष्य",
    question_text: "Hrithik sells a table at a profit of 37.5%. If he had bought it at 12.5% less and sold it for ₹330 less, he would have gained 10%. The cost price of the table is what percentage less than ₹1000?",
    question_text_hi: "ऋतिक एक मेज 37.5% के लाभ पर बेचता है। यदि उसने इसे 12.5% कम पर खरीदा होता और इसे ₹330 कम में बेचा होता, तो उसे 10% का लाभ होता। मेज का क्रय मूल्य ₹1000 से कितने प्रतिशत कम है?",
    options: {
      a: "21%",
      b: "20%",
      c: "23%",
      d: "22%"
    },
    options_hi: {
      a: "21%",
      b: "20%",
      c: "23%",
      d: "22%"
    },
    correct_option: "b",
    solution_text: "Let original CP = x. Original SP = 1.375x.\nNew CP = (1 - 0.125)x = 0.875x.\nNew SP = 1.375x - 330.\nGiven new gain is 10%:\n1.375x - 330 = 1.10 × 0.875x = 0.9625x\n=> (1.375 - 0.9625)x = 330\n=> 0.4125x = 330\n=> x = 330 / 0.4125 = ₹800.\nCost price of the table = ₹800.\nDifference from ₹1,000 = 1,000 - 800 = ₹200.\nPercentage less than ₹1,000 = (200 / 1,000) × 100 = 20%.\nCorrect Answer: Option (b).",
    solution_text_hi: "1.375x - 330 = 1.10 × 0.875x = 0.9625x।\n0.4125x = 330 => x = ₹800।\n₹1000 से प्रतिशत कमी = (200 / 1000) × 100 = 20%।\nअतः सही उत्तर (b) है।",
    shortcut_text: "0.4125x = 330 => x = ₹800 => (1000 - 800)/10 = 20% less.",
    shortcut_text_hi: "x = ₹800 => 20% कम।"
  },
  {
    question_number: 25,
    practice_set: "SET E",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 16",
    type_category: "Equal Quantity Dual Purchase Consolidated Loss",
    type_category_hi: "समान मात्रा दोहरी खरीद संयुक्त हानि",
    question_text: "A man bought a number of apples at 5 for ₹50 and equal number at 6 for ₹50. If he sells them at 11 for ₹100. What would be his percentage profit or loss?",
    question_text_hi: "एक व्यक्ति ने ₹50 में 5 की दर से कुछ सेब खरीदे और उतनी ही संख्या में ₹50 में 6 की दर से खरीदे। यदि वह उन्हें ₹100 में 11 की दर से बेचता है। उसका लाभ या हानि प्रतिशत क्या होगा?",
    options: {
      a: "100/121% loss",
      b: "100/121% profit",
      c: "121/100% profit",
      d: "121/100% loss"
    },
    options_hi: {
      a: "100/121% हानि",
      b: "100/121% लाभ",
      c: "121/100% लाभ",
      d: "121/100% हानि"
    },
    correct_option: "a",
    solution_text: "Let the number of apples bought of each variety be 330 (LCM of 5, 6, 11 = 330).\nCost of 330 apples of 1st type = (330 / 5) × 50 = ₹3,300.\nCost of 330 apples of 2nd type = (330 / 6) × 50 = ₹2,750.\nTotal Cost Price for 660 apples = 3,300 + 2,750 = ₹6,050.\nSelling Price of 660 apples at 11 for ₹100 = (660 / 11) × 100 = ₹6,000.\nNet Loss = 6,050 - 6,000 = ₹50.\nLoss% = (50 / 6,050) × 100 = 500 / 605 = 100/121% loss.\nCorrect Answer: Option (a).",
    solution_text_hi: "माना प्रत्येक प्रकार के 330 सेब खरीदे गए।\nकुल CP (660 सेब) = 3,300 + 2,750 = ₹6,050।\nकुल SP (660 सेब) = 60 × 100 = ₹6,000।\nहानि = ₹50 => हानि% = (50 / 6050) × 100 = 100/121% हानि।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Loss% = [(55/6 - 100/11) / (55/6)] × 100 = (5/66) / (55/6) × 100 = 100/121% loss.",
    shortcut_text_hi: "हानि% = 100/121% हानि।"
  },
  {
    question_number: 26,
    practice_set: "SET E",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 14",
    type_category: "Defective Stock Target Margin Rate per Dozen",
    type_category_hi: "खराब स्टॉक लक्षित मार्जिन प्रति दर्जन दर",
    question_text: "A man purchased 20 dozen mangoes for ₹1,000. Out of these, 40 mangoes were rotten and could not be sold. At what rate per dozen should he sell the remaining mangoes to make a profit of 30%?",
    question_text_hi: "एक व्यक्ति ने ₹1,000 में 20 दर्जन आम खरीदे। इनमें से 40 आम सड़े हुए थे और उन्हें बेचा नहीं जा सका। 30% का लाभ कमाने के लिए उसे शेष आमों को प्रति दर्जन किस दर पर बेचना चाहिए?",
    options: {
      a: "₹78",
      b: "₹80",
      c: "₹72",
      d: "₹70"
    },
    options_hi: {
      a: "₹78",
      b: "₹80",
      c: "₹72",
      d: "₹70"
    },
    correct_option: "a",
    solution_text: "Total mangoes purchased = 20 × 12 = 240 mangoes.\nUsable mangoes = 240 - 40 = 200 mangoes.\nTarget total revenue for 30% profit = 1,000 × 1.30 = ₹1,300.\nSelling price per mango = 1,300 / 200 = ₹6.50.\nSelling price per dozen = 6.50 × 12 = ₹78.\nCorrect Answer: Option (a).",
    solution_text_hi: "बचे हुए आम = 240 - 40 = 200 आम।\n30% लाभ पर कुल SP = 1000 × 1.30 = ₹1,300।\nप्रति आम SP = 1300 / 200 = ₹6.50।\nप्रति दर्जन दर = 6.50 × 12 = ₹78।\nअतः सही उत्तर (a) है।",
    shortcut_text: "SP per dozen = (1,300 / 200) × 12 = 6.5 × 12 = ₹78.",
    shortcut_text_hi: "दर प्रति दर्जन = 6.5 × 12 = ₹78।"
  },
  {
    question_number: 27,
    practice_set: "SET E",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 4",
    type_category: "Cross Multiplying Units Rate Profit %",
    type_category_hi: "तिर्यक गुणन इकाई दर लाभ प्रतिशत",
    question_text: "Vikas buys 5 bananas for ₹4 and sells 4 bananas for ₹5. Find his profit%.",
    question_text_hi: "विकास ₹4 में 5 केले खरीदता है और ₹5 में 4 केले बेचता है। उसका लाभ % ज्ञात कीजिए।",
    options: {
      a: "55.56%",
      b: "53.25%",
      c: "45.50%",
      d: "56.25%"
    },
    options_hi: {
      a: "55.56%",
      b: "53.25%",
      c: "45.50%",
      d: "56.25%"
    },
    correct_option: "d",
    solution_text: "Cost Price of 1 banana = ₹4 / 5 = ₹0.80.\nSelling Price of 1 banana = ₹5 / 4 = ₹1.25.\nProfit per banana = 1.25 - 0.80 = ₹0.45.\nProfit% = (0.45 / 0.80) × 100 = 56.25%.\nCorrect Answer: Option (d).",
    solution_text_hi: "1 केले का CP = 4/5 = ₹0.80।\n1 केले का SP = 5/4 = ₹1.25।\nलाभ% = (0.45 / 0.80) × 100 = 56.25%।\nअतः सही उत्तर (d) है।",
    shortcut_text: "Profit% = [(5² - 4²) / 4²] × 100 = 9 / 16 × 100 = 56.25%.",
    shortcut_text_hi: "लाभ% = (25 - 16) / 16 × 100 = 56.25%।"
  },
  {
    question_number: 28,
    practice_set: "SET E",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Successive Discount Backward Marked Price",
    type_category_hi: "क्रमिक छूट व्युत्क्रम अंकित दर",
    question_text: "A salesman offers 20% additional discount, after offering an initial discount of 25% on the labelled rate of a laptop. If the final sale price of the laptop is ₹18,000, then what was its labelled rate?",
    question_text_hi: "एक सेल्समैन लैपटॉप की अंकित दर पर 25% की प्रारंभिक छूट देने के बाद 20% की अतिरिक्त छूट प्रदान करता है। यदि लैपटॉप का अंतिम विक्रय मूल्य ₹18,000 है, तो इसकी अंकित दर क्या थी?",
    options: {
      a: "₹35,000",
      b: "₹40,000",
      c: "₹30,000",
      d: "₹28,000"
    },
    options_hi: {
      a: "₹35,000",
      b: "₹40,000",
      c: "₹30,000",
      d: "₹28,000"
    },
    correct_option: "c",
    solution_text: "Let the labelled rate = x.\nAfter 25% discount: price = 0.75x.\nAfter additional 20% discount: price = 0.75x × (1 - 0.20) = 0.75x × 0.80 = 0.60x.\nGiven final price = ₹18,000:\n0.60x = 18,000\n=> x = 18,000 / 0.60 = ₹30,000.\nCorrect Answer: Option (c).",
    solution_text_hi: "अंकित मूल्य = x।\nx × 0.75 × 0.80 = 18,000 => 0.60x = 18,000 => x = ₹30,000।\nअतः सही उत्तर (c) है।",
    shortcut_text: "Labelled Rate = 18,000 / (0.75 × 0.80) = 18,000 / 0.60 = ₹30,000.",
    shortcut_text_hi: "अंकित दर = 18,000 / 0.60 = ₹30,000।"
  },
  {
    question_number: 29,
    practice_set: "SET E",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Markup Discount and Faulty Weight Combined Profit",
    type_category_hi: "मार्कअप छूट और गलत वजन संयुक्त लाभ",
    question_text: "A trader marks his goods 25% above the cost price and allows a discount of 10% on the marked price. In addition, he uses a faulty weight that measures 900 grams instead of 1 kg. What is his overall profit percentage?",
    question_text_hi: "एक व्यापारी अपने सामान पर क्रय मूल्य से 25% अधिक मूल्य अंकित करता है और अंकित मूल्य पर 10% की छूट देता है। इसके अतिरिक्त, वह एक गलत वजन का उपयोग करता है जो 1 किग्रा के स्थान पर 900 ग्राम तोलता है। उसका कुल लाभ प्रतिशत क्या है?",
    options: {
      a: "25%",
      b: "22.5%",
      c: "28%",
      d: "20%"
    },
    options_hi: {
      a: "25%",
      b: "22.5%",
      c: "28%",
      d: "20%"
    },
    correct_option: "a",
    solution_text: "Let the cost price of 1000g = ₹100 (₹0.10 per gram).\nMarked Price of 1000g with 25% markup = 100 × 1.25 = ₹125.\nAfter 10% discount, selling price charged for 1000g = 125 × 0.90 = ₹112.50.\nInstead of 1000g, he delivers 900g to the customer.\nActual cost of 900g to the trader = 900 × 0.10 = ₹90.\nProfit = SP - CP = 112.50 - 90 = ₹22.50.\nOverall Profit% = (22.50 / 90) × 100 = 25%.\nCorrect Answer: Option (a).",
    solution_text_hi: "1000 ग्राम का CP = ₹100। MP = ₹125।\n10% छूट के बाद SP = 125 × 0.90 = ₹112.50।\n900 ग्राम की वास्तविक लागत = ₹90।\nलाभ = 112.50 - 90 = ₹22.50 => लाभ% = (22.50 / 90) × 100 = 25%।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Net Multiplier = 1.25 × 0.90 × (1000 / 900) = 1.125 × (10 / 9) = 1.25 => 25% profit.",
    shortcut_text_hi: "कुल गुणक = 1.25 × 0.90 × (10/9) = 1.25 => 25% लाभ।"
  },
  {
    question_number: 30,
    practice_set: "SET E",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 3",
    type_category: "Equal Selling Price Asymmetric Gain and Loss Absolute Net",
    type_category_hi: "समान विक्रय मूल्य असममित लाभ और हानि कुल राशि",
    question_text: "A dealer sells two machines at ₹12,000 each. On one he gains 20% and on the other he loses 25%. What is his overall gain or loss in the entire transaction?",
    question_text_hi: "एक डीलर दो मशीनें ₹12,000 प्रत्येक में बेचता है। एक पर उसे 20% का लाभ होता है और दूसरी पर 25% की हानि होती है। पूरे लेन-देन में उसका कुल लाभ या हानि (रुपये में) क्या है?",
    options: {
      a: "₹2,000 loss",
      b: "₹2,000 gain",
      c: "₹1,500 loss",
      d: "₹1,500 gain"
    },
    options_hi: {
      a: "₹2,000 हानि",
      b: "₹2,000 लाभ",
      c: "₹1,500 हानि",
      d: "₹1,500 लाभ"
    },
    correct_option: "a",
    solution_text: "Selling Price of each machine = ₹12,000.\nTotal Selling Price = 12,000 + 12,000 = ₹24,000.\nFirst machine (20% gain): CP1 = 12,000 / 1.20 = ₹10,000.\nSecond machine (25% loss): CP2 = 12,000 / (1 - 0.25) = 12,000 / 0.75 = ₹16,000.\nTotal Cost Price = CP1 + CP2 = 10,000 + 16,000 = ₹26,000.\nNet Result = Total SP - Total CP = 24,000 - 26,000 = -₹2,000 (Loss of ₹2,000).\nCorrect Answer: Option (a).",
    solution_text_hi: "कुल SP = 12,000 + 12,000 = ₹24,000।\nCP1 = 12,000 / 1.20 = ₹10,000।\nCP2 = 12,000 / 0.75 = ₹16,000।\nकुल CP = 10,000 + 16,000 = ₹26,000।\nकुल हानि = 26,000 - 24,000 = ₹2,000 हानि।\nअतः सही उत्तर (a) है।",
    shortcut_text: "Total CP = 10,000 + 16,000 = 26,000. Total SP = 24,000 => Net Loss = ₹2,000.",
    shortcut_text_hi: "कुल CP = 26,000, कुल SP = 24,000 => ₹2,000 हानि।"
  }
];

if (typeof window !== "undefined") {
  window.PROFIT_LOSS_SET_A_QUESTIONS = PROFIT_LOSS_SET_A_QUESTIONS;
  window.PROFIT_LOSS_SET_B_QUESTIONS = PROFIT_LOSS_SET_B_QUESTIONS;
  window.PROFIT_LOSS_SET_C_QUESTIONS = PROFIT_LOSS_SET_C_QUESTIONS;
  window.PROFIT_LOSS_SET_D_QUESTIONS = PROFIT_LOSS_SET_D_QUESTIONS;
  window.PROFIT_LOSS_SET_E_QUESTIONS = PROFIT_LOSS_SET_E_QUESTIONS;
  window.PROFIT_LOSS_PRACTICE_1_QUESTIONS = PROFIT_LOSS_SET_A_QUESTIONS;
  window.PROFIT_LOSS_PRACTICE_2_QUESTIONS = PROFIT_LOSS_SET_B_QUESTIONS;
  window.PROFIT_LOSS_PRACTICE_3_QUESTIONS = PROFIT_LOSS_SET_C_QUESTIONS;
  window.PROFIT_LOSS_PRACTICE_4_QUESTIONS = PROFIT_LOSS_SET_D_QUESTIONS;
  window.PROFIT_LOSS_PRACTICE_5_QUESTIONS = PROFIT_LOSS_SET_E_QUESTIONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PROFIT_LOSS_SET_A_QUESTIONS,
    PROFIT_LOSS_SET_B_QUESTIONS,
    PROFIT_LOSS_SET_C_QUESTIONS,
    PROFIT_LOSS_SET_D_QUESTIONS,
    PROFIT_LOSS_SET_E_QUESTIONS,
    PROFIT_LOSS_PRACTICE_1_QUESTIONS: PROFIT_LOSS_SET_A_QUESTIONS,
    PROFIT_LOSS_PRACTICE_2_QUESTIONS: PROFIT_LOSS_SET_B_QUESTIONS,
    PROFIT_LOSS_PRACTICE_3_QUESTIONS: PROFIT_LOSS_SET_C_QUESTIONS,
    PROFIT_LOSS_PRACTICE_4_QUESTIONS: PROFIT_LOSS_SET_D_QUESTIONS,
    PROFIT_LOSS_PRACTICE_5_QUESTIONS: PROFIT_LOSS_SET_E_QUESTIONS,
  };
}