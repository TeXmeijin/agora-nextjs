import { Header } from '@/components/layouts/Header';
import { ReactNode } from 'react';
import { Box, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

const theme = extendTheme({
  colors: {
    brand: '#d51',
    brandBackground: '#dd2',
  },
});

export default function Layout({ children }: Props) {
  return (
    <ChakraProvider theme={theme}>
      <Flex as={'main'} flexDir={'column'} height={'100vh'}>
        <Header />
        <Box flexGrow={1} bg={'#fdfde5'}>
          {children}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
