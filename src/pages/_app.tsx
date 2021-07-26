import { AppProps } from 'next/app';
import '@/styles/global.css';
import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <Component {...pageProps} />;
}
