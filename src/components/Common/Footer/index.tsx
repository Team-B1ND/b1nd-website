import { DodamDivider } from "@b1nd/dds-web";
import { FooterBox, FooterContainer, FooterItem, FooterLinkBox, TeamInfo } from "./style";
import { handleLink, handleRouter } from "../../../utils/useNavigation";

const Footer = () => {

    return(
        <>
        <FooterContainer>
        <DodamDivider type="Small"/>
            <FooterBox>
                <TeamInfo>
                    <span>B1ND(바인드)</span>
                    <span>대구소프트웨어마이스터고등학교</span>
                    <span>이메일 : mdev_team@dgsw.hs.kr</span>
                    <span>v2</span>
                </TeamInfo>
                <FooterLinkBox>
                    <FooterItem>
                        <span onClick={()=>handleRouter("/")}>팀 소개</span>
                        <span onClick={()=>handleRouter("/service")}>서비스</span>
                        <span onClick={()=>handleRouter("/blog")}>블로그</span>
                    </FooterItem>
                    <FooterItem>
                        <span onClick={()=>handleLink("https://dodam.b1nd.com")}>도담도담</span>
                        <span onClick={() => handleLink("https://github.com/Team-B1ND")}>깃허브</span>
                    </FooterItem>
                </FooterLinkBox>
            </FooterBox>
        </FooterContainer>
        </>
    )
}

export default Footer;