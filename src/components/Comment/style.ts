import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 88px;
  gap: 8px;
`;

 export const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:nth-child(1){
        color: ${({ theme }) => theme.labelNormal};
        ${DodamTypography.Heading2.Medium}
    }
    span:nth-child(2){
        color: ${({ theme }) => theme.labelAssistive};
        ${DodamTypography.Headline.Regular}
    }
`

export const CommentInputBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 12px;
`
export const CommentName = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: min-content;
    `

export const CommentInput = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.fillNormal};
    border: 1px solid ${({ theme }) => theme.labelAssistive};
    border-radius: 8px;
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Medium}
    resize: none;
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.labelNormal};
    }
    &::placeholder {
        color: ${({ theme }) => theme.labelAssistive};
        ${DodamTypography.Body1.Medium}
    }
    `
export const CommentButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
 `