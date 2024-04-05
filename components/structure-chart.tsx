import { ChevronDoubleDown, ChevronDoubleRight } from './icons';

import Link from 'next/link';
import React from 'react';

export const StructureChart = () => {
  return (
    <div className='w-full flex flex-col border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-8 gap-y-8 rounded-2xl mt-8'>
      <h2 className='text-2xl font-bold text-center text-neutral-900 dark:text-neutral-100'>
        Main loop of AI interactions
      </h2>
      <div className='flex justify-center items-center flex-wrap md:flex-nowrap'>
        <Block href='/getting-context'>Getting Context</Block>

        {/* <ChevronDoubleRight className='col-span-1 w-6 h-6 shrink-0 mx-2' /> */}
        <Connector />

        <Block href='/intermediary-processing'>Intermediary Processing</Block>
        {/* <ChevronDoubleRight className='col-span-1 w-6 h-6 shrink-0 mx-2' /> */}
        <Connector />
        <Block href='/presentation-of-results'>Presenting Results</Block>
        {/* <ChevronDoubleRight className='col-span-1 w-6 h-6 shrink-0 mx-2' /> */}
      </div>
      <div className='flex flex-col gap-4 justify-center items-center  border border-dashed rounded-lg p-4 border-neutral-300 dark:border-neutral-600'>
        <div className='flex justify-end items-center gap-4 w-full'>
          <Block href='/version-control'>Version Control</Block>
          <Block href='/monetization'>Monetization</Block>
          <Block href='/usage-control'>Usage control</Block>
        </div>
        <p className='dark:text-neutral-300 text-neutral-700 font-light italic'>
          Supportive building block to scale and grow your products
        </p>
      </div>
    </div>
  );
};

const Block = ({
  children,

  href,
}: {
  children: React.ReactNode;

  href: string;
}) => {
  return (
    <Link
      className={`w-full border rounded-xl dark:border-neutral-700 border-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:shadow-lg transition-all duration-300 ease-in-out`}
      href={href}
    >
      <h3 className='text-lg font-medium p-4 text-center text-neutral-800 dark:text-neutral-100 text-nowrap'>
        {children}
      </h3>
    </Link>
  );
};

const Connector = () => {
  return (
    <>
      <ChevronDoubleRight className='col-span-1 w-6 h-6 shrink-0 mx-2 hidden md:block' />
      <ChevronDoubleDown className='col-span-1 w-6 h-6 shrink-0 my-2 md:hidden' />
    </>
  );
};
