import { BlogBox,BlogContentBox,BlogContentContainer,BlogSerach, BlogSerachIcon, BlogSerachInput } from "./style";
import { Title } from "../style";
import { Magnifyingglass } from "@b1nd/dds-web";

const Blog = () => {
    return(
        <BlogBox>
            <Title>
                <h1>
                함께 배우고 나누고<br/>
                성장하는 블로그
                </h1>
                <span>
                학생들이 서로의 지식과 경험을 나누고 배우는 공간입니다.<br/>
                각 분야의 경험과 노하우를 공유하며 모두가 함께 발전하는 블로그입니다.
                </span>
            </Title>
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <BlogContentContainer>
            <BlogSerach>
                <BlogSerachIcon>
                    <Magnifyingglass color="labelAlternative"/>
                </BlogSerachIcon>
                <BlogSerachInput placeholder="검색"/>
            </BlogSerach>
            <BlogContentBox>
                현재 블로그가 없습니다.
            </BlogContentBox>
            </BlogContentContainer>
            </div>
        </BlogBox>
    )
}

export default Blog;