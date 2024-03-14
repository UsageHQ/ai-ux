import { ArrowUpRight } from './icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface SampleUIProps {
  src: string;
  desc: string;
  productUrl: string;
}

export const SampleUI = ({ src, desc, productUrl }: SampleUIProps) => {
  return (
    <div className='w-full mx-auto'>
      <div className='w-full aspect-square relative rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 overflow-clip md:hover:scale-150 hover:z-20 transition-transform hover:shadow-md ease-in-out dark:shadow-neutral-800'>
        <Image src={src} fill alt={desc} className='object-contain' />
      </div>

      <Link
        className='italic text-blue-500 hover:text-blue-700'
        href={productUrl}
        target='_blank'
        rel='noopener noreferrer'
      >
        <p className='text-center mt-2'>
          {desc}{' '}
          <span className='inline-flex'>
            <ArrowUpRight className='w-3 h-3' />
          </span>
        </p>
      </Link>
    </div>
  );
};
