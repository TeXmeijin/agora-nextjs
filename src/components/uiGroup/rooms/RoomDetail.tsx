import { roomFactory } from '@/types/room/type';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { Head } from '@/components/meta/Head';
import { ChevronLeftIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { RoomJoinTicket } from '@/components/domain/room/RoomJoinTicket';
import NextLink from 'next/link';
import { serviceInfo } from '@/packages/service/serviceInfo';

type Props = {
  roomId: string;
};

/**
 * 部屋詳細ページ
 *
 * このページはSNSでシェアされるページ
 * 表示すべき情報と優先順位を決める
 *
 * ・開催日付
 * ・開催時間（10分固定のつもりだが書いてあったほうがいいかと）
 * ・話す作品名
 * ・その作品のイメージ画像
 * ・話す話数または巻数
 * ・（ログインして）参加予約するボタン（予約するとメールでお知らせします）
 * ・※現在開催時間中の場合は、いますぐ参加するボタンになっている
 * ・※現在開催中の場合は、現在参加中の人数とアイコンと名前が表示されている
 * ・※現在予約受付中の場合は、現在予約中の人数とアイコンと名前が表示されている
 *
 * →参加人数が2名限定でもいいかも。一度に通話できるのは2名だけど、何組でも時間内に実現できる感じ
 *
 * ・どういう手段で通話するか（時間になるとこのサイト上で通話ができます）
 *
 * @param props
 * @constructor
 */
export const RoomDetail = (props: Props) => {
  const room = roomFactory();
  return (
    <>
      <Head title={room.title}></Head>
      <Box py={6} px={2}>
        <Container p={0}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <NextLink href={'/rooms'}>
              <Box p={2} cursor={'pointer'}>
                <ChevronLeftIcon color={'gray.400'}></ChevronLeftIcon>
              </Box>
            </NextLink>
            <Text as={'h1'} color={'gray.400'}>
              {serviceInfo.name}に参加する
            </Text>
            <Box width={6}></Box>
          </Flex>
          <RoomJoinTicket room={room}></RoomJoinTicket>
          <Box>
            <Flex mt={4} flexDir={'column'}>
              <Flex justifyContent={'center'} alignItems={'center'} mt={2}>
                <WarningTwoIcon color={'orange'}></WarningTwoIcon>
                <Text ml={1} fontSize={'xs'} color={'gray.100'}>
                  {room.title} / {room.storyTitle}
                  をすでに見た方だけご参加ください
                </Text>
              </Flex>
              <Flex mt={2}>
                <Button isFullWidth colorScheme={'orange'} size={'lg'}>
                  この{serviceInfo.name}に参加予約する
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};
