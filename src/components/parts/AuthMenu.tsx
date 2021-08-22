import { supabase } from '@/lib/supabaseClient';
import { Session } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { upsertProfile } from '@/packages/auth/usecase/upsertProfile';
import { Button } from '@chakra-ui/react';

export default function AuthMenu({ session }: { session: Session }) {
  useEffect(() => {
    const f = async () => {
      if (session.user) {
        await upsertProfile({
          id: session.user.id,
          updated_at: new Date(),
          user_name: session.user.user_metadata.user_name,
          full_name: session.user.user_metadata.full_name,
          avatar_url: session.user.user_metadata.avatar_url,
        });
      }
    };

    f();
  }, []);

  return (
    <div className="form-widget">
      <div>
        <Button
          type="button"
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
