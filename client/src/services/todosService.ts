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

  public static async createTodo(params: TodoActions): Promise<TodoActions> {
    const response = await api.post<TodoActions>(ApiEndpoints.CREATE_TODO, { ...params });
    return response.data;
  }

  public static async editTodo(params: TodoActions): Promise<TodoActions> {
    const response = await api.patch<TodoActions>(ApiEndpoints.EDIT_TODO, { ...params });
    return response.data;
  }

  public static async deleteTodo(todoId: string): Promise<string> {
    const response = await api.delete<string>(`${ApiEndpoints.DELETE_TODO}?todoId=${todoId}`);
    return response.data;
  }

  public static async deleteAllTodos(token: string): Promise<string> {
    const response = await api.delete<string>(ApiEndpoints.DELETE_ALL_TODOS, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  }

  public static async searchTodo(title: string): Promise<TodosResponse> {
    const response = await api.get<TodosResponse>(`${ApiEndpoints.SEARCH_TODO}?title=${title}`);
    return response.data;
  }
}
