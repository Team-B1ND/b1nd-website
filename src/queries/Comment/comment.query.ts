import { useMutation, useQuery } from "react-query";
import CommentRepository from "../../repositories/Comment/CommentRepositoryImpl";
import { CommentResponse, CommentWriteParams } from "../../types/Comment/comment.type";


export const useCommentQuery = (postId: number) => {
  return useQuery<CommentResponse>({
    queryKey: ["comments", postId],
    queryFn: () => CommentRepository.getCommentList(postId),
    staleTime: 1000 * 60 * 10, 
    cacheTime: 1000 * 60 * 5, 
    keepPreviousData: true, 
  });
}

export const useCommentMutation = () => {
  const mutation = useMutation(({postId,authorName,content}:CommentWriteParams) =>
    CommentRepository.writeComment({ postId, authorName, content })
  );
  return mutation;
};

export const useDeleteCommentMutation = () => {
  const mutation = useMutation((commentId: number) =>
    CommentRepository.deleteComment(commentId)
  );
  return mutation;
};