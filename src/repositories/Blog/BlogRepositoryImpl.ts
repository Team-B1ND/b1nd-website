import { Blog, BlogParam, BlogResponse } from "../../types/Blog/blog.type";
import { b1ndAxios } from "../../libs/Axios/customAxios";



class BlogRepositoryImpl {
  public async getBlogs(page: number, size: number): Promise<BlogResponse> {
    const { data } = await b1ndAxios.get("/post/list", {
      params: { page, size },
    });
    return data.data;
  }
  
  public async getWaitingBlogs(page: number, size: number): Promise<BlogResponse> {
    const { data } = await b1ndAxios.get("/post/list/pending", {
      params: { page, size },
    });
    return data.data;
  }

  public async getBlogDetail(id: number): Promise<Blog> {
    const { data } = await b1ndAxios.get(`/post/${id}`);
    return data.data;
  }

  public async writeBlog(blogData:BlogParam): Promise<void> {
     await b1ndAxios.post("/post", blogData);
  }

  public async approveBlog(id: number): Promise<void> {
   await b1ndAxios.patch(`/post/approve/${id}`);
  }

  public async rejectBlog(id: number): Promise<void> {
    await b1ndAxios.patch(`/post/reject/${id}`);
  }

}

export default new BlogRepositoryImpl();
