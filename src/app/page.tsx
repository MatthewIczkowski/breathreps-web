import React from 'react'
import Image from 'next/image';
import logo from '@/assets/breathreps-logo.png';

const HomePage = () => {
  return (
    <div className='p-6 min-h-screen flex flex-col justify-between'>
      {/* Hero Section */}
      <section className='text-center'>
        <h1 className='text-blue-500 text-3xl font-bold'>BreathReps</h1>
      </section>

      {/* Features Section */}
      <section className='py-12'>
        <div className='justify-center mt-8'>
          <div className='flex flex-col items-center justify-center'>
            <Image src={logo} alt='BreathReps Logo' className='w-1/2 h-1/2 mb-10' />
            <h3 className='text-gray-700 text-2xl font-bold text-center'> The free, simple, and effective way to improve your breathing fitness!</h3>
          </div>
        </div>
      </section>

      <section className='py-12'>
        <div className='flex flex-col items-center justify-center'>
            <button className='mt-6 px-5 py-3 w-full bg-blue-500 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-900'>
            GET STARTED
            </button>
            <button className='mt-6 px-5 py-3 w-full bg-white text-green-500 text-sm font-bold border-2 border-gray-300 rounded-xl shadow-lg shadow-grey-900'>
            I ALREADY HAVE AN ACCOUNT
            </button>
        </div>
      </section>

      {/* Download Links Section */}
      {/* <section className='py-12 text-center'>
        <h2 className='text-2xl font-bold'>Download the App</h2>
        <div className='flex justify-center mt-6'>
          <a href='#' className='mx-2'>
            <img src='/icons/appstore.png' alt='App Store' />
            Apple App Store
          </a>
          <a href='#' className='mx-2'>
            <img src='/icons/playstore.png' alt='Google Play' />
            Google Play Store
          </a>
        </div>
      </section> */}
    </div>
  )
}

export default HomePage
