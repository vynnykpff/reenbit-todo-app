import { Todo } from "@/components/TodoLayout/TodoList/components/Todo/Todo.tsx";
import { TodoListHeader } from "@/components/TodoLayout/TodoList/components/TodoListHeader/TodoListHeader.tsx";
import { TodoListNoData } from "@/components/TodoLayout/TodoList/components/TodoListNoData/TodoListNoData.tsx";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const { todos, filterValue } = useAppSelector(state => state.todoReducer);

  return (
    <section className={styles.todoListSection}>
      <TodoListHeader />
      <ul className={styles.todoListContainer}>
        {todos.length ? todos.map(todo => <Todo key={todo.todoId} {...todo} />) : <TodoListNoData title={filterValue} />}
      </ul>
    </section>
  );
};
