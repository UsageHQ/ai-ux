import { ArrowUpRight, Close } from './icons';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface SampleUIProps {
  appName?: string;
  src: string;
  desc: string;
  productUrl: string;
}

export const SampleUI = ({
  src,
  desc,
  productUrl,
  appName = 'App',
}: SampleUIProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className='w-full mx-auto cursor-pointer'
        onClick={() => setIsOpen(true)}
      >
        <div className='w-full aspect-video relative rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 overflow-clip transition-transform hover:shadow-md ease-in-out dark:shadow-neutral-800'>
          <Image src={src} fill alt={desc} className='object-contain' />
        </div>

        <p className='text-center mt-2 w-full font-medium'>{appName}</p>
      </div>
      <ExampleDialog
        isOpen={isOpen}
        closeDialog={() => setIsOpen(false)}
        title={appName}
        link={productUrl}
      >
        <div className='w-full mx-auto flex-col flex items-center gap-4 h-full overflow-auto'>
          <div className='w-full aspect-square md:aspect-[4/3] lg:aspect-[3/2] xl:aspect-video relative rounded-2xl  overflow-clip transition-transform ease-in-out dark:shadow-neutral-800'>
            <Image
              src={src}
              fill
              alt={desc}
              className='object-contain rounded-xl'
            />
          </div>
          <div className='w-full flex justify-between items-center gap-8 max-w-4xl'>
            <p className='w-full'>{desc}</p>
          </div>
        </div>
      </ExampleDialog>
    </>
  );
};

interface ExampleDialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  title: string;
  children: React.ReactNode;
  link: string;
}
const ExampleDialog = ({
  isOpen,
  closeDialog,
  title,
  children,
  link,
}: ExampleDialogProps) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-[9999999] overflow-y-auto w-full h-screen'
        open={isOpen}
        onClose={closeDialog}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-30'
          leave='ease-in duration-200'
          leaveFrom='opacity-30'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
        </Transition.Child>
        <div className='flex items-center justify-center h-screen w-full p-2'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='relative w-full h-full p-6 mx-auto my-8 rounded-2xl bg-white dark:bg-neutral-900'>
              <div className='w-full flex justify-between items-center'>
                <Dialog.Title className='text-lg font-bold text-neutral-900 dark:text-neutral-100'>
                  {title}
                </Dialog.Title>
                <div className='flex items-center gap-4'>
                  <Link
                    href={link}
                    className='w-full max-w-fit py-2 px-4 text-center rounded-full border border-neutral-300 dark:border-neutral-700 flex gap-1 items-center justify-center '
                    target='_blank'
                    referrerPolicy='no-referrer'
                    rel='noreferrer noopener'
                    // onClick={() => setIsOpen(false)}
                  >
                    Visit Site
                    <ArrowUpRight className='w-4 h-4 inline stroke-2' />
                  </Link>
                  <div
                    className='w-full max-w-fit p-2 text-center rounded-full border border-neutral-300 dark:border-neutral-700 flex gap-1 items-center justify-center '
                    onClick={closeDialog}
                  >
                    <Close className='w-6 h-6 text-slate-500 cursor-pointer dark:text-neutral-300' />
                  </div>
                </div>
              </div>
              <div className='mt-4'>{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
