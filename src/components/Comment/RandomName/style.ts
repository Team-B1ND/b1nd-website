import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const RandomNameBox = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 100%;
  padding: 10px;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.labelAssistive};
  ${DodamShape.Large};
  span{
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Heading2.Medium};
  }
`

export const RandomButton = styled.button`
  height: 100%;
  padding: 7px 10px;
  background-color: ${({ theme }) => theme.fillNetral};
  border: none;
  color: ${({ theme }) => theme.staticBlack};
  ${DodamTypography.Heading2.Medium};
  cursor: pointer;
  ${DodamShape.Medium};
  display: flex;
  align-items: center;
  justify-content: center;
   `