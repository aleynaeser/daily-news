import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href='/'
      className='col-[1/2] flex flex-col items-center justify-center border-r border-black-light p-5 font-atariClassic text-lg text-white'
    >
      <h1 className='w-fit'>DAILY</h1>

      <div className='flex items-center gap-1'>
        <h1 className='text-lg font-bold'>NEWS</h1>

        <div className='grid grid-cols-2 gap-0.5'>
          <span className='h-[6px] w-[6px] bg-gray'></span>
          <span className='h-[6px] w-[6px] bg-yellow'></span>
          <span className='h-[6px] w-[6px] bg-magenta'></span>
          <span className='h-[6px] w-[6px] bg-blue'></span>
        </div>
      </div>
    </Link>
  );
}
