import React from 'react';
import html from './images/html.svg';
import css from './images/css.svg';
import tailwind from './images/tailwind.svg';
import react from './images/react.svg';
import js from './images/js.svg'

const Skills = () => {
  return (
    <div className='flex flex-col mr-5 pl-5 sm:flex-row pl-44 mr-32 pb-28'>
      <div className='sm:basis-1/2 pb-4 sm:pb-10'>
        <div className='pt-4 text-center sm: mr-30 text-left font-poppins text-3xl sm:text-5xl text-[#0B9EEA]'>Coding skills :</div>
        <div className='text-base sm:text-xl font-poppins pt-4 sm:pt-12 ml-0 sm:ml-48'>
           <img src={html} width={"500px"} alt='HTML Logo' />
           <img src={css} width={"500px"} alt='CSS Logo' />
           <img src={js} width={"500px"} alt='JavaScript Logo' />
           <img src={tailwind} width={"500px"} alt='Tailwind CSS Logo' />
           <img src={react} width={"500px"} alt='React Logo' />
        </div>
      </div>

      <div className="sm:basis-1/2 pt-4 sm:pt-20 mx-auto sm:pl-80">
        <svg
          width="200px"
          height="200px"
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
