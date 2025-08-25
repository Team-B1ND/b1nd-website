import * as S from "./style";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism";
import "../../styles/prism-theme.css"; 
import "../../constants/Prism/prism.constants"; 
import { useBlogDetail, useDeleteBlogMutation } from "../../queries/Blog/blog.query";
import Comment from "../../components/Comment";
import { DodamFilledButton } from "@b1nd/dds-web";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useUserStore } from "../../store/useUserStore";

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = Number(id);
  const deleteBlogMutation = useDeleteBlogMutation();
  const { data, isLoading, isError } = useBlogDetail(blogId);
  const userRole = useUserStore((state) => state.userRole);

  
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      B1ndToast.showSuccess("주소가 복사되었습니다!");    
    } catch (err) {
      B1ndToast.showError("주소 복사에 실패했습니다.");
    }
  };


  const handleDelete = async () => {
    
    try {
      deleteBlogMutation.mutate(blogId
        , {
        onSuccess: () => {
          B1ndToast.showSuccess("블로그가 삭제되었습니다.");
          window.location.href = "/admin";
        },
        onError: () => {
          B1ndToast.showError("블로그 삭제에 실패했습니다.");
        },
      }
      );
      B1ndToast.showSuccess("삭제가 완료되었습니다.");
      window.location.href = "/blog";
    } catch (err) {
      B1ndToast.showError("삭제에 실패했습니다.");
    }
  };


  if (isLoading) return <div>불러오는 중...</div>;
  if (isError || !data) return <div>블로그 정보를 불러올 수 없습니다.</div>;

  return (
    <S.BlogDetailBox>
      <S.BlogTitle>
        <span>{data.post_title}</span>
        <S.BlogTitleDetail>
          <span>{data.post_author}</span>
          <span>{new Date(data.post_created_at).toLocaleDateString("ko-KR")}</span>
        </S.BlogTitleDetail>
            {userRole === "ADMIN" && (
              <DodamFilledButton
                width={120}
                size="Medium"
                backgroundColorType="Negative"
                typography={['Body2', 'Bold']}
                onClick={handleDelete}
              >
                블로그 삭제
              </DodamFilledButton>
            )}
        </S.BlogTitle>
        <S.BlogContent>
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypePrism]}
            components={{
              img: ({ node, ...props }) => (
                <img
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                    margin: "0 auto"
                  }}
                  alt={props.alt || "이미지"}
                  {...props}
                />
              ),
            }}
          >
            {data.post_content || "내용이 없습니다."}
          </ReactMarkdown>

        </S.BlogContent>
        <S.BoxHeader>
            <DodamFilledButton
                  width={67} size="Medium"
                  backgroundColorType="Assistive"  
                  typography={['Body2', 'Bold']}
                  onClick={handleShare}          
            >
                공유
            </DodamFilledButton>
        </S.BoxHeader>
      <Comment postId={blogId} canDelete={userRole=== 'ADMIN'}/>
    </S.BlogDetailBox>
  );
};

export default BlogDetailPage;
