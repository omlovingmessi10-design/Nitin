/**
 * Spotting the Errors Practice Sets - Official SSC Curated Dataset
 * Chapter 01: Spotting the Errors
 * 5 Sets (SET A, SET B, SET C, SET D, SET E) with 25 Questions Each (Total 125 Questions)
 * Structured across Levels 1 to 5 with English & Hindi Translations, Options, Detailed Solutions, and Shortcuts
 * Reference: YCT SSC General English 2024 TCS Pattern 660 PYQ Question Bank
 */

const SPOTTING_ERRORS_SET_A_QUESTIONS = [
  {
    "question_number": 1,
    "practice_set": "SET A",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: Indefinite Pronouns",
    "type_category_hi": "कर्ता-क्रिया समझौता: अनिश्चयवाचक सर्वनाम",
    "question_text": "In the sentence, identify the segment which contains a grammatical error:\n\nEach of the students in the prestigious academy were required to submit a comprehensive research paper before the semester deadline.",
    "question_text_hi": "दिए गए वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nEach of the students in the prestigious academy were required to submit a comprehensive research paper before the semester deadline.",
    "options": {
      "a": "Each of the students",
      "b": "in the prestigious academy",
      "c": "were required to submit",
      "d": "before the semester deadline"
    },
    "options_hi": {
      "a": "Each of the students",
      "b": "in the prestigious academy",
      "c": "were required to submit",
      "d": "before the semester deadline"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: Expressions like 'Each of', 'Either of', and 'Neither of' are followed by a plural noun/pronoun, but the governing verb is ALWAYS singular because 'Each' refers to individuals taken one at a time.\nIn this sentence, the plural verb 'were required' must be replaced by the singular verb 'was required'.\n\nCorrect Sentence: 'Each of the students in the prestigious academy was required to submit a comprehensive research paper before the semester deadline.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Each of', 'Either of' और 'Neither of' के बाद संज्ञा/सर्वनाम बहुवचन होता है, लेकिन मुख्य क्रिया (Verb) सदैव एकवचन (Singular) होती है क्योंकि 'Each' प्रत्येक व्यक्ति को अलग-अलग दर्शाता है।\nयहाँ बहुवचन क्रिया 'were required' के स्थान पर एकवचन 'was required' का प्रयोग होगा।\n\nशुद्ध वाक्य: Each of the students in the prestigious academy was required to submit a comprehensive research paper before the semester deadline.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Golden SSC Rule: Each of / Either of / Neither of + Plural Noun + SINGULAR VERB. 'Each of the students' -> always takes 'was / has / is', never 'were / have / are'.",
    "shortcut_text_hi": "गोल्डन नियम: Each of / Either of / Neither of + बहुवचन Noun + एकवचन Verb। 'Each of...' आते ही तुरंत Verb चेक करें — 'was' सही है, 'were' गलत।"
  },
  {
    "question_number": 2,
    "practice_set": "SET A",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 2",
    "type_category": "Form of Verb: Auxiliary 'Did' with Base Verb",
    "type_category_hi": "क्रिया का रूप: सहायक क्रिया 'Did' के साथ मूल क्रिया",
    "question_text": "The following sentence has been split into four segments. Identify the segment that contains a grammatical error:\n\nDid he went / to the local market / yesterday evening / to purchase essential groceries?",
    "question_text_hi": "दिए गए वाक्य को चार भागों में विभाजित किया गया है। त्रुटिपूर्ण भाग का चयन करें:\n\nDid he went / to the local market / yesterday evening / to purchase essential groceries?",
    "options": {
      "a": "Did he went",
      "b": "to the local market",
      "c": "yesterday evening",
      "d": "to purchase essential groceries"
    },
    "options_hi": {
      "a": "Did he went",
      "b": "to the local market",
      "c": "yesterday evening",
      "d": "to purchase essential groceries"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: When the auxiliary verb 'did' (or 'did not') is used in interrogative or negative sentences of the Simple Past Tense, the main verb must always be in its base form (V1), NOT in past form (V2).\nHere, 'went' (V2) must be replaced by 'go' (V1).\n\nCorrect Sentence: 'Did he go to the local market yesterday evening to purchase essential groceries?'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: सामान्य भूतकाल (Simple Past Tense) में जब प्रश्नवाचक या नकारात्मक वाक्यों में सहायक क्रिया 'did' या 'did not' का प्रयोग होता है, तो मुख्य क्रिया सदैव प्रथम रूप (V1 - Base form) में आती है, V2 में नहीं।\nयहाँ 'went' के स्थान पर 'go' का प्रयोग होगा।\n\nशुद्ध वाक्य: Did he go to the local market yesterday evening to purchase essential groceries?\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Golden Rule: Do / Does / Did + Verb (1st form / V1) ALWAYS. 'Did he went' is a frequent TCS error; correct is 'Did he go'.",
    "shortcut_text_hi": "गोल्डन नियम: Do / Does / Did के साथ हमेशा V1 आता है। 'Did he went' हमेशा गलत है -> 'Did he go' सही होगा।"
  },
  {
    "question_number": 3,
    "practice_set": "SET A",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 3",
    "type_category": "Preposition: Redundant Preposition after Transitive Verbs",
    "type_category_hi": "सकर्मक क्रिया के बाद अनावश्यक Preposition",
    "question_text": "Select the segment that contains a grammatical error in the following sentence:\n\nThe board of directors discussed about the ongoing financial crisis during the annual executive meeting.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nThe board of directors discussed about the ongoing financial crisis during the annual executive meeting.",
    "options": {
      "a": "The board of directors",
      "b": "discussed about",
      "c": "the ongoing financial crisis",
      "d": "during the annual executive meeting"
    },
    "options_hi": {
      "a": "The board of directors",
      "b": "discussed about",
      "c": "the ongoing financial crisis",
      "d": "during the annual executive meeting"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: The verb 'discuss' is a transitive verb meaning 'to talk about something'. Therefore, it takes a direct object and does NOT take the preposition 'about'. Using 'about' after 'discuss' is a redundant error frequently tested by SSC.\nSimilarly: describe, order, enter (a place), comprise, attack take direct objects without prepositions.\n\nCorrect Sentence: 'The board of directors discussed the ongoing financial crisis during the annual executive meeting.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Discuss' एक सकर्मक क्रिया (Transitive verb) है जिसका स्वयं अर्थ 'के बारे में चर्चा करना' होता है। अतः इसके बाद preposition 'about' का प्रयोग अनुचित और अतिरिक्त (Superfluous) है।\n'Discussed about' के स्थान पर केवल 'discussed' आएगा।\n\nशुद्ध वाक्य: The board of directors discussed the ongoing financial crisis during the annual executive meeting.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "TCS Trap: Discuss / Describe / Order / Comprise + NO Preposition! 'Discussed about' -> simply say 'Discussed the matter'.",
    "shortcut_text_hi": "TCS परीक्षा ट्रिक: Discuss / Describe / Order / Comprise के बाद कोई Preposition नहीं आता! 'Discussed about' देखते ही 'about' हटाएं।"
  },
  {
    "question_number": 4,
    "practice_set": "SET A",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 4",
    "type_category": "Articles: Choice of A vs An based on Initial Sound",
    "type_category_hi": "Article: प्रारंभिक ध्वनि के आधार पर A बनाम An का चयन",
    "question_text": "Identify the segment that contains a grammatical error:\n\nHe is an European diplomat / who has lived in / New Delhi for / more than a decade.",
    "question_text_hi": "वाक्य के उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nHe is an European diplomat / who has lived in / New Delhi for / more than a decade.",
    "options": {
      "a": "He is an European diplomat",
      "b": "who has lived in",
      "c": "New Delhi for",
      "d": "more than a decade"
    },
    "options_hi": {
      "a": "He is an European diplomat",
      "b": "who has lived in",
      "c": "New Delhi for",
      "d": "more than a decade"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: The indefinite article 'a' is used before words that begin with a consonant sound, whereas 'an' is used before words beginning with a vowel sound. Although 'European' begins with the vowel letter 'E', its pronunciation begins with the consonant glide sound /j/ ('yu-ro-pe-an'). Therefore, it must be preceded by 'a', not 'an'.\nSimilar words: a university, a union, a one-rupee note, a useful book.\n\nCorrect Sentence: 'He is a European diplomat who has lived in New Delhi for more than a decade.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'A' का प्रयोग व्यंजन ध्वनि (Consonant sound) से शुरू होने वाले शब्दों से पहले होता है, जबकि 'An' का प्रयोग स्वर ध्वनि (Vowel sound) से पहले होता है। 'European' यद्यपि 'E' अक्षर से शुरू होता है, लेकिन इसका उच्चारण व्यंजन ध्वनि /य/ ('yu') से होता है। अतः 'an European' के स्थान पर 'a European' का प्रयोग होगा।\n\nशुद्ध वाक्य: He is a European diplomat who has lived in New Delhi for more than a decade.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Phonetic Rule: Check sound, not letter! 'European', 'University', 'Unique', 'One-way' start with consonant sounds -> take 'A'.",
    "shortcut_text_hi": "ध्वनि नियम: अक्षर मत देखें, ध्वनि देखें! European, University, Union की ध्वनि 'य' (व्यंजन) है, अतः इनके आगे 'A' लगेगा।"
  },
  {
    "question_number": 5,
    "practice_set": "SET A",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 5",
    "type_category": "Nouns: Uncountable Nouns with Erroneous Plural Forms",
    "type_category_hi": "संज्ञा: अगणनीय संज्ञाओं का अशुद्ध बहुवचन रूप",
    "question_text": "The sentence below has been divided into four parts. Find the part with an error:\n\nAll the furnitures / in the newly inaugurated auditorium / were imported / from Scandinavian countries.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nAll the furnitures / in the newly inaugurated auditorium / were imported / from Scandinavian countries.",
    "options": {
      "a": "All the furnitures",
      "b": "in the newly inaugurated auditorium",
      "c": "were imported",
      "d": "from Scandinavian countries"
    },
    "options_hi": {
      "a": "All the furnitures",
      "b": "in the newly inaugurated auditorium",
      "c": "were imported",
      "d": "from Scandinavian countries"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: 'Furniture' is an uncountable noun. It does NOT have a plural form ('furnitures' does not exist in standard English). To express quantity, we use 'pieces of furniture' or 'items of furniture'. Furthermore, uncountable nouns take a singular verb when used alone, or 'pieces of furniture were imported' if pluralized through partitives.\nIn this sentence, 'All the furnitures' is incorrect and should be 'All the furniture was imported' or 'All the pieces of furniture were imported'.\n\nCorrect Sentence: 'All the furniture in the newly inaugurated auditorium was imported from Scandinavian countries.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Furniture' एक अगणनीय संज्ञा (Uncountable noun) है। इसका बहुवचन 'furnitures' नहीं होता। इसे बहुवचन दर्शाने के लिए 'pieces/items of furniture' कहा जाता है। अतः 'furnitures' गलत है; इसके स्थान पर 'furniture' आएगा और क्रिया भी 'was' होगी।\n\nशुद्ध वाक्य: All the furniture in the newly inaugurated auditorium was imported from Scandinavian countries.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "SSC Red-Alert List: Furniture, Luggage, Baggage, Scenery, Poetry, Advice, Information, Equipment, Machinery -> NEVER add '-s' or '-es'!",
    "shortcut_text_hi": "SSC चेतावनी सूची: Furniture, Luggage, Baggage, Scenery, Advice, Information, Equipment में कभी भी '-s' नहीं लगता!"
  },
  {
    "question_number": 6,
    "practice_set": "SET A",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: Parenthetical Connectors ('as well as')",
    "type_category_hi": "कर्ता-क्रिया समझौता: 'as well as' से जुड़े कर्ता",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe Prime Minister, as well as / several senior cabinet ministers, / were present at the state banquet / hosted in honour of the visiting dignitary.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nThe Prime Minister, as well as / several senior cabinet ministers, / were present at the state banquet / hosted in honour of the visiting dignitary.",
    "options": {
      "a": "The Prime Minister, as well as",
      "b": "several senior cabinet ministers",
      "c": "were present at the state banquet",
      "d": "hosted in honour of the visiting dignitary"
    },
    "options_hi": {
      "a": "The Prime Minister, as well as",
      "b": "several senior cabinet ministers",
      "c": "were present at the state banquet",
      "d": "hosted in honour of the visiting dignitary"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When two subjects are joined by connectors like 'as well as', 'along with', 'together with', 'with', 'in addition to', 'accompanied by', 'like', 'unlike', the governing verb must ALWAYS agree with the FIRST subject, not the nearest one.\nHere, the first subject is 'The Prime Minister' (singular). Therefore, the verb must be singular 'was present', not plural 'were present'.\n\nCorrect Sentence: 'The Prime Minister, as well as several senior cabinet ministers, was present at the state banquet hosted in honour of the visiting dignitary.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब दो कर्ता 'as well as', 'along with', 'together with', 'accompanied by', 'in addition to' से जुड़े हों, तो क्रिया हमेशा प्रथम कर्ता (First Subject) के अनुसार आती है। यहाँ प्रथम कर्ता 'The Prime Minister' (एकवचन) है, अतः 'were' के स्थान पर 'was' का प्रयोग होगा।\n\nशुद्ध वाक्य: The Prime Minister, as well as several senior cabinet ministers, was present at the state banquet...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Subject 1 + as well as / along with / together with + Subject 2 -> Verb AGREES WITH SUBJECT 1! Prime Minister (singular) -> use 'was'.",
    "shortcut_text_hi": "नियम: as well as / along with / with से जुड़े होने पर क्रिया हमेशा पहले कर्ता के अनुसार आती है। Prime Minister (एकवचन) -> 'was' आएगा।"
  },
  {
    "question_number": 7,
    "practice_set": "SET A",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 2",
    "type_category": "Conjunctions: Correlative Pair 'Hardly / Scarcely... when'",
    "type_category_hi": "संयोजक: सह-संबंधी जोड़ा 'Hardly / Scarcely... when'",
    "question_text": "Select the erroneous segment in the given sentence:\n\nHardly had the emergency siren sounded / than the entire factory workforce / evacuated the production floor / in an orderly fashion.",
    "question_text_hi": "दिए गए वाक्य में अशुद्ध भाग का चयन करें:\n\nHardly had the emergency siren sounded / than the entire factory workforce / evacuated the production floor / in an orderly fashion.",
    "options": {
      "a": "Hardly had the emergency siren sounded",
      "b": "than the entire factory workforce",
      "c": "evacuated the production floor",
      "d": "in an orderly fashion"
    },
    "options_hi": {
      "a": "Hardly had the emergency siren sounded",
      "b": "than the entire factory workforce",
      "c": "evacuated the production floor",
      "d": "in an orderly fashion"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: Correlative conjunctions 'Hardly' and 'Scarcely' are strictly paired with 'when' or 'before'. They are NEVER paired with 'than'. 'Than' is used exclusively with 'No sooner'.\nIn this sentence, 'than' must be replaced by 'when'.\n\nCorrect Sentence: 'Hardly had the emergency siren sounded when the entire factory workforce evacuated the production floor in an orderly fashion.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Hardly' और 'Scarcely' के साथ सदैव 'when' या 'before' का जोड़ा बनता है, 'than' का नहीं। 'Than' का प्रयोग केवल 'No sooner' के साथ होता है।\nयहाँ 'than' के स्थान पर 'when' का प्रयोग होगा।\n\nशुद्ध वाक्य: Hardly had the emergency siren sounded when the entire factory workforce evacuated the production floor in an orderly fashion.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Correlative Match: Hardly / Scarcely -> WHEN. No sooner -> THAN. Mixing them is a classic 100% SSC exam trap.",
    "shortcut_text_hi": "युग्म नियम: Hardly / Scarcely के साथ हमेशा 'WHEN' आता है। No sooner के साथ 'THAN' आता है।"
  },
  {
    "question_number": 8,
    "practice_set": "SET A",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 3",
    "type_category": "Tenses: Duration of Time with 'Since / For' requiring Perfect Continuous",
    "type_category_hi": "काल: 'Since / For' के साथ पूर्ण सतत काल (Perfect Continuous)",
    "question_text": "In the following sentence, identify the segment with a grammatical error:\n\nShe is living / in this metropolitan city / for the last twelve years / with her extended family.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nShe is living / in this metropolitan city / for the last twelve years / with her extended family.",
    "options": {
      "a": "She is living",
      "b": "in this metropolitan city",
      "c": "for the last twelve years",
      "d": "with her extended family"
    },
    "options_hi": {
      "a": "She is living",
      "b": "in this metropolitan city",
      "c": "for the last twelve years",
      "d": "with her extended family"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: When an action started in the past and is continuing up to the present moment accompanied by a time phrase with 'for' (period of time) or 'since' (point of time), the Present Perfect Continuous Tense ('has/have been + V-ing') must be used, NOT the Simple Present Continuous ('is/are living').\nTherefore, 'She is living' must be replaced by 'She has been living'.\n\nCorrect Sentence: 'She has been living in this metropolitan city for the last twelve years with her extended family.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: जब कोई कार्य भूतकाल में शुरू होकर वर्तमान में भी जारी हो और उसके साथ समय सूचक 'for' या 'since' दिया हो, तो Present Perfect Continuous Tense ('has/have been + V-ing') का प्रयोग होता है, न कि Present Continuous ('is living') का।\nयहाँ 'She is living' के स्थान पर 'She has been living' का प्रयोग होगा।\n\nशुद्ध वाक्य: She has been living in this metropolitan city for the last twelve years with her extended family.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Formula: Since / For + Time expression -> MUST use 'has/have been + V-ing', not 'is/are + V-ing'.",
    "shortcut_text_hi": "सूत्र: वाक्य में 'for/since + time' दिखे तो 'is/are' हटाकर 'has been / have been' लगाएं।"
  },
  {
    "question_number": 9,
    "practice_set": "SET A",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 4",
    "type_category": "Adjectives: Latin Comparatives & Redundant Modifiers",
    "type_category_hi": "विशेषण: लैटिन तुलनात्मक शब्द और अनावश्यक 'More'",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nFor most corporate employees, / working from home is / more preferable than / commuting long distances every day.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nFor most corporate employees, / working from home is / more preferable than / commuting long distances every day.",
    "options": {
      "a": "For most corporate employees",
      "b": "working from home is",
      "c": "more preferable than",
      "d": "commuting long distances every day"
    },
    "options_hi": {
      "a": "For most corporate employees",
      "b": "working from home is",
      "c": "more preferable than",
      "d": "commuting long distances every day"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: The adjective 'preferable' already carries a comparative sense. Therefore, using 'more' before 'preferable' is a double comparative error. Furthermore, 'preferable' takes the preposition 'to', NEVER 'than'.\nOther Latin comparatives taking 'to': senior, junior, superior, inferior, prior, anterior, posterior.\nReplace 'more preferable than' with 'preferable to'.\n\nCorrect Sentence: 'For most corporate employees, working from home is preferable to commuting long distances every day.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Preferable' स्वयं तुलनात्मक अर्थ रखता है, अतः इसके साथ 'more' का प्रयोग दोहरा तुलनात्मक (Double comparative) दोष है। साथ ही, 'preferable' के बाद 'than' नहीं बल्कि 'to' का प्रयोग होता है।\n'more preferable than' के स्थान पर 'preferable to' आएगा।\n\nशुद्ध वाक्य: For most corporate employees, working from home is preferable to commuting long distances every day.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Rule: Preferable + TO (NEVER 'more preferable' or 'than'). Latin -ior adjectives (senior, junior, superior) also take 'TO'.",
    "shortcut_text_hi": "नियम: Preferable के आगे कभी 'more' नहीं लगता और बाद में 'than' नहीं, सदैव 'TO' लगता है।"
  },
  {
    "question_number": 10,
    "practice_set": "SET A",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 5",
    "type_category": "Conditionals: Redundant Negation with 'Unless'",
    "type_category_hi": "शर्त सूचक वाक्य: 'Unless' के साथ दोहरा नकारात्मक",
    "question_text": "Identify the segment containing an error:\n\nUnless you do not / strictly adhere to the safety guidelines, / you will not be permitted / to enter the testing laboratory.",
    "question_text_hi": "त्रुटिपूर्ण भाग की पहचान करें:\n\nUnless you do not / strictly adhere to the safety guidelines, / you will not be permitted / to enter the testing laboratory.",
    "options": {
      "a": "Unless you do not",
      "b": "strictly adhere to the safety guidelines",
      "c": "you will not be permitted",
      "d": "to enter the testing laboratory"
    },
    "options_hi": {
      "a": "Unless you do not",
      "b": "strictly adhere to the safety guidelines",
      "c": "you will not be permitted",
      "d": "to enter the testing laboratory"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: 'Unless' means 'if... not' and already has an inherent negative meaning. Therefore, using another negative word like 'not' or 'do not' in the conditional clause introduced by 'unless' creates an ungrammatical double negative.\nRemove 'do not' and write 'Unless you strictly adhere...'.\n\nCorrect Sentence: 'Unless you strictly adhere to the safety guidelines, you will not be permitted to enter the testing laboratory.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Unless' का अर्थ 'यदि नहीं (if not)' होता है और यह स्वतः ही नकारात्मक अर्थ देता है। अतः 'unless' वाले उपवाक्य (clause) में 'not' या 'do not' का प्रयोग वर्जित है क्योंकि इससे दोहरे नकारात्मक (Double negative) की अशुद्धि होती है।\nयहाँ 'Unless you do not' के स्थान पर 'Unless you' का प्रयोग होगा।\n\nशुद्ध वाक्य: Unless you strictly adhere to the safety guidelines, you will not be permitted to enter the testing laboratory.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "SSC Trap: Unless / Until / Lest are ALREADY NEGATIVE! Never use 'not / no / never' inside their dependent clause.",
    "shortcut_text_hi": "TCS ट्रिक: Unless, Until, Lest पहले से ही नकारात्मक हैं! इनके साथ वाले वाक्य में 'not' कभी नहीं आता।"
  },
  {
    "question_number": 11,
    "practice_set": "SET A",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 1",
    "type_category": "PYQ Pattern: 'One of the' + Plural Noun + Relative Pronoun ('Who')",
    "type_category_hi": "PYQ पैटर्न: 'One of the' + बहुवचन Noun + संबंधवाचक सर्वनाम 'Who'",
    "question_text": "The following sentence has been split into four segments. Identify the segment with an error:\n\nDr. APJ Abdul Kalam is one of those / visionary scientists who / has inspired millions of young minds / across the nation.",
    "question_text_hi": "दिए गए वाक्य के उस भाग की पहचान करें जिसमें त्रुटि है:\n\nDr. APJ Abdul Kalam is one of those / visionary scientists who / has inspired millions of young minds / across the nation.",
    "options": {
      "a": "Dr. APJ Abdul Kalam is one of those",
      "b": "visionary scientists who",
      "c": "has inspired millions of young minds",
      "d": "across the nation"
    },
    "options_hi": {
      "a": "Dr. APJ Abdul Kalam is one of those",
      "b": "visionary scientists who",
      "c": "has inspired millions of young minds",
      "d": "across the nation"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When 'one of the + plural noun' is followed by a relative pronoun ('who', 'which', 'that'), the antecedent of the relative pronoun is the PLURAL NOUN, NOT 'one'. Therefore, the verb following the relative pronoun must be PLURAL.\nHere, the antecedent of 'who' is 'visionary scientists' (plural). Hence, the verb must be 'have inspired', not 'has inspired'.\n(Note: If it were 'the only one of...', then the verb would be singular).\n\nCorrect Sentence: 'Dr. APJ Abdul Kalam is one of those visionary scientists who have inspired millions of young minds across the nation.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब 'one of + बहुवचन noun' के बाद Relative Pronoun ('who / that / which') आता है, तो क्रिया Relative Pronoun के ठीक पूर्व आने वाली बहुवचन संज्ञा (Antecedent) के अनुसार बहुवचन (Plural) होती है। यहाँ 'who' का पूर्ववर्ती 'scientists' (बहुवचन) है, अतः 'has' के स्थान पर 'have' का प्रयोग होगा।\n\nशुद्ध वाक्य: Dr. APJ Abdul Kalam is one of those visionary scientists who have inspired millions of young minds across the nation.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "PYQ Golden Rule: 'One of those + Plural Noun + WHO/THAT + PLURAL VERB'. 'Scientists who' -> MUST take 'HAVE', not 'has'.",
    "shortcut_text_hi": "PYQ गोल्डन नियम: One of + बहुवचन Noun + who + बहुवचन Verb। 'Scientists who' के बाद 'have' आएगा, 'has' नहीं।"
  },
  {
    "question_number": 12,
    "practice_set": "SET A",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 2",
    "type_category": "PYQ Pattern: Transitive Verb 'Order' takes no Preposition",
    "type_category_hi": "PYQ पैटर्न: सकर्मक क्रिया 'Order' के साथ Preposition का प्रयोग नहीं",
    "question_text": "Identify the segment containing a grammatical error:\n\nAfter a tiring journey, / the delegates ordered for / a lavish multicourse dinner / at the heritage hotel.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nAfter a tiring journey, / the delegates ordered for / a lavish multicourse dinner / at the heritage hotel.",
    "options": {
      "a": "After a tiring journey",
      "b": "the delegates ordered for",
      "c": "a lavish multicourse dinner",
      "d": "at the heritage hotel"
    },
    "options_hi": {
      "a": "After a tiring journey",
      "b": "the delegates ordered for",
      "c": "a lavish multicourse dinner",
      "d": "at the heritage hotel"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: The verb 'order' is transitive when requesting food, goods, or services, taking a direct object without any preposition. Using 'ordered for' is a widespread Indian English error heavily penalized in SSC examinations.\n(Note: 'Order' takes 'for' only when used as a noun, e.g., 'placed an order for a book').\nIn this sentence, remove 'for'.\n\nCorrect Sentence: 'After a tiring journey, the delegates ordered a lavish multicourse dinner at the heritage hotel.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब 'order' का प्रयोग क्रिया (Verb) के रूप में खाना या सामान मंगवाने के लिए किया जाता है, तो यह सकर्मक क्रिया होती है और इसके बाद 'for' का प्रयोग गलत होता है।\n'Ordered for a dinner' के स्थान पर 'ordered a dinner' सही है। (जब 'order' संज्ञा हो, तब 'an order for' आता है)।\n\nशुद्ध वाक्य: After a tiring journey, the delegates ordered a lavish multicourse dinner at the heritage hotel.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "PYQ Rule: As a verb, 'ORDER + Object' (NO 'FOR'). 'Ordered for tea' is INCORRECT -> write 'Ordered tea'.",
    "shortcut_text_hi": "PYQ नियम: Verb के रूप में 'Order' के बाद कभी 'for' नहीं आता। 'Ordered for' गलत है -> केवल 'Ordered' सही है।"
  },
  {
    "question_number": 13,
    "practice_set": "SET A",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 3",
    "type_category": "PYQ Pattern: Question Tag with Semi-Negative Adverbs",
    "type_category_hi": "PYQ पैटर्न: अर्ध-नकारात्मक क्रियाविशेषण के साथ Question Tag",
    "question_text": "Select the segment in the sentence which contains an error:\n\nShe rarely attends / social gatherings on weekends, / doesn't she?",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nShe rarely attends / social gatherings on weekends, / doesn't she?",
    "options": {
      "a": "She rarely attends",
      "b": "social gatherings on weekends",
      "c": "doesn't she",
      "d": "No error"
    },
    "options_hi": {
      "a": "She rarely attends",
      "b": "social gatherings on weekends",
      "c": "doesn't she",
      "d": "No error"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: Semi-negative adverbs such as 'rarely', 'seldom', 'scarcely', 'hardly', 'barely', and 'neither' impart a negative meaning to the clause. According to question tag rules, a negative statement must be followed by a POSITIVE question tag.\nSince the statement is effectively negative in Simple Present ('rarely attends'), the question tag must be positive 'does she?', NOT negative 'doesn't she?'.\n\nCorrect Sentence: 'She rarely attends social gatherings on weekends, does she?'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Rarely', 'seldom', 'scarcely', 'hardly', 'barely' जैसे शब्द अर्ध-नकारात्मक (Semi-negative) होते हैं और वाक्य को नकारात्मक बना देते हैं। Question Tag का नियम है कि नकारात्मक वाक्य का टैग हमेशा सकारात्मक (Positive) होता है। अतः 'doesn't she' के स्थान पर 'does she?' का प्रयोग होगा।\n\nशुद्ध वाक्य: She rarely attends social gatherings on weekends, does she?\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Question Tag Rule: Sentence with Seldom / Rarely / Hardly / Barely = NEGATIVE statement -> Requires POSITIVE TAG ('does she?').",
    "shortcut_text_hi": "टैग नियम: वाक्य में Rarely, Seldom, Hardly दिखे तो वाक्य नकारात्मक माना जाएगा -> Question Tag हमेशा सकारात्मक ('does she?') होगा।"
  },
  {
    "question_number": 14,
    "practice_set": "SET A",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 4",
    "type_category": "PYQ Pattern: Phrasal Idiom 'Look forward to' + Gerund",
    "type_category_hi": "PYQ पैटर्न: 'Look forward to' के बाद Gerund (V-ing)",
    "question_text": "Identify the segment containing a grammatical error:\n\nAll the members of the committee / are looking forward / to meet the newly appointed / chairman of the board.",
    "question_text_hi": "वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nAll the members of the committee / are looking forward / to meet the newly appointed / chairman of the board.",
    "options": {
      "a": "All the members of the committee",
      "b": "are looking forward",
      "c": "to meet the newly appointed",
      "d": "chairman of the board"
    },
    "options_hi": {
      "a": "All the members of the committee",
      "b": "are looking forward",
      "c": "to meet the newly appointed",
      "d": "chairman of the board"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: In phrases like 'look forward to', 'with a view to', 'accustomed to', 'used to' (when preceded by be-verb), 'addicted to', and 'given to', the word 'to' is a PREPOSITION, not an infinitive marker. Prepositions must be followed by a noun, pronoun, or a GERUND ('V1 + ing').\nTherefore, 'to meet' must be changed to 'to meeting'.\n\nCorrect Sentence: 'All the members of the committee are looking forward to meeting the newly appointed chairman of the board.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Look forward to', 'with a view to', 'accustomed to', 'addicted to' जैसे वाक्यांशों में 'to' Infinitive का हिस्सा नहीं बल्कि एक Preposition होता है। Preposition के बाद सदैव संज्ञा या Gerund ('V-ing') का प्रयोग होता है। अतः 'to meet' के स्थान पर 'to meeting' आएगा।\n\nशुद्ध वाक्य: All the members of the committee are looking forward to meeting the newly appointed chairman of the board.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "High-Frequency PYQ: Look forward to / With a view to / Accustomed to + V-ING (Gerund)! Never use V1 base form.",
    "shortcut_text_hi": "हाई-फ़्रीक्वेंसी PYQ: Look forward to / With a view to के तुरंत बाद क्रिया का '-ing' रूप (Gerund) आता है, V1 नहीं।"
  },
  {
    "question_number": 15,
    "practice_set": "SET A",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 5",
    "type_category": "PYQ Pattern: Collective Plural Noun 'Police' with Plural Verb",
    "type_category_hi": "PYQ पैटर्न: सामूहिक बहुवचन संज्ञा 'Police' के साथ बहुवचन क्रिया",
    "question_text": "Select the segment in the sentence that has an error:\n\nThe local police has cordoned off / the entire neighbourhood / following the armed heist / at the nationalized bank.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nThe local police has cordoned off / the entire neighbourhood / following the armed heist / at the nationalized bank.",
    "options": {
      "a": "The local police has cordoned off",
      "b": "the entire neighbourhood",
      "c": "following the armed heist",
      "d": "at the nationalized bank"
    },
    "options_hi": {
      "a": "The local police has cordoned off",
      "b": "the entire neighbourhood",
      "c": "following the armed heist",
      "d": "at the nationalized bank"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: Nouns like 'police', 'people', 'cattle', 'gentry', 'poultry', and 'clergy' are singular in form but PLURAL in meaning. They ALWAYS take a plural verb in standard English.\nTherefore, 'The local police has' is ungrammatical; it must be 'The local police have'.\n(Note: To refer to an individual, say 'a police officer' or 'a policeman').\n\nCorrect Sentence: 'The local police have cordoned off the entire neighbourhood following the armed heist at the nationalized bank.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Police', 'people', 'cattle', 'gentry', 'poultry' दिखने में एकवचन लगते हैं परंतु अर्थ में सदैव बहुवचन (Plural) होते हैं। इनके साथ हमेशा बहुवचन क्रिया का प्रयोग होता है। अतः 'has' के स्थान पर 'have' का प्रयोग होगा।\n\nशुद्ध वाक्य: The local police have cordoned off the entire neighbourhood following the armed heist...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Rule: POLICE = PLURAL! Always use 'police have / police are / police were', never 'has / is / was'.",
    "shortcut_text_hi": "नियम: 'Police' हमेशा बहुवचन होती है! इसके साथ 'have / are / were' का प्रयोग करें, 'has' का नहीं।"
  },
  {
    "question_number": 16,
    "practice_set": "SET A",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 1",
    "type_category": "Advanced Subject-Verb: Long Intervening Prepositional Phrases",
    "type_category_hi": "उन्नत कर्ता-क्रिया समझौता: मध्यवर्ती Prepositional वाक्यांश",
    "question_text": "In the sentence, identify the segment which contains a grammatical error:\n\nThe exceptional quality of organic teas / cultivated on the steep terraced slopes / of the Darjeeling hills / are renowned throughout international markets.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nThe exceptional quality of organic teas / cultivated on the steep terraced slopes / of the Darjeeling hills / are renowned throughout international markets.",
    "options": {
      "a": "The exceptional quality of organic teas",
      "b": "cultivated on the steep terraced slopes",
      "c": "of the Darjeeling hills",
      "d": "are renowned throughout international markets"
    },
    "options_hi": {
      "a": "The exceptional quality of organic teas",
      "b": "cultivated on the steep terraced slopes",
      "c": "of the Darjeeling hills",
      "d": "are renowned throughout international markets"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: When a long intervening prepositional phrase ('of organic teas cultivated on the steep terraced slopes of the Darjeeling hills') separates the head subject from the verb, ignore the intervening nouns and match the verb strictly with the head subject.\nHere, the head subject is 'The exceptional quality' (singular, uncountable noun). The plural verb 'are renowned' must be replaced by the singular verb 'is renowned'.\n\nCorrect Sentence: 'The exceptional quality of organic teas cultivated on the steep terraced slopes of the Darjeeling hills is renowned throughout international markets.'\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: जब मुख्य कर्ता (Head Subject) और क्रिया के बीच लंबा Prepositional वाक्यांश आ जाता है, तो क्रिया बीच में आने वाली संज्ञाओं के अनुसार नहीं बल्कि मुख्य कर्ता के अनुसार आती है। यहाँ मुख्य कर्ता 'The exceptional quality' (एकवचन) है, अतः 'are' के स्थान पर 'is' का प्रयोग होगा।\n\nशुद्ध वाक्य: The exceptional quality of organic teas cultivated on the steep terraced slopes of the Darjeeling hills is renowned throughout international markets.\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Blind-Spot Test: Cross out intervening phrases between subject and verb! 'The quality [of teas on hills] IS renowned' (not are).",
    "shortcut_text_hi": "परीक्षण ट्रिक: कर्ता और क्रिया के बीच के Preposition वाले भाग को नजरअंदाज करें! 'The quality... IS renowned' सही होगा।"
  },
  {
    "question_number": 17,
    "practice_set": "SET A",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 2",
    "type_category": "Conditionals: Third Conditional Inversion Structure",
    "type_category_hi": "शर्त सूचक वाक्य: तृतीय शर्त (Third Conditional) में Inversion",
    "question_text": "Identify the segment containing a grammatical error, or select 'No error':\n\nHad the disaster management team reached / the landslide site earlier, / many precious lives would have been saved / from the debris.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें, अथवा 'No error' चुनें:\n\nHad the disaster management team reached / the landslide site earlier, / many precious lives would have been saved / from the debris.",
    "options": {
      "a": "Had the disaster management team reached",
      "b": "the landslide site earlier",
      "c": "many precious lives would have been saved",
      "d": "No error"
    },
    "options_hi": {
      "a": "Had the disaster management team reached",
      "b": "the landslide site earlier",
      "c": "many precious lives would have been saved",
      "d": "No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: This sentence is an inverted Third Conditional (Past Unreal Condition) representing the structure: 'Had + Subject + V3 ..., Subject + would have been + V3' (passive) or 'would have + V3' (active).\nIt is fully equivalent to: 'If the disaster management team had reached the landslide site earlier, many precious lives would have been saved...'.\nAll clauses, tenses, and passive voice constructions are impeccably correct. Therefore, there is NO ERROR.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: यह वाक्य तृतीय शर्त (Third Conditional) का Inversion रूप है: 'Had + Subject + V3 ..., Subject + would have been + V3'। यह 'If the team had reached..., lives would have been saved...' के पूर्णतः समतुल्य और व्याकरणिक दृष्टि से सर्वथा शुद्ध है। इसमें कोई त्रुटि नहीं है।\n\nअतः सही उत्तर (d) No error है।",
    "shortcut_text": "Formula Check: 'Had + S + V3 ..., S + would have + V3' is 100% grammatically correct. Do not fall into the trap of changing 'Had' to 'If had'.",
    "shortcut_text_hi": "फॉर्मूला: 'Had + S + V3 ..., S + would have + V3' पूर्णतः शुद्ध Inversion संरचना है। इसमें No Error चुनें।"
  },
  {
    "question_number": 18,
    "practice_set": "SET A",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 3",
    "type_category": "Inversion: Initial Negative Adverbial 'Not only'",
    "type_category_hi": "Inversion: प्रारंभ में नकारात्मक क्रियाविशेषण 'Not only'",
    "question_text": "Identify the segment that contains a grammatical error:\n\nNot only the chief executive refused / to reconsider the controversial policy, / but he also declined to interact / with the agitating employees.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nNot only the chief executive refused / to reconsider the controversial policy, / but he also declined to interact / with the agitating employees.",
    "options": {
      "a": "Not only the chief executive refused",
      "b": "to reconsider the controversial policy",
      "c": "but he also declined to interact",
      "d": "with the agitating employees"
    },
    "options_hi": {
      "a": "Not only the chief executive refused",
      "b": "to reconsider the controversial policy",
      "c": "but he also declined to interact",
      "d": "with the agitating employees"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: When a sentence begins with a negative or restrictive adverbial expression such as 'Not only', 'Never', 'Seldom', 'Rarely', 'Hardly', or 'Little', the clause that immediately follows MUST undergo INVERSION (Auxiliary verb + Subject + Main verb).\nHere, in Simple Past Tense, 'Not only the chief executive refused' must be written in inverted form as 'Not only did the chief executive refuse'.\n\nCorrect Sentence: 'Not only did the chief executive refuse to reconsider the controversial policy, but he also declined to interact with the agitating employees.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: जब कोई वाक्य 'Not only', 'Never', 'Seldom', 'Hardly' जैसे नकारात्मक शब्दों से शुरू होता है, तो उसके तुरंत बाद Inversion (सहायक क्रिया + कर्ता + मुख्य क्रिया) का नियम लागू होता है। अतः 'Not only the chief executive refused' के स्थान पर 'Not only did the chief executive refuse' का प्रयोग होगा।\n\nशुद्ध वाक्य: Not only did the chief executive refuse to reconsider the controversial policy, but he also declined to interact with the agitating employees.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Inversion Rule: Sentence starting with 'NOT ONLY' -> MUST invert auxiliary: 'Not only DID the CEO REFUSE...' (Aux + S + V1).",
    "shortcut_text_hi": "Inversion नियम: वाक्य के शुरू में 'Not only' आने पर तुरंत सहायक क्रिया आगे लाएं: 'Not only did he refuse...' सही होगा।"
  },
  {
    "question_number": 19,
    "practice_set": "SET A",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 4",
    "type_category": "Nouns as Modifiers: Hyphenated Compound Adjectives",
    "type_category_hi": "संज्ञा विशेषण के रूप में: हाइफ़न युक्त संयुक्त विशेषण",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nThe union ministry has approved / a five-years modernization plan / to overhaul the nation's / antiquated railway infrastructure.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nThe union ministry has approved / a five-years modernization plan / to overhaul the nation's / antiquated railway infrastructure.",
    "options": {
      "a": "The union ministry has approved",
      "b": "a five-years modernization plan",
      "c": "to overhaul the nation's",
      "d": "antiquated railway infrastructure"
    },
    "options_hi": {
      "a": "The union ministry has approved",
      "b": "a five-years modernization plan",
      "c": "to overhaul the nation's",
      "d": "antiquated railway infrastructure"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When a noun with a numeral functions as a compound adjective modifying another noun, it NEVER takes a plural form (adjectives in English do not have plural forms).\nTherefore, 'a five-years modernization plan' is incorrect; it must be written in the singular form as 'a five-year modernization plan'.\nSimilar examples: a ten-rupee note (not ten-rupees note), a three-mile walk, a five-star hotel.\n\nCorrect Sentence: 'The union ministry has approved a five-year modernization plan to overhaul the nation's antiquated railway infrastructure.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब कोई संख्या और संज्ञा मिलकर किसी अन्य संज्ञा की विशेषता बताने वाला संयुक्त विशेषण (Compound Adjective) बनाते हैं, तो वह संज्ञा हमेशा एकवचन (Singular) में रहती है, क्योंकि विशेषणों का बहुवचन नहीं बनता। अतः 'a five-years plan' के स्थान पर 'a five-year plan' का प्रयोग होगा।\n\nशुद्ध वाक्य: The union ministry has approved a five-year modernization plan to overhaul the nation's antiquated railway infrastructure.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Rule: Hyphenated Noun-Modifier is ALWAYS SINGULAR. Say 'a 5-year plan', 'a 10-rupee note', 'a 3-star hotel'.",
    "shortcut_text_hi": "नियम: विशेषण के रूप में प्रयुक्त संज्ञा सदैव एकवचन होती है। 'five-years plan' गलत है -> 'five-year plan' सही है।"
  },
  {
    "question_number": 20,
    "practice_set": "SET A",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 5",
    "type_category": "Parallelism: Placement of Correlative Conjunction 'Not only... but also'",
    "type_category_hi": "समानांतरता: 'Not only... but also' का सही स्थान",
    "question_text": "Identify the segment containing a grammatical error:\n\nDuring the crowded transit, / the tourist not only lost / his official passport / but also his expensive wristwatch.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nDuring the crowded transit, / the tourist not only lost / his official passport / but also his expensive wristwatch.",
    "options": {
      "a": "During the crowded transit",
      "b": "the tourist not only lost",
      "c": "his official passport",
      "d": "but also his expensive wristwatch"
    },
    "options_hi": {
      "a": "During the crowded transit",
      "b": "the tourist not only lost",
      "c": "his official passport",
      "d": "but also his expensive wristwatch"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: Correlative conjunctions ('not only... but also', 'either... or', 'neither... nor') must join grammatically parallel elements. In this sentence, 'but also' is placed directly before a noun phrase ('his expensive wristwatch'). Therefore, 'not only' must also be placed directly before the corresponding noun phrase ('his official passport'), NOT before the verb 'lost'.\nThe verb 'lost' applies to both items and should precede 'not only': 'lost not only his official passport but also his expensive wristwatch'.\n\nCorrect Sentence: 'During the crowded transit, the tourist lost not only his official passport but also his expensive wristwatch.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Not only... but also' को समान व्याकरणिक पदों (Parallel elements) के पहले रखा जाना चाहिए। यहाँ 'but also' संज्ञा पद 'his expensive wristwatch' के पहले है, अतः 'not only' को भी क्रिया 'lost' के पहले न रखकर संज्ञा पद 'his official passport' के पहले रखा जाना चाहिए। क्रिया 'lost' को 'not only' से पहले लाएं।\n\nशुद्ध वाक्य: During the crowded transit, the tourist lost not only his official passport but also his expensive wristwatch.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Symmetry Check: 'lost NOT ONLY [Noun 1] BUT ALSO [Noun 2]'. Check what follows 'but also' and mirror it after 'not only'.",
    "shortcut_text_hi": "समानांतरता ट्रिक: 'but also' के बाद संज्ञा है तो 'not only' के बाद भी संज्ञा आनी चाहिए -> 'lost not only his passport but also his watch'."
  },
  {
    "question_number": 21,
    "practice_set": "SET A",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 1",
    "type_category": "Subjunctive Mood: 'It is high time' + Past Subjunctive (V2)",
    "type_category_hi": "Subjunctive Mood: 'It is high time' के साथ भूतकाल (V2)",
    "question_text": "The sentence below is split into four parts. Identify the part containing an error:\n\nIt is high time / that the municipal corporation / takes strict punitive measures / against commercial encroachment on public sidewalks.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nIt is high time / that the municipal corporation / takes strict punitive measures / against commercial encroachment on public sidewalks.",
    "options": {
      "a": "It is high time",
      "b": "that the municipal corporation",
      "c": "takes strict punitive measures",
      "d": "against commercial encroachment on public sidewalks"
    },
    "options_hi": {
      "a": "It is high time",
      "b": "that the municipal corporation",
      "c": "takes strict punitive measures",
      "d": "against commercial encroachment on public sidewalks"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: Expressions like 'It is time', 'It is high time', and 'It is about time' followed by a subject clause require the verb to be in the PAST SUBJUNCTIVE form (Simple Past Tense - V2), indicating that the action should have been taken already and is now overdue.\nTherefore, the present tense verb 'takes' must be replaced by the past form 'took'.\n(Note: If followed directly by an infinitive, use 'to + V1', e.g., 'It is high time to take measures').\n\nCorrect Sentence: 'It is high time that the municipal corporation took strict punitive measures against commercial encroachment on public sidewalks.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब 'It is high time' या 'It is time' के बाद कोई कर्ता (Subject) आता है, तो उसके बाद आने वाली क्रिया सदैव भूतकाल (Simple Past / V2) में होती है, क्योंकि यह दर्शाता है कि यह कार्य पहले ही हो जाना चाहिए था। अतः 'takes' के स्थान पर 'took' का प्रयोग होगा।\n\nशुद्ध वाक्य: It is high time that the municipal corporation took strict punitive measures against commercial encroachment on public sidewalks.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Tier-2 Classic: 'It is high time + SUBJECT + V2 (Past Tense)'. 'takes' -> change to 'took'.",
    "shortcut_text_hi": "Mains क्लासिक नियम: 'It is high time + कर्ता' आते ही क्रिया V2 (भूतकाल) होगी। 'takes' हटाकर 'took' लगाएं।"
  },
  {
    "question_number": 22,
    "practice_set": "SET A",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 2",
    "type_category": "Dangling Participle: Unattached Participial Modifier",
    "type_category_hi": "असंगत कृदंत (Dangling Participle): असंबद्ध विशेषण खंड",
    "question_text": "Select the segment in the sentence which contains a grammatical error:\n\nBeing a stormy and treacherous night, / the experienced sea captain / ordered all crew members / to anchor the vessel in the sheltered bay.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग का चयन करें:\n\nBeing a stormy and treacherous night, / the experienced sea captain / ordered all crew members / to anchor the vessel in the sheltered bay.",
    "options": {
      "a": "Being a stormy and treacherous night",
      "b": "the experienced sea captain",
      "c": "ordered all crew members",
      "d": "to anchor the vessel in the sheltered bay"
    },
    "options_hi": {
      "a": "Being a stormy and treacherous night",
      "b": "the experienced sea captain",
      "c": "ordered all crew members",
      "d": "to anchor the vessel in the sheltered bay"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: A participial phrase must have a clear and logical subject of reference. In 'Being a stormy and treacherous night, the experienced sea captain...', the participle 'Being' mistakenly modifies the subject of the main clause, making it sound as if 'the sea captain' was a stormy night!\nTo rectify this dangling participle error, provide an independent impersonal pronoun 'It' before 'being'.\n\nCorrect Sentence: 'It being a stormy and treacherous night, the experienced sea captain ordered all crew members to anchor the vessel in the sheltered bay.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: जब किसी कृदंत (Participle) का अपना कर्ता नहीं होता, तो वह मुख्य उपवाक्य के कर्ता से जुड़ जाता है। यहाँ 'Being a stormy night' लिखने से अर्थ निकलता है कि कप्तान ही तूफानी रात था! इस Dangling Participle दोष को दूर करने के लिए मौसम या समय के संदर्भ में 'It' लगाना अनिवार्य है: 'It being a stormy night...'\n\nशुद्ध वाक्य: It being a stormy and treacherous night, the experienced sea captain ordered all crew members to anchor the vessel in the sheltered bay.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "SSC Dangling Modifier Trap: Weather / Day / Night clauses with 'Being' MUST have 'It' as subject: 'It being a rainy/stormy day'.",
    "shortcut_text_hi": "Dangling Modifier नियम: मौसम, दिन या रात के साथ 'Being' आने पर उसके आगे 'It' लगाना अनिवार्य है -> 'It being a stormy night'."
  },
  {
    "question_number": 23,
    "practice_set": "SET A",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 3",
    "type_category": "Stative Verbs: Continuous Aspect Misuse with Verbs of Possession",
    "type_category_hi": "Stative Verbs: स्वामित्व वाली क्रियाओं में Continuous Tense का अनुचित प्रयोग",
    "question_text": "Identify the segment that contains a grammatical error:\n\nThis magnificent ancestral estate / is belonging to / a prominent freedom fighter's / descendants.",
    "question_text_hi": "वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThis magnificent ancestral estate / is belonging to / a prominent freedom fighter's / descendants.",
    "options": {
      "a": "This magnificent ancestral estate",
      "b": "is belonging to",
      "c": "a prominent freedom fighter's",
      "d": "descendants"
    },
    "options_hi": {
      "a": "This magnificent ancestral estate",
      "b": "is belonging to",
      "c": "a prominent freedom fighter's",
      "d": "descendants"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: Stative verbs describing states of ownership, perception, cognition, and emotion (such as 'belong', 'own', 'possess', 'know', 'understand', 'resemble', 'contain') are NOT used in progressive/continuous tenses.\n'is belonging to' must be replaced by the Simple Present form 'belongs to'.\n\nCorrect Sentence: 'This magnificent ancestral estate belongs to a prominent freedom fighter's descendants.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: स्वामित्व (Possession), भावना या मानसिक स्थिति दर्शाने वाली Stative Verbs (जैसे belong, own, possess, know, resemble) का प्रयोग Continuous/Progressive Tense में नहीं किया जाता। अतः 'is belonging to' के स्थान पर Simple Present 'belongs to' का प्रयोग होगा।\n\nशुद्ध वाक्य: This magnificent ancestral estate belongs to a prominent freedom fighter's descendants.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Stative Verb Alert: 'Belong to', 'Consist of', 'Resemble', 'Contain' NEVER take '-ing'. Say 'belongs to', never 'is belonging to'.",
    "shortcut_text_hi": "Stative Verb ट्रिक: Belong, Know, Resemble में कभी '-ing' नहीं लगता। 'is belonging to' गलत है -> 'belongs to' सही है।"
  },
  {
    "question_number": 24,
    "practice_set": "SET A",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 4",
    "type_category": "Word Choice & Malapropism: 'Affect' (Verb) vs 'Effect' (Noun)",
    "type_category_hi": "शब्द चयन: 'Affect' (क्रिया) बनाम 'Effect' (संज्ञा)",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nThe prolonged economic recession / has had an adverse affect / on the operational profitability / of micro and small enterprises.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe prolonged economic recession / has had an adverse affect / on the operational profitability / of micro and small enterprises.",
    "options": {
      "a": "The prolonged economic recession",
      "b": "has had an adverse affect",
      "c": "on the operational profitability",
      "d": "of micro and small enterprises"
    },
    "options_hi": {
      "a": "The prolonged economic recession",
      "b": "has had an adverse affect",
      "c": "on the operational profitability",
      "d": "of micro and small enterprises"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'Affect' is predominantly a VERB meaning 'to influence' or 'to act upon'. 'Effect' is predominantly a NOUN meaning 'a result' or 'an impact'.\nHere, the word follows the adjective 'adverse' and the article 'an', which demands a NOUN. Using 'affect' as a noun is incorrect; it must be 'an adverse effect'.\n\nCorrect Sentence: 'The prolonged economic recession has had an adverse effect on the operational profitability of micro and small enterprises.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Affect' सामान्यतः एक क्रिया (Verb) है जिसका अर्थ 'प्रभावित करना' होता है, जबकि 'Effect' एक संज्ञा (Noun) है जिसका अर्थ 'प्रभाव या परिणाम' होता है। यहाँ 'an adverse' (विशेषण) के बाद एक संज्ञा की आवश्यकता है, अतः 'affect' के स्थान पर 'effect' का प्रयोग होगा: 'an adverse effect'।\n\nशुद्ध वाक्य: The prolonged economic recession has had an adverse effect on the operational profitability...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Mnemonic: RAVEN -> Remember: Affect = Verb, Effect = Noun. 'Adverse effect' (noun), but 'The recession affected businesses' (verb).",
    "shortcut_text_hi": "याद रखें: Affect = क्रिया (Verb), Effect = संज्ञा (Noun)। 'Adverse effect' (संज्ञा) सही है।"
  },
  {
    "question_number": 25,
    "practice_set": "SET A",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 5",
    "type_category": "Complex Proximity Agreement: Multi-clause Sentence with 'Neither... nor'",
    "type_category_hi": "जटिल निकटता नियम: 'Neither... nor' युक्त बहु-उपवाक्य संरचना",
    "question_text": "Identify the segment containing a grammatical error, or select 'No error':\n\nNeither the comprehensive environmental assessment / conducted by independent specialists / nor the subsequent recommendations formulated by the task force / were contested by the industrial consortium.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग का चयन करें, अथवा 'No error' चुनें:\n\nNeither the comprehensive environmental assessment / conducted by independent specialists / nor the subsequent recommendations formulated by the task force / were contested by the industrial consortium.",
    "options": {
      "a": "Neither the comprehensive environmental assessment",
      "b": "conducted by independent specialists",
      "c": "nor the subsequent recommendations formulated by the task force",
      "d": "were contested by the industrial consortium / No error"
    },
    "options_hi": {
      "a": "Neither the comprehensive environmental assessment",
      "b": "conducted by independent specialists",
      "c": "nor the subsequent recommendations formulated by the task force",
      "d": "were contested by the industrial consortium / No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: When two subjects are connected by 'neither... nor', the verb must agree with the subject closest to it (the second subject).\nHere, Subject 1 is 'the comprehensive environmental assessment' (singular), but Subject 2 following 'nor' is 'the subsequent recommendations' (plural). Because the verb follows Subject 2, the plural verb 'were contested' is 100% grammatically correct.\nThis sentence is a sophisticated Tier-2 style construct testing proximity rule without any grammatical flaws. Hence, 'No error'.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: 'Neither... nor' में क्रिया हमेशा दूसरे/निकटतम कर्ता (Second Subject) के अनुसार आती है। यहाँ 'nor' के बाद आने वाला दूसरा कर्ता 'the subsequent recommendations' (बहुवचन) है। अतः इसके साथ प्रयुक्त बहुवचन क्रिया 'were contested' पूर्णतः शुद्ध है। इस वाक्य में कोई त्रुटि नहीं है।\n\nअतः सही उत्तर (d) No error है।",
    "shortcut_text": "Tier-2 Proximity Check: S1 (assessment - sing.) + nor + S2 (recommendations - PLURAL) -> Verb MUST be PLURAL ('were contested'). No error!",
    "shortcut_text_hi": "निकटता परीक्षण: 'nor' के बाद 'recommendations' (बहुवचन) है, अतः 'were contested' पूर्णतः शुद्ध है। कोई त्रुटि नहीं।"
  }
]
;

const SPOTTING_ERRORS_SET_B_QUESTIONS = [
  {
    "question_number": 1,
    "practice_set": "SET B",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: 'Either of' with Dual Alternative",
    "type_category_hi": "कर्ता-क्रिया समझौता: 'Either of' के साथ एकवचन क्रिया",
    "question_text": "In the sentence, identify the segment which contains a grammatical error:\n\nEither of the two designated highways / lead to / the central administrative district / of the state capital.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nEither of the two designated highways / lead to / the central administrative district / of the state capital.",
    "options": {
      "a": "Either of the two designated highways",
      "b": "lead to",
      "c": "the central administrative district",
      "d": "of the state capital"
    },
    "options_hi": {
      "a": "Either of the two designated highways",
      "b": "lead to",
      "c": "the central administrative district",
      "d": "of the state capital"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'Either of' refers to one out of two choices and takes a plural noun ('highways') followed strictly by a SINGULAR verb in the third person.\nHere, the base plural verb 'lead' must be replaced by the singular verb 'leads'.\n\nCorrect Sentence: 'Either of the two designated highways leads to the central administrative district of the state capital.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Either of' का प्रयोग दो में से किसी एक के अर्थ में होता है। इसके बाद संज्ञा बहुवचन (highways) होती है, परंतु क्रिया सदैव एकवचन (Singular) होती है।\nयहाँ 'lead' (बहुवचन) के स्थान पर 'leads' (एकवचन) का प्रयोग होगा।\n\nशुद्ध वाक्य: Either of the two designated highways leads to the central administrative district of the state capital.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Golden Rule: 'Either of / Neither of' + Plural Noun + SINGULAR VERB. 'Either of the highways' -> leads (not lead).",
    "shortcut_text_hi": "गोल्डन नियम: Either of + बहुवचन संज्ञा + एकवचन क्रिया। 'highways' देखकर भ्रमित न हों, 'leads' आएगा।"
  },
  {
    "question_number": 2,
    "practice_set": "SET B",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 2",
    "type_category": "Form of Verb: 'Did not' with Base Form (V1)",
    "type_category_hi": "क्रिया का रूप: 'Did not' के साथ V1 का प्रयोग",
    "question_text": "Select the segment that contains a grammatical error in the following sentence:\n\nThe customer care executive did not replied / to my formal complaint / despite three consecutive reminders / sent via registered email.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nThe customer care executive did not replied / to my formal complaint / despite three consecutive reminders / sent via registered email.",
    "options": {
      "a": "The customer care executive did not replied",
      "b": "to my formal complaint",
      "c": "despite three consecutive reminders",
      "d": "sent via registered email"
    },
    "options_hi": {
      "a": "The customer care executive did not replied",
      "b": "to my formal complaint",
      "c": "despite three consecutive reminders",
      "d": "sent via registered email"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: In the Simple Past Tense negative structure, the auxiliary 'did not' is always followed by the first form of the main verb (V1 - base form), NEVER the past tense form (V2).\n'did not replied' is a frequent TCS grammar trap; it must be corrected to 'did not reply'.\n\nCorrect Sentence: 'The customer care executive did not reply to my formal complaint despite three consecutive reminders sent via registered email.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: भूतकाल (Past Tense) के नकारात्मक वाक्यों में 'did not' के बाद मुख्य क्रिया का प्रथम रूप (Base form / V1) आता है, V2 नहीं।\n'did not replied' गलत है; इसके स्थान पर 'did not reply' आएगा।\n\nशुद्ध वाक्य: The customer care executive did not reply to my formal complaint despite three consecutive reminders...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Golden Formula: DID NOT + V1 (Base Verb). 'Did not replied' is INCORRECT -> write 'Did not reply'.",
    "shortcut_text_hi": "गोल्डन फॉर्मूला: Did not + V1। 'Did not replied' गलत है -> 'Did not reply' सही होगा।"
  },
  {
    "question_number": 3,
    "practice_set": "SET B",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 3",
    "type_category": "Prepositions: 'Between' (Two) vs 'Among' (Three or More)",
    "type_category_hi": "Preposition: दो के लिए 'Between' बनाम तीन या अधिक के लिए 'Among'",
    "question_text": "Identify the segment containing an error:\n\nThe ancestral agricultural land / was partitioned equally / between the four surviving brothers / according to the family settlement deed.",
    "question_text_hi": "त्रुटिपूर्ण भाग की पहचान करें:\n\nThe ancestral agricultural land / was partitioned equally / between the four surviving brothers / according to the family settlement deed.",
    "options": {
      "a": "The ancestral agricultural land",
      "b": "was partitioned equally",
      "c": "between the four surviving brothers",
      "d": "according to the family settlement deed"
    },
    "options_hi": {
      "a": "The ancestral agricultural land",
      "b": "was partitioned equally",
      "c": "between the four surviving brothers",
      "d": "according to the family settlement deed"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: 'Between' is used when distributing or referring to two persons, entities, or distinct items. When referring to distribution among more than two persons or objects (here, 'four surviving brothers'), 'among' or 'amongst' must be used.\nReplace 'between the four surviving brothers' with 'among the four surviving brothers'.\n\nCorrect Sentence: 'The ancestral agricultural land was partitioned equally among the four surviving brothers according to the family settlement deed.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Between' का प्रयोग सामान्यतः दो व्यक्तियों या वस्तुओं के संदर्भ में होता है, जबकि दो से अधिक (यहाँ चार भाई हैं) के बीच वितरण के लिए 'among' या 'amongst' का प्रयोग किया जाता है।\nअतः 'between the four brothers' के स्थान पर 'among the four brothers' का प्रयोग होगा।\n\nशुद्ध वाक्य: The ancestral agricultural land was partitioned equally among the four surviving brothers...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Number Rule: Between = Exactly TWO entities. Among = THREE or MORE entities. For 4 brothers -> use 'AMONG'.",
    "shortcut_text_hi": "संख्या नियम: 2 के लिए 'Between', 3 या अधिक के लिए 'Among'। यहाँ 4 भाई हैं, अतः 'Among' आएगा।"
  },
  {
    "question_number": 4,
    "practice_set": "SET B",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 4",
    "type_category": "Articles: Definite Article 'The' with Superlative Adjectives",
    "type_category_hi": "Article: Superlative Degree के साथ 'The' का प्रयोग",
    "question_text": "The sentence below has been split into four parts. Find the part with an error:\n\nIn public administration, / absolute transparency is / a best remedy / to eliminate corruption at all levels.",
    "question_text_hi": "वाक्य में उस भाग का पता लगाएं जिसमें त्रुटि है:\n\nIn public administration, / absolute transparency is / a best remedy / to eliminate corruption at all levels.",
    "options": {
      "a": "In public administration",
      "b": "absolute transparency is",
      "c": "a best remedy",
      "d": "to eliminate corruption at all levels"
    },
    "options_hi": {
      "a": "In public administration",
      "b": "absolute transparency is",
      "c": "a best remedy",
      "d": "to eliminate corruption at all levels"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: An adjective in the superlative degree ('best', 'highest', 'oldest', 'most important') must ALWAYS be preceded by the definite article 'the', because it denotes an exclusive, supreme quality.\nUsing the indefinite article 'a best remedy' is ungrammatical; it must be corrected to 'the best remedy'.\n\nCorrect Sentence: 'In public administration, absolute transparency is the best remedy to eliminate corruption at all levels.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: विशेषण की Superlative Degree (जैसे best, greatest, highest) से पहले सदैव Definite Article 'The' का प्रयोग होता है, 'A/An' का नहीं।\nअतः 'a best remedy' के स्थान पर 'the best remedy' का प्रयोग होगा।\n\nशुद्ध वाक्य: In public administration, absolute transparency is the best remedy to eliminate corruption at all levels.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Article Rule: Superlative degree ALWAYS takes 'THE'. Say 'THE best', 'THE highest', 'THE most capable'.",
    "shortcut_text_hi": "नियम: Superlative degree के पहले हमेशा 'THE' आता है। 'a best' गलत है -> 'the best' सही है।"
  },
  {
    "question_number": 5,
    "practice_set": "SET B",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 5",
    "type_category": "Nouns: Uncountable Noun 'Advice' (No Plural Form)",
    "type_category_hi": "संज्ञा: अगणनीय संज्ञा 'Advice' का अशुद्ध बहुवचन",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe experienced career counselor / gave him many valuable advices / regarding competitive examination strategies / and time management.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nThe experienced career counselor / gave him many valuable advices / regarding competitive examination strategies / and time management.",
    "options": {
      "a": "The experienced career counselor",
      "b": "gave him many valuable advices",
      "c": "regarding competitive examination strategies",
      "d": "and time management"
    },
    "options_hi": {
      "a": "The experienced career counselor",
      "b": "gave him many valuable advices",
      "c": "regarding competitive examination strategies",
      "d": "and time management"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'Advice' is an uncountable abstract noun. It never takes the plural suffix '-s' or '-es' ('advices' is incorrect). Furthermore, because it is uncountable, it cannot be directly modified by 'many'.\nTo express plurality, use 'many pieces of valuable advice' or 'much valuable advice'.\n\nCorrect Sentence: 'The experienced career counselor gave him many pieces of valuable advice regarding competitive examination strategies and time management.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Advice' एक अगणनीय भाववाचक संज्ञा (Uncountable noun) है। इसका बहुवचन 'advices' नहीं होता और न ही इसके आगे सीधे 'many' लग सकता है। इसे व्यक्त करने के लिए 'many pieces of advice' या 'much advice' का प्रयोग किया जाता है।\n\nशुद्ध वाक्य: The experienced career counselor gave him many pieces of valuable advice regarding competitive examination strategies...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Red-Flag Noun: 'Advice' NEVER has an 's'! Use 'much advice' or 'pieces of advice'. 'Advices' = 100% Error.",
    "shortcut_text_hi": "चेतावनी: 'Advice' में कभी 's' नहीं लगता! 'many advices' गलत है -> 'many pieces of advice' सही है।"
  },
  {
    "question_number": 6,
    "practice_set": "SET B",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: 'Along with' Prepositional Connector",
    "type_category_hi": "कर्ता-क्रिया समझौता: 'Along with' से जुड़े कर्ता",
    "question_text": "Select the segment that contains a grammatical error:\n\nThe ship captain, along with / all his dedicated crew members, / were rescued by the coast guard / after their vessel ran aground.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nThe ship captain, along with / all his dedicated crew members, / were rescued by the coast guard / after their vessel ran aground.",
    "options": {
      "a": "The ship captain, along with",
      "b": "all his dedicated crew members",
      "c": "were rescued by the coast guard",
      "d": "after their vessel ran aground"
    },
    "options_hi": {
      "a": "The ship captain, along with",
      "b": "all his dedicated crew members",
      "c": "were rescued by the coast guard",
      "d": "after their vessel ran aground"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When two subjects are connected by 'along with', 'together with', 'accompanied by', 'as well as', 'in addition to', the verb agrees exclusively with the FIRST subject.\nHere, the first subject is 'The ship captain' (singular). Therefore, the verb must be singular 'was rescued', NOT plural 'were rescued'.\n\nCorrect Sentence: 'The ship captain, along with all his dedicated crew members, was rescued by the coast guard after their vessel ran aground.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब दो कर्ता 'along with', 'together with', 'as well as' से जुड़े हों, तो क्रिया प्रथम कर्ता (First Subject) के अनुसार आती है। यहाँ प्रथम कर्ता 'The ship captain' (एकवचन) है, अतः 'were rescued' के स्थान पर 'was rescued' का प्रयोग होगा।\n\nशुद्ध वाक्य: The ship captain, along with all his dedicated crew members, was rescued by the coast guard...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Connector Trick: [Subject 1] + ALONG WITH + [Subject 2] -> VERB = SUBJECT 1! Captain (singular) -> use 'was rescued'.",
    "shortcut_text_hi": "ट्रिक: Subject 1 + along with + Subject 2 -> क्रिया हमेशा Subject 1 के अनुसार होगी। 'Captain' एकवचन है -> 'was' आएगा।"
  },
  {
    "question_number": 7,
    "practice_set": "SET B",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 2",
    "type_category": "Correlative Conjunctions: 'No sooner did... than' with Base Verb",
    "type_category_hi": "सह-संबंधी संयोजक: 'No sooner did... than' के साथ V1",
    "question_text": "The sentence below has been divided into four parts. Find the part with an error:\n\nNo sooner did the express train / arrived at the platform / than the eager commuters rushed / to board the unreserved coaches.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nNo sooner did the express train / arrived at the platform / than the eager commuters rushed / to board the unreserved coaches.",
    "options": {
      "a": "No sooner did the express train",
      "b": "arrived at the platform",
      "c": "than the eager commuters rushed",
      "d": "to board the unreserved coaches"
    },
    "options_hi": {
      "a": "No sooner did the express train",
      "b": "arrived at the platform",
      "c": "than the eager commuters rushed",
      "d": "to board the unreserved coaches"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: In an inverted 'No sooner' construction using the auxiliary 'did', the following main verb must be in its base form (V1), NOT in past form (V2).\nHere, 'arrived' (V2) must be replaced by 'arrive' (V1).\n(Note: If 'had' were used, then V3 would follow: 'No sooner had the train arrived...').\n\nCorrect Sentence: 'No sooner did the express train arrive at the platform than the eager commuters rushed to board the unreserved coaches.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'No sooner' के साथ जब सहायक क्रिया 'did' का प्रयोग होता है, तो मुख्य क्रिया V1 (प्रथम रूप) में आती है, V2 में नहीं। अतः 'arrived' के स्थान पर 'arrive' का प्रयोग होगा। (यदि 'had' होता तो 'arrived' आता)।\n\nशुद्ध वाक्य: No sooner did the express train arrive at the platform than the eager commuters rushed to board...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Formula Check: 'No sooner DID + Subject + V1 (Base form) ... THAN'. 'No sooner did the train arrive' (not arrived).",
    "shortcut_text_hi": "फॉर्मूला: No sooner DID + कर्ता + V1 ... THAN। 'Did' के साथ 'arrived' नहीं, 'arrive' आएगा।"
  },
  {
    "question_number": 8,
    "practice_set": "SET B",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 3",
    "type_category": "Tenses: Past Perfect Sequence with 'Before'",
    "type_category_hi": "काल: 'Before' के साथ भूतकाल का क्रम (Past Perfect)",
    "question_text": "Identify the segment containing an error, or select 'No error':\n\nThe critical patient had expired / before the specialist surgeon / arrived at the intensive care unit / with the emergency team.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें, अथवा 'No error' चुनें:\n\nThe critical patient had expired / before the specialist surgeon / arrived at the intensive care unit / with the emergency team.",
    "options": {
      "a": "The critical patient had expired",
      "b": "before the specialist surgeon",
      "c": "arrived at the intensive care unit",
      "d": "No error"
    },
    "options_hi": {
      "a": "The critical patient had expired",
      "b": "before the specialist surgeon",
      "c": "arrived at the intensive care unit",
      "d": "No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: When two past actions occurred consecutively, the earlier completed action takes the Past Perfect Tense ('had + V3'), and the subsequent action takes the Simple Past Tense ('V2').\nIn this sentence, the patient expiring happened first ('had expired'), and the surgeon arriving happened later ('arrived'). Both tenses are correctly applied with the temporal connector 'before'. Therefore, the sentence has NO ERROR.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: जब भूतकाल में दो कार्य एक के बाद एक घटित होते हैं, तो पहले पूर्ण हुए कार्य के लिए Past Perfect ('had + V3') और बाद में हुए कार्य के लिए Simple Past ('V2') का प्रयोग होता है।\nयहाँ मरीज की मृत्यु पहले हुई ('had expired') और डॉक्टर बाद में पहुँचे ('arrived')। दोनों कालों का प्रयोग सर्वथा शुद्ध है। अतः कोई त्रुटि नहीं है (No error)।\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Timeline Rule: 1st Action = HAD + V3 ('had expired'). 2nd Action = V2 ('arrived'). Sequence is perfectly valid -> No error.",
    "shortcut_text_hi": "कालक्रम नियम: पहला कार्य = Had + V3 ('had expired')। दूसरा कार्य = V2 ('arrived')। वाक्य पूर्णतः शुद्ध है।"
  },
  {
    "question_number": 9,
    "practice_set": "SET B",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 4",
    "type_category": "Adjectives: Latin Comparatives Ending in '-ior' take 'To'",
    "type_category_hi": "विशेषण: '-ior' पर समाप्त होने वाले लैटिन तुलनात्मक शब्दों के साथ 'To'",
    "question_text": "Select the segment in the sentence which contains a grammatical error:\n\nThough he is much younger in age, / he is senior than / all the other research associates / in the Department of Biotechnology.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThough he is much younger in age, / he is senior than / all the other research associates / in the Department of Biotechnology.",
    "options": {
      "a": "Though he is much younger in age",
      "b": "he is senior than",
      "c": "all the other research associates",
      "d": "in the Department of Biotechnology"
    },
    "options_hi": {
      "a": "Though he is much younger in age",
      "b": "he is senior than",
      "c": "all the other research associates",
      "d": "in the Department of Biotechnology"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: Comparative adjectives borrowed from Latin ending in '-ior' (such as senior, junior, superior, inferior, prior, anterior, posterior) are followed by the preposition 'to', NEVER by 'than'.\nReplace 'senior than' with 'senior to'.\n\nCorrect Sentence: 'Though he is much younger in age, he is senior to all the other research associates in the Department of Biotechnology.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: लैटिन भाषा से आए '-ior' पर समाप्त होने वाले तुलनात्मक विशेषण (जैसे senior, junior, superior, inferior, prior) के बाद 'than' का प्रयोग नहीं होता बल्कि Preposition 'to' का प्रयोग होता है।\nअतः 'senior than' के स्थान पर 'senior to' का प्रयोग होगा।\n\nशुद्ध वाक्य: Though he is much younger in age, he is senior to all the other research associates in the Department...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Rule: Senior / Junior / Superior / Inferior / Prior + TO (Never THAN!). 'Senior than' is an instant SSC error flag.",
    "shortcut_text_hi": "नियम: Senior, Junior, Superior के बाद हमेशा 'TO' आता है, 'than' कभी नहीं। 'Senior than' तुरंत पहचानें।"
  },
  {
    "question_number": 10,
    "practice_set": "SET B",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 5",
    "type_category": "Conditionals: Type 1 Future Modal in Subordinate Clause",
    "type_category_hi": "शर्त सूचक वाक्य: उपवाक्य में Future Modal का अनुचित प्रयोग",
    "question_text": "Identify the segment containing a grammatical error:\n\nIf the foreign delegates will arrive / in New Delhi tomorrow morning, / the foreign secretary will personally / receive them at the airport.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nIf the foreign delegates will arrive / in New Delhi tomorrow morning, / the foreign secretary will personally / receive them at the airport.",
    "options": {
      "a": "If the foreign delegates will arrive",
      "b": "in New Delhi tomorrow morning",
      "c": "the foreign secretary will personally",
      "d": "receive them at the airport"
    },
    "options_hi": {
      "a": "If the foreign delegates will arrive",
      "b": "in New Delhi tomorrow morning",
      "c": "the foreign secretary will personally",
      "d": "receive them at the airport"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: In conditional sentences (Type 1), the subordinate conditional clause introduced by 'if', 'when', 'as soon as', 'until', 'provided that' must be in the Simple Present Tense, NEVER in the Simple Future Tense (with 'will' or 'shall'). Future modal 'will' is reserved strictly for the main clause.\nTherefore, 'If the foreign delegates will arrive' must be replaced by 'If the foreign delegates arrive'.\n\nCorrect Sentence: 'If the foreign delegates arrive in New Delhi tomorrow morning, the foreign secretary will personally receive them at the airport.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: प्रथम शर्त (Type 1 Conditional) में शर्त दर्शाने वाले उपवाक्य (If-clause) में कभी भी Future Tense ('will / shall') का प्रयोग नहीं होता; इसमें Simple Present Tense का प्रयोग होता है। 'Will/Shall' केवल मुख्य उपवाक्य (Main clause) में आता है।\nअतः 'will arrive' के स्थान पर 'arrive' का प्रयोग होगा।\n\nशुद्ध वाक्य: If the foreign delegates arrive in New Delhi tomorrow morning, the foreign secretary will personally receive them...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Conditional Rule: NEVER use 'WILL / SHALL' immediately after IF / WHEN / AS SOON AS! 'If delegates will arrive' -> 'If delegates arrive'.",
    "shortcut_text_hi": "शर्त नियम: IF, WHEN, AS SOON AS के तुरंत बाद कभी भी WILL / SHALL नहीं आता! Simple Present का प्रयोग करें।"
  },
  {
    "question_number": 11,
    "practice_set": "SET B",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 1",
    "type_category": "PYQ Pattern: 'The only one of...' takes Singular Verb",
    "type_category_hi": "PYQ पैटर्न: 'The only one of...' के साथ एकवचन क्रिया",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nThis historical chronicle is / the only one of his research publications / that are worth reading / for postgraduate history students.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nThis historical chronicle is / the only one of his research publications / that are worth reading / for postgraduate history students.",
    "options": {
      "a": "This historical chronicle is",
      "b": "the only one of his research publications",
      "c": "that are worth reading",
      "d": "for postgraduate history students"
    },
    "options_hi": {
      "a": "This historical chronicle is",
      "b": "the only one of his research publications",
      "c": "that are worth reading",
      "d": "for postgraduate history students"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: While 'one of the + plural noun + that' normally takes a plural verb, when modified by 'THE ONLY' ('the only one of... that'), the emphasis shifts exclusively to the single item denoted by 'one'. Therefore, the verb following the relative pronoun MUST be SINGULAR.\n'that are worth reading' must be changed to 'that is worth reading'.\n\nCorrect Sentence: 'This historical chronicle is the only one of his research publications that is worth reading for postgraduate history students.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: यद्यपि 'one of + noun + that' के बाद बहुवचन क्रिया आती है, परंतु जब 'THE ONLY ONE' लगा हो, तो पूरा जोर केवल उस एक पर होता है। अतः Relative Pronoun के बाद आने वाली क्रिया सदैव एकवचन (Singular) होती है।\nयहाँ 'that are' के स्थान पर 'that is' का प्रयोग होगा।\n\nशुद्ध वाक्य: This historical chronicle is the only one of his research publications that is worth reading...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "PYQ Master Rule: 'One of... that + PLURAL verb', BUT 'THE ONLY ONE of... that + SINGULAR VERB'. 'The only one... that IS'.",
    "shortcut_text_hi": "PYQ मास्टर नियम: केवल 'One of' हो तो Plural क्रिया, परंतु 'THE ONLY ONE' दिखते ही क्रिया SINGULAR ('is') होगी।"
  },
  {
    "question_number": 12,
    "practice_set": "SET B",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 2",
    "type_category": "PYQ Pattern: Redundant Preposition 'Into' with Verb 'Enter'",
    "type_category_hi": "PYQ पैटर्न: क्रिया 'Enter' के साथ अनावश्यक Preposition 'Into'",
    "question_text": "Identify the segment containing a grammatical error:\n\nWithout showing their identification badges, / the foreign delegates / entered into the conference hall / during the closed-door session.",
    "question_text_hi": "वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nWithout showing their identification badges, / the foreign delegates / entered into the conference hall / during the closed-door session.",
    "options": {
      "a": "Without showing their identification badges",
      "b": "the foreign delegates",
      "c": "entered into the conference hall",
      "d": "during the closed-door session"
    },
    "options_hi": {
      "a": "Without showing their identification badges",
      "b": "the foreign delegates",
      "c": "entered into the conference hall",
      "d": "during the closed-door session"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When 'enter' refers to physically going into a physical space (a room, building, hall, vehicle), it is a transitive verb that takes a direct object WITHOUT the preposition 'into'.\n(Note: 'Enter into' is valid only figuratively for agreements, alliances, or discussions, e.g., 'entered into a contract').\nIn this sentence, physical entry is described; remove 'into'.\n\nCorrect Sentence: 'Without showing their identification badges, the foreign delegates entered the conference hall during the closed-door session.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब 'enter' का प्रयोग किसी भौतिक स्थान (कमरे, हॉल, इमारत) में प्रवेश करने के लिए होता है, तो इसके बाद 'into' का प्रयोग पूर्णतः वर्जित है। ('Enter into' केवल समझौते या बातचीत में प्रवेश के लिए प्रयुक्त होता है)।\nअतः 'entered into the conference hall' के स्थान पर 'entered the conference hall' आएगा।\n\nशुद्ध वाक्य: Without showing their identification badges, the foreign delegates entered the conference hall...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "PYQ Red-Alert: Physical Place + ENTER (NO 'INTO'). Say 'entered the room', NEVER 'entered into the room'.",
    "shortcut_text_hi": "PYQ नियम: कमरे या हॉल में प्रवेश के लिए 'enter' के साथ 'into' कभी नहीं आता। 'entered the hall' सही है।"
  },
  {
    "question_number": 13,
    "practice_set": "SET B",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 3",
    "type_category": "PYQ Pattern: Question Tag for Imperative Suggestions ('Let us / Let's')",
    "type_category_hi": "PYQ पैटर्न: 'Let us / Let's' वाले सुझाव वाक्यों का Question Tag",
    "question_text": "The sentence below has been split into four parts. Identify the part with an error:\n\nLet us organize / a commemorative cultural programme / for our retiring principal, / will you?",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग की पहचान करें:\n\nLet us organize / a commemorative cultural programme / for our retiring principal, / will you?",
    "options": {
      "a": "Let us organize",
      "b": "a commemorative cultural programme",
      "c": "for our retiring principal",
      "d": "will you?"
    },
    "options_hi": {
      "a": "Let us organize",
      "b": "a commemorative cultural programme",
      "c": "for our retiring principal",
      "d": "will you?"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: In English grammar, imperative sentences expressing a mutual proposal or suggestion beginning with 'Let us' or 'Let's' ALWAYS take the fixed question tag 'shall we?'.\nThe question tag 'will you?' or 'won't you?' is used for commands or requests addressed directly to the listener ('Open the door, will you?').\nReplace 'will you?' with 'shall we?'.\n\nCorrect Sentence: 'Let us organize a commemorative cultural programme for our retiring principal, shall we?'\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: 'Let us' या 'Let's' से शुरू होने वाले प्रस्ताव या सुझाव सूचक वाक्यों का Question Tag सदैव 'shall we?' होता है, 'will you?' नहीं। ('Will you?' का प्रयोग केवल सीधे आदेश या निवेदन में होता है)।\nअतः 'will you?' के स्थान पर 'shall we?' का प्रयोग होगा।\n\nशुद्ध वाक्य: Let us organize a commemorative cultural programme for our retiring principal, shall we?\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Question Tag Formula: 'Let us / Let's ...' -> Tag is ALWAYS 'SHALL WE?'. Never 'will you' or 'don't we'.",
    "shortcut_text_hi": "Question Tag सूत्र: 'Let us' दिखते ही टैग हमेशा 'shall we?' बनेगा। 'will you' गलत है।"
  },
  {
    "question_number": 14,
    "practice_set": "SET B",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 4",
    "type_category": "PYQ Pattern: Phrasal Adjective 'Accustomed to' + Gerund",
    "type_category_hi": "PYQ पैटर्न: 'Accustomed to' के बाद Gerund (V-ing)",
    "question_text": "Select the segment in the sentence that contains an error:\n\nDuring the peak tax audit season, / the senior chartered accountant / was accustomed to work / until the early hours of morning.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nDuring the peak tax audit season, / the senior chartered accountant / was accustomed to work / until the early hours of morning.",
    "options": {
      "a": "During the peak tax audit season",
      "b": "the senior chartered accountant",
      "c": "was accustomed to work",
      "d": "until the early hours of morning"
    },
    "options_hi": {
      "a": "During the peak tax audit season",
      "b": "the senior chartered accountant",
      "c": "was accustomed to work",
      "d": "until the early hours of morning"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: In the structure 'be accustomed to' (meaning habituated or familiarized), 'to' is a preposition. A preposition is always followed by a noun or a gerund ('V1 + ing'), NOT the bare infinitive verb.\n'was accustomed to work' must be replaced by 'was accustomed to working'.\nSimilar expressions taking gerund: be used to + V-ing, be addicted to + V-ing, be given to + V-ing.\n\nCorrect Sentence: 'During the peak tax audit season, the senior chartered accountant was accustomed to working until the early hours of morning.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Be accustomed to' (आदी होना) में 'to' Preposition होता है। Preposition के बाद क्रिया का Gerund रूप ('V-ing') आता है, Infinitive (V1) नहीं।\nअतः 'accustomed to work' के स्थान पर 'accustomed to working' का प्रयोग होगा।\n\nशुद्ध वाक्य: During the peak tax audit season, the senior chartered accountant was accustomed to working...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "PYQ Trap: 'Accustomed to / Be used to + V-ING'. Say 'accustomed to working', never 'accustomed to work'.",
    "shortcut_text_hi": "PYQ ट्रिक: 'Accustomed to' के बाद हमेशा 'V-ing' आता है। 'to work' गलत है -> 'to working' सही है।"
  },
  {
    "question_number": 15,
    "practice_set": "SET B",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 5",
    "type_category": "PYQ Pattern: Inherently Plural Dual-Part Nouns ('Spectacles')",
    "type_category_hi": "PYQ पैटर्न: दो अंगों वाली स्वभावतः बहुवचन संज्ञाएं ('Spectacles')",
    "question_text": "Identify the segment that contains a grammatical error:\n\nHis new imported spectacles / has been severely damaged / during the competitive football tournament / played yesterday.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nHis new imported spectacles / has been severely damaged / during the competitive football tournament / played yesterday.",
    "options": {
      "a": "His new imported spectacles",
      "b": "has been severely damaged",
      "c": "during the competitive football tournament",
      "d": "played yesterday"
    },
    "options_hi": {
      "a": "His new imported spectacles",
      "b": "has been severely damaged",
      "c": "during the competitive football tournament",
      "d": "played yesterday"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: Nouns consisting of two symmetrical parts—such as spectacles, glasses, scissors, trousers, pliers, binoculars, tweezers—are inherently PLURAL in both form and meaning. They always take a plural verb.\nTherefore, 'has been' must be changed to 'have been'.\n(Note: If preceded by 'A pair of', the verb becomes singular: 'A pair of spectacles has been damaged').\n\nCorrect Sentence: 'His new imported spectacles have been severely damaged during the competitive football tournament played yesterday.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: दो समान भागों से बनी वस्तुएं जैसे Spectacles (चश्मा), Scissors (कैंची), Trousers (पतलून), Binoculars (दूरबीन) स्वभावतः बहुवचन होती हैं और इनके साथ हमेशा बहुवचन क्रिया का प्रयोग होता है। अतः 'has been' के स्थान पर 'have been' का प्रयोग होगा। (यदि 'A pair of' लगा हो तो क्रिया एकवचन होती है)।\n\nशुद्ध वाक्य: His new imported spectacles have been severely damaged during the competitive football tournament...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Dual Nouns Rule: Spectacles / Scissors / Trousers = PLURAL VERB ('have / are'). Only 'A pair of...' takes a singular verb.",
    "shortcut_text_hi": "नियम: Spectacles, Scissors, Trousers के साथ हमेशा 'have / are' आता है। 'has been' गलत है -> 'have been' सही है।"
  },
  {
    "question_number": 16,
    "practice_set": "SET B",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 1",
    "type_category": "Advanced Subject-Verb Agreement: Collective Head Noun with Compound Modifiers",
    "type_category_hi": "उन्नत कर्ता-क्रिया समझौता: समूहवाचक मुख्य संज्ञा और संयुक्त पूरक",
    "question_text": "The following sentence has been split into four segments. Identify the segment with an error:\n\nA fragrant bouquet of fresh red roses / and white lilies / were gracefully presented / to the visiting ambassador on arrival.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nA fragrant bouquet of fresh red roses / and white lilies / were gracefully presented / to the visiting ambassador on arrival.",
    "options": {
      "a": "A fragrant bouquet of fresh red roses",
      "b": "and white lilies",
      "c": "were gracefully presented",
      "d": "to the visiting ambassador on arrival"
    },
    "options_hi": {
      "a": "A fragrant bouquet of fresh red roses",
      "b": "and white lilies",
      "c": "were gracefully presented",
      "d": "to the visiting ambassador on arrival"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When a collective noun like 'a bouquet', 'a flock', 'a fleet', 'a bunch', or 'a set' is followed by a prepositional phrase containing plural nouns ('of fresh red roses and white lilies'), the true grammatical subject remains the singular collective head noun ('A bouquet').\nTherefore, the verb must be singular 'was gracefully presented', NOT plural 'were gracefully presented'.\n\nCorrect Sentence: 'A fragrant bouquet of fresh red roses and white lilies was gracefully presented to the visiting ambassador on arrival.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब 'A bouquet of', 'A set of', 'A flock of' जैसे समूहवाचक पदों के बाद बहुवचन संज्ञाएं आती हैं, तो वास्तविक कर्ता मुख्य संज्ञा 'A bouquet' (एकवचन) होता है, न कि फूल (roses and lilies)। अतः क्रिया एकवचन 'was presented' होगी, 'were' नहीं।\n\nशुद्ध वाक्य: A fragrant bouquet of fresh red roses and white lilies was gracefully presented to the visiting ambassador...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Formula: 'A [Collective Noun] of Plural Nouns' -> SINGULAR VERB! 'A bouquet of roses WAS presented' (not were).",
    "shortcut_text_hi": "फॉर्मूला: 'A bouquet of...' में वास्तविक कर्ता 'A bouquet' (एकवचन) है -> 'was' सही है।"
  },
  {
    "question_number": 17,
    "practice_set": "SET B",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 2",
    "type_category": "Subjunctive Mood: Unreal Hypothetical Wish ('If I were')",
    "type_category_hi": "Subjunctive Mood: काल्पनिक इच्छा ('If I were')",
    "question_text": "Identify the segment containing a grammatical error:\n\nIf I was the director / of the premier space agency, / I would prioritize interstellar exploration / over mundane projects.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nIf I was the director / of the premier space agency, / I would prioritize interstellar exploration / over mundane projects.",
    "options": {
      "a": "If I was the director",
      "b": "of the premier space agency",
      "c": "I would prioritize interstellar exploration",
      "d": "over mundane projects"
    },
    "options_hi": {
      "a": "If I was the director",
      "b": "of the premier space agency",
      "c": "I would prioritize interstellar exploration",
      "d": "over mundane projects"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: In hypothetical, counterfactual, or unreal conditional clauses (expressing wishes, fantasies, or imaginary situations), the Subjunctive Mood requires the verb 'WERE' for all persons and numbers (including 'I', 'he', 'she', 'it'). 'Was' is strictly ungrammatical in standard formal English for unreal conditions.\n'If I was' must be replaced by 'If I were'.\n\nCorrect Sentence: 'If I were the director of the premier space agency, I would prioritize interstellar exploration over mundane projects.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: काल्पनिक (Hypothetical), असंभव या अवास्तविक इच्छा दर्शाने वाले वाक्यों में Past Subjunctive Mood का प्रयोग होता है, जहाँ सभी कर्ताओं (I, He, She, It) के साथ क्रिया 'WERE' का प्रयोग अनिवार्य होता है, 'WAS' का नहीं।\nअतः 'If I was' के स्थान पर 'If I were' का प्रयोग होगा।\n\nशुद्ध वाक्य: If I were the director of the premier space agency, I would prioritize interstellar exploration...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Subjunctive Golden Rule: Imaginary / Counterfactual Condition -> ALWAYS use 'WERE', never 'WAS'. 'If I WERE king / PM / bird'.",
    "shortcut_text_hi": "काल्पनिक नियम: कल्पना या असंभव शर्त में हमेशा 'WERE' आता है, 'WAS' कभी नहीं। 'If I were...' सही होगा।"
  },
  {
    "question_number": 18,
    "practice_set": "SET B",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 3",
    "type_category": "Correlative Conjunctions: 'Scarcely had... when' Correlative Pair",
    "type_category_hi": "सह-संबंधी संयोजक: 'Scarcely had... when' का सही युग्म",
    "question_text": "Select the segment that contains a grammatical error in the following sentence:\n\nScarcely had the eminent scientist / stepped onto the podium / than the microphone ceased functioning / due to a sudden power outage.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nScarcely had the eminent scientist / stepped onto the podium / than the microphone ceased functioning / due to a sudden power outage.",
    "options": {
      "a": "Scarcely had the eminent scientist",
      "b": "stepped onto the podium",
      "c": "than the microphone ceased functioning",
      "d": "due to a sudden power outage"
    },
    "options_hi": {
      "a": "Scarcely had the eminent scientist",
      "b": "stepped onto the podium",
      "c": "than the microphone ceased functioning",
      "d": "due to a sudden power outage"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: The correlative conjunction 'Scarcely' is always paired with 'when' (or 'before'), NEVER with 'than'. 'Than' is exclusively paired with 'No sooner'.\nIn this sentence, 'than' must be replaced by 'when'.\n\nCorrect Sentence: 'Scarcely had the eminent scientist stepped onto the podium when the microphone ceased functioning due to a sudden power outage.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Scarcely' और 'Hardly' का सह-संबंधी युग्म 'when' (या before) होता है, 'than' नहीं। 'Than' का प्रयोग केवल 'No sooner' के साथ किया जाता है।\nअतः 'than' के स्थान पर 'when' का प्रयोग होगा।\n\nशुद्ध वाक्य: Scarcely had the eminent scientist stepped onto the podium when the microphone ceased functioning...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Pair Check: Scarcely -> WHEN. Hardly -> WHEN. No sooner -> THAN. 'Scarcely had... than' is a 100% textbook TCS error.",
    "shortcut_text_hi": "युग्म नियम: Scarcely के साथ 'WHEN' आता है, 'than' नहीं। 'Scarcely... than' देखते ही 'when' लगाएं।"
  },
  {
    "question_number": 19,
    "practice_set": "SET B",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 4",
    "type_category": "Compound Modifiers: Numeral + Noun Adjectives",
    "type_category_hi": "संयुक्त विशेषण: संख्या + संज्ञा विशेषण",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe commuter handed over / two ten-rupees notes / to the auto-rickshaw driver / for the short journey across the boulevard.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nThe commuter handed over / two ten-rupees notes / to the auto-rickshaw driver / for the short journey across the boulevard.",
    "options": {
      "a": "The commuter handed over",
      "b": "two ten-rupees notes",
      "c": "to the auto-rickshaw driver",
      "d": "for the short journey across the boulevard"
    },
    "options_hi": {
      "a": "The commuter handed over",
      "b": "two ten-rupees notes",
      "c": "to the auto-rickshaw driver",
      "d": "for the short journey across the boulevard"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When a phrase consisting of a number and a noun modifies another noun (here, modifying 'notes'), the modifying noun functions as an adjective and must remain in its SINGULAR form.\nTherefore, 'ten-rupees notes' is incorrect and must be written as 'ten-rupee notes'.\n(Note: If used without a following head noun, the plural is permissible, e.g., 'He gave me ten rupees').\n\nCorrect Sentence: 'The commuter handed over two ten-rupee notes to the auto-rickshaw driver for the short journey across the boulevard.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब कोई संख्या और संज्ञा मिलकर किसी अन्य संज्ञा (यहाँ 'notes') की विशेषता बताने वाले विशेषण का कार्य करते हैं, तो विशेषण का बहुवचन नहीं बनता। अतः 'ten-rupees notes' गलत है; इसके स्थान पर 'ten-rupee notes' का प्रयोग होगा।\n\nशुद्ध वाक्य: The commuter handed over two ten-rupee notes to the auto-rickshaw driver for the short journey...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "SSC Modifier Rule: Numeral + Noun + NOUN -> The middle noun is ALWAYS SINGULAR. 'ten-rupee notes' (not ten-rupees notes).",
    "shortcut_text_hi": "नियम: संख्या + संज्ञा + Noun में बीच की संज्ञा हमेशा एकवचन होती है। 'ten-rupees notes' गलत है -> 'ten-rupee notes' सही है।"
  },
  {
    "question_number": 20,
    "practice_set": "SET B",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 5",
    "type_category": "Parallelism: Balanced Prepositional Phrases with 'Not only... but also'",
    "type_category_hi": "समानांतरता: 'Not only... but also' के साथ संतुलित Prepositional वाक्यांश",
    "question_text": "Select the segment in the sentence that contains a grammatical error, or select 'No error':\n\nThe celebrated author is admired / not only for her lucid prose style / but also for her fearless commentary / on contemporary social issues.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है, अथवा 'No error' चुनें:\n\nThe celebrated author is admired / not only for her lucid prose style / but also for her fearless commentary / on contemporary social issues.",
    "options": {
      "a": "The celebrated author is admired",
      "b": "not only for her lucid prose style",
      "c": "but also for her fearless commentary",
      "d": "on contemporary social issues / No error"
    },
    "options_hi": {
      "a": "The celebrated author is admired",
      "b": "not only for her lucid prose style",
      "c": "but also for her fearless commentary",
      "d": "on contemporary social issues / No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: In this sentence, the correlative conjunction 'not only... but also' coordinates two perfectly parallel prepositional phrases: 'not only [for her lucid prose style]' and 'but also [for her fearless commentary]'. Both elements share identical grammatical weight and structure.\nAll tenses, prepositions, and parallelisms are flawless. Therefore, there is NO ERROR.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: इस वाक्य में 'not only... but also' दो पूर्णतः समानांतर Prepositional वाक्यांशों को जोड़ता है: 'not only for...' और 'but also for...'। वाक्य में व्याकरण, समानांतरता और काल की दृष्टि से कोई दोष नहीं है। अतः यह पूर्णतः शुद्ध है (No error)।\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Parallelism Mastery: 'not only [for + Noun Phrase] ... but also [for + Noun Phrase]'. Perfect balance = NO ERROR.",
    "shortcut_text_hi": "समानांतरता जांच: 'not only for...' और 'but also for...' दोनों तरफ समान संरचना है। वाक्य शुद्ध है (No error)।"
  },
  {
    "question_number": 21,
    "practice_set": "SET B",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 1",
    "type_category": "Mandative Subjunctive: Verbs of Suggestion/Demand take Base Form",
    "type_category_hi": "Mandative Subjunctive: सुझाव/मांग वाली क्रियाओं के साथ Base Form (V1)",
    "question_text": "The sentence below is split into four parts. Find the part with an error:\n\nThe chief medical officer strongly recommended / that the critical patient / takes absolute bed rest / for at least three consecutive weeks.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nThe chief medical officer strongly recommended / that the critical patient / takes absolute bed rest / for at least three consecutive weeks.",
    "options": {
      "a": "The chief medical officer strongly recommended",
      "b": "that the critical patient",
      "c": "takes absolute bed rest",
      "d": "for at least three consecutive weeks"
    },
    "options_hi": {
      "a": "The chief medical officer strongly recommended",
      "b": "that the critical patient",
      "c": "takes absolute bed rest",
      "d": "for at least three consecutive weeks"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: In formal English, verbs expressing urgency, mandate, demand, or recommendation (such as 'demand', 'recommend', 'suggest', 'insist', 'order', 'require') followed by a 'that'-clause take the MANDATIVE SUBJUNCTIVE. In the mandative subjunctive, the verb remains in its BASE FORM (infinitive without to), without any third-person singular '-s' or past tense inflection.\nTherefore, 'takes' is ungrammatical; it must be the base form 'take' (or 'should take').\n\nCorrect Sentence: 'The chief medical officer strongly recommended that the critical patient take absolute bed rest for at least three consecutive weeks.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब 'recommend', 'suggest', 'demand', 'insist' जैसी क्रियाओं के बाद 'that'-उपवाक्य आता है, तो Mandative Subjunctive का नियम लागू होता है। इस नियम के तहत क्रिया सदैव अपने मूल रूप (Base form - बिना 's/es' के) में आती है, भले ही कर्ता एकवचन ही क्यों न हो।\nअतः 'takes' के स्थान पर 'take' (या should take) का प्रयोग होगा।\n\nशुद्ध वाक्य: The chief medical officer strongly recommended that the critical patient take absolute bed rest...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Tier-2 Mains Rule: Recommend / Suggest / Demand + that + Subject + BASE VERB (No '-s'!). 'patient TAKE' (not takes).",
    "shortcut_text_hi": "Mains नियम: Recommend / Demand / Suggest + that + कर्ता + क्रिया का मूल रूप (बिना 's' के)। 'patient take' सही है।"
  },
  {
    "question_number": 22,
    "practice_set": "SET B",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 2",
    "type_category": "Dangling Modifier: Participial Clause with Illogical Subject",
    "type_category_hi": "असंगत विशेषण (Dangling Modifier): अवास्तविक कर्ता वाला कृदंत खंड",
    "question_text": "Identify the segment containing a grammatical error:\n\nWalking briskly across the lush green meadow / in the early morning mist, / a venomous viper bit the unsuspecting shepherd / on his right ankle.",
    "question_text_hi": "वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nWalking briskly across the lush green meadow / in the early morning mist, / a venomous viper bit the unsuspecting shepherd / on his right ankle.",
    "options": {
      "a": "Walking briskly across the lush green meadow",
      "b": "in the early morning mist",
      "c": "a venomous viper bit the unsuspecting shepherd",
      "d": "on his right ankle"
    },
    "options_hi": {
      "a": "Walking briskly across the lush green meadow",
      "b": "in the early morning mist",
      "c": "a venomous viper bit the unsuspecting shepherd",
      "d": "on his right ankle"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: An introductory participial phrase must modify the subject of the independent clause that immediately follows. As constructed, 'Walking briskly across the lush green meadow... a venomous viper bit...' illogically implies that the viper was walking briskly!\nTo resolve this classic dangling modifier error, rewrite the sentence so the true actor ('the unsuspecting shepherd') is the subject: 'While the unsuspecting shepherd was walking briskly across the lush green meadow...'.\n\nCorrect Sentence: 'While the unsuspecting shepherd was walking briskly across the lush green meadow in the early morning mist, a venomous viper bit him on his right ankle.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: कृदंत (Participle) से शुरू होने वाले वाक्यांश का कर्ता वही होना चाहिए जो मुख्य उपवाक्य का कर्ता है। यहाँ वाक्य का अर्थ निकलता है कि 'जहरीला सांप घास के मैदान में तेज कदमों से टहल रहा था'! इस Dangling Modifier दोष को ठीक करने के लिए कर्ता 'shepherd' को प्रारंभ में लाना होगा: 'While the shepherd was walking briskly...'\n\nशुद्ध वाक्य: While the unsuspecting shepherd was walking briskly across the lush green meadow..., a venomous viper bit him.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Modifier Logic Check: Who was walking? The shepherd, NOT the snake! Rewrite with a full subject clause: 'While he was walking...'.",
    "shortcut_text_hi": "तर्क परीक्षण: टहल कौन रहा था? चरवाहा, सांप नहीं! Dangling Modifier पहचानें और खंड (a) को अशुद्ध चुनें।"
  },
  {
    "question_number": 23,
    "practice_set": "SET B",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 3",
    "type_category": "Stative Verbs: 'Resemble' Misused in Continuous Tense",
    "type_category_hi": "Stative Verbs: 'Resemble' का Continuous Tense में अशुद्ध प्रयोग",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nIn both her facial features / and soft-spoken demeanour, / the young girl is resembling / her late maternal grandmother.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nIn both her facial features / and soft-spoken demeanour, / the young girl is resembling / her late maternal grandmother.",
    "options": {
      "a": "In both her facial features",
      "b": "and soft-spoken demeanour",
      "c": "the young girl is resembling",
      "d": "her late maternal grandmother"
    },
    "options_hi": {
      "a": "In both her facial features",
      "b": "and soft-spoken demeanour",
      "c": "the young girl is resembling",
      "d": "her late maternal grandmother"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: 'Resemble' is a stative verb indicating similarity in appearance or character. Stative verbs describing permanent relationships or conditions do NOT take continuous/progressive tenses ('-ing' form).\nTherefore, 'the young girl is resembling' must be replaced by the Simple Present form 'the young girl resembles'.\n(Note also that 'resemble' is transitive and never takes the preposition 'with' or 'to').\n\nCorrect Sentence: 'In both her facial features and soft-spoken demeanour, the young girl resembles her late maternal grandmother.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Resemble' (समान दिखना) एक Stative Verb है जो स्थायी अवस्था दर्शाती है। इसका प्रयोग कभी भी Continuous Tense में नहीं होता। अतः 'is resembling' के स्थान पर Simple Present 'resembles' का प्रयोग होगा। (साथ ही याद रखें कि resemble के बाद 'with/to' भी नहीं आता)।\n\nशुद्ध वाक्य: In both her facial features and soft-spoken demeanour, the young girl resembles her late maternal grandmother.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Stative Verb Trap: 'Resemble' NEVER takes '-ing' and NEVER takes 'with/to'. Say 'She resembles her mother'.",
    "shortcut_text_hi": "Stative Verb नियम: Resemble में न तो कभी '-ing' लगता है और न ही बाद में 'with' आता है। 'resembles' सही है।"
  },
  {
    "question_number": 24,
    "practice_set": "SET B",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 4",
    "type_category": "Confusing Words: 'Compliment' (Praise) vs 'Complement' (Complete)",
    "type_category_hi": "भ्रमित करने वाले शब्द: 'Compliment' (प्रशंसा) बनाम 'Complement' (पूरक)",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe vibrant traditional artwork / on the dining room walls / perfectly compliments the contemporary / minimalist interior decor.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe vibrant traditional artwork / on the dining room walls / perfectly compliments the contemporary / minimalist interior decor.",
    "options": {
      "a": "The vibrant traditional artwork",
      "b": "on the dining room walls",
      "c": "perfectly compliments the contemporary",
      "d": "minimalist interior decor"
    },
    "options_hi": {
      "a": "The vibrant traditional artwork",
      "b": "on the dining room walls",
      "c": "perfectly compliments the contemporary",
      "d": "minimalist interior decor"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: 'Compliment' (with an 'i') means an expression of praise or admiration ('He complimented her dress'). In contrast, 'Complement' (with an 'e') means to add to something in a way that enhances or completes it ('Wine complements the meal').\nIn this context, the artwork enhances or completes the interior decor. Therefore, 'compliments' is an erroneous malapropism; it must be replaced by 'complements'.\n\nCorrect Sentence: 'The vibrant traditional artwork on the dining room walls perfectly complements the contemporary minimalist interior decor.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Compliment' (i के साथ) का अर्थ प्रशंसा करना होता है, जबकि 'Complement' (e के साथ) का अर्थ किसी वस्तु का पूरक होना या उसे पूर्ण बनाना होता है। यहाँ पेंटिंग सजावट को 'पूर्ण' कर रही है, उसकी तारीफ नहीं कर रही। अतः 'compliments' के स्थान पर 'complements' का प्रयोग होगा।\n\nशुद्ध वाक्य: The vibrant traditional artwork on the dining room walls perfectly complements the contemporary...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Vocabulary Distinction: ComplIment = prAIse (I love praise). ComplEment = complEte (enhances/matches).",
    "shortcut_text_hi": "शब्द भेद: ComplIment = प्रशंसा (I तारीफ पसंद करता हूँ)। ComplEment = पूरक (Complete करना)। 'Complements' सही है।"
  },
  {
    "question_number": 25,
    "practice_set": "SET B",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 5",
    "type_category": "Proximity Rule with Intervening Relative Clause in 'Neither... nor'",
    "type_category_hi": "निकटता नियम: 'Neither... nor' में मध्यवर्ती उपवाक्य के साथ बहुवचन क्रिया",
    "question_text": "Select the segment that contains a grammatical error:\n\nNeither the chief medical superintendent / nor any of the duty nurses / who attended the critical patient / was held liable for the procedural lapse.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nNeither the chief medical superintendent / nor any of the duty nurses / who attended the critical patient / was held liable for the procedural lapse.",
    "options": {
      "a": "Neither the chief medical superintendent",
      "b": "nor any of the duty nurses",
      "c": "who attended the critical patient",
      "d": "was held liable for the procedural lapse"
    },
    "options_hi": {
      "a": "Neither the chief medical superintendent",
      "b": "nor any of the duty nurses",
      "c": "who attended the critical patient",
      "d": "was held liable for the procedural lapse"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: When subjects are connected by 'neither... nor', the verb must agree with the subject closest to it (Subject 2). Here, Subject 2 following 'nor' is 'any of the duty nurses' (plural).\nEven though an intervening relative clause ('who attended the critical patient') separates Subject 2 from the main verb, the governing subject remains 'the duty nurses' (plural).\nTherefore, the singular verb 'was held liable' is ungrammatical; it must be replaced by the plural verb 'were held liable'.\n\nCorrect Sentence: 'Neither the chief medical superintendent nor any of the duty nurses who attended the critical patient were held liable for the procedural lapse.'\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: 'Neither... nor' में मुख्य क्रिया निकटतम कर्ता (Subject 2) के अनुसार आती है। यहाँ 'nor' के बाद आने वाला दूसरा कर्ता 'any of the duty nurses' (बहुवचन) है। बीच में 'who attended...' आने के बावजूद मुख्य क्रिया बहुवचन कर्ता के अनुसार 'were held liable' होनी चाहिए, न कि 'was'।\n\nशुद्ध वाक्य: Neither the chief medical superintendent nor any of the duty nurses who attended the critical patient were held liable...\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Tier-2 Proximity Rule: S1 (superintendent) + nor + S2 (nurses - PLURAL) -> Main verb MUST be PLURAL ('WERE held liable').",
    "shortcut_text_hi": "निकटता नियम: 'nor' के बाद 'nurses' (बहुवचन) है, अतः मुख्य क्रिया 'were' होगी, 'was' गलत है।"
  }
]
;

const SPOTTING_ERRORS_SET_C_QUESTIONS = [
  {
    "question_number": 1,
    "practice_set": "SET C",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: 'Neither of' Takes Singular Verb",
    "type_category_hi": "कर्ता-क्रिया समझौता: 'Neither of' के साथ एकवचन क्रिया",
    "question_text": "In the sentence, identify the segment which contains a grammatical error:\n\nNeither of the two short-listed candidates / are eligible / for the prestigious merit scholarship / announced by the central university.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nNeither of the two short-listed candidates / are eligible / for the prestigious merit scholarship / announced by the central university.",
    "options": {
      "a": "Neither of the two short-listed candidates",
      "b": "are eligible",
      "c": "for the prestigious merit scholarship",
      "d": "announced by the central university"
    },
    "options_hi": {
      "a": "Neither of the two short-listed candidates",
      "b": "are eligible",
      "c": "for the prestigious merit scholarship",
      "d": "announced by the central university"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'Neither of' means 'not the one nor the other of two'. It is followed by a plural noun or pronoun, but the governing verb is strictly SINGULAR.\nHere, the plural verb 'are eligible' must be replaced by the singular verb 'is eligible'.\n\nCorrect Sentence: 'Neither of the two short-listed candidates is eligible for the prestigious merit scholarship announced by the central university.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Neither of' का अर्थ 'दो में से कोई भी नहीं' होता है। इसके बाद संज्ञा बहुवचन (candidates) आती है, परंतु मुख्य क्रिया सदैव एकवचन (Singular) होती है।\nअतः 'are eligible' के स्थान पर 'is eligible' का प्रयोग होगा।\n\nशुद्ध वाक्य: Neither of the two short-listed candidates is eligible for the prestigious merit scholarship...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Golden SSC Rule: Neither of + Plural Noun + SINGULAR VERB. 'Neither of the candidates IS' (never 'are').",
    "shortcut_text_hi": "गोल्डन नियम: Neither of + बहुवचन संज्ञा + एकवचन क्रिया। 'candidates' देखकर बहकें नहीं, 'is' ही सही है।"
  },
  {
    "question_number": 2,
    "practice_set": "SET C",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 2",
    "type_category": "Form of Verb: Irregular Past Tense Forms",
    "type_category_hi": "क्रिया का रूप: अनियमित भूतकालिक क्रिया रूप",
    "question_text": "Select the segment that contains a grammatical error in the following sentence:\n\nYesterday afternoon, / she went to the local organic market / and buyed / fresh seasonal fruits and green vegetables.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nYesterday afternoon, / she went to the local organic market / and buyed / fresh seasonal fruits and green vegetables.",
    "options": {
      "a": "Yesterday afternoon",
      "b": "she went to the local organic market",
      "c": "and buyed",
      "d": "fresh seasonal fruits and green vegetables"
    },
    "options_hi": {
      "a": "Yesterday afternoon",
      "b": "she went to the local organic market",
      "c": "and buyed",
      "d": "fresh seasonal fruits and green vegetables"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: 'Buy' is an irregular verb whose past tense (V2) and past participle (V3) form is 'bought'. The word 'buyed' does not exist in standard English grammar.\nReplace 'buyed' with 'bought'.\n\nCorrect Sentence: 'Yesterday afternoon, she went to the local organic market and bought fresh seasonal fruits and green vegetables.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Buy' एक अनियमित क्रिया (Irregular verb) है जिसका भूतकालिक रूप (V2 और V3) 'bought' होता है। अंग्रेजी व्याकरण में 'buyed' नाम का कोई शब्द नहीं होता।\nअतः 'buyed' के स्थान पर 'bought' का प्रयोग होगा।\n\nशुद्ध वाक्य: Yesterday afternoon, she went to the local organic market and bought fresh seasonal fruits...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Verb Form: Buy -> Bought -> Bought (NOT 'buyed'). Catching non-existent regularized verb forms is an easy SSC mark.",
    "shortcut_text_hi": "क्रिया रूप: Buy का Past रूप 'bought' होता है, 'buyed' नहीं।"
  },
  {
    "question_number": 3,
    "practice_set": "SET C",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 3",
    "type_category": "Fixed Prepositions: 'Prevent from' + Gerund",
    "type_category_hi": "निश्चित Preposition: 'Prevent from' के साथ Gerund",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe security guard prevented the visitor / to enter the high-security server room / without showing / proper authorized clearance credentials.",
    "question_text_hi": "वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe security guard prevented the visitor / to enter the high-security server room / without showing / proper authorized clearance credentials.",
    "options": {
      "a": "The security guard prevented the visitor",
      "b": "to enter the high-security server room",
      "c": "without showing",
      "d": "proper authorized clearance credentials"
    },
    "options_hi": {
      "a": "The security guard prevented the visitor",
      "b": "to enter the high-security server room",
      "c": "without showing",
      "d": "proper authorized clearance credentials"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: Verbs expressing prohibition or prevention such as 'prevent', 'prohibit', 'deter', 'restrain', 'abstain', and 'refrain' take the fixed preposition 'from' followed by a gerund ('V1 + ing'). They do NOT take the infinitive ('to + V1').\nTherefore, 'to enter' must be changed to 'from entering'.\n\nCorrect Sentence: 'The security guard prevented the visitor from entering the high-security server room without showing proper authorized clearance credentials.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Prevent', 'prohibit', 'abstain', 'refrain' जैसी रोकथाम दर्शाने वाली क्रियाओं के बाद निश्चित Preposition 'from' और उसके बाद Gerund ('V-ing') का प्रयोग होता है, Infinitive ('to + V1') का नहीं।\nअतः 'to enter' के स्थान पर 'from entering' का प्रयोग होगा।\n\nशुद्ध वाक्य: The security guard prevented the visitor from entering the high-security server room...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Fixed Preposition: Prevent / Prohibit / Abstain / Refrain + FROM + V-ING! 'Prevented to enter' -> 'Prevented from entering'.",
    "shortcut_text_hi": "निश्चित Preposition: Prevent के साथ हमेशा 'FROM + V-ing' आता है। 'to enter' गलत है -> 'from entering' सही है।"
  },
  {
    "question_number": 4,
    "practice_set": "SET C",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 4",
    "type_category": "Articles: Article 'The' with Geographic Superlatives and Rivers",
    "type_category_hi": "Article: भौगोलिक Superlative और नदियों के नाम के साथ 'The'",
    "question_text": "The sentence below has been divided into four parts. Find the part with an error:\n\nFlowing through eleven nations, / the Nile is considered / a longest river / in the entire African continent.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nFlowing through eleven nations, / the Nile is considered / a longest river / in the entire African continent.",
    "options": {
      "a": "Flowing through eleven nations",
      "b": "the Nile is considered",
      "c": "a longest river",
      "d": "in the entire African continent"
    },
    "options_hi": {
      "a": "Flowing through eleven nations",
      "b": "the Nile is considered",
      "c": "a longest river",
      "d": "in the entire African continent"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: Superlative degree adjectives ('longest', 'deepest', 'highest') always require the definite article 'the', because there can only be one entity that holds the supreme rank in that domain.\nReplace 'a longest river' with 'the longest river'.\n\nCorrect Sentence: 'Flowing through eleven nations, the Nile is considered the longest river in the entire African continent.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: किसी भी Superlative Degree (जैसे longest, highest) से पहले सदैव Definite Article 'The' का प्रयोग होता है क्योंकि वह अपनी श्रेणी में एकमात्र और सर्वश्रेष्ठ होती है।\nअतः 'a longest river' के स्थान पर 'the longest river' का प्रयोग होगा।\n\nशुद्ध वाक्य: Flowing through eleven nations, the Nile is considered the longest river in the entire African continent.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Superlative Rule: 'THE longest / THE highest'. 'A longest' is an immediate grammatical error.",
    "shortcut_text_hi": "नियम: Superlative के साथ हमेशा 'The' आता है। 'a longest' गलत है -> 'the longest' सही है।"
  },
  {
    "question_number": 5,
    "practice_set": "SET C",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 5",
    "type_category": "Nouns: Uncountable Noun 'Scenery' (No Plural Form)",
    "type_category_hi": "संज्ञा: अगणनीय संज्ञा 'Scenery' का अशुद्ध बहुवचन",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe enchanting sceneries of the Kashmir valley / captivate the imagination of tourists / who travel from / distant parts of the globe.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe enchanting sceneries of the Kashmir valley / captivate the imagination of tourists / who travel from / distant parts of the globe.",
    "options": {
      "a": "The enchanting sceneries of the Kashmir valley",
      "b": "captivate the imagination of tourists",
      "c": "who travel from",
      "d": "distant parts of the globe"
    },
    "options_hi": {
      "a": "The enchanting sceneries of the Kashmir valley",
      "b": "captivate the imagination of tourists",
      "c": "who travel from",
      "d": "distant parts of the globe"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: 'Scenery' is an uncountable noun that refers to natural landscape collectively. It does NOT have a plural form ('sceneries' does not exist in standard English), and it takes a SINGULAR verb.\n'The enchanting sceneries... captivate' must be replaced by 'The enchanting scenery of the Kashmir valley captivates'.\n\nCorrect Sentence: 'The enchanting scenery of the Kashmir valley captivates the imagination of tourists who travel from distant parts of the globe.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Scenery' (प्राकृतिक दृश्य) एक अगणनीय संज्ञा (Uncountable noun) है। इसका बहुवचन 'sceneries' कभी नहीं बनता। इसके साथ क्रिया भी एकवचन (Singular) आती है।\nअतः 'sceneries... captivate' के स्थान पर 'scenery... captivates' का प्रयोग होगा।\n\nशुद्ध वाक्य: The enchanting scenery of the Kashmir valley captivates the imagination of tourists...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Top-10 SSC Rule: SCENERY is ALWAYS SINGULAR! 'Sceneries' is 100% bogus -> write 'The scenery is / captivates'.",
    "shortcut_text_hi": "टॉप नियम: 'Scenery' हमेशा एकवचन होती है! 'Sceneries' गलत है -> 'scenery' और एकवचन क्रिया आएगी।"
  },
  {
    "question_number": 6,
    "practice_set": "SET C",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: 'Together with' Connector",
    "type_category_hi": "कर्ता-क्रिया समझौता: 'Together with' से जुड़े कर्ता",
    "question_text": "Select the segment in the sentence that contains an error:\n\nThe battalion commander, together with / his courageous infantry soldiers, / have successfully thwarted / the hostile cross-border infiltration.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nThe battalion commander, together with / his courageous infantry soldiers, / have successfully thwarted / the hostile cross-border infiltration.",
    "options": {
      "a": "The battalion commander, together with",
      "b": "his courageous infantry soldiers",
      "c": "have successfully thwarted",
      "d": "the hostile cross-border infiltration"
    },
    "options_hi": {
      "a": "The battalion commander, together with",
      "b": "his courageous infantry soldiers",
      "c": "have successfully thwarted",
      "d": "the hostile cross-border infiltration"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When two subjects are connected by 'together with', 'along with', 'with', 'as well as', or 'accompanied by', the verb must agree in number with the FIRST subject.\nHere, the first subject is 'The battalion commander' (singular). Therefore, the verb must be singular 'has successfully thwarted', NOT plural 'have successfully thwarted'.\n\nCorrect Sentence: 'The battalion commander, together with his courageous infantry soldiers, has successfully thwarted the hostile cross-border infiltration.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब दो कर्ता 'together with', 'along with', 'with', 'as well as' से जुड़े हों, तो क्रिया प्रथम कर्ता (First Subject) के अनुसार आती है। यहाँ प्रथम कर्ता 'The battalion commander' (एकवचन) है, अतः 'have' के स्थान पर 'has' का प्रयोग होगा।\n\nशुद्ध वाक्य: The battalion commander, together with his courageous infantry soldiers, has successfully thwarted...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Rule: Subject 1 + TOGETHER WITH + Subject 2 -> Verb agrees with Subject 1! Commander (singular) -> use 'HAS thwarted'.",
    "shortcut_text_hi": "नियम: together with से जुड़े होने पर क्रिया हमेशा पहले कर्ता के अनुसार आती है। 'Commander' एकवचन है -> 'has' आएगा।"
  },
  {
    "question_number": 7,
    "practice_set": "SET C",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 2",
    "type_category": "Correlative Conjunctions: 'Both' is Strictly Paired with 'And'",
    "type_category_hi": "सह-संबंधी संयोजक: 'Both' के साथ केवल 'And' का युग्म",
    "question_text": "The sentence below is divided into four parts. Find the part containing an error:\n\nBoth the chief architect as well as / the structural engineer were commended / by the state governor / for completing the bridge ahead of schedule.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nBoth the chief architect as well as / the structural engineer were commended / by the state governor / for completing the bridge ahead of schedule.",
    "options": {
      "a": "Both the chief architect as well as",
      "b": "the structural engineer were commended",
      "c": "by the state governor",
      "d": "for completing the bridge ahead of schedule"
    },
    "options_hi": {
      "a": "Both the chief architect as well as",
      "b": "the structural engineer were commended",
      "c": "by the state governor",
      "d": "for completing the bridge ahead of schedule"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: The correlative conjunction 'Both' is ALWAYS paired with 'and'. It is NEVER paired with 'as well as', 'along with', or 'with'.\nUsing 'Both... as well as' is a frequent redundancy trap in SSC exams. Replace 'as well as' with 'and'.\n\nCorrect Sentence: 'Both the chief architect and the structural engineer were commended by the state governor for completing the bridge ahead of schedule.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Both' का सह-संबंधी युग्म सदैव 'and' होता है। 'Both' के साथ कभी भी 'as well as' या 'along with' का प्रयोग नहीं किया जाता।\nअतः 'as well as' के स्थान पर 'and' का प्रयोग होगा: 'Both the chief architect and...'\n\nशुद्ध वाक्य: Both the chief architect and the structural engineer were commended by the state governor...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Correlative Match: BOTH is always followed by AND (NEVER 'as well as'!). 'Both X AND Y' is the only correct pair.",
    "shortcut_text_hi": "युग्म नियम: 'Both' के साथ हमेशा 'AND' आता है, 'as well as' कभी नहीं। 'Both X and Y' सही है।"
  },
  {
    "question_number": 8,
    "practice_set": "SET C",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 3",
    "type_category": "Tenses: Future Perfect with 'By + Future Point in Time'",
    "type_category_hi": "काल: 'By + भविष्य का समय' के साथ Future Perfect Tense",
    "question_text": "Identify the segment that contains a grammatical error:\n\nBy this time next year, / she will complete / her doctoral dissertation / in computational astrophysics.",
    "question_text_hi": "वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nBy this time next year, / she will complete / her doctoral dissertation / in computational astrophysics.",
    "options": {
      "a": "By this time next year",
      "b": "she will complete",
      "c": "her doctoral dissertation",
      "d": "in computational astrophysics"
    },
    "options_hi": {
      "a": "By this time next year",
      "b": "she will complete",
      "c": "her doctoral dissertation",
      "d": "in computational astrophysics"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When a time marker beginning with 'By' denotes a completion deadline in the future (such as 'By this time next year', 'By next Monday', 'By the end of this month'), the FUTURE PERFECT TENSE ('will have + V3') must be used, not the Simple Future ('will + V1').\nReplace 'she will complete' with 'she will have completed'.\n\nCorrect Sentence: 'By this time next year, she will have completed her doctoral dissertation in computational astrophysics.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब 'By + भविष्य का समय' (जैसे By next year, By tomorrow evening) का प्रयोग समय-सीमा दर्शाने के लिए होता है, तो Future Perfect Tense ('will have + V3') का प्रयोग किया जाता है, Simple Future ('will complete') का नहीं।\nअतः 'she will complete' के स्थान पर 'she will have completed' का प्रयोग होगा।\n\nशुद्ध वाक्य: By this time next year, she will have completed her doctoral dissertation in computational astrophysics.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Formula: 'BY + Future Time' = FUTURE PERFECT ('will have + V3'). 'By next year -> will have completed'.",
    "shortcut_text_hi": "फॉर्मूला: 'By + भविष्य का समय' दिखे तो हमेशा 'will have + V3' लगाएं। 'will complete' गलत है।"
  },
  {
    "question_number": 9,
    "practice_set": "SET C",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 4",
    "type_category": "Adjectives: 'Junior' Takes Preposition 'To'",
    "type_category_hi": "विशेषण: 'Junior' के साथ Preposition 'To' का प्रयोग",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nAlthough he is junior than / most of his departmental colleagues, / his technical acumen has earned him / rapid promotions.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nAlthough he is junior than / most of his departmental colleagues, / his technical acumen has earned him / rapid promotions.",
    "options": {
      "a": "Although he is junior than",
      "b": "most of his departmental colleagues",
      "c": "his technical acumen has earned him",
      "d": "rapid promotions"
    },
    "options_hi": {
      "a": "Although he is junior than",
      "b": "most of his departmental colleagues",
      "c": "his technical acumen has earned him",
      "d": "rapid promotions"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: Latin comparative adjectives ending in '-ior' (junior, senior, inferior, superior, prior, anterior, posterior) are followed by the preposition 'to', NEVER 'than'.\nReplace 'junior than' with 'junior to'.\n\nCorrect Sentence: 'Although he is junior to most of his departmental colleagues, his technical acumen has earned him rapid promotions.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Junior', 'Senior', 'Superior' जैसे लैटिन तुलनात्मक विशेषणों के बाद 'than' का प्रयोग नहीं होता, बल्कि 'to' का प्रयोग होता है।\nअतः 'junior than' के स्थान पर 'junior to' का प्रयोग होगा।\n\nशुद्ध वाक्य: Although he is junior to most of his departmental colleagues, his technical acumen has earned him rapid promotions.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Rule: Junior / Senior + TO (Never THAN!). 'junior than' -> change to 'junior to'.",
    "shortcut_text_hi": "नियम: Junior और Senior के बाद 'TO' आता है, 'than' कभी नहीं। 'junior to' सही है।"
  },
  {
    "question_number": 10,
    "practice_set": "SET C",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 5",
    "type_category": "Conjunctions: Redundant Pairing of 'Suppose' and 'If'",
    "type_category_hi": "संयोजक: 'Suppose' और 'If' का अनावश्यक दोहरा प्रयोग",
    "question_text": "Identify the segment containing a grammatical error:\n\nSuppose if the airline cancels / the connecting flight tomorrow morning, / how will the delegates reach / the plenary session on time?",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nSuppose if the airline cancels / the connecting flight tomorrow morning, / how will the delegates reach / the plenary session on time?",
    "options": {
      "a": "Suppose if the airline cancels",
      "b": "the connecting flight tomorrow morning",
      "c": "how will the delegates reach",
      "d": "the plenary session on time"
    },
    "options_hi": {
      "a": "Suppose if the airline cancels",
      "b": "the connecting flight tomorrow morning",
      "c": "how will the delegates reach",
      "d": "the plenary session on time"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: Both 'Suppose' and 'if' express the same hypothetical conditional meaning ('on the assumption that'). Using 'Suppose' and 'if' together in the same clause constitutes a redundant, superfluous error.\nUse either 'Suppose the airline cancels...' OR 'If the airline cancels...', but never both together.\n\nCorrect Sentence: 'Suppose the airline cancels the connecting flight tomorrow morning, how will the delegates reach the plenary session on time?'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Suppose' और 'If' दोनों ही काल्पनिक शर्त दर्शाते हैं। इन दोनों का एक साथ प्रयोग करना पुनरुक्ति दोष (Superfluous/Redundant error) है।\nया तो केवल 'Suppose' का प्रयोग करें या केवल 'If' का, दोनों का एक साथ नहीं।\n\nशुद्ध वाक्य: Suppose the airline cancels the connecting flight tomorrow morning, how will the delegates reach...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Superfluous Error: 'SUPPOSE IF' is NEVER used together! Use either 'Suppose' OR 'If'.",
    "shortcut_text_hi": "अनावश्यक शब्द दोष: 'Suppose if' कभी एक साथ नहीं आते! या तो केवल 'Suppose' लिखें या केवल 'If'।"
  },
  {
    "question_number": 11,
    "practice_set": "SET C",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 1",
    "type_category": "PYQ Pattern: 'One of the' + Plural Noun + 'Who' + Plural Verb",
    "type_category_hi": "PYQ पैटर्न: 'One of the' + बहुवचन संज्ञा + 'Who' + बहुवचन क्रिया",
    "question_text": "The sentence below is split into four parts. Find the part with an error:\n\nRohit Sharma is one of the players / who has consistently delivered / exceptional performances / in high-pressure championship matches.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nRohit Sharma is one of the players / who has consistently delivered / exceptional performances / in high-pressure championship matches.",
    "options": {
      "a": "Rohit Sharma is one of the players",
      "b": "who has consistently delivered",
      "c": "exceptional performances",
      "d": "in high-pressure championship matches"
    },
    "options_hi": {
      "a": "Rohit Sharma is one of the players",
      "b": "who has consistently delivered",
      "c": "exceptional performances",
      "d": "in high-pressure championship matches"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When a relative pronoun ('who', 'which', 'that') follows 'one of the + plural noun', the relative pronoun refers back to the antecedent plural noun ('players'). Hence, the verb following 'who' must agree with 'players' and be PLURAL.\n'who has consistently delivered' must be replaced by 'who have consistently delivered'.\n\nCorrect Sentence: 'Rohit Sharma is one of the players who have consistently delivered exceptional performances in high-pressure championship matches.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब 'one of the + बहुवचन noun' के बाद Relative Pronoun ('who / which / that') आता है, तो क्रिया 'who' के ठीक पूर्व आने वाली बहुवचन संज्ञा ('players') के अनुसार बहुवचन (Plural) होती है।\nअतः 'who has' के स्थान पर 'who have' का प्रयोग होगा।\n\nशुद्ध वाक्य: Rohit Sharma is one of the players who have consistently delivered exceptional performances...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "PYQ Benchmark: 'One of the + Plural Noun + WHO + HAVE' (Plural verb). 'Players who HAVE' (not has).",
    "shortcut_text_hi": "PYQ नियम: One of the + Plural Noun + WHO + HAVE (बहुवचन क्रिया)। 'Players who have' सही है।"
  },
  {
    "question_number": 12,
    "practice_set": "SET C",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 2",
    "type_category": "PYQ Pattern: 'Despite' Never Takes Preposition 'Of'",
    "type_category_hi": "PYQ पैटर्न: 'Despite' के साथ 'Of' का प्रयोग नहीं होता",
    "question_text": "Identify the segment containing a grammatical error:\n\nDespite of repeated warnings / issued by the meteorological department, / several fishing trawlers ventured / into the turbulent sea.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nDespite of repeated warnings / issued by the meteorological department, / several fishing trawlers ventured / into the turbulent sea.",
    "options": {
      "a": "Despite of repeated warnings",
      "b": "issued by the meteorological department",
      "c": "several fishing trawlers ventured",
      "d": "into the turbulent sea"
    },
    "options_hi": {
      "a": "Despite of repeated warnings",
      "b": "issued by the meteorological department",
      "c": "several fishing trawlers ventured",
      "d": "into the turbulent sea"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: 'Despite' already means 'in spite of'. Therefore, using the preposition 'of' after 'despite' is an ungrammatical redundancy tested in almost every SSC exam cycle.\nUse either 'Despite repeated warnings' OR 'In spite of repeated warnings', but NEVER 'Despite of'.\n\nCorrect Sentence: 'Despite repeated warnings issued by the meteorological department, several fishing trawlers ventured into the turbulent sea.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Despite' का अर्थ स्वयं 'in spite of' (के बावजूद) होता है। अतः 'Despite' के बाद Preposition 'of' का प्रयोग पूर्णतः वर्जित और अशुद्ध है।\nया तो केवल 'Despite' का प्रयोग करें या 'In spite of' का। 'Despite of' कभी नहीं होता।\n\nशुद्ध वाक्य: Despite repeated warnings issued by the meteorological department, several fishing trawlers ventured...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "TCS Red Flag: DESPITE takes NO 'OF'! 'Despite of' = ERROR. Write 'Despite' or 'In spite of'.",
    "shortcut_text_hi": "TCS नियम: Despite के साथ कभी 'OF' नहीं आता! 'Despite of' गलत है -> केवल 'Despite' लिखें।"
  },
  {
    "question_number": 13,
    "practice_set": "SET C",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 3",
    "type_category": "PYQ Pattern: Question Tag for Negative Indefinite Pronoun ('Nobody')",
    "type_category_hi": "PYQ पैटर्न: नकारात्मक सर्वनाम 'Nobody' के साथ Question Tag ('did they?')",
    "question_text": "Select the segment that contains a grammatical error, or select 'No error':\n\nNobody answered the emergency hotline / when the residents called for help / during the flash floods, / did they?",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें, अथवा 'No error' चुनें:\n\nNobody answered the emergency hotline / when the residents called for help / during the flash floods, / did they?",
    "options": {
      "a": "Nobody answered the emergency hotline",
      "b": "when the residents called for help",
      "c": "during the flash floods",
      "d": "did they? / No error"
    },
    "options_hi": {
      "a": "Nobody answered the emergency hotline",
      "b": "when the residents called for help",
      "c": "during the flash floods",
      "d": "did they? / No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: Indefinite pronouns ending in '-body' or '-one' (such as nobody, somebody, everybody, no one) take the plural personal pronoun 'THEY' in the question tag.\nFurthermore, because 'Nobody' imparts a negative meaning to the main clause, the question tag must be POSITIVE. In Simple Past Tense ('answered'), the positive tag with 'they' is 'did they?'.\nEverything in this question tag construction is flawlessly accurate. Therefore, there is NO ERROR.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: 'Nobody', 'Somebody', 'Everyone' के लिए Question Tag में सर्वनाम सदैव 'THEY' का प्रयोग होता है। चूंकि 'Nobody' नकारात्मक अर्थ देता है, अतः Question Tag सकारात्मक (Positive) होगा। Simple Past ('answered') के लिए सकारात्मक टैग 'did they?' पूर्णतः शुद्ध है। इस वाक्य में कोई त्रुटि नहीं है (No error)।\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Tag Mastery: Nobody / No one = Negative meaning + pronoun 'THEY' -> POSITIVE TAG 'DID THEY?'. Flawless = No error.",
    "shortcut_text_hi": "टैग नियम: Nobody = नकारात्मक वाक्य + Pronoun 'they' -> टैग हमेशा 'did they?' बनेगा। वाक्य शुद्ध है (No error)।"
  },
  {
    "question_number": 14,
    "practice_set": "SET C",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 4",
    "type_category": "PYQ Pattern: 'With a view to' Followed by Gerund",
    "type_category_hi": "PYQ पैटर्न: 'With a view to' के बाद Gerund (V-ing)",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe research scholar visited the national archives / with a view to examine / rare historical manuscripts / from the medieval era.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nThe research scholar visited the national archives / with a view to examine / rare historical manuscripts / from the medieval era.",
    "options": {
      "a": "The research scholar visited the national archives",
      "b": "with a view to examine",
      "c": "rare historical manuscripts",
      "d": "from the medieval era"
    },
    "options_hi": {
      "a": "The research scholar visited the national archives",
      "b": "with a view to examine",
      "c": "rare historical manuscripts",
      "d": "from the medieval era"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: In the prepositional phrase 'with a view to' (meaning 'with the intention or hope of'), the word 'to' is a preposition, NOT the infinitive particle. Prepositions must be followed by a gerund ('V1 + ing').\nTherefore, 'with a view to examine' must be corrected to 'with a view to examining'.\n\nCorrect Sentence: 'The research scholar visited the national archives with a view to examining rare historical manuscripts from the medieval era.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'With a view to' (के उद्देश्य से) में 'to' Preposition होता है। Preposition के बाद सदैव क्रिया का Gerund रूप ('V-ing') आता है, Infinitive (V1) नहीं।\nअतः 'with a view to examine' के स्थान पर 'with a view to examining' का प्रयोग होगा।\n\nशुद्ध वाक्य: The research scholar visited the national archives with a view to examining rare historical manuscripts...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "PYQ Staple: 'With a view to + V-ING'. Never use base verb V1 after 'with a view to'. Say 'with a view to examining'.",
    "shortcut_text_hi": "PYQ नियम: 'With a view to' के बाद हमेशा क्रिया का '-ing' रूप (Gerund) आता है। 'to examining' सही है।"
  },
  {
    "question_number": 15,
    "practice_set": "SET C",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 5",
    "type_category": "PYQ Pattern: Collective Noun 'Cattle' is Always Plural",
    "type_category_hi": "PYQ पैटर्न: समूहवाचक संज्ञा 'Cattle' सदैव बहुवचन होती है",
    "question_text": "Select the segment in the sentence that has an error:\n\nA herd of healthy cattle / is grazing peacefully / in the lush green pasture / near the foothills of the mountain range.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें, अथवा 'No error' समझें:\n\nAcross the rural valley, / the indigenous cattle is grazing / peacefully in the open pastures / under the morning sunlight.",
    "options": {
      "a": "Across the rural valley",
      "b": "the indigenous cattle is grazing",
      "c": "peacefully in the open pastures",
      "d": "under the morning sunlight"
    },
    "options_hi": {
      "a": "Across the rural valley",
      "b": "the indigenous cattle is grazing",
      "c": "peacefully in the open pastures",
      "d": "under the morning sunlight"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'Cattle' is a collective noun denoting bovine animals (cows, bulls, oxen). It is singular in form but ALWAYS PLURAL in grammatical construction and meaning. It takes a plural verb ('are / were grazing').\nReplace 'the indigenous cattle is grazing' with 'the indigenous cattle are grazing'.\n(Note: If preceded by a collective singular unit like 'a herd of cattle', the verb would be singular 'was/is').\n\nCorrect Sentence: 'Across the rural valley, the indigenous cattle are grazing peacefully in the open pastures under the morning sunlight.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Cattle' (मवेशी) रूप में एकवचन दिखता है परंतु अर्थ और व्याकरण में सदैव बहुवचन (Plural) होता है। इसके साथ हमेशा बहुवचन क्रिया का प्रयोग होता है।\nअतः 'cattle is grazing' के स्थान पर 'cattle are grazing' का प्रयोग होगा।\n\nशुद्ध वाक्य: Across the rural valley, the indigenous cattle are grazing peacefully in the open pastures...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Nouns Rule: Cattle / Poultry / Gentry / People = PLURAL VERB! 'Cattle ARE grazing' (never 'is').",
    "shortcut_text_hi": "नियम: 'Cattle' हमेशा बहुवचन होता है। इसके साथ 'are / were' आता है, 'is' नहीं।"
  },
  {
    "question_number": 16,
    "practice_set": "SET C",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 1",
    "type_category": "Advanced Subject-Verb: Singular Head Noun with Compound Attributes",
    "type_category_hi": "उन्नत कर्ता-क्रिया समझौता: संयुक्त विशेषताओं के साथ एकवचन मुख्य संज्ञा",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe nationwide introduction of digital learning modules / and interactive audiovisual tools / have significantly enhanced / student engagement in rural schools.",
    "question_text_hi": "वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe nationwide introduction of digital learning modules / and interactive audiovisual tools / have significantly enhanced / student engagement in rural schools.",
    "options": {
      "a": "The nationwide introduction of digital learning modules",
      "b": "and interactive audiovisual tools",
      "c": "have significantly enhanced",
      "d": "student engagement in rural schools"
    },
    "options_hi": {
      "a": "The nationwide introduction of digital learning modules",
      "b": "and interactive audiovisual tools",
      "c": "have significantly enhanced",
      "d": "student engagement in rural schools"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: In complex sentences, the verb must agree with the HEAD NOUN of the subject phrase. Here, the head noun is 'The nationwide introduction' (singular abstract noun), not the plural nouns in the prepositional phrase ('modules and tools').\nTherefore, the plural verb 'have significantly enhanced' must be replaced by the singular verb 'has significantly enhanced'.\n\nCorrect Sentence: 'The nationwide introduction of digital learning modules and interactive audiovisual tools has significantly enhanced student engagement in rural schools.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: कर्ता पद में मुख्य संज्ञा (Head Noun) 'The nationwide introduction' (एकवचन) है। इसके बाद आने वाले Prepositional वाक्यांश (modules and tools) के बहुवचन होने से क्रिया पर कोई प्रभाव नहीं पड़ता। अतः 'have' के स्थान पर एकवचन क्रिया 'has' का प्रयोग होगा।\n\nशुद्ध वाक्य: The nationwide introduction of digital learning modules and interactive audiovisual tools has significantly enhanced...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Subject Isolation: Ask: WHAT has enhanced engagement? 'The introduction' HAS enhanced (not modules have).",
    "shortcut_text_hi": "कर्ता पहचान ट्रिक: पूछें क्या बढ़ा है? 'Introduction' (एकवचन) -> क्रिया 'has' होगी।"
  },
  {
    "question_number": 17,
    "practice_set": "SET C",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 2",
    "type_category": "Conditionals: Third Conditional (Past Unreal Condition) Tense Mismatch",
    "type_category_hi": "शर्त सूचक वाक्य: तृतीय शर्त (Third Conditional) में काल का असंतुलन",
    "question_text": "The sentence below is divided into four parts. Find the part containing an error:\n\nIf the vigilance squad had inspected / the warehouse thoroughly, / the smuggled consignments would not enter / the domestic retail market.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nIf the vigilance squad had inspected / the warehouse thoroughly, / the smuggled consignments would not enter / the domestic retail market.",
    "options": {
      "a": "If the vigilance squad had inspected",
      "b": "the warehouse thoroughly",
      "c": "the smuggled consignments would not enter",
      "d": "the domestic retail market"
    },
    "options_hi": {
      "a": "If the vigilance squad had inspected",
      "b": "the warehouse thoroughly",
      "c": "the smuggled consignments would not enter",
      "d": "the domestic retail market"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: In a Third Conditional sentence denoting an unfulfilled condition in the past, if the 'if'-clause contains the Past Perfect Tense ('had + V3'), the main clause MUST contain 'would have / could have / might have + V3' (or 'would not have + V3' in negative).\nHere, 'would not enter' is a Type-2 conditional form and is grammatically mismatched with 'had inspected'. It must be replaced by 'would not have entered'.\n\nCorrect Sentence: 'If the vigilance squad had inspected the warehouse thoroughly, the smuggled consignments would not have entered the domestic retail market.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: तृतीय शर्त (Type 3 Conditional) में जब If-clause में Past Perfect ('had + V3') हो, तो Main clause में 'would have + V3' (या would not have + V3) का प्रयोग अनिवार्य होता है। यहाँ 'would not enter' के स्थान पर 'would not have entered' का प्रयोग होगा।\n\nशुद्ध वाक्य: If the vigilance squad had inspected the warehouse thoroughly, the smuggled consignments would not have entered...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Conditional Formula: IF + HAD + V3 ---> WOULD HAVE + V3. 'would not enter' is an error -> write 'would not have entered'.",
    "shortcut_text_hi": "शर्त फॉर्मूला: If + Had + V3 के साथ हमेशा 'Would have + V3' आता है। 'would not enter' गलत है।"
  },
  {
    "question_number": 18,
    "practice_set": "SET C",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 3",
    "type_category": "Inversion: 'Barely had... when' Construction",
    "type_category_hi": "Inversion: 'Barely had... when' की शुद्ध संरचना",
    "question_text": "Select the segment that contains a grammatical error, or select 'No error':\n\nBarely had the keynote speaker concluded / his insightful presentation / when the enthusiastic audience gave / a standing ovation.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग का चयन करें, अथवा 'No error' चुनें:\n\nBarely had the keynote speaker concluded / his insightful presentation / when the enthusiastic audience gave / a standing ovation.",
    "options": {
      "a": "Barely had the keynote speaker concluded",
      "b": "his insightful presentation",
      "c": "when the enthusiastic audience gave",
      "d": "a standing ovation / No error"
    },
    "options_hi": {
      "a": "Barely had the keynote speaker concluded",
      "b": "his insightful presentation",
      "c": "when the enthusiastic audience gave",
      "d": "a standing ovation / No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: When a sentence begins with the negative/restrictive adverb 'Barely', it requires inversion of the auxiliary verb ('Barely had + Subject + V3'). Furthermore, 'Barely' is correctly paired with the temporal conjunction 'when' followed by Simple Past ('gave').\nAll grammatical elements, inversion, correlative pairing, and verb tenses are perfectly aligned. Therefore, there is NO ERROR.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: जब वाक्य 'Barely' से प्रारंभ होता है, तो Inversion का नियम लागू होता है ('Barely had + कर्ता + V3')। साथ ही, 'Barely' का जोड़ा 'when' से बनता है जिसके बाद Simple Past ('gave') आता है। इस वाक्य की संरचना पूर्णतः शुद्ध है। अतः कोई त्रुटि नहीं है (No error)।\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Inversion Perfection: 'Barely had [Subject] + V3 ... WHEN + V2'. Valid correlative, valid inversion -> NO ERROR.",
    "shortcut_text_hi": "Inversion जांच: 'Barely had + V3 ... when + V2' पूरी तरह सही है। No error चुनें।"
  },
  {
    "question_number": 19,
    "practice_set": "SET C",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 4",
    "type_category": "Compound Modifiers: Numeral + Noun Adjectives",
    "type_category_hi": "संयुक्त विशेषण: संख्यात्मक विशेषण में बहुवचन का अनुचित प्रयोग",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe real estate developer has constructed / a luxurious three-bedrooms apartment / in the prime residential zone / of the commercial capital.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nThe real estate developer has constructed / a luxurious three-bedrooms apartment / in the prime residential zone / of the commercial capital.",
    "options": {
      "a": "The real estate developer has constructed",
      "b": "a luxurious three-bedrooms apartment",
      "c": "in the prime residential zone",
      "d": "of the commercial capital"
    },
    "options_hi": {
      "a": "The real estate developer has constructed",
      "b": "a luxurious three-bedrooms apartment",
      "c": "in the prime residential zone",
      "d": "of the commercial capital"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When a phrase consisting of a numeral and a noun functions as an adjective modifying another noun (here, modifying 'apartment'), the modifying noun must remain SINGULAR because adjectives in English cannot be pluralized.\nTherefore, 'three-bedrooms apartment' must be corrected to 'three-bedroom apartment'.\nSimilar examples: a four-day seminar, a six-month course, a ten-dollar bill.\n\nCorrect Sentence: 'The real estate developer has constructed a luxurious three-bedroom apartment in the prime residential zone of the commercial capital.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब कोई संख्या और संज्ञा मिलकर किसी अन्य संज्ञा ('apartment') की विशेषता बताने वाले विशेषण (Compound Adjective) का कार्य करते हैं, तो वह संज्ञा हमेशा एकवचन (Singular) में रहती है। अतः 'three-bedrooms apartment' के स्थान पर 'three-bedroom apartment' का प्रयोग होगा।\n\nशुद्ध वाक्य: The real estate developer has constructed a luxurious three-bedroom apartment in the prime residential zone...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Hyphenated Adjective Rule: 'three-bedroom' (NOT three-bedrooms). Adjectives NEVER take plural '-s'.",
    "shortcut_text_hi": "नियम: विशेषण के रूप में प्रयुक्त संज्ञा में कभी 's' नहीं लगता। 'three-bedroom' सही है।"
  },
  {
    "question_number": 20,
    "practice_set": "SET C",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 5",
    "type_category": "Parallelism: Faulty Placement of Correlative 'Either... or'",
    "type_category_hi": "समानांतरता: 'Either... or' का असंतुलित स्थान",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nThe project manager either decided / to submit the preliminary report / or to request an extension / from the funding agency.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe project manager either decided / to submit the preliminary report / or to request an extension / from the funding agency.",
    "options": {
      "a": "The project manager either decided",
      "b": "to submit the preliminary report",
      "c": "or to request an extension",
      "d": "from the funding agency"
    },
    "options_hi": {
      "a": "The project manager either decided",
      "b": "to submit the preliminary report",
      "c": "or to request an extension",
      "d": "from the funding agency"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: Correlative conjunctions ('either... or', 'neither... nor') must be placed before grammatically parallel structures. In this sentence, 'or' precedes an infinitive phrase ('to request an extension'). Therefore, 'either' must also precede the corresponding infinitive phrase ('to submit the preliminary report'), NOT before the main verb 'decided'.\nThe verb 'decided' applies to both choices and should precede 'either': 'decided either to submit... or to request...'.\n\nCorrect Sentence: 'The project manager decided either to submit the preliminary report or to request an extension from the funding agency.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Either... or' को समान व्याकरणिक रूपों (Infinitive के साथ Infinitive) से ठीक पहले रखा जाना चाहिए। यहाँ 'or' के बाद 'to request' (Infinitive) है, अतः 'either' को क्रिया 'decided' के पहले न रखकर 'to submit' के पहले रखा जाना चाहिए: 'decided either to submit... or to request...'\n\nशुद्ध वाक्य: The project manager decided either to submit the preliminary report or to request an extension from the funding agency.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Parallelism Check: 'decided EITHER to submit ... OR to request'. Move 'decided' before 'either' to restore balance.",
    "shortcut_text_hi": "समानांतरता नियम: 'or' के बाद 'to request' है तो 'either' के बाद 'to submit' होना चाहिए -> 'decided either to submit... or to request'."
  },
  {
    "question_number": 21,
    "practice_set": "SET C",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 1",
    "type_category": "Subjunctive Mood: 'It is time' with Subject Requires Past Tense (V2)",
    "type_category_hi": "Subjunctive Mood: 'It is time' के साथ Past Subjunctive (V2)",
    "question_text": "The sentence below has been split into four parts. Find the part with an error:\n\nIt is time / we start taking / active measures / to preserve our depleting underground water resources.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nIt is time / we start taking / active measures / to preserve our depleting underground water resources.",
    "options": {
      "a": "It is time",
      "b": "we start taking",
      "c": "active measures",
      "d": "to preserve our depleting underground water resources"
    },
    "options_hi": {
      "a": "It is time",
      "b": "we start taking",
      "c": "active measures",
      "d": "to preserve our depleting underground water resources"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When 'It is time' or 'It is high time' is followed by a subject pronoun/noun ('we'), the verb must be in the PAST SUBJUNCTIVE (Simple Past - V2), indicating that action is already overdue.\nTherefore, the present tense 'start taking' must be replaced by the past form 'started taking'.\n(Note: If followed directly by an infinitive, use 'It is time to start taking...').\n\nCorrect Sentence: 'It is time we started taking active measures to preserve our depleting underground water resources.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब 'It is time' या 'It is high time' के बाद कर्ता ('we') आता है, तो क्रिया Simple Past (V2) में होती है क्योंकि यह दर्शाता है कि समय पहले ही बीत चुका है। अतः 'start taking' के स्थान पर 'started taking' का प्रयोग होगा।\n\nशुद्ध वाक्य: It is time we started taking active measures to preserve our depleting underground water resources.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Tier-2 Subjunctive Rule: 'It is time + Subject + V2'. Change 'start' to 'started'.",
    "shortcut_text_hi": "Mains नियम: 'It is time + कर्ता' के बाद क्रिया की 2nd form (V2) आती है। 'start' को 'started' में बदलें।"
  },
  {
    "question_number": 22,
    "practice_set": "SET C",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 2",
    "type_category": "Dangling Participle: Illogical Agent for Introductory Participle",
    "type_category_hi": "असंगत कृदंत (Dangling Participle): परिचयात्मक खंड का अवास्तविक कर्ता",
    "question_text": "Identify the segment containing a grammatical error:\n\nOpening the front wooden door / cautiously at midnight, / a gust of freezing wind / extinguished the solitary burning candle.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nOpening the front wooden door / cautiously at midnight, / a gust of freezing wind / extinguished the solitary burning candle.",
    "options": {
      "a": "Opening the front wooden door",
      "b": "cautiously at midnight",
      "c": "a gust of freezing wind",
      "d": "extinguished the solitary burning candle"
    },
    "options_hi": {
      "a": "Opening the front wooden door",
      "b": "cautiously at midnight",
      "c": "a gust of freezing wind",
      "d": "extinguished the solitary burning candle"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: An introductory participial modifier must refer directly and logically to the subject of the main clause. In this sentence, the subject of the main clause is 'a gust of freezing wind', which nonsensically implies that the gust of wind was opening the front door!\nTo resolve this dangling participle error, provide the logical human agent in an adverbial clause: 'When she opened the front wooden door cautiously at midnight, a gust of freezing wind extinguished...'.\n\nCorrect Sentence: 'When she opened the front wooden door cautiously at midnight, a gust of freezing wind extinguished the solitary burning candle.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: जब कृदंत (Participle) से शुरू होने वाले वाक्यांश का कर्ता मुख्य उपवाक्य के कर्ता से मेल नहीं खाता, तो Dangling Modifier की अशुद्धि होती है। यहाँ वाक्य का अर्थ निकलता है कि 'हवा का झोंका सावधानी से दरवाजा खोल रहा था'! इस दोष को दूर करने के लिए कर्ता को स्पष्ट करें: 'When she opened the door...'\n\nशुद्ध वाक्य: When she opened the front wooden door cautiously at midnight, a gust of freezing wind extinguished...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Modifier Trap: Did the wind open the door? NO! Dangling modifier in (a) -> rewrite with explicit subject: 'When he/she opened...'.",
    "shortcut_text_hi": "Dangling Modifier जांच: क्या हवा ने दरवाजा खोला? नहीं! खंड (a) में त्रुटि है।"
  },
  {
    "question_number": 23,
    "practice_set": "SET C",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 3",
    "type_category": "Stative Verbs: Continuous Aspect Misuse with Verb 'Have' (Possession)",
    "type_category_hi": "Stative Verbs: स्वामित्व दर्शाने वाली क्रिया 'Have' का Continuous में अशुद्ध प्रयोग",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nI am having two elder brothers / who are currently employed / as senior software architects / in multinational technology firms.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nI am having two elder brothers / who are currently employed / as senior software architects / in multinational technology firms.",
    "options": {
      "a": "I am having two elder brothers",
      "b": "who are currently employed",
      "c": "as senior software architects",
      "d": "in multinational technology firms"
    },
    "options_hi": {
      "a": "I am having two elder brothers",
      "b": "who are currently employed",
      "c": "as senior software architects",
      "d": "in multinational technology firms"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: When the verb 'have' denotes ownership, possession, or family relationships, it is a STATIVE VERB and cannot be used in continuous/progressive tenses ('am having').\n(Note: 'Having' is permissible only when expressing dynamic activities such as eating, drinking, or experiencing, e.g., 'I am having lunch', 'I am having a good time').\nFor family relations, use the Simple Present: 'I have two elder brothers'.\n\nCorrect Sentence: 'I have two elder brothers who are currently employed as senior software architects in multinational technology firms.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: जब 'have' का प्रयोग स्वामित्व (possession) या पारिवारिक संबंध दर्शाने के लिए होता है, तो यह Stative Verb होती है और इसका प्रयोग Continuous Tense ('am having') में नहीं किया जाता। (Having केवल खाने-पीने या अनुभव करने में सही है, जैसे having lunch)। संबंधों के लिए केवल 'I have' का प्रयोग होगा।\n\nशुद्ध वाक्य: I have two elder brothers who are currently employed as senior software architects...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Common Indian English Error: 'I am having brothers / a car' is WRONG. Always say 'I HAVE brothers / a car'.",
    "shortcut_text_hi": "चेतावनी: 'I am having brothers' गलत है -> 'I have two brothers' सही है।"
  },
  {
    "question_number": 24,
    "practice_set": "SET C",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 4",
    "type_category": "Vocabulary Discrimination: 'Disinterested' (Impartial) vs 'Uninterested' (Indifferent)",
    "type_category_hi": "शब्द भेद: 'Disinterested' (निष्पक्ष) बनाम 'Uninterested' (रुचिहीन)",
    "question_text": "Identify the segment that contains a grammatical error, or select 'No error':\n\nThe presiding arbitrator was widely respected / for his disinterested stance / and unwavering commitment to procedural fairness / throughout the protracted corporate dispute.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें, अथवा 'No error' चुनें:\n\nThe presiding arbitrator was widely respected / for his disinterested stance / and unwavering commitment to procedural fairness / throughout the protracted corporate dispute.",
    "options": {
      "a": "The presiding arbitrator was widely respected",
      "b": "for his disinterested stance",
      "c": "and unwavering commitment to procedural fairness",
      "d": "throughout the protracted corporate dispute / No error"
    },
    "options_hi": {
      "a": "The presiding arbitrator was widely respected",
      "b": "for his disinterested stance",
      "c": "and unwavering commitment to procedural fairness",
      "d": "throughout the protracted corporate dispute / No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar & Vocabulary Rule: 'Disinterested' means impartial, unbiased, and having no personal financial or selfish stake in the outcome. In contrast, 'Uninterested' means bored, indifferent, or lacking curiosity.\nBecause an arbitrator is expected to be impartial and unbiased, the phrase 'his disinterested stance' is 100% correct and precise English.\nAspirants frequently confuse this with 'uninterested'. The sentence is completely error-free. Therefore, 'No error'.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण व शब्द भेद: 'Disinterested' का वास्तविक अर्थ निष्पक्ष (Impartial/Unbiased) होता है जिसका कोई निजी स्वार्थ न हो। वहीं 'Uninterested' का अर्थ रुचिहीन (Bored) होता है। एक मध्यस्थ (Arbitrator) से निष्पक्ष होने की अपेक्षा की जाती है, अतः 'disinterested stance' सर्वथा उपयुक्त और शुद्ध प्रयोग है। इसमें कोई त्रुटि नहीं है (No error)।\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Vocabulary Master: DISINTERESTED = IMPARTIAL (Unbiased judge/arbitrator). UNINTERESTED = BORED. Accurate usage = NO ERROR.",
    "shortcut_text_hi": "शब्द भेद: Disinterested = निष्पक्ष (बिना किसी स्वार्थ के)। वाक्य पूर्णतः शुद्ध है (No error)।"
  },
  {
    "question_number": 25,
    "practice_set": "SET C",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 5",
    "type_category": "Indefinite Distributive: 'Many a' Takes Singular Noun & Singular Verb",
    "type_category_hi": "अनिश्चयवाचक वितरक: 'Many a' के साथ एकवचन संज्ञा और एकवचन क्रिया",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nMany a promising student / have failed to realize / their true academic potential / due to excessive addiction to social media platforms.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nMany a promising student / have failed to realize / their true academic potential / due to excessive addiction to social media platforms.",
    "options": {
      "a": "Many a promising student",
      "b": "have failed to realize",
      "c": "their true academic potential",
      "d": "due to excessive addiction to social media platforms"
    },
    "options_hi": {
      "a": "Many a promising student",
      "b": "have failed to realize",
      "c": "their true academic potential",
      "d": "due to excessive addiction to social media platforms"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: The structure 'Many a / Many an' is followed by a SINGULAR countable noun and requires a strictly SINGULAR verb (along with singular possessive pronouns like 'his/her').\nAlthough 'Many a student' expresses a plural idea semantically, grammatically it treats the subjects distributively (one by one).\nTherefore, the plural verb 'have failed' is ungrammatical; it must be replaced by the singular verb 'has failed'.\n\nCorrect Sentence: 'Many a promising student has failed to realize his true academic potential due to excessive addiction to social media platforms.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Many a / Many an' के बाद संज्ञा एकवचन (Singular noun) होती है और इसके साथ प्रयुक्त होने वाली क्रिया भी सदैव एकवचन (Singular verb) होती है।\nअतः 'have failed' के स्थान पर 'has failed' का प्रयोग होगा।\n\nशुद्ध वाक्य: Many a promising student has failed to realize his true academic potential...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Tier-2 Golden Rule: 'MANY A + Singular Noun + SINGULAR VERB'. 'Many a student HAS' (never 'have').",
    "shortcut_text_hi": "गोल्डन नियम: Many a + एकवचन Noun + एकवचन Verb। 'Many a student has failed' सही है।"
  }
]
;

const SPOTTING_ERRORS_SET_D_QUESTIONS = [
  {
    "question_number": 1,
    "practice_set": "SET D",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: 'Everyone of' Takes Singular Verb",
    "type_category_hi": "कर्ता-क्रिया समझौता: 'Everyone of' के साथ एकवचन क्रिया",
    "question_text": "In the sentence, identify the segment which contains a grammatical error:\n\nEveryone of the delegates / attending the international summit / were presented with / an engraved silver medal.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nEveryone of the delegates / attending the international summit / were presented with / an engraved silver medal.",
    "options": {
      "a": "Everyone of the delegates",
      "b": "attending the international summit",
      "c": "were presented with",
      "d": "an engraved silver medal"
    },
    "options_hi": {
      "a": "Everyone of the delegates",
      "b": "attending the international summit",
      "c": "were presented with",
      "d": "an engraved silver medal"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: Indefinite distributive pronouns such as 'Everyone of', 'Each of', 'None of', and 'Either of' are followed by a plural noun or pronoun ('delegates'), but the governing verb is strictly SINGULAR because the focus is on each individual entity.\nTherefore, the plural verb 'were presented' must be replaced by the singular verb 'was presented'.\n\nCorrect Sentence: 'Everyone of the delegates attending the international summit was presented with an engraved silver medal.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Everyone of', 'Each of', 'Neither of' के बाद संज्ञा बहुवचन (delegates) होती है, परंतु मुख्य क्रिया सदैव एकवचन (Singular) होती है क्योंकि यह प्रत्येक व्यक्ति को पृथक रूप से संदर्भित करता है।\nअतः 'were presented' के स्थान पर 'was presented' का प्रयोग होगा।\n\nशुद्ध वाक्य: Everyone of the delegates attending the international summit was presented with an engraved silver medal.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Golden SSC Rule: 'Everyone of / Each of' + Plural Noun + SINGULAR VERB ('was presented', not 'were').",
    "shortcut_text_hi": "गोल्डन नियम: Everyone of + बहुवचन संज्ञा + एकवचन क्रिया। 'were presented' गलत है -> 'was presented' सही है।"
  },
  {
    "question_number": 2,
    "practice_set": "SET D",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 2",
    "type_category": "Tenses: Past Perfect Temporal Sequence with 'Before'",
    "type_category_hi": "काल: 'Before' के साथ Past Perfect का समय क्रम",
    "question_text": "The sentence below has been divided into four parts. Find the part containing an error, or select 'No error':\n\nThe express passenger train had departed / from the platform before / the breathless commuters reached / the railway junction.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें, अथवा 'No error' चुनें:\n\nThe express passenger train had departed / from the platform before / the breathless commuters reached / the railway junction.",
    "options": {
      "a": "The express passenger train had departed",
      "b": "from the platform before",
      "c": "the breathless commuters reached",
      "d": "the railway junction / No error"
    },
    "options_hi": {
      "a": "The express passenger train had departed",
      "b": "from the platform before",
      "c": "the breathless commuters reached",
      "d": "the railway junction / No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: When two past actions are related by 'before', the earlier action is expressed in the Past Perfect Tense ('had + V3' -> 'had departed'), and the subsequent action is expressed in the Simple Past Tense ('V2' -> 'reached').\nBoth clauses are grammatically and semantically flawless. Therefore, there is NO ERROR.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: जब भूतकाल के दो कार्य 'before' से जुड़े हों, तो पहले संपन्न हुए कार्य के लिए Past Perfect ('had departed') और बाद वाले कार्य के लिए Simple Past ('reached') का प्रयोग होता है।\nइस वाक्य में दोनों कालों का प्रयोग पूर्णतः शुद्ध है। अतः कोई त्रुटि नहीं है (No error)।\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Timeline Check: 1st Action = 'had departed' (Past Perfect). 2nd Action = 'reached' (Simple Past). Perfect sequence = NO ERROR.",
    "shortcut_text_hi": "कालक्रम जांच: ट्रेन पहले छूटी (had departed), यात्री बाद में पहुंचे (reached)। वाक्य पूर्णतः शुद्ध है।"
  },
  {
    "question_number": 3,
    "practice_set": "SET D",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 3",
    "type_category": "Prepositions: 'Congratulate On' (Not 'For')",
    "type_category_hi": "Preposition: 'Congratulate' के साथ 'On' का प्रयोग ('For' नहीं)",
    "question_text": "Select the segment that contains a grammatical error in the following sentence:\n\nAll the professors congratulated him / for his stupendous success / in the civil services examination / announced yesterday.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nAll the professors congratulated him / for his stupendous success / in the civil services examination / announced yesterday.",
    "options": {
      "a": "All the professors congratulated him",
      "b": "for his stupendous success",
      "c": "in the civil services examination",
      "d": "announced yesterday"
    },
    "options_hi": {
      "a": "All the professors congratulated him",
      "b": "for his stupendous success",
      "c": "in the civil services examination",
      "d": "announced yesterday"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: The verb 'congratulate' (and its noun form 'congratulations') takes the fixed preposition 'ON' regarding an achievement or milestone, NEVER 'for'.\nUsing 'congratulated him for his success' is an Indian English interference error frequently tested by SSC. Replace 'for' with 'on'.\nSimilarly: compliment somebody on something.\n\nCorrect Sentence: 'All the professors congratulated him on his stupendous success in the civil services examination announced yesterday.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Congratulate' (बधाई देना) के साथ किसी सफलता या उपलब्धि के लिए निश्चित Preposition 'ON' का प्रयोग होता है, 'FOR' का नहीं।\n'Congratulated him for' के स्थान पर 'congratulated him on' का प्रयोग होगा।\n\nशुद्ध वाक्य: All the professors congratulated him on his stupendous success in the civil services examination...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Fixed Preposition: Congratulate someone ON an achievement (NEVER 'for'!). 'congratulated ON his success'.",
    "shortcut_text_hi": "निश्चित Preposition: Congratulate के बाद हमेशा 'ON' आता है, 'FOR' नहीं। 'congratulated on' सही है।"
  },
  {
    "question_number": 4,
    "practice_set": "SET D",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 4",
    "type_category": "Articles: 'An' Before Silent 'H' Words ('Honest')",
    "type_category_hi": "Article: मूक 'H' वाले शब्दों के पहले 'An' का प्रयोग ('Honest')",
    "question_text": "Identify the segment containing a grammatical error:\n\nHe is known throughout the precinct / as a honest and dedicated / public servant who refuses / to compromise on integrity.",
    "question_text_hi": "वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nHe is known throughout the precinct / as a honest and dedicated / public servant who refuses / to compromise on integrity.",
    "options": {
      "a": "He is known throughout the precinct",
      "b": "as a honest and dedicated",
      "c": "public servant who refuses",
      "d": "to compromise on integrity"
    },
    "options_hi": {
      "a": "He is known throughout the precinct",
      "b": "as a honest and dedicated",
      "c": "public servant who refuses",
      "d": "to compromise on integrity"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: The indefinite article 'an' is used before words that begin with a vowel SOUND. In the word 'honest', the initial letter 'h' is silent, and the pronunciation begins with the vowel sound /ɒ/ ('on-ist').\nTherefore, 'a honest' is incorrect; it must be preceded by 'an honest'.\nSimilar words with silent 'h': an hour, an heir, an honour, an honorary post.\n\nCorrect Sentence: 'He is known throughout the precinct as an honest and dedicated public servant who refuses to compromise on integrity.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'An' का प्रयोग स्वर ध्वनि (Vowel sound) से शुरू होने वाले शब्दों के पहले होता है। 'Honest' में 'H' मूक (Silent) होता है और इसका उच्चारण स्वर ध्वनि /आ/ ('onest') से होता है। अतः 'a honest' गलत है; इसके स्थान पर 'an honest' का प्रयोग होगा।\n\nशुद्ध वाक्य: He is known throughout the precinct as an honest and dedicated public servant...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Silent 'H' Rule: Honest / Hour / Heir / Honour start with a vowel sound -> ALWAYS TAKE 'AN' ('an honest officer').",
    "shortcut_text_hi": "मूक 'H' नियम: Honest, Hour, Heir का उच्चारण स्वर से होता है, अतः इनके पहले हमेशा 'AN' आता है।"
  },
  {
    "question_number": 5,
    "practice_set": "SET D",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 5",
    "type_category": "Nouns: Uncountable Noun 'Equipment' (No Plural Form)",
    "type_category_hi": "संज्ञा: अगणनीय संज्ञा 'Equipment' का अशुद्ध बहुवचन",
    "question_text": "The sentence below has been divided into four parts. Find the part with an error:\n\nThe sports department has procured / several sophisticated equipments / for the newly constructed / multi-purpose gymnasium.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nThe sports department has procured / several sophisticated equipments / for the newly constructed / multi-purpose gymnasium.",
    "options": {
      "a": "The sports department has procured",
      "b": "several sophisticated equipments",
      "c": "for the newly constructed",
      "d": "multi-purpose gymnasium"
    },
    "options_hi": {
      "a": "The sports department has procured",
      "b": "several sophisticated equipments",
      "c": "for the newly constructed",
      "d": "multi-purpose gymnasium"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'Equipment' is an uncountable noun referring to apparatus or gear collectively. It does NOT take a plural form ('equipments' is ungrammatical).\nTo denote multiple units, use 'several sophisticated pieces of equipment' or 'much sophisticated equipment'.\n\nCorrect Sentence: 'The sports department has procured several sophisticated pieces of equipment for the newly constructed multi-purpose gymnasium.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Equipment' (उपकरण) एक अगणनीय संज्ञा (Uncountable noun) है। इसका बहुवचन 'equipments' नहीं होता। बहुवचन का भाव व्यक्त करने के लिए 'pieces of equipment' का प्रयोग किया जाता है।\nअतः 'equipments' के स्थान पर 'pieces of equipment' (या केवल 'equipment') का प्रयोग होगा।\n\nशुद्ध वाक्य: The sports department has procured several sophisticated pieces of equipment for the newly constructed...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Uncountable List: 'Equipment' NEVER takes '-s'! Say 'pieces of equipment', never 'equipments'.",
    "shortcut_text_hi": "अगणनीय संज्ञा नियम: 'Equipment' में कभी 's' नहीं लगता। 'equipments' गलत है -> 'pieces of equipment' सही है।"
  },
  {
    "question_number": 6,
    "practice_set": "SET D",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: Pair Nouns Expressing a Single Idea",
    "type_category_hi": "कर्ता-क्रिया समझौता: एक भाव दर्शाने वाले युगल संज्ञा पद",
    "question_text": "Identify the segment that contains a grammatical error:\n\nBread and butter / are considered to be / a wholesome and staple breakfast / for working professionals in metropolitan areas.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nBread and butter / are considered to be / a wholesome and staple breakfast / for working professionals in metropolitan areas.",
    "options": {
      "a": "Bread and butter",
      "b": "are considered to be",
      "c": "a wholesome and staple breakfast",
      "d": "for working professionals in metropolitan areas"
    },
    "options_hi": {
      "a": "Bread and butter",
      "b": "are considered to be",
      "c": "a wholesome and staple breakfast",
      "d": "for working professionals in metropolitan areas"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When two nouns joined by 'and' represent a single collective idea, dish, unit, or livelihood (e.g., 'bread and butter', 'slow and steady', 'rice and curry', 'hammer and sickle'), they are treated as a singular subject and take a SINGULAR verb.\nHere, 'bread and butter' refers to a single dish ('a wholesome breakfast'). Therefore, the plural verb 'are considered' must be replaced by the singular verb 'is considered'.\n\nCorrect Sentence: 'Bread and butter is considered to be a wholesome and staple breakfast for working professionals in metropolitan areas.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब 'and' से जुड़ी दो संज्ञाएं मिलकर एक ही विचार, एक ही वस्तु या एक भोजन (Dish) का बोध कराती हैं (जैसे bread and butter, rice and curry, slow and steady), तो उन्हें एकवचन माना जाता है और उनके साथ एकवचन क्रिया (Singular verb) आती है।\nयहाँ 'are considered' के स्थान पर 'is considered' का प्रयोग होगा।\n\nशुद्ध वाक्य: Bread and butter is considered to be a wholesome and staple breakfast...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "SSC Pair Nouns Rule: Bread and butter / Rice and curry (when taken as 1 dish) -> TAKES SINGULAR VERB ('IS').",
    "shortcut_text_hi": "युगल संज्ञा नियम: Bread and butter जब एक भोजन के रूप में हो तो क्रिया एकवचन ('IS') होगी, 'are' नहीं।"
  },
  {
    "question_number": 7,
    "practice_set": "SET D",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 2",
    "type_category": "Conjunctions: 'Although / Though' Paired with 'Yet' (Never 'But')",
    "type_category_hi": "संयोजक: 'Although / Though' के साथ 'Yet' का प्रयोग ('But' नहीं)",
    "question_text": "Select the segment in the sentence that contains an error:\n\nAlthough the young athlete practiced / rigorously for several months, / but he failed to secure / a podium finish at the state meet.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nAlthough the young athlete practiced / rigorously for several months, / but he failed to secure / a podium finish at the state meet.",
    "options": {
      "a": "Although the young athlete practiced",
      "b": "rigorously for several months",
      "c": "but he failed to secure",
      "d": "a podium finish at the state meet"
    },
    "options_hi": {
      "a": "Although the young athlete practiced",
      "b": "rigorously for several months",
      "c": "but he failed to secure",
      "d": "a podium finish at the state meet"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: Subordinating conjunctions 'Although' and 'Though' are paired with 'yet' or simply with a comma. They are NEVER paired with the coordinating conjunction 'but'. Using 'Although... but' is a major conjunction error.\nIn this sentence, remove 'but' (or replace it with 'yet').\n\nCorrect Sentence: 'Although the young athlete practiced rigorously for several months, he failed to secure a podium finish at the state meet.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Although' या 'Though' के साथ केवल 'yet' या अल्पविराम (comma) का प्रयोग होता है; इनके साथ कभी भी 'but' का प्रयोग नहीं किया जाता।\nअतः 'but' को हटा दें या उसके स्थान पर 'yet' का प्रयोग करें।\n\nशुद्ध वाक्य: Although the young athlete practiced rigorously for several months, he failed to secure...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Correlative Trap: ALTHOUGH is NEVER followed by BUT! Pair it with a comma or 'YET'.",
    "shortcut_text_hi": "संयोजक नियम: Although के साथ कभी 'BUT' नहीं आता! केवल comma या 'yet' आता है।"
  },
  {
    "question_number": 8,
    "practice_set": "SET D",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 3",
    "type_category": "Tenses: Clause with 'Since' as Point in Time",
    "type_category_hi": "काल: समय बिंदु के रूप में 'Since' उपवाक्य का काल",
    "question_text": "The sentence below has been divided into four parts. Find the part with an error:\n\nShe did not visit her native hometown / since she has completed / her postgraduate medical training / five years ago.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nShe did not visit her native hometown / since she has completed / her postgraduate medical training / five years ago.",
    "options": {
      "a": "She did not visit her native hometown",
      "b": "since she has completed",
      "c": "her postgraduate medical training",
      "d": "five years ago"
    },
    "options_hi": {
      "a": "She did not visit her native hometown",
      "b": "since she has completed",
      "c": "her postgraduate medical training",
      "d": "five years ago"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When 'since' functions as a conjunction of time, the clause introduced by 'since' must be in the SIMPLE PAST TENSE ('V2'), while the main clause is typically in the Present Perfect Tense ('has/have + V3').\nTherefore, 'since she has completed' is ungrammatical; it must be 'since she completed'.\n(Furthermore, the main clause is correctly 'She has not visited...').\n\nCorrect Sentence: 'She has not visited her native hometown since she completed her postgraduate medical training five years ago.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब 'since' समय सूचक संयोजक के रूप में आता है, तो 'since' के बाद वाला उपवाक्य हमेशा Simple Past Tense ('V2') में होता है, Present Perfect में नहीं। अतः 'since she has completed' के स्थान पर 'since she completed' का प्रयोग होगा।\n\nशुद्ध वाक्य: She has not visited her native hometown since she completed her postgraduate medical training...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Formula: Main Clause (Present Perfect) + SINCE + Subordinate Clause (SIMPLE PAST - V2). 'since she completed' (not has completed).",
    "shortcut_text_hi": "फॉर्मूला: Present Perfect + SINCE + Simple Past (V2)। 'since' के बाद 'has/have' नहीं आता, केवल V2 आता है।"
  },
  {
    "question_number": 9,
    "practice_set": "SET D",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 4",
    "type_category": "Adjectives: 'Superior' Takes Preposition 'To'",
    "type_category_hi": "विशेषण: 'Superior' के साथ 'To' का प्रयोग",
    "question_text": "Identify the segment containing a grammatical error:\n\nThis handwoven organic fabric / is superior than the synthetic material / in both thermal comfort / and ecological sustainability.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nThis handwoven organic fabric / is superior than the synthetic material / in both thermal comfort / and ecological sustainability.",
    "options": {
      "a": "This handwoven organic fabric",
      "b": "is superior than the synthetic material",
      "c": "in both thermal comfort",
      "d": "and ecological sustainability"
    },
    "options_hi": {
      "a": "This handwoven organic fabric",
      "b": "is superior than the synthetic material",
      "c": "in both thermal comfort",
      "d": "and ecological sustainability"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: Latin comparative adjectives ending in '-ior' (superior, inferior, senior, junior, prior) are followed by the preposition 'to', NEVER 'than'.\nReplace 'superior than' with 'superior to'.\n\nCorrect Sentence: 'This handwoven organic fabric is superior to the synthetic material in both thermal comfort and ecological sustainability.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Superior', 'Inferior', 'Senior' आदि लैटिन विशेषणों के बाद 'than' का प्रयोग नहीं होता, बल्कि 'to' का प्रयोग होता है।\nअतः 'superior than' के स्थान पर 'superior to' का प्रयोग होगा।\n\nशुद्ध वाक्य: This handwoven organic fabric is superior to the synthetic material in both thermal comfort...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Rule: SUPERIOR + TO (NEVER THAN!). 'superior than' is an immediate TCS error flag.",
    "shortcut_text_hi": "नियम: Superior के बाद हमेशा 'TO' आता है, 'than' कभी नहीं। 'superior to' सही है।"
  },
  {
    "question_number": 10,
    "practice_set": "SET D",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 5",
    "type_category": "Conjunctions: 'Lest' Takes Modal 'Should' Without Negation",
    "type_category_hi": "संयोजक: 'Lest' के साथ 'Should' का प्रयोग (नकारात्मक शब्द नहीं)",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nWork diligently during your preparatory months / lest you should not regret / your lack of discipline / when the final merit list is declared.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nWork diligently during your preparatory months / lest you should not regret / your lack of discipline / when the final merit list is declared.",
    "options": {
      "a": "Work diligently during your preparatory months",
      "b": "lest you should not regret",
      "c": "your lack of discipline",
      "d": "when the final merit list is declared"
    },
    "options_hi": {
      "a": "Work diligently during your preparatory months",
      "b": "lest you should not regret",
      "c": "your lack of discipline",
      "d": "when the final merit list is declared"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'Lest' means 'for fear that' or 'in order to avoid'. Because it already possesses an inherent negative meaning, it is NEVER followed by 'not'. Furthermore, 'lest' must be followed by the auxiliary 'SHOULD' (or the subjunctive base form).\nUsing 'not' after 'lest you should' creates a double negative error. Remove 'not'.\n\nCorrect Sentence: 'Work diligently during your preparatory months lest you should regret your lack of discipline when the final merit list is declared.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Lest' का अर्थ 'कहीं ऐसा न हो कि' होता है। यह स्वयं एक नकारात्मक शब्द है, अतः इसके बाद 'not' का प्रयोग वर्जित है। साथ ही, 'lest' के बाद आने वाले उपवाक्य में सहायक क्रिया 'SHOULD' (या Base verb) का प्रयोग अनिवार्य होता है।\nअतः 'lest you should not regret' में से 'not' को हटा दें: 'lest you should regret'।\n\nशुद्ध वाक्य: Work diligently during your preparatory months lest you should regret your lack of discipline...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Lest Formula: LEST + Subject + SHOULD + V1 (NO 'NOT'!). 'lest you should not' is 100% wrong.",
    "shortcut_text_hi": "Lest फॉर्मूला: Lest के साथ हमेशा 'Should' आता है और 'Not' कभी नहीं आता। 'lest you should regret' सही है।"
  },
  {
    "question_number": 11,
    "practice_set": "SET D",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 1",
    "type_category": "PYQ Pattern: 'One of the discoveries that has/have...'",
    "type_category_hi": "PYQ पैटर्न: 'One of the discoveries that' के बाद बहुवचन क्रिया",
    "question_text": "The sentence below is split into four parts. Find the part with an error:\n\nPenicillin is widely regarded as / one of the most miraculous discoveries / that has transformed / the history of clinical medicine.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nPenicillin is widely regarded as / one of the most miraculous discoveries / that has transformed / the history of clinical medicine.",
    "options": {
      "a": "Penicillin is widely regarded as",
      "b": "one of the most miraculous discoveries",
      "c": "that has transformed",
      "d": "the history of clinical medicine"
    },
    "options_hi": {
      "a": "Penicillin is widely regarded as",
      "b": "one of the most miraculous discoveries",
      "c": "that has transformed",
      "d": "the history of clinical medicine"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When a relative clause ('that...') modifies a plural noun ('discoveries') following 'one of the', the verb inside the relative clause must agree with that plural antecedent.\nHere, 'discoveries' is plural; hence, 'that has transformed' must be replaced by 'that have transformed'.\n\nCorrect Sentence: 'Penicillin is widely regarded as one of the most miraculous discoveries that have transformed the history of clinical medicine.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'One of the + बहुवचन संज्ञा' के बाद जब Relative Pronoun ('that / who') आता है, तो क्रिया Relative Pronoun के पूर्ववर्ती बहुवचन संज्ञा ('discoveries') के अनुसार बहुवचन होती है।\nअतः 'that has' के स्थान पर 'that have' का प्रयोग होगा।\n\nशुद्ध वाक्य: Penicillin is widely regarded as one of the most miraculous discoveries that have transformed...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "PYQ Pattern: 'One of the [PLURAL NOUN] THAT [PLURAL VERB]'. 'discoveries that HAVE' (not has).",
    "shortcut_text_hi": "PYQ नियम: One of the + Plural Noun + THAT + Have (बहुवचन क्रिया)। 'discoveries that have' सही है।"
  },
  {
    "question_number": 12,
    "practice_set": "SET D",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 2",
    "type_category": "PYQ Pattern: 'Comprise' Does Not Take Preposition 'Of'",
    "type_category_hi": "PYQ पैटर्न: 'Comprise' के साथ Preposition 'Of' का प्रयोग नहीं होता",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe specialized high-powered inquiry panel / comprised of five distinguished retired judges / and two forensic audit specialists.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe specialized high-powered inquiry panel / comprised of five distinguished retired judges / and two forensic audit specialists.",
    "options": {
      "a": "The specialized high-powered inquiry panel",
      "b": "comprised of five distinguished retired judges",
      "c": "and two forensic audit specialists",
      "d": "No error"
    },
    "options_hi": {
      "a": "The specialized high-powered inquiry panel",
      "b": "comprised of five distinguished retired judges",
      "c": "and two forensic audit specialists",
      "d": "No error"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: In the active voice, the verb 'comprise' means 'to consist of' or 'to be composed of'. Because 'of' is already embedded within its definition, using 'comprised of' in active voice is an erroneous redundancy.\nRemove 'of' and say 'comprised five distinguished retired judges' (or use 'was composed of').\n\nCorrect Sentence: 'The specialized high-powered inquiry panel comprised five distinguished retired judges and two forensic audit specialists.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: कर्तृवाच्य (Active voice) में 'Comprise' का अर्थ 'से मिलकर बनना' होता है। इसके बाद Preposition 'of' का प्रयोग पूर्णतः अशुद्ध और अतिरिक्त है।\n'Comprised of' के स्थान पर केवल 'comprised' का प्रयोग होगा। ('Consist of' या 'composed of' सही है)।\n\nशुद्ध वाक्य: The specialized high-powered inquiry panel comprised five distinguished retired judges...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "TCS Classic: COMPRISE = CONSIST OF. Therefore, COMPRISE takes NO 'OF'! 'comprised five judges' (not comprised of).",
    "shortcut_text_hi": "TCS क्लासिक नियम: Comprise के बाद कभी 'OF' नहीं आता! 'comprised of' देखते ही 'of' हटाएं।"
  },
  {
    "question_number": 13,
    "practice_set": "SET D",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 3",
    "type_category": "PYQ Pattern: Question Tag for 'I am' ('Aren't I?')",
    "type_category_hi": "PYQ पैटर्न: 'I am' का Question Tag ('Aren't I?')",
    "question_text": "Select the segment in the sentence that has an error:\n\nI am completely entitled / to express my professional opinion / in this academic symposium, / amn't I?",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nI am completely entitled / to express my professional opinion / in this academic symposium, / amn't I?",
    "options": {
      "a": "I am completely entitled",
      "b": "to express my professional opinion",
      "c": "in this academic symposium",
      "d": "amn't I?"
    },
    "options_hi": {
      "a": "I am completely entitled",
      "b": "to express my professional opinion",
      "c": "in this academic symposium",
      "d": "amn't I?"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: There is no contraction 'amn't I' in standard English grammar. When the positive statement begins with 'I am', the corresponding negative question tag is ALWAYS 'aren't I?'.\n(Note: If the statement is negative, 'I am not', the positive tag is 'am I?').\nReplace 'amn't I?' with 'aren't I?'.\n\nCorrect Sentence: 'I am completely entitled to express my professional opinion in this academic symposium, aren't I?'\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: मानक अंग्रेजी व्याकरण में 'amn't I' जैसा कोई शब्द नहीं होता। जब सकारात्मक वाक्य 'I am' से शुरू होता है, तो उसका नकारात्मक Question Tag सदैव 'aren't I?' होता है।\nअतः 'amn't I?' के स्थान पर 'aren't I?' का प्रयोग होगा।\n\nशुद्ध वाक्य: I am completely entitled to express my professional opinion in this academic symposium, aren't I?\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Question Tag Rule: 'I AM ...' -> Tag is ALWAYS 'AREN'T I?'. 'Amn't I' is non-existent in English.",
    "shortcut_text_hi": "टैग नियम: 'I am' का Question Tag हमेशा 'aren't I?' होता है। 'amn't I' अंग्रेजी में नहीं होता।"
  },
  {
    "question_number": 14,
    "practice_set": "SET D",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 4",
    "type_category": "PYQ Pattern: 'In addition to' + Gerund",
    "type_category_hi": "PYQ पैटर्न: 'In addition to' के बाद Gerund (V-ing)",
    "question_text": "Identify the segment containing a grammatical error:\n\nIn addition to teach / English literature at the university, / she authors weekly analytical columns / on global geopolitics.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nIn addition to teach / English literature at the university, / she authors weekly analytical columns / on global geopolitics.",
    "options": {
      "a": "In addition to teach",
      "b": "English literature at the university",
      "c": "she authors weekly analytical columns",
      "d": "on global geopolitics"
    },
    "options_hi": {
      "a": "In addition to teach",
      "b": "English literature at the university",
      "c": "she authors weekly analytical columns",
      "d": "on global geopolitics"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: In the compound prepositional phrase 'In addition to' (meaning 'as well as' or 'besides'), 'to' is a preposition. Prepositions must be followed by a noun, pronoun, or gerund ('V1 + ing').\nTherefore, 'In addition to teach' is incorrect; it must be 'In addition to teaching'.\n\nCorrect Sentence: 'In addition to teaching English literature at the university, she authors weekly analytical columns on global geopolitics.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'In addition to' (के अतिरिक्त) में 'to' एक Preposition है। Preposition के बाद हमेशा संज्ञा या Gerund ('V-ing') का प्रयोग होता है। अतः 'to teach' के स्थान पर 'to teaching' का प्रयोग होगा।\n\nशुद्ध वाक्य: In addition to teaching English literature at the university, she authors weekly analytical columns...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Preposition Rule: 'In addition to + V-ING'. Say 'In addition to teaching', never 'to teach'.",
    "shortcut_text_hi": "नियम: 'In addition to' के बाद क्रिया का '-ing' रूप (Gerund) आता है। 'to teaching' सही है।"
  },
  {
    "question_number": 15,
    "practice_set": "SET D",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 5",
    "type_category": "PYQ Pattern: Noun 'Poultry' is Always Plural",
    "type_category_hi": "PYQ पैटर्न: 'Poultry' सदैव बहुवचन क्रिया लेता है",
    "question_text": "Select the segment in the sentence that has an error:\n\nOn the modern farm, / the domestic poultry is kept / in temperature-controlled sheds / to maximize egg production.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nOn the modern farm, / the domestic poultry is kept / in temperature-controlled sheds / to maximize egg production.",
    "options": {
      "a": "On the modern farm",
      "b": "the domestic poultry is kept",
      "c": "in temperature-controlled sheds",
      "d": "to maximize egg production"
    },
    "options_hi": {
      "a": "On the modern farm",
      "b": "the domestic poultry is kept",
      "c": "in temperature-controlled sheds",
      "d": "to maximize egg production"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'Poultry' (referring to domestic fowls like chickens, ducks, turkeys) is a collective noun that is singular in form but PLURAL in construction and meaning. It always takes a PLURAL verb ('are / were kept').\nReplace 'the domestic poultry is kept' with 'the domestic poultry are kept'.\n\nCorrect Sentence: 'On the modern farm, the domestic poultry are kept in temperature-controlled sheds to maximize egg production.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Poultry' (मुर्गी आदि पालतू पक्षी) दिखने में एकवचन लगता है लेकिन यह सदैव बहुवचन (Plural) होता है और इसके साथ बहुवचन क्रिया का प्रयोग होता है।\nअतः 'poultry is kept' के स्थान पर 'poultry are kept' का प्रयोग होगा।\n\nशुद्ध वाक्य: On the modern farm, the domestic poultry are kept in temperature-controlled sheds...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Nouns Alert: Poultry / Cattle / People / Gentry -> PLURAL VERB ('ARE kept', not 'is').",
    "shortcut_text_hi": "संज्ञा नियम: Poultry के साथ हमेशा बहुवचन क्रिया ('ARE') आती है, 'is' नहीं।"
  },
  {
    "question_number": 16,
    "practice_set": "SET D",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 1",
    "type_category": "Advanced Subject-Verb: 'The percentage of...' Takes Singular Verb",
    "type_category_hi": "उन्नत कर्ता-क्रिया समझौता: 'The percentage of...' के साथ एकवचन क्रिया",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe percentage of successful candidates / in the national competitive examination / have declined precipitously / over the past three recruitment cycles.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe percentage of successful candidates / in the national competitive examination / have declined precipitously / over the past three recruitment cycles.",
    "options": {
      "a": "The percentage of successful candidates",
      "b": "in the national competitive examination",
      "c": "have declined precipitously",
      "d": "over the past three recruitment cycles"
    },
    "options_hi": {
      "a": "The percentage of successful candidates",
      "b": "in the national competitive examination",
      "c": "have declined precipitously",
      "d": "over the past three recruitment cycles"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When 'The percentage of' precedes a plural noun, the subject is the singular abstract noun 'percentage'. Therefore, 'The percentage of...' ALWAYS takes a SINGULAR verb.\n(Contrast with 'A percentage of...', which can take a plural verb if followed by a countable plural noun).\nHere, 'have declined' must be replaced by 'has declined'.\n\nCorrect Sentence: 'The percentage of successful candidates in the national competitive examination has declined precipitously over the past three recruitment cycles.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब 'The percentage of' के बाद बहुवचन संज्ञा आती है, तब भी मुख्य कर्ता 'percentage' (एकवचन) ही रहता है। अतः 'The percentage of...' के साथ सदैव एकवचन क्रिया (Singular verb) का प्रयोग होता है।\nयहाँ 'have declined' के स्थान पर 'has declined' का प्रयोग होगा।\n\nशुद्ध वाक्य: The percentage of successful candidates in the national competitive examination has declined...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Formula: 'THE percentage of...' = ALWAYS SINGULAR VERB ('has declined'). Do not look at 'candidates'.",
    "shortcut_text_hi": "फॉर्मूला: 'The percentage of' के साथ हमेशा एकवचन क्रिया ('has') आती है। 'candidates' देखकर 'have' न लगाएं।"
  },
  {
    "question_number": 17,
    "practice_set": "SET D",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 2",
    "type_category": "Third Conditional: Passive Voice Missing 'Been'",
    "type_category_hi": "तृतीय शर्त (Third Conditional): कर्मवाच्य में 'Been' का लोप",
    "question_text": "The sentence below has been divided into four parts. Find the part with an error:\n\nHad the local administration acted promptly / upon receiving intelligence reports, / the communal clash might have prevented / by deploying security forces.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nHad the local administration acted promptly / upon receiving intelligence reports, / the communal clash might have prevented / by deploying security forces.",
    "options": {
      "a": "Had the local administration acted promptly",
      "b": "upon receiving intelligence reports",
      "c": "the communal clash might have prevented",
      "d": "by deploying security forces"
    },
    "options_hi": {
      "a": "Had the local administration acted promptly",
      "b": "upon receiving intelligence reports",
      "c": "the communal clash might have prevented",
      "d": "by deploying security forces"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: In the main clause of a Third Conditional sentence, the subject 'the communal clash' is a non-human entity that cannot perform the action of preventing; it receives the action (passive voice).\nThe passive modal perfect construction requires 'might have BEEN + V3'. Using active 'might have prevented' makes it sound as if the clash prevented something!\nReplace 'might have prevented' with 'might have been prevented'.\n\nCorrect Sentence: 'Had the local administration acted promptly upon receiving intelligence reports, the communal clash might have been prevented by deploying security forces.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: वाक्य के मुख्य उपवाक्य का कर्ता 'the communal clash' (दंगा) स्वयं कोई कार्य नहीं कर सकता, बल्कि उसे रोका जाना था (Passive Voice)। अतः Passive संरचना में 'might have been prevented' का प्रयोग होगा, केवल 'might have prevented' (Active) का नहीं।\n\nशुद्ध वाक्य: Had the local administration acted promptly..., the communal clash might have been prevented...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Voice Trap: Can a 'clash' prevent itself? No! It MUST be PASSIVE: 'might have BEEN prevented'.",
    "shortcut_text_hi": "वाच्य नियम: दंगा स्वयं नहीं रुकता, उसे रोका जाता है -> Passive Voice: 'might have been prevented' सही है।"
  },
  {
    "question_number": 18,
    "practice_set": "SET D",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 3",
    "type_category": "Inversion: Initial Negative Adverb 'Never'",
    "type_category_hi": "Inversion: प्रारंभिक नकारात्मक क्रियाविशेषण 'Never' के साथ Inversion",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nNever I have witnessed / such an extraordinary display / of architectural grandeur / in any ancient monument across Asia.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nNever I have witnessed / such an extraordinary display / of architectural grandeur / in any ancient monument across Asia.",
    "options": {
      "a": "Never I have witnessed",
      "b": "such an extraordinary display",
      "c": "of architectural grandeur",
      "d": "in any ancient monument across Asia"
    },
    "options_hi": {
      "a": "Never I have witnessed",
      "b": "such an extraordinary display",
      "c": "of architectural grandeur",
      "d": "in any ancient monument across Asia"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: When a sentence begins with a negative adverbial word such as 'Never', 'Seldom', 'Rarely', 'Scarcely', or 'Hardly', the subject and auxiliary verb MUST be inverted (Auxiliary Verb + Subject + Main Verb).\nTherefore, 'Never I have witnessed' is ungrammatical; it must be inverted to 'Never have I witnessed'.\n\nCorrect Sentence: 'Never have I witnessed such an extraordinary display of architectural grandeur in any ancient monument across Asia.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: जब कोई वाक्य 'Never', 'Seldom', 'Rarely' जैसे नकारात्मक क्रियाविशेषणों से शुरू होता है, तो Inversion का नियम लागू होता है (सहायक क्रिया कर्ता से पहले आती है)। अतः 'Never I have witnessed' के स्थान पर 'Never have I witnessed' का प्रयोग होगा।\n\nशुद्ध वाक्य: Never have I witnessed such an extraordinary display of architectural grandeur...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Inversion Rule: Sentence starting with NEVER -> Invert: 'Never HAVE I seen/witnessed' (Aux + Subject + V3).",
    "shortcut_text_hi": "Inversion नियम: वाक्य के शुरू में 'Never' आने पर सहायक क्रिया आगे लाएं: 'Never have I witnessed' सही है।"
  },
  {
    "question_number": 19,
    "practice_set": "SET D",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 4",
    "type_category": "Compound Modifiers: Numeral + Unit Adjectives",
    "type_category_hi": "संयुक्त विशेषण: संख्या + इकाई का एकवचन रूप",
    "question_text": "Identify the segment containing a grammatical error:\n\nEvery morning at dawn, / the retired major takes / a two-miles brisk walk / along the serene lake embankment.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nEvery morning at dawn, / the retired major takes / a two-miles brisk walk / along the serene lake embankment.",
    "options": {
      "a": "Every morning at dawn",
      "b": "the retired major takes",
      "c": "a two-miles brisk walk",
      "d": "along the serene lake embankment"
    },
    "options_hi": {
      "a": "Every morning at dawn",
      "b": "the retired major takes",
      "c": "a two-miles brisk walk",
      "d": "along the serene lake embankment"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When a measurement phrase acts as an adjective modifying a noun (here, modifying 'walk'), the unit noun must remain SINGULAR.\nTherefore, 'a two-miles brisk walk' must be corrected to 'a two-mile brisk walk'.\n(Note: If used as a predicate noun phrase, the plural is normal: 'The walk was two miles').\n\nCorrect Sentence: 'Every morning at dawn, the retired major takes a two-mile brisk walk along the serene lake embankment.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब कोई संख्या और दूरी की इकाई किसी संज्ञा ('walk') के विशेषण के रूप में कार्य करती है, तो वह इकाई सदैव एकवचन (Singular) में रहती है। अतः 'a two-miles walk' के स्थान पर 'a two-mile walk' का प्रयोग होगा।\n\nशुद्ध वाक्य: Every morning at dawn, the retired major takes a two-mile brisk walk along the serene lake...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Adjective Rule: 'a two-mile walk' (NOT two-miles). Modifier units are ALWAYS SINGULAR.",
    "shortcut_text_hi": "नियम: विशेषण के रूप में 'two-mile' होगा, 'two-miles' नहीं।"
  },
  {
    "question_number": 20,
    "practice_set": "SET D",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 5",
    "type_category": "Parallelism: Balanced Correlative Prepositional Phrases",
    "type_category_hi": "समानांतरता: संतुलित 'Not only... but also' संरचना",
    "question_text": "Select the segment in the sentence that contains a grammatical error, or select 'No error':\n\nThe corrupt official was accused / not only of embezzling state welfare funds / but also of forging / confidential procurement documents.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें, अथवा 'No error' चुनें:\n\nThe corrupt official was accused / not only of embezzling state welfare funds / but also of forging / confidential procurement documents / No error.",
    "options": {
      "a": "The corrupt official was accused",
      "b": "not only of embezzling state welfare funds",
      "c": "but also of forging",
      "d": "confidential procurement documents / No error"
    },
    "options_hi": {
      "a": "The corrupt official was accused",
      "b": "not only of embezzling state welfare funds",
      "c": "but also of forging",
      "d": "confidential procurement documents / No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: This sentence demonstrates perfect grammatical parallelism: 'not only [of + gerund phrase]' is balanced symmetrically by 'but also [of + gerund phrase]'. Both sides of the correlative conjunction mirror each other in preposition and verbal form.\nThere are no structural or grammatical flaws in the sentence. Therefore, there is NO ERROR.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: इस वाक्य में 'not only of embezzling...' और 'but also of forging...' दोनों तरफ Preposition ('of') और Gerund ('V-ing') का पूर्णतः संतुलित और समानांतर प्रयोग हुआ है। वाक्य व्याकरणिक दृष्टि से सर्वथा शुद्ध है। अतः कोई त्रुटि नहीं है (No error)।\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Parallelism Check: 'not only OF [V-ing] ... but also OF [V-ing]'. 100% Symmetrical balance = NO ERROR.",
    "shortcut_text_hi": "समानांतरता जांच: दोनों तरफ 'of + ing' का समान प्रयोग है। वाक्य पूर्णतः शुद्ध है (No error)।"
  },
  {
    "question_number": 21,
    "practice_set": "SET D",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 1",
    "type_category": "Mandative Subjunctive: 'Demanded that...' in Passive Construction",
    "type_category_hi": "Mandative Subjunctive: 'Demanded that' के साथ Base Form 'Be + V3'",
    "question_text": "The sentence below is split into four parts. Find the part with an error:\n\nThe disciplinary committee demanded / that the delinquent student / is expelled immediately / from the academic institution.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nThe disciplinary committee demanded / that the delinquent student / is expelled immediately / from the academic institution.",
    "options": {
      "a": "The disciplinary committee demanded",
      "b": "that the delinquent student",
      "c": "is expelled immediately",
      "d": "from the academic institution"
    },
    "options_hi": {
      "a": "The disciplinary committee demanded",
      "b": "that the delinquent student",
      "c": "is expelled immediately",
      "d": "from the academic institution"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: Verbs expressing demands, decrees, resolutions, or orders ('demand', 'insist', 'order', 'require', 'decree') followed by a 'that'-clause take the MANDATIVE SUBJUNCTIVE. In passive voice, the mandative subjunctive requires the base auxiliary 'BE' (not 'is', 'was', or 'are') followed by the past participle.\nTherefore, 'is expelled' must be replaced by the base subjunctive form 'be expelled' (or 'should be expelled').\n\nCorrect Sentence: 'The disciplinary committee demanded that the delinquent student be expelled immediately from the academic institution.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Demand', 'order', 'insist' जैसी क्रियाओं के बाद जब 'that'-clause आता है, तो Mandative Subjunctive के नियम से क्रिया हमेशा Base form में रहती है। Passive Voice में 'is/was' के स्थान पर 'BE + V3' ('be expelled') का प्रयोग अनिवार्य होता है।\nअतः 'is expelled' के स्थान पर 'be expelled' का प्रयोग होगा।\n\nशुद्ध वाक्य: The disciplinary committee demanded that the delinquent student be expelled immediately...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Mains Subjunctive: Demand / Order + that + Subject + BE + V3! 'is expelled' -> change to 'BE expelled'.",
    "shortcut_text_hi": "Mains नियम: Demand that के बाद Passive में हमेशा 'BE + V3' आता है। 'is expelled' गलत है -> 'be expelled' सही है।"
  },
  {
    "question_number": 22,
    "practice_set": "SET D",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 2",
    "type_category": "Dangling Participle: Illogical Subject with Driving Phrase",
    "type_category_hi": "असंगत कृदंत (Dangling Participle): असंगत कर्ता के साथ ड्राइविंग वाक्यांश",
    "question_text": "Identify the segment containing a grammatical error:\n\nWhile driving carefully through the dense alpine forest, / a massive fallen pine tree / blocked the narrow mountain pass / completely.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nWhile driving carefully through the dense alpine forest, / a massive fallen pine tree / blocked the narrow mountain pass / completely.",
    "options": {
      "a": "While driving carefully through the dense alpine forest",
      "b": "a massive fallen pine tree",
      "c": "blocked the narrow mountain pass",
      "d": "completely"
    },
    "options_hi": {
      "a": "While driving carefully through the dense alpine forest",
      "b": "a massive fallen pine tree",
      "c": "blocked the narrow mountain pass",
      "d": "completely"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: An introductory adverbial participial phrase ('While driving carefully...') must modify the subject of the main clause. As written, 'a massive fallen pine tree' is the subject of the main clause, which illogically implies that the pine tree was driving carefully through the forest!\nTo correct this dangling modifier, introduce a proper human subject: 'While we were driving carefully through the dense alpine forest, a massive fallen pine tree blocked...'.\n\nCorrect Sentence: 'While we were driving carefully through the dense alpine forest, a massive fallen pine tree blocked the narrow mountain pass completely.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: वाक्य में कृदंत पद 'While driving...' का कर्ता मुख्य उपवाक्य का कर्ता माना जाता है। यहाँ वाक्य का हास्यास्पद अर्थ निकलता है कि 'गिरा हुआ चीड़ का पेड़ गाड़ी चला रहा था'! इस Dangling Modifier दोष को ठीक करने के लिए वास्तविक कर्ता जोड़ें: 'While we were driving...'\n\nशुद्ध वाक्य: While we were driving carefully through the dense alpine forest, a massive fallen pine tree blocked...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Dangling Modifier Test: Was the tree driving? No! Error is in (a) -> fix: 'While WE were driving...'.",
    "shortcut_text_hi": "तर्क जांच: क्या पेड़ गाड़ी चला रहा था? नहीं! खंड (a) में Dangling Modifier की अशुद्धि है।"
  },
  {
    "question_number": 23,
    "practice_set": "SET D",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 3",
    "type_category": "Stative Verbs with Time Duration: Present Perfect Required",
    "type_category_hi": "Stative Verbs समय अवधि के साथ: Present Perfect की आवश्यकता",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nI am knowing the distinguished scientist / for more than fifteen years / since we were doctoral research scholars / at the premier institute.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nI am knowing the distinguished scientist / for more than fifteen years / since we were doctoral research scholars / at the premier institute.",
    "options": {
      "a": "I am knowing the distinguished scientist",
      "b": "for more than fifteen years",
      "c": "since we were doctoral research scholars",
      "d": "at the premier institute"
    },
    "options_hi": {
      "a": "I am knowing the distinguished scientist",
      "b": "for more than fifteen years",
      "c": "since we were doctoral research scholars",
      "d": "at the premier institute"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: 'Know' is a stative verb of cognition and can NEVER be used in the continuous/progressive tense ('am knowing' is ungrammatical). Furthermore, when expressing an action or state that has continued for a period of time up to the present ('for more than fifteen years'), stative verbs take the PRESENT PERFECT TENSE ('have known'), not the present tense.\nReplace 'I am knowing' with 'I have known'.\n\nCorrect Sentence: 'I have known the distinguished scientist for more than fifteen years since we were doctoral research scholars at the premier institute.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Know' (जानना) एक Stative Verb है जिसमें कभी '-ing' नहीं लगता ('am knowing' गलत है)। इसके अलावा, जब किसी अवधि ('for fifteen years') से जानने की बात हो, तो Present Perfect Tense ('have known') का प्रयोग होता है।\nअतः 'I am knowing' के स्थान पर 'I have known' का प्रयोग होगा।\n\nशुद्ध वाक्य: I have known the distinguished scientist for more than fifteen years since we were doctoral research scholars...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Stative Verb with Duration: 'KNOW' + 'For/Since' -> MUST BE 'HAVE KNOWN' (Never 'am knowing'!).",
    "shortcut_text_hi": "नियम: Know में '-ing' कभी नहीं लगता और समय अवधि (for 15 years) होने पर 'have known' आता है।"
  },
  {
    "question_number": 24,
    "practice_set": "SET D",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 4",
    "type_category": "Confusing Words: 'Allusion' (Reference) vs 'Illusion' (Deception)",
    "type_category_hi": "भ्रमित करने वाले शब्द: 'Allusion' (संकेत/संदर्भ) बनाम 'Illusion' (भ्रम)",
    "question_text": "Identify the segment that contains a grammatical error:\n\nDuring his keynote address, / the literary critic made an subtle illusion / to Shakespeare's tragic masterpieces / without naming them directly.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nDuring his keynote address, / the literary critic made an subtle illusion / to Shakespeare's tragic masterpieces / without naming them directly.",
    "options": {
      "a": "During his keynote address",
      "b": "the literary critic made an subtle illusion",
      "c": "to Shakespeare's tragic masterpieces",
      "d": "without naming them directly"
    },
    "options_hi": {
      "a": "During his keynote address",
      "b": "the literary critic made an subtle illusion",
      "c": "to Shakespeare's tragic masterpieces",
      "d": "without naming them directly"
    },
    "correct_option": "b",
    "solution_text": "Grammar & Vocabulary Rule: 'Allusion' means an indirect or passing reference to something ('made an allusion to Shakespeare'). 'Illusion' means a false impression, mirage, or deceptive perception ('an optical illusion').\nHere, the critic made an indirect reference to Shakespeare's plays, so the required noun is 'allusion'. (Additionally, before 'subtle', the article should be 'a subtle allusion').\nReplace 'an subtle illusion' with 'a subtle allusion'.\n\nCorrect Sentence: 'During his keynote address, the literary critic made a subtle allusion to Shakespeare's tragic masterpieces without naming them directly.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण व शब्द भेद: 'Allusion' का अर्थ अप्रत्यक्ष संकेत या संदर्भ (Reference) होता है, जबकि 'Illusion' का अर्थ 'भ्रम या दृष्टिभ्रम' (False impression) होता है। यहाँ वक्ता ने शेक्सपियर के नाटकों की ओर संकेत किया है, अतः 'illusion' के स्थान पर 'allusion' का प्रयोग होगा (तथा 'a subtle allusion' लिखा जाएगा)।\n\nशुद्ध वाक्य: During his keynote address, the literary critic made a subtle allusion to Shakespeare's tragic masterpieces...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Vocabulary Trap: Allusion = Indirect Reference. Illusion = False Perception / Mirage. Indirect reference -> ALLUSION.",
    "shortcut_text_hi": "शब्द भेद: Allusion = अप्रत्यक्ष संदर्भ। Illusion = भ्रम। शेक्सपियर का संदर्भ देने के लिए 'Allusion' सही है।"
  },
  {
    "question_number": 25,
    "practice_set": "SET D",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 5",
    "type_category": "Idiomatic Subject-Verb: 'More than one' Takes Singular Noun & Verb",
    "type_category_hi": "मुहावरेदार कर्ता-क्रिया: 'More than one' के साथ एकवचन संज्ञा और क्रिया",
    "question_text": "Select the segment that contains a grammatical error, or select 'No error':\n\nMore than one courageous firefighter / was injured in the devastating inferno / that engulfed the multistory industrial warehouse / last night.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें, अथवा 'No error' चुनें:\n\nMore than one courageous firefighter / was injured in the devastating inferno / that engulfed the multistory industrial warehouse / last night / No error.",
    "options": {
      "a": "More than one courageous firefighter",
      "b": "was injured in the devastating inferno",
      "c": "that engulfed the multistory industrial warehouse",
      "d": "last night / No error"
    },
    "options_hi": {
      "a": "More than one courageous firefighter",
      "b": "was injured in the devastating inferno",
      "c": "that engulfed the multistory industrial warehouse",
      "d": "last night / No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: The construction 'More than one' is followed by a SINGULAR countable noun ('firefighter') and strictly takes a SINGULAR verb ('was injured'), even though the semantic meaning implies multiple people.\n(Contrast: 'More firefighters than one were injured' takes a plural verb).\nBecause 'firefighter' is singular and 'was injured' is singular, this sentence is 100% grammatically correct. Therefore, there is NO ERROR.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: 'More than one' के बाद एकवचन संज्ञा ('firefighter') आती है और इसके साथ प्रयुक्त होने वाली क्रिया भी सदैव एकवचन (Singular verb -> 'was injured') होती है, भले ही इसका अर्थ एक से अधिक का हो।\nअतः 'was injured' का प्रयोग पूर्णतः शुद्ध है। इस वाक्य में कोई त्रुटि नहीं है (No error)।\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Rule of Form: 'MORE THAN ONE + Singular Noun + SINGULAR VERB'. 'More than one person WAS' is 100% correct -> NO ERROR.",
    "shortcut_text_hi": "नियम: 'More than one' के बाद संज्ञा और क्रिया दोनों एकवचन होती हैं -> 'was injured' शुद्ध है (No error)।"
  }
]
;

const SPOTTING_ERRORS_SET_E_QUESTIONS = [
  {
    "question_number": 1,
    "practice_set": "SET E",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: 'Neither... nor' Proximity Rule with Singular Subject",
    "type_category_hi": "कर्ता-क्रिया समझौता: 'Neither... nor' में निकटतम एकवचन कर्ता",
    "question_text": "In the sentence, identify the segment which contains a grammatical error:\n\nNeither the senior accounts manager / nor his executive assistant / were present in the conference hall / when the auditors arrived.",
    "question_text_hi": "दिए गए वाक्य में व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nNeither the senior accounts manager / nor his executive assistant / were present in the conference hall / when the auditors arrived.",
    "options": {
      "a": "Neither the senior accounts manager",
      "b": "nor his executive assistant",
      "c": "were present in the conference hall",
      "d": "when the auditors arrived"
    },
    "options_hi": {
      "a": "Neither the senior accounts manager",
      "b": "nor his executive assistant",
      "c": "were present in the conference hall",
      "d": "when the auditors arrived"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When two singular subjects are connected by 'neither... nor' or 'either... or', the verb must agree with the nearest subject (Subject 2). Here, Subject 2 following 'nor' is 'his executive assistant' (singular noun).\nTherefore, the plural verb 'were present' is incorrect; it must be replaced by the singular verb 'was present'.\n\nCorrect Sentence: 'Neither the senior accounts manager nor his executive assistant was present in the conference hall when the auditors arrived.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब दो कर्ता 'neither... nor' या 'either... or' से जुड़े हों, तो क्रिया हमेशा निकटतम कर्ता (Subject 2) के अनुसार आती है। यहाँ 'nor' के बाद आने वाला कर्ता 'his executive assistant' (एकवचन) है, अतः बहुवचन क्रिया 'were' के स्थान पर एकवचन 'was' का प्रयोग होगा।\n\nशुद्ध वाक्य: Neither the senior accounts manager nor his executive assistant was present in the conference hall...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Proximity Rule: 'nor' + Singular Subject (assistant) -> VERB MUST BE SINGULAR ('was present').",
    "shortcut_text_hi": "निकटता नियम: 'nor' के बाद एकवचन कर्ता ('assistant') है, अतः क्रिया 'was' होगी, 'were' गलत है।"
  },
  {
    "question_number": 2,
    "practice_set": "SET E",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 2",
    "type_category": "Superfluous Expressions: Redundant 'Back' with 'Return'",
    "type_category_hi": "अनावश्यक शब्द: 'Return' के साथ 'Back' का अनावश्यक प्रयोग",
    "question_text": "Select the segment that contains a grammatical error in the following sentence:\n\nShe has promised to return back / all the rare archival volumes / to the central library / before the weekend.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nShe has promised to return back / all the rare archival volumes / to the central library / before the weekend.",
    "options": {
      "a": "She has promised to return back",
      "b": "all the rare archival volumes",
      "c": "to the central library",
      "d": "before the weekend"
    },
    "options_hi": {
      "a": "She has promised to return back",
      "b": "all the rare archival volumes",
      "c": "to the central library",
      "d": "before the weekend"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: The verb 'return' already means 'to give back' or 'to come back'. Adding the adverb 'back' after 'return' creates a redundant, superfluous expression.\nSimilar redundant pairs tested in SSC: revert back (say 'revert'), repeat again (say 'repeat'), retreat back (say 'retreat'), recall back (say 'recall').\nRemove 'back' from 'return back'.\n\nCorrect Sentence: 'She has promised to return all the rare archival volumes to the central library before the weekend.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Return' का अर्थ ही 'वापस करना' या 'लौटना' होता है। अतः 'return' के साथ 'back' का प्रयोग पुनरुक्ति दोष (Superfluous error) है।\n'Return back' में से 'back' को हटा दें; केवल 'return' सही है। (इसी प्रकार revert back, repeat again भी गलत होते हैं)।\n\nशुद्ध वाक्य: She has promised to return all the rare archival volumes to the central library before the weekend.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Superfluous Alert: RETURN + BACK = WRONG! REVERT + BACK = WRONG! Use only 'Return' or 'Revert'.",
    "shortcut_text_hi": "पुनरुक्ति दोष: Return के साथ कभी 'Back' नहीं आता! केवल 'Return' लिखें।"
  },
  {
    "question_number": 3,
    "practice_set": "SET E",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 3",
    "type_category": "Prepositions: 'In' (Position) vs 'Into' (Motion into Depth)",
    "type_category_hi": "Preposition: 'In' (स्थिर अवस्था) बनाम 'Into' (गतिशील प्रवेश)",
    "question_text": "Identify the segment containing a grammatical error:\n\nWithout hesitating for a second, / the brave constable jumped in the turbulent river / to rescue the drowning schoolchild / from the strong current.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nWithout hesitating for a second, / the brave constable jumped in the turbulent river / to rescue the drowning schoolchild / from the strong current.",
    "options": {
      "a": "Without hesitating for a second",
      "b": "the brave constable jumped in the turbulent river",
      "c": "to rescue the drowning schoolchild",
      "d": "from the strong current"
    },
    "options_hi": {
      "a": "Without hesitating for a second",
      "b": "the brave constable jumped in the turbulent river",
      "c": "to rescue the drowning schoolchild",
      "d": "from the strong current"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'In' indicates a static position or state inside an area ('He is swimming in the river'). 'Into' denotes dynamic movement from outside towards the interior or depth ('He jumped into the river', 'He walked into the room').\nBecause jumping involves physical motion into the water, 'jumped in' must be replaced by 'jumped into'.\n\nCorrect Sentence: 'Without hesitating for a second, the brave constable jumped into the turbulent river to rescue the drowning schoolchild from the strong current.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'In' किसी स्थान के अंदर स्थिर स्थिति को दर्शाता है, जबकि 'Into' बाहर से अंदर की ओर गतिशीलता (Motion towards inside) को दर्शाता है। नदी में कूदने में गति (Movement) है, अतः 'jumped in' के स्थान पर 'jumped into' का प्रयोग होगा।\n\nशुद्ध वाक्य: Without hesitating for a second, the brave constable jumped into the turbulent river to rescue...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Preposition Rule: Motion from Outside to Inside -> USE 'INTO' (Jumped INTO the river/pool).",
    "shortcut_text_hi": "नियम: बाहर से अंदर गति होने पर 'INTO' आता है -> 'jumped into the river' सही है।"
  },
  {
    "question_number": 4,
    "practice_set": "SET E",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 4",
    "type_category": "Articles: Article 'A' with Consonant Glide Sound ('University')",
    "type_category_hi": "Article: व्यंजन ध्वनि ('University') से पहले 'A' का प्रयोग",
    "question_text": "The sentence below has been divided into four parts. Find the part with an error:\n\nDr. Sen is an university professor / who has authored several seminal treatises / on developmental economics / and public welfare policy.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nDr. Sen is an university professor / who has authored several seminal treatises / on developmental economics / and public welfare policy.",
    "options": {
      "a": "Dr. Sen is an university professor",
      "b": "who has authored several seminal treatises",
      "c": "on developmental economics",
      "d": "and public welfare policy"
    },
    "options_hi": {
      "a": "Dr. Sen is an university professor",
      "b": "who has authored several seminal treatises",
      "c": "on developmental economics",
      "d": "and public welfare policy"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: The choice between 'a' and 'an' depends on phonetic pronunciation. Words beginning with the letter 'u' pronounced with the palatal consonant glide /j/ (sound of 'yu' as in 'you') take the article 'A', NOT 'an'.\nTherefore, 'an university professor' is ungrammatical; it must be corrected to 'a university professor'.\nOther examples: a uniform, a union, a universal truth, a unicorn.\n\nCorrect Sentence: 'Dr. Sen is a university professor who has authored several seminal treatises on developmental economics and public welfare policy.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'University' शब्द यद्यपि 'U' (स्वर) से प्रारंभ होता है, परंतु इसका उच्चारण व्यंजन ध्वनि /य/ ('yu') से होता है। व्यंजन ध्वनि से प्रारंभ होने वाले शब्दों से पहले 'A' का प्रयोग होता है, 'An' का नहीं।\nअतः 'an university' के स्थान पर 'a university' का प्रयोग होगा।\n\nशुद्ध वाक्य: Dr. Sen is a university professor who has authored several seminal treatises...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Phonetic Trap: University starts with 'YU' (consonant sound) -> takes 'A UNIVERSITY' (Never 'an').",
    "shortcut_text_hi": "ध्वनि नियम: University का उच्चारण 'य' (व्यंजन) है, अतः इसके आगे हमेशा 'A' लगेगा, 'An' नहीं।"
  },
  {
    "question_number": 5,
    "practice_set": "SET E",
    "level": "Level 1: Moderate",
    "level_group": "Level 1: Moderate",
    "type_code": "Type 5",
    "type_category": "Nouns: Uncountable Noun 'Machinery' (No Plural Form)",
    "type_category_hi": "संज्ञा: अगणनीय संज्ञा 'Machinery' का अशुद्ध बहुवचन",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe industrial conglomerate has imported / modern automatic machineries / to automate the textile manufacturing unit / in Gujarat.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe industrial conglomerate has imported / modern automatic machineries / to automate the textile manufacturing unit / in Gujarat.",
    "options": {
      "a": "The industrial conglomerate has imported",
      "b": "modern automatic machineries",
      "c": "to automate the textile manufacturing unit",
      "d": "in Gujarat"
    },
    "options_hi": {
      "a": "The industrial conglomerate has imported",
      "b": "modern automatic machineries",
      "c": "to automate the textile manufacturing unit",
      "d": "in Gujarat"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: 'Machinery' is an uncountable aggregate noun meaning machines collectively. It does NOT have a plural form ('machineries' does not exist in standard English).\nReplace 'modern automatic machineries' with 'modern automatic machinery' or 'modern automatic machines'.\n\nCorrect Sentence: 'The industrial conglomerate has imported modern automatic machinery to automate the textile manufacturing unit in Gujarat.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'Machinery' (मशीनरी) एक अगणनीय संज्ञा (Uncountable noun) है। इसका बहुवचन 'machineries' नहीं होता।\nअतः 'machineries' के स्थान पर 'machinery' या 'machines' का प्रयोग होगा।\n\nशुद्ध वाक्य: The industrial conglomerate has imported modern automatic machinery to automate the textile manufacturing unit...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Nouns Checklist: Machinery, Stationary, Jewelry, Crockery -> NEVER ADD '-IES' or '-S'! 'Machinery' is strictly singular.",
    "shortcut_text_hi": "संज्ञा नियम: Machinery, Scenery, Stationary में कभी 'ies' या 's' नहीं लगता। 'machinery' सही है।"
  },
  {
    "question_number": 6,
    "practice_set": "SET E",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 1",
    "type_category": "Subject-Verb Agreement: Plural Noun of Distance/Quantity Taken as a Unit",
    "type_category_hi": "कर्ता-क्रिया समझौता: दूरी या मात्रा की संयुक्त इकाई के साथ एकवचन क्रिया",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nTen kilometers are / a formidable distance / to traverse entirely on foot / through dense jungle terrain.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nTen kilometers are / a formidable distance / to traverse entirely on foot / through dense jungle terrain.",
    "options": {
      "a": "Ten kilometers are",
      "b": "a formidable distance",
      "c": "to traverse entirely on foot",
      "d": "through dense jungle terrain"
    },
    "options_hi": {
      "a": "Ten kilometers are",
      "b": "a formidable distance",
      "c": "to traverse entirely on foot",
      "d": "through dense jungle terrain"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: When a plural noun of distance, time, weight, money, or measurement is considered as a SINGLE collective unit or quantity (evidenced by the singular complement 'a formidable distance'), it takes a SINGULAR verb.\nTherefore, 'Ten kilometers are' must be replaced by 'Ten kilometers is'.\nSimilar examples: Fifty thousand rupees is a large sum; Three hours is enough time.\n\nCorrect Sentence: 'Ten kilometers is a formidable distance to traverse entirely on foot through dense jungle terrain.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: जब दूरी, समय, धन या माप की बहुवचन संज्ञा को एक समग्र इकाई (Single collective unit) के रूप में लिया जाता है (जैसा कि 'a formidable distance' से स्पष्ट है), तो क्रिया सदैव एकवचन (Singular verb) होती है।\nअतः 'Ten kilometers are' के स्थान पर 'Ten kilometers is' का प्रयोग होगा।\n\nशुद्ध वाक्य: Ten kilometers is a formidable distance to traverse entirely on foot through dense jungle terrain.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Unit Measurement Rule: [Amount of Distance/Time/Money] + 'A/AN...' -> SINGULAR VERB! 'Ten kilometers IS a distance'.",
    "shortcut_text_hi": "माप इकाई नियम: दूरी जब एक इकाई (a distance) के रूप में हो तो क्रिया एकवचन ('IS') होगी, 'are' नहीं।"
  },
  {
    "question_number": 7,
    "practice_set": "SET E",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 2",
    "type_category": "Correlative Conjunctions: 'Scarcely had... when' (Not 'Than')",
    "type_category_hi": "सह-संबंधी संयोजक: 'Scarcely had... when' का शुद्ध युग्म",
    "question_text": "The sentence below has been divided into four parts. Find the part with an error:\n\nHe had scarcely / sat down on the sofa / than the front doorbell rang / incessantly.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nHe had scarcely / sat down on the sofa / than the front doorbell rang / incessantly.",
    "options": {
      "a": "He had scarcely",
      "b": "sat down on the sofa",
      "c": "than the front doorbell rang",
      "d": "incessantly"
    },
    "options_hi": {
      "a": "He had scarcely",
      "b": "sat down on the sofa",
      "c": "than the front doorbell rang",
      "d": "incessantly"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: The correlative conjunction 'Scarcely' must be paired with 'when' or 'before', NEVER with 'than'. 'Than' is used only with 'No sooner'.\nIn this sentence, replace 'than' with 'when'.\n\nCorrect Sentence: 'He had scarcely sat down on the sofa when the front doorbell rang incessantly.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Scarcely' और 'Hardly' का सह-संबंधी युग्म 'when' होता है, 'than' नहीं। 'Than' का प्रयोग केवल 'No sooner' के साथ होता है।\nअतः 'than' के स्थान पर 'when' का प्रयोग होगा।\n\nशुद्ध वाक्य: He had scarcely sat down on the sofa when the front doorbell rang incessantly.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Correlative Pair: Scarcely ... WHEN. Hardly ... WHEN. 'Scarcely... than' is an instant SSC error flag.",
    "shortcut_text_hi": "युग्म नियम: Scarcely के साथ 'when' आता है, 'than' नहीं। 'than' हटाकर 'when' लगाएं।"
  },
  {
    "question_number": 8,
    "practice_set": "SET E",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 3",
    "type_category": "Tenses: Past Time Markers Exclude Present Perfect",
    "type_category_hi": "काल: भूतकालिक समय सूचक के साथ Present Perfect का अशुद्ध प्रयोग",
    "question_text": "Identify the segment that contains a grammatical error:\n\nI have received your official communication / yesterday afternoon / detailing the revised terms / of the contractual agreement.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nI have received your official communication / yesterday afternoon / detailing the revised terms / of the contractual agreement.",
    "options": {
      "a": "I have received your official communication",
      "b": "yesterday afternoon",
      "c": "detailing the revised terms",
      "d": "of the contractual agreement"
    },
    "options_hi": {
      "a": "I have received your official communication",
      "b": "yesterday afternoon",
      "c": "detailing the revised terms",
      "d": "of the contractual agreement"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: When a sentence contains an explicit point of past time (such as 'yesterday', 'last night', 'in 2020', 'two days ago'), the SIMPLE PAST TENSE ('V2') must be used. The Present Perfect Tense ('have received') is strictly forbidden with past time adverbs.\nReplace 'I have received' with Simple Past 'I received'.\n\nCorrect Sentence: 'I received your official communication yesterday afternoon detailing the revised terms of the contractual agreement.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: जब वाक्य में भूतकाल का निश्चित समय (जैसे yesterday, last year, ago) दिया गया हो, तो वाक्य हमेशा Simple Past Tense ('V2') में होता है। ऐसे वाक्यों में Present Perfect ('have received') का प्रयोग पूर्णतः अशुद्ध होता है।\nअतः 'I have received' के स्थान पर 'I received' का प्रयोग होगा।\n\nशुद्ध वाक्य: I received your official communication yesterday afternoon detailing the revised terms...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Tense Rule: YESTERDAY / LAST / AGO -> MUST USE SIMPLE PAST (V2). Say 'I received yesterday' (NEVER 'have received').",
    "shortcut_text_hi": "काल नियम: वाक्य में 'yesterday' दिखे तो 'have/has' कभी नहीं आएगा! केवल V2 ('I received') आएगा।"
  },
  {
    "question_number": 9,
    "practice_set": "SET E",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 4",
    "type_category": "Adjectives: Comparison Between Two Entities Uses Comparative Degree",
    "type_category_hi": "विशेषण: दो के बीच तुलना में Comparative Degree ('The more') का प्रयोग",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nOf the two biological sisters, / Meera is undeniably / the most industrious / and articulate speaker.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nOf the two biological sisters, / Meera is undeniably / the most industrious / and articulate speaker.",
    "options": {
      "a": "Of the two biological sisters",
      "b": "Meera is undeniably",
      "c": "the most industrious",
      "d": "and articulate speaker"
    },
    "options_hi": {
      "a": "Of the two biological sisters",
      "b": "Meera is undeniably",
      "c": "the most industrious",
      "d": "and articulate speaker"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When comparing exactly TWO persons or things ('Of the two sisters'), the COMPARATIVE DEGREE with the definite article ('the more...') must be used, NOT the superlative degree ('the most...'). The superlative degree is reserved for comparison among three or more.\nReplace 'the most industrious' with 'the more industrious'.\n\nCorrect Sentence: 'Of the two biological sisters, Meera is undeniably the more industrious and articulate speaker.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: जब दो व्यक्तियों या वस्तुओं के बीच तुलना की जाती है ('Of the two...'), तो हमेशा Comparative Degree के साथ 'The' का प्रयोग होता है ('the more...'), Superlative Degree ('the most...') का नहीं। Superlative का प्रयोग तीन या अधिक के लिए होता है।\nअतः 'the most industrious' के स्थान पर 'the more industrious' का प्रयोग होगा।\n\nशुद्ध वाक्य: Of the two biological sisters, Meera is undeniably the more industrious and articulate speaker.\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Degree Rule: 'OF THE TWO ...' -> Use 'THE MORE' (Comparative degree with THE), NEVER 'the most'!",
    "shortcut_text_hi": "डिग्री नियम: 'Of the two' आने पर हमेशा 'THE MORE' (Comparative) आता है, 'the most' (Superlative) कभी नहीं।"
  },
  {
    "question_number": 10,
    "practice_set": "SET E",
    "level": "Level 2: More Than Moderate",
    "level_group": "Level 2: More Than Moderate",
    "type_code": "Type 5",
    "type_category": "Conditionals: Redundant Negation with 'Until'",
    "type_category_hi": "शर्त सूचक वाक्य: 'Until' के साथ नकारात्मक शब्द का दोहरा प्रयोग",
    "question_text": "Identify the segment containing an error:\n\nUntil you do not display / your biometric security token / at the access gate, / the turnstile will remain locked.",
    "question_text_hi": "त्रुटिपूर्ण भाग की पहचान करें:\n\nUntil you do not display / your biometric security token / at the access gate, / the turnstile will remain locked.",
    "options": {
      "a": "Until you do not display",
      "b": "your biometric security token",
      "c": "at the access gate",
      "d": "the turnstile will remain locked"
    },
    "options_hi": {
      "a": "Until you do not display",
      "b": "your biometric security token",
      "c": "at the access gate",
      "d": "the turnstile will remain locked"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: 'Until' is a time conjunction meaning 'up to the point in time when... not'. Because 'until' already carries negative force, adding 'not' or 'do not' in the until-clause creates an erroneous double negative.\nRemove 'do not' and write 'Until you display...'.\n\nCorrect Sentence: 'Until you display your biometric security token at the access gate, the turnstile will remain locked.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Until' (जब तक कि नहीं) स्वतः ही नकारात्मक अर्थ रखता है। अतः 'until' वाले उपवाक्य में 'not' या 'do not' का प्रयोग करना दोहरे नकारात्मक (Double negative) की अशुद्धि है।\n'Until you do not display' में से 'do not' हटा दें: 'Until you display' सही है।\n\nशुद्ध वाक्य: Until you display your biometric security token at the access gate, the turnstile will remain locked.\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Trap: 'Until' = ALREADY NEGATIVE! Never use 'not / do not' after until. 'Until you display' is correct.",
    "shortcut_text_hi": "ट्रिक: Until के साथ कभी 'not' या 'do not' नहीं आता। 'Until you display' सही है।"
  },
  {
    "question_number": 11,
    "practice_set": "SET E",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 1",
    "type_category": "PYQ Pattern: 'One of those... who' with Plural Verb",
    "type_category_hi": "PYQ पैटर्न: 'One of those employees who' के साथ बहुवचन क्रिया",
    "question_text": "The sentence below is split into four parts. Find the part with an error:\n\nRaman is one of those dedicated employees / who works late into the evening / to ensure the flawless execution / of mission-critical assignments.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nRaman is one of those dedicated employees / who works late into the evening / to ensure the flawless execution / of mission-critical assignments.",
    "options": {
      "a": "Raman is one of those dedicated employees",
      "b": "who works late into the evening",
      "c": "to ensure the flawless execution",
      "d": "of mission-critical assignments"
    },
    "options_hi": {
      "a": "Raman is one of those dedicated employees",
      "b": "who works late into the evening",
      "c": "to ensure the flawless execution",
      "d": "of mission-critical assignments"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When 'one of those + plural noun' is followed by the relative pronoun 'who', the antecedent of 'who' is 'employees' (plural). Therefore, the verb must be in the PLURAL form ('work'), NOT third-person singular ('works').\nReplace 'who works' with 'who work'.\n\nCorrect Sentence: 'Raman is one of those dedicated employees who work late into the evening to ensure the flawless execution of mission-critical assignments.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'One of those + बहुवचन संज्ञा' के बाद Relative Pronoun 'who' का पूर्ववर्ती 'employees' (बहुवचन) होता है। अतः 'who' के बाद आने वाली क्रिया बहुवचन ('work') होगी, 'works' नहीं।\n\nशुद्ध वाक्य: Raman is one of those dedicated employees who work late into the evening...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "PYQ Benchmark: 'One of those [PLURAL NOUN] who [PLURAL VERB]'. 'employees who WORK' (not works).",
    "shortcut_text_hi": "PYQ नियम: One of those + बहुवचन संज्ञा + who + बहुवचन क्रिया ('work')। 'works' गलत है।"
  },
  {
    "question_number": 12,
    "practice_set": "SET E",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 2",
    "type_category": "PYQ Pattern: Transitive Verb 'Discuss' Takes No Preposition",
    "type_category_hi": "PYQ पैटर्न: 'Discuss' के बाद 'About' का प्रयोग नहीं",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nThe diplomatic delegates discussed about / the bilateral trade agreement / for over four hours / before issuing a joint communique.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe diplomatic delegates discussed about / the bilateral trade agreement / for over four hours / before issuing a joint communique.",
    "options": {
      "a": "The diplomatic delegates discussed about",
      "b": "the bilateral trade agreement",
      "c": "for over four hours",
      "d": "before issuing a joint communique"
    },
    "options_hi": {
      "a": "The diplomatic delegates discussed about",
      "b": "the bilateral trade agreement",
      "c": "for over four hours",
      "d": "before issuing a joint communique"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: 'Discuss' is a transitive verb that takes an immediate direct object without any intervening preposition. Using 'discussed about' is a classic TCS preposition trap.\nRemove 'about' from 'discussed about'.\n\nCorrect Sentence: 'The diplomatic delegates discussed the bilateral trade agreement for over four hours before issuing a joint communique.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'Discuss' एक सकर्मक क्रिया है जिसके बाद सीधे कर्म (Object) आता है, Preposition 'about' नहीं। अतः 'discussed about' में से 'about' हटा दें।\n\nशुद्ध वाक्य: The diplomatic delegates discussed the bilateral trade agreement for over four hours...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Preposition Redundancy: DISCUSS + NO PREPOSITION! 'discussed about' -> 'discussed the treaty'.",
    "shortcut_text_hi": "नियम: Discuss के साथ कभी 'about' नहीं आता। 'discussed the agreement' सही है।"
  },
  {
    "question_number": 13,
    "practice_set": "SET E",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 3",
    "type_category": "PYQ Pattern: Question Tag for Suggestion ('Let us')",
    "type_category_hi": "PYQ पैटर्न: 'Let us' वाले प्रस्ताव का Question Tag ('Shall we?')",
    "question_text": "Identify the segment containing a grammatical error:\n\nLet us commemorate / this historic scientific achievement / with all our esteemed colleagues, / don't we?",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nLet us commemorate / this historic scientific achievement / with all our esteemed colleagues, / don't we?",
    "options": {
      "a": "Let us commemorate",
      "b": "this historic scientific achievement",
      "c": "with all our esteemed colleagues",
      "d": "don't we?"
    },
    "options_hi": {
      "a": "Let us commemorate",
      "b": "this historic scientific achievement",
      "c": "with all our esteemed colleagues",
      "d": "don't we?"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: An imperative sentence expressing a joint proposal or suggestion introduced by 'Let us' or 'Let's' ALWAYS takes the standard question tag 'shall we?'. It never takes 'don't we?', 'will you?', or 'aren't we?'.\nReplace 'don't we?' with 'shall we?'.\n\nCorrect Sentence: 'Let us commemorate this historic scientific achievement with all our esteemed colleagues, shall we?'\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: 'Let us' या 'Let's' से शुरू होने वाले प्रस्ताव या सुझाव का Question Tag सदैव 'shall we?' होता है। अतः 'don't we?' के स्थान पर 'shall we?' का प्रयोग होगा।\n\nशुद्ध वाक्य: Let us commemorate this historic scientific achievement with all our esteemed colleagues, shall we?\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Question Tag Formula: 'Let us ...' -> Tag is ALWAYS 'SHALL WE?'. Never 'don't we' or 'will you'.",
    "shortcut_text_hi": "टैग सूत्र: 'Let us' का Question Tag हमेशा 'shall we?' होता है। 'don't we' गलत है।"
  },
  {
    "question_number": 14,
    "practice_set": "SET E",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 4",
    "type_category": "PYQ Pattern: 'With a view to' Followed by Gerund",
    "type_category_hi": "PYQ पैटर्न: 'With a view to' के साथ Gerund (V-ing)",
    "question_text": "The sentence below has been divided into four parts. Find the part with an error:\n\nWith a view to enhance / his computational programming proficiency, / he registered for / an intensive six-month masterclass.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nWith a view to enhance / his computational programming proficiency, / he registered for / an intensive six-month masterclass.",
    "options": {
      "a": "With a view to enhance",
      "b": "his computational programming proficiency",
      "c": "he registered for",
      "d": "an intensive six-month masterclass"
    },
    "options_hi": {
      "a": "With a view to enhance",
      "b": "his computational programming proficiency",
      "c": "he registered for",
      "d": "an intensive six-month masterclass"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: In the idiom 'with a view to', 'to' is a preposition meaning 'for the purpose of'. Prepositions take a gerund ('V1 + ing'). Therefore, 'enhance' must be replaced by 'enhancing'.\n\nCorrect Sentence: 'With a view to enhancing his computational programming proficiency, he registered for an intensive six-month masterclass.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: 'With a view to' में 'to' Preposition होता है जिसके बाद हमेशा Gerund ('V-ing') आता है। अतः 'with a view to enhance' के स्थान पर 'with a view to enhancing' का प्रयोग होगा।\n\nशुद्ध वाक्य: With a view to enhancing his computational programming proficiency, he registered for...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Rule: 'With a view to + V-ING'. Write 'with a view to enhancing' (not enhance).",
    "shortcut_text_hi": "नियम: 'With a view to' के बाद हमेशा 'V-ing' आता है। 'to enhancing' सही है।"
  },
  {
    "question_number": 15,
    "practice_set": "SET E",
    "level": "Level 3: Inspired from PYQs",
    "level_group": "Level 3: Inspired from PYQs",
    "type_code": "Type 5",
    "type_category": "PYQ Pattern: Book Titles Ending in '-s' Take Singular Verb",
    "type_category_hi": "PYQ पैटर्न: '-s' पर समाप्त होने वाले पुस्तक के नाम के साथ एकवचन क्रिया",
    "question_text": "Select the segment in the sentence that has a grammatical error:\n\nGulliver's Travels are / an immortal satirical work / written by Jonathan Swift / in the early eighteenth century.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nGulliver's Travels are / an immortal satirical work / written by Jonathan Swift / in the early eighteenth century.",
    "options": {
      "a": "Gulliver's Travels are",
      "b": "an immortal satirical work",
      "c": "written by Jonathan Swift",
      "d": "in the early eighteenth century"
    },
    "options_hi": {
      "a": "Gulliver's Travels are",
      "b": "an immortal satirical work",
      "c": "written by Jonathan Swift",
      "d": "in the early eighteenth century"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: Even though the title of a book, novel, film, or play ends in the plural suffix '-s' (such as 'Gulliver's Travels', 'The Arabian Nights', 'Hard Times', 'Three Musketeers'), it designates a SINGLE literary work and must take a SINGULAR verb.\nTherefore, 'are' must be replaced by 'is'.\n\nCorrect Sentence: 'Gulliver's Travels is an immortal satirical work written by Jonathan Swift in the early eighteenth century.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: यद्यपि किसी पुस्तक, उपन्यास या नाटक का नाम '-s' पर समाप्त होता है (जैसे Gulliver's Travels, The Arabian Nights), लेकिन वह एक ही रचना को दर्शाता है। अतः उसके साथ सदैव एकवचन क्रिया (Singular verb) 'is' का प्रयोग होता है, 'are' का नहीं।\n\nशुद्ध वाक्य: Gulliver's Travels is an immortal satirical work written by Jonathan Swift...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Title Rule: Title of a Book / Movie = SINGULAR VERB! 'Gulliver's Travels IS' (never 'are').",
    "shortcut_text_hi": "शीर्षक नियम: पुस्तक का नाम दिखने में बहुवचन लगे तो भी क्रिया एकवचन ('IS') होगी।"
  },
  {
    "question_number": 16,
    "practice_set": "SET E",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 1",
    "type_category": "Advanced Subject-Verb: Singular Abstract Head Noun with Modifiers",
    "type_category_hi": "उन्नत कर्ता-क्रिया समझौता: पूरक वाक्यांशों के साथ एकवचन मुख्य संज्ञा",
    "question_text": "Identify the segment that contains a grammatical error:\n\nThe practical knowledge of multiple programming languages, / in addition to foundational algorithmic understanding, / are essential for clearing / the technical interview rounds.",
    "question_text_hi": "वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe practical knowledge of multiple programming languages, / in addition to foundational algorithmic understanding, / are essential for clearing / the technical interview rounds.",
    "options": {
      "a": "The practical knowledge of multiple programming languages",
      "b": "in addition to foundational algorithmic understanding",
      "c": "are essential for clearing",
      "d": "the technical interview rounds"
    },
    "options_hi": {
      "a": "The practical knowledge of multiple programming languages",
      "b": "in addition to foundational algorithmic understanding",
      "c": "are essential for clearing",
      "d": "the technical interview rounds"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: The grammatical subject of the sentence is the singular uncountable noun 'The practical knowledge'. Intervening parenthetical prepositional phrases ('of multiple programming languages, in addition to foundational algorithmic understanding') do not alter the number of the head subject.\nTherefore, the plural verb 'are essential' must be replaced by the singular verb 'is essential'.\n\nCorrect Sentence: 'The practical knowledge of multiple programming languages, in addition to foundational algorithmic understanding, is essential for clearing the technical interview rounds.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: मुख्य कर्ता (Head noun) 'The practical knowledge' (एकवचन) है। बीच में आने वाले वाक्यांशों (languages, understanding) से क्रिया पर कोई प्रभाव नहीं पड़ता। अतः 'are essential' के स्थान पर एकवचन क्रिया 'is essential' का प्रयोग होगा।\n\nशुद्ध वाक्य: The practical knowledge of multiple programming languages... is essential for clearing...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Head Noun Isolation: 'The knowledge [of languages...] IS essential' (Singular subject -> 'is').",
    "shortcut_text_hi": "मुख्य कर्ता जांच: क्या आवश्यक है? 'Knowledge' (एकवचन) -> क्रिया 'is' होगी।"
  },
  {
    "question_number": 17,
    "practice_set": "SET E",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 2",
    "type_category": "Conditionals: Third Conditional Main Clause Verb Form",
    "type_category_hi": "शर्त सूचक वाक्य: तृतीय शर्त के मुख्य उपवाक्य में 'Would have + V3'",
    "question_text": "The sentence below has been split into four parts. Find the part with an error:\n\nIf the brilliant scholar had studied / with single-minded devotion throughout the year, / he would pass the competitive examination / with flying colors.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nIf the brilliant scholar had studied / with single-minded devotion throughout the year, / he would pass the competitive examination / with flying colors.",
    "options": {
      "a": "If the brilliant scholar had studied",
      "b": "with single-minded devotion throughout the year",
      "c": "he would pass the competitive examination",
      "d": "with flying colors"
    },
    "options_hi": {
      "a": "If the brilliant scholar had studied",
      "b": "with single-minded devotion throughout the year",
      "c": "he would pass the competitive examination",
      "d": "with flying colors"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: In a Third Conditional (Past Unreal Condition), when the 'if'-clause contains 'had + V3' ('had studied'), the main clause MUST contain 'would have + V3'.\nUsing 'would pass' (Type-2 conditional) alongside 'had studied' is a tense mismatch error. Replace 'he would pass' with 'he would have passed'.\n\nCorrect Sentence: 'If the brilliant scholar had studied with single-minded devotion throughout the year, he would have passed the competitive examination with flying colors.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: तृतीय शर्त (Type 3 Conditional) में If-clause में Past Perfect ('had studied') होने पर Main clause में 'would have + V3' का प्रयोग अनिवार्य होता है। अतः 'he would pass' के स्थान पर 'he would have passed' का प्रयोग होगा।\n\nशुद्ध वाक्य: If the brilliant scholar had studied with single-minded devotion throughout the year, he would have passed...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Conditional Match: IF + HAD + V3 ---> WOULD HAVE + V3. 'would pass' -> change to 'would have passed'.",
    "shortcut_text_hi": "शर्त नियम: If + had + V3 के साथ हमेशा 'would have + V3' आता है। 'would pass' गलत है।"
  },
  {
    "question_number": 18,
    "practice_set": "SET E",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 3",
    "type_category": "Inversion: Negative Prepositional Phrase 'Under no circumstances'",
    "type_category_hi": "Inversion: नकारात्मक वाक्यांश 'Under no circumstances' के बाद Inversion",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nUnder no circumstances / we can permit unauthorized visitors / to access the classified research facility / after official working hours.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nUnder no circumstances / we can permit unauthorized visitors / to access the classified research facility / after official working hours.",
    "options": {
      "a": "Under no circumstances",
      "b": "we can permit unauthorized visitors",
      "c": "to access the classified research facility",
      "d": "after official working hours"
    },
    "options_hi": {
      "a": "Under no circumstances",
      "b": "we can permit unauthorized visitors",
      "c": "to access the classified research facility",
      "d": "after official working hours"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When a sentence begins with a restrictive or negative prepositional phrase such as 'Under no circumstances', 'On no account', 'In no way', or 'At no time', the following clause MUST undergo INVERSION (Modal/Auxiliary Verb + Subject + Main Verb).\nTherefore, 'we can permit' must be inverted to 'can we permit'.\n\nCorrect Sentence: 'Under no circumstances can we permit unauthorized visitors to access the classified research facility after official working hours.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब कोई वाक्य 'Under no circumstances', 'On no account' जैसे नकारात्मक वाक्यांशों से शुरू होता है, तो Inversion का नियम लागू होता है (सहायक क्रिया कर्ता से पहले आती है)। अतः 'we can permit' के स्थान पर 'can we permit' का प्रयोग होगा।\n\nशुद्ध वाक्य: Under no circumstances can we permit unauthorized visitors to access the classified research facility...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Inversion Rule: 'Under no circumstances + CAN WE' (Modal + Subject). Never use straight word order.",
    "shortcut_text_hi": "Inversion नियम: 'Under no circumstances' के तुरंत बाद सहायक क्रिया आगे आएगी -> 'can we permit' सही है।"
  },
  {
    "question_number": 19,
    "practice_set": "SET E",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 4",
    "type_category": "Compound Modifiers: Numeral + Noun Adjectives",
    "type_category_hi": "संयुक्त विशेषण: संख्यात्मक संज्ञा विशेषण का एकवचन रूप",
    "question_text": "Identify the segment containing a grammatical error:\n\nThe research committee submitted / a ten-pages comprehensive report / outlining recommendations / for revamping higher education.",
    "question_text_hi": "व्याकरण संबंधी त्रुटि वाले भाग की पहचान करें:\n\nThe research committee submitted / a ten-pages comprehensive report / outlining recommendations / for revamping higher education.",
    "options": {
      "a": "The research committee submitted",
      "b": "a ten-pages comprehensive report",
      "c": "outlining recommendations",
      "d": "for revamping higher education"
    },
    "options_hi": {
      "a": "The research committee submitted",
      "b": "a ten-pages comprehensive report",
      "c": "outlining recommendations",
      "d": "for revamping higher education"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When a noun is used as part of a compound adjective before another noun (here, modifying 'report'), it must be in the SINGULAR form ('ten-page', not 'ten-pages').\nReplace 'a ten-pages comprehensive report' with 'a ten-page comprehensive report'.\n\nCorrect Sentence: 'The research committee submitted a ten-page comprehensive report outlining recommendations for revamping higher education.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब कोई संख्या और संज्ञा मिलकर किसी अन्य संज्ञा ('report') की विशेषता बताते हैं, तो वह संज्ञा विशेषण के रूप में हमेशा एकवचन (Singular) होती है। अतः 'ten-pages' के स्थान पर 'ten-page' का प्रयोग होगा।\n\nशुद्ध वाक्य: The research committee submitted a ten-page comprehensive report outlining recommendations...\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Modifier Rule: 'a ten-page report' (NOT ten-pages). Modifying nouns NEVER take plural '-s'.",
    "shortcut_text_hi": "नियम: विशेषण के रूप में 'ten-page' होगा, 'ten-pages' नहीं।"
  },
  {
    "question_number": 20,
    "practice_set": "SET E",
    "level": "Level 4: PYQ+",
    "level_group": "Level 4: PYQ+",
    "type_code": "Type 5",
    "type_category": "Parallelism: Balanced Prepositional Phrases with 'Both... and'",
    "type_category_hi": "समानांतरता: 'Both... and' के साथ संतुलित Prepositional वाक्यांश",
    "question_text": "Select the segment in the sentence that contains a grammatical error, or select 'No error':\n\nThe dedicated scholar excels / both in academic research / and in community outreach programmes / across the regional district.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें, अथवा 'No error' चुनें:\n\nThe dedicated scholar excels / both in academic research / and in community outreach programmes / across the regional district / No error.",
    "options": {
      "a": "The dedicated scholar excels",
      "b": "both in academic research",
      "c": "and in community outreach programmes",
      "d": "across the regional district / No error"
    },
    "options_hi": {
      "a": "The dedicated scholar excels",
      "b": "both in academic research",
      "c": "and in community outreach programmes",
      "d": "across the regional district / No error"
    },
    "correct_option": "d",
    "solution_text": "Grammar Rule: The correlative conjunction 'Both... and' coordinates two prepositional phrases of identical grammatical form: 'both [in academic research]' and 'and [in community outreach programmes]'.\nThe syntax, parallelism, verb agreement, and preposition usage are completely flawless. Therefore, there is NO ERROR.\n\nCorrect Answer: Option (d).",
    "solution_text_hi": "व्याकरण नियम: इस वाक्य में 'both in academic research' और 'and in community outreach programmes' दोनों तरफ समान Prepositional वाक्यांशों का संतुलित और समानांतर प्रयोग हुआ है। वाक्य में कोई व्याकरण संबंधी दोष नहीं है। अतः यह पूर्णतः शुद्ध है (No error)।\n\nअतः सही उत्तर (d) है।",
    "shortcut_text": "Parallelism Symmetry: 'both IN [Noun] ... and IN [Noun]'. Perfectly parallel = NO ERROR.",
    "shortcut_text_hi": "समानांतरता जांच: दोनों तरफ 'in + संज्ञा' का संतुलित प्रयोग है। वाक्य शुद्ध है (No error)।"
  },
  {
    "question_number": 21,
    "practice_set": "SET E",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 1",
    "type_category": "Subjunctive Mood: 'It is high time' + Simple Past (V2)",
    "type_category_hi": "Subjunctive Mood: 'It is high time' के साथ भूतकाल (V2)",
    "question_text": "The sentence below has been split into four parts. Find the part with an error:\n\nIt is high time / the elected government revises / the antiquated labour legislation / to protect contractual gig workers.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का पता लगाएं:\n\nIt is high time / the elected government revises / the antiquated labour legislation / to protect contractual gig workers.",
    "options": {
      "a": "It is high time",
      "b": "the elected government revises",
      "c": "the antiquated labour legislation",
      "d": "to protect contractual gig workers"
    },
    "options_hi": {
      "a": "It is high time",
      "b": "the elected government revises",
      "c": "the antiquated labour legislation",
      "d": "to protect contractual gig workers"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: When 'It is high time' is followed by a subject clause ('the elected government'), the verb must be in the PAST SUBJUNCTIVE (Simple Past - V2), indicating that this action should have occurred previously and is now overdue.\nTherefore, the present tense 'revises' must be replaced by the past form 'revised'.\n\nCorrect Sentence: 'It is high time the elected government revised the antiquated labour legislation to protect contractual gig workers.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: 'It is high time' के बाद जब कर्ता ('the elected government') आता है, तो क्रिया Simple Past (V2) में होती है। अतः 'revises' के स्थान पर 'revised' का प्रयोग होगा।\n\nशुद्ध वाक्य: It is high time the elected government revised the antiquated labour legislation to protect contractual gig workers.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Tier-2 Golden Rule: 'It is high time + Subject + V2'. 'revises' -> change to 'revised'.",
    "shortcut_text_hi": "गोल्डन नियम: 'It is high time + कर्ता' के बाद क्रिया V2 (भूतकाल) में आती है। 'revises' को 'revised' में बदलें।"
  },
  {
    "question_number": 22,
    "practice_set": "SET E",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 2",
    "type_category": "Dangling Participle: Injured Athlete Modifier",
    "type_category_hi": "असंगत कृदंत (Dangling Participle): चोटिल खिलाड़ी का असंगत विशेषण",
    "question_text": "Identify the segment containing a grammatical error:\n\nBeing severely injured in the left hamstring, / the championship match was conceded / by the defending tennis champion / midway through the second set.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nBeing severely injured in the left hamstring, / the championship match was conceded / by the defending tennis champion / midway through the second set.",
    "options": {
      "a": "Being severely injured in the left hamstring",
      "b": "the championship match was conceded",
      "c": "by the defending tennis champion",
      "d": "midway through the second set"
    },
    "options_hi": {
      "a": "Being severely injured in the left hamstring",
      "b": "the championship match was conceded",
      "c": "by the defending tennis champion",
      "d": "midway through the second set"
    },
    "correct_option": "a",
    "solution_text": "Grammar Rule: An introductory participial modifier must modify the subject of the clause that immediately follows. As phrased, 'the championship match' is the subject of the main clause, which illogically suggests that the match itself was injured in the left hamstring!\nTo correct this dangling modifier, rewrite the sentence so the true agent ('the defending tennis champion') is the subject: 'Being severely injured in the left hamstring, the defending tennis champion conceded the championship match...'.\n\nCorrect Sentence: 'Being severely injured in the left hamstring, the defending tennis champion conceded the championship match midway through the second set.'\n\nCorrect Answer: Option (a).",
    "solution_text_hi": "व्याकरण नियम: कृदंत वाक्यांश 'Being severely injured...' का कर्ता मुख्य उपवाक्य का कर्ता होना चाहिए। यहाँ वाक्य का अर्थ निकलता है कि 'मैच की हैमस्ट्रिंग में चोट लग गई थी'! इस Dangling Modifier दोष को दूर करने के लिए खिलाड़ी को मुख्य कर्ता बनाएं: 'the defending tennis champion conceded the match...'\n\nशुद्ध वाक्य: Being severely injured in the left hamstring, the defending tennis champion conceded the championship match...\n\nअतः सही उत्तर (a) है।",
    "shortcut_text": "Modifier Check: Was the match injured? No! The champion was injured. Dangling modifier in (a).",
    "shortcut_text_hi": "तर्क जांच: चोट मैच को नहीं, खिलाड़ी को लगी थी! खंड (a) में Dangling Participle की अशुद्धि है।"
  },
  {
    "question_number": 23,
    "practice_set": "SET E",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 3",
    "type_category": "Stative Verbs of Sensation: 'Smell' in Continuous Aspect",
    "type_category_hi": "Stative Verbs of Sensation: 'Smell' का Continuous Tense में अशुद्ध प्रयोग",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nThis chemical compound / is smelling strange / and emitting dense smoke / inside the laboratory test tube.",
    "question_text_hi": "दिए गए वाक्य में त्रुटिपूर्ण भाग का चयन करें:\n\nThis chemical compound / is smelling strange / and emitting dense smoke / inside the laboratory test tube.",
    "options": {
      "a": "This chemical compound",
      "b": "is smelling strange",
      "c": "and emitting dense smoke",
      "d": "inside the laboratory test tube"
    },
    "options_hi": {
      "a": "This chemical compound",
      "b": "is smelling strange",
      "c": "and emitting dense smoke",
      "d": "inside the laboratory test tube"
    },
    "correct_option": "b",
    "solution_text": "Grammar Rule: Verbs of involuntary sensory perception (such as 'smell', 'taste', 'feel', 'hear', 'see') when describing an intrinsic property of an object are STATIVE VERBS and do NOT take the continuous tense.\n(Note: 'Smelling' is used only when an agent actively sniffs something, e.g., 'He is smelling the rose').\nWhen an object gives off an odour, use Simple Present: 'smells strange', NOT 'is smelling strange'.\n\nCorrect Sentence: 'This chemical compound smells strange and is emitting dense smoke inside the laboratory test tube.'\n\nCorrect Answer: Option (b).",
    "solution_text_hi": "व्याकरण नियम: जब 'Smell' (महकना), 'Taste' (स्वाद होना) किसी वस्तु के स्वाभाविक गुण को दर्शाते हैं, तो ये Stative Verbs होती हैं और इनका प्रयोग Continuous Tense में नहीं किया जाता।\nअतः 'is smelling strange' के स्थान पर 'smells strange' का प्रयोग होगा।\n\nशुद्ध वाक्य: This chemical compound smells strange and is emitting dense smoke inside the laboratory test tube.\n\nअतः सही उत्तर (b) है।",
    "shortcut_text": "Stative Verb Alert: An object 'SMELLS sweet/strange', it is NEVER 'is smelling'. Use Simple Present.",
    "shortcut_text_hi": "Stative Verb नियम: वस्तु की गंध के लिए हमेशा 'smells strange' आता है, 'is smelling' नहीं।"
  },
  {
    "question_number": 24,
    "practice_set": "SET E",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 4",
    "type_category": "Confusing Words: 'Eminent' (Famous) vs 'Imminent' (Impending)",
    "type_category_hi": "भ्रमित करने वाले शब्द: 'Eminent' (प्रसिद्ध) बनाम 'Imminent' (आसन्न/शीघ्र होने वाला)",
    "question_text": "Identify the segment that contains a grammatical error:\n\nThe weather bureau warned / that the catastrophic cyclone / was eminent and likely to make landfall / within the next twelve hours.",
    "question_text_hi": "वाक्य में उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nThe weather bureau warned / that the catastrophic cyclone / was eminent and likely to make landfall / within the next twelve hours.",
    "options": {
      "a": "The weather bureau warned",
      "b": "that the catastrophic cyclone",
      "c": "was eminent and likely to make landfall",
      "d": "within the next twelve hours"
    },
    "options_hi": {
      "a": "The weather bureau warned",
      "b": "that the catastrophic cyclone",
      "c": "was eminent and likely to make landfall",
      "d": "within the next twelve hours"
    },
    "correct_option": "c",
    "solution_text": "Grammar & Vocabulary Rule: 'Eminent' means distinguished, prominent, famous, or renowned (e.g., 'an eminent jurist'). In contrast, 'Imminent' means about to happen very soon, impending, or looming (e.g., 'imminent danger', 'imminent landfall').\nBecause the cyclone was about to strike imminently, the required adjective is 'imminent', NOT 'eminent'.\nReplace 'was eminent' with 'was imminent'.\n\nCorrect Sentence: 'The weather bureau warned that the catastrophic cyclone was imminent and likely to make landfall within the next twelve hours.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण व शब्द भेद: 'Eminent' का अर्थ विख्यात, प्रसिद्ध या प्रतिष्ठित (Famous) होता है, जबकि 'Imminent' का अर्थ शीघ्र घटित होने वाला या आसन्न (Impending / about to happen) होता है। चक्रवात आने वाला था, अतः 'eminent' के स्थान पर 'imminent' का प्रयोग होगा।\n\nशुद्ध वाक्य: The weather bureau warned that the catastrophic cyclone was imminent and likely to make landfall...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Vocabulary Trap: EmInent = PromInent / Famous. ImmInent = ImpendIng / About to happen. Cyclone -> IMMINENT.",
    "shortcut_text_hi": "शब्द भेद: Eminent = प्रसिद्ध व्यक्ति। Imminent = शीघ्र होने वाली घटना (आसन्न संकट)। 'Imminent' सही है।"
  },
  {
    "question_number": 25,
    "practice_set": "SET E",
    "level": "Level 5: PYQ++",
    "level_group": "Level 5: PYQ++",
    "type_code": "Type 5",
    "type_category": "Proximity Agreement with Compound Subjects in 'Neither... nor'",
    "type_category_hi": "निकटता नियम: 'Neither... nor' में निकटतम बहुवचन कर्ता के साथ बहुवचन क्रिया",
    "question_text": "Select the segment in the sentence that contains a grammatical error:\n\nNeither the department minister / nor any of his senior administrative secretaries / was willing to accept responsibility / for the catastrophic regulatory failure.",
    "question_text_hi": "वाक्य में उस भाग का चयन करें जिसमें व्याकरण संबंधी त्रुटि है:\n\nNeither the department minister / nor any of his senior administrative secretaries / was willing to accept responsibility / for the catastrophic regulatory failure.",
    "options": {
      "a": "Neither the department minister",
      "b": "nor any of his senior administrative secretaries",
      "c": "was willing to accept responsibility",
      "d": "for the catastrophic regulatory failure"
    },
    "options_hi": {
      "a": "Neither the department minister",
      "b": "nor any of his senior administrative secretaries",
      "c": "was willing to accept responsibility",
      "d": "for the catastrophic regulatory failure"
    },
    "correct_option": "c",
    "solution_text": "Grammar Rule: When two subjects are connected by 'neither... nor', the verb must agree with the subject closest to it (Subject 2). Here, Subject 2 following 'nor' is 'any of his senior administrative secretaries' (plural noun).\nTherefore, the verb must be in the PLURAL form 'were willing to accept', NOT the singular 'was willing to accept'.\n\nCorrect Sentence: 'Neither the department minister nor any of his senior administrative secretaries were willing to accept responsibility for the catastrophic regulatory failure.'\n\nCorrect Answer: Option (c).",
    "solution_text_hi": "व्याकरण नियम: 'Neither... nor' में मुख्य क्रिया हमेशा दूसरे/निकटतम कर्ता (Subject 2) के अनुसार आती है। यहाँ 'nor' के बाद आने वाला दूसरा कर्ता 'secretaries' (बहुवचन) है। अतः एकवचन क्रिया 'was' के स्थान पर बहुवचन क्रिया 'were' का प्रयोग होगा: 'were willing to accept'।\n\nशुद्ध वाक्य: Neither the department minister nor any of his senior administrative secretaries were willing to accept responsibility...\n\nअतः सही उत्तर (c) है।",
    "shortcut_text": "Tier-2 Proximity Rule: S1 (minister) + nor + S2 (secretaries - PLURAL) -> Verb MUST BE PLURAL ('WERE willing').",
    "shortcut_text_hi": "निकटता नियम: 'nor' के बाद 'secretaries' (बहुवचन) है, अतः क्रिया 'were willing' होगी, 'was' गलत है।"
  }
]
;

if (typeof window !== "undefined") {
  window.SPOTTING_ERRORS_SET_A_QUESTIONS = SPOTTING_ERRORS_SET_A_QUESTIONS;
  window.SPOTTING_ERRORS_SET_B_QUESTIONS = SPOTTING_ERRORS_SET_B_QUESTIONS;
  window.SPOTTING_ERRORS_SET_C_QUESTIONS = SPOTTING_ERRORS_SET_C_QUESTIONS;
  window.SPOTTING_ERRORS_SET_D_QUESTIONS = SPOTTING_ERRORS_SET_D_QUESTIONS;
  window.SPOTTING_ERRORS_SET_E_QUESTIONS = SPOTTING_ERRORS_SET_E_QUESTIONS;
  window.SPOTTING_ERRORS_PRACTICE_1_QUESTIONS = SPOTTING_ERRORS_SET_A_QUESTIONS;
  window.SPOTTING_ERRORS_PRACTICE_2_QUESTIONS = SPOTTING_ERRORS_SET_B_QUESTIONS;
  window.SPOTTING_ERRORS_PRACTICE_3_QUESTIONS = SPOTTING_ERRORS_SET_C_QUESTIONS;
  window.SPOTTING_ERRORS_PRACTICE_4_QUESTIONS = SPOTTING_ERRORS_SET_D_QUESTIONS;
  window.SPOTTING_ERRORS_PRACTICE_5_QUESTIONS = SPOTTING_ERRORS_SET_E_QUESTIONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SPOTTING_ERRORS_SET_A_QUESTIONS,
    SPOTTING_ERRORS_SET_B_QUESTIONS,
    SPOTTING_ERRORS_SET_C_QUESTIONS,
    SPOTTING_ERRORS_SET_D_QUESTIONS,
    SPOTTING_ERRORS_SET_E_QUESTIONS,
    SPOTTING_ERRORS_PRACTICE_1_QUESTIONS: SPOTTING_ERRORS_SET_A_QUESTIONS,
    SPOTTING_ERRORS_PRACTICE_2_QUESTIONS: SPOTTING_ERRORS_SET_B_QUESTIONS,
    SPOTTING_ERRORS_PRACTICE_3_QUESTIONS: SPOTTING_ERRORS_SET_C_QUESTIONS,
    SPOTTING_ERRORS_PRACTICE_4_QUESTIONS: SPOTTING_ERRORS_SET_D_QUESTIONS,
    SPOTTING_ERRORS_PRACTICE_5_QUESTIONS: SPOTTING_ERRORS_SET_E_QUESTIONS,
  };
}
