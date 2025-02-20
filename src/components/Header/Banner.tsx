import Link from 'next/link';
import React from 'react';

export default function Banner() {
  return (
    <div className='border-black-light col-[1/5] gap-5 border-y bg-gradient-to-l from-[#051c31] via-[#14330c] to-[#2e0b21] p-6 text-center text-xs'>
      With 3 years of experience as a software developer, skilled in React, Next.js, TypeScript, Flutter, Java...
      <Link href='https://aleyna-eser-portfolio.vercel.app/' className='text-red underlin underline'>
        Learn more.
      </Link>
    </div>
  );
}
