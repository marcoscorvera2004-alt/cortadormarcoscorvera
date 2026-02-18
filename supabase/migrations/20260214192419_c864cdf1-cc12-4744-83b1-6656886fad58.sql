
-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;

-- Create a restrictive INSERT policy (anyone can insert but with check on required fields)
CREATE POLICY "Anyone can submit contact forms"
ON public.contact_submissions
FOR INSERT
WITH CHECK (
  length(name) <= 100 AND
  length(email) <= 255 AND
  length(message) <= 5000 AND
  (phone IS NULL OR length(phone) <= 30) AND
  (promo_code IS NULL OR length(promo_code) <= 50)
);

-- Ensure no SELECT policy exists (deny all reads by default with RLS enabled)
-- RLS is already enabled and there's no SELECT policy, so reads are denied. Good.
