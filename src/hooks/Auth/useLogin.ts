import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Token/token";
import token from "../../libs/Token/session";
import { usePostLoginMutation } from "../../queries/Auth/auth.querys";
import { queryString } from "../../utils/queryString";

const useLogin = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const postLoginMutation = usePostLoginMutation();

  const login = () => {
    postLoginMutation.mutateAsync(
      {
        code: queryString(search).code,
      },
      {
        onSuccess: ({ data }) => {
          token.setToken(ACCESS_TOKEN_KEY, data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, data.refreshToken);
          B1ndToast.showSuccess("로그인 성공");
          navigate("/write");
        },
        onError: () => {
          B1ndToast.showError("로그인 실패");
          navigate("/blog");
          token.clearToken();
        },
      }
    );
  };

  useEffect(() => {
    login();
  }, );

  return {};
};

export default useLogin;