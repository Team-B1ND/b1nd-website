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
    @media (max-width: 767px) {
        gap: 18px;
        flex-direction: column-reverse;
    }
`
export const ServiceTitle = styled.div`
    width: 50%;
    display: flex;
    height: 100%;
    justify-content: space-between;
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
    @media (max-width: 767px) {
        width: 100%;
        h1{
            font-size: 36px !important;
            ${DodamTypography.Title1.Bold};
           
        }
    }
`
export const ServiceImg = styled.img`
    width: 50%;
    height: 100%;
    ${DodamShape.ExtraLarge};
    object-fit: cover;
    @media (max-width: 767px) {
        width: 100%;
        ${DodamShape.Large};
    }
`
export const ServiceEtc = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: min-content;
    justify-content: space-between;
    @media (max-width: 767px) {
        flex-direction: column;
        gap: 20px;
    }

`

export const ServiceContent = styled.div`
    display: flex;
    flex-direction: column;
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
    @media (max-width: 767px) {
    width: 100%;
    gap: 12px;
    span{
        width: 100%;
    }
    }
`