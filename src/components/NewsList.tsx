'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';
import { listNews } from '@lib/actions/news.action';
import { SERVICE_CATEGORY } from '@enums/service-category.enum';
import { useInfiniteQuery } from '@tanstack/react-query';
import { SERVICE_PAGINATION } from '@enums/service-pagination.enum';
import Link from 'next/link';

export default function NewsList({ initialNews }: { initialNews: TServiceListResponse<IArticle> }) {
  const pageSize = SERVICE_PAGINATION.PAGE_SIZE_25;

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery<TServiceListResponse<IArticle>>({
    queryKey: ['get-infinite-news'],
    initialPageParam: 1,
    initialData: { pages: [initialNews], pageParams: [1] },
    queryFn: async ({ pageParam = 1 }) => {
      const result = await listNews({ page: Number(pageParam), pageSize, category: SERVICE_CATEGORY.TECHNOLOGY });
      return result;
    },
    getNextPageParam: (_lastGroup, groups) => {
      const totalResults = groups[0]?.totalResults ?? 0;
      const totalPages = Math.ceil(totalResults / pageSize);
      const nextPage = groups.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
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
          <li key={index} className='flex flex-col gap-1'>
            <div className='flex items-baseline justify-between gap-1'>
              <Link
                href={item.url}
                target='_blank'
                className='font-medium underline duration-150 ease-in-out hover:text-red'
              >
                {item.title}
              </Link>

              <div className='whitespace-nowrap text-xs text-gray'>{publishedDate}</div>
            </div>

            <p className='text-xs text-gray-light'>{item.description}</p>
          </li>
        );
      })}

      {hasNextPage && (
        <motion.div
          key={totalArticleCount}
          viewport={{ once: true, amount: 0.5 }}
          className='animate-spin m-auto flex h-4 w-4 items-center justify-center rounded-full border-r-2 border-gray'
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
