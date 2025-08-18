import { 
    Headline, 
    HeadlineContent, 
    HeadlineFlexBox, 
    IntroductionBox,
    Title, 
    HistoryBox, 
    HeaderDate, 
    HistoryItemBox, 
    HistoryText,
    MemberBox,
    MemberTitle,
    MemberTable
  } from "./style";
import { ChevronDown, DodamDivider } from "@b1nd/dds-web";
import {DodamAppLogo, FigmaLogo, GithubLogo} from "../assets";
import { GENERATIONS } from "../constants/member/member.constants";
import { HISTORY_ITME } from "../constants/history.constants";
import { useState } from "react";
import { Crown } from "../assets/components/crown";



const Home = () => {

    const [openGenerations, setOpenGenerations] = useState<Set<string>>(new Set());

    const toggleGeneration = (id: string) => {
        setOpenGenerations(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id); else next.add(id);
            return next;
        });
    };

    return(
        <IntroductionBox>
            <Title>
                <h1>
                학교의 미래<br/>
                바인드에서 시작됩니다
                </h1>
                <span>
                바인드팀은 학생들의 곁에서 더 나은 학교생활을 지원하기 위해 최선을 다해왔습니다.<br/>
                바인드는 모든 대구소프트웨어 학생, 선생님들과 함께 나아갑니다
                </span>
            </Title>
            <DodamDivider type="Small"/>
            <Headline>
                <p>Mission 1</p>
                <HeadlineFlexBox>
                <HeadlineContent>
                     <h1>
                    스마트 스쿨으로<br/>
                    학교의 새로운 패러다임을 만듭니다
                    </h1>
                    <span>
                    스마트 스쿨을 통해 학교 생활을 더욱 효율적이고 편리하게 만듭니다.<br/>
                    기술로 변화하는 새로운 교육 환경을 선도합니다.
                    </span>
                </HeadlineContent>
                <DodamAppLogo />
               </HeadlineFlexBox>
            </Headline>

            <Headline>
                <p>Mission 2</p>
                <HeadlineFlexBox>
                <HeadlineContent>
                     <h1>
                     모든 학생이 <br/>
                     함께 성장할 수 있도록
                    </h1>
                    <span>
                    GitHub에 오픈소스로 공개하여 누구나 쉽게 활용하고 기여할 수 있도록 합니다. <br/>
                    디자인 시스템을 Figma에 공유해 모든 학생이 함께 성장할 수 있도록 지원합니다.
                    </span>
                </HeadlineContent>
                <div style={{display:"flex", gap:"10px"}}>
                <GithubLogo size={80}/>
                <FigmaLogo />
                </div>
               </HeadlineFlexBox>
            </Headline>
            <DodamDivider type="Small"/>
            <HistoryBox>
                <p>히스토리</p>
                {HISTORY_ITME.map((item )=>(
                    <HistoryItemBox>
                    <HeaderDate>
                        {item.year !== "" ? <span></span> : ""}
                        {item.year !== "" ?  <>{item.year}</> : <div style={{width:"120px"}}>{item.year}</div>}
                    </HeaderDate>
                    <HistoryText>
                        {item.month ==="" ? <span style={{display:"none"}}/> : <span>{item.month}</span>}
                        <span>{item.content}</span>
                    </HistoryText>
                </HistoryItemBox>
                ))}
            </HistoryBox>
            <DodamDivider type="Small"/>
            <MemberBox>
                <MemberTitle>
                    <b>B1ND MEMBER</b>
                    
                </MemberTitle>
                <MemberTable>
                    <tbody>
                        {GENERATIONS.map((g) => {
                            const isOpen = openGenerations.has(g.id);
                        

                            return (
                                <>
                                    <tr key={g.id}  onClick={() => toggleGeneration(g.id)}>
                                        <th scope="row">{g.label}</th>
                                        <th scope="row"></th>
                                        <th scope="row" className="right">
                                            <span style={{ display: "inline-flex", transition: "transform .2s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",cursor: "pointer" }}>
                                                <ChevronDown size={24} color="labelNormal"/>
                                            </span>
                                        </th>
                                    </tr>
                                    {isOpen && g.members.map((m) => (
                                        <tr key={`${g.id}-${m.name}`}>
                                            <th scope="row">
                                                <div className="trc-name">{m.name} {m.leader ? <Crown color="primaryNormal" /> : ""}</div>
                                            </th>
                                            <th scope="row">
                                                <div className="trc-string"> {m.role}</div>
                                            </th>
                                            <th scope="row" className="right">
                                                <div className="trc-icondefault">
                                                {m.links.map((l) => {
                                                
                                                    return (
                                                        <a
                                                        key={l.label}
                                                        href={l.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        >
                                                         {l.icon && (
                                                                <l.icon/>
                                                            )}
                                                        </a>
                                                    );
                                                    })}
                                                </div>
                                            </th>
                                        </tr>
                                    ))}
                                </>
                            );
                        })}
                    </tbody>
                </MemberTable>
            </MemberBox>
        </IntroductionBox>
    )
}

export default Home;
