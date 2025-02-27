/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

type THeaderConfig = { [key: string]: string };

interface IApiConfig {
  method?: 'GET';
  path?: string;
  params?: Record<string, any>;
  headers?: THeaderConfig;
  body?: BodyInit | null;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
}

export const createConfig = async (config: IApiConfig) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? '';
  const baseURL = process.env.NEXT_PUBLIC_SERVICE_URI + '/';
  const path = config.path ? baseURL + config.path : baseURL;

  const headers: THeaderConfig = {
    'Content-Type': 'application/json',
    'X-Api-Key': apiKey,
    ...config.headers,
  };

  const manipulatedConfig: IApiConfig = {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    cache: 'force-cache',
    headers: headers,
    ...config,
  };

  return { path, manipulatedConfig };
};

export async function baseFetch<T = any>(url: string, config: IApiConfig): Promise<TServiceListResponse<T>> {
  const { path, manipulatedConfig } = await createConfig(config);
  const manipulatedUrl = url?.[0] === '/' || url === '' ? url : '/' + url;
  const completeURL = new URL(path + manipulatedUrl);

  if (config.params) {
    Object.keys(config.params).forEach((key) => completeURL.searchParams.append(key, config.params![key]));
  }

  try {
    const response = await fetch(completeURL, manipulatedConfig);
    if (!response.ok) throw response;

    return response.json();
  } catch (error: any) {
    if (error) {
      const errorJSON = (await error.json?.()) ?? undefined;
      const errorString = JSON.stringify({ status: error.status, ...(errorJSON ?? error) });

      throw new Error(errorString);
    }

    throw new Error(error);
  }
}

export const get = async <T>(url: string, config?: IApiConfig) => {
  const response = await baseFetch<T>(url, { ...config, method: 'GET' });
  return response;
};
