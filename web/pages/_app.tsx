import '../styles/globals.css';
import dscegov from 'cegov-antd';
import 'cegov-antd/dist/index.css';

import pt_BR from 'antd/lib/locale/pt_BR';

import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';

const { Header, Acessibility } = dscegov();

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <ConfigProvider locale={pt_BR}>
      <Acessibility accessibility/>
      <Component {...pageProps} />;
    </ConfigProvider>
  );
}
export default MyApp;
