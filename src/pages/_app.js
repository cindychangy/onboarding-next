import Head from 'next/head';
import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';
import { globalStyes } from '../styles/global-styles';
import '@elastic/eui/dist/eui_theme_light.css';
import GuideContextProvider from '../context/guide';

import { EuiProvider } from '@elastic/eui';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>UX Onboarding Prototype</title>
    </Head>
    <Global styles={globalStyes} />
    <EuiProvider colorMode="light">
      <EuiErrorBoundary>
        <GuideContextProvider>
          <Component {...pageProps} />
        </GuideContextProvider>
      </EuiErrorBoundary>
    </EuiProvider>
  </>
);

export default App;
