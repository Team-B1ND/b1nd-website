import { DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const StyledBlogItemWrap = styled.div`
  width: 80%; /* 부모 요소의 너비에 맞춤 */
  height: 250px; /* 아이템의 고정 높이 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;
`

export const BlogItemImage = styled.img`
  width: 100%;
  height: 85%;

  object-fit: cover;
  border-radius: 8px; /* 모서리 둥글게 */
`

export const BlogItemContext = styled.div`
  width: 100%;
  height: 15%;

  span {
    ${DodamTypography.Title3.Bold}
    font-size: 20px;
    color: ${({ theme }) => theme.labelNormal};
  }

  p {
    ${DodamTypography.Body1.Medium}
    color: ${({ theme }) => theme.labelAssistive};
  }
`
