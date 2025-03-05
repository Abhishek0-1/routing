import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=' max-w-7xl  w-full mx-auto  '>
      <div className=' flex '>
        <div className='   w-1/2'>
          <img className='h-112 ' src="https://static.vecteezy.com/system/resources/previews/046/346/908/non_2x/a-person-is-sitting-and-operating-a-computer-silhouette-art-illustration-vector.jpg" alt="" />
        </div>

        <div className=' m-auto  text-right space-y-8 '>
          <h1 className='font-bold text-4xl sm:text-5xl      '>Download Now
            <span className='block text-3xl '>Lorem, ipsum dolor.</span>
          </h1>
          <Link
            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
            to="/"
          >
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            &nbsp; Download now
          </Link>

        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <img className='h-77 ' src="https://i.pinimg.com/736x/fd/df/33/fddf3348687c613613bd514be800c3ec.jpg" alt="" />
      <h2 className='text-4xl font-medium mb-2 '>Lorem ipsum dolor sit.</h2>
      </div>

    </div>
  )
}

export default Home
