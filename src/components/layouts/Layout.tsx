import { Header } from '@/components/layouts/Header';
import { ReactNode } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

const theme = extendTheme({
  colors: {
    brand: {
      100: '#d51',
    },
    brandBackground: {
      100: '#dd2',
    },
  },
});

export default function Layout({ children }: Props) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <main>{children}</main>
    </ChakraProvider>
  );
}
