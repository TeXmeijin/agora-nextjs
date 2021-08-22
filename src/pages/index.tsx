import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import LoginButton from '@/components/uiGroup/LoginButton';
import AuthMenu from '@/components/uiGroup/AuthMenu';
import { Session } from '@supabase/supabase-js';
import { useUser } from '@/components/context/AuthContext';
import Layout from '@/components/layouts/Layout';
import { Head } from '@/components/meta/Head';
import { serviceInfo } from '@/packages/service/serviceInfo';

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
  return (
    <Layout>
      <Head
        title={serviceInfo.name}
        description={serviceInfo.description}
      ></Head>
      <div>{serviceInfo.description}</div>
    </Layout>
  );
}
