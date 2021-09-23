import faker from 'faker';

export type RoomListItem = {
  id: string;
  title: string;
  storyTitle: string;
  description: string;
  startDate: Date;
  // e.g. <a target="_blank"  href="https://www.amazon.co.jp/gp/product/B093L12XJL/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B093L12XJL&linkCode=as2&tag=meijin04-22&linkId=2b75b10ac019d77be354836e541f8dad"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B093L12XJL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=meijin04-22" ></a>
  storyImageTag: string;
};

export type Factory<T> = (arg?: Partial<T>) => T;

export const roomFactory: Factory<RoomListItem> = () => {
  faker.locale = 'ja';
  return {
    id: faker.random.word(),
    title: faker.random.word(),
    storyTitle: faker.random.word(),
    description: faker.random.words(),
    startDate: faker.date.soon(),
    storyImageTag:
      '<a target="_blank"  href="https://www.amazon.co.jp/gp/product/B093L12XJL/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B093L12XJL&linkCode=as2&tag=meijin04-22&linkId=2b75b10ac019d77be354836e541f8dad"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B093L12XJL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=meijin04-22" ></a>',
  };
};
