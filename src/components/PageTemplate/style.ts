import styled from "styled-components";

export const LayoutContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    user-select: none;
    margin: 0;
    background-color: ${({theme})=> theme.backgroundNormal};
`

export const Layout = styled.div`
    position: relative;
    top: 74px; 
    display: flex;
    flex-direction: column;
    padding: 100px 20px 10px 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.backgroundNormal};
    @media (max-width: 767px) {
        width: 100%;
        padding:  72px 20px;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 767px) {
        width: 100%;
    }
`
