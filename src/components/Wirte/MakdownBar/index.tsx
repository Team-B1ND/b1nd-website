import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";
import { StrikeThrough } from "../../../assets/components/strikethrough";
import { Photo } from "@b1nd/dds-web";
import File from "../../../assets/components/file";

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: 48px;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.labelAlternative};
  
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
  height: 50%;
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
      <Button onClick={() => onInsert("[파일명](파일경로)")}>
        <File color="labelAlternative"/>
      </Button>
      <Button onClick={() => onInsert("> 인용문")}>❝</Button>
      <Button onClick={() => onInsert("![이미지 설명](이미지 링크)")}>
        <Photo color="labelAlternative" />
      </Button>
      <Button onClick={insertCodeBlock}>{"</>"}</Button>
    </Toolbar>
  );
};

export default MarkdownToolbar;
