import SERVICE_STATUS from '@enums/service-status';
import SERVICE_COUNTRY from '@enums/service-country';
import SERVICE_LANGUAGE from '@enums/service-language';
import SERVICE_CATEGORY from '@enums/service-category';

export declare global {
  interface TServiceErrorResponse {
    status: SERVICE_STATUS.ERROR;
    code: string;
    message: string;
  }

  interface TServiceListResponse<T> {
    status: SERVICE_STATUS.OK;
    totalResults: number;
    articles: T[];
  }

  interface TServiceParams {
    q?: string;
    pageSize?: number;
    page?: number;
    country?: SERVICE_COUNTRY;
    language?: SERVICE_LANGUAGE;
    category?: SERVICE_CATEGORY;
  }

  export type IArticleSource = {
    id: string | null;
    name: string;
  };

  interface IArticle {
    source: IArticleSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
  }

  interface ISocialMediaLink {
    icon: React.FunctionComponent;
    href: string;
  }
}
