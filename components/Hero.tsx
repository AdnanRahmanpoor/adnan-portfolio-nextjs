'use client';

import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/mainIconsdark.svg';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { LoadReveal } from '@/utils/motion';

const Hero = () => {
  const text = Typewriter({
    words: [' ', ' ', 'HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'Javascript', 'ReactJS', 'NextJS'],
    loop: 999,
    typeSpeed: 60,
    deleteSpeed: 30
  });

  return (
    <section className='flex flex-col lg:flex-row landscape:flex-row  w-full h-screen'>
      <div className='flex flex-row items-center justify-center w-full lg:pl-40 pl-16 pt-20 lg:pt-0 landscape:pt-0'>
        <div className='h-full w-full flex flex-col landscape:flex-col justify-center m-auto text-start'>
          <LoadReveal duration={1} delay={1}>
            <h1 className='text-gray-600 text-3xl'>Welcome</h1>
          </LoadReveal>
          <div className='flex flex-col w-auto h-auto'>
            <LoadReveal duration={2} delay={2}>
              <h3 className='text-gray-100 text-5xl font-black'>
                I&apos;m Adnan <br /> Rahmanpoor
              </h3>
            </LoadReveal>
            <LoadReveal duration={2} delay={2.8}>
              <p className='text-purple-300'>Web Developer</p>
            </LoadReveal>
            <LoadReveal duration={2} delay={3.5}>
              <p className='text-emerald-600 text-3xl opacity-25 font-black pt-8'>
                {text}
                <span>
                  <Cursor cursorStyle='|' cursorColor='green' />
                </span>
              </p>
            </LoadReveal>
          </div>
        </div>
      </div>
      <div className='justify-center items-center pt-5 m-auto mx-10 md:pr-20'>
        <LoadReveal duration={0.6} delay={1}>
          <Image src={heroImage} alt='web dev' />
        </LoadReveal>
      </div>
    </section>
  );
};

export default Hero;
