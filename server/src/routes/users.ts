import express from "express";
import { login } from "@controllers";
import { AuthPaths } from "@constants";

const router = express.Router();
const { LOGIN } = AuthPaths;

router.post(LOGIN, login);

export const UserRouter = router;
