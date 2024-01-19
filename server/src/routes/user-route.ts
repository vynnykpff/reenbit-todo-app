import express from "express";
import { body } from "express-validator";
import { userController } from "@controllers";
import { AuthPaths, LoginValidationField } from "@constants";

const { PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } = LoginValidationField;
const { LOGIN, REFRESH } = AuthPaths;

const router = express.Router();
const { login, refresh } = userController;

router.post(LOGIN, body("email").isEmail(), body("password").isLength({ min: PASSWORD_MIN_LENGTH, max: PASSWORD_MAX_LENGTH }), login);
router.post(REFRESH, refresh);

export const UserRouter = router;
