/**
 * Percentage Practice Sets 1 & 2 - Complete 50 Questions Dataset (25 Qs per set)
 * Level 1 to Level 5 with English & Hindi Translations, Options, Solutions, Shortcuts, and Type Labels
 *
 * Types:
 * Type 1: Problems based on Population (जनसंख्या पर आधारित प्रश्न)
 * Type 2: Problems based on Exam and Students (परीक्षा और छात्रों पर आधारित प्रश्न)
 * Type 3: Problems based on Income, Expenditure and Savings (आय, व्यय और बचत पर आधारित प्रश्न)
 * Type 4: Problems based on Percentage of Numbers (संख्याओं के प्रतिशत पर आधारित प्रश्न)
 * Type 5: Problems based on Percentage change (प्रतिशत परिवर्तन पर आधारित प्रश्न)
 * Type 6: Problems based on investment and business (निवेश और व्यवसाय पर आधारित प्रश्न)
 * Type 7: Problems related to finding percentage quantity (प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न)
 * Type 8: Problems based on finding percentage (प्रतिशत ज्ञात करने पर आधारित प्रश्न)
 * Type 9: Problems based on percentage change in area (क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न)
 * Type 10: Problems based on voting (मतदान और चुनाव पर आधारित प्रश्न)
 */

const PERCENTAGE_PRACTICE_1_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MORE THAN MODERATE
  // ==========================================
  {
    question_number: 1,
    practice_set: "Practice 1",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 1",
    type_category: "Problems based on Population",
    type_category_hi: "जनसंख्या पर आधारित प्रश्न",
    type_label: "Type 1: Problems based on Population",
    type_label_hi: "Type 1: जनसंख्या पर आधारित प्रश्न",
    question_text: "A village's population increases by 10% in the first year but decreases by 12% in the second year due to migration. If the present population is 50,000, what will it be at the end of the second year?",
    question_text_hi: "एक गाँव की जनसंख्या पहले वर्ष में 10% बढ़ जाती है लेकिन प्रवास के कारण दूसरे वर्ष में 12% घट जाती है। यदि वर्तमान जनसंख्या 50,000 है, तो दूसरे वर्ष के अंत में यह कितनी होगी?",
    options: {
      a: "48,000",
      b: "48,400",
      c: "49,000",
      d: "50,000"
    },
    options_hi: {
      a: "48,000",
      b: "48,400",
      c: "49,000",
      d: "50,000"
    },
    correct_option: "b",
    solution_text: "Crux: Compound change with different consecutive rates.\nFlow: 50,000 → +10% → 55,000 → -12% ⇒ 55,000 × 0.88 = 48,400.",
    solution_text_hi: "महत्वपूर्ण बिंदु: अलग-अलग क्रमिक दरों के साथ चक्रवृद्धि परिवर्तन।\nप्रक्रिया: 50,000 → +10% → 55,000 → -12% ⇒ 55,000 × 0.88 = 48,400।",
    shortcut_text: "Net Multiplier = 1.10 × 0.88 = 0.968.\nFinal Population = 50,000 × 0.968 = 48,400.",
    shortcut_text_hi: "कुल गुणक = 1.10 × 0.88 = 0.968।\nअंतिम जनसंख्या = 50,000 × 0.968 = 48,400।"
  },
  {
    question_number: 2,
    practice_set: "Practice 1",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 2",
    type_category: "Problems based on Exam and Students",
    type_category_hi: "परीक्षा और छात्रों पर आधारित प्रश्न",
    type_label: "Type 2: Problems based on Exam and Students",
    type_label_hi: "Type 2: परीक्षा और छात्रों पर आधारित प्रश्न",
    question_text: "In a test, candidate A scores 30% and fails by 20 marks. Candidate B scores 45% and gets 40 marks more than the minimum required to pass. What is the passing percentage?",
    question_text_hi: "एक परीक्षा में, उम्मीदवार A 30% अंक प्राप्त करता है और 20 अंकों से अनुत्तीर्ण हो जाता है। उम्मीदवार B 45% अंक प्राप्त करता है और उत्तीर्ण होने के लिए आवश्यक न्यूनतम अंकों से 40 अंक अधिक प्राप्त करता है। उत्तीर्ण प्रतिशत क्या है?",
    options: {
      a: "33%",
      b: "35%",
      c: "38%",
      d: "40%"
    },
    options_hi: {
      a: "33%",
      b: "35%",
      c: "38%",
      d: "40%"
    },
    correct_option: "b",
    solution_text: "Crux: Equating percentage difference to absolute mark difference.\nFlow: Percentage Gap = 45% - 30% = 15%.\nMarks Gap = +40 (above) - (-20) (below) = 60.\n15% = 60 → 100% = 400 (Max Marks).\nPassing Marks = (30% of 400) + 20 = 140.\nPassing % = (140 / 400) × 100 ⇒ 35%.",
    solution_text_hi: "महत्वपूर्ण बिंदु: प्रतिशत के अंतर को अंकों के वास्तविक अंतर के बराबर रखना।\nप्रक्रिया: प्रतिशत अंतर = 45% - 30% = 15%।\nअंकों का अंतर = +40 - (-20) = 60।\n15% = 60 → कुल अंक (100%) = 400।\nउत्तीर्ण अंक = (400 का 30%) + 20 = 140।\nउत्तीर्ण प्रतिशत = (140 / 400) × 100 = 35%।",
    shortcut_text: "15% = 60 marks ⇒ 1% = 4 marks.\n20 marks shortfall = 20 / 4 = 5%.\nPassing Percentage = 30% + 5% = 35%.",
    shortcut_text_hi: "15% = 60 अंक ⇒ 1% = 4 अंक।\n20 अंकों की कमी = 20 / 4 = 5%।\nउत्तीर्ण प्रतिशत = 30% + 5% = 35%।"
  },
  {
    question_number: 3,
    practice_set: "Practice 1",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "Rita spends 20% of her income on rent, 30% of the remaining amount on food, and saves the rest. If her total savings are ₹5,600, find her total income.",
    question_text_hi: "रीता अपनी आय का 20% किराए पर, शेष राशि का 30% भोजन पर खर्च करती है, और बाकी बचाती है। यदि उसकी कुल बचत ₹5,600 है, तो उसकी कुल आय ज्ञात कीजिए।",
    options: {
      a: "₹8,000",
      b: "₹10,000",
      c: "₹12,000",
      d: "₹15,000"
    },
    options_hi: {
      a: "₹8,000",
      b: "₹10,000",
      c: "₹12,000",
      d: "₹15,000"
    },
    correct_option: "b",
    solution_text: "Crux: Successive remainders calculation.\nFlow: Let total income = 100%.\nRent = 20% → Remaining = 80%.\nFood = 30% of 80% = 24% → Remaining (Savings) = 80% - 24% = 56%.\n56% = 5,600 ⇒ 100% = ₹10,000.",
    solution_text_hi: "महत्वपूर्ण बिंदु: शेष राशि की क्रमिक गणना।\nप्रक्रिया: माना कुल आय = 100%।\nकिराया = 20% → शेष = 80%।\nभोजन = 80% का 30% = 24% → शेष बचत = 80% - 24% = 56%।\n56% = ₹5,600 ⇒ कुल आय = ₹10,000।",
    shortcut_text: "Savings fraction: (1 - 0.20) × (1 - 0.30) = 0.80 × 0.70 = 0.56.\nTotal Income = 5,600 / 0.56 = ₹10,000.",
    shortcut_text_hi: "बचत भिन्न: (4/5) × (7/10) = 28/50 = 0.56।\nकुल आय = 5,600 / 0.56 = ₹10,000।"
  },
  {
    question_number: 4,
    practice_set: "Practice 1",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 4",
    type_category: "Problems based on Percentage of Numbers",
    type_category_hi: "संख्याओं के प्रतिशत पर आधारित प्रश्न",
    type_label: "Type 4: Problems based on Percentage of Numbers",
    type_label_hi: "Type 4: संख्याओं के प्रतिशत पर आधारित प्रश्न",
    question_text: "25% of a specific number is 15 less than 40% of the exact same number. Find the original number.",
    question_text_hi: "किसी विशिष्ट संख्या का 25% उसी संख्या के 40% से 15 कम है। मूल संख्या ज्ञात कीजिए।",
    options: {
      a: "75",
      b: "100",
      c: "125",
      d: "150"
    },
    options_hi: {
      a: "75",
      b: "100",
      c: "125",
      d: "150"
    },
    correct_option: "b",
    solution_text: "Crux: Finding the base number from a percentage difference.\nFlow: Difference = 40% - 25% = 15%.\n15% = 15 ⇒ 100% = 100.",
    solution_text_hi: "महत्वपूर्ण बिंदु: प्रतिशत अंतर से मूल संख्या ज्ञात करना।\nप्रक्रिया: अंतर = 40% - 25% = 15%।\n15% = 15 ⇒ मूल संख्या (100%) = 100।",
    shortcut_text: "Δ% = 15% corresponds to 15. 1% = 1 ⇒ Original Number = 100.",
    shortcut_text_hi: "15% = 15 ⇒ 1% = 1 ⇒ मूल संख्या = 100।"
  },
  {
    question_number: 5,
    practice_set: "Practice 1",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 5",
    type_category: "Problems based on Percentage change",
    type_category_hi: "प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 5: Problems based on Percentage change",
    type_label_hi: "Type 5: प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "A worker's salary is reduced by 20% due to budget cuts. By what exact percentage must this new, lower salary be increased to restore it to the original amount?",
    question_text_hi: "बजट में कटौती के कारण एक कर्मचारी के वेतन में 20% की कमी की जाती है। इस नए, कम वेतन को वापस मूल राशि तक लाने के लिए इसमें कितने प्रतिशत की वृद्धि की जानी चाहिए?",
    options: {
      a: "20%",
      b: "25%",
      c: "30%",
      d: "33.33%"
    },
    options_hi: {
      a: "20%",
      b: "25%",
      c: "30%",
      d: "33.33%"
    },
    correct_option: "b",
    solution_text: "Crux: Reversing a percentage drop.\nFlow: Base = 100 → -20% → 80.\nTo restore 80 back to 100, increase by 20.\nPercentage required = (20 / 80) × 100 ⇒ 25%.",
    solution_text_hi: "महत्वपूर्ण बिंदु: प्रतिशत गिरावट को पुनर्स्थापित करना।\nप्रक्रिया: मूल = 100 → -20% → 80।\n80 को पुनः 100 बनाने के लिए 20 बढ़ाना होगा।\nआवश्यक प्रतिशत = (20 / 80) × 100 = 25%।",
    shortcut_text: "Formula: [r / (100 - r)] × 100 = [20 / 80] × 100 = 1/4 = 25%.",
    shortcut_text_hi: "सूत्र: [r / (100 - r)] × 100 = [20 / 80] × 100 = 25%।"
  },

  // ==========================================
  // LEVEL 2: ADVANCED MODERATION
  // ==========================================
  {
    question_number: 6,
    practice_set: "Practice 1",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 1",
    type_category: "Problems based on Population",
    type_category_hi: "जनसंख्या पर आधारित प्रश्न",
    type_label: "Type 1: Problems based on Population",
    type_label_hi: "Type 1: जनसंख्या पर आधारित प्रश्न",
    question_text: "15% of a city's population migrated to a neighboring state, and 10% of the remaining population died in an epidemic. If the current surviving population is 61,200, what was the initial population before the migration?",
    question_text_hi: "एक शहर की 15% जनसंख्या पड़ोसी राज्य में पलायन कर गई, और शेष जनसंख्या का 10% एक महामारी में मारा गया। यदि वर्तमान जीवित जनसंख्या 61,200 है, तो पलायन से पहले प्रारंभिक जनसंख्या कितनी थी?",
    options: {
      a: "75,000",
      b: "80,000",
      c: "85,000",
      d: "90,000"
    },
    options_hi: {
      a: "75,000",
      b: "80,000",
      c: "85,000",
      d: "90,000"
    },
    correct_option: "b",
    solution_text: "Crux: Working backward through successive percentage drops.\nFlow: Let initial population = P.\nP × (1 - 0.15) × (1 - 0.10) = 61,200 → P × 0.85 × 0.90 = 61,200 → P × 0.765 = 61,200 ⇒ P = 80,000.",
    solution_text_hi: "महत्वपूर्ण बिंदु: क्रमिक गिरावट को उल्टे क्रम में हल करना।\nप्रक्रिया: माना प्रारंभिक जनसंख्या = P।\nP × 0.85 × 0.90 = 61,200 → P × 0.765 = 61,200 ⇒ P = 80,000।",
    shortcut_text: "Fraction approach: P × (17/20) × (9/10) = 61,200 ⇒ P = 61,200 × (200 / 153) = 400 × 200 = 80,000.",
    shortcut_text_hi: "भिन्न विधि: P × (17/20) × (9/10) = 61,200 ⇒ P = 400 × 200 = 80,000।"
  },
  {
    question_number: 7,
    practice_set: "Practice 1",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 2",
    type_category: "Problems based on Exam and Students",
    type_category_hi: "परीक्षा और छात्रों पर आधारित प्रश्न",
    type_label: "Type 2: Problems based on Exam and Students",
    type_label_hi: "Type 2: परीक्षा और छात्रों पर आधारित प्रश्न",
    question_text: "In a school, the ratio of boys to girls is 4:5. If 15% of the boys and 20% of the girls are scholarship holders, what exact percentage of the total student body does not receive a scholarship?",
    question_text_hi: "एक स्कूल में, लड़कों और लड़कियों का अनुपात 4:5 है। यदि 15% लड़के और 20% लड़कियाँ छात्रवृत्ति धारक हैं, तो कुल छात्रों का कितना प्रतिशत छात्रवृत्ति प्राप्त नहीं करता है?",
    options: {
      a: "80%",
      b: "82.22%",
      c: "85%",
      d: "88.88%"
    },
    options_hi: {
      a: "80%",
      b: "82.22%",
      c: "85%",
      d: "88.88%"
    },
    correct_option: "b",
    solution_text: "Crux: Weighted average of non-scholarship holders.\nFlow: Let Boys = 400, Girls = 500 (Total = 900).\nNon-scholar Boys = 85% of 400 = 340.\nNon-scholar Girls = 80% of 500 = 400.\nTotal Non-scholars = 740.\nPercentage = (740 / 900) × 100 ⇒ 82.22%.",
    solution_text_hi: "महत्वपूर्ण बिंदु: गैर-छात्रवृत्ति धारकों का भारित औसत।\nप्रक्रिया: माना लड़के = 400, लड़कियाँ = 500 (कुल = 900)।\nगैर-छात्रवृत्ति लड़के = 400 का 85% = 340।\nगैर-छात्रवृत्ति लड़कियाँ = 500 का 80% = 400।\nकुल गैर-छात्रवृत्ति = 740।\nप्रतिशत = (740 / 900) × 100 = 82.22%।",
    shortcut_text: "Weighted Average Formula: [(4 × 85%) + (5 × 80%)] / 9 = (340 + 400) / 9 = 740 / 9 = 82.22%.",
    shortcut_text_hi: "भारित औसत: (4 × 85% + 5 × 80%) / 9 = 740 / 9 = 82.22%।"
  },
  {
    question_number: 8,
    practice_set: "Practice 1",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "A man's current income is ₹50,000, and he spends 60% of it. Next year, his income increases by 20%, and his expenditure simultaneously increases by 10%. What is the exact percentage change in his savings?",
    question_text_hi: "एक व्यक्ति की वर्तमान आय ₹50,000 है, और वह इसका 60% खर्च करता है। अगले वर्ष, उसकी आय में 20% की वृद्धि होती है, और साथ ही उसके खर्च में 10% की वृद्धि होती है। उसकी बचत में सटीक प्रतिशत परिवर्तन क्या है?",
    options: {
      a: "25%",
      b: "30%",
      c: "35%",
      d: "40%"
    },
    options_hi: {
      a: "25%",
      b: "30%",
      c: "35%",
      d: "40%"
    },
    correct_option: "c",
    solution_text: "Crux: Tracking absolute changes in Income (I), Expenditure (E), and Savings (S).\nFlow: Base Year: I = 50k → E = 30k → S = 20k.\nNew Year: I = 60k (+20%) → E = 33k (+10%) → New S = 27k.\nChange in Savings = 27k - 20k = +7k.\n% Change = (7k / 20k) × 100 ⇒ 35%.",
    solution_text_hi: "महत्वपूर्ण बिंदु: आय, व्यय और बचत में वास्तविक परिवर्तनों की गणना।\nप्रक्रिया: मूल वर्ष: आय = 50,000 → व्यय = 30,000 → बचत = 20,000।\nनया वर्ष: आय = 60,000 (+20%) → व्यय = 33,000 (+10%) → नई बचत = 27,000।\nबचत में परिवर्तन = +7,000।\nप्रतिशत परिवर्तन = (7,000 / 20,000) × 100 = 35%।",
    shortcut_text: "Ratio Method: Income : Exp : Sav = 5 : 3 : 2.\n5 × 20% = 3 × 10% + 2 × x% ⇒ 100 = 30 + 2x ⇒ 2x = 70 ⇒ x = 35%.",
    shortcut_text_hi: "अनुपात विधि: आय : व्यय : बचत = 5 : 3 : 2।\n5 × 20% = 3 × 10% + 2 × x% ⇒ 100 = 30 + 2x ⇒ x = 35%।"
  },
  {
    question_number: 9,
    practice_set: "Practice 1",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 4",
    type_category: "Problems based on Percentage of Numbers",
    type_category_hi: "संख्याओं के प्रतिशत पर आधारित प्रश्न",
    type_label: "Type 4: Problems based on Percentage of Numbers",
    type_label_hi: "Type 4: संख्याओं के प्रतिशत पर आधारित प्रश्न",
    question_text: "If 30% of (A + B) is exactly equal to 50% of (A - B), then B is what percentage of A?",
    question_text_hi: "यदि (A + B) का 30% ठीक (A - B) के 50% के बराबर है, तो B, A का कितना प्रतिशत है?",
    options: {
      a: "20%",
      b: "25%",
      c: "30%",
      d: "33.33%"
    },
    options_hi: {
      a: "20%",
      b: "25%",
      c: "30%",
      d: "33.33%"
    },
    correct_option: "b",
    solution_text: "Crux: Simplifying ratio from a linear percentage equation.\nFlow: 30(A + B) = 50(A - B) → 3A + 3B = 5A - 5B → 8B = 2A → A = 4B.\nB as a % of A = (B / 4B) × 100 ⇒ 25%.",
    solution_text_hi: "महत्वपूर्ण बिंदु: रैखिक समीकरण से अनुपात निकालना।\nप्रक्रिया: 30(A + B) = 50(A - B) → 3A + 3B = 5A - 5B → 8B = 2A → A = 4B।\nB, A का प्रतिशत = (B / 4B) × 100 = 25%।",
    shortcut_text: "Componendo & Dividendo: (A + B) / (A - B) = 5 / 3 ⇒ A / B = (5 + 3) / (5 - 3) = 8 / 2 = 4 / 1. B/A = 1/4 = 25%.",
    shortcut_text_hi: "योगान्तरानुपात (C&D) नियम: A/B = (5 + 3)/(5 - 3) = 4/1 ⇒ B/A = 1/4 = 25%।"
  },
  {
    question_number: 10,
    practice_set: "Practice 1",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 5",
    type_category: "Problems based on Percentage change",
    type_category_hi: "प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 5: Problems based on Percentage change",
    type_label_hi: "Type 5: प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "The market price of sugar increases by 25%. A family decides they can only afford to increase their total expenditure on sugar by 10%. By what percentage must they reduce their physical consumption of sugar to meet this budget?",
    question_text_hi: "चीनी के बाजार मूल्य में 25% की वृद्धि होती है। एक परिवार तय करता है कि वे चीनी पर अपने कुल खर्च में केवल 10% की ही वृद्धि कर सकते हैं। इस बजट को पूरा करने के लिए उन्हें चीनी की अपनी भौतिक खपत में कितने प्रतिशत की कमी करनी चाहिए?",
    options: {
      a: "10%",
      b: "12%",
      c: "15%",
      d: "20%"
    },
    options_hi: {
      a: "10%",
      b: "12%",
      c: "15%",
      d: "20%"
    },
    correct_option: "b",
    solution_text: "Crux: Balancing Price × Consumption = Expenditure.\nFlow: Base: P × C = E.\nNew: 1.25P × C_new = 1.10E.\nC_new = (1.10 / 1.25)C = 0.88C.\nConsumption drops from 1.00C to 0.88C ⇒ 12% reduction.",
    solution_text_hi: "महत्वपूर्ण बिंदु: मूल्य × खपत = व्यय का संतुलन।\nप्रक्रिया: मूल: P × C = E।\nनया: 1.25P × C_नया = 1.10E ⇒ C_नया = (1.10 / 1.25)C = 0.88C।\nखपत में कमी = 1.00 - 0.88 = 0.12 = 12% कमी।",
    shortcut_text: "Percentage Drop = [(125 - 110) / 125] × 100 = [15 / 125] × 100 = 12%.",
    shortcut_text_hi: "खपत में कमी = [(125 - 110) / 125] × 100 = 12%।"
  },

  // ==========================================
  // LEVEL 3: SLIGHTLY DIFFICULT (UPGRADED PYQs)
  // ==========================================
  {
    question_number: 11,
    practice_set: "Practice 1",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 1",
    type_category: "Problems based on Population",
    type_category_hi: "जनसंख्या पर आधारित प्रश्न",
    type_label: "Type 1: Problems based on Population",
    type_label_hi: "Type 1: जनसंख्या पर आधारित प्रश्न",
    question_text: "A bacterial population increases at a rate of 8% in the first 15 minutes, decreases by 5% in the next 15 minutes, and increases by 10% in the final 15 minutes. What is the overall compound percentage change in the population at the end of 45 minutes?",
    question_text_hi: "एक जीवाणु आबादी पहले 15 मिनट में 8% की दर से बढ़ती है, अगले 15 मिनट में 5% कम हो जाती है, और अंतिम 15 मिनट में 10% बढ़ जाती है। 45 मिनट के अंत में जनसंख्या में कुल चक्रवृद्धि प्रतिशत परिवर्तन क्या है?",
    options: {
      a: "12.5%",
      b: "12.86%",
      c: "13.1%",
      d: "13.5%"
    },
    options_hi: {
      a: "12.5%",
      b: "12.86%",
      c: "13.1%",
      d: "13.5%"
    },
    correct_option: "b",
    solution_text: "Crux: Net compound effect over three consecutive intervals.\nFlow: 100 × 1.08 × 0.95 × 1.10 → 1.026 × 1.10 = 1.1286.\nNet shift = 1.1286 - 1.00 = +12.86%.",
    solution_text_hi: "महत्वपूर्ण बिंदु: तीन क्रमिक अंतरालों पर कुल चक्रवृद्धि प्रभाव।\nप्रक्रिया: 100 × 1.08 × 0.95 × 1.10 = 102.6 × 1.10 = 112.86।\nकुल परिवर्तन = +12.86%।",
    shortcut_text: "Successive formula: First two: 8 - 5 - (8×5)/100 = 2.6%.\nWith third: 2.6 + 10 + (2.6×10)/100 = 12.6 + 0.26 = 12.86%.",
    shortcut_text_hi: "क्रमिक प्रतिशत सूत्र: 8 - 5 - 0.4 = 2.6%। फिर 2.6 + 10 + 0.26 = 12.86%।"
  },
  {
    question_number: 12,
    practice_set: "Practice 1",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 2",
    type_category: "Problems based on Exam and Students",
    type_category_hi: "परीक्षा और छात्रों पर आधारित प्रश्न",
    type_label: "Type 2: Problems based on Exam and Students",
    type_label_hi: "Type 2: परीक्षा और छात्रों पर आधारित प्रश्न",
    question_text: "In an examination, 75% of students passed in Physics, 65% passed in Chemistry, and 20% failed in both subjects. If exactly 480 students passed in exactly one subject, what was the total number of students who appeared for the examination?",
    question_text_hi: "एक परीक्षा में, 75% छात्र भौतिकी में उत्तीर्ण हुए, 65% रसायन विज्ञान में उत्तीर्ण हुए, और 20% दोनों विषयों में अनुत्तीर्ण हुए। यदि ठीक 480 छात्र केवल एक ही विषय में उत्तीर्ण हुए, तो परीक्षा में बैठने वाले कुल छात्रों की संख्या कितनी थी?",
    options: {
      a: "2000",
      b: "2400",
      c: "2500",
      d: "2800"
    },
    options_hi: {
      a: "2000",
      b: "2400",
      c: "2500",
      d: "2800"
    },
    correct_option: "b",
    solution_text: "Crux: Venn diagram logic for single-subject passes.\nFlow: Passed at least one = 100% - 20% (failed both) = 80%.\nPassed Both = (75% + 65%) - 80% = 60%.\nPassed exactly one = Passed at least one - Passed both = 80% - 60% = 20%.\n20% = 480 ⇒ 100% = 2,400.",
    solution_text_hi: "महत्वपूर्ण बिंदु: वेन आरेख तर्क द्वारा केवल एक विषय में उत्तीर्ण ज्ञात करना।\nप्रक्रिया: कम से कम एक विषय में उत्तीर्ण = 100% - 20% = 80%।\nदोनों में उत्तीर्ण = (75% + 65%) - 80% = 60%।\nकेवल एक विषय में उत्तीर्ण = 80% - 60% = 20%।\n20% = 480 ⇒ कुल छात्र (100%) = 2,400।",
    shortcut_text: "Single Subject Passed % = 80% - 60% = 20%.\nTotal = 480 × (100 / 20) = 2,400.",
    shortcut_text_hi: "केवल एक विषय उत्तीर्ण = 20% = 480 ⇒ कुल छात्र = 2,400।"
  },
  {
    question_number: 13,
    practice_set: "Practice 1",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "The combined sum of the salaries of A and B is ₹8,500. A spends 85% of his salary, and B spends 70% of his salary. If their respective savings are exactly in the ratio of 3:4, what is the exact salary of A?",
    question_text_hi: "A और B के वेतन का कुल योग ₹8,500 है। A अपने वेतन का 85% खर्च करता है, और B अपने वेतन का 70% खर्च करता है। यदि उनकी संबंधित बचत का अनुपात ठीक 3:4 है, तो A का सटीक वेतन क्या है?",
    options: {
      a: "₹4,500",
      b: "₹5,100",
      c: "₹5,500",
      d: "₹6,000"
    },
    options_hi: {
      a: "₹4,500",
      b: "₹5,100",
      c: "₹5,500",
      d: "₹6,000"
    },
    correct_option: "b",
    solution_text: "Crux: Mapping savings ratios to absolute salaries.\nFlow: A's Savings = 15% of A. B's Savings = 30% of B.\n(0.15A / 0.30B) = 3 / 4 → (1A / 2B) = 3 / 4 → A / B = 6 / 4 = 3 / 2.\nA's Salary = (3 / 5) × 8,500 ⇒ ₹5,100.",
    solution_text_hi: "महत्वपूर्ण बिंदु: बचत के अनुपात से वेतन का अनुपात निकालना।\nप्रक्रिया: A की बचत = 15% A, B की बचत = 30% B।\n0.15A / 0.30B = 3 / 4 ⇒ A / 2B = 3 / 4 ⇒ A / B = 3 / 2।\nA का वेतन = (3 / 5) × 8,500 = ₹5,100।",
    shortcut_text: "Salary Ratio A : B = (Savings Ratio / Savings %) = (3 / 15) : (4 / 30) = (1 / 5) : (2 / 15) = 3 : 2.\nA = 8,500 × 3/5 = ₹5,100.",
    shortcut_text_hi: "वेतन अनुपात = (3/15) : (4/30) = 3 : 2। A = 8,500 × 3/5 = ₹5,100।"
  },
  {
    question_number: 14,
    practice_set: "Practice 1",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 4",
    type_category: "Problems based on Percentage of Numbers",
    type_category_hi: "संख्याओं के प्रतिशत पर आधारित प्रश्न",
    type_label: "Type 4: Problems based on Percentage of Numbers",
    type_label_hi: "Type 4: संख्याओं के प्रतिशत पर आधारित प्रश्न",
    question_text: "35% of a first number is equal to 25% of a second number. If the second number is exactly 120 more than the first number, what is 40% of the sum of both numbers?",
    question_text_hi: "पहली संख्या का 35% दूसरी संख्या के 25% के बराबर है। यदि दूसरी संख्या पहली संख्या से ठीक 120 अधिक है, तो दोनों संख्याओं के योग का 40% क्या है?",
    options: {
      a: "256",
      b: "288",
      c: "300",
      d: "320"
    },
    options_hi: {
      a: "256",
      b: "288",
      c: "300",
      d: "320"
    },
    correct_option: "b",
    solution_text: "Crux: Ratio extraction combined with an absolute difference.\nFlow: 0.35x = 0.25y → y / x = 35 / 25 = 7 / 5.\nGiven y - x = 120 → 7u - 5u = 2u = 120 ⇒ 1u = 60.\nx = 300, y = 420. Sum = 720.\n40% of 720 ⇒ 288.",
    solution_text_hi: "महत्वपूर्ण बिंदु: अनुपात और संख्यात्मक अंतर का संयोजन।\nप्रक्रिया: 35x = 25y ⇒ y : x = 7 : 5।\nअंतर = 2 इकाई = 120 ⇒ 1 इकाई = 60।\nx = 300, y = 420। दोनों का योग = 720।\n720 का 40% = 288।",
    shortcut_text: "Ratio x : y = 5 : 7. Diff = 2 units = 120 ⇒ Sum = 12 units = 720.\n40% of 720 = 288.",
    shortcut_text_hi: "x:y = 5:7। अंतर 2u = 120 ⇒ योग 12u = 720। 40% = 288।"
  },
  {
    question_number: 15,
    practice_set: "Practice 1",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 5",
    type_category: "Problems based on Percentage change",
    type_category_hi: "प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 5: Problems based on Percentage change",
    type_label_hi: "Type 5: प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "An article's price is reduced by x%, and as a direct result, its daily sales volume increases by 30%. If this creates a net daily revenue increase of exactly 4%, find the exact value of x.",
    question_text_hi: "एक वस्तु की कीमत में x% की कमी की जाती है, और इसके सीधे परिणामस्वरूप, इसकी दैनिक बिक्री मात्रा में 30% की वृद्धि होती है। यदि इससे शुद्ध दैनिक राजस्व में ठीक 4% की वृद्धि होती है, तो x का सटीक मान ज्ञात कीजिए।",
    options: {
      a: "15",
      b: "20",
      c: "25",
      d: "30"
    },
    options_hi: {
      a: "15",
      b: "20",
      c: "25",
      d: "30"
    },
    correct_option: "b",
    solution_text: "Crux: Aligning volume and price to net revenue.\nFlow: Revenue = Price × Volume.\n1.04 = (1 - x/100) × 1.30 → (1 - x/100) = 1.04 / 1.30 = 0.80.\nx = 20.",
    solution_text_hi: "महत्वपूर्ण बिंदु: मूल्य और मात्रा से शुद्ध राजस्व की गणना।\nप्रक्रिया: राजस्व = मूल्य × बिक्री।\n1.04 = (1 - x/100) × 1.30 ⇒ (1 - x/100) = 0.80 ⇒ x = 20।",
    shortcut_text: "Price Factor = 1.04 / 1.30 = 0.80 ⇒ Drop = 1.00 - 0.80 = 20%.",
    shortcut_text_hi: "मूल्य कारक = 1.04 / 1.30 = 0.80 ⇒ x = 20%।"
  },

  // ==========================================
  // LEVEL 4: DIFFICULT (FUTURE-TESTING PYQs)
  // ==========================================
  {
    question_number: 16,
    practice_set: "Practice 1",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 1",
    type_category: "Problems based on Population",
    type_category_hi: "जनसंख्या पर आधारित प्रश्न",
    type_label: "Type 1: Problems based on Population",
    type_label_hi: "Type 1: जनसंख्या पर आधारित प्रश्न",
    question_text: "A village's total population is 8,000. Over one year, the male population increases by 12% and the female population increases by 8%, making the new total population 8,760. Find the exact ratio of the new number of males to the new number of females.",
    question_text_hi: "एक गाँव की कुल जनसंख्या 8,000 है। एक वर्ष में, पुरुष जनसंख्या में 12% की वृद्धि होती है और महिला जनसंख्या में 8% की वृद्धि होती है, जिससे नई कुल जनसंख्या 8,760 हो जाती है। पुरुषों की नई संख्या और महिलाओं की नई संख्या का सटीक अनुपात ज्ञात कीजिए।",
    options: {
      a: "28:45",
      b: "25:42",
      c: "30:47",
      d: "33:50"
    },
    options_hi: {
      a: "28:45",
      b: "25:42",
      c: "30:47",
      d: "33:50"
    },
    correct_option: "a",
    solution_text: "Crux: Two-variable linear system for population segments.\nFlow: M + F = 8000.\nTotal Increase = 8760 - 8000 = 760.\n0.12M + 0.08F = 760 → 3M + 2F = 19,000.\nMultiply (M + F = 8000) by 2: 2M + 2F = 16,000.\nSubtracting gives: M = 3,000, thus F = 5,000.\nNew M = 3,000 × 1.12 = 3,360. New F = 5,000 × 1.08 = 5,400.\nRatio = 3,360 : 5,400 = 336 : 540 ⇒ 28:45.",
    solution_text_hi: "महत्वपूर्ण बिंदु: जनसंख्या घटकों का रैखिक समीकरण।\nप्रक्रिया: कुल वृद्धि = 760।\n0.12M + 0.08F = 760 ⇒ M = 3,000, F = 5,000।\nनए पुरुष = 3000 × 1.12 = 3,360। नई महिलाएँ = 5000 × 1.08 = 5,400।\nअनुपात = 3,360 : 5,400 = 28 : 45।",
    shortcut_text: "Alligation: Overall % increase = 760 / 8000 = 9.5%.\nM (12%) vs F (8%), Mean = 9.5% ⇒ Ratio = (9.5 - 8) : (12 - 9.5) = 1.5 : 2.5 = 3 : 5.\nM = 3000, F = 5000. New ratio = (3000×1.12) : (5000×1.08) = 3360 : 5400 = 28:45.",
    shortcut_text_hi: "पृथ्थीकरण: औसत वृद्धि = 9.5%। पुरुष (12%) और महिला (8%) का अनुपात = 3:5। नए M:F = 3360:5400 = 28:45।"
  },
  {
    question_number: 17,
    practice_set: "Practice 1",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 2",
    type_category: "Problems based on Exam and Students",
    type_category_hi: "परीक्षा और छात्रों पर आधारित प्रश्न",
    type_label: "Type 2: Problems based on Exam and Students",
    type_label_hi: "Type 2: परीक्षा और छात्रों पर आधारित प्रश्न",
    question_text: "An examination consists of Paper 1 (250 maximum marks) and Paper 2 (150 maximum marks). A student scores 45% in Paper 1. To achieve an overall aggregate of 60% across both papers, what exact percentage must they score in Paper 2, and what is the absolute difference in marks obtained between the two papers?",
    question_text_hi: "एक परीक्षा में पेपर 1 (अधिकतम 250 अंक) और पेपर 2 (अधिकतम 150 अंक) होते हैं। एक छात्र पेपर 1 में 45% अंक प्राप्त करता है। दोनों पेपरों में कुल 60% का समग्र अंक प्राप्त करने के लिए, उसे पेपर 2 में कितने प्रतिशत अंक प्राप्त करने होंगे, और दोनों पेपरों में प्राप्त अंकों के बीच पूर्ण अंतर कितना है?",
    options: {
      a: "85%, 15 marks",
      b: "80%, 20 marks",
      c: "85%, 12.5 marks",
      d: "80%, 15 marks"
    },
    options_hi: {
      a: "85%, 15 अंक",
      b: "80%, 20 अंक",
      c: "85%, 12.5 अंक",
      d: "80%, 15 अंक"
    },
    correct_option: "a",
    solution_text: "Crux: Aggregate target minus current achievements.\nFlow: Total Max Marks = 250 + 150 = 400.\nTarget Overall Marks = 60% of 400 = 240.\nMarks in Paper 1 = 45% of 250 = 112.5.\nMarks required in Paper 2 = 240 - 112.5 = 127.5.\nPaper 2 % required = (127.5 / 150) × 100 ⇒ 85%.\nAbsolute difference = 127.5 - 112.5 ⇒ 15 marks.",
    solution_text_hi: "महत्वपूर्ण बिंदु: कुल लक्ष्य में से प्राप्त अंकों की भरपाई।\nप्रक्रिया: कुल अंक = 400। कुल लक्ष्य = 400 का 60% = 240।\nपेपर 1 में अंक = 250 का 45% = 112.5।\nपेपर 2 में आवश्यक अंक = 240 - 112.5 = 127.5।\nपेपर 2 % = (127.5 / 150) × 100 = 85%।\nअंकों का अंतर = 127.5 - 112.5 = 15 अंक।",
    shortcut_text: "Weight Ratio = 250 : 150 = 5 : 3.\nDeficit in Paper 1 = 5 × (60% - 45%) = +75% points needed.\nPaper 2 boost = 75% / 3 = +25% ⇒ Paper 2 % = 60% + 25% = 85%.\nMarks diff = (85% of 150) - (45% of 250) = 127.5 - 112.5 = 15.",
    shortcut_text_hi: "भारित विचलन: 5 × (-15%) = -75%। 3 भागों में भरपाई = +25% ⇒ पेपर 2 = 85%। अंतर = 15 अंक।"
  },
  {
    question_number: 18,
    practice_set: "Practice 1",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "Manoj spends 15% of his income on shopping. Of the remaining amount, 40% goes to rent, and 30% of the new remaining balance goes to emergency savings. He invests the final remaining amount, which equals ₹10,710. What is his exact monetary expenditure on rent?",
    question_text_hi: "मनोज अपनी आय का 15% खरीदारी पर खर्च करता है। शेष राशि का 40% किराए पर जाता है, और नई शेष राशि का 30% आपातकालीन बचत में जाता है। वह अंतिम शेष राशि का निवेश करता है, जो ₹10,710 के बराबर है। किराए पर उसका सटीक मौद्रिक खर्च क्या है?",
    options: {
      a: "₹8,500",
      b: "₹9,600",
      c: "₹10,200",
      d: "₹11,400"
    },
    options_hi: {
      a: "₹8,500",
      b: "₹9,600",
      c: "₹10,200",
      d: "₹11,400"
    },
    correct_option: "c",
    solution_text: "Crux: Tracking intermediate remainders sequentially.\nFlow: Let total Income = I.\nShopping = 15% → Rem1 = 0.85I.\nRent = 40% of Rem1 → Rem2 = 60% of 0.85I = 0.51I.\nEmergency = 30% of Rem2 → Final Rem = 70% of 0.51I = 0.357I.\n0.357I = 10,710 → I = ₹30,000.\nRent Expenditure = 40% of (0.85 × 30,000) = 0.40 × 25,500 ⇒ ₹10,200.",
    solution_text_hi: "महत्वपूर्ण बिंदु: क्रमिक शेष राशियों का चरणबद्ध विश्लेषण।\nप्रक्रिया: माना आय = I।\nखरीदारी = 15% → शेष1 = 0.85I।\nकिराया = शेष1 का 40% → शेष2 = 0.51I।\nअंतिम शेष = 0.70 × 0.51I = 0.357I = 10,710 ⇒ I = ₹30,000।\nकिराया = 0.40 × (0.85 × 30,000) = ₹10,200।",
    shortcut_text: "Direct remainder backward: Rem1 = 10,710 / (0.60 × 0.70) = 10,710 / 0.42 = 25,500.\nRent = 40% of 25,500 = ₹10,200.",
    shortcut_text_hi: "उल्टे क्रम से: शेष1 = 10,710 / 0.42 = 25,500। किराया = 25,500 का 40% = ₹10,200।"
  },
  {
    question_number: 19,
    practice_set: "Practice 1",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 4",
    type_category: "Problems based on Percentage of Numbers",
    type_category_hi: "संख्याओं के प्रतिशत पर आधारित प्रश्न",
    type_label: "Type 4: Problems based on Percentage of Numbers",
    type_label_hi: "Type 4: संख्याओं के प्रतिशत पर आधारित प्रश्न",
    question_text: "A variable number is first decreased by 15%, then increased by 20%, and finally decreased again by 10%. If the final resulting number is 1,836, what was the original number, and what is the total absolute difference between the original and final number?",
    question_text_hi: "एक चर संख्या को पहले 15% घटाया जाता है, फिर 20% बढ़ाया जाता है, और अंत में फिर से 10% घटाया जाता है। यदि अंतिम परिणामी संख्या 1,836 है, तो मूल संख्या क्या थी, और मूल तथा अंतिम संख्या के बीच कुल पूर्ण अंतर क्या है?",
    options: {
      a: "2500, 164",
      b: "2000, 164",
      c: "2000, 150",
      d: "2200, 180"
    },
    options_hi: {
      a: "2500, 164",
      b: "2000, 164",
      c: "2000, 150",
      d: "2200, 180"
    },
    correct_option: "b",
    solution_text: "Crux: Sequential compound change solved backwards.\nFlow: Let original number = N.\nN × 0.85 × 1.20 × 0.90 = 1,836.\nN × 0.918 = 1,836 → N ⇒ 2,000.\nAbsolute difference = 2,000 - 1,836 ⇒ 164.",
    solution_text_hi: "महत्वपूर्ण बिंदु: क्रमिक चक्रवृद्धि परिवर्तन का समाधान।\nप्रक्रिया: N × 0.85 × 1.20 × 0.90 = 1,836 → N × 0.918 = 1,836 ⇒ N = 2,000।\nसंख्यात्मक अंतर = 2,000 - 1,836 = 164।",
    shortcut_text: "Net factor = 0.85 × 1.08 = 0.918.\nOriginal N = 1,836 / 0.918 = 2,000. Diff = 2,000 - 1,836 = 164.",
    shortcut_text_hi: "कुल गुणक = 0.918। मूल संख्या = 1,836 / 0.918 = 2,000। अंतर = 164।"
  },
  {
    question_number: 20,
    practice_set: "Practice 1",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 5",
    type_category: "Problems based on Percentage change",
    type_category_hi: "प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 5: Problems based on Percentage change",
    type_label_hi: "Type 5: प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "Due to a sudden 20% price hike in the market, a consumer is now able to buy exactly 4 kg less sugar for ₹600. Calculate the exact monetary difference between the original price per kg and the newly increased price per kg.",
    question_text_hi: "बाजार में अचानक 20% मूल्य वृद्धि के कारण, एक उपभोक्ता अब ₹600 में ठीक 4 किलो कम चीनी खरीद पाता है। प्रति किलो मूल कीमत और नई बढ़ी हुई कीमत के बीच सटीक मौद्रिक अंतर की गणना कीजिए।",
    options: {
      a: "₹4",
      b: "₹5",
      c: "₹6",
      d: "₹8"
    },
    options_hi: {
      a: "₹4",
      b: "₹5",
      c: "₹6",
      d: "₹8"
    },
    correct_option: "b",
    solution_text: "Crux: Relating price jump to purchasing power reduction.\nFlow: Let original price = x. New price = 1.2x.\n(600 / x) - (600 / 1.2x) = 4 → (600 / x) - (500 / x) = 4 → 100 / x = 4 → x = ₹25.\nOriginal Price = ₹25. New Price = ₹30.\nDifference = 30 - 25 ⇒ ₹5.",
    solution_text_hi: "महत्वपूर्ण बिंदु: मूल्य वृद्धि और मात्रा में कमी का संबंध।\nप्रक्रिया: 600/x - 600/1.2x = 4 ⇒ 100/x = 4 ⇒ x = ₹25।\nमूल मूल्य = ₹25, नया मूल्य = ₹30। अंतर = 30 - 25 = ₹5।",
    shortcut_text: "20% hike = +1/5 in price ⇒ -1/6 in consumption.\n1/6 of original quantity = 4 kg ⇒ Original Q = 24 kg.\nOriginal price = 600 / 24 = ₹25. New price = ₹30. Diff = ₹5.",
    shortcut_text_hi: "मूल्य +1/5 ⇒ मात्रा -1/6। 1/6 = 4 किग्रा ⇒ मूल मात्रा = 24 किग्रा। मूल मूल्य = ₹25, नया = ₹30। अंतर = ₹5।"
  },

  // ==========================================
  // LEVEL 5: HIGHLY DIFFICULT (DEEP ANALYTICAL PYQs)
  // ==========================================
  {
    question_number: 21,
    practice_set: "Practice 1",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 1",
    type_category: "Problems based on Population",
    type_category_hi: "जनसंख्या पर आधारित प्रश्न",
    type_label: "Type 1: Problems based on Population",
    type_label_hi: "Type 1: जनसंख्या पर आधारित प्रश्न",
    question_text: "A town's baseline population is 20,000. It increases by a specific rate of R% the first year and then decreases by that exact same R% the second year. If the final population at the end of year two is exactly 19,280, what is the value of R?",
    question_text_hi: "एक कस्बे की आधारभूत जनसंख्या 20,000 है। यह पहले वर्ष R% की विशिष्ट दर से बढ़ती है और फिर दूसरे वर्ष उसी R% से घट जाती है। यदि दूसरे वर्ष के अंत में अंतिम जनसंख्या ठीक 19,280 है, तो R का मान क्या है?",
    options: {
      a: "6%",
      b: "6.32%",
      c: "6√10%",
      d: "18%"
    },
    options_hi: {
      a: "6%",
      b: "6.32%",
      c: "6√10%",
      d: "18%"
    },
    correct_option: "c",
    solution_text: "Crux: Net percentage decrease formula P(1 - R² / 10000).\nFlow: Net decrease = [(20,000 - 19,280) / 20,000] × 100 = 720 / 200 = 3.6%.\nSince increasing and decreasing by same R% results in a net loss of (R² / 100)%:\nR² / 100 = 3.6 → R² = 360 ⇒ R = √360 = 6√10% (≈ 18.97%).",
    solution_text_hi: "महत्वपूर्ण बिंदु: P(1 - R²/10000) का सूत्र।\nप्रक्रिया: कुल प्रतिशत कमी = (720 / 20,000) × 100 = 3.6%।\nशुद्ध हानि = R²/100 = 3.6 ⇒ R² = 360 ⇒ R = √360 = 6√10%।",
    shortcut_text: "R² = 100 × (% Loss) = 100 × 3.6 = 360 ⇒ R = √360 = 6√10%.",
    shortcut_text_hi: "R² = 100 × 3.6 = 360 ⇒ R = 6√10%।"
  },
  {
    question_number: 22,
    practice_set: "Practice 1",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 2",
    type_category: "Problems based on Exam and Students",
    type_category_hi: "परीक्षा और छात्रों पर आधारित प्रश्न",
    type_label: "Type 2: Problems based on Exam and Students",
    type_label_hi: "Type 2: परीक्षा और छात्रों पर आधारित प्रश्न",
    question_text: "To qualify in a rigorous exam, exactly 40% of the total marks are required. Candidate A gets 20% and fails by 60 marks, while Candidate B gets 50% and passes by 30 marks. Candidate C secures exactly 65% of the total marks. How many additional marks does Candidate C need to score to achieve 100% of the maximum marks?",
    question_text_hi: "एक कठिन परीक्षा में उत्तीर्ण होने के लिए कुल अंकों का ठीक 40% आवश्यक है। उम्मीदवार A 20% अंक प्राप्त करता है और 60 अंकों से अनुत्तीर्ण हो जाता है, जबकि उम्मीदवार B 50% प्राप्त करता है और 30 अंकों से उत्तीर्ण हो जाता है। उम्मीदवार C कुल अंकों का ठीक 65% हासिल करता है। अधिकतम अंकों का 100% प्राप्त करने के लिए उम्मीदवार C को कितने अतिरिक्त अंक प्राप्त करने की आवश्यकता है?",
    options: {
      a: "95",
      b: "100",
      c: "105",
      d: "110"
    },
    options_hi: {
      a: "95",
      b: "100",
      c: "105",
      d: "110"
    },
    correct_option: "c",
    solution_text: "Crux: Isolating total marks to find remaining requirement.\nFlow: 40% (Passing) - 20% (Candidate A) = 20%.\n20% = 60 marks → 100% = 300 total marks.\nCandidate C has 65% of 300 = 195 marks.\nRequired for 100% (Max) = 300 - 195 ⇒ 105 marks.",
    solution_text_hi: "महत्वपूर्ण बिंदु: कुल अंकों से शेष आवश्यक अंकों की गणना।\nप्रक्रिया: 40% - 20% = 20% = 60 अंक ⇒ कुल अंक = 300।\nउम्मीदवार C के अंक = 300 का 65% = 195।\n100% के लिए आवश्यक अतिरिक्त अंक = 300 - 195 = 105।",
    shortcut_text: "Candidate C needs (100% - 65%) = 35% more.\nSince 20% = 60 marks ⇒ 1% = 3 marks.\n35% = 35 × 3 = 105 marks.",
    shortcut_text_hi: "C को 35% अधिक चाहिए। 20% = 60 ⇒ 1% = 3 अंक। 35% = 35 × 3 = 105 अंक।"
  },
  {
    question_number: 23,
    practice_set: "Practice 1",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "A professional's initial monthly income is ₹40,000, and they spend exactly 20% of this on food. The following year, their income rises by ₹X. Their expenditure on food remains identical in monetary value, but it now represents exactly 16% of the new income. Find the value of X and the absolute value of their new remaining discretionary income.",
    question_text_hi: "एक पेशेवर की प्रारंभिक मासिक आय ₹40,000 है, और वे इसका ठीक 20% भोजन पर खर्च करते हैं। अगले वर्ष, उनकी आय में ₹X की वृद्धि होती है। भोजन पर उनका खर्च मौद्रिक मूल्य में समान रहता है, लेकिन अब यह नई आय का ठीक 16% दर्शाता है। X का मान और उनकी नई शेष विवेकाधीन आय का पूर्ण मूल्य ज्ञात कीजिए।",
    options: {
      a: "₹10,000, ₹42,000",
      b: "₹12,000, ₹40,000",
      c: "₹10,000, ₹32,000",
      d: "₹8,000, ₹42,000"
    },
    options_hi: {
      a: "₹10,000, ₹42,000",
      b: "₹12,000, ₹40,000",
      c: "₹10,000, ₹32,000",
      d: "₹8,000, ₹42,000"
    },
    correct_option: "a",
    solution_text: "Crux: Fixed absolute value plotted against a changing percentage base.\nFlow: Initial Food Expenditure = 20% of 40,000 = ₹8,000.\nNew Food Expenditure = ₹8,000 (which is 16% of New Income).\nNew Income = 8,000 / 0.16 = ₹50,000.\nX (Income Rise) = 50,000 - 40,000 ⇒ ₹10,000.\nNew Discretionary Income = 50,000 - 8,000 ⇒ ₹42,000.",
    solution_text_hi: "महत्वपूर्ण बिंदु: स्थिर व्यय और बदलते आधार की तुलना।\nप्रक्रिया: भोजन खर्च = 40,000 का 20% = ₹8,000।\nनई आय = 8,000 / 0.16 = ₹50,000।\nआय वृद्धि X = 50,000 - 40,000 = ₹10,000।\nनई विवेकाधीन आय = 50,000 - 8,000 = ₹42,000।",
    shortcut_text: "New Income = 40,000 × (20 / 16) = ₹50,000.\nX = 50,000 - 40,000 = ₹10,000. Discretionary = 50,000 - 8,000 = ₹42,000.",
    shortcut_text_hi: "नई आय = 40,000 × (20/16) = 50,000 ⇒ X = 10,000, शेष = 42,000।"
  },
  {
    question_number: 24,
    practice_set: "Practice 1",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 4",
    type_category: "Problems based on Percentage of Numbers",
    type_category_hi: "संख्याओं के प्रतिशत पर आधारित प्रश्न",
    type_label: "Type 4: Problems based on Percentage of Numbers",
    type_label_hi: "Type 4: संख्याओं के प्रतिशत पर आधारित प्रश्न",
    question_text: "45% of Variable A is exactly 12 more than 30% of Variable B. Simultaneously, 20% of Variable B is exactly 5 more than 15% of Variable A. Calculate the exact numerical value of (A + B).",
    question_text_hi: "चर A का 45% चर B के 30% से ठीक 12 अधिक है। साथ ही, चर B का 20% चर A के 15% से ठीक 5 अधिक है। (A + B) के सटीक संख्यात्मक मान की गणना कीजिए।",
    options: {
      a: "175",
      b: "176⅔",
      c: "180",
      d: "200"
    },
    options_hi: {
      a: "175",
      b: "176⅔",
      c: "180",
      d: "200"
    },
    correct_option: "b",
    solution_text: "Crux: Solving simultaneous linear equations derived from percentages.\nFlow: Eq 1: 0.45A - 0.30B = 12 → 3A - 2B = 80.\nEq 2: 0.20B - 0.15A = 5 → 4B - 3A = 100.\nAdding Eq 1 and Eq 2: 2B = 180 → B = 90.\nSubstitute B in Eq 1: 3A - 180 = 80 → 3A = 260 → A = 260/3.\nSum (A + B) = (260/3) + (270/3) = 530/3 ⇒ 176⅔.",
    solution_text_hi: "महत्वपूर्ण बिंदु: प्रतिशत से बने युगपत समीकरणों को हल करना।\nप्रक्रिया: समीकरण 1: 3A - 2B = 80।\nसमीकरण 2: 4B - 3A = 100।\nदोनों समीकरणों को जोड़ने पर: 2B = 180 ⇒ B = 90।\n3A = 260 ⇒ A = 260/3।\nयोग (A + B) = 260/3 + 270/3 = 530/3 = 176⅔।",
    shortcut_text: "Add both directly: (3A - 2B) + (4B - 3A) = 2B = 80 + 100 = 180 ⇒ B = 90, A = 260/3. A + B = 530/3 = 176⅔.",
    shortcut_text_hi: "सीधे जोड़ें: 2B = 180 ⇒ B = 90, A = 260/3 ⇒ A + B = 176⅔।"
  },
  {
    question_number: 25,
    practice_set: "Practice 1",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 5",
    type_category: "Problems based on Percentage change",
    type_category_hi: "प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 5: Problems based on Percentage change",
    type_label_hi: "Type 5: प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "Attendance at a multi-day trade fair drops by exactly 10% each consecutive day for three days straight. On the fourth day, the recorded attendance is exactly 21,870 people. What was the exact attendance on Day 1, and what is the total numerical drop in attendance between Day 1 and Day 4?",
    question_text_hi: "एक बहु-दिवसीय व्यापार मेले में उपस्थिति लगातार तीन दिनों तक प्रत्येक दिन ठीक 10% गिरती है। चौथे दिन, दर्ज की गई उपस्थिति ठीक 21,870 लोग है। पहले दिन की सटीक उपस्थिति क्या थी, और पहले दिन और चौथे दिन के बीच उपस्थिति में कुल संख्यात्मक गिरावट क्या है?",
    options: {
      a: "30,000, 8,130",
      b: "32,000, 8,500",
      c: "30,000, 9,000",
      d: "28,000, 7,500"
    },
    options_hi: {
      a: "30,000, 8,130",
      b: "32,000, 8,500",
      c: "30,000, 9,000",
      d: "28,000, 7,500"
    },
    correct_option: "a",
    solution_text: "Crux: Compound decay over multiple discrete steps.\nFlow: Let Day 1 = P.\nDrop is 10% daily → multiplier is 0.90.\nDay 4 = P × (0.9)³ = 0.729P.\n0.729P = 21,870 → P ⇒ 30,000.\nTotal drop = 30,000 - 21,870 ⇒ 8,130.",
    solution_text_hi: "महत्वपूर्ण बिंदु: बहु-चरणीय क्रमिक ह्रास।\nप्रक्रिया: माना दिन 1 = P।\nचौथे दिन = P × (0.9)³ = 0.729P = 21,870 ⇒ P = 30,000।\nकुल गिरावट = 30,000 - 21,870 = 8,130।",
    shortcut_text: "(9/10)³ = 729 / 1000. 729 units = 21,870 ⇒ 1 unit = 30.\nDay 1 = 1000 × 30 = 30,000. Drop = (1000 - 729) × 30 = 271 × 30 = 8,130.",
    shortcut_text_hi: "729 इकाई = 21,870 ⇒ 1 इकाई = 30। दिन 1 = 30,000। गिरावट = 271 × 30 = 8,130।"
  }
];

const PERCENTAGE_PRACTICE_2_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MORE THAN MODERATE (TYPES 6 TO 10)
  // ==========================================
  {
    question_number: 1,
    practice_set: "Practice 2",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "A 20% reduction in the price of sugar allows a customer to purchase 4 kg more for ₹800. What is the new, reduced price of sugar per kg?",
    question_text_hi: "चीनी की कीमत में 20% की कमी होने से एक ग्राहक ₹800 में 4 किलो अधिक चीनी खरीद पाता है। चीनी की नई, घटी हुई कीमत प्रति किलोग्राम क्या है?",
    options: {
      a: "₹30/kg",
      b: "₹40/kg",
      c: "₹50/kg",
      d: "₹60/kg"
    },
    options_hi: {
      a: "₹30/किग्रा",
      b: "₹40/किग्रा",
      c: "₹50/किग्रा",
      d: "₹60/किग्रा"
    },
    correct_option: "b",
    solution_text: "Let the original price be x. New reduced price = 0.8x.\nEquation: (800 / 0.8x) - (800 / x) = 4.\n(1000 / x) - (800 / x) = 4 ⇒ 200 / x = 4 ⇒ x = ₹50/kg (Original).\nNew reduced price = 0.8 × 50 = ₹40/kg.",
    solution_text_hi: "माना मूल मूल्य x है। नया घटा हुआ मूल्य = 0.8x।\nसमीकरण: (800 / 0.8x) - (800 / x) = 4 ⇒ 200 / x = 4 ⇒ x = ₹50/किग्रा।\nनया घटा हुआ मूल्य = 0.8 × 50 = ₹40/किग्रा।",
    shortcut_text: "Money saved due to reduction = 20% of ₹800 = ₹160.\nThis savings buys the extra 4 kg.\nReduced Price per kg = ₹160 / 4 kg = ₹40/kg.",
    shortcut_text_hi: "20% की बचत = 800 का 20% = ₹160।\nयह बचत 4 किग्रा अधिक खरीदती है ⇒ घटी हुई कीमत = 160 / 4 = ₹40/किग्रा।"
  },
  {
    question_number: 2,
    practice_set: "Practice 2",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "A wholesale merchant sells 40% of his stock of watermelons in the morning and 25% of the remaining stock in the afternoon. If he still has 180 watermelons left, how many did he start with?",
    question_text_hi: "एक थोक व्यापारी सुबह अपने तरबूज के स्टॉक का 40% और दोपहर में शेष स्टॉक का 25% बेचता है। यदि उसके पास अभी भी 180 तरबूज बचे हैं, तो उसने कितने तरबूजों के साथ शुरुआत की थी?",
    options: {
      a: "300",
      b: "400",
      c: "500",
      d: "600"
    },
    options_hi: {
      a: "300",
      b: "400",
      c: "500",
      d: "600"
    },
    correct_option: "b",
    solution_text: "Remaining after morning = 100% - 40% = 60%.\nAfternoon sales = 25% of 60% = 15%.\nTotal sold = 40% + 15% = 55%. Remaining = 45%.\n0.45x = 180 ⇒ x = 400.",
    solution_text_hi: "सुबह के बाद शेष = 60%।\nदोपहर की बिक्री = 60% का 25% = 15%।\nकुल बिक्री = 55%, शेष = 45%।\n0.45x = 180 ⇒ x = 400 तरबूज।",
    shortcut_text: "Fraction: (1 - 2/5) × (1 - 1/4) = (3/5) × (3/4) = 9/20 remaining.\n9 units = 180 ⇒ 1 unit = 20 ⇒ Total = 20 × 20 = 400.",
    shortcut_text_hi: "बचा हुआ भिन्न = (3/5) × (3/4) = 9/20 = 180 ⇒ कुल = 400।"
  },
  {
    question_number: 3,
    practice_set: "Practice 2",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 8",
    type_category: "Problems based on finding percentage",
    type_category_hi: "प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 8: Problems based on finding percentage",
    type_label_hi: "Type 8: प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    question_text: "Person A's salary is 20% less than Person B's salary, and Person B's salary is 25% more than Person C's salary. What is the exact ratio of Person A's salary to Person C's salary?",
    question_text_hi: "व्यक्ति A का वेतन व्यक्ति B के वेतन से 20% कम है, और व्यक्ति B का वेतन व्यक्ति C के वेतन से 25% अधिक है। व्यक्ति A के वेतन और व्यक्ति C के वेतन का सटीक अनुपात क्या है?",
    options: {
      a: "4:5",
      b: "5:4",
      c: "1:1",
      d: "2:3"
    },
    options_hi: {
      a: "4:5",
      b: "5:4",
      c: "1:1",
      d: "2:3"
    },
    correct_option: "c",
    solution_text: "Let C = 100.\nB = 125 (25% more than C).\nA is 20% less than B ⇒ A = 125 × 0.80 = 100.\nRatio A : C = 100 : 100 = 1 : 1.",
    solution_text_hi: "माना C = 100।\nB = 125 (C से 25% अधिक)।\nA, B से 20% कम = 125 × 0.80 = 100।\nA : C = 100 : 100 = 1 : 1।",
    shortcut_text: "A/C = (A/B) × (B/C) = (4/5) × (5/4) = 1/1 = 1:1.",
    shortcut_text_hi: "A/C = (A/B) × (B/C) = (4/5) × (5/4) = 1:1।"
  },
  {
    question_number: 4,
    practice_set: "Practice 2",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "If the base of a triangle is increased by 30% and its height is decreased by 20%, what is the overall percentage change in the area of the triangle?",
    question_text_hi: "यदि किसी त्रिभुज के आधार को 30% बढ़ा दिया जाए और उसकी ऊंचाई को 20% कम कर दिया जाए, तो त्रिभुज के क्षेत्रफल में कुल प्रतिशत परिवर्तन क्या होगा?",
    options: {
      a: "4% decrease",
      b: "4% increase",
      c: "10% increase",
      d: "2% decrease"
    },
    options_hi: {
      a: "4% कमी",
      b: "4% वृद्धि",
      c: "10% वृद्धि",
      d: "2% कमी"
    },
    correct_option: "b",
    solution_text: "Area of a triangle = (1/2) × base × height.\nUsing successive percentage formula: x + y + (xy / 100)\n= 30 - 20 - [(30 × 20) / 100] = 10 - 6 = +4% (4% increase).",
    solution_text_hi: "त्रिभुज का क्षेत्रफल = (1/2) × आधार × ऊंचाई।\nक्रमिक प्रतिशत सूत्र: 30 - 20 - (30 × 20)/100 = 10 - 6 = +4% (4% वृद्धि)।",
    shortcut_text: "Multiplier = 1.30 × 0.80 = 1.04 ⇒ +4% increase.",
    shortcut_text_hi: "1.30 × 0.80 = 1.04 ⇒ 4% वृद्धि।"
  },
  {
    question_number: 5,
    practice_set: "Practice 2",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 10",
    type_category: "Problems based on voting",
    type_category_hi: "मतदान और चुनाव पर आधारित प्रश्न",
    type_label: "Type 10: Problems based on voting",
    type_label_hi: "Type 10: मतदान और चुनाव पर आधारित प्रश्न",
    question_text: "In an election, 10% of the voters did not cast their ballots. The winning candidate received 55% of the total enrolled votes and defeated their opponent by 2,000 votes. How many total voters were enrolled?",
    question_text_hi: "एक चुनाव में, 10% मतदाताओं ने अपना वोट नहीं डाला। जीतने वाले उम्मीदवार को कुल नामांकित वोटों का 55% मिला और उसने अपने प्रतिद्वंद्वी को 2,000 वोटों से हराया। कुल कितने मतदाता नामांकित थे?",
    options: {
      a: "8,000",
      b: "10,000",
      c: "12,000",
      d: "15,000"
    },
    options_hi: {
      a: "8,000",
      b: "10,000",
      c: "12,000",
      d: "15,000"
    },
    correct_option: "b",
    solution_text: "Total enrolled votes = 100%.\nTotal votes cast = 90%.\nWinner received 55% of the total enrolled votes.\nOpponent received = 90% - 55% = 35% of total enrolled votes.\nMargin = 55% - 35% = 20% of total enrolled.\n20% = 2,000 ⇒ 100% = 10,000.",
    solution_text_hi: "कुल नामांकित = 100%।\nडाले गए वोट = 90%।\nविजेता = 55% (कुल नामांकित का)।\nप्रतिद्वंद्वी = 90% - 55% = 35%।\nजीत का अंतर = 55% - 35% = 20% = 2,000 ⇒ कुल नामांकित = 10,000।",
    shortcut_text: "20% = 2,000 ⇒ Total Enrolled = 2,000 × (100 / 20) = 10,000.",
    shortcut_text_hi: "20% = 2000 ⇒ 100% = 10,000।"
  },

  // ==========================================
  // LEVEL 2: ADVANCED MODERATION (TYPES 6 TO 10)
  // ==========================================
  {
    question_number: 6,
    practice_set: "Practice 2",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "An individual spends 20% of their monthly income on rent. From the remaining amount, they spend 25% on food, and from that new remaining balance, they spend 10% on transportation. If their final savings are ₹27,000, what is their total monthly income?",
    question_text_hi: "एक व्यक्ति अपनी मासिक आय का 20% किराए पर खर्च करता है। शेष राशि में से, वे 25% भोजन पर खर्च करते हैं, और उस नई शेष राशि में से, वे 10% परिवहन पर खर्च करते हैं। यदि उनकी अंतिम बचत ₹27,000 है, तो उनकी कुल मासिक आय क्या है?",
    options: {
      a: "₹40,000",
      b: "₹45,000",
      c: "₹50,000",
      d: "₹60,000"
    },
    options_hi: {
      a: "₹40,000",
      b: "₹45,000",
      c: "₹50,000",
      d: "₹60,000"
    },
    correct_option: "c",
    solution_text: "Let total income be x.\nAfter Rent (20%) leaves 0.80x.\nAfter Food (25%) leaves 0.75 × 0.80x = 0.60x.\nAfter Transportation (10%) leaves 0.90 × 0.60x = 0.54x.\n0.54x = 27,000 ⇒ x = ₹50,000.",
    solution_text_hi: "माना कुल आय x है।\nकिराया के बाद = 0.80x।\nभोजन के बाद = 0.75 × 0.80x = 0.60x।\nपरिवहन के बाद = 0.90 × 0.60x = 0.54x।\n0.54x = 27,000 ⇒ x = ₹50,000।",
    shortcut_text: "Fraction approach: (4/5) × (3/4) × (9/10) = 27/50.\n27 units = ₹27,000 ⇒ 50 units = ₹50,000.",
    shortcut_text_hi: "भिन्न विधि: (4/5) × (3/4) × (9/10) = 27/50 = 27,000 ⇒ कुल आय = ₹50,000।"
  },
  {
    question_number: 7,
    practice_set: "Practice 2",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "A 500 ml chemical mixture contains 20% acid. How many milliliters of pure acid must be added to the mixture to increase the acid concentration to exactly 36%?",
    question_text_hi: "500 मिलीलीटर रासायनिक मिश्रण में 20% एसिड है। एसिड की सांद्रता को ठीक 36% तक बढ़ाने के लिए मिश्रण में कितने मिलीलीटर शुद्ध एसिड मिलाया जाना चाहिए?",
    options: {
      a: "100 ml",
      b: "125 ml",
      c: "150 ml",
      d: "175 ml"
    },
    options_hi: {
      a: "100 ml",
      b: "125 ml",
      c: "150 ml",
      d: "175 ml"
    },
    correct_option: "b",
    solution_text: "Initial acid = 20% of 500 = 100 ml.\nLet x be the volume of pure acid added.\n(100 + x) / (500 + x) = 0.36\n100 + x = 180 + 0.36x ⇒ 0.64x = 80 ⇒ x = 125 ml.",
    solution_text_hi: "प्रारंभिक एसिड = 500 का 20% = 100 ml।\nमाना मिलाया गया एसिड = x।\n(100 + x) / (500 + x) = 0.36 ⇒ 0.64x = 80 ⇒ x = 125 ml।",
    shortcut_text: "Non-acid component (Water) remains constant at 80% of 500 = 400 ml.\nIn the new mixture, water is (100% - 36%) = 64%.\nNew Total Volume = 400 / 0.64 = 625 ml.\nAcid added = 625 - 500 = 125 ml.",
    shortcut_text_hi: "स्थिर घटक (पानी) = 400 ml। नए मिश्रण में पानी = 64% = 400 ml ⇒ कुल = 625 ml। मिलाया गया एसिड = 125 ml।"
  },
  {
    question_number: 8,
    practice_set: "Practice 2",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 8",
    type_category: "Problems based on finding percentage",
    type_category_hi: "प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 8: Problems based on finding percentage",
    type_label_hi: "Type 8: प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    question_text: "The market price of a raw material increases by 40%. A manufacturing plant decides it can only afford to increase its total expenditure on this material by 12%. By what percentage must the plant reduce its physical consumption of the material to meet this strict budget?",
    question_text_hi: "एक कच्चे माल के बाजार मूल्य में 40% की वृद्धि होती है। एक विनिर्माण संयंत्र तय करता है कि वह इस सामग्री पर अपने कुल खर्च में केवल 12% की वृद्धि कर सकता है। इस सख्त बजट को पूरा करने के लिए संयंत्र को सामग्री की भौतिक खपत में कितने प्रतिशत की कमी करनी चाहिए?",
    options: {
      a: "15%",
      b: "20%",
      c: "25%",
      d: "28%"
    },
    options_hi: {
      a: "15%",
      b: "20%",
      c: "25%",
      d: "28%"
    },
    correct_option: "b",
    solution_text: "Let initial price = 100, initial consumption = 100 ⇒ Initial expenditure = 10,000.\nNew price = 140. Allowed expenditure = 11,200.\nNew consumption = 11,200 / 140 = 80.\nReduction in consumption = 100 - 80 = 20%.",
    solution_text_hi: "प्रारंभिक: मूल्य = 100, खपत = 100 ⇒ खर्च = 10,000।\nनया मूल्य = 140, अनुमत खर्च = 11,200।\nनई खपत = 11,200 / 140 = 80। खपत में कमी = 20%।",
    shortcut_text: "Consumption factor = (100 + 12) / (100 + 40) = 112 / 140 = 4 / 5 = 80%.\nReduction = 100% - 80% = 20%.",
    shortcut_text_hi: "खपत अनुपात = 112 / 140 = 4/5 = 80% ⇒ कमी = 20%।"
  },
  {
    question_number: 9,
    practice_set: "Practice 2",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "The radius of a right circular cylinder is increased by 15% and its height is decreased by 20%. What is the precise percentage change in the curved surface area of the cylinder?",
    question_text_hi: "एक लंब वृत्तीय बेलन की त्रिज्या में 15% की वृद्धि की जाती है और इसकी ऊंचाई में 20% की कमी की जाती है। बेलन के वक्र पृष्ठीय क्षेत्रफल में सटीक प्रतिशत परिवर्तन क्या है?",
    options: {
      a: "5% decrease",
      b: "8% decrease",
      c: "8% increase",
      d: "10% decrease"
    },
    options_hi: {
      a: "5% कमी",
      b: "8% कमी",
      c: "8% वृद्धि",
      d: "10% कमी"
    },
    correct_option: "b",
    solution_text: "Curved Surface Area (CSA) of a cylinder = 2πrh (proportional to r × h).\nNet change = 15 - 20 - [(15 × 20) / 100] = -5 - 3 = -8% (8% decrease).",
    solution_text_hi: "बेलन का वक्र पृष्ठ = 2πrh (r × h के समानुपाती)।\nकुल परिवर्तन = 15 - 20 - (15 × 20)/100 = -8% (8% कमी)।",
    shortcut_text: "Multiplier = 1.15 × 0.80 = 0.92 ⇒ Net change = -0.08 = -8% (8% decrease).",
    shortcut_text_hi: "1.15 × 0.80 = 0.92 ⇒ 8% कमी।"
  },
  {
    question_number: 10,
    practice_set: "Practice 2",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 10",
    type_category: "Problems based on voting",
    type_category_hi: "मतदान और चुनाव पर आधारित प्रश्न",
    type_label: "Type 10: Problems based on voting",
    type_label_hi: "Type 10: मतदान और चुनाव पर आधारित प्रश्न",
    question_text: "In an election with two candidates, 15% of enrolled voters did not vote, and 5% of the votes cast were declared invalid. If the successful candidate secured 55% of the valid votes and won by a margin of 1,710 votes, what was the total number of enrolled voters (rounded to the nearest integer)?",
    question_text_hi: "दो उम्मीदवारों वाले एक चुनाव में, 15% नामांकित मतदाताओं ने मतदान नहीं किया, और डाले गए वोटों में से 5% को अवैध घोषित कर दिया गया। यदि सफल उम्मीदवार ने वैध वोटों का 55% हासिल किया और 1,710 वोटों के अंतर से जीत हासिल की, तो कुल नामांकित मतदाताओं की संख्या (निकटतम पूर्णांक तक) क्या थी?",
    options: {
      a: "21,176",
      b: "20,000",
      c: "18,500",
      d: "19,000"
    },
    options_hi: {
      a: "21,176",
      b: "20,000",
      c: "18,500",
      d: "19,000"
    },
    correct_option: "a",
    solution_text: "Let Valid Votes = V.\nMargin = 55% - 45% = 10% of V.\n0.10V = 1,710 ⇒ V = 17,100.\nCast votes = 17,100 / 0.95 = 18,000.\nEnrolled voters = 18,000 / 0.85 = 21,176.47 ≈ 21,176.",
    solution_text_hi: "माना वैध वोट = V।\nअंतर = 10% V = 1,710 ⇒ V = 17,100।\nडाले गए वोट = 17,100 / 0.95 = 18,000।\nकुल नामांकित = 18,000 / 0.85 = 21,176.47 ≈ 21,176।",
    shortcut_text: "Total Enrolled = 1,710 / (0.85 × 0.95 × 0.10) = 1,710 / 0.08075 ≈ 21,176.",
    shortcut_text_hi: "कुल = 1710 / (0.85 × 0.95 × 0.10) ≈ 21,176।"
  },

  // ==========================================
  // LEVEL 3: SLIGHTLY DIFFICULT (UPGRADED PYQs) (TYPES 6 TO 10)
  // ==========================================
  {
    question_number: 11,
    practice_set: "Practice 2",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "Due to a 25% reduction in the price of wheat per kg, John is able to buy 5 kg more for ₹600. Calculate the exact original price of the wheat per kg before the reduction occurred.",
    question_text_hi: "गेहूं की कीमत में प्रति किलोग्राम 25% की कमी के कारण, जॉन ₹600 में 5 किलो अधिक गेहूं खरीद पाता है। कमी होने से पहले गेहूं की सटीक मूल कीमत प्रति किलोग्राम ज्ञात कीजिए।",
    options: {
      a: "₹50",
      b: "₹45",
      c: "₹40",
      d: "₹60"
    },
    options_hi: {
      a: "₹50",
      b: "₹45",
      c: "₹40",
      d: "₹60"
    },
    correct_option: "c",
    solution_text: "Let original price = x. New price = 0.75x.\nEquation: [600 / (0.75x)] - [600 / x] = 5\n(800 / x) - (600 / x) = 5 ⇒ 200 / x = 5 ⇒ x = ₹40/kg.",
    solution_text_hi: "माना मूल मूल्य = x। नया मूल्य = 0.75x।\n(800 / x) - (600 / x) = 5 ⇒ 200 / x = 5 ⇒ x = ₹40/किग्रा।",
    shortcut_text: "25% of ₹600 = ₹150 saved, which buys 5 kg.\nNew Price = ₹150 / 5 = ₹30/kg.\nOriginal Price = ₹30 / 0.75 = ₹40/kg.",
    shortcut_text_hi: "बचत = 600 का 25% = ₹150। नया मूल्य = 150/5 = ₹30। मूल मूल्य = 30 / 0.75 = ₹40।"
  },
  {
    question_number: 12,
    practice_set: "Practice 2",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "A specifically prepared chemical solution has an 8% salt concentration, and the total volume of this solution is exactly 550 ml. Calculate the exact physical quantity of salt in the solution in ml.",
    question_text_hi: "एक विशेष रूप से तैयार किए गए रासायनिक घोल में 8% नमक की सांद्रता है, और इस घोल की कुल मात्रा ठीक 550 मिलीलीटर है। घोल में नमक की सटीक भौतिक मात्रा (मिलीलीटर में) ज्ञात कीजिए।",
    options: {
      a: "42.5 ml",
      b: "48 ml",
      c: "38.5 ml",
      d: "44 ml"
    },
    options_hi: {
      a: "42.5 ml",
      b: "48 ml",
      c: "38.5 ml",
      d: "44 ml"
    },
    correct_option: "d",
    solution_text: "Quantity of salt = 8% of 550 ml = 550 × 0.08 = 44 ml.",
    solution_text_hi: "नमक की भौतिक मात्रा = 550 का 8% = 550 × 0.08 = 44 मिलीलीटर।",
    shortcut_text: "550 × 0.08 = 5.5 × 8 = 44 ml.",
    shortcut_text_hi: "5.5 × 8 = 44 ml।"
  },
  {
    question_number: 13,
    practice_set: "Practice 2",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 8",
    type_category: "Problems based on finding percentage",
    type_category_hi: "प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 8: Problems based on finding percentage",
    type_label_hi: "Type 8: प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    question_text: "The income of A is 25% less than the income of B, whose income is 40% more than that of C. The income of C is 20% less than that of D. By what exact percent is the income of A more than the income of C?",
    question_text_hi: "A की आय B की आय से 25% कम है, जिसकी आय C से 40% अधिक है। C की आय D से 20% कम है। A की आय, C की आय से ठीक कितने प्रतिशत अधिक है?",
    options: {
      a: "8%",
      b: "5%",
      c: "10%",
      d: "4%"
    },
    options_hi: {
      a: "8%",
      b: "5%",
      c: "10%",
      d: "4%"
    },
    correct_option: "b",
    solution_text: "Let income of C = 100.\nIncome of B = 100 × 1.40 = 140.\nIncome of A = 140 × (1 - 0.25) = 140 × 0.75 = 105.\nA is more than C by: [(105 - 100) / 100] × 100 = 5%.",
    solution_text_hi: "माना C की आय = 100।\nB की आय = 140।\nA की आय = 140 × 0.75 = 105।\nA, C से अधिक = (105 - 100) = 5%।",
    shortcut_text: "A/C = (A/B) × (B/C) = 0.75 × 1.40 = 1.05 ⇒ 5% more than C.",
    shortcut_text_hi: "A/C = 0.75 × 1.40 = 1.05 ⇒ C से 5% अधिक।"
  },
  {
    question_number: 14,
    practice_set: "Practice 2",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "The lengths of two adjacent sides of a square are increased by 35% and 25% respectively to form a new shape. By what exact percentage does the area of the resulting rectangle exceed the area of the original square?",
    question_text_hi: "एक वर्ग की दो आसन्न भुजाओं की लंबाई को क्रमशः 35% और 25% बढ़ाकर एक नया आकार बनाया जाता है। परिणामी आयत का क्षेत्रफल मूल वर्ग के क्षेत्रफल से ठीक कितने प्रतिशत अधिक है?",
    options: {
      a: "68.75%",
      b: "69.75%",
      c: "67.75%",
      d: "70.75%"
    },
    options_hi: {
      a: "68.75%",
      b: "69.75%",
      c: "67.75%",
      d: "70.75%"
    },
    correct_option: "a",
    solution_text: "Using successive percentage change formula x + y + (xy / 100):\n= 35 + 25 + [(35 × 25) / 100] = 60 + 8.75 = 68.75%.",
    solution_text_hi: "क्रमिक प्रतिशत सूत्र: 35 + 25 + (35 × 25)/100 = 60 + 8.75 = 68.75%।",
    shortcut_text: "Net increase = 35 + 25 + 8.75 = 68.75%.",
    shortcut_text_hi: "कुल वृद्धि = 60 + 8.75 = 68.75%।"
  },
  {
    question_number: 15,
    practice_set: "Practice 2",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 10",
    type_category: "Problems based on voting",
    type_category_hi: "मतदान और चुनाव पर आधारित प्रश्न",
    type_label: "Type 10: Problems based on voting",
    type_label_hi: "Type 10: मतदान और चुनाव पर आधारित प्रश्न",
    question_text: "In a local election, 90% of those entitled to vote cast their ballot, and exactly 80% of those cast votes were deemed valid. The winner secured 60% of the valid votes. If the winner received exactly 64,800 votes, what was the total number of people originally entitled to vote?",
    question_text_hi: "एक स्थानीय चुनाव में, वोट देने के हकदार 90% लोगों ने अपना वोट डाला, और डाले गए वोटों में से ठीक 80% को वैध माना गया। विजेता ने वैध वोटों का 60% हासिल किया। यदि विजेता को ठीक 64,800 वोट मिले, तो मूल रूप से वोट देने के हकदार लोगों की कुल संख्या क्या थी?",
    options: {
      a: "150,000",
      b: "125,000",
      c: "200,000",
      d: "175,000"
    },
    options_hi: {
      a: "150,000",
      b: "125,000",
      c: "200,000",
      d: "175,000"
    },
    correct_option: "a",
    solution_text: "Let total entitled voters = T.\nT × 0.90 × 0.80 × 0.60 = 64,800\nT × 0.432 = 64,800 ⇒ T = 150,000.",
    solution_text_hi: "माना कुल पात्र मतदाता = T।\nT × 0.90 × 0.80 × 0.60 = 64,800 ⇒ T × 0.432 = 64,800 ⇒ T = 150,000।",
    shortcut_text: "T × (9/10) × (4/5) × (3/5) = 64,800 ⇒ T × (108/250) = 64,800 ⇒ T = 600 × 250 = 150,000.",
    shortcut_text_hi: "T × (108/250) = 64,800 ⇒ T = 600 × 250 = 150,000।"
  },

  // ==========================================
  // LEVEL 4: DIFFICULT (FUTURE-TESTING PYQs) (TYPES 6 TO 10)
  // ==========================================
  {
    question_number: 16,
    practice_set: "Practice 2",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "In a factory production run, 20% of the toys produced were defective, and 25% of the remaining functional toys were subsequently damaged. If exactly 4,800 toys survived in good condition, what is the absolute numerical difference between the original total number of toys produced and the total combined number of defective/damaged toys?",
    question_text_hi: "एक कारखाने के उत्पादन में, उत्पादित 20% खिलौने दोषपूर्ण थे, और शेष काम करने वाले खिलौनों में से 25% बाद में क्षतिग्रस्त हो गए। यदि ठीक 4,800 खिलौने अच्छी स्थिति में बचे, तो उत्पादित खिलौनों की मूल कुल संख्या और दोषपूर्ण/क्षतिग्रस्त खिलौनों की कुल संयुक्त संख्या के बीच पूर्ण संख्यात्मक अंतर क्या है?",
    options: {
      a: "4,800",
      b: "3,200",
      c: "5,000",
      d: "4,000"
    },
    options_hi: {
      a: "4,800",
      b: "3,200",
      c: "5,000",
      d: "4,000"
    },
    correct_option: "a",
    solution_text: "Let total toys = T.\nDefective = 0.20T → Remaining = 0.80T.\nDamaged = 0.25 × 0.80T = 0.20T.\nGood toys = 0.80T - 0.20T = 0.60T.\n0.60T = 4,800 ⇒ T = 8,000.\nTotal Defective + Damaged = 0.20T + 0.20T = 0.40T = 3,200.\nAbsolute difference = 8,000 - 3,200 ⇒ 4,800.",
    solution_text_hi: "माना कुल = T। दोषपूर्ण = 0.20T, शेष = 0.80T।\nक्षतिग्रस्त = 0.25 × 0.80T = 0.20T।\nअच्छे खिलौने = 0.60T = 4,800 ⇒ T = 8,000।\nखराब खिलौने = 3,200।\nअंतर = 8,000 - 3,200 = 4,800।",
    shortcut_text: "Good = 60% = 4,800. Bad = 40% = 3,200. Total = 8,000.\nDifference (Total - Bad) = Good = 4,800.",
    shortcut_text_hi: "कुल = 8,000, खराब = 3,200। अंतर = 8,000 - 3,200 = 4,800।"
  },
  {
    question_number: 17,
    practice_set: "Practice 2",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "Calculations show that 60% of 40% of 32% of a specific unknown monetary amount is exactly ₹432. Calculate the exact value of 63% of that same original monetary amount.",
    question_text_hi: "गणना दर्शाती है कि किसी विशिष्ट अज्ञात मौद्रिक राशि के 32% के 40% का 60% ठीक ₹432 है। उसी मूल मौद्रिक राशि के 63% का सटीक मान ज्ञात कीजिए।",
    options: {
      a: "3,543.75",
      b: "3,550.50",
      c: "3,643.75",
      d: "3,500.00"
    },
    options_hi: {
      a: "3,543.75",
      b: "3,550.50",
      c: "3,643.75",
      d: "3,500.00"
    },
    correct_option: "a",
    solution_text: "Let original amount = x.\nx × 0.60 × 0.40 × 0.32 = 432\nx × 0.0768 = 432 ⇒ x = 5,625.\n63% of 5,625 = 0.63 × 5,625 = 3,543.75.",
    solution_text_hi: "माना मूल राशि = x।\nx × 0.60 × 0.40 × 0.32 = 432 ⇒ x × 0.0768 = 432 ⇒ x = 5,625।\n5,625 का 63% = 0.63 × 5,625 = 3,543.75।",
    shortcut_text: "x = 432 / 0.0768 = 5,625.\n0.63 × 5,625 = 3,543.75.",
    shortcut_text_hi: "x = 5625 ⇒ 63% = 3,543.75।"
  },
  {
    question_number: 18,
    practice_set: "Practice 2",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 8",
    type_category: "Problems based on finding percentage",
    type_category_hi: "प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 8: Problems based on finding percentage",
    type_label_hi: "Type 8: प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    question_text: "The numerical values x and y exist in a precise ratio of 4:5. If x is calculated to be exactly 20% more than a third variable z, by what specific percentage is y more than z, and what is the simplified ratio of z to y?",
    question_text_hi: "संख्यात्मक मान x और y 4:5 के सटीक अनुपात में मौजूद हैं। यदि x की गणना एक तीसरे चर z से ठीक 20% अधिक की जाती है, तो y, z से कितने विशिष्ट प्रतिशत अधिक है, और z से y का सरलीकृत अनुपात क्या है?",
    options: {
      a: "40%, 3:2",
      b: "50%, 2:3",
      c: "60%, 4:5",
      d: "50%, 3:4"
    },
    options_hi: {
      a: "40%, 3:2",
      b: "50%, 2:3",
      c: "60%, 4:5",
      d: "50%, 3:4"
    },
    correct_option: "b",
    solution_text: "Let x = 4, y = 5.\nx is 20% more than z ⇒ x = 1.20z ⇒ z = 4 / 1.20 = 10/3.\ny compared to z: [5 - (10/3)] / (10/3) × 100 = (5/3) / (10/3) × 100 = 50%.\nRatio z : y = (10/3) : 5 = 10 : 15 = 2 : 3.",
    solution_text_hi: "माना x = 4, y = 5।\nz = 4 / 1.2 = 10/3।\ny, z से अधिक = [(5 - 10/3) / (10/3)] × 100 = 50%।\nz : y का अनुपात = (10/3) : 5 = 10 : 15 = 2 : 3।",
    shortcut_text: "Set z = 10 ⇒ x = 12. Since x:y = 4:5, y = 15.\ny is (15 - 10)/10 = 50% more than z. Ratio z : y = 10 : 15 = 2 : 3.",
    shortcut_text_hi: "z = 10 मानें ⇒ x = 12 ⇒ y = 15। y, z से 50% अधिक है। z:y = 2:3।"
  },
  {
    question_number: 19,
    practice_set: "Practice 2",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "If the radius of a standard circle is decreased by exactly 35%, by what precise percentage does its area decrease, and what would the percentage change in area be if the radius had instead been increased by 35%?",
    question_text_hi: "यदि एक मानक वृत्त की त्रिज्या में ठीक 35% की कमी की जाती है, तो इसके क्षेत्रफल में कितने सटीक प्रतिशत की कमी होती है, और यदि त्रिज्या में 35% की वृद्धि की गई होती तो क्षेत्रफल में प्रतिशत परिवर्तन क्या होता?",
    options: {
      a: "-57.75%, +82.25%",
      b: "-56.75%, +80.25%",
      c: "-57.75%, +75.25%",
      d: "-60.00%, +82.25%"
    },
    options_hi: {
      a: "-57.75%, +82.25%",
      b: "-56.75%, +80.25%",
      c: "-57.75%, +75.25%",
      d: "-60.00%, +82.25%"
    },
    correct_option: "a",
    solution_text: "Area of a circle is proportional to r².\nCase 1 (Decrease by 35%): -35 - 35 + [(35 × 35) / 100] = -70 + 12.25 = -57.75%.\nCase 2 (Increase by 35%): +35 + 35 + [(35 × 35) / 100] = 70 + 12.25 = +82.25%.",
    solution_text_hi: "वृत्त का क्षेत्रफल r² के समानुपाती होता है।\nकमी: -35 - 35 + 12.25 = -57.75%।\nवृद्धि: +35 + 35 + 12.25 = +82.25%।",
    shortcut_text: "Net Area = (1 ± 0.35)² - 1.\n0.65² - 1 = 0.4225 - 1 = -57.75%.\n1.35² - 1 = 1.8225 - 1 = +82.25%.",
    shortcut_text_hi: "कमी: 0.65² - 1 = -57.75%। वृद्धि: 1.35² - 1 = +82.25%।"
  },
  {
    question_number: 20,
    practice_set: "Practice 2",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 10",
    type_category: "Problems based on voting",
    type_category_hi: "मतदान और चुनाव पर आधारित प्रश्न",
    type_label: "Type 10: Problems based on voting",
    type_label_hi: "Type 10: मतदान और चुनाव पर आधारित प्रश्न",
    question_text: "In an election between two candidates, the winning candidate secured exactly 48% of the total registered votes. His opponent secured 6,800 votes, which accounted for exactly 34% of the total registered votes, while the remaining votes were declared invalid. Calculate the exact winning margin in votes and the total number of invalid votes cast.",
    question_text_hi: "दो उम्मीदवारों के बीच एक चुनाव में, जीतने वाले उम्मीदवार ने कुल पंजीकृत वोटों का ठीक 48% हासिल किया। उसके प्रतिद्वंद्वी ने 6,800 वोट हासिल किए, जो कुल पंजीकृत वोटों का ठीक 34% था, जबकि शेष वोटों को अवैध घोषित कर दिया गया। वोटों में जीत का सटीक अंतर और डाले गए अवैध वोटों की कुल संख्या की गणना करें।",
    options: {
      a: "2,800 margin, 3,600 invalid",
      b: "3,000 margin, 3,200 invalid",
      c: "2,800 margin, 3,200 invalid",
      d: "3,200 margin, 3,600 invalid"
    },
    options_hi: {
      a: "2,800 अंतर, 3,600 अवैध",
      b: "3,000 अंतर, 3,200 अवैध",
      c: "2,800 अंतर, 3,200 अवैध",
      d: "3,200 अंतर, 3,600 अवैध"
    },
    correct_option: "a",
    solution_text: "Opponent = 34% = 6,800 votes ⇒ 1% = 200 votes.\nTotal registered votes = 200 × 100 = 20,000.\nWinning Candidate = 48% = 48 × 200 = 9,600 votes.\nWinning Margin = 9,600 - 6,800 = 2,800 votes.\nInvalid Votes = 100% - (48% + 34%) = 18% = 18 × 200 = 3,600 votes.",
    solution_text_hi: "प्रतिद्वंद्वी = 34% = 6,800 ⇒ 1% = 200 वोट।\nकुल पंजीकृत = 20,000।\nविजेता = 48% = 9,600 वोट।\nजीत का अंतर = 9,600 - 6,800 = 2,800।\nअवैध वोट = 18% = 3,600।",
    shortcut_text: "Margin % = 48% - 34% = 14%. Invalid % = 100% - 82% = 18%.\nSince 34% = 6,800 ⇒ 1% = 200.\nMargin = 14 × 200 = 2,800. Invalid = 18 × 200 = 3,600.",
    shortcut_text_hi: "1% = 200 ⇒ अंतर = 14 × 200 = 2,800, अवैध = 18 × 200 = 3,600।"
  },

  // ==========================================
  // LEVEL 5: HIGHLY DIFFICULT (DEEP ANALYTICAL PYQs) (TYPES 6 TO 10)
  // ==========================================
  {
    question_number: 21,
    practice_set: "Practice 2",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "A grocery store purchases 600 total bottles of juice, with 20% supplied by Seller A and 80% supplied by Seller B. The baseline cost is ₹25 per bottle. If the store discovers that exactly 25% of Seller B's goods spoil within one day and successfully returns them for a full monetary refund, what is the exact net monetary amount the store spent on usable goods across both sellers combined?",
    question_text_hi: "एक किराने की दुकान जूस की कुल 600 बोतलें खरीदती है, जिसमें से 20% विक्रेता A द्वारा और 80% विक्रेता B द्वारा आपूर्ति की जाती हैं। मूल लागत ₹25 प्रति बोतल है। यदि दुकान को पता चलता है कि विक्रेता B का ठीक 25% सामान एक दिन के भीतर खराब हो जाता है और वे उन्हें पूर्ण धनवापसी के लिए सफलतापूर्वक वापस कर देते हैं, तो दोनों विक्रेताओं को मिलाकर दुकान द्वारा उपयोग योग्य सामान पर खर्च की गई सटीक शुद्ध मौद्रिक राशि क्या है?",
    options: {
      a: "₹10,000",
      b: "₹12,000",
      c: "₹15,000",
      d: "₹13,500"
    },
    options_hi: {
      a: "₹10,000",
      b: "₹12,000",
      c: "₹15,000",
      d: "₹13,500"
    },
    correct_option: "b",
    solution_text: "Total bottles = 600.\nSeller A = 20% of 600 = 120 bottles (all usable).\nSeller B = 80% of 600 = 480 bottles.\nSpoiled goods from Seller B = 25% of 480 = 120 bottles (refunded).\nUsable bottles from Seller B = 480 - 120 = 360 bottles.\nTotal usable bottles = 120 + 360 = 480 bottles.\nTotal net money spent = 480 × ₹25 = ₹12,000.",
    solution_text_hi: "कुल बोतलें = 600। विक्रेता A = 120, विक्रेता B = 480।\nB की खराब बोतलें = 480 का 25% = 120 (धनवापसी हुई)।\nB की उपयोगी बोतलें = 360।\nकुल उपयोगी बोतलें = 120 + 360 = 480।\nकुल खर्च = 480 × ₹25 = ₹12,000।",
    shortcut_text: "Usable bottles = 120 (A) + 0.75 × 480 (B) = 120 + 360 = 480.\nNet Cost = 480 × 25 = ₹12,000.",
    shortcut_text_hi: "उपयोगी बोतलें = 480 × 25 = ₹12,000।"
  },
  {
    question_number: 22,
    practice_set: "Practice 2",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "Two distinct saline solutions are analyzed. Solution A contains 33 gm of salt dissolved in 320 gm of water. Solution B contains 31 gm of salt dissolved in 320 gm of water. Calculate the exact absolute difference in their mass-by-mass concentration percentages, rounded precisely to two decimal places.",
    question_text_hi: "दो अलग-अलग खारे घोल का विश्लेषण किया जाता है। घोल A में 320 ग्राम पानी में 33 ग्राम नमक घुला है। घोल B में 320 ग्राम पानी में 31 ग्राम नमक घुला है। द्रव्यमान के अनुसार उनकी सांद्रता प्रतिशत में सटीक पूर्ण अंतर की गणना करें, जिसे दो दशमलव स्थानों तक पूर्णांकित किया गया हो।",
    options: {
      a: "0.52%",
      b: "0.45%",
      c: "0.60%",
      d: "0.58%"
    },
    options_hi: {
      a: "0.52%",
      b: "0.45%",
      c: "0.60%",
      d: "0.58%"
    },
    correct_option: "a",
    solution_text: "Solution A Total Mass = 320 + 33 = 353 gm.\nSolution A Concentration = (33 / 353) × 100 = 9.348%.\nSolution B Total Mass = 320 + 31 = 351 gm.\nSolution B Concentration = (31 / 351) × 100 = 8.831%.\nAbsolute Difference = 9.348% - 8.831% = 0.517% ≈ 0.52%.",
    solution_text_hi: "घोल A का कुल द्रव्यमान = 353 ग्राम ⇒ सांद्रता = (33 / 353) × 100 = 9.348%।\nघोल B का कुल द्रव्यमान = 351 ग्राम ⇒ सांद्रता = (31 / 351) × 100 = 8.831%।\nअंतर = 9.348% - 8.831% = 0.517% ≈ 0.52%।",
    shortcut_text: "(33 / 353 - 31 / 351) × 100 = (11583 - 10943) / (353 × 351) × 100 = 64000 / 123903 ≈ 0.517% ≈ 0.52%.",
    shortcut_text_hi: "(33/353 - 31/351) × 100 ≈ 0.52%।"
  },
  {
    question_number: 23,
    practice_set: "Practice 2",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 8",
    type_category: "Problems based on finding percentage",
    type_category_hi: "प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 8: Problems based on finding percentage",
    type_label_hi: "Type 8: प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    question_text: "Mathematical analysis reveals that 12.5% of a first number is exactly equal to 37.5% of a second number. If the second number is subtracted directly from the first number, the resulting answer is 1,428. Find the exact sum of these two numbers, and determine the ratio of their absolute difference to their sum.",
    question_text_hi: "गणितीय विश्लेषण से पता चलता है कि पहली संख्या का 12.5% दूसरी संख्या के 37.5% के बिल्कुल बराबर है। यदि दूसरी संख्या को सीधे पहली संख्या से घटाया जाता है, तो परिणामी उत्तर 1,428 होता है। इन दोनों संख्याओं का सटीक योग ज्ञात कीजिए, और उनके पूर्ण अंतर का उनके योग से अनुपात निर्धारित कीजिए।",
    options: {
      a: "2856, 1:2",
      b: "2846, 1:3",
      c: "2936, 1:2",
      d: "2856, 2:3"
    },
    options_hi: {
      a: "2856, 1:2",
      b: "2846, 1:3",
      c: "2936, 1:2",
      d: "2856, 2:3"
    },
    correct_option: "a",
    solution_text: "12.5% = 1/8, 37.5% = 3/8.\n(1/8)A = (3/8)B ⇒ A = 3B.\nA - B = 1,428 ⇒ 3B - B = 2B = 1,428 ⇒ B = 714, A = 2,142.\nSum = A + B = 2,142 + 714 = 2,856.\nRatio (Difference : Sum) = 1,428 : 2,856 = 1 : 2.",
    solution_text_hi: "12.5% A = 37.5% B ⇒ A = 3B।\nA - B = 2B = 1,428 ⇒ B = 714, A = 2,142।\nयोग = 2,142 + 714 = 2,856।\nअनुपात = 1,428 : 2,856 = 1 : 2।",
    shortcut_text: "Ratio A : B = 3 : 1. Difference = 2 units = 1,428.\nSum = 4 units = 2 × 1,428 = 2,856.\nRatio of Difference to Sum = 2 : 4 = 1 : 2.",
    shortcut_text_hi: "A:B = 3:1। अंतर = 2 इकाई = 1428 ⇒ योग = 4 इकाई = 2856। अनुपात = 2:4 = 1:2।"
  },
  {
    question_number: 24,
    practice_set: "Practice 2",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "A solid cylinder's radius is deliberately increased by 10%, while its height is simultaneously decreased by 40%. Calculate the exact percentage decrease in its curved surface area, and then determine what the net percentage change in its overall volume would be under these exact same dimensional shifts.",
    question_text_hi: "एक ठोस बेलन की त्रिज्या जानबूझकर 10% बढ़ा दी जाती है, जबकि इसकी ऊंचाई एक साथ 40% कम कर दी जाती है। इसके वक्र पृष्ठीय क्षेत्रफल में सटीक प्रतिशत कमी की गणना करें, और फिर निर्धारित करें कि इन्हीं आयामी परिवर्तनों के तहत इसके कुल आयतन में शुद्ध प्रतिशत परिवर्तन क्या होगा।",
    options: {
      a: "-34%, -27.4%",
      b: "-34%, -25.6%",
      c: "-30%, -27.4%",
      d: "-30%, -24.8%"
    },
    options_hi: {
      a: "-34%, -27.4%",
      b: "-34%, -25.6%",
      c: "-30%, -27.4%",
      d: "-30%, -24.8%"
    },
    correct_option: "a",
    solution_text: "1. Curved Surface Area (proportional to r × h):\nCSA change = 10 - 40 - [(10 × 40) / 100] = -30 - 4 = -34%.\n2. Volume (proportional to r² × h):\nr² change = 10 + 10 + 1 = +21%.\nVolume change = 21 - 40 - [(21 × 40) / 100] = -19 - 8.4 = -27.4%.",
    solution_text_hi: "1. CSA (r × h के समानुपाती) = 10 - 40 - 4 = -34%।\n2. आयतन (r² × h के समानुपाती):\nr² = +21% ⇒ आयतन = 21 - 40 - 8.4 = -27.4%।",
    shortcut_text: "CSA multiplier = 1.1 × 0.6 = 0.66 ⇒ -34%.\nVolume multiplier = 1.1² × 0.6 = 1.21 × 0.6 = 0.726 ⇒ -27.4%.",
    shortcut_text_hi: "CSA = 1.1 × 0.6 = 0.66 ⇒ -34%। आयतन = 1.21 × 0.6 = 0.726 ⇒ -27.4%।"
  },
  {
    question_number: 25,
    practice_set: "Practice 2",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 10",
    type_category: "Problems based on voting",
    type_category_hi: "मतदान और चुनाव पर आधारित प्रश्न",
    type_label: "Type 10: Problems based on voting",
    type_label_hi: "Type 10: मतदान और चुनाव पर आधारित प्रश्न",
    question_text: "District XYZ has a baseline of 50,000 voters (20% urban and 80% rural). Prior to an election, exactly 25% of the rural voters are permanently shifted to the urban area. Out of the newly combined total voters, demographic tracking shows 60% are honest, 70% are hardworking, and exactly 35% are both. If every single voter who is both honest and hardworking cast their ballot for NOTA, exactly how many NOTA votes were recorded, and what is the new total population of urban voters in the district?",
    question_text_hi: "जिला XYZ में 50,000 मतदाताओं (20% शहरी और 80% ग्रामीण) का आधार है। चुनाव से पहले, ग्रामीण मतदाताओं का ठीक 25% स्थायी रूप से शहरी क्षेत्र में स्थानांतरित कर दिया जाता है। नए संयुक्त कुल मतदाताओं में से जनसांख्यिकीय ट्रैकिंग से पता चलता है कि 60% ईमानदार हैं, 70% मेहनती हैं, और ठीक 35% दोनों हैं। यदि ईमानदार और मेहनती दोनों तरह के हर एक मतदाता ने NOTA के लिए अपना वोट डाला, तो NOTA के ठीक कितने वोट दर्ज किए गए, और जिले में शहरी मतदाताओं की नई कुल जनसंख्या क्या है?",
    options: {
      a: "17,500 NOTA, 20,000 Urban",
      b: "19,500 NOTA, 15,000 Urban",
      c: "17,500 NOTA, 25,000 Urban",
      d: "19,000 NOTA, 20,000 Urban"
    },
    options_hi: {
      a: "17,500 NOTA, 20,000 शहरी",
      b: "19,500 NOTA, 15,000 शहरी",
      c: "17,500 NOTA, 25,000 शहरी",
      d: "19,000 NOTA, 20,000 शहरी"
    },
    correct_option: "a",
    solution_text: "Total Voters = 50,000.\nInitial Rural = 80% of 50,000 = 40,000. Initial Urban = 20% of 50,000 = 10,000.\nRural shifted to Urban = 25% of 40,000 = 10,000.\nNew Urban Population = 10,000 + 10,000 = 20,000.\nBoth honest and hardworking = 35% of total 50,000 = 0.35 × 50,000 = 17,500 NOTA votes.",
    solution_text_hi: "कुल मतदाता = 50,000।\nप्रारंभिक ग्रामीण = 40,000, शहरी = 10,000।\nस्थानांतरित ग्रामीण = 40,000 का 25% = 10,000।\nनए शहरी मतदाता = 10,000 + 10,000 = 20,000।\nदोनों (ईमानदार और मेहनती) = 50,000 का 35% = 17,500 NOTA वोट।",
    shortcut_text: "New Urban = 10,000 + 10,000 = 20,000.\nNOTA = 35% of 50,000 = 17,500.",
    shortcut_text_hi: "शहरी = 20,000। NOTA = 50,000 का 35% = 17,500।"
  }
];

if (typeof window !== "undefined") {
  window.PERCENTAGE_PRACTICE_1_QUESTIONS = PERCENTAGE_PRACTICE_1_QUESTIONS;
  window.PERCENTAGE_PRACTICE_2_QUESTIONS = PERCENTAGE_PRACTICE_2_QUESTIONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PERCENTAGE_PRACTICE_1_QUESTIONS, PERCENTAGE_PRACTICE_2_QUESTIONS };
}
