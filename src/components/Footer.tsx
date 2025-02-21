import { socialMediaLinks } from '@constants/social-media-links';

export default function Footer() {
  return (
    <div className='text-[11px] text-gray-light'>
      <div className='flex items-center justify-between border-t border-black-light p-5'>
        <div className='grid grid-cols-2 gap-0.5'>
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

        <div className=''>
          <ul className='social-media-list flex gap-4'>
            {socialMediaLinks.map((Item, index) => (
              <li key={index}>
                <Item.icon />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='border-t border-black-light p-5 text-center'>
        <div>© 2024 Daily News, by Aleyna Eser</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  );
}
