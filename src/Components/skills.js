import React from 'react';
import html from './images/html.svg';
import css from './images/css.svg';
import tailwind from './images/tailwind.svg';
import react from './images/react.svg';

const Skills = () => {
  return (
    <div className='flex flex-col sm:flex-row p-4 sm:p-16'>
      <div className='sm:basis-1/2 pb-4 sm:pb-10'>
        <div className='pt-4 text-center sm: mr-30 text-left font-poppins text-3xl sm:text-5xl text-[#0B9EEA]'>Coding skills :</div>
        <div className='text-base sm:text-xl font-poppins pt-4 sm:pt-12 ml-0 sm:ml-48'>
          HTML (100%) <img src={html} width={"500px"} alt='HTML Logo' />
          CSS (80%) <img src={css} width={"500px"} alt='CSS Logo' />
          JavaScript (40%) <img src={react} width={"500px"} alt='JavaScript Logo' />
          Tailwind (80%) <img src={tailwind} width={"500px"} alt='Tailwind CSS Logo' />
          React (40%) <img src={react} width={"500px"} alt='React Logo' />
        </div>
      </div>

      <div className='sm:basis-1/2 ml-7'>
        <svg
          className="h-56 w-80 ml-0 sm:ml-56 mt-4 sm:mt-44"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    </div>
  );
};

export default Skills;
