import express from "express";
import { createTodo, deleteAllTodos, deleteTodo, editTodo, getAllTodos, searchTodo } from "@controllers";
import { TodosRoutes } from "@constants";

const router = express.Router();

router.get("", getAllTodos);
router.get(TodosRoutes.SEARCH_TODO, searchTodo);
router.post(TodosRoutes.CREATE_TODO, createTodo);
router.patch(TodosRoutes.EDIT_TODO, editTodo);
router.delete(TodosRoutes.DELETE_TODO, deleteTodo);
router.delete(TodosRoutes.DELETE_ALL_TODOS, deleteAllTodos);

export const TodosRouter = router;
