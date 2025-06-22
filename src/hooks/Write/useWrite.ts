import { useEffect, useState } from "react";
import { DodamDialog } from "@b1nd/dds-web";
import { useBlogMutation } from "../../queries/Blog/blog.query";
import { useUploadMutation } from "../../queries/Upload/upload.query";

export const useWrite = () => {
  const postBlogMutation = useBlogMutation();
  const uploadMutation = useUploadMutation();
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [isPosterPhase, setIsPosterPhase] = useState(false);

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

  const handleUploadImageAndInsertMarkdown = async (file: File) => {
    const uploadingMarkdown = `![Uploading ${file.name}…]()`;

    setIsUploading(true);
    handleInsert(uploadingMarkdown);

    try {
      const response = await uploadMutation.mutateAsync({ file });
      console.log(response);

      const realUrl = `http://localhost:8080${response.url}`; // URL 조정
      const completedMarkdown = `![${response.filename}](${realUrl})`;

      // 업로드 마크다운을 실제 마크다운으로 교체
      setMarkdown((prev) =>
        prev.includes(uploadingMarkdown)
          ? prev.replace(uploadingMarkdown, completedMarkdown)
          : prev + "\n" + completedMarkdown
      );
    } catch (error) {
      setMarkdown((prev) => prev.replace(uploadingMarkdown, ""));
      DodamDialog.alert("이미지 업로드에 실패했습니다.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;
    const value = textarea.value;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const lines = value.split("\n");
    const lineIndex = value.slice(0, start).split("\n").length - 1;
    const currentLine = lines[lineIndex];

    if (e.key === "Enter") {
      const lineStart = value.lastIndexOf("\n", start - 1) + 1;
      const currentLine = value.slice(lineStart, start);
      const listMatch = currentLine.match(/^(\s*)([-*+]|\d+\.)\s+/);
      if (listMatch) {
        e.preventDefault();
        const prefix = listMatch[1] + listMatch[2] + " ";
        const newText = value.slice(0, start) + "\n" + prefix + value.slice(end);
        setMarkdown(newText);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 1 + prefix.length;
        }, 0);
      }
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const match = currentLine.match(/^(\s*)([-*+]|\d+\.)\s+(.*)/);
      if (match) {
        const indent = "  ";
        const newLine = indent + currentLine;
        lines[lineIndex] = newLine;
        const newValue = lines.join("\n");
        const diff = newLine.length - currentLine.length;
        setMarkdown(newValue);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + diff;
        }, 0);
      } else {
        const tab = "  ";
        const newText = value.slice(0, start) + tab + value.slice(end);
        setMarkdown(newText);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + tab.length;
        }, 0);
      }
    }
  };

  const handleOpenPoster = () => {
    if (!title.trim() || !markdown.trim()) {
      DodamDialog.alert("제목과 내용을 모두 작성해주세요.");
      return;
    }
    setIsPosterPhase(true);
  };

  const handleSubmitPoster = async (summary: string, image: string | null) => {
    if (!summary.trim()) {
      DodamDialog.alert("요약글을 작성해주세요.");
      return;
    }
  
    let imageUrl: string = image ? image : ""; 
  
    const blogParam = {
      post_title: title,
      post_content: markdown,
      post_summary: summary,
      poster_image: imageUrl,
    };
  
    await postBlogMutation.mutateAsync(blogParam, {
      onError: (err) => {
        console.error(err);
        DodamDialog.alert("출간 중 오류가 발생했습니다.");
      },
      onSuccess: () => {
        DodamDialog.alert("게시글이 성공적으로 출간되었습니다.", "어드민에서 승인 후 반영됩니다.");
        // window.location.href = "/blog";
      },
    });
  };
  

  const handleExit = async () => {
    const confirm = DodamDialog.confirm("작성 중인 내용이 모두 사라지고 다시 로그인해야합니다. 정말 나가시겠습니까?");
    if (await confirm) {
      window.location.href = "/blog";
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "작성 중인 내용이 모두 사라집니다. 정말 나가시겠습니까?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return {
    title,
    setTitle,
    markdown,
    setMarkdown,
    handleInsert,
    handleKeyDown,
    publish: handleSubmitPoster,
    handleExit,
    handleOpenPoster,
    isPosterPhase,
    handleSubmitPoster,
    setIsPosterPhase,
    isLoading: postBlogMutation.isLoading || uploadMutation.isLoading,
    handleUploadImageAndInsertMarkdown,
    isUploading,
  };
};
