import axios from "axios";
import { TokenResponse } from "../../types/Token/token.types";
import { LoginParam } from "./AuthRepository";

const SERVER = process.env.REACT_APP_SERVER_URL!;

class AuthRepositoryImpl {
  public async login({ code }: LoginParam): Promise<TokenResponse> {
    const { data } = await axios.post(`${SERVER}/auth/login`, { code });
    return data;
  }

  public async refresh({ refreshToken }: { refreshToken: string }): Promise<{ accessToken: string }> {
    const { data } = await axios.post(`${SERVER}/auth/refresh`, {
      refreshToken,
    });
    return data;
  }
}

export default new AuthRepositoryImpl();
