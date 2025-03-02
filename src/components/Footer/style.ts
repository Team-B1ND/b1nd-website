import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    padding: 30px 0;
    width: 100%;
    height: min-content;
    gap: 5px;
    @media (max-width: 767px) {
     flex-direction: column;
    }
`

export const TeamInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: min-content;
    margin-right: 10px;
    align-items: flex-start;
    gap: 16px;
    span{
        ${DodamTypography.Caption2.Regular};
        color: ${({theme})=>theme.labelAssistive};
    }
    @media (max-width: 767px) {
     width: 100%;
     flex-direction: column;
    }
    
`

export const FooterItem = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    span{
        cursor: pointer;
        color: ${({theme})=>theme.labelNeutral};
        ${DodamTypography.Caption2.Bold};
    }
    @media (max-width: 767px) {
     margin-top: 24px;
    }
`