import React from 'react';
import mypic from './images/mypic.jpg';

const Body = () => {
  return (
    <div className='flex flex-col sm:flex-row mb-28 sm:space-x-8 sm:ml-12'>

      <div className='sm:basis-1/2 p-4 sm:p-20 text-center sm:text-left text-5xl sm:text-9xl'>
        <div className='font-inter text-lg sm:text-2xl pb-3 sm:pb-5'>
          I’m Med seghir and I’m:
        </div>
        <div className='font-poppins text-4xl sm:text-7xl text-[#0B9EEA]'>
          WEB DEVELOPER
        </div>
        <div className='text-lg sm:text-2xl pt-3 sm:pt-7'>
          Hello, my name is Abdelmalek Medsghir, I am 19 years old <br/>
          and I am a second-year computer science student <br/> in
          the University of Batna 2, and I am a web developer.
        </div>
        <div className='text-base sm:text-lg mt-4 sm:mt-8'>
          <button className='bg-[#0B9EEA] rounded-full w-36 h-10 font-poppins shadow-lg shadow-gray-400'>
            Contact me
          </button>
        </div>
      </div>

      <div className='sm:basis-1/2 mt-8 mr-5 sm:ml-10'>
        <img src={mypic} width={"60%"} className='rounded-full shadow-xl shadow-slate-500 ml-20' alt='My Picture' />
      </div>
    </div>
  );
};

export default Body;
