import { RequestData } from "@/middlewares/auth";

const BEARER = "Bearer ";

export const getUserToken = (rawToken: RequestData) => {
  return rawToken.headers.authorization?.replace(BEARER, "");
};
