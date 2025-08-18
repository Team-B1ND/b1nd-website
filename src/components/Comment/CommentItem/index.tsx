import { CommentAuthor, CommentContent, CommentItemBox, DeleteButton } from "./style";
import { XmarkCircle } from "@b1nd/dds-web";

interface CommentItemProps {
    authorName: string;
    content: string;
    onDelete?: () => void;
  }

const CommentItem = ({ authorName, content,onDelete }: CommentItemProps) => {
    return (
      <CommentItemBox>
         {onDelete && (
        <DeleteButton onClick={onDelete}>
          <XmarkCircle  color="statusNegative"/>
        </DeleteButton>
      )}
        <CommentAuthor>{authorName}</CommentAuthor>
        <CommentContent>{content}</CommentContent>
      </CommentItemBox>
    );
  };

export default CommentItem;