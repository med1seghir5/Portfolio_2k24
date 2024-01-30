import React from 'react';
import pic from './images/pic.svg';

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-8 ml-4 sm:ml-32' id='page'>
      <div className='sm:mb-0'>
        <img src={pic} className='w-56 h-48' alt='Profile Pic' />
      </div>

      <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 font-inter text-2xl'>
        <a href="https://www.linkedin.com/in/mohamed-seghir-abdelmalek-111678290/" id='Link'>
          <button className='text-[#0B9EEA]'>Linkedin</button>
        </a>
        <a href="https://www.facebook.com/mohamedseghir.abdelmalek/" id='facebook'>
          <button>Facebook</button>
        </a>
        <a href="https://github.com/med1seghir5/med1seghir5/" id='github'>
          <button>Github</button>
        </a>
      </div>

      <div className='pb-10 sm:mt-0'>
        <button className='ml-0 sm:ml-16'>
          <svg
            className='w-8 h-8 sm:w-12 sm:h-12 text-gray-800 dark:text-white'
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
