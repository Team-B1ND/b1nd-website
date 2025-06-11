import { useNavigate } from 'react-router-dom';
import { Blog } from '../../types/Blog/blog.type';
import * as S from './style';

interface BlogItemProps {
  data:Blog
}

const BlogItem = ({ data }: BlogItemProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/blog/${data.post_id}`); 
  };

  return (
    <S.StyledBlogItemWrap onClick={handleClick}>
      <S.BlogItemImage />
      <S.BlogItemContext>
        <span>{data.post_title}</span>
        <p>{data.post_summary}</p>
      </S.BlogItemContext>
    </S.StyledBlogItemWrap>
  )
}

export default BlogItem
