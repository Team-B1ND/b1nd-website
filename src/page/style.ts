import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const IntroductionBox = styled.main`
    display: flex;
    flex-direction: column;
    gap: 140px;
    margin-bottom: 140px;
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    h1{
        font-size: 60px !important;
        ${DodamTypography.Title1.Bold};
        color: ${({theme})=>theme.labelNormal};
    }
    span{
        ${DodamTypography.Heading1.Medium};
        color: ${({theme})=>theme.labelAssistive};
    }
    @media (max-width: 767px) {
        gap: 10px;
        h1{
            font-size: 36px !important;
            ${DodamTypography.Title1.Bold};
        }
    }
`

export const Headline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    p{
        ${DodamTypography.Title2.Medium};
        color: ${({theme})=>theme.primaryNormal};
    }
    
`
export const HeadlineContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    h1{
        font-size: 40px !important;
        ${DodamTypography.Title1.Bold};
        color: ${({theme})=>theme.labelNormal};
    }
    span{
        ${DodamTypography.Heading2.Medium};
        color: ${({theme})=>theme.labelAssistive};
    }
`
export const HeadlineFlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
`

export const HistoryBox = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
p{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px !important;
    ${DodamTypography.Title1.Bold};
    color: ${({theme})=>theme.labelNormal};

}

`
export const HeaderDate = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 120px;
    ${DodamTypography.Heading1.Bold};
    color: ${({theme})=>theme.labelNormal};
    span{
        width: 10px;
        height: 10px;
        background-color: ${({theme})=>theme.primaryNormal};
        border-radius: 100%;
    }
    @media (max-width: 767px) {
        width: 100%; 

    }
`

export const HistoryItemBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 5px;
    gap: 36px;
   
    @media (max-width: 767px) {
        gap: 8px;
    }
`

export const HistoryText = styled.div`
    display: flex;
    width: 100%;
    height: min-content;
    gap: 8px;
    ${DodamTypography.Headline.Medium};
    span:nth-child(1){
        color: ${({theme})=>theme.labelAssistive};
    }
    span:nth-child(2){
        color: ${({theme})=>theme.labelNormal};
    }
    @media (max-width: 767px) {
        flex-direction: column;
    }
`