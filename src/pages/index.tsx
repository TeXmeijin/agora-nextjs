import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Auth from '@/components/pages/Login';
import Account from '@/components/pages/Account';
import { Session } from '@supabase/supabase-js';

// const StartVoiceChat = dynamic(
//   () => import(`@/components/pages/StartVoiceChat`),
//   {
//     ssr: false,
//   },
// );
//
// export default function IndexPage() {
//   return <StartVoiceChat />;
// }

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    // eslint-disable-next-line no-shadow
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: `50px 0 100px 0` }}>
      {!session || !session.user ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
}
