import Image, { StaticImageData } from 'next/image';

import Link from 'next/link';
import React from 'react';

interface IntroCardProps {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
}

export function IntroCard({ title, description, href, image }: IntroCardProps) {
  return (
    <Link
      href={href}
      className='flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-clip'
    >
      <div className='relative w-full aspect-video bg-neutral-50 dark:bg-neutral-800'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover'
          sizes='100%'
        />
      </div>
      <div className='w-full flex flex-col p-4'>
        <p className='text-lg font-bold'>{title}</p>
        <p className='m-0 text-neutral-500'>{description}</p>
      </div>
    </Link>
  );
}
