import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Auth from '@/components/pages/Auth';
import Account from '@/components/pages/Account';
import { Session } from '@supabase/supabase-js';
import { useUser } from '@/components/context/AuthContext';

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
  const { user, session } = useUser();

  return (
    <div className="container" style={{ padding: `50px 0 100px 0` }}>
      {!user || !session ? (
        <Auth />
      ) : (
        <Account key={user.id} session={session} />
      )}
    </div>
  );
}
