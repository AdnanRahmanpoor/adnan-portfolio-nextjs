import React from 'react';

const About = () => {
  return (
    <section className='flex flex-col md:flex-row w-full h-screen bg-gradient-to-l from-slate-950  via-cyan-950 to-gray-950'>
      <div className='flex flex-col items-center justify-start w-full pt-6 mx-auto'>
        <h1 className='text-6xl text-neutral-500'>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
          ducimus corrupti. Asperiores corporis, libero vitae consectetur error
          fugiat accusamus quod dignissimos, aspernatur id consequuntur porro
          rem maxime, reprehenderit earum doloremque! Explicabo, atque corporis.
          Officiis fuga mollitia eveniet fugit rem excepturi sed in molestias ut
          repellat blanditiis eaque tempora sit eius, harum dolorem distinctio
          voluptate pariatur corporis corrupti expedita voluptas est?
        </p>
      </div>
    </section>
  );
};

export default About;
