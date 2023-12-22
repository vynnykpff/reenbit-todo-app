import { Request } from "express";

const HEADER_AUTHORIZATION = "Authorization";
const BEARER = "Bearer ";

export const getUserToken = (req: Request) => {
  return req.header(HEADER_AUTHORIZATION)?.replace(BEARER, "");
};
