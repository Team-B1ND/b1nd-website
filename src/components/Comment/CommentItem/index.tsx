import { CommentAuthor, CommentContent, CommentItemBox } from "./style";

interface CommentItemProps {
    authorName: string;
    content: string;
  }

const CommentItem = ({ authorName, content }: CommentItemProps) => {
    return (
      <CommentItemBox>
        <CommentAuthor>{authorName}</CommentAuthor>
        <CommentContent>{content}</CommentContent>
      </CommentItemBox>
    );
  };

export default CommentItem;