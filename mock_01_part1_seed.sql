-- =========================================================================
-- SSC CGL 2026 MOCK TEST 01: PART-1 - General Intelligence & Reasoning (Q1 - Q25)
-- =========================================================================

INSERT INTO public.mock_tests (id, title, duration_minutes, maximum_marks, is_active)
VALUES ('ssc-cgl-2026-mock-01', 'SSC CGL 2026: Full Mock Test 01 (4 Parts x 25 Qs â€¢ 60 Mins)', 60, 200, true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.mock_test_questions (
  test_id, question_number, section_name, section_title,
  question_text, question_text_hi,
  option_a, option_b, option_c, option_d,
  option_a_hi, option_b_hi, option_c_hi, option_d_hi,
  correct_option, solution_text, solution_text_hi
) VALUES
(
  'ssc-cgl-2026-mock-01', 1, 'PART-1', 'General Intelligence & Reasoning',
  'What comes next in the series: 4, 6, 16, 54, ?',
  'श्रृंखला में अगला पद क्या होगा: 4, 6, 16, 54, ?',
  '180', '224', '218', '162',
  '180', '224', '218', '162',
  'b',
  'Sequential multiplication with ascending even additions: 4*1 + 2 = 6, 6*2 + 4 = 16, 16*3 + 6 = 54, 54*4 + 8 = 224.',
  'क्रमिक गुणा और सम संख्याओं का जोड़: 4*1 + 2 = 6, 6*2 + 4 = 16, 16*3 + 6 = 54, 54*4 + 8 = 224।'
),
(
  'ssc-cgl-2026-mock-01', 2, 'PART-1', 'General Intelligence & Reasoning',
  'If "ROBOT" is coded as "TQEQV", how is "WEEDS" coded?',
  'यदि "ROBOT" को "TQEQV" के रूप में कूटबद्ध किया जाता है, तो "WEEDS" को कैसे कूटबद्ध किया जाएगा?',
  'YGGDU', 'YGGFT', 'YGGFU', 'XFFEU',
  'YGGDU', 'YGGFT', 'YGGFU', 'XFFEU',
  'c',
  'Each letter is shifted forward by +2 positions: W(+2)=Y, E(+2)=G, E(+2)=G, D(+2)=F, S(+2)=U => YGGFU.',
  'प्रत्येक अक्षर में +2 की वृद्धि: W(+2)=Y, E(+2)=G, E(+2)=G, D(+2)=F, S(+2)=U => YGGFU।'
),
(
  'ssc-cgl-2026-mock-01', 3, 'PART-1', 'General Intelligence & Reasoning',
  'A is the mother of B. C is the son of D. E is the brother of A. B is the daughter of D. How is E related to C?',
  'A, B की माता है। C, D का पुत्र है। E, A का भाई है। B, D की पुत्री है। E का C से क्या संबंध है?',
  'Uncle', 'Father', 'Brother', 'Cousin',
  'मामा (Uncle)', 'पिता', 'भाई', 'चचेरा भाई',
  'a',
  'B is daughter of A and D => A (female) and D (male) are married. C is D''s son => C is brother of B and son of A. E is A''s brother => E is the maternal uncle of C.',
  'A और D पति-पत्नी हैं। C, A और D का पुत्र है। E, A का भाई है => E, C का मामा है।'
),
(
  'ssc-cgl-2026-mock-01', 4, 'PART-1', 'General Intelligence & Reasoning',
  'Which two signs should be interchanged to make the given equation correct: 42 ÷ 7 + 5 × 3 - 4 = 29?',
  'दिए गए समीकरण को सही बनाने के लिए किन दो चिन्हों को आपस में बदलना चाहिए: 42 ÷ 7 + 5 × 3 - 4 = 29?',
  '+ and ×', '÷ and +', '× and -', '÷ and -',
  '+ और ×', '÷ और +', '× और -', '÷ और -',
  'a',
  'Interchanging + and ×: 42 ÷ 7 × 5 + 3 - 4 = 6 × 5 + 3 - 4 = 30 + 3 - 4 = 29. LHS = RHS.',
  '+ और × को आपस में बदलने पर: 42 ÷ 7 × 5 + 3 - 4 = 6 × 5 + 3 - 4 = 30 + 3 - 4 = 29।'
),
(
  'ssc-cgl-2026-mock-01', 5, 'PART-1', 'General Intelligence & Reasoning',
  'Statements: H < I = J ≤ K, L ≥ M > K. Conclusions: I. L > I  II. M > H.',
  'कथन: H < I = J ≤ K, L ≥ M > K. निष्कर्ष: I. L > I  II. M > H.',
  'Only I follows', 'Only II follows', 'Both follow', 'Neither follows',
  'केवल निष्कर्ष I अनुसरण करता है', 'केवल निष्कर्ष II अनुसरण करता है', 'दोनों निष्कर्ष अनुसरण करते हैं', 'कोई अनुसरण नहीं करता',
  'c',
  'Combined chain: H < I = J ≤ K < M ≤ L. For I: L ≥ M > K ≥ I => L > I (True). For II: M > K ≥ I > H => M > H (True). Both follow.',
  'संयुक्त श्रृंखला: H < I = J ≤ K < M ≤ L। I: L > I सत्य है। II: M > H सत्य है। दोनों अनुसरण करते हैं।'
),
(
  'ssc-cgl-2026-mock-01', 6, 'PART-1', 'General Intelligence & Reasoning',
  'Select the odd word out:',
  'विषम शब्द का चयन कीजिए:',
  'Anthracite', 'Bituminous', 'Lignite', 'Bauxite',
  'एंथ्रेसाइट (Anthracite)', 'बिटुमिनस (Bituminous)', 'लिग्नाइट (Lignite)', 'बॉक्साइट (Bauxite)',
  'd',
  'Anthracite, Bituminous, and Lignite are all grades of coal. Bauxite is an ore of aluminum.',
  'एंथ्रेसाइट, बिटुमिनस और लिग्नाइट कोयले के प्रकार हैं, जबकि बॉक्साइट एल्यूमीनियम का अयस्क है।'
),
(
  'ssc-cgl-2026-mock-01', 7, 'PART-1', 'General Intelligence & Reasoning',
  'Find the missing number in the analogy: 12 : 144 :: 15 : ?',
  'सादृश्यता में लुप्त संख्या ज्ञात कीजिए: 12 : 144 :: 15 : ?',
  '225', '210', '240', '250',
  '225', '210', '240', '250',
  'a',
  '12^2 = 144 => 15^2 = 225.',
  '12 का वर्ग = 144 => 15 का वर्ग = 225।'
),
(
  'ssc-cgl-2026-mock-01', 8, 'PART-1', 'General Intelligence & Reasoning',
  'Statement: "Due to heavy fog, all flights from Delhi are delayed." Assumptions: I. Passengers prefer flights over trains in winter. II. Fog severely impacts aviation visibility and safety.',
  'कथन: "घने कोहरे के कारण दिल्ली से सभी उड़ानें विलंबित हैं।" पूर्वधारणाएं: I. सर्दियों में यात्री ट्रेनों की तुलना में उड़ानों को प्राथमिकता देते हैं। II. कोहरा विमानन दृश्यता और सुरक्षा को गंभीर रूप से प्रभावित करता है।',
  'Only I is implicit', 'Only II is implicit', 'Both are implicit', 'Neither is implicit',
  'केवल I अंतर्निहित है', 'केवल II अंतर्निहित है', 'दोनों अंतर्निहित हैं', 'कोई अंतर्निहित नहीं है',
  'b',
  'The statement links fog directly to flight delays due to visibility/safety issues (II). It makes no mention of passenger travel preferences (I).',
  'कथन केवल कोहरे और उड़ान में देरी के बीच सीधा संबंध दर्शाता है। अतः केवल पूर्वधारणा II अंतर्निहित है।'
),
(
  'ssc-cgl-2026-mock-01', 9, 'PART-1', 'General Intelligence & Reasoning',
  'Statements: Some farmers are engineers. All engineers are innovators. Conclusions: I. Some farmers are innovators. II. All innovators are engineers.',
  'कथन: कुछ किसान इंजीनियर हैं। सभी इंजीनियर नवप्रवर्तक हैं। निष्कर्ष: I. कुछ किसान नवप्रवर्तक हैं। II. सभी नवप्रवर्तक इंजीनियर हैं।',
  'Only I follows', 'Only II follows', 'Both follow', 'Neither follows',
  'केवल निष्कर्ष I अनुसरण करता है', 'केवल निष्कर्ष II अनुसरण करता है', 'दोनों अनुसरण करते हैं', 'कोई अनुसरण नहीं करता',
  'a',
  'Farmers intersecting Engineers are inside Innovators => Some farmers are innovators (I is True). The converse (All innovators are engineers) is not necessarily true (II is False).',
  'इंजीनियर किसान नवप्रवर्तक के दायरे में हैं => कुछ किसान नवप्रवर्तक हैं (I सत्य है)। केवल निष्कर्ष I अनुसरण करता है।'
),
(
  'ssc-cgl-2026-mock-01', 10, 'PART-1', 'General Intelligence & Reasoning',
  'At 3:40, what is the acute angle between the minute and hour hands of a clock?',
  '3:40 बजे घड़ी की मिनट और घंटे की सुइयों के बीच न्यून कोण क्या होगा?',
  '120°', '130°', '140°', '150°',
  '120°', '130°', '140°', '150°',
  'b',
  'θ = |30H - 5.5M| = |30(3) - 5.5(40)| = |90 - 220| = 130°.',
  'कोण = |30H - 5.5M| = |30(3) - 5.5(40)| = |90 - 220| = 130°।'
),
(
  'ssc-cgl-2026-mock-01', 11, 'PART-1', 'General Intelligence & Reasoning',
  'Pointing to a man, a woman said, "His mother is the only daughter of my mother." How is the woman related to the man?',
  'एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, "उसकी माँ मेरी माँ की इकलौती पुत्री है।" वह महिला उस पुरुष से किस प्रकार संबंधित है?',
  'Aunt', 'Sister', 'Mother', 'Grandmother',
  'चाची / मौसी', 'बहन', 'माता', 'दादी / नानी',
  'c',
  '"The only daughter of my mother" is the woman herself. Therefore, the woman is the man''s mother.',
  '"मेरी माँ की इकलौती पुत्री" स्वयं वह महिला है। अतः वह महिला उस पुरुष की माता है।'
),
(
  'ssc-cgl-2026-mock-01', 12, 'PART-1', 'General Intelligence & Reasoning',
  'Arrange in logical and meaningful order: 1. Seed  2. Plant  3. Fruit  4. Harvest  5. Flower',
  'तार्किक और सार्थक क्रम में व्यवस्थित कीजिए: 1. बीज  2. पौधा  3. फल  4. कटाई  5. फूल',
  '1, 2, 5, 3, 4', '1, 3, 2, 5, 4', '2, 1, 5, 3, 4', '1, 2, 3, 5, 4',
  '1, 2, 5, 3, 4', '1, 3, 2, 5, 4', '2, 1, 5, 3, 4', '1, 2, 3, 5, 4',
  'a',
  'Chronological biological lifecycle: Seed (1) -> Plant (2) -> Flower (5) -> Fruit (3) -> Harvest (4).',
  'प्राकृतिक विकास चक्र: बीज (1) -> पौधा (2) -> फूल (5) -> फल (3) -> कटाई (4)।'
),
(
  'ssc-cgl-2026-mock-01', 13, 'PART-1', 'General Intelligence & Reasoning',
  'Find the exact address match for: "Sector 14, Plot 99, Dwarka, Delhi-110075"',
  'दिए गए पते का सटीक मिलान ज्ञात कीजिए: "Sector 14, Plot 99, Dwarka, Delhi-110075"',
  'Sector 14, Plot 99, Dwaraka, Delhi-110075', 'Sector 14, Plot 99, Dwarka, Delhi-110075', 'Sector 14, Plot 99, Dwarka, Dehli-110075', 'Sector 14, Plt 99, Dwarka, Delhi-110075',
  'Sector 14, Plot 99, Dwaraka, Delhi-110075', 'Sector 14, Plot 99, Dwarka, Delhi-110075', 'Sector 14, Plot 99, Dwarka, Dehli-110075', 'Sector 14, Plt 99, Dwarka, Delhi-110075',
  'b',
  'Option B is an exact character-by-character match. Option A misspells ''Dwaraka'', C misspells ''Dehli'', D abbreviates ''Plt''.',
  'विकल्प B पूरी तरह से वर्ण-दर-वर्ण सटीक मिलान है।'
),
(
  'ssc-cgl-2026-mock-01', 14, 'PART-1', 'General Intelligence & Reasoning',
  'What comes next in the series: 2, 12, 36, 80, ?',
  'श्रृंखला में अगला पद क्या होगा: 2, 12, 36, 80, ?',
  '120', '144', '150', '162',
  '120', '144', '150', '162',
  'c',
  'Pattern: n² + n³. 1² + 1³ = 2; 2² + 2³ = 12; 3² + 3³ = 36; 4² + 4³ = 80; 5² + 5³ = 25 + 125 = 150.',
  'पैटर्न: n² + n³। 1+1=2; 4+8=12; 9+27=36; 16+64=80; 25+125 = 150।'
),
(
  'ssc-cgl-2026-mock-01', 15, 'PART-1', 'General Intelligence & Reasoning',
  'In a certain code language, "DOCTOR" is written as "FQEVQT". How is "PATIENT" written in that code language?',
  'एक निश्चित कूट भाषा में "DOCTOR" को "FQEVQT" लिखा जाता है। उसी कूट भाषा में "PATIENT" को क्या लिखा जाएगा?',
  'RCVKGPV', 'RCVKGPU', 'RDWLHQV', 'QBWJFPV',
  'RCVKGPV', 'RCVKGPU', 'RDWLHQV', 'QBWJFPV',
  'a',
  'Each letter is shifted forward by +2: D(+2)=F, O(+2)=Q, C(+2)=E, T(+2)=V, O(+2)=Q, R(+2)=T. For PATIENT: P(+2)=R, A(+2)=C, T(+2)=V, I(+2)=K, E(+2)=G, N(+2)=P, T(+2)=V => RCVKGPV.',
  'प्रत्येक अक्षर में +2 जोड़ा गया है: P(+2)=R, A(+2)=C, T(+2)=V, I(+2)=K, E(+2)=G, N(+2)=P, T(+2)=V => RCVKGPV।'
),
(
  'ssc-cgl-2026-mock-01', 16, 'PART-1', 'General Intelligence & Reasoning',
  'A is the father of B. C is the brother of A. F is the sister of B. If M is the father of A, then establish the relationship between F and C.',
  'A, B का पिता है। C, A का भाई है। F, B की बहन है। यदि M, A का पिता है, तो F और C के बीच क्या संबंध है?',
  'Daughter and Father', 'Niece and Uncle', 'Sister and Brother', 'Granddaughter and Grandfather',
  'पुत्री और पिता', 'भतीजी और चाचा (Niece and Uncle)', 'बहन और भाई', 'पोती और दादा',
  'b',
  'A is the father of B and F. C is the brother of A. Therefore, C is the paternal uncle of F, and F is the niece of C.',
  'A, F का पिता है और C, A का भाई है। अतः C, F का चाचा है और F, C की भतीजी है।'
),
(
  'ssc-cgl-2026-mock-01', 17, 'PART-1', 'General Intelligence & Reasoning',
  'Statements: All planets are stars. No star is a moon. Conclusions: I. Some moons are planets. II. No planet is a moon.',
  'कथन: सभी ग्रह तारे हैं। कोई तारा चंद्रमा नहीं है। निष्कर्ष: I. कुछ चंद्रमा ग्रह हैं। II. कोई ग्रह चंद्रमा नहीं है।',
  'Only I follows', 'Only II follows', 'Both follow', 'Neither follows',
  'केवल निष्कर्ष I अनुसरण करता है', 'केवल निष्कर्ष II अनुसरण करता है', 'दोनों अनुसरण करते हैं', 'कोई अनुसरण नहीं करता',
  'b',
  'Planets are entirely inside Stars. Stars have zero overlap with Moons. Therefore, Planets have zero overlap with Moons. Conclusion II is definitively true.',
  'सभी ग्रह तारों के भीतर हैं और कोई तारा चंद्रमा नहीं है => कोई ग्रह भी चंद्रमा नहीं हो सकता। केवल निष्कर्ष II अनुसरण करता है।'
),
(
  'ssc-cgl-2026-mock-01', 18, 'PART-1', 'General Intelligence & Reasoning',
  'If 1st January 2024 was a Monday, what day of the week will be 31st December 2024?',
  'यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को सप्ताह का कौन सा दिन होगा?',
  'Monday', 'Tuesday', 'Wednesday', 'Sunday',
  'सोमवार', 'मंगलवार', 'बुधवार', 'रविवार',
  'b',
  '2024 is a leap year (366 days). In a leap year, the last day of the year is one day ahead of the first day: Monday + 1 day = Tuesday.',
  '2024 एक लीप वर्ष है (366 दिन)। लीप वर्ष में वर्ष का अंतिम दिन पहले दिन से 1 दिन आगे होता है: सोमवार + 1 = मंगलवार।'
),
(
  'ssc-cgl-2026-mock-01', 19, 'PART-1', 'General Intelligence & Reasoning',
  'A clock shows 8:20. What is the reflex angle between the hour and minute hands?',
  'एक घड़ी में 8:20 बजे हैं। घंटे और मिनट की सुइयों के बीच वृहत कोण (Reflex Angle) क्या होगा?',
  '130°', '140°', '230°', '240°',
  '130°', '140°', '230°', '240°',
  'c',
  'Internal angle θ = |30(8) - 5.5(20)| = |240 - 110| = 130°. Reflex angle = 360° - 130° = 230°.',
  'आंतरिक कोण = |30(8) - 5.5(20)| = 130°। वृहत कोण = 360° - 130° = 230°।'
),
(
  'ssc-cgl-2026-mock-01', 20, 'PART-1', 'General Intelligence & Reasoning',
  'Pointing to a photograph, a man says, "The lady in the photograph is my nephew''s maternal grandmother." How is the lady in the photograph related to the man''s sister who has no other sister?',
  'एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, "तस्वीर में दिख रही महिला मेरे भांजे की नानी है।" वह महिला उस व्यक्ति की बहन (जिसकी कोई अन्य बहन नहीं है) से किस प्रकार संबंधित है?',
  'Mother', 'Mother-in-law', 'Aunt', 'Sister-in-law',
  'माता (Mother)', 'सास', 'मौसी / चाची', 'भाभी',
  'a',
  'The man''s nephew is his sister''s son. The nephew''s maternal grandmother is the mother of the nephew''s mother (the man''s sister). Thus, the lady is the mother of the sister.',
  'भांजे की नानी = बहन की माता। अतः वह महिला उसकी बहन की माँ है।'
),
(
  'ssc-cgl-2026-mock-01', 21, 'PART-1', 'General Intelligence & Reasoning',
  'Select the related number: 68 : 130 :: 222 : ?',
  'संबंधित संख्या का चयन कीजिए: 68 : 130 :: 222 : ?',
  '345', '350', '355', '360',
  '345', '350', '355', '360',
  'b',
  'Pattern: n³ + n. 4³ + 4 = 68; 5³ + 5 = 130; 6³ + 6 = 222; 7³ + 7 = 343 + 7 = 350.',
  'पैटर्न: n³ + n। 4³+4=68; 5³+5=130; 6³+6=222; 7³+7 = 343 + 7 = 350।'
),
(
  'ssc-cgl-2026-mock-01', 22, 'PART-1', 'General Intelligence & Reasoning',
  'Six persons—A, B, C, D, E, and F—are sitting around a circular table facing the center. B is sitting between A and C. E is sitting between D and F. D is sitting to the immediate left of A. Who is sitting opposite to B?',
  'छह व्यक्ति—A, B, C, D, E और F—एक गोलाकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। B, A और C के बीच बैठा है। E, D और F के बीच बैठा है। D, A के ठीक बाईं ओर बैठा है। B के विपरीत कौन बैठा है?',
  'D', 'E', 'F', 'C',
  'D', 'E', 'F', 'C',
  'b',
  'Arranging positions clockwise: Seat 1: A, Seat 2: D (immediate left of A), Seat 3: E, Seat 4: F (E between D and F), Seat 5: C, Seat 6: B (between A and C). The person opposite to B (seat 6) is E (seat 3).',
  'क्रम: A के बाईं ओर D, फिर E, F, C, B। B के ठीक विपरीत E बैठा है।'
),
(
  'ssc-cgl-2026-mock-01', 23, 'PART-1', 'General Intelligence & Reasoning',
  'Select the odd pair out:',
  'विषम युग्म का चयन कीजिए:',
  '144, 12', '324, 18', '441, 21', '539, 23',
  '144, 12', '324, 18', '441, 21', '539, 23',
  'd',
  '12² = 144, 18² = 324, 21² = 441. But 23² = 529, not 539.',
  '12²=144, 18²=324, 21²=441। परंतु 23² = 529 होता है (539 नहीं)।'
),
(
  'ssc-cgl-2026-mock-01', 24, 'PART-1', 'General Intelligence & Reasoning',
  'If ''A + B'' means A is the brother of B; ''A - B'' means A is the sister of B; ''A × B'' means A is the father of B. Which of the following means that C is the son of M?',
  'यदि ''A + B'' का अर्थ है A, B का भाई है; ''A - B'' का अर्थ है A, B की बहन है; ''A × B'' का अर्थ है A, B का पिता है। निम्नलिखित में से किसका अर्थ है कि C, M का पुत्र है?',
  'M - N × C + F', 'F - C + N × M', 'M × N - C + F', 'M × C + N - F',
  'M - N × C + F', 'F - C + N × M', 'M × N - C + F', 'M × C + N - F',
  'd',
  'In (d): M × C => M is father of C. C + N => C is brother of N (so C is male). Thus, C is the son of M.',
  'विकल्प (d) में: M, C का पिता है और C, N का भाई है (अर्थात C पुरुष है)। अतः C, M का पुत्र है।'
),
(
  'ssc-cgl-2026-mock-01', 25, 'PART-1', 'General Intelligence & Reasoning',
  'A man walks 5 km towards South, takes a right turn and walks 3 km. He then takes a left turn and walks 5 km. In which direction is he now from the starting point?',
  'एक व्यक्ति दक्षिण की ओर 5 किमी चलता है, दाईं ओर मुड़कर 3 किमी चलता है। फिर वह बाईं ओर मुड़कर 5 किमी चलता है। अब वह प्रारंभिक बिंदु से किस दिशा में है?',
  'South', 'South-West', 'South-East', 'West',
  'दक्षिण', 'दक्षिण-पश्चिम (South-West)', 'दक्षिण-पूर्व', 'पश्चिम',
  'b',
  'Net displacement: 5 km South, 3 km West (right turn), 5 km South (left turn) = 10 km South and 3 km West => South-West direction.',
  'कुल विस्थापन: 10 किमी दक्षिण और 3 किमी पश्चिम => दक्षिण-पश्चिम दिशा।'
);
