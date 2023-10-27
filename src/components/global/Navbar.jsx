import React from 'react'
import logo from '../../img/logo.png';

const Navbar = () => {
  return (
    <div className='h-28 px-4 py-4 border-b border-gray-700'>
      <nav className='flex items-center justify-between max-w-[1120px] mx-auto'>
        <div id='logo'>
          <img className='h-[80px]' src={logo} alt="logo" />
        </div>
        <div id="nav-links" className='flex justify-end mr-20'>
          <ul className='w-[700px] flex justify-between text-lg font-bold'>
            <li className='p-4'>Contact</li>
            <li className='p-4'>Updates</li>
            <li className='p-4'>Blog</li>
            <li className='p-4'>Music</li>
            <li className='p-4'>FAQ</li>
            <li className='p-4'>Pricing</li>
            <li className='p-2'>
              <button className='ml-2 text-sm border-2 border-[#F3A592] py-2 px-6 rounded-lg'>Go to app</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar