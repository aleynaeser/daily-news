import Link from 'next/link';

export default function Banner() {
  return (
    <p className='col-[1/5] gap-5 border-y border-black-light bg-gradient-to-l from-[#051c31] via-[#14330c] to-[#2e0b21] p-5 text-center text-xs'>
      With 3 years of experience as a software developer, skilled in React, Next.js, TypeScript, Flutter, Java...
      <Link href='https://aleyna-eser-portfolio.vercel.app/' className='underlin text-red underline'>
        Learn more.
      </Link>
    </p>
  );
}
