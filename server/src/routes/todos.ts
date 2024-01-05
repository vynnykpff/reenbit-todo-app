import express from "express";
import { createTodo, editTodo, getAllTodos } from "@controllers";
import { TodosRoutes } from "@constants";

const router = express.Router();

router.get("", getAllTodos);
router.post(TodosRoutes.CREATE_TODO, createTodo);
router.patch(TodosRoutes.EDIT_TODO, editTodo);

export const TodosRouter = router;
