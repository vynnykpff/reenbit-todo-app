import express from "express";
import { authMiddleware } from "@middlewares";
import { todosController } from "@controllers";
import { AppPaths } from "@constants";

const router = express.Router();

const { getTodos, deleteTodo, createTodo, editTodo } = todosController;

const { WITH_ID } = AppPaths;

router.get("", authMiddleware, getTodos);
router.post("", authMiddleware, createTodo);
router.patch(WITH_ID, authMiddleware, editTodo);
router.delete(WITH_ID, authMiddleware, deleteTodo);

export const TodosRouter = router;
