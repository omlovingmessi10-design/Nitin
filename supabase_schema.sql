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

-- 8. 10-STAR QUESTION RATINGS & FEEDBACK TABLE
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

