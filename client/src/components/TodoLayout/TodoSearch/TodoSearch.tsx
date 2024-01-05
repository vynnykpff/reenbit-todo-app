import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useDebounce } from "@/hooks/useDebounce.ts";
import { getTodosThunk, searchTodoThunk } from "@/store/thunks/todosThunks.ts";
import cn from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import styles from "./TodoSearch.module.scss";

export const TodoSearch = () => {
  const [value, setValue] = useState("");
  const { filterValue, searchValue } = useAppSelector(state => state.todoReducer);
  const debouncedValue = useDebounce<string>(value, 500);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.authReducer);
  const token = localStorage.getItem("access-token") ?? "";

  useEffect(() => {
    if (value.length && !searchValue.length) {
      setValue("");
    }
  }, [filterValue, searchValue]);

  useEffect(() => {
    if (value.length) {
      void dispatch(searchTodoThunk(value));
      return;
    }

    void dispatch(getTodosThunk({ token, userId: user?._id! }));
  }, [debouncedValue]);

  const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClearSearchValue = () => {
    setValue("");
    void dispatch(getTodosThunk({ token, userId: user?._id! }));
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
