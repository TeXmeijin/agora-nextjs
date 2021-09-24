import Layout from '@/components/layouts/Layout';
import { RoomDetail } from '@/components/uiGroup/rooms/RoomDetail';
import { useRouter } from 'next/router';
import { Head } from '@/components/meta/Head';

type Props = {};

const RoomDetailPage = (props: Props) => {
  const router = useRouter();

  return (
    <Layout>
      <RoomDetail roomId={`${router.query.id}`}></RoomDetail>
    </Layout>
  );
};

export default RoomDetailPage;
