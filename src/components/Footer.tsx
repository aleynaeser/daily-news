import { socialMediaLinks } from '@constants/social-media-links';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='text-[11px] text-gray-light'>
      <div className='flex items-center justify-between border-t border-black-light p-5'>
        <div className='grid grid-cols-5 gap-0.5 opacity-50'>
          <span className='h-[6px] w-[6px] bg-yellow'></span>
          <span className='h-[6px] w-[6px] bg-magenta'></span>
          <span className='h-[6px] w-[6px] bg-blue'></span>
          <span className='h-[6px] w-[6px] bg-yellow'></span>
          <span className='h-[6px] w-[6px] bg-magenta'></span>
          <span className='h-[6px] w-[6px] bg-blue'></span>
          <span className='h-[6px] w-[6px] bg-yellow'></span>
          <span className='h-[6px] w-[6px] bg-magenta'></span>
          <span className='h-[6px] w-[6px] bg-blue'></span>
          <span className='h-[6px] w-[6px] bg-yellow'></span>
        </div>

        <ul className='flex gap-4'>
          {socialMediaLinks.map((Item, index) => (
            <li key={index}>
              <Item.icon />
            </li>
          ))}
        </ul>
      </div>

      <div className='border-t border-black-light p-5 text-center'>
        <h3>© 2024 Daily News, by Aleyna Eser</h3>
        <p>
          All rights reserved.{' '}
          <Link className='text-red underline' href='https://aleynaeser.site/' target='_blank'>
            www.aleynaeser.site
          </Link>
        </p>
      </div>
    </footer>
  );
}
