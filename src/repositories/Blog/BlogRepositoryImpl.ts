import { BlogParam, BlogResponse } from "../../types/Blog/blog.type";
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

  public async writeBlog(blogData:BlogParam): Promise<void> {
     await b1ndAxios.post("/post", blogData);
  }


}

export default new BlogRepositoryImpl();
