import express from "express";
import { login } from "@controllers";
import { Routes } from "@constants";

const router = express.Router();

router.post(Routes.LOGIN, login);

export const UserRouter = router;
