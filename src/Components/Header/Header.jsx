import React from 'react'
import { Link , NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
      <div className='sticky  bg-white top-0'>
        <nav className='flex flex-wrap justify-between px-6 lg:px-6 shadow-2xl border-gray-200  font-bold  py-3  rounded-md  text-center items-center max-w-screen '>
          <logo>
            <img
            className='rounded-b-md mr-3 h-12'
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="img" />
          </logo>
          <div className='hidden items-center font-semibold sm:flex "
                         '>
            <ul className='flex gap-8 items-center'>
              <li><NavLink
                 to="/"
                    className={({isActive}) =>
                        `${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    >
                       Home
                  </NavLink>
              </li>
              <li><NavLink 
              to="/Contact" 
               className={({isActive})=>
                ` ${isActive ? 'text-orange-700' : ' text-gray-700' }  my-auto hover:text-orange-700  border-0  `
               } >
                Contact</NavLink></li>
              <li> <NavLink to="/About"
              className={({isActive}) =>`${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 border-0`}>
                 About 
                </NavLink> </li>
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
