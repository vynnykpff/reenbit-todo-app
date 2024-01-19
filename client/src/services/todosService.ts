import { AmountTodos, TodosParams } from "@/common/types/Todos/Todo.ts";
import { api } from "@/services/api.ts";
import { TodoActions } from "@/common/types/Todos/TodoActions.ts";
import { AppPaths, TodosPaths } from "@/services/Paths.ts";

type TodosResponse = {
  todos: TodoActions[];
  amountTodos?: AmountTodos;
};

const { TODOS } = AppPaths;
const { DELETE_COMPLETED_TODOS } = TodosPaths;

export class TodosService {
  private static buildTodosUrl({ filter, title }: TodosParams): string {
    let url = TODOS as string;

    if (filter) {
      const todoFilter = filter.toLowerCase();
      url += `?filter=${todoFilter}`;

      if (title) {
        url += `&search=${title}`;
      }
    } else if (title) {
      url += `?search=${title}`;
    }

    return url;
  }

  public static async getTodos({ filter = "", title = "" }: TodosParams): Promise<TodosResponse> {
    const url = this.buildTodosUrl({ filter, title });
    const response = await api.get<TodosResponse>(url);
    return response.data;
  }

  public static async createTodo(params: TodoActions): Promise<TodoActions> {
    const response = await api.post<TodoActions>(TODOS, { ...params });
    return response.data;
  }

  public static async editTodo(params: TodoActions): Promise<TodoActions> {
    const response = await api.patch<TodoActions>(`${TODOS}/${params.id}`, { ...params });
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
