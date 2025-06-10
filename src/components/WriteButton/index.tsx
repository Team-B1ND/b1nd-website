import { DodamFilledButton } from "@b1nd/dds-web";
import styled from "styled-components";
import { authURL } from "../../constants/Dauth/dauth.constant";
import Token from "../../libs/Token/session";
import AuthRepositoryImpl from "../../repositories/Auth/AuthRepositoryImpl";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Token/token";

const WriteButton = () => {
  const handleClick = async () => {
    const accessToken = Token.getToken(ACCESS_TOKEN_KEY);
    const refreshToken = Token.getToken(REFRESH_TOKEN_KEY);

    // Access Token 없으면 바로 로그인 페이지로
    if (!accessToken || !refreshToken) {
      window.location.href = authURL;
      return;
    }

    try {
      const { accessToken: newAccessToken } = await AuthRepositoryImpl.refresh({
        refreshToken,
      });
      Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

      window.location.href = authURL;
    } catch (error) {
      Token.clearToken();
      window.location.href = authURL;
    }
  };

  return (
    <ButtonContainer onClick={handleClick}>
      <DodamFilledButton
        size="Medium"
        textTheme="staticWhite"
        text="글 작성 하러가기"
      />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: min-content;
  position: fixed;
  bottom: 10%;
  right: 30px;
`;

export default WriteButton;
