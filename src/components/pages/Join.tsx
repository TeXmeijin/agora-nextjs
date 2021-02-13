import { useState } from 'react';
import { join } from '@/lib/rtcChat';

export default function Join() {
  const [channelName, setChannelName] = useState(``);

  return (
    <div>
      通話に参加する
      <input
        type="text"
        placeholder="Channel Name"
        value={channelName}
        onChange={(evt) => {
          setChannelName(evt.target.value);
        }}
      />
      <button type="button" onClick={() => join(channelName)}>
        このチャンネルに参加する
      </button>
    </div>
  );
}
