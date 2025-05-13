import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";
import useLogin from "../../hooks/Auth/useLogin";


const AuthLoading = () => {
  useLogin();

  return <LoadingBox>loading...</LoadingBox>;
};

const LoadingBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    ${DodamTypography.Heading1.Medium};
`

export default AuthLoading;