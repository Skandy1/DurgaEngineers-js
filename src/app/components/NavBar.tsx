import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={logo} className='h-50 w-50' alt='Logo' height={80} width={80} quality={100}/>
      {/* <span className="ml-3 text-xl font-">DURGA ENGINEERS</span> */}
      
      <h1 className="ml-3 text-2xl font-semibold text-gray-900 tracking-wide">
  Durga Engineers
</h1>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:mr-10">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About Us</a>
      <a className="mr-5 hover:text-gray-900">Products & Services</a>
      <a className="mr-5 hover:text-gray-900">Milestones</a>
      <button className="text-gray-900 bg-white border-2 py-2 px-5 focus:outline-none hover:bg-red-500 hover:text-white rounded-full text-lg">Contact Us</button>
    </nav>
    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
  )
}

export default NavBar