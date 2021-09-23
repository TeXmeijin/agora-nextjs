import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import { Room } from '@/types/room/type';
import { motion } from 'framer-motion';
import { DateText } from '@/components/uiParts/DateText';
import { CalendarIcon } from '@chakra-ui/icons';
export const MotionBox = motion<BoxProps>(Box);

type Props = {
  room: Room;
};

export const RoomListItem = ({ room }: Props) => {
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
    >
      <Flex justifyContent={'space-between'}>
        <Box>
          <Flex alignItems={'center'}>
            <CalendarIcon color={'brand'} />
            <DateText
              ml={2}
              fontWeight={'bold'}
              color={'brand'}
              fontSize={'sm'}
              date={room.startDate}
            />
          </Flex>
          <Text mt={3} fontWeight={'bold'} fontSize={'xl'}>
            {room.title}
          </Text>
          <Text mt={1} color={'gray'} fontSize={'sm'}>
            {room.description}
          </Text>
        </Box>
        <Box>
          <div dangerouslySetInnerHTML={{ __html: room.storyImageTag }}></div>
        </Box>
      </Flex>
    </MotionBox>
  );
};
