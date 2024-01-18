import { Request } from "express";
import { Schema } from "mongoose";
import { JwtPayload } from "jsonwebtoken";
import { TodosFiltrationConstants } from "@constants";

export type TodosParams = {
  userId: Schema.Types.ObjectId;
  filter: TodosFiltrationConstants;
  search: string;
};

export type TodoCustomRequest = {
  user?: string | JwtPayload;
} & Request;

export type DeleteTodoRequest = {
  todoId: string;
};

export type DeleteTodoParams = {
  userId: Schema.Types.ObjectId;
} & DeleteTodoRequest;
