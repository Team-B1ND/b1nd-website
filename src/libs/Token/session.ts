import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Token/token";

class Token {
  public getToken(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  public setToken(key: string, token: string): void {
    sessionStorage.setItem(key, token);
  }

  public clearToken(): void {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}

export default new Token();
