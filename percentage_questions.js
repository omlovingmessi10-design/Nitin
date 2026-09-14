/**
 * Percentage Practice Sets 1, 2 & 3 - Complete 92 Questions Dataset (Set 1: 25 Qs, Set 2: 25 Qs, Set 3: 42 Qs)
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

const PERCENTAGE_PRACTICE_3_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MORE THAN MODERATE (Q1 - Q9)
  // ==========================================
  {
    question_number: 1,
    practice_set: "Practice 3",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 8",
    type_category: "Problems based on finding percentage",
    type_category_hi: "प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 8: Problems based on finding percentage",
    type_label_hi: "Type 8: प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    question_text: "The production of bottles rose from 16000 to 26000 in 2 years. Find the rate of growth per annum.",
    question_text_hi: "2 वर्षों में बोतलों का उत्पादन 16000 से बढ़कर 26000 हो गया। प्रति वर्ष वृद्धि दर ज्ञात कीजिए।",
    options: {
      a: "26.47%",
      b: "37.47%",
      c: "28.47%",
      d: "27.47%"
    },
    options_hi: {
      a: "26.47%",
      b: "37.47%",
      c: "28.47%",
      d: "27.47%"
    },
    correct_option: "d",
    solution_text: "Using compound growth formula: 16000(1 + r/100)² = 26000.\n(1 + r/100)² = 1.625.\n1 + r/100 = √1.625 ≈ 1.2747.\nGrowth rate r = 27.47%.",
    solution_text_hi: "चक्रवृद्धि वृद्धि सूत्र का उपयोग करने पर: 16000(1 + r/100)² = 26000।\n(1 + r/100)² = 1.625।\n1 + r/100 = √1.625 ≈ 1.2747।\nवृद्धि दर r = 27.47%।",
    shortcut_text: "Ratio = 26/16 = 1.625. Multiplier = √1.625 ≈ 1.2747 ⇒ Rate = 27.47%.",
    shortcut_text_hi: "अनुपात = 26/16 = 1.625। गुणक = √1.625 ≈ 1.2747 ⇒ दर = 27.47%।"
  },
  {
    question_number: 2,
    practice_set: "Practice 3",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "Petrol price rose by 5% from Rs. 82/litre. A man travels 3045 km/month at 15 km/litre mileage. Find the increase in monthly expenditure (nearest ₹).",
    question_text_hi: "पेट्रोल की कीमत ₹82 प्रति लीटर से 5% बढ़ी। एक आदमी हर महीने 3045 किमी यात्रा करता है, माइलेज 15 किमी/लीटर है। मासिक खर्च में वृद्धि (निकटतम ₹ में) ज्ञात कीजिए।",
    options: {
      a: "₹820",
      b: "₹832",
      c: "₹845",
      d: "₹850"
    },
    options_hi: {
      a: "₹820",
      b: "₹832",
      c: "₹845",
      d: "₹850"
    },
    correct_option: "b",
    solution_text: "Monthly requirement = 3045 / 15 = 203 litres.\nInitial cost = 203 × 82 = ₹16,646.\nIncrease in cost = 5% of 16,646 = ₹832.30 ≈ ₹832.",
    solution_text_hi: "मासिक आवश्यकता = 3045 / 15 = 203 लीटर।\nप्रारंभिक लागत = 203 × 82 = ₹16,646।\nलागत में वृद्धि = 16,646 का 5% = ₹832.30 ≈ ₹832।",
    shortcut_text: "Increase = 203 L × (5% of ₹82) = 203 × 4.10 = ₹832.30 ≈ ₹832.",
    shortcut_text_hi: "वृद्धि = 203 × (82 का 5%) = 203 × 4.10 = ₹832.30 ≈ ₹832।"
  },
  {
    question_number: 3,
    practice_set: "Practice 3",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "A landlord bought a flat for ₹8,00,000, wants a 9% annual return after paying ₹2,000/month maintenance. Find the monthly rent.",
    question_text_hi: "एक मकान मालिक ने ₹8,00,000 में फ्लैट खरीदा, ₹2,000/माह रखरखाव के बाद 9% वार्षिक रिटर्न चाहता है। मासिक किराया ज्ञात कीजिए।",
    options: {
      a: "₹7,000",
      b: "₹7,500",
      c: "₹8,000",
      d: "₹8,500"
    },
    options_hi: {
      a: "₹7,000",
      b: "₹7,500",
      c: "₹8,000",
      d: "₹8,500"
    },
    correct_option: "c",
    solution_text: "Required annual return = 9% of 8,00,000 = ₹72,000/year, which equals ₹6,000/month net return.\nSince maintenance is ₹2,000/month, gross Rent = 6,000 + 2,000 = ₹8,000.",
    solution_text_hi: "आवश्यक वार्षिक रिटर्न = 8,00,000 का 9% = ₹72,000/वर्ष, जो ₹6,000/माह के शुद्ध रिटर्न के बराबर है।\nचूंकि रखरखाव ₹2,000/माह है, इसलिए सकल किराया = 6,000 + 2,000 = ₹8,000।",
    shortcut_text: "Net Rent/mo = (8,00,000 × 0.09) / 12 = ₹6,000. Gross Rent = 6,000 + 2,000 = ₹8,000.",
    shortcut_text_hi: "शुद्ध किराया = (8,00,000 × 0.09) / 12 = ₹6,000। कुल किराया = 6,000 + 2,000 = ₹8,000।"
  },
  {
    question_number: 4,
    practice_set: "Practice 3",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 5",
    type_category: "Problems based on Percentage change",
    type_category_hi: "प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 5: Problems based on Percentage change",
    type_label_hi: "Type 5: प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "Project cost ₹5,00,000: 60% materials, 25% labor, 15% contingency. Material cost +12.5%, labor +10%, contingency unchanged. Find new total cost.",
    question_text_hi: "परियोजना लागत ₹5,00,000: 60% सामग्री, 25% श्रम, 15% आकस्मिक। सामग्री +12.5%, श्रम +10%, आकस्मिक अपरिवर्तित। नई कुल लागत ज्ञात कीजिए।",
    options: {
      a: "₹5,45,000",
      b: "₹5,60,000",
      c: "₹5,52,000",
      d: "₹5,50,000"
    },
    options_hi: {
      a: "₹5,45,000",
      b: "₹5,60,000",
      c: "₹5,52,000",
      d: "₹5,50,000"
    },
    correct_option: "d",
    solution_text: "Original costs: Material = ₹3,00,000; Labor = ₹1,25,000; Contingency = ₹75,000.\nNew Material = 3,00,000 × 1.125 = ₹3,37,500.\nNew Labor = 1,25,000 × 1.10 = ₹1,37,500.\nTotal = 3,37,500 + 1,37,500 + 75,000 = ₹5,50,000.",
    solution_text_hi: "मूल लागत: सामग्री = ₹3,00,000; श्रम = ₹1,25,000; आकस्मिक = ₹75,000।\nनई सामग्री = 3,00,000 × 1.125 = ₹3,37,500।\nनया श्रम = 1,25,000 × 1.10 = ₹1,37,500।\nकुल = 3,37,500 + 1,37,500 + 75,000 = ₹5,50,000।",
    shortcut_text: "Increase = (60% × 12.5%) + (25% × 10%) = 7.5% + 2.5% = 10%. New Cost = 5,00,000 × 1.10 = ₹5,50,000.",
    shortcut_text_hi: "कुल वृद्धि = (60% × 12.5%) + (25% × 10%) = 10%। नई लागत = 5,00,000 × 1.10 = ₹5,50,000।"
  },
  {
    question_number: 5,
    practice_set: "Practice 3",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 1",
    type_category: "Problems based on Population",
    type_category_hi: "जनसंख्या पर आधारित प्रश्न",
    type_label: "Type 1: Problems based on Population",
    type_label_hi: "Type 1: जनसंख्या पर आधारित प्रश्न",
    question_text: "Population 2,40,000 grows 12% (birth) and falls 7% (death) yearly. Find population after 3 years.",
    question_text_hi: "जनसंख्या 2,40,000, प्रतिवर्ष जन्म दर 12% वृद्धि व मृत्यु दर 7% कमी। 3 वर्ष बाद जनसंख्या ज्ञात कीजिए।",
    options: {
      a: "2,92,500",
      b: "2,98,000",
      c: "2,77,830",
      d: "3,27,830"
    },
    options_hi: {
      a: "2,92,500",
      b: "2,98,000",
      c: "2,77,830",
      d: "3,27,830"
    },
    correct_option: "c",
    solution_text: "Net annual growth = 12% - 7% = +5%.\nAfter 3 years: 2,40,000 × (1.05)³ = 2,40,000 × 1.157625 = 2,77,830.",
    solution_text_hi: "शुद्ध वार्षिक वृद्धि = 12% - 7% = +5%।\n3 वर्ष बाद: 2,40,000 × (1.05)³ = 2,40,000 × 1.157625 = 2,77,830।",
    shortcut_text: "2,40,000 × (21/20)³ = 30 × 9261 = 2,77,830.",
    shortcut_text_hi: "2,40,000 × (21/20)³ = 30 × 9261 = 2,77,830।"
  },
  {
    question_number: 6,
    practice_set: "Practice 3",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "Fresh grapes contain 80% water while dry grapes contain 10% water. If the weight of dry grapes is 50 kg, what was its total weight when it was fresh?",
    question_text_hi: "ताजे अंगूरों में 80% पानी होता है जबकि सूखे अंगूरों में 10% पानी होता है। यदि सूखे अंगूरों का वजन 50 किग्रा है, तो ताजा होने पर इसका कुल वजन कितना था?",
    options: {
      a: "200 kg",
      b: "225 kg",
      c: "250 kg",
      d: "275 kg"
    },
    options_hi: {
      a: "200 किग्रा",
      b: "225 किग्रा",
      c: "250 किग्रा",
      d: "275 किग्रा"
    },
    correct_option: "b",
    solution_text: "Dry grapes have 10% water, meaning 90% is solid pulp. 90% of 50 kg = 45 kg of pulp.\nFresh grapes have 80% water, meaning 20% is solid pulp.\nTherefore, 20% of Fresh Weight = 45 kg.\nFresh Weight = 45 × 5 = 225 kg.",
    solution_text_hi: "सूखे अंगूरों में 10% पानी होता है, अर्थात 90% ठोस गूदा है। 50 किग्रा का 90% = 45 किग्रा गूदा।\nताजे अंगूरों में 80% पानी होता है, अर्थात 20% ठोस गूदा है।\nइसलिए, ताजे वजन का 20% = 45 किग्रा।\nताजा वजन = 45 × 5 = 225 किग्रा।",
    shortcut_text: "Pulp is constant: Fresh × 20% = 50 × 90% ⇒ Fresh = (50 × 90) / 20 = 225 kg.",
    shortcut_text_hi: "गूदा स्थिर रहता है: Fresh × 20 = 50 × 90 ⇒ Fresh = 225 किग्रा।"
  },
  {
    question_number: 7,
    practice_set: "Practice 3",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 10",
    type_category: "Problems based on voting",
    type_category_hi: "मतदान और चुनाव पर आधारित प्रश्न",
    type_label: "Type 10: Problems based on voting",
    type_label_hi: "Type 10: मतदान और चुनाव पर आधारित प्रश्न",
    question_text: "In an election between 2 candidates, 10% votes were invalid. The winner got 60% of valid votes and won by 1800 votes. Find the total votes.",
    question_text_hi: "2 उम्मीदवारों के बीच एक चुनाव में 10% वोट अमान्य थे। विजेता को वैध वोटों का 60% मिला और वह 1800 वोटों से जीत गया। कुल वोट ज्ञात कीजिए।",
    options: {
      a: "9000",
      b: "10000",
      c: "12000",
      d: "15000"
    },
    options_hi: {
      a: "9000",
      b: "10000",
      c: "12000",
      d: "15000"
    },
    correct_option: "b",
    solution_text: "Winner gets 60% of valid votes; loser gets 40%.\nThe difference is 20% of valid votes.\n20% of Valid = 1800, so Valid Votes = 9000.\nSince 10% were invalid, Valid Votes represent 90% of the total.\nTotal Votes = 9000 / 0.9 = 10000.",
    solution_text_hi: "विजेता को वैध वोटों का 60% मिलता है; हारने वाले को 40%।\nअंतर वैध वोटों का 20% है।\nवैध का 20% = 1800, इसलिए वैध वोट = 9000।\nचूंकि 10% अमान्य थे, इसलिए वैध वोट कुल का 90% दर्शाते हैं।\nकुल वोट = 9000 / 0.9 = 10000।",
    shortcut_text: "Total × 0.90 × 0.20 = 1800 ⇒ Total × 0.18 = 1800 ⇒ Total = 10,000.",
    shortcut_text_hi: "कुल × 0.90 × 0.20 = 1800 ⇒ कुल = 10,000।"
  },
  {
    question_number: 8,
    practice_set: "Practice 3",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "Ram spends 20% of his income on food, 15% on rent, and saves the remaining ₹13,000. What is his total income?",
    question_text_hi: "राम अपनी आय का 20% भोजन पर, 15% किराए पर खर्च करता है और शेष ₹13,000 बचाता है। उसकी कुल आय क्या है?",
    options: {
      a: "₹20000",
      b: "₹22000",
      c: "₹24000",
      d: "₹25000"
    },
    options_hi: {
      a: "₹20000",
      b: "₹22000",
      c: "₹24000",
      d: "₹25000"
    },
    correct_option: "a",
    solution_text: "Total expenditure = 20% + 15% = 35%.\nSavings = 100% - 35% = 65%.\n65% of Total Income = 13,000.\nTotal Income = (13000 / 65) × 100 = ₹20,000.",
    solution_text_hi: "कुल खर्च = 20% + 15% = 35%।\nबचत = 100% - 35% = 65%।\nकुल आय का 65% = 13,000।\nकुल आय = (13000 / 65) × 100 = ₹20,000।",
    shortcut_text: "Savings = 100 - 35 = 65%. 65% = 13,000 ⇒ 1% = 200 ⇒ 100% = ₹20,000.",
    shortcut_text_hi: "बचत = 65% = 13,000 ⇒ 1% = 200 ⇒ 100% = ₹20,000।"
  },
  {
    question_number: 9,
    practice_set: "Practice 3",
    level: "Level 1: More than Moderate",
    level_group: "Level 1: More than Moderate",
    type_code: "Type 5",
    type_category: "Problems based on Percentage change",
    type_category_hi: "प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 5: Problems based on Percentage change",
    type_label_hi: "Type 5: प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "Water tax is increased by 20% but water consumption is decreased by 20%. The percentage change in expenditure is?",
    question_text_hi: "जल कर में 20% की वृद्धि हुई लेकिन पानी की खपत में 20% की कमी आई। व्यय में प्रतिशत परिवर्तन क्या है?",
    options: {
      a: "No change",
      b: "4% decrease",
      c: "4% increase",
      d: "2% decrease"
    },
    options_hi: {
      a: "कोई परिवर्तन नहीं",
      b: "4% कमी",
      c: "4% वृद्धि",
      d: "2% कमी"
    },
    correct_option: "b",
    solution_text: "Let Tax = 100, Consumption = 100. Expenditure = 10,000.\nNew Tax = 120, New Consumption = 80.\nNew Expenditure = 120 × 80 = 9600.\nDecrease = 400.\nPercentage decrease = (400 / 10000) × 100 = 4%.",
    solution_text_hi: "माना कर = 100, खपत = 100। खर्च = 10,000।\nनया कर = 120, नई खपत = 80।\nनया खर्च = 120 × 80 = 9600।\nकमी = 400।\nप्रतिशत कमी = (400 / 10000) × 100 = 4%।",
    shortcut_text: "Successive change = +20 - 20 - (20 × 20)/100 = -4% (4% decrease).",
    shortcut_text_hi: "+20 - 20 - (400/100) = -4% (4% कमी)।"
  },

  // ==========================================
  // LEVEL 2: ADVANCED MODERATION (Q10 - Q18)
  // ==========================================
  {
    question_number: 10,
    practice_set: "Practice 3",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 5",
    type_category: "Problems based on Percentage change",
    type_category_hi: "प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 5: Problems based on Percentage change",
    type_label_hi: "Type 5: प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "The price of a product is decreased by x% and then increased by x%. The final price becomes 10% less than the original. What is the value of x (approximately)?",
    question_text_hi: "किसी वस्तु की कीमत में x% की कमी की जाती है और फिर x% की वृद्धि की जाती है। अंतिम कीमत मूल कीमत से 10% कम हो जाती है। x का मान (लगभग) क्या है?",
    options: {
      a: "31.6",
      b: "33.6",
      c: "30.6",
      d: "39.6"
    },
    options_hi: {
      a: "31.6",
      b: "33.6",
      c: "30.6",
      d: "39.6"
    },
    correct_option: "a",
    solution_text: "Successive change formula: +x% and -x% results in a net decrease of (x²/100)%.\nGiven this is 10%, x²/100 = 10 ⇒ x² = 1000 ⇒ x = √1000 ≈ 31.62.",
    solution_text_hi: "क्रमिक परिवर्तन सूत्र: +x% और -x% के परिणामस्वरूप (x²/100)% की शुद्ध कमी होती है।\nचूंकि यह 10% दिया गया है, x²/100 = 10 ⇒ x² = 1000 ⇒ x = √1000 ≈ 31.62।",
    shortcut_text: "Net loss % = x² / 100 = 10 ⇒ x = √1000 ≈ 31.62.",
    shortcut_text_hi: "x = √1000 ≈ 31.62।"
  },
  {
    question_number: 11,
    practice_set: "Practice 3",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "A's salary is 40% more than B's. B's salary increases by 20%, A's by x%, making A's new salary 25% more than B's new salary. Find x.",
    question_text_hi: "A का वेतन B से 40% अधिक है। B का वेतन 20% और A का वेतन x% बढ़ता है, जिससे A का नया वेतन B के नए वेतन से 25% अधिक हो जाता है। x ज्ञात कीजिए।",
    options: {
      a: "2.5%",
      b: "7.14%",
      c: "10.63%",
      d: "15.6%"
    },
    options_hi: {
      a: "2.5%",
      b: "7.14%",
      c: "10.63%",
      d: "15.6%"
    },
    correct_option: "b",
    solution_text: "Let B = 100. Then A = 140.\nB increases by 20% to 120.\nA's new salary is 25% more than B's new salary = 120 × 1.25 = 150.\nA went from 140 to 150, an increase of 10.\nPercentage increase = (10 / 140) × 100 = 7.14%.",
    solution_text_hi: "माना B = 100। तब A = 140।\nB में 20% की वृद्धि होकर 120 हो जाता है।\nA का नया वेतन B के नए वेतन से 25% अधिक है = 120 × 1.25 = 150।\nA 140 से बढ़कर 150 हो गया, जो कि 10 की वृद्धि है।\nप्रतिशत वृद्धि = (10 / 140) × 100 = 7.14%।",
    shortcut_text: "A_new = 120 × 1.25 = 150. Increase on 140 = 10/140 = 1/14 ≈ 7.14%.",
    shortcut_text_hi: "10 / 140 = 1/14 ≈ 7.14%।"
  },
  {
    question_number: 12,
    practice_set: "Practice 3",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 5",
    type_category: "Problems based on Percentage change",
    type_category_hi: "प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 5: Problems based on Percentage change",
    type_label_hi: "Type 5: प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "After two equal successive increments, a salary became 156.25% of original. Find each increment %.",
    question_text_hi: "दो समान क्रमिक वेतन वृद्धियों के बाद वेतन मूल का 156.25% हो गया। प्रत्येक वृद्धि ज्ञात कीजिए।",
    options: {
      a: "20%",
      b: "22%",
      c: "25%",
      d: "30%"
    },
    options_hi: {
      a: "20%",
      b: "22%",
      c: "25%",
      d: "30%"
    },
    correct_option: "c",
    solution_text: "Let original salary be 100. After two equal increments of x%, it becomes 156.25.\n100(1 + x/100)² = 156.25 ⇒ (1 + x/100)² = 1.5625 ⇒ 1 + x/100 = 1.25.\nTherefore, x = 25%.",
    solution_text_hi: "माना मूल वेतन 100 है। x% की दो समान वृद्धियों के बाद, यह 156.25 हो जाता है।\n100(1 + x/100)² = 156.25 ⇒ (1 + x/100)² = 1.5625 ⇒ 1 + x/100 = 1.25।\nइसलिए, x = 25%।",
    shortcut_text: "Multiplier² = 1.5625 ⇒ Multiplier = √1.5625 = 1.25 ⇒ Increment = 25%.",
    shortcut_text_hi: "गुणक = √1.5625 = 1.25 ⇒ वृद्धि = 25%।"
  },
  {
    question_number: 13,
    practice_set: "Practice 3",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "Income ₹1,60,000 split 35% mutual funds, 25% fixed deposits, 40% recurring deposits, growing 20%, 10%, 15% respectively over 2 years. Find total % return on the portfolio.",
    question_text_hi: "आय ₹1,60,000 को 35% म्यूचुअल फंड, 25% FD, 40% RD में बांटा गया, जो 2 वर्षों में क्रमशः 20%, 10%, 15% बढ़ते हैं। पोर्टफोलियो पर कुल % रिटर्न ज्ञात कीजिए।",
    options: {
      a: "15.5%",
      b: "15.25%",
      c: "14.75%",
      d: "16%"
    },
    options_hi: {
      a: "15.5%",
      b: "15.25%",
      c: "14.75%",
      d: "16%"
    },
    correct_option: "a",
    solution_text: "Total = 100 parts. MF = 35, FD = 25, RD = 40.\nMF grows 20% to 42. FD grows 10% to 27.5. RD grows 15% to 46.\nTotal final value = 42 + 27.5 + 46 = 115.5.\nTotal growth = 15.5%.",
    solution_text_hi: "कुल = 100 भाग। MF = 35, FD = 25, RD = 40।\nMF 20% बढ़कर 42 हो जाता है। FD 10% बढ़कर 27.5 हो जाता है। RD 15% बढ़कर 46 हो जाता है।\nकुल अंतिम मूल्य = 42 + 27.5 + 46 = 115.5।\nकुल वृद्धि = 15.5%।",
    shortcut_text: "Weighted average: (35 × 20 + 25 × 10 + 40 × 15) / 100 = 1550 / 100 = 15.5%.",
    shortcut_text_hi: "भारित औसत = (700 + 250 + 600) / 100 = 15.5%।"
  },
  {
    question_number: 14,
    practice_set: "Practice 3",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "Prism volume 960 cm³, base area 80 cm². By what % should height increase to make volume 1200 cm³?",
    question_text_hi: "प्रिज्म का आयतन 960 सेमी³, आधार क्षेत्रफल 80 सेमी²। आयतन 1200 सेमी³ करने हेतु ऊँचाई में कितने % वृद्धि होनी चाहिए?",
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
    solution_text: "Volume of a prism = Base Area × Height.\n960 = 80 × Height ⇒ Height = 12 cm.\nNew volume = 1200, so new Height = 1200 / 80 = 15 cm.\nPercentage increase in height = (3 / 12) × 100 = 25%.",
    solution_text_hi: "प्रिज्म का आयतन = आधार का क्षेत्रफल × ऊंचाई।\n960 = 80 × ऊंचाई ⇒ ऊंचाई = 12 सेमी।\nनया आयतन = 1200, इसलिए नई ऊंचाई = 1200 / 80 = 15 सेमी।\nऊंचाई में प्रतिशत वृद्धि = (3 / 12) × 100 = 25%।",
    shortcut_text: "Base area is constant, so % change in Volume = % change in Height = (1200 - 960)/960 = 240/960 = 25%.",
    shortcut_text_hi: "आधार क्षेत्रफल स्थिर है, अतः आयतन में % परिवर्तन = ऊंचाई में % परिवर्तन = 240/960 = 25%।"
  },
  {
    question_number: 15,
    practice_set: "Practice 3",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 2",
    type_category: "Problems based on Exam and Students",
    type_category_hi: "परीक्षा और छात्रों पर आधारित प्रश्न",
    type_label: "Type 2: Problems based on Exam and Students",
    type_label_hi: "Type 2: परीक्षा और छात्रों पर आधारित प्रश्न",
    question_text: "In an exam, 60% passed in Math, 70% in Science, and 15% failed in both. If 450 passed in both, what is the total number of students?",
    question_text_hi: "एक परीक्षा में, 60% गणित में, 70% विज्ञान में पास हुए, और 15% दोनों में फेल हुए। यदि 450 दोनों में पास हुए, तो छात्रों की कुल संख्या क्या है?",
    options: {
      a: "900",
      b: "1000",
      c: "1200",
      d: "1500"
    },
    options_hi: {
      a: "900",
      b: "1000",
      c: "1200",
      d: "1500"
    },
    correct_option: "b",
    solution_text: "Passed in at least one subject = 100% - 15% (failed both) = 85%.\nPassed in both = (Passed Math + Passed Science) - Passed at least one = (60 + 70) - 85 = 45%.\n45% of Total = 450.\nTotal = 1000.",
    solution_text_hi: "कम से कम एक विषय में पास = 100% - 15% (दोनों में फेल) = 85%।\nदोनों में पास = (गणित में पास + विज्ञान में पास) - कम से कम एक में पास = (60 + 70) - 85 = 45%।\nकुल का 45% = 450।\nकुल छात्र = 1000।",
    shortcut_text: "Passed both = 60 + 70 - (100 - 15) = 130 - 85 = 45%. 45% = 450 ⇒ Total = 1,000.",
    shortcut_text_hi: "दोनों में पास = 130 - 85 = 45%। 45% = 450 ⇒ कुल = 1000।"
  },
  {
    question_number: 16,
    practice_set: "Practice 3",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 1",
    type_category: "Problems based on Population",
    type_category_hi: "जनसंख्या पर आधारित प्रश्न",
    type_label: "Type 1: Problems based on Population",
    type_label_hi: "Type 1: जनसंख्या पर आधारित प्रश्न",
    question_text: "The population of a city is 8000. If males increase by 10% and females by 8%, the total becomes 8720. Find the number of males.",
    question_text_hi: "एक शहर की जनसंख्या 8000 है। यदि पुरुषों में 10% और महिलाओं में 8% की वृद्धि होती है, तो कुल जनसंख्या 8720 हो जाती है। पुरुषों की संख्या ज्ञात कीजिए।",
    options: {
      a: "3000",
      b: "4000",
      c: "5000",
      d: "6000"
    },
    options_hi: {
      a: "3000",
      b: "4000",
      c: "5000",
      d: "6000"
    },
    correct_option: "b",
    solution_text: "Let Males = M, Females = F. M + F = 8000.\nNew population = 1.10M + 1.08F = 8720.\nMultiply first equation by 1.08: 1.08M + 1.08F = 8640.\nSubtracting from second equation gives 0.02M = 80 ⇒ M = 4000.",
    solution_text_hi: "माना पुरुष = M, महिलाएँ = F। M + F = 8000।\nनई जनसंख्या = 1.10M + 1.08F = 8720।\nपहले समीकरण को 1.08 से गुणा करें: 1.08M + 1.08F = 8640।\nइसे दूसरे समीकरण से घटाने पर 0.02M = 80 प्राप्त होता है ⇒ M = 4000।",
    shortcut_text: "If all 8000 increased by 8%, increase = 640. Actual increase = 720. Extra 80 = 2% of males: 2% of M = 80 ⇒ M = 4,000.",
    shortcut_text_hi: "8000 का 8% = 640। वास्तविक वृद्धि = 720। पुरुषों का 2% = 80 ⇒ M = 4000।"
  },
  {
    question_number: 17,
    practice_set: "Practice 3",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 4",
    type_category: "Problems based on Percentage of Numbers",
    type_category_hi: "संख्याओं के प्रतिशत पर आधारित प्रश्न",
    type_label: "Type 4: Problems based on Percentage of Numbers",
    type_label_hi: "Type 4: संख्याओं के प्रतिशत पर आधारित प्रश्न",
    question_text: "A fraction's numerator is increased by 150% and denominator by 300%. The fraction becomes 5/16. What was the original fraction?",
    question_text_hi: "एक भिन्न का अंश 150% और हर 300% बढ़ा दिया जाता है। भिन्न 5/16 हो जाती है। मूल भिन्न क्या थी?",
    options: {
      a: "1/2",
      b: "1/4",
      c: "3/8",
      d: "5/8"
    },
    options_hi: {
      a: "1/2",
      b: "1/4",
      c: "3/8",
      d: "5/8"
    },
    correct_option: "a",
    solution_text: "Let fraction be x/y.\nNumerator increases by 150% (becomes 250% or 2.5).\nDenominator increases by 300% (becomes 400% or 4.0).\n(x × 2.5) / (y × 4.0) = 5/16.\n(x/y) × (5/8) = 5/16 ⇒ x/y = 1/2.",
    solution_text_hi: "माना भिन्न x/y है।\nअंश 150% बढ़ता है (250% या 2.5 हो जाता है)।\nहर 300% बढ़ता है (400% या 4.0 हो जाता है)।\n(x × 2.5) / (y × 4.0) = 5/16।\n(x/y) × (5/8) = 5/16 ⇒ x/y = 1/2।",
    shortcut_text: "(x × 250) / (y × 400) = 5/16 ⇒ (x/y) × (5/8) = 5/16 ⇒ x/y = (5/16) × (8/5) = 1/2.",
    shortcut_text_hi: "(x/y) = (5/16) × (8/5) = 1/2।"
  },
  {
    question_number: 18,
    practice_set: "Practice 3",
    level: "Level 2: Advanced Moderation",
    level_group: "Level 2: Advanced Moderation",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "The area of a rectangle increases by 80% when its length increases by 20%. What is the percentage increase in its breadth?",
    question_text_hi: "जब लंबाई 20% बढ़ जाती है तो आयत का क्षेत्रफल 80% बढ़ जाता है। चौड़ाई में प्रतिशत वृद्धि क्या है?",
    options: {
      a: "40%",
      b: "50%",
      c: "60%",
      d: "75%"
    },
    options_hi: {
      a: "40%",
      b: "50%",
      c: "60%",
      d: "75%"
    },
    correct_option: "b",
    solution_text: "Area = Length × Breadth.\n1.8A = 1.2L × New Breadth.\nNew Breadth = 1.8A / 1.2L = 1.5 (A/L) = 1.5B.\nThis is a 50% increase.",
    solution_text_hi: "क्षेत्रफल = लंबाई × चौड़ाई।\n1.8A = 1.2L × नई चौड़ाई।\nनई चौड़ाई = 1.8A / 1.2L = 1.5 (A/L) = 1.5B।\nयह 50% की वृद्धि है।",
    shortcut_text: "Multiplier_B = Multiplier_Area / Multiplier_L = 1.8 / 1.2 = 1.5 ⇒ 50% increase.",
    shortcut_text_hi: "चौड़ाई गुणक = 1.8 / 1.2 = 1.5 ⇒ 50% वृद्धि।"
  },

  // ==========================================
  // LEVEL 3: SLIGHTLY DIFFICULT (UPGRADED PYQS) (Q19 - Q26)
  // ==========================================
  {
    question_number: 19,
    practice_set: "Practice 3",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 8",
    type_category: "Problems based on finding percentage",
    type_category_hi: "प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 8: Problems based on finding percentage",
    type_label_hi: "Type 8: प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    question_text: "Four machines produce equal quantities. Defect rates: Machine 1 = 1.8%, Machine 2 = 2.4%, Machine 3 = 1.6%. Machine 4's defective output is 0.92 units. If the total defective units from all four machines is 4.12, find the defect percentage of Machine 4.",
    question_text_hi: "चार मशीनें समान मात्रा में उत्पादन करती हैं। दोष दर: मशीन 1 = 1.8%, मशीन 2 = 2.4%, मशीन 3 = 1.6%। मशीन 4 का दोषपूर्ण उत्पादन 0.92 यूनिट है। यदि चारों मशीनों की कुल दोषपूर्ण यूनिट 4.12 है, तो मशीन 4 का दोष प्रतिशत ज्ञात कीजिए।",
    options: {
      a: "1.52%",
      b: "1.58%",
      c: "1.667%",
      d: "1.73%"
    },
    options_hi: {
      a: "1.52%",
      b: "1.58%",
      c: "1.667%",
      d: "1.73%"
    },
    correct_option: "c",
    solution_text: "Let quantity per machine = x.\nTotal defects = 1.8% of x + 2.4% of x + 1.6% of x + 0.92 units = 4.12.\nSo, 5.8% of x = 3.2 ⇒ x = 3.2 / 0.058 ≈ 55.17 units per machine.\nDefect % of Machine 4 = (0.92 / 55.17) × 100 = 1.667%.",
    solution_text_hi: "माना प्रति मशीन मात्रा = x है।\nकुल दोष = x का 1.8% + x का 2.4% + x का 1.6% + 0.92 यूनिट = 4.12।\nअतः, x का 5.8% = 3.2 ⇒ x = 3.2 / 0.058 ≈ 55.17 यूनिट प्रति मशीन।\nमशीन 4 का दोष % = (0.92 / 55.17) × 100 = 1.667%।",
    shortcut_text: "Defects from M1, M2, M3 = 4.12 - 0.92 = 3.2 units = 5.8% of x ⇒ x = 55.17. Defect % M4 = (0.92 / 55.17) × 100 = 1.667%.",
    shortcut_text_hi: "5.8% = 3.2 ⇒ x = 55.17। M4 दोष % = (0.92 / 55.17) × 100 = 1.667%।"
  },
  {
    question_number: 20,
    practice_set: "Practice 3",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 4",
    type_category: "Problems based on Percentage of Numbers",
    type_category_hi: "संख्याओं के प्रतिशत पर आधारित प्रश्न",
    type_label: "Type 4: Problems based on Percentage of Numbers",
    type_label_hi: "Type 4: संख्याओं के प्रतिशत पर आधारित प्रश्न",
    question_text: "A is 20% more than B; B is 30% more than C; C is 10% less than D; D is 30% less than E. By what percentage is A more/less than E?",
    question_text_hi: "A, B से 20% अधिक है; B, C से 30% अधिक है; C, D से 10% कम है; D, E से 30% कम है। A, E से कितने प्रतिशत अधिक/कम है?",
    options: {
      a: "1.72% less",
      b: "1.72% more",
      c: "1.86% less",
      d: "1.86% more"
    },
    options_hi: {
      a: "1.72% कम",
      b: "1.72% अधिक",
      c: "1.86% कम",
      d: "1.86% अधिक"
    },
    correct_option: "a",
    solution_text: "Let E = 100. D = 70. C = 0.9 × 70 = 63. B = 1.3 × 63 = 81.9. A = 1.2 × 81.9 = 98.28.\nA is less than E by (100 - 98.28) = 1.72%.",
    solution_text_hi: "माना E = 100। D = 70। C = 0.9 × 70 = 63। B = 1.3 × 63 = 81.9। A = 1.2 × 81.9 = 98.28।\nA, E से (100 - 98.28) = 1.72% कम है।",
    shortcut_text: "A/E = 1.2 × 1.3 × 0.9 × 0.7 = 0.9828 ⇒ 1 - 0.9828 = 0.0172 = 1.72% less.",
    shortcut_text_hi: "A/E = 1.2 × 1.3 × 0.9 × 0.7 = 0.9828 ⇒ 1.72% कम।"
  },
  {
    question_number: 21,
    practice_set: "Practice 3",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "60 L mixture, acid:water = 7:3. 20% of mixture removed and replaced with water — twice. Find final acid %.",
    question_text_hi: "60 लीटर मिश्रण में अम्ल:पानी = 7:3। मिश्रण का 20% निकालकर पानी से बदला जाता है — दो बार। अंतिम अम्ल % ज्ञात कीजिए।",
    options: {
      a: "44.8%",
      b: "51.2%",
      c: "53.7%",
      d: "56.8%"
    },
    options_hi: {
      a: "44.8%",
      b: "51.2%",
      c: "53.7%",
      d: "56.8%"
    },
    correct_option: "a",
    solution_text: "Initial acid fraction = 7/10.\nWith replacement processes, Final Acid = Initial Acid × (1 - replaced volume / total volume)ⁿ.\nFinal = 0.7 × (1 - 0.2)² = 0.7 × 0.64 = 0.448 = 44.8%.",
    solution_text_hi: "प्रारंभिक अम्ल भिन्न = 7/10। प्रतिस्थापन प्रक्रिया के साथ, अंतिम अम्ल = प्रारंभिक अम्ल × (1 - प्रतिस्थापित आयतन / कुल आयतन)ⁿ।\nअंतिम = 0.7 × (1 - 0.2)² = 0.7 × 0.64 = 0.448 = 44.8%।",
    shortcut_text: "Acid % = 70% × 0.8 × 0.8 = 70% × 0.64 = 44.8%.",
    shortcut_text_hi: "अम्ल % = 70% × 0.8² = 44.8%।"
  },
  {
    question_number: 22,
    practice_set: "Practice 3",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "Mixture 1 has 18% methanol, Mixture 2 has b% methanol, mixed 4:5, final mixture is 16% methanol. Find b.",
    question_text_hi: "मिश्रण 1 में 18% मेथनॉल, मिश्रण 2 में b% मेथनॉल, 4:5 में मिलाया गया, अंतिम मिश्रण 16% मेथनॉल। b ज्ञात कीजिए।",
    options: {
      a: "12.26%",
      b: "14.4%",
      c: "17.2%",
      d: "16.32%"
    },
    options_hi: {
      a: "12.26%",
      b: "14.4%",
      c: "17.2%",
      d: "16.32%"
    },
    correct_option: "b",
    solution_text: "Weighted average formula: (18 × 4 + b × 5) / (4 + 5) = 16.\n(72 + 5b) / 9 = 16 ⇒ 72 + 5b = 144 ⇒ 5b = 72 ⇒ b = 14.4%.",
    solution_text_hi: "भारित औसत सूत्र: (18 × 4 + b × 5) / (4 + 5) = 16।\n(72 + 5b) / 9 = 16 ⇒ 72 + 5b = 144 ⇒ 5b = 72 ⇒ b = 14.4%।",
    shortcut_text: "Alligation: (18 - 16) / (16 - b) = 5 / 4 ⇒ 2 / (16 - b) = 5/4 ⇒ 5b = 72 ⇒ b = 14.4%.",
    shortcut_text_hi: "एलिगेशन: 2 / (16 - b) = 5/4 ⇒ 5b = 72 ⇒ b = 14.4%।"
  },
  {
    question_number: 23,
    practice_set: "Practice 3",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "A cylinder is inscribed inside a cube of side 10 cm. Find % of cube's volume occupied by the cylinder.",
    question_text_hi: "10 सेमी भुजा वाले घन के अंदर एक बेलन अंकित है। घन के आयतन का कितना % बेलन द्वारा घेरा गया है?",
    options: {
      a: "78.5%",
      b: "60.5%",
      c: "50%",
      d: "90.5%"
    },
    options_hi: {
      a: "78.5%",
      b: "60.5%",
      c: "50%",
      d: "90.5%"
    },
    correct_option: "a",
    solution_text: "The inscribed cylinder has height = 10 cm and radius = 5 cm.\nCylinder volume = π × 5² × 10 = 250π ≈ 785.4 cm³.\nCube volume = 10³ = 1000 cm³.\nPercentage = 78.54%.",
    solution_text_hi: "अंकित बेलन की ऊंचाई = 10 सेमी और त्रिज्या = 5 सेमी है।\nबेलन का आयतन = π × 5² × 10 = 250π ≈ 785.4 सेमी³।\nघन का आयतन = 10³ = 1000 सेमी³।\nप्रतिशत = 78.54%।",
    shortcut_text: "Ratio = (π r² h) / (2r)³ = (π r² (2r)) / 8r³ = π / 4 = 3.1416 / 4 ≈ 78.54%.",
    shortcut_text_hi: "अनुपात = π / 4 ≈ 78.5%।"
  },
  {
    question_number: 24,
    practice_set: "Practice 3",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "The price of sugar increases by 25%. A family reduces consumption so expenditure increases by only 10%. Original consumption was 40 kg. Find the new consumption.",
    question_text_hi: "चीनी की कीमत 25% बढ़ जाती है। एक परिवार खपत कम कर देता है ताकि खर्च केवल 10% बढ़े। मूल खपत 40 किग्रा थी। नई खपत ज्ञात कीजिए।",
    options: {
      a: "32 kg",
      b: "34 kg",
      c: "35.2 kg",
      d: "36 kg"
    },
    options_hi: {
      a: "32 किग्रा",
      b: "34 किग्रा",
      c: "35.2 किग्रा",
      d: "36 किग्रा"
    },
    correct_option: "c",
    solution_text: "Expenditure = Price × Consumption.\n1.10 = 1.25 × (New Consumption / 40).\nNew Consumption = (1.10 × 40) / 1.25 = 44 / 1.25 = 35.2 kg.",
    solution_text_hi: "खर्च = कीमत × खपत।\n1.10 = 1.25 × (नई खपत / 40)।\nनई खपत = (1.10 × 40) / 1.25 = 44 / 1.25 = 35.2 किग्रा।",
    shortcut_text: "New C = 40 × (110 / 125) = 40 × (22 / 25) = 35.2 kg.",
    shortcut_text_hi: "नई खपत = 40 × (110/125) = 35.2 किग्रा।"
  },
  {
    question_number: 25,
    practice_set: "Practice 3",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "A shopkeeper marks goods 40% above CP and gives 15% discount. If he uses a 900g weight instead of 1kg, his profit percentage is?",
    question_text_hi: "एक दुकानदार वस्तुओं पर क्रय मूल्य से 40% अधिक अंकित करता है और 15% की छूट देता है। यदि वह 1 किग्रा के स्थान पर 900 ग्राम वजन का उपयोग करता है, तो उसका लाभ प्रतिशत क्या है?",
    options: {
      a: "32.22%",
      b: "35%",
      c: "38.88%",
      d: "42%"
    },
    options_hi: {
      a: "32.22%",
      b: "35%",
      c: "38.88%",
      d: "42%"
    },
    correct_option: "a",
    solution_text: "Let CP of 1 kg = 100. Marked Price = 140.\nSelling Price after 15% discount = 140 × 0.85 = 119.\nHe gives 900g instead of 1000g, so his actual CP is 90.\nProfit = 119 - 90 = 29.\nProfit % = (29 / 90) × 100 = 32.22%.",
    solution_text_hi: "माना 1 किग्रा का CP = 100 है। अंकित मूल्य = 140।\n15% छूट के बाद विक्रय मूल्य = 140 × 0.85 = 119।\nवह 1000 ग्राम के बजाय 900 ग्राम देता है, इसलिए उसका वास्तविक CP 90 है।\nलाभ = 119 - 90 = 29।\nलाभ % = (29 / 90) × 100 = 32.22%।",
    shortcut_text: "Net multiplier = (1.40 × 0.85) × (1000 / 900) = 1.19 × (10/9) = 11.9 / 9 = 1.3222 ⇒ 32.22%.",
    shortcut_text_hi: "शुद्ध गुणक = 1.19 × (10/9) = 1.3222 ⇒ 32.22%।"
  },
  {
    question_number: 26,
    practice_set: "Practice 3",
    level: "Level 3: Slightly Difficult",
    level_group: "Level 3: Slightly Difficult (Upgraded PYQs)",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "A 60L mixture of milk and water has 10% water. How much water must be added to make it 20% water?",
    question_text_hi: "60 लीटर दूध और पानी के मिश्रण में 10% पानी है। इसे 20% पानी बनाने के लिए कितना पानी मिलाना चाहिए?",
    options: {
      a: "6 L",
      b: "7.5 L",
      c: "8 L",
      d: "10 L"
    },
    options_hi: {
      a: "6 लीटर",
      b: "7.5 लीटर",
      c: "8 लीटर",
      d: "10 लीटर"
    },
    correct_option: "b",
    solution_text: "Total 60L has 90% milk = 54L. Milk quantity remains constant.\nIn new mixture, milk is 80%. Let total volume be V.\n0.8V = 54 ⇒ V = 67.5L.\nAdded water = 67.5 - 60 = 7.5L.",
    solution_text_hi: "कुल 60L में 90% दूध = 54L है। दूध की मात्रा स्थिर रहती है।\nनए मिश्रण में, दूध 80% है। माना कुल आयतन V है।\n0.8V = 54 ⇒ V = 67.5L।\nमिलाया गया पानी = 67.5 - 60 = 7.5L।",
    shortcut_text: "Milk constant: 60 × 90% = New_Total × 80% ⇒ New_Total = 54 / 0.8 = 67.5 L ⇒ Added = 7.5 L.",
    shortcut_text_hi: "60 × 90% = कुल × 80% ⇒ कुल = 67.5L ⇒ मिलाया गया पानी = 7.5L।"
  },

  // ==========================================
  // LEVEL 4: DIFFICULT (FUTURE-TESTING PYQS) (Q27 - Q34)
  // ==========================================
  {
    question_number: 27,
    practice_set: "Practice 3",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "Circular clock, radius 20 cm. A chord with two radii forms an equilateral triangle at the center. Find the smaller segment as % of total area.",
    question_text_hi: "वृत्ताकार घड़ी, त्रिज्या 20 सेमी। एक जीवा दो त्रिज्याओं के साथ केंद्र पर समबाहु त्रिभुज बनाती है। छोटे खंड को कुल क्षेत्रफल के % में ज्ञात कीजिए।",
    options: {
      a: "2.88%",
      b: "5.6%",
      c: "9.08%",
      d: "12.5%"
    },
    options_hi: {
      a: "2.88%",
      b: "5.6%",
      c: "9.08%",
      d: "12.5%"
    },
    correct_option: "a",
    solution_text: "Area of circle = π × 20² ≈ 1256.6.\nThe equilateral triangle uses a 60° sector.\nSector Area = 1256.6 / 6 ≈ 209.44.\nTriangle Area = (√3/4) × 20² = 100√3 ≈ 173.2.\nSegment Area = 209.44 - 173.2 = 36.24.\nPercentage = (36.24 / 1256.6) × 100 = 2.88%.",
    solution_text_hi: "वृत्त का क्षेत्रफल = π × 20² ≈ 1256.6।\nसमबाहु त्रिभुज 60° के त्रिज्यखंड का उपयोग करता है।\nत्रिज्यखंड का क्षेत्रफल = 1256.6 / 6 ≈ 209.44।\nत्रिभुज का क्षेत्रफल = (√3/4) × 20² = 100√3 ≈ 173.2।\nवृत्तखंड का क्षेत्रफल = 209.44 - 173.2 = 36.24।\nप्रतिशत = (36.24 / 1256.6) × 100 = 2.88%।",
    shortcut_text: "% Area = (Sector% - Triangle%) = (100/6)% - [ (100√3) / (400π) ] × 100% = 16.67% - 13.78% = 2.88%.",
    shortcut_text_hi: "% = 16.67% - 13.78% = 2.88%।"
  },
  {
    question_number: 28,
    practice_set: "Practice 3",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "A solid sphere is placed inside a cube touching all six faces. What % of the cube's volume is NOT occupied by the sphere?",
    question_text_hi: "एक ठोस गोला घन के भीतर छहों सतहों को स्पर्श करते हुए रखा है। घन के आयतन का कितना % गोले द्वारा नहीं घेरा गया है?",
    options: {
      a: "47.64%",
      b: "48.56%",
      c: "49.28%",
      d: "42.54%"
    },
    options_hi: {
      a: "47.64%",
      b: "48.56%",
      c: "49.28%",
      d: "42.54%"
    },
    correct_option: "a",
    solution_text: "Let sphere radius = R. Cube side = 2R.\nCube Volume = 8R³.\nSphere Volume = 4/3 π R³.\nUnoccupied Volume = 8R³ - 4/3 π R³ ≈ 8R³ - 4.1888R³ = 3.811R³.\nPercentage = (3.811 / 8) × 100 = 47.64%.",
    solution_text_hi: "माना गोले की त्रिज्या = R है। घन की भुजा = 2R।\nघन का आयतन = 8R³।\nगोले का आयतन = 4/3 π R³।\nन घेरा गया आयतन = 8R³ - 4/3 π R³ ≈ 8R³ - 4.1888R³ = 3.811R³।\nप्रतिशत = (3.811 / 8) × 100 = 47.64%।",
    shortcut_text: "Unoccupied % = 1 - (π / 6) = 1 - 0.5236 = 0.4764 = 47.64%.",
    shortcut_text_hi: "रिक्त % = 1 - (π/6) = 1 - 0.5236 = 47.64%।"
  },
  {
    question_number: 29,
    practice_set: "Practice 3",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "Alloy A has x:y = 3:2, Alloy B has x:y = 5:6. Mixed A:B = 4:3. Find % of x in the resulting Alloy C.",
    question_text_hi: "मिश्र धातु A में x:y = 3:2, मिश्र धातु B में x:y = 5:6। A:B = 4:3 में मिलाया गया। परिणामी मिश्र धातु C में x का % ज्ञात कीजिए।",
    options: {
      a: "51%",
      b: "55%",
      c: "52%",
      d: "53.77%"
    },
    options_hi: {
      a: "51%",
      b: "55%",
      c: "52%",
      d: "53.77%"
    },
    correct_option: "d",
    solution_text: "In Alloy A, x is 3/5 = 60%. In Alloy B, x is 5/11 = 45.45%.\nMixing 4 parts A and 3 parts B: [(4 × 0.60) + (3 × 5/11)] / 7 = [2.4 + 1.3636] / 7 = 3.7636 / 7 = 0.53766 = 53.77%.",
    solution_text_hi: "मिश्र धातु A में, x है 3/5 = 60%। मिश्र धातु B में, x है 5/11 = 45.45%।\nA के 4 भाग और B के 3 भाग मिलाने पर: [(4 × 0.60) + (3 × 5/11)] / 7 = [2.4 + 1.3636] / 7 = 3.7636 / 7 = 0.53766 = 53.77%।",
    shortcut_text: "x % = (4 × 60% + 3 × 45.45%) / 7 = (240 + 136.36) / 7 = 376.36 / 7 = 53.77%.",
    shortcut_text_hi: "(240 + 136.36) / 7 = 53.77%।"
  },
  {
    question_number: 30,
    practice_set: "Practice 3",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "Height of a square-base pyramid +20%, base side −10%. Find % change in volume.",
    question_text_hi: "वर्गाकार आधार वाले पिरामिड की ऊंचाई +20%, आधार भुजा −10%। आयतन में % परिवर्तन ज्ञात कीजिए।",
    options: {
      a: "2.8% decrease",
      b: "1.2% increase",
      c: "2.8% increase",
      d: "No change"
    },
    options_hi: {
      a: "2.8% कमी",
      b: "1.2% वृद्धि",
      c: "2.8% वृद्धि",
      d: "कोई परिवर्तन नहीं"
    },
    correct_option: "a",
    solution_text: "Volume of pyramid = (1/3) × base² × height.\nNew Volume = (1/3) × (0.9base)² × (1.2height) = 0.81 × 1.2 × Original Volume = 0.972 × Original Volume.\nDecrease = 1 - 0.972 = 0.028 = 2.8%.",
    solution_text_hi: "पिरामिड का आयतन = (1/3) × आधार² × ऊंचाई।\nनया आयतन = (1/3) × (0.9आधार)² × (1.2ऊंचाई) = 0.81 × 1.2 × मूल आयतन = 0.972 × मूल आयतन।\nकमी = 1 - 0.972 = 0.028 = 2.8%।",
    shortcut_text: "Net multiplier = 0.9 × 0.9 × 1.2 = 0.81 × 1.2 = 0.972 ⇒ 1 - 0.972 = 2.8% decrease.",
    shortcut_text_hi: "कुल गुणक = 0.9² × 1.2 = 0.972 ⇒ 2.8% कमी।"
  },
  {
    question_number: 31,
    practice_set: "Practice 3",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "A man distributes 10% of his wealth to charity, 30% of the remaining to his son, and 25% of the rest to his daughter. The remaining ₹47,250 goes to his wife. Total wealth?",
    question_text_hi: "एक आदमी अपनी संपत्ति का 10% दान में देता है, शेष का 30% अपने बेटे को और बाकी का 25% अपनी बेटी को देता है। शेष ₹47,250 उसकी पत्नी को जाते हैं। कुल संपत्ति क्या है?",
    options: {
      a: "₹80,000",
      b: "₹90,000",
      c: "₹1,00,000",
      d: "₹1,20,000"
    },
    options_hi: {
      a: "₹80,000",
      b: "₹90,000",
      c: "₹1,00,000",
      d: "₹1,20,000"
    },
    correct_option: "c",
    solution_text: "Let total wealth = 100x. Charity = 10x. Remaining = 90x.\nSon = 30% of 90x = 27x. Remaining = 63x.\nDaughter = 25% of 63x = 15.75x. Remaining for wife = 47.25x.\n47.25x = 47250 ⇒ x = 1000.\nTotal wealth = 1,00,000.",
    solution_text_hi: "माना कुल संपत्ति = 100x है। दान = 10x। शेष = 90x।\nबेटा = 90x का 30% = 27x। शेष = 63x।\nबेटी = 63x का 25% = 15.75x। पत्नी के लिए शेष = 47.25x।\n47.25x = 47250 ⇒ x = 1000।\nकुल संपत्ति = 1,00,000।",
    shortcut_text: "Wife = Total × 0.90 × 0.70 × 0.75 = Total × 0.4725 = 47,250 ⇒ Total = ₹1,00,000.",
    shortcut_text_hi: "कुल × 0.9 × 0.7 × 0.75 = 47,250 ⇒ कुल = ₹1,00,000।"
  },
  {
    question_number: 32,
    practice_set: "Practice 3",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 8",
    type_category: "Problems based on finding percentage",
    type_category_hi: "प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 8: Problems based on finding percentage",
    type_label_hi: "Type 8: प्रतिशत ज्ञात करने पर आधारित प्रश्न",
    question_text: "In a company, 40% of the employees are female. 70% of females and 50% of males are married. What percentage of the unmarried employees are female?",
    question_text_hi: "एक कंपनी में 40% कर्मचारी महिलाएँ हैं। 70% महिलाएँ और 50% पुरुष विवाहित हैं। अविवाहित कर्मचारियों का कितना प्रतिशत महिलाएँ हैं?",
    options: {
      a: "25%",
      b: "28.57%",
      c: "30%",
      d: "33.33%"
    },
    options_hi: {
      a: "25%",
      b: "28.57%",
      c: "30%",
      d: "33.33%"
    },
    correct_option: "b",
    solution_text: "Let total employees = 100. Female = 40, Male = 60.\nMarried females = 70% of 40 = 28. Unmarried females = 12.\nMarried males = 50% of 60 = 30. Unmarried males = 30.\nTotal unmarried = 42.\nPercentage of unmarried who are female = (12 / 42) × 100 = 28.57%.",
    solution_text_hi: "माना कुल कर्मचारी = 100। महिलाएँ = 40, पुरुष = 60।\nविवाहित महिलाएँ = 40 का 70% = 28। अविवाहित महिलाएँ = 12।\nविवाहित पुरुष = 60 का 50% = 30। अविवाहित पुरुष = 30।\nकुल अविवाहित = 42।\nअविवाहितों में महिलाओं का प्रतिशत = (12 / 42) × 100 = 28.57%।",
    shortcut_text: "Unmarried F = 40 × 30% = 12. Unmarried M = 60 × 50% = 30. Total unmarried = 42. F% = 12/42 = 2/7 ≈ 28.57%.",
    shortcut_text_hi: "अविवाहित F = 12, M = 30, कुल = 42 ⇒ 12/42 = 2/7 ≈ 28.57%।"
  },
  {
    question_number: 33,
    practice_set: "Practice 3",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 7",
    type_category: "Problems related to finding percentage quantity",
    type_category_hi: "प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    type_label: "Type 7: Problems related to finding percentage quantity",
    type_label_hi: "Type 7: प्रतिशत मात्रा ज्ञात करने पर आधारित प्रश्न",
    question_text: "An alloy of Cu, Zn, and Ni has the ratio 5:3:2. The quantity of Ni that must be added to 100 kg of the alloy to make the ratio 5:3:3 is?",
    question_text_hi: "Cu, Zn और Ni के एक मिश्र धातु का अनुपात 5:3:2 है। अनुपात 5:3:3 बनाने के लिए 100 किग्रा मिश्र धातु में Ni की कितनी मात्रा मिलानी होगी?",
    options: {
      a: "8 kg",
      b: "10 kg",
      c: "12 kg",
      d: "15 kg"
    },
    options_hi: {
      a: "8 किग्रा",
      b: "10 किग्रा",
      c: "12 किग्रा",
      d: "15 किग्रा"
    },
    correct_option: "b",
    solution_text: "Initial mix 5:3:2 sums to 10 parts. 10 parts = 100kg ⇒ 1 part = 10kg.\nCu = 50kg, Zn = 30kg, Ni = 20kg.\nWe want the ratio 5:3:3, meaning Ni needs to jump from 2 parts to 3 parts (which matches Cu and Zn scaling).\n1 part = 10 kg, so add 10 kg of Ni.",
    solution_text_hi: "प्रारंभिक मिश्रण 5:3:2 का योग 10 भाग है। 10 भाग = 100 किग्रा ⇒ 1 भाग = 10 किग्रा।\nCu = 50 किग्रा, Zn = 30 किग्रा, Ni = 20 किग्रा।\nहमें 5:3:3 का अनुपात चाहिए, जिसका अर्थ है कि Ni को 2 भाग से बढ़कर 3 भाग होना चाहिए।\n1 भाग = 10 किग्रा, इसलिए 10 किग्रा Ni मिलाना होगा।",
    shortcut_text: "Cu & Zn parts are constant (5:3). Ni increases by 1 unit (3 - 2 = 1). Since 10 units = 100 kg, 1 unit = 10 kg.",
    shortcut_text_hi: "Ni में वृद्धि = 3 - 2 = 1 इकाई। 10 इकाई = 100 किग्रा ⇒ 1 इकाई = 10 किग्रा।"
  },
  {
    question_number: 34,
    practice_set: "Practice 3",
    level: "Level 4: Difficult",
    level_group: "Level 4: Difficult (Future-Testing PYQs)",
    type_code: "Type 2",
    type_category: "Problems based on Exam and Students",
    type_category_hi: "परीक्षा और छात्रों पर आधारित प्रश्न",
    type_label: "Type 2: Problems based on Exam and Students",
    type_label_hi: "Type 2: परीक्षा और छात्रों पर आधारित प्रश्न",
    question_text: "A candidate answers 50% of the questions correctly from the first 40 questions of a test. What percentage of the remaining 80 questions must he answer correctly to get 60% overall?",
    question_text_hi: "एक उम्मीदवार एक परीक्षा के पहले 40 प्रश्नों में से 50% का सही उत्तर देता है। कुल 60% प्राप्त करने के लिए उसे शेष 80 प्रश्नों में से कितने प्रतिशत का सही उत्तर देना होगा?",
    options: {
      a: "60%",
      b: "65%",
      c: "70%",
      d: "75%"
    },
    options_hi: {
      a: "60%",
      b: "65%",
      c: "70%",
      d: "75%"
    },
    correct_option: "b",
    solution_text: "Total questions = 120. Required overall correct = 60% of 120 = 72.\nCorrect from first 40 = 50% of 40 = 20.\nRemaining needed = 72 - 20 = 52.\nHe has 80 questions left.\nRequired percentage = (52 / 80) × 100 = 65%.",
    solution_text_hi: "कुल प्रश्न = 120। कुल सही चाहिए = 120 का 60% = 72।\nपहले 40 में से सही = 40 का 50% = 20।\nऔर सही चाहिए = 72 - 20 = 52।\nउसके पास 80 प्रश्न बचे हैं।\nआवश्यक प्रतिशत = (52 / 80) × 100 = 65%।",
    shortcut_text: "Needed = 72 total - 20 achieved = 52 out of 80 = 52/80 = 13/20 = 65%.",
    shortcut_text_hi: "आवश्यक = 72 - 20 = 52। 52/80 = 65%।"
  },

  // ==========================================
  // LEVEL 5: HIGHLY DIFFICULT (DEEP ANALYTICAL PYQS) (Q35 - Q42)
  // ==========================================
  {
    question_number: 35,
    practice_set: "Practice 3",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "A sphere full of water has a cube fully submerged such that the cube's space diagonal equals the sphere's radius. Find the % of sphere's volume occupied by the cube.",
    question_text_hi: "पानी से भरे गोले में एक घन इस प्रकार डूबा है कि घन का विकर्ण गोले की त्रिज्या के बराबर है। घन द्वारा घेरे गए गोले के आयतन का % ज्ञात कीजिए।",
    options: {
      a: "1.8%",
      b: "2.7%",
      c: "4.6%",
      d: "3.8%"
    },
    options_hi: {
      a: "1.8%",
      b: "2.7%",
      c: "4.6%",
      d: "3.8%"
    },
    correct_option: "c",
    solution_text: "Let cube side be a. Space diagonal = a√3 = Sphere radius (R).\na = R/√3.\nCube volume = a³ = R³ / (3√3).\nSphere Volume = 4/3 π R³.\nPercentage = [(R³ / 3√3) / (4/3 π R³)] × 100 = 1 / (4π√3) × 100 = 1 / 21.765 × 100 = 4.59% ≈ 4.6%.",
    solution_text_hi: "माना घन की भुजा a है। घन का विकर्ण = a√3 = गोले की त्रिज्या (R)।\na = R/√3।\nघन का आयतन = a³ = R³ / (3√3)।\nगोले का आयतन = 4/3 π R³।\nप्रतिशत = [(R³ / 3√3) / (4/3 π R³)] × 100 = 1 / (4π√3) × 100 = 1 / 21.765 × 100 = 4.59% ≈ 4.6%।",
    shortcut_text: "Ratio = 1 / (4√3 π) = 1 / (4 × 1.732 × 3.1416) = 1 / 21.765 ≈ 4.59% ≈ 4.6%.",
    shortcut_text_hi: "अनुपात = 1 / (4√3 π) ≈ 4.6%।"
  },
  {
    question_number: 36,
    practice_set: "Practice 3",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "SP of an item increased 25%, and profit % rose from 20% to 30%. Find % increase in cost price.",
    question_text_hi: "किसी वस्तु का विक्रय मूल्य 25% बढ़ा और लाभ % 20% से 30% हो गया। क्रय मूल्य में % वृद्धि ज्ञात कीजिए।",
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
    solution_text: "Let SP1 = 120, CP1 = 100.\nSP2 = 1.25 × 120 = 150.\nProfit % is 30%, so SP2 = 1.3 × CP2.\n1.3 × CP2 = 150 ⇒ CP2 = 150 / 1.3 = 115.38.\nIncrease from 100 is 15.38%.",
    solution_text_hi: "माना SP1 = 120, CP1 = 100।\nSP2 = 1.25 × 120 = 150।\nलाभ % 30% है, इसलिए SP2 = 1.3 × CP2।\n1.3 × CP2 = 150 ⇒ CP2 = 150 / 1.3 = 115.38।\n100 से वृद्धि 15.38% है।",
    shortcut_text: "CP2 / CP1 = (SP2 / 1.3) / (SP1 / 1.2) = (1.25 / 1.3) × 1.2 = 1.5 / 1.3 = 1.1538 ⇒ +15.38%.",
    shortcut_text_hi: "CP2/CP1 = 1.5 / 1.3 = 1.1538 ⇒ 15.38%।"
  },
  {
    question_number: 37,
    practice_set: "Practice 3",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 9",
    type_category: "Problems based on percentage change in area",
    type_category_hi: "क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    type_label: "Type 9: Problems based on percentage change in area",
    type_label_hi: "Type 9: क्षेत्रफल में प्रतिशत परिवर्तन पर आधारित प्रश्न",
    question_text: "The volume of a sphere increases by 119.7%. Find the percentage increase in its surface area.",
    question_text_hi: "एक गोले का आयतन 119.7% बढ़ जाता है। इसके पृष्ठीय क्षेत्रफल में प्रतिशत वृद्धि ज्ञात कीजिए।",
    options: {
      a: "59%",
      b: "69%",
      c: "79%",
      d: "89%"
    },
    options_hi: {
      a: "59%",
      b: "69%",
      c: "79%",
      d: "89%"
    },
    correct_option: "b",
    solution_text: "New Volume = 219.7% of original (100% + 119.7% = 219.7% = 2.197 times).\nScale factor for radius = ∛2.197 = 1.3.\nScale factor for surface area = 1.3² = 1.69.\nSurface area becomes 169% of original, which is an increase of 69%.",
    solution_text_hi: "नया आयतन = मूल का 219.7% (100% + 119.7% = 219.7% = 2.197 गुना)।\nत्रिज्या के लिए स्केल फैक्टर = ∛2.197 = 1.3।\nपृष्ठीय क्षेत्रफल के लिए स्केल फैक्टर = 1.3² = 1.69।\nपृष्ठीय क्षेत्रफल मूल का 169% हो जाता है, जो कि 69% की वृद्धि है।",
    shortcut_text: "Radius scale = (2.197)^(1/3) = 1.3. Area scale = 1.3² = 1.69 ⇒ 69% increase.",
    shortcut_text_hi: "त्रिज्या = 1.3 ⇒ क्षेत्रफल = 1.3² = 1.69 ⇒ 69% वृद्धि।"
  },
  {
    question_number: 38,
    practice_set: "Practice 3",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "Income of A, B, and C is in the ratio 3:7:4 and expenses are 4:3:5. If A saves 14.28% of his income, find the ratio of their savings.",
    question_text_hi: "A, B, C की आय का अनुपात 3:7:4 है और व्यय का 4:3:5 है। यदि A अपनी आय का 14.28% बचाता है, तो उनकी बचत का अनुपात ज्ञात कीजिए।",
    options: {
      a: "6:71:11",
      b: "7:70:12",
      c: "6:69:13",
      d: "8:71:11"
    },
    options_hi: {
      a: "6:71:11",
      b: "7:70:12",
      c: "6:69:13",
      d: "8:71:11"
    },
    correct_option: "a",
    solution_text: "Income ratio = 3x:7x:4x. Expense ratio = 4y:3y:5y.\nA saves 14.28% (which is 1/7) of his income. Therefore, A's expense is 6/7 of his income.\n4y = (6/7) × 3x ⇒ 28y = 18x ⇒ x/y = 14/9.\nPut x = 14, y = 9.\nIncomes = 42, 98, 56.\nExpenses = 36, 27, 45.\nSavings = (42-36):(98-27):(56-45) = 6:71:11.",
    solution_text_hi: "आय का अनुपात = 3x:7x:4x। व्यय का अनुपात = 4y:3y:5y।\nA अपनी आय का 14.28% (जो 1/7 है) बचाता है। इसलिए, A का व्यय उसकी आय का 6/7 है।\n4y = (6/7) × 3x ⇒ 28y = 18x ⇒ x/y = 14/9।\nx = 14, y = 9 रखने पर।\nआय = 42, 98, 56।\nव्यय = 36, 27, 45।\nबचत = (42-36):(98-27):(56-45) = 6:71:11।",
    shortcut_text: "Savings = Income - Expense. x/y = 14/9 ⇒ Inc = (42, 98, 56), Exp = (36, 27, 45) ⇒ Savings = 6 : 71 : 11.",
    shortcut_text_hi: "बचत = 42-36 : 98-27 : 56-45 = 6 : 71 : 11।"
  },
  {
    question_number: 39,
    practice_set: "Practice 3",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 2",
    type_category: "Problems based on Exam and Students",
    type_category_hi: "परीक्षा और छात्रों पर आधारित प्रश्न",
    type_label: "Type 2: Problems based on Exam and Students",
    type_label_hi: "Type 2: परीक्षा और छात्रों पर आधारित प्रश्न",
    question_text: "In an exam, A got 25% more than B, B got 10% less than C, C got 25% more than D. If D got 320 out of 500, find A's marks.",
    question_text_hi: "एक परीक्षा में, A को B से 25% अधिक, B को C से 10% कम, C को D से 25% अधिक अंक मिले। यदि D को 500 में से 320 अंक मिले, तो A के अंक ज्ञात कीजिए।",
    options: {
      a: "400",
      b: "420",
      c: "450",
      d: "480"
    },
    options_hi: {
      a: "400",
      b: "420",
      c: "450",
      d: "480"
    },
    correct_option: "c",
    solution_text: "D = 320.\nC = 320 × 1.25 = 400.\nB = 400 × 0.90 = 360.\nA = 360 × 1.25 = 450.",
    solution_text_hi: "D = 320।\nC = 320 × 1.25 = 400।\nB = 400 × 0.90 = 360।\nA = 360 × 1.25 = 450।",
    shortcut_text: "A = 320 × (5/4) × (9/10) × (5/4) = 320 × (225 / 160) = 2 × 225 = 450.",
    shortcut_text_hi: "A = 320 × 1.25 × 0.9 × 1.25 = 450।"
  },
  {
    question_number: 40,
    practice_set: "Practice 3",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 6",
    type_category: "Problems based on investment and business",
    type_category_hi: "निवेश और व्यवसाय पर आधारित प्रश्न",
    type_label: "Type 6: Problems based on investment and business",
    type_label_hi: "Type 6: निवेश और व्यवसाय पर आधारित प्रश्न",
    question_text: "A man invests ₹10,000 at simple interest. A part of it is invested at 8% and the rest at 10%. If his total annual interest is ₹880, what amount was invested at 8%?",
    question_text_hi: "एक व्यक्ति साधारण ब्याज पर ₹10,000 का निवेश करता है। इसका एक हिस्सा 8% पर और बाकी 10% पर निवेश किया जाता है। यदि उसका कुल वार्षिक ब्याज ₹880 है, तो 8% पर कितनी राशि निवेश की गई थी?",
    options: {
      a: "₹4000",
      b: "₹5000",
      c: "₹6000",
      d: "₹7000"
    },
    options_hi: {
      a: "₹4000",
      b: "₹5000",
      c: "₹6000",
      d: "₹7000"
    },
    correct_option: "c",
    solution_text: "Let the amount at 8% be x. Amount at 10% = 10000 - x.\n0.08x + 0.10(10000 - x) = 880 ⇒ 1000 - 0.02x = 880 ⇒ 0.02x = 120 ⇒ x = 6000.",
    solution_text_hi: "माना 8% पर राशि x है। 10% पर राशि = 10000 - x।\n0.08x + 0.10(10000 - x) = 880 ⇒ 1000 - 0.02x = 880 ⇒ 0.02x = 120 ⇒ x = 6000।",
    shortcut_text: "Alligation: Overall rate = 880 / 10000 = 8.8%. Ratio of 8% to 10% = (10 - 8.8) : (8.8 - 8) = 1.2 : 0.8 = 3 : 2. Amount at 8% = (3/5) × 10000 = ₹6,000.",
    shortcut_text_hi: "एलिगेशन: कुल दर = 8.8%। अनुपात = (10 - 8.8) : (8.8 - 8) = 3 : 2 ⇒ 8% पर राशि = 3/5 × 10,000 = ₹6000।"
  },
  {
    question_number: 41,
    practice_set: "Practice 3",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 2",
    type_category: "Problems based on Exam and Students",
    type_category_hi: "परीक्षा और छात्रों पर आधारित प्रश्न",
    type_label: "Type 2: Problems based on Exam and Students",
    type_label_hi: "Type 2: परीक्षा और छात्रों पर आधारित प्रश्न",
    question_text: "In a class, 40% of the students failed in Math, 30% failed in English, and 10% failed in both. If 144 passed in both subjects, what is the total number of students?",
    question_text_hi: "एक कक्षा में, 40% छात्र गणित में फेल हुए, 30% अंग्रेजी में फेल हुए, और 10% दोनों में फेल हुए। यदि 144 दोनों में पास हुए, तो कुल छात्रों की संख्या क्या है?",
    options: {
      a: "240",
      b: "300",
      c: "360",
      d: "400"
    },
    options_hi: {
      a: "240",
      b: "300",
      c: "360",
      d: "400"
    },
    correct_option: "c",
    solution_text: "Total failed in at least one subject = Failed Math + Failed English - Failed Both = 40% + 30% - 10% = 60%.\nPassed both = 100% - 60% = 40%.\n40% of Total = 144.\nTotal students = 360.",
    solution_text_hi: "कम से कम एक विषय में कुल फेल = गणित में फेल + अंग्रेजी में फेल - दोनों में फेल = 40% + 30% - 10% = 60%।\nदोनों में पास = 100% - 60% = 40%।\nकुल का 40% = 144।\nकुल छात्र = 360।",
    shortcut_text: "Passed both = 100 - (40 + 30 - 10) = 40%. 40% = 144 ⇒ Total = 144 / 0.4 = 360.",
    shortcut_text_hi: "दोनों में पास = 40% = 144 ⇒ कुल = 360।"
  },
  {
    question_number: 42,
    practice_set: "Practice 3",
    level: "Level 5: Highly Difficult",
    level_group: "Level 5: Highly Difficult (Deep Analytical PYQs)",
    type_code: "Type 3",
    type_category: "Problems based on Income, Expenditure and Savings",
    type_category_hi: "आय, व्यय और बचत पर आधारित प्रश्न",
    type_label: "Type 3: Problems based on Income, Expenditure and Savings",
    type_label_hi: "Type 3: आय, व्यय और बचत पर आधारित प्रश्न",
    question_text: "A man spends 75% of his income. His income increases by 20% and his expenditure increases by 10%. His savings increase by what percentage?",
    question_text_hi: "एक आदमी अपनी आय का 75% खर्च करता है। उसकी आय में 20% की वृद्धि होती है और उसके व्यय में 10% की वृद्धि होती है। उसकी बचत में कितने प्रतिशत की वृद्धि होगी?",
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
    solution_text: "Let Income = 100. Expenditure = 75. Savings = 25.\nNew Income = 120.\nNew Expenditure = 75 × 1.10 = 82.5.\nNew Savings = 120 - 82.5 = 37.5.\nIncrease in savings = 37.5 - 25 = 12.5.\nPercentage increase = (12.5 / 25) × 100 = 50%.",
    solution_text_hi: "माना आय = 100। खर्च = 75। बचत = 25।\nनई आय = 120।\nनया खर्च = 75 × 1.10 = 82.5।\nनई बचत = 120 - 82.5 = 37.5।\nबचत में वृद्धि = 37.5 - 25 = 12.5।\nप्रतिशत वृद्धि = (12.5 / 25) × 100 = 50%।",
    shortcut_text: "Income Inc (20) = Exp Inc (75 × 10% = 7.5) + Sav Inc. Sav Inc = 20 - 7.5 = 12.5. % Sav Inc = (12.5 / 25) × 100 = 50%.",
    shortcut_text_hi: "बचत में वृद्धि = 20 - 7.5 = 12.5 ⇒ 12.5 / 25 = 50%।"
  }
];

if (typeof window !== "undefined") {
  window.PERCENTAGE_PRACTICE_1_QUESTIONS = PERCENTAGE_PRACTICE_1_QUESTIONS;
  window.PERCENTAGE_PRACTICE_2_QUESTIONS = PERCENTAGE_PRACTICE_2_QUESTIONS;
  window.PERCENTAGE_PRACTICE_3_QUESTIONS = PERCENTAGE_PRACTICE_3_QUESTIONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PERCENTAGE_PRACTICE_1_QUESTIONS, PERCENTAGE_PRACTICE_2_QUESTIONS, PERCENTAGE_PRACTICE_3_QUESTIONS };
}
