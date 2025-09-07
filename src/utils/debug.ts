import { supabase } from "@/lib/supabase";

export const checkSupabaseAuth = async () => {
  try {
    console.group('Supabase Debug Info');
    console.log('Supabase client:', supabase);
    console.log('Current session:', await supabase.auth.getSession());
    console.log('Auth methods:', {
      signInWithOAuth: typeof supabase.auth.signInWithOAuth,
      getSession: typeof supabase.auth.getSession
    });
    console.groupEnd();
    return true;
  } catch (error) {
    console.error('Supabase debug error:', error);
    return false;
  }
};