import * as S from "./style";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownToolbar from "../../components/Wirte/MakdownBar";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism";
import "../../styles/prism-theme.css"
import 'prismjs';
import 'prismjs/components/prism-markup.min';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-c.min';
import 'prismjs/components/prism-cpp.min';
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-docker.min';
import 'prismjs/components/prism-git.min';
import 'prismjs/components/prism-go.min';
import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-kotlin.min';
import 'prismjs/components/prism-markdown.min';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-rust.min';
import 'prismjs/components/prism-sql.min';
import 'prismjs/components/prism-swift.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/components/prism-yaml.min';


const WritePage = () => {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");

  const handleInsert = (text: string) => {
    const textarea = document.getElementById("markdown-input") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = markdown.slice(0, start);
    const after = markdown.slice(end);
    const newMarkdown = `${before}${text}${after}`;

    setMarkdown(newMarkdown);

    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + text.length;
    }, 0);
  };

  return (
    <S.WriteBox>
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
    </S.WriteBox>
  );
};

export default WritePage;
