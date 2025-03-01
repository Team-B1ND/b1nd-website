import React, { useState } from "react";
import { HeaderBox, HeaderContainer,MobileMenuIcon,  Nav, NavItem } from "./style";
import { Close, Menu } from "@b1nd/dds-web";
import {DodamLogo} from "../../assets";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
        <HeaderBox menuVisible={menuVisible}>
        {menuVisible ? "" : <DodamLogo/>}
        {/* 모바일 화면에서 메뉴 토글 버튼 */}
        <MobileMenuIcon onClick={toggleMenu}>
            {menuVisible ? <Close color="labelNeutral"/> :<Menu color="labelNeutral"/> }
        </MobileMenuIcon>

        {/* 네비게이션 메뉴 */}
        <Nav menuVisible={menuVisible}>
            <NavItem menuVisible={menuVisible}>팀소개</NavItem>
            <NavItem menuVisible={menuVisible}>서비스</NavItem>
            <NavItem menuVisible={menuVisible}>블로그</NavItem>
        </Nav>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
