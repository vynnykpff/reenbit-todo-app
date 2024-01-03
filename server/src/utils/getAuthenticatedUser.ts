import { NextFunction, Request, Response } from "express";
import { UserModel } from "@models";
import { getUserToken, verifyAccessToken } from "@utils";
import { ServerExceptionStatusCodes, UserExceptionMessage, UserValidationField } from "@constants";

const { EMAIL } = UserValidationField;
const { USER_NOT_FOUND } = UserExceptionMessage;

export const getAuthenticatedUser = async (req: Request, res: Response, next: NextFunction) => {
  const rawAccessToken = req.headers.authorization!;
  const accessToken = getUserToken(rawAccessToken);

  try {
    const userId = verifyAccessToken({ res, accessToken });
    const user = await UserModel.findById(userId).select(`+${EMAIL}`).exec();
    if (!user) {
      return res.status(ServerExceptionStatusCodes.NOT_FOUND).json(USER_NOT_FOUND);
    }

    return userId!;
  } catch (error) {
    next(error);
  }
};
