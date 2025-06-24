import { b1ndAxios } from "../../libs/Axios/customAxios";
import { User } from "../../types/User/user.token";


class UserRepositoryImpl {
  public async getMyinfo(): Promise<User> {
    const { data } = await b1ndAxios.get(`/user/my`);
    return data.data;
  }

}

export default new UserRepositoryImpl();
