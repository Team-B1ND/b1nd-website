
import { AxiosError } from "axios";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
  } from "../../constants/Token/token";
import token from "../Token/session";
import { b1ndAxios } from "./customAxios";
import authRepository from "../../repositories/Auth/AuthRepositoryImpl";

//리프레쉬 작업중인지 아닌지를 구분하는 변수
let isRefreshing = false;

let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};


const errorResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
    const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      //아무 요청중 하나하도 리프레쉬 작업중이 아니라면
      if (!isRefreshing) {
        //리프레쉬 작업을 시작함
        isRefreshing = true;
        alert("세션이 갱신되었습니다.111");
        //리프레쉬 api 요청
        try {

          alert("세션이 갱신되었습니다.2222");
          const {  data } =
            await authRepository.refresh({
            refreshToken: usingRefreshToken!,
          });
          alert("세션이 갱신되었습니다.");
          console.log("새로운 accessToken:", data.accessToken);
          
          

          b1ndAxios.defaults.headers.common[
            REQUEST_TOKEN_KEY
          ] = `Bearer ${data.accessToken}`;

          token.setToken(ACCESS_TOKEN_KEY, data.accessToken);
          

          //리프레쉬 작업을 마침
          isRefreshing = false;

          //새로 받은 accessToken을 기반으로 이때까지 밀려있던 요청을 모두 처리
          onTokenRefreshed(data.accessToken);
        } catch (error) {
          //리프레쉬 하다가 오류난거면 리프레쉬도 만료된 것이므로 다시 로그인
          window.alert("세션이 만료되었습니다.");
          token.clearToken();
          window.location.href = "/sign";
        }
      }
      return new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          originalRequest!.headers![REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
          resolve(b1ndAxios(originalRequest!));
        });
      });
    }
  }
};

export default errorResponseHandler;
