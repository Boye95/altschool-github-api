import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorBoundaryTest () {
  

  return (
    <div>
      <div className='h-screen w-full flex items-center justify-center font-urbanist'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <p className='text-2xl'>Something definitely is missing</p>
          <p className='text-xl'>Let's take you back</p>
          <Link
            to='/'
            className='border-2 border-emerald-100 rounded-lg py-1 px-4 text-white bg-emerald-500 shadow-lg ring-2 ring-emerald-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm'
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}
