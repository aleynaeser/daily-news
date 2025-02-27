'use server';

import { get } from '../fetch-api';

const path = '/top-headlines';

export const listNews = (params: TServiceParams) => get<INewsArticle>(path, { params, path });
