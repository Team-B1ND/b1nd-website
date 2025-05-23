import {
  BlogBox,
  BlogContentBox,
  BlogContentContainer,
  BlogSerach,
  BlogSerachIcon,
  BlogSerachInput,
} from './style';
import { Title } from '../style';
import { DodamErrorBoundary, Magnifyingglass } from '@b1nd/dds-web';
import BlogItem from '../../components/Blogitem/index';
import WriteButton from '../../components/WriteButton';
import { useState } from 'react';
import { useBlogsList } from '../../queries/Blog/blog.query';

const Blog = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useBlogsList({ page })

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
            <DodamErrorBoundary text="에러발생"  showButton={true}>
              {isLoading ? (<div>로딩중..</div>):
              (
                <>
                {data?.data.map((item, index) => (
                <BlogItem key={index} data={item} />
                  ))}
                </>
              )
              }
            </DodamErrorBoundary>
          </BlogContentBox>
        </BlogContentContainer>
      </div>
      <WriteButton/>
    </BlogBox>
  )
}

export default Blog
