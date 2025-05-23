import { DodamFilledButton } from "@b1nd/dds-web";
import styled from "styled-components";
import { authURL } from "../../constants/Dauth/dauth.constant";

const WriteButton = () => {

    return(
        <ButtonContainer onClick={() => (window.location.href = authURL)}>
            <DodamFilledButton size="Medium" textTheme="staticWhite"  text="글 작성 하러가기"/>
        </ButtonContainer>
    )
}
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: min-content;
    position: fixed;
    bottom: 10%;
    right: 30px;
`

export default WriteButton;