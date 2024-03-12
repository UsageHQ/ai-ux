import { ArrowUpRight } from './icons';
import Link from 'next/link';
import React from 'react';
interface RefLinkProps {
  title: string;
  href: string;
}

export const RefLink = ({ title, href }: RefLinkProps) => {
  return (
    <Link
      className='text-blue-500'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <p></p>
      {title} {}
      <span className='inline-flex'>
        <ArrowUpRight className='w-3 h-3' />
      </span>
    </Link>
  );
};
