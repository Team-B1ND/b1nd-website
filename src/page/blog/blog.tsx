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
import { useBlogsList, useBlogSearch } from '../../queries/Blog/blog.query';

const Blog = () => {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const { data: blogsData, isLoading: blogsLoading, isFetching: blogsFetching } = useBlogsList({ page });
  const { data: searchData, isLoading: searchLoading, isFetching: searchFetching } = useBlogSearch({ 
    keyword: searchKeyword, 
    page 
  });

  // 검색 결과가 있으면 검색 데이터를, 없으면 일반 블로그 데이터를 사용
  const data = searchKeyword ? searchData : blogsData;
  const isLoading = searchKeyword ? searchLoading : blogsLoading;
  const isFetching = searchKeyword ? searchFetching : blogsFetching;

  const totalPages = data?.totalPage || 1;

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(prev => prev + 1);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchKeyword(keyword);
      setPage(1);
    }
  };

  const handleSearchClick = () => {
    setSearchKeyword(keyword);
    setPage(1);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    if (e.target.value === '') {
      setSearchKeyword('');
      setPage(1);
    }
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
            <BlogSerachIcon onClick={handleSearchClick}>
              <Magnifyingglass color='labelAlternative' />
            </BlogSerachIcon>
            <BlogSerachInput 
              placeholder='검색' 
              value={keyword}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearch}
            />
          </BlogSerach>

          <BlogContentBox>
            <DodamErrorBoundary text="에러발생" showButton={true}>
            {isLoading || isFetching ? (
              <ToastText>로딩중..</ToastText>
            ) : !data || data.data.length === 0 ? (
              <ToastText>
                {searchKeyword ? '검색 결과가 없습니다.' : '게시글이 없습니다.'}
              </ToastText>
            ) : (
              <>
                {data.data.map((item, index) => (
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
