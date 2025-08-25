import * as S from "./style";
import { DodamFilledButton, Photo } from "@b1nd/dds-web";
import { useState } from "react";
import { useUploadMutation } from "../../../queries/Upload/upload.query";

interface PosterProps {
  title: string;
  summary: string;
  imageUrl: string | null;
  onChangeSummary: (v: string) => void;
  onChangeImageUrl: (v: string | null) => void;
  onSubmit: (summary: string, image: string | null) => void; 
  onBack: () => void;
}

const Poster = ({ title, summary, imageUrl, onChangeSummary, onChangeImageUrl, onSubmit, onBack }: PosterProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const uploadMutation = useUploadMutation();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const data = await uploadMutation.mutateAsync({ file });
      onChangeImageUrl(data.url);
    } catch (error) {
      console.error(error);
      alert("포스터 이미지 업로드에 실패했습니다.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = () => {
    if (!summary.trim()) return alert("요약글을 작성해주세요.");
    onSubmit(summary, imageUrl);
  };

  return (
    <S.PosterContainer>
      <S.PosterBox>
        <h1>포스터 미리보기</h1>
     
      <S.PosterImage>
        {imageUrl ? (
          <img src={imageUrl} alt="미리보기" width={200} />
        ) : (
          <>
            <Photo size={128} color="labelDisabled"/>
            <S.ImgButton htmlFor="poster-upload">포스터 업로드</S.ImgButton>
            <input id="poster-upload" type="file" placeholder="썹네일 업로드" accept="image/*" onChange={handleImageChange} />
          </>
        )}
        {isUploading && <span>업로드 중...</span>}
      </S.PosterImage>
      <span>{title}</span>
      <S.SummaryInput
        placeholder="요약글을 작성해주세요"
        value={summary}
        onChange={(e) => onChangeSummary(e.target.value)}
      />
      <S.PosterButtonBox>
        <DodamFilledButton
          width={112}
          size="Large"
          backgroundColorType="Secondary"
          textTheme="staticWhite"
          onClick={onBack}
        >
          뒤로가기
        </DodamFilledButton>
        
        <DodamFilledButton
          width={130}
          size="Large"
          backgroundColorType="Primary"
          textTheme="staticWhite"
          onClick={handleSubmit}
        >
          포스터 제출
        </DodamFilledButton>
  
      </S.PosterButtonBox>
      </S.PosterBox>
 
    </S.PosterContainer>
  );
};

export default Poster;
