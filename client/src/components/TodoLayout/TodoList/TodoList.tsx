import { Todo } from "@/components/TodoLayout/TodoList/components/Todo/Todo.tsx";
import { TodoListHeader } from "@/components/TodoLayout/TodoList/components/TodoListHeader/TodoListHeader.tsx";
import { TodoListEmpty } from "@/components/TodoLayout/TodoList/components/TodoListEmpty/TodoListEmpty.tsx";
import { Loader } from "@/components/ui/Loader/Loader.tsx";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const { todos, filterValue, isPending } = useAppSelector(state => state.todoReducer);

  return (
    <section className={styles.todoListSection}>
      <TodoListHeader />
      {isPending ? (
        <Loader />
      ) : (
        <ul className={styles.todoListContainer}>
          {todos.length ? todos.map(todo => <Todo key={todo._id} {...todo} />) : <TodoListEmpty filterValue={filterValue} />}
        </ul>
      )}
    </section>
  );
};
