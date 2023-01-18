import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Head from 'next/head';
import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';
import Chrome from '../components/chrome';
import { Theme } from '../components/theme';
import { globalStyes } from '../styles/global.styles';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>UX Onboarding Prototype</title>
    </Head>
    <Global styles={globalStyes} />
    <Theme>
      <Chrome>
        <EuiErrorBoundary>
          <Component {...pageProps} />
        </EuiErrorBoundary>
      </Chrome>
    </Theme>
  </>
);

export default App;
