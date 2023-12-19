import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useDebounce } from "@/hooks/useDebounce.ts";
import { setSearchValue } from "@/store/actions/todoActionCreators.ts";
import cn from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import styles from "./TodoSearch.module.scss";

export const TodoSearch = () => {
  const [value, setValue] = useState("");
  const { filterValue, searchValue } = useAppSelector(state => state.todoReducer);
  const debouncedValue = useDebounce<string>(value, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (value.length && !searchValue.length) {
      setValue("");
    }
  }, [filterValue, searchValue]);

  useEffect(() => {
    dispatch(setSearchValue(value));
  }, [debouncedValue]);

  const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClearSearchValue = () => {
    if (searchValue.length) {
      dispatch(setSearchValue(""));
    }
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
