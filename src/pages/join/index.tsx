import dynamic from 'next/dynamic';

const Join = dynamic(() => import(`../../components/pages/Join`), {
  ssr: false,
});

export default function JoinPage() {
  return <Join />;
}
