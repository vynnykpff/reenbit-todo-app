import express from "express";
import { getAllTodos } from "@controllers";
import { TodosRoutes } from "@constants";

const router = express.Router();

router.get(TodosRoutes.GET_TODOS, getAllTodos);

export const TodosRouter = router;
