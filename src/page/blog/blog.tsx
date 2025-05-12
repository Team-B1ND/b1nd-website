import {
  BlogBox,
  BlogContentBox,
  BlogContentContainer,
  BlogSerach,
  BlogSerachIcon,
  BlogSerachInput,
} from './style';
import { Title } from '../style';
import { Magnifyingglass } from '@b1nd/dds-web';
import BlogItem from '../../components/Blogitem/index';
import WriteButton from '../../components/WriteButton';

const Blog = () => {
  const blogItems = [
    { id: 1, title: 'RAG7 기술을 활용한 도담단 AI 만들기' },
    { id: 2, title: '디자인 시스템으로 100배 빨리기 UI 디자인하기' },
    { id: 3, title: 'RAG7 기술을 활용한 도담단 AI 만들기' },
    { id: 4, title: '디자인 시스템으로 100배 빨리기 UI 디자인하기' },
    { id: 5, title: 'RAG7 기술을 활용한 도담단 AI 만들기' },
    { id: 6, title: '디자인 시스템으로 100배 빨리기 UI 디자인하기' },
  ]

  return (
    <BlogBox >
      <Title>
        <h1>
          함께 배우고 나누고
          <br />
          성장하는 블로그
        </h1>
        <span>
          학생들이 서로의 지식과 경험을 나누고 배우는 공간입니다.
          <br />각 분야의 경험과 노하우를 공유하며 모두가 함께 발전하는
          블로그입니다.
        </span>
      </Title>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <BlogContentContainer>
          <BlogSerach>
            <BlogSerachIcon>
              <Magnifyingglass color='labelAlternative' />
            </BlogSerachIcon>
            <BlogSerachInput placeholder='검색' />
          </BlogSerach>
          <BlogContentBox>
            {blogItems.map((item, index) => (
              <BlogItem key={index} title={item.title} />
            ))}
          </BlogContentBox>
        </BlogContentContainer>
      </div>
      <WriteButton/>
    </BlogBox>
  )
}

export default Blog
