import { initRtcChat, join } from '@/lib/rtcChat';

export default function Index() {
  const onClickStartButton = async () => {
    await initRtcChat();

    const channelName = `channelName`;

    await join(channelName);
  };

  return (
    <div>
      <h1>通話を開始する</h1>
      <button type="button" onClick={onClickStartButton}>
        Start
      </button>
    </div>
  );
}
