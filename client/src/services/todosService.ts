import { api } from "@/services/api.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { AppPaths, TodosPaths } from "@/services/Paths.ts";

type TodosResponse = {
  todos: TodoActions[];
};

const { TODOS } = AppPaths;
const { DELETE_COMPLETED_TODOS } = TodosPaths;

export class TodosService {
  public static async getTodos(): Promise<TodosResponse> {
    const response = await api.get<TodosResponse>(TODOS);
    return response.data;
  }

  public static async createTodo(params: TodoActions): Promise<TodoActions> {
    const response = await api.post<TodoActions>(TODOS, { ...params });
    return response.data;
  }

  public static async editTodo(params: TodoActions): Promise<TodoActions> {
    const response = await api.patch<TodoActions>(`${TODOS}/${params._id}`, { ...params });
    return response.data;
  }

  public static async deleteTodo(todoId: string): Promise<string> {
    const response = await api.delete<string>(`${TODOS}/${todoId}`);
    return response.data;
  }

  public static async deleteAllTodos(): Promise<string> {
    const response = await api.delete<string>(`${TODOS}${DELETE_COMPLETED_TODOS}`);
    return response.data;
  }
}
