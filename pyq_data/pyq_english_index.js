/**
 * SSC General English 25K+ (Chapter-wise & Subtopic-wise PYQ Bank)
 * Master Book Index & Metadata
 * Total Book Pages: 913 | Total Claimed Questions: 25,000+
 */

const YCT_ENGLISH_INDEX = {
  book_title: "SSC General English 25K+ Chapter-Wise & SubTopic-Wise PYQ Bank",
  publisher: "SSC PYQ Bank",
  edition: "2024-25 Exam Pattern",
  total_pages: 913,
  total_questions_claimed: 25000,
  covered_exams: [
    { code: "CGL", name: "SSC CGL (Tier-1 & Tier-2)", years: "2018–2024", badge: "Graduation" },
    { code: "CHSL", name: "SSC CHSL (Tier-1 & Tier-2)", years: "2019–2024", badge: "10+2" },
    { code: "CPO", name: "SSC CPO SI (Paper-1 & Paper-2)", years: "2018–2024", badge: "Sub-Inspector" },
    { code: "MTS", name: "SSC MTS & Havaldar", years: "2019–2024", badge: "Matric" },
    { code: "SEL_POST", name: "SSC Selection Post (Phase VII to XII)", years: "2019–2024", badge: "Phase Exams" },
    { code: "STENO", name: "SSC Stenographer Grade C & D", years: "2019–2024", badge: "Steno" }
  ],
  sections: [
    {
      id: "section_a",
      title: "Section A: Grammatical Section",
      hindi_title: "खण्ड अ: व्याकरण खण्ड",
      color: "blue",
      chapters: [
        {
          id: "ch01",
          chapter_number: 1,
          title: "Spotting the Errors",
          hindi_title: "त्रुटि पहचान (Spotting the Errors)",
          page_start: 7,
          page_end: 96,
          total_pages: 90,
          question_count: 660,
          icon: "🔍",
          status: "ready",
          data_file: "pyq_data/pyq_english_ch01_spotting_errors.js",
          global_var: "PYQ_CH01_QUESTIONS",
          subtopics: [
            "A. Question Tag",
            "B. Subject and Verb Agreement",
            "C. Form of Verb (Tense / Number)",
            "D. Preposition & Phrasal Verbs",
            "E. Conjunction & Correlatives",
            "F. Article (A, An, The)",
            "G. Correct Use of Pronoun, Adjective & Adverb",
            "H. Conditional Sentences",
            "I. Noun (Case, Gender, Number)",
            "J. Active & Passive Voice Errors",
            "K. Miscellaneous & Word Choice Errors"
          ],
          exam_breakdown: {
            "SSC CGL (Tier-1)": 380,
            "SSC CGL (Tier-2)": 140,
            "SSC CHSL (Tier-1)": 310,
            "SSC CHSL (Tier-2)": 65,
            "SSC CPO SI": 165,
            "SSC MTS": 145,
            "Selection Post": 45
          }
        },
        {
          id: "ch02",
          chapter_number: 2,
          title: "Sentence Improvement",
          hindi_title: "वाक्य सुधार (Sentence Improvement)",
          page_start: 97,
          page_end: 194,
          total_pages: 98,
          question_count: 1350,
          icon: "✏️",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch02_sentence_improvement.js",
          global_var: "PYQ_CH02_QUESTIONS",
          subtopics: [
            "Phrase Replacement",
            "Tense & Verb Form Rectification",
            "Preposition & Phrasal Verb Improvement",
            "Conjunction & Parallelism",
            "Subject-Verb Concord",
            "Vocabulary & Idiomatic Improvement"
          ],
          exam_breakdown: {
            "SSC CGL": 480,
            "SSC CHSL": 420,
            "SSC CPO SI": 220,
            "SSC MTS": 180,
            "Selection Post": 50
          }
        },
        {
          id: "ch03",
          chapter_number: 3,
          title: "Active & Passive Voice",
          hindi_title: "वाच्य परिवर्तन (Active & Passive Voice)",
          page_start: 195,
          page_end: 242,
          total_pages: 48,
          question_count: 750,
          icon: "🔄",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch03_active_passive.js",
          global_var: "PYQ_CH03_QUESTIONS",
          subtopics: [
            "Assertive Sentences",
            "Interrogative (Wh- & Yes/No)",
            "Imperative Sentences (Orders/Requests/Suggestions)",
            "Modal Auxiliaries",
            "Infinitives & Participles",
            "Impersonal Passive & That-Clauses"
          ],
          exam_breakdown: {
            "SSC CGL": 280,
            "SSC CHSL": 210,
            "SSC CPO SI": 160,
            "SSC MTS": 70,
            "Selection Post": 30
          }
        },
        {
          id: "ch04",
          chapter_number: 4,
          title: "Direct & Indirect Speech (Narration)",
          hindi_title: "कथन परिवर्तन (Direct & Indirect Speech)",
          page_start: 243,
          page_end: 286,
          total_pages: 44,
          question_count: 700,
          icon: "💬",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch04_narration.js",
          global_var: "PYQ_CH04_QUESTIONS",
          subtopics: [
            "Assertive Sentences",
            "Interrogative Sentences",
            "Imperative Sentences",
            "Exclamatory & Optative Sentences",
            "Universal Truth & Tense Non-Change",
            "Mixed Dialogues"
          ],
          exam_breakdown: {
            "SSC CGL": 260,
            "SSC CHSL": 200,
            "SSC CPO SI": 150,
            "SSC MTS": 60,
            "Selection Post": 30
          }
        },
        {
          id: "ch05",
          chapter_number: 5,
          title: "Fill in the Blanks",
          hindi_title: "रिक्त स्थान पूर्ति (Fill in the Blanks)",
          page_start: 287,
          page_end: 340,
          total_pages: 54,
          question_count: 850,
          icon: "📝",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch05_fill_in_the_blanks.js",
          global_var: "PYQ_CH05_QUESTIONS",
          subtopics: [
            "Single Blank (Grammar-based)",
            "Single Blank (Vocabulary-based)",
            "Double Blanks",
            "Collocations & Fixed Prepositions",
            "Idiomatic Fillers"
          ],
          exam_breakdown: {
            "SSC CGL": 300,
            "SSC CHSL": 270,
            "SSC CPO SI": 130,
            "SSC MTS": 110,
            "Selection Post": 40
          }
        }
      ]
    },
    {
      id: "section_b",
      title: "Section B: Vocabulary Section",
      hindi_title: "खण्ड ब: शब्दावली खण्ड",
      color: "emerald",
      chapters: [
        {
          id: "ch06",
          chapter_number: 6,
          title: "Synonyms",
          hindi_title: "समानार्थी शब्द (Synonyms)",
          page_start: 341,
          page_end: 419,
          total_pages: 79,
          question_count: 1150,
          icon: "📚",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch06_synonyms.js",
          global_var: "PYQ_CH06_QUESTIONS",
          subtopics: [
            "TCS High-Frequency Words",
            "Contextual Synonyms in Sentences",
            "Direct Synonyms",
            "Confusable Words"
          ],
          exam_breakdown: {
            "SSC CGL": 400,
            "SSC CHSL": 360,
            "SSC CPO SI": 180,
            "SSC MTS": 160,
            "Selection Post": 50
          }
        },
        {
          id: "ch07",
          chapter_number: 7,
          title: "Antonyms",
          hindi_title: "विलोम शब्द (Antonyms)",
          page_start: 420,
          page_end: 494,
          total_pages: 75,
          question_count: 1100,
          icon: "⚡",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch07_antonyms.js",
          global_var: "PYQ_CH07_QUESTIONS",
          subtopics: [
            "TCS High-Frequency Antonyms",
            "Contextual Antonyms",
            "Prefix & Suffix Opposition",
            "Gradable vs Complementary Antonyms"
          ],
          exam_breakdown: {
            "SSC CGL": 380,
            "SSC CHSL": 350,
            "SSC CPO SI": 170,
            "SSC MTS": 150,
            "Selection Post": 50
          }
        },
        {
          id: "ch08",
          chapter_number: 8,
          title: "One Word Substitution",
          hindi_title: "एक शब्द प्रतिस्थापन (One Word Substitution)",
          page_start: 495,
          page_end: 572,
          total_pages: 78,
          question_count: 1200,
          icon: "🎯",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch08_one_word_substitution.js",
          global_var: "PYQ_CH08_QUESTIONS",
          subtopics: [
            "Persons & Professions",
            "Phobias & Manias",
            "Killing & Murder (Cides)",
            "Government & Systems (Cracies / Archies)",
            "Words related to Places & Dwellings",
            "Words related to Arts, Science & Studies"
          ],
          exam_breakdown: {
            "SSC CGL": 420,
            "SSC CHSL": 380,
            "SSC CPO SI": 190,
            "SSC MTS": 160,
            "Selection Post": 50
          }
        },
        {
          id: "ch09",
          chapter_number: 9,
          title: "Idioms & Phrases",
          hindi_title: "मुहावरे एवं लोकोक्तियाँ (Idioms & Phrases)",
          page_start: 573,
          page_end: 652,
          total_pages: 80,
          question_count: 1250,
          icon: "💡",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch09_idioms_phrases.js",
          global_var: "PYQ_CH09_QUESTIONS",
          subtopics: [
            "Colour Idioms",
            "Animal Idioms",
            "Body Parts Idioms",
            "Food & Cooking Idioms",
            "TCS Contextual Sentence Usage",
            "Origin & Etymology Based"
          ],
          exam_breakdown: {
            "SSC CGL": 440,
            "SSC CHSL": 390,
            "SSC CPO SI": 200,
            "SSC MTS": 170,
            "Selection Post": 50
          }
        },
        {
          id: "ch10",
          chapter_number: 10,
          title: "Spelling Test (Correctly / Incorrectly Spelt)",
          hindi_title: "वर्तनी शुद्धि (Spelling Test)",
          page_start: 653,
          page_end: 706,
          total_pages: 54,
          question_count: 800,
          icon: "🔤",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch10_spelling_test.js",
          global_var: "PYQ_CH10_QUESTIONS",
          subtopics: [
            "Identify Correctly Spelt Word",
            "Identify Incorrectly Spelt Word",
            "Contextual Sentence Spelling Errors",
            "Double Consonant Pitfalls",
            "Silent Letters & -ible / -able"
          ],
          exam_breakdown: {
            "SSC CGL": 280,
            "SSC CHSL": 250,
            "SSC CPO SI": 120,
            "SSC MTS": 110,
            "Selection Post": 40
          }
        }
      ]
    },
    {
      id: "section_c",
      title: "Section C: Reading Comprehension & Discourse",
      hindi_title: "खण्ड स: पठन अवबोध एवं पुनर्व्यवस्थापन",
      color: "purple",
      chapters: [
        {
          id: "ch11",
          chapter_number: 11,
          title: "Sentence Rearrangement (Parajumbles / PQRS)",
          hindi_title: "वाक्य पुनर्व्यवस्थापन (PQRS Parajumbles)",
          page_start: 707,
          page_end: 786,
          total_pages: 80,
          question_count: 1150,
          icon: "🧩",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch11_parajumbles.js",
          global_var: "PYQ_CH11_QUESTIONS",
          subtopics: [
            "4-Sentence Parajumbles (P, Q, R, S)",
            "Fixed S1 & S6 with Middle Jumble",
            "Story & Narrative Sequencing",
            "Editorial & Analytical Paragraphs",
            "Mandatory Pair Identification Techniques"
          ],
          exam_breakdown: {
            "SSC CGL": 400,
            "SSC CHSL": 360,
            "SSC CPO SI": 180,
            "SSC MTS": 150,
            "Selection Post": 60
          }
        },
        {
          id: "ch12",
          chapter_number: 12,
          title: "Cloze Test",
          hindi_title: "क्लोज टेस्ट (Cloze Test Passages)",
          page_start: 787,
          page_end: 872,
          total_pages: 86,
          question_count: 1300,
          icon: "📖",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch12_cloze_test.js",
          global_var: "PYQ_CH12_QUESTIONS",
          subtopics: [
            "5-Blank TCS Standard Passages",
            "10-Blank Tier-2 Comprehensive Passages",
            "Historical & Biographical Narratives",
            "Environment & Science Articles",
            "Economics & Social Issues"
          ],
          exam_breakdown: {
            "SSC CGL": 480,
            "SSC CHSL": 420,
            "SSC CPO SI": 200,
            "SSC MTS": 150,
            "Selection Post": 50
          }
        },
        {
          id: "ch13",
          chapter_number: 13,
          title: "Reading Comprehension Passages",
          hindi_title: "पठित गद्यांश (Reading Comprehension)",
          page_start: 873,
          page_end: 913,
          total_pages: 41,
          question_count: 650,
          icon: "📄",
          status: "queued",
          data_file: "pyq_data/pyq_english_ch13_comprehension.js",
          global_var: "PYQ_CH13_QUESTIONS",
          subtopics: [
            "Direct Factual Questions",
            "Inference & Implication",
            "Author's Tone & Central Theme / Title",
            "Vocabulary in Context",
            "Tier-2 Extended Multi-Question Passages"
          ],
          exam_breakdown: {
            "SSC CGL": 260,
            "SSC CHSL": 190,
            "SSC CPO SI": 110,
            "SSC MTS": 60,
            "Selection Post": 30
          }
        }
      ]
    }
  ]
};

// Export for browser global or module environments
if (typeof window !== 'undefined') {
  window.YCT_ENGLISH_INDEX = YCT_ENGLISH_INDEX;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { YCT_ENGLISH_INDEX };
}
