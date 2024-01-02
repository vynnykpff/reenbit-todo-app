import express from "express";
import { login } from "@controllers";
import { AuthRoutes } from "@constants";

const router = express.Router();

router.post(AuthRoutes.LOGIN, login);

export const UserRouter = router;
