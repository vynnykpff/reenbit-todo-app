import { CurrentTodoFilterArray } from "@/common/constants/TodoConstants.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { deleteCompletedTodos, setFiltrationValue } from "@/store/actions/todoActionCreators.ts";
import { v4 as uuidv4 } from "uuid";
import styles from "./FilteredTodo.module.scss";

export const FilteredTodo = () => {
  const { filterValue, originalTodos } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const handleDeleteCompletedTodos = () => {
    dispatch(deleteCompletedTodos());
  };

  return (
    <div className={styles.filteredTodoContainer}>
      {CurrentTodoFilterArray.map(value => (
        <Button
          key={uuidv4()}
          disabled={filterValue === value}
          className={styles.filteredTodoButton}
          onClick={() => dispatch(setFiltrationValue(value))}
        >
          {value}
        </Button>
      ))}
      <Button
        disabled={!originalTodos.filter(todo => todo.isCompleted).length}
        className={styles.filteredTodoButton}
        onClick={handleDeleteCompletedTodos}
      >
        Clear Completed
      </Button>
    </div>
  );
};
