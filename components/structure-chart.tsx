import { ChevronDoubleDown, ChevronDoubleRight } from './icons';

import Link from 'next/link';
import React from 'react';

export const StructureChart = () => {
  return (
    <div className='w-full flex flex-col border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-8 gap-y-8 rounded-2xl mt-8'>
      <h2 className='text-2xl font-bold text-center text-neutral-900 dark:text-neutral-100'>
        Natural progression of AI interactions
      </h2>
      <div className='flex justify-center items-center flex-wrap md:flex-nowrap'>
        <Block href='/context-building'>Context Building</Block>

        {/* <ChevronDoubleRight className='col-span-1 w-6 h-6 shrink-0 mx-2' /> */}
        <Connector />

        <Block href='/intermediary-processing'>Intermediary Processing</Block>
        {/* <ChevronDoubleRight className='col-span-1 w-6 h-6 shrink-0 mx-2' /> */}
        <Connector />
        <Block href='/presentation-of-results'>Results presentation</Block>
        {/* <ChevronDoubleRight className='col-span-1 w-6 h-6 shrink-0 mx-2' /> */}
        <Connector />
        <Block href='/refining-results'>Results refinements</Block>
      </div>
      <div className='flex justify-end items-center gap-8'>
        <Block href='/monetization'>Monetization</Block>
        <Block href='/usage-control'>Usage control</Block>
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
      <h3 className='text-lg font-medium p-4 text-center text-neutral-800 dark:text-neutral-100'>
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
