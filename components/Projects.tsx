import React from 'react'

const Projects = () => {
  // Taken from https://merakiui.com/components/marketing/portfolio

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white'>
          Our Portfolio
        </h1>

        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2'>
          <div className='flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url(/hero-image.png)]'>
            <div className='w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60'>
              <h2 className='mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white'>
                Best website collections
              </h2>
              <p className='mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 '>
                Website
              </p>
            </div>
          </div>

          <div className='flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url(/hero-image.png)]'>
            <div className='w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60'>
              <h2 className='mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white'>
                Block of Ui kit collections
              </h2>
              <p className='mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 '>
                Ui kit
              </p>
            </div>
          </div>

          <div className='flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-[url(/hero-image.png)]'>
            <div className='w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60'>
              <h2 className='mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white'>
                Ton’s of mobile mockup
              </h2>
              <p className='mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 '>
                Mockups
              </p>
            </div>
          </div>

          <div className='flex items-end overflow-hidden bg-cover rounded-lg h-96  bg-[url(/hero-image.png)]'>
            <div className='w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60'>
              <h2 className='mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white'>
                Huge collection of animation
              </h2>
              <p className='mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 '>
                Animation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects