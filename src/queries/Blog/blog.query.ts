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

export const useBlogWaitingList = ({page,size=10}:UseBlogsProps) => {
    return useQuery<BlogResponse>({
        queryKey: ["blogs/waiting", page, size],
        queryFn: () => BlogRepository.getWaitingBlogs(page, size),
        staleTime: 1000 * 60 * 10, 
        cacheTime: 1000 * 60 * 5,
        keepPreviousData: true, 
    })
}

export const useBlogDetail = (id: number) => {
  return useQuery({
    queryKey: ["blog/detail", id],
    queryFn: () => BlogRepository.getBlogDetail(id),
    staleTime: 1000 * 60 * 10, 
    cacheTime: 1000 * 60 * 5,
  });
};

export const useBlogMutation = () => {
    const mutation = useMutation((blogParam: BlogParam)=>
        BlogRepository.writeBlog(blogParam)
    )
    return mutation;
}

export const useApproveBlogMutation = () => {
    const mutation = useMutation((postId: number) =>
        BlogRepository.approveBlog(postId)
    );
    return mutation;
}

export const useRejectBlogMutation = () => {
    const mutation = useMutation((postId: number) =>
        BlogRepository.rejectBlog(postId)
    );
    return mutation;
}

export const useDeleteBlogMutation = () => {
  return useMutation((post_id: number) =>
    BlogRepository.deleteBlog(post_id)
  );
};