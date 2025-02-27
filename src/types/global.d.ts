export declare global {
  export interface TServiceListResponse<T> {
    status: string;
    totalResults: number;
    articles: T[];
  }

  interface ISocialMediaLink {
    icon: React.FunctionComponent;
    href: string;
  }
}
