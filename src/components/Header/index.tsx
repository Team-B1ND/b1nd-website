import React, { useState } from "react";
import { HeaderBox, HeaderContainer,MobileMenuIcon,  Nav, NavItem } from "./style";
import { Menu } from "@b1nd/dds-web";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
        <HeaderBox>
        <img src={Logo} alt="error" />

        {/* 모바일 화면에서 메뉴 토글 버튼 */}
        <MobileMenuIcon onClick={toggleMenu}>
            <Menu />
        </MobileMenuIcon>

        {/* 네비게이션 메뉴 */}
        <Nav menuVisible={menuVisible}>
            <NavItem>팀소개</NavItem>
            <NavItem>서비스</NavItem>
            <NavItem>블로그</NavItem>
        </Nav>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
