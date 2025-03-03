import React from 'react'

function Header() {
  return (
    <>
      <div>
        <nav className='flex justify-between  shadow-2xl  font-bold  py-3  rounded-md  text-center items-center max-w-screen '>
          <logo>
            <img
            className='rounded-b-md mr-3 h-12'
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="img" />
          </logo>
          <div>
            <ul className='flex gap-8'>
              <li>Home</li>
              <li>contact</li>
              <li> About </li>
            </ul>
          </div>
          <div className='px-7 flex gap-4 '>
            <button>Log in </button>
            <button className='bg-blue-950 text-white p-3 px-7 py-2 rounded-md'>sign up</button>
          </div>
        </nav>
      </div>
    </>


   )
}

export default Header
