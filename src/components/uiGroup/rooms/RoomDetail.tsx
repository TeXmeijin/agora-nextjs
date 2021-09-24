import { roomFactory } from '@/types/room/type';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { Head } from '@/components/meta/Head';
import { ChevronLeftIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { ThemeColors } from '@/components/layouts/Layout';

type Props = {
  roomId: string;
};

function dayOfWeekAsString(dayIndex: number) {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex] || '';
}

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
      <Head title={room.title}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        fontFamily={'Libre Baskerville'}
        bgColor={'gray.800'}
        py={6}
        px={2}
        width={'100%'}
        height={'100%'}
        display={'flex'}
        flexDir={'column'}
      >
        <Container p={0}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Box p={1}>
              <ChevronLeftIcon color={'gray.400'}></ChevronLeftIcon>
            </Box>
            <Text as={'h1'} color={'gray.400'}>
              ネタバレ会議に参加する
            </Text>
            <Box width={6}></Box>
          </Flex>
          <Box
            position={'relative'}
            mt={6}
            borderRadius={8}
            overflow={'hidden'}
            p={1}
            bg={`linear-gradient(to right bottom, ${ThemeColors.brandBackground}, ${ThemeColors.brand})`}
            _before={{
              content: '""',
              display: 'block',
              width: '18px',
              height: '36px',
              borderRadius: '0 36px 36px 0',
              position: 'absolute',
              background: `linear-gradient(to bottom, ${ThemeColors.brandBackground}, #c3c322)`,
              left: '-3px',
              top: 'calc(50% - 18px)',
            }}
            _after={{
              content: '""',
              display: 'block',
              width: '15px',
              height: '30px',
              borderRadius: '0 30px 30px 0',
              position: 'absolute',
              background: '#1A202C',
              left: '-4px',
              top: 'calc(50% - 15px)',
            }}
          >
            <Box bg={'baseBackground'} borderRadius={6} overflow={'hidden'}>
              <Flex alignItems={'center'} justify={'space-between'}>
                <Box p={4}>
                  <Flex
                    border={`1px solid ${ThemeColors.brandBackground}`}
                    px={4}
                    py={1}
                  >
                    <Flex alignItems={'center'}>
                      <Text fontSize={'3xl'}>
                        {room.startDate.getMonth() + 1}
                      </Text>
                      <Text fontSize={'xl'}>/</Text>
                      <Text fontSize={'3xl'}>{room.startDate.getDate()}</Text>
                      <Text fontSize={'xl'} ml={1}>
                        ({dayOfWeekAsString(room.startDate.getDay())})
                      </Text>
                      <Text ml={2} mt={2}>
                        {room.startDate.getFullYear()}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex justifyContent={'center'} mt={3}>
                    <Text fontWeight={'bold'} fontSize={['xl', 'xl', '3xl']}>
                      {room.title} / {room.storyTitle}
                    </Text>
                  </Flex>
                </Box>
                <Box overflow={'hidden'}>
                  <img
                    src={'https://m.media-amazon.com/images/I/51QS53ebr1S.jpg'}
                    width={130}
                    height={200}
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
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
                  このネタバレ会議に参加予約する
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};
