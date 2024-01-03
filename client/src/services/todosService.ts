import { Routes } from "@/common/constants/Routes.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { api } from "@/services/api.ts";

type TodosResponse = {
  todos: TodoActions[];
};

export class TodosService {
  public static async getTodos(token: string): Promise<TodosResponse> {
    const response = await api.get<TodosResponse>(Routes.TODOS, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}
