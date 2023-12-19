import { cleanEnv, port, str } from "envalid";

export const validateEnv = () =>
  cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
  });
