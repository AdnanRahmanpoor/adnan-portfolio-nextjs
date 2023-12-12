'use client';

import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/hero-image.png'
import { Typewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const text = Typewriter({
    words: ['HTML', 'CSS', 'Javascript', 'ReactJS', 'NextJS'],
    loop: 999,
    typeSpeed: 80,
  });

  return (
    <section className='flex flex-col md:flex-row w-full h-screen bg-gradient-to-r from-slate-950  via-cyan-950 to-gray-950'>
      <div className='flex flex-row items-center justify-center w-full md:pl-40 pl-20 pt-20 md:pt-0'>
        <div className='h-full w-full flex flex-col justify-center m-auto text-start'>
          <h1 className='text-gray-200 text-3xl'>Welcome</h1>
          <div className='flex flex-col w-auto h-auto'>
            <h3 className='text-red-500 text-5xl font-black'>I&apos;m Name</h3>
            <p className='text-pink-300'>Web Developer</p>
            <p className='text-emerald-300 text-3xl opacity-25 font-black pt-8'>
              {text}
              <span>
                <Cursor cursorStyle='|' cursorColor='yellow' />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='justify-center items-center pt-5 m-auto mx-20 md:mx-10 md:pr-20'>
        <Image
          src={heroImage}
          alt='laptop web design'
        />
      </div>
    </section>
  );
};

export default Hero;
