import { useState } from 'react';
import { join, leave } from '@/lib/rtcChat';

export default function Join() {
  const [channelName, setChannelName] = useState(``);

  return (
    <div>
      <section>
        <h1>通話に参加する</h1>
        <div>
          <input
            type="text"
            placeholder="Channel Name"
            value={channelName}
            onChange={(evt) => {
              setChannelName(evt.target.value);
            }}
          />
        </div>
        <div>
          <button type="button" onClick={() => join(channelName)}>
            このチャンネルに参加する
          </button>
        </div>
      </section>
      <section>
        <h2>通話から退出する</h2>
        <div>
          <button type="button" onClick={() => leave()}>
            このチャンネルから退出する
          </button>
        </div>
      </section>
    </div>
  );
}
