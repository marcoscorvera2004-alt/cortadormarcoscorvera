
-- Remove the overly permissive duplicate INSERT policy
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON public.contact_submissions;
