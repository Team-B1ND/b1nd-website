import { DodamDivider } from "@b1nd/dds-web";
import { FooterContainer, FooterItem, TeamInfo } from "./style";

const Footer = () => {
    const handleRouter = (link:string)=>{
        window.location.href = link;
      }
      const handleLink = (link: string) => {
        window.open(link, "_blank");
    };
    

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
                <span onClick={()=>handleRouter("/")}>팀 소개</span>
                <span onClick={()=>handleRouter("/service")}>서비스</span>
                <span onClick={()=>handleRouter("/blog")}>블로그</span>
            </FooterItem>
            <FooterItem>
                <span onClick={()=>handleLink("https://dodam.b1nd.com")}>도담도담</span>
                <span onClick={() => handleLink("https://store.naver.com")}>네이버 스토어</span>
                <span onClick={() => handleLink("https://github.com/Team-B1ND")}>깃허브</span>
            </FooterItem>
        </FooterContainer>
        </>
    )
}

export default Footer;