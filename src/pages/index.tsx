import Layout from '@/components/layouts/Layout';
import { Head } from '@/components/meta/Head';
import { serviceInfo } from '@/packages/service/serviceInfo';
import { Container, Link } from '@chakra-ui/react';
import { pagesPath } from '@/lib/$path';

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
      <Head title={'トップページ'} description={serviceInfo.description} />
      <Container>
        <Link href={pagesPath.rooms.$url().pathname}>部屋一覧へ</Link>
      </Container>
    </Layout>
  );
}
