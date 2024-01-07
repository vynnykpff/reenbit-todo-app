import { Todo } from "@/components/TodoLayout/TodoList/components/Todo/Todo.tsx";
import { TodoListHeader } from "@/components/TodoLayout/TodoList/components/TodoListHeader/TodoListHeader.tsx";
import { TodoListEmpty } from "@/components/TodoLayout/TodoList/components/TodoListEmpty/TodoListEmpty.tsx";
import { Loader } from "@/components/ui/Loader/Loader.tsx";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const { filteredTodos, filterValue, isPending } = useAppSelector(state => state.todoReducer);

  const setTodoEmptyMessage = () => {
    return !filteredTodos.length ? `Nothing found in the filter: ${filterValue}` : filterValue;
  };

  return (
    <section className={styles.todoListSection}>
      <TodoListHeader />
      {isPending ? (
        <Loader />
      ) : (
        <ul className={styles.todoListContainer}>
          {filteredTodos.length ? (
            filteredTodos.map(todo => <Todo key={todo._id} {...todo} />)
          ) : (
            <TodoListEmpty title={setTodoEmptyMessage()} />
          )}
        </ul>
      )}
    </section>
  );
};
