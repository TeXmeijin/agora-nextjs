import { Box, Container } from '@chakra-ui/react';
import Layout from '@/components/layouts/Layout';
import { roomFactory } from '@/types/room/type';
import { RoomListItem } from '@/components/uiGroup/rooms/RoomListItem';

const Index = () => {
  const rooms = (() => {
    const rooms = [];
    for (let i = 0; i < 10; i++) {
      rooms.push(roomFactory());
    }
    return rooms;
  })();

  return (
    <Layout>
      <Container maxW={'md'}>
        <Box pa={8}>
          {rooms.map((room) => (
            <Box key={room.id} mt={4}>
              <RoomListItem room={room}></RoomListItem>
            </Box>
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default Index;
