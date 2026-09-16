/**
 * Ratio & Proportion Practice Sets - Complete Curated Dataset
 * SET A (30 Questions) & SET B (22 Questions)
 * Structured across Levels 1 to 5 with English & Hindi Translations, Options, Detailed Solutions, and Shortcuts
 */

const RATIO_SET_A_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MODERATE (Q1 to Q6)
  // ==========================================
  {
    question_number: 1,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Income & Share Ratios",
    type_category_hi: "आय और हिस्सेदारी का अनुपात",
    question_text: "If the income of A is 15% more than of B and the income of B is 20% less than that of C, then the income of A, B, and C respectively are in the ratio:",
    question_text_hi: "यदि A की आय B से 15% अधिक है और B की आय C से 20% कम है, तो क्रमशः A, B और C की आय का अनुपात क्या होगा?",
    options: {
      a: "23:20:25",
      b: "25:23:20",
      c: "20:23:25",
      d: "23:25:20"
    },
    options_hi: {
      a: "23:20:25",
      b: "25:23:20",
      c: "20:23:25",
      d: "23:25:20"
    },
    correct_option: "a",
    solution_text: "According to the question:\nA = B × (115/100) => A/B = 23/20.\nAlso, B = C × (80/100) => B/C = 20/25.\nSince B is 20 in both expressions, combining them gives:\nA : B : C = 23 : 20 : 25.",
    solution_text_hi: "प्रश्नानुसार:\nA = B × (115/100) => A/B = 23/20।\nतथा B = C × (80/100) => B/C = 20/25।\nचूंकि दोनों में B = 20 समान है, अतः मिलाने पर:\nA : B : C = 23 : 20 : 25।",
    shortcut_text: "Let C = 100.\nThen B = 100 - 20 = 80.\nA = 80 + 15% of 80 = 80 + 12 = 92.\nRatio A : B : C = 92 : 80 : 100 = 23 : 20 : 25.",
    shortcut_text_hi: "माना C = 100।\nतब B = 100 - 20 = 80।\nA = 80 + 80 का 15% = 80 + 12 = 92।\nअनुपात A : B : C = 92 : 80 : 100 = 23 : 20 : 25।"
  },
  {
    question_number: 2,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Percentage Increase in Ratios",
    type_category_hi: "अनुपात में प्रतिशत वृद्धि",
    question_text: "Seats for Mathematics, Physics, and Chemistry in a school are in the ratio of 7:8:9. There is a proposal to increase the seats by 30%, 40%, and 50% respectively. What will be the ratio of increased seats?",
    question_text_hi: "एक स्कूल में गणित, भौतिकी और रसायन विज्ञान की सीटें 7:8:9 के अनुपात में हैं। सीटों को क्रमशः 30%, 40% और 50% बढ़ाने का प्रस्ताव है। बढ़ी हुई सीटों का अनुपात क्या होगा?",
    options: {
      a: "91:112:135",
      b: "135:112:91",
      c: "35:37:91",
      d: "112:91:135"
    },
    options_hi: {
      a: "91:112:135",
      b: "135:112:91",
      c: "35:37:91",
      d: "112:91:135"
    },
    correct_option: "a",
    solution_text: "Let original seats be 70, 80, 90.\nMaths = 70 × 1.30 = 91\nPhysics = 80 × 1.40 = 112\nChemistry = 90 × 1.50 = 135\nRatio of increased seats = 91 : 112 : 135.",
    solution_text_hi: "माना मूल सीटें 70, 80, 90 हैं।\nगणित = 70 × 1.30 = 91\nभौतिकी = 80 × 1.40 = 112\nरसायन = 90 × 1.50 = 135\nबढ़ी हुई सीटों का अनुपात = 91 : 112 : 135।",
    shortcut_text: "Multiply directly by growth factor:\n7 × 130 : 8 × 140 : 9 × 150\n= 910 : 1120 : 1350 = 91 : 112 : 135.",
    shortcut_text_hi: "सीधे वृद्धि कारक से गुणा करें:\n7 × 130 : 8 × 140 : 9 × 150 = 91 : 112 : 135।"
  },
  {
    question_number: 3,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Fractional Equivalence Ratio",
    type_category_hi: "भिन्न समतुल्यता अनुपात",
    question_text: "If (1/3) of A = (3/4) of B = (1/6) of C, then what is A:B:C?",
    question_text_hi: "यदि A का 1/3 = B का 3/4 = C का 1/6 है, तो A:B:C क्या है?",
    options: {
      a: "9:18:4",
      b: "4:9:18",
      c: "9:4:18",
      d: "18:9:4"
    },
    options_hi: {
      a: "9:18:4",
      b: "4:9:18",
      c: "9:4:18",
      d: "18:9:4"
    },
    correct_option: "c",
    solution_text: "Let A/3 = 3B/4 = C/6 = k.\nThen A = 3k, B = 4k/3, C = 6k.\nRatio A : B : C = 3k : (4/3)k : 6k\nMultiply throughout by 3:\n= 9 : 4 : 18.",
    solution_text_hi: "माना A/3 = 3B/4 = C/6 = k।\nतब A = 3k, B = 4k/3, C = 6k।\nअनुपात A : B : C = 3 : 4/3 : 6\n3 से गुणा करने पर = 9 : 4 : 18।",
    shortcut_text: "LCM of numerators (1, 3, 1) = 3.\nDivide each term by 3:\nA / (3×3) = B / 4 = C / (6×3)\n=> A/9 = B/4 = C/18\n=> A : B : C = 9 : 4 : 18.",
    shortcut_text_hi: "अंशों (1, 3, 1) का LCM = 3।\nप्रत्येक पद को 3 से भाग दें:\nA/9 = B/4 = C/18 => A : B : C = 9 : 4 : 18।"
  },
  {
    question_number: 4,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Compound Mixture Ratios",
    type_category_hi: "मिश्रित अनुपात संबंध",
    question_text: "The ratio of soil and gravel in a mixture is 11:8 while the ratio of gravel and cement is 6:7. What is the ratio of soil and cement in the mixture?",
    question_text_hi: "एक मिश्रण में मिट्टी और बजरी का अनुपात 11:8 है जबकि बजरी और सीमेंट का अनुपात 6:7 है। मिश्रण में मिट्टी और सीमेंट का अनुपात क्या है?",
    options: {
      a: "77:48",
      b: "33:28",
      c: "8:6",
      d: "11:7"
    },
    options_hi: {
      a: "77:48",
      b: "33:28",
      c: "8:6",
      d: "11:7"
    },
    correct_option: "b",
    solution_text: "Soil/Gravel = 11/8, Gravel/Cement = 6/7.\nSoil/Cement = (Soil/Gravel) × (Gravel/Cement)\n= (11/8) × (6/7) = (11 × 3)/(4 × 7) = 33/28.",
    solution_text_hi: "मिट्टी/बजरी = 11/8, बजरी/सीमेंट = 6/7।\nमिट्टी/सीमेंट = (11/8) × (6/7) = 33/28।",
    shortcut_text: "Soil : Cement = (11 × 6) : (8 × 7) = 66 : 56 = 33 : 28.",
    shortcut_text_hi: "मिट्टी : सीमेंट = (11 × 6) : (8 × 7) = 66 : 56 = 33 : 28।"
  },
  {
    question_number: 5,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Chain Mixture Ratio",
    type_category_hi: "श्रृंखला मिश्रण अनुपात",
    question_text: "The ratio of sand to gravel in a mixture is 17:8 while that between gravel and cement is 6:17. What is the ratio of sand to cement in the mixture?",
    question_text_hi: "एक मिश्रण में रेत और बजरी का अनुपात 17:8 है जबकि बजरी और सीमेंट का अनुपात 6:17 है। मिश्रण में रेत और सीमेंट का अनुपात क्या है?",
    options: {
      a: "17:17",
      b: "289:48",
      c: "8:6",
      d: "3:4"
    },
    options_hi: {
      a: "17:17",
      b: "289:48",
      c: "8:6",
      d: "3:4"
    },
    correct_option: "d",
    solution_text: "Sand/Cement = (Sand/Gravel) × (Gravel/Cement)\n= (17/8) × (6/17) = 6/8 = 3/4.",
    solution_text_hi: "रेत/सीमेंट = (रेत/बजरी) × (बजरी/सीमेंट) = (17/8) × (6/17) = 6/8 = 3/4।",
    shortcut_text: "Direct cancellation of common factor 17:\nSand : Cement = 6 : 8 = 3 : 4.",
    shortcut_text_hi: "उभयनिष्ठ 17 का सीधा विलोपन:\nरेत : सीमेंट = 6 : 8 = 3 : 4।"
  },
  {
    question_number: 6,
    practice_set: "SET A",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Division of Total Length",
    type_category_hi: "कुल लंबाई का विभाजन",
    question_text: "A pole is 405 m long. It is painted in saffron, white, and green color one above the other in the ratio 8:9:10 respectively. What is the length of the white part of the pole (in meters)?",
    question_text_hi: "एक खंभा 405 मीटर लंबा है। इसे नीचे से ऊपर क्रमशः 8:9:10 के अनुपात में भगवा, सफेद और हरे रंग में रंगा गया है। खंभे के सफेद भाग की लंबाई (मीटर में) क्या है?",
    options: {
      a: "130m",
      b: "120m",
      c: "140m",
      d: "135m"
    },
    options_hi: {
      a: "130m",
      b: "120m",
      c: "140m",
      d: "135m"
    },
    correct_option: "d",
    solution_text: "Sum of ratio parts = 8 + 9 + 10 = 27.\nLength of white part = (9 / 27) × 405 = (1 / 3) × 405 = 135 meters.",
    solution_text_hi: "अनुपात के भागों का योग = 8 + 9 + 10 = 27।\nसफेद भाग की लंबाई = (9 / 27) × 405 = (1 / 3) × 405 = 135 मीटर।",
    shortcut_text: "White share = 9/27 = 1/3 of total length.\n405 / 3 = 135 m.",
    shortcut_text_hi: "सफेद भाग = 9/27 = कुल का 1/3।\n405 / 3 = 135 मीटर।"
  },

  // ==========================================
  // LEVEL 2: MORE THAN MODERATE (Q7 to Q12)
  // ==========================================
  {
    question_number: 7,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Distribution among Four Quantities",
    type_category_hi: "चार राशियों में विभाजन",
    question_text: "Some fruits were divided amongst A, B, C, and D in the ratio 3:4:5:7. If A got 192 fruits, then how many fruits did B and C together get?",
    question_text_hi: "कुछ फलों को A, B, C और D के बीच 3:4:5:7 के अनुपात में बांटा गया। यदि A को 192 फल मिले, तो B और C को मिलाकर कितने फल मिले?",
    options: {
      a: "576",
      b: "756",
      c: "567",
      d: "675"
    },
    options_hi: {
      a: "576",
      b: "756",
      c: "567",
      d: "675"
    },
    correct_option: "a",
    solution_text: "A's ratio share = 3 units = 192 fruits => 1 unit = 192 / 3 = 64 fruits.\nB and C together got = 4 + 5 = 9 units.\nTotal fruits for B and C = 9 × 64 = 576 fruits.",
    solution_text_hi: "A का अनुपात भाग = 3 इकाई = 192 फल => 1 इकाई = 64 फल।\nB और C को मिलाकर = 4 + 5 = 9 इकाई।\nकुल फल = 9 × 64 = 576 फल।",
    shortcut_text: "(B + C) / A = (4 + 5) / 3 = 9 / 3 = 3.\nTotal for B and C = 3 × 192 = 576.",
    shortcut_text_hi: "(B + C) / A = 9 / 3 = 3।\nB और C के फल = 3 × 192 = 576।"
  },
  {
    question_number: 8,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Division into Three Equal Parts",
    type_category_hi: "समान भागों में विभाजन",
    question_text: "Divide 1870 into three parts so that half of the first part, 1/3 of the second part, and 1/6 of the third part are equal. What will be the all three parts?",
    question_text_hi: "1870 को तीन भागों में इस प्रकार विभाजित करें कि पहले भाग का आधा, दूसरे भाग का 1/3 और तीसरे भाग का 1/6 बराबर हो। तीनों भाग क्या होंगे?",
    options: {
      a: "360, 510, 1000",
      b: "340, 510, 1020",
      c: "340, 490, 1040",
      d: "360, 490, 1020"
    },
    options_hi: {
      a: "360, 510, 1000",
      b: "340, 510, 1020",
      c: "340, 490, 1040",
      d: "360, 490, 1020"
    },
    correct_option: "b",
    solution_text: "Let (1/2)I = (1/3)II = (1/6)III = k.\nThen I = 2k, II = 3k, III = 6k.\nRatio I : II : III = 2 : 3 : 6.\nSum of parts = 2 + 3 + 6 = 11 units = 1870 => 1 unit = 170.\nFirst part = 2 × 170 = 340\nSecond part = 3 × 170 = 510\nThird part = 6 × 170 = 1020.",
    solution_text_hi: "माना I/2 = II/3 = III/6 = k => I : II : III = 2 : 3 : 6।\nकुल योग = 11 इकाई = 1870 => 1 इकाई = 170।\nभाग क्रमशः 340, 510 और 1020 हैं।",
    shortcut_text: "Check options directly: 340/2 = 170, 510/3 = 170, 1020/6 = 170. All equal to 170!",
    shortcut_text_hi: "विकल्प जांचें: 340/2 = 170, 510/3 = 170, 1020/6 = 170। सभी बराबर हैं!"
  },
  {
    question_number: 9,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Three-Variable Linear Split",
    type_category_hi: "तीन चरों में आनुपातिक विभाजन",
    question_text: "13,680 is divided into three parts such that the first part is 3/5 of the third part, and the ratio between the second and third part is 4:7. How much will be the first part?",
    question_text_hi: "13,680 को तीन भागों में इस प्रकार बांटा गया है कि पहला भाग तीसरे भाग का 3/5 है, और दूसरे और तीसरे भाग के बीच का अनुपात 4:7 है। पहला भाग कितना होगा?",
    options: {
      a: "3780",
      b: "6300",
      c: "1600",
      d: "4800"
    },
    options_hi: {
      a: "3780",
      b: "6300",
      c: "1600",
      d: "4800"
    },
    correct_option: "a",
    solution_text: "First : Third = 3 : 5 and Second : Third = 4 : 7.\nTo make Third common, take LCM of 5 and 7 = 35:\nFirst : Third = (3×7) : (5×7) = 21 : 35\nSecond : Third = (4×5) : (7×5) = 20 : 35\nSo First : Second : Third = 21 : 20 : 35.\nTotal units = 21 + 20 + 35 = 76 units = 13680 => 1 unit = 180.\nFirst part = 21 × 180 = 3780.",
    solution_text_hi: "पहला : तीसरा = 3 : 5 और दूसरा : तीसरा = 4 : 7।\nतीसरे पद को समान (35) करने पर:\nपहला : दूसरा : तीसरा = 21 : 20 : 35।\nकुल योग = 76 इकाई = 13680 => 1 इकाई = 180।\nपहला भाग = 21 × 180 = 3780।",
    shortcut_text: "First part must be a multiple of 21 (and therefore of 7 and 3).\n3780 is divisible by 21 (3780 / 21 = 180).",
    shortcut_text_hi: "पहला भाग 21 का गुणज होना चाहिए। 3780 सीधे 21 से विभाज्य है।"
  },
  {
    question_number: 10,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 3",
    type_category: "Admission & Change of Ratio",
    type_category_hi: "प्रवेश और अनुपात परिवर्तन",
    question_text: "The ratio of girls and boys in 504 students of a school is 11:13. If 12 more girls are admitted, then find the new ratio.",
    question_text_hi: "एक स्कूल के 504 छात्रों में लड़कियों और लड़कों का अनुपात 11:13 है। यदि 12 और लड़कियों को प्रवेश दिया जाता है, तो नया अनुपात ज्ञात कीजिए।",
    options: {
      a: "31:51",
      b: "91:81",
      c: "81:91",
      d: "51:31"
    },
    options_hi: {
      a: "31:51",
      b: "91:81",
      c: "81:91",
      d: "51:31"
    },
    correct_option: "c",
    solution_text: "Total units = 11 + 13 = 24 units = 504 => 1 unit = 21.\nGirls = 11 × 21 = 231, Boys = 13 × 21 = 273.\nWhen 12 more girls join:\nNew girls = 231 + 12 = 243.\nNew Ratio = 243 : 273 = (243/3) : (273/3) = 81 : 91.",
    solution_text_hi: "कुल योग = 24 इकाई = 504 => 1 इकाई = 21।\nलड़कियाँ = 231, लड़के = 273।\n12 नई लड़कियाँ आने पर: 231 + 12 = 243।\nनया अनुपात = 243 : 273 = 81 : 91।",
    shortcut_text: "1 unit = 21 students. 12 girls = 12/21 = 4/7 units.\nNew Girls = 11 + 4/7 = 81/7.\nRatio = (81/7) : 13 = 81 : 91.",
    shortcut_text_hi: "1 इकाई = 21। 12 लड़कियाँ = 12/21 = 4/7 इकाई।\nनया अनुपात = (11 + 4/7) : 13 = 81 : 91।"
  },
  {
    question_number: 11,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 3",
    type_category: "Single Component Addition in Mixture",
    type_category_hi: "मिश्रण में एक घटक की वृद्धि",
    question_text: "The initial ratio of sugar and flour in a dough was 4:7. Justin added more flour in that 22 kg dough to make the ratio of sugar and flour 2:5. How much flour did Justin later add?",
    question_text_hi: "एक आटे (dough) में चीनी और आटे का प्रारंभिक अनुपात 4:7 था। जस्टिन ने 22 किलोग्राम आटे में और आटा मिलाया ताकि चीनी और आटे का अनुपात 2:5 हो जाए। जस्टिन ने बाद में कितना आटा मिलाया?",
    options: {
      a: "2 kg",
      b: "4 kg",
      c: "8 kg",
      d: "6 kg"
    },
    options_hi: {
      a: "2 kg",
      b: "4 kg",
      c: "8 kg",
      d: "6 kg"
    },
    correct_option: "d",
    solution_text: "Initial dough = 22 kg.\nTotal units = 4 + 7 = 11 units = 22 kg => 1 unit = 2 kg.\nSugar = 4 × 2 = 8 kg, Flour = 7 × 2 = 14 kg.\nSugar remains constant at 8 kg. New ratio Sugar : Flour = 2 : 5.\n2 units of sugar = 8 kg => 1 unit = 4 kg.\nNew Flour = 5 units = 5 × 4 = 20 kg.\nFlour added = 20 - 14 = 6 kg.",
    solution_text_hi: "प्रारंभिक आटा = 22 किलो।\n11 इकाई = 22 किलो => 1 इकाई = 2 किलो।\nचीनी = 8 किलो, आटा = 14 किलो।\nचीनी स्थिर (8 किलो) रहती है। नया अनुपात 2:5 है।\n2 इकाई = 8 किलो => 1 इकाई = 4 किलो। नया आटा = 20 किलो।\nमिलाया गया आटा = 20 - 14 = 6 किलो।",
    shortcut_text: "Make sugar units equal in both ratios:\nInitial: 4 : 7\nFinal: 2 : 5 = 4 : 10 (multiplied by 2)\nFlour increases from 7 to 10 = 3 units.\nSince 11 units = 22 kg => 1 unit = 2 kg.\nAdded flour = 3 × 2 = 6 kg.",
    shortcut_text_hi: "चीनी को समान करें:\nप्रारंभिक 4:7, नया 4:10 (2 से गुणा करने पर)।\nआटे में वृद्धि = 10 - 7 = 3 इकाई।\n3 × 2 = 6 किलो।"
  },
  {
    question_number: 12,
    practice_set: "SET A",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 2",
    type_category: "Alloy Component Adjustment",
    type_category_hi: "मिश्र धातु घटक समायोजन",
    question_text: "The ratio of Copper, Zinc, and Nickel in German Silver is 4:3:2. How many kilograms of Zinc should be added to this metal of 54 kg so that the new ratio becomes 2:5:1?",
    question_text_hi: "जर्मन सिल्वर में तांबा, जस्ता और निकल का अनुपात 4:3:2 है। 54 किलो के इस धातु में कितने किलोग्राम जस्ता मिलाया जाना चाहिए ताकि नया अनुपात 2:5:1 हो जाए?",
    options: {
      a: "50",
      b: "48",
      c: "36",
      d: "42"
    },
    options_hi: {
      a: "50",
      b: "48",
      c: "36",
      d: "42"
    },
    correct_option: "d",
    solution_text: "Total ratio units = 4 + 3 + 2 = 9 units = 54 kg => 1 unit = 6 kg.\nCopper = 4 × 6 = 24 kg\nZinc = 3 × 6 = 18 kg\nNickel = 2 × 6 = 12 kg.\nOnly Zinc is added, so Copper and Nickel remain unchanged.\nNew ratio = 2 : 5 : 1.\nCopper (2 units) = 24 kg => 1 unit = 12 kg.\nNew Zinc = 5 units = 5 × 12 = 60 kg.\nZinc to add = 60 - 18 = 42 kg.",
    solution_text_hi: "कुल योग = 9 इकाई = 54 किलो => 1 इकाई = 6 किलो।\nतांबा = 24 किलो, जस्ता = 18 किलो, निकल = 12 किलो।\nनया अनुपात 2:5:1 है।\nतांबा (2 इकाई) = 24 किलो => 1 इकाई = 12 किलो।\nनया जस्ता = 5 × 12 = 60 किलो।\nमिलाया गया जस्ता = 60 - 18 = 42 किलो।",
    shortcut_text: "Multiply new ratio (2:5:1) by 2 to keep Copper (4) and Nickel (2) unchanged:\nNew Ratio = 4 : 10 : 2.\nZinc increases from 3 to 10 = 7 units.\nSince 1 unit = 6 kg => 7 × 6 = 42 kg.",
    shortcut_text_hi: "नए अनुपात को 2 से गुणा करें: 4 : 10 : 2।\nजस्ता 3 से बढ़कर 10 हुआ = 7 इकाई।\n7 × 6 = 42 किलो।"
  },

  // ==========================================
  // LEVEL 3: INSPIRED FROM PYQs (Q13 to Q18)
  // ==========================================
  {
    question_number: 13,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Reduction before Ratio Split",
    type_category_hi: "कटौती के बाद अनुपात विभाजन",
    question_text: "Three friends A, B, and C divide ₹5,525 amongst them in such a way that if ₹50, ₹100, and ₹75 are removed from the sums that A, B, and C received respectively, then the share of the sums that they get would have been in the ratio of 11:18:24. How much did C initially receive?",
    question_text_hi: "तीन दोस्त A, B और C ₹5,525 को आपस में इस तरह बांटते हैं कि यदि उनके प्राप्त हिस्से से क्रमशः ₹50, ₹100 और ₹75 निकाल दिए जाएं, तो उनके हिस्से का अनुपात 11:18:24 हो जाएगा। C को शुरुआत में कितना मिला?",
    options: {
      a: "₹1,900",
      b: "₹1,150",
      c: "₹2,325",
      d: "₹2,475"
    },
    options_hi: {
      a: "₹1,900",
      b: "₹1,150",
      c: "₹2,325",
      d: "₹2,475"
    },
    correct_option: "d",
    solution_text: "Total deductions = 50 + 100 + 75 = ₹225.\nRemaining amount to distribute = 5525 - 225 = ₹5300.\nSum of ratio parts = 11 + 18 + 24 = 53 units.\n1 unit = 5300 / 53 = ₹100.\nC's reduced share = 24 × 100 = ₹2400.\nC's initial share = 2400 + 75 = ₹2475.",
    solution_text_hi: "कुल कटौती = 50 + 100 + 75 = ₹225।\nशेष राशि = 5525 - 225 = ₹5300।\nकुल अनुपात = 11 + 18 + 24 = 53 इकाई = ₹5300 => 1 इकाई = ₹100।\nC का घटा हुआ भाग = 24 × 100 = ₹2400।\nC का वास्तविक भाग = 2400 + 75 = ₹2475।",
    shortcut_text: "(C's initial share - 75) must be divisible by 24:\n2475 - 75 = 2400 (which is 24 × 100). Only Option D matches!",
    shortcut_text_hi: "(C का हिस्सा - 75) 24 का गुणज होना चाहिए:\n2475 - 75 = 2400 (24 से विभाज्य)। केवल विकल्प D सही है!"
  },
  {
    question_number: 14,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 1",
    type_category: "Income, Expenditure & Savings",
    type_category_hi: "आय, व्यय और बचत",
    question_text: "The ratio of the incomes of two persons is 7:5 and the ratio of their corresponding expenses is 9:7. If they save ₹1700 and ₹1100 consecutively, then find the corresponding income of each person.",
    question_text_hi: "दो व्यक्तियों की आय का अनुपात 7:5 है और उनके खर्च का अनुपात 9:7 है। यदि वे क्रमशः ₹1700 और ₹1100 बचाते हैं, तो प्रत्येक व्यक्ति की आय ज्ञात कीजिए।",
    options: {
      a: "₹5,000, ₹5,000",
      b: "₹4,500, ₹3,500",
      c: "₹5,500, ₹4,500",
      d: "₹3,500, ₹2,500"
    },
    options_hi: {
      a: "₹5,000, ₹5,000",
      b: "₹4,500, ₹3,500",
      c: "₹5,500, ₹4,500",
      d: "₹3,500, ₹2,500"
    },
    correct_option: "d",
    solution_text: "Let incomes be 7x and 5x, and expenses be 9y and 7y.\n7x - 1700 = 9y  => 7x - 9y = 1700\n5x - 1100 = 7y  => 5x - 7y = 1100\nMultiplying first eq by 7 and second by 9:\n49x - 63y = 11900\n45x - 63y = 9900\nSubtracting: 4x = 2000 => x = 500.\nIncomes = 7 × 500 = ₹3500 and 5 × 500 = ₹2500.",
    solution_text_hi: "समीकरण विधि से:\n7x - 9y = 1700\n5x - 7y = 1100\nहल करने पर: 4x = 2000 => x = 500।\nआय क्रमशः ₹3500 और ₹2500 है।",
    shortcut_text: "Cross-Multiplication Method:\n| (7×7) - (5×9) | = | 49 - 45 | = 4 units.\nCross diff of savings = (9 × 1100) - (7 × 1700) = 9900 - 11900 = -2000.\n4 units = 2000 => 1 unit = 500.\nIncomes = 7 × 500 = ₹3,500 and 5 × 500 = ₹2,500.",
    shortcut_text_hi: "क्रॉस गुणा विधि:\n(7×7 - 5×9) इकाई = (9×1100 - 7×1700) => 4 इकाई = 2000 => 1 इकाई = 500।\nआय = ₹3500, ₹2500।"
  },
  {
    question_number: 15,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Equal Salary Increment",
    type_category_hi: "समान वेतन वृद्धि",
    question_text: "The salaries of A and B are in the ratio 3:4. On increasing the salaries of both A and B by 3000 each, the new ratio of their salaries becomes 18:23. Find the salary of A after the increase.",
    question_text_hi: "A और B के वेतन का अनुपात 3:4 है। दोनों के वेतन में 3000 की वृद्धि करने पर, उनके वेतन का नया अनुपात 18:23 हो जाता है। वृद्धि के बाद A का वेतन ज्ञात कीजिए।",
    options: {
      a: "₹12,000",
      b: "₹23,000",
      c: "₹21,000",
      d: "₹18,000"
    },
    options_hi: {
      a: "₹12,000",
      b: "₹23,000",
      c: "₹21,000",
      d: "₹18,000"
    },
    correct_option: "d",
    solution_text: "(3x + 3000) / (4x + 3000) = 18 / 23\n23(3x + 3000) = 18(4x + 3000)\n69x + 69000 = 72x + 54000\n3x = 15000 => x = 5000.\nA's initial salary = 3x = 3 × 5000 = ₹15,000.\nA's salary after increase = 15000 + 3000 = ₹18,000.",
    solution_text_hi: "(3x + 3000) / (4x + 3000) = 18 / 23\nहल करने पर: 3x = 15000 => x = 5000।\nA का प्रारंभिक वेतन = ₹15000।\nवृद्धि के बाद A का वेतन = 15000 + 3000 = ₹18000।",
    shortcut_text: "After increase, A's salary corresponds to 18 units in the ratio 18:23.\nHence it must be a multiple of 18. Among the options, only ₹18,000 is divisible by 18.",
    shortcut_text_hi: "वृद्धि के बाद A का वेतन 18 का गुणज होना चाहिए। विकल्पों में केवल ₹18,000 ही 18 से विभाज्य है।"
  },
  {
    question_number: 16,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 2",
    type_category: "Ratio Difference and Total Sum",
    type_category_hi: "अनुपात अंतर और कुल योग",
    question_text: "A sum of x is divided among A, B, and C such that the ratio of their shares is 2:3:5. If the positive difference between the shares of B and C is ₹5,940, then what is the value of x?",
    question_text_hi: "x की राशि को A, B और C के बीच इस तरह बांटा जाता है कि उनके हिस्से का अनुपात 2:3:5 है। यदि B और C के हिस्से के बीच का धनात्मक अंतर ₹5,940 है, तो x का मान क्या है?",
    options: {
      a: "₹22,680",
      b: "₹23,220",
      c: "₹25,920",
      d: "₹29,700"
    },
    options_hi: {
      a: "₹22,680",
      b: "₹23,220",
      c: "₹25,920",
      d: "₹29,700"
    },
    correct_option: "d",
    solution_text: "Ratio A : B : C = 2 : 3 : 5.\nDifference between B and C = 5 - 3 = 2 units = ₹5,940 => 1 unit = ₹2,970.\nTotal sum x = 2 + 3 + 5 = 10 units.\nx = 10 × 2970 = ₹29,700.",
    solution_text_hi: "अनुपात A : B : C = 2 : 3 : 5।\nB और C का अंतर = 5 - 3 = 2 इकाई = ₹5,940 => 1 इकाई = ₹2,970।\nकुल राशि x = 10 इकाई = 10 × 2970 = ₹29,700।",
    shortcut_text: "Total = 10 units = 5 × (2 units) = 5 × 5940 = ₹29,700.",
    shortcut_text_hi: "कुल योग = 10 इकाई = 5 × 5940 = ₹29,700।"
  },
  {
    question_number: 17,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 2",
    type_category: "Combined Sum Partition",
    type_category_hi: "संयुक्त राशि का विभाजन",
    question_text: "A sum of ₹4,800 is divided between A, B, and C such that the ratio of the share of A to the combined share of B and C is 3:5 and C receives 5/7 of what A and B together receive. The difference of A's share and B's share is:",
    question_text_hi: "₹4,800 की राशि को A, B और C के बीच इस प्रकार बांटा जाता है कि A के हिस्से और B तथा C के संयुक्त हिस्से का अनुपात 3:5 है और C को A और B के संयुक्त हिस्से का 5/7 मिलता है। A और B के हिस्से का अंतर क्या है?",
    options: {
      a: "₹900",
      b: "₹800",
      c: "₹1,000",
      d: "₹850"
    },
    options_hi: {
      a: "₹900",
      b: "₹800",
      c: "₹1,000",
      d: "₹850"
    },
    correct_option: "b",
    solution_text: "A : (B + C) = 3 : 5 => A = (3/8) × 4800 = ₹1,800.\nC : (A + B) = 5 : 7 => C = (5/12) × 4800 = ₹2,000.\nTotal = A + B + C = 4800 => 1800 + B + 2000 = 4800 => B = ₹1,000.\nDifference between A and B = 1800 - 1000 = ₹800.",
    solution_text_hi: "A = (3/8) × 4800 = ₹1,800।\nC = (5/12) × 4800 = ₹2,000।\nB = 4800 - (1800 + 2000) = ₹1,000।\nA और B का अंतर = 1800 - 1000 = ₹800।",
    shortcut_text: "A = 3/8 of 4800 = 1800.\nC = 5/12 of 4800 = 2000.\nB = 4800 - 3800 = 1000.\nDifference = 1800 - 1000 = ₹800.",
    shortcut_text_hi: "A = 1800, C = 2000, B = 1000। अंतर = 1800 - 1000 = ₹800।"
  },
  {
    question_number: 18,
    practice_set: "SET A",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Internal Transfer between Two Parties",
    type_category_hi: "दो पक्षों के बीच आंतरिक स्थानांतरण",
    question_text: "The ratio of the sum of money Arun and Ahaan had is 9:5. If Arun gives ₹12 from his share to Ahaan, then the ratio will change to 4:3. How much money did Arun have initially?",
    question_text_hi: "अरुण और अहान के पास मौजूद धनराशि का अनुपात 9:5 है। यदि अरुण अपने हिस्से में से ₹12 अहान को दे देता है, तो अनुपात 4:3 हो जाएगा। अरुण के पास शुरुआत में कितनी राशि थी?",
    options: {
      a: "₹144",
      b: "₹126",
      c: "₹108",
      d: "₹90"
    },
    options_hi: {
      a: "₹144",
      b: "₹126",
      c: "₹108",
      d: "₹90"
    },
    correct_option: "c",
    solution_text: "(9x - 12) / (5x + 12) = 4 / 3\n3(9x - 12) = 4(5x + 12)\n27x - 36 = 20x + 48\n7x = 84 => x = 12.\nArun initially had 9x = 9 × 12 = ₹108.",
    solution_text_hi: "(9x - 12) / (5x + 12) = 4 / 3\n27x - 36 = 20x + 48 => 7x = 84 => x = 12।\nअरुण के पास शुरुआत में = 9 × 12 = ₹108।",
    shortcut_text: "Total money is constant: Initial sum = 14 units; Final sum = 7 units.\nMultiply final ratio by 2 => 8 : 6.\nArun changes from 9 to 8 units = 1 unit = ₹12.\nArun's initial money = 9 × 12 = ₹108.",
    shortcut_text_hi: "कुल योग स्थिर (14) रखने के लिए 4:3 को 2 से गुणा करें = 8:6।\nअरुण का हिस्सा 9 से 8 हुआ = 1 इकाई = ₹12।\nप्रारंभिक राशि = 9 × 12 = ₹108।"
  },

  // ==========================================
  // LEVEL 4: PYQ+ (Q19 to Q24)
  // ==========================================
  {
    question_number: 19,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Coin Denomination & Total Value",
    type_category_hi: "सिक्कों के मूल्य और प्रकार",
    question_text: "A bag contains ₹2, ₹5, and ₹10 coins in the ratio 5:7:8, amounting to a total of ₹1250. The number of ₹5 coins in the bag are:",
    question_text_hi: "एक बैग में ₹2, ₹5 और ₹10 के सिक्के 5:7:8 के अनुपात में हैं, जिनकी कुल राशि ₹1250 है। बैग में ₹5 के सिक्कों की संख्या कितनी है?",
    options: {
      a: "84",
      b: "78",
      c: "70",
      d: "91"
    },
    options_hi: {
      a: "84",
      b: "78",
      c: "70",
      d: "91"
    },
    correct_option: "c",
    solution_text: "Let the coins be 5x, 7x, 8x.\nTotal Value = (5x × 2) + (7x × 5) + (8x × 10)\n= 10x + 35x + 80x = 125x.\n125x = 1250 => x = 10.\nNumber of ₹5 coins = 7x = 7 × 10 = 70.",
    solution_text_hi: "सिक्कों की संख्या = 5x, 7x, 8x।\nकुल मूल्य = 10x + 35x + 80x = 125x = ₹1250 => x = 10।\n₹5 के सिक्कों की संख्या = 7 × 10 = 70।",
    shortcut_text: "125x = 1250 => x = 10.\n₹5 coins = 7 × 10 = 70.",
    shortcut_text_hi: "125x = 1250 => x = 10। ₹5 के सिक्के = 70।"
  },
  {
    question_number: 20,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Fractional Coin Ratio",
    type_category_hi: "भिन्नात्मक सिक्का अनुपात",
    question_text: "Krishna has a few coins of 1 rupee, 50 paisa, and 25 paisa in the ratio 1/4 : 1/2 : 1/2. If the number of 25 paise coins is 100, then the total amount with Krishna is:",
    question_text_hi: "कृष्णा के पास 1 रुपये, 50 पैसे और 25 पैसे के कुछ सिक्के 1/4 : 1/2 : 1/2 के अनुपात में हैं। यदि 25 पैसे के सिक्कों की संख्या 100 है, तो कृष्णा के पास कुल कितनी राशि है?",
    options: {
      a: "₹100",
      b: "₹75",
      c: "₹125",
      d: "₹120"
    },
    options_hi: {
      a: "₹100",
      b: "₹75",
      c: "₹125",
      d: "₹120"
    },
    correct_option: "c",
    solution_text: "Multiply ratio 1/4 : 1/2 : 1/2 by 4 to get integers: 1 : 2 : 2.\n25 paise coins = 2 units = 100 => 1 unit = 50 coins.\n1 rupee coins = 1 × 50 = 50 coins = ₹50\n50 paise coins = 2 × 50 = 100 coins = ₹50\n25 paise coins = 100 coins = ₹25\nTotal amount = 50 + 50 + 25 = ₹125.",
    solution_text_hi: "अनुपात को 4 से गुणा करने पर: 1 : 2 : 2।\n25 पैसे के सिक्के = 2 इकाई = 100 => 1 इकाई = 50 सिक्के।\n1 रुपये के सिक्के = 50 = ₹50\n50 पैसे के सिक्के = 100 = ₹50\n25 पैसे के सिक्के = 100 = ₹25\nकुल राशि = 50 + 50 + 25 = ₹125।",
    shortcut_text: "Value per unit = 1(1) + 2(0.5) + 2(0.25) = ₹2.50.\nNumber of units = 100 / 2 = 50.\nTotal amount = 50 × 2.50 = ₹125.",
    shortcut_text_hi: "प्रति इकाई मूल्य = ₹2.50।\nइकाई = 50। कुल राशि = 50 × 2.5 = ₹125।"
  },
  {
    question_number: 21,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Coin Distribution by Value",
    type_category_hi: "मूल्य अनुसार सिक्कों का वितरण",
    question_text: "₹110 are contained in a box which consists of one rupee, 50 paise, and 25 paise coins in the ratio 1:2:3. What is the number of 50 paise coins?",
    question_text_hi: "एक बॉक्स में ₹110 हैं, जिसमें एक रुपये, 50 पैसे और 25 पैसे के सिक्के 1:2:3 के अनुपात में हैं। 50 पैसे के सिक्कों की संख्या क्या है?",
    options: {
      a: "80",
      b: "105",
      c: "108",
      d: "110"
    },
    options_hi: {
      a: "80",
      b: "105",
      c: "108",
      d: "110"
    },
    correct_option: "a",
    solution_text: "Let coins be x, 2x, 3x.\nTotal value = x(1) + 2x(0.50) + 3x(0.25) = x + x + 0.75x = 2.75x.\n2.75x = 110 => x = 110 / 2.75 = 40.\nNumber of 50 paise coins = 2x = 2 × 40 = 80.",
    solution_text_hi: "कुल मूल्य = x + x + 0.75x = 2.75x = 110 => x = 40।\n50 पैसे के सिक्कों की संख्या = 2 × 40 = 80।",
    shortcut_text: "2.75x = 110 => (11/4)x = 110 => x = 40.\n50 paise coins = 2 × 40 = 80.",
    shortcut_text_hi: "2.75x = 110 => x = 40। 50 पैसे के सिक्के = 2 × 40 = 80।"
  },
  {
    question_number: 22,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Multi-Coin Value Equating",
    type_category_hi: "सिक्कों के विविध मूल्य समीकरण",
    question_text: "In a bag, the coins of 50 paise, 25 paise, and 10 paise are in the ratio of 5:4:3. If the value of coins is ₹171. Find the number of each type of coins.",
    question_text_hi: "एक बैग में 50 पैसे, 25 पैसे और 10 पैसे के सिक्के 5:4:3 के अनुपात में हैं। यदि सिक्कों का मूल्य ₹171 है, तो प्रत्येक प्रकार के सिक्कों की संख्या ज्ञात कीजिए।",
    options: {
      a: "200, 250, 150",
      b: "225, 180, 135",
      c: "140, 150, 280",
      d: "200, 360, 160"
    },
    options_hi: {
      a: "200, 250, 150",
      b: "225, 180, 135",
      c: "140, 150, 280",
      d: "200, 360, 160"
    },
    correct_option: "b",
    solution_text: "Value per unit ratio = 5(0.50) + 4(0.25) + 3(0.10) = 2.50 + 1.00 + 0.30 = ₹3.80.\nNumber of units = 171 / 3.80 = 45.\n50 paise coins = 5 × 45 = 225\n25 paise coins = 4 × 45 = 180\n10 paise coins = 3 × 45 = 135.",
    solution_text_hi: "प्रति इकाई मूल्य = 2.50 + 1.00 + 0.30 = ₹3.80।\nइकाई = 171 / 3.8 = 45।\nसिक्के = 5×45=225, 4×45=180, 3×45=135।",
    shortcut_text: "Coins are in ratio 5:4:3. 225 : 180 : 135 = 5 : 4 : 3.",
    shortcut_text_hi: "सिक्कों का अनुपात 5:4:3 है। 225, 180, 135 सीधे संतुष्ट करते हैं।"
  },
  {
    question_number: 23,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Percentage Denomination Coins",
    type_category_hi: "प्रतिशत आधार पर सिक्कों का विभाजन",
    question_text: "Raju has ₹210 in the form of coins. 20% of the coins are in ₹5, 25% in ₹10, and 15% in ₹2, and the remaining ₹1 are in denominations. Find the number of coins of ₹1.",
    question_text_hi: "राजू के पास सिक्कों के रूप में ₹210 हैं। सिक्कों का 20% ₹5 के रूप में, 25% ₹10 के रूप में, और 15% ₹2 के रूप में हैं, तथा शेष ₹1 के सिक्के हैं। ₹1 के सिक्कों की संख्या ज्ञात कीजिए।",
    options: {
      a: "24",
      b: "22",
      c: "25",
      d: "20"
    },
    options_hi: {
      a: "24",
      b: "22",
      c: "25",
      d: "20"
    },
    correct_option: "d",
    solution_text: "Remaining ₹1 coins = 100 - (20 + 25 + 15) = 40%.\nRatio of coins (₹5 : ₹10 : ₹2 : ₹1) = 20 : 25 : 15 : 40 = 4 : 5 : 3 : 8.\nValue = 4x(5) + 5x(10) + 3x(2) + 8x(1) = 20x + 50x + 6x + 8x = 84x.\n84x = 210 => x = 210 / 84 = 2.5.\nNumber of ₹1 coins = 8x = 8 × 2.5 = 20.",
    solution_text_hi: "शेष ₹1 के सिक्के = 40%।\nअनुपात = 4 : 5 : 3 : 8।\nकुल मूल्य = 20x + 50x + 6x + 8x = 84x = 210 => x = 2.5।\n₹1 के सिक्के = 8 × 2.5 = 20।",
    shortcut_text: "84x = 210 => x = 2.5.\n₹1 coins = 8 × 2.5 = 20.",
    shortcut_text_hi: "84x = 210 => x = 2.5। ₹1 के सिक्के = 8 × 2.5 = 20।"
  },
  {
    question_number: 24,
    practice_set: "SET A",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Coin Denomination Evaluation",
    type_category_hi: "सिक्कों का मूल्य मूल्यांकन",
    question_text: "The value of coins of ₹1, 50 paise, and 25 paise is ₹93.75 and the ratio of their number is 3:4:5. Find the number of coins of each type.",
    question_text_hi: "₹1, 50 पैसे और 25 पैसे के सिक्कों का मूल्य ₹93.75 है और उनकी संख्या का अनुपात 3:4:5 है। प्रत्येक प्रकार के सिक्कों की संख्या ज्ञात कीजिए।",
    options: {
      a: "42, 56, 70",
      b: "45, 60, 75",
      c: "40, 70, 75",
      d: "46, 58, 75"
    },
    options_hi: {
      a: "42, 56, 70",
      b: "45, 60, 75",
      c: "40, 70, 75",
      d: "46, 58, 75"
    },
    correct_option: "b",
    solution_text: "Value: 3x(1) + 4x(0.50) + 5x(0.25) = 3x + 2x + 1.25x = 6.25x.\n6.25x = 93.75 => x = 93.75 / 6.25 = 15.\nCoins: ₹1 = 3 × 15 = 45, 50p = 4 × 15 = 60, 25p = 5 × 15 = 75.",
    solution_text_hi: "कुल मूल्य = 3x + 2x + 1.25x = 6.25x = 93.75 => x = 15।\nसिक्के = 45, 60, 75।",
    shortcut_text: "93.75 / 6.25 = 15.\n3 × 15 = 45, 4 × 15 = 60, 5 × 15 = 75.",
    shortcut_text_hi: "93.75 / 6.25 = 15। सिक्के = 45, 60, 75।"
  },

  // ==========================================
  // LEVEL 5: PYQ++ (Q25 to Q30)
  // ==========================================
  {
    question_number: 25,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 1",
    type_category: "Algebraic Componendo & Dividendo",
    type_category_hi: "बीजगणितीय योगांतरानुपात",
    question_text: "If (m+n):(m-n) = 7:3, then (m³+n³):(m³-n³) = ?",
    question_text_hi: "यदि (m+n):(m-n) = 7:3 है, तो (m³+n³):(m³-n³) = ?",
    options: {
      a: "133:117",
      b: "117:13",
      c: "117:133",
      d: "17:133"
    },
    options_hi: {
      a: "133:117",
      b: "117:13",
      c: "117:133",
      d: "17:133"
    },
    correct_option: "a",
    solution_text: "(m + n) / (m - n) = 7 / 3.\nBy Componendo & Dividendo: m / n = (7 + 3) / (7 - 3) = 10 / 4 = 5 / 2.\nSubstitute m = 5, n = 2:\n(m³ + n³) / (m³ - n³) = (5³ + 2³) / (5³ - 2³) = (125 + 8) / (125 - 8) = 133 / 117.",
    solution_text_hi: "योगांतरानुपात से: m/n = (7+3)/(7-3) = 10/4 = 5/2।\n(5³ + 2³) / (5³ - 2³) = (125 + 8) / (125 - 8) = 133 / 117।",
    shortcut_text: "m = 5, n = 2.\n125 + 8 = 133 and 125 - 8 = 117.\nRatio = 133 : 117.",
    shortcut_text_hi: "m=5, n=2। 125+8=133 और 125-8=117 => 133 : 117।"
  },
  {
    question_number: 26,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 1",
    type_category: "Cubic Ratio to Base Ratio",
    type_category_hi: "घन अनुपात से मूल अनुपात",
    question_text: "If (a³+b³):(a³-b³) = 185:158, then a:b = ?",
    question_text_hi: "यदि (a³+b³):(a³-b³) = 185:158 है, तो a:b = ?",
    options: {
      a: "5:4",
      b: "2:3",
      c: "10:2",
      d: "7:3"
    },
    options_hi: {
      a: "5:4",
      b: "2:3",
      c: "10:2",
      d: "7:3"
    },
    correct_option: "d",
    solution_text: "By Componendo & Dividendo:\n(a³ + b³ + a³ - b³) / (a³ + b³ - (a³ - b³)) = (185 + 158) / (185 - 158)\n2a³ / 2b³ = 343 / 27\na³ / b³ = 343 / 27\na / b = ∛(343 / 27) = 7 / 3.\nTherefore, a : b = 7 : 3.",
    solution_text_hi: "योगांतरानुपात से:\n2a³ / 2b³ = 343 / 27 => a³/b³ = 343/27।\na/b = ∛(343/27) = 7/3।\nअतः a : b = 7 : 3।",
    shortcut_text: "a³ / b³ = (185 + 158) / (185 - 158) = 343 / 27 = 7³ / 3³.\na : b = 7 : 3.",
    shortcut_text_hi: "a³/b³ = 343/27 = 7³/3³ => a : b = 7 : 3।"
  },
  {
    question_number: 27,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 4",
    type_category: "Mean Proportional Evaluation",
    type_category_hi: "मध्यानुपात मूल्यांकन",
    question_text: "If 49:x :: x:81, and 64:y :: y:169, where x and y are both natural numbers, then find the value of 2x + 3y.",
    question_text_hi: "यदि 49:x::x:81 और 64:y::y:169 है, जहाँ x और y दोनों प्राकृत संख्याएँ हैं, तो 2x+3y का मान ज्ञात कीजिए।",
    options: {
      a: "348",
      b: "438",
      c: "126",
      d: "312"
    },
    options_hi: {
      a: "348",
      b: "438",
      c: "126",
      d: "312"
    },
    correct_option: "b",
    solution_text: "x is the mean proportional of 49 and 81:\nx² = 49 × 81 => x = √(49 × 81) = 7 × 9 = 63.\ny is the mean proportional of 64 and 169:\ny² = 64 × 169 => y = √(64 × 169) = 8 × 13 = 104.\n2x + 3y = 2(63) + 3(104) = 126 + 312 = 438.",
    solution_text_hi: "x = √(49 × 81) = 7 × 9 = 63।\ny = √(64 × 169) = 8 × 13 = 104।\n2x + 3y = 2(63) + 3(104) = 126 + 312 = 438।",
    shortcut_text: "x = 7 × 9 = 63, y = 8 × 13 = 104.\n2(63) + 3(104) = 126 + 312 = 438.",
    shortcut_text_hi: "x = 63, y = 104। 2(63) + 3(104) = 126 + 312 = 438।"
  },
  {
    question_number: 28,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Continued Proportion Identity",
    type_category_hi: "सतत समानुपात सर्वसमिका",
    question_text: "If a, b, c, and d are in continued proportion, then (ma³ + nb³ - rc³) : (mb³ + nc³ - rd³) = ?",
    question_text_hi: "यदि a, b, c और d सतत समानुपात में हैं, तो (ma³+nb³-rc³):(mb³+nc³-rd³) = ?",
    options: {
      a: "d:a",
      b: "b:c",
      c: "a:d",
      d: "c:b"
    },
    options_hi: {
      a: "d:a",
      b: "b:c",
      c: "a:d",
      d: "c:b"
    },
    correct_option: "c",
    solution_text: "Let a/b = b/c = c/d = k.\nThen a = bk, b = ck, c = dk => a = dk³, b = dk², c = dk.\nNumerator = m(dk³)³ + n(dk²)³ - r(dk)³ = k³ [m(dk²)³ + n(dk)³ - rd³]\nDenominator = mb³ + nc³ - rd³ = m(dk²)³ + n(dk)³ - rd³.\nRatio = k³ = (a/b) × (b/c) × (c/d) = a / d = a : d.",
    solution_text_hi: "माना a/b = b/c = c/d = k।\nतब a = dk³, b = dk², c = dk।\nअंश = k³ × (हर)।\nअतः अनुपात = k³ = (a/d) = a : d।",
    shortcut_text: "Standard property of continued proportion: Degree 3 homogeneous ratio evaluates to k³ = a/d.",
    shortcut_text_hi: "सतत समानुपात का मानक नियम: घात 3 का समघातीय अनुपात k³ = a/d होता है।"
  },
  {
    question_number: 29,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Cyclic Sum Ratio with Sum Constraint",
    type_category_hi: "चक्रीय योग अनुपात और प्रतिबंध",
    question_text: "If (a+b):(b+c):(c+a) is 6:7:8 and also a+b+c = 14, then what is the value of c?",
    question_text_hi: "यदि (a+b):(b+c):(c+a) = 6:7:8 है और a+b+c = 14 भी है, तो c का मान क्या है?",
    options: {
      a: "8",
      b: "10",
      c: "6",
      d: "12"
    },
    options_hi: {
      a: "8",
      b: "10",
      c: "6",
      d: "12"
    },
    correct_option: "c",
    solution_text: "Let a+b = 6k, b+c = 7k, c+a = 8k.\nAdding all three: 2(a + b + c) = 21k.\nGiven a + b + c = 14 => 2(14) = 21k => 28 = 21k => k = 4/3.\na + b = 6k = 6 × (4/3) = 8.\nc = (a + b + c) - (a + b) = 14 - 8 = 6.",
    solution_text_hi: "तीनों को जोड़ने पर: 2(a + b + c) = 21k => 28 = 21k => k = 4/3।\na + b = 6 × (4/3) = 8।\nc = 14 - 8 = 6।",
    shortcut_text: "c = (a+b+c) - (a+b) = 14 - (6 × 28/21) = 14 - 8 = 6.",
    shortcut_text_hi: "c = 14 - 8 = 6।"
  },
  {
    question_number: 30,
    practice_set: "SET A",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Compound Partition (Savings to Funds)",
    type_category_hi: "मिश्रित विभाजन (बचत से फंड)",
    question_text: "The ratio of savings and expenditure of Kiran is 7:13 and his monthly income is ₹1,80,000. The savings are divided in the ratio of 4:3 between Mutual Funds and Equity. What is the amount of money saved in the form of Mutual Funds?",
    question_text_hi: "किरण की बचत और खर्च का अनुपात 7:13 है और उसकी मासिक आय ₹1,80,000 है। बचत को म्यूचुअल फंड और इक्विटी के बीच 4:3 के अनुपात में बांटा गया है। म्यूचुअल फंड के रूप में बचाई गई राशि क्या है?",
    options: {
      a: "₹63,000",
      b: "₹36,000",
      c: "₹45,000",
      d: "₹39,000"
    },
    options_hi: {
      a: "₹63,000",
      b: "₹36,000",
      c: "₹45,000",
      d: "₹39,000"
    },
    correct_option: "b",
    solution_text: "Income units = 7 + 13 = 20 units = ₹1,80,000 => 1 unit = ₹9,000.\nTotal savings = 7 × 9000 = ₹63,000.\nSavings divided into Mutual Funds & Equity in 4:3 (total 7 parts):\n1 part = 63000 / 7 = ₹9,000.\nMutual Funds = 4 × 9000 = ₹36,000.",
    solution_text_hi: "कुल आय = 20 इकाई = ₹1,80,000 => 1 इकाई = ₹9,000।\nकुल बचत = 7 × 9000 = ₹63,000।\nम्यूचुअल फंड = (4/7) × 63000 = ₹36,000।",
    shortcut_text: "Mutual Funds = (7/20) × (4/7) × 180,000 = (4/20) × 180,000 = (1/5) × 180,000 = ₹36,000.",
    shortcut_text_hi: "म्यूचुअल फंड = (1/5) × 1,80,000 = ₹36,000।"
  }
];

const RATIO_SET_B_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MODERATE (Q1 to Q4 / Q31 to Q34)
  // ==========================================
  {
    question_number: 1,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Bridging Three Quantities",
    type_category_hi: "तीन राशियों का मिलान",
    question_text: "In an alloy of German Silver, the ratio of Copper and Zinc was 19:6 while the ratio of Nickel and Zinc was 7:4. Then what was the ratio of Copper, Zinc, and Nickel?",
    question_text_hi: "जर्मन सिल्वर की एक मिश्र धातु में तांबा और जस्ता का अनुपात 19:6 था जबकि निकल और जस्ता का अनुपात 7:4 था। तो तांबा, जस्ता और निकल का अनुपात क्या था?",
    options: {
      a: "19:44:4",
      b: "19:24:7",
      c: "38:12:21",
      d: "133:42:24"
    },
    options_hi: {
      a: "19:44:4",
      b: "19:24:7",
      c: "38:12:21",
      d: "133:42:24"
    },
    correct_option: "c",
    solution_text: "Copper : Zinc = 19 : 6.\nNickel : Zinc = 7 : 4 => Zinc : Nickel = 4 : 7.\nTo make Zinc equal, LCM of 6 and 4 is 12:\nCopper : Zinc = (19 × 2) : (6 × 2) = 38 : 12\nZinc : Nickel = (4 × 3) : (7 × 3) = 12 : 21\nRatio Copper : Zinc : Nickel = 38 : 12 : 21.",
    solution_text_hi: "तांबा : जस्ता = 19 : 6। निकल : जस्ता = 7 : 4 => जस्ता : निकल = 4 : 7।\nजस्ता को समान (12) करने पर:\nतांबा : जस्ता = 38 : 12\nजस्ता : निकल = 12 : 21\nअतः तांबा : जस्ता : निकल = 38 : 12 : 21।",
    shortcut_text: "Copper : Zinc : Nickel = (19×4) : (6×4) : (6×7) = 76 : 24 : 42 = 38 : 12 : 21.",
    shortcut_text_hi: "तांबा : जस्ता : निकल = (19×4) : (6×4) : (6×7) = 76 : 24 : 42 = 38 : 12 : 21।"
  },
  {
    question_number: 2,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Percentage Equation to Ratio",
    type_category_hi: "प्रतिशत समीकरण से अनुपात",
    question_text: "If 15% of x = 25% of y = 50% of z, then find the value of x:y:z.",
    question_text_hi: "यदि x का 15% = y का 25% = z का 50% है, तो x:y:z का मान ज्ञात कीजिए।",
    options: {
      a: "3:5:10",
      b: "10:6:3",
      c: "10:5:3",
      d: "3:2:1"
    },
    options_hi: {
      a: "3:5:10",
      b: "10:6:3",
      c: "10:5:3",
      d: "3:2:1"
    },
    correct_option: "b",
    solution_text: "Divide by 5%:\n3x = 5y = 10z = k.\nx = k/3, y = k/5, z = k/10.\nLCM of 3, 5, 10 is 30.\nx : y : z = (30/3) : (30/5) : (30/10) = 10 : 6 : 3.",
    solution_text_hi: "5% से भाग देने पर: 3x = 5y = 10z = k।\n3, 5, 10 का LCM 30 है।\nx : y : z = 10 : 6 : 3।",
    shortcut_text: "LCM of coefficients 3, 5, 10 is 30.\nx = 30/3 = 10, y = 30/5 = 6, z = 30/10 = 3 => 10 : 6 : 3.",
    shortcut_text_hi: "गुणांकों (3, 5, 10) का LCM = 30 => x = 10, y = 6, z = 3 => 10 : 6 : 3।"
  },
  {
    question_number: 3,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Direct Denominator Ratio",
    type_category_hi: "प्रत्यक्ष हर अनुपात",
    question_text: "If A/4 = B/5 = C/6, then A:B:C is:",
    question_text_hi: "यदि A/4 = B/5 = C/6 है, तो A:B:C क्या है?",
    options: {
      a: "4:5:6",
      b: "5:6:4",
      c: "4:6:5",
      d: "4:8:9"
    },
    options_hi: {
      a: "4:5:6",
      b: "5:6:4",
      c: "4:6:5",
      d: "4:8:9"
    },
    correct_option: "a",
    solution_text: "Let A/4 = B/5 = C/6 = k.\nThen A = 4k, B = 5k, C = 6k.\nRatio A : B : C = 4 : 5 : 6.",
    solution_text_hi: "माना A/4 = B/5 = C/6 = k।\nA = 4k, B = 5k, C = 6k => A : B : C = 4 : 5 : 6।",
    shortcut_text: "When numerators have coefficient 1, the denominators directly give the ratio: 4 : 5 : 6.",
    shortcut_text_hi: "जब अंशों का गुणांक 1 हो, तो हर सीधे अनुपात दर्शाते हैं: 4 : 5 : 6।"
  },
  {
    question_number: 4,
    practice_set: "SET B",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Sum of Squares of Ratios",
    type_category_hi: "अनुपातों के वर्गों का योग",
    question_text: "If the ratio of three positive numbers is 3:7:8 and the sum of their squares is 7808. Then find the smallest number among them.",
    question_text_hi: "यदि तीन धनात्मक संख्याओं का अनुपात 3:7:8 है और उनके वर्गों का योग 7808 है, तो उनमें से सबसे छोटी संख्या ज्ञात कीजिए।",
    options: {
      a: "24",
      b: "27",
      c: "30",
      d: "36"
    },
    options_hi: {
      a: "24",
      b: "27",
      c: "30",
      d: "36"
    },
    correct_option: "a",
    solution_text: "Let the numbers be 3x, 7x, 8x.\nSum of squares = (3x)² + (7x)² + (8x)² = 9x² + 49x² + 64x² = 122x².\n122x² = 7808 => x² = 7808 / 122 = 64 => x = 8.\nSmallest number = 3x = 3 × 8 = 24.",
    solution_text_hi: "संख्याएँ 3x, 7x, 8x हैं।\nवर्गों का योग = 9x² + 49x² + 64x² = 122x² = 7808 => x² = 64 => x = 8।\nसबसे छोटी संख्या = 3 × 8 = 24।",
    shortcut_text: "Smallest number is a multiple of 3. x = √(7808 / 122) = √64 = 8.\n3 × 8 = 24.",
    shortcut_text_hi: "x = √(7808 / 122) = 8। सबसे छोटी संख्या = 3 × 8 = 24।"
  },

  // ==========================================
  // LEVEL 2: MORE THAN MODERATE (Q5 to Q9 / Q35 to Q39)
  // ==========================================
  {
    question_number: 5,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 3",
    type_category: "Common Addition in Two Terms",
    type_category_hi: "दो पदों में समान वृद्धि",
    question_text: "The ratio of two numbers is 5:6. When 6 is added to both numbers the ratio becomes 7:8, then the numbers are:",
    question_text_hi: "दो संख्याओं का अनुपात 5:6 है। जब दोनों संख्याओं में 6 जोड़ा जाता है तो अनुपात 7:8 हो जाता है, तो संख्याएँ हैं:",
    options: {
      a: "10, 12",
      b: "20, 24",
      c: "15, 18",
      d: "5, 6"
    },
    options_hi: {
      a: "10, 12",
      b: "20, 24",
      c: "15, 18",
      d: "5, 6"
    },
    correct_option: "c",
    solution_text: "(5x + 6) / (6x + 6) = 7 / 8\n8(5x + 6) = 7(6x + 6)\n40x + 48 = 42x + 42\n2x = 6 => x = 3.\nFirst number = 5 × 3 = 15, Second number = 6 × 3 = 18.",
    solution_text_hi: "(5x + 6) / (6x + 6) = 7 / 8 => 40x + 48 = 42x + 42 => 2x = 6 => x = 3।\nसंख्याएँ 15 और 18 हैं।",
    shortcut_text: "Both ratios have the same difference: 7 - 5 = 2 units, 8 - 6 = 2 units.\n2 units = 6 => 1 unit = 3.\nNumbers = 5 × 3 = 15 and 6 × 3 = 18.",
    shortcut_text_hi: "दोनों में 2 इकाई की वृद्धि हुई है। 2 इकाई = 6 => 1 इकाई = 3।\nसंख्याएँ = 15 और 18।"
  },
  {
    question_number: 6,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 3",
    type_category: "Single Class Percentage Increase",
    type_category_hi: "एक वर्ग में प्रतिशत वृद्धि",
    question_text: "The ratio of boys and girls in the class is 4:5. If 4 new boys are included in the class then the number of boys increases by 20%. Find the number of girls in the class.",
    question_text_hi: "कक्षा में लड़कों और लड़कियों का अनुपात 4:5 है। यदि कक्षा में 4 नए लड़के शामिल किए जाते हैं तो लड़कों की संख्या में 20% की वृद्धि होती है। कक्षा में लड़कियों की संख्या ज्ञात कीजिए।",
    options: {
      a: "30",
      b: "35",
      c: "20",
      d: "25"
    },
    options_hi: {
      a: "30",
      b: "35",
      c: "20",
      d: "25"
    },
    correct_option: "d",
    solution_text: "Let boys = 4x, girls = 5x.\n20% of boys = 4 new boys => 0.20 × (4x) = 4 => 0.8x = 4 => x = 5.\nNumber of girls = 5x = 5 × 5 = 25.",
    solution_text_hi: "लड़के = 4x, लड़कियाँ = 5x।\nलड़कों का 20% = 4 => 0.20 × 4x = 4 => x = 5।\nलड़कियों की संख्या = 5 × 5 = 25।",
    shortcut_text: "20% = 4 boys => 100% boys = 4 × 5 = 20 boys.\nBoys : Girls = 4 : 5 => 4 units = 20 => 1 unit = 5.\nGirls = 5 × 5 = 25.",
    shortcut_text_hi: "20% = 4 लड़के => कुल लड़के = 20।\n4 इकाई = 20 => लड़कियाँ = 5 × 5 = 25।"
  },
  {
    question_number: 7,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 3",
    type_category: "Milk-Water Ratio Revision",
    type_category_hi: "दूध-पानी अनुपात संशोधन",
    question_text: "In a mixture of 25 liters, the ratio of milk and water is 4:1. How many liters of milk should be added more so that the ratio becomes 16:1?",
    question_text_hi: "25 लीटर के मिश्रण में दूध और पानी का अनुपात 4:1 है। इसमें कितने लीटर दूध और मिलाया जाना चाहिए ताकि अनुपात 16:1 हो जाए?",
    options: {
      a: "21",
      b: "25",
      c: "60",
      d: "36"
    },
    options_hi: {
      a: "21",
      b: "25",
      c: "60",
      d: "36"
    },
    correct_option: "c",
    solution_text: "Initial mixture = 25 L.\nMilk = (4/5) × 25 = 20 L, Water = (1/5) × 25 = 5 L.\nLet x liters of milk be added:\n(20 + x) / 5 = 16 / 1 => 20 + x = 80 => x = 60 liters.",
    solution_text_hi: "दूध = 20 लीटर, पानी = 5 लीटर।\nमाना x लीटर दूध मिलाया गया:\n(20 + x) / 5 = 16 / 1 => 20 + x = 80 => x = 60 लीटर।",
    shortcut_text: "Water is unchanged at 5 L. In new ratio 16:1, 1 unit of water = 5 L.\nRequired milk = 16 units = 16 × 5 = 80 L.\nAdded milk = 80 - 20 = 60 L.",
    shortcut_text_hi: "पानी 5 लीटर स्थिर है। 1 इकाई = 5 लीटर => नया दूध = 16 × 5 = 80 लीटर।\nमिलाया गया दूध = 80 - 20 = 60 लीटर।"
  },
  {
    question_number: 8,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 3",
    type_category: "Equal Salary Increment",
    type_category_hi: "समान वेतन वृद्धि",
    question_text: "The salary of Charan and Rajat is in the ratio of 5:4. If the salary of each is increased by 3,000 then their new ratio becomes 6:5. What is the salary of Charan?",
    question_text_hi: "चरण और रजत का वेतन 5:4 के अनुपात में है। यदि प्रत्येक के वेतन में 3,000 की वृद्धि की जाती है तो उनका नया अनुपात 6:5 हो जाता है। चरण का वेतन क्या है?",
    options: {
      a: "₹15,000",
      b: "₹12,000",
      c: "₹8,000",
      d: "₹20,000"
    },
    options_hi: {
      a: "₹15,000",
      b: "₹12,000",
      c: "₹8,000",
      d: "₹20,000"
    },
    correct_option: "a",
    solution_text: "(5x + 3000) / (4x + 3000) = 6 / 5\n5(5x + 3000) = 6(4x + 3000)\n25x + 15000 = 24x + 18000\nx = 3000.\nCharan's salary = 5x = 5 × 3000 = ₹15,000.",
    solution_text_hi: "(5x + 3000) / (4x + 3000) = 6 / 5 => 25x + 15000 = 24x + 18000 => x = 3000।\nचरण का वेतन = 5 × 3000 = ₹15,000।",
    shortcut_text: "Both ratios increase by 1 unit: 6 - 5 = 1, 5 - 4 = 1.\n1 unit = ₹3,000.\nCharan's salary = 5 units = 5 × 3000 = ₹15,000.",
    shortcut_text_hi: "दोनों अनुपातों में 1 इकाई की वृद्धि हुई = ₹3,000।\nचरण = 5 × 3000 = ₹15,000।"
  },
  {
    question_number: 9,
    practice_set: "SET B",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 3",
    type_category: "Single Ball Addition",
    type_category_hi: "गेंदों की एकतरफा वृद्धि",
    question_text: "The ratio of red ball and green ball in a bag is 15:26. If 12 more green balls are put in the bag then the ratio of red ball and green ball becomes 1:2. How many red balls are in the bag?",
    question_text_hi: "एक बैग में लाल गेंद और हरी गेंद का अनुपात 15:26 है। यदि बैग में 12 हरी गेंदें और डाल दी जाएं तो लाल गेंद और हरी गेंद का अनुपात 1:2 हो जाता है। बैग में कितनी लाल गेंदें हैं?",
    options: {
      a: "60",
      b: "30",
      c: "45",
      d: "15"
    },
    options_hi: {
      a: "60",
      b: "30",
      c: "45",
      d: "15"
    },
    correct_option: "c",
    solution_text: "Let Red = 15x, Green = 26x.\n15x / (26x + 12) = 1 / 2\n30x = 26x + 12\n4x = 12 => x = 3.\nNumber of red balls = 15x = 15 × 3 = 45.",
    solution_text_hi: "लाल = 15x, हरी = 26x।\n15x / (26x + 12) = 1 / 2 => 30x = 26x + 12 => 4x = 12 => x = 3।\nलाल गेंदें = 15 × 3 = 45।",
    shortcut_text: "Multiply 1:2 by 15 to make Red equal: 15 : 30.\nGreen increased by 30 - 26 = 4 units = 12 balls => 1 unit = 3 balls.\nRed balls = 15 units = 15 × 3 = 45.",
    shortcut_text_hi: "लाल गेंदों को समान (15) करने पर नया अनुपात 15:30 हुआ।\nहरी गेंदें बढ़ीं = 4 इकाई = 12 => 1 इकाई = 3।\nलाल गेंदें = 15 × 3 = 45।"
  },

  // ==========================================
  // LEVEL 3: INSPIRED FROM PYQs (Q10 to Q14 / Q40 to Q44)
  // ==========================================
  {
    question_number: 10,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Single Component Shift (Red Balls)",
    type_category_hi: "लाल गेंदों का संवर्धन",
    question_text: "The ratio of red balls and green balls in a bag is 4:9. If 7 more red balls are added to the bag, the new ratio of red and green balls will become 5:6. How many green balls are there in the bag?",
    question_text_hi: "एक बैग में लाल गेंदों और हरी गेंदों का अनुपात 4:9 है। यदि बैग में 7 लाल गेंदें और डाल दी जाएं, तो लाल और हरी गेंदों का नया अनुपात 5:6 हो जाएगा। बैग में कितनी हरी गेंदें हैं?",
    options: {
      a: "9",
      b: "18",
      c: "12",
      d: "27"
    },
    options_hi: {
      a: "9",
      b: "18",
      c: "12",
      d: "27"
    },
    correct_option: "b",
    solution_text: "(4x + 7) / 9x = 5 / 6\n6(4x + 7) = 5(9x)\n24x + 42 = 45x\n21x = 42 => x = 2.\nNumber of green balls = 9x = 9 × 2 = 18.",
    solution_text_hi: "(4x + 7) / 9x = 5 / 6 => 24x + 42 = 45x => 21x = 42 => x = 2।\nहरी गेंदें = 9 × 2 = 18।",
    shortcut_text: "Green balls must be a multiple of 9 (9, 18, 27).\nIf green = 18 => initial red = 8. Adding 7 red gives 15 red. 15 : 18 = 5 : 6 (Matches!).",
    shortcut_text_hi: "हरी गेंदें 9 का गुणज होनी चाहिए। 18 रखने पर: लाल = 8, 8+7 = 15, अनुपात = 15:18 = 5:6।"
  },
  {
    question_number: 11,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Sugar-Flour Ratio Shift",
    type_category_hi: "चीनी-आटा अनुपात परिवर्तन",
    question_text: "In 9 kg of dough, the initial ratio of sugar and flour is 2:7. If John added more sugar in that then the ratio of the mixture becomes 2:5. How much sugar did John add later?",
    question_text_hi: "9 किलो आटे (dough) में चीनी और आटे का प्रारंभिक अनुपात 2:7 है। यदि जॉन ने उसमें और चीनी मिला दी तो मिश्रण का अनुपात 2:5 हो जाता है। जॉन ने बाद में कितनी चीनी मिलाई?",
    options: {
      a: "750 g",
      b: "1.2 kg",
      c: "1 kg",
      d: "800 g"
    },
    options_hi: {
      a: "750 g",
      b: "1.2 kg",
      c: "1 kg",
      d: "800 g"
    },
    correct_option: "d",
    solution_text: "Total dough = 9 kg. Sugar = 2 kg, Flour = 7 kg.\nLet x kg of sugar be added:\n(2 + x) / 7 = 2 / 5 => 5(2 + x) = 14 => 10 + 5x = 14 => 5x = 4 => x = 4/5 kg = 0.8 kg = 800 g.",
    solution_text_hi: "चीनी = 2 किलो, आटा = 7 किलो।\n(2 + x) / 7 = 2 / 5 => 10 + 5x = 14 => 5x = 4 => x = 0.8 किलो = 800 ग्राम।",
    shortcut_text: "Flour is constant at 7 kg. In new ratio, 5 units = 7 kg => 1 unit = 1.4 kg.\nNew sugar = 2 units = 2.8 kg.\nAdded sugar = 2.8 - 2.0 = 0.8 kg = 800 g.",
    shortcut_text_hi: "आटा 7 किलो स्थिर है। 5 इकाई = 7 किलो => 1 इकाई = 1.4 किलो।\nनई चीनी = 2.8 किलो => जोड़ी गई चीनी = 800 ग्राम।"
  },
  {
    question_number: 12,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Dual Percentage Expansion",
    type_category_hi: "दोहरा प्रतिशत विस्तार",
    question_text: "In a firm, the ratio of male and female members was 4:5. The firm decided to increase the number of males by 80% and the number of females by 60%, then now in the firm the new ratio of male and female members will be:",
    question_text_hi: "एक फर्म में पुरुष और महिला सदस्यों का अनुपात 4:5 था। फर्म ने पुरुषों की संख्या में 80% और महिलाओं की संख्या में 60% की वृद्धि करने का निर्णय लिया, तो अब फर्म में पुरुष और महिला सदस्यों का नया अनुपात क्या होगा?",
    options: {
      a: "8:10",
      b: "18:15",
      c: "9:10",
      d: "15:16"
    },
    options_hi: {
      a: "8:10",
      b: "18:15",
      c: "9:10",
      d: "15:16"
    },
    correct_option: "c",
    solution_text: "Let male = 40, female = 50.\nNew male = 40 × 1.80 = 72.\nNew female = 50 × 1.60 = 80.\nNew ratio = 72 : 80 = 9 : 10.",
    solution_text_hi: "माना पुरुष = 40, महिला = 50।\nनए पुरुष = 40 × 1.80 = 72।\nनई महिला = 50 × 1.60 = 80।\nनया अनुपात = 72 : 80 = 9 : 10।",
    shortcut_text: "Ratio = (4 × 180) : (5 × 160) = (4 × 9) : (5 × 8) = 36 : 40 = 9 : 10.",
    shortcut_text_hi: "(4 × 1.8) : (5 × 1.6) = 7.2 : 8.0 = 9 : 10।"
  },
  {
    question_number: 13,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Personnel Transfer Equation",
    type_category_hi: "कर्मचारी स्थानांतरण समीकरण",
    question_text: "In a firm, the ratio of male and female officers is in the ratio of 4:7. If 50 male officers and 100 female officers are shifted to another firm, then the ratio of male and female officers becomes 7:12. Find the number of male officers before shifting in the firm.",
    question_text_hi: "एक फर्म में पुरुष और महिला अधिकारियों का अनुपात 4:7 है। यदि 50 पुरुष अधिकारियों और 100 महिला अधिकारियों को दूसरी फर्म में स्थानांतरित कर दिया जाता है, तो पुरुष और महिला अधिकारियों का अनुपात 7:12 हो जाता है। फर्म में स्थानांतरण से पहले पुरुष अधिकारियों की संख्या ज्ञात कीजिए।",
    options: {
      a: "450",
      b: "400",
      c: "300",
      d: "500"
    },
    options_hi: {
      a: "450",
      b: "400",
      c: "300",
      d: "500"
    },
    correct_option: "b",
    solution_text: "(4x - 50) / (7x - 100) = 7 / 12\n12(4x - 50) = 7(7x - 100)\n48x - 600 = 49x - 700\nx = 100.\nMale officers before shifting = 4x = 4 × 100 = 400.",
    solution_text_hi: "(4x - 50) / (7x - 100) = 7 / 12 => 48x - 600 = 49x - 700 => x = 100।\nस्थानांतरण से पहले पुरुष = 4 × 100 = 400।",
    shortcut_text: "Cross Multiplication:\n(4 × 12 - 7 × 7) units = 7(-100) - 12(-50) => -1 unit = -100 => 1 unit = 100.\nMale officers = 4 × 100 = 400.",
    shortcut_text_hi: "क्रॉस गुणा: 1 इकाई = 100 => पुरुष = 4 × 100 = 400।"
  },
  {
    question_number: 14,
    practice_set: "SET B",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Unit Exchange Ratio",
    type_category_hi: "पारस्परिक विनिमय अनुपात",
    question_text: "An amount was divided between Ethen and Jen in the ratio of 4:7. If Jen gives Ethen 1 rupee, then the ratio changes to 7:12. What is the total amount?",
    question_text_hi: "एक राशि को एथन और जेन के बीच 4:7 के अनुपात में बांटा गया। यदि जेन एथन को 1 रुपया देती है, तो अनुपात 7:12 में बदल जाता है। कुल राशि क्या है?",
    options: {
      a: "₹209",
      b: "₹190",
      c: "₹198",
      d: "₹220"
    },
    options_hi: {
      a: "₹209",
      b: "₹190",
      c: "₹198",
      d: "₹220"
    },
    correct_option: "a",
    solution_text: "(4x + 1) / (7x - 1) = 7 / 12\n12(4x + 1) = 7(7x - 1)\n48x + 12 = 49x - 7\nx = 19.\nTotal amount = (4 + 7)x = 11x = 11 × 19 = ₹209.",
    solution_text_hi: "(4x + 1) / (7x - 1) = 7 / 12 => 48x + 12 = 49x - 7 => x = 19।\nकुल राशि = 11 × 19 = ₹209।",
    shortcut_text: "Total sum must be divisible by (4+7=11) and (7+12=19).\nLCM of 11 and 19 = 209. Directly ₹209!",
    shortcut_text_hi: "कुल राशि 11 और 19 दोनों से विभाज्य होनी चाहिए => LCM = 209। उत्तर = ₹209।"
  },

  // ==========================================
  // LEVEL 4: PYQ+ (Q15 to Q18 / Q45 to Q48)
  // ==========================================
  {
    question_number: 15,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Low Denomination Coins Total",
    type_category_hi: "निम्न मूल्य वर्ग सिक्कों का योग",
    question_text: "A bag contains 25 paise, 10 paise, and 5 paise coins in the ratio 1:2:3. If the bag has ₹30 in total then how many coins of 5 paise are there?",
    question_text_hi: "एक बैग में 25 पैसे, 10 पैसे और 5 पैसे के सिक्के 1:2:3 के अनुपात में हैं। यदि बैग में कुल ₹30 हैं तो 5 पैसे के कितने सिक्के हैं?",
    options: {
      a: "100",
      b: "200",
      c: "150",
      d: "50"
    },
    options_hi: {
      a: "100",
      b: "200",
      c: "150",
      d: "50"
    },
    correct_option: "c",
    solution_text: "Total value = x(0.25) + 2x(0.10) + 3x(0.05) = 0.25x + 0.20x + 0.15x = 0.60x.\n0.60x = 30 => x = 30 / 0.60 = 50.\n5 paise coins = 3x = 3 × 50 = 150.",
    solution_text_hi: "कुल मूल्य = 0.60x = 30 => x = 50।\n5 पैसे के सिक्के = 3 × 50 = 150।",
    shortcut_text: "Value per unit = 0.25 + 0.20 + 0.15 = 0.60.\nUnits = 30 / 0.60 = 50. Coins of 5p = 3 × 50 = 150.",
    shortcut_text_hi: "30 / 0.60 = 50। 5 पैसे के सिक्के = 3 × 50 = 150।"
  },
  {
    question_number: 16,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Coin Quantity from Value",
    type_category_hi: "मूल्य से सिक्कों की संख्या",
    question_text: "Suraj has the coin of 50 paise, ₹1, and ₹5 in the ratio of 8:5:9. Suraj has a total amount of ₹648. How many coins of 50 paise does he have?",
    question_text_hi: "सूरज के पास 50 पैसे, ₹1 और ₹5 के सिक्के 8:5:9 के अनुपात में हैं। सूरज के पास कुल ₹648 की राशि है। उसके पास 50 पैसे के कितने सिक्के हैं?",
    options: {
      a: "96",
      b: "84",
      c: "60",
      d: "108"
    },
    options_hi: {
      a: "96",
      b: "84",
      c: "60",
      d: "108"
    },
    correct_option: "a",
    solution_text: "Value = 8x(0.50) + 5x(1) + 9x(5) = 4x + 5x + 45x = 54x.\n54x = 648 => x = 648 / 54 = 12.\nNumber of 50 paise coins = 8x = 8 × 12 = 96.",
    solution_text_hi: "कुल मूल्य = 4x + 5x + 45x = 54x = 648 => x = 12।\n50 पैसे के सिक्के = 8 × 12 = 96।",
    shortcut_text: "54x = 648 => x = 12.\n50p coins = 8 × 12 = 96.",
    shortcut_text_hi: "54x = 648 => x = 12। 50 पैसे के सिक्के = 8 × 12 = 96।"
  },
  {
    question_number: 17,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 5",
    type_category: "Currency Note Distribution",
    type_category_hi: "करेंसी नोटों का वितरण",
    question_text: "In a bag of ₹10, ₹20, and ₹50 notes are kept in the ratio of 1:3:5. If the total value of money kept in the bag is ₹1920. What is the total number of ₹20 notes?",
    question_text_hi: "एक बैग में ₹10, ₹20 और ₹50 के नोट 1:3:5 के अनुपात में रखे गए हैं। यदि बैग में रखे धन का कुल मूल्य ₹1920 है, तो ₹20 के नोटों की कुल संख्या क्या है?",
    options: {
      a: "6",
      b: "30",
      c: "18",
      d: "12"
    },
    options_hi: {
      a: "6",
      b: "30",
      c: "18",
      d: "12"
    },
    correct_option: "c",
    solution_text: "Value = 1x(10) + 3x(20) + 5x(50) = 10x + 60x + 250x = 320x.\n320x = 1920 => x = 1920 / 320 = 6.\nNumber of ₹20 notes = 3x = 3 × 6 = 18.",
    solution_text_hi: "कुल मूल्य = 10x + 60x + 250x = 320x = 1920 => x = 6।\n₹20 के नोट = 3 × 6 = 18।",
    shortcut_text: "1920 / 320 = 6.\n₹20 notes = 3 × 6 = 18.",
    shortcut_text_hi: "1920 / 320 = 6। ₹20 के नोट = 3 × 6 = 18।"
  },
  {
    question_number: 18,
    practice_set: "SET B",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 1",
    type_category: "Chained Token Ratios",
    type_category_hi: "श्रृंखलाबद्ध टोकन अनुपात",
    question_text: "A bag contained red, green, and pink tokens. The ratio between red and green tokens was 15:32 while the ratio between pink and red tokens was 18:25. What was the ratio between green and pink tokens?",
    question_text_hi: "एक बैग में लाल, हरे और गुलाबी टोकन थे। लाल और हरे टोकन के बीच का अनुपात 15:32 था जबकि गुलाबी और लाल टोकन के बीच का अनुपात 18:25 था। हरे और गुलाबी टोकन के बीच का अनुपात क्या था?",
    options: {
      a: "80:27",
      b: "192:125",
      c: "16:9",
      d: "25:28"
    },
    options_hi: {
      a: "80:27",
      b: "192:125",
      c: "16:9",
      d: "25:28"
    },
    correct_option: "a",
    solution_text: "Green / Red = 32 / 15 and Red / Pink = 25 / 18.\nGreen / Pink = (Green / Red) × (Red / Pink)\n= (32 / 15) × (25 / 18) = (16 × 5) / (3 × 9) = 80 / 27.\nRatio Green : Pink = 80 : 27.",
    solution_text_hi: "हरा/लाल = 32/15, लाल/गुलाबी = 25/18।\nहरा/गुलाबी = (32/15) × (25/18) = 80/27।",
    shortcut_text: "(32/15) × (25/18) = (16/3) × (5/9) = 80 : 27.",
    shortcut_text_hi: "(32/15) × (25/18) = 80 : 27।"
  },

  // ==========================================
  // LEVEL 5: PYQ++ (Q19 to Q22 / Q49 to Q52)
  // ==========================================
  {
    question_number: 19,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Savings Allocation Ratio",
    type_category_hi: "बचत आबंटन अनुपात",
    question_text: "The ratio of savings and expenditure of Kiran is 7:13 and his monthly income is ₹1,80,000. The savings are divided in the ratio of 4:3 between Mutual Funds and Equity. What is the amount of money saved in the form of Mutual Funds?",
    question_text_hi: "किरण की बचत और खर्च का अनुपात 7:13 है और उसकी मासिक आय ₹1,80,000 है। बचत को म्यूचुअल फंड और इक्विटी के बीच 4:3 के अनुपात में बांटा गया है। म्यूचुअल फंड के रूप में बचाई गई राशि क्या है?",
    options: {
      a: "₹63,000",
      b: "₹36,000",
      c: "₹45,000",
      d: "₹39,000"
    },
    options_hi: {
      a: "₹63,000",
      b: "₹36,000",
      c: "₹45,000",
      d: "₹39,000"
    },
    correct_option: "b",
    solution_text: "Income units = 7 + 13 = 20 units = ₹1,80,000 => 1 unit = ₹9,000.\nTotal savings = 7 × 9000 = ₹63,000.\nMutual Funds = (4 / 7) × 63000 = ₹36,000.",
    solution_text_hi: "कुल आय = 20 इकाई = ₹1,80,000 => 1 इकाई = ₹9,000।\nकुल बचत = 7 × 9000 = ₹63,000।\nम्यूचुअल फंड = (4/7) × 63000 = ₹36,000।",
    shortcut_text: "Mutual Funds = (4/20) × 180,000 = ₹36,000.",
    shortcut_text_hi: "(4/20) × 1,80,000 = ₹36,000।"
  },
  {
    question_number: 20,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Dual Income-Expenditure Simultaneous System",
    type_category_hi: "दोहरी आय-व्यय युगपत प्रणाली",
    question_text: "The ratio of the income of Seema and Darshan is 7:5. They save ₹12,000 and ₹9,000 respectively. If the ratio of their expenses is 17:12, then find the total expenditure (in ₹) of Seema and Darshan.",
    question_text_hi: "सीमा और दर्शन की आय का अनुपात 7:5 है। वे क्रमशः ₹12,000 और ₹9,000 बचाते हैं। यदि उनके खर्च का अनुपात 17:12 है, तो सीमा और दर्शन का कुल खर्च (₹ में) ज्ञात कीजिए।",
    options: {
      a: "₹93,000",
      b: "₹81,000",
      c: "₹87,000",
      d: "₹75,000"
    },
    options_hi: {
      a: "₹93,000",
      b: "₹81,000",
      c: "₹87,000",
      d: "₹75,000"
    },
    correct_option: "c",
    solution_text: "Let incomes be 7x and 5x, and expenditures be 17y and 12y.\n7x - 17y = 12000  --- (1)\n5x - 12y = 9000   --- (2)\nMultiply (1) by 5 and (2) by 7:\n35x - 85y = 60000\n35x - 84y = 63000\nSubtracting: y = 3000.\nTotal expenditure = 17y + 12y = 29y = 29 × 3000 = ₹87,000.",
    solution_text_hi: "7x - 17y = 12000 तथा 5x - 12y = 9000।\nहल करने पर: y = 3000।\nकुल खर्च = 17y + 12y = 29y = 29 × 3000 = ₹87,000।",
    shortcut_text: "Total expenditure = 17 + 12 = 29 units.\nTotal expenditure must be a multiple of 29. 87,000 / 29 = 3,000. Exactly matches Option C!",
    shortcut_text_hi: "कुल खर्च 29 का गुणज होना चाहिए। 87,000 / 29 = 3,000। केवल ₹87,000 ही 29 से विभाज्य है!"
  },
  {
    question_number: 21,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 4",
    type_category: "Third & Mean Proportional Ratio",
    type_category_hi: "तृतीय और मध्य समानुपात",
    question_text: "Find the ratio between the third proportion of 20 and 50 and the median proportion of 9 and 16.",
    question_text_hi: "20 और 50 के तृतीय समानुपात और 9 और 16 के मध्य समानुपात के बीच का अनुपात ज्ञात कीजिए।",
    options: {
      a: "25:2",
      b: "12:125",
      c: "2:25",
      d: "125:12"
    },
    options_hi: {
      a: "25:2",
      b: "12:125",
      c: "2:25",
      d: "125:12"
    },
    correct_option: "d",
    solution_text: "Third proportion of a and b = b² / a = (50 × 50) / 20 = 2500 / 20 = 125.\nMean (median) proportion of 9 and 16 = √(9 × 16) = 3 × 4 = 12.\nRequired ratio = 125 : 12.",
    solution_text_hi: "20 और 50 का तृतीय समानुपात = 50² / 20 = 125।\n9 और 16 का मध्य समानुपात = √(9 × 16) = 12।\nअनुपात = 125 : 12।",
    shortcut_text: "Third Proportional = 50² / 20 = 125.\nMean Proportional = √(144) = 12.\nRatio = 125 : 12.",
    shortcut_text_hi: "तृतीय = 125, मध्य = 12 => अनुपात = 125 : 12।"
  },
  {
    question_number: 22,
    practice_set: "SET B",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 4",
    type_category: "Compound Multi-Ratio Simplification",
    type_category_hi: "मिश्रित बहु-अनुपात सरलीकरण",
    question_text: "What is the compound ratio of 45:75, 3:5, 51:68 and 256:81?",
    question_text_hi: "45:75, 3:5, 51:68 और 256:81 का मिश्रित अनुपात क्या है?",
    options: {
      a: "64/75",
      b: "32/45",
      c: "128/75",
      d: "75/32"
    },
    options_hi: {
      a: "64/75",
      b: "32/45",
      c: "128/75",
      d: "75/32"
    },
    correct_option: "a",
    solution_text: "Compound Ratio = (45 / 75) × (3 / 5) × (51 / 68) × (256 / 81).\nSimplify individual fractions:\n45/75 = 3/5\n51/68 = 3/4 (divided by 17)\nProduct = (3/5) × (3/5) × (3/4) × (256/81)\nNumerator = 27 × 256\nDenominator = 100 × 81\nCancel 27 with 81 (giving 3):\n= 256 / (100 × 3) = 256 / 300 = 64 / 75.",
    solution_text_hi: "मिश्रित अनुपात = (45/75) × (3/5) × (51/68) × (256/81)\n= (3/5) × (3/5) × (3/4) × (256/81)\n= (27 × 256) / (100 × 81) = 256 / 300 = 64 / 75।",
    shortcut_text: "(3/5) × (3/5) × (3/4) × (256/81) = (27/81) × (256/100) = (1/3) × (64/25) = 64/75.",
    shortcut_text_hi: "(1/3) × (256/100) = 256 / 300 = 64 / 75।"
  }
];

if (typeof window !== "undefined") {
  window.RATIO_SET_A_QUESTIONS = RATIO_SET_A_QUESTIONS;
  window.RATIO_SET_B_QUESTIONS = RATIO_SET_B_QUESTIONS;
}
