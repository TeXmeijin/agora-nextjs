import { supabase } from '@/lib/supabaseClient';

export async function signInWithTwitter() {
  return supabase.auth.signIn({
    provider: 'twitter',
  });
}
