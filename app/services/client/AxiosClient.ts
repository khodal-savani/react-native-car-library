import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import { APP_URL } from '../config/Host';
import { showToast } from '../../utils/alert';

export const AxiosClient = axios.create({
  baseURL: APP_URL,
});

const getAuthToken = () => {
  return '';
};

const blacklistUrls: string[] = [];
const whiteListUrl: string[] = [
  '/api/cars', // Allow JSON content type for cars API
  '/api/cars/types',
  '/api/cars/tags',
];

AxiosClient.interceptors.request.use(async config => {
  try {
    if (getAuthToken() && !blacklistUrls.includes(config.url || '')) {
      config.headers = {
        ...config.headers,
        Accept: 'application/json',
        Authorization: `Bearer ${getAuthToken()}`,
      } as AxiosRequestHeaders;
    }

    // Check if the URL contains any of our whitelisted endpoints
    const shouldUseJson = whiteListUrl.some(endpoint => 
      config.url?.includes(endpoint)
    );

    if (
      shouldUseJson &&
      ['post', 'patch', 'put'].includes(config.method || '')
    ) {
      config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      } as AxiosRequestHeaders;
    } else {
      config.headers = {
        ...config.headers,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      } as AxiosRequestHeaders;
    }
  } catch (e) {
    console.error({ e });
  }

  console.log('AAA config', config);
  return config;
});

AxiosClient.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    const data: any = error.response?.data;
    const serverMessage = (data && (data.message || data.error || data.detail)) as string | undefined;

    let message = 'Network error. Please try again.';
    if (status === 0 || !status) {
      message = 'Unable to reach server. Check your connection.';
    } else if (status === 401) {
      message = 'Your session has expired. Please sign in again.';
    } else if (status === 403) {
      message = 'You do not have permission to perform this action.';
    } else if (status === 404) {
      message = 'Requested resource was not found.';
    } else if (status && status >= 500) {
      message = 'Server error. Please try again later.';
    } else if (serverMessage) {
      message = serverMessage;
    }

    try {
      showToast(message, 'Request Failed', 'error');
    } catch {}

    return Promise.reject(error);
  },
);
