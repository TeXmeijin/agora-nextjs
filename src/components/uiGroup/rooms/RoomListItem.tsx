import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import type { RoomListItem as RoomListItemType } from '@/types/room/type';
import { motion } from 'framer-motion';
import { RoomStartDate } from '@/components/domain/room/RoomStartDate';
import { pagesPath } from '@/lib/$path';

export const MotionBox = motion<BoxProps>(Box);

type Props = {
  room: RoomListItemType;
};

export const RoomListItem = ({ room }: Props) => {
  const onClick = () => {
    location.replace(`/rooms/${room.id}`);
  };

  return (
    <MotionBox
      bg="white"
      p={4}
      drag="x"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      borderRadius={8}
      boxShadow={'lg'}
      cursor={'pointer'}
      onClick={onClick}
    >
      <Flex justifyContent={'space-between'}>
        <Box>
          <RoomStartDate startDate={room.startDate} />
          <Text mt={3} fontWeight={'bold'} fontSize={'xl'}>
            {room.title}
          </Text>
          <Text mt={1} color={'gray'} fontSize={'sm'}>
            {room.description}
          </Text>
        </Box>
        <Box>
          <div dangerouslySetInnerHTML={{ __html: room.storyImageTag }} />
        </Box>
      </Flex>
    </MotionBox>
  );
};
