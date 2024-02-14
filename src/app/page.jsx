'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image src='/hero.png' alt='' fill className='object-contain' />
        </div>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
          {/* TITLE */}
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-indigo-400 inline-block text-transparent bg-clip-text'>
            Welcome to my Portfolio
          </h1>
          {/* DESC */}
          <p className='md:text-xl italic'>
            Welcome to my digital playground! Explore my creations and dive into
            the worlds I've built through code and design.
          </p>
          {/* BUTTONS */}
          <div className='w-full flex gap-4'>
            {/* When I put those Links here give me an error */}
            <a
              href='/portfolio'
              className='p-4 rounded-lg ring-1 ring-black bg-black text-white'
            >
              View My Work
            </a>
            <a href='/contact' className='p-4 rounded-lg ring-1 ring-black'>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
