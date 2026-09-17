-- =========================================================================
-- SSC CGL 2026: FULL MOCK TEST 02 (100 QUESTIONS BILINGUAL SEED)
-- Generated for NLP+ Exam Portal & Supabase Sync
-- Replaced Questions 4, 52, and 59 with error-free verified equivalents
-- =========================================================================

-- 1. Insert or Update Mock Test 02 in public.mock_tests
INSERT INTO public.mock_tests (
  id,
  title,
  subject_id,
  duration_minutes,
  maximum_marks,
  positive_marks,
  negative_marks,
  is_active
) VALUES (
  'ssc-cgl-2026-mock-02',
  'SSC CGL 2026: Full Mock Test 02',
  'full_mock',
  60,
  200,
  2.0,
  0.5,
  true
)
ON CONFLICT (id) DO UPDATE
SET title = EXCLUDED.title,
    duration_minutes = EXCLUDED.duration_minutes,
    maximum_marks = EXCLUDED.maximum_marks,
    positive_marks = EXCLUDED.positive_marks,
    negative_marks = EXCLUDED.negative_marks;

-- 2. Insert 100 Complete Questions into public.mock_test_questions
INSERT INTO public.mock_test_questions (
  test_id,
  question_number,
  section_name,
  section_title,
  question_text,
  question_text_hi,
  option_a,
  option_b,
  option_c,
  option_d,
  option_a_hi,
  option_b_hi,
  option_c_hi,
  option_d_hi,
  correct_option,
  solution_text,
  solution_text_hi
) VALUES
(
  'ssc-cgl-2026-mock-02', 1, 'Section I', 'General Intelligence and Reasoning',
  'What comes next in the series: 4, 6, 16, 54, ?',
  'श्रृंखला में अगला पद क्या होगा: 4, 6, 16, 54, ?',
  '180', '224', '218', '162',
  '180', '224', '218', '162',
  'b',
  'Sequential multiplication with ascending even additions: 4*1 + 2 = 6, 6*2 + 4 = 16, 16*3 + 6 = 54, 54*4 + 8 = 224.',
  'क्रमिक गुणा और सम संख्याओं का जोड़: 4*1 + 2 = 6, 6*2 + 4 = 16, 16*3 + 6 = 54, 54*4 + 8 = 224।'
),
(
  'ssc-cgl-2026-mock-02', 2, 'Section I', 'General Intelligence and Reasoning',
  'If "ROBOT" is coded as "TQEQV", how is "WEEDS" coded?',
  'यदि "ROBOT" को "TQEQV" के रूप में कूटबद्ध किया जाता है, तो "WEEDS" को कैसे कूटबद्ध किया जाएगा?',
  'YGGDU', 'YGGFT', 'YGGFU', 'XFFEU',
  'YGGDU', 'YGGFT', 'YGGFU', 'XFFEU',
  'c',
  'Each letter is shifted forward by +2 positions: W(+2)=Y, E(+2)=G, E(+2)=G, D(+2)=F, S(+2)=U => YGGFU.',
  'प्रत्येक अक्षर में +2 की वृद्धि: W(+2)=Y, E(+2)=G, E(+2)=G, D(+2)=F, S(+2)=U => YGGFU।'
),
(
  'ssc-cgl-2026-mock-02', 3, 'Section I', 'General Intelligence and Reasoning',
  'A is the mother of B. C is the son of D. E is the brother of A. B is the daughter of D. How is E related to C?',
  'A, B की माता है। C, D का पुत्र है। E, A का भाई है। B, D की पुत्री है। E का C से क्या संबंध है?',
  'Uncle', 'Father', 'Brother', 'Cousin',
  'मामा (Uncle)', 'पिता', 'भाई', 'चचेरा भाई',
  'a',
  'B is daughter of A and D => A (female) and D (male) are married. C is D''s son => C is brother of B and son of A. E is A''s brother => E is the maternal uncle of C.',
  'A और D पति-पत्नी हैं। C, A और D का पुत्र है। E, A का भाई है => E, C का मामा है।'
),
(
  'ssc-cgl-2026-mock-02', 4, 'Section I', 'General Intelligence and Reasoning',
  'Which two signs should be interchanged to make the given equation correct: 42 ÷ 7 + 5 × 3 - 4 = 29?',
  'दिए गए समीकरण को सही बनाने के लिए किन दो चिन्हों को आपस में बदलना चाहिए: 42 ÷ 7 + 5 × 3 - 4 = 29?',
  '+ and ×', '÷ and +', '× and -', '÷ and -',
  '+ और ×', '÷ और +', '× और -', '÷ और -',
  'a',
  'Interchanging + and ×: 42 ÷ 7 × 5 + 3 - 4 = 6 × 5 + 3 - 4 = 30 + 3 - 4 = 29. LHS = RHS.',
  '+ और × को आपस में बदलने पर: 42 ÷ 7 × 5 + 3 - 4 = 6 × 5 + 3 - 4 = 30 + 3 - 4 = 29।'
),
(
  'ssc-cgl-2026-mock-02', 5, 'Section I', 'General Intelligence and Reasoning',
  'Statements: H < I = J ≤ K, L ≥ M > K. Conclusions: I. L > I  II. M > H.',
  'कथन: H < I = J ≤ K, L ≥ M > K. निष्कर्ष: I. L > I  II. M > H.',
  'Only I follows', 'Only II follows', 'Both follow', 'Neither follows',
  'केवल निष्कर्ष I अनुसरण करता है', 'केवल निष्कर्ष II अनुसरण करता है', 'दोनों निष्कर्ष अनुसरण करते हैं', 'कोई अनुसरण नहीं करता',
  'c',
  'Combined chain: H < I = J ≤ K < M ≤ L. For I: L ≥ M > K ≥ I => L > I (True). For II: M > K ≥ I > H => M > H (True). Both follow.',
  'संयुक्त श्रृंखला: H < I = J ≤ K < M ≤ L। I: L > I सत्य है। II: M > H सत्य है। दोनों अनुसरण करते हैं।'
),
(
  'ssc-cgl-2026-mock-02', 6, 'Section I', 'General Intelligence and Reasoning',
  'Select the odd word out:',
  'विषम शब्द का चयन कीजिए:',
  'Anthracite', 'Bituminous', 'Lignite', 'Bauxite',
  'एंथ्रेसाइट (Anthracite)', 'बिटुमिनस (Bituminous)', 'लिग्नाइट (Lignite)', 'बॉक्साइट (Bauxite)',
  'd',
  'Anthracite, Bituminous, and Lignite are all grades of coal. Bauxite is an ore of aluminum.',
  'एंथ्रेसाइट, बिटुमिनस और लिग्नाइट कोयले के प्रकार हैं, जबकि बॉक्साइट एल्यूमीनियम का अयस्क है।'
),
(
  'ssc-cgl-2026-mock-02', 7, 'Section I', 'General Intelligence and Reasoning',
  'Find the missing number in the analogy: 12 : 144 :: 15 : ?',
  'सादृश्यता में लुप्त संख्या ज्ञात कीजिए: 12 : 144 :: 15 : ?',
  '225', '210', '240', '250',
  '225', '210', '240', '250',
  'a',
  '12^2 = 144 => 15^2 = 225.',
  '12 का वर्ग = 144 => 15 का वर्ग = 225।'
),
(
  'ssc-cgl-2026-mock-02', 8, 'Section I', 'General Intelligence and Reasoning',
  'Statement: "Due to heavy fog, all flights from Delhi are delayed." Assumptions: I. Passengers prefer flights over trains in winter. II. Fog severely impacts aviation visibility and safety.',
  'कथन: "घने कोहरे के कारण दिल्ली से सभी उड़ानें विलंबित हैं।" पूर्वधारणाएं: I. सर्दियों में यात्री ट्रेनों की तुलना में उड़ानों को प्राथमिकता देते हैं। II. कोहरा विमानन दृश्यता और सुरक्षा को गंभीर रूप से प्रभावित करता है।',
  'Only I is implicit', 'Only II is implicit', 'Both are implicit', 'Neither is implicit',
  'केवल I अंतर्निहित है', 'केवल II अंतर्निहित है', 'दोनों अंतर्निहित हैं', 'कोई अंतर्निहित नहीं है',
  'b',
  'The statement links fog directly to flight delays due to visibility/safety issues (II). It makes no mention of passenger travel preferences (I).',
  'कथन केवल कोहरे और उड़ान में देरी के बीच सीधा संबंध दर्शाता है। अतः केवल पूर्वधारणा II अंतर्निहित है।'
),
(
  'ssc-cgl-2026-mock-02', 9, 'Section I', 'General Intelligence and Reasoning',
  'Statements: Some farmers are engineers. All engineers are innovators. Conclusions: I. Some farmers are innovators. II. All innovators are engineers.',
  'कथन: कुछ किसान इंजीनियर हैं। सभी इंजीनियर नवप्रवर्तक हैं। निष्कर्ष: I. कुछ किसान नवप्रवर्तक हैं। II. सभी नवप्रवर्तक इंजीनियर हैं।',
  'Only I follows', 'Only II follows', 'Both follow', 'Neither follows',
  'केवल निष्कर्ष I अनुसरण करता है', 'केवल निष्कर्ष II अनुसरण करता है', 'दोनों अनुसरण करते हैं', 'कोई अनुसरण नहीं करता',
  'a',
  'Farmers intersecting Engineers are inside Innovators => Some farmers are innovators (I is True). The converse (All innovators are engineers) is not necessarily true (II is False).',
  'इंजीनियर किसान नवप्रवर्तक के दायरे में हैं => कुछ किसान नवप्रवर्तक हैं (I सत्य है)। केवल निष्कर्ष I अनुसरण करता है।'
),
(
  'ssc-cgl-2026-mock-02', 10, 'Section I', 'General Intelligence and Reasoning',
  'At 3:40, what is the acute angle between the minute and hour hands of a clock?',
  '3:40 बजे घड़ी की मिनट और घंटे की सुइयों के बीच न्यून कोण क्या होगा?',
  '120°', '130°', '140°', '150°',
  '120°', '130°', '140°', '150°',
  'b',
  'θ = |30H - 5.5M| = |30(3) - 5.5(40)| = |90 - 220| = 130°.',
  'कोण = |30H - 5.5M| = |30(3) - 5.5(40)| = |90 - 220| = 130°।'
),
(
  'ssc-cgl-2026-mock-02', 11, 'Section I', 'General Intelligence and Reasoning',
  'Pointing to a man, a woman said, "His mother is the only daughter of my mother." How is the woman related to the man?',
  'एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा, "उसकी माँ मेरी माँ की इकलौती पुत्री है।" वह महिला उस पुरुष से किस प्रकार संबंधित है?',
  'Aunt', 'Sister', 'Mother', 'Grandmother',
  'चाची / मौसी', 'बहन', 'माता', 'दादी / नानी',
  'c',
  '"The only daughter of my mother" is the woman herself. Therefore, the woman is the man''s mother.',
  '"मेरी माँ की इकलौती पुत्री" स्वयं वह महिला है। अतः वह महिला उस पुरुष की माता है।'
),
(
  'ssc-cgl-2026-mock-02', 12, 'Section I', 'General Intelligence and Reasoning',
  'Arrange in logical and meaningful order: 1. Seed  2. Plant  3. Fruit  4. Harvest  5. Flower',
  'तार्किक और सार्थक क्रम में व्यवस्थित कीजिए: 1. बीज  2. पौधा  3. फल  4. कटाई  5. फूल',
  '1, 2, 5, 3, 4', '1, 3, 2, 5, 4', '2, 1, 5, 3, 4', '1, 2, 3, 5, 4',
  '1, 2, 5, 3, 4', '1, 3, 2, 5, 4', '2, 1, 5, 3, 4', '1, 2, 3, 5, 4',
  'a',
  'Chronological biological lifecycle: Seed (1) -> Plant (2) -> Flower (5) -> Fruit (3) -> Harvest (4).',
  'प्राकृतिक विकास चक्र: बीज (1) -> पौधा (2) -> फूल (5) -> फल (3) -> कटाई (4)।'
),
(
  'ssc-cgl-2026-mock-02', 13, 'Section I', 'General Intelligence and Reasoning',
  'Find the exact address match for: "Sector 14, Plot 99, Dwarka, Delhi-110075"',
  'दिए गए पते का सटीक मिलान ज्ञात कीजिए: "Sector 14, Plot 99, Dwarka, Delhi-110075"',
  'Sector 14, Plot 99, Dwaraka, Delhi-110075', 'Sector 14, Plot 99, Dwarka, Delhi-110075', 'Sector 14, Plot 99, Dwarka, Dehli-110075', 'Sector 14, Plt 99, Dwarka, Delhi-110075',
  'Sector 14, Plot 99, Dwaraka, Delhi-110075', 'Sector 14, Plot 99, Dwarka, Delhi-110075', 'Sector 14, Plot 99, Dwarka, Dehli-110075', 'Sector 14, Plt 99, Dwarka, Delhi-110075',
  'b',
  'Option B is an exact character-by-character match. Option A misspells ''Dwaraka'', C misspells ''Dehli'', D abbreviates ''Plt''.',
  'विकल्प B पूरी तरह से वर्ण-दर-वर्ण सटीक मिलान है।'
),
(
  'ssc-cgl-2026-mock-02', 14, 'Section II', 'General Awareness',
  'Which of the following conditions is structurally essential for the formation of a ''Temperature Inversion'' in the lower atmosphere?',
  'निचले वायुमंडल में ''तापमान व्युत्क्रमण'' (Temperature Inversion) के निर्माण के लिए निम्नलिखित में से कौन सी स्थिति संरचनात्मक रूप से आवश्यक है?',
  'Short summer nights', 'High wind velocity', 'Long winter nights with clear skies', 'Dense cloud cover',
  'छोटी ग्रीष्मकालीन रातें', 'उच्च वायु वेग', 'साफ आसमान के साथ लंबी सर्दियों की रातें', 'घने बादल',
  'c',
  'Long winter nights allow maximum terrestrial radiation cooling, while clear skies permit heat loss into space, making air near ground colder than air aloft.',
  'साफ आसमान और लंबी सर्दियों की रातें तीव्र पार्थिव विकिरण द्वारा धरातल को ठंडा करती हैं, जिससे निचली हवा ऊपर की हवा से अधिक ठंडी हो जाती है।'
),
(
  'ssc-cgl-2026-mock-02', 15, 'Section II', 'General Awareness',
  'Geostrophic winds flow parallel to straight isobars primarily because of a precise balance between which two forces?',
  'भूविक्षेपी पवनें (Geostrophic winds) सीधे समदाब रेखाओं के समानांतर मुख्य रूप से किन दो बलों के सटीक संतुलन के कारण चलती हैं?',
  'Pressure Gradient Force and Frictional Force', 'Pressure Gradient Force and Coriolis Force', 'Centripetal Force and Coriolis Force', 'Gravitational Force and Frictional Force',
  'दाब प्रवणता बल और घर्षण बल', 'दाब प्रवणता बल और कोरिओलिस बल', 'अभिकेंद्रीय बल और कोरिओलिस बल', 'गुरुत्वाकर्षण बल और घर्षण बल',
  'b',
  'In the upper atmosphere where friction is negligible, the Pressure Gradient Force is exactly balanced by the Coriolis Force, producing geostrophic wind parallel to isobars.',
  'ऊपरी वायुमंडल में घर्षण के अभाव में, दाब प्रवणता बल और कोरिओलिस बल एक दूसरे को संतुलित करते हैं।'
),
(
  'ssc-cgl-2026-mock-02', 16, 'Section II', 'General Awareness',
  'In modern precision agriculture, when autonomous robots mechanically eliminate weeds in tightly spaced crops, which core technology differentiates between the crop and the weed?',
  'आधुनिक सटीक कृषि में स्वायत्त रोबोटों द्वारा खरपतवार हटाने में फसल और खरपतवार के बीच अंतर करने वाली मुख्य तकनीक कौन सी है?',
  'Ultrasonic distance sensors', 'GPS Telemetry mapping', 'Computer Vision paired with Machine Learning algorithms', 'Soil moisture capacitance probes',
  'अल्ट्रासोनिक दूरी सेंसर', 'जीपीएस टेलीमेट्री मैपिंग', 'मशीन लर्निंग एल्गोरिदम के साथ कंप्यूटर विज़न', 'मृदा नमी धारिता जांच',
  'c',
  'Computer vision cameras feed leaf morphology and color data into machine learning classifiers to distinguish crop leaves from weeds in real time.',
  'कंप्यूटर विज़न और मशीन लर्निंग मॉडल पत्तियों की आकृति और संरचना के आधार पर वास्तविक समय में खरपतवार पहचानते हैं।'
),
(
  'ssc-cgl-2026-mock-02', 17, 'Section II', 'General Awareness',
  'The term "Dehliwal" referenced in medieval Indian history primarily denotes:',
  'मध्यकालीन भारतीय इतिहास में संदर्भित शब्द "देहलीवाल" मुख्य रूप से किसे दर्शाता है?',
  'A military rank under the Khaljis', 'Silver/copper coins minted by the Tomara dynasty', 'Market inspectors appointed by Alauddin Khalji', 'Revenue collection system of the Lodis',
  'खिलजियों के अधीन एक सैन्य पद', 'तोमर राजपूतों द्वारा ढाले गए सिक्के', 'अलाउद्दीन खिलजी द्वारा नियुक्त बाजार निरीक्षक', 'लोदियों की राजस्व संग्रह प्रणाली',
  'b',
  'Coins minted in Delhi during the Tomara and Chauhan rule were called ''Dehliwal'' and circulated widely across Northern India.',
  'दिल्ली के तोमर और चौहान शासकों द्वारा ढाले गए लोकप्रिय सिक्कों को ''देहलीवाल'' कहा जाता था।'
),
(
  'ssc-cgl-2026-mock-02', 18, 'Section II', 'General Awareness',
  'Which classical dance form, originally performed by Devadasis in temples and revived by modern scholars, traces its roots to Andhra Pradesh?',
  'कौन सा शास्त्रीय नृत्य रूप, जो मूल रूप से मंदिरों में देवदासियों द्वारा किया जाता था, आंध्र प्रदेश से संबंधित है?',
  'Bharatanatyam', 'Vilasini Natyam', 'Sattriya', 'Mohiniyattam',
  'भरतनाट्यम', 'विलासिनी नाट्यम (Vilasini Natyam)', 'सत्रिया', 'मोहिनीअट्टम',
  'b',
  'Vilasini Natyam is the traditional temple dance of Telugu Devadasis (Vilasinis) in Andhra Pradesh, distinct from Kuchipudi.',
  'विलासिनी नाट्यम आंध्र प्रदेश के मंदिरों की देवदासियों द्वारा की जाने वाली एक पारंपरिक नृत्य शैली है।'
),
(
  'ssc-cgl-2026-mock-02', 19, 'Section II', 'General Awareness',
  'Under Article 249 of the Indian Constitution, the Parliament can legislate on a subject in the State List if a resolution is passed by:',
  'भारतीय संविधान के अनुच्छेद 249 के तहत संसद राज्य सूची के विषय पर कानून बना सकती है यदि:',
  'The Lok Sabha with a simple majority', 'The Rajya Sabha with a 2/3rd majority of members present and voting', 'Both Houses of Parliament jointly', 'The President via ordinance',
  'लोकसभा साधारण बहुमत से प्रस्ताव पारित करे', 'राज्यसभा उपस्थित और मतदान करने वाले सदस्यों के 2/3 बहुमत से प्रस्ताव पारित करे', 'संसद के दोनों सदन संयुक्त रूप से', 'राष्ट्रपति अध्यादेश जारी करे',
  'b',
  'Article 249 empowers Rajya Sabha (Council of States) to pass a resolution by a two-thirds majority of members present and voting to declare a State List subject of national importance.',
  'अनुच्छेद 249 के अंतर्गत राज्यसभा उपस्थित एवं मतदान करने वाले सदस्यों के 2/3 बहुमत से प्रस्ताव पारित कर संसद को राज्य सूची के विषय पर विधि बनाने का अधिकार दे सकती है।'
),
(
  'ssc-cgl-2026-mock-02', 20, 'Section II', 'General Awareness',
  'The Production Possibility Frontier (PPF) is an economic curve that illustrates:',
  'उत्पादन संभावना वक्र (PPF) क्या दर्शाता है?',
  'The maximum potential output combinations of two goods given fixed resources and technology', 'The relationship between inflation and unemployment', 'Income inequality within a nation', 'The total tax revenue of a government',
  'निश्चित संसाधनों और तकनीक के साथ दो वस्तुओं के अधिकतम संभावित उत्पादन संयोजन', 'मुद्रास्फीति और बेरोजगारी के बीच संबंध', 'देश के भीतर आय असमानता', 'सरकार का कुल कर राजस्व',
  'a',
  'The PPF visually depicts opportunity cost and resource constraints by showing the trade-offs in producing combinations of two commodities.',
  'PPF दिए गए संसाधनों और तकनीक से उत्पादित की जा सकने वाली दो वस्तुओं के अधिकतम संयोजनों को दर्शाता है।'
),
(
  'ssc-cgl-2026-mock-02', 21, 'Section II', 'General Awareness',
  'In cellular biology, the Krebs cycle (Citric Acid Cycle), which is essential for aerobic respiration, occurs in the:',
  'कोशिका जीव विज्ञान में, वायवीय श्वसन के लिए आवश्यक क्रेब्स चक्र (Krebs cycle) कहाँ संपन्न होता है?',
  'Cytoplasm', 'Mitochondrial matrix', 'Ribosomes', 'Golgi apparatus',
  'कोशिकाद्रव्य (Cytoplasm)', 'माइटोकॉन्ड्रियल मैट्रिक्स (Mitochondrial matrix)', 'राइबोसोम', 'गॉल्जी उपकरण',
  'b',
  'Glycolysis takes place in the cytoplasm, but the Krebs cycle occurs within the inner mitochondrial matrix where its specific enzymes reside.',
  'ग्लाइकोलाइसिस कोशिकाद्रव्य में होता है, जबकि क्रेब्स चक्र माइटोकॉन्ड्रिया के मैट्रिक्स में संपन्न होता है।'
),
(
  'ssc-cgl-2026-mock-02', 22, 'Section II', 'General Awareness',
  'The James Webb Space Telescope (JWST) is specifically optimized to observe the universe primarily in which spectrum?',
  'जेम्स वेब स्पेस टेलीस्कोप (JWST) मुख्य रूप से किस स्पेक्ट्रम में ब्रह्मांड का अवलोकन करने के लिए अनुकूलित है?',
  'X-ray', 'Ultraviolet', 'Near-infrared and mid-infrared', 'Microwave',
  'एक्स-रे', 'पराबैंगनी (Ultraviolet)', 'अवरक्त (Near-infrared & Mid-infrared)', 'माइक्रोवेव',
  'c',
  'JWST is optimized for infrared light (NIRCam and MIRI instruments) because light from distant, redshifted galaxies of the early universe is stretched into infrared wavelengths.',
  'JWST को निकट-अवरक्त (Near-infrared) और मध्य-अवरक्त (Mid-infrared) तरंगदैर्ध्य देखने के लिए डिज़ाइन किया गया है।'
),
(
  'ssc-cgl-2026-mock-02', 23, 'Section II', 'General Awareness',
  'Which soil type is characterized by its ''self-ploughing'' capacity due to deep cracks forming during dry seasons?',
  'किस मृदा की विशेषता शुष्क मौसम में गहरी दरारें पड़ने के कारण इसकी ''स्वयं जुताई'' (Self-ploughing) क्षमता है?',
  'Alluvial Soil', 'Laterite Soil', 'Black Soil (Regur)', 'Red Soil',
  'जलोढ़ मृदा', 'लैटेराइट मृदा', 'काली मृदा (रेगुर)', 'लाल मृदा',
  'c',
  'Black cotton soil (Regur) contains high montmorillonite clay that swells when wet and shrinks drastically when dry, causing deep aeration fissures (''self-ploughing'').',
  'काली मिट्टी (रेगुर) में क्ले की मात्रा अधिक होती है, जो सूखने पर गहरी दरारें बनाती है जिससे प्राकृतिक वातन (aeration) होता है।'
),
(
  'ssc-cgl-2026-mock-02', 24, 'Section II', 'General Awareness',
  'During the 1991 Economic Reforms in India, the primary factor that resolved the immediate Balance of Payments (BoP) crisis was:',
  'भारत में 1991 के आर्थिक सुधारों के दौरान तत्काल भुगतान संतुलन (BoP) संकट को हल करने वाला प्राथमिक कारक क्या था?',
  'Complete privatization of all public sector banks', 'Rupee devaluation and liberalized trade/capital inflow policies', 'Halting all imports of heavy machinery', 'Transitioning to a purely barter-based foreign trade system',
  'सभी सार्वजनिक बैंकों का निजीकरण', 'रुपये का अवमूल्यन और उदारीकृत व्यापार/पूंजी प्रवाह नीतियां', 'भारी मशीनरी के आयात पर रोक', 'वस्तु विनिमय प्रणाली को अपनाना',
  'b',
  'A two-step rupee devaluation combined with liberalized FDI regulations and IMF credit restored external liquidity and export competitiveness.',
  'रुपये के दो-चरणीय अवमूल्यन और विदेशी निवेश के उदारीकरण से विदेशी मुद्रा भंडार में तेजी से सुधार हुआ।'
),
(
  'ssc-cgl-2026-mock-02', 25, 'Section II', 'General Awareness',
  'The "Bhagoria" festival, marked by vibrant tribal fairs and community bonding, is celebrated predominantly in which Indian state?',
  'जीवंत मेलों के लिए प्रसिद्ध "भगोरिया" त्योहार मुख्य रूप से किस भारतीय राज्य के जनजातीय समुदायों द्वारा मनाया जाता है?',
  'Jharkhand', 'Madhya Pradesh', 'Odisha', 'Assam',
  'झारखंड', 'मध्य प्रदेश', 'ओडिशा', 'असम',
  'b',
  'Bhagoria is an agricultural spring festival of the Bhil and Bhilala tribal communities in Jhabua, Alirajpur, and Dhar districts of Madhya Pradesh.',
  'भगोरिया मध्य प्रदेश के मालवा-निमाड़ क्षेत्र (झाबुआ, धार) में भील और भिलाला जनजातियों द्वारा होली से पहले मनाया जाने वाला प्रसिद्ध उत्सव है।'
),
(
  'ssc-cgl-2026-mock-02', 26, 'Section II', 'General Awareness',
  'Which of the following is true regarding Harappan civilization seals?',
  'हड़प्पा सभ्यता की मुहरों के संबंध में निम्नलिखित में से कौन सा कथन सही है?',
  'They were primarily made of iron.', 'They feature a script that has been fully deciphered.', 'They were typically made of steatite and featured animal motifs.', 'They were used exclusively as religious idols.',
  'वे मुख्य रूप से लोहे की बनी थीं।', 'उनकी लिपि को पूरी तरह से पढ़ा जा चुका है।', 'वे आमतौर पर सेलखड़ी (स्टीएटाइट) से बनी थीं और उन पर जानवरों के चित्र थे।', 'वे केवल धार्मिक मूर्तियों के रूप में इस्तेमाल होती थीं।',
  'c',
  'Harappan seals were square/rectangular objects carved from steatite (soapstone), featuring pictographic scripts and motifs like unicorns, humped bulls, and tigers.',
  'हड़प्पा मुहरें मुख्य रूप से सेलखड़ी (Steatite) की बनी थीं और उन पर एकश्रृंगी (Unicorn), बैल, हाथी आदि पशुओं के चित्र उत्कीर्ण थे।'
),
(
  'ssc-cgl-2026-mock-02', 27, 'Section III', 'Quantitative Aptitude',
  'If a + b + c = 6 and ab + bc + ca = 11, find the value of a³ + b³ + c³ - 3abc.',
  'यदि a + b + c = 6 और ab + bc + ca = 11 है, तो a³ + b³ + c³ - 3abc का मान ज्ञात कीजिए।',
  '18', '24', '36', '42',
  '18', '24', '36', '42',
  'a',
  'a² + b² + c² = (a+b+c)² - 2(ab+bc+ca) = 36 - 22 = 14. Identity: a³+b³+c³-3abc = (a+b+c)(a²+b²+c² - (ab+bc+ca)) = 6 * (14 - 11) = 6 * 3 = 18.',
  'a² + b² + c² = 36 - 22 = 14। a³+b³+c³-3abc = (a+b+c)(a²+b²+c² - (ab+bc+ca)) = 6 * (14 - 11) = 18।'
),
(
  'ssc-cgl-2026-mock-02', 28, 'Section III', 'Quantitative Aptitude',
  'If A : B = 2 : 3, B : C = 4 : 5, and C : D = 6 : 7, what is the compound ratio A : D?',
  'यदि A : B = 2 : 3, B : C = 4 : 5 और C : D = 6 : 7 है, तो मिश्र अनुपात A : D क्या है?',
  '16 : 35', '8 : 21', '12 : 35', '16 : 21',
  '16 : 35', '8 : 21', '12 : 35', '16 : 21',
  'a',
  'A/D = (A/B) * (B/C) * (C/D) = (2/3) * (4/5) * (6/7) = 48 / 105 = 16 / 35.',
  'A/D = (2/3) * (4/5) * (6/7) = 48 / 105 = 16 / 35।'
),
(
  'ssc-cgl-2026-mock-02', 29, 'Section III', 'Quantitative Aptitude',
  'Simplify the surd: √(14 + 6√5)',
  'सरल कीजिए: √(14 + 6√5)',
  '2 + √5', '3 + √5', '1 + 2√5', '3 - √5',
  '2 + √5', '3 + √5', '1 + 2√5', '3 - √5',
  'b',
  '2ab = 6√5 => ab = 3√5. Let a = 3, b = √5. Check: a² + b² = 9 + 5 = 14. Thus √(14 + 6√5) = √(3 + √5)² = 3 + √5.',
  '14 + 6√5 = 3² + (√5)² + 2(3)(√5) = (3 + √5)²। अतः वर्गमूल = 3 + √5।'
),
(
  'ssc-cgl-2026-mock-02', 30, 'Section III', 'Quantitative Aptitude',
  'A vendor marks his goods 20% above the cost price and allows a discount of 10% on marked price. What is his profit percentage?',
  'एक विक्रेता अपने माल पर क्रय मूल्य से 20% अधिक अंकित करता है और 10% की छूट देता है। उसका लाभ प्रतिशत क्या है?',
  '8%', '10%', '12%', '15%',
  '8%', '10%', '12%', '15%',
  'a',
  'Successive formula: Net% = +20 - 10 + (20 * -10)/100 = 10 - 2 = 8% profit.',
  'शुद्ध लाभ% = 20 - 10 - (20 * 10)/100 = 8%।'
),
(
  'ssc-cgl-2026-mock-02', 31, 'Section III', 'Quantitative Aptitude',
  'Pipe A can fill a tank in 12 hours, Pipe B in 15 hours, and Pipe C can empty it in 20 hours. If all three are opened together, how long will it take to fill the tank?',
  'पाइप A एक टंकी को 12 घंटे में, B 15 घंटे में भर सकता है और C इसे 20 घंटे में खाली कर सकता है। तीनों एक साथ खोले जाएं तो टंकी कितने समय में भरेगी?',
  '8 hours', '10 hours', '12 hours', '15 hours',
  '8 घंटे', '10 घंटे', '12 घंटे', '15 घंटे',
  'b',
  'LCM of 12, 15, 20 = 60 units. Rate A = +5, B = +4, C = -3. Net rate = 5 + 4 - 3 = 6 units/hr. Time = 60 / 6 = 10 hours.',
  'कुल क्षमता = 60 इकाइयाँ। कुल शुद्ध दर = 5 + 4 - 3 = 6। समय = 60 / 6 = 10 घंटे।'
),
(
  'ssc-cgl-2026-mock-02', 32, 'Section III', 'Quantitative Aptitude',
  'A sum of ₹5,000 is lent out in two parts, one at 4% simple interest and the other at 5% simple interest. If the total annual interest is ₹220, what is the sum lent at 4%?',
  '₹5,000 की राशि को दो भागों में उधार दिया जाता है, एक भाग 4% साधारण ब्याज पर और दूसरा 5% पर। यदि कुल वार्षिक ब्याज ₹220 है, तो 4% पर दी गई राशि कितनी है?',
  '₹2,000', '₹2,500', '₹3,000', '₹3,500',
  '₹2,000', '₹2,500', '₹3,000', '₹3,500',
  'c',
  'Let amount at 4% be x. 0.04x + 0.05(5000 - x) = 220 => -0.01x + 250 = 220 => 0.01x = 30 => x = ₹3,000.',
  'माना 4% पर राशि x है। 0.04x + 0.05(5000 - x) = 220 => 250 - 0.01x = 220 => 0.01x = 30 => x = ₹3,000।'
),
(
  'ssc-cgl-2026-mock-02', 33, 'Section III', 'Quantitative Aptitude',
  'The angle of elevation of the top of a tower from a point on the ground 30 m away from its foot is 30°. The height of the tower is:',
  'टॉवर के पाद से 30 मीटर दूर जमीन पर एक बिंदु से टॉवर के शीर्ष का उन्नयन कोण 30° है। टॉवर की ऊंचाई क्या है?',
  '10√3 m', '15√3 m', '30 m', '20√3 m',
  '10√3 मीटर', '15√3 मीटर', '30 मीटर', '20√3 मीटर',
  'a',
  'tan 30° = h / 30 => 1/√3 = h / 30 => h = 30 / √3 = 10√3 m.',
  'tan 30° = h / 30 => h = 30 / √3 = 10√3 मीटर।'
),
(
  'ssc-cgl-2026-mock-02', 34, 'Section III', 'Quantitative Aptitude',
  'A solid metallic sphere of radius 8 cm is melted and recast into smaller spheres of radius 2 cm. How many smaller spheres can be formed?',
  '8 सेमी त्रिज्या वाले एक ठोस धातु के गोले को पिघलाकर 2 सेमी त्रिज्या के छोटे गोले बनाए जाते हैं। कितने छोटे गोले बनेंगे?',
  '16', '32', '64', '128',
  '16', '32', '64', '128',
  'c',
  'Number of spheres = Volume_large / Volume_small = (R / r)³ = (8 / 2)³ = 4³ = 64.',
  'गोलों की संख्या = (R / r)³ = (8 / 2)³ = 4³ = 64।'
),
(
  'ssc-cgl-2026-mock-02', 35, 'Section III', 'Quantitative Aptitude',
  'If sin A + cos A = 7/5, what is the value of sin A × cos A?',
  'यदि sin A + cos A = 7/5 है, तो sin A × cos A का मान क्या है?',
  '12/25', '24/25', '6/25', '18/25',
  '12/25', '24/25', '6/25', '18/25',
  'a',
  '(sin A + cos A)² = (7/5)² => sin²A + cos²A + 2sinA cosA = 49/25 => 1 + 2sinA cosA = 49/25 => 2sinA cosA = 24/25 => sinA cosA = 12/25.',
  '(sin A + cos A)² = 49/25 => 1 + 2 sin A cos A = 49/25 => 2 sin A cos A = 24/25 => sin A cos A = 12/25।'
),
(
  'ssc-cgl-2026-mock-02', 36, 'Section III', 'Quantitative Aptitude',
  'From an external point P, tangents PA and PB are drawn to a circle with center O. If ∠APB = 50°, then ∠OAB is equal to:',
  'एक बाहरी बिंदु P से, केंद्र O वाले वृत्त पर दो स्पर्श रेखाएं PA और PB खींची जाती हैं। यदि ∠APB = 50° है, तो ∠OAB का मान क्या है?',
  '25°', '40°', '50°', '65°',
  '25°', '40°', '50°', '65°',
  'a',
  'PA = PB => ΔPAB is isosceles. ∠PAB = (180° - 50°)/2 = 65°. Radius OA ⊥ PA => ∠OAP = 90°. Thus ∠OAB = 90° - 65° = 25°. (Also formula: ∠OAB = ∠APB / 2 = 50° / 2 = 25°).',
  '∠OAB = ∠APB / 2 = 50° / 2 = 25°।'
),
(
  'ssc-cgl-2026-mock-02', 37, 'Section III', 'Quantitative Aptitude',
  'In ΔABC, the lengths of sides are 6 cm, 8 cm, and 10 cm. What is the radius of its circumcircle?',
  'ΔABC में भुजाओं की लंबाई 6 सेमी, 8 सेमी और 10 सेमी है। इसके परिवृत्त की त्रिज्या क्या है?',
  '3 cm', '4 cm', '5 cm', '6 cm',
  '3 सेमी', '4 सेमी', '5 सेमी', '6 सेमी',
  'c',
  '6, 8, 10 forms a right-angled triangle (6² + 8² = 10²). The circumcenter of a right triangle is at the midpoint of hypotenuse. Circumradius R = Hypotenuse / 2 = 10 / 2 = 5 cm.',
  'यह एक समकोण त्रिभुज है (6² + 8² = 10²)। परिवृत्त की त्रिज्या = कर्ण / 2 = 10 / 2 = 5 सेमी।'
),
(
  'ssc-cgl-2026-mock-02', 38, 'Section III', 'Quantitative Aptitude',
  'What is the slope of a line perpendicular to the line equation 3x - 4y = 12?',
  'रेखा 3x - 4y = 12 के लंबवत रेखा का ढाल (slope) क्या होगा?',
  '3/4', '-3/4', '4/3', '-4/3',
  '3/4', '-3/4', '4/3', '-4/3',
  'd',
  'Rewriting: 4y = 3x - 12 => y = (3/4)x - 3. Slope m₁ = 3/4. For perpendicular line: m₁ * m₂ = -1 => m₂ = -4/3.',
  'रेखा का ढाल m₁ = 3/4। लंबवत रेखा का ढाल m₂ = -1 / (3/4) = -4/3।'
),
(
  'ssc-cgl-2026-mock-02', 39, 'Section IV', 'English Comprehension',
  'Select the most appropriate synonym for the word: METICULOUS',
  'दिए गए शब्द का सबसे उपयुक्त समानार्थी (Synonym) चुनिए: METICULOUS',
  'Careless', 'Fastidious', 'Ambiguous', 'Frivolous',
  'Careless', 'Fastidious', 'Ambiguous', 'Frivolous',
  'b',
  '''Meticulous'' means showing great attention to detail. ''Fastidious'' is the exact synonym, meaning very attentive to accuracy and detail.',
  '''Meticulous'' का अर्थ है अति सतर्क/सूक्ष्मदर्शी। इसका सटीक समानार्थी ''Fastidious'' है।'
),
(
  'ssc-cgl-2026-mock-02', 40, 'Section IV', 'English Comprehension',
  'Select the most appropriate antonym for the word: EPHEMERAL',
  'दिए गए शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: EPHEMERAL',
  'Transient', 'Permanent', 'Mythical', 'Temporal',
  'Transient', 'Permanent', 'Mythical', 'Temporal',
  'b',
  '''Ephemeral'' means lasting for a very short time (transient). Its antonym is ''Permanent''.',
  '''Ephemeral'' का अर्थ है अल्पकालिक/क्षणिक। इसका विलोम शब्द ''Permanent'' (स्थायी) है।'
),
(
  'ssc-cgl-2026-mock-02', 41, 'Section IV', 'English Comprehension',
  'Choose the correct meaning of the idiom: "To chew the scenery"',
  'मुहावरे का सही अर्थ चुनिए: "To chew the scenery"',
  'To eat excessively', 'To act in an overly emotional or melodramatic way', 'To destroy public property', 'To ponder deeply',
  'अत्यधिक खाना', 'अति-नाटकीय या अत्यधिक भावुक अभिनय करना', 'सार्वजनिक संपत्ति को नुकसान पहुंचाना', 'गहराई से विचार करना',
  'b',
  '''To chew the scenery'' is a theatrical expression meaning to overact melodramatically or exaggerate emotions in a scene.',
  'इसका अर्थ अति-नाटकीयता या बहुत बढ़ा-चढ़ाकर अभिनय (overact) करना है।'
),
(
  'ssc-cgl-2026-mock-02', 42, 'Section IV', 'English Comprehension',
  'Find the error in the sentence: The committee have (A) / completely disagreed (B) / on the timeline for (C) / implementing the new policy. (D)',
  'वाक्य में त्रुटि पहचानिए: The committee have (A) / completely disagreed (B) / on the timeline for (C) / implementing the new policy. (D)',
  'A', 'B', 'C', 'No error',
  'भाग A', 'भाग B', 'भाग C', 'कोई त्रुटि नहीं (No error)',
  'd',
  'When members of a collective noun (like committee) are divided or in disagreement, a plural verb (''have disagreed'') is grammatically correct. Sentence has no error.',
  'जब किसी सामूहिक संज्ञा (committee) के सदस्यों में मतभेद दर्शाया जाए, तो बहुवचन क्रिया (''have'') सही होती है। वाक्य में कोई त्रुटि नहीं है।'
),
(
  'ssc-cgl-2026-mock-02', 43, 'Section IV', 'English Comprehension',
  'Choose the correctly spelled word meaning ''a strong tendency or inclination'':',
  'सही वर्तनी (Spelling) वाले शब्द का चयन कीजिए जिसका अर्थ ''स्वाभाविक झुकाव'' है:',
  'Proclivity', 'Proclivety', 'Proclyvity', 'Proclivitty',
  'Proclivity', 'Proclivety', 'Proclyvity', 'Proclivitty',
  'a',
  'The correct spelling is P-R-O-C-L-I-V-I-T-Y, derived from the Latin ''proclivitas''.',
  'सही वर्तनी ''Proclivity'' है।'
),
(
  'ssc-cgl-2026-mock-02', 44, 'Section IV', 'English Comprehension',
  'Select the one-word substitution for: "A person who is indifferent to both pleasure and pain"',
  'अनेक शब्दों के लिए एक शब्द: "A person who is indifferent to both pleasure and pain"',
  'Epicurean', 'Stoic', 'Ascetic', 'Cynic',
  'Epicurean', 'Stoic (उदासीन/वैरागी)', 'Ascetic', 'Cynic',
  'b',
  'A ''Stoic'' is a person who can endure pain or hardship without showing their feelings or complaining.',
  'सुख और दुःख दोनों में समान रहने वाले व्यक्ति को ''Stoic'' कहा जाता है।'
),
(
  'ssc-cgl-2026-mock-02', 45, 'Section IV', 'English Comprehension',
  'Fill in the blank: The scientist''s controversial hypothesis was initially ________ by the academic community until irrefutable evidence surfaced.',
  'रिक्त स्थान की पूर्ति कीजिए: The scientist''s controversial hypothesis was initially ________ by the academic community until irrefutable evidence surfaced.',
  'corroborated', 'disregarded', 'venerated', 'synthesized',
  'corroborated', 'disregarded', 'venerated', 'synthesized',
  'b',
  'The clause ''until irrefutable evidence surfaced'' indicates initial skepticism/rejection. ''Disregarded'' (ignored/dismissed) fits the context.',
  '''Until irrefutable evidence surfaced'' से स्पष्ट है कि शुरुआत में सिद्धांत की उपेक्षा की गई थी। अतः ''disregarded'' सही है।'
),
(
  'ssc-cgl-2026-mock-02', 46, 'Section IV', 'English Comprehension',
  'Change from Active to Passive Voice: "The architect is drawing the blueprints."',
  'Active से Passive Voice में बदलिए: "The architect is drawing the blueprints."',
  'The blueprints are drawn by the architect.', 'The blueprints have been drawn by the architect.', 'The blueprints were being drawn by the architect.', 'The blueprints are being drawn by the architect.',
  'The blueprints are drawn by the architect.', 'The blueprints have been drawn by the architect.', 'The blueprints were being drawn by the architect.', 'The blueprints are being drawn by the architect.',
  'd',
  'Present Continuous: Subject + is/am/are + V-ing + Object changes to Object + is/am/are + being + V3 + by + Subject => ''The blueprints are being drawn by the architect.''',
  'Present Continuous का Passive रूप: are being + V3 होता है।'
),
(
  'ssc-cgl-2026-mock-02', 47, 'Section IV', 'English Comprehension',
  'Change from Direct to Indirect Speech: The manager said to the team, "Do not compromise on safety standards."',
  'Direct से Indirect Speech में बदलिए: The manager said to the team, "Do not compromise on safety standards."',
  'The manager told the team that do not compromise on safety standards.', 'The manager forbade the team to compromise on safety standards.', 'The manager ordered the team to not compromise on safety standards.', 'The manager asked the team to compromise not on safety standards.',
  'The manager told the team that do not compromise on safety standards.', 'The manager forbade the team to compromise on safety standards.', 'The manager ordered the team to not compromise on safety standards.', 'The manager asked the team to compromise not on safety standards.',
  'b',
  'Negative imperative ''Do not ...'' is correctly rendered with reporting verb ''forbade'' followed by the positive infinitive ''to compromise''.',
  '''Forbade'' के साथ सीधे ''to + V1'' आता है (''not'' का दोहराव नहीं होता)।'
),
(
  'ssc-cgl-2026-mock-02', 48, 'Section IV', 'English Comprehension',
  'Select the sentence containing a homonym error:',
  'उस वाक्य का चयन कीजिए जिसमें समध्वनिक (Homonym) शब्द की त्रुटि है:',
  'She tied a knot in the rope.', 'I have a severe pain in my side.', 'The medieval night rode into battle.', 'He stared blankly at the wall.',
  'She tied a knot in the rope.', 'I have a severe pain in my side.', 'The medieval night rode into battle.', 'He stared blankly at the wall.',
  'c',
  'Sentence C confuses ''night'' (dark time of day) with the warrior ''knight''. It should be ''The medieval knight rode into battle.''',
  'वाक्य C में योद्धा के लिए ''knight'' के स्थान पर ''night'' लिखा गया है, जो त्रुटिपूर्ण है।'
),
(
  'ssc-cgl-2026-mock-02', 49, 'Section IV', 'English Comprehension',
  'Rearrange the jumbled sentences to form a coherent paragraph: (A) It requires analyzing raw data to extract meaningful insights. (B) Data science is an interdisciplinary field. (C) These insights help businesses make informed decisions. (D) Furthermore, it combines statistics, mathematics, and computer science.',
  'सार्थक अनुच्छेद बनाने के लिए वाक्यों को पुनर्व्यवस्थित कीजिए: (A) It requires analyzing raw data... (B) Data science is an interdisciplinary field. (C) These insights help businesses... (D) Furthermore, it combines statistics...',
  'B, D, A, C', 'B, A, C, D', 'A, B, D, C', 'D, B, A, C',
  'B, D, A, C', 'B, A, C, D', 'A, B, D, C', 'D, B, A, C',
  'a',
  'Opening definition (B) -> Elaboration with ''Furthermore'' (D) -> Operational process (A) -> Ultimate business outcome (C). Sequence: B-D-A-C.',
  'तार्किक क्रम: परिभाषा (B) -> विस्तार (D) -> कार्यविधि (A) -> परिणाम (C)। सही क्रम: B, D, A, C।'
),
(
  'ssc-cgl-2026-mock-02', 50, 'Section IV', 'English Comprehension',
  'Identify the error in the sentence: One of the student (A) / in the class (B) / was absent (C) / during the final examination. (D)',
  'वाक्य में त्रुटि पहचानिए: One of the student (A) / in the class (B) / was absent (C) / during the final examination. (D)',
  'A', 'B', 'C', 'D',
  'भाग A', 'भाग B', 'भाग C', 'भाग D',
  'a',
  'Rule: ''One of the'' is always followed by a plural noun. It must be ''One of the students'', not ''student''.',
  '''One of the'' के बाद हमेशा बहुवचन संज्ञा (Plural Noun) ''students'' का प्रयोग होता है।'
),
(
  'ssc-cgl-2026-mock-02', 51, 'Section I', 'General Intelligence and Reasoning',
  'What comes next in the series: 2, 12, 36, 80, ?',
  'श्रृंखला में अगला पद क्या होगा: 2, 12, 36, 80, ?',
  '120', '144', '150', '162',
  '120', '144', '150', '162',
  'c',
  'Pattern: n² + n³. 1² + 1³ = 2; 2² + 2³ = 12; 3² + 3³ = 36; 4² + 4³ = 80; 5² + 5³ = 25 + 125 = 150.',
  'पैटर्न: n² + n³। 1+1=2; 4+8=12; 9+27=36; 16+64=80; 25+125 = 150।'
),
(
  'ssc-cgl-2026-mock-02', 52, 'Section I', 'General Intelligence and Reasoning',
  'In a certain code language, "DOCTOR" is written as "FQEVQT". How is "PATIENT" written in that code language?',
  'एक निश्चित कूट भाषा में "DOCTOR" को "FQEVQT" लिखा जाता है। उसी कूट भाषा में "PATIENT" को क्या लिखा जाएगा?',
  'RCVKGPV', 'RCVKGPU', 'RDWLHQV', 'QBWJFPV',
  'RCVKGPV', 'RCVKGPU', 'RDWLHQV', 'QBWJFPV',
  'a',
  'Each letter is shifted forward by +2: D(+2)=F, O(+2)=Q, C(+2)=E, T(+2)=V, O(+2)=Q, R(+2)=T. For PATIENT: P(+2)=R, A(+2)=C, T(+2)=V, I(+2)=K, E(+2)=G, N(+2)=P, T(+2)=V => RCVKGPV.',
  'प्रत्येक अक्षर में +2 जोड़ा गया है: P(+2)=R, A(+2)=C, T(+2)=V, I(+2)=K, E(+2)=G, N(+2)=P, T(+2)=V => RCVKGPV।'
),
(
  'ssc-cgl-2026-mock-02', 53, 'Section I', 'General Intelligence and Reasoning',
  'A is the father of B. C is the brother of A. F is the sister of B. If M is the father of A, then establish the relationship between F and C.',
  'A, B का पिता है। C, A का भाई है। F, B की बहन है। यदि M, A का पिता है, तो F और C के बीच क्या संबंध है?',
  'Daughter and Father', 'Niece and Uncle', 'Sister and Brother', 'Granddaughter and Grandfather',
  'पुत्री और पिता', 'भतीजी और चाचा (Niece and Uncle)', 'बहन और भाई', 'पोती और दादा',
  'b',
  'A is the father of B and F. C is the brother of A. Therefore, C is the paternal uncle of F, and F is the niece of C.',
  'A, F का पिता है और C, A का भाई है। अतः C, F का चाचा है और F, C की भतीजी है।'
),
(
  'ssc-cgl-2026-mock-02', 54, 'Section I', 'General Intelligence and Reasoning',
  'Statements: All planets are stars. No star is a moon. Conclusions: I. Some moons are planets. II. No planet is a moon.',
  'कथन: सभी ग्रह तारे हैं। कोई तारा चंद्रमा नहीं है। निष्कर्ष: I. कुछ चंद्रमा ग्रह हैं। II. कोई ग्रह चंद्रमा नहीं है।',
  'Only I follows', 'Only II follows', 'Both follow', 'Neither follows',
  'केवल निष्कर्ष I अनुसरण करता है', 'केवल निष्कर्ष II अनुसरण करता है', 'दोनों अनुसरण करते हैं', 'कोई अनुसरण नहीं करता',
  'b',
  'Planets are entirely inside Stars. Stars have zero overlap with Moons. Therefore, Planets have zero overlap with Moons. Conclusion II is definitively true.',
  'सभी ग्रह तारों के भीतर हैं और कोई तारा चंद्रमा नहीं है => कोई ग्रह भी चंद्रमा नहीं हो सकता। केवल निष्कर्ष II अनुसरण करता है।'
),
(
  'ssc-cgl-2026-mock-02', 55, 'Section I', 'General Intelligence and Reasoning',
  'If 1st January 2024 was a Monday, what day of the week will be 31st December 2024?',
  'यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को सप्ताह का कौन सा दिन होगा?',
  'Monday', 'Tuesday', 'Wednesday', 'Sunday',
  'सोमवार', 'मंगलवार', 'बुधवार', 'रविवार',
  'b',
  '2024 is a leap year (366 days). In a leap year, the last day of the year is one day ahead of the first day: Monday + 1 day = Tuesday.',
  '2024 एक लीप वर्ष है (366 दिन)। लीप वर्ष में वर्ष का अंतिम दिन पहले दिन से 1 दिन आगे होता है: सोमवार + 1 = मंगलवार।'
),
(
  'ssc-cgl-2026-mock-02', 56, 'Section I', 'General Intelligence and Reasoning',
  'A clock shows 8:20. What is the reflex angle between the hour and minute hands?',
  'एक घड़ी में 8:20 बजे हैं। घंटे और मिनट की सुइयों के बीच वृहत कोण (Reflex Angle) क्या होगा?',
  '130°', '140°', '230°', '240°',
  '130°', '140°', '230°', '240°',
  'c',
  'Internal angle θ = |30(8) - 5.5(20)| = |240 - 110| = 130°. Reflex angle = 360° - 130° = 230°.',
  'आंतरिक कोण = |30(8) - 5.5(20)| = 130°। वृहत कोण = 360° - 130° = 230°।'
),
(
  'ssc-cgl-2026-mock-02', 57, 'Section I', 'General Intelligence and Reasoning',
  'Pointing to a photograph, a man says, "The lady in the photograph is my nephew''s maternal grandmother." How is the lady in the photograph related to the man''s sister who has no other sister?',
  'एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, "तस्वीर में दिख रही महिला मेरे भांजे की नानी है।" वह महिला उस व्यक्ति की बहन (जिसकी कोई अन्य बहन नहीं है) से किस प्रकार संबंधित है?',
  'Mother', 'Mother-in-law', 'Aunt', 'Sister-in-law',
  'माता (Mother)', 'सास', 'मौसी / चाची', 'भाभी',
  'a',
  'The man''s nephew is his sister''s son. The nephew''s maternal grandmother is the mother of the nephew''s mother (the man''s sister). Thus, the lady is the mother of the sister.',
  'भांजे की नानी = बहन की माता। अतः वह महिला उसकी बहन की माँ है।'
),
(
  'ssc-cgl-2026-mock-02', 58, 'Section I', 'General Intelligence and Reasoning',
  'Select the related number: 68 : 130 :: 222 : ?',
  'संबंधित संख्या का चयन कीजिए: 68 : 130 :: 222 : ?',
  '345', '350', '355', '360',
  '345', '350', '355', '360',
  'b',
  'Pattern: n³ + n. 4³ + 4 = 68; 5³ + 5 = 130; 6³ + 6 = 222; 7³ + 7 = 343 + 7 = 350.',
  'पैटर्न: n³ + n। 4³+4=68; 5³+5=130; 6³+6=222; 7³+7 = 343 + 7 = 350।'
),
(
  'ssc-cgl-2026-mock-02', 59, 'Section I', 'General Intelligence and Reasoning',
  'Six persons—A, B, C, D, E, and F—are sitting around a circular table facing the center. B is sitting between A and C. E is sitting between D and F. D is sitting to the immediate left of A. Who is sitting opposite to B?',
  'छह व्यक्ति—A, B, C, D, E और F—एक गोलाकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। B, A और C के बीच बैठा है। E, D और F के बीच बैठा है। D, A के ठीक बाईं ओर बैठा है। B के विपरीत कौन बैठा है?',
  'D', 'E', 'F', 'C',
  'D', 'E', 'F', 'C',
  'b',
  'Arranging positions clockwise: Seat 1: A, Seat 2: D (immediate left of A), Seat 3: E, Seat 4: F (E between D and F), Seat 5: C, Seat 6: B (between A and C). The person opposite to B (seat 6) is E (seat 3).',
  'क्रम: A के बाईं ओर D, फिर E, F, C, B। B के ठीक विपरीत E बैठा है।'
),
(
  'ssc-cgl-2026-mock-02', 60, 'Section I', 'General Intelligence and Reasoning',
  'Select the odd pair out:',
  'विषम युग्म का चयन कीजिए:',
  '144, 12', '324, 18', '441, 21', '539, 23',
  '144, 12', '324, 18', '441, 21', '539, 23',
  'd',
  '12² = 144, 18² = 324, 21² = 441. But 23² = 529, not 539.',
  '12²=144, 18²=324, 21²=441। परंतु 23² = 529 होता है (539 नहीं)।'
),
(
  'ssc-cgl-2026-mock-02', 61, 'Section I', 'General Intelligence and Reasoning',
  'If ''A + B'' means A is the brother of B; ''A - B'' means A is the sister of B; ''A × B'' means A is the father of B. Which of the following means that C is the son of M?',
  'यदि ''A + B'' का अर्थ है A, B का भाई है; ''A - B'' का अर्थ है A, B की बहन है; ''A × B'' का अर्थ है A, B का पिता है। निम्नलिखित में से किसका अर्थ है कि C, M का पुत्र है?',
  'M - N × C + F', 'F - C + N × M', 'M × N - C + F', 'M × C + N - F',
  'M - N × C + F', 'F - C + N × M', 'M × N - C + F', 'M × C + N - F',
  'd',
  'In (d): M × C => M is father of C. C + N => C is brother of N (so C is male). Thus, C is the son of M.',
  'विकल्प (d) में: M, C का पिता है और C, N का भाई है (अर्थात C पुरुष है)। अतः C, M का पुत्र है।'
),
(
  'ssc-cgl-2026-mock-02', 62, 'Section I', 'General Intelligence and Reasoning',
  'A man walks 5 km towards South, takes a right turn and walks 3 km. He then takes a left turn and walks 5 km. In which direction is he now from the starting point?',
  'एक व्यक्ति दक्षिण की ओर 5 किमी चलता है, दाईं ओर मुड़कर 3 किमी चलता है। फिर वह बाईं ओर मुड़कर 5 किमी चलता है। अब वह प्रारंभिक बिंदु से किस दिशा में है?',
  'South', 'South-West', 'South-East', 'West',
  'दक्षिण', 'दक्षिण-पश्चिम (South-West)', 'दक्षिण-पूर्व', 'पश्चिम',
  'b',
  'Net displacement: 5 km South, 3 km West (right turn), 5 km South (left turn) = 10 km South and 3 km West => South-West direction.',
  'कुल विस्थापन: 10 किमी दक्षिण और 3 किमी पश्चिम => दक्षिण-पश्चिम दिशा।'
),
(
  'ssc-cgl-2026-mock-02', 63, 'Section II', 'General Awareness',
  'Which atmospheric force is strictly responsible for preventing the formation of tropical cyclones within 5 degrees of the equator?',
  'भूमध्य रेखा के 5 डिग्री के भीतर उष्णकटिबंधीय चक्रवातों के निर्माण को रोकने के लिए कौन सा वायुमंडलीय बल उत्तरदायी है?',
  'Friction force', 'Centripetal force', 'Coriolis force', 'Pressure gradient force',
  'घर्षण बल', 'अभिकेंद्रीय बल', 'कोरिओलिस बल (Coriolis force)', 'दाब प्रवणता बल',
  'c',
  'The Coriolis force is zero at the equator (since sin 0° = 0). Without the deflecting Coriolis force, air rushes straight to fill low pressure centers rather than forming a cyclonic vortex.',
  'भूमध्य रेखा पर कोरिओलिस बल शून्य होता है, जिससे वायु घूमकर चक्रवात का रूप नहीं ले पाती।'
),
(
  'ssc-cgl-2026-mock-02', 64, 'Section II', 'General Awareness',
  'The boundary zone between two distinct ecosystems often exhibits greater species diversity and density than either adjacent ecosystem. This phenomenon is known as:',
  'दो अलग-अलग पारिस्थितिक तंत्रों के बीच का संक्रमण क्षेत्र प्रायः दोनों से अधिक प्रजाति विविधता प्रदर्शित करता है। इस घटना को क्या कहा जाता है?',
  'The Edge Effect', 'Ecological Succession', 'Niche Differentiation', 'Biomagnification',
  'कोर प्रभाव (The Edge Effect)', 'पारिस्थितिक उत्तराधिकार', 'आवास विभेदन', 'जैव आवर्धन',
  'a',
  'In an ecotone (transition zone), the increase in species richness and population density is termed the ''Edge Effect''.',
  'इकोटोन (संक्रमण क्षेत्र) में प्रजातियों की सघनता और विविधता में वृद्धि को ''कोर प्रभाव'' (Edge Effect) कहा जाता है।'
),
(
  'ssc-cgl-2026-mock-02', 65, 'Section II', 'General Awareness',
  'Under the Indian Constitution, the power to issue writs for the enforcement of Fundamental Rights is granted to:',
  'भारतीय संविधान के तहत मौलिक अधिकारों के प्रवर्तन के लिए रिट जारी करने की शक्ति किसे प्राप्त है?',
  'The Supreme Court only (Article 32)', 'High Courts only (Article 226)', 'Both the Supreme Court and High Courts', 'Parliament',
  'केवल सर्वोच्च न्यायालय (अनुच्छेद 32)', 'केवल उच्च न्यायालय (अनुच्छेद 226)', 'सर्वोच्च न्यायालय और उच्च न्यायालय दोनों', 'संसद',
  'c',
  'Article 32 empowers the Supreme Court and Article 226 empowers High Courts to issue writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari) to enforce fundamental rights.',
  'अनुच्छेद 32 के तहत सर्वोच्च न्यायालय और अनुच्छेद 226 के तहत उच्च न्यायालय दोनों को रिट जारी करने का अधिकार है।'
),
(
  'ssc-cgl-2026-mock-02', 66, 'Section II', 'General Awareness',
  'The Agulhas Current, an ocean current that significantly impacts regional climate, flows in which body of water?',
  'अगुल्हास धारा (Agulhas Current), जो क्षेत्रीय जलवायु को प्रभावित करती है, किस महासागर में बहती है?',
  'North Atlantic Ocean', 'Southwestern Indian Ocean', 'Eastern Pacific Ocean', 'Southern Ocean',
  'उत्तरी अटलांटिक महासागर', 'दक्षिण-पश्चिमी हिंद महासागर', 'पूर्वी प्रशांत महासागर', 'दक्षिणी महासागर',
  'b',
  'The Agulhas Current is a warm western boundary current of the Southwestern Indian Ocean, flowing down the east coast of southern Africa.',
  'अगुल्हास धारा दक्षिण-पश्चिमी हिंद महासागर में दक्षिण अफ्रीका के पूर्वी तट के साथ बहने वाली एक गर्म जलधारा है।'
),
(
  'ssc-cgl-2026-mock-02', 67, 'Section II', 'General Awareness',
  'The "Blood and Iron" policy in the Delhi Sultanate, characterized by severe autocracy and ruthless suppression of rebellions, was initiated by:',
  'दिल्ली सल्तनत में विद्रोहियों के कठोर दमन के लिए "रक्त और लौह" की नीति किसने शुरू की थी?',
  'Alauddin Khalji', 'Ghiyas ud din Balban', 'Iltutmish', 'Muhammad bin Tughlaq',
  'अलाउद्दीन खिलजी', 'गयासुद्दीन बलबन', 'इल्तुतमिश', 'मोहम्मद बिन तुगलक',
  'b',
  'Ghiyasuddin Balban instituted the ruthless ''Blood and Iron'' policy to crush the Chahalgani nobility, Mewati raiders, and establish royal majesty.',
  'बलबन ने सुल्तान की प्रतिष्ठा स्थापित करने और मेवातियों तथा विद्रोही सरदारों को कुचलने के लिए ''रक्त और लौह'' की नीति अपनाई।'
),
(
  'ssc-cgl-2026-mock-02', 68, 'Section II', 'General Awareness',
  'Which optical phenomenon dictates that light traveling from a denser to a rarer medium completely reflects back if the angle of incidence exceeds the critical angle?',
  'कौन सी प्रकाशीय परिघटना यह निर्धारित करती है कि सघन से विरल माध्यम में जाने वाला प्रकाश क्रांतिक कोण से अधिक आपतन कोण होने पर पूर्णतः परावर्तित हो जाता है?',
  'Diffraction', 'Dispersion', 'Total Internal Reflection', 'Refraction',
  'विवर्तन', 'विक्षेपण', 'पूर्ण आंतरिक परावर्तन (Total Internal Reflection)', 'अपवर्तन',
  'c',
  'Total Internal Reflection (TIR) occurs when the angle of incidence in the denser medium is greater than the critical angle, utilized in fiber optic cables and mirages.',
  'जब सघन माध्यम में आपतन कोण क्रांतिक कोण से अधिक हो जाता है, तो प्रकाश पूरी तरह परावर्तित हो जाता है, जिसे पूर्ण आंतरिक परावर्तन कहते हैं।'
),
(
  'ssc-cgl-2026-mock-02', 69, 'Section II', 'General Awareness',
  'In the mammalian endocrine system, which gland is colloquially known as the "Master Gland" due to its role in regulating other endocrine organs?',
  'स्तनधारियों के अंतःस्रावी तंत्र में अन्य ग्रंथियों को नियंत्रित करने के कारण किसे "मास्टर ग्रंथि" कहा जाता है?',
  'Thyroid', 'Adrenal', 'Pituitary', 'Pancreas',
  'थायरॉयड', 'अधिवृक्क (Adrenal)', 'पीयूष ग्रंथि (Pituitary gland)', 'अग्न्याशय',
  'c',
  'The pituitary gland secretes tropic hormones (TSH, ACTH, FSH, LH) that regulate the activity of other major endocrine glands.',
  'पीयूष ग्रंथि (Pituitary gland) शरीर की अन्य कई अंतःस्रावी ग्रंथियों के स्राव को नियंत्रित करती है।'
),
(
  'ssc-cgl-2026-mock-02', 70, 'Section II', 'General Awareness',
  'The monetary policy tool used by the Reserve Bank of India (RBI) where commercial banks park their excess liquidity with the RBI in exchange for government securities is called:',
  'भारतीय रिजर्व बैंक का वह मौद्रिक नीति उपकरण जिसमें वाणिज्यिक बैंक अपनी अतिरिक्त तरलता आरबीआई के पास जमा करते हैं, क्या कहलाता है?',
  'Repo Rate', 'Reverse Repo Rate', 'Cash Reserve Ratio', 'Marginal Standing Facility',
  'रेपो दर', 'रिवर्स रेपो दर (Reverse Repo Rate)', 'नकद आरक्षित अनुपात', 'सीमांत स्थायी सुविधा',
  'b',
  'Reverse Repo Rate is the rate at which the central bank (RBI) absorbs liquidity by borrowing money from commercial banks.',
  'रिवर्स रेपो दर वह दर है जिस पर आरबीआई वाणिज्यिक बैंकों से अल्पकालिक ऋण लेकर बाजार से अतिरिक्त तरलता सोखता है।'
),
(
  'ssc-cgl-2026-mock-02', 71, 'Section II', 'General Awareness',
  'Atoms of different elements possessing the same mass number but different atomic numbers are known as:',
  'समान द्रव्यमान संख्या लेकिन भिन्न परमाणु क्रमांक वाले तत्वों के परमाणुओं को क्या कहा जाता है?',
  'Isotopes', 'Isotones', 'Isobars', 'Isomers',
  'समस्थानिक (Isotopes)', 'सम-न्यूट्रॉनिक (Isotones)', 'समभारिक (Isobars)', 'समावयवी (Isomers)',
  'c',
  'Isobars are nuclei with the same total number of nucleons (mass number A) but different proton counts (atomic number Z), e.g., ⁴⁰Ar, ⁴⁰K, ⁴⁰Ca.',
  'समान परमाणु भार (द्रव्यमान संख्या) और भिन्न परमाणु क्रमांक वाले परमाणुओं को समभारिक (Isobars) कहते हैं।'
),
(
  'ssc-cgl-2026-mock-02', 72, 'Section II', 'General Awareness',
  'The Brihadisvara Temple at Thanjavur, a UNESCO World Heritage site, is a quintessential example of which style of temple architecture?',
  'तंजावुर का यूनेस्को विश्व धरोहर स्थल बृहदेश्वर मंदिर किस मंदिर स्थापत्य शैली का उत्कृष्ट उदाहरण है?',
  'Nagara', 'Vesara', 'Dravidian', 'Kalinga',
  'नागर शैली', 'वेसर शैली', 'द्रविड़ शैली (Dravidian)', 'कलिंग शैली',
  'c',
  'Built by Chola Emperor Rajaraja I, the Brihadisvara Temple is a prime masterpiece of Chola Dravidian architecture with a towering Vimana and granite masonry.',
  'चोल सम्राट राजराज प्रथम द्वारा निर्मित बृहदेश्वर मंदिर चोल द्रविड़ स्थापत्य शैली का सर्वोत्कृष्ट उदाहरण है।'
),
(
  'ssc-cgl-2026-mock-02', 73, 'Section II', 'General Awareness',
  'The Aditya-L1 mission, India''s first dedicated solar observatory, is positioned in a halo orbit around which Lagrangian point?',
  'भारत की पहली समर्पित सौर वेधशाला आदित्य-एल1 मिशन किस लैग्रेंज बिंदु के चारों ओर एक प्रभामंडल कक्षा (halo orbit) में स्थित है?',
  'L2', 'L1', 'L3', 'L4',
  'L2', 'L1', 'L3', 'L4',
  'b',
  'Aditya-L1 is stationed around the Sun-Earth L1 (Lagrange Point 1), roughly 1.5 million km from Earth, allowing continuous, uninterrupted solar viewing without eclipses.',
  'आदित्य-एल1 पृथ्वी से लगभग 15 लाख किमी दूर सूर्य-पृथ्वी लैग्रेंज बिंदु 1 (L1) के चारों ओर स्थित है।'
),
(
  'ssc-cgl-2026-mock-02', 74, 'Section II', 'General Awareness',
  'Who among the following led the legal defense for the Indian National Army (INA) officers during the historic 1945 Red Fort trials?',
  '1945 के ऐतिहासिक लाल किला मुकदमों के दौरान आज़ाद हिंद फौज (INA) के अधिकारियों की विधिक रक्षा का नेतृत्व किसने किया था?',
  'Jawaharlal Nehru', 'Bhulabhai Desai', 'Mahatma Gandhi', 'Subhas Chandra Bose',
  'जवाहरलाल नेहरू', 'भूलाभाई देसाई (Bhulabhai Desai)', 'महात्मा गांधी', 'सुभाष चंद्र बोस',
  'b',
  'Bhulabhai Desai was the chief counsel leading the INA Defense Committee at the Red Fort trials, assisted by Tej Bahadur Sapru and Jawaharlal Nehru.',
  'लाल किले में INA के अधिकारियों (सहगल, ढिल्लों, शाहनवाज) के बचाव पक्ष के मुख्य वकील भूलाभाई देसाई थे।'
),
(
  'ssc-cgl-2026-mock-02', 75, 'Section II', 'General Awareness',
  'In computer networking and cybersecurity, what does the acronym "HTTPS" stand for?',
  'कंप्यूटर नेटवर्किंग में संक्षिप्त नाम "HTTPS" का पूर्ण रूप क्या है?',
  'Hyper Text Transfer Protocol Secure', 'Hyper Transfer Text Protocol Standard', 'High-Speed Text Transmission Protocol Secure', 'Hyperlink Transfer Technology Protocol System',
  'Hyper Text Transfer Protocol Secure', 'Hyper Transfer Text Protocol Standard', 'High-Speed Text Transmission Protocol Secure', 'Hyperlink Transfer Technology Protocol System',
  'a',
  'HTTPS stands for Hyper Text Transfer Protocol Secure, using TLS/SSL encryption for secure data transfer over the World Wide Web.',
  'HTTPS का पूर्ण रूप ''Hyper Text Transfer Protocol Secure'' है।'
),
(
  'ssc-cgl-2026-mock-02', 76, 'Section III', 'Quantitative Aptitude',
  'What is the maximum value of the expression 3 sin θ + 4 cos θ?',
  'व्यंजक 3 sin θ + 4 cos θ का अधिकतम मान क्या है?',
  '1', '5', '7', '12',
  '1', '5', '7', '12',
  'b',
  'Maximum value of a sin θ + b cos θ = √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = 5.',
  'a sin θ + b cos θ का अधिकतम मान = √(a² + b²) = √(3² + 4²) = 5।'
),
(
  'ssc-cgl-2026-mock-02', 77, 'Section III', 'Quantitative Aptitude',
  'If x + 1/x = 5, find the value of x³ + 1/x³.',
  'यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान ज्ञात कीजिए।',
  '110', '125', '140', '115',
  '110', '125', '140', '115',
  'a',
  'x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x) = 5³ - 3(5) = 125 - 15 = 110.',
  'x³ + 1/x³ = 5³ - 3(5) = 125 - 15 = 110।'
),
(
  'ssc-cgl-2026-mock-02', 78, 'Section III', 'Quantitative Aptitude',
  'The difference between the Compound Interest and Simple Interest on a sum for 3 years at 10% per annum is ₹31. What is the principal sum?',
  'किसी धनराशि पर 10% वार्षिक दर से 3 वर्ष के चक्रवृद्धि ब्याज और साधारण ब्याज का अंतर ₹31 है। मूलधन क्या है?',
  '₹1,000', '₹1,500', '₹2,000', '₹3,100',
  '₹1,000', '₹1,500', '₹2,000', '₹3,100',
  'a',
  '3-year difference formula: D = P * (R/100)² * (300 + R)/100 => 31 = P * (10/100)² * (310/100) => 31 = P * 0.01 * 3.1 => 31 = P * 0.031 => P = ₹1,000.',
  '3 वर्ष का अंतर = P * (R/100)² * (300 + R)/100 => 31 = P * (1/100) * (31/10) => P = ₹1,000।'
),
(
  'ssc-cgl-2026-mock-02', 79, 'Section III', 'Quantitative Aptitude',
  'A dishonest dealer professes to sell his goods at cost price but uses a false weight of 800 grams instead of a 1 kilogram weight. What is his profit percentage?',
  'एक बेईमान व्यापारी क्रय मूल्य पर माल बेचने का दावा करता है लेकिन 1 किग्रा के स्थान पर 800 ग्राम के गलत बाट का उपयोग करता है। उसका लाभ प्रतिशत क्या है?',
  '20%', '25%', '15%', '30%',
  '20%', '25%', '15%', '30%',
  'b',
  'Profit% = [Error / (True Weight - Error)] * 100 = [200 / 800] * 100 = (1/4) * 100 = 25%.',
  'लाभ% = [त्रुटि / (सत्य मान - त्रुटि)] * 100 = [200 / 800] * 100 = 25%।'
),
(
  'ssc-cgl-2026-mock-02', 80, 'Section III', 'Quantitative Aptitude',
  'A train 150 m long is running at a speed of 90 km/h. How long will it take to cross a railway bridge 300 m long?',
  '150 मीटर लंबी एक ट्रेन 90 किमी/घंटा की गति से चल रही है। 300 मीटर लंबे रेलवे पुल को पार करने में इसे कितना समय लगेगा?',
  '12 seconds', '15 seconds', '18 seconds', '20 seconds',
  '12 सेकंड', '15 सेकंड', '18 सेकंड', '20 सेकंड',
  'c',
  'Total distance = 150 + 300 = 450 m. Speed = 90 * (5/18) = 25 m/s. Time = 450 / 25 = 18 seconds.',
  'कुल दूरी = 150 + 300 = 450 मीटर। चाल = 90 * (5/18) = 25 मी/से। समय = 450 / 25 = 18 सेकंड।'
),
(
  'ssc-cgl-2026-mock-02', 81, 'Section III', 'Quantitative Aptitude',
  'ABCD is a cyclic quadrilateral such that ∠A = (4x + 20)° and opposite angle ∠C = (3x - 15)°. Find the value of x.',
  'ABCD एक चक्रीय चतुर्भुज है जिसमें ∠A = (4x + 20)° और सम्मुख कोण ∠C = (3x - 15)° है। x का मान ज्ञात कीजिए।',
  '25', '30', '35', '40',
  '25', '30', '35', '40',
  'a',
  'Opposite angles of a cyclic quadrilateral sum to 180°: (4x + 20) + (3x - 15) = 180 => 7x + 5 = 180 => 7x = 175 => x = 25.',
  'चक्रीय चतुर्भुज के सम्मुख कोणों का योग 180° होता है: 7x + 5 = 180 => 7x = 175 => x = 25।'
),
(
  'ssc-cgl-2026-mock-02', 82, 'Section III', 'Quantitative Aptitude',
  'A and B can do a piece of work in 12 days and 18 days respectively. If they work on alternate days beginning with A, in how many days will the work be completed?',
  'A और B एक कार्य को क्रमशः 12 दिन और 18 दिन में कर सकते हैं। यदि वे A से शुरू करके एकांतर दिनों में कार्य करते हैं, तो कार्य कितने दिनों में पूरा होगा?',
  '14 days', '14.5 days', '14.33 days', '15 days',
  '14 दिन', '14.5 दिन', '14.33 दिन (14 1/3)', '15 दिन',
  'c',
  'Total work = 36 units. Rate A = 3, Rate B = 2. A 2-day cycle produces 5 units. In 7 cycles (14 days), 35 units are done. Remaining 1 unit is done by A on Day 15 in 1/3 day. Total = 14 1/3 ≈ 14.33 days.',
  'कुल कार्य = 36। 2 दिन में कार्य = 5 इकाइयाँ। 14 दिन में 35 इकाइयाँ। शेष 1 इकाई A द्वारा 1/3 दिन में की जाएगी। कुल समय = 14.33 दिन।'
),
(
  'ssc-cgl-2026-mock-02', 83, 'Section III', 'Quantitative Aptitude',
  'Find the remainder when 17²⁰⁰ is divided by 18.',
  '17²⁰⁰ को 18 से विभाजित करने पर शेषफल ज्ञात कीजिए।',
  '1', '17', '16', '0',
  '1', '17', '16', '0',
  'a',
  '17 ≡ -1 (mod 18). Therefore, 17²⁰⁰ ≡ (-1)²⁰⁰ ≡ 1 (mod 18). The remainder is 1.',
  '17 = 18 - 1 => (-1)²⁰⁰ = 1। अतः शेषफल 1 होगा।'
),
(
  'ssc-cgl-2026-mock-02', 84, 'Section III', 'Quantitative Aptitude',
  'The ratio of the volumes of two right circular cones is 2 : 3 and the ratio of their base radii is 1 : 2. What is the ratio of their heights?',
  'दो लंब वृत्तीय शंकुओं के आयतन का अनुपात 2 : 3 है और उनकी आधार त्रिज्याओं का अनुपात 1 : 2 है। उनकी ऊँचाइयों का अनुपात क्या है?',
  '8 : 3', '4 : 3', '3 : 8', '3 : 4',
  '8 : 3', '4 : 3', '3 : 8', '3 : 4',
  'a',
  'V₁/V₂ = (r₁/r₂)² * (h₁/h₂) => 2/3 = (1/2)² * (h₁/h₂) => 2/3 = (1/4) * (h₁/h₂) => h₁/h₂ = (2/3) * 4 = 8/3.',
  'आयतन = (1/3)πr²h => 2/3 = (1/4) * (h₁/h₂) => h₁/h₂ = 8/3।'
),
(
  'ssc-cgl-2026-mock-02', 85, 'Section III', 'Quantitative Aptitude',
  'In an election between two candidates, one candidate secured 55% of the total valid votes. 20% of the total votes polled were declared invalid. If the total number of votes polled was 7,500, what was the number of valid votes secured by the other candidate?',
  'दो उम्मीदवारों के चुनाव में एक को कुल वैध मतों का 55% मिला। 20% मत अमान्य घोषित हुए। यदि कुल 7,500 मत पड़े, तो दूसरे उम्मीदवार को कितने वैध मत मिले?',
  '2,700', '2,900', '3,000', '3,100',
  '2,700', '2,900', '3,000', '3,100',
  'a',
  'Valid votes = 80% of 7500 = 6000. Other candidate secured 100% - 55% = 45% of valid votes = 0.45 * 6000 = 2,700 votes.',
  'वैध मत = 7500 का 80% = 6000। दूसरे उम्मीदवार के मत = 6000 का 45% = 2,700।'
),
(
  'ssc-cgl-2026-mock-02', 86, 'Section III', 'Quantitative Aptitude',
  'A batsman has a certain average of runs for 11 innings. In the 12th inning, he makes a score of 90 runs, thereby increasing his average by 5 runs. What is his average after the 12th inning?',
  'एक बल्लेबाज का 11 पारियों में एक निश्चित औसत है। 12वीं पारी में वह 90 रन बनाता है, जिससे उसका औसत 5 रन बढ़ जाता है। 12वीं पारी के बाद उसका नया औसत क्या है?',
  '30', '35', '40', '45',
  '30', '35', '40', '45',
  'b',
  'Let previous average be x. Total runs = 11x. In 12th inning: (11x + 90) / 12 = x + 5 => 11x + 90 = 12x + 60 => x = 30. New average = 30 + 5 = 35.',
  'पुराना औसत = 90 - (12 * 5) = 30। 12वीं पारी के बाद नया औसत = 30 + 5 = 35।'
),
(
  'ssc-cgl-2026-mock-02', 87, 'Section III', 'Quantitative Aptitude',
  'A pie chart represents the monthly expenses of a family. If the total monthly income is ₹48,000 and the central angle of the sector representing food expenses is 120°, what is the expenditure on food?',
  'एक पाई चार्ट एक परिवार के मासिक खर्च को दर्शाता है। यदि कुल आय ₹48,000 है और भोजन के क्षेत्र का केंद्रीय कोण 120° है, तो भोजन पर खर्च कितना है?',
  '₹12,000', '₹14,000', '₹16,000', '₹18,000',
  '₹12,000', '₹14,000', '₹16,000', '₹18,000',
  'c',
  'Fraction = 120° / 360° = 1/3. Expenditure = (1/3) * ₹48,000 = ₹16,000.',
  'भोजन पर व्यय = (120° / 360°) * 48,000 = 1/3 * 48,000 = ₹16,000।'
),
(
  'ssc-cgl-2026-mock-02', 88, 'Section IV', 'English Comprehension',
  'Identify the grammatical error in the sentence: Neither the principal (A) / nor the teachers (B) / was present (C) / at the annual function. (D)',
  'वाक्य में व्याकरणिक त्रुटि पहचानिए: Neither the principal (A) / nor the teachers (B) / was present (C) / at the annual function. (D)',
  'A', 'B', 'C', 'No error',
  'भाग A', 'भाग B', 'भाग C', 'कोई त्रुटि नहीं',
  'c',
  'Proximity rule: With ''Neither ... nor ...'', the verb agrees with the subject closest to it. ''Teachers'' is plural, so it must be ''were present'' instead of ''was present''.',
  '''Neither... nor'' में क्रिया निकटतम कर्ता (''teachers'' - बहुवचन) के अनुसार होनी चाहिए। अतः ''was'' के स्थान पर ''were'' आएगा।'
),
(
  'ssc-cgl-2026-mock-02', 89, 'Section IV', 'English Comprehension',
  'Select the most appropriate synonym for the word: OBFUSCATE',
  'दिए गए शब्द का सबसे उपयुक्त समानार्थी (Synonym) चुनिए: OBFUSCATE',
  'Clarify', 'Bewilder', 'Illuminate', 'Terminate',
  'Clarify', 'Bewilder', 'Illuminate', 'Terminate',
  'b',
  '''Obfuscate'' means to deliberately make something unclear or difficult to understand. ''Bewilder'' (to confuse or baffle) is the closest synonym.',
  '''Obfuscate'' का अर्थ अस्पष्ट या भ्रमित करना है। इसका समानार्थी ''Bewilder'' है।'
),
(
  'ssc-cgl-2026-mock-02', 90, 'Section IV', 'English Comprehension',
  'Choose the correct meaning of the idiom: "To bite the bullet"',
  'मुहावरे का सही अर्थ चुनिए: "To bite the bullet"',
  'To start a war', 'To endure a painful or difficult situation with courage', 'To make a severe error in judgment', 'To physically attack an enemy',
  'युद्ध शुरू करना', 'कठिन या अप्रिय परिस्थिति का साहसपूर्वक सामना करना', 'गंभीर निर्णय त्रुटि करना', 'हमला करना',
  'b',
  '''To bite the bullet'' means to face a grim, painful, or inevitable situation bravely and without hesitation.',
  'इसका अर्थ किसी कठिन या अप्रिय परिस्थिति को हिम्मत के साथ स्वीकार करना और सहना है।'
),
(
  'ssc-cgl-2026-mock-02', 91, 'Section IV', 'English Comprehension',
  'Change the voice: "The government must protect environmental resources."',
  'Voice बदलिए: "The government must protect environmental resources."',
  'Environmental resources must protected by the government.', 'Environmental resources must be protected by the government.', 'Environmental resources are protected by the government.', 'Environmental resources have to protect by the government.',
  'Environmental resources must protected by the government.', 'Environmental resources must be protected by the government.', 'Environmental resources are protected by the government.', 'Environmental resources have to protect by the government.',
  'b',
  'Modal passive: Modal + V1 (''must protect'') changes to Modal + be + V3 (''must be protected'').',
  'Modal क्रिया का Passive: Modal + be + V3 होता है => ''must be protected''.'
),
(
  'ssc-cgl-2026-mock-02', 92, 'Section IV', 'English Comprehension',
  'Change the speech: He said to her, "Why are you looking so sad?"',
  'Speech बदलिए: He said to her, "Why are you looking so sad?"',
  'He asked her why she was looking so sad.', 'He asked her why was she looking so sad.', 'He told her why she is looking so sad.', 'He asked her that why she was looking so sad.',
  'He asked her why she was looking so sad.', 'He asked her why was she looking so sad.', 'He told her why she is looking so sad.', 'He asked her that why she was looking so sad.',
  'a',
  'In indirect interrogative sentences with Wh- words, the structure becomes assertive (Subject + Verb: ''why she was looking''), and no conjunction ''that'' is used.',
  'Wh- प्रश्नों के Indirect Speech में वाक्य साधारण (Assertive: why she was) बन जाता है।'
),
(
  'ssc-cgl-2026-mock-02', 93, 'Section IV', 'English Comprehension',
  'Select the most appropriate antonym for the word: SYCOPHANT',
  'दिए गए शब्द का सबसे उपयुक्त विलोम (Antonym) चुनिए: SYCOPHANT',
  'Flatterer', 'Parasite', 'Independent', 'Subservient',
  'Flatterer', 'Parasite', 'Independent', 'Subservient',
  'c',
  'A ''Sycophant'' is a servile flatterer who acts obsequiously toward powerful figures. The opposite is an ''Independent'' thinker.',
  '''Sycophant'' (चापलूस) का विलोम ''Independent'' (आत्मनिर्भर/स्वतंत्र) है।'
),
(
  'ssc-cgl-2026-mock-02', 94, 'Section IV', 'English Comprehension',
  'Choose the correct one-word substitution for: "A person who attacks cherished beliefs or traditional institutions"',
  'अनेक शब्दों के लिए एक शब्द: "A person who attacks cherished beliefs or traditional institutions"',
  'Philanthropist', 'Iconoclast', 'Misanthrope', 'Agnostic',
  'Philanthropist', 'Iconoclast (रूढ़िभंजक)', 'Misanthrope', 'Agnostic',
  'b',
  'An ''Iconoclast'' (from Greek eikōn ''image'' + klan ''to break'') is someone who attacks established or venerated beliefs and conventions.',
  'पारंपरिक मान्यताओं और प्रतीकों पर प्रहार करने वाले व्यक्ति को ''Iconoclast'' (रूढ़िभंजक) कहा जाता है।'
),
(
  'ssc-cgl-2026-mock-02', 95, 'Section IV', 'English Comprehension',
  'Choose the correctly spelled word:',
  'सही वर्तनी वाले शब्द का चयन कीजिए:',
  'Acomodate', 'Accomodate', 'Accommodate', 'Acommodate',
  'Acomodate', 'Accomodate', 'Accommodate', 'Acommodate',
  'c',
  'The correct spelling is A-C-C-O-M-M-O-D-A-T-E (with two ''c''s and two ''m''s).',
  'सही वर्तनी ''Accommodate'' है (दो ''c'' और दो ''m'')।'
),
(
  'ssc-cgl-2026-mock-02', 96, 'Section IV', 'English Comprehension',
  'Rearrange the sentences to form a coherent paragraph: (P) However, many people ignore this fundamental truth. (Q) Health is universally acknowledged as the greatest wealth. (R) They chase money at the expense of their physical well-being. (S) Consequently, they end up spending their wealth to recover their health.',
  'सार्थक अनुच्छेद बनाने के लिए वाक्यों को पुनर्व्यवस्थित कीजिए: (P) However, many people ignore... (Q) Health is universally acknowledged... (R) They chase money... (S) Consequently, they end up spending...',
  'Q, P, R, S', 'Q, R, P, S', 'P, Q, R, S', 'R, S, Q, P',
  'Q, P, R, S', 'Q, R, P, S', 'P, Q, R, S', 'R, S, Q, P',
  'a',
  'Flow: Universal premise (Q) -> Contradiction with ''However'' (P) -> Behavior description (R) -> Consequent irony (S). Correct sequence: Q-P-R-S.',
  'तार्किक क्रम: मुख्य विचार (Q) -> विरोधाभास (P) -> कारण (R) -> परिणाम (S)। सही क्रम: Q, P, R, S।'
),
(
  'ssc-cgl-2026-mock-02', 97, 'Section IV', 'English Comprehension',
  'Fill in the blank with appropriate preposition: She has an innate aptitude _______ mathematics.',
  'उपयुक्त preposition से रिक्त स्थान भरिए: She has an innate aptitude _______ mathematics.',
  'for', 'with', 'in', 'about',
  'for', 'with', 'in', 'about',
  'a',
  'The noun ''aptitude'' (natural talent or ability) takes the fixed preposition ''for''.',
  '''Aptitude'' के साथ हमेशा preposition ''for'' का प्रयोग होता है।'
),
(
  'ssc-cgl-2026-mock-02', 98, 'Section IV', 'English Comprehension',
  'Identify the grammatical error: Scarcely had the minister started his speech (A) / than the crowd (B) / began to protest loudly. (C) / No error (D)',
  'व्याकरणिक त्रुटि पहचानिए: Scarcely had the minister started his speech (A) / than the crowd (B) / began to protest loudly. (C) / No error (D)',
  'A', 'B', 'C', 'D',
  'भाग A', 'भाग B', 'भाग C', 'भाग D',
  'b',
  'Correlative conjunction rule: ''Scarcely'' and ''Hardly'' are always followed by ''when'', never ''than''. It must be ''when the crowd''.',
  '''Scarcely... when'' का जोड़ा होता है। ''than'' के स्थान पर ''when'' आएगा।'
),
(
  'ssc-cgl-2026-mock-02', 99, 'Section IV', 'English Comprehension',
  'Fill in the blank: The detective''s _______ eye caught the microscopic fiber that cracked the case.',
  'रिक्त स्थान भरिए: The detective''s _______ eye caught the microscopic fiber that cracked the case.',
  'ambiguous', 'lethargic', 'perspicacious', 'obtuse',
  'ambiguous', 'lethargic', 'perspicacious (तीक्ष्णबुद्धि)', 'obtuse',
  'c',
  '''Perspicacious'' means having a ready insight into and keen mental discernment. An observant detective with keen vision requires ''perspicacious''.',
  '''Perspicacious'' का अर्थ तीक्ष्ण या अत्यंत सूक्ष्मदर्शी होता है।'
),
(
  'ssc-cgl-2026-mock-02', 100, 'Section IV', 'English Comprehension',
  'In a reading comprehension passage analyzing economic policy, if the author repeatedly highlights the "unforeseen catastrophic fallout" and the "hasty, ill-conceived implementation" of a law, the primary tone of the passage is:',
  'यदि कोई लेखक किसी नीति के लिए "unforeseen catastrophic fallout" और "hasty, ill-conceived implementation" जैसे शब्दों का प्रयोग करता है, तो गद्यांश का मुख्य स्वर (Tone) क्या है?',
  'Objective', 'Laudatory', 'Scathing', 'Apathetic',
  'वस्तुनिष्ठ (Objective)', 'प्रशंसात्मक (Laudatory)', 'तीखी आलोचनात्मक (Scathing)', 'उदासीन (Apathetic)',
  'c',
  'Words like ''catastrophic'' and ''ill-conceived'' convey strong, biting criticism. The tone is ''Scathing'' (severely critical or harsh).',
  'कठोर और नकारात्मक शब्दावली से स्पष्ट है कि स्वर तीखा और आलोचनात्मक (''Scathing'') है।'
)
ON CONFLICT (test_id, question_number) DO UPDATE
SET section_name = EXCLUDED.section_name,
    section_title = EXCLUDED.section_title,
    question_text = EXCLUDED.question_text,
    question_text_hi = EXCLUDED.question_text_hi,
    option_a = EXCLUDED.option_a,
    option_b = EXCLUDED.option_b,
    option_c = EXCLUDED.option_c,
    option_d = EXCLUDED.option_d,
    option_a_hi = EXCLUDED.option_a_hi,
    option_b_hi = EXCLUDED.option_b_hi,
    option_c_hi = EXCLUDED.option_c_hi,
    option_d_hi = EXCLUDED.option_d_hi,
    correct_option = EXCLUDED.correct_option,
    solution_text = EXCLUDED.solution_text,
    solution_text_hi = EXCLUDED.solution_text_hi;
