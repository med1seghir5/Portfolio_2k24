import React from 'react';

const Exper = () => {
  return (
    <div className='flex flex-col mr-5 pl-5 sm:flex-row pl-44 mr-32 pb-28 '>
      <div className='sm:basis-1/2 p-4 sm:p-16 text-center'>
        <div className='pt-4 sm:pt-14 text-center font-poppins text-3xl sm:text-5xl text-[#0B9EEA]'>
          Experiences :
        </div>
        <div className='font-poppins pt-4 sm:pt-10 text-sm sm:text-base'>
          - Developer and Digital marketing member in GDSC (University of Batna2) "Nov.2023 - today" <br />
          - Member in SPE (chapter of University of Batna 2) "March.2023 - Nov.2023" <br />
          - Hackathon Player
        </div>
      </div>

      <div className='sm:basis-1/2 pt-4 sm:pt-20 mx-auto sm:pl-80'>
        <svg
          width="200px"
          height="200px"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <line x1="7" y1="4" x2="17" y2="4" />
          <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
          <circle cx="5" cy="9" r="2" />
          <circle cx="19" cy="9" r="2" />
        </svg>
      </div>
    </div>
  );
};

export default Exper;
