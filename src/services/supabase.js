import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jnaideunuzpymgfrtxpi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuYWlkZXVudXpweW1nZnJ0eHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5NTI3MTksImV4cCI6MjA0MzUyODcxOX0.FFyVsQ5GpgMPS71RWEFp54Haj8Z0J35O5SrXcPTdeDQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export const supabase2 = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storageKey: "s1",
  },
});

export default supabase;
