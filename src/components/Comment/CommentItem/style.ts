import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const CommentItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  gap: 8px;
  background-color: ${({ theme }) => theme.fillNormal};
`;

export const CommentAuthor = styled.div`
  display: flex;
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body1.Bold};
`
export const CommentContent = styled.div`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Body1.Medium};
`


export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 0;

  
`;