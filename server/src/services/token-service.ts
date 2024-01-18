import jwt from "jsonwebtoken";
import { TokenModel } from "@models";
import { TokenPayload, UserDtoModel } from "@types";
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

  async saveToken({ userId, refreshToken }: TokenPayload) {
    const tokenData = await TokenModel.findOne({ user: userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    return await TokenModel.create({ user: userId, refreshToken });
  }

  async removeToken(refreshToken: string) {
    return TokenModel.deleteOne({ refreshToken });
  }

  async findToken(refreshToken: string) {
    return TokenModel.findOne({ refreshToken });
  }
}

export const tokenService = new TokenService();
