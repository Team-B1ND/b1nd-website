import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const BlogDetailBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap:32px;
`

export const BlogTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    span{
        color: ${({ theme }) => theme.labelNormal};
        ${DodamTypography.Title1.Bold};
    }

`

export const BlogTitleDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    span:nth-child(1){
        color: ${({ theme }) => theme.labelNormal};
        ${DodamTypography.Heading1.Medium};
    }
    span:nth-child(2){
        color: ${({ theme }) => theme.labelAssistive};
        ${DodamTypography.Headline.Medium};
    }
`

export const BlogContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    gap: 32px;
    width: 100%;
    height: 100%; 
    color: ${({ theme }) => theme.labelNormal};
    `


export const BoxHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

 `