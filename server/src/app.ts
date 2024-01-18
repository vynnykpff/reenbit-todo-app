import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import { errorMiddleware } from "@middlewares";
import { TodosRouter, UserRouter } from "@routes";
import { API_AUTH_PATH, API_TODOS_PATH } from "@constants";

export const app = express();

app.use(
  cors({
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

app.use(API_AUTH_PATH, UserRouter);
app.use(API_TODOS_PATH, TodosRouter);

app.use(errorMiddleware);
