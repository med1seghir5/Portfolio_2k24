import React from 'react';
import pic from './images/pic.svg';

const Navbar = () => {
  return (
    <div className='flex flex-row space-x-28 ml-12 space-y-7 sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-8 ml-4 sm:ml-32' id='page'>
      <div className='ml-20 pt-10 pb-8 sm:mb-0'>
        <img src={pic} className='w-60' alt='Profile Pic' />
      </div>
    </div>
  );
};

export default Navbar;
