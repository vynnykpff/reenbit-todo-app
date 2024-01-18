import { NextFunction, Request, Response } from "express";
import { userService } from "@services";
import { UserPayload } from "@types";

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body as UserPayload;
      const userData = await userService.login({ email, password });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;

      const userData = await userService.refresh(refreshToken);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
