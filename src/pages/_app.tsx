import { AppProps } from 'next/app';
import '@/styles/global.css';
import { supabase } from '@/lib/supabaseClient';
import { UserContextProvider } from '@/components/context/AuthContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
