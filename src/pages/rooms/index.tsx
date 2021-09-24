import { Box, Container, Heading } from '@chakra-ui/react';
import Layout from '@/components/layouts/Layout';
import { roomFactory } from '@/types/room/type';
import { MotionBox } from '@/components/uiGroup/rooms/RoomListItem';
import { Head } from '@/components/meta/Head';
import { RoomJoinTicket } from '@/components/domain/room/RoomJoinTicket';
import NextLink from 'next/link';

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
      <Head title={'部屋一覧'}></Head>
      <Container maxW={'md'} p={0}>
        <Box py={6} px={2}>
          <Heading color={'brandBackground'} fontSize={'2xl'}>
            気になるエンタメ会議を探す
          </Heading>
          <Box>
            {rooms.map((room) => (
              <NextLink href={`/rooms/${room.id}`} key={room.id}>
                <MotionBox
                  drag="x"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  borderRadius={8}
                  cursor={'pointer'}
                >
                  <RoomJoinTicket room={room} />
                </MotionBox>
              </NextLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Index;
