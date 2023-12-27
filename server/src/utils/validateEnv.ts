import { cleanEnv, port, str } from "envalid";

export const validateEnv = () =>
  cleanEnv(process.env, {
    MONGO_URI: str(),
    JWT_ACCESS_SECRET: str(),
    PORT: port(),
  });
