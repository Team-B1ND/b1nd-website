import axios, { AxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/token";
import token from "../Token/session";
import errorResponseHandler from "./errorResponseHandler";
import requestHandler from "./requestHandler";

const SERVER = process.env.REACT_APP_SERVER_URL!;

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const b1ndAxios = createAxiosInstance({
  baseURL: SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`!,
  },
});

export const dodamAxiosSetAccessToken = (token: string) => {
  b1ndAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};

b1ndAxios.interceptors.request.use(requestHandler , (res) => res);

b1ndAxios.interceptors.response.use((res) => res, errorResponseHandler);