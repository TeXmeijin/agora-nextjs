import dynamic from 'next/dynamic';

const StartVoiceChat = dynamic(
  () => import(`@/components/pages/StartVoiceChat`),
  {
    ssr: false,
  },
);

export default function IndexPage() {
  return <StartVoiceChat />;
}
