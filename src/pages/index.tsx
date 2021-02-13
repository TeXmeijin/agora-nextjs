import dynamic from 'next/dynamic';

const Index = dynamic(() => import(`../components/pages/Index`), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Index />
    </>
  );
}
