import { Layout } from '@/components/Layout';
import 'reset-css';
import { AppPropsWithLayout } from '@/types/layout';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { SessionProvider } from 'next-auth/react';
import { ReactElement, useState } from 'react';

// 타임존 세팅
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');
dayjs.locale('ko');

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
