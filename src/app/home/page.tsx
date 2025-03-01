import { listNews } from '@lib/actions/news.action';
import { SERVICE_CATEGORY } from '@enums/service-category.enum';
import { SERVICE_PAGINATION } from '@enums/service-pagination.enum';
import NewsList from '@components/NewsList';

export default async function Home({ searchParams }: { searchParams: Promise<TServiceParams> }) {
  const {
    page = 1,
    pageSize = SERVICE_PAGINATION.PAGE_SIZE_25,
    category = SERVICE_CATEGORY.TECHNOLOGY,
  } = await searchParams;
  const news = await listNews({ page, pageSize, category });

  // const allNews = await listNews({ page: 1, pageSize: 100, category });
  // console.log(allNews);

  return (
    <div className='flex h-full flex-col gap-4 p-5'>
      <h2 className='font-atariClassic text-magenta'>News</h2>
      <NewsList initialNews={news} />
    </div>
  );
}
