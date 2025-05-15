import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
  } from "../../constants/Token/token";
  import { InternalAxiosRequestConfig } from "axios";
  import token from "../Token/session";
import { authURL } from "../../constants/Dauth/dauth.constant";
  
  const requestHandler = (config: InternalAxiosRequestConfig) => {
    if (
      token.getToken(REFRESH_TOKEN_KEY) === undefined
    ) {
      window.location.href = authURL;
    } else {
      config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`
      }
  
    return config;
  };
  
  export default requestHandler;