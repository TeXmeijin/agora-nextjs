import { Profile } from '@/packages/auth/entity/profile';
import { supabase } from '@/lib/supabaseClient';

export const upsertProfile = async (profile: Profile) => {
  return supabase.from('profiles').upsert(profile, {
    returning: 'minimal', // Don't return the value after inserting
  });
};
