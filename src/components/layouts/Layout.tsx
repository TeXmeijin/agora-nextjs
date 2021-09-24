import { Header } from '@/components/layouts/Header';
import { ReactNode } from 'react';
import { Box, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export const ThemeColors = {
  brand: '#d51',
  brandBackground: '#dd2',
  baseBackground: '#fdfde5',
} as const;

const theme = extendTheme({
  colors: ThemeColors,
  fonts: {
    body: 'Libre Baskerville, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
  },
  initialColorMode: 'dark',
  useSystemColorMode: false,
});

export default function Layout({ children }: Props) {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        as={'main'}
        flexDir={'column'}
        minH={'100vh'}
        bgColor={'gray.800'}
        width={'100%'}
        display={'flex'}
      >
        <Header />
        <Box flexGrow={1}>{children}</Box>
      </Flex>
    </ChakraProvider>
  );
}
