import { useState, useEffect } from 'react';
import Blog from '../blog/blog';
import Admin from './admin';
import { useUserQuery } from '../../queries/User/user.query';
import styled from 'styled-components';
import { useUserStore } from '../../store/useUserStore';

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const NavButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ active, theme }) => (active ? theme.primaryNormal : theme.labelNormal)};
  color: ${({ active }) => (active ? 'white' : 'black')};
`;

const BlogMain = () => {
  const { data, isLoading } = useUserQuery();
  const [tab, setTab] = useState<boolean>(false);
  const [blocked, setBlocked] = useState(false);

  const handleTabChange = () => {
    setTab((prev) => !prev);
    console.log("SSDSdsd");
    
  }
  const setUser = useUserStore((state) => state.setUserRole);
  
  useEffect(() => {
    if (!isLoading && data?.user_name !== 'admin') {
      alert('관리자만 접근할 수 있습니다.');
      setBlocked(true);
      window.location.href = '/blog'; 
    
    } else {
    setUser(data?.user_role!);
      setBlocked(false);
    }
  }, [tab, data, isLoading]);

  
  
  if (isLoading) return <div>로딩 중...</div>;
  if (blocked) return null;
  return (
    <div>
      <NavContainer>
        <NavButton active={!tab} onClick={() => handleTabChange()}>
          블로그
        </NavButton>
        <NavButton active={tab} onClick={() =>handleTabChange()}>
          블로그 관리
        </NavButton>
      </NavContainer>

      {!tab  ?  <Blog />:
      <Admin/>
      }
      
    </div>
  );
};

export default BlogMain;