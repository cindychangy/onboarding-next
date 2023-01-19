import React from 'react';
import { EuiText } from '@elastic/eui';

const NotFoundPage = () => {
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
          🥸 This prototype has&nbsp;
          <a href="https://platform-onboarding.vercel.app/">moved</a>.
        </h3>
      </EuiText>
    </div>
  );
};

export default NotFoundPage;
