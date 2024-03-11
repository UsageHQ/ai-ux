import { Callout } from 'nextra/components';
import { Crisp } from 'crisp-sdk-web';
import { Promotion } from './promotion';
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      {children}
      <Promotion>
        <strong>Contact us </strong>
        to build your next product or to get consulting on your current project.
      </Promotion>
    </main>
  );
};

export default Layout;
