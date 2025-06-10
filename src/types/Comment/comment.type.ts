export interface Comment {
    commentId: number,
    content: string,
    authorName: string,
    createdAt: string,
}

export interface CommentResponse {
    totalCount: number;
    comments: Comment[];
  
}

export interface CommentWriteParams {
    postId: number,
    content: string,
    authorName: string,
}