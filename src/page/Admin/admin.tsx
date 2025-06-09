import {
    BlogBox,
    BlogContentBox,
    BlogContentContainer,
    PagiNation,
    ToastText,
  } from '../blog/style'; 
  import { Title } from '../style';
  import { DodamErrorBoundary } from '@b1nd/dds-web';
  import AdminItem from '../../components/AdminItem';
  import { useState } from 'react';
  import { useBlogWaitingList } from '../../queries/Blog/blog.query';
  
  const Admin = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching } = useBlogWaitingList({ page });
  
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
          <h1>블로그 수락/거절 관리</h1>
          <span>관리자는 등록 대기 중인 블로그 글을 수락하거나 거절할 수 있습니다.</span>
        </Title>
  
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <BlogContentContainer>
            <BlogContentBox>
              <DodamErrorBoundary text="에러 발생" showButton={true}>
                {isLoading || isFetching ? (
                  <ToastText>로딩중..</ToastText>
                ) : data?.data.length === 0 ? (
                  <ToastText>대기 중인 게시글이 없습니다.</ToastText>
                ) : (
                  <>
                    {data?.data.map((item, index) => (
                      <AdminItem key={index} data={item} />
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
      </BlogBox>
    );
  };
  
  export default Admin;
  