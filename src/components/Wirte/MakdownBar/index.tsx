import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";
import { StrikeThrough } from "../../../assets/components/strikethrough";
import { Photo } from "@b1nd/dds-web";
import File from "../../../assets/components/file";
import { useRef } from "react";
import { useWrite } from "../../../hooks/Write/useWrite";

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: 48px;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.labelAlternative};

  @media (max-width: 767px) {
    gap: 1.2rem;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Heading1.Medium}
`;

const Line = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${({ theme }) => theme.labelNormal};
`;

interface Props {
  onInsert: (text: string) => void;
}

const MarkdownToolbar = ({ onInsert }: Props) => {
  const insertCodeBlock = () => {
    const template = `\`\`\`language\n코드\n\`\`\``;
    onInsert(template);
  };

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { handleUploadImageAndInsertMarkdown } = useWrite();

  const onImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleUploadImageAndInsertMarkdown(file);
    }
  };

  const onFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileMarkdown = `[${file.name}](파일 경로)`;
      onInsert(fileMarkdown);
    }
  };

  return (
    <Toolbar>
      <Button onClick={() => onInsert("# ")}>H1</Button>
      <Button onClick={() => onInsert("## ")}>H2</Button>
      <Button onClick={() => onInsert("### ")}>H3</Button>
      <Button onClick={() => onInsert("#### ")}>H4</Button>
      <Line />
      <Button onClick={() => onInsert("**굵은텍스트**")}>B</Button>
      <Button onClick={() => onInsert("_기울임텍스트_")}>/</Button>
      <Button onClick={() => onInsert("~~취소선~~")}>
        <StrikeThrough color="labelAlternative" $svgStyle={{ textAlign: "center" }} />
      </Button>

      
      <Button onClick={() => fileInputRef.current?.click()}>
        <File color="labelAlternative" />
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileSelect}
        style={{ display: "none" }}
        accept="*"
      />

      <Button onClick={() => onInsert("> 인용문")}>❝</Button>

      
      <Button onClick={() => imageInputRef.current?.click()}>
        <Photo color="labelAlternative" />
      </Button>
      <input
        type="file"
        ref={imageInputRef}
        onChange={onImageSelect}
        style={{ display: "none" }}
        accept="image/*"
      />

      <Button onClick={insertCodeBlock}>{"</>"}</Button>
    </Toolbar>
  );
};

export default MarkdownToolbar;
