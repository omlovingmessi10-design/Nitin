-- ==============================================================================
-- SSC PRACTICE PLATFORM - SUPABASE BACKEND SCHEMA
-- Tables for 3 Users (Nitin, Om, $H), Question Responses, Chapter Tables & 10-Star Ratings
-- Run this script in your Supabase SQL Editor (Dashboard -> SQL Editor -> New Query -> Run)
-- ==============================================================================

-- 1. ENABLE EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. USERS TABLE (Nitin, Om, $H)
CREATE TABLE IF NOT EXISTS public.app_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  display_name TEXT NOT NULL,
  avatar TEXT DEFAULT '🧑‍🎓',
  role TEXT DEFAULT 'SSC Aspirant',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_active_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pre-seed the 3 designated users: Nitin, Om, $H
INSERT INTO public.app_users (user_name, display_name, avatar, role)
VALUES 
  ('Nitin', 'Nitin', '🧑‍💻', 'SSC Aspirant - Quant Specialist'),
  ('Om', 'Om', '⚡', 'SSC Aspirant - Speed Master'),
  ('$H', '$H', '👑', 'SSC Aspirant - Ranker')
ON CONFLICT (user_name) DO UPDATE 
SET display_name = EXCLUDED.display_name,
    avatar = EXCLUDED.avatar,
    last_active_at = NOW();

-- 3. MASTER LOG: ALL USER QUESTION RESPONSES (Every question answered by any user)
CREATE TABLE IF NOT EXISTS public.user_question_responses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_name TEXT NOT NULL,
  subject TEXT NOT NULL DEFAULT 'quant',
  chapter_id TEXT NOT NULL,
  chapter_title TEXT NOT NULL,
  practice_set TEXT NOT NULL,
  question_number INT NOT NULL,
  level TEXT,
  type_code TEXT,
  type_category TEXT,
  selected_option TEXT,
  correct_option TEXT,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  time_spent_seconds INT DEFAULT 0,
  is_marked_review BOOLEAN DEFAULT FALSE,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance and sorting
CREATE INDEX IF NOT EXISTS idx_uqr_user ON public.user_question_responses(user_name);
CREATE INDEX IF NOT EXISTS idx_uqr_chapter ON public.user_question_responses(chapter_id);
CREATE INDEX IF NOT EXISTS idx_uqr_set ON public.user_question_responses(practice_set);
CREATE INDEX IF NOT EXISTS idx_uqr_created ON public.user_question_responses(attempted_at DESC);

-- 4. CHAPTER TABLE: RATIO & PROPORTION RESPONSES
CREATE TABLE IF NOT EXISTS public.ratio_chapter_responses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_name TEXT NOT NULL,
  practice_set TEXT NOT NULL,
  question_number INT NOT NULL,
  level TEXT,
  type_code TEXT,
  type_category TEXT,
  selected_option TEXT,
  correct_option TEXT,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  time_spent_seconds INT DEFAULT 0,
  is_marked_review BOOLEAN DEFAULT FALSE,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_ratio_user ON public.ratio_chapter_responses(user_name);
CREATE INDEX IF NOT EXISTS idx_ratio_set_q ON public.ratio_chapter_responses(practice_set, question_number);

-- 5. CHAPTER TABLE: AVERAGE RESPONSES
CREATE TABLE IF NOT EXISTS public.average_chapter_responses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_name TEXT NOT NULL,
  practice_set TEXT NOT NULL,
  question_number INT NOT NULL,
  level TEXT,
  type_code TEXT,
  type_category TEXT,
  selected_option TEXT,
  correct_option TEXT,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  time_spent_seconds INT DEFAULT 0,
  is_marked_review BOOLEAN DEFAULT FALSE,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_avg_user ON public.average_chapter_responses(user_name);
CREATE INDEX IF NOT EXISTS idx_avg_set_q ON public.average_chapter_responses(practice_set, question_number);

-- 6. CHAPTER TABLE: PERCENTAGE RESPONSES
CREATE TABLE IF NOT EXISTS public.percentage_chapter_responses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_name TEXT NOT NULL,
  practice_set TEXT NOT NULL,
  question_number INT NOT NULL,
  level TEXT,
  type_code TEXT,
  type_category TEXT,
  selected_option TEXT,
  correct_option TEXT,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  time_spent_seconds INT DEFAULT 0,
  is_marked_review BOOLEAN DEFAULT FALSE,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_pct_user ON public.percentage_chapter_responses(user_name);
CREATE INDEX IF NOT EXISTS idx_pct_set_q ON public.percentage_chapter_responses(practice_set, question_number);

-- 7. CHAPTER TABLE: TIME & WORK RESPONSES
CREATE TABLE IF NOT EXISTS public.time_work_chapter_responses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_name TEXT NOT NULL,
  practice_set TEXT NOT NULL,
  question_number INT NOT NULL,
  level TEXT,
  type_code TEXT,
  type_category TEXT,
  selected_option TEXT,
  correct_option TEXT,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  time_spent_seconds INT DEFAULT 0,
  is_marked_review BOOLEAN DEFAULT FALSE,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_tw_user ON public.time_work_chapter_responses(user_name);

-- 8. CHAPTER TABLE: PROFIT, LOSS & DISCOUNT RESPONSES
CREATE TABLE IF NOT EXISTS public.profit_loss_chapter_responses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_name TEXT NOT NULL,
  practice_set TEXT NOT NULL,
  question_number INT NOT NULL,
  level TEXT,
  type_code TEXT,
  type_category TEXT,
  selected_option TEXT,
  correct_option TEXT,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  time_spent_seconds INT DEFAULT 0,
  is_marked_review BOOLEAN DEFAULT FALSE,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_pl_user ON public.profit_loss_chapter_responses(user_name);
CREATE INDEX IF NOT EXISTS idx_pl_set_q ON public.profit_loss_chapter_responses(practice_set, question_number);

-- 9. 10-STAR QUESTION RATINGS & FEEDBACK TABLE
CREATE TABLE IF NOT EXISTS public.question_ratings (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_name TEXT NOT NULL,
  subject TEXT NOT NULL DEFAULT 'quant',
  chapter_id TEXT NOT NULL,
  chapter_title TEXT NOT NULL,
  practice_set TEXT NOT NULL,
  question_number INT NOT NULL,
  stars_rating INT NOT NULL CHECK (stars_rating >= 1 AND stars_rating <= 10),
  rating_label TEXT,
  feedback_comment TEXT,
  rated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT uq_user_question_rating UNIQUE (user_name, chapter_id, practice_set, question_number)
);
CREATE INDEX IF NOT EXISTS idx_qr_user ON public.question_ratings(user_name);
CREATE INDEX IF NOT EXISTS idx_qr_chapter ON public.question_ratings(chapter_id, practice_set, question_number);

-- 9. FULL TEST SUBMISSIONS & REPORT CARDS TABLE
CREATE TABLE IF NOT EXISTS public.test_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_name TEXT NOT NULL,
  subject TEXT NOT NULL,
  chapter_id TEXT NOT NULL,
  chapter_title TEXT NOT NULL,
  practice_set TEXT NOT NULL,
  total_questions INT NOT NULL,
  attempted INT NOT NULL,
  correct INT NOT NULL,
  incorrect INT NOT NULL,
  unattempted INT NOT NULL,
  score NUMERIC(6, 2) NOT NULL,
  accuracy_percent NUMERIC(5, 2) NOT NULL,
  percentile NUMERIC(5, 2),
  rank INT,
  time_taken_seconds INT,
  breakdown_by_level JSONB,
  breakdown_by_type JSONB,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_ts_user ON public.test_submissions(user_name);
CREATE INDEX IF NOT EXISTS idx_ts_chapter ON public.test_submissions(chapter_id);

-- 10. AUTOMATIC TRIGGER: ROUTE FROM MASTER LOG TO CHAPTER TABLES
CREATE OR REPLACE FUNCTION public.fn_route_chapter_response()
RETURNS TRIGGER AS $$
BEGIN
  -- Route to Ratio & Proportion Table
  IF NEW.chapter_id ILIKE '%ratio%' OR NEW.chapter_title ILIKE '%ratio%' THEN
    INSERT INTO public.ratio_chapter_responses (
      user_name, practice_set, question_number, level, type_code, type_category,
      selected_option, correct_option, is_correct, time_spent_seconds, is_marked_review, attempted_at
    ) VALUES (
      NEW.user_name, NEW.practice_set, NEW.question_number, NEW.level, NEW.type_code, NEW.type_category,
      NEW.selected_option, NEW.correct_option, NEW.is_correct, NEW.time_spent_seconds, NEW.is_marked_review, NEW.attempted_at
    );
  -- Route to Average Table
  ELSIF NEW.chapter_id ILIKE '%average%' OR NEW.chapter_title ILIKE '%average%' THEN
    INSERT INTO public.average_chapter_responses (
      user_name, practice_set, question_number, level, type_code, type_category,
      selected_option, correct_option, is_correct, time_spent_seconds, is_marked_review, attempted_at
    ) VALUES (
      NEW.user_name, NEW.practice_set, NEW.question_number, NEW.level, NEW.type_code, NEW.type_category,
      NEW.selected_option, NEW.correct_option, NEW.is_correct, NEW.time_spent_seconds, NEW.is_marked_review, NEW.attempted_at
    );
  -- Route to Percentage Table
  ELSIF NEW.chapter_id ILIKE '%percent%' OR NEW.chapter_title ILIKE '%percent%' THEN
    INSERT INTO public.percentage_chapter_responses (
      user_name, practice_set, question_number, level, type_code, type_category,
      selected_option, correct_option, is_correct, time_spent_seconds, is_marked_review, attempted_at
    ) VALUES (
      NEW.user_name, NEW.practice_set, NEW.question_number, NEW.level, NEW.type_code, NEW.type_category,
      NEW.selected_option, NEW.correct_option, NEW.is_correct, NEW.time_spent_seconds, NEW.is_marked_review, NEW.attempted_at
    );
  -- Route to Time & Work Table
  ELSIF NEW.chapter_id ILIKE '%time%' OR NEW.chapter_id ILIKE '%work%' OR NEW.chapter_title ILIKE '%work%' THEN
    INSERT INTO public.time_work_chapter_responses (
      user_name, practice_set, question_number, level, type_code, type_category,
      selected_option, correct_option, is_correct, time_spent_seconds, is_marked_review, attempted_at
    ) VALUES (
      NEW.user_name, NEW.practice_set, NEW.question_number, NEW.level, NEW.type_code, NEW.type_category,
      NEW.selected_option, NEW.correct_option, NEW.is_correct, NEW.time_spent_seconds, NEW.is_marked_review, NEW.attempted_at
    );
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_route_chapter_response ON public.user_question_responses;
CREATE TRIGGER trg_route_chapter_response
AFTER INSERT ON public.user_question_responses
FOR EACH ROW
EXECUTE FUNCTION public.fn_route_chapter_response();

-- 11. ROW LEVEL SECURITY (RLS) - PERMISSIVE PUBLIC POLICIES FOR INSTANT SYNC
ALTER TABLE public.app_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_question_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ratio_chapter_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.average_chapter_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.percentage_chapter_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.time_work_chapter_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_submissions ENABLE ROW LEVEL SECURITY;

DO $$
DECLARE
  tbl text;
BEGIN
  FOR tbl IN SELECT unnest(ARRAY[
    'app_users',
    'user_question_responses',
    'ratio_chapter_responses',
    'average_chapter_responses',
    'percentage_chapter_responses',
    'time_work_chapter_responses',
    'question_ratings',
    'test_submissions'
  ])
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS "Public access policy" ON public.%I;', tbl);
    EXECUTE format('CREATE POLICY "Public access policy" ON public.%I FOR ALL TO public USING (true) WITH CHECK (true);', tbl);
  END LOOP;
END $$;

-- 12. HELPER SUMMARY VIEWS (FOR 1-CLICK INSPECTION OF ALL USERS IN SUPABASE)
CREATE OR REPLACE VIEW public.v_ratio_all_users_summary AS
SELECT 
  user_name,
  practice_set,
  COUNT(*) AS total_attempts,
  SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) AS correct_answers,
  SUM(CASE WHEN NOT is_correct THEN 1 ELSE 0 END) AS incorrect_answers,
  ROUND((SUM(CASE WHEN is_correct THEN 1 ELSE 0 END)::NUMERIC / NULLIF(COUNT(*), 0)) * 100, 1) AS accuracy_pct,
  ROUND(AVG(time_spent_seconds), 1) AS avg_time_sec,
  MAX(attempted_at) AS last_attempted_at
FROM public.ratio_chapter_responses
GROUP BY user_name, practice_set
ORDER BY practice_set, accuracy_pct DESC;

CREATE OR REPLACE VIEW public.v_average_all_users_summary AS
SELECT 
  user_name,
  practice_set,
  COUNT(*) AS total_attempts,
  SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) AS correct_answers,
  SUM(CASE WHEN NOT is_correct THEN 1 ELSE 0 END) AS incorrect_answers,
  ROUND((SUM(CASE WHEN is_correct THEN 1 ELSE 0 END)::NUMERIC / NULLIF(COUNT(*), 0)) * 100, 1) AS accuracy_pct,
  ROUND(AVG(time_spent_seconds), 1) AS avg_time_sec,
  MAX(attempted_at) AS last_attempted_at
FROM public.average_chapter_responses
GROUP BY user_name, practice_set
ORDER BY practice_set, accuracy_pct DESC;

CREATE OR REPLACE VIEW public.v_question_ratings_summary AS
SELECT 
  chapter_id,
  chapter_title,
  practice_set,
  question_number,
  COUNT(*) AS total_ratings,
  ROUND(AVG(stars_rating), 1) AS avg_stars_out_of_10,
  STRING_AGG(user_name || ': ' || stars_rating || '⭐ (' || COALESCE(rating_label, '') || ')', '; ') AS user_ratings_breakdown,
  MAX(rated_at) AS last_rated_at
FROM public.question_ratings
GROUP BY chapter_id, chapter_title, practice_set, question_number
ORDER BY chapter_id, practice_set, question_number;


-- ==============================================================================
-- 7. MOCK TESTS & LIVE EXAM SYSTEM (Real Exam Condition Interface)
-- ==============================================================================

-- 7.1 MOCK TESTS TABLE
CREATE TABLE IF NOT EXISTS public.mock_tests (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  exam_category TEXT DEFAULT 'SSC CGL 2026',
  duration_minutes INT DEFAULT 15,
  total_questions INT DEFAULT 25,
  marks_per_question NUMERIC DEFAULT 2.0,
  negative_marks NUMERIC DEFAULT 0.5,
  maximum_marks NUMERIC DEFAULT 50.0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed Default Live Test
INSERT INTO public.mock_tests (id, title, exam_category, duration_minutes, total_questions, marks_per_question, negative_marks, maximum_marks)
VALUES 
  ('ssc-cgl-2026-live-1', 'SSC CGL 2026: Quantitative Aptitude - Live Test', 'SSC CGL 2026', 15, 25, 2.0, 0.5, 50.0)
ON CONFLICT (id) DO UPDATE
SET title = EXCLUDED.title,
    duration_minutes = EXCLUDED.duration_minutes,
    total_questions = EXCLUDED.total_questions;

-- 7.2 MOCK TEST QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS public.mock_test_questions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  test_id TEXT NOT NULL REFERENCES public.mock_tests(id) ON DELETE CASCADE,
  question_number INT NOT NULL,
  section_name TEXT DEFAULT 'PART-A',
  section_title TEXT DEFAULT 'Quantitative Aptitude',
  question_text TEXT NOT NULL,
  question_text_hi TEXT,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  option_a_hi TEXT,
  option_b_hi TEXT,
  option_c_hi TEXT,
  option_d_hi TEXT,
  correct_option VARCHAR(2) NOT NULL, -- 'a', 'b', 'c', 'd'
  solution_text TEXT,
  solution_text_hi TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(test_id, question_number)
);

CREATE INDEX IF NOT EXISTS idx_mtq_test_qnum ON public.mock_test_questions(test_id, question_number);

-- 7.3 MOCK TEST SUBMISSIONS TABLE
CREATE TABLE IF NOT EXISTS public.mock_test_submissions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  test_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  total_questions INT DEFAULT 25,
  attempted_count INT DEFAULT 0,
  correct_count INT DEFAULT 0,
  incorrect_count INT DEFAULT 0,
  score NUMERIC DEFAULT 0.0,
  maximum_marks NUMERIC DEFAULT 50.0,
  time_taken_seconds INT DEFAULT 0,
  responses_json JSONB,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mts_user ON public.mock_test_submissions(user_name);
CREATE INDEX IF NOT EXISTS idx_mts_test ON public.mock_test_submissions(test_id);

-- Enable RLS & Policies
ALTER TABLE public.mock_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_test_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_test_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read mock_tests" ON public.mock_tests FOR SELECT USING (true);
CREATE POLICY "Allow public read mock_test_questions" ON public.mock_test_questions FOR SELECT USING (true);
CREATE POLICY "Allow public all mock_test_submissions" ON public.mock_test_submissions FOR ALL USING (true);

-- 7.4 SEED 25 LIVE TEST QUESTIONS (SSC CGL 2026: Quantitative Aptitude Live Test)
INSERT INTO public.mock_test_questions 
  (test_id, question_number, section_name, section_title, question_text, question_text_hi, option_a, option_b, option_c, option_d, option_a_hi, option_b_hi, option_c_hi, option_d_hi, correct_option, solution_text, solution_text_hi)
VALUES
(
  'ssc-cgl-2026-live-1', 1, 'PART-A', 'Quantitative Aptitude',
  'Find the value of ''x'' in the following equation: 5 1/2 - {x / (2(15 + \sqrt{441}))} = 5 1/4',
  'समीकरण में ''x'' का मान ज्ञात कीजिए: 5 1/2 - {x / (2(15 + \sqrt{441}))} = 5 1/4',
  '19', '24', '14', '18',
  '19', '24', '14', '18',
  'd',
  'Inside the root: \sqrt{441} = 21. In brackets: 2 * (15 + 21) = 2 * 36 = 72. Equation becomes: 11/2 - x/72 = 21/4 => x/72 = 11/2 - 21/4 = 1/4 => x = 72/4 = 18.',
  '\sqrt{441} = 21। कोष्ठक के अंदर: 2 * (15 + 21) = 72। समीकरण: 11/2 - x/72 = 21/4 => x/72 = 1/4 => x = 18।'
),
(
  'ssc-cgl-2026-live-1', 2, 'PART-A', 'Quantitative Aptitude',
  'If the marked price of an article is ₹800 and two successive discounts of 15% and 10% are given, then find the selling price of the article.',
  'यदि किसी वस्तु का अंकित मूल्य ₹800 है और 15% तथा 10% की दो क्रमिक छूट दी जाती हैं, तो वस्तु का विक्रय मूल्य ज्ञात कीजिए।',
  '₹612', '₹624', '₹600', '₹596',
  '₹612', '₹624', '₹600', '₹596',
  'a',
  'First discount: 800 * 0.85 = ₹680. Second discount: 680 * 0.90 = ₹612.',
  'पहली छूट: 800 * 0.85 = ₹680। दूसरी छूट: 680 * 0.90 = ₹612।'
),
(
  'ssc-cgl-2026-live-1', 3, 'PART-A', 'Quantitative Aptitude',
  'The ratio of incomes of A and B is 4:3, and their expenditures are in the ratio 3:2. If each saves ₹6,000 at the end of the year, find the annual income of A.',
  'A और B की आय का अनुपात 4:3 है, और उनके व्यय का अनुपात 3:2 है। यदि वे दोनों वर्ष के अंत में प्रत्येक ₹6,000 की बचत करते हैं, तो A की वार्षिक आय ज्ञात कीजिए।',
  '₹24,000', '₹18,000', '₹20,000', '₹28,000',
  '₹24,000', '₹18,000', '₹20,000', '₹28,000',
  'a',
  '(4x - 6000)/(3x - 6000) = 3/2 => 8x - 12000 = 9x - 18000 => x = 6000. A''s income = 4 * 6000 = ₹24,000.',
  '8x - 12000 = 9x - 18000 => x = 6000। A की आय = 4 * 6000 = ₹24,000।'
),
(
  'ssc-cgl-2026-live-1', 4, 'PART-A', 'Quantitative Aptitude',
  'If the price of petrol increases by 25%, by what percentage should a driver reduce his consumption so that expenditure remains unchanged?',
  'यदि पेट्रोल की कीमत में 25% की वृद्धि होती है, तो एक चालक को अपनी खपत में कितने प्रतिशत की कमी करनी चाहिए ताकि उसका खर्च अपरिवर्तित रहे?',
  '20%', '25%', '16.67%', '15%',
  '20%', '25%', '16.67%', '15%',
  'a',
  'Reduction% = [25 / (100 + 25)] * 100 = (25 / 125) * 100 = 20%.',
  'कमी% = [25 / (100 + 25)] * 100 = 20%।'
),
(
  'ssc-cgl-2026-live-1', 5, 'PART-A', 'Quantitative Aptitude',
  'The average weight of 24 students in a class is 45 kg. If the teacher''s weight is included, the average weight increases by 400 grams. Find the weight of the teacher.',
  'एक कक्षा के 24 छात्रों का औसत वजन 45 किग्रा है। यदि शिक्षक का वजन भी शामिल कर लिया जाए, तो औसत वजन 400 ग्राम बढ़ जाता है। शिक्षक का वजन ज्ञात कीजिए।',
  '55 kg', '54.6 kg', '55.4 kg', '56 kg',
  '55 किग्रा', '54.6 किग्रा', '55.4 किग्रा', '56 किग्रा',
  'a',
  'Teacher''s weight = Old Average + (Total persons * Increase) = 45 + (25 * 0.4) = 45 + 10 = 55 kg.',
  'शिक्षक का वजन = 45 + (25 * 0.4 किग्रा) = 45 + 10 = 55 किग्रा।'
),
(
  'ssc-cgl-2026-live-1', 6, 'PART-A', 'Quantitative Aptitude',
  'A can complete a work in 12 days, and B can complete the same work in 18 days. They worked together for 4 days, then A left. In how many days will B finish the remaining work?',
  'A एक कार्य को 12 दिनों में पूरा कर सकता है, और B उसी कार्य को 18 दिनों में पूरा कर सकता है। उन्होंने 4 दिनों तक एक साथ कार्य किया, फिर A ने कार्य छोड़ दिया। B शेष कार्य को कितने दिनों में पूरा करेगा?',
  '8 days', '6 days', '10 days', '5 days',
  '8 दिन', '6 दिन', '10 दिन', '5 दिन',
  'a',
  'Total work = LCM(12, 18) = 36 units. Efficiency A = 3, B = 2. Work in 4 days = 4 * 5 = 20 units. Remaining = 36 - 20 = 16 units. Time for B = 16 / 2 = 8 days.',
  'कुल कार्य = 36 इकाइयाँ। 4 दिनों में कार्य = 20 इकाइयाँ। शेष कार्य = 16 इकाइयाँ। B का समय = 16 / 2 = 8 दिन।'
),
(
  'ssc-cgl-2026-live-1', 7, 'PART-A', 'Quantitative Aptitude',
  'Pipe A can fill a tank in 6 hours and Pipe B can fill it in 8 hours. An emptying pipe C can empty the full tank in 12 hours. If all three pipes are opened together, in how many hours will the tank be full?',
  'पाइप A एक टंकी को 6 घंटे में भर सकता है और पाइप B इसे 8 घंटे में भर सकता है। एक निकासी पाइप C भरी हुई टंकी को 12 घंटे में खाली कर सकता है। यदि तीनों पाइपों को एक साथ खोल दिया जाए, तो टंकी कितने घंटों में भर जाएगी?',
  '4 4/5 hours', '4 2/3 hours', '5 hours', '5 1/4 hours',
  '4 4/5 घंटे', '4 2/3 घंटे', '5 घंटे', '5 1/4 घंटे',
  'a',
  'Total capacity = 24 units. A = +4, B = +3, C = -2. Net rate = 4 + 3 - 2 = 5 units/hour. Time = 24 / 5 = 4 4/5 hours.',
  'कुल क्षमता = 24 इकाइयाँ। शुद्ध दर = 4 + 3 - 2 = 5 इकाइयाँ/घंटे। समय = 24 / 5 = 4 4/5 घंटे।'
),
(
  'ssc-cgl-2026-live-1', 8, 'PART-A', 'Quantitative Aptitude',
  'A train 240 m long passes a telegraph post in 16 seconds. How long will it take to pass a platform 420 m long?',
  '240 मीटर लंबी एक ट्रेन एक टेलीग्राफ पोस्ट को 16 सेकंड में पार करती है। 420 मीटर लंबे प्लेटफॉर्म को पार करने में इसे कितना समय लगेगा?',
  '44 seconds', '40 seconds', '48 seconds', '36 seconds',
  '44 सेकंड', '40 सेकंड', '48 सेकंड', '36 सेकंड',
  'a',
  'Speed = 240 / 16 = 15 m/s. Distance to cross platform = 240 + 420 = 660 m. Time = 660 / 15 = 44 seconds.',
  'गति = 240 / 16 = 15 मी/से। कुल दूरी = 240 + 420 = 660 मीटर। समय = 660 / 15 = 44 सेकंड।'
),
(
  'ssc-cgl-2026-live-1', 9, 'PART-A', 'Quantitative Aptitude',
  'A boat travels 36 km downstream in 3 hours and 24 km upstream in 4 hours. What is the speed of the current?',
  'एक नाव धारा के अनुकूल 36 किमी की दूरी 3 घंटे में और धारा के प्रतिकूल 24 किमी की दूरी 4 घंटे में तय करती है। धारा की गति क्या है?',
  '3 km/h', '2.5 km/h', '4 km/h', '2 km/h',
  '3 किमी/घंटा', '2.5 किमी/घंटा', '4 किमी/घंटा', '2 किमी/घंटा',
  'a',
  'Downstream speed = 36 / 3 = 12 km/h. Upstream speed = 24 / 4 = 6 km/h. Speed of current = (12 - 6) / 2 = 3 km/h.',
  'अनुकूल गति = 12, प्रतिकूल = 6। धारा की गति = (12 - 6)/2 = 3 किमी/घंटा।'
),
(
  'ssc-cgl-2026-live-1', 10, 'PART-A', 'Quantitative Aptitude',
  'The difference between the compound interest and simple interest on a certain sum of money at 10% per annum for 2 years is ₹144. Find the principal sum.',
  'किसी निश्चित धनराशि पर 10% वार्षिक दर से 2 वर्ष के चक्रवृद्धि ब्याज और साधारण ब्याज के बीच का अंतर ₹144 है। मूलधन ज्ञात कीजिए।',
  '₹14,400', '₹12,000', '₹15,000', '₹16,000',
  '₹14,400', '₹12,000', '₹15,000', '₹16,000',
  'a',
  'Difference for 2 years = P * (R/100)^2 => 144 = P * (1/100) => P = ₹14,400.',
  '2 वर्ष का अंतर = P * (R/100)^2 => 144 = P * (1/100) => P = ₹14,400।'
),
(
  'ssc-cgl-2026-live-1', 11, 'PART-A', 'Quantitative Aptitude',
  'If x + 1/x = 5, find the value of x^3 + 1/x^3.',
  'यदि x + 1/x = 5 है, तो x^3 + 1/x^3 का मान ज्ञात कीजिए।',
  '110', '115', '125', '120',
  '110', '115', '125', '120',
  'a',
  'x^3 + 1/x^3 = (x + 1/x)^3 - 3(x + 1/x) = 5^3 - 3(5) = 125 - 15 = 110.',
  'x^3 + 1/x^3 = 5^3 - 3(5) = 125 - 15 = 110।'
),
(
  'ssc-cgl-2026-live-1', 12, 'PART-A', 'Quantitative Aptitude',
  'If a + b + c = 0, then find the value of a^2/(bc) + b^2/(ca) + c^2/(ab).',
  'यदि a + b + c = 0 है, तो a^2/(bc) + b^2/(ca) + c^2/(ab) का मान ज्ञात कीजिए।',
  '3', '0', '1', '-3',
  '3', '0', '1', '-3',
  'a',
  'a^2/(bc) + b^2/(ca) + c^2/(ab) = (a^3 + b^3 + c^3) / (abc). Since a + b + c = 0, a^3 + b^3 + c^3 = 3abc. Thus 3abc/abc = 3.',
  'यदि a + b + c = 0, तो a^3 + b^3 + c^3 = 3abc। अतः मान = 3।'
),
(
  'ssc-cgl-2026-live-1', 13, 'PART-A', 'Quantitative Aptitude',
  'In \triangle ABC, the bisectors of \angle B and \angle C intersect at incenter I inside the triangle. If \angle BAC = 68^\circ, what is the measure of \angle BIC?',
  '\triangle ABC में, \angle B और \angle C के समद्विभाजक त्रिभुज के अंदर अंतःकेंद्र I पर प्रतिच्छेद करते हैं। यदि \angle BAC = 68^\circ है, तो \angle BIC का माप क्या है?',
  '124^\circ', '118^\circ', '136^\circ', '112^\circ',
  '124^\circ', '118^\circ', '136^\circ', '112^\circ',
  'a',
  '\angle BIC = 90^\circ + \angle A / 2 = 90^\circ + 68^\circ / 2 = 90^\circ + 34^\circ = 124^\circ.',
  '\angle BIC = 90^\circ + 34^\circ = 124^\circ।'
),
(
  'ssc-cgl-2026-live-1', 14, 'PART-A', 'Quantitative Aptitude',
  'Two concentric circles are of radii 13 cm and 5 cm. Find the length of the chord of the larger circle which touches the smaller circle.',
  'दो संकेंद्रीय वृत्तों की त्रिज्याएँ 13 सेमी और 5 सेमी हैं। बड़े वृत्त की उस जीवा की लंबाई ज्ञात कीजिए जो छोटे वृत्त को स्पर्श करती है।',
  '24 cm', '20 cm', '26 cm', '18 cm',
  '24 सेमी', '20 सेमी', '26 सेमी', '18 सेमी',
  'a',
  'Half chord = \sqrt{13^2 - 5^2} = \sqrt{144} = 12 cm. Full chord = 2 * 12 = 24 cm.',
  'जीवा का आधा = \sqrt{13^2 - 5^2} = 12 सेमी। पूरी जीवा = 2 * 12 = 24 सेमी।'
),
(
  'ssc-cgl-2026-live-1', 15, 'PART-A', 'Quantitative Aptitude',
  'The circumference of a circular field is 352 m. Find the area of the field. (Use \pi = 22/7)',
  'एक वृत्ताकार मैदान की परिधि 352 मीटर है। मैदान का क्षेत्रफल ज्ञात कीजिए। (\pi = 22/7 का प्रयोग करें)',
  '9,856 m^2', '9,216 m^2', '8,856 m^2', '10,240 m^2',
  '9,856 मी^2', '9,216 मी^2', '8,856 मी^2', '10,240 मी^2',
  'a',
  '2 * (22/7) * r = 352 => r = 56 m. Area = (22/7) * 56 * 56 = 9,856 m^2.',
  '2 * (22/7) * r = 352 => r = 56 मीटर। क्षेत्रफल = (22/7) * 56 * 56 = 9,856 वर्ग मीटर।'
),
(
  'ssc-cgl-2026-live-1', 16, 'PART-A', 'Quantitative Aptitude',
  'A solid metallic cylinder of base radius 3 cm and height 5 cm is melted and recast into small solid spheres of radius 0.5 cm each. How many such spheres can be formed?',
  '3 सेमी आधार त्रिज्या और 5 सेमी ऊंचाई वाले एक ठोस धातु के बेलन को पिघलाकर 0.5 सेमी त्रिज्या के छोटे ठोस गोले बनाए जाते हैं। ऐसे कितने गोले बनाए जा सकते हैं?',
  '270', '240', '300', '180',
  '270', '240', '300', '180',
  'a',
  'Cylinder volume = \pi * 3^2 * 5 = 45\pi. Sphere volume = (4/3)\pi * (0.5)^3 = \pi / 6. Spheres count = 45\pi / (\pi/6) = 270.',
  'बेलन का आयतन = 45\pi। गोले का आयतन = \pi/6। गोलों की संख्या = 45 * 6 = 270।'
),
(
  'ssc-cgl-2026-live-1', 17, 'PART-A', 'Quantitative Aptitude',
  'If \tan\theta = 4/3, find the value of (3\sin\theta + 2\cos\theta) / (3\sin\theta - 2\cos\theta).',
  'यदि \tan\theta = 4/3 है, तो (3\sin\theta + 2\cos\theta) / (3\sin\theta - 2\cos\theta) का मान ज्ञात कीजिए।',
  '3', '2', '4', '1.5',
  '3', '2', '4', '1.5',
  'a',
  'Divide by \cos\theta: (3\tan\theta + 2) / (3\tan\theta - 2) = (3*(4/3) + 2) / (3*(4/3) - 2) = (4 + 2) / (4 - 2) = 6 / 2 = 3.',
  'अंश और हर को \cos\theta से भाग देने पर: (4 + 2) / (4 - 2) = 6 / 2 = 3।'
),
(
  'ssc-cgl-2026-live-1', 18, 'PART-A', 'Quantitative Aptitude',
  'The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is 30^\circ. Find the height of the tower.',
  'जमीन पर एक बिंदु से, जो एक टॉवर के पाद से 30 मीटर की दूरी पर है, टॉवर के शीर्ष का उन्नयन कोण 30^\circ है। टॉवर की ऊंचाई ज्ञात कीजिए।',
  '10\sqrt{3} m', '15\sqrt{3} m', '20 m', '15 m',
  '10\sqrt{3} मीटर', '15\sqrt{3} मीटर', '20 मीटर', '15 मीटर',
  'a',
  '\tan 30^\circ = h / 30 => 1/\sqrt{3} = h / 30 => h = 30/\sqrt{3} = 10\sqrt{3} m.',
  'h = 30 * \tan 30^\circ = 30 / \sqrt{3} = 10\sqrt{3} मीटर।'
),
(
  'ssc-cgl-2026-live-1', 19, 'PART-A', 'Quantitative Aptitude',
  'Find the distance between the points A(-3, 4) and B(5, -2).',
  'बिंदुओं A(-3, 4) और B(5, -2) के बीच की दूरी ज्ञात कीजिए।',
  '10 units', '12 units', '8 units', '2\sqrt{13} units',
  '10 इकाइयाँ', '12 इकाइयाँ', '8 इकाइयाँ', '2\sqrt{13} इकाइयाँ',
  'a',
  'Distance = \sqrt{(5 - (-3))^2 + (-2 - 4)^2} = \sqrt{64 + 36} = \sqrt{100} = 10 units.',
  'दूरी = \sqrt{8^2 + (-6)^2} = \sqrt{100} = 10 इकाइयाँ।'
),
(
  'ssc-cgl-2026-live-1', 20, 'PART-A', 'Quantitative Aptitude',
  'If the 6-digit number 4x573y is divisible by 72, find the value of (x + y).',
  'यदि 6 अंकों की संख्या 4x573y 72 से विभाज्य है, तो (x + y) का मान ज्ञात कीजिए।',
  '8', '9', '7', '10',
  '8', '9', '7', '10',
  'a',
  '73y divisible by 8 => y = 6. Sum of digits = 4+x+5+7+3+6 = 25+x divisible by 9 => x = 2. Value of (x + y) = 2 + 6 = 8.',
  '73y 8 से विभाज्य => y = 6। अंकों का योग = 25 + x 9 से विभाज्य => x = 2। (x + y) = 2 + 6 = 8।'
),
(
  'ssc-cgl-2026-live-1', 21, 'PART-A', 'Quantitative Aptitude',
  'What is the greatest number that will divide 148, 246, and 623 leaving remainders 4, 6, and 11 respectively?',
  'वह सबसे बड़ी संख्या कौन सी है जो 148, 246 और 623 को विभाजित करने पर क्रमशः 4, 6 और 11 शेषफल छोड़ती है?',
  '12', '16', '18', '14',
  '12', '16', '18', '14',
  'a',
  'HCF(148 - 4, 246 - 6, 623 - 11) = HCF(144, 240, 612) = 12.',
  'HCF(144, 240, 612) = 12।'
),
(
  'ssc-cgl-2026-live-1', 22, 'PART-A', 'Quantitative Aptitude',
  'A company''s car production (in thousands) over 3 years is: 2021: 50, 2022: 65, 2023: 80. What is the average annual production of the company?',
  '3 वर्षों में एक कंपनी का कार उत्पादन (हजारों में): 2021: 50, 2022: 65, 2023: 80। कंपनी का औसत वार्षिक उत्पादन क्या है?',
  '65,000', '63,333', '60,000', '62,500',
  '65,000', '63,333', '60,000', '62,500',
  'a',
  'Total = 50 + 65 + 80 = 195 thousand. Average = 195 / 3 = 65 thousand = 65,000.',
  'कुल = 195 हजार। औसत = 195 / 3 = 65 हजार = 65,000।'
),
(
  'ssc-cgl-2026-live-1', 23, 'PART-A', 'Quantitative Aptitude',
  'If the production of cars was 45 thousand in 2021 and increased to 60 thousand in 2023, find the percentage increase in production.',
  'यदि 2021 में कारों का उत्पादन 45 हजार था और 2023 में बढ़कर 60 हजार हो गया, तो उत्पादन में प्रतिशत वृद्धि ज्ञात कीजिए।',
  '33.33%', '30%', '25%', '35%',
  '33.33%', '30%', '25%', '35%',
  'a',
  'Increase% = [(60 - 45) / 45] * 100 = (15 / 45) * 100 = 33.33%.',
  'वृद्धि% = (15 / 45) * 100 = 33.33%।'
),
(
  'ssc-cgl-2026-live-1', 24, 'PART-A', 'Quantitative Aptitude',
  'Total factory output in year 2021 was 155 thousand units and in 2023 it was 220 thousand units. What is the ratio of output in 2021 to 2023?',
  'वर्ष 2021 में कुल कारखाना उत्पादन 155 हजार इकाइयाँ और 2023 में 220 हजार इकाइयाँ था। 2021 से 2023 के उत्पादन का अनुपात क्या है?',
  '31 : 44', '30 : 43', '31 : 45', '29 : 42',
  '31 : 44', '30 : 43', '31 : 45', '29 : 42',
  'a',
  'Ratio = 155 : 220 = 31 : 44.',
  'अनुपात = 155 : 220 = 31 : 44।'
),
(
  'ssc-cgl-2026-live-1', 25, 'PART-A', 'Quantitative Aptitude',
  'A and B enter into a partnership. A invests ₹40,000 for 8 months and B invests ₹60,000 for 6 months. Out of a total profit of ₹34,000, what is A''s share?',
  'A और B एक साझेदारी में प्रवेश करते हैं। A 8 महीने के लिए ₹40,000 का निवेश करता है और B 6 महीने के लिए ₹60,000 का निवेश करता है। ₹34,000 के कुल लाभ में से A का हिस्सा क्या है?',
  '₹16,000', '₹18,000', '₹15,000', '₹17,000',
  '₹16,000', '₹18,000', '₹15,000', '₹17,000',
  'a',
  'Ratio = (40000 * 8) : (60000 * 6) = 320000 : 360000 = 8 : 9. A''s share = (8 / 17) * 34,000 = ₹16,000.',
  'अनुपात = 32 : 36 = 8 : 9। A का हिस्सा = (8/17) * 34,000 = ₹16,000।'
)
ON CONFLICT (test_id, question_number) DO UPDATE
SET question_text = EXCLUDED.question_text,
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
