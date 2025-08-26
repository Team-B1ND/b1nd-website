import { BlogResponse } from "../../types/Blog/blog.type";
import { b1ndAxios } from "../../libs/Axios/customAxios";


class SearchRepositoryImpl {


  public async searchPosts(keyword: string, page: number, size: number): Promise<BlogResponse> {
    const { data } = await b1ndAxios.get("/post/search", {
      params: { keyword, page, size },
    });
    return data.data;
  }
}

export default new SearchRepositoryImpl();
