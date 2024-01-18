import express from "express";
import { body } from "express-validator";
import { authMiddleware } from "@middlewares";
import { userController } from "@controllers";
import { AuthPaths, LoginValidationField } from "@constants";

const { PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } = LoginValidationField;
const { LOGIN, LOGOUT, REFRESH } = AuthPaths;

const router = express.Router();
const { login, logout, refresh } = userController;

router.post(LOGIN, body("email").isEmail(), body("password").isLength({ min: PASSWORD_MIN_LENGTH, max: PASSWORD_MAX_LENGTH }), login);
router.post(LOGOUT, authMiddleware, logout);
router.get(REFRESH, refresh);

export const UserRouter = router;
