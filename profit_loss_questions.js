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
    type_category_hi: "à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤”à¤° à¤à¤•à¤² à¤›à¥‚à¤Ÿ",
    question_text: "A shopkeeper marks an article at 25% above the cost price. If he gives a discount of 10% on the marked price, find his profit percentage.",
    question_text_hi: "à¤à¤• à¤¦à¥à¤•à¤¾à¤¨à¤¦à¤¾à¤° à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤ªà¤° à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¥‡ 25% à¤…à¤§à¤¿à¤• à¤®à¥‚à¤²à¥à¤¯ à¤…à¤‚à¤•à¤¿à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤µà¤¹ à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° 10% à¤•à¥€ à¤›à¥‚à¤Ÿ à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤‰à¤¸à¤•à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
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
    solution_text: "Let Cost Price (CP) = â‚¹100.\nMarked Price (MP) = 100 + 25 = â‚¹125.\nDiscount = 10% of 125 = â‚¹12.5.\nSelling Price (SP) = 125 - 12.5 = â‚¹112.5.\nProfit = SP - CP = 112.5 - 100 = â‚¹12.5.\nProfit% = (12.5 / 100) Ã— 100 = 12.5%.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (CP) = â‚¹100à¥¤\nà¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ (MP) = 100 + 25 = â‚¹125à¥¤\nà¤›à¥‚à¤Ÿ = 125 à¤•à¤¾ 10% = â‚¹12.5à¥¤\nà¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (SP) = 125 - 12.5 = â‚¹112.5à¥¤\nà¤²à¤¾à¤­ = SP - CP = 112.5 - 100 = â‚¹12.5à¥¤\nà¤²à¤¾à¤­% = 12.5%à¥¤ à¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "Formula: Net Change = x + y + (xy / 100)\n= +25 - 10 - (25 Ã— 10 / 100) = 15 - 2.5 = 12.5%.",
    shortcut_text_hi: "à¤¸à¥‚à¤¤à¥à¤°: à¤•à¥à¤² à¤ªà¥à¤°à¤­à¤¾à¤µ = x + y + (xy / 100)\n= +25 - 10 - 2.5 = 12.5% à¤²à¤¾à¤­à¥¤"
  },
  {
    question_number: 2,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "SP of x = CP of y",
    type_category_hi: "x à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ = y à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯",
    question_text: "The selling price of 32 items is equal to the cost price of 38 items. Find the profit percentage.",
    question_text_hi: "32 à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ 38 à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‡ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤¹à¥ˆà¥¤ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
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
    solution_text: "Given: 32 Ã— SP = 38 Ã— CP\n=> SP / CP = 38 / 32 = 19 / 16\nProfit per unit = 19 - 16 = 3 units\nProfit% = (Profit / CP) Ã— 100\n= (3 / 16) Ã— 100 = 18.75%.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆ: 32 Ã— SP = 38 Ã— CP\n=> SP / CP = 38 / 32 = 19 / 16\nà¤²à¤¾à¤­ = 19 - 16 = 3 à¤‡à¤•à¤¾à¤ˆ\nà¤²à¤¾à¤­% = (3 / 16) Ã— 100 = 18.75%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "SP/CP = 38/32 = 19/16.\nFractional Profit = 3/16 = 18.75%.",
    shortcut_text_hi: "SP/CP = 38/32 = 19/16à¥¤\nà¤­à¤¿à¤¨à¥à¤¨ à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤²à¤¾à¤­ = 3/16 = 18.75%à¥¤"
  },
  {
    question_number: 3,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 3",
    type_category: "Cost Price Change with Constant SP",
    type_category_hi: "à¤¸à¤®à¤¾à¤¨ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤°à¤¿à¤µà¤°à¥à¤¤à¤¨",
    question_text: "The initial profit percentage on the sale of an item was 74%. If the cost price of the item went up by 50%, but the selling price remained the same, what would be the new profit percentage?",
    question_text_hi: "à¤•à¤¿à¤¸à¥€ à¤µà¤¸à¥à¤¤à¥ à¤•à¥€ à¤¬à¤¿à¤•à¥à¤°à¥€ à¤ªà¤° à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ 74% à¤¥à¤¾à¥¤ à¤¯à¤¦à¤¿ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ 50% à¤¬à¤¢à¤¼ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ, à¤²à¥‡à¤•à¤¿à¤¨ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¤®à¤¾à¤¨ à¤°à¤¹à¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤¨à¤¯à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤—à¤¾?",
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
    solution_text: "Let initial Cost Price (CPâ‚) = â‚¹100.\nInitial Profit = 74% => Initial Selling Price (SP) = â‚¹174.\nNew Cost Price (CPâ‚‚) = 100 + 50% of 100 = â‚¹150.\nSelling price remains constant at â‚¹174.\nNew Profit = SP - CPâ‚‚ = 174 - 150 = â‚¹24.\nNew Profit% = (24 / 150) Ã— 100 = 16%.\nCorrect Answer: Option (b).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (CPâ‚) = â‚¹100à¥¤\nà¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• à¤²à¤¾à¤­ = 74% => à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (SP) = â‚¹174à¥¤\nà¤¨à¤¯à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (CPâ‚‚) = 100 + 50 = â‚¹150à¥¤\nà¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¤®à¤¾à¤¨ à¤°à¤¹à¤¤à¤¾ à¤¹à¥ˆ = â‚¹174à¥¤\nà¤¨à¤¯à¤¾ à¤²à¤¾à¤­ = 174 - 150 = â‚¹24à¥¤\nà¤¨à¤¯à¤¾ à¤²à¤¾à¤­% = (24 / 150) Ã— 100 = 16%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (b) à¤¹à¥ˆà¥¤",
    shortcut_text: "CP: 100 -> 150; SP = 174.\nProfit = 24 on 150 => 24/150 = 4/25 = 16%.",
    shortcut_text_hi: "CP: 100 -> 150; SP = 174à¥¤\nà¤²à¤¾à¤­ = 150 à¤ªà¤° 24 => (24/150) Ã— 100 = 16%à¥¤"
  },
  {
    question_number: 4,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Marked Price Profit vs Discount",
    type_category_hi: "à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤²à¤¾à¤­ à¤¬à¤¨à¤¾à¤® à¤›à¥‚à¤Ÿ",
    question_text: "A retailer would have made a profit of 18% if he sold an article at its marked price. If he allowed a discount of 10% on the marked price, what would his actual profit on that article have been?",
    question_text_hi: "à¤à¤• à¤–à¥à¤¦à¤°à¤¾ à¤µà¤¿à¤•à¥à¤°à¥‡à¤¤à¤¾ à¤•à¥‹ 18% à¤•à¤¾ à¤²à¤¾à¤­ à¤¹à¥‹à¤¤à¤¾ à¤¯à¤¦à¤¿ à¤µà¤¹ à¤•à¤¿à¤¸à¥€ à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ à¤‰à¤¸à¤•à¥‡ à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¤¾à¥¤ à¤¯à¤¦à¤¿ à¤‰à¤¸à¤¨à¥‡ à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° 10% à¤•à¥€ à¤›à¥‚à¤Ÿ à¤¦à¥€, à¤¤à¥‹ à¤‰à¤¸ à¤µà¤¸à¥à¤¤à¥ à¤ªà¤° à¤‰à¤¸à¤•à¤¾ à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤²à¤¾à¤­ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤—à¤¾?",
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
    solution_text: "Let Cost Price (CP) = â‚¹100.\nAt marked price, profit is 18%, so Marked Price (MP) = â‚¹118.\nDiscount allowed = 10% on MP.\nActual SP = 118 Ã— (1 - 0.10) = 118 Ã— 0.9 = â‚¹106.2.\nActual Profit = Actual SP - CP = 106.2 - 100 = â‚¹6.2.\nActual Profit% = 6.2%.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (CP) = â‚¹100à¥¤\nà¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤° 18% à¤²à¤¾à¤­ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ, à¤…à¤¤à¤ƒ à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ (MP) = â‚¹118à¥¤\nà¤›à¥‚à¤Ÿ = 10%à¥¤\nà¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• SP = 118 Ã— 0.90 = â‚¹106.2à¥¤\nà¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤²à¤¾à¤­ = 106.2 - 100 = â‚¹6.2 (6.2%)à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "CP = 100, MP = 118.\nSP = 118 Ã— 0.9 = 106.2 => 6.2% profit.",
    shortcut_text_hi: "CP = 100, MP = 118à¥¤ SP = 118 Ã— 0.9 = 106.2 => 6.2% à¤²à¤¾à¤­à¥¤"
  },
  {
    question_number: 5,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Successive Discounts & Net Gain",
    type_category_hi: "à¤•à¥à¤°à¤®à¤¾à¤—à¤¤ à¤›à¥‚à¤Ÿ à¤”à¤° à¤¶à¥à¤¦à¥à¤§ à¤²à¤¾à¤­",
    question_text: "A trader purchases a table for â‚¹1,500 and sells it after allowing two successive discounts of 10% and 20% on its marked price of â‚¹2,500. What is his profit or loss percentage?",
    question_text_hi: "à¤à¤• à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤°à¥€ â‚¹1,500 à¤®à¥‡à¤‚ à¤à¤• à¤®à¥‡à¤œ à¤–à¤°à¥€à¤¦à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤‰à¤¸à¤•à¥‡ â‚¹2,500 à¤•à¥‡ à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° 10% à¤”à¤° 20% à¤•à¥€ à¤¦à¥‹ à¤•à¥à¤°à¤®à¤¾à¤—à¤¤ à¤›à¥‚à¤Ÿ à¤¦à¥‡à¤•à¤° à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤‰à¤¸à¤•à¤¾ à¤²à¤¾à¤­ à¤¯à¤¾ à¤¹à¤¾à¤¨à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
    options: {
      a: "20% Profit",
      b: "15% Profit",
      c: "20% Loss",
      d: "25% Profit"
    },
    options_hi: {
      a: "20% à¤²à¤¾à¤­",
      b: "15% à¤²à¤¾à¤­",
      c: "20% à¤¹à¤¾à¤¨à¤¿",
      d: "25% à¤²à¤¾à¤­"
    },
    correct_option: "a",
    solution_text: "Cost Price (CP) = â‚¹1,500.\nMarked Price (MP) = â‚¹2,500.\nSingle equivalent discount for 10% and 20%:\nD_eq = 10 + 20 - (10 Ã— 20 / 100) = 30 - 2 = 28%.\nSelling Price (SP) = 2,500 Ã— (100 - 28)% = 2,500 Ã— 0.72 = â‚¹1,800.\nProfit = SP - CP = 1,800 - 1,500 = â‚¹300.\nProfit% = (300 / 1500) Ã— 100 = 20%.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (CP) = â‚¹1,500à¥¤ à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ (MP) = â‚¹2,500à¥¤\n10% à¤”à¤° 20% à¤•à¥€ à¤à¤•à¤² à¤¸à¤®à¤¤à¥à¤²à¥à¤¯ à¤›à¥‚à¤Ÿ:\nD = 10 + 20 - (200 / 100) = 28%à¥¤\nà¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (SP) = 2500 Ã— (1 - 0.28) = 2500 Ã— 0.72 = â‚¹1,800à¥¤\nà¤²à¤¾à¤­ = 1800 - 1500 = â‚¹300à¥¤\nà¤²à¤¾à¤­% = (300 / 1500) Ã— 100 = 20% à¤²à¤¾à¤­à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "Net discount = 28%.\nSP = 2500 Ã— 0.72 = 1800.\nProfit% = (300 / 1500) Ã— 100 = 20% Profit.",
    shortcut_text_hi: "à¤¸à¤®à¤¤à¥à¤²à¥à¤¯ à¤›à¥‚à¤Ÿ = 28%à¥¤ SP = 2500 Ã— 0.72 = 1800à¥¤\nà¤²à¤¾à¤­% = (300 / 1500) Ã— 100 = 20% à¤²à¤¾à¤­à¥¤"
  },
  {
    question_number: 6,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Markup and Reduction on Bill",
    type_category_hi: "à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤”à¤° à¤¬à¤¿à¤² à¤›à¥‚à¤Ÿ",
    question_text: "A tradesman marks his goods 25% above the cost price and allows his customers a 12% reduction on their bills. What percentage profit does he make?",
    question_text_hi: "à¤à¤• à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤°à¥€ à¤…à¤ªà¤¨à¥‡ à¤®à¤¾à¤² à¤ªà¤° à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¥‡ 25% à¤…à¤§à¤¿à¤• à¤…à¤‚à¤•à¤¿à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤…à¤ªà¤¨à¥‡ à¤—à¥à¤°à¤¾à¤¹à¤•à¥‹à¤‚ à¤•à¥‹ à¤‰à¤¨à¤•à¥‡ à¤¬à¤¿à¤²à¥‹à¤‚ à¤ªà¤° 12% à¤•à¥€ à¤›à¥‚à¤Ÿ à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤µà¤¹ à¤•à¤¿à¤¤à¤¨à¥‡ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤²à¤¾à¤­ à¤•à¤®à¤¾à¤¤à¤¾ à¤¹à¥ˆ?",
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
    solution_text: "Let CP = â‚¹100.\nMarked Price (MP) = 100 + 25 = â‚¹125.\nDiscount allowed = 12% on â‚¹125.\nDiscount Amount = 125 Ã— (12 / 100) = â‚¹15.\nSelling Price (SP) = 125 - 15 = â‚¹110.\nProfit% = [(110 - 100) / 100] Ã— 100 = 10%.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ CP = â‚¹100à¥¤\nà¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ (MP) = â‚¹125à¥¤\nà¤›à¥‚à¤Ÿ = 125 à¤•à¤¾ 12% = â‚¹15à¥¤\nà¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (SP) = 125 - 15 = â‚¹110à¥¤\nà¤²à¤¾à¤­% = 110 - 100 = 10%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "Net% = 25 - 12 - (25 Ã— 12 / 100) = 13 - 3 = 10%.",
    shortcut_text_hi: "à¤¶à¥à¤¦à¥à¤§ à¤²à¤¾à¤­% = 25 - 12 - 3 = 10%à¥¤"
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
    type_category_hi: "à¤²à¤¾à¤­ à¤”à¤° à¤¹à¤¾à¤¨à¤¿ % à¤•à¥‡ à¤¬à¥€à¤š à¤•à¤¾ à¤…à¤‚à¤¤à¤°",
    question_text: "The difference between 12% gain and 4% loss on the sale of an item was â‚¹28. What was the cost price of the item?",
    question_text_hi: "à¤µà¤¸à¥à¤¤à¥ à¤•à¥€ à¤¬à¤¿à¤•à¥à¤°à¥€ à¤ªà¤° 12% à¤²à¤¾à¤­ à¤”à¤° 4% à¤¹à¤¾à¤¨à¤¿ à¤•à¥‡ à¤¬à¥€à¤š à¤•à¤¾ à¤…à¤‚à¤¤à¤° â‚¹28 à¤¥à¤¾à¥¤ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¥à¤¾?",
    options: {
      a: "â‚¹175",
      b: "â‚¹189",
      c: "â‚¹196",
      d: "â‚¹168"
    },
    options_hi: {
      a: "â‚¹175",
      b: "â‚¹189",
      c: "â‚¹196",
      d: "â‚¹168"
    },
    correct_option: "a",
    solution_text: "Let Cost Price = CP.\nSPâ‚ at 12% gain = 1.12 CP.\nSPâ‚‚ at 4% loss = 0.96 CP.\nDifference = 1.12 CP - 0.96 CP = 0.16 CP.\n0.16 CP = â‚¹28\nCP = 28 / 0.16 = (28 Ã— 100) / 16 = â‚¹175.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ = CPà¥¤\n12% à¤²à¤¾à¤­ à¤ªà¤° SPâ‚ = 1.12 CPà¥¤\n4% à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° SPâ‚‚ = 0.96 CPà¥¤\nà¤…à¤‚à¤¤à¤° = 12% - (-4%) = 16%à¥¤\n16% = â‚¹28\n100% = (28 / 16) Ã— 100 = â‚¹175à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "Net% difference = 12% + 4% = 16%.\nCP = (28 / 16) Ã— 100 = â‚¹175.",
    shortcut_text_hi: "à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤…à¤‚à¤¤à¤° = 12% + 4% = 16% = â‚¹28 => CP = (28/16) Ã— 100 = â‚¹175à¥¤"
  },
  {
    question_number: 8,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 5",
    type_category: "Hypothetical CP & SP Changes",
    type_category_hi: "à¤•à¤¾à¤²à¥à¤ªà¤¨à¤¿à¤• à¤•à¥à¤°à¤¯ à¤”à¤° à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤°à¤¿à¤µà¤°à¥à¤¤à¤¨",
    question_text: "A shopkeeper sells an article at 20% profit. If he had bought the article at 10% less and sold it at â‚¹18 more than the previous selling price, he would have made 40% profit. What is the original cost price of the article?",
    question_text_hi: "à¤à¤• à¤¦à¥à¤•à¤¾à¤¨à¤¦à¤¾à¤° à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ 20% à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤‰à¤¸à¤¨à¥‡ à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ 10% à¤•à¤® à¤ªà¤° à¤–à¤°à¥€à¤¦à¤¾ à¤¹à¥‹à¤¤à¤¾ à¤”à¤° à¤‡à¤¸à¥‡ à¤ªà¤¿à¤›à¤²à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¥‡ â‚¹18 à¤…à¤§à¤¿à¤• à¤ªà¤° à¤¬à¥‡à¤šà¤¾ à¤¹à¥‹à¤¤à¤¾, à¤¤à¥‹ à¤‰à¤¸à¥‡ 40% à¤²à¤¾à¤­ à¤¹à¥‹à¤¤à¤¾à¥¤ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤®à¥‚à¤² à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
    options: {
      a: "â‚¹350",
      b: "â‚¹320",
      c: "â‚¹300",
      d: "â‚¹280"
    },
    options_hi: {
      a: "â‚¹350",
      b: "â‚¹320",
      c: "â‚¹300",
      d: "â‚¹280"
    },
    correct_option: "c",
    solution_text: "Let original CP = 100x.\nOriginal SP = 120x.\nNew CP = 100x - 10% = 90x.\nNew SP = 120x + 18.\nGiven: New Profit = 40%\n=> New SP = 1.40 Ã— New CP\n=> 120x + 18 = 1.40 Ã— 90x = 126x\n=> 126x - 120x = 18\n=> 6x = 18 => x = 3.\nOriginal CP = 100x = 100 Ã— 3 = â‚¹300.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤®à¥‚à¤² CP = 100xà¥¤\nà¤®à¥‚à¤² SP = 120xà¥¤\nà¤¨à¤¯à¤¾ CP = 90xà¥¤\nà¤¨à¤¯à¤¾ SP = 120x + 18à¥¤\nà¤ªà¥à¤°à¤¶à¥à¤¨à¤¾à¤¨à¥à¤¸à¤¾à¤°: à¤¨à¤¯à¤¾ SP = 90x Ã— 1.40 = 126xà¥¤\n126x - 120x = 18 => 6x = 18 => x = 3à¥¤\nà¤®à¥‚à¤² CP = 100x = â‚¹300à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "126% - 120% = 6% = â‚¹18.\n100% = (18 / 6) Ã— 100 = â‚¹300.",
    shortcut_text_hi: "à¤…à¤‚à¤¤à¤°: 126% - 120% = 6% = â‚¹18 => CP = (18/6) Ã— 100 = â‚¹300à¥¤"
  },
  {
    question_number: 9,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 2",
    type_category: "Loss Equal to Cost Price of Articles",
    type_category_hi: "à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‡ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤¹à¤¾à¤¨à¤¿",
    question_text: "Chandrasekhar sold 12 identical articles for a total of â‚¹420, incurring a loss equal to the cost price of 7 such articles. The cost price of 1 such article is:",
    question_text_hi: "à¤šà¤¨à¥à¤¦à¥à¤°à¤¶à¥‡à¤–à¤° à¤¨à¥‡ â‚¹420 à¤•à¥‡ à¤•à¥à¤² à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° 12 à¤¸à¤®à¤¾à¤¨ à¤µà¤¸à¥à¤¤à¥à¤à¤‚ à¤¬à¥‡à¤šà¥€à¤‚, à¤œà¤¿à¤¸à¤¸à¥‡ à¤‰à¤¸à¥‡ à¤à¤¸à¥€ 7 à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‡ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤¹à¤¾à¤¨à¤¿ à¤¹à¥à¤ˆà¥¤ à¤à¤¸à¥€ 1 à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¹à¥ˆ:",
    options: {
      a: "â‚¹84",
      b: "â‚¹48",
      c: "â‚¹60",
      d: "â‚¹35"
    },
    options_hi: {
      a: "â‚¹84",
      b: "â‚¹48",
      c: "â‚¹60",
      d: "â‚¹35"
    },
    correct_option: "a",
    solution_text: "Let CP of 1 article = c.\nTotal CP of 12 articles = 12c.\nTotal SP of 12 articles = â‚¹420.\nLoss = 12c - 420.\nGiven: Loss = CP of 7 articles = 7c.\n=> 12c - 420 = 7c\n=> 5c = 420\n=> c = 420 / 5 = â‚¹84.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ 1 à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ CP = cà¥¤\n12 à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¤¾ à¤•à¥à¤² CP = 12cà¥¤ SP = â‚¹420à¥¤\nà¤¹à¤¾à¤¨à¤¿ = 12c - 420 = 7cà¥¤\n=> 5c = 420 => c = â‚¹84à¥¤\nà¤…à¤¤à¤ƒ 1 à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ â‚¹84 à¤¹à¥ˆà¥¤ à¤µà¤¿à¤•à¤²à¥à¤ª (a)à¥¤",
    shortcut_text: "Net units paying for SP: 12 - 7 = 5 units = â‚¹420.\n1 unit CP = 420 / 5 = â‚¹84.",
    shortcut_text_hi: "à¤ªà¥à¤°à¤­à¤¾à¤µà¥€ à¤µà¤¸à¥à¤¤à¥à¤à¤‚ = 12 - 7 = 5 à¤‡à¤•à¤¾à¤ˆ = â‚¹420 => 1 à¤‡à¤•à¤¾à¤ˆ CP = 420 / 5 = â‚¹84à¥¤"
  },
  {
    question_number: 10,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Simultaneous Equations of Articles",
    type_category_hi: "à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‡ à¤¯à¥à¤—à¤ªà¤¤ à¤¸à¤®à¥€à¤•à¤°à¤£",
    question_text: "The cost of 10 chairs is equal to that of 4 tables. The cost of 15 chairs and 2 tables is equal to â‚¹2,000. The cost of a table is:",
    question_text_hi: "10 à¤•à¥à¤°à¥à¤¸à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤•à¥€à¤®à¤¤ 4 à¤®à¥‡à¤œà¥‹à¤‚ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤¹à¥ˆà¥¤ 15 à¤•à¥à¤°à¥à¤¸à¤¿à¤¯à¥‹à¤‚ à¤”à¤° 2 à¤®à¥‡à¤œà¥‹à¤‚ à¤•à¥€ à¤•à¥€à¤®à¤¤ â‚¹2,000 à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤¹à¥ˆà¥¤ à¤à¤• à¤®à¥‡à¤œ à¤•à¥€ à¤•à¥€à¤®à¤¤ à¤¹à¥ˆ:",
    options: {
      a: "â‚¹100",
      b: "â‚¹500",
      c: "â‚¹200",
      d: "â‚¹250"
    },
    options_hi: {
      a: "â‚¹100",
      b: "â‚¹500",
      c: "â‚¹200",
      d: "â‚¹250"
    },
    correct_option: "d",
    solution_text: "Let cost of 1 chair = C and cost of 1 table = T.\nGiven: 10 C = 4 T => C = (4 / 10) T = 0.4 T.\nAlso given: 15 C + 2 T = â‚¹2,000.\nSubstitute C = 0.4 T:\n15 Ã— (0.4 T) + 2 T = 2,000\n6 T + 2 T = 2,000\n8 T = 2,000 => T = 2,000 / 8 = â‚¹250.\nCost of 1 table = â‚¹250.\nCorrect Answer: Option (d).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤•à¥à¤°à¥à¤¸à¥€ = C à¤”à¤° à¤®à¥‡à¤œ = Tà¥¤\n10 C = 4 T => C = 0.4 Tà¥¤\n15 C + 2 T = 2000\n15(0.4 T) + 2 T = 2000 => 8 T = 2000 => T = â‚¹250à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (d) à¤¹à¥ˆà¥¤",
    shortcut_text: "15 Chairs = 6 Tables (since 5 Chairs = 2 Tables).\n6 Tables + 2 Tables = 8 Tables = â‚¹2,000 => 1 Table = â‚¹250.",
    shortcut_text_hi: "10 C = 4 T => 15 C = 6 Tà¥¤\n6 T + 2 T = 8 T = â‚¹2,000 => 1 T = â‚¹250à¥¤"
  },
  {
    question_number: 11,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Multi-item Split Profit Equating",
    type_category_hi: "à¤¬à¤¹à¥-à¤µà¤¸à¥à¤¤à¥ à¤µà¤¿à¤­à¤¾à¤œà¤¨ à¤²à¤¾à¤­ à¤¸à¤®à¥€à¤•à¤°à¤£",
    question_text: "Sarita buys two old Samsung phones and three Mi mobile phones for â‚¹40,200. If she sells the Samsung phones at a 10% profit and the Mi Phones at a 20% profit then her total profit is â‚¹5,640. The cost price of the Mi Phone is:",
    question_text_hi: "à¤¸à¤°à¤¿à¤¤à¤¾ â‚¹40,200 à¤®à¥‡à¤‚ à¤¦à¥‹ à¤ªà¥à¤°à¤¾à¤¨à¥‡ à¤¸à¥ˆà¤®à¤¸à¤‚à¤— à¤«à¥‹à¤¨ à¤”à¤° à¤¤à¥€à¤¨ à¤à¤®à¤†à¤ˆ à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤«à¥‹à¤¨ à¤–à¤°à¥€à¤¦à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤µà¤¹ à¤¸à¥ˆà¤®à¤¸à¤‚à¤— à¤«à¥‹à¤¨ à¤•à¥‹ 10% à¤²à¤¾à¤­ à¤ªà¤° à¤”à¤° à¤à¤®à¤†à¤ˆ à¤«à¥‹à¤¨ à¤•à¥‹ 20% à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¥€ à¤¹à¥ˆ à¤¤à¥‹ à¤‰à¤¸à¤•à¤¾ à¤•à¥à¤² à¤²à¤¾à¤­ â‚¹5,640 à¤¹à¥ˆà¥¤ à¤à¤®à¤†à¤ˆ à¤«à¥‹à¤¨ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¹à¥ˆ:",
    options: {
      a: "â‚¹5,400",
      b: "â‚¹1,200",
      c: "â‚¹4,400",
      d: "â‚¹5,000"
    },
    options_hi: {
      a: "â‚¹5,400",
      b: "â‚¹1,200",
      c: "â‚¹4,400",
      d: "â‚¹5,000"
    },
    correct_option: "a",
    solution_text: "Let CP of 1 Samsung phone = S and CP of 1 Mi phone = M.\nTotal CP: 2S + 3M = â‚¹40,200  --- (Equation 1)\nTotal Profit: 10% of (2S) + 20% of (3M) = â‚¹5,640\n=> 0.2S + 0.6M = 5,640\nMultiply by 10: 2S + 6M = 56,400  --- (Equation 2)\nSubtracting Equation 1 from Equation 2:\n(2S + 6M) - (2S + 3M) = 56,400 - 40,200\n3M = 16,200 => M = 16,200 / 3 = â‚¹5,400.\nCost price of each Mi phone = â‚¹5,400.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤¸à¥ˆà¤®à¤¸à¤‚à¤— = S, à¤à¤®à¤†à¤ˆ = Mà¥¤\n2S + 3M = â‚¹40,200  --- (1)\nà¤²à¤¾à¤­: 0.2S + 0.6M = â‚¹5,640\n10 à¤¸à¥‡ à¤—à¥à¤£à¤¾ à¤•à¤°à¤¨à¥‡ à¤ªà¤°: 2S + 6M = â‚¹56,400  --- (2)\n(2) à¤®à¥‡à¤‚ à¤¸à¥‡ (1) à¤˜à¤Ÿà¤¾à¤¨à¥‡ à¤ªà¤°: 3M = 16,200 => M = â‚¹5,400à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "2S + 6M = 56,400 and 2S + 3M = 40,200.\n3M = 16,200 => 1 Mi Phone = â‚¹5,400.",
    shortcut_text_hi: "2S + 6M = 56,400 à¤¤à¤¥à¤¾ 2S + 3M = 40,200 => 3M = 16,200 => M = â‚¹5,400à¥¤"
  },
  {
    question_number: 12,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 7",
    type_category: "Exchange of Profit and Loss Percentages",
    type_category_hi: "à¤²à¤¾à¤­ à¤”à¤° à¤¹à¤¾à¤¨à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤•à¤¾ à¤ªà¤¾à¤°à¤¸à¥à¤ªà¤°à¤¿à¤• à¤µà¤¿à¤¨à¤¿à¤®à¤¯",
    question_text: "A person sells his table at a profit of 12 1/2% and chair at a loss of 8 1/3% but on the whole he gains â‚¹25. On the other hand, if he sells the table at a loss of 8 1/3% and the chair at a profit of 12 1/2% then he neither gains nor loses. Find the cost price of the table.",
    question_text_hi: "à¤à¤• à¤µà¥à¤¯à¤•à¥à¤¤à¤¿ à¤…à¤ªà¤¨à¥€ à¤®à¥‡à¤œ à¤•à¥‹ 12 1/2% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤”à¤° à¤•à¥à¤°à¥à¤¸à¥€ à¤•à¥‹ 8 1/3% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆ, à¤²à¥‡à¤•à¤¿à¤¨ à¤•à¥à¤² à¤®à¤¿à¤²à¤¾à¤•à¤° à¤‰à¤¸à¥‡ â‚¹25 à¤•à¤¾ à¤²à¤¾à¤­ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¦à¥‚à¤¸à¤°à¥€ à¤“à¤°, à¤¯à¤¦à¤¿ à¤µà¤¹ à¤®à¥‡à¤œ à¤•à¥‹ 8 1/3% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤”à¤° à¤•à¥à¤°à¥à¤¸à¥€ à¤•à¥‹ 12 1/2% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤‰à¤¸à¥‡ à¤¨ à¤¤à¥‹ à¤²à¤¾à¤­ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤¨ à¤¹à¥€ à¤¹à¤¾à¤¨à¤¿à¥¤ à¤®à¥‡à¤œ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
    options: {
      a: "â‚¹360",
      b: "â‚¹350",
      c: "â‚¹380",
      d: "â‚¹370"
    },
    options_hi: {
      a: "â‚¹360",
      b: "â‚¹350",
      c: "â‚¹380",
      d: "â‚¹370"
    },
    correct_option: "a",
    solution_text: "Let CP of Table = T and CP of Chair = C.\nNote: 12 1/2% = 1/8 and 8 1/3% = 1/12.\nCase 2: Loss on Table = Gain on Chair (Neither gain nor loss)\n=> (1/12) T = (1/8) C\n=> 2T = 3C => C = (2/3) T.\nCase 1: (1/8) T - (1/12) C = â‚¹25\nSubstitute C = (2/3) T:\n(1/8) T - (1/12) Ã— (2/3) T = 25\n(1/8) T - (1/18) T = 25\nLCM(8, 18) = 72.\n(9T - 4T) / 72 = 25\n5T / 72 = 25 => T = (25 Ã— 72) / 5 = 5 Ã— 72 = â‚¹360.\nCost price of the table = â‚¹360.\nCorrect Answer: Option (a).",
    solution_text_hi: "12 1/2% = 1/8, 8 1/3% = 1/12à¥¤\nà¤¸à¥à¤¥à¤¿à¤¤à¤¿ 2: (1/12) T = (1/8) C => C = (2/3) Tà¥¤\nà¤¸à¥à¤¥à¤¿à¤¤à¤¿ 1: (1/8) T - (1/12) C = 25\n(1/8) T - (1/18) T = 25 => 5T / 72 = 25 => T = â‚¹360à¥¤\nà¤…à¤¤à¤ƒ à¤®à¥‡à¤œ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ â‚¹360 à¤¹à¥ˆà¥¤ à¤µà¤¿à¤•à¤²à¥à¤ª (a)à¥¤",
    shortcut_text: "From Case 2: T : C = (1/8) : (1/12) = 12 : 8 = 3 : 2.\nProfit = (1/8)(3x) - (1/12)(2x) = 3x/8 - x/6 = 5x/24 = 25 => x = 120.\nT = 3x = 3 Ã— 120 = â‚¹360.",
    shortcut_text_hi: "T : C = 3 : 2à¥¤ 3x/8 - 2x/12 = 5x/24 = 25 => x = 120 => T = 3 Ã— 120 = â‚¹360à¥¤"
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
    type_category_hi: "à¤µà¤¾à¤‚à¤›à¤¿à¤¤ à¤²à¤¾à¤­ à¤•à¥‡ à¤²à¤¿à¤ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤°à¤¿à¤µà¤°à¥à¤¤à¤¨",
    question_text: "By selling an item for â‚¹4,125, A gains 10%. At what price should he sell the item in order to gain 18%?",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ â‚¹4,125 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤° A à¤•à¥‹ 10% à¤•à¤¾ à¤²à¤¾à¤­ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤ 18% à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤¸à¥‡ à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ à¤•à¤¿à¤¸ à¤•à¥€à¤®à¤¤ à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤?",
    options: {
      a: "â‚¹4,450",
      b: "â‚¹4,425",
      c: "â‚¹4,400",
      d: "â‚¹4,510"
    },
    options_hi: {
      a: "â‚¹4,450",
      b: "â‚¹4,425",
      c: "â‚¹4,400",
      d: "â‚¹4,510"
    },
    correct_option: "b",
    solution_text: "Given: SPâ‚ = â‚¹4,125 at 10% profit.\nCP = SPâ‚ / (1 + 0.10) = 4,125 / 1.10 = â‚¹3,750.\nRequired Profit = 18%.\nRequired SPâ‚‚ = CP Ã— (1 + 0.18) = 3,750 Ã— 1.18 = â‚¹4,425.\nCorrect Answer: Option (b).",
    solution_text_hi: "à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆ: 10% à¤²à¤¾à¤­ à¤ªà¤° SPâ‚ = â‚¹4,125à¥¤\nCP = 4125 / 1.10 = â‚¹3,750à¥¤\n18% à¤²à¤¾à¤­ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤­à¥€à¤·à¥à¤Ÿ SP = 3750 Ã— 1.18 = â‚¹4,425à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (b) à¤¹à¥ˆà¥¤",
    shortcut_text: "SPâ‚‚ = (SPâ‚ / 110) Ã— 118 = (4125 / 110) Ã— 118 = 37.5 Ã— 118 = â‚¹4,425.",
    shortcut_text_hi: "SPâ‚‚ = (4125 / 110) Ã— 118 = 37.5 Ã— 118 = â‚¹4,425à¥¤"
  },
  {
    question_number: 14,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 8",
    type_category: "Reversal from Loss to High Profit",
    type_category_hi: "à¤¹à¤¾à¤¨à¤¿ à¤¸à¥‡ à¤‰à¤šà¥à¤š à¤²à¤¾à¤­ à¤®à¥‡à¤‚ à¤°à¥‚à¤ªà¤¾à¤‚à¤¤à¤°à¤£",
    question_text: "The owner loses 20% when he sells a plot for â‚¹19,50,000. At what price must he sell the plot in order to gain a profit of 20%?",
    question_text_hi: "à¤œà¤¬ à¤®à¤¾à¤²à¤¿à¤• à¤à¤• à¤ªà¥à¤²à¥‰à¤Ÿ à¤•à¥‹ â‚¹19,50,000 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆ à¤¤à¥‹ à¤‰à¤¸à¥‡ 20% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆà¥¤ 20% à¤•à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤¸à¥‡ à¤ªà¥à¤²à¥‰à¤Ÿ à¤•à¥‹ à¤•à¤¿à¤¸ à¤•à¥€à¤®à¤¤ à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤?",
    options: {
      a: "â‚¹22,50,000",
      b: "â‚¹21,00,000",
      c: "â‚¹29,25,000",
      d: "â‚¹25,95,000"
    },
    options_hi: {
      a: "â‚¹22,50,000",
      b: "â‚¹21,00,000",
      c: "â‚¹29,25,000",
      d: "â‚¹25,95,000"
    },
    correct_option: "c",
    solution_text: "At 20% loss, SP = 80% of CP = â‚¹19,50,000.\nCP = 19,50,000 / 0.80 = â‚¹24,37,500.\nFor 20% profit, Required SP = 120% of CP\n= 24,37,500 Ã— 1.20 = â‚¹29,25,000.\nCorrect Answer: Option (c).",
    solution_text_hi: "20% à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° SP = CP à¤•à¤¾ 80% = â‚¹19,50,000à¥¤\nCP = 19,50,000 / 0.80 = â‚¹24,37,500à¥¤\n20% à¤²à¤¾à¤­ à¤•à¥‡ à¤²à¤¿à¤ SP = 24,37,500 Ã— 1.20 = â‚¹29,25,000à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "SPâ‚‚ = (19,50,000 / 80) Ã— 120 = 19,50,000 Ã— 1.5 = â‚¹29,25,000.",
    shortcut_text_hi: "à¤¸à¥€à¤§à¥‡ à¤…à¤¨à¥à¤ªà¤¾à¤¤ à¤¸à¥‡: 80% = 19,50,000 => 120% = 19,50,000 Ã— (120/80) = â‚¹29,25,000à¥¤"
  },
  {
    question_number: 15,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 4",
    type_category: "Profit/Loss Gap to Target Price",
    type_category_hi: "à¤²à¤¾à¤­/à¤¹à¤¾à¤¨à¤¿ à¤…à¤‚à¤¤à¤° à¤¸à¥‡ à¤…à¤­à¥€à¤·à¥à¤Ÿ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯",
    question_text: "The difference between a 12.5% profit and a 10.5% loss, while selling an item, is â‚¹161. What would the selling price of the item be if the intended profit is 19%?",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ à¤¬à¥‡à¤šà¤¤à¥‡ à¤¸à¤®à¤¯ 12.5% à¤²à¤¾à¤­ à¤”à¤° 10.5% à¤¹à¤¾à¤¨à¤¿ à¤•à¥‡ à¤¬à¥€à¤š à¤•à¤¾ à¤…à¤‚à¤¤à¤° â‚¹161 à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤…à¤ªà¥‡à¤•à¥à¤·à¤¿à¤¤ à¤²à¤¾à¤­ 19% à¤¹à¥ˆ à¤¤à¥‹ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤—à¤¾?",
    options: {
      a: "â‚¹833",
      b: "â‚¹798",
      c: "â‚¹817",
      d: "â‚¹850"
    },
    options_hi: {
      a: "â‚¹833",
      b: "â‚¹798",
      c: "â‚¹817",
      d: "â‚¹850"
    },
    correct_option: "a",
    solution_text: "Net percentage gap = 12.5% - (-10.5%) = 23% of CP.\nGiven: 23% of CP = â‚¹161\n=> CP = (161 / 23) Ã— 100 = 7 Ã— 100 = â‚¹700.\nTarget Profit = 19%.\nRequired SP = 700 Ã— (1 + 0.19) = 700 Ã— 1.19 = â‚¹833.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤…à¤‚à¤¤à¤° = 12.5% + 10.5% = 23%à¥¤\n23% = â‚¹161 => CP = (161 / 23) Ã— 100 = â‚¹700à¥¤\n19% à¤²à¤¾à¤­ à¤ªà¤° SP = 700 Ã— 1.19 = â‚¹833à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "23% = 161 => 1% = 7 => CP = 700.\nSP at 19% = 700 + 19Ã—7 = 700 + 133 = â‚¹833.",
    shortcut_text_hi: "23% = 161 => 1% = 7 => CP = 700à¥¤ SP = 700 + 133 = â‚¹833à¥¤"
  },
  {
    question_number: 16,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 2",
    type_category: "Profit Equal to SP of Items",
    type_category_hi: "à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤²à¤¾à¤­",
    question_text: "A shopkeeper bought 25 chairs from a manufacturer for â‚¹37,500 and sold them at a profit equal to the selling price of 5 chairs. Then the SP of one chair is:",
    question_text_hi: "à¤à¤• à¤¦à¥à¤•à¤¾à¤¨à¤¦à¤¾à¤° à¤¨à¥‡ à¤à¤• à¤¨à¤¿à¤°à¥à¤®à¤¾à¤¤à¤¾ à¤¸à¥‡ â‚¹37,500 à¤®à¥‡à¤‚ 25 à¤•à¥à¤°à¥à¤¸à¤¿à¤¯à¤¾à¤‚ à¤–à¤°à¥€à¤¦à¥€à¤‚ à¤”à¤° à¤‰à¤¨à¥à¤¹à¥‡à¤‚ 5 à¤•à¥à¤°à¥à¤¸à¤¿à¤¯à¥‹à¤‚ à¤•à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤š à¤¦à¤¿à¤¯à¤¾à¥¤ à¤¤à¥‹ à¤à¤• à¤•à¥à¤°à¥à¤¸à¥€ à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¹à¥ˆ:",
    options: {
      a: "â‚¹1,875",
      b: "â‚¹1,200",
      c: "â‚¹1,500",
      d: "â‚¹1,250"
    },
    options_hi: {
      a: "â‚¹1,875",
      b: "â‚¹1,200",
      c: "â‚¹1,500",
      d: "â‚¹1,250"
    },
    correct_option: "a",
    solution_text: "Let SP of 1 chair = S.\nTotal CP of 25 chairs = â‚¹37,500.\nTotal SP of 25 chairs = 25S.\nProfit = Total SP - Total CP = 25S - 37,500.\nGiven: Profit = SP of 5 chairs = 5S.\n=> 25S - 37,500 = 5S\n=> 20S = 37,500\n=> S = 37,500 / 20 = â‚¹1,875.\nSP of one chair = â‚¹1,875.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ 1 à¤•à¥à¤°à¥à¤¸à¥€ à¤•à¤¾ SP = Sà¥¤\n25S - 37,500 = 5S => 20S = 37,500 => S = â‚¹1,875à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "Profit = 5 SP => 25 SP - 25 CP = 5 SP => 20 SP = 25 CP = 37,500.\nSP = 37,500 / 20 = â‚¹1,875.",
    shortcut_text_hi: "20 SP = 37,500 => SP = 37,500 / 20 = â‚¹1,875à¥¤"
  },
  {
    question_number: 17,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 4",
    type_category: "Difference in SP for Profit Conversion",
    type_category_hi: "à¤²à¤¾à¤­ à¤°à¥‚à¤ªà¤¾à¤‚à¤¤à¤°à¤£ à¤•à¥‡ à¤²à¤¿à¤ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤®à¥‡à¤‚ à¤…à¤‚à¤¤à¤°",
    question_text: "Pavan sold an item at a loss of 12.5%. If he could have sold it for â‚¹56 more, he would have made a profit of 22.5%. What should be the selling price of the item to make a profit of 25%?",
    question_text_hi: "à¤ªà¤µà¤¨ à¤¨à¥‡ à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ 12.5% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤¬à¥‡à¤šà¤¾à¥¤ à¤¯à¤¦à¤¿ à¤µà¤¹ à¤‡à¤¸à¥‡ â‚¹56 à¤…à¤§à¤¿à¤• à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¤à¤¾, à¤¤à¥‹ à¤‰à¤¸à¥‡ 22.5% à¤•à¤¾ à¤²à¤¾à¤­ à¤¹à¥‹à¤¤à¤¾à¥¤ 25% à¤•à¤¾ à¤²à¤¾à¤­ à¤•à¤®à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤?",
    options: {
      a: "â‚¹182",
      b: "â‚¹190",
      c: "â‚¹185",
      d: "â‚¹200"
    },
    options_hi: {
      a: "â‚¹182",
      b: "â‚¹190",
      c: "â‚¹185",
      d: "â‚¹200"
    },
    correct_option: "d",
    solution_text: "Net change in percentage = 22.5% - (-12.5%) = 35% of CP.\nGiven: 35% of CP = â‚¹56\n=> CP = (56 / 35) Ã— 100 = (8 / 5) Ã— 100 = â‚¹160.\nTo make a profit of 25%:\nRequired SP = 160 Ã— 1.25 = â‚¹200.\nCorrect Answer: Option (d).",
    solution_text_hi: "à¤•à¥à¤² à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤…à¤‚à¤¤à¤° = 22.5% - (-12.5%) = 35%à¥¤\n35% = â‚¹56 => CP = (56 / 35) Ã— 100 = â‚¹160à¥¤\n25% à¤²à¤¾à¤­ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤­à¥€à¤·à¥à¤Ÿ SP = 160 Ã— 1.25 = â‚¹200à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (d) à¤¹à¥ˆà¥¤",
    shortcut_text: "35% = 56 => 1% = 1.6 => CP = 160.\nSP at 25% profit = 160 Ã— 1.25 = â‚¹200.",
    shortcut_text_hi: "35% = 56 => CP = 160 => SP = 160 Ã— 1.25 = â‚¹200à¥¤"
  },
  {
    question_number: 18,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 9",
    type_category: "Weighted Average Profit on Portions",
    type_category_hi: "à¤­à¤¾à¤—à¥‹à¤‚ à¤ªà¤° à¤­à¤¾à¤°à¤¿à¤¤ à¤”à¤¸à¤¤ à¤²à¤¾à¤­",
    question_text: "A trader buys 60 bags of grain at the rate of â‚¹400 each. If he sells 18 bags at 8% profit. To get a total profit of 16.4% on 60 bags, at what rate should he sell the remaining bags?",
    question_text_hi: "à¤à¤• à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤°à¥€ â‚¹400 à¤ªà¥à¤°à¤¤à¤¿ à¤¬à¥ˆà¤— à¤•à¥€ à¤¦à¤° à¤¸à¥‡ à¤…à¤¨à¤¾à¤œ à¤•à¥‡ 60 à¤¬à¥ˆà¤— à¤–à¤°à¥€à¤¦à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤µà¤¹ 18 à¤¬à¥ˆà¤— 8% à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ 60 à¤¬à¥ˆà¤— à¤ªà¤° 16.4% à¤•à¤¾ à¤•à¥à¤² à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤¸à¥‡ à¤¶à¥‡à¤· à¤¬à¥ˆà¤— à¤•à¤¿à¤¸ à¤¦à¤° à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¥‡ à¤šà¤¾à¤¹à¤¿à¤?",
    options: {
      a: "â‚¹400",
      b: "â‚¹480",
      c: "â‚¹540",
      d: "â‚¹520"
    },
    options_hi: {
      a: "â‚¹400",
      b: "â‚¹480",
      c: "â‚¹540",
      d: "â‚¹520"
    },
    correct_option: "b",
    solution_text: "Total Cost Price = 60 Ã— 400 = â‚¹24,000.\nDesired Total Selling Price = 24,000 Ã— (1 + 0.164) = 24,000 Ã— 1.164 = â‚¹27,936.\nSP of first 18 bags = 18 Ã— 400 Ã— 1.08 = 7,200 Ã— 1.08 = â‚¹7,776.\nRemaining SP required for (60 - 18 = 42) bags = 27,936 - 7,776 = â‚¹20,160.\nRate per remaining bag = 20,160 / 42 = â‚¹480.\nCorrect Answer: Option (b).",
    solution_text_hi: "à¤•à¥à¤² CP = 60 Ã— 400 = â‚¹24,000à¥¤\nà¤•à¥à¤² à¤²à¤•à¥à¤·à¤¿à¤¤ SP = 24,000 Ã— 1.164 = â‚¹27,936à¥¤\n18 à¤¬à¥ˆà¤— à¤•à¤¾ SP = 18 Ã— 400 Ã— 1.08 = â‚¹7,776à¥¤\nà¤¶à¥‡à¤· 42 à¤¬à¥ˆà¤— à¤•à¤¾ SP = 27,936 - 7,776 = â‚¹20,160à¥¤\nà¤¦à¤° = 20,160 / 42 = â‚¹480 à¤ªà¥à¤°à¤¤à¤¿ à¤¬à¥ˆà¤—à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (b) à¤¹à¥ˆà¥¤",
    shortcut_text: "Ratio of bags = 18 : 42 = 3 : 7.\nOverall profit% = (3 Ã— 8% + 7 Ã— x%) / 10 = 16.4%\n=> 24 + 7x = 164 => 7x = 140 => x = 20% profit.\nRate = 400 Ã— 1.20 = â‚¹480.",
    shortcut_text_hi: "à¤…à¤¨à¥à¤ªà¤¾à¤¤ 18:42 = 3:7à¥¤ (3Ã—8 + 7x)/10 = 16.4 => 7x = 140 => x = 20%à¥¤ à¤¦à¤° = 400 Ã— 1.20 = â‚¹480à¥¤"
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
    type_category_hi: "à¤•à¥à¤°à¤®à¤¿à¤• à¤•à¥à¤°à¤¯-à¤µà¤¿à¤•à¥à¤°à¤¯ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨",
    question_text: "Himani bought a washing machine for â‚¹8,000 and spent â‚¹500 on its repairs. She sold it at 20% profit. With the money she got by selling it, she bought another washing machine and sold it at 10% loss. What is her overall profit or loss?",
    question_text_hi: "à¤¹à¤¿à¤®à¤¾à¤¨à¥€ à¤¨à¥‡ â‚¹8,000 à¤®à¥‡à¤‚ à¤à¤• à¤µà¤¾à¤¶à¤¿à¤‚à¤— à¤®à¤¶à¥€à¤¨ à¤–à¤°à¥€à¤¦à¥€ à¤”à¤° à¤‰à¤¸à¤•à¥€ à¤®à¤°à¤®à¥à¤®à¤¤ à¤ªà¤° â‚¹500 à¤–à¤°à¥à¤š à¤•à¤¿à¤à¥¤ à¤‰à¤¸à¤¨à¥‡ à¤‡à¤¸à¥‡ 20% à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¾à¥¤ à¤‡à¤¸à¥‡ à¤¬à¥‡à¤šà¤•à¤° à¤®à¤¿à¤²à¥‡ à¤ªà¥ˆà¤¸à¥‡ à¤¸à¥‡ à¤‰à¤¸à¤¨à¥‡ à¤à¤• à¤”à¤° à¤µà¤¾à¤¶à¤¿à¤‚à¤— à¤®à¤¶à¥€à¤¨ à¤–à¤°à¥€à¤¦à¥€ à¤”à¤° à¤‰à¤¸à¥‡ 10% à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤¬à¥‡à¤š à¤¦à¤¿à¤¯à¤¾à¥¤ à¤‰à¤¸à¤•à¤¾ à¤•à¥à¤² à¤²à¤¾à¤­ / à¤¹à¤¾à¤¨à¤¿ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
    options: {
      a: "Profit â‚¹640",
      b: "Loss â‚¹640",
      c: "Profit â‚¹680",
      d: "Loss â‚¹600"
    },
    options_hi: {
      a: "â‚¹640 à¤²à¤¾à¤­",
      b: "â‚¹640 à¤¹à¤¾à¤¨à¤¿",
      c: "â‚¹680 à¤²à¤¾à¤­",
      d: "â‚¹600 à¤¹à¤¾à¤¨à¤¿"
    },
    correct_option: "c",
    solution_text: "Total Cost Price 1 = 8,000 + 500 = â‚¹8,500.\nSelling Price 1 = 8,500 Ã— 1.20 = â‚¹10,200.\nCost Price 2 = â‚¹10,200.\nSelling Price 2 = 10,200 Ã— (1 - 0.10) = 10,200 Ã— 0.90 = â‚¹9,180.\nOverall Net Profit = Final SP - Initial CP = 9,180 - 8,500 = â‚¹680.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• CP = 8,000 + 500 = â‚¹8,500à¥¤\nSPâ‚ = 8,500 Ã— 1.20 = â‚¹10,200à¥¤\nCPâ‚‚ = â‚¹10,200à¥¤\nSPâ‚‚ = 10,200 Ã— 0.90 = â‚¹9,180à¥¤\nà¤•à¥à¤² à¤²à¤¾à¤­ = 9,180 - 8,500 = â‚¹680 (à¤²à¤¾à¤­)à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "Net factor = 1.20 Ã— 0.90 = 1.08.\nFinal amount = 8,500 Ã— 1.08 = â‚¹9,180.\nProfit = 9,180 - 8,500 = â‚¹680.",
    shortcut_text_hi: "à¤¶à¥à¤¦à¥à¤§ à¤—à¥à¤£à¤• = 1.20 Ã— 0.90 = 1.08à¥¤ à¤…à¤‚à¤¤à¤¿à¤® à¤°à¤¾à¤¶à¤¿ = 8500 Ã— 1.08 = 9180 => à¤²à¤¾à¤­ = â‚¹680à¥¤"
  },
  {
    question_number: 20,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 9",
    type_category: "Split Quantities at Differential Rates",
    type_category_hi: "à¤µà¤¿à¤­à¤¿à¤¨à¥à¤¨ à¤¦à¤°à¥‹à¤‚ à¤ªà¤° à¤®à¤¾à¤¤à¥à¤°à¤¾ à¤µà¤¿à¤­à¤¾à¤œà¤¨",
    question_text: "Arvind bought 120 m cloth for â‚¹15,000. He sold 45% of it at a gain of 40%, 25% of it at a loss of 10% and the remaining cloth at the cost price. His profit (in â‚¹) in the entire transaction is:",
    question_text_hi: "à¤…à¤°à¤µà¤¿à¤‚à¤¦ à¤¨à¥‡ â‚¹15,000 à¤®à¥‡à¤‚ 120 à¤®à¥€à¤Ÿà¤° à¤•à¤ªà¤¡à¤¼à¤¾ à¤–à¤°à¥€à¤¦à¤¾à¥¤ à¤‰à¤¸à¤¨à¥‡ à¤‡à¤¸à¤•à¤¾ 45% à¤¹à¤¿à¤¸à¥à¤¸à¤¾ 40% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤°, à¤‡à¤¸à¤•à¤¾ 25% à¤¹à¤¿à¤¸à¥à¤¸à¤¾ 10% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤”à¤° à¤¶à¥‡à¤· à¤•à¤ªà¤¡à¤¼à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤¬à¥‡à¤š à¤¦à¤¿à¤¯à¤¾à¥¤ à¤ªà¥‚à¤°à¥‡ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨ à¤®à¥‡à¤‚ à¤‰à¤¸à¤•à¤¾ à¤²à¤¾à¤­ (â‚¹ à¤®à¥‡à¤‚) à¤¹à¥ˆ:",
    options: {
      a: "â‚¹4,075",
      b: "â‚¹2,325",
      c: "â‚¹4,180",
      d: "â‚¹2,035"
    },
    options_hi: {
      a: "â‚¹4,075",
      b: "â‚¹2,325",
      c: "â‚¹4,180",
      d: "â‚¹2,035"
    },
    correct_option: "b",
    solution_text: "Total CP = â‚¹15,000.\nProfit from first portion (45% of stock at 40% gain):\nProfitâ‚ = 15,000 Ã— 0.45 Ã— 0.40 = â‚¹2,700.\nLoss from second portion (25% of stock at 10% loss):\nLossâ‚‚ = 15,000 Ã— 0.25 Ã— 0.10 = â‚¹375.\nProfit from remaining 30% sold at cost price = â‚¹0.\nNet Profit = 2,700 - 375 = â‚¹2,325.\nCorrect Answer: Option (b).",
    solution_text_hi: "à¤•à¥à¤² CP = â‚¹15,000à¥¤\n45% à¤­à¤¾à¤— à¤ªà¤° 40% à¤²à¤¾à¤­ = 15000 Ã— 0.45 Ã— 0.40 = â‚¹2,700à¥¤\n25% à¤­à¤¾à¤— à¤ªà¤° 10% à¤¹à¤¾à¤¨à¤¿ = 15000 Ã— 0.25 Ã— 0.10 = â‚¹375à¥¤\nà¤¶à¥‡à¤· 30% à¤ªà¤° à¤²à¤¾à¤­ = â‚¹0à¥¤\nà¤•à¥à¤² à¤²à¤¾à¤­ = 2,700 - 375 = â‚¹2,325à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (b) à¤¹à¥ˆà¥¤",
    shortcut_text: "Net profit% = (45% Ã— 40%) - (25% Ã— 10%) + 0 = 18% - 2.5% = 15.5%.\nProfit = 15,000 Ã— 15.5% = â‚¹2,325.",
    shortcut_text_hi: "à¤•à¥à¤² à¤²à¤¾à¤­% = 45%Ã—40% - 25%Ã—10% = 18% - 2.5% = 15.5% => 15000 à¤•à¤¾ 15.5% = â‚¹2,325à¥¤"
  },
  {
    question_number: 21,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 11",
    type_category: "Two Articles Sold at Same SP",
    type_category_hi: "à¤¸à¤®à¤¾à¤¨ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤¦à¥‹ à¤µà¤¸à¥à¤¤à¥à¤à¤‚",
    question_text: "A person bought articles A and B for a total of â‚¹2,312. He sold A at a loss of 16% and sold B at a gain of 20%. The selling prices of A and B were the same. What was the difference between the cost prices of A and B?",
    question_text_hi: "à¤à¤• à¤µà¥à¤¯à¤•à¥à¤¤à¤¿ à¤¨à¥‡ â‚¹2,312 à¤®à¥‡à¤‚ à¤µà¤¸à¥à¤¤à¥à¤à¤‚ A à¤”à¤° B à¤–à¤°à¥€à¤¦à¥€à¤‚à¥¤ à¤‰à¤¸à¤¨à¥‡ A à¤•à¥‹ 16% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤”à¤° B à¤•à¥‹ 20% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¾à¥¤ A à¤”à¤° B à¤•à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¤®à¤¾à¤¨ à¤¥à¥‡à¥¤ A à¤”à¤° B à¤•à¥‡ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‡ à¤¬à¥€à¤š à¤•à¤¾ à¤…à¤‚à¤¤à¤° à¤•à¥à¤¯à¤¾ à¤¥à¤¾?",
    options: {
      a: "â‚¹408",
      b: "â‚¹428",
      c: "â‚¹420",
      d: "â‚¹416"
    },
    options_hi: {
      a: "â‚¹408",
      b: "â‚¹428",
      c: "â‚¹420",
      d: "â‚¹416"
    },
    correct_option: "a",
    solution_text: "Given: SP_A = SP_B\n=> CP_A Ã— (1 - 0.16) = CP_B Ã— (1 + 0.20)\n=> 0.84 CP_A = 1.20 CP_B\n=> CP_A / CP_B = 1.20 / 0.84 = 120 / 84 = 10 / 7.\nSum of ratio parts = 10 + 7 = 17 parts.\n17 parts = â‚¹2,312 => 1 part = 2,312 / 17 = â‚¹136.\nDifference between CP_A and CP_B = 10 - 7 = 3 parts.\nDifference = 3 Ã— 136 = â‚¹408.\nCorrect Answer: Option (a).",
    solution_text_hi: "SP à¤¸à¤®à¤¾à¤¨ à¤¹à¥ˆ: 0.84 A = 1.20 B => A / B = 1.20 / 0.84 = 10 / 7à¥¤\nà¤•à¥à¤² 17 à¤‡à¤•à¤¾à¤ˆ = â‚¹2,312 => 1 à¤‡à¤•à¤¾à¤ˆ = 136à¥¤\nà¤…à¤‚à¤¤à¤° = 10 - 7 = 3 à¤‡à¤•à¤¾à¤ˆ = 3 Ã— 136 = â‚¹408à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "A : B = 1.20 : 0.84 = 10 : 7.\nDiff = (3 / 17) Ã— 2312 = 3 Ã— 136 = â‚¹408.",
    shortcut_text_hi: "A : B = 10 : 7 => à¤…à¤‚à¤¤à¤° = (3/17) Ã— 2312 = â‚¹408à¥¤"
  },
  {
    question_number: 22,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 11",
    type_category: "Same SP with Equal Gain & Loss %",
    type_category_hi: "à¤¸à¤®à¤¾à¤¨ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯, à¤¸à¤®à¤¾à¤¨ à¤²à¤¾à¤­ à¤”à¤° à¤¹à¤¾à¤¨à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤",
    question_text: "A shopkeeper sold two toys for â‚¹990 each. On the first toy he gained 10% and on the second he lost 10%. Find the total percentage gain or loss.",
    question_text_hi: "à¤à¤• à¤¦à¥à¤•à¤¾à¤¨à¤¦à¤¾à¤° à¤¨à¥‡ à¤¦à¥‹ à¤–à¤¿à¤²à¥Œà¤¨à¥‡ â‚¹990 à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¥‡à¥¤ à¤ªà¤¹à¤²à¥‡ à¤–à¤¿à¤²à¥Œà¤¨à¥‡ à¤ªà¤° à¤‰à¤¸à¥‡ 10% à¤•à¤¾ à¤²à¤¾à¤­ à¤¹à¥à¤† à¤”à¤° à¤¦à¥‚à¤¸à¤°à¥‡ à¤ªà¤° à¤‰à¤¸à¥‡ 10% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤¹à¥à¤ˆà¥¤ à¤•à¥à¤² à¤²à¤¾à¤­ à¤¯à¤¾ à¤¹à¤¾à¤¨à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
    options: {
      a: "10% Loss",
      b: "10% Gain",
      c: "1% Loss",
      d: "1% Gain"
    },
    options_hi: {
      a: "10% à¤¹à¤¾à¤¨à¤¿",
      b: "10% à¤²à¤¾à¤­",
      c: "1% à¤¹à¤¾à¤¨à¤¿",
      d: "1% à¤²à¤¾à¤­"
    },
    correct_option: "c",
    solution_text: "Standard Property: When two items are sold at the same selling price, one at a profit of x% and the other at a loss of x%, there is always an overall loss given by:\nLoss% = xÂ² / 100.\nHere, x = 10.\nLoss% = 10Â² / 100 = 100 / 100 = 1%.\nHence, there is an overall loss of 1%.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤• à¤¨à¤¿à¤¯à¤®: à¤œà¤¬ à¤¦à¥‹ à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¤®à¤¾à¤¨ à¤¹à¥‹ à¤”à¤° à¤à¤• à¤ªà¤° x% à¤²à¤¾à¤­ à¤¤à¤¥à¤¾ à¤¦à¥‚à¤¸à¤°à¥€ à¤ªà¤° x% à¤¹à¤¾à¤¨à¤¿ à¤¹à¥‹, à¤¤à¥‹ à¤¸à¤¦à¥ˆà¤µ à¤¹à¤¾à¤¨à¤¿ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆ:\nà¤¹à¤¾à¤¨à¤¿% = xÂ² / 100 = 10Â² / 100 = 1% à¤¹à¤¾à¤¨à¤¿à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "Loss% = xÂ² / 100 = 10Â² / 100 = 1% Loss.",
    shortcut_text_hi: "à¤¹à¤¾à¤¨à¤¿% = 10Â² / 100 = 1% à¤¹à¤¾à¤¨à¤¿à¥¤"
  },
  {
    question_number: 23,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 12",
    type_category: "Overall No Profit No Loss Balancing",
    type_category_hi: "à¤¨ à¤²à¤¾à¤­ à¤¨ à¤¹à¤¾à¤¨à¤¿ à¤¸à¤®à¤—à¥à¤° à¤¸à¤‚à¤¤à¥à¤²à¤¨",
    question_text: "A dealer sells a table for â‚¹400 making a profit of 25%. He sells another table at a loss of 10% and on the whole transaction he makes neither profit nor loss. How much did the second table cost for him?",
    question_text_hi: "à¤à¤• à¤¡à¥€à¤²à¤° à¤à¤• à¤®à¥‡à¤œ à¤•à¥‹ â‚¹400 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤•à¤° 25% à¤•à¤¾ à¤²à¤¾à¤­ à¤•à¤®à¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤µà¤¹ à¤à¤• à¤…à¤¨à¥à¤¯ à¤®à¥‡à¤œ à¤•à¥‹ 10% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤ªà¥‚à¤°à¥‡ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨ à¤®à¥‡à¤‚ à¤‰à¤¸à¥‡ à¤¨ à¤¤à¥‹ à¤²à¤¾à¤­ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤¨ à¤¹à¥€ à¤¹à¤¾à¤¨à¤¿à¥¤ à¤¦à¥‚à¤¸à¤°à¥€ à¤®à¥‡à¤œ à¤•à¥€ à¤•à¥€à¤®à¤¤ à¤‰à¤¸à¤•à¥‡ à¤²à¤¿à¤ à¤•à¤¿à¤¤à¤¨à¥€ à¤¥à¥€?",
    options: {
      a: "â‚¹750",
      b: "â‚¹700",
      c: "â‚¹800",
      d: "â‚¹850"
    },
    options_hi: {
      a: "â‚¹750",
      b: "â‚¹700",
      c: "â‚¹800",
      d: "â‚¹850"
    },
    correct_option: "c",
    solution_text: "First Table:\nSPâ‚ = â‚¹400, Profitâ‚ = 25%.\nCPâ‚ = 400 / 1.25 = â‚¹320.\nProfit Amount on 1st Table = 400 - 320 = â‚¹80.\nSecond Table:\nSold at 10% loss.\nSince there is no overall profit or loss:\nLoss Amount on 2nd Table = Profit Amount on 1st Table = â‚¹80.\n10% of CPâ‚‚ = â‚¹80\n=> CPâ‚‚ = 80 / 0.10 = â‚¹800.\nCost price of the second table = â‚¹800.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤ªà¤¹à¤²à¥€ à¤®à¥‡à¤œ: CPâ‚ = 400 / 1.25 = â‚¹320à¥¤ à¤²à¤¾à¤­ = 400 - 320 = â‚¹80à¥¤\nà¤¨ à¤²à¤¾à¤­ à¤¨ à¤¹à¤¾à¤¨à¤¿ à¤¹à¥‹à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤: à¤¦à¥‚à¤¸à¤°à¥€ à¤®à¥‡à¤œ à¤ªà¤° à¤¹à¤¾à¤¨à¤¿ = â‚¹80à¥¤\nCPâ‚‚ à¤•à¤¾ 10% = â‚¹80 => CPâ‚‚ = â‚¹800à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "Profitâ‚ = 400 - 320 = 80.\nLossâ‚‚ = 10% of CPâ‚‚ = 80 => CPâ‚‚ = â‚¹800.",
    shortcut_text_hi: "à¤ªà¤¹à¤²à¥€ à¤®à¥‡à¤œ à¤•à¤¾ à¤²à¤¾à¤­ = â‚¹80 => 10% = â‚¹80 => à¤¦à¥‚à¤¸à¤°à¥€ à¤®à¥‡à¤œ à¤•à¤¾ CP = â‚¹800à¥¤"
  },
  {
    question_number: 24,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 9",
    type_category: "Equal CP Split with Target Total Profit",
    type_category_hi: "à¤¸à¤®à¤¾à¤¨ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤•à¥à¤² à¤²à¤¾à¤­ à¤²à¤•à¥à¤·à¥à¤¯",
    question_text: "Two items whose cost price is â‚¹2,500 each, one is sold at a profit of 5%. If the total profit is 20%, then find the profit on the second item.",
    question_text_hi: "à¤¦à¥‹ à¤µà¤¸à¥à¤¤à¥à¤à¤ à¤œà¤¿à¤¨à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤•à¤¾ â‚¹2,500 à¤¹à¥ˆ, à¤à¤• à¤•à¥‹ 5% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤•à¥à¤² à¤²à¤¾à¤­ 20% à¤¹à¥ˆ, à¤¤à¥‹ à¤¦à¥‚à¤¸à¤°à¥€ à¤µà¤¸à¥à¤¤à¥ à¤ªà¤° à¤²à¤¾à¤­ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
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
    solution_text: "Total Cost Price = 2,500 + 2,500 = â‚¹5,000.\nTotal Desired Profit = 20% of 5,000 = â‚¹1,000.\nProfit from Item 1 = 5% of 2,500 = â‚¹125.\nRequired Profit from Item 2 = 1,000 - 125 = â‚¹875.\nProfit% on Item 2 = (875 / 2,500) Ã— 100 = 35%.\nCorrect Answer: Option (d).",
    solution_text_hi: "à¤•à¥à¤² CP = â‚¹5,000à¥¤ à¤•à¥à¤² 20% à¤²à¤¾à¤­ = â‚¹1,000à¥¤\nà¤µà¤¸à¥à¤¤à¥ 1 à¤ªà¤° à¤²à¤¾à¤­ = 2500 à¤•à¤¾ 5% = â‚¹125à¥¤\nà¤µà¤¸à¥à¤¤à¥ 2 à¤ªà¤° à¤…à¤­à¥€à¤·à¥à¤Ÿ à¤²à¤¾à¤­ = 1000 - 125 = â‚¹875à¥¤\nà¤µà¤¸à¥à¤¤à¥ 2 à¤•à¤¾ à¤²à¤¾à¤­% = (875 / 2500) Ã— 100 = 35%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (d) à¤¹à¥ˆà¥¤",
    shortcut_text: "Since CPs are equal, Average Profit% = (Pâ‚ + Pâ‚‚) / 2 = Total Profit%\n=> (5 + Pâ‚‚) / 2 = 20 => 5 + Pâ‚‚ = 40 => Pâ‚‚ = 35%.",
    shortcut_text_hi: "CP à¤¸à¤®à¤¾à¤¨ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤°: (5% + Pâ‚‚) / 2 = 20% => Pâ‚‚ = 40% - 5% = 35%à¥¤"
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
    type_category_hi: "à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤”à¤° à¤—à¤²à¤¤ à¤µà¤œà¤¨ à¤¸à¤‚à¤¯à¥‹à¤œà¤¨",
    question_text: "A shopkeeper uses a weight of 950 gm instead of 1 kg and sells the articles at the marked price, which is 15% above the cost price. What is his profit percentage?",
    question_text_hi: "à¤à¤• à¤¦à¥à¤•à¤¾à¤¨à¤¦à¤¾à¤° 1 à¤•à¤¿à¤²à¥‹ à¤•à¥‡ à¤¸à¥à¤¥à¤¾à¤¨ à¤ªà¤° 950 à¤—à¥à¤°à¤¾à¤® à¤•à¥‡ à¤µà¤œà¤¨ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‹ à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆ, à¤œà¥‹ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¥‡ 15% à¤…à¤§à¤¿à¤• à¤¹à¥ˆà¥¤ à¤‰à¤¸à¤•à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
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
    solution_text: "Let CP of 1 gm = â‚¹1.\nActual cost of goods given (950 gm) = â‚¹950.\nCustomer pays marked price for 1,000 gm, marked 15% above CP:\nSelling Price = 1,000 Ã— 1.15 = â‚¹1,150.\nProfit = 1,150 - 950 = â‚¹200.\nProfit% = (200 / 950) Ã— 100 = (400 / 19)% = 21 1/19%.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ 1 à¤—à¥à¤°à¤¾à¤® à¤•à¤¾ CP = â‚¹1à¥¤\nà¤¦à¤¿à¤ à¤—à¤ 950 à¤—à¥à¤°à¤¾à¤® à¤•à¤¾ à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• CP = â‚¹950à¥¤\n1000 à¤—à¥à¤°à¤¾à¤® à¤•à¤¾ 15% à¤…à¤§à¤¿à¤• à¤ªà¤° SP = 1000 Ã— 1.15 = â‚¹1,150à¥¤\nà¤²à¤¾à¤­ = 1,150 - 950 = â‚¹200à¥¤\nà¤²à¤¾à¤­% = (200 / 950) Ã— 100 = 400 / 19% = 21 1/19%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "Multiplier = (1150 / 950) = 23 / 19.\nProfit% = (4 / 19) Ã— 100 = 21 1/19%.",
    shortcut_text_hi: "à¤…à¤¨à¥à¤ªà¤¾à¤¤ = 1150 / 950 = 23 / 19 => à¤²à¤¾à¤­% = (4 / 19) Ã— 100 = 21 1/19%à¥¤"
  },
  {
    question_number: 26,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 13",
    type_category: "False Weight for Target Gain %",
    type_category_hi: "à¤µà¤¾à¤‚à¤›à¤¿à¤¤ à¤²à¤¾à¤­ % à¤•à¥‡ à¤²à¤¿à¤ à¤—à¤²à¤¤ à¤µà¤œà¤¨",
    question_text: "A dishonest dealer professes to sell his goods at the cost price but uses a false weight and thus gains 20%. For a kilogram he uses a weight of how many grams?",
    question_text_hi: "à¤à¤• à¤¬à¥‡à¤ˆà¤®à¤¾à¤¨ à¤¡à¥€à¤²à¤° à¤…à¤ªà¤¨à¥‡ à¤®à¤¾à¤² à¤•à¥‹ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¥‡ à¤•à¤¾ à¤¦à¤¾à¤µà¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤²à¥‡à¤•à¤¿à¤¨ à¤—à¤²à¤¤ à¤µà¤œà¤¨ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤‡à¤¸ à¤ªà¥à¤°à¤•à¤¾à¤° 20% à¤•à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤à¤• à¤•à¤¿à¤²à¥‹à¤—à¥à¤°à¤¾à¤® à¤•à¥‡ à¤²à¤¿à¤ à¤µà¤¹ à¤•à¤¿à¤¤à¤¨à¥‡ à¤—à¥à¤°à¤¾à¤® à¤•à¥‡ à¤µà¤œà¤¨ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ?",
    options: {
      a: "750.5 gm",
      b: "708.06 gm",
      c: "833.33 gm",
      d: "785.5 gm"
    },
    options_hi: {
      a: "750.5 à¤—à¥à¤°à¤¾à¤®",
      b: "708.06 à¤—à¥à¤°à¤¾à¤®",
      c: "833.33 à¤—à¥à¤°à¤¾à¤®",
      d: "785.5 à¤—à¥à¤°à¤¾à¤®"
    },
    correct_option: "c",
    solution_text: "Let the false weight used be W grams.\nProfit% = [(1,000 - W) / W] Ã— 100\nGiven: Profit% = 20%\n=> 20 = [(1,000 - W) / W] Ã— 100\n=> 0.20 W = 1,000 - W\n=> 1.20 W = 1,000\n=> W = 1,000 / 1.20 = 10,000 / 12 = 833.33 gm.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤ªà¥à¤°à¤¯à¥à¤•à¥à¤¤ à¤µà¤œà¤¨ = W à¤—à¥à¤°à¤¾à¤®à¥¤\nà¤²à¤¾à¤­% = [(1000 - W) / W] Ã— 100 = 20%\n=> 1000 - W = 0.2 W => 1.2 W = 1000 => W = 833.33 à¤—à¥à¤°à¤¾à¤®à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "W = True Weight / (1 + Profit%) = 1000 / 1.20 = 833.33 gm.",
    shortcut_text_hi: "W = 1000 / 1.20 = 833.33 à¤—à¥à¤°à¤¾à¤®à¥¤"
  },
  {
    question_number: 27,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 14",
    type_category: "Mixed Buying and Common Selling Rate",
    type_category_hi: "à¤®à¤¿à¤¶à¥à¤°à¤¿à¤¤ à¤–à¤°à¥€à¤¦ à¤”à¤° à¤¸à¤‚à¤¯à¥à¤•à¥à¤¤ à¤¬à¤¿à¤•à¥à¤°à¥€ à¤¦à¤°",
    question_text: "A man bought a number of apples at 5 for â‚¹50 and an equal number at 6 for â‚¹50. If he sells all of them at 11 for â‚¹100, what would be his percentage profit or loss?",
    question_text_hi: "à¤à¤• à¤µà¥à¤¯à¤•à¥à¤¤à¤¿ à¤¨à¥‡ â‚¹50 à¤®à¥‡à¤‚ 5 à¤•à¥€ à¤¦à¤° à¤¸à¥‡ à¤•à¥à¤› à¤¸à¥‡à¤¬ à¤–à¤°à¥€à¤¦à¥‡ à¤”à¤° à¤‰à¤¤à¤¨à¥€ à¤¹à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤®à¥‡à¤‚ â‚¹50 à¤®à¥‡à¤‚ 6 à¤•à¥€ à¤¦à¤° à¤¸à¥‡ à¤–à¤°à¥€à¤¦à¥‡à¥¤ à¤¯à¤¦à¤¿ à¤µà¤¹ à¤‰à¤¨à¥à¤¹à¥‡à¤‚ â‚¹100 à¤®à¥‡à¤‚ 11 à¤•à¥€ à¤¦à¤° à¤¸à¥‡ à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤‰à¤¸à¤•à¤¾ à¤²à¤¾à¤­ à¤¯à¤¾ à¤¹à¤¾à¤¨à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤—à¤¾?",
    options: {
      a: "100/121% loss",
      b: "100/121% profit",
      c: "121/100% profit",
      d: "121/100% loss"
    },
    options_hi: {
      a: "100/121% à¤¹à¤¾à¤¨à¤¿",
      b: "100/121% à¤²à¤¾à¤­",
      c: "121/100% à¤²à¤¾à¤­",
      d: "121/100% à¤¹à¤¾à¤¨à¤¿"
    },
    correct_option: "a",
    solution_text: "Let the man buy 330 apples of each variety (LCM of 5, 6, 11 = 330).\nTotal apples bought = 330 + 330 = 660 apples.\nCP of first 330 apples = (330 / 5) Ã— 50 = 66 Ã— 50 = â‚¹3,300.\nCP of second 330 apples = (330 / 6) Ã— 50 = 55 Ã— 50 = â‚¹2,750.\nTotal CP = 3,300 + 2,750 = â‚¹6,050.\nTotal SP of 660 apples = (660 / 11) Ã— 100 = 60 Ã— 100 = â‚¹6,000.\nLoss = 6,050 - 6,000 = â‚¹50.\nLoss% = (50 / 6,050) Ã— 100 = (50 / 60.5) = 100 / 121% loss.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤ªà¥à¤°à¤•à¤¾à¤° à¤•à¥‡ 330 à¤¸à¥‡à¤¬ à¤–à¤°à¥€à¤¦à¥‡ à¤—à¤ (5, 6, 11 à¤•à¤¾ LCM = 330)à¥¤\nà¤•à¥à¤² 660 à¤¸à¥‡à¤¬à¥¤\nCPâ‚ = (330 / 5) Ã— 50 = â‚¹3,300à¥¤\nCPâ‚‚ = (330 / 6) Ã— 50 = â‚¹2,750à¥¤\nà¤•à¥à¤² CP = â‚¹6,050à¥¤\nSP = (660 / 11) Ã— 100 = â‚¹6,000à¥¤\nà¤¹à¤¾à¤¨à¤¿ = â‚¹50à¥¤ à¤¹à¤¾à¤¨à¤¿% = (50 / 6050) Ã— 100 = 100/121% à¤¹à¤¾à¤¨à¤¿à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "CP of 1 apple = (10 + 25/3) / 2 = 55 / 6.\nSP of 1 apple = 100 / 11.\nLoss% = [(55/6 - 100/11) / (55/6)] Ã— 100 = (5/66) / (55/6) Ã— 100 = 100/121% loss.",
    shortcut_text_hi: "CP = 55/6, SP = 100/11 => à¤¹à¤¾à¤¨à¤¿% = 100/121% à¤¹à¤¾à¤¨à¤¿à¥¤"
  },
  {
    question_number: 28,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 1",
    type_category: "Equal Discount and Profit Ratio",
    type_category_hi: "à¤¸à¤®à¤¾à¤¨ à¤›à¥‚à¤Ÿ à¤”à¤° à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤…à¤¨à¥à¤ªà¤¾à¤¤",
    question_text: "If the discount and percentage profit are both 20%, then by what percentage is the marked price above the cost price?",
    question_text_hi: "à¤¯à¤¦à¤¿ à¤›à¥‚à¤Ÿ à¤”à¤° à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤¦à¥‹à¤¨à¥‹à¤‚ 20% à¤¹à¥ˆà¤‚, à¤¤à¥‹ à¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¥‡ à¤•à¤¿à¤¤à¤¨à¥‡ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤…à¤§à¤¿à¤• à¤¹à¥ˆ?",
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
    solution_text_hi: "à¤¸à¥‚à¤¤à¥à¤°: MP / CP = (100 + à¤²à¤¾à¤­%) / (100 - à¤›à¥‚à¤Ÿ%)\nMP / CP = (100 + 20) / (100 - 20) = 120 / 80 = 3 / 2à¥¤\nà¤…à¤‚à¤•à¤¿à¤¤ à¤®à¥‚à¤²à¥à¤¯ à¤®à¥‡à¤‚ à¤µà¥ƒà¤¦à¥à¤§à¤¿ = (3 - 2) / 2 = 1/2 = 50%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "MP / CP = 120 / 80 = 1.5 => MP is 50% above CP.",
    shortcut_text_hi: "MP / CP = 120 / 80 = 1.5 => 50% à¤…à¤§à¤¿à¤•à¥¤"
  },
  {
    question_number: 29,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 15",
    type_category: "Intermediary vs Direct Customer Sale",
    type_category_hi: "à¤®à¤§à¥à¤¯à¤¸à¥à¤¥ à¤¬à¤¨à¤¾à¤® à¤ªà¥à¤°à¤¤à¥à¤¯à¤•à¥à¤· à¤—à¥à¤°à¤¾à¤¹à¤• à¤¬à¤¿à¤•à¥à¤°à¥€",
    question_text: "A weaver sells a saree at â‚¹150 to a shopkeeper and earns a profit of 25%. The shopkeeper sells the same saree to a customer and earns a profit of 30%. If the weaver could sell the saree directly to the customer at â‚¹180, then what would be his profit % and what would be the customer's profit (savings) in â‚¹?",
    question_text_hi: "à¤à¤• à¤¬à¥à¤¨à¤•à¤° à¤à¤• à¤¸à¤¾à¤¡à¤¼à¥€ â‚¹150 à¤®à¥‡à¤‚ à¤à¤• à¤¦à¥à¤•à¤¾à¤¨à¤¦à¤¾à¤° à¤•à¥‹ à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° 25% à¤•à¤¾ à¤²à¤¾à¤­ à¤•à¤®à¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¦à¥à¤•à¤¾à¤¨à¤¦à¤¾à¤° à¤¨à¥‡ à¤µà¤¹à¥€ à¤¸à¤¾à¤¡à¤¼à¥€ à¤à¤• à¤—à¥à¤°à¤¾à¤¹à¤• à¤•à¥‹ à¤¬à¥‡à¤šà¥€ à¤”à¤° 30% à¤•à¤¾ à¤²à¤¾à¤­ à¤•à¤®à¤¾à¤¯à¤¾à¥¤ à¤¯à¤¦à¤¿ à¤¬à¥à¤¨à¤•à¤° à¤¸à¤¾à¤¡à¤¼à¥€ à¤•à¥‹ à¤¸à¥€à¤§à¥‡ à¤—à¥à¤°à¤¾à¤¹à¤• à¤•à¥‹ â‚¹180 à¤®à¥‡à¤‚ à¤¬à¥‡à¤š à¤¸à¤•à¤¤à¤¾, à¤¤à¥‹ à¤‰à¤¸à¤•à¤¾ à¤²à¤¾à¤­ % à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤¤à¤¾ à¤”à¤° à¤—à¥à¤°à¤¾à¤¹à¤• à¤•à¤¾ à¤²à¤¾à¤­ (à¤¬à¤šà¤¤) â‚¹ à¤®à¥‡à¤‚ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤¤à¤¾?",
    options: {
      a: "50%, â‚¹25",
      b: "60%, â‚¹20",
      c: "50%, â‚¹15",
      d: "40%, â‚¹20"
    },
    options_hi: {
      a: "50%, â‚¹25",
      b: "60%, â‚¹20",
      c: "50%, â‚¹15",
      d: "40%, â‚¹20"
    },
    correct_option: "c",
    solution_text: "Weaver's SP = â‚¹150 at 25% profit.\nWeaver's CP = 150 / 1.25 = â‚¹120.\nShopkeeper's CP = â‚¹150.\nShopkeeper's SP to customer at 30% profit = 150 Ã— 1.30 = â‚¹195.\nIf weaver sells directly at â‚¹180:\nWeaver's Profit = 180 - 120 = â‚¹60.\nWeaver's Profit% = (60 / 120) Ã— 100 = 50%.\nCustomer's price from shopkeeper was â‚¹195; direct price is â‚¹180.\nCustomer's profit (savings) = 195 - 180 = â‚¹15.\nAnswer: 50%, â‚¹15.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤¬à¥à¤¨à¤•à¤° à¤•à¤¾ CP = 150 / 1.25 = â‚¹120à¥¤\nà¤¦à¥à¤•à¤¾à¤¨à¤¦à¤¾à¤° à¤•à¤¾ à¤—à¥à¤°à¤¾à¤¹à¤• à¤•à¥‹ SP = 150 Ã— 1.30 = â‚¹195à¥¤\nà¤¸à¥€à¤§à¥‡ â‚¹180 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤°:\nà¤¬à¥à¤¨à¤•à¤° à¤•à¤¾ à¤²à¤¾à¤­ = 180 - 120 = â‚¹60 => à¤²à¤¾à¤­% = (60/120) Ã— 100 = 50%à¥¤\nà¤—à¥à¤°à¤¾à¤¹à¤• à¤•à¥€ à¤¬à¤šà¤¤ = 195 - 180 = â‚¹15à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "Weaver CP = 120 => At 180, Profit% = 60/120 = 50%.\nCustomer pays 180 instead of 195 => saves â‚¹15.",
    shortcut_text_hi: "à¤¬à¥à¤¨à¤•à¤° CP = 120 => 180 à¤ªà¤° à¤²à¤¾à¤­ = 50%à¥¤ à¤—à¥à¤°à¤¾à¤¹à¤• à¤¬à¤šà¤¤ = 195 - 180 = â‚¹15à¥¤"
  },
  {
    question_number: 30,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 10",
    type_category: "Multi-party Chain of Sales",
    type_category_hi: "à¤¶à¥à¤°à¥ƒà¤‚à¤–à¤²à¤¾ à¤•à¥à¤°à¤¯-à¤µà¤¿à¤•à¥à¤°à¤¯ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨",
    question_text: "Reema buys a car for â‚¹75,000. She spends â‚¹10,000 on its repairing. Later she sold this car to Cheeru at 15% profit. Cheeru sold it to Ritu at 10% profit. What sum of money was spent by Ritu to buy the car?",
    question_text_hi: "à¤°à¥€à¤®à¤¾ â‚¹75,000 à¤®à¥‡à¤‚ à¤à¤• à¤•à¤¾à¤° à¤–à¤°à¥€à¤¦à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤µà¤¹ à¤‡à¤¸à¤•à¥€ à¤®à¤°à¤®à¥à¤®à¤¤ à¤ªà¤° â‚¹10,000 à¤–à¤°à¥à¤š à¤•à¤°à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤¬à¤¾à¤¦ à¤®à¥‡à¤‚ à¤‰à¤¸à¤¨à¥‡ à¤‡à¤¸ à¤•à¤¾à¤° à¤•à¥‹ à¤šà¥€à¤°à¥‚ à¤•à¥‹ 15% à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤š à¤¦à¤¿à¤¯à¤¾à¥¤ à¤šà¥€à¤°à¥‚ à¤¨à¥‡ à¤‡à¤¸à¥‡ à¤°à¤¿à¤¤à¥ à¤•à¥‹ 10% à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤š à¤¦à¤¿à¤¯à¤¾à¥¤ à¤•à¤¾à¤° à¤–à¤°à¥€à¤¦à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤°à¤¿à¤¤à¥ à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤•à¤¿à¤¤à¤¨à¥€ à¤°à¤¾à¤¶à¤¿ à¤–à¤°à¥à¤š à¤•à¥€ à¤—à¤ˆ?",
    options: {
      a: "â‚¹1,02,575",
      b: "â‚¹1,05,752",
      c: "â‚¹1,02,252",
      d: "â‚¹1,07,525"
    },
    options_hi: {
      a: "â‚¹1,02,575",
      b: "â‚¹1,05,752",
      c: "â‚¹1,02,252",
      d: "â‚¹1,07,525"
    },
    correct_option: "d",
    solution_text: "Reema's total cost = 75,000 + 10,000 = â‚¹85,000.\nReema sells to Cheeru at 15% profit:\nCheeru's cost = 85,000 Ã— 1.15 = â‚¹97,750.\nCheeru sells to Ritu at 10% profit:\nRitu's purchase price = 97,750 Ã— 1.10 = â‚¹1,07,525.\nCorrect Answer: Option (d).",
    solution_text_hi: "à¤°à¥€à¤®à¤¾ à¤•à¤¾ à¤•à¥à¤² CP = 75,000 + 10,000 = â‚¹85,000à¥¤\nà¤šà¥€à¤°à¥‚ à¤•à¤¾ CP = 85,000 Ã— 1.15 = â‚¹97,750à¥¤\nà¤°à¤¿à¤¤à¥ à¤•à¤¾ CP = 97,750 Ã— 1.10 = â‚¹1,07,525à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (d) à¤¹à¥ˆà¥¤",
    shortcut_text: "Ritu's Price = 85,000 Ã— 1.15 Ã— 1.10 = 85,000 Ã— 1.265 = â‚¹1,07,525.",
    shortcut_text_hi: "à¤°à¤¿à¤¤à¥ à¤•à¤¾ à¤®à¥‚à¤²à¥à¤¯ = 85,000 Ã— 1.15 Ã— 1.10 = â‚¹1,07,525à¥¤"
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
    type_category_hi: "à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤”à¤° à¤¹à¤¾à¤¨à¤¿ à¤¸à¥‡ à¤¹à¤¾à¤¨à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤",
    question_text: "By selling an item for â‚¹222 a person incurs a loss of â‚¹48. What is the percentage of loss incurred in the transaction?",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ â‚¹222 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤° à¤à¤• à¤µà¥à¤¯à¤•à¥à¤¤à¤¿ à¤•à¥‹ â‚¹48 à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨ à¤®à¥‡à¤‚ à¤¹à¥‹à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤¹à¤¾à¤¨à¤¿ à¤•à¤¾ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
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
    solution_text: "Selling Price (SP) = â‚¹222.\nLoss = â‚¹48.\nCost Price (CP) = SP + Loss = 222 + 48 = â‚¹270.\nLoss% = (Loss / CP) Ã— 100\n= (48 / 270) Ã— 100 = (16 / 90) Ã— 100 = 160 / 9% = 17 7/9%.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (SP) = â‚¹222à¥¤ à¤¹à¤¾à¤¨à¤¿ = â‚¹48à¥¤\nà¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (CP) = 222 + 48 = â‚¹270à¥¤\nà¤¹à¤¾à¤¨à¤¿% = (48 / 270) Ã— 100 = 160 / 9 = 17 7/9%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "CP = 222 + 48 = 270.\nLoss% = 48/270 = 16/90 = 17.77% = 17 7/9%.",
    shortcut_text_hi: "CP = 270 => à¤¹à¤¾à¤¨à¤¿% = (48/270) Ã— 100 = 17 7/9%à¥¤"
  },
  {
    question_number: 2,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 13",
    type_category: "Dishonest Dealer Faulty Weight at CP",
    type_category_hi: "à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤—à¤²à¤¤ à¤µà¤œà¤¨ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤—",
    question_text: "A dealer claims to sell his goods at cost price but uses a weight that actually weighs 800 gm though 1 kg is written on it. Find his gain percentage.",
    question_text_hi: "à¤à¤• à¤¡à¥€à¤²à¤° à¤…à¤ªà¤¨à¥‡ à¤®à¤¾à¤² à¤•à¥‹ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¥‡ à¤•à¤¾ à¤¦à¤¾à¤µà¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤²à¥‡à¤•à¤¿à¤¨ à¤à¤• à¤à¤¸à¥‡ à¤µà¤œà¤¨ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤œà¤¿à¤¸à¤•à¤¾ à¤µà¤œà¤¨ à¤µà¤¾à¤¸à¥à¤¤à¤µ à¤®à¥‡à¤‚ 800 à¤—à¥à¤°à¤¾à¤® à¤¹à¥ˆ, à¤¹à¤¾à¤²à¤¾à¤‚à¤•à¤¿ à¤‰à¤¸ à¤ªà¤° 1 à¤•à¤¿à¤²à¥‹ à¤²à¤¿à¤–à¤¾ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤‰à¤¸à¤•à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
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
    solution_text: "Standard Formula for Faulty Weight:\nGain% = [(Error) / (True Value - Error)] Ã— 100\nError = 1,000 gm - 800 gm = 200 gm.\nActual Weight Given = 800 gm.\nGain% = (200 / 800) Ã— 100 = (1 / 4) Ã— 100 = 25%.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤¤à¥à¤°à¥à¤Ÿà¤¿ = 1000 - 800 = 200 à¤—à¥à¤°à¤¾à¤®à¥¤\nà¤²à¤¾à¤­% = (à¤¤à¥à¤°à¥à¤Ÿà¤¿ / à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤µà¤œà¤¨) Ã— 100\n= (200 / 800) Ã— 100 = 25% à¤²à¤¾à¤­à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "Gain% = (200 / 800) Ã— 100 = 25%.",
    shortcut_text_hi: "à¤¸à¥€à¤§à¥‡: (200/800) Ã— 100 = 25%à¥¤"
  },
  {
    question_number: 3,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "SP of x Articles = CP of y Articles",
    type_category_hi: "x à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ = y à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯",
    question_text: "The selling price of 9 articles is equal to the cost price of 15 articles. In this transaction there is a:",
    question_text_hi: "9 à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ 15 à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‡ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤¹à¥ˆà¥¤ à¤‡à¤¸ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨ à¤®à¥‡à¤‚ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ:",
    options: {
      a: "loss of 40%",
      b: "gain of 66.6% nearly",
      c: "loss of 66.6% nearly",
      d: "gain of 40%"
    },
    options_hi: {
      a: "40% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿",
      b: "à¤²à¤—à¤­à¤— 66.6% à¤•à¤¾ à¤²à¤¾à¤­",
      c: "à¤²à¤—à¤­à¤— 66.6% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿",
      d: "40% à¤•à¤¾ à¤²à¤¾à¤­"
    },
    correct_option: "b",
    solution_text: "Given: 9 Ã— SP = 15 Ã— CP\n=> SP / CP = 15 / 9 = 5 / 3\nSince SP > CP, there is a profit.\nProfit per unit = 5 - 3 = 2 units.\nProfit% = (2 / 3) Ã— 100 = 66.66% â‰ˆ 66.6% gain.\nCorrect Answer: Option (b).",
    solution_text_hi: "9 Ã— SP = 15 Ã— CP => SP / CP = 15 / 9 = 5 / 3à¥¤\nà¤²à¤¾à¤­ = 5 - 3 = 2 à¤‡à¤•à¤¾à¤ˆà¥¤\nà¤²à¤¾à¤­% = (2 / 3) Ã— 100 = 66.66% â‰ˆ 66.6% à¤•à¤¾ à¤²à¤¾à¤­à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (b) à¤¹à¥ˆà¥¤",
    shortcut_text: "SP/CP = 5/3 => Profit = 2/3 = 66.6%.",
    shortcut_text_hi: "SP/CP = 5/3 => 2/3 à¤²à¤¾à¤­ = 66.6% à¤²à¤¾à¤­à¥¤"
  },
  {
    question_number: 4,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 14",
    type_category: "Cross Multiplying Rate of Purchase and Sale",
    type_category_hi: "à¤•à¥à¤°à¤¯ à¤”à¤° à¤µà¤¿à¤•à¥à¤°à¤¯ à¤¦à¤° à¤•à¤¾ à¤¤à¤¿à¤°à¥à¤¯à¤• à¤—à¥à¤£à¤¾",
    question_text: "A seller buys a certain number of bananas at the rate of 8 for â‚¹5 and sells them at the rate of 5 for â‚¹8. What will be his profit percentage?",
    question_text_hi: "à¤à¤• à¤µà¤¿à¤•à¥à¤°à¥‡à¤¤à¤¾ â‚¹5 à¤®à¥‡à¤‚ 8 à¤•à¥€ à¤¦à¤° à¤¸à¥‡ à¤•à¥à¤› à¤•à¥‡à¤²à¥‡ à¤–à¤°à¥€à¤¦à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤‰à¤¨à¥à¤¹à¥‡à¤‚ â‚¹8 à¤®à¥‡à¤‚ 5 à¤•à¥€ à¤¦à¤° à¤¸à¥‡ à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤‰à¤¸à¤•à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤—à¤¾?",
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
    solution_text: "Cost Price of 1 banana = 5 / 8 = â‚¹0.625.\nSelling Price of 1 banana = 8 / 5 = â‚¹1.60.\nProfit on 1 banana = 1.60 - 0.625 = â‚¹0.975.\nProfit% = (0.975 / 0.625) Ã— 100 = (39 / 25) Ã— 100 = 156%.\nCorrect Answer: Option (c).",
    solution_text_hi: "1 à¤•à¥‡à¤²à¥‡ à¤•à¤¾ CP = 5 / 8 à¤°à¥à¤ªà¤¯à¥‡à¥¤\n1 à¤•à¥‡à¤²à¥‡ à¤•à¤¾ SP = 8 / 5 à¤°à¥à¤ªà¤¯à¥‡à¥¤\nà¤²à¤¾à¤­ = 8/5 - 5/8 = (64 - 25) / 40 = 39 / 40 à¤°à¥à¤ªà¤¯à¥‡à¥¤\nà¤²à¤¾à¤­% = [(39/40) / (5/8)] Ã— 100 = (39 / 25) Ã— 100 = 156%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "Cross-multiply items and rates:\nCP = 5 Ã— 5 = 25; SP = 8 Ã— 8 = 64.\nProfit% = [(64 - 25) / 25] Ã— 100 = (39 / 25) Ã— 100 = 156%.",
    shortcut_text_hi: "à¤¤à¤¿à¤°à¥à¤¯à¤• à¤—à¥à¤£à¤¾ à¤µà¤¿à¤§à¤¿: CP = 5 Ã— 5 = 25; SP = 8 Ã— 8 = 64à¥¤\nà¤²à¤¾à¤­% = [(64 - 25)/25] Ã— 100 = 156%à¥¤"
  },
  {
    question_number: 5,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Direct Selling Price from Cost and Profit",
    type_category_hi: "à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤”à¤° à¤²à¤¾à¤­ à¤¸à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯",
    question_text: "A person bought an article for â‚¹1,975 and sold it at a profit of 12%. What was the selling price of the article?",
    question_text_hi: "à¤à¤• à¤µà¥à¤¯à¤•à¥à¤¤à¤¿ à¤¨à¥‡ à¤à¤• à¤µà¤¸à¥à¤¤à¥ â‚¹1,975 à¤®à¥‡à¤‚ à¤–à¤°à¥€à¤¦à¥€ à¤”à¤° à¤‰à¤¸à¥‡ 12% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤š à¤¦à¤¿à¤¯à¤¾à¥¤ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¥à¤¾?",
    options: {
      a: "â‚¹2,212",
      b: "â‚¹2,192",
      c: "â‚¹2,222",
      d: "â‚¹2,202"
    },
    options_hi: {
      a: "â‚¹2,212",
      b: "â‚¹2,192",
      c: "â‚¹2,222",
      d: "â‚¹2,202"
    },
    correct_option: "a",
    solution_text: "Cost Price (CP) = â‚¹1,975.\nProfit% = 12%.\nProfit Amount = 1,975 Ã— (12 / 100) = â‚¹237.\nSelling Price (SP) = CP + Profit = 1,975 + 237 = â‚¹2,212.\nCorrect Answer: Option (a).",
    solution_text_hi: "CP = â‚¹1,975à¥¤ à¤²à¤¾à¤­ = 12%à¥¤\nà¤²à¤¾à¤­ à¤°à¤¾à¤¶à¤¿ = 1975 Ã— 0.12 = â‚¹237à¥¤\nSP = 1975 + 237 = â‚¹2,212à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "SP = 1,975 Ã— 1.12 = â‚¹2,212.",
    shortcut_text_hi: "SP = 1975 Ã— 1.12 = â‚¹2,212à¥¤"
  },
  {
    question_number: 6,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Unknown Count of Articles for Given Profit %",
    type_category_hi: "à¤¦à¤¿à¤ à¤—à¤ à¤²à¤¾à¤­ % à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤œà¥à¤žà¤¾à¤¤ à¤µà¤¸à¥à¤¤à¥ à¤¸à¤‚à¤–à¥à¤¯à¤¾",
    question_text: "The cost price of 120 pens is the same as the selling price of x pens. If the profit is 25%, then the value of x is:",
    question_text_hi: "120 à¤ªà¥‡à¤¨ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ x à¤ªà¥‡à¤¨ à¤•à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‡ à¤¸à¤®à¤¾à¤¨ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤²à¤¾à¤­ 25% à¤¹à¥ˆ, à¤¤à¥‹ x à¤•à¤¾ à¤®à¤¾à¤¨ à¤¹à¥ˆ:",
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
    solution_text: "Given: 120 Ã— CP = x Ã— SP\n=> SP / CP = 120 / x.\nGiven Profit = 25% => SP / CP = 1 + 0.25 = 1.25 = 5 / 4.\n=> 120 / x = 5 / 4\n=> 5x = 120 Ã— 4 = 480\n=> x = 480 / 5 = 96.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆ: 120 Ã— CP = x Ã— SP => SP / CP = 120 / xà¥¤\n25% à¤²à¤¾à¤­ => SP / CP = 125 / 100 = 5 / 4à¥¤\n120 / x = 5 / 4 => 5x = 480 => x = 96à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "x = 120 / 1.25 = 96.",
    shortcut_text_hi: "x = 120 / 1.25 = 96à¥¤"
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
    type_category_hi: "à¤¹à¤¾à¤¨à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤¸à¥‡ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯",
    question_text: "By selling an item for â‚¹2,332 a person incurred a loss of 12%. What was the cost price of the item?",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ â‚¹2,332 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤° à¤à¤• à¤µà¥à¤¯à¤•à¥à¤¤à¤¿ à¤•à¥‹ 12% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤¹à¥à¤ˆà¥¤ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¥à¤¾?",
    options: {
      a: "â‚¹2,650",
      b: "â‚¹2,675",
      c: "â‚¹2,620",
      d: "â‚¹2,625"
    },
    options_hi: {
      a: "â‚¹2,650",
      b: "â‚¹2,675",
      c: "â‚¹2,620",
      d: "â‚¹2,625"
    },
    correct_option: "a",
    solution_text: "Selling Price (SP) = â‚¹2,332.\nLoss% = 12% => SP = 88% of CP.\n0.88 CP = 2,332\nCP = 2,332 / 0.88 = (2,332 Ã— 100) / 88 = â‚¹2,650.\nCost price of the item = â‚¹2,650.\nCorrect Answer: Option (a).",
    solution_text_hi: "12% à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° SP = 88% of CP = â‚¹2,332à¥¤\nCP = 2332 / 0.88 = â‚¹2,650à¥¤\nà¤…à¤¤à¤ƒ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ â‚¹2,650 à¤¹à¥ˆà¥¤ à¤µà¤¿à¤•à¤²à¥à¤ª (a)à¥¤",
    shortcut_text: "88% = 2332 => 1% = 26.5 => 100% = â‚¹2,650.",
    shortcut_text_hi: "88% = 2332 => 100% = (2332/88) Ã— 100 = â‚¹2,650à¥¤"
  },
  {
    question_number: 8,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 5",
    type_category: "Simultaneous CP & SP Change with New %",
    type_category_hi: "à¤•à¥à¤°à¤¯ à¤”à¤° à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤®à¥‡à¤‚ à¤¸à¤‚à¤¯à¥à¤•à¥à¤¤ à¤ªà¤°à¤¿à¤µà¤°à¥à¤¤à¤¨",
    question_text: "An article is sold at a profit of 28%. If the cost price is increased by â‚¹50 and the selling price is reduced by â‚¹18, then the profit would be 11.6%. What is the original cost price (in â‚¹) of the article?",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ 28% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¥€ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤®à¥‡à¤‚ â‚¹50 à¤•à¥€ à¤µà¥ƒà¤¦à¥à¤§à¤¿ à¤•à¥€ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆ à¤”à¤° à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤®à¥‡à¤‚ â‚¹18 à¤•à¥€ à¤•à¤®à¥€ à¤•à¥€ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆ, à¤¤à¥‹ à¤²à¤¾à¤­ 11.6% à¤¹à¥‹à¤—à¤¾à¥¤ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤®à¥‚à¤² à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (â‚¹ à¤®à¥‡à¤‚) à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
    options: {
      a: "â‚¹480",
      b: "â‚¹350",
      c: "â‚¹450",
      d: "â‚¹400"
    },
    options_hi: {
      a: "â‚¹480",
      b: "â‚¹350",
      c: "â‚¹450",
      d: "â‚¹400"
    },
    correct_option: "c",
    solution_text: "Let original CP = x.\nOriginal SP = 1.28x.\nNew CP = x + 50.\nNew SP = 1.28x - 18.\nGiven: New Profit = 11.6%\n=> New SP = (1 + 0.116) Ã— New CP\n=> 1.28x - 18 = 1.116 Ã— (x + 50)\n=> 1.28x - 18 = 1.116x + 55.8\n=> 1.28x - 1.116x = 55.8 + 18\n=> 0.164x = 73.8\n=> x = 73.8 / 0.164 = 73,800 / 164 = â‚¹450.\nOriginal cost price = â‚¹450.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤®à¥‚à¤² CP = xà¥¤ à¤®à¥‚à¤² SP = 1.28xà¥¤\nà¤¨à¤¯à¤¾ CP = x + 50à¥¤ à¤¨à¤¯à¤¾ SP = 1.28x - 18à¥¤\n1.28x - 18 = 1.116(x + 50) = 1.116x + 55.8\n0.164x = 73.8 => x = 73.8 / 0.164 = â‚¹450à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "0.164x = 55.8 + 18 = 73.8 => x = â‚¹450.",
    shortcut_text_hi: "0.164x = 73.8 => x = â‚¹450à¥¤"
  },
  {
    question_number: 9,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 17",
    type_category: "Equal Profit and Loss at Two Prices",
    type_category_hi: "à¤¦à¥‹ à¤…à¤²à¤— à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯à¥‹à¤‚ à¤ªà¤° à¤¸à¤®à¤¾à¤¨ à¤²à¤¾à¤­ à¤”à¤° à¤¹à¤¾à¤¨à¤¿",
    question_text: "The profit earned after selling an article for â‚¹1,875 is the same as the loss incurred after selling the article for â‚¹1,385. What is the cost price (in â‚¹) of the article?",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ â‚¹1,875 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤²à¤¾à¤­ à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ â‚¹1,385 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤¹à¥‹à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤¹à¤¾à¤¨à¤¿ à¤•à¥‡ à¤¸à¤®à¤¾à¤¨ à¤¹à¥ˆà¥¤ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ (â‚¹ à¤®à¥‡à¤‚) à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
    options: {
      a: "â‚¹1,360",
      b: "â‚¹1,660",
      c: "â‚¹1,630",
      d: "â‚¹1,650"
    },
    options_hi: {
      a: "â‚¹1,360",
      b: "â‚¹1,660",
      c: "â‚¹1,630",
      d: "â‚¹1,650"
    },
    correct_option: "c",
    solution_text: "Let Cost Price = CP.\nProfit at â‚¹1,875 = 1,875 - CP.\nLoss at â‚¹1,385 = CP - 1,385.\nGiven: Profit = Loss\n=> 1,875 - CP = CP - 1,385\n=> 2 CP = 1,875 + 1,385 = 3,260\n=> CP = 3,260 / 2 = â‚¹1,630.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤²à¤¾à¤­ = 1875 - CPà¥¤ à¤¹à¤¾à¤¨à¤¿ = CP - 1385à¥¤\n1875 - CP = CP - 1385 => 2 CP = 3260 => CP = â‚¹1,630à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "When profit = loss, CP is exactly the midpoint:\nCP = (1,875 + 1,385) / 2 = 3,260 / 2 = â‚¹1,630.",
    shortcut_text_hi: "à¤¸à¤®à¤¾à¤¨ à¤²à¤¾à¤­ à¤”à¤° à¤¹à¤¾à¤¨à¤¿ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤° CP = (SPâ‚ + SPâ‚‚) / 2 = (1875 + 1385) / 2 = â‚¹1,630à¥¤"
  },
  {
    question_number: 10,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 4",
    type_category: "Incremental Selling Price for Profit Increase",
    type_category_hi: "à¤²à¤¾à¤­ à¤µà¥ƒà¤¦à¥à¤§à¤¿ à¤•à¥‡ à¤²à¤¿à¤ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤®à¥‡à¤‚ à¤µà¥ƒà¤¦à¥à¤§à¤¿",
    question_text: "An article was sold at a gain of 12%. Had it been sold for â‚¹33 more, the gain would have been 14%. The cost price of the article is:",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ 12% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¥€ à¤—à¤ˆà¥¤ à¤¯à¤¦à¤¿ à¤‡à¤¸à¥‡ â‚¹33 à¤…à¤§à¤¿à¤• à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¾ à¤œà¤¾à¤¤à¤¾, à¤¤à¥‹ à¤²à¤¾à¤­ 14% à¤¹à¥‹à¤¤à¤¾à¥¤ à¤µà¤¸à¥à¤¤à¥ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¹à¥ˆ:",
    options: {
      a: "â‚¹1,750.00",
      b: "â‚¹1,800.00",
      c: "â‚¹1,650.00",
      d: "â‚¹1,850.00"
    },
    options_hi: {
      a: "â‚¹1,750.00",
      b: "â‚¹1,800.00",
      c: "â‚¹1,650.00",
      d: "â‚¹1,850.00"
    },
    correct_option: "c",
    solution_text: "Let Cost Price = CP.\nDifference in gain percentage = 14% - 12% = 2% of CP.\nGiven that this 2% increase corresponds to â‚¹33:\n2% of CP = â‚¹33\n1% of CP = 33 / 2 = â‚¹16.5\nCP = 16.5 Ã— 100 = â‚¹1,650.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤²à¤¾à¤­ à¤®à¥‡à¤‚ à¤…à¤‚à¤¤à¤° = 14% - 12% = 2%à¥¤\n2% = â‚¹33 => 100% = (33 / 2) Ã— 100 = â‚¹1,650à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "2% = 33 => CP = 33 Ã— 50 = â‚¹1,650.",
    shortcut_text_hi: "2% = 33 => CP = 33 Ã— 50 = â‚¹1,650à¥¤"
  },
  {
    question_number: 11,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 9",
    type_category: "Split Stock Sold at Loss and Gain",
    type_category_hi: "à¤µà¤¿à¤­à¤¾à¤œà¤¿à¤¤ à¤®à¤¾à¤² à¤ªà¤° à¤¹à¤¾à¤¨à¤¿ à¤”à¤° à¤²à¤¾à¤­",
    question_text: "40% of the goods are sold at 2% loss while the rest of the goods are sold at 4% profit. If there is a total profit of â‚¹250, then the cost price of the goods sold is:",
    question_text_hi: "40% à¤®à¤¾à¤² 2% à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤¬à¥‡à¤šà¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ à¤œà¤¬à¤•à¤¿ à¤¶à¥‡à¤· à¤®à¤¾à¤² 4% à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤•à¥à¤² à¤²à¤¾à¤­ â‚¹250 à¤¹à¥ˆ, à¤¤à¥‹ à¤¬à¥‡à¤šà¥‡ à¤—à¤ à¤®à¤¾à¤² à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¹à¥ˆ:",
    options: {
      a: "â‚¹5,625",
      b: "â‚¹6,525",
      c: "â‚¹9,000",
      d: "â‚¹15,625"
    },
    options_hi: {
      a: "â‚¹5,625",
      b: "â‚¹6,525",
      c: "â‚¹9,000",
      d: "â‚¹15,625"
    },
    correct_option: "d",
    solution_text: "Let total Cost Price = CP.\nPart 1: 40% of goods sold at 2% loss => Contribution = 0.40 Ã— (-2%) = -0.8% of CP.\nPart 2: 60% of goods sold at 4% profit => Contribution = 0.60 Ã— (+4%) = +2.4% of CP.\nOverall Net Profit% = 2.4% - 0.8% = 1.6% of CP.\nGiven: 1.6% of CP = â‚¹250\n=> CP = (250 / 1.6) Ã— 100 = (25,000 / 1.6) = â‚¹15,625.\nCost price of goods = â‚¹15,625.\nCorrect Answer: Option (d).",
    solution_text_hi: "40% à¤®à¤¾à¤² à¤ªà¤° 2% à¤¹à¤¾à¤¨à¤¿ = -0.8%à¥¤\n60% à¤®à¤¾à¤² à¤ªà¤° 4% à¤²à¤¾à¤­ = +2.4%à¥¤\nà¤•à¥à¤² à¤¶à¥à¤¦à¥à¤§ à¤²à¤¾à¤­% = 2.4% - 0.8% = 1.6%à¥¤\n1.6% = â‚¹250 => CP = 250 / 0.016 = â‚¹15,625à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (d) à¤¹à¥ˆà¥¤",
    shortcut_text: "Net% = (0.4 Ã— -2) + (0.6 Ã— 4) = 1.6% = 250 => CP = 250 / 0.016 = â‚¹15,625.",
    shortcut_text_hi: "à¤¶à¥à¤¦à¥à¤§% = 1.6% = 250 => CP = â‚¹15,625à¥¤"
  },
  {
    question_number: 12,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 5",
    type_category: "Equal Decrement in CP and SP",
    type_category_hi: "à¤•à¥à¤°à¤¯ à¤”à¤° à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤®à¥‡à¤‚ à¤¸à¤®à¤¾à¤¨ à¤•à¤®à¥€",
    question_text: "An article is sold at a profit of 20%. If both the cost price and selling price are â‚¹100 less, the profit will be 4% more. Find the cost price.",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ 20% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤”à¤° à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¦à¥‹à¤¨à¥‹à¤‚ â‚¹100 à¤•à¤® à¤¹à¥‹à¤‚, à¤¤à¥‹ à¤²à¤¾à¤­ 4% à¤…à¤§à¤¿à¤• à¤¹à¥‹à¤—à¤¾à¥¤ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
    options: {
      a: "â‚¹800",
      b: "â‚¹500",
      c: "â‚¹600",
      d: "â‚¹700"
    },
    options_hi: {
      a: "â‚¹800",
      b: "â‚¹500",
      c: "â‚¹600",
      d: "â‚¹700"
    },
    correct_option: "c",
    solution_text: "Let original CP = x.\nOriginal SP = 1.20x.\nNew CP = x - 100.\nNew SP = 1.20x - 100.\nNew Profit% = 20% + 4% = 24%.\n=> New SP = 1.24 Ã— New CP\n=> 1.20x - 100 = 1.24 Ã— (x - 100)\n=> 1.20x - 100 = 1.24x - 124\n=> 1.24x - 1.20x = 124 - 100\n=> 0.04x = 24\n=> x = 24 / 0.04 = â‚¹600.\nCost price of the article = â‚¹600.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤®à¥‚à¤² CP = xà¥¤ à¤®à¥‚à¤² SP = 1.20xà¥¤\nà¤¨à¤¯à¤¾ CP = x - 100à¥¤ à¤¨à¤¯à¤¾ SP = 1.20x - 100à¥¤\nà¤¨à¤¯à¤¾ à¤²à¤¾à¤­ = 24% => 1.20x - 100 = 1.24(x - 100) = 1.24x - 124à¥¤\n0.04x = 24 => x = 24 / 0.04 = â‚¹600à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "0.04x = 124 - 100 = 24 => x = 24 / 0.04 = â‚¹600.",
    shortcut_text_hi: "0.04x = 24 => x = â‚¹600à¥¤"
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
    type_category_hi: "à¤¸à¤®à¤¾à¤¨ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤²à¤•à¥à¤·à¤¿à¤¤ à¤•à¥à¤² à¤²à¤¾à¤­",
    question_text: "The selling price of 2 blankets are the same. One of the blankets is sold at 66 2/3% profit and the CP of the other blanket is â‚¹400 less than its SP. If the total profit on selling both the blankets is 50%, then find the selling price of each blanket.",
    question_text_hi: "2 à¤•à¤‚à¤¬à¤²à¥‹à¤‚ à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¤®à¤¾à¤¨ à¤¹à¥ˆà¥¤ à¤à¤• à¤•à¤‚à¤¬à¤² 66 2/3% à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤¦à¥‚à¤¸à¤°à¥‡ à¤•à¤‚à¤¬à¤² à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤‰à¤¸à¤•à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¥‡ â‚¹400 à¤•à¤® à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤¦à¥‹à¤¨à¥‹à¤‚ à¤•à¤‚à¤¬à¤²à¥‹à¤‚ à¤•à¥‹ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤° à¤•à¥à¤² à¤²à¤¾à¤­ 50% à¤¹à¥ˆ, à¤¤à¥‹ à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤•à¤‚à¤¬à¤² à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
    options: {
      a: "â‚¹1510",
      b: "â‚¹1530",
      c: "â‚¹1520",
      d: "â‚¹1500"
    },
    options_hi: {
      a: "â‚¹1510",
      b: "â‚¹1530",
      c: "â‚¹1520",
      d: "â‚¹1500"
    },
    correct_option: "d",
    solution_text: "Let the selling price of each blanket = S.\nTotal Selling Price = 2S.\nBlanket 1 is sold at 66 2/3% profit (fraction = 2/3):\n=> SPâ‚ = CPâ‚ Ã— (1 + 2/3) = (5/3) CPâ‚\n=> CPâ‚ = 3S / 5.\nBlanket 2 has CPâ‚‚ = S - 400.\nTotal CP = CPâ‚ + CPâ‚‚ = (3S / 5) + S - 400 = (8S / 5) - 400.\nTotal profit on both is 50%, so Total SP = 1.50 Ã— Total CP:\n2S = 1.5 Ã— [(8S / 5) - 400] = (12S / 5) - 600\nMultiply throughout by 5:\n10S = 12S - 3,000\n2S = 3,000 => S = â‚¹1,500.\nSelling price of each blanket = â‚¹1,500.\nCorrect Answer: Option (d).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤•à¤‚à¤¬à¤² à¤•à¤¾ SP = Sà¥¤ à¤•à¥à¤² SP = 2Sà¥¤\nà¤•à¤‚à¤¬à¤² 1 à¤ªà¤° 66 2/3% (2/3) à¤²à¤¾à¤­ => CPâ‚ = 3S/5à¥¤\nà¤•à¤‚à¤¬à¤² 2 à¤•à¤¾ CPâ‚‚ = S - 400à¥¤\nà¤•à¥à¤² CP = 8S/5 - 400à¥¤\nà¤•à¥à¤² 50% à¤²à¤¾à¤­ => 2S = 1.5(8S/5 - 400) = 2.4S - 600à¥¤\n0.4S = 600 => S = â‚¹1,500à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (d) à¤¹à¥ˆà¥¤",
    shortcut_text: "2S = 1.5(8S/5 - 400) => 0.4S = 600 => S = â‚¹1,500.",
    shortcut_text_hi: "0.4S = 600 => S = â‚¹1,500à¥¤"
  },
  {
    question_number: 14,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 8",
    type_category: "Price Shift from 30% Loss to 16% Gain",
    type_category_hi: "30% à¤¹à¤¾à¤¨à¤¿ à¤¸à¥‡ 16% à¤²à¤¾à¤­ à¤®à¥‡à¤‚ à¤°à¥‚à¤ªà¤¾à¤‚à¤¤à¤°à¤£",
    question_text: "By selling an item for â‚¹1,729 Rohini made a loss of 30%. At what price should she sell the item to make a gain of 16%?",
    question_text_hi: "à¤°à¥‹à¤¹à¤¿à¤£à¥€ à¤•à¥‹ à¤à¤• à¤µà¤¸à¥à¤¤à¥ â‚¹1,729 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤° 30% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤¹à¥à¤ˆà¥¤ 16% à¤•à¤¾ à¤²à¤¾à¤­ à¤•à¤®à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤¸à¥‡ à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ à¤•à¤¿à¤¸ à¤•à¥€à¤®à¤¤ à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤?",
    options: {
      a: "â‚¹2,856.20",
      b: "â‚¹2,865.20",
      c: "â‚¹2,856.50",
      d: "â‚¹2,866.40"
    },
    options_hi: {
      a: "â‚¹2,856.20",
      b: "â‚¹2,865.20",
      c: "â‚¹2,856.50",
      d: "â‚¹2,866.40"
    },
    correct_option: "b",
    solution_text: "At 30% loss, SP = 70% of CP = â‚¹1,729.\nCP = 1,729 / 0.70 = â‚¹2,470.\nFor 16% gain, Required SP = 2,470 Ã— (1 + 0.16) = 2,470 Ã— 1.16 = â‚¹2,865.20.\nCorrect Answer: Option (b).",
    solution_text_hi: "70% = â‚¹1,729 => CP = 1729 / 0.70 = â‚¹2,470à¥¤\n16% à¤²à¤¾à¤­ à¤ªà¤° SP = 2470 Ã— 1.16 = â‚¹2,865.20à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (b) à¤¹à¥ˆà¥¤",
    shortcut_text: "SPâ‚‚ = (1729 / 70) Ã— 116 = 24.7 Ã— 116 = â‚¹2,865.20.",
    shortcut_text_hi: "SPâ‚‚ = (1729 / 70) Ã— 116 = â‚¹2,865.20à¥¤"
  },
  {
    question_number: 15,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 17",
    type_category: "Midpoint CP to Required Profit Target",
    type_category_hi: "à¤®à¤§à¥à¤¯ à¤¬à¤¿à¤‚à¤¦à¥ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤¸à¥‡ à¤²à¤•à¥à¤·à¤¿à¤¤ à¤²à¤¾à¤­",
    question_text: "The percentage profit earned by James on selling an article for â‚¹1,920 is equal to the percentage loss incurred by selling the same article for â‚¹1,500. At what selling price should he sell the article if he wants to make a profit of 10%?",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ â‚¹1,920 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤° à¤œà¥‡à¤®à¥à¤¸ à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤…à¤°à¥à¤œà¤¿à¤¤ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤‰à¤¸à¥€ à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ â‚¹1,500 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤° à¤¹à¥à¤ˆ à¤¹à¤¾à¤¨à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤µà¤¹ 10% à¤•à¤¾ à¤²à¤¾à¤­ à¤•à¤®à¤¾à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¤¾ à¤¹à¥ˆ à¤¤à¥‹ à¤‰à¤¸à¥‡ à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ à¤•à¤¿à¤¸ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤?",
    options: {
      a: "â‚¹2,000",
      b: "â‚¹4,000",
      c: "â‚¹1,881",
      d: "â‚¹7,000"
    },
    options_hi: {
      a: "â‚¹2,000",
      b: "â‚¹4,000",
      c: "â‚¹1,881",
      d: "â‚¹7,000"
    },
    correct_option: "c",
    solution_text: "Since percentage profit at â‚¹1,920 equals percentage loss at â‚¹1,500 (both on same CP):\nProfit Amount = Loss Amount\n1,920 - CP = CP - 1,500\n2 CP = 3,420 => CP = â‚¹1,710.\nTo make a profit of 10%:\nRequired SP = 1,710 Ã— 1.10 = â‚¹1,881.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤¸à¤®à¤¾à¤¨ à¤²à¤¾à¤­ à¤”à¤° à¤¹à¤¾à¤¨à¤¿ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤° CP = (1920 + 1500) / 2 = 3420 / 2 = â‚¹1,710à¥¤\n10% à¤²à¤¾à¤­ à¤ªà¤° SP = 1710 Ã— 1.10 = â‚¹1,881à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "CP = (1920 + 1500) / 2 = 1710.\nSP = 1710 Ã— 1.1 = â‚¹1,881.",
    shortcut_text_hi: "CP = 1710 => SP = 1710 Ã— 1.1 = â‚¹1,881à¥¤"
  },
  {
    question_number: 16,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 18",
    type_category: "Cost Increase with New Profit Target",
    type_category_hi: "à¤²à¤¾à¤—à¤¤ à¤µà¥ƒà¤¦à¥à¤§à¤¿ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¨à¤¯à¤¾ à¤²à¤¾à¤­ à¤²à¤•à¥à¤·à¥à¤¯",
    question_text: "A television manufacturer earns a profit of 10% by selling one TV set for â‚¹24,750. If the production cost is increased by 15%, then what would be the new selling price of the TV set so as to gain a profit of 15%?",
    question_text_hi: "à¤à¤• à¤Ÿà¥‡à¤²à¥€à¤µà¤¿à¤œà¤¨ à¤¨à¤¿à¤°à¥à¤®à¤¾à¤¤à¤¾ à¤à¤• à¤Ÿà¥€à¤µà¥€ à¤¸à¥‡à¤Ÿ â‚¹24,750 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤•à¤° 10% à¤•à¤¾ à¤²à¤¾à¤­ à¤•à¤®à¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤‰à¤¤à¥à¤ªà¤¾à¤¦à¤¨ à¤²à¤¾à¤—à¤¤ à¤®à¥‡à¤‚ 15% à¤•à¥€ à¤µà¥ƒà¤¦à¥à¤§à¤¿ à¤¹à¥‹ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆ, à¤¤à¥‹ 15% à¤•à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤Ÿà¥€à¤µà¥€ à¤¸à¥‡à¤Ÿ à¤•à¤¾ à¤¨à¤¯à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤—à¤¾?",
    options: {
      a: "â‚¹28,756.25",
      b: "â‚¹27,756.25",
      c: "â‚¹29,756.25",
      d: "â‚¹26,756.26"
    },
    options_hi: {
      a: "â‚¹28,756.25",
      b: "â‚¹27,756.25",
      c: "â‚¹29,756.25",
      d: "â‚¹26,756.26"
    },
    correct_option: "c",
    solution_text: "Original Selling Price = â‚¹24,750 at 10% profit.\nInitial Production Cost = 24,750 / 1.10 = â‚¹22,500.\nNew Production Cost (increased by 15%) = 22,500 Ã— 1.15 = â‚¹25,875.\nNew Selling Price for 15% profit = 25,875 Ã— 1.15 = â‚¹29,756.25.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤®à¥‚à¤² CP = 24,750 / 1.10 = â‚¹22,500à¥¤\nà¤¨à¤¯à¤¾ CP = 22,500 Ã— 1.15 = â‚¹25,875à¥¤\n15% à¤²à¤¾à¤­ à¤ªà¤° à¤¨à¤¯à¤¾ SP = 25,875 Ã— 1.15 = â‚¹29,756.25à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "New SP = (24,750 / 1.10) Ã— 1.15 Ã— 1.15 = 22,500 Ã— 1.3225 = â‚¹29,756.25.",
    shortcut_text_hi: "New SP = 22,500 Ã— 1.15 Ã— 1.15 = â‚¹29,756.25à¥¤"
  },
  {
    question_number: 17,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 8",
    type_category: "22% Loss to 6% Gain Price Transition",
    type_category_hi: "22% à¤¹à¤¾à¤¨à¤¿ à¤¸à¥‡ 6% à¤²à¤¾à¤­ à¤®à¥‡à¤‚ à¤°à¥‚à¤ªà¤¾à¤‚à¤¤à¤°à¤£",
    question_text: "A seller gets 22% loss on selling a set of books for â‚¹1,755. What should be its selling price for getting 6% profit?",
    question_text_hi: "à¤à¤• à¤µà¤¿à¤•à¥à¤°à¥‡à¤¤à¤¾ à¤•à¥‹ à¤ªà¥à¤¸à¥à¤¤à¤•à¥‹à¤‚ à¤•à¤¾ à¤à¤• à¤¸à¥‡à¤Ÿ â‚¹1,755 à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤° 22% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆà¥¤ 6% à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‡à¤¸à¤•à¤¾ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤?",
    options: {
      a: "â‚¹2,375",
      b: "â‚¹2,385",
      c: "â‚¹2,355",
      d: "â‚¹2,365"
    },
    options_hi: {
      a: "â‚¹2,375",
      b: "â‚¹2,385",
      c: "â‚¹2,355",
      d: "â‚¹2,365"
    },
    correct_option: "b",
    solution_text: "At 22% loss, SP = (100 - 22)% = 78% of CP = â‚¹1,755.\nCP = 1,755 / 0.78 = â‚¹2,250.\nFor 6% profit, Required SP = 2,250 Ã— 1.06 = â‚¹2,385.\nCorrect Answer: Option (b).",
    solution_text_hi: "78% = â‚¹1,755 => CP = 1755 / 0.78 = â‚¹2,250à¥¤\n6% à¤²à¤¾à¤­ à¤ªà¤° à¤…à¤­à¥€à¤·à¥à¤Ÿ SP = 2250 Ã— 1.06 = â‚¹2,385à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (b) à¤¹à¥ˆà¥¤",
    shortcut_text: "SPâ‚‚ = (1755 / 78) Ã— 106 = 22.5 Ã— 106 = â‚¹2,385.",
    shortcut_text_hi: "SPâ‚‚ = (1755 / 78) Ã— 106 = 22.5 Ã— 106 = â‚¹2,385à¥¤"
  },
  {
    question_number: 18,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 9",
    type_category: "Mixed Grains with Different Profits",
    type_category_hi: "à¤µà¤¿à¤­à¤¿à¤¨à¥à¤¨ à¤²à¤¾à¤­ à¤¦à¤°à¥‹à¤‚ à¤ªà¤° à¤¸à¤‚à¤¯à¥à¤•à¥à¤¤ à¤…à¤¨à¤¾à¤œ",
    question_text: "The cost price of 5 kg of wheat and 10 kg of lentil were â‚¹70 and â‚¹80 per kg respectively. On selling, he gained 10% profit on wheat and 20% profit on lentil. What was the total selling price of all items?",
    question_text_hi: "5 à¤•à¤¿à¤²à¥‹ à¤—à¥‡à¤¹à¥‚à¤‚ à¤”à¤° 10 à¤•à¤¿à¤²à¥‹ à¤¦à¤¾à¤² à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤°à¤®à¤¶à¤ƒ â‚¹70 à¤”à¤° â‚¹80 à¤ªà¥à¤°à¤¤à¤¿ à¤•à¤¿à¤²à¥‹ à¤¥à¤¾à¥¤ à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤°, à¤‰à¤¸à¥‡ à¤—à¥‡à¤¹à¥‚à¤‚ à¤ªà¤° 10% à¤”à¤° à¤¦à¤¾à¤² à¤ªà¤° 20% à¤•à¤¾ à¤²à¤¾à¤­ à¤¹à¥à¤†à¥¤ à¤¸à¤­à¥€ à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¤¾ à¤•à¥à¤² à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¥à¤¾?",
    options: {
      a: "â‚¹1,375",
      b: "â‚¹1,345",
      c: "â‚¹1,400",
      d: "â‚¹1,350"
    },
    options_hi: {
      a: "â‚¹1,375",
      b: "â‚¹1,345",
      c: "â‚¹1,400",
      d: "â‚¹1,350"
    },
    correct_option: "b",
    solution_text: "Wheat:\nCP = 5 kg Ã— â‚¹70 = â‚¹350.\nProfit = 10% => SP = 350 Ã— 1.10 = â‚¹385.\nLentil:\nCP = 10 kg Ã— â‚¹80 = â‚¹800.\nProfit = 20% => SP = 800 Ã— 1.20 = â‚¹960.\nTotal Selling Price = 385 + 960 = â‚¹1,345.\nCorrect Answer: Option (b).",
    solution_text_hi: "à¤—à¥‡à¤¹à¥‚à¤‚: CP = 5 Ã— 70 = â‚¹350 => SP = 350 Ã— 1.10 = â‚¹385à¥¤\nà¤¦à¤¾à¤²: CP = 10 Ã— 80 = â‚¹800 => SP = 800 Ã— 1.20 = â‚¹960à¥¤\nà¤•à¥à¤² à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ = 385 + 960 = â‚¹1,345à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (b) à¤¹à¥ˆà¥¤",
    shortcut_text: "SP = (350 Ã— 1.10) + (800 Ã— 1.20) = 385 + 960 = â‚¹1,345.",
    shortcut_text_hi: "à¤•à¥à¤² SP = 385 + 960 = â‚¹1,345à¥¤"
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
    type_category_hi: "à¤¹à¤¾à¤¨à¤¿ à¤”à¤° à¤²à¤¾à¤­ à¤•à¤¾ à¤¸à¤‚à¤¯à¥à¤•à¥à¤¤ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨",
    question_text: "A man sold a shirt for â‚¹960 at a loss of 4%. He sells a sweater for â‚¹840 at a profit of 20%. Find his net profit or loss in â‚¹.",
    question_text_hi: "à¤à¤• à¤µà¥à¤¯à¤•à¥à¤¤à¤¿ à¤¨à¥‡ à¤à¤• à¤¶à¤°à¥à¤Ÿ â‚¹960 à¤®à¥‡à¤‚ 4% à¤•à¥€ à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤¬à¥‡à¤šà¥€à¥¤ à¤µà¤¹ à¤à¤• à¤¸à¥à¤µà¥‡à¤Ÿà¤° â‚¹840 à¤®à¥‡à¤‚ 20% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤‰à¤¸à¤•à¤¾ à¤¶à¥à¤¦à¥à¤§ à¤²à¤¾à¤­ à¤¯à¤¾ à¤¹à¤¾à¤¨à¤¿ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
    options: {
      a: "Profit, â‚¹100",
      b: "Loss, â‚¹123",
      c: "Loss, â‚¹100",
      d: "Profit, â‚¹123"
    },
    options_hi: {
      a: "â‚¹100 à¤²à¤¾à¤­",
      b: "â‚¹123 à¤¹à¤¾à¤¨à¤¿",
      c: "â‚¹100 à¤¹à¤¾à¤¨à¤¿",
      d: "â‚¹123 à¤²à¤¾à¤­"
    },
    correct_option: "a",
    solution_text: "Shirt: SP = â‚¹960 at 4% loss.\nCP_shirt = 960 / 0.96 = â‚¹1,000.\nLoss on shirt = 1,000 - 960 = â‚¹40.\nSweater: SP = â‚¹840 at 20% profit.\nCP_sweater = 840 / 1.20 = â‚¹700.\nProfit on sweater = 840 - 700 = â‚¹140.\nNet Profit = Profit on sweater - Loss on shirt = 140 - 40 = â‚¹100.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤¶à¤°à¥à¤Ÿ à¤•à¤¾ CP = 960 / 0.96 = â‚¹1,000à¥¤ à¤¹à¤¾à¤¨à¤¿ = â‚¹40à¥¤\nà¤¸à¥à¤µà¥‡à¤Ÿà¤° à¤•à¤¾ CP = 840 / 1.20 = â‚¹700à¥¤ à¤²à¤¾à¤­ = â‚¹140à¥¤\nà¤¶à¥à¤¦à¥à¤§ à¤²à¤¾à¤­ = 140 - 40 = â‚¹100 (à¤²à¤¾à¤­)à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "Total SP = 960 + 840 = 1,800.\nTotal CP = 1,000 + 700 = 1,700.\nNet Profit = 1,800 - 1,700 = â‚¹100.",
    shortcut_text_hi: "à¤•à¥à¤² SP = 1800, à¤•à¥à¤² CP = 1700 => à¤²à¤¾à¤­ = â‚¹100à¥¤"
  },
  {
    question_number: 20,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 20",
    type_category: "Buy-Back Transaction with Loss on Resale",
    type_category_hi: "à¤ªà¥à¤¨à¤°à¥à¤–à¤°à¥€à¤¦ à¤”à¤° à¤ªà¥à¤¨à¤°à¥à¤µà¤¿à¤•à¥à¤°à¤¯ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨",
    question_text: "A motor car worth â‚¹2,00,000 is sold by Ramu at 5% profit to Rahul. Rahul sells the motor car back to Ramu at 2% loss. Ramu's net profit (in â‚¹) in the complete transaction is:",
    question_text_hi: "à¤°à¤¾à¤®à¥‚ à¤¦à¥à¤µà¤¾à¤°à¤¾ â‚¹2,00,000 à¤®à¥‚à¤²à¥à¤¯ à¤•à¥€ à¤à¤• à¤®à¥‹à¤Ÿà¤° à¤•à¤¾à¤° 5% à¤²à¤¾à¤­ à¤ªà¤° à¤°à¤¾à¤¹à¥à¤² à¤•à¥‹ à¤¬à¥‡à¤šà¥€ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤°à¤¾à¤¹à¥à¤² à¤®à¥‹à¤Ÿà¤° à¤•à¤¾à¤° à¤•à¥‹ 2% à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤°à¤¾à¤®à¥‚ à¤•à¥‹ à¤µà¤¾à¤ªà¤¸ à¤¬à¥‡à¤š à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤ªà¥‚à¤°à¥‡ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨ à¤®à¥‡à¤‚ à¤°à¤¾à¤®à¥‚ à¤•à¤¾ à¤¶à¥à¤¦à¥à¤§ à¤²à¤¾à¤­ (â‚¹ à¤®à¥‡à¤‚) à¤¹à¥ˆ:",
    options: {
      a: "â‚¹3,208",
      b: "â‚¹2,058",
      c: "â‚¹4,200",
      d: "â‚¹3,200"
    },
    options_hi: {
      a: "â‚¹3,208",
      b: "â‚¹2,058",
      c: "â‚¹4,200",
      d: "â‚¹3,200"
    },
    correct_option: "c",
    solution_text: "Step 1: Ramu sells car to Rahul at 5% profit:\nSelling Price (Rahul's CP) = 2,00,000 Ã— 1.05 = â‚¹2,10,000.\nRamu has received â‚¹2,10,000.\nStep 2: Rahul sells back to Ramu at 2% loss on â‚¹2,10,000:\nRahul's SP (Ramu pays) = 2,10,000 Ã— (1 - 0.02) = 2,10,000 Ã— 0.98 = â‚¹2,05,800.\nRamu receives his car back and keeps the difference in cash:\nNet Profit = Cash Received - Cash Paid = 2,10,000 - 2,05,800 = â‚¹4,200.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤šà¤°à¤£ 1: à¤°à¤¾à¤®à¥‚ à¤¨à¥‡ à¤°à¤¾à¤¹à¥à¤² à¤•à¥‹ à¤¬à¥‡à¤šà¤¾ = 2,00,000 Ã— 1.05 = â‚¹2,10,000à¥¤\nà¤šà¤°à¤£ 2: à¤°à¤¾à¤¹à¥à¤² à¤¨à¥‡ 2% à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤°à¤¾à¤®à¥‚ à¤•à¥‹ à¤µà¤¾à¤ªà¤¸ à¤¬à¥‡à¤šà¤¾ = 2,10,000 Ã— 0.98 = â‚¹2,05,800à¥¤\nà¤°à¤¾à¤®à¥‚ à¤•à¥‡ à¤ªà¤¾à¤¸ à¤•à¤¾à¤° à¤µà¤¾à¤ªà¤¸ à¤† à¤—à¤ˆ à¤”à¤° à¤¨à¤•à¤¦ à¤¬à¤šà¤¾ = 2,10,000 - 2,05,800 = â‚¹4,200à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "Ramu's gain = 2% of Rahul's cost = 2% of â‚¹2,10,000 = â‚¹4,200.",
    shortcut_text_hi: "à¤°à¤¾à¤®à¥‚ à¤•à¤¾ à¤²à¤¾à¤­ = 2,10,000 à¤•à¤¾ 2% = â‚¹4,200à¥¤"
  },
  {
    question_number: 21,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 6",
    type_category: "Grouped Clothing Cost & Individual Sale",
    type_category_hi: "à¤¸à¤‚à¤¯à¥à¤•à¥à¤¤ à¤µà¤¸à¥à¤¤à¥à¤° à¤²à¤¾à¤—à¤¤ à¤”à¤° à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤¬à¤¿à¤•à¥à¤°à¥€",
    question_text: "The set of 2 pants and 4 shirts or 1 pant and 6 shirts costs â‚¹5,600. A shopkeeper decides to sell them separately. He sold 10 shirts for â‚¹6,000. Find the loss or profit on each shirt.",
    question_text_hi: "2 à¤ªà¥ˆà¤‚à¤Ÿ à¤”à¤° 4 à¤¶à¤°à¥à¤Ÿ à¤¯à¤¾ 1 à¤ªà¥ˆà¤‚à¤Ÿ à¤”à¤° 6 à¤¶à¤°à¥à¤Ÿ à¤•à¥‡ à¤¸à¥‡à¤Ÿ à¤•à¥€ à¤•à¥€à¤®à¤¤ â‚¹5,600 à¤¹à¥ˆà¥¤ à¤à¤• à¤¦à¥à¤•à¤¾à¤¨à¤¦à¤¾à¤° à¤‰à¤¨à¥à¤¹à¥‡à¤‚ à¤…à¤²à¤—-à¤…à¤²à¤— à¤¬à¥‡à¤šà¤¨à¥‡ à¤•à¤¾ à¤«à¥ˆà¤¸à¤²à¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤‰à¤¸à¤¨à¥‡ â‚¹6,000 à¤®à¥‡à¤‚ 10 à¤¶à¤°à¥à¤Ÿ à¤¬à¥‡à¤šà¥€à¤‚à¥¤ à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤¶à¤°à¥à¤Ÿ à¤ªà¤° à¤¹à¤¾à¤¨à¤¿ à¤¯à¤¾ à¤²à¤¾à¤­ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
    options: {
      a: "Profit â‚¹1,000",
      b: "Loss â‚¹1,000",
      c: "Profit â‚¹100",
      d: "Loss â‚¹100"
    },
    options_hi: {
      a: "â‚¹1,000 à¤²à¤¾à¤­",
      b: "â‚¹1,000 à¤¹à¤¾à¤¨à¤¿",
      c: "â‚¹100 à¤²à¤¾à¤­",
      d: "â‚¹100 à¤¹à¤¾à¤¨à¤¿"
    },
    correct_option: "d",
    solution_text: "Let CP of 1 pant = P and CP of 1 shirt = S.\nGiven: 2P + 4S = P + 6S = â‚¹5,600\nFrom 2P + 4S = P + 6S => P = 2S.\nSubstitute P = 2S into P + 6S = 5,600:\n2S + 6S = 5,600 => 8S = 5,600 => S = â‚¹700.\nCost price of 1 shirt = â‚¹700.\nSelling price of 1 shirt = 6,000 / 10 = â‚¹600.\nLoss per shirt = CP - SP = 700 - 600 = â‚¹100 Loss.\nCorrect Answer: Option (d).",
    solution_text_hi: "2P + 4S = P + 6S => P = 2Sà¥¤\n2S + 6S = 5,600 => 8S = 5,600 => S = â‚¹700à¥¤\n1 à¤¶à¤°à¥à¤Ÿ à¤•à¤¾ SP = 6,000 / 10 = â‚¹600à¥¤\nà¤¹à¤¾à¤¨à¤¿ = 700 - 600 = â‚¹100 à¤¹à¤¾à¤¨à¤¿à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (d) à¤¹à¥ˆà¥¤",
    shortcut_text: "8 Shirts = 5,600 => CP = 700. SP = 600 => Loss = â‚¹100.",
    shortcut_text_hi: "8 à¤¶à¤°à¥à¤Ÿ = 5600 => CP = 700à¥¤ SP = 600 => à¤¹à¤¾à¤¨à¤¿ = â‚¹100à¥¤"
  },
  {
    question_number: 22,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 2",
    type_category: "Ratio of x to y for Given Profit",
    type_category_hi: "à¤¦à¤¿à¤ à¤—à¤ à¤²à¤¾à¤­ à¤•à¥‡ à¤²à¤¿à¤ x à¤”à¤° y à¤•à¤¾ à¤…à¤¨à¥à¤ªà¤¾à¤¤",
    question_text: "When the cost price of x articles is equal to the selling price of y articles, the profit is 25%. Find the ratio of x : y.",
    question_text_hi: "à¤œà¤¬ x à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¤¾ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ y à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‡ à¤¬à¤°à¤¾à¤¬à¤° à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤²à¤¾à¤­ 25% à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ x : y à¤•à¤¾ à¤…à¤¨à¥à¤ªà¤¾à¤¤ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
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
    solution_text: "Given: x Ã— CP = y Ã— SP => SP / CP = x / y.\nProfit% = 25% => SP / CP = 1 + 0.25 = 125 / 100 = 5 / 4.\nEquating the ratios:\nx / y = 5 / 4.\nTherefore, x : y = 5 : 4.\nCorrect Answer: Option (b).",
    solution_text_hi: "x Ã— CP = y Ã— SP => SP / CP = x / yà¥¤\n25% à¤²à¤¾à¤­ => SP / CP = 125 / 100 = 5 / 4à¥¤\nà¤…à¤¤à¤ƒ x : y = 5 : 4à¥¤ à¤µà¤¿à¤•à¤²à¥à¤ª (b)à¥¤",
    shortcut_text: "x / y = SP / CP = 125 / 100 = 5 : 4.",
    shortcut_text_hi: "x : y = SP : CP = 125 : 100 = 5 : 4à¥¤"
  },
  {
    question_number: 23,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 21",
    type_category: "Ratio of Selling Prices with Differential Gains",
    type_category_hi: "à¤µà¤¿à¤­à¤¿à¤¨à¥à¤¨ à¤²à¤¾à¤­à¥‹à¤‚ à¤ªà¤° à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯à¥‹à¤‚ à¤•à¤¾ à¤…à¤¨à¥à¤ªà¤¾à¤¤",
    question_text: "On selling an item at a profit of 4% and 10%, there is a difference of â‚¹3 in selling price. Then, the ratio of the selling price of both is:",
    question_text_hi: "à¤à¤• à¤µà¤¸à¥à¤¤à¥ à¤•à¥‹ 4% à¤”à¤° 10% à¤•à¥‡ à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¥‡ à¤ªà¤°, à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤®à¥‡à¤‚ â‚¹3 à¤•à¤¾ à¤…à¤‚à¤¤à¤° à¤†à¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤¦à¥‹à¤¨à¥‹à¤‚ à¤•à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¤¾ à¤…à¤¨à¥à¤ªà¤¾à¤¤ à¤¹à¥ˆ:",
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
    solution_text: "Let Cost Price = CP.\nSPâ‚ at 4% profit = 1.04 CP.\nSPâ‚‚ at 10% profit = 1.10 CP.\nRatio of SPâ‚ : SPâ‚‚ = 1.04 CP : 1.10 CP = 104 : 110.\nDividing by 2:\n= 52 : 55.\n(Note: The â‚¹3 difference confirms CP = 3 / 0.06 = â‚¹50, but the ratio is independent of CP).\nCorrect Answer: Option (a).",
    solution_text_hi: "SPâ‚ = 1.04 CP, SPâ‚‚ = 1.10 CPà¥¤\nà¤…à¤¨à¥à¤ªà¤¾à¤¤ SPâ‚ : SPâ‚‚ = 104 : 110 = 52 : 55à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "Ratio = 104 : 110 = 52 : 55.",
    shortcut_text_hi: "à¤…à¤¨à¥à¤ªà¤¾à¤¤ = 104 : 110 = 52 : 55à¥¤"
  },
  {
    question_number: 24,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 21",
    type_category: "Ratio of Selling Prices at 8% and 12%",
    type_category_hi: "8% à¤”à¤° 12% à¤ªà¤° à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯à¥‹à¤‚ à¤•à¤¾ à¤…à¤¨à¥à¤ªà¤¾à¤¤",
    question_text: "The difference of selling prices of an item on the basis of profit of 8% and 12% is â‚¹3. The ratio of the selling prices of both the items is:",
    question_text_hi: "8% à¤”à¤° 12% à¤•à¥‡ à¤²à¤¾à¤­ à¤•à¥‡ à¤†à¤§à¤¾à¤° à¤ªà¤° à¤•à¤¿à¤¸à¥€ à¤µà¤¸à¥à¤¤à¥ à¤•à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¤¾ à¤…à¤‚à¤¤à¤° â‚¹3 à¤¹à¥ˆà¥¤ à¤¦à¥‹à¤¨à¥‹à¤‚ à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‡ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¤¾ à¤…à¤¨à¥à¤ªà¤¾à¤¤ à¤¹à¥ˆ:",
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
    solution_text: "Let Cost Price = CP.\nSPâ‚ at 8% profit = 1.08 CP.\nSPâ‚‚ at 12% profit = 1.12 CP.\nRatio SPâ‚ : SPâ‚‚ = 108 : 112.\nDividing both numbers by 4:\n108 / 4 = 27\n112 / 4 = 28\nRatio = 27 : 28.\nCorrect Answer: Option (a).",
    solution_text_hi: "SPâ‚ = 1.08 CP, SPâ‚‚ = 1.12 CPà¥¤\nà¤…à¤¨à¥à¤ªà¤¾à¤¤ = 108 : 112 = 27 : 28à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "Ratio = 108 : 112 = 27 : 28.",
    shortcut_text_hi: "à¤…à¤¨à¥à¤ªà¤¾à¤¤ = 108 : 112 = 27 : 28à¥¤"
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
    type_category_hi: "25% à¤²à¤¾à¤­ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¤¿à¤²à¥‹à¤—à¥à¤°à¤¾à¤® à¤®à¥‡à¤‚ à¤—à¤²à¤¤ à¤µà¤œà¤¨",
    question_text: "A dishonest dealer professes to sell his goods at the cost price but uses a false weight and thus gains 25%. How much quantity of grains does he give for a kilogram?",
    question_text_hi: "à¤à¤• à¤¬à¥‡à¤ˆà¤®à¤¾à¤¨ à¤¡à¥€à¤²à¤° à¤…à¤ªà¤¨à¥‡ à¤®à¤¾à¤² à¤•à¥‹ à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤ªà¤° à¤¬à¥‡à¤šà¤¨à¥‡ à¤•à¤¾ à¤¦à¤¾à¤µà¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤²à¥‡à¤•à¤¿à¤¨ à¤—à¤²à¤¤ à¤µà¤œà¤¨ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤‡à¤¸ à¤ªà¥à¤°à¤•à¤¾à¤° 25% à¤•à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤à¤• à¤•à¤¿à¤²à¥‹à¤—à¥à¤°à¤¾à¤® à¤•à¥‡ à¤²à¤¿à¤ à¤µà¤¹ à¤•à¤¿à¤¤à¤¨à¥‡ à¤—à¥à¤°à¤¾à¤® à¤…à¤¨à¤¾à¤œ à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆ?",
    options: {
      a: "800 gram",
      b: "900 gram",
      c: "750 gram",
      d: "975 gram"
    },
    options_hi: {
      a: "800 à¤—à¥à¤°à¤¾à¤®",
      b: "900 à¤—à¥à¤°à¤¾à¤®",
      c: "750 à¤—à¥à¤°à¤¾à¤®",
      d: "975 à¤—à¥à¤°à¤¾à¤®"
    },
    correct_option: "a",
    solution_text: "Let the weight delivered for 1,000 gm be W grams.\nProfit% = [(1,000 - W) / W] Ã— 100\nGiven Profit% = 25%\n=> 25 / 100 = (1,000 - W) / W\n=> 1 / 4 = (1,000 - W) / W\n=> W = 4,000 - 4W\n=> 5W = 4,000 => W = 4,000 / 5 = 800 grams.\nCorrect Answer: Option (a).",
    solution_text_hi: "à¤®à¤¾à¤¨à¤¾ à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤µà¤œà¤¨ = W à¤—à¥à¤°à¤¾à¤®à¥¤\nà¤²à¤¾à¤­ = [(1000 - W) / W] Ã— 100 = 25%\n1/4 = (1000 - W) / W => 5W = 4000 => W = 800 à¤—à¥à¤°à¤¾à¤®à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (a) à¤¹à¥ˆà¥¤",
    shortcut_text: "W = 1,000 / 1.25 = 800 gram.",
    shortcut_text_hi: "W = 1000 / 1.25 = 800 à¤—à¥à¤°à¤¾à¤®à¥¤"
  },
  {
    question_number: 26,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 22",
    type_category: "Bulk Quintal Purchase with Transportation Overhead",
    type_category_hi: "à¤¥à¥‹à¤• à¤–à¤°à¥€à¤¦ à¤”à¤° à¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤ªà¤°à¤¿à¤µà¤¹à¤¨ à¤µà¥à¤¯à¤¯",
    question_text: "A dealer buys 200 quintals of wheat at â‚¹1,200 per quintal. He spends â‚¹10,000 on transportation and storage. If he sells the wheat at â‚¹13 per kg, then the profit percentage of the dealer is:",
    question_text_hi: "à¤à¤• à¤¡à¥€à¤²à¤° â‚¹1,200 à¤ªà¥à¤°à¤¤à¤¿ à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤² à¤•à¥€ à¤¦à¤° à¤¸à¥‡ 200 à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤² à¤—à¥‡à¤¹à¥‚à¤‚ à¤–à¤°à¥€à¤¦à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤µà¤¹ à¤ªà¤°à¤¿à¤µà¤¹à¤¨ à¤”à¤° à¤­à¤‚à¤¡à¤¾à¤°à¤£ à¤ªà¤° â‚¹10,000 à¤–à¤°à¥à¤š à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤µà¤¹ à¤—à¥‡à¤¹à¥‚à¤‚ â‚¹13 à¤ªà¥à¤°à¤¤à¤¿ à¤•à¤¿à¤²à¥‹ à¤•à¥€ à¤¦à¤° à¤¸à¥‡ à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤¡à¥€à¤²à¤° à¤•à¤¾ à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤¹à¥ˆ:",
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
    solution_text: "Note: 1 quintal = 100 kg. Total quantity = 200 Ã— 100 = 20,000 kg.\nCost of wheat = 200 Ã— 1,200 = â‚¹2,40,000.\nOverhead expenses = â‚¹10,000.\nTotal Cost Price = 2,40,000 + 10,000 = â‚¹2,50,000.\nSelling Price per kg = â‚¹13.\nTotal Selling Price = 20,000 Ã— 13 = â‚¹2,60,000.\nProfit = 2,60,000 - 2,50,000 = â‚¹10,000.\nProfit% = (10,000 / 2,50,000) Ã— 100 = 4%.\nCorrect Answer: Option (d).",
    solution_text_hi: "1 à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤² = 100 à¤•à¤¿à¤²à¥‹à¥¤ à¤•à¥à¤² = 20,000 à¤•à¤¿à¤²à¥‹à¥¤\nà¤—à¥‡à¤¹à¥‚à¤‚ à¤•à¥€ à¤²à¤¾à¤—à¤¤ = 200 Ã— 1200 = â‚¹2,40,000à¥¤\nà¤…à¤¤à¤¿à¤°à¤¿à¤•à¥à¤¤ à¤–à¤°à¥à¤š = â‚¹10,000à¥¤\nà¤•à¥à¤² CP = â‚¹2,50,000à¥¤\nà¤•à¥à¤² SP = 20,000 Ã— 13 = â‚¹2,60,000à¥¤\nà¤²à¤¾à¤­ = â‚¹10,000à¥¤\nà¤²à¤¾à¤­% = (10,000 / 2,50,000) Ã— 100 = 4%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (d) à¤¹à¥ˆà¥¤",
    shortcut_text: "CP per kg = (2,40,000 + 10,000) / 20,000 = 250 / 20 = â‚¹12.50.\nProfit% = [(13 - 12.5) / 12.5] Ã— 100 = (0.5 / 12.5) Ã— 100 = 4%.",
    shortcut_text_hi: "à¤ªà¥à¤°à¤¤à¤¿ à¤•à¤¿à¤²à¥‹ CP = 2,50,000 / 20,000 = â‚¹12.50à¥¤\nà¤²à¤¾à¤­% = (0.5 / 12.5) Ã— 100 = 4%à¥¤"
  },
  {
    question_number: 27,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 23",
    type_category: "Breakage/Damage in Transit with Remaining Sale",
    type_category_hi: "à¤ªà¤°à¤¿à¤µà¤¹à¤¨ à¤®à¥‡à¤‚ à¤Ÿà¥‚à¤Ÿ-à¤«à¥‚à¤Ÿ à¤”à¤° à¤¶à¥‡à¤· à¤•à¥€ à¤¬à¤¿à¤•à¥à¤°à¥€",
    question_text: "Sabiha purchased 240 cups for her shop at â‚¹8 each. During transportation, 24 cups got damaged, and she sold the remaining cups at â‚¹12 each. Find her overall percentage profit.",
    question_text_hi: "à¤¸à¤¬à¤¿à¤¹à¤¾ à¤¨à¥‡ à¤…à¤ªà¤¨à¥€ à¤¦à¥à¤•à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ â‚¹8 à¤ªà¥à¤°à¤¤à¤¿ à¤•à¤ª à¤•à¥€ à¤¦à¤° à¤¸à¥‡ 240 à¤•à¤ª à¤–à¤°à¥€à¤¦à¥‡à¥¤ à¤ªà¤°à¤¿à¤µà¤¹à¤¨ à¤•à¥‡ à¤¦à¥Œà¤°à¤¾à¤¨ 24 à¤•à¤ª à¤•à¥à¤·à¤¤à¤¿à¤—à¥à¤°à¤¸à¥à¤¤ à¤¹à¥‹ à¤—à¤, à¤”à¤° à¤‰à¤¸à¤¨à¥‡ à¤¶à¥‡à¤· à¤•à¤ª â‚¹12 à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤•à¥€ à¤¦à¤° à¤¸à¥‡ à¤¬à¥‡à¤šà¥‡à¥¤ à¤‰à¤¸à¤•à¤¾ à¤•à¥à¤² à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤ à¤²à¤¾à¤­ à¤œà¥à¤žà¤¾à¤¤ à¤•à¥€à¤œà¤¿à¤à¥¤",
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
    solution_text: "Total Cost Price = 240 Ã— 8 = â‚¹1,920.\nRemaining undamaged cups = 240 - 24 = 216 cups.\nTotal Selling Price = 216 Ã— 12 = â‚¹2,592.\nProfit = 2,592 - 1,920 = â‚¹672.\nProfit% = (672 / 1,920) Ã— 100 = 35%.\nCorrect Answer: Option (d).",
    solution_text_hi: "à¤•à¥à¤² CP = 240 Ã— 8 = â‚¹1,920à¥¤\nà¤¬à¤šà¥‡ à¤•à¤ª = 240 - 24 = 216à¥¤\nà¤•à¥à¤² SP = 216 Ã— 12 = â‚¹2,592à¥¤\nà¤²à¤¾à¤­ = 2,592 - 1,920 = â‚¹672à¥¤\nà¤²à¤¾à¤­% = (672 / 1,920) Ã— 100 = 35%à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (d) à¤¹à¥ˆà¥¤",
    shortcut_text: "Ratio SP / CP = 2,592 / 1,920 = 1.35 => 35% profit.",
    shortcut_text_hi: "SP / CP = 2592 / 1920 = 1.35 => 35% à¤²à¤¾à¤­à¥¤"
  },
  {
    question_number: 28,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Three Variable Simultaneous Sum Reduction",
    type_category_hi: "à¤¤à¥€à¤¨ à¤šà¤°à¥‹à¤‚ à¤•à¤¾ à¤¯à¥à¤—à¤ªà¤¤ à¤¯à¥‹à¤— à¤¸à¤°à¤²à¥€à¤•à¤°à¤£",
    question_text: "The cost of 2 pencils, 4 pens and 8 erasers is â‚¹12 and the cost of 8 pens, 10 pencils and 4 erasers is â‚¹36. What will be the cost of 3 pencils, 3 pens and 3 erasers?",
    question_text_hi: "2 à¤ªà¥‡à¤‚à¤¸à¤¿à¤², 4 à¤ªà¥‡à¤¨ à¤”à¤° 8 à¤‡à¤°à¥‡à¤œà¤¼à¤° à¤•à¥€ à¤•à¥€à¤®à¤¤ â‚¹12 à¤¹à¥ˆ à¤”à¤° 8 à¤ªà¥‡à¤¨, 10 à¤ªà¥‡à¤‚à¤¸à¤¿à¤² à¤”à¤° 4 à¤‡à¤°à¥‡à¤œà¤¼à¤° à¤•à¥€ à¤•à¥€à¤®à¤¤ â‚¹36 à¤¹à¥ˆà¥¤ 3 à¤ªà¥‡à¤‚à¤¸à¤¿à¤², 3 à¤ªà¥‡à¤¨ à¤”à¤° 3 à¤‡à¤°à¥‡à¤œà¤¼à¤° à¤•à¥€ à¤•à¥€à¤®à¤¤ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤—à¥€?",
    options: {
      a: "â‚¹10",
      b: "â‚¹15",
      c: "â‚¹12",
      d: "â‚¹18"
    },
    options_hi: {
      a: "â‚¹10",
      b: "â‚¹15",
      c: "â‚¹12",
      d: "â‚¹18"
    },
    correct_option: "c",
    solution_text: "Let cost of 1 pencil = x, 1 pen = y, 1 eraser = z.\nEquation 1: 2x + 4y + 8z = 12\nEquation 2: 10x + 8y + 4z = 36\nAdding Equation 1 and Equation 2:\n(2x + 10x) + (4y + 8y) + (8z + 4z) = 12 + 36\n12x + 12y + 12z = 48\nDividing throughout by 12:\nx + y + z = 4.\nCost of 1 pencil + 1 pen + 1 eraser = â‚¹4.\nTherefore, cost of 3 pencils, 3 pens and 3 erasers:\n= 3(x + y + z) = 3 Ã— 4 = â‚¹12.\nCorrect Answer: Option (c).",
    solution_text_hi: "2x + 4y + 8z = 12  --- (1)\n10x + 8y + 4z = 36  --- (2)\nà¤¦à¥‹à¤¨à¥‹à¤‚ à¤¸à¤®à¥€à¤•à¤°à¤£à¥‹à¤‚ à¤•à¥‹ à¤œà¥‹à¤¡à¤¼à¤¨à¥‡ à¤ªà¤°:\n12x + 12y + 12z = 48 => x + y + z = 4à¥¤\n3 à¤ªà¥‡à¤‚à¤¸à¤¿à¤², 3 à¤ªà¥‡à¤¨ à¤”à¤° 3 à¤‡à¤°à¥‡à¤œà¤¼à¤° à¤•à¥€ à¤•à¥€à¤®à¤¤ = 3 Ã— 4 = â‚¹12à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "Add both equations: 12(x + y + z) = 48 => (x + y + z) = 4.\n3(x + y + z) = 3 Ã— 4 = â‚¹12.",
    shortcut_text_hi: "à¤œà¥‹à¤¡à¤¼à¤¨à¥‡ à¤ªà¤°: 12(x+y+z) = 48 => x+y+z = 4 => 3(x+y+z) = â‚¹12à¥¤"
  },
  {
    question_number: 29,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 24",
    type_category: "Bulk Asset Repair and Target Average SP",
    type_category_hi: "à¤¥à¥‹à¤• à¤ªà¤°à¤¿à¤¸à¤‚à¤ªà¤¤à¥à¤¤à¤¿ à¤®à¤°à¤®à¥à¤®à¤¤ à¤”à¤° à¤”à¤¸à¤¤ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯",
    question_text: "John buys four old tractors for 2 lacs. He spent a total of 3 lacs in maintenance and repairing. If he already sells one tractor out of the four tractors for 1 lac, then in order to get a total 40% profit, what will be the average selling price of all the remaining 3 tractors?",
    question_text_hi: "à¤œà¥‰à¤¨ à¤¨à¥‡ 2 à¤²à¤¾à¤– à¤®à¥‡à¤‚ à¤šà¤¾à¤° à¤ªà¥à¤°à¤¾à¤¨à¥‡ à¤Ÿà¥à¤°à¥ˆà¤•à¥à¤Ÿà¤° à¤–à¤°à¥€à¤¦à¥‡à¥¤ à¤‰à¤¸à¤¨à¥‡ à¤°à¤–à¤°à¤–à¤¾à¤µ à¤”à¤° à¤®à¤°à¤®à¥à¤®à¤¤ à¤®à¥‡à¤‚ à¤•à¥à¤² 3 à¤²à¤¾à¤– à¤–à¤°à¥à¤š à¤•à¤¿à¤à¥¤ à¤¯à¤¦à¤¿ à¤µà¤¹ à¤šà¤¾à¤° à¤Ÿà¥à¤°à¥ˆà¤•à¥à¤Ÿà¤°à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¸à¥‡ à¤à¤• à¤Ÿà¥à¤°à¥ˆà¤•à¥à¤Ÿà¤° à¤•à¥‹ 1 à¤²à¤¾à¤– à¤®à¥‡à¤‚ à¤¬à¥‡à¤š à¤šà¥à¤•à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤•à¥à¤² 40% à¤²à¤¾à¤­ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤, à¤¶à¥‡à¤· à¤¸à¤­à¥€ 3 à¤Ÿà¥à¤°à¥ˆà¤•à¥à¤Ÿà¤°à¥‹à¤‚ à¤•à¤¾ à¤”à¤¸à¤¤ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥à¤¯à¤¾ à¤¹à¥‹à¤—à¤¾?",
    options: {
      a: "1.5 lacs",
      b: "1.2 lacs",
      c: "2 lacs",
      d: "2.3 lacs"
    },
    options_hi: {
      a: "1.5 à¤²à¤¾à¤–",
      b: "1.2 à¤²à¤¾à¤–",
      c: "2 à¤²à¤¾à¤–",
      d: "2.3 à¤²à¤¾à¤–"
    },
    correct_option: "c",
    solution_text: "Total investment (Cost Price) = 2 lacs + 3 lacs = 5 lacs.\nTarget overall profit = 40%.\nTotal required Selling Price = 5 lacs Ã— (1 + 0.40) = 5 Ã— 1.40 = 7 lacs.\nAmount already realized from selling 1st tractor = 1 lac.\nRemaining amount to be realized from 3 tractors = 7 lacs - 1 lac = 6 lacs.\nAverage selling price of remaining 3 tractors = 6 lacs / 3 = 2 lacs.\nCorrect Answer: Option (c).",
    solution_text_hi: "à¤•à¥à¤² à¤²à¤¾à¤—à¤¤ = 2 + 3 = 5 à¤²à¤¾à¤–à¥¤\n40% à¤²à¤¾à¤­ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥à¤² à¤…à¤­à¥€à¤·à¥à¤Ÿ SP = 5 Ã— 1.40 = 7 à¤²à¤¾à¤–à¥¤\n1 à¤Ÿà¥à¤°à¥ˆà¤•à¥à¤Ÿà¤° à¤¸à¥‡ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤°à¤¾à¤¶à¤¿ = 1 à¤²à¤¾à¤–à¥¤\nà¤¶à¥‡à¤· 3 à¤Ÿà¥à¤°à¥ˆà¤•à¥à¤Ÿà¤°à¥‹à¤‚ à¤¸à¥‡ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥€ à¤¹à¥‹à¤—à¥€ = 7 - 1 = 6 à¤²à¤¾à¤–à¥¤\nà¤”à¤¸à¤¤ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤®à¥‚à¤²à¥à¤¯ = 6 / 3 = 2 à¤²à¤¾à¤–à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (c) à¤¹à¥ˆà¥¤",
    shortcut_text: "Total SP = 5 Ã— 1.4 = 7 lacs.\nRemaining = 7 - 1 = 6 lacs.\nAverage for 3 = 6 / 3 = 2 lacs.",
    shortcut_text_hi: "à¤•à¥à¤² SP = 7 à¤²à¤¾à¤– => à¤¶à¥‡à¤· 3 à¤•à¤¾ SP = 6 à¤²à¤¾à¤– => à¤”à¤¸à¤¤ = 2 à¤²à¤¾à¤–à¥¤"
  },
  {
    question_number: 30,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 9",
    type_category: "Three-portion Land Sale with Overall Profit",
    type_category_hi: "à¤¤à¥€à¤¨ à¤­à¤¾à¤—à¥‹à¤‚ à¤®à¥‡à¤‚ à¤­à¥‚à¤®à¤¿ à¤¬à¤¿à¤•à¥à¤°à¥€ à¤”à¤° à¤•à¥à¤² à¤²à¤¾à¤­",
    question_text: "A man buys a land for 3 lacs. He sells its 25% part at 25% loss and 40% part at 25% profit. In order to earn a total profit of 15%, for how much money should he sell the remaining part of the land?",
    question_text_hi: "à¤à¤• à¤µà¥à¤¯à¤•à¥à¤¤à¤¿ 3 à¤²à¤¾à¤– à¤®à¥‡à¤‚ à¤à¤• à¤œà¤®à¥€à¤¨ à¤–à¤°à¥€à¤¦à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤µà¤¹ à¤‡à¤¸à¤•à¤¾ 25% à¤¹à¤¿à¤¸à¥à¤¸à¤¾ 25% à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° à¤”à¤° 40% à¤¹à¤¿à¤¸à¥à¤¸à¤¾ 25% à¤²à¤¾à¤­ à¤ªà¤° à¤¬à¥‡à¤šà¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤•à¥à¤² 15% à¤•à¤¾ à¤²à¤¾à¤­ à¤•à¤®à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤¸à¥‡ à¤œà¤®à¥€à¤¨ à¤•à¥‡ à¤¶à¥‡à¤· à¤¹à¤¿à¤¸à¥à¤¸à¥‡ à¤•à¥‹ à¤•à¤¿à¤¤à¤¨à¥‡ à¤ªà¥ˆà¤¸à¥‡ à¤®à¥‡à¤‚ à¤¬à¥‡à¤šà¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤?",
    options: {
      a: "â‚¹1,37,500",
      b: "â‚¹1,38,750",
      c: "â‚¹1,34,500",
      d: "â‚¹1,45,000"
    },
    options_hi: {
      a: "â‚¹1,37,500",
      b: "â‚¹1,38,750",
      c: "â‚¹1,34,500",
      d: "â‚¹1,45,000"
    },
    correct_option: "b",
    solution_text: "Total Cost Price of land = â‚¹3,00,000.\nTotal required Selling Price for 15% profit = 3,00,000 Ã— 1.15 = â‚¹3,45,000.\nPart 1 (25% of land):\nCost = 3,00,000 Ã— 0.25 = â‚¹75,000.\nSold at 25% loss => SPâ‚ = 75,000 Ã— 0.75 = â‚¹56,250.\nPart 2 (40% of land):\nCost = 3,00,000 Ã— 0.40 = â‚¹1,20,000.\nSold at 25% profit => SPâ‚‚ = 1,20,000 Ã— 1.25 = â‚¹1,50,000.\nTotal SP realized from Part 1 & Part 2 = 56,250 + 1,50,000 = â‚¹2,06,250.\nRemaining Selling Price required = 3,45,000 - 2,06,250 = â‚¹1,38,750.\nCorrect Answer: Option (b).",
    solution_text_hi: "à¤•à¥à¤² CP = â‚¹3,00,000à¥¤\n15% à¤²à¤¾à¤­ à¤ªà¤° à¤•à¥à¤² SP = 3,00,000 Ã— 1.15 = â‚¹3,45,000à¥¤\nà¤­à¤¾à¤— 1 (25% = â‚¹75,000): 25% à¤¹à¤¾à¤¨à¤¿ à¤ªà¤° SP = 75,000 Ã— 0.75 = â‚¹56,250à¥¤\nà¤­à¤¾à¤— 2 (40% = â‚¹1,20,000): 25% à¤²à¤¾à¤­ à¤ªà¤° SP = 1,20,000 Ã— 1.25 = â‚¹1,50,000à¥¤\nà¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¥à¤² à¤°à¤¾à¤¶à¤¿ = 56,250 + 1,50,000 = â‚¹2,06,250à¥¤\nà¤¶à¥‡à¤· à¤¹à¤¿à¤¸à¥à¤¸à¥‡ à¤•à¥€ à¤µà¤¿à¤•à¥à¤°à¤¯ à¤°à¤¾à¤¶à¤¿ = 3,45,000 - 2,06,250 = â‚¹1,38,750à¥¤\nà¤…à¤¤à¤ƒ à¤¸à¤¹à¥€ à¤‰à¤¤à¥à¤¤à¤° (b) à¤¹à¥ˆà¥¤",
    shortcut_text: "Total SP = 345,000.\nSPâ‚ + SPâ‚‚ = 56,250 + 150,000 = 206,250.\nRemaining SP = 345,000 - 206,250 = â‚¹1,38,750.",
    shortcut_text_hi: "à¤¶à¥‡à¤· SP = 3,45,000 - 2,06,250 = â‚¹1,38,750à¥¤"
  }
];

if (typeof window !== "undefined") {
  window.PROFIT_LOSS_SET_A_QUESTIONS = PROFIT_LOSS_SET_A_QUESTIONS;
  window.PROFIT_LOSS_SET_B_QUESTIONS = PROFIT_LOSS_SET_B_QUESTIONS;
  window.PROFIT_LOSS_PRACTICE_1_QUESTIONS = PROFIT_LOSS_SET_A_QUESTIONS;
  window.PROFIT_LOSS_PRACTICE_2_QUESTIONS = PROFIT_LOSS_SET_B_QUESTIONS;
}
