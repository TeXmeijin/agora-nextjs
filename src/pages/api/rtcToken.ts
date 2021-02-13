import { NextApiRequest, NextApiResponse } from 'next';

const { RtcTokenBuilder, RtcRole } = require(`agora-access-token`);

// Fill the appID and appCertificate key given by Agora.io
const appID = process.env.APP_ID;
const appCertificate = process.env.APP_CERTIFICATE;

// token expire time, hardcode to 3600 seconds = 1 hour
const expirationTimeInSeconds = 3600;
const role = RtcRole.PUBLISHER;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req: NextApiRequest, res: NextApiResponse) => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
  const { channelName } = req.query;
  // use 0 if uid is not specified
  const uid = req.query.uid || 0;
  if (!channelName) {
    return res.status(400).json({ error: `channel name is required` });
  }

  const key = RtcTokenBuilder.buildTokenWithUid(
    appID,
    appCertificate,
    channelName,
    uid,
    role,
    privilegeExpiredTs,
  );

  return res.json({ key });
};
