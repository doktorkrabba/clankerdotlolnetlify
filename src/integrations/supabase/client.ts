// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://tzwxfekijvkvheoofokv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6d3hmZWtpanZrdmhlb29mb2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1NjYzMzAsImV4cCI6MjA0ODE0MjMzMH0.8Q4wZTWoQl34Ah_00JSQdg4ruo4YqTt7byCh7FKHIXI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);