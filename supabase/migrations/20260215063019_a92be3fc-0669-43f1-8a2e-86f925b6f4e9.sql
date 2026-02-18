
-- Drop existing overly permissive INSERT policy
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON public.contact_submissions;

-- Create a restrictive INSERT policy (only allow inserts, no reads/updates/deletes for anon)
CREATE POLICY "Allow anonymous contact form submissions"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Remove any existing SELECT policies that might be too open
DROP POLICY IF EXISTS "Allow public read" ON public.contact_submissions;

-- No SELECT, UPDATE, or DELETE for anonymous users
-- Only authenticated admin should read/modify (handled via dashboard/edge functions)
