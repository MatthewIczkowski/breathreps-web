import React from 'react'
import Image from 'next/image';
import logo from '@/assets/image.png';

const HomePage = () => {
  return (
    <div className='p-6 min-h-screen flex flex-col justify-between items-center'>
        <h1 className='text-blue-500 text-3xl font-bold'>BreathReps</h1>
        <Image src={logo} alt='BreathReps Logo' className='w-1/2 h-1/2 mb-10' />
        <h3 className='text-gray-700 text-2xl font-bold text-center'> The free, simple, and effective way to improve your breathing fitness!</h3>
        {/* <div>
          <button className='mt-6 px-5 py-3 w-full bg-blue-500 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-900'>
            GET STARTED
          </button>
          <button className='mt-6 px-5 py-3 w-full bg-white text-green-500 text-sm font-bold border-2 border-gray-300 rounded-xl shadow-lg shadow-grey-900'>
            I ALREADY HAVE AN ACCOUNT
          </button>
        </div> */}
        <a href='https://apps.apple.com/us/app/breathreps/id6742899597'>
          <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" width="150" height="50" />
        </a>
       
        {/* <h2 className='text-2xl font-bold'>Download the App</h2>
        <div className='flex justify-center mt-6'>
          <a href='#' className='mx-2'>
            <img src='/icons/appstore.png' alt='App Store' />
            Apple App Store
          </a>
          <a href='#' className='mx-2'>
            <img src='/icons/playstore.png' alt='Google Play' />
            Google Play Store
          </a>
        </div> */}
    </div>
  )
}

export default HomePage
