import { DodamFilledButton } from "@b1nd/dds-web";
import { AdminItemBox, ButtonBox, ContentBox, ImgBox, TitleBox } from "./style";

const AdminItem = () => {

    return(
        <AdminItemBox>
            <ImgBox>
                <img src="" alt="에러" />
            </ImgBox>
            <ContentBox>
                <TitleBox>
                    <span>제목입니다</span>
                    <span>내용입니다</span>
                </TitleBox>
                <ButtonBox>
                    <DodamFilledButton
                        width={84}
                        text="수락"
                        backgroundColorType="Primary" 
                        size="Large"
                        />
                      <DodamFilledButton
                        width={84}
                        text="거절"
                        backgroundColorType="Assistive"
                        size="Large"
                    />
                </ButtonBox>
            </ContentBox>
        </AdminItemBox>
    )
}

export default AdminItem;