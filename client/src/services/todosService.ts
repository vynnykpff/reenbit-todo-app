import { api } from "@/services/api.ts";
import { GetTodosParams } from "@/common/types/Todos/Todo.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { ApiEndpoints } from "@/services/ApiEndpoints.ts";
import { SearchTodoParams, TodoDeleteParams, TodoParams, TodoResponse } from "@/common/types/Todos/TodosService.ts";

export class TodosService {
  public static async getTodos({ token, filter }: GetTodosParams): Promise<TodoResponse> {
    const todoFilter = filter.toLowerCase();
    const response = await api.get<TodoResponse>(`${ApiEndpoints.TODOS}?filter=${todoFilter}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }

  public static async createTodo(params: TodoParams): Promise<TodoActions> {
    const response = await api.post<TodoActions>(
      ApiEndpoints.CREATE_TODO,
      { ...params },
      { headers: { Authorization: `Bearer ${params.token}` } },
    );
    return response.data;
  }

  public static async editTodo(params: TodoParams): Promise<TodoActions> {
    const response = await api.patch<TodoActions>(
      ApiEndpoints.EDIT_TODO,
      { ...params },
      { headers: { Authorization: `Bearer ${params.token}` } },
    );
    return response.data;
  }

  public static async deleteTodo({ todoId, token }: TodoDeleteParams): Promise<string> {
    const response = await api.delete<string>(`${ApiEndpoints.DELETE_TODO}?todoId=${todoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }

  public static async deleteAllTodos(token: string): Promise<string> {
    const response = await api.delete<string>(ApiEndpoints.DELETE_ALL_TODOS, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  }

  public static async searchTodo({ title, filter, token }: SearchTodoParams): Promise<TodoResponse> {
    const todoFilter = filter.toLowerCase();

    const response = await api.get<TodoResponse>(`${ApiEndpoints.SEARCH_TODO}?title=${title}&filter=${todoFilter}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}
