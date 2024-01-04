import express from "express";
import { getAllTodos } from "@controllers";

const router = express.Router();

router.get("", getAllTodos);

export const TodosRouter = router;
