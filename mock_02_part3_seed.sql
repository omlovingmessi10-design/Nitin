-- =========================================================================
-- SSC CGL 2026 MOCK TEST 02: PART-3 - Quantitative Aptitude (Q51 - Q75)
-- =========================================================================

-- Satisfy Foreign Key in mock_tests
INSERT INTO public.mock_tests (id, title, duration_minutes, maximum_marks, is_active)
VALUES ('ssc-cgl-2026-mock-02', 'SSC CGL 2026: Mock Test 02 (4 Parts x 25 Qs - 15 Min/Part)', 60, 200, true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.mock_test_questions (
  test_id, question_number, section_name, section_title,
  question_text, question_text_hi,
  option_a, option_b, option_c, option_d,
  option_a_hi, option_b_hi, option_c_hi, option_d_hi,
  correct_option, solution_text, solution_text_hi
) VALUES
(
  'ssc-cgl-2026-mock-02', 51, 'PART-3', 'Quantitative Aptitude',
  'If a + b + c = 6 and ab + bc + ca = 11, find the value of a³ + b³ + c³ - 3abc.',
  'यदि a + b + c = 6 और ab + bc + ca = 11 है, तो a³ + b³ + c³ - 3abc का मान ज्ञात कीजिए।',
  '18', '24', '36', '42',
  '18', '24', '36', '42',
  'a',
  'a² + b² + c² = (a+b+c)² - 2(ab+bc+ca) = 36 - 22 = 14. Identity: a³+b³+c³-3abc = (a+b+c)(a²+b²+c² - (ab+bc+ca)) = 6 * (14 - 11) = 6 * 3 = 18.',
  'a² + b² + c² = 36 - 22 = 14। a³+b³+c³-3abc = (a+b+c)(a²+b²+c² - (ab+bc+ca)) = 6 * (14 - 11) = 18।'
),
(
  'ssc-cgl-2026-mock-02', 52, 'PART-3', 'Quantitative Aptitude',
  'If A : B = 2 : 3, B : C = 4 : 5, and C : D = 6 : 7, what is the compound ratio A : D?',
  'यदि A : B = 2 : 3, B : C = 4 : 5 और C : D = 6 : 7 है, तो मिश्र अनुपात A : D क्या है?',
  '16 : 35', '8 : 21', '12 : 35', '16 : 21',
  '16 : 35', '8 : 21', '12 : 35', '16 : 21',
  'a',
  'A/D = (A/B) * (B/C) * (C/D) = (2/3) * (4/5) * (6/7) = 48 / 105 = 16 / 35.',
  'A/D = (2/3) * (4/5) * (6/7) = 48 / 105 = 16 / 35।'
),
(
  'ssc-cgl-2026-mock-02', 53, 'PART-3', 'Quantitative Aptitude',
  'Simplify the surd: √(14 + 6√5)',
  'सरल कीजिए: √(14 + 6√5)',
  '2 + √5', '3 + √5', '1 + 2√5', '3 - √5',
  '2 + √5', '3 + √5', '1 + 2√5', '3 - √5',
  'b',
  '2ab = 6√5 => ab = 3√5. Let a = 3, b = √5. Check: a² + b² = 9 + 5 = 14. Thus √(14 + 6√5) = √(3 + √5)² = 3 + √5.',
  '14 + 6√5 = 3² + (√5)² + 2(3)(√5) = (3 + √5)²। अतः वर्गमूल = 3 + √5।'
),
(
  'ssc-cgl-2026-mock-02', 54, 'PART-3', 'Quantitative Aptitude',
  'A vendor marks his goods 20% above the cost price and allows a discount of 10% on marked price. What is his profit percentage?',
  'एक विक्रेता अपने माल पर क्रय मूल्य से 20% अधिक अंकित करता है और 10% की छूट देता है। उसका लाभ प्रतिशत क्या है?',
  '8%', '10%', '12%', '15%',
  '8%', '10%', '12%', '15%',
  'a',
  'Successive formula: Net% = +20 - 10 + (20 * -10)/100 = 10 - 2 = 8% profit.',
  'शुद्ध लाभ% = 20 - 10 - (20 * 10)/100 = 8%।'
),
(
  'ssc-cgl-2026-mock-02', 55, 'PART-3', 'Quantitative Aptitude',
  'Pipe A can fill a tank in 12 hours, Pipe B in 15 hours, and Pipe C can empty it in 20 hours. If all three are opened together, how long will it take to fill the tank?',
  'पाइप A एक टंकी को 12 घंटे में, B 15 घंटे में भर सकता है और C इसे 20 घंटे में खाली कर सकता है। तीनों एक साथ खोले जाएं तो टंकी कितने समय में भरेगी?',
  '8 hours', '10 hours', '12 hours', '15 hours',
  '8 घंटे', '10 घंटे', '12 घंटे', '15 घंटे',
  'b',
  'LCM of 12, 15, 20 = 60 units. Rate A = +5, B = +4, C = -3. Net rate = 5 + 4 - 3 = 6 units/hr. Time = 60 / 6 = 10 hours.',
  'कुल क्षमता = 60 इकाइयाँ। कुल शुद्ध दर = 5 + 4 - 3 = 6। समय = 60 / 6 = 10 घंटे।'
),
(
  'ssc-cgl-2026-mock-02', 56, 'PART-3', 'Quantitative Aptitude',
  'A sum of ₹5,000 is lent out in two parts, one at 4% simple interest and the other at 5% simple interest. If the total annual interest is ₹220, what is the sum lent at 4%?',
  '₹5,000 की राशि को दो भागों में उधार दिया जाता है, एक भाग 4% साधारण ब्याज पर और दूसरा 5% पर। यदि कुल वार्षिक ब्याज ₹220 है, तो 4% पर दी गई राशि कितनी है?',
  '₹2,000', '₹2,500', '₹3,000', '₹3,500',
  '₹2,000', '₹2,500', '₹3,000', '₹3,500',
  'c',
  'Let amount at 4% be x. 0.04x + 0.05(5000 - x) = 220 => -0.01x + 250 = 220 => 0.01x = 30 => x = ₹3,000.',
  'माना 4% पर राशि x है। 0.04x + 0.05(5000 - x) = 220 => 250 - 0.01x = 220 => 0.01x = 30 => x = ₹3,000।'
),
(
  'ssc-cgl-2026-mock-02', 57, 'PART-3', 'Quantitative Aptitude',
  'The angle of elevation of the top of a tower from a point on the ground 30 m away from its foot is 30°. The height of the tower is:',
  'टॉवर के पाद से 30 मीटर दूर जमीन पर एक बिंदु से टॉवर के शीर्ष का उन्नयन कोण 30° है। टॉवर की ऊंचाई क्या है?',
  '10√3 m', '15√3 m', '30 m', '20√3 m',
  '10√3 मीटर', '15√3 मीटर', '30 मीटर', '20√3 मीटर',
  'a',
  'tan 30° = h / 30 => 1/√3 = h / 30 => h = 30 / √3 = 10√3 m.',
  'tan 30° = h / 30 => h = 30 / √3 = 10√3 मीटर।'
),
(
  'ssc-cgl-2026-mock-02', 58, 'PART-3', 'Quantitative Aptitude',
  'A solid metallic sphere of radius 8 cm is melted and recast into smaller spheres of radius 2 cm. How many smaller spheres can be formed?',
  '8 सेमी त्रिज्या वाले एक ठोस धातु के गोले को पिघलाकर 2 सेमी त्रिज्या के छोटे गोले बनाए जाते हैं। कितने छोटे गोले बनेंगे?',
  '16', '32', '64', '128',
  '16', '32', '64', '128',
  'c',
  'Number of spheres = Volume_large / Volume_small = (R / r)³ = (8 / 2)³ = 4³ = 64.',
  'गोलों की संख्या = (R / r)³ = (8 / 2)³ = 4³ = 64।'
),
(
  'ssc-cgl-2026-mock-02', 59, 'PART-3', 'Quantitative Aptitude',
  'If sin A + cos A = 7/5, what is the value of sin A × cos A?',
  'यदि sin A + cos A = 7/5 है, तो sin A × cos A का मान क्या है?',
  '12/25', '24/25', '6/25', '18/25',
  '12/25', '24/25', '6/25', '18/25',
  'a',
  '(sin A + cos A)² = (7/5)² => sin²A + cos²A + 2sinA cosA = 49/25 => 1 + 2sinA cosA = 49/25 => 2sinA cosA = 24/25 => sinA cosA = 12/25.',
  '(sin A + cos A)² = 49/25 => 1 + 2 sin A cos A = 49/25 => 2 sin A cos A = 24/25 => sin A cos A = 12/25।'
),
(
  'ssc-cgl-2026-mock-02', 60, 'PART-3', 'Quantitative Aptitude',
  'From an external point P, tangents PA and PB are drawn to a circle with center O. If ∠APB = 50°, then ∠OAB is equal to:',
  'एक बाहरी बिंदु P से, केंद्र O वाले वृत्त पर दो स्पर्श रेखाएं PA और PB खींची जाती हैं। यदि ∠APB = 50° है, तो ∠OAB का मान क्या है?',
  '25°', '40°', '50°', '65°',
  '25°', '40°', '50°', '65°',
  'a',
  'PA = PB => ΔPAB is isosceles. ∠PAB = (180° - 50°)/2 = 65°. Radius OA ⊥ PA => ∠OAP = 90°. Thus ∠OAB = 90° - 65° = 25°. (Also formula: ∠OAB = ∠APB / 2 = 50° / 2 = 25°).',
  '∠OAB = ∠APB / 2 = 50° / 2 = 25°।'
),
(
  'ssc-cgl-2026-mock-02', 61, 'PART-3', 'Quantitative Aptitude',
  'In ΔABC, the lengths of sides are 6 cm, 8 cm, and 10 cm. What is the radius of its circumcircle?',
  'ΔABC में भुजाओं की लंबाई 6 सेमी, 8 सेमी और 10 सेमी है। इसके परिवृत्त की त्रिज्या क्या है?',
  '3 cm', '4 cm', '5 cm', '6 cm',
  '3 सेमी', '4 सेमी', '5 सेमी', '6 सेमी',
  'c',
  '6, 8, 10 forms a right-angled triangle (6² + 8² = 10²). The circumcenter of a right triangle is at the midpoint of hypotenuse. Circumradius R = Hypotenuse / 2 = 10 / 2 = 5 cm.',
  'यह एक समकोण त्रिभुज है (6² + 8² = 10²)। परिवृत्त की त्रिज्या = कर्ण / 2 = 10 / 2 = 5 सेमी।'
),
(
  'ssc-cgl-2026-mock-02', 62, 'PART-3', 'Quantitative Aptitude',
  'What is the slope of a line perpendicular to the line equation 3x - 4y = 12?',
  'रेखा 3x - 4y = 12 के लंबवत रेखा का ढाल (slope) क्या होगा?',
  '3/4', '-3/4', '4/3', '-4/3',
  '3/4', '-3/4', '4/3', '-4/3',
  'd',
  'Rewriting: 4y = 3x - 12 => y = (3/4)x - 3. Slope m₁ = 3/4. For perpendicular line: m₁ * m₂ = -1 => m₂ = -4/3.',
  'रेखा का ढाल m₁ = 3/4। लंबवत रेखा का ढाल m₂ = -1 / (3/4) = -4/3।'
),
(
  'ssc-cgl-2026-mock-02', 63, 'PART-3', 'Quantitative Aptitude',
  'What is the maximum value of the expression 3 sin θ + 4 cos θ?',
  'व्यंजक 3 sin θ + 4 cos θ का अधिकतम मान क्या है?',
  '1', '5', '7', '12',
  '1', '5', '7', '12',
  'b',
  'Maximum value of a sin θ + b cos θ = √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = 5.',
  'a sin θ + b cos θ का अधिकतम मान = √(a² + b²) = √(3² + 4²) = 5।'
),
(
  'ssc-cgl-2026-mock-02', 64, 'PART-3', 'Quantitative Aptitude',
  'If x + 1/x = 5, find the value of x³ + 1/x³.',
  'यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान ज्ञात कीजिए।',
  '110', '125', '140', '115',
  '110', '125', '140', '115',
  'a',
  'x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x) = 5³ - 3(5) = 125 - 15 = 110.',
  'x³ + 1/x³ = 5³ - 3(5) = 125 - 15 = 110।'
),
(
  'ssc-cgl-2026-mock-02', 65, 'PART-3', 'Quantitative Aptitude',
  'The difference between the Compound Interest and Simple Interest on a sum for 3 years at 10% per annum is ₹31. What is the principal sum?',
  'किसी धनराशि पर 10% वार्षिक दर से 3 वर्ष के चक्रवृद्धि ब्याज और साधारण ब्याज का अंतर ₹31 है। मूलधन क्या है?',
  '₹1,000', '₹1,500', '₹2,000', '₹3,100',
  '₹1,000', '₹1,500', '₹2,000', '₹3,100',
  'a',
  '3-year difference formula: D = P * (R/100)² * (300 + R)/100 => 31 = P * (10/100)² * (310/100) => 31 = P * 0.01 * 3.1 => 31 = P * 0.031 => P = ₹1,000.',
  '3 वर्ष का अंतर = P * (R/100)² * (300 + R)/100 => 31 = P * (1/100) * (31/10) => P = ₹1,000।'
),
(
  'ssc-cgl-2026-mock-02', 66, 'PART-3', 'Quantitative Aptitude',
  'A dishonest dealer professes to sell his goods at cost price but uses a false weight of 800 grams instead of a 1 kilogram weight. What is his profit percentage?',
  'एक बेईमान व्यापारी क्रय मूल्य पर माल बेचने का दावा करता है लेकिन 1 किग्रा के स्थान पर 800 ग्राम के गलत बाट का उपयोग करता है। उसका लाभ प्रतिशत क्या है?',
  '20%', '25%', '15%', '30%',
  '20%', '25%', '15%', '30%',
  'b',
  'Profit% = [Error / (True Weight - Error)] * 100 = [200 / 800] * 100 = (1/4) * 100 = 25%.',
  'लाभ% = [त्रुटि / (सत्य मान - त्रुटि)] * 100 = [200 / 800] * 100 = 25%।'
),
(
  'ssc-cgl-2026-mock-02', 67, 'PART-3', 'Quantitative Aptitude',
  'A train 150 m long is running at a speed of 90 km/h. How long will it take to cross a railway bridge 300 m long?',
  '150 मीटर लंबी एक ट्रेन 90 किमी/घंटा की गति से चल रही है। 300 मीटर लंबे रेलवे पुल को पार करने में इसे कितना समय लगेगा?',
  '12 seconds', '15 seconds', '18 seconds', '20 seconds',
  '12 सेकंड', '15 सेकंड', '18 सेकंड', '20 सेकंड',
  'c',
  'Total distance = 150 + 300 = 450 m. Speed = 90 * (5/18) = 25 m/s. Time = 450 / 25 = 18 seconds.',
  'कुल दूरी = 150 + 300 = 450 मीटर। चाल = 90 * (5/18) = 25 मी/से। समय = 450 / 25 = 18 सेकंड।'
),
(
  'ssc-cgl-2026-mock-02', 68, 'PART-3', 'Quantitative Aptitude',
  'ABCD is a cyclic quadrilateral such that ∠A = (4x + 20)° and opposite angle ∠C = (3x - 15)°. Find the value of x.',
  'ABCD एक चक्रीय चतुर्भुज है जिसमें ∠A = (4x + 20)° और सम्मुख कोण ∠C = (3x - 15)° है। x का मान ज्ञात कीजिए।',
  '25', '30', '35', '40',
  '25', '30', '35', '40',
  'a',
  'Opposite angles of a cyclic quadrilateral sum to 180°: (4x + 20) + (3x - 15) = 180 => 7x + 5 = 180 => 7x = 175 => x = 25.',
  'चक्रीय चतुर्भुज के सम्मुख कोणों का योग 180° होता है: 7x + 5 = 180 => 7x = 175 => x = 25।'
),
(
  'ssc-cgl-2026-mock-02', 69, 'PART-3', 'Quantitative Aptitude',
  'A and B can do a piece of work in 12 days and 18 days respectively. If they work on alternate days beginning with A, in how many days will the work be completed?',
  'A और B एक कार्य को क्रमशः 12 दिन और 18 दिन में कर सकते हैं। यदि वे A से शुरू करके एकांतर दिनों में कार्य करते हैं, तो कार्य कितने दिनों में पूरा होगा?',
  '14 days', '14.5 days', '14.33 days', '15 days',
  '14 दिन', '14.5 दिन', '14.33 दिन (14 1/3)', '15 दिन',
  'c',
  'Total work = 36 units. Rate A = 3, Rate B = 2. A 2-day cycle produces 5 units. In 7 cycles (14 days), 35 units are done. Remaining 1 unit is done by A on Day 15 in 1/3 day. Total = 14 1/3 ≈ 14.33 days.',
  'कुल कार्य = 36। 2 दिन में कार्य = 5 इकाइयाँ। 14 दिन में 35 इकाइयाँ। शेष 1 इकाई A द्वारा 1/3 दिन में की जाएगी। कुल समय = 14.33 दिन।'
),
(
  'ssc-cgl-2026-mock-02', 70, 'PART-3', 'Quantitative Aptitude',
  'Find the remainder when 17²⁰⁰ is divided by 18.',
  '17²⁰⁰ को 18 से विभाजित करने पर शेषफल ज्ञात कीजिए।',
  '1', '17', '16', '0',
  '1', '17', '16', '0',
  'a',
  '17 ≡ -1 (mod 18). Therefore, 17²⁰⁰ ≡ (-1)²⁰⁰ ≡ 1 (mod 18). The remainder is 1.',
  '17 = 18 - 1 => (-1)²⁰⁰ = 1। अतः शेषफल 1 होगा।'
),
(
  'ssc-cgl-2026-mock-02', 71, 'PART-3', 'Quantitative Aptitude',
  'The ratio of the volumes of two right circular cones is 2 : 3 and the ratio of their base radii is 1 : 2. What is the ratio of their heights?',
  'दो लंब वृत्तीय शंकुओं के आयतन का अनुपात 2 : 3 है और उनकी आधार त्रिज्याओं का अनुपात 1 : 2 है। उनकी ऊँचाइयों का अनुपात क्या है?',
  '8 : 3', '4 : 3', '3 : 8', '3 : 4',
  '8 : 3', '4 : 3', '3 : 8', '3 : 4',
  'a',
  'V₁/V₂ = (r₁/r₂)² * (h₁/h₂) => 2/3 = (1/2)² * (h₁/h₂) => 2/3 = (1/4) * (h₁/h₂) => h₁/h₂ = (2/3) * 4 = 8/3.',
  'आयतन = (1/3)πr²h => 2/3 = (1/4) * (h₁/h₂) => h₁/h₂ = 8/3।'
),
(
  'ssc-cgl-2026-mock-02', 72, 'PART-3', 'Quantitative Aptitude',
  'In an election between two candidates, one candidate secured 55% of the total valid votes. 20% of the total votes polled were declared invalid. If the total number of votes polled was 7,500, what was the number of valid votes secured by the other candidate?',
  'दो उम्मीदवारों के चुनाव में एक को कुल वैध मतों का 55% मिला। 20% मत अमान्य घोषित हुए। यदि कुल 7,500 मत पड़े, तो दूसरे उम्मीदवार को कितने वैध मत मिले?',
  '2,700', '2,900', '3,000', '3,100',
  '2,700', '2,900', '3,000', '3,100',
  'a',
  'Valid votes = 80% of 7500 = 6000. Other candidate secured 100% - 55% = 45% of valid votes = 0.45 * 6000 = 2,700 votes.',
  'वैध मत = 7500 का 80% = 6000। दूसरे उम्मीदवार के मत = 6000 का 45% = 2,700।'
),
(
  'ssc-cgl-2026-mock-02', 73, 'PART-3', 'Quantitative Aptitude',
  'A batsman has a certain average of runs for 11 innings. In the 12th inning, he makes a score of 90 runs, thereby increasing his average by 5 runs. What is his average after the 12th inning?',
  'एक बल्लेबाज का 11 पारियों में एक निश्चित औसत है। 12वीं पारी में वह 90 रन बनाता है, जिससे उसका औसत 5 रन बढ़ जाता है। 12वीं पारी के बाद उसका नया औसत क्या है?',
  '30', '35', '40', '45',
  '30', '35', '40', '45',
  'b',
  'Let previous average be x. Total runs = 11x. In 12th inning: (11x + 90) / 12 = x + 5 => 11x + 90 = 12x + 60 => x = 30. New average = 30 + 5 = 35.',
  'पुराना औसत = 90 - (12 * 5) = 30। 12वीं पारी के बाद नया औसत = 30 + 5 = 35।'
),
(
  'ssc-cgl-2026-mock-02', 74, 'PART-3', 'Quantitative Aptitude',
  'A pie chart represents the monthly expenses of a family. If the total monthly income is ₹48,000 and the central angle of the sector representing food expenses is 120°, what is the expenditure on food?',
  'एक पाई चार्ट एक परिवार के मासिक खर्च को दर्शाता है। यदि कुल आय ₹48,000 है और भोजन के क्षेत्र का केंद्रीय कोण 120° है, तो भोजन पर खर्च कितना है?',
  '₹12,000', '₹14,000', '₹16,000', '₹18,000',
  '₹12,000', '₹14,000', '₹16,000', '₹18,000',
  'c',
  'Fraction = 120° / 360° = 1/3. Expenditure = (1/3) * ₹48,000 = ₹16,000.',
  'भोजन पर व्यय = (120° / 360°) * 48,000 = 1/3 * 48,000 = ₹16,000।'
),
(
  'ssc-cgl-2026-mock-02', 75, 'PART-3', 'Quantitative Aptitude',
  'If x = 3 + 2√2, find the value of (√x - 1/√x).',
  'यदि x = 3 + 2√2 है, तो (√x - 1/√x) का मान ज्ञात कीजिए।',
  '1', '2', '2√2', '3√2',
  '1', '2', '2√2', '3√2',
  'b',
  '√x = √(3 + 2√2) = √(√2 + 1)² = √2 + 1. Then 1/√x = 1/(√2 + 1) = √2 - 1. Thus, √x - 1/√x = (√2 + 1) - (√2 - 1) = 2.',
  '√x = √2 + 1 तथा 1/√x = √2 - 1। अतः √x - 1/√x = (√2 + 1) - (√2 - 1) = 2।'
);
