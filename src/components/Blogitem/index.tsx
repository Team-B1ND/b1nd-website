import { Blog } from '../../types/Blog/blog.type';
import * as S from './style';

interface BlogItemProps {
  data:Blog
}

const BlogItem = ({ data }: BlogItemProps) => {
  return (
    <S.StyledBlogItemWrap>
      <S.BlogItemImage />
      <S.BlogItemContext>
        <span>{data.post_title}</span>
        <p>{data.post_content}</p>
      </S.BlogItemContext>
    </S.StyledBlogItemWrap>
  )
}

export default BlogItem
