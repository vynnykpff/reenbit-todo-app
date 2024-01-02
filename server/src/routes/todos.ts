import { TodosRoutes } from "@/common";
import express from "express";
import { createTodo, getAllTodos } from "@controllers";

const router = express.Router();

router.get("", getAllTodos);
router.post(TodosRoutes.CREATE_TODO, createTodo);

export const TodosRouter = router;
