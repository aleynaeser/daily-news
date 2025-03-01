'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';
import { listNews } from '@lib/actions/news.action';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { SERVICE_PAGINATION } from '@enums/service-pagination.enum';
import Link from 'next/link';

export default function NewsList({ initialNews }: { initialNews: TServiceListResponse<IArticle> }) {
  const pageSize = SERVICE_PAGINATION.PAGE_SIZE_20;

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useSuspenseInfiniteQuery<TServiceListResponse<IArticle>>({
    queryKey: ['get-infinite-news'],
    initialPageParam: 0,
    initialData: { pages: [initialNews], pageParams: [0] },
    getNextPageParam: (_lastGroup, groups) =>
      groups.length < (groups[0]?.totalResults ?? 0) / Number(pageSize) ? groups.length : undefined,
    queryFn: async ({ pageParam = 1 }) => {
      const page = Number(pageParam) * Number(pageSize);
      const result = await listNews({ page, pageSize });
      return result;
    },
  });

  const articles = useMemo(() => data?.pages?.flatMap((page) => page.articles) ?? [], [data]);
  const totalArticleCount = articles.length;

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

      {hasNextPage && (
        <motion.div
          key={totalArticleCount}
          viewport={{ once: true, amount: 0.5 }}
          className='flex items-center justify-center'
          onViewportEnter={() => {
            if (hasNextPage && !isFetchingNextPage) fetchNextPage();
          }}
        >
          <div className='loading-spinner'></div>
        </motion.div>
      )}
    </ul>
  );
}
