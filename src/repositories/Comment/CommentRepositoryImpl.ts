import axios from "axios";
import { CommentResponse, CommentWriteParams } from "../../types/Comment/comment.type";
import { b1ndAxios } from "../../libs/Axios/customAxios";

const SERVER = process.env.REACT_APP_SERVER_URL!;

class CommentRepositoryImpl {
  public async getCommentList(postId:number): Promise<CommentResponse> {
    const { data } = await axios.get(`${SERVER}/comments/${postId}`);
    return data.data;
  }
  public async writeComment({postId,content,authorName}:CommentWriteParams): Promise<void> {
    await axios.post(`${SERVER}/comments/create?postId=${postId}`, { authorName,content});
  }
public async deleteComment(commentId: number): Promise<void> {
    await b1ndAxios.delete(`/comments/${commentId}`);
  }

}

export default new CommentRepositoryImpl();
