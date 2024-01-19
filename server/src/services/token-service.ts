import jwt from "jsonwebtoken";
import { UserDtoModel } from "@types";
import { validateEnv } from "@utils";

const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = validateEnv();

const EXPIRES_ACCESS_TOKEN = "1m";
const EXPIRES_REFRESH_TOKEN = "2m";

class TokenService {
  generateTokens(payload: UserDtoModel) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: EXPIRES_ACCESS_TOKEN });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: EXPIRES_REFRESH_TOKEN });

    return { accessToken, refreshToken };
  }

  validateAccessToken(token: string) {
    try {
      return jwt.verify(token, JWT_ACCESS_SECRET);
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      return jwt.verify(token, JWT_REFRESH_SECRET);
    } catch (e) {
      return null;
    }
  }
}

export const tokenService = new TokenService();
