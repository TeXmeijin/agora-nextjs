import faker from 'faker';
faker.locale = 'ja';
import { Factory } from '@/types/shared';

/**
 * 部屋の一覧
 */
export type RoomListItem = {
  id: string;
  title: string;
  // 部屋の話題にしたいストーリーのタイトル
  storyTitle: string;
  description: string;
  startDate: Date;
  // 部屋の話題になっているトピックの作品がAmazon上で販売されているものの場合、アフィリエイトリンクを貼ることでサムネをつくる
  // e.g. <a target="_blank"  href="https://www.amazon.co.jp/gp/product/B093L12XJL/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B093L12XJL&linkCode=as2&tag=meijin04-22&linkId=2b75b10ac019d77be354836e541f8dad"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B093L12XJL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=meijin04-22" ></a>
  storyImageTag: string;
};

export const roomFactory: Factory<RoomListItem> = () => {
  // 日本語
  return {
    id: faker.random.word(),
    title: '呪術廻戦',
    storyTitle: '16巻',
    description:
      '真人を手中に収め、自らの計画の一端を語り出す夏油。渋谷事変の最終局面に呪術師達が集うなかで、脹相は夏油の亡骸に寄生する“黒幕”の正体に気付くが!?　事変の終焉が招く破滅と混沌、世界は急変する――…!!',
    startDate: faker.date.soon(),
    storyImageTag:
      '<a target="_blank"  href="https://www.amazon.co.jp/gp/product/B093L12XJL/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B093L12XJL&linkCode=as2&tag=meijin04-22&linkId=2b75b10ac019d77be354836e541f8dad"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B093L12XJL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=meijin04-22" ></a>',
  };
};
