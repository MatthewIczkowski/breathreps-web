import React from 'react'
import Image from 'next/image';
import logo from '@/assets/logo.png';
import home from '@/assets/home.png';

const HomePage = () => {
  return (
    <div className='pt-6 min-h-dvh flex flex-col justify-between items-center xl:px-50'>
        <h1 className='text-blue-500 text-3xl xl:text-6xl font-bold'>BreathReps</h1>
        <div className='flex flex-col gap-2 sm:flex-row items-center justify-center'>
          <Image src={logo} alt='BreathReps Logo' className='w-1/2 h-1/2 xl:hidden' />
          <Image src={home} alt='BreathReps Logo' className='w-1/4 h-1/4 xl:block hidden' />
          <div className='flex flex-col gap-4 items-center'>
            <h3 className='text-gray-700 text-2xl xl:text-4xl font-bold text-center text-balance'> The free, simple, and effective way to improve your breathing fitness!</h3>
            <button className='mt-6 w-full max-w-md px-5 py-3 bg-blue-500 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-900 xl:block hidden'>
              GET STARTED
            </button>
            <button className='mt-6 w-full max-w-md px-5 py-3 bg-white text-green-500 text-sm font-bold border-2 border-gray-300 rounded-xl shadow-lg shadow-grey-900 xl:block hidden'>
              I ALREADY HAVE AN ACCOUNT
            </button>
          </div>
        </div>
        <a href='https://apps.apple.com/us/app/breathreps/id6742899597' className='xl:hidden'>
          <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" width="150" height="50" />
        </a>
    </div>
  )
}

export default HomePage
