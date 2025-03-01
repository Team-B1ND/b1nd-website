import styled from "styled-components";

export const LayoutContainer = styled.div`
    height: 100vh;
    display: flex;
    user-select: none;
    margin: 0;
    background-color: ${({theme})=> theme.backgroundNoraml};
`

export const Layout = styled.div`
    position: relative;
    top: 74px; 
    display: flex;
    padding: 100px 20px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    &::-webkit-scrollbar {
    display: none;
  }
`
