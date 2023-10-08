import { Input } from "@/components/ui/Input/Input.tsx";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useDebounce } from "@/hooks/useDebounce.ts";
import { setSearchValue } from "@/store/actions/todoActionCreators.ts";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./SearchTodo.module.scss";

export const SearchTodo = () => {
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <Input value={value} onChange={handleChange} className={styles.searchTodoInput} placeholder="Enter to search for your todos" />;
};
