import React from 'react';
import logo from '../../img/logo.png';
import {FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='pt-16 pb-8 border-t border-gray-700'>
      <div className='max-w-[1280px] mx-auto'>
        <div className='flex justify-between pb-6'>
          <div id='logo'>
            <img className='h-[80px]' src={logo} alt="logo" />
          </div>
          <div className='w-[650px] flex justify-between my-8 text-lg font-bold'>
            <span>Contact</span>
            <span>Updates</span>
            <span>Music</span>
            <span>Pricing</span>
            <span className='ml-8'>hello@lofi.co</span>
          </div>
          <div id='icons' className='w-[70px] my-6 flex justify-between'>
            <FaTwitter size={30}/>
            <FaInstagram size={30}/>
          </div>
        </div>

        <div className='grid grid-cols-3'>
          <span>
            <p className='text-lg text-gray-400 font-semibold'>Copyright 2023 Lofi.co</p>
          </span>
          <span className='flex justify-center'>
            <span className='flex justify-between text-lg text-gray-400 font-semibold'>
              <span>Terms of Service</span>
              <span className='ml-3'>Privacy Policy</span>
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer