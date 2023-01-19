import React from 'react';
import { EuiText } from '@elastic/eui';

const Home = () => {
  return (
    <div
      style={{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}>
      <EuiText size="m">
        <h3 style={{ fontWeight: 600 }}>
          <span role="img" aria-label="emoji">
            🥸
          </span>{' '}
          This prototype has&nbsp;
          <a href="https://platform-onboarding.vercel.app/">moved</a>.
        </h3>
      </EuiText>
    </div>
  );
};

export default Home;
