import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { StatusCodes } from 'http-status-codes';

import { GetToken } from './tokenActions';
import { HandleError } from './errorActions';
import { ErrorType } from '../types/error';
import { GetErrorMessage } from '../helpers/getErrorMessage';

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const RENDERABLE_ERRORS = [
  StatusCodes.BAD_REQUEST,
  StatusCodes.UNAUTHORIZED,
  StatusCodes.NOT_FOUND,
];

function NeedRenderError(response: AxiosResponse): boolean {
  return RENDERABLE_ERRORS.includes(response.status);
}

export function CreateApiClient(): AxiosInstance {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = GetToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorType>) => {
      if (error.response && NeedRenderError(error.response)) {
        HandleError(GetErrorMessage(error.response.data));
      }
      throw error;
    },
  );

  return api;
}
