import { ServiceBox, ServiceEtc, ServiceImg, ServiceIntroductionBox, ServiceTitle, ServiceContent } from "./style";
import { Title } from "../style";
import { DodamDivider } from "@b1nd/dds-web";
import arrow from "../../assets/components/arrow_up.svg";
import { DodamAppLogo,ArrowUp } from "../../assets";
import Dt from "../../assets/f92b5275-92ec-4ce0-b196-c71dc36239c3_service_01.avif.png";

const Service = () => {
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
                <DodamAppLogo/>
                <h1>도담도담  <img src={arrow} alt="" /></h1>
                <span>학교 생활을 더 편리하게 관리할 수 있도록 다양한 기능을 제공하는 스마트 스쿨 플랫폼입니다.</span>
            </ServiceTitle>
            <ServiceImg src={Dt}/>
        </ServiceIntroductionBox>
        <ServiceEtc>
                <ServiceContent>
                <h1>디자인 시스템<ArrowUp/></h1>
                <span>
                도담도담의 디자인시스템은 학교 서비스에 최적화된 UI/UX 가이드라인입니다. 일관된 디자인을 유지하고, 개발 효율성을 높이기 위해 제작되었습니다. Figma에서 확인할 수 있으며, 누구나 쉽게 적용하고 확장할 수 있습니다.
                </span>
                </ServiceContent>

                <ServiceContent>
                <h1>오픈소스<ArrowUp/></h1>
                <span>
                도담도담의 디자인시스템은 학교 서비스에 최적화된 UI/UX 가이드라인입니다. 일관된 디자인을 유지하고, 개발 효율성을 높이기 위해 제작되었습니다. Figma에서 확인할 수 있으며, 누구나 쉽게 적용하고 확장할 수 있습니다.
                </span>
                </ServiceContent>

                <ServiceContent>
                <h1>디자인 시스템<ArrowUp/></h1>
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