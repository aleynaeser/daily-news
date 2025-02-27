import { listNews } from '@lib/actions/news.action';
import { SERVICE_CATEGORY } from '@enums/service-category.enum';

export default async function Home({ searchParams }: { searchParams: Promise<TServiceParams> }) {
  const { page = 1, pageSize = 20, category = SERVICE_CATEGORY.TECHNOLOGY } = await searchParams;

  const news = await listNews({ pageSize, page, category });

  console.log('News =>', news);

  return <div className='h-full p-5'>Home Page</div>;
}
