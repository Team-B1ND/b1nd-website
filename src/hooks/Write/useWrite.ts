import { useEffect, useState } from "react";
import { DodamDialog } from "@b1nd/dds-web";
import { useBlogMutation } from "../../queries/Blog/blog.query";

export const useWrite = () => {
  const postBlogMutation = useBlogMutation();
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const publish = async () => {
    
    
    if (!title.trim() || !markdown.trim()) {
      DodamDialog.alert("제목과 내용을 모두 작성해주세요.");
      return;
    }

    
      setIsLoading(true);
      await postBlogMutation.mutateAsync({
        post_title: title,
        post_content: markdown,
      },
    {
      onError: (err) => {
        setIsLoading(false);
        console.error(err);
        DodamDialog.alert("출간 중 오류가 발생했습니다.");
      },
      onSuccess: () => {
        DodamDialog.alert("게시글이 성공적으로 출간되었습니다.","어드민에서 ");
        window.location.href = "/blog";
        setIsLoading(false);
      }
    });

    setIsLoading(false);
    
  };

  const handleExit = async () => {
    const confirm = DodamDialog.confirm(
      "작성 중인 내용이 모두 사라지고 다시 로그인해야합니다. 정말 나가시겠습니까? "
    );
    if (await confirm) {
      window.location.href = "/blog";
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue =
        "작성 중인 내용이 모두 사라집니다. 정말 나가시겠습니까?";
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
    publish,
    handleExit,
    isLoading,
  };
};
