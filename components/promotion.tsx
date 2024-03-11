'use client';

import { Callout } from 'nextra/components';
import { Crisp } from 'crisp-sdk-web';
import React from 'react';

export const Promotion = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    Crisp.configure('3cc6bbeb-8679-4c21-aa95-0cdf5ce2d3be');
  }, []);

  return (
    <div
      onClick={() => (typeof window === 'undefined' ? null : Crisp.chat.open())}
      className='cursor-pointer'
    >
      <Callout type='info'>{children}</Callout>
    </div>
  );
};
