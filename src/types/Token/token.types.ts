import { Response } from "../Util/Response.type";

export interface TokenResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}