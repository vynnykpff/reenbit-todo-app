import { Schema } from "mongoose";
import { TodoModelParams } from "@types";

const { ObjectId } = Schema.Types;

export class TodosDto {
  todos: {
    id: typeof ObjectId;
    title: string;
    createdDate: string;
    expirationDate: string;
    isCompleted: boolean;
  }[];

  constructor(models: TodoModelParams[]) {
    this.todos = models.map(model => ({
      id: model._id,
      title: model.title,
      createdDate: model.createdDate,
      expirationDate: model.expirationDate,
      isCompleted: model.isCompleted,
    }));
  }
}

export class TodoDto {
  id: typeof ObjectId;
  title: string;
  createdDate: string;
  expirationDate: string;
  isCompleted: boolean;

  constructor(model: TodoModelParams) {
    this.id = model._id;
    this.title = model.title;
    this.createdDate = model.createdDate;
    this.expirationDate = model.expirationDate;
    this.isCompleted = model.isCompleted;
  }
}
