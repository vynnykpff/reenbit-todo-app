import { TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { api } from "@/services/api.ts";
import { ApiEndpoints } from "@/services/ApiEndpoints.ts";

type TodosResponse = {
  todos: TodoActions[];
};

export class TodosService {
  public static async getTodos(token: string): Promise<TodosResponse> {
    const response = await api.get<TodosResponse>(ApiEndpoints.TODOS, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}
