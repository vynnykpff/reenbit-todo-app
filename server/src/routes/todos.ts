import express from "express";
import { createTodo, deleteTodo, editTodo, getAllTodos } from "@controllers";
import { AppPaths } from "@constants";

const router = express.Router();

const { WITH_ID } = AppPaths;

router.get("", getAllTodos);
router.post("", createTodo);
router.patch(WITH_ID, editTodo);
router.delete(WITH_ID, deleteTodo);

export const TodosRouter = router;
