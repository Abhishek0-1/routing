import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" border-y  h-77 max-w-screen   flex flex-col md:justify-between mx-auto">
      <div className=" flex  pt-4 pe-9 justify-between my-auto justify-items-center align-middle">
        <div>
          <img
            className="h-15"
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 ">   
          <div >
            <h2 className="mb-6 text-sm  font-semibold text-gray-900 uppercase ">RECOURCES</h2>
            <ul className=" text-gray-500 font-medium">
              <li className="mb-4"> 
                <Link to="/" className="hover:underline ">
                  
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/About" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6">Follow Us</h2>
            <ul className="text-gray-500 font-semibold ">
              <li className="mb-4 hover:underline">
                <Link>Github</Link>
                
              </li>
              <li className="mb-4 hover:underline"><Link>Discord</Link></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6">Legal</h2>
            <ul className="font-semibold text-gray-500 ">
              <li className="mb-4 hover:underline">privacy policy</li>
              <li className="mb-4 hover:underline">term &amp; condition</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-auto border-t pt-4">
          <p> (c) 2025 developerabhi.All rights reserved.</p>
          
      </div>
    </div>
  );
}

export default Footer;
