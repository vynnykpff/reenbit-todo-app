import { Todo } from "@/components/TodoLayout/TodoList/components/Todo/Todo.tsx";
import { TodoListHeader } from "@/components/TodoLayout/TodoList/components/TodoListHeader/TodoListHeader.tsx";
import { TodoListEmpty } from "@/components/TodoLayout/TodoList/components/TodoListEmpty/TodoListEmpty.tsx";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const { searchedTodos, todos, filterValue, searchValue } = useAppSelector(state => state.todoReducer);

  const visibleTodos = searchValue.length ? searchedTodos : todos;

  const setTodoEmptyMessage = () => {
    return searchValue.length ? `Nothing found in the filter: ${filterValue}` : filterValue;
  };

  return (
    <section className={styles.todoListSection}>
      <TodoListHeader />
      <ul className={styles.todoListContainer}>
        {visibleTodos.length ? (
          visibleTodos.map(todo => <Todo key={todo.todoId} {...todo} />)
        ) : (
          <TodoListEmpty title={setTodoEmptyMessage()} />
        )}
      </ul>
    </section>
  );
};
