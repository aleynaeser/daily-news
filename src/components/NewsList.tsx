'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function NewsList({ articles }: { articles: IArticle[] }) {
  return (
    <ul className='flex flex-col gap-3'>
      {articles.map((item, index) => {
        const publishedDate = new Date(item.publishedAt).toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });

        return (
          <li key={index}>
            <a className='flex flex-col'>
              <div className='flex items-baseline justify-between gap-1'>
                <Link href={item.url} className='font-medium underline duration-150 ease-in-out hover:text-red'>
                  {item.title}
                </Link>

                <div className='whitespace-nowrap text-xs text-gray'>{publishedDate}</div>
              </div>

              <p className='text-xs text-gray-light'>{item.description}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
