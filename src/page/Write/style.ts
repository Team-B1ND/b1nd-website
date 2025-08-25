import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 88px;
  min-height: 579px;
  background-color: ${({theme})=>theme.backgroundNormal};
  

 
`;

export const WriteInputBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const Left = styled.div`
  flex: 1;
  width: 50%;
  padding: 2rem;
  border-right: 1px solid ${({theme})=>theme.labelAssistive};
  display: flex;
  flex-direction: column;


  @media (max-width: 767px) {
    width: 100%;
    border-right: none;
  }
`;

export const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({theme})=>theme.backgroundNormal};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const Right = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  color: ${({ theme }) => theme.labelNormal};


  @media (max-width: 767px) {
     display: none;
    }

  h1 {
    margin-bottom: 10px;
  }

  pre {
    background-color: ${({ theme }) => theme.fillNormal}; 
    padding: 1rem;
    ${DodamShape.Medium};
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }

  code {
    ${DodamTypography.Body2.Regular};
    color: ${({ theme }) => theme.labelStrong}; 
    font-family: 'Fira Code', 'Source Code Pro', monospace;
  }
  p, li {
    white-space: pre-wrap;
    word-break: break-word;
  }

  a {
    color: ${({ theme }) => theme.primaryNormal}; 
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.primaryAlternative || theme.primaryAssistive};
    }
  }

  /* 인라인 코드 스타일 */
  p > code {
    background-color: ${({ theme }) => theme.fillNormal};
    padding: 0.2rem 0.4rem;
    border-radius: 5px;
    font-family: 'Fira Code', 'Source Code Pro', monospace;
  }

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

export const TitleInput = styled.input`
  ${DodamTypography.Title1.Bold};
  width: 100%;
  border: none;
  outline: none;
  background:none;
  margin-bottom: 1rem;
  color: ${({theme})=>theme.labelNormal};

  &::placeholder {
    color: ${({theme})=>theme.labelAssistive};  
  }

  @media (max-width: 767px) {
    ${DodamTypography.Title2.Bold};
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  ${DodamTypography.Heading2.Medium};
  border: none;
  outline: none;
  resize: none;
  height: 100%;
  color: ${({theme})=>theme.labelNormal};
  
  background:none;

  &::placeholder {
    color: ${({theme})=>theme.labelAssistive};
  }

  @media (max-width: 767px) {
    ${DodamTypography.Headline.Medium};
  }
`;
