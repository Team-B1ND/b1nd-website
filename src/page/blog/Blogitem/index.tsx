import React from 'react'
import * as S from './style'

interface BlogItemProps {
  title: string
}

const BlogItem = ({ title }: BlogItemProps) => {
  return (
    <S.StyledBlogItemWrap>
      <S.BlogItemImage />
      <S.BlogItemContext>
        <span>{title}</span>
        <p>{title}</p>
      </S.BlogItemContext>
    </S.StyledBlogItemWrap>
  )
}

export default BlogItem
