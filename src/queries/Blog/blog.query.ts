import { useMutation, useQuery } from "react-query";
import BlogRepository from "../../repositories/Blog/BlogRepositoryImpl";
import { BlogParam, BlogResponse } from "../../types/Blog/blog.type";

interface UseBlogsProps {
  page: number;
  size?: number;
}

export const useBlogsList = ({ page, size = 10 }: UseBlogsProps) => {
  return useQuery<BlogResponse>({
    queryKey: ["blogs", page, size],
    queryFn: () => BlogRepository.getBlogs(page, size),
    staleTime: 1000 * 60 * 10, 
    cacheTime: 1000 * 60 * 5,
    keepPreviousData: true, 
  });
};


export const useBlogMutation = () => {
    const mutation = useMutation((blogData: BlogParam)=>
        BlogRepository.writeBlog(blogData)
    )
    return mutation;
}
