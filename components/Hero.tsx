'use client';

import Image from 'next/image';
import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const text = Typewriter({
    words: ['HTML', 'CSS', 'Javascript', 'ReactJS', 'NextJS'],
    loop: 999,
    typeSpeed: 80,
  });

  return (
    <section className='flex flex-col md:flex-row w-full h-screen bg-slate-950'>
      <div className='flex flex-row items-center justify-center w-full md:pl-40 pl-20'>
        <div className='h-full w-full flex flex-col justify-start m-auto text-start mt-20 md:mt-40'>
          <h1 className='text-gray-200 text-3xl'>Welcome</h1>
          <div className='flex flex-col w-auto h-auto'>
            <h3 className='text-red-500 text-5xl font-black'>I&apos;m Name</h3>
            <p className='text-pink-300'>Web Developer</p>
            <p className='text-emerald-300 text-3xl opacity-25 font-black mt-10'>
              {text}
              <span>
                <Cursor cursorStyle='|' cursorColor='red' />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex justify-center items-center mt-5'>
        <Image
          src='/hero-image.png'
          alt='laptop web design'
          width={450}
          height={450}
        />
      </div>
    </section>
  );
};

export default Hero;
