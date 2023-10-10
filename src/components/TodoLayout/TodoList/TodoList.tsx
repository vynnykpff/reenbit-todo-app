import { Todo } from "@/components/TodoLayout/TodoList/components/Todo/Todo.tsx";
import { TodoListHeader } from "@/components/TodoLayout/TodoList/components/TodoListHeader/TodoListHeader.tsx";
import { TodoListNoData } from "@/components/TodoLayout/TodoList/components/TodoListNoData/TodoListNoData.tsx";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const { searchedTodos, todos, filterValue, searchValue } = useAppSelector(state => state.todoReducer);

  const visibleTodos = searchValue.length ? searchedTodos : todos;

  const setNoDataMessage = () => {
    return searchValue.length ? `Nothing found in the filter: ${filterValue}` : filterValue;
  };

  return (
    <section className={styles.todoListSection}>
      <TodoListHeader />
      <ul className={styles.todoListContainer}>
        {visibleTodos.length ? (
          visibleTodos.map(todo => <Todo key={todo.todoId} {...todo} />)
        ) : (
          <TodoListNoData title={setNoDataMessage()} />
        )}
      </ul>
    </section>
  );
};
