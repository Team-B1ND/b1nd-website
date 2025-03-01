import { DodamDivider } from "@b1nd/dds-web";
import { FooterContainer, FooterItem, TeamInfo } from "./style";

const Footer = () => {

    return(
        <>
        <DodamDivider type="Small"/>
        <FooterContainer>
            <TeamInfo>
                <span>B1ND(바인드)</span>
                <span>대구소프트웨어마이스터고등학교</span>
                <span>이메일 : mdev_team@dgsw.hs.kr</span>
            </TeamInfo>
            <FooterItem>
                <span>팀 소개</span>
                <span>서비스</span>
                <span>블로그</span>
            </FooterItem>
            <FooterItem>
                <span>도담도담</span>
                <span>네이버 스토어</span>
                <span>깃허브</span>
            </FooterItem>
        </FooterContainer>
        </>
    )
}

export default Footer;