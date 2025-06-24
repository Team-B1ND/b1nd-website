import React, { useState } from 'react';
import * as S from './style';
import ProfileImage from "../../assets/profile.svg";
import RandomName from './RandomName';
import { DodamFilledButton } from '@b1nd/dds-web';
import CommentItem from './CommentItem';
import { useCommentQuery, useCommentMutation, useDeleteCommentMutation } from '../../queries/Comment/comment.query';
import { B1ndToast } from '@b1nd/b1nd-toastify';
import { QueryClient, useQueryClient } from 'react-query';

interface CommentProps {
  postId: number;
  canDelete?: boolean;
}

const Comment = ({ postId,canDelete = false  }: CommentProps) => {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const deleteMutation = useDeleteCommentMutation();
  const { data, refetch } = useCommentQuery(postId);
  const mutation = useCommentMutation();
  const queryClient = useQueryClient();

  const handleChangeRandomName = (newName: string) => {
    setAuthorName(newName);
  };

  const handleSubmit = () => {
    if (!content.trim()) return B1ndToast.showInfo("댓글 내용을 입력해주세요.");

    mutation.mutate(
      { postId, authorName, content },
      {
        onSuccess: () => {
          setContent("");
          refetch();
        },
        onError: () => {
          B1ndToast.showError("댓글 작성에 실패했습니다.");
        },
      }
    );
  };

  const handleDelete = (commentId: number) => {

    deleteMutation.mutate(commentId, {
      onSuccess: () => {
        B1ndToast.showSuccess("댓글이 삭제되었습니다.");
        queryClient.invalidateQueries(['comments', postId]);
        refetch();
      },
      onError: () => {
        B1ndToast.showError("댓글 삭제에 실패했습니다.");
      },
    });
  };

  return (
    <S.CommentBox>
      <S.CommentHeader>
      <span>댓글 {data?.totalCount ?? 0}</span>
        <span>댓글 관련문의: mdev_team@dgsw.hs.kr</span>
      </S.CommentHeader>
      <S.CommentInputBox>
        <S.CommentName>
          <img src={ProfileImage} alt="프로필 이미지" />
          <RandomName onChange={handleChangeRandomName}/>
        </S.CommentName>
        <S.CommentInput 
          placeholder='입력한 댓글은 수정하거나 삭제할 수 없습니다. 또한 허위사실, 욕설, 사칭등 댓글은 통보없이 삭제 될 수 있습니다 .'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
          <S.CommentButton>
            <DodamFilledButton
              width={112}
              size='Medium'
              text='댓글 남기기'
              onClick={() => handleSubmit()}
              backgroundColorType='Primary'
              textTheme='staticWhite'
            />
          </S.CommentButton>
      </S.CommentInputBox>
      
      {Array.isArray(data?.comments) && data?.comments.map((comment) => (
      <CommentItem
        key={comment.commentId}
        authorName={comment.authorName}
        content={comment.content}
        onDelete={canDelete ? () => handleDelete(comment.commentId) : undefined}

      />
    ))}
      
    </S.CommentBox>
  );
}


export default Comment;