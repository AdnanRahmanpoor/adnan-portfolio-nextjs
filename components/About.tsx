import { LoadReveal } from '@/utils/motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section className='flex flex-col md:flex-row w-full h-screen bg-gradient-to-l from-slate-950  via-cyan-950 to-gray-950'>
      <div className='flex flex-col items-center justify-start w-full pt-6 mx-auto px-20'>
        <h1 className='text-6xl text-neutral-500'>About Me</h1>

        {/* Card */}
        <LoadReveal duration={2} delay={2}>
          <Link
            href='#'
            className='relative block overflow-hidden rounded-lg border bg-slate-700  border-gray-100 p-4 mt-10 sm:p-6 lg:p-8'
          >
            <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

            <div className='sm:flex sm:justify-between sm:gap-4'>
              <div>
                <h3 className='text-lg font-bold text-gray-900 sm:text-xl'>
                  Web Developer
                </h3>

                <p className='mt-1 text-xs font-medium text-gray-600'>
                  By John Doe
                </p>
              </div>

              <div className='hidden sm:block sm:shrink-0'>
                <Image
                  alt=''
                  src=''
                  className='h-16 w-16 rounded-lg object-cover shadow-sm'
                  width={64}
                  height={64}
                />
              </div>
            </div>

            <div className='mt-4'>
              <p className='max-w-[40ch] text-sm text-gray-500'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                velit illum provident a, ipsa maiores deleniti consectetur nobis
                et eaque.
              </p>
            </div>
          </Link>
        </LoadReveal>
      </div>
    </section>
  );
};

export default About;
