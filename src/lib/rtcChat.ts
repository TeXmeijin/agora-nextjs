import AgoraRTC, {
  IAgoraRTCRemoteUser,
  IMicrophoneAudioTrack,
} from 'agora-rtc-sdk-ng';

const client = AgoraRTC.createClient({ mode: `rtc`, codec: `vp8` });

const localTracks: {
  audioTrack: IMicrophoneAudioTrack | null;
} = {
  audioTrack: null,
};
let remoteUsers: {
  [k in string | number]?: IAgoraRTCRemoteUser;
} = {};
let agoraAppId = ``;

export async function initRtcChat() {
  agoraAppId = (await getAppId()) as string;
}

export async function join(channelName: string) {
  if (!channelName) {
    throw new Error(`channel name is required.`);
  }
  // add event listener to play remote tracks when remote user publishes.
  client.on(`user-published`, handleUserPublished);
  client.on(`user-unpublished`, handleUserUnpublished);

  let uid;
  const token = await getToken(channelName);
  // join a channel and create local tracks, we can use Promise.all to run them concurrently
  [uid, localTracks.audioTrack] = await Promise.all([
    // join the channel
    client.join(agoraAppId, channelName, token),
    // create local tracks, using microphone and camera
    AgoraRTC.createMicrophoneAudioTrack(),
    // AgoraRTC.createCameraVideoTrack(),
    // AgoraRTC.createScreenVideoTrack(),
  ]);

  // play local video track
  // localTracks.videoTrack.play(`local-player`);

  // publish local tracks to channel
  await client.publish([localTracks.audioTrack]);
  console.log(`publish success`);
  return uid;
}

async function getAppId() {
  return process.env.APP_ID;
}

async function getToken(channelName: string) {
  const response = await fetch(
    `/api/rtcToken?${new URLSearchParams({ channelName })}`,
  );
  const data = await response.json();
  return data.key;
}

export async function leave() {
  localTracks.audioTrack?.stop();
  localTracks.audioTrack?.close();

  // remove remote users and player views
  remoteUsers = {};
  // document.getElementById(`remote-player-list`).innerHTML = ``;

  // leave the channel
  await client.leave();

  // document.getElementById(`local-player-name`).textContent = ``;
  // document.getElementById(`join`).removeAttribute(`disabled`);
  // document.getElementById(`leave`).setAttribute(`disabled`, ``);
  // document.getElementById(`success-alert`).classList.remove(`show`);
  console.log(`client leaves channel success`);
}

async function subscribe(
  user: IAgoraRTCRemoteUser,
  mediaType: 'video' | 'audio',
) {
  const { uid } = user;
  // subscribe to a remote user
  await client.subscribe(user, mediaType);
  console.log(`subscribe success`);
  // if (mediaType === `video`) {
  //   const playerElement = document.createElement(`div`);
  //   document.getElementById(`remote-player-list`).append(playerElement);
  //   playerElement.outerHTML = `
  //     <div id="player-wrapper-${uid}">
  //       <p class="player-name">remoteUser(${uid})</p>
  //       <div id="player-${uid}" class="player"></div>
  //     </div>
  //   `;
  //   user.videoTrack.play(`player-${uid}`);
  // }
  if (mediaType === `audio`) {
    user.audioTrack?.play();
  }
}

async function handleUserPublished(
  user: IAgoraRTCRemoteUser,
  mediaType: 'audio' | 'video',
) {
  const id = user.uid;
  remoteUsers[id] = user;
  await subscribe(user, mediaType);
}

function handleUserUnpublished(user: IAgoraRTCRemoteUser) {
  const id = user.uid;
  delete remoteUsers[id];
  const element = document.getElementById(`player-wrapper-${id}`);
  if (element) {
    element.remove();
  }
}
