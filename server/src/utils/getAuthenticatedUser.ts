import { RequestHandler } from "express";
import { UserModel } from "@models";
import { verifyAccessToken } from "@utils";
import { ServerExceptionStatusCodes, UserExceptionMessage, UserValidationField } from "@constants";

const { EMAIL } = UserValidationField;
const { USER_NOT_FOUND } = UserExceptionMessage;

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  const { accessToken } = req.body;

  try {
    const userId = verifyAccessToken(accessToken as string);
    const user = await UserModel.findById(userId).select(`+${EMAIL}`).exec();

    if (!user) {
      return res.status(ServerExceptionStatusCodes.NOT_FOUND).json(USER_NOT_FOUND);
    }
  } catch (error) {
    next(error);
  }
};
