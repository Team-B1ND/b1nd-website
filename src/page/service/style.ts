import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ServiceBox= styled.div`
    display: flex;
    flex-direction: column;
    gap: 88px;
    margin-bottom: 88px;
`

export const ServiceIntroductionBox= styled.div`
    display: flex;
    gap: 108px;
`
export const ServiceTitle = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    h1{
        display: flex;
        align-items: center;
        font-size: 40px !important;
        ${DodamTypography.Title1.Bold};
        color: ${({theme})=>theme.labelNormal};
    }
    span{
        ${DodamTypography.Headline.Medium};
        color: ${({theme})=>theme.labelAssistive};
    }
`
export const ServiceImg = styled.img`
    width: 50%;
    height: 100%;
    ${DodamShape.ExtraLarge};
    object-fit: cover;
`
export const ServiceEtc = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`

export const ServiceContent = styled.div`
    width: 30%;
  h1{
        display: flex;
        align-items: center;
        ${DodamTypography.Title2.Bold};
        color: ${({theme})=>theme.labelNormal};
        cursor: pointer;
    }
    span{
        width: 100px;
        height: 100%;
        ${DodamTypography.Body1.Medium};
        color: ${({theme})=>theme.labelAssistive};
    }
`