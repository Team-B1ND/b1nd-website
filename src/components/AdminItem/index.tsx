import { DodamFilledButton } from "@b1nd/dds-web";
import { AdminItemBox, ButtonBox, ContentBox, ImgBox, TitleBox } from "./style";
import { Blog } from "../../types/Blog/blog.type";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useApproveBlogMutation, useRejectBlogMutation } from "../../queries/Blog/blog.query";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const AdminItem = ({ data }: { data: Blog }) => {
    const approveBlogMutation = useApproveBlogMutation();
    const rejectBlogMutation = useRejectBlogMutation();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    
    const approveButton = () => {
        approveBlogMutation.mutate(data.post_id, {
            onSuccess: () => {
                B1ndToast.showSuccess("블로그 글이 수락되었습니다.")
                queryClient.invalidateQueries("blogs/waiting");
            },
            onError: (error:any) => {
                B1ndToast.showError(`블로그 글 수락에 실패했습니다: ${error.message}`);
            },
        });
    }
    const rejectButton = () => {
        rejectBlogMutation.mutate(data.post_id, {
            onSuccess: () => {
                B1ndToast.showSuccess("블로그 글이 거절되었습니다.")
            },
            onError: (error:any) => {
                B1ndToast.showError(`블로그 글 거절에 실패했습니다: ${error.message}`);
            },
        });
    } 

    const handleClick = () => {
      console.log("클릭됨", data.post_id);
      
        navigate(`/blog/${data.post_id}`); 
      };

  return (
    <AdminItemBox>
      <ImgBox onClick={handleClick}>
        <img src={data?.poster_image || ""} alt="썸네일" />
      </ImgBox>
      <ContentBox >
        <TitleBox>
          <span>{data?.post_title}</span>
          <span>{data?.post_summary || "내용 요약이 없습니다"}</span>
        </TitleBox>
        <ButtonBox>
          <DodamFilledButton
            width={84}
            text="수락"
            backgroundColorType="Primary"
            size="Large"
            onClick={() => approveButton()}
          />
          <DodamFilledButton
            width={84}
            text="거절"
            backgroundColorType="Assistive"
            size="Large"
            onClick={() => rejectButton()}
          />
        </ButtonBox>
      </ContentBox>
    </AdminItemBox>
  );
};

export default AdminItem;
