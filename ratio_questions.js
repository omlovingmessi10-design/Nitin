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


// ==========================================
// PRACTICE SET C (30 QUESTIONS: Q1 to Q30)
// Levels 1 to 5 with English & Hindi, Options, Step-by-Step Solutions & Exam Tricks
// ==========================================
const RATIO_SET_C_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MODERATE (Q1 to Q6)
  // ==========================================
  {
    question_number: 1,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 3",
    type_category: "Age Ratios & Shifts",
    type_category_hi: "आयु अनुपात और परिवर्तन",
    question_text: "The ages of A and B are in the ratio 5:8. After 6 years, the ratio becomes 3:4. What is A's present age?",
    question_text_hi: "A और B की आयु का अनुपात 5:8 है। 6 वर्ष बाद, यह अनुपात 3:4 हो जाता है। A की वर्तमान आयु क्या है?",
    options: {
      a: "9",
      b: "9.7",
      c: "7.5",
      d: "11"
    },
    options_hi: {
      a: "9",
      b: "9.7",
      c: "7.5",
      d: "11"
    },
    correct_option: "c",
    solution_text: "Let the present ages of A and B be 5x and 8x.\nAfter 6 years:\n(5x + 6) / (8x + 6) = 3/4\nCross-multiplying:\n4(5x + 6) = 3(8x + 6)\n20x + 24 = 24x + 18\n24x - 20x = 24 - 18\n4x = 6 => x = 1.5\nA's present age = 5x = 5 × 1.5 = 7.5 years.",
    solution_text_hi: "माना A और B की वर्तमान आयु 5x और 8x है।\n6 वर्ष बाद:\n(5x + 6) / (8x + 6) = 3/4\nतिर्यक गुणा करने पर:\n20x + 24 = 24x + 18\n4x = 6 => x = 1.5\nA की वर्तमान आयु = 5x = 5 × 1.5 = 7.5 वर्ष।",
    shortcut_text: "Cross-Product Method:\nInitial: 5 : 8, Future: 3 : 4\n|5×4 - 8×3| = |20 - 24| = 4 units\nAge difference term = (4 - 3) × 6 = 6\n4 units = 6 => 1 unit = 1.5\nA's age = 5 × 1.5 = 7.5 years.",
    shortcut_text_hi: "क्रॉस-गुणा विधि:\n|5×4 - 8×3| = 4 इकाई\nआयु अंतर = (4 - 3) × 6 = 6\n4 इकाई = 6 => 1 इकाई = 1.5\nA की आयु = 5 × 1.5 = 7.5 वर्ष।"
  },
  {
    question_number: 2,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Direct Proportion & Recipes",
    type_category_hi: "सीधा समानुपात और व्यंजन विधि",
    question_text: "A recipe calls for 3 parts of sugar for every 4 parts of flour. If a baker uses 12 cups of sugar, how many cups of flour does he need to use to maintain the same ratio?",
    question_text_hi: "एक रेसिपी में हर 4 भाग आटे के लिए 3 भाग चीनी की आवश्यकता होती है। यदि एक बेकर 12 कप चीनी का उपयोग करता है, तो उसे अनुपात बनाए रखने के लिए कितने कप आटे की आवश्यकता होगी?",
    options: {
      a: "16",
      b: "15",
      c: "18",
      d: "14"
    },
    options_hi: {
      a: "16",
      b: "15",
      c: "18",
      d: "14"
    },
    correct_option: "a",
    solution_text: "Ratio of Sugar to Flour = 3 : 4.\nGiven sugar used = 12 cups.\n3 units = 12 cups => 1 unit = 4 cups.\nFlour needed = 4 units = 4 × 4 = 16 cups.",
    solution_text_hi: "चीनी और आटे का अनुपात = 3 : 4।\nदी गई चीनी = 12 कप।\n3 इकाई = 12 कप => 1 इकाई = 4 कप।\nआवश्यक आटा = 4 इकाई = 4 × 4 = 16 कप।",
    shortcut_text: "Direct scaling factor:\n12 / 3 = 4 multiplier.\nFlour = 4 × 4 = 16 cups.",
    shortcut_text_hi: "स्केलिंग कारक = 12 / 3 = 4 गुना।\nआटा = 4 × 4 = 16 कप।"
  },
  {
    question_number: 3,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Continued Compound Ratio",
    type_category_hi: "सतत संयुक्त अनुपात",
    question_text: "If a:b = 1:3, b:c = 5:7 and c:d = 9:5 then the value of a:b:c:d is:",
    question_text_hi: "यदि a:b = 1:3, b:c = 5:7 और c:d = 9:5 है, तो a:b:c:d का मान है:",
    options: {
      a: "15:75:105:35",
      b: "5:75:105:35",
      c: "15:45:63:35",
      d: "25:75:105:45"
    },
    options_hi: {
      a: "15:75:105:35",
      b: "5:75:105:35",
      c: "15:45:63:35",
      d: "25:75:105:45"
    },
    correct_option: "c",
    solution_text: "To find continuous ratio a:b:c:d:\n1) a:b = 1:3 = 5:15\n2) b:c = 5:7 = 15:21 => a:b:c = 5:15:21\n3) Multiply by 3 to align c with c:d (9:5):\na:b:c = 15:45:63\nSince c:d = 9:5 = 63:35 (multiplied by 7),\na:b:c:d = 15:45:63:35.",
    solution_text_hi: "सतत अनुपात a:b:c:d ज्ञात करने के लिए:\na:b = 1:3 = 5:15\nb:c = 5:7 = 15:21 => a:b:c = 5:15:21\nc:d = 9:5 के साथ c को 63 पर संरेखित करने के लिए:\na:b:c = 15:45:63 तथा c:d = 63:35\nअतः a:b:c:d = 15:45:63:35।",
    shortcut_text: "Check options:\na:b must be 1:3 => 15:45 = 1:3.\nc:d must be 9:5 => 63:35 = 9:5.\nOnly option (c) satisfies both.",
    shortcut_text_hi: "विकल्प जांचें:\na:b = 15:45 = 1:3 और c:d = 63:35 = 9:5।\nकेवल विकल्प (c) दोनों को संतुष्ट करता है।"
  },
  {
    question_number: 4,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Percentage & Ratio Equations",
    type_category_hi: "प्रतिशत और अनुपात समीकरण",
    question_text: "Two numbers A and B are such that the sum of 10% of A and 20% of B is equal to three-fourths the sum of 20% of A and 10% of B. Find the ratio of A to B.",
    question_text_hi: "दो संख्याएँ A और B इस प्रकार हैं कि A के 10% और B के 20% का योग, A के 20% और B के 10% के योग के तीन-चौथाई के बराबर है। A और B का अनुपात ज्ञात कीजिए।",
    options: {
      a: "2:5",
      b: "5:3",
      c: "5:2",
      d: "3:5"
    },
    options_hi: {
      a: "2:5",
      b: "5:3",
      c: "5:2",
      d: "3:5"
    },
    correct_option: "c",
    solution_text: "According to the question:\n10% of A + 20% of B = (3/4) × (20% of A + 10% of B)\n0.10 A + 0.20 B = (3/4) × (0.20 A + 0.10 B)\nMultiply both sides by 4:\n0.40 A + 0.80 B = 0.60 A + 0.30 B\n0.80 B - 0.30 B = 0.60 A - 0.40 A\n0.50 B = 0.20 A\nA / B = 0.50 / 0.20 = 5 / 2\nA : B = 5 : 2.",
    solution_text_hi: "प्रश्नानुसार:\n0.10 A + 0.20 B = (3/4)(0.20 A + 0.10 B)\n4 से दोनों पक्षों को गुणा करने पर:\n0.40 A + 0.80 B = 0.60 A + 0.30 B\n0.50 B = 0.20 A => A / B = 5 / 2\nA : B = 5 : 2।",
    shortcut_text: "4(10A + 20B) = 3(20A + 10B)\n40A + 80B = 60A + 30B\n50B = 20A => A : B = 5 : 2.",
    shortcut_text_hi: "50B = 20A => A : B = 5 : 2।"
  },
  {
    question_number: 5,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 6",
    type_category: "Proportional Division & Fractions",
    type_category_hi: "आनुपातिक विभाजन और भिन्न",
    question_text: "If 2820 is divided into two parts such that one-fifth of the first part and one-eighth of the second part are in the ratio 3:4, what is the ratio of the first part to the second part?",
    question_text_hi: "यदि 2820 को दो भागों में इस प्रकार विभाजित किया जाता है कि पहले भाग का 1/5 और दूसरे भाग का 1/8, 3:4 के अनुपात में हो, तो पहले और दूसरे भाग का अनुपात क्या है?",
    options: {
      a: "18:19",
      b: "15:32",
      c: "15:37",
      d: "17:36"
    },
    options_hi: {
      a: "18:19",
      b: "15:32",
      c: "15:37",
      d: "17:36"
    },
    correct_option: "b",
    solution_text: "Let the two parts be x and y.\n(x / 5) / (y / 8) = 3 / 4\n(8x) / (5y) = 3 / 4\nx / y = (3 × 5) / (4 × 8) = 15 / 32\nRatio of first part to second part = 15 : 32.",
    solution_text_hi: "माना दोनों भाग x और y हैं।\n(x / 5) / (y / 8) = 3 / 4\n8x / 5y = 3 / 4\nx / y = (3 × 5) / (4 × 8) = 15 / 32\nपहले भाग और दूसरे भाग का अनुपात = 15 : 32।",
    shortcut_text: "x / y = (3/4) × (5/8) = 15/32.\n(Note: The total sum 2820 is not needed to determine the ratio).",
    shortcut_text_hi: "x / y = (3/4) × (5/8) = 15/32।"
  },
  {
    question_number: 6,
    practice_set: "SET C",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Salary Percentage Variations",
    type_category_hi: "वेतन प्रतिशत परिवर्तन",
    question_text: "The ratio of the salaries of A and B is 4:5. If A's salary is increased by 20% and B's salary is decreased by 10%, what is the new ratio of their salaries?",
    question_text_hi: "A और B के वेतन का अनुपात 4:5 है। यदि A के वेतन में 20% की वृद्धि और B के वेतन में 10% की कमी की जाती है, तो उनके वेतन का नया अनुपात क्या होगा?",
    options: {
      a: "16:15",
      b: "14:13",
      c: "15:14",
      d: "13:12"
    },
    options_hi: {
      a: "16:15",
      b: "14:13",
      c: "15:14",
      d: "13:12"
    },
    correct_option: "a",
    solution_text: "Let initial salaries be 400 and 500.\nA's new salary = 400 × 1.20 = 480\nB's new salary = 500 × 0.90 = 450\nNew ratio = 480 : 450 = 48 : 45 = 16 : 15.",
    solution_text_hi: "माना प्रारंभिक वेतन 400 और 500 हैं।\nA का नया वेतन = 400 × 1.20 = 480\nB का नया वेतन = 500 × 0.90 = 450\nनया अनुपात = 480 : 450 = 16 : 15।",
    shortcut_text: "4 × 120 : 5 × 90 = 480 : 450 = 16 : 15.",
    shortcut_text_hi: "4 × 1.20 : 5 × 0.90 = 4.8 : 4.5 = 16 : 15।"
  },

  // ==========================================
  // LEVEL 2: MORE THAN MODERATE (Q7 to Q12)
  // ==========================================
  {
    question_number: 7,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 1",
    type_category: "Income, Expenditure & Equal Savings",
    type_category_hi: "आय, व्यय और समान बचत",
    question_text: "The monthly incomes of two friends Tushar and Salil, are in the ratio 6:7 respectively and each of them saves 66,000 every month. If the ratio of their monthly expenditure is 2:4, find the monthly income of Tushar.",
    question_text_hi: "तुषार और सलिल की मासिक आय 6:7 के अनुपात में है और उनमें से प्रत्येक हर महीने 66,000 बचाता है। यदि उनके मासिक खर्च का अनुपात 2:4 है, तो तुषार की मासिक आय ज्ञात करें।",
    options: {
      a: "1,10,880",
      b: "79,200",
      c: "78,200",
      d: "80,200"
    },
    options_hi: {
      a: "1,10,880",
      b: "79,200",
      c: "78,200",
      d: "80,200"
    },
    correct_option: "b",
    solution_text: "Let incomes be 6x and 7x.\nExpenditures: (6x - 66000) / (7x - 66000) = 2/4 = 1/2\nCross-multiplying:\n2(6x - 66000) = 1(7x - 66000)\n12x - 132000 = 7x - 66000\n5x = 66000 => x = 13,200\nTushar's monthly income = 6x = 6 × 13,200 = ₹79,200.",
    solution_text_hi: "माना आय 6x और 7x है।\n(6x - 66000) / (7x - 66000) = 1/2\n12x - 132000 = 7x - 66000\n5x = 66000 => x = 13,200\nतुषार की मासिक आय = 6 × 13,200 = ₹79,200।",
    shortcut_text: "Cross-multiplication:\n|6×2 - 7×1| = 5 units.\nDiff of savings = (2 - 1) × 66000 = 66000.\n5 units = 66000 => 1 unit = 13,200.\nTushar = 6 × 13,200 = 79,200.",
    shortcut_text_hi: "5 इकाई = 66000 => 1 इकाई = 13,200।\nतुषार = 6 × 13,200 = 79,200।"
  },
  {
    question_number: 8,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Unit Price & Purchase Ratios",
    type_category_hi: "इकाई मूल्य और खरीद अनुपात",
    question_text: "The price of each article of type P, Q, and R is 280, 180 and 120, respectively. Subrata buys articles of each type in the ratio 3:2:3 for 6,240. How many articles of type Q did he purchase?",
    question_text_hi: "प्रकार P, Q, और R की प्रत्येक वस्तु की कीमत क्रमशः 280, 180 और 120 है। सुब्रत 6,240 में 3:2:3 के अनुपात में वस्तुएं खरीदता है। उसने Q प्रकार की कितनी वस्तुएं खरीदीं?",
    options: {
      a: "16",
      b: "8",
      c: "14",
      d: "5"
    },
    options_hi: {
      a: "16",
      b: "8",
      c: "14",
      d: "5"
    },
    correct_option: "b",
    solution_text: "Let the quantities of P, Q, R be 3x, 2x, 3x.\nTotal cost = 3x(280) + 2x(180) + 3x(120) = 6240\n840x + 360x + 360x = 6240\n1560x = 6240 => x = 4\nArticles of type Q = 2x = 2 × 4 = 8.",
    solution_text_hi: "माना P, Q, R की मात्रा 3x, 2x, 3x है।\nकुल लागत = 3x(280) + 2x(180) + 3x(120) = 6240\n1560x = 6240 => x = 4\nQ प्रकार की वस्तुएं = 2x = 2 × 4 = 8।",
    shortcut_text: "Cost per 1 ratio set = 3(280) + 2(180) + 3(120) = 1560.\nNumber of sets = 6240 / 1560 = 4.\nQ articles = 2 × 4 = 8.",
    shortcut_text_hi: "1 सेट की लागत = 1560।\nसेटों की संख्या = 6240 / 1560 = 4।\nQ की वस्तुएं = 2 × 4 = 8।"
  },
  {
    question_number: 9,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 5",
    type_category: "Coin Denominations & Quantities",
    type_category_hi: "सिक्कों के मूल्यवर्ग और संख्या",
    question_text: "A bag contains coins of 1, 2, and 5 in the ratio 8:4:3. If the total value of the coins is 930, what is the total number of coins in the bag?",
    question_text_hi: "एक बैग में 1, 2, और 5 के सिक्के 8:4:3 के अनुपात में हैं। यदि सिक्कों का कुल मूल्य 930 है, तो बैग में कुल सिक्कों की संख्या क्या है?",
    options: {
      a: "400",
      b: "450",
      c: "420",
      d: "480"
    },
    options_hi: {
      a: "400",
      b: "450",
      c: "420",
      d: "480"
    },
    correct_option: "b",
    solution_text: "Let the number of coins of ₹1, ₹2, ₹5 be 8x, 4x, 3x.\nTotal value = 8x(1) + 4x(2) + 3x(5) = 930\n8x + 8x + 15x = 930\n31x = 930 => x = 30\nTotal coins = 8x + 4x + 3x = 15x = 15 × 30 = 450 coins.",
    solution_text_hi: "माना ₹1, ₹2, ₹5 के सिक्के 8x, 4x, 3x हैं।\nकुल मूल्य = 8x(1) + 4x(2) + 3x(5) = 930\n31x = 930 => x = 30\nकुल सिक्के = 15x = 15 × 30 = 450।",
    shortcut_text: "Value per set = 8(1) + 4(2) + 3(5) = 31.\nMultiplier = 930 / 31 = 30.\nTotal coins = (8 + 4 + 3) × 30 = 15 × 30 = 450.",
    shortcut_text_hi: "प्रति सेट मूल्य = 31।\nगुणक = 930 / 31 = 30।\nकुल सिक्के = 15 × 30 = 450।"
  },
  {
    question_number: 10,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 6",
    type_category: "Splitting Students into Groups",
    type_category_hi: "समूहों में छात्रों का विभाजन",
    question_text: "A teacher needs to split 300 students into three groups so that the second and third groups have a ratio of 3:7, and the first and third groups have a ratio of 2:7. Which of the following is the correct number of students in the second group?",
    question_text_hi: "एक शिक्षक 300 छात्रों को तीन समूहों में इस प्रकार विभाजित करता है कि दूसरे और तीसरे समूह का अनुपात 3:7 हो, और पहले और तीसरे समूह का अनुपात 2:7 हो। दूसरे समूह में छात्रों की संख्या कितनी है?",
    options: {
      a: "88",
      b: "72",
      c: "75",
      d: "64"
    },
    options_hi: {
      a: "88",
      b: "72",
      c: "75",
      d: "64"
    },
    correct_option: "c",
    solution_text: "Given ratios:\nSecond : Third = 3 : 7\nFirst : Third = 2 : 7\nSince the Third group has 7 units in both ratios:\nFirst : Second : Third = 2 : 3 : 7\nTotal units = 2 + 3 + 7 = 12 units = 300 students\n1 unit = 300 / 12 = 25 students\nNumber of students in second group = 3 units = 3 × 25 = 75.",
    solution_text_hi: "अनुपात: दूसरा : तीसरा = 3 : 7 तथा पहला : तीसरा = 2 : 7।\nअतः पहला : दूसरा : तीसरा = 2 : 3 : 7।\nकुल इकाई = 2 + 3 + 7 = 12 = 300 => 1 इकाई = 25।\nदूसरे समूह में छात्र = 3 × 25 = 75।",
    shortcut_text: "G2 fraction = 3 / (2 + 3 + 7) = 3 / 12 = 1/4.\n1/4 of 300 = 75.",
    shortcut_text_hi: "3 / 12 = 1/4; 300 का 1/4 = 75।"
  },
  {
    question_number: 11,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 4",
    type_category: "Linear Combination of Ratios",
    type_category_hi: "अनुपातों का रैखिक संयोजन",
    question_text: "If a:b:c = 3:4:5 and 2a - 3b + 4c = 56, then the value of c is:",
    question_text_hi: "यदि a:b:c = 3:4:5 और 2a - 3b + 4c = 56 है, तो c का मान है:",
    options: {
      a: "20",
      b: "22",
      c: "21",
      d: "24"
    },
    options_hi: {
      a: "20",
      b: "22",
      c: "21",
      d: "24"
    },
    correct_option: "a",
    solution_text: "Let a = 3k, b = 4k, c = 5k.\nGiven equation:\n2(3k) - 3(4k) + 4(5k) = 56\n6k - 12k + 20k = 56\n14k = 56 => k = 4\nValue of c = 5k = 5 × 4 = 20.",
    solution_text_hi: "माना a = 3k, b = 4k, c = 5k।\n2(3k) - 3(4k) + 4(5k) = 56\n14k = 56 => k = 4\nc का मान = 5k = 5 × 4 = 20।",
    shortcut_text: "Units = 2(3) - 3(4) + 4(5) = 6 - 12 + 20 = 14 units.\n14 units = 56 => 1 unit = 4.\nc = 5 × 4 = 20.",
    shortcut_text_hi: "14 इकाई = 56 => 1 इकाई = 4। c = 5 × 4 = 20।"
  },
  {
    question_number: 12,
    practice_set: "SET C",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 1",
    type_category: "Unequal Savings & Income Ratios",
    type_category_hi: "असमान बचत और आय अनुपात",
    question_text: "The monthly incomes of A and B are in the ratio 4:5, and their monthly expenditures are in the ratio 3:4. A saves 10,000 while B saves 12,000, find the monthly income of A.",
    question_text_hi: "A और B की मासिक आय 4:5 के अनुपात में है, और उनका खर्च 3:4 के अनुपात में है। A 10,000 बचाता है जबकि B 12,000 बचाता है, A की मासिक आय ज्ञात कीजिए।",
    options: {
      a: "14,000",
      b: "16,000",
      c: "15,000",
      d: "13,000"
    },
    options_hi: {
      a: "14,000",
      b: "16,000",
      c: "15,000",
      d: "13,000"
    },
    correct_option: "b",
    solution_text: "Let incomes be 4x and 5x.\n(4x - 10000) / (5x - 12000) = 3 / 4\n4(4x - 10000) = 3(5x - 12000)\n16x - 40000 = 15x - 36000\n16x - 15x = 40000 - 36000\nx = 4000\nA's monthly income = 4x = 4 × 4000 = ₹16,000.",
    solution_text_hi: "माना आय 4x और 5x है।\n(4x - 10000) / (5x - 12000) = 3 / 4\n16x - 40000 = 15x - 36000\nx = 4000\nA की मासिक आय = 4x = 4 × 4000 = ₹16,000।",
    shortcut_text: "Cross-Product Method:\n|4×4 - 5×3| = 1 unit.\n|4×10000 - 3×12000| = |40000 - 36000| = 4000.\n1 unit = 4000 => A = 4 × 4000 = 16,000.",
    shortcut_text_hi: "क्रॉस-गुणा: 1 इकाई = 4000 => A = 4 × 4000 = 16,000।"
  },

  // ==========================================
  // LEVEL 3: INSPIRED FROM PYQS (Q13 to Q18)
  // ==========================================
  {
    question_number: 13,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 6",
    type_category: "Compound Salary Expenditure",
    type_category_hi: "संयुक्त वेतन व्यय",
    question_text: "A school employs trained and untrained teachers in the ratio 5:3. The salaries of a trained and an untrained teachers are in the ratio 4:1. If the total salary paid to all teachers in a month is 4,60,000, how much total salary is paid to the untrained teachers?",
    question_text_hi: "एक स्कूल में प्रशिक्षित और अप्रशिक्षित शिक्षक 5:3 के अनुपात में हैं। उनके वेतन का अनुपात 4:1 है। यदि एक महीने में सभी शिक्षकों को कुल 4,60,000 का वेतन दिया जाता है, तो अप्रशिक्षित शिक्षकों को कुल कितना वेतन दिया जाता है?",
    options: {
      a: "45,000",
      b: "1,20,000",
      c: "60,000",
      d: "75,000"
    },
    options_hi: {
      a: "45,000",
      b: "1,20,000",
      c: "60,000",
      d: "75,000"
    },
    correct_option: "c",
    solution_text: "Let the number of trained and untrained teachers be 5x and 3x.\nLet their salaries be 4y and 1y.\nTotal salary paid = (5x × 4y) + (3x × 1y) = 20xy + 3xy = 23xy.\n23xy = 4,60,000 => xy = 4,60,000 / 23 = 20,000.\nTotal salary paid to untrained teachers = 3xy = 3 × 20,000 = ₹60,000.",
    solution_text_hi: "माना शिक्षकों की संख्या 5x और 3x है तथा वेतन 4y और 1y है।\nकुल वेतन = 20xy + 3xy = 23xy = 4,60,000 => xy = 20,000।\nअप्रशिक्षित शिक्षकों का कुल वेतन = 3xy = 3 × 20,000 = ₹60,000।",
    shortcut_text: "Total salary ratio = (5 × 4) : (3 × 1) = 20 : 3.\nTotal parts = 23.\nUntrained share = (3 / 23) × 4,60,000 = 3 × 20,000 = ₹60,000.",
    shortcut_text_hi: "वेतन अनुपात = 20 : 3। कुल भाग = 23।\nअप्रशिक्षित हिस्सा = (3/23) × 4,60,000 = ₹60,000।"
  },
  {
    question_number: 14,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 2",
    type_category: "Percentage Linked Numbers",
    type_category_hi: "प्रतिशत से जुड़ी संख्याएँ",
    question_text: "A number when increased by 25% becomes equal to another number, which is 20% less than a third number. What is the ratio of the first number to the third number?",
    question_text_hi: "एक संख्या में 25% की वृद्धि करने पर वह दूसरी संख्या के बराबर हो जाती है, जो तीसरी संख्या से 20% कम है। पहली और तीसरी संख्या का अनुपात क्या है?",
    options: {
      a: "9:16",
      b: "25:36",
      c: "16:25",
      d: "27:38"
    },
    options_hi: {
      a: "9:16",
      b: "25:36",
      c: "16:25",
      d: "27:38"
    },
    correct_option: "c",
    solution_text: "Let the three numbers be N1, N2, N3.\nGiven:\nN1 × 1.25 = N2\nN2 = N3 × 0.80\nEquating N2:\n1.25 N1 = 0.80 N3\n(5/4) N1 = (4/5) N3\nN1 / N3 = (4/5) / (5/4) = 16 / 25\nRatio of first to third = 16 : 25.",
    solution_text_hi: "माना तीन संख्याएँ N1, N2, N3 हैं।\n1.25 N1 = 0.80 N3\n(5/4) N1 = (4/5) N3\nN1 / N3 = 16 / 25\nपहली और तीसरी संख्या का अनुपात = 16 : 25।",
    shortcut_text: "N1 / N3 = 0.80 / 1.25 = 80 / 125 = 16 / 25.",
    shortcut_text_hi: "N1 / N3 = 80 / 125 = 16 : 25।"
  },
  {
    question_number: 15,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Twin Sisters Age System",
    type_category_hi: "जुड़वां बहनों की आयु प्रणाली",
    question_text: "Tejasvi, Trishana and Meena are three sisters. Tejasvi and Trishana are twins. The sum of the ages of Tejasvi and Trishana is the same as that of Meena. Four years earlier, the ratio of the ages of Tejasvi and Meena was 1:3. What will be the age of Trishana 4 years from now?",
    question_text_hi: "तेजस्वी, त्रिशना और मीना तीन बहनें हैं। तेजस्वी और त्रिशना जुड़वा हैं। जुड़वा बहनों की आयु का योग मीना की आयु के समान है। 4 वर्ष पूर्व, तेजस्वी और मीना की आयु का अनुपात 1:3 था। 4 वर्ष बाद त्रिशना की आयु क्या होगी?",
    options: {
      a: "18",
      b: "16",
      c: "12",
      d: "14"
    },
    options_hi: {
      a: "18",
      b: "16",
      c: "12",
      d: "14"
    },
    correct_option: "c",
    solution_text: "Let the present age of twins Tejasvi and Trishana be T.\nAge of Meena M = T + T = 2T.\nFour years ago:\n(T - 4) / (2T - 4) = 1 / 3\n3(T - 4) = 2T - 4\n3T - 12 = 2T - 4\nT = 8.\nPresent age of Trishana = 8 years.\nTrishana's age 4 years from now = 8 + 4 = 12 years.",
    solution_text_hi: "माना जुड़वा तेजस्वी और त्रिशना की आयु T है।\nमीना की आयु = 2T।\n4 वर्ष पूर्व: (T - 4) / (2T - 4) = 1 / 3\n3T - 12 = 2T - 4 => T = 8।\nवर्तमान आयु = 8 वर्ष। 4 वर्ष बाद त्रिशना की आयु = 8 + 4 = 12 वर्ष।",
    shortcut_text: "3(T - 4) = 2T - 4 => T = 8.\nFuture age = 8 + 4 = 12 years.",
    shortcut_text_hi: "T = 8 => 4 वर्ष बाद आयु = 8 + 4 = 12 वर्ष।"
  },
  {
    question_number: 16,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 3",
    type_category: "Family Age Sum Equations",
    type_category_hi: "पारिवारिक आयु योग समीकरण",
    question_text: "At present, Vanraj is three times as old as his son, and his daughter is 3 years younger than the son. If the sum of the ages of these three people 3 years ago was 93 years, then Vanraj's present age (in years) is:",
    question_text_hi: "वर्तमान में, वनराज अपने बेटे से तीन गुना बड़ा है, और उसकी बेटी बेटे से 3 साल छोटी है। यदि 3 साल पहले इन तीनों की आयु का योग 93 वर्ष था, तो वनराज की वर्तमान आयु है:",
    options: {
      a: "49",
      b: "39",
      c: "63",
      d: "44"
    },
    options_hi: {
      a: "49",
      b: "39",
      c: "63",
      d: "44"
    },
    correct_option: "c",
    solution_text: "Let son's present age = S.\nVanraj's present age V = 3S.\nDaughter's present age D = S - 3.\n3 years ago, their ages were:\nVanraj = 3S - 3\nSon = S - 3\nDaughter = (S - 3) - 3 = S - 6\nSum 3 years ago = (3S - 3) + (S - 3) + (S - 6) = 93\n5S - 12 = 93\n5S = 105 => S = 21\nVanraj's present age = 3S = 3 × 21 = 63 years.",
    solution_text_hi: "माना बेटे की वर्तमान आयु = S।\nवनराज = 3S, बेटी = S - 3।\n3 वर्ष पूर्व आयु का योग = (3S - 3) + (S - 3) + (S - 6) = 93\n5S - 12 = 93 => 5S = 105 => S = 21\nवनराज की वर्तमान आयु = 3 × 21 = 63 वर्ष।",
    shortcut_text: "Present sum = 93 + (3 × 3) = 102.\n3S + S + (S - 3) = 102 => 5S = 105 => S = 21.\nVanraj = 3 × 21 = 63 years.",
    shortcut_text_hi: "वर्तमान योग = 93 + 9 = 102। 5S - 3 = 102 => S = 21। वनराज = 63 वर्ष।"
  },
  {
    question_number: 17,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 1",
    type_category: "Comparing Fractions & Proportions",
    type_category_hi: "भिन्नों और अनुपातों की तुलना",
    question_text: "Four classes have a ratio of boys to girls as 4:5, 3:2, 6:5 and 5:6, respectively. Which class has a higher proportion of boys?",
    question_text_hi: "चार कक्षाओं में लड़कों और लड़कियों का अनुपात क्रमशः 4:5, 3:2, 6:5 और 5:6 है। किस कक्षा में लड़कों का अनुपात सबसे अधिक है?",
    options: {
      a: "Second class (3:2)",
      b: "Third class (6:5)",
      c: "First class (4:5)",
      d: "Fourth class (5:6)"
    },
    options_hi: {
      a: "दूसरी कक्षा (3:2)",
      b: "तीसरी कक्षा (6:5)",
      c: "पहली कक्षा (4:5)",
      d: "चौथी कक्षा (5:6)"
    },
    correct_option: "a",
    solution_text: "Proportion of boys = Boys / (Boys + Girls):\n1) First class (4:5) = 4 / (4 + 5) = 4/9 ≈ 44.44%\n2) Second class (3:2) = 3 / (3 + 2) = 3/5 = 60.00%\n3) Third class (6:5) = 6 / (6 + 5) = 6/11 ≈ 54.55%\n4) Fourth class (5:6) = 5 / (5 + 6) = 5/11 ≈ 45.45%\nComparing values, 60% is highest. Thus, the Second class (3:2) has the highest proportion of boys.",
    solution_text_hi: "लड़कों का अनुपात = लड़के / कुल:\nपहली = 4/9 ≈ 44.44%\nदूसरी = 3/5 = 60%\nतीसरी = 6/11 ≈ 54.55%\nचौथी = 5/11 ≈ 45.45%\nदूसरी कक्षा (3:2) में लड़कों का अनुपात सबसे अधिक (60%) है।",
    shortcut_text: "3/5 = 0.60 vs 6/11 ≈ 0.545. Second class (3:2) is highest.",
    shortcut_text_hi: "3/5 = 60% > 6/11 ≈ 54.5%। दूसरी कक्षा सबसे अधिक है।"
  },
  {
    question_number: 18,
    practice_set: "SET C",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 1",
    type_category: "Compound Product of Ratios",
    type_category_hi: "अनुपातों का मिश्रित गुणन",
    question_text: "If the ratio of the ages of A and B is 3:5, the ratio of the ages of B and C is 2:3, and the ratio of the ages of C and D is 3:4, what is the ratio of the ages of A and D?",
    question_text_hi: "यदि A और B की आयु का अनुपात 3:5 है, B और C की आयु का अनुपात 2:3 है, और C और D की आयु का अनुपात 3:4 है, तो A और D की आयु का अनुपात क्या है?",
    options: {
      a: "5:11",
      b: "3:13",
      c: "7:10",
      d: "3:10"
    },
    options_hi: {
      a: "5:11",
      b: "3:13",
      c: "7:10",
      d: "3:10"
    },
    correct_option: "d",
    solution_text: "A / D = (A / B) × (B / C) × (C / D)\n= (3 / 5) × (2 / 3) × (3 / 4)\n= (3 × 2 × 3) / (5 × 3 × 4)\n= 18 / 60 = 3 / 10\nRatio of A to D = 3 : 10.",
    solution_text_hi: "A / D = (A / B) × (B / C) × (C / D)\n= (3/5) × (2/3) × (3/4) = 18/60 = 3/10।\nA और D का अनुपात = 3 : 10।",
    shortcut_text: "Direct cancellation:\n(3/5) × (2/3) × (3/4) = (2 × 3) / (5 × 4) = 6 / 20 = 3 / 10.",
    shortcut_text_hi: "सरल निरसन: (3/5) × (2/3) × (3/4) = 3 / 10।"
  },

  // ==========================================
  // LEVEL 4: PYQ+ (Q19 to Q24)
  // ==========================================
  {
    question_number: 19,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 2",
    type_category: "Mixture Cost Expansion",
    type_category_hi: "मिश्रण लागत विस्तार",
    question_text: "A chemical research laboratory uses three compounds A, B, and C in the cost ratio 3:5:7. When a fourth compound D is added to the mixture, the total cost increases by 40%. If the new ratio becomes A:B:C:D = 3:5:7:x, what is the value of x?",
    question_text_hi: "एक रासायनिक अनुसंधान प्रयोगशाला 3:5:7 के लागत अनुपात में तीन यौगिकों A, B और C का उपयोग करती है। जब मिश्रण में चौथा यौगिक D मिलाया जाता है, तो कुल लागत 40% बढ़ जाती है। यदि नया अनुपात A:B:C:D = 3:5:7:x हो जाता है, तो x का मान क्या है?",
    options: {
      a: "9",
      b: "8",
      c: "4",
      d: "6"
    },
    options_hi: {
      a: "9",
      b: "8",
      c: "4",
      d: "6"
    },
    correct_option: "d",
    solution_text: "Let the cost parts of A, B, C be 3, 5, 7.\nTotal initial cost = 3 + 5 + 7 = 15 units.\nWhen compound D is added, total cost increases by 40%:\nCost of D = 40% of 15 = 0.40 × 15 = 6 units.\nNew total cost = 15 + 6 = 21 units (which is 15 × 1.4 = 21).\nSince the parts of A, B, C remain 3, 5, 7, the part of D is x = 6.",
    solution_text_hi: "A, B, C की प्रारंभिक लागत = 3 + 5 + 7 = 15 इकाई।\nD मिलाने पर 40% की वृद्धि होती है:\nD की लागत = 15 का 40% = 6 इकाई।\nअतः x = 6।",
    shortcut_text: "x = 40% of (3 + 5 + 7) = 0.40 × 15 = 6.",
    shortcut_text_hi: "x = 15 का 40% = 6।"
  },
  {
    question_number: 20,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 4",
    type_category: "Mean Proportional Scaling",
    type_category_hi: "मध्यानुपाती स्केलिंग",
    question_text: "A data scientist finds that the mean proportional between two experimental values 18 and 32 needs to be increased by 25% for optimal model performance. If this new increased value becomes the mean proportional between 18 and another value y, what is y?",
    question_text_hi: "एक डेटा वैज्ञानिक पाता है कि 18 और 32 के बीच के मध्यानुपाती में इष्टतम प्रदर्शन के लिए 25% की वृद्धि करने की आवश्यकता है। यदि यह नया मान 18 और अन्य मान y के बीच का मध्यानुपाती बन जाता है, तो y क्या है?",
    options: {
      a: "45",
      b: "50",
      c: "54",
      d: "48"
    },
    options_hi: {
      a: "45",
      b: "50",
      c: "54",
      d: "48"
    },
    correct_option: "b",
    solution_text: "Mean proportional of 18 and 32 = √(18 × 32) = √(576) = 24.\nIncreased by 25%:\nNew value = 24 × (1 + 0.25) = 24 × 1.25 = 30.\nGiven that 30 is the mean proportional between 18 and y:\n√(18 × y) = 30\nSquaring both sides:\n18y = 30² = 900\ny = 900 / 18 = 50.",
    solution_text_hi: "18 और 32 का मध्यानुपाती = √(18 × 32) = 24।\n25% वृद्धि: 24 × 1.25 = 30।\n√(18 × y) = 30 => 18y = 900 => y = 50।",
    shortcut_text: "Mean = 24. New = 24 × 5/4 = 30.\ny = 30² / 18 = 900 / 18 = 50.",
    shortcut_text_hi: "30² / 18 = 900 / 18 = 50।"
  },
  {
    question_number: 21,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 4",
    type_category: "Fourth Proportional Ratio",
    type_category_hi: "चतुर्थानुपाती अनुपात",
    question_text: "What is the ratio between fourth proportional of 10, 80, 30 and fourth proportional of 7, 28, 19?",
    question_text_hi: "10, 80, 30 के चतुर्थानुपाती और 7, 28, 19 के चतुर्थानुपाती के बीच का अनुपात क्या है?",
    options: {
      a: "29:26",
      b: "60:19",
      c: "10:7",
      d: "30:19"
    },
    options_hi: {
      a: "29:26",
      b: "60:19",
      c: "10:7",
      d: "30:19"
    },
    correct_option: "b",
    solution_text: "Fourth proportional P1 of (10, 80, 30):\n10 / 80 = 30 / P1 => P1 = (80 × 30) / 10 = 240.\nFourth proportional P2 of (7, 28, 19):\n7 / 28 = 19 / P2 => P2 = (28 × 19) / 7 = 4 × 19 = 76.\nRatio P1 : P2 = 240 : 76 = 60 : 19.",
    solution_text_hi: "(10, 80, 30) का चतुर्थानुपाती P1 = (80 × 30) / 10 = 240।\n(7, 28, 19) का चतुर्थानुपाती P2 = (28 × 19) / 7 = 76।\nअनुपात = 240 : 76 = 60 : 19।",
    shortcut_text: "P1 = 30 × 8 = 240. P2 = 19 × 4 = 76.\n240 / 76 = 60 / 19.",
    shortcut_text_hi: "240 : 76 = 60 : 19।"
  },
  {
    question_number: 22,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 4",
    type_category: "Dual Proportion Variable Ratio",
    type_category_hi: "दोहरा समानुपात चर अनुपात",
    question_text: "9:81::2.5:x and 3:6::5:y What is the ratio of x to y?",
    question_text_hi: "9:81::2.5:x और 3:6::5:y तो x और y का अनुपात क्या है?",
    options: {
      a: "10:2",
      b: "13:14",
      c: "9:4",
      d: "5:3"
    },
    options_hi: {
      a: "10:2",
      b: "13:14",
      c: "9:4",
      d: "5:3"
    },
    correct_option: "c",
    solution_text: "First proportion:\n9 / 81 = 2.5 / x => 1 / 9 = 2.5 / x => x = 9 × 2.5 = 22.5.\nSecond proportion:\n3 / 6 = 5 / y => 1 / 2 = 5 / y => y = 2 × 5 = 10.\nRatio x : y = 22.5 : 10 = 45 : 20 = 9 : 4.",
    solution_text_hi: "पहले समानुपात से: 9/81 = 2.5/x => x = 22.5।\nदूसरे समानुपात से: 3/6 = 5/y => y = 10।\nx : y = 22.5 : 10 = 9 : 4।",
    shortcut_text: "x = 2.5 × 9 = 22.5. y = 5 × 2 = 10.\n22.5 / 10 = 9 / 4.",
    shortcut_text_hi: "22.5 : 10 = 9 : 4।"
  },
  {
    question_number: 23,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 4",
    type_category: "Algebraic Cubic Ratio Substitution",
    type_category_hi: "बीजगणितीय घन अनुपात प्रतिस्थापन",
    question_text: "If a:b = 2:3, then (7a³ - 2b³) : (b³ - a³) =",
    question_text_hi: "यदि a:b = 2:3 है, तो (7a³ - 2b³) : (b³ - a³) =",
    options: {
      a: "2:19",
      b: "3:11",
      c: "13:6",
      d: "3:14"
    },
    options_hi: {
      a: "2:19",
      b: "3:11",
      c: "13:6",
      d: "3:14"
    },
    correct_option: "a",
    solution_text: "Let a = 2, b = 3.\na³ = 2³ = 8\nb³ = 3³ = 27\nSubstitute in expression:\nNumerator = 7a³ - 2b³ = 7(8) - 2(27) = 56 - 54 = 2\nDenominator = b³ - a³ = 27 - 8 = 19\nResult = 2 : 19.",
    solution_text_hi: "a = 2, b = 3 रखने पर:\na³ = 8, b³ = 27।\nअंश = 7(8) - 2(27) = 56 - 54 = 2।\nहर = 27 - 8 = 19।\nअनुपात = 2 : 19।",
    shortcut_text: "Direct substitution:\n(7×8 - 2×27) / (27 - 8) = (56 - 54) / 19 = 2 / 19.",
    shortcut_text_hi: "(56 - 54) / 19 = 2 : 19।"
  },
  {
    question_number: 24,
    practice_set: "SET C",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 4",
    type_category: "Number Series Sum Ratios",
    type_category_hi: "संख्या श्रेणी योग अनुपात",
    question_text: "The ratio of the sum of odd positive integers from 1 to 100 to the sum of even positive integers from 150 to 200 is:",
    question_text_hi: "1 से 100 तक के विषम धनात्मक पूर्णांकों के योग और 150 से 200 तक के सम धनात्मक पूर्णांकों के योग का अनुपात है:",
    options: {
      a: "50:71",
      b: "50:81",
      c: "50:91",
      d: "50:101"
    },
    options_hi: {
      a: "50:71",
      b: "50:81",
      c: "50:91",
      d: "50:101"
    },
    correct_option: "c",
    solution_text: "1) Sum of odd integers from 1 to 100:\nNumber of terms n = 50 (from 1 to 99).\nSum of first n odd integers = n² = 50² = 2500.\n\n2) Sum of even integers from 150 to 200:\nThis is an arithmetic progression: 150, 152, ..., 200.\nFirst term a = 150, last term l = 200, d = 2.\nNumber of terms m = ((200 - 150) / 2) + 1 = 25 + 1 = 26 terms.\nSum = (m / 2) × (a + l) = (26 / 2) × (150 + 200) = 13 × 350 = 4550.\n\nRatio = 2500 : 4550 = 250 : 455 = 50 : 91.",
    solution_text_hi: "1 से 100 तक विषम पूर्णांकों का योग (50 पद) = 50² = 2500।\n150 से 200 तक सम पूर्णांकों का योग (26 पद) = (26/2) × (150 + 200) = 13 × 350 = 4550।\nअनुपात = 2500 : 4550 = 50 : 91।",
    shortcut_text: "Odd Sum = 50² = 2500.\nEven Sum = 26 × 175 = 4550.\n2500 / 4550 = 50 / 91.",
    shortcut_text_hi: "2500 / 4550 = 50 : 91।"
  },

  // ==========================================
  // LEVEL 5: PYQ++ (Q25 to Q30)
  // ==========================================
  {
    question_number: 25,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 4",
    type_category: "Decimal Proportion Equations",
    type_category_hi: "दशमलव समानुपात समीकरण",
    question_text: "If 4:28 :: 4.1:x and 4:32 :: 3:y, then what is the ratio of x to y?",
    question_text_hi: "यदि 4:28 :: 4.1:x और 4:32 :: 3:y है, तो x और y का अनुपात क्या है?",
    options: {
      a: "287:240",
      b: "285:241",
      c: "288:238",
      d: "291:250"
    },
    options_hi: {
      a: "287:240",
      b: "285:241",
      c: "288:238",
      d: "291:250"
    },
    correct_option: "a",
    solution_text: "For 4:28 :: 4.1:x:\n4 / 28 = 4.1 / x => 1 / 7 = 4.1 / x => x = 7 × 4.1 = 28.7.\nFor 4:32 :: 3:y:\n4 / 32 = 3 / y => 1 / 8 = 3 / y => y = 8 × 3 = 24.\nRatio x : y = 28.7 : 24 = 287 : 240.",
    solution_text_hi: "4/28 = 4.1/x => x = 7 × 4.1 = 28.7।\n4/32 = 3/y => y = 8 × 3 = 24।\nx : y = 28.7 : 24 = 287 : 240।",
    shortcut_text: "x = 4.1 × 7 = 28.7. y = 3 × 8 = 24.\nx : y = 287 : 240.",
    shortcut_text_hi: "28.7 : 24 = 287 : 240।"
  },
  {
    question_number: 26,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Income Expenditure Cross Shift",
    type_category_hi: "आय व्यय क्रॉस अंतर",
    question_text: "The monthly incomes of two friends Vipul and Vijay, are in the ratio 6:7 respectively and each of them saves 66,000 every month. If the ratio of their monthly expenditure is 1:3, find the monthly income of Vipul.",
    question_text_hi: "दो दोस्तों विपुल और विजय की मासिक आय का अनुपात क्रमशः 6:7 है और उनमें से प्रत्येक हर महीने 66,000 बचाता है। यदि उनके मासिक खर्च का अनुपात 1:3 है, तो विपुल की मासिक आय ज्ञात करें।",
    options: {
      a: "71,000",
      b: "72,000",
      c: "1,00,800",
      d: "73,000"
    },
    options_hi: {
      a: "71,000",
      b: "72,000",
      c: "1,00,800",
      d: "73,000"
    },
    correct_option: "b",
    solution_text: "Let incomes be 6x and 7x.\nExpenditures: (6x - 66000) / (7x - 66000) = 1 / 3\nCross-multiplying:\n3(6x - 66000) = 1(7x - 66000)\n18x - 198000 = 7x - 66000\n18x - 7x = 198000 - 66000\n11x = 132000 => x = 12,000\nVipul's monthly income = 6x = 6 × 12,000 = ₹72,000.",
    solution_text_hi: "माना आय 6x और 7x है।\n(6x - 66000) / (7x - 66000) = 1 / 3\n18x - 198000 = 7x - 66000\n11x = 132000 => x = 12,000\nविपुल की मासिक आय = 6 × 12,000 = ₹72,000।",
    shortcut_text: "Cross-Product Method:\n|6×3 - 7×1| = 11 units.\nSavings difference = (3 - 1) × 66000 = 132000.\n11 units = 132000 => 1 unit = 12000.\nVipul = 6 × 12000 = 72,000.",
    shortcut_text_hi: "11 इकाई = 132000 => 1 इकाई = 12000।\nविपुल = 6 × 12000 = 72,000।"
  },
  {
    question_number: 27,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 4",
    type_category: "Proportion Multiplier Ratios",
    type_category_hi: "समानुपात गुणक अनुपात",
    question_text: "If 7:63::6.5:x and 7:42::4:y, then what is the ratio of x to y?",
    question_text_hi: "यदि 7:63::6.5:x और 7:42::4:y है, तो x और y का अनुपात क्या है?",
    options: {
      a: "43:26",
      b: "37:17",
      c: "39:16",
      d: "40:14"
    },
    options_hi: {
      a: "43:26",
      b: "37:17",
      c: "39:16",
      d: "40:14"
    },
    correct_option: "c",
    solution_text: "From first proportion:\n7 / 63 = 6.5 / x => 1 / 9 = 6.5 / x => x = 9 × 6.5 = 58.5.\nFrom second proportion:\n7 / 42 = 4 / y => 1 / 6 = 4 / y => y = 6 × 4 = 24.\nRatio x : y = 58.5 : 24 = 585 : 240.\nDivide both by 15:\n585 / 15 = 39\n240 / 15 = 16\nRatio = 39 : 16.",
    solution_text_hi: "पहले समानुपात से: 7/63 = 6.5/x => x = 9 × 6.5 = 58.5।\nदूसरे समानुपात से: 7/42 = 4/y => y = 6 × 4 = 24।\nx : y = 58.5 : 24 = 585 : 240 = 39 : 16।",
    shortcut_text: "x = 6.5 × 9 = 58.5. y = 4 × 6 = 24.\n58.5 / 24 = 585 / 240 = 39 / 16.",
    shortcut_text_hi: "58.5 / 24 = 39 / 16।"
  },
  {
    question_number: 28,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 4",
    type_category: "Continued Proportion & Extremes",
    type_category_hi: "सतत समानुपात और चरम पद",
    question_text: "If a:b::b:c; c = 4a; and b = 6, find the positive value of c.",
    question_text_hi: "यदि a:b::b:c; c = 4a; और b = 6 है, तो c का धनात्मक मान ज्ञात करें।",
    options: {
      a: "8",
      b: "16",
      c: "20",
      d: "12"
    },
    options_hi: {
      a: "8",
      b: "16",
      c: "20",
      d: "12"
    },
    correct_option: "d",
    solution_text: "Given continued proportion:\na:b :: b:c => b² = ac.\nSubstitute b = 6 and c = 4a:\n6² = a(4a)\n36 = 4a²\na² = 9 => a = 3 (since positive value is required).\nThen c = 4a = 4 × 3 = 12.",
    solution_text_hi: "सतत समानुपात से: b² = ac।\n6² = a(4a) => 4a² = 36 => a² = 9 => a = 3।\nc = 4a = 4 × 3 = 12।",
    shortcut_text: "b² = ac => 36 = 4a² => a = 3.\nc = 4 × 3 = 12.",
    shortcut_text_hi: "36 = 4a² => a = 3 => c = 12।"
  },
  {
    question_number: 29,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 4",
    type_category: "Mean Proportional of Speeds",
    type_category_hi: "गतियों का मध्यानुपाती",
    question_text: "The speeds of two vehicles are 20 km/h and 45 km/h. Find the mean proportional between the two speeds.",
    question_text_hi: "दो वाहनों की गति 20 किमी/घंटा और 45 किमी/घंटा है। दोनों गतियों के बीच का मध्यानुपाती ज्ञात कीजिए।",
    options: {
      a: "30 km/h",
      b: "25 km/h",
      c: "32 km/h",
      d: "35 km/h"
    },
    options_hi: {
      a: "30 किमी/घंटा",
      b: "25 किमी/घंटा",
      c: "32 किमी/घंटा",
      d: "35 किमी/घंटा"
    },
    correct_option: "a",
    solution_text: "Mean proportional between two values x and y is given by √(x × y).\nMean proportional = √(20 × 45) = √(900) = 30 km/h.",
    solution_text_hi: "x और y का मध्यानुपाती = √(x × y)।\nमध्यानुपाती = √(20 × 45) = √900 = 30 किमी/घंटा।",
    shortcut_text: "√(20 × 45) = √(900) = 30 km/h.",
    shortcut_text_hi: "√(20 × 45) = 30 किमी/घंटा।"
  },
  {
    question_number: 30,
    practice_set: "SET C",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Extreme Numbers Sum Ratio",
    type_category_hi: "चरम संख्याओं का योग अनुपात",
    question_text: "The ratio of three numbers is 3:5:7. If the sum of the largest and smallest numbers is 60, what is the sum of all the three numbers?",
    question_text_hi: "तीन संख्याओं का अनुपात 3:5:7 है। यदि सबसे बड़ी और सबसे छोटी संख्या का योग 60 है, तो तीनों संख्याओं का योग क्या है?",
    options: {
      a: "90",
      b: "70",
      c: "100",
      d: "120"
    },
    options_hi: {
      a: "90",
      b: "70",
      c: "100",
      d: "120"
    },
    correct_option: "a",
    solution_text: "Let the three numbers be 3x, 5x, 7x.\nSmallest number = 3x\nLargest number = 7x\nGiven sum of largest and smallest = 60:\n3x + 7x = 60\n10x = 60 => x = 6.\nSum of all three numbers = 3x + 5x + 7x = 15x = 15 × 6 = 90.",
    solution_text_hi: "माना तीन संख्याएँ 3x, 5x, 7x हैं।\nसबसे छोटी = 3x, सबसे बड़ी = 7x।\n3x + 7x = 60 => 10x = 60 => x = 6।\nतीनों संख्याओं का योग = 15x = 15 × 6 = 90।",
    shortcut_text: "Sum of extremes = 3 + 7 = 10 units = 60 => 1 unit = 6.\nTotal sum = 3 + 5 + 7 = 15 units = 15 × 6 = 90.",
    shortcut_text_hi: "10 इकाई = 60 => 1 इकाई = 6।\nकुल योग = 15 × 6 = 90।"
  }
];


// ==========================================
// PRACTICE SET D (30 QUESTIONS: Q1 to Q30)
// Levels 1 to 6 (Moderate to Advanced / Mains Level) with English & Hindi, Options, Step-by-Step Solutions & Exam Tricks
// ==========================================
const RATIO_SET_D_QUESTIONS = [
  // ==========================================
  // LEVEL 1: MODERATE (Q1 to Q5)
  // ==========================================
  {
    question_number: 1,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 1",
    type_category: "Income, Expenditure & Equal Savings",
    type_category_hi: "आय, व्यय और समान बचत",
    question_text: "The ratio of the incomes of A and B is 3:2, and the ratio of their expenditures is 4:3. If they each save Rs. 2,000, what is A's income?",
    question_text_hi: "A और B की आय का अनुपात 3:2 है, और उनके व्यय का अनुपात 4:3 है। यदि वे प्रत्येक Rs. 2,000 की बचत करते हैं, तो A की आय क्या है?",
    options: {
      a: "Rs. 4,000",
      b: "Rs. 6,000",
      c: "Rs. 8,000",
      d: "Rs. 12,000"
    },
    options_hi: {
      a: "₹4,000",
      b: "₹6,000",
      c: "₹8,000",
      d: "₹12,000"
    },
    correct_option: "b",
    solution_text: "Income ratio = 3 : 2\nExpenditure ratio = 4 : 3\nSavings = Rs. 2,000 each.\nUsing cross-multiplication:\n|3 × 3 - 4 × 2| = |9 - 8| = 1 unit.\nValue difference = |4 × 2000 - 3 × 2000| = Rs. 2,000.\n1 unit = Rs. 2,000.\nA's income = 3 × 2,000 = Rs. 6,000.",
    solution_text_hi: "आय अनुपात = 3 : 2\nव्यय अनुपात = 4 : 3\nप्रत्येक की बचत = Rs. 2,000।\nक्रॉस-गुणा विधि से:\n|3 × 3 - 4 × 2| = 1 इकाई।\nमूल्य अंतर = (4 - 3) × 2000 = Rs. 2,000।\n1 इकाई = Rs. 2,000।\nA की आय = 3 × 2,000 = Rs. 6,000।",
    shortcut_text: "Cross multiply difference: (3 × 3) - (4 × 2) = 1 unit = Rs. 2,000.\nA's income = 3 × 2,000 = Rs. 6,000.",
    shortcut_text_hi: "1 इकाई = 2,000 => A की आय = 3 × 2,000 = Rs. 6,000।"
  },
  {
    question_number: 2,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 5",
    type_category: "Coin Ratio & Monetary Value",
    type_category_hi: "सिक्कों का अनुपात और मौद्रिक मूल्य",
    question_text: "A bag contains Rs. 1, 50-paisa, and 25-paisa coins in the ratio of 5:6:8. If the total monetary value in the bag is Rs. 200, find the number of 50-paisa coins.",
    question_text_hi: "एक बैग में Rs. 1, 50-पैसे और 25-पैसे के सिक्के 5:6:8 के अनुपात में हैं। यदि बैग में कुल राशि Rs. 200 है, तो 50-पैसे के सिक्कों की संख्या ज्ञात कीजिए।",
    options: {
      a: "100",
      b: "120",
      c: "150",
      d: "160"
    },
    options_hi: {
      a: "100",
      b: "120",
      c: "150",
      d: "160"
    },
    correct_option: "b",
    solution_text: "Let the number of coins be 5x, 6x, and 8x.\nTotal monetary value:\n5x(Rs. 1) + 6x(Rs. 0.50) + 8x(Rs. 0.25) = Rs. 200\n5x + 3x + 2x = 200\n10x = 200 => x = 20.\nNumber of 50-paisa coins = 6x = 6 × 20 = 120.",
    solution_text_hi: "माना सिक्कों की संख्या 5x, 6x और 8x है।\nकुल मूल्य:\n5x(1) + 6x(0.50) + 8x(0.25) = 200\n10x = 200 => x = 20।\n50-पैसे के सिक्कों की संख्या = 6 × 20 = 120।",
    shortcut_text: "Value per set = 5(1) + 6(0.5) + 8(0.25) = Rs. 10.\nSets = 200 / 10 = 20.\n50-paisa coins = 6 × 20 = 120.",
    shortcut_text_hi: "प्रति सेट मूल्य = Rs. 10।\nगुणक = 200 / 10 = 20।\n50-पैसे के सिक्के = 6 × 20 = 120।"
  },
  {
    question_number: 3,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 3",
    type_category: "Alligation of Alloys",
    type_category_hi: "मिश्र धातुओं का मिश्रण नियम",
    question_text: "Alloy A contains copper and zinc in the ratio 3:4. Alloy B contains copper and zinc in the ratio 5:9. In what ratio should Alloy A and Alloy B be mixed to get a new alloy with copper and zinc in the ratio 27:43?",
    question_text_hi: "मिश्र धातु A में तांबा और जस्ता 3:4 के अनुपात में है। मिश्र धातु B में तांबा और जस्ता 5:9 के अनुपात में है। मिश्र धातु A और मिश्र धातु B को किस अनुपात में मिलाया जाना चाहिए ताकि एक नई मिश्र धातु प्राप्त हो जिसमें तांबा और जस्ता 27:43 के अनुपात में हों?",
    options: {
      a: "1:2",
      b: "2:1",
      c: "2:3",
      d: "3:2"
    },
    options_hi: {
      a: "1:2",
      b: "2:1",
      c: "2:3",
      d: "3:2"
    },
    correct_option: "c",
    solution_text: "Take copper fractions:\nIn Alloy A: 3 / (3 + 4) = 3/7 = 30/70.\nIn Alloy B: 5 / (5 + 9) = 5/14 = 25/70.\nIn Resultant Alloy: 27 / (27 + 43) = 27/70.\nApplying Rule of Alligation:\n(27/70 - 25/70) : (30/70 - 27/70) = 2/70 : 3/70 = 2 : 3.",
    solution_text_hi: "तांबे का अनुपात लें:\nA में: 3/7 = 30/70।\nB में: 5/14 = 25/70।\nमिश्रण में: 27/70।\nमिश्रण नियम (Alligation) से:\n(27/70 - 25/70) : (30/70 - 27/70) = 2 : 3।",
    shortcut_text: "Equalize denominators to 70: A = 30, B = 25, Mean = 27.\nRatio = |27 - 25| : |30 - 27| = 2 : 3.",
    shortcut_text_hi: "हर 70 करने पर: 30, 25 और मध्य 27। अंतर = 2 : 3।"
  },
  {
    question_number: 4,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 4",
    type_category: "Mean Proportional Formula",
    type_category_hi: "मध्यानुपाती सूत्र",
    question_text: "What is the mean proportional between 18 and 32?",
    question_text_hi: "18 और 32 के बीच मध्यानुपाती क्या है?",
    options: {
      a: "20",
      b: "24",
      c: "26",
      d: "28"
    },
    options_hi: {
      a: "20",
      b: "24",
      c: "26",
      d: "28"
    },
    correct_option: "b",
    solution_text: "Mean proportional between a and b = √(a × b).\nMean proportional = √(18 × 32) = √(576) = 24.",
    solution_text_hi: "a और b का मध्यानुपाती = √(a × b)।\nमध्यानुपाती = √(18 × 32) = √576 = 24।",
    shortcut_text: "√(18 × 32) = √(9 × 64) = 3 × 8 = 24.",
    shortcut_text_hi: "√(18 × 32) = 3 × 8 = 24।"
  },
  {
    question_number: 5,
    practice_set: "SET D",
    level: "Level 1: Moderate",
    level_group: "Level 1: Moderate",
    type_code: "Type 2",
    type_category: "Equal Volume Mixture Fusion",
    type_category_hi: "समान आयतन मिश्रण संयोजन",
    question_text: "Two vessels contain milk and water in the ratios 3:2 and 7:3 respectively. If the mixtures from both vessels are mixed in equal quantities, find the new ratio of milk to water.",
    question_text_hi: "दो बर्तनों में दूध और पानी का अनुपात क्रमशः 3:2 और 7:3 है। यदि दोनों बर्तनों के मिश्रण को समान मात्रा में मिलाया जाता है, तो दूध और पानी का नया अनुपात ज्ञात कीजिए।",
    options: {
      a: "13:7",
      b: "17:13",
      c: "11:9",
      d: "9:11"
    },
    options_hi: {
      a: "13:7",
      b: "17:13",
      c: "11:9",
      d: "9:11"
    },
    correct_option: "a",
    solution_text: "Sum of ratio units:\nVessel 1: 3 + 2 = 5 units.\nVessel 2: 7 + 3 = 10 units.\nEqualize total volumes to 10 by multiplying Vessel 1 by 2:\nVessel 1: Milk = 6, Water = 4.\nVessel 2: Milk = 7, Water = 3.\nCombined Milk = 6 + 7 = 13.\nCombined Water = 4 + 3 = 7.\nNew ratio = 13 : 7.",
    solution_text_hi: "आयतन बराबर करें:\nबर्तन 1 (3:2, योग 5) को 2 से गुणा करें => 6 : 4।\nबर्तन 2 (7:3, योग 10) => 7 : 3।\nनया दूध = 6 + 7 = 13।\nनया पानी = 4 + 3 = 7।\nअनुपात = 13 : 7।",
    shortcut_text: "Scale V1 by 2: (6 + 7) : (4 + 3) = 13 : 7.",
    shortcut_text_hi: "(6 + 7) : (4 + 3) = 13 : 7।"
  },

  // ==========================================
  // LEVEL 2: MORE THAN MODERATE (Q6 to Q10)
  // ==========================================
  {
    question_number: 6,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 2",
    type_category: "Ratio Reversal by Water Addition",
    type_category_hi: "जल मिलाकर अनुपात उलटना",
    question_text: "In a 60-liter mixture, the ratio of milk to water is 2:1. How much water must be added to this mixture to reverse the ratio to 1:2?",
    question_text_hi: "एक 60 लीटर मिश्रण में, दूध और पानी का अनुपात 2:1 है। इस अनुपात को 1:2 में उलटने के लिए इस मिश्रण में कितना पानी मिलाया जाना चाहिए?",
    options: {
      a: "20 Liters / लीटर",
      b: "30 Liters / लीटर",
      c: "40 Liters / लीटर",
      d: "60 Liters / लीटर"
    },
    options_hi: {
      a: "20 लीटर",
      b: "30 लीटर",
      c: "40 लीटर",
      d: "60 लीटर"
    },
    correct_option: "d",
    solution_text: "In 60 liters:\nMilk = (2/3) × 60 = 40 Liters.\nWater = (1/3) × 60 = 20 Liters.\nSince only water is added, milk remains 40 Liters.\nIn new ratio (1:2), 1 unit = 40 Liters.\nRequired Water = 2 units = 2 × 40 = 80 Liters.\nWater to be added = 80 - 20 = 60 Liters.",
    solution_text_hi: "60 लीटर में: दूध = 40 लीटर, पानी = 20 लीटर।\nकेवल पानी मिलाया जाता है, अतः दूध 40 लीटर ही रहेगा।\nनए अनुपात (1:2) में: 1 इकाई = 40 लीटर => पानी = 80 लीटर।\nमिलाया गया पानी = 80 - 20 = 60 लीटर।",
    shortcut_text: "Milk remains 40L. Target water = 40 × 2 = 80L.\nAdded = 80 - 20 = 60 Liters.",
    shortcut_text_hi: "दूध = 40 लीटर। नया पानी = 80 लीटर। जोड़ा गया पानी = 80 - 20 = 60 लीटर।"
  },
  {
    question_number: 7,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 1",
    type_category: "Hemisphere Land-Water Division",
    type_category_hi: "गोलार्ध भूमि-जल विभाजन",
    question_text: "The ratio of land to water on Earth is 1:2. In the Northern Hemisphere, the ratio is 2:3. What is the ratio of land to water in the Southern Hemisphere?",
    question_text_hi: "पृथ्वी पर भूमि और पानी का अनुपात 1:2 है। उत्तरी गोलार्ध में यह अनुपात 2:3 है। दक्षिणी गोलार्ध में भूमि और पानी का अनुपात क्या है?",
    options: {
      a: "4:11",
      b: "11:4",
      c: "1:3",
      d: "3:1"
    },
    options_hi: {
      a: "4:11",
      b: "11:4",
      c: "1:3",
      d: "3:1"
    },
    correct_option: "a",
    solution_text: "Earth sum = 1 + 2 = 3. Northern Hemisphere (NH) sum = 2 + 3 = 5.\nLet Earth area = 30 units (LCM of 3 and 5, doubled).\nEarth Land = (1/3) × 30 = 10 units; Earth Water = (2/3) × 30 = 20 units.\nEach hemisphere has half the Earth area = 15 units.\nNorthern Hemisphere (15 units):\nNH Land = (2/5) × 15 = 6 units.\nNH Water = (3/5) × 15 = 9 units.\nSouthern Hemisphere (SH):\nSH Land = Earth Land - NH Land = 10 - 6 = 4 units.\nSH Water = Earth Water - NH Water = 20 - 9 = 11 units.\nRatio of Land to Water in SH = 4 : 11.",
    solution_text_hi: "पृथ्वी का क्षेत्रफल 30 इकाई मानें:\nपृथ्वी भूमि = 10, पानी = 20।\nउत्तरी गोलार्ध = 15 इकाई => भूमि = 6, पानी = 9।\nदक्षिणी गोलार्ध: भूमि = 10 - 6 = 4, पानी = 20 - 9 = 11।\nअनुपात = 4 : 11।",
    shortcut_text: "Earth = 30 (10:20). NH = 15 (6:9). SH = (10-6) : (20-9) = 4 : 11.",
    shortcut_text_hi: "SH भूमि = 10 - 6 = 4, SH पानी = 20 - 9 = 11 => 4 : 11।"
  },
  {
    question_number: 8,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 2",
    type_category: "Successive Milk Replacement",
    type_category_hi: "क्रमिक दूध प्रतिस्थापन",
    question_text: "A vessel contains 60 liters of pure milk. 6 liters of milk are taken out and replaced with water. This process is repeated one more time. Find the final quantity of milk left in the vessel.",
    question_text_hi: "एक बर्तन में 60 लीटर शुद्ध दूध है। 6 लीटर दूध निकाला जाता है और उसकी जगह पानी डाल दिया जाता है। यह प्रक्रिया एक बार और दोहराई जाती है। बर्तन में बचे दूध की अंतिम मात्रा ज्ञात कीजिए।",
    options: {
      a: "48 Liters / लीटर",
      b: "48.6 Liters / लीटर",
      c: "50 Liters / लीटर",
      d: "54 Liters / लीटर"
    },
    options_hi: {
      a: "48 लीटर",
      b: "48.6 लीटर",
      c: "50 लीटर",
      d: "54 लीटर"
    },
    correct_option: "b",
    solution_text: "Formula for successive dilution:\nFinal Milk = Initial Milk × (1 - Replacement / Total)^n\nHere Initial = 60 L, Replacement = 6 L, Total = 60 L, n = 2.\nFinal Milk = 60 × (1 - 6/60)² = 60 × (9/10)² = 60 × 0.81 = 48.6 Liters.",
    solution_text_hi: "अंतिम मात्रा = प्रारंभिक × (1 - निकाला गया/कुल)^n\n= 60 × (1 - 6/60)² = 60 × (9/10)² = 60 × 0.81 = 48.6 लीटर।",
    shortcut_text: "60 × (9/10)² = 60 × 0.81 = 48.6 Liters.",
    shortcut_text_hi: "60 × 0.81 = 48.6 लीटर।"
  },
  {
    question_number: 9,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 1",
    type_category: "Three-Person Income-Expenditure",
    type_category_hi: "तीन व्यक्तियों की आय-व्यय",
    question_text: "The incomes of A, B, and C are in the ratio 3:7:4, and their expenses are in the ratio 4:3:5. If A saves Rs. 400 out of an income of Rs. 2,400, find the savings of B.",
    question_text_hi: "A, B, और C की आय 3:7:4 के अनुपात में है, और उनके व्यय 4:3:5 के अनुपात में हैं। यदि A Rs. 2,400 की आय में से Rs. 400 बचाता है, तो B की बचत ज्ञात कीजिए।",
    options: {
      a: "Rs. 4,025",
      b: "Rs. 4,100",
      c: "Rs. 4,700",
      d: "Rs. 5,125"
    },
    options_hi: {
      a: "₹4,025",
      b: "₹4,100",
      c: "₹4,700",
      d: "₹5,125"
    },
    correct_option: "b",
    solution_text: "A's Income = 3x = Rs. 2,400 => x = 800.\nB's Income = 7x = 7 × 800 = Rs. 5,600.\nA's Expense = Income - Savings = 2,400 - 400 = Rs. 2,000.\nExpense ratio of A = 4y = 2,000 => y = 500.\nB's Expense = 3y = 3 × 500 = Rs. 1,500.\nB's Savings = B's Income - B's Expense = 5,600 - 1,500 = Rs. 4,100.",
    solution_text_hi: "A की आय = 3x = 2400 => x = 800।\nB की आय = 7 × 800 = 5600।\nA का व्यय = 2400 - 400 = 2000 => 4y = 2000 => y = 500।\nB का व्यय = 3 × 500 = 1500।\nB की बचत = 5600 - 1500 = Rs. 4,100।",
    shortcut_text: "B's Income = 7(800) = 5600. B's Expense = 3(500) = 1500.\nSavings = 5600 - 1500 = Rs. 4,100.",
    shortcut_text_hi: "5600 - 1500 = Rs. 4,100।"
  },
  {
    question_number: 10,
    practice_set: "SET D",
    level: "Level 2: More Than Moderate",
    level_group: "Level 2: More Than Moderate",
    type_code: "Type 2",
    type_category: "Weighted Multi-Container Mixture",
    type_category_hi: "भारित बहु-कंटेनर मिश्रण",
    question_text: "Three containers have their volumes in the ratio 3:4:5. They are full of mixtures of milk and water. The mixtures contain milk and water in the ratios 4:1, 3:1, and 5:2 respectively. If the contents of all three containers are poured into a fourth container, what is the ratio of milk to water in the new container?",
    question_text_hi: "तीन कंटेनरों के आयतन का अनुपात 3:4:5 है। वे दूध और पानी के मिश्रण से भरे हुए हैं। मिश्रण में दूध और पानी का अनुपात क्रमशः 4:1, 3:1, और 5:2 है। यदि सभी तीन कंटेनरों की सामग्री को चौथे कंटेनर में डाला जाता है, तो नए कंटेनर में दूध और पानी का अनुपात क्या होगा?",
    options: {
      a: "137:113",
      b: "113:137",
      c: "157:53",
      d: "53:157"
    },
    options_hi: {
      a: "137:113",
      b: "113:137",
      c: "157:53",
      d: "53:157"
    },
    correct_option: "c",
    solution_text: "Sum of ratio parts: (4+1)=5, (3+1)=4, (5+2)=7.\nLCM of 5, 4, 7 = 140.\nLet container volumes be: C1 = 3 × 140 = 420, C2 = 4 × 140 = 560, C3 = 5 × 140 = 700.\nC1: Milk = (4/5) × 420 = 336, Water = 84.\nC2: Milk = (3/4) × 560 = 420, Water = 140.\nC3: Milk = (5/7) × 700 = 500, Water = 200.\nTotal Milk = 336 + 420 + 500 = 1256.\nTotal Water = 84 + 140 + 200 = 424.\nRatio Milk : Water = 1256 : 424 = 157 : 53.",
    solution_text_hi: "अनुपातों के योग: 5, 4, 7 का LCM = 140।\nआयतन: C1 = 420, C2 = 560, C3 = 700।\nC1: दूध = 336, पानी = 84।\nC2: दूध = 420, पानी = 140।\nC3: दूध = 500, पानी = 200।\nकुल दूध = 1256, कुल पानी = 424।\nअनुपात = 1256 : 424 = 157 : 53।",
    shortcut_text: "Total Milk = 336 + 420 + 500 = 1256. Total Water = 424.\n1256 : 424 = 157 : 53.",
    shortcut_text_hi: "1256 : 424 = 157 : 53।"
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
    type_category: "Mixture Cost & Profit Percentage",
    type_category_hi: "मिश्रण लागत और लाभ प्रतिशत",
    question_text: "A trader mixes 26 kg of rice priced at Rs. 20 per kg with 30 kg of another rice variety priced at Rs. 36 per kg. If he sells the entire mixture at Rs. 30 per kg, what is his approximate profit percentage?",
    question_text_hi: "एक व्यापारी Rs. 20 प्रति किलो की कीमत वाले 26 किलो चावल को Rs. 36 प्रति किलो की कीमत वाले 30 किलो चावल के साथ मिलाता है। यदि वह पूरे मिश्रण को Rs. 30 प्रति किलो पर बेचता है, तो उसका अनुमानित लाभ प्रतिशत क्या है?",
    options: {
      a: "5%",
      b: "10%",
      c: "12%",
      d: "15%"
    },
    options_hi: {
      a: "5%",
      b: "10%",
      c: "12%",
      d: "15%"
    },
    correct_option: "a",
    solution_text: "Total Cost Price (CP) = (26 × 20) + (30 × 36) = 520 + 1080 = Rs. 1600.\nTotal Weight = 26 + 30 = 56 kg.\nTotal Selling Price (SP) = 56 × 30 = Rs. 1680.\nProfit = SP - CP = 1680 - 1600 = Rs. 80.\nProfit Percentage = (80 / 1600) × 100 = 5%.",
    solution_text_hi: "कुल क्रय मूल्य = (26 × 20) + (30 × 36) = 520 + 1080 = Rs. 1600।\nकुल वजन = 56 किलो => कुल विक्रय मूल्य = 56 × 30 = Rs. 1680।\nलाभ = 1680 - 1600 = Rs. 80।\nलाभ % = (80 / 1600) × 100 = 5%।",
    shortcut_text: "CP = 1600, SP = 1680. Profit = 80.\nProfit % = 80 / 16 = 5%.",
    shortcut_text_hi: "लाभ % = (80 / 1600) × 100 = 5%।"
  },
  {
    question_number: 12,
    practice_set: "SET D",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 2",
    type_category: "Three-Component Alloy Modification",
    type_category_hi: "त्रि-घटक मिश्र धातु संशोधन",
    question_text: "An alloy contains copper, zinc, and nickel in the ratio 5:3:2. What quantity of nickel (in kg) must be added to 100 kg of this alloy to make the new ratio 5:3:3?",
    question_text_hi: "एक मिश्र धातु में तांबा, जस्ता और निकल 5:3:2 के अनुपात में हैं। नया अनुपात 5:3:3 बनाने के लिए इस मिश्र धातु के 100 किलो में कितना निकल (किलो में) मिलाया जाना चाहिए?",
    options: {
      a: "10 kg / किलो",
      b: "12 kg / किलो",
      c: "15 kg / किलो",
      d: "20 kg / किलो"
    },
    options_hi: {
      a: "10 किलो",
      b: "12 किलो",
      c: "15 किलो",
      d: "20 किलो"
    },
    correct_option: "a",
    solution_text: "Initial units: 5 + 3 + 2 = 10 units = 100 kg => 1 unit = 10 kg.\nInitial quantities: Copper = 50 kg, Zinc = 30 kg, Nickel = 20 kg.\nIn the new ratio 5:3:3, copper and zinc remain unchanged at 50 kg and 30 kg (still 5 and 3 units).\nNew Nickel needed = 3 units = 3 × 10 = 30 kg.\nNickel to add = 30 - 20 = 10 kg.",
    solution_text_hi: "प्रारंभिक कुल 10 इकाई = 100 किलो => 1 इकाई = 10 किलो।\nतांबा = 50 किलो, जस्ता = 30 किलो, निकल = 20 किलो।\nनया अनुपात 5:3:3 => निकल की नई मात्रा = 3 इकाई = 30 किलो।\nमिलाया गया निकल = 30 - 20 = 10 किलो।",
    shortcut_text: "Nickel increases by (3 - 2) = 1 unit.\n1 unit = 100 / 10 = 10 kg.",
    shortcut_text_hi: "निकल में वृद्धि = 3 - 2 = 1 इकाई = 10 किलो।"
  },
  {
    question_number: 13,
    practice_set: "SET D",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 4",
    type_category: "Square Proportionality & Breakage",
    type_category_hi: "वर्ग समानुपात और विखंडन",
    question_text: "The price of a diamond is directly proportional to the square of its weight. A diamond breaks into four pieces whose weights are in the ratio 1:2:3:4. If this breakage results in a loss of Rs. 1,40,000, find the initial price of the unbroken diamond.",
    question_text_hi: "हीरे की कीमत उसके वजन के वर्ग के सीधे आनुपातिक होती है। एक हीरा चार टुकड़ों में टूट जाता है जिनका वजन 1:2:3:4 के अनुपात में है। यदि इस टूटने से Rs. 1,40,000 का नुकसान होता है, तो बिना टूटे हीरे की प्रारंभिक कीमत ज्ञात कीजिए।",
    options: {
      a: "Rs. 1,50,000",
      b: "Rs. 2,00,000",
      c: "Rs. 2,50,000",
      d: "Rs. 3,00,000"
    },
    options_hi: {
      a: "₹1,50,000",
      b: "₹2,00,000",
      c: "₹2,50,000",
      d: "₹3,00,000"
    },
    correct_option: "b",
    solution_text: "Price P ∝ W².\nTotal weight W = 1 + 2 + 3 + 4 = 10 units.\nOriginal price ∝ 10² = 100 units.\nValue of 4 pieces ∝ (1² + 2² + 3² + 4²) = 1 + 4 + 9 + 16 = 30 units.\nLoss in value = 100 - 30 = 70 units.\nGiven loss = Rs. 1,40,000.\n70 units = 1,40,000 => 1 unit = Rs. 2,000.\nOriginal price = 100 units = 100 × 2,000 = Rs. 2,00,000.",
    solution_text_hi: "मूल्य P ∝ W²।\nकुल वजन = 1 + 2 + 3 + 4 = 10 इकाई।\nमूल कीमत = 10² = 100 इकाई।\nटुकड़ों की कीमत = 1² + 2² + 3² + 4² = 30 इकाई।\nहानि = 100 - 30 = 70 इकाई = Rs. 1,40,000 => 1 इकाई = Rs. 2,000।\nप्रारंभिक कीमत = 100 × 2,000 = Rs. 2,00,000।",
    shortcut_text: "Loss = 10² - (1+4+9+16) = 100 - 30 = 70 units.\n70 units = 140,000 => 1 unit = 2,000.\nOriginal = 100 × 2,000 = Rs. 2,00,000.",
    shortcut_text_hi: "70 इकाई = 1,40,000 => 100 इकाई = Rs. 2,00,000।"
  },
  {
    question_number: 14,
    practice_set: "SET D",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 6",
    type_category: "Partnership Investment & Time",
    type_category_hi: "साझेदारी निवेश और समय",
    question_text: "A and B started a business by investing Rs. 50,000 and Rs. 60,000 respectively. After 4 months, C joins them with an investment of Rs. 70,000. At the end of the year, they earn a total profit of Rs. 47,000. What is C's share of the profit?",
    question_text_hi: "A और B ने क्रमशः Rs. 50,000 और Rs. 60,000 का निवेश करके एक व्यवसाय शुरू किया। 4 महीने बाद, C Rs. 70,000 के निवेश के साथ उनके साथ जुड़ जाता है। वर्ष के अंत में, वे Rs. 47,000 का कुल लाभ कमाते हैं। लाभ में C का हिस्सा क्या है?",
    options: {
      a: "Rs. 10,000",
      b: "Rs. 12,000",
      c: "Rs. 14,000",
      d: "Rs. 15,000"
    },
    options_hi: {
      a: "₹10,000",
      b: "₹12,000",
      c: "₹14,000",
      d: "₹15,000"
    },
    correct_option: "c",
    solution_text: "Profit ratio = (Capital × Time):\nA: 50,000 × 12 = 600,000\nB: 60,000 × 12 = 720,000\nC: 70,000 × 8 (since joined after 4 months) = 560,000\nRatio A : B : C = 600 : 720 : 560 = 60 : 72 : 56 = 15 : 18 : 14.\nTotal profit units = 15 + 18 + 14 = 47 units.\n47 units = Rs. 47,000 => 1 unit = Rs. 1,000.\nC's share = 14 units = 14 × 1,000 = Rs. 14,000.",
    solution_text_hi: "लाभ का अनुपात = निवेश × समय:\nA = 50 × 12 = 600\nB = 60 × 12 = 720\nC = 70 × 8 = 560\nअनुपात = 15 : 18 : 14। कुल = 47 इकाई = Rs. 47,000 => 1 इकाई = Rs. 1,000।\nC का हिस्सा = 14 × 1,000 = Rs. 14,000।",
    shortcut_text: "Ratio = (5×12) : (6×12) : (7×8) = 60 : 72 : 56 = 15 : 18 : 14.\nTotal = 47 units = 47,000. C = 14 × 1,000 = Rs. 14,000.",
    shortcut_text_hi: "47 इकाई = Rs. 47,000 => C का हिस्सा = Rs. 14,000।"
  },
  {
    question_number: 15,
    practice_set: "SET D",
    level: "Level 3: Inspired from PYQs",
    level_group: "Level 3: Inspired from PYQs",
    type_code: "Type 2",
    type_category: "Successive Dilution 3-Cycles",
    type_category_hi: "क्रमिक तनुकरण 3-चक्र",
    question_text: "A container contains 40 liters of milk. From this, 4 liters of milk is taken out and replaced by water. This process is repeated exactly two more times (three times total). How much pure milk remains in the container?",
    question_text_hi: "एक कंटेनर में 40 लीटर दूध है। इसमें से 4 लीटर दूध निकालकर उसकी जगह पानी डाल दिया जाता है। यह प्रक्रिया ठीक दो बार और (कुल तीन बार) दोहराई जाती है। कंटेनर में कितना शुद्ध दूध बचता है?",
    options: {
      a: "28 Liters / लीटर",
      b: "29.16 Liters / लीटर",
      c: "30 Liters / लीटर",
      d: "32.4 Liters / लीटर"
    },
    options_hi: {
      a: "28 लीटर",
      b: "29.16 लीटर",
      c: "30 लीटर",
      d: "32.4 लीटर"
    },
    correct_option: "b",
    solution_text: "Formula: Remaining Milk = Initial × (1 - x / V)^n\nHere Initial = 40 L, x = 4 L, V = 40 L, n = 3.\nRemaining Milk = 40 × (1 - 4/40)³ = 40 × (9/10)³\n= 40 × (729 / 1000) = 29160 / 1000 = 29.16 Liters.",
    solution_text_hi: "दूध की शेष मात्रा = 40 × (1 - 4/40)³ = 40 × (9/10)³\n= 40 × (729 / 1000) = 29.16 लीटर।",
    shortcut_text: "40 × (0.9)³ = 40 × 0.729 = 29.16 Liters.",
    shortcut_text_hi: "40 × 0.729 = 29.16 लीटर।"
  },

  // ==========================================
  // LEVEL 4: PYQ+ (Q16 to Q20)
  // ==========================================
  {
    question_number: 16,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 1",
    type_category: "Linked Income-Expense Scaling",
    type_category_hi: "संयुक्त आय-व्यय स्केलिंग",
    question_text: "The incomes of A and B are in the ratio 5:3, and their expenditures are in the ratio 9:5. If A's income is exactly twice B's expenditure, what is the ratio of their savings?",
    question_text_hi: "A और B की आय 5:3 के अनुपात में है, और उनके व्यय 9:5 के अनुपात में हैं। यदि A की आय B के व्यय की ठीक दोगुनी है, तो उनकी बचत का अनुपात क्या है?",
    options: {
      a: "11:7",
      b: "13:5",
      c: "1:1",
      d: "15:8"
    },
    options_hi: {
      a: "11:7",
      b: "13:5",
      c: "1:1",
      d: "15:8"
    },
    correct_option: "c",
    solution_text: "Let incomes be 5x and 3x. Let expenditures be 9y and 5y.\nGiven: A's income = 2 × B's expenditure\n5x = 2(5y) = 10y => x = 2y.\nSavings of A = Income - Expenditure = 5x - 9y = 5(2y) - 9y = 10y - 9y = y.\nSavings of B = 3x - 5y = 3(2y) - 5y = 6y - 5y = y.\nRatio of savings = y : y = 1 : 1.",
    solution_text_hi: "आय = 5x, 3x तथा व्यय = 9y, 5y।\n5x = 2(5y) = 10y => x = 2y।\nA की बचत = 5(2y) - 9y = y।\nB की बचत = 3(2y) - 5y = y।\nबचत का अनुपात = y : y = 1 : 1।",
    shortcut_text: "5x = 10y => x = 2y.\nA savings = 10y - 9y = y. B savings = 6y - 5y = y. Ratio = 1 : 1.",
    shortcut_text_hi: "A की बचत = y, B की बचत = y => अनुपात = 1 : 1।"
  },
  {
    question_number: 17,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 1",
    type_category: "Leap Frequency & Distance Ratio",
    type_category_hi: "छलांग आवृत्ति और दूरी अनुपात",
    question_text: "A dog takes 3 leaps for every 5 leaps of a hare. If 1 leap of the dog is equal in distance to 3 leaps of the hare, what is the ratio of the speed of the dog to that of the hare?",
    question_text_hi: "एक कुत्ता एक खरगोश की हर 5 छलांग पर 3 छलांग लगाता है। यदि कुत्ते की 1 छलांग दूरी में खरगोश की 3 छलांग के बराबर है, तो कुत्ते और खरगोश की गति का अनुपात क्या है?",
    options: {
      a: "8:9",
      b: "9:8",
      c: "5:9",
      d: "9:5"
    },
    options_hi: {
      a: "8:9",
      b: "9:8",
      c: "5:9",
      d: "9:5"
    },
    correct_option: "d",
    solution_text: "Speed = Leap Frequency × Distance per leap.\nFrequency ratio (Dog : Hare) = 3 : 5.\nDistance: 1 leap of Dog = 3 leaps of Hare => (Dog distance / Hare distance) = 3 / 1.\nSpeed ratio = (3 × 3) : (5 × 1) = 9 : 5.",
    solution_text_hi: "गति = छलांग आवृत्ति × प्रति छलांग दूरी।\nआवृत्ति = 3 : 5।\nदूरी: कुत्ते की 1 छलांग = खरगोश की 3 छलांग => 3 : 1।\nगति का अनुपात = (3 × 3) : (5 × 1) = 9 : 5।",
    shortcut_text: "Speed = Frequency × Step = (3 × 3) : (5 × 1) = 9 : 5.",
    shortcut_text_hi: "(3 × 3) : (5 × 1) = 9 : 5।"
  },
  {
    question_number: 18,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 1",
    type_category: "Exam Pass-Fail Population Shift",
    type_category_hi: "परीक्षा उत्तीर्ण-अनुत्तीर्ण परिवर्तन",
    question_text: "In an examination, the ratio of candidates who passed to those who failed was 25:4. If 5 more candidates had appeared and the number of failures was 2 less than earlier, the pass-to-fail ratio would have been 22:3. Find the total number of students who appeared initially.",
    question_text_hi: "एक परीक्षा में, उत्तीर्ण होने वाले और अनुत्तीर्ण होने वाले उम्मीदवारों का अनुपात 25:4 था। यदि 5 और उम्मीदवार उपस्थित होते और अनुत्तीर्ण होने वालों की संख्या पहले की तुलना में 2 कम होती, तो उत्तीर्ण और अनुत्तीर्ण का अनुपात 22:3 होता। प्रारंभ में उपस्थित होने वाले छात्रों की कुल संख्या ज्ञात कीजिए।",
    options: {
      a: "145",
      b: "150",
      c: "155",
      d: "160"
    },
    options_hi: {
      a: "145",
      b: "150",
      c: "155",
      d: "160"
    },
    correct_option: "a",
    solution_text: "Initial Pass = 25x, Fail = 4x. Total candidates = 25x + 4x = 29x.\nNew conditions:\nNew Total = 29x + 5\nNew Fail = 4x - 2\nNew Pass = New Total - New Fail = (29x + 5) - (4x - 2) = 25x + 7.\nNew Pass / Fail ratio:\n(25x + 7) / (4x - 2) = 22 / 3\n3(25x + 7) = 22(4x - 2)\n75x + 21 = 88x - 44\n13x = 65 => x = 5.\nInitial candidates who appeared = 29x = 29 × 5 = 145.",
    solution_text_hi: "प्रारंभिक उत्तीर्ण = 25x, अनुत्तीर्ण = 4x, कुल = 29x।\nनया कुल = 29x + 5, नए अनुत्तीर्ण = 4x - 2।\nनए उत्तीर्ण = (29x + 5) - (4x - 2) = 25x + 7।\n(25x + 7) / (4x - 2) = 22 / 3\n75x + 21 = 88x - 44 => 13x = 65 => x = 5।\nप्रारंभिक कुल छात्र = 29 × 5 = 145।",
    shortcut_text: "(25x + 7) / (4x - 2) = 22 / 3 => 13x = 65 => x = 5.\nTotal = 29 × 5 = 145.",
    shortcut_text_hi: "13x = 65 => x = 5। कुल छात्र = 29 × 5 = 145।"
  },
  {
    question_number: 19,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 2",
    type_category: "Reverse Replacement Concentration",
    type_category_hi: "व्युत्क्रम प्रतिस्थापन सांद्रता",
    question_text: "A vessel is full of a mixture containing 20% acid and 80% water. 50 liters of this mixture are taken out and replaced entirely with water. If the resulting mixture now contains 15% acid, find the initial total quantity of the mixture.",
    question_text_hi: "एक बर्तन 20% एसिड और 80% पानी के मिश्रण से भरा है। इस मिश्रण का 50 लीटर निकाल लिया जाता है और पूरी तरह से पानी से बदल दिया जाता है। यदि परिणामी मिश्रण में अब 15% एसिड है, तो मिश्रण की प्रारंभिक कुल मात्रा ज्ञात कीजिए।",
    options: {
      a: "100 Liters / लीटर",
      b: "150 Liters / लीटर",
      c: "200 Liters / लीटर",
      d: "250 Liters / लीटर"
    },
    options_hi: {
      a: "100 लीटर",
      b: "150 लीटर",
      c: "200 लीटर",
      d: "250 लीटर"
    },
    correct_option: "c",
    solution_text: "Let total volume be V liters.\nUsing formula for concentration after single replacement with water:\nFinal % = Initial % × (1 - Removed / V)\n15 = 20 × (1 - 50 / V)\n15 / 20 = 1 - 50 / V\n3 / 4 = 1 - 50 / V\n50 / V = 1 - 3/4 = 1/4\nV = 50 × 4 = 200 Liters.",
    solution_text_hi: "अंतिम % = प्रारंभिक % × (1 - निकाला गया / कुल)\n15 = 20 × (1 - 50/V) => 3/4 = 1 - 50/V\n50/V = 1/4 => V = 200 लीटर।",
    shortcut_text: "Acid reduced from 20% to 15% (factor of 3/4).\nFraction replaced = 1 - 3/4 = 1/4.\n1/4 of Total = 50L => Total = 200 Liters.",
    shortcut_text_hi: "1/4 भाग = 50 लीटर => कुल आयतन = 200 लीटर।"
  },
  {
    question_number: 20,
    practice_set: "SET D",
    level: "Level 4: PYQ+",
    level_group: "Level 4: PYQ+",
    type_code: "Type 6",
    type_category: "Fractional Capital & Duration Partnership",
    type_category_hi: "आंशिक पूंजी व समय साझेदारी",
    question_text: "X, Y, and Z start a business. X invests 1/4 of the total capital for 1/4 of the total time. Y invests 1/5 of the capital for 1/2 of the time. Z invests the remaining capital for the entire time. If the total profit is Rs. 11,400, find the profit share of Z.",
    question_text_hi: "X, Y और Z एक व्यवसाय शुरू करते हैं। X कुल पूंजी का 1/4 भाग, कुल समय के 1/4 भाग के लिए निवेश करता है। Y पूंजी का 1/5 भाग, समय के 1/2 भाग के लिए निवेश करता है। Z शेष पूंजी को पूरे समय के लिए निवेश करता है। यदि कुल लाभ Rs. 11,400 है, तो Z का लाभ हिस्सा ज्ञात कीजिए।",
    options: {
      a: "Rs. 4,500",
      b: "Rs. 5,400",
      c: "Rs. 6,600",
      d: "Rs. 8,800"
    },
    options_hi: {
      a: "₹4,500",
      b: "₹5,400",
      c: "₹6,600",
      d: "₹8,800"
    },
    correct_option: "d",
    solution_text: "Let total capital = 20, total time = 4 units.\nX: Capital = (1/4) × 20 = 5, Time = (1/4) × 4 = 1. Share = 5 × 1 = 5.\nY: Capital = (1/5) × 20 = 4, Time = (1/2) × 4 = 2. Share = 4 × 2 = 8.\nZ: Capital = 20 - (5 + 4) = 11, Time = 4. Share = 11 × 4 = 44.\nProfit ratio X : Y : Z = 5 : 8 : 44.\nTotal units = 5 + 8 + 44 = 57 units.\n57 units = Rs. 11,400 => 1 unit = Rs. 200.\nZ's profit share = 44 × 200 = Rs. 8,800.",
    solution_text_hi: "कुल पूंजी = 20, कुल समय = 4 मानें।\nX = 5 × 1 = 5\nY = 4 × 2 = 8\nZ = 11 × 4 = 44\nअनुपात = 5 : 8 : 44। कुल = 57 इकाई = Rs. 11,400 => 1 इकाई = Rs. 200।\nZ का हिस्सा = 44 × 200 = Rs. 8,800।",
    shortcut_text: "Ratio = (1/16) : (1/10) : (11/20) = 5 : 8 : 44.\nZ share = (44/57) × 11,400 = 44 × 200 = Rs. 8,800.",
    shortcut_text_hi: "(44/57) × 11,400 = 44 × 200 = Rs. 8,800।"
  },

  // ==========================================
  // LEVEL 5: PYQ++ (Q21 to Q25)
  // ==========================================
  {
    question_number: 21,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 2",
    type_category: "Multi-Juice Replacement & Differential",
    type_category_hi: "बहु-रस प्रतिस्थापन और अंतर",
    question_text: "A container holds a mixture of orange, apple, and guava juices in the ratio of 5:7:4 respectively. 24 liters of this mixture is taken out, and then 10 liters of orange juice and 6 liters of guava juice are added to the vessel. If the resultant quantity of apple juice is 14 liters more than the resultant quantity of orange juice, what was the initial quantity of mixture in the vessel?",
    question_text_hi: "एक कंटेनर में संतरे, सेब और अमरुद के रस का मिश्रण क्रमशः 5:7:4 के अनुपात में है। इस मिश्रण का 24 लीटर निकाला जाता है, और फिर बर्तन में 10 लीटर संतरे का रस और 6 लीटर अमरुद का रस मिलाया जाता है। यदि सेब के रस की परिणामी मात्रा संतरे के रस की परिणामी मात्रा से 14 लीटर अधिक है, तो बर्तन में मिश्रण की प्रारंभिक मात्रा क्या थी?",
    options: {
      a: "210 Liters / लीटर",
      b: "216 Liters / लीटर",
      c: "235 Liters / लीटर",
      d: "240 Liters / लीटर"
    },
    options_hi: {
      a: "210 लीटर",
      b: "216 लीटर",
      c: "235 लीटर",
      d: "240 लीटर"
    },
    correct_option: "b",
    solution_text: "Initial juices ratio = 5x, 7x, 4x. Total = 16x.\nIn 24 liters removed:\nOrange removed = (5/16) × 24 = 7.5 Liters.\nApple removed = (7/16) × 24 = 10.5 Liters.\nThen 10L orange juice is added:\nFinal Orange = 5x - 7.5 + 10 = 5x + 2.5 Liters.\nFinal Apple = 7x - 10.5 Liters.\nGiven condition: Final Apple = Final Orange + 14\n7x - 10.5 = (5x + 2.5) + 14\n7x - 10.5 = 5x + 16.5\n2x = 27 => x = 13.5.\nInitial quantity in vessel = 16x = 16 × 13.5 = 216 Liters.",
    solution_text_hi: "कुल मिश्रण = 16x।\n24L निकालने पर: संतरा = 7.5L, सेब = 10.5L।\nनया संतरा = 5x - 7.5 + 10 = 5x + 2.5।\nनया सेब = 7x - 10.5।\n7x - 10.5 = (5x + 2.5) + 14 => 2x = 27 => x = 13.5।\nप्रारंभिक मिश्रण = 16 × 13.5 = 216 लीटर।",
    shortcut_text: "2x = 10.5 + 2.5 + 14 = 27 => x = 13.5.\nTotal = 16 × 13.5 = 216 Liters.",
    shortcut_text_hi: "2x = 27 => x = 13.5। कुल = 16 × 13.5 = 216 लीटर।"
  },
  {
    question_number: 22,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 6",
    type_category: "Accidental Swap & Bill Increase",
    type_category_hi: "आकस्मिक अदला-बदली और बिल वृद्धि",
    question_text: "An order was placed for 5 kg of premium coffee and some additional kilograms of ordinary coffee. The price of the premium coffee per kg was three times that of the ordinary coffee. Upon delivery, it was found that the quantities of premium and ordinary coffee had been accidentally swapped, which increased the bill by 40%. Find the original ratio of premium coffee to ordinary coffee.",
    question_text_hi: "5 किलो प्रीमियम कॉफी और कुछ अतिरिक्त किलोग्राम साधारण कॉफी का ऑर्डर दिया गया था। प्रति किलो प्रीमियम कॉफी की कीमत साधारण कॉफी से तीन गुना थी। डिलीवरी पर, यह पाया गया कि प्रीमियम और साधारण कॉफी की मात्रा गलती से बदल दी गई थी, जिससे बिल में 40% की वृद्धि हुई। प्रीमियम कॉफी और साधारण कॉफी का मूल अनुपात ज्ञात कीजिए।",
    options: {
      a: "1:2",
      b: "2:1",
      c: "1:3",
      d: "3:1"
    },
    options_hi: {
      a: "1:2",
      b: "2:1",
      c: "1:3",
      d: "3:1"
    },
    correct_option: "a",
    solution_text: "Let ordinary coffee ordered = x kg.\nPrice of ordinary = Rs. 1/kg, Price of premium = Rs. 3/kg.\nOriginal bill = 5(3) + x(1) = 15 + x.\nSwapped delivery: x kg premium and 5 kg ordinary.\nSwapped bill = x(3) + 5(1) = 3x + 5.\nGiven: Swapped bill = 1.40 × Original bill\n3x + 5 = 1.4(15 + x) = 21 + 1.4x\n3x - 1.4x = 21 - 5\n1.6x = 16 => x = 10 kg.\nOriginal ratio (Premium : Ordinary) = 5 : 10 = 1 : 2.",
    solution_text_hi: "माना साधारण कॉफी = x किलो। दर = साधारण 1, प्रीमियम 3।\nमूल बिल = 5(3) + x(1) = 15 + x।\nअदला-बदली बिल = 3x + 5।\n3x + 5 = 1.4(15 + x) => 1.6x = 16 => x = 10 किलो।\nमूल अनुपात = 5 : 10 = 1 : 2।",
    shortcut_text: "3x + 5 = 1.4(15 + x) => 1.6x = 16 => x = 10 kg.\nRatio = 5 : 10 = 1 : 2.",
    shortcut_text_hi: "1.6x = 16 => x = 10। अनुपात = 5 : 10 = 1 : 2।"
  },
  {
    question_number: 23,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 2",
    type_category: "Dilution After Partial Removal",
    type_category_hi: "आंशिक निष्कासन के बाद तनुकरण",
    question_text: "In a 90-liter mixture of milk and water, the percentage of water is 30%. A milkman gave 18 liters of this mixture to a customer and then added 18 liters of pure water to the remaining mixture. What is the final percentage of milk in the mixture?",
    question_text_hi: "दूध और पानी के 90-लीटर मिश्रण में, पानी का प्रतिशत 30% है। एक दूधवाले ने एक ग्राहक को इस मिश्रण का 18 लीटर दिया और फिर शेष मिश्रण में 18 लीटर शुद्ध पानी मिला दिया। मिश्रण में दूध का अंतिम प्रतिशत क्या है?",
    options: {
      a: "42%",
      b: "48%",
      c: "52%",
      d: "56%"
    },
    options_hi: {
      a: "42%",
      b: "48%",
      c: "52%",
      d: "56%"
    },
    correct_option: "d",
    solution_text: "Initial milk concentration = 100% - 30% = 70%.\nInitial Milk quantity = 70% of 90 = 63 Liters.\nWhen 18 liters is taken out, remaining mixture = 90 - 18 = 72 Liters.\nMilk remaining in 72L = 70% of 72 = 50.4 Liters.\n18 liters of pure water is added, restoring total volume to 72 + 18 = 90 Liters.\nMilk quantity remains 50.4 Liters.\nFinal percentage of milk = (50.4 / 90) × 100 = 56%.",
    solution_text_hi: "दूध का प्रारंभिक प्रतिशत = 70%।\n18L निकालने के बाद शेष मिश्रण = 72L।\n72L में दूध = 72 का 70% = 50.4 लीटर।\n18L पानी मिलाने पर कुल मिश्रण पुनः 90L हो जाता है।\nदूध का अंतिम प्रतिशत = (50.4 / 90) × 100 = 56%।",
    shortcut_text: "Milk remaining = 70% of (90 - 18) = 50.4L.\nFinal % = (50.4 / 90) × 100 = 56%.",
    shortcut_text_hi: "70% × (72 / 90) = 70% × 0.8 = 56%।"
  },
  {
    question_number: 24,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 4",
    type_category: "Candle Burning Rate Ratio",
    type_category_hi: "मोमबत्ती जलने की दर अनुपात",
    question_text: "Two candles of the exact same height are lighted at the same time. The first is fully consumed in 8 hours and the second in 6 hours. Assuming each burns at a constant rate, how many hours after being lighted will the ratio of the height of the first candle to the second become 2:1?",
    question_text_hi: "बिल्कुल समान ऊंचाई की दो मोमबत्तियां एक ही समय पर जलाई जाती हैं। पहली 8 घंटे में और दूसरी 6 घंटे में पूरी तरह से जल जाती है। यह मानते हुए कि प्रत्येक एक स्थिर दर पर जलती है, जलाए जाने के कितने घंटे बाद पहली और दूसरी मोमबत्ती की ऊंचाई का अनुपात 2:1 हो जाएगा?",
    options: {
      a: "3.6 hours / घंटे",
      b: "4 hours / घंटे",
      c: "4.8 hours / घंटे",
      d: "5 hours / घंटे"
    },
    options_hi: {
      a: "3.6 घंटे",
      b: "4 घंटे",
      c: "4.8 घंटे",
      d: "5 घंटे"
    },
    correct_option: "c",
    solution_text: "Let initial height of both candles be H.\nHeight remaining after t hours:\nCandle 1: h1 = H(1 - t/8)\nCandle 2: h2 = H(1 - t/6)\nGiven condition: h1 / h2 = 2 / 1\n(1 - t/8) / (1 - t/6) = 2 / 1\n1 - t/8 = 2(1 - t/6) = 2 - t/3\nt/3 - t/8 = 2 - 1 = 1\n(8t - 3t) / 24 = 1\n5t / 24 = 1 => t = 24 / 5 = 4.8 hours.",
    solution_text_hi: "माना ऊंचाई H है। t घंटे बाद ऊंचाई:\nh1 = H(1 - t/8), h2 = H(1 - t/6)।\n(1 - t/8) / (1 - t/6) = 2 / 1\n1 - t/8 = 2 - t/3 => t/3 - t/8 = 1\n5t / 24 = 1 => t = 4.8 घंटे।",
    shortcut_text: "t/3 - t/8 = 1 => 5t/24 = 1 => t = 24/5 = 4.8 hours.",
    shortcut_text_hi: "5t/24 = 1 => t = 24/5 = 4.8 घंटे।"
  },
  {
    question_number: 25,
    practice_set: "SET D",
    level: "Level 5: PYQ++",
    level_group: "Level 5: PYQ++",
    type_code: "Type 3",
    type_category: "Multi-Stage Consecutive Alligation",
    type_category_hi: "बहु-चरणीय क्रमिक मिश्रण",
    question_text: "Alloy A consists of iron and copper in the ratio 3:4. Alloy B consists of iron and copper in the ratio 5:2. Alloy C is prepared by mixing A and B in the ratio 4:5. If Alloy C is then mixed with pure copper in the ratio 3:1 to form Alloy D, what is the final ratio of iron to copper in Alloy D?",
    question_text_hi: "मिश्र धातु A में लोहा और तांबा 3:4 के अनुपात में है। मिश्र धातु B में लोहा और तांबा 5:2 के अनुपात में है। मिश्र धातु C को A और B को 4:5 के अनुपात में मिलाकर तैयार किया जाता है। यदि मिश्र धातु C को फिर शुद्ध तांबे के साथ 3:1 के अनुपात में मिलाकर मिश्र धातु D बनाया जाता है, तो मिश्र धातु D में लोहे और तांबे का अंतिम अनुपात क्या है?",
    options: {
      a: "11:15",
      b: "13:17",
      c: "37:47",
      d: "17:23"
    },
    options_hi: {
      a: "11:15",
      b: "13:17",
      c: "37:47",
      d: "17:23"
    },
    correct_option: "c",
    solution_text: "Both A (3:4) and B (5:2) have sum = 7 parts.\nAlloy C is formed by 4 parts of A and 5 parts of B (total 9 parts):\nIron in C = 4(3/7) + 5(5/7) = 12/7 + 25/7 = 37/7.\nCopper in C = 4(4/7) + 5(2/7) = 16/7 + 10/7 = 26/7.\nRatio Fe : Cu in C = 37 : 26 (total 63 units).\nNow mix 3 parts of C with 1 part pure copper:\nLet 3 parts C = 3 × 63 = 189 units => Fe = 3 × 37 = 111, Cu = 3 × 26 = 78.\n1 part pure copper = 1 × 63 = 63 units of Cu.\nTotal Fe in Alloy D = 111.\nTotal Cu in Alloy D = 78 + 63 = 141.\nFinal Ratio Fe : Cu = 111 : 141 = 37 : 47 (dividing by 3).",
    solution_text_hi: "A (3:4, योग 7) और B (5:2, योग 7)।\nमिश्र धातु C (4 भाग A, 5 भाग B):\nलोहा = 4(3/7) + 5(5/7) = 37/7।\nतांबा = 4(4/7) + 5(2/7) = 26/7।\nC में Fe : Cu = 37 : 26 (कुल 63 इकाई)।\n3 भाग C और 1 भाग शुद्ध तांबा:\nFe = 3 × 37 = 111।\nCu = (3 × 26) + 63 = 78 + 63 = 141।\nअंतिम अनुपात = 111 : 141 = 37 : 47।",
    shortcut_text: "Fe = 3 × 37 = 111. Cu = 3 × 26 + 63 = 141.\n111 : 141 = 37 : 47.",
    shortcut_text_hi: "111 : 141 = 37 : 47।"
  },

  // ==========================================
  // LEVEL 6: ADVANCED / MAINS LEVEL (Q26 to Q30)
  // ==========================================
  {
    question_number: 26,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 2",
    type_category: "Varying Volume Successive Replacement",
    type_category_hi: "परिवर्ती मात्रा क्रमिक प्रतिस्थापन",
    question_text: "A vessel contains 400 liters of pure milk. First, 20 liters of milk are taken out and replaced by water. Then 40 liters of the new mixture are taken out and replaced by water. Finally, 60 liters of the resulting mixture are taken out and replaced by water. Find the final amount of milk in the vessel.",
    question_text_hi: "एक बर्तन में 400 लीटर शुद्ध दूध है। पहले 20 लीटर दूध निकाला जाता है और पानी से बदल दिया जाता है। फिर नए मिश्रण का 40 लीटर निकाला जाता है और पानी से बदल दिया जाता है। अंत में, परिणामी मिश्रण का 60 लीटर निकाला जाता है और पानी से बदल दिया जाता है। बर्तन में दूध की अंतिम मात्रा ज्ञात कीजिए।",
    options: {
      a: "280.5 Liters / लीटर",
      b: "290.7 Liters / लीटर",
      c: "300.0 Liters / लीटर",
      d: "310.4 Liters / लीटर"
    },
    options_hi: {
      a: "280.5 लीटर",
      b: "290.7 लीटर",
      c: "300.0 लीटर",
      d: "310.4 लीटर"
    },
    correct_option: "b",
    solution_text: "Using the compounding replacement formula with varying removal quantities:\nFinal Milk = Initial × (1 - x1/V) × (1 - x2/V) × (1 - x3/V)\n= 400 × (1 - 20/400) × (1 - 40/400) × (1 - 60/400)\n= 400 × (380/400) × (360/400) × (340/400)\n= 400 × (19/20) × (9/10) × (17/20)\n= (400 × 19 × 9 × 17) / 4000\n= (19 × 9 × 17) / 10\n= (171 × 17) / 10 = 2907 / 10 = 290.7 Liters.",
    solution_text_hi: "क्रमिक प्रतिस्थापन सूत्र से:\nदूध = 400 × (1 - 20/400) × (1 - 40/400) × (1 - 60/400)\n= 400 × (19/20) × (9/10) × (17/20)\n= (19 × 9 × 17) / 10 = 2907 / 10 = 290.7 लीटर।",
    shortcut_text: "400 × (19/20) × (9/10) × (17/20) = (171 × 17) / 10 = 290.7 Liters.",
    shortcut_text_hi: "(171 × 17) / 10 = 290.7 लीटर।"
  },
  {
    question_number: 27,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 3",
    type_category: "Alligation of Zinc Proportions",
    type_category_hi: "जस्ता अनुपातों का मिश्रण नियम",
    question_text: "Two alloys consist of zinc and copper in the ratios 1:2 and 2:3. In what ratio should the two alloys be mixed to form a new alloy containing zinc and copper in the ratio 5:8?",
    question_text_hi: "दो मिश्र धातुओं में जस्ता और तांबा 1:2 और 2:3 के अनुपात में है। जस्ता और तांबा 5:8 के अनुपात में युक्त एक नई मिश्र धातु बनाने के लिए दोनों मिश्र धातुओं को किस अनुपात में मिलाया जाना चाहिए?",
    options: {
      a: "3:10",
      b: "2:5",
      c: "1:4",
      d: "3:8"
    },
    options_hi: {
      a: "3:10",
      b: "2:5",
      c: "1:4",
      d: "3:8"
    },
    correct_option: "a",
    solution_text: "Fraction of Zinc in Alloy 1 = 1 / (1 + 2) = 1/3.\nFraction of Zinc in Alloy 2 = 2 / (2 + 3) = 2/5.\nFraction of Zinc in Mean Mixture = 5 / (5 + 8) = 5/13.\nApplying Rule of Alligation:\n|5/13 - 2/5| : |5/13 - 1/3|\n= |(25 - 26) / 65| : |(15 - 13) / 39|\n= 1/65 : 2/39\nMultiply both by 195 (LCM of 65 and 39):\n(195 / 65) : 2 × (195 / 39) = 3 : 2 × 5 = 3 : 10.",
    solution_text_hi: "जस्ता अनुपात: A = 1/3, B = 2/5, माध्य = 5/13।\nमिश्रण नियम:\n|5/13 - 2/5| : |5/13 - 1/3| = 1/65 : 2/39।\n195 से गुणा करने पर: 3 : 10।",
    shortcut_text: "1/65 : 2/39 = 39 : 130 = 3 : 10.",
    shortcut_text_hi: "1/65 : 2/39 = 39 : 130 = 3 : 10।"
  },
  {
    question_number: 28,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 2",
    type_category: "Constant Component Dilution",
    type_category_hi: "स्थिर घटक तनुकरण",
    question_text: "A mixture of milk and water measures 60 liters. It contains 10% water. How much water must be added to make the water content 25% of the total mixture?",
    question_text_hi: "दूध और पानी का एक मिश्रण 60 लीटर का है। इसमें 10% पानी है। कुल मिश्रण का पानी 25% बनाने के लिए इसमें कितना पानी मिलाया जाना चाहिए?",
    options: {
      a: "10 Liters / लीटर",
      b: "12 Liters / लीटर",
      c: "15 Liters / लीटर",
      d: "18 Liters / लीटर"
    },
    options_hi: {
      a: "10 लीटर",
      b: "12 लीटर",
      c: "15 लीटर",
      d: "18 लीटर"
    },
    correct_option: "b",
    solution_text: "Milk quantity remains unchanged because only water is added.\nInitial Milk = (100% - 10%) of 60 = 90% of 60 = 54 Liters.\nIn the new mixture, water is 25%, so milk is 75%.\n75% of New Total Volume = 54 Liters\nNew Total Volume = 54 / 0.75 = 72 Liters.\nWater added = New Volume - Initial Volume = 72 - 60 = 12 Liters.",
    solution_text_hi: "दूध की मात्रा स्थिर रहती है:\nप्रारंभिक दूध = 60 का 90% = 54 लीटर।\nनए मिश्रण में दूध = 100% - 25% = 75%।\nनया कुल आयतन = 54 / 0.75 = 72 लीटर।\nमिलाया गया पानी = 72 - 60 = 12 लीटर।",
    shortcut_text: "Milk is constant: 54 / 0.75 = 72L.\nWater added = 72 - 60 = 12 Liters.",
    shortcut_text_hi: "54 / 0.75 = 72 लीटर => मिलाया गया पानी = 72 - 60 = 12 लीटर।"
  },
  {
    question_number: 29,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 1",
    type_category: "Triple Component Percentage Expansion",
    type_category_hi: "त्रिक घटक प्रतिशत विस्तार",
    question_text: "The ratio of the prices of three items A, B, and C is 3:5:7. If the price of A is increased by 20%, B by 10%, and C by 30%, what will be the new ratio of their prices?",
    question_text_hi: "तीन वस्तुओं A, B, और C की कीमतों का अनुपात 3:5:7 है। यदि A की कीमत में 20%, B में 10% और C में 30% की वृद्धि की जाती है, तो उनकी कीमतों का नया अनुपात क्या होगा?",
    options: {
      a: "30:50:70",
      b: "35:56:90",
      c: "36:55:91",
      d: "38:52:95"
    },
    options_hi: {
      a: "30:50:70",
      b: "35:56:90",
      c: "36:55:91",
      d: "38:52:95"
    },
    correct_option: "c",
    solution_text: "Let the initial prices be 300, 500, and 700.\nPrice of A after 20% increase = 300 × 1.20 = 360.\nPrice of B after 10% increase = 500 × 1.10 = 550.\nPrice of C after 30% increase = 700 × 1.30 = 910.\nNew ratio = 360 : 550 : 910 = 36 : 55 : 91.",
    solution_text_hi: "माना प्रारंभिक कीमतें 300, 500 और 700 हैं।\nA = 300 × 1.20 = 360।\nB = 500 × 1.10 = 550।\nC = 700 × 1.30 = 910।\nनया अनुपात = 360 : 550 : 910 = 36 : 55 : 91।",
    shortcut_text: "(3 × 1.2) : (5 × 1.1) : (7 × 1.3) = 3.6 : 5.5 : 9.1 = 36 : 55 : 91.",
    shortcut_text_hi: "3.6 : 5.5 : 9.1 = 36 : 55 : 91।"
  },
  {
    question_number: 30,
    practice_set: "SET D",
    level: "Level 6: Advanced / Mains Level",
    level_group: "Level 6: Advanced / Mains Level",
    type_code: "Type 1",
    type_category: "Equal Savings Step Matching",
    type_category_hi: "समान बचत अंतर मिलान",
    question_text: "The incomes of X and Y are in the ratio 4:3, and their expenses are in the ratio 3:2. If X and Y each save Rs. 4,000, what is the income of X?",
    question_text_hi: "X और Y की आय 4:3 के अनुपात में है, और उनके व्यय 3:2 के अनुपात में हैं। यदि X और Y प्रत्येक Rs. 4,000 की बचत करते हैं, तो X की आय क्या है?",
    options: {
      a: "Rs. 12,000",
      b: "Rs. 16,000",
      c: "Rs. 20,000",
      d: "Rs. 24,000"
    },
    options_hi: {
      a: "₹12,000",
      b: "₹16,000",
      c: "₹20,000",
      d: "₹24,000"
    },
    correct_option: "b",
    solution_text: "Income ratio X : Y = 4 : 3\nExpenditure ratio X : Y = 3 : 2\nDifference in income and expenditure units:\nFor X: 4 - 3 = 1 unit.\nFor Y: 3 - 2 = 1 unit.\nSince both differences are equal to savings:\n1 unit = Rs. 4,000.\nIncome of X = 4 units = 4 × 4,000 = Rs. 16,000.",
    solution_text_hi: "आय = 4 : 3\nव्यय = 3 : 2\nबचत = 4 - 3 = 1 इकाई (X के लिए), 3 - 2 = 1 इकाई (Y के लिए)।\n1 इकाई = Rs. 4,000।\nX की आय = 4 × 4,000 = Rs. 16,000।",
    shortcut_text: "Ratio step diff: (4 - 3) = 1 unit = Rs. 4,000.\nX income = 4 × 4,000 = Rs. 16,000.",
    shortcut_text_hi: "1 इकाई = Rs. 4,000 => X = 4 × 4,000 = Rs. 16,000।"
  }
];

if (typeof window !== "undefined") {
  window.RATIO_SET_A_QUESTIONS = RATIO_SET_A_QUESTIONS;
  window.RATIO_SET_B_QUESTIONS = RATIO_SET_B_QUESTIONS;
  window.RATIO_SET_C_QUESTIONS = RATIO_SET_C_QUESTIONS;
  window.RATIO_SET_D_QUESTIONS = RATIO_SET_D_QUESTIONS;
}

