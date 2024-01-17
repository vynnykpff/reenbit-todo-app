import { v4 as uuidv4 } from "uuid";
import { TodoCurrentFilterArray } from "@/common/constants/TodoConstants/TodoFilters.ts";
import { Button } from "@/components/ui/Button/Button.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { setFiltrationValue } from "@/store/actions/todoActionCreators.ts";
import { searchTodoThunk } from "@/store/thunks/todosThunks.ts";
import styles from "./TodoFiltered.module.scss";

export const TodoFiltered = () => {
  const { filterValue, searchValue } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const handleFilterValue = async (filter: string) => {
    dispatch(setFiltrationValue(filter));
    void dispatch(searchTodoThunk({ filter, title: searchValue }));
  };

  return (
    <div className={styles.filteredTodoContainer}>
      {TodoCurrentFilterArray.map((value: string) => (
        <Button
          key={uuidv4()}
          disabled={filterValue === value}
          className={styles.filteredTodoButton}
          onClick={() => handleFilterValue(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};
