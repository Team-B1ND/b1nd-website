import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const BlogBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 88px;
    margin-bottom: 88px;
`

export const BlogSerach = styled.div`
  width: 320px;
  height: 44px;
  ${DodamShape.ExtraSmall};
  background-color: ${({theme})=>theme.fillNormal};
  display: flex;
  align-items: center;
  padding-right: 24px;
`

export const BlogSerachIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  background-color: ${({theme})=>theme.backgroundNormal};
`;

export const BlogSerachInput = styled.input`
  width: 100%;
  height: 24px;
  background: none;
  border: 0;
  outline: none;
  color: ${({theme})=>theme.labelAssistive};
`

export const BlogContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 80%;
    height: 100%;
`

export const BlogContentBox = styled.div`
    display: flex;
    gap: 88px;
    min-height: 500px;
    justify-content: center;
    align-items: center;
    ${DodamTypography.Body1.Medium};
    color: ${({theme})=>theme.labelNormal};

`