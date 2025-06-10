import axios from "axios";
import { CommentResponse, CommentWriteParams } from "../../types/Comment/comment.type";

const SERVER = process.env.REACT_APP_SERVER_URL!;

class CommentRepositoryImpl {
  public async getCommentList(postId:number): Promise<CommentResponse> {
    const { data } = await axios.get(`${SERVER}/comments/${postId}`);
    return data.data;
  }
  public async writeComment({postId,content,authorName}:CommentWriteParams): Promise<void> {
    await axios.post(`${SERVER}/comments/create?postId=${postId}`, { authorName,content});
  }


}

export default new CommentRepositoryImpl();
