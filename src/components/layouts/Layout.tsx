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
});

export default function Layout({ children }: Props) {
  return (
    <ChakraProvider theme={theme}>
      <Flex as={'main'} flexDir={'column'} height={'100vh'}>
        <Header />
        <Box flexGrow={1} bg={'baseBackground'}>
          {children}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
