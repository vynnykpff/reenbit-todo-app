import { ChangeEvent, useState } from "react";
import { setSearchValue } from "@/store/actions/todoActionCreators.ts";
import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useChangeEffect } from "@/hooks/useChangeEffect.ts";
import { useDebounce } from "@/hooks/useDebounce.ts";
import { getFilteredTodosThunk, searchTodoThunk } from "@/store/thunks/todosThunks.ts";
import { IoIosClose } from "react-icons/io";
import styles from "./TodoSearch.module.scss";

const SEARCH_DELAY = 500;

export const TodoSearch = () => {
  const [value, setValue] = useState("");
  const { filterValue } = useAppSelector(state => state.todoReducer);
  const debouncedValue = useDebounce<string>(value, SEARCH_DELAY);
  const dispatch = useAppDispatch();

  useChangeEffect(() => {
    if (value.length) {
      dispatch(setSearchValue(value));
      void dispatch(searchTodoThunk({ title: value, filter: filterValue }));
      return;
    }

    void dispatch(getFilteredTodosThunk({ filter: filterValue }));
    dispatch(setSearchValue(""));
  }, [debouncedValue]);

  const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClearSearchValue = () => {
    if (value.length) {
      setValue("");
    }
  };

  return (
    <span className={styles.searchTodoContainer}>
      <IoIosClose onClick={handleClearSearchValue} className={styles.searchClearIcon} />
      <Input
        value={value}
        onChange={handleChangeSearchValue}
        className={styles.searchTodoInput}
        placeholder="Enter to search for your todos"
      />
    </span>
  );
};
