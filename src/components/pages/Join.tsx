import { Button, TextField } from '@adobe/react-spectrum';
import { useState } from 'react';
import { join } from '@/lib/rtcChat';

export default function Join() {
  const [channelName, setChannelName] = useState(``);

  return (
    <div>
      通話に参加する
      <TextField
        label="Channel Name"
        value={channelName}
        onChange={setChannelName}
      />
      <Button variant="primary" onPress={() => join(channelName)}>
        このチャンネルに参加する
      </Button>
    </div>
  );
}
