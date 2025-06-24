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

    
    if (!accessToken || !refreshToken || accessToken === undefined || refreshToken === undefined) {
      alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      window.location.href = authURL;
      return;
    }

    try {
      const { data } = await AuthRepositoryImpl.refresh({
        refreshToken,
      });
      
      Token.setToken(ACCESS_TOKEN_KEY, data.accessToken);
      
      window.location.href = "write";
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
