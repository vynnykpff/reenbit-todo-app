import { TodoModel } from "@models";
import { TodoDto, TodosDto } from "@dtos";
import { DeleteTodoParams, TodoDtoModel, TodoModelFields, TodosParams } from "@types";
import { ApiError } from "@exceptions";
import { getAmountTodos, getFilteredTodos, getSearchedTodos } from "@utils";
import { ServerExceptionMessage, TodoSuccessMessage, TodosPaths } from "@constants";

const { PARAMETER_MISSING_MESSAGE } = ServerExceptionMessage;
const { DELETED_TODO, DELETED_COMPLETED_TODOS } = TodoSuccessMessage;
const { DELETE_COMPLETED_TODOS } = TodosPaths;

class TodosService {
  async getTodos({ userId, filter, search }: TodosParams) {
    const searchedTodos = await getSearchedTodos({ search, userId });
    const filteredTodos = await getFilteredTodos({ filter, todos: searchedTodos });

    const todosDto = new TodosDto(filteredTodos);

    return { ...todosDto, amountTodos: { ...getAmountTodos(searchedTodos) } };
  }

  async createTodo({ userId, createdDate, expirationDate, title, isCompleted }: TodoModelFields) {
    if (!userId || !createdDate || !expirationDate || !title || isCompleted === undefined) {
      throw ApiError.BadRequest(PARAMETER_MISSING_MESSAGE);
    }

    const newTodo = new TodoModel({ userId, title, createdDate, expirationDate, isCompleted });
    await newTodo.save();

    const todoDto = new TodoDto(newTodo);

    return { ...todoDto };
  }

  async editTodo({ title, id, expirationDate, isCompleted }: Omit<TodoDtoModel, "createdDate">) {
    if (!id || !expirationDate || !title || isCompleted === undefined) {
      throw ApiError.BadRequest(PARAMETER_MISSING_MESSAGE);
    }

    const editedFields = { title, expirationDate, isCompleted };

    const editedTodo = (await TodoModel.findByIdAndUpdate(id, editedFields, { new: true }))!;
    const editedTodoDto = new TodoDto(editedTodo);

    return { ...editedTodoDto };
  }

  async deleteTodo({ todoId, userId }: DeleteTodoParams) {
    if (!todoId) {
      throw ApiError.BadRequest(PARAMETER_MISSING_MESSAGE);
    }

    if (todoId !== (DELETE_COMPLETED_TODOS as string)) {
      await TodoModel.findByIdAndDelete(todoId);
      return { message: DELETED_TODO };
    }

    await TodoModel.deleteMany({ userId, isCompleted: true });
    return { message: DELETED_COMPLETED_TODOS };
  }
}

export const todosService = new TodosService();
