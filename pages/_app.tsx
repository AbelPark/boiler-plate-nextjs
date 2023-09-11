import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/types/layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  return <Component {...pageProps} />;
}
