import * as S from "./style";
import ReactMarkdown from "react-markdown";
import MarkdownToolbar from "../../components/Wirte/MakdownBar";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism";
import "../../styles/prism-theme.css"
import "../../constants/Prism/prism.constants";
import BottomBar from "../../components/Wirte/BottomBar";
import { useWrite } from "../../hooks/Write/useWrite";

const WritePage = () => {
    const {
        title,
        setTitle,
        markdown,
        setMarkdown,
        handleInsert,
        handleExit,
        publish,
        isLoading,
      } = useWrite();


  return (
    <S.WriteBox>
      <S.WriteInputBox>
        <S.Left>
          <S.TitleInput
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <MarkdownToolbar onInsert={handleInsert} />
          <S.TextArea
            id="markdown-input"
            placeholder="당신의 개발 이야기를 담아주세요"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </S.Left>
        <S.Right>
          <h1>{title || "제목 미리보기"}</h1>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypePrism]}
          >
            {markdown || "내용 미리보기"}
          </ReactMarkdown>
        </S.Right>
      </S.WriteInputBox>
      <BottomBar 
      onPublish={publish} 
      isLoading={isLoading} 
      onExit={handleExit}
           />
    </S.WriteBox>
  );
};

export default WritePage;
