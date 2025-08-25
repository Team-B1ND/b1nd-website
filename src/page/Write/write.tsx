import * as S from "./style";
import ReactMarkdown from "react-markdown";
import MarkdownToolbar from "../../components/Wirte/MakdownBar";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism";
import "../../styles/prism-theme.css";
import "../../constants/Prism/prism.constants";
import BottomBar from "../../components/Wirte/BottomBar";
import Poster from "../../components/Wirte/Poster";
import { useWrite } from "../../hooks/Write/useWrite";
import remarkBreaks from "remark-breaks"; 



const WritePage = () => {
  const {
    title,
    setTitle,
    markdown,
    setMarkdown,
    handleInsert,
    handleExit,
    handleKeyDown,
    handleOpenPoster,
    isLoading,
    isPosterPhase,
    setIsPosterPhase,
    handleSubmitPoster,
    handleUploadImageAndInsertMarkdown,
    posterSummary,
    setPosterSummary,
    posterImageUrl,
    setPosterImageUrl,
    handleDropOnEditor,
    handleDragOverOnEditor,
  } = useWrite();

  
  return (
    <S.WriteBox>
      {isPosterPhase ? (
        <Poster
          title={title}
          summary={posterSummary}
          imageUrl={posterImageUrl}
          onChangeSummary={setPosterSummary}
          onChangeImageUrl={setPosterImageUrl}
          onSubmit={handleSubmitPoster}
          onBack={() => setIsPosterPhase(false)}
        />
      ) : (
        <S.WriteInputBox>
          <S.Left>
            <S.StickyHeader>
              <S.TitleInput
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <MarkdownToolbar 
                onInsert={handleInsert} 
                onImageUpload={handleUploadImageAndInsertMarkdown} 
              />
            </S.StickyHeader>
            <S.TextArea
                id="markdown-input"
                placeholder="당신의 개발 이야기를 담아주세요"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                onKeyDown={handleKeyDown}
                onDrop={handleDropOnEditor}
                onDragOver={handleDragOverOnEditor}
            />
          </S.Left>
          <S.Right>
            <h1>{title || "제목 미리보기"}</h1>
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkBreaks]} 
              rehypePlugins={[rehypePrism]}
            >
              {markdown || "내용 미리보기"}
            </ReactMarkdown>
          </S.Right>
        </S.WriteInputBox>
      )}

      {!isPosterPhase && (
        <BottomBar
          onPublish={handleOpenPoster}
          isLoading={isLoading}
          onExit={handleExit}
        />
      )}
    </S.WriteBox>
  );
};

export default WritePage;
