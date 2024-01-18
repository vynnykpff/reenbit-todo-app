import { NextFunction, Request, Response } from "express";
import { userService } from "@services";
import { UserPayload } from "@types";
import { REFRESH_MAX_AGE } from "@utils";
import { ServerSuccessStatusCodes, UserToken } from "@constants";

const { REFRESH_TOKEN } = UserToken;

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body as UserPayload;
      const userData = await userService.login({ email, password });

      res.cookie(REFRESH_TOKEN, userData.refreshToken, { maxAge: REFRESH_MAX_AGE, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;

      await userService.logout(refreshToken);
      res.clearCookie(REFRESH_TOKEN);

      return res.status(ServerSuccessStatusCodes.OK);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;

      const userData = await userService.refresh(refreshToken);

      res.cookie(REFRESH_TOKEN, userData.refreshToken, { maxAge: REFRESH_MAX_AGE, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
