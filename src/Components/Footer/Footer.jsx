import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-gray-300 h-55 max-w-screen  border-2'>
      <div className='m-9'>
        <div>
          <img className='h-15' src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" />
        </div>
        <div className='grid grid-cols-2 gap-8 '> 
            <div>
              <h2 className=''>RECOURCES</h2>
                <ul>
                  <li>
                    <Link to="/" className='hover:underline '> Home</Link>
                  </li>
                  <li>
                    <Link to="/About" className='hover:underline'>About</Link>
                  </li>
                  <li>
                    <Link></Link>
                  </li>
                </ul>
               </div>
               <div></div>

        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
