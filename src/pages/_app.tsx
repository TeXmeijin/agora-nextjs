import { AppProps } from 'next/app';
import '@/styles/global.css';
import { defaultTheme, Provider } from '@adobe/react-spectrum';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider theme={defaultTheme}>
      <Component {...pageProps} />
    </Provider>
  );
}
