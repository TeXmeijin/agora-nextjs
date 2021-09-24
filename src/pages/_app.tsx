import { AppProps } from 'next/app';
import '@/styles/global.css';
import { supabase } from '@/lib/supabaseClient';
import { UserContextProvider } from '@/components/context/AuthContext';
import { Head } from '@/components/meta/Head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider supabaseClient={supabase}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
