'use server';

import { get } from '../fetch-api';

const path = 'top-headlines';

export const listNews = async (params: TServiceParams) => get<IArticle>('', { params, path });
