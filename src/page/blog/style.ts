import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

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
  background-color: ${({ theme }) => theme.fillNormal};
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
  background-color: ${({ theme }) => theme.backgroundNormal};
`

export const BlogSerachInput = styled.input`
  width: 100%;
  height: 24px;
  background: none;
  border: 0;
  outline: none;
  color: ${({ theme }) => theme.labelAssistive};
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
  width: 100%;
  height: 100%;
  min-height: 800px;

  padding: 20px;

  ${DodamTypography.Body1.Medium};
  color: ${({ theme }) => theme.labelNormal};


  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 88px; 
  justify-items: center; 
  align-items: stretch; 
  position: relative; 
`
export const PagiNation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  button{
    padding: 10px 20px;
    border: none;
    background-color: ${({ theme }) => theme.fillNormal};
    color: ${({ theme }) => theme.labelNormal};   
    ${DodamTypography.Body1.Bold}
    ${DodamShape.Medium}
  }
  span{
    color: ${({ theme }) => theme.labelNormal};   
    ${DodamTypography.Body1.Medium}
  }
`

export const ToastText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Title2.Bold}
`