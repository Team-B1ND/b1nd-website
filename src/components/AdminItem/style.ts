import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const AdminItemBox = styled.div`
    display: flex;
    width: 100%;
    height: 261px;
    padding: 10px;
    gap: 10px;
`

export const ImgBox = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
    width: 425px;
    height: 100%;
    ${DodamShape.Large}
    cursor: pointer;
`

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    justify-content: space-between;
`
export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    span:nth-child(1){
        ${DodamTypography.Title3.Bold};
        color: ${({theme})=>theme.labelNormal};
    }
    
    span:nth-child(2){
        ${DodamTypography.Body1.Medium};
        color: ${({theme})=>theme.labelAssistive};
    }   
`

export const ButtonBox = styled.div`
    display: flex;
    gap: 10px;
`