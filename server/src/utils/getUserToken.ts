const BEARER = "Bearer ";

export const getUserToken = (rawToken: string) => {
  return rawToken?.replace(BEARER, "");
};
