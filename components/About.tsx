import { LoadReveal } from '@/utils/motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section className='flex flex-col md:flex-row w-full h-auto mb-20'>
      <div className='flex flex-col items-center justify-start w-full pt-6 mx-auto px-5 lg:px-20'>
        <h1 className='text-5xl text-neutral-300 font-black'>About Me</h1>

        {/* Card */}
        <LoadReveal duration={2} delay={1}>
          <div className='relative block overflow-hidden rounded-lg border bg-slate-900 bg-opacity-40  border-gray-100 p-4 mt-10  lg:p-8'>
            <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

            <div className='sm:flex sm:justify-between sm:gap-4'>
              <div>
                <h2 className='text-2xl font-bold text-red-400 sm:text-xl'>
                  Name Name
                </h2>

                <p className='mt-1 text-sm font-medium text-gray-600'>
                  Web Developer
                </p>
              </div>

              {/* <div className='hidden sm:block sm:shrink-0'>
                <Image
                  alt=''
                  src=''
                  className='h-16 w-16 rounded-lg object-cover shadow-sm'
                  width={64}
                  height={64}
                />
              </div> */}
            </div>

            <div className='mt-4'>
              <p className='max-w-[60ch] text-md text-gray-300'>
                Hey there! I&apos;m a self-taught (& still learning) web
                developer who loves turning ideas into cool digital stuff. I
                enjoy creating websites and everyday I learn new tricks to make
                them look good and work smoothly.
              </p>{' '}
              <p className='max-w-[60ch] text-md text text-gray-300 mt-3'>
                For web development, I started with learning the basics, HTML,
                CSS and Javascript. I use{' '}
                <span className='text-purple-500'>Bootstrap 5</span> and{' '}
                <span className='text-sky-400'>TailwindCSS</span> to make the UI
                creation faster and easier. I started learning{' '}
                <span className='text-blue-700'>ReactJS</span> and recently{' '}
                <span className='bg-black'>NextJS</span>, which I&apos;ve used to build{' '}
                <span className='font-bold'>this portfolio site</span> & several
                other in progress projects. I&apos;m focusing on building simple
                landing pages for now, & build better and bigger projects
                overtime as I gain more experience.
              </p>{' '}
              <p className='max-w-[60ch] text-md text-gray-300 mt-3'>
                I also have decent experience in Windows OS and Linux systems. I
                also code in <span className='text-sky-500'>Py</span>
                <span className='text-yellow-400'>thon</span> &{' '}
                <span className='text-blue-700'>R</span> from time to time and
                learn Data Analysis as well.
              </p>
            </div>
          </div>
        </LoadReveal>
      </div>
    </section>
  );
};

export default About;
