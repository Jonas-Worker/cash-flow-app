import { createClient } from '@supabase/supabase-js';

// Access the variables from app.json
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// Create Supabase client instance
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
