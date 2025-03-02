import { ServiceBox, ServiceEtc, ServiceImg, ServiceIntroductionBox, ServiceTitle, ServiceContent } from "./style";
import { Title } from "../style";
import { DodamDivider } from "@b1nd/dds-web";
import { DodamAppLogo,ArrowUp } from "../../assets";
import Dodam from "../../assets/Homepaeg.png";
import { useWindowSize } from "../../utils/useWindowSize";
import { handleLink } from "../../utils/useNavigation";

const Service = () => {
    const width = useWindowSize();     

    return(
        <ServiceBox>
        <Title>
            <h1>
            학생들을 위해<br/>
            학생들이 만든 서비스
            </h1>
            <span>
            바인드 팀원들이 직접 기획하고 개발하는 서비스입니다. <br/>
            우리는 기술로 학교 생활을 변화시키고, 모두가 함께 성장할 수 있는 환경을 만들어 갑니다
            </span>
        </Title>
        <DodamDivider type="Small"/>
        <ServiceIntroductionBox>
            <ServiceTitle>
                {width <= 767  ? "" : <DodamAppLogo/>} 
                <div style={{display:"flex",gap:"16px",flexDirection:"column"}}>
                <h1 onClick={()=>handleLink("https://dodam.b1nd.com")}>
                    도담도담  
                    <ArrowUp/>
                    </h1>
                <span>학교 생활을 더 편리하게 관리할 수 있도록 다양한 기능을 제공하는 스마트 스쿨 플랫폼입니다.</span>
                </div>
            </ServiceTitle>
            <ServiceImg src={Dodam}/>
        </ServiceIntroductionBox>
        <ServiceEtc>
                <ServiceContent>
                <h1 onClick={()=>handleLink("https://dds.b1nd.com")}>
                    디자인 시스템
                    <ArrowUp/>
                </h1>
                <span>
                도담도담의 디자인시스템은 학교 서비스에 최적화된 UI/UX 가이드라인입니다. 일관된 디자인을 유지하고, 개발 효율성을 높이기 위해 제작되었습니다. Figma에서 확인할 수 있으며, 누구나 쉽게 적용하고 확장할 수 있습니다.
                </span>
                </ServiceContent>

                <ServiceContent>
                <h1 onClick={()=>handleLink("https://github.com/Team-B1ND")}>
                    오픈소스
                    <ArrowUp/>
                </h1>
                <span>
                도담도담의 디자인시스템은 학교 서비스에 최적화된 UI/UX 가이드라인입니다. 일관된 디자인을 유지하고, 개발 효율성을 높이기 위해 제작되었습니다. Figma에서 확인할 수 있으며, 누구나 쉽게 적용하고 확장할 수 있습니다.
                </span>
                </ServiceContent>

                <ServiceContent>
                <h1 onClick={()=>handleLink("https://github.com/Team-B1ND")}>
                    DAuth                   
                    <ArrowUp/>
                </h1>
                <span>
                도담도담의 디자인시스템은 학교 서비스에 최적화된 UI/UX 가이드라인입니다. 
                일관된 디자인을 유지하고, 개발 효율성을 높이기 위해 제작되었습니다. Figma에서 확인할 수 있으며, 누구나 쉽게 적용하고 확장할 수 있습니다.
                </span>
                </ServiceContent>
        </ServiceEtc>
       
        </ServiceBox>
    )
}
export default Service;