import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useChangeEffect } from "@/hooks/useChangeEffect.ts";
import { useDebounce } from "@/hooks/useDebounce.ts";
import { getTodosThunk, searchTodoThunk } from "@/store/thunks/todosThunks.ts";
import cn from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import styles from "./TodoSearch.module.scss";

const SEARCH_DELAY = 500;

export const TodoSearch = () => {
  const [value, setValue] = useState("");
  const { filterValue, searchValue } = useAppSelector(state => state.todoReducer);
  const debouncedValue = useDebounce<string>(value, SEARCH_DELAY);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (value.length && !searchValue.length) {
      setValue("");
    }
  }, [filterValue, searchValue]);

  useChangeEffect(() => {
    if (value.length) {
      void dispatch(searchTodoThunk(value));
      return;
    }

    void dispatch(getTodosThunk());
  }, [debouncedValue]);

  const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClearSearchValue = () => {
    setValue("");
    void dispatch(getTodosThunk());
  };

  return (
    <span className={styles.searchTodoContainer}>
      <IoIosClose
        onClick={handleClearSearchValue}
        className={cn(styles.searchClearIcon, !searchValue.length && styles.searchClearIconDisabled)}
      />
      <Input
        value={value}
        onChange={handleChangeSearchValue}
        className={styles.searchTodoInput}
        placeholder="Enter to search for your todos"
      />
    </span>
  );
};
