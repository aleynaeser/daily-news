import React from 'react';

export default function Logo() {
  return (
    <div className='border-black-light font-atariClassic col-[1/2] flex flex-col items-center justify-center border-r p-6 text-lg'>
      <div>DAILY</div>

      <div className='flex items-center gap-2'>
        <span className='text-lg font-bold'>NEWS</span>
        <div className='grid grid-cols-2 gap-0.5'>
          <span className='bg-gray h-2 w-2'></span>
          <span className='bg-yellow h-2 w-2'></span>
          <span className='bg-magenta h-2 w-2'></span>
          <span className='bg-blue h-2 w-2'></span>
        </div>
      </div>
    </div>
  );
}
