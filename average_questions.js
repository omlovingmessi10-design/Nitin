/**
 * Average Practice Set 1 - Complete 40 Questions Dataset
 * Level 1 to Level 5 with English & Hindi Translations, Options, Detailed Solutions, and Shortcuts
 */
const AVERAGE_PRACTICE_1_QUESTIONS = [
  // ==========================================
  // LEVEL 1: FUNDAMENTALS & DIRECT APPLICATIONS
  // ==========================================
  {
    question_number: 1,
    practice_set: "Practice 1",
    level: "Level 1: Fundamentals",
    level_group: "Level 1: Fundamentals & Direct Applications",
    type_category: "Inclusion/Addition",
    question_text: "The average monthly salary of 20 employees in an organization is 15,000. If the manager's salary is included, the average increases by 2,000. What is the manager's monthly salary?",
    question_text_hi: "एक संगठन में 20 कर्मचारियों का औसत मासिक वेतन 15,000 है। यदि प्रबंधक का वेतन शामिल किया जाता है, तो औसत 2,000 बढ़ जाता है। प्रबंधक का मासिक वेतन क्या है?",
    options: {
      a: "47,000",
      b: "55,000",
      c: "57,000",
      d: "60,000"
    },
    options_hi: {
      a: "47,000",
      b: "55,000",
      c: "57,000",
      d: "60,000"
    },
    correct_option: "c",
    solution_text: "Total salary of 20 employees = 20 × 15,000 = 3,00,000.\nNew average with the manager (21 people) = 15,000 + 2,000 = 17,000.\nTotal new salary = 21 × 17,000 = 3,57,000.\nManager's salary = 3,57,000 - 3,00,000 = 57,000.",
    solution_text_hi: "20 कर्मचारियों का कुल वेतन = 20 × 15,000 = 3,00,000।\nप्रबंधक के साथ नया औसत (21 लोग) = 15,000 + 2,000 = 17,000।\nकुल नया वेतन = 21 × 17,000 = 3,57,000।\nप्रबंधक का वेतन = 3,57,000 - 3,00,000 = 57,000।",
    shortcut_text: "Manager's Salary = New Average + (Increase in Average × Old Number of Employees)\n= 17,000 + (2,000 × 20) = 17,000 + 40,000 = 57,000.",
    shortcut_text_hi: "प्रबंधक का वेतन = नया औसत + (औसत में वृद्धि × कर्मचारियों की पुरानी संख्या)\n= 17,000 + (2,000 × 20) = 17,000 + 40,000 = 57,000।"
  },
  {
    question_number: 2,
    practice_set: "Practice 1",
    level: "Level 1: Fundamentals",
    level_group: "Level 1: Fundamentals & Direct Applications",
    type_category: "Error & Correction",
    question_text: "The average of 40 observations was calculated as 38. It was later discovered that a value of 83 was wrongly read as 38, and a value of 42 was wrongly read as 24. What is the correct average?",
    question_text_hi: "40 प्रेक्षणों का औसत 38 के रूप में गणना किया गया था। बाद में यह पता चला कि 83 के मान को गलती से 38 पढ़ लिया गया था, और 42 के मान को गलती से 24 पढ़ लिया गया था। सही औसत क्या है?",
    options: {
      a: "39.575",
      b: "39.825",
      c: "40.125",
      d: "40.500"
    },
    options_hi: {
      a: "39.575",
      b: "39.825",
      c: "40.125",
      d: "40.500"
    },
    correct_option: "a",
    solution_text: "Incorrect total sum = 40 × 38 = 1520.\nThe actual sum should be higher because recorded values were lower than true values.\nCorrect Sum = 1520 + (83 - 38) + (42 - 24) = 1520 + 45 + 18 = 1583.\nCorrect Average = 1583 / 40 = 39.575.",
    solution_text_hi: "गलत कुल योग = 40 × 38 = 1520।\nवास्तविक योग अधिक होना चाहिए क्योंकि दर्ज किए गए मान वास्तविक मानों से कम थे।\nसही योग = 1520 + (83 - 38) + (42 - 24) = 1520 + 45 + 18 = 1583।\nसही औसत = 1583 / 40 = 39.575।",
    shortcut_text: "Net error = +45 (for 83 vs 38) and +18 (for 42 vs 24) = +63.\nChange in average = +63 / 40 = +1.575.\nCorrect average = 38 + 1.575 = 39.575.",
    shortcut_text_hi: "कुल त्रुटि = +45 (83 बनाम 38) और +18 (42 बनाम 24) = +63।\nऔसत में परिवर्तन = +63 / 40 = +1.575।\nसही औसत = 38 + 1.575 = 39.575।"
  },
  {
    question_number: 3,
    practice_set: "Practice 1",
    level: "Level 1: Fundamentals",
    level_group: "Level 1: Fundamentals & Direct Applications",
    type_category: "Replacement",
    question_text: "In a group of 20 people, one person weighing 60 kg left and a new person joined, causing the average weight of the group to drop by 1.5 kg. What is the weight of the new person?",
    question_text_hi: "20 लोगों के एक समूह में, 60 किग्रा वजन वाला एक व्यक्ति चला गया और एक नया व्यक्ति शामिल हो गया, जिससे समूह का औसत वजन 1.5 किग्रा गिर गया। नए व्यक्ति का वजन क्या है?",
    options: {
      a: "25 kg",
      b: "30 kg",
      c: "35 kg",
      d: "40 kg"
    },
    options_hi: {
      a: "25 किग्रा",
      b: "30 किग्रा",
      c: "35 किग्रा",
      d: "40 किग्रा"
    },
    correct_option: "b",
    solution_text: "Let the original average be A. Total original weight = 20A.\nAfter replacement, the new average is A - 1.5. Total new weight = 20(A - 1.5) = 20A - 30.\nSince new weight = Old weight - Replaced person + New person (N):\n20A - 60 + N = 20A - 30 => N = 30 kg.",
    solution_text_hi: "माना मूल औसत A है। कुल मूल वजन = 20A।\nप्रतिस्थापन के बाद नया औसत A - 1.5 है। कुल नया वजन = 20(A - 1.5) = 20A - 30।\n20A - 60 + N = 20A - 30 => N = 30 किग्रा।",
    shortcut_text: "Weight of New Person = Weight of Replaced Person - (Total People × Drop in Average)\n= 60 - (20 × 1.5) = 60 - 30 = 30 kg.",
    shortcut_text_hi: "नए व्यक्ति का वजन = बदले गए व्यक्ति का वजन - (कुल लोग × औसत में गिरावट)\n= 60 - (20 × 1.5) = 60 - 30 = 30 किग्रा।"
  },
  {
    question_number: 4,
    practice_set: "Practice 1",
    level: "Level 1: Fundamentals",
    level_group: "Level 1: Fundamentals & Direct Applications",
    type_category: "Consecutive Numbers",
    question_text: "The average of 9 consecutive odd numbers is 53. What is the least odd number in this series?",
    question_text_hi: "9 लगातार विषम संख्याओं का औसत 53 है। इस शृंखला में सबसे छोटी विषम संख्या क्या है?",
    options: {
      a: "43",
      b: "45",
      c: "47",
      d: "49"
    },
    options_hi: {
      a: "43",
      b: "45",
      c: "47",
      d: "49"
    },
    correct_option: "b",
    solution_text: "Let the numbers be x, x+2, x+4, ..., x+16.\nTheir sum = 9x + 72.\nThe average is (9x + 72) / 9 = x + 8.\nGiven x + 8 = 53 => x = 45.",
    solution_text_hi: "माना संख्याएँ x, x+2, x+4, ..., x+16 हैं। उनका योग = 9x + 72।\nऔसत = (9x + 72) / 9 = x + 8।\nx + 8 = 53 => x = 45।",
    shortcut_text: "For any N consecutive odd/even numbers with average A, the smallest number is A - (N - 1).\nLeast number = 53 - (9 - 1) = 53 - 8 = 45.",
    shortcut_text_hi: "किसी भी N लगातार विषम/सम संख्याओं के लिए (औसत A): सबसे छोटी संख्या = A - (N - 1)।\nसबसे छोटी संख्या = 53 - (9 - 1) = 45।"
  },
  {
    question_number: 5,
    practice_set: "Practice 1",
    level: "Level 1: Fundamentals",
    level_group: "Level 1: Fundamentals & Direct Applications",
    type_category: "Split Averages",
    question_text: "The average rainfall for the first 3 days of a week is 0.45 inches, and for the last 3 days is 0.65 inches. If the average rainfall for the entire week is 0.50 inches, what was the rainfall on the 4th day?",
    question_text_hi: "एक सप्ताह के पहले 3 दिनों की औसत वर्षा 0.45 इंच है, और अंतिम 3 दिनों की 0.65 इंच है। यदि पूरे सप्ताह की औसत वर्षा 0.50 इंच है, तो चौथे दिन कितनी वर्षा हुई?",
    options: {
      a: "0.15 inches",
      b: "0.20 inches",
      c: "0.25 inches",
      d: "0.30 inches"
    },
    options_hi: {
      a: "0.15 इंच",
      b: "0.20 इंच",
      c: "0.25 इंच",
      d: "0.30 इंच"
    },
    correct_option: "b",
    solution_text: "Total weekly rainfall = 7 × 0.50 = 3.50 inches.\nRainfall for first 3 days = 3 × 0.45 = 1.35 inches.\nRainfall for last 3 days = 3 × 0.65 = 1.95 inches.\nRainfall on 4th day = 3.50 - (1.35 + 1.95) = 3.50 - 3.30 = 0.20 inches.",
    solution_text_hi: "सप्ताह की कुल वर्षा = 7 × 0.50 = 3.50 इंच।\nपहले 3 दिनों की वर्षा = 3 × 0.45 = 1.35 इंच।\nअंतिम 3 दिनों की वर्षा = 3 × 0.65 = 1.95 इंच।\nचौथे दिन की वर्षा = 3.50 - (1.35 + 1.95) = 3.50 - 3.30 = 0.20 इंच।",
    shortcut_text: "Use deviation from weekly average (0.50):\nFirst 3 days deviation = 3 × (-0.05) = -0.15.\nLast 3 days deviation = 3 × (+0.15) = +0.45.\nNet deviation = +0.30.\n4th day must offset this surplus: 0.50 - 0.30 = 0.20 inches.",
    shortcut_text_hi: "साप्ताहिक औसत (0.50) से विचलन विधि:\nपहले 3 दिन = 3 × (-0.05) = -0.15\nअंतिम 3 दिन = 3 × (+0.15) = +0.45\nकुल विचलन = +0.30\nचौथे दिन का मान = 0.50 - 0.30 = 0.20 इंच।"
  },
  {
    question_number: 6,
    practice_set: "Practice 1",
    level: "Level 1: Fundamentals",
    level_group: "Level 1: Fundamentals & Direct Applications",
    type_category: "Overlapping Groups",
    question_text: "The average of 25 results is 18. The average of the first 12 results is 14, and the average of the last 12 results is 17. What is the 13th result?",
    question_text_hi: "25 परिणामों का औसत 18 है। पहले 12 परिणामों का औसत 14 है, और अंतिम 12 परिणामों का औसत 17 है। 13वां परिणाम क्या है?",
    options: {
      a: "72",
      b: "75",
      c: "78",
      d: "82"
    },
    options_hi: {
      a: "72",
      b: "75",
      c: "78",
      d: "82"
    },
    correct_option: "c",
    solution_text: "Total sum of 25 results = 25 × 18 = 450.\nSum of first 12 results = 12 × 14 = 168.\nSum of last 12 results = 12 × 17 = 204.\n13th result = 450 - (168 + 204) = 450 - 372 = 78.",
    solution_text_hi: "25 परिणामों का कुल योग = 25 × 18 = 450।\nपहले 12 परिणामों का योग = 12 × 14 = 168।\nअंतिम 12 परिणामों का योग = 12 × 17 = 204।\n13वां परिणाम = 450 - (168 + 204) = 450 - 372 = 78।",
    shortcut_text: "13th result = Overall Average + [Count × (Overall Avg - Group 1 Avg)] + [Count × (Overall Avg - Group 2 Avg)]\n= 18 + 12 × (18 - 14) + 12 × (18 - 17) = 18 + 48 + 12 = 78.",
    shortcut_text_hi: "13वां परिणाम = कुल औसत + 12 × (18 - 14) + 12 × (18 - 17) = 18 + 48 + 12 = 78।"
  },
  {
    question_number: 7,
    practice_set: "Practice 1",
    level: "Level 1: Fundamentals",
    level_group: "Level 1: Fundamentals & Direct Applications",
    type_category: "Average Speed / Deficit-Surplus",
    question_text: "A man travels from City A to City B at a speed of 40 km/h and returns at 60 km/h. His average speed for the entire journey is equal to the average speed of a second man who travels at 45 km/h for 2 hours and x km/h for 3 hours. Find the value of x.",
    question_text_hi: "एक व्यक्ति शहर A से शहर B तक 40 किमी/घंटा की गति से यात्रा करता है और 60 किमी/घंटा की गति से लौटता है। पूरी यात्रा के लिए उसकी औसत गति दूसरे व्यक्ति की औसत गति के बराबर है जो 2 घंटे के लिए 45 किमी/घंटा और 3 घंटे के लिए x किमी/घंटा की गति से यात्रा करता है। x का मान ज्ञात कीजिए।",
    options: {
      a: "48",
      b: "50",
      c: "52",
      d: "55"
    },
    options_hi: {
      a: "48",
      b: "50",
      c: "52",
      d: "55"
    },
    correct_option: "b",
    solution_text: "Average speed of first man = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h.\nFor the second man:\nTotal distance = (45 × 2) + (x × 3) = 90 + 3x.\nTotal time = 2 + 3 = 5 hours.\nAverage speed = (90 + 3x) / 5 = 48 => 90 + 3x = 240 => 3x = 150 => x = 50.",
    solution_text_hi: "पहले व्यक्ति की औसत गति = (2 × 40 × 60) / 100 = 48 किमी/घंटा।\nदूसरे व्यक्ति के लिए: कुल दूरी = (45 × 2) + (x × 3) = 90 + 3x। कुल समय = 5 घंटे।\nऔसत गति = (90 + 3x) / 5 = 48 => 3x = 150 => x = 50।",
    shortcut_text: "Target average = 48 km/h.\nAt 45 km/h for 2 hours, deficit = 2 × (48 - 45) = 6.\nFor next 3 hours, required surplus per hour = 6 / 3 = 2 km/h.\nSo, x = 48 + 2 = 50.",
    shortcut_text_hi: "लक्षित औसत = 48 किमी/घंटा।\n45 की गति पर 2 घंटे में कमी = 2 × (48 - 45) = 6।\nअगले 3 घंटों में प्रति घंटा आवश्यक अधिशेष = 6 / 3 = 2।\nअतः x = 48 + 2 = 50।"
  },
  {
    question_number: 8,
    practice_set: "Practice 1",
    level: "Level 1: Fundamentals",
    level_group: "Level 1: Fundamentals & Direct Applications",
    type_category: "Algebraic Average",
    question_text: "Three numbers are such that when the sum of any two of them is added to one-third of the third, the results are 150, 140, and 130 respectively. What is the average of the three original numbers?",
    question_text_hi: "तीन संख्याएँ इस प्रकार हैं कि जब उनमें से किन्हीं दो के योग को तीसरी संख्या के एक-तिहाई में जोड़ा जाता है, तो परिणाम क्रमशः 150, 140 और 130 होते हैं। तीन मूल संख्याओं का औसत क्या है?",
    options: {
      a: "50",
      b: "60",
      c: "70",
      d: "80"
    },
    options_hi: {
      a: "50",
      b: "60",
      c: "70",
      d: "80"
    },
    correct_option: "b",
    solution_text: "Let the numbers be a, b, c.\na + b + c/3 = 150 => 3a + 3b + c = 450\nb + c + a/3 = 140 => a + 3b + 3c = 420\nc + a + b/3 = 130 => 3a + b + 3c = 390\nSumming all three equations:\n7a + 7b + 7c = 1260 => a + b + c = 180.\nAverage = 180 / 3 = 60.",
    solution_text_hi: "माना संख्याएँ a, b, c हैं।\n3a + 3b + c = 450\na + 3b + 3c = 420\n3a + b + 3c = 390\nतीनों को जोड़ने पर: 7(a + b + c) = 1260 => a + b + c = 180।\nऔसत = 180 / 3 = 60।",
    shortcut_text: "Sum of results = 150 + 140 + 130 = 420.\n∑S = (2 + 1/3) × Total Sum => 420 = (7/3) × Total Sum => Total Sum = 180.\nAverage = 180 / 3 = 60.",
    shortcut_text_hi: "परिणामों का योग = 150 + 140 + 130 = 420।\n420 = (2 + 1/3) × कुल योग = (7/3) × कुल योग => कुल योग = 180।\nऔसत = 180 / 3 = 60।"
  },

  // ==========================================
  // LEVEL 2: MODERATE CONTEXTUAL TWISTS
  // ==========================================
  {
    question_number: 9,
    practice_set: "Practice 1",
    level: "Level 2: Moderate",
    level_group: "Level 2: Moderate Contextual Twists",
    type_category: "Ages & Time Shifts",
    question_text: "The average age of a family of 5 members is 24 years. If the present age of the youngest member is 8 years, what was the average age of the family exactly at the time of the birth of the youngest member?",
    question_text_hi: "5 सदस्यों वाले एक परिवार की औसत आयु 24 वर्ष है। यदि सबसे कम उम्र के सदस्य की वर्तमान आयु 8 वर्ष है, तो सबसे कम उम्र के सदस्य के जन्म के ठीक समय पर परिवार की औसत आयु क्या थी?",
    options: {
      a: "16",
      b: "18",
      c: "20",
      d: "22"
    },
    options_hi: {
      a: "16",
      b: "18",
      c: "20",
      d: "22"
    },
    correct_option: "a",
    solution_text: "The current total age of all 5 family members is 5 × 24 = 120 years.\nExactly 8 years ago (at the time of the youngest member's birth), every single one of the 5 members was 8 years younger.\nThe total age of the family 8 years ago was 120 - (5 × 8) = 120 - 40 = 80 years.\nSince the youngest member was just born (age 0), they still count as a family member.\nThe average age of the 5 members was 80 / 5 = 16 years.",
    solution_text_hi: "सभी 5 परिवार के सदस्यों की वर्तमान कुल आयु 5 × 24 = 120 वर्ष है।\nठीक 8 साल पहले, 5 सदस्यों में से प्रत्येक 8 साल छोटा था।\n8 साल पहले परिवार की कुल आयु = 120 - (5 × 8) = 80 वर्ष थी।\nचूंकि सबसे छोटे सदस्य का अभी जन्म हुआ था (आयु 0), वे अभी भी सदस्य गिने जाते हैं।\n5 सदस्यों की औसत आयु = 80 / 5 = 16 वर्ष थी।",
    shortcut_text: "If a group has N members and no one has joined or died, the average age of the exact same group X years ago is strictly Current Average - X.\nSo, 24 - 8 = 16.",
    shortcut_text_hi: "समान समूह के लिए X वर्ष पहले की औसत आयु = वर्तमान औसत - X = 24 - 8 = 16।"
  },
  {
    question_number: 10,
    practice_set: "Practice 1",
    level: "Level 2: Moderate",
    level_group: "Level 2: Moderate Contextual Twists",
    type_category: "Finding Sample Size (N)",
    question_text: "In calculating the average of a group of numbers, 72 was mistakenly read as 27. The calculated average was 50. If the correct average is 55, how many numbers were there in the group?",
    question_text_hi: "संख्याओं के एक समूह के औसत की गणना करते समय, 72 को गलती से 27 पढ़ लिया गया था। गणना किया गया औसत 50 था। यदि सही औसत 55 है, तो समूह में कितनी संख्याएँ थीं?",
    options: {
      a: "7",
      b: "8",
      c: "9",
      d: "10"
    },
    options_hi: {
      a: "7",
      b: "8",
      c: "9",
      d: "10"
    },
    correct_option: "c",
    solution_text: "Let the number of observations be N.\nThe error in the sum is 72 - 27 = 45.\nThis error caused the average to drop from 55 to 50, meaning the average changed by 5.\nTherefore: (Total Error) / N = Change in Average => 45 / N = 5 => N = 9.",
    solution_text_hi: "माना प्रेक्षणों की संख्या N है।\nयोग में त्रुटि = 72 - 27 = 45।\nइस त्रुटि के कारण औसत 55 से घट कर 50 हो गया (5 की कमी)।\n(कुल त्रुटि) / N = औसत में परिवर्तन => 45 / N = 5 => N = 9।",
    shortcut_text: "N = (Difference in Sum) / (Difference in Average) = (72 - 27) / (55 - 50) = 45 / 5 = 9.",
    shortcut_text_hi: "N = (योग में अंतर) / (औसत में अंतर) = (72 - 27) / (55 - 50) = 45 / 5 = 9।"
  },
  {
    question_number: 11,
    practice_set: "Practice 1",
    level: "Level 2: Moderate",
    level_group: "Level 2: Moderate Contextual Twists",
    type_category: "Sub-group Averages",
    question_text: "The average score of a cricketer for 10 matches is 38.9 runs. If the average for the first six matches is 42, what is the average for the last four matches?",
    question_text_hi: "10 मैचों के लिए एक क्रिकेटर का औसत स्कोर 38.9 रन है। यदि पहले छह मैचों का औसत 42 है, तो अंतिम चार मैचों का औसत क्या है?",
    options: {
      a: "33.25",
      b: "34.25",
      c: "35.50",
      d: "36.75"
    },
    options_hi: {
      a: "33.25",
      b: "34.25",
      c: "35.50",
      d: "36.75"
    },
    correct_option: "b",
    solution_text: "Total runs in 10 matches = 10 × 38.9 = 389.\nTotal runs in first 6 matches = 6 × 42 = 252.\nRuns in last 4 matches = 389 - 252 = 137.\nAverage for last 4 matches = 137 / 4 = 34.25.",
    solution_text_hi: "10 मैचों में कुल रन = 10 × 38.9 = 389।\nपहले 6 मैचों में कुल रन = 6 × 42 = 252।\nअंतिम 4 मैचों में रन = 389 - 252 = 137।\nअंतिम 4 मैचों का औसत = 137 / 4 = 34.25।",
    shortcut_text: "Deviation of first 6 matches from overall average = 6 × (42 - 38.9) = 6 × 3.1 = +18.6.\nLast 4 matches must offset this surplus, meaning their total deviation is -18.6.\nAverage deficit per match = -18.6 / 4 = -4.65.\nAverage = 38.9 - 4.65 = 34.25.",
    shortcut_text_hi: "पहले 6 मैचों का कुल औसत से विचलन = 6 × (42 - 38.9) = +18.6।\nअंतिम 4 मैचों के लिए प्रति मैच कमी = -18.6 / 4 = -4.65।\nऔसत = 38.9 - 4.65 = 34.25।"
  },
  {
    question_number: 12,
    practice_set: "Practice 1",
    level: "Level 2: Moderate",
    level_group: "Level 2: Moderate Contextual Twists",
    type_category: "Addition of Consecutive Numbers",
    question_text: "The average of 11 consecutive even numbers is 50. If the next 5 even numbers are added to the series, what will be the new average?",
    question_text_hi: "11 लगातार सम संख्याओं का औसत 50 है। यदि शृंखला में अगली 5 सम संख्याएँ जोड़ी जाती हैं, तो नया औसत क्या होगा?",
    options: {
      a: "52",
      b: "53",
      c: "54",
      d: "55"
    },
    options_hi: {
      a: "52",
      b: "53",
      c: "54",
      d: "55"
    },
    correct_option: "d",
    solution_text: "If average of 11 consecutive even numbers is 50, the middle (6th) number is 50.\nThe largest number in this series is 50 + (5 × 2) = 60.\nThe next 5 even numbers are 62, 64, 66, 68, 70 (Sum = 330).\nSum of first 11 = 11 × 50 = 550.\nNew sum = 550 + 330 = 880.\nNew average = 880 / 16 = 55.",
    solution_text_hi: "यदि 11 लगातार सम संख्याओं का औसत 50 है, तो मध्य (6वीं) संख्या 50 है।\nइस शृंखला में सबसे बड़ी संख्या 50 + 10 = 60 है।\nअगली 5 सम संख्याएँ 62, 64, 66, 68, 70 हैं (योग = 330)।\nनया कुल योग = 550 + 330 = 880। नया औसत = 880 / 16 = 55।",
    shortcut_text: "Adding k next consecutive even/odd numbers to a series increases the average by exactly k.\nSo, new average = 50 + 5 = 55.",
    shortcut_text_hi: "किसी शृंखला में अगली k लगातार सम/विषम संख्याएँ जोड़ने पर औसत ठीक k बढ़ जाता है।\nअतः नया औसत = 50 + 5 = 55।"
  },
  {
    question_number: 13,
    practice_set: "Practice 1",
    level: "Level 2: Moderate",
    level_group: "Level 2: Moderate Contextual Twists",
    type_category: "Overlapping Sub-groups",
    question_text: "Out of 15 numbers, the average of the first 8 numbers is 42, and the average of the last 8 numbers is 45. If the average of all 15 numbers is 43.5, what is the 8th number?",
    question_text_hi: "15 संख्याओं में से, पहली 8 संख्याओं का औसत 42 है, और अंतिम 8 संख्याओं का औसत 45 है। यदि सभी 15 संख्याओं का औसत 43.5 है, तो 8वीं संख्या क्या है?",
    options: {
      a: "42",
      b: "43.5",
      c: "45",
      d: "46.5"
    },
    options_hi: {
      a: "42",
      b: "43.5",
      c: "45",
      d: "46.5"
    },
    correct_option: "b",
    solution_text: "Total sum of 15 numbers = 15 × 43.5 = 652.5.\nSum of first 8 = 8 × 42 = 336.\nSum of last 8 = 8 × 45 = 360.\nThe 8th number is counted twice in these two sums.\n8th number = (336 + 360) - 652.5 = 696 - 652.5 = 43.5.",
    solution_text_hi: "15 संख्याओं का कुल योग = 15 × 43.5 = 652.5।\nपहली 8 का योग = 8 × 42 = 336।\nअंतिम 8 का योग = 8 × 45 = 360।\n8वीं संख्या = (336 + 360) - 652.5 = 696 - 652.5 = 43.5।",
    shortcut_text: "8th number = Overall Avg + [8 × (Group 1 Avg - Overall Avg)] + [8 × (Group 2 Avg - Overall Avg)]\n= 43.5 + 8(42 - 43.5) + 8(45 - 43.5) = 43.5 + 8(-1.5) + 8(+1.5) = 43.5.",
    shortcut_text_hi: "8वीं संख्या = 43.5 + 8(42 - 43.5) + 8(45 - 43.5) = 43.5 + 8(-1.5) + 8(+1.5) = 43.5।"
  },
  {
    question_number: 14,
    practice_set: "Practice 1",
    level: "Level 2: Moderate",
    level_group: "Level 2: Moderate Contextual Twists",
    type_category: "Weighted Average",
    question_text: "A batsman scores an average of 48 runs in his first 5 matches, 51 runs in his next 4 matches, and 24 runs in his last 3 matches. What is his overall average for all 12 matches?",
    question_text_hi: "एक बल्लेबाज अपने पहले 5 मैचों में 48 रन, अगले 4 मैचों में 51 रन और अंतिम 3 मैचों में 24 रन का औसत स्कोर बनाता है। सभी 12 मैचों के लिए उसका कुल औसत क्या है?",
    options: {
      a: "41",
      b: "42",
      c: "43",
      d: "44"
    },
    options_hi: {
      a: "41",
      b: "42",
      c: "43",
      d: "44"
    },
    correct_option: "c",
    solution_text: "Total runs = (5 × 48) + (4 × 51) + (3 × 24) = 240 + 204 + 72 = 516.\nOverall average = 516 / 12 = 43.",
    solution_text_hi: "कुल रन = (5 × 48) + (4 × 51) + (3 × 24) = 240 + 204 + 72 = 516।\nकुल औसत = 516 / 12 = 43।",
    shortcut_text: "Assume a base average of 45.\nDeviations: 5 × (+3) = +15; 4 × (+6) = +24; 3 × (-21) = -63.\nNet deviation = 15 + 24 - 63 = -24.\nAverage deviation = -24 / 12 = -2.\nActual average = 45 - 2 = 43.",
    shortcut_text_hi: "45 का आधार औसत मान लें।\nविचलन: 5 × (+3) = +15; 4 × (+6) = +24; 3 × (-21) = -63।\nकुल विचलन = -24 => औसत विचलन = -24 / 12 = -2।\nवास्तविक औसत = 45 - 2 = 43।"
  },
  {
    question_number: 15,
    practice_set: "Practice 1",
    level: "Level 2: Moderate",
    level_group: "Level 2: Moderate Contextual Twists",
    type_category: "Profit & Loss Average / Alligation",
    question_text: "A trader bought 120 apples at an average price of Rs. 15. He sold 40 apples at a 20% profit and 60 apples at a 10% loss. To make an overall profit of 15% on the entire transaction, at what average price should he sell the remaining apples?",
    question_text_hi: "एक व्यापारी ने 15 रुपये की औसत कीमत पर 120 सेब खरीदे। उसने 40 सेब 20% लाभ पर और 60 सेब 10% हानि पर बेचे। पूरे लेन-देन पर 15% का कुल लाभ कमाने के लिए, उसे शेष सेब किस औसत कीमत पर बेचने चाहिए?",
    options: {
      a: "24",
      b: "25",
      c: "27",
      d: "30"
    },
    options_hi: {
      a: "24",
      b: "25",
      c: "27",
      d: "30"
    },
    correct_option: "c",
    solution_text: "Total cost = 120 × 15 = 1800.\nTarget revenue for 15% profit = 1800 × 1.15 = 2070.\nRevenue from 40 apples = 40 × 15 × 1.20 = 720.\nRevenue from 60 apples = 60 × 15 × 0.90 = 810.\nRevenue needed from remaining 20 apples = 2070 - (720 + 810) = 2070 - 1530 = 540.\nPrice per apple = 540 / 20 = 27.",
    solution_text_hi: "कुल लागत = 120 × 15 = 1800।\n15% लाभ के लिए लक्ष्य राजस्व = 1800 × 1.15 = 2070।\n40 सेबों से राजस्व = 720, 60 सेबों से राजस्व = 810।\nशेष 20 सेबों से आवश्यक राजस्व = 2070 - 1530 = 540।\nप्रति सेब मूल्य = 540 / 20 = 27।",
    shortcut_text: "Use weighted percentages: Let required profit on remaining 20 apples be x%.\n40(20) + 60(-10) + 20(x) = 120(15) => 800 - 600 + 20x = 1800 => 20x = 1600 => x = 80%.\nSelling Price = Base Price × 1.8 = 15 × 1.8 = 27.",
    shortcut_text_hi: "भारित प्रतिशत विधि: 40(20) + 60(-10) + 20(x) = 120(15) => 20x = 1600 => x = 80% लाभ।\nविक्रय मूल्य = 15 × 1.8 = 27।"
  },
  {
    question_number: 16,
    practice_set: "Practice 1",
    level: "Level 2: Moderate",
    level_group: "Level 2: Moderate Contextual Twists",
    type_category: "Mixture & Alligation",
    question_text: "A trader bought 4 types of oils at Rs. 100, Rs. 150, Rs. 200, and Rs. 250 per liter respectively. He mixed them and sold the mixture at Rs. 210 per liter, earning a 20% profit. If the quantities of the first three oils are in the ratio 1:2:3, what is the ratio of the quantity of the fourth oil to the total quantity of the mixture?",
    question_text_hi: "एक व्यापारी ने क्रमशः 100, 150, 200, और 250 रुपये प्रति लीटर पर 4 प्रकार के तेल खरीदे। उसने उन्हें मिलाया और मिश्रण को 210 रुपये प्रति लीटर पर बेचा, जिससे 20% का लाभ हुआ। यदि पहले तीन तेलों की मात्रा 1:2:3 के अनुपात में है, तो चौथे तेल की मात्रा का मिश्रण की कुल मात्रा से अनुपात क्या है?",
    options: {
      a: "1:9",
      b: "1:10",
      c: "2:9",
      d: "3:10"
    },
    options_hi: {
      a: "1:9",
      b: "1:10",
      c: "2:9",
      d: "3:10"
    },
    correct_option: "b",
    solution_text: "Target CP of mixture = 210 / 1.2 = 175.\nLet quantities of first three be 1k, 2k, 3k (Total = 6k). Average CP = [100(1) + 150(2) + 200(3)] / 6 = 1000 / 6 = 500/3.\nLet quantity of fourth oil be y.\n[(1000/6)(6k) + 250y] / (6k + y) = 175 => 1000k + 250y = 1050k + 175y => 75y = 50k => y/k = 2/3.\nIf k = 3, y = 2. Total quantity = 6(3) + 2 = 20.\nRatio of 4th oil to total = 2:20 = 1:10.",
    solution_text_hi: "मिश्रण का CP = 210 / 1.2 = 175।\nपहले तीन का औसत CP = 500/3। चौथे तेल की मात्रा y है।\nसमीकरण: [1000k + 250y] / (6k + y) = 175 => 75y = 50k => y/k = 2/3।\nयदि k = 3, तो y = 2, कुल मात्रा = 20।\nचौथे तेल का कुल से अनुपात = 2:20 = 1:10।",
    shortcut_text: "Alligation on combined first three oils (Avg CP = 500/3) and fourth oil (CP = 250) for mean 175:\nRatio = (250 - 175) : (175 - 500/3) = 75 : 25/3 = 225 : 25 = 9 : 1.\nCombined first three = 9 parts, fourth = 1 part => Total mixture = 10 parts.\nRatio = 1:10.",
    shortcut_text_hi: "एलिगेशन: (250 - 175) : (175 - 500/3) = 75 : 25/3 = 9 : 1।\nपहले तीन = 9 भाग, चौथा = 1 भाग => कुल = 10 भाग।\nअनुपात = 1:10।"
  },

  // ==========================================
  // LEVEL 3: MULTI-STEP LOGIC & RATIOS
  // ==========================================
  {
    question_number: 17,
    practice_set: "Practice 1",
    level: "Level 3: Multi-Step",
    level_group: "Level 3: Multi-Step Logic & Ratios",
    type_category: "Replacement in Group",
    question_text: "Out of 10 teachers, one retires and in his place a 25-year-old joins. As a result, the average age of the teachers reduces by 3 years. What is the age of the retiring teacher?",
    question_text_hi: "10 शिक्षकों में से एक सेवानिवृत्त होता है और उसके स्थान पर 25 वर्षीय व्यक्ति शामिल होता है। परिणामस्वरूप, शिक्षकों की औसत आयु 3 वर्ष कम हो जाती है। सेवानिवृत्त होने वाले शिक्षक की आयु क्या है?",
    options: {
      a: "45",
      b: "50",
      c: "55",
      d: "60"
    },
    options_hi: {
      a: "45",
      b: "50",
      c: "55",
      d: "60"
    },
    correct_option: "c",
    solution_text: "Let original average be A. Total age = 10A.\nLet retiring teacher be R. New total age = 10A - R + 25.\nNew average is A - 3, so new total = 10(A - 3) = 10A - 30.\n10A - R + 25 = 10A - 30 => -R + 25 = -30 => R = 55.",
    solution_text_hi: "माना मूल औसत A है। कुल आयु = 10A।\nमाना सेवानिवृत्त शिक्षक R है। नई कुल आयु = 10A - R + 25।\nनया औसत A - 3 है => नया कुल = 10A - 30।\n10A - R + 25 = 10A - 30 => R = 55।",
    shortcut_text: "Age of Retiring Person = Age of Newcomer + (Total Persons × Decrease in Average)\n= 25 + (10 × 3) = 25 + 30 = 55.",
    shortcut_text_hi: "सेवानिवृत्त होने वाले की आयु = नवागंतुक की आयु + (कुल व्यक्ति × औसत में कमी)\n= 25 + (10 × 3) = 55।"
  },
  {
    question_number: 18,
    practice_set: "Practice 1",
    level: "Level 3: Multi-Step",
    level_group: "Level 3: Multi-Step Logic & Ratios",
    type_category: "Digit Reversal Error",
    question_text: "A typist calculating the average of 20 numbers mistakenly copies one two-digit number by reversing its digits. As a result, the calculated average is 1.8 less than the correct average. What is the difference between the digits of the miscopied number?",
    question_text_hi: "20 संख्याओं के औसत की गणना करने वाला एक टाइपिस्ट गलती से एक दो अंकों की संख्या को उसके अंकों को उलट कर कॉपी कर लेता है। परिणामस्वरूप, गणना किया गया औसत सही औसत से 1.8 कम है। गलत कॉपी की गई संख्या के अंकों के बीच का अंतर क्या है?",
    options: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    options_hi: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correct_option: "c",
    solution_text: "Total error in sum = 20 × 1.8 = 36.\nLet original two-digit number be 10x + y and reversed be 10y + x.\n(10x + y) - (10y + x) = 9(x - y) = 36 => x - y = 4.",
    solution_text_hi: "योग में कुल त्रुटि = 20 × 1.8 = 36।\nमूल संख्या = 10x + y, उल्टी संख्या = 10y + x।\nअंतर = 9(x - y) = 36 => x - y = 4।",
    shortcut_text: "Difference between digits = (Change in Average × Total Numbers) / 9 = (1.8 × 20) / 9 = 36 / 9 = 4.",
    shortcut_text_hi: "अंकों के बीच का अंतर = (औसत में परिवर्तन × कुल संख्याएँ) / 9 = (1.8 × 20) / 9 = 36 / 9 = 4।"
  },
  {
    question_number: 19,
    practice_set: "Practice 1",
    level: "Level 3: Multi-Step",
    level_group: "Level 3: Multi-Step Logic & Ratios",
    type_category: "Batting Average",
    question_text: "A batsman has a certain average for 11 innings. In the 12th inning, he scores 90 runs, thereby decreasing his average by 5. What is his current average after the 12th inning?",
    question_text_hi: "एक बल्लेबाज का 11 पारियों के लिए एक निश्चित औसत है। 12वीं पारी में, वह 90 रन बनाता है, जिससे उसका औसत 5 कम हो जाता है। 12वीं पारी के बाद उसका वर्तमान औसत क्या है?",
    options: {
      a: "135",
      b: "140",
      c: "145",
      d: "150"
    },
    options_hi: {
      a: "135",
      b: "140",
      c: "145",
      d: "150"
    },
    correct_option: "c",
    solution_text: "Let old average be x. Total runs before 12th inning = 11x.\nRuns after 12th = 11x + 90. New average = x - 5.\n12(x - 5) = 11x + 90 => 12x - 60 = 11x + 90 => x = 150.\nCurrent average = 150 - 5 = 145.",
    solution_text_hi: "माना पुराना औसत x है। 11 पारियों के रन = 11x।\n12 पारियों के बाद रन = 11x + 90, नया औसत = x - 5।\n12(x - 5) = 11x + 90 => 12x - 60 = 11x + 90 => x = 150।\nवर्तमान औसत = 150 - 5 = 145।",
    shortcut_text: "Current Average = Last Inning Score - [Previous Innings × (Change in Avg)]\n= 90 - [11 × (-5)] = 90 + 55 = 145.",
    shortcut_text_hi: "वर्तमान औसत = अंतिम पारी का स्कोर - [पिछली पारियां × (औसत में परिवर्तन)]\n= 90 - [11 × (-5)] = 90 + 55 = 145।"
  },
  {
    question_number: 20,
    practice_set: "Practice 1",
    level: "Level 3: Multi-Step",
    level_group: "Level 3: Multi-Step Logic & Ratios",
    type_category: "Consecutive Odd/Even Numbers",
    question_text: "The sum of 5 consecutive even numbers is equal to 170. What is the average of the next 5 consecutive odd numbers that immediately follow the largest even number in this set?",
    question_text_hi: "5 लगातार सम संख्याओं का योग 170 के बराबर है। अगले 5 लगातार विषम संख्याओं का औसत क्या है जो इस सेट में सबसे बड़ी सम संख्या के तुरंत बाद आती हैं?",
    options: {
      a: "39",
      b: "41",
      c: "43",
      d: "45"
    },
    options_hi: {
      a: "39",
      b: "41",
      c: "43",
      d: "45"
    },
    correct_option: "c",
    solution_text: "Average of 5 consecutive even numbers = 170 / 5 = 34.\nNumbers are 30, 32, 34, 36, 38. Largest even number = 38.\nNext 5 consecutive odd numbers: 39, 41, 43, 45, 47.\nTheir average is middle number = 43.",
    solution_text_hi: "5 लगातार सम संख्याओं का औसत = 170 / 5 = 34।\nसंख्याएँ 30, 32, 34, 36, 38 हैं। सबसे बड़ी सम संख्या = 38।\nअगली 5 विषम संख्याएँ 39, 41, 43, 45, 47 हैं। उनका औसत मध्य संख्या = 43 है।",
    shortcut_text: "Middle even number is 34 => Largest is 34 + 4 = 38.\nMiddle of next 5 odd numbers (starting at 39) = 38 + 5 = 43.",
    shortcut_text_hi: "मध्य सम संख्या = 34 => सबसे बड़ी = 38।\nअगले 5 विषम संख्याओं का मध्य = 38 + 5 = 43।"
  },
  {
    question_number: 21,
    practice_set: "Practice 1",
    level: "Level 3: Multi-Step",
    level_group: "Level 3: Multi-Step Logic & Ratios",
    type_category: "Sub-group Combinations",
    question_text: "The average age of 8 members of a panel is 45 years. The average age of 3 of them is 42 years, and the average age of another 3 is 46 years. If the 7th member is 4 years older than the 8th member, what is the age of the 7th member?",
    question_text_hi: "एक पैनल के 8 सदस्यों की औसत आयु 45 वर्ष है। उनमें से 3 की औसत आयु 42 वर्ष है, और अन्य 3 की औसत आयु 46 वर्ष है। यदि 7वां सदस्य 8वें सदस्य से 4 वर्ष बड़ा है, तो 7वें सदस्य की आयु क्या है?",
    options: {
      a: "46",
      b: "48",
      c: "50",
      d: "52"
    },
    options_hi: {
      a: "46",
      b: "48",
      c: "50",
      d: "52"
    },
    correct_option: "c",
    solution_text: "Total age of 8 members = 8 × 45 = 360.\nAge of first 3 = 3 × 42 = 126. Age of next 3 = 3 × 46 = 138.\nCombined age of 7th and 8th members = 360 - (126 + 138) = 360 - 264 = 96.\nLet 8th member be x, then 7th is x + 4.\nx + x + 4 = 96 => 2x = 92 => x = 46.\n7th member = 46 + 4 = 50.",
    solution_text_hi: "8 सदस्यों की कुल आयु = 360। पहले 3 = 126, अगले 3 = 138।\n7वें और 8वें की कुल आयु = 360 - 264 = 96।\nx + x + 4 = 96 => 2x = 92 => x = 46।\n7वां सदस्य = 46 + 4 = 50 है।",
    shortcut_text: "Net deviation of first 6: 3 × (-3) + 3 × (+1) = -6.\nLast 2 must have deviation of +6 over average 45 => Sum = 2 × 45 + 6 = 96.\nDividing 96 into two parts with difference 4: (96 + 4) / 2 = 50 (older).",
    shortcut_text_hi: "पहले 6 का विचलन = -6 => अंतिम 2 का योग = 90 + 6 = 96।\n7वां सदस्य = (96 + 4) / 2 = 50।"
  },
  {
    question_number: 22,
    practice_set: "Practice 1",
    level: "Level 3: Multi-Step",
    level_group: "Level 3: Multi-Step Logic & Ratios",
    type_category: "Overlapping Items (Double Count)",
    question_text: "In a month of 30 days, the average daily expense of a family is Rs. 250. The average for the first 15 days is Rs. 220, and the average for the last 17 days is Rs. 280. What is the average daily expense for the 15th and 16th days combined?",
    question_text_hi: "30 दिनों के एक महीने में, एक परिवार का औसत दैनिक खर्च 250 रुपये है। पहले 15 दिनों का औसत 220 रुपये है, और अंतिम 17 दिनों का औसत 280 रुपये है। 15वें और 16वें दिन का संयुक्त औसत दैनिक खर्च क्या है?",
    options: {
      a: "260",
      b: "280",
      c: "300",
      d: "320"
    },
    options_hi: {
      a: "260",
      b: "280",
      c: "300",
      d: "320"
    },
    correct_option: "b",
    solution_text: "Total expense for 30 days = 30 × 250 = 7500.\nFirst 15 days = 15 × 220 = 3300.\nLast 17 days = 17 × 280 = 4760.\nSum of 15th and 16th days = (3300 + 4760) - 7500 = 8060 - 7500 = 560.\nAverage for these two days = 560 / 2 = 280.",
    solution_text_hi: "30 दिनों का कुल खर्च = 7500। पहले 15 दिन = 3300, अंतिम 17 दिन = 4760।\n15वें और 16वें दिन का योग = (3300 + 4760) - 7500 = 560।\nऔसत = 560 / 2 = 280।",
    shortcut_text: "Sum of overlapping 2 days = 2 × 250 + 15(220 - 250) + 17(280 - 250) = 500 - 450 + 510 = 560.\nAverage = 560 / 2 = 280.",
    shortcut_text_hi: "ओवरलैप 2 दिनों का योग = 500 - 450 + 510 = 560 => औसत = 560 / 2 = 280।"
  },
  {
    question_number: 23,
    practice_set: "Practice 1",
    level: "Level 3: Multi-Step",
    level_group: "Level 3: Multi-Step Logic & Ratios",
    type_category: "Bowling Average / Alligation",
    question_text: "A bowling average is calculated as runs conceded divided by wickets taken. A bowler whose bowling average is 12.4 takes 5 wickets for 26 runs in his last match, which decreases his average by 0.4. What was the total number of wickets taken by him before his last match?",
    question_text_hi: "गेंदबाजी औसत की गणना दिए गए रनों को लिए गए विकेटों से विभाजित करके की जाती है। एक गेंदबाज जिसका गेंदबाजी औसत 12.4 है, वह अपने अंतिम मैच में 26 रन देकर 5 विकेट लेता है, जिससे उसका औसत 0.4 कम हो जाता है। अपने अंतिम मैच से पहले उसके द्वारा लिए गए विकेटों की कुल संख्या क्या थी?",
    options: {
      a: "80",
      b: "85",
      c: "90",
      d: "95"
    },
    options_hi: {
      a: "80",
      b: "85",
      c: "90",
      d: "95"
    },
    correct_option: "b",
    solution_text: "Let initial wickets be w. Initial runs = 12.4w.\nNew wickets = w + 5. New runs = 12.4w + 26.\nNew average = 12.4 - 0.4 = 12.0.\n(12.4w + 26) / (w + 5) = 12.0 => 12.4w + 26 = 12.0w + 60 => 0.4w = 34 => w = 85.",
    solution_text_hi: "माना शुरुआती विकेट w हैं। शुरुआती रन = 12.4w।\n(12.4w + 26) / (w + 5) = 12.0 => 0.4w = 34 => w = 85।",
    shortcut_text: "By Alligation: Initial avg = 12.4, Last match avg = 26/5 = 5.2. Combined avg = 12.0.\nRatio = (12.0 - 5.2) : (12.4 - 12.0) = 6.8 : 0.4 = 17 : 1.\nSince 1 part = 5 wickets, 17 parts = 17 × 5 = 85 wickets.",
    shortcut_text_hi: "एलिगेशन द्वारा: प्रारंभिक = 12.4, अंतिम मैच = 5.2, मिश्रित = 12.0।\nअनुपात = 6.8 : 0.4 = 17 : 1।\n1 भाग = 5 विकेट => 17 भाग = 85 विकेट।"
  },
  {
    question_number: 24,
    practice_set: "Practice 1",
    level: "Level 3: Multi-Step",
    level_group: "Level 3: Multi-Step Logic & Ratios",
    type_category: "Weighted Average & Ratio",
    question_text: "In a school, 10% of the boys have an average weight of 60 kg, 40% have an average weight of 55 kg, and the remaining boys have an average weight of 50 kg. If the average weight of the girls is 45 kg and the average weight of the entire school is 50.8 kg, find the ratio of the number of boys to the number of girls.",
    question_text_hi: "एक स्कूल में, 10% लड़कों का औसत वजन 60 किग्रा है, 40% का औसत वजन 55 किग्रा है, और शेष लड़कों का औसत वजन 50 किग्रा है। यदि लड़कियों का औसत वजन 45 किग्रा है और पूरे स्कूल का औसत वजन 50.8 किग्रा है, तो लड़कों की संख्या का लड़कियों की संख्या से अनुपात ज्ञात कीजिए।",
    options: {
      a: "29:11",
      b: "25:11",
      c: "11:29",
      d: "11:25"
    },
    options_hi: {
      a: "29:11",
      b: "25:11",
      c: "11:29",
      d: "11:25"
    },
    correct_option: "a",
    solution_text: "Average weight of all boys = 0.1(60) + 0.4(55) + 0.5(50) = 6 + 22 + 25 = 53 kg.\nLet boys = B and girls = G. Overall avg = 50.8.\n(53B + 45G) / (B + G) = 50.8 => 53B + 45G = 50.8B + 50.8G => 2.2B = 5.8G => B/G = 5.8 / 2.2 = 29/11.",
    solution_text_hi: "लड़कों का औसत वजन = 6 + 22 + 25 = 53 किग्रा।\n(53B + 45G) / (B + G) = 50.8 => 2.2B = 5.8G => B/G = 29/11।",
    shortcut_text: "Step 1: Boys Avg = 53, Girls Avg = 45.\nStep 2: Alligation with overall 50.8:\nRatio = (50.8 - 45) : (53 - 50.8) = 5.8 : 2.2 = 29:11.",
    shortcut_text_hi: "लड़के = 53, लड़कियां = 45, समग्र औसत = 50.8।\nएलिगेशन: 5.8 : 2.2 = 29:11।"
  },

  // ==========================================
  // LEVEL 4: COMPLEX VARIABLES & OVERLAPPING CONDITIONS
  // ==========================================
  {
    question_number: 25,
    practice_set: "Practice 1",
    level: "Level 4: Complex",
    level_group: "Level 4: Complex Variables & Overlapping Conditions",
    type_category: "Ages & Sub-groups",
    question_text: "Three years ago, the average age of a husband, wife, and child was 27 years. Five years ago, the average age of the wife and child was 20 years. What is the present age of the husband?",
    question_text_hi: "तीन साल पहले, एक पति, पत्नी और बच्चे की औसत आयु 27 वर्ष थी। पांच साल पहले, पत्नी और बच्चे की औसत आयु 20 वर्ष थी। पति की वर्तमान आयु क्या है?",
    options: {
      a: "35",
      b: "38",
      c: "40",
      d: "42"
    },
    options_hi: {
      a: "35",
      b: "38",
      c: "40",
      d: "42"
    },
    correct_option: "c",
    solution_text: "Total age of H, W, C three years ago = 3 × 27 = 81.\nPresent total age of H, W, C = 81 + (3 × 3) = 90.\nTotal age of W, C five years ago = 2 × 20 = 40.\nPresent total age of W, C = 40 + (2 × 5) = 50.\nPresent age of Husband = 90 - 50 = 40.",
    solution_text_hi: "H, W, C की 3 वर्ष पूर्व कुल आयु = 81 => वर्तमान कुल आयु = 90।\nW, C की 5 वर्ष पूर्व कुल आयु = 40 => वर्तमान कुल आयु = 50।\nपति की वर्तमान आयु = 90 - 50 = 40।",
    shortcut_text: "Present avg of H, W, C = 27 + 3 = 30 => Sum = 90.\nPresent avg of W, C = 20 + 5 = 25 => Sum = 50.\nHusband = 90 - 50 = 40.",
    shortcut_text_hi: "H, W, C का वर्तमान योग = 90। W, C का वर्तमान योग = 50। पति = 40।"
  },
  {
    question_number: 26,
    practice_set: "Practice 1",
    level: "Level 4: Complex",
    level_group: "Level 4: Complex Variables & Overlapping Conditions",
    type_category: "Multiple Errors & Omissions",
    question_text: "The average of 18 observations is 125. Later it is found that two observations, 64 and 82, were wrongly written as 46 and 28. Also, one observation of 53 was completely missed during the initial calculation. Find the correct average of all 19 observations.",
    question_text_hi: "18 प्रेक्षणों का औसत 125 है। बाद में यह पाया गया कि दो प्रेक्षण, 64 और 82, गलत तरीके से 46 और 28 लिखे गए थे। इसके अलावा, प्रारंभिक गणना के दौरान 53 का एक प्रेक्षण पूरी तरह से छूट गया था। सभी 19 प्रेक्षणों का सही औसत ज्ञात कीजिए।",
    options: {
      a: "124",
      b: "125",
      c: "126",
      d: "127"
    },
    options_hi: {
      a: "124",
      b: "125",
      c: "126",
      d: "127"
    },
    correct_option: "b",
    solution_text: "Initial incorrect sum for 18 observations = 18 × 125 = 2250.\nFix misread errors: True = 64 + 82 = 146, Written = 46 + 28 = 74. Deficit = 146 - 74 = +72.\nAdd missed observation = +53.\nCorrected sum = 2250 + 72 + 53 = 2375.\nTotal observations = 19.\nCorrect average = 2375 / 19 = 125.",
    solution_text_hi: "18 प्रेक्षणों का गलत योग = 2250।\nसुधार = (64 - 46) + (82 - 28) = +72।\nछूटा हुआ प्रेक्षण = +53।\nसही योग = 2250 + 72 + 53 = 2375।\nसही औसत = 2375 / 19 = 125।",
    shortcut_text: "Net correction = +18 (64 vs 46) + 54 (82 vs 28) + 53 (missed) = +125.\nNew Sum = 2250 + 125 = 2375.\nNew Average = 2375 / 19 = 125.",
    shortcut_text_hi: "कुल सुधार = +18 + 54 + 53 = +125। नया योग = 2375 => नया औसत = 2375 / 19 = 125।"
  },
  {
    question_number: 27,
    practice_set: "Practice 1",
    level: "Level 4: Complex",
    level_group: "Level 4: Complex Variables & Overlapping Conditions",
    type_category: "Multi-Replacement / Altering Group",
    question_text: "A group consists of an equal number of men and women. The average weight of the men is 75 kg and that of the women is 60 kg. If 5 men leave the group and 5 women join, the overall average weight of the group decreases by 2.5 kg. What was the original number of people in the group?",
    question_text_hi: "एक समूह में पुरुषों और महिलाओं की संख्या समान है। पुरुषों का औसत वजन 75 किग्रा है और महिलाओं का 60 किग्रा है। यदि 5 पुरुष समूह छोड़ देते हैं और 5 महिलाएं शामिल हो जाती हैं, तो समूह का कुल औसत वजन 2.5 किग्रा कम हो जाता है। समूह में लोगों की मूल संख्या क्या थी?",
    options: {
      a: "20",
      b: "30",
      c: "40",
      d: "50"
    },
    options_hi: {
      a: "20",
      b: "30",
      c: "40",
      d: "50"
    },
    correct_option: "b",
    solution_text: "Let there be n men and n women. Total people = 2n.\nOriginal average = (75n + 60n) / 2n = 135/2 = 67.5 kg.\nNew average = 67.5 - 2.5 = 65 kg.\nTotal weight after change = 75(n - 5) + 60(n + 5) = 135n - 75.\n135n - 75 = 65 × 2n = 130n => 5n = 75 => n = 15.\nTotal original people = 2n = 30.",
    solution_text_hi: "माना n पुरुष और n महिलाएं हैं। मूल औसत = 67.5, नया औसत = 65।\n75(n - 5) + 60(n + 5) = 130n => 5n = 75 => n = 15।\nकुल लोग = 2n = 30।",
    shortcut_text: "Replacing 5 men (75 kg) with 5 women (60 kg) removes 5 × 15 = 75 kg from the total.\nThis 75 kg drop causes a 2.5 kg drop across the entire group.\nTotal people = 75 / 2.5 = 30.",
    shortcut_text_hi: "कुल वजन में कमी = 5 × (75 - 60) = 75 किग्रा।\nकुल लोग = 75 / 2.5 = 30।"
  },
  {
    question_number: 28,
    practice_set: "Practice 1",
    level: "Level 4: Complex",
    level_group: "Level 4: Complex Variables & Overlapping Conditions",
    type_category: "Algebraic Average / Sets",
    question_text: "There are 4 consecutive even numbers A, B, C, D and 5 consecutive odd numbers P, Q, R, S, T. The average of the odd numbers is 7 more than the average of the even numbers. If the sum of the odd numbers is 45 more than the sum of the even numbers, find the average of the even numbers.",
    question_text_hi: "4 लगातार सम संख्याएँ A, B, C, D और 5 लगातार विषम संख्याएँ P, Q, R, S, T हैं। विषम संख्याओं का औसत सम संख्याओं के औसत से 7 अधिक है। यदि विषम संख्याओं का योग सम संख्याओं के योग से 45 अधिक है, तो सम संख्याओं का औसत ज्ञात कीजिए।",
    options: {
      a: "8",
      b: "10",
      c: "12",
      d: "14"
    },
    options_hi: {
      a: "8",
      b: "10",
      c: "12",
      d: "14"
    },
    correct_option: "b",
    solution_text: "Let average of even numbers = E, and odd numbers = O.\nO = E + 7.\nSum of 4 even = 4E, Sum of 5 odd = 5O.\nGiven 5O = 4E + 45 => 5(E + 7) = 4E + 45 => 5E + 35 = 4E + 45 => E = 10.",
    solution_text_hi: "माना सम का औसत = E, विषम का = O। O = E + 7।\n5O = 4E + 45 => 5(E + 7) = 4E + 45 => E = 10।",
    shortcut_text: "5(E + 7) - 4E = 45 => E + 35 = 45 => E = 10.",
    shortcut_text_hi: "5(E + 7) - 4E = 45 => E + 35 = 45 => E = 10।"
  },
  {
    question_number: 29,
    practice_set: "Practice 1",
    level: "Level 4: Complex",
    level_group: "Level 4: Complex Variables & Overlapping Conditions",
    type_category: "Complex Sub-groups",
    question_text: "The average of 18 numbers is 60. The average of the first 7 numbers is 55. The average of the next 8 numbers is 20% more than the average of the first 7 numbers. The 16th number is 5 less than the 18th number, and the 17th number is 4 more than the 18th number. What is the average of the 16th and 17th numbers?",
    question_text_hi: "18 संख्याओं का औसत 60 है। पहली 7 संख्याओं का औसत 55 है। अगली 8 संख्याओं का औसत पहली 7 संख्याओं के औसत से 20% अधिक है। 16वीं संख्या 18वीं संख्या से 5 कम है, और 17वीं संख्या 18वीं संख्या से 4 अधिक है। 16वीं और 17वीं संख्याओं का औसत क्या है?",
    options: {
      a: "54.5",
      b: "55.5",
      c: "56.5",
      d: "57.5"
    },
    options_hi: {
      a: "54.5",
      b: "55.5",
      c: "56.5",
      d: "57.5"
    },
    correct_option: "b",
    solution_text: "Total sum = 18 × 60 = 1080.\nSum of first 7 = 7 × 55 = 385.\nAverage of next 8 = 1.2 × 55 = 66 => Sum of next 8 = 8 × 66 = 528.\nSum of remaining 3 numbers = 1080 - (385 + 528) = 1080 - 913 = 167.\nLet 18th = z. 16th = z - 5, 17th = z + 4.\n(z - 5) + (z + 4) + z = 167 => 3z - 1 = 167 => 3z = 168 => z = 56.\n16th = 51, 17th = 60.\nAverage = (51 + 60) / 2 = 55.5.",
    solution_text_hi: "कुल योग = 1080। पहली 7 = 385, अगली 8 (औसत 66) = 528।\nशेष 3 का योग = 1080 - 913 = 167।\n(z - 5) + (z + 4) + z = 167 => 3z = 168 => z = 56।\n16वीं = 51, 17वीं = 60 => औसत = 55.5।",
    shortcut_text: "Sum of last 3 = 3 × 60 - 7(-5) - 8(+6) = 180 + 35 - 48 = 167.\n3z - 1 = 167 => z = 56.\nTarget avg = [(z - 5) + (z + 4)] / 2 = z - 0.5 = 56 - 0.5 = 55.5.",
    shortcut_text_hi: "अंतिम 3 का योग = 167 => 3z - 1 = 167 => z = 56।\nलक्ष्य औसत = z - 0.5 = 56 - 0.5 = 55.5।"
  },
  {
    question_number: 30,
    practice_set: "Practice 1",
    level: "Level 4: Complex",
    level_group: "Level 4: Complex Variables & Overlapping Conditions",
    type_category: "Overlapping Days / Ratios",
    question_text: "The average temperature from Monday to Wednesday is 37°C, and from Tuesday to Thursday is 34°C. If the temperature on Thursday is 4/5 of the temperature on Monday, what is the temperature on Thursday?",
    question_text_hi: "सोमवार से बुधवार तक का औसत तापमान 37°C है, और मंगलवार से गुरुवार तक का औसत तापमान 34°C है। यदि गुरुवार का तापमान सोमवार के तापमान का 4/5 है, तो गुरुवार का तापमान क्या है?",
    options: {
      a: "32°C",
      b: "34°C",
      c: "36°C",
      d: "38°C"
    },
    options_hi: {
      a: "32°C",
      b: "34°C",
      c: "36°C",
      d: "38°C"
    },
    correct_option: "c",
    solution_text: "M + Tu + W = 3 × 37 = 111.\nTu + W + Th = 3 × 34 = 102.\nSubtracting gives M - Th = 9.\nGiven Th = (4/5)M => M - (4/5)M = 9 => (1/5)M = 9 => M = 45°C.\nTh = (4/5) × 45 = 36°C.",
    solution_text_hi: "M + Tu + W = 111, Tu + W + Th = 102 => M - Th = 9।\nTh = (4/5)M => (1/5)M = 9 => M = 45°C।\nगुरुवार (Th) = (4/5) × 45 = 36°C।",
    shortcut_text: "M - Th = 3 × (37 - 34) = 9.\nRatio M : Th = 5 : 4 => Difference of 1 unit = 9.\nThursday = 4 units = 4 × 9 = 36°C.",
    shortcut_text_hi: "M - Th = 3 × 3 = 9। M:Th = 5:4 => 1 इकाई = 9 => गुरुवार = 4 × 9 = 36°C।"
  },
  {
    question_number: 31,
    practice_set: "Practice 1",
    level: "Level 4: Complex",
    level_group: "Level 4: Complex Variables & Overlapping Conditions",
    type_category: "Weighted Average / Percentages",
    question_text: "In a factory, there are three shifts: Morning, Afternoon, and Night. The average production per worker in the shifts is 35, 26, and 18 units respectively. The number of workers in the Morning shift is 20% less than the Afternoon shift, and the Night shift has 100% of the combined workers of the Morning and Afternoon shifts. What is the overall average production per worker in the factory?",
    question_text_hi: "एक कारखाने में तीन शिफ्ट हैं: सुबह, दोपहर और रात। शिफ्टों में प्रति कर्मचारी औसत उत्पादन क्रमशः 35, 26 और 18 इकाइयाँ हैं। सुबह की शिफ्ट में कर्मचारियों की संख्या दोपहर की शिफ्ट से 20% कम है, और रात की शिफ्ट में सुबह और दोपहर की शिफ्ट के संयुक्त कर्मचारियों का 100% है। कारखाने में प्रति कर्मचारी कुल औसत उत्पादन क्या है?",
    options: {
      a: "22",
      b: "23",
      c: "24",
      d: "25"
    },
    options_hi: {
      a: "22",
      b: "23",
      c: "24",
      d: "25"
    },
    correct_option: "c",
    solution_text: "Let Afternoon workers = 5 units. Morning workers (20% less) = 4 units.\nNight workers = 4 + 5 = 9 units.\nWorker ratio Morning : Afternoon : Night = 4 : 5 : 9 (Total = 18 units).\nTotal production = (4 × 35) + (5 × 26) + (9 × 18) = 140 + 130 + 162 = 432.\nOverall average = 432 / 18 = 24.",
    solution_text_hi: "दोपहर = 5 इकाई, सुबह = 4 इकाई, रात = 4 + 5 = 9 इकाई।\nकुल कर्मचारी = 18 इकाई।\nकुल उत्पादन = (4 × 35) + (5 × 26) + (9 × 18) = 140 + 130 + 162 = 432।\nकुल औसत = 432 / 18 = 24।",
    shortcut_text: "Assume base average of 20.\nDeviations: Morning = 4 × (+15) = +60; Afternoon = 5 × (+6) = +30; Night = 9 × (-2) = -18.\nNet deviation = 60 + 30 - 18 = +72.\nAverage deviation = +72 / 18 = +4 => Actual average = 20 + 4 = 24.",
    shortcut_text_hi: "20 का आधार औसत मान लें। कुल विचलन = 60 + 30 - 18 = +72।\nऔसत विचलन = +72 / 18 = +4 => वास्तविक औसत = 20 + 4 = 24।"
  },
  {
    question_number: 32,
    practice_set: "Practice 1",
    level: "Level 4: Complex",
    level_group: "Level 4: Complex Variables & Overlapping Conditions",
    type_category: "Dual Averages / Mixtures",
    question_text: "Three containers X, Y, and Z have mixtures of milk and water. The average concentration of milk in X and Y is 40%, the average in Y and Z is 50%, and the average in Z and X is 60%. If the volumes of X, Y, and Z are equal, what is the final concentration of milk if all three containers are mixed together entirely?",
    question_text_hi: "तीन कंटेनरों X, Y, और Z में दूध और पानी का मिश्रण है। X और Y में दूध की औसत सांद्रता 40% है, Y और Z में औसत 50% है, और Z और X में औसत 60% है। यदि X, Y, और Z के आयतन समान हैं, तो यदि तीनों कंटेनरों को पूरी तरह से एक साथ मिला दिया जाए तो दूध की अंतिम सांद्रता क्या होगी?",
    options: {
      a: "45%",
      b: "50%",
      c: "55%",
      d: "60%"
    },
    options_hi: {
      a: "45%",
      b: "50%",
      c: "55%",
      d: "60%"
    },
    correct_option: "b",
    solution_text: "X + Y = 2 × 40 = 80.\nY + Z = 2 × 50 = 100.\nZ + X = 2 × 60 = 120.\nSumming them: 2(X + Y + Z) = 300 => X + Y + Z = 150.\nSince equal volumes are mixed, overall concentration = 150 / 3 = 50%.",
    solution_text_hi: "X + Y = 80, Y + Z = 100, Z + X = 120 => 2(X + Y + Z) = 300 => X + Y + Z = 150।\nसमान आयतन मिलाने पर अंतिम सांद्रता = 150 / 3 = 50%।",
    shortcut_text: "Final Concentration = Sum of dual averages / 3 = (40 + 50 + 60) / 3 = 150 / 3 = 50%.",
    shortcut_text_hi: "अंतिम सांद्रता = दोहरे औसतों का योग / 3 = (40 + 50 + 60) / 3 = 150 / 3 = 50%।"
  },

  // ==========================================
  // LEVEL 5: MAINS LEVEL ANALYTICAL PROBLEMS
  // ==========================================
  {
    question_number: 33,
    practice_set: "Practice 1",
    level: "Level 5: Mains Level",
    level_group: "Level 5: Mains Level Analytical Problems",
    type_category: "Double Replacement / Ages",
    question_text: "In a committee of 8 persons, the average age remains the same as it was 3 years ago when two older members are replaced by two younger members. What is the difference between the total age of the two old members and the two new members?",
    question_text_hi: "8 व्यक्तियों की एक समिति में, औसत आयु वही रहती है जो 3 साल पहले थी जब दो बड़े सदस्यों को दो छोटे सदस्यों द्वारा प्रतिस्थापित किया जाता है। दो पुराने सदस्यों और दो नए सदस्यों की कुल आयु के बीच का अंतर क्या है?",
    options: {
      a: "18",
      b: "20",
      c: "24",
      d: "28"
    },
    options_hi: {
      a: "18",
      b: "20",
      c: "24",
      d: "28"
    },
    correct_option: "c",
    solution_text: "Let the average 3 years ago for all 8 was A. Their sum was 8A.\nToday, without replacement, their sum would be 8A + 24.\nSince replacing old members with new members brings sum back down to 8A, the new members must be exactly 24 years younger than old members.\nDifference = (O1 + O2) - (N1 + N2) = 24.",
    solution_text_hi: "3 वर्ष पूर्व 8 सदस्यों का योग = 8A। आज बिना प्रतिस्थापन के योग = 8A + 24 होता।\nप्रतिस्थापन के बाद योग पुनः 8A हो गया => अंतर = 24 वर्ष।",
    shortcut_text: "Difference = Total Persons × Years offset = 8 × 3 = 24.",
    shortcut_text_hi: "अंतर = कुल व्यक्ति × वर्षों का अंतर = 8 × 3 = 24।"
  },
  {
    question_number: 34,
    practice_set: "Practice 1",
    level: "Level 5: Mains Level",
    level_group: "Level 5: Mains Level Analytical Problems",
    type_category: "Sub-groups Error Correction",
    question_text: "A group of 14 students appeared for a mathematics test. The average of the top 7 scores was 85, and the average of the bottom 7 scores was 70. Later, it was found that a decimal error had occurred, and one of the scores from the top half was mistakenly recorded as 74 instead of 95. What is the corrected overall average of the group?",
    question_text_hi: "14 छात्रों का एक समूह गणित की परीक्षा में शामिल हुआ। शीर्ष 7 स्कोरों का औसत 85 था, और निचले 7 स्कोरों का औसत 70 था। बाद में, यह पाया गया कि एक दशमलव त्रुटि हुई थी, और शीर्ष आधे भाग में से एक स्कोर गलती से 95 के बजाय 74 दर्ज किया गया था। समूह का सुधारा गया कुल औसत क्या है?",
    options: {
      a: "78",
      b: "79",
      c: "80",
      d: "81"
    },
    options_hi: {
      a: "78",
      b: "79",
      c: "80",
      d: "81"
    },
    correct_option: "b",
    solution_text: "Initial sum = (7 × 85) + (7 × 70) = 595 + 490 = 1085.\nTrue sum is higher by 95 - 74 = +21.\nCorrected sum = 1085 + 21 = 1106.\nCorrected average = 1106 / 14 = 79.",
    solution_text_hi: "प्रारंभिक कुल योग = (7 × 85) + (7 × 70) = 1085।\nत्रुटि सुधार = 95 - 74 = +21।\nसुधारा गया योग = 1085 + 21 = 1106।\nसुधारा गया औसत = 1106 / 14 = 79।",
    shortcut_text: "Initial overall average = (85 + 70) / 2 = 77.5.\nChange in average = +21 / 14 = +1.5.\nNew average = 77.5 + 1.5 = 79.",
    shortcut_text_hi: "प्रारंभिक औसत = 77.5। औसत में वृद्धि = +21 / 14 = +1.5 => नया औसत = 79।"
  },
  {
    question_number: 35,
    practice_set: "Practice 1",
    level: "Level 5: Mains Level",
    level_group: "Level 5: Mains Level Analytical Problems",
    type_category: "Sequential Replacement",
    question_text: "The average weight of A, B, and C is 84 kg. If D joins, the average weight becomes 80 kg. If another person E, who is 3 kg heavier than D, replaces A, the average weight of B, C, D, and E becomes 79 kg. What is the weight of A?",
    question_text_hi: "A, B, और C का औसत वजन 84 किग्रा है। यदि D शामिल होता है, तो औसत वजन 80 किग्रा हो जाता है। यदि एक अन्य व्यक्ति E, जो D से 3 किग्रा भारी है, A का स्थान लेता है, तो B, C, D, और E का औसत वजन 79 किग्रा हो जाता है। A का वजन क्या है?",
    options: {
      a: "70 kg",
      b: "72 kg",
      c: "75 kg",
      d: "78 kg"
    },
    options_hi: {
      a: "70 किग्रा",
      b: "72 किग्रा",
      c: "75 किग्रा",
      d: "78 किग्रा"
    },
    correct_option: "c",
    solution_text: "A + B + C = 3 × 84 = 252.\nA + B + C + D = 4 × 80 = 320 => D = 320 - 252 = 68 kg.\nE = 68 + 3 = 71 kg.\nB + C + D + E = 4 × 79 = 316 => B + C + 68 + 71 = 316 => B + C = 177 kg.\nSince A + B + C = 252 => A = 252 - 177 = 75 kg.",
    solution_text_hi: "A + B + C = 252। A + B + C + D = 320 => D = 68 किग्रा।\nE = 71 किग्रा। B + C + D + E = 316 => B + C = 177 किग्रा।\nA = 252 - 177 = 75 किग्रा।",
    shortcut_text: "A - E = Sum(A,B,C,D) - Sum(B,C,D,E) = 320 - 316 = 4 kg.\nSince D = 68 kg and E = 71 kg:\nA = 71 + 4 = 75 kg.",
    shortcut_text_hi: "A - E = 320 - 316 = 4 किग्रा। E = 71 किग्रा => A = 71 + 4 = 75 किग्रा।"
  },
  {
    question_number: 36,
    practice_set: "Practice 1",
    level: "Level 5: Mains Level",
    level_group: "Level 5: Mains Level Analytical Problems",
    type_category: "Shifting Consecutive Sequences",
    question_text: "The average of 5 consecutive odd numbers is 47. If the previous 5 consecutive odd natural numbers to these 5 odd numbers are also included, what will be the average of the newly added 5 numbers?",
    question_text_hi: "5 लगातार विषम संख्याओं का औसत 47 है। यदि इन 5 विषम संख्याओं से पहले की 5 लगातार विषम प्राकृतिक संख्याओं को भी शामिल किया जाए, तो नई जोड़ी गई 5 संख्याओं का औसत क्या होगा?",
    options: {
      a: "33",
      b: "35",
      c: "37",
      d: "39"
    },
    options_hi: {
      a: "33",
      b: "35",
      c: "37",
      d: "39"
    },
    correct_option: "c",
    solution_text: "Original 5 consecutive odd numbers have 47 as middle: 43, 45, 47, 49, 51.\nThe previous 5 consecutive odd numbers are: 33, 35, 37, 39, 41.\nThe average of these newly added 5 numbers is their middle number = 37.",
    solution_text_hi: "मूल संख्याएँ: 43, 45, 47, 49, 51।\nपिछली 5 विषम संख्याएँ: 33, 35, 37, 39, 41।\nऔसत (मध्य संख्या) = 37।",
    shortcut_text: "Average of previous block of N consecutive odd numbers = A - 2N = 47 - 2(5) = 47 - 10 = 37.",
    shortcut_text_hi: "पिछले N लगातार विषम संख्याओं के ब्लॉक का औसत = A - 2N = 47 - 2(5) = 37।"
  },
  {
    question_number: 37,
    practice_set: "Practice 1",
    level: "Level 5: Mains Level",
    level_group: "Level 5: Mains Level Analytical Problems",
    type_category: "Complex Overlap & Algebra",
    question_text: "Out of 22 numbers, the average of the first 10 numbers is 55 and the average of the next 9 numbers is 58. If the 20th number is 7 less than the 21st number and the 21st number is 4 more than the 22nd number, find the average of the 20th and 22nd numbers given that the overall average of all 22 numbers is 56.",
    question_text_hi: "22 संख्याओं में से, पहली 10 संख्याओं का औसत 55 है और अगली 9 संख्याओं का औसत 58 है। यदि 20वीं संख्या 21वीं संख्या से 7 कम है और 21वीं संख्या 22वीं संख्या से 4 अधिक है, तो 20वीं और 22वीं संख्याओं का औसत ज्ञात कीजिए, यह देखते हुए कि सभी 22 संख्याओं का कुल औसत 56 है।",
    options: {
      a: "50.5",
      b: "51.5",
      c: "52.5",
      d: "53.5"
    },
    options_hi: {
      a: "50.5",
      b: "51.5",
      c: "52.5",
      d: "53.5"
    },
    correct_option: "b",
    solution_text: "Total sum = 22 × 56 = 1232.\nSum of first 10 = 550. Sum of next 9 = 522.\nRemaining sum (20th + 21st + 22nd) = 1232 - (550 + 522) = 160.\nLet 20th = x. 21st = x + 7. 22nd = (x + 7) - 4 = x + 3.\nx + (x + 7) + (x + 3) = 160 => 3x + 10 = 160 => 3x = 150 => x = 50.\n20th = 50, 22nd = 53.\nAverage = (50 + 53) / 2 = 51.5.",
    solution_text_hi: "कुल योग = 1232। पहली 10 = 550, अगली 9 = 522। शेष योग = 160।\nx + (x + 7) + (x + 3) = 160 => 3x = 150 => x = 50।\n20वीं = 50, 22वीं = 53 => औसत = 51.5।",
    shortcut_text: "Remaining sum = 3 × 56 - 10(-1) - 9(+2) = 168 + 10 - 18 = 160.\n3x + 10 = 160 => x = 50.\nTarget average = (x + x + 3) / 2 = x + 1.5 = 50 + 1.5 = 51.5.",
    shortcut_text_hi: "शेष योग = 160 => 3x + 10 = 160 => x = 50। लक्ष्य औसत = x + 1.5 = 51.5।"
  },
  {
    question_number: 38,
    practice_set: "Practice 1",
    level: "Level 5: Mains Level",
    level_group: "Level 5: Mains Level Analytical Problems",
    type_category: "Circular Averages",
    question_text: "Let x, y, and z be three numbers. The average of x and y is 30, the average of y and z is 40, and the average of z and x is 50. What is the average of x, y, and z?",
    question_text_hi: "मान लीजिए x, y, और z तीन संख्याएँ हैं। x और y का औसत 30 है, y और z का औसत 40 है, और z और x का औसत 50 है। x, y, और z का औसत क्या है?",
    options: {
      a: "35",
      b: "40",
      c: "45",
      d: "50"
    },
    options_hi: {
      a: "35",
      b: "40",
      c: "45",
      d: "50"
    },
    correct_option: "b",
    solution_text: "x + y = 2 × 30 = 60.\ny + z = 2 × 40 = 80.\nz + x = 2 × 50 = 100.\nAdding them: 2(x + y + z) = 240 => x + y + z = 120.\nAverage = 120 / 3 = 40.",
    solution_text_hi: "x + y = 60, y + z = 80, z + x = 100 => 2(x + y + z) = 240 => x + y + z = 120।\nऔसत = 120 / 3 = 40।",
    shortcut_text: "When pairs are given, average of all three is simply the average of the three pair averages:\n(30 + 40 + 50) / 3 = 120 / 3 = 40.",
    shortcut_text_hi: "तीनों का औसत = तीनों जोड़ियों के औसतों का औसत = (30 + 40 + 50) / 3 = 40।"
  },
  {
    question_number: 39,
    practice_set: "Practice 1",
    level: "Level 5: Mains Level",
    level_group: "Level 5: Mains Level Analytical Problems",
    type_category: "Replacement & Percentage Change",
    question_text: "A group of 10 workers has an average output of 58 units per day. 2 workers producing 30 units each leave, and 2 workers producing 70 units each join. Concurrently, a minor machine breakdown reduces every individual worker's output by 5%. What is the new average output of the group?",
    question_text_hi: "10 श्रमिकों के एक समूह का औसत उत्पादन 58 इकाई प्रतिदिन है। 30 इकाई उत्पादन करने वाले 2 श्रमिक चले जाते हैं, और 70 इकाई उत्पादन करने वाले 2 श्रमिक शामिल हो जाते हैं। साथ ही, मशीन की मामूली खराबी से प्रत्येक व्यक्तिगत श्रमिक का उत्पादन 5% कम हो जाता है। समूह का नया औसत उत्पादन क्या है?",
    options: {
      a: "55.1",
      b: "58.0",
      c: "60.5",
      d: "62.7"
    },
    options_hi: {
      a: "55.1",
      b: "58.0",
      c: "60.5",
      d: "62.7"
    },
    correct_option: "d",
    solution_text: "Initial sum = 10 × 58 = 580.\nSubtract leaving workers: 580 - (2 × 30) = 520.\nAdd joining workers: 520 + (2 × 70) = 660.\nNew average before breakdown = 660 / 10 = 66.\nAfter 5% breakdown reduction: New average = 66 × 0.95 = 62.7.",
    solution_text_hi: "प्रारंभिक योग = 580।\nजाने वाले: 580 - 60 = 520। आने वाले: 520 + 140 = 660।\nखराबी से पहले नया औसत = 660 / 10 = 66।\n5% कमी के बाद नया औसत = 66 × 0.95 = 62.7।",
    shortcut_text: "Net change in sum = 140 - 60 = +80.\nChange in average = +80 / 10 = +8 => Pre-breakdown average = 58 + 8 = 66.\nPost-breakdown average = 66 × (1 - 0.05) = 62.7.",
    shortcut_text_hi: "औसत में परिवर्तन = +8 => 58 + 8 = 66। खराबी के बाद औसत = 66 × 0.95 = 62.7।"
  },
  {
    question_number: 40,
    practice_set: "Practice 1",
    level: "Level 5: Mains Level",
    level_group: "Level 5: Mains Level Analytical Problems",
    type_category: "Number Theory / Integer Constraints",
    question_text: "The average age of 30 students in a class is a years. When a teacher aged 50 years joins, the new average becomes an integer b. If the initial average a was also an integer, how many possible values can a take, given that a < 50?",
    question_text_hi: "एक कक्षा में 30 छात्रों की औसत आयु a वर्ष है। जब 50 वर्ष की आयु का एक शिक्षक शामिल होता है, तो नया औसत एक पूर्णांक b बन जाता है। यदि प्रारंभिक औसत a भी एक पूर्णांक था, तो a के कितने संभावित मान हो सकते हैं, यह देखते हुए कि a < 50 है?",
    options: {
      a: "0",
      b: "1",
      c: "2",
      d: "3"
    },
    options_hi: {
      a: "0",
      b: "1",
      c: "2",
      d: "3"
    },
    correct_option: "b",
    solution_text: "Initial total age = 30a. New total age = 30a + 50.\nNew average b = (30a + 50) / 31.\n31b = 30a + 50 => 30a - 30b = b - 50 => 30(a - b) = b - 50.\nSince teacher is older, b > a, so a - b is negative integer, meaning b - 50 is negative multiple of 30: b - 50 = -30k => b = 50 - 30k.\nSince b > 0, the only positive integer for k is 1, giving b = 20.\nIf b = 20: 30(a - 20) = -30 => a - 20 = -1 => a = 19.\nThere is exactly 1 possible value.",
    solution_text_hi: "प्रारंभिक कुल आयु = 30a, नया योग = 30a + 50।\nनया औसत b = (30a + 50) / 31 => 30(a - b) = b - 50।\nb > 0 के लिए k = 1 => b = 20 => a = 19।\nअतः a का ठीक 1 मान संभव है।",
    shortcut_text: "b = a + (50 - a) / 31.\nFor b to be an integer, 50 - a must be a multiple of 31.\nSince 0 < a < 50, the only multiple of 31 is 31 itself: 50 - a = 31 => a = 19.\nTherefore, there is only 1 solution.",
    shortcut_text_hi: "b = a + (50 - a) / 31। b पूर्णांक होने के लिए, (50 - a) 31 का गुणज होना चाहिए। 1 और 50 के बीच 31 का एकमात्र गुणज स्वयं 31 है => a = 19। अतः केवल 1 मान संभव है।"
  }
];

if (typeof window !== "undefined") {
  window.AVERAGE_PRACTICE_1_QUESTIONS = AVERAGE_PRACTICE_1_QUESTIONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { AVERAGE_PRACTICE_1_QUESTIONS };
}
