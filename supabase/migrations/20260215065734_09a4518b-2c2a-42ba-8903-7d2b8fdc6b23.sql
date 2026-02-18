-- Explicit deny policies for SELECT, UPDATE, DELETE on contact_submissions
CREATE POLICY "No public read access"
ON public.contact_submissions
FOR SELECT
USING (false);

CREATE POLICY "No public update access"
ON public.contact_submissions
FOR UPDATE
USING (false);

CREATE POLICY "No public delete access"
ON public.contact_submissions
FOR DELETE
USING (false);