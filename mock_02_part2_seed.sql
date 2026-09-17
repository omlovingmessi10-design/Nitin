-- =========================================================================
-- SSC CGL 2026 MOCK TEST 02: PART-2 - General Awareness (Q26 - Q50)
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
  'ssc-cgl-2026-mock-02', 26, 'PART-2', 'General Awareness',
  'Which of the following conditions is structurally essential for the formation of a ''Temperature Inversion'' in the lower atmosphere?',
  'निचले वायुमंडल में ''तापमान व्युत्क्रमण'' (Temperature Inversion) के निर्माण के लिए निम्नलिखित में से कौन सी स्थिति संरचनात्मक रूप से आवश्यक है?',
  'Short summer nights', 'High wind velocity', 'Long winter nights with clear skies', 'Dense cloud cover',
  'छोटी ग्रीष्मकालीन रातें', 'उच्च वायु वेग', 'साफ आसमान के साथ लंबी सर्दियों की रातें', 'घने बादल',
  'c',
  'Long winter nights allow maximum terrestrial radiation cooling, while clear skies permit heat loss into space, making air near ground colder than air aloft.',
  'साफ आसमान और लंबी सर्दियों की रातें तीव्र पार्थिव विकिरण द्वारा धरातल को ठंडा करती हैं, जिससे निचली हवा ऊपर की हवा से अधिक ठंडी हो जाती है।'
),
(
  'ssc-cgl-2026-mock-02', 27, 'PART-2', 'General Awareness',
  'Geostrophic winds flow parallel to straight isobars primarily because of a precise balance between which two forces?',
  'भूविक्षेपी पवनें (Geostrophic winds) सीधे समदाब रेखाओं के समानांतर मुख्य रूप से किन दो बलों के सटीक संतुलन के कारण चलती हैं?',
  'Pressure Gradient Force and Frictional Force', 'Pressure Gradient Force and Coriolis Force', 'Centripetal Force and Coriolis Force', 'Gravitational Force and Frictional Force',
  'दाब प्रवणता बल और घर्षण बल', 'दाब प्रवणता बल और कोरिओलिस बल', 'अभिकेंद्रीय बल और कोरिओलिस बल', 'गुरुत्वाकर्षण बल और घर्षण बल',
  'b',
  'In the upper atmosphere where friction is negligible, the Pressure Gradient Force is exactly balanced by the Coriolis Force, producing geostrophic wind parallel to isobars.',
  'ऊपरी वायुमंडल में घर्षण के अभाव में, दाब प्रवणता बल और कोरिओलिस बल एक दूसरे को संतुलित करते हैं।'
),
(
  'ssc-cgl-2026-mock-02', 28, 'PART-2', 'General Awareness',
  'In modern precision agriculture, when autonomous robots mechanically eliminate weeds in tightly spaced crops, which core technology differentiates between the crop and the weed?',
  'आधुनिक सटीक कृषि में स्वायत्त रोबोटों द्वारा खरपतवार हटाने में फसल और खरपतवार के बीच अंतर करने वाली मुख्य तकनीक कौन सी है?',
  'Ultrasonic distance sensors', 'GPS Telemetry mapping', 'Computer Vision paired with Machine Learning algorithms', 'Soil moisture capacitance probes',
  'अल्ट्रासोनिक दूरी सेंसर', 'जीपीएस टेलीमेट्री मैपिंग', 'मशीन लर्निंग एल्गोरिदम के साथ कंप्यूटर विज़न', 'मृदा नमी धारिता जांच',
  'c',
  'Computer vision cameras feed leaf morphology and color data into machine learning classifiers to distinguish crop leaves from weeds in real time.',
  'कंप्यूटर विज़न और मशीन लर्निंग मॉडल पत्तियों की आकृति और संरचना के आधार पर वास्तविक समय में खरपतवार पहचानते हैं।'
),
(
  'ssc-cgl-2026-mock-02', 29, 'PART-2', 'General Awareness',
  'The term "Dehliwal" referenced in medieval Indian history primarily denotes:',
  'मध्यकालीन भारतीय इतिहास में संदर्भित शब्द "देहलीवाल" मुख्य रूप से किसे दर्शाता है?',
  'A military rank under the Khaljis', 'Silver/copper coins minted by the Tomara dynasty', 'Market inspectors appointed by Alauddin Khalji', 'Revenue collection system of the Lodis',
  'खिलजियों के अधीन एक सैन्य पद', 'तोमर राजपूतों द्वारा ढाले गए सिक्के', 'अलाउद्दीन खिलजी द्वारा नियुक्त बाजार निरीक्षक', 'लोदियों की राजस्व संग्रह प्रणाली',
  'b',
  'Coins minted in Delhi during the Tomara and Chauhan rule were called ''Dehliwal'' and circulated widely across Northern India.',
  'दिल्ली के तोमर और चौहान शासकों द्वारा ढाले गए लोकप्रिय सिक्कों को ''देहलीवाल'' कहा जाता था।'
),
(
  'ssc-cgl-2026-mock-02', 30, 'PART-2', 'General Awareness',
  'Which classical dance form, originally performed by Devadasis in temples and revived by modern scholars, traces its roots to Andhra Pradesh?',
  'कौन सा शास्त्रीय नृत्य रूप, जो मूल रूप से मंदिरों में देवदासियों द्वारा किया जाता था, आंध्र प्रदेश से संबंधित है?',
  'Bharatanatyam', 'Vilasini Natyam', 'Sattriya', 'Mohiniyattam',
  'भरतनाट्यम', 'विलासिनी नाट्यम (Vilasini Natyam)', 'सत्रिया', 'मोहिनीअट्टम',
  'b',
  'Vilasini Natyam is the traditional temple dance of Telugu Devadasis (Vilasinis) in Andhra Pradesh, distinct from Kuchipudi.',
  'विलासिनी नाट्यम आंध्र प्रदेश के मंदिरों की देवदासियों द्वारा की जाने वाली एक पारंपरिक नृत्य शैली है।'
),
(
  'ssc-cgl-2026-mock-02', 31, 'PART-2', 'General Awareness',
  'Under Article 249 of the Indian Constitution, the Parliament can legislate on a subject in the State List if a resolution is passed by:',
  'भारतीय संविधान के अनुच्छेद 249 के तहत संसद राज्य सूची के विषय पर कानून बना सकती है यदि:',
  'The Lok Sabha with a simple majority', 'The Rajya Sabha with a 2/3rd majority of members present and voting', 'Both Houses of Parliament jointly', 'The President via ordinance',
  'लोकसभा साधारण बहुमत से प्रस्ताव पारित करे', 'राज्यसभा उपस्थित और मतदान करने वाले सदस्यों के 2/3 बहुमत से प्रस्ताव पारित करे', 'संसद के दोनों सदन संयुक्त रूप से', 'राष्ट्रपति अध्यादेश जारी करे',
  'b',
  'Article 249 empowers Rajya Sabha (Council of States) to pass a resolution by a two-thirds majority of members present and voting to declare a State List subject of national importance.',
  'अनुच्छेद 249 के अंतर्गत राज्यसभा उपस्थित एवं मतदान करने वाले सदस्यों के 2/3 बहुमत से प्रस्ताव पारित कर संसद को राज्य सूची के विषय पर विधि बनाने का अधिकार दे सकती है।'
),
(
  'ssc-cgl-2026-mock-02', 32, 'PART-2', 'General Awareness',
  'The Production Possibility Frontier (PPF) is an economic curve that illustrates:',
  'उत्पादन संभावना वक्र (PPF) क्या दर्शाता है?',
  'The maximum potential output combinations of two goods given fixed resources and technology', 'The relationship between inflation and unemployment', 'Income inequality within a nation', 'The total tax revenue of a government',
  'निश्चित संसाधनों और तकनीक के साथ दो वस्तुओं के अधिकतम संभावित उत्पादन संयोजन', 'मुद्रास्फीति और बेरोजगारी के बीच संबंध', 'देश के भीतर आय असमानता', 'सरकार का कुल कर राजस्व',
  'a',
  'The PPF visually depicts opportunity cost and resource constraints by showing the trade-offs in producing combinations of two commodities.',
  'PPF दिए गए संसाधनों और तकनीक से उत्पादित की जा सकने वाली दो वस्तुओं के अधिकतम संयोजनों को दर्शाता है।'
),
(
  'ssc-cgl-2026-mock-02', 33, 'PART-2', 'General Awareness',
  'In cellular biology, the Krebs cycle (Citric Acid Cycle), which is essential for aerobic respiration, occurs in the:',
  'कोशिका जीव विज्ञान में, वायवीय श्वसन के लिए आवश्यक क्रेब्स चक्र (Krebs cycle) कहाँ संपन्न होता है?',
  'Cytoplasm', 'Mitochondrial matrix', 'Ribosomes', 'Golgi apparatus',
  'कोशिकाद्रव्य (Cytoplasm)', 'माइटोकॉन्ड्रियल मैट्रिक्स (Mitochondrial matrix)', 'राइबोसोम', 'गॉल्जी उपकरण',
  'b',
  'Glycolysis takes place in the cytoplasm, but the Krebs cycle occurs within the inner mitochondrial matrix where its specific enzymes reside.',
  'ग्लाइकोलाइसिस कोशिकाद्रव्य में होता है, जबकि क्रेब्स चक्र माइटोकॉन्ड्रिया के मैट्रिक्स में संपन्न होता है।'
),
(
  'ssc-cgl-2026-mock-02', 34, 'PART-2', 'General Awareness',
  'The James Webb Space Telescope (JWST) is specifically optimized to observe the universe primarily in which spectrum?',
  'जेम्स वेब स्पेस टेलीस्कोप (JWST) मुख्य रूप से किस स्पेक्ट्रम में ब्रह्मांड का अवलोकन करने के लिए अनुकूलित है?',
  'X-ray', 'Ultraviolet', 'Near-infrared and mid-infrared', 'Microwave',
  'एक्स-रे', 'पराबैंगनी (Ultraviolet)', 'अवरक्त (Near-infrared & Mid-infrared)', 'माइक्रोवेव',
  'c',
  'JWST is optimized for infrared light (NIRCam and MIRI instruments) because light from distant, redshifted galaxies of the early universe is stretched into infrared wavelengths.',
  'JWST को निकट-अवरक्त (Near-infrared) और मध्य-अवरक्त (Mid-infrared) तरंगदैर्ध्य देखने के लिए डिज़ाइन किया गया है।'
),
(
  'ssc-cgl-2026-mock-02', 35, 'PART-2', 'General Awareness',
  'Which soil type is characterized by its ''self-ploughing'' capacity due to deep cracks forming during dry seasons?',
  'किस मृदा की विशेषता शुष्क मौसम में गहरी दरारें पड़ने के कारण इसकी ''स्वयं जुताई'' (Self-ploughing) क्षमता है?',
  'Alluvial Soil', 'Laterite Soil', 'Black Soil (Regur)', 'Red Soil',
  'जलोढ़ मृदा', 'लैटेराइट मृदा', 'काली मृदा (रेगुर)', 'लाल मृदा',
  'c',
  'Black cotton soil (Regur) contains high montmorillonite clay that swells when wet and shrinks drastically when dry, causing deep aeration fissures (''self-ploughing'').',
  'काली मिट्टी (रेगुर) में क्ले की मात्रा अधिक होती है, जो सूखने पर गहरी दरारें बनाती है जिससे प्राकृतिक वातन (aeration) होता है।'
),
(
  'ssc-cgl-2026-mock-02', 36, 'PART-2', 'General Awareness',
  'During the 1991 Economic Reforms in India, the primary factor that resolved the immediate Balance of Payments (BoP) crisis was:',
  'भारत में 1991 के आर्थिक सुधारों के दौरान तत्काल भुगतान संतुलन (BoP) संकट को हल करने वाला प्राथमिक कारक क्या था?',
  'Complete privatization of all public sector banks', 'Rupee devaluation and liberalized trade/capital inflow policies', 'Halting all imports of heavy machinery', 'Transitioning to a purely barter-based foreign trade system',
  'सभी सार्वजनिक बैंकों का निजीकरण', 'रुपये का अवमूल्यन और उदारीकृत व्यापार/पूंजी प्रवाह नीतियां', 'भारी मशीनरी के आयात पर रोक', 'वस्तु विनिमय प्रणाली को अपनाना',
  'b',
  'A two-step rupee devaluation combined with liberalized FDI regulations and IMF credit restored external liquidity and export competitiveness.',
  'रुपये के दो-चरणीय अवमूल्यन और विदेशी निवेश के उदारीकरण से विदेशी मुद्रा भंडार में तेजी से सुधार हुआ।'
),
(
  'ssc-cgl-2026-mock-02', 37, 'PART-2', 'General Awareness',
  'The "Bhagoria" festival, marked by vibrant tribal fairs and community bonding, is celebrated predominantly in which Indian state?',
  'जीवंत मेलों के लिए प्रसिद्ध "भगोरिया" त्योहार मुख्य रूप से किस भारतीय राज्य के जनजातीय समुदायों द्वारा मनाया जाता है?',
  'Jharkhand', 'Madhya Pradesh', 'Odisha', 'Assam',
  'झारखंड', 'मध्य प्रदेश', 'ओडिशा', 'असम',
  'b',
  'Bhagoria is an agricultural spring festival of the Bhil and Bhilala tribal communities in Jhabua, Alirajpur, and Dhar districts of Madhya Pradesh.',
  'भगोरिया मध्य प्रदेश के मालवा-निमाड़ क्षेत्र (झाबुआ, धार) में भील और भिलाला जनजातियों द्वारा होली से पहले मनाया जाने वाला प्रसिद्ध उत्सव है।'
),
(
  'ssc-cgl-2026-mock-02', 38, 'PART-2', 'General Awareness',
  'Which atmospheric force is strictly responsible for preventing the formation of tropical cyclones within 5 degrees of the equator?',
  'भूमध्य रेखा के 5 डिग्री के भीतर उष्णकटिबंधीय चक्रवातों के निर्माण को रोकने के लिए कौन सा वायुमंडलीय बल उत्तरदायी है?',
  'Friction force', 'Centripetal force', 'Coriolis force', 'Pressure gradient force',
  'घर्षण बल', 'अभिकेंद्रीय बल', 'कोरिओलिस बल (Coriolis force)', 'दाब प्रवणता बल',
  'c',
  'The Coriolis force is zero at the equator (since sin 0° = 0). Without the deflecting Coriolis force, air rushes straight to fill low pressure centers rather than forming a cyclonic vortex.',
  'भूमध्य रेखा पर कोरिओलिस बल शून्य होता है, जिससे वायु घूमकर चक्रवात का रूप नहीं ले पाती।'
),
(
  'ssc-cgl-2026-mock-02', 39, 'PART-2', 'General Awareness',
  'The boundary zone between two distinct ecosystems often exhibits greater species diversity and density than either adjacent ecosystem. This phenomenon is known as:',
  'दो अलग-अलग पारिस्थितिक तंत्रों के बीच का संक्रमण क्षेत्र प्रायः दोनों से अधिक प्रजाति विविधता प्रदर्शित करता है। इस घटना को क्या कहा जाता है?',
  'The Edge Effect', 'Ecological Succession', 'Niche Differentiation', 'Biomagnification',
  'कोर प्रभाव (The Edge Effect)', 'पारिस्थितिक उत्तराधिकार', 'आवास विभेदन', 'जैव आवर्धन',
  'a',
  'In an ecotone (transition zone), the increase in species richness and population density is termed the ''Edge Effect''.',
  'इकोटोन (संक्रमण क्षेत्र) में प्रजातियों की सघनता और विविधता में वृद्धि को ''कोर प्रभाव'' (Edge Effect) कहा जाता है।'
),
(
  'ssc-cgl-2026-mock-02', 40, 'PART-2', 'General Awareness',
  'Under the Indian Constitution, the power to issue writs for the enforcement of Fundamental Rights is granted to:',
  'भारतीय संविधान के तहत मौलिक अधिकारों के प्रवर्तन के लिए रिट जारी करने की शक्ति किसे प्राप्त है?',
  'The Supreme Court only (Article 32)', 'High Courts only (Article 226)', 'Both the Supreme Court and High Courts', 'Parliament',
  'केवल सर्वोच्च न्यायालय (अनुच्छेद 32)', 'केवल उच्च न्यायालय (अनुच्छेद 226)', 'सर्वोच्च न्यायालय और उच्च न्यायालय दोनों', 'संसद',
  'c',
  'Article 32 empowers the Supreme Court and Article 226 empowers High Courts to issue writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari) to enforce fundamental rights.',
  'अनुच्छेद 32 के तहत सर्वोच्च न्यायालय और अनुच्छेद 226 के तहत उच्च न्यायालय दोनों को रिट जारी करने का अधिकार है।'
),
(
  'ssc-cgl-2026-mock-02', 41, 'PART-2', 'General Awareness',
  'The Agulhas Current, an ocean current that significantly impacts regional climate, flows in which body of water?',
  'अगुल्हास धारा (Agulhas Current), जो क्षेत्रीय जलवायु को प्रभावित करती है, किस महासागर में बहती है?',
  'North Atlantic Ocean', 'Southwestern Indian Ocean', 'Eastern Pacific Ocean', 'Southern Ocean',
  'उत्तरी अटलांटिक महासागर', 'दक्षिण-पश्चिमी हिंद महासागर', 'पूर्वी प्रशांत महासागर', 'दक्षिणी महासागर',
  'b',
  'The Agulhas Current is a warm western boundary current of the Southwestern Indian Ocean, flowing down the east coast of southern Africa.',
  'अगुल्हास धारा दक्षिण-पश्चिमी हिंद महासागर में दक्षिण अफ्रीका के पूर्वी तट के साथ बहने वाली एक गर्म जलधारा है।'
),
(
  'ssc-cgl-2026-mock-02', 42, 'PART-2', 'General Awareness',
  'The "Blood and Iron" policy in the Delhi Sultanate, characterized by severe autocracy and ruthless suppression of rebellions, was initiated by:',
  'दिल्ली सल्तनत में विद्रोहियों के कठोर दमन के लिए "रक्त और लौह" की नीति किसने शुरू की थी?',
  'Alauddin Khalji', 'Ghiyas ud din Balban', 'Iltutmish', 'Muhammad bin Tughlaq',
  'अलाउद्दीन खिलजी', 'गयासुद्दीन बलबन', 'इल्तुतमिश', 'मोहम्मद बिन तुगलक',
  'b',
  'Ghiyasuddin Balban instituted the ruthless ''Blood and Iron'' policy to crush the Chahalgani nobility, Mewati raiders, and establish royal majesty.',
  'बलबन ने सुल्तान की प्रतिष्ठा स्थापित करने और मेवातियों तथा विद्रोही सरदारों को कुचलने के लिए ''रक्त और लौह'' की नीति अपनाई।'
),
(
  'ssc-cgl-2026-mock-02', 43, 'PART-2', 'General Awareness',
  'Which optical phenomenon dictates that light traveling from a denser to a rarer medium completely reflects back if the angle of incidence exceeds the critical angle?',
  'कौन सी प्रकाशीय परिघटना यह निर्धारित करती है कि सघन से विरल माध्यम में जाने वाला प्रकाश क्रांतिक कोण से अधिक आपतन कोण होने पर पूर्णतः परावर्तित हो जाता है?',
  'Diffraction', 'Dispersion', 'Total Internal Reflection', 'Refraction',
  'विवर्तन', 'विक्षेपण', 'पूर्ण आंतरिक परावर्तन (Total Internal Reflection)', 'अपवर्तन',
  'c',
  'Total Internal Reflection (TIR) occurs when the angle of incidence in the denser medium is greater than the critical angle, utilized in fiber optic cables and mirages.',
  'जब सघन माध्यम में आपतन कोण क्रांतिक कोण से अधिक हो जाता है, तो प्रकाश पूरी तरह परावर्तित हो जाता है, जिसे पूर्ण आंतरिक परावर्तन कहते हैं।'
),
(
  'ssc-cgl-2026-mock-02', 44, 'PART-2', 'General Awareness',
  'In the mammalian endocrine system, which gland is colloquially known as the "Master Gland" due to its role in regulating other endocrine organs?',
  'स्तनधारियों के अंतःस्रावी तंत्र में अन्य ग्रंथियों को नियंत्रित करने के कारण किसे "मास्टर ग्रंथि" कहा जाता है?',
  'Thyroid', 'Adrenal', 'Pituitary', 'Pancreas',
  'थायरॉयड', 'अधिवृक्क (Adrenal)', 'पीयूष ग्रंथि (Pituitary gland)', 'अग्न्याशय',
  'c',
  'The pituitary gland secretes tropic hormones (TSH, ACTH, FSH, LH) that regulate the activity of other major endocrine glands.',
  'पीयूष ग्रंथि (Pituitary gland) शरीर की अन्य कई अंतःस्रावी ग्रंथियों के स्राव को नियंत्रित करती है।'
),
(
  'ssc-cgl-2026-mock-02', 45, 'PART-2', 'General Awareness',
  'The monetary policy tool used by the Reserve Bank of India (RBI) where commercial banks park their excess liquidity with the RBI in exchange for government securities is called:',
  'भारतीय रिजर्व बैंक का वह मौद्रिक नीति उपकरण जिसमें वाणिज्यिक बैंक अपनी अतिरिक्त तरलता आरबीआई के पास जमा करते हैं, क्या कहलाता है?',
  'Repo Rate', 'Reverse Repo Rate', 'Cash Reserve Ratio', 'Marginal Standing Facility',
  'रेपो दर', 'रिवर्स रेपो दर (Reverse Repo Rate)', 'नकद आरक्षित अनुपात', 'सीमांत स्थायी सुविधा',
  'b',
  'Reverse Repo Rate is the rate at which the central bank (RBI) absorbs liquidity by borrowing money from commercial banks.',
  'रिवर्स रेपो दर वह दर है जिस पर आरबीआई वाणिज्यिक बैंकों से अल्पकालिक ऋण लेकर बाजार से अतिरिक्त तरलता सोखता है।'
),
(
  'ssc-cgl-2026-mock-02', 46, 'PART-2', 'General Awareness',
  'Atoms of different elements possessing the same mass number but different atomic numbers are known as:',
  'समान द्रव्यमान संख्या लेकिन भिन्न परमाणु क्रमांक वाले तत्वों के परमाणुओं को क्या कहा जाता है?',
  'Isotopes', 'Isotones', 'Isobars', 'Isomers',
  'समस्थानिक (Isotopes)', 'सम-न्यूट्रॉनिक (Isotones)', 'समभारिक (Isobars)', 'समावयवी (Isomers)',
  'c',
  'Isobars are nuclei with the same total number of nucleons (mass number A) but different proton counts (atomic number Z), e.g., ⁴⁰Ar, ⁴⁰K, ⁴⁰Ca.',
  'समान परमाणु भार (द्रव्यमान संख्या) और भिन्न परमाणु क्रमांक वाले परमाणुओं को समभारिक (Isobars) कहते हैं।'
),
(
  'ssc-cgl-2026-mock-02', 47, 'PART-2', 'General Awareness',
  'The Brihadisvara Temple at Thanjavur, a UNESCO World Heritage site, is a quintessential example of which style of temple architecture?',
  'तंजावुर का यूनेस्को विश्व धरोहर स्थल बृहदेश्वर मंदिर किस मंदिर स्थापत्य शैली का उत्कृष्ट उदाहरण है?',
  'Nagara', 'Vesara', 'Dravidian', 'Kalinga',
  'नागर शैली', 'वेसर शैली', 'द्रविड़ शैली (Dravidian)', 'कलिंग शैली',
  'c',
  'Built by Chola Emperor Rajaraja I, the Brihadisvara Temple is a prime masterpiece of Chola Dravidian architecture with a towering Vimana and granite masonry.',
  'चोल सम्राट राजराज प्रथम द्वारा निर्मित बृहदेश्वर मंदिर चोल द्रविड़ स्थापत्य शैली का सर्वोत्कृष्ट उदाहरण है।'
),
(
  'ssc-cgl-2026-mock-02', 48, 'PART-2', 'General Awareness',
  'The Aditya-L1 mission, India''s first dedicated solar observatory, is positioned in a halo orbit around which Lagrangian point?',
  'भारत की पहली समर्पित सौर वेधशाला आदित्य-एल1 मिशन किस लैग्रेंज बिंदु के चारों ओर एक प्रभामंडल कक्षा (halo orbit) में स्थित है?',
  'L2', 'L1', 'L3', 'L4',
  'L2', 'L1', 'L3', 'L4',
  'b',
  'Aditya-L1 is stationed around the Sun-Earth L1 (Lagrange Point 1), roughly 1.5 million km from Earth, allowing continuous, uninterrupted solar viewing without eclipses.',
  'आदित्य-एल1 पृथ्वी से लगभग 15 लाख किमी दूर सूर्य-पृथ्वी लैग्रेंज बिंदु 1 (L1) के चारों ओर स्थित है।'
),
(
  'ssc-cgl-2026-mock-02', 49, 'PART-2', 'General Awareness',
  'Who among the following led the legal defense for the Indian National Army (INA) officers during the historic 1945 Red Fort trials?',
  '1945 के ऐतिहासिक लाल किला मुकदमों के दौरान आज़ाद हिंद फौज (INA) के अधिकारियों की विधिक रक्षा का नेतृत्व किसने किया था?',
  'Jawaharlal Nehru', 'Bhulabhai Desai', 'Mahatma Gandhi', 'Subhas Chandra Bose',
  'जवाहरलाल नेहरू', 'भूलाभाई देसाई (Bhulabhai Desai)', 'महात्मा गांधी', 'सुभाष चंद्र बोस',
  'b',
  'Bhulabhai Desai was the chief counsel leading the INA Defense Committee at the Red Fort trials, assisted by Tej Bahadur Sapru and Jawaharlal Nehru.',
  'लाल किले में INA के अधिकारियों (सहगल, ढिल्लों, शाहनवाज) के बचाव पक्ष के मुख्य वकील भूलाभाई देसाई थे।'
),
(
  'ssc-cgl-2026-mock-02', 50, 'PART-2', 'General Awareness',
  'In computer networking and cybersecurity, what does the acronym "HTTPS" stand for?',
  'कंप्यूटर नेटवर्किंग में संक्षिप्त नाम "HTTPS" का पूर्ण रूप क्या है?',
  'Hyper Text Transfer Protocol Secure', 'Hyper Transfer Text Protocol Standard', 'High-Speed Text Transmission Protocol Secure', 'Hyperlink Transfer Technology Protocol System',
  'Hyper Text Transfer Protocol Secure', 'Hyper Transfer Text Protocol Standard', 'High-Speed Text Transmission Protocol Secure', 'Hyperlink Transfer Technology Protocol System',
  'a',
  'HTTPS stands for Hyper Text Transfer Protocol Secure, using TLS/SSL encryption for secure data transfer over the World Wide Web.',
  'HTTPS का पूर्ण रूप ''Hyper Text Transfer Protocol Secure'' है।'
);
