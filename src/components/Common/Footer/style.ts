import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
    padding-bottom: 72px;
    width: 100%;
    height: min-content;
    gap: 40px;
`
export const FooterBox = styled.div`
    display: flex;
    width: 100%;
    height: min-content;
    justify-content: space-between;
    @media (max-width: 767px) {
     width: 100%;
     gap: 24px;
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
export const FooterLinkBox = styled.div`
    display: flex;
    gap: 24px;
    width: min-content;
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

`