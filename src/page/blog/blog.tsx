import {
  BlogBox,
  BlogContentBox,
  BlogContentContainer,
  BlogSerach,
  BlogSerachIcon,
  BlogSerachInput,
  PagiNation,
  ToastText,
} from './style';
import { Title } from '../style';
import { DodamErrorBoundary, Magnifyingglass } from '@b1nd/dds-web';
import BlogItem from '../../components/Blogitem';
import WriteButton from '../../components/WriteButton';
import { useState } from 'react';
import { useBlogsList } from '../../queries/Blog/blog.query';

const Blog = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useBlogsList({ page });

  const totalPages = data?.totalPage || 1;

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(prev => prev + 1);
  };


  return (
    <BlogBox>
      <Title>
        <h1>
          함께 배우고 나누고
          <br />
          성장하는 블로그
        </h1>
        <span>
          학생들이 서로의 지식과 경험을 나누고 배우는 공간입니다.
          <br />
          각 분야의 경험과 노하우를 공유하며 모두가 함께 발전하는 블로그입니다.
        </span>
      </Title>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <BlogContentContainer>
          <BlogSerach>
            <BlogSerachIcon>
              <Magnifyingglass color='labelAlternative' />
            </BlogSerachIcon>
            <BlogSerachInput placeholder='검색' />
          </BlogSerach>

          <BlogContentBox>
            <DodamErrorBoundary text="에러발생" showButton={true}>
            {isLoading || isFetching ? (
              <ToastText>로딩중..</ToastText>
            ) : data?.data.length === 0 ? (
              <ToastText>
                게시글이 없습니다.
              </ToastText>
            ) : (
              <>
                {data?.data.map((item, index) => (
                  <BlogItem key={index} data={item} />
                ))}
              </>
            )}
            </DodamErrorBoundary>
          </BlogContentBox>

          
          <PagiNation>
            <button disabled={page === 1} onClick={handlePrev}>
              이전
            </button>
            <span>
              {page} / {totalPages}
            </span>
            <button disabled={page === totalPages} onClick={handleNext}>
              다음
            </button>
          </PagiNation>
        </BlogContentContainer>
      </div>

      <WriteButton />
    </BlogBox>
  );
};

export default Blog;
