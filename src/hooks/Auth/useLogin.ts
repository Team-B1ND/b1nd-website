import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useEffect, useRef } from "react";
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
  const hasCalledRef = useRef(false);

  const login = (code: string) => {
    postLoginMutation.mutateAsync(
      { code },
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
    const code = queryString(search).code;
    if (!code) {
      navigate("/blog");
      return;
    }
    if (hasCalledRef.current) return;
    hasCalledRef.current = true;
    login(code);
  }, [search, navigate]);

  return {};
};

export default useLogin;