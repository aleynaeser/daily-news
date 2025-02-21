export default function Logo() {
  return (
    <a
      href='/'
      className='border-black-light font-atariClassic col-[1/2] flex flex-col items-center justify-center border-r p-5 text-lg text-white'
    >
      <div className='w-fit'>DAILY</div>

      <div className='flex items-center gap-1'>
        <span className='text-lg font-bold'>NEWS</span>

        <div className='grid grid-cols-2 gap-0.5'>
          <span className='bg-gray h-[6px] w-[6px]'></span>
          <span className='bg-yellow h-[6px] w-[6px]'></span>
          <span className='bg-magenta h-[6px] w-[6px]'></span>
          <span className='bg-blue h-[6px] w-[6px]'></span>
        </div>
      </div>
    </a>
  );
}
