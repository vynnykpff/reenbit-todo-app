import bcrypt from "bcrypt";
import { UserDto } from "@dtos";
import { tokenService } from "@services";
import { UserModel } from "@models";
import { ApiError } from "@exceptions";
import { UserDtoModel, UserPayload } from "@types";
import { AuthExceptionMessage, AuthValidation } from "@constants";

const { USER_NOT_FOUND_MESSAGE } = AuthExceptionMessage;
const { INVALID_PASSWORD } = AuthValidation;

class UserService {
  async login({ email, password }: UserPayload) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw ApiError.BadRequest(USER_NOT_FOUND_MESSAGE);
    }

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) {
      throw ApiError.BadRequest(INVALID_PASSWORD);
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    return { ...tokens, user: userDto };
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken) as UserDtoModel;

    if (!userData) {
      throw ApiError.UnauthorizedError();
    }

    const user = (await UserModel.findById(userData.id))!;

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    return { ...tokens, user: userDto };
  }
}

export const userService = new UserService();
