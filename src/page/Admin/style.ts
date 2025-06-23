import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const AdminBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 88px;
`

export const BlogContentBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 800px;

  padding: 20px;

  ${DodamTypography.Body1.Medium};
  color: ${({ theme }) => theme.labelNormal};
`