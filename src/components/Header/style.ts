import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  padding: 24px 17px;
  background-color: ${({theme})=> theme.backgroundNormal};
  z-index: 5;
`;

export const HeaderBox = styled.div<{ menuVisible: boolean }>`
  width: 80%;
  display: flex;
  justify-content:${(props)=> (props.menuVisible ? "flex-end" : "space-between")};
  align-items: center;

  
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 767px) {
    display: block;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Nav = styled.nav<{ menuVisible: boolean }>`
  display: ${(props)=> (props.menuVisible ? "flex" : "none")};
  gap: 20px;
  flex-direction: ${(props)=> (props.menuVisible ? "column" : "row")};
  @media (max-width: 767px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    height: ${(props)=> (props.menuVisible ? "100vh" : "")};
    background-color: ${({theme})=> theme.backgroundNormal};
    padding: ${(props) => (props.menuVisible ? "30px": "10px")};;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled.a<{ 
  menuVisible: boolean ;
  $isAtv:boolean;
  }>`
  cursor: pointer;
  color: ${({theme,$isAtv})=>$isAtv ? theme.primaryNormal : theme.labelNormal};
  text-decoration: none;
  ${DodamTypography.Body2.Medium};
  @media (max-width: 767px) {
    ${DodamTypography.Heading1.Bold};

  }

  &:hover {
    color:${({theme})=>theme.primaryNormal};
  }
`;
