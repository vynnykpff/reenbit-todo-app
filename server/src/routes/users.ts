import express from "express";
import { requiresAuth } from "@middlewares";
import { getAuthenticatedUser, login } from "@controllers";
import { Routes } from "@constants";

const router = express.Router();

router.get(Routes.HOME, requiresAuth, getAuthenticatedUser);
router.post(Routes.LOGIN, login);

export const UserRouter = router;
