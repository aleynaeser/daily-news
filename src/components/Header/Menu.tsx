import { menuItems } from '@constants/menu-items';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className='border-black-light col-[4/5] flex flex-col justify-center gap-5 border-r p-5'>
      <ul className='flex flex-col gap-2 text-xs'>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={
              'duration-150 ease-in-out ' + (item.name === 'Home' ? 'text-white' : 'text-gray-light hover:text-yellow')
            }
          >
            <Link href={item.link} target='_blank'>
              <span className='font-atariClassic pr-2 text-[8px]'>{'>'}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href='https://www.linkedin.com/in/aleyna-eser-818043185/'
        target='_blank'
        className='font-atariClassic hover:bg-magenta rounded-2xl bg-gradient-to-l from-[#a48e00] to-[#a92777] px-2 py-[5px] text-center text-[9px] duration-150 ease-in-out default:from-[#a48e00] hover:from-inherit hover:to-inherit'
      >
        Get Touch
      </Link>
    </div>
  );
}
