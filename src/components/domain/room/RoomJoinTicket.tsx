import { RoomListItem } from '@/types/room/type';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ThemeColors } from '@/components/layouts/Layout';
import { useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

type Props = {
  room: RoomListItem;
};

function dayOfWeekAsString(dayIndex: number) {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex] || '';
}

export const RoomJoinTicket = ({ room }: Props) => {
  const dayOfWeek = useMemo(() => {
    return dayOfWeekAsString(room.startDate.getDay());
  }, [room]);

  const time = useMemo(() => {
    return dayjs(room.startDate).format('hh:mm');
  }, [room]);

  return (
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
              flexDir={'column'}
            >
              <Flex alignItems={'center'}>
                <Text fontSize={'3xl'}>{room.startDate.getMonth() + 1}</Text>
                <Text fontSize={'xl'}>/</Text>
                <Text fontSize={'3xl'}>{room.startDate.getDate()}</Text>
                <Text fontSize={'xl'} ml={1}>
                  ({dayOfWeek})
                </Text>
                <Text ml={2} mt={2}>
                  {room.startDate.getFullYear()}
                </Text>
              </Flex>
              <Flex justifyContent={'center'}>
                <Text fontSize={'xl'}>{time}</Text>
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
  );
};
