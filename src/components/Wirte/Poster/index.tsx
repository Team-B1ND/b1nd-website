import * as S from "./style";
import { DodamFilledButton, Photo } from "@b1nd/dds-web";
import { useState } from "react";

interface PosterProps {
  title: string;
  onSubmit: (summary: string, image: File | null) => void;
  onBack: () => void;
}

const Poster = ({ title, onSubmit, onBack }: PosterProps) => {
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleSubmit = () => {
    if (!summary.trim()) return alert("요약글을 작성해주세요.");
    onSubmit(summary, image);
  };

  return (
    <S.PosterContainer>
      <S.PosterBox>
        <h1>포스터 미리보기</h1>
     
      <S.PosterImage>
        <Photo size={128} color="labelDisabled"/>
        <S.ImgButton htmlFor="poster-upload">포스터 업로드</S.ImgButton>
        <input id="poster-upload" type="file" placeholder="썹네일 업로드"  onChange={handleImageChange} />
      {image && <img src={URL.createObjectURL(image)} alt="미리보기" width={200} />}  
      </S.PosterImage>
      <span>{title}</span>
      <S.SummaryInput
        placeholder="요약글을 작성해주세요"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
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
