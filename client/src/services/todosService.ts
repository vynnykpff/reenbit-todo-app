import { Routes } from "@/common/constants/Routes.ts";
import { GetTodoParams } from "@/common/types/Todos/Todo.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { api } from "@/services/api.ts";

type TodosResponse = {
  todos: TodoActions[];
};

export class TodosService {
  public static async getTodos({ userId, token }: GetTodoParams): Promise<TodosResponse> {
    const response = await api.get<TodosResponse>(`${Routes.TODOS}?userId=${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}
