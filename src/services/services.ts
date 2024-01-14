import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { StatusCodes } from 'http-status-codes';

import { getToken } from './token-services';
import { handleError } from './error-services';
import { ErrorType } from '../types/error';
import { getErrorMessage } from '../helpers/get-error-message';

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const RENDERABLE_ERRORS = [
  StatusCodes.BAD_REQUEST,
  StatusCodes.UNAUTHORIZED,
  StatusCodes.NOT_FOUND,
];

function needRenderError(response: AxiosResponse): boolean {
  return RENDERABLE_ERRORS.includes(response.status);
}

export function createApiClient(): AxiosInstance {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorType>) => {
      if (error.response && needRenderError(error.response)) {
        handleError(getErrorMessage(error.response.data));
      }
      throw error;
    },
  );

  return api;
}

export const CLIENT = createApiClient();
