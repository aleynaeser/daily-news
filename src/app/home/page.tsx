import { listNews } from '@lib/actions/news.action';
import { SERVICE_CATEGORY } from '@enums/service-category.enum';
import NewsList from '@components/NewsList';

export default async function Home({ searchParams }: { searchParams: Promise<TServiceParams> }) {
  const { page = 1, pageSize = 20, category = SERVICE_CATEGORY.TECHNOLOGY } = await searchParams;
  const news = await listNews({ pageSize, page, category });

  return (
    <div className='flex h-full flex-col gap-4 p-5'>
      <h2 className='font-atariClassic text-magenta'>News</h2>
      <NewsList initialNews={news} />
    </div>
  );
}
