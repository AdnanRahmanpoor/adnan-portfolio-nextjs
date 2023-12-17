'use client';

import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/mainIconsdark.svg';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { LoadReveal } from '@/utils/motion';

const Hero = () => {
  const text = Typewriter({
    words: [' ','HTML', 'CSS', 'Javascript', 'ReactJS', 'NextJS'],
    loop: 999,
    typeSpeed: 80,
  });

  return (
    <section className='flex flex-col lg:flex-row w-full h-screen'>
      <div className='flex flex-row items-center justify-center w-full lg:pl-40 pl-20 pt-20 lg:pt-0'>
        <div className='h-full w-full flex flex-col justify-center m-auto text-start'>
          <h1 className='text-gray-200 text-3xl'>Welcome</h1>
          <div className='flex flex-col w-auto h-auto'>
            <LoadReveal duration={2} delay={2}>
              <h3 className='text-red-500 text-5xl font-black'>
                I&apos;m Name
              </h3>
            </LoadReveal>
            <LoadReveal duration={2} delay={2.8}>
              <p className='text-pink-300'>Web Developer</p>
            </LoadReveal>
            <LoadReveal duration={2} delay={3.5}>
              <p className='text-emerald-300 text-3xl opacity-25 font-black pt-8'>
                {text}
                <span>
                  <Cursor cursorStyle='|' cursorColor='yellow' />
                </span>
              </p>
            </LoadReveal>
          </div>
        </div>
      </div>
      <div className='justify-center items-center pt-5 m-auto mx-10 md:pr-20'>
        <LoadReveal duration={0.6} delay={1}>
          <Image src={heroImage} alt='web dev'/>
        </LoadReveal>
      </div>
    </section>
  );
};

export default Hero;
