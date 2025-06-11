import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const PosterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    span{
        color: ${({ theme }) => theme.labelNormal};
        ${DodamTypography.Body1.Bold};
    }
`

export const PosterBox = styled.div`
    display: flex;
    width: 335px;
    flex-direction: column;
    padding: 10px 0;
    gap: 10px;
    h1{
        color: ${({ theme }) => theme.labelNormal};
        ${DodamTypography.Heading2.Bold}
    }
`
export const PosterImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.fillNormal};
    ${DodamShape.Medium};
    input{
        display: none;
    }
`
export const ImgButton = styled.label`
    display: flex;
    padding: 5px 16px;
    width: 120px;
    height: 34px;
    background-color: ${({ theme }) => theme.backgroundNormal};
    color: ${({ theme }) => theme.primaryNormal};
    ${DodamTypography.Body1.Bold};
`
export const SummaryInput = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 10px;
    background-color: ${({ theme }) => theme.fillNormal};
    color: ${({ theme }) => theme.labelNormal};
    ${DodamShape.Medium};
    ${DodamTypography.Body1.Regular};
    resize: none;
    border: none;
    outline: none;
    
`;

export const PosterButtonBox = styled.div`
    display: flex;
    width: 100%;   
    align-items: center;
    justify-content: space-between;
     `